//Slider
const dots = document.querySelector('.dots');
const dot = document.querySelectorAll('.dot')
dots.addEventListener('click', function (e) {
  // if (!e.target.classList.contains('dot'))         // если клик не по ссылке, просто завершим выполнение 
  //   return; 
  // e.preventDefault();                                // отменим стандартную реакцию ссылки на клик
  for (let link of this.querySelectorAll('.dot'))  // удалим класс active у всех наших ссылок... 
    link.classList.remove('active');
  e.target.classList.add('active');                  // ...и добавим его той, по которой выполнен клик
});

const slides = document.querySelector('.carousel_items');
const slide = document.querySelectorAll('.carousel_item');

let currentIndex = 0;
const totalSlides = slide.length;

function updateSliderPosition() {
  slides.style.transform = `translateX(-${currentIndex * 34}%)`;
}

console.log(Number(dot[1].value));

dots.addEventListener('click', () => {
  for (let index = 0; index < dots.length; index++) {
    if (Number(dot[index].value) == 1) {
      currentIndex = 1;
      console.log('ass');
    } else if (Number(dot[index].value) == 2) {
      currentIndex = 2;
      console.log('ass beach');
    } else currentIndex ===0;
  }
  updateSliderPosition();
});

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
