import ContactModel, { ContactDocumentType } from "@/app/_database/models/contact";
import { connectToMongoDB } from "../../db";




export async function newContactForm(form:ContactDocumentType) {
    
    try {
        
        // connect to database
        await connectToMongoDB();

        // initialize contact form model
        const contactForm = new ContactModel();
        contactForm.firstName = form.firstName;
        contactForm.lastName = form.lastName;
        contactForm.company = form.company;
        contactForm.email = form.email;
        contactForm.phone = form.phone;
        contactForm.reason = form.reason;
        contactForm.message = form.message;

        if (contactForm) {
            contactForm.save()
            return contactForm
        } else {
            return null
        }
    } catch (error) {
        console.log("Error Message: Try catch error block --", error);
        
        return null
    }
}