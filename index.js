let coin = document.getElementsByTagName("img")
let coin1 = document.querySelector("h1")
let coin2 = document.querySelector("h3")
let swap1 = 0;








coin[0].addEventListener("click" , ()=>{
    let swap = ((Math.round(Math.random() * 10)) +1)
    swap1+=swap
    coin1.innerHTML = swap1
    coin2.innerHTML = `+${swap}`
})    