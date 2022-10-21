(function($, win) {

    var Bond = function() {
        this.ajaxUrl = {
            packageList: 'https://www.myafq.com/advanceMargin/marginPackage/packageList'
        }
    }

    $.extend(Bond.prototype, {

        /**
         * 顶部导航返回按钮
         */
        initNavBack: function() {
            $('.nav-tool__icon').on('click', function() {
                win.location.href = 'https://evllis.github.io/5g';
            });
        },

        initSwiper: function() {
            var mySwiper = new Swiper('.swiper', {
                initialSlide: 0,
                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-pagination'
                },
            })
        },

        getPackageList: function() {
            $.ajax({
                url: this.ajaxUrl.packageList,
                type: 'POST',
                data: {},
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function(res) {
                    console.log(11111111, res);
                },
                error: function(err) {
                    console.log(222222222, err);
                }
            });
        },

        init: function() {
            this.initNavBack();
            this.initSwiper();
            this.getPackageList();
        }

    });

    var bond = new Bond();
    bond.init();
    win.bond = bond;

})(jQuery, window);
