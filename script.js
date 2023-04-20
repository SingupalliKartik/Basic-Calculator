let b = document.getElementsByTagName("button")
let d= document.querySelector(".display")



console.log(d.innerText);

   let decimalOnce= false;

function num(e){

    
    if (e == `.`  && !decimalOnce) {
        if (d.innerText[d.innerText.length - 1] != '.') {
            d.innerHTML += '.';
            decimalOnce = true;
        }
        else {
            d.innerHTML +=0;
            d.innerHTML +='.';
             decimalOnce = true;
        }
    }
    else if(d.innerText==0){
        d.innerHTML = e;
    }
else if (e!= `.`){
    d.innerHTML+=e;}
}

function equal(){
    let final =Number.parseFloat( d.innerText);
    final= eval(d.innerText);
    console.log(final);
    d.innerHTML= Math.round(final* 10000) / 10000;
}

function power(){
    let final =Number.parseFloat( d.innerText);
    final= Math.pow(final,2);
    console.log(final);
    d.innerHTML= Math.round(final* 10000) / 10000
}
function root(){
    let final =Number.parseFloat( d.innerText);
    final= Math.sqrt(final);
    console.log(final);
    d.innerHTML= final
}
function del(){
    let final =Number.parseFloat( d.innerText);
    final= Number.parseFloat(final/10);
    console.log(final);
    d.innerHTML= final
}
function reset() {
    location.reload()
}