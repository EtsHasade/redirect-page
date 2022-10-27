(async function redirectWhenSiteIsUp() {
    const url = 'https://volunteery.onrender.com'
    try {
        await fetch(url)
    } catch (err) {
        console.log(err);
    }
    
    console.log('Go to site');
    window.location.replace(url)
})()
