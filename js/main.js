///// VARIABLES

const dropDown = document.querySelector(".dropdownNav");
const navButtons = document.querySelector(".side-nav-buttons");
const bottomNav = document.querySelector(".bottom-nav ul");
const navItems = document.querySelectorAll(".bottom-nav ul li");
const articles = document.querySelector(".side-nav-articles");
const footerContent = document.querySelector(".bottom-nav-info");
const navButton = document.querySelector(".nav-svg");
const mobileNav = document.querySelector(".mobile-nav-container");

const articleHTML = "<li>" + "Rounding up predictions for Carolina's record in 2018" + "</li>" + "<li>" + "Corn Elder earns a jersey" + "</li>" + "<li>" + "Watch: Panthers 2003 Reunion Special" + "</li>" + "<li>" + "Matt Kalil placed on injured reserve" + "</li>" + "<li>" + "Daryl Williams returns to practice" + "</li>" + "<li>" + "Frazier, Allen among 10 signed to practice squad" + "</li>" + "<li>" + "Get to Know: 53-man roster" + "</li>" + "<li>" + "Grill Bill: Cutdown day edition" + "</li>";
const videoHTML = "<li>" + "Record predictions for every NFC South team in 2018" + "</li>" + "<li>" + "Obada: It means the world" + "</li>" + "<li>" + "Williams: I'm definitely ahead of schedule" + "</li>" + "<li>" + "Rivera: Had to make tough decisions" + "</li>" + "<li>" + "Panthers Huddle: 2003 Reunion Special" + "</li>" + "<li>" + "1-on-1: Taylor Heinicke" + "</li>" + "<li>" + "Highlights: Panthers at Steelers" + "</li>" + "<li>" + "Rivera: It's tough without key players" + "</li>";
const photoHTML = "<li>" + "Two States One Team Tour: Asheville" + "</li>" + "<li>" + "Week 1 Practice: Sunday" + "</li>" + "<li>" + "Panthers 2018 Roster: Headshot Gallery" + "</li>" + "<li>" + "Two States One Team Tour: Myrtle Beach" + "</li>" + "<li>" + "Best Of: Panthers at Steelers" + "</li>" + "<li>" + "Pregame: Panthers at Steelers" + "</li>" + "<li>" + "Panthers travel to Pittsburgh" + "</li>" + "<li>" + "Panthers Travel Shoes" + "</li>";

/////  DROPDOWN MENU

$(".dots").click(function() {
    $(".dropdownNav").slideToggle(200, function(){
         // nothing
    })
});


$(".dots").click(function() {
    if( $(".dots").attr("src") === "img/dots.svg" ) {
       $(".dots").attr("src", "img/arrow.svg");
    } else if( $(".dots").attr("src") === "img/arrow.svg" ) {
       $(".dots").attr("src", "img/dots.svg")       
    } 
});



///// SIDENAV

navButtons.addEventListener("click", e => {
    if( e.target.tagName === "LI" ) {
        if( e.target.id === "articles" ) {
            articles.innerHTML = articleHTML;
        } else if( e.target.id === "video" ) {
            articles.innerHTML = videoHTML; 
        } else if( e.target.id === "photos" ) {
            articles.innerHTML = photoHTML;
        }
    }
});

navButtons.addEventListener("click", e => {
    let sibs = e.target.parentNode.children;
    for( let i = 0; i < sibs.length; i++ ) {
        if( e.target.tagName === "LI" ) {
          sibs[i].className = "";
      }
    }
    if( e.target.tagName === "LI" ) {
      e.target.className = "active";
    }
});


///// BOTTOM NAV 


bottomNav.addEventListener("click", e => {
    for( let i = 0; i < navItems.length; i++ ) {
        if( e.target.tagName === "LI" ) {
        navItems[i].className = "";
       }
    }
    if( e.target.tagName === "LI" ) {
       e.target.className = "active-bottom";
    } 
});


////// MOBILE NAV 


navButton.addEventListener("click", e => {
    if( mobileNav.style.display != "flex" ) {
       mobileNav.style.display = "flex";
    } else {
       mobileNav.style.display = "none";      
    } 
});

$(window).resize(function() {
    if( window.innerWidth > 1024 ) {
       mobileNav.style.display = "flex";
    } else if( window.innerWidth <= 1024 ) {
       mobileNav.style.display = "none";      
    }
});












