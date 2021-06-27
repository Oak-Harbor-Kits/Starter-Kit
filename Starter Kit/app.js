/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
});

/* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    var $html = $("html");
    var $navbarMenu = $(".navbar-menu");
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");

    if (toggleNavStatus === false) {

        getSidebarVisibility.style.visibility = "visible";
        getSidebar.style.overflow = "visible";

        getSidebarLinks.forEach((item, index) => {
            console.log(item);
            item.style.opacity = "1";
            item.style.visibility = "visible";
        });
        getSidebar.style.width = "60%";
        getSidebar.style.overflow = "visible";
        $html.addClass("clicked");
        $navbarMenu.addClass("clicked")
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSidebarLinks.forEach((item, index) => {
            item.style.opacity = "0";
            item.style.transitionDelay = "0s";
            item.style.visibility = "hidden";
        });
        getSidebar.style.overflow = "visible";
        getSidebar.style.width = "0";
        $navbarMenu.removeClass("clicked")
        $html.removeClass("clicked");
        toggleNavStatus = false;
    }
}

/* Modals collected in variables */

var $modalOne = $(".modal-one");
var $modalTwo = $(".modal-two");
var $modalThree = $(".modal-three");
var $modalFour = $(".modal-four");
var $modalFive = $(".modal-five");
var $modalSix = $(".modal-six");
var $modalSeven = $(".modal-seven");
var $modalEight = $(".modal-eight");
var $modalNine = $(".modal-nine");
var $modalTen = $(".modal-ten");
var $modalEleven = $(".modal-eleven");
var $modalTwelve = $(".modal-twelve");
var $modalThirteen = $(".modal-thirteen");
var $modalFourteen = $(".modal-fourteen");
var $modalFifteen = $(".modal-fifteen");
var $modalSixteen = $(".modal-sixteen");
var $modalSeventeen = $(".modal-seventeen");
var $modalEighteen = $(".modal-eighteen");
var $modalNineteen = $(".modal-nineteen");
var $modalTwenty = $(".modal-twenty");
var $modalTwentyOne = $(".modal-twenty-one");

/* Images collected in variables */

var $homeIcon = $(".home-icon");
var $html = $("html");

var $one = $("#one");
var $two = $("#two");
var $three = $("#three");
var $four = $("#four");
var $five = $("#five");
var $six = $("#six");
var $seven = $("#seven");
var $eight = $("#eight");
var $nine = $("#nine");
var $ten = $("#ten");
var $eleven = $("#eleven");
var $twelve = $("#twelve");
var $thirteen = $("#thirteen");
var $fourteen = $("#fourteen");
var $fifteen = $("#fifteen");
var $sixteen = $("#sixteen");
var $seventeen = $("#seventeen");
var $eighteen = $("#eighteen");
var $nineteen = $("#nineteen");
var $twenty = $("#twenty");
var $twentyOne = $("#twenty-one");

/* Add Clicked Class */

$one.on("click", function (e) {
  $modalOne.addClass("clicked");
  $html.addClass("clicked");
});

$two.on("click", function (e) {
  $modalTwo.addClass("clicked");
  $html.addClass("clicked");
});

$three.on("click", function (e) {
  $modalThree.addClass("clicked");
  $html.addClass("clicked");
});

$four.on("click", function (e) {
  $modalFour.addClass("clicked");
  $html.addClass("clicked");
});

$five.on("click", function (e) {
  $modalFive.addClass("clicked");
  $html.addClass("clicked");
});

$six.on("click", function (e) {
  $modalSix.addClass("clicked");
  $html.addClass("clicked");
});

$seven.on("click", function (e) {
  $modalSeven.addClass("clicked");
  $html.addClass("clicked");
});

$eight.on("click", function (e) {
  $modalEight.addClass("clicked");
  $html.addClass("clicked");
});

$nine.on("click", function (e) {
  $modalNine.addClass("clicked");
  $html.addClass("clicked");
});

$ten.on("click", function (e) {
  $modalTen.addClass("clicked");
  $html.addClass("clicked");
});

