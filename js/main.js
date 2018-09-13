var iframe = document.getElementById('_iframe');

function login() {
	var login = document.getElementById('loginEdit').value;
	var password = document.getElementById('passwordEdit').value;
	alert('Login: ' + login + '\nPassword: ' + password);
}

function register() {
	alert('open register');
}

function listOfLessons() {
	var list_of_lessons = document.getElementById('list_of_lessons');
    if(list_of_lessons.style.display == 'none')
        list_of_lessons.style.display = 'block';
    else list_of_lessons.style.display = 'none';
}

function loginButton() {
    document.getElementById('reg_form').style.display = "block";
    document.querySelector
}

function close() {
	document.getElementById('reg_form').style.display = 'none';
    document.getElementById('list_of_lessons').style.display = 'none';
    document.getElementById('choose_a').style.display = 'none';
}

function ready() {
    close();
    document.getElementById('choose_a').style.display = 'block';
    var test_a = document.getElementById('test_a');
        
    var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
                
    //test_a.innerHTML = innerDoc;
        
    var doc_height = window.innerHeight - 70;
    document.getElementById("main_content").style.height = doc_height + 'px';
}

document.addEventListener("DOMContentLoaded", ready);
