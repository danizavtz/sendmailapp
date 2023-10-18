import layout from '../views/layout.js';
import Contato from '../models/contato.js';
import sucesso from '../views/sucesso.js';

export default {
  index(req, res) {
    return res.send(layout({ contato: new Contato() }));
  },

  sendMail(req, res) {
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
    if (contato.errors && (contato.errors.email.length > 0 || contato.errors.message.length > 0 || contato.errors.title.length > 0 || contato.errors.service.length > 0)) {
      return res.send(layout({ contato: contato }))
    }
    return res.send(sucesso())
  }
};
