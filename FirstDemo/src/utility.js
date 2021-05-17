export async function showImgDetails(event) {
    const tagName = event.target.tagName;

    if (tagName === 'IMG') {
        const details = event.target.parentNode.querySelector('.details');
        if (details.style.visibility == 'hidden') {
            details.removeAttribute('style');
            details.setAttribute("style", "visibility: visible;");
        } else {
            details.removeAttribute('style');
            details.setAttribute("style", "visibility: hidden;");
        }
    }
}