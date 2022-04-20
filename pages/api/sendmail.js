import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const createMail = (to) => ({
  to, // Change to your recipient
  from: 'elvin.ciqueira@ferreri.co', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: "Olá. Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas. Até logo!",
});

export default async function useHandler(req, res) {
  const { body: { email } } = req;  
    
  try {
    const [response] = await sgMail.send(createMail(email));
    res.status(response.statusCode).json({ success: true });
  } catch (error) {
    res.status(error.code).json({ error: error.message });
  }
}