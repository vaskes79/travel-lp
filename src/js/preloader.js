(() => {
    document.body.classList.add('loading');

    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => document.body.classList.replace('loading', 'loaded'), 2000);
        setTimeout(() => document.querySelector('.loader-wrap').innerHTML = '', 4000);
    })
})()
