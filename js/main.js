  //id reating------------------


   // $(".listing-item-link").hover(function(){
   //     $( ".listing-item-rating").animate({top: '0px'}).fadeOut();
   //     $( ".category-icon ").animate({top: '-20px'}).fadeOut();
	  //    $(".listing-item-date").animate({top: '-20px'}).fadeOut();
   //      });

   //      $(".listing-item-link").mouseout( function(){
   //    $(".listing-item-rating").fadeIn().animate({top: '12%'});
   //     $(".category-icon ").fadeIn().animate({top: '0px'});
   //     $( ".listing-item-date").fadeIn().animate({top: '0px'});
	  
   //  });

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

