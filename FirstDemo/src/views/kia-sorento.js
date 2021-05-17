import { html } from '../../node_modules/lit-html/lit-html.js';

const kiaSorentoTemplate = () => html`
<section class="auto-data">
    <h1>Kia Sorento</h1>

    <img class="auto-data-img" src="./images/2021_Kia_Sorento_1.jpg" alt="kia-sorento">
    <img class="auto-data-rating" src="./images/kia-sorento-rating.jpg" alt="kia-sorento-rating">

    <h2>Is the Kia Sorento a Good SUV?</h2>
    <p>Yes, the redesigned Kia Sorento is a good SUV. It offers an energetic turbocharged
        powertrain
        and handles winding roads with poise. The ride is comfortable over most roads, and gas mileage is great for
        the
        class.

        The Sorento has an upscale interior with three rows of seats, plenty of easy-to-use tech features, and a
        decent
        maximum cargo capacity. The Sorento's superb combination of quality and value led us to name it our 2021
        Best
        3-Row SUV.</p>

    <h2>Should I Buy the Kia Sorento?</h2>
    <p>You should strongly consider the Sorento if you're looking for a midsize SUV or any kind
        of
        smaller crossover vehicle. Not only does it boast all the great attributes discussed above, it costs less
        than
        many of its classmates, making it a strong value.</p>

    <h2>Kia Sorento Versus the Competition</h2>

    <h5>Kia Sorento vs. Kia Telluride</h5>
    <p>The Kia Telluride beats out its smaller Sorento sibling in our midsize SUV rankings. The
        Telluride has seating for up to eight people and notably more cargo space. Both of these Kias have upscale
        cabins and the same user-friendly infotainment system. The Telluride has a V6 that's more powerful than
        either
        Sorento engine, but the Sorento gets better gas mileage. It's also worth noting that the Telluride costs a
        couple thousand dollars more than the Sorento. These Kia SUVs went head-to-head for our title of 2021 Best
        3-Row
        SUV, with the Sorento coming out as the winner.</p>

    <h5>Kia Sorento vs. Toyota Highlander</h5>
    <p>The Toyota Highlander joins the Sorento in the good-but-not-great crowded middle of our
        midsize SUV rankings. The more expensive Highlander seats up to eight and has more cargo space, but the
        Sorento
        is more upscale inside and has a less finicky infotainment system. The Sorento gets better gas mileage and
        handles a bit better, though it isn't quite as powerful as the Highlander. However, the Toyota has one of
        the
        highest safety scores in the class.</p>

    <h2>The Final Call</h2>
    <p>The 2021 Kia Sorento is completely redesigned, and you have to say the effort was a
        smashing
        success because this Kia delivers on all fronts. It's enjoyable to drive, it gets great fuel economy
        ratings, it
        has an upscale interior, and it’s loaded with features. The Sorento's all-around appeal makes it a strong
        choice
        in the midsize SUV class, and it's a terrific value as well.</p>
</section>
`;

export async function kiaSorentoPage(ctx) {
    ctx.render(kiaSorentoTemplate());
}