function parseCompound(){
    let element = document.getElementById("element").value;
    let compound = document.getElementById("compound").value;

    let suckmydick = ((element/compound)*100)
    let out = Math.round(suckmydick*100)/100
    document.getElementById("output").innerHTML = out + " percent compostition";
}