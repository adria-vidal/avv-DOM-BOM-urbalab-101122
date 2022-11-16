let suma = '';
function selector(id) {
    console.log(document.getElementById(id).innerHTML);
    let element = document.getElementById(id);
   ;




    document.getElementById('selector').innerHTML = element;
    document.getElementById('valor').innerHTML = element;
    document.getElementById('tag').innerHTML = element;
    document.getElementById('name').innerHTML = element;


    // suma += document.getElementById(id).innerHTML;


}

// function sumar() {
//     console.log(eval(suma));
// }