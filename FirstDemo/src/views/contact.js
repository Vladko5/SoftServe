import { html } from '../../node_modules/lit-html/lit-html.js';

const contactTemplate = () => html`
<section class="contact-section">
    <h1>Contact Us</h1>
    <img class="column" src="./images/contact-img.jpg" alt="car-img">
    <form class="column">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firs-tname" placeholder="Your name..">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="last-name" placeholder="Your last name..">
        <label for="country">Country</label>
        <select id="country" name="country">
            <option value="bulgaria">Bulgaria</option>
            <option value="ukraine">Ukraine</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input class="button" type="button" value="Submit">
    </form>
</section>
`;

export async function contactPage(ctx) {
    ctx.render(contactTemplate());
}