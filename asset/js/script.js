

function calculate(){
    var w = Number(document.getElementById('weight').value);

    var hcm = Number(document.getElementById('height').value);

    var h = hcm/100

    var r = eval(w /(h*h))

    document.getElementById('result').value = Math.round(r);
    

    if(r>=30){
        document.getElementById('meaning').value = "you're obese";
    }
    else if (r<18){
        document.getElementById('meaning').value = "you're under weight";
    }
    else if (r< 25 && r>18){
        document.getElementById('meaning').value = "you're normal";
    }

    else if (r > 25 && r<30){
        document.getElementById('meaning').value = "you're over weight";
    }
}