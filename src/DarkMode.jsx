import React from "react";

export default function DarkMode() {
  return (
    <>
      <link rel="stylesheet" href={"/public/DarkMode.css"} />

      <img id="userPhoto" src="https://i.imgur.com/t8ZX9um.jpg" alt="User" />

      <a href="https://www.instagram.com/thesimpsons" id="userName">
        @thesimpsons
      </a>
      <div id="links">
        <a
          class="link"
          href="https://pt.wikipedia.org/wiki/Homer_Simpson"
          target="_blank"
          rel="noreferrer"
        >
          Wikipedia
        </a>
        <a
          class="link"
          href="https://foxplay.com/br/forme"
          target="_blank"
          rel="noreferrer"
        >
          IMDB
        </a>
      </div>
    </>
  );
}
