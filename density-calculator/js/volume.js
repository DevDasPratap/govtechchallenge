function home2(){
    var elem1 = document.getElementById('dencityCal');
    elem1.style.display = 'block';
    var elem = document.getElementById('result1');
    elem.style.display = 'none';
 }

function calVol() {

    var elem1 = document.getElementById('errorMsg');
    elem1.style.display = 'none';

    var den = document.getElementById("denVal1").value;
    var vol = 0;
    var mass = document.getElementById("massVal1").value;


    var denUnit = document.getElementById("denUnit1").value;
    var massUnit = document.getElementById("massUnit1").value;
    var volUnit = document.getElementById("volUnit1").value;

    if (Number.isNaN(den) || Number.isNaN(mass) || den=="" || mass=="") {
        
        elem1.style.display = 'block';
        return;
    }

    var elem1 = document.getElementById('dencityCal');
    elem1.style.display = 'none';


    if(denUnit =="kilogram/cubic centimeter [kg/cm³]"){
        den = den * 1000000;
    }
    if(denUnit == "gram/cubic meter [g/m³]"){
        den = den * 0.001;
    }
    if(denUnit == "gram/cubic centimeter [g/cm³]" ){
        den = den * 1000;
    }
    if(denUnit == "kilogram/liter [kg/L]" ){
        den = den * 1000;
    }
    if(denUnit == "pound/cubic inch [lb/in³]"){
        den = den * 27679.9;
    }
    if(denUnit == "pound/cubic foot [lb/ft³]" ){
        den = den * 16.01846337;
    }
    if(denUnit == "pound/cubic yard [lb/yd³]" ){
        den = den * 0.59327642;
    }
   if(denUnit == "pound/gallon [US] [lb/gal]" ){
        den = den / 0.0083454044520193; 
    }
    if(denUnit == "pound/gallon [UK] [lb/gal]" ){
        den = den / 0.010022412854961;
    }

    if(massUnit == "gram [g]" ){
        mass = mass / 1000;
    }
    if(massUnit == "milligram [mg]" ){
        mass = mass / 1000000;
    }
    if(massUnit == "metric ton [t]" ){
        mass = mass / 0.001;
    }
    if(massUnit == "pound [lb]"){
        mass = mass / 2.20462262185;
    }
    if(massUnit == "ounce [oz]" ){
        mass = mass / 35.27396194958;
    }
    if(massUnit == "carat [ct]"){
        mass = mass / 5000;
    }

    vol = mass / den;

    if(volUnit == "liter [L]" ){
        vol = vol / 0.001;
    }
    
    if(volUnit == "milliliter [mL]"){
        vol = vol / 0.000001;
    }
    
    if(volUnit == "gallon[US] [gal]" ){
        vol = vol * 264.17205235815;
    }
    if(volUnit == "gallon[UK] [gal]" ){
        vol = vol * 219.96924829909;
    }
    if(volUnit == "cubic foot [ft³]" ){
        vol = vol / 0.0283168466;
    }
    if(volUnit == "cubic yard [yd³]" ){
        vol = vol / 0.764554858;
    }
    if(volUnit == "cubic inch [in³]" ){
        vol = vol / 0.000016387064;
    }
    if(volUnit == "cubic centimeter [cm³]" ){
        vol = vol / 0.000001;
    }

   // mass = vol * den; // all kg

    
    /*

    // kilogram/cubic meter [kg/m³] ---  cubic meter [m³] --  All
    if (denUnit == "kilogram/cubic meter [kg/m³]" && volUnit == "cubic meter [m³]" && massUnit == "kilogram [kg]") {
        vol = mass / den;
    }
    if (denUnit == "kilogram/cubic meter [kg/m³]" && volUnit == "cubic meter [m³]" && massUnit == "gram [g]") {
        vol = mass / den / 1000;
    }
    if (denUnit == "kilogram/cubic meter [kg/m³]" && volUnit == "cubic meter [m³]" && massUnit == "milligram [mg]") {
        vol = (mass / den) / 1000000;
        vol = vol.toExponential();
    }
    if (denUnit == "kilogram/cubic meter [kg/m³]" && volUnit == "cubic meter [m³]" && massUnit == "metric ton [t]") {
        vol = (mass / den) * 1000;
    }
    if (denUnit == "kilogram/cubic meter [kg/m³]" && volUnit == "cubic meter [m³]" && massUnit == "pound [lb]") {
        vol = (mass / den) * 0.453592;
    }
    if (denUnit == "kilogram/cubic meter [kg/m³]" && volUnit == "cubic meter [m³]" && massUnit == "ounce [oz]") {
        vol = (mass / den) * 0.0283495;
    }
    if (denUnit == "kilogram/cubic meter [kg/m³]" && volUnit == "cubic meter [m³]" && massUnit == "carat [ct]") {
        vol = (mass / den) * 0.0002;
    }  
    */    
   


    // dont tuouch here
    var elem = document.getElementById('result1');
    elem.style.display = 'block';
    document.getElementById('volResult').innerHTML = vol + " " + volUnit;;
    document.getElementById('mValue1').innerHTML = mass + " " + massUnit;
    document.getElementById('pValue1').innerHTML = den + " " + denUnit;
    document.getElementById('lastAns1').innerHTML = vol + " " + volUnit;
}