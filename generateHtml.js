require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fs = require("fs");
const path = require("path");
const MyComponent = require("./src/MyComponent").default;

// Generate the static HTML content from the React component
const htmlContent = ReactDOMServer.renderToStaticMarkup(
  React.createElement(MyComponent)
);

// Create a full HTML document with the generated content
const fullHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Standalone React Component</title>
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `;

// Write the HTML to an output file
fs.writeFileSync(path.join(__dirname, "standaloneOutput.html"), fullHtml);

console.log("Standalone HTML file generated: standaloneOutput.html");
