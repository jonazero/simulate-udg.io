//Define conceptos y apoyos

var apoyo_inercia="$$\\mathbf{Momento \\ de \\ inercia}$$ \\( \\ \\ \\ \\)Análogamente a la masa, el momento de inercia \\(I\\) es una medida de la inercia rotacional de un objeto. Para un cuerpo rígido, éste depende de cómo está distribuida su masa \\(M\\) y del eje de giro. En particular, para un disco plano uniforme de radio \\(R\\), se tiene que $$I = \\frac{1}{2} M R^2.$$";
var apoyo_angular="$$\\mathbf{Momento \\ angular}$$ \\( \\ \\ \\ \\)Para una partícula de masa \\(m\\), ubicada respecto a un origen con un vector de posición \\(\\vec{r}\\), y que se mueve con velocidad \\(\\vec{v}\\), su momento angular se define como $$\\vec{L} = m \\vec{r} \\times \\vec{v}.$$ \\( \\ \\ \\ \\)Por otro lado, para un cuerpo rígido con momento de inercia \\(I\\) que gira con velocidad angular \\(\\omega\\), su momento angular es $$L = I \\omega$$ \\( \\ \\ \\ \\)Si sobre un sistema no actúa una torca externa neta, entonces su momento angular total se conserva.";
var apoyo_ayuda="$$\\mathbf{Planteamiento}$$ \\( \\ \\ \\ \\)Utiliza la conservación del momento angular para plantear que el momento angular justo antes de que se rompa el disco sea el mismo que el momento angular justo después de que se rompe; éste último incluye el momento angular del disco roto junto con el del trozo que salió disparado. Puedes considerar que el trozo roto es pequeño, para seguir usando el momento de inercia de un disco plano uniforme.";
var conceptos = ["momento de inercia","momento angular"];
var descConceptos = [apoyo_inercia,apoyo_angular,apoyo_ayuda];


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

if(localStorage.intentosDisco == undefined) localStorage.intentosDisco = 0;

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
var mm = 0;
var r = 0;
var w = 0;
var m = 0;

function escribeDatos(){
	const node = document.getElementById('enunciado');
	const node2 = document.getElementById('opciones');
	MathJax.typesetClear([node]);
	MathJax.typesetClear([node2]);
	if(localStorage.correctoDisco == 1){
		mm = localStorage.mmDisco;
		r = localStorage.rDisco;
		w = localStorage.wDisco;
		m = localStorage.mDisco;
		opcCorrecta = localStorage.opcCorrectaDisco;
		opc2 = localStorage.opc2Disco;
		opc3 = localStorage.opc3Disco;
		opc4 = localStorage.opc4Disco;
		R1 = localStorage.R1Disco;
		R2 = localStorage.R2Disco;
		R3 = localStorage.R3Disco;
		R4 = localStorage.R4Disco;
		idBotonC = localStorage.idBotonDisco;
		arregloOpciones[opcCorrecta] = R1;
		arregloOpciones[opc2] = R2;
		arregloOpciones[opc3] = R3;
		arregloOpciones[opc4] = R4;
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{rad/s}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{rad/s}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{rad/s}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{rad/s}\\)";
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
		mm = aleatorio(2,0.5,2);
		r = aleatorio(25,5,1);
		w = aleatorio(8,2,2);
		m = aleatorio(0.3,0.05,2);
		R1 = 2*(0.5*mm-m)/(mm-m)*w;
		R2 = w;
		R3 = 2*(0.5*mm+m)/(mm+m)*w;
		R4 = 2*(0.5*mm-1.5*m)/(mm-m)*w;
		R1 = redondea(R1,2);
		R2 = redondea(R2,2);
		R3 = redondea(R3,2);
		R4 = redondea(R4,2);
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
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{rad/s}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{rad/s}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{rad/s}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{rad/s}\\)";
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById('opcA').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcB').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcC').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcD').style.backgroundColor = "#FCFCFC";
	}
	document.getElementById('txtMM').innerText = "\\(" + mm.toString() + "\\)";
	document.getElementById('txtR').innerText = "\\(" + r.toString() + "\\)";
	document.getElementById('txtW').innerText = "\\(" + w.toString() + "\\)";
	document.getElementById('txtM').innerText = "\\(" + m.toString() + "\\)";
	if(localStorage.intentosDisco > 3){
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
		localStorage.correctoDisco = 1;
		localStorage.mmDisco = mm;
		localStorage.rDisco = r;
		localStorage.wDisco = w;
		localStorage.mDisco = m;
		localStorage.idBotonDisco = idBoton;
		localStorage.intentosDisco++;
		localStorage.opcCorrectaDisco = opcCorrecta;
		localStorage.opc2Disco = opc2;
		localStorage.opc3Disco = opc3;
		localStorage.opc4Disco = opc4;
		localStorage.R1Disco = R1;
		localStorage.R2Disco = R2;
		localStorage.R3Disco = R3;
		localStorage.R4Disco = R4;
	} else {
		if(localStorage.intentosDisco==0){
			alert('¡Respuesta incorecta!\nPuedes seguir intentando, pero cada vez tendrás nuevos datos.');
		}
		document.getElementById(idBoton).style.backgroundColor = "red";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		localStorage.intentosDisco++;
		if(localStorage.intentosDisco==3){
			localStorage.intentosDisco++;
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
	if(numimg==3) numimg = 1;
	document.getElementById("animacion").src = "img/disco" + numimg.toString() + ".png";
}
