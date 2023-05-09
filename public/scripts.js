// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function selection() {
  var rpsls = document.getElementById('rpsls');

  var opponent = document.getElementById('opponent');

  if (opponent.checked) {
    document.getElementById('rpsShots').style.display = "block";
    if (rpsls.checked) {
        document.getElementById('rpslsShots').style.display = "block";
    } else {
        document.getElementById('rpslsShots').style.display = "none";
    }
  } else {
    document.getElementById('rpsShots').style.display = "none";
    document.getElementById('rpslsShots').style.display = "none";
  }  
}

async function play(shotType) {
  if (shotType == null || shotType == undefined) {
        shotType = 'random';   
      }
  var baseurl = window.location.href.concat('app');

  if (document.getElementById('rpsls').checked) {
      baseurl = baseurl.concat('/rpsls');
  } else {
      baseurl = baseurl.concat('/rps');
  }

  var url = baseurl.concat('/play/');

  //if (!document.getElementById('random').checked) {
  if (shotType != 'random') {      
      url = url.concat(shotType);
      let response = await fetch(url);
      let result = await response.json();
      let output = 'You chose ' + result.player + '! ' + 'Opponent chose ' + result.opponent + '! You ' + result.result + '!';
      document.getElementById("results").innerHTML = output;
  }
  else {
      let response = await fetch(url);
      let result = await response.json();
      document.getElementById("results").innerHTML = result.player;
  }

  document.getElementById('play').style.display = "none";
  document.getElementById('selection').style.display = "none";
  document.getElementById('rules').style.display = "none";
  document.getElementById("results").style.display = 'block';
}

function reset() {
  document.getElementById('play').style.display = "block";
  document.getElementById('selection').style.display = "block";
  document.getElementById('rules').style.display = "block";
  document.getElementById("results").style.display = 'none';
  document.getElementById('rulesText').style.display = "none";
  
  document.getElementById("rps").checked = true;
  document.getElementById("random").checked = true;
  document.getElementById('rpslsShots').style.display = "none";
  document.getElementById('rpsShots').style.display = "none";
}

function rules() {
  document.getElementById('rulesText').style.display = "block";
  document.getElementById('play').style.display = "none";
  document.getElementById('selection').style.display = "none";
  document.getElementById('rules').style.display = "none";
  document.getElementById("results").style.display = 'none';
}