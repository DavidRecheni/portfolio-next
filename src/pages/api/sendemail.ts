import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { z } from "zod";

import { ContactEmailTemplate } from "../../modules/home/components/ContactForm/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactEmailTemplateInputType = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const inputData = ContactEmailTemplateInputType.parse(req.body);
    const { data, error } = await resend.emails.send({
      from: "contact@kopff.shop",
      to: ["davidrecheni@gmail.com"],
      subject: `New message from the contact form from ${inputData.name}`,
      react: ContactEmailTemplate({
        name: inputData.name,
        email: inputData.email,
        message: inputData.message,
      }),
    });
    if (error) {
      res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error });
  }
};
