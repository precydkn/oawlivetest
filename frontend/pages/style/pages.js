/*---Element animations using jquery
$(function() {
    $(".titlescreen").show("clip", { direction: "vertical" }, 800, function(){
        setTimeout(function(){
            $(".titlescreen").hide();
            $(".userscreen").show("blind", 800);
        }, 1500)
    });
});
---*/

/*---Resizing elements according to browser screen size---*/
function scaleMainWrapper() {
    const baseWidth = 1920;
    const baseHeight = 1080;
    const wrapper = document.querySelector('.main-wrapper');

    const scale = Math.min(
        window.innerWidth / baseWidth,
        window.innerHeight / baseHeight
    );

    wrapper.style.setProperty('--base-scale', scale);
}

// run once and on resize
scaleMainWrapper();
window.addEventListener('resize', scaleMainWrapper);
/*---*/

/*---Clicking gamecards functions + animations---*/
const gameboy = document.querySelector('.main-wrapper');
const backbtn = document.querySelector('.backbtn');

// zoom in gameboy after delay
setTimeout(function(){
    gameboy.classList.add('zoomed');
}, 1500)

/*backbtn.addEventListener('click', (function(){
    gameboy.classList.add('zoomed');
    window.location.href = "start.html";
}))*/


/*---Generate activity---*/
const getbtn = document.querySelector('.getbtn');
const generateScreen = document.querySelector('.select-type-screen');
const displayScreen = document.querySelector('.display-act-screen');
const loadingScreen = document.querySelector('.loading-screen');
const activityText = document.querySelector('.activity-text');

let actType = null; // track selected activity type

// listen for clicks on each type box
const actTypes = document.querySelectorAll('.act-types div[id]');
actTypes.forEach(box => {
    box.addEventListener('click', () => {
        // highlight the chosen one
        actTypes.forEach(b => b.classList.remove('typeselected'));
        box.classList.add('typeselected');

        // save the id (ex: "busywork")
        actType = box.id;
        console.log("Selected type:", actType);
    });
});

if (getbtn) {
    getbtn.addEventListener('click', function () {
        if (!actType) {
            alert("Please select a type first!");
            return;
        }

        generateScreen.style.display = 'none';
        loadingScreen.style.display = 'block';

        // fetch based on the chosen type
        fetch(`http://localhost:3900/api/activity?type=${actType}`)
        .then(response => response.json())
        .then(data => {
            const randomActivity = data[Math.floor(Math.random() * data.length)]['activity'];
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                displayScreen.style.display = 'contents';
                activityText.textContent = randomActivity;
            }, 2500);
        })
        .catch(err => {
            console.error('Fetch Error:', err);
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                displayScreen.style.display = 'contents';
                activityText.textContent = "Sorry, couldn't fetch an activity :(";
            }, 2500);
        });
    });
}
/*---*/