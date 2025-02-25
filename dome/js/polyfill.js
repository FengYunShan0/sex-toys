!function() {
    "use strict";
    if ("object" == typeof window)
        if ("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype)
            "isIntersecting"in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                get: function() {
                    return this.intersectionRatio > 0
                }
            });
        else {
            var t = function(t) {
                for (var e = window.document, n = i(e); n; )
                    n = i(e = n.ownerDocument);
                return e
            }()
                , e = []
                , n = null
                , o = null;
            s.prototype.THROTTLE_TIMEOUT = 100,
                s.prototype.POLL_INTERVAL = null,
                s.prototype.USE_MUTATION_OBSERVER = !0,
                s._setupCrossOriginUpdater = function() {
                    return n || (n = function(t, n) {
                            o = t && n ? l(t, n) : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            },
                                e.forEach((function(t) {
                                        t._checkForIntersections()
                                    }
                                ))
                        }
                    ),
                        n
                }
                ,
                s._resetCrossOriginUpdater = function() {
                    n = null,
                        o = null
                }
                ,
                s.prototype.observe = function(t) {
                    if (!this._observationTargets.some((function(e) {
                            return e.element == t
                        }
                    ))) {
                        if (!t || 1 != t.nodeType)
                            throw new Error("target must be an Element");
                        this._registerInstance(),
                            this._observationTargets.push({
                                element: t,
                                entry: null
                            }),
                            this._monitorIntersections(t.ownerDocument),
                            this._checkForIntersections()
                    }
                }
                ,
                s.prototype.unobserve = function(t) {
                    this._observationTargets = this._observationTargets.filter((function(e) {
                            return e.element != t
                        }
                    )),
                        this._unmonitorIntersections(t.ownerDocument),
                    0 == this._observationTargets.length && this._unregisterInstance()
                }
                ,
                s.prototype.disconnect = function() {
                    this._observationTargets = [],
                        this._unmonitorAllIntersections(),
                        this._unregisterInstance()
                }
                ,
                s.prototype.takeRecords = function() {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [],
                        t
                }
                ,
                s.prototype._initThresholds = function(t) {
                    var e = t || [0];
                    return Array.isArray(e) || (e = [e]),
                        e.sort().filter((function(t, e, n) {
                                if ("number" != typeof t || isNaN(t) || t < 0 || t > 1)
                                    throw new Error("threshold must be a number between 0 and 1 inclusively");
                                return t !== n[e - 1]
                            }
                        ))
                }
                ,
                s.prototype._parseRootMargin = function(t) {
                    var e = (t || "0px").split(/\s+/).map((function(t) {
                            var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                            if (!e)
                                throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(e[1]),
                                unit: e[2]
                            }
                        }
                    ));
                    return e[1] = e[1] || e[0],
                        e[2] = e[2] || e[0],
                        e[3] = e[3] || e[1],
                        e
                }
                ,
                s.prototype._monitorIntersections = function(e) {
                    var n = e.defaultView;
                    if (n && -1 == this._monitoringDocuments.indexOf(e)) {
                        var o = this._checkForIntersections
                            , r = null
                            , s = null;
                        if (this.POLL_INTERVAL ? r = n.setInterval(o, this.POLL_INTERVAL) : (h(n, "resize", o, !0),
                            h(e, "scroll", o, !0),
                        this.USE_MUTATION_OBSERVER && "MutationObserver"in n && (s = new n.MutationObserver(o)).observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })),
                            this._monitoringDocuments.push(e),
                            this._monitoringUnsubscribes.push((function() {
                                    var t = e.defaultView;
                                    t && (r && t.clearInterval(r),
                                        c(t, "resize", o, !0)),
                                        c(e, "scroll", o, !0),
                                    s && s.disconnect()
                                }
                            )),
                        e != (this.root && this.root.ownerDocument || t)) {
                            var u = i(e);
                            u && this._monitorIntersections(u.ownerDocument)
                        }
                    }
                }
                ,
                s.prototype._unmonitorIntersections = function(e) {
                    var n = this._monitoringDocuments.indexOf(e);
                    if (-1 != n) {
                        var o = this.root && this.root.ownerDocument || t
                            , r = this._observationTargets.some((function(t) {
                                var n = t.element.ownerDocument;
                                if (n == e)
                                    return !0;
                                for (; n && n != o; ) {
                                    var r = i(n);
                                    if ((n = r && r.ownerDocument) == e)
                                        return !0
                                }
                                return !1
                            }
                        ));
                        if (!r) {
                            var s = this._monitoringUnsubscribes[n];
                            if (this._monitoringDocuments.splice(n, 1),
                                this._monitoringUnsubscribes.splice(n, 1),
                                s(),
                            e != o) {
                                var h = i(e);
                                h && this._unmonitorIntersections(h.ownerDocument)
                            }
                        }
                    }
                }
                ,
                s.prototype._unmonitorAllIntersections = function() {
                    var t = this._monitoringUnsubscribes.slice(0);
                    this._monitoringDocuments.length = 0,
                        this._monitoringUnsubscribes.length = 0;
                    for (var e = 0; e < t.length; e++)
                        t[e]()
                }
                ,
                s.prototype._checkForIntersections = function() {
                    if (this.root || !n || o) {
                        var t = this._rootIsInDom()
                            , e = t ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                        this._observationTargets.forEach((function(o) {
                                var i = o.element
                                    , s = u(i)
                                    , h = this._rootContainsTarget(i)
                                    , c = o.entry
                                    , a = t && h && this._computeTargetAndRootIntersection(i, s, e)
                                    , l = o.entry = new r({
                                    time: window.performance && performance.now && performance.now(),
                                    target: i,
                                    boundingClientRect: s,
                                    rootBounds: n && !this.root ? null : e,
                                    intersectionRect: a
                                });
                                c ? t && h ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l) : c && c.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
                            }
                        ), this),
                        this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }
                }
                ,
                s.prototype._computeTargetAndRootIntersection = function(e, i, r) {
                    if ("none" != window.getComputedStyle(e).display) {
                        for (var s, h, c, a, f, d, g, m, v = i, _ = p(e), b = !1; !b && _; ) {
                            var w = null
                                , y = 1 == _.nodeType ? window.getComputedStyle(_) : {};
                            if ("none" == y.display)
                                return null;
                            if (_ == this.root || 9 == _.nodeType)
                                if (b = !0,
                                _ == this.root || _ == t)
                                    n && !this.root ? !o || 0 == o.width && 0 == o.height ? (_ = null,
                                        w = null,
                                        v = null) : w = o : w = r;
                                else {
                                    var I = p(_)
                                        , E = I && u(I)
                                        , T = I && this._computeTargetAndRootIntersection(I, E, r);
                                    E && T ? (_ = I,
                                        w = l(E, T)) : (_ = null,
                                        v = null)
                                }
                            else {
                                var R = _.ownerDocument;
                                _ != R.body && _ != R.documentElement && "visible" != y.overflow && (w = u(_))
                            }
                            if (w && (s = w,
                                h = v,
                                c = void 0,
                                a = void 0,
                                f = void 0,
                                d = void 0,
                                g = void 0,
                                m = void 0,
                                c = Math.max(s.top, h.top),
                                a = Math.min(s.bottom, h.bottom),
                                f = Math.max(s.left, h.left),
                                d = Math.min(s.right, h.right),
                                m = a - c,
                                v = (g = d - f) >= 0 && m >= 0 && {
                                    top: c,
                                    bottom: a,
                                    left: f,
                                    right: d,
                                    width: g,
                                    height: m
                                } || null),
                                !v)
                                break;
                            _ = _ && p(_)
                        }
                        return v
                    }
                }
                ,
                s.prototype._getRootRect = function() {
                    var e;
                    if (this.root)
                        e = u(this.root);
                    else {
                        var n = t.documentElement
                            , o = t.body;
                        e = {
                            top: 0,
                            left: 0,
                            right: n.clientWidth || o.clientWidth,
                            width: n.clientWidth || o.clientWidth,
                            bottom: n.clientHeight || o.clientHeight,
                            height: n.clientHeight || o.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(e)
                }
                ,
                s.prototype._expandRectByRootMargin = function(t) {
                    var e = this._rootMarginValues.map((function(e, n) {
                            return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                        }
                    ))
                        , n = {
                        top: t.top - e[0],
                        right: t.right + e[1],
                        bottom: t.bottom + e[2],
                        left: t.left - e[3]
                    };
                    return n.width = n.right - n.left,
                        n.height = n.bottom - n.top,
                        n
                }
                ,
                s.prototype._hasCrossedThreshold = function(t, e) {
                    var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1
                        , o = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (n !== o)
                        for (var i = 0; i < this.thresholds.length; i++) {
                            var r = this.thresholds[i];
                            if (r == n || r == o || r < n != r < o)
                                return !0
                        }
                }
                ,
                s.prototype._rootIsInDom = function() {
                    return !this.root || f(t, this.root)
                }
                ,
                s.prototype._rootContainsTarget = function(e) {
                    return f(this.root || t, e) && (!this.root || this.root.ownerDocument == e.ownerDocument)
                }
                ,
                s.prototype._registerInstance = function() {
                    e.indexOf(this) < 0 && e.push(this)
                }
                ,
                s.prototype._unregisterInstance = function() {
                    var t = e.indexOf(this);
                    -1 != t && e.splice(t, 1)
                }
                ,
                window.IntersectionObserver = s,
                window.IntersectionObserverEntry = r
        }
    function i(t) {
        try {
            return t.defaultView && t.defaultView.frameElement || null
        } catch (t) {
            return null
        }
    }
    function r(t) {
        this.time = t.time,
            this.target = t.target,
            this.rootBounds = a(t.rootBounds),
            this.boundingClientRect = a(t.boundingClientRect),
            this.intersectionRect = a(t.intersectionRect || {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: 0,
                height: 0
            }),
            this.isIntersecting = !!t.intersectionRect;
        var e = this.boundingClientRect
            , n = e.width * e.height
            , o = this.intersectionRect
            , i = o.width * o.height;
        this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
    }
    function s(t, e) {
        var n, o, i, r = e || {};
        if ("function" != typeof t)
            throw new Error("callback must be a function");
        if (r.root && 1 != r.root.nodeType)
            throw new Error("root must be an Element");
        this._checkForIntersections = (n = this._checkForIntersections.bind(this),
                o = this.THROTTLE_TIMEOUT,
                i = null,
                function() {
                    i || (i = setTimeout((function() {
                            n(),
                                i = null
                        }
                    ), o))
                }
        ),
            this._callback = t,
            this._observationTargets = [],
            this._queuedEntries = [],
            this._rootMarginValues = this._parseRootMargin(r.rootMargin),
            this.thresholds = this._initThresholds(r.threshold),
            this.root = r.root || null,
            this.rootMargin = this._rootMarginValues.map((function(t) {
                    return t.value + t.unit
                }
            )).join(" "),
            this._monitoringDocuments = [],
            this._monitoringUnsubscribes = []
    }
    function h(t, e, n, o) {
        "function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
    }
    function c(t, e, n, o) {
        "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
    }
    function u(t) {
        var e;
        try {
            e = t.getBoundingClientRect()
        } catch (t) {}
        return e ? (e.width && e.height || (e = {
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            width: e.right - e.left,
            height: e.bottom - e.top
        }),
            e) : {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }
    }
    function a(t) {
        return !t || "x"in t ? t : {
            top: t.top,
            y: t.top,
            bottom: t.bottom,
            left: t.left,
            x: t.left,
            right: t.right,
            width: t.width,
            height: t.height
        }
    }
    function l(t, e) {
        var n = e.top - t.top
            , o = e.left - t.left;
        return {
            top: n,
            left: o,
            height: e.height,
            width: e.width,
            bottom: n + e.height,
            right: o + e.width
        }
    }
    function f(t, e) {
        for (var n = e; n; ) {
            if (n == t)
                return !0;
            n = p(n)
        }
        return !1
    }
    function p(e) {
        var n = e.parentNode;
        return 9 == e.nodeType && e != t ? i(e) : n && 11 == n.nodeType && n.host ? n.host : n && n.assignedSlot ? n.assignedSlot.parentNode : n
    }
}();
