window.onload = loadGame;

var possession = "";
var shotType = 0;
var hardenScore = 0;
var ingramScore = 0;
function loadGame(){
  var fiftyFifty = Math.floor((Math.random() * 10) + 1)
  if (fiftyFifty > 5)
  {
    possession = "ingram";
    document.getElementById('hardenArrow').style.display = "none";
    document.getElementById('ingramArrow').style.display = "block";
  }
  else {
    possession = "harden";
    document.getElementById('hardenArrow').style.display = "block";
    document.getElementById('ingramArrow').style.display = "none"
  }
  console.log(possession)
  document.getElementById('shotButtonid').style.display = "none";

  hardenScore = 0;
  ingramScore = 0;
  document.getElementById('hardenScore').innerHTML = hardenScore;
  document.getElementById('ingramScore').innerHTML = ingramScore;

  if (document.getElementById('winner').style.display == "block"){
    document.getElementById('winner').style.display = "none"
  }
}

function shotSelection(ele){
  if (ele.id == "twoPointButton")
  {
    shotType = 2;
    ele.style.backgroundColor = "lime";
    document.getElementById('threePointButton').style.backgroundColor ="grey"
  }
  else if (ele.id == "threePointButton") {
    shotType = 3;
    ele.style.backgroundColor = "lime";
    document.getElementById('twoPointButton').style.backgroundColor = "grey"
  }
document.getElementById('shotButtonid').style.display = "block";
}

