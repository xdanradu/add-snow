# How to use it

Github repo: https://github.com/xdanradu/add-snow

Try it on stackblitz: https://stackblitz.com/edit/js-gyvspc?embed=1&file=index.js

## Install the library

`npm install -d add-snow`

## Import it into a js app

### index.html
```html

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
    <style>
        body {
            background-color: #222;
        }
    </style>
    <script src="node_modules/add-snow/dist/add-snow.js"></script>
    <script>
        window.onload = () => {
            snow.start();
        };
    </script>
</head>
<body></body>
</html>
```

