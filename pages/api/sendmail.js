import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const controller = {
  async sendMail(req, res) {

    const createMail = (to) => ({
      to, // Change to your recipient
      from: 'elvin.ciqueira@ferreri.co', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: "Olá. Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas. Até logo!",
    });

    try {
      const [response] = await sgMail.send(createMail(req.body.email));
      res.status(response.statusCode).json({ success: true });
    } catch (error) {
      res.status(error.code).json({ error: error.message });
    }
  }
}

controllerBy = {
  POST: controller.sendMail
}

export default async function handler(request, response) {
  if (controllerBy[request.method]) return controllerBy[request.method](request, response);

  response.status(404).json({
    status: 404,
    message: 'Not Found'
  });
}