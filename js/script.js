var output = document.querySelector("#output")
var items = document.querySelectorAll("button")
var clearBox = false
items.forEach((item) => {
    item.onclick = () => {
        if (clearBox) {
            output.value = ""
            clearBox = false
        }
        if (item.id == "equal") {
            try {
                output.value = eval(output.value)
                if (output.value == "Infinity") {
                    output.value = "Infinity♾️"
                    clearBox = true
                }

            } catch (e) {
                // output.value = e
                output.value = "Math Error🧐"
                clearBox = true
            }

        }
        if (item.id == "clear") output.value = ""
        if (item.id == "delete") output.value = output.value.split("").slice(0, -1).join("")
        if (item.id === "") output.value += item.innerText
    }
})
































// items.forEach(function(item) {
//     item.onclick = () => {
//         if (clearEqual) {
//             output.value = "";
//             clearEqual = false;
//         }
//         if (output.value.length > 20) {
//             output.value = output.value.substring(0, 20);
//         }
//         if (item.id == "equal") {
//             try {
//                 output.value = eval(output.value);
//                 // if(output.value="Infinity")output.value="لا يجوز"
//                 clearEqual = true;
//             } catch (e) {
//                 // output.value = e;
//                 output.value = "Math Error";
//                 clearEqual = true;
//             }
//         }
//         if (item.id == "clear") output.value = "";
//         if (item.id == "delete") output.value = output.value.split("").slice(0, -1).join("");
//         // if (item.id != "clear") console.log("test");
//         if (item.id === "") output.value += item.innerText;

//     };
// });