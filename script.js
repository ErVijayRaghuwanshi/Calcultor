<<<<<<< HEAD
=======
//document.addEventListener('contextmenu', event => event.preventDefault());
>>>>>>> d100ca2de919e7f83481b2fba5959129490d3b61

function insert(num) {
    document.form.textview.value = document.form.textview.value + num
}
function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp)
        document.form.textview.value = ""
    }
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    let exp = document.form.textview.value;
<<<<<<< HEAD
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
// function addition() {
//     // console.log(document.form.textview.value.slice(-1))
//     if (document.form.textview.value.slice(-1) === '+'{
//         insert('')
//     }
//     else { insert('+') }

// }


// dark mode function
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

=======
    document.form.textview.value = exp.substring(0,exp.length-1);
}
>>>>>>> d100ca2de919e7f83481b2fba5959129490d3b61
