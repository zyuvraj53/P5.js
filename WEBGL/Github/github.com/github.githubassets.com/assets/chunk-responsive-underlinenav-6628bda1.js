System.register(["./chunk-vendor.js", "./chunk-frameworks.js"], (function(e) {
    "use strict";
    var t, n, i, s;
    return {
        setters: [function(e) {
            t = e.o
        }, function(e) {
            n = e.b, i = e.H, s = e.aB
        }],
        execute: function() {
            async function o(e) {
                await i, c(e)
            }

            function r(e, t) {
                e.style.visibility = t ? "hidden" : "";
                const n = e.getAttribute("data-tab-item");
                if (n) {
                    const e = document.querySelector(`[data-menu-item=${n}]`);
                    e instanceof HTMLElement && (e.hidden = !t)
                }
            }

            function c(e) {
                const t = e.querySelectorAll(".js-responsive-underlinenav-item"),
                    n = e.querySelector(".js-responsive-underlinenav-overflow"),
                    i = s(n, e);
                if (!i) return;
                let o = !1;
                for (const c of t) {
                    const t = s(c, e);
                    if (t) {
                        const e = t.left + c.offsetWidth >= i.left;
                        r(c, e), o = o || e
                    }
                }
                n.style.visibility = o ? "" : "hidden"
            }
            e("a", o), t(".js-responsive-underlinenav", {
                constructor: HTMLElement,
                subscribe: e => (o(e), n(window, "resize", (() => c(e))))
            })
        }
    }
}));
//# sourceMappingURL=chunk-responsive-underlinenav-5f8ddd37.js.map