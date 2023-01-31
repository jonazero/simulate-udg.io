//Define conceptos y apoyos

var apoyo_cm="$$\\mathbf{Centro \\ de \\ masa}$$ \\( \\ \\ \\ \\)El centro  de masa es un vector que indica la posición promedio de la masa de un sistema. Si el sistema está formado por \\(N\\) objetos contables (sistma discreto) de masa \\(m_i\\) con posiciones \\(\\vec{r}_i\\), el centro de masa se calcula como $$ \\vec{r}_{\\rm{cm}}= \\frac{\\Sigma^N_{i=1} m_i \\vec{r}_i }{\\Sigma^N_{i=1} m_{i}}.$$";
var apoyo_momento="$$\\mathbf{Conservación \\ de \\ la}$$ $$\\mathbf{cantidad \\ de \\ movimiento}$$  \\( \\ \\ \\ \\)Si la fuerza neta externa a un sistema es cero, o es muy pequeña comparada con las fuerzas internas, la cantidad de movimiento del sistema se conserva. Si el sistema está compuesto por \\(A\\), de masa \\(m_A\\), y \\(B\\), de masa \\(m_B\\), se tiene $$m_A \\ \\vec{v}_{A,1} \\ + \\ m_B \\ \\vec{v}_{B,1} \\ = \\ m_A \\ \\vec{v}_{A,2} \\ + \\ m_B \\ \\vec{v}_{B,2} \\ ,$$ donde \\(\\vec{v}_A\\) y \\(\\vec{v}_B\\) son las velocidades de \\(A\\) y \\(B\\) respectivamente. Las cantidades a la izquierda se refieren a justo antes y las de la derecha a justo después de algún evento, como el caminar de una persona sobre una canoa.";
var apoyo_ayuda="$$\\mathbf{Planteamiento}$$ \\( \\ \\ \\ \\) Debido a que la cantidad de movimiento se conserva, la velocidad del centro de masa \\(\\vec{v}_{\\rm{cm}}\\) es constante. Al inicio, el centro de masa del sistema está en reposo, lo que implica que en todo momento  $$\\vec{v}_{\\rm{cm}}=\\vec{0}.$$ Es decir, la posición del centro de masa es la misma al principio y al final del movimiento: $$(\\vec{r}_{\\rm{cm}})_0=(\\vec{r}_{\\rm{cm}})_f.$$\\( \\ \\ \\ \\)Con ayuda de la definición del centro de masa, calcula el centro de masa del sistema antes y después del movimiento.";
var conceptos = ["centro de masa","conservación de la cantidad de movimiento"];
var descConceptos = [apoyo_cm,apoyo_momento,apoyo_ayuda];


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
if(localStorage.intentosCan == undefined) localStorage.intentosCan = 0;

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
var m = 0;
var M = 0;
var L  = 0;
var a  = 0;

//Esta función escribirá los datos en el enunciado y en las opciones.
//Reemplaza TODOS los AutoSem por el mismo nombre que elegiste arriba. Sigue los cuidados mencionados.
function escribeDatos(){
	const node = document.getElementById('enunciado');
	const node2 = document.getElementById('opciones');
	MathJax.typesetClear([node]);
	MathJax.typesetClear([node2]);
	if(localStorage.correctoCan == 1){
		//Aquí van las variables de tu problema en el lado izquierdo. En el derecho, reemplaza también la parte que contiene el nombre de la variable.
		m = localStorage.mCan;
		M = localStorage.MCan;
		L = localStorage.LCan;
		a = localStorage.aCan;
		
		opcCorrecta = localStorage.opcCorrectaCan;
		opc2 = localStorage.opc2Can;
		opc3 = localStorage.opc3Can;
		opc4 = localStorage.opc4Can;
		R1 = localStorage.R1Can;
		R2 = localStorage.R2Can;
		R3 = localStorage.R3Can;
		R4 = localStorage.R4Can;
		idBotonC = localStorage.idBotonCan;
		arregloOpciones[opcCorrecta] = R1;
		arregloOpciones[opc2] = R2;
		arregloOpciones[opc3] = R3;
		arregloOpciones[opc4] = R4;
		
		//Reemplaza en el rm{} las unidades de tus datos.
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{m}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{m}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{m}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{m}\\)";
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
			m = aleatorio(60,8,1);
			M = aleatorio(200,20,0);
			L = aleatorio(4,0.4,2);
			a = aleatorio(1.1,0.3,2);
		
			//Aquí debes dar cuatro respuestas, una correcta (R1) y las demás incorrectas. Puedes dar respuestas aleatorias usando 'Math.random()', que genera un número aleatorio entre 0 y 1. Cuida que las cuatro respuestas den cosas coherentes (p. ej. que no salgan masas negativas) y que se puedan calcular en el rango de las variables (p. ej. que si tienes una raíz, el argumento no pueda ser negativo).
			R1 = (m/(M+m))*(L-2*a);
			R2 = (m/(M+m))*(L+2*a);
			R3 = (m/(M+m))*(L-a);
			R4 = (m/(M+m))*(L+a);
			
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
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + " \\ \\rm{m}\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + " \\ \\rm{m}\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + " \\ \\rm{m}\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + " \\ \\rm{m}\\)";
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById('opcA').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcB').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcC').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcD').style.backgroundColor = "#FCFCFC";
	}
	
	//Esta parte se relaciona con el html. Identifica el nombre que le diste al espacio donde van los valores de las variables y reemplázalo aquí en el lado izquierdo. En el lado derecho, reemplaza el nombre de tus variables.
	document.getElementById('txtM1').innerText = "\\(" + m.toString() + "\\)";
	document.getElementById('txtM2').innerText = "\\(" + M.toString() + "\\)";
	document.getElementById('txtL1').innerText = "\\(" + L.toString() + "\\)";
	document.getElementById('txtA').innerText = "\\(" + a.toString() + "\\)";
	document.getElementById('txtA1').innerText = "\\(" + a.toString() + "\\)";
	
	//Reemplaza el AutoSem
	if(localStorage.intentosCan > 3){
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
		localStorage.correctoCan = 1;
		
		//Aquí, además del AutoSem, reemplaza el nombre de tus variables
		localStorage.mCan = m;
		localStorage.MCan = M;
		localStorage.LCan = L;
		localStorage.aCan = a;
		
		localStorage.idBotonCan = idBoton;
		localStorage.intentosCan++;
		localStorage.opcCorrectaCan = opcCorrecta;
		localStorage.opc2Can = opc2;
		localStorage.opc3Can = opc3;
		localStorage.opc4Can = opc4;
		localStorage.R1Can = R1;
		localStorage.R2Can = R2;
		localStorage.R3Can = R3;
		localStorage.R4Can = R4;
	} else {
		//Reemplaza el AutoSem
		if(localStorage.intentosCan==0){
			alert('¡Respuesta incorecta!\nPuedes seguir intentando, pero cada vez tendrás nuevos datos.');
		}
		document.getElementById(idBoton).style.backgroundColor = "red";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		
		//Reemplaza el AutoSem
		localStorage.intentosCan++;
		if(localStorage.intentosCan==3){
			localStorage.intentosCan++;
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
	document.getElementById("animacion").src = "img/canoa" + numimg.toString() + ".png";
}