$(document).ready(function(){
    var checkVisible = $("#portfilio .gallery_product:visible").length;
    $("#portfilio .filter-button").click(function(){
        var value = $(this).attr('data-filter');
        $("#portfilio .active").removeClass("active")
        if (value == "all")
        {
            $('#portfilio .filter').show('1000');
            checkVisible = $("#portfilio .gallery_product:visible").length;
        } else {
            $("#portfilio .filter").not('.'+value).hide();
            $('#portfilio .filter').filter('.'+value).show('3000');
            checkVisible = $("#portfilio .gallery_product:visible").length;
        }
        
        if (checkVisible > 1) {
            $("#portfilio .gallery_product:visible:nth-child(even)").addClass("deviation");
        } else {
            $("#portfilio .gallery_product:visible:nth-child(even)").removeClass("deviation");
        }

    });    

    $(this).addClass("active");
    $("#portfilio .gallery_product:visible:nth-child(even)").addClass("deviation");

    $("#passion #passion-video .play-bt").click(function() {
        $("#passion #passion-video .play-bt").hide();
        $("#passion #passion-video .pause-bt").show();
        var intro_video = document.getElementById("intro_video");
        intro_video.play();
    });
    $("#passion #passion-video .pause-bt").click(function() {
        $("#passion #passion-video .play-bt").show();
        $("#passion #passion-video .pause-bt").hide();
        $("#passion #passion-video .pause-bt").addClass("active");
        var intro_video = document.getElementById("intro_video");
        intro_video.pause();
    });
});