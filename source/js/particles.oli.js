$(function () {
    // var $particle = $('#particles-oli-wrapper').css({ display: 'none'}).removeClass('hide');
    var $navH1 = $('.index-wrapper header h1, .index-wrapper header nav').hide();

    var $header = $('.index-wrapper .hide')
                    .removeClass('hide')
                    .css({
                        height: 0
                    })
                    .animate({
                        height: 120
                    }, 300, function() {
                        // $particle.fadeIn(600);
                        $navH1.fadeIn(300);
                    });

    $('.index-nav__link').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        
        // $particle.fadeOut(600);
        $navH1.fadeOut(100);

        $header.animate({
            height: 0,
            padding: 0
        }, 300, function() {
            window.location.href = $this.attr('href');
        });
    });

});
