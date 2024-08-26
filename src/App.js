import React from "react";
import ReactDOMServer from "react-dom/server";

async function generateHTML(componentName, fileName = "standaloneOutput.html") {
  try {
    // Dynamically import the component
    const { default: Component } = await import(`./${componentName}`);

    // Fetch the CSS content dynamically
    const cssResponse = await fetch(`./${componentName}.css`);
    const cssContent = await cssResponse.text();

    // Generate static HTML from the dynamically imported component
    const htmlContent = ReactDOMServer.renderToStaticMarkup(<Component />);

    // Create a full HTML document with the inlined CSS
    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Standalone React Component</title>
        <style>${cssContent}</style>
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `;

    // Create a Blob object with the HTML content
    const blob = new Blob([fullHtml], { type: "text/html" });

    // Create a link to download the HTML file
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error generating HTML:", error);
  }
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <h1>Generate Static HTML</h1>
      <button onClick={() => generateHTML("MyComponent", "MyComponent.html")}>
        Generate MyComponent HTML
      </button>
      <button
        onClick={() =>
          generateHTML("AnotherComponent", "AnotherComponent.html")
        }
      >
        Generate AnotherComponent HTML
      </button>
      <button onClick={() => generateHTML("DarkMode", "DarkMode.html")}>
        Generate DarkMode Template
      </button>
      <button onClick={() => generateHTML("Outrun", "Outrun.html")}>
        Generate Outrun Template
      </button>
    </div>
  );
}

export default App;
