function changeText(buttonNumber){
    var textsArray = ["Hello","Ayubowan", "Guten Tag", "nǐhǎo", "Konnichiwa"]
    var number = getRandomNumberBetween(0,textsArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("heading" + buttonNumber).innerHTML = textsArray[number];
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

