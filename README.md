# modestJS
Blazingly fast and simple JavaScript library, the feeling of React with vanilla methods.

## Documentation

Get started quickly with this short guide

### 1. Import pages and components to the app.js file

```js
// import Modest from 'modest';

// pages
import HomePage from "./pages/homePage.modest.js";
import AboutPage from "./pages/aboutPage.modest.js";
// components
import Navigation from "./components/navigation.modest.js";
```

### 2. Hook up the hash based router

```js
// router
const router = (path) => {
    switch(path){
        case "#about":
            document.title = "About | Modest";
            return AboutPage({
                title: "Hello modest world!",
                text: "Learn more about",
                link: "https://github.com/ionutrogojan/modestJS"
            });
        case "#home":
        default:
            document.title = "Home | Modest";
            return HomePage({
                title: "Hello modest world!",
                text: "This is an example of",
                link: "https://github.com/ionutrogojan/modestJS"
            });
    }
}
```

### 3.Load the navigation component and update the page content
```js
window.addEventListener('load', () => {
    Navigation({
        link1: "home",
        link2: "about"
    });
    router(window.location.hash);
});

window.addEventListener('hashchange', () => {
    router(window.location.hash);
    // console.log(window.location.hash);
})
```

### Page Example

```js
// import Modest from 'modest';
const pageContent = document.querySelector('#modest_content');

const HomePage = ({title, text, link}) => {
    const html = `
        <div class="container">
            <h1 class="title">${title}</h1>
            <p class="text">${text} <a class="link" href=${link} target="_blank">ModestJS</a></p>
        </div>
    `;
    return pageContent.innerHTML = html;
}

export default HomePage;
```

## License
ModestJS is under the [MIT LICENSE](https://github.com/ionutrogojan/modestJS/blob/main/LICENSE)
