

var image = document.getElementById("mainImageContainer"); //Reference to the image
var imageWidth ;
var imageHeight;
var xInitial,yInitial;
var imageTopInitial, imageLeftInitial;

var enableDrag = false;


window.onload = function() {
	
	//Initialize starting attributes of picture (Should be done in CSS?)
	image.style.backgroundPositionX = '0px';
	image.style.backgroundPositionY = '0px';
	document.onmousedown = mouseDownEvent; 
	document.onmousemove = mouseMoveEvent;
	document.onmouseup = mouseReleaseEvent;

}

//Determine what happens when the mouse clicked
function mouseDownEvent(e){
	//console.log("Mouse down");

	//Store initial mouse location 
	yInitial = e.clientY;
	xInitial = e.clientX;
	//Store initial image location
	imageTopInitial = parseInt(image.style.backgroundPositionY);
	imageLeftInitial = parseInt(image.style.backgroundPositionX);

	enableDrag = true;

	return false; //Add this because otherwise browser wont let you drag (Not sure why...)
}

//Determine what happens when the mouse is moving
function mouseMoveEvent(e){
	
	if(enableDrag){
		
		var deltaY = e.clientY - yInitial;//Calculate the change in y coordinates
		var deltaX = e.clientX - xInitial;//Calculate the change in x coordinates
		image.style.backgroundPositionY = imageTopInitial + deltaY  + 'px'; //Set the new image Y coordinate
		image.style.backgroundPositionX = imageLeftInitial + deltaX  + 'px';//Set the new image X coordinate

	}
	
}

//Determine what happens when the mouse button is released
function mouseReleaseEvent(e){
	//console.log("Mouse released")
	enableDrag = false;
	return false;
}


//console.log('X:' + e.clientX + ' Y:' + e.clientY + ' TOP:' + parseInt(image.style.top));