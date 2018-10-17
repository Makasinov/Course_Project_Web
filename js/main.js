//var sourcePage = "";

function setiframe(sourcePage) {
    var iframe = document.getElementsByTagName('iframe')[0];
    iframe.src = sourcePage;
}

function action_1() {
    close();
    setiframe("https://code-live.ru/post/cpp-hello-world");
}

function action_2() {
    close();
    setiframe("https://code-live.ru/post/cpp-variables-and-datatypes/");
}

function action_3() {
    close();
    setiframe("https://code-live.ru/post/cpp-if-else/");
}

function action_4() {
    close();
    setiframe("https://code-live.ru/post/cpp-loops/");
}

function action_5() {
    close();
    setiframe("https://code-live.ru/post/cpp-arrays/");
}

function action_6() {
    close();
    setiframe('https://code-live.ru/post/cpp-functions/');
}

function action_7() {
    close();
    setiframe('https://code-live.ru/post/cpp-pointers/');
}

function action_8() {
    close();
    setiframe('https://code-live.ru/post/cpp-dynamic-arrays/');
}

function action_9() {
    close();
    setiframe('https://code-live.ru/post/cpp-command-line-arguments/');
}

function action_10() {
    close();
    setiframe('https://code-live.ru/post/cpp-classes/');
}

function action_11() {
    close();
    setiframe('https://code-live.ru/post/cpp-continue-learning-classes/');
}

function action_12() {
    close();
    setiframe('https://code-live.ru/post/cpp-vector/');
}

function action_13() {
    close();
    setiframe('https://code-live.ru/post/cpp-class-inheritance/');
}

function action_14() {
    close();
    setiframe('https://code-live.ru/post/cpp-function-overload/');
}

function action_15() {
    close();
    setiframe('https://code-live.ru/post/cpp-overloading-class-methods/');
}

function action_16() {
    close();
    setiframe('https://code-live.ru/post/cpp-operators/');
}

function cutFrame() {
}

function login() {
	var login = document.getElementById('loginEdit').value;
	var password = document.getElementById('passwordEdit').value;
	alert('Login: ' + login + '\nPassword: ' + password);
}

function register() {
	//alert('open register');
    //var newWindow = window.open("","hello","width=200,height=200");
    //window.location.href = "hello.html";
}

function listOfLessons() {
	var list_of_lessons = document.getElementById('list_of_lessons');
    if(list_of_lessons.style.display == 'none')
        list_of_lessons.style.display = 'block';
    else list_of_lessons.style.display = 'none';
}

function loginButton() {
    document.getElementById('reg_form').style.display = "block";
}

function close() {
	
    document.getElementById('list_of_lessons').style.display = 'none';
    document.getElementById('choose_a').style.display = 'none';
}

function ready() {
    close();
    document.getElementById('choose_a').style.display = 'block';
    var test_a = document.getElementById('test_a');
    var iframe = document.getElementsByTagName('iframe')[0];
    var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
                
    //test_a.innerHTML = innerDoc;
        
    var doc_height = window.innerHeight - 70;
    document.getElementById("main_content").style.height = doc_height + 'px';
}

document.addEventListener("DOMContentLoaded", ready);
