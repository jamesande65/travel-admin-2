$(document).ready(function(){
    initSorting();

    $('#fileUpload').change(function() {
        uploadImgPreview(this);
    });
});


function initSorting() {
    $(".js-sorted").sortable({
        handle: ".js-move-card",
        connectWith: ".connected",
    }).disableSelection();

    $( ".js-sorted" ).on( "sortstop", function() {
        numerationUpdate();
    });
}

function numerationUpdate() {
    $('.js-sorted').each(function (){
        var cards = $(this).find('.cards__item');
        var cardsQuant = $(this).find('.cards__item').length;

        for (var i = 0; i < cardsQuant; i++) {
            cards[i].dataset.num = i+1;
            $(cards[i]).find('.number').text(i+1);
        }
    });
}

function uploadImgPreview(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var newUrl = e.target.result;
            $('#upload-img').attr('src', newUrl);
            $('#upload-img').show();
        }

        reader.readAsDataURL(input.files[0]);
    }
}