# How to use it



Github repo: https://github.com/xdanradu/add-snow

Try it on stackblitz: https://js-gyvspc.stackblitz.io

## Install the library

`npm install -d add-snow`

## Import it into a js app

### index.html
```html
<div aria-hidden="true">
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
  <div class="snowflake">❅</div>
  <div class="snowflake">❆</div>
</div>
```

### style.css
```css
body {
  background-color: #222;
}
```

### index.js

```js
import 'add-snow/snowflakes.css';
import './style.css';
```

## Import it in html

### index.html

```html
<html>
<head>
    <script>
    body {
    	background-color: #222;
    }
    </script>
    <link rel="stylesheet" href="node_modules/add-snow/snowflakes.css">
</head>

<body>

<div class="snowflakes" aria-hidden="true">
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
    <div class="snowflake">❅</div>
    <div class="snowflake">❆</div>
</div>

</body>
</html>
```

