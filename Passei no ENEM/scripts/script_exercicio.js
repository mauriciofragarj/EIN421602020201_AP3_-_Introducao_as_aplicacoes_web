function script_exercicio()
{
	if (document.formquizz.q1.value == "") {return window.alert("Nenhuma pergunta poderá ficar em branco."); };
	if (document.formquizz.q2.value == "") {return window.alert("Nenhuma pergunta poderá ficar em branco."); };
	if (document.formquizz.q3.value == "") {return window.alert("Nenhuma pergunta poderá ficar em branco."); };
	if (document.formquizz.q4.value == "") {return window.alert("Nenhuma pergunta poderá ficar em branco."); };
	if (document.formquizz.q5.value == "") {return window.alert("Nenhuma pergunta poderá ficar em branco."); };
	if (document.formquizz.q6.value == "") {return window.alert("Nenhuma pergunta poderá ficar em branco."); };
	if (document.formquizz.q7.value == "") {return window.alert("Nenhuma pergunta poderá ficar em branco."); };
	if (document.formquizz.q8.value == "") {return window.alert("Nenhuma pergunta poderá ficar em branco."); };
	if (document.formquizz.q9.value == "") {return window.alert("Nenhuma pergunta poderá ficar em branco."); };
	if (document.formquizz.q10.value == "") {return window.alert("Nenhuma pergunta poderá ficar em branco."); };
 
	var resp1 = document.formquizz.q1.value == "D"? 1 : 0
	var resp2 = document.formquizz.q2.value == "B"? 1 : 0
	var resp3 = document.formquizz.q3.value == "C"? 1 : 0
	var resp4 = document.formquizz.q4.value == "A"? 1 : 0
	var resp5 = document.formquizz.q5.value == "C"? 1 : 0
	var resp6 = document.formquizz.q6.value == "A"? 1 : 0
	var resp7 = document.formquizz.q7.value == "A"? 1 : 0
	var resp8 = document.formquizz.q8.value == "C"? 1 : 0
	var resp9 = document.formquizz.q9.value == "B"? 1 : 0
	var resp10 = document.formquizz.q10.value == "D"? 1 : 0
	var somadetodos = Number.parseFloat(resp1 + resp2 +resp3 + resp4 + resp5 + resp6 + resp7 + resp8 + resp9 + resp10)
	var resultado = somadetodos

	if (resultado == 0) {return window.alert("Você acertou 0 de 10 perguntas. Mais sorte no ano que vem, e não esqueça de estudar.");};
	if (resultado == 1) {return window.alert("Você acertou somente " + resultado + " de 10 questões. Você levou este teste a sério?");};
	if (resultado == 2) {return window.alert("Você acertou somente " + resultado + " de 10 questões. Estude! Seu resultado está bem fraco.");};
	if (resultado == 3) {return window.alert("Você acertou somente " + resultado + " de 10 questões. Ainda tem um longo caminho pela frente. ");};
	if (resultado == 4) {return window.alert("Você acertou somente " + resultado + " de 10 questões. Ainda está abaixo da medía.");};
	if (resultado == 5) {return window.alert("Você acertou  " + resultado + " de 10 questões. Nada mal para iniciantes.");};
	if (resultado == 6) {return window.alert("Você acertou  " + resultado + " de 10 questões. Você é estudante de humanas?");};
	if (resultado == 7) {return window.alert("Você acertou  " + resultado + " de 10 questões. Estude mais um pouco e poderá entrar na universidade que quiser.");};
	if (resultado == 8) {return window.alert("Você acertou  " + resultado + " de 10 questões. Você tem futuro em Ciências Humanas.");};
	if (resultado == 9) {return window.alert("Você acertou  " + resultado + " de 10 questões. Faltou pouco para gabaritar. Parabéns");};
	if (resultado == 10) {return window.alert("Parabéns! Você acertou 10 de 10 questões! Passou no ENEM!");};
}




















/*SPARE PARTS


//if (document.formquizz.q1.value == "D") {return window.alert("Acertou a Questão 1"); }
//if (document.formquizz.q2.value == "B") {return window.alert("Acertou a Questão 2"); }
//if (document.formquizz.q3.value == "C") {return window.alert("Acertou a Questão 3"); }

/*if (document.formquizz.quest1.value == "D") {window.alert("Parabéns!")};*/

/*if (document.formquizz.q1.value == "") {
	alert("Os campos não podem estar vazios. ") ;
	document.formquizz.q1.focus() ;
	return false; };*/

//window.alert("Teste");

/*if (document.formquizz.q1.value == "D") if (document.formquizz.q2.value =="B") if (document.formquizz.q3.value == "C") 
	if (document.formquizz.q4.value != "A") if (document.formquizz.q5.value != "C") if (document.formquizz.q6.value != "A") 
	if (document.formquizz.q7.value != "A") if (document.formquizz.q8.value != "C") if (document.formquizz.q9.value != "B") 
	if (document.formquizz.q10.value != "D") {return window.alert("Você acertou somente 3 de 10 perguntas, e precisa estudar mais História da Arte!"); };*/


/*if (document.formquizz.q1.value != "D") if (document.formquizz.q2.value !="B") if (document.formquizz.q3.value != "C") 
	if (document.formquizz.q4.value != "A") if (document.formquizz.q5.value != "C") if (document.formquizz.q6.value != "A") 
	if (document.formquizz.q7.value != "A") if (document.formquizz.q8.value != "C") if (document.formquizz.q9.value != "B") 
	if (document.formquizz.q10.value != "D") {return window.alert("Lamento, mas você errou todas as perguntas e parece não saber nada sobre História da Arte!"); };*/


/*if (document.formquizz.q1.value == "D") if (document.formquizz.q2.value =="B") if (document.formquizz.q3.value == "C") 
	if (document.formquizz.q4.value == "A") if (document.formquizz.q5.value == "C") if (document.formquizz.q6.value == "A") 
	if (document.formquizz.q7.value == "A") if (document.formquizz.q8.value == "C") if (document.formquizz.q9.value == "B") 
	if (document.formquizz.q10.value == "D") {return window.alert("Parabéns por acertar todas as perguntas! Você parece ser especialista em História da Arte!"); };*/

