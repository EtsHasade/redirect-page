// init()
window.addEventListener('load', init)
function init() {
    console.log('init');
    
    // redirectWhenSiteIsUp()
    setTimeout(()=>{
        console.log('Waiting...');
        
        document.body.classList.add('waiting')
    },500)

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
        window.location.replace(url)
    }, 1000)
}


