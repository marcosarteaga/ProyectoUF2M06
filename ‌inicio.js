$(document).ready(function(){
	$("#comenzar").on("click",encuestae1);


});

function encuestae1(){
	var dive2 = $('#dive2').remove();
	var boton = $('#comenzar');
	boton.hide();
	var padre = boton.parent();
	var dive1 = $('<div>').attr({id:"dive1"});
	var titulo = $('<h3>');
	titulo.text("¿Has cursado el Módulo M06 con el sistema de evaluación por Proyectos/Logros?");
	var selecsi = $('<input>').attr({name:"input",id:"inputsi",value:"si",type:"radio"});
	var labelsi = $('<label>').text("Si");

	var selecno = $('<input>').attr({name:"input",id:"inputno",value:"no",type:"radio"});
	var labelno = $('<label>').text("No");

	var espacio = $('<br>');
	var espacio2 = $('<br>');

	var botonContinuar = $('<button>');
	botonContinuar.text("Continuar");
	botonContinuar.attr("onclick","respuestae1()");
	var separacion = $('<hr>');


	padre.append(dive1);
	dive1.append(titulo);
	dive1.append(selecsi);
	dive1.append(labelsi);
	dive1.append(espacio);
	dive1.append(selecno);
	dive1.append(labelno);
	dive1.append(espacio2);
	dive1.append(botonContinuar);
	dive1.append(separacion);



}


function respuestae1(){
	var inputsi = $('#inputsi');
	var inputno = $('#inputno');
	if (inputsi == null && inputno == null) {
		alert("Tienes que elegir una respuesta");
	}

	if($('#inputsi').is(':checked')){
		encuestae3();
	}else if ($('#inputno').is(':checked')) {
		encuestae2("No");
	}else{
		alert("Elige una respuesta");
	}

}


function encuestae2(respuesta){
	var boton = $('#comenzar');
	var padre = boton.parent();
	var dive2 = $('<div>').attr({id:"dive2"});

	var textof =  $('<h3>').text("Gracias por haber participado en esta encuesta.");
	var textr = $('<h3>').text("Puedes dejarnos un comentario en el siguiente recuadro:");
	var textarea = $('<textarea>');
	var tituloe1 = $('<h4>').text("¿Has cursado el Módulo M06 con el sistema de evaluación por Proyectos/Logros?");
	var label = $('<label>').text(respuesta);

	var botonInicio = $('<button>');
	botonInicio.text("Finalizar encuesta");
	botonInicio.attr("onclick","volverInicio()");
	botonInicio.attr({id:"botonIni"});
	var espacio = $('<br>');
	var espacio2 = $('<br>');
	




	padre.append(dive2);
	dive2.append(textof);
	dive2.append(textr);
	dive2.append(textarea);
	dive2.append(tituloe1);
	dive2.append(label);
	dive2.append(espacio);
	dive2.append(espacio2);
	dive2.append(botonInicio);




}

function encuestae3(){
	var boton = $('#comenzar');
	var padre = boton.parent();
	var dive3 = $('<div>').attr({id:"dive3"});

	var textp =  $('<h3>').text("¿Crees que el sistema de evaluación por Proyectos/Logros es adecuado?");
	
	var selecsi = $('<input>').attr({name:"inpute3",id:"inputsie3",value:"si",type:"radio"});
	var labelsi = $('<label>').text("Si");

	var selecno = $('<input>').attr({name:"inpute3",id:"inputnoe3",value:"no",type:"radio"});
	var labelno = $('<label>').text("No");

	var selecnolose = $('<input>').attr({name:"inpute3",id:"inputnolosee3",value:"no lo se",type:"radio"});
	var labelnolose = $('<label>').text("No lo se");

	var espacio = $('<br>');
	var espacio2 = $('<br>');
	var espacio3 = $('<br>');
	var separacion = $('<hr>');

	var botonContinuar = $('<button>');
	botonContinuar.text("Continuar");
	botonContinuar.attr("onclick","respuestae3()");


	padre.append(dive3);
	dive3.append(textp);
	dive3.append(selecsi);
	dive3.append(labelsi);
	dive3.append(espacio);
	dive3.append(selecno);
	dive3.append(labelno);
	dive3.append(espacio2);
	dive3.append(selecnolose);
	dive3.append(labelnolose);
	dive3.append(espacio3);
	dive3.append(botonContinuar);
	dive3.append(separacion);



}


