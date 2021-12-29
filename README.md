# How to use it

Github repo: https://github.com/xdanradu/add-snow

Try it on stackblitz: https://stackblitz.com/edit/js-iabuun?file=index.js

## Install the library

`npm install -d add-snow`

### Using the library in a SPA

#### index.js

```js
import * as snow from 'add-snow';
snow.start();
```

### Using the library directly in HTML

#### index.html

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

