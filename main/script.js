// const anchor = document.querySelectorAll('a[href*="#"]');
//
// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (event) {
//     event.preventDefault();
//     const blockID = anchor.getAttribute
//   })
// }


//Slider
const dots = document.querySelector('.dots');
const dot = document.querySelectorAll('.dot')
dots.addEventListener('click', function (e) {
  if (!e.target.classList.contains('dot'))         // если клик не по ссылке, просто завершим выполнение 
    return;
  e.preventDefault();                                // отменим стандартную реакцию ссылки на клик
  for (let link of this.querySelectorAll('.dot'))  // удалим класс active у всех наших ссылок... 
    link.classList.remove('active');
  e.target.classList.add('active');                  // ...и добавим его той, по которой выполнен клик
});

// const slides = document.querySelector('.carousel_items');
// const slide = document.querySelectorAll('.carousel_item');

// let currentIndex = 0;
// const totalSlides = slide.length;

// function updateSliderPosition() {
//   slides.style.transform = `translateX(-${currentIndex * 34}%)`;
// }

// console.log(Number(dot[1].value));

// dots.addEventListener('click', () => {
//   for (let index = 0; index < dots.length; index++) {
//     if (Number(dot[index].value) == 1) {
//       currentIndex = 1;
//       console.log('ass');
//     } else if (Number(dot[index].value) == 2) {
//       currentIndex = 2;
//       console.log('ass beach');
//     } else currentIndex ===0;
//   }
//   updateSliderPosition();
// });

//FavoriteItems
let favoritesItems = document.querySelectorAll('.favorites_items');
let radio = document.querySelectorAll('.contactChoice');

function deleteClass() {
  for (let b of favoritesItems) {
    b.classList.remove('open');
  }
}

radio.forEach((element, index) => {
  element.addEventListener('change', () => {
    deleteClass();
    favoritesItems[index].classList.add('open')
  })
});


//////////////////////////////////////////////////////////////////

let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.carousel_container');
const track = document.querySelector('.carousel_items');
const items = document.querySelectorAll('.carousel_item');
const btnPrev = document.querySelector('.dotOne');
const btnNext = document.querySelector('.dotThree');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
})

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();