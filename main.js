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