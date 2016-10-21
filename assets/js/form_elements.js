$(document).ready(function() {
    //Dropdown menu - select2 plug-in
    $(".source").select2();
    $(".filter-toggle").on('click', function() {
    	$(this).removeClass('border-radius');
        if ($('.filter-section').is(":visible")) {
            $(".filter-section").slideUp('normal');
            $(this).addClass('border-radius');
            $(".submit-filter").hide();
        }else{
        	$(".filter-section").slideDown();
            $(".submit-filter").fadeIn('slow');
        }
    });
});
