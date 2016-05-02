/*jslint browser: true*/
/*global $, jQuery, alert, console*/

// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();
$(document).ready(function() {
    /*Alles van Docent*/
    "use strict";
    $("#StudentQuiz").hide();
    $("#dashboardstudent").show();

    $("#gotoStudentQuiz").on('click', function() {
        $("#dashboardstudent").hide();
        $("#StudentQuiz").show();
        $("#btnIndienen").hide();
        $("#QuizResultaatScherm").hide();

        $.ajax({
            type: 'POST',
            url: '../belbintest.json',
            data: {},
            dataType: 'json',
            success: function(jsonData) {

                var _len = jsonData.length;
                var i = 0;
                for (i = 0; i < _len; i++) {
                    /*alert("Stelling is "+ jsonData[i].stelling);*/
                    $("#QuizScherm").append('<div class="col s8 m6 l8 offset-s2 offset-l2 offset-m4 AlleQuizSchermen scherm' + i + '">' + jsonData[i].stelling + '<br>');
                    var Antwoorden = [jsonData[i].A1, jsonData[i].A2, jsonData[i].A3, jsonData[i].A4, jsonData[i].A5, jsonData[i].A6, jsonData[i].A7, jsonData[i].A8];
                    var j = 0;
                    var totaal = Antwoorden.length;
                    for (j = 0; j < totaal; j++) {
                        $("#QuizScherm").append('<div class="col s8 m6 l8 offset-s2 offset-l2 offset-m4 scherm' + i + '">' + Antwoorden[j] + '<br>');
                        $("#QuizScherm").append('<p class="range-field col s8 m6 l8 offset-s2 offset-l2 offset-m4 scherm' + i + '"><input type="range" id="A' + i + j + '" min="0" max="10" /></p>');

                        if (i != 0) {
                            $(".scherm" + i).hide();
                            $("#btnVolgende" + i).hide();
                        }

                    }
                }
                $("#QuizScherm").append('</div>');
            },
            error: function() {
                console.log("Vragen kunnen niet opgehaald worden");
            }
        });



    });

    $("#btnVolgende").on('click', function() {
        var i = 0;
        for (i = 0; i < 6; i++) {
            if ($(".scherm" + i).css('display') == 'block') {
                $(".scherm" + i).hide();
                i++;
                $(".scherm" + i).show();
            };
            if (i === 6) {
                $("#btnVolgende").hide();
                $("#btnIndienen").show();
            };
        }
    });

    $("#btnIndienen").on('click', function() {
        $("#QuizScherm").hide();
        $("#QuizResultaatScherm").show();
        $("#btnIndienen").hide();
        BelbinResultaat();
    });

    function BelbinResultaat() {
        var sh = 0,
            co = 0,
            pl = 0,
            ri = 0,
            me = 0,
            imp = 0,
            tw = 0,
            cf = 0;

        sh = parseInt($("#A02").val()) + parseInt($("#A10").val()) + parseInt($("#A26").val()) + parseInt($("#A31").val()) + parseInt($("#A45").val()) + parseInt($("#A55").val()) + parseInt($("#A64").val());
        co = parseInt($("#A06").val()) + parseInt($("#A15").val()) + parseInt($("#A23").val()) + parseInt($("#A32").val()) + parseInt($("#A44").val()) + parseInt($("#A53").val()) + parseInt($("#A66").val());
        pl = parseInt($("#A03").val()) + parseInt($("#A14").val()) + parseInt($("#A25").val()) + parseInt($("#A35").val()) + parseInt($("#A40").val()) + parseInt($("#A54").val()) + parseInt($("#A65").val());
        ri = parseInt($("#A05").val()) + parseInt($("#A17").val()) + parseInt($("#A21").val()) + parseInt($("#A33").val()) + parseInt($("#A46").val()) + parseInt($("#A50").val()) + parseInt($("#A62").val());
        me = parseInt($("#A04").val()) + parseInt($("#A13").val()) + parseInt($("#A22").val()) + parseInt($("#A34").val()) + parseInt($("#A42").val()) + parseInt($("#A52").val()) + parseInt($("#A61").val());
        imp = parseInt($("#A00").val()) + parseInt($("#A16").val()) + parseInt($("#A24").val()) + parseInt($("#A30").val()) + parseInt($("#A43").val()) + parseInt($("#A57").val()) + parseInt($("#A60").val());
        tw = parseInt($("#A07").val()) + parseInt($("#A12").val()) + parseInt($("#A27").val()) + parseInt($("#A37").val()) + parseInt($("#A41").val()) + parseInt($("#A56").val()) + parseInt($("#A67").val());
        cf = parseInt($("#A01").val()) + parseInt($("#A11").val()) + parseInt($("#A20").val()) + parseInt($("#A36").val()) + parseInt($("#A47").val()) + parseInt($("#A51").val()) + parseInt($("#A63").val());

        var Antwoorden = {
            "Shaper": sh,
            "Co-ordinator": co,
            "Plant": pl,
            "Resource investigator": ri,
            "Monitor Evaluator": me,
            "Implementer": imp,
            "Team worker": tw,
            "Completer finisher": cf
        };

        var maxnaam = "";
        var maxwaarde = 0;
        $.each(Antwoorden, function(key, value) {
          var score = value;
          value = Math.round((value / 490) * 100).toFixed(0);
            $("#QuizResultaatScherm").append("<p>Voor de rol " + key + " heb je " + value + "% behaald.</p>");
            if (score > maxwaarde){
              maxnaam = key;
              maxwaarde = score;
            }

        });

        $.ajax({
            type: "POST",
            url: "../php/rolopslaan.php",
            data: {
                rol: maxnaam
            },
            /*Stuur variabelen door naar loginstudent.php*/
            success: function(html) {
              Materialize.toast('Uw rol is opgeslagen', 3000, 'rounded');
            }
        });

        console.log("hoogste gescoorde is " + maxnaam + " met " + maxwaarde +".")

        return sh;
    };


})
