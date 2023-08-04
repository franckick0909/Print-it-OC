// Tableau des images et leurs tagLine

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupération des éléments html

const divBanner = document.getElementById("banner");
const imageSlide = document.querySelector(".banner-img");
const tagSlide = document.querySelector("p");
const nbSlide = slides.lenght;     // variable qui donne le nombre d'objets qui se trouvvent dans le Array slides
const suivant = document.querySelector(".arrow_right");
const precedant = document.querySelector(".arrow_left");




// variable du compteur = 0
let count = 0;


// Flèche à droite (suivant)

suivant.addEventListener("click", () => {            // addEventListener au click sur la flèche suivante
	console.log("j'ai bien cliqué à droite !");      // console.log pour s'assurer de bien cliquer à droite 
	slideSuivante();                                // function slideSuivante() 
})

function slideSuivante() {                // déclaration function de la fleche suivante
	count++;                              // compteur +1 (puisque c'est suivant)
	if (count == slides.length) {         // Si compteur est égal au tableau (Array) "slides" [0] [1] [2] [3]
		count = 0;                        // Alors compteur = 0
	}
	console.log(count);          // console.log de count, pour savoir à quelle numero du tableau (Array) je suis.

	slideShow(count);            // Déclaration de la function slideShow qui fait le défilement d'image et tagLine.
	/*dotSlideIndicator(); */       // Déclaration de la function dotSlideIndicator qui fait le défilement de la className (" dot_selected")
	dotSlidingIndicatorClassList();

}



// Flèche de gauche (precedant)

precedant.addEventListener("click",  () => {        // addEventListener au click sur la flèche precedant
	console.log("j'ai bien cliqué à gauche")      // console.log pour s'assurer de bien cliquer à gauche
	slidePrecedant();  

	                           // function slidePrecedant()

})

function slidePrecedant() {            // déclaration function de la fleche precedant
	count--;                           // compteur -1 (puisque c'est precedant)
	if (count < 0) {                   // Si le compteur est inférieur à 0
		count = slides.length -1;	   // Alors compteur = le tableau "slides" -1 (elle défile en arrière)
	}
	console.log(count);          // console.log de count, pour savoir à quelle numero du tableau (Array) je suis.

	slideShow(count);  
	
	dotSlidingIndicatorClassList()// Déclaration de la function slideShow qui fait le défilement d'image et tagLine.
	/*dotSlideIndicator();   */     // Déclaration de la function dotSlideIndicator qui fait le défilement de la className (" dot_selected")
	console.log(dots);
}


// Fonction name = (slideShow), pour faire touner les images et les tagLines par rapport au ("nombre de count" = params) du tableau

function slideShow(count) {

	imageSlide.src = "./assets/images/slideshow/" + slides[count].image;   // slide image par image.

	// (variable des img, qui va chercher les images dans le dossier "./assets/images/slideshow/" + le tableau de chaque numero d'image)
 
	tagSlide.innerHTML = slides[count].tagLine;            // slide tagLine par tagLine.
    // j'insere le texte HTML qui se trouve dans le tableau à chaque numero de tagLine
}

// Récupération des éléments html pour se qui concerne les bullets point

let dotParent = document.querySelector(".dots");
let dots = document.querySelectorAll(".dot");
let dotActive = document.querySelector(".dot_selected");
let activeDotNum = 0;


// 

/*
const dot1 = document.getElementById("dot-1")
dot1.addEventListener("click", () => {
	console.log("je click sur le dot-1");
});

const dot2 = document.getElementById("dot-2");
dot2.addEventListener("click", () => {
	console.log("je click sur le dot-2");
});

const dot3 = document.getElementById("dot-3");
dot3.addEventListener("click", () => {
	console.log("je click sur le dot-3");
});

const dot4 = document.getElementById("dot-4");
dot4.addEventListener("click", () => {
	console.log("je click sur le dot-4");
});
*/




// Pour chaque dot du tableau dots, j'envoi un écouteur d'évènement, où un count = 0, 1, 2, 3 dot, puis la fonction slideShow(count) + la fonction dotSlidingIndicatorClassList

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		count = i;

		console.log(i);

		slideShow(count);
		dotSlidingIndicatorClassList();
	});
	
});


function dotSlidingIndicatorClassList() {
	console.log("n'importe quoi");
	for (let i = 0; i < dots.length; i++) {

		dots[i].classList.remove("dot_selected");	
	}
	dots[count].classList.add("dot_selected");
	console.log(dots[count]);	

}

// slide automatique toutes les 5s => images suivantes à partir de l'image [0]

setInterval("slideSuivante(0)", 5000);










// Fonction (slideShow), pour faire touner le (".dot_selected")
/*
function dotSlideIndicator() {

console.log(dots);

	for (let i= 0; i < dots.length; i++) {
		console.log(dots[i], dots[i].className, dots[i].classList);
		dots[i].className = dots[i].className.replace(" dot_selected", "");

	}
	dots[count].className += (" dot_selected");
}
*/

