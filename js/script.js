$(".client-list").slick({
  prevArrow: `<button type='button' class='slick-prev pull-left'> <i class="fa fa-arrow-left" aria-hidden="true"></i></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa fa-arrow-right" aria-hidden="true"></i></button>`,
});

let _$ = document.querySelector.bind(document);
let _$$ = document.querySelectorAll.bind(document);
let hambuger = _$(".hambuger");
let menu = _$(".menu");
let closeMenu = _$(".close-menu");
const faqItems = _$$(".faq-item");


//open Menu
if (hambuger) {
  hambuger.onclick = (e) => {
    menu.classList.add("is-active");
  };
}

//close menu
if (closeMenu) {
  closeMenu.onclick = (e) => {
    menu.classList.remove("is-active");
  };
}


//click outside
// hide when clicking outside menu
document.body.addEventListener("click" , e => {
  console.log(e.target)
  console.log(menu.contains(e.target));
  console.log(e.target.closest(".hambuger"))
  if(!menu.contains(e.target) && !e.target.closest(".hambuger")) {
    menu.classList.remove("is-active");
  }
});

if (faqItems) {
  for (const faqItem of faqItems) {
    faqItem.onclick = (e) => {
      for (const faqItem of faqItems) {
        faqItem.classList.remove("is-active");
      }
      faqItem.classList.add("is-active");
    };
  }
}
