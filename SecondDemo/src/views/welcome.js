import { html } from 'https://unpkg.com/lit-html?module';

const middleBoxTemplate = (id, img, name, txt1, txt2) => html`
<section id=${id} class="box">
    <div class="imgBx">
        <img src=${img} alt=${name}>
    </div>
    <div class="middleBx">
        <div class="middle">
            <h2>${name}</h2>
            <p>${txt1}<br>${txt2}</p>
        </div>
    </div>
</section>
`;

const welcomeTemplate = () => html`
<section class="section1">
    <h1>The Treasures Of Bulgaria</h1>
</section>
<section class="section2">
    <div class="pContainer">
        <p>If we, the Bulgarians, want to see the world and his miracles,
            we don't have to go so far, because our Bulgaria is one
            unknown and miraculous world! <b>- Ivan Vazov
        </p>
        <img src="./images/bulgarian-map.jpg" alt="Map">
    </div>
</section>
<section class="row">

    ${middleBoxTemplate('nature', './images/nature.jpeg', 'Nature', 
    'Everyone who deny the Nature and want to rule his life and destiny on his own, will have a\
    disastrous end!', '- Petur Dunov')}
    
    ${middleBoxTemplate('architecture', './images/rila-monastery.jpg', 'Architecture', 
    'I built bridges to gather the people with each oder... and monasteries - to gather the people\
    with God!', '- Kolio Ficheto')}
    
    ${middleBoxTemplate('food', './images/food.png', 'Dishes and Drinks', 
    'A hungry bear does not dance. But when she\'s fed she goes to sleep!', '- Bulgarian Proverb')}
</section>`;

export async function welcomePage(ctx) {
    ctx.render(welcomeTemplate());
}