/*
function dotClick (){
	for (let i = 0; i < dots.length; i++) {
		const dotElement = document.createElement("div");

		const dotActive = document.createElement("active");

		dotActive = dotElement[i++];

		dotElement.appendChild(dotActive);

		document.body.appendChild(dotElement);
		
	}

}




function dotClick(activeDotNum) {

	if (activeDotNum == count) {
		return false;
	}

	if (activeDotNum > count) {
		slideSuivante(activeDotNum + 1);
	}else{
		slideSuivante(activeDotNum + 1, true);
	}
}



dots.addEventListener("click", () => {
	console.log("j'ai bien cliqué sur le dot");

	dots.classList.replace("dot_selected");  
})
*/

/*
for (let i = 0; i < slides.length; i++) {
	
	dotEnfant.classList.add(".dot");
	dotParent.appendChild(dotEnfant);
	dotEnfant.addEventListener("click", dotClick.bind(null, i), false);
}
*/
/*
dotParent.addEventListener("click", () => {
	console.log("Vous avez cliqué sur le bouton")
	count = index;
	dotClick();
});

function dotClick() {
	dotParent.forEach((dotEnfant, index) => {
		
    dotEnfant.classList.toggle(".dot_selected", index === count);

	});
}


dotEnfant.addEventListener("click", () => {
	console.log("j'ai bien cliqué sur le dot");

	dotEnfant.classList.toggle("dot_selected");  
})



for (let i = 0; i < listdot.length; i++) {
	const listdotActuel = listdot[i];
	console.log(listdotActuel)

	listdotActuel.addEventListener("click", (event) => {
		listdot = event.target
		console.log(`j'ai bien cliqué sur le dot`)
	})
}
*/

/*
suivant.addEventListener('click', slideSuivante);    
console.log("je clique à droite", suivant);     

precedant.addEventListener('click', slidePrecedant);   
console.log("je clique à gauche");                     
*/


/*
const divBanner = document.getElementById("#banner");
const imageSlide = document.querySelector(".banner-img");
const nbSlide = slides.lenght;
const suivant = document.querySelector(".arrow_right");
const precedant = document.querySelector(".arrow_left");
let count = 0;


function slideSuivante() {
	count = (count++) % nbSlide;
	slideShow();
}

function slideShow() {
	const slide = slides[count];
	imageSlide.src = "./assets/images/slideshow/" + slides[count];
	
}

slideShow();


suivant.addEventListener("click", slideSuivante);

precedant.addEventListener("click", slidePrecedante);


/*
const sliderImages = slides.map(sliderImages => sliderImages.image)
console.log(sliderImages);

const numero = 0;


function changeSlide(sens) {
	for (let i = 0; i < slides.length; i++) {
		
       imageSlide = document.createElement(".banner-img");

		imageElement.src = slides.image;

		imageElement.appendChild(imageElement);

	    document.body.appendChild(imageElement);
	}
}



flecheDroite.addEventListener("click", () => {
	console.log("j'ai bien cliqué à droite !");

	function changeSens(sens) {
		numero = numero + sens;
		if (numero > slides.length) 
			numero = 0;
		if (numero < 0)
			numero = slides.length -1;
		
		document.querySelector(".banner-img").src = "assets/images/slideshow/" + slides[numero];

		imageSlide = document.createElement(".banner-img");
		
	}

});


flecheGauche.addEventListener("click", () => {
	console.log("j'ai bien cliqué à gauche !");

});
 









/*

suivant.addEventListener('click', function () {
	activeSlide++; 
	if (carrousel.length - 1 < activeSlide) {
		currentSlide = 0;
	};
	changeSlide(activeSlide);
	console.log(suivant);
});
*/

/*
suivant.addEventListener("click", () => {
	if (index += slidess.length)
	    index = 0;
	if (index < 0) {
		index = slidess.length -1;
		}
	
	console.log(index);
});


const slidess = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];

for (let i = 0; i < suivant.length; i++) {
	suivant.addEventListener("click", () => {

	  console.log(slidess);
	});
  }



const slidess = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];

let numero = 0;

function changeSlide(sens) {
	numero = numero + sens;
	if (numero > slidess.length -1) 
		numero = 0;
	if (numero < 0)
	    numero = slidess.length -1;
	
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slidess[numero];
}

*/




/*

suivant.addEventListener("click", () => {
	slides += slides.length;
	console.log(slides);
});


precedant.addEventListener("click", () => {
	slides += slides.length;
	console.log("precedant est appelé !");
});


/*

function changeSlide() {
	if (index > slides.length -1) {
		index = 0;
	}
	if (index < 0) {
		index = slides.length -1;
	}

	for (let index = 0; index < slides.length; index++) {
	}
}

// load
/*
slides.length;
console.log(slides);

for (let i = 0; i < slides.length; i++) {
	console.log(slides[i]);
	
}
*/


/*
const slidess = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
let numero = 0;

function changeSlide () {
	document.querySelector(".banner-img").src = "assets/images/slideshow/slide1.jpg";

}

function changeSlide(sens) {
	numero = numero + sens;
	if (numero > slidess.length) 
		numero = 0;
	if (numero < 0)
	    numero = slidess.length -1;
	
	document.querySelector(".banner-img").src = "assets/images/slideshow/" + slidess[numero];
}



setInterval("changeSlide(1)", 4000);
*/