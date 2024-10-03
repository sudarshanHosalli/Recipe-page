import recipeData from "./Instructions.json"  with { type: "json" };

const InstructionsContainer = document.querySelector(".instrc-container");

recipeData.steps.map((e) => {
   InstructionsContainer.innerHTML += `
     <li class="instrc-info">
       <span class="instrc-info-span">${e.step}.</span>
       <p class="instrc-para">
         <span class="span-bold-text2">${e.title}: </span> ${e.description}
       </p>
     </li>`;
 });
 


