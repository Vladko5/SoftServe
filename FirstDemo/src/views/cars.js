import { html } from '../../node_modules/lit-html/lit-html.js';
import {showImgDetails} from '../utility.js';

const carsTemplate = () => html`
<section class="auto-page-container">
    <ul id="cars-img-id" class="auto-page-ul">
        <h2>Click the images for more details</h2>
        <li>
            <h3>24 800 - 31 400 BGN</h3>
            <img class="auto-page-img" src="./images/2021_Hyundai_Accent_1.jpg" alt="hyundai-accent">
            <h3>Hyundai Accent</h3>
            <p>Best Subcompact Car</p>
            <img class="details" src="./images/hyundai-accent.jpg" style="visibility: hidden;" alt="hyundai-accent-details">
        </li>

        <li>
            <h3>28 800 - 37 500 BGN</h3>
            <img class="auto-page-img" src="./images/2021_kia_forte_angularfront.jpg" alt="kia-forte">
            <h3>Kia Forte</h3>
            <p>Best Compact Car</p>
            <img class="details" src="./images/kia-forte2.jpg" style="visibility:hidden;" alt="kia-forte-details">
        </li>

        <li>
            <h3>40 200 - 57 200 BGN</h3>
            <img class="auto-page-img" src="./images/2021_Toyota_Camry_-_XLE_2.jpg" alt="toyota-camry">
            <h3>Toyota Camry</h3>
            <p>Best Midsize Car</p>
            <img class="details" src="./images/toyota-camry.jpg" style="visibility:hidden;" alt="toyota-camry-details">
        </li>

        <li>
            <h3>57 700 - 69 000 BGN</h3>
            <img class="auto-page-img" src="./images/2021_toyota_avalon_angularfront.jpg" alt="toyota-avalon">
            <h3>Toyota Avalon</h3>
            <p>Best Large Car</p>
            <img class="details" src="./images/toyota-avalon.jpg" style="visibility:hidden;" alt="toyota-avalon-details">
        </li>

        <li>
            <h3>37 700 - 45 000 BGN</h3>
            <img class="auto-page-img" src="./images/2021_toyota_corolla_hybrid_angularfront.jpg" alt="toyota-corolla-hybrid">
            <h3>Toyota Corolla Hybrid</h3>
            <p>Best Hybrid and Electric Car</p>
            <img class="details" src="./images/toyota-corrola-hybrid.jpg" style="visibility:hidden;" alt="toyota-corolla-hybrid-details">
        </li>
    </ul>
</section>`;

export async function carsPage(ctx) {
    ctx.render(carsTemplate());

    document.getElementById('cars-img-id').addEventListener('click', showImgDetails)
}