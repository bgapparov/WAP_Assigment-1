$(function () {
    let cleanScreenData = {
        timer: null
    };

    //get value from element by Id
    function getValue(id) {
        return $("#"+id).val();
    }

    //Random integer, I used this function for get random number for located circle in the page.
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    //this functions return random color
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[getRandomInt(16)];
        }
        return color;
    }

    // this function if mouse is move in circle this circle will get low opacity
    function mousemove(event) {
        $(this).css(
            "opacity", function (indx, oldVal) {
                let newVal = oldVal - 0.04;
                if(newVal<=0){
                    this.remove();
                }
                return newVal;
            }
        );
    }

    //grow the circle
    function growCircle() {
        let growthAmount = getValue("growthAmount");

        function grow(idx, oldValue){
            let newVal = (parseInt(oldValue)+parseInt(growthAmount));
            return newVal+"px";
        }


         // mover to top left side for half growthAmount.
        function move(idx, oldValue) {
            return parseInt(oldValue)-growthAmount/2+"px";
        }
        $(".circle").css("width", grow);
        $(".circle").css("height", grow);
        $(".circle").css("top", move);
        $(".circle").css("left", move);

        $(".circle").css("border-radius", function(idx, oldValue) {
            return parseInt(oldValue)+growthAmount/2+"px";
        });

    }

   //this function returns new circles
    function getNewCircle() {
        return $("<div>",{
            "class": "circle",
            "css":{
                "background-color": getRandomColor(),
                "top": getRandomInt(500)+"px",
                "left": getRandomInt(1600)+"px"
            }
        });
    }


     //this function for create circles and start growing this circles. When  create new circles pushed it to array and all circles append to main div
    function start(){
        if(cleanScreenData.timer!=null){
            clearInterval(cleanScreenData.timer);
        }
        let count = getValue("amountCount");
        let $circles = [];
        for(let i = 0; i < count; i++){
            $circles.push( getNewCircle());
        }
        $(".container").append($circles);
        cleanScreenData.timer = setInterval(growCircle, getValue("growRate"));
    }


     // binding start function to button start.
    $("#startButton").on("click", start);

    //event handler
    $(".container")
        .on("click", "div.circle", function () {this.remove();})
        .on("mousemove", "div.circle", mousemove);

});