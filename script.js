/*global console ,alert*/


var input = document.getElementById("in"),
    label = document.getElementById("la");






function move() {
    "use strict";
    
    label.setAttribute("class", "second_la");
    input.setAttribute("class", "second_in");
}


function reset() {
    "use strict";
    
    label.setAttribute("class", "thir_la");
    input.setAttribute("class", "first_in");
}






