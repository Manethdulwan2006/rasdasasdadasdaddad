var q = 0;
var stno = new Array(50);
var rank = new Array(50);
var rel = new Array(50);
var stid = new Array(50);

function add() {
  var s1 = parseInt(document.getElementById("s1").value);
  var s2 = parseInt(document.getElementById("s2").value);
  var s3 = parseInt(document.getElementById("s3").value);
  var s4 = parseInt(document.getElementById("s4").value);
  var s5 = parseInt(document.getElementById("s5").value);
  var s6 = parseInt(document.getElementById("s6").value);
  var s7 = parseInt(document.getElementById("s7").value);
  var s8 = parseInt(document.getElementById("s8").value);
  var s9 = parseInt(document.getElementById("s9").value);
  var sname = document.getElementById("sn").value;
  var anser = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9;
  var asnwer = "Total=" + anser;
  document.getElementById("total").value = asnwer;
  var avear = anser / 9;
  var avg = "Avarage=" + avear;
  document.getElementById("avg").value = avg;
  document.getElementById("namee").value = sname;
  stno[q] = sname;
  rank[q] = anser;
  q = q + 1;
}

function cl() {
  document.getElementById("s1").value = null;
  document.getElementById("s2").value = null;
  document.getElementById("s3").value = null;
  document.getElementById("s4").value = null;
  document.getElementById("s5").value = null;
  document.getElementById("s6").value = null;
  document.getElementById("s7").value = null;
  document.getElementById("s8").value = null;
  document.getElementById("s9").value = null;
  document.getElementById("sn").value = null;
  document.getElementById("avg").value = null;
  document.getElementById("namee").value = null;
  document.getElementById("total").value = null;
}

