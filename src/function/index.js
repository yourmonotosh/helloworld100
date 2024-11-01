/**
 * Handle Request
 * This is the input function where you can perform your implementation.
 * @param {Request} request https://developer.mozilla.org/en-US/docs/Web/API/Request
 * @param {*} args function args e.g args.my_secret
 * @returns {Response} https://developer.mozilla.org/en-US/docs/Web/API/Response
 */
async function handleRequest(request, args) {
  const message = `Happy Diwali!
Wishing you a festival filled with lights, laughter, and love. May your days be as bright as the diyas and your life be filled with joy and prosperity. Celebrate with family and friends, and may the spirit of Diwali bring you peace and happiness!
`;

  return new Response(message, {
    headers: {
      "content-type": "text/plain;charset=UTF-8",
    },
    status: 200,
  });
}

export { handleRequest };
