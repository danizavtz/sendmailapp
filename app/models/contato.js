export default class Contato {
  constructor({ email, message, title, errors } = {}) {
    this.email = email || '';
    this.message = message || '';
    this.title = title || '';
    this.errors = {
      email: [],
      message: [],
      title: [],
      service: [],
    };
  }
}
