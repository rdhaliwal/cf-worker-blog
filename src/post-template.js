const template = (head, body) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        html { box-sizing: border-box; }
        *,  *:before, *:after { box-sizing: inherit; }
        html,  body { width: 100%; height: 100%; }

        /* System Fonts as used by GitHub: https://css-tricks.com/snippets/css/system-font-stack/ */
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          line-height: 1.5em;
        }

        body {
          max-width: 1024px;
          margin: 0 auto;
          padding: 20px;
          overflow-wrap: break-word;
          color: #444444;
          background: #FFFFFF;
        }

        h1, h2, h3 {
          margin-top: 0;
          margin-bottom: 20px;
          line-height:1.75em;
        }

        h2 { margin-bottom: 15px; }
        h3 { margin-bottom: 10px; }
        hr {
          margin: 20px 0;
          border: 2px solid #444444;
        }

        .Template-spacer { padding: 50px; }

        @media (prefers-color-scheme: dark){
          body {
            color: #FFFFFF;
            background: #444444;
          }
          a:link{ color:#5bf; }
          a:visited{ color:#ccf; }
          hr { border: 2px solid #FFFFFF; }
        }
      </style>

      ${head}
    </head>
    <body>
      ${body}
      <div class="Template-spacer"></div>
    </body>
  </html>
`;

export default template;
