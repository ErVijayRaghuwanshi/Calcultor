
function insert(num) {
    document.form.textview.value += num
}

function equal() {
    var exp = document.form.textview.value;
    console.log(typeof(exp),exp)
    if (exp) {
        document.form.textview.value = eval(exp)
    }
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function operation(ops){
    var exp = document.form.textview.value;
    if (exp.slice(-1) != ops){
        if (exp.length != 0){
            insert(ops)
        }
    } else{
        insert('')
    }
}
function addition() {
    var exp = document.form.textview.value;
    if (exp.slice(-1) != '+') {
        if (exp.length != 0) {
            if (exp.slice(-1) != '-') {
                insert('+')
            }
        }
    } else {
        insert('')
    }
}
// dark mode function
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

