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

  const rawMarkdown = await fetch(url)
    .then(response => response.text())
    .then(data => data);
  const parsedMarkdown = marked(rawMarkdown);

  const response = new Response(template(parsedMarkdown), { status: 200 })
  response.headers.set('Content-Type', 'text/html');

  return response;
}

