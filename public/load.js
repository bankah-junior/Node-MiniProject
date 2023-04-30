const loader = document.querySelector('.loader');
window.onload = function () {
    setTimeout(function () {
        // loader.style.opacity = "0";
        loader.classList.add('hidden');
        setTimeout(function () {
            loader.style.display = 'none';
        }, 3000);
    }, 4000);
}