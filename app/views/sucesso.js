export default function sucesso() {
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
        <div class="row justify-content-md-center">
        <div class="col col-md-auto text-center">
          <div id="sucesso" class="d-flex justify-content-center h1"> Mensagem enviada com sucesso
          </div>
          <br>
          <a href="/" class="btn btn-primary justify-content-center" role="button">Voltar</a>
        </div>
      </div>
        </main>
      </body>
      </html>
    `;
  }
  