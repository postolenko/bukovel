$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
    bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;


    var footerPositionInterval;
    var footerBottomCoor = $(".footer").offset().top +  $(".footer").height();

    // -----------------------

    var numSlideCount = $(".for-slider-main .slick-dots li").length - 1;
    var numSlideIndex = 0;

    // -----------------------
    
    var projectSliderLength = $(".project-slider-box").length - 1;
    var projectSliderIndex = 0;

    // -----------------------

    var countSliderCol = $(".project-slider-box .project-slider-col").length - 1;
    var countSliderColFor = 0;
    var colHeightArr = [];

    // -----------------------

    // For Accordions

    var countAcc = $(".accordion").length - 1;

    var countAccIndex = 0;

    var countAccItems = $(".accordion .accordion-item").length - 1;

    var countAccItemsIndex = 0;
    var indexAccordionItem;

    var indexAccordion;

    // -----------------------

    // Выпадающие списки Footer

    var attrId;

    // -----------------------

    // Для попапов

    var srcAttrVideo;

    // -----------------------

    // Для карты

    var mapBlockHeight;
    var mapBlockHoverHeight;
    var indexMapMarker;
    var objectInfoHtml;


    // -----------------------

    // Для табов

    var countItemsTabMenuFor;
    var countItemsTabMenu = $(".card_tab_link").length - 1;
    var dataAttrTab;

    // ------------------------------------------------------

    // Для слайда Наград и Сертификатов

    var indexAwardSlide;

    var urlBigAwardPhoto;

    // ------------------------------------------------------

    if( bodyWidth > 768) {

        getHeightSliderObject();

    }


    // --------------------------------------------------------------------------------------------------

    var bottomCoorMainNav;

    var topCoorBreadcrumbs;

    var offsetTop;

    var module = 1;

    var breadcrumbsPositionInterval;

    // --------------------------------------------------------------------------------------------------

    $(window).resize(function() {

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        bodyHeight = w.innerHeight || e.clientHeight || g.clientHeight;


        $(".popup-calback .callback-box").css({
                                    "top" : ( $(window).height() - $(".callback-box").height() ) / 2 + "px",
                                    "left" : ( $(window).width() - $(".callback-box").width() ) / 2 + "px",
                                    });

        $(".popup-video .popup-video-box").css({
                                        "top" : ( $(window).height() - $(".popup-video-box").height() ) / 2 + "px",
                                        "left" : ( $(window).width() - $(".popup-video-box").width() ) / 2 + "px",
                                    });

        $(".popup-credit .popup-credit-box").css({
                                    "top" : ( $(window).height() - $(".popup-credit-box").height() ) / 2 + "px",
                                    "left" : ( $(window).width() - $(".popup-credit-box").width() ) / 2 + "px",
                                    });

        $(".popup-credit .popup-credit-result-box").css({
                                    "top" : ( $(window).height() - $(".popup-credit-result-box").height() ) / 2 + "px",
                                    "left" : ( $(window).width() - $(".popup-credit-result-box").width() ) / 2 + "px",
                                    });

        $(".award-big-image-box").css({
                                "top": ( $(window).height() - $(".award-big-image-box").outerHeight(true) ) / 2 + "px",
                                "left": ( $(window).width() - $(".award-big-image-box").outerWidth(true) ) / 2 + "px"
                            });

        // ------------------------------------------------------------------------------


        if( $(".slider-main .slick-slide img").height() < $(".slider-main").height() ) {

            $(".slider-main .slick-slide img").css( { "min-height" : $(".slider-main").height() + "px" });

        }

        // ------------------------------------------------------------------------------

        $(".callback-tablet-box").height( $(window).height() - $(".for-tab.for-tab-nav").height() );

        // ------------------------------------------------------------------------------



        // getFooterPosition();

        getNumMainSlides();

        getHeightSliderObject();

        slideInfoPut();

        getBreadcrumbsPosition();


    });

    $(window).scroll(function() {

        showNavigation();

    });

    showNavigation();

    forRespSliders();

    getNumMainSlides();

    slideInfoPut();

    getFooterPosition();

    getBreadcrumbsPosition();



    // ------------------------------------------

    $(function() {

        $(".slider_2 button.slick-prev, .slider_2 button.slick-next").appendTo($(".testimonial-slick-arrows"));

    });

    // --------------------------------------

    $(function() {

      var indexPhotoBox;

        $(".thumbnail .photo-box").hover(function() {

            indexPhotoBox = $(".thumbnail .photo-box").index(this);

            $(".thumbnail .photo-box:eq("+ indexPhotoBox +") .mask .more-link").css({"top" : ( $(".photo-box:eq("+ indexPhotoBox +")").outerHeight(true) - $(".mask:eq("+ indexPhotoBox +") .more-link").outerHeight(true) ) / 2 + "px" });

        });

    });


    // --------------------------------------

    $(".accordion-item").addClass("active");

    $(function() {

        countAcc = $(".accordion").length - 1;

        countAccIndex = 0;

        countAccItems = $(".accordion .accordion-item").length - 1;

        countAccItemsIndex = 0;

        for (countAccIndex = 0; countAccIndex <= countAcc; countAccIndex++) {

            for(countAccItemsIndex = 0; countAccItemsIndex <= countAccItems; countAccItemsIndex++) {

                if (countAccItemsIndex <= 9 ) {

                    $(".accordion:eq("+ countAccIndex +") .accordion-item:eq("+ countAccItemsIndex +") .item-num").text("0" + ( countAccItemsIndex + 1 ) );

                } else {

                    $(".accordion:eq("+ countAccIndex +") .accordion-item:eq("+ countAccItemsIndex +") .item-num").text(countAccItemsIndex);

                }

            }

        }       


        // indexAccordionItem;

        // indexAccordion;


        $(".accordion-item .dropdown-click").click(function() {

            indexAccordionItem = $(".accordion-dropdown .accordion-item .dropdown-click").index(this);

            indexAccordion = $(".accordion-dropdown .accordion-item:eq("+ indexAccordionItem +")").parent(".accordion-dropdown").index();

            $(".accordion-dropdown .accordion-item:eq("+ indexAccordionItem +")").addClass("show-accordion-content");

            $(".accordion-dropdown .accordion-item:eq("+ indexAccordionItem +")").parent(".accordion-dropdown").addClass("active-accordion");

            $(".accordion-dropdown.active-accordion .accordion-item .acoordion-drop-wrapp" ).animate({"height" : 0 + "px" }, 500);

            $(".accordion-dropdown.active-accordion .accordion-item").addClass("active");

            if( $(".accordion-dropdown.active-accordion .accordion-item.show-accordion-content .acoordion-drop-wrapp").outerHeight(true) > 0 ) {

                $(".accordion-dropdown.active-accordion .accordion-item.show-accordion-content .acoordion-drop-wrapp").animate({"height" : 0 + "px" }, 500);

                $(".accordion-dropdown.active-accordion .accordion-item.show-accordion-content").addClass("active");

            } else {

                $(".accordion-dropdown.active-accordion .accordion-item.show-accordion-content .acoordion-drop-wrapp").animate({"height" : $(".accordion-item.show-accordion-content .acoordion-item-txt").outerHeight(true) + "px" }, 300);

                $(".accordion-dropdown.active-accordion .accordion-item.show-accordion-content").removeClass("active");

            }

            $(".accordion-dropdown .accordion-item:eq("+ indexAccordionItem +")").removeClass("show-accordion-content");

            $(".accordion-dropdown.active-accordion").removeClass("active-accordion");

        });

    });

    // --------------------------------------


    // Выпадающие списки Footer

    $(function() {

        // var attrId;

        $(".slide-btn").click(function() {

            // getFooterPosition();

            attrId = $(this).attr("id");

            if( $("#drop_" + attrId).height() > 0 ) {

                $("#drop_" + attrId).animate({"height" : 0 + "px"}, 300);

            } else {

                $("#drop_" + attrId).animate({"height" : $(" #drop_" + attrId + " .slide-block ").height() + "px"}, 300);

                setTimeout(function() {

                    $("#drop_" + attrId).css({"height" : "auto"});

                }, 500);

            }

        });

    });    


    // --------------------------------------

    $(function() {

        $(".call-back-btn, .float-call-back-btn, .call-callback").click(function() {

            if( bodyWidth <= 768 ) {

                $(".popup-calback-tablet").fadeIn(300);

            } else {

                $(".popup-calback").fadeIn(300);

                $(".popup-calback .callback-box").css({
                        "top" : ( $(window).height() - $(".callback-box").height() ) / 2 + "px",
                        "left" : ( $(window).width() - $(".callback-box").width() ) / 2 + "px",
                        });

            }            

        });

        $(".close-popup-btn, .popup-bg").click(function() {

            $(".popup-calback").fadeOut(300);

        });

    });

    // --------------------------------

    // Для попапов


     $(function() {

        // var srcAttrVideo;

        $(".showvideo").click(function(videoLinkEvent) {

            videoLinkEvent.preventDefault();

            $(".popup-video").fadeIn(300);

            $(".popup-video .popup-video-box").css({
                                        "top" : ( $(window).height() - $(".popup-video-box").height() ) / 2 + "px",
                                        "left" : ( $(window).width() - $(".popup-video-box").width() ) / 2 + "px",
                                    });

        });

        $(".popup-video-box .close-popup-btn, .popup-video > .popup-bg").click(function() {

            srcAttrVideo = $(".popup-video iframe").attr("src");

            $(".popup-video iframe").attr("src", srcAttrVideo + "?enablejsapi=1");

            document.getElementById('video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');

            $(".popup-video iframe").attr("src", srcAttrVideo);

            setTimeout(function() {

                $(".popup-video").fadeOut(300);

            }, 300);

        });

    });


     $(function() {

        $(".credit-btn").click(function() {

            $(".popup-credit").fadeIn(300);

            if( bodyWidth <= 768) {

                $(".popupcredit-tablet").fadeIn(300);

            }

            if( bodyWidth > 768) {

                $(".popup-credit .popup-credit-box").css({
                                        "top" : ( $(window).height() - $(".popup-credit-box").height() ) / 2 + "px",
                                        "left" : ( $(window).width() - $(".popup-credit-box").width() ) / 2 + "px",
                                        });

            }

        });

        $(".close-popup-btn, .popup-bg").click(function() {

            $(".popup-credit").fadeOut(300);

            if( bodyWidth <= 768) {

                $(".popupcredit-tablet").fadeOut(300);

            }

        });

     });


    $(function() {

         $(".popup-credit-result-box").css({
                                    "top" : ( $(window).height() - $(".popup-credit-result-box").height() ) / 2 + "px",
                                    "left" : ( $(window).width() - $(".popup-credit-result-box").width() ) / 2 + "px",
                                    });

         $(".close-popup-btn, .popup-bg").click(function() {

            $(".popup-credit-result").fadeOut(300);

        });

    });


    $(function() {

        $(".popup-credit-result-tablet .close-popup-btn, .popup-credit-result-tablet  .popup-bg").click(function() {

            $(".popup-credit-result-tablet").fadeOut(300);

        });

    });

    // --------------------------------------

    // Для карты

    $(function() {

        $(".show-map-btn").click(function() {

            mapBlockHeight = $(".map-img").height();

            mapBlockHoverHeight = $(".map-content").outerHeight(true);

            $(".map-section").toggleClass("show");

            if( $(".map-section").hasClass("show") ) {
                
                $(".map-section").animate({"height" : mapBlockHeight + "px"}, 300);

                $(".show-map-btn span.map-btn-txt").text("Свернуть карту объектов");

                $(".map-object-info").fadeIn(300);

            } else {

                setTimeout(function() {

                    mapBlockHoverHeight = $(".map-content").outerHeight(true);

                    $(".map-section").animate({"height" : mapBlockHoverHeight + "px"}, 300);

                    $(".show-map-btn span.map-btn-txt").text("Раскрыть карту объектов");

                },300);

                $(".map-object-info").fadeOut(300);

            }

        });

        $(".close-map-object-info").click(function() {

            $(".map-object-info").fadeOut(300);

        });

    });



    $(function() {

        // var indexMapMarker;

        // var objectInfoHtml;

        $(".marker-box").click(function(markerEvent) {

            if( $(".map-section").hasClass("show") ) {

                indexMapMarker = $(".marker-box").index(this);

                if( $(".map-object-info") != true) {

                    $(".map-object-info").fadeIn(300);

                }

                objectInfoHtml = $(".marker-box:eq("+ indexMapMarker +") .object-info").html();

                $(".object-info-append").html(objectInfoHtml);
                

            } else {

                markerEvent.preventDefault();

            }           


        });

    });


    // --------------------------------------

    if( $(".slider-main .slick-slide img").height() < $(".slider-main").height() ) {

        $(".slider-main .slick-slide img").css( { "min-height" : $(".slider-main").height() + "px" });

    }

    // --------------------------------------

    $(function() {

        $(".show-hide-filter-btn").click(function() {

            if ( $(".filters-wrapp").height() <= 0 ) {

                $(".filters-wrapp").animate({"height" : $(".filters-content").height() + "px"}, 500);

                $(".filtershow-btn-txt").text("Свернуть");

                $(".filter").addClass("active");

                setTimeout(function() {

                    $(".filters-wrapp").css({"height" : "auto"});

                },600);

            } else {

                $(".filters-wrapp").animate({"height" : 0 + "px"}, 500);

                $(".filtershow-btn-txt").text("Развернуть");

                $(".filter").removeClass("active");

            }

        });

    });

    // ------------------------------------------------------

    $(function() {

    //  Для Табов
    // Определние активного таба при загрузке страницы

        // var countItemsTabMenuFor;
        countItemsTabMenu = $(".card_tab_link").length - 1;

        // var dataAttrTab;

        for (countItemsTabMenuFor = 0; countItemsTabMenuFor <= countItemsTabMenu; countItemsTabMenuFor++) {

                if( $(".card_tab_link:eq("+ countItemsTabMenuFor +")").hasClass("active") ) {

                    dataAttrTab = $(".card_tab_link:eq("+ countItemsTabMenuFor +")").attr("for");

                    for (countItemsTabMenuFor = 0; countItemsTabMenuFor <= countItemsTabMenu; countItemsTabMenuFor++) {

                        if ( $(".card_tab:eq("+ countItemsTabMenuFor +")").attr("id") == dataAttrTab ) {

                            $(".card_tab:eq("+ countItemsTabMenuFor +")").addClass("active");

                        }

                    }

                }

        }


        $(".card_tab_link").click(function() {

            if( !$(this).hasClass("active") ) {

                $(".card_tab").removeClass("active");

                $(".card_tab_link").not($(this)).removeClass("active");                             

                $(this).toggleClass("active");

            }

        });

    });


    // ------------------------------------------------------

    $(function() {

        $(".range-input").click(function() {

            $(this).addClass("active");

        });

        $("div").click(function() {

            if( $(this).hasClass("range-input")) {

                return false;

            } else {

                $(".range-input").removeClass("active");

            }

        });

    });


    // ------------------------------------------------------


    $("section.padding-20:eq(0)").css({"padding": "50px 0 22px 0"});

    // ------------------------------------------------------

    // Для слайда Наград и Сертификатов

    $(function() {

        // var indexAwardSlide;

        // var urlBigAwardPhoto;

        $(".award-photo-img").click(function(awardPhoto) {

            awardPhoto.preventDefault();

            indexAwardSlide = $(".award-photo-img").index(this);

            urlBigAwardPhoto = $(this).attr("data-url");

            $(".award-big-image").attr("src", urlBigAwardPhoto);

            $(".award-popup").fadeIn(300);

                 $(".award-big-image-box").css({
                                "top": ( $(window).height() - $(".award-big-image-box").outerHeight(true) ) / 2 + "px",
                                "left": ( $(window).width() - $(".award-big-image-box").outerWidth(true) ) / 2 + "px"
            });

           
        });

        $(".popup-bg, .close-btn-box").click(function() {

            $(".award-popup").fadeOut(300);

        });


    });


    // ------------------------------------------------------

    $(".video-sect_process .video-box .ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true])").css({"position": "absolute !important",
                                                                                                                                    "z-index": "-1 !important"});

    // ------------------------------------------------------

    $(function() {

        $(".respmenubtn").click(function() {

            $(".respmenubtn").toggleClass("respmenubtn-active");

            if( $(".tab-navigation").is(":hidden") ) {

                $(".tab-navigation").fadeIn(300);

            } else if ( $(".tab-navigation").is(":visible") ) {

                $(".tab-navigation").fadeOut(300);

            }


        });

    });

    // ------------------------------------------------------

    $(function() {

        $(".show-sidebar-btn").click(function() {

            if( $(".sidebar").offset().left >= 0 ) {

                $(".sidebar").animate({"left" : -110 + "%"}, 600);

                $(".show-sidebar-btn").removeClass("back");

                $(".show-sidebar-bg").fadeOut(600);

            } else {

                $(".sidebar").animate({"left" : 0 + "%"}, 600);

                $(".show-sidebar-btn").addClass("back");

                $(".show-sidebar-bg").fadeIn(600);

            }

        });

         $(".show-sidebar-bg").click(function() {

            $(".sidebar").animate({"left" : -110 + "%"}, 600);

            $(".show-sidebar-btn").removeClass("back");

            $(".show-sidebar-bg").fadeOut(600);

         });


    });

    // ------------------------------------------------------


    $(function() {   

        $(".phone-resp-btn").click(function() {

            if ( $(".popup-calback-tablet").is(":hidden") ) {            

                $(".popup-calback-tablet").fadeIn(400);

                $(".callback-tablet-box").height( $(window).height() - $(".for-tab.for-tab-nav").height() );

                $(".popup-calback-tablet").css({"top" : $(".for-tab.for-tab-nav").height() + "px"});

                $(".phone-resp-btn").addClass("active");

            } else {

                $(".popup-calback-tablet").fadeOut(400);

                $(".phone-resp-btn").removeClass("active");

            }

        });

    });

    // ------------------------------------------------------

    $(function() {


        $(".focus").click(function() {

            $(".focus-group").removeClass("show-focus");

            if( $(this).hasClass("show-focus") ) {

                return false;

            } else {

                $(this).addClass("show-focus");

            }            

        });

    });

    // ------------------------------------------------------

    // var numSlideCount = $(".for-slider-main .slick-dots li").length - 1;
    // var numSlideIndex = 0;

    function getNumMainSlides() {

        for( numSlideIndex = 0; numSlideIndex <= numSlideCount; numSlideIndex++ ) {

            if( $(".for-slider-main .slick-dots li:eq(" + numSlideIndex + ") span").hasClass("num-slide") ) {

                continue;

            } else {

                $(".for-slider-main .slick-dots li:eq(" + numSlideIndex + ")" ).append("<span class='num-slide'></span>");

                if(numSlideIndex <= 9) {

                    $(".for-slider-main .slick-dots li:eq(" + numSlideIndex + ") span.num-slide").text("0" + ( numSlideIndex + 1 ) );

                } else {

                    $(".for-slider-main .slick-dots li:eq(" + numSlideIndex + ") span.num-slide").text(numSlideIndex + 1);

                } 

            }

                  

        }

    }


    // ---------------------------------------------------------

    function showNavigation() {

        if( $(".main-nav-sect").offset().top >=  $(".show-main-float-nav-coor").height() ) {

            $(".main-nav-sect").css({"display" : "block"})

        } else {

            $(".main-nav-sect").css({"display" : "none"})

        }


    }

    // ---------------------------------------------------------

    function forRespSliders() {

        $(".our-projects-slider .slick-prev.slick-arrow").appendTo(".our-projects-slider-arrows");
        $(".our-projects-slider .slick-next.slick-arrow").appendTo(".our-projects-slider-arrows");

        $(".our-objects-slider-box .slick-prev.slick-arrow").appendTo(".our-objects-slider-arrows");
        $(".our-objects-slider-box .slick-next.slick-arrow").appendTo(".our-objects-slider-arrows");

        $(".service-projects-slider .slick-prev.slick-arrow").appendTo(".service-projects-arrows");
        $(".service-projects-slider .slick-next.slick-arrow").appendTo(".service-projects-arrows");

        $(".slider-slick-with-arrows .slick-prev.slick-arrow").appendTo(".slick-append-arrows");
        $(".slider-slick-with-arrows .slick-next.slick-arrow").appendTo(".slick-append-arrows");

        $(".last-saw-thumbnails-slider .slick-prev.slick-arrow").appendTo(".last-saw-thumbnails-slider-arrows");
        $(".last-saw-thumbnails-slider .slick-next.slick-arrow").appendTo(".last-saw-thumbnails-slider-arrows");

    }


    function getHeightSliderObject() {


        if(bodyWidth > 768 ) {

            $(".project-slider-box .project-slider-col").css({"height": "auto"});

            $(".project-big-slider").css({"height": "auto"});


            projectSliderLength = $(".project-slider-box").length - 1;
            projectSliderIndex = 0;

            if ( projectSliderLength > 0 ) {

                for ( projectSliderIndex = 0; projectSliderIndex <= projectSliderLength; projectSliderIndex++ ) {

                    $(".project-big-slider:eq("+ projectSliderIndex +")").css({"height" : $(".project-slider-box:eq("+ projectSliderIndex +")").height() - $(".project-miniatures-slider:eq("+ projectSliderIndex +")").height() + "px" });

                    countSliderCol = $(".project-slider-box:eq("+ projectSliderIndex +") .project-slider-col").length - 1;
                    countSliderColFor = 0;
                    colHeightArr = [];
                    
                    for (countSliderColFor = 0; countSliderColFor <= countSliderCol; countSliderColFor++) {

                        colHeightArr.push($(".project-slider-box:eq("+ projectSliderIndex +") .project-slider-col:eq("+ countSliderColFor +")").height());

                    }

                    $(".project-slider-box:eq("+ projectSliderIndex +") .project-slider-col").outerHeight(Math.max.apply(null, colHeightArr));

                }

            } else {

                $(".project-big-slider").css({"height" : $(".project-slider-box").height() - $(".project-miniatures-slider").height() + "px" });

                countSliderCol = $(".project-slider-box .project-slider-col").length - 1;
                countSliderColFor = 0;
                colHeightArr = [];

                for (countSliderColFor = 0; countSliderColFor <= countSliderCol; countSliderColFor++) {

                    colHeightArr.push($(".project-slider-box .project-slider-col:eq("+ countSliderColFor +")").height());

                }

                $(".project-slider-box .project-slider-col").outerHeight(Math.max.apply(null, colHeightArr));

            }

        }

    }



    function slideInfoPut() {

        if( bodyWidth <= 768 ) {

            $(".for-resp-slideinfo").height( $(".slide-info-box").height() );

            $(".slide-info-box").appendTo( $(".for-resp-slideinfo") );

            $(".for-resp-slideinfo .morelink-slide").offset({ top: ( $(".slider-main").height() - $(".for-resp-slideinfo .morelink-slide").outerHeight(true) - 15 ) });

        } else {

            $(".for-resp-slideinfo .slide-info-box").appendTo( $(".slide-bottom-row .for-tab") );

            $(".slide-info-box .morelink-slide").attr("style", "top: none")

        }

    }


    function getFooterPosition() {

        footerBottomCoor = $("footer").offset().top + $("footer").height();

        // clearInterval(footerPositionInterval);

        // footerPositionInterval = setTimeout(function() {

            if( ( bodyHeight - footerBottomCoor ) > 0 ) {

                $("footer").addClass("positionbottom");

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

            } else {

                $("footer").removeClass("positionbottom");

            }

        // }, 1000);

    }

    // -------------------------------------------------------------------------------------------------

    // var bottomCoorMainNav;

    // var topCoorBreadcrumbs;

    // var offsetTop;

    // var module = 1;

    // var breadcrumbsPositionInterval;

    function getBreadcrumbsPosition() {

        if( bodyWidth > 768 && $(".inner-page-nav") && $(".breadcrumbs") ) {

            clearInterval( breadcrumbsPositionInterval );

            breadcrumbsPositionInterval = setTimeout(function() {

                bottomCoorMainNav = $(".inner-page-nav").offset().top + $(".inner-page-nav").outerHeight(true);

                topCoorBreadcrumbs = $(".breadcrumbs").offset().top;

                offsetTop = topCoorBreadcrumbs - bottomCoorMainNav;

                module = 1;

                if( offsetTop < 16 ) {

                    if( offsetTop < 0 ) {

                        module = -1;

                    } else {

                        module = 1;

                    }

                    $(".breadcrumbs").css({"margin-top" : module * offsetTop + 16 + "px"});

                } else {

                    $(".breadcrumbs").css({"margin-top" : 0 + "px"});

                }

            },600);

        }

    }

});
