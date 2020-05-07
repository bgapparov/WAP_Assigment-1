/*jshint esversion: 6  */

(function () {
    "use strict";

    $(function () {
        var start = $('#start');
        var end = $('#end');
        var maze = $('#maze');
        var boundary = $('.boundary');
        var gameStart = false;

        maze.mouseleave(function () {
            lose()
        });

        start.click(function () {
            $('#status').text('Move mouse from S to E!');
            gameStart = true;
            if (boundary.hasClass('youlose')) {
                boundary.removeClass('youlose');
            }
            boundary.mousemove(function () {
                lose();
            })
        });

        end.mousemove(function () {
            if (gameStart === true) won();
            else if (gameStart && boundary.hasClass('youlose')) lose();
        });

        function won() {
            alert("Congratulations, You won ('~')!");
            gameStart = false;
            $('#status').text('Good job you won!')
        }

        function lose() {
            gameStart = false;
            boundary.addClass('youlose');
            $('#status').text('So sad! You lost the game, Try again!')
        }

    });


}());