function respuestae3(){
	var inputsi = $('#inputsie3');
	var inputno = $('#inputnoe3');
	var inputnolose = $('#inputnolosee3');

	if (inputsi == null && inputno == null && inputnolose == null) {
		alert("Tienes que elegir una respuesta");
	}

	if($('#inputsie3').is(':checked')){
		encuestae5();
	}else if ($('#inputnoe3').is(':checked')) {
		encuestae4();
	}else if ($('#inputnolosee3').is(':checked')) {
		encuestae5();

	}else{
		alert("Elige una respuesta");
	}

}


function encuestae4(){
	var boton = $('#comenzar');
	var padre = boton.parent();
	var dive4 = $('<div>').attr({id:"dive4"});

	var textp =  $('<h3>').text("¿Explicanos porque crees que el sistema de evaluación por Proyectos/Logros no es adecuado?");

	var selecp1 = $('<input>').attr({id:"inputp1e4",value:"el sistema no evalua las compencias reales que necesita un profesional",type:"radio"});
	var labelp1 = $('<label>').text("el sistema no evalua las compencias reales que necesita un profesional");

	var selecp2 = $('<input>').attr({id:"inputp2e4",value:"el sistema es injusto",type:"radio"});
	var labelp2 = $('<label>').text("el sistema es injusto");

	var selecp3 = $('<input>').attr({id:"inputp3e4",value:"el sistema solo se puede aplicar a aquellos alumnos que cursan el módulo por evaluación continua",type:"radio"});
	var labelp3 = $('<label>').text("el sistema solo se puede aplicar a aquellos alumnos que cursan el módulo por evaluación continua");

	var labelp4 = $('<label>').text("Otros motivos");
	var textarea = $('<textarea>').attr({id:"textareae4"});


	var bContinuar = $('<button>');
	bContinuar.text("Continuar");
	bContinuar.attr("onclick","respuestase4()");

	var espacio = $('<br>');
	var espacio2 = $('<br>');
	var espacio3 = $('<br>');
	var espacio4 = $('<br>');
	var espacio5 = $('<br>');
	var separacion = $('<hr>');

	padre.append(dive4);
	dive4.append(textp);
	dive4.append(selecp1);
	dive4.append(labelp1);
	dive4.append(espacio);
	dive4.append(selecp2);
	dive4.append(labelp2);
	dive4.append(espacio2);
	dive4.append(selecp3);
	dive4.append(labelp3);
	dive4.append(espacio3);
	dive4.append(labelp4);
	dive4.append(espacio4);
	dive4.append(textarea);
	dive4.append(espacio5);
	dive4.append(bContinuar);
	dive4.append(separacion);


}


function volverInicio(){
	var dive1 = $('#dive1').remove();
	//var dive2 = $('#dive2').remove();
	var dive3 = $('#dive3').remove();
	var dive4 = $('#dive4').remove();
	var dive5 = $('#dive5').remove();
	var boton = $('#comenzar');
	var botonFinalizar = $('#botonIni');
	botonFinalizar.hide();
	boton.show();

}


function respuestase4(){

	if($('#inputp1e4').is(':checked')){
		encuestae2parae4();
	}else if ($('#inputp2e4').is(':checked')) {
		encuestae2parae4();
	}else if ($('#inputp3e4').is(':checked')) {
		encuestae2parae4();

	}else{
		alert("Elige una respuesta");
	}

	
}


