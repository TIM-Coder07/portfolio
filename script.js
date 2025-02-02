// ****************NAV BAR**************** 
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const navbarLinks = document.getElementById('navbar-links');

    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        navbarLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (navbarLinks.classList.contains('active') && !navbarLinks.contains(e.target)) {
            navbarLinks.classList.remove('active');
        }
    });

    navbarLinks.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});


function reloadPage() {
    location.reload();
}

// ****************NAV DYNAMIC******************

const navbarLinks = [
    {name: ''}
]

// **************VIDEO***********

const myVideo = document.getElementById('myVideo');

function playVideo() {
  myVideo.play();
}

function pauseVideo() {
  myVideo.pause();
}



// **********************WHAT'S APP****************
function openWhatsApp() {
    const phoneNumber = "01625587701"; // Replace with your number
    const message = "Hello, I want to connect with you."; // Optional default message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

// ********************************NAV SCROLL***********
// document.getElementById('about-link').addEventListener('click', function (event) {
//     event.preventDefault(); // Prevent default anchor behavior
//     const aboutSection = document.getElementById('about');
    
//     aboutSection.scrollIntoView({
//       behavior: 'smooth', // Smooth scrolling
//       block: 'start' // Scroll to the start of the section
//     });
//   });
  

// *********************LOADINFG ********************

document.addEventListener("DOMContentLoaded", function () {
    setInterval(() => {
        document.getElementById(content).style.display = "block"
    }, 1500);    
})