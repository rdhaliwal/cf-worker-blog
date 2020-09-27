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
        }

        body {
          max-width: 700px;
          margin: 0 auto;
          padding: 20px;
          overflow-wrap: break-word;
          color: #444444;
          background: #FFFFFF;
        }

        h1, h2, h3 { line-height:1.2 }

        @media (prefers-color-scheme: dark){
          body {
            color: #FFFFFF;
            background: #444444;
          }
          a:link{ color:#5bf; }
          a:visited{ color:#ccf; }
        }
      </style>

      ${head}
    </head>
    <body>
      ${body}
    </body>
  </html>
`;

export default template;
