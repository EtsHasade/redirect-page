(async function redirectWhenSiteIsUp() {
    const url = 'https://volunteery.onrender.com'
    
    try {
        await fetch(url)
    } catch (err) {
        console.log(err);
    }
    
    console.log('Going to site');
    document.body.classList.add('complete')
    setTimeout(()=> {
        window.location.replace(url)
    }, 1000)
})()

