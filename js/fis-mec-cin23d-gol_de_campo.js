//Define conceptos y apoyos

var apoyo_pos="$$\\mathbf{Posición}$$ \\( \\ \\ \\ \\)Cada una de las dos dimensiones del movimiento se gobierna por ecuaciones específicas, de tal forma que en el eje horizontal el movimiento es uniforme, $$x = x_0 + v_{0x} t,$$ y en el vertical es variado, $$y = y_0 + v_{0y} t - \\frac{1}{2} g t^2.$$";
var apoyo_vel="$$\\mathbf{Velocidad}$$ \\( \\ \\ \\ \\)El tiro parabólico es un movimiento en dos dimensiones, por lo que se recomienda descomponer el vector de velocidad inicial, \\(\\vec{v}_0\\), en sus componentes horizontal $$v_{0x} = v_0 \\cos \\theta $$ y vertical $$v_{0y} = v_0 \\sin \\theta, $$ siendo \\(\\theta\\) el ángulo que forma \\(\\vec{v}_0\\) con respecto a la horizontal.";
var apoyo_acel="$$\\mathbf{Aceleración}$$ \\( \\ \\ \\ \\)En un tiro parabólico no existe aceleración en el eje horizontal \\((x)\\), mientras que en el vertical \\((y)\\) es constante y dirigida hacia abajo $$a_y = -g.$$ \\(g\\) es la aceleración de la gravedad, $$g = 9.81 \\ \\rm{m/s}^2 = 32.17 \\ \\rm{ft/s}^2.$$";
var apoyo_ayuda="$$\\mathbf{Planteamiento}$$ \\( \\ \\ \\ \\)Las ecuaciones de movimiento para \\(x\\) y \\(y\\) están ligadas por el tiempo \\(t\\), por lo que puedes combinarlas para obtener una ecuación que te relacione \\(y\\) con \\(x\\). Esta ecuación contiene tu incógnita, que es el ángulo \\(\\theta\\). Quizá esta identidad trigonométrica te sea de ayuda $$ \\sin^{2} \\theta + \\cos^{2} \\theta = 1.$$";
var conceptos = ["posición","velocidad","aceleración"];
var descConceptos = [apoyo_pos,apoyo_vel,apoyo_acel,apoyo_ayuda];


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

if(localStorage.intentosGolDeCampo == undefined) localStorage.intentosGolDeCampo = 0;

var opcCorrecta = 0;
var opc2 = 0;
var opc3 = 0;
var opc4 = 0;
var arregloOpciones = ["","","",""];
var R1 = 0;
var R2 = 0;
var R3 = 0;
var R4 = 0;
var idBotonC = "";
var v0 = 0;
var d = 0;
var h = 10;
var g = 32.17;

