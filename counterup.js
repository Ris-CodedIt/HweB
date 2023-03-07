const counterBox = document.querySelector(".why");
const num = document.querySelectorAll(".why-card-number");


window.addEventListener("scroll", checkCounterBox);
  
checkCounterBox();

function checkCounterBox() {
  const triggerPoint = window.innerHeight * 0.7;
  let top = counterBox.getBoundingClientRect().top;
 if (top < triggerPoint) {
     num.forEach(x=>{
         x.classList.add("count")
     })
     const counters = document.querySelectorAll(".count");
     counters.forEach(counter=>{
        counter.innerText = "0"
        const updateCounter= ()=>{
        const targ = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = targ/50
        if (c < targ){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
        }
        
         updateCounter()
        })
        

    }

    else{
        num.forEach(x=>{
            x.classList.remove("count")
        })
    }
}



