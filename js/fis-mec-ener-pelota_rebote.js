//Define conceptos y apoyos

var apoyo_enerK="$$\\mathbf{Energía \\ cinética}$$ \\( \\ \\ \\ \\)La energía cinética \\(K\\) es la parte de la energía mecánica que depende del movimiento, y por tanto, de la rapidez \\(v\\) de un objeto, $$K = \\frac{1}{2} m v^2,$$ siendo \\(m\\) la masa del objeto. La conservación de la energía mecánica \\(E\\) se expresa como $$E = K + U = \\rm{constante},$$ donde \\(U\\) es la energía potencial.";
var apoyo_enerU="$$\\mathbf{Energía \\ potencial}$$ \\( \\ \\ \\ \\)La energía potencial \\(U\\) es la parte de la energía mecánica que depende de la posición de un objeto. En este caso la pelota tiene energía potencial gravitacional al estar a una altura \\(y\\) del suelo $$U = mgy,$$ siendo \\(m\\) la masa del objeto y \\(g\\) la aceleración de la gravedad.";
var apoyo_ayuda="$$\\mathbf{Planteamiento}$$ \\( \\ \\ \\ \\)Digamos que justo antes de chocar por primera vez contra el suelo la pelota tiene una energía cinética \\(K_0\\). Según el enunciado, se pierde un cierto porcentaje de ella en cada rebote, por lo que justo después de rebotar por primera vez su energía cinética será $$K_1 = x K_0,$$ es decir, una proporción \\(x\\) de su energía inicial. Con esta misma idea, la energía cinética luego del segundo rebote será $$K_2 = x K_1 =x^{2} K_0,$$ después del tercero, $$K_3=x K_2=x^{3} K_0,$$ $$ \\vdots$$ ¿Cómo será luego del \\(n-\\)ésimo rebote? $$* \\ * \\ * \\ * \\ *$$ \\( \\ \\ \\ \\)Aplicando esto a la conservación de la energía (mientras la pelota no esté en contacto con el suelo) el ejercicio se puede resolver. Quizá sea útil $$ a^b = c \\to  b = \\frac{\\ln c}{\\ln a}.$$";
var conceptos = ["energía cinética","energía potencial"];
var descConceptos = [apoyo_enerK,apoyo_enerU,apoyo_ayuda];


//Escribe los conceptos y apoyos

function escribeApoyo(numConcepto){
	const node = document.getElementById('apoyo');
	node.style.boxShadow = "-2px 0px 4px blue";
	MathJax.typesetClear([node]);
	document.getElementById('apoyo').innerHTML=" ";
	var apoyoDiv = document.getElementById('apoyo').lastChild;
	document.getElementById('apoyo').firstChild.nodeValue = descConceptos[numConcepto];
	saltoLinea();
	saltoLinea();
	insertaSpan('\\( \\ \\ \\ \\)Echa un vistazo también a: ');
	var j=0;
	for(var i=0; i<conceptos.length; i++){
		if(i!=numConcepto){
			insertaA(i);
			if(j==conceptos.length-3) insertaSpan(' y ');
			else  if(j!=conceptos.length-2) insertaSpan(', ');
			j++;
		}
	}
	insertaSpan('.');
	MathJax.typesetPromise([node]).then(() => {
		// the new content is has been typeset
	});
}

function escribeAyuda(){
	const node = document.getElementById('apoyo');
	node.style.boxShadow = "-2px 0px 4px blue";
	MathJax.typesetClear([node]);
	document.getElementById('apoyo').innerHTML = " ";
	document.getElementById('apoyo').firstChild.nodeValue = descConceptos[descConceptos.length-1];
	saltoLinea();
	saltoLinea();
	insertaSpan('\\( \\ \\ \\ \\)Puedes revisar ');
	for(var i=0; i<conceptos.length; i++){
		insertaA(i);
		if(i==conceptos.length-2) insertaSpan(' o ');
		else  if(i<conceptos.length-2) insertaSpan(', ');
	}
	insertaSpan('.');
	MathJax.typesetPromise([node]).then(() => {
		// the new content is has been typeset
	});
}

