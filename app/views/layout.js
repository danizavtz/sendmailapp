export default function layout({ contato }) {
  const { email, message, title, errors } = contato;
  return `
    <html lang="pt-br">
    <head>
      <title>Sendmail app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    </head>
    
    <body class="">
      <nav class="container-fluid navbar navbar-expand navbar-light bg-light">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
        </ul>
      </nav>
      <main class="mt-4 container py-4 position-relative">
      <h2>Contato</h2>
      <form method="post" class="has-validation mt-3" action="/">
      <div class="mb-3">
          <label for="servicestatus" class="form-label"></label>
          <input type="hidden" class="form-control ${errors.service.length ? 'is-invalid': ''}" id="servicestatus" name="servicestatus" value="">
          <div class="invalid-feedback">
            ${errors.service.length > 0 ? errors.service[0]: ''}
          </div>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input type="text" class="form-control ${errors.email.length ? 'is-invalid': ''}" id="email" name="email" value="${email}">
          <div class="invalid-feedback">
            ${errors.email.length > 0 ? errors.email[0]: ''}
          </div>
        </div>
        <div class="mb-3">
          <label for="title" class="form-label">Título</label>
          <input type="text" class="form-control ${errors.title.length ? 'is-invalid': ''}" id="title" name="title" value="${title}">
          <div class="invalid-feedback">
            ${errors.title.length > 0 ? errors.title[0]: ''}
          </div>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Mensagem</label>
          <textarea class="form-control ${errors.message.length ? 'is-invalid': ''}" id="message" name="message">${message}</textarea>
          <div class="invalid-feedback">
            ${errors.message.length > 0 ? errors.message[0]: ''}
          </div>
        </div>
        <button id="btnenviar" type="submit" class="btn btn-primary">
        
        Enviar </button>
      </form>
      </main>
    </body>
    </html>
  `;
}
