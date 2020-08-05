import marked from 'marked';
import template from './post-template.js';

const baseGithubUrl = 'https://raw.githubusercontent.com/rdhaliwal/cf-worker-blog/master';

addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname === '' || url.pathname === '/') {
    // Render homepage
    event.respondWith(generatePost('posts/home'))
  } else {
    event.respondWith(generatePost(url.pathname))
  }
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function generatePost(urlPath) {
  const url = `${baseGithubUrl}/${urlPath}.md`;

  const response = await fetch(url)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error(response.status);
      }
    })
    .then(data => marked(data))
    .then(data => new Response(template(data), { status: 200 }))
    .catch(e => {
      return new Response(template(e.message), { status: e.message })
    });

  response.headers.set('Content-Type', 'text/html');

  return response;
}

