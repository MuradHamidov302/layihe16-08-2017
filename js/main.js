  //id reating------------------


   $(".listing-item-link").hover(function(){
   $(this).parent().children(".listing-item-date").animate({top: '-20px',opacity:'0'},50);
   $(this).parent().children(".category-icon ").animate({top: '-20px',opacity:'0'},50);
   $(this).parent().children(".listing-item-rating ").animate({top: '20px',opacity:'0'},50);

 }, function () {
         
      $(this).parent().children(".listing-item-date").animate({top: '0px',opacity:'1'},50);
       $(this).parent().children("#reyting .category-icon ").animate({top: '0px',opacity:'1'},50);
       $(this).parent().children("#yeniler .category-icon ").animate({top: '11px',opacity:'1'},50);
        $(this).parent().children(".listing-item-rating ").animate({top: '12%',opacity:'1'},50);
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

