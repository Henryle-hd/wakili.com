/**legal issues */
const IssueBox = document.querySelectorAll('.IssueBox');
const single__area = document.querySelectorAll('.single__area');
single__area[0].addEventListener('click', () => {
    IssueBox[0].style.display = 'flex';
    IssueBox[1].style.display = 'none';
    IssueBox[2].style.display = 'none';
});
single__area[1].addEventListener('click', () => {
    IssueBox[1].style.display = 'flex';
    IssueBox[0].style.display = 'none';
    IssueBox[2].style.display = 'none';
});
single__area[2].addEventListener('click', () => {
    IssueBox[2].style.display = 'flex';
    IssueBox[0].style.display = 'none';
    IssueBox[1].style.display = 'none';
});




/** dynamic_text*/
const dynamic_text = document.getElementById('dynamic_text');

function gener_dynamic_text() {
    setTimeout(() => {
        dynamic_text.textContent = 'Compare'
    }, 0);
    setTimeout(() => {
        dynamic_text.textContent = 'Search'
    }, 4000);
    setTimeout(() => {
        dynamic_text.textContent = ' Selection'
    }, 8000);
    setTimeout(() => {
        dynamic_text.textContent = ' Consultation'
    }, 12000);
    setTimeout(() => {
        dynamic_text.textContent = ' Appointment'
    }, 16000);
    setTimeout(() => {
        dynamic_text.textContent = ' Payment'
    }, 20000);
    setTimeout(() => {
        dynamic_text.textContent = 'Rating and Review '
    }, 24000);
    setTimeout(() => {
        dynamic_text.textContent = 'Messaging'
    }, 28000);
    setTimeout(() => {
        dynamic_text.textContent = 'Document Sharing'
    }, 32000);
    setTimeout(() => {
        dynamic_text.textContent = 'Account Management '
    }, 36000);
}
gener_dynamic_text();
setInterval(gener_dynamic_text, 40000);


/**slide show */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}
//xxxxxxxxxxxxxxxxEnd of slide show xxxxxxxxxxxxxxxxxxxxxxx


/**progress */
let progress = document.querySelectorAll('.progress');
let values = document.querySelectorAll('.values');
let start1 = 0;
let start2 = 0;
let end1 = 150;
let start3 = 0;
let end3 = 25;
let start4 = 0;
let end4 = 1000;
let end2 = 95;

let progress1 = setInterval(() => {
    start1++;
    values[0].textContent = start1 + 'yrs'
        // 360/200
    progress[0].style.backgroundImage = `conic-gradient(aqua ${start1*1.8}deg, #e4e2e2 0deg)`
    if (start1 === end1) {
        clearInterval(progress1);
    }
}, 10);
let progress2 = setInterval(() => {
    start2++;
    values[1].textContent = start2 + '%'
        // 360/100
    progress[1].style.backgroundImage = `conic-gradient(rgb(255, 60, 60) ${start2*3.6}deg, #e4e2e2 0deg)`
    if (start2 === end2) {
        clearInterval(progress2);
    }
}, 100);

let progress3 = setInterval(() => {
    start3++;
    values[2].textContent = start3 + 'M'
        // 360/25
    progress[2].style.backgroundImage = `conic-gradient(rgb(0, 255, 0) ${start3*12}deg, #e4e2e2 0deg)`
    if (start3 === end3) {
        clearInterval(progress3);
    }
}, 100);

let progress4 = setInterval(() => {
    start4++;
    values[3].textContent = start4 + '+'
        // 360/1000
    progress[3].style.backgroundImage = `conic-gradient(rgb(100, 25, 90) ${start4*0.36}deg, #e4e2e2 0deg)`
    if (start4 === end4) {
        clearInterval(progress4);
    }
}, 10);