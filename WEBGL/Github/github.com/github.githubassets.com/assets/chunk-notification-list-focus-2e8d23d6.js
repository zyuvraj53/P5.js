System.register(["./chunk-frameworks.js"], (function(t) {
    "use strict";
    var n, i;
    return {
        setters: [function(t) {
            n = t.x, i = t.f
        }],
        execute: function() {
            function e() {
                return document.querySelector(".js-notifications-list .js-navigation-container")
            }

            function o(t) {
                return Array.from(t.querySelectorAll(".js-navigation-item")).filter(n)
            }
            t({
                g: function(t, n) {
                    const i = t || e();
                    if (!i) return {};
                    const r = i.querySelector(n || ".js-notifications-list-item.navigation-focus");
                    return r instanceof HTMLElement ? {
                        id: r.getAttribute("data-notification-id"),
                        position: o(i).indexOf(r)
                    } : {}
                },
                r: function({
                    id: t,
                    position: n
                }, r) {
                    const c = r || e();
                    if (!(c instanceof HTMLElement)) return;
                    const s = o(c);
                    let u;
                    t && (u = s.find((n => n.getAttribute("data-notification-id") === t)));
                    u || null == n || (u = s[Math.min(n, s.length - 1)]);
                    u instanceof HTMLElement && i(c, u)
                }
            })
        }
    }
}));
//# sourceMappingURL=chunk-notification-list-focus-0d420c5b.js.map