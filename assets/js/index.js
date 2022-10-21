(function($, win) {

    var Bond = function() {
        this.ajaxUrl = {
            packageList: 'https://www.techwis.cn/advanceMargin/marginPackage/packageList'
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

        renderSwiperHTML: function(res) {
            var html = '';
            res.forEach(function(item) {
                html += '<div class="swiper-slide main-page__header-container-item" data-code="'+ item.packageCode +'">\
                            <div class="main-page__header-container-mark">享直降</div>\
                            <div class="main-page__header-container-wrap">\
                                <div class="main-page__header-container-amount">\
                                    <span class="amount">'+ item.downAmount +'</span>\
                                    <span class="amount-unit">元</span>\
                                </div>\
                                <div class="main-page__header-container-desc">'+ item.packageDesc +'</div>\
                            </div>\
                            <div class="main-page__header-container-bank"></div>\
                            <div class="main-page__header-container-money">\
                                <span class="money">'+ item.packageAmount +'</span>\
                                <span class="money-unit">元/月</span>\
                            </div>\
                        </div>';
            });
            $('.swiper-wrapper').html(html);
            this.initSwiper();
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

        showMsg: function(msg) {
            $.msg({
                bgPath: '/lib/jquery-msg/',
                content: msg
            });
        },

        getPackageList: function() {
            var that = this;
            console.log(55555555, this.ajaxUrl.packageList);
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
                    if (String(res.returnCode) === '1000') {
                        that.renderSwiperHTML((res.data && res.data.length) ? res.data : []);
                    } else {
                        that.showMsg(res.returnMsg);
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    that.showMsg(textStatus);
                }
            });
        },

        init: function() {
            this.initNavBack();
            this.getPackageList();
        }

    });

    var bond = new Bond();
    bond.init();
    win.bond = bond;

})(jQuery, window);
