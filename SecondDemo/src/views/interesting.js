import { html } from 'https://unpkg.com/lit-html?module';

const infoTemplate = (id, img, name, txt1, txt2) => html`
<section id=${id} class="modal">
    <section class="info-content">
        <section class="modal-header">
            <span class="close">&times;</span>
        </section>
        <section class="modal-body">
            <img src=${img} alt=${name}>
            <h1>${name}</h1>
            <p>${txt1}<br><br>${txt2}</p>
        </section>
        <section class="modal-footer"></section>
    </section>
</section>
`;

const interestingTemplate = () => html`
<section class="map">
    <img src="./images/interactive-map.jpg" alt="Map" usemap="#workmap">

    <map name="workmap">
        <area id="baba-vida" shape="rect" coords="220,100,310,155" href="#">
        <area id="rila-monastery" shape="rect" coords="380,550,475,620" href="#">
        <area id="madara" shape="rect" coords="1070,250,1140,310" href="#">
    </map>

    ${infoTemplate('baba-vida-info', './images/baba-vida.jpg', 'Baba Vida', 
    'Baba Vida (Bulgarian: Баба Вида) is a medieval fortress in Vidin in northwestern Bulgaria and the\
    town\'s primary landmark. It is considered the only entirely preserved medieval \
    castle in Bulgaria.', 
    'The building of Baba Vida is tied to a legend, according to which a Danubian Bulgarian king\
    who ruled at Vidin had three daughters: Vida, Kula and Gamza. Prior to his death, he divided his\
    realm among the three. Vida, the eldest, was given Vidin and the lands north to the Carpathians,\
    Kula was awarded Zaječar and the Timok Valley, and Gamza was to rule the lands west up to the\
    Morava. Although Gamza and Kula married to drunkard and warlike nobles, Vida remained unmarried and\
    built the fortress in her city.')}

    ${infoTemplate('rila-monastery-info', './images/rilski-manastir-info.jpg', 'Rila Monastery', 
    'The Monastery of Saint Ivan of Rila, better known as the Rila Monastery (Bulgarian: Рилски манастир,\
    Rilski manastir) is the largest and most famous Eastern Orthodox monastery in Bulgaria. It is\
    situated in the southwestern Rila Mountains, 117 km (73 mi) south of the capital Sofia in the deep\
    valley of the Rilska Reka ("Rila River") at an elevation of 1,147 m (3,763 ft) above sea level,\
    inside of Rila Monastery Nature Park. The monastery is named after its founder, the hermit Ivan of\
    Rila (876 - 946 AD), and houses around 60 monks.', 
    'Founded in the 10th century, the Rila Monastery is regarded as one of Bulgaria\'s most important\
    cultural, historical and architectural monuments and is a key tourist attraction for both Bulgaria\
    and Southern Europe. In 2008 alone, it attracted 900,000 visitors. The monastery is depicted on\
    the reverse of the 1 lev banknote, issued in 1999.')}

    ${infoTemplate('madara-info', './images/madara-info.jpg', 'Madara Horseman', 
    'The Madara Rider or Madara Horseman (Bulgarian: Мадарски конник, Madarski konnik) is an early\
    medieval large rock relief carved on the Madara Plateau east of Shumen in northeastern Bulgaria,\
    near the village of Madara. The monument is dated in the very late 7th, or more often very early\
    8th century, during the reign of Bulgar Knyaz Tervel. In 1979 became enlisted on the UNESCO World\
    Heritage List.', 
    'Some history scientists claim that the Madara Horseman is actually the Thracian Horseman - "Heros"!')}
</section>
`;

export async function interestingPage(ctx) {
    ctx.render(interestingTemplate());

    $('#baba-vida').click(function () {
        $('#baba-vida-info').show();
    });

    $('#rila-monastery').click(function () {
        $('#rila-monastery-info').show();
    });

    $('#madara').click(function () {
        $('#madara-info').show();
    });

    $('.close').click(function () {
        $('.modal').hide();
    });
}