//Define conceptos y apoyos

var apoyo_velRel="$$\\mathbf{Velocidad \\ relativa}$$ \\( \\ \\ \\ \\)El movimiento de un objeto \\(O\\) se puede describir en distintos marcos de referencia \\(A\\) y \\(B\\). La velocidad de \\(O\\) relativa a \\(A\\), \\(\\vec{v}_{O/A}\\), se relaciona con la velocidad de \\(O\\) relativa a \\(B\\), \\(\\vec{v}_{O/B}\\), a través de $$\\vec{v}_{O/A} \\ = \\ \\vec{v}_{O/B} \\ + \\ \\vec{v}_{B/A} \\ ,$$ donde \\(\\vec{v}_{B/A}\\) es la velocidad del marco de referencia \\(B\\) con respecto a \\(A\\).";
var apoyo_momento="$$\\mathbf{Conservación \\ de \\ la}$$ $$\\mathbf{cantidad \\ de \\ movimiento}$$  \\( \\ \\ \\ \\)Si la fuerza neta externa a un sistema es cero, o es muy pequeña comparada con las fuerzas internas, la cantidad de movimiento del sistema se conserva. Si el sistema está compuesto por \\(A\\), de masa \\(m_A\\), y \\(B\\), de masa \\(m_B\\), se tiene $$m_A \\ \\vec{v}_{A,1} \\ + \\ m_B \\ \\vec{v}_{B,1} \\ = \\ m_A \\ \\vec{v}_{A,2} \\ + \\ m_B \\ \\vec{v}_{B,2} \\ ,$$ donde \\(\\vec{v}_A\\) y \\(\\vec{v}_B\\) son las velocidades de \\(A\\) y \\(B\\) respectivamente. Las cantidades a la izquierda se refieren a justo antes y las de la derecha a justo después de algún evento, como el salto de un gato.";
var apoyo_ayuda="$$\\mathbf{Planteamiento}$$ \\( \\ \\ \\ \\)La cantidad de movimiento del sistema formado por gato (\\(g\\)) más trineo (\\(t\\)) se conserva cuando el gato salta y también cuando cae al otro: $$m_g \\ \\vec{v}_{g,1} \\ + \\ m_t \\ \\vec{v}_{t,1} \\ = \\ m_g \\ \\vec{v}_{g,2} \\ + \\ m_t \\ \\vec{v}_{t,2} \\ .$$ \\( \\ \\ \\ \\)Sin embargo, dichas velocidades son medidas respecto a un marco de referencia fijo en Tierra. En cada caso, las velocidades del gato relativas al marco fijo se relacionan con las velocidades del trineo respecto al marco fijo como $$\\vec{v}_{g} \\ = \\ \\vec{v}_{g/t} \\ + \\ \\vec{v}_{t} \\ ,$$ siendo \\(\\vec{v}_{g/T}\\) la velocidad del gato relativa al trineo. Usa esto para cada salto y sus correspondientes trineos (\\(A\\) o \\(B\\)).";
var conceptos = ["velocidad relativa","conservación de la cantidad de movimiento"];
var descConceptos = [apoyo_velRel,apoyo_momento,apoyo_ayuda];


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

if(localStorage.intentosGatoBrincando == undefined) localStorage.intentosGatoBrincando = 0;

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
var mt = 0;
var mg = 0;
var vr = 0;

function escribeDatos(){
	const node = document.getElementById('enunciado');
	const node2 = document.getElementById('opciones');
	MathJax.typesetClear([node]);
	MathJax.typesetClear([node2]);
	if(localStorage.correctoGatoBrincando == 1){
		mt = localStorage.mtGatoBrincando;
		mg = localStorage.mgGatoBrincando;
		vr = localStorage.vrGatoBrincando;
		opcCorrecta = localStorage.opcCorrectaGatoBrincando;
		opc2 = localStorage.opc2GatoBrincando;
		opc3 = localStorage.opc3GatoBrincando;
		opc4 = localStorage.opc4GatoBrincando;
		R1 = localStorage.R1GatoBrincando;
		R2 = localStorage.R2GatoBrincando;
		R3 = localStorage.R3GatoBrincando;
		R4 = localStorage.R4GatoBrincando;
		idBotonC = localStorage.idBotonGatoBrincando;
		arregloOpciones[opcCorrecta] = R1;
		arregloOpciones[opc2] = R2;
		arregloOpciones[opc3] = R3;
		arregloOpciones[opc4] = R4;
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{m/s}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{m/s}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{m/s}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{m/s}\\)";
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
		mt = aleatorio(22.7,5,2);
		mg = aleatorio(3.63,1.2,2);
		vr = aleatorio(3.05,2,2);
		R1 = (2*mt+mg)*mg*mt/(mg+mt)/(mg+mt)/(mg+mt)*vr;
		R2 = (2*mt+mg)*mg/(mg+mt)/(mg+mt)*vr;
		R3 = mg/mt*vr;
		R4 = mg*mg/mt*vr;
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
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{m/s}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{m/s}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{m/s}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{m/s}\\)";
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById('opcA').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcB').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcC').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcD').style.backgroundColor = "#FCFCFC";
	}
	document.getElementById('txtMT').innerText = "\\(" + mt.toString() + "\\)";
	document.getElementById('txtMG').innerText = "\\(" + mg.toString() + "\\)";
	document.getElementById('txtVR').innerText = "\\(" + vr.toString() + "\\)";
	if(localStorage.intentosGatoBrincando > 3){
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
		localStorage.correctoGatoBrincando = 1;
		localStorage.mtGatoBrincando = mt;
		localStorage.mgGatoBrincando = mg;
		localStorage.vrGatoBrincando = vr;
		localStorage.idBotonGatoBrincando = idBoton;
		localStorage.intentosGatoBrincando++;
		localStorage.opcCorrectaGatoBrincando = opcCorrecta;
		localStorage.opc2GatoBrincando = opc2;
		localStorage.opc3GatoBrincando = opc3;
		localStorage.opc4GatoBrincando = opc4;
		localStorage.R1GatoBrincando = R1;
		localStorage.R2GatoBrincando = R2;
		localStorage.R3GatoBrincando = R3;
		localStorage.R4GatoBrincando = R4;
	} else {
		if(localStorage.intentosGatoBrincando==0){
			alert('¡Respuesta incorecta!\nPuedes seguir intentando, pero cada vez tendrás nuevos datos.');
		}
		document.getElementById(idBoton).style.backgroundColor = "red";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		localStorage.intentosGatoBrincando++;
		if(localStorage.intentosGatoBrincando==3){
			localStorage.intentosGatoBrincando++;
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
	if(numimg==15) numimg = 1;
	document.getElementById("animacion").src = "img/gatoBrincando" + numimg.toString() + ".png";
}
