//Define conceptos y apoyos

var apoyo_implsL="$$\\mathbf{Impulso \\ lineal}$$ \\( \\ \\ \\ \\)Cuando una fuerza neta \\(\\sum \\vec{F}\\) actúa sobre un objeto durante un intervalo de tiempo \\(\\Delta t = t_2 - t_1\\), le genera un impulso lineal $$\\vec{J} = \\int_{t_1}^{t_2 } \\sum \\vec{F} dt.$$ Este impulso es igual al cambio en la cantidad de movimiento lineal \\(\\vec{p} = M \\vec{v}\\) del objeto de masa \\(M\\), siendo \\(\\vec{v}\\) su velocidad. Esto es, $$\\vec{J} \\ = \\ \\vec{p}_2 - \\vec{p}_1,$$ donde el subíndice 1 indica antes y el 2, después del intervalo \\(\\Delta t\\).";
var apoyo_implsA="$$\\mathbf{Impulso \\ angular}$$ \\( \\ \\ \\ \\)Cuando un momento de torsión neto \\(\\sum \\vec{\\tau}\\) se aplica sobre un cuerpo rígido durante un intervalo de tiempo \\(\\Delta t = t_2 - t_1\\), le produce un impulso angular $$\\Delta \\vec{L} = \\int_{t_1}^{t_2} \\sum \\vec{\\tau} dt.$$ Dicho impulso es igual al cambio en la cantidad de movimiento angular \\(\\vec{L} = I \\vec{\\omega}\\) del cuerpo rígido de momento de inercia \\(I\\), siendo \\(\\vec{\\omega}\\) su velocidad angular. Es decir, $$\\Delta \\vec{L} \\ = \\ \\vec{L}_2 - \\vec{L}_1,$$ donde el subíndice 1 indica antes y el 2, después del intervalo \\(\\Delta t\\).";
var apoyo_momT="$$\\mathbf{Momento \\ de \\ torsión}$$ \\( \\ \\ \\ \\)Sea un cuerpo rígido que puede girar por un eje que pasa por un punto \\(O\\). Cuando se le aplica una fuerza \\(\\vec{F}\\) al cuerpo rígido en un punto con posición \\(\\vec{r}\\) con respecto a \\(O\\), ésta le genera un momento de torsión $$\\vec{\\tau} = \\vec{r} \\times \\vec{F}.$$ \\( \\ \\ \\ \\)Si la fuerza es de magnitud \\(F\\), la magnitud del momento de torsión es $$\\tau = F d,$$ siendo \\(d\\) la distancia perpendicular entre la línea de acción de la fuerza y el punto \\(O\\).";
var apoyo_momI="$$\\mathbf{Momento \\ de \\ inercia}$$ \\( \\ \\ \\ \\)El momento de inercia \\(I\\) de un cuerpo rígido mide su resistencia a cambiar su estado de movimiento rotacional, de la misma forma que su masa es una medida de la oposición a cambiar su estado de movimiento traslacional. Para una esfera sólida que gira por un eje que pasa por su centro, como lo es la bola de billar, el momento de inercia es $$I = \\frac{2}{5} M R^2,$$ siendo \\(M\\) su masa y \\(R\\) su radio.";
var apoyo_segLey="$$\\mathbf{Análogo \\ rotacional \\ de}$$ $$\\mathbf{la \\ segunda \\ ley \\ de \\ Newton}$$ \\( \\ \\ \\ \\)De la misma forma que la segunda ley de Newton dice que una fuerza neta \\(\\sum \\vec{F}\\) aplicada sobre un objeto de masa \\(M\\) le genera una aceleración \\(\\vec{a}\\), $$\\sum \\vec{F} = M \\vec{a},$$ un momento de torsión neto \\(\\sum \\vec{\\tau}\\) sobre un cuerpo rígido de momento de inercia \\(I\\) le genera una aceleración angular \\(\\vec{\\alpha}\\), $$\\sum \\vec{\\tau} = I \\vec{\\alpha}.$$";
var apoyo_rod="$$\\mathbf{Rodamiento \\ sin \\ deslizamiento}$$ \\( \\ \\ \\ \\)Cuando un cuerpo rígido de radio \\(R\\) rueda sobre una superficie y no se desliza o se resbala, se cumple que $$v_{\\rm{cm}} = R \\omega,$$ siendo \\(v_{\\rm{cm}}\\) la rapidez del centro de masa del cuerpo rígido y \\(\\omega\\) su velocidad angular.";
var apoyo_ayuda="$$\\mathbf{Planteamiento}$$ \\( \\ \\ \\ \\)Puedes separar el problema en tres partes, en donde en cada una utilizarás un principio físico distinto. En la primera parte, el taco le genera a la bola un impulso lineal a la vez que uno angular; puedes asociarlos a sus cambios en las cantidades de movimiento. $$* \\ * \\ * \\ * \\ *$$ \\( \\ \\ \\ \\)Habiendo perdido contacto con el taco, la bola se desliza haciendo la \u0022inglesa hacia el frente\u0022. Aquí puedes aplicar la segunda ley de Newton y su análogo rotacional para encontrar las aceleraciones lineal y angular. Dichas aceleraciones son constantes, por lo que puedes encontrar, a partir de ellas, las velocidades lineal y angular con las que terminan la etapa de deslizamiento. $$* \\ * \\ * \\ * \\ *$$ \\( \\ \\ \\ \\)Por último, la bola rueda sin deslizarse. Aplicando la condición correspondiente y ya que conoces su velocidad final, puedes encontrar la respuesta.";
var conceptos = ["impulso lineal","impulso angular","momento de torsión","momento de inercia","análogo rotacional de la segunda ley de Newton","rodamiento sin deslizamiento"];
var descConceptos = [apoyo_implsL,apoyo_implsA,apoyo_momT,apoyo_momI,apoyo_segLey,apoyo_rod,apoyo_rod,apoyo_ayuda];


