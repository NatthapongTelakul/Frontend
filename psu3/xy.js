function calculate(){
    const vx = document.getElementById("x").value;
    const vy = document.getElementById("y").value;
    const vresult = document.getElementById("result");
    vresult.value = parseFloat(vx) + parseFloat(vy);
}