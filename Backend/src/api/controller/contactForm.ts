import { setError } from "../../config/error";
import { sendAutoReply, sendOwnerNotification } from "../../lib/mailer";
import { CreateContactDTO } from "../../types/dto.dto";
import { AsyncResponseServer } from "../../types/express";
import { IContact } from "../../types/models";
import { Contact } from "../model/contactForm";




export const getAllContacts : AsyncResponseServer = async(req,res,next)=>{
    try {
        const allContacts : IContact[] = await Contact.find();
         res.status(200).json(allContacts)
        
    } catch (error) {
        return next(setError(400,"Cant find contacts 😢"))
    }

}
export const getContactByID : AsyncResponseServer<{id: string}> = async(req,res,next)=>{
    try {
        const {id} = req.params
        const contact : IContact | null = await Contact.findById(id);
        if(!contact){
           return next(setError(400,"Contact not found 😢"))
        }
         res.status(200).json(contact)
        
    } catch (error) {
        return next(setError(400,"Can't find contact by id 😢"))
    }
}


export const createContact: AsyncResponseServer<{}, CreateContactDTO> = async (req, res, next) => {
  try {
   
    const {
      name = "",
      email = "",
      message = "",
      company = "",
      phone = "",
      website = "", // honeypot
    } = (req.body ?? {}) as CreateContactDTO;

    if (website && website.trim().length > 0) {
       res.status(202).json({ ok: true });
    }

    // 2) Validación mínima
    if (!name.trim() || !email.trim() || !message.trim()) {
       next(setError(400, "Faltan campos obligatorios: name, email, message"));
    }
    if (message.length > 5000) {
       next(setError(413, "El mensaje es demasiado largo"));
    }

    // 3) Guardar en BBDD (igual que tenías)
    const newContact = new Contact({ name, email, message, company, phone }) as IContact;
    const contactBBDD = (await newContact.save()) as IContact;
    if (!contactBBDD)  next(setError(400, "Can't create contact"));

    // 4) Enviar email de aviso (no bloqueante: si falla, solo se loguea)
    try {
      await sendOwnerNotification({ name, email, message, company, phone });
      
       await sendAutoReply(email, name);
    } catch (mailErr) {
      console.error("sendOwnerNotification failed:", mailErr);
      // no hacemos next() aquí para no “romper” la creación
    }

    // 5) Responder éxito (201 creado)
     res.status(201).json({ ok: true, contact: contactBBDD });
  } catch (error) {
     next(setError(400, "Can't create contact 😢"));
  }
};


export const deleteContact: AsyncResponseServer<{id : string}> = async (req,res , next )=>{
try {
    const {id} = req.params;
    
    const contact = await Contact.findByIdAndDelete(id);
    if(!contact){
       return  next(setError(400,"Can't delete contact  😢"));
    }
    res.status(200).json(contact);
} catch (error) {
   return   next(setError(400,"Can't delete contact  😢"));
}

} 

