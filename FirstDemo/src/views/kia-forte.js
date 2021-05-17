import { html } from '../../node_modules/lit-html/lit-html.js';

const kiaForteTemplate = () => html`
<section class="auto-data">
    <h1>Kia Forte</h1>

    <img class="auto-data-img" src="./images/2021_kia_forte_angularfront.jpg" alt="kia-forte">
    <img class="auto-data-rating" src="./images/kia-forte-rating.jpg" alt="kia-forte-rating">

    <h2>Is the Kia Forte a Good Car?</h2>
    <p>Yes, the 2021 Forte is a good compact car. In fact, we named it our 2021 Best Compact Car
        due
        to
        its outstanding combination of quality and value. It has a roomy cabin with high-quality materials,
        adult-friendly seating, and an easy-to-use infotainment system. This Kia also comes with a generous number
        of
        standard features, especially considering its low price point. Fuel economy is good in the base model, and a
        performance-enhanced Forte GT model is available.

        However, some reviewers note that its continuously variable automatic transmission (CVT) is unresponsive.
        Additionally, the Forte’s firm ride can feel unsettled over imperfect roads.</p>

    <h2>Should I Buy the Kia Forte?</h2>
    <p>The Forte is a great value and a good choice in the compact car class. Still, there are
        other
        worthy contenders
        to consider, including the Honda Civic and Mazda3, which both deliver a sportier driving experience than the
        Forte. The fully redesigned Hyundai Elantra is also worth a look.</p>

    <h2>Kia Forte Versus the Competition</h2>

    <h5>Kia Forte vs. Honda Civic</h5>
    <p>The Honda Civic is another excellent compact car. It doesn't have as many standard
        features as the Forte, and it
        costs a few thousand dollars more, but the Honda offers more powerful engine options than the Kia, and its
        athletic handling makes it more engaging to drive. The Civic also has one of the nicest cabins in the class.
        If
        you want a refined driving experience and are willing to spend the additional money, the Civic is the better
        choice. However, for an overall combination of quality and value in the class, the Forte can't be beat.</p>

    <h5>Kia Forte vs. Hyundai Elantra</h5>
    <p>The Hyundai Elantra is fully redesigned for 2021, and it has a lot going for it,
        including a comfortable ride and
        great fuel economy. And like the Forte, the Elantra comes standard with lots of technology, including
        wireless
        Apple CarPlay and Android Auto. That said, the Forte gets the edge in our compact car rankings because it
        has
        nicer cabin materials and offers a little more cargo space.</p>

    <h2>The Final Call</h2>
    <p>The 2021 Kia Forte excels at many things, which is why it's a good pick in the compact
        car class. Its cabin is
        refined, its standard features list is plentiful, and it gets good fuel economy. It also boasts spacious
        seating
        and a roomy trunk. However, the Forte is not particularly fun to drive due to a somewhat unresponsive CVT
        and a
        questionable ride quality.</p>
</section>
`;

export async function kiaFortePage(ctx) {
    ctx.render(kiaForteTemplate());
}