function okok() {
  for (let j = 0; j < q; j++) {
    let max = 0;
    let pp = 0;
    let it = 0;

    for (let i = 0; i < 50; i++) {
      if (max < rank[i]) {
        max = rank[i];
        pp = max;
        it = i;
        stid[j] = i;
      }
    }

    rel[j] = pp;
    rank[it] = 0;
    max = 0;
  }

  document.getElementById("stno1").innerHTML=stno[stid[0]];
  document.getElementById("r1").value=rel[0];

  document.getElementById("stno2").innerHTML=stno[stid[1]];
  document.getElementById("r2").value=rel[1];

  document.getElementById("stno3").innerHTML=stno[stid[2]];
  document.getElementById("r3").value=rel[2];

  document.getElementById("stno4").innerHTML=stno[stid[3]];
  document.getElementById("r4").value=rel[3];

  document.getElementById("stno5").innerHTML=stno[stid[4]];
  document.getElementById("r5").value=rel[4];

  document.getElementById("stno6").innerHTML=stno[stid[5]];
  document.getElementById("r6").value=rel[5];

  document.getElementById("stno7").innerHTML=stno[stid[6]];
  document.getElementById("r7").value=rel[6];

  document.getElementById("stno8").innerHTML=stno[stid[7]];
  document.getElementById("r8").value=rel[7];

  document.getElementById("stno9").innerHTML=stno[stid[8]];
  document.getElementById("r9").value=rel[8];

  document.getElementById("stno10").innerHTML=stno[stid[9]];
  document.getElementById("r10").value=rel[9];

  document.getElementById("stno11").innerHTML=stno[stid[10]];
  document.getElementById("r11").value=rel[10];

  document.getElementById("stno12").innerHTML=stno[stid[11]];
  document.getElementById("r12").value=rel[11];

  document.getElementById("stno13").innerHTML=stno[stid[12]];
  document.getElementById("r13").value=rel[12];
  


  document.getElementById("stno14").innerHTML=stno[stid[13]];
  document.getElementById("r14").value=rel[13];
  
  document.getElementById("stno15").innerHTML=stno[stid[14]];
  document.getElementById("r15").value=rel[14];
  
  document.getElementById("stno16").innerHTML=stno[stid[15]];
  document.getElementById("r16").value=rel[15];
  
  document.getElementById("stno17").innerHTML=stno[stid[16]];
  document.getElementById("r17").value=rel[16];
  
  document.getElementById("stno18").innerHTML=stno[stid[17]];
  document.getElementById("r18").value=rel[17];
  
  document.getElementById("stno19").innerHTML=stno[stid[18]];
  document.getElementById("r19").value=rel[18];
  
  document.getElementById("stno20").innerHTML=stno[stid[19]];
  document.getElementById("r20").value=rel[19];
  


  document.getElementById("stno21").innerHTML=stno[stid[20]];
  document.getElementById("r21").value=rel[20];

  document.getElementById("stno22").innerHTML=stno[stid[21]];
  document.getElementById("r22").value=rel[21];

  document.getElementById("stno23").innerHTML=stno[stid[22]];
  document.getElementById("r23").value=rel[22];

  document.getElementById("stno24").innerHTML=stno[stid[33]];
  document.getElementById("r24").value=rel[23];

  document.getElementById("stno25").innerHTML=stno[stid[24]];
  document.getElementById("r25").value=rel[24];

  document.getElementById("stno26").innerHTML=stno[stid[25]];
  document.getElementById("r26").value=rel[25];

  document.getElementById("stno27").innerHTML=stno[stid[26]];
  document.getElementById("r27").value=rel[26];

  document.getElementById("stno28").innerHTML=stno[stid[27]];
  document.getElementById("r28").value=rel[27];

  document.getElementById("stno29").innerHTML=stno[stid[28]];
  document.getElementById("r29").value=rel[28];

  document.getElementById("stno30").innerHTML=stno[stid[29]];
  document.getElementById("r30").value=rel[29];


  document.getElementById("stno31").innerHTML=stno[stid[30]];
  document.getElementById("r31").value=rel[30];

  document.getElementById("stno32").innerHTML=stno[stid[31]];
  document.getElementById("r32").value=rel[31];
  
  document.getElementById("stno33").innerHTML=stno[stid[32]];
  document.getElementById("r33").value=rel[32];

  document.getElementById("stno34").innerHTML=stno[stid[33]];
  document.getElementById("r34").value=rel[33];

  document.getElementById("stno35").innerHTML=stno[stid[34]];
  document.getElementById("r35").value=rel[34];

  document.getElementById("stno36").innerHTML=stno[stid[35]];
  document.getElementById("r36").value=rel[35];

  document.getElementById("stno37").innerHTML=stno[stid[36]];
  document.getElementById("r37").value=rel[36];

  document.getElementById("stno38").innerHTML=stno[stid[37]];
  document.getElementById("r38").value=rel[37];

  document.getElementById("stno39").innerHTML=stno[stid[38]];
  document.getElementById("r39").value=rel[38];

  document.getElementById("stno40").innerHTML=stno[stid[39]];
  document.getElementById("r40").value=rel[39];

  

  document.getElementById("stno41").innerHTML=stno[stid[40]];
  document.getElementById("r41").value=rel[40];

  document.getElementById("stno42").innerHTML=stno[stid[41]];
  document.getElementById("r42").value=rel[41];

  document.getElementById("stno43").innerHTML=stno[stid[42]];
  document.getElementById("r43").value=rel[42];

  document.getElementById("stno44").innerHTML=stno[stid[43]];
  document.getElementById("r44").value=rel[43];

  document.getElementById("stno45").innerHTML=stno[stid[44]];
  document.getElementById("r45").value=rel[44];

  document.getElementById("stno46").innerHTML=stno[stid[45]];
  document.getElementById("r46").value=rel[45];

  document.getElementById("stno47").innerHTML=stno[stid[46]];
  document.getElementById("r47").value=rel[46];

  document.getElementById("stno48").innerHTML=stno[stid[47]];
  document.getElementById("r48").value=rel[47];

  document.getElementById("stno49").innerHTML=stno[stid[48]];
  document.getElementById("r49").value=rel[48];
  
  document.getElementById("stno50").innerHTML=stno[stid[49]];
  document.getElementById("r50").value=rel[49];


}
