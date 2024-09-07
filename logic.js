

const display = document.getElementById("display");


function append_To_Display(input) {

    display.value += input;

}


function Calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = " Error";
    }


}

function ClearDisplay() {
    display.value = "";
}