$eleven.on("click", function (e) {
  $modalEleven.addClass("clicked");
  $html.addClass("clicked");
});

$twelve.on("click", function (e) {
  $modalTwelve.addClass("clicked");
  $html.addClass("clicked");
});

$thirteen.on("click", function (e) {
  $modalThirteen.addClass("clicked");
  $html.addClass("clicked");
});

$fourteen.on("click", function (e) {
  $modalFourteen.addClass("clicked");
  $html.addClass("clicked");
});

$fifteen.on("click", function (e) {
  $modalFifteen.addClass("clicked");
  $html.addClass("clicked");
});

$sixteen.on("click", function (e) {
  $modalSixteen.addClass("clicked");
  $html.addClass("clicked");
});

$seventeen.on("click", function (e) {
  $modalSeventeen.addClass("clicked");
  $html.addClass("clicked");
});

$eighteen.on("click", function (e) {
  $modalEighteen.addClass("clicked");
  $html.addClass("clicked");
});

$nineteen.on("click", function (e) {
  $modalNineteen.addClass("clicked");
  $html.addClass("clicked");
});

$twenty.on("click", function (e) {
  $modalTwenty.addClass("clicked");
  $html.addClass("clicked");
});

$twentyOne.on("click", function (e) {
  $modalTwentyOne.addClass("clicked");
  $html.addClass("clicked");
});

/* Remove Clicked Class */

$homeIcon.on("click", function (e) {
  $modalOne.removeClass("clicked");
  $modalTwo.removeClass("clicked");
  $modalThree.removeClass("clicked");
  $modalFour.removeClass("clicked");
  $modalFive.removeClass("clicked");
  $modalSix.removeClass("clicked");
  $modalSeven.removeClass("clicked");
  $modalEight.removeClass("clicked");
  $modalNine.removeClass("clicked");
  $modalTen.removeClass("clicked");
  $modalEleven.removeClass("clicked");
  $modalTwelve.removeClass("clicked");
  $modalThirteen.removeClass("clicked");
  $modalFourteen.removeClass("clicked");
  $modalFifteen.removeClass("clicked");
  $modalSixteen.removeClass("clicked");
  $modalSeventeen.removeClass("clicked");
  $modalEighteen.removeClass("clicked");
  $modalNineteen.removeClass("clicked");
  $modalTwenty.removeClass("clicked");
  $modalTwentyOne.removeClass("clicked");
  $html.removeClass("clicked");
});



// ------------------------------------------------- DARK MODE -----------------------------

/* Dark Mode Toggle */
var $DTspan = $(".DTspan");
var $darkToggle = $(".dark-toggle");
var $wire = $(".wire");
var $triangle = $(".triangle");
var $topDarkModeToggle = $(".top-dark-mode-button");

/* Navigation */
var $navbarMenu = $(".navbar-menu");
var $sideNavA = $(".side-nav a");
var $isActiveHamburger = $(".hamburger.is-active .hamburger-inner::after");
var $hamburgerInner = $(".hamburger-inner");
var $mobileNav = $(".mobile-nav");
var $light = $(".light");
var $dark = $(".dark");

/* Body and Core Elements */
var $body = $("body");

var $h2 = $("h2");
var $h3 = $("h3");
var $p = $("p");

// Label the different sectiona of your website with the elements you 
// are targeting to chnage with a dark-mode class. Then when the first 
// page is done, label a new section for the next page, and under that 
// - label its sections as you did before. and repeat for each 

/* Landing */
var $clippy = $(".clippy");

// About 
var $topCard = $(".top-card");

// Services 
var $services = $("#services");
var $svgCircle = $(".svg-circle");
var $exph3 = $("#experience h4")

// Review 
var $reviewerInfo = $(".reviewer-info h4");
var $quotesBefore = $("#quote");

// Footer 

//
// NEW PAGE --------------------------------------------------
//

// (Section))

//
// NEW PAGE --------------------------------------------------
//

// (Section))


// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('.dark-mode-button');
// for an optional footer dark mode button as well
const darkModeToggleFooter = document.querySelector('footer .dark-mode-button');

// This is where you add the dakr mode class.  When the dark mode is enabled as true in localstorage,
// it will add all the dark-mode classes to the elements we created in the variables above
const enableDarkMode = () => {

  /* Dark Mode Toggle */
  $darkToggle.addClass("dark-mode");
  $DTspan.addClass("dark-mode");
  $topDarkModeToggle.addClass("dark-mode");

  // Core dark mode styles
  $body.addClass("dark-mode");
  $h2.addClass("dark-mode");
  $h3.addClass("dark-mode");
  $p.addClass("dark-mode");

  // Navigation 
  $navbarMenu.addClass("dark-mode");
  $sideNavA.addClass("dark-mode");
  $isActiveHamburger.addClass("dark-mode");
  $hamburgerInner.addClass("dark-mode");
  $mobileNav.addClass("dark-mode");
  $light.addClass("dark-mode");
  $dark.addClass("dark-mode");

  // Landing
  $clippy.addClass("dark-mode");

  // About
  $topCard.addClass("dark-mode");

  // Services
  $services.addClass("dark-mode");
  $svgCircle.addClass("dark-mode");
  $exph3.addClass("dark-mode");

  // Reviewer
  $reviewerInfo.addClass("dark-mode");
  $quotesBefore.addClass("dark-mode");

  // Footer 

  //
  // NEW PAGE --------------------------------------------------
  //

  // (Section)

  //
  // NEW PAGE --------------------------------------------------
  //

  // (Section)

  // at the end of the function we set the darkMode vale to enabled in localstorage to remember
  // that dark mode is on
  localStorage.setItem("darkMode", "enabled")
}

// This is where we remove dark mode.  Just copy and paste all the lines where you added a class
// and paste them into this function, then change "addClass" to "removeClass"
const disableDarkMode = () => {

  /* Dark Mode Toggle */
  $darkToggle.removeClass("dark-mode");
  $DTspan.removeClass("dark-mode");
  $topDarkModeToggle.removeClass("dark-mode");

  $body.removeClass("dark-mode");

  $h2.removeClass("dark-mode");
  $h3.removeClass("dark-mode");
  $p.removeClass("dark-mode");

  // Navigation 
  $navbarMenu.removeClass("dark-mode");
  $sideNavA.removeClass("dark-mode");
  $isActiveHamburger.removeClass("dark-mode");
  $hamburgerInner.removeClass("dark-mode");
  $mobileNav.removeClass("dark-mode");
  $light.removeClass("dark-mode");
  $dark.removeClass("dark-mode");

  // Landing
  $clippy.removeClass("dark-mode");

  // About
  $topCard.removeClass("dark-mode");

  // Services
  $services.removeClass("dark-mode");
  $svgCircle.removeClass("dark-mode");
  $exph3.removeClass("dark-mode");

  // Reviewer
  $reviewerInfo.removeClass("dark-mode");
  $quotesBefore.removeClass("dark-mode");

  // Footer 

  //
  // NEW PAGE --------------------------------------------------
  //

  // (Section)

  //
  // NEW PAGE --------------------------------------------------
  //

  // (Section)

  // At the end of the function, we remove the value for darkMode in 
  // localstorage, which removes dark mode classes from all elements
  localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
  enableDarkMode();
}

// add event listener to the dark mode button toggle
darkModeToggle.addEventListener('click', () => {
  // on click, check localstorage for the dark mode value
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    // if dark mode is not enabled, run this function to set it to enabled
    enableDarkMode();
  } else {
    // if dark mode is enabled, run this function to set it to disabled
    disableDarkMode();
  }
})

// Copy and paste the dark mode toggle button into the footer, give it a class 
// of "footer .dark-mode-button" so you can have two buttons that toggle dark mode.
// This second function is for the footer dark mode button to toggle dark mode in 
// localstorage
darkModeToggleFooter.addEventListener('click', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})