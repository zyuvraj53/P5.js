System.register(["./chunk-vendor.js", "./chunk-frameworks.js", "./chunk-ref-selector.js"], (function() {
    "use strict";
    var e, t, n, o, s, r, c, i, l, a, u, d, m, g, f, h, p, b, j, y, S, v, q, A, L, w, T, E, x, k, C, _, I, M, H;
    return {
        setters: [function(i) {
            e = i.a, t = i.o, n = i.r, o = i.I, s = i.f, r = i._, c = i.c
        }, function(e) {
            i = e.t, l = e.aH, a = e.B, u = e.b, d = e.ax, m = e.j, g = e.R, f = e.c, h = e.aI, p = e.q, b = e.aJ, j = e.aK, y = e.aL, S = e.aM, v = e.aw, q = e.aN, A = e.e, L = e.a9, w = e.x, T = e.ap, E = e.an, x = e.s, k = e.u, C = e.a6, _ = e.a1, I = e.aO, M = e.aP, H = e.aQ
        }, function() {}],
        execute: function() {
            const R = () => {
                    const e = document.querySelector("#js-spoof-warning-placeholder"),
                        t = document.querySelector("#spoof-warning");
                    if (e && t) {
                        document.querySelector(".commit-title").classList.add("pb-1"), t.hidden = !1, t.removeAttribute("aria-hidden")
                    }
                },
                P = document.querySelector("#async-branches-list");

            function D(e, t) {
                return Array.from(document.querySelectorAll(".js-details-container.open.Details--on")).filter((n => n.getAttribute(e) === t))
            }

            function $(e, t, n, o, s, r) {
                const c = document.querySelector(".js-file-filter"),
                    a = new URL(window.location.href, window.location.origin);
                if (!e && !o) {
                    if (t || r) return;
                    return a.search = "", i(l(), "", a.toString())
                }
                const u = c.querySelector(".js-file-filter-form"),
                    d = new FormData(u),
                    m = n.filter((e => !d.getAll("file-filters[]").includes(e))),
                    g = s.filter((e => !d.getAll("owned-by[]").includes(e)));
                for (const i of m) d.append("file-filters[]", i);
                for (const i of g) d.append("owned-by[]", i);
                const f = new URLSearchParams(d);
                f.has("file-filters[]") && "" !== f.toString() || f.set("file-filters[]", ""), t && f.set("w", "1"), r && f.set("manifests", "true"), a.search = f.toString(), i(l(), "", a.toString())
            }

            function N(e) {
                var t;
                t = e, document.querySelector(".js-file-filter-text").classList.toggle("color-text-link", t),
                    function(e) {
                        const t = document.querySelector(".js-reset-filters"),
                            n = document.querySelector(".js-commits-filtered");
                        null == t || n || (t.hidden = !e)
                    }(e),
                    function() {
                        const e = U(),
                            t = G();
                        for (const s of e)
                            if (t) {
                                const e = "0" === s.getAttribute("data-non-deleted-files-count");
                                s.disabled = e
                            } else s.disabled = !1;
                        const n = document.querySelector(".js-deleted-files-container"),
                            o = W();
                        if (o && n) {
                            const t = function(e) {
                                const t = e.find((e => e.checked && "0" !== e.getAttribute("data-deleted-files-count")));
                                return Boolean(t)
                            }(Array.from(e));
                            n.classList.toggle("color-text-secondary", !t), o.disabled = !t
                        }
                    }(),
                    function() {
                        const e = Q(),
                            t = document.querySelector(".js-file-filter-select-all-container"),
                            n = e ? "data-select-all-markup" : "data-all-selected-markup",
                            o = t.getAttribute(n);
                        t.textContent = o, t.classList.toggle("color-text-secondary", !e), t.classList.toggle("color-text-link", e)
                    }(),
                    function() {
                        const e = document.querySelector(".js-deleted-files-container");
                        if (e) {
                            const t = G() ? "data-show-deleted-markup" : "data-hide-deleted-markup",
                                n = e.getAttribute(t);
                            e.textContent = n
                        }
                    }(),
                    function() {
                        const e = document.querySelectorAll(".js-file-type-count");
                        for (const t of e) {
                            const e = G() ? "data-non-deleted-file-count-markup" : "data-all-file-count-markup",
                                n = t.getAttribute(e);
                            n && (t.textContent = n)
                        }
                    }(), $(e, J(), F(), V(), K(), Y())
            }

            function B(e) {
                ! function() {
                    const e = W(),
                        t = F(),
                        n = document.querySelectorAll(".js-file"),
                        o = K(),
                        s = O(),
                        r = z();
                    for (const c of n) {
                        let n = !0;
                        const i = c.getAttribute("data-file-type");
                        if (i && (n = t.includes(i)), s && n) {
                            c.hasAttribute("data-file-user-viewed") && (n = !s.checked)
                        }
                        if (o.length > 0 && n) {
                            n = (c.getAttribute("data-codeowners") || "").split(",").filter((e => o.includes(e))).length > 0
                        }
                        if (e && e.checked && n) {
                            "true" === c.getAttribute("data-file-deleted") && (n = !1)
                        }
                        if (r && r.checked && n) {
                            c.hasAttribute("data-file-manifest") || (n = !1)
                        }
                        Z(c, n)
                    }
                }(), N(e)
            }

            function F() {
                return Array.from(U()).filter((e => e.checked)).map((e => e.value))
            }

            function U() {
                return document.querySelectorAll(".js-diff-file-type-option")
            }

            function W() {
                const e = document.querySelector(".js-deleted-files-toggle");
                if (e instanceof HTMLInputElement) return e
            }

            function O() {
                const e = document.querySelector(".js-viewed-files-toggle");
                if (e instanceof HTMLInputElement) return e
            }

            function z() {
                return document.querySelector(".js-manifests-option")
            }

            function X() {
                return Q() || G() || V()
            }

            function V() {
                return K().length > 0
            }

            function K() {
                return Array.from(document.querySelectorAll(".js-diff-owner-option")).filter((e => e.checked)).map((e => e.value))
            }

            function Q() {
                return F().length !== U().length
            }

            function J() {
                return new URLSearchParams(window.location.search).has("w")
            }

            function Y() {
                const e = z();
                return !!e && e.checked
            }

            function G() {
                const e = W();
                return !!e && e.checked
            }

            function Z(e, t) {
                const n = e.closest(".js-file.js-details-container");
                n.classList.toggle("open", t), n.classList.toggle("Details--on", t)
            }

            function ee(e) {
                const t = U();
                for (const n of t) n.checked = e
            }

            function te({
                currentTarget: e
            }) {
                const t = e,
                    n = t.hasAttribute("open");
                t.closest(".js-file-header").classList.toggle("has-open-dropdown", n)
            }
            P && P.addEventListener("include-fragment-replaced", R), e("click", ".js-conversation-menu-button", (async function(e) {
                const t = e.currentTarget.closest(".select-menu").querySelector("details-menu");
                if (!t) return;
                const n = t.getAttribute("src") + "?instrument=1",
                    o = await fetch(n);
                o.ok && (t.innerHTML = await o.text())
            })), e("click", ".js-resolved-conversations", (async function(e) {
                const t = e.currentTarget.querySelector(".dropdown-caret"),
                    n = e.currentTarget.querySelector(".select-menu-header");
                ! function(e) {
                    "" === e.style.transform ? e.style.transform = "rotate(180deg)" : e.style.transform = ""
                }(t), n.classList.toggle("border-bottom-0")
            })), e("change", ".js-diff-file-type-option", (function() {
                B(X())
            })), e("change", ".js-diff-owner-option", (function() {
                B(V())
            })), e("change", ".js-manifests-option", (function() {
                B(Y())
            })), e("click", ".js-file-filter-select-all", (function() {
                Q() && (ee(!0), B(X()))
            })), e("change", ".js-deleted-files-toggle", (function() {
                B(X())
            })), e("change", ".js-viewed-files-toggle", (function() {
                B(X())
            })), t(".js-file-filter", (function() {
                X() ? N(!0) : $(!1, J(), F(), V(), K(), Y())
            })), e("click", ".js-file-header .js-details-target", (function({
                currentTarget: e
            }) {
                if (!document.querySelector(".js-file-filter")) return;
                const t = e.closest(".js-details-container"),
                    n = function(e) {
                        const t = e.getAttribute("data-file-type"),
                            n = D("data-file-type", t),
                            o = Array.from(document.querySelectorAll(".js-diff-file-type-option")).find((e => e.value === t));
                        if (!o) return !1;
                        const s = o.checked !== n.length > 0;
                        return s && (o.checked = n.length > 0), s
                    }(t),
                    o = W();
                let s = !1;
                o && (s = function(e, t) {
                    let n = !1;
                    if ("true" === e.getAttribute("data-file-deleted")) {
                        const e = D("data-file-deleted", "true");
                        n = t.checked !== (0 === e.length), n && (t.checked = 0 === e.length)
                    }
                    return n
                }(t, o));
                const r = O();
                let c = !1;
                r && (c = function(e, t) {
                    let n = !1;
                    if ("true" === e.getAttribute("data-file-user-viewed")) {
                        const e = D("data-file-user-viewed", "true");
                        n = t.checked !== (0 === e.length), n && (t.checked = 0 === e.length)
                    }
                    return n
                }(t, r)), (n || s || c) && N(X())
            })), e("details:toggled-group", ".js-file.js-details-container", (function(e) {
                e.target === e.currentTarget && function(e) {
                    if (!document.querySelector(".js-file-filter")) return;
                    ee(e);
                    const t = W();
                    t && (t.checked = !e), N(X())
                }(e.detail.open)
            })), e("details:toggled", ".js-file.js-details-container", (function(e) {
                if (e.target !== e.currentTarget) return;
                const t = e.currentTarget;
                t.getBoundingClientRect().top < 0 && d(t)
            })), a((() => {
                const e = window.location.hash.slice(1);
                if (!e) return;
                const t = document.getElementsByName(e)[0];
                if (!t) return;
                const n = t.nextElementSibling;
                n && n.matches(".js-file.js-details-container") && (n.classList.add("open"), n.classList.add("Details--on"))
            })), t(".js-file-header-dropdown", {
                subscribe: e => u(e, "toggle", te)
            });
            const ne = "```suggestion",
                oe = "```",
                se = new RegExp("```suggestion(?:.*)\n", "i"),
                re = new RegExp("```(\n|$)");

            function ce(e, t) {
                const n = e.slice(0, t).split("\n");
                return e.split("\n")[n.length - 1]
            }

            function ie(e) {
                const t = /^(\s+)/.exec(e);
                return t && t[0] || ""
            }

            function le(e, t, n = 0) {
                const o = t.substring(n, t.length),
                    s = e.exec(o);
                return s ? s.index + n : -1
            }

            function ae(e, t) {
                const n = [];
                let o = 0,
                    s = -1;
                for (;
                    (s = le(se, e, o)) > -1;) {
                    o = s + ne.length;
                    const t = le(re, e, o);
                    if (-1 === t) return !1;
                    o = t + oe.length, n.push([s, t])
                }
                return n.some((e => t > e[0] && t < e[1]))
            }

            function ue(e, t) {
                const n = function(e) {
                        let t = "```suggestion\n";
                        return t += e + "\n", t += oe, t
                    }(e),
                    o = t.selectionStart,
                    s = t.value,
                    r = le(/\n/, s, o),
                    c = "" === s.trim(),
                    i = ce(s, o),
                    l = "" === i.trim(),
                    a = "\n```".length;
                let u = s,
                    d = 0;
                if (c) u = n, d = u.length - a;
                else if (-1 === r) l ? (u = s + n, d = u.length - a) : (u = [s, n].join("\n"), d = u.length - a);
                else if (l) {
                    const e = o - ie(i).length,
                        t = s.substring(0, e),
                        c = s.substring(r, s.length);
                    u = [t, n, c].join(""), d = u.length - c.length - a
                } else if (ae(s, o)) {
                    const e = le(/```/, s, o) + 3,
                        t = s.substring(0, e),
                        r = s.substring(e, s.length);
                    u = [t, "\n", n, r].join(""), d = u.length - r.length - a
                } else {
                    const e = s.substring(0, r),
                        t = s.substring(r, s.length);
                    u = [e, "\n", n, t].join(""), d = u.length - t.length - a
                }
                m(t, u), t.focus(), t.setSelectionRange(d, d)
            }
            const de = ".js-add-to-batch-enabled",
                me = ".js-unchanged-suggestion",
                ge = ".js-closed-pull",
                fe = ".js-viewing-subset-changes",
                he = ".js-validation-on-left-blob",
                pe = ".js-validation-on-right-blob",
                be = ".js-outdated-comment",
                je = ".js-resolved-thread",
                ye = ".js-pending-review";

            function Se(e, t) {
                const n = document.querySelectorAll(".js-apply-suggestion-button"),
                    o = e.querySelector(".js-disabled-apply-suggestion-button");
                for (const s of n) {
                    const e = o.cloneNode(!0);
                    qe(e, t), s.closest("details").replaceWith(e)
                }
            }

            function ve(e) {
                const t = document.querySelector(".js-batched-suggested-changes-container");
                t && t.classList.add("d-none");
                for (const n of document.querySelectorAll(".js-apply-single-suggestion")) n.classList.remove("d-none"), n.disabled = !0, n.setAttribute("aria-label", e);
                for (const n of document.querySelectorAll(".js-batched-suggested-changes-add")) n.classList.remove("d-none"), n.disabled = !0, n.setAttribute("aria-label", e);
                for (const n of document.querySelectorAll(".js-batched-suggested-changes-remove")) n.classList.add("d-none");
                for (const n of document.querySelectorAll(".js-focus-commit-suggestions-form-button")) n.classList.add("d-none");
                for (const n of document.querySelectorAll(".pending-batched-suggestion-label")) n.classList.add("d-none")
            }

            function qe(e, t) {
                e.setAttribute("aria-label", t), e.classList.remove("d-none")
            }

            function Ae(e, t) {
                const n = document.querySelector(".js-suggested-changes-inline-validation-template").cloneNode(!0);
                n.classList.remove("js-suggested-changes-inline-validation-template");
                n.querySelector(".js-suggested-changes-inline-error-message").textContent = e.trim();
                t.parentNode.insertBefore(n, t.nextSibling)
            }

            function Le(e) {
                if (!document.querySelector(".js-suggested-changes-subset-files")) return;
                const t = e.querySelectorAll(".js-suggested-change-toolbar-item"),
                    n = fe,
                    o = document.querySelector(n).textContent.trim();
                for (const s of t) s.disabled = !0, s.setAttribute("aria-label", o)
            }

            function we() {
                const e = document.querySelector(".js-batched-suggested-changes-container");
                e && setTimeout((() => function(e) {
                    const t = e.closest(".js-review-state-classes").querySelectorAll("[data-pending-batched-suggestion]").length;
                    for (const o of document.querySelectorAll(".js-pending-batched-suggested-changes-count")) o.textContent = String(t);
                    const n = document.querySelector(".js-reenable-add-to-batch").textContent;
                    for (const o of document.querySelectorAll("[data-batched-suggestion-reenable-sibling]")) o.removeAttribute("data-batched-suggestion-reenable-sibling"), o.removeAttribute("disabled"), o.setAttribute("aria-label", n);
                    if (t > 0) {
                        e.hidden = !1;
                        const t = e.querySelector(".js-batched-suggested-changes-toggle");
                        t.classList.add("anim-pulse-in"), t.addEventListener("animationend", (() => t.classList.remove("anim-pulse-in")), {
                            once: !0
                        });
                        for (const e of document.querySelectorAll(".js-apply-single-suggestion")) e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-add")) {
                            const t = e.closest(".js-suggested-change-form-container");
                            "true" === t.getAttribute("data-pending-batched-suggestion") || "true" === t.getAttribute("data-comment-pending") || "true" === t.getAttribute("data-outdated-comment") ? e.classList.add("d-none") : e.classList.remove("d-none"), "true" === e.getAttribute("data-batched-suggestion-disabled-by-sibling") && (e.removeAttribute("data-batched-suggestion-disabled-by-sibling"), e.setAttribute("disabled", "disabled"), e.setAttribute("aria-label", document.querySelector(".js-one-suggestion-per-line").textContent))
                        }
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-remove")) "true" === e.closest(".js-suggested-change-form-container").getAttribute("data-pending-batched-suggestion") ? e.classList.remove("d-none") : e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".js-focus-commit-suggestions-form-button")) {
                            const t = e.closest(".js-suggested-change-form-container"),
                                n = "true" === t.getAttribute("data-comment-pending"),
                                o = "true" === t.getAttribute("data-outdated-comment"),
                                s = "true" === t.getAttribute("data-resolved-comment"),
                                r = "left" === e.closest(".js-inline-comments-container").querySelector('input[name="side"]').value;
                            n || o || s || r ? e.classList.add("d-none") : e.classList.remove("d-none")
                        }
                        for (const e of document.querySelectorAll(".pending-batched-suggestion-label")) "true" === e.closest(".js-suggested-change-form-container").getAttribute("data-pending-batched-suggestion") ? e.classList.remove("d-none") : e.classList.add("d-none")
                    } else {
                        e.hidden = !0;
                        for (const e of document.querySelectorAll(".js-apply-single-suggestion")) e.classList.remove("d-none");
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-add")) e.classList.remove("d-none");
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-remove")) e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".js-focus-commit-suggestions-form-button")) e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".pending-batched-suggestion-label")) e.classList.add("d-none")
                    }
                }(e)))
            }

            function Te(e, t) {
                const n = e.querySelector("input[name=commit_title]"),
                    o = e.querySelector("textarea[name=commit_message]");
                let s = n.value.trim();
                "" === s && (s = n.defaultValue);
                const r = o.value.trim();
                "" !== r && (s = `${s}\n\n${r}\n`), n.disabled = !0, o.disabled = !0;
                const c = document.createElement("input");
                c.setAttribute("type", "hidden"), c.setAttribute("name", "message"), c.value = s, e.appendChild(c);
                const i = document.createElement("input");
                i.setAttribute("type", "hidden"), i.setAttribute("name", "changes"), i.value = JSON.stringify(t), e.appendChild(i)
            }

            function Ee(e, t) {
                const n = e.nextElementSibling;
                return n && n.matches(t) ? n : null
            }

            function xe(e) {
                const t = e.querySelector(".js-toggle-file-notes");
                t instanceof HTMLInputElement && m(t, !0)
            }

            function ke() {
                for (const e of document.querySelectorAll(".file .js-inline-comments-container")) {
                    const t = e.querySelectorAll(".js-comments-holder > *").length > 0,
                        n = e.querySelector(".js-inline-comment-form-container"),
                        o = !!n && n.classList.contains("open");
                    t || o || e.remove()
                }
            }

            function Ce(e) {
                const t = document.querySelector(e).firstElementChild.cloneNode(!0),
                    n = t.querySelector("textarea");
                return n instanceof HTMLTextAreaElement && (n.value = ""), t
            }
            async function _e(e) {
                const t = e.querySelector(".js-suggestion-button-placeholder");
                if (!t) return;
                const n = t.getAttribute("data-src-base");
                if (!n) return;
                const o = new URL(n, window.location.origin),
                    s = t.closest(".js-inline-comment-form") || t.closest(".js-comment-update");
                if (!(s instanceof HTMLFormElement)) return;
                const r = function(e, t) {
                    const n = new URLSearchParams(e.search.slice(1)),
                        o = t.elements.namedItem("in_reply_to") || t.elements.namedItem("comment_id");
                    if (o instanceof HTMLInputElement && o.value) return n.append("comment_id", o.value), n;
                    const s = t.elements.namedItem("path"),
                        r = t.elements.namedItem("start_side"),
                        c = t.elements.namedItem("start_line"),
                        i = t.elements.namedItem("side"),
                        l = t.elements.namedItem("line"),
                        a = t.elements.namedItem("start_commit_oid"),
                        u = t.elements.namedItem("end_commit_oid"),
                        d = t.elements.namedItem("base_commit_oid");
                    return s instanceof HTMLInputElement && r instanceof HTMLInputElement && c instanceof HTMLInputElement && i instanceof HTMLInputElement && l instanceof HTMLInputElement && a instanceof HTMLInputElement && u instanceof HTMLInputElement && d instanceof HTMLInputElement ? (n.append("path", s.value), n.append("start_side", r.value), n.append("start_line", c.value), n.append("end_side", i.value), n.append("end_line", l.value), n.append("start_commit_oid", a.value), n.append("end_commit_oid", u.value), n.append("base_commit_oid", d.value), n) : null
                }(o, s);
                if (!r) return;
                o.search = r.toString();
                const c = await f(document, o.toString());
                t.innerHTML = "", t.appendChild(c)
            }

            function Ie(e, t, n, o) {
                if (e.classList.remove("color-bg-success", "color-bg-danger"), !o) return "right" === n ? (e.classList.add("color-green-6"), void(e.textContent = "+" + t)) : "left" === n ? (e.classList.add("color-text-danger"), void(e.textContent = "-" + t)) : void(e.textContent = String(t));
                e.textContent = t
            }
            e("click", ".js-suggested-change-toolbar-item", (function(e) {
                const t = e.currentTarget;
                t instanceof HTMLButtonElement && !t.disabled && function(e) {
                    const t = e.getAttribute("data-lines");
                    null != t && ue(t, e.closest(".js-suggested-changes-container").querySelector(".js-comment-field"))
                }(t)
            })), e("click", ".js-refresh-after-suggestion", (function() {
                window.location.reload()
            })), t(".js-inline-comments-container", {
                add(e) {
                    Le(e)
                }
            }), t(".js-preview-body .js-apply-changes", {
                add(e) {
                    const t = e.closest(".js-suggested-changes-container");
                    if (!t) return e.remove();
                    const n = document.querySelector(pe).textContent,
                        o = document.querySelector(he).textContent,
                        s = e.closest(".js-suggested-changes-blob");
                    if ("" !== t.getAttribute("data-thread-side")) {
                        if ("left" === t.getAttribute("data-thread-side")) return Ae(o, s), e.remove()
                    } else {
                        const t = e.closest(".js-inline-comment-form"),
                            n = t.querySelector('input[name="side"]');
                        if (!t || !n) return e.remove();
                        if (t && "left" === n.value) return Ae(o, s), e.remove()
                    }
                    const r = e.previousElementSibling,
                        c = r.querySelector(".js-blob-code-deletion"),
                        i = r.querySelectorAll(".js-blob-code-addition");
                    if (!c || 0 === i.length) return;
                    if (c.textContent === Array.from(i).map((e => e.textContent)).join("\n")) return Ae(n, s), e.remove();
                    e.remove()
                }
            }), t(".js-comment-body .js-apply-changes", {
                add(e) {
                    const t = e.closest(".js-suggested-changes-container");
                    if (!t) return e.remove();
                    const n = t.querySelector(".js-suggested-changes-template");
                    if (!(n instanceof HTMLTemplateElement)) return e.remove();
                    const o = n.content.cloneNode(!0),
                        s = o.querySelector(".js-disabled-apply-suggestion-button");
                    let r;
                    try {
                        r = o.querySelector(".js-batched-suggested-changes-add")
                    } catch (h) {
                        if ("QueryError" !== h.name) throw h
                    }
                    if (document.querySelectorAll(".js-suggested-changes-files-tab").length) {
                        const e = document.querySelector(de).textContent;
                        r && (r.removeAttribute("disabled"), r.setAttribute("aria-label", e))
                    }
                    const c = document.querySelector(".js-pull-header-details"),
                        i = c && "true" === c.getAttribute("data-pull-is-open"),
                        l = e.closest(".js-resolvable-timeline-thread-container"),
                        a = "true" === n.getAttribute("data-comment-pending"),
                        u = t.classList.contains("js-selection-contains-deletions");
                    if (l && "true" === l.getAttribute("data-resolved")) {
                        const t = document.querySelector(je).textContent,
                            n = o.querySelector("details");
                        return n && n.remove(), qe(s, t), r && (r.setAttribute("disabled", "disabled"), r.setAttribute("aria-label", t)), e.replaceWith(o)
                    }
                    if (!i) {
                        const t = document.querySelector(ge).textContent;
                        return qe(s, t), r && (r.setAttribute("disabled", "disabled"), r.setAttribute("aria-label", t)), e.replaceWith(o)
                    }
                    if (a) {
                        const t = document.querySelector(ye).textContent;
                        return o.querySelector("details").remove(), qe(s, t), r && (r.setAttribute("disabled", "disabled"), r.setAttribute("aria-label", t)), e.replaceWith(o)
                    }
                    if (u) {
                        const t = document.querySelector(he).textContent;
                        return o.querySelector("details").remove(), qe(s, t), r && (r.setAttribute("disabled", "disabled"), r.setAttribute("aria-label", t)), e.replaceWith(o)
                    }
                    const d = document.querySelector(".js-suggested-changes-subset-files"),
                        m = "true" === n.getAttribute("data-outdated-comment");
                    if (d || m) {
                        let t;
                        return d ? t = document.querySelector(fe).textContent : m && (t = document.querySelector(be).textContent), o.querySelector("details").remove(), qe(s, t), r && (r.setAttribute("disabled", "disabled"), r.setAttribute("aria-label", t)), e.replaceWith(o)
                    }
                    const g = o.querySelector(".js-single-suggested-change-form"),
                        f = e.closest(".js-suggested-changes-blob");
                    if (f) {
                        const e = f.querySelector(".js-blob-code-deletion"),
                            t = f.querySelectorAll(".js-blob-code-addition");
                        if (!e) return;
                        const n = e.textContent,
                            c = Array.from(t).map((e => e.textContent));
                        if (c.length > 0 && n === c.join("\n")) {
                            const e = document.querySelector(me).textContent;
                            o.querySelector("details").remove(), qe(s, e), r && (r.setAttribute("disabled", "disabled"), r.setAttribute("aria-label", e))
                        } else
                            for (const o of c) {
                                const e = document.createElement("input");
                                e.setAttribute("type", "hidden"), e.setAttribute("name", "value[]"), e.value = o, g.appendChild(e)
                            }
                    }
                    e.replaceWith(o)
                }
            }), t(".js-pull-header-details", {
                add(e) {
                    const t = "true" === e.getAttribute("data-pull-is-open"),
                        n = document.querySelector(".js-suggested-changes-template");
                    if (t || !(n instanceof HTMLTemplateElement)) return;
                    const o = n.content,
                        s = document.querySelector(ge).textContent;
                    Se(o, s), ve(s)
                }
            }), t(".js-suggested-changes-subset-files", {
                add() {
                    const e = document.querySelector(".js-suggested-changes-template");
                    if (!(e instanceof HTMLTemplateElement)) return;
                    const t = e.content,
                        n = document.querySelector(fe).textContent;
                    Se(t, n), ve(n)
                }
            }), e("click", ".js-apply-suggestion-button", (async function(e) {
                const t = e.currentTarget.parentElement;
                if (t) {
                    const e = t.querySelector(".js-suggestion-commit-title");
                    setTimeout((() => e.focus()), 1)
                }
            })), e("click", ".js-dismiss-suggested-change-onboarding-notice", (async function(e) {
                const t = e.currentTarget.getAttribute("data-url"),
                    n = e.currentTarget.parentElement.querySelector(".js-data-url-csrf"),
                    o = new FormData;
                o.append("notice", "suggested_changes_onboarding_prompt");
                if ((await fetch(t, {
                        method: "POST",
                        mode: "same-origin",
                        body: o,
                        headers: {
                            "Scoped-CSRF-Token": n.value,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })).ok) {
                    const e = document.querySelectorAll(".js-suggested-change-onboarding-notice");
                    for (const t of e) t.remove()
                }
            })), g("keypress", ".js-comment-field", (function(e) {
                if ("Enter" === e.key) {
                    (function(e) {
                        const t = e.selectionStart;
                        if (!ae(e.value, t)) return !1;
                        const n = e.value,
                            o = ce(n, t);
                        if (null === o) return !1;
                        const s = "\n" + ie(o),
                            r = n.substr(0, t) + s + n.substr(t);
                        m(e, r);
                        const c = t + s.length;
                        return e.setSelectionRange(c, c), !0
                    })(e.target) && e.preventDefault()
                }
            })), g("keypress", ".js-suggestion-commit-message", (function(e) {
                const t = e.currentTarget;
                "Enter" === e.key && t.setAttribute("rows", "3")
            })), e("click", ".js-batched-suggested-changes-add", (function(e) {
                const t = e.target,
                    n = t.closest(".js-suggested-change-form-container");
                if ("true" === n.getAttribute("data-comment-pending") || "true" === n.getAttribute("data-outdated-comment") || "true" === t.getAttribute("data-batched-suggestion-disabled-by-sibling")) return;
                n.setAttribute("data-pending-batched-suggestion", "true");
                const o = t.closest(".js-inline-comments-container");
                for (const s of o.querySelectorAll(".js-batched-suggested-changes-add")) s.setAttribute("data-batched-suggestion-disabled-by-sibling", "true");
                t.removeAttribute("data-batched-suggestion-disabled-by-sibling"), we()
            })), e("click", ".js-batched-suggested-changes-remove", (function(e) {
                e.currentTarget.closest(".js-suggested-change-form-container").removeAttribute("data-pending-batched-suggestion");
                const t = e.currentTarget.closest(".js-inline-comments-container");
                for (const n of t.querySelectorAll(".js-batched-suggested-changes-add")) n.setAttribute("data-batched-suggestion-reenable-sibling", "true");
                we()
            })), e("click", ".js-focus-commit-suggestions-form-button", (function(e) {
                e.preventDefault(), window.location.href = "#clear-commit-suggestions", window.location.href = "#commit-suggestions"
            })), e("click", ".js-dismiss-batched-suggested-changes-onboarding-notice", (async function(e) {
                const t = e.currentTarget.getAttribute("data-url"),
                    n = e.currentTarget.parentElement.querySelector(".js-data-url-csrf"),
                    o = new FormData;
                o.append("notice", "batched_suggested_changes_onboarding_prompt");
                if ((await fetch(t, {
                        method: "POST",
                        mode: "same-origin",
                        body: o,
                        headers: {
                            "Scoped-CSRF-Token": n.value,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })).ok)
                    for (const s of document.querySelectorAll(".js-batched-suggested-change-onboarding-notice")) s.remove()
            })), e("click", ".js-single-suggested-change-form .js-suggested-changes-submit", (function(e) {
                const t = e.currentTarget.closest(".js-single-suggested-change-form"),
                    n = Array.from(t.querySelectorAll('input[name="value[]"]')).map((e => e.value)),
                    o = [{
                        commentId: t.querySelector("input[name=comment_id]").value,
                        path: t.querySelector("input[name=path]").value,
                        suggestion: n
                    }];
                Te(t, o)
            })), n(".js-single-suggested-change-form", (async function(e, t) {
                const n = e.closest(".js-suggested-change-form-container"),
                    o = e.closest("details"),
                    s = n.querySelector(".js-suggestion-applied"),
                    r = e.closest(".js-suggested-changes-contents").querySelector(".js-error-message-placeholder");
                try {
                    await t.json(), s.classList.remove("d-none");
                    n.querySelector(".js-batched-suggested-changes-add").classList.add("d-none"), o.remove(), window.location.reload()
                } catch (c) {
                    if ("QueryError" !== c.name) {
                        const t = c.response.json && c.response.json.error,
                            s = r.querySelector(".js-error-message");
                        r.hidden = !1, s.textContent = t, n.prepend(r);
                        e.closest(".js-suggested-change-form-container").querySelector(".js-batched-suggested-changes-add").classList.add("d-none"), o.remove()
                    }
                }
            })), e("click", ".js-suggestion-batch-submit", (function(e) {
                const t = e.currentTarget.closest(".js-batched-suggested-changes-form"),
                    n = [];
                for (const o of document.querySelectorAll("[data-pending-batched-suggestion]")) {
                    const e = o.querySelector(".js-single-suggested-change-form"),
                        t = Array.from(e.querySelectorAll('input[name="value[]"]')).map((e => e.value));
                    n.push({
                        commentId: e.querySelector("input[name=comment_id]").value,
                        path: e.querySelector("input[name=path]").value,
                        suggestion: t
                    })
                }
                Te(t, n)
            })), n(".js-batched-suggested-changes-form", (async function(e, t) {
                try {
                    await t.json();
                    e.closest(".js-batched-suggested-changes-container").hidden = !0, window.location.reload()
                } catch (n) {
                    const t = n.response.json && n.response.json.error,
                        o = e.closest(".js-batched-suggested-changes-container").querySelector(".js-error-message-container");
                    o.querySelector(".js-error-message").textContent = t, o.hidden = !1
                }
            })), t(".js-files-tab-stale", {
                add() {
                    const e = document.querySelector(".js-batched-suggested-changes-container");
                    e && setTimeout((() => {
                        e.hidden = !0
                    }))
                }
            }), e("click", ".js-add-single-line-comment", (function(e) {
                const t = e.currentTarget;
                xe(t.closest(".file"));
                const n = function(e) {
                        const t = e.closest("tr"),
                            n = Ee(t, ".js-inline-comments-container");
                        if (n instanceof Element) {
                            const e = Array.from(n.querySelectorAll(".js-inline-comment-form")).pop();
                            return e instanceof HTMLFormElement && He(e, t.querySelector("button.js-add-line-comment")), n
                        }
                    }(t) || function(e) {
                        const t = e.closest("tr"),
                            n = Ce("#js-inline-comments-single-container-template"),
                            o = n.querySelector(".js-inline-comment-form");
                        o instanceof HTMLFormElement && He(o, e);
                        return t.after(n), n
                    }(t),
                    o = Array.from(n.querySelectorAll(".js-line-comments")).pop();
                h(o)
            })), e("click", ".js-add-split-line-comment", (function(e) {
                const t = e.currentTarget;
                xe(t.closest(".file"));
                const n = t.closest("tr"),
                    o = "addition" === t.getAttribute("data-type") ? "js-addition" : "js-deletion",
                    s = function(e, t, n) {
                        const o = e.querySelector(".js-line-comments." + t);
                        if (o) {
                            return He(Array.from(o.querySelectorAll(".js-inline-comment-form")).pop(), n), o
                        }
                        const s = Ce("#js-inline-comments-split-form-container-template");
                        s.classList.add(t);
                        const r = s.querySelector(".js-inline-comment-form");
                        r instanceof HTMLFormElement && He(r, n);
                        const c = e.querySelectorAll("." + t);
                        c[c.length - 1].after(s);
                        for (const i of c) i.remove();
                        return s
                    }(function(e) {
                        let t = Ee(e, ".js-inline-comments-container");
                        return t || (t = Ce("#js-inline-comments-split-container-template"), e.after(t), t)
                    }(n), o, t),
                    r = Array.from(s.querySelectorAll(".js-line-comments")).pop();
                h(r)
            })), n(".js-inline-comment-form", (async function(e, t) {
                let n;
                ! function(e) {
                    const t = e.querySelector(".js-comment-form-error");
                    t && (t.hidden = !0, t.textContent = null)
                }(e);
                try {
                    n = await t.json()
                } catch (i) {
                    if (i.response) {
                        let t;
                        try {
                            t = i.response.json
                        } catch (l) {}
                        if (t) return void
                        function(e, t) {
                            const n = e.querySelector(".js-comment-form-error");
                            let o;
                            o = t.errors ? Array.isArray(t.errors) ? t.errors.join(", ") : t.errors : "There was an error posting your comment.";
                            n.textContent = o, n.style.display = "block", n.hidden = !1, n.classList.remove("d-none")
                        }(e, t)
                    }
                    throw i
                }
                const o = n.json,
                    s = o.inline_comment,
                    r = e.closest(".js-line-comments");
                s && r.querySelector(".js-comments-holder").append(p(document, s));
                const c = o.inline_comment_thread;
                c && r.replaceWith(p(document, c)), b(e)
            })), document.addEventListener("session:resume", (function(e) {
                const t = e.detail;
                ! function(e) {
                    const [t, n] = e.match(/^new_inline_comment_(?:discussion|diff)_(?:[\w-]+)_(\d+)_(\d+)$/) || [];
                    if (!t) return;
                    const o = document.querySelector(`.js-inline-comment-form input[name='in_reply_to'][value='${n}']`);
                    if (!o) return;
                    const s = o.closest(".js-line-comments");
                    s && h(s)
                }(t.targetId),
                function(e) {
                    const [t, n] = e.match(/^new_inline_comment_diff_(?:[\w-]+)_(\d+)$/) || [];
                    if (!t) return;
                    const o = document.querySelector(`.js-add-line-comment[data-anchor='${t}'][data-position='${n}']`);
                    o && o.click()
                }(t.targetId)
            })), t(".js-comment", {
                remove: ke
            }), e("inlinecomment:focus", ".js-inline-comment-form-container", (function(e) {
                const t = e.target.querySelector(".js-suggested-changes-container");
                t && _e(t)
            })), t(".js-suggested-changes-container.is-comment-editing", (e => {
                _e(e)
            })), document.addEventListener("inlinecomment:collapse", (() => {
                ke()
            }));
            const Me = {
                R: "right",
                L: "left"
            };

            function He(e, t) {
                const n = ["type", "path", "position", "line", "side", "original-line"];
                for (const i of n) {
                    const n = e.elements.namedItem(i);
                    if (n instanceof HTMLInputElement) {
                        const e = t.getAttribute("data-" + i) || "";
                        n.value = e
                    }
                }! function(e, t) {
                    const n = S();
                    if (!n) return;
                    if (n.end.is(n.start)) return;
                    if (!j(t, n)) return void y();
                    const {
                        start: {
                            lineNumber: o
                        },
                        end: {
                            lineNumber: s
                        }
                    } = n;
                    let {
                        start: {
                            side: r
                        },
                        end: {
                            side: c
                        }
                    } = n;
                    const i = Number(t.getAttribute("data-line")),
                        l = t.getAttribute("data-side");
                    if (i !== s || !n.end.isContext() && l !== Me[c]) return void y();
                    const a = Me[r],
                        u = e.elements.namedItem("start_line"),
                        d = e.elements.namedItem("start_side"),
                        m = e.elements.namedItem("line"),
                        g = e.elements.namedItem("side"),
                        f = e.elements.namedItem("preview_start_side"),
                        h = e.elements.namedItem("preview_side");
                    if (u instanceof HTMLInputElement && d instanceof HTMLInputElement && m instanceof HTMLInputElement && g instanceof HTMLInputElement && f instanceof HTMLInputElement && h instanceof HTMLInputElement) {
                        u.value = String(o), d.value = a, d.value = f.value = d.value, h.value = g.value;
                        const t = u.value;
                        r = d.value;
                        const s = m.value;
                        c = g.value;
                        const i = e.closest(".js-inline-comment-form-container");
                        if (t && s) {
                            const e = i.querySelector(".js-multi-line-preview"),
                                o = e.querySelector(".js-multi-line-preview-start"),
                                l = e.querySelector(".js-multi-line-preview-end"),
                                a = n.start.isContext(),
                                u = n.end.isContext();
                            Ie(o, t, r, a), Ie(l, s, c, u), e.hidden = !1, i.classList.add("is-multiline")
                        } else i.querySelector(".js-multi-line-preview").hidden = !0, i.classList.remove("is-multiline");
                        Le(i)
                    }
                }(e, t);
                const o = t.getAttribute("data-position") || "",
                    s = t.getAttribute("data-anchor") || "",
                    r = e.querySelector(".js-comment-field"),
                    c = r.id.replace(/^r\d+ /, "").replace("${anchor}", s).replace("${position}", o);
                for (const i of e.querySelectorAll(`[for="${r.id}"]`)) i.setAttribute("for", c);
                r.id = c
            }

            function Re(e) {
                const t = Pe();
                if (!t) return;
                De(e, t);
                const n = function(e, t) {
                    const n = function(e, t) {
                        const n = /^(diff-[0-9a-f]{32})(?:[L|R]\d+)?$/.exec(t);
                        if (!n) return;
                        const o = n[1],
                            s = e.querySelector(`a[name='${o}']`);
                        if (!s) return;
                        const r = s.nextElementSibling;
                        if (r && !r.querySelector(".js-diff-load-container")) return;
                        return r
                    }(e, t);
                    if (n) return n;
                    return function(e, t) {
                        const n = /^(?:r|commitcomment-)(\d+)$/.exec(t);
                        if (!n) return;
                        const o = n[1],
                            s = e.querySelector("#diff-with-comment-" + o);
                        if (!s) return;
                        return s.closest(".js-file")
                    }(e, t)
                }(e, t);
                n && (d(n), $e(n))
            }

            function Pe() {
                return window.location.hash.slice(1)
            }

            function De(e, t) {
                let n;
                n = t.match(/^diff-.+[LR]\d+-[LR]\d+/) ? v(e.ownerDocument, t.substring(0, t.indexOf("-", 5))) : v(e.ownerDocument, t), n && e.contains(n) && (q(n), d(n))
            }

            function $e(e) {
                const t = e.querySelector(".js-diff-entry-loader"),
                    n = e.querySelector(".js-diff-placeholder"),
                    o = e.querySelector("button.js-diff-load"),
                    s = e.querySelector(".js-button-text");
                n.setAttribute("fill", "url('#animated-diff-gradient')"), s.textContent = o.getAttribute("data-disable-with") || "", o.disabled = !0;
                const r = new URL(t.getAttribute("data-fragment-url") || "", window.location.origin);
                return t.src = r.toString(), t.data
            }

            function Ne(e, t, n) {
                const o = Array.from(e.querySelectorAll('[role="menuitem"]'));
                let s = o.indexOf(t),
                    r = o.indexOf(n);
                if (-1 === s) throw new Error("Couldn't find startIndex in container");
                if (-1 === r) throw new Error("Couldn't find endItem in container");
                Be(e), o[r].classList.add("is-last-in-range"), s > r && ([s, r] = [r, s]);
                for (const c of o.slice(s, r + 1)) c.classList.add("is-range-selected")
            }

            function Be(e) {
                for (const t of e.querySelectorAll('[role="menuitem"]')) t.classList.remove("is-range-selected", "is-last-in-range")
            }
            t(".js-diff-progressive-container", (function(e) {
                Re(e);
                const t = e.querySelector(".js-diff-progressive-loader");
                t && t.addEventListener("load", (function() {
                    Re(e)
                }))
            })), t(".js-diff-load-container", (function(e) {
                const t = e.querySelector(".js-diff-entry-loader");
                t && t.addEventListener("load", (function() {
                    e.closest(".js-file").classList.remove("hide-file-notes-toggle");
                    const t = Pe();
                    t && De(e, t)
                }))
            })), e("click", ".js-diff-load", (function(e) {
                if (e.target.classList.contains("js-ignore-this")) return;
                $e(e.currentTarget.closest(".js-diff-load-container"))
            })), e("click", ".js-rendered, .js-source", (function(e) {
                const t = e.currentTarget;
                t.classList.contains("selected") ? e.preventDefault() : (function(e) {
                    const t = e.closest(".js-file-header"),
                        n = e.classList.contains("js-rendered"),
                        o = e.classList.contains("js-source"),
                        s = t.getAttribute("data-short-path"),
                        r = t.getAttribute("data-anchor"),
                        c = new URL(window.location.href, window.location.origin),
                        l = new URLSearchParams(c.search.slice(1));
                    c.hash = r, n ? l.set("short_path", s) : o && l.delete("short_path");
                    c.search = l.toString(), i(null, "", c.toString())
                }(t), function(e) {
                    for (const t of document.querySelectorAll(".js-rendered, .js-source")) t.classList.remove("selected"), t.removeAttribute("aria-current");
                    e.classList.add("selected"), e.setAttribute("aria-current", "true")
                }(t))
            })), n(".js-prose-diff-toggle-form", (async function(e, t) {
                const n = e.closest(".js-details-container"),
                    o = n.querySelector(".js-file-content"),
                    s = await t.html();
                for (; o.lastChild;) o.removeChild(o.lastChild);
                o.append(s.html), n.classList.toggle("display-rich-diff"), n.classList.toggle("show-inline-notes")
            })), e("change", ".js-diff-style-toggle input", (function(e) {
                if (!(e.target instanceof Element)) return;
                const t = e.target.closest(".js-diff-settings");
                for (const n of t.querySelectorAll(".js-diff-style-toggle label")) n.classList.toggle("selected")
            })), e("click", ".js-toc-retry", (function(e) {
                if (!(e.target instanceof Element)) return;
                const t = e.target.closest(".select-menu").querySelector("include-fragment"),
                    n = t.getAttribute("src");
                t.setAttribute("src", ""), t.setAttribute("src", n)
            })), e("details-menu-select", ".js-pull-base-branch-menu", (function() {
                const e = document.querySelector(".js-change-base-template").content.cloneNode(!0);
                e instanceof DocumentFragment && A({
                    content: e
                })
            }), {
                capture: !0
            }), t(".js-diffbar-range-menu .js-diffbar-range-list", {
                subscribe: function(e) {
                    const t = e.closest("details-menu"),
                        n = e.classList.contains("js-diffbar-invert-range");
                    let o = !1;

                    function s(e) {
                        o = e.shiftKey, o && e.preventDefault()
                    }

                    function r(t) {
                        if (!o) return;
                        t.preventDefault();
                        const s = t.detail.relatedTarget;
                        if (s.classList.contains("is-range-selected")) {
                            t.stopPropagation();
                            const o = e.querySelectorAll(".is-range-selected"),
                                s = n ? o.length - 1 : 0,
                                r = n ? 0 : o.length - 1,
                                c = o[s],
                                i = o[r],
                                l = e.getAttribute("data-range-url"),
                                a = c.getAttribute("data-parent-commit"),
                                u = i.getAttribute("data-commit"),
                                d = a && u ? `${a}..${u}` : u,
                                m = l.replace("$range", d);
                            L({
                                url: m,
                                container: document.querySelector("#js-repo-pjax-container")
                            })
                        } else t.stopImmediatePropagation(), async function(e, t) {
                            function n(n) {
                                Ne(e, t, n.target.closest('[role="menuitem"]'))
                            }
                            Ne(e, t, t), e.addEventListener("mouseover", n), await new Promise((e => window.addEventListener("keyup", e, {
                                once: !0
                            }))), e.removeEventListener("mouseover", n), Be(e)
                        }(e, s)
                    }
                    return e.addEventListener("click", s, {
                        capture: !0
                    }), t.addEventListener("details-menu-select", r), {
                        unsubscribe: () => {
                            e.removeEventListener("click", s, {
                                capture: !0
                            }), t.removeEventListener("details-menu-select", r)
                        }
                    }
                }
            }), e("toggle", ".js-diffbar-range-menu", (function(e) {
                const t = e.currentTarget;
                if (!t.hasAttribute("open")) return;
                const n = t.querySelector(".in-range");
                n && n.focus()
            }), {
                capture: !0
            }), e("click", ".js-compare-tab", (function(e) {
                for (const n of document.querySelectorAll(".js-compare-tab.selected")) n.classList.remove("selected");
                e.currentTarget.classList.add("selected");
                for (const n of document.querySelectorAll("#commits_bucket, #files_bucket, #commit_comments_bucket")) n.classList.add("d-none");
                const t = e.currentTarget.hash;
                document.querySelector(t).classList.remove("d-none"), e.preventDefault()
            })), a((function({
                target: e
            }) {
                if (!(e instanceof HTMLElement)) return;
                const t = e.closest("#commits_bucket, #files_bucket, #commit_comments_bucket");
                t && t instanceof HTMLElement && !w(t) && document.querySelector(`.js-compare-tab[href="#${t.id}"]`).click()
            })), e("click", ".js-toggle-range-editor-cross-repo", (function() {
                document.querySelector(".js-range-editor").classList.toggle("is-cross-repo")
            })), e("pjax:click", ".js-range-editor", (function(e) {
                const t = document.querySelector(".js-compare-pr");
                if (t && t.classList.contains("open")) {
                    const t = e.detail.options,
                        n = new URL(t.url, window.location.origin);
                    n.search.match(/expand=1/) || (n.search += (n.search ? "&" : "") + "expand=1", t.url = n.toString())
                }
            })), t(".js-compare-pr.open", {
                add() {
                    document.body.classList.add("is-pr-composer-expanded")
                },
                remove() {
                    document.body.classList.remove("is-pr-composer-expanded")
                }
            }), e("change", ".js-collab-checkbox", (function({
                currentTarget: e
            }) {
                const t = e.form;
                for (const o of t.querySelectorAll(".errored")) o.classList.remove("errored");
                const n = e.closest(".js-collab-option").querySelector(".js-status-indicator");
                n.classList.remove("status-indicator-success", "status-indicator-failed"), n.classList.add("status-indicator-loading")
            })), n(".js-collab-form", (async function(e, t) {
                try {
                    await t.text()
                } catch (n) {
                    for (const t of e.querySelectorAll(".status-indicator-loading")) {
                        t.classList.remove("status-indicator-loading"), t.classList.add("status-indicator-failed");
                        const e = t.closest(".js-collab-option");
                        e.classList.add("errored");
                        const n = e.querySelector(".js-collab-checkbox");
                        n.checked = !n.checked
                    }
                    for (const t of e.querySelectorAll(".status-indicator-success")) t.classList.remove("status-indicator-success");
                    return
                }
                for (const o of e.querySelectorAll(".errored")) o.classList.remove("errored");
                for (const o of e.querySelectorAll(".status-indicator-loading")) o.classList.remove("status-indicator-loading"), o.classList.add("status-indicator-success")
            })), t(".js-timeline-item > .js-commit-group", {
                constructor: HTMLElement,
                add(e) {
                    if (e.querySelector(".js-commit-group-header")) return;
                    const t = e.closest(".js-timeline-item");
                    if (!(t instanceof HTMLElement)) return;
                    let n = t.previousElementSibling;
                    n instanceof HTMLElement && (n.classList.contains("js-timeline-item") || (n = n.previousElementSibling, n instanceof HTMLElement)) && n.querySelector(".js-commit-group") && function(e, t) {
                        const n = e.querySelector(".js-commit-group-commits"),
                            o = t.querySelectorAll(".js-commit-group-commits > .js-commit");
                        for (const r of o) r.classList.toggle("py-3"), n.appendChild(r);
                        const s = e.querySelector(".js-commit-group-count");
                        s instanceof HTMLElement && (s.textContent = "" + n.querySelectorAll(".js-commit").length), t.remove()
                    }(n, t)
                }
            }), e("details:toggled", ".js-pull-merging", (function({
                currentTarget: e
            }) {
                const t = Array.from(e.querySelectorAll(".js-merge-pull-request")),
                    n = t.some(w);
                for (const o of t) o.classList.toggle("is-dirty", n)
            })), e("click", ".js-merge-box-try-again", (async function({
                currentTarget: e
            }) {
                const t = e.getAttribute("data-form-target");
                if (!["js-cleanup-branch-form", "js-merge-branch-form", "js-queue-branch-form", "js-update-branch-form"].includes(t)) return;
                const n = e.closest(".js-pull-merging").getElementsByClassName(t)[0];
                s(n, "submit")
            })), document.addEventListener("session:resume", (function(e) {
                const t = document.getElementById(e.detail.targetId);
                if (t) {
                    const e = t.closest(".js-merge-pull-request");
                    if (e) {
                        const t = e.closest(".js-details-container");
                        t && t.classList.add("open")
                    }
                }
            })), e("change", ".js-merge-button-toggle", (function({
                currentTarget: e
            }) {
                const t = e.closest(".js-merge-pr"),
                    n = !e.checked;
                for (const o of t.querySelectorAll(".js-merge-commit-button")) o.disabled = n
            })), e("change", ".js-auto-merge-admin-override", (function({
                currentTarget: e
            }) {
                const t = e.closest(".js-merge-message-container"),
                    n = e.checked,
                    o = t.querySelector(".js-merge-box"),
                    s = t.querySelector(".js-auto-merge-box"),
                    r = t.querySelector(".js-merge-form"),
                    c = t.querySelector(".js-auto-merge-form"),
                    i = t.querySelectorAll(".js-merge-menu-item"),
                    l = t.querySelectorAll(".js-auto-merge-menu-item");
                if (o.hidden = !n, s.hidden = n, r.hidden = !n, c.hidden = n, n)
                    for (let a = 0; a < l.length; a++) {
                        const e = l[a].getAttribute("aria-checked");
                        null !== e && i[a].setAttribute("aria-checked", e)
                    } else
                        for (let a = 0; a < i.length; a++) {
                            const e = i[a].getAttribute("aria-checked");
                            null !== e && l[a].setAttribute("aria-checked", e)
                        }
            })), e("details-menu-selected", ".js-merge-method-menu", (function(e) {
                const t = e.detail.relatedTarget,
                    n = t.closest(".js-merge-pr"),
                    o = n.querySelector(".js-merge-pull-request"),
                    s = n.querySelector(".js-auto-merge-admin-override"),
                    r = n.querySelector(".js-merge-method-menu-button"),
                    c = r.getAttribute("data-merge-button-class");
                r.classList.toggle("btn-danger", t.hasAttribute("data-dangerous-action")), c && r.classList.toggle(c, !t.hasAttribute("data-dangerous-action"));
                const i = n.querySelector(".js-merge-title"),
                    l = n.querySelector(".js-merge-message");
                i.defaultValue === i.value && (i.defaultValue = i.value = t.getAttribute("data-input-title-value"));
                l.defaultValue === l.value && (l.defaultValue = l.value = t.getAttribute("data-input-message-value"));
                n.classList.toggle("is-merging", "merge" === t.value), n.classList.toggle("is-squashing", "squash" === t.value), n.classList.toggle("is-rebasing", "rebase" === t.value), n.classList.toggle("is-merging-group", "group" === t.value), n.classList.toggle("is-merging-solo", "solo" === t.value), n.classList.toggle("is-merging-jump", "jump" === t.value);
                const a = o.classList.contains("js-admin-override-merge") && "merge" === t.value || o.classList.contains("js-admin-override-squash") && "squash" === t.value || o.classList.contains("js-admin-override-rebase") && "rebase" === t.value,
                    u = n.querySelectorAll(".js-admin-override");
                for (const b of u) b.hidden = !a || null !== s;
                const d = n.querySelector(".js-merge-type");
                d && (d.value = t.value);
                const m = a && !n.querySelector(".js-merge-button-toggle").checked,
                    g = n.querySelectorAll(".js-merge-pull-request .js-merge-commit-button");
                for (const b of g) b.type = t.value === b.value ? "submit" : "button", b.disabled = m;
                o.classList.toggle("color-text-danger", a);
                const f = n.closest(".js-pull-merging"),
                    h = new URL(f.getAttribute("data-url"), window.location.origin),
                    p = new URLSearchParams(h.search);
                p.set("merge_type", t.value), h.search = p.toString(), f.setAttribute("data-url", h.toString())
            }), {
                capture: !0
            }), e("details:toggled", ".js-merge-pr", (function(e) {
                const t = e.currentTarget.querySelector(".js-merge-message");
                t && s(t, "change")
            })), t(".branch-action-item.js-details-container.open", {
                add(e) {
                    for (const t of e.querySelectorAll(".js-merge-review-section")) t.setAttribute("open", "")
                },
                remove(e) {
                    for (const t of e.querySelectorAll(".js-merge-review-section")) t.removeAttribute("open")
                }
            }), e("toggle", ".js-details-container .js-merge-review-section", (function({
                currentTarget: e
            }) {
                const t = e.closest(".js-details-container"),
                    n = t.querySelectorAll(".js-merge-review-section").length,
                    o = t.querySelectorAll(".js-merge-review-section[open]").length,
                    s = o === n;
                0 === o ? T(t, {
                    force: !1
                }) : s && T(t, {
                    force: !0
                })
            }), {
                capture: !0
            }), t("poll-include-fragment[data-to-be-polled]", {
                constructor: o,
                add(e) {
                    function t() {
                        e.src = e.getAttribute("data-to-be-polled"), e.removeAttribute("data-to-be-polled")
                    }
                    document.hidden ? document.addEventListener("visibilitychange", t, {
                        once: !0
                    }) : t()
                }
            });
            let Fe = !1;

            function Ue() {
                const e = document.querySelectorAll(".pull-request-ref-restore");
                for (let t = 0; t < e.length; t++) e[t].classList.toggle("last", t === e.length - 1)
            }

            function We() {
                const e = null != document.querySelector("#js-pull-restorable"),
                    t = document.querySelector(".js-pull-discussion-timeline");
                t && t.classList.toggle("is-pull-restorable", e)
            }

            function Oe() {
                const e = document.querySelector(".js-reviews-container");
                e && setTimeout((() => function(e) {
                    const t = e.closest(".js-review-state-classes"),
                        n = t.querySelectorAll(".js-pending-review-comment").length,
                        o = document.querySelector(".js-review-changes");
                    t.classList.toggle("is-review-pending", n > 0);
                    for (const s of document.querySelectorAll(".js-pending-review-comment-count")) s.textContent = String(n);
                    for (const s of document.querySelectorAll(".js-pending-comment-count-type")) s instanceof HTMLElement && (s.textContent = s.getAttribute(1 === n ? "data-singular-string" : "data-plural-string"));
                    if (n > 0) {
                        o.textContent = o.getAttribute("data-pending-message") || "";
                        const t = e.querySelector(".js-reviews-toggle");
                        t.classList.add("anim-pulse-in"), t.addEventListener("animationend", (() => t.classList.remove("anim-pulse-in")), {
                            once: !0
                        })
                    } else o.textContent = o.getAttribute("data-message") || ""
                }(e)))
            }

            function ze(e) {
                return e.getAttribute("ratio").split("/")
            }

            function Xe(e) {
                if (e) {
                    const [t, n] = ze(e), o = parseInt(t) / parseInt(n), s = e.querySelector(".js-review-progress"), r = e.querySelector(".js-review-count");
                    s instanceof HTMLElement && r && (s.style.width = 100 * o + "%", r.textContent = `${t} / ${n}`)
                }
            }
            document.addEventListener("keydown", (function(e) {
                "Alt" === e.key && (Fe = !0)
            })), document.addEventListener("keyup", (function(e) {
                "Alt" === e.key && (Fe = !1)
            })), e("click", ".js-toggle-outdated-comments", (function(e) {
                if (!((e instanceof MouseEvent && e.altKey || Fe) && e.currentTarget instanceof HTMLElement)) return;
                const t = e.currentTarget,
                    n = t.closest("details");

                function o() {
                    const e = n.hasAttribute("open");
                    for (const n of document.querySelectorAll(".js-toggle-outdated-comments"))
                        if (n !== t) {
                            n.closest("details").toggleAttribute("open", e)
                        }
                }
                setTimeout((() => {
                    E(t, o)
                }))
            })), t(".pull-request-ref-restore", {
                add: Ue,
                remove: Ue
            }), t("#js-pull-restorable", {
                add: We,
                remove: We
            }), n(".js-inline-comment-form", (async function(e, t) {
                await t.text(), Oe()
            })), n(".js-pending-review-comment .js-comment-delete", (async function(e, t) {
                await t.text(), Oe()
            })), n(".js-resolvable-timeline-thread-form", (async function(e, t) {
                try {
                    const n = await t.html();
                    e.closest(".js-resolvable-timeline-thread-container").replaceWith(n.html)
                } catch (n) {
                    x()
                }
            })), e("click", ".js-resolvable-thread-toggler", (function(e) {
                if (!(e.target instanceof HTMLElement)) return;
                const t = e.target.closest(".js-resolvable-timeline-thread-container");
                e.target.closest(".js-resolvable-thread-toggler-container").classList.toggle("border-bottom");
                t.querySelector(".js-resolvable-thread-contents").classList.toggle("d-none");
                for (const n of t.querySelectorAll(".js-resolvable-thread-toggler")) n.classList.toggle("d-none")
            })), n(".js-toggle-user-reviewed-file-form", (async function(e, t) {
                const n = e.closest(".js-details-container"),
                    o = !!n.querySelector(".js-reviewed-file"),
                    s = n.classList.contains("open"),
                    r = n.querySelector(".js-file-header"),
                    c = !!r && 60 === r.getBoundingClientRect().top;
                (!o && s || o && !s) && (T(n), c && d(n));
                const i = e.querySelector(".js-reviewed-toggle");
                o ? (i.classList.remove("bg-blue-2", "border-blue-light"), i.classList.add("color-text-secondary", "color-border-tertiary")) : (i.classList.remove("color-text-secondary", "color-border-tertiary"), i.classList.add("bg-blue-2", "border-blue-light"));
                i.querySelector(".js-reviewed-checkbox").disabled = !0;
                const l = document.querySelector("progress-bar");
                l instanceof ProgressBarElement && (o ? l.decrement() : l.increment());
                const a = await t.html(),
                    u = e.closest(".js-replace-file-header-review");
                u && (u.replaceWith(a.html), n.hasAttribute("data-file-user-viewed") ? n.removeAttribute("data-file-user-viewed") : n.setAttribute("data-file-user-viewed", "true"))
            }));
            class ProgressBarElement extends HTMLElement {
                static get observedAttributes() {
                    return ["ratio"]
                }
                attributeChangedCallback(e) {
                    "ratio" === e && Xe(this)
                }
                connectedCallback() {
                    Xe(this)
                }
                increment() {
                    const [e, t] = ze(this), n = Math.min(parseInt(e) + 1, parseInt(t));
                    this.setAttribute("ratio", `${n}/${t}`)
                }
                decrement() {
                    const [e, t] = ze(this), n = Math.min(parseInt(e) - 1, parseInt(t));
                    this.setAttribute("ratio", `${n}/${t}`)
                }
            }

            function Ve(e) {
                q(e), d(e)
            }
            async function Ke(e, t) {
                const {
                    anchor: n,
                    side: o,
                    line: s,
                    lastLine: r,
                    hashFragment: c,
                    partialHashFragment: i
                } = e, l = v(document, n);
                if (!l) return;
                const a = l.nextElementSibling;
                if (!a) return;
                const u = Ye(a, o, s, r);
                if (!u.length) {
                    const e = v(document, c);
                    if (e) return void Ve(e);
                    const t = a.querySelector(".js-diff-load-container");
                    if (!t) return;
                    try {
                        await
                        function(e) {
                            const t = e.querySelector(".js-diff-entry-loader"),
                                n = e.querySelector(".js-diff-placeholder"),
                                o = e.querySelector("button.js-diff-load"),
                                s = e.querySelector(".js-button-text");
                            n.setAttribute("fill", "url('#animated-diff-gradient')"), s.textContent = o.getAttribute("data-disable-with") || "", o.disabled = !0;
                            const r = new URL(t.getAttribute("data-fragment-url") || "", window.location.origin);
                            return t.src = r.toString(), t.data
                        }(t);
                        const e = v(document, c);
                        e instanceof HTMLElement && Ve(e)
                    } catch (m) {
                        Ve(a)
                    }
                    return
                }
                await
                function(e, t) {
                    return Promise.all(e.map((e => Qe(e, t))))
                }(u, i);
                const d = v(document, c);
                Ye(a, o, s, r).length ? Ke(e, t) : d ? Ve(d) : t < 1 && Ke(e, t + 1)
            }
            async function Qe(e, t) {
                let n;
                if (t) {
                    const o = "R" === t.slice(-1) ? "data-right-range" : "data-left-range",
                        s = e.getAttribute(o) || "";
                    n = t + parseInt(s.split("-")[0], 10)
                } else n = e.hash.slice(1);
                const o = e.getAttribute("data-url"),
                    s = new URL(o, window.location.origin),
                    r = new URLSearchParams(s.search.slice(1));
                r.append("anchor", n), s.search = r.toString(), "" !== window.location.hash && window.history.replaceState(null, "", "#");
                const c = await f(document, s.toString()),
                    i = e.closest(".js-file"),
                    l = e.closest(".js-expandable-line"),
                    a = Je(l, ".file-diff-line");
                a ? E(a, (() => {
                        l.replaceWith(c)
                    })) : l.replaceWith(c),
                    function(e) {
                        const t = e.querySelector(".js-expand-full-wrapper");
                        if (!t) return;
                        0 === Array.from(e.querySelectorAll(".js-expand")).length && t.parentElement.removeChild(t)
                    }(i)
            }

            function Je(e, t) {
                const n = e.nextElementSibling;
                return n instanceof HTMLElement && n.matches(t) ? n : null
            }

            function Ye(e, t, n, o) {
                const s = parseInt(n, 10),
                    r = parseInt(o || "", 10);
                return Array.from(e.querySelectorAll(".js-expand")).filter((e => {
                    const n = "R" === t ? "data-right-range" : "data-left-range",
                        o = (e.getAttribute(n) || "").split("-"),
                        c = parseInt(o[0], 10),
                        i = parseInt(o[1], 10);
                    return c <= s && s <= i || (s <= c && i <= r || c <= r && r <= i)
                }))
            }
            window.customElements.get("progress-bar") || (window.ProgressBarElement = ProgressBarElement, window.customElements.define("progress-bar", ProgressBarElement)), document.addEventListener("pjax:end", (function() {
                for (const e of document.querySelectorAll(".js-pull-refresh-on-pjax")) k(e)
            })), e("click", ".js-dismiss-multi-line-suggestion-onboarding-notice", (async function(e) {
                const t = e.currentTarget.getAttribute("data-url"),
                    n = e.currentTarget.parentElement.querySelector(".js-data-url-csrf"),
                    o = new FormData;
                o.append("notice", "multi_line_suggestions");
                if ((await fetch(t, {
                        method: "POST",
                        mode: "same-origin",
                        body: o,
                        headers: {
                            "Scoped-CSRF-Token": n.value,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })).ok) {
                    const e = document.querySelectorAll(".js-multi-line-suggestion-onboarding-notice");
                    for (const t of e) t.remove()
                }
            })), t(".js-updating-pull-request-commits-count", {
                add(e) {
                    const t = e.textContent,
                        n = document.querySelectorAll(".js-updateable-pull-request-commits-count");
                    for (const o of n) o.textContent = t
                }
            }), (async () => {
                if (await C, window.performance && window.performance.navigation && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
                    const e = document.getElementById("js-report-pull-request-refresh");
                    e && _(e)
                }
            })(), a((function() {
                const e = function(e) {
                    if (!e) return;
                    const t = I(e);
                    if (!t) return;
                    const n = t[1],
                        o = t[2],
                        s = t[3],
                        r = t[5];
                    return {
                        anchor: n,
                        side: o,
                        line: s,
                        lastLine: r,
                        hashFragment: n + o + s,
                        partialHashFragment: n + o
                    }
                }(window.location.hash);
                e && (v(document, e.hashFragment) && !e.lastLine || Ke(e, 0))
            })), e("click", ".js-expand", (function(e) {
                e.preventDefault(), Qe(e.currentTarget)
            })), e("click", ".js-expand-full", (async e => {
                e.preventDefault();
                const t = e.currentTarget,
                    n = t.closest(".file"),
                    o = t.getAttribute("data-url"),
                    s = function(e) {
                        const t = Array.from(e.querySelectorAll(".js-expand")).map(((e, t) => function(e, t) {
                            const n = new URL(e.getAttribute("data-url"), window.location.origin).searchParams;
                            return {
                                position: t.toString(),
                                left: {
                                    start: n.get("last_left"),
                                    end: n.get("left"),
                                    size: n.get("left_hunk_size")
                                },
                                right: {
                                    start: n.get("last_right"),
                                    end: n.get("right"),
                                    size: n.get("right_hunk_size")
                                }
                            }
                        }(e, t)));
                        let n = !1;
                        const o = [];
                        for (let s = 0; s < t.length; s++) {
                            if (n) {
                                n = !1;
                                continue
                            }
                            const e = t[s],
                                r = t[s + 1];
                            n = r && e.left.start === r.left.start && e.left.end === r.left.end && e.right.start === r.right.start && e.right.end === r.right.end, o.push(e)
                        }
                        return o
                    }(n);
                if (0 === s.length) return;
                const r = new URL(o, window.location.origin),
                    c = new URLSearchParams(r.search.slice(1));
                for (const u of s) c.append("ranges[]last_left", u.left.start), c.append("ranges[]left", u.left.end), c.append("ranges[]left_hunk_size", u.left.size), c.append("ranges[]last_right", u.right.start), c.append("ranges[]right", u.right.end), c.append("ranges[]right_hunk_size", u.right.size), c.append("ranges[]position", u.position);
                r.search = c.toString();
                const i = await async function(e, t) {
                        const n = await self.fetch(t, {
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json"
                            }
                        });
                        if (!n.ok) throw new Error("Request to blob_expand failed with status code " + n.status);
                        return M(H(e), n, !0), (await n.json()).map((t => Object.assign(Object.assign({}, t), {
                            content: p(e, t.content)
                        })))
                    }(document, r.toString()),
                    l = [...n.querySelectorAll(".js-expand")];
                for (const {
                        content: u,
                        position: d
                    } of i) {
                    const e = l[parseInt(d, 10)];
                    if (!e) return;
                    const t = e.closest(".js-expandable-line"),
                        n = Je(t, ".file-diff-line");
                    n ? E(n, (() => {
                        t.after(u)
                    })) : t.after(u), t.setAttribute("hidden", "true")
                }
                t.setAttribute("hidden", "true");
                const a = n.querySelector(".js-collapse-diff");
                a && a.removeAttribute("hidden"), n.classList.add("open"), n.classList.add("Details--on")
            })), e("click", ".js-collapse-diff", (e => {
                const t = e.currentTarget,
                    n = t.closest(".file"),
                    o = [...n.querySelectorAll('.blob-expanded[data-expanded-full="true"]')];
                for (const c of o) c.parentElement.removeChild(c);
                const s = [...n.querySelectorAll(".js-expandable-line")];
                for (const c of s) c.removeAttribute("hidden");
                t.setAttribute("hidden", "true");
                const r = n.querySelector(".js-expand-full");
                r && r.removeAttribute("hidden")
            }));
            class DiffTableSideProtection {
                constructor(e) {
                    this.selection = e, this.anchorNode = e.anchorNode
                }
                range() {
                    var e;
                    let t;
                    return (null === (e = this.selection) || void 0 === e ? void 0 : e.rangeCount) > 0 && (t = this.selection.getRangeAt(0)), t
                }
                canBeSideProtected() {
                    try {
                        return !(!this.hasSelectedText() || !this.confinedTable())
                    } catch (e) {
                        return !1
                    }
                }
                isSideProtected() {
                    var e;
                    try {
                        return !!(null === (e = this.confinedTable()) || void 0 === e ? void 0 : e.getAttribute("data-lock-side-selection"))
                    } catch (t) {
                        return !1
                    }
                }
                hasSelectedText() {
                    const e = this.range();
                    return !!e && e.toString().length > 0
                }
                clearSelectedText() {
                    this.selection.removeAllRanges()
                }
                confinedTable() {
                    var e, t;
                    const n = null === (t = null === (e = this.range()) || void 0 === e ? void 0 : e.commonAncestorContainer) || void 0 === t ? void 0 : t.parentElement;
                    if (null == n ? void 0 : n.matches(".diff-table")) return n;
                    if (null == n ? void 0 : n.matches(".js-file-content")) {
                        return null == n ? void 0 : n.querySelector("table.diff-table")
                    }
                    return null == n ? void 0 : n.closest("table.diff-table")
                }
                unprotectedSide() {
                    var e, t;
                    let n;
                    return n = this.anchorNode instanceof HTMLTableCellElement ? this.anchorNode.closest("td[data-split-side]") : null === (t = null === (e = this.anchorNode) || void 0 === e ? void 0 : e.parentElement) || void 0 === t ? void 0 : t.closest("td[data-split-side]"), null == n ? void 0 : n.getAttribute("data-split-side")
                }
                protectedSide() {
                    return "left" === this.unprotectedSide() ? "right" : "left"
                }
                applySideProtection() {
                    if (this.unprotectedSide()) {
                        const e = this.confinedTable(),
                            t = this.unprotectedSide();
                        e && t && e.setAttribute("data-lock-side-selection", t)
                    }
                }
                clearSideProtection() {
                    const e = document.querySelectorAll("table[data-lock-side-selection]");
                    for (const t of e) {
                        t.removeAttribute("data-lock-side-selection")
                    }
                }
                filteredTableRows() {
                    const e = [];
                    for (let t = 0; t < this.selection.rangeCount; t++) {
                        const n = this.selection.getRangeAt(t).cloneContents();
                        if (n.querySelectorAll("td").length) {
                            const t = `td[data-split-side=${this.protectedSide()}], td.js-linkable-line-number, td.empty-cell`,
                                o = n.querySelectorAll(t);
                            for (const e of o) e.parentNode && e.parentNode.removeChild(e);
                            e.push(...n.children)
                        } else {
                            const t = document.createElement("TR"),
                                o = document.createElement("TD");
                            o.append(...n.childNodes), t.append(o), e.push(t)
                        }
                    }
                    return e
                }
                contentToString() {
                    var e;
                    const t = [],
                        n = document.createElement("table");
                    n.classList.add("invisible"), n.append(...this.filteredTableRows()), null === (e = this.confinedTable()) || void 0 === e || e.append(n);
                    const o = n.children;
                    for (let s = 0; s < o.length; s++) {
                        const e = o[s].innerText;
                        e && ("\n" === e ? t.push("") : t.push(e))
                    }
                    return n.remove(), t.join("\n")
                }
            }

            function Ge(e) {
                return Math.floor(e / 2)
            }

            function Ze(e, t) {
                const n = e.parentElement;
                if (!n) return;
                const o = n.children;
                let s;
                if (4 === o.length)
                    for (let r = 0, c = o.length; r < c; r++) {
                        o[r] === e && (s = Ge(r))
                    }
                for (let r = 0, c = o.length; r < c; r++) {
                    const e = o[r];
                    null != s && Ge(r) !== s || e.classList.toggle("is-hovered", t)
                }
            }

            function et(e) {
                var t;
                const n = document.getSelection();
                if (n) {
                    const o = new DiffTableSideProtection(n);
                    o.isSideProtected() && (null === (t = e.clipboardData) || void 0 === t || t.setData("text/plain", o.contentToString()), e.preventDefault())
                }
            }

            function tt(e) {
                const t = document.getSelection(),
                    n = 2 === e.button;
                if (t && !n) {
                    const e = new DiffTableSideProtection(t);
                    e.isSideProtected() && (e.clearSelectedText(), e.clearSideProtection())
                }
            }

            function nt() {
                const e = document.getSelection();
                if (e) {
                    const t = new DiffTableSideProtection(e);
                    t.canBeSideProtected() ? t.applySideProtection() : t.clearSideProtection()
                }
            }

            function ot() {
                const e = document.querySelector("meta[name=diff-view]"),
                    t = e && e instanceof HTMLMetaElement ? e.content : "",
                    n = document.querySelector(".js-file-diff-split"),
                    o = !!("split" === t && n || document.querySelector(".wants-full-width-container"));
                document.body.classList.toggle("full-width", o)
            }

            function st(e) {
                const t = e.some((e => e.checked));
                for (const n of e) m(n, !t)
            }

            function rt(e) {
                const t = e.parentElement,
                    n = t.querySelectorAll("td.js-line-comments").length,
                    o = t.querySelectorAll("td.js-line-comments.is-collapsed").length;
                t.classList.toggle("is-collapsed", o > 0 && n === o)
            }
            t(".diff-table", (function(e) {
                let t = null;

                function n() {
                    t && Ze(t, !1), t = null
                }

                function o(e) {
                    t && Ze(t, !1), e.target instanceof HTMLElement && (t = e.target.closest("td.blob-code"), t && Ze(t, !0))
                }
                return {
                    add: function() {
                        e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", n), e.addEventListener("mouseover", o)
                    },
                    remove: function() {
                        e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", n), e.removeEventListener("mouseover", o)
                    }
                }
            })), t(".js-diff-container", (function(e) {
                return {
                    add: function() {
                        e.querySelectorAll(".js-feature-enabled-split-diff-copy-protection") && (document.addEventListener("copy", et), document.addEventListener("mousedown", tt), document.addEventListener("selectionchange", nt))
                    },
                    remove: function() {
                        e.querySelectorAll(".js-feature-enabled-split-diff-copy-protection") && (document.removeEventListener("copy", et), document.removeEventListener("mousedown", tt), document.removeEventListener("selectionchange", nt))
                    }
                }
            })), t("meta[name=diff-view]", {
                add: ot,
                remove: ot
            }), t(".js-file-diff-split", {
                add: ot,
                remove: ot
            }), t(".js-compare-tab.selected", {
                add: ot,
                remove: ot
            }), t(".wants-full-width-container", {
                add: ot,
                remove: ot
            }), e("change", ".js-toggle-file-notes", (function(e) {
                const t = e.currentTarget;
                t.closest(".file").classList.toggle("show-inline-notes", t.checked)
            })), e("click", ".js-toggle-all-file-notes", (function(e) {
                st(Array.from(document.querySelectorAll(".js-toggle-file-notes"))), e.preventDefault()
            })), e("click", ".js-toggle-all-file-annotations", (function(e) {
                st(Array.from(document.querySelectorAll(".js-toggle-file-check-annotations"))), e.preventDefault()
            })), t(".js-inline-comments-container", (function(e) {
                let t;
                const n = e.closest(".file");
                if (n) {
                    return {
                        add: t = function() {
                            const e = null != n.querySelector(".js-inline-comments-container");
                            n.classList.toggle("has-inline-notes", e)
                        },
                        remove: t
                    }
                }
            })), e("change", ".js-toggle-file-check-annotations", (function(e) {
                const t = e.currentTarget,
                    n = t.closest(".file").querySelectorAll(".js-inline-annotations");
                for (const o of n) o instanceof HTMLElement && (o.hidden = !t.checked)
            })), t("td.js-line-comments.is-collapsed", {
                add: rt,
                remove: rt
            });
            class InputDemuxBaseChangeContext {
                onItemSelected(e) {
                    if (!(e.currentTarget instanceof HTMLButtonElement)) return;
                    const t = e.currentTarget.querySelector(".js-ref-name").textContent;
                    document.querySelector(".js-new-base-branch").value = btoa(t || "");
                    const n = document.querySelector(".js-change-base-template").content.cloneNode(!0);
                    n instanceof DocumentFragment && A({
                        content: n
                    })
                }
            }
            let ct = class InputDemuxContextWrapperElement extends HTMLElement {
                connectedCallback() {
                    const e = this.getAttribute("data-context-type"),
                        t = {
                            baseChange: new InputDemuxBaseChangeContext
                        };
                    this.context = t[e]
                }
                onItemSelected(e) {
                    this.context.onItemSelected(e)
                }
            };
            ct = r([c], ct)
        }
    }
}));
//# sourceMappingURL=diffs-9a01a4fc.js.map