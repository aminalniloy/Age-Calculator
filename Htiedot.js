function Laskeikä() 
{   var enimi = document.getElementById("enimi").value;     
    var snimi = document.getElementById("snimi").value;

    var spvm = new Date(document.getElementById("spvm").value);
    var tämäpäivä = new Date();
    var ikä = tämäpäivä.getFullYear() - spvm.getFullYear();

    var result =  "Hei " + enimi + " " + snimi + ", olet " + ikä + " vuotias!"   
    document.getElementById("result").value = result; 
}
