function home1() {
   var elem1 = document.getElementById('dencityCal');
   elem1.style.display = 'block';
   var elem = document.getElementById('result');
   elem.style.display = 'none';
}

function clear1() {
   //alert("srd");
   document.getElementById("volume").value = "";
   document.getElementById("mass").value = "";

   document.getElementById("denVal2").value = "";
   document.getElementById("volVal2").value = "";

   document.getElementById("denVal1").value = "";
   document.getElementById("massVal1").value = "";


}

function calDen() {
   var elem1 = document.getElementById('errorMsg');
   elem1.style.display = 'none';

   // get the value 
   var den = 0;
   var vol = document.getElementById("volume").value;
   var mass = document.getElementById("mass").value;

   //get the unit
   var denUnit = document.getElementById("densityUnit").value;
   var massUnit = document.getElementById("massUnit").value;
   var volUnit = document.getElementById("volumeUnit").value;
  // alert(vol+"  "+mass)
   if (Number.isNaN(vol) || Number.isNaN(mass) || vol=="" || mass=="") {
     
      elem1.style.display = 'block';
      return;
   }

 

   //hide the calculation box
   var elem1 = document.getElementById('dencityCal');
   elem1.style.display = 'none';



   if (volUnit == "liter [L]") {
      vol = vol * 0.001;
   }

   if (volUnit == "milliliter [mL]") {
      vol = vol * 0.000001;
   }

   if (volUnit == "gallon[US] [gal]") {
      vol = vol / 264.17205235815;
   }
   if (volUnit == "gallon[UK] [gal]") {
      vol = vol / 219.96924829909;
   }
   if (volUnit == "cubic foot [ft³]") {
      vol = vol * 0.0283168466;
   }
   if (volUnit == "cubic yard [yd³]") {
      vol = vol * 0.764554858;
   }
   if (volUnit == "cubic inch [in³]") {
      vol = vol * 0.000016387064;
   }
   if (volUnit == "cubic centimeter [cm³]") {
      vol = vol * 0.000001;
   }

   if (massUnit == "gram [g]") {
      mass = mass / 1000;
   }
   if (massUnit == "milligram [mg]") {
      mass = mass / 1000000;
   }
   if (massUnit == "metric ton [t]") {
      mass = mass / 0.001;
   }
   if (massUnit == "pound [lb]") {
      mass = mass / 2.20462262185;
   }
   if (massUnit == "ounce [oz]") {
      mass = mass / 35.27396194958;
   }
   if (massUnit == "carat [ct]") {
      mass = mass / 5000;
   }

   den = mass / vol; // all kg

   if (denUnit == "kilogram/cubic centimeter [kg/cm³]") {
      den = den / 1000000;
   }
   if (denUnit == "gram/cubic meter [g/m³]") {
      den = den / 0.001;
   }
   if (denUnit == "gram/cubic centimeter [g/cm³]") {
      den = den / 1000;
   }
   if (denUnit == "kilogram/liter [kg/L]") {
      den = den / 1000;
   }
   if (denUnit == "pound/cubic inch [lb/in³]") {
      den = den / 27679.9;
   }
   if (denUnit == "pound/cubic foot [lb/ft³]") {
      den = den / 16.01846337;
   }
   if (denUnit == "pound/cubic yard [lb/yd³]") {
      den = den / 0.59327642;
   }
   if (denUnit == "pound/gallon [US] [lb/gal]") {
      den = den * 0.0083454044520193;
   }
   if (denUnit == "pound/gallon [UK] [lb/gal]") {
      den = den * 0.010022412854961;
   }



   ///kg/m3 for all---------------------------------------------------

   ///kilogram/cubic meter [kg/m³] -- cubic meter [m³] -- All
   /*
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="cubic meter [m³]"  && massUnit == "kilogram [kg]" ){
      den = mass/vol;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="cubic meter [m³]"  && massUnit == "gram [g]" ){
      den = (mass/vol) / 1000;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="cubic meter [m³]"  && massUnit == "milligram [mg]" ){
      den = (mass/vol) / 1000000;
      den =  den.toExponential();
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="cubic meter [m³]"  && massUnit == "metric ton [t]" ){
      den = (mass/vol) * 1000;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="cubic meter [m³]"  && massUnit == "pound [lb]" ){
      den = (mass/vol) * 0.453592;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="cubic meter [m³]"  && massUnit == "ounce [oz]" ){
      den = (mass/vol) * 0.0283495;   
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="cubic meter [m³]"  && massUnit == "carat [ct]" ){
      den = (mass/vol) * 0.0002;   
   }

    ///kilogram/cubic meter [kg/m³] -- liter [L] -- All
    if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="liter [L]"  && massUnit == "kilogram [kg]" ){
      den = mass/(vol*0.001);
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="liter [L]"  && massUnit == "gram [g]" ){
      den = (mass/(vol*0.001)) / 1000;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="liter [L]"  && massUnit == "milligram [mg]" ){
      den = (mass/(vol*0.001)) / 1000000;
      den =  den.toExponential();
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="liter [L]"  && massUnit == "metric ton [t]" ){
      den = (mass/(vol*0.001)) * 1000;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="liter [L]"  && massUnit == "pound [lb]" ){
      den = (mass/(vol*0.001)) * 0.453592;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="liter [L]"  && massUnit == "ounce [oz]" ){
      den = (mass/(vol*0.001)) * 0.0283495;   
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="liter [L]"  && massUnit == "carat [ct]" ){
      den = (mass/(vol*0.001)) * 0.0002;   
   }

   ///kilogram/cubic meter [kg/m³] -- milliliter [mL] -- All
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="milliliter [mL]"  && massUnit == "kilogram [kg]" ){
      den = mass/(vol*0.000001);
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="milliliter [mL]"  && massUnit == "gram [g]" ){
      den = (mass/(vol*0.000001)) / 1000;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="milliliter [mL]"  && massUnit == "milligram [mg]" ){
      den = (mass/(vol*0.000001)) / 1000000;
      den =  den.toExponential();
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="milliliter [mL]"  && massUnit == "metric ton [t]" ){
      den = (mass/(vol*0.000001)) * 1000;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="milliliter [mL]"  && massUnit == "pound [lb]" ){
      den = (mass/(vol*0.000001)) * 0.453592;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="milliliter [mL]"  && massUnit == "ounce [oz]" ){
      den = (mass/(vol*0.000001)) * 0.0283495;   
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="milliliter [mL]"  && massUnit == "carat [ct]" ){
      den = (mass/(vol*0.000001)) * 0.0002;   
   }


   ///kilogram/cubic meter [kg/m³] -- gallon[US] [gal] -- All
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[US] [gal]"  && massUnit == "kilogram [kg]" ){
      den = mass/(vol*0.00378541);
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[US] [gal]"  && massUnit == "gram [g]" ){
      den = (mass/(vol*0.00378541)) / 1000;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[US] [gal]"  && massUnit == "milligram [mg]" ){
      den = (mass/(vol*0.00378541)) / 1000000;
      den =  den.toExponential();
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[US] [gal]"  && massUnit == "metric ton [t]" ){
      den = (mass/(vol*0.00378541)) * 1000;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[US] [gal]"  && massUnit == "pound [lb]" ){
      den = (mass/(vol*0.00378541)) * 0.453592;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[US] [gal]"  && massUnit == "ounce [oz]" ){
      den = (mass/(vol*0.00378541)) * 0.0283495;   
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[US] [gal]"  && massUnit == "carat [ct]" ){
      den = (mass/(vol*0.00378541)) * 0.0002;   
   }


   ///kilogram/cubic meter [kg/m³] -- gallon[UK] [gal] -- All
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[UK] [gal]"  && massUnit == "kilogram [kg]" ){
      den = mass/(vol*0.00454609);
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[UK] [gal]"  && massUnit == "gram [g]" ){
      den = (mass/(vol*0.00454609)) / 1000;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[UK] [gal]"  && massUnit == "milligram [mg]" ){
      den = (mass/(vol*0.00454609)) / 1000000;
      den =  den.toExponential();
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[UK] [gal]"  && massUnit == "metric ton [t]" ){
      den = (mass/(vol*0.00454609)) * 1000;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[UK] [gal]"  && massUnit == "pound [lb]" ){
      den = (mass/(vol*0.00454609)) * 0.453592;
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[UK] [gal]"  && massUnit == "ounce [oz]" ){
      den = (mass/(vol*0.00454609)) * 0.0283495;   
   }
   if(denUnit=="kilogram/cubic meter [kg/m³]" && volUnit  =="gallon[UK] [gal]"  && massUnit == "carat [ct]" ){
      den = (mass/(vol*0.00454609)) * 0.0002;   
   }
  */

   ///kilogram/cubic meter [kg/m³] -- cubic foot [ft³] -- All



   ///End g/l for all---------------------------------------------------

   // dont tuouch here
   var elem = document.getElementById('result');
   elem.style.display = 'block';
   document.getElementById('denResult').innerHTML = den + " " + denUnit;
   document.getElementById('mValue').innerHTML = mass + " " + massUnit;
   document.getElementById('vValue').innerHTML = vol + " " + volUnit;
   document.getElementById('lastAns').innerHTML = den + " " + denUnit;
   //alert("Dencity: "+(mass/vol));
   //alert(massUnit );
}
