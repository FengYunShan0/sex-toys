(()=>{
        var e = {
            798: ()=>{
                !function(e, a) {
                    a.behaviors.initHeader = {
                        attach: function(a, o) {
                            e("#header", a).once("initHeader").each((function() {
                                    const a = e(window)
                                        , o = e("body")
                                        , r = e("#header");
                                    let s = 0
                                        , l = e(".lfi_promo")
                                        , t = e(".basic_page");
                                    function n() {
                                        a.scrollTop() > 1 ? (r.addClass("header--scroll"),
                                            o.addClass("body-scroll")) : (r.removeClass("header--scroll"),
                                            o.removeClass("body-scroll")),
                                        o.hasClass("promobar-active") && (window.innerWidth > 767 ? a.scrollTop() < 85 ? (r.css("top", 85 - a.scrollTop() + "px"),
                                            o.addClass("promo-on")) : (r.removeAttr("style"),
                                            o.removeClass("promo-on")) : a.scrollTop() < 66 ? (r.css("top", "66px"),
                                            o.addClass("promo-on"),
                                            r.addClass("animate-header")) : (r.removeAttr("style"),
                                            r.removeClass("animate-header"),
                                            o.removeClass("promo-on"))),
                                            a.scrollTop() >= 700 && !t.length || a.scrollTop() >= 300 && t.length || r.hasClass("notTransparent") ? r.hasClass("invertHeader") ? r.addClass("whiteHeader") : r.addClass("darkHeader") : r.hasClass("invertHeader") ? r.removeClass("whiteHeader") : r.removeClass("darkHeader");
                                        let l = e(this).scrollTop();
                                        l > s ? o.removeClass("nav-down").addClass("nav-up") : o.removeClass("nav-up").addClass("nav-down"),
                                            s = l
                                    }
                                    l.length && o.addClass("promobar-active"),
                                        a.on({
                                            scroll: function() {
                                                n()
                                            },
                                            resize: function() {
                                                n()
                                            }
                                        }),
                                        n()
                                }
                            ))
                        }
                    }
                }(jQuery, Drupal)
            }
        }
            , a = {};
        function o(r) {
            var s = a[r];
            if (void 0 !== s)
                return s.exports;
            var l = a[r] = {
                exports: {}
            };
            return e[r](l, l.exports, o),
                l.exports
        }
        o.n = e=>{
            var a = e && e.__esModule ? ()=>e.default : ()=>e;
            return o.d(a, {
                a
            }),
                a
        }
            ,
            o.d = (e,a)=>{
                for (var r in a)
                    o.o(a, r) && !o.o(e, r) && Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: a[r]
                    })
            }
            ,
            o.o = (e,a)=>Object.prototype.hasOwnProperty.call(e, a),
            (()=>{
                    "use strict";
                    o(798)
                }
            )()
    }
)();
