/*jshint esversion: 6 */
(function() {
    "use strict";

    let isStarted = false;
    let speed = 250;
    let pos = 0;
    let animationArr = [];
    let animation = "Blank";

    window.onload = ()=>{
        isStarted = false;
        document.getElementById("fontsize").onchange = fontSizeChanged();
        document.getElementById("turbo").onchange = turboChanged();

    };

    function fontSizeChanged() {
        const textArea = document.getElementById("text-area");
        let fontSize = "12pt";
            switch (document.getElementById("fontsize")) {
                case "Tiny":
                   fontSize = "7px";
                   break;
                case "Small":
                    fontSize = "10pt";
                    break;
                case "Medium":
                    fontSize = "12pt";
                    break;
                case "Large":
                    fontSize = "16pt";
                    break;
                case "Extra Large":
                    fontSize = "24pt";
                    break;
                case "XXL":
                    fontSize = "32pt";
            }
            textArea.style.fontSize = fontSize;
    }

    function turboChanged() {
        if(document.getElementById("turbo").checked){
            speed = 50;
        }else{
            speed = 250;
        }
    }

    function animationChanged() {
        
    }

}());