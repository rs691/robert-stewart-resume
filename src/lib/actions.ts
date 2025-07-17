"use server";

import type { z } from "zod";
import { ContactFormSchema } from "./definitions";

type FormState = {
  success: boolean;
  message: string;
};

export async function sendEmail(
  data: z.infer<typeof ContactFormSchema>
): Promise<FormState> {
  const result = ContactFormSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: "Invalid form data.",
    };
  }

  // In a real application, you would use a service like Resend, SendGrid, or Nodemailer
  // For this example, we'll just log the data and simulate a success response.
  console.log("Received contact form submission:");
  console.log(result.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: "Message sent successfully!",
  };
}
