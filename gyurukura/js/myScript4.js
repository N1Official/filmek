function ertekeles(){
    var pontszam = 0;
    var iro = document.getElementById('iro').value;
    if(iro == "Tolkien" || iro == "tolkien")
    {
        pontszam++;
    }
    var gyurubirtokosindex = document.getElementById("gyuru").selectedIndex;
    if(gyurubirtokosindex == 3)
    {
        pontszam++;
    }
    var szulinapindex = document.getElementById("szulinap").selectedIndex;
    if(szulinapindex == 3)
    {
        pontszam++;
    }
    if(document.getElementById("nazgul").checked)
    {
        pontszam++;
    }
    var saruman = document.getElementById("saruman").value;
    if(saruman == "Saruman" || saruman == "saruman" || saruman == "Szarumán" || saruman == "szarumán")
    {
        pontszam++;
    }
    var szilszakallindex = document.getElementById("szilszakall").selectedIndex;
    if (szilszakallindex == 1)
    {
        pontszam++;
    }
    if(document.getElementById("ketto").checked)
    {
        pontszam++;
    }
    document.getElementById("eredmeny").style.display = "block";
    switch(pontszam)
    {
        case 0:
            document.getElementById("eredmeny").innerHTML = "Az eredményed 0/7, vagy nem hallottál még középföldéről, vagy másik világban élsz."
            document.getElementById("eredmeny").style.color = "red";
            break;
        case 1:
            document.getElementById("eredmeny").innerHTML = "Az eredményed 1/7, ennyire nem érdekel? :("
            document.getElementById("eredmeny").style.color = "red";
            break;
        case 2:
            document.getElementById("eredmeny").innerHTML = "Az eredményed 2/7 több, mint a semmi..."
            document.getElementById("eredmeny").style.color = "red";
            break;
        case 3:
            document.getElementById("eredmeny").innerHTML = "Az eredményed 3/7, újra nézhetnéd a trilógiát"
            document.getElementById("eredmeny").style.color = "#bda800";
            break;
        case 4:
            document.getElementById("eredmeny").innerHTML = "Az eredményed 4/7, jobban figyelhetnél!"
            document.getElementById("eredmeny").style.color = "#bda800";
            break;
        case 5:
            document.getElementById("eredmeny").innerHTML = "Az eredményed 5/7, nem rossz!"
            document.getElementById("eredmeny").style.color = "#bda800";
            break;
        case 6: 
            document.getElementById("eredmeny").innerHTML = "Az eredményed 6/7, véletlenül rontottál, igaz?"
            document.getElementById("eredmeny").style.color = "green";
            break
        case 7:
            document.getElementById("eredmeny").innerHTML = "Az eredményed 7/7, szakértő vagy?"
            document.getElementById("eredmeny").style.color = "green";
            break;
    }
}