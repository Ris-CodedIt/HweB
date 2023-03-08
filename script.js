const hiddenEl = document.querySelectorAll(".hidden");
let btntoggle = document.querySelector(".btn-toggle");
let menu = document.querySelector(".links-section");
const boxes = document.querySelectorAll(".service");
const quoteForm = document.querySelector(".form-register")



btntoggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
  
window.addEventListener("click", function (e) {
if (e.target === menu) {
    menu.classList.remove("show");
}
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("review");
      } else {
        entry.target.classList.remove("review");
      }
    });
  });
  
  hiddenEl.forEach((el) => observer.observe(el));
  
  window.addEventListener("scroll", checktop);
  
  checktop();
  
  function checktop() {
    const triggerPoint = window.innerHeight * 0.8;
    boxes.forEach((box) => {
      let top = box.getBoundingClientRect().top;
  
      if (top < triggerPoint) {
        box.classList.add("show-card");
      } else {
        box.classList.remove("show-card");
      }
    });
  }



quoteForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  let body = `
              Name: ${quoteForm.name.value} \n
              Phone: ${quoteForm.phone.value} \n
              Cargo-Type: ${quoteForm.from.value} \n
              From: ${quoteForm.from.value} \n
              To: ${quoteForm.to.value}
              `
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "tarisaishumba70@gmail.com",
  Password : "DA314B04C1571F4CD79BD083A4D45FF9EA42",
  To : 'risthanos@gmail.com',
  From : quoteForm.email.value,
  Subject : "qoutation enquiry",
  Body : body
}).then(
message => alert(message)
);
})

