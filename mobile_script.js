

///slideshow code

var counter = 1;
setInterval(function(){
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if (counter > 5) {
		counter = 1;


	}

} , 5000);




//side-scroller code

let scrollContainer = document.querySelector('.gallery');

let backBtn = document.getElementById('backBtn');

let nextBtn = document.getElementById('nextBtn');


nextBtn.addEventListener('click', ()=>{
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft += 900;

})


backBtn.addEventListener('click', ()=>{
	scrollContainer.style.scrollBehavior = "smooth";
	scrollContainer.scrollLeft -= 900;

})











function openNav(){
	document.getElementById('mySideNav').style.width = "9em";

}


function closeNav(){
	document.getElementById('mySideNav').style.width ="0";

}





//search QUERY statement.


	function openPage(){
		let x = document.getElementById('searchbar').value;

		if(x === "bomber"){
			window.open('./stars_menu.html');


		}
		if(x === "speaker"){
			window.open('./second_object.html')



		}
		if(x ==="sonic"){
			window.open('./reputation.html')

		}



	}










///javaScript-multi-paradigm