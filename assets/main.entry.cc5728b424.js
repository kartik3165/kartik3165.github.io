function t() {}

function e(t) {
    return t()
}

function n() {
    return Object.create(null)
}

function c(t) {
    t.forEach(e)
}

function r(t) {
    return "function" == typeof t
}

function o(t, e) {
    return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
}

function s(e, ...n) {
    if (null == e) return t;
    const c = e.subscribe(...n);
    return c.unsubscribe ? () => c.unsubscribe() : c
}

function i(t) {
    let e;
    return s(t, (t => e = t))(), e
}

function l(t, e, n) {
    t.$$.on_destroy.push(s(e, n))
}

function a(t, e, n = e) {
    return t.set(n), e
}

function u(t, e) {
    t.appendChild(e)
}

function d(t, e, n) {
    t.insertBefore(e, n || null)
}

function f(t) {
    t.parentNode.removeChild(t)
}

function p(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}

function m(t) {
    return document.createElement(t)
}

function h(t) {
    return document.createTextNode(t)
}

function v() {
    return h(" ")
}

function g(t, e, n, c) {
    return t.addEventListener(e, n, c), () => t.removeEventListener(e, n, c)
}

function y(t, e, n) {
    null == n ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}

function $(t, e) {
    e = "" + e, t.wholeText !== e && (t.data = e)
}

function b(t, e, n) {
    t.classList[n ? "add" : "remove"](e)
}
let w;

function x(t) {
    w = t
}

function E() {
    if (!w) throw new Error("Function called outside component initialization");
    return w
}

function C(t) {
    E().$$.on_mount.push(t)
}

function A() {
    const t = E();
    return (e, n) => {
        const c = t.$$.callbacks[e];
        if (c) {
            const r = function(t, e) {
                const n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, !1, !1, e), n
            }(e, n);
            c.slice().forEach((e => {
                e.call(t, r)
            }))
        }
    }
}
const k = [],
    N = [],
    S = [],
    T = [],
    j = Promise.resolve();
let L = !1;

function _(t) {
    S.push(t)
}
let O = !1;
const M = new Set;

function q() {
    if (!O) {
        O = !0;
        do {
            for (let t = 0; t < k.length; t += 1) {
                const e = k[t];
                x(e), D(e.$$)
            }
            for (x(null), k.length = 0; N.length;) N.pop()();
            for (let t = 0; t < S.length; t += 1) {
                const e = S[t];
                M.has(e) || (M.add(e), e())
            }
            S.length = 0
        } while (k.length);
        for (; T.length;) T.pop()();
        L = !1, O = !1, M.clear()
    }
}

