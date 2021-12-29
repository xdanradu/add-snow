# add-snow library

Try it on stackblitz: https://stackblitz.com/edit/js-iabuun?file=index.js

Github repo: https://github.com/xdanradu/add-snow

## Install the library

`npm install -d add-snow`

### Using the library in a JS app

#### index.js

```js
import * as snow from 'add-snow';
snow.start();
```

### Using the library in HTML

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

