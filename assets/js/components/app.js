import { apiFetch } from '../utils/fetch.js';

export const fetchQuote = async () => {
    const endpoint = 'https://officeapi.akashrajpurohit.com/quote/random';
    const data = await apiFetch(endpoint);

    return {
        character: data.character,
        quote: data.quote,
        avatarUrl: data.character_avatar_url
    };
};

let container = document.createElement('div');
container.classList = "appContainer";
document.body.appendChild(container);

let top = document.createElement('header');
top.classList = "appTop";
container.appendChild(top);

let logo = document.createElement('img');
logo.src = "https://upload.wikimedia.org/wikipedia/commons/8/80/The_Office_US_logo.svg";
logo.classList = "logo";
top.appendChild(logo);

let menu = document.createElement('nav');
menu.classList = "appMenu";
menu.innerHTML = `
                    <ul>
                        <li id="app-start">QUOTES!</li>
                        <li id="api-info">INFO</li>
                        </ul>
                `;
top.append(menu);

let app = document.createElement('main');
app.classList = "app";
container.appendChild(app);

let character = document.createElement('h2');
character.id = "quote-character";

let quote = document.createElement('p');
quote.id = "quote";

let image = document.createElement('img');
image.id = "quote-image";
image.width = 300;
image.height = 200;

const displayQuote = async () => {
    const { character, quote, avatarUrl } = await fetchQuote();
    document.getElementById('quote-character').textContent = character;
    document.getElementById('quote').textContent = `"${quote}"`;
    document.getElementById('quote-image').src = avatarUrl;
};

let newQuote = document.createElement('button');
newQuote.textContent = "New Quote";

app.append(character, quote, image, newQuote);

displayQuote();

newQuote.addEventListener('click', displayQuote);

// Start - Rebuild
document.getElementById('app-start').addEventListener('click', () => {
    app.innerHTML = '';
    app.append(character, quote, image, newQuote);
    displayQuote();
});

// API Info
document.getElementById('api-info').addEventListener('click', () => {
    app.innerHTML = '';
    let apiInfo = document.createElement('div');
    apiInfo.innerHTML = `
                            <h2>Information:</h2>
                            <p>This "app" uses The Office API by<br><b>Akash Rajpurohit</b> for random quotes.</p>
                            <p>Link: <a href="https://akashrajpurohit.github.io/the-office-api/" target="_blank">https://akashrajpurohit.github.io/the-office-api/</a></p>
                            <p>Github: <a href="https://github.com/AkashRajpurohit/the-office-api" target="_blank">https://github.com/AkashRajpurohit/the-office-api</a></p>
                            <p>This little "app" was made with<br>JavaScript and SCSS by <b>Peter Olesen</b></p>
                            <p>Github: <a href="https://github.com/peter-olesen" target="_blank">https://github.com/peter-olesen</a></p>
                        `;
    app.appendChild(apiInfo);
});