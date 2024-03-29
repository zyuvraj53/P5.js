System.register([], (function(t) {
    "use strict";
    return {
        execute: function() {
            function e() {
                if (!(this instanceof e)) return new e;
                this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
            }
            t({
                $: function(t, e) {
                        Pi.has(t) || Pi.set(t, []);
                        Pi.get(t).push(e), "interactive" === document.readyState || "complete" === document.readyState ? Oi ? Ri(document.body) : _i() : document.addEventListener("DOMContentLoaded", _i, {
                            once: !0
                        })
                    }
                    /**
                     * @license
                     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                     * This code may only be used under the BSD style license found at
                     * http://polymer.github.io/LICENSE.txt
                     * The complete set of authors may be found at
                     * http://polymer.github.io/AUTHORS.txt
                     * The complete set of contributors may be found at
                     * http://polymer.github.io/CONTRIBUTORS.txt
                     * Code distributed by Google as part of the polymer project is also
                     * subject to an additional IP rights grant found at
                     * http://polymer.github.io/PATENTS.txt
                     */
                    ,
                B: Vo,
                E: zo,
                G: function(t) {
                    Jt.push(t)
                },
                H: function(t) {
                    Go = t.target, setTimeout((function() {
                        t.defaultPrevented && (Go = null)
                    }), 0)
                },
                J: function(t, e) {
                    var n;
                    const r = `${null!==(n=null==e?void 0:e.keyPrefix)&&void 0!==n?n:"session-resume:"}${t}`;
                    let o;
                    try {
                        o = sessionStorage.getItem(r)
                    } catch (a) {}
                    if (!o) return;
                    const i = [],
                        s = [];
                    for (const [l, u] of JSON.parse(o)) {
                        const t = new CustomEvent("session:resume", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                targetId: l,
                                targetValue: u
                            }
                        });
                        if (document.dispatchEvent(t)) {
                            const t = document.getElementById(l);
                            t && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) ? t.value === t.defaultValue && (t.value = u, i.push(t)) : s.push([l, u])
                        }
                    }
                    if (0 === s.length) try {
                        sessionStorage.removeItem(r)
                    } catch (c) {} else sessionStorage.setItem(r, JSON.stringify(s));
                    setTimeout((function() {
                        for (const t of i) t.dispatchEvent(new CustomEvent("change", {
                            bubbles: !0,
                            cancelable: !0
                        }))
                    }), 0)
                },
                K: function(t, e) {
                    var n, r;
                    const o = null !== (n = null == e ? void 0 : e.selector) && void 0 !== n ? n : ".js-session-resumable",
                        i = `${null!==(r=null==e?void 0:e.keyPrefix)&&void 0!==r?r:"session-resume:"}${t}`,
                        s = [];
                    for (const l of document.querySelectorAll(o))(l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement) && s.push(l);
                    let a = s.filter((t => function(t) {
                        return !!t.id && t.value !== t.defaultValue && t.form !== Go
                    }(t))).map((t => [t.id, t.value]));
                    if (a.length) try {
                        const t = sessionStorage.getItem(i);
                        if (null !== t) {
                            const e = JSON.parse(t).filter((function(t) {
                                return !a.some((e => e[0] === t[0]))
                            }));
                            a = a.concat(e)
                        }
                        sessionStorage.setItem(i, JSON.stringify(a))
                    } catch (c) {}
                },
                O: function(t, e) {
                    t.renderInto(e)
                },
                P: function(t, ...e) {
                    return new TemplateResult$1(t, e, di)
                },
                S: e,
                Z: function(t) {
                    return t && t.default || t
                },
                _:
                    /*! *****************************************************************************
                          Copyright (c) Microsoft Corporation. All rights reserved.
                          Licensed under the Apache License, Version 2.0 (the "License"); you may not use
                          this file except in compliance with the License. You may obtain a copy of the
                          License at http://www.apache.org/licenses/LICENSE-2.0

                          THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                          KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
                          WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
                          MERCHANTABLITY OR NON-INFRINGEMENT.

                          See the Apache Version 2.0 License for specific language governing permissions
                          and limitations under the License.
                          ***************************************************************************** */
                    function(t, e, n, r) {
                        var o, i = arguments.length,
                            s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                        else
                            for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s);
                        return i > 3 && s && Object.defineProperty(e, n, s), s
                        /**
                         * @license
                         * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                         * This code may only be used under the BSD style license found at
                         * http://polymer.github.io/LICENSE.txt
                         * The complete set of authors may be found at
                         * http://polymer.github.io/AUTHORS.txt
                         * The complete set of contributors may be found at
                         * http://polymer.github.io/CONTRIBUTORS.txt
                         * Code distributed by Google as part of the polymer project is also
                         * subject to an additional IP rights grant found at
                         * http://polymer.github.io/PATENTS.txt
                         */
                    },
                a: function(t, n, r) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = !!o.capture,
                        s = i ? vt : gt,
                        a = s[t];
                    a || (a = new e, s[t] = a, document.addEventListener(t, Mt, i));
                    a.add(n, r)
                },
                a0: function(t, e) {
                    return t(e = {
                        exports: {}
                    }, e.exports), e.exports
                },
                a2: function() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                },
                a3: function(t) {
                    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
                },
                a5: Kt,
                c: function(t) {
                        const e = t.prototype.connectedCallback;
                        t.prototype.connectedCallback = function() {
                                this.toggleAttribute("data-catalyst", !0),
                                    function(t) {
                                        for (const e of t.querySelectorAll("template[data-shadowroot]")) e.parentElement === t && t.attachShadow({
                                            mode: "closed" === e.getAttribute("data-shadowroot") ? "closed" : "open"
                                        }).append(e.content.cloneNode(!0))
                                    }(this),
                                    function(t, e) {
                                        e || (e = jt.get(Object.getPrototypeOf(t)) || []);
                                        for (const n of e) {
                                            const e = t[n],
                                                r = Vt(n);
                                            let o = {
                                                get() {
                                                    return this.getAttribute(r) || ""
                                                },
                                                set(t) {
                                                    this.setAttribute(r, t || "")
                                                }
                                            };
                                            "number" == typeof e ? o = {
                                                get() {
                                                    return Number(this.getAttribute(r) || 0)
                                                },
                                                set(t) {
                                                    this.setAttribute(r, t)
                                                }
                                            } : "boolean" == typeof e && (o = {
                                                get() {
                                                    return this.hasAttribute(r)
                                                },
                                                set(t) {
                                                    this.toggleAttribute(r, t)
                                                }
                                            }), Object.defineProperty(t, n, o), n in t && !t.hasAttribute(r) && o.set.call(t, e)
                                        }
                                    }(this), e && e.call(this),
                                    function(t) {
                                        Ot.add(t), t.shadowRoot && (Ft(t.shadowRoot), qt(t.shadowRoot));
                                        Ft(t), qt(t.ownerDocument)
                                    }(this)
                            },
                            function(t) {
                                let e = t.observedAttributes || [];
                                Object.defineProperty(t, "observedAttributes", {
                                    get() {
                                        const n = jt.get(t.prototype);
                                        return n ? n.map(Vt).concat(e) : e
                                    },
                                    set(t) {
                                        e = t
                                    }
                                })
                            }(t),
                            function(t) {
                                const e = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
                                window.customElements.get(e) || (window[t.name] = t, window.customElements.define(e, t))
                            }(t)
                    }
                    /**
                     * @license
                     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                     * This code may only be used under the BSD style license found at
                     * http://polymer.github.io/LICENSE.txt
                     * The complete set of authors may be found at
                     * http://polymer.github.io/AUTHORS.txt
                     * The complete set of contributors may be found at
                     * http://polymer.github.io/CONTRIBUTORS.txt
                     * Code distributed by Google as part of the polymer project is also
                     * subject to an additional IP rights grant found at
                     * http://polymer.github.io/PATENTS.txt
                     */
                    ,
                e: function(t = 0, e = {}) {
                    return (n, r, o) => {
                        if (!o || "function" != typeof o.value) throw new Error("debounce can only decorate functions");
                        const i = o.value;
                        o.value = Yt(i, t, e), Object.defineProperty(n, r, o)
                    }
                },
                f: function(t, e, n) {
                    return t.dispatchEvent(new CustomEvent(e, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: n
                    }))
                },
                g: function(t, e) {
                    return Object.defineProperty(t, e, {
                        configurable: !0,
                        get() {
                            return function(t, e) {
                                const n = t.tagName.toLowerCase(),
                                    r = [];
                                if (t.shadowRoot)
                                    for (const o of t.shadowRoot.querySelectorAll(`[data-targets~="${n}.${e}"]`)) o.closest(n) || r.push(o);
                                for (const o of t.querySelectorAll(`[data-targets~="${n}.${e}"]`)) o.closest(n) === t && r.push(o);
                                return r
                            }(this, e)
                        }
                    })
                },
                h: Ct,
                i: function(t, e) {
                    jt.has(t) || jt.set(t, []);
                    jt.get(t).push(e)
                },
                j: Yt,
                o: function() {
                    var t;
                    return (t = U()).observe.apply(t, arguments)
                },
                p: function(t) {
                    Qt.push(t)
                },
                r: function(t, e) {
                    Gt || (Gt = new Map, document.addEventListener("submit", Zt));
                    const n = Gt.get(t) || [];
                    Gt.set(t, [...n, e])
                },
                s: function(t) {
                    let e = !1,
                        n = null;

                    function r(t, e, n, r = !1) {
                        e instanceof HTMLInputElement && (e.indeterminate = r, e.checked !== n && (e.checked = n, setTimeout((() => {
                            const n = new CustomEvent("change", {
                                bubbles: !0,
                                cancelable: !1,
                                detail: {
                                    relatedTarget: t
                                }
                            });
                            e.dispatchEvent(n)
                        }))))
                    }

                    function o(o) {
                        const i = o.target;
                        i instanceof Element && (i.hasAttribute("data-check-all") ? function(e) {
                            if (e instanceof CustomEvent && e.detail) {
                                const {
                                    relatedTarget: t
                                } = e.detail;
                                if (t && t.hasAttribute("data-check-all-item")) return
                            }
                            const o = e.target;
                            if (!(o instanceof HTMLInputElement)) return;
                            n = null;
                            for (const n of t.querySelectorAll("[data-check-all-item]")) r(o, n, o.checked);
                            o.indeterminate = !1, s()
                        }(o) : i.hasAttribute("data-check-all-item") && function(o) {
                            if (o instanceof CustomEvent && o.detail) {
                                const {
                                    relatedTarget: t
                                } = o.detail;
                                if (t && (t.hasAttribute("data-check-all") || t.hasAttribute("data-check-all-item"))) return
                            }
                            const i = o.target;
                            if (!(i instanceof HTMLInputElement)) return;
                            const a = Array.from(t.querySelectorAll("[data-check-all-item]"));
                            if (e && n) {
                                const [t, e] = [a.indexOf(n), a.indexOf(i)].sort();
                                for (const n of a.slice(t, +e + 1 || 9e9)) r(i, n, i.checked)
                            }
                            e = !1, n = i;
                            const c = t.querySelector("[data-check-all]");
                            if (c) {
                                const t = a.length,
                                    e = a.filter((t => t instanceof HTMLInputElement && t.checked)).length;
                                r(i, c, e === t, t > e && e > 0)
                            }
                            s()
                        }(o))
                    }

                    function i(t) {
                        if (!(t.target instanceof Element)) return;
                        (t.target instanceof HTMLLabelElement && t.target.control || t.target).hasAttribute("data-check-all-item") && (e = t.shiftKey)
                    }

                    function s() {
                        const e = t.querySelector("[data-check-all-count]");
                        if (e) {
                            const n = t.querySelectorAll("[data-check-all-item]:checked").length;
                            e.textContent = n.toString()
                        }
                    }
                    return t.addEventListener("mousedown", i), t.addEventListener("change", o), {
                        unsubscribe: () => {
                            t.removeEventListener("mousedown", i), t.removeEventListener("change", o)
                        }
                    }
                },
                t: function(t, e) {
                    return Object.defineProperty(t, e, {
                        configurable: !0,
                        get() {
                            return function(t, e) {
                                const n = t.tagName.toLowerCase();
                                if (t.shadowRoot)
                                    for (const r of t.shadowRoot.querySelectorAll(`[data-target~="${n}.${e}"]`))
                                        if (!r.closest(n)) return r;
                                for (const r of t.querySelectorAll(`[data-target~="${n}.${e}"]`))
                                    if (r.closest(n) === t) return r
                            }(this, e)
                        }
                    })
                },
                v: function(t, e) {
                    0 === Object.keys(Nt.children).length && document.addEventListener("keydown", Rt);
                    const n = function(t) {
                        return t.split(",").map((t => t.split(" ")))
                    }(e || t.getAttribute("data-hotkey") || "").map((e => Nt.insert(e).add(t)));
                    It.set(t, n)
                },
                w: function(t) {
                    const e = It.get(t);
                    if (e && e.length)
                        for (const n of e) n && n.delete(t);
                    0 === Object.keys(Nt.children).length && document.removeEventListener("keydown", Rt)
                },
                x: function(t) {
                    return t.split("\n").reduce((function(t, e) {
                        var n = function(t) {
                            var e = Lo.exec(t);
                            if (!e) return null;
                            var n = e[2] && 0 === e[2].indexOf("native"),
                                r = e[2] && 0 === e[2].indexOf("eval"),
                                o = Mo.exec(e[2]);
                            r && null != o && (e[2] = o[1], e[3] = o[2], e[4] = o[3]);
                            return {
                                file: n ? null : e[2],
                                methodName: e[1] || To,
                                arguments: n ? [e[2]] : [],
                                lineNumber: e[3] ? +e[3] : null,
                                column: e[4] ? +e[4] : null
                            }
                        }(e) || function(t) {
                            var e = So.exec(t);
                            if (!e) return null;
                            return {
                                file: e[2],
                                methodName: e[1] || To,
                                arguments: [],
                                lineNumber: +e[3],
                                column: e[4] ? +e[4] : null
                            }
                        }(e) || function(t) {
                            var e = Co.exec(t);
                            if (!e) return null;
                            var n = e[3] && e[3].indexOf(" > eval") > -1,
                                r = No.exec(e[3]);
                            n && null != r && (e[3] = r[1], e[4] = r[2], e[5] = null);
                            return {
                                file: e[3],
                                methodName: e[1] || To,
                                arguments: e[2] ? e[2].split(",") : [],
                                lineNumber: e[4] ? +e[4] : null,
                                column: e[5] ? +e[5] : null
                            }
                        }(e) || function(t) {
                            var e = Do.exec(t);
                            if (!e) return null;
                            return {
                                file: e[2],
                                methodName: e[1] || To,
                                arguments: [],
                                lineNumber: +e[3],
                                column: e[4] ? +e[4] : null
                            }
                        }(e) || function(t) {
                            var e = Io.exec(t);
                            if (!e) return null;
                            return {
                                file: e[3],
                                methodName: e[1] || To,
                                arguments: [],
                                lineNumber: +e[4],
                                column: e[5] ? +e[5] : null
                            }
                        }(e);
                        return n && t.push(n), t
                    }), [])
                },
                y: function(t, e) {
                    return Wo(t, e), {
                        unsubscribe: () => {
                            ! function(t) {
                                const e = qo.get(t);
                                if (null == e) return;
                                qo.delete(t), Fo -= 1, 0 === Fo && document.removeEventListener("keydown", Uo);
                                e.copyMarkdown && t.removeEventListener("copy", $o)
                            }(t)
                        }
                    }
                },
                z: jo
            });
            var n = window.document.documentElement,
                r = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector;
            e.prototype.matchesSelector = function(t, e) {
                return r.call(t, e)
            }, e.prototype.querySelectorAll = function(t, e) {
                return e.querySelectorAll(t)
            }, e.prototype.indexes = [];
            var o = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            e.prototype.indexes.push({
                name: "ID",
                selector: function(t) {
                    var e;
                    if (e = t.match(o)) return e[0].slice(1)
                },
                element: function(t) {
                    if (t.id) return [t.id]
                }
            });
            var i = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            e.prototype.indexes.push({
                name: "CLASS",
                selector: function(t) {
                    var e;
                    if (e = t.match(i)) return e[0].slice(1)
                },
                element: function(t) {
                    var e = t.className;
                    if (e) {
                        if ("string" == typeof e) return e.split(/\s/);
                        if ("object" == typeof e && "baseVal" in e) return e.baseVal.split(/\s/)
                    }
                }
            });
            var s, a = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            e.prototype.indexes.push({
                name: "TAG",
                selector: function(t) {
                    var e;
                    if (e = t.match(a)) return e[0].toUpperCase()
                },
                element: function(t) {
                    return [t.nodeName.toUpperCase()]
                }
            }), e.prototype.indexes.default = {
                name: "UNIVERSAL",
                selector: function() {
                    return !0
                },
                element: function() {
                    return [!0]
                }
            }, s = "function" == typeof window.Map ? window.Map : function() {
                function t() {
                    this.map = {}
                }
                return t.prototype.get = function(t) {
                    return this.map[t + " "]
                }, t.prototype.set = function(t, e) {
                    this.map[t + " "] = e
                }, t
            }();
            var c = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

            function l(t, e) {
                var n, r, o, i, s, a, l = (t = t.slice(0).concat(t.default)).length,
                    u = e,
                    d = [];
                do {
                    if (c.exec(""), (o = c.exec(u)) && (u = o[3], o[2] || !u))
                        for (n = 0; n < l; n++)
                            if (s = (a = t[n]).selector(o[1])) {
                                for (r = d.length, i = !1; r--;)
                                    if (d[r].index === a && d[r].key === s) {
                                        i = !0;
                                        break
                                    }
                                i || d.push({
                                    index: a,
                                    key: s
                                });
                                break
                            }
                } while (o);
                return d
            }

            function u(t, e) {
                var n, r, o;
                for (n = 0, r = t.length; n < r; n++)
                    if (o = t[n], e.isPrototypeOf(o)) return o
            }

            function d(t, e) {
                return t.id - e.id
            }
            e.prototype.logDefaultIndexUsed = function() {}, e.prototype.add = function(t, e) {
                var n, r, o, i, a, c, d, h, m = this.activeIndexes,
                    f = this.selectors;
                if ("string" == typeof t) {
                    for (n = {
                            id: this.uid++,
                            selector: t,
                            data: e
                        }, d = l(this.indexes, t), r = 0; r < d.length; r++) i = (h = d[r]).key, (a = u(m, o = h.index)) || ((a = Object.create(o)).map = new s, m.push(a)), o === this.indexes.default && this.logDefaultIndexUsed(n), (c = a.map.get(i)) || (c = [], a.map.set(i, c)), c.push(n);
                    this.size++, f.push(t)
                }
            }, e.prototype.remove = function(t, e) {
                if ("string" == typeof t) {
                    var n, r, o, i, s, a, c, u, d = this.activeIndexes,
                        h = {},
                        m = 1 === arguments.length;
                    for (n = l(this.indexes, t), o = 0; o < n.length; o++)
                        for (r = n[o], i = d.length; i--;)
                            if (a = d[i], r.index.isPrototypeOf(a)) {
                                if (c = a.map.get(r.key))
                                    for (s = c.length; s--;)(u = c[s]).selector !== t || !m && u.data !== e || (c.splice(s, 1), h[u.id] = !0);
                                break
                            }
                    this.size -= Object.keys(h).length
                }
            }, e.prototype.queryAll = function(t) {
                if (!this.selectors.length) return [];
                var e, n, r, o, i, s, a, c, l = {},
                    u = [],
                    h = this.querySelectorAll(this.selectors.join(", "), t);
                for (e = 0, r = h.length; e < r; e++)
                    for (i = h[e], n = 0, o = (s = this.matches(i)).length; n < o; n++) l[(c = s[n]).id] ? a = l[c.id] : (a = {
                        id: c.id,
                        selector: c.selector,
                        data: c.data,
                        elements: []
                    }, l[c.id] = a, u.push(a)), a.elements.push(i);
                return u.sort(d)
            }, e.prototype.matches = function(t) {
                if (!t) return [];
                var e, n, r, o, i, s, a, c, l, u, h, m = this.activeIndexes,
                    f = {},
                    p = [];
                for (e = 0, o = m.length; e < o; e++)
                    if (c = (a = m[e]).element(t))
                        for (n = 0, i = c.length; n < i; n++)
                            if (l = a.map.get(c[n]))
                                for (r = 0, s = l.length; r < s; r++) !f[h = (u = l[r]).id] && this.matchesSelector(t, u.selector) && (f[h] = !0, p.push(u));
                return p.sort(d)
            };
            var h = null,
                m = null,
                f = [];

            function p(t, e) {
                var n = [];

                function r() {
                    var t = n;
                    n = [], e(t)
                }
                return function() {
                    for (var e = arguments.length, o = Array(e), i = 0; i < e; i++) o[i] = arguments[i];
                    n.push(o), 1 === n.length && g(t, r)
                }
            }

            function g(t, e) {
                m || (m = new MutationObserver(v)), h || (h = t.createElement("div"), m.observe(h, {
                    attributes: !0
                })), f.push(e), h.setAttribute("data-twiddle", "" + Date.now())
            }

            function v() {
                var t = f;
                f = [];
                for (var e = 0; e < t.length; e++) try {
                    t[e]()
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }), 0)
                }
            }
            var b = new WeakMap,
                w = new WeakMap,
                E = new WeakMap,
                y = new WeakMap;

            function x(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        o = r[0],
                        i = r[1],
                        s = r[2];
                    o === C ? (k(s, i), A(s, i)) : o === N ? T(s, i) : o === I && L(t.observers, i)
                }
            }

            function k(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = b.get(e);
                    if (n || (n = [], b.set(e, n)), -1 === n.indexOf(t.id)) {
                        var r = void 0;
                        if (t.initialize && (r = t.initialize.call(void 0, e)), r) {
                            var o = w.get(e);
                            o || (o = {}, w.set(e, o)), o["" + t.id] = r
                        }
                        n.push(t.id)
                    }
                }
            }

            function A(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = y.get(e);
                    if (n || (n = [], y.set(e, n)), -1 === n.indexOf(t.id)) {
                        t.elements.push(e);
                        var r = w.get(e),
                            o = r ? r["" + t.id] : null;
                        if (o && o.add && o.add.call(void 0, e), t.subscribe) {
                            var i = t.subscribe.call(void 0, e);
                            if (i) {
                                var s = E.get(e);
                                s || (s = {}, E.set(e, s)), s["" + t.id] = i
                            }
                        }
                        t.add && t.add.call(void 0, e), n.push(t.id)
                    }
                }
            }

            function T(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = y.get(e);
                    if (n) {
                        var r = t.elements.indexOf(e);
                        if (-1 !== r && t.elements.splice(r, 1), -1 !== (r = n.indexOf(t.id))) {
                            var o = w.get(e),
                                i = o ? o["" + t.id] : null;
                            if (i && i.remove && i.remove.call(void 0, e), t.subscribe) {
                                var s = E.get(e),
                                    a = s ? s["" + t.id] : null;
                                a && a.unsubscribe && a.unsubscribe()
                            }
                            t.remove && t.remove.call(void 0, e), n.splice(r, 1)
                        }
                        0 === n.length && y.delete(e)
                    }
                }
            }

            function L(t, e) {
                var n = y.get(e);
                if (n) {
                    for (var r = n.slice(0), o = 0; o < r.length; o++) {
                        var i = t[r[o]];
                        if (i) {
                            var s = i.elements.indexOf(e); - 1 !== s && i.elements.splice(s, 1);
                            var a = w.get(e),
                                c = a ? a["" + i.id] : null;
                            c && c.remove && c.remove.call(void 0, e);
                            var l = E.get(e),
                                u = l ? l["" + i.id] : null;
                            u && u.unsubscribe && u.unsubscribe(), i.remove && i.remove.call(void 0, e)
                        }
                    }
                    y.delete(e)
                }
            }
            var M = null;

            function S(t) {
                return "matches" in t || "webkitMatchesSelector" in t || "mozMatchesSelector" in t || "oMatchesSelector" in t || "msMatchesSelector" in t
            }
            var C = 1,
                N = 2,
                I = 3;

            function D(t, e, n) {
                for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    "childList" === o.type ? (H(t, e, o.addedNodes), P(t, e, o.removedNodes)) : "attributes" === o.type && R(t, e, o.target)
                }(function(t) {
                    if (null === M) {
                        var e = t.createElement("div"),
                            n = t.createElement("div"),
                            r = t.createElement("div");
                        e.appendChild(n), n.appendChild(r), e.innerHTML = "", M = r.parentNode !== n
                    }
                    return M
                })(t.ownerDocument) && function(t, e) {
                    for (var n = 0; n < t.observers.length; n++) {
                        var r = t.observers[n];
                        if (r)
                            for (var o = r.elements, i = 0; i < o.length; i++) {
                                var s = o[i];
                                s.parentNode || e.push([I, s])
                            }
                    }
                }(t, e)
            }

            function H(t, e, n) {
                for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    if (S(o))
                        for (var i = t.selectorSet.matches(o), s = 0; s < i.length; s++) {
                            var a = i[s].data;
                            e.push([C, o, a])
                        }
                    if ("querySelectorAll" in o)
                        for (var c = t.selectorSet.queryAll(o), l = 0; l < c.length; l++)
                            for (var u = c[l], d = u.data, h = u.elements, m = 0; m < h.length; m++) e.push([C, h[m], d])
                }
            }

            function P(t, e, n) {
                for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    if ("querySelectorAll" in o) {
                        e.push([I, o]);
                        for (var i = o.querySelectorAll("*"), s = 0; s < i.length; s++) e.push([I, i[s]])
                    }
                }
            }

            function R(t, e, n) {
                if (S(n))
                    for (var r = t.selectorSet.matches(n), o = 0; o < r.length; o++) {
                        var i = r[o].data;
                        e.push([C, n, i])
                    }
                if ("querySelectorAll" in n) {
                    var s = y.get(n);
                    if (s)
                        for (var a = 0; a < s.length; a++) {
                            var c = t.observers[s[a]];
                            c && (t.selectorSet.matchesSelector(n, c.selector) || e.push([N, n, c]))
                        }
                }
            }
            var O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                _ = 0;

            function q(t) {
                this.rootNode = 9 === t.nodeType ? t.documentElement : t, this.ownerDocument = 9 === t.nodeType ? t : t.ownerDocument, this.observers = [], this.selectorSet = new e, this.mutationObserver = new MutationObserver(W.bind(this, this)), this._scheduleAddRootNodes = p(this.ownerDocument, B.bind(this, this)), this._handleThrottledChangedTargets = p(this.ownerDocument, j.bind(this, this)), this.rootNode.addEventListener("change", $.bind(this, this), !1),
                    function(t, e) {
                        var n = t.readyState;
                        "interactive" === n || "complete" === n ? g(t, e) : t.addEventListener("DOMContentLoaded", g(t, e))
                    }(this.ownerDocument, F.bind(this, this))
            }

            function F(t) {
                t.mutationObserver.observe(t.rootNode, {
                    childList: !0,
                    attributes: !0,
                    subtree: !0
                }), t._scheduleAddRootNodes()
            }

            function B(t) {
                var e = [];
                H(t, e, [t.rootNode]), x(t, e)
            }

            function W(t, e) {
                var n = [];
                D(t, n, e), x(t, n)
            }

            function $(t, e) {
                t._handleThrottledChangedTargets(e.target)
            }

            function j(t, e) {
                var n = [];
                ! function(t, e, n) {
                    for (var r = 0; r < n.length; r++)
                        for (var o = n[r], i = o.form ? o.form.elements : t.rootNode.querySelectorAll("input"), s = 0; s < i.length; s++) R(t, e, i[s])
                }(t, n, e), x(t, n)
            }
            q.prototype.disconnect = function() {
                this.mutationObserver.disconnect()
            }, q.prototype.observe = function(t, e) {
                var n = void 0;
                "function" == typeof e ? n = {
                    selector: t,
                    initialize: e
                } : "object" === (void 0 === e ? "undefined" : O(e)) ? (n = e).selector = t : n = t;
                var r = this,
                    o = {
                        id: _++,
                        selector: n.selector,
                        initialize: n.initialize,
                        add: n.add,
                        remove: n.remove,
                        subscribe: n.subscribe,
                        elements: [],
                        elementConstructor: n.hasOwnProperty("constructor") ? n.constructor : this.ownerDocument.defaultView.Element,
                        abort: function() {
                            r._abortObserving(o)
                        }
                    };
                return this.selectorSet.add(o.selector, o), this.observers[o.id] = o, this._scheduleAddRootNodes(), o
            }, q.prototype._abortObserving = function(t) {
                for (var e = t.elements, n = 0; n < e.length; n++) T(t, e[n]);
                this.selectorSet.remove(t.selector, t), delete this.observers[t.id]
            }, q.prototype.triggerObservers = function(t) {
                var e = [];
                ! function(t, e, n) {
                    if ("querySelectorAll" in n) {
                        R(t, e, n);
                        for (var r = n.querySelectorAll("*"), o = 0; o < r.length; o++) R(t, e, r[o])
                    }
                }(this, e, t), x(this, e)
            };
            var V = void 0;

            function U() {
                return V || (V = new q(window.document)), V
            }
            const z = new WeakMap,
                K = t => (...e) => {
                    const n = t(...e);
                    return z.set(n, !0), n
                },
                Y = t => "function" == typeof t && z.has(t),
                X = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
                G = (t, e, n = null) => {
                    for (; e !== n;) {
                        const n = e.nextSibling;
                        t.removeChild(e), e = n
                    }
                },
                Q = {},
                J = {},
                Z = `{{lit-${String(Math.random()).slice(2)}}}`,
                tt = `\x3c!--${Z}--\x3e`,
                et = new RegExp(`${Z}|${tt}`),
                nt = "$lit$";
            class Template {
                constructor(t, e) {
                    this.parts = [], this.element = e;
                    const n = [],
                        r = [],
                        o = document.createTreeWalker(e.content, 133, null, !1);
                    let i = 0,
                        s = -1,
                        a = 0;
                    const {
                        strings: c,
                        values: {
                            length: l
                        }
                    } = t;
                    for (; a < l;) {
                        const t = o.nextNode();
                        if (null !== t) {
                            if (s++, 1 === t.nodeType) {
                                if (t.hasAttributes()) {
                                    const e = t.attributes,
                                        {
                                            length: n
                                        } = e;
                                    let r = 0;
                                    for (let t = 0; t < n; t++) rt(e[t].name, nt) && r++;
                                    for (; r-- > 0;) {
                                        const e = c[a],
                                            n = st.exec(e)[2],
                                            r = n.toLowerCase() + nt,
                                            o = t.getAttribute(r);
                                        t.removeAttribute(r);
                                        const i = o.split(et);
                                        this.parts.push({
                                            type: "attribute",
                                            index: s,
                                            name: n,
                                            strings: i
                                        }), a += i.length - 1
                                    }
                                }
                                "TEMPLATE" === t.tagName && (r.push(t), o.currentNode = t.content)
                            } else if (3 === t.nodeType) {
                                const e = t.data;
                                if (e.indexOf(Z) >= 0) {
                                    const r = t.parentNode,
                                        o = e.split(et),
                                        i = o.length - 1;
                                    for (let e = 0; e < i; e++) {
                                        let n, i = o[e];
                                        if ("" === i) n = it();
                                        else {
                                            const t = st.exec(i);
                                            null !== t && rt(t[2], nt) && (i = i.slice(0, t.index) + t[1] + t[2].slice(0, -nt.length) + t[3]), n = document.createTextNode(i)
                                        }
                                        r.insertBefore(n, t), this.parts.push({
                                            type: "node",
                                            index: ++s
                                        })
                                    }
                                    "" === o[i] ? (r.insertBefore(it(), t), n.push(t)) : t.data = o[i], a += i
                                }
                            } else if (8 === t.nodeType)
                                if (t.data === Z) {
                                    const e = t.parentNode;
                                    null !== t.previousSibling && s !== i || (s++, e.insertBefore(it(), t)), i = s, this.parts.push({
                                        type: "node",
                                        index: s
                                    }), null === t.nextSibling ? t.data = "" : (n.push(t), s--), a++
                                } else {
                                    let e = -1;
                                    for (; - 1 !== (e = t.data.indexOf(Z, e + 1));) this.parts.push({
                                        type: "node",
                                        index: -1
                                    }), a++
                                }
                        } else o.currentNode = r.pop()
                    }
                    for (const u of n) u.parentNode.removeChild(u)
                }
            }
            const rt = (t, e) => {
                    const n = t.length - e.length;
                    return n >= 0 && t.slice(n) === e
                },
                ot = t => -1 !== t.index,
                it = () => document.createComment(""),
                st = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            class TemplateInstance {
                constructor(t, e, n) {
                    this.__parts = [], this.template = t, this.processor = e, this.options = n
                }
                update(t) {
                    let e = 0;
                    for (const n of this.__parts) void 0 !== n && n.setValue(t[e]), e++;
                    for (const n of this.__parts) void 0 !== n && n.commit()
                }
                _clone() {
                    const t = X ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
                        e = [],
                        n = this.template.parts,
                        r = document.createTreeWalker(t, 133, null, !1);
                    let o, i = 0,
                        s = 0,
                        a = r.nextNode();
                    for (; i < n.length;)
                        if (o = n[i], ot(o)) {
                            for (; s < o.index;) s++, "TEMPLATE" === a.nodeName && (e.push(a), r.currentNode = a.content), null === (a = r.nextNode()) && (r.currentNode = e.pop(), a = r.nextNode());
                            if ("node" === o.type) {
                                const t = this.processor.handleTextExpression(this.options);
                                t.insertAfterNode(a.previousSibling), this.__parts.push(t)
                            } else this.__parts.push(...this.processor.handleAttributeExpressions(a, o.name, o.strings, this.options));
                            i++
                        } else this.__parts.push(void 0), i++;
                    return X && (document.adoptNode(t), customElements.upgrade(t)), t
                }
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const at = ` ${Z} `;
            class TemplateResult {
                constructor(t, e, n, r) {
                    this.strings = t, this.values = e, this.type = n, this.processor = r
                }
                getHTML() {
                    const t = this.strings.length - 1;
                    let e = "",
                        n = !1;
                    for (let r = 0; r < t; r++) {
                        const t = this.strings[r],
                            o = t.lastIndexOf("\x3c!--");
                        n = (o > -1 || n) && -1 === t.indexOf("--\x3e", o + 1);
                        const i = st.exec(t);
                        e += null === i ? t + (n ? at : tt) : t.substr(0, i.index) + i[1] + i[2] + nt + i[3] + Z
                    }
                    return e += this.strings[t], e
                }
                getTemplateElement() {
                    const t = document.createElement("template");
                    return t.innerHTML = this.getHTML(), t
                }
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const ct = t => null === t || !("object" == typeof t || "function" == typeof t),
                lt = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
            class AttributeCommitter {
                constructor(t, e, n) {
                    this.dirty = !0, this.element = t, this.name = e, this.strings = n, this.parts = [];
                    for (let r = 0; r < n.length - 1; r++) this.parts[r] = this._createPart()
                }
                _createPart() {
                    return new AttributePart(this)
                }
                _getValue() {
                    const t = this.strings,
                        e = t.length - 1;
                    let n = "";
                    for (let r = 0; r < e; r++) {
                        n += t[r];
                        const e = this.parts[r];
                        if (void 0 !== e) {
                            const t = e.value;
                            if (ct(t) || !lt(t)) n += "string" == typeof t ? t : String(t);
                            else
                                for (const e of t) n += "string" == typeof e ? e : String(e)
                        }
                    }
                    return n += t[e], n
                }
                commit() {
                    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
                }
            }
            class AttributePart {
                constructor(t) {
                    this.value = void 0, this.committer = t
                }
                setValue(t) {
                    t === Q || ct(t) && t === this.value || (this.value = t, Y(t) || (this.committer.dirty = !0))
                }
                commit() {
                    for (; Y(this.value);) {
                        const t = this.value;
                        this.value = Q, t(this)
                    }
                    this.value !== Q && this.committer.commit()
                }
            }
            class NodePart {
                constructor(t) {
                    this.value = void 0, this.__pendingValue = void 0, this.options = t
                }
                appendInto(t) {
                    this.startNode = t.appendChild(it()), this.endNode = t.appendChild(it())
                }
                insertAfterNode(t) {
                    this.startNode = t, this.endNode = t.nextSibling
                }
                appendIntoPart(t) {
                    t.__insert(this.startNode = it()), t.__insert(this.endNode = it())
                }
                insertAfterPart(t) {
                    t.__insert(this.startNode = it()), this.endNode = t.endNode, t.endNode = this.startNode
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; Y(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = Q, t(this)
                    }
                    const t = this.__pendingValue;
                    t !== Q && (ct(t) ? t !== this.value && this.__commitText(t) : t instanceof TemplateResult ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : lt(t) ? this.__commitIterable(t) : t === J ? (this.value = J, this.clear()) : this.__commitText(t))
                }
                __insert(t) {
                    this.endNode.parentNode.insertBefore(t, this.endNode)
                }
                __commitNode(t) {
                    this.value !== t && (this.clear(), this.__insert(t), this.value = t)
                }
                __commitText(t) {
                    const e = this.startNode.nextSibling,
                        n = "string" == typeof(t = null == t ? "" : t) ? t : String(t);
                    e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = n : this.__commitNode(document.createTextNode(n)), this.value = t
                }
                __commitTemplateResult(t) {
                    const e = this.options.templateFactory(t);
                    if (this.value instanceof TemplateInstance && this.value.template === e) this.value.update(t.values);
                    else {
                        const n = new TemplateInstance(e, t.processor, this.options),
                            r = n._clone();
                        n.update(t.values), this.__commitNode(r), this.value = n
                    }
                }
                __commitIterable(t) {
                    Array.isArray(this.value) || (this.value = [], this.clear());
                    const e = this.value;
                    let n, r = 0;
                    for (const o of t) n = e[r], void 0 === n && (n = new NodePart(this.options), e.push(n), 0 === r ? n.appendIntoPart(this) : n.insertAfterPart(e[r - 1])), n.setValue(o), n.commit(), r++;
                    r < e.length && (e.length = r, this.clear(n && n.endNode))
                }
                clear(t = this.startNode) {
                    G(this.startNode.parentNode, t.nextSibling, this.endNode)
                }
            }
            class BooleanAttributePart {
                constructor(t, e, n) {
                    if (this.value = void 0, this.__pendingValue = void 0, 2 !== n.length || "" !== n[0] || "" !== n[1]) throw new Error("Boolean attributes can only contain a single expression");
                    this.element = t, this.name = e, this.strings = n
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; Y(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = Q, t(this)
                    }
                    if (this.__pendingValue === Q) return;
                    const t = !!this.__pendingValue;
                    this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = Q
                }
            }
            class PropertyCommitter extends AttributeCommitter {
                constructor(t, e, n) {
                    super(t, e, n), this.single = 2 === n.length && "" === n[0] && "" === n[1]
                }
                _createPart() {
                    return new PropertyPart(this)
                }
                _getValue() {
                    return this.single ? this.parts[0].value : super._getValue()
                }
                commit() {
                    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
                }
            }
            class PropertyPart extends AttributePart {}
            let ut = !1;
            try {
                const t = {
                    get capture() {
                        return ut = !0, !1
                    }
                };
                window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
            } catch (Ui) {}
            class EventPart {
                constructor(t, e, n) {
                    this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = e, this.eventContext = n, this.__boundHandleEvent = t => this.handleEvent(t)
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; Y(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = Q, t(this)
                    }
                    if (this.__pendingValue === Q) return;
                    const t = this.__pendingValue,
                        e = this.value,
                        n = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
                        r = null != t && (null == e || n);
                    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = dt(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = Q
                }
                handleEvent(t) {
                    "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
                }
            }
            const dt = t => t && (ut ? {
                capture: t.capture,
                passive: t.passive,
                once: t.once
            } : t.capture)
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            ;
            const ht = new class DefaultTemplateProcessor {
                handleAttributeExpressions(t, e, n, r) {
                    const o = e[0];
                    if ("." === o) {
                        return new PropertyCommitter(t, e.slice(1), n).parts
                    }
                    if ("@" === o) return [new EventPart(t, e.slice(1), r.eventContext)];
                    if ("?" === o) return [new BooleanAttributePart(t, e.slice(1), n)];
                    return new AttributeCommitter(t, e, n).parts
                }
                handleTextExpression(t) {
                    return new NodePart(t)
                }
            };
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            function mt(t) {
                let e = ft.get(t.type);
                void 0 === e && (e = {
                    stringsArray: new WeakMap,
                    keyString: new Map
                }, ft.set(t.type, e));
                let n = e.stringsArray.get(t.strings);
                if (void 0 !== n) return n;
                const r = t.strings.join(Z);
                return n = e.keyString.get(r), void 0 === n && (n = new Template(t, t.getTemplateElement()), e.keyString.set(r, n)), e.stringsArray.set(t.strings, n), n
            }
            const ft = new Map,
                pt = new WeakMap;
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            t("b", ((t, e, n) => {
                let r = pt.get(e);
                void 0 === r && (G(e, e.firstChild), pt.set(e, r = new NodePart(Object.assign({
                    templateFactory: mt
                }, n))), r.appendInto(e)), r.setValue(t), r.commit()
            }));
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
            t("d", ((t, ...e) => new TemplateResult(t, e, "html", ht)));
            var gt = {},
                vt = {},
                bt = new WeakMap,
                wt = new WeakMap,
                Et = new WeakMap,
                yt = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

            function xt(t, e, n) {
                var r = t[e];
                return t[e] = function() {
                    return n.apply(t, arguments), r.apply(t, arguments)
                }, t
            }

            function kt() {
                bt.set(this, !0)
            }

            function At() {
                bt.set(this, !0), wt.set(this, !0)
            }

            function Tt() {
                return Et.get(this) || null
            }

            function Lt(t, e) {
                yt && Object.defineProperty(t, "currentTarget", {
                    configurable: !0,
                    enumerable: !0,
                    get: e || yt.get
                })
            }

            function Mt(t) {
                if (function(t) {
                        try {
                            return t.eventPhase, !0
                        } catch (e) {
                            return !1
                        }
                    }(t)) {
                    var e = (1 === t.eventPhase ? vt : gt)[t.type];
                    if (e) {
                        var n = function(t, e, n) {
                            var r = [],
                                o = e;
                            do {
                                if (1 !== o.nodeType) break;
                                var i = t.matches(o);
                                if (i.length) {
                                    var s = {
                                        node: o,
                                        observers: i
                                    };
                                    n ? r.unshift(s) : r.push(s)
                                }
                            } while (o = o.parentElement);
                            return r
                        }(e, t.target, 1 === t.eventPhase);
                        if (n.length) {
                            xt(t, "stopPropagation", kt), xt(t, "stopImmediatePropagation", At), Lt(t, Tt);
                            for (var r = 0, o = n.length; r < o && !bt.get(t); r++) {
                                var i = n[r];
                                Et.set(t, i.node);
                                for (var s = 0, a = i.observers.length; s < a && !wt.get(t); s++) i.observers[s].data.call(i.node, t)
                            }
                            Et.delete(t), Lt(t)
                        }
                    }
                }
            }
            class Leaf {
                constructor(t) {
                    this.children = [], this.parent = t
                }
                delete(t) {
                    const e = this.children.indexOf(t);
                    return -1 !== e && (this.children = this.children.slice(0, e).concat(this.children.slice(e + 1)), 0 === this.children.length && this.parent.delete(this), !0)
                }
                add(t) {
                    return this.children.push(t), this
                }
            }
            class RadixTrie {
                constructor(t) {
                    this.parent = null, this.children = {}, this.parent = t || null
                }
                get(t) {
                    return this.children[t]
                }
                insert(t) {
                    let e = this;
                    for (let n = 0; n < t.length; n += 1) {
                        const r = t[n];
                        let o = e.get(r);
                        if (n === t.length - 1) return o instanceof RadixTrie && (e.delete(o), o = null), o || (o = new Leaf(e), e.children[r] = o), o;
                        o instanceof Leaf && (o = null), o || (o = new RadixTrie(e), e.children[r] = o), e = o
                    }
                    return e
                }
                delete(t) {
                    for (const e in this.children) {
                        if (this.children[e] === t) {
                            const t = delete this.children[e];
                            return 0 === Object.keys(this.children).length && this.parent && this.parent.delete(this), t
                        }
                    }
                    return !1
                }
            }

            function St(t) {
                if (!(t instanceof HTMLElement)) return !1;
                const e = t.nodeName.toLowerCase(),
                    n = (t.getAttribute("type") || "").toLowerCase();
                return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n && "checkbox" !== n && "radio" !== n || t.isContentEditable
            }

            function Ct(t) {
                return `${t.ctrlKey?"Control+":""}${t.altKey?"Alt+":""}${t.metaKey?"Meta+":""}${t.shiftKey&&t.key.toUpperCase()!==t.key?"Shift+":""}${t.key}`
            }
            const Nt = new RadixTrie,
                It = new WeakMap;
            let Dt = Nt,
                Ht = null;

            function Pt() {
                Ht = null, Dt = Nt
            }

            function Rt(t) {
                if (t.defaultPrevented) return;
                if (t.target instanceof Node && St(t.target)) return;
                null != Ht && window.clearTimeout(Ht), Ht = window.setTimeout(Pt, 1500);
                const e = Dt.get(Ct(t));
                if (e) return Dt = e, e instanceof Leaf ? (function(t) {
                    St(t) ? t.focus() : t.click()
                }(e.children[e.children.length - 1]), t.preventDefault(), void Pt()) : void 0;
                Pt()
            }
            const Ot = new WeakSet;
            const _t = new WeakMap;

            function qt(t = document) {
                if (_t.has(t)) return _t.get(t);
                let e = !1;
                const n = new MutationObserver((t => {
                    for (const e of t)
                        if ("attributes" === e.type && e.target instanceof Element) $t(e.target);
                        else if ("childList" === e.type && e.addedNodes.length)
                        for (const t of e.addedNodes) t instanceof Element && Ft(t)
                }));
                n.observe(t, {
                    childList: !0,
                    subtree: !0,
                    attributeFilter: ["data-action"]
                });
                const r = {
                    get closed() {
                        return e
                    },
                    unsubscribe() {
                        e = !0, _t.delete(t), n.disconnect()
                    }
                };
                return _t.set(t, r), r
            }

            function Ft(t) {
                for (const e of t.querySelectorAll("[data-action]")) $t(e);
                t instanceof Element && t.hasAttribute("data-action") && $t(t)
            }

            function Bt(t) {
                const e = t.currentTarget;
                for (const n of Wt(e))
                    if (t.type === n.type) {
                        const r = e.closest(n.tag);
                        Ot.has(r) && "function" == typeof r[n.method] && r[n.method](t);
                        const o = e.getRootNode();
                        if (o instanceof ShadowRoot && Ot.has(o.host) && o.host.matches(n.tag)) {
                            const e = o.host;
                            "function" == typeof e[n.method] && e[n.method](t)
                        }
                    }
            }

            function* Wt(t) {
                for (const e of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
                    const t = e.lastIndexOf(":"),
                        n = e.lastIndexOf("#");
                    yield {
                        type: e.slice(0, t),
                        tag: e.slice(t + 1, n),
                        method: e.slice(n + 1)
                    }
                }
            }

            function $t(t) {
                for (const e of Wt(t)) t.addEventListener(e.type, Bt)
            }
            const jt = new WeakMap;

            function Vt(t) {
                return ("data-" + t.replace(/([A-Z]($|[a-z]))/g, "-$1")).replace(/--/g, "-").toLowerCase()
            }
            const Ut = new WeakMap,
                zt = 2147483647;
            t("u", K(((...t) => e => {
                let n = Ut.get(e);
                void 0 === n && (n = {
                    lastRenderedIndex: zt,
                    values: []
                }, Ut.set(e, n));
                const r = n.values;
                let o = r.length;
                n.values = t;
                for (let i = 0; i < t.length && !(i > n.lastRenderedIndex); i++) {
                    const s = t[i];
                    if (ct(s) || "function" != typeof s.then) {
                        e.setValue(s), n.lastRenderedIndex = i;
                        break
                    }
                    i < o && s === r[i] || (n.lastRenderedIndex = zt, o = 0, Promise.resolve(s).then((t => {
                        const r = n.values.indexOf(s);
                        r > -1 && r < n.lastRenderedIndex && (n.lastRenderedIndex = r, e.setValue(t), e.commit())
                    })))
                }
            })));

            function Kt(t, e = 0, {
                start: n = !0,
                middle: r = !0,
                once: o = !1
            } = {}) {
                let i, s = 0,
                    a = !1;

                function c(...l) {
                    if (a) return;
                    const u = Date.now() - s;
                    s = Date.now(), n ? (n = !1, t.apply(this, l), o && c.cancel()) : (r && u < e || !r) && (clearTimeout(i), i = setTimeout((() => {
                        s = Date.now(), t.apply(this, l), o && c.cancel()
                    }), r ? e - u : e))
                }
                return c.cancel = () => {
                    clearTimeout(i), a = !0
                }, c
            }

            function Yt(t, e = 0, {
                start: n = !1,
                middle: r = !1,
                once: o = !1
            } = {}) {
                return Kt(t, e, {
                    start: n,
                    middle: r,
                    once: o
                })
            }
            class ErrorWithResponse extends Error {
                constructor(t, e) {
                    super(t), this.response = e
                }
            }

            function Xt() {
                let t, e;
                return [new Promise((function(n, r) {
                    t = n, e = r
                })), t, e]
            }
            let Gt;
            const Qt = [],
                Jt = [];

            function Zt(t) {
                if (!(t.target instanceof HTMLFormElement)) return;
                const e = t.target,
                    n = function(t) {
                        const e = [];
                        for (const n of Gt.keys())
                            if (t.matches(n)) {
                                const t = Gt.get(n) || [];
                                e.push(...t)
                            }
                        return e
                    }(e);
                if (0 === n.length) return;
                const r = function(t) {
                        const e = {
                            method: t.method || "GET",
                            url: t.action,
                            headers: new Headers({
                                "X-Requested-With": "XMLHttpRequest"
                            }),
                            body: null
                        };
                        if ("GET" === e.method.toUpperCase()) {
                            const n = function(t) {
                                const e = new URLSearchParams,
                                    n = new FormData(t).entries();
                                for (const [r, o] of [...n]) e.append(r, o.toString());
                                return e.toString()
                            }(t);
                            n && (e.url += (~e.url.indexOf("?") ? "&" : "?") + n)
                        } else e.body = new FormData(t);
                        return e
                    }(e),
                    [o, i, s] = Xt();
                t.preventDefault(), async function(t, e, n, r) {
                    let o = !1;
                    for (const i of t) {
                        const [t, s] = Xt(), a = () => (o = !0, s(), r), c = {
                            text: a,
                            json: () => (n.headers.set("Accept", "application/json"), a()),
                            html: () => (n.headers.set("Accept", "text/html"), a())
                        };
                        await Promise.race([t, i(e, c, n)])
                    }
                    return o
                }(n, e, r, o).then((async t => {
                    if (t) {
                        for (const t of Jt) await t(e);
                        (async function(t) {
                            const e = await window.fetch(t.url, {
                                    method: t.method,
                                    body: null !== t.body ? t.body : void 0,
                                    headers: t.headers,
                                    credentials: "same-origin"
                                }),
                                n = {
                                    url: e.url,
                                    status: e.status,
                                    statusText: e.statusText,
                                    headers: e.headers,
                                    text: "",
                                    get json() {
                                        const t = this,
                                            e = JSON.parse(t.text);
                                        return delete t.json, t.json = e, t.json
                                    },
                                    get html() {
                                        const t = this;
                                        return delete t.html, t.html = function(t, e) {
                                            const n = t.createElement("template");
                                            return n.innerHTML = e, t.importNode(n.content, !0)
                                        }(document, t.text), t.html
                                    }
                                },
                                r = await e.text();
                            if (n.text = r, e.ok) return n;
                            throw new ErrorWithResponse("request failed", n)
                        })(r).then(i, s).catch((() => {})).then((() => {
                            for (const t of Qt) t(e)
                        }))
                    } else e.submit()
                }), (t => {
                    e.submit(), setTimeout((() => {
                        throw t
                    }))
                }))
            }
            const te = "data-close-dialog",
                ee = `[${te}]`;

            function ne(t) {
                let e = Array.from(t.querySelectorAll("[autofocus]")).filter(oe)[0];
                e || (e = t, t.setAttribute("tabindex", "-1")), e.focus()
            }

            function re(t) {
                const e = t.currentTarget;
                e instanceof Element && ("Escape" === t.key || "Esc" === t.key ? (ce(e, !1), t.stopPropagation()) : "Tab" === t.key && function(t) {
                    if (!(t.currentTarget instanceof Element)) return;
                    const e = t.currentTarget.querySelector("details-dialog");
                    if (!e) return;
                    t.preventDefault();
                    const n = Array.from(e.querySelectorAll("*")).filter(oe);
                    if (0 === n.length) return;
                    const r = t.shiftKey ? -1 : 1,
                        o = e.getRootNode(),
                        i = e.contains(o.activeElement) ? o.activeElement : null;
                    let s = -1 === r ? -1 : 0;
                    if (i instanceof HTMLElement) {
                        const t = n.indexOf(i); - 1 !== t && (s = t + r)
                    }
                    s < 0 ? s = n.length - 1 : s %= n.length;
                    n[s].focus()
                }(t))
            }

            function oe(t) {
                return t.tabIndex >= 0 && !t.disabled && function(t) {
                    return !t.hidden && (!t.type || "hidden" !== t.type) && (t.offsetWidth > 0 || t.offsetHeight > 0)
                }(t)
            }

            function ie(t) {
                const e = t.querySelector("details-dialog");
                return !(e instanceof DetailsDialogElement) || e.dispatchEvent(new CustomEvent("details-dialog-close", {
                    bubbles: !0,
                    cancelable: !0
                }))
            }

            function se(t) {
                if (!(t.currentTarget instanceof Element)) return;
                const e = t.currentTarget.closest("details");
                e && e.hasAttribute("open") && (ie(e) || (t.preventDefault(), t.stopPropagation()))
            }

            function ae(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.querySelector("details-dialog");
                if (n instanceof DetailsDialogElement)
                    if (e.hasAttribute("open")) {
                        const t = "getRootNode" in n ? n.getRootNode() : document;
                        t.activeElement instanceof HTMLElement && he.set(n, {
                            details: e,
                            activeElement: t.activeElement
                        }), ne(n), e.addEventListener("keydown", re)
                    } else {
                        for (const e of n.querySelectorAll("form")) e.reset();
                        const t = function(t, e) {
                            const n = he.get(e);
                            return n && n.activeElement instanceof HTMLElement ? n.activeElement : t.querySelector("summary")
                        }(e, n);
                        t && t.focus(), e.removeEventListener("keydown", re)
                    }
            }

            function ce(t, e) {
                e !== t.hasAttribute("open") && (e ? t.setAttribute("open", "") : ie(t) && t.removeAttribute("open"))
            }

            function le(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.querySelector("details-dialog");
                if (!(n instanceof DetailsDialogElement)) return;
                const r = n.querySelector("include-fragment:not([src])");
                if (!r) return;
                const o = n.src;
                null !== o && (r.addEventListener("loadend", (() => {
                    e.hasAttribute("open") && ne(n)
                })), r.setAttribute("src", o), de(e))
            }

            function ue(t, e, n) {
                de(t), e && t.addEventListener("toggle", le, {
                    once: !0
                }), e && n && t.addEventListener("mouseover", le, {
                    once: !0
                })
            }

            function de(t) {
                t.removeEventListener("toggle", le), t.removeEventListener("mouseover", le)
            }
            const he = new WeakMap;
            class DetailsDialogElement extends HTMLElement {
                static get CLOSE_ATTR() {
                    return te
                }
                static get CLOSE_SELECTOR() {
                    return ee
                }
                constructor() {
                    super(), he.set(this, {
                        details: null,
                        activeElement: null
                    }), this.addEventListener("click", (function({
                        target: t
                    }) {
                        if (!(t instanceof Element)) return;
                        const e = t.closest("details");
                        e && t.closest(ee) && ce(e, !1)
                    }))
                }
                get src() {
                    return this.getAttribute("src")
                }
                set src(t) {
                    this.setAttribute("src", t || "")
                }
                get preload() {
                    return this.hasAttribute("preload")
                }
                set preload(t) {
                    t ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }
                connectedCallback() {
                    this.setAttribute("role", "dialog"), this.setAttribute("aria-modal", "true");
                    const t = he.get(this);
                    if (!t) return;
                    const e = this.parentElement;
                    if (!e) return;
                    const n = e.querySelector("summary");
                    n && (n.hasAttribute("role") || n.setAttribute("role", "button"), n.addEventListener("click", se, {
                        capture: !0
                    })), e.addEventListener("toggle", ae), t.details = e, ue(e, this.src, this.preload)
                }
                disconnectedCallback() {
                    const t = he.get(this);
                    if (!t) return;
                    const {
                        details: e
                    } = t;
                    if (!e) return;
                    e.removeEventListener("toggle", ae), de(e);
                    const n = e.querySelector("summary");
                    n && n.removeEventListener("click", se, {
                        capture: !0
                    }), t.details = null
                }
                toggle(t) {
                    const e = he.get(this);
                    if (!e) return;
                    const {
                        details: n
                    } = e;
                    n && ce(n, t)
                }
                static get observedAttributes() {
                    return ["src", "preload"]
                }
                attributeChangedCallback() {
                    const t = he.get(this);
                    if (!t) return;
                    const {
                        details: e
                    } = t;
                    e && ue(e, this.src, this.preload)
                }
            }

            function me(t, e = 0, {
                start: n = !1,
                middle: r = !1,
                once: o = !1
            } = {}) {
                return function(t, e = 0, {
                    start: n = !0,
                    middle: r = !0,
                    once: o = !1
                } = {}) {
                    var i, s = 0,
                        a = !1,
                        c = function c(...l) {
                            if (!a) {
                                var u = Date.now() - s;
                                s = Date.now(), n ? (n = !1, t(...l), o && c.cancel()) : (r && u < e || !r) && (clearTimeout(i), i = setTimeout((function() {
                                    s = Date.now(), t(...l), o && c.cancel()
                                }), r ? e - u : e))
                            }
                        };
                    return c.cancel = function() {
                        clearTimeout(i), a = !0
                    }, c
                }(t, e, {
                    start: n,
                    middle: r,
                    once: o
                })
            }
            t("D", DetailsDialogElement), window.customElements.get("details-dialog") || (window.DetailsDialogElement = DetailsDialogElement, window.customElements.define("details-dialog", DetailsDialogElement));
            const fe = new WeakMap;
            class AutoCheckElement extends HTMLElement {
                connectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    const e = me(ge.bind(null, this), 300),
                        n = {
                            check: e,
                            controller: null
                        };
                    fe.set(this, n), t.addEventListener("input", pe), t.addEventListener("input", e), t.autocomplete = "off", t.spellcheck = !1
                }
                disconnectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    const e = fe.get(this);
                    e && (fe.delete(this), t.removeEventListener("input", pe), t.removeEventListener("input", e.check), t.setCustomValidity(""))
                }
                attributeChangedCallback(t) {
                    if ("required" === t) {
                        const t = this.input;
                        if (!t) return;
                        t.required = this.required
                    }
                }
                static get observedAttributes() {
                    return ["required"]
                }
                get input() {
                    return this.querySelector("input")
                }
                get src() {
                    const t = this.getAttribute("src");
                    if (!t) return "";
                    const e = this.ownerDocument.createElement("a");
                    return e.href = t, e.href
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get csrf() {
                    const t = this.querySelector("[data-csrf]");
                    return this.getAttribute("csrf") || t instanceof HTMLInputElement && t.value || ""
                }
                set csrf(t) {
                    this.setAttribute("csrf", t)
                }
                get required() {
                    return this.hasAttribute("required")
                }
                set required(t) {
                    t ? this.setAttribute("required", "") : this.removeAttribute("required")
                }
            }

            function pe(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLInputElement)) return;
                const n = e.closest("auto-check");
                if (!(n instanceof AutoCheckElement)) return;
                const r = n.src,
                    o = n.csrf,
                    i = fe.get(n);
                if (!r || !o || !i) return;
                let s = "Verifying…";
                e.dispatchEvent(new CustomEvent("auto-check-start", {
                    bubbles: !0,
                    detail: {
                        setValidity: t => s = t
                    }
                })), n.required && e.setCustomValidity(s)
            }
            async function ge(t) {
                const e = t.input;
                if (!e) return;
                const n = t.src,
                    r = t.csrf,
                    o = fe.get(t);
                if (!n || !r || !o) return void(t.required && e.setCustomValidity(""));
                if (!e.value.trim()) return void(t.required && e.setCustomValidity(""));
                const i = new FormData;
                i.append("authenticity_token", r), i.append("value", e.value), e.dispatchEvent(new CustomEvent("auto-check-send", {
                    bubbles: !0,
                    detail: {
                        body: i
                    }
                })), o.controller ? o.controller.abort() : t.dispatchEvent(new CustomEvent("loadstart")), o.controller = "AbortController" in window ? new AbortController : {
                    signal: null,
                    abort() {}
                };
                try {
                    const r = await async function(t, e, n) {
                        try {
                            const r = await fetch(e, n);
                            return t.dispatchEvent(new CustomEvent("load")), t.dispatchEvent(new CustomEvent("loadend")), r
                        } catch (r) {
                            throw "AbortError" !== r.name && (t.dispatchEvent(new CustomEvent("error")), t.dispatchEvent(new CustomEvent("loadend"))), r
                        }
                    }(t, n, {
                        credentials: "same-origin",
                        signal: o.controller.signal,
                        method: "POST",
                        body: i
                    });
                    r.ok ? function(t, e, n) {
                        n && e.setCustomValidity("");
                        e.dispatchEvent(new CustomEvent("auto-check-success", {
                            bubbles: !0,
                            detail: {
                                response: t.clone()
                            }
                        }))
                    }(r, e, t.required) : function(t, e, n) {
                        let r = "Validation failed";
                        const o = t => r = t;
                        e.dispatchEvent(new CustomEvent("auto-check-error", {
                            bubbles: !0,
                            detail: {
                                response: t.clone(),
                                setValidity: o
                            }
                        })), n && e.setCustomValidity(r)
                    }(r, e, t.required), o.controller = null, e.dispatchEvent(new CustomEvent("auto-check-complete", {
                        bubbles: !0
                    }))
                } catch (s) {
                    "AbortError" !== s.name && (o.controller = null, e.dispatchEvent(new CustomEvent("auto-check-complete", {
                        bubbles: !0
                    })))
                }
            }
            window.customElements.get("auto-check") || (window.AutoCheckElement = AutoCheckElement, window.customElements.define("auto-check", AutoCheckElement));
            class DetailsMenuElement extends HTMLElement {
                constructor() {
                    super()
                }
                get preload() {
                    return this.hasAttribute("preload")
                }
                set preload(t) {
                    t ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "menu");
                    const t = this.parentElement;
                    if (!t) return;
                    const e = t.querySelector("summary");
                    e && (e.setAttribute("aria-haspopup", "menu"), e.hasAttribute("role") || e.setAttribute("role", "button"));
                    const n = [we(t, "compositionstart", (t => Ce(this, t))), we(t, "compositionend", (t => Ce(this, t))), we(t, "click", (e => Te(t, this, e))), we(t, "change", (e => Te(t, this, e))), we(t, "keydown", (e => function(t, e, n) {
                        if (!(n instanceof KeyboardEvent)) return;
                        if (t.querySelector("details[open]")) return;
                        const r = ve.get(e);
                        if (!r || r.isComposing) return;
                        const o = n.target instanceof Element && "SUMMARY" === n.target.tagName;
                        switch (n.key) {
                            case "Escape":
                                t.hasAttribute("open") && (Se(t), n.preventDefault(), n.stopPropagation());
                                break;
                            case "ArrowDown":
                                {
                                    o && !t.hasAttribute("open") && t.setAttribute("open", "");
                                    const e = ke(t, !0);e && e.focus(),
                                    n.preventDefault()
                                }
                                break;
                            case "ArrowUp":
                                {
                                    o && !t.hasAttribute("open") && t.setAttribute("open", "");
                                    const e = ke(t, !1);e && e.focus(),
                                    n.preventDefault()
                                }
                                break;
                            case "n":
                                if (Ae && n.ctrlKey) {
                                    const e = ke(t, !0);
                                    e && e.focus(), n.preventDefault()
                                }
                                break;
                            case "p":
                                if (Ae && n.ctrlKey) {
                                    const e = ke(t, !1);
                                    e && e.focus(), n.preventDefault()
                                }
                                break;
                            case " ":
                            case "Enter":
                                {
                                    const e = document.activeElement;e instanceof HTMLElement && Me(e) && e.closest("details") === t && (n.preventDefault(), n.stopPropagation(), e.click())
                                }
                        }
                    }(t, this, e))), we(t, "toggle", (() => Ee(t, this)), {
                        once: !0
                    }), we(t, "toggle", (() => function(t) {
                        if (!t.hasAttribute("open")) return;
                        for (const e of document.querySelectorAll("details[open] > details-menu")) {
                            const n = e.closest("details");
                            n && n !== t && !n.contains(t) && n.removeAttribute("open")
                        }
                    }(t))), this.preload ? we(t, "mouseover", (() => Ee(t, this)), {
                        once: !0
                    }) : be, ...ye(t)];
                    ve.set(this, {
                        subscriptions: n,
                        loaded: !1,
                        isComposing: !1
                    })
                }
                disconnectedCallback() {
                    const t = ve.get(this);
                    if (t) {
                        ve.delete(this);
                        for (const e of t.subscriptions) e.unsubscribe()
                    }
                }
            }
            const ve = new WeakMap,
                be = {
                    unsubscribe() {}
                };

            function we(t, e, n, r = !1) {
                return t.addEventListener(e, n, r), {
                    unsubscribe: () => {
                        t.removeEventListener(e, n, r)
                    }
                }
            }

            function Ee(t, e) {
                const n = e.getAttribute("src");
                if (!n) return;
                const r = ve.get(e);
                if (!r) return;
                if (r.loaded) return;
                r.loaded = !0;
                const o = e.querySelector("include-fragment");
                o && !o.hasAttribute("src") && (o.addEventListener("loadend", (() => xe(t))), o.setAttribute("src", n))
            }

            function ye(t) {
                let e = !1;
                return [we(t, "mousedown", (() => e = !0)), we(t, "keydown", (() => e = !1)), we(t, "toggle", (() => {
                    t.hasAttribute("open") && (xe(t) || e || function(t) {
                        const e = document.activeElement;
                        if (e && Me(e) && t.contains(e)) return;
                        const n = ke(t, !0);
                        n && n.focus()
                    }(t))
                }))]
            }

            function xe(t) {
                if (!t.hasAttribute("open")) return !1;
                const e = t.querySelector("[autofocus]");
                return !!e && (e.focus(), !0)
            }

            function ke(t, e) {
                const n = Array.from(t.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])')),
                    r = document.activeElement,
                    o = r instanceof HTMLElement ? n.indexOf(r) : -1,
                    i = e ? n[o + 1] : n[o - 1],
                    s = e ? n[0] : n[n.length - 1];
                return i || s
            }
            const Ae = navigator.userAgent.match(/Macintosh/);

            function Te(t, e, n) {
                const r = n.target;
                if (r instanceof Element && r.closest("details") === t)
                    if ("click" === n.type) {
                        const e = r.closest('[role="menuitem"], [role="menuitemradio"]'),
                            n = e && "LABEL" === e.tagName && e.querySelector("input");
                        e && !n && Le(e, t)
                    } else if ("change" === n.type) {
                    const e = r.closest('[role="menuitemradio"], [role="menuitemcheckbox"]');
                    e && Le(e, t)
                }
            }

            function Le(t, e) {
                if (t.hasAttribute("disabled") || "true" === t.getAttribute("aria-disabled")) return;
                const n = t.closest("details-menu");
                if (!n) return;
                n.dispatchEvent(new CustomEvent("details-menu-select", {
                    cancelable: !0,
                    detail: {
                        relatedTarget: t
                    }
                })) && (! function(t, e) {
                    const n = e.querySelector("[data-menu-button]");
                    if (!n) return;
                    const r = function(t) {
                        if (!t) return null;
                        const e = t.hasAttribute("data-menu-button-text") ? t : t.querySelector("[data-menu-button-text]");
                        return e ? e.getAttribute("data-menu-button-text") || e.textContent : null
                    }(t);
                    if (r) n.textContent = r;
                    else {
                        const e = function(t) {
                            if (!t) return null;
                            const e = t.hasAttribute("data-menu-button-contents") ? t : t.querySelector("[data-menu-button-contents]");
                            return e ? e.innerHTML : null
                        }(t);
                        e && (n.innerHTML = e)
                    }
                }(t, e), function(t, e) {
                    for (const n of e.querySelectorAll('[role="menuitemradio"], [role="menuitemcheckbox"]')) {
                        const e = n.querySelector('input[type="radio"], input[type="checkbox"]');
                        let r = (n === t).toString();
                        e instanceof HTMLInputElement && (r = e.indeterminate ? "mixed" : e.checked.toString()), n.setAttribute("aria-checked", r)
                    }
                }(t, e), "menuitemcheckbox" !== t.getAttribute("role") && Se(e), n.dispatchEvent(new CustomEvent("details-menu-selected", {
                    detail: {
                        relatedTarget: t
                    }
                })))
            }

            function Me(t) {
                const e = t.getAttribute("role");
                return "menuitem" === e || "menuitemcheckbox" === e || "menuitemradio" === e
            }

            function Se(t) {
                if (!t.hasAttribute("open")) return;
                t.removeAttribute("open");
                const e = t.querySelector("summary");
                e && e.focus()
            }

            function Ce(t, e) {
                const n = ve.get(t);
                n && (n.isComposing = "compositionstart" === e.type)
            }
            window.customElements.get("details-menu") || (window.DetailsMenuElement = DetailsMenuElement, window.customElements.define("details-menu", DetailsMenuElement));
            class Attachment {
                constructor(t, e) {
                    this.file = t, this.directory = e, this.state = "pending", this.id = null, this.href = null, this.name = null, this.percent = 0
                }
                static traverse(t, e) {
                    return function(t, e) {
                        if (e && function(t) {
                                return t.items && Array.from(t.items).some((t => {
                                    const e = t.webkitGetAsEntry && t.webkitGetAsEntry();
                                    return e && e.isDirectory
                                }))
                            }(t)) return He("", function(t) {
                            return Array.from(t.items).map((t => t.webkitGetAsEntry())).filter((t => null != t))
                        }(t));
                        return Promise.resolve(Ne(Array.from(t.files || [])).map((t => new Attachment(t))))
                    }(t, e)
                }
                static from(t) {
                    const e = [];
                    for (const n of t)
                        if (n instanceof File) e.push(new Attachment(n));
                        else {
                            if (!(n instanceof Attachment)) throw new Error("Unexpected type");
                            e.push(n)
                        }
                    return e
                }
                get fullPath() {
                    return this.directory ? `${this.directory}/${this.file.name}` : this.file.name
                }
                isImage() {
                    return ["image/gif", "image/png", "image/jpg", "image/jpeg"].indexOf(this.file.type) > -1
                }
                saving(t) {
                    if ("pending" !== this.state && "saving" !== this.state) throw new Error(`Unexpected transition from ${this.state} to saving`);
                    this.state = "saving", this.percent = t
                }
                saved(t) {
                    var e, n, r;
                    if ("pending" !== this.state && "saving" !== this.state) throw new Error(`Unexpected transition from ${this.state} to saved`);
                    this.state = "saved", this.id = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : null, this.href = null !== (n = null == t ? void 0 : t.href) && void 0 !== n ? n : null, this.name = null !== (r = null == t ? void 0 : t.name) && void 0 !== r ? r : null
                }
                isPending() {
                    return "pending" === this.state
                }
                isSaving() {
                    return "saving" === this.state
                }
                isSaved() {
                    return "saved" === this.state
                }
            }

            function Ne(t) {
                return Array.from(t).filter((t => ! function(t) {
                    return t.name.startsWith(".")
                }(t)))
            }

            function Ie(t) {
                return new Promise((function(e, n) {
                    t.file(e, n)
                }))
            }

            function De(t) {
                return new Promise((function(e, n) {
                    const r = [],
                        o = t.createReader(),
                        i = () => {
                            o.readEntries((t => {
                                t.length > 0 ? (r.push(...t), i()) : e(r)
                            }), n)
                        };
                    i()
                }))
            }
            async function He(t, e) {
                const n = [];
                for (const r of Ne(e))
                    if (r.isDirectory) n.push(...await He(r.fullPath, await De(r)));
                    else {
                        const e = await Ie(r);
                        n.push(new Attachment(e, t))
                    }
                return n
            }
            t("a6", Attachment);
            class FileAttachmentElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("dragenter", Oe), this.addEventListener("dragover", Oe), this.addEventListener("dragleave", _e), this.addEventListener("drop", qe), this.addEventListener("paste", Be), this.addEventListener("change", We)
                }
                get directory() {
                    return this.hasAttribute("directory")
                }
                set directory(t) {
                    t ? this.setAttribute("directory", "") : this.removeAttribute("directory")
                }
                async attach(t) {
                    const e = t instanceof DataTransfer ? await Attachment.traverse(t, this.directory) : Attachment.from(t);
                    this.dispatchEvent(new CustomEvent("file-attachment-accept", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            attachments: e
                        }
                    })) && e.length && this.dispatchEvent(new CustomEvent("file-attachment-accepted", {
                        bubbles: !0,
                        detail: {
                            attachments: e
                        }
                    }))
                }
            }

            function Pe(t) {
                return Array.from(t.types).indexOf("Files") >= 0
            }
            let Re = null;

            function Oe(t) {
                const e = t.currentTarget;
                Re && clearTimeout(Re), Re = window.setTimeout((() => e.removeAttribute("hover")), 200);
                const n = t.dataTransfer;
                n && Pe(n) && (n.dropEffect = "copy", e.setAttribute("hover", ""), t.stopPropagation(), t.preventDefault())
            }

            function _e(t) {
                t.dataTransfer && (t.dataTransfer.dropEffect = "none");
                t.currentTarget.removeAttribute("hover"), t.stopPropagation(), t.preventDefault()
            }

            function qe(t) {
                const e = t.currentTarget;
                if (!(e instanceof FileAttachmentElement)) return;
                e.removeAttribute("hover");
                const n = t.dataTransfer;
                n && Pe(n) && (e.attach(n), t.stopPropagation(), t.preventDefault())
            }
            const Fe = /^image\/(gif|png|jpeg)$/;

            function Be(t) {
                if (!t.clipboardData) return;
                if (!t.clipboardData.items) return;
                const e = t.currentTarget;
                if (!(e instanceof FileAttachmentElement)) return;
                const n = function(t) {
                    for (const e of t)
                        if (Fe.test(e.type)) return e.getAsFile();
                    return null
                }(t.clipboardData.items);
                if (!n) return;
                const r = [n];
                e.attach(r), t.preventDefault()
            }

            function We(t) {
                const e = t.currentTarget;
                if (!(e instanceof FileAttachmentElement)) return;
                const n = t.target;
                if (!(n instanceof HTMLInputElement)) return;
                const r = e.getAttribute("input");
                if (!r || n.id !== r) return;
                const o = n.files;
                o && 0 !== o.length && (e.attach(o), n.value = "")
            }
            window.customElements.get("file-attachment") || (window.FileAttachmentElement = FileAttachmentElement, window.customElements.define("file-attachment", FileAttachmentElement));
            class FilterInputElement extends HTMLElement {
                constructor() {
                    super(), this.currentQuery = null, this.filter = null, this.debounceInputChange = function(t) {
                        let e;
                        return function() {
                            clearTimeout(e), e = setTimeout((() => {
                                clearTimeout(e), t()
                            }), 300)
                        }
                    }((() => $e(this, !0))), this.boundFilterResults = () => {
                        $e(this, !1)
                    }
                }
                static get observedAttributes() {
                    return ["aria-owns"]
                }
                attributeChangedCallback(t, e) {
                    e && "aria-owns" === t && $e(this, !1)
                }
                connectedCallback() {
                    const t = this.input;
                    t && (t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false"), t.addEventListener("focus", this.boundFilterResults), t.addEventListener("change", this.boundFilterResults), t.addEventListener("input", this.debounceInputChange))
                }
                disconnectedCallback() {
                    const t = this.input;
                    t && (t.removeEventListener("focus", this.boundFilterResults), t.removeEventListener("change", this.boundFilterResults), t.removeEventListener("input", this.debounceInputChange))
                }
                get input() {
                    const t = this.querySelector("input");
                    return t instanceof HTMLInputElement ? t : null
                }
                reset() {
                    const t = this.input;
                    t && (t.value = "", t.dispatchEvent(new Event("change", {
                        bubbles: !0
                    })))
                }
            }
            async function $e(t, e = !1) {
                const n = t.input;
                if (!n) return;
                const r = n.value.trim(),
                    o = t.getAttribute("aria-owns");
                if (!o) return;
                const i = document.getElementById(o);
                if (!i) return;
                const s = i.hasAttribute("data-filter-list") ? i : i.querySelector("[data-filter-list]");
                if (!s) return;
                if (t.dispatchEvent(new CustomEvent("filter-input-start", {
                        bubbles: !0
                    })), e && t.currentQuery === r) return;
                t.currentQuery = r;
                const a = t.filter || je,
                    c = s.childElementCount;
                let l = 0,
                    u = !1;
                for (const m of Array.from(s.children)) {
                    if (!(m instanceof HTMLElement)) continue;
                    const t = a(m, Ve(m), r);
                    !0 === t.hideNew && (u = t.hideNew), m.hidden = !t.match, t.match && l++
                }
                const d = i.querySelector("[data-filter-new-item]"),
                    h = !!d && r.length > 0 && !u;
                d instanceof HTMLElement && (d.hidden = !h, h && function(t, e) {
                        const n = t.querySelector("[data-filter-new-item-text]");
                        n && (n.textContent = e);
                        const r = t.querySelector("[data-filter-new-item-value]");
                        (r instanceof HTMLInputElement || r instanceof HTMLButtonElement) && (r.value = e)
                    }(d, r)),
                    function(t, e) {
                        const n = t.querySelector("[data-filter-empty-state]");
                        n instanceof HTMLElement && (n.hidden = e)
                    }(i, l > 0 || h), t.dispatchEvent(new CustomEvent("filter-input-updated", {
                        bubbles: !0,
                        detail: {
                            count: l,
                            total: c
                        }
                    }))
            }

            function je(t, e, n) {
                return {
                    match: -1 !== e.toLowerCase().indexOf(n.toLowerCase()),
                    hideNew: e === n
                }
            }

            function Ve(t) {
                return ((t.querySelector("[data-filter-item-text]") || t).textContent || "").trim()
            }
            t("F", FilterInputElement), window.customElements.get("filter-input") || (window.FilterInputElement = FilterInputElement, window.customElements.define("filter-input", FilterInputElement));
            const Ue = new Set(["👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🙏", "✍️", "💅", "🤳", "💪", "🦵", "🦶", "👂", "🦻", "👃", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "👱‍♂️", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👱‍♀️", "👩‍🦰", "👩‍🦱", "👩‍🦳", "👩‍🦲", "🧓", "👴", "👵", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️", "🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️", "🙋", "🙋‍♂️", "🙋‍♀️", "🧏", "🧏‍♂️", "🧏‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦", "🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "👨‍⚕️", "👩‍⚕️", "👨‍🎓", "👩‍🎓", "👨‍🏫", "👩‍🏫", "👨‍⚖️", "👩‍⚖️", "👨‍🌾", "👩‍🌾", "👨‍🍳", "👩‍🍳", "👨‍🔧", "👩‍🔧", "👨‍🏭", "👩‍🏭", "👨‍💼", "👩‍💼", "👨‍🔬", "👩‍🔬", "👨‍💻", "👩‍💻", "👨‍🎤", "👩‍🎤", "👨‍🎨", "👩‍🎨", "👨‍✈️", "👩‍✈️", "👨‍🚀", "👩‍🚀", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵️", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍♂️", "💂‍♀️", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "👰", "🤰", "🤱", "👼", "🎅", "🤶", "🦸", "🦸‍♂️", "🦸‍♀️", "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️", "🧛", "🧛‍♂️", "🧛‍♀️", "🧜", "🧜‍♂️", "🧜‍♀️", "🧝", "🧝‍♂️", "🧝‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️", "💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️", "👨‍🦯", "👩‍🦯", "👨‍🦼", "👩‍🦼", "👨‍🦽", "👩‍🦽", "🏃", "🏃‍♂️", "🏃‍♀️", "💃", "🕺", "🕴️", "🧖", "🧖‍♂️", "🧖‍♀️", "🧗", "🧗‍♂️", "🧗‍♀️", "🏇", "🏂", "🏌️", "🏌️‍♂️", "🏌️‍♀️", "🏄", "🏄‍♂️", "🏄‍♀️", "🚣", "🚣‍♂️", "🚣‍♀️", "🏊", "🏊‍♂️", "🏊‍♀️", "⛹️", "⛹️‍♂️", "⛹️‍♀️", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🚴", "🚴‍♂️", "🚴‍♀️", "🚵", "🚵‍♂️", "🚵‍♀️", "🤸", "🤸‍♂️", "🤸‍♀️", "🤽", "🤽‍♂️", "🤽‍♀️", "🤾", "🤾‍♂️", "🤾‍♀️", "🤹", "🤹‍♂️", "🤹‍♀️", "🧘", "🧘‍♂️", "🧘‍♀️", "🛀", "🛌", "🧑‍🤝‍🧑", "👭", "👫", "👬"]);

            function ze(t) {
                return Ue.has(t)
            }
            const Ke = "‍";

            function Ye(t) {
                return [...t].filter((t => !Ge(t.codePointAt(0)))).join("")
            }

            function Xe(t, e) {
                const n = [...t].map((t => t.codePointAt(0)));
                return n[1] && (Ge(n[1]) || 65039 === n[1]) ? n[1] = e : n.splice(1, 0, e), String.fromCodePoint(...n)
            }

            function Ge(t) {
                return t >= 127995 && t <= 127999
            }

            function Qe(t) {
                switch (t) {
                    case 1:
                        return 127995;
                    case 2:
                        return 127996;
                    case 3:
                        return 127997;
                    case 4:
                        return 127998;
                    case 5:
                        return 127999;
                    default:
                        return null
                }
            }
            class GEmojiElement extends HTMLElement {
                get image() {
                    return this.firstElementChild instanceof HTMLImageElement ? this.firstElementChild : null
                }
                get tone() {
                    return (this.getAttribute("tone") || "").split(" ").map((t => {
                        const e = parseInt(t, 10);
                        return e >= 0 && e <= 5 ? e : 0
                    })).join(" ")
                }
                set tone(t) {
                    this.setAttribute("tone", t)
                }
                connectedCallback() {
                    if (null === this.image && ! function() {
                            const t = /\bWindows NT 6.1\b/.test(navigator.userAgent),
                                e = /\bWindows NT 6.2\b/.test(navigator.userAgent),
                                n = /\bWindows NT 6.3\b/.test(navigator.userAgent),
                                r = /\bFreeBSD\b/.test(navigator.userAgent),
                                o = /\bLinux\b/.test(navigator.userAgent) && !/\bAndroid\b/.test(navigator.userAgent);
                            return !(t || e || n || o || r)
                        }()) {
                        const t = this.getAttribute("fallback-src");
                        if (t) {
                            this.textContent = "";
                            const e = function(t) {
                                const e = document.createElement("img");
                                return e.className = "emoji", e.alt = t.getAttribute("alias") || "", e.height = 20, e.width = 20, e
                            }(this);
                            e.src = t, this.appendChild(e)
                        }
                    }
                    this.hasAttribute("tone") && Je(this)
                }
                static get observedAttributes() {
                    return ["tone"]
                }
                attributeChangedCallback(t) {
                    switch (t) {
                        case "tone":
                            Je(this)
                    }
                }
            }

            function Je(t) {
                if (t.image) return;
                const e = t.tone.split(" ").map((t => parseInt(t, 10)));
                if (0 === e.length) t.textContent = Ye(t.textContent || "");
                else if (1 === e.length) {
                    const n = e[0];
                    t.textContent = 0 === n ? Ye(t.textContent || "") : function(t, e) {
                        const n = Ye(t);
                        if (!ze(n)) return t;
                        const r = Qe(e);
                        return r ? n.split(Ke).map((t => ze(t) ? Xe(t, r) : t)).join(Ke) : t
                    }(t.textContent || "", n)
                } else t.textContent = function(t, e) {
                    const n = Ye(t);
                    if (!ze(n)) return t;
                    const r = e.map((t => Qe(t)));
                    return n.split(Ke).map((t => {
                        if (!ze(t)) return t;
                        const e = r.shift();
                        return e ? Xe(t, e) : t
                    })).join(Ke)
                }(t.textContent || "", e)
            }
            window.customElements.get("g-emoji") || (window.GEmojiElement = GEmojiElement, window.customElements.define("g-emoji", GEmojiElement));
            const Ze = new WeakMap;

            function tn(t, e) {
                setTimeout((function() {
                    e.dispatchEvent(new Event(t))
                }), 0)
            }
            async function en(t) {
                return nn(t).then((function(e) {
                    const n = document.createElement("template");
                    n.innerHTML = e;
                    const r = document.importNode(n.content, !0);
                    !t.dispatchEvent(new CustomEvent("include-fragment-replace", {
                        cancelable: !0,
                        detail: {
                            fragment: r
                        }
                    })) || (t.replaceWith(r), t.dispatchEvent(new CustomEvent("include-fragment-replaced")))
                }), (function() {
                    t.classList.add("is-error")
                }))
            }

            function nn(t) {
                const e = t.src;
                let n = Ze.get(t);
                return n && n.src === e ? n.data : (n = e ? t.load() : Promise.reject(new Error("missing src")), Ze.set(t, {
                    src: e,
                    data: n
                }), n)
            }
            class IncludeFragmentElement extends HTMLElement {
                constructor() {
                    super(), this._attached = !1
                }
                static get observedAttributes() {
                    return ["src"]
                }
                get src() {
                    const t = this.getAttribute("src");
                    if (t) {
                        const e = this.ownerDocument.createElement("a");
                        return e.href = t, e.href
                    }
                    return ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get accept() {
                    return this.getAttribute("accept") || ""
                }
                set accept(t) {
                    this.setAttribute("accept", t)
                }
                get data() {
                    return nn(this)
                }
                attributeChangedCallback(t) {
                    "src" === t && this._attached && en(this)
                }
                connectedCallback() {
                    this._attached = !0, this.src && en(this)
                }
                disconnectedCallback() {
                    this._attached = !1
                }
                request() {
                    const t = this.src;
                    if (!t) throw new Error("missing src");
                    return new Request(t, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: {
                            Accept: this.accept || "text/html"
                        }
                    })
                }
                load() {
                    return Promise.resolve().then((() => (tn("loadstart", this), this.fetch(this.request())))).then((t => {
                        if (200 !== t.status) throw new Error("Failed to load resource: the server responded with a status of " + t.status);
                        const e = t.headers.get("Content-Type");
                        if (!(n = this.accept, n && n.split(",").find((t => t.match(/^\s*\*\/\*/))) || e && e.includes(this.accept ? this.accept : "text/html"))) throw new Error(`Failed to load resource: expected ${this.accept||"text/html"} but was ${e}`);
                        var n;
                        return t
                    })).then((t => t.text())).then((t => (tn("load", this), tn("loadend", this), t)), (t => {
                        throw tn("error", this), tn("loadend", this), t
                    }))
                }
                fetch(t) {
                    return fetch(t)
                }
            }
            t("I", IncludeFragmentElement), window.customElements.get("include-fragment") || (window.IncludeFragmentElement = IncludeFragmentElement, window.customElements.define("include-fragment", IncludeFragmentElement));
            const rn = new WeakMap,
                on = new WeakMap,
                sn = new WeakMap;

            function an(t) {
                const e = t.currentTarget;
                if (!(e instanceof ImageCropElement)) return;
                const {
                    box: n,
                    image: r
                } = sn.get(e) || {};
                if (!n || !r) return;
                let o = 0,
                    i = 0;
                if (t instanceof KeyboardEvent) "ArrowUp" === t.key ? i = -1 : "ArrowDown" === t.key ? i = 1 : "ArrowLeft" === t.key ? o = -1 : "ArrowRight" === t.key && (o = 1);
                else if (on.has(e) && t instanceof MouseEvent) {
                    const n = on.get(e);
                    o = t.pageX - n.dragStartX, i = t.pageY - n.dragStartY
                } else if (on.has(e) && t instanceof TouchEvent) {
                    const {
                        pageX: n,
                        pageY: r
                    } = t.changedTouches[0], {
                        dragStartX: s,
                        dragStartY: a
                    } = on.get(e);
                    o = n - s, i = r - a
                }
                if (0 !== o || 0 !== i) {
                    const t = Math.min(Math.max(0, n.offsetLeft + o), r.width - n.offsetWidth),
                        s = Math.min(Math.max(0, n.offsetTop + i), r.height - n.offsetHeight);
                    n.style.left = t + "px", n.style.top = s + "px", fn(e, {
                        x: t,
                        y: s,
                        width: n.offsetWidth,
                        height: n.offsetHeight
                    })
                }
                if (t instanceof MouseEvent) on.set(e, {
                    dragStartX: t.pageX,
                    dragStartY: t.pageY
                });
                else if (t instanceof TouchEvent) {
                    const {
                        pageX: n,
                        pageY: r
                    } = t.changedTouches[0];
                    on.set(e, {
                        dragStartX: n,
                        dragStartY: r
                    })
                }
            }

            function cn(t) {
                const e = t.target;
                if (!(e instanceof HTMLElement)) return;
                const n = ln(e);
                if (!(n instanceof ImageCropElement)) return;
                const {
                    box: r
                } = sn.get(n) || {};
                if (!r) return;
                const o = n.getBoundingClientRect();
                let i, s, a;
                if (t instanceof KeyboardEvent) {
                    if ("Escape" === t.key) return hn(n);
                    if ("-" === t.key && (a = -10), "=" === t.key && (a = 10), !a) return;
                    i = r.offsetWidth + a, s = r.offsetHeight + a, rn.set(n, {
                        startX: r.offsetLeft,
                        startY: r.offsetTop
                    })
                } else if (t instanceof MouseEvent) {
                    const e = rn.get(n);
                    if (!e) return;
                    i = t.pageX - e.startX - o.left - window.pageXOffset, s = t.pageY - e.startY - o.top - window.pageYOffset
                } else if (t instanceof TouchEvent) {
                    const e = rn.get(n);
                    if (!e) return;
                    i = t.changedTouches[0].pageX - e.startX - o.left - window.pageXOffset, s = t.changedTouches[0].pageY - e.startY - o.top - window.pageYOffset
                }
                i && s && dn(n, i, s, !(t instanceof KeyboardEvent))
            }

            function ln(t) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e.host : t
            }

            function un(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLElement)) return;
                const n = ln(e);
                if (!(n instanceof ImageCropElement)) return;
                const {
                    box: r
                } = sn.get(n) || {};
                if (!r) return;
                const o = t.target;
                if (o instanceof HTMLElement)
                    if (o.hasAttribute("data-direction")) {
                        const e = o.getAttribute("data-direction") || "";
                        n.addEventListener("mousemove", cn), n.addEventListener("touchmove", cn, {
                            passive: !0
                        }), ["nw", "se"].indexOf(e) >= 0 && n.classList.add("nwse"), ["ne", "sw"].indexOf(e) >= 0 && n.classList.add("nesw"), rn.set(n, {
                            startX: r.offsetLeft + (["se", "ne"].indexOf(e) >= 0 ? 0 : r.offsetWidth),
                            startY: r.offsetTop + (["se", "sw"].indexOf(e) >= 0 ? 0 : r.offsetHeight)
                        }), cn(t)
                    } else n.addEventListener("mousemove", an), n.addEventListener("touchmove", an, {
                        passive: !0
                    })
            }

            function dn(t, e, n, r = !0) {
                let o = Math.max(Math.abs(e), Math.abs(n), 10);
                const i = rn.get(t);
                if (!i) return;
                const {
                    box: s,
                    image: a
                } = sn.get(t) || {};
                if (!s || !a) return;
                o = Math.min(o, n > 0 ? a.height - i.startY : i.startY, e > 0 ? a.width - i.startX : i.startX);
                const c = r ? Math.round(Math.max(0, e > 0 ? i.startX : i.startX - o)) : s.offsetLeft,
                    l = r ? Math.round(Math.max(0, n > 0 ? i.startY : i.startY - o)) : s.offsetTop;
                s.style.left = c + "px", s.style.top = l + "px", s.style.width = o + "px", s.style.height = o + "px", fn(t, {
                    x: c,
                    y: l,
                    width: o,
                    height: o
                })
            }

            function hn(t) {
                const {
                    image: e
                } = sn.get(t) || {};
                if (!e) return;
                const n = Math.round(e.clientWidth > e.clientHeight ? e.clientHeight : e.clientWidth);
                rn.set(t, {
                    startX: (e.clientWidth - n) / 2,
                    startY: (e.clientHeight - n) / 2
                }), dn(t, n, n)
            }

            function mn(t) {
                const e = t.currentTarget;
                e instanceof ImageCropElement && (on.delete(e), e.classList.remove("nwse", "nesw"), e.removeEventListener("mousemove", cn), e.removeEventListener("mousemove", an), e.removeEventListener("touchmove", cn), e.removeEventListener("touchmove", an))
            }

            function fn(t, e) {
                const {
                    image: n
                } = sn.get(t) || {};
                if (!n) return;
                const r = n.naturalWidth / n.width;
                for (const o in e) {
                    const n = Math.round(e[o] * r);
                    e[o] = n;
                    const i = t.querySelector(`[data-image-crop-input='${o}']`);
                    i instanceof HTMLInputElement && (i.value = n.toString())
                }
                t.dispatchEvent(new CustomEvent("image-crop-change", {
                    bubbles: !0,
                    detail: e
                }))
            }
            class ImageCropElement extends HTMLElement {
                connectedCallback() {
                    if (sn.has(this)) return;
                    const t = this.attachShadow({
                        mode: "open"
                    });
                    t.innerHTML = '\n<style>\n  :host { touch-action: none; display: block; }\n  :host(.nesw) { cursor: nesw-resize; }\n  :host(.nwse) { cursor: nwse-resize; }\n  :host(.nesw) .crop-box, :host(.nwse) .crop-box { cursor: inherit; }\n  :host([loaded]) .crop-image { display: block; }\n  :host([loaded]) ::slotted([data-loading-slot]), .crop-image { display: none; }\n\n  .crop-wrapper {\n    position: relative;\n    font-size: 0;\n  }\n  .crop-container {\n    user-select: none;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    position: absolute;\n    overflow: hidden;\n    z-index: 1;\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  :host([rounded]) .crop-box {\n    border-radius: 50%;\n    box-shadow: 0 0 0 4000px rgba(0, 0, 0, 0.3);\n  }\n  .crop-box {\n    position: absolute;\n    border: 1px dashed #fff;\n    box-sizing: border-box;\n    cursor: move;\n  }\n\n  :host([rounded]) .crop-outline {\n    outline: none;\n  }\n  .crop-outline {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    outline: 4000px solid rgba(0, 0, 0, .3);\n  }\n\n  .handle { position: absolute; }\n  :host([rounded]) .handle::before { border-radius: 50%; }\n  .handle:before {\n    position: absolute;\n    display: block;\n    padding: 4px;\n    transform: translate(-50%, -50%);\n    content: \' \';\n    background: #fff;\n    border: 1px solid #767676;\n  }\n  .ne { top: 0; right: 0; cursor: nesw-resize; }\n  .nw { top: 0; left: 0; cursor: nwse-resize; }\n  .se { bottom: 0; right: 0; cursor: nwse-resize; }\n  .sw { bottom: 0; left: 0; cursor: nesw-resize; }\n</style>\n<slot></slot>\n<div class="crop-wrapper">\n  <img width="100%" class="crop-image" alt="">\n  <div class="crop-container">\n    <div data-crop-box class="crop-box">\n      <div class="crop-outline"></div>\n      <div data-direction="nw" class="handle nw"></div>\n      <div data-direction="ne" class="handle ne"></div>\n      <div data-direction="sw" class="handle sw"></div>\n      <div data-direction="se" class="handle se"></div>\n    </div>\n  </div>\n</div>\n';
                    const e = t.querySelector("[data-crop-box]");
                    if (!(e instanceof HTMLElement)) return;
                    const n = t.querySelector("img");
                    n instanceof HTMLImageElement && (sn.set(this, {
                        box: e,
                        image: n
                    }), n.addEventListener("load", (() => {
                        this.loaded = !0, hn(this)
                    })), this.addEventListener("mouseleave", mn), this.addEventListener("touchend", mn), this.addEventListener("mouseup", mn), e.addEventListener("mousedown", un), e.addEventListener("touchstart", un, {
                        passive: !0
                    }), this.addEventListener("keydown", an), this.addEventListener("keydown", cn), this.src && (n.src = this.src))
                }
                static get observedAttributes() {
                    return ["src"]
                }
                get src() {
                    return this.getAttribute("src")
                }
                set src(t) {
                    t ? this.setAttribute("src", t) : this.removeAttribute("src")
                }
                get loaded() {
                    return this.hasAttribute("loaded")
                }
                set loaded(t) {
                    t ? this.setAttribute("loaded", "") : this.removeAttribute("loaded")
                }
                attributeChangedCallback(t, e, n) {
                    const {
                        image: r
                    } = sn.get(this) || {};
                    "src" === t && (this.loaded = !1, r && (r.src = n))
                }
            }
            window.customElements.get("image-crop") || (window.ImageCropElement = ImageCropElement, window.customElements.define("image-crop", ImageCropElement));
            const pn = ["[data-md-button]", "md-header", "md-bold", "md-italic", "md-quote", "md-code", "md-link", "md-image", "md-unordered-list", "md-ordered-list", "md-task-list", "md-mention", "md-ref", "md-strikethrough"];

            function gn(t) {
                const e = [];
                for (const n of t.querySelectorAll(pn.join(", "))) n.hidden || n.offsetWidth <= 0 && n.offsetHeight <= 0 || n.closest("markdown-toolbar") === t && e.push(n);
                return e
            }
            const vn = new WeakMap;
            class MarkdownButtonElement extends HTMLElement {
                constructor() {
                    super();
                    const t = () => {
                        const t = vn.get(this);
                        t && Cn(this, t)
                    };
                    var e;
                    this.addEventListener("keydown", (e = t, function(t) {
                        " " !== t.key && "Enter" !== t.key || (t.preventDefault(), e(t))
                    })), this.addEventListener("click", t)
                }
                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "button")
                }
                click() {
                    const t = vn.get(this);
                    t && Cn(this, t)
                }
            }
            class MarkdownHeaderButtonElement extends MarkdownButtonElement {
                constructor() {
                    super();
                    const t = parseInt(this.getAttribute("level") || "3", 10);
                    if (t < 1 || t > 6) return;
                    const e = "#".repeat(t) + " ";
                    vn.set(this, {
                        prefix: e
                    })
                }
            }
            window.customElements.get("md-header") || (window.MarkdownHeaderButtonElement = MarkdownHeaderButtonElement, window.customElements.define("md-header", MarkdownHeaderButtonElement));
            class MarkdownBoldButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "**",
                        suffix: "**",
                        trimFirst: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "b")
                }
            }
            window.customElements.get("md-bold") || (window.MarkdownBoldButtonElement = MarkdownBoldButtonElement, window.customElements.define("md-bold", MarkdownBoldButtonElement));
            class MarkdownItalicButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "_",
                        suffix: "_",
                        trimFirst: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "i")
                }
            }
            window.customElements.get("md-italic") || (window.MarkdownItalicButtonElement = MarkdownItalicButtonElement, window.customElements.define("md-italic", MarkdownItalicButtonElement));
            class MarkdownQuoteButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "> ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
            }
            window.customElements.get("md-quote") || (window.MarkdownQuoteButtonElement = MarkdownQuoteButtonElement, window.customElements.define("md-quote", MarkdownQuoteButtonElement));
            class MarkdownCodeButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "`",
                        suffix: "`",
                        blockPrefix: "```",
                        blockSuffix: "```"
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "e")
                }
            }
            window.customElements.get("md-code") || (window.MarkdownCodeButtonElement = MarkdownCodeButtonElement, window.customElements.define("md-code", MarkdownCodeButtonElement));
            class MarkdownLinkButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "[",
                        suffix: "](url)",
                        replaceNext: "url",
                        scanFor: "https?://"
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "k")
                }
            }
            window.customElements.get("md-link") || (window.MarkdownLinkButtonElement = MarkdownLinkButtonElement, window.customElements.define("md-link", MarkdownLinkButtonElement));
            class MarkdownImageButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "![",
                        suffix: "](url)",
                        replaceNext: "url",
                        scanFor: "https?://"
                    })
                }
            }
            window.customElements.get("md-image") || (window.MarkdownImageButtonElement = MarkdownImageButtonElement, window.customElements.define("md-image", MarkdownImageButtonElement));
            class MarkdownUnorderedListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "- ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
            }
            window.customElements.get("md-unordered-list") || (window.MarkdownUnorderedListButtonElement = MarkdownUnorderedListButtonElement, window.customElements.define("md-unordered-list", MarkdownUnorderedListButtonElement));
            class MarkdownOrderedListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "1. ",
                        multiline: !0,
                        orderedList: !0
                    })
                }
            }
            window.customElements.get("md-ordered-list") || (window.MarkdownOrderedListButtonElement = MarkdownOrderedListButtonElement, window.customElements.define("md-ordered-list", MarkdownOrderedListButtonElement));
            class MarkdownTaskListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "- [ ] ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "L")
                }
            }
            window.customElements.get("md-task-list") || (window.MarkdownTaskListButtonElement = MarkdownTaskListButtonElement, window.customElements.define("md-task-list", MarkdownTaskListButtonElement));
            class MarkdownMentionButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "@",
                        prefixSpace: !0
                    })
                }
            }
            window.customElements.get("md-mention") || (window.MarkdownMentionButtonElement = MarkdownMentionButtonElement, window.customElements.define("md-mention", MarkdownMentionButtonElement));
            class MarkdownRefButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "#",
                        prefixSpace: !0
                    })
                }
            }
            window.customElements.get("md-ref") || (window.MarkdownRefButtonElement = MarkdownRefButtonElement, window.customElements.define("md-ref", MarkdownRefButtonElement));
            class MarkdownStrikethroughButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), vn.set(this, {
                        prefix: "~~",
                        suffix: "~~",
                        trimFirst: !0
                    })
                }
            }
            window.customElements.get("md-strikethrough") || (window.MarkdownStrikethroughButtonElement = MarkdownStrikethroughButtonElement, window.customElements.define("md-strikethrough", MarkdownStrikethroughButtonElement));
            const bn = navigator.userAgent.match(/Macintosh/) ? "Meta" : "Control";
            class MarkdownToolbarElement extends HTMLElement {
                constructor() {
                    super()
                }
                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "toolbar"), this.addEventListener("keydown", En);
                    const t = xn.bind(null, this);
                    this.field && (this.field.addEventListener("keydown", t), yn.set(this, t)), this.setAttribute("tabindex", "0"), this.addEventListener("focus", wn, {
                        once: !0
                    })
                }
                disconnectedCallback() {
                    const t = yn.get(this);
                    t && this.field && (this.field.removeEventListener("keydown", t), yn.delete(this)), this.removeEventListener("keydown", En)
                }
                get field() {
                    const t = this.getAttribute("for");
                    if (!t) return null;
                    const e = "getRootNode" in this ? this.getRootNode() : document;
                    let n;
                    return (e instanceof Document || e instanceof ShadowRoot) && (n = e.getElementById(t)), n instanceof HTMLTextAreaElement ? n : null
                }
            }

            function wn({
                target: t
            }) {
                if (!(t instanceof Element)) return;
                t.removeAttribute("tabindex");
                let e = "0";
                for (const n of gn(t)) n.setAttribute("tabindex", e), "0" === e && (n.focus(), e = "-1")
            }

            function En(t) {
                const e = t.key;
                if ("ArrowRight" !== e && "ArrowLeft" !== e && "Home" !== e && "End" !== e) return;
                const n = t.currentTarget;
                if (!(n instanceof HTMLElement)) return;
                const r = gn(n),
                    o = r.indexOf(t.target),
                    i = r.length;
                if (-1 === o) return;
                let s = 0;
                "ArrowLeft" === e && (s = o - 1), "ArrowRight" === e && (s = o + 1), "End" === e && (s = i - 1), s < 0 && (s = i - 1), s > i - 1 && (s = 0);
                for (let a = 0; a < i; a += 1) r[a].setAttribute("tabindex", a === s ? "0" : "-1");
                t.preventDefault(), r[s].focus()
            }
            const yn = new WeakMap;

            function xn(t, e) {
                if (e.metaKey && "Meta" === bn || e.ctrlKey && "Control" === bn) {
                    const n = function(t, e) {
                        for (const n of t.querySelectorAll("[hotkey]"))
                            if (n.getAttribute("hotkey") === e) return n;
                        return null
                    }(t, e.shiftKey ? e.key.toUpperCase() : e.key);
                    n && (n.click(), e.preventDefault())
                }
            }

            function kn(t) {
                return t.trim().split("\n").length > 1
            }

            function An(t, e) {
                return Array(e + 1).join(t)
            }

            function Tn(t, e, n) {
                let r = e;
                const o = n ? /\n/ : /\s/;
                for (; t[r] && !t[r].match(o);) r++;
                return r
            }
            window.customElements.get("markdown-toolbar") || (window.MarkdownToolbarElement = MarkdownToolbarElement, window.customElements.define("markdown-toolbar", MarkdownToolbarElement));
            let Ln = null;

            function Mn(t, e) {
                const n = t.value.slice(t.selectionStart, t.selectionEnd);
                let r;
                r = e.orderedList ? function(t) {
                        const e = /^\d+\.\s+/,
                            n = t.selectionStart === t.selectionEnd;
                        let r, o, i, s, a = t.value.slice(t.selectionStart, t.selectionEnd),
                            c = a,
                            l = a.split("\n");
                        if (n) {
                            const e = t.value.slice(0, t.selectionStart).split(/\n/);
                            i = t.selectionStart - e[e.length - 1].length, s = Tn(t.value, t.selectionStart, !0), c = t.value.slice(i, s)
                        }
                        const u = c.split("\n");
                        if (u.every((t => e.test(t)))) {
                            if (l = u.map((t => t.replace(e, ""))), a = l.join("\n"), n && i && s) {
                                const e = u[0].length - l[0].length;
                                o = r = t.selectionStart - e, t.selectionStart = i, t.selectionEnd = s
                            }
                        } else {
                            l = function(t) {
                                let e, n, r;
                                const o = [];
                                for (r = e = 0, n = t.length; e < n; r = ++e) {
                                    const e = t[r];
                                    o.push(`${r+1}. ${e}`)
                                }
                                return o
                            }(l), a = l.join("\n");
                            const {
                                newlinesToAppend: e,
                                newlinesToPrepend: i
                            } = Sn(t);
                            o = t.selectionStart + e.length, r = o + a.length, n && (o = r), a = e + a + i
                        }
                        return {
                            text: a,
                            selectionStart: o,
                            selectionEnd: r
                        }
                    }(t) : e.multiline && kn(n) ? function(t, e) {
                        const {
                            prefix: n,
                            suffix: r,
                            surroundWithNewlines: o
                        } = e;
                        let i = t.value.slice(t.selectionStart, t.selectionEnd),
                            s = t.selectionStart,
                            a = t.selectionEnd;
                        const c = i.split("\n");
                        if (c.every((t => t.startsWith(n) && t.endsWith(r)))) i = c.map((t => t.slice(n.length, t.length - r.length))).join("\n"), a = s + i.length;
                        else if (i = c.map((t => n + t + r)).join("\n"), o) {
                            const {
                                newlinesToAppend: e,
                                newlinesToPrepend: n
                            } = Sn(t);
                            s += e.length, a = s + i.length, i = e + i + n
                        }
                        return {
                            text: i,
                            selectionStart: s,
                            selectionEnd: a
                        }
                    }(t, e) : function(t, e) {
                        let n, r;
                        const {
                            prefix: o,
                            suffix: i,
                            blockPrefix: s,
                            blockSuffix: a,
                            replaceNext: c,
                            prefixSpace: l,
                            scanFor: u,
                            surroundWithNewlines: d
                        } = e, h = t.selectionStart, m = t.selectionEnd;
                        let f = t.value.slice(t.selectionStart, t.selectionEnd),
                            p = kn(f) && s.length > 0 ? s + "\n" : o,
                            g = kn(f) && a.length > 0 ? "\n" + a : i;
                        if (l) {
                            const e = t.value[t.selectionStart - 1];
                            0 === t.selectionStart || null == e || e.match(/\s/) || (p = " " + p)
                        }
                        f = function(t, e, n, r = !1) {
                            if (t.selectionStart === t.selectionEnd) t.selectionStart = function(t, e) {
                                let n = e;
                                for (; t[n] && null != t[n - 1] && !t[n - 1].match(/\s/);) n--;
                                return n
                            }(t.value, t.selectionStart), t.selectionEnd = Tn(t.value, t.selectionEnd, r);
                            else {
                                const r = t.selectionStart - e.length,
                                    o = t.selectionEnd + n.length,
                                    i = t.value.slice(r, t.selectionStart) === e,
                                    s = t.value.slice(t.selectionEnd, o) === n;
                                i && s && (t.selectionStart = r, t.selectionEnd = o)
                            }
                            return t.value.slice(t.selectionStart, t.selectionEnd)
                        }(t, p, g, e.multiline);
                        let v = t.selectionStart,
                            b = t.selectionEnd;
                        const w = c.length > 0 && g.indexOf(c) > -1 && f.length > 0;
                        if (d) {
                            const e = Sn(t);
                            n = e.newlinesToAppend, r = e.newlinesToPrepend, p = n + o, g += r
                        }
                        if (f.startsWith(p) && f.endsWith(g)) {
                            const t = f.slice(p.length, f.length - g.length);
                            if (h === m) {
                                let e = h - p.length;
                                e = Math.max(e, v), e = Math.min(e, v + t.length), v = b = e
                            } else b = v + t.length;
                            return {
                                text: t,
                                selectionStart: v,
                                selectionEnd: b
                            }
                        }
                        if (w) {
                            if (u.length > 0 && f.match(u)) {
                                g = g.replace(c, f);
                                const t = p + g;
                                return v = b = v + p.length, {
                                    text: t,
                                    selectionStart: v,
                                    selectionEnd: b
                                }
                            } {
                                const t = p + f + g;
                                return v = v + p.length + f.length + g.indexOf(c), b = v + c.length, {
                                    text: t,
                                    selectionStart: v,
                                    selectionEnd: b
                                }
                            }
                        } {
                            let t = p + f + g;
                            v = h + p.length, b = m + p.length;
                            const n = f.match(/^\s*|\s*$/g);
                            if (e.trimFirst && n) {
                                const e = n[0] || "",
                                    r = n[1] || "";
                                t = e + p + f.trim() + g + r, v += e.length, b -= r.length
                            }
                            return {
                                text: t,
                                selectionStart: v,
                                selectionEnd: b
                            }
                        }
                    }(t, e),
                    function(t, {
                        text: e,
                        selectionStart: n,
                        selectionEnd: r
                    }) {
                        const o = t.selectionStart,
                            i = t.value.slice(0, o),
                            s = t.value.slice(t.selectionEnd);
                        if (null === Ln || !0 === Ln) {
                            t.contentEditable = "true";
                            try {
                                Ln = document.execCommand("insertText", !1, e)
                            } catch (a) {
                                Ln = !1
                            }
                            t.contentEditable = "false"
                        }
                        if (Ln && !t.value.slice(0, t.selectionStart).endsWith(e) && (Ln = !1), !Ln) {
                            try {
                                document.execCommand("ms-beginUndoUnit")
                            } catch (fi) {}
                            t.value = i + e + s;
                            try {
                                document.execCommand("ms-endUndoUnit")
                            } catch (fi) {}
                            t.dispatchEvent(new CustomEvent("input", {
                                bubbles: !0,
                                cancelable: !0
                            }))
                        }
                        null != n && null != r ? t.setSelectionRange(n, r) : t.setSelectionRange(o, t.selectionEnd)
                    }(t, r)
            }

            function Sn(t) {
                const e = t.value.slice(0, t.selectionStart),
                    n = t.value.slice(t.selectionEnd),
                    r = e.match(/\n*$/),
                    o = n.match(/^\n*/),
                    i = r ? r[0].length : 0,
                    s = o ? o[0].length : 0;
                let a, c;
                return e.match(/\S/) && i < 2 && (a = An("\n", 2 - i)), n.match(/\S/) && s < 2 && (c = An("\n", 2 - s)), null == a && (a = ""), null == c && (c = ""), {
                    newlinesToAppend: a,
                    newlinesToPrepend: c
                }
            }

            function Cn(t, e) {
                const n = t.closest("markdown-toolbar");
                if (!(n instanceof MarkdownToolbarElement)) return;
                const r = Object.assign(Object.assign({}, {
                        prefix: "",
                        suffix: "",
                        blockPrefix: "",
                        blockSuffix: "",
                        multiline: !1,
                        replaceNext: "",
                        prefixSpace: !1,
                        scanFor: "",
                        surroundWithNewlines: !1,
                        orderedList: !1,
                        trimFirst: !1
                    }), e),
                    o = n.field;
                o && (o.focus(), Mn(o, r))
            }
            const Nn = new WeakMap;
            class RemoteInputElement extends HTMLElement {
                constructor() {
                    super();
                    const t = In.bind(null, this, !0),
                        e = {
                            currentQuery: null,
                            oninput: Dn(t),
                            fetch: t,
                            controller: null
                        };
                    Nn.set(this, e)
                }
                static get observedAttributes() {
                    return ["src"]
                }
                attributeChangedCallback(t, e) {
                    e && "src" === t && In(this, !1)
                }
                connectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false");
                    const e = Nn.get(this);
                    e && (t.addEventListener("focus", e.fetch), t.addEventListener("change", e.fetch), t.addEventListener("input", e.oninput))
                }
                disconnectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    const e = Nn.get(this);
                    e && (t.removeEventListener("focus", e.fetch), t.removeEventListener("change", e.fetch), t.removeEventListener("input", e.oninput))
                }
                get input() {
                    const t = this.querySelector("input, textarea");
                    return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : null
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
            }
            async function In(t, e) {
                const n = t.input;
                if (!n) return;
                const r = Nn.get(t);
                if (!r) return;
                const o = n.value;
                if (e && r.currentQuery === o) return;
                r.currentQuery = o;
                const i = t.src;
                if (!i) return;
                const s = document.getElementById(t.getAttribute("aria-owns") || "");
                if (!s) return;
                const a = new URL(i, window.location.href),
                    c = new URLSearchParams(a.search);
                let l;
                c.append(t.getAttribute("param") || "q", o), a.search = c.toString(), r.controller ? r.controller.abort() : (t.dispatchEvent(new CustomEvent("loadstart")), t.setAttribute("loading", "")), r.controller = "AbortController" in window ? new AbortController : {
                    signal: null,
                    abort() {}
                };
                let u = "";
                try {
                    l = await async function(t, e, n) {
                        try {
                            const r = await fetch(e, n);
                            return t.dispatchEvent(new CustomEvent("load")), t.dispatchEvent(new CustomEvent("loadend")), r
                        } catch (r) {
                            throw "AbortError" !== r.name && (t.dispatchEvent(new CustomEvent("error")), t.dispatchEvent(new CustomEvent("loadend"))), r
                        }
                    }(t, a.toString(), {
                        signal: r.controller.signal,
                        credentials: "same-origin",
                        headers: {
                            accept: "text/fragment+html"
                        }
                    }), u = await l.text(), t.removeAttribute("loading"), r.controller = null
                } catch (d) {
                    return void("AbortError" !== d.name && (t.removeAttribute("loading"), r.controller = null))
                }
                l && l.ok ? (s.innerHTML = u, t.dispatchEvent(new CustomEvent("remote-input-success", {
                    bubbles: !0
                }))) : t.dispatchEvent(new CustomEvent("remote-input-error", {
                    bubbles: !0
                }))
            }

            function Dn(t) {
                let e;
                return function() {
                    clearTimeout(e), e = setTimeout((() => {
                        clearTimeout(e), t()
                    }), 300)
                }
            }
            t("n", RemoteInputElement), window.customElements.get("remote-input") || (window.RemoteInputElement = RemoteInputElement, window.customElements.define("remote-input", RemoteInputElement));
            const Hn = new WeakMap;
            let Pn = null;

            function Rn(t, e) {
                return t.closest("task-lists") === e.closest("task-lists")
            }

            function On(t) {
                if (t.currentTarget !== t.target) return;
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".contains-task-list");
                if (!n) return;
                if (e.classList.add("is-ghost"), t.dataTransfer && t.dataTransfer.setData("text/plain", (e.textContent || "").trim()), !e.parentElement) return;
                const r = Array.from(e.parentElement.children),
                    o = r.indexOf(e),
                    i = Hn.get(e);
                i && i.sortStarted(n), Pn = {
                    didDrop: !1,
                    dragging: e,
                    dropzone: e,
                    sourceList: n,
                    sourceSibling: r[o + 1] || null,
                    sourceIndex: o
                }
            }

            function _n(t) {
                if (!Pn) return;
                const e = t.currentTarget;
                e instanceof Element && (Rn(Pn.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move"), Pn.dropzone !== e && (Pn.dragging.classList.add("is-dragging"), Pn.dropzone = e, ! function(t, e) {
                    if (t.parentNode === e.parentNode) {
                        let n = t;
                        for (; n;) {
                            if (n === e) return !0;
                            n = n.previousElementSibling
                        }
                    }
                    return !1
                }(Pn.dragging, e) ? e.after(Pn.dragging) : e.before(Pn.dragging))) : t.stopPropagation())
            }

            function qn(t) {
                if (!Pn) return;
                t.preventDefault(), t.stopPropagation();
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                if (Pn.didDrop = !0, !Pn.dragging.parentElement) return;
                let n = Array.from(Pn.dragging.parentElement.children).indexOf(Pn.dragging);
                const r = e.closest(".contains-task-list");
                if (!r) return;
                if (Pn.sourceIndex === n && Pn.sourceList === r) return;
                Pn.sourceList === r && Pn.sourceIndex < n && n++;
                const o = {
                        list: Pn.sourceList,
                        index: Pn.sourceIndex
                    },
                    i = {
                        list: r,
                        index: n
                    },
                    s = Hn.get(Pn.dragging);
                s && s.sortFinished({
                    src: o,
                    dst: i
                })
            }

            function Fn() {
                Pn && (Pn.dragging.classList.remove("is-dragging"), Pn.dragging.classList.remove("is-ghost"), Pn.didDrop || Pn.sourceList.insertBefore(Pn.dragging, Pn.sourceSibling), Pn = null)
            }

            function Bn(t) {
                if (!Pn) return;
                const e = t.currentTarget;
                e instanceof Element && (Rn(Pn.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move")) : t.stopPropagation())
            }
            const Wn = new WeakMap;
            class TaskListsElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("change", (t => {
                        const e = t.target;
                        e instanceof HTMLInputElement && e.classList.contains("task-list-item-checkbox") && this.dispatchEvent(new CustomEvent("task-lists-check", {
                            bubbles: !0,
                            detail: {
                                position: Kn(e),
                                checked: e.checked
                            }
                        }))
                    })), Wn.set(this, new MutationObserver(Qn.bind(null, this)))
                }
                connectedCallback() {
                    const t = Wn.get(this);
                    t && t.observe(this, {
                        childList: !0,
                        subtree: !0
                    }), Qn(this)
                }
                disconnectedCallback() {
                    const t = Wn.get(this);
                    t && t.disconnect()
                }
                get disabled() {
                    return this.hasAttribute("disabled")
                }
                set disabled(t) {
                    t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                }
                get sortable() {
                    return this.hasAttribute("sortable")
                }
                set sortable(t) {
                    t ? this.setAttribute("sortable", "") : this.removeAttribute("sortable")
                }
                static get observedAttributes() {
                    return ["disabled"]
                }
                attributeChangedCallback(t, e, n) {
                    if (e !== n) switch (t) {
                        case "disabled":
                            Jn(this)
                    }
                }
            }
            const $n = document.createElement("template");
            $n.innerHTML = '\n  <span class="handle">\n    <svg class="drag-handle" aria-hidden="true" width="16" height="16">\n      <path d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"/>\n    </svg>\n  </span>';
            const jn = new WeakMap;

            function Vn(t) {
                if (jn.get(t)) return;
                jn.set(t, !0);
                const e = t.closest("task-lists");
                if (!(e instanceof TaskListsElement)) return;
                if (e.querySelectorAll(".task-list-item").length <= 1) return;
                const n = $n.content.cloneNode(!0),
                    r = n.querySelector(".handle");
                if (t.prepend(n), !r) throw new Error("handle not found");
                r.addEventListener("mouseenter", rr), r.addEventListener("mouseleave", or),
                    function(t, e, n) {
                        Hn.set(t, {
                            sortStarted: e,
                            sortFinished: n
                        }), t.addEventListener("dragstart", On), t.addEventListener("dragenter", _n), t.addEventListener("dragend", Fn), t.addEventListener("drop", qn), t.addEventListener("dragover", Bn)
                    }(t, er, nr), t.addEventListener("mouseenter", Un), t.addEventListener("mouseleave", zn)
            }

            function Un(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest("task-lists");
                n instanceof TaskListsElement && n.sortable && !n.disabled && e.classList.add("hovered")
            }

            function zn(t) {
                const e = t.currentTarget;
                e instanceof Element && e.classList.remove("hovered")
            }

            function Kn(t) {
                const e = Yn(t);
                if (!e) throw new Error(".contains-task-list not found");
                const n = t.closest(".task-list-item"),
                    r = n ? Array.from(e.children).indexOf(n) : -1;
                return [Zn(e), r]
            }

            function Yn(t) {
                const e = t.parentElement;
                return e ? e.closest(".contains-task-list") : null
            }

            function Xn(t) {
                return Yn(t) === Gn(t)
            }

            function Gn(t) {
                const e = Yn(t);
                return e ? Gn(e) || e : null
            }

            function Qn(t) {
                const e = t.querySelectorAll(".contains-task-list > .task-list-item");
                for (const n of e) Xn(n) && Vn(n);
                Jn(t)
            }

            function Jn(t) {
                for (const e of t.querySelectorAll(".task-list-item")) e.classList.toggle("enabled", !t.disabled);
                for (const e of t.querySelectorAll(".task-list-item-checkbox")) e instanceof HTMLInputElement && (e.disabled = t.disabled)
            }

            function Zn(t) {
                const e = t.closest("task-lists");
                if (!e) throw new Error("parent not found");
                return Array.from(e.querySelectorAll("ol, ul")).indexOf(t)
            }
            const tr = new WeakMap;

            function er(t) {
                const e = t.closest("task-lists");
                if (!e) throw new Error("parent not found");
                tr.set(e, Array.from(e.querySelectorAll("ol, ul")))
            }

            function nr({
                src: t,
                dst: e
            }) {
                const n = t.list.closest("task-lists");
                if (!n) return;
                const r = tr.get(n);
                r && (tr.delete(n), n.dispatchEvent(new CustomEvent("task-lists-move", {
                    bubbles: !0,
                    detail: {
                        src: [r.indexOf(t.list), t.index],
                        dst: [r.indexOf(e.list), e.index]
                    }
                })))
            }

            function rr(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".task-list-item");
                if (!n) return;
                const r = n.closest("task-lists");
                r instanceof TaskListsElement && r.sortable && !r.disabled && n.setAttribute("draggable", "true")
            }

            function or(t) {
                if (Pn) return;
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".task-list-item");
                n && n.setAttribute("draggable", "false")
            }
            window.customElements.get("task-lists") || (window.TaskListsElement = TaskListsElement, window.customElements.define("task-lists", TaskListsElement)), t("T", TaskListsElement);
            const ir = !!navigator.userAgent.match(/Macintosh/);
            class Combobox {
                constructor(t, e) {
                    this.input = t, this.list = e, this.isComposing = !1, e.id || (e.id = "combobox-" + Math.random().toString().slice(2, 6)), this.keyboardEventHandler = t => function(t, e) {
                        if (t.shiftKey || t.metaKey || t.altKey) return;
                        if (!ir && t.ctrlKey) return;
                        if (e.isComposing) return;
                        switch (t.key) {
                            case "Enter":
                            case "Tab":
                                (function(t, e) {
                                    const n = e.querySelector('[aria-selected="true"]');
                                    return !!n && ("true" === n.getAttribute("aria-disabled") || n.click(), !0)
                                })(e.input, e.list) && t.preventDefault();
                                break;
                            case "Escape":
                                e.clearSelection();
                                break;
                            case "ArrowDown":
                                e.navigate(1), t.preventDefault();
                                break;
                            case "ArrowUp":
                                e.navigate(-1), t.preventDefault();
                                break;
                            case "n":
                                ir && t.ctrlKey && (e.navigate(1), t.preventDefault());
                                break;
                            case "p":
                                ir && t.ctrlKey && (e.navigate(-1), t.preventDefault());
                                break;
                            default:
                                if (t.ctrlKey) break;
                                e.clearSelection()
                        }
                    }(t, this), this.compositionEventHandler = t => function(t, e) {
                        e.isComposing = "compositionstart" === t.type;
                        if (!document.getElementById(e.input.getAttribute("aria-controls") || "")) return;
                        e.clearSelection()
                    }(t, this), this.inputHandler = this.clearSelection.bind(this), t.setAttribute("role", "combobox"), t.setAttribute("aria-controls", e.id), t.setAttribute("aria-expanded", "false"), t.setAttribute("aria-autocomplete", "list"), t.setAttribute("aria-haspopup", "listbox")
                }
                destroy() {
                    this.clearSelection(), this.stop(), this.input.removeAttribute("role"), this.input.removeAttribute("aria-controls"), this.input.removeAttribute("aria-expanded"), this.input.removeAttribute("aria-autocomplete"), this.input.removeAttribute("aria-haspopup")
                }
                start() {
                    this.input.setAttribute("aria-expanded", "true"), this.input.addEventListener("compositionstart", this.compositionEventHandler), this.input.addEventListener("compositionend", this.compositionEventHandler), this.input.addEventListener("input", this.inputHandler), this.input.addEventListener("keydown", this.keyboardEventHandler), this.list.addEventListener("click", sr)
                }
                stop() {
                    this.clearSelection(), this.input.setAttribute("aria-expanded", "false"), this.input.removeEventListener("compositionstart", this.compositionEventHandler), this.input.removeEventListener("compositionend", this.compositionEventHandler), this.input.removeEventListener("input", this.inputHandler), this.input.removeEventListener("keydown", this.keyboardEventHandler), this.list.removeEventListener("click", sr)
                }
                navigate(t = 1) {
                    const e = Array.from(this.list.querySelectorAll('[aria-selected="true"]')).filter(ar)[0],
                        n = Array.from(this.list.querySelectorAll('[role="option"]')).filter(ar),
                        r = n.indexOf(e);
                    if (r === n.length - 1 && 1 === t || 0 === r && -1 === t) return this.clearSelection(), void this.input.focus();
                    let o = 1 === t ? 0 : n.length - 1;
                    if (e && r >= 0) {
                        const e = r + t;
                        e >= 0 && e < n.length && (o = e)
                    }
                    const i = n[o];
                    if (i)
                        for (const s of n) i === s ? (this.input.setAttribute("aria-activedescendant", i.id), i.setAttribute("aria-selected", "true"), cr(this.list, i)) : s.setAttribute("aria-selected", "false")
                }
                clearSelection() {
                    this.input.removeAttribute("aria-activedescendant");
                    for (const t of this.list.querySelectorAll('[aria-selected="true"]')) t.setAttribute("aria-selected", "false")
                }
            }

            function sr(t) {
                if (!(t.target instanceof Element)) return;
                const e = t.target.closest('[role="option"]');
                e && "true" !== e.getAttribute("aria-disabled") && function(t) {
                    t.dispatchEvent(new CustomEvent("combobox-commit", {
                        bubbles: !0
                    }))
                }(e)
            }

            function ar(t) {
                return !t.hidden && !(t instanceof HTMLInputElement && "hidden" === t.type) && (t.offsetWidth > 0 || t.offsetHeight > 0)
            }

            function cr(t, e) {
                (function(t, e) {
                    const n = t.scrollTop,
                        r = n + t.clientHeight,
                        o = e.offsetTop,
                        i = o + e.clientHeight;
                    return o >= n && i <= r
                })(t, e) || (t.scrollTop = e.offsetTop)
            }
            t("C", Combobox);
            const lr = /\s|\(|\[/;

            function ur(t, e, n, {
                multiWord: r,
                lookBackIndex: o,
                lastMatchPosition: i
            } = {
                multiWord: !1,
                lookBackIndex: 0,
                lastMatchPosition: null
            }) {
                let s = t.lastIndexOf(e, n - 1);
                if (-1 === s) return;
                if (s < o) return;
                if (r) {
                    if (null != i) {
                        if (i === s) return;
                        s = i - 1
                    }
                    if (" " === t[s + 1] && n >= s + 2) return;
                    if (t.lastIndexOf("\n", n - 1) > s) return;
                    if (t.lastIndexOf(".", n - 1) > s) return
                } else {
                    if (t.lastIndexOf(" ", n - 1) > s) return
                }
                const a = t[s - 1];
                if (a && !lr.test(a)) return;
                return {
                    text: t.substring(s + e.length, n),
                    position: s + e.length
                }
            }
            const dr = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
                hr = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
                mr = new WeakMap;

            function fr(t, e = t.selectionEnd) {
                const {
                    mirror: n,
                    marker: r
                } = function(t, e) {
                    const n = t.nodeName.toLowerCase();
                    if ("textarea" !== n && "input" !== n) throw new Error("expected textField to a textarea or input");
                    let r = mr.get(t);
                    if (r && r.parentElement === t.parentElement) r.innerHTML = "";
                    else {
                        r = document.createElement("div"), mr.set(t, r);
                        const e = window.getComputedStyle(t),
                            o = dr.slice(0);
                        "textarea" === n ? o.push("white-space:pre-wrap;") : o.push("white-space:nowrap;");
                        for (let t = 0, n = hr.length; t < n; t++) {
                            const n = hr[t];
                            o.push(`${n}:${e.getPropertyValue(n)};`)
                        }
                        r.style.cssText = o.join(" ")
                    }
                    const o = document.createElement("span");
                    let i, s;
                    if (o.style.cssText = "position: absolute;", o.innerHTML = "&nbsp;", "number" == typeof e) {
                        let n = t.value.substring(0, e);
                        n && (i = document.createTextNode(n)), n = t.value.substring(e), n && (s = document.createTextNode(n))
                    } else {
                        const e = t.value;
                        e && (i = document.createTextNode(e))
                    }
                    if (i && r.appendChild(i), r.appendChild(o), s && r.appendChild(s), !r.parentElement) {
                        if (!t.parentElement) throw new Error("textField must have a parentElement to mirror");
                        t.parentElement.insertBefore(r, t)
                    }
                    return r.scrollTop = t.scrollTop, r.scrollLeft = t.scrollLeft, {
                        mirror: r,
                        marker: o
                    }
                }(t, e), o = n.getBoundingClientRect(), i = r.getBoundingClientRect();
                return setTimeout((() => {
                    n.remove()
                }), 5e3), {
                    top: i.top - o.top,
                    left: i.left - o.left
                }
            }
            const pr = new WeakMap;
            class TextExpander {
                constructor(t, e) {
                    this.expander = t, this.input = e, this.combobox = null, this.menu = null, this.match = null, this.justPasted = !1, this.lookBackIndex = 0, this.oninput = this.onInput.bind(this), this.onpaste = this.onPaste.bind(this), this.onkeydown = this.onKeydown.bind(this), this.oncommit = this.onCommit.bind(this), this.onmousedown = this.onMousedown.bind(this), this.onblur = this.onBlur.bind(this), this.interactingWithList = !1, e.addEventListener("paste", this.onpaste), e.addEventListener("input", this.oninput), e.addEventListener("keydown", this.onkeydown), e.addEventListener("blur", this.onblur)
                }
                destroy() {
                    this.input.removeEventListener("paste", this.onpaste), this.input.removeEventListener("input", this.oninput), this.input.removeEventListener("keydown", this.onkeydown), this.input.removeEventListener("blur", this.onblur)
                }
                dismissMenu() {
                    this.deactivate() && (this.lookBackIndex = this.input.selectionEnd || this.lookBackIndex)
                }
                activate(t, e) {
                    if (this.input !== document.activeElement) return;
                    this.deactivate(), this.menu = e, e.id || (e.id = "text-expander-" + Math.floor(1e5 * Math.random()).toString()), this.expander.append(e), this.combobox = new Combobox(this.input, e);
                    const {
                        top: n,
                        left: r
                    } = fr(this.input, t.position);
                    e.style.top = n + "px", e.style.left = r + "px", this.combobox.start(), e.addEventListener("combobox-commit", this.oncommit), e.addEventListener("mousedown", this.onmousedown), this.combobox.navigate(1)
                }
                deactivate() {
                    const t = this.menu;
                    return !(!t || !this.combobox) && (this.menu = null, t.removeEventListener("combobox-commit", this.oncommit), t.removeEventListener("mousedown", this.onmousedown), this.combobox.destroy(), this.combobox = null, t.remove(), !0)
                }
                onCommit({
                    target: t
                }) {
                    const e = t;
                    if (!(e instanceof HTMLElement)) return;
                    if (!this.combobox) return;
                    const n = this.match;
                    if (!n) return;
                    const r = this.input.value.substring(0, n.position - n.key.length),
                        o = this.input.value.substring(n.position + n.text.length),
                        i = {
                            item: e,
                            key: n.key,
                            value: null
                        };
                    if (!this.expander.dispatchEvent(new CustomEvent("text-expander-value", {
                            cancelable: !0,
                            detail: i
                        }))) return;
                    if (!i.value) return;
                    const s = i.value + " ";
                    this.input.value = r + s + o;
                    const a = r.length + s.length;
                    this.deactivate(), this.input.focus(), this.input.selectionStart = a, this.input.selectionEnd = a, this.lookBackIndex = a, this.match = null
                }
                onBlur() {
                    this.interactingWithList ? this.interactingWithList = !1 : this.deactivate()
                }
                onPaste() {
                    this.justPasted = !0
                }
                async onInput() {
                    if (this.justPasted) return void(this.justPasted = !1);
                    const t = this.findMatch();
                    if (t) {
                        this.match = t;
                        const e = await this.notifyProviders(t);
                        if (!this.match) return;
                        e ? this.activate(t, e) : this.deactivate()
                    } else this.match = null, this.deactivate()
                }
                findMatch() {
                    const t = this.input.selectionEnd || 0,
                        e = this.input.value;
                    t <= this.lookBackIndex && (this.lookBackIndex = t - 1);
                    for (const {
                            key: n,
                            multiWord: r
                        } of this.expander.keys) {
                        const o = ur(e, n, t, {
                            multiWord: r,
                            lookBackIndex: this.lookBackIndex,
                            lastMatchPosition: this.match ? this.match.position : null
                        });
                        if (o) return {
                            text: o.text,
                            key: n,
                            position: o.position
                        }
                    }
                }
                async notifyProviders(t) {
                    const e = [];
                    if (!this.expander.dispatchEvent(new CustomEvent("text-expander-change", {
                            cancelable: !0,
                            detail: {
                                provide: t => e.push(t),
                                text: t.text,
                                key: t.key
                            }
                        }))) return;
                    return (await Promise.all(e)).filter((t => t.matched)).map((t => t.fragment))[0]
                }
                onMousedown() {
                    this.interactingWithList = !0
                }
                onKeydown(t) {
                    "Escape" === t.key && (this.match = null, this.deactivate() && (this.lookBackIndex = this.input.selectionEnd || this.lookBackIndex, t.stopImmediatePropagation(), t.preventDefault()))
                }
            }
            class TextExpanderElement extends HTMLElement {
                get keys() {
                    const t = this.getAttribute("keys"),
                        e = t ? t.split(" ") : [],
                        n = this.getAttribute("multiword"),
                        r = n ? n.split(" ") : [],
                        o = 0 === r.length && this.hasAttribute("multiword");
                    return e.map((t => ({
                        key: t,
                        multiWord: o || r.includes(t)
                    })))
                }
                connectedCallback() {
                    const t = this.querySelector('input[type="text"], textarea');
                    if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
                    const e = new TextExpander(this, t);
                    pr.set(this, e)
                }
                disconnectedCallback() {
                    const t = pr.get(this);
                    t && (t.destroy(), pr.delete(this))
                }
                dismiss() {
                    const t = pr.get(this);
                    t && t.dismissMenu()
                }
            }
            window.customElements.get("text-expander") || (window.TextExpanderElement = TextExpanderElement, window.customElements.define("text-expander", TextExpanderElement));
            const gr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                vr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            function br(t) {
                return ("0" + t).slice(-2)
            }

            function wr(t, e) {
                const n = t.getDay(),
                    r = t.getDate(),
                    o = t.getMonth(),
                    i = t.getFullYear(),
                    s = t.getHours(),
                    a = t.getMinutes(),
                    c = t.getSeconds();
                return e.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g, (function(e) {
                    let l;
                    switch (e[1]) {
                        case "%":
                            return "%";
                        case "a":
                            return gr[n].slice(0, 3);
                        case "A":
                            return gr[n];
                        case "b":
                            return vr[o].slice(0, 3);
                        case "B":
                            return vr[o];
                        case "c":
                            return t.toString();
                        case "d":
                            return br(r);
                        case "e":
                            return String(r);
                        case "H":
                            return br(s);
                        case "I":
                            return br(wr(t, "%l"));
                        case "l":
                            return String(0 === s || 12 === s ? 12 : (s + 12) % 12);
                        case "m":
                            return br(o + 1);
                        case "M":
                            return br(a);
                        case "p":
                            return s > 11 ? "PM" : "AM";
                        case "P":
                            return s > 11 ? "pm" : "am";
                        case "S":
                            return br(c);
                        case "w":
                            return String(n);
                        case "y":
                            return br(i % 100);
                        case "Y":
                            return String(i);
                        case "Z":
                            return l = t.toString().match(/\((\w+)\)$/), l ? l[1] : "";
                        case "z":
                            return l = t.toString().match(/\w([+-]\d\d\d\d) /), l ? l[1] : ""
                    }
                    return ""
                }))
            }

            function Er(t) {
                let e;
                return function() {
                    if (e) return e;
                    if ("Intl" in window) try {
                        return e = new Intl.DateTimeFormat(void 0, t), e
                    } catch (fi) {
                        if (!(fi instanceof RangeError)) throw fi
                    }
                }
            }
            let yr = null;
            const xr = Er({
                day: "numeric",
                month: "short"
            });

            function kr() {
                if (null !== yr) return yr;
                const t = xr();
                if (t) {
                    const e = t.format(new Date(0));
                    return yr = !!e.match(/^\d/), yr
                }
                return !1
            }
            let Ar = null;
            const Tr = Er({
                day: "numeric",
                month: "short",
                year: "numeric"
            });

            function Lr(t) {
                const e = t.closest("[lang]");
                return e instanceof HTMLElement && e.lang ? e.lang : "default"
            }
            const Mr = new WeakMap;
            class ExtendedTimeElement extends HTMLElement {
                static get observedAttributes() {
                    return ["datetime", "day", "format", "lang", "hour", "minute", "month", "second", "title", "weekday", "year", "time-zone-name"]
                }
                connectedCallback() {
                    const t = this.getFormattedTitle();
                    t && !this.hasAttribute("title") && this.setAttribute("title", t);
                    const e = this.getFormattedDate();
                    e && (this.textContent = e)
                }
                attributeChangedCallback(t, e, n) {
                    const r = this.getFormattedTitle();
                    if ("datetime" === t) {
                        const t = Date.parse(n);
                        isNaN(t) ? Mr.delete(this) : Mr.set(this, new Date(t))
                    }
                    const o = this.getFormattedTitle(),
                        i = this.getAttribute("title");
                    "title" === t || !o || i && i !== r || this.setAttribute("title", o);
                    const s = this.getFormattedDate();
                    s && (this.textContent = s)
                }
                get date() {
                    return Mr.get(this)
                }
                getFormattedTitle() {
                    const t = this.date;
                    if (!t) return;
                    const e = Sr();
                    if (e) return e.format(t);
                    try {
                        return t.toLocaleString()
                    } catch (fi) {
                        if (fi instanceof RangeError) return t.toString();
                        throw fi
                    }
                }
                getFormattedDate() {}
            }
            const Sr = Er({
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    timeZoneName: "short"
                }),
                Cr = new WeakMap;
            class LocalTimeElement extends ExtendedTimeElement {
                attributeChangedCallback(t, e, n) {
                    "hour" !== t && "minute" !== t && "second" !== t && "time-zone-name" !== t || Cr.delete(this), super.attributeChangedCallback(t, e, n)
                }
                getFormattedDate() {
                    const t = this.date;
                    if (!t) return;
                    return `${function(t,e){const n={weekday:{short:"%a",long:"%A"},day:{numeric:"%e","2-digit":"%d"},month:{short:"%b",long:"%B"},year:{numeric:"%Y","2-digit":"%y"}};let r=kr()?"weekday day month year":"weekday month day, year";for(const o in n){const e=n[o][t.getAttribute(o)||""];r=r.replace(o,e||"")}return r=r.replace(/(\s,)|(,\s$)/,""),wr(e,r).replace(/\s+/," ").trim()}(this,t)||""} ${function(t,e){const n={},r=t.getAttribute("hour");"numeric"!==r&&"2-digit"!==r||(n.hour=r);const o=t.getAttribute("minute");"numeric"!==o&&"2-digit"!==o||(n.minute=o);const i=t.getAttribute("second");"numeric"!==i&&"2-digit"!==i||(n.second=i);const s=t.getAttribute("time-zone-name");"short"!==s&&"long"!==s||(n.timeZoneName=s);if(0===Object.keys(n).length)return;let a=Cr.get(t);a||(a=Er(n),Cr.set(t,a));const c=a();if(c)return c.format(e);return wr(e,n.second?"%H:%M:%S":"%H:%M")}(this,t)||""}`.trim()
                }
            }
            window.customElements.get("local-time") || (window.LocalTimeElement = LocalTimeElement, window.customElements.define("local-time", LocalTimeElement));
            class RelativeTime {
                constructor(t, e) {
                    this.date = t, this.locale = e
                }
                toString() {
                    const t = this.timeElapsed();
                    if (t) return t; {
                        const t = this.timeAhead();
                        return t || "on " + this.formatDate()
                    }
                }
                timeElapsed() {
                    const t = (new Date).getTime() - this.date.getTime(),
                        e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24);
                    return t >= 0 && o < 30 ? this.timeAgoFromMs(t) : null
                }
                timeAhead() {
                    const t = this.date.getTime() - (new Date).getTime(),
                        e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24);
                    return t >= 0 && o < 30 ? this.timeUntil() : null
                }
                timeAgo() {
                    const t = (new Date).getTime() - this.date.getTime();
                    return this.timeAgoFromMs(t)
                }
                timeAgoFromMs(t) {
                    const e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24),
                        i = Math.round(o / 30),
                        s = Math.round(i / 12);
                    return t < 0 || e < 10 ? Nr(this.locale, 0, "second") : e < 45 ? Nr(this.locale, -e, "second") : e < 90 || n < 45 ? Nr(this.locale, -n, "minute") : n < 90 || r < 24 ? Nr(this.locale, -r, "hour") : r < 36 || o < 30 ? Nr(this.locale, -o, "day") : i < 18 ? Nr(this.locale, -i, "month") : Nr(this.locale, -s, "year")
                }
                microTimeAgo() {
                    const t = (new Date).getTime() - this.date.getTime(),
                        e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24),
                        i = Math.round(o / 30),
                        s = Math.round(i / 12);
                    return n < 1 ? "1m" : n < 60 ? n + "m" : r < 24 ? r + "h" : o < 365 ? o + "d" : s + "y"
                }
                timeUntil() {
                    const t = this.date.getTime() - (new Date).getTime();
                    return this.timeUntilFromMs(t)
                }
                timeUntilFromMs(t) {
                    const e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24),
                        i = Math.round(o / 30),
                        s = Math.round(i / 12);
                    return i >= 18 || i >= 12 ? Nr(this.locale, s, "year") : o >= 45 || o >= 30 ? Nr(this.locale, i, "month") : r >= 36 || r >= 24 ? Nr(this.locale, o, "day") : n >= 90 || n >= 45 ? Nr(this.locale, r, "hour") : e >= 90 || e >= 45 ? Nr(this.locale, n, "minute") : Nr(this.locale, e >= 10 ? e : 0, "second")
                }
                microTimeUntil() {
                    const t = this.date.getTime() - (new Date).getTime(),
                        e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24),
                        i = Math.round(o / 30),
                        s = Math.round(i / 12);
                    return o >= 365 ? s + "y" : r >= 24 ? o + "d" : n >= 60 ? r + "h" : n > 1 ? n + "m" : "1m"
                }
                formatDate() {
                    let t = kr() ? "%e %b" : "%b %e";
                    var e;
                    return e = this.date, (new Date).getUTCFullYear() !== e.getUTCFullYear() && (t += function() {
                        if (null !== Ar) return Ar;
                        const t = Tr();
                        if (t) {
                            const e = t.format(new Date(0));
                            return Ar = !!e.match(/\d,/), Ar
                        }
                        return !0
                    }() ? ", %Y" : " %Y"), wr(this.date, t)
                }
                formatTime() {
                    const t = Ir();
                    return t ? t.format(this.date) : wr(this.date, "%l:%M%P")
                }
            }

            function Nr(t, e, n) {
                const r = function(t, e) {
                    if ("Intl" in window && "RelativeTimeFormat" in window.Intl) try {
                        return new Intl.RelativeTimeFormat(t, e)
                    } catch (fi) {
                        if (!(fi instanceof RangeError)) throw fi
                    }
                }(t, {
                    numeric: "auto"
                });
                return r ? r.format(e, n) : function(t, e) {
                    if (0 === t) switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                            return "this " + e;
                        case "day":
                            return "today";
                        case "hour":
                        case "minute":
                            return `in 0 ${e}s`;
                        case "second":
                            return "now"
                    } else if (1 === t) switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                            return "next " + e;
                        case "day":
                            return "tomorrow";
                        case "hour":
                        case "minute":
                        case "second":
                            return "in 1 " + e
                    } else if (-1 === t) switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                            return "last " + e;
                        case "day":
                            return "yesterday";
                        case "hour":
                        case "minute":
                        case "second":
                            return `1 ${e} ago`
                    } else if (t > 1) switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                        case "day":
                        case "hour":
                        case "minute":
                        case "second":
                            return `in ${t} ${e}s`
                    } else if (t < -1) switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                        case "day":
                        case "hour":
                        case "minute":
                        case "second":
                            return `${-t} ${e}s ago`
                    }
                    throw new RangeError(`Invalid unit argument for format() '${e}'`)
                }(e, n)
            }
            const Ir = Er({
                hour: "numeric",
                minute: "2-digit"
            });
            class RelativeTimeElement extends ExtendedTimeElement {
                getFormattedDate() {
                    const t = this.date;
                    if (t) return new RelativeTime(t, Lr(this)).toString()
                }
                connectedCallback() {
                    Dr.push(this), Hr || (Pr(), Hr = window.setInterval(Pr, 6e4)), super.connectedCallback()
                }
                disconnectedCallback() {
                    const t = Dr.indexOf(this); - 1 !== t && Dr.splice(t, 1), Dr.length || Hr && (clearInterval(Hr), Hr = null)
                }
            }
            t("R", RelativeTimeElement);
            const Dr = [];
            let Hr;

            function Pr() {
                let t, e, n;
                for (e = 0, n = Dr.length; e < n; e++) t = Dr[e], t.textContent = t.getFormattedDate() || ""
            }
            window.customElements.get("relative-time") || (window.RelativeTimeElement = RelativeTimeElement, window.customElements.define("relative-time", RelativeTimeElement));
            class TimeAgoElement extends RelativeTimeElement {
                getFormattedDate() {
                    const t = this.getAttribute("format"),
                        e = this.date;
                    if (e) return "micro" === t ? new RelativeTime(e, Lr(this)).microTimeAgo() : new RelativeTime(e, Lr(this)).timeAgo()
                }
            }
            window.customElements.get("time-ago") || (window.TimeAgoElement = TimeAgoElement, window.customElements.define("time-ago", TimeAgoElement));
            class TimeUntilElement extends RelativeTimeElement {
                getFormattedDate() {
                    const t = this.getAttribute("format"),
                        e = this.date;
                    if (e) return "micro" === t ? new RelativeTime(e, Lr(this)).microTimeUntil() : new RelativeTime(e, Lr(this)).timeUntil()
                }
            }
            window.customElements.get("time-until") || (window.TimeUntilElement = TimeUntilElement, window.customElements.define("time-until", TimeUntilElement));
            class AutocompleteEvent extends CustomEvent {
                constructor(t, e) {
                    super(t, e), this.relatedTarget = e.relatedTarget
                }
            }
            const Rr = new WeakMap;

            function Or(t, e) {
                const n = new XMLHttpRequest;
                return n.open("GET", e, !0), n.setRequestHeader("Accept", "text/fragment+html"),
                    function(t, e) {
                        const n = Rr.get(t);
                        n && n.abort();
                        Rr.set(t, e);
                        const r = () => Rr.delete(t),
                            o = function(t) {
                                return new Promise(((e, n) => {
                                    t.onload = function() {
                                        t.status >= 200 && t.status < 300 ? e(t.responseText) : n(new Error(t.responseText))
                                    }, t.onerror = n, t.send()
                                }))
                            }(e);
                        return o.then(r, r), o
                    }(t, n)
            }
            class Autocomplete {
                constructor(t, e, n) {
                    this.container = t, this.input = e, this.results = n, this.combobox = new Combobox(e, n), this.results.hidden = !0, this.input.setAttribute("autocomplete", "off"), this.input.setAttribute("spellcheck", "false"), this.interactingWithList = !1, this.onInputChange = function(t, e = 0) {
                        let n;
                        return function(...r) {
                            clearTimeout(n), n = window.setTimeout((() => {
                                clearTimeout(n), t(...r)
                            }), e)
                        }
                    }(this.onInputChange.bind(this), 300), this.onResultsMouseDown = this.onResultsMouseDown.bind(this), this.onInputBlur = this.onInputBlur.bind(this), this.onInputFocus = this.onInputFocus.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onCommit = this.onCommit.bind(this), this.input.addEventListener("keydown", this.onKeydown), this.input.addEventListener("focus", this.onInputFocus), this.input.addEventListener("blur", this.onInputBlur), this.input.addEventListener("input", this.onInputChange), this.results.addEventListener("mousedown", this.onResultsMouseDown), this.results.addEventListener("combobox-commit", this.onCommit)
                }
                destroy() {
                    this.input.removeEventListener("keydown", this.onKeydown), this.input.removeEventListener("focus", this.onInputFocus), this.input.removeEventListener("blur", this.onInputBlur), this.input.removeEventListener("input", this.onInputChange), this.results.removeEventListener("mousedown", this.onResultsMouseDown), this.results.removeEventListener("combobox-commit", this.onCommit)
                }
                onKeydown(t) {
                    if ("Escape" === t.key && this.container.open) this.container.open = !1, t.stopPropagation(), t.preventDefault();
                    else if (t.altKey && "ArrowUp" === t.key && this.container.open) this.container.open = !1, t.stopPropagation(), t.preventDefault();
                    else if (t.altKey && "ArrowDown" === t.key && !this.container.open) {
                        if (!this.input.value.trim()) return;
                        this.container.open = !0, t.stopPropagation(), t.preventDefault()
                    }
                }
                onInputFocus() {
                    this.fetchResults()
                }
                onInputBlur() {
                    this.interactingWithList ? this.interactingWithList = !1 : this.container.open = !1
                }
                onCommit({
                    target: t
                }) {
                    const e = t;
                    if (!(e instanceof HTMLElement)) return;
                    if (this.container.open = !1, e instanceof HTMLAnchorElement) return;
                    const n = e.getAttribute("data-autocomplete-value") || e.textContent;
                    this.container.value = n
                }
                onResultsMouseDown() {
                    this.interactingWithList = !0
                }
                onInputChange() {
                    this.container.removeAttribute("value"), this.fetchResults()
                }
                identifyOptions() {
                    let t = 0;
                    for (const e of this.results.querySelectorAll('[role="option"]:not([id])')) e.id = `${this.results.id}-option-${t++}`
                }
                fetchResults() {
                    const t = this.input.value.trim();
                    if (!t) return void(this.container.open = !1);
                    const e = this.container.src;
                    if (!e) return;
                    const n = new URL(e, window.location.href),
                        r = new URLSearchParams(n.search.slice(1));
                    r.append("q", t), n.search = r.toString(), this.container.dispatchEvent(new CustomEvent("loadstart")), Or(this.input, n.toString()).then((t => {
                        this.results.innerHTML = t, this.identifyOptions();
                        const e = !!this.results.querySelector('[role="option"]');
                        this.container.open = e, this.container.dispatchEvent(new CustomEvent("load")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    })).catch((() => {
                        this.container.dispatchEvent(new CustomEvent("error")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    }))
                }
                open() {
                    this.results.hidden && (this.combobox.start(), this.results.hidden = !1)
                }
                close() {
                    this.results.hidden || (this.combobox.stop(), this.results.hidden = !0)
                }
            }
            const _r = new WeakMap;
            class AutocompleteElement extends HTMLElement {
                constructor() {
                    super()
                }
                connectedCallback() {
                    const t = this.getAttribute("for");
                    if (!t) return;
                    const e = this.querySelector("input"),
                        n = document.getElementById(t);
                    e instanceof HTMLInputElement && n && (_r.set(this, new Autocomplete(this, e, n)), n.setAttribute("role", "listbox"))
                }
                disconnectedCallback() {
                    const t = _r.get(this);
                    t && (t.destroy(), _r.delete(this))
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(t) {
                    this.setAttribute("value", t)
                }
                get open() {
                    return this.hasAttribute("open")
                }
                set open(t) {
                    t ? this.setAttribute("open", "") : this.removeAttribute("open")
                }
                static get observedAttributes() {
                    return ["open", "value"]
                }
                attributeChangedCallback(t, e, n) {
                    if (e === n) return;
                    const r = _r.get(this);
                    if (r) switch (t) {
                        case "open":
                            null === n ? r.close() : r.open();
                            break;
                        case "value":
                            null !== n && (r.input.value = n), this.dispatchEvent(new AutocompleteEvent("auto-complete-change", {
                                bubbles: !0,
                                relatedTarget: r.input
                            }))
                    }
                }
            }

            function qr(t) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(t.textContent);
                const e = getSelection();
                if (null == e) return Promise.reject(new Error);
                e.removeAllRanges();
                const n = document.createRange();
                return n.selectNodeContents(t), e.addRange(n), document.execCommand("copy"), e.removeAllRanges(), Promise.resolve()
            }

            function Fr(t) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(t);
                const e = document.body;
                if (!e) return Promise.reject(new Error);
                const n = function(t) {
                    const e = document.createElement("pre");
                    return e.style.width = "1px", e.style.height = "1px", e.style.position = "fixed", e.style.top = "5px", e.textContent = t, e
                }(t);
                return e.appendChild(n), qr(n), e.removeChild(n), Promise.resolve()
            }

            function Br(t) {
                const e = t.getAttribute("for"),
                    n = t.getAttribute("value");

                function r() {
                    t.dispatchEvent(new CustomEvent("clipboard-copy", {
                        bubbles: !0
                    }))
                }
                if (n) Fr(n).then(r);
                else if (e) {
                    const n = "getRootNode" in Element.prototype ? t.getRootNode() : t.ownerDocument;
                    if (!(n instanceof Document || "ShadowRoot" in window && n instanceof ShadowRoot)) return;
                    const i = n.getElementById(e);
                    i && (o = i, o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement ? Fr(o.value) : o instanceof HTMLAnchorElement && o.hasAttribute("href") ? Fr(o.href) : qr(o)).then(r)
                }
                var o
            }

            function Wr(t) {
                const e = t.currentTarget;
                e instanceof HTMLElement && Br(e)
            }

            function $r(t) {
                if (" " === t.key || "Enter" === t.key) {
                    const e = t.currentTarget;
                    e instanceof HTMLElement && (t.preventDefault(), Br(e))
                }
            }

            function jr(t) {
                t.currentTarget.addEventListener("keydown", $r)
            }

            function Vr(t) {
                t.currentTarget.removeEventListener("keydown", $r)
            }
            window.customElements.get("auto-complete") || (window.AutocompleteElement = AutocompleteElement, window.customElements.define("auto-complete", AutocompleteElement)), t("A", AutocompleteElement);
            class ClipboardCopyElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("click", Wr), this.addEventListener("focus", jr), this.addEventListener("blur", Vr)
                }
                connectedCallback() {
                    this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), this.hasAttribute("role") || this.setAttribute("role", "button")
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(t) {
                    this.setAttribute("value", t)
                }
            }
            window.customElements.get("clipboard-copy") || (window.ClipboardCopyElement = ClipboardCopyElement, window.customElements.define("clipboard-copy", ClipboardCopyElement)), t("k", ClipboardCopyElement);
            class TabContainerElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("keydown", (t => {
                        const e = t.target;
                        if (!(e instanceof HTMLElement)) return;
                        if ("tab" !== e.getAttribute("role") && !e.closest('[role="tablist"]')) return;
                        const n = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]')),
                            r = n.indexOf(n.find((t => t.matches('[aria-selected="true"]'))));
                        if ("ArrowRight" === t.code) {
                            let t = r + 1;
                            t >= n.length && (t = 0), Ur(this, t)
                        } else if ("ArrowLeft" === t.code) {
                            let t = r - 1;
                            t < 0 && (t = n.length - 1), Ur(this, t)
                        } else "Home" === t.code ? (Ur(this, 0), t.preventDefault()) : "End" === t.code && (Ur(this, n.length - 1), t.preventDefault())
                    })), this.addEventListener("click", (t => {
                        const e = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]'));
                        if (!(t.target instanceof Element)) return;
                        const n = t.target.closest('[role="tab"]');
                        if (!n || !n.closest('[role="tablist"]')) return;
                        Ur(this, e.indexOf(n))
                    }))
                }
                connectedCallback() {
                    for (const t of this.querySelectorAll('[role="tablist"] [role="tab"]')) t.hasAttribute("aria-selected") || t.setAttribute("aria-selected", "false"), t.hasAttribute("tabindex") || ("true" === t.getAttribute("aria-selected") ? t.setAttribute("tabindex", "0") : t.setAttribute("tabindex", "-1"))
                }
            }

            function Ur(t, e) {
                const n = t.querySelectorAll('[role="tablist"] [role="tab"]'),
                    r = t.querySelectorAll('[role="tabpanel"]'),
                    o = n[e],
                    i = r[e];
                if (!!t.dispatchEvent(new CustomEvent("tab-container-change", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            relatedTarget: i
                        }
                    }))) {
                    for (const t of n) t.setAttribute("aria-selected", "false"), t.setAttribute("tabindex", "-1");
                    for (const t of r) t.hidden = !0, t.hasAttribute("tabindex") || t.hasAttribute("data-tab-container-no-tabstop") || t.setAttribute("tabindex", "0");
                    o.setAttribute("aria-selected", "true"), o.setAttribute("tabindex", "0"), o.focus(), i.hidden = !1, t.dispatchEvent(new CustomEvent("tab-container-changed", {
                        bubbles: !0,
                        detail: {
                            relatedTarget: i
                        }
                    }))
                }
            }

            function zr(t, e) {
                const n = t.value.substring(0, t.selectionStart || 0),
                    r = t.value.substring(t.selectionEnd || 0),
                    o = 0 === n.length || n.match(/\n$/) ? "" : "\n",
                    i = n + o + e;
                t.value = i + r, t.selectionStart = i.length, t.selectionEnd = t.selectionStart, t.dispatchEvent(new CustomEvent("change", {
                    bubbles: !0,
                    cancelable: !1
                })), t.focus()
            }

            function Kr(t) {
                const e = t.dataTransfer;
                if (!e) return;
                if (function(t) {
                        return Array.from(t.types).indexOf("Files") >= 0
                    }(e)) return;
                if (!Qr(e)) return;
                const n = Jr(e);
                if (!n.some(to)) return;
                t.stopPropagation(), t.preventDefault();
                const r = t.currentTarget;
                r instanceof HTMLTextAreaElement && zr(r, n.map(Gr).join(""))
            }

            function Yr(t) {
                const e = t.dataTransfer;
                e && (e.dropEffect = "link")
            }

            function Xr(t) {
                const e = t.clipboardData;
                if (!e || !Qr(e)) return;
                const n = Jr(e);
                if (!n.some(to)) return;
                t.stopPropagation(), t.preventDefault();
                const r = t.currentTarget;
                r instanceof HTMLTextAreaElement && zr(r, n.map(Gr).join(""))
            }

            function Gr(t) {
                return to(t) ? `\n![](${t})\n` : t
            }

            function Qr(t) {
                return Array.from(t.types).indexOf("text/uri-list") >= 0
            }

            function Jr(t) {
                return (t.getData("text/uri-list") || "").split("\r\n")
            }
            t("m", TabContainerElement), window.customElements.get("tab-container") || (window.TabContainerElement = TabContainerElement, window.customElements.define("tab-container", TabContainerElement)), window.IncludeFragmentElement.prototype.fetch = t => (t.headers.append("X-Requested-With", "XMLHttpRequest"), window.fetch(t));
            const Zr = /\.(gif|png|jpe?g)$/i;

            function to(t) {
                return Zr.test(t)
            }

            function eo(t) {
                const e = t.dataTransfer;
                if (!e) return;
                if (function(t) {
                        return Array.from(t.types).indexOf("Files") >= 0
                    }(e)) return;
                const n = so(e);
                if (!n) return;
                t.stopPropagation(), t.preventDefault();
                const r = t.currentTarget;
                r instanceof HTMLTextAreaElement && zr(r, n)
            }

            function no(t) {
                const e = t.dataTransfer;
                e && (e.dropEffect = "copy")
            }

            function ro(t) {
                if (!t.clipboardData) return;
                const e = so(t.clipboardData);
                if (!e) return;
                t.stopPropagation(), t.preventDefault();
                const n = t.currentTarget;
                n instanceof HTMLTextAreaElement && zr(n, e)
            }

            function oo(t) {
                return (t.textContent || "").trim().replace(/\|/g, "\\|").replace(/\n/g, " ") || " "
            }

            function io(t) {
                const e = Array.from(t.querySelectorAll("tr")),
                    n = e.shift();
                if (!n) return "";
                const r = (o = n, Array.from(o.querySelectorAll("td, th")).map(oo));
                var o;
                const i = r.map((() => "--"));
                return `\n${`${r.join(" | ")}\n${i.join(" | ")}\n`}${e.map((t=>Array.from(t.querySelectorAll("td")).map(oo).join(" | "))).join("\n")}\n\n`
            }

            function so(t) {
                if (-1 === Array.from(t.types).indexOf("text/html")) return;
                let e = t.getData("text/html");
                if (!/<table/i.test(e)) return;
                e = e.replace(/<meta.*?>/, "");
                const n = document.createElement("div");
                n.innerHTML = e;
                const r = n.querySelectorAll("table");
                for (const o of r) {
                    o.closest("[data-paste-markdown-skip]") && o.replaceWith(new Text(o.textContent || ""));
                    const t = io(o);
                    o.replaceWith(new Text(t))
                }
                return n.innerHTML
            }

            function ao(t) {
                const e = t.clipboardData;
                if (!e || ! function(t) {
                        return Array.from(t.types).indexOf("text/x-gfm") >= 0
                    }(e)) return;
                const n = t.currentTarget;
                if (!(n instanceof HTMLTextAreaElement)) return;
                const r = e.getData("text/x-gfm");
                r && (t.stopPropagation(), t.preventDefault(), zr(n, r))
            }

            function* co(t) {
                let e = "",
                    n = 0,
                    r = !1;
                for (let o = 0; o < t.length; o += 1) "{" !== t[o] || "{" !== t[o + 1] || "\\" === t[o - 1] || r ? "}" === t[o] && "}" === t[o + 1] && "\\" !== t[o - 1] && r && (r = !1, yield {
                    type: "part",
                    start: n,
                    end: o + 2,
                    value: e.slice(2).trim()
                }, e = "", o += 2, n = o) : (r = !0, e && (yield {
                    type: "string",
                    start: n,
                    end: o,
                    value: e
                }), e = "{{", n = o, o += 2), e += t[o] || "";
                e && (yield {
                    type: "string",
                    start: n,
                    end: t.length,
                    value: e
                })
            }
            t("l", (function(t) {
                return function(t) {
                        t.addEventListener("dragover", no), t.addEventListener("drop", eo), t.addEventListener("paste", ro)
                    }(t),
                    function(t) {
                        t.addEventListener("dragover", Yr), t.addEventListener("drop", Kr), t.addEventListener("paste", Xr)
                    }(t),
                    function(t) {
                        t.addEventListener("paste", ao)
                    }(t), {
                        unsubscribe: () => {
                            ! function(t) {
                                t.removeEventListener("dragover", no), t.removeEventListener("drop", eo), t.removeEventListener("paste", ro)
                            }(t),
                            function(t) {
                                t.removeEventListener("dragover", Yr), t.removeEventListener("drop", Kr), t.removeEventListener("paste", Xr)
                            }(t),
                            function(t) {
                                t.removeEventListener("paste", ao)
                            }(t)
                        }
                    }
            }));
            var lo, uo, ho = function(t, e, n) {
                    if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n), n
                },
                mo = function(t, e) {
                    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                };
            class AttributeTemplatePart {
                constructor(t, e) {
                    this.expression = e, lo.set(this, void 0), uo.set(this, ""), ho(this, lo, t), mo(this, lo).updateParent("")
                }
                get attributeName() {
                    return mo(this, lo).attr.name
                }
                get attributeNamespace() {
                    return mo(this, lo).attr.namespaceURI
                }
                get value() {
                    return mo(this, uo)
                }
                set value(t) {
                    ho(this, uo, t || ""), mo(this, lo).updateParent(t)
                }
                get element() {
                    return mo(this, lo).element
                }
                get booleanValue() {
                    return mo(this, lo).booleanValue
                }
                set booleanValue(t) {
                    mo(this, lo).booleanValue = t
                }
            }
            lo = new WeakMap, uo = new WeakMap;
            class AttributeValueSetter {
                constructor(t, e) {
                    this.element = t, this.attr = e, this.partList = []
                }
                get booleanValue() {
                    return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name)
                }
                set booleanValue(t) {
                    if (1 !== this.partList.length) throw new DOMException("Operation not supported", "NotSupportedError");
                    this.partList[0].value = t ? "" : null
                }
                append(t) {
                    this.partList.push(t)
                }
                updateParent(t) {
                    if (1 === this.partList.length && null === t) this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
                    else {
                        const t = this.partList.map((t => "string" == typeof t ? t : t.value)).join("");
                        this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, t)
                    }
                }
            }
            var fo, po = function(t, e, n) {
                    if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n), n
                },
                go = function(t, e) {
                    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                };
            class NodeTemplatePart {
                constructor(t, e) {
                    this.expression = e, fo.set(this, void 0), po(this, fo, [t]), t.textContent = ""
                }
                get value() {
                    return go(this, fo).map((t => t.textContent)).join("")
                }
                set value(t) {
                    this.replace(t)
                }
                get previousSibling() {
                    return go(this, fo)[0].previousSibling
                }
                get nextSibling() {
                    return go(this, fo)[go(this, fo).length - 1].nextSibling
                }
                replace(...t) {
                    const e = t.map((t => "string" == typeof t ? new Text(t) : t));
                    e.length || e.push(new Text("")), go(this, fo)[0].before(...e);
                    for (const n of go(this, fo)) n.remove();
                    po(this, fo, e)
                }
            }

            function vo(t) {
                return {
                    createCallback(t, e, n) {
                        this.processCallback(t, e, n)
                    },
                    processCallback(e, n, r) {
                        var o;
                        if ("object" == typeof r && r)
                            for (const i of n)
                                if (i.expression in r) {
                                    const e = null !== (o = r[i.expression]) && void 0 !== o ? o : "";
                                    t(i, e)
                                }
                    }
                }
            }

            function bo(t, e) {
                t.value = String(e)
            }

            function wo(t, e) {
                return "boolean" == typeof e && t instanceof AttributeTemplatePart && "boolean" == typeof t.element[t.attributeName] && (t.booleanValue = e, !0)
            }
            fo = new WeakMap;
            const Eo = vo(bo);
            t("a4", vo(((t, e) => {
                wo(t, e) || bo(t, e)
            })));
            var yo, xo, ko = function(t, e, n) {
                    if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n), n
                },
                Ao = function(t, e) {
                    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                };
            class TemplateInstance$1 extends DocumentFragment {
                constructor(t, e, n = Eo) {
                    var r, o;
                    super(), yo.set(this, void 0), xo.set(this, void 0), Object.getPrototypeOf(this !== TemplateInstance$1.prototype) && Object.setPrototypeOf(this, TemplateInstance$1.prototype), this.appendChild(t.content.cloneNode(!0)), ko(this, xo, Array.from(function*(t) {
                        const e = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, !1);
                        let n;
                        for (; n = e.nextNode();)
                            if (n instanceof Element && n.hasAttributes())
                                for (let t = 0; t < n.attributes.length; t += 1) {
                                    const e = n.attributes.item(t);
                                    if (e && e.value.includes("{{")) {
                                        const t = new AttributeValueSetter(n, e);
                                        for (const n of co(e.value))
                                            if ("string" === n.type) t.append(n.value);
                                            else {
                                                const e = new AttributeTemplatePart(t, n.value);
                                                t.append(e), yield e
                                            }
                                    }
                                } else if (n instanceof Text && n.textContent && n.textContent.includes("{{"))
                                    for (const t of co(n.textContent)) {
                                        t.end < n.textContent.length && n.splitText(t.end), "part" === t.type && (yield new NodeTemplatePart(n, t.value));
                                        break
                                    }
                    }(this))), ko(this, yo, n), null === (o = (r = Ao(this, yo)).createCallback) || void 0 === o || o.call(r, this, Ao(this, xo), e)
                }
                update(t) {
                    Ao(this, yo).processCallback(this, Ao(this, xo), t)
                }
            }
            t("q", TemplateInstance$1), yo = new WeakMap, xo = new WeakMap;
            var To = "<unknown>";
            var Lo = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                Mo = /\((\S*)(?::(\d+))(?::(\d+))\)/;
            var So = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
            var Co = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                No = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
            var Io = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
            var Do = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

            function Ho(t) {
                if (null === t.parentNode || !(t.parentNode instanceof HTMLElement)) throw new Error;
                const e = t.parentNode.children;
                for (let n = 0; n < e.length; ++n)
                    if (e[n] === t) return n;
                return 0
            }
            let Po = 0;

            function Ro(t) {
                return t.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            const Oo = {
                INPUT: t => t instanceof HTMLInputElement && t.checked ? "[x] " : "[ ] ",
                CODE(t) {
                    const e = t.textContent || "";
                    return t.parentNode && "PRE" === t.parentNode.nodeName ? (t.textContent = `\`\`\`\n${e.replace(/\n+$/,"")}\n\`\`\`\n\n`, t) : e.indexOf("`") >= 0 ? `\`\` ${e} \`\`` : `\`${e}\``
                },
                STRONG: t => `**${t.textContent||""}**`,
                EM: t => `_${t.textContent||""}_`,
                DEL: t => `~${t.textContent||""}~`,
                BLOCKQUOTE(t) {
                    const e = (t.textContent || "").trim().replace(/^/gm, "> "),
                        n = document.createElement("pre");
                    return n.textContent = e + "\n\n", n
                },
                A(t) {
                    const e = t.textContent || "",
                        n = t.getAttribute("href");
                    return /^https?:/.test(e) && e === n ? e : n ? `[${e}](${n})` : e
                },
                IMG(t) {
                    const e = t.getAttribute("alt") || "",
                        n = t.getAttribute("src");
                    if (!n) throw new Error;
                    const r = t.hasAttribute("width") ? ` width="${Ro(t.getAttribute("width")||"")}"` : "",
                        o = t.hasAttribute("height") ? ` height="${Ro(t.getAttribute("height")||"")}"` : "";
                    return r || o ? `<img alt="${Ro(e)}"${r}${o} src="${Ro(n)}">` : `![${e}](${n})`
                },
                LI(t) {
                    const e = t.parentNode;
                    if (!e) throw new Error;
                    let n = "";
                    if (! function(t) {
                            const e = t.childNodes[0],
                                n = t.childNodes[1];
                            return !!(e && t.childNodes.length < 3) && !("OL" !== e.nodeName && "UL" !== e.nodeName || n && (n.nodeType !== Node.TEXT_NODE || (n.textContent || "").trim()))
                        }(t))
                        if ("OL" === e.nodeName)
                            if (Po > 0 && !e.previousSibling) {
                                n = Ho(t) + Po + 1 + "\\. "
                            } else n = Ho(t) + 1 + ". ";
                    else n = "* ";
                    const r = n.replace(/\S/g, " "),
                        o = (t.textContent || "").trim().replace(/^/gm, r),
                        i = document.createElement("pre");
                    return i.textContent = o.replace(r, n), i
                },
                OL(t) {
                    const e = document.createElement("li");
                    return e.appendChild(document.createElement("br")), t.append(e), t
                },
                H1(t) {
                    const e = parseInt(t.nodeName.slice(1));
                    return t.prepend(Array(e + 1).join("#") + " "), t
                },
                UL: t => t
            };
            Oo.UL = Oo.OL;
            for (let t = 2; t <= 6; ++t) Oo["H" + t] = Oo.H1;

            function _o(t) {
                const e = document.createNodeIterator(t, NodeFilter.SHOW_ELEMENT, (function(t) {
                        return t.nodeName in Oo && ! function(t) {
                            if (t instanceof HTMLAnchorElement && 1 === t.childNodes.length) {
                                const e = t.childNodes[0];
                                if (e instanceof HTMLImageElement) return e.src === t.href
                            }
                            return !1
                        }(t) && (function(t) {
                            return "IMG" === t.nodeName || null != t.firstChild
                        }(t) || function(t) {
                            return "INPUT" === t.nodeName && t instanceof HTMLInputElement && "checkbox" === t.type
                        }(t)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                    })),
                    n = [];
                let r = e.nextNode();
                for (; r;) r instanceof HTMLElement && n.push(r), r = e.nextNode();
                n.reverse();
                for (const o of n) o.replaceWith(Oo[o.nodeName](o))
            }
            const qo = new WeakMap;
            let Fo = 0;
            const Bo = /\bEdge\//.test(navigator.userAgent);

            function Wo(t, e) {
                const n = 0 === Fo;
                Fo += qo.has(t) ? 0 : 1;
                const r = Object.assign({
                    quoteMarkdown: !1,
                    copyMarkdown: !1,
                    scopeSelector: ""
                }, e);
                qo.set(t, r), n && document.addEventListener("keydown", Uo), r.copyMarkdown && t.addEventListener("copy", $o)
            }

            function $o(t) {
                const e = t.target;
                if (!(e instanceof HTMLElement)) return;
                if (Xo(e)) return;
                const n = t.clipboardData;
                if (!n) return;
                const r = window.getSelection();
                if (!r) return;
                let o;
                try {
                    o = r.getRangeAt(0)
                } catch (a) {
                    return
                }
                const i = r.toString(),
                    s = Ko(i, o, !0);
                s && (n.setData("text/plain", i), n.setData("text/x-gfm", s.selectionText), t.preventDefault(), r.removeAllRanges(), r.addRange(o))
            }

            function jo(t) {
                let e = t;
                for (; e = e.parentElement;)
                    if (qo.has(e)) return e
            }

            function Vo(t) {
                for (const e of t.querySelectorAll("textarea"))
                    if (e instanceof HTMLTextAreaElement && Yo(e)) return e
            }

            function Uo(t) {
                if (function(t) {
                        return t.defaultPrevented || "r" !== t.key || t.metaKey || t.altKey || t.shiftKey || t.ctrlKey || t.target instanceof HTMLElement && Xo(t.target)
                    }(t)) return;
                const e = window.getSelection();
                if (!e) return;
                let n;
                try {
                    n = e.getRangeAt(0)
                } catch (r) {
                    return
                }
                zo(e.toString(), n) && t.preventDefault()
            }

            function zo(t, e) {
                const n = Ko(t, e, !1);
                if (!n) return !1;
                const {
                    container: r,
                    selectionText: o
                } = n;
                if (!r.dispatchEvent(new CustomEvent("quote-selection", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            range: e,
                            selectionText: o
                        }
                    }))) return !0;
                const i = Vo(r);
                return !!i && (function(t, e) {
                    let n = `> ${t.replace(/\n/g,"\n> ")}\n\n`;
                    e.value && (n = `${e.value}\n\n${n}`);
                    e.value = n, e.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    })), e.focus(), e.selectionStart = e.value.length, e.scrollTop = e.scrollHeight
                }(o, i), !0)
            }

            function Ko(t, e, n) {
                let r = t.trim();
                if (!r) return;
                let o = e.startContainer;
                if (!o) return;
                if (o.nodeType !== Node.ELEMENT_NODE && (o = o.parentNode), !(o instanceof Element)) return;
                const i = jo(o);
                if (!i) return;
                const s = qo.get(i);
                if (s) {
                    if (s.quoteMarkdown && !Bo) try {
                        const t = function(t, e) {
                            const n = t.startContainer;
                            if (!(n && n.parentNode && n.parentNode instanceof HTMLElement)) throw new Error("the range must start within an HTMLElement");
                            const r = n.parentNode;
                            let o = t.cloneContents();
                            if (e) {
                                const t = o.querySelector(e);
                                t && (o = document.createDocumentFragment(), o.appendChild(t))
                            }
                            Po = 0;
                            const i = r.closest("li");
                            if (r.closest("pre")) {
                                const t = document.createElement("pre");
                                t.appendChild(o), o = document.createDocumentFragment(), o.appendChild(t)
                            } else if (i && i.parentNode && ("OL" === i.parentNode.nodeName && (Po = Ho(i)), !o.querySelector("li"))) {
                                const t = document.createElement("li");
                                if (!i.parentNode) throw new Error;
                                const e = document.createElement(i.parentNode.nodeName);
                                t.appendChild(o), e.appendChild(t), o = document.createDocumentFragment(), o.appendChild(e)
                            }
                            return o
                        }(e, s.scopeSelector);
                        i.dispatchEvent(new CustomEvent("quote-selection-markdown", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                fragment: t,
                                range: e,
                                unwrap: n
                            }
                        })), _o(t), r = function(t) {
                            const e = document.body;
                            if (!e) return "";
                            const n = document.createElement("div");
                            n.appendChild(t), n.style.cssText = "position:absolute;left:-9999px;", e.appendChild(n);
                            let r = "";
                            try {
                                const t = window.getSelection();
                                if (t) {
                                    const e = document.createRange();
                                    e.selectNodeContents(n), t.removeAllRanges(), t.addRange(e), r = t.toString(), t.removeAllRanges(), e.detach()
                                }
                            } finally {
                                e.removeChild(n)
                            }
                            return r
                        }(t).replace(/^\n+/, "").replace(/\s+$/, "")
                    } catch (a) {
                        setTimeout((() => {
                            throw a
                        }))
                    }
                    return {
                        selectionText: r,
                        container: i
                    }
                }
            }

            function Yo(t) {
                return !(t.offsetWidth <= 0 && t.offsetHeight <= 0)
            }

            function Xo(t) {
                const e = t.nodeName.toLowerCase(),
                    n = (t.getAttribute("type") || "").toLowerCase();
                return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n || t.isContentEditable
            }
            let Go = null;
            t("L", (function(t) {
                var e = null,
                    n = !1,
                    r = void 0,
                    o = void 0,
                    i = void 0;

                function s(e) {
                    if (r !== e.clientX || o !== e.clientY) {
                        var a = t.style.height;
                        i && i !== a && (n = !0, t.style.maxHeight = "", t.removeEventListener("mousemove", s)), i = a
                    }
                    r = e.clientX, o = e.clientY
                }
                var a = t.ownerDocument,
                    c = a.documentElement;

                function l() {
                    if (!(n || t.value === e || t.offsetWidth <= 0 && t.offsetHeight <= 0)) {
                        var r = function() {
                                for (var e = 0, n = t; n !== a.body && null !== n;) e += n.offsetTop || 0, n = n.offsetParent;
                                var r = e - a.defaultView.pageYOffset;
                                return {
                                    top: r,
                                    bottom: c.clientHeight - (r + t.offsetHeight)
                                }
                            }(),
                            o = r.top,
                            s = r.bottom;
                        if (!(o < 0 || s < 0)) {
                            var l = Number(getComputedStyle(t).height.replace(/px/, "")) + s;
                            t.style.maxHeight = l - 100 + "px";
                            var u = t.parentElement;
                            if (u instanceof HTMLElement) {
                                var d = u.style.height;
                                u.style.height = getComputedStyle(u).height, t.style.height = "auto", t.style.height = t.scrollHeight + "px", u.style.height = d, i = t.style.height
                            }
                            e = t.value
                        }
                    }
                }

                function u() {
                    n = !1, t.style.height = "", t.style.maxHeight = ""
                }
                t.addEventListener("mousemove", s), t.addEventListener("input", l), t.addEventListener("change", l);
                var d = t.form;
                return d && d.addEventListener("reset", u), t.value && l(), {
                    unsubscribe: function() {
                        t.removeEventListener("mousemove", s), t.removeEventListener("input", l), t.removeEventListener("change", l), d && d.removeEventListener("reset", u)
                    }
                }
            }));
            class MultiMap {
                constructor(t) {
                    if (this.map = new Map, t)
                        for (const [e, n] of t) this.set(e, n)
                }
                get(t) {
                    const e = this.map.get(t);
                    return e || new Set
                }
                set(t, e) {
                    let n = this.map.get(t);
                    return n || (n = new Set, this.map.set(t, n)), n.add(e), this
                }
                has(t) {
                    return this.map.has(t)
                }
                delete(t, e) {
                    const n = this.map.get(t);
                    if (!n) return !1;
                    if (!e) return this.map.delete(t);
                    const r = n.delete(e);
                    return n.size || this.map.delete(t), r
                }
                drain(t) {
                    const e = [];
                    for (const n of this.keys()) this.delete(n, t) && !this.has(n) && e.push(n);
                    return e
                }
                keys() {
                    return this.map.keys()
                }
                values() {
                    return this.map.values()
                }
                entries() {
                    return this.map.entries()
                }[Symbol.iterator]() {
                    return this.entries()
                }
                clear() {
                    this.map.clear()
                }
                get size() {
                    return this.map.size
                }
            }
            async function Qo(t, e) {
                let n;
                const r = new Promise(((e, r) => {
                    n = self.setTimeout((() => r(new Error("timeout"))), t)
                }));
                if (!e) return r;
                try {
                    await Promise.race([r, Zo(e)])
                } catch (fi) {
                    throw self.clearTimeout(n), fi
                }
            }
            async function Jo(t, e) {
                let n;
                const r = new Promise((e => {
                    n = self.setTimeout(e, t)
                }));
                if (!e) return r;
                try {
                    await Promise.race([r, Zo(e)])
                } catch (fi) {
                    throw self.clearTimeout(n), fi
                }
            }

            function Zo(t) {
                return new Promise(((e, n) => {
                    const r = new Error("aborted");
                    r.name = "AbortError", t.aborted ? n(r) : t.addEventListener("abort", (() => n(r)))
                }))
            }
            async function ti(t, e, n) {
                const r = new WebSocket(t),
                    o = function(t) {
                        return new Promise(((e, n) => {
                            t.readyState === WebSocket.OPEN ? e(t) : (t.onerror = () => {
                                t.onerror = null, t.onopen = null, n(new Error("connect failed"))
                            }, t.onopen = () => {
                                t.onerror = null, t.onopen = null, e(t)
                            })
                        }))
                    }(r);
                try {
                    return await Promise.race([o, Qo(e, n)]), r
                } catch (fi) {
                    throw async function(t) {
                        try {
                            (await t).close()
                        } catch (e) {}
                    }(o), fi
                }
            }

            function ei(t, e) {
                return async function(t, e, n = 1 / 0, r) {
                    const o = r ? Zo(r) : null;
                    for (let s = 0; s < e; s++) try {
                        const e = o ? Promise.race([t(), o]) : t();
                        return await e
                    } catch (fi) {
                        if ("AbortError" === fi.name) throw fi;
                        if (s === e - 1) throw fi;
                        const o = 1e3 * Math.pow(2, s),
                            a = (i = .1 * o, Math.floor(Math.random() * Math.floor(i)));
                        await Jo(Math.min(n, o + a), r)
                    }
                    var i;
                    throw new Error("retry failed")
                }((() => ti(t, e.timeout, e.signal)), e.attempts, e.maxDelay, e.signal)
            }
            t("M", MultiMap);
            t("N", class StableSocket {
                constructor(t, e, n) {
                    this.socket = null, this.opening = null, this.url = t, this.delegate = e, this.policy = n
                }
                async open() {
                    if (this.opening || this.socket) return;
                    this.opening = new AbortController;
                    const t = Object.assign(Object.assign({}, this.policy), {
                        signal: this.opening.signal
                    });
                    try {
                        this.socket = await ei(this.url, t)
                    } catch (e) {
                        return void this.delegate.socketDidFinish(this)
                    } finally {
                        this.opening = null
                    }
                    this.socket.onclose = t => {
                        this.socket = null, this.delegate.socketDidClose(this, t.code, t.reason);
                        var e, n, r;
                        (this.delegate.socketShouldRetry ? !this.delegate.socketShouldRetry(this, t.code) : (e = t.code) === ni || e === ri) ? this.delegate.socketDidFinish(this): setTimeout((() => this.open()), (n = 100, r = 150, Math.random() * (r - n) + n))
                    }, this.socket.onmessage = t => {
                        this.delegate.socketDidReceiveMessage(this, t.data)
                    }, this.delegate.socketDidOpen(this)
                }
                close(t, e) {
                    this.opening ? (this.opening.abort(), this.opening = null) : this.socket && (this.socket.onclose = null, this.socket.close(t, e), this.socket = null, this.delegate.socketDidClose(this, t, e), this.delegate.socketDidFinish(this))
                }
                send(t) {
                    this.socket && this.socket.send(t)
                }
                isOpen() {
                    return !!this.socket
                }
            });
            const ni = 1008,
                ri = 1011,
                oi = new WeakSet;

            function ii(t, e) {
                return n = e, !!oi.has(n) && (e(t), !0);
                var n
            }
            const si = new WeakMap;
            class EventHandler {
                constructor(t, e) {
                    this.element = t, this.type = e, this.element.addEventListener(this.type, this), si.get(this.element).set(this.type, this)
                }
                set(t) {
                    "function" == typeof t ? this.handleEvent = t.bind(this.element) : "object" == typeof t && "function" == typeof t.handleEvent ? this.handleEvent = t.handleEvent.bind(t) : (this.element.removeEventListener(this.type, this), si.get(this.element).delete(this.type))
                }
                static
                for (t) {
                    si.has(t.element) || si.set(t.element, new Map);
                    const e = t.attributeName.slice(2),
                        n = si.get(t.element);
                    return n.has(e) ? n.get(e) : new EventHandler(t.element, e)
                }
            }

            function ai(t, e) {
                if (! function(t) {
                        return "object" == typeof t && Symbol.iterator in t
                    }(e)) return !1;
                if (t instanceof NodeTemplatePart) {
                    const n = [];
                    for (const t of e)
                        if (t instanceof TemplateResult$1) {
                            const e = document.createDocumentFragment();
                            t.renderInto(e), n.push(...e.childNodes)
                        } else t instanceof DocumentFragment ? n.push(...t.childNodes) : n.push(String(t));
                    return n.length && t.replace(...n), !0
                }
                return t.value = Array.from(e).join(" "), !0
            }
            const ci = new WeakMap,
                li = new WeakMap,
                ui = new WeakMap;
            class TemplateResult$1 {
                constructor(t, e, n) {
                    this.strings = t, this.values = e, this.processor = n
                }
                get template() {
                    if (ci.has(this.strings)) return ci.get(this.strings); {
                        const t = document.createElement("template"),
                            e = this.strings.length - 1;
                        return t.innerHTML = this.strings.reduce(((t, n, r) => t + n + (r < e ? `{{ ${r} }}` : "")), ""), ci.set(this.strings, t), t
                    }
                }
                renderInto(t) {
                    const e = this.template;
                    if (li.get(t) !== e) {
                        li.set(t, e);
                        const n = new TemplateInstance$1(e, this.values, this.processor);
                        return ui.set(t, n), void(t instanceof NodeTemplatePart ? t.replace(...n.children) : t.appendChild(n))
                    }
                    ui.get(t).update(this.values)
                }
            }
            const di = vo((function(t, e) {
                ii(t, e) || wo(t, e) || function(t, e) {
                    return !!(t instanceof AttributeTemplatePart && t.attributeName.startsWith("on")) && (EventHandler.for(t).set(e), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), !0)
                }(t, e) || function(t, e) {
                    return e instanceof TemplateResult$1 && t instanceof NodeTemplatePart && (e.renderInto(t), !0)
                }(t, e) || function(t, e) {
                    return e instanceof DocumentFragment && t instanceof NodeTemplatePart && (e.childNodes.length && t.replace(...e.childNodes), !0)
                }(t, e) || ai(t, e) || bo(t, e)
            }));
            t("Q", (hi = t => e => {
                if (!(e instanceof NodeTemplatePart)) return;
                const n = document.createElement("template");
                n.innerHTML = t;
                const r = document.importNode(n.content, !0);
                e.replace(...r.childNodes)
            }, (...t) => {
                const e = hi(...t);
                return oi.add(e), e
            }));
            var hi, mi, fi, pi, gi, vi = function(t, e) {
                    return {
                        name: t,
                        value: void 0 === e ? -1 : e,
                        delta: 0,
                        entries: [],
                        id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                    }
                },
                bi = function(t, e) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                            var n = new PerformanceObserver((function(t) {
                                return t.getEntries().map(e)
                            }));
                            return n.observe({
                                type: t,
                                buffered: !0
                            }), n
                        }
                    } catch (t) {}
                },
                wi = !1,
                Ei = function(t, e) {
                    wi || "undefined" != typeof InstallTrigger || (addEventListener("beforeunload", (function() {})), wi = !0), addEventListener("visibilitychange", (function n(r) {
                        "hidden" === document.visibilityState && (t(r), e && removeEventListener("visibilitychange", n, !0))
                    }), !0)
                },
                yi = function(t) {
                    addEventListener("pageshow", (function(e) {
                        e.persisted && t(e)
                    }), !0)
                },
                xi = "function" == typeof WeakSet ? new WeakSet : new Set,
                ki = function(t, e, n) {
                    var r;
                    return function() {
                        e.value >= 0 && (n || xi.has(e) || "hidden" === document.visibilityState) && (e.delta = e.value - (r || 0), (e.delta || void 0 === r) && (r = e.value, t(e)))
                    }
                },
                Ai = (t("U", (function(t, e) {
                    var n, r = vi("CLS", 0),
                        o = function(t) {
                            t.hadRecentInput || (r.value += t.value, r.entries.push(t), n())
                        },
                        i = bi("layout-shift", o);
                    i && (n = ki(t, r, e), Ei((function() {
                        i.takeRecords().map(o), n()
                    })), yi((function() {
                        r = vi("CLS", 0), n = ki(t, r, e)
                    })))
                })), -1),
                Ti = function() {
                    return "hidden" === document.visibilityState ? 0 : 1 / 0
                },
                Li = function() {
                    Ei((function(t) {
                        var e = t.timeStamp;
                        Ai = e
                    }), !0)
                },
                Mi = function() {
                    return Ai < 0 && (Ai = Ti(), Li(), yi((function() {
                        setTimeout((function() {
                            Ai = Ti(), Li()
                        }), 0)
                    }))), {
                        get timeStamp() {
                            return Ai
                        }
                    }
                },
                Si = (t("V", (function(t, e) {
                    var n, r = Mi(),
                        o = vi("FCP"),
                        i = bi("paint", (function(t) {
                            "first-contentful-paint" === t.name && (i && i.disconnect(), t.startTime < r.timeStamp && (o.value = t.startTime, o.entries.push(t), xi.add(o), n()))
                        }));
                    i && (n = ki(t, o, e), yi((function(r) {
                        o = vi("FCP"), n = ki(t, o, e), requestAnimationFrame((function() {
                            requestAnimationFrame((function() {
                                o.value = performance.now() - r.timeStamp, xi.add(o), n()
                            }))
                        }))
                    })))
                })), {
                    passive: !0,
                    capture: !0
                }),
                Ci = new Date,
                Ni = function(t, e) {
                    mi || (mi = e, fi = t, pi = new Date, Hi(removeEventListener), Ii())
                },
                Ii = function() {
                    if (fi >= 0 && fi < pi - Ci) {
                        var t = {
                            entryType: "first-input",
                            name: mi.type,
                            target: mi.target,
                            cancelable: mi.cancelable,
                            startTime: mi.timeStamp,
                            processingStart: mi.timeStamp + fi
                        };
                        gi.forEach((function(e) {
                            e(t)
                        })), gi = []
                    }
                },
                Di = function(t) {
                    if (t.cancelable) {
                        var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                        "pointerdown" == t.type ? function(t, e) {
                            var n = function() {
                                    Ni(t, e), o()
                                },
                                r = function() {
                                    o()
                                },
                                o = function() {
                                    removeEventListener("pointerup", n, Si), removeEventListener("pointercancel", r, Si)
                                };
                            addEventListener("pointerup", n, Si), addEventListener("pointercancel", r, Si)
                        }(e, t) : Ni(e, t)
                    }
                },
                Hi = function(t) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(e) {
                        return t(e, Di, Si)
                    }))
                };
            t("W", (function(t, e) {
                var n, r = Mi(),
                    o = vi("FID"),
                    i = function(t) {
                        t.startTime < r.timeStamp && (o.value = t.processingStart - t.startTime, o.entries.push(t), xi.add(o), n())
                    },
                    s = bi("first-input", i);
                n = ki(t, o, e), s && Ei((function() {
                    s.takeRecords().map(i), s.disconnect()
                }), !0), s && yi((function() {
                    var r;
                    o = vi("FID"), n = ki(t, o, e), gi = [], fi = -1, mi = null, Hi(addEventListener), r = i, gi.push(r), Ii()
                }))
            })), t("X", (function(t, e) {
                var n, r = Mi(),
                    o = vi("LCP"),
                    i = function(t) {
                        var e = t.startTime;
                        e < r.timeStamp && (o.value = e, o.entries.push(t)), n()
                    },
                    s = bi("largest-contentful-paint", i);
                if (s) {
                    n = ki(t, o, e);
                    var a = function() {
                        xi.has(o) || (s.takeRecords().map(i), s.disconnect(), xi.add(o), n())
                    };
                    ["keydown", "click"].forEach((function(t) {
                        addEventListener(t, a, {
                            once: !0,
                            capture: !0
                        })
                    })), Ei(a, !0), yi((function(r) {
                        o = vi("LCP"), n = ki(t, o, e), requestAnimationFrame((function() {
                            requestAnimationFrame((function() {
                                o.value = performance.now() - r.timeStamp, xi.add(o), n()
                            }))
                        }))
                    }))
                }
            })), t("Y", (function(t) {
                var e, n = vi("TTFB");
                e = function() {
                    try {
                        var e = performance.getEntriesByType("navigation")[0] || function() {
                            var t = performance.timing,
                                e = {
                                    entryType: "navigation",
                                    startTime: 0
                                };
                            for (var n in t) "navigationStart" !== n && "toJSON" !== n && (e[n] = Math.max(t[n] - t.navigationStart, 0));
                            return e
                        }();
                        n.value = n.delta = e.responseStart, n.entries = [e], t(n)
                    } catch (t) {}
                }, "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("pageshow", e)
            })), t("a1", "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {});
            const Pi = new Map;

            function Ri(t) {
                for (const e of Pi.keys())
                    if (customElements.get(e) || t.querySelector(e) || t.matches(e)) {
                        for (const t of Pi.get(e) || []) t();
                        Pi.delete(e)
                    }
            }
            let Oi = !1;

            function _i() {
                Oi = !0, Ri(document.body);
                new MutationObserver((t => {
                    if (Pi.size)
                        for (const e of t)
                            for (const t of e.addedNodes) t instanceof Element && Ri(t)
                })).observe(document, {
                    subtree: !0,
                    childList: !0
                })
            }
            t("a7", K((t => e => {
                if (void 0 === t && e instanceof AttributePart) {
                    if (t !== e.value) {
                        const t = e.committer.name;
                        e.committer.element.removeAttribute(t)
                    }
                } else e.setValue(t)
            })));
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const qi = (t, e) => {
                    const n = t.startNode.parentNode,
                        r = void 0 === e ? t.endNode : e.startNode,
                        o = n.insertBefore(it(), r);
                    n.insertBefore(it(), r);
                    const i = new NodePart(t.options);
                    return i.insertAfterNode(o), i
                },
                Fi = (t, e) => (t.setValue(e), t.commit(), t),
                Bi = (t, e, n) => {
                    const r = t.startNode.parentNode,
                        o = n ? n.startNode : t.endNode,
                        i = e.endNode.nextSibling;
                    i !== o && ((t, e, n = null, r = null) => {
                        for (; e !== n;) {
                            const n = e.nextSibling;
                            t.insertBefore(e, r), e = n
                        }
                    })(r, e.startNode, i, o)
                },
                Wi = t => {
                    G(t.startNode.parentNode, t.startNode, t.endNode.nextSibling)
                },
                $i = (t, e, n) => {
                    const r = new Map;
                    for (let o = e; o <= n; o++) r.set(t[o], o);
                    return r
                },
                ji = new WeakMap,
                Vi = new WeakMap;
            t("a8", K(((t, e, n) => {
                let r;
                return void 0 === n ? n = e : void 0 !== e && (r = e), e => {
                    if (!(e instanceof NodePart)) throw new Error("repeat can only be used in text bindings");
                    const o = ji.get(e) || [],
                        i = Vi.get(e) || [],
                        s = [],
                        a = [],
                        c = [];
                    let l, u, d = 0;
                    for (const g of t) c[d] = r ? r(g, d) : d, a[d] = n(g, d), d++;
                    let h = 0,
                        m = o.length - 1,
                        f = 0,
                        p = a.length - 1;
                    for (; h <= m && f <= p;)
                        if (null === o[h]) h++;
                        else if (null === o[m]) m--;
                    else if (i[h] === c[f]) s[f] = Fi(o[h], a[f]), h++, f++;
                    else if (i[m] === c[p]) s[p] = Fi(o[m], a[p]), m--, p--;
                    else if (i[h] === c[p]) s[p] = Fi(o[h], a[p]), Bi(e, o[h], s[p + 1]), h++, p--;
                    else if (i[m] === c[f]) s[f] = Fi(o[m], a[f]), Bi(e, o[m], o[h]), m--, f++;
                    else if (void 0 === l && (l = $i(c, f, p), u = $i(i, h, m)), l.has(i[h]))
                        if (l.has(i[m])) {
                            const t = u.get(c[f]),
                                n = void 0 !== t ? o[t] : null;
                            if (null === n) {
                                const t = qi(e, o[h]);
                                Fi(t, a[f]), s[f] = t
                            } else s[f] = Fi(n, a[f]), Bi(e, n, o[h]), o[t] = null;
                            f++
                        } else Wi(o[m]), m--;
                    else Wi(o[h]), h++;
                    for (; f <= p;) {
                        const t = qi(e, s[p + 1]);
                        Fi(t, a[f]), s[f++] = t
                    }
                    for (; h <= m;) {
                        const t = o[h++];
                        null !== t && Wi(t)
                    }
                    ji.set(e, s), Vi.set(e, c)
                }
            })))
        }
    }
}));
//# sourceMappingURL=chunk-vendor-978cc94d.js.map