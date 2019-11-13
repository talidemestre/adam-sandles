
speechWobble(true);
STRING="shampoo is better, I go on first and clean the hair";
stringDex=0
actOneStrings =
    [{'text':"hey nice to meet you, i'm the sand man", 'timeout':100, 'audio':'voice'}
        , {'text':"I'll be your guide on this here journey today", 'timeout':100}
        , {'text':"you don't believe i'm the real deal?", 'timeout':100}
        , {'text':"?", 'timeout':100}
        , {'text':"??", 'timeout':500}
        , {'text':"???", 'timeout':1000}
        , {'text': "hold on, let me recite one of my famous adam sandler joke lines", 'timeout':100}
        , {'text':"shampoo is better, I go on first and clean the hair", 'timeout':100, 'audio':"shampoo"}
        , {'text':"conditioner is better, i leave the hair silky and smooth", 'timeout':100}
        , {'text':"  ", 'timeout':800}
        , {'text':"there we go, surely you believe me now", 'timeout':100, 'audio':"voice"}
        , {'text':"", 'timeout':100}
    ]

currentAudio = "voice";
displayString = "";
displayStringCount = 0;
BEGIN_ANIMATE = true;


// Setup for autoplay vs non autoplay
document.getElementById("talkButton").style.visibility = "hidden";

document.getElementById("player").play().catch(function(error) {
    document.getElementById("talkButton").style.visibility = "visible";
    document.getElementById("speechElems").style.visibility = "hidden";
    BEGIN_ANIMATE = false;
} )

function initiateConversation(){
    document.getElementById("speechElems").style.visibility = "visible";
    document.getElementById("talkButton").style.visibility = "hidden";
    BEGIN_ANIMATE = true;
}

//Animates the text.
/*function animateText(string){
	var stringArray = string.split("");
	displayString += stringArray[displayStringCount];
	displayStringCount+=1;
	document.getElementById("speechText").innerHTML = displayString;
}*/

//Animates the text
$('#animate').hover(function(e){
    toSpeech = window.setInterval(printText, actOneStrings[stringDex].timeout)
    var elem = document.getElementById("speechText")
    var pos = parseInt(elem.style.top)
    var stringArray = actOneStrings[stringDex].text.split("");
    //console.log(pos)
    function printText(){
        if (stringArray[displayStringCount] != undefined){
            displayString += stringArray[displayStringCount];
            displayStringCount+=1;
            elem.innerHTML = displayString;
        }
        else{
            stringDex ++;
            displayStringCount = 0;
            displayString = "";
            stringArray = actOneStrings[stringDex].text.split("");
            window.clearInterval(toSpeech);
            if (actOneStrings[stringDex].audio != undefined) {
                var oldAudio = document.getElementById(currentAudio);
                currentAudio = actOneStrings[stringDex].audio;
                var newAudio = document.getElementById(currentAudio);
                newAudio.play()
                oldAudio.pause()


            }
            toSpeech = window.setInterval(printText, actOneStrings[stringDex].timeout)
        }
    }
}, function(e){window.clearInterval(toSpeech);

})

//Play's whatever audio file needs doing.
function playAudio(){
    if (BEGIN_ANIMATE) {
        var oAudio = document.getElementById(currentAudio);
        oAudio.play();
    }
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
        if (BEGIN_ANIMATE) {
            pos++;
            //console.log(pos)
            elem.style.top = pos + "px"
            //console.log('test output')
        }
    }
}, function(e){window.clearInterval(to);

})


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


// Konami Code
if ( window.addEventListener ) {
    var state = 0, konami = [38,38,40,40,37,39,37,39,66,65];
    window.addEventListener("keydown", function(e) {
        if ( e.keyCode == konami[state] ) state++;
        else state = 0;
        if ( state == 10 )
            window.location = "omfgdogs.html";  //you can write your own code here
    }, true);
}