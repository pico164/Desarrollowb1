function numeros_primos(){
	var num = parseInt(document.getElementById('numeros').value);
	var s = 2;
	var resul = 2;

	while(s<=num){

		for (var i = 1; i <= s; i++) {
			var mod = s%i;
			if (mod == 0) {
				var cont=cont+1;
			}
		}

		if (cont<3) {
			resul = s+"/"+resul;
		}	

		cont=0;
		s=s+1;
	}
	document.getElementById('mostrar').innerHTML = resul;
}
