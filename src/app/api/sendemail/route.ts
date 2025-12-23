import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";
import { z } from "zod";

import { ContactEmailTemplate } from "../../../modules/home/components/ContactForm/ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactEmailTemplateInputType = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as unknown;
    const inputData = ContactEmailTemplateInputType.parse(body);

    const { data, error } = await resend.emails.send({
      from: "contact@kopff.shop",
      to: ["davidrecheni@gmail.com"],
      subject: `New message from the contact form from ${inputData.name}`,
      react: React.createElement(ContactEmailTemplate, {
        name: inputData.name,
        email: inputData.email,
        message: inputData.message,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
