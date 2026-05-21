// scripts.js

document.addEventListener(
"DOMContentLoaded",
() => {

/* ELEMENTS */

const welcomePage =
document.getElementById(
"welcomePage"
);

const memoryPage =
document.getElementById(
"memoryPage"
);

const cardsPage =
document.getElementById(
"cardsPage"
);

const cardsContainer =
document.getElementById(
"cardsContainer"
);

/* CARDS DATA */

const cards = [

{
title:"1",
reward:"минон 💛",
image:
"https://i1-e.pinimg.com/control1/1200x/60/c3/a1/60c3a1698d57b81f25451313b1df7561.jpg"
},

{
title:"2",
reward:"клубничка 🍓",
image:
"https://i1-e.pinimg.com/control1/1200x/71/ea/82/71ea82901ae925e45f7e5fbe780ef517.jpg"
},

{
title:"3",
reward:"Халатус 🌿",
image:
"https://i1-e.pinimg.com/control1/1200x/d2/08/91/d2089108cd2e0174a2902ae2a50086ee.jpg"
},

{
title:"4",
reward:"Букетик 🌷",
image:
"https://i1-e.pinimg.com/control1/1200x/2e/9d/1c/2e9d1cf567c02fa5cde91d6a38978389.jpg"
},

{
title:"5",
reward:"Подарок 🎁",
image:
"https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=800&auto=format&fit=crop"
},

{
title:"6",
reward:"одежда ✨",
image:
"https://i1-e.pinimg.com/control1/1200x/49/92/f4/4992f411dc3ac613582413c3ff74d464.jpg"
},

{
title:"7",
reward:"сладкий подарок 🍰",
image:
"https://i1-e.pinimg.com/control1/1200x/8c/74/6f/8c746f89c91db0c5b8d8c0f3f80d7a7f.jpg"
},

{
title:"8",
reward:"маленький сюрприз 🎀",
image:
"https://i1-e.pinimg.com/control1/1200x/7f/89/f2/7f89f27c3f89a2f47dcb9c8c3a4f50f7.jpg"
}

];

let openedCards=[];

/* NAVIGATION */

window.openMemories=()=>{

welcomePage.classList.add(
"hidden"
);

memoryPage.classList.remove(
"hidden"
);

};

window.backToWelcome=()=>{

memoryPage.classList.add(
"hidden"
);

welcomePage.classList.remove(
"hidden"
);

};

window.openCards=()=>{

memoryPage.classList.add(
"hidden"
);

cardsPage.classList.remove(
"hidden"
);

};

window.backToMemories=()=>{

cardsPage.classList.add(
"hidden"
);

memoryPage.classList.remove(
"hidden"
);

};

/* RENDER */

function renderCards(){

if(!cardsContainer) return;

cardsContainer.innerHTML="";

cards.forEach(
(card,index)=>{

const wrapper=
document.createElement(
"div"
);

wrapper.className=
"card-wrapper";

wrapper.innerHTML=`

<div
class="card"
id="card-${index}">

<div
class="card-face card-front">

${card.title}

</div>

<div
class="card-face card-back">

<img
src="${card.image}"
class="card-image"

onerror="
this.style.display='none'
"
/>

<div
class="card-text">

${card.reward}

</div>

</div>

</div>

`;

wrapper.addEventListener(
"click",
()=>{

const currentCard=
document.getElementById(
`card-${index}`
);

if(!currentCard) return;

const opened=
currentCard.classList.contains(
"open"
);

/* CLOSE */

if(opened){

currentCard.classList.remove(
"open"
);

openedCards=
openedCards.filter(
i=>i!==index
);

return;

}

/* LIMIT */

if(
openedCards.length>=2
){

return;

}

currentCard.classList.add(
"open"
);

openedCards.push(
index
);

}

);

cardsContainer.appendChild(
wrapper
);

}

);

}

/* INIT */

renderCards();

}
);
