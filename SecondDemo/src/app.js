import { render } from 'https://unpkg.com/lit-html?module';
import page from '//unpkg.com/page/page.mjs';

import { welcomePage } from './views/welcome.js';
import { galeryPage } from './views/galery.js';
import { loginPage, registerPage } from './views/auth.js';
import { storePage } from './views/store.js';
import { interestingPage } from './views/interesting.js';
import { getUserData, clearUserData } from './sessionStorage.js';



const main = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', () => {
    clearUserData();
    setUserNav();
    page.redirect('/');
});

setUserNav();

page('/', decorateContext, welcomePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/galery', decorateContext, galeryPage);
page('/store', decorateContext, storePage);
page('/interesting', decorateContext, interestingPage);


page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;

    next();
}

function setUserNav() {
    const user = getUserData();
    if (user) {
        document.getElementById('profile').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user-greeting').textContent = `Welcome ${user.username}`;
    } else {
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
}