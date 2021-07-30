$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><i class="fas fa-arrow-alt-circle-left"></i></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><i class="fas fa-arrow-alt-circle-right"></i></button>',
        responsive:[
            {
                breakpoint:969,
                settings:{
                    arrows:false
                }
            }
        ]
    });
  
    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab-active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).addClass('tabs-content--active');



    })

    $('.product-item__favourite').on('click', function () {
        $(this).toggleClass('product-item__favourite--active')

    })
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><i class="fas fa-arrow-alt-circle-left"></i></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><i class="fas fa-arrow-alt-circle-right"></i></button>',
        responsive:[
            {
                breakpoint:1301,
                settings:{
                    arrows:false,
                    dots:true

                }
            },
            {
               breakpoint:1101,
                settings:{
                slidesToShow:3,
                dots:true,
                arrows:false
             }
             
            },
            {
                breakpoint:870,
                settings:{
                slidesToShow:2,
                dots:true,
                arrows:false
             }
            },
            {
                breakpoint:590,
                settings:{
                slidesToShow:2,
                dots:true,
                arrows:false
             }
            }
          
        ]


    })

    $('.menu__btn').on('click', function(){
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
    })

    $('.footer__topdrop').on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass('footer__topdrop--active');

    })


});