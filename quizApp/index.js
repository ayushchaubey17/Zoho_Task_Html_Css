
console.log("hyy");
let body = document.querySelector("body")
body.classList.add("bg-zinc-600")
let ab = document.querySelector('.parrent');
ab.classList.add("text-center")
ab.classList.add("mx-auto")


let JsonData = {
  "questions": [
    {
      "question": "What is the chemical symbol for water?",
      "options": ["H2O", "O2", "H2", "CO2"],
      "answer": "H2O"
    },
    {
      "question": "What planet is known as the Red Planet?",
      "options": ["Earth", "Mars", "Jupiter", "Venus"],
      "answer": "Mars"
    },
    {
      "question": "What gas do plants absorb from the atmosphere?",
      "options": ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
      "answer": "Carbon Dioxide"
    },
    {
      "question": "What is the hardest natural substance on Earth?",
      "options": ["Gold", "Iron", "Diamond", "Platinum"],
      "answer": "Diamond"
    },
    {
      "question": "How many bones are in the human body?",
      "options": ["206", "210", "201", "199"],
      "answer": "206"
    },
    {
      "question": "What is the powerhouse of the cell?",
      "options": ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
      "answer": "Mitochondria"
    },
    {
      "question": "What planet is closest to the sun?",
      "options": ["Venus", "Mars", "Mercury", "Earth"],
      "answer": "Mercury"
    },
    {
      "question": "What is the most abundant gas in the Earth's atmosphere?",
      "options": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
      "answer": "Nitrogen"
    },
    {
      "question": "What element does 'O' represent on the periodic table?",
      "options": ["Osmium", "Oxygen", "Oganesson", "Oxium"],
      "answer": "Oxygen"
    },
    {
      "question": "What is the boiling point of water?",
      "options": ["90°C", "100°C", "80°C", "120°C"],
      "answer": "100°C"
    },
    {
      "question": "What is the center of an atom called?",
      "options": ["Electron", "Proton", "Neutron", "Nucleus"],
      "answer": "Nucleus"
    },
    {
      "question": "What planet is known as the Earth's twin?",
      "options": ["Mars", "Venus", "Jupiter", "Saturn"],
      "answer": "Venus"
    },
    {
      "question": "What is the study of plants called?",
      "options": ["Zoology", "Botany", "Geology", "Ecology"],
      "answer": "Botany"
    },
    {
      "question": "What force keeps us on the ground?",
      "options": ["Magnetism", "Friction", "Gravity", "Tension"],
      "answer": "Gravity"
    },
    {
      "question": "What type of bond involves the sharing of electron pairs between atoms?",
      "options": ["Ionic", "Covalent", "Metallic", "Hydrogen"],
      "answer": "Covalent"
    },
    {
      "question": "What is the chemical formula for table salt?",
      "options": ["NaCl", "KCl", "MgCl2", "CaCl2"],
      "answer": "NaCl"
    },
    {
      "question": "What is the largest organ in the human body?",
      "options": ["Heart", "Liver", "Skin", "Lungs"],
      "answer": "Skin"
    },
    {
      "question": "What is the speed of light?",
      "options": ["300,000 km/s", "150,000 km/s", "250,000 km/s", "200,000 km/s"],
      "answer": "300,000 km/s"
    },
    {
      "question": "What is the main gas found in the air we breathe?",
      "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      "answer": "Nitrogen"
    },
    {
      "question": "What is the atomic number of carbon?",
      "options": ["4", "6", "8", "12"],
      "answer": "6"
    }
  ]
}







let array=[];
  let arr = JsonData.questions;

  arr.forEach((ele,ind)=>{

    let com = document.createElement('div');
    let que = document.createElement('h2');
     que.innerText = `${ind+1}.${ele.question}`;
     que.classList.add("ans");
     array.push(ele.answer);

     que.classList.add("font-bold")
     que.classList.add("text-lg")
     com.append(que);
   com.classList.add("bg-zinc-200")
   com.classList.add("sm:w-1/2")
   com.classList.add("w-11/12")
   com.classList.add("mx-auto")
   com.classList.add("my-2")
   com.classList.add("p-2")
   com.classList.add("rounded-lg")
    let optionsList = document.createElement("div");
    ele.options.forEach((options,ind)=>{
        let oneOption = document.createElement("div");
     
      let optionOne = document.createElement("h2");
      optionOne.innerText = `${ind+1}.  ${options}`;
    oneOption.classList.add("flex");
    oneOption.classList.add("gap-4");
    oneOption.classList.add("text-lg");
    oneOption.classList.add("border-2");
    oneOption.classList.add("sm:w-1/3");
    oneOption.classList.add("sm:w-1/2");
    oneOption.classList.add("mx-auto");
    oneOption.classList.add("bg-blue-200");
    oneOption.classList.add("transition");
    oneOption.classList.add("duration-1000");
    oneOption.classList.add("hover:ease-out");
    oneOption.classList.add("hover:bg-blue-500");
    oneOption.classList.add("hover:text-white");
    oneOption.classList.add("hover:font-bold");
    oneOption.classList.add("cursor-pointer");
    oneOption.classList.add("rounded-md");
    oneOption.classList.add("p-2");
    oneOption.classList.add("my-1");
      console.log(optionOne)
     
      oneOption.append(optionOne);

      optionsList.append(oneOption);
     oneOption.addEventListener("click",()=>{

      let parrent = oneOption.parentNode;
      let child =  parrent.children;
      for(let el of child){
        el.classList.remove("bg-green-500")
      }
        oneOption.classList.add("bg-green-500");

        que.setAttribute("name",`${options}`);
     })
     
        // console.log(ind+1,options)
    })
    com.append(optionsList);

    ab.append(com);
  });


  
