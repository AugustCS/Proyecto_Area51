  $(window).load(function() {
    $('.flexslider').flexslider({
    	animation: "slide",
	    animationLoop: false,
	    itemWidth: 370,
	    itemMargin: 6,
	    minItems: 2,
	    maxItems: 4
    });

    $('#hola1').owlCarousel({
    	items:1,
    	autoplay:true,
    	autoplayTimeout:4000,
    	loop:true
    });

    $('#hola2').owlCarousel({
      item:3,
      loop:true,
      autowidth:true,
      center:true,
      margin:10,
       responsive:{
        0:{
            items:1
        },
        700:{
          items:2
        },
        800:{
            items:2
        },
        1000:{
            items:4
        }
    }

    });


    $('#my-link').panelslider();


    //revisar codigo y efecto
    $(".menu li a").click(function(){
    	$(".menu li a").removeClass("active");
    	$(this).addClass("active");
    });

/*********logica modal******/
    $(".galery img").click(function(){
       var ruta= $(this).attr("src");
       $(".img-galeria img").attr("src",ruta);
       $(".modal").fadeIn();
       $(".close").css("color","black");

       $(document).keydown(function(tecla){
        if(tecla.keyCode==27){
           $(".modal").fadeOut();
        }   
       });

       if(ruta=="img/g2.jpg"){
            $(".close").css("color","white");
             $(".img-galeria img").attr("src",ruta);
             $(".modal").fadeIn();
       }
    });
    $(".close").click(function(){
        $(".modal").fadeOut();
    });

function closelink(e){
  e.preventDefault();
} 
$(".s3 a,.arti4 h4 a,.opciones li a,.contact,.datos_slider a,.enlace-menu,.seccion5 a,.menu li a,.arti2 a").click(function(e){
  closelink(e);
})

$(window).scroll(function(){
  var ancho= $(window).width();
  var scroll = $(window).scrollTop();

  console.log(scroll);

      if(scroll>450 && ancho>1160){
        $(".arti").addClass("animated");
        $(".arti").addClass("bounceInDown");
      }

      if(scroll>920 && ancho>1160){
        $(".arti2").addClass("animated");
        $(".arti2").addClass("bounceIn");
      }
      
      if(scroll>1800 && ancho>1160){
        $(".seccion4").addClass("animated");
        $(".seccion4").addClass("fadeIn");
      }
      if(scroll>3548 && ancho>1160){
        $(".footer").addClass("animated");
        $(".footer").addClass("jello");
      }
      if(scroll>145 && ancho>1160){
        $(".caja-fixed").fadeIn("fast");
        $(".menu-fixed").fadeIn("fast");
        $(".logo").addClass("izquierda");
        $(".menu").addClass("derecha");
      }else{
         $(".caja-fixed").fadeOut("fast");
         $(".logo").removeClass("izquierda");
        $(".menu").removeClass("derecha");
      }

     if(scroll>145 && ancho>1000){
        $(".up").fadeIn();
        $(".up").click(function(){
          $(window).scrollTop(0);
        });
      }else{
        $(".up").fadeOut();
      }
});

/*
$(".t-search").click(function(){
  $(".caja-busqueda").fadeIn();
  $(document).keydown(function(tecla){
        if(tecla.keyCode==27){
           $(".caja-busqueda").fadeOut();
        }   
       });
});*/



/*$(".slides li img").mouseenter(function(){
    $(".flexfondo").fadeIn();
});

$(".slides li img").mouseleave(function(){
  $(".flexfondo").fadeOut();
});*/





/********FINAL**********/  
});