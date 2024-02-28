
///this is the slideShow JS code.
let counter = 2;
	
		setInterval(()=>{
			document.getElementById('radio'+counter).checked = true;
				counter++;
				if(counter>4){
					counter=1;
				}
			
		},5000);




///heres the search-bar functionality

 function openPage(){
 		let x = document.getElementById('q').value;

 		if(	x==="bomber"	){
 				window.open("./product_1.html");


 		}
		if(x==="victoria"){
			window.open('./VSP.html')

		}
 
		if(x==="sonic"){
			window.open('./e-com.html')


		}

 }











/* here lies the Swiper-slider source code. */

let scrollConainer = document.querySelector('.gallery');

let backBtn = document.getElementById('backBtn');

let nextBtn = document.getElementById('nextBtn');




scrollConainer.addEventListener('wheel', (evt)=>{
	evt.preventDefault();
	scrollConainer.scrollLeft += evt.deltaY;
	scrollConainer.style.scrollBehavior = "auto";


});

nextBtn.addEventListener('click', ()=>{
	scrollConainer.style.scrollBehavior = "smooth";
	scrollConainer.scrollLeft += 900;



})


backBtn.addEventListener('click', ()=>{
	scrollConainer.style.scrollBehavior = "smooth";
	scrollConainer.scrollLeft -= 900;



})





/* this is the sideMenu options functionality */


function openNav(){
  document.getElementById('mySideNav').style.width = '25rem';



}

function closeNav(){
  document.getElementById('mySideNav').style.width = '0';



}



///mobile adaptation


 <!--
      if (screen.width <= 699) {
         document.location = "go-lang.html";
           }
            //-->







// JavaScript Document