$(function() {
    // ------------------------------------------------------- //
    // Multi Level dropdowns
    // ------------------------------------------------------ //
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
      event.preventDefault();
      event.stopPropagation();

      $(this).siblings().toggleClass("show");


      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });

    });
  });

$(document).ready(function(){
  const p1 = document.getElementById('p1')
  const p2 = document.getElementById('p2')
  const p3 = document.getElementById('p3')
  const p4 = document.getElementById('p4')
  const p5 = document.getElementById('p5')
  // p1.addEventListener('click', function(){
  //   window.open('decorative-plywood-doors.html', '_blank');
  // });
  // p2.addEventListener('click', function(){
  //   window.open('plywood.html', '_blank');
  // });
  // p3.addEventListener('click', function(){
  //   window.open('blockboard.html', '_blank');
  // });
  // p4.addEventListener('click', function(){
  //   window.open('flushdoor.html', '_blank');
  // });
  // p5.addEventListener('click', function(){
  //   window.open('filmface-shuttering-plywood.html', '_blank');
  // });
})

//Wow Animation

new WOW().init();
  
