$(document).ready(function() {		
    $('.progress .progress-bar').progressbar({display_text: 'fill'});
    $('[rel="popover"]').popover({
        container: 'body',
        html: true,
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });

    $('#tab-4 a.avail-link').click(function () {
        $('.btn-add').hide();
    });
    $('#tab-4 a.fav-link').click(function () {
        $('.btn-add').show();
    });
    $("#abc").on("change", function() {  
       alert($(this).val());
    });

    $(".modal1").click(function () {
        $('#modal1').modal('show');
    });
    $(".modal2").click(function () {
        $('#modal2').modal('show');
    });
    $(".modal3").click(function () {
        $('#modal3').modal('show');
    });
    $(".modal4").click(function () {
        $('#modal4').modal('show');
    });
    $(".modal5").click(function () {
        $('#modal5').modal('show');
    });
});