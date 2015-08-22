op = resp = ""; //operadores globais.
numeroArmazenado = numeroCorrente = '';
PrimeiroNumero = true;
PontoDecimal = false;

function mostrar(x)  {
  if (document.formulario.calculo.value) { 
    if (PrimeiroNumero && (x !== "."))
      document.formulario.calculo.value = "";
    
    PrimeiroNumero = false;
    
    if ((x === "." && !PontoDecimal) || (x !== "."))
      document.formulario.calculo.value += x; //essa funçao vai mostrando os 
    //numeros na caixa de texto e o +- vai concatenando um numero apos o outro 
    if (x === ".")
      PontoDecimal = true;
  }
}                                         

function coletar(y)  {
  PrimeiroNumero = true;
  PontoDecimal = false;
  
  if (document.formulario.calculo.value)  {
    if(!op)  {                             //se o operador for vazio
      op = y;                                //atribui o valor a variavel op o caracter +ou- etc.. conforme o clicado no botao
      numeroArmazenado = eval(document.formulario.calculo.value);
    }   //atribui a num1 o valor da caixa de texto
    else  {                                                   //limpa a caixa de texto
      numeroCorrente = eval(document.formulario.calculo.value);
      document.formulario.calculo.value = eval(numeroArmazenado + op + numeroCorrente);
      numeroArmazenado = eval(numeroArmazenado + op + numeroCorrente);
      op = y;  
    }
  }
}

function calcular()  {
  PontoDecimal = false;  
  if (op !== '')  {
    numeroCorrente = document.formulario.calculo.value; //num2 recebe oque esta na caixa de texto.
    resp = eval(numeroArmazenado + op + document.formulario.calculo.value); //resp recebe o valor do num1+op+num2,exeplo 2+3
    document.formulario.calculo.value = eval(resp);//retorna o valor dos mesmos 2+3 como resposta na caixa de texto devido ao eval
    numeroArmazenado = eval(resp);                                //se o eval nao estivesse ai apareceria na caixa de texto 2+3.o eval retorna o valor do 2+3
    num2 = "0";
    op = ''; 
  }                                            
}      

function recalcular()  {//essa funçao permite fazer mais um calculo.
  numeroArmazenado = numeroCorrente = op = resp = "";
  document.formulario.calculo.value = "0";//limpa a caixa de texto
  PrimeiroNumero = true;
  PontoDecimal = false;
}

function calcular_raiz()  { //funçao que calcula a raiz quadrada
  if (document.formulario.calculo.value) {
    numeroArmazenado = document.formulario.calculo.value;
    document.formulario.calculo.value = '';
    resp = Math.sqrt(numeroArmazenado); //funçao em java script que calcula a raiz quadrada
    document.formulario.calculo.value = eval(resp);
  }
}

function limpar()  {
  document.formulario.calculo.value = "0"; 
  PrimeiroNumero = true;
  PontoDecimal = false;
}

function desligar()  {
  document.formulario.calculo.value = '';
}