let sub = document.querySelector(".sub");
let hid = document.querySelector(".hid");
let spin = document.querySelector(".spiner");
let score = document.querySelector(".score");
let cal = document.querySelector(".cal");
let ty = document.querySelector(".ty");

let calScore = ()=>{
    let count =0;
for (let i = 0; i < array.length; i++) {
    
    if (array[i]===matchAns[i].getAttribute("name")) {
        count++;
    }
    
}
return count;
}


sub.addEventListener("click",()=>{
ab.classList.add("hidden");
hid.classList.remove("hidden")
// hid.classList.r("hidden")
sub.classList.add("hidden")
setTimeout(() => {
    let ans =  calScore(); 
   spin.classList.add("hidden")
   score.innerText = `question corrected - ${ans}/20`;
   cal.innerText = "Your score "
   cal.classList.add('text-red-400')
   ty.classList.remove('hidden')

}, 1);
})


let matchAns = document.querySelectorAll(".ans");



console.log(array)

ty.addEventListener('click',()=>{

    let result = document.querySelector('.result');
    result.innerHTML = ab.innerHTML;
    result.classList.remove("hidden");
    let chld = result.childNodes;


    for(let que of chld){
    //    que.setAttribute("id","i1")

    const htmlString = que.innerHTML;

   
    const parser = new DOMParser();

    // Parse the HTML string into a Document
    const doc = parser.parseFromString(htmlString, 'text/html');

   let h2 = doc.querySelector("h2");
   let div = doc.querySelector("div")
    //  console.log(val)
     console.log(div.classList)

    }
   
})

