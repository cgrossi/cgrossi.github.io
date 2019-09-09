function toggleMenu() {
        const nav = document.querySelector('.nav');
        const ham = document.querySelector('.hamburger-menu');
        const hamBox = document.querySelector('.hamburger-box');

        ham.addEventListener('click', event => {
                event.target.setAttribute('style', 'opacity: 0.2; z-index: 3');
                hamBox.setAttribute('style', 'opacity: 0.2; z-index: 3');
                nav.classList.add('fadeIn');
                nav.classList.toggle('show');
                nav.classList.remove('fadeOut');
        });

        document.querySelector('.exit').addEventListener('click', () => {
                nav.classList.add('fadeOut');
                nav.classList.remove('fadeIn');
                setTimeout(() => {
                        nav.classList.toggle('show');
                        ham.setAttribute('style', 'opacity: 1; z-index: 3');
                        hamBox.setAttribute('style', 'opacity: 1; z-index: 3');
                        nav.classList.remove('fadeOut');
                }, 300);
        });
}

function scrollTop() {
  const scrollTopBtn = document.querySelector('button.scroll-top')
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
  scrollTopBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  })
}

function buildSentence(element) {
  let letters = element.textContent.split('')
  let count = 0
  element.textContent = ''
  let textTimer = setInterval(() => {
    element.textContent = element.textContent + letters[count]
    count++
    if(element.textContent.length === letters.length) {
      clearInterval(textTimer)
      breakSentence(letters, element)
    }
  }, 100)
}

function breakSentence(array, element) {
  let count = array.length - 1
  let textTimer = setInterval(() => {
    element.textContent = element.textContent.substring(0, count)
    count--
    if(count <= 2) {
      clearInterval(textTimer)
      element.textContent = array.join('')
      buildSentence(element)
    }
  }, 75)
}



function main() {
  toggleMenu()
  let textAnim = document.querySelector('.heading-sub')
  let initTextArray = textAnim.textContent.split('')
  breakSentence(initTextArray, textAnim)
  window.addEventListener('scroll', scrollTop)
}

window.addEventListener('load', main)
