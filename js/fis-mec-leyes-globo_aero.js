//Define conceptos y apoyos

var apoyo_acel="$$\\mathbf{Aceleración}$$ \\( \\ \\ \\ \\)De acuerdo a la segunda ley de Newton, la aceleración, \\(\\vec{a}\\), es el resultado de una fuerza \\(\\mathbf{neta}\\) $$\\sum \\vec{F} = m \\vec{a},$$ siendo \\(m\\) la masa del objeto sobre el que actúa la fuerza neta.";
var apoyo_diag="$$\\mathbf{Diagrama \\ de \\ cuerpo \\ libre}$$ \\( \\ \\ \\ \\)En los ejercicios de Leyes de Newton siempre debes comenzar dibujando el diagrama de cuerpo libre. Éste incluye el objeto a analizar, el cual se recomienda en este momento dibujarlo como un punto, y todas las fuerzas que actúan sobre él.";
var apoyo_ayuda="$$\\mathbf{Planteamiento}$$ \\( \\ \\ \\ \\)En este caso el objeto a analizar es el globo. Para dibujar correctamente su diagrama de cuerpo libre debemos preguntarnos por las fuerzas que actúan sobre de él. La diferencia entre el momento que tiene una aceleración hacia abajo y cuando es hacia arriba solo radica en la masa del globo, a la que al final hay que restarle la masa del lastre arrojado.";
var conceptos = ["aceleración","diagrama de cuerpo libre"];
var descConceptos = [apoyo_acel,apoyo_diag,apoyo_ayuda];


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

if(localStorage.intentosGloboAero == undefined) localStorage.intentosGloboAero = 0;

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
var m = 0;
var a1 = 0;
var a2 = 0;
var g = 9.81;

function escribeDatos(){
	const node = document.getElementById('enunciado');
	const node2 = document.getElementById('opciones');
	MathJax.typesetClear([node]);
	MathJax.typesetClear([node2]);
	if(localStorage.correctoGloboAero == 1){
		m = localStorage.mGloboAero;
		a1 = localStorage.a1GloboAero;
		a2 = localStorage.a2GloboAero;
		opcCorrecta = localStorage.opcCorrectaGloboAero;
		opc2 = localStorage.opc2GloboAero;
		opc3 = localStorage.opc3GloboAero;
		opc4 = localStorage.opc4GloboAero;
		R1 = localStorage.R1GloboAero;
		R2 = localStorage.R2GloboAero;
		R3 = localStorage.R3GloboAero;
		R4 = localStorage.R4GloboAero;
		idBotonC = localStorage.idBotonGloboAero;
		arregloOpciones[opcCorrecta] = R1;
		arregloOpciones[opc2] = R2;
		arregloOpciones[opc3] = R3;
		arregloOpciones[opc4] = R4;
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{kg}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{kg}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{kg}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{kg}\\)";
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
		m = aleatorio(1050,250,0);
		a1 = aleatorio(5,4,2);
		a2 = aleatorio(5,4,2);
		R1 = m*(1-(g-a1)/(g+a2));
		R2 = m*(g-a1)/(g+a2);
		R3 = (Math.random()*0.1+0.8)*m*(1-(g-a1)/(g+a2));
		R4 = m-R3;
		R1 = redondea(R1,1);
		R2 = redondea(R2,1);
		R3 = redondea(R3,1);
		R4 = redondea(R4,1);
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
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{kg}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{kg}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{kg}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{kg}\\)";
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById('opcA').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcB').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcC').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcD').style.backgroundColor = "#FCFCFC";
	}
	document.getElementById('txtM').innerText = "\\(" + m.toString() + "\\)";
	document.getElementById('txtA1').innerText = "\\(" + a1.toString() + "\\)";
	document.getElementById('txtA2').innerText = "\\(" + a2.toString() + "\\)";
	if(localStorage.intentosGloboAero > 3){
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
		localStorage.correctoGloboAero = 1;
		localStorage.mGloboAero = m;
		localStorage.a1GloboAero = a1;
		localStorage.a2GloboAero = a2;
		localStorage.idBotonGloboAero = idBoton;
		localStorage.intentosGloboAero++;
		localStorage.opcCorrectaGloboAero = opcCorrecta;
		localStorage.opc2GloboAero = opc2;
		localStorage.opc3GloboAero = opc3;
		localStorage.opc4GloboAero = opc4;
		localStorage.R1GloboAero = R1;
		localStorage.R2GloboAero = R2;
		localStorage.R3GloboAero = R3;
		localStorage.R4GloboAero = R4;
	} else {
		if(localStorage.intentosGloboAero==0){
			alert('¡Respuesta incorecta!\nPuedes seguir intentando, pero cada vez tendrás nuevos datos.');
		}
		document.getElementById(idBoton).style.backgroundColor = "red";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		localStorage.intentosGloboAero++;
		if(localStorage.intentosGloboAero==3){
			localStorage.intentosGloboAero++;
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
	document.getElementById("animacion").src = "img/GloboAero" + numimg.toString() + ".png";
}
