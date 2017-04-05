 	//var data=fs.readFileSync('testcase.json');

	window.onload = function(e){
		console.log(data);
		document.getElementById("packageData").innerHTML = JSON.stringify(data, undefined, 2);
		//document.getElementById("json2").innerHTML = JSON.stringify(data.id, undefined, 2);
		//document.getElementById("json2").innerHTML = data.event;
	}
 	
 	//console.log(testCase);
 	
 	//window.onload = function() { 
    //changeText(testCase); 
	//}