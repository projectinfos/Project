$(function () {

    $("#navbartoggler").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 606.99) {
            $("#nav").collapse('hide');
        }




    });






});