function D(t) {
    if (null !== t.fragment) {
        t.update(), c(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(_)
    }
}
const F = new Set;
let P;

function H(t, e) {
    t && t.i && (F.delete(t), t.i(e))
}

function B(t, e, n, c) {
    if (t && t.o) {
        if (F.has(t)) return;
        F.add(t), P.c.push((() => {
            F.delete(t), c && (n && t.d(1), c())
        })), t.o(e)
    }
}

function R(t) {
    t && t.c()
}

function U(t, n, o, s) {
    const {
        fragment: i,
        on_mount: l,
        on_destroy: a,
        after_update: u
    } = t.$$;
    i && i.m(n, o), s || _((() => {
        const n = l.map(e).filter(r);
        a ? a.push(...n) : c(n), t.$$.on_mount = []
    })), u.forEach(_)
}

function z(t, e) {
    const n = t.$$;
    null !== n.fragment && (c(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
}

function I(t, e) {
    -1 === t.$$.dirty[0] && (k.push(t), L || (L = !0, j.then(q)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
}

function V(e, r, o, s, i, l, a = [-1]) {
    const u = w;
    x(e);
    const d = e.$$ = {
        fragment: null,
        ctx: null,
        props: l,
        update: t,
        not_equal: i,
        bound: n(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(u ? u.$$.context : r.context || []),
        callbacks: n(),
        dirty: a,
        skip_bound: !1
    };
    let p = !1;
    if (d.ctx = o ? o(e, r.props || {}, ((t, n, ...c) => {
            const r = c.length ? c[0] : n;
            return d.ctx && i(d.ctx[t], d.ctx[t] = r) && (!d.skip_bound && d.bound[t] && d.bound[t](r), p && I(e, t)), n
        })) : [], d.update(), p = !0, c(d.before_update), d.fragment = !!s && s(d.ctx), r.target) {
        if (r.hydrate) {
            const t = function(t) {
                return Array.from(t.childNodes)
            }(r.target);
            d.fragment && d.fragment.l(t), t.forEach(f)
        } else d.fragment && d.fragment.c();
        r.intro && H(e.$$.fragment), U(e, r.target, r.anchor, r.customElement), q()
    }
    x(u)
}
class W {
    $destroy() {
        z(this, 1), this.$destroy = t
    }
    $on(t, e) {
        const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return n.push(e), () => {
            const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
        }
    }
    $set(t) {
        var e;
        this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const J = [];

function G(e, n = t) {
    let c;
    const r = [];

    function s(t) {
        if (o(e, t) && (e = t, c)) {
            const t = !J.length;
            for (let t = 0; t < r.length; t += 1) {
                const n = r[t];
                n[1](), J.push(n, e)
            }
            if (t) {
                for (let t = 0; t < J.length; t += 2) J[t][0](J[t + 1]);
                J.length = 0
            }
        }
    }
    return {
        set: s,
        update: function(t) {
            s(t(e))
        },
        subscribe: function(o, i = t) {
            const l = [o, i];
            return r.push(l), 1 === r.length && (c = n(s) || t), o(e), () => {
                const t = r.indexOf(l); - 1 !== t && r.splice(t, 1), 0 === r.length && (c(), c = null)
            }
        }
    }
}

function K({
    type: t,
    label: e,
    value: n
}) {
    window.cronitor && window.cronitor("track", [t, e, n].filter(Boolean).join("."))
}
const Q = window.requestAnimationFrame,
    X = window.setTimeout,
    {
        body: Y
    } = document,
    {
        location: Z
    } = window,
    {
        hostname: tt
    } = Z,
    et = t => new Promise((e => X(e, t))),
    nt = 0,
    ct = 1,
    rt = 2;
let ot = null;
const st = document.querySelector(".js-tv"),
    it = st.querySelector(".js-screen"),
    lt = it.querySelector(".js-content"),
    at = G(!0),
    ut = G(.25),
    dt = G(0),
    ft = G(nt),
    pt = G(nt),
    mt = {
        0: {},
        1: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        2: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        3: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        4: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        5: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        6: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        7: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        8: {
            type: "video",
            duration: null,
            startTimestamp: null
        },
        9: {
            type: "webcam",
            displayName: "AV1"
        }
    },
    ht = Object.keys(mt),
    vt = function(e, n, o) {
        const i = !Array.isArray(e),
            l = i ? [e] : e,
            a = n.length < 2;
        return {
            subscribe: G(o, (e => {
                let o = !1;
                const u = [];
                let d = 0,
                    f = t;
                const p = () => {
                        if (d) return;
                        f();
                        const c = n(i ? u[0] : u, e);
                        a ? e(c) : f = r(c) ? c : t
                    },
                    m = l.map(((t, e) => s(t, (t => {
                        u[e] = t, d &= ~(1 << e), o && p()
                    }), (() => {
                        d |= 1 << e
                    }))));
                return o = !0, p(),
                    function() {
                        c(m), f()
                    }
            })).subscribe
        }
    }([dt], (([t]) => ({
        displayName: t.toString().padStart(2, "0"),
        number: t,
        type: "unknown",
        ...mt[t]
    }))),
    gt = (t, e) => {
        mt[t] = {
            ...mt[t],
            ...e
        }
    },
    yt = () => {
        dt.update((t => {
            const e = t + 1;
            return e >= ht.length ? 0 : e
        }))
    },
    $t = t => {
        dt.set(t)
    },
    bt = () => {
        dt.update((t => {
            const e = t - 1;
            return e < 0 ? ht.length - 1 : e
        }))
    };

function wt() {
    const t = i(ut) - .06666666666666667;
    t < 0 || ut.set(t)
}

function xt() {
    const t = i(ut) + .06666666666666667;
    t > 1 || ut.set(t)
}

function Et() {
    const t = i(ut);
    0 === t ? ut.set(ot) : (ot = t, ut.set(0))
}
const Ct = () => {
    at.update((t => !t))
};

function At() {
    st.addEventListener("animationend", (t => {
        Q((() => "go-to-space" === t.animationName ? Y.setAttribute("space", "floating") : "exit-space" === t.animationName ? Y.removeAttribute("space") : void 0))
    }), {
        once: !0
    }), Q((() => {
        const t = "floating" === Y.getAttribute("space") ? "exiting" : "entering";
        Y.setAttribute("space", t), "entering" === t && K({
            type: "easter_egg",
            label: "space"
        })
    }))
}

function kt() {
    document.querySelectorAll(".js-channel-trigger").forEach((t => {
        t._channelButton || (t._channelButton = !0, t.addEventListener("click", (t => {
            t.preventDefault(), t.target.blur();
            const e = Number(t.target.dataset.channel);
            Number.isNaN(e) || dt.update((t => e === t ? 0 : e))
        })))
    }))
}

function Nt(t, e, n) {
    const c = t.slice();
    return c[6] = e[n], c[8] = n, c
}

function St(t) {
    let e, n, c, r = {
            length: 15
        },
        o = [];
    for (let e = 0; e < r.length; e += 1) o[e] = Tt(Nt(t, r, e));
    return {
        c() {
            e = m("div"), n = h("VOLUME\n    "), c = m("div");
            for (let t = 0; t < o.length; t += 1) o[t].c();
            y(c, "class", "track svelte-1cukcpa"), y(e, "class", "volume glitchy-text svelte-1cukcpa")
        },
        m(t, r) {
            d(t, e, r), u(e, n), u(e, c);
            for (let t = 0; t < o.length; t += 1) o[t].m(c, null)
        },
        p(t, e) {
            if (2 & e) {
                let n;
                for (r = {
                        length: 15
                    }, n = 0; n < r.length; n += 1) {
                    const s = Nt(t, r, n);
                    o[n] ? o[n].p(s, e) : (o[n] = Tt(s), o[n].c(), o[n].m(c, null))
                }
                for (; n < o.length; n += 1) o[n].d(1);
                o.length = r.length
            }
        },
        d(t) {
            t && f(e), p(o, t)
        }
    }
}

function Tt(t) {
    let e, n, c = t[8] <= t[1] ? "|" : "-";
    return {
        c() {
            e = m("div"), n = h(c), y(e, "class", "step")
        },
        m(t, c) {
            d(t, e, c), u(e, n)
        },
        p(t, e) {
            2 & e && c !== (c = t[8] <= t[1] ? "|" : "-") && $(n, c)
        },
        d(t) {
            t && f(e)
        }
    }
}

function jt(e) {
    let n, c = !e[0] && St(e);
    return {
        c() {
            c && c.c(), n = h("")
        },
        m(t, e) {
            c && c.m(t, e), d(t, n, e)
        },
        p(t, [e]) {
            t[0] ? c && (c.d(1), c = null) : c ? c.p(t, e) : (c = St(t), c.c(), c.m(n.parentNode, n))
        },
        i: t,
        o: t,
        d(t) {
            c && c.d(t), t && f(n)
        }
    }
}

function Lt(t, e, n) {
    let c, r;
    l(t, ut, (t => n(2, r = t)));
    let o = !0,
        s = null,
        i = !0;
    return t.$$.update = () => {
        4 & t.$$.dirty && n(1, c = Math.floor(15 * r)), 4 & t.$$.dirty && function() {
            if (i) return i = !1;
            n(0, o = !1), clearTimeout(s), s = X((() => n(0, o = !0)), 2e3)
        }()
    }, [o, c, r]
}
window.addEventListener("visibilitychange", (() => {
        "hidden" === document.visibilityState && localStorage.setItem("timestamps", JSON.stringify(Object.entries(mt).map((([t, e]) => [t, e.startTimestamp]))))
    }), !1), window.addEventListener("contentChange", kt),
    function() {
        const t = JSON.parse(localStorage.getItem("timestamps"));
        null != t && t.forEach((([t, e]) => {
            mt[t].startTimestamp = e
        }))
    }(), kt();
class _t extends W {
    constructor(t) {
        super(), V(this, t, Lt, jt, o, {})
    }
}

function Ot(e) {
    let n, c, r, o, s, i, l, a;
    return {
        c() {
            n = m("div"), c = m("video"), r = v(), o = m("div"), s = m("div"), s.innerHTML = 'REC <span class="svelte-60jbj3"></span>', i = v(), l = m("div"), a = h(e[2]), y(c, "class", "tv-video svelte-60jbj3"), y(c, "channel", "camera"), c.autoplay = !0, y(s, "class", "rec svelte-60jbj3"), y(l, "class", "counter"), y(o, "class", "rec-wrapper big-text glitchy-text svelte-60jbj3"), b(n, "visually-hidden", !e[0] || e[3] === ct)
        },
        m(t, f) {
            d(t, n, f), u(n, c), e[5](c), u(n, r), u(n, o), u(o, s), u(o, i), u(o, l), u(l, a)
        },
        p(t, [e]) {
            4 & e && $(a, t[2]), 9 & e && b(n, "visually-hidden", !t[0] || t[3] === ct)
        },
        i: t,
        o: t,
        d(t) {
            t && f(n), e[5](null)
        }
    }
}

function Mt(t) {
    return t < 10 ? `0${t}` : t
}

function qt(t, e, n) {
    let c;
    l(t, ft, (t => n(3, c = t)));
    const r = A();
    let o, s, i, a, u, d, f = !1;
    async function p() {
        o = await window.navigator.mediaDevices.getUserMedia({
            video: {
                width: {
                    exact: 256
                },
                height: {
                    exact: 144
                }
            }
        }).catch((() => null)), null != o && null != s && (n(1, s.srcObject = o, s), s.addEventListener("playing", (() => {
            r("ready", !0), n(0, f = !0), d = Q((function t(e) {
                null == i && (i = e), n(4, a = e - i), d = Q(t)
            })), Y.setAttribute("camera", "")
        }), {
            once: !0
        }))
    }
    return C((() => (p(), () => {
        Y.removeAttribute("camera"), cancelAnimationFrame(d), o && o.getTracks().forEach((t => t.stop()))
    }))), t.$$.update = () => {
        if (16 & t.$$.dirty) {
            const t = parseInt(a % 1e3 / 100),
                e = Mt(Math.floor(a / 1e3 % 60)),
                c = Mt(Math.floor(a / 6e4 % 60)),
                r = Mt(Math.floor(a / 36e5 % 24));
            n(2, u = `${r}:${c}:${e}.${t}`)
        }
    }, [f, s, u, c, a, function(t) {
        N[t ? "unshift" : "push"]((() => {
            s = t, n(1, s)
        }))
    }]
}
class Dt extends W {
    constructor(t) {
        super(), V(this, t, qt, Ot, o, {})
    }
}

function Ft(e) {
    let n, r, o, s, i, l, a, p;
    return {
        c() {
            n = m("video"), r = m("source"), s = m("source"), r.src !== (o = "/assets/videos/channel-" + e[4].displayName + ".webm") && y(r, "src", o), y(r, "type", "video/webm"), s.src !== (i = "/assets/videos/channel-" + e[4].displayName + ".mp4") && y(s, "src", i), y(s, "type", "video/mp4"), y(n, "class", "tv-video"), y(n, "channel", l = e[4].number), n.playsInline = !0, n.loop = !0, void 0 === e[2] && _((() => e[10].call(n))), b(n, "visually-hidden", !e[1] || e[3] === ct)
        },
        m(t, c) {
            d(t, n, c), u(n, r), u(n, s), e[8](n), isNaN(e[5]) || (n.volume = e[5]), a || (p = [g(n, "volumechange", e[9]), g(n, "durationchange", e[10]), g(n, "canplay", e[6])], a = !0)
        },
        p(t, [e]) {
            16 & e && r.src !== (o = "/assets/videos/channel-" + t[4].displayName + ".webm") && y(r, "src", o), 16 & e && s.src !== (i = "/assets/videos/channel-" + t[4].displayName + ".mp4") && y(s, "src", i), 16 & e && l !== (l = t[4].number) && y(n, "channel", l), 32 & e && !isNaN(t[5]) && (n.volume = t[5]), 10 & e && b(n, "visually-hidden", !t[1] || t[3] === ct)
        },
        i: t,
        o: t,
        d(t) {
            t && f(n), e[8](null), a = !1, c(p)
        }
    }
}

function Pt(t, e, n) {
    let c, r, o, s;
    l(t, ft, (t => n(3, c = t))), l(t, vt, (t => n(4, r = t))), l(t, dt, (t => n(7, o = t))), l(t, ut, (t => n(5, s = t)));
    const i = A();
    let a, u, d = !1;
    return t.$$.update = () => {
        129 & t.$$.dirty && a && (n(1, d = !1), a.load()), 10 & t.$$.dirty && function() {
            if (a) d && c === rt ? a.play() : a.pause()
        }(), 4 & t.$$.dirty && u && function() {
            const {
                number: t,
                startTimestamp: e
            } = r, c = Date.now() / 1e3;
            if (null != e) {
                let r, o = c - e;
                o < u ? r = o : (r = o % u, gt(t, {
                    startTimestamp: c - r
                })), n(0, a.currentTime = r, a)
            } else gt(t, {
                startTimestamp: c
            })
        }()
    }, [a, d, u, c, r, s, function() {
        a.readyState < 2 || (i("ready", !0), n(1, d = !0))
    }, o, function(t) {
        N[t ? "unshift" : "push"]((() => {
            a = t, n(0, a)
        }))
    }, function() {
        s = this.volume, ut.set(s)
    }, function() {
        u = this.duration, n(2, u)
    }]
}
class Ht extends W {
    constructor(t) {
        super(), V(this, t, Pt, Ft, o, {})
    }
}
let Bt = null;

function Rt() {
    null == Bt && (Bt = function() {
        if (window.AudioContext) try {
            const t = new window.AudioContext,
                e = t.sampleRate / 3,
                n = t.createBuffer(1, e, t.sampleRate),
                c = t.createGain();
            c.gain.setValueAtTime(.008, t.currentTime), c.connect(t.destination);
            for (let t = 0, c = n.getChannelData(0); t < e; t++) c[t] = 2 * Math.random() - 1;
            const r = t.createBufferSource();
            return r.buffer = n, r.connect(c), r.loop = !0, r.start(0), r.onended = () => {
                r.disconnect(), c.disconnect(), t.close()
            }, r
        } catch (t) {}
    }())
}

function Ut(e) {
    let n, c;
    return n = new Ht({}), n.$on("ready", e[1]), {
        c() {
            R(n.$$.fragment)
        },
        m(t, e) {
            U(n, t, e), c = !0
        },
        p: t,
        i(t) {
            c || (H(n.$$.fragment, t), c = !0)
        },
        o(t) {
            B(n.$$.fragment, t), c = !1
        },
        d(t) {
            z(n, t)
        }
    }
}

function zt(e) {
    let n, c;
    return n = new Dt({}), n.$on("ready", e[1]), {
        c() {
            R(n.$$.fragment)
        },
        m(t, e) {
            U(n, t, e), c = !0
        },
        p: t,
        i(t) {
            c || (H(n.$$.fragment, t), c = !0)
        },
        o(t) {
            B(n.$$.fragment, t), c = !1
        },
        d(t) {
            z(n, t)
        }
    }
}

function It(t) {
    let e, n, r, o, s, i;
    const l = [zt, Ut],
        a = [];

    function u(t, e) {
        return "webcam" === t[0].type ? 0 : "video" === t[0].type ? 1 : -1
    }
    return ~(n = u(t)) && (r = a[n] = l[n](t)), s = new _t({}), {
        c() {
            e = m("div"), r && r.c(), o = v(), R(s.$$.fragment), y(e, "class", "tv-videos svelte-18atvsb")
        },
        m(t, c) {
            d(t, e, c), ~n && a[n].m(e, null), d(t, o, c), U(s, t, c), i = !0
        },
        p(t, [o]) {
            let s = n;
            n = u(t), n === s ? ~n && a[n].p(t, o) : (r && (P = {
                r: 0,
                c: [],
                p: P
            }, B(a[s], 1, 1, (() => {
                a[s] = null
            })), P.r || c(P.c), P = P.p), ~n ? (r = a[n], r ? r.p(t, o) : (r = a[n] = l[n](t), r.c()), H(r, 1), r.m(e, null)) : r = null)
        },
        i(t) {
            i || (H(r), H(s.$$.fragment, t), i = !0)
        },
        o(t) {
            B(r), B(s.$$.fragment, t), i = !1
        },
        d(t) {
            t && f(e), ~n && a[n].d(), t && f(o), z(s, t)
        }
    }
}

function Vt(t, e, n) {
    let c, r, o, s, i;
    l(t, ft, (t => n(2, c = t))), l(t, vt, (t => n(0, r = t))), l(t, dt, (t => n(3, o = t))), l(t, at, (t => n(4, s = t))), l(t, pt, (t => n(5, i = t)));
    let u, d = !1;

    function f() {
        Y.classList.remove("loading-channel")
    }

    function p() {
        Q((() => {
            const t = Date.now() - u;
            t <= 400 ? X((() => {
                a(ft, c = rt, c)
            }), 400 - t) : a(ft, c = rt, c)
        }))
    }
    return C((() => {
        d = !0
    })), t.$$.update = () => {
        var e;
        4 & t.$$.dirty && (c === ct ? (f(), Y.classList.add("loading-channel"), u = Date.now()) : f()), 1 & t.$$.dirty && (e = r, d && (Q((() => {
            a(ft, c = ct, c), "unknown" == e.type && p()
        })), K({
            type: "easter_egg",
            label: "channel_switch",
            value: e.displayName
        }))), 8 & t.$$.dirty && Y.setAttribute("channel", `${o}`), 16 & t.$$.dirty && Y.classList.toggle("hide-content", !s), 32 & t.$$.dirty && Y.classList.toggle("loading-page", i === ct), 36 & t.$$.dirty && (i === ct || c === ct ? Rt() : Bt && (Bt.stop(), Bt = null))
    }, [r, p, c, o, s, i]
}
class Wt extends W {
    constructor(t) {
        super(), V(this, t, Vt, It, o, {})
    }
}

function Jt(t, e, n) {
    const c = t.slice();
    return c[3] = e[n], c[5] = n, c
}

function Gt(t) {
    let e, n, c, r, o, s = t[5] + 1 + "";

    function i() {
        return t[1](t[5])
    }
    return {
        c() {
            e = m("div"), n = m("button"), c = h(s), y(n, "class", "svelte-1vrpccc"), y(e, "class", "control number svelte-1vrpccc")
        },
        m(t, s) {
            d(t, e, s), u(e, n), u(n, c), r || (o = g(n, "click", i), r = !0)
        },
        p(e, n) {
            t = e
        },
        d(t) {
            t && f(e), r = !1, o()
        }
    }
}

function Kt(e) {
    let n, r, o, s, i, l, a, h, $, b, w, x, E, C, A, k, N, S, T, j, L, _, O, M, q, D, F, P, H, B, R, U, z, I, V, W, J, G, K, Q, X, Y, Z = {
            length: 9
        },
        tt = [];
    for (let t = 0; t < Z.length; t += 1) tt[t] = Gt(Jt(e, Z, t));
    return {
        c() {
            n = m("div"), r = m("div"), o = m("div"), s = m("div"), i = m("div"), l = m("div"), a = m("button"), a.textContent = "REMOTE\n              OFF", h = v(), $ = m("span"), $.textContent = "SPACE OFF", b = v(), w = m("div"), x = m("button"), x.textContent = "▲", E = v(), C = m("div"), A = m("button"), A.textContent = "▼", k = v(), N = m("span"), N.textContent = "VOLUME", S = v(), T = m("div"), j = m("button"), j.textContent = "MUTE", L = v(), _ = m("span"), _.textContent = "MUTE", O = v(), M = m("div"), q = m("button"), q.textContent = "▲", D = v(), F = m("div"), P = m("button"), P.textContent = "▼", H = v(), B = m("span"), B.textContent = "CHANNEL", R = v(), U = m("div");
            for (let t = 0; t < tt.length; t += 1) tt[t].c();
            z = v(), I = m("div"), V = m("button"), V.textContent = "0", W = v(), J = m("div"), G = m("button"), G.textContent = "SHOW/HIDE", K = v(), Q = m("div"), Q.innerHTML = '<img loading="lazy" src="/assets/images/kiwivision.svg" alt="kiwivision" width="103" height="10" class="svelte-1vrpccc"/> \n          <br/> \n          <span>COMPUTER SPACE COMMAND</span>', y(a, "class", "hide-text svelte-1vrpccc"), y($, "class", "svelte-1vrpccc"), y(l, "class", "control onoff svelte-1vrpccc"), y(x, "class", "svelte-1vrpccc"), y(w, "class", "control vol up svelte-1vrpccc"), y(A, "class", "svelte-1vrpccc"), y(N, "class", "svelte-1vrpccc"), y(C, "class", "control vol down svelte-1vrpccc"), y(j, "class", "hide-text svelte-1vrpccc"), y(_, "class", "svelte-1vrpccc"), y(T, "class", "control mute svelte-1vrpccc"), y(q, "class", "svelte-1vrpccc"), y(M, "class", "control ch up svelte-1vrpccc"), y(P, "class", "svelte-1vrpccc"), y(B, "class", "svelte-1vrpccc"), y(F, "class", "control ch down svelte-1vrpccc"), y(V, "class", "svelte-1vrpccc"), y(I, "class", "control number svelte-1vrpccc"), y(G, "class", "showhide svelte-1vrpccc"), y(J, "class", "control showhide svelte-1vrpccc"), y(U, "class", "numbers svelte-1vrpccc"), y(i, "class", "buttons svelte-1vrpccc"), y(Q, "class", "brand svelte-1vrpccc"), y(s, "class", "inner svelte-1vrpccc"), y(o, "class", "remote svelte-1vrpccc"), y(r, "class", "wrapper svelte-1vrpccc"), y(n, "class", "perspective svelte-1vrpccc")
        },
        m(t, c) {
            d(t, n, c), u(n, r), u(r, o), u(o, s), u(s, i), u(i, l), u(l, a), u(l, h), u(l, $), u(i, b), u(i, w), u(w, x), u(i, E), u(i, C), u(C, A), u(C, k), u(C, N), u(i, S), u(i, T), u(T, j), u(T, L), u(T, _), u(i, O), u(i, M), u(M, q), u(i, D), u(i, F), u(F, P), u(F, H), u(F, B), u(i, R), u(i, U);
            for (let t = 0; t < tt.length; t += 1) tt[t].m(U, null);
            u(U, z), u(U, I), u(I, V), u(U, W), u(U, J), u(J, G), u(s, K), u(s, Q), X || (Y = [g(a, "click", e[0]), g(x, "click", xt), g(A, "click", wt), g(j, "click", Et), g(q, "click", yt), g(P, "click", bt), g(V, "click", e[2]), g(G, "click", Ct)], X = !0)
        },
        p(t, [e]) {
            if (0 & e) {
                let n;
                for (Z = {
                        length: 9
                    }, n = 0; n < Z.length; n += 1) {
                    const c = Jt(t, Z, n);
                    tt[n] ? tt[n].p(c, e) : (tt[n] = Gt(c), tt[n].c(), tt[n].m(U, z))
                }
                for (; n < tt.length; n += 1) tt[n].d(1);
                tt.length = Z.length
            }
        },
        i: t,
        o: t,
        d(t) {
            t && f(n), p(tt, t), X = !1, c(Y)
        }
    }
}

function Qt(t) {
    return [() => At(), t => $t(t + 1), () => $t(0)]
}
class Xt extends W {
    constructor(t) {
        super(), V(this, t, Qt, Kt, o, {})
    }
}

function Yt(e) {
    let n, r, o, s, i, l, a, p, b, w, x, E = e[0].displayName + "";
    return {
        c() {
            n = m("div"), r = m("button"), r.textContent = "◄", o = v(), s = m("div"), i = h("CHANNEL "), l = m("span"), a = h(E), p = v(), b = m("button"), b.textContent = "►", y(r, "class", "previous cursor-pointer svelte-zwh9ot"), y(r, "aria-label", "previous channel"), y(s, "class", "channel"), y(b, "class", "next cursor-pointer svelte-zwh9ot"), y(b, "aria-label", "next channel"), y(n, "class", "channel-controller svelte-zwh9ot")
        },
        m(t, e) {
            d(t, n, e), u(n, r), u(n, o), u(n, s), u(s, i), u(s, l), u(l, a), u(n, p), u(n, b), w || (x = [g(r, "click", bt), g(b, "click", yt)], w = !0)
        },
        p(t, [e]) {
            1 & e && E !== (E = t[0].displayName + "") && $(a, E)
        },
        i: t,
        o: t,
        d(t) {
            t && f(n), w = !1, c(x)
        }
    }
}

function Zt(t, e, n) {
    let c;
    return l(t, vt, (t => n(0, c = t))), [c]
}
class te extends W {
    constructor(t) {
        super(), V(this, t, Zt, Yt, o, {})
    }
}

function ee(e) {
    let n, c, r;
    return {
        c() {
            n = m("button"), n.textContent = "SPACE MODE", y(n, "class", "cursor-pointer svelte-6brq6f")
        },
        m(t, e) {
            d(t, n, e), c || (r = g(n, "click", At), c = !0)
        },
        p: t,
        i: t,
        o: t,
        d(t) {
            t && f(n), c = !1, r()
        }
    }
}
class ne extends W {
    constructor(t) {
        super(), V(this, t, null, ee, o, {})
    }
}
var ce = function() {
    function t(t, e, n, c, r) {
        return t < e || n < e ? t > n ? n + 1 : t + 1 : c === r ? e : e + 1
    }
    return function(e, n) {
        if (e === n) return 0;
        if (e.length > n.length) {
            var c = e;
            e = n, n = c
        }
        for (var r = e.length, o = n.length; r > 0 && e.charCodeAt(r - 1) === n.charCodeAt(o - 1);) r--, o--;
        for (var s = 0; s < r && e.charCodeAt(s) === n.charCodeAt(s);) s++;
        if (o -= s, 0 === (r -= s) || o < 3) return o;
        var i, l, a, u, d, f, p, m, h, v, g, y, $ = 0,
            b = [];
        for (i = 0; i < r; i++) b.push(i + 1), b.push(e.charCodeAt(s + i));
        for (var w = b.length - 1; $ < o - 3;)
            for (h = n.charCodeAt(s + (l = $)), v = n.charCodeAt(s + (a = $ + 1)), g = n.charCodeAt(s + (u = $ + 2)), y = n.charCodeAt(s + (d = $ + 3)), f = $ += 4, i = 0; i < w; i += 2) l = t(p = b[i], l, a, h, m = b[i + 1]), a = t(l, a, u, v, m), u = t(a, u, d, g, m), f = t(u, d, f, y, m), b[i] = f, d = u, u = a, a = l, l = p;
        for (; $ < o;)
            for (h = n.charCodeAt(s + (l = $)), f = ++$, i = 0; i < w; i += 2) p = b[i], b[i] = f = t(p, l, f, h, b[i + 1]), l = p;
        return f
    }
}();
const re = Array.from(lt.querySelectorAll("[js-slot]")),
    oe = new Map,
    se = {
        title: document.title,
        slots: pe()
    };
let ie, le, ae, ue = Z.pathname;

function de(t) {
    return "A" === t.tagName && 0 === t.getAttribute("href").indexOf("#")
}

function fe(t) {
    return "A" === t.tagName && !de(t) && "_blank" !== t.target && t.hostname === tt && !t.hasAttribute("redirect")
}

function pe(t = lt) {
    let e = re;
    t !== lt && (e = Array.from(t.querySelectorAll("[js-slot]")));
    return e.reduce(((t, e) => (t[e.getAttribute("js-slot")] = e.innerHTML, t)), {})
}

function me({
    slots: t
}) {
    Object.entries(t).forEach((([t, e]) => {
        const n = re.find((e => e.getAttribute("js-slot") === t));
        null != n && (n.innerHTML = e)
    })), window.dispatchEvent(new CustomEvent("contentChange"))
}

function he(t, {
    importance: e
} = {}) {
    if (t = t.replace(/\/$/, ""), oe.has(t)) return Promise.resolve(oe.get(t));
    const n = fetch(t, {
        importance: e
    }).then((t => t.text())).then((e => {
        null == ie && (ie = new DOMParser);
        const n = ie.parseFromString(e, "text/html"),
            c = n.querySelector(".js-content"),
            r = {
                title: n.title,
                slots: pe(c)
            };
        return oe.set(t, r), r
    }));
    return oe.set(t, n), n
}
async function ve(t) {
    if (0 === t.indexOf("#")) return;
    0 !== t.indexOf("http") && (t = `${window.location.origin}${t}`), pt.set(ct);
    const [{
        title: e,
        slots: n
    }] = await Promise.all([he(t), et(300)]);
    pt.set(rt), Q((() => {
        me({
            title: e,
            slots: n
        }), document.title = e, lt.scrollTop = 0, window.history.pushState({
            title: e,
            slots: n
        }, e, t), ue = Z.pathname
    }))
}

function ge() {
    Q((() => {
        const t = lt.querySelector(":target");
        lt.scrollTop = t ? Math.max(t.offsetTop - 24, 0) : 0
    }))
}

function ye() {
    const t = function(t) {
        const {
            page: e
        } = le.reduce(((e, n) => {
            const {
                aliases: c
            } = n;
            return c.forEach((c => {
                const r = c.startsWith(t) || t.startsWith(c) ? -4 : 1,
                    o = Math.max(0, ce(c, t) + r);
                o < e.diff && (e = {
                    diff: o,
                    page: n
                })
            })), e
        }), {
            page: le[0],
            diff: 100
        });
        return e
    }(ae.textContent.trim());
    t.external ? window.open(t.url, "_blank") : ve(t.url)
}

function $e() {
    fetch("/assets/pages.json").then((t => t.json())).then((t => {
        le = t
    })).catch((() => {
        $e.retries++ < 3 ? $e() : console.warn("Something went wrong :(")
    }))
}
$e.retries = 0;
const be = Q.bind(null, (function() {
        if (null == ae) return;
        const t = function(t) {
            let e = 0;
            if (window.getSelection().rangeCount > 0) {
                const n = window.getSelection().getRangeAt(0),
                    c = n.cloneRange();
                c.selectNodeContents(t), c.setEnd(n.endContainer, n.endOffset), e = c.toString().length
            }
            return e
        }(ae);
        ae.style.setProperty("--caret-position", t)
    })),
    we = be;

function xe() {
    "" === ae.textContent && (ae.textContent = ae.getAttribute("data-original-text"))
}

function Ee() {
    be(), null == le && $e()
}

function Ce(t) {
    "Enter" === t.key && (t.preventDefault(), ye()), " " === t.key && t.preventDefault(), be()
}

function Ae() {
    ae = document.querySelector(".js-text-nav"), ae && (ae.addEventListener("click", we), ae.addEventListener("blur", xe), ae.addEventListener("focus", Ee), ae.addEventListener("keydown", Ce), ae.textContent = ae.textContent.trim())
}

function ke(t) {
    if (! function(t) {
            const e = document.activeElement;
            return e === Y || null == e || ("BUTTON" === e.tagName || "A" === e.tagName) && "Enter" !== t.key && " " !== t.key
        }(t)) return;
    if ("r" === t.key) return At();
    if ("+" === t.key || "=" === t.key) return yt();
    if ("-" === t.key) return bt();
    if ("h" === t.key) return Ct();
    if ("f" === t.key) return void(document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen() : document.documentElement.requestFullscreen());
    const e = Number(t.key);
    Number.isNaN(e) || (e === i(dt) ? $t(0) : $t(e))
}
const Ne = () => {
    Q((() => {
        Ae(), window.addEventListener("contentChange", Ae), window.addEventListener("keyup", ke), window.addEventListener("popstate", (async t => {
            let {
                state: e
            } = t;
            if (Z.pathname === ue) return t.preventDefault(), void ge();
            ue = Z.pathname, null == e && (e = se), pt.set(ct), await et(300), pt.set(rt), Q((() => {
                me(e), document.title = e.title, ge()
            }))
        })), Y.addEventListener("mousemove", (t => {
            fe(t.target) && (oe.has(t.target.href) || he(t.target.href, {
                importante: "low"
            }))
        })), Y.addEventListener("click", (t => {
            if (de(t.target)) return t.preventDefault(), Z.hash = t.target.getAttribute("href"), ge();
            fe(t.target) && (t.preventDefault(), ve(t.target.href))
        })), new Wt({
            target: it
        }), new Xt({
            target: document.querySelector(".js-remote")
        }), new te({
            target: document.querySelector(".js-header-controls")
        }), new ne({
            target: document.querySelector(".js-space-trigger")
        })
    }))
};
"interactive" !== document.readyState ? window.addEventListener("DOMContentLoaded", Ne) : Ne();