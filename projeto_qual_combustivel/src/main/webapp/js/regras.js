    	
String paramAltura = request.getParameter("altura");
paramAltura = paramAltura == null ? "0" : paramAltura;
float altura = Float.parseFloat(paramAltura);
    	
String paramPeso = request.getParameter("peso");
paramPeso = paramPeso == null ? "0" : paramPeso;
float peso = Float.parseFloat(paramPeso);
    	
float imc;
if(altura==0){
    	imc =0;
    	}else {
    	imc = peso/(altura*altura);
    	}
    	
    String status;
    	
    	if(imc >= 17 && imc<=18.49){
    		status = "Você Está Abaixo do Peso";
    	}
    	else if(imc >= 18.5 && imc<=24.99){
    		status = "Seu Peso Está Normal";
    	}
    	else if(imc >= 25 && imc<=29.99){
    		status = "Você Está Acima do Peso";
    	}else{
    		status= "Sem Calculo";
    	}
 