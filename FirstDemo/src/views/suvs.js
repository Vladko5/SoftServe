import { html } from '../../node_modules/lit-html/lit-html.js';
import {showImgDetails} from '../utility.js';

const suvsTemplate = () => html`
<section class="auto-page-container">
    <ul id="suvs-img-id" class="auto-page-ul">
        <h2>Click the images for more details</h2>
        <li>
            <h3>28 200 - 44 400 BGN</h3>
            <img class="auto-page-img" src="./images/2021_kia_soul_angularfront.jpg" alt="kia-soul">
            <h3>Kia Soul</h3>
            <p>Best Subcompact SUV</p>
            <img class="details" src="./images/kia-soul.jpg" style="visibility: hidden;" alt="kia-soul-details">
        </li>

        <li>
            <h3>40 800 - 56 600 BGN</h3>
            <img class="auto-page-img" src="./images/2020_honda_cr_v_angularfront.jpg" alt="honda-cr-v">
            <h3>Honda CR-V</h3>
            <p>Best Compact SUV</p>
            <img class="details" src="./images/honda-cr-v.jpg" style="visibility:hidden;" alt="honda-cr-v-details">
        </li>

        <li>
            <h3>52 500 - 70 800 BGN</h3>
            <img class="auto-page-img" src="./images/2021_honda_passport_angularfront.jpg" alt="honda-passport">
            <h3>Honda Passport</h3>
            <p>Best 2-Row SUV</p>
            <img class="details" src="./images/honda-passport.jpg" style="visibility:hidden;" alt="honda-passport-details">
        </li>

        <li>
            <h3>47 300 - 68 500 BGN</h3>
            <img class="auto-page-img" src="./images/2021_Kia_Sorento_1.jpg" alt="kia-sorento">
            <h3>Kia Sorento</h3>
            <p>Best 3-Row SUV</p>
            <img class="details" src="./images/kia-sorento.jpg" style="visibility:hidden;" alt="kia-sorento-details">
        </li>

        <li>
            <h3>45 900 - 60 000 BGN</h3>
            <img class="auto-page-img" src="./images/2021_Toyota_RAV4_Hybrid_1.jpg" alt="toyota-rav4-hybrid">
            <h3>Toyota RAV4 Hybrid</h3>
            <p>Best Hybrid and Electric SUV</p>
            <img class="details" src="./images/toyota-rav4-hybrid.jpg" style="visibility:hidden;" alt="toyota-rav4-hybrid-details">
        </li>
    </ul>
</section>`;

export async function suvsPage(ctx) {
    ctx.render(suvsTemplate());

    document.getElementById('suvs-img-id').addEventListener('click', showImgDetails)
}