function insertaSpan(textoElemento){
	var elemento = document.createElement('span');
	var txtElemento = textoElemento;
	var apoyoDiv = document.getElementById('apoyo').lastChild;
	elemento.appendChild(document.createTextNode(txtElemento));
	document.getElementById('apoyo').insertBefore(elemento, apoyoDiv.nextSibling);
}

function insertaA(numCon){
	var elemento = document.createElement('a');
	var txtElemento = conceptos[numCon];
	var apoyoDiv = document.getElementById('apoyo').lastChild;
	elemento.appendChild(document.createTextNode(txtElemento));
	elemento.href = "javascript:escribeApoyo(" + numCon.toString() + ")";
	document.getElementById('apoyo').insertBefore(elemento, apoyoDiv.nextSibling);
}

function saltoLinea(){
	var elemento = document.createElement('br');
	var apoyoDiv = document.getElementById('apoyo').lastChild;
	document.getElementById('apoyo').insertBefore(elemento, apoyoDiv.nextSibling);
}

//Llena los datos: valores y opciones

if(localStorage.intentosPelotaRebote == undefined) localStorage.intentosPelotaRebote = 0;

var opcCorrecta = 0;
var opc2 = 0;
var opc3 = 0;
var opc4 = 0;
var arregloOpciones = [0,0,0,0];
var R1 = 0;
var R2 = 0;
var R3 = 0;
var R4 = 0;
var idBotonC = "";
var h1 = 0;
var h2 = 0;
var por = 0;

function escribeDatos(){
	const node = document.getElementById('enunciado');
	const node2 = document.getElementById('opciones');
	MathJax.typesetClear([node]);
	MathJax.typesetClear([node2]);
	if(localStorage.correctoPelotaRebote == 1){
		h1 = localStorage.h1PelotaRebote;
		h2 = localStorage.h2PelotaRebote;
		porc = localStorage.porcPelotaRebote;
		opcCorrecta = localStorage.opcCorrectaPelotaRebote;
		opc2 = localStorage.opc2PelotaRebote;
		opc3 = localStorage.opc3PelotaRebote;
		opc4 = localStorage.opc4PelotaRebote;
		R1 = localStorage.R1PelotaRebote;
		R2 = localStorage.R2PelotaRebote;
		R3 = localStorage.R3PelotaRebote;
		R4 = localStorage.R4PelotaRebote;
		idBotonC = localStorage.idBotonPelotaRebote;
		arregloOpciones[opcCorrecta] = R1;
		arregloOpciones[opc2] = R2;
		arregloOpciones[opc3] = R3;
		arregloOpciones[opc4] = R4;
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + "\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + "\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + "\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + "\\)";
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById(idBotonC).style.backgroundColor = "green";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		document.getElementById('imgHecho').style.visibility = "visible";
		document.getElementById('btnAyuda').style.backgroundColor = "#FCFCFC";
		document.getElementById('btnAyuda').innerText = "Ver planteamiento";
		document.getElementById('cajaBtnAyuda').style.display = "block";
	}
	else{
		h1 = aleatorio(2,1,2);
		h2 = (Math.random()*0.3+0.2)*h1;
		h2 = redondea(h2,2);
		porc = aleatorio(10,5,2);
		R1 = Math.floor(Math.log(h2/h1)/Math.log(1-porc/100))+1;
		R2 = Math.floor(Math.random()*27+5);
		while(R2==R1) R2 = Math.floor(Math.random()*27+5);
		R3 = Math.floor(Math.random()*27+5);
		while(R3==R2 || R3==R1) R3 = Math.floor(Math.random()*27+5);
		R4 = Math.floor(Math.random()*27+5);
		while(R4==R3 || R4==R2 || R4==R1) R4 = Math.floor(Math.random()*27+5);
		opcCorrecta = Math.floor(Math.random()*4);
		opc2 = Math.floor(Math.random()*4);
		while(opc2==opcCorrecta) opc2 = Math.floor(Math.random()*4);
		opc3 = Math.floor(Math.random()*4);
		while(opc3==opc2 || opc3==opcCorrecta) opc3 = Math.floor(Math.random()*4);
		opc4 = Math.floor(Math.random()*4);
		while(opc4==opc3 || opc4==opc2 || opc4==opcCorrecta) opc4 = Math.floor(Math.random()*4);
		arregloOpciones[opcCorrecta] = R1;
		arregloOpciones[opc2] = R2;
		arregloOpciones[opc3] = R3;
		arregloOpciones[opc4] = R4;
		document.getElementById('opcA').disabled = false;
		document.getElementById('opcB').disabled = false;
		document.getElementById('opcC').disabled = false;
		document.getElementById('opcD').disabled = false;
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + "\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + "\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + "\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + "\\)";
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById('opcA').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcB').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcC').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcD').style.backgroundColor = "#FCFCFC";
	}
	document.getElementById('txtH1').innerText = "\\(" + h1.toString() + "\\)";
	document.getElementById('txtH2').innerText = "\\(" + h2.toString() + "\\)";
	document.getElementById('txtPorcentaje').innerText = "\\(" + porc.toString() + "\\)";
	if(localStorage.intentosPelotaRebote > 3){
		document.getElementById('cajaBtnAyuda').style.display = "block";
		document.getElementById('imgCorrecto').src = "img/hechoAyuda.png";
	}
	document.getElementById('animacion').addEventListener('mouseenter', repiteImagen);
	document.getElementById('animacion').addEventListener('mouseleave', detenImagen);
	MathJax.typesetPromise([node]).then(() => {
		// the new content is has been typeset
	});
}

