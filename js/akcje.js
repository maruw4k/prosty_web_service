var akcja;
var wszystkie_akcje = [];
$(document).ready(function(e){
  $.ajax({
     url: "https://crossorigin.me/http://finanse.wnp.pl/gpw/", dataType: 'text', type: "get", success: function(data) {
		     akcja = $("<div>").html(data)[0].getElementsByClassName("table4")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
         for (var i = 0; i < akcja.length; i++) {
           if(akcja[i].id == ""){
             wszystkie_akcje.push(akcja[i].getElementsByTagName("td")[0].getElementsByTagName("a")[0].firstChild.nodeValue);
           }else{
             continue;
           }
        }
        var input = document.getElementById("search");
     }
   });
});

function znajdz(){;
  var szukanaAkcja = document.getElementById("search").value;
  for (var i = 0; i < akcja.length; i++) {
        if(akcja[i].getElementsByTagName("td")[0].getElementsByTagName("a")[0].firstChild.nodeValue == szukanaAkcja){
          document.getElementById("kurs").value = akcja[i].getElementsByTagName("td")[1].firstChild.nodeValue;
          document.getElementById("zmiana").value = akcja[i].getElementsByTagName("td")[2].firstChild.nodeValue;
        }else{
          continue;
        }
  }
};
