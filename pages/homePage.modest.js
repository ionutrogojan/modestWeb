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