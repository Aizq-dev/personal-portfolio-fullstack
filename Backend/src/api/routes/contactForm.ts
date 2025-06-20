import express from "express"
import { createContact, deleteContact, getAllContacts, getContactByID } from "../controller/contactForm";
import { isAuth } from "../../middlewares/auth";

export const contactRoutes = express.Router();

contactRoutes.get("/",isAuth,getAllContacts);
contactRoutes.get("/:id",isAuth,getContactByID);
contactRoutes.post("/", createContact);
contactRoutes.delete("/:id",isAuth,deleteContact);
