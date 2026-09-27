function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let operation = document.getElementById("operation").value;

    let result;

    if (operation == "add") {
        result = num1 + num2;
    }

    else if (operation == "sub") {
        result = num1 - num2;
    }

    else if (operation == "mul") {
        result = num1 * num2;
    }

    else if (operation == "div") {

        if (num2 == 0) {
            result = "Cannot divide by zero";
        }
        else {
            result = num1 / num2;
        }

    }

    else {
        result = "Invalid operation";
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}