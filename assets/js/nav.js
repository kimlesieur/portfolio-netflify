

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

navToggle.addEventListener("click", function() {

    links.classList.toggle("show-links");

});


//Fixing scroll height on links click to adjust with the navbar height

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        //console.log(event.currentTarget.getAttribute("href"));
        const id = event.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const sectionHeight = element.offsetTop;
        const navbar = document.getElementById("nav-center");
        const navsection = document.getElementById("nav-section");
        const navsectionHeight = navsection.getBoundingClientRect().height;
        const navbarHeight = navbar.getBoundingClientRect().height;
        console.log(sectionHeight);
        console.log(navbarHeight);
        console.log(navsectionHeight);
        let position = sectionHeight - navbarHeight + 10;
        console.log(position);

        window.scrollTo({
            top: position,
            left: 0,
        })





    } )

})
