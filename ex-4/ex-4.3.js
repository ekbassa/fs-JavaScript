const totalGames = 3; 
let team1 = 'John';
let team2 = 'Mike';
let team3 = 'Mary';
let team1Scores = 89 + 120 + 903;
let team2Scores = 89 + 220 + 103;
let team3Scores = 89 + 190 + 103;

let team1Avg = team1Scores / totalGames;
let team2Avg = team2Scores / totalGames;
let team3Avg = team3Scores / totalGames;

if ((team1Avg == team2Avg && team2Avg == team3Avg && team1Avg == team3Avg)){
    console.log (`All Teams, ${team1} Team and  ${team2} and ${team3} Team, have equal average of ${team1Avg}`)
}

else if (team1Avg > team2Avg) {
    if (team1Avg > team3Avg)
    console.log(`The winner is ${team1}\' Team with Average of ${team1Avg}`)
}
else if (team2Avg > team3Avg){
    console.log(`The winner is ${team2}\' Team with Average of ${team2Avg}`)
}

else {
    console.log(`The winner is ${team3}\' Team with Average of ${team3Avg}`)
}
