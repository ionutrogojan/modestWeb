# modestWeb
Blazingly fast and simple web library, the feeling of React compiled to vanilla code.

## Documentation

Get started quickly with this short guide

### 1. File structure

Every project starts with a `main.modest` file, holding the layout and persisting components of a page
```css
/main.modest
/pages
    /index.modest
    /404.modest
    /about.modest
    /faq.modest
/output
    /style.css
    /index
        /index.html
        /index.js
```
### 2. File contents

ModestWeb tries to provide a single environment for development, eliminating the need to switch tabs every time you need to modify a page and its components.

`@content` - holds all the html markup present on the respective page or component

`@action` - holds all the js scripts present on the respective page or component

`@look` - holds all the style markup present on the respective page or component
```css
@content{
    <div>
        <p>This a P inside a DIV</p>
    </div>
}

@action{
    const number = 0;
}

@look{
    div{
        background-color: red;
    }
}
```

## Modest Compiler

ModestWeb uses a lightweight blazingly fast rust [modest compilor](https://github.com/ionutrogojan/modestWeb/tree/modest-compiler) that turns your modest code into vanilla web code.

To compile your `.modest` files to vanilla code use the following command.
```rs
modestcompilor ./pages/index.modest
// output -> index.html / index.js / style.css
```

## License
ModestJS is under the [MIT LICENSE](https://github.com/ionutrogojan/modestJS/blob/main/LICENSE)
