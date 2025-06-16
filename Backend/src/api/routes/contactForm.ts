import express from "express"
import { createContact, deleteContact, getAllContacts, getContactByID } from "../controller/contactForm";

export const contactRoutes = express.Router();

contactRoutes.get("/",getAllContacts);
contactRoutes.get("/:id",getContactByID);
contactRoutes.post("/", createContact);
contactRoutes.delete("/:id",deleteContact);
