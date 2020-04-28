window.onload = function () {
    var bigDecButton = document.getElementById("bigDecId");
    bigDecButton.onclick = helloClick;
    document.getElementById("bling").onchange = onchange;
    document.getElementById('bigDecId').onclick = timer;
};

function helloClick() {
   //document.getElementById("sampleId").style.fontSize = '24px';
    let fontSize = parseInt(window.getComputedStyle(document.getElementById("sampleId")).fontSize);
    fontSize += 5;

    document.getElementById("sampleId").style.fontSize = fontSize + 'pt';
}

function onchange(id) {
    if(this.checked) {
        alert("Do you want to change some style?");
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        document.getElementById("sampleId").style.fontWeight = 'bold';
        document.getElementById("sampleId").style.color = 'green';
        document.getElementById("sampleId").style.textDecoration= 'underline overline';
    }else{
        document.getElementById("sampleId").style.fontWeight = 'normal';
        document.getElementById("sampleId").style.color = 'black';
        document.body.style.backgroundImage = "url('none')";
    }
}

function timer() {
    setInterval(helloClick, 5000);
}