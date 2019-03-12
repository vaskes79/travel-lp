(() => {
    document.documentElement.className = 'no-fouc';
    // document.body.classList.add('loading');
    window.addEventListener('DOMContentLoaded', () => {
    })


    window.addEventListener('load', () => {
        document.documentElement.classList.remove('no-fouc');

        // const loaderWrap = document.querySelector('.loader-wrap')
        // document.body.classList.replace('loading', 'loaded');
        // loaderWrap.parentNode.removeChild(loaderWrap);
    })
})()
