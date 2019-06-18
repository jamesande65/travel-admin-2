$(document).ready(function(){
    initKVSNavigation();
    mobileProfileToggler();
    dropdownsToggler();
    if ($(window).width() < 751) {
        mobileSearchToggler();
    }
});


function initKVSNavigation() {
    var nav = priorityNav.init({
        breakPoint: 1,
        initClass: 'js-nav-priority',
        mainNavWrapper: '.js-nav-priority',
        navDropdownClassName: 'navigation__dropdown',
        navDropdownToggleClassName: 'navigation__dropdown-toggle',
        navDropdownLabel: '\n                <span class="navigation__icon">\n                    <svg class="icon icon--dots">\n                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#dots"></use>\n                    </svg>\n                </span>\n                ',
        navDropdownBreakpointLabel: '\n                <span class="navigation__icon">\n                    <svg class="icon icon--dots">\n                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#dots"></use>\n                    </svg>\n                </span>\n                '
    });
}

function mobileSearchToggler() {
    $(".js-open-search").on('click', function () {
        var $parent = $('.js-search');

        if ($parent.css('display') == 'none') {
            $parent.show();
        } else {
            $parent.hide();
        }
    });

    $(".js-wrapper").on('click', function(event) {
        if (!$(event.target).closest(".js-open-search").length && !$(event.target).closest(".js-search").length) {
            $('.js-search').hide();
        }
    });
}

function mobileProfileToggler() {
    $(".js-open-user").on('click', function () {
        var $parent = $(this).find($('.js-profile-drop'));

        if ($parent.css('display') == 'none') {
            $parent.show();
        } else {
            $parent.hide();
        }
    });

    $(".js-profile").on('click', function () {
        var $parent = $(this).find($('.js-profile-drop'));

        if ($parent.css('display') == 'none') {
            $parent.show();
        } else {
            $parent.hide();
        }
    });

    $(".js-wrapper").on('click', function(event) {
        if (!$(event.target).closest(".js-profile").length && !$(event.target).closest(".js-open-user").length && !$(event.target).closest(".js-profile-drop").length) {
            $('.js-profile-drop').hide();
        }
    });
}

function dropdownsToggler() {
    $(".js-dropdown").on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $(".js-wrapper").on('click', function(event) {
        if (!$(event.target).closest(".js-dropdown").length) {
            if ($(".js-dropdown").hasClass("active")) {
                $(".js-dropdown").removeClass("active");
            }
        }
    });
}