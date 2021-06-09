import { html } from 'https://unpkg.com/lit-html?module';
import { setUserData } from '../sessionStorage.js';

//Login
const loginTemplate = () => html`
<section id="login">
    <div class="container">
        <form id="login-form">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate());

    document.getElementById('login-form').addEventListener('submit', onSubmit);

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();

        if (!username || !password) {
            return alert('All fields are requiered!');
        }

        setUserData({
            username,
            password
        });
        event.target.reset();
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}

//Register
const registerTemplate = () => html`
<section id="register">
    <div class="container">
        <form id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass">
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate());

    document.getElementById('register-form').addEventListener('submit', onSubmit);

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('repeatPass').trim();

        if (!username || !password || !repeatPass) {
            return alert('All fields are requiered!');
        }
        if (password != repeatPass) {
            return alert('Passwords don\'t match!');
        }

        setUserData({
            username,
            password
        });
        event.target.reset();
        ctx.setUserNav();
        ctx.page.redirect('/');
    }
}