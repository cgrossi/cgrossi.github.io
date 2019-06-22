function toggleMenu() {
    const nav = document.querySelector('.nav');
    const ham = document.querySelector('.hamburger-menu');
    const hamBox = document.querySelector('.hamburger-box');
    
        ham.addEventListener('click', (event) => {
            event.stopPropagation();
            event.target.setAttribute('style', 'opacity: 0.2; z-index: 3')
            hamBox.setAttribute('style', 'opacity: 0.2; z-index: 3')
            nav.classList.add('fadeIn')
            nav.classList.toggle('show');
            nav.classList.remove('fadeOut')
            
    })

    document.querySelector('.exit')
        .addEventListener('click', (event) => {
            event.stopPropagation();
            nav.classList.add('fadeOut')
            nav.classList.remove('fadeIn')
           setTimeout(() => {
            nav.classList.toggle('show');
            ham.setAttribute('style', 'opacity: 1; z-index: 3')
            hamBox.setAttribute('style', 'opacity: 1; z-index: 3')
           }, 1000)
        })
}

function main() {
    toggleMenu();
}

main();