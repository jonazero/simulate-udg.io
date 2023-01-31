//Se definen conceptos y apoyos

//Crear un 'var' por cada concepto que se planea describir + 1 'var' para la ayuda. Se sugiere nombrar cada 'var' en relación al concepto. 

var apoyo_acel="$$\\mathbf{Aceleración \\ constante}$$ \\( \\ \\ \\ \\)Cuando un movimiento se realiza en línea recta con aceleración constante, es decir, que no cambia, se conoce como movimiento rectilíneo uniformemente acelerado o MRUA. En este caso, existen ecuaciones explícitas para calcular la posición y la velocidad del objeto en movimiento.";
var apoyo_pos="$$\\mathbf{Posición}$$ \\( \\ \\ \\ \\)Consideremos que la línea por la que se mueve el objeto en MRUA es el eje \\(x\\). La coordenada \\(x\\) del objeto describe su posición, la cual cambia con el tiempo, \\(t\\), de la forma $$x = x_0 + v_0 t + \\frac{1}{2} a t^2,$$ donde \\(x_0\\) es la posición inicial del objeto, \\(v_0\\) su velocidad inicial y \\(a\\) su aceleración constante.";
var apoyo_vel="$$\\mathbf{Velocidad}$$ \\( \\ \\ \\ \\)En el MRUA, la velocidad, \\(v\\), cambia con el tiempo, \\(t\\), de la forma $$v = v_0 + a t,$$ donde \\(v_0\\) es la velocidad inicial del objeto en movimiento y \\(a\\) su aceleración. También se puede relacionar la velocidad  del objeto con su posición, \\(x\\), a través de la expresión $$v^2 - v_0^2 = 2a\\left(x-x_0\\right),$$ siendo \\(x_0\\) su posición inicial.";
var apoyo_ayuda="$$\\mathbf{Planteamiento}$$ \\( \\ \\ \\ \\)Lo más conveniente es dividir el problema en dos partes. Primero el automóvil se mueve con velocidad constante (\\(a=0\\)), antes de que el conductor aplique los frenos; durante ese tiempo, \\(t_1\\), el automóvil avanza una distancia \\(d_1\\). $$* \\ * \\ * \\ * \\ *$$ \\( \\ \\ \\ \\)Luego, la distancia restante \\(d_2\\) se recorre con una desaceleración constante, que es tal que al llegar a su posición final, la velocidad del auto es 0. Si puedes encontrar dicha aceleración (negativa), basta con utilizar alguna de las fórmulas para hallar el tiempo en que se realiza esta segunda etapa, \\(t_2\\). El tiempo total será la suma de los tiempos \\(t_1 + t_2\\).";

//Aquí escribes el nombre de los conceptos que vas a usar (no agregues el planteamiento). Pon atención al orden que usas.
var conceptos = ["aceleración","posición","velocidad"];

//Este es similar al anterior, pero aquí escribes el nombre de las variables, en el orden que seguiste en el paso anterior, junto con la de ayuda.
var descConceptos = [apoyo_acel,apoyo_pos,apoyo_vel,apoyo_ayuda];


//Función que escribe los conceptos
//No modificar

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

//Función que escribe el apoyo
//No modificar
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

//No modificar
function insertaSpan(textoElemento){
	var elemento = document.createElement('span');
	var txtElemento = textoElemento;
	var apoyoDiv = document.getElementById('apoyo').lastChild;
	elemento.appendChild(document.createTextNode(txtElemento));
	document.getElementById('apoyo').insertBefore(elemento, apoyoDiv.nextSibling);
}

//No modificar
function insertaA(numCon){
	var elemento = document.createElement('a');
	var txtElemento = conceptos[numCon];
	var apoyoDiv = document.getElementById('apoyo').lastChild;
	elemento.appendChild(document.createTextNode(txtElemento));
	elemento.href = "javascript:escribeApoyo(" + numCon.toString() + ")";
	document.getElementById('apoyo').insertBefore(elemento, apoyoDiv.nextSibling);
}

