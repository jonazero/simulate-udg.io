//Se definen conceptos y apoyos

//Crear un 'var' por cada concepto que se planea describir + 1 'var' para la ayuda. Se sugiere nombrar cada 'var' en relación al concepto. 

var apoyo_friccion= "$$\\mathbf{Fricción \\ estática}$$\\( \\ \\ \\ \\) Las fuerzas de fricción son fuerzas de contacto que surgen por la interacción dinámica o estática entre dos superficies del mismo o distinto material. En particular, la fricción estática siempre es menor a un valor máximo \\(f_s^{\\rm{máx}}\\). Este valor máximo depende tanto del coeficiente de fricción estática, \\(\\mu_s\\), como de la fuerza normal \\(N\\), de la forma$$f_s^{\\rm{máx}}= \\mu_s N.$$";
var apoyo_normal= "$$\\mathbf{Fuerza  \\ normal}$$\\( \\ \\ \\ \\) La fuerza normal es aquella que aparece por la interacción entre un cuerpo y una superficie. Esta fuerza siempre es perpendicular a la superficie de contacto.";
var apoyo_frecuencia= "$$ \\mathbf{Frecuencia}$$\\(\\ \\ \\ \\)En un movimiento circular, la frecuencia, \\(\\nu\\), es el número de vueltas por unidad de tiempo. Ésta es calculada de la forma $$\\nu = \\frac{v}{2\\pi R},$$ donde \\(v\\) es la velocidad del objeto en movimiento y \\(R\\) el radio del círculo que describe.";
var apoyo_centripeta= "$$\\mathbf{Fuerza \\ centrípeta}$$\\(\\ \\ \\ \\) La fuerza centrípeta es necesaria para que un cuerpo describa una trayectoria circular de radio  \\(R\\) con rapidez constante \\(v\\). La dirección de esta fuerza es radial, y como su nombre lo indica, hacia el centro del círculo. Para la suma de las componentes de todas las fuerzas en dirección radial se tiene que $$\\sum F_{\\rm{rad}} = m \\frac{v^{2}}{R}.$$";
var apoyo_ayuda= "$$\\mathbf{Planteamiento}$$ \\( \\ \\ \\ \\) Realiza el diagrama de cuerpo libre, identificando en éste la fuerza normal, la fuerza de fricción y el peso del cubo. $$* \\ * \\ * \\ * \\ *$$\\( \\ \\ \\ \\)Haz la descomposición de fuerzas de forma adecuada, considerando la dirección radial como uno de los ejes, y el otro eje como la dirección vertical. Plantea la suma de fuerzas en cada uno de los ejes.";
//Aquí escribes el nombre de los conceptos que vas a usar (no agregues el planteamiento). Pon atención al orden que usas.
var conceptos = ["fricción estática","fuerza normal","frecuencia","fuerza centrípeta"];

//Este es similar al anterior, pero aquí escribes el nombre de las variables, en el orden que seguiste en el paso anterior, junto con la de ayuda.
var descConceptos = [apoyo_friccion,apoyo_normal,apoyo_frecuencia,apoyo_centripeta,apoyo_ayuda];


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
if(localStorage.intentosFric == undefined) localStorage.intentosFric = 0;

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
var mu = 0;
var r = 0;
var nu = 0;
var g = 9.81;