function aleatorio(valor,incertidumbre,decimales){
	if(Math.random() >= 0.5) valor = valor + incertidumbre*Math.random();
	else valor = valor - incertidumbre*Math.random();
	valor = redondea(valor,decimales);
	return valor;
}

function redondea(valor,decimales){
	valor = valor*(10**decimales);
	valor = Math.floor(valor);
	valor = valor/(10**decimales);
	return valor;
}

window.onload = escribeDatos;

//Revisa las respuetas		

function eligeOpcion(idBoton){
	if((opcCorrecta==0&&idBoton=="opcA")||(opcCorrecta==1&&idBoton=="opcB")||(opcCorrecta==2&&idBoton=="opcC")||(opcCorrecta==3&&idBoton=="opcD")){
		document.getElementById(idBoton).style.backgroundColor = "green";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		document.getElementById('imgHecho').style.visibility = "visible";
		document.getElementById('btnAyuda').style.backgroundColor = "#FCFCFC";
		document.getElementById('btnAyuda').innerText = "Ver planteamiento";
		document.getElementById('cajaBtnAyuda').style.display = "block";
		localStorage.correctoPelotaRebote = 1;
		localStorage.h1PelotaRebote = h1;
		localStorage.h2PelotaRebote = h2;
		localStorage.porcPelotaRebote = porc;
		localStorage.idBotonPelotaRebote = idBoton;
		localStorage.intentosPelotaRebote++;
		localStorage.opcCorrectaPelotaRebote = opcCorrecta;
		localStorage.opc2PelotaRebote = opc2;
		localStorage.opc3PelotaRebote = opc3;
		localStorage.opc4PelotaRebote = opc4;
		localStorage.R1PelotaRebote = R1;
		localStorage.R2PelotaRebote = R2;
		localStorage.R3PelotaRebote = R3;
		localStorage.R4PelotaRebote = R4;
	} else {
		if(localStorage.intentosPelotaRebote==0){
			alert('¡Respuesta incorecta!\nPuedes seguir intentando, pero cada vez tendrás nuevos datos.');
		}
		document.getElementById(idBoton).style.backgroundColor = "red";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		localStorage.intentosPelotaRebote++;
		if(localStorage.intentosPelotaRebote==3){
			localStorage.intentosPelotaRebote++;
		}
		setTimeout('escribeDatos()',1000);	
	}
}

//Funciones para la animación

var numimg = 1;

var varRepiteImagen = undefined;

function repiteImagen(){
	varRepiteImagen = setInterval('cambiaImagen()',1000);
}

function detenImagen(){
	clearInterval(varRepiteImagen);
}

function cambiaImagen(){
	numimg++;
	if(numimg==12) numimg = 1;
	document.getElementById("animacion").src = "img/PelotaRebote" + numimg.toString() + ".png";
}
