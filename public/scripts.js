// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function play(playerMove) {
    const gameResult = rpsls(playerMove);
    document.getElementById("result").innerHTML = `You chose ${gameResult.player}, the computer chose ${gameResult.opponent}. You ${gameResult.result}.`;
}