function shoot(){
  var randomNum = Math.floor((Math.random() * 1000) + 1);
    if (possession == "harden" && shotType == 2){
      console.log(randomNum);
      if (randomNum < 532){
        hardenScore = hardenScore + 2;
           possession="ingram";
           document.getElementById('hardenArrow').style.display = "none";
           document.getElementById('ingramArrow').style.display = "block";
           document.getElementById('twoPointButton').style.backgroundColor = "grey"
           document.getElementById('resultGif').src = "https://media1.giphy.com/media/105n4nR10J5ny0/giphy.gif"
           document.getElementById('resultGif').style.display = "block"
           setTimeout(function(){
             document.getElementById('resultGif').style.display = "none"
             document.getElementById('hardenScore').innerHTML = hardenScore;
           }, 2500);

      }
      else{
         possession="ingram"
         document.getElementById('hardenArrow').style.display = "none";
         document.getElementById('ingramArrow').style.display = "block";
         document.getElementById('resultGif').src = "https://media2.giphy.com/media/11ue05mOlhSH4s/giphy.gif"
         document.getElementById('resultGif').style.display = "block"
         setTimeout(function(){
           document.getElementById('resultGif').style.display = "none"
         }, 4000);
        document.getElementById('twoPointButton').style.backgroundColor = "grey"
      }
    }
    else if (possession == "harden" && shotType == 3){
      console.log(randomNum);
      if (randomNum < 368){
        hardenScore = hardenScore + 3;
           possession="ingram";
           document.getElementById('hardenArrow').style.display = "none";
           document.getElementById('ingramArrow').style.display = "block";
           document.getElementById('threePointButton').style.backgroundColor = "grey"
           document.getElementById('resultGif').src = "https://media3.giphy.com/media/12x4BRlRVysDqU/giphy.gif"
           document.getElementById('resultGif').style.display = "block"
           setTimeout(function(){
             document.getElementById('resultGif').style.display = "none"
             document.getElementById('hardenScore').innerHTML = hardenScore;
           }, 6500);
      }
      else{
         possession="ingram"
         document.getElementById('hardenArrow').style.display = "none";
         document.getElementById('ingramArrow').style.display = "block";
         document.getElementById('resultGif').src = "https://media2.giphy.com/media/KSYls3E1DHSQo/giphy.gif"
         document.getElementById('resultGif').style.display = "block"
         setTimeout(function(){
           document.getElementById('resultGif').style.display = "none"
         }, 2700);
         document.getElementById('threePointButton').style.backgroundColor = "grey"
      }
    }
    else if (possession == "ingram" && shotType == 2){
      console.log(randomNum);
      if (randomNum < 484){
        ingramScore = ingramScore + 2;
           possession="harden";
           document.getElementById('ingramArrow').style.display = "none";
           document.getElementById('hardenArrow').style.display = "block";
           document.getElementById('twoPointButton').style.backgroundColor = "grey"
           document.getElementById('resultGif').src = "https://media2.giphy.com/media/71CbHcICBI3Ac/giphy.gif"
           document.getElementById('resultGif').style.display = "block"
           document.getElementById('resultGif').style.marginLeft = "1150px"
           setTimeout(function(){
             document.getElementById('resultGif').style.display = "none"
             document.getElementById('resultGif').style.marginLeft = "200px"
             document.getElementById('ingramScore').innerHTML = ingramScore;
           }, 6500);

      }
      else{
         possession="harden"
         document.getElementById('ingramArrow').style.display = "none";
         document.getElementById('hardenArrow').style.display = "block";
         document.getElementById('resultGif').src = "https://s.cdn.turner.com/drp/nba/lakers/sites/default/files/06e25a63-2f71-4e21-b44b-b7ff89ce66a8.gif"
         document.getElementById('resultGif').style.display = "block"
         document.getElementById('resultGif').style.marginLeft = "1150px"
         setTimeout(function(){
           document.getElementById('resultGif').style.display = "none"
           document.getElementById('resultGif').style.marginLeft = "200px"
         }, 5000);
         document.getElementById('twoPointButton').style.backgroundColor = "grey"
      }
    }
    else if (possession == "ingram" && shotType == 3){
      console.log(randomNum);
      if (randomNum < 391){
        ingramScore = ingramScore + 3;
           possession="harden";
           document.getElementById('ingramArrow').style.display = "none";
           document.getElementById('hardenArrow').style.display = "block";
           document.getElementById('threePointButton').style.backgroundColor = "grey"
           document.getElementById('resultGif').src = "https://thumbs.gfycat.com/GiddyIgnorantBelugawhale-max-1mb.gif"
           document.getElementById('resultGif').style.display = "block"
           document.getElementById('resultGif').style.marginLeft = "1150px"
           setTimeout(function(){
             document.getElementById('resultGif').style.display = "none"
             document.getElementById('resultGif').style.marginLeft = "200px"
             document.getElementById('ingramScore').innerHTML = ingramScore;
           }, 3500);
           document.getElementById('threePointButton').style.backgroundColor = "grey"
      }
      else{
         possession="harden"
         document.getElementById('ingramArrow').style.display = "none";
         document.getElementById('hardenArrow').style.display = "block";
         document.getElementById('resultGif').src = "https://i1.wp.com/lakerspulse.com/wp-content/uploads/2017/01/Ingram-NBA.gif?fit=480"
         document.getElementById('resultGif').style.display = "block"
         document.getElementById('resultGif').style.marginLeft = "1150px"
         setTimeout(function(){
           document.getElementById('resultGif').style.display = "none"
           document.getElementById('resultGif').style.marginLeft = "200px"
         }, 5000);
         document.getElementById('threePointButton').style.backgroundColor = "grey"
      }
    }
      document.getElementById('shotButtonid').style.display = "none";
    if (hardenScore > 20 && hardenScore > ingramScore + 1)
    {
      //<button id="playAgainButton" onclick="loadGame()">PLAY AGAIN</button>
      var restartButton = document.createElement("button")
      restartButton.id = "playAgainButton"
      restartButton.innerHTML = "PLAY AGAIN"
      restartButton.onclick = function () {
        loadGame();
      }
      document.getElementById('winner').innerHTML = "Harden Wins!!!"
      document.getElementById('winner').appendChild(restartButton)
      document.getElementById('resultGif').src = "https://i.pinimg.com/originals/8a/84/ef/8a84ef06dda2ca41979a2a627db28508.gif"
      document.getElementById('winner').style.display = "block"
    }
    else if (ingramScore > 20 && ingramScore > hardenScore + 1){
      var restartButton = document.createElement("button")
      restartButton.id = "playAgainButton"
      restartButton.innerHTML = "PLAY AGAIN"
      restartButton.onclick = function () {
        loadGame();
      }
      document.getElementById('winner').innerHTML = "Ingram Wins!!!"
      document.getElementById('winner').appendChild(restartButton)
      document.getElementById('resultGif').src = "https://media3.giphy.com/media/pjBLGY6EegwnsTe0oL/200.gif"
      document.getElementById('winner').style.display = "block"
    }
}



//https://i1.wp.com/lakerspulse.com/wp-content/uploads/2017/01/Ingram-NBA.gif?fit=480%2C233

//https://i1.wp.com/lakerspulse.com/wp-content/uploads/2017/01/Ingram-NBA.gif?fit=480%2C233
