// import Modest from 'modest';

// pages
import HomePage from "./pages/homePage.modest.js";
import AboutPage from "./pages/aboutPage.modest.js";

// components
import Navigation from "./components/navigation.modest.js";

// router
const router = (path) => {
    switch(path){
        case "#about":
            document.title = "About | Modest";
            return AboutPage({
                title: "Hello modest world!",
                text: "Learn more about",
                link: "https://www.google.com"
            });
        case "#home":
        default:
            document.title = "Home | Modest";
            return HomePage({
                title: "Hello modest world!",
                text: "This is an example of",
                link: "https://www.google.com"
            });
    }
}

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