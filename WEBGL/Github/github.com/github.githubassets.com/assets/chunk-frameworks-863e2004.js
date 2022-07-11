System.register(["./chunk-vendor.js"], (function(t) {
    "use strict";
    var e, n, o, i, s, r, c, a, l, u, d;
    return {
        setters: [function(t) {
            e = t.o, n = t.f, o = t.h, i = t.a, s = t.S, r = t.D, c = t.r, a = t.T, l = t._, u = t.t, d = t.c
        }],
        execute: function() {
            t({
                $: _t,
                A: nt,
                B: Fe,
                C: function(t) {
                    const e = Ne(t),
                        n = function(t) {
                            const e = t.match(/(file-.+?-)L\d+?/i);
                            return e ? e[1] : ""
                        }(t);
                    return {
                        blobRange: e,
                        anchorPrefix: n
                    }
                },
                D: Ne,
                E: function({
                    anchorPrefix: t,
                    blobRange: e
                }) {
                    return e ? `#${t}${function(t){const{start:e,end:n}=We(t);return null!=e.column&&null!=n.column?`
                    L$ {
                        e.line
                    }
                    C$ {
                        e.column
                    } - L$ {
                        n.line
                    }
                    C$ {
                        n.column
                    }
                    `:e.line===n.line?"L"+e.line:`
                    L$ {
                        e.line
                    } - L$ {
                        n.line
                    }
                    `}(e)}`: "#"
                },
                F: function(t, e) {
                    const [n, o] = Be(t.start, !0, e), [i, s] = Be(t.end, !1, e);
                    if (!n || !i) return;
                    let r = o,
                        c = s; - 1 === r && (r = 0); - 1 === c && (c = i.childNodes.length);
                    if (!n.ownerDocument) throw new Error("DOMRange needs to be inside document");
                    const a = n.ownerDocument.createRange();
                    return a.setStart(n, r), a.setEnd(i, c), a
                },
                G: function(t, e) {
                    e.appendChild(t.extractContents()), t.insertNode(e)
                },
                I: ge,
                J: tn,
                K: function(t, e = !1) {
                    let n = document.domain;
                    if (null == n) throw new Error("Unable to get document domain");
                    n.endsWith(".github.com") && (n = "github.com");
                    const o = (new Date).getTime(),
                        i = new Date(o - 1).toUTCString(),
                        s = "https:" === location.protocol ? "; secure" : "",
                        r = "; expires=" + i;
                    !1 === e && (n = "." + n);
                    try {
                        document.cookie = `${t}=''; path=/; domain=${n}${r}${s}`
                    } catch (c) {}
                },
                L: function() {
                    let t = "";
                    const e = tn("_octo"),
                        n = [];
                    for (const o of e) {
                        const e = o.value.split(".");
                        if ("GH1" === e.shift() && e.length > 1) {
                            const o = (e.shift() || "").split("-");
                            1 === o.length && (o[1] = "1");
                            const i = [Number(o[0]), Number(o[1])];
                            t = e.join("."), n.push([i, t])
                        }
                    }
                    t = "", n.length > 0 && (t = String(n.sort().reverse()[0][1]));
                    return t
                },
                M: function() {
                    const t = (new Date).getTime(),
                        e = `${Math.round(Math.random()*(Math.pow(2,31)-1))}.${Math.round(t/1e3)}`,
                        n = "GH1.1." + e,
                        o = new Date(t + 31536e6).toUTCString();
                    return en("_octo", n, o), e
                },
                N: async function(t, e, n = !1) {
                    const o = bt.get(t);
                    null == o || o.abort();
                    const i = t.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");
                    !n && i && i === t && (wt[i.getAttribute("data-url")] = e);
                    return Et(t, e)
                },
                O: function(t, e, n) {
                    let o = t.value.substring(0, t.selectionEnd || 0),
                        i = t.value.substring(t.selectionEnd || 0);
                    o = o.replace(e, n), i = i.replace(e, n), t.value = o + i, t.selectionStart = o.length, t.selectionEnd = o.length, t.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    }))
                },
                P: function(t, e) {
                    const n = t.selectionEnd || 0,
                        o = t.value.substring(0, n),
                        i = t.value.substring(n),
                        s = "" === t.value || o.match(/\n$/) ? "" : "\n";
                    t.value = o + s + e + i, t.selectionStart = n + e.length, t.selectionEnd = n + e.length, t.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    })), t.focus()
                },
                Q: function(t) {
                    return on.get(t)
                },
                R: et,
                S: m,
                T: function(t, e, n) {
                    return [...pn(t, (t => {
                        const n = e(t);
                        return null != n ? [t, n] : null
                    }))].sort(((t, e) => n(t[1], e[1]))).map((([t]) => t))
                },
                U: function(t, e) {
                    return t.score > e.score ? -1 : t.score < e.score ? 1 : t.text < e.text ? -1 : t.text > e.text ? 1 : 0
                },
                V: async function() {
                    await async function() {
                        const t = document.querySelector("link[rel=sso-session]"),
                            e = document.querySelector("meta[name=sso-expires-around]");
                        if (!(t instanceof HTMLLinkElement)) return !0;
                        if (! function(t) {
                                if (!(t instanceof HTMLMetaElement)) return !0;
                                const e = parseInt(t.content);
                                return (new Date).getTime() / 1e3 > e
                            }(e)) return !0;
                        const n = t.href,
                            o = await fetch(n, {
                                headers: {
                                    Accept: "application/json",
                                    "X-Requested-With": "XMLHttpRequest"
                                }
                            });
                        return await o.json()
                    }() || (gn || (gn = async function() {
                        const t = document.querySelector("link[rel=sso-modal]"),
                            e = await ot({
                                content: Y(document, t.href),
                                dialogClass: "sso-modal"
                            });
                        let n = null;
                        const o = window.external;
                        if (o.ssoComplete = function(t) {
                                t.error ? (n = !1, hn(n)) : (n = !0, hn(n), function(t) {
                                    const e = document.querySelector("meta[name=sso-expires-around]");
                                    e && e.setAttribute("content", t)
                                }(t.expiresAround), window.focus()), o.ssoComplete = null
                            }, await
                            function(t) {
                                return new Promise((e => {
                                    t.addEventListener("dialog:remove", e, {
                                        once: !0
                                    })
                                }))
                            }(e), !n) throw new Error("sso prompt canceled")
                    }().then(yn).catch(yn)), await gn)
                },
                W: function(t, e) {
                    t.removeEventListener("keydown", ie), t.removeEventListener("keyup", se), t.removeEventListener("input", re);
                    const n = ne.get(t);
                    n && (null != n.timer && n.listener === e && clearTimeout(n.timer), ne.delete(t))
                },
                X: function(t, e) {
                    let n = mn(t, e);
                    if (n && -1 === e.indexOf("/")) {
                        const o = t.substring(t.lastIndexOf("/") + 1);
                        n += mn(o, e)
                    }
                    return n
                },
                Y: Pn,
                Z: function(t) {
                    const e = de(t);
                    e && Nn(e)
                },
                a: q,
                a$: function t(e, n) {
                    const o = e.nextElementSibling;
                    if (o instanceof HTMLElement) return o.classList.contains(n) ? o : t(o, n);
                    return null
                },
                a0: nn,
                a1: Vn,
                a2: Bn,
                a3: function(t) {
                    const e = t.match(Un);
                    if (e) return void Jn(Yn(e[1], e[2]));
                    let n, o;
                    for (let i = 0, s = Kn.length; i < s; i++) {
                        const [e, o] = Kn[i];
                        if (n = t.match(o), n) {
                            let t = null,
                                o = null;
                            switch (e) {
                                case "organization":
                                    t = n[1], o = n[2];
                                    break;
                                case "repository":
                                    t = `${n[1]}/${n[2]}`, o = n[3]
                            }
                            return void(t && o && Jn(Qn(t, o)))
                        }
                    }
                    for (let i = 0, s = Fn.length; i < s; i++)
                        if (o = t.match(Fn[i]), o) return void Jn(Gn(o[1], o[2]))
                },
                a4: ut,
                a7: function() {
                    const t = Xt[Jt() - 1];
                    if (t) return t.url
                },
                a8: function() {
                    const t = Xt[Jt() + 1];
                    if (t) return t.url
                },
                a9: Le,
                aA: Ge,
                aB: g,
                aC: function(t) {
                    const e = ne.get(t);
                    e && e.listener.call(null, t)
                },
                aD: Wo,
                aE: Xo,
                aF: so,
                aG: function(t, e) {
                    for (const n in e) {
                        const o = e[n],
                            i = t.elements.namedItem(n);
                        (i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement) && (i.value = o)
                    }
                },
                aH: Ft,
                aI: zo,
                aJ: Uo,
                aK: Zo,
                aL: function() {
                    window.history.replaceState(null, "", "#"), ci()
                },
                aM: function() {
                    return Ko
                },
                aN: fn,
                aO: Fo,
                aP: U,
                aQ: z,
                aR: async function(t) {
                    return on.get(t) || sn(await
                        function(t, e) {
                            return new Promise((n => {
                                t.addEventListener(e, n, {
                                    once: !0
                                })
                            }))
                        }(t, "codeEditor:ready"))
                },
                aS: function(t, e) {
                    return async function n(o) {
                        const i = await self.fetch(J(t, e));
                        if (K(i, new ResponseError$1(i)), 200 === i.status) return i;
                        if (202 === i.status) return await new Promise((t => setTimeout(t, o))), n(1.5 * o);
                        throw new ResponseError$1(i)
                    }(1e3)
                },
                aT: R,
                aU: Qt,
                aV: function(t) {
                    const e = t.getBoundingClientRect();
                    return {
                        top: e.top + window.pageYOffset,
                        left: e.left + window.pageXOffset
                    }
                },
                aW: dt,
                aX: yt,
                aY: function(t, e) {
                    R(t), H(t, e)
                },
                aZ: qo,
                a_: To,
                aa: function() {
                    return `${window.location.protocol}//${window.location.host}${function(){const t=io("meta[name=analytics-location]");return t?t.content:window.location.pathname}()+function(){const t=io("meta[name=analytics-location-query-strip]");let e="";t||(e=window.location.search);const n=io("meta[name=analytics-location-params]");n&&(e+=(e?"&":"?")+n.content);for(const o of document.querySelectorAll("meta[name=analytics-param-rename]")){const t=o.content.split(":",2);e=e.replace(new RegExp(` ( ^ | [ ? & ]) $ {
                        t[0]
                    }($ |= )
                    `,"g"),`
                    $1$ {
                        t[1]
                    }
                    $2 `)}return e}()}`
                },
                ab: pe,
                ac: it,
                ad: st,
                ah: function(t, e) {
                    const n = t.closest("[data-notification-id]");
                    e.hasAttribute("data-status") && function(t, e) {
                        t.classList.toggle("notification-archived", "archived" === e), t.classList.toggle("notification-unread", "unread" === e), t.classList.toggle("notification-read", "read" === e)
                    }(n, e.getAttribute("data-status"));
                    e.hasAttribute("data-subscription-status") && function(t, e) {
                        t.classList.toggle("notification-unsubscribed", "unsubscribed" === e)
                    }(n, e.getAttribute("data-subscription-status"));
                    e.hasAttribute("data-starred-status") && function(t, e) {
                        t.classList.toggle("notification-starred", "starred" === e)
                    }(n, e.getAttribute("data-starred-status"))
                },
                ai: de,
                aj: async function(t, e, n = 1 / 0, o) {
                    const i = o ? ee(o) : null;
                    for (let r = 0; r < e; r++) try {
                        const e = i ? Promise.race([t(), i]) : t();
                        return await e
                    } catch (lo) {
                        if ("AbortError" === lo.name) throw lo;
                        if (r === e - 1) throw lo;
                        const i = 1e3 * Math.pow(2, r),
                            c = (s = .1 * i, Math.floor(Math.random() * Math.floor(s)));
                        await te(Math.min(n, i + c), o)
                    }
                    var s;
                    throw new Error("retry failed")
                },
                ak: function*(t, e) {
                    for (let n = 0; n < t.length; n += e) yield t.slice(n, n + e)
                },
                al: function(t) {
                    const e = [];
                    return function(n) {
                        e.push(n), 1 === e.length && queueMicrotask((() => {
                            const n = [...e];
                            e.length = 0, t(n)
                        }))
                    }
                },
                am: async function() {
                    const t = await fetch("/sessions/in_sudo", {
                        headers: {
                            accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (t.ok) {
                        return "true" === await t.text() || So()
                    }
                    return So()
                },
                an: vt,
                ao: function(t) {
                    const e = t.getAttribute("data-details-container") || ".js-details-container",
                        n = t.closest(e).classList;
                    return n.contains("Details--on") || n.contains("open")
                },
                ap: dn,
                aq: function() {
                    if ("Intl" in window) try {
                        return (new window.Intl.DateTimeFormat).resolvedOptions().timeZone
                    } catch (t) {}
                },
                ar: en,
                as: Lo,
                at: async function(t) {
                    return function(t) {
                        const e = t;
                        return e.clientExtensionResults = t.getClientExtensionResults(), fo(uo, Eo, e)
                    }(await navigator.credentials.get(function(t) {
                        return fo(lo, wo, t)
                    }(t)))
                },
                av: me,
                aw: fe,
                ax: Nn,
                ay: Ze,
                az: function(t) {
                    const e = t.querySelectorAll(".js-characters-remaining-container");
                    for (const n of e) {
                        Ze(n.querySelector(".js-characters-remaining-field"))
                    }
                },
                b: f,
                b0: function(t) {
                    const e = t.getAttribute("data-hydro-click-payload") || "",
                        n = t.getAttribute("data-hydro-click-hmac") || "",
                        o = t.getAttribute("data-hydro-client-context") || "";
                    Bn(e, n, o)
                },
                b1: function() {
                    return new Promise(window.requestAnimationFrame)
                },
                b2: xo,
                b3: async function() {
                    var t;
                    if (await (null === (t = window.PublicKeyCredential) || void 0 === t ? void 0 : t.isUserVerifyingPlatformAuthenticatorAvailable())) return "supported";
                    return "unsupported"
                },
                b4: async function(t) {
                    return function(t) {
                        const e = t;
                        return e.clientExtensionResults = t.getClientExtensionResults(), fo(uo, bo, e)
                    }(await navigator.credentials.create(function(t) {
                        return fo(lo, vo, t)
                    }(t)))
                },
                b5: te,
                b6: no,
                b7: Yn,
                b8: Gn,
                b9: Qn,
                ba: function(t, e, n) {
                    if (e) {
                        const o = t.innerHTML.trim().match(n || function(t) {
                            const e = t.toLowerCase().split("");
                            let n = "";
                            for (let o = 0; o < e.length; o++) {
                                const t = e[o].replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                                n += 0 === o ? `(.*)(${t})` : `([^${t}]*?)(${t})`
                            }
                            return new RegExp(n + "(.*?)$", "i")
                        }(e));
                        if (!o) return;
                        let i = !1;
                        const s = [];
                        for (let t = 1; t < o.length; ++t) {
                            const e = o[t];
                            e && (t % 2 == 0 ? i || (s.push("<mark>"), i = !0) : i && (s.push("</mark>"), i = !1), s.push(e))
                        }
                        t.innerHTML = s.join("")
                    } else {
                        const e = t.innerHTML.trim(),
                            n = e.replace(/<\/?mark>/g, "");
                        e !== n && (t.innerHTML = n)
                    }
                },
                bb: zn,
                bc: function(t) {
                    const e = Qe(t),
                        n = Ge(t.value);
                    return e - n < 0
                },
                c: Y,
                d: C,
                e: ot,
                f: H,
                g: function(t) {
                    const e = _();
                    e && M.push(e);
                    q(t)
                },
                h: ft,
                i: ct,
                j: function(t, e) {
                    if ("boolean" == typeof e) {
                        if (!(t instanceof HTMLInputElement)) throw new TypeError("only checkboxes can be set to boolean value");
                        t.checked = e
                    } else {
                        if ("checkbox" === t.type) throw new TypeError("checkbox can't be set to string value");
                        t.value = e
                    }
                    at(t, "change", !1)
                },
                k: Wt,
                l: function(t) {
                    Wt(function(t) {
                        return (t.getAttribute("aria-label") || t.innerText || "").trim()
                    }(t))
                },
                m: X,
                n: function(t) {
                    return new URLSearchParams(new FormData(t)).toString()
                },
                o: tt,
                p: function(t) {
                    C(t), R(t);
                    const e = M.pop();
                    e && q(e)
                },
                q: F,
                r: lt,
                s: rt,
                t: Zt,
                u: async function(t) {
                    if (bt.get(t)) return;
                    const e = t.hasAttribute("data-retain-focus"),
                        n = t.getAttribute("data-url"),
                        o = new AbortController;
                    bt.set(t, o);
                    try {
                        const i = await fetch(n, {
                            signal: o.signal,
                            headers: {
                                Accept: "text/html",
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        });
                        if (!i.ok) return;
                        const s = await i.text();
                        return dt(t, e) ? void console.warn("Failed to update content with interactions", t) : (wt[n] = s, Et(t, s, e))
                    } catch (i) {} finally {
                        bt.delete(t)
                    }
                },
                v: jt,
                w: function() {
                    return Promise.resolve()
                },
                x: v,
                y: function(t, e, n = {
                    wait: null
                }) {
                    ne.set(t, {
                        keypressed: !1,
                        inputed: !1,
                        timer: void 0,
                        listener: e,
                        wait: null != n.wait ? n.wait : 100
                    }), t.addEventListener("keydown", ie), t.addEventListener("keyup", se), t.addEventListener("input", re)
                },
                z: function() {
                    return be
                }
            });
            class Subscription {
                constructor(t) {
                    this.closed = !1, this.unsubscribe = () => {
                        t(), this.closed = !0
                    }
                }
            }

            function f(t, e, n, o = {
                capture: !1
            }) {
                return t.addEventListener(e, n, o), new Subscription((() => {
                    t.removeEventListener(e, n, o)
                }))
            }

            function m(...t) {
                return new Subscription((() => {
                    for (const e of t) e.unsubscribe()
                }))
            }

            function p(t) {
                let e = t;
                const n = e.ownerDocument;
                if (!n) return;
                if (!e.offsetParent) return;
                const o = n.defaultView.HTMLElement;
                if (e !== n.body) {
                    for (; e !== n.body;) {
                        if (!(e.parentElement instanceof o)) return;
                        e = e.parentElement;
                        const {
                            position: t,
                            overflowY: n,
                            overflowX: i
                        } = getComputedStyle(e);
                        if ("fixed" === t || "auto" === n || "auto" === i || "scroll" === n || "scroll" === i) break
                    }
                    return e instanceof Document ? null : e
                }
            }

            function h(t, e) {
                let n = e;
                const o = t.ownerDocument;
                if (!o) return;
                const i = o.documentElement;
                if (!i) return;
                if (t === i) return;
                const s = g(t, n);
                if (!s) return;
                n = s._container;
                const r = n === o.documentElement && o.defaultView ? {
                        top: o.defaultView.pageYOffset,
                        left: o.defaultView.pageXOffset
                    } : {
                        top: n.scrollTop,
                        left: n.scrollLeft
                    },
                    c = s.top - r.top,
                    a = s.left - r.left,
                    l = n.clientHeight,
                    u = n.clientWidth;
                return {
                    top: c,
                    left: a,
                    bottom: l - (c + t.offsetHeight),
                    right: u - (a + t.offsetWidth),
                    height: l,
                    width: u
                }
            }

            function g(t, e) {
                let n = t;
                const o = n.ownerDocument;
                if (!o) return;
                const i = o.documentElement;
                if (!i) return;
                const s = o.defaultView.HTMLElement;
                let r = 0,
                    c = 0;
                const a = n.offsetHeight,
                    l = n.offsetWidth;
                for (; n !== o.body && n !== e;) {
                    if (r += n.offsetTop || 0, c += n.offsetLeft || 0, !(n.offsetParent instanceof s)) return;
                    n = n.offsetParent
                }
                let u, d, f;
                if (e && e !== o && e !== o.defaultView && e !== o.documentElement && e !== o.body) {
                    if (!(e instanceof s)) return;
                    f = e, u = e.scrollHeight, d = e.scrollWidth
                } else f = i, u = function(t, e) {
                    return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight)
                }(o.body, i), d = function(t, e) {
                    return Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth)
                }(o.body, i);
                return {
                    top: r,
                    left: c,
                    bottom: u - (r + a),
                    right: d - (c + l),
                    _container: f
                }
            }

            function y(t, e) {
                let n = t;
                const o = t.ownerDocument;
                n !== o && n !== o.defaultView && n !== o.documentElement && n !== o.body || (n = o);
                if (n instanceof o.defaultView.Document) {
                    const t = null != e.top ? e.top : o.defaultView.pageYOffset,
                        n = null != e.left ? e.left : o.defaultView.pageXOffset;
                    return void o.defaultView.scrollTo(n, t)
                }
                if (!(n instanceof o.defaultView.HTMLElement)) throw new Error("invariant");
                n.scrollTop = e.top, null != e.left && (n.scrollLeft = e.left)
            }

            function v(t) {
                return ! function(t) {
                    return t.offsetWidth <= 0 && t.offsetHeight <= 0
                }(t)
            }
            const b = navigator.userAgent.match(/Macintosh/),
                w = b ? "metaKey" : "ctrlKey",
                E = b ? "Meta" : "Control";
            let L = !1,
                x = {
                    x: 0,
                    y: 0
                };

            function A(t) {
                t instanceof MouseEvent && (x.x === t.clientX && x.y === t.clientY || (L = !1), x = {
                    x: t.clientX,
                    y: t.clientY
                })
            }

            function k(t) {
                if (L) return;
                const e = t.currentTarget,
                    {
                        target: n
                    } = t;
                if (!(n instanceof Element && e instanceof HTMLElement && e.closest(".js-active-navigation-container"))) return;
                const o = n.closest(".js-navigation-item");
                o && $(o, e)
            }
            e(".js-navigation-container:not(.js-navigation-container-no-mouse)", {
                subscribe: t => m(f(t, "mouseover", A), f(t, "mouseover", k))
            });
            let j = 0;

            function S(t) {
                if (t.target !== document.body && t.target instanceof HTMLElement && !t.target.classList.contains("js-navigation-enable")) return;
                L = !0;
                const e = _();
                let i = !1;
                if (e) {
                    const s = e.querySelector(".js-navigation-item.navigation-focus") || e;
                    i = n(s, "navigation:keydown", {
                        hotkey: o(t),
                        originalEvent: t,
                        originalTarget: t.target
                    })
                }
                i || t.preventDefault()
            }

            function T(t) {
                const e = t.modifierKey || t.altKey || t.ctrlKey || t.metaKey;
                n(t.currentTarget, "navigation:open", {
                    modifierKey: e,
                    shiftKey: t.shiftKey
                }) || t.preventDefault()
            }

            function q(t) {
                const e = _();
                t !== e && (e && C(e), t.classList.add("js-active-navigation-container"))
            }

            function C(t) {
                t.classList.remove("js-active-navigation-container")
            }
            e(".js-active-navigation-container", {
                add() {
                    j++, 1 === j && document.addEventListener("keydown", S)
                },
                remove() {
                    j--, 0 === j && document.removeEventListener("keydown", S)
                }
            }), i("navigation:keydown", ".js-active-navigation-container", (function(t) {
                const e = t.currentTarget,
                    n = t.detail.originalTarget.matches("input, textarea"),
                    i = t.target;
                if (i.classList.contains("js-navigation-item"))
                    if (n) {
                        if (b) switch (o(t.detail.originalEvent)) {
                            case "Control+n":
                                O(i, e);
                                break;
                            case "Control+p":
                                I(i, e)
                        }
                        switch (o(t.detail.originalEvent)) {
                            case "ArrowUp":
                                I(i, e);
                                break;
                            case "ArrowDown":
                                O(i, e);
                                break;
                            case "Enter":
                            case E + "+Enter":
                                D(i, t.detail.originalEvent[w])
                        }
                    } else {
                        if (b) switch (o(t.detail.originalEvent)) {
                            case "Control+n":
                                O(i, e);
                                break;
                            case "Control+p":
                                I(i, e);
                                break;
                            case "Alt+v":
                                ! function(t, e) {
                                    const n = N(e);
                                    let o = n.indexOf(t);
                                    const i = p(t);
                                    if (null == i) return;
                                    let s, r;
                                    for (;
                                        (s = n[o - 1]) && (r = h(s, i)) && r.top >= 0;) o--;
                                    if (s) {
                                        if ($(s, e)) return;
                                        B(i, s)
                                    }
                                }(i, e);
                                break;
                            case "Control+v":
                                ! function(t, e) {
                                    const n = N(e);
                                    let o = n.indexOf(t);
                                    const i = p(t);
                                    if (null == i) return;
                                    let s, r;
                                    for (;
                                        (s = n[o + 1]) && (r = h(s, i)) && r.bottom >= 0;) o++;
                                    if (s) {
                                        if ($(s, e)) return;
                                        B(i, s)
                                    }
                                }(i, e)
                        }
                        switch (o(t.detail.originalEvent)) {
                            case "j":
                            case "J":
                                O(i, e);
                                break;
                            case "k":
                            case "K":
                                I(i, e);
                                break;
                            case "o":
                            case "Enter":
                            case E + "+Enter":
                                D(i, t.detail[w])
                        }
                    }
                else {
                    const i = N(e)[0];
                    if (i)
                        if (n) {
                            if (b) switch (o(t.detail.originalEvent)) {
                                case "Control+n":
                                    $(i, e)
                            }
                            switch (o(t.detail.originalEvent)) {
                                case "ArrowDown":
                                    $(i, e)
                            }
                        } else {
                            if (b) switch (o(t.detail.originalEvent)) {
                                case "Control+n":
                                case "Control+v":
                                    $(i, e)
                            }
                            switch (o(t.detail.originalEvent)) {
                                case "j":
                                    $(i, e)
                            }
                        }
                }
                if (n) {
                    if (b) switch (o(t.detail.originalEvent)) {
                        case "Control+n":
                        case "Control+p":
                            t.preventDefault()
                    }
                    switch (o(t.detail.originalEvent)) {
                        case "ArrowUp":
                        case "ArrowDown":
                            t.preventDefault();
                            break;
                        case "Enter":
                            t.preventDefault()
                    }
                } else {
                    if (b) switch (o(t.detail.originalEvent)) {
                        case "Control+n":
                        case "Control+p":
                        case "Control+v":
                        case "Alt+v":
                            t.preventDefault()
                    }
                    switch (o(t.detail.originalEvent)) {
                        case "j":
                        case "k":
                            t.preventDefault();
                            break;
                        case "o":
                        case "Enter":
                        case w + "+Enter":
                            t.preventDefault()
                    }
                }
            })), i("click", ".js-active-navigation-container .js-navigation-item", (function(t) {
                T(t)
            })), i("navigation:keyopen", ".js-active-navigation-container .js-navigation-item", (function(t) {
                const e = t.currentTarget.classList.contains("js-navigation-open") ? t.currentTarget : t.currentTarget.querySelector(".js-navigation-open");
                if (e instanceof HTMLAnchorElement) {
                    if (t.detail.modifierKey) window.open(e.href, "_blank"), window.focus();
                    else {
                        e.dispatchEvent(new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })) && e.click()
                    }
                    t.preventDefault()
                } else T(t)
            }));
            const M = [];

            function H(t, e) {
                const n = e || t,
                    o = N(t)[0],
                    i = n.closest(".js-navigation-item") || o;
                if (q(t), i instanceof HTMLElement) {
                    if ($(i, t)) return;
                    V(p(i), i)
                }
            }

            function R(t) {
                const e = t.querySelectorAll(".js-navigation-item.navigation-focus");
                for (const n of e) n.classList.remove("navigation-focus")
            }

            function I(t, e) {
                const n = N(e),
                    o = n.indexOf(t),
                    i = n[o - 1];
                if (i) {
                    if ($(i, e)) return;
                    const t = p(i);
                    "page" === P(e) ? B(t, i) : V(t, i)
                }
            }

            function O(t, e) {
                const n = N(e),
                    o = n.indexOf(t),
                    i = n[o + 1];
                if (i) {
                    if ($(i, e)) return;
                    const t = p(i);
                    "page" === P(e) ? B(t, i) : V(t, i)
                }
            }

            function D(t, e = !1) {
                n(t, "navigation:keyopen", {
                    modifierKey: e
                })
            }

            function $(t, e) {
                return !n(t, "navigation:focus") || (R(e), t.classList.add("navigation-focus"), !1)
            }

            function _() {
                return document.querySelector(".js-active-navigation-container")
            }

            function N(t) {
                const e = [];
                for (const n of t.querySelectorAll(".js-navigation-item")) n instanceof HTMLElement && v(n) && e.push(n);
                return e
            }

            function P(t) {
                return t.getAttribute("data-navigation-scroll") || "item"
            }

            function B(t, e, n = "smooth") {
                const o = h(e, t);
                o && (o.bottom <= 0 ? e.scrollIntoView({
                    behavior: n,
                    block: "start"
                }) : o.top <= 0 && e.scrollIntoView({
                    behavior: n,
                    block: "end"
                }))
            }

            function V(t, e) {
                const n = g(e, t),
                    o = h(e, t);
                if (null != n && null != o)
                    if (o.bottom <= 0 && document.body) {
                        y(t, {
                            top: (null != t.offsetParent ? t.scrollHeight : document.body.scrollHeight) - (n.bottom + o.height)
                        })
                    } else o.top <= 0 && y(t, {
                        top: n.top
                    })
            }

            function W(...t) {
                return JSON.stringify(t, ((t, e) => "object" == typeof e ? e : String(e)))
            }

            function X(t, e = {}) {
                const {
                    hash: n = W,
                    cache: o = new Map
                } = e;
                return function(...e) {
                    const i = n.apply(this, e);
                    if (o.has(i)) return o.get(i);
                    let s = t.apply(this, e);
                    return s instanceof Promise && (s = s.catch((t => {
                        throw o.delete(i), t
                    }))), o.set(i, s), s
                }
            }

            function z(t) {
                const e = [...t.querySelectorAll("meta[name=html-safe-nonce]")].map((t => t.content));
                if (e.length < 1) throw new Error("could not find html-safe-nonce on document");
                return e
            }
            class ResponseError extends Error {
                constructor(t, e) {
                    super(`${t} for HTTP ${e.status}`), this.response = e
                }
            }

            function U(t, e, n = !1) {
                const o = e.headers.get("content-type") || "";
                if (!n && !o.startsWith("text/html")) throw new ResponseError("expected response with text/html, but was " + o, e);
                if (n && !o.startsWith("text/html") && !o.startsWith("application/json")) throw new ResponseError("expected response with text/html or application/json, but was " + o, e);
                const i = e.headers.get("x-html-safe");
                if (!i) throw new ResponseError("missing X-HTML-Safe nonce", e);
                if (!t.includes(i)) throw new ResponseError("response X-HTML-Safe nonce did not match", e)
            }

            function F(t, e) {
                const n = t.createElement("template");
                return n.innerHTML = e, t.importNode(n.content, !0)
            }
            class ResponseError$1 extends Error {
                constructor(t) {
                    super(), this.response = t, this.framesToPop = 1
                }
            }

            function K(t, e) {
                if (t.status >= 200 && t.status < 300) return t; {
                    const n = t.statusText ? " " + t.statusText : "";
                    throw e.message = `HTTP ${t.status}${n}`, e
                }
            }

            function J(t, e) {
                const n = e ? Object.assign({}, e) : {},
                    o = new Request(t, n);
                return o.headers.append("X-Requested-With", "XMLHttpRequest"), o
            }
            async function Y(t, e, n) {
                const o = await self.fetch(J(e, n));
                return K(o, new ResponseError$1(o)), U(z(t), o), F(t, await o.text())
            }
            let G = !1;
            const Q = new s;

            function Z(t) {
                const e = t.target;
                if (e instanceof HTMLElement && e.nodeType !== Node.DOCUMENT_NODE)
                    for (const n of Q.matches(e)) n.data.call(null, e)
            }

            function tt(t, e) {
                G || (G = !0, document.addEventListener("focus", Z, !0)), Q.add(t, e), document.activeElement instanceof HTMLElement && document.activeElement.matches(t) && e(document.activeElement)
            }

            function et(t, e, n) {
                function o(e) {
                    const i = e.currentTarget;
                    i && (i.removeEventListener(t, n), i.removeEventListener("blur", o))
                }
                tt(e, (function(e) {
                    e.addEventListener(t, n), e.addEventListener("blur", o)
                }))
            }

            function nt(t, e) {
                function n(t) {
                    const {
                        currentTarget: o
                    } = t;
                    o && (o.removeEventListener("input", e), o.removeEventListener("blur", n))
                }
                tt(t, (function(t) {
                    t.addEventListener("input", e), t.addEventListener("blur", n)
                }))
            }
            async function ot(t) {
                const e = document.querySelector("#site-details-dialog").content.cloneNode(!0),
                    o = e.querySelector("details"),
                    i = o.querySelector("details-dialog"),
                    s = o.querySelector(".js-details-dialog-spinner");
                t.detailsClass && o.classList.add(...t.detailsClass.split(" ")), t.dialogClass && i.classList.add(...t.dialogClass.split(" ")), document.body.append(e);
                const r = await t.content;
                return s.remove(), i.prepend(r), o.addEventListener("toggle", (() => {
                    o.hasAttribute("open") || (n(i, "dialog:remove"), o.remove())
                })), i
            }

            function it(t) {
                const e = t.closest("form");
                if (!(e instanceof HTMLFormElement)) return;
                let n = st(e);
                if (t.name) {
                    const o = t.matches("input[type=submit]") ? "Submit" : "",
                        i = t.value || o;
                    n || (n = document.createElement("input"), n.type = "hidden", n.classList.add("is-submit-button-value"), e.prepend(n)), n.name = t.name, n.value = i
                } else n && n.remove()
            }

            function st(t) {
                const e = t.querySelector("input.is-submit-button-value");
                return e instanceof HTMLInputElement ? e : null
            }

            function rt() {
                const t = document.getElementById("ajax-error-message");
                t && (t.hidden = !1)
            }

            function ct() {
                const t = document.getElementById("ajax-error-message");
                t && (t.hidden = !0)
            }

            function at(t, e, n) {
                return t.dispatchEvent(new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: n
                }))
            }

            function lt(t, e) {
                e && (! function(t, e) {
                    if (!(t instanceof HTMLFormElement)) throw new TypeError("The specified element is not of type HTMLFormElement.");
                    if (!(e instanceof HTMLElement)) throw new TypeError("The specified element is not of type HTMLElement.");
                    if ("submit" !== e.type) throw new TypeError("The specified element is not a submit button.");
                    if (!t || t !== e.form) throw new Error("The specified element is not owned by the form element.")
                }(t, e), it(e)), at(t, "submit", !0) && t.submit()
            }

            function ut(t) {
                if (!(t instanceof HTMLElement)) return !1;
                const e = t.nodeName.toLowerCase(),
                    n = (t.getAttribute("type") || "").toLowerCase();
                return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n || t.isContentEditable
            }

            function dt(t, e = !1) {
                return ft(t) || function(t, e) {
                    const n = function(t) {
                        if (pt instanceof Element) return pt;
                        if (t && t.ownerDocument && t.ownerDocument.activeElement) return t.ownerDocument.activeElement;
                        return null
                    }(t);
                    if (null === n) return !1;
                    if (e && n === t) return !1;
                    if (n === t && ut(n)) return !0;
                    if (t.contains(n) && ! function(t) {
                            var e;
                            if (t instanceof r) return !0;
                            const n = t instanceof HTMLAnchorElement || t instanceof HTMLButtonElement,
                                o = null === (e = t.parentElement) || void 0 === e ? void 0 : e.classList.contains("task-list-item");
                            if (n && o) return !0;
                            if (!(ht instanceof Element)) return !1;
                            const i = t.closest(gt);
                            if (!i) return !1;
                            const s = ht.closest(gt);
                            return i === s
                        }(n)) return !0;
                    return ht instanceof Element && t.contains(ht) && !!ht.closest("details[open] > summary")
                }(t, e) || function(t) {
                    return t.matches(":active")
                }(t) || function(t) {
                    return !(!t.closest(".is-dirty") && !t.querySelector(".is-dirty"))
                }(t)
            }

            function ft(t) {
                for (const e of t.querySelectorAll("input, textarea"))
                    if ((e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && mt(e)) return !0;
                return !1
            }

            function mt(t) {
                if (t instanceof HTMLInputElement && ("checkbox" === t.type || "radio" === t.type)) {
                    if (t.checked !== t.defaultChecked) return !0
                } else if (t.value !== t.defaultValue) return !0;
                return !1
            }
            let pt, ht;
            i("deprecatedAjaxError", "[data-remote]", (function(t) {
                const e = t.detail,
                    {
                        error: n,
                        text: o
                    } = e;
                t.currentTarget === t.target && "abort" !== n && "canceled" !== n && (/<html/.test(o) ? (rt(), t.stopImmediatePropagation()) : setTimeout((function() {
                    t.defaultPrevented || rt()
                }), 0))
            })), i("deprecatedAjaxSend", "[data-remote]", (function() {
                ct()
            })), i("click", ".js-ajax-error-dismiss", (function() {
                ct()
            })), i("click", ".js-remote-submit-button", (async function(t) {
                const e = t.currentTarget.form;
                let n;
                t.preventDefault();
                try {
                    n = await fetch(e.action, {
                        method: e.method,
                        body: new FormData(e),
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch (o) {}
                n && !n.ok && rt()
            })), document.addEventListener("mouseup", (function(t) {
                ht = t.target
            }));
            const gt = "a[href], button";

            function yt(t, e) {
                return vt(function(t) {
                    if (t.activeElement !== t.body) return t.activeElement;
                    var e = t.querySelectorAll(":hover"),
                        n = e.length;
                    if (n) return e[n - 1]
                }(t), e)
            }

            function vt(t, e) {
                var n = t;
                if (!n) return Promise.resolve(e());
                var o = n.ownerDocument.documentElement;
                var i = function(t) {
                    for (var e = []; t;) {
                        var n = t.getBoundingClientRect(),
                            o = n.top,
                            i = n.left;
                        e.push({
                            element: t,
                            top: o,
                            left: i
                        }), t = t.parentElement
                    }
                    return e
                }(n);
                return Promise.resolve(e()).then((function(t) {
                    var e = function(t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e];
                            if (o.contains(n.element)) return n
                        }
                    }(i);
                    if (e) {
                        n = e.element;
                        var s = e.top,
                            r = e.left,
                            c = n.getBoundingClientRect(),
                            a = c.top,
                            l = c.left;
                        ! function(t, e, n) {
                            var o = t.ownerDocument,
                                i = o.defaultView;

                            function s(t) {
                                return t.offsetParent ? {
                                    top: t.scrollTop,
                                    left: t.scrollLeft
                                } : {
                                    top: i.pageYOffset,
                                    left: i.pageXOffset
                                }
                            }

                            function r(t, e, n) {
                                if (0 === e && 0 === n) return [0, 0];
                                var r = s(t),
                                    c = r.top + n,
                                    a = r.left + e;
                                t === o || t === i || t === o.documentElement || t === o.body ? o.defaultView.scrollTo(a, c) : (t.scrollTop = c, t.scrollLeft = a);
                                var l = s(t);
                                return [l.left - r.left, l.top - r.top]
                            }

                            function c(t) {
                                var e = t;
                                if (e.offsetParent && e !== o.body) {
                                    for (; e !== o.body;) {
                                        if (!e.parentElement) return;
                                        e = e.parentElement;
                                        var n = i.getComputedStyle(e),
                                            s = n.position,
                                            r = n.overflowY,
                                            c = n.overflowX;
                                        if ("fixed" === s || "auto" === r || "auto" === c || "scroll" === r || "scroll" === c) break
                                    }
                                    return e
                                }
                            }
                            var a = c(t),
                                l = 0,
                                u = 0;
                            for (; a;) {
                                var d = r(a, e - l, n - u);
                                if (l += d[0], u += d[1], l === e && u === n) break;
                                a = c(a)
                            }
                        }(n, l - r, a - s)
                    }
                    return t
                }))
            }
            const bt = new WeakMap,
                wt = t("au", {});

            function Et(t, e, n = !1) {
                return yt(document, (() => {
                    const o = F(document, e.trim()),
                        i = n && t.ownerDocument && t === t.ownerDocument.activeElement ? o.querySelector("*") : null,
                        s = Array.from(t.querySelectorAll("details[open][id]")).map((t => t.id));
                    "DETAILS" === t.tagName && t.id && t.hasAttribute("open") && s.push(t.id);
                    for (const e of t.querySelectorAll(".js-updatable-content-preserve-scroll-position")) {
                        const t = e.getAttribute("data-updatable-content-scroll-position-id");
                        Lt.set(t, e.scrollTop)
                    }
                    for (const t of s) {
                        const e = o.querySelector("#" + t);
                        e && e.setAttribute("open", "")
                    }
                    t.replaceWith(o), i instanceof HTMLElement && i.focus()
                }))
            }
            const Lt = new Map;
            e(".js-updatable-content-preserve-scroll-position", {
                constructor: HTMLElement,
                add(t) {
                    const e = t.getAttribute("data-updatable-content-scroll-position-id");
                    if (!e) return;
                    const n = Lt.get(e);
                    null != n && (t.scrollTop = n)
                }
            });
            const xt = ["input[pattern]", "input[required]", "textarea[required]", "input[data-required-change]", "textarea[data-required-change]", "input[data-required-value]", "textarea[data-required-value]"].join(",");

            function At(t) {
                const e = t.getAttribute("data-required-value"),
                    n = t.getAttribute("data-required-value-prefix");
                if (t.value === e) t.setCustomValidity("");
                else {
                    let o = e;
                    n && (o = n + o), t.setCustomValidity(o)
                }
            }
            nt("[data-required-value]", (function(t) {
                At(t.currentTarget)
            })), i("change", "[data-required-value]", (function(t) {
                const e = t.currentTarget;
                At(e), jt(e.form)
            })), nt("[data-required-trimmed]", (function(t) {
                const e = t.currentTarget;
                "" === e.value.trim() ? e.setCustomValidity(e.getAttribute("data-required-trimmed")) : e.setCustomValidity("")
            })), i("change", "[data-required-trimmed]", (function(t) {
                const e = t.currentTarget;
                "" === e.value.trim() ? e.setCustomValidity(e.getAttribute("data-required-trimmed")) : e.setCustomValidity(""), jt(e.form)
            })), tt(xt, (t => {
                let e = t.checkValidity();

                function n() {
                    const n = t.checkValidity();
                    n !== e && t.form && jt(t.form), e = n
                }
                t.addEventListener("input", n), t.addEventListener("blur", (function e() {
                    t.removeEventListener("input", n), t.removeEventListener("blur", e)
                }))
            }));
            const kt = new WeakMap;

            function jt(t) {
                const e = t.checkValidity();
                for (const n of t.querySelectorAll("button[data-disable-invalid]")) n.disabled = !e
            }
            e("button[data-disable-invalid]", {
                constructor: HTMLButtonElement,
                initialize(t) {
                    const e = t.form;
                    e && (! function(t) {
                        kt.get(t) || (t.addEventListener("change", (() => jt(t))), kt.set(t, !0))
                    }(e), t.disabled = !e.checkValidity())
                }
            }), e("input[data-required-change], textarea[data-required-change]", (function(t) {
                const e = t,
                    n = "radio" === e.type && e.form ? e.form.elements.namedItem(e.name).value : null;

                function o(t) {
                    const o = e.form;
                    if (t && "radio" === e.type && o && n)
                        for (const i of o.elements.namedItem(e.name)) i instanceof HTMLInputElement && i.setCustomValidity(e.value === n ? "unchanged" : "");
                    else e.setCustomValidity(e.value === (n || e.defaultValue) ? "unchanged" : "")
                }
                e.addEventListener("input", o), e.addEventListener("change", o), o(), e.form && jt(e.form)
            })), document.addEventListener("reset", (function(t) {
                if (t.target instanceof HTMLFormElement) {
                    const e = t.target;
                    setTimeout((() => jt(e)))
                }
            }));
            var St = -1 / 0;

            function Tt(t) {
                return t.toLowerCase() === t
            }

            function qt(t) {
                return t.toUpperCase() === t
            }

            function Ct(t, e, n, o) {
                for (var i = t.length, s = e.length, r = t.toLowerCase(), c = e.toLowerCase(), a = function(t) {
                        for (var e = t.length, n = new Array(e), o = "/", i = 0; i < e; i++) {
                            var s = t[i];
                            "/" === o ? n[i] = .9 : "-" === o || "_" === o || " " === o ? n[i] = .8 : "." === o ? n[i] = .6 : Tt(o) && qt(s) ? n[i] = .7 : n[i] = 0, o = s
                        }
                        return n
                    }(e), l = 0; l < i; l++) {
                    n[l] = new Array(s), o[l] = new Array(s);
                    for (var u = St, d = l === i - 1 ? -.005 : -.01, f = 0; f < s; f++)
                        if (r[l] === c[f]) {
                            var m = St;
                            l ? f && (m = Math.max(o[l - 1][f - 1] + a[f], n[l - 1][f - 1] + 1)) : m = -.005 * f + a[f], n[l][f] = m, o[l][f] = u = Math.max(m, u + d)
                        } else n[l][f] = St, o[l][f] = u += d
                }
            }

            function Mt(t, e) {
                t = t.toLowerCase(), e = e.toLowerCase();
                for (var n = t.length, o = 0, i = 0; o < n; o += 1)
                    if (0 === (i = e.indexOf(t[o], i) + 1)) return !1;
                return !0
            }
            const Ht = (t, e, n) => {
                    if (!Mt(t, e)) return -1 / 0;
                    const o = function(t, e) {
                        var n = t.length,
                            o = e.length;
                        if (!n || !o) return St;
                        if (n === o) return 1 / 0;
                        if (o > 1024) return St;
                        var i = new Array(n),
                            s = new Array(n);
                        return Ct(t, e, i, s), s[n - 1][o - 1]
                    }(t, e);
                    return o < n ? -1 / 0 : o
                },
                Rt = (t, e, n) => {
                    t.innerHTML = "";
                    let o = 0;
                    for (const i of function(t, e) {
                            var n = t.length,
                                o = e.length,
                                i = new Array(n);
                            if (!n || !o) return i;
                            if (n === o) {
                                for (var s = 0; s < n; s++) i[s] = s;
                                return i
                            }
                            if (o > 1024) return i;
                            var r = new Array(n),
                                c = new Array(n);
                            Ct(t, e, r, c);
                            for (var a = !1, l = (s = n - 1, o - 1); s >= 0; s--)
                                for (; l >= 0; l--)
                                    if (r[s][l] !== St && (a || r[s][l] === c[s][l])) {
                                        a = s && l && c[s][l] === r[s - 1][l - 1] + 1, i[s] = l--;
                                        break
                                    }
                            return i
                        }(e, n)) {
                        "" !== n.slice(o, i) && t.appendChild(document.createTextNode(n.slice(o, i))), o = i + 1;
                        const e = document.createElement("mark");
                        e.textContent = n[i], t.appendChild(e)
                    }
                    t.appendChild(document.createTextNode(n.slice(o)))
                },
                It = new WeakMap,
                Ot = new WeakMap,
                Dt = new WeakMap,
                $t = t => {
                    if (!Dt.has(t) && t instanceof HTMLElement) {
                        const e = (t.getAttribute("data-value") || t.textContent || "").trim();
                        return Dt.set(t, e), e
                    }
                    return Dt.get(t) || ""
                };
            class FuzzyListElement extends HTMLElement {
                connectedCallback() {
                    const t = this.querySelector("ul");
                    if (!t) return;
                    const e = new Set(t.querySelectorAll("li")),
                        n = this.querySelector("input");
                    n instanceof HTMLInputElement && n.addEventListener("input", (() => {
                        this.value = n.value
                    }));
                    const o = new MutationObserver((t => {
                        let n = !1;
                        for (const o of t)
                            if ("childList" === o.type && o.addedNodes.length)
                                for (const t of o.addedNodes)
                                    if (t instanceof HTMLLIElement && !e.has(t)) {
                                        const o = $t(t);
                                        n = n || Mt(this.value, o), e.add(t)
                                    }
                        n && this.sort()
                    }));
                    o.observe(t, {
                        childList: !0
                    });
                    const i = {
                        handler: o,
                        items: e,
                        lazyItems: new Map,
                        timer: null
                    };
                    Ot.set(this, i)
                }
                disconnectedCallback() {
                    const t = Ot.get(this);
                    t && (t.handler.disconnect(), Ot.delete(this))
                }
                addLazyItems(t, e) {
                    const n = Ot.get(this);
                    if (!n) return;
                    const {
                        lazyItems: o
                    } = n, {
                        value: i
                    } = this;
                    let s = !1;
                    for (const r of t) o.set(r, e), s = s || Boolean(i) && Mt(i, r);
                    s && this.sort()
                }
                sort() {
                    const t = It.get(this);
                    t && (t.aborted = !0);
                    const e = {
                        aborted: !1
                    };
                    It.set(this, e);
                    const {
                        minScore: n,
                        markSelector: o,
                        maxMatches: i,
                        value: s
                    } = this, r = Ot.get(this);
                    if (!r) return;
                    if (!this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort", {
                            cancelable: !0,
                            detail: s
                        }))) return;
                    const {
                        items: c,
                        lazyItems: a
                    } = r, l = this.hasAttribute("mark-selector"), u = this.querySelector("ul");
                    if (!u) return;
                    const d = [];
                    if (s) {
                        for (const t of c) {
                            const e = $t(t),
                                o = Ht(s, e, n);
                            o !== -1 / 0 && d.push({
                                item: t,
                                score: o
                            })
                        }
                        for (const [t, e] of a) {
                            const o = Ht(s, t, n);
                            o !== -1 / 0 && d.push({
                                text: t,
                                render: e,
                                score: o
                            })
                        }
                        d.sort(((t, e) => e.score - t.score)).splice(i)
                    } else {
                        let t = d.length;
                        for (const e of c) {
                            if (t >= i) break;
                            d.push({
                                item: e,
                                score: 1
                            }), t += 1
                        }
                        for (const [e, n] of a) {
                            if (t >= i) break;
                            d.push({
                                text: e,
                                render: n,
                                score: 1
                            }), t += 1
                        }
                    }
                    requestAnimationFrame((() => {
                        if (e.aborted) return;
                        const t = u.querySelector('input[type="radio"]:checked');
                        u.innerHTML = "";
                        let n = 0;
                        const i = () => {
                            if (e.aborted) return;
                            const r = Math.min(d.length, n + 100),
                                f = document.createDocumentFragment();
                            for (let t = n; t < r; t += 1) {
                                const e = d[t];
                                let n = null;
                                if ("render" in e && "text" in e) {
                                    const {
                                        render: t,
                                        text: o
                                    } = e;
                                    n = t(o), c.add(n), Dt.set(n, o), a.delete(o)
                                } else "item" in e && (n = e.item);
                                n instanceof HTMLElement && (l && Rt(o && n.querySelector(o) || n, l ? s : "", $t(n)), f.appendChild(n))
                            }
                            n = r;
                            let m = !1;
                            if (t instanceof HTMLInputElement)
                                for (const e of f.querySelectorAll('input[type="radio"]:checked')) e instanceof HTMLInputElement && e.value !== t.value && (e.checked = !1, m = !0);
                            if (u.appendChild(f), t && m && t.dispatchEvent(new Event("change", {
                                    bubbles: !0
                                })), r < d.length) requestAnimationFrame(i);
                            else {
                                u.hidden = 0 === d.length;
                                const t = this.querySelector("[data-fuzzy-list-show-on-empty]");
                                t && (t.hidden = d.length > 0), this.dispatchEvent(new CustomEvent("fuzzy-list-sorted", {
                                    detail: d.length
                                }))
                            }
                        };
                        i()
                    }))
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(t) {
                    this.setAttribute("value", t)
                }
                get markSelector() {
                    return this.getAttribute("mark-selector") || ""
                }
                set markSelector(t) {
                    t ? this.setAttribute("mark-selector", t) : this.removeAttribute("mark-selector")
                }
                get minScore() {
                    return Number(this.getAttribute("min-score") || 0)
                }
                set minScore(t) {
                    Number.isNaN(t) || this.setAttribute("min-score", String(t))
                }
                get maxMatches() {
                    return Number(this.getAttribute("max-matches") || 1 / 0)
                }
                set maxMatches(t) {
                    Number.isNaN(t) || this.setAttribute("max-matches", String(t))
                }
                static get observedAttributes() {
                    return ["value", "mark-selector", "min-score", "max-matches"]
                }
                attributeChangedCallback(t, e, n) {
                    if (e === n) return;
                    const o = Ot.get(this);
                    o && (o.timer && window.clearTimeout(o.timer), o.timer = window.setTimeout((() => this.sort()), 100))
                }
            }

            function _t() {
                return /Windows/.test(navigator.userAgent) ? "windows" : /Macintosh/.test(navigator.userAgent) ? "mac" : null
            }

            function Nt(t) {
                const e = (t.getAttribute("data-platforms") || "").split(","),
                    n = _t();
                return Boolean(n && e.includes(n))
            }
            t("_", FuzzyListElement), window.customElements.get("fuzzy-list") || (window.FuzzyListElement = FuzzyListElement, window.customElements.define("fuzzy-list", FuzzyListElement)), e(".js-remove-unless-platform", (function(t) {
                Nt(t) || t.remove()
            })), e(".js-show-for-platform", {
                constructor: HTMLElement,
                add(t) {
                    Nt(t) && (t.hidden = !1)
                }
            }), e(".js-hide-for-platform", {
                constructor: HTMLElement,
                add(t) {
                    Nt(t) && (t.hidden = !0)
                }
            });
            const Pt = t("a6", "interactive" === document.readyState || "complete" === document.readyState ? Promise.resolve() : new Promise((t => {
                    document.addEventListener("DOMContentLoaded", (() => {
                        t()
                    }))
                }))),
                Bt = t("H", "complete" === document.readyState ? Promise.resolve() : new Promise((t => {
                    window.addEventListener("load", t)
                })));
            let Vt = null;

            function Wt(t) {
                Vt && (Vt.textContent = "", Vt.textContent = t)
            }!async function() {
                await Pt, Vt = document.createElement("div"), Vt.setAttribute("aria-live", "polite"), Vt.classList.add("sr-only"), document.body.append(Vt)
            }();
            const Xt = [];
            let zt, Ut = 0;

            function Ft() {
                return zt
            }

            function Kt() {
                try {
                    return Math.min(Math.max(0, history.length) || 0, 9007199254740991)
                } catch (lo) {
                    return 0
                }
            }

            function Jt() {
                return Kt() - 1 + Ut
            }

            function Yt(t) {
                zt = t;
                const e = location.href;
                Xt[Jt()] = {
                    url: e,
                    state: zt
                }, Xt.length = Kt(), window.dispatchEvent(new CustomEvent("statechange", {
                    bubbles: !1,
                    cancelable: !1
                }))
            }

            function Gt() {
                return (new Date).getTime()
            }

            function Qt(t, e, n) {
                Ut = 0;
                const o = Object.assign({}, {
                    _id: Gt()
                }, t);
                history.pushState(o, e, n), Yt(o)
            }

            function Zt(t, e, n) {
                const o = Object.assign({}, {
                    _id: Ft()._id
                }, t);
                history.replaceState(o, e, n), Yt(o)
            }
            async function te(t, e) {
                let n;
                const o = new Promise((e => {
                    n = self.setTimeout(e, t)
                }));
                if (!e) return o;
                try {
                    await Promise.race([o, ee(e)])
                } catch (lo) {
                    throw self.clearTimeout(n), lo
                }
            }

            function ee(t) {
                return new Promise(((e, n) => {
                    const o = new Error("aborted");
                    o.name = "AbortError", t.aborted ? n(o) : t.addEventListener("abort", (() => n(o)))
                }))
            }
            zt = function() {
                const t = {
                    _id: (new Date).getTime()
                };
                return Yt(t), t
            }(), window.addEventListener("popstate", (function(t) {
                const e = t.state;
                if (!e || !e._id) return;
                e._id < (Ft()._id || NaN) ? Ut-- : Ut++, Yt(e)
            }), !0), window.addEventListener("hashchange", (function() {
                if (Kt() > Xt.length) {
                    const t = {
                        _id: Gt()
                    };
                    history.replaceState(t, "", location.href), Yt(t)
                }
            }), !0);
            const ne = new WeakMap;

            function oe(t) {
                const e = ne.get(t);
                e && (null != e.timer && clearTimeout(e.timer), e.timer = window.setTimeout((() => {
                    null != e.timer && (e.timer = null), e.inputed = !1, e.listener.call(null, t)
                }), e.wait))
            }

            function ie(t) {
                const e = t.currentTarget,
                    n = ne.get(e);
                n && (n.keypressed = !0, null != n.timer && clearTimeout(n.timer))
            }

            function se(t) {
                const e = t.currentTarget,
                    n = ne.get(e);
                n && (n.keypressed = !1, n.inputed && oe(e))
            }

            function re(t) {
                const e = t.currentTarget,
                    n = ne.get(e);
                n && (n.inputed = !0, n.keypressed || oe(e))
            }
            const ce = {},
                ae = {};

            function le() {
                const t = ae[document.location.pathname];
                if (t)
                    for (const e of t) {
                        const t = document.querySelector("#" + e.id);
                        t && t.replaceWith(e)
                    }
            }

            function ue() {
                const t = ce[document.location.pathname];
                if (!t) return;
                const e = document.head;
                for (const n of document.querySelectorAll("head [data-pjax-transient]")) n.remove();
                for (const n of t) n.matches("title, script, link[rel=stylesheet]") ? n.matches("link[rel=stylesheet]") && e.append(n) : (n.setAttribute("data-pjax-transient", ""), e.append(n))
            }

            function de(t, e = location.hash) {
                return fe(t, me(e))
            }

            function fe(t, e) {
                return "" === e ? null : t.getElementById(e) || t.getElementsByName(e)[0]
            }

            function me(t) {
                try {
                    return decodeURIComponent(t.slice(1))
                } catch (e) {
                    return ""
                }
            }

            function pe(t) {
                var e, n;
                const o = null === (n = null === (e = t.head) || void 0 === e ? void 0 : e.querySelector('meta[name="expected-hostname"]')) || void 0 === n ? void 0 : n.content;
                if (!o) return !1;
                return o.replace(/\.$/, "").split(".").slice(-2).join(".") !== t.location.hostname.replace(/\.$/, "").split(".").slice(-2).join(".")
            }(async () => {
                await Pt, ce[document.location.pathname] = Array.from(document.querySelectorAll("head [data-pjax-transient]")), ae[document.location.pathname] = Array.from(document.querySelectorAll("[data-pjax-replace]"))
            })(), document.addEventListener("pjax:beforeReplace", (function(t) {
                const e = t.detail.contents || [];
                for (let n = 0; n < e.length; n++) {
                    const t = e[n];
                    t instanceof Element && ("pjax-head" === t.id ? (ce[document.location.pathname] = Array.from(t.children), e[n] = null) : t.hasAttribute("data-pjax-replace") && (ae[document.location.pathname] || (ae[document.location.pathname] = []), ae[document.location.pathname].push(t), e[n] = null))
                }
            }));
            let he = [];

            function ge(t, e = !1) {
                var n, o;
                void 0 === t.timestamp && (t.timestamp = (new Date).getTime()), t.loggedIn = !!(null === (o = null === (n = document.head) || void 0 === n ? void 0 : n.querySelector('meta[name="user-login"]')) || void 0 === o ? void 0 : o.content), he.push(t), e ? ve() : async function() {
                    await Bt, null == ye && (ye = window.requestIdleCallback(ve))
                }()
            }
            let ye = null;

            function ve() {
                var t, e;
                if (ye = null, pe(document)) return;
                const n = null === (e = null === (t = document.head) || void 0 === t ? void 0 : t.querySelector('meta[name="browser-stats-url"]')) || void 0 === e ? void 0 : e.content;
                if (!n) return;
                const o = JSON.stringify({
                    stats: he
                });
                try {
                    navigator.sendBeacon && navigator.sendBeacon(n, o)
                } catch (i) {}
                he = []
            }
            let be, we = null;

            function Ee(t, e, n) {
                return t.dispatchEvent(new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }
            async function Le(t) {
                const e = Object.assign({
                    push: !0,
                    replace: !1,
                    type: "GET",
                    dataType: "html",
                    scrollTo: 0
                }, t);
                e.requestUrl = e.url;
                const n = Ce(e.url),
                    o = n.hash,
                    i = e.container,
                    s = Me(i);
                "GET" === e.type && (n.search += `${n.search?"&":""}_pjax=${encodeURIComponent(s)}`, e.url = n.toString()), be || (be = {
                    id: Se(),
                    url: window.location.href,
                    title: document.title,
                    container: s,
                    fragment: e.fragment
                }, Zt(be, be.title, be.url)), null == we || we.abort();
                const {
                    signal: r
                } = we = new AbortController;
                var c, a;
                !0 === e.push && !0 !== e.replace && (c = be.id, a = Te(i), Oe[c] = a, $e.push(c), _e(De, 0), _e($e, 20), Qt(null, "", e.requestUrl)), Ee(i, "pjax:start", {
                    url: e.url
                }), Ee(i, "pjax:send");
                let l = void 0;
                try {
                    l = await fetch(e.url, {
                        signal: r,
                        method: e.type,
                        body: e.data,
                        headers: {
                            Accept: "text/html",
                            "X-PJAX": "true",
                            "X-PJAX-Container": s,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch (lo) {
                    l = void 0
                }
                if (!l || !l.ok) {
                    const t = Ee(i, "pjax:error");
                    if ("GET" === e.type && t) {
                        const t = l && l.headers.get("X-PJAX-URL"),
                            n = t ? qe(Ce(t)) : e.requestUrl;
                        ge({
                            pjaxFailureReason: "response_error",
                            requestUrl: e.requestUrl
                        }), xe(n)
                    }
                    return Ee(i, "pjax:complete"), void Ee(i, "pjax:end")
                }
                const u = be,
                    d = function() {
                        for (const t of document.getElementsByTagName("meta")) {
                            const e = t.getAttribute("http-equiv");
                            if (e && "X-PJAX-VERSION" === e.toUpperCase()) return t.content
                        }
                        return null
                    }(),
                    f = l.headers.get("X-PJAX-Version"),
                    m = function(t, e, n) {
                        const o = {
                                url: Ie(e, n.requestUrl),
                                title: ""
                            },
                            i = /<html/i.test(t);
                        if ("text/html" !== (e.headers.get("Content-Type") || "").split(";", 1)[0].trim()) return o;
                        let s, r;
                        if (i) {
                            const e = t.match(/<head[^>]*>([\s\S.]*)<\/head>/i),
                                n = t.match(/<body[^>]*>([\s\S.]*)<\/body>/i);
                            s = e ? Array.from(F(document, e[0]).childNodes) : [], r = n ? Array.from(F(document, n[0]).childNodes) : []
                        } else s = r = Array.from(F(document, t).childNodes);
                        if (0 === r.length) return o;
                        const c = He(s, "title", HTMLTitleElement);
                        let a;
                        if (o.title = c.length > 0 && c[c.length - 1].textContent || "", n.fragment) {
                            if ("body" === n.fragment) a = r;
                            else {
                                const t = He(r, n.fragment, Element);
                                a = t.length > 0 ? [t[0]] : []
                            }
                            if (a.length && ("body" === n.fragment ? o.contents = a : o.contents = a.flatMap((t => Array.from(t.childNodes))), !o.title)) {
                                const t = a[0];
                                t instanceof Element && (o.title = t.getAttribute("title") || t.getAttribute("data-title") || "")
                            }
                        } else i || (o.contents = r);
                        if (o.contents) {
                            o.contents = o.contents.filter((function(t) {
                                return !(t instanceof Element) || !t.matches("title")
                            }));
                            for (const n of o.contents)
                                if (n instanceof Element)
                                    for (const t of n.querySelectorAll("title")) t.remove();
                            const t = He(o.contents, "script[src]", HTMLScriptElement);
                            for (const n of t) n.remove();
                            o.scripts = t, o.contents = o.contents.filter((e => -1 === t.indexOf(e)));
                            const e = He(o.contents, "link[rel=stylesheet]", HTMLLinkElement);
                            for (const n of e) n.remove();
                            o.stylesheets = e, o.contents = o.contents.filter((t => !e.includes(t)))
                        }
                        o.title && (o.title = o.title.trim());
                        return o
                    }(await l.text(), l, e),
                    {
                        contents: p
                    } = m,
                    h = Ce(m.url);
                if (o && (h.hash = o, m.url = h.href), d && f && d !== f) return Ee(i, "pjax:hardLoad", {
                    reason: "version_mismatch"
                }), ge({
                    pjaxFailureReason: "version_mismatch",
                    requestUrl: e.requestUrl
                }), void xe(m.url);
                if (!p) return Ee(i, "pjax:hardLoad", {
                    reason: "missing_response_body"
                }), ge({
                    pjaxFailureReason: "missing_response_body",
                    requestUrl: e.requestUrl
                }), void xe(m.url);
                be = {
                    id: null != e.id ? e.id : Se(),
                    url: m.url,
                    title: m.title,
                    container: s,
                    fragment: e.fragment
                }, !0 !== e.push && !0 !== e.replace || Zt(be, m.title, m.url);
                const g = document.activeElement,
                    y = null != e.container && e.container.contains(g);
                if (g instanceof HTMLElement && y) try {
                    g.blur()
                } catch (lo) {}
                m.title && (document.title = m.title), Ee(i, "pjax:beforeReplace", {
                    contents: p,
                    state: be,
                    previousState: u
                }), Re(i, p), le(), ue();
                const v = i.querySelector("input[autofocus], textarea[autofocus]");
                v && document.activeElement !== v && v.focus(), m.scripts && function(t) {
                    const e = document.querySelectorAll("script[src]");
                    for (const n of t) {
                        const {
                            src: t
                        } = n;
                        if (Array.from(e).some((e => e.src === t))) continue;
                        const o = document.createElement("script"),
                            i = n.getAttribute("type");
                        i && (o.type = i), o.src = t, document.head && document.head.appendChild(o)
                    }
                }(m.scripts), m.stylesheets && function(t) {
                    const e = document.querySelectorAll("link[rel=stylesheet]");
                    for (const n of t) Array.from(e).some((t => t.href === n.href)) || document.head && document.head.appendChild(n)
                }(m.stylesheets);
                let b = e.scrollTo;
                if (o) {
                    const t = de(document, o);
                    if (t) {
                        b = t.getBoundingClientRect().top + window.pageYOffset
                    }
                }
                "number" == typeof b && window.scrollTo(window.pageXOffset, b), Ee(i, "pjax:success"), Ee(i, "pjax:complete"), Ee(i, "pjax:end")
            }

            function xe(t) {
                be && Zt(null, "", be.url), window.location.replace(t)
            }
            let Ae = !0;
            const ke = window.location.href,
                je = window.history.state;

            function Se() {
                return (new Date).getTime()
            }

            function Te(t) {
                const e = t.cloneNode(!0);
                return [Me(t), Array.from(e.childNodes), Date.now()]
            }

            function qe(t) {
                return t.search = t.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""), t.href.replace(/\?($|#)/, "$1")
            }

            function Ce(t) {
                const e = document.createElement("a");
                return e.href = t, e
            }

            function Me(t) {
                if (t.id) return "#" + t.id;
                throw new Error("pjax container has no id")
            }

            function He(t, e, n) {
                let o = [];
                for (const i of t) i instanceof Element && (i instanceof n && i.matches(e) && o.push(i), o = o.concat(Array.from(i.querySelectorAll(e))));
                return o
            }

            function Re(t, e) {
                t.innerHTML = "";
                for (const n of e) null != n && t.appendChild(n)
            }

            function Ie(t, e) {
                const n = t.headers.get("X-PJAX-URL");
                return n ? qe(Ce(n)) : e
            }
            je && je.container && (be = je), "state" in window.history && (Ae = !1);
            const Oe = {},
                De = [],
                $e = [];

            function _e(t, e) {
                for (; t.length > e;) {
                    const e = t.shift();
                    if (null == e) return;
                    delete Oe[e]
                }
            }

            function Ne(t) {
                const e = t.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);
                if (e) {
                    if (1 === e.length) {
                        const t = Pe(e[0]);
                        if (!t) return;
                        return Object.freeze({
                            start: t,
                            end: t
                        })
                    }
                    if (2 === e.length) {
                        const t = Pe(e[0]),
                            n = Pe(e[1]);
                        if (!t || !n) return;
                        return We(Object.freeze({
                            start: t,
                            end: n
                        }))
                    }
                } else;
            }

            function Pe(t) {
                const e = t.match(/L(\d+)/),
                    n = t.match(/C(\d+)/);
                return e ? Object.freeze({
                    line: parseInt(e[1]),
                    column: n ? parseInt(n[1]) : null
                }) : null
            }

            function Be(t, e, n) {
                const o = [null, 0],
                    i = n(t.line);
                if (!i) return o;
                if (null == t.column) return [i, -1];
                let s = t.column - 1;
                const r = Ve(i);
                for (let c = 0; c < r.length; c++) {
                    const t = r[c],
                        n = s - (t.textContent || "").length;
                    if (0 === n) {
                        const n = r[c + 1];
                        return e && n ? [n, 0] : [t, s]
                    }
                    if (n < 0) return [t, s];
                    s = n
                }
                return o
            }

            function Ve(t) {
                if (t.nodeType === Node.TEXT_NODE) return [t];
                if (!t.childNodes || !t.childNodes.length) return [];
                let e = [];
                for (const n of t.childNodes) e = e.concat(Ve(n));
                return e
            }

            function We(t) {
                const e = [t.start, t.end];
                return e.sort(Xe), e[0] === t.start && e[1] === t.end ? t : Object.freeze({
                    start: e[0],
                    end: e[1]
                })
            }

            function Xe(t, e) {
                return t.line === e.line && t.column === e.column ? 0 : t.line === e.line && "number" == typeof t.column && "number" == typeof e.column ? t.column - e.column : t.line - e.line
            }
            window.addEventListener("popstate", (function(t) {
                Ae || null == we || we.abort();
                const e = be,
                    n = t.state;
                let o = null;
                if (n && n.container) {
                    if (Ae && ke === n.url) return;
                    if (e) {
                        if (e.id === n.id) return;
                        o = e.id < n.id ? "forward" : "back"
                    }
                    const [t, i, s] = Oe[n.id] || [], r = document.querySelector(t || n.container);
                    if (r instanceof HTMLElement) {
                        e && function(t, e, n) {
                            let o, i;
                            Oe[e] = n, "forward" === t ? (o = $e, i = De) : (o = De, i = $e);
                            o.push(e);
                            const s = i.pop();
                            s && delete Oe[s];
                            _e(o, 20)
                        }(o, e.id, Te(r)), Ee(r, "pjax:popstate", {
                            state: n,
                            direction: o,
                            cachedAt: s
                        });
                        const t = {
                            id: n.id,
                            url: n.url,
                            container: r,
                            push: !1,
                            fragment: n.fragment || "",
                            scrollTo: !1
                        };
                        i ? (Ee(r, "pjax:start"), be = n, n.title && (document.title = n.title), Ee(r, "pjax:beforeReplace", {
                            contents: i,
                            state: n,
                            previousState: e
                        }), Re(r, i), le(), ue(), Ee(r, "pjax:end")) : Le(t), r.offsetHeight
                    } else ge({
                        pjaxFailureReason: "no_container",
                        requestUrl: null == e ? void 0 : e.url
                    }), xe(location.href)
                }
                Ae = !1
            }));
            const ze = [];
            let Ue = 0;

            function Fe(t) {
                !async function() {
                    ze.push(t), await Pt,
                        function() {
                            const t = Ue;
                            Ue = ze.length, Ke(ze.slice(t), null, window.location.href)
                        }()
                }()
            }

            function Ke(t, e, n) {
                const o = window.location.hash.slice(1),
                    i = {
                        oldURL: e,
                        newURL: n,
                        target: o ? document.getElementById(o) : null
                    };
                for (const s of t) s.call(null, i)
            }
            Fe.clear = () => {
                ze.length = Ue = 0
            };
            let Je = window.location.href;
            window.addEventListener("popstate", (function() {
                Je = window.location.href
            })), window.addEventListener("hashchange", (function(t) {
                const e = window.location.href;
                try {
                    Ke(ze, t.oldURL || Je, e)
                } finally {
                    Je = e
                }
            }));
            let Ye = null;

            function Ge(t) {
                const e = t.split("‍");
                let n = 0;
                for (const o of e) {
                    n += Array.from(o.split(/[\ufe00-\ufe0f]/).join("")).length
                }
                return n / e.length
            }

            function Qe(t) {
                return t.hasAttribute("data-maxlength") ? parseInt(t.getAttribute("data-maxlength") || "") : t.maxLength
            }

            function Ze(t) {
                const e = Qe(t);
                ! function(t, e, n) {
                    const o = n.closest(".js-characters-remaining-container");
                    if (!o) return;
                    const i = o.querySelector(".js-characters-remaining"),
                        s = String(i.getAttribute("data-suffix")),
                        r = e - Ge(t);
                    r <= 20 ? (i.textContent = `${r} ${s}`, i.classList.toggle("color-text-danger", r <= 5), i.hidden = !1) : i.hidden = !0
                }(t.value, e, t)
            }

            function tn(t) {
                const e = [];
                for (const n of function() {
                        try {
                            return document.cookie.split(";")
                        } catch (t) {
                            return []
                        }
                    }()) {
                    const [o, i] = n.trim().split("=");
                    t === o && void 0 !== i && e.push({
                        key: o,
                        value: i
                    })
                }
                return e
            }

            function en(t, e, n = null, o = !1, i = "lax") {
                let s = document.domain;
                if (null == s) throw new Error("Unable to get document domain");
                s.endsWith(".github.com") && (s = "github.com");
                const r = "https:" === location.protocol ? "; secure" : "",
                    c = n ? "; expires=" + n : "";
                !1 === o && (s = "." + s);
                try {
                    document.cookie = `${t}=${e}; path=/; domain=${s}${c}${r}; samesite=${i}`
                } catch (a) {}
            }

            function nn(t) {
                if (!window._octo) return;
                const e = Math.floor((new Date).getTime() / 1e3);
                t.timestamp = e;
                const n = 'meta[name="octolytics-event-url"]';
                if (document.head && document.head.querySelector(n)) {
                    const e = document.head.querySelector(n).content,
                        i = JSON.stringify(t);
                    try {
                        navigator.sendBeacon && navigator.sendBeacon(e, i)
                    } catch (o) {}
                }
            }
            document.addEventListener("pjax:start", (function() {
                Ye = window.location.href
            })), document.addEventListener("pjax:end", (function() {
                Ke(ze, Ye, window.location.href)
            })), tt(".js-characters-remaining-field", (function(t) {
                function e() {
                    (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && Ze(t)
                }
                e(), t.addEventListener("input", e), t.addEventListener("blur", (() => {
                    t.removeEventListener("input", e)
                }), {
                    once: !0
                })
            })), i("click", "[data-octo-click]", (function(t) {
                if (!window._octo) return;
                const e = t.currentTarget,
                    n = e instanceof HTMLElement && e.getAttribute("data-octo-click") || "",
                    o = {};
                o.event_type = n;
                const i = {},
                    s = {},
                    r = {};
                let c = [];
                e instanceof HTMLElement && e.hasAttribute("data-octo-dimensions") && (c = (e.getAttribute("data-octo-dimensions") || "").split(","));
                const a = document.head ? document.head.querySelectorAll('meta[name^="octolytics-"]') : [];
                for (const u of a)
                    if (u instanceof HTMLMetaElement)
                        if (u.name.startsWith("octolytics-dimension-")) {
                            i[u.name.replace(/^octolytics-dimension-/, "")] = u.content
                        } else if (u.name.startsWith("octolytics-measure-")) {
                    s[u.name.replace(/^octolytics-measure-/, "")] = u.content
                } else if (u.name.startsWith("octolytics-context-")) {
                    r[u.name.replace(/^octolytics-context-/, "")] = u.content
                } else if (u.name.startsWith("octolytics-actor-")) {
                    i[u.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = u.content
                } else if (u.name.startsWith("octolytics-")) {
                    o[u.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = u.content
                }
                const l = document.querySelector("meta[name=visitor-payload]");
                if (l instanceof HTMLMetaElement) {
                    const t = JSON.parse(atob(l.content));
                    Object.assign(i, t)
                }
                if (e instanceof HTMLElement && e.hasAttribute("data-ga-click")) {
                    const t = (e.getAttribute("data-ga-click") || "").split(",").map((t => t.trim()));
                    i.category = t[0], i.action = t[1]
                }
                for (const u of c) {
                    const t = u.split(":"),
                        e = t.shift();
                    e && (i[e] = t.join(":"))
                }
                o.dimensions = i, o.measures = s, o.context = r, nn(o)
            }));
            const on = new WeakMap;

            function sn(t) {
                if (!(t instanceof CustomEvent)) throw new Error("assert: event is not a CustomEvent");
                const e = t.detail.editor;
                if (!t.target) throw new Error("assert: event.target is null");
                return on.set(t.target, e), e
            }
            i("codeEditor:ready", ".js-code-editor", sn);
            const rn = "ontransitionend" in window;

            function cn(t) {
                return "height" === getComputedStyle(t).transitionProperty
            }

            function an(t, e) {
                t.style.transition = "none", e(), t.offsetHeight, t.style.transition = ""
            }

            function ln(t, e) {
                const n = t.getAttribute("data-details-container-group");
                return n ? (vt(t, (() => {
                    for (const o of function(t) {
                            return [...document.querySelectorAll(".js-details-container")].filter((e => e.getAttribute("data-details-container-group") === t))
                        }(n)) o !== t && un(o, e)
                })), n) : null
            }

            function un(t, e) {
                t.classList.toggle("open", e), t.classList.toggle("Details--on", e);
                for (const n of function(t) {
                        return [...t.querySelectorAll(".js-details-target")].filter((e => e.closest(".js-details-container") === t))
                    }(t)) n.setAttribute("aria-expanded", e.toString())
            }

            function dn(t, e) {
                var n, o;
                const i = t.getAttribute("data-details-container") || ".js-details-container",
                    s = t.closest(i),
                    r = null !== (n = null == e ? void 0 : e.force) && void 0 !== n ? n : !s.classList.contains("open"),
                    c = null !== (o = null == e ? void 0 : e.withGroup) && void 0 !== o && o;
                ! function(t, e) {
                    if (!rn) return void e();
                    const n = Array.from(t.querySelectorAll(".js-transitionable"));
                    t.classList.contains("js-transitionable") && n.push(t);
                    for (const o of n) {
                        const t = cn(o);
                        o instanceof HTMLElement && (o.addEventListener("transitionend", (() => {
                            o.style.display = "", o.style.visibility = "", t && an(o, (function() {
                                o.style.height = ""
                            }))
                        }), {
                            once: !0
                        }), o.style.boxSizing = "content-box", o.style.display = "block", o.style.visibility = "visible", t && an(o, (function() {
                            o.style.height = getComputedStyle(o).height
                        })), o.offsetHeight)
                    }
                    e();
                    for (const o of n)
                        if (o instanceof HTMLElement && cn(o)) {
                            const t = getComputedStyle(o).height;
                            o.style.boxSizing = "", o.style.height = "0px" === t ? o.scrollHeight + "px" : "0px"
                        }
                }(s, (() => {
                    un(s, r);
                    const e = c ? ln(s, r) : null;
                    Promise.resolve().then((() => {
                        ! function(t) {
                            const e = t.querySelectorAll("input[autofocus], textarea[autofocus]"),
                                n = e[e.length - 1];
                            n && document.activeElement !== n && n.focus()
                        }(s),
                        function(t) {
                            t.classList.contains("tooltipped") && (t.classList.remove("tooltipped"), t.addEventListener("mouseleave", (() => {
                                t.classList.add("tooltipped"), t.blur()
                            }), {
                                once: !0
                            }))
                        }(t), s.dispatchEvent(new CustomEvent("details:toggled", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                open: r
                            }
                        })), e && s.dispatchEvent(new CustomEvent("details:toggled-group", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                open: r,
                                group: e
                            }
                        }))
                    }))
                }))
            }

            function fn(t) {
                let e = !1,
                    n = t.parentElement;
                for (; n;) n.classList.contains("Details-content--shown") && (e = !0), n.classList.contains("js-details-container") && (n.classList.toggle("open", !e), n.classList.toggle("Details--on", !e), e = !1), n = n.parentElement
            }

            function mn(t, e) {
                let n = t;
                if (n === e) return 1;
                const o = n.length;
                let i = 0,
                    s = 0;
                for (let l = 0; l < e.length; l++) {
                    const t = e[l],
                        r = n.indexOf(t.toLowerCase()),
                        c = n.indexOf(t.toUpperCase()),
                        a = Math.min(r, c),
                        u = a > -1 ? a : Math.max(r, c);
                    if (-1 === u) return 0;
                    i += .1, n[u] === t && (i += .1), 0 === u && (i += .8, 0 === l && (s = 1)), " " === n.charAt(u - 1) && (i += .8), n = n.substring(u + 1, o)
                }
                const r = e.length,
                    c = i / r;
                let a = (c * (r / o) + c) / 2;
                return s && a + .1 < 1 && (a += .1), a
            }

            function* pn(t, e) {
                for (const n of t) {
                    const t = e(n);
                    null != t && (yield t)
                }
            }

            function hn(t) {
                const e = document.querySelector(".sso-modal");
                e && (e.classList.remove("success", "error"), t ? e.classList.add("success") : e.classList.add("error"))
            }
            i("click", ".js-details-target", (function(t) {
                const e = t.altKey;
                dn(t.currentTarget, {
                    withGroup: e
                }), t.preventDefault()
            })), i("click", ".js-close-menu", (function(t) {
                var e;
                const n = t.target;
                if (!(n instanceof HTMLElement)) return;
                const o = n.getAttribute("data-details-container") || ".js-details-container";
                null === (e = n.closest(o).querySelector(".js-open-menu")) || void 0 === e || e.focus()
            })), Fe((function({
                target: t
            }) {
                t && fn(t)
            })), e(".js-sso-modal-complete", (function(t) {
                if (window.opener && window.opener.external.ssoComplete) {
                    const e = t.getAttribute("data-error"),
                        n = t.getAttribute("data-expires-around");
                    window.opener.external.ssoComplete({
                        error: e,
                        expiresAround: n
                    }), window.close()
                } else {
                    const e = t.getAttribute("data-fallback-url");
                    e && (window.location.href = e)
                }
            }));
            let gn = null;

            function yn() {
                gn = null
            }
            i("click", ".js-skip-to-content", (function(t) {
                const e = document.getElementById("start-of-content");
                if (e) {
                    const t = e.nextElementSibling;
                    t instanceof HTMLElement && (t.setAttribute("tabindex", "-1"), t.setAttribute("data-skipped-to-content", "1"), t.focus())
                }
                t.preventDefault()
            }));
            const vn = "ontouchstart" in document;
            for (const t of document.querySelectorAll(".HeaderMenu-details")) t.addEventListener("toggle", wn), vn || (t.addEventListener("mouseover", En), t.addEventListener("mouseleave", En));
            let bn = !1;

            function wn(t) {
                if (!bn) {
                    bn = !0;
                    for (const e of document.querySelectorAll(".HeaderMenu-details")) e !== t.currentTarget && e.removeAttribute("open");
                    setTimeout((() => bn = !1))
                }
            }

            function En(t) {
                const {
                    currentTarget: e
                } = t;
                e instanceof HTMLElement && window.innerWidth > 1012 && ("mouseover" === t.type && t instanceof MouseEvent ? t.target instanceof Node && t.relatedTarget instanceof Node && e.contains(t.target) && !e.contains(t.relatedTarget) && e.setAttribute("open", "") : e.removeAttribute("open"))
            }
            let Ln = !1,
                xn = 0;
            const An = [];

            function kn() {
                An.length ? Ln || (window.addEventListener("resize", Sn), document.addEventListener("scroll", Sn), Ln = !0) : (window.removeEventListener("resize", Sn), document.removeEventListener("scroll", Sn), Ln = !1)
            }

            function jn() {
                Tn(!0)
            }

            function Sn() {
                Tn()
            }

            function Tn(t = !1) {
                for (const e of An)
                    if (e.element.offsetHeight > 0) {
                        const {
                            element: n,
                            placeholder: o,
                            top: i
                        } = e, s = n.getBoundingClientRect();
                        if (o) {
                            const r = o.getBoundingClientRect();
                            n.classList.contains("is-stuck") ? r.top > $n(n, i) ? Cn(e) : Mn(e) : s.top <= $n(n, i) ? qn(e) : t && Mn(e)
                        } else s.top <= $n(n, i) ? qn(e) : Cn(e)
                    }
            }

            function qn({
                element: t,
                placeholder: e,
                top: n
            }) {
                if (e) {
                    const o = t.getBoundingClientRect();
                    _n(t, $n(t, n)), t.style.left = o.left + "px", t.style.width = o.width + "px", t.style.marginTop = "0", t.style.position = "fixed", e.style.display = "block"
                }
                t.classList.add("is-stuck")
            }

            function Cn({
                element: t,
                placeholder: e
            }) {
                e && (t.style.position = "static", t.style.marginTop = e.style.marginTop, e.style.display = "none"), t.classList.remove("is-stuck")
            }

            function Mn({
                element: t,
                placeholder: e,
                offsetParent: n,
                top: o
            }) {
                if (e && ! function() {
                        let t = !1;
                        const e = document.getElementById("start-of-content");
                        if (e) {
                            const n = e.nextElementSibling;
                            if (n instanceof HTMLElement) return t = "1" === n.getAttribute("data-skipped-to-content"), t && n.removeAttribute("data-skipped-to-content"), t
                        }
                    }()) {
                    const i = t.getBoundingClientRect(),
                        s = e.getBoundingClientRect();
                    if (_n(t, $n(t, o)), t.style.left = s.left + "px", t.style.width = s.width + "px", n) {
                        const e = n.getBoundingClientRect();
                        e.bottom < i.height + parseInt(String(o)) && (t.style.top = e.bottom - i.height + "px")
                    }
                }
            }

            function Hn(t) {
                if (function(t) {
                        const {
                            position: e
                        } = window.getComputedStyle(t);
                        return /sticky/.test(e)
                    }(t)) return null;
                const e = t.previousElementSibling;
                if (e && e.classList.contains("is-placeholder")) return e;
                const n = document.createElement("div");
                return n.style.visibility = "hidden", n.style.display = "none", n.style.height = window.getComputedStyle(t).height, n.className = t.className, n.classList.remove("js-sticky"), n.classList.add("is-placeholder"), t.parentNode.insertBefore(n, t)
            }
            async function Rn(t) {
                await Bt,
                function(t) {
                    const e = Hn(t),
                        n = window.getComputedStyle(t).position;
                    t.style.position = "static";
                    const o = t.offsetParent;
                    t.style.position = "fixed";
                    const i = Dn(t),
                        s = {
                            element: t,
                            placeholder: e,
                            offsetParent: o,
                            top: "auto" === i ? 0 : parseInt(i || "0")
                        };
                    t.style.position = n, An.push(s)
                }(t), Tn(), kn()
            }

            function In() {
                for (const t of document.querySelectorAll(".js-position-sticky, .js-notification-shelf-offset-top")) On(t)
            }

            function On(t) {
                if (t.classList.contains("js-notification-top-shelf")) return;
                _n(t, (parseInt(Dn(t)) || 0) + xn)
            }

            function Dn(t) {
                const e = t.getAttribute("data-original-top");
                if (null != e) return e;
                const n = window.getComputedStyle(t).top;
                return t.setAttribute("data-original-top", n), n
            }

            function $n(t, e) {
                return t.classList.contains("js-notification-top-shelf") ? e : e + xn
            }

            function _n(t, e) {
                t.style.setProperty("top", e + "px", "important")
            }

            function Nn(t) {
                const e = t.ownerDocument;
                setTimeout((() => {
                    e && e.defaultView && (t.scrollIntoView(), e.defaultView.scrollBy(0, -Pn(e)))
                }), 0)
            }

            function Pn(t) {
                jn();
                const e = t.querySelectorAll(".js-sticky-offset-scroll"),
                    n = t.querySelectorAll(".js-position-sticky"),
                    o = Math.max(0, ...Array.from(e).map((t => {
                        const {
                            top: e,
                            height: n
                        } = t.getBoundingClientRect();
                        return 0 === e ? n : 0
                    }))) + Math.max(0, ...Array.from(n).map((t => {
                        const {
                            top: e,
                            height: n
                        } = t.getBoundingClientRect(), o = parseInt(getComputedStyle(t).top);
                        if (!t.parentElement) return 0;
                        const i = t.parentElement.getBoundingClientRect().top;
                        return e === o && i < 0 ? n : 0
                    }))),
                    i = t.querySelectorAll(".js-position-sticky-stacked");
                return o + Array.from(i).reduce(((t, e) => {
                    const {
                        height: n,
                        top: o
                    } = e.getBoundingClientRect(), i = o < 0, s = e.classList.contains("is-stuck");
                    return t + (!i && s ? n : 0)
                }), 0)
            }

            function Bn(t, e, n) {
                const o = {
                        hydroEventPayload: t,
                        hydroEventHmac: e,
                        visitorPayload: "",
                        visitorHmac: "",
                        hydroClientContext: n
                    },
                    i = document.querySelector("meta[name=visitor-payload]");
                i instanceof HTMLMetaElement && (o.visitorPayload = i.content);
                const s = document.querySelector("meta[name=visitor-hmac]") || "";
                s instanceof HTMLMetaElement && (o.visitorHmac = s.content), ge(o, !0)
            }

            function Vn(t) {
                Bn(t.getAttribute("data-hydro-view") || "", t.getAttribute("data-hydro-view-hmac") || "", t.getAttribute("data-hydro-client-context") || "")
            }
            e(".js-sticky", {
                constructor: HTMLElement,
                add(t) {
                    Rn(t)
                },
                remove(t) {
                    ! function(t) {
                        const e = An.map((t => t.element)).indexOf(t);
                        An.splice(e, 1)
                    }(t), kn()
                }
            }), e(".js-notification-top-shelf", {
                constructor: HTMLElement,
                add(t) {
                    !async function(t) {
                        if (null === t.offsetParent) return;
                        await Bt;
                        const e = Math.floor(t.getBoundingClientRect().height);
                        e > 0 && (xn = e, In(), jn())
                    }(t)
                },
                remove() {
                    for (const t of document.querySelectorAll(".js-notification-top-shelf")) t.remove();
                    xn > 0 && (xn = 0, In(), jn())
                }
            }), e(".js-notification-shelf-offset-top, .js-position-sticky, .js-position-sticky-stacked", {
                constructor: HTMLElement,
                add: On
            });
            const Wn = .6,
                Xn = .4;

            function zn(t) {
                const e = function(t) {
                        const e = [...Object.values(t)].reduce(((t, e) => t + e.visitCount), 0);
                        return new Map(Object.keys(t).map((n => [n, t[n].visitCount / e])))
                    }(t),
                    n = function(t) {
                        const e = (o = [...Object.keys(t)], i = e => t[e].lastVisitedAt, o.sort(((t, e) => i(t) - i(e)))),
                            n = e.length;
                        var o, i;
                        return new Map(e.map(((t, e) => [t, (e + 1) / n])))
                    }(t);
                return function(t) {
                    return o = e.get(t) || 0, i = n.get(t) || 0, o * Wn + i * Xn;
                    var o, i
                }
            }
            const Un = /^\/orgs\/([a-z0-9-]+)\/teams\/([\w-]+)/,
                Fn = [/^\/([^/]+)\/([^/]+)\/?$/, /^\/([^/]+)\/([^/]+)\/blob/, /^\/([^/]+)\/([^/]+)\/tree/, /^\/([^/]+)\/([^/]+)\/issues/, /^\/([^/]+)\/([^/]+)\/pulls?/, /^\/([^/]+)\/([^/]+)\/pulse/],
                Kn = [
                    ["organization", /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/],
                    ["repository", /^\/([^/]+)\/([^/]+)\/projects\/([0-9-]+)/]
                ];

            function Jn(t) {
                const e = no(),
                    n = Math.floor(Date.now() / 1e3),
                    o = e[t] || {
                        lastVisitedAt: n,
                        visitCount: 0
                    };
                o.visitCount += 1, o.lastVisitedAt = n, e[t] = o, eo(function(t) {
                    const e = Object.keys(t);
                    if (e.length <= 100) return t;
                    const n = zn(t),
                        o = e.sort(((t, e) => n(e) - n(t))).slice(0, 50);
                    return Object.fromEntries(o.map((e => [e, t[e]])))
                }(e))
            }

            function Yn(t, e) {
                return `team:${t}/${e}`
            }

            function Gn(t, e) {
                return `repository:${t}/${e}`
            }

            function Qn(t, e) {
                return `project:${t}/${e}`
            }
            const Zn = /^(team|repository|project):[^/]+\/[^/]+(\/([^/]+))?$/,
                to = "jump_to:page_views";

            function eo(t) {
                ! function(t, e) {
                    try {
                        window.localStorage.setItem(t, e)
                    } catch (n) {}
                }(to, JSON.stringify(t))
            }

            function no() {
                const t = function(t) {
                    try {
                        return window.localStorage.getItem(t)
                    } catch (e) {
                        return null
                    }
                }(to);
                if (!t) return {};
                let e;
                try {
                    e = JSON.parse(t)
                } catch (o) {
                    return eo({}), {}
                }
                const n = {};
                for (const i in e) i.match(Zn) && (n[i] = e[i]);
                return n
            }
            const oo = X((function() {
                var t, e;
                return ((null === (e = null === (t = document.head) || void 0 === t ? void 0 : t.querySelector('meta[name="enabled-features"]')) || void 0 === e ? void 0 : e.content) || "").split(",")
            }));
            t("a5", X((function(t) {
                return -1 !== oo().indexOf(t)
            })));

            function io(t) {
                const e = document.querySelectorAll(t);
                if (e.length > 0) return e[e.length - 1]
            }
            class NoOpStorage {
                getItem() {
                    return null
                }
                setItem() {}
                removeItem() {}
                clear() {}
                key() {
                    return null
                }
                get length() {
                    return 0
                }
            }

            function so(t, e = {
                throwQuotaErrorsOnSet: !1
            }, n = window) {
                let o;
                try {
                    o = n[t]
                } catch (s) {
                    o = new NoOpStorage
                }
                const {
                    throwQuotaErrorsOnSet: i
                } = e;
                return {
                    getItem: function(t) {
                        try {
                            return o.getItem(t)
                        } catch (e) {
                            return null
                        }
                    },
                    setItem: function(t, e) {
                        try {
                            o.setItem(t, e)
                        } catch (n) {
                            if (i && n.message.toLowerCase().includes("quota")) throw n
                        }
                    },
                    removeItem: function(t) {
                        try {
                            o.removeItem(t)
                        } catch (e) {}
                    }
                }
            }
            const {
                getItem: ro,
                setItem: co,
                removeItem: ao
            } = so("sessionStorage");

            function lo(t) {
                const e = "==".slice(0, (4 - t.length % 4) % 4),
                    n = t.replace(/-/g, "+").replace(/_/g, "/") + e,
                    o = atob(n),
                    i = new ArrayBuffer(o.length),
                    s = new Uint8Array(i);
                for (let r = 0; r < o.length; r++) s[r] = o.charCodeAt(r);
                return i
            }

            function uo(t) {
                const e = new Uint8Array(t);
                let n = "";
                for (const o of e) n += String.fromCharCode(o);
                return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }

            function fo(t, e, n) {
                if ("copy" === e) return n;
                if ("convert" === e) return t(n);
                if (e instanceof Array) return n.map((n => fo(t, e[0], n)));
                if (e instanceof Object) {
                    const o = {};
                    for (const [i, s] of Object.entries(e))
                        if (i in n) null != n[i] ? o[i] = fo(t, s.schema, n[i]) : o[i] = null;
                        else if (s.required) throw new Error("Missing key: " + i);
                    return o
                }
            }

            function mo(t) {
                return {
                    required: !0,
                    schema: t
                }
            }

            function po(t) {
                return {
                    required: !1,
                    schema: t
                }
            }
            t({
                af: ro,
                ag: co,
                ae: ao
            });
            const ho = {
                    type: mo("copy"),
                    id: mo("convert"),
                    transports: po("copy")
                },
                go = {
                    appid: po("copy"),
                    appidExclude: po("copy"),
                    credProps: po("copy")
                },
                yo = {
                    appid: po("copy"),
                    appidExclude: po("copy"),
                    credProps: po("copy")
                },
                vo = {
                    publicKey: mo({
                        rp: mo("copy"),
                        user: mo({
                            id: mo("convert"),
                            name: mo("copy"),
                            displayName: mo("copy")
                        }),
                        challenge: mo("convert"),
                        pubKeyCredParams: mo("copy"),
                        timeout: po("copy"),
                        excludeCredentials: po([ho]),
                        authenticatorSelection: po("copy"),
                        attestation: po("copy"),
                        extensions: po(go)
                    }),
                    signal: po("copy")
                },
                bo = {
                    type: mo("copy"),
                    id: mo("copy"),
                    rawId: mo("convert"),
                    response: mo({
                        clientDataJSON: mo("convert"),
                        attestationObject: mo("convert")
                    }),
                    clientExtensionResults: mo(yo)
                },
                wo = {
                    mediation: po("copy"),
                    publicKey: mo({
                        challenge: mo("convert"),
                        timeout: po("copy"),
                        rpId: po("copy"),
                        allowCredentials: po([ho]),
                        userVerification: po("copy"),
                        extensions: po(go)
                    }),
                    signal: po("copy")
                },
                Eo = {
                    type: mo("copy"),
                    id: mo("copy"),
                    rawId: mo("convert"),
                    response: mo({
                        clientDataJSON: mo("convert"),
                        authenticatorData: mo("convert"),
                        signature: mo("convert"),
                        userHandle: mo("convert")
                    }),
                    clientExtensionResults: mo(yo)
                };

            function Lo() {
                return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential)
            }

            function xo() {
                return Lo() ? "supported" : "unsupported"
            }
            let Ao = !1;
            async function ko() {
                const t = document.querySelector("link[rel=sudo-modal]"),
                    e = document.querySelector(".js-sudo-prompt");
                if (e instanceof HTMLTemplateElement) return e;
                if (t) {
                    const e = await Y(document, function(t) {
                        const e = new URL(t, window.location.origin),
                            n = new URLSearchParams(e.search.slice(1));
                        return n.set("webauthn-support", xo()), e.search = n.toString(), e.toString()
                    }(t.href));
                    return document.body.appendChild(e), document.querySelector(".js-sudo-prompt")
                }
                throw new Error("couldn't load sudo prompt")
            }
            let jo = !1;
            async function So() {
                if (Ao) return !1;
                Ao = !0, jo = !1;
                const t = (await ko()).content.cloneNode(!0),
                    e = await ot({
                        content: t
                    });
                return await new Promise((t => {
                    e.addEventListener("dialog:remove", (function() {
                        Ao = !1, t()
                    }), {
                        once: !0
                    })
                })), jo
            }

            function To(t) {
                if (t.querySelector(".js-task-list-field")) {
                    const e = t.querySelectorAll("task-lists");
                    for (const t of e)
                        if (t instanceof a) {
                            t.disabled = !1;
                            const e = t.querySelectorAll("button");
                            for (const t of e) t.disabled = !1
                        }
                }
            }

            function qo(t) {
                for (const e of t.querySelectorAll("task-lists"))
                    if (e instanceof a) {
                        e.disabled = !0;
                        const t = e.querySelectorAll("button");
                        for (const e of t) e.disabled = !0
                    }
            }

            function Co(t, e, n) {
                const o = t.querySelector(".js-comment-update");
                qo(t), Bo(t);
                const i = o.elements.namedItem("task_list_track");
                i instanceof Element && i.remove();
                const s = o.elements.namedItem("task_list_operation");
                s instanceof Element && s.remove();
                const r = document.createElement("input");
                r.setAttribute("type", "hidden"), r.setAttribute("name", "task_list_track"), r.setAttribute("value", e), o.appendChild(r);
                const c = document.createElement("input");
                if (c.setAttribute("type", "hidden"), c.setAttribute("name", "task_list_operation"), c.setAttribute("value", JSON.stringify(n)), o.appendChild(c), !o.elements.namedItem("task_list_key")) {
                    const t = o.querySelector(".js-task-list-field").getAttribute("name").split("[")[0],
                        e = document.createElement("input");
                    e.setAttribute("type", "hidden"), e.setAttribute("name", "task_list_key"), e.setAttribute("value", t), o.appendChild(e)
                }
                t.classList.remove("is-comment-stale"), lt(o)
            }
            c(".js-sudo-form", (async function(t, e) {
                try {
                    await e.text()
                } catch (n) {
                    if (!n.response) throw n;
                    let e;
                    switch (n.response.status) {
                        case 401:
                            e = "Incorrect password.";
                            break;
                        case 429:
                            e = "Too many password attempts. Please wait and try again later.";
                            break;
                        default:
                            e = "Failed to receive a response. Please try again later."
                    }
                    return t.querySelector(".js-sudo-error").textContent = e, t.querySelector(".js-sudo-error").hidden = !1, void(t.querySelector(".js-sudo-password").value = "")
                }
                jo = !0, t.closest("details").removeAttribute("open")
            })), e(".js-task-list-container .js-task-list-field", (function(t) {
                const e = t.closest(".js-task-list-container");
                To(e), Bo(e)
            })), i("task-lists-move", "task-lists", (function(t) {
                const {
                    src: e,
                    dst: n
                } = t.detail;
                Co(t.currentTarget.closest(".js-task-list-container"), "reordered", {
                    operation: "move",
                    src: e,
                    dst: n
                })
            })), i("task-lists-check", "task-lists", (function(t) {
                const {
                    position: e,
                    checked: n
                } = t.detail;
                Co(t.currentTarget.closest(".js-task-list-container"), "checked:" + (n ? 1 : 0), {
                    operation: "check",
                    position: e,
                    checked: n
                })
            })), c(".js-task-list-container .js-comment-update", (async function(t, e) {
                const n = t.closest(".js-task-list-container"),
                    o = t.elements.namedItem("task_list_track");
                o instanceof Element && o.remove();
                const i = t.elements.namedItem("task_list_operation");
                let s;
                i instanceof Element && i.remove();
                try {
                    s = await e.json()
                } catch (r) {
                    let t;
                    try {
                        t = JSON.parse(r.response.text)
                    } catch (lo) {}
                    if (t && t.stale) {
                        const t = n.querySelector(".js-task-list-field");
                        t.classList.add("session-resumable-canceled"), t.classList.remove("js-session-resumable")
                    } else window.location.reload()
                }
                s && (i && s.json.source && (n.querySelector(".js-task-list-field").value = s.json.source), To(n), requestAnimationFrame((() => Bo(n))))
            }));
            let Mo = !1,
                Ho = !1;

            function Ro(t) {
                const e = "insertLineBreak" === t.inputType;
                Mo = !!e
            }

            function Io(t) {
                const e = t;
                if (!Mo) {
                    if (!("insertLineBreak" === e.inputType)) return
                }! function(t) {
                    const e = function(t, e) {
                        const n = e[0];
                        if (!n || !t) return;
                        const o = t.substring(0, n).split("\n"),
                            i = o[o.length - 2],
                            s = null == i ? void 0 : i.match(Po);
                        if (!s) return;
                        const r = s[0],
                            c = s[1],
                            a = s[2],
                            l = parseInt(s[3], 10),
                            u = Boolean(s[4]);
                        let d = `${isNaN(l)?a:l+1+"."} ${u?"[ ] ":""}`,
                            f = t.indexOf("\n", n);
                        f < 0 && (f = t.length);
                        const m = t.substring(n, f);
                        m.startsWith(d) && (d = "");
                        if (i.replace(r, "").trim().length > 0 || m.trim().length > 0) {
                            const e = `${c}${d}`;
                            return {
                                text: t.substring(0, n) + e + t.substring(n),
                                selection: [n + e.length, n + e.length]
                            }
                        } {
                            const e = n - ("\n" + r).length;
                            return {
                                text: t.substring(0, e) + t.substring(n),
                                selection: [e, e]
                            }
                        }
                    }(t.value, [t.selectionStart, t.selectionEnd]);
                    if (void 0 === e) return;
                    t.value = e.text, t.selectionStart = e.selection[0], t.selectionEnd = e.selection[1]
                }(e.target), Mo = !1
            }

            function Oo(t) {
                if (Ho) return;
                const e = t;
                if ("Enter" === e.key && e.shiftKey && !e.metaKey) {
                    const t = e.target,
                        o = function(t, e) {
                            const n = e[0];
                            if (!n || !t) return;
                            const o = t.substring(0, n).split("\n"),
                                i = o[o.length - 1],
                                s = null == i ? void 0 : i.match(No);
                            if (!s) return;
                            const r = "\n" + (s[1] || "");
                            return {
                                text: t.substring(0, n) + r + t.substring(n),
                                selection: [n + r.length, n + r.length]
                            }
                        }(t.value, [t.selectionStart, t.selectionEnd]);
                    if (void 0 === o) return;
                    t.value = o.text, t.selectionStart = o.selection[0], t.selectionEnd = o.selection[1], e.preventDefault(), n(t, "change")
                }
            }

            function Do() {
                Ho = !0
            }

            function $o() {
                Ho = !1
            }

            function _o(t) {
                if (Ho) return;
                const e = t;
                if ("Escape" === e.key) return void
                function(t) {
                    const e = t.target;
                    "backward" === e.selectionDirection ? e.selectionEnd = e.selectionStart : e.selectionStart = e.selectionEnd
                }(t);
                if ("Tab" !== e.key) return;
                const n = e.target,
                    o = function(t, e, n) {
                        const o = e[0] || 0,
                            i = e[1] || o;
                        if (null === e[0] || o === i) return;
                        const s = t.substring(0, o).lastIndexOf("\n") + 1,
                            r = t.indexOf("\n", i - 1),
                            c = r > 0 ? r : t.length - 1,
                            a = t.substring(s, c).split("\n");
                        let l = !1,
                            u = 0,
                            d = 0;
                        const f = [];
                        for (const g of a) {
                            const t = g.match(/^\s*/);
                            if (t) {
                                let e = t[0];
                                const o = g.substring(e.length);
                                if (n) {
                                    const t = e.length;
                                    e = e.slice(0, -2), u = l ? u : e.length - t, l = !0, d += e.length - t
                                } else e += "  ", u = 2, d += 2;
                                f.push(e + o)
                            }
                        }
                        const m = f.join("\n"),
                            p = t.substring(0, s) + m + t.substring(c),
                            h = [Math.max(s, o + u), i + d];
                        return {
                            text: p,
                            selection: h
                        }
                    }(n.value, [n.selectionStart, n.selectionEnd], e.shiftKey);
                void 0 !== o && (e.preventDefault(), n.value = o.text, n.selectionStart = o.selection[0], n.selectionEnd = o.selection[1])
            }
            e(".js-task-list-field", {
                subscribe: t => m(f(t, "keydown", _o), f(t, "keydown", Oo), f(t, "beforeinput", Ro), f(t, "input", Io), f(t, "compositionstart", Do), f(t, "compositionend", $o))
            });
            const No = /^(\s*)?/;
            const Po = /^(\s*)([*-]|(\d+)\.)\s(\[[\sx]\]\s)?/;

            function Bo(t) {
                if (0 === document.querySelectorAll("tracked-issues-progress").length) return;
                if (t.closest(".js-timeline-item")) return;
                const e = t.querySelectorAll(".js-comment-body [type=checkbox]"),
                    n = e.length,
                    o = Array.from(e).filter((t => t.checked)).length,
                    i = document.querySelectorAll("tracked-issues-progress[data-type=checklist]");
                for (const s of i) s.setAttribute("data-completed", String(o)), s.setAttribute("data-total", String(n))
            }
            let Vo = class ActionsPolicyFormElement extends HTMLElement {
                connectedCallback() {
                    this.submitButton.disabled = !0, this.toggleSpecificOptions()
                }
                enableForm() {
                    this.submitButton.disabled = !1
                }
                toggleSpecificOptions() {
                    this.selectRadio.checked ? this.specificOptions.hidden = !1 : this.specificOptions.hidden = !0
                }
            };
            async function Wo(t, e = !0) {
                const n = t.querySelector('[name="codespace[location]"]');
                if (!n || n.value) return;
                const o = t.querySelector("button[type=submit]");
                o instanceof HTMLInputElement && (o.disabled = !0);
                const i = t.getAttribute("data-codespace-locations-url");
                if (!i) return;
                const s = await Xo(i);
                return e && s && (n.value = s.current), s
            }
            async function Xo(t) {
                const e = await fetch(t, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json"
                    }
                });
                if (!e.ok) {
                    const t = new Error,
                        n = e.statusText ? " " + e.statusText : "";
                    throw t.message = `HTTP ${e.status}${n}`, t
                }
                return e.json()
            }

            function zo(t) {
                var e;
                const o = t.querySelector(".js-inline-comment-form-container");
                o.classList.add("open"), null === (e = o.querySelector(".js-write-tab")) || void 0 === e || e.click(), o.querySelector(".js-comment-field").focus(), n(o, "inlinecomment:focus")
            }

            function Uo(t) {
                t.reset();
                const e = t.closest(".js-inline-comment-form-container");
                e.classList.remove("open"), n(e, "inlinecomment:collapse")
            }
            l([u], Vo.prototype, "specificOptions", void 0), l([u], Vo.prototype, "submitButton", void 0), l([u], Vo.prototype, "selectRadio", void 0), Vo = l([d], Vo), i("submit", ".js-prefetch-codespace-location", (async function(t) {
                const e = t.currentTarget;
                t.preventDefault(), await Wo(e), e.submit()
            })), i("click", ".js-toggle-inline-comment-form", (function(t) {
                zo(t.currentTarget.closest(".js-line-comments"))
            })), i("quote-selection", ".js-line-comments", (function(t) {
                zo(t.currentTarget)
            })), et("keydown", ".js-inline-comment-form-container form .js-comment-field", (function(t) {
                const e = t.target;
                if (!e.classList.contains("js-navigation-enable") && "Escape" === t.key && 0 === e.value.length) {
                    Uo(e.closest("form")), t.preventDefault()
                }
            })), i("click", ".js-hide-inline-comment-form", (function(t) {
                const e = t.currentTarget.closest("form"),
                    n = t.currentTarget.closest(".js-inline-comment-form-container").querySelector(".js-multi-line-preview");
                n && (n.hidden = !0), !ft(e) || confirm(t.target.getAttribute("data-confirm-cancel-text")) ? Uo(e) : t.preventDefault()
            }));
            class DiffPosition {
                constructor(t, e, n) {
                    this.diffId = t, this.side = e, this.lineNumber = n, this.element = fe(document, this.anchor())
                }
                sideForCommenting() {
                    return this.element && this.element.classList.contains("blob-num-context") ? "right" : {
                        R: "right",
                        L: "left"
                    }[this.side]
                }
                isContext() {
                    return !!this.element && this.element.classList.contains("blob-num-context")
                }
                anchor() {
                    return `${this.diffId}${this.anchorSuffix()}`
                }
                anchorSuffix() {
                    return `${this.side}${this.lineNumber}`
                }
                is(t) {
                    return this.diffId === t.diffId && this.side === t.side && this.lineNumber === t.lineNumber
                }
            }
            class DiffRange {
                constructor(t, e, n, o, i) {
                    this.elements = new Set, this.isParsed = !1, this.isSplit = !1, this._rows = new Set, this._isAcrossHunks = !1, this._isContextOnly = !0, this._includesExpandedLine = !1, this.diffId = t, this.diffTable = document.querySelector(`.js-diff-table[data-diff-anchor="${t}"]`), this.diffTable && (this.isSplit = this.diffTable.classList.contains("js-file-diff-split")), this.start = new DiffPosition(t, e, n), this.end = new DiffPosition(t, o, i), this.lineCount = 0, this.parse()
                }
                anchor() {
                    const t = [];
                    return t.push(this.start.anchor()), this.start.is(this.end) || t.push(this.end.anchorSuffix()), t.join("-")
                }
                parse() {
                    if (!this.diffTable) return;
                    let t = this.unify(this.diffTable.querySelectorAll(".js-linkable-line-number"));
                    t = this.filterInRange(t), this.lineCount = t.length, this.elements = this.expandRelatedElements(t), this.isParsed = !0
                }
                unify(t) {
                    if (!this.isSplit) return Array.from(t);
                    const e = [];
                    let n = [],
                        o = [];
                    for (const i of t) i.classList.contains("blob-num-addition") ? n.push(i) : i.classList.contains("blob-num-deletion") ? o.push(i) : (e.push(...o, ...n, i), n = [], o = []);
                    return e.push(...o, ...n), e
                }
                filterInRange(t) {
                    if (!this.start.element || !this.end.element) return [];
                    let e = t.indexOf(this.start.element),
                        n = t.indexOf(this.end.element);
                    if (e > n) {
                        [e, n] = [n, e];
                        const [t, o] = [this.end, this.start];
                        this.start = t, this.end = o
                    }
                    return t.slice(e, n + 1)
                }
                isContextOnly() {
                    return this.isParsed || this.parse(), this._isContextOnly
                }
                isAcrossHunks() {
                    return this.isParsed || this.parse(), this._isAcrossHunks
                }
                includesExpandedLine() {
                    return this.isParsed || this.parse(), this._includesExpandedLine
                }
                rows() {
                    return this.isParsed || this.parse(), this._rows
                }
                expandRelatedElements(t) {
                    const e = this.isSplit,
                        n = t[0],
                        o = t[t.length - 1];
                    if (n && o) {
                        const t = n.closest("[data-hunk]"),
                            e = o.closest("[data-hunk]");
                        if (t && e) {
                            t.getAttribute("data-hunk") !== e.getAttribute("data-hunk") && (this._isAcrossHunks = !0)
                        }
                    }
                    return t.reduce(((t, n) => {
                        !this._includesExpandedLine && n.closest(".blob-expanded") && (this._includesExpandedLine = !0);
                        const o = n.parentElement;
                        o instanceof HTMLElement && this._rows.add(o);
                        const i = n.classList.contains("blob-num-deletion") || n.classList.contains("blob-num-addition");
                        if (i && (this._isContextOnly = !1), !o) return t;
                        if (e && i) {
                            return Array.from(o.children).indexOf(n) < 2 ? t.add(o.children[0]).add(o.children[1]) : t.add(o.children[2]).add(o.children[3])
                        }
                        for (const e of Array.from(o.children)) t.add(e);
                        return t
                    }), new Set)
                }
            }

            function Fo(t) {
                const e = t.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                if (null != e && 6 === e.length) return e;
                const n = t.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                return null != n && 6 === n.length ? n : null
            }
            let Ko = null,
                Jo = null,
                Yo = !1,
                Go = null;

            function Qo(t) {
                return !!t.closest(".js-multi-line-comments-enabled")
            }

            function Zo(t, e) {
                if (!Qo(t)) return !1;
                const {
                    start: {
                        lineNumber: n
                    },
                    end: {
                        lineNumber: o
                    }
                } = e;
                return (n !== o || !e.isContextOnly()) && (!e.isAcrossHunks() && !e.includesExpandedLine())
            }

            function ti(t) {
                return t.closest(".js-diff-table").classList.contains("is-selecting")
            }

            function ei(t, e) {
                let n = t.id;
                if (e) {
                    const e = Fo(n);
                    if (!e) return;
                    const o = e[1],
                        i = e[2],
                        s = e[3];
                    if (Ko && Ko.diffId === o) {
                        if (i === Ko.start.side && s < Ko.start.lineNumber) return;
                        const e = new DiffRange(o, Ko.start.side, Ko.start.lineNumber, i, +s);
                        n = e.anchor();
                        const r = t.closest(".js-file-content[data-hydro-view]");
                        if (r instanceof HTMLElement && function(t, e) {
                                const n = {
                                    starting_diff_position: e.start.side + e.start.lineNumber,
                                    ending_diff_position: e.end.side + e.end.lineNumber,
                                    line_count: e.lineCount
                                };
                                t.setAttribute("data-hydro-client-context", JSON.stringify(n)), Vn(t)
                            }(r, e), Yo && ti(t)) {
                            t.closest(".js-diff-table").classList.toggle("is-commenting", Zo(t, e))
                        }
                        Jo = function() {
                            if (Zo(t, e)) {
                                const n = `.js-add-line-comment[data-side="${e.end.sideForCommenting()}"]`,
                                    o = t.closest("tr").querySelector(n);
                                o && e && o.click()
                            }
                        }
                    }
                }
                window.history.replaceState(null, null, "#" + n), ci()
            }

            function ni(t) {
                if (!(t instanceof HTMLElement)) return null;
                if (t.classList.contains("js-linkable-line-number")) return t;
                const e = t.previousElementSibling;
                return e ? ni(e) : null
            }

            function oi(t) {
                Ko && (t.target.closest(".js-diff-table") || (window.history.replaceState(null, null, "#"), ci()))
            }

            function ii(t) {
                const e = t.target;
                if (!(e instanceof Element)) return;
                Go && function() {
                    if (!Go) return;
                    ei(Go, !1);
                    const t = Go.closest(".js-diff-table");
                    Go = null, t.classList.add("is-selecting"), t.classList.add("is-commenting"), document.addEventListener("mouseup", (function(e) {
                        t.classList.remove("is-selecting"), t.classList.remove("is-selecting", "is-commenting"), Jo && Jo(), Jo = null, ri(t), e.preventDefault()
                    }), {
                        once: !0
                    })
                }();
                const n = e.closest(".blob-code, .js-linkable-line-number");
                var o;
                return n ? n.classList.contains("blob-code") ? function(t) {
                    const e = ni(t);
                    e && ti(e) && ei(e, !0)
                }(n) : void(n.classList.contains("js-linkable-line-number") && ti(o = n) && ei(o, !0)) : void 0
            }

            function si(t) {
                t.addEventListener("mouseenter", ii, {
                    capture: !0
                })
            }

            function ri(t) {
                Yo = !1, t.removeEventListener("mouseenter", ii, {
                    capture: !0
                }), setTimeout((() => {
                    document.addEventListener("click", oi, {
                        once: !0
                    })
                }), 0)
            }

            function ci() {
                if (Ko) {
                    for (const t of Ko.elements) t.classList.remove("selected-line", "selected-line-top", "selected-line-bottom", "selected-line-left", "selected-line-right");
                    Ko = null
                }
                const t = Fo(window.location.hash);
                if (!t) return;
                const e = t[1],
                    n = t[2],
                    o = t[3],
                    i = t[4] || n,
                    s = t[5] || o;
                Ko = new DiffRange(e, n, +o, i, +s);
                const r = Array.from(Ko.elements)[0];
                r && (r.closest(".js-diff-table").classList.contains("file-diff-split") ? function() {
                    if (!Ko) return;
                    for (const s of Ko.elements) s.classList.add("selected-line");
                    const t = [],
                        e = [],
                        n = [],
                        o = [];
                    for (const s of Ko.rows()) {
                        const [i, r, c, a] = s.children;
                        t.push(i), e.push(r), n.push(c), o.push(a)
                    }

                    function i(t) {
                        for (const [e, n] of t.entries()) {
                            if (n.classList.contains("empty-cell")) continue;
                            const o = t[e - 1];
                            o && o.classList.contains("selected-line") || n.classList.add("selected-line-top");
                            const i = t[e + 1];
                            i && i.classList.contains("selected-line") || n.classList.add("selected-line-bottom")
                        }
                    }
                    i(t), i(e), i(n), i(o);
                    for (const [s, r] of e.entries()) o[s].classList.contains("selected-line") || r.classList.add("selected-line-right");
                    for (const [s, r] of n.entries()) e[s].classList.contains("selected-line") || r.classList.add("selected-line-left")
                }() : function() {
                    if (!Ko) return;
                    for (const o of Ko.elements) o.classList.add("selected-line");
                    const t = Array.from(Ko.rows()),
                        e = t[0];
                    for (const o of e.children) o.classList.add("selected-line-top");
                    const n = t[t.length - 1];
                    for (const o of n.children) o.classList.add("selected-line-bottom")
                }())
            }
            i("mousedown", ".js-add-line-comment", (function(t) {
                const e = t.target.parentElement;
                if (!e) return;
                if (!Qo(t.target)) return;
                const n = ni(e);
                if (!n) return;
                const o = t.target.closest(".js-diff-table");
                si(o), Go = n, Yo = !0, t.target.addEventListener("mouseup", (function() {
                    ri(o), Go = null, Yo = !1
                }), {
                    once: !0
                }), Ko && Ko.lineCount > 1 && t.preventDefault()
            })), i("mousedown", ".js-linkable-line-number", (function(t) {
                if (!(t instanceof MouseEvent)) return;
                if (0 !== t.button) return;
                const e = t.target;
                if (!(e instanceof Element)) return;
                const n = e.closest(".js-diff-table");
                n.classList.add("is-selecting"), si(n), document.addEventListener("mouseup", (function() {
                    e.closest(".js-diff-table").classList.remove("is-selecting"), ri(n)
                }), {
                    once: !0
                }), ei(e, t instanceof MouseEvent && t.shiftKey), t.preventDefault()
            })), Fe(ci), e(".blob-expanded", ci), e(".js-diff-progressive-loader", (function(t) {
                t.addEventListener("load", ci)
            })), e(".js-diff-entry-loader", (function(t) {
                t.addEventListener("load", ci)
            })), i("click", ".js-rich-diff.collapsed .js-expandable", (function(t) {
                if (!(t.target instanceof Element)) return;
                t.preventDefault();
                t.target.closest(".js-rich-diff").classList.remove("collapsed")
            })), i("click", ".js-show-rich-diff", (function(t) {
                const e = t.currentTarget.closest(".js-warn-no-visible-changes");
                if (!e) return;
                e.classList.add("d-none");
                const n = e.parentElement.querySelector(".js-no-rich-changes");
                n && n.classList.remove("d-none")
            }))
        }
    }
}));
//# sourceMappingURL=chunk-frameworks-9a395253.js.map