//No modificar
function saltoLinea(){
	var elemento = document.createElement('br');
	var apoyoDiv = document.getElementById('apoyo').lastChild;
	document.getElementById('apoyo').insertBefore(elemento, apoyoDiv.nextSibling);
}

//Se llenan los datos: valores y opciones

//Da un nombre clave (sin espacios) a tu problema, p.ej. AutoSem. Eventualmente, en todas las variables reemplazarás el AutoSem por lo que hayas elegido, cuidando no reemplazar nada más que esa parte y cuidando mayúsculas y minúsculas. Por ahora reemplázalo en la línea de abajo.
if(localStorage.intentosAutoSem == undefined) localStorage.intentosAutoSem = 0;

//Aquí se definen las variables que contienen las opciones y las respuestas.
//No modificar
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
//Estas son las variables del problema. Defínelas con un nombre que te resulte conveniente. Aquí solo se definen. Si serán variables puedes ponerles cero. Si son constantes, asigna de una vez su valor (p. ej. var g = 9.81;).
var v0 = 0;
var d = 0;
var t1 = 0;

//Esta función escribirá los datos en el enunciado y en las opciones.
//Reemplaza TODOS los AutoSem por el mismo nombre que elegiste arriba. Sigue los cuidados mencionados.
function escribeDatos(){
	const node = document.getElementById('enunciado');
	const node2 = document.getElementById('opciones');
	MathJax.typesetClear([node]);
	MathJax.typesetClear([node2]);
	if(localStorage.correctoAutoSem == 1){
		//Aquí van las variables de tu problema en el lado izquierdo. En el derecho, reemplaza también la parte que contiene el nombre de la variable.
		v0 = localStorage.v0AutoSem;
		d = localStorage.dAutoSem;
		t1 = localStorage.t1AutoSem;
		
		opcCorrecta = localStorage.opcCorrectaAutoSem;
		opc2 = localStorage.opc2AutoSem;
		opc3 = localStorage.opc3AutoSem;
		opc4 = localStorage.opc4AutoSem;
		R1 = localStorage.R1AutoSem;
		R2 = localStorage.R2AutoSem;
		R3 = localStorage.R3AutoSem;
		R4 = localStorage.R4AutoSem;
		idBotonC = localStorage.idBotonAutoSem;
		arregloOpciones[opcCorrecta] = R1;
		arregloOpciones[opc2] = R2;
		arregloOpciones[opc3] = R3;
		arregloOpciones[opc4] = R4;
		
		//Reemplaza en el rm{} las unidades de tus datos.
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{s}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{s}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{s}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{s}\\)";
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
		
			//Aquí se asignan valores a las variables. La función que lo hace es aleatorio(valor, incertidumbre, decimales). El primer dato (valor) es un valor de referencia de la variable. El segundo dato (incertidumbre) es el rango en el que pueda variar el valor de referencia, es decir, la función asignará un valor aleatorio entre valor - incertidumbre y valor + incertidumbre. El tercer dato (decimales) es el número de decimales que quieres que se muestren. Cuida que los datos sean relativamente realistas.
			v0 = aleatorio(55,20,2);
			d = aleatorio(100,20,2);
			t1 = aleatorio(1,0.5,2);
		
			//Aquí debes dar cuatro respuestas, una correcta (R1) y las demás incorrectas. Puedes dar respuestas aleatorias usando 'Math.random()', que genera un número aleatorio entre 0 y 1. Cuida que las cuatro respuestas den cosas coherentes (p. ej. que no salgan masas negativas) y que se puedan calcular en el rango de las variables (p. ej. que si tienes una raíz, el argumento no pueda ser negativo).
			R1 = t1+2*(d-v0/3.6*t1)/v0*3.6;
			R2 = aleatorio(R1,R1/2,2);
			R3 = aleatorio(R1,R1/2,2);
			R4 = aleatorio(R1,R1/2,2);
			
			//El algoritmo revisa que las respuestas no sean muy similares. El porcentaje mínimo en que difieren las respuestas está dado por dif. Cuida que los rangos de las variables permitan dar respuestas que difieran, pues si no el bucle se hace infinito al no encontrar respuestas distintas.
			var dif = 10;
			
			dif = dif/100;
			if(((R1>(1+dif)*R2)||(R1<(1-dif)*R2))&&((R1>(1+dif)*R3)||(R1<(1-dif)*R3))&&((R1>(1+dif)*R4)||(R1<(1-dif)*R4))&&((R2>(1+dif)*R3)||(R2<(1-dif)*R3))&&((R2>(1+dif)*R4)||(R2<(1-dif)*R4))&&((R3>(1+dif)*R4)||(R3<(1-dif)*R4))) flag = 1;
		}
		
		//El segundo argumento de la función 'redondea' es el número de decimales que quieres que tengan las respuestas.
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
		
		//Reemplaza en el rm{} las unidades de tus datos.
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{s}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{s}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{s}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{s}\\)";
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById('opcA').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcB').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcC').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcD').style.backgroundColor = "#FCFCFC";
	}
	
	//Esta parte se relaciona con el html. Identifica el nombre que le diste al espacio donde van los valores de las variables y reemplázalo aquí en el lado izquierdo. En el lado derecho, reemplaza el nombre de tus variables.
	document.getElementById('txtV0').innerText = "\\(" + v0.toString() + "\\)";
	document.getElementById('txtD').innerText = "\\(" + d.toString() + "\\)";
	document.getElementById('txtT1').innerText = "\\(" + t1.toString() + "\\)";
	document.getElementById('txtDD').innerText = "\\(" + d.toString() + "\\)";
	
	//Reemplaza el AutoSem
	if(localStorage.intentosAutoSem > 3){
		document.getElementById('cajaBtnAyuda').style.display = "block";
		document.getElementById('imgCorrecto').src = "img/hechoAyuda.png";
	}
	document.getElementById('animacion').addEventListener('mouseenter', repiteImagen);
	document.getElementById('animacion').addEventListener('mouseleave', detenImagen);
	MathJax.typesetPromise([node]).then(() => {
		// the new content is has been typeset
	});
}

