export function rps(playerShot) {
    const rpsShots = ['rock', 'paper', 'scissors'];
    const opponentShot = rpsShots[Math.floor(Math.random() * 3)];
    var result = 'tie';

    if (playerShot == null || playerShot == undefined) {
        return {'player' : opponentShot};
    }

    playerShot = playerShot.toLowerCase();
    
    if (!rpsShots.includes(playerShot)) {
        return new RangeError;
    }

    switch (playerShot) {
        case 'rock':
            result = opponentShot == 'rock' ? 'tie' : opponentShot == 'paper' ? 'lose' : 'win';
            break;
        case 'paper':
            result = opponentShot == 'rock' ? 'win' : opponentShot == 'paper' ? 'tie' : 'lose';
            break;
        case 'scissors':
            result = opponentShot == 'rock' ? 'lose' : opponentShot == 'paper' ? 'win' : 'tie';
            break;
    }

    return {'player': playerShot, 'opponent': opponentShot, 'result': result};
}

export function rpsls(playerShot) {
    const rpslsShots = ['rock', 'paper', 'scissors', 'lizard', 'Spock'];
    const opponentShot = rpslsShots[Math.floor(Math.random() * 5)];
    var result;

    if (playerShot == null || playerShot == undefined) {
        return {'player' : opponentShot};
    }

    playerShot = playerShot.toLowerCase();

    if (!rpslsShots.includes(playerShot)) {
        return new RangeError;
    }

    switch (playerShot) {
        case 'rock':
            result = opponentShot == 'lizard' || opponentShot == 'scissors' ? 'win' : opponentShot == 'paper' || opponentShot == 'spock' ? 'lose' : 'tie';
            break;
        case 'paper':
            result = opponentShot == 'rock' || opponentShot == 'spock' ? 'win' : opponentShot == 'scissors' || opponentShot == 'lizard' ? 'lose' : 'tie';
            break;
        case 'scissors':
            result = opponentShot == 'paper' || opponentShot == 'lizard' ? 'win' : opponentShot == 'spock' || opponentShot == 'rock' ? 'lose' : 'tie';
            break;
        case 'lizard':
            result = opponentShot == 'spock' || opponentShot == 'paper' ? 'win' : opponentShot == 'rock' || opponentShot == 'scissors' ? 'lose' : 'tie';
            break;
        case 'spock':
            result = opponentShot == 'scissors' || opponentShot == 'rock' ? 'win' : opponentShot == 'lizard' || opponentShot == 'paper' ? 'lose' : 'tie';
            break; 
    }

    if (opponentShot == 'spock') {
        opponentShot = 'Spock';
    }

    return {'player': playerShot, 'opponent': opponentShot, 'result': result};
}
