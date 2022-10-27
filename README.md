# **Redirect-page**
## Solution for free but annoying hosting server that goes to sleep.

##### Show a friendly loader page, and redirect to the actual website when it wakes up

![](https://github.com/EtsHasade/redirect-page/blob/main/public/img/loading-print-screen.png?raw=true)

## How it work? came and see:
**main.js**
```sh
window.addEventListener('load', init)


function init() {
    console.log('init');
    
    redirectWhenSiteIsUp()
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
```

## Make it yours!
##### 1 - Download
##### 2 - Set the call to the `` redirectWhenSiteIsUp()`` function in comment
##### 3 - Re-design the page to fit your website style
##### 4 - Set the  "```const url = 'https://volunteery.onrender.com'```" to your URL address
##### 5 - Uncomment the XXX function
##### 6 - Upload to github and publish it as a free static site (it's free and quick in many host services, like render.com) 
######  Be aware that the path to the index.html is inside the public folder
##### 7 - Send the new static site address as the address of your project
##### 8 - Enjoy!



## Tech:
##### ``JS`` | ``HTML`` | ``CSS``
