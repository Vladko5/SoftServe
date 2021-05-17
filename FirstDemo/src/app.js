import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

import { carsPage } from './views/cars.js';
import { contactPage } from './views/contact.js';
import { kiaFortePage } from './views/kia-forte.js';
import { kiaSorentoPage } from './views/kia-sorento.js';
import { suvsPage } from './views/suvs.js';
import { welcomePage } from './views/welcome.js';

const main = document.getElementById('site-content');

page('/', decorateContext, welcomePage);
page('/cars', decorateContext, carsPage);
page('/suvs', decorateContext, suvsPage);
page('/contact', decorateContext, contactPage);
page('/kia-forte', decorateContext, kiaFortePage);
page('/kia-sorento', decorateContext, kiaSorentoPage);
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    next();
}

//Set the width of the nav sidebar to 0 (hide it)
document.getElementsByClassName('closebtn')[0].addEventListener('click', () => {
    document.getElementById("mySidepanel").style.width = "0";
});

//Set the width of the nav sidebar to 250px (show it)
document.getElementsByClassName('openbtn')[0].addEventListener('click', () => {
    document.getElementById("mySidepanel").style.width = "250px";
});