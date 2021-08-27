(function addCssLink(cssId, href) {
    if (!document.getElementById(cssId)) {
      var head = document.head;
      var link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = href;
      link.media = "all";
      head.appendChild(link);
    }
  })("dynamically-loaded-apis-font", "https://unpkg.com/apis-font/fonts/font.css");