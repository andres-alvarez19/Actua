window.addEventListener('scroll',()=>{
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky',window.scrollY > 0);
    header.classList.toggle('top-0',window.scrollY > 0);
})

document.querySelector('.cart').addEventListener('click', function() {
    var url = this.getAttribute('data-url');
    window.location.href = url;
});