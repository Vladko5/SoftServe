import { html, render } from 'https://unpkg.com/lit-html?module';

const imgTemplate = (img, name) => html`
<div class="mix-target nature">
    <div class="content">
        <img src=${img} alt=${name}>
        <h4>${name}</h4>
    </div>
</div>
`;

const natureImgTemplate = () => html`
    ${imgTemplate('./images/rhodope2.jpg', 'Rhodope Mountain')}
    ${imgTemplate('./images/belogradchik-rocks.png', 'Belogradchik Rocks')}
    ${imgTemplate('./images/silistar.jpg', 'Silistar Beach')}
`;

const architectureImgTemplate = () => html`
    ${imgTemplate('./images/rila-monastery.jpg', 'Rila Monastery')}
    ${imgTemplate('./images/bridge.jpg', 'Bridge Of Lovech')}
    ${imgTemplate('./images/troyan-monastery.jpg', 'Troyan Monastery')}
`;

const foodImgTemplate = () => html`
    ${imgTemplate('./images/food2.png', 'Shkembe Chorba')}
    ${imgTemplate('./images/shopska-salad.jpg', 'Shopska Salad')}
    ${imgTemplate('./images/kiselo-mlqko.jpg', 'Yogurt')}
`;

const allPicsTemplate = () => html`
    ${natureImgTemplate()}
    ${architectureImgTemplate()}
    ${foodImgTemplate()}
`;

const galeryTemplate = () => html`
<section class="category-container">
    <section id="myBtnContainer">
        <button id="filter-all" class="filter-btn"> Show all</button>
        <button id="filter-nature" class="filter-btn"> Nature</button>
        <button id="filter-architecture" class="filter-btn"> Architecture</button>
        <button id="filter-food" class="filter-btn"> Foods and Drinks</button>
    </section>

    <section id="galery" class="galery">
        ${allPicsTemplate()}
    </section>
</section>`;

export async function galeryPage(ctx) {
    ctx.render(galeryTemplate());

    const galerySection = document.getElementById('galery');
    $('#filter-all').click(async function () {
        render(allPicsTemplate(), galerySection);
    });
    $('#filter-nature').click(async function () {
        render(natureImgTemplate(), galerySection);
    });
    $('#filter-architecture').click(async function () {
        render(architectureImgTemplate(), galerySection);
    });
    $('#filter-food').click(async function () {
        render(foodImgTemplate(), galerySection);
    });
}

