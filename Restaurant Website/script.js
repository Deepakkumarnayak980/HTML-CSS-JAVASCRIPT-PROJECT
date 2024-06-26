document.addEventListener('DOMContentLoaded',function () {
    const hambunrgar= document.querySelector('.hamburger');
    const navlinks= document.querySelector('.nav-links');
    const cartCounts= document.querySelector('.cart-count');
    const carticons= document.querySelectorAll('.cart-icon');
    const modetoggle= document.getElementById('#mode-toggle');
    const body= document.body;

    hambunrgar.addEventListener('click',function(){
        navlinks.classList.toggle('show')
    });


    let count = 0;

    carticons.forEach(icon => {
        icon.addEventListener('click',function(){
            count++;
            cartCounts.textContent=count;
        });
    });

   // script.js
document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '🌜' : '🌞';
});

})