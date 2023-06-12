function add(){
    var s1= parseInt(document.getElementById("s1").value);
    var s2= parseInt(document.getElementById("s2").value);
    var s3= parseInt(document.getElementById("s3").value);
    var s4= parseInt(document.getElementById("s4").value);
    var s5= parseInt(document.getElementById("s5").value);
    var s6= parseInt(document.getElementById("s6").value);
    var s7= parseInt(document.getElementById("s7").value);
    var s8= parseInt(document.getElementById("s8").value);
    var s9= parseInt(document.getElementById("s9").value);
    var sname= document.getElementById("sn").value;
    var anser=+s1+s2+s3+s4+s5+s6+s7+s8+s9;
    var asnwer="Total="+anser;
    document.getElementById("total").value=asnwer;
    var avear=anser/9
    var avg="Avarage="+avear;
    document.getElementById("avg").value=avg;
    document.getElementById("namee").value=sname;
}