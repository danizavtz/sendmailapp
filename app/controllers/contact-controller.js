import layout from '../views/layout.js';
import Contato from '../models/contato.js';
import sucesso from '../views/sucesso.js';
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
const config = { region: 'us-east-1' } // configure a region em que está configurado o SES
const client = new SESv2Client(config);

export default {
  index(req, res) {
    return res.send(layout({ contato: new Contato() }));
  },

  async sendMail(req, res) {
    const contato = new Contato(req.body)
    if (contato.email.trim() === '') {
      contato.errors.email.push('E-mail não pode ser vazio')
    }
    if (contato.title.trim() === '') {
      contato.errors.title.push('Título não pode ser vazio')
    }
    if (contato.message.trim() === '') {
      contato.errors.message.push('Mensagem não pode ser vazio')
    }
    if (contato.errors && (contato.errors.email.length > 0 || contato.errors.message.length > 0 || contato.errors.title.length > 0)) {
      return res.send(layout({ contato: contato }))
    } //até aqui faz validação dos campos obrigatórios, renderiza o form com as mensagens de erro e os dados do formulário

    const input = { // SendEmailRequest
      FromEmailAddress: "contato@danizavtz.com.br",
      ReplyToAddresses: [
        "daniellucena@yahoo.com.br",
      ],
      Destination: { // Destination
          ToAddresses: [ // EmailAddressList
            "daniellucena@yahoo.com.br",
          ]
      },
      Content: { // EmailContent
        Simple: { // Message
          Subject: { // Content
            Data: req.body.title, // required
            Charset: "UTF-8",
          },
          Body: { // Body
            Text: {
              Data: `Mensagem de: ${req.body.email}, \nMensagem: ${req.body.message}`, // required
              Charset: "UTF-8",
            }
          }
        }
      }
    };
    const command = new SendEmailCommand(input);
    try {
        await client.send(command);
        res.send(sucesso())
    } catch (err) {
        console.log(err); //esta linha não é necessária, é utilizada apenas para debug
        contato.errors.service.push('Houve um erro durante o envio')
        return res.send(layout({ contato: contato }))
    }
  }
};
