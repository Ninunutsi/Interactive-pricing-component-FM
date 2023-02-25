let range = document.getElementById('range')
let price = document.getElementById('price')
let progress = document.getElementById('progressBar')
let views = document.getElementById('pageviews')
let percent
let view

function checkVal(val){
    switch(val){
        case '8':
            percent = 20
            view = 10 +'K'
            break;
        case '12':
            percent = 40
            view = 50 +'K'
            break;
        case '16':
            percent = 60
            view = 100 +'K'
            break;
        case '20':
            percent = 80
            view = 500 +'K'
            break;
        case '24':
            percent = 100
            view = 1 + 'M'
            break;
    }

    views.innerHTML = view
    return percent
    
}

function greenBg(){
    let x = (range.value - range.min)  / (range.max - range.min) * 100;
    let color = `linear-gradient(to right, hsl(174, 77%, 80%) ${x}%, hsl(174, 77%, 80%) ${x}%,
    hsl(224, 65%, 95%) ${x}%, hsl(224, 65%, 95%) ${x}%)`;
    range.style.background = color;
    checkVal(range.value);
}

window.addEventListener('load', () => {
    greenBg()
})

range.oninput = function(){
    price.innerHTML = '$'+ this.value + ".00"
    views.innerHTML = views.innerHTML / 2
    greenBg()
}


let checkBox = document.querySelector("input[type=checkbox]")

checkBox.addEventListener("click", () => {
    if (checkBox.checked == true){
        price.innerHTML = '$'+ ((range.value * 12) - (range.value * 25 / 100)) + ".00"
        range.oninput = function(){
            price.innerHTML = '$'+ ((range.value * 12) - (range.value * 25 / 100)) + ".00"
            views.innerHTML = views.innerHTML / 2
            greenBg()
        }
      } else {
        price.innerHTML = '$'+ range.value + ".00"
        range.oninput = function(){
            price.innerHTML = '$'+ this.value + ".00"
            views.innerHTML = views.innerHTML / 2
            greenBg()
        }
      }
})

let discount = document.getElementById('discount')

if (window.matchMedia("(max-width: 700px)").matches) {
    discount.innerHTML = "-25%"
  } else {
    discount.innerHTML = "-25% discount"
  }