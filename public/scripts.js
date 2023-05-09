// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function selection() {
    var rpsls = document.getElementById('rpsls');

    var opp = document.getElementById('opp');

    if (opp.checked) {
        document.getElementById('rpsShots').style.display = "block";
        if (rpsls.checked)
        {
            document.getElementById('rpslsShots').style.display = "block";
        }
        else {
            document.getElementById('rpslsShots').style.display = "none";
        }
    }
    else {
        document.getElementById('rpsShots').style.display = "none";
    }
}

// Logic for game play with requests to api
async function play() {
    var baseurl = window.location.href.concat('app');

    if (document.getElementById('rpsls').checked) {
        baseurl = baseurl.concat('/rpsls');
    }
    else {
        baseurl = baseurl.concat('/rps');
    }

    var url = baseurl.concat('/play/');

    if (!document.getElementById('rd').checked) {
        let shot = '';
        if (document.getElementById('rock').checked)
            shot = 'rock';
        if (document.getElementById('paper').checked)
            shot = 'paper';
        if (document.getElementById('scissors').checked)
            shot = 'scissors';
        if (document.getElementById('lizard').checked)
            shot = 'lizard';
        if (document.getElementById('spock').checked)
            shot = 'spock';

        url = url.concat(shot);
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

// Reset page
function reset() {
    document.getElementById('play').style.display = "block";
    document.getElementById('selection').style.display = "block";
    document.getElementById('rules').style.display = "block";
    document.getElementById("results").style.display = 'none';
    document.getElementById('rulesText').style.display = "none";
    
    // Reset radios
    document.getElementById("rps").checked = true;
    document.getElementById("rd").checked = true;
    document.getElementById('rpslsShots').style.display = "none";
    document.getElementById('rpsShots').style.display = "none";
}

// Rules display
function rules() {
    document.getElementById('rulesText').style.display = "block";

    document.getElementById('play').style.display = "none";
    document.getElementById('selection').style.display = "none";
    document.getElementById('rules').style.display = "none";
    document.getElementById("results").style.display = 'none';
    
    // Reset radios

}