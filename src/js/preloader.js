(() => {
    document.body.classList.add('loading');

    document.addEventListener("DOMContentLoaded", () => {

        const loaderWrap = document.querySelector('.loader-wrap')

        setTimeout(() => document.body.classList.replace('loading', 'loaded'), 2000);
        setTimeout(() => loaderWrap.parentNode.removeChild(loaderWrap), 3000);
    })
})()
