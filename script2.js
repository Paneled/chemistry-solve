function parsePercents(){
    var exp = document.getElementById("exp").value;
    var actual = document.getElementById("final").value;
    var doSub = exp-actual;
    var doFrac = (Math.abs(doSub/actual));
    var out = (Math.round((doFrac*100)*100)/100) + " % error";

    document.getElementById("output").innerHTML = out;
}
