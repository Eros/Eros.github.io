function openNav(){
    document.getElementById('mySidenav').style.width = "250px";
    document.getElementById('main').style.marginLeft = "250px";
}

function closeNav(){
    document.getElementById('mySidenav').style.width = "0";
    document.getElementById('main').style.marginLeft = "0";
}

const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');
function generateHTML([h, v]){
    return `
                    <div class="item h${h} v${v}">
                    <img src="img/courses/${randomNumber(12)}.jpg">
                    <div class="item_overlay">
                    <button> View </button>
                    </div>
                    </div>
                `;
}
function randomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
}
function handleClick(e){
    const source = e.currentTarget.querySelector('img').src;
    overlayImage.src = source;
    overlay.classList.add('open');
}
function close(){
    overlay.classList.remove('open');
}
const digits = Array.from({length: 50}, () => [
    randomNumber(4), randomNumber(4)]
).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
    [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]); //please for the love of god don't ask me why this is needed
const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;
const i = document.querySelector('.item');
i.forEach(item => i.addEventListener('click', handleClick));
overlayClose.addEventListener('close', close);
$(function () {
    /* START OF DEMO JS - NOT NEEDED */
    if (window.location == window.parent.location) {
        $('#fullscreen').html('<span class="glyphicon glyphicon-resize-small"></span>');
        $('#fullscreen').attr('href', 'http://bootsnipp.com/mouse0270/snippets/PbDb5');
        $('#fullscreen').attr('title', 'Back To Bootsnipp');
    }
    $('#fullscreen').on('click', function(event) {
        event.preventDefault();
        window.parent.location =  $('#fullscreen').attr('href');
    });
    $('#fullscreen').tooltip();
    /* END DEMO OF JS */

    $('.navbar-toggler').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.navbar-minimal').toggleClass('open');
    })
});
function htmlbodyHeightUpdate(){
    var height3 = $( window ).height()
    var height1 = $('.nav').height()+50
    height2 = $('.main').height()
    if(height2 > height3){
        $('html').height(Math.max(height1,height3,height2)+10);
        $('body').height(Math.max(height1,height3,height2)+10);
    }
    else
    {
        $('html').height(Math.max(height1,height3,height2));
        $('body').height(Math.max(height1,height3,height2));
    }

}
$(document).ready(function () {
    htmlbodyHeightUpdate()
    $( window ).resize(function() {
        htmlbodyHeightUpdate()
    });
    $( window ).scroll(function() {
        height2 = $('.main').height()
        htmlbodyHeightUpdate()
    });
});