var op,valor1,valor2,res;


$(document).on("click", "#Um", function(){
  $('#result').val($('#result').val() + "1");
  $('#result2').val($('#result2').val() + "1");
});

$(document).on("click", "#Dois", function(){
  $('#result').val($('#result').val() + "2");
  $('#result2').val($('#result2').val() + "2");
});

$(document).on("click", "#Tres", function(){
  $('#result').val($('#result').val() + "3");
  $('#result2').val($('#result2').val() + "3");
});

$(document).on("click", "#Quatro", function(){
  $('#result').val($('#result').val() + "4");
  $('#result2').val($('#result2').val() + "4");
});

$(document).on("click", "#Cinco", function(){
  $('#result').val($('#result').val() + "5");
  $('#result2').val($('#result2').val() + "5");
});

$(document).on("click", "#Seis", function(){
  $('#result').val($('#result').val() + "6");
  $('#result2').val($('#result2').val() + "6");
});

$(document).on("click", "#Sete", function(){
  $('#result').val($('#result').val() + "7");
  $('#result2').val($('#result2').val() + "7");
});

$(document).on("click", "#Oito", function(){
  $('#result').val($('#result').val() + "8");
  $('#result2').val($('#result2').val() + "8");
});

$(document).on("click", "#Nove", function(){
  $('#result').val($('#result').val() + "9");
  $('#result2').val($('#result2').val() + "9");
});

$(document).on("click", "#Zero", function(){
  $('#result').val($('#result').val() + "0");
  $('#result2').val($('#result2').val() + "0");
});

$(document).on("click", "#Apagar", function(){
  $("#result").val("");
  $("#result2").val("");
 
 //para apagar de um em um,caso queira usar depois:
 // var len = $("#result").val().length; //contar todos os caracteres.
//  var valor = $("#result").val();
//  valor = valor.replace(valor.charAt(len - 1 ),""); //todos os caracteres menos um.
 // $("#result").val(valor);
});

$(document).on("click", "#Raiz", function(){
  $('#result').val($('#result').val() + "√");
  valor1=parseFloat($("#result2").val());
  $("#result2").val(" ");
 alert("A Estrutura é número+√: 5√");
  op="√";
});

$(document).on("click", "#Virgula", function(){
  $('#result').val($('#result').val() + ",");
  $('#result2').val($('#result2').val() + ".");

});

$(document).on("click", "#Aoquadrado", function(){
  $('#result').val($('#result').val() + "²");
  $('#result2').val($('#result2').val() +  "²");
  valor1=parseFloat($("#result2").val());
  $("#result2").val(" ");
   alert("A Estrutura é número+X²: 5X²");
  op="X²";
});

$(document).on("click", "#Subtracao", function(){
  $('#result').val($('#result').val() + "-");
  $('#result2').val($('#result2').val() + "-");
  valor1=parseFloat($("#result2").val());
  $("#result2").val(" ");
  op="-";
});

$(document).on("click", "#Dividir", function(){
  $('#result').val($('#result').val() + "/");
  $('#result2').val($('#result2').val() + "/");
   valor1=parseFloat($("#result2").val());
 $("#result2").val(" ");
  op="/";
});

$(document).on("click", "#Fatorial", function(){
  $('#result').val($('#result').val() + "N!");
  $('#result2').val($('#result2').val() + "N!");
    valor1=parseFloat($("#result2").val());
 $("#result2").val(" ");
 alert("A Estrutura é número+N!: 5N!");
  op="N!";
});

$(document).on("click", "#Multiplicacao", function(){
  $('#result').val($('#result').val() + "X");
  $('#result2').val($('#result2').val() + "X");
   valor1=parseFloat($("#result2").val());
 $("#result2").val(" ");
  op="X";
});

$(document).on("click", "#Adicao", function(){
 $('#result').val($('#result').val() + "+");
  $('#result2').val($('#result2').val() + "+");
   valor1=parseFloat($("#result2").val());
 $("#result2").val(" ");
op="+";
});

$(document).on("click", "#Igual", function(){
  $('#result').val($('#result').val() + "=");
$('#result2').val($('#result2').val() + "=");
   valor2=parseFloat($("#result2").val());
  if(op=="+"){
   var res=valor1+valor2;
    $("#result2").val(res);
    $('#result').val($('#result').val() + res);
  }
  else if(op=="-"){
    var res=valor1-valor2;
    $("#result2").val(res);
    $('#result').val($('#result').val() + res);
  }
   else if(op=="X"){
    var res=valor1*valor2;
    $("#result2").val(res);
    $('#result').val($('#result').val() + res);
  }
  else if(op=="/"){
    var res=valor1/valor2;
    $("#result2").val(res);
    $('#result').val($('#result').val() + res);
  }
  else if(op=="N!"){
   var res=valor1;
   for(i=1;i<valor1;i++){
     res=res*i;
   }
     $("#result2").val(res);
     $('#result').val($('#result').val() + res);
  }
   else if(op=="X²"){
    var res=valor1*valor1;
    $("#result2").val(res);
    $('#result').val($('#result').val() + res);
  }
    else if(op=="√"){
    var res= Math.sqrt(valor1);
    $("#result2").val(res);
    $('#result').val($('#result').val() + res);

 }
});