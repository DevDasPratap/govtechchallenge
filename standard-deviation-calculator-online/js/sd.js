function calAll() {

    if (document.getElementById('sample').checked) {
        sampleSD();
    }
    else if (document.getElementById('population').checked) {
        populationSD();
    }

}

function clear1(){
    allData = document.getElementById("allValue").value="";
}

function back(){
    var b = document.getElementById("in")
    b.style.display = "block";
    var a = document.getElementById("result")
    a.style.display = "none";
    a = document.getElementById("result1")
    a.style.display = "none";
}

// calculation by population 

function populationSD() {

    var b = document.getElementById("errorMsg")
    b.style.display = "none"; 
    allData = document.getElementById("allValue").value;

    var arr = allData.split(',');

    // need more the 1 data for calculation 
    if (arr.length < 2) {
        b.style.display = "block";  
        return;
    }

    //calculate mean
    var mean = 0;
    for (i in arr) {
        mean = parseInt(mean) + parseInt(arr[i]);
    }
    var sum = mean;
    mean = mean / arr.length;

    //Find the square of the distance from each data point to the mean

    var dis = [];

    for (i in arr) {
        dis[i] = Math.pow(parseInt(arr[i]) - mean, 2);
    }

    // find the sd
    var disSum = 0;
    for (i in dis) {
        disSum = disSum + dis[i];
    }
    
    //Standard Deviation
    var SD = Math.sqrt(disSum / dis.length);
 
    //error of margin 
    errorM = SD / (Math.sqrt(arr.length)); 
    
    //hide the input section
    var b = document.getElementById("in")
    b.style.display = "none";
   
    
    //push value
    document.getElementById("sdValue").innerHTML = SD;
    document.getElementById("sdValue1").innerHTML = SD;
    document.getElementById("size").innerHTML = arr.length;
    document.getElementById("size1").innerHTML = arr.length;
    document.getElementById("size2").innerHTML = arr.length;
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("mean").innerHTML = mean;
    document.getElementById("mean1").innerHTML = mean;
    document.getElementById("mean2").innerHTML = mean;
    document.getElementById("variance").innerHTML = disSum / dis.length;
    document.getElementById("variance1").innerHTML = disSum / dis.length;
    document.getElementById("variance2").innerHTML = disSum / dis.length;
    document.getElementById("firstVal").innerHTML = arr[0];
    document.getElementById("lastVal").innerHTML = arr[arr.length-1];
    document.getElementById("disSum").innerHTML = disSum;
    document.getElementById("errorM").innerHTML = errorM;
    
    //show the result section
    var a = document.getElementById("result")
    a.style.display = "block";

    
}

// calculation by sample
function sampleSD() {
    var b = document.getElementById("errorMsg")
    b.style.display = "none"; 
    
    allData = document.getElementById("allValue").value;

    var arr = allData.split(',');

    // need more the 1 data for calculation 
    if (arr.length < 2) {
        
        b.style.display = "block";  
        return;
        return;
    }

    //calculate mean
    var mean = 0;
    for (i in arr) {
        mean = parseInt(mean) + parseInt(arr[i]);
    }
    var sum = mean;
    mean = mean / arr.length;

    //Find the square of the distance from each data point to the mean

    var dis = [];

    for (i in arr) {
        dis[i] = Math.pow(parseInt(arr[i]) - mean, 2);
    }

    // find the sd
    var disSum = 0;
    for (i in dis) {
        disSum = disSum + dis[i];
    }
    
    //Standard Deviation
    //console.log(disSum);
    newN= dis.length-1;
    var SD = Math.sqrt(disSum / (newN));
 
    //error of margin 
    errorM = SD / (Math.sqrt(arr.length)); 
    
    //hide the input section
    var b = document.getElementById("in")
    b.style.display = "none";

    //push value
    document.getElementById("sdValueS").innerHTML = SD;
    document.getElementById("sdValue1S").innerHTML = SD;
    document.getElementById("sizeS").innerHTML = newN;;
    document.getElementById("size1S").innerHTML = newN;;
    document.getElementById("size2S").innerHTML = newN;;
    document.getElementById("sumS").innerHTML = sum;
    document.getElementById("meanS").innerHTML = mean;
    document.getElementById("mean1S").innerHTML = mean;
    document.getElementById("mean2S").innerHTML = mean;
    document.getElementById("varianceS").innerHTML = disSum / newN;
    document.getElementById("variance1S").innerHTML = disSum / newN;
    document.getElementById("variance2S").innerHTML = disSum / newN;
    document.getElementById("firstValS").innerHTML = arr[0];
    document.getElementById("lastValS").innerHTML = arr[arr.length-1];
    document.getElementById("disSumS").innerHTML = disSum;
    document.getElementById("errorMS").innerHTML = errorM;
    
    //show the result section
    var a = document.getElementById("result1")
    a.style.display = "block";

}