// The Game is starts Form Here
function OpeningCeremony() {
    console.log("Let the games begin.....!");
    console.log("------------------------------------------------------")
    const score = { red: 0, yellow: 0, blue: 0, green: 0 };
    Race100M.call(score, score, LongJump);

}
// For 100 Meter Race
function Race100M(score, callbackFnc) {
    console.log("Race100M started...");
    setTimeout(() => {
        const times = {
            red: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
        };
        console.log("Race 100 Meter is finished. The Time Taken To Finish The Game :", times);
        const colors = Object.keys(times).sort((a, b) => times[a] - times[b]);
        score[colors[0]] += 50;
        score[colors[1]] += 25;
        console.log(`Score updated. ${colors[0]} gets 50 points. ${colors[1]} gets 25 points. And Another is Taken More Time Because It is Not Showed`);
    console.log("------------------------------------------------------")

        // console.log( score);
        callbackFnc.call(score, score, HighJump);
    }, 3000);
}

function LongJump(score, callbackFnc) {
    const color = ["red", "yellow", "blue", "green"][Math.floor(Math.random() * 4)];
    score[color] += 150;
    console.log(`LongJump finished. ${color} gets 150 points.`);
    // console.log(score);
    console.log("------------------------------------------------------")
    callbackFnc.call(score, score);
}

function HighJump(score) {
    const color = prompt("What color secured the highest jump? (red, green, yellow,blue)");
    // console.log(color);
    // console.log(score.hasOwnProperty(color));
    if (color && score.hasOwnProperty(color)) {
        score[color] += 100;
        console.log(`HighJump finished. ${color} gets 100 points.`);
    console.log("------------------------------------------------------")

    } else {
        console.log("Event was cancelled.");
    console.log("------------------------------------------------------")

    }
    // console.log( score);
    AwardCeremony(score);
}

function AwardCeremony(score) {
    const sorted = Object.keys(score).sort((a, b) => score[b] - score[a]);

    console.log("Award Ceremony:");
    console.log("1st place:" +sorted[0]+ " with " +score[sorted[0]]+" points.");
    console.log("2st place:" +sorted[1]+ " with " +score[sorted[1]]+" points.");
    console.log("3st place:" +sorted[2]+ " with " +score[sorted[2]]+" points.");
    console.log("------------------------------------------------------")
    console.log(sorted[3]+ " is Not getting Any Prize");
    console.log("------------------------------------------------------")
    console.log(`The ${sorted[0]} is Won The Match`);
}

const btn = document.getElementById("btn");
btn.addEventListener('click' , OpeningCeremony)
// OpeningCeremony();