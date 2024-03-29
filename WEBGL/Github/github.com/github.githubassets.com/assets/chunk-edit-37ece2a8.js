System.register(["./chunk-vendor.js", "./chunk-frameworks.js"], (function(e) {
    "use strict";
    var t, s, n, o, c, i, r, m;
    return {
        setters: [function(e) {
            t = e.a, s = e.r, n = e.o, o = e.f
        }, function(e) {
            c = e.c, i = e.u, r = e.e, m = e.h
        }],
        execute: function() {
            e("h", l);
            let a = [];

            function l(e) {
                const t = e.currentTarget.closest("form"),
                    s = e.currentTarget.getAttribute("data-confirm-text");
                if (m(t) && !confirm(s)) return !1;
                for (const o of t.querySelectorAll("input, textarea")) {
                    const e = o;
                    e.value = e.defaultValue, e.classList.contains("session-resumable-canceled") && (e.classList.add("js-session-resumable"), e.classList.remove("session-resumable-canceled"))
                }
                const n = e.currentTarget.closest(".js-comment");
                return n && n.classList.remove("is-comment-editing"), !0
            }

            function u(e) {
                const t = e.querySelector("ol");
                if (t) {
                    t.innerHTML = "";
                    const e = a.map((e => {
                        const t = document.createElement("li");
                        return t.textContent = e, t
                    }));
                    for (const s of e) t.appendChild(s)
                }
                e.hidden = !1
            }
            t("click", ".js-comment-edit-button", (function(e) {
                const t = e.currentTarget.closest(".js-comment");
                t.classList.add("is-comment-editing"), t.querySelector(".js-write-tab").click();
                const s = t.querySelector(".js-comment-field");
                s.focus(), o(s, "change");
                const n = e.currentTarget.closest(".js-dropdown-details");
                n && n.removeAttribute("open")
            })), t("click", ".js-comment-hide-button", (function(e) {
                const t = e.currentTarget.closest(".js-comment").querySelector(".js-minimize-comment");
                t && t.classList.remove("d-none");
                const s = e.currentTarget.closest(".js-dropdown-details");
                s && s.removeAttribute("open")
            })), t("click", ".js-comment-hide-minimize-form", (function(e) {
                e.currentTarget.closest(".js-minimize-comment").classList.add("d-none")
            })), t("click", ".js-comment-cancel-button", l), t("click", ".js-cancel-issue-edit", (function(e) {
                e.currentTarget.closest(".js-details-container").querySelector(".js-comment-form-error").hidden = !0
            })), s(".js-comment-delete, .js-comment .js-comment-update, .js-issue-update, .js-comment-minimize, .js-comment-unminimize", (function(e, t, s) {
                const n = e.closest(".js-comment");
                n.classList.add("is-comment-loading");
                const o = n.getAttribute("data-body-version");
                o && s.headers.set("X-Body-Version", o)
            })), s(".js-comment .js-comment-update", (async function(e, t) {
                let s;
                const n = e.closest(".js-comment"),
                    o = n.querySelector(".js-comment-update-error"),
                    i = n.querySelector(".js-comment-body-error");
                o instanceof HTMLElement && (o.hidden = !0), i instanceof HTMLElement && (i.hidden = !0), a = [];
                try {
                    s = await t.json()
                } catch (j) {
                    if (422 !== j.response.status) throw j; {
                        const e = JSON.parse(j.response.text);
                        if (e.errors) return void(o instanceof HTMLElement && (o.textContent = "There was an error posting your comment: " + e.errors.join(", "), o.hidden = !1))
                    }
                }
                if (!s) return;
                const r = s.json;
                r.errors && r.errors.length > 0 && (a = r.errors, u(i));
                const m = n.querySelector(".js-comment-body");
                m && r.body && (m.innerHTML = r.body), n.setAttribute("data-body-version", r.newBodyVersion);
                const l = n.querySelector(".js-body-version");
                l instanceof HTMLInputElement && (l.value = r.newBodyVersion);
                for (const c of n.querySelectorAll("input, textarea")) {
                    const e = c;
                    e.defaultValue = e.value
                }
                n.classList.remove("is-comment-stale", "is-comment-editing");
                const d = n.querySelector(".js-comment-edit-history");
                if (d) {
                    const e = await c(document, r.editUrl);
                    d.innerHTML = "", d.append(e)
                }
            })), n(".js-comment-body-error", {
                add: e => {
                    a && a.length > 0 && u(e)
                }
            }), s(".js-comment .js-comment-delete, .js-comment .js-comment-update, .js-comment-minimize, .js-comment-unminimize", (async function(e, t) {
                const s = e.closest(".js-comment");
                try {
                    await t.text()
                } catch (n) {
                    if (422 !== n.response.status) throw n; {
                        let e;
                        try {
                            e = JSON.parse(n.response.text)
                        } catch (o) {}
                        e && e.stale && s.classList.add("is-comment-stale")
                    }
                }
                s.classList.remove("is-comment-loading")
            })), s(".js-discussion-comment-unminimize, .js-discussion-comment-minimize", (async function(e, t) {
                const s = e.closest(".js-discussion-comment"),
                    n = s.querySelector(".js-discussion-comment-error");
                n && (n.hidden = !0);
                try {
                    const e = await t.html();
                    s.replaceWith(e.html)
                } catch (o) {
                    if (!(o.response.status >= 400 && o.response.status < 500)) throw o;
                    if (o.response.html) {
                        const e = o.response.html.querySelector(".js-discussion-comment").getAttribute("data-error");
                        n instanceof HTMLElement && (n.textContent = e, n.hidden = !1)
                    }
                }
            })), s(".js-comment-delete", (async function(e, t) {
                await t.json();
                let s = e.closest(".js-comment-delete-container");
                s || (s = e.closest(".js-comment-container") || e.closest(".js-line-comments"), s && 1 !== s.querySelectorAll(".js-comment").length && (s = e.closest(".js-comment"))), s.remove()
            })), s(".js-issue-update", (async function(e, t) {
                var s, n, o;
                const c = e.closest(".js-details-container"),
                    i = c.querySelector(".js-comment-form-error");
                let r;
                try {
                    r = await t.json()
                } catch (a) {
                    i.textContent = (null === (o = null === (n = null === (s = a.response) || void 0 === s ? void 0 : s.json) || void 0 === n ? void 0 : n.errors) || void 0 === o ? void 0 : o[0]) || "Something went wrong. Please try again.", i.hidden = !1
                }
                if (!r) return;
                c.classList.remove("open"), i.hidden = !0;
                const m = r.json;
                if (null != m.issue_title) {
                    c.querySelector(".js-issue-title").textContent = m.issue_title;
                    const e = c.closest(".js-issues-results");
                    if (e) {
                        if (e.querySelector(".js-merge-pr.is-merging")) {
                            const t = e.querySelector(".js-merge-pull-request textarea");
                            t instanceof HTMLTextAreaElement && t.value === t.defaultValue && (t.value = t.defaultValue = m.issue_title)
                        } else if (e.querySelector(".js-merge-pr.is-squashing")) {
                            const t = e.querySelector(".js-merge-pull-request .js-merge-title");
                            t instanceof HTMLInputElement && t.value === t.defaultValue && (t.value = t.defaultValue = m.default_squash_commit_title)
                        }
                        const t = e.querySelector("button[value=merge]");
                        t && t.setAttribute("data-input-message-value", m.issue_title);
                        const s = e.querySelector("button[value=squash]");
                        s && s.setAttribute("data-input-title-value", m.default_squash_commit_title)
                    }
                }
                document.title = m.page_title;
                for (const l of e.elements)(l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement) && (l.defaultValue = l.value)
            })), s(".js-comment-minimize", (async function(e, t) {
                await t.json();
                const s = e.closest(".js-comment"),
                    n = s.querySelector(".js-minimize-comment");
                if (n && n.classList.contains("js-update-minimized-content")) {
                    const t = e.querySelector("input[type=submit], button[type=submit]");
                    t && t.classList.add("disabled");
                    const n = s.closest(".js-comment-container");
                    n && await i(n)
                } else {
                    n && n.classList.add("d-none");
                    const t = e.closest(".unminimized-comment");
                    t.classList.add("d-none"), t.classList.remove("js-comment");
                    const s = e.closest(".js-minimizable-comment-group").querySelector(".minimized-comment");
                    s && s.classList.remove("d-none"), s && s.classList.add("js-comment")
                }
            })), s(".js-comment-unminimize", (async function(e, t) {
                await t.json();
                const s = e.closest(".js-minimizable-comment-group"),
                    n = s.querySelector(".unminimized-comment"),
                    o = s.querySelector(".minimized-comment");
                if (n) n.classList.remove("d-none"), n.classList.add("js-comment"), o && o.classList.add("d-none"), o && o.classList.remove("js-comment");
                else {
                    if (o) {
                        const e = o.querySelector(".timeline-comment-actions");
                        e && e.classList.add("d-none"), o.classList.remove("js-comment")
                    }
                    const e = s.closest(".js-comment-container");
                    await i(e)
                }
            })), t("details-menu-select", ".js-comment-edit-history-menu", (e => {
                const t = e.detail.relatedTarget.getAttribute("data-edit-history-url");
                if (!t) return;
                e.preventDefault();
                const s = c(document, t);
                r({
                    content: s,
                    dialogClass: "Box-overlay--wide"
                })
            }), {
                capture: !0
            })
        }
    }
}));
//# sourceMappingURL=chunk-edit-caeaa19c.js.map