$(document).ready(function(e){

$.ajax({
    type     : 'get',
    dataType:  'text',
    url      : "https://crossorigin.me/http://nafta.wnp.pl/ceny_paliw/",
    success: function(data) {
        var elements = $("<div>").html(data)[0].getElementsByClassName("pageNotowania tabela")[3].getElementsByTagName("tr")[2].getElementsByTagName("td");
        ON = elements[1].firstChild.nodeValue.split(" ")[0];
			  E95 = elements[2].firstChild.nodeValue.split(" ")[0];
			  S98 = elements[3].firstChild.nodeValue.split(" ")[0];
			  LPG = elements[4].firstChild.nodeValue.split(" ")[0];
       console.log('udalo sie pobrac');
    },
    error: function(jqXHR, errorText, errorThrown) {
        console.log('Nie udało się pobrać danych')
    }
});

    


});


   function oblicz(){
      
   if (!$("input[name='optradio']:checked").val()) {
       alert('Nic nie jest zaznaczone!');
        return false;
    }
    else {

var labelE95 = document.getElementById("E95").checked;
var labelS98= document.getElementById("S98").checked;
var labelOn = document.getElementById("ON").checked;
var labelLPG = document.getElementById("LPG").checked;
var spalanie = document.getElementById("spalanie").value;
var droga = document.getElementById("km").value;
      
      
var paliwouzyte = Math.round((droga*spalanie)/100);
var cena = 0.0;
      
   if(labelOn = true){
	  cena = ON;
  }else if(labelE95 =  true){
	  cena = E95;
  }else if(labelS98 = true){
	  cena = S98;
  }else if(cena_LPG = true){
	  cena = LPG;
  }
      
      
       var koszt_podrozy = Math.round(paliwouzyte * cena * 100)/100;
      document.getElementById("wynik").innerHTML = "Koszt przejazdu: " + koszt_podrozy + " zł";
      
      
      $('.wynik').html = koszt_podrozy;
      
      console.log(koszt_podrozy);
   
    }
   };