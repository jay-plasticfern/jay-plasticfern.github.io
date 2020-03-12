/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
 // Instantiate the Bootstrap carousel
 $('.multi-item-carousel').carousel({
   interval: false
 });

 // for every slide in carousel, copy the next slide's item in the slide.
 // Do the same for the next, next item.
 $('.multi-item-carousel .item').each(function(){
   var next = $(this).next();
   if (!next.length) {
     next = $(this).siblings(':first');
   }
   next.children(':first-child').clone().appendTo($(this));

   if (next.next().length>0) {
     next.next().children(':first-child').clone().appendTo($(this));
   } else {
   	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
   }
 });

 // retrieve the element
 var element = document.getElementById("contactus");
 // reset the transition by...
 element.addEventListener("mouseenter", function(e) {
   e.preventDefault;
   // -> removing the class
   element.classList.remove("pulse");
   // -> triggering reflow /* The actual magic
   void element.offsetWidth;
   // -> and re-adding the class
   element.classList.add("pulse");
 }, false);

 // retrieve the element
 var element6 = document.getElementById("sendform");
 // reset the transition by...
 element.addEventListener("mouseenter", function(e) {
   e.preventDefault;
   // -> removing the class
   element.classList.remove("pulse");
   // -> triggering reflow /* The actual magic
   void element.offsetWidth;
   // -> and re-adding the class
   element.classList.add("pulse");
 }, false);

 // retrieve the element
 var element2 = document.getElementById("serv1");
 // reset the transition by...
 element2.addEventListener("mouseenter", function(e) {
   e.preventDefault;
   // -> removing the class
   element2.classList.remove("jello");
   // -> triggering reflow /* The actual magic
   void element2.offsetWidth;
   // -> and re-adding the class
   element2.classList.add("jello");
 }, false);

 // retrieve the element
 var element3 = document.getElementById("serv2");
 // reset the transition by...
 element3.addEventListener("mouseenter", function(e) {
   e.preventDefault;
   // -> removing the class
   element3.classList.remove("jello");
   // -> triggering reflow /* The actual magic
   void element3.offsetWidth;
   // -> and re-adding the class
   element3.classList.add("jello");
 }, false);

 // retrieve the element
 var element4 = document.getElementById("serv3");
 // reset the transition by...
 element4.addEventListener("mouseenter", function(e) {
   e.preventDefault;
   // -> removing the class
   element4.classList.remove("jello");
   // -> triggering reflow /* The actual magic
   void element4.offsetWidth;
   // -> and re-adding the class
   element4.classList.add("jello");
 }, false);

 // retrieve the element
 var element5 = document.getElementById("serv4");
 // reset the transition by...
 element5.addEventListener("mouseenter", function(e) {
   e.preventDefault;
   // -> removing the class
   element5.classList.remove("jello");
   // -> triggering reflow /* The actual magic
   void element5.offsetWidth;
   // -> and re-adding the class
   element5.classList.add("jello");
 }, false);

 /* When the user clicks on the button,
 toggle between hiding and showing the dropdown content */
 function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }
 function myFunction2() {
   document.getElementById("myDropdown2").classList.toggle("show");
 }

 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
   if (!event.target.matches('.dropbtn2')) {
     var dropdowns = document.getElementsByClassName("dropdown-content2");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
 }
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
//$('body').scrollspy({
//    target: '.navbar-fixed-top'
//})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
