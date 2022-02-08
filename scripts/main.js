// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000,
  //disable: 'mobile'
});

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  horizontalOrder: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  

//intro logo
let intro = document.querySelector('.sintro');
let logo = document.querySelector('.slogo-header');
let logoSpan = document.querySelectorAll('.slogo');

window.addEventListener('DOMContentLoaded', ()=>{

		setTimeout(()=>{

			logoSpan.forEach((span, idx) =>{
				setTimeout(()=>{
					span.classList.add('active');
				}, (idx + 1) * 400)
			});

			setTimeout(()=>{
				logoSpan.forEach((span, idx) =>{

				setTimeout(()=>{
					span.classList.remove('active');
					span.classList.add('fade');
				}, (idx + 1) * 50)
			})
		},2000);

		setTimeout(()=>{
			intro.style.top = '-100vh';
		},2300);
	})
})



// Add your javascript here
