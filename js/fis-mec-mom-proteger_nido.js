//Define conceptos y apoyos

var apoyo_choque="$$\\mathbf{Choques}$$ \\( \\ \\ \\ \\)Generalmente, durante un choque las fuerzas externas que actúan sobre los cuerpos son pequeñas comparadas con las fuerzas internas. Siendo esta la situación, se conserva la cantidad de movimiento del sistema.";
var apoyo_momento="$$\\mathbf{Conservación \\ de \\ la}$$ $$\\mathbf{cantidad \\ de \\ movimiento}$$  \\( \\ \\ \\ \\)Si el sistema está compuesto por dos cuerpos, uno \\(A\\), de masa \\(m_A\\), y otro \\(B\\), de masa \\(m_B\\), la conservación de la cantidad de movimiento dice que $$m_A \\ \\vec{v}_{A,1} \\ + \\ m_B \\ \\vec{v}_{B,1} \\ = \\ m_A \\ \\vec{v}_{A,2} \\ + \\ m_B \\ \\vec{v}_{B,2} \\ ,$$ donde \\(\\vec{v}_A\\) y \\(\\vec{v}_B\\) son las velocidades de \\(A\\) y \\(B\\) respectivamente. El subíndice 1 indica justo antes del choque y el 2, justo después.";
var apoyo_ayuda="$$\\mathbf{Planteamiento}$$ \\( \\ \\ \\ \\)Durante el choque entre el halcón (\\(H\\)) y el cuervo (\\(C)\\) se conserva la cantidad de movimiento. Como el movimiento es en dos dimensiones, hay que plantear $$m_H \\ v_{H,1}^{\\left(x\\right)} \\ + \\ m_C \\ v_{C,1}^{\\left(x\\right)} \\ = \\ m_H \\ v_{H,2}^{\\left(x\\right)} \\ + \\ m_C \\ v_{C,2}^{\\left(x\\right)} \\ \\ \\rm{y}$$ $$m_H \\ v_{H,1}^{\\left(y\\right)} \\ + \\ m_C \\ v_{C,1}^{\\left(y\\right)} \\ = \\ m_H \\ v_{H,2}^{\\left(y\\right)} \\ + \\ m_C \\ v_{C,2}^{\\left(y\\right)} \\ ,$$ tomando en cuenta que algunas de estas cantidades son cero. $$* \\ * \\ * \\ * \\ *$$\\( \\ \\ \\ \\)Al resolver el sistema de ecuaciones se encuentran las componentes \\(x\\) y \\(y\\) de la velocidad del cuervo, por lo que a partir de estos datos se puede hallar el ángulo buscado.";
var conceptos = ["choques","conservación de la cantidad de movimiento"];
var descConceptos = [apoyo_choque,apoyo_momento,apoyo_ayuda];


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

if(localStorage.intentosNido == undefined) localStorage.intentosNido = 0;

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
var mh = 0;
var mc = 0;
var vh1 = 0;
var vh2 = 0;
var vc1 = 0;

function escribeDatos(){
	const node = document.getElementById('enunciado');
	const node2 = document.getElementById('opciones');
	MathJax.typesetClear([node]);
	MathJax.typesetClear([node2]);
	if(localStorage.correctoNido == 1){
		mh = localStorage.mhNido;
		mc = localStorage.mcNido;
		vh1 = localStorage.vh1Nido;
		vh2 = localStorage.vh2Nido;
		vc1 = localStorage.vc1Nido;
		opcCorrecta = localStorage.opcCorrectaNido;
		opc2 = localStorage.opc2Nido;
		opc3 = localStorage.opc3Nido;
		opc4 = localStorage.opc4Nido;
		R1 = localStorage.R1Nido;
		R2 = localStorage.R2Nido;
		R3 = localStorage.R3Nido;
		R4 = localStorage.R4Nido;
		idBotonC = localStorage.idBotonNido;
		arregloOpciones[opcCorrecta] = R1;
		arregloOpciones[opc2] = R2;
		arregloOpciones[opc3] = R3;
		arregloOpciones[opc4] = R4;
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + "^\\circ \\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + "^\\circ \\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + "^\\circ \\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + "^\\circ \\)";
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
		mh = aleatorio(0.6,0.1,2);
		mc = aleatorio(1.5,0.2,2);
		vh1 = aleatorio(20,3,1);
		vh2 = aleatorio(5,1,1);
		vc1 = aleatorio(9,1,1);
		R1 = 180/Math.PI*Math.atan(mh*(vh1+vh2)/mc/vc1);
		R2 = 180/Math.PI*Math.atan(mh*(vh1-vh2)/mc/vc1);
		R3 = 180/Math.PI*Math.atan(mc*vc1/mh/(vh1+vh2));
		R4 = 180/Math.PI*Math.atan(mc*vc1/mh/(vh1-vh2));
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
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + "^\\circ \\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + "^\\circ \\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + "^\\circ \\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + "^\\circ \\)";
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById('opcA').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcB').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcC').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcD').style.backgroundColor = "#FCFCFC";
	}
	document.getElementById('txtMH').innerText = "\\(" + mh.toString() + "\\)";
	document.getElementById('txtMC').innerText = "\\(" + mc.toString() + "\\)";
	document.getElementById('txtVH1').innerText = "\\(" + vh1.toString() + "\\)";
	document.getElementById('txtVH2').innerText = "\\(" + vh2.toString() + "\\)";
	document.getElementById('txtVC1').innerText = "\\(" + vc1.toString() + "\\)";
	if(localStorage.intentosNido > 3){
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
		localStorage.correctoNido = 1;
		localStorage.mhNido = mh;
		localStorage.mcNido = mc;
		localStorage.vh1Nido = vh1;
		localStorage.vh2Nido = vh2;
		localStorage.vc1Nido = vc1;
		localStorage.idBotonNido = idBoton;
		localStorage.intentosNido++;
		localStorage.opcCorrectaNido = opcCorrecta;
		localStorage.opc2Nido = opc2;
		localStorage.opc3Nido = opc3;
		localStorage.opc4Nido = opc4;
		localStorage.R1Nido = R1;
		localStorage.R2Nido = R2;
		localStorage.R3Nido = R3;
		localStorage.R4Nido = R4;
	} else {
		if(localStorage.intentosNido==0){
			alert('¡Respuesta incorecta!\nPuedes seguir intentando, pero cada vez tendrás nuevos datos.');
		}
		document.getElementById(idBoton).style.backgroundColor = "red";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		localStorage.intentosNido++;
		if(localStorage.intentosNido==3){
			localStorage.intentosNido++;
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
	if(numimg==4) numimg = 1;
	document.getElementById("animacion").src = "img/halcon" + numimg.toString() + ".png";
}
