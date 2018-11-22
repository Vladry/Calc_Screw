calculate.onclick = function() {
  var res_1 = Number(bulk_density.value) * 47.1 *  ( Math.pow((Number(Diam.value)/1000), 2) - Math.pow((Number(d.value)/1000), 2) ) * Number(Load_factor.value) * Number(Pitch.value)/1000 * Number(n.value);
res_1 = Math.round(res_1);
  document.getElementById("res_1").textContent = res_1;
  }
Diam.onchange = function(){
    Pitch.value = Diam.value;}
