/**
 * Handle Request
 * This is the input function where you can perform your implementation.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {*} args function args e.g args.my_secret
 * @returns {Response} https://developer.mozilla.org/en-US/docs/Web/API/Response
 */
async function handleRequest(request, args) {
  const message = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Happy Diwali!</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f8f8f8;
          color: #333;
          text-align: center;
          padding: 50px;
        }
        h1 {
          font-size: 2.5em;
          color: #ffcc00;
        }
        p {
          font-size: 1.2em;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <h1>Happy Diwali!</h1>
      <p>
        Wishing you a festival filled with lights, laughter, and love. 
        May your days be as bright as the diyas and your life be filled 
        with joy and prosperity. Celebrate with family and friends, 
        and may the spirit of Diwali bring you peace and happiness!
      </p>
    </body>
    </html>
  `;

  return new Response(message, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
    status: 200,
  });
}

export { handleRequest };
