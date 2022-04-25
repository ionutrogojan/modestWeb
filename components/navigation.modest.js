// import Modest from 'modest';
const mainRoot = document.querySelector('#modest');

const Navigation = ({ link1, link2 }) => {
    // console.log(link1, link2);
    const html = `
        <div class="navigation">
            <a class="link" href="#${link1}">Home</a>
            <a class="link" href="#${link2}">About</a>
        </div>
    `;
    return mainRoot.innerHTML += html;
}

export default Navigation;