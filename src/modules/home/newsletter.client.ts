import client from "@/service/mail.service";

const SEND_MAIL = '/sendmail';

export async function sendMail(email: string) {
  const response = await client.post(SEND_MAIL, { email });
  return response.data;
}