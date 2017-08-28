  //id reating------------------


   $(".listing-item-link").hover(function(){
   $(this).parent().children(".listing-item-date").animate({top: '-20px',opacity:'0'},50);
   $(this).parent().children(".category-icon ").animate({top: '-20px',opacity:'0'},50);
   $(this).parent().children(".listing-item-rating ").animate({top: '20px',opacity:'0'},50);
    $(this).parent().children(".listing-item-author  ").animate({top: '104px',opacity:'0'},50);

 }, function () {
         
      $(this).parent().children(".listing-item-date").animate({top: '0px',opacity:'1'},50);
      $(this).parent().children("#reyting .category-icon ").animate({top: '0px',opacity:'1'},50);
      $(this).parent().children("#left-content .category-icon ").animate({top: '25px',opacity:'1'},50);
      $(this).parent().children("#yeniler .category-icon ").animate({top: '11px',opacity:'1'},50);
      $(this).parent().children(".listing-item-rating ").animate({top: '12%',opacity:'1'},50);
      $(this).parent().children(".listing-item-author  ").animate({top: '84px',opacity:'1'},50);
        });
     
//id reating end---------------

//scrollhome page start-----------------
   var go_up=650;
 $(window).scroll(function(){

  	if(window.pageYOffset>go_up){ $(".scroll").fadeIn() }
  		else{ $(".scroll").fadeOut() }
	});

  $(".scroll").click(function () {
  
$("html,body").animate({
	scrollTop:0
},1000);

   });
//scroll home page end-------------------------


//start avtopaly slider home page section yeniler and reating
$(document).ready(function(){
$(".owl-carousel").owlCarousel({
  items:4,

    loop:true,
    margin:10,
     autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }}
});

});
//end avtoplay slider ---

//start like button----------------------------------------------------------------------
var like=true;
$("#yeniler i").click(function(){

if (like==true) {
  $( this ).css( "color", "red" );
  like=false;
}else{
   $( this ).css( "color", "#2AA589");
   like=true;
}

});
//end like button


 //MURAD BU COMMENTE ALDIGIM YERI JAVASCRIPT FAYLINI TAPIB YERLESDIRERSEN 
//JAVASCRIPT FAYLLARINI NE ETMISEN? HEC BIRI YOXDU 

  function myFunction(){
    document.getElementById('mySelector').css(display, 'block');
  }
////end