//Escribe los conceptos y apoyos

function escribeApoyo(numConcepto){
	const node = document.getElementById('apoyo');
	node.style.boxShadow = "-2px 0px 4px blue";
	MathJax.typesetClear([node]);
	document.getElementById('apoyo').innerHTML=" ";
	var apoyoDiv = document.getElementById('apoyo').lastChild;
	document.getElementById('apoyo').firstChild.nodeValue = descConceptos[numConcepto];
	saltoLinea();
//	if(numConcepto == 2) insertaImg('img/torca.jpg');
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

function insertaImg(imagen){
	var elemento = document.createElement('img');
	var apoyoDiv = document.getElementById('apoyo').lastChild;
	elemento.src = imagen;
	elemento.width = document.getElementById('apoyo').clientWidth;
	elemento.style.display = "block";
	elemento.style.margin = "auto";
	document.getElementById('apoyo').insertBefore(elemento, apoyoDiv.nextSibling);
}

//Llena los datos: valores y opciones

if(localStorage.intentosBolaBillar == undefined) localStorage.intentosBolaBillar = 0;

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
var r = 0;
var v0 = 0;
var vf = 0;

function escribeDatos(){
	const node = document.getElementById('enunciado');
	const node2 = document.getElementById('opciones');
	MathJax.typesetClear([node]);
	MathJax.typesetClear([node2]);
	if(localStorage.correctoBolaBillar == 1){
		r = localStorage.rBolaBillar;
		v0 = localStorage.v0BolaBillar;
		vf = localStorage.vfBolaBillar;
		opcCorrecta = localStorage.opcCorrectaBolaBillar;
		opc2 = localStorage.opc2BolaBillar;
		opc3 = localStorage.opc3BolaBillar;
		opc4 = localStorage.opc4BolaBillar;
		R1 = localStorage.R1BolaBillar;
		R2 = localStorage.R2BolaBillar;
		R3 = localStorage.R3BolaBillar;
		R4 = localStorage.R4BolaBillar;
		idBotonC = localStorage.idBotonBolaBillar;
		arregloOpciones[opcCorrecta] = R1;
		arregloOpciones[opc2] = R2;
		arregloOpciones[opc3] = R3;
		arregloOpciones[opc4] = R4;
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{cm}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{cm}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{cm}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{cm}\\)";
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
		var flag = 0;
		while(flag==0){
			r = aleatorio(6,0.5,2);
			v0 = aleatorio(2,1,2);
			vf = aleatorio(7.5/7,2.3/7,2)*v0;
			vf = redondea(vf,2);
			R1 = (7/5*vf/v0-1)*r;
			R2 = (Math.random())*r;
			R3 = (Math.random())*r;
			R4 = (Math.random())*r;
			var dif = 0.3;
			if((Math.abs(R1-R2)>dif)&&(Math.abs(R1-R3)>dif)&&(Math.abs(R1-R4)>dif)&&(Math.abs(R2-R3)>dif)&&(Math.abs(R2-R4)>dif)&&(Math.abs(R3-R4)>dif)) flag = 1;
		}
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
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{cm}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{cm}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{cm}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{cm}\\)";
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById('opcA').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcB').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcC').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcD').style.backgroundColor = "#FCFCFC";
	}
	document.getElementById('txtR').innerText = "\\(" + r.toString() + "\\)";
	document.getElementById('txtV0').innerText = "\\(" + v0.toString() + "\\)";
	document.getElementById('txtVF').innerText = "\\(" + vf.toString() + "\\)";
	if(localStorage.intentosBolaBillar > 3){
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
		localStorage.correctoBolaBillar = 1;
		localStorage.rBolaBillar = r;
		localStorage.v0BolaBillar = v0;
		localStorage.vfBolaBillar = vf;
		localStorage.idBotonBolaBillar = idBoton;
		localStorage.intentosBolaBillar++;
		localStorage.opcCorrectaBolaBillar = opcCorrecta;
		localStorage.opc2BolaBillar = opc2;
		localStorage.opc3BolaBillar = opc3;
		localStorage.opc4BolaBillar = opc4;
		localStorage.R1BolaBillar = R1;
		localStorage.R2BolaBillar = R2;
		localStorage.R3BolaBillar = R3;
		localStorage.R4BolaBillar = R4;
	} else {
		if(localStorage.intentosBolaBillar==0){
			alert('¡Respuesta incorecta!\nPuedes seguir intentando, pero cada vez tendrás nuevos datos.');
		}
		document.getElementById(idBoton).style.backgroundColor = "red";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		localStorage.intentosBolaBillar++;
		if(localStorage.intentosBolaBillar==3){
			localStorage.intentosBolaBillar++;
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
	if(numimg==8) numimg = 1;
	document.getElementById("animacion").src = "img/BolaBillar" + numimg.toString() + ".png";
}
