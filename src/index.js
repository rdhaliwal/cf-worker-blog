import marked from 'marked';
import template from './post-template.js';

addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname === '' || url.pathname === '/') {
    // Render homepage
    event.respondWith(generatePost('README'))
  } else {
    event.respondWith(generatePost(url.pathname))
  }
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function generatePost(urlPath) {
  const url = `https://raw.githubusercontent.com/rdhaliwal/fantastic-wikis-and-where-to-find-them/master/${urlPath}.md`;

  const rawMarkdown = await fetch(url)
    .then(response => response.text())
    .then(data => data);
  const parsedMarkdown = marked(rawMarkdown);

  const response = new Response(template(parsedMarkdown), { status: 200 })
  response.headers.set('Content-Type', 'text/html');

  return response;
}

