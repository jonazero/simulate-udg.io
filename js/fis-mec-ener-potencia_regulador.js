//Define conceptos y apoyos

var apoyo_din_circ="$$\\mathbf{Dinámica \\ del \\ movimiento \\ circular}$$ \\( \\ \\ \\ \\)Para que exista un movimiento circular es necesario que exista una aceleración dirigida hacia el centro del círculo, la aceleración centrípeta $$a_c = \\frac{v^2}{R} = R \\omega^2,$$ siendo \\(R\\) el radio del círculo, \\(\\omega\\) la velocidad angular del objeto en movimiento y \\(v = R \\omega\\) su rapidez. Esta aceleración es el resultado de una fuerza neta en la dirección radial, $$\\sum F_{\\rm{rad}} = m a_c.$$";
var apoyo_friccion="$$\\mathbf{Fricción \\ cinética}$$ \\( \\ \\ \\ \\)Como resultado de que las esferas rocen con la pared aparece una fuerza de fricción cinética $$f_k = \\mu_k N,$$ siendo \\(\\mu_k\\) el coeficiente de fricción cinética y \\(N\\) la fuerza normal, en este caso, la fuerza con la que la pared empuja a las esferas.";
var apoyo_potencia="$$\\mathbf{Potencia}$$ \\( \\ \\ \\ \\)La potencia \\(P\\) nos indica la rapidez con la que una fuerza \\(\\vec{F}\\) realiza un trabajo \\(W\\). Se define como $$P = \\frac{dW}{dt} = \\vec{F} \\cdot \\vec{v},$$ siendo \\(\\vec{v}\\) la velocidad con la que se mueve el objeto sobre el que se hace trabajo.";
var apoyo_ayuda="$$\\mathbf{Planteamiento}$$ \\( \\ \\ \\ \\)En este caso la única fuerza que realiza trabajo sobre las esferas es la fuerza de fricción cinética, siendo ésta la responsable de la disipación de la potencia. Pero la fricción depende de la fuerza normal, y ésta última quedará en términos tanto de la rapidez del giro como de la fuerza de tensión, que depende el peso. Esto es, para resolver, hay que realizar un diagrama de cuerpo libre y plantear la suma de fuerzas en dirección vertical y en dirección radial.$$* \\ * \\ *$$ \\( \\ \\) La solución de este sistema de ecuaciones permitirá encontrar una expresión para la fuerza normal, y por lo tanto para la fricción. Una vez encontrada la fricción, que va en la dirección tangencial, que es la misma dirección de la velocidad, bastará con calcular $$P = f_k v.$$ Recuerda que hay que encontrar la potencia correspondiente a las dos esferas.";
var conceptos = ["dinámica del movimiento circular","fricción cinética","potencia"];
var descConceptos = [apoyo_din_circ,apoyo_friccion,apoyo_potencia,apoyo_ayuda];


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

if(localStorage.intentosRegulador == undefined) localStorage.intentosRegulador = 0;

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
var l = 0;
var th = 0;
var mu = 0;
var w = 0;

function escribeDatos(){
	const node = document.getElementById('enunciado');
	const node2 = document.getElementById('opciones');
	MathJax.typesetClear([node]);
	MathJax.typesetClear([node2]);
	if(localStorage.correctoRegulador == 1){
		m = localStorage.mRegulador;
		l = localStorage.lRegulador;
		th = localStorage.thRegulador;
		mu = localStorage.muRegulador;
		w = localStorage.wRegulador;
		opcCorrecta = localStorage.opcCorrectaRegulador;
		opc2 = localStorage.opc2Regulador;
		opc3 = localStorage.opc3Regulador;
		opc4 = localStorage.opc4Regulador;
		R1 = localStorage.R1Regulador;
		R2 = localStorage.R2Regulador;
		R3 = localStorage.R3Regulador;
		R4 = localStorage.R4Regulador;
		idBotonC = localStorage.idBotonRegulador;
		arregloOpciones[opcCorrecta] = R1;
		arregloOpciones[opc2] = R2;
		arregloOpciones[opc3] = R3;
		arregloOpciones[opc4] = R4;
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{W}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{W}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{W}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{W}\\)";
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
		m = aleatorio(200,50,0);
		l = aleatorio(10,2,1);
		th = aleatorio(45,10,1);
		mu = aleatorio(0.35,0.10,2);
		w = aleatorio(300,50,0);
		R1 = 2*mu*(l/100*w*w*4*Math.PI*Math.PI/3600-9.81/Math.cos(Math.PI/180*th))*m/1000*l/100*w*2*Math.PI/60*Math.pow(Math.sin(Math.PI/180*th),2);
		R2 = 2*mu*(l/100*w*w*4*Math.PI*Math.PI/3600+9.81/Math.cos(Math.PI/180*th))*m/1000*l/100*w*2*Math.PI/60*Math.pow(Math.sin(Math.PI/180*th),2);
		R3 = 2*mu*(l/100*w*w*4*Math.PI*Math.PI/3600-2*9.81/Math.cos(Math.PI/180*th))*m/1000*l/100*w*2*Math.PI/60*Math.pow(Math.sin(Math.PI/180*th),2);
		R4 = 2*mu*(l/100*w*w*4*Math.PI*Math.PI/3600+2*9.81/Math.cos(Math.PI/180*th))*m/1000*l/100*w*2*Math.PI/60*Math.pow(Math.sin(Math.PI/180*th),2);
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
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{W}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{W}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{W}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{W}\\)";
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById('opcA').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcB').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcC').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcD').style.backgroundColor = "#FCFCFC";
	}
	document.getElementById('txtM').innerText = "\\(" + m.toString() + "\\)";
	document.getElementById('txtL').innerText = "\\(" + l.toString() + "\\)";
	document.getElementById('txtTH').innerText = "\\(" + th.toString() + "\\)";
	document.getElementById('txtMU').innerText = "\\(" + mu.toString() + "\\)";
	document.getElementById('txtW').innerText = "\\(" + w.toString() + "\\)";
	if(localStorage.intentosRegulador > 3){
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
		localStorage.correctoRegulador = 1;
		localStorage.mRegulador = m;
		localStorage.lRegulador = l;
		localStorage.thRegulador = th;
		localStorage.muRegulador = mu;
		localStorage.wRegulador = w;
		localStorage.idBotonRegulador = idBoton;
		localStorage.intentosRegulador++;
		localStorage.opcCorrectaRegulador = opcCorrecta;
		localStorage.opc2Regulador = opc2;
		localStorage.opc3Regulador = opc3;
		localStorage.opc4Regulador = opc4;
		localStorage.R1Regulador = R1;
		localStorage.R2Regulador = R2;
		localStorage.R3Regulador = R3;
		localStorage.R4Regulador = R4;
	} else {
		if(localStorage.intentosRegulador==0){
			alert('¡Respuesta incorecta!\nPuedes seguir intentando, pero cada vez tendrás nuevos datos.');
		}
		document.getElementById(idBoton).style.backgroundColor = "red";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		localStorage.intentosRegulador++;
		if(localStorage.intentosRegulador==3){
			localStorage.intentosRegulador++;
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
	if(numimg==5) numimg = 1;
	document.getElementById("animacion").src = "img/potencia" + numimg.toString() + ".png";
}
