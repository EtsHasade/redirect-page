// init()
let isNeedToRunApp = true

window.addEventListener('load', init)
function init() {
    console.log('init');

    document.body.addEventListener('keyup', (ev) => {
        if (ev.key === 'Escape') {
            isNeedToRunApp = false
            console.log('Do not run redirect!')
        }
    })

    redirectWhenSiteIsUp()
    setTimeout(() => {
        console.log('Waiting...');
        document.body.classList.add('waiting')
    }, 500)

}


async function redirectWhenSiteIsUp() {
    const url = 'https://volunteery.onrender.com'

    try {
        await fetch(url)
    } catch (err) {
        console.log(err);
    }

    console.log('Going to site');
    document.body.classList.add('complete')
    setTimeout(() => {
        if (isNeedToRunApp) window.location.replace(url)
    }, 1000)
}