//No modificar
function aleatorio(valor,incertidumbre,decimales){
	if(Math.random() >= 0.5) valor = valor + incertidumbre*Math.random();
	else valor = valor - incertidumbre*Math.random();
	valor = redondea(valor,decimales);
	return valor;
}


//No modificar
function redondea(valor,decimales){
	valor = valor*(10**decimales);
	valor = Math.floor(valor);
	valor = valor/(10**decimales);
	return valor;
}

window.onload = escribeDatos;

//Se revisan las respuetas		

//Reemplaza todos los AutoSem
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

		//Reemplaza el AutoSem
		localStorage.correctoAutoSem = 1;
		
		//Aquí, además del AutoSem, reemplaza el nombre de tus variables
		localStorage.v0AutoSem = v0;
		localStorage.dAutoSem = d;
		localStorage.t1AutoSem = t1;
		
		localStorage.idBotonAutoSem = idBoton;
		localStorage.intentosAutoSem++;
		localStorage.opcCorrectaAutoSem = opcCorrecta;
		localStorage.opc2AutoSem = opc2;
		localStorage.opc3AutoSem = opc3;
		localStorage.opc4AutoSem = opc4;
		localStorage.R1AutoSem = R1;
		localStorage.R2AutoSem = R2;
		localStorage.R3AutoSem = R3;
		localStorage.R4AutoSem = R4;
	} else {
		//Reemplaza el AutoSem
		if(localStorage.intentosAutoSem==0){
			alert('¡Respuesta incorecta!\nPuedes seguir intentando, pero cada vez tendrás nuevos datos.');
		}
		document.getElementById(idBoton).style.backgroundColor = "red";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		
		//Reemplaza el AutoSem
		localStorage.intentosAutoSem++;
		if(localStorage.intentosAutoSem==3){
			localStorage.intentosAutoSem++;
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
	
	//En el 'if' iría el número al que llegan las imágenes + 1. 
	if(numimg==6) numimg = 1;
	
	//Reemplaza el AutoSem.
	//De cualquier forma, si la imagen no existe, no mostrará nada.
	document.getElementById("animacion").src = "img/AutoSem" + numimg.toString() + ".png";
}
