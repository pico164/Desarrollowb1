function calcular_fibonacci(){
	var numero = parseInt(document.getElementById('numeros').value);
	var vect_fibo = [];
	vect_fibo[0] = 0;
	vect_fibo[1] = 1;

	for (var i = 2; i <= numero; i++) {
		vect_fibo[i] = vect_fibo[i - 2] + vect_fibo[i - 1];
	}

	document.getElementById('mostrar').innerHTML = vect_fibo;

}