import marked from 'marked';
import template from './post-template.js';

// const baseUrl = 'https://raw.githubusercontent.com/rdhaliwal/cf-worker-blog/master';
const baseUrl = 'https://rdhaliwal.ngrok.io';

addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname === '' || url.pathname === '/') {
    // Render homepage
    event.respondWith(generatePost('home'))
  } else {
    event.respondWith(generatePost(url.pathname))
  }
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function generatePost(pathname) {
  const url = `${baseUrl}/${pathname}.md`;

  const response = await fetch(url)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(response.status);
      }
    })
    .then(data => marked(data))
    .then(data => {
      const START_TOKEN = '<!--<helmet>';
      const END_TOKEN = '</helmet>-->';
      const metaStart = data.indexOf(START_TOKEN);
      const metaEnd = data.indexOf(END_TOKEN);

      if (metaStart < 0 || metaEnd < 0) {
        return ({ head: '', body: data });
      }

      const head = data.substr(metaStart, metaEnd).replace(START_TOKEN, '');
      const body = data.substr(metaEnd).replace(END_TOKEN, '');

      return { head, body };
    })
    .then(({ head, body }) => (
      new Response(template(head, body), { status: 200 })
    ))
    .catch(e => (
      new Response(template('', e.message), { status: e.message })
    ));

  response.headers.set('Content-Type', 'text/html');

  return response;
}

