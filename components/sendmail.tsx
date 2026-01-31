"use server";

import React from "react";
import { Resend } from "resend";
import { emailTemp } from "@/components/email-template";

const resendAPI = process.env.RESEND_API_KEY;

const resend = new Resend(resendAPI);
type propType = {
  email: string;
  body: string;
  name: string;
};

export const sendEmail = async ({ email, body, name }: propType) => {
  let data;
  try {
    data = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: "shahoriar.ratul@gmail.com",
      replyTo: `${email}`,
      subject: "Message from contact form",
      react: emailTemp({ body, email, name }),
    });
    console.log(data);
  } catch (error: unknown) {
    return {
      error: error,
    };
  }

  return {
    data,
  };
};
