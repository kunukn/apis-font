# Apis font

## Load font from CDN

load the font by inluding this in HTML

```html
 <link rel="stylesheet" 
       href="https://unpkg.com/apis-font/fonts/font.css">
```

or import it from CSS

```html
<style>
  @import "https://unpkg.com/apis-font/fonts/font.css";
</style>
```

or load it dynamically from JavaScript
```html
<script 
  src="https://unpkg.com/apis-font/fonts/font.js">
</script>
```

apply the font in CSS

```css
body {
  font-family: Apis, sans-serif;
}
.font-bold {
  font-weight: bold;
}
.font-medium {
  font-weight: 500;
}
.font-italic {
  font-style: italic;
}
```

Use the font

```html
<p>this is a normal font</p>
<p class="font-bold">this is a bold font</p>
<p class="font-medium">this is a medium font</p>
<p class="font-italic">this is an italic style</p>
```


## Main font from npm

```bash
npm install apis-font # yarn add apis-font
```

* the files are in node_modules/apis-font/fonts


Load the font by inluding this in html

```html
<link rel="stylesheet" 
      href="node_modules/apis-font/fonts/font.css">
```


## More

To see all the available CDN files go to 

https://unpkg.com/apis-font/
