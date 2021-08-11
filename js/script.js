let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let hambuger = $(".hambuger");
let menu = $(".menu");
const faqItems = $$(".faq-item");
if (hambuger) {
  hambuger.onclick = (e) => {
    menu.classList.toggle("is-active");
  };
}

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
