

const myHeader = document.querySelector(".header");

// window.addEventListener("scroll", () => {
//   const scrollPosition = window.scrollY;
//   if (scrollPosition > 700) {
//     myHeader.style.opacity = 0;
//     myHeader.style.visibility = "hidden";
//   } else {
//     myHeader.style.opacity = 1;
//     myHeader.style.visibility = "visible";
//   }
// });


const scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    myHeader.style.opacity = 1;
    myHeader.style.visibility = 'visible';
  } else {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        myHeader.style.opacity = 0;
        myHeader.style.visibility = 'hidden';
    }
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}


const mainCnt = document.querySelector(".main-container");

window.addEventListener("scroll", function() {
    mainCnt.style.backgroundPositionX = -(window.pageYOffset / 8) + "px";
});

// const creature = document.querySelector(".creature3");
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("animate-slide");
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// observer.observe(creature);


























// const creature = document.querySelector(".creature3");

// function checkSlide() {
//   // Get the current scroll position
//   const scrollPosition = window.scrollY;

//   // Get the bottom position of the element
//   const elementBottom = creature.offsetTop + creature.offsetHeight;

//   // Calculate the position when the element should start animating
//   const animationStart = elementBottom - creature.offsetHeight / 2;

//   // Check if the scroll position is below the animation start position
//   if (scrollPosition > animationStart) {
//     // Set the animation class to start the animation
//     creature.classList.add("animate");
//   }
// }

// // Listen for scroll events
// window.addEventListener("scroll", checkSlide);



// scrollableElement.addEventListener('wheel', checkScrollDirection);

// function checkScrollDirection(event) {
//   if (event.deltaY < 0) {
//     navBar.style.opacity = 1;
//     navBar.style.visibility = 'visible';
//   } else {
//     const scrollPosition = window.scrollY;
//     if (scrollPosition > 530) {
//       navBar.style.opacity = 0;
//       navBar.style.visibility = 'hidden';
//     }
//   }
// }