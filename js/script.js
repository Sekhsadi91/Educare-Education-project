new WOW().init();

// $(document).ready(function(){
//     $('.list').click(function(){

//     })
    
// }
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.fliter-item').show('1000');
        }
        else{
            $('.fliter-item').not('.'+value).hide('1000');
            $('.fliter-item').filter('.'+value).show('1000');
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').removeClass('active');
    })
});

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 1967, 1000);
    counter("count2", 0, 177, 1000);
    counter("count3", 0, 98, 1000);
    counter("count4", 0, 1276, 1000);
   });

   $('.owl-carousel').owlCarousel({
       loop:true,
       margin:10,
       nav:true,
       dots:false,
       autoplay:true,
       responsive:{
           0:{
               items:1
           },
           600:{
               items:3
           },
           1000:{
               items:4
           },
       }
   })
   
