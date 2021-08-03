var sname = []; 
var darray = [];
function sub() { 
    for (var i=1; i<=4; i++)
    {
        var n = document.getElementById("s"+i).value;
        sname.push(n);
        console.log(sname);
    }
     
  console.log(sname); 
 
  var len = sname.length;
  console.log(len);

  for (var t=0; t<len; t++) 
  {
darray.push("<h4>NAME- "+sname[t]+"</h4>");
console.log(darray);
  }
  console.log(darray);
  document.getElementById("display1").innerHTML = darray;
  var rc = darray.join(" ");
  console.log(rc);
  document.getElementById("display2").innerHTML = rc;
  document.getElementById("SUB").style.display ="none"; 
   
  document.getElementById("SOR").style.display ="inline"; 
} 
function sor() 
{ 
    darray.sort(); 
    console.log(darray); 
     var rc = darray.join(" ");
  console.log(rc);
  document.getElementById("display2").innerHTML = rc;
    }
