$(function(){

    $("a").click(function(event){
        if(this.hash !== ""){
          event.preventDefault();
    
          var gato = this.hash;
    
          $("html, body").animate({
            scrollTop: $(gato).offset().top
          }, 800, function(){
            window.location.hash = gato;
          });
        }
      });

    $(".bujo").click(function(){
        var imagen = $(this).attr("src");
        var Titulo = $(this).attr("alt");
        var red1 = $(this).attr("red1");
        var red2 = $(this).attr("red2");
        var red3 = $(this).attr("red3");
        if(imagen == null){
            alert("no hay imagen para mostrar");
        }else{
            $(".pegaImagen").attr("src",imagen);
            $(".pegaTitulo").text(Titulo);
            $(".pegaRed1").attr("href",red1);
            $(".pegaRed2").attr("href",red2);
            $(".pegaRed3").attr("href",red3);
            $("#modalDibujos").modal();
        }
    });
});