//Esta función escribirá los datos en el enunciado y en las opciones.
//Reemplaza TODOS los AutoSem por el mismo nombre que elegiste arriba. Sigue los cuidados mencionados.
function escribeDatos(){
	const node = document.getElementById('enunciado');
	const node2 = document.getElementById('opciones');
	MathJax.typesetClear([node]);
	MathJax.typesetClear([node2]);
	if(localStorage.correctoFric == 1){
		//Aquí van las variables de tu problema en el lado izquierdo. En el derecho, reemplaza también la parte que contiene el nombre de la variable.
		m = localStorage.mFric;
		mu = localStorage.muFric;
		r = localStorage.rFric;
		nu = localStorage.nuFric;
		
		opcCorrecta = localStorage.opcCorrectaFric;
		opc2 = localStorage.opc2Fric;
		opc3 = localStorage.opc3Fric;
		opc4 = localStorage.opc4Fric;
		R1 = localStorage.R1Fric;
		R2 = localStorage.R2Fric;
		R3 = localStorage.R3Fric;
		R4 = localStorage.R4Fric;
		idBotonC = localStorage.idBotonFric;
		arregloOpciones[opcCorrecta] = R1;
		arregloOpciones[opc2] = R2;
		arregloOpciones[opc3] = R3;
		arregloOpciones[opc4] = R4;
		
		//Reemplaza en el rm{} las unidades de tus datos.
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + "^\\circ\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + "^\\circ\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + "^\\circ\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + "^\\circ\\)";
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
			mu = aleatorio(0.5,0.4,2);
			r = aleatorio(0.5,0.4,2);
			nu = aleatorio(5,4,2);
			m = aleatorio(300,100,0);
		
			//Aquí debes dar cuatro respuestas, una correcta (R1) y las demás incorrectas. Puedes dar respuestas aleatorias usando 'Math.random()', que genera un número aleatorio entre 0 y 1. Cuida que las cuatro respuestas den cosas coherentes (p. ej. que no salgan masas negativas) y que se puedan calcular en el rango de las variables (p. ej. que si tienes una raíz, el argumento no pueda ser negativo).
			R1 = 180/Math.PI*Math.atan((r*2*Math.PI*nu*2*Math.PI*nu-g*mu)/(g+mu*r*2*Math.PI*nu*2*Math.PI*nu));
			R2 = 180/Math.PI*Math.atan(mu);
			R3 = aleatorio(R1,0.25*R1,2);
			R4 = aleatorio(R1,0.25*R1,2);
			
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
		document.getElementById('opcA').innerText = "\\(" + arregloOpciones[0].toString() + "^\\circ\\)";
		document.getElementById('opcB').innerText = "\\(" + arregloOpciones[1].toString() + "^\\circ\\)";
		document.getElementById('opcC').innerText = "\\(" + arregloOpciones[2].toString() + "^\\circ\\)";
		document.getElementById('opcD').innerText = "\\(" + arregloOpciones[3].toString() + "^\\circ\\)";
		MathJax.typesetPromise([node2]).then(() => {
			// the new content is has been typeset
		});
		document.getElementById('opcA').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcB').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcC').style.backgroundColor = "#FCFCFC";
		document.getElementById('opcD').style.backgroundColor = "#FCFCFC";
	}
	
	//Esta parte se relaciona con el html. Identifica el nombre que le diste al espacio donde van los valores de las variables y reemplázalo aquí en el lado izquierdo. En el lado derecho, reemplaza el nombre de tus variables.
	document.getElementById('txtM').innerText = "\\(" + m.toString() + "\\)";
	document.getElementById('txtMu').innerText = "\\(" + mu.toString() + "\\)";
	document.getElementById('txtR').innerText = "\\(" + r.toString() + "\\)";
	document.getElementById('txtNu').innerText = "\\(" + nu.toString() + "\\)";
	
	//Reemplaza el AutoSem
	if(localStorage.intentosFric > 3){
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
		localStorage.correctoFric = 1;
		
		//Aquí, además del AutoSem, reemplaza el nombre de tus variables
		localStorage.mFric = m;
		localStorage.muFric = mu;
		localStorage.rFric = r;
		localStorage.nuFric = nu;
		
		localStorage.idBotonFric = idBoton;
		localStorage.intentosFric++;
		localStorage.opcCorrectaFric = opcCorrecta;
		localStorage.opc2Fric = opc2;
		localStorage.opc3Fric = opc3;
		localStorage.opc4Fric = opc4;
		localStorage.R1Fric = R1;
		localStorage.R2Fric = R2;
		localStorage.R3Fric = R3;
		localStorage.R4Fric = R4;
	} else {
		//Reemplaza el AutoSem
		if(localStorage.intentosFric==0){
			alert('¡Respuesta incorecta!\nPuedes seguir intentando, pero cada vez tendrás nuevos datos.');
		}
		document.getElementById(idBoton).style.backgroundColor = "red";
		document.getElementById('opcA').disabled = true;
		document.getElementById('opcB').disabled = true;
		document.getElementById('opcC').disabled = true;
		document.getElementById('opcD').disabled = true;
		
		//Reemplaza el AutoSem
		localStorage.intentosFric++;
		if(localStorage.intentosFric==3){
			localStorage.intentosFric++;
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
	document.getElementById("animacion").src = "img/embudo" + numimg.toString() + ".png";
}
