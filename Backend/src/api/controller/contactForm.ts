import { setError } from "../../config/error";
import { CreateContactDTO } from "../../types/dto.dto";
import { AsyncResponseServer } from "../../types/express";
import { IContact } from "../../types/models";
import { Contact } from "../model/contactForm";




export const getAllContacts : AsyncResponseServer = async(req,res,next)=>{
    try {
        const allContacts : IContact[] = await Contact.find();
         res.status(200).json(allContacts)
        
    } catch (error) {
        return next(setError(400,"Cant find projects 😢"))
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
        return next(setError(400,"Can't find project by id 😢"))
    }
}

export const createContact : AsyncResponseServer <{},CreateContactDTO>= async(req,res,next)=>{
    try {
        const newContact = new Contact(req.body);
        const contactBBDD: IContact= await newContact.save();
        if(!contactBBDD){
            return next(setError(400,"Can't create contact "));}
         res.status(201).json(contactBBDD)
        
    } catch (error) {
       return  next(setError(400,"Can't create Project 😢"));
    }
}

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

