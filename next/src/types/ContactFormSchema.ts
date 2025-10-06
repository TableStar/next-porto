import { z } from "zod";

export const contactFormSchema = z.object({
    firstName:z.string().min(1,{message:"first name is required"}),
    lastName:z.string().min(1,{message:"last name is required"}),
    email:z.string().min(1,{message:"email is required"}).email({message:"invalides email address"}),
    phone:z.string().optional(),
    message:z.string().min(1,{message: "message is required"})
})


export type ContactFormData = z.infer<typeof contactFormSchema>