function mailme() {
 	if (document.userdata.firstname.value == "") {
	alert("Todos os campos devem ser preenchidos. ") ;
	document.userdata.firstname.focus() ;
	return false; }
  if (document.userdata.lastname.value == "") {
	alert("Todos os campos devem ser preenchidos. ") ;
	document.userdata.lastname.focus() ;
	return false;}
  if (document.userdata.mail.value == "") {
	alert("Todos os campos devem ser preenchidos.") ;
	document.userdata.mail.focus() ;
	return false;}
  if (document.userdata.estado.value == "") {
	alert("Todos os campos devem ser preenchidos.") ;
	document.userdata.estado.focus() ;
	return false;}
  if (document.userdata.subject.value == "") {
	alert("Todos os campos devem ser preenchidos.") ;
	document.userdata.subject.focus() ;
	return false;}
  if (document.userdata.messagetext.value == "") {
	alert("Todos os campos devem ser preenchidos.") ;
	document.userdata.messagetext.focus() ;
	return false;}
  var checagem1 = document.userdata.firstname.value != ""? 1 : 0
  var checagem2 = document.userdata.lastname.value != ""? 1 : 0
  var checagem3 = document.userdata.mail.value != ""? 1 : 0
  var checagem4 = document.userdata.estado.value != ""? 1 : 0
  var checagem5 = document.userdata.subject.value != ""? 1 : 0
  var checagem6 = document.userdata.messagetext.value != ""? 1 : 0
  var reuniao = Number.parseInt(checagem1 + checagem2 + checagem3 +checagem4 +checagem5 +checagem6)
  var pacote = document.userdata.firstname.value + document.userdata.lastname.value + document.userdata.mail.value + document.userdata.estado.value + document.userdata.subject.value + document.userdata.messagetext.value
  
 if (reuniao == 6) {return window.alert('Sua mensagem foi enviada. Favor aguardar feedback.');}; 
  
}




  //else if window.alert('Sua mensagem foi enviada. Favor aguardar feedback.');




//Email.send(
//"from@you.com",
//"to@them.com",
//"This is a subject",
//"this is the body",
//"smtp.yourisp.com",
//"username",
//"password"
//);
