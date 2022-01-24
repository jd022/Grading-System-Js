function Total(){
    var hci = parseInt(document.getElementById("hci").value);
    var nc = parseInt(document.getElementById("nc").value);
    var pl = parseInt(document.getElementById("pl").value);
    var pd = parseInt(document.getElementById("pd").value);

    if (hci > 100 || nc > 100 || pl > 100 || pd > 100){
        alert("Please enter mark in range of 100");
    }
    else{
        var total = hci + nc + pl + pd;
        document.getElementById("total").innerHTML = "HCI 102: " + hci + "<br> NC 102: " + nc + "<br> PL 101: " + pl + "<br> PD 101: " + pd + "<br><br> Total: " + total;
    }
}

function Average(){
    var hci = parseInt(document.getElementById("hci").value);
    var nc = parseInt(document.getElementById("nc").value);
    var pl = parseInt(document.getElementById("pl").value);
    var pd = parseInt(document.getElementById("pd").value);

    if (hci > 100 || nc > 100 || pl > 100 || pd > 100){
        alert("Please enter mark in range of 100");
    }
    else{
        var total = hci + nc + pl + pd;
        var ave = total/400*100;
        document.getElementById("ave").innerHTML = "Average Grade: " + ave; 
    }   
}

function Grade(){
    var hci = parseInt(document.getElementById("hci").value);
    var nc = parseInt(document.getElementById("nc").value);
    var pl = parseInt(document.getElementById("pl").value);
    var pd = parseInt(document.getElementById("pd").value);

    if (hci > 100 || nc > 100 || pl > 100 || pd > 100){
        alert("Please enter mark in range of 100");
    }
    else{
        var total = hci + nc + pl + pd;
        var ave = total / 4;
        
        if (ave >= 100){
            document.getElementById("grade").innerHTML = "Mark: A+";
        }
        else if (ave >= 95){
            document.getElementById("grade").innerHTML = "Mark: A";
        }
        else if (ave >= 90){
            document.getElementById("grade").innerHTML = "Mark: B+";
        }
        else if (ave >= 85){
            document.getElementById("grade").innerHTML = "Mark: B";
        }
        else if (ave >= 80){
            document.getElementById("grade").innerHTML = "Mark: C+";
        }
        else if (ave >= 75){
            document.getElementById("grade").innerHTML = "Mark: C";
        }
        else if (ave >= 70){
            document.getElementById("grade").innerHTML = "Mark: D+";
        }
        else if (ave >= 65){
            document.getElementById("grade").innerHTML = "Mark: D";
        }
        else{
            document.getElementById("grade").innerHTML = "Fail Grade";
        }
    }   
}