function encuestae2parae4(){
	var boton = $('#comenzar');
	var padre = boton.parent();
	var dive2 = $('<div>').attr({id:"dive2"});
	padre.append(dive2);

	var textof =  $('<h3>').text("Gracias por haber participado en esta encuesta.");
	var textr = $('<h3>').text("Puedes dejarnos un comentario en el siguiente recuadro:");
	var textarea = $('<textarea>');

	var tituloe1 = $('<h4>').text("¿Has cursado el Módulo M06 con el sistema de evaluación por Proyectos/Logros?");
	var respuestae1 = $('#inputsi').val();
	var label = $('<label>').text(respuestae1);


	var tituloe3 = $('<h4>').text("¿Crees que el sistema de evaluación por Proyectos/Logros es adecuado?");
	var respuestae3 = $('#inputnoe3').val();
	var labele3 = $('<label>').text(respuestae3);

	var espacio = $('<br>');
	var espacio2 = $('<br>');
	var espacio3 = $('<br>');
	var espacio4 = $('<br>');
	var espacio5 = $('<br>');
	var espacio6 = $('<br>');
	var espacio7 = $('<br>');


	dive2.append(textof);
	dive2.append(textr);
	dive2.append(textarea);
	dive2.append(tituloe1);
	dive2.append(label);
	dive2.append(espacio);
	dive2.append(tituloe3);
	dive2.append(labele3);
	dive2.append(espacio3);

	var tituloe4 = $('<h4>').text("¿Explicanos porque crees que el sistema de evaluación por Proyectos/Logros no es adecuado?");
	dive2.append(tituloe4);

	if ($('#inputp1e4').is(':checked')){
		var respuestae41 = $('#inputp1e4').val();
		var labele41 = $('<label>').text(respuestae41);
		dive2.append(labele41);
		dive2.append(espacio4);
	}if ($('#inputp2e4').is(':checked')) {
		var respuestae42 = $('#inputp2e4').val();
		var labele42 = $('<label>').text(respuestae42);
		dive2.append(labele42);
		dive2.append(espacio5);
	}if ($('#inputp3e4').is(':checked')) {
		var respuestae43 = $('#inputp3e4').val();
		var labele43 = $('<label>').text(respuestae43);
		dive2.append(labele43);
		dive2.append(espacio6);

	}if ($('#textareae4') != null) {
		var respuestae44 = $('#textareae4').val();
		var labele44 = $('<label>').text(respuestae44);
		dive2.append(labele44);
		dive2.append(espacio7);

	}


	var botonInicio = $('<button>');
	botonInicio.text("Finalizar encuesta");
	botonInicio.attr("onclick","volverInicio()");
	botonInicio.attr({id:"botonIni"});
	dive2.append(botonInicio);

}


function encuestae5(){
	var boton = $('#comenzar');
	var padre = boton.parent();
	var dive5 = $('<div>').attr({id:"dive5"});

	var textp =  $('<h3>').text("¿Con cual de las siguientes afirmaciones estás de acuerdo? La evaluación por Proyectos/Logros es...");
	
	var selec1 = $('<input>').attr({id:"input1e5",value:"es un sistema más motivador para el alumno",type:"radio"});
	var label1 = $('<label>').text("es un sistema más motivador para el alumno");

	var selec2 = $('<input>').attr({id:"input2e5",value:"es más justo para el alumno",type:"radio"});
	var label2 = $('<label>').text("es más justo para el alumno");

	var selec3 = $('<input>').attr({id:"input3e5",value:"es más claro y transparente para el alumno",type:"radio"});
	var label3 = $('<label>').text("es más claro y transparente para el alumno");

	var selec4 = $('<input>').attr({id:"input4e5",value:"ayuda al alumno a tener claros los objetivos",type:"radio"});
	var label4 = $('<label>').text("ayuda al alumno a tener claros los objetivos");

	var bContinuar = $('<button>');
	bContinuar.text("Continuar");
	bContinuar.attr("onclick","respuestase5()");


	var espacio = $('<br>');
	var espacio2 = $('<br>');
	var espacio3 = $('<br>');
	var espacio4 = $('<br>');
	var separacion = $('<hr>');

	padre.append(dive5);
	dive5.append(textp);
	dive5.append(selec1);
	dive5.append(label1);
	dive5.append(espacio);
	dive5.append(selec2);
	dive5.append(label2);
	dive5.append(espacio2);
	dive5.append(selec3);
	dive5.append(label3);
	dive5.append(espacio3);
	dive5.append(selec4);
	dive5.append(label4);
	dive5.append(espacio4);
	dive5.append(bContinuar);
	dive5.append(separacion);

}

