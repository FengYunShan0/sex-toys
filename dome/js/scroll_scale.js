(()=>{
        let t = .5;
        let e = 20;
        !function() {
            const e = document.querySelectorAll("[data-scroll-zoom]");
            let n = 0;
            t /= 100;
            const o = {
                rootMargin: "600px 0px 600px 0px"
            };
            function r(t) {
                const e = t.parentNode
                    , n = window.innerHeight
                    , o = window.scrollY
                    , r = e.getBoundingClientRect().top + o
                    , c = e.offsetHeight;
                if (r > o + n)
                    return 0;
                if (r + c < o)
                    return 100;
                {
                    let t = (o + n - r) / ((n + c) / 100);
                    return t = Math.round(t),
                        t
                }
            }
            e.forEach((e=>{
                    let c = !1;
                    new IntersectionObserver(((t,e)=>{
                            t.forEach((t=>{
                                    c = t.isIntersecting
                                }
                            ))
                        }
                    ),o).observe(e),
                        window.innerWidth > 1279 ? e.style.transform = "scale(".concat(1 + t * r(e), ")") : e.style.transform = "scale(".concat(1.5 - t * r(e), ")"),
                        window.addEventListener("scroll", (()=>{
                                c && (n = window.pageYOffset,
                                    window.innerWidth > 1279 ? e.style.transform = "scale(".concat(1 + t * r(e), ")") : e.style.transform = "scale(".concat(1.5 - t * r(e), ")"))
                            }
                        ))
                }
            ))
        }(),
            function() {
                const t = document.querySelectorAll("[data-scroll-text]");
                let n = 0;
                e /= 10;
                const o = {
                    rootMargin: "600px 0px 600px 0px"
                };
                function r(t) {
                    const e = t.parentNode
                        , n = window.innerHeight
                        , o = window.scrollY
                        , r = e.getBoundingClientRect().top + o
                        , c = e.offsetHeight;
                    if (r > o + n)
                        return 0;
                    if (r + c < o)
                        return 100;
                    {
                        let t = (o + n - r) / ((n + c) / 100);
                        return t = Math.round(t),
                            t
                    }
                }
                t.forEach((t=>{
                        let c = !1;
                        new IntersectionObserver(((t,e)=>{
                                t.forEach((t=>{
                                        c = t.isIntersecting
                                    }
                                ))
                            }
                        ),o).observe(t),
                            t.style.transform = "translateY(".concat(1 + e * r(t), "px)"),
                            window.addEventListener("scroll", (()=>{
                                    c && (n = window.pageYOffset,
                                        t.style.transform = "translateY(-".concat(1 + e * r(t), "px)"))
                                }
                            ))
                    }
                ))
            }(),
            function() {
                campaignText = document.querySelectorAll(".mobileScrollAppear"),
                    campaignTextButton = document.querySelectorAll(".mobileScrollAppearButton");
                var t = new IntersectionObserver((function(t, e) {
                        t.forEach((function(t) {
                                t.isIntersecting ? t.target.classList.add("active") : (t.target.classList.remove("active"),
                                t.boundingClientRect.y > 0 && t.target.classList.remove("active"))
                            }
                        ))
                    }
                ),{
                    rootMargin: "-100px 0px -100px 0px"
                });
                "undefined" != typeof campaignText && null != campaignText && campaignText.forEach((function(e) {
                        t.observe(e)
                    }
                )),
                "undefined" != typeof campaignTextButton && null != campaignTextButton && campaignTextButton.forEach((function(e) {
                        t.observe(e)
                    }
                ))
            }()
    }
)();