function escribeDatos(){
	const node = document.getElementById('enunciado');
	const node2 = document.getElementById('opciones');
	MathJax.typesetClear([node]);
	MathJax.typesetClear([node2]);
	if(localStorage.correctoGolDeCampo == 1){
		v0 = localStorage.v0GolDeCampo;
		d = localStorage.dGolDeCampo;
		opcCorrecta = localStorage.opcCorrectaGolDeCampo;
		opc2 = localStorage.opc2GolDeCampo;
		opc3 = localStorage.opc3GolDeCampo;
		opc4 = localStorage.opc4GolDeCampo;
		R1 = localStorage.R1GolDeCampo;
		R2 = localStorage.R2GolDeCampo;
		R3 = localStorage.R3GolDeCampo;
		R4 = localStorage.R4GolDeCampo;
		idBotonC = localStorage.idBotonGolDeCampo;
		arregloOpciones[opcCorrecta] = "Entre \\(" + R1.toString() + "^\\circ\\) y \\(" + R2.toString() + "^\\circ\\)";
		if(R1<R4){
			arregloOpciones[opc2] = "Entre \\(" + R1.toString() + "^\\circ\\) y \\(" + R4.toString() + "^\\circ\\)";
		}
		else{
			arregloOpciones[opc2] = "Entre \\(" + R4.toString() + "^\\circ\\) y \\(" + R1.toString() + "^\\circ\\)";
		}
		if(R2<R3){
			arregloOpciones[opc3] = "Entre \\(" + R2.toString() + "^\\circ\\) y \\(" + R3.toString() + "^\\circ\\)";
		}
		else{
			arregloOpciones[opc3] = "Entre \\(" + R3.toString() + "^\\circ\\) y \\(" + R2.toString() + "^\\circ\\)";
		}
		arregloOpciones[opc4] = "Entre \\(" + R4.toString() + "^\\circ\\) y \\(" + R3.toString() + "^\\circ\\)";
		document.getElementById('opcA').innerText = arregloOpciones[0];
		document.getElementById('opcB').innerText = arregloOpciones[1];
		document.getElementById('opcC').innerText = arregloOpciones[2];
		document.getElementById('opcD').innerText = arregloOpciones[3];
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
		var i=0;
		while(i==0){
			v0 = aleatorio(98,32,2);
			d = aleatorio(135,45,2);
			var X = 0;
			X = g*d*d/v0/v0;
			var raiz = 0;
			raiz = d*d-2*X*(h+X/2);
			if(raiz > 0) {
				R1 = 180/Math.PI*Math.atan((d-Math.sqrt(raiz))/X);
				R2 = 180/Math.PI*Math.atan((d+Math.sqrt(raiz))/X);
				if(Math.abs(R1-R2) > 2) {
					i=1;
					R1 = redondea(R1,2);
					R2 = redondea(R2,2);
					R3 = redondea(90 - R1,2);
					R4 = redondea(90 - R2,2);
				}
			}
		}	
		opcCorrecta = Math.floor(Math.random()*4);
		opc2 = Math.floor(Math.random()*4);
		while(opc2==opcCorrecta) opc2 = Math.floor(Math.random()*4);
		opc3 = Math.floor(Math.random()*4);
		while(opc3==opc2 || opc3==opcCorrecta) opc3 = Math.floor(Math.random()*4);
		opc4 = Math.floor(Math.random()*4);
		while(opc4==opc3 || opc4==opc2 || opc4==opcCorrecta) opc4 = Math.floor(Math.random()*4);
		arregloOpciones[opcCorrecta] = "Entre \\(" + R1.toString() + "^\\circ\\) y \\(" + R2.toString() + "^\\circ\\)";
		if(R1<R4){
			arregloOpciones[opc2] = "Entre \\(" + R1.toString() + "^\\circ\\) y \\(" + R4.toString() + "^\\circ\\)";
		}
		else{
			arregloOpciones[opc2] = "Entre \\(" + R4.toString() + "^\\circ\\) y \\(" + R1.toString() + "^\\circ\\)";
		}
		if(R2<R3){
			arregloOpciones[opc3] = "Entre \\(" + R2.toString() + "^\\circ\\) y \\(" + R3.toString() + "^\\circ\\)";
		}
		else{
			arregloOpciones[opc3] = "Entre \\(" + R3.toString() + "^\\circ\\) y \\(" + R2.toString() + "^\\circ\\)";
		}
		arregloOpciones[opc4] = "Entre \\(" + R4.toString() + "^\\circ\\) y \\(" + R3.toString() + "^\\circ\\)";
		document.getElementById('opcA').disabled = false;
		document.getElementById('opcB').disabled = false;
		document.getElementById('opcC').disabled = false;
		document.getElementById('opcD').disabled = false;
		document.getElementById('opcA').innerText = arregloOpciones[0];
		document.getElementById('opcB').innerText = arregloOpciones[1];
		document.getElementById('opcC').innerText = arregloOpciones[2];
		document.getElementById('opcD').innerText = arregloOpciones[3];
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById('opcA').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcB').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcC').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcD').style.backgroundColor = "#FCFCFC";
	}
	document.getElementById('txtV0').innerText = "\\(" + v0.toString() + "\\)";
	document.getElementById('txtD').innerText = "\\(" + d.toString() + "\\)";
	if(localStorage.intentosGolDeCampo > 3){
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
		localStorage.correctoGolDeCampo = 1;
		localStorage.v0GolDeCampo = v0;
		localStorage.dGolDeCampo = d;
		localStorage.idBotonGolDeCampo = idBoton;
		localStorage.intentosGolDeCampo++;
		localStorage.opcCorrectaGolDeCampo = opcCorrecta;
		localStorage.opc2GolDeCampo = opc2;
		localStorage.opc3GolDeCampo = opc3;
		localStorage.opc4GolDeCampo = opc4;
		localStorage.R1GolDeCampo = R1;
		localStorage.R2GolDeCampo = R2;
		localStorage.R3GolDeCampo = R3;
		localStorage.R4GolDeCampo = R4;
	} else {
		if(localStorage.intentosGolDeCampo==0){
			alert('¡Respuesta incorecta!\nPuedes seguir intentando, pero cada vez tendrás nuevos datos.');
		}
		document.getElementById(idBoton).style.backgroundColor = "red";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		localStorage.intentosGolDeCampo++;
		if(localStorage.intentosGolDeCampo==3){
			localStorage.intentosGolDeCampo++;
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
	if(numimg==7) numimg = 1;
	document.getElementById("animacion").src = "img/GolDeCampo" + numimg.toString() + ".png";
}