function respuestase5(){

	if($('#input1e5').is(':checked')){
		encuestae2parae5();
	}else if ($('#input2e5').is(':checked')) {
		encuestae2parae5();
	}else if ($('#input3e5').is(':checked')) {
		encuestae2parae5();

	}else if ($('#input4e5').is(':checked')) {
		encuestae2parae5();

	}else{
		alert("Elige una respuesta");
	}

	
}


function encuestae2parae5(){
	var boton = $('#comenzar');
	var padre = boton.parent();
	var dive2 = $('<div>').attr({id:"dive2"});
	padre.append(dive2);

	var textof =  $('<h3>').text("Gracias por haber participado en esta encuesta.");
	var textr = $('<h3>').text("Puedes dejarnos un comentario en el siguiente recuadro:");
	var textarea = $('<textarea>');

	var tituloe1 = $('<h4>').text("¿Has cursado el Módulo M06 con el sistema de evaluación por Proyectos/Logros?");
	var respuestae1 = $('#inputsi').val();
	var label = $('<label>').text(respuestae1);


	var tituloe3 = $('<h4>').text("¿Crees que el sistema de evaluación por Proyectos/Logros es adecuado?");
	var respuestae3 = $('#inputnoe3').val();
	var labele3 = $('<label>').text(respuestae3);

	var espacio = $('<br>');
	var espacio2 = $('<br>');
	var espacio3 = $('<br>');
	var espacio4 = $('<br>');
	var espacio5 = $('<br>');
	var espacio6 = $('<br>');
	var espacio7 = $('<br>');


	dive2.append(textof);
	dive2.append(textr);
	dive2.append(textarea);
	dive2.append(tituloe1);
	dive2.append(label);
	dive2.append(espacio);
	dive2.append(tituloe3);
	dive2.append(labele3);
	dive2.append(espacio3);

	var tituloe4 = $('<h4>').text("¿Con cual de las siguientes afirmaciones estás de acuerdo? La evaluación por Proyectos/Logros es...");
	dive2.append(tituloe4);

	if ($('#input1e5').is(':checked')){
		var respuesta1e5 = $('#input1e5').val();
		var label1e5 = $('<label>').text(respuesta1e5);
		dive2.append(label1e5);
		dive2.append(espacio4);
	}if ($('#input2e5').is(':checked')) {
		var respuesta2e5 = $('#input2e5').val();
		var label2e5 = $('<label>').text(respuesta2e5);
		dive2.append(label2e5);
		dive2.append(espacio5);
	}if ($('#input3e5').is(':checked')) {
		var respuesta3e5 = $('#input3e5').val();
		var label3e5 = $('<label>').text(respuesta3e5);
		dive2.append(label3e5);
		dive2.append(espacio6);

	}if ($('#input4e5').is(':checked')) {
		var respuesta4e5 = $('#input4e5').val();
		var label4e5 = $('<label>').text(respuesta4e5);
		dive2.append(label4e5);
		dive2.append(espacio7);

	}


	var botonInicio = $('<button>');
	botonInicio.text("Finalizar encuesta");
	botonInicio.attr("onclick","volverInicio()");
	botonInicio.attr({id:"botonIni"});
	dive2.append(botonInicio);

}
