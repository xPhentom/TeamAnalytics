/*jslint browser: true*/
/*global $, jQuery, alert, console*/

// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();
$(document).ready(function() {
    /*Alles van Docent*/
    "use strict";

    $("#indextekst").show();
    $("#StudentLogin").hide();
    $("#DocentLogin").hide();

    $("logo").on('click', function() {

        alert("test");

        $("#indextekst").show();
        $("#StudentLogin").hide();
        $("#DocentLogin").hide();
    });

    $("#gotoDocentLogin").on('click', function() {
        $("#indextekst").hide();
        $("#DocentLogin").show();
        $(".navItems").hide();
    });

    $("#gotoStudentLogin").on('click', function() {
        $("#indextekst").hide();
        $("#StudentLogin").show();
        $(".navItems").hide();
    });

    $('#btnLoginDocent').on('click', function() {

        console.log("clicked");

        var mail, paswoord = "";

        mail = $("#docentemail").val();
        paswoord = $("#docentpassword").val();

        $.ajax({
            type: "POST",
            url: "php/inlogdocent.php",
            data: {
                mail: mail,
                paswoord: paswoord
            },
            /*Stuur variabelen door naar loginstudent.php*/
            success: function(html) {

                if (html === "1") {
                    console.log('inloggen gelukt');
                    window.location.href = "http://wouterroozeleer.me/teamanalytics/docent/dashboard.html";
                } else {
                    console.log(html);
                }
            }
        });
    });

    /*Alles van student*/

    $('#btnLoginStudent').on('click', function() {
        console.log("clicked");

        var mail, paswoord = "";

        mail = $("#studentemail").val();
        paswoord = $("#studentpassword").val();

        $.ajax({
            type: "POST",
            url: "php/inlogstudent.php",
            data: {
                mail: mail,
                paswoord: paswoord
            },
            /*Stuur variabelen door naar loginstudent.php*/
            success: function(html) {

                if (html === "1") {
                    console.log('inloggen gelukt');
                    window.location.href = "http://wouterroozeleer.me/teamanalytics/student/dashboard.html";
                } else {
                    console.log(html);
                }



            }
        });
    });



});
