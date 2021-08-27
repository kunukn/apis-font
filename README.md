# Apis font

## main font from CDN

load the font by inluding this in html

```html
 <link rel="stylesheet" 
       href="https://unpkg.com/apis-font/fonts/font.css">
```

or import it from css

```html
<style>
  @import "https://unpkg.com/apis-font/fonts/font.css";
</style>
```

or load it dynamically from javascript
```html
<script 
  src="https://unpkg.com/apis-font/fonts/font.js">
</script>
```

apply the font in css

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

use the font

```html
<p>this is a normal font</p>
<p class="font-bold">this is a bold font</p>
<p class="font-medium">this is a light font</p>
<p class="font-italic">this is a italic style</p>
```


## main font from npm

* npm install apis-font
* the files are in node_modules/apis-font/fonts

load the font by inluding this in html

```html
<link rel="stylesheet" 
      href="node_modules/apis-font/fonts/font.css">
```


## more

To see all the available CDN files go to 

https://unpkg.com/apis-font/
