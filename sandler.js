
speechWobble(true);
STRING="shampoo is better, I go on first and clean the hair";
DISPLAYSTRING = "";
DISPLAYSTRINGCOUNT = 0;

//Animates the text.
/*function animateText(string){
	var stringArray = string.split("");
	DISPLAYSTRING += stringArray[DISPLAYSTRINGCOUNT];
	DISPLAYSTRINGCOUNT+=1;
	document.getElementById("speechText").innerHTML = DISPLAYSTRING;
}*/

//Animates the text
$('#animate').hover(function(e){
    toSpeech = window.setInterval(doStuff, 100)
    var elem = document.getElementById("speechText")
    var pos = parseInt(elem.style.top)
    var stringArray = STRING.split("");
    //console.log(pos)
    function doStuff(){
        if (stringArray[DISPLAYSTRINGCOUNT] != undefined){
            DISPLAYSTRING += stringArray[DISPLAYSTRINGCOUNT];
            DISPLAYSTRINGCOUNT+=1;
            elem.innerHTML = DISPLAYSTRING;
        }else{STRING = "conditioner is better, i leave the hair silky and smooth";stringArray = STRING.split("");DISPLAYSTRINGCOUNT=0; DISPLAYSTRING=""}
    }
}, function(e){window.clearInterval(toSpeech);

})

//Play's whatever audio file needs doing.
function playAudio(id){
    var oAudio = document.getElementById(id);
    oAudio.play();
}
function pauseAudio(id){
    var oAudio = document.getElementById(id);
    oAudio.pause();
}
//This script moves adam sandlers  (using jQuery)

$('#animate').hover(function(e){
    to = window.setInterval(doStuff, 5)
    var elem = document.getElementById("animate")
    var pos = parseInt(elem.style.top)
    //console.log(pos)
    function doStuff(){
        pos++;
        //console.log(pos)
        elem.style.top = pos + "px"
        //console.log('test output')
    }
}, function(e){window.clearInterval(to);

})


/*function moveAdam(condition) {
    var elem = document.getElementById("animate");
    var pos = elem.style.top;
    var id = setInterval(frame,5);
	var i = 0;
    function frame(){
        if(i>400){
	        clearInterval(id);
			return
	    }else{
		    pos++;
	        elem.style.top = pos + "px";
			i++;
        }
    }
}
*/
//This script makes adam sandler talk


$('#speechBubble').hover(function(e){
    toMouth = window.setInterval(doStuff, 100)
    var elem = document.getElementById("animateMouth")
    elem.style.top = 0
    var pos = parseInt(elem.style.top)
    var upDown = true
    //console.log(pos)
    function doStuff(){
        if (upDown){
            pos+=8;
            upDown=false;
        }else{
            pos-=8
            upDown=true;
        }
        //console.log(pos)
        elem.style.top = pos + "px"
        //console.log('test output')
    }
}, function(e){window.clearInterval(toMouth);

})

/*function talkAdam(condition){
	var elem = document.getElementById("animateMouth")
	var pos = elem.style.top;
	var id =setInterval(frame2,100);
	var upDown= true;
	function frame2(){
	    if (condition==false){
		    clearInterval(id);
	}else{
	    if (upDown){
		pos+=8;
		upDown=false;
		}else{
		pos-=8
		upDown = true;
		}
		elem.style.top = pos + "px";
	}
	}
}

*/
//This wobbles the text box
function speechWobble(condition) {
    console.log(condition)
    var elem = document.getElementById("speechBubble");
    var pos = elem.style.top;
    var id = setInterval(frame4,600);
    var upDown= true;
    pos = parseInt(pos)
    function frame4(){
        if(condition==false){
            clearInterval(id);
        }else{
            if (upDown){
                pos+=8;
                upDown=false;
            } else {
                pos-=8;
                upDown=true;
            }
            elem.style.top = pos + "px";

        }
    }
}

//This function changes the heading near the top of the page
function  test(){
    var userInput = document.getElementById("userInput").value;
    document.getElementById("demo").innerHTML = userInput;
}

if ( window.addEventListener ) {
    var state = 0, konami = [38,38,40,40,37,39,37,39,66,65];
    window.addEventListener("keydown", function(e) {
        if ( e.keyCode == konami[state] ) state++;
        else state = 0;
        if ( state == 10 )
            window.location = "omfgdogs.html";  //you can write your own code here
    }, true);
}