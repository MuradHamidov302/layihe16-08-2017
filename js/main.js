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
$("#reyting i").click(function(){

if (like==true) {
  $( this ).css( "color", "red" );
  like=false;
}else{
   $( this ).css( "color", "#2AA589");
   like=true;
}

});
//end like button

 var a=2;
function slidemenyOpen(){
   a++;
   if(a%2){
    document.getElementById("slidemenu").style.display="block";
    document.getElementById("searchField").style.top="38em";
   }
   else{
    document.getElementById("slidemenu").style.display="none";
    document.getElementById("searchField").style.top="20em";
   }
}
// navbar begin

// navbar end


  function myFunction(){
    document.getElementById('mySelector').css(display, 'block');
  }

  // register popup begin
   function openRegister(){
    document.getElementById("register-form").style.display="block";
    document.getElementById("login-form").style.display = "none";
  }

   function closeRegister(){
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display="none";
  }


  function toLeft(){
    document.getElementById("popupRow").style.left = "-300em";
    document.body.style.overflow = "visible";
   };

function fromLeft(){
    document.getElementById("popupRow").style.left = "0em";
    document.body.style.overflow = "hidden";
  };

  // register popup end
  // search toggle begin
  var m=2;
  function searchBoxOpen(){
     m++;
     if(m%2){
      document.getElementById("search-cities-drag").style.left = "0em";
     }
     else{
      document.getElementById("search-cities-drag").style.left = "-42em";
     }
  }
  // serch toggle end
  // listing grid 5 deki xerite  begin
function mapOpen(){
   document.getElementById("mapImg").style.left = "-100em";
   document.getElementById("mapTor").style.width = "100%";
}

function mapClose(){
   document.getElementById("mapImg").style.left = "0em";
   document.getElementById("mapTor").style.width = "55%";
}


function test(){
  console.log('Success ugurlu');
}
// listing grid 5 deki xerite end

// catalog search begin
 // search toggle begin
  var c=1;
  function searchBoxOpen2(){
     c++;
     if(c%2){
      document.getElementById("search-cities-drag").style.display = "none";
     }
     else{
      document.getElementById("search-cities-drag").style.display = "block";
     }
  }
  // serch toggle end
// catalog search end
//end




