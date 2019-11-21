$(document).ready(function () {
    var $windowHeight = $(window).height();
    console.log($windowHeight);
    $(".page-section").css("height", $windowHeight);

    //partA
    $("#menu-partA-description").click(function () {
        $("#content-partA-description").fadeIn(700);
        $("#content-partA-description").css("display", "flex");
        $("#content-partA-journal").css("display", "none");
        $("#content-partA-reflection").css("display", "none");
    });

    $("#menu-partA-journal").click(function () {
        $("#content-partA-journal").fadeIn(700);
        $("#content-partA-description").css("display", "none");
        $("#content-partA-journal").css("display", "flex");
        $("#content-partA-reflection").css("display", "none");
    });

    $("#menu-partA-reflection").click(function () {
        $("#content-partA-reflection").fadeIn(700);
        $("#content-partA-description").css("display", "none");
        $("#content-partA-journal").css("display", "none");
        $("#content-partA-reflection").css("display", "flex");
    });

    //partB
    $("#menu-partB-description").click(function () {
        $("#content-partB-description").fadeIn(700);
        $("#content-partB-description").css("display", "flex");
        $("#content-partB-journal").css("display", "none");
        $("#content-partB-reflection").css("display", "none");
    });

    $("#menu-partB-journal").click(function () {
        $("#content-partB-description").css("display", "none");
        $("#content-partB-journal").fadeIn(700);
        $("#content-partB-journal").css("display", "flex");
        $("#content-partB-reflection").css("display", "none");
    });

    $("#menu-partB-reflection").click(function () {
        $("#content-partB-description").css("display", "none");
        $("#content-partB-journal").css("display", "none");
        $("#content-partB-reflection").fadeIn(700);
        $("#content-partB-reflection").css("display", "flex");
    });

    //partC
    $("#menu-partC-description").click(function () {
        $("#content-partC-description").fadeIn(700);
        $("#content-partC-description").css("display", "flex");
        $("#content-partC-journal").css("display", "none");
        $("#content-partC-reflection").css("display", "none");
    });

    $("#menu-partC-journal").click(function () {
        $("#content-partC-description").css("display", "none");
        $("#content-partC-journal").fadeIn(700);
        $("#content-partC-journal").css("display", "flex");
        $("#content-partC-reflection").css("display", "none");
    });

    $("#menu-partC-reflection").click(function () {
        $("#content-partC-description").css("display", "none");
        $("#content-partC-journal").css("display", "none");
        $("#content-partC-reflection").fadeIn(700);
        $("#content-partC-reflection").css("display", "flex");
    });

    $(".down-arrow").click(function (event) {
        $("html, body").animate({ scrollTop: $("#catalog-page").offset().top }, 500);
        event.preventDefault();
     });

     $(".hamburger-menu li:nth-child(1)").click(function (event) {
        $("html, body").animate({ scrollTop: $("#home-page").offset().top }, 500);
        event.preventDefault();
     });

     $(".hamburger-menu li:nth-child(2)").click(function (event) {
        $("html, body").animate({ scrollTop: $("#catalog-page").offset().top }, 500);
        event.preventDefault();
     });

     $(".hamburger-menu li:nth-child(3), #content-about-me").click(function (event) {
        $("html, body").animate({ scrollTop: $("#about-me-page").offset().top }, 500);
        event.preventDefault();
     });

     $(".hamburger-menu li:nth-child(4), #content-assessment-reflection").click(function (event) {
        $("html, body").animate({ scrollTop: $("#assessment-reflection-pageA").offset().top }, 500);
        event.preventDefault();
     });

     $(".hamburger-menu li:nth-child(5), #content-ideation").click(function (event) {
        $("html, body").animate({ scrollTop: $("#ideation-page").offset().top }, 500);
        event.preventDefault();
     });

     $(".hamburger-menu li:nth-child(6), #content-course-reflection").click(function (event) {
        $("html, body").animate({ scrollTop: $("#course-page").offset().top }, 500);
        event.preventDefault();
     });

     $(".hamburger-menu li:nth-child(7), #content-reference").click(function (event) {
        $("html, body").animate({ scrollTop: $("#reference-page").offset().top }, 500);
        event.preventDefault();
     });
    
});