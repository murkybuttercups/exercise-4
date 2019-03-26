window.onload = init; 

function init(){

	var xhr = new XMLHttpRequest(); 

	xhr.open("GET", "https://picsum.photos/list", true); 

	xhr.send(null); 

	xhr.onload = function(){

		if(xhr.status == 200){

			var pictures = JSON.parse(xhr.responseText);
			console.log(pictures);

			var imageString = "" 
			for(var x = 10; x < 20; x++){	
				imageString += "<a href='" + pictures[x].author_url + "' target='_blank'><img class='gallerypic' src='https://picsum.photos/275/?random=" + pictures[x].id + "'><p>" + pictures[x].author + "</p></a>"
			}
			document.getElementById("gallery").innerHTML = imageString;

		} 
	}
}

// console.log(picsum); 

			// var imageString = ";" 
			// for(var x = 200; x < 550; x++){	
			// 	imageString += "<img src='https://picsum.photos/200/300?image=" + picsum[x].id + "'><p>" + picsum[x].author + "</p>" + picsum[x].id + "'><p>" + picsum[x].author_url + "</p>"
			// }
			// document.getElementById("gallery").innerHTML = imageString;

// function init () {

	//var images = ["imgs/bouquet.jpg", "imgs/tree.jpg"];

	// images.forEach(function(i){


	// 	// create elements
	// 	var newFig = document.createElement("FIGURE");

	// 	var newImage = document.createElement("IMG");
	// 	newImage.setAttribute("src", i);

	// 	var newCap = document.createElement("FIGCAPTION");

	// 	// add elements to the dom
	// 	newFig.appendChild(newImage)
	// 	newFig.appendChild(newCap)
	// 	document.getElementById("gallery").appendChild(newFig);


	// })

	