function calcular_sumatoria(){
	var numero = parseInt(document.getElementById('numeros').value);
	var total1 = 0;

	for (var i = 1; i <= numero; i++) {
		var sucesion = "la sucesion es : "+ i+"^"+numero +" = "+ Math.pow(i, numero) + "<br>" + sucesion;
		var total = Math.pow(i, numero);
		total1 = total1+total;
	}


	document.getElementById('mostrar').innerHTML = sucesion;
	document.getElementById('valor total').innerHTML = "Sumatoria total = " +total1;
}