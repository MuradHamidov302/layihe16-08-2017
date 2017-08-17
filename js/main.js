  //id reating------------------


 //   $(".listing-item").hover(function(){
 //       $(".listing-item-rating").fadeOut();
 //       $(".category-icon ").fadeOut();
	// $(".listing-black-overlay").fadeOut();
 //        }, function(){
 //        $(".listing-item-rating").fadeIn();
 //       $(".category-icon ").fadeIn();
	//    $(".listing-black-overlay").fadeIn();
 //    });

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
},800);

   });
//scroll home page end-------------------------