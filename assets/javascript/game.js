$(document).ready(function(){

    var diamondImg = $("#diamond-img");
    var emeraldImg = $("#emerald-img");
    var rubyImg = $("#ruby-img");
    var sapphireImg = $("#sapphire-img");
    var userNumDisplay = $("#user-number");
    var randomNumber = 0;
    var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var userNumber = 0;
    var wins = 0;
    var losses = 0;

    var init = function(){
        userNumber = 0;
        userNumDisplay.text("");
        randomNumber = 0;
        game();
    };

    var gameCheck = function(){
        if (userNumber === randomNumber) {
            wins++;
            $("#wins").text("Wins: " + wins);
            init();
        } else if (userNumber > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            init();
        }
    };

    var game = function () {
        randomNumber = Math.floor(Math.random() * 101) + 19; 
        $("#target-number").text("Try to reach: " + randomNumber);

        var diamond = crystalValues[Math.floor(Math.random()*crystalValues.length)];
        var emerald = crystalValues[Math.floor(Math.random()*crystalValues.length)];
        var ruby = crystalValues[Math.floor(Math.random()*crystalValues.length)];
        var sapphire = crystalValues[Math.floor(Math.random()*crystalValues.length)];

        if (diamond === emerald || diamond === ruby || diamond === sapphire) {
            diamond = crystalValues[Math.floor(Math.random()*crystalValues.length)];
        } else if (emerald === ruby || emerald === sapphire) {
            emerald = crystalValues[Math.floor(Math.random()*crystalValues.length)];
        } else if (ruby === sapphire) {
            ruby = crystalValues[Math.floor(Math.random()*crystalValues.length)];
        };

        diamondImg.click(function(){
            userNumber = (userNumber + diamond);
            $(userNumDisplay).text("Your number so far: " + userNumber);
            gameCheck();
        });
        emeraldImg.click(function(){
            userNumber = (userNumber + emerald);
            $(userNumDisplay).text("Your number so far: " + userNumber);
            gameCheck();
        });
        rubyImg.click(function(){
            userNumber = (userNumber + ruby);
            $(userNumDisplay).text("Your number so far: " + userNumber);
            gameCheck();
        });
        sapphireImg.click(function(){
            userNumber = (userNumber + sapphire);
            $(userNumDisplay).text("Your number so far: " + userNumber);
            gameCheck();
        });
    };
    init();
});