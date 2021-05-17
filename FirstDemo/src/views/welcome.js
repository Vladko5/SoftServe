import { html } from '../../node_modules/lit-html/lit-html.js';

const welcomeTemplate = () => html`
<section id="main">
    <section class="welcome-container">
        <h1>Welcome To CarPortal</h1>
        <h2>Choose one from below</h2>
    </section>
    <section class="cars-container">
        <img class="welcome-img" src="./images/12_2020_ford_mustang.jpg" alt="Cars">
        <div class="middle">
            <button id="see-cars" type="button">See the best cars</button>
        </div>
    </section>

    <section class="suvs-container">
        <img class="welcome-img" src="./images/10-2021_Volkswagen_Atlas_1_Cropped.jpg" alt="Suvs">
        <div class="middle">
            <button id="see-suvs" type="button">See the best SUVs</button>
        </div>
    </section>
</section>`;

export async function welcomePage(ctx){
    ctx.render(welcomeTemplate());

    document.getElementById('see-cars').addEventListener('click', () => {
        ctx.page.redirect('/cars');
    })

    document.getElementById('see-suvs').addEventListener('click', () => {
        ctx.page.redirect('/suvs');
    })
}