/*
 * jquery.tools 1.1.2 - The missing UI library for the Web
 * 
 * [tools.tabs-1.0.4, tools.tabs.slideshow-1.0.2, tools.tabs.history-1.0.2, tools.tooltip-1.1.2, tools.tooltip.slide-1.0.0, tools.tooltip.dynamic-1.0.1, tools.scrollable-1.1.2, tools.scrollable.circular-0.5.1, tools.scrollable.autoscroll-1.0.1, tools.scrollable.navigator-1.0.2, tools.scrollable.mousewheel-1.0.1, tools.overlay-1.1.2, tools.overlay.gallery-1.0.0, tools.overlay.apple-1.0.1, tools.expose-1.0.5]
 * 
 * Copyright (c) 2009 Tero Piirainen
 * http://flowplayer.org/tools/
 *
 * Dual licensed under MIT and GPL 2+ licenses
 * http://www.opensource.org/licenses
 * 
 * -----
 * 
 * Flowplayer 3.1.4 - Flash Video Player for the Web
 * 
 * [flowplayer.core-3.1.4, flowplayer.controls-3.0.2, flowplayer.playlist-3.0.7, flowplayer.embed-3.0.2]
 * 
 * Copyright (c) 2009 Flowplayer Ltd
 * Licensed under GPL 3+ license
 * http://flowplayer.org/download/license_gpl.html
 * 
 * -----
 * 
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Sizzle CSS Selector Engine - v0.9.3
 * Copyright 2009, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 * More information: http://sizzlejs.com/
 * 
 * -----
 * 
 * jquery.event.wheel.js - rev 1 
 * Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
 * Liscensed under the MIT License (MIT-LICENSE.txt)
 * http://www.opensource.org/licenses/mit-license.php
 * Created: 2008-07-01 | Updated: 2008-07-14
 * 
 * -----
 * 
 * File generated: Thu Oct 08 05:28:59 GMT+00:00 2009
 */
 (function () {
    var l = this,
        g, y = l.jQuery,
        p = l.$,
        o = l.jQuery = l.$ = function (E, F) {
        return new o.fn.init(E, F)
    },
        D = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,
        f = /^.[^:#\[\.,]*$/;
    o.fn = o.prototype = {
        init: function (E, H) {
            E = E || document;
            if (E.nodeType) {
                this[0] = E;
                this.length = 1;
                this.context = E;
                return this
            }
            if (typeof E === "string") {
                var G = D.exec(E);
                if (G && (G[1] || !H)) {
                    if (G[1]) {
                        E = o.clean([G[1]], H)
                    } else {
                        var I = document.getElementById(G[3]);
                        if (I && I.id != G[3]) {
                            return o().find(E)
                        }
                        var F = o(I || []);
                        F.context = document;
                        F.selector = E;
                        return F
                    }
                } else {
                    return o(H).find(E)
                }
            } else {
                if (o.isFunction(E)) {
                    return o(document).ready(E)
                }
            }
            if (E.selector && E.context) {
                this.selector = E.selector;
                this.context = E.context
            }
            return this.setArray(o.isArray(E) ? E : o.makeArray(E))
        },
        selector: "",
        jquery: "1.3.2",
        size: function () {
            return this.length
        },
        get: function (E) {
            return E === g ? Array.prototype.slice.call(this) : this[E]
        },
        pushStack: function (F, H, E) {
            var G = o(F);
            G.prevObject = this;
            G.context = this.context;
            if (H === "find") {
                G.selector = this.selector + (this.selector ? " " : "") + E
            } else {
                if (H) {
                    G.selector = this.selector + "." + H + "(" + E + ")"
                }
            }
            return G
        },
        setArray: function (E) {
            this.length = 0;
            Array.prototype.push.apply(this, E);
            return this
        },
        each: function (F, E) {
            return o.each(this, F, E)
        },
        index: function (E) {
            return o.inArray(E && E.jquery ? E[0] : E, this)
        },
        attr: function (F, H, G) {
            var E = F;
            if (typeof F === "string") {
                if (H === g) {
                    return this[0] && o[G || "attr"](this[0], F)
                } else {
                    E = {};
                    E[F] = H
                }
            }
            return this.each(function (I) {
                for (F in E) {
                    o.attr(G ? this.style : this, F, o.prop(this, E[F], G, I, F))
                }
            })
        },
        css: function (E, F) {
            if ((E == "width" || E == "height") && parseFloat(F) < 0) {
                F = g
            }
            return this.attr(E, F, "curCSS")
        },
        text: function (F) {
            if (typeof F !== "object" && F != null) {
                return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(F))
            }
            var E = "";
            o.each(F || this, function () {
                o.each(this.childNodes, function () {
                    if (this.nodeType != 8) {
                        E += this.nodeType != 1 ? this.nodeValue : o.fn.text([this])
                    }
                })
            });
            return E
        },
        wrapAll: function (E) {
            if (this[0]) {
                var F = o(E, this[0].ownerDocument).clone();
                if (this[0].parentNode) {
                    F.insertBefore(this[0])
                }
                F.map(function () {
                    var G = this;
                    while (G.firstChild) {
                        G = G.firstChild
                    }
                    return G
                }).append(this)
            }
            return this
        },
        wrapInner: function (E) {
            return this.each(function () {
                o(this).contents().wrapAll(E)
            })
        },
        wrap: function (E) {
            return this.each(function () {
                o(this).wrapAll(E)
            })
        },
        append: function () {
            return this.domManip(arguments, true, function (E) {
                if (this.nodeType == 1) {
                    this.appendChild(E)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (E) {
                if (this.nodeType == 1) {
                    this.insertBefore(E, this.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, false, function (E) {
                this.parentNode.insertBefore(E, this)
            })
        },
        after: function () {
            return this.domManip(arguments, false, function (E) {
                this.parentNode.insertBefore(E, this.nextSibling)
            })
        },
        end: function () {
            return this.prevObject || o([])
        },
        push: [].push,
        sort: [].sort,
        splice: [].splice,
        find: function (E) {
            if (this.length === 1) {
                var F = this.pushStack([], "find", E);
                F.length = 0;
                o.find(E, this[0], F);
                return F
            } else {
                return this.pushStack(o.unique(o.map(this, function (G) {
                    return o.find(E, G)
                })), "find", E)
            }
        },
        clone: function (G) {
            var E = this.map(function () {
                if (!o.support.noCloneEvent && !o.isXMLDoc(this)) {
                    var I = this.outerHTML;
                    if (!I) {
                        var J = this.ownerDocument.createElement("div");
                        J.appendChild(this.cloneNode(true));
                        I = J.innerHTML
                    }
                    return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g, "").replace(/^\s*/, "")])[0]
                } else {
                    return this.cloneNode(true)
                }
            });
            if (G === true) {
                var H = this.find("*").andSelf(),
                    F = 0;
                E.find("*").andSelf().each(function () {
                    if (this.nodeName !== H[F].nodeName) {
                        return
                    }
                    var I = o.data(H[F], "events");
                    for (var K in I) {
                        for (var J in I[K]) {
                            o.event.add(this, K, I[K][J], I[K][J].data)
                        }
                    }
                    F++
                })
            }
            return E
        },
        filter: function (E) {
            return this.pushStack(o.isFunction(E) && o.grep(this, function (G, F) {
                return E.call(G, F)
            }) || o.multiFilter(E, o.grep(this, function (F) {
                return F.nodeType === 1
            })), "filter", E)
        },
        closest: function (E) {
            var G = o.expr.match.POS.test(E) ? o(E) : null,
            F = 0;
            return this.map(function () {
                var H = this;
                while (H && H.ownerDocument) {
                    if (G ? G.index(H) > -1 : o(H).is(E)) {
                        o.data(H, "closest", F);
                        return H
                    }
                    H = H.parentNode;
                    F++
                }
            })
        },
        not: function (E) {
            if (typeof E === "string") {
                if (f.test(E)) {
                    return this.pushStack(o.multiFilter(E, this, true), "not", E)
                } else {
                    E = o.multiFilter(E, this)
                }
            }
            var F = E.length && E[E.length - 1] !== g && !E.nodeType;
            return this.filter(function () {
                return F ? o.inArray(this, E) < 0 : this != E
            })
        },
        add: function (E) {
            return this.pushStack(o.unique(o.merge(this.get(), typeof E === "string" ? o(E) : o.makeArray(E))))
        },
        is: function (E) {
            return !!E && o.multiFilter(E, this).length > 0
        },
        hasClass: function (E) {
            return !!E && this.is("." + E)
        },
        val: function (K) {
            if (K === g) {
                var E = this[0];
                if (E) {
                    if (o.nodeName(E, "option")) {
                        return (E.attributes.value || {}).specified ? E.value : E.text
                    }
                    if (o.nodeName(E, "select")) {
                        var I = E.selectedIndex,
                            L = [],
                            M = E.options,
                            H = E.type == "select-one";
                        if (I < 0) {
                            return null
                        }
                        for (var F = H ? I : 0, J = H ? I + 1 : M.length; F < J; F++) {
                            var G = M[F];
                            if (G.selected) {
                                K = o(G).val();
                                if (H) {
                                    return K
                                }
                                L.push(K)
                            }
                        }
                        return L
                    }
                    return (E.value || "").replace(/\r/g, "")
                }
                return g
            }
            if (typeof K === "number") {
                K += ""
            }
            return this.each(function () {
                if (this.nodeType != 1) {
                    return
                }
                if (o.isArray(K) && /radio|checkbox/.test(this.type)) {
                    this.checked = (o.inArray(this.value, K) >= 0 || o.inArray(this.name, K) >= 0)
                } else {
                    if (o.nodeName(this, "select")) {
                        var N = o.makeArray(K);
                        o("option", this).each(function () {
                            this.selected = (o.inArray(this.value, N) >= 0 || o.inArray(this.text, N) >= 0)
                        });
                        if (!N.length) {
                            this.selectedIndex = -1
                        }
                    } else {
                        this.value = K
                    }
                }
            })
        },
        html: function (E) {
            return E === g ? (this[0] ? this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g, "") : null) : this.empty().append(E)
        },
        replaceWith: function (E) {
            return this.after(E).remove()
        },
        eq: function (E) {
            return this.slice(E, +E + 1)
        },
        slice: function () {
            return this.pushStack(Array.prototype.slice.apply(this, arguments), "slice", Array.prototype.slice.call(arguments).join(","))
        },
        map: function (E) {
            return this.pushStack(o.map(this, function (G, F) {
                return E.call(G, F, G)
            }))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        },
        domManip: function (J, M, L) {
            if (this[0]) {
                var I = (this[0].ownerDocument || this[0]).createDocumentFragment(),
                    F = o.clean(J, (this[0].ownerDocument || this[0]), I),
                    H = I.firstChild;
                if (H) {
                    for (var G = 0, E = this.length; G < E; G++) {
                        L.call(K(this[G], H), this.length > 1 || G > 0 ? I.cloneNode(true) : I)
                    }
                }
                if (F) {
                    o.each(F, z)
                }
            }
            return this;

            function K(N, O) {
                return M && o.nodeName(N, "table") && o.nodeName(O, "tr") ? (N.getElementsByTagName("tbody")[0] || N.appendChild(N.ownerDocument.createElement("tbody"))) : N
            }
        }
    };
    o.fn.init.prototype = o.fn;

    function z(E, F) {
        if (F.src) {
            o.ajax({
                url: F.src,
                async: false,
                dataType: "script"
            })
        } else {
            o.globalEval(F.text || F.textContent || F.innerHTML || "")
        }
        if (F.parentNode) {
            F.parentNode.removeChild(F)
        }
    }
    function e() {
        return +new Date
    }
    o.extend = o.fn.extend = function () {
        var J = arguments[0] || {},
            H = 1,
            I = arguments.length,
            E = false,
            G;
        if (typeof J === "boolean") {
            E = J;
            J = arguments[1] || {};
            H = 2
        }
        if (typeof J !== "object" && !o.isFunction(J)) {
            J = {}
        }
        if (I == H) {
            J = this;
            --H
        }
        for (; H < I; H++) {
            if ((G = arguments[H]) != null) {
                for (var F in G) {
                    var K = J[F],
                        L = G[F];
                    if (J === L) {
                        continue
                    }
                    if (E && L && typeof L === "object" && !L.nodeType) {
                        J[F] = o.extend(E, K || (L.length != null ? [] : {}), L)
                    } else {
                        if (L !== g) {
                            J[F] = L
                        }
                    }
                }
            }
        }
        return J
    };
    var b = /z-?index|font-?weight|opacity|zoom|line-?height/i,
        q = document.defaultView || {},
        s = Object.prototype.toString;
    o.extend({
        noConflict: function (E) {
            l.$ = p;
            if (E) {
                l.jQuery = y
            }
            return o
        },
        isFunction: function (E) {
            return s.call(E) === "[object Function]"
        },
        isArray: function (E) {
            return s.call(E) === "[object Array]"
        },
        isXMLDoc: function (E) {
            return E.nodeType === 9 && E.documentElement.nodeName !== "HTML" || !!E.ownerDocument && o.isXMLDoc(E.ownerDocument)
        },
        globalEval: function (G) {
            if (G && /\S/.test(G)) {
                var F = document.getElementsByTagName("head")[0] || document.documentElement,
                    E = document.createElement("script");
                E.type = "text/javascript";
                if (o.support.scriptEval) {
                    E.appendChild(document.createTextNode(G))
                } else {
                    E.text = G
                }
                F.insertBefore(E, F.firstChild);
                F.removeChild(E)
            }
        },
        nodeName: function (F, E) {
            return F.nodeName && F.nodeName.toUpperCase() == E.toUpperCase()
        },
        each: function (G, K, F) {
            var E, H = 0,
                I = G.length;
            if (F) {
                if (I === g) {
                    for (E in G) {
                        if (K.apply(G[E], F) === false) {
                            break
                        }
                    }
                } else {
                    for (; H < I;) {
                        if (K.apply(G[H++], F) === false) {
                            break
                        }
                    }
                }
            } else {
                if (I === g) {
                    for (E in G) {
                        if (K.call(G[E], E, G[E]) === false) {
                            break
                        }
                    }
                } else {
                    for (var J = G[0]; H < I && K.call(J, H, J) !== false; J = G[++H]) {}
                }
            }
            return G
        },
        prop: function (H, I, G, F, E) {
            if (o.isFunction(I)) {
                I = I.call(H, F)
            }
            return typeof I === "number" && G == "curCSS" && !b.test(E) ? I + "px" : I
        },
        className: {
            add: function (E, F) {
                o.each((F || "").split(/\s+/), function (G, H) {
                    if (E.nodeType == 1 && !o.className.has(E.className, H)) {
                        E.className += (E.className ? " " : "") + H
                    }
                })
            },
            remove: function (E, F) {
                if (E.nodeType == 1) {
                    E.className = F !== g ? o.grep(E.className.split(/\s+/), function (G) {
                        return !o.className.has(F, G)
                    }).join(" ") : ""
                }
            },
            has: function (F, E) {
                return F && o.inArray(E, (F.className || F).toString().split(/\s+/)) > -1
            }
        },
        swap: function (H, G, I) {
            var E = {};
            for (var F in G) {
                E[F] = H.style[F];
                H.style[F] = G[F]
            }
            I.call(H);
            for (var F in G) {
                H.style[F] = E[F]
            }
        },
        css: function (H, F, J, E) {
            if (F == "width" || F == "height") {
                var L, G = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                    K = F == "width" ? ["Left", "Right"] : ["Top", "Bottom"];

                function I() {
                    L = F == "width" ? H.offsetWidth : H.offsetHeight;
                    if (E === "border") {
                        return
                    }
                    o.each(K, function () {
                        if (!E) {
                            L -= parseFloat(o.curCSS(H, "padding" + this, true)) || 0
                        }
                        if (E === "margin") {
                            L += parseFloat(o.curCSS(H, "margin" + this, true)) || 0
                        } else {
                            L -= parseFloat(o.curCSS(H, "border" + this + "Width", true)) || 0
                        }
                    })
                }
                if (H.offsetWidth !== 0) {
                    I()
                } else {
                if (o.swap)
                    o.swap(H, G, I)
                }
                return Math.max(0, Math.round(L))
            }
            return o.curCSS(H, F, J)
        },
        curCSS: function (I, F, G) {
            var L, E = I.style;
            if (F == "opacity" && !o.support.opacity) {
                L = o.attr(E, "opacity");
                return L == "" ? "1" : L
            }
            if (F.match(/float/i)) {
                F = w
            }
            if (!G && E && E[F]) {
                L = E[F]
            } else {
                if (q.getComputedStyle) {
                    if (F.match(/float/i)) {
                        F = "float"
                    }
                    F = F.replace(/([A-Z])/g, "-$1").toLowerCase();
                    var M = q.getComputedStyle(I, null);
                    if (M) {
                        L = M.getPropertyValue(F)
                    }
                    if (F == "opacity" && L == "") {
                        L = "1"
                    }
                } else {
                    if (I.currentStyle) {
                        var J = F.replace(/\-(\w)/g, function (N, O) {
                            return O.toUpperCase()
                        });
                        L = I.currentStyle[F] || I.currentStyle[J];
                        if (!/^\d+(px)?$/i.test(L) && /^\d/.test(L)) {
                            var H = E.left,
                                K = I.runtimeStyle.left;
                            I.runtimeStyle.left = I.currentStyle.left;
                            E.left = L || 0;
                            L = E.pixelLeft + "px";
                            E.left = H;
                            I.runtimeStyle.left = K
                        }
                    }
                }
            }
            return L
        },
        clean: function (F, K, I) {
            K = K || document;
            if (typeof K.createElement === "undefined") {
                K = K.ownerDocument || K[0] && K[0].ownerDocument || document
            }
            if (!I && F.length === 1 && typeof F[0] === "string") {
                var H = /^<(\w+)\s*\/?>$/.exec(F[0]);
                if (H) {
                    return [K.createElement(H[1])]
                }
            }
            var G = [],
                E = [],
                L = K.createElement("div");
            o.each(F, function (P, S) {
                if (typeof S === "number") {
                    S += ""
                }
                if (!S) {
                    return
                }
                if (typeof S === "string") {
                    S = S.replace(/(<(\w+)[^>]*?)\/>/g, function (U, V, T) {
                        return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? U : V + "></" + T + ">"
                    });
                    var O = S.replace(/^\s+/, "").substring(0, 10).toLowerCase();
                    var Q = !O.indexOf("<opt") && [1, "<select multiple='multiple'>", "</select>"] || !O.indexOf("<leg") && [1, "<fieldset>", "</fieldset>"] || O.match(/^<(thead|tbody|tfoot|colg|cap)/) && [1, "<table>", "</table>"] || !O.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!O.indexOf("<td") || !O.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || !O.indexOf("<col") && [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] || !o.support.htmlSerialize && [1, "div<div>", "</div>"] || [0, "", ""];
                    L.innerHTML = Q[1] + S + Q[2];
                    while (Q[0]--) {
                        L = L.lastChild
                    }
                    if (!o.support.tbody) {
                        var R = /<tbody/i.test(S),
                            N = !O.indexOf("<table") && !R ? L.firstChild && L.firstChild.childNodes : Q[1] == "<table>" && !R ? L.childNodes : [];
                        for (var M = N.length - 1; M >= 0; --M) {
                            if (o.nodeName(N[M], "tbody") && !N[M].childNodes.length) {
                                N[M].parentNode.removeChild(N[M])
                            }
                        }
                    }
                    if (!o.support.leadingWhitespace && /^\s/.test(S)) {
                        L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]), L.firstChild)
                    }
                    S = o.makeArray(L.childNodes)
                }
                if (S.nodeType) {
                    G.push(S)
                } else {
                    G = o.merge(G, S)
                }
            });
            if (I) {
                for (var J = 0; G[J]; J++) {
                    if (o.nodeName(G[J], "script") && (!G[J].type || G[J].type.toLowerCase() === "text/javascript")) {
                        E.push(G[J].parentNode ? G[J].parentNode.removeChild(G[J]) : G[J])
                    } else {
                        if (G[J].nodeType === 1) {
                            G.splice.apply(G, [J + 1, 0].concat(o.makeArray(G[J].getElementsByTagName("script"))))
                        }
                        I.appendChild(G[J])
                    }
                }
                return E
            }
            return G
        },
        attr: function (J, G, K) {
            if (!J || J.nodeType == 3 || J.nodeType == 8) {
                return g
            }
            var H = !o.isXMLDoc(J),
                L = K !== g;
            G = H && o.props[G] || G;
            if (J.tagName) {
                var F = /href|src|style/.test(G);
                if (G == "selected" && J.parentNode) {
                    J.parentNode.selectedIndex
                }
                if (G in J && H && !F) {
                    if (L) {
                        if (G == "type" && o.nodeName(J, "input") && J.parentNode) {
                            throw "type property can't be changed"
                        }
                        J[G] = K
                    }
                    if (o.nodeName(J, "form") && J.getAttributeNode(G)) {
                        return J.getAttributeNode(G).nodeValue
                    }
                    if (G == "tabIndex") {
                        var I = J.getAttributeNode("tabIndex");
                        return I && I.specified ? I.value : J.nodeName.match(/(button|input|object|select|textarea)/i) ? 0 : J.nodeName.match(/^(a|area)$/i) && J.href ? 0 : g
                    }
                    return J[G]
                }
                if (!o.support.style && H && G == "style") {
                    return o.attr(J.style, "cssText", K)
                }
                if (L) {
                    J.setAttribute(G, "" + K)
                }
                var E = !o.support.hrefNormalized && H && F ? J.getAttribute(G, 2) : J.getAttribute(G);
                return E === null ? g : E
            }
            if (!o.support.opacity && G == "opacity") {
                if (L) {
                    J.zoom = 1;
                    J.filter = (J.filter || "").replace(/alpha\([^)]*\)/, "") + (parseInt(K) + "" == "NaN" ? "" : "alpha(opacity=" + K * 100 + ")")
                }
                return J.filter && J.filter.indexOf("opacity=") >= 0 ? (parseFloat(J.filter.match(/opacity=([^)]*)/)[1]) / 100) + "" : ""
            }
            G = G.replace(/-([a-z])/ig, function (M, N) {
                return N.toUpperCase()
            });
            if (L) {
                J[G] = K
            }
            return J[G]
        },
        trim: function (E) {
            return (E || "").replace(/^\s+|\s+$/g, "")
        },
        makeArray: function (G) {
            var E = [];
            if (G != null) {
                var F = G.length;
                if (F == null || typeof G === "string" || o.isFunction(G) || G.setInterval) {
                    E[0] = G
                } else {
                    while (F) {
                        E[--F] = G[F]
                    }
                }
            }
            return E
        },
        inArray: function (G, H) {
            for (var E = 0, F = H.length; E < F; E++) {
                if (H[E] === G) {
                    return E
                }
            }
            return -1
        },
        merge: function (H, E) {
            var F = 0,
                G, I = H.length;
            if (!o.support.getAll) {
                while ((G = E[F++]) != null) {
                    if (G.nodeType != 8) {
                        H[I++] = G
                    }
                }
            } else {
                while ((G = E[F++]) != null) {
                    H[I++] = G
                }
            }
            return H
        },
        unique: function (K) {
            var F = [],
                E = {};
            try {
                for (var G = 0, H = K.length; G < H; G++) {
                    var J = o.data(K[G]);
                    if (!E[J]) {
                        E[J] = true;
                        F.push(K[G])
                    }
                }
            } catch(I) {
                F = K
            }
            return F
        },
        grep: function (F, J, E) {
            var G = [];
            for (var H = 0, I = F.length; H < I; H++) {
                if (!E != !J(F[H], H)) {
                    G.push(F[H])
                }
            }
            return G
        },
        map: function (E, J) {
            var F = [];
            for (var G = 0, H = E.length; G < H; G++) {
                var I = J(E[G], G);
                if (I != null) {
                    F[F.length] = I
                }
            }
            return F.concat.apply([], F)
        }
    });
    var C = navigator.userAgent.toLowerCase();
    o.browser = {
        version: (C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
        safari: /webkit/.test(C),
        opera: /opera/.test(C),
        msie: /msie/.test(C) && !/opera/.test(C),
        mozilla: /mozilla/.test(C) && !/(compatible|webkit)/.test(C)
    };
    o.each({
        parent: function (E) {
            return E.parentNode
        },
        parents: function (E) {
            return o.dir(E, "parentNode")
        },
        next: function (E) {
            return o.nth(E, 2, "nextSibling")
        },
        prev: function (E) {
            return o.nth(E, 2, "previousSibling")
        },
        nextAll: function (E) {
            return o.dir(E, "nextSibling")
        },
        prevAll: function (E) {
            return o.dir(E, "previousSibling")
        },
        siblings: function (E) {
            return o.sibling(E.parentNode.firstChild, E)
        },
        children: function (E) {
            return o.sibling(E.firstChild)
        },
        contents: function (E) {
            return o.nodeName(E, "iframe") ? E.contentDocument || E.contentWindow.document : o.makeArray(E.childNodes)
        }
    },


    function (E, F) {
        o.fn[E] = function (G) {
            var H = o.map(this, F);
            if (G && typeof G == "string") {
                H = o.multiFilter(G, H)
            }
            return this.pushStack(o.unique(H), E, G)
        }
    });
    o.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },


    function (E, F) {
        o.fn[E] = function (G) {
            var J = [],
                L = o(G);
            for (var K = 0, H = L.length; K < H; K++) {
                var I = (K > 0 ? this.clone(true) : this).get();
                o.fn[F].apply(o(L[K]), I);
                J = J.concat(I)
            }
            return this.pushStack(J, E, G)
        }
    });
    o.each({
        removeAttr: function (E) {
            o.attr(this, E, "");
            if (this.nodeType == 1) {
                this.removeAttribute(E)
            }
        },
        addClass: function (E) {
            o.className.add(this, E)
        },
        removeClass: function (E) {
            o.className.remove(this, E)
        },
        toggleClass: function (F, E) {
            if (typeof E !== "boolean") {
                E = !o.className.has(this, F)
            }
            o.className[E ? "add" : "remove"](this, F)
        },
        remove: function (E) {
            if (!E || o.filter(E, [this]).length) {
                o("*", this).add([this]).each(function () {
                    o.event.remove(this);
                    o.removeData(this)
                });
                if (this.parentNode) {
                    this.parentNode.removeChild(this)
                }
            }
        },
        empty: function () {
            o(this).children().remove();
            while (this.firstChild) {
                this.removeChild(this.firstChild)
            }
        }
    },


    function (E, F) {
        o.fn[E] = function () {
            return this.each(F, arguments)
        }
    });

    function j(E, F) {
        return E[0] && parseInt(o.curCSS(E[0], F, true), 10) || 0
    }
    var h = "jQuery" + e(),
        v = 0,
        A = {};
    o.extend({
        cache: {},
        data: function (F, E, G) {
            F = F == l ? A : F;
            var H = F[h];
            if (!H) {
                H = F[h] = ++v
            }
            if (E && !o.cache[H]) {
                o.cache[H] = {}
            }
            if (G !== g) {
                o.cache[H][E] = G
            }
            return E ? o.cache[H][E] : H
        },
        removeData: function (F, E) {
            F = F == l ? A : F;
            var H = F[h];
            if (E) {
                if (o.cache[H]) {
                    delete o.cache[H][E];
                    E = "";
                    for (E in o.cache[H]) {
                        break
                    }
                    if (!E) {
                        o.removeData(F)
                    }
                }
            } else {
                try {
                    delete F[h]
                } catch(G) {
                    if (F.removeAttribute) {
                        F.removeAttribute(h)
                    }
                }
                delete o.cache[H]
            }
        },
        queue: function (F, E, H) {
            if (F) {
                E = (E || "fx") + "queue";
                var G = o.data(F, E);
                if (!G || o.isArray(H)) {
                    G = o.data(F, E, o.makeArray(H))
                } else {
                    if (H) {
                        G.push(H)
                    }
                }
            }
            return G
        },
        dequeue: function (H, G) {
            var E = o.queue(H, G),
                F = E.shift();
            if (!G || G === "fx") {
                F = E[0]
            }
            if (F !== g) {
                F.call(H)
            }
        }
    });
    o.fn.extend({
        data: function (E, G) {
            var H = E.split(".");
            H[1] = H[1] ? "." + H[1] : "";
            if (G === g) {
                var F = this.triggerHandler("getData" + H[1] + "!", [H[0]]);
                if (F === g && this.length) {
                    F = o.data(this[0], E)
                }
                return F === g && H[1] ? this.data(H[0]) : F
            } else {
                return this.trigger("setData" + H[1] + "!", [H[0], G]).each(function () {
                    o.data(this, E, G)
                })
            }
        },
        removeData: function (E) {
            return this.each(function () {
                o.removeData(this, E)
            })
        },
        queue: function (E, F) {
            if (typeof E !== "string") {
                F = E;
                E = "fx"
            }
            if (F === g) {
                return o.queue(this[0], E)
            }
            return this.each(function () {
                var G = o.queue(this, E, F);
                if (E == "fx" && G.length == 1) {
                    G[0].call(this)
                }
            })
        },
        dequeue: function (E) {
            return this.each(function () {
                o.dequeue(this, E)
            })
        }
    });
    (function () {
        var R = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,
            L = 0,
            H = Object.prototype.toString;
        var F = function (Y, U, ab, ac) {
            ab = ab || [];
            U = U || document;
            if (U.nodeType !== 1 && U.nodeType !== 9) {
                return []
            }
            if (!Y || typeof Y !== "string") {
                return ab
            }
            var Z = [],
                W, af, ai, T, ad, V, X = true;
            R.lastIndex = 0;
            while ((W = R.exec(Y)) !== null) {
                Z.push(W[1]);
                if (W[2]) {
                    V = RegExp.rightContext;
                    break
                }
            }
            if (Z.length > 1 && M.exec(Y)) {
                if (Z.length === 2 && I.relative[Z[0]]) {
                    af = J(Z[0] + Z[1], U)
                } else {
                    af = I.relative[Z[0]] ? [U] : F(Z.shift(), U);
                    while (Z.length) {
                        Y = Z.shift();
                        if (I.relative[Y]) {
                            Y += Z.shift()
                        }
                        af = J(Y, af)
                    }
                }
            } else {
                var ae = ac ? {
                    expr: Z.pop(),
                    set: E(ac)
                } : F.find(Z.pop(), Z.length === 1 && U.parentNode ? U.parentNode : U, Q(U));
                af = F.filter(ae.expr, ae.set);
                if (Z.length > 0) {
                    ai = E(af)
                } else {
                    X = false
                }
                while (Z.length) {
                    var ah = Z.pop(),
                        ag = ah;
                    if (!I.relative[ah]) {
                        ah = ""
                    } else {
                        ag = Z.pop()
                    }
                    if (ag == null) {
                        ag = U
                    }
                    I.relative[ah](ai, ag, Q(U))
                }
            }
            if (!ai) {
                ai = af
            }
            if (!ai) {
                throw "Syntax error, unrecognized expression: " + (ah || Y)
            }
            if (H.call(ai) === "[object Array]") {
                if (!X) {
                    ab.push.apply(ab, ai)
                } else {
                    if (U.nodeType === 1) {
                        for (var aa = 0; ai[aa] != null; aa++) {
                            if (ai[aa] && (ai[aa] === true || ai[aa].nodeType === 1 && K(U, ai[aa]))) {
                                ab.push(af[aa])
                            }
                        }
                    } else {
                        for (var aa = 0; ai[aa] != null; aa++) {
                            if (ai[aa] && ai[aa].nodeType === 1) {
                                ab.push(af[aa])
                            }
                        }
                    }
                }
            } else {
                E(ai, ab)
            }
            if (V) {
                F(V, U, ab, ac);
                if (G) {
                    hasDuplicate = false;
                    ab.sort(G);
                    if (hasDuplicate) {
                        for (var aa = 1; aa < ab.length; aa++) {
                            if (ab[aa] === ab[aa - 1]) {
                                ab.splice(aa--, 1)
                            }
                        }
                    }
                }
            }
            return ab
        };
        F.matches = function (T, U) {
            return F(T, null, null, U)
        };
        F.find = function (aa, T, ab) {
            var Z, X;
            if (!aa) {
                return []
            }
            for (var W = 0, V = I.order.length; W < V; W++) {
                var Y = I.order[W],
                    X;
                if ((X = I.match[Y].exec(aa))) {
                    var U = RegExp.leftContext;
                    if (U.substr(U.length - 1) !== "\\") {
                        X[1] = (X[1] || "").replace(/\\/g, "");
                        Z = I.find[Y](X, T, ab);
                        if (Z != null) {
                            aa = aa.replace(I.match[Y], "");
                            break
                        }
                    }
                }
            }
            if (!Z) {
                Z = T.getElementsByTagName("*")
            }
            return {
                set: Z,
                expr: aa
            }
        };
        F.filter = function (ad, ac, ag, W) {
            var V = ad,
                ai = [],
                aa = ac,
                Y, T, Z = ac && ac[0] && Q(ac[0]);
            while (ad && ac.length) {
                for (var ab in I.filter) {
                    if ((Y = I.match[ab].exec(ad)) != null) {
                        var U = I.filter[ab],
                            ah, af;
                        T = false;
                        if (aa == ai) {
                            ai = []
                        }
                        if (I.preFilter[ab]) {
                            Y = I.preFilter[ab](Y, aa, ag, ai, W, Z);
                            if (!Y) {
                                T = ah = true
                            } else {
                                if (Y === true) {
                                    continue
                                }
                            }
                        }
                        if (Y) {
                            for (var X = 0;
                            (af = aa[X]) != null; X++) {
                                if (af) {
                                    ah = U(af, Y, X, aa);
                                    var ae = W ^ !!ah;
                                    if (ag && ah != null) {
                                        if (ae) {
                                            T = true
                                        } else {
                                            aa[X] = false
                                        }
                                    } else {
                                        if (ae) {
                                            ai.push(af);
                                            T = true
                                        }
                                    }
                                }
                            }
                        }
                        if (ah !== g) {
                            if (!ag) {
                                aa = ai
                            }
                            ad = ad.replace(I.match[ab], "");
                            if (!T) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (ad == V) {
                    if (T == null) {
                        throw "Syntax error, unrecognized expression: " + ad
                    } else {
                        break
                    }
                }
                V = ad
            }
            return aa
        };
        var I = F.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
            },
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (T) {
                    return T.getAttribute("href")
                }
            },
            relative: {
                "+": function (aa, T, Z) {
                    var X = typeof T === "string",
                        ab = X && !/\W/.test(T),
                        Y = X && !ab;
                    if (ab && !Z) {
                        T = T.toUpperCase()
                    }
                    for (var W = 0, V = aa.length, U; W < V; W++) {
                        if ((U = aa[W])) {
                            while ((U = U.previousSibling) && U.nodeType !== 1) {}
                            aa[W] = Y || U && U.nodeName === T ? U || false : U === T
                        }
                    }
                    if (Y) {
                        F.filter(T, aa, true)
                    }
                },
                ">": function (Z, U, aa) {
                    var X = typeof U === "string";
                    if (X && !/\W/.test(U)) {
                        U = aa ? U : U.toUpperCase();
                        for (var V = 0, T = Z.length; V < T; V++) {
                            var Y = Z[V];
                            if (Y) {
                                var W = Y.parentNode;
                                Z[V] = W.nodeName === U ? W : false
                            }
                        }
                    } else {
                        for (var V = 0, T = Z.length; V < T; V++) {
                            var Y = Z[V];
                            if (Y) {
                                Z[V] = X ? Y.parentNode : Y.parentNode === U
                            }
                        }
                        if (X) {
                            F.filter(U, Z, true)
                        }
                    }
                },
                "": function (W, U, Y) {
                    var V = L++,
                        T = S;
                    if (!U.match(/\W/)) {
                        var X = U = Y ? U : U.toUpperCase();
                        T = P
                    }
                    T("parentNode", U, V, W, X, Y)
                },
                "~": function (W, U, Y) {
                    var V = L++,
                        T = S;
                    if (typeof U === "string" && !U.match(/\W/)) {
                        var X = U = Y ? U : U.toUpperCase();
                        T = P
                    }
                    T("previousSibling", U, V, W, X, Y)
                }
            },
            find: {
                ID: function (U, V, W) {
                    if (typeof V.getElementById !== "undefined" && !W) {
                        var T = V.getElementById(U[1]);
                        return T ? [T] : []
                    }
                },
                NAME: function (V, Y, Z) {
                    if (typeof Y.getElementsByName !== "undefined") {
                        var U = [],
                            X = Y.getElementsByName(V[1]);
                        for (var W = 0, T = X.length; W < T; W++) {
                            if (X[W].getAttribute("name") === V[1]) {
                                U.push(X[W])
                            }
                        }
                        return U.length === 0 ? null : U
                    }
                },
                TAG: function (T, U) {
                    return U.getElementsByTagName(T[1])
                }
            },
            preFilter: {
                CLASS: function (W, U, V, T, Z, aa) {
                    W = " " + W[1].replace(/\\/g, "") + " ";
                    if (aa) {
                        return W
                    }
                    for (var X = 0, Y;
                    (Y = U[X]) != null; X++) {
                        if (Y) {
                            if (Z ^ (Y.className && (" " + Y.className + " ").indexOf(W) >= 0)) {
                                if (!V) {
                                    T.push(Y)
                                }
                            } else {
                                if (V) {
                                    U[X] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function (T) {
                    return T[1].replace(/\\/g, "")
                },
                TAG: function (U, T) {
                    for (var V = 0; T[V] === false; V++) {}
                    return T[V] && Q(T[V]) ? U[1] : U[1].toUpperCase()
                },
                CHILD: function (T) {
                    if (T[1] == "nth") {
                        var U = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2] == "even" && "2n" || T[2] == "odd" && "2n+1" || !/\D/.test(T[2]) && "0n+" + T[2] || T[2]);
                        T[2] = (U[1] + (U[2] || 1)) - 0;
                        T[3] = U[3] - 0
                    }
                    T[0] = L++;
                    return T
                },
                ATTR: function (X, U, V, T, Y, Z) {
                    var W = X[1].replace(/\\/g, "");
                    if (!Z && I.attrMap[W]) {
                        X[1] = I.attrMap[W]
                    }
                    if (X[2] === "~=") {
                        X[4] = " " + X[4] + " "
                    }
                    return X
                },
                PSEUDO: function (X, U, V, T, Y) {
                    if (X[1] === "not") {
                        if (X[3].match(R).length > 1 || /^\w/.test(X[3])) {
                            X[3] = F(X[3], null, null, U)
                        } else {
                            var W = F.filter(X[3], U, V, true ^ Y);
                            if (!V) {
                                T.push.apply(T, W)
                            }
                            return false
                        }
                    } else {
                        if (I.match.POS.test(X[0]) || I.match.CHILD.test(X[0])) {
                            return true
                        }
                    }
                    return X
                },
                POS: function (T) {
                    T.unshift(true);
                    return T
                }
            },
            filters: {
                enabled: function (T) {
                    return T.disabled === false && T.type !== "hidden"
                },
                disabled: function (T) {
                    return T.disabled === true
                },
                checked: function (T) {
                    return T.checked === true
                },
                selected: function (T) {
                    T.parentNode.selectedIndex;
                    return T.selected === true
                },
                parent: function (T) {
                    return !!T.firstChild
                },
                empty: function (T) {
                    return !T.firstChild
                },
                has: function (V, U, T) {
                    return !!F(T[3], V).length
                },
                header: function (T) {
                    return /h\d/i.test(T.nodeName)
                },
                text: function (T) {
                    return "text" === T.type
                },
                radio: function (T) {
                    return "radio" === T.type
                },
                checkbox: function (T) {
                    return "checkbox" === T.type
                },
                file: function (T) {
                    return "file" === T.type
                },
                password: function (T) {
                    return "password" === T.type
                },
                submit: function (T) {
                    return "submit" === T.type
                },
                image: function (T) {
                    return "image" === T.type
                },
                reset: function (T) {
                    return "reset" === T.type
                },
                button: function (T) {
                    return "button" === T.type || T.nodeName.toUpperCase() === "BUTTON"
                },
                input: function (T) {
                    return /input|select|textarea|button/i.test(T.nodeName)
                }
            },
            setFilters: {
                first: function (U, T) {
                    return T === 0
                },
                last: function (V, U, T, W) {
                    return U === W.length - 1
                },
                even: function (U, T) {
                    return T % 2 === 0
                },
                odd: function (U, T) {
                    return T % 2 === 1
                },
                lt: function (V, U, T) {
                    return U < T[3] - 0
                },
                gt: function (V, U, T) {
                    return U > T[3] - 0
                },
                nth: function (V, U, T) {
                    return T[3] - 0 == U
                },
                eq: function (V, U, T) {
                    return T[3] - 0 == U
                }
            },
            filter: {
                PSEUDO: function (Z, V, W, aa) {
                    var U = V[1],
                        X = I.filters[U];
                    if (X) {
                        return X(Z, W, V, aa)
                    } else {
                        if (U === "contains") {
                            return (Z.textContent || Z.innerText || "").indexOf(V[3]) >= 0
                        } else {
                            if (U === "not") {
                                var Y = V[3];
                                for (var W = 0, T = Y.length; W < T; W++) {
                                    if (Y[W] === Z) {
                                        return false
                                    }
                                }
                                return true
                            }
                        }
                    }
                },
                CHILD: function (T, W) {
                    var Z = W[1],
                        U = T;
                    switch (Z) {
                    case "only":
                    case "first":
                        while (U = U.previousSibling) {
                            if (U.nodeType === 1) {
                                return false
                            }
                        }
                        if (Z == "first") {
                            return true
                        }
                        U = T;
                    case "last":
                        while (U = U.nextSibling) {
                            if (U.nodeType === 1) {
                                return false
                            }
                        }
                        return true;
                    case "nth":
                        var V = W[2],
                            ac = W[3];
                        if (V == 1 && ac == 0) {
                            return true
                        }
                        var Y = W[0],
                            ab = T.parentNode;
                        if (ab && (ab.sizcache !== Y || !T.nodeIndex)) {
                            var X = 0;
                            for (U = ab.firstChild; U; U = U.nextSibling) {
                                if (U.nodeType === 1) {
                                    U.nodeIndex = ++X
                                }
                            }
                            ab.sizcache = Y
                        }
                        var aa = T.nodeIndex - ac;
                        if (V == 0) {
                            return aa == 0
                        } else {
                            return (aa % V == 0 && aa / V >= 0)
                        }
                    }
                },
                ID: function (U, T) {
                    return U.nodeType === 1 && U.getAttribute("id") === T
                },
                TAG: function (U, T) {
                    return (T === "*" && U.nodeType === 1) || U.nodeName === T
                },
                CLASS: function (U, T) {
                    return (" " + (U.className || U.getAttribute("class")) + " ").indexOf(T) > -1
                },
                ATTR: function (Y, W) {
                    var V = W[1],
                        T = I.attrHandle[V] ? I.attrHandle[V](Y) : Y[V] != null ? Y[V] : Y.getAttribute(V),
                    Z = T + "",
                    X = W[2],
                    U = W[4];
                    return T == null ? X === "!=" : X === "=" ? Z === U : X === "*=" ? Z.indexOf(U) >= 0 : X === "~=" ? (" " + Z + " ").indexOf(U) >= 0 : !U ? Z && T !== false : X === "!=" ? Z != U : X === "^=" ? Z.indexOf(U) === 0 : X === "$=" ? Z.substr(Z.length - U.length) === U : X === "|=" ? Z === U || Z.substr(0, U.length + 1) === U + "-" : false
                },
                POS: function (X, U, V, Y) {
                    var T = U[2],
                        W = I.setFilters[T];
                    if (W) {
                        return W(X, V, U, Y)
                    }
                }
            }
        };
        var M = I.match.POS;
        for (var O in I.match) {
            I.match[O] = RegExp(I.match[O].source + /(?![^\[]*\])(?![^\(]*\))/.source)
        }
        var E = function (U, T) {
            U = Array.prototype.slice.call(U);
            if (T) {
                T.push.apply(T, U);
                return T
            }
            return U
        };
        try {
            Array.prototype.slice.call(document.documentElement.childNodes)
        } catch(N) {
            E = function (X, W) {
                var U = W || [];
                if (H.call(X) === "[object Array]") {
                    Array.prototype.push.apply(U, X)
                } else {
                    if (typeof X.length === "number") {
                        for (var V = 0, T = X.length; V < T; V++) {
                            U.push(X[V])
                        }
                    } else {
                        for (var V = 0; X[V]; V++) {
                            U.push(X[V])
                        }
                    }
                }
                return U
            }
        }
        var G;
        if (document.documentElement.compareDocumentPosition) {
            G = function (U, T) {
                var V = U.compareDocumentPosition(T) & 4 ? -1 : U === T ? 0 : 1;
                if (V === 0) {
                    hasDuplicate = true
                }
                return V
            }
        } else {
            if ("sourceIndex" in document.documentElement) {
                G = function (U, T) {
                    var V = U.sourceIndex - T.sourceIndex;
                    if (V === 0) {
                        hasDuplicate = true
                    }
                    return V
                }
            } else {
                if (document.createRange) {
                    G = function (W, U) {
                        var V = W.ownerDocument.createRange(),
                            T = U.ownerDocument.createRange();
                        V.selectNode(W);
                        V.collapse(true);
                        T.selectNode(U);
                        T.collapse(true);
                        var X = V.compareBoundaryPoints(Range.START_TO_END, T);
                        if (X === 0) {
                            hasDuplicate = true
                        }
                        return X
                    }
                }
            }
        }(function () {
            var U = document.createElement("form"),
                V = "script" + (new Date).getTime();
            U.innerHTML = "<input name='" + V + "'/>";
            var T = document.documentElement;
            T.insertBefore(U, T.firstChild);
            if ( !! document.getElementById(V)) {
                I.find.ID = function (X, Y, Z) {
                    if (typeof Y.getElementById !== "undefined" && !Z) {
                        var W = Y.getElementById(X[1]);
                        return W ? W.id === X[1] || typeof W.getAttributeNode !== "undefined" && W.getAttributeNode("id").nodeValue === X[1] ? [W] : g : []
                    }
                };
                I.filter.ID = function (Y, W) {
                    var X = typeof Y.getAttributeNode !== "undefined" && Y.getAttributeNode("id");
                    return Y.nodeType === 1 && X && X.nodeValue === W
                }
            }
            T.removeChild(U)
        })();
        (function () {
            var T = document.createElement("div");
            T.appendChild(document.createComment(""));
            if (T.getElementsByTagName("*").length > 0) {
                I.find.TAG = function (U, Y) {
                    var X = Y.getElementsByTagName(U[1]);
                    if (U[1] === "*") {
                        var W = [];
                        for (var V = 0; X[V]; V++) {
                            if (X[V].nodeType === 1) {
                                W.push(X[V])
                            }
                        }
                        X = W
                    }
                    return X
                }
            }
            T.innerHTML = "<a href='#'></a>";
            if (T.firstChild && typeof T.firstChild.getAttribute !== "undefined" && T.firstChild.getAttribute("href") !== "#") {
                I.attrHandle.href = function (U) {
                    return U.getAttribute("href", 2)
                }
            }
        })();
        if (document.querySelectorAll) {
            (function () {
                var T = F,
                    U = document.createElement("div");
                U.innerHTML = "<p class='TEST'></p>";
                if (U.querySelectorAll && U.querySelectorAll(".TEST").length === 0) {
                    return
                }
                F = function (Y, X, V, W) {
                    X = X || document;
                    if (!W && X.nodeType === 9 && !Q(X)) {
                        try {
                            return E(X.querySelectorAll(Y), V)
                        } catch(Z) {}
                    }
                    return T(Y, X, V, W)
                };
                F.find = T.find;
                F.filter = T.filter;
                F.selectors = T.selectors;
                F.matches = T.matches
            })()
        }
        if (document.getElementsByClassName && document.documentElement.getElementsByClassName) {
            (function () {
                var T = document.createElement("div");
                T.innerHTML = "<div class='test e'></div><div class='test'></div>";
                if (T.getElementsByClassName("e").length === 0) {
                    return
                }
                T.lastChild.className = "e";
                if (T.getElementsByClassName("e").length === 1) {
                    return
                }
                I.order.splice(1, 0, "CLASS");
                I.find.CLASS = function (U, V, W) {
                    if (typeof V.getElementsByClassName !== "undefined" && !W) {
                        return V.getElementsByClassName(U[1])
                    }
                }
            })()
        }
        function P(U, Z, Y, ad, aa, ac) {
            var ab = U == "previousSibling" && !ac;
            for (var W = 0, V = ad.length; W < V; W++) {
                var T = ad[W];
                if (T) {
                    if (ab && T.nodeType === 1) {
                        T.sizcache = Y;
                        T.sizset = W
                    }
                    T = T[U];
                    var X = false;
                    while (T) {
                        if (T.sizcache === Y) {
                            X = ad[T.sizset];
                            break
                        }
                        if (T.nodeType === 1 && !ac) {
                            T.sizcache = Y;
                            T.sizset = W
                        }
                        if (T.nodeName === Z) {
                            X = T;
                            break
                        }
                        T = T[U]
                    }
                    ad[W] = X
                }
            }
        }
        function S(U, Z, Y, ad, aa, ac) {
            var ab = U == "previousSibling" && !ac;
            for (var W = 0, V = ad.length; W < V; W++) {
                var T = ad[W];
                if (T) {
                    if (ab && T.nodeType === 1) {
                        T.sizcache = Y;
                        T.sizset = W
                    }
                    T = T[U];
                    var X = false;
                    while (T) {
                        if (T.sizcache === Y) {
                            X = ad[T.sizset];
                            break
                        }
                        if (T.nodeType === 1) {
                            if (!ac) {
                                T.sizcache = Y;
                                T.sizset = W
                            }
                            if (typeof Z !== "string") {
                                if (T === Z) {
                                    X = true;
                                    break
                                }
                            } else {
                                if (F.filter(Z, [T]).length > 0) {
                                    X = T;
                                    break
                                }
                            }
                        }
                        T = T[U]
                    }
                    ad[W] = X
                }
            }
        }
        var K = document.compareDocumentPosition ?
        function (U, T) {
            return U.compareDocumentPosition(T) & 16
        } : function (U, T) {
            return U !== T && (U.contains ? U.contains(T) : true)
        };
        var Q = function (T) {
            return T.nodeType === 9 && T.documentElement.nodeName !== "HTML" || !!T.ownerDocument && Q(T.ownerDocument)
        };
        var J = function (T, aa) {
            var W = [],
                X = "",
                Y, V = aa.nodeType ? [aa] : aa;
            while ((Y = I.match.PSEUDO.exec(T))) {
                X += Y[0];
                T = T.replace(I.match.PSEUDO, "")
            }
            T = I.relative[T] ? T + "*" : T;
            for (var Z = 0, U = V.length; Z < U; Z++) {
                F(T, V[Z], W)
            }
            return F.filter(X, W)
        };
        o.find = F;
        o.filter = F.filter;
        o.expr = F.selectors;
        o.expr[":"] = o.expr.filters;
        F.selectors.filters.hidden = function (T) {
            return T.offsetWidth === 0 || T.offsetHeight === 0
        };
        F.selectors.filters.visible = function (T) {
            return T.offsetWidth > 0 || T.offsetHeight > 0
        };
        F.selectors.filters.animated = function (T) {
            return o.grep(o.timers, function (U) {
                return T === U.elem
            }).length
        };
        o.multiFilter = function (V, T, U) {
            if (U) {
                V = ":not(" + V + ")"
            }
            return F.matches(V, T)
        };
        o.dir = function (V, U) {
            var T = [],
                W = V[U];
            while (W && W != document) {
                if (W.nodeType == 1) {
                    T.push(W)
                }
                W = W[U]
            }
            return T
        };
        o.nth = function (X, T, V, W) {
            T = T || 1;
            var U = 0;
            for (; X; X = X[V]) {
                if (X.nodeType == 1 && ++U == T) {
                    break
                }
            }
            return X
        };
        o.sibling = function (V, U) {
            var T = [];
            for (; V; V = V.nextSibling) {
                if (V.nodeType == 1 && V != U) {
                    T.push(V)
                }
            }
            return T
        };
        return;
        l.Sizzle = F
    })();
    o.event = {
        add: function (I, F, H, K) {
            if (I.nodeType == 3 || I.nodeType == 8) {
                return
            }
            if (I.setInterval && I != l) {
                I = l
            }
            if (!H.guid) {
                H.guid = this.guid++
            }
            if (K !== g) {
                var G = H;
                H = this.proxy(G);
                H.data = K
            }
            var E = o.data(I, "events") || o.data(I, "events", {}),
                J = o.data(I, "handle") || o.data(I, "handle", function () {
                return typeof o !== "undefined" && !o.event.triggered ? o.event.handle.apply(arguments.callee.elem, arguments) : g
            });
            J.elem = I;
            o.each(F.split(/\s+/), function (M, N) {
                var O = N.split(".");
                N = O.shift();
                H.type = O.slice().sort().join(".");
                var L = E[N];
                if (o.event.specialAll[N]) {
                    o.event.specialAll[N].setup.call(I, K, O)
                }
                if (!L) {
                    L = E[N] = {};
                    if (!o.event.special[N] || o.event.special[N].setup.call(I, K, O) === false) {
                        if (I.addEventListener) {
                            I.addEventListener(N, J, false)
                        } else {
                            if (I.attachEvent) {
                                I.attachEvent("on" + N, J)
                            }
                        }
                    }
                }
                L[H.guid] = H;
                o.event.global[N] = true
            });
            I = null
        },
        guid: 1,
        global: {},
        remove: function (K, H, J) {
            if (K.nodeType == 3 || K.nodeType == 8) {
                return
            }
            var G = o.data(K, "events"),
                F, E;
            if (G) {
                if (H === g || (typeof H === "string" && H.charAt(0) == ".")) {
                    for (var I in G) {
                        this.remove(K, I + (H || ""))
                    }
                } else {
                    if (H.type) {
                        J = H.handler;
                        H = H.type
                    }
                    o.each(H.split(/\s+/), function (M, O) {
                        var Q = O.split(".");
                        O = Q.shift();
                        var N = RegExp("(^|\\.)" + Q.slice().sort().join(".*\\.") + "(\\.|$)");
                        if (G[O]) {
                            if (J) {
                                delete G[O][J.guid]
                            } else {
                                for (var P in G[O]) {
                                    if (N.test(G[O][P].type)) {
                                        delete G[O][P]
                                    }
                                }
                            }
                            if (o.event.specialAll[O]) {
                                o.event.specialAll[O].teardown.call(K, Q)
                            }
                            for (F in G[O]) {
                                break
                            }
                            if (!F) {
                                if (!o.event.special[O] || o.event.special[O].teardown.call(K, Q) === false) {
                                    if (K.removeEventListener) {
                                        K.removeEventListener(O, o.data(K, "handle"), false)
                                    } else {
                                        if (K.detachEvent) {
                                            K.detachEvent("on" + O, o.data(K, "handle"))
                                        }
                                    }
                                }
                                F = null;
                                delete G[O]
                            }
                        }
                    })
                }
                for (F in G) {
                    break
                }
                if (!F) {
                    var L = o.data(K, "handle");
                    if (L) {
                        L.elem = null
                    }
                    o.removeData(K, "events");
                    o.removeData(K, "handle")
                }
            }
        },
        trigger: function (I, K, H, E) {
            var G = I.type || I;
            if (!E) {
                I = typeof I === "object" ? I[h] ? I : o.extend(o.Event(G), I) : o.Event(G);
                if (G.indexOf("!") >= 0) {
                    I.type = G = G.slice(0, -1);
                    I.exclusive = true
                }
                if (!H) {
                    I.stopPropagation();
                    if (this.global[G]) {
                        o.each(o.cache, function () {
                            if (this.events && this.events[G]) {
                                o.event.trigger(I, K, this.handle.elem)
                            }
                        })
                    }
                }
                if (!H || H.nodeType == 3 || H.nodeType == 8) {
                    return g
                }
                I.result = g;
                I.target = H;
                K = o.makeArray(K);
                K.unshift(I)
            }
            I.currentTarget = H;
            var J = o.data(H, "handle");
            if (J) {
                J.apply(H, K)
            }
            if ((!H[G] || (o.nodeName(H, "a") && G == "click")) && H["on" + G] && H["on" + G].apply(H, K) === false) {
                I.result = false
            }
            if (!E && H[G] && !I.isDefaultPrevented() && !(o.nodeName(H, "a") && G == "click")) {
                this.triggered = true;
                try {
                    H[G]()
                } catch(L) {}
            }
            this.triggered = false;
            if (!I.isPropagationStopped()) {
                var F = H.parentNode || H.ownerDocument;
                if (F) {
                    o.event.trigger(I, K, F, true)
                }
            }
        },
        handle: function (K) {
            var J, E;
            K = arguments[0] = o.event.fix(K || l.event);
            K.currentTarget = this;
            var L = K.type.split(".");
            K.type = L.shift();
            J = !L.length && !K.exclusive;
            var I = RegExp("(^|\\.)" + L.slice().sort().join(".*\\.") + "(\\.|$)");
            E = (o.data(this, "events") || {})[K.type];
            for (var G in E) {
                var H = E[G];
                if (J || I.test(H.type)) {
                    K.handler = H;
                    K.data = H.data;
                    var F = H.apply(this, arguments);
                    if (F !== g) {
                        K.result = F;
                        if (F === false) {
                            K.preventDefault();
                            K.stopPropagation()
                        }
                    }
                    if (K.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (H) {
            if (H[h]) {
                return H
            }
            var F = H;
            H = o.Event(F);
            for (var G = this.props.length, J; G;) {
                J = this.props[--G];
                H[J] = F[J]
            }
            if (!H.target) {
                H.target = H.srcElement || document
            }
            if (H.target.nodeType == 3) {
                H.target = H.target.parentNode
            }
            if (!H.relatedTarget && H.fromElement) {
                H.relatedTarget = H.fromElement == H.target ? H.toElement : H.fromElement
            }
            if (H.pageX == null && H.clientX != null) {
                var I = document.documentElement,
                    E = document.body;
                H.pageX = H.clientX + (I && I.scrollLeft || E && E.scrollLeft || 0) - (I.clientLeft || 0);
                H.pageY = H.clientY + (I && I.scrollTop || E && E.scrollTop || 0) - (I.clientTop || 0)
            }
            if (!H.which && ((H.charCode || H.charCode === 0) ? H.charCode : H.keyCode)) {
                H.which = H.charCode || H.keyCode
            }
            if (!H.metaKey && H.ctrlKey) {
                H.metaKey = H.ctrlKey
            }
            if (!H.which && H.button) {
                H.which = (H.button & 1 ? 1 : (H.button & 2 ? 3 : (H.button & 4 ? 2 : 0)))
            }
            return H
        },
        proxy: function (F, E) {
            E = E ||
            function () {
                return F.apply(this, arguments)
            };
            E.guid = F.guid = F.guid || E.guid || this.guid++;
            return E
        },
        special: {
            ready: {
                setup: B,
                teardown: function () {}
            }
        },
        specialAll: {
            live: {
                setup: function (E, F) {
                    o.event.add(this, F[0], c)
                },
                teardown: function (G) {
                    if (G.length) {
                        var E = 0,
                            F = RegExp("(^|\\.)" + G[0] + "(\\.|$)");
                        o.each((o.data(this, "events").live || {}), function () {
                            if (F.test(this.type)) {
                                E++
                            }
                        });
                        if (E < 1) {
                            o.event.remove(this, G[0], c)
                        }
                    }
                }
            }
        }
    };
    o.Event = function (E) {
        if (!this.preventDefault) {
            return new o.Event(E)
        }
        if (E && E.type) {
            this.originalEvent = E;
            this.type = E.type
        } else {
            this.type = E
        }
        this.timeStamp = e();
        this[h] = true
    };

    function k() {
        return false
    }
    function u() {
        return true
    }
    o.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = u;
            var E = this.originalEvent;
            if (!E) {
                return
            }
            if (E.preventDefault) {
                E.preventDefault()
            }
            E.returnValue = false
        },
        stopPropagation: function () {
            this.isPropagationStopped = u;
            var E = this.originalEvent;
            if (!E) {
                return
            }
            if (E.stopPropagation) {
                E.stopPropagation()
            }
            E.cancelBubble = true
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u;
            this.stopPropagation()
        },
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k
    };
    var a = function (F) {
        var E = F.relatedTarget;
        while (E && E != this) {
            try {
                E = E.parentNode
            } catch(G) {
                E = this
            }
        }
        if (E != this) {
            F.type = F.data;
            o.event.handle.apply(this, arguments)
        }
    };
    o.each({
        mouseover: "mouseenter",
        mouseout: "mouseleave"
    },


    function (F, E) {
        o.event.special[E] = {
            setup: function () {
                o.event.add(this, F, a, E)
            },
            teardown: function () {
                o.event.remove(this, F, a)
            }
        }
    });
    o.fn.extend({
        bind: function (F, G, E) {
            return F == "unload" ? this.one(F, G, E) : this.each(function () {
                o.event.add(this, F, E || G, E && G)
            })
        },
        one: function (G, H, F) {
            var E = o.event.proxy(F || H, function (I) {
                o(this).unbind(I, E);
                return (F || H).apply(this, arguments)
            });
            return this.each(function () {
                o.event.add(this, G, E, F && H)
            })
        },
        unbind: function (F, E) {
            return this.each(function () {
                o.event.remove(this, F, E)
            })
        },
        trigger: function (E, F) {
            return this.each(function () {
                o.event.trigger(E, F, this)
            })
        },
        triggerHandler: function (E, G) {
            if (this[0]) {
                var F = o.Event(E);
                F.preventDefault();
                F.stopPropagation();
                o.event.trigger(F, G, this[0]);
                return F.result
            }
        },
        toggle: function (G) {
            var E = arguments,
                F = 1;
            while (F < E.length) {
                o.event.proxy(G, E[F++])
            }
            return this.click(o.event.proxy(G, function (H) {
                this.lastToggle = (this.lastToggle || 0) % F;
                H.preventDefault();
                return E[this.lastToggle++].apply(this, arguments) || false
            }))
        },
        hover: function (E, F) {
            return this.mouseenter(E).mouseleave(F)
        },
        ready: function (E) {
            B();
            if (o.isReady) {
                E.call(document, o)
            } else {
                o.readyList.push(E)
            }
            return this
        },
        live: function (G, F) {
            var E = o.event.proxy(F);
            E.guid += this.selector + G;
            o(document).bind(i(G, this.selector), this.selector, E);
            return this
        },
        die: function (F, E) {
            o(document).unbind(i(F, this.selector), E ? {
                guid: E.guid + this.selector + F
            } : null);
            return this
        }
    });

    function c(H) {
        var E = RegExp("(^|\\.)" + H.type + "(\\.|$)"),
            G = true,
            F = [];
        o.each(o.data(this, "events").live || [], function (I, J) {
            if (E.test(J.type)) {
                var K = o(H.target).closest(J.data)[0];
                if (K) {
                    F.push({
                        elem: K,
                        fn: J
                    })
                }
            }
        });
        F.sort(function (J, I) {
            return o.data(J.elem, "closest") - o.data(I.elem, "closest")
        });
        o.each(F, function () {
            if (this.fn.call(this.elem, H, this.fn.data) === false) {
                return (G = false)
            }
        });
        return G
    }
    function i(F, E) {
        return ["live", F, E.replace(/\./g, "`").replace(/ /g, "|")].join(".")
    }
    o.extend({
        isReady: false,
        readyList: [],
        ready: function () {
            if (!o.isReady) {
                o.isReady = true;
                if (o.readyList) {
                    o.each(o.readyList, function () {
                        this.call(document, o)
                    });
                    o.readyList = null
                }
                o(document).triggerHandler("ready")
            }
        }
    });
    var x = false;

    function B() {
        if (x) {
            return
        }
        x = true;
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function () {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                o.ready()
            },
            false)
        } else {
            if (document.attachEvent) {
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState === "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        o.ready()
                    }
                });
                if (document.documentElement.doScroll && l == l.top) {
                    (function () {
                        if (o.isReady) {
                            return
                        }
                        try {
                            document.documentElement.doScroll("left")
                        } catch(E) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        o.ready()
                    })()
                }
            }
        }
        o.event.add(l, "load", o.ready)
    }
    o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","), function (F, E) {
        o.fn[E] = function (G) {
            return G ? this.bind(E, G) : this.trigger(E)
        }
    });
    o(l).bind("unload", function () {
        for (var E in o.cache) {
            if (E != 1 && o.cache[E].handle) {
                o.event.remove(o.cache[E].handle.elem)
            }
        }
    });
    (function () {
        o.support = {};
        var F = document.documentElement,
            G = document.createElement("script"),
            K = document.createElement("div"),
            J = "script" + (new Date).getTime();
        K.style.display = "none";
        K.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
        var H = K.getElementsByTagName("*"),
            E = K.getElementsByTagName("a")[0];
        if (!H || !H.length || !E) {
            return
        }
        o.support = {
            leadingWhitespace: K.firstChild.nodeType == 3,
            tbody: !K.getElementsByTagName("tbody").length,
            objectAll: !!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,
            htmlSerialize: !!K.getElementsByTagName("link").length,
            style: /red/.test(E.getAttribute("style")),
            hrefNormalized: E.getAttribute("href") === "/a",
            opacity: E.style.opacity === "0.5",
            cssFloat: !!E.style.cssFloat,
            scriptEval: false,
            noCloneEvent: true,
            boxModel: null
        };
        G.type = "text/javascript";
        try {
            G.appendChild(document.createTextNode("window." + J + "=1;"))
        } catch(I) {}
        F.insertBefore(G, F.firstChild);
        if (l[J]) {
            o.support.scriptEval = true;
            delete l[J]
        }
        F.removeChild(G);
        if (K.attachEvent && K.fireEvent) {
            K.attachEvent("onclick", function () {
                o.support.noCloneEvent = false;
                K.detachEvent("onclick", arguments.callee)
            });
            K.cloneNode(true).fireEvent("onclick")
        }
        o(function () {
            var L = document.createElement("div");
            L.style.width = L.style.paddingLeft = "1px";
            document.body.appendChild(L);
            o.boxModel = o.support.boxModel = L.offsetWidth === 2;
            document.body.removeChild(L).style.display = "none"
        })
    })();
    var w = o.support.cssFloat ? "cssFloat" : "styleFloat";
    o.props = {
        "for": "htmlFor",
        "class": "className",
        "float": w,
        cssFloat: w,
        styleFloat: w,
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        tabindex: "tabIndex"
    };
    o.fn.extend({
        _load: o.fn.load,
        load: function (G, J, K) {
            if (typeof G !== "string") {
                return this._load(G)
            }
            var I = G.indexOf(" ");
            if (I >= 0) {
                var E = G.slice(I, G.length);
                G = G.slice(0, I)
            }
            var H = "GET";
            if (J) {
                if (o.isFunction(J)) {
                    K = J;
                    J = null
                } else {
                    if (typeof J === "object") {
                        J = o.param(J);
                        H = "POST"
                    }
                }
            }
            var F = this;
            o.ajax({
                url: G,
                type: H,
                dataType: "html",
                data: J,
                complete: function (M, L) {
                    if (L == "success" || L == "notmodified") {
                        F.html(E ? o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g, "")).find(E) : M.responseText)
                    }
                    if (K) {
                        F.each(K, [M.responseText, L, M])
                    }
                }
            });
            return this
        },
        serialize: function () {
            return o.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? o.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password|search/i.test(this.type))
            }).map(function (E, F) {
                var G = o(this).val();
                return G == null ? null : o.isArray(G) ? o.map(G, function (I, H) {
                    return {
                        name: F.name,
                        value: I
                    }
                }) : {
                    name: F.name,
                    value: G
                }
            }).get()
        }
    });
    o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function (E, F) {
        o.fn[F] = function (G) {
            return this.bind(F, G)
        }
    });
    var r = e();
    o.extend({
        get: function (E, G, H, F) {
            if (o.isFunction(G)) {
                H = G;
                G = null
            }
            return o.ajax({
                type: "GET",
                url: E,
                data: G,
                success: H,
                dataType: F
            })
        },
        getScript: function (E, F) {
            return o.get(E, null, F, "script")
        },
        getJSON: function (E, F, G) {
            return o.get(E, F, G, "json")
        },
        post: function (E, G, H, F) {
            if (o.isFunction(G)) {
                H = G;
                G = {}
            }
            return o.ajax({
                type: "POST",
                url: E,
                data: G,
                success: H,
                dataType: F
            })
        },
        ajaxSetup: function (E) {
            o.extend(o.ajaxSettings, E)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: function () {
                return l.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest()
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        ajax: function (M) {
            M = o.extend(true, M, o.extend(true, {},
            o.ajaxSettings, M));
            var W, F = /=\?(&|$)/g,
                R, V, G = M.type.toUpperCase();
            if (M.data && M.processData && typeof M.data !== "string") {
                M.data = o.param(M.data)
            }
            if (M.dataType == "jsonp") {
                if (G == "GET") {
                    if (!M.url.match(F)) {
                        M.url += (M.url.match(/\?/) ? "&" : "?") + (M.jsonp || "callback") + "=?"
                    }
                } else {
                    if (!M.data || !M.data.match(F)) {
                        M.data = (M.data ? M.data + "&" : "") + (M.jsonp || "callback") + "=?"
                    }
                }
                M.dataType = "json"
            }
            if (M.dataType == "json" && (M.data && M.data.match(F) || M.url.match(F))) {
                W = "jsonp" + r++;
                if (M.data) {
                    M.data = (M.data + "").replace(F, "=" + W + "$1")
                }
                M.url = M.url.replace(F, "=" + W + "$1");
                M.dataType = "script";
                l[W] = function (X) {
                    V = X;
                    I();
                    L();
                    l[W] = g;
                    try {
                        delete l[W]
                    } catch(Y) {}
                    if (H) {
                        H.removeChild(T)
                    }
                }
            }
            if (M.dataType == "script" && M.cache == null) {
                M.cache = false
            }
            if (M.cache === false && G == "GET") {
                var E = e();
                var U = M.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + E + "$2");
                M.url = U + ((U == M.url) ? (M.url.match(/\?/) ? "&" : "?") + "_=" + E : "")
            }
            if (M.data && G == "GET") {
                M.url += (M.url.match(/\?/) ? "&" : "?") + M.data;
                M.data = null
            }
            if (M.global && !o.active++) {
                o.event.trigger("ajaxStart")
            }
            var Q = /^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);
            if (M.dataType == "script" && G == "GET" && Q && (Q[1] && Q[1] != location.protocol || Q[2] != location.host)) {
                var H = document.getElementsByTagName("head")[0];
                var T = document.createElement("script");
                T.src = M.url;
                if (M.scriptCharset) {
                    T.charset = M.scriptCharset
                }
                if (!W) {
                    var O = false;
                    T.onload = T.onreadystatechange = function () {
                        if (!O && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                            O = true;
                            I();
                            L();
                            T.onload = T.onreadystatechange = null;
                            H.removeChild(T)
                        }
                    }
                }
                H.appendChild(T);
                return g
            }
            var K = false;
            var J = M.xhr();
            if (M.username) {
                J.open(G, M.url, M.async, M.username, M.password)
            } else {
                J.open(G, M.url, M.async)
            }
            try {
                if (M.data) {
                    J.setRequestHeader("Content-Type", M.contentType)
                }
                if (M.ifModified) {
                    J.setRequestHeader("If-Modified-Since", o.lastModified[M.url] || "Thu, 01 Jan 1970 00:00:00 GMT")
                }
                J.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                J.setRequestHeader("Accept", M.dataType && M.accepts[M.dataType] ? M.accepts[M.dataType] + ", */*" : M.accepts._default)
            } catch(S) {}
            if (M.beforeSend && M.beforeSend(J, M) === false) {
                if (M.global && !--o.active) {
                    o.event.trigger("ajaxStop")
                }
                J.abort();
                return false
            }
            if (M.global) {
                o.event.trigger("ajaxSend", [J, M])
            }
            var N = function (X) {
                if (J.readyState == 0) {
                    if (P) {
                        clearInterval(P);
                        P = null;
                        if (M.global && !--o.active) {
                            o.event.trigger("ajaxStop")
                        }
                    }
                } else {
                    if (!K && J && (J.readyState == 4 || X == "timeout")) {
                        K = true;
                        if (P) {
                            clearInterval(P);
                            P = null
                        }
                        R = X == "timeout" ? "timeout" : !o.httpSuccess(J) ? "error" : M.ifModified && o.httpNotModified(J, M.url) ? "notmodified" : "success";
                        if (R == "success") {
                            try {
                                V = o.httpData(J, M.dataType, M)
                            } catch(Z) {
                                R = "parsererror"
                            }
                        }
                        if (R == "success") {
                            var Y;
                            try {
                                Y = J.getResponseHeader("Last-Modified")
                            } catch(Z) {}
                            if (M.ifModified && Y) {
                                o.lastModified[M.url] = Y
                            }
                            if (!W) {
                                I()
                            }
                        } else {
                            o.handleError(M, J, R)
                        }
                        L();
                        if (X) {
                            J.abort()
                        }
                        if (M.async) {
                            J = null
                        }
                    }
                }
            };
            if (M.async) {
                var P = setInterval(N, 13);
                if (M.timeout > 0) {
                    setTimeout(function () {
                        if (J && !K) {
                            N("timeout")
                        }
                    },
                    M.timeout)
                }
            }
            try {
                J.send(M.data)
            } catch(S) {
                o.handleError(M, J, null, S)
            }
            if (!M.async) {
                N()
            }
            function I() {
                if (M.success) {
                    M.success(V, R)
                }
                if (M.global) {
                    o.event.trigger("ajaxSuccess", [J, M])
                }
            }
            function L() {
                if (M.complete) {
                    M.complete(J, R)
                }
                if (M.global) {
                    o.event.trigger("ajaxComplete", [J, M])
                }
                if (M.global && !--o.active) {
                    o.event.trigger("ajaxStop")
                }
            }
            return J
        },
        handleError: function (F, H, E, G) {
            if (F.error) {
                F.error(H, E, G)
            }
            if (F.global) {
                o.event.trigger("ajaxError", [H, F, G])
            }
        },
        active: 0,
        httpSuccess: function (F) {
            try {
                return !F.status && location.protocol == "file:" || (F.status >= 200 && F.status < 300) || F.status == 304 || F.status == 1223
            } catch(E) {}
            return false
        },
        httpNotModified: function (G, E) {
            try {
                var H = G.getResponseHeader("Last-Modified");
                return G.status == 304 || H == o.lastModified[E]
            } catch(F) {}
            return false
        },
        httpData: function (J, H, G) {
            var F = J.getResponseHeader("content-type"),
                E = H == "xml" || !H && F && F.indexOf("xml") >= 0,
                I = E ? J.responseXML : J.responseText;
            if (E && I.documentElement.tagName == "parsererror") {
                throw "parsererror"
            }
            if (G && G.dataFilter) {
                I = G.dataFilter(I, H)
            }
            if (typeof I === "string") {
                if (H == "script") {
                    o.globalEval(I)
                }
                if (H == "json") {
                    I = l["eval"]("(" + I + ")")
                }
            }
            return I
        },
        param: function (E) {
            var G = [];

            function H(I, J) {
                G[G.length] = encodeURIComponent(I) + "=" + encodeURIComponent(J)
            }
            if (o.isArray(E) || E.jquery) {
                o.each(E, function () {
                    H(this.name, this.value)
                })
            } else {
                for (var F in E) {
                    if (o.isArray(E[F])) {
                        o.each(E[F], function () {
                            H(F, this)
                        })
                    } else {
                        H(F, o.isFunction(E[F]) ? E[F]() : E[F])
                    }
                }
            }
            return G.join("&").replace(/%20/g, "+")
        }
    });
    var m = {},
        n, d = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ];

    function t(F, E) {
        var G = {};
        o.each(d.concat.apply([], d.slice(0, E)), function () {
            G[this] = F
        });
        return G
    }
    o.fn.extend({
        show: function (J, L) {
            if (J) {
                return this.animate(t("show", 3), J, L)
            } else {
                for (var H = 0, F = this.length; H < F; H++) {
                    var E = o.data(this[H], "olddisplay");
                    this[H].style.display = E || "";
                    if (o.css(this[H], "display") === "none") {
                        var G = this[H].tagName,
                            K;
                        if (m[G]) {
                            K = m[G]
                        } else {
                            var I = o("<" + G + " />").appendTo("body");
                            K = I.css("display");
                            if (K === "none") {
                                K = "block"
                            }
                            I.remove();
                            m[G] = K
                        }
                        o.data(this[H], "olddisplay", K)
                    }
                }
                for (var H = 0, F = this.length; H < F; H++) {
                    this[H].style.display = o.data(this[H], "olddisplay") || ""
                }
                return this
            }
        },
        hide: function (H, I) {
            if (H) {
                return this.animate(t("hide", 3), H, I)
            } else {
                for (var G = 0, F = this.length; G < F; G++) {
                    var E = o.data(this[G], "olddisplay");
                    if (!E && E !== "none") {
                        o.data(this[G], "olddisplay", o.css(this[G], "display"))
                    }
                }
                for (var G = 0, F = this.length; G < F; G++) {
                    this[G].style.display = "none"
                }
                return this
            }
        },
        _toggle: o.fn.toggle,
        toggle: function (G, F) {
            var E = typeof G === "boolean";
            return o.isFunction(G) && o.isFunction(F) ? this._toggle.apply(this, arguments) : G == null || E ? this.each(function () {
                var H = E ? G : o(this).is(":hidden");
                o(this)[H ? "show" : "hide"]()
            }) : this.animate(t("toggle", 3), G, F)
        },
        fadeTo: function (E, G, F) {
            return this.animate({
                opacity: G
            },
            E, F)
        },
        animate: function (I, F, H, G) {
            var E = o.speed(F, H, G);
            return this[E.queue === false ? "each" : "queue"](function () {
                var K = o.extend({},
                E),
                    M, L = this.nodeType == 1 && o(this).is(":hidden"),
                    J = this;
                for (M in I) {
                    if (I[M] == "hide" && L || I[M] == "show" && !L) {
                        return K.complete.call(this)
                    }
                    if ((M == "height" || M == "width") && this.style) {
                        K.display = o.css(this, "display");
                        K.overflow = this.style.overflow
                    }
                }
                if (K.overflow != null) {
                    this.style.overflow = "hidden"
                }
                K.curAnim = o.extend({},
                I);
                o.each(I, function (O, S) {
                    var R = new o.fx(J, K, O);
                    if (/toggle|show|hide/.test(S)) {
                        R[S == "toggle" ? L ? "show" : "hide" : S](I)
                    } else {
                        var Q = S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),
                            T = R.cur(true) || 0;
                        if (Q) {
                            var N = parseFloat(Q[2]),
                                P = Q[3] || "px";
                            if (P != "px") {
                                J.style[O] = (N || 1) + P;
                                T = ((N || 1) / R.cur(true)) * T;
                                J.style[O] = T + P
                            }
                            if (Q[1]) {
                                N = ((Q[1] == "-=" ? -1 : 1) * N) + T
                            }
                            R.custom(T, N, P)
                        } else {
                            R.custom(T, S, "")
                        }
                    }
                });
                return true
            })
        },
        stop: function (F, E) {
            var G = o.timers;
            if (F) {
                this.queue([])
            }
            this.each(function () {
                for (var H = G.length - 1; H >= 0; H--) {
                    if (G[H].elem == this) {
                        if (E) {
                            G[H](true)
                        }
                        G.splice(H, 1)
                    }
                }
            });
            if (!E) {
                this.dequeue()
            }
            return this
        }
    });
    o.each({
        slideDown: t("show", 1),
        slideUp: t("hide", 1),
        slideToggle: t("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    },


    function (E, F) {
        o.fn[E] = function (G, H) {
            return this.animate(F, G, H)
        }
    });
    o.extend({
        speed: function (G, H, F) {
            var E = typeof G === "object" ? G : {
                complete: F || !F && H || o.isFunction(G) && G,
                duration: G,
                easing: F && H || H && !o.isFunction(H) && H
            };
            E.duration = o.fx.off ? 0 : typeof E.duration === "number" ? E.duration : o.fx.speeds[E.duration] || o.fx.speeds._default;
            E.old = E.complete;
            E.complete = function () {
                if (E.queue !== false) {
                    o(this).dequeue()
                }
                if (o.isFunction(E.old)) {
                    E.old.call(this)
                }
            };
            return E
        },
        easing: {
            linear: function (G, H, E, F) {
                return E + F * G
            },
            swing: function (G, H, E, F) {
                return ((-Math.cos(G * Math.PI) / 2) + 0.5) * F + E
            }
        },
        timers: [],
        fx: function (F, E, G) {
            this.options = E;
            this.elem = F;
            this.prop = G;
            if (!E.orig) {
                E.orig = {}
            }
        }
    });
    o.fx.prototype = {
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }(o.fx.step[this.prop] || o.fx.step._default)(this);
            if ((this.prop == "height" || this.prop == "width") && this.elem.style) {
                this.elem.style.display = "block"
            }
        },
        cur: function (F) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var E = parseFloat(o.css(this.elem, this.prop, F));
            return E && E > -10000 ? E : parseFloat(o.curCSS(this.elem, this.prop)) || 0
        },
        custom: function (I, H, G) {
            this.startTime = e();
            this.start = I;
            this.end = H;
            this.unit = G || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var E = this;

            function F(J) {
                return E.step(J)
            }
            F.elem = this.elem;
            if (F() && o.timers.push(F) && !n) {
                n = setInterval(function () {
                    var K = o.timers;
                    for (var J = 0; J < K.length; J++) {
                        if (!K[J]()) {
                            K.splice(J--, 1)
                        }
                    }
                    if (!K.length) {
                        clearInterval(n);
                        n = g
                    }
                },
                13)
            }
        },
        show: function () {
            this.options.orig[this.prop] = o.attr(this.elem.style, this.prop);
            this.options.show = true;
            this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0, this.cur());
            o(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = o.attr(this.elem.style, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (H) {
            var G = e();
            if (H || G >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                var E = true;
                for (var F in this.options.curAnim) {
                    if (this.options.curAnim[F] !== true) {
                        E = false
                    }
                }
                if (E) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        this.elem.style.display = this.options.display;
                        if (o.css(this.elem, "display") == "none") {
                            this.elem.style.display = "block"
                        }
                    }
                    if (this.options.hide) {
                        o(this.elem).hide()
                    }
                    if (this.options.hide || this.options.show) {
                        for (var I in this.options.curAnim) {
                            o.attr(this.elem.style, I, this.options.orig[I])
                        }
                    }
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                var J = G - this.startTime;
                this.state = J / this.options.duration;
                this.pos = o.easing[this.options.easing || (o.easing.swing ? "swing" : "linear")](this.state, J, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update()
            }
            return true
        }
    };
    o.extend(o.fx, {
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (E) {
                o.attr(E.elem.style, "opacity", E.now)
            },
            _default: function (E) {
                if (E.elem.style && E.elem.style[E.prop] != null) {
                    E.elem.style[E.prop] = E.now + E.unit
                } else {
                    E.elem[E.prop] = E.now
                }
            }
        }
    });
    if (document.documentElement.getBoundingClientRect) {
        o.fn.offset = function () {
            if (!this[0]) {
                return {
                    top: 0,
                    left: 0
                }
            }
            if (this[0] === this[0].ownerDocument.body) {
                return o.offset.bodyOffset(this[0])
            }
            var G = this[0].getBoundingClientRect(),
                J = this[0].ownerDocument,
                F = J.body,
                E = J.documentElement,
                L = E.clientTop || F.clientTop || 0,
                K = E.clientLeft || F.clientLeft || 0,
                I = G.top + (self.pageYOffset || o.boxModel && E.scrollTop || F.scrollTop) - L,
                H = G.left + (self.pageXOffset || o.boxModel && E.scrollLeft || F.scrollLeft) - K;
            return {
                top: I,
                left: H
            }
        }
    } else {
        o.fn.offset = function () {
            if (!this[0]) {
                return {
                    top: 0,
                    left: 0
                }
            }
            if (this[0] === this[0].ownerDocument.body) {
                return o.offset.bodyOffset(this[0])
            }
            o.offset.initialized || o.offset.initialize();
            var J = this[0],
                G = J.offsetParent,
                F = J,
                O = J.ownerDocument,
                M, H = O.documentElement,
                K = O.body,
                L = O.defaultView,
                E = L.getComputedStyle(J, null),
                N = J.offsetTop,
                I = J.offsetLeft;
            while ((J = J.parentNode) && J !== K && J !== H) {
                M = L.getComputedStyle(J, null);
                N -= J.scrollTop,
                I -= J.scrollLeft;
                if (J === G) {
                    N += J.offsetTop,
                    I += J.offsetLeft;
                    if (o.offset.doesNotAddBorder && !(o.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(J.tagName))) {
                        N += parseInt(M.borderTopWidth, 10) || 0,
                        I += parseInt(M.borderLeftWidth, 10) || 0
                    }
                    F = G,
                    G = J.offsetParent
                }
                if (o.offset.subtractsBorderForOverflowNotVisible && M.overflow !== "visible") {
                    N += parseInt(M.borderTopWidth, 10) || 0,
                    I += parseInt(M.borderLeftWidth, 10) || 0
                }
                E = M
            }
            if (E.position === "relative" || E.position === "static") {
                N += K.offsetTop,
                I += K.offsetLeft
            }
            if (E.position === "fixed") {
                N += Math.max(H.scrollTop, K.scrollTop),
                I += Math.max(H.scrollLeft, K.scrollLeft)
            }
            return {
                top: N,
                left: I
            }
        }
    }
    o.offset = {
        initialize: function () {
            if (this.initialized) {
                return
            }
            var L = document.body,
                F = document.createElement("div"),
                H, G, N, I, M, E, J = L.style.marginTop,
                K = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
            M = {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            };
            for (E in M) {
                F.style[E] = M[E]
            }
            F.innerHTML = K;
            L.insertBefore(F, L.firstChild);
            H = F.firstChild,
            G = H.firstChild,
            I = H.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (G.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (I.offsetTop === 5);
            H.style.overflow = "hidden",
            H.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = (G.offsetTop === -5);
            L.style.marginTop = "1px";
            this.doesNotIncludeMarginInBodyOffset = (L.offsetTop === 0);
            L.style.marginTop = J;
            L.removeChild(F);
            this.initialized = true
        },
        bodyOffset: function (E) {
            o.offset.initialized || o.offset.initialize();
            var G = E.offsetTop,
                F = E.offsetLeft;
            if (o.offset.doesNotIncludeMarginInBodyOffset) {
                G += parseInt(o.curCSS(E, "marginTop", true), 10) || 0,
                F += parseInt(o.curCSS(E, "marginLeft", true), 10) || 0
            }
            return {
                top: G,
                left: F
            }
        }
    };
    o.fn.extend({
        position: function () {
            var I = 0,
                H = 0,
                F;
            if (this[0]) {
                var G = this.offsetParent(),
                    J = this.offset(),
                    E = /^body|html$/i.test(G[0].tagName) ? {
                    top: 0,
                    left: 0
                } : G.offset();
                J.top -= j(this, "marginTop");
                J.left -= j(this, "marginLeft");
                E.top += j(G, "borderTopWidth");
                E.left += j(G, "borderLeftWidth");
                F = {
                    top: J.top - E.top,
                    left: J.left - E.left
                }
            }
            return F
        },
        offsetParent: function () {
            var E = this[0].offsetParent || document.body;
            while (E && (!/^body|html$/i.test(E.tagName) && o.css(E, "position") == "static")) {
                E = E.offsetParent
            }
            return o(E)
        }
    });
    o.each(["Left", "Top"], function (F, E) {
        var G = "scroll" + E;
        o.fn[G] = function (H) {
            if (!this[0]) {
                return null
            }
            return H !== g ? this.each(function () {
                this == l || this == document ? l.scrollTo(!F ? H : o(l).scrollLeft(), F ? H : o(l).scrollTop()) : this[G] = H
            }) : this[0] == l || this[0] == document ? self[F ? "pageYOffset" : "pageXOffset"] || o.boxModel && document.documentElement[G] || document.body[G] : this[0][G]
        }
    });
    o.each(["Height", "Width"], function (I, G) {
        var E = I ? "Left" : "Top",
        H = I ? "Right" : "Bottom",
        F = G.toLowerCase();
        o.fn["inner" + G] = function () {
            return this[0] ? o.css(this[0], F, false, "padding") : null
        };
        o.fn["outer" + G] = function (K) {
            return this[0] ? o.css(this[0], F, false, K ? "margin" : "border") : null
        };
        var J = G.toLowerCase();
        o.fn[J] = function (K) {
            return this[0] == l ? document.compatMode == "CSS1Compat" && document.documentElement["client" + G] || document.body["client" + G] : this[0] == document ? Math.max(document.documentElement["client" + G], document.body["scroll" + G], document.documentElement["scroll" + G], document.body["offset" + G], document.documentElement["offset" + G]) : K === g ? (this.length ? o.css(this[0], J) : null) : this.css(J, typeof K === "string" ? K : K + "px")
        }
    })
})();
(function (d) {
    d.tools = d.tools || {};
    d.tools.tabs = {
        version: "1.0.4",
        conf: {
            tabs: "a",
            current: "current",
            onBeforeClick: null,
            onClick: null,
            effect: "default",
            initialIndex: 0,
            event: "click",
            api: false,
            rotate: false
        },
        addEffect: function (e, f) {
            c[e] = f
        }
    };
    var c = {
        "default": function (f, e) {
            this.getPanes().hide().eq(f).show();
            e.call()
        },
        fade: function (g, e) {
            var f = this.getConf(),
                j = f.fadeOutSpeed,
                h = this.getPanes();
            if (j) {
                h.fadeOut(j)
            } else {
                h.hide()
            }
            h.eq(g).fadeIn(f.fadeInSpeed, e)
        },
        slide: function (f, e) {
            this.getPanes().slideUp(200);
            this.getPanes().eq(f).slideDown(400, e)
        },
        ajax: function (f, e) {
            this.getPanes().eq(0).load(this.getTabs().eq(f).attr("href"), e)
        }
    };
    var b;
    d.tools.tabs.addEffect("horizontal", function (f, e) {
        if (!b) {
            b = this.getPanes().eq(0).width()
        }
        this.getCurrentPane().animate({
            width: 0
        },


        function () {
            d(this).hide()
        });
        this.getPanes().eq(f).animate({
            width: b
        },


        function () {
            d(this).show();
            e.call()
        })
    });

    function a(g, h, f) {
        var e = this,
            j = d(this),
            i;
        d.each(f, function (k, l) {
            if (d.isFunction(l)) {
                j.bind(k, l)
            }
        });
        d.extend(this, {
            click: function (k, n) {
                var o = e.getCurrentPane();
                var l = g.eq(k);
                if (typeof k == "string" && k.replace("#", "")) {
                    l = g.filter("[href*=" + k.replace("#", "") + "]");
                    k = Math.max(g.index(l), 0)
                }
                if (f.rotate) {
                    var m = g.length - 1;
                    if (k < 0) {
                        return e.click(m, n)
                    }
                    if (k > m) {
                        return e.click(0, n)
                    }
                }
                if (!l.length) {
                    if (i >= 0) {
                        return e
                    }
                    k = f.initialIndex;
                    l = g.eq(k)
                }
                if (k === i) {
                    return e
                }
                n = n || d.Event();
                n.type = "onBeforeClick";
                j.trigger(n, [k]);
                if (n.isDefaultPrevented()) {
                    return
                }
                c[f.effect].call(e, k, function () {
                    n.type = "onClick";
                    j.trigger(n, [k])
                });
                n.type = "onStart";
                j.trigger(n, [k]);
                if (n.isDefaultPrevented()) {
                    return
                }
                i = k;
                g.removeClass(f.current);
                l.addClass(f.current);
                return e
            },
            getConf: function () {
                return f
            },
            getTabs: function () {
                return g
            },
            getPanes: function () {
                return h
            },
            getCurrentPane: function () {
                return h.eq(i)
            },
            getCurrentTab: function () {
                return g.eq(i)
            },
            getIndex: function () {
                return i
            },
            next: function () {
                return e.click(i + 1)
            },
            prev: function () {
                return e.click(i - 1)
            },
            bind: function (k, l) {
                j.bind(k, l);
                return e
            },
            onBeforeClick: function (k) {
                return this.bind("onBeforeClick", k)
            },
            onClick: function (k) {
                return this.bind("onClick", k)
            },
            unbind: function (k) {
                j.unbind(k);
                return e
            }
        });
        g.each(function (k) {
            d(this).bind(f.event, function (l) {
                e.click(k, l);
                return false
            })
        });
        if (location.hash) {
            e.click(location.hash)
        } else {
            if (f.initialIndex === 0 || f.initialIndex > 0) {
                e.click(f.initialIndex)
            }
        }
        h.find("a[href^=#]").click(function (k) {
            e.click(d(this).attr("href"), k)
        })
    }
    d.fn.tabs = function (i, f) {
        var g = this.eq(typeof f == "number" ? f : 0).data("tabs");
        if (g) {
            return g
        }
        if (d.isFunction(f)) {
            f = {
                onBeforeClick: f
            }
        }
        var h = d.extend({},
        d.tools.tabs.conf),
            e = this.length;
        f = d.extend(h, f);
        this.each(function (l) {
            var j = d(this);
            var k = j.find(f.tabs);
            if (!k.length) {
                k = j.children()
            }
            var m = i.jquery ? i : j.children(i);
            if (!m.length) {
                m = e == 1 ? d(i) : j.parent().find(i)
            }
            g = new a(k, m, f);
            j.data("tabs", g)
        });
        return f.api ? g : this
    }
})(jQuery);
(function (b) {
    var a = b.tools.tabs;
    a.plugins = a.plugins || {};
    a.plugins.slideshow = {
        version: "1.0.2",
        conf: {
            next: ".forward",
            prev: ".backward",
            disabledClass: "disabled",
            autoplay: false,
            autopause: true,
            interval: 3000,
            clickable: true,
            api: false
        }
    };
    b.prototype.slideshow = function (e) {
        var f = b.extend({},
        a.plugins.slideshow.conf),
            c = this.length,
            d;
        e = b.extend(f, e);
        this.each(function () {
            var p = b(this),
                m = p.tabs(),
                i = b(m),
                o = m;
            b.each(e, function (t, u) {
                if (b.isFunction(u)) {
                    m.bind(t, u)
                }
            });

            function n(t) {
                return c == 1 ? b(t) : p.parent().find(t)
            }
            var s = n(e.next).click(function () {
                m.next()
            });
            var q = n(e.prev).click(function () {
                m.prev()
            });
            var h, j, l, g = false;
            b.extend(m, {
                play: function () {
                    if (h) {
                        return
                    }
                    var t = b.Event("onBeforePlay");
                    i.trigger(t);
                    if (t.isDefaultPrevented()) {
                        return m
                    }
                    g = false;
                    h = setInterval(m.next, e.interval);
                    i.trigger("onPlay");
                    m.next()
                },
                pause: function () {
                    if (!h) {
                        return m
                    }
                    var t = b.Event("onBeforePause");
                    i.trigger(t);
                    if (t.isDefaultPrevented()) {
                        return m
                    }
                    h = clearInterval(h);
                    l = clearInterval(l);
                    i.trigger("onPause")
                },
                stop: function () {
                    m.pause();
                    g = true
                },
                onBeforePlay: function (t) {
                    return m.bind("onBeforePlay", t)
                },
                onPlay: function (t) {
                    return m.bind("onPlay", t)
                },
                onBeforePause: function (t) {
                    return m.bind("onBeforePause", t)
                },
                onPause: function (t) {
                    return m.bind("onPause", t)
                }
            });
            if (e.autopause) {
                var k = m.getTabs().add(s).add(q).add(m.getPanes());
                k.hover(function () {
                    m.pause();
                    j = clearInterval(j)
                },


                function () {
                    if (!g) {
                        j = setTimeout(m.play, e.interval)
                    }
                })
            }
            if (e.autoplay) {
                l = setTimeout(m.play, e.interval)
            } else {
                m.stop()
            }
            if (e.clickable) {
                m.getPanes().click(function () {
                    m.next()
                })
            }
            if (!m.getConf().rotate) {
                var r = e.disabledClass;
                if (!m.getIndex()) {
                    q.addClass(r)
                }
                m.onBeforeClick(function (u, t) {
                    if (!t) {
                        q.addClass(r)
                    } else {
                        q.removeClass(r);
                        if (t == m.getTabs().length - 1) {
                            s.addClass(r)
                        } else {
                            s.removeClass(r)
                        }
                    }
                })
            }
        });
        return e.api ? d : this
    }
})(jQuery);
(function (d) {
    var a = d.tools.tabs;
    a.plugins = a.plugins || {};
    a.plugins.history = {
        version: "1.0.2",
        conf: {
            api: false
        }
    };
    var e, b;

    function c(f) {
        if (f) {
            var g = b.contentWindow.document;
            g.open().close();
            g.location.hash = f
        }
    }
    d.fn.onHash = function (g) {
        var f = this;
        if (d.browser.msie && d.browser.version < "8") {
            if (!b) {
                b = d("<iframe/>").attr("src", "javascript:false;").hide().get(0);
                d("body").append(b);
                setInterval(function () {
                    var i = b.contentWindow.document,
                        j = i.location.hash;
                    if (e !== j) {
                        d.event.trigger("hash", j);
                        e = j
                    }
                },
                100);
                c(location.hash || "#")
            }
            f.bind("click.hash", function (h) {
                c(d(this).attr("href"))
            })
        } else {
            setInterval(function () {
                var j = location.hash;
                var i = f.filter("[href$=" + j + "]");
                if (!i.length) {
                    j = j.replace("#", "");
                    i = f.filter("[href$=" + j + "]")
                }
                if (i.length && j !== e) {
                    e = j;
                    d.event.trigger("hash", j)
                }
            },
            100)
        }
        d(window).bind("hash", g);
        return this
    };
    d.fn.history = function (g) {
        var h = d.extend({},
        a.plugins.history.conf),
            f;
        g = d.extend(h, g);
        this.each(function () {
            var j = d(this).tabs(),
                i = j.getTabs();
            if (j) {
                f = j
            }
            i.onHash(function (k, l) {
                if (!l || l == "#") {
                    l = j.getConf().initialIndex
                }
                j.click(l)
            });
            i.click(function (k) {
                location.hash = d(this).attr("href").replace("#", "")
            })
        });
        return g.api ? f : this
    }
})(jQuery);
(function (c) {
    var d = [];
    c.tools = c.tools || {};
    c.tools.tooltip = {
        version: "1.1.2",
        conf: {
            effect: "toggle",
            fadeOutSpeed: "fast",
            tip: null,
            predelay: 0,
            delay: 30,
            opacity: 1,
            lazy: undefined,
            position: ["top", "center"],
            offset: [0, 0],
            cancelDefault: true,
            relative: false,
            oneInstance: true,
            events: {
                def: "mouseover,mouseout",
                input: "focus,blur",
                widget: "focus mouseover,blur mouseout",
                tooltip: "mouseover,mouseout"
            },
            api: false
        },
        addEffect: function (e, g, f) {
            b[e] = [g, f]
        }
    };
    var b = {
        toggle: [function (e) {
            var f = this.getConf(),
                g = this.getTip(),
                h = f.opacity;
            if (h < 1) {
                g.css({
                    opacity: h
                })
            }
            g.show();
            e.call()
        },


        function (e) {
            this.getTip().hide();
            e.call()
        }],
        fade: [function (e) {
            this.getTip().fadeIn(this.getConf().fadeInSpeed, e)
        },


        function (e) {
            this.getTip().fadeOut(this.getConf().fadeOutSpeed, e)
        }]
    };

    function a(f, g) {
        var p = this,
            k = c(this);
        f.data("tooltip", p);
        var l = f.next();
        if (g.tip) {
            l = c(g.tip);
            if (l.length > 1) {
                l = f.nextAll(g.tip).eq(0);
                if (!l.length) {
                    l = f.parent().nextAll(g.tip).eq(0)
                }
            }
        }
        function o(u) {
            var t = g.relative ? f.position().top : f.offset().top,
            s = g.relative ? f.position().left : f.offset().left,
            v = g.position[0];
            t -= l.outerHeight() - g.offset[0];
            s += f.outerWidth() + g.offset[1];
            var q = l.outerHeight() + f.outerHeight();
            if (v == "center") {
                t += q / 2
            }
            if (v == "bottom") {
                t += q
            }
            v = g.position[1];
            var r = l.outerWidth() + f.outerWidth();
            if (v == "center") {
                s -= r / 2
            }
            if (v == "left") {
                s -= r
            }
            return {
                top: t,
                left: s
            }
        }
        var i = f.is(":input"),
            e = i && f.is(":checkbox, :radio, select, :button"),
            h = f.attr("type"),
            n = g.events[h] || g.events[i ? (e ? "widget" : "input") : "def"];
        n = n.split(/,\s*/);
        if (n.length != 2) {
            throw "Tooltip: bad events configuration for " + h
        }
        f.bind(n[0], function (r) {
            if (g.oneInstance) {
                c.each(d, function () {
                    this.hide()
                })
            }
            var q = l.data("trigger");
            if (q && q[0] != this) {
                l.hide().stop(true, true)
            }
            r.target = this;
            p.show(r);
            n = g.events.tooltip.split(/,\s*/);
            l.bind(n[0], function () {
                p.show(r)
            });
            if (n[1]) {
                l.bind(n[1], function () {
                    p.hide(r)
                })
            }
        });
        f.bind(n[1], function (q) {
            p.hide(q)
        });
        if (!c.browser.msie && !i && !g.predelay) {
            f.mousemove(function () {
                if (!p.isShown()) {
                    f.triggerHandler("mouseover")
                }
            })
        }
        if (g.opacity < 1) {
            l.css("opacity", g.opacity)
        }
        var m = 0,
            j = f.attr("title");
        if (j && g.cancelDefault) {
            f.removeAttr("title");
            f.data("title", j)
        }
        c.extend(p, {
            show: function (r) {
                if (r) {
                    f = c(r.target)
                }
                clearTimeout(l.data("timer"));
                if (l.is(":animated") || l.is(":visible")) {
                    return p
                }
                function q() {
                    l.data("trigger", f);
                    var t = o(r);
                    if (g.tip && j) {
                        l.html(f.data("title"))
                    }
                    r = r || c.Event();
                    r.type = "onBeforeShow";
                    k.trigger(r, [t]);
                    if (r.isDefaultPrevented()) {
                        return p
                    }
                    t = o(r);
                    l.css({
                        position: "absolute",
                        top: t.top,
                        left: t.left
                    });
                    var s = b[g.effect];
                    if (!s) {
                        throw 'Nonexistent effect "' + g.effect + '"'
                    }
                    s[0].call(p, function () {
                        r.type = "onShow";
                        k.trigger(r)
                    })
                }
                if (g.predelay) {
                    clearTimeout(m);
                    m = setTimeout(q, g.predelay)
                } else {
                    q()
                }
                return p
            },
            hide: function (r) {
                clearTimeout(l.data("timer"));
                clearTimeout(m);
                if (!l.is(":visible")) {
                    return
                }
                function q() {
                    r = r || c.Event();
                    r.type = "onBeforeHide";
                    k.trigger(r);
                    if (r.isDefaultPrevented()) {
                        return
                    }
                    b[g.effect][1].call(p, function () {
                        r.type = "onHide";
                        k.trigger(r)
                    })
                }
                if (g.delay && r) {
                    l.data("timer", setTimeout(q, g.delay))
                } else {
                    q()
                }
                return p
            },
            isShown: function () {
                return l.is(":visible, :animated")
            },
            getConf: function () {
                return g
            },
            getTip: function () {
                return l
            },
            getTrigger: function () {
                return f
            },
            bind: function (q, r) {
                k.bind(q, r);
                return p
            },
            onHide: function (q) {
                return this.bind("onHide", q)
            },
            onBeforeShow: function (q) {
                return this.bind("onBeforeShow", q)
            },
            onShow: function (q) {
                return this.bind("onShow", q)
            },
            onBeforeHide: function (q) {
                return this.bind("onBeforeHide", q)
            },
            unbind: function (q) {
                k.unbind(q);
                return p
            }
        });
        c.each(g, function (q, r) {
            if (c.isFunction(r)) {
                p.bind(q, r)
            }
        })
    }
    c.prototype.tooltip = function (e) {
        var f = this.eq(typeof e == "number" ? e : 0).data("tooltip");
        if (f) {
            return f
        }
        var g = c.extend(true, {},
        c.tools.tooltip.conf);
        if (c.isFunction(e)) {
            e = {
                onBeforeShow: e
            }
        } else {
            if (typeof e == "string") {
                e = {
                    tip: e
                }
            }
        }
        e = c.extend(true, g, e);
        if (typeof e.position == "string") {
            e.position = e.position.split(/,?\s/)
        }
        if (e.lazy !== false && (e.lazy === true || this.length > 20)) {
            this.one("mouseover", function (h) {
                f = new a(c(this), e);
                f.show(h);
                d.push(f)
            })
        } else {
            this.each(function () {
                f = new a(c(this), e);
                d.push(f)
            })
        }
        return e.api ? f : this
    }
})(jQuery);
(function (b) {
    var a = b.tools.tooltip;
    a.effects = a.effects || {};
    a.effects.slide = {
        version: "1.0.0"
    };
    b.extend(a.conf, {
        direction: "up",
        bounce: false,
        slideOffset: 10,
        slideInSpeed: 200,
        slideOutSpeed: 200,
        slideFade: !b.browser.msie
    });
    var c = {
        up: ["-", "top"],
        down: ["+", "top"],
        left: ["-", "left"],
        right: ["+", "left"]
    };
    b.tools.tooltip.addEffect("slide", function (d) {
        var f = this.getConf(),
            g = this.getTip(),
            h = f.slideFade ? {
            opacity: f.opacity
        } : {},
        e = c[f.direction] || c.up;
        h[e[1]] = e[0] + "=" + f.slideOffset;
        if (f.slideFade) {
            g.css({
                opacity: 0
            })
        }
        g.show().animate(h, f.slideInSpeed, d)
    },


    function (e) {
        var g = this.getConf(),
            i = g.slideOffset,
            h = g.slideFade ? {
            opacity: 0
        } : {},
        f = c[g.direction] || c.up;
        var d = "" + f[0];
        if (g.bounce) {
            d = d == "+" ? "-" : "+"
        }
        h[f[1]] = d + "=" + i;
        this.getTip().animate(h, g.slideOutSpeed, function () {
            b(this).hide();
            e.call()
        })
    })
})(jQuery);
(function (d) {
    var c = d.tools.tooltip;
    c.plugins = c.plugins || {};
    c.plugins.dynamic = {
        version: "1.0.1",
        conf: {
            api: false,
            classNames: "top right bottom left"
        }
    };

    function b(h) {
        var e = d(window);
        var g = e.width() + e.scrollLeft();
        var f = e.height() + e.scrollTop();
        return [h.offset().top <= e.scrollTop(), g <= h.offset().left + h.width(), f <= h.offset().top + h.height(), e.scrollLeft() >= h.offset().left]
    }
    function a(f) {
        var e = f.length;
        while (e--) {
            if (f[e]) {
                return false
            }
        }
        return true
    }
    d.fn.dynamic = function (g) {
        var h = d.extend({},
        c.plugins.dynamic.conf),
            f;
        if (typeof g == "number") {
            g = {
                speed: g
            }
        }
        g = d.extend(h, g);
        var e = g.classNames.split(/\s/),
            i;
        this.each(function () {
            if (d(this).tooltip().jquery) {
                throw "Lazy feature not supported by dynamic plugin. set lazy: false for tooltip"
            }
            var j = d(this).tooltip().onBeforeShow(function (n, o) {
                var m = this.getTip(),
                    l = this.getConf();
                if (!i) {
                    i = [l.position[0], l.position[1], l.offset[0], l.offset[1], d.extend({},
                    l)]
                }
                d.extend(l, i[4]);
                l.position = [i[0], i[1]];
                l.offset = [i[2], i[3]];
                m.css({
                    visibility: "hidden",
                    position: "absolute",
                    top: o.top,
                    left: o.left
                }).show();
                var k = b(m);
                if (!a(k)) {
                    if (k[2]) {
                        d.extend(l, g.top);
                        l.position[0] = "top";
                        m.addClass(e[0])
                    }
                    if (k[3]) {
                        d.extend(l, g.right);
                        l.position[1] = "right";
                        m.addClass(e[1])
                    }
                    if (k[0]) {
                        d.extend(l, g.bottom);
                        l.position[0] = "bottom";
                        m.addClass(e[2])
                    }
                    if (k[1]) {
                        d.extend(l, g.left);
                        l.position[1] = "left";
                        m.addClass(e[3])
                    }
                    if (k[0] || k[2]) {
                        l.offset[0] *= -1
                    }
                    if (k[1] || k[3]) {
                        l.offset[1] *= -1
                    }
                }
                m.css({
                    visibility: "visible"
                }).hide()
            });
            j.onShow(function () {
                var l = this.getConf(),
                    k = this.getTip();
                l.position = [i[0], i[1]];
                l.offset = [i[2], i[3]]
            });
            j.onHide(function () {
                var k = this.getTip();
                k.removeClass(g.classNames)
            });
            f = j
        });
        return g.api ? f : this
    }
})(jQuery);
(function (b) {
    b.tools = b.tools || {};
    b.tools.scrollable = {
        version: "1.1.2",
        conf: {
            size: 5,
            vertical: false,
            speed: 400,
            keyboard: true,
            keyboardSteps: null,
            disabledClass: "disabled",
            hoverClass: null,
            clickable: true,
            activeClass: "active",
            easing: "swing",
            loop: false,
            items: ".items",
            item: null,
            prev: ".prev",
            next: ".next",
            prevPage: ".prevPage",
            nextPage: ".nextPage",
            api: false
        }
    };
    var c;

    function a(o, m) {
        var r = this,
            p = b(this),
            d = !m.vertical,
            e = o.children(),
            k = 0,
            i;
        if (!c) {
            c = r
        }
        b.each(m, function (s, t) {
            if (b.isFunction(t)) {
                p.bind(s, t)
            }
        });
        if (e.length > 1) {
            e = b(m.items, o)
        }
        function l(t) {
            var s = b(t);
            return m.globalNav ? s : o.parent().find(t)
        }
        o.data("finder", l);
        var f = l(m.prev),
            h = l(m.next),
            g = l(m.prevPage),
            n = l(m.nextPage);
        b.extend(r, {
            getIndex: function () {
                return k
            },
            getClickIndex: function () {
                var s = r.getItems();
                return s.index(s.filter("." + m.activeClass))
            },
            getConf: function () {
                return m
            },
            getSize: function () {
                return r.getItems().size()
            },
            getPageAmount: function () {
                return Math.ceil(this.getSize() / m.size)
            },
            getPageIndex: function () {
                return Math.ceil(k / m.size)
            },
            getNaviButtons: function () {
                return f.add(h).add(g).add(n)
            },
            getRoot: function () {
                return o
            },
            getItemWrap: function () {
                return e
            },
            getItems: function () {
                return e.children(m.item)
            },
            getVisibleItems: function () {
                return r.getItems().slice(k, k + m.size)
            },
            seekTo: function (s, w, t) {
                if (s < 0) {
                    s = 0
                }
                if (k === s) {
                    return r
                }
                if (b.isFunction(w)) {
                    t = w
                }
                if (s > r.getSize() - m.size) {
                    return m.loop ? r.begin() : this.end()
                }
                var u = r.getItems().eq(s);
                if (!u.length) {
                    return r
                }
                var v = b.Event("onBeforeSeek");
                p.trigger(v, [s]);
                if (v.isDefaultPrevented()) {
                    return r
                }
                if (w === undefined || b.isFunction(w)) {
                    w = m.speed
                }
                function x() {
                    if (t) {
                        t.call(r, s)
                    }
                    p.trigger("onSeek", [s])
                }
                if (d) {
                    e.animate({
                        left: -u.position().left
                    },
                    w, m.easing, x)
                } else {
                    e.animate({
                        top: -u.position().top
                    },
                    w, m.easing, x)
                }
                c = r;
                k = s;
                v = b.Event("onStart");
                p.trigger(v, [s]);
                if (v.isDefaultPrevented()) {
                    return r
                }
                f.add(g).toggleClass(m.disabledClass, s === 0);
                h.add(n).toggleClass(m.disabledClass, s >= r.getSize() - m.size);
                return r
            },
            move: function (u, t, s) {
                i = u > 0;
                return this.seekTo(k + u, t, s)
            },
            next: function (t, s) {
                return this.move(1, t, s)
            },
            prev: function (t, s) {
                return this.move(-1, t, s)
            },
            movePage: function (w, v, u) {
                i = w > 0;
                var s = m.size * w;
                var t = k % m.size;
                if (t > 0) {
                    s += (w > 0 ? -t : m.size - t)
                }
                return this.move(s, v, u)
            },
            prevPage: function (t, s) {
                return this.movePage(-1, t, s)
            },
            nextPage: function (t, s) {
                return this.movePage(1, t, s)
            },
            setPage: function (t, u, s) {
                return this.seekTo(t * m.size, u, s)
            },
            begin: function (t, s) {
                i = false;
                return this.seekTo(0, t, s)
            },
            end: function (t, s) {
                i = true;
                var u = this.getSize() - m.size;
                return u > 0 ? this.seekTo(u, t, s) : r
            },
            reload: function () {
                p.trigger("onReload");
                return r
            },
            focus: function () {
                c = r;
                return r
            },
            click: function (u) {
                var v = r.getItems().eq(u),
                    s = m.activeClass,
                    t = m.size;
                if (u < 0 || u >= r.getSize()) {
                    return r
                }
                if (t == 1) {
                    if (m.loop) {
                        return r.next()
                    }
                    if (u === 0 || u == r.getSize() - 1) {
                        i = (i === undefined) ? true : !i
                    }
                    return i === false ? r.prev() : r.next()
                }
                if (t == 2) {
                    if (u == k) {
                        u--
                    }
                    r.getItems().removeClass(s);
                    v.addClass(s);
                    return r.seekTo(u, time, fn)
                }
                if (!v.hasClass(s)) {
                    r.getItems().removeClass(s);
                    v.addClass(s);
                    var x = Math.floor(t / 2);
                    var w = u - x;
                    if (w > r.getSize() - t) {
                        w = r.getSize() - t
                    }
                    if (w !== u) {
                        return r.seekTo(w)
                    }
                }
                return r
            },
            bind: function (s, t) {
                p.bind(s, t);
                return r
            },
            unbind: function (s) {
                p.unbind(s);
                return r
            }
        });
        b.each("onBeforeSeek,onStart,onSeek,onReload".split(","), function (s, t) {
            r[t] = function (u) {
                return r.bind(t, u)
            }
        });
        f.addClass(m.disabledClass).click(function () {
            r.prev()
        });
        h.click(function () {
            r.next()
        });
        n.click(function () {
            r.nextPage()
        });
        if (r.getSize() < m.size) {
            h.add(n).addClass(m.disabledClass)
        }
        g.addClass(m.disabledClass).click(function () {
            r.prevPage()
        });
        var j = m.hoverClass,
            q = "keydown." + Math.random().toString().substring(10);
        r.onReload(function () {
            if (j) {
                r.getItems().hover(function () {
                    b(this).addClass(j)
                },


                function () {
                    b(this).removeClass(j)
                })
            }
            if (m.clickable) {
                r.getItems().each(function (s) {
                    b(this).unbind("click.scrollable").bind("click.scrollable", function (t) {
                        if (b(t.target).is("a")) {
                            return
                        }
                        return r.click(s)
                    })
                })
            }
            if (m.keyboard) {
                b(document).unbind(q).bind(q, function (t) {
                    if (t.altKey || t.ctrlKey) {
                        return
                    }
                    if (m.keyboard != "static" && c != r) {
                        return
                    }
                    var u = m.keyboardSteps;
                    if (d && (t.keyCode == 37 || t.keyCode == 39)) {
                        r.move(t.keyCode == 37 ? -u : u);
                        return t.preventDefault()
                    }
                    if (!d && (t.keyCode == 38 || t.keyCode == 40)) {
                        r.move(t.keyCode == 38 ? -u : u);
                        return t.preventDefault()
                    }
                    return true
                })
            } else {
                b(document).unbind(q)
            }
        });
        r.reload()
    }
    b.fn.scrollable = function (d) {
        var e = this.eq(typeof d == "number" ? d : 0).data("scrollable");
        if (e) {
            return e
        }
        var f = b.extend({},
        b.tools.scrollable.conf);
        d = b.extend(f, d);
        d.keyboardSteps = d.keyboardSteps || d.size;
        this.each(function () {
            e = new a(b(this), d);
            b(this).data("scrollable", e)
        });
        return d.api ? e : this
    }
})(jQuery);
(function (b) {
    var a = b.tools.scrollable;
    a.plugins = a.plugins || {};
    a.plugins.circular = {
        version: "0.5.1",
        conf: {
            api: false,
            clonedClass: "cloned"
        }
    };
    b.fn.circular = function (e) {
        var d = b.extend({},
        a.plugins.circular.conf),
            c;
        b.extend(d, e);
        this.each(function () {
            var i = b(this).scrollable(),
                n = i.getItems(),
                k = i.getConf(),
                f = i.getItemWrap(),
                j = 0;
            if (i) {
                c = i
            }
            if (n.length < k.size) {
                return false
            }
            n.slice(0, k.size).each(function (o) {
                b(this).clone().appendTo(f).click(function () {
                    i.click(n.length + o)
                }).addClass(d.clonedClass)
            });
            var l = b.makeArray(n.slice(-k.size)).reverse();
            b(l).each(function (o) {
                b(this).clone().prependTo(f).click(function () {
                    i.click(-o - 1)
                }).addClass(d.clonedClass)
            });
            var m = f.children(k.item);
            var h = k.hoverClass;
            if (h) {
                m.hover(function () {
                    b(this).addClass(h)
                },


                function () {
                    b(this).removeClass(h)
                })
            }
            function g(o) {
                var p = m.eq(o);
                if (k.vertical) {
                    f.css({
                        top: -p.position().top
                    })
                } else {
                    f.css({
                        left: -p.position().left
                    })
                }
            }
            g(k.size);
            b.extend(i, {
                move: function (s, r, p, q) {
                    var u = j + s + k.size;
                    var t = u > i.getSize() - k.size;
                    if (u <= 0 || t) {
                        var o = j + k.size + (t ? -n.length : n.length);
                        g(o);
                        u = o + s
                    }
                    if (q) {
                        m.removeClass(k.activeClass).eq(u + Math.floor(k.size / 2)).addClass(k.activeClass)
                    }
                    if (u === j + k.size) {
                        return self
                    }
                    return i.seekTo(u, r, p)
                },
                begin: function (p, o) {
                    return this.seekTo(k.size, p, o)
                },
                end: function (p, o) {
                    return this.seekTo(n.length, p, o)
                },
                click: function (p, r, q) {
                    if (!k.clickable) {
                        return self
                    }
                    if (k.size == 1) {
                        return this.next()
                    }
                    var s = p - j,
                        o = k.activeClass;
                    s -= Math.floor(k.size / 2);
                    return this.move(s, r, q, true)
                },
                getIndex: function () {
                    return j
                },
                setPage: function (p, q, o) {
                    return this.seekTo(p * k.size + k.size, q, o)
                },
                getPageAmount: function () {
                    return Math.ceil(n.length / k.size)
                },
                getPageIndex: function () {
                    if (j < 0) {
                        return this.getPageAmount() - 1
                    }
                    if (j >= n.length) {
                        return 0
                    }
                    var o = (j + k.size) / k.size - 1;
                    return o
                },
                getVisibleItems: function () {
                    var o = j + k.size;
                    return m.slice(o, o + k.size)
                }
            });
            i.onStart(function (p, o) {
                j = o - k.size;
                return false
            });
            i.getNaviButtons().removeClass(k.disabledClass)
        });
        return d.api ? c : this
    }
})(jQuery);
(function (b) {
    var a = b.tools.scrollable;
    a.plugins = a.plugins || {};
    a.plugins.autoscroll = {
        version: "1.0.1",
        conf: {
            autoplay: true,
            interval: 3000,
            autopause: true,
            steps: 1,
            api: false
        }
    };
    b.fn.autoscroll = function (d) {
        if (typeof d == "number") {
            d = {
                interval: d
            }
        }
        var e = b.extend({},
        a.plugins.autoscroll.conf),
            c;
        b.extend(e, d);
        this.each(function () {
            var g = b(this).scrollable();
            if (g) {
                c = g
            }
            var i, f, h = true;
            g.play = function () {
                if (i) {
                    return
                }
                h = false;
                i = setInterval(function () {
                    g.move(e.steps)
                },
                e.interval);
                g.move(e.steps)
            };
            g.pause = function () {
                i = clearInterval(i)
            };
            g.stop = function () {
                g.pause();
                h = true
            };
            if (e.autopause) {
                g.getRoot().add(g.getNaviButtons()).hover(function () {
                    g.pause();
                    clearInterval(f)
                },


                function () {
                    if (!h) {
                        f = setTimeout(g.play, e.interval)
                    }
                })
            }
            if (e.autoplay) {
                setTimeout(g.play, e.interval)
            }
        });
        return e.api ? c : this
    }
})(jQuery);
(function (b) {
    var a = b.tools.scrollable;
    a.plugins = a.plugins || {};
    a.plugins.navigator = {
        version: "1.0.2",
        conf: {
            navi: ".navi",
            naviItem: null,
            activeClass: "active",
            indexed: false,
            api: false,
            idPrefix: null
        }
    };
    b.fn.navigator = function (d) {
        var e = b.extend({},
        a.plugins.navigator.conf),
            c;
        if (typeof d == "string") {
            d = {
                navi: d
            }
        }
        d = b.extend(e, d);
        this.each(function () {
            var i = b(this).scrollable(),
                f = i.getRoot(),
                l = f.data("finder").call(null, d.navi),
                g = null,
                k = i.getNaviButtons();
            if (i) {
                c = i
            }
            i.getNaviButtons = function () {
                return k.add(l)
            };

            function j() {
                if (!l.children().length || l.data("navi") == i) {
                    l.empty();
                    l.data("navi", i);
                    for (var m = 0; m < i.getPageAmount(); m++) {
                        l.append(b("<" + (d.naviItem || "a") + "/>"))
                    }
                    g = l.children().each(function (n) {
                        var o = b(this);
                        o.click(function (p) {
                            i.setPage(n);
                            return p.preventDefault()
                        });
                        if (d.indexed) {
                            o.text(n)
                        }
                        if (d.idPrefix) {
                            o.attr("id", d.idPrefix + n)
                        }
                    })
                } else {
                    g = d.naviItem ? l.find(d.naviItem) : l.children();
                    g.each(function (n) {
                        var o = b(this);
                        o.click(function (p) {
                            i.setPage(n);
                            return p.preventDefault()
                        })
                    })
                }
                g.eq(0).addClass(d.activeClass)
            }
            i.onStart(function (o, n) {
                var m = d.activeClass;
                g.removeClass(m).eq(i.getPageIndex()).addClass(m)
            });
            i.onReload(function () {
                j()
            });
            j();
            var h = g.filter("[href=" + location.hash + "]");
            if (h.length) {
                i.move(g.index(h))
            }
        });
        return d.api ? c : this
    }
})(jQuery);
(function (b) {
    b.fn.wheel = function (e) {
        return this[e ? "bind" : "trigger"]("wheel", e)
    };
    b.event.special.wheel = {
        setup: function () {
            b.event.add(this, d, c, {})
        },
        teardown: function () {
            b.event.remove(this, d, c)
        }
    };
    var d = !b.browser.mozilla ? "mousewheel" : "DOMMouseScroll" + (b.browser.version < "1.9" ? " mousemove" : "");

    function c(e) {
        switch (e.type) {
        case "mousemove":
            return b.extend(e.data, {
                clientX: e.clientX,
                clientY: e.clientY,
                pageX: e.pageX,
                pageY: e.pageY
            });
        case "DOMMouseScroll":
            b.extend(e, e.data);
            e.delta = -e.detail / 3;
            break;
        case "mousewheel":
            e.delta = e.wheelDelta / 120;
            break
        }
        e.type = "wheel";
        return b.event.handle.call(this, e, e.delta)
    }
    var a = b.tools.scrollable;
    a.plugins = a.plugins || {};
    a.plugins.mousewheel = {
        version: "1.0.1",
        conf: {
            api: false,
            speed: 50
        }
    };
    b.fn.mousewheel = function (f) {
        var g = b.extend({},
        a.plugins.mousewheel.conf),
            e;
        if (typeof f == "number") {
            f = {
                speed: f
            }
        }
        f = b.extend(g, f);
        this.each(function () {
            var h = b(this).scrollable();
            if (h) {
                e = h
            }
            h.getRoot().wheel(function (i, j) {
                h.move(j < 0 ? 1 : -1, f.speed || 50);
                return false
            })
        });
        return f.api ? e : this
    }
})(jQuery);
(function (c) {
    c.tools = c.tools || {};
    c.tools.overlay = {
        version: "1.1.2",
        addEffect: function (e, f, g) {
            b[e] = [f, g]
        },
        conf: {
            top: "10%",
            left: "center",
            absolute: false,
            speed: "normal",
            closeSpeed: "fast",
            effect: "default",
            close: null,
            oneInstance: true,
            closeOnClick: true,
            closeOnEsc: true,
            api: false,
            expose: null,
            target: null
        }
    };
    var b = {};
    c.tools.overlay.addEffect("default", function (e) {
        this.getOverlay().fadeIn(this.getConf().speed, e)
    },


    function (e) {
        this.getOverlay().fadeOut(this.getConf().closeSpeed, e)
    });
    var d = [];

    function a(g, k) {
        var o = this,
            m = c(this),
            n = c(window),
            j, i, h, e = k.expose && c.tools.expose.version;
        var f = k.target || g.attr("rel");
        i = f ? c(f) : null || g;
        if (!i.length) {
            throw "Could not find Overlay: " + f
        }
        if (g && g.index(i) == -1) {
            g.click(function (p) {
                o.load(p);
                return p.preventDefault()
            })
        }
        c.each(k, function (p, q) {
            if (c.isFunction(q)) {
                m.bind(p, q)
            }
        });
        c.extend(o, {
            load: function (u) {
                if (o.isOpened()) {
                    return o
                }
                var r = b[k.effect];
                if (!r) {
                    throw 'Overlay: cannot find effect : "' + k.effect + '"'
                }
                if (k.oneInstance) {
                    c.each(d, function () {
                        this.close(u)
                    })
                }
                u = u || c.Event();
                u.type = "onBeforeLoad";
                m.trigger(u);
                if (u.isDefaultPrevented()) {
                    return o
                }
                h = true;
                if (e) {
                    i.expose().load(u)
                }
                var t = k.top;
                var s = k.left;
                var p = i.outerWidth({
                    margin: true
                });
                var q = i.outerHeight({
                    margin: true
                });
                if (typeof t == "string") {
                    t = t == "center" ? Math.max((n.height() - q) / 2, 0) : parseInt(t, 10) / 100 * n.height()
                }
                if (s == "center") {
                    s = Math.max((n.width() - p) / 2, 0)
                }
                if (!k.absolute) {
                    t += n.scrollTop();
                    s += n.scrollLeft()
                }
                i.css({
                    top: t,
                    left: s,
                    position: "absolute"
                });
                u.type = "onStart";
                m.trigger(u);
                r[0].call(o, function () {
                    if (h) {
                        u.type = "onLoad";
                        m.trigger(u)
                    }
                });
                if (k.closeOnClick) {
                    c(document).bind("click.overlay", function (w) {
                        if (!o.isOpened()) {
                            return
                        }
                        var v = c(w.target);
                        if (v.parents(i).length > 1) {
                            return
                        }
                        c.each(d, function () {
                            this.close(w)
                        })
                    })
                }
                if (k.closeOnEsc) {
                    c(document).unbind("keydown.overlay").bind("keydown.overlay", function (v) {
                        if (v.keyCode == 27) {
                            c.each(d, function () {
                                this.close(v)
                            })
                        }
                    })
                }
                return o
            },
            close: function (q) {
                if (!o.isOpened()) {
                    return o
                }
                q = q || c.Event();
                q.type = "onBeforeClose";
                m.trigger(q);
                if (q.isDefaultPrevented()) {
                    return
                }
                h = false;
                b[k.effect][1].call(o, function () {
                    q.type = "onClose";
                    m.trigger(q)
                });
                var p = true;
                c.each(d, function () {
                    if (this.isOpened()) {
                        p = false
                    }
                });
                if (p) {
                    c(document).unbind("click.overlay").unbind("keydown.overlay")
                }
                return o
            },
            getContent: function () {
                return i
            },
            getOverlay: function () {
                return i
            },
            getTrigger: function () {
                return g
            },
            getClosers: function () {
                return j
            },
            isOpened: function () {
                return h
            },
            getConf: function () {
                return k
            },
            bind: function (p, q) {
                m.bind(p, q);
                return o
            },
            unbind: function (p) {
                m.unbind(p);
                return o
            }
        });
        c.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","), function (p, q) {
            o[q] = function (r) {
                return o.bind(q, r)
            }
        });
        if (e) {
            if (typeof k.expose == "string") {
                k.expose = {
                    color: k.expose
                }
            }
            c.extend(k.expose, {
                api: true,
                closeOnClick: k.closeOnClick,
                closeOnEsc: false
            });
            var l = i.expose(k.expose);
            l.onBeforeClose(function (p) {
                o.close(p)
            });
            o.onClose(function (p) {
                l.close(p)
            })
        }
        j = i.find(k.close || ".close");
        if (!j.length && !k.close) {
            j = c('<div class="close"></div>');
            i.prepend(j)
        }
        j.click(function (p) {
            o.close(p)
        })
    }
    c.fn.overlay = function (e) {
        var f = this.eq(typeof e == "number" ? e : 0).data("overlay");
        if (f) {
            return f
        }
        if (c.isFunction(e)) {
            e = {
                onBeforeLoad: e
            }
        }
        var g = c.extend({},
        c.tools.overlay.conf);
        e = c.extend(true, g, e);
        this.each(function () {
            f = new a(c(this), e);
            d.push(f);
            c(this).data("overlay", f)
        });
        return e.api ? f : this
    }
})(jQuery);
(function (b) {
    var a = b.tools.overlay;
    a.plugins = a.plugins || {};
    a.plugins.gallery = {
        version: "1.0.0",
        conf: {
            imgId: "img",
            next: ".next",
            prev: ".prev",
            info: ".info",
            progress: ".progress",
            disabledClass: "disabled",
            activeClass: "active",
            opacity: 0.8,
            speed: "slow",
            template: "<strong>${title}</strong> <span>Image ${index} of ${total}</span>",
            autohide: true,
            preload: true,
            api: false
        }
    };
    b.fn.gallery = function (d) {
        var o = b.extend({},
        a.plugins.gallery.conf),
            m;
        b.extend(o, d);
        m = this.overlay();
        var r = this,
            j = m.getOverlay(),
            k = j.find(o.next),
            g = j.find(o.prev),
            e = j.find(o.info),
            c = j.find(o.progress),
            h = g.add(k).add(e).css({
            opacity: o.opacity
        }),
            s = m.getClosers(),
            l;

        function p(u) {
            c.fadeIn();
            h.hide();
            s.hide();
            var t = u.attr("href");
            var v = new Image();
            v.onload = function () {
                c.fadeOut();
                var y = b("#" + o.imgId, j);
                if (!y.length) {
                    y = b("<img/>").attr("id", o.imgId).css("visibility", "hidden");
                    j.prepend(y)
                }
                y.attr("src", t).css("visibility", "hidden");
                var z = v.width;
                var A = (b(window).width() - z) / 2;
                l = r.index(r.filter("[href=" + t + "]"));
                r.removeClass(o.activeClass).eq(l).addClass(o.activeClass);
                var w = o.disabledClass;
                h.removeClass(w);
                if (l === 0) {
                    g.addClass(w)
                }
                if (l == r.length - 1) {
                    k.addClass(w)
                }
                var B = o.template.replace("${title}", u.attr("title") || u.data("title")).replace("${index}", l + 1).replace("${total}", r.length);
                var x = parseInt(e.css("paddingLeft"), 10) + parseInt(e.css("paddingRight"), 10);
                e.html(B).css({
                    width: z - x
                });
                j.animate({
                    width: z,
                    height: v.height,
                    left: A
                },
                o.speed, function () {
                    y.hide().css("visibility", "visible").fadeIn(function () {
                        if (!o.autohide) {
                            h.fadeIn();
                            s.show()
                        }
                    })
                })
            };
            v.onerror = function () {
                j.fadeIn().html("Cannot find image " + t)
            };
            v.src = t;
            if (o.preload) {
                r.filter(":eq(" + (l - 1) + "), :eq(" + (l + 1) + ")").each(function () {
                    var w = new Image();
                    w.src = b(this).attr("href")
                })
            }
        }
        function f(t, u) {
            t.click(function () {
                if (t.hasClass(o.disabledClass)) {
                    return
                }
                var v = r.eq(i = l + (u ? 1 : -1));
                if (v.length) {
                    p(v)
                }
            })
        }
        f(k, true);
        f(g);
        b(document).keydown(function (t) {
            if (!j.is(":visible") || t.altKey || t.ctrlKey) {
                return
            }
            if (t.keyCode == 37 || t.keyCode == 39) {
                var u = t.keyCode == 37 ? g : k;
                u.click();
                return t.preventDefault()
            }
            return true
        });

        function q() {
            if (!j.is(":animated")) {
                h.show();
                s.show()
            }
        }
        if (o.autohide) {
            j.hover(q, function () {
                h.fadeOut();
                s.hide()
            }).mousemove(q)
        }
        var n;
        this.each(function () {
            var v = b(this),
                u = b(this).overlay(),
                t = u;
            u.onBeforeLoad(function () {
                p(v)
            });
            u.onClose(function () {
                r.removeClass(o.activeClass)
            })
        });
        return o.api ? n : this
    }
})(jQuery);
(function (d) {
    var b = d.tools.overlay;
    b.effects = b.effects || {};
    b.effects.apple = {
        version: "1.0.1"
    };
    d.extend(b.conf, {
        start: {
            absolute: true,
            top: null,
            left: null
        },
        fadeInSpeed: "fast",
        zIndex: 9999
    });

    function c(f) {
        var g = f.offset();
        return [g.top + f.height() / 2, g.left + f.width() / 2]
    }
    var e = function (n) {
        var k = this.getOverlay(),
            f = this.getConf(),
            i = this.getTrigger(),
            q = this,
            r = k.outerWidth({
            margin: true
        }),
            m = k.data("img");
        if (!m) {
            var l = k.css("backgroundImage");
            if (!l) {
                throw "background-image CSS property not set for overlay"
            }
            l = l.substring(l.indexOf("(") + 1, l.indexOf(")")).replace(/\"/g, "");
            k.css("backgroundImage", "none");
            m = d('<img src="' + l + '"/>');
            m.css({
                border: 0,
                position: "absolute",
                display: "none"
            }).width(r);
            d("body").append(m);
            k.data("img", m)
        }
        var o = d(window),
            j = f.start.top || Math.round(o.height() / 2),
            h = f.start.left || Math.round(o.width() / 2);
        if (i) {
            var g = c(i);
            j = g[0];
            h = g[1]
        }
        if (!f.start.absolute) {
            j += o.scrollTop();
            h += o.scrollLeft()
        }
        m.css({
            top: j,
            left: h,
            width: 0,
            zIndex: f.zIndex
        }).show();
        m.animate({
            top: k.css("top"),
            left: k.css("left"),
            width: r
        },
        f.speed, function () {
            k.css("zIndex", f.zIndex + 1).fadeIn(f.fadeInSpeed, function () {
                if (q.isOpened() && !d(this).index(k)) {
                    n.call()
                } else {
                    k.hide()
                }
            })
        })
    };
    var a = function (f) {
        var h = this.getOverlay(),
            i = this.getConf(),
            g = this.getTrigger(),
            l = i.start.top,
            k = i.start.left;
        h.hide();
        if (g) {
            var j = c(g);
            l = j[0];
            k = j[1]
        }
        h.data("img").animate({
            top: l,
            left: k,
            width: 0
        },
        i.closeSpeed, f)
    };
    b.addEffect("apple", e, a)
})(jQuery);
(function (b) {
    b.tools = b.tools || {};
    b.tools.expose = {
        version: "1.0.5",
        conf: {
            maskId: null,
            loadSpeed: "slow",
            closeSpeed: "fast",
            closeOnClick: true,
            closeOnEsc: true,
            zIndex: 9998,
            opacity: 0.8,
            color: "#456",
            api: false
        }
    };

    function a() {
        if (b.browser.msie) {
            var f = b(document).height(),
                e = b(window).height();
            return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, f - e < 20 ? e : f]
        }
        return [b(window).width(), b(document).height()]
    }
    function c(h, g) {
        var e = this,
            j = b(this),
            d = null,
            f = false,
            i = 0;
        b.each(g, function (k, l) {
            if (b.isFunction(l)) {
                j.bind(k, l)
            }
        });
        b(window).resize(function () {
            e.fit()
        });
        b.extend(this, {
            getMask: function () {
                return d
            },
            getExposed: function () {
                return h
            },
            getConf: function () {
                return g
            },
            isLoaded: function () {
                return f
            },
            load: function (n) {
                if (f) {
                    return e
                }
                i = h.eq(0).css("zIndex");
                if (g.maskId) {
                    d = b("#" + g.maskId)
                }
                if (!d || !d.length) {
                    var l = a();
                    d = b("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: l[0],
                        height: l[1],
                        display: "none",
                        opacity: 0,
                        zIndex: g.zIndex
                    });
                    if (g.maskId) {
                        d.attr("id", g.maskId)
                    }
                    b("body").append(d);
                    var k = d.css("backgroundColor");
                    if (!k || k == "transparent" || k == "rgba(0, 0, 0, 0)") {
                        d.css("backgroundColor", g.color)
                    }
                    if (g.closeOnEsc) {
                        b(document).bind("keydown.unexpose", function (o) {
                            if (o.keyCode == 27) {
                                e.close()
                            }
                        })
                    }
                    if (g.closeOnClick) {
                        d.bind("click.unexpose", function (o) {
                            e.close(o)
                        })
                    }
                }
                n = n || b.Event();
                n.type = "onBeforeLoad";
                j.trigger(n);
                if (n.isDefaultPrevented()) {
                    return e
                }
                b.each(h, function () {
                    var o = b(this);
                    if (!/relative|absolute|fixed/i.test(o.css("position"))) {
                        o.css("position", "relative")
                    }
                });
                h.css({
                    zIndex: Math.max(g.zIndex + 1, i == "auto" ? 0 : i)
                });
                var m = d.height();
                if (!this.isLoaded()) {
                    d.css({
                        opacity: 0,
                        display: "block"
                    }).fadeTo(g.loadSpeed, g.opacity, function () {
                        if (d.height() != m) {
                            d.css("height", m)
                        }
                        n.type = "onLoad";
                        j.trigger(n)
                    })
                }
                f = true;
                return e
            },
            close: function (k) {
                if (!f) {
                    return e
                }
                k = k || b.Event();
                k.type = "onBeforeClose";
                j.trigger(k);
                if (k.isDefaultPrevented()) {
                    return e
                }
                d.fadeOut(g.closeSpeed, function () {
                    k.type = "onClose";
                    j.trigger(k);
                    h.css({
                        zIndex: b.browser.msie ? i : null
                    })
                });
                f = false;
                return e
            },
            fit: function () {
                if (d) {
                    var k = a();
                    d.css({
                        width: k[0],
                        height: k[1]
                    })
                }
            },
            bind: function (k, l) {
                j.bind(k, l);
                return e
            },
            unbind: function (k) {
                j.unbind(k);
                return e
            }
        });
        b.each("onBeforeLoad,onLoad,onBeforeClose,onClose".split(","), function (k, l) {
            e[l] = function (m) {
                return e.bind(l, m)
            }
        })
    }
    b.fn.expose = function (d) {
        var e = this.eq(typeof d == "number" ? d : 0).data("expose");
        if (e) {
            return e
        }
        if (typeof d == "string") {
            d = {
                color: d
            }
        }
        var f = b.extend({},
        b.tools.expose.conf);
        d = b.extend(f, d);
        this.each(function () {
            e = new c(b(this), d);
            b(this).data("expose", e)
        });
        return d.api ? e : this
    }
})(jQuery);
(function () {
    function g(o) {
        console.log("$f.fireEvent", [].slice.call(o))
    }
    function k(q) {
        if (!q || typeof q != "object") {
            return q
        }
        var o = new q.constructor();
        for (var p in q) {
            if (q.hasOwnProperty(p)) {
                o[p] = k(q[p])
            }
        }
        return o
    }
    function m(t, q) {
        if (!t) {
            return
        }
        var o, p = 0,
            r = t.length;
        if (r === undefined) {
            for (o in t) {
                if (q.call(t[o], o, t[o]) === false) {
                    break
                }
            }
        } else {
            for (var s = t[0]; p < r && q.call(s, p, s) !== false; s = t[++p]) {}
        }
        return t
    }
    function c(o) {
        return document.getElementById(o)
    }
    function i(q, p, o) {
        if (typeof p != "object") {
            return q
        }
        if (q && p) {
            m(p, function (r, s) {
                if (!o || typeof s != "function") {
                    q[r] = s
                }
            })
        }
        return q
    }
    function n(s) {
        var q = s.indexOf(".");
        if (q != -1) {
            var p = s.substring(0, q) || "*";
            var o = s.substring(q + 1, s.length);
            var r = [];
            m(document.getElementsByTagName(p), function () {
                if (this.className && this.className.indexOf(o) != -1) {
                    r.push(this)
                }
            });
            return r
        }
    }
    function f(o) {
        o = o || window.event;
        if (o.preventDefault) {
            o.stopPropagation();
            o.preventDefault()
        } else {
            o.returnValue = false;
            o.cancelBubble = true
        }
        return false
    }
    function j(q, o, p) {
        q[o] = q[o] || [];
        q[o].push(p)
    }
    function e() {
        return "_" + ("" + Math.random()).substring(2, 10)
    }
    var h = function (t, r, s) {
        var q = this;
        var p = {};
        var u = {};
        q.index = r;
        if (typeof t == "string") {
            t = {
                url: t
            }
        }
        i(this, t, true);
        m(("Begin*,Start,Pause*,Resume*,Seek*,Stop*,Finish*,LastSecond,Update,BufferFull,BufferEmpty,BufferStop").split(","), function () {
            var v = "on" + this;
            if (v.indexOf("*") != -1) {
                v = v.substring(0, v.length - 1);
                var w = "onBefore" + v.substring(2);
                q[w] = function (x) {
                    j(u, w, x);
                    return q
                }
            }
            q[v] = function (x) {
                j(u, v, x);
                return q
            };
            if (r == -1) {
                if (q[w]) {
                    s[w] = q[w]
                }
                if (q[v]) {
                    s[v] = q[v]
                }
            }
        });
        i(this, {
            onCuepoint: function (x, w) {
                if (arguments.length == 1) {
                    p.embedded = [null, x];
                    return q
                }
                if (typeof x == "number") {
                    x = [x]
                }
                var v = e();
                p[v] = [x, w];
                if (s.isLoaded()) {
                    s._api().fp_addCuepoints(x, r, v)
                }
                return q
            },
            update: function (w) {
                i(q, w);
                if (s.isLoaded()) {
                    s._api().fp_updateClip(w, r)
                }
                var v = s.getConfig();
                var x = (r == -1) ? v.clip : v.playlist[r];
                i(x, w, true)
            },
            _fireEvent: function (v, y, w, A) {
                if (v == "onLoad") {
                    m(p, function (B, C) {
                        if (C[0]) {
                            s._api().fp_addCuepoints(C[0], r, B)
                        }
                    });
                    return false
                }
                A = A || q;
                if (v == "onCuepoint") {
                    var z = p[y];
                    if (z) {
                        return z[1].call(s, A, w)
                    }
                }
                if (y && "onBeforeBegin,onMetaData,onStart,onUpdate,onResume".indexOf(v) != -1) {
                    i(A, y);
                    if (y.metaData) {
                        if (!A.duration) {
                            A.duration = y.metaData.duration
                        } else {
                            A.fullDuration = y.metaData.duration
                        }
                    }
                }
                var x = true;
                m(u[v], function () {
                    x = this.call(s, A, y, w)
                });
                return x
            }
        });
        if (t.onCuepoint) {
            var o = t.onCuepoint;
            q.onCuepoint.apply(q, typeof o == "function" ? [o] : o);
            delete t.onCuepoint
        }
        m(t, function (v, w) {
            if (typeof w == "function") {
                j(u, v, w);
                delete t[v]
            }
        });
        if (r == -1) {
            s.onCuepoint = this.onCuepoint
        }
    };
    var l = function (p, r, q, t) {
        var s = {};
        var o = this;
        var u = false;
        if (t) {
            i(s, t)
        }
        m(r, function (v, w) {
            if (typeof w == "function") {
                s[v] = w;
                delete r[v]
            }
        });
        i(this, {
            animate: function (y, z, x) {
                if (!y) {
                    return o
                }
                if (typeof z == "function") {
                    x = z;
                    z = 500
                }
                if (typeof y == "string") {
                    var w = y;
                    y = {};
                    y[w] = z;
                    z = 500
                }
                if (x) {
                    var v = e();
                    s[v] = x
                }
                if (z === undefined) {
                    z = 500
                }
                r = q._api().fp_animate(p, y, z, v);
                return o
            },
            css: function (w, x) {
                if (x !== undefined) {
                    var v = {};
                    v[w] = x;
                    w = v
                }
                r = q._api().fp_css(p, w);
                i(o, r);
                return o
            },
            show: function () {
                this.display = "block";
                q._api().fp_showPlugin(p);
                return o
            },
            hide: function () {
                this.display = "none";
                q._api().fp_hidePlugin(p);
                return o
            },
            toggle: function () {
                this.display = q._api().fp_togglePlugin(p);
                return o
            },
            fadeTo: function (y, x, w) {
                if (typeof x == "function") {
                    w = x;
                    x = 500
                }
                if (w) {
                    var v = e();
                    s[v] = w
                }
                this.display = q._api().fp_fadeTo(p, y, x, v);
                this.opacity = y;
                return o
            },
            fadeIn: function (w, v) {
                return o.fadeTo(1, w, v)
            },
            fadeOut: function (w, v) {
                return o.fadeTo(0, w, v)
            },
            getName: function () {
                return p
            },
            getPlayer: function () {
                return q
            },
            _fireEvent: function (w, v, x) {
                if (w == "onUpdate") {
                    var y = q._api().fp_getPlugin(p);
                    if (!y) {
                        return
                    }
                    i(o, y);
                    delete o.methods;
                    if (!u) {
                        m(y.methods, function () {
                            var A = "" + this;
                            o[A] = function () {
                                var B = [].slice.call(arguments);
                                var C = q._api().fp_invoke(p, A, B);
                                return C === "undefined" || C === undefined ? o : C
                            }
                        });
                        u = true
                    }
                }
                var z = s[w];
                if (z) {
                    z.apply(o, v);
                    if (w.substring(0, 1) == "_") {
                        delete s[w]
                    }
                }
            }
        })
    };

    function b(o, t, z) {
        var E = this,
            y = null,
            x, u, p = [],
            s = {},
            B = {},
            r, v, w, D, A, q;
        i(E, {
            id: function () {
                return r
            },
            isLoaded: function () {
                return (y !== null)
            },
            getParent: function () {
                return o
            },
            hide: function (F) {
                if (F) {
                    o.style.height = "0px"
                }
                if (y) {
                    y.style.height = "0px"
                }
                return E
            },
            show: function () {
                o.style.height = q + "px";
                if (y) {
                    y.style.height = A + "px"
                }
                return E
            },
            isHidden: function () {
                return y && parseInt(y.style.height, 10) === 0
            },
            load: function (F) {
                if (!y && E._fireEvent("onBeforeLoad") !== false) {
                    m(a, function () {
                        this.unload()
                    });
                    x = o.innerHTML;
                    if (x && !flashembed.isSupported(t.version)) {
                        o.innerHTML = ""
                    }
                    flashembed(o, t, {
                        config: z
                    });
                    if (F) {
                        F.cached = true;
                        j(B, "onLoad", F)
                    }
                }
                return E
            },
            unload: function () {
                if (x.replace(/\s/g, "") !== "") {
                    if (E._fireEvent("onBeforeUnload") === false) {
                        return E
                    }
                    try {
                        if (y) {
                            y.fp_close();
                            E._fireEvent("onUnload")
                        }
                    } catch(F) {}
                    y = null;
                    o.innerHTML = x
                }
                return E
            },
            getClip: function (F) {
                if (F === undefined) {
                    F = D
                }
                return p[F]
            },
            getCommonClip: function () {
                return u
            },
            getPlaylist: function () {
                return p
            },
            getPlugin: function (F) {
                var H = s[F];
                if (!H && E.isLoaded()) {
                    var G = E._api().fp_getPlugin(F);
                    if (G) {
                        H = new l(F, G, E);
                        s[F] = H
                    }
                }
                return H
            },
            getScreen: function () {
                return E.getPlugin("screen")
            },
            getControls: function () {
                return E.getPlugin("controls")
            },
            getConfig: function (F) {
                return F ? k(z) : z
            },
            getFlashParams: function () {
                return t
            },
            loadPlugin: function (I, H, K, J) {
                if (typeof K == "function") {
                    J = K;
                    K = {}
                }
                var G = J ? e() : "_";
                E._api().fp_loadPlugin(I, H, K, G);
                var F = {};
                F[G] = J;
                var L = new l(I, null, E, F);
                s[I] = L;
                return L
            },
            getState: function () {
                return y ? y.fp_getState() : -1
            },
            play: function (G, F) {
                function H() {
                    if (G !== undefined) {
                        E._api().fp_play(G, F)
                    } else {
                        E._api().fp_play()
                    }
                }
                if (y) {
                    H()
                } else {
                    E.load(function () {
                        H()
                    })
                }
                return E
            },
            getVersion: function () {
                var G = "flowplayer.js 3.1.4";
                if (y) {
                    var F = y.fp_getVersion();
                    F.push(G);
                    return F
                }
                return G
            },
            _api: function () {
                if (!y) {
                    throw "Flowplayer " + E.id() + " not loaded when calling an API method"
                }
                return y
            },
            setClip: function (F) {
                E.setPlaylist([F]);
                return E
            },
            getIndex: function () {
                return w
            }
        });
        m(("Click*,Load*,Unload*,Keypress*,Volume*,Mute*,Unmute*,PlaylistReplace,ClipAdd,Fullscreen*,FullscreenExit,Error,MouseOver,MouseOut").split(","), function () {
            var F = "on" + this;
            if (F.indexOf("*") != -1) {
                F = F.substring(0, F.length - 1);
                var G = "onBefore" + F.substring(2);
                E[G] = function (H) {
                    j(B, G, H);
                    return E
                }
            }
            E[F] = function (H) {
                j(B, F, H);
                return E
            }
        });
        m(("pause,resume,mute,unmute,stop,toggle,seek,getStatus,getVolume,setVolume,getTime,isPaused,isPlaying,startBuffering,stopBuffering,isFullscreen,toggleFullscreen,reset,close,setPlaylist,addClip,playFeed").split(","), function () {
            var F = this;
            E[F] = function (H, G) {
                if (!y) {
                    return E
                }
                var I = null;
                if (H !== undefined && G !== undefined) {
                    I = y["fp_" + F](H, G)
                } else {
                    I = (H === undefined) ? y["fp_" + F]() : y["fp_" + F](H)
                }
                return I === "undefined" || I === undefined ? E : I
            }
        });
        E._fireEvent = function (O) {
            if (typeof O == "string") {
                O = [O]
            }
            var P = O[0],
                M = O[1],
                K = O[2],
                J = O[3],
                I = 0;
            if (z.debug) {
                g(O)
            }
            if (!y && P == "onLoad" && M == "player") {
                y = y || c(v);
                A = y.clientHeight;
                m(p, function () {
                    this._fireEvent("onLoad")
                });
                m(s, function (Q, R) {
                    R._fireEvent("onUpdate")
                });
                u._fireEvent("onLoad")
            }
            if (P == "onLoad" && M != "player") {
                return
            }
            if (P == "onError") {
                if (typeof M == "string" || (typeof M == "number" && typeof K == "number")) {
                    M = K;
                    K = J
                }
            }
            if (P == "onContextMenu") {
                m(z.contextMenu[M], function (Q, R) {
                    R.call(E)
                });
                return
            }
            if (P == "onPluginEvent") {
                var F = M.name || M;
                var G = s[F];
                if (G) {
                    G._fireEvent("onUpdate", M);
                    G._fireEvent(K, O.slice(3))
                }
                return
            }
            if (P == "onPlaylistReplace") {
                p = [];
                var L = 0;
                m(M, function () {
                    p.push(new h(this, L++, E))
                })
            }
            if (P == "onClipAdd") {
                if (M.isInStream) {
                    return
                }
                M = new h(M, K, E);
                p.splice(K, 0, M);
                for (I = K + 1; I < p.length; I++) {
                    p[I].index++
                }
            }
            var N = true;
            if (typeof M == "number" && M < p.length) {
                D = M;
                var H = p[M];
                if (H) {
                    N = H._fireEvent(P, K, J)
                }
                if (!H || N !== false) {
                    N = u._fireEvent(P, K, J, H)
                }
            }
            m(B[P], function () {
                N = this.call(E, M, K);
                if (this.cached) {
                    B[P].splice(I, 1)
                }
                if (N === false) {
                    return false
                }
                I++
            });
            return N
        };

        function C() {
            if ($f(o)) {
                $f(o).getParent().innerHTML = "";
                w = $f(o).getIndex();
                a[w] = E
            } else {
                a.push(E);
                w = a.length - 1
            }
            q = parseInt(o.style.height, 10) || o.clientHeight;
            if (typeof t == "string") {
                t = {
                    src: t
                }
            }
            r = o.id || "fp" + e();
            v = t.id || r + "_api";
            t.id = v;
            z.playerId = r;
            if (typeof z == "string") {
                z = {
                    clip: {
                        url: z
                    }
                }
            }
            if (typeof z.clip == "string") {
                z.clip = {
                    url: z.clip
                }
            }
            z.clip = z.clip || {};
            if (o.getAttribute("href", 2) && !z.clip.url) {
                z.clip.url = o.getAttribute("href", 2)
            }
            u = new h(z.clip, -1, E);
            z.playlist = z.playlist || [z.clip];
            var F = 0;
            m(z.playlist, function () {
                var H = this;
                if (typeof H == "object" && H.length) {
                    H = {
                        url: "" + H
                    }
                }
                m(z.clip, function (I, J) {
                    if (J !== undefined && H[I] === undefined && typeof J != "function") {
                        H[I] = J
                    }
                });
                z.playlist[F] = H;
                H = new h(H, F, E);
                p.push(H);
                F++
            });
            m(z, function (H, I) {
                if (typeof I == "function") {
                    if (u[H]) {
                        u[H](I)
                    } else {
                        j(B, H, I)
                    }
                    delete z[H]
                }
            });
            m(z.plugins, function (H, I) {
                if (I) {
                    s[H] = new l(H, I, E)
                }
            });
            if (!z.plugins || z.plugins.controls === undefined) {
                s.controls = new l("controls", null, E)
            }
            s.canvas = new l("canvas", null, E);
            t.bgcolor = t.bgcolor || "#000000";
            t.version = t.version || [9, 0];
            t.expressInstall = "http://www.flowplayer.org/swf/expressinstall.swf";

            function G(H) {
                if (!E.isLoaded() && E._fireEvent("onBeforeClick") !== false) {
                    E.load()
                }
                return f(H)
            }
            x = o.innerHTML;
            if (x.replace(/\s/g, "") !== "") {
                if (o.addEventListener) {
                    o.addEventListener("click", G, false)
                } else {
                    if (o.attachEvent) {
                        o.attachEvent("onclick", G)
                    }
                }
            } else {
                if (o.addEventListener) {
                    o.addEventListener("click", f, false)
                }
                E.load()
            }
        }
        if (typeof o == "string") {
            flashembed.domReady(function () {
                var F = c(o);
                if (!F) {
                    throw "Flowplayer cannot access element: " + o
                } else {
                    o = F;
                    C()
                }
            })
        } else {
            C()
        }
    }
    var a = [];

    function d(o) {
        this.length = o.length;
        this.each = function (p) {
            m(o, p)
        };
        this.size = function () {
            return o.length
        }
    }
    window.flowplayer = window.$f = function () {
        var p = null;
        var o = arguments[0];
        if (!arguments.length) {
            m(a, function () {
                if (this.isLoaded()) {
                    p = this;
                    return false
                }
            });
            return p || a[0]
        }
        if (arguments.length == 1) {
            if (typeof o == "number") {
                return a[o]
            } else {
                if (o == "*") {
                    return new d(a)
                }
                m(a, function () {
                    if (this.id() == o.id || this.id() == o || this.getParent() == o) {
                        p = this;
                        return false
                    }
                });
                return p
            }
        }
        if (arguments.length > 1) {
            var r = arguments[1];
            var q = (arguments.length == 3) ? arguments[2] : {};
            if (typeof o == "string") {
                if (o.indexOf(".") != -1) {
                    var t = [];
                    m(n(o), function () {
                        t.push(new b(this, k(r), k(q)))
                    });
                    return new d(t)
                } else {
                    var s = c(o);
                    return new b(s !== null ? s : o, r, q)
                }
            } else {
                if (o) {
                    return new b(o, r, q)
                }
            }
        }
        return null
    };
    i(window.$f, {
        fireEvent: function () {
            var o = [].slice.call(arguments);
            var q = $f(o[0]);
            return q ? q._fireEvent(o.slice(1)) : null
        },
        addPlugin: function (o, p) {
            b.prototype[o] = p;
            return $f
        },
        each: m,
        extend: i
    });
    if (typeof jQuery == "function") {
        jQuery.prototype.flowplayer = function (q, p) {
            if (!arguments.length || typeof arguments[0] == "number") {
                var o = [];
                this.each(function () {
                    var r = $f(this);
                    if (r) {
                        o.push(r)
                    }
                });
                return arguments.length ? o[arguments[0]] : new d(o)
            }
            return this.each(function () {
                $f(this, k(q), p ? k(p) : {})
            })
        }
    }
})();
(function () {
    var e = typeof jQuery == "function";
    var i = {
        width: "100%",
        height: "100%",
        allowfullscreen: true,
        allowscriptaccess: "always",
        quality: "high",
        version: null,
        onFail: null,
        expressInstall: null,
        w3c: false,
        cachebusting: false
    };
    if (e) {
        jQuery.tools = jQuery.tools || {};
        jQuery.tools.flashembed = {
            version: "1.0.4",
            conf: i
        }
    }
    function j() {
        if (c.done) {
            return false
        }
        var l = document;
        if (l && l.getElementsByTagName && l.getElementById && l.body) {
            clearInterval(c.timer);
            c.timer = null;
            for (var k = 0; k < c.ready.length; k++) {
                c.ready[k].call()
            }
            c.ready = null;
            c.done = true
        }
    }
    var c = e ? jQuery : function (k) {
        if (c.done) {
            return k()
        }
        if (c.timer) {
            c.ready.push(k)
        } else {
            c.ready = [k];
            c.timer = setInterval(j, 13)
        }
    };

    function f(l, k) {
        if (k) {
            for (key in k) {
                if (k.hasOwnProperty(key)) {
                    l[key] = k[key]
                }
            }
        }
        return l
    }
    function g(k) {
        switch (h(k)) {
        case "string":
            k = k.replace(new RegExp('(["\\\\])', "g"), "\\$1");
            k = k.replace(/^\s?(\d+)%/, "$1pct");
            return '"' + k + '"';
        case "array":
            return "[" + b(k, function (n) {
                return g(n)
            }).join(",") + "]";
        case "function":
            return '"function()"';
        case "object":
            var l = [];
            for (var m in k) {
                if (k.hasOwnProperty(m)) {
                    l.push('"' + m + '":' + g(k[m]))
                }
            }
            return "{" + l.join(",") + "}"
        }
        return String(k).replace(/\s/g, " ").replace(/\'/g, '"')
    }
    function h(l) {
        if (l === null || l === undefined) {
            return false
        }
        var k = typeof l;
        return (k == "object" && l.push) ? "array" : k
    }
    if (window.attachEvent) {
        window.attachEvent("onbeforeunload", function () {
            __flash_unloadHandler = function () {};
            __flash_savedUnloadHandler = function () {}
        })
    }
    function b(k, n) {
        var m = [];
        for (var l in k) {
            if (k.hasOwnProperty(l)) {
                m[l] = n(k[l])
            }
        }
        return m
    }
    function a(r, t) {
        var q = f({},
        r);
        var s = document.all;
        var n = '<object width="' + q.width + '" height="' + q.height + '"';
        if (s && !q.id) {
            q.id = "_" + ("" + Math.random()).substring(9)
        }
        if (q.id) {
            n += ' id="' + q.id + '"'
        }
        if (q.cachebusting) {
            q.src += ((q.src.indexOf("?") != -1 ? "&" : "?") + Math.random())
        }
        if (q.w3c || !s) {
            n += ' data="' + q.src + '" type="application/x-shockwave-flash"'
        } else {
            n += ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
        }
        n += ">";
        if (q.w3c || s) {
            n += '<param name="movie" value="' + q.src + '" />'
        }
        q.width = q.height = q.id = q.w3c = q.src = null;
        for (var l in q) {
            if (q[l] !== null) {
                n += '<param name="' + l + '" value="' + q[l] + '" />'
            }
        }
        var o = "";
        if (t) {
            for (var m in t) {
                if (t[m] !== null) {
                    o += m + "=" + (typeof t[m] == "object" ? g(t[m]) : t[m]) + "&"
                }
            }
            o = o.substring(0, o.length - 1);
            n += '<param name="flashvars" value=\'' + o + "' />"
        }
        n += "</object>";
        return n
    }
    function d(m, p, l) {
        var k = flashembed.getVersion();
        f(this, {
            getContainer: function () {
                return m
            },
            getConf: function () {
                return p
            },
            getVersion: function () {
                return k
            },
            getFlashvars: function () {
                return l
            },
            getApi: function () {
                return m.firstChild
            },
            getHTML: function () {
                return a(p, l)
            }
        });
        var q = p.version;
        var r = p.expressInstall;
        var o = !q || flashembed.isSupported(q);
        if (o) {
            p.onFail = p.version = p.expressInstall = null;
            m.innerHTML = a(p, l)
        } else {
            if (q && r && flashembed.isSupported([6, 65])) {
                f(p, {
                    src: r
                });
                l = {
                    MMredirectURL: location.href,
                    MMplayerType: "PlugIn",
                    MMdoctitle: document.title
                };
                m.innerHTML = a(p, l)
            } else {
                if (m.innerHTML.replace(/\s/g, "") !== "") {} else {
                    m.innerHTML = "<h2>Flash version " + q + " or greater is required</h2><h3>" + (k[0] > 0 ? "Your version is " + k : "You have no flash plugin installed") + "</h3>" + (m.tagName == "A" ? "<p>Click here to download latest version</p>" : "<p>Download latest version from <a href='http://www.adobe.com/go/getflashplayer'>here</a></p>");
                    if (m.tagName == "A") {
                        m.onclick = function () {
                            location.href = "http://www.adobe.com/go/getflashplayer"
                        }
                    }
                }
            }
        }
        if (!o && p.onFail) {
            var n = p.onFail.call(this);
            if (typeof n == "string") {
                m.innerHTML = n
            }
        }
        if (document.all) {
            window[p.id] = document.getElementById(p.id)
        }
    }
    window.flashembed = function (l, m, k) {
        if (typeof l == "string") {
            var n = document.getElementById(l);
            if (n) {
                l = n
            } else {
                c(function () {
                    flashembed(l, m, k)
                });
                return
            }
        }
        if (!l) {
            return
        }
        if (typeof m == "string") {
            m = {
                src: m
            }
        }
        var o = f({},
        i);
        f(o, m);
        return new d(l, o, k)
    };
    f(window.flashembed, {
        getVersion: function () {
            var m = [0, 0];
            if (navigator.plugins && typeof navigator.plugins["Shockwave Flash"] == "object") {
                var l = navigator.plugins["Shockwave Flash"].description;
                if (typeof l != "undefined") {
                    l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    var n = parseInt(l.replace(/^(.*)\..*$/, "$1"), 10);
                    var r = /r/.test(l) ? parseInt(l.replace(/^.*r(.*)$/, "$1"), 10) : 0;
                    m = [n, r]
                }
            } else {
                if (window.ActiveXObject) {
                    try {
                        var p = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                    } catch(q) {
                        try {
                            p = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                            m = [6, 0];
                            p.AllowScriptAccess = "always"
                        } catch(k) {
                            if (m[0] == 6) {
                                return m
                            }
                        }
                        try {
                            p = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                        } catch(o) {}
                    }
                    if (typeof p == "object") {
                        l = p.GetVariable("$version");
                        if (typeof l != "undefined") {
                            l = l.replace(/^\S+\s+(.*)$/, "$1").split(",");
                            m = [parseInt(l[0], 10), parseInt(l[2], 10)]
                        }
                    }
                }
            }
            return m
        },
        isSupported: function (k) {
            var m = flashembed.getVersion();
            var l = (m[0] > k[0]) || (m[0] == k[0] && m[1] >= k[1]);
            return l
        },
        domReady: c,
        asString: g,
        getHTML: a
    });
    if (e) {
        jQuery.fn.flashembed = function (l, k) {
            var m = null;
            this.each(function () {
                m = flashembed(this, l, k)
            });
            return l.api === false ? this : m
        }
    }
})();
$f.addPlugin("controls", function (wrap, options) {
    function fixE(e) {
        if (typeof e == 'undefined') {
            e = window.event;
        }
        if (typeof e.layerX == 'undefined') {
            e.layerX = e.offsetX;
        }
        if (typeof e.layerY == 'undefined') {
            e.layerY = e.offsetY;
        }
        return e;
    }
    function w(e) {
        return e.clientWidth;
    }
    function offset(e) {
        return e.offsetLeft;
    }
    function Draggable(o, min, max, offset) {
        var dragging = false;

        function foo() {}
        o.onDragStart = o.onDragStart || foo;
        o.onDragEnd = o.onDragEnd || foo;
        o.onDrag = o.onDrag || foo;

        function move(x) {
            if (x > max) {
                return false;
            }
            if (x < min) {
                return false;
            }
            o.style.left = x + "px";
            return true;
        }
        function end() {
            document.onmousemove = null;
            document.onmouseup = null;
            o.onDragEnd(parseInt(o.style.left, 10));
            dragging = false;
        }
        function drag(e) {
            e = fixE(e);
            var x = e.clientX - offset;
            if (move(x)) {
                dragging = true;
                o.onDrag(x);
            }
            return false;
        }
        o.onmousedown = function (e) {
            e = fixE(e);
            o.onDragStart(parseInt(o.style.left, 10));
            document.onmousemove = drag;
            document.onmouseup = end;
            return false;
        };
        this.dragTo = function (x) {
            if (move(x)) {
                o.onDragEnd(x);
            }
        };
        this.setMax = function (val) {
            max = val;
        };
        this.isDragging = function () {
            return dragging;
        };
        return this;
    }
    function extend(to, from) {
        if (from) {
            for (key in from) {
                if (key) {
                    to[key] = from[key];
                }
            }
        }
    }
    function byClass(name) {
        var els = wrap.getElementsByTagName("*");
        var re = new RegExp("(^|\\s)" + name + "(\\s|$)");
        for (var i = 0; i < els.length; i++) {
            if (re.test(els[i].className)) {
                return els[i];
            }
        }
    }
    function pad(val) {
        val = parseInt(val, 10);
        return val >= 10 ? val : "0" + val;
    }
    function toTime(sec) {
        var h = Math.floor(sec / 3600);
        var min = Math.floor(sec / 60);
        sec = sec - (min * 60);
        if (h >= 1) {
            min -= h * 60;
            return pad(h) + ":" + pad(min) + ":" + pad(sec);
        }
        return pad(min) + ":" + pad(sec);
    }
    function getTime(time, duration) {
        return "<span>" + toTime(time) + "</span> <strong>" + toTime(duration) + "</strong>";
    }
    var self = this;
    var opts = {
        playHeadClass: 'playhead',
        trackClass: 'track',
        playClass: 'play',
        pauseClass: 'pause',
        bufferClass: 'buffer',
        progressClass: 'progress',
        timeClass: 'time',
        muteClass: 'mute',
        unmuteClass: 'unmute',
        duration: 0,
        template: '<a class="play">play</a>' + '<div class="track">' + '<div class="buffer"></div>' + '<div class="progress"></div>' + '<div class="playhead"></div>' + '</div>' + '<div class="time"></div>' + '<a class="mute">mute</a>'
    };
    extend(opts, options);
    if (typeof wrap == 'string') {
        wrap = document.getElementById(wrap);
    }
    if (!wrap) {
        return;
    }
    if (!wrap.innerHTML.replace(/\s/g, '')) {
        wrap.innerHTML = opts.template;
    }
    var ball = byClass(opts.playHeadClass);
    var bufferBar = byClass(opts.bufferClass);
    var progressBar = byClass(opts.progressClass);
    var track = byClass(opts.trackClass);
    var time = byClass(opts.timeClass);
    var mute = byClass(opts.muteClass);
    time.innerHTML = getTime(0, opts.duration);
    var trackWidth = w(track);
    var ballWidth = w(ball);
    var head = new Draggable(ball, 0, 0, offset(wrap) + offset(track) + (ballWidth / 2));
    track.onclick = function (e) {
        e = fixE(e);
        if (e.target == ball) {
            return false;
        }
        head.dragTo(e.layerX - ballWidth / 2);
    };
    var play = byClass(opts.playClass);
    play.onclick = function () {
        if (self.isLoaded()) {
            self.toggle();
        } else {
            self.play();
        }
    };
    mute.onclick = function () {
        if (self.getStatus().muted) {
            self.unmute();
        } else {
            self.mute();
        }
    };
    var timer = null;

    function getMax(len, total) {
        return parseInt(Math.min(len / total * trackWidth, trackWidth - ballWidth / 2), 10);
    }
    self.onStart(function (clip) {
        var duration = clip.duration || 0;
        clearInterval(timer);
        timer = setInterval(function () {
            var status = self.getStatus();
            if (status.time) {
                time.innerHTML = getTime(status.time, clip.duration);
            }
            if (status.time === undefined) {
                clearInterval(timer);
                return;
            }
            var x = getMax(status.bufferEnd, duration);
            bufferBar.style.width = x + "px";
            head.setMax(x);
            if (!self.isPaused() && !head.isDragging()) {
                x = getMax(status.time, duration);
                progressBar.style.width = x + "px";
                ball.style.left = (x - ballWidth / 2) + "px";
            }
        },
        500);
    });
    self.onBegin(function () {
        play.className = opts.pauseClass;
    });
    self.onPause(function () {
        play.className = opts.playClass;
    });
    self.onResume(function () {
        play.className = opts.pauseClass;
    });
    self.onMute(function () {
        mute.className = opts.unmuteClass;
    });
    self.onUnmute(function () {
        mute.className = opts.muteClass;
    });
    self.onFinish(function (clip) {
        clearInterval(timer);
    });
    self.onUnload(function () {
        time.innerHTML = getTime(0, opts.duration);
    });
    ball.onDragEnd = function (x) {
        var to = parseInt(x / trackWidth * 100, 10) + "%";
        progressBar.style.width = x + "px";
        if (self.isLoaded()) {
            self.seek(to);
        }
    };
    ball.onDrag = function (x) {
        progressBar.style.width = x + "px";
    };
    return self;
});
(function (a) {
    $f.addPlugin("playlist", function (d, o) {
        var n = this;
        var b = {
            playingClass: "playing",
            pausedClass: "paused",
            progressClass: "progress",
            template: '<a href="${url}">${title}</a>',
            loop: false,
            playOnClick: true,
            manual: false
        };
        a.extend(b, o);
        d = a(d);
        var j = n.getPlaylist().length <= 1 || b.manual;
        var k = null;

        function e(q) {
            var p = m;
            a.each(q, function (r, s) {
                if (!a.isFunction(s)) {
                    p = p.replace("${" + r + "}", s).replace("$%7B" + r + "%7D", s)
                }
            });
            return p
        }
        function i() {
            k = d.children().unbind("click.playlist").bind("click.playlist", function () {
                return h(a(this), k.index(this))
            })
        }
        function c() {
            d.empty();
            a.each(n.getPlaylist(), function () {
                d.append(e(this))
            });
            i()
        }
        function h(p, q) {
            if (p.hasClass(b.playingClass) || p.hasClass(b.pausedClass)) {
                n.toggle()
            } else {
                p.addClass(b.progressClass);
                n.play(q)
            }
            return false
        }
        function l() {
            if (j) {
                k = d.children()
            }
            k.removeClass(b.playingClass);
            k.removeClass(b.pausedClass);
            k.removeClass(b.progressClass)
        }
        function f(p) {
            return (j) ? k.filter("[href=" + p.originalUrl + "]") : k.eq(p.index)
        }
        if (!j) {
            var m = d.is(":empty") ? b.template : d.html();
            c()
        } else {
            k = d.children();
            if (a.isFunction(k.live)) {
                a(d.selector + "> *").live("click", function () {
                    var p = a(this);
                    return h(p, p.attr("href"))
                })
            } else {
                k.click(function () {
                    var p = a(this);
                    return h(p, p.attr("href"))
                })
            }
            var g = n.getClip(0);
            if (!g.url && b.playOnClick) {
                g.update({
                    url: k.eq(0).attr("href")
                })
            }
        }
        n.onBegin(function (p) {
            l();
            f(p).addClass(b.playingClass)
        });
        n.onPause(function (p) {
            f(p).removeClass(b.playingClass).addClass(b.pausedClass)
        });
        n.onResume(function (p) {
            f(p).removeClass(b.pausedClass).addClass(b.playingClass)
        });
        if (!b.loop && !j) {
            n.onBeforeFinish(function (p) {
                if (!p.isInStream && p.index < k.length - 1) {
                    return false
                }
            })
        }
        if (j && b.loop) {
            n.onBeforeFinish(function (q) {
                var p = f(q);
                if (p.next().length) {
                    p.next().click()
                } else {
                    k.eq(0).click()
                }
                return false
            })
        }
        n.onUnload(function () {
            l()
        });
        if (!j) {
            n.onPlaylistReplace(function () {
                c()
            })
        }
        n.onClipAdd(function (q, p) {
            k.eq(p).before(e(q));
            i()
        });
        return n
    })
})(jQuery);
(function () {
    function toAbsolute(url, base) {
        if (url.substring(0, 4) == "http") {
            return url;
        }
        if (base) {
            return base + (base.substring(base.length - 1) != "/" ? "/" : "") + url;
        }
        base = location.protocol + "//" + location.host;
        if (url.substring(0, 1) == "/") {
            return base + url;
        }
        var path = location.pathname;
        path = path.substring(0, path.lastIndexOf("/"));
        return base + path + "/" + url;
    }
    $f.addPlugin("embed", function (options) {
        var self = this;
        var conf = self.getConfig(true);
        var opts = {
            width: self.getParent().clientWidth || '100%',
            height: self.getParent().clientHeight || '100%',
            url: toAbsolute(self.getFlashParams().src),
            index: -1,
            allowfullscreen: true,
            allowscriptaccess: 'always'
        };
        $f.extend(opts, options);
        opts.src = opts.url;
        opts.w3c = true;
        delete conf.playerId;
        delete opts.url;
        delete opts.index;
        this.getEmbedCode = function (runnable, index) {
            index = typeof index == 'number' ? index : opts.index;
            if (index >= 0) {
                conf.playlist = [self.getPlaylist()[index]];
            }
            index = 0;
            $f.each(conf.playlist, function () {
                conf.playlist[index++].url = toAbsolute(this.url, this.baseUrl);
            });
            var html = flashembed.getHTML(opts, {
                config: conf
            });
            if (!runnable) {
                html = html.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
            }
            return html;
        };
        return self;
    });
})();
/*
 * jQuery Media Plugin for converting elements into rich media content.
 *
 * Examples and documentation at: http://malsup.com/jquery/media/
 * Copyright (c) 2007-2008 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @author: M. Alsup
 * @version: 0.90 (10-MAY-2009)
 * @requires jQuery v1.1.2 or later
 * $Id: jquery.media.js 2460 2007-07-23 02:53:15Z malsup $
 *
 * Supported Media Players:
 *    - Flash
 *    - Quicktime
 *    - Real Player
 *    - Silverlight
 *    - Windows Media Player
 *    - iframe
 *
 * Supported Media Formats:
 *   Any types supported by the above players, such as:
 *     Video: asf, avi, flv, mov, mpg, mpeg, mp4, qt, smil, swf, wmv, 3g2, 3gp
 *     Audio: aif, aac, au, gsm, mid, midi, mov, mp3, m4a, snd, rm, wav, wma
 *     Other: bmp, html, pdf, psd, qif, qtif, qti, tif, tiff, xaml
 *
 * Thanks to Mark Hicken and Brent Pedersen for helping me debug this on the Mac!
 * Thanks to Dan Rossi for numerous bug reports and code bits!
 * Thanks to Skye Giordano for several great suggestions!
 */
;(function($) {

/**
 * Chainable method for converting elements into rich media.
 *
 * @param options
 * @param callback fn invoked for each matched element before conversion
 * @param callback fn invoked for each matched element after conversion
 */
$.fn.media = function(options, f1, f2) {
    return this.each(function() {
        if (typeof options == 'function') {
            f2 = f1;
            f1 = options;
            options = {};
        }
        var o = getSettings(this, options);
        // pre-conversion callback, passes original element and fully populated options
        if (typeof f1 == 'function') f1(this, o);

        var r = getTypesRegExp();
        var m = r.exec(o.src.toLowerCase()) || [''];

        o.type ? m[0] = o.type : m.shift();
        for (var i=0; i < m.length; i++) {
            fn = m[i].toLowerCase();
            if (isDigit(fn[0])) fn = 'fn' + fn; // fns can't begin with numbers
            if (!$.fn.media[fn])
                continue;  // unrecognized media type
            // normalize autoplay settings
            var player = $.fn.media[fn+'_player'];
            if (!o.params) o.params = {};
            if (player) {
                var num = player.autoplayAttr == 'autostart';
                o.params[player.autoplayAttr || 'autoplay'] = num ? (o.autoplay ? 1 : 0) : o.autoplay ? true : false;
            }
            var $div = $.fn.media[fn](this, o);

            $div.css('backgroundColor', o.bgColor).width(o.width);
            // post-conversion callback, passes original element, new div element and fully populated options
            if (typeof f2 == 'function') f2(this, $div[0], o, player.name);
            break;
        }
    });
};

/**
 * Non-chainable method for adding or changing file format / player mapping
 * @name mapFormat
 * @param String format File format extension (ie: mov, wav, mp3)
 * @param String player Player name to use for the format (one of: flash, quicktime, realplayer, winmedia, silverlight or iframe
 */
$.fn.media.mapFormat = function(format, player) {
    if (!format || !player || !$.fn.media.defaults.players[player]) return; // invalid
    format = format.toLowerCase();
    if (isDigit(format[0])) format = 'fn' + format;
    $.fn.media[format] = $.fn.media[player];
    $.fn.media[format+'_player'] = $.fn.media.defaults.players[player];
};

// global defautls; override as needed
$.fn.media.defaults = {
    width:         400,
    height:        400,
    autoplay:      0,         // normalized cross-player setting
    bgColor:       '#ffffff', // background color
    params:        { wmode: 'transparent'},  // added to object element as param elements; added to embed element as attrs
    attrs:         {},        // added to object and embed elements as attrs
    flvKeyName:    'file',    // key used for object src param (thanks to Andrea Ercolino)
    flashvars:     {},        // added to flash content as flashvars param/attr
    flashVersion:  '7',       // required flash version
    expressInstaller: null,   // src for express installer

    // default flash video and mp3 player (@see: http://jeroenwijering.com/?item=Flash_Media_Player)
    flvPlayer:     'mediaplayer.swf',
    mp3Player:     'mediaplayer.swf',

    // @see http://msdn2.microsoft.com/en-us/library/bb412401.aspx
    silverlight: {
        inplaceInstallPrompt: 'true', // display in-place install prompt?
        isWindowless:         'true', // windowless mode (false for wrapping markup)
        framerate:            '24',   // maximum framerate
        version:              '0.9',  // Silverlight version
        onError:              null,   // onError callback
        onLoad:               null,   // onLoad callback
        initParams:           null,   // object init params
        userContext:          null    // callback arg passed to the load callback
    }
};

// Media Players; think twice before overriding
$.fn.media.defaults.players = {
    flash: {
        name:         'flash',
        types:        'flv,mp3,swf',
        oAttrs:   {
            classid:  'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000',
            type:     'application/x-oleobject',
            codebase: 'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=' + $.fn.media.defaults.flashVersion
        },
        eAttrs: {
            type:         'application/x-shockwave-flash',
            pluginspage:  'http://www.adobe.com/go/getflashplayer'
        }
    },
    quicktime: {
        name:         'quicktime',
        types:        'aif,aiff,aac,au,bmp,gsm,mov,mid,midi,mpg,mpeg,mp4,m4a,psd,qt,qtif,qif,qti,snd,tif,tiff,wav,3g2,3gp',
        oAttrs:   {
            classid:  'clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B',
            codebase: 'http://www.apple.com/qtactivex/qtplugin.cab'
        },
        eAttrs: {
            pluginspage:  'http://www.apple.com/quicktime/download/'
        }
    },
    realplayer: {
        name:         'real',
        types:        'ra,ram,rm,rpm,rv,smi,smil',
        autoplayAttr: 'autostart',
        oAttrs:   {
            classid:  'clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA'
        },
        eAttrs: {
            type:         'audio/x-pn-realaudio-plugin',
            pluginspage:  'http://www.real.com/player/'
        }
    },
    winmedia: {
        name:         'winmedia',
        types:        'asx,asf,avi,wma,wmv',
        autoplayAttr: 'autostart',
        oUrl:         'url',
        oAttrs:   {
            classid:  'clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6',
            type:     'application/x-oleobject'
        },
        eAttrs: {
            type:         $.browser.mozilla && isFirefoxWMPPluginInstalled() ? 'application/x-ms-wmp' : 'application/x-mplayer2',
            pluginspage:  'http://www.microsoft.com/Windows/MediaPlayer/'
        }
    },
    // special cases
    iframe: {
        name:  'iframe',
        types: 'html,pdf'
    },
    silverlight: {
        name:  'silverlight',
        types: 'xaml'
    }
};

//
//  everything below here is private
//


// detection script for FF WMP plugin (http://www.therossman.org/experiments/wmp_play.html)
// (hat tip to Mark Ross for this script)
function isFirefoxWMPPluginInstalled() {
    var plugs = navigator.plugins;
    for (i = 0; i < plugs.length; i++) {
        var plugin = plugs[i];
        if (plugin['filename'] == 'np-mswmp.dll')
            return true;
    }
    return false;
}

var counter = 1;

for (var player in $.fn.media.defaults.players) {
    var types = $.fn.media.defaults.players[player].types;
    $.each(types.split(','), function(i,o) {
        if (isDigit(o[0])) o = 'fn' + o;
        $.fn.media[o] = $.fn.media[player] = getGenerator(player);
        $.fn.media[o+'_player'] = $.fn.media.defaults.players[player];
    });
};

function getTypesRegExp() {
    var types = '';
    for (var player in $.fn.media.defaults.players) {
        if (types.length) types += ',';
        types += $.fn.media.defaults.players[player].types;
    };
    return new RegExp('\\.(' + types.replace(/,/ig,'|') + ')\\b');
};

function getGenerator(player) {
    return function(el, options) {
        return generate(el, options, player);
    };
};

function isDigit(c) {
    return '0123456789'.indexOf(c) > -1;
};

// flatten all possible options: global defaults, meta, option obj
function getSettings(el, options) {
    options = options || {};
    var $el = $(el);
    var cls = el.className || '';
    // support metadata plugin (v1.0 and v2.0)
    var meta = $.metadata ? $el.metadata() : $.meta ? $el.data() : {};
    meta = meta || {};
    var w = meta.width  || parseInt(((cls.match(/w:(\d+)/)||[])[1]||0));
    var h = meta.height || parseInt(((cls.match(/h:(\d+)/)||[])[1]||0));

    if (w) meta.width  = w;
    if (h) meta.height = h;
    if (cls) meta.cls = cls;

    var a = $.fn.media.defaults;
    var b = options;
    var c = meta;

    var p = { params: { bgColor: options.bgColor || $.fn.media.defaults.bgColor } };
    var opts = $.extend({}, a, b, c);
    $.each(['attrs','params','flashvars','silverlight'], function(i,o) {
        opts[o] = $.extend({}, p[o] || {}, a[o] || {}, b[o] || {}, c[o] || {});
    });

    if (typeof opts.caption == 'undefined') opts.caption = $el.text();

    // make sure we have a source!
    opts.src = opts.src || $el.attr('href') || $el.attr('src') || 'unknown';
    return opts;
};

//
//  Flash Player
//

// generate flash using SWFObject library if possible
$.fn.media.swf = function(el, opts) {
    if (!window.SWFObject && !window.swfobject) {
        // roll our own
        if (opts.flashvars) {
            var a = [];
            for (var f in opts.flashvars)
                a.push(f + '=' + opts.flashvars[f]);
            if (!opts.params) opts.params = {};
            opts.params.flashvars = a.join('&');
        }
        return generate(el, opts, 'flash');
    }

    var id = el.id ? (' id="'+el.id+'"') : '';
    var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
    var $div = $('<div' + id + cls + '>');

    // swfobject v2+
    if (window.swfobject) {
        $(el).after($div).appendTo($div);
        if (!el.id) el.id = 'movie_player_' + counter++;

        // replace el with swfobject content
        swfobject.embedSWF(opts.src, el.id, opts.width, opts.height, opts.flashVersion,
            opts.expressInstaller, opts.flashvars, opts.params, opts.attrs);
    }
    // swfobject < v2
    else {
        $(el).after($div).remove();
        var so = new SWFObject(opts.src, 'movie_player_' + counter++, opts.width, opts.height, opts.flashVersion, opts.bgColor);
        if (opts.expressInstaller) so.useExpressInstall(opts.expressInstaller);

        for (var p in opts.params)
            if (p != 'bgColor') so.addParam(p, opts.params[p]);
        for (var f in opts.flashvars)
            so.addVariable(f, opts.flashvars[f]);
        so.write($div[0]);
    }

    if (opts.caption) $('<div>').appendTo($div).html(opts.caption);
    return $div;
};

// map flv and mp3 files to the swf player by default
$.fn.media.flv = $.fn.media.mp3 = function(el, opts) {
    var src = opts.src;
    var player = /\.mp3\b/i.test(src) ? $.fn.media.defaults.mp3Player : $.fn.media.defaults.flvPlayer;
    var key = opts.flvKeyName;
    src = encodeURIComponent(src);
    opts.src = player;
    opts.src = opts.src + '?'+key+'=' + (src);
    var srcObj = {};
    srcObj[key] = src;
    opts.flashvars = $.extend({}, srcObj, opts.flashvars );
    return $.fn.media.swf(el, opts);
};

//
//  Silverlight
//
$.fn.media.xaml = function(el, opts) {
    if (!window.Sys || !window.Sys.Silverlight) {
        if ($.fn.media.xaml.warning) return;
        $.fn.media.xaml.warning = 1;
        alert('You must include the Silverlight.js script.');
        return;
    }

    var props = {
        width: opts.width,
        height: opts.height,
        background: opts.bgColor,
        inplaceInstallPrompt: opts.silverlight.inplaceInstallPrompt,
        isWindowless: opts.silverlight.isWindowless,
        framerate: opts.silverlight.framerate,
        version: opts.silverlight.version
    };
    var events = {
        onError: opts.silverlight.onError,
        onLoad: opts.silverlight.onLoad
    };

    var id1 = el.id ? (' id="'+el.id+'"') : '';
    var id2 = opts.id || 'AG' + counter++;
    // convert element to div
    var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
    var $div = $('<div' + id1 + cls + '>');
    $(el).after($div).remove();

    Sys.Silverlight.createObjectEx({
        source: opts.src,
        initParams: opts.silverlight.initParams,
        userContext: opts.silverlight.userContext,
        id: id2,
        parentElement: $div[0],
        properties: props,
        events: events
    });

    if (opts.caption) $('<div>').appendTo($div).html(opts.caption);
    return $div;
};

//
// generate object/embed markup
//
function generate(el, opts, player) {
    var $el = $(el);
    var o = $.fn.media.defaults.players[player];

    if (player == 'iframe') {
        var o = $('<iframe' + ' width="' + opts.width + '" height="' + opts.height + '" >');
        o.attr('src', opts.src);
        o.css('backgroundColor', o.bgColor);
    }
    else if ($.browser.msie) {
        var a = ['<object width="' + opts.width + '" height="' + opts.height + '" '];
        for (var key in opts.attrs)
            a.push(key + '="'+opts.attrs[key]+'" ');
        for (var key in o.oAttrs || {}) {
            var v = o.oAttrs[key];
            if (key == 'codebase' && window.location.protocol == 'https:')
                v = v.replace('http','https');
            a.push(key + '="'+v+'" ');
        }
        a.push('></ob'+'ject'+'>');
        var p = ['<param name="' + (o.oUrl || 'src') +'" value="' + opts.src + '">'];
        for (var key in opts.params)
            p.push('<param name="'+ key +'" value="' + opts.params[key] + '">');
        var o = document.createElement(a.join(''));
        for (var i=0; i < p.length; i++)
            o.appendChild(document.createElement(p[i]));
    }
    else {
        var a = ['<embed width="' + opts.width + '" height="' + opts.height + '" style="display:block"'];
        if (opts.src) a.push(' src="' + opts.src + '" ');
        for (var key in opts.attrs)
            a.push(key + '="'+opts.attrs[key]+'" ');
        for (var key in o.eAttrs || {})
            a.push(key + '="'+o.eAttrs[key]+'" ');
        for (var key in opts.params) {
            if (key == 'wmode' && player != 'flash') // FF3/Quicktime borks on wmode
            	continue;
            a.push(key + '="'+opts.params[key]+'" ');
        }
        a.push('></em'+'bed'+'>');
    }
    // convert element to div
    var id = el.id ? (' id="'+el.id+'"') : '';
    var cls = opts.cls ? (' class="' + opts.cls + '"') : '';
    var $div = $('<div' + id + cls + '>');
    $el.after($div).remove();
    ($.browser.msie || player == 'iframe') ? $div.append(o) : $div.html(a.join(''));
    if (opts.caption) $('<div>').appendTo($div).html(opts.caption);
    return $div;
};


})(jQuery);

/* Copyright (c) 2009 Kelvin Luck (kelvin AT kelvinluck DOT com || http://www.kelvinluck.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * See http://kelvinluck.com/assets/jquery/jScrollPane/
 * $Id: jScrollPane.js 86 2009-08-30 21:45:11Z kelvin.luck@gmail.com $
 */

/**
 * Replace the vertical scroll bars on any matched elements with a fancy
 * styleable (via CSS) version. With JS disabled the elements will
 * gracefully degrade to the browsers own implementation of overflow:auto.
 * If the mousewheel plugin has been included on the page then the scrollable areas will also
 * respond to the mouse wheel.
 *
 * @example jQuery(".scroll-pane").jScrollPane();
 *
 * @name jScrollPane
 * @type jQuery
 * @param Object	settings	hash with options, described below.
 *								scrollbarWidth	-	The width of the generated scrollbar in pixels
 *								scrollbarMargin	-	The amount of space to leave on the side of the scrollbar in pixels
 *								wheelSpeed		-	The speed the pane will scroll in response to the mouse wheel in pixels
 *								showArrows		-	Whether to display arrows for the user to scroll with
 *								arrowSize		-	The height of the arrow buttons if showArrows=true
 *								animateTo		-	Whether to animate when calling scrollTo and scrollBy
 *								dragMinHeight	-	The minimum height to allow the drag bar to be
 *								dragMaxHeight	-	The maximum height to allow the drag bar to be
 *								animateInterval	-	The interval in milliseconds to update an animating scrollPane (default 100)
 *								animateStep		-	The amount to divide the remaining scroll distance by when animating (default 3)
 *								maintainPosition-	Whether you want the contents of the scroll pane to maintain it's position when you re-initialise it - so it doesn't scroll as you add more content (default true)
 *								tabIndex		-	The tabindex for this jScrollPane to control when it is tabbed to when navigating via keyboard (default 0)
 *								enableKeyboardNavigation - Whether to allow keyboard scrolling of this jScrollPane when it is focused (default true)
 *								animateToInternalLinks - Whether the move to an internal link (e.g. when it's focused by tabbing or by a hash change in the URL) should be animated or instant (default false)
 *								scrollbarOnLeft	-	Display the scrollbar on the left side?  (needs stylesheet changes, see examples.html)
 *								reinitialiseOnImageLoad - Whether the jScrollPane should automatically re-initialise itself when any contained images are loaded (default false)
 *								topCapHeight	-	The height of the "cap" area between the top of the jScrollPane and the top of the track/ buttons
 *								bottomCapHeight	-	The height of the "cap" area between the bottom of the jScrollPane and the bottom of the track/ buttons
 * @return jQuery
 * @cat Plugins/jScrollPane
 * @author Kelvin Luck (kelvin AT kelvinluck DOT com || http://www.kelvinluck.com)
 */

(function($) {

$.jScrollPane = {
	active : []
};
$.fn.jScrollPane = function(settings)
{
	settings = $.extend({}, $.fn.jScrollPane.defaults, settings);

	var rf = function() { return false; };
	
	return this.each(
		function()
		{
			var $this = $(this);
			var paneEle = this;
			var currentScrollPosition = 0;
			var paneWidth;
			var paneHeight;
			var trackHeight;
			var trackOffset = settings.topCapHeight;
			
			if ($(this).parent().is('.jScrollPaneContainer')) {
				currentScrollPosition = settings.maintainPosition ? $this.position().top : 0;
				var $c = $(this).parent();
                
				paneWidth = $c.innerWidth();
				paneHeight = $c.outerHeight();
				$('>.jScrollPaneTrack, >.jScrollArrowUp, >.jScrollArrowDown, >.jScollCap', $c).remove();
				$this.css({'top':0});
                
			} else {
            
				$this.data('originalStyleTag', $this.attr('style'));
				// Switch the element's overflow to hidden to ensure we get the size of the element without the scrollbars [http://plugins.jquery.com/node/1208]
				$this.css('overflow', 'hidden');
				this.originalPadding = $this.css('paddingTop') + ' ' + $this.css('paddingRight') + ' ' + $this.css('paddingBottom') + ' ' + $this.css('paddingLeft');
				this.originalSidePaddingTotal = (parseInt($this.css('paddingLeft')) || 0) + (parseInt($this.css('paddingRight')) || 0);
				paneWidth = $this.innerWidth();
				paneHeight = $this.innerHeight();
				var $container = $('<div></div>')
					.attr({'className':'jScrollPaneContainer'})
					.css(
						{
							'height':paneHeight+'px', 
							'width':paneWidth+'px'
						}
					);
				if (settings.enableKeyboardNavigation) {
					$container.attr(
						'tabindex', 
						settings.tabIndex
					);
				}
				$this.wrap($container);
				// deal with text size changes (if the jquery.em plugin is included)
				// and re-initialise the scrollPane so the track maintains the
				// correct size
				$(document).bind(
					'emchange', 
					function(e, cur, prev)
					{
						$this.jScrollPane(settings);
					}
				);
				
			}
			trackHeight = paneHeight;
			
			if (settings.reinitialiseOnImageLoad) {
				// code inspired by jquery.onImagesLoad: http://plugins.jquery.com/project/onImagesLoad
				// except we re-initialise the scroll pane when each image loads so that the scroll pane is always up to size...
				// TODO: Do I even need to store it in $.data? Is a local variable here the same since I don't pass the reinitialiseOnImageLoad when I re-initialise?
				var $imagesToLoad = $.data(paneEle, 'jScrollPaneImagesToLoad') || $('img', $this);
				var loadedImages = [];
				
				if ($imagesToLoad.length) {
					$imagesToLoad.each(function(i, val)	{
						$(this).bind('load readystatechange', function() {
							if($.inArray(i, loadedImages) == -1){ //don't double count images
								loadedImages.push(val); //keep a record of images we've seen
								$imagesToLoad = $.grep($imagesToLoad, function(n, i) {
									return n != val;
								});
								$.data(paneEle, 'jScrollPaneImagesToLoad', $imagesToLoad);
								var s2 = $.extend(settings, {reinitialiseOnImageLoad:false});
								$this.jScrollPane(s2); // re-initialise
							}
						}).each(function(i, val) {
							if(this.complete || this.complete===undefined) { 
								//needed for potential cached images
								this.src = this.src; 
							} 
						});
					});
				};
			}

			var p = this.originalSidePaddingTotal;
			var realPaneWidth = paneWidth - settings.scrollbarWidth - settings.scrollbarMargin - p;

			var cssToApply = {
				'height':'auto',
				'width': realPaneWidth + 'px'
			}

			if(settings.scrollbarOnLeft) {
				cssToApply.paddingLeft = settings.scrollbarMargin + settings.scrollbarWidth + 'px';
			} else {
				cssToApply.paddingRight = settings.scrollbarMargin + 'px';
			}

			$this.css(cssToApply);

			var contentHeight = $this.outerHeight();
			var percentInView = paneHeight / contentHeight;

			if (percentInView < .99) {
				var $container = $this.parent();
				$container.append(
					$('<div></div>').addClass('jScrollCap jScrollCapTop').css({height:settings.topCapHeight}),
					$('<div></div>').attr({'className':'jScrollPaneTrack'}).css({'width':settings.scrollbarWidth+'px'}).append(
						$('<div></div>').attr({'className':'jScrollPaneDrag'}).css({'width':settings.scrollbarWidth+'px'}).append(
							$('<div></div>').attr({'className':'jScrollPaneDragTop'}).css({'width':settings.scrollbarWidth+'px'}),
							$('<div></div>').attr({'className':'jScrollPaneDragBottom'}).css({'width':settings.scrollbarWidth+'px'})
						)
					),
					$('<div></div>').addClass('jScrollCap jScrollCapBottom').css({height:settings.bottomCapHeight})
				);
				
				var $track = $('>.jScrollPaneTrack', $container);
				var $drag = $('>.jScrollPaneTrack .jScrollPaneDrag', $container);
				
				
				var currentArrowDirection;
				var currentArrowTimerArr = [];// Array is used to store timers since they can stack up when dealing with keyboard events. This ensures all timers are cleaned up in the end, preventing an acceleration bug.
				var currentArrowInc;
				var whileArrowButtonDown = function() 
				{
					if (currentArrowInc > 4 || currentArrowInc % 4 == 0) {
						positionDrag(dragPosition + currentArrowDirection * mouseWheelMultiplier);
					}
					currentArrowInc++;
				};

				if (settings.enableKeyboardNavigation) {
					$container.bind(
						'keydown.jscrollpane',
						function(e) 
						{
							switch (e.keyCode) {
								case 38: //up
									currentArrowDirection = -1;
									currentArrowInc = 0;
									whileArrowButtonDown();
									currentArrowTimerArr[currentArrowTimerArr.length] = setInterval(whileArrowButtonDown, 100);
									return false;
								case 40: //down
									currentArrowDirection = 1;
									currentArrowInc = 0;
									whileArrowButtonDown();
									currentArrowTimerArr[currentArrowTimerArr.length] = setInterval(whileArrowButtonDown, 100);
									return false;
								case 33: // page up
								case 34: // page down
									// TODO
									return false;
								default:
							}
						}
					).bind(
						'keyup.jscrollpane',
						function(e) 
						{
							if (e.keyCode == 38 || e.keyCode == 40) {
								for (var i = 0; i < currentArrowTimerArr.length; i++) {
									clearInterval(currentArrowTimerArr[i]);
								}
								return false;
							}
						}
					);
				}

				if (settings.showArrows) {
					
					var currentArrowButton;
					var currentArrowInterval;

					var onArrowMouseUp = function(event)
					{
						$('html').unbind('mouseup', onArrowMouseUp);
						currentArrowButton.removeClass('jScrollActiveArrowButton');
						clearInterval(currentArrowInterval);
					};
					var onArrowMouseDown = function() {
						$('html').bind('mouseup', onArrowMouseUp);
						currentArrowButton.addClass('jScrollActiveArrowButton');
						currentArrowInc = 0;
						whileArrowButtonDown();
						currentArrowInterval = setInterval(whileArrowButtonDown, 100);
					};
                    
					$container
						.append(
							$('<a></a>')
								.attr(
									{
										'href':'javascript:;', 
										'className':'jScrollArrowUp', 
										'tabindex':-1
									}
								)
								.css(
									{
										'width':settings.scrollbarWidth+'px',
										'top':settings.topCapHeight + 'px'
									}
								)
								.html('Scroll up')
								.bind('mousedown', function()
								{
									currentArrowButton = $(this);
									currentArrowDirection = -1;
									onArrowMouseDown();
									this.blur();
									return false;
								})
								.bind('click', rf),
							$('<a></a>')
								.attr(
									{
										'href':'javascript:;', 
										'className':'jScrollArrowDown', 
										'tabindex':-1
									}
								)
								.css(
									{
										'width':settings.scrollbarWidth+'px',
										'bottom':settings.bottomCapHeight + 'px'
									}
								)
								.html('Scroll down')
								.bind('mousedown', function()
								{
									currentArrowButton = $(this);
									currentArrowDirection = 1;
									onArrowMouseDown();
									this.blur();
									return false;
								})
								.bind('click', rf)
						);
					var $upArrow = $('>.jScrollArrowUp', $container);
					var $downArrow = $('>.jScrollArrowDown', $container);
				}
				
				if (settings.arrowSize) {
					trackHeight = paneHeight - settings.arrowSize - settings.arrowSize;
					trackOffset += settings.arrowSize;
				} else if ($upArrow) {
					var topArrowHeight = $upArrow.height();
					settings.arrowSize = topArrowHeight;
					trackHeight = paneHeight - topArrowHeight - $downArrow.height();
					trackOffset += topArrowHeight;
				}
				trackHeight -= settings.topCapHeight + settings.bottomCapHeight;
				$track.css({'height': trackHeight+'px', top:trackOffset+'px'})
				
				var $pane = $(this).css({'position':'absolute', 'overflow':'visible'});
				
				var currentOffset;
				var maxY;
				var mouseWheelMultiplier;
				// store this in a seperate variable so we can keep track more accurately than just updating the css property..
				var dragPosition = 0;
				var dragMiddle = percentInView*paneHeight/2;
				
				// pos function borrowed from tooltip plugin and adapted...
				var getPos = function (event, c) {
					var p = c == 'X' ? 'Left' : 'Top';
					return event['page' + c] || (event['client' + c] + (document.documentElement['scroll' + p] || document.body['scroll' + p])) || 0;
				};
				
				var ignoreNativeDrag = function() {	return false; };
				
				var initDrag = function()
				{
					ceaseAnimation();
					currentOffset = $drag.offset(false);
					currentOffset.top -= dragPosition;
					maxY = trackHeight - $drag[0].offsetHeight;
					mouseWheelMultiplier = 2 * settings.wheelSpeed * maxY / contentHeight;
				};
				
				var onStartDrag = function(event)
				{
					initDrag();
					dragMiddle = getPos(event, 'Y') - dragPosition - currentOffset.top;
					$('html').bind('mouseup', onStopDrag).bind('mousemove', updateScroll);
					if ($.browser.msie) {
						$('html').bind('dragstart', ignoreNativeDrag).bind('selectstart', ignoreNativeDrag);
					}
					return false;
				};
				var onStopDrag = function()
				{
					$('html').unbind('mouseup', onStopDrag).unbind('mousemove', updateScroll);
					dragMiddle = percentInView*paneHeight/2;
					if ($.browser.msie) {
						$('html').unbind('dragstart', ignoreNativeDrag).unbind('selectstart', ignoreNativeDrag);
					}
				};
				var positionDrag = function(destY)
				{
					$container.scrollTop(0);
					destY = destY < 0 ? 0 : (destY > maxY ? maxY : destY);
					dragPosition = destY;
					$drag.css({'top':destY+'px'});
					var p = destY / maxY;
					$this.data('jScrollPanePosition', (paneHeight-contentHeight)*-p);
					$pane.css({'top':((paneHeight-contentHeight)*p) + 'px'});
					$this.trigger('scroll');
					if (settings.showArrows) {
						$upArrow[destY == 0 ? 'addClass' : 'removeClass']('disabled');
						$downArrow[destY == maxY ? 'addClass' : 'removeClass']('disabled');
					}
				};
				var updateScroll = function(e)
				{
					positionDrag(getPos(e, 'Y') - currentOffset.top - dragMiddle);
				};
				
				var dragH = Math.max(Math.min(percentInView*(paneHeight-settings.arrowSize*2), settings.dragMaxHeight), settings.dragMinHeight);
				
				$drag.css(
					{'height':dragH+'px'}
				).bind('mousedown', onStartDrag);
				
				var trackScrollInterval;
				var trackScrollInc;
				var trackScrollMousePos;
				var doTrackScroll = function()
				{
					if (trackScrollInc > 8 || trackScrollInc%4==0) {
						positionDrag((dragPosition - ((dragPosition - trackScrollMousePos) / 2)));
					}
					trackScrollInc ++;
				};
				var onStopTrackClick = function()
				{
					clearInterval(trackScrollInterval);
					$('html').unbind('mouseup', onStopTrackClick).unbind('mousemove', onTrackMouseMove);
				};
				var onTrackMouseMove = function(event)
				{
					trackScrollMousePos = getPos(event, 'Y') - currentOffset.top - dragMiddle;
				};
				var onTrackClick = function(event)
				{
					initDrag();
					onTrackMouseMove(event);
					trackScrollInc = 0;
					$('html').bind('mouseup', onStopTrackClick).bind('mousemove', onTrackMouseMove);
					trackScrollInterval = setInterval(doTrackScroll, 100);
					doTrackScroll();
					return false;
				};
				
				$track.bind('mousedown', onTrackClick);
				
				$container.bind(
					'mousewheel',
					function (event, delta) {
						delta = delta || (event.wheelDelta ? event.wheelDelta / 120 : (event.detail) ?
-event.detail/3 : 0);
						initDrag();
						ceaseAnimation();
						var d = dragPosition;
						positionDrag(dragPosition - delta * mouseWheelMultiplier);
						var dragOccured = d != dragPosition;
						return !dragOccured;
					}
				);

				var _animateToPosition;
				var _animateToInterval;
				function animateToPosition()
				{
					var diff = (_animateToPosition - dragPosition) / settings.animateStep;
					if (diff > 1 || diff < -1) {
						positionDrag(dragPosition + diff);
					} else {
						positionDrag(_animateToPosition);
						ceaseAnimation();
					}
				}
				var ceaseAnimation = function()
				{
					if (_animateToInterval) {
						clearInterval(_animateToInterval);
						delete _animateToPosition;
					}
				};
				var scrollTo = function(pos, preventAni)
				{
					if (typeof pos == "string") {
						$e = $(pos, $this);
						if (!$e.length) return;

						pos = $e.offset().top - $this.offset().top;
					}
					ceaseAnimation();
					var maxScroll = contentHeight - paneHeight;
					pos = pos > maxScroll ? maxScroll : pos;
					$this.data('jScrollPaneMaxScroll', maxScroll);
					var destDragPosition = pos/maxScroll * maxY;
					if (preventAni || !settings.animateTo) {
						positionDrag(destDragPosition);
					} else {
						$container.scrollTop(0);
						_animateToPosition = destDragPosition;
						_animateToInterval = setInterval(animateToPosition, settings.animateInterval);
					}
				};
				$this[0].scrollTo = scrollTo;
				$this[0].scrollBy = function(delta)
				{
					var currentPos = -parseInt($pane.css('top')) || 0;
					scrollTo(currentPos + delta);
				};
				
				initDrag();
				
				scrollTo(-currentScrollPosition, true);
			
				// Deal with it when the user tabs to a link or form element within this scrollpane
				$('*', this).bind(
					'focus',
					function(event)
					{
						var $e = $(this);
						
						// loop through parents adding the offset top of any elements that are relatively positioned between
						// the focused element and the jScrollPaneContainer so we can get the true distance from the top
						// of the focused element to the top of the scrollpane...
						var eleTop = 0;
						
						while ($e[0] != $this[0]) {
							eleTop += $e.position().top;
							$e = $e.offsetParent();
						}
						
						var viewportTop = -parseInt($pane.css('top')) || 0;
						var maxVisibleEleTop = viewportTop + paneHeight;
						var eleInView = eleTop > viewportTop && eleTop < maxVisibleEleTop;
						if (!eleInView) {
							var destPos = eleTop - settings.scrollbarMargin;
							if (eleTop > viewportTop) { // element is below viewport - scroll so it is at bottom.
								destPos += $(this).height() + 15 + settings.scrollbarMargin - paneHeight;
							}
							scrollTo(destPos);
						}
					}
				)
				
				
				if (location.hash && location.hash.length > 1) {
					setTimeout(function() {scrollTo(location.hash);}, $.browser.safari ? 100 : 0);
				}
				
				// use event delegation to listen for all clicks on links and hijack them if they are links to
				// anchors within our content...
				$(document).bind(
					'click',
					function(e)
					{
						$target = $(e.target);
						if ($target.is('a')) {
							var h = $target.attr('href');
							if (h && h.substr(0, 1) == '#' && h.length > 1) {
								setTimeout(function() {scrollTo(h, !settings.animateToInternalLinks);}, $.browser.safari ? 100 : 0);
							}
						}
					}
				); 
				
				// Deal with dragging and selecting text to make the scrollpane scroll...
				function onSelectScrollMouseDown(e)
				{
				   $(document).bind('mousemove.jScrollPaneDragging', onTextSelectionScrollMouseMove);
				   $(document).bind('mouseup.jScrollPaneDragging',   onSelectScrollMouseUp);
				  
				}
				
				var textDragDistanceAway;
				var textSelectionInterval;
				
				function onTextSelectionInterval()
				{
					direction = textDragDistanceAway < 0 ? -1 : 1;
					$this[0].scrollBy(textDragDistanceAway / 2);
				}

				function clearTextSelectionInterval()
				{
					if (textSelectionInterval) {
						clearInterval(textSelectionInterval);
						textSelectionInterval = undefined;
					}
				}
				
				function onTextSelectionScrollMouseMove(e)
				{
					var offset = $this.parent().offset().top;
					var maxOffset = offset + paneHeight;
					var mouseOffset = getPos(e, 'Y');
					textDragDistanceAway = mouseOffset < offset ? mouseOffset - offset : (mouseOffset > maxOffset ? mouseOffset - maxOffset : 0);
					if (textDragDistanceAway == 0) {
						clearTextSelectionInterval();
					} else {
						if (!textSelectionInterval) {
							textSelectionInterval  = setInterval(onTextSelectionInterval, 100);
						}
					}
				}

				function onSelectScrollMouseUp(e)
				{
				   $(document)
					  .unbind('mousemove.jScrollPaneDragging')
					  .unbind('mouseup.jScrollPaneDragging');
				   clearTextSelectionInterval();
				}

				$container.bind('mousedown.jScrollPane', onSelectScrollMouseDown);

				
				$.jScrollPane.active.push($this[0]);
				
			} else {
				$this.css(
					{
						'height':paneHeight+'px',
						'width':paneWidth-this.originalSidePaddingTotal+'px',
						'padding':this.originalPadding
					}
				);
				$this[0].scrollTo = $this[0].scrollBy = function() {};
				// clean up listeners
				$this.parent().unbind('mousewheel').unbind('mousedown.jScrollPane').unbind('keydown.jscrollpane').unbind('keyup.jscrollpane');
			}
			
		}
	)
};

$.fn.jScrollPaneRemove = function()
{
	$(this).each(function()
	{
		$this = $(this);
		var $c = $this.parent();
		if ($c.is('.jScrollPaneContainer')) {
			$this.css(
				{
					'top':'',
					'height':'',
					'width':'',
					'padding':'',
					'overflow':'',
					'position':''
				}
			);
			$this.attr('style', $this.data('originalStyleTag'));
			$c.after($this).remove();
		}
	});
}

$.fn.jScrollPane.defaults = {
	scrollbarWidth : 10,
	scrollbarMargin : 5,
	wheelSpeed : 18,
	showArrows : false,
	arrowSize : 0,
	animateTo : false,
	dragMinHeight : 1,
	dragMaxHeight : 99999,
	animateInterval : 100,
	animateStep: 3,
	maintainPosition: true,
	scrollbarOnLeft: false,
	reinitialiseOnImageLoad: false,
	tabIndex : 0,
	enableKeyboardNavigation: true,
	animateToInternalLinks: false,
	topCapHeight: 0,
	bottomCapHeight: 0
};

// clean up the scrollTo expandos
$(window)
	.bind('unload', function() {
		var els = $.jScrollPane.active; 
		for (var i=0; i<els.length; i++) {
			els[i].scrollTo = els[i].scrollBy = null;
		}
	}
);

})(jQuery);
/**
 * jQuery.timers - Timer abstractions for jQuery
 * Written by Blair Mitchelmore (blair DOT mitchelmore AT gmail DOT com)
 * Licensed under the WTFPL (http://sam.zoy.org/wtfpl/).
 * Date: 2009/08/13
 *
 * @author Blair Mitchelmore
 * @version 1.1.3
 *
 **/

jQuery.fn.extend({
	everyTime: function(interval, label, fn, times, belay) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, times, belay);
		});
	},
	oneTime: function(interval, label, fn) {
		return this.each(function() {
			jQuery.timer.add(this, interval, label, fn, 1);
		});
	},
	stopTime: function(label, fn) {
		return this.each(function() {
			jQuery.timer.remove(this, label, fn);
		});
	}
});

jQuery.extend({
	timer: {
		global: [],
		guid: 1,
		dataKey: "jQuery.timer",
		regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
		powers: {
			// Yeah this is major overkill...
			'ms': 1,
			'cs': 10,
			'ds': 100,
			's': 1000,
			'das': 10000,
			'hs': 100000,
			'ks': 1000000
		},
		timeParse: function(value) {
			if (value == undefined || value == null)
				return null;
			var result = this.regex.exec(jQuery.trim(value.toString()));
			if (result[2]) {
				var num = parseFloat(result[1]);
				var mult = this.powers[result[2]] || 1;
				return num * mult;
			} else {
				return value;
			}
		},
		add: function(element, interval, label, fn, times, belay) {
			var counter = 0;
			
			if (jQuery.isFunction(label)) {
				if (!times) 
					times = fn;
				fn = label;
				label = interval;
			}
			
			interval = jQuery.timer.timeParse(interval);

			if (typeof interval != 'number' || isNaN(interval) || interval <= 0)
				return;

			if (times && times.constructor != Number) {
				belay = !!times;
				times = 0;
			}
			
			times = times || 0;
			belay = belay || false;
			
			var timers = jQuery.data(element, this.dataKey) || jQuery.data(element, this.dataKey, {});
			
			if (!timers[label])
				timers[label] = {};
			
			fn.timerID = fn.timerID || this.guid++;
			
			var handler = function() {
				if (belay && this.inProgress) 
					return;
				this.inProgress = true;
				if ((++counter > times && times !== 0) || fn.call(element, counter) === false)
					jQuery.timer.remove(element, label, fn);
				this.inProgress = false;
			};
			
			handler.timerID = fn.timerID;
			
			if (!timers[label][fn.timerID])
				timers[label][fn.timerID] = window.setInterval(handler,interval);
			
			this.global.push( element );
			
		},
		remove: function(element, label, fn) {
			var timers = jQuery.data(element, this.dataKey), ret;
			
			if ( timers ) {
				
				if (!label) {
					for ( label in timers )
						this.remove(element, label, fn);
				} else if ( timers[label] ) {
					if ( fn ) {
						if ( fn.timerID ) {
							window.clearInterval(timers[label][fn.timerID]);
							delete timers[label][fn.timerID];
						}
					} else {
						for ( var fn in timers[label] ) {
							window.clearInterval(timers[label][fn]);
							delete timers[label][fn];
						}
					}
					
					for ( ret in timers[label] ) break;
					if ( !ret ) {
						ret = null;
						delete timers[label];
					}
				}
				
				for ( ret in timers ) break;
				if ( !ret ) 
					jQuery.removeData(element, this.dataKey);
			}
		}
	}
});

jQuery(window).bind("unload", function() {
	jQuery.each(jQuery.timer.global, function(index, item) {
		jQuery.timer.remove(item);
	});
});
/**
* hoverIntent is similar to jQuery's built-in "hover" function except that
* instead of firing the onMouseOver event immediately, hoverIntent checks
* to see if the user's mouse has slowed down (beneath the sensitivity
* threshold) before firing the onMouseOver event.
* 
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* hoverIntent is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* // basic usage (just like .hover) receives onMouseOver and onMouseOut functions
* $("ul li").hoverIntent( showNav , hideNav );
* 
* // advanced usage receives configuration object only
* $("ul li").hoverIntent({
*	sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
*	interval: 100,   // number = milliseconds of polling interval
*	over: showNav,  // function = onMouseOver callback (required)
*	timeout: 0,   // number = milliseconds delay before onMouseOut function call
*	out: hideNav    // function = onMouseOut callback (required)
* });
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($) {
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// next three lines copied from jQuery.hover, ignore children onMouseOver/onMouseOut
			var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
			while ( p && p != this ) { try { p = p.parentNode; } catch(e) { p = this; } }
			if ( p == this ) { return false; }

			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// else e.type == "onmouseover"
			if (e.type == "mouseover") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "onmouseout"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.mouseover(handleHover).mouseout(handleHover);
	};
})(jQuery);
/**
 * jQuery Disqus Plugin
 * ====================
 *
 * $Id: jquery.disqus.js,v 1.1.2.5 2009/07/20 16:35:11 robloach Exp $
 *
 * Copyright (c) 2009 Rob Loach (http://robloach.net)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 */

/*
 * Usage
 * -----
 *
 * Display all the comments for an article:
 * <div id="disqus_thread"><a href="http://MYDOMAINNAME.disqus.com/?url=ref">Discuss this topic on Disqus.</a></div>
 *
 * $('#disqus_thread').disqus({
 *   domain: 'MYDOMAINNAME', // REQUIRED
 *   title: 'The title of the article', 
 *   message: 'A short description of the article.'
 *   url: 'http://example.com/myarticle.html',
 *   developer: 1 // 0 if production.
 * });
 *
 * Display the number of comments in a link:
 * <a href="/myarticle.html#disqus_thread">Comments</a>
 *
 * $.disqusLinks('MYDOMAINNAME');
 */
(function(jQuery) {
  /**
   * Displays the comments for an article in the given element.
   *
   * <div id="disqus_thread"><a href="http://MYDOMAINNAME.disqus.com/?url=ref">Discuss this topic on Disqus.</a></div>
   *
   * $('#disqus_thread').disqus({
   *   domain: 'MYDOMAINNAME', // REQUIRED
   *   title: 'The title of the article', 
   *   message: 'A short description of the article.'
   *   url: 'http://example.com/myarticle.html',
   *   developer: 1 // 0 if production.
   * });
   */
  jQuery.fn.disqus = function(options) {

    // Merge in the default options.
    var options = jQuery.extend({
      domain: '',
      title: '',
      message: '',
      id: this.attr('id'),
      url: window.location.href,
      developer: 0
    }, options);

    // Set the options for Disqus and prepare the element.
    window.disqus_no_style = true; // document.write causes a whitescreen so prevent it.
    disqus_developer = options.developer;
    disqus_container_id = options.id;
    disqus_url = options.url;
    disqus_title = options.title;
    disqus_message = options.message;
    this.empty();

    // Make the AJAX call to Disqus for the comments.
    jQuery.ajax({
      type: 'GET',
      url: 'http://disqus.com/forums/' + options.domain + '/embed.js',
      dataType: 'script',
      cache: true
    });
  };

  /**
   * Processes the comment links.
   *
   * <a href="http://example.com/myarticle.html#disqus_thread">Comments</a>
   *
   * $.disqusLinks('MYDOMAINNAME');
   */
  jQuery.disqusLinks = function(domain) {
    // Create the query.
    var query = '?';
    jQuery("a[href$='#disqus_thread']").each(function(i) {
      query += 'url' + i + '=' + encodeURIComponent($(this).attr('href')) + '&';
    });
    // Make sure we are actually processing some links.
    if (query.length > 2) {
      // Make the AJAX call to get the number of comments.
      jQuery.ajax({
        type: 'GET',
        url: 'http://disqus.com/forums/' + domain + '/get_num_replies.js' + query,
        dataType: 'script',
        cache: true
      });
    }
  };
})(jQuery);

/*
 * Easy Retweet Button
 * http://ejohn.org/blog/retweet/
 *   by John Resig (ejohn.org)
 *
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */

(function(){

window.RetweetJS = {
	// Your Bit.ly Username
	bitly_user: "retweetjs",

	// Your Bit.ly API Key
	// Found here: http://bit.ly/account
	bitly_key: "R_6287c92ecaf9efc6f39e4f33bdbf80b1",

	// The text to replace the links with
	link_text: (/windows/i.test( navigator.userAgent) ? "&#9658;" : "&#9851;") +
		"&nbsp;retweet",

	// What # to show (Use "clicks" for # of clicks or "none" for nothing)
	count_type: "clicks",

	// Tweet Prefix text
	// "RT @jeresig " would result in: "RT @jeresig Link Title http://bit.ly/asdf"
	prefix: "",

	// Style information
	styling: ""
};

//////////////// No Need to Configure Below Here ////////////////

var loadCount = 1;

// Asynchronously load the Bit.ly JavaScript API
// If it hasn't been loaded already
if ( typeof BitlyClient === "undefined" ) {
	var head = document.getElementsByTagName("head")[0] ||
		document.documentElement;
	var script = document.createElement("script");
	script.src = "http://bit.ly/javascript-api.js?version=latest&login=" +
		RetweetJS.bitly_user + "&apiKey=" + RetweetJS.bitly_key;
	script.charSet = "utf-8";
	head.appendChild( script );

	var check = setInterval(function(){
		if ( typeof BitlyCB !== "undefined" ) {
			clearInterval( check );
			head.removeChild( script );
			loaded();
		}
	}, 10);

	loadCount = 0;
}

if ( document.addEventListener ) {
	document.addEventListener("DOMContentLoaded", loaded, false);

} else if ( window.attachEvent ) {
	window.attachEvent("onload", loaded);
}

function loaded(){
	// Need to wait for doc ready and js ready
	if ( ++loadCount < 2 ) {
		return;
	}

	var elems = [], urlElem = {}, hashURL = {};

	BitlyCB.shortenResponse = function(data) {
		for ( var url in data.results ) {
			var hash = data.results[url].userHash;
			hashURL[hash] = url;

			var elems = urlElem[ url ];

			for ( var i = 0; i < elems.length; i++ ) {
				elems[i].href += hash;
			}

			if ( RetweetJS.count_type === "clicks" ) {
				BitlyClient.stats(hash, 'BitlyCB.statsResponse');
			}
		}
	};

	BitlyCB.statsResponse = function(data) {
		var clicks = data.results.clicks, hash = data.results.userHash;
		var url = hashURL[ hash ], elems = urlElem[ url ];

		if ( clicks > 0 ) {
			for ( var i = 0; i < elems.length; i++ ) {
				var strong = document.createElement("strong");
				strong.appendChild( document.createTextNode( clicks + " " ) );
				elems[i].insertBefore(strong, elems[i].firstChild);

				if ( /(^|\s)vert(\s|$)/.test( elems[i].className ) ) {
					elems[i].firstChild.className = elems[i].lastChild.className = "vert";
				}
			}
		}

		hashURL[ hash ] = urlElem[ url ] = null;
	};

	if ( document.getElementsByClassName ) {
		elems = document.getElementsByClassName("retweet");
	} else {
		var tmp = document.getElementsByTagName("a");
		for ( var i = 0; i < tmp.length; i++ ) {
			if ( /(^|\s)retweet(\s|$)/.test( tmp[i].className ) ) {
				elems.push( tmp[i] );
			}
		}
	}

	if ( elems.length && RetweetJS.styling ) {
		var style = document.createElement("style");
		style.type = "text/css";

		try {
			style.appendChild( document.createTextNode( RetweetJS.styling ) );
		} catch (e) {
			if ( style.styleSheet ) {
				style.styleSheet.cssText = RetweetJS.styling;
			}
		}

		document.body.appendChild( style );
	}

	for ( var i = 0; i < elems.length; i++ ) {
		var elem = elems[i];

		if ( /(^|\s)self(\s|$)/.test( elem.className ) ) {
			elem.href = window.location;
			elem.title = document.title;
		}

		var origText = elem.title || elem.textContent || elem.innerText,
			href = elem.href;

		elem.innerHTML = "<span>" + RetweetJS.link_text + "</span>";
		elem.title = "";
		elem.href = "http://twitter.com/home?status=" +
			encodeURIComponent(RetweetJS.prefix + origText + " http://bit.ly/");

		if ( urlElem[ href ] ) {
			urlElem[ href ].push( elem );
		} else {
			urlElem[ href ] = [ elem ];
			BitlyClient.shorten(href, 'BitlyCB.shortenResponse');
		}
	}

}

})();

/**
 * jQuery.ScrollTo
 * Copyright (c) 2007-2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 9/11/2008
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Tested with jQuery 1.2.6. On FF 2/3, IE 6/7, Opera 9.2/5 and Safari 3. on Windows.
 *
 * @author Ariel Flesler
 * @version 1.4
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @dec Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
;(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'y',
		duration:1
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window).scrollableItem();
	};

	// Hack, hack, hack... stay away!
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn.scrollableItem = function(){
		i = this.map(function(){
			// Just store it, we might need it
			var win = this.parentWindow || this.defaultView,
				// If it's a document, get its iframe or the window if it's THE document
				elem = this.nodeName == '#document' ? win.frameElement || win : this,
				// Get the corresponding document
				doc = elem.contentDocument || (elem.contentWindow || elem).document,
				isWin = elem.setInterval;

			return elem.nodeName == 'IFRAME' || isWin && $.browser.safari ? doc.body
				: isWin ? doc.documentElement
				: this;
		});
        return i;
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.speed || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this.scrollableItem().each(function(){
			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=)?\d+(px)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					Dim = axis == 'x' ? 'Width' : 'Height',
					dim = Dim.toLowerCase();

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[dim]() * settings.over[pos];
				}else
					attr[key] = targ[pos];

				// Number or 'number'
				if( /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max(Dim) );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});	
            
			animate( settings.onAfter );			

			function animate( callback ){
            
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, target, settings);
				});
			};
			function max( Dim ){
				var attr ='scroll'+Dim,
					doc = elem.ownerDocument;
				
				return win
						? Math.max( doc.documentElement[attr], doc.body[attr]  )
						: elem[attr];
			};
		}).end();
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );
(function($) {
    $.fn.thiss = function() {
	  return this.each(function() {
          var a = $(this);
          a.mouseover(mouseOver);
        });        
    }
    
function adjustDock(thiss, ssize, dir) {
  if ($(thiss).hasClass('thiss_dock_elt')) {
    $(thiss).addClass("thiss_dock_elt_size_"+ssize);
    adjustDock($(thiss)[dir](), (ssize>1) ? ssize-1 : 1, dir);
  }
}
  
function mouseOver(e) {
 var size = 6;
 for (var i=1; i<=size; i++)
    $(".thiss_dock_elt_size_"+i).removeClass("thiss_dock_elt_size_"+i);
  adjustDock($(e.target), size, 'next');
  adjustDock($(e.target).prev(), size-1, 'prev');
}
      
    
})(jQuery);
/**
*
* jquery.sparkline.js
*
* v1.4.2
* (c) Splunk, Inc 
* Contact: Gareth Watts (gareth@splunk.com)
* http://omnipotent.net/jquery.sparkline/
*
* Generates inline sparkline charts from data supplied either to the method
* or inline in HTML
* 
* Compatible with Internet Explorer 6.0+ and modern browsers equipped with the canvas tag
* (Firefox 2.0+, Safari, Opera, etc)
*
* License: New BSD License
* 
* Copyright (c) 2009, Splunk Inc.
* All rights reserved.
* 
* Redistribution and use in source and binary forms, with or without modification, 
* are permitted provided that the following conditions are met:
* 
*     * Redistributions of source code must retain the above copyright notice, 
*       this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright notice, 
*       this list of conditions and the following disclaimer in the documentation 
*       and/or other materials provided with the distribution.
*     * Neither the name of Splunk Inc nor the names of its contributors may 
*       be used to endorse or promote products derived from this software without 
*       specific prior written permission.
* 
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES 
* OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT 
* SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT 
* OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) 
* HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, 
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS 
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* 
*
* Usage: 
*  $(selector).sparkline(values, options)
*
* If values is undefined or set to 'html' then the data values are read from the specified tag:
*   <p>Sparkline: <span class="sparkline">1,4,6,6,8,5,3,5</span></p>
*   $('.sparkline').sparkline();
* There must be no spaces in the enclosed data set
*
* Otherwise values must be an array of numbers
*    <p>Sparkline: <span id="sparkline1">This text replaced if the browser is compatible</span></p>
*    $('#sparkline1').sparkline([1,4,6,6,8,5,3,5])
*
* For line charts, x values can also be specified:
*   <p>Sparkline: <span class="sparkline">1:1,2.7:4,3.4:6,5:6,6:8,8.7:5,9:3,10:5</span></p>
*    $('#sparkline1').sparkline([ [1,1], [2.7,4], [3.4,6], [5,6], [6,8], [8.7,5], [9,3], [10,5] ])
*
* Supported options:
*   lineColor - Color of the line used for the chart
*   fillColor - Color used to fill in the chart - Set to '' or false for a transparent chart
*   width - Width of the chart - Defaults to 3 times the number of values in pixels
*   height - Height of the chart - Defaults to the height of the containing element
*   chartRangeMin - Specify the minimum value to use for the range of the chart - Defaults to the minimum value supplied
*   chartRangeMax - Specify the maximum value to use for the range of the chart - Defaults to the maximum value supplied
*   composite - If true then don't erase any existing chart attached to the tag, but draw
*           another chart over the top - Note that width and height are ignored if an
*           existing chart is detected.
*
* There are 7 types of sparkline, selected by supplying a "type" option of 'line' (default),
* 'bar', 'tristate', 'bullet', 'discrete', 'pie' or 'box'
*    line - Line chart.  Options:
*       spotColor - Set to '' to not end each line in a circular spot
*       minSpotColor - If set, color of spot at minimum value
*       maxSpotColor - If set, color of spot at maximum value
*       spotRadius - Radius in pixels
*       normalRangeMin 
*       normalRangeMax - If set draws a filled horizontal bar between these two values marking the "normal"
*                      or expected range of values
*       normalRangeColor - Color to use for the above bar
*       defaultPixelsPerValue - Defaults to 3 pixels of width for each value in the chart
*
*   bar - Bar chart.  Options:
*       barColor - Color of bars for postive values
*       negBarColor - Color of bars for negative values
*       barWidth - Width of bars in pixels
*       barSpacing - Gap between bars in pixels
*       zeroAxis - Centers the y-axis around zero if true
*
*   tristate - Charts values of win (>0), lose (<0) or draw (=0)
*       posBarColor - Color of win values
*       negBarColor - Color of lose values
*       zeroBarColor - Color of draw values
*       barWidth - Width of bars in pixels
*       barSpacing - Gap between bars in pixels
*       colorMap - Optional mappnig of values to colors to override the *BarColor values above
*
*   discrete - Options:
*       lineHeight - Height of each line in pixels - Defaults to 30% of the graph height
*       thesholdValue - Values less than this value will be drawn using thresholdColor instead of lineColor
*       thresholdColor
*
*   bullet - Values for bullet graphs msut be in the order: target, performance, range1, range2, range3, ...
*       options:
*       targetColor - The color of the vertical target marker
*       targetWidth - The width of the target marker in pixels
*       performanceColor - The color of the performance measure horizontal bar
*       rangeColors - Colors to use for each qualitative range background color
*
*   pie - Pie chart. Options:
*       sliceColors - An array of colors to use for pie slices
*       offset - Angle in degrees to offset the first slice - Try -90 or +90
*
*   box - Box plot. Options:
*       raw - Set to true to supply pre-computed plot points as values
*             values should be: low_outlier, low_whisker, q1, median, q3, high_whisker, high_outlier
*             When set to false you can supply any number of values and the box plot will
*             be computed for you.  Default is false.
*       showOutliers - Set to true (default) to display outliers as circles
*       outlierIRQ - Interquartile range used to determine outliers.  Default 1.5
*       boxLineColor - Outline color of the box
*       boxFillColor - Fill color for the box
*       whiskerColor - Line color used for whiskers
*       outlierLineColor - Outline color of outlier circles
*       outlierFillColor - Fill color of the outlier circles
*       spotRadius - Radius of outlier circles
*       medianColor - Line color of the median line
*       target - Draw a target cross hair at the supplied value (default undefined)
*      
*   
*       
*   Examples:
*   $('#sparkline1').sparkline(myvalues, { lineColor: '#f00', fillColor: false });
*   $('.barsparks').sparkline('html', { type:'bar', height:'40px', barWidth:5 });
*   $('#tristate').sparkline([1,1,-1,1,0,0,-1], { type:'tristate' }):
*   $('#discrete').sparkline([1,3,4,5,5,3,4,5], { type:'discrete' });
*   $('#bullet').sparkline([10,12,12,9,7], { type:'bullet' });
*   $('#pie').sparkline([1,1,2], { type:'pie' });
*/


(function($) {

    // Provide a cross-browser interface to a few simple drawing primitives
    $.fn.simpledraw = function(width, height, use_existing) {
        if (use_existing && this[0].vcanvas) return this[0].vcanvas;
        if (width==undefined) width=$(this).innerWidth();
        if (height==undefined) height=$(this).innerHeight();
        if ($.browser.hasCanvas) {
            return new vcanvas_canvas(width, height, this);
        } else if ($.browser.msie) {
            return new vcanvas_vml(width, height, this);
        } else {
            return false;
        }
    };

    var pending = [];

    $.fn.sparkline = function(uservalues, options) {
        var options = $.extend({
            type : 'line',
            lineColor : '#00f',
            fillColor : '#cdf',
            defaultPixelsPerValue : 3,
            width : 'auto', 
            height : 'auto',
            composite : false
        }, options ? options : {});
        
        return this.each(function() {
            var render = function() {
                var values = (uservalues=='html' || uservalues==undefined) ? $(this).text().split(',') : uservalues;

                var width = options.width=='auto' ? values.length*options.defaultPixelsPerValue : options.width;
                if (options.height == 'auto') {
                    if (!options.composite || !this.vcanvas) {
                        // must be a better way to get the line height
                        var tmp = document.createElement('span');
                        tmp.innerHTML = 'a';
                        $(this).html(tmp);
                        height = $(tmp).innerHeight();
                        $(tmp).remove();
                    }
                } else {
                    height = options.height;
                }

                $.fn.sparkline[options.type].call(this, values, options, width, height);
            }
            // jQuery 1.3.0 completely changed the meaning of :hidden :-/
            if (($(this).html() && $(this).is(':hidden')) || ($.fn.jquery < "1.3.0" && $(this).parents().is(':hidden'))) {
                pending.push([this, render]);
            } else {
                render.call(this);
            }
        });
    };


    $.sparkline_display_visible = function() {
        for (var i=pending.length-1; i>=0; i--) {
            var el = pending[i][0];
            if ($(el).is(':visible') && !$(el).parents().is(':hidden')) {
                pending[i][1].call(el);
                pending.splice(i, 1);
            }
        }
    };

    $.fn.sparkline.line = function(values, options, width, height) {
        var options = $.extend({
            spotColor : '#f80',
            spotRadius : 1.5,
            minSpotColor : '#f80',
            maxSpotColor : '#f80',
            normalRangeMin : undefined,
            normalRangeMax : undefined,
            normalRangeColor : '#ccc',
            chartRangeMin : undefined,
            chartRangeMax : undefined
        }, options ? options : {});

        var xvalues = [], yvalues = [];
        for (i=0; i<values.length; i++) {
            var isstr = typeof(values[i])=='string';
            var isarray = typeof(values[i])=='object' && values[i] instanceof Array;
            var sp = isstr && values[i].split(':');
            if (isstr && sp.length == 2) { // x:y
                xvalues.push(Number(sp[0]));
                yvalues.push(Number(sp[1]));
            } else if (isarray) {
                xvalues.push(values[i][0]);
                yvalues.push(values[i][1]);
            } else {
                xvalues.push(i);
                yvalues.push(Number(values[i]));
            }
        }
        if (options.xvalues) {
            xvalues = options.xvalues;
        }

        var maxy = Math.max.apply(Math, yvalues);
        var maxyval = maxy;
        var miny = Math.min.apply(Math, yvalues);
        var minyval = miny;

        var maxx = Math.max.apply(Math, xvalues);
        var maxxval = maxx;
        var minx = Math.min.apply(Math, xvalues);
        var minxval = minx;

        if (options.normalRangeMin!=undefined) {
            if (options.normalRangeMin<miny)
                miny = options.normalRangeMin;
            if (options.normalRangeMax>maxy)
                maxy = options.normalRangeMax;
        }
        if (options.chartRangeMin!=undefined && options.chartRangeMin<miny) {
            miny = options.chartRangeMin;
        }
        if (options.chartRangeMax!=undefined && options.chartRangeMax>maxy) {
            maxy = options.chartRangeMax;
        }
        var rangex = maxx-minx == 0 ? 1 : maxx-minx;
        var rangey = maxy-miny == 0 ? 1 : maxy-miny;
        var vl = yvalues.length-1;

        if (vl<1) {
            this.innerHTML = '';
            return;
        }

        var target = $(this).simpledraw(width, height, options.composite);
        if (target) {
            var canvas_width = target.pixel_width;
            var canvas_height = target.pixel_height;
            var canvas_top = 0;
            var canvas_left = 0;

            if (options.spotRadius && (canvas_width < (options.spotRadius*4) || canvas_height < (options.spotRadius*4))) {
                options.spotRadius = 0;
            }
            if (options.spotRadius) {
                // adjust the canvas size as required so that spots will fit
                if (options.minSpotColor || (options.spotColor && yvalues[vl]==miny)) 
                    canvas_height -= Math.ceil(options.spotRadius);
                if (options.maxSpotColor || (options.spotColor && yvalues[vl]==maxy)) {
                    canvas_height -= Math.ceil(options.spotRadius);
                    canvas_top += Math.ceil(options.spotRadius);
                }
                if (options.minSpotColor || options.maxSpotColor && (yvalues[0]==miny || yvalues[0]==maxy)) {
                    canvas_left += Math.ceil(options.spotRadius);
                    canvas_width -= Math.ceil(options.spotRadius);
                }
                if (options.spotColor || (options.minSpotColor || options.maxSpotColor && (yvalues[vl]==miny||yvalues[vl]==maxy)))
                    canvas_width -= Math.ceil(options.spotRadius);
            }


            canvas_height--;
            if (options.normalRangeMin!=undefined) {
                var ytop = canvas_top+Math.round(canvas_height-(canvas_height*((options.normalRangeMax-miny)/rangey)));
                var height = Math.round((canvas_height*(options.normalRangeMax-options.normalRangeMin))/rangey);
                target.drawRect(canvas_left, ytop, canvas_width, height, undefined, options.normalRangeColor);
            }

            var path = [ [canvas_left, canvas_top+canvas_height] ];
            for(var i=0; i<yvalues.length; i++) {
                var x=xvalues[i], y=yvalues[i];
                path.push([canvas_left+Math.round((x-minx)*(canvas_width/rangex)), canvas_top+Math.round(canvas_height-(canvas_height*((y-miny)/rangey)))]);
            }
            if (options.fillColor) {
                path.push([canvas_left+canvas_width, canvas_top+canvas_height-1]);
                target.drawShape(path, undefined, options.fillColor);
                path.pop();
            }
            path[0] = [ canvas_left, canvas_top+Math.round(canvas_height-(canvas_height*((yvalues[0]-miny)/rangey))) ];
            target.drawShape(path, options.lineColor);
            if (options.spotRadius && options.spotColor) {
                target.drawCircle(canvas_left+canvas_width,  canvas_top+Math.round(canvas_height-(canvas_height*((yvalues[vl]-miny)/rangey))), options.spotRadius, undefined, options.spotColor);
            }
            if (maxy!=minyval) {
                if (options.spotRadius && options.minSpotColor) {
                    var x = xvalues[yvalues.indexOf(minyval)];
                    target.drawCircle(canvas_left+Math.round((x-minx)*(canvas_width/rangex)),  canvas_top+Math.round(canvas_height-(canvas_height*((minyval-miny)/rangey))), options.spotRadius, undefined, options.minSpotColor);
                }
                if (options.spotRadius && options.maxSpotColor) {
                    var x = xvalues[yvalues.indexOf(maxyval)];
                    target.drawCircle(canvas_left+Math.round((x-minx)*(canvas_width/rangex)),  canvas_top+Math.round(canvas_height-(canvas_height*((maxyval-miny)/rangey))), options.spotRadius, undefined, options.maxSpotColor);
                }
            }
        } else {
            // Remove the tag contents if sparklines aren't supported
            this.innerHTML = '';
        }
    };

    $.fn.sparkline.bar = function(values, options, width, height) {
        values = $.map(values, Number);
        var options = $.extend({
            type : 'bar',
            barColor : '#00f',
            negBarColor : '#f44',
            zeroColor: undefined,
            zeroAxis : undefined,
            barWidth : 4,
            barSpacing : 1,
            chartRangeMax: undefined,
            chartRangeMin: undefined
        }, options ? options : {});

        var width = (values.length * options.barWidth) + ((values.length-1) * options.barSpacing);
        var max = Math.max.apply(Math, values);
        var min = Math.min.apply(Math, values);
        if (options.chartRangeMin!=undefined && options.chartRangeMin<min) {
            min = options.chartRangeMin;
        }
        if (options.chartRangeMax!=undefined && options.chartRangeMax>max) {
            max = options.chartRangeMax;
        }
        if (options.zeroAxis == undefined) options.zeroAxis = min<0;
        var range = max-min == 0 ? 1 : max-min;

        var target = $(this).simpledraw(width, height);
        if (target) {
            var canvas_width = target.pixel_width;
            var canvas_height = target.pixel_height;
            var yzero = min<0 && options.zeroAxis ? canvas_height-Math.round(canvas_height * (Math.abs(min)/range))-1 : canvas_height-1;

            for(var i=0; i<values.length; i++) {
                var x = i*(options.barWidth+options.barSpacing);
                var val = values[i];
                var color = (val < 0) ? options.negBarColor : options.barColor;
                if (options.zeroAxis && min<0) {
                    var height = Math.round(canvas_height*((Math.abs(val)/range)))+1;
                    var y = (val < 0) ? yzero : yzero-height;
                } else {
                    var height = Math.round(canvas_height*((val-min)/range))+1;
                    var y = canvas_height-height;
                }
                if (val==0 && options.zeroColor!=undefined) {
                    color = options.zeroColor;
                }
                target.drawRect(x, y, options.barWidth-1, height-1, color, color);
            }
        } else {
            // Remove the tag contents if sparklines aren't supported
            this.innerHTML = '';
        }
    };

    $.fn.sparkline.tristate = function(values, options, width, height) {
        values = $.map(values, Number);
        var options = $.extend({
            barWidth : 4,
            barSpacing : 1,
            posBarColor: '#6f6',
            negBarColor : '#f44',
            zeroBarColor : '#999',
            colorMap : {}
        }, options);

        var width = (values.length * options.barWidth) + ((values.length-1) * options.barSpacing);

        var target = $(this).simpledraw(width, height);
        if (target) {
            var canvas_width = target.pixel_width;
            var canvas_height = target.pixel_height;
            var half_height = Math.round(canvas_height/2);

            for(var i=0; i<values.length; i++) {
                var x = i*(options.barWidth+options.barSpacing);
                if (values[i] < 0) {
                    var y = half_height;
                    var height = half_height-1;
                    var color = options.negBarColor;
                } else if (values[i] > 0) {
                    var y = 0;
                    var height = half_height-1;
                    var color = options.posBarColor;
                } else {
                    var y = half_height-1;
                    var height = 2;
                    var color = options.zeroBarColor;
                }
                if (options.colorMap[values[i]]) {
                    color = options.colorMap[values[i]];
                }
                target.drawRect(x, y, options.barWidth-1, height-1, color, color);
            }
        } else {
            // Remove the tag contents if sparklines aren't supported
            this.innerHTML = '';
        }
    };

    $.fn.sparkline.discrete = function(values, options, width, height) {
        values = $.map(values, Number);
        var options = $.extend({
            lineHeight: 'auto',
            thresholdColor: undefined,
            thresholdValue : 0,
            chartRangeMax: undefined,
            chartRangeMin: undefined
        }, options);

        width = options.width=='auto' ? values.length*2 : width;
        var interval = Math.floor(width / values.length);

        var target = $(this).simpledraw(width, height);
        if (target) {
            var canvas_width = target.pixel_width;
            var canvas_height = target.pixel_height;
            var line_height = options.lineHeight == 'auto' ? Math.round(canvas_height * 0.3) : options.lineHeight;
            var pheight = canvas_height - line_height;
            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            if (options.chartRangeMin!=undefined && options.chartRangeMin<min) {
                min = options.chartRangeMin;
            }
            if (options.chartRangeMax!=undefined && options.chartRangeMax>max) {
                max = options.chartRangeMax;
            }
            var range = max-min;

            for(var i=0; i<values.length; i++) {
                var val = values[i];
                var x = (i*interval);
                var ytop = Math.round(pheight-pheight*((val-min)/range));
                target.drawLine(x, ytop, x, ytop+line_height, (options.thresholdColor && val < options.thresholdValue) ? options.thresholdColor : options.lineColor);
            }
        }  else {
            // Remove the tag contents if sparklines aren't supported
            this.innerHTML = '';
        }
                
    };

    $.fn.sparkline.bullet = function(values, options, width, height) {
        values = $.map(values, Number);
        // target, performance, range1, range2, range3
        var options = $.extend({
            targetColor : 'red',
            targetWidth : 3, // width of the target bar in pixels
            performanceColor : 'blue',
            rangeColors : ['#D3DAFE', '#A8B6FF', '#7F94FF' ],
            base : undefined // set this to a number to change the base start number
        }, options);

        
        width = options.width=='auto' ? '4.0em' : width;

        var target = $(this).simpledraw(width, height);
        if (target && values.length>1) {
            var canvas_width = target.pixel_width-Math.ceil(options.targetWidth/2);
            var canvas_height = target.pixel_height;

            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            if (options.base == undefined) {
                var min = min < 0 ? min : 0;
            } else {
                min = options.base;
            }
            var range = max-min;

            // draw range values
            for(i=2; i<values.length; i++) {
                var rangeval = parseInt(values[i]);
                var rangewidth = Math.round(canvas_width*((rangeval-min)/range));
                target.drawRect(0, 0, rangewidth-1, canvas_height-1, options.rangeColors[i-2], options.rangeColors[i-2]);
            }

            // draw the performance bar
            var perfval = parseInt(values[1]);
            var perfwidth = Math.round(canvas_width*((perfval-min)/range));
            target.drawRect(0, Math.round(canvas_height*0.3), perfwidth-1, Math.round(canvas_height*0.4)-1, options.performanceColor, options.performanceColor);

            // draw the target linej
            var targetval = parseInt(values[0]);
            var x = Math.round(canvas_width*((targetval-min)/range)-(options.targetWidth/2));
            var targettop = Math.round(canvas_height*0.10);
            var targetheight = canvas_height-(targettop*2);
            target.drawRect(x, targettop, options.targetWidth-1, targetheight-1, options.targetColor, options.targetColor);
        }  else {
            // Remove the tag contents if sparklines aren't supported
            this.innerHTML = '';
        }
    };

    $.fn.sparkline.pie = function(values, options, width, height) {
        values = $.map(values, Number);
        var options = $.extend({
            sliceColors : ['#f00', '#0f0', '#00f']
        }, options);

        width = options.width=='auto' ? height : width;

        var target = $(this).simpledraw(width, height);
        if (target && values.length>1) {
            var canvas_width = target.pixel_width;
            var canvas_height = target.pixel_height;
                
            var radius = Math.floor(Math.min(canvas_width, canvas_height)/2);
            var total = 0;
            for(var i=0; i<values.length; i++)
                total += values[i];
            var next = 0;
            if (options.offset) {
                next += (2*Math.PI)*(options.offset/360);
            }
            var circle = 2*Math.PI;
            for(var i=0; i<values.length; i++) {
                var start = next;
                var end = next;
                if (total > 0) {  // avoid divide by zero
                    end = next + (circle*(values[i]/total));
                }
                target.drawPieSlice(radius, radius, radius, start, end, undefined, options.sliceColors[i % options.sliceColors.length]);
                next = end;
            }
        }
    };

    function quartile(values, q) {
        if (q==2) {
            var vl2 = Math.floor(values.length/2);
            return values.length % 2 ? values[vl2] : (values[vl2]+values[vl2+1])/2;
        } else {
            var vl4 = Math.floor(values.length/4);
            return values.length % 2 ? (values[vl4*q]+values[vl4*q+1])/2 : values[vl4*q];
        }
    };

    $.fn.sparkline.box = function(values, options, width, height) {
        values = $.map(values, Number);
        var options = $.extend({
            raw: false,
            boxLineColor: 'black',
            boxFillColor: '#cdf',
            whiskerColor: 'black',
            outlierLineColor: '#333',
            outlierFillColor: 'white',
            medianColor: 'red',
            showOutliers: true,
            outlierIQR: 1.5,
            spotRadius: 1.5,
            target: undefined,
            targetColor: '#4a2',
            chartRangeMax: undefined,
            chartRangeMin: undefined
        }, options);

        width = options.width=='auto' ? '4.0em' : width;

        minvalue = options.chartRangeMin==undefined ? Math.min.apply(Math, values) : options.chartRangeMin;
        maxvalue = options.chartRangeMax==undefined ? Math.max.apply(Math, values) : options.chartRangeMax;
        var target = $(this).simpledraw(width, height);
        if (target && values.length>1) {
            var canvas_width = target.pixel_width;
            var canvas_height = target.pixel_height;
            if (options.raw) {
                if (options.showOutliers && values.length>5) {
                    var loutlier=values[0], lwhisker=values[1], q1=values[2], q2=values[3], q3=values[4], rwhisker=values[5], routlier=values[6];
                } else {
                    var lwhisker=values[0], q1=values[1], q2=values[2], q3=values[3], rwhisker=values[4];
                }
            } else {
                values.sort(function(a, b) { return a-b; });
                var q1 = quartile(values, 1);
                var q2 = quartile(values, 2);
                var q3 = quartile(values, 3);
                var iqr = q3-q1;
                if (options.showOutliers) {
                    var lwhisker=undefined, rwhisker=undefined;
                    for(var i=0; i<values.length; i++) {
                        if (lwhisker==undefined && values[i] > q1-(iqr*options.outlierIQR))
                            lwhisker = values[i];
                        if (values[i] < q3+(iqr*options.outlierIQR))
                            rwhisker = values[i];
                    }
                    var loutlier = values[0];
                    var routlier = values[values.length-1];
                } else {
                    var lwhisker = values[0];
                    var rwhisker = values[values.length-1];
                }
            }

            var unitsize = canvas_width / (maxvalue-minvalue+1);
            var canvas_left = 0;
            if (options.showOutliers) {
                canvas_left = Math.ceil(options.spotRadius);
                canvas_width -= 2*Math.ceil(options.spotRadius);
                var unitsize = canvas_width / (maxvalue-minvalue+1);
                if (loutlier < lwhisker)
                    target.drawCircle((loutlier-minvalue)*unitsize+canvas_left, canvas_height/2, options.spotRadius, options.outlierLineColor, options.outlierFillColor);
                if (routlier > rwhisker)
                    target.drawCircle((routlier-minvalue)*unitsize+canvas_left, canvas_height/2, options.spotRadius, options.outlierLineColor, options.outlierFillColor);
            }

            // box
            target.drawRect(
                Math.round((q1-minvalue)*unitsize+canvas_left),
                Math.round(canvas_height*0.1),
                Math.round((q3-q1)*unitsize), 
                Math.round(canvas_height*0.8), 
                options.boxLineColor, 
                options.boxFillColor);
            // left whisker
            target.drawLine(
                Math.round((lwhisker-minvalue)*unitsize+canvas_left), 
                Math.round(canvas_height/2), 
                Math.round((q1-minvalue)*unitsize+canvas_left), 
                Math.round(canvas_height/2), 
                options.lineColor);
            target.drawLine(
                Math.round((lwhisker-minvalue)*unitsize+canvas_left), 
                Math.round(canvas_height/4), 
                Math.round((lwhisker-minvalue)*unitsize+canvas_left), 
                Math.round(canvas_height-canvas_height/4), 
                options.whiskerColor);
            // right whisker
            target.drawLine(Math.round((rwhisker-minvalue)*unitsize+canvas_left), 
                Math.round(canvas_height/2), 
                Math.round((q3-minvalue)*unitsize+canvas_left), 
                Math.round(canvas_height/2), 
                options.lineColor);
            target.drawLine(
                Math.round((rwhisker-minvalue)*unitsize+canvas_left), 
                Math.round(canvas_height/4), 
                Math.round((rwhisker-minvalue)*unitsize+canvas_left), 
                Math.round(canvas_height-canvas_height/4), 
                options.whiskerColor);
            // median line
            target.drawLine(
                Math.round((q2-minvalue)*unitsize+canvas_left), 
                Math.round(canvas_height*0.1),
                Math.round((q2-minvalue)*unitsize+canvas_left), 
                Math.round(canvas_height*0.9),
                options.medianColor);
            if (options.target) {
                var size = Math.ceil(options.spotRadius);
                target.drawLine(
                    Math.round((options.target-minvalue)*unitsize+canvas_left), 
                    Math.round((canvas_height/2)-size), 
                    Math.round((options.target-minvalue)*unitsize+canvas_left), 
                    Math.round((canvas_height/2)+size), 
                    options.targetColor);
                target.drawLine(
                    Math.round((options.target-minvalue)*unitsize+canvas_left-size), 
                    Math.round(canvas_height/2), 
                    Math.round((options.target-minvalue)*unitsize+canvas_left+size), 
                    Math.round(canvas_height/2), 
                    options.targetColor);
            }
        }  else {
            // Remove the tag contents if sparklines aren't supported
            this.innerHTML = '';
        }
    };


    // IE doesn't provide an indexOf method for arrays :-(
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(entry) {
            for(var i=0; i<this.length; i++) {
                if (this[i] == entry)
                    return i;
            }
            return -1;
        }
    }

    // Setup a very simple "virtual canvas" to make drawing the few shapes we need easier
    // This is accessible as $(foo).simpledraw()

    if ($.browser.msie && !document.namespaces['v']) {
        document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');
    }

    if ($.browser.hasCanvas == undefined) {
        var t = document.createElement('canvas');
        $.browser.hasCanvas = t.getContext!=undefined;
    }

    var vcanvas_base = function(width, height, target) {
    };

    vcanvas_base.prototype = {
        init : function(width, height, target) {
            this.width = width;
            this.height = height;
            this.target = target;
            if (target[0]) target=target[0];
            target.vcanvas = this;
        },

        drawShape : function(path, lineColor, fillColor) {
            alert('drawShape not implemented');
        },

        drawLine : function(x1, y1, x2, y2, lineColor) {
            return this.drawShape([ [x1,y1], [x2,y2] ], lineColor);
        },

        drawCircle : function(x, y, radius, lineColor, fillColor) {
            alert('drawCircle not implemented');
        },

        drawPieSlice : function(x, y, radius, startAngle, endAngle, lineColor, fillColor) {
            alert('drawPieSlice not implemented');
        },

        drawRect : function(x, y, width, height, lineColor, fillColor) {
            alert('drawRect not implemented');
        },

        getElement : function() {
            return this.canvas;
        },

        _insert : function(el, target) {
            $(target).html(el);
        }
    };

    var vcanvas_canvas = function(width, height, target) {
        return this.init(width, height, target);
    };

    vcanvas_canvas.prototype = $.extend(new vcanvas_base, {
        _super : vcanvas_base.prototype,

        init : function(width, height, target) {
            this._super.init(width, height, target);
            this.canvas = document.createElement('canvas');
            if (target[0]) target=target[0];
            target.vcanvas = this;
            $(this.canvas).css({ display:'inline-block', width:width, height:height, verticalAlign:'top' });
            this._insert(this.canvas, target);
            this.pixel_height = $(this.canvas).height();
            this.pixel_width = $(this.canvas).width();
            this.canvas.width = this.pixel_width;
            this.canvas.height = this.pixel_height;
            $(this.canvas).css({width: this.pixel_width, height: this.pixel_height});
        },

        _getContext : function(lineColor, fillColor) {
            var context = this.canvas.getContext('2d');
            if (lineColor != undefined)
                context.strokeStyle = lineColor;
            context.lineWidth = 1;
            if (fillColor != undefined)
                context.fillStyle = fillColor;
            return context;
        },

        drawShape : function(path, lineColor, fillColor) {
            var context = this._getContext(lineColor, fillColor);
            context.beginPath();
            context.moveTo(path[0][0]+0.5, path[0][1]+0.5);
            for(var i=1; i<path.length; i++) {
                context.lineTo(path[i][0]+0.5, path[i][1]+0.5); // the 0.5 offset gives us crisp pixel-width lines
            }
            if (lineColor != undefined) {
                context.stroke();
            }
            if (fillColor != undefined) {
                context.fill();
            }
        },

        drawCircle : function(x, y, radius, lineColor, fillColor) {
            var context = this._getContext(lineColor, fillColor);
            context.beginPath();
            context.arc(x, y, radius, 0, 2*Math.PI, false);
            if (lineColor != undefined) {
                context.stroke();
            }
            if (fillColor != undefined) {
                context.fill();
            }
        }, 

        drawPieSlice : function(x, y, radius, startAngle, endAngle, lineColor, fillColor) {
            var context = this._getContext(lineColor, fillColor);
            context.beginPath();
            context.moveTo(x, y);
            context.arc(x, y, radius, startAngle, endAngle, false);
            context.lineTo(x, y);
            context.closePath();
            if (lineColor != undefined) {
                context.stroke();
            }
            if (fillColor) {
                context.fill();
            }
        },

        drawRect : function(x, y, width, height, lineColor, fillColor) {
            return this.drawShape([ [x,y], [x+width, y], [x+width, y+height], [x, y+height], [x, y] ], lineColor, fillColor);
        }
        
    });

    var vcanvas_vml = function(width, height, target) {
        return this.init(width, height, target);
    };

    vcanvas_vml.prototype = $.extend(new vcanvas_base, {
        _super : vcanvas_base.prototype,

        init : function(width, height, target) {
            this._super.init(width, height, target);
            if (target[0]) target=target[0];
            target.vcanvas = this;
            this.canvas = document.createElement('span');
            $(this.canvas).css({ display:'inline-block', position: 'relative', overflow:'hidden', width:width, height:height, margin:'0px', padding:'0px', verticalAlign: 'top'});
            this._insert(this.canvas, target);
            this.pixel_height = $(this.canvas).height();
            this.pixel_width = $(this.canvas).width();
            this.canvas.width = this.pixel_width;
            this.canvas.height = this.pixel_height;;
            var groupel = '<v:group coordorigin="0 0" coordsize="'+this.pixel_width+' '+this.pixel_height+'"'
                    +' style="position:absolute;top:0;left:0;width:'+this.pixel_width+'px;height='+this.pixel_height+'px;"></v:group>';
            this.canvas.insertAdjacentHTML('beforeEnd', groupel);
            this.group = $(this.canvas).children()[0];
        },

        drawShape : function(path, lineColor, fillColor) {
            var vpath = [];
            for(var i=0; i<path.length; i++) {
                vpath[i] = ''+(path[i][0])+','+(path[i][1]);
            }
            var initial = vpath.splice(0,1);
            var stroke = lineColor == undefined ? ' stroked="false" ' : ' strokeWeight="1" strokeColor="'+lineColor+'" ';
            var fill = fillColor == undefined ? ' filled="false"' : ' fillColor="'+fillColor+'" filled="true" ';
            var closed = vpath[0] == vpath[vpath.length-1] ? 'x ' : '';
            var vel = '<v:shape coordorigin="0 0" coordsize="'+this.pixel_width+' '+this.pixel_height+'" '
                + stroke
                + fill
                +' style="position:absolute;left:0px;top:0px;height:'+this.pixel_height+'px;width:'+this.pixel_width+'px;padding:0px;margin:0px;" '
                +' path="m '+initial+' l '+vpath.join(', ')+' '+closed+'e">'
                +' </v:shape>';
             this.group.insertAdjacentHTML('beforeEnd', vel);
        },

        drawCircle : function(x, y, radius, lineColor, fillColor) {
            x -= radius+1;
            y -= radius+1;
            var stroke = lineColor == undefined ? ' stroked="false" ' : ' strokeWeight="1" strokeColor="'+lineColor+'" ';
            var fill = fillColor == undefined ? ' filled="false"' : ' fillColor="'+fillColor+'" filled="true" ';
            var vel = '<v:oval '
                + stroke
                + fill
                +' style="position:absolute;top:'+y+'px; left:'+x+'px; width:'+(radius*2)+'px; height:'+(radius*2)+'px"></v:oval>';
            this.group.insertAdjacentHTML('beforeEnd', vel);
            
        },
        
        drawPieSlice : function(x, y, radius, startAngle, endAngle, lineColor, fillColor) {
            if (startAngle == endAngle) {
                return;  // VML seems to have problem when start angle equals end angle.
            }
            if ((endAngle - startAngle) == (2*Math.PI)) {
                startAngle = 0.0;  // VML seems to have a problem when drawing a full circle that doesn't start 0
                endAngle = (2*Math.PI);
            }

            var startx = x + Math.round(Math.cos(startAngle) * radius);
            var starty = y + Math.round(Math.sin(startAngle) * radius);
            var endx = x + Math.round(Math.cos(endAngle) * radius);
            var endy = y + Math.round(Math.sin(endAngle) * radius);

            var vpath = [  x-radius, y-radius, x+radius, y+radius, startx, starty, endx, endy ]; 
            var stroke = lineColor == undefined ? ' stroked="false" ' : ' strokeWeight="1" strokeColor="'+lineColor+'" ';
            var fill = fillColor == undefined ? ' filled="false"' : ' fillColor="'+fillColor+'" filled="true" ';
            var vel = '<v:shape coordorigin="0 0" coordsize="'+this.pixel_width+' '+this.pixel_height+'" '
                + stroke
                + fill
                +' style="position:absolute;left:0px;top:0px;height:'+this.pixel_height+'px;width:'+this.pixel_width+'px;padding:0px;margin:0px;" '
                +' path="m '+x+','+y+' wa '+vpath.join(', ')+' x e">'
                +' </v:shape>';
             this.group.insertAdjacentHTML('beforeEnd', vel);
        },

        drawRect : function(x, y, width, height, lineColor, fillColor) {
            return this.drawShape( [ [x, y], [x, y+height], [x+width, y+height], [x+width, y], [x, y] ], lineColor, fillColor);
        }
    });

})(jQuery);

/**
 * jQuery Templates
 *
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Written by: Stan Lemon <stanlemon@mac.com>
 *
 * Based off of the Ext.Template library, available at:
 * http://www.extjs.com
 *
 * This library provides basic templating functionality, allowing for macro-based
 * templates within jQuery.
 *
 * Basic Usage:
 *
 * var t = $.template('<div id="foo">Hello ${name}, how are you ${question}?  I am ${me:substr(0,10)}</div>');
 *
 * $(selector).append( t , {
 *     name: 'Stan',
 *     question: 'feeling',
 *     me: 'doing quite well myself, thank you very much!'
 * });
 *
 * Requires: jQuery 1.2+
 *
 *
 * @todo    Add callbacks to the DOM manipulation methods, so that events can be bound
 *          to template nodes after creation.
 */
(function($){
	
	/**
	 * Create a New Template
	 */
	$.template = function(html, options) {
		return new $.template.instance(html, options);
	};

	/**
	 * Template constructor - Creates a new template instance.
	 *
	 * @param 	html 	The string of HTML to be used for the template.
	 * @param 	options An object of configurable options.  Currently
	 * 			you can toggle compile as a boolean value and set a custom
	 *          template regular expression on the property regx by
	 *          specifying the key of the regx to use from the regx object.
	 */
	$.template.instance = function(html, options) {
        // If a custom regular expression has been set, grab it from the regx object
        if ( options && options['regx'] ) options.regx = this.regx[ options.regx ];

		this.options = $.extend({
			compile: 		false,
			regx:           this.regx.standard
		}, options || {});

		this.html = html;

		if (this.options.compile) {
			this.compile();   
		}
		this.isTemplate = true;
	};

	/**
	 * Regular Expression for Finding Variables
	 *
	 * The default pattern looks for variables in JSP style, the form of: ${variable}
	 * There are also regular expressions available for ext-style variables and
	 * jTemplate style variables.
	 *
	 * You can add your own regular expressions for variable ussage by doing.
	 * $.extend({ $.template.re , {
	 *     myvartype: /...../g
	 * }
	 *
	 * Then when creating a template do:
	 * var t = $.template("<div>...</div>", { regx: 'myvartype' });
	 */
	$.template.regx = $.template.instance.prototype.regx = {
	    jsp:        /\$\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,
        ext:        /\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,
        jtemplates: /\{\{([\w-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}\}/g
	};
	
	/**
	 * Set the standard regular expression to be used.
	 */
	$.template.regx.standard = $.template.regx.jsp;
	
	/**
	 * Variable Helper Methods
	 *
	 * This is a collection of methods which can be used within the variable syntax, ie:
	 * ${variable:substr(0,30)} Which would only print a substring, 30 characters in length
	 * begining at the first character for the variable named "variable".
	 *
	 * A basic substring helper is provided as an example of how you can define helpers.
	 * To add more helpers simply do:
	 * $.extend( $.template.helpers , {
	 *	 sampleHelper: function() { ... }	
	 * });
	 */
	$.template.helpers = $.template.instance.prototype.helpers = {
		substr : function(value, start, length){
			return String(value).substr(start, length);
		}
	};


	/**
	 * Template Instance Methods
	 */
	$.extend( $.template.instance.prototype, {
		
		/**
		 * Apply Values to a Template
		 *
		 * This is the macro-work horse of the library, it receives an object
		 * and the properties of that objects are assigned to the template, where
		 * the variables in the template represent keys within the object itself.
		 *
		 * @param 	values 	An object of properties mapped to template variables
		 */
		apply: function(values) {
			if (this.options.compile) {
				return this.compiled(values);
			} else {
				var tpl = this;
				var fm = this.helpers;

				var fn = function(m, name, format, args) {
					if (format) {
						if (format.substr(0, 5) == "this."){
							return tpl.call(format.substr(5), values[name], values);
						} else {
							if (args) {
								// quoted values are required for strings in compiled templates, 
								// but for non compiled we need to strip them
								// quoted reversed for jsmin
								var re = /^\s*['"](.*)["']\s*$/;
								args = args.split(',');

								for(var i = 0, len = args.length; i < len; i++) {
									args[i] = args[i].replace(re, "$1");
								}
								args = [values[name]].concat(args);
							} else {
								args = [values[name]];
							}

							return fm[format].apply(fm, args);
						}
					} else {
						return values[name] !== undefined ? values[name] : "";
					}
				};

				return this.html.replace(this.options.regx, fn);
			}
		},

		/**
		 * Compile a template for speedier usage
		 */
		compile: function() {
			var sep = $.browser.mozilla ? "+" : ",";
			var fm = this.helpers;

			var fn = function(m, name, format, args){
				if (format) {
					args = args ? ',' + args : "";

					if (format.substr(0, 5) != "this.") {
						format = "fm." + format + '(';
					} else {
						format = 'this.call("'+ format.substr(5) + '", ';
						args = ", values";
					}
				} else {
					args= ''; format = "(values['" + name + "'] == undefined ? '' : ";
				}
				return "'"+ sep + format + "values['" + name + "']" + args + ")"+sep+"'";
			};

			var body;

			if ($.browser.mozilla) {
				body = "this.compiled = function(values){ return '" +
					   this.html.replace(/\\/g, '\\\\').replace(/(\r\n|\n)/g, '\\n').replace(/'/g, "\\'").replace(this.options.regx, fn) +
						"';};";
			} else {
				body = ["this.compiled = function(values){ return ['"];
				body.push(this.html.replace(/\\/g, '\\\\').replace(/(\r\n|\n)/g, '\\n').replace(/'/g, "\\'").replace(this.options.regx, fn));
				body.push("'].join('');};");
				body = body.join('');
			}
			eval(body);
			return this;
		}
	});


	/**
	 * Save a reference in this local scope to the original methods which we're 
	 * going to overload.
	 **/
	var $_old = {
	    domManip: $.fn.domManip,
	    text: $.fn.text,
	    html: $.fn.html
	};

	/**
	 * Overwrite the domManip method so that we can use things like append() by passing a 
	 * template object and macro parameters.
	 */
	$.fn.domManip = function( args, table, reverse, callback ) {
		if (args[0].isTemplate) {
			// Apply the template and it's arguments...
			args[0] = args[0].apply( args[1] );
			// Get rid of the arguements, we don't want to pass them on
			delete args[1];
		}

		// Call the original method
		var r = $_old.domManip.apply(this, arguments);

		return r;
	};

    /**
     * Overwrite the html() method
     */
	$.fn.html = function( value , o ) {
	    if (value && value.isTemplate) var value = value.apply( o );

		var r = $_old.html.apply(this, [value]);

		return r;
	};
	
	/**
	 * Overwrite the text() method
	 */
	$.fn.text = function( value , o ) {
	    if (value && value.isTemplate) var value = value.apply( o );

		var r = $_old.text.apply(this, [value]);

		return r;
	};

})(jQuery);

/**
 * jquery.scrollFollow.js
 * Copyright (c) 2008 Net Perspective (http://kitchen.net-perspective.com/)
 * Licensed under the MIT License (http://www.opensource.org/licenses/mit-license.php)
 * 
 * @author R.A. Ray
 *
 * @projectDescription	jQuery plugin for allowing an element to animate down as the user scrolls the page.
 * 
 * @version 0.4.0
 * 
 * @requires jquery.js (tested with 1.2.6)
 * @requires ui.core.js (tested with 1.5.2)
 * 
 * @optional jquery.cookie.js (http://www.stilbuero.de/2006/09/17/cookie-plugin-for-jquery/)
 * @optional jquery.easing.js (http://gsgd.co.uk/sandbox/jquery/easing/ - tested with 1.3)
 * 
 * @param speed		int - Duration of animation (in milliseconds)
 * 								default: 500
 * @param offset			int - Number of pixels box should remain from top of viewport
 * 								default: 0
 * @param easing		string - Any one of the easing options from the easing plugin - Requires jQuery Easing Plugin < http://gsgd.co.uk/sandbox/jquery/easing/ >
 * 								default: 'linear'
 * @param container	string - ID of the containing div
 * 								default: box's immediate parent
 * @param killSwitch	string - ID of the On/Off toggle element
 * 								default: 'killSwitch'
 * @param onText		string - killSwitch text to be displayed if sliding is enabled
 * 								default: 'Turn Slide Off'
 * @param offText		string - killSwitch text to be displayed if sliding is disabled
 * 								default: 'Turn Slide On'
 * @param relativeTo	string - Scroll animation can be relative to either the 'top' or 'bottom' of the viewport
 * 								default: 'top'
 * @param delay			int - Time between the end of the scroll and the beginning of the animation in milliseconds
 * 								default: 0
 */

( function( $ ) {
	
	$.scrollFollow = function ( box, options )
	{ 
		// Convert box into a jQuery object
		box = $( box );
		
		// 'box' is the object to be animated
		var position = box.css( 'position' );
		
		function ani()
		{		
			// The script runs on every scroll which really means many times during a scroll.
			// We don't want multiple slides to queue up.
			box.queue( [ ] );
		
			// A bunch of values we need to determine where to animate to
			var viewportHeight = parseInt( $( window ).height() );	
			var pageScroll =  parseInt( $( document ).scrollTop() );
			var parentTop =  parseInt( box.cont.offset().top );
			var parentHeight = parseInt( box.cont.attr( 'offsetHeight' ) );
			var boxHeight = parseInt( box.attr( 'offsetHeight' ) + ( parseInt( box.css( 'marginTop' ) ) || 0 ) + ( parseInt( box.css( 'marginBottom' ) ) || 0 ) );
			var aniTop;
			
			// Make sure the user wants the animation to happen
			if ( isActive )
			{
				// If the box should animate relative to the top of the window
				if ( options.relativeTo == 'top' )
				{
					// Don't animate until the top of the window is close enough to the top of the box
					if ( box.initialOffsetTop >= ( pageScroll + options.offset ) )
					{
						aniTop = box.initialTop;
					}
					else
					{
						aniTop = Math.min( ( Math.max( ( -parentTop ), ( pageScroll - box.initialOffsetTop + box.initialTop ) ) + options.offset ), ( parentHeight - boxHeight - box.paddingAdjustment ) );
					}
				}
				// If the box should animate relative to the bottom of the window
				else if ( options.relativeTo == 'bottom' )
				{
					// Don't animate until the bottom of the window is close enough to the bottom of the box
					if ( ( box.initialOffsetTop + boxHeight ) >= ( pageScroll + options.offset + viewportHeight ) )
					{
						aniTop = box.initialTop;
					}
					else
					{
						aniTop = Math.min( ( pageScroll + viewportHeight - boxHeight - options.offset ), ( parentHeight - boxHeight ) );
					}
				}
				
				// Checks to see if the relevant scroll was the last one
				// "-20" is to account for inaccuracy in the timeout
				if ( ( new Date().getTime() - box.lastScroll ) >= ( options.delay - 20 ) )
				{
					box.animate(
						{
							top: aniTop
						}, options.speed, options.easing
					);
				}
			}
		};
		
		// For user-initiated stopping of the slide
		var isActive = true;
		
		if ( $.cookie != undefined )
		{
			if( $.cookie( 'scrollFollowSetting' + box.attr( 'id' ) ) == 'false' )
			{
				var isActive = false;
				
				$( '#' + options.killSwitch ).text( options.offText )
					.toggle( 
						function ()
						{
							isActive = true;
							
							$( this ).text( options.onText );
							
							$.cookie( 'scrollFollowSetting' + box.attr( 'id' ), true, { expires: 365, path: '/'} );
							
							ani();
						},
						function ()
						{
							isActive = false;
							
							$( this ).text( options.offText );
							
							box.animate(
								{
									top: box.initialTop
								}, options.speed, options.easing
							);	
							
							$.cookie( 'scrollFollowSetting' + box.attr( 'id' ), false, { expires: 365, path: '/'} );
						}
					);
			}
			else
			{
				$( '#' + options.killSwitch ).text( options.onText )
					.toggle( 
						function ()
						{
							isActive = false;
							
							$( this ).text( options.offText );
							
							box.animate(
								{
									top: box.initialTop
								}, 0
							);	
							
							$.cookie( 'scrollFollowSetting' + box.attr( 'id' ), false, { expires: 365, path: '/'} );
						},
						function ()
						{
							isActive = true;
							
							$( this ).text( options.onText );
							
							$.cookie( 'scrollFollowSetting' + box.attr( 'id' ), true, { expires: 365, path: '/'} );
							
							ani();
						}
					);
			}
		}
		
		// If no parent ID was specified, and the immediate parent does not have an ID
		// options.container will be undefined. So we need to figure out the parent element.
		if ( options.container == '')
		{
			box.cont = box.parent();
		}
		else
		{
			box.cont = $( '#' + options.container );
		}
		
		// Finds the default positioning of the box.
		box.initialOffsetTop =  parseInt( box.offset().top );
		box.initialTop = parseInt( box.css( 'top' ) ) || 0;
		
		// Hack to fix different treatment of boxes positioned 'absolute' and 'relative'
		if ( box.css( 'position' ) == 'relative' )
		{
			box.paddingAdjustment = parseInt( box.cont.css( 'paddingTop' ) ) + parseInt( box.cont.css( 'paddingBottom' ) );
		}
		else
		{
			box.paddingAdjustment = 0;
		}
		
		// Animate the box when the page is scrolled
		$( window ).scroll( function ()
			{
				// Sets up the delay of the animation
				$.fn.scrollFollow.interval = setTimeout( function(){ ani();} , options.delay );
				
				// To check against right before setting the animation
				box.lastScroll = new Date().getTime();
			}
		);
		
		// Animate the box when the page is resized
		$( window ).resize( function ()
			{
				// Sets up the delay of the animation
				$.fn.scrollFollow.interval = setTimeout( function(){ ani();} , options.delay );
				
				// To check against right before setting the animation
				box.lastScroll = new Date().getTime();
			}
		);

		// Run an initial animation on page load
		box.lastScroll = 0;
		
		ani();
	};
	
	$.fn.scrollFollow = function ( options )
	{
		options = options || {};
		options.relativeTo = options.relativeTo || 'top';
		options.speed = options.speed || 500;
		options.offset = options.offset || 0;
		options.easing = options.easing || 'swing';
		options.container = options.container || this.parent().attr( 'id' );
		options.killSwitch = options.killSwitch || 'killSwitch';
		options.onText = options.onText || 'Turn Slide Off';
		options.offText = options.offText || 'Turn Slide On';
		options.delay = options.delay || 0;
		
		this.each( function() 
			{
				new $.scrollFollow( this, options );
			}
		);
		
		return this;
	};
})( jQuery );
(function($) {
    $.fn.imageslicer = function(options) {

        options = $.extend({}, $.fn.imageslicer.defaults, options);

        return this.each(function() {
            $(this).append('<div id="sliceWrapper"></div>');
            $('#sliceWrapper').css({'height' : options.height, 'width' : options.width});
            $('#sliceWrapper').addClass(options.backgroundClass);
            if (!options.sliceWidths)
                options.sliceWidth = options.width / options.numSlices;            
            $(document).oneTime(options.startTime, function() {        
                addSlice($('#sliceWrapper'), options, 0, options.numSlices);
            });
        });
    }
    function addSlice(wrapper, options, offset, count) {
        if (!count) {
            if (options.callback) 
                options.callback.call();
            return;
        }
        var id="sliceWrapper"+count;
        wrapper.append('<div id="'+id+'"></div>');
        if (!options.sliceWidths)
            w = options.sliceWidth;
        else
            w = options.sliceWidths[options.numSlices-count];
        $('#'+id).width(w);
        $('#'+id).height(1);
        $('#'+id).addClass(options.sourceClass);
        $('#'+id).css({'background-position' : '-'+offset+'px 100px'});
        $('#'+id).animate({'height' : '100px','margin-top' : '0','background-position' : '-'+offset+'px 100px'}, 1000);
        $('#'+id).css({'float' : 'left'});
        offset += w; 
        $(document).oneTime(options.stepTime, function() {        
            addSlice($('#sliceWrapper'), options, offset, count-1);
        });
    }
    $.fn.imageslicer.defaults = {
        sourceClass: 'imageslicer-fg',
        backgroundClass: 'imageslicer-bg',
        height:100,
        width:100,
        startTime:1000,
        stepTime:1000,
        numSlices:10,
        callback:null,
        sliceWidth:10,
        sliceWidths:[10,10]
    };
})(jQuery);



/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Copyright (c) 20010 Janis Skarnelis
 * Examples and documentation at: http://fancybox.net
 *
 * Version: 1.3.0 (02/02/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function($) {

	var tmp, loading, overlay, wrap, outer, inner, content, close, nav_left, nav_right;

	var selectedIndex = 0, selectedOpts = {}, selectedArray = [], currentIndex = 0, currentOpts = {}, currentArray = [];

	var ajaxLoader = null, imgPreloader = new Image, imageRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, swfRegExp = /[^\.]\.(swf)\s*$/i;

	var loadingTimer, loadingFrame = 1;

	var start_pos, final_pos, busy = false, shadow = 20, fx = $.extend($('<div/>')[0], { prop: 0 }), titleh = 0, isIE6 = !$.support.opacity && !window.XMLHttpRequest;

	$.fn.fixPNG = function() {
		return this.each(function () {
			var image = $(this).css('backgroundImage');

			if (image.match(/^url\(["']?(.*\.png)["']?\)$/i)) {
				image = RegExp.$1;
				$(this).css({
					'backgroundImage': 'none',
					'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=" + ($(this).css('backgroundRepeat') == 'no-repeat' ? 'crop' : 'scale') + ", src='" + image + "')"
				}).each(function () {
					var position = $(this).css('position');
					if (position != 'absolute' && position != 'relative')
						$(this).css('position', 'relative');
				}).css('zoom', 1);
			}
		});
	};

	$.fn.fancybox = function(options) {
		$(this).data('fancybox', $.extend({}, options));

		$(this).unbind('click.fb').bind('click.fb', function(e) {
			e.preventDefault();

			if (busy) return;

			busy = true;

			$(this).blur();

			selectedArray	= [];
			selectedIndex	= 0;

			var rel = $(this).attr('rel') || '';

			if (!rel || rel == '' || rel === 'nofollow') {
				selectedArray.push(this);

			} else {
				selectedArray	= $("a[rel=" + rel + "], area[rel=" + rel + "]");
				selectedIndex	= selectedArray.index( this );
			}

			fancybox_start();

			return false;
		});

		return this;
	};

	/*

	Public Methods

	*/

	$.fancybox = function(obj, opts) {
		if (busy) return;

		busy = true;

		selectedArray	= [];
		selectedIndex	= 0;

		if ($.isArray(obj)) {
			for (var i = 0, j = obj.length; i < j; i++) {
				if (typeof obj[i] == 'object') {
					$(obj[i]).data('fancybox', $.extend({}, opts, obj[i]));
				} else {
					obj[i] = $({}).data('fancybox', $.extend({content : obj[i]}, opts));
				}
			}

			selectedArray = jQuery.merge(selectedArray, obj);

		} else {
			if (typeof obj == 'object') {
				$(obj).data('fancybox', $.extend({}, opts, obj));
			} else {
				obj = $({}).data('fancybox', $.extend({content : obj}, opts));
			}

			selectedArray.push(obj);
		}

		fancybox_start();
	};

	$.fancybox.showActivity = function() {
		clearInterval(loadingTimer);

		loading.show();
		loadingTimer = setInterval(fancybox_animate_loading, 66);
	};
	
	$.fancybox.hideActivity = function() {
		loading.hide();
	};

	$.fancybox.next = function() {
		return $.fancybox.pos( currentIndex + 1);
	};
	
	$.fancybox.prev = function() {
		return $.fancybox.pos( currentIndex - 1);
	};

	$.fancybox.pos = function(pos) {
		if (busy) return;

		pos = parseInt(pos);

		if (pos > -1 && currentArray.length > pos) {
			selectedIndex = pos;
			fancybox_start();
		}

		if (currentOpts.cyclic && currentArray.length > 1 && pos < 0) {
			selectedIndex = currentArray.length - 1;
			fancybox_start();
		}

		if (currentOpts.cyclic && currentArray.length > 1 && pos >= currentArray.length) {
			selectedIndex = 0;
			fancybox_start();
		}

		return;
	};

	$.fancybox.cancel = function() {
		if (busy) return;

		busy = true;

		$.event.trigger('fancybox-cancel');

		fancybox_abort();

		if (selectedOpts && $.isFunction(selectedOpts.onCancel)) {
			selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);
		};

		busy = false;
	};

	// Note: within an iframe use - parent.$.fancybox.close();
	$.fancybox.close = function() {
		if (busy || wrap.is(':hidden')) return;

		busy = true;

		if (currentOpts && $.isFunction(currentOpts.onCleanup)) {
			if (currentOpts.onCleanup(currentArray, currentIndex, currentOpts) === false) {
				busy = false;
				return;
			}
		};

		fancybox_abort();

		$(close.add( nav_left ).add( nav_right )).hide();

		$('#fancybox-title').remove();

		wrap.add(inner).add(overlay).unbind();

		$(window).unbind("resize.fb scroll.fb");
		$(document).unbind('keydown.fb');

		function _cleanup() {
			overlay.fadeOut('fast');

			wrap.hide();

			$.event.trigger('fancybox-cleanup');

			inner.empty();

			if ($.isFunction(currentOpts.onClosed)) {
				currentOpts.onClosed(currentArray, currentIndex, currentOpts);
			}

			currentArray	= selectedOpts	= [];
			currentIndex	= selectedIndex	= 0;
			currentOpts		= selectedOpts	= {};

			busy = false;
		}

		inner.css('overflow', 'hidden');

		if (currentOpts.transitionOut == 'elastic') {
			start_pos = fancybox_get_zoom_from();

			var pos = wrap.position();

			final_pos = {
				top		:	pos.top ,
				left	:	pos.left,
				width	:	wrap.width(),
				height	:	wrap.height()
			};

			if (currentOpts.opacity) {
				final_pos.opacity = 1;
			}

			fx.prop = 1;

			$(fx).animate({ prop: 0 }, {
				 duration	: currentOpts.speedOut,
				 easing		: currentOpts.easingOut,
				 step		: fancybox_draw,
				 complete	: _cleanup
			});

		} else {
			wrap.fadeOut( currentOpts.transitionOut == 'none' ? 0 : currentOpts.speedOut, _cleanup);
		}
	};

	$.fancybox.resize = function() {
		if (busy || wrap.is(':hidden')) return;

		busy = true;

		var c = inner.wrapInner("<div style='overflow:auto'></div>").children();
		var h = c.height();

		wrap.css({height:	h + (currentOpts.padding * 2) + titleh});
		inner.css({height:	h});

		c.replaceWith(c.children());

		$.fancybox.center();
	};

	$.fancybox.center = function() {
		busy = true;

		var view	= fancybox_get_viewport();
		var margin	= currentOpts.margin;
		var to		= {};

		to.top	= view[3] + ((view[1] - ((wrap.height() - titleh) + (shadow * 2 ))) * 0.5);
		to.left	= view[2] + ((view[0] - (wrap.width() + (shadow * 2 ))) * 0.5);

		to.top	= Math.max(view[3] + margin, to.top);
		to.left	= Math.max(view[2] + margin, to.left);

		wrap.css(to);

		busy = false;
	};

	/*
	
	Inner Methods

	*/

	function fancybox_abort() {
		loading.hide();

		imgPreloader.onerror = imgPreloader.onload = null;
		
		if (ajaxLoader) ajaxLoader.abort();

		tmp.empty();
	};

	function fancybox_error() {
		$.fancybox('<p id="fancybox_error">The requested content cannot be loaded.<br />Please try again later.</p>', {
			'scrolling'		: 'no',
			'padding'		: 20,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none'
		});
	};
	
	function fancybox_start() {
		fancybox_abort();

		var obj	= selectedArray[ selectedIndex ];

		selectedOpts = $.extend({}, $.fn.fancybox.defaults, (typeof $(obj).data('fancybox') == 'undefined' ? selectedOpts : $(obj).data('fancybox')));

		var href, type, title = obj.title || $(obj).title || selectedOpts.title || '';

		if (obj.nodeName && !selectedOpts.orig) {
			selectedOpts.orig = $(obj).children("img:first").length ? $(obj).children("img:first") : $(obj);
		}

		if (title == '' && selectedOpts.orig) title = selectedOpts.orig.attr('alt');

		if (obj.nodeName && (/^(?:javascript|#)/i).test(obj.href)) {
			href = selectedOpts.href || null;
		} else {
			href = selectedOpts.href || obj.href || null;
		}

		if (selectedOpts.type) {
			type = selectedOpts.type;

			if (!href) href = selectedOpts.content;
			
		} else if (selectedOpts.content) {
			type	= 'html';

		} else if (href) {
			if (href.match(imageRegExp)) {
				type = 'image';

			} else if (href.match(swfRegExp)) {
				type = 'swf';

			} else if ($(obj).hasClass("iframe")) {
				type = 'iframe';

			} else if (href.match(/#/)) {
				obj = href.substr(href.indexOf("#"));

				type = $(obj).length > 0 ? 'inline' : 'ajax';
			} else {
				type = 'ajax';
			}
		} else {
			type = 'inline';
		}

		selectedOpts.type	= type;
		selectedOpts.href	= href;
		selectedOpts.title	= title;

		if (selectedOpts.autoDimensions && selectedOpts.type !== 'iframe' && selectedOpts.type !== 'swf') {
			selectedOpts.width		= 'auto';
			selectedOpts.height		= 'auto';
		}

		if (selectedOpts.modal) {
			selectedOpts.overlayShow		= true;
			selectedOpts.hideOnOverlayClick	= false;
			selectedOpts.hideOnContentClick	= false;
			selectedOpts.enableEscapeButton	= false;
			selectedOpts.showCloseButton	= false;
		}

		if ($.isFunction(selectedOpts.onStart)) {
			if (selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts) === false) {
				busy = false;
				return;
			}
		};

		tmp.css('padding', (shadow + selectedOpts.padding + selectedOpts.margin));

		$('.fancybox-inline-tmp').unbind('fancybox-cancel').bind('fancybox-change', function() {
			$(this).replaceWith(inner.children());
		});

		switch (type) {
			case 'html' :
				tmp.html( selectedOpts.content );

				fancybox_process_inline();
			break;

			case 'inline' :
				$('<div class="fancybox-inline-tmp" />').hide().insertBefore( $(obj) ).bind('fancybox-cleanup', function() {
					$(this).replaceWith(inner.children());
				}).bind('fancybox-cancel', function() {
					$(this).replaceWith(tmp.children());
				});

				$(obj).appendTo(tmp);

				fancybox_process_inline();
			break;

			case 'image':
				busy = false;

				$.fancybox.showActivity();

				imgPreloader = new Image;

				imgPreloader.onerror = function() {
					fancybox_error();
				}

				imgPreloader.onload = function() {
					imgPreloader.onerror = null;
					imgPreloader.onload = null;
					fancybox_process_image();
				}

				imgPreloader.src = href;
	
			break;

			case 'swf':
				var str = '';
				var emb = '';

				str += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>';

				$.each(selectedOpts.swf, function(name, val) {
					str += '<param name="' + name + '" value="' + val + '"></param>';
					emb += ' ' + name + '="' + val + '"';
				});

				str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"' + emb + '></embed></object>';

				tmp.html(str);

				fancybox_process_inline();
			break;

			case 'ajax':
				var selector	= href.split('#', 2);
				var data		= selectedOpts.ajax.data || {};

				if (selector.length > 1) {
					href = selector[0];

					typeof data == "string" ? data += '&selector=' + selector[1] : data['selector'] = selector[1];
				}

				busy = false;
				$.fancybox.showActivity();

				ajaxLoader = $.ajax($.extend(selectedOpts.ajax, {
					url		: href,
					data	: data,
					error	: fancybox_error,
					success : function(data, textStatus, XMLHttpRequest) {
						if (ajaxLoader.status == 200) {
							tmp.html( data );
							fancybox_process_inline();
						}
					}
				}));

			break;

			case 'iframe' :
				$('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" scrolling="' + selectedOpts.scrolling + '" src="' + selectedOpts.href + '"></iframe>').appendTo(tmp);

				fancybox_show();
			break;
		}
	};

	function fancybox_process_image() {
		busy = true;

		selectedOpts.width	= imgPreloader.width;
		selectedOpts.height	= imgPreloader.height;

		$("<img />").attr({
			'id'	: 'fancybox-img',
			'src'	: imgPreloader.src,
			'alt'	: selectedOpts.title
		}).appendTo( tmp );

		fancybox_show();
	};

	function fancybox_process_inline() {
		tmp.width(	selectedOpts.width );
		tmp.height(	selectedOpts.height );

		if (selectedOpts.width	== 'auto') selectedOpts.width	= tmp.width();
		if (selectedOpts.height	== 'auto') selectedOpts.height	= tmp.height();

		fancybox_show();
	};

	function fancybox_show() {
		loading.hide();

		if (wrap.is(":visible") && $.isFunction(currentOpts.onCleanup)) {
			if (currentOpts.onCleanup(currentArray, currentIndex, currentOpts) === false) {
				$.event.trigger('fancybox-cancel');

				busy = false;
				return;
			}
		};

		currentArray	= selectedArray;
		currentIndex	= selectedIndex;
		currentOpts		= selectedOpts;

		inner.get(0).scrollTop	= 0;
		inner.get(0).scrollLeft	= 0;

		if (currentOpts.overlayShow) {
			if (isIE6) {
				$('select:not(#fancybox-tmp select)').filter(function() {
					return this.style.visibility !== 'hidden';
				}).css({'visibility':'hidden'}).one('fancybox-cleanup', function() {
					this.style.visibility = 'inherit';
				});
			}

			overlay.css({
				'background-color'	: currentOpts.overlayColor,
				'opacity'			: currentOpts.overlayOpacity
			}).unbind().show();
		}

		final_pos = fancybox_get_zoom_to();

		fancybox_process_title();

		if (wrap.is(":visible")) {
			$( close.add( nav_left ).add( nav_right ) ).hide();

			var pos = wrap.position();

			start_pos = {
				top		:	pos.top ,
				left	:	pos.left,
				width	:	wrap.width(),
				height	:	wrap.height()
			};

			var equal = (start_pos.width == final_pos.width && start_pos.height == final_pos.height);

			inner.fadeOut(currentOpts.changeFade, function() {
				$.event.trigger('fancybox-change');

				inner.css({
						top			: currentOpts.padding,
						left		: currentOpts.padding,
						width		: Math.max(start_pos.width	- (currentOpts.padding * 2), 1),
						height		: Math.max(start_pos.height	- (currentOpts.padding * 2), 1)
					})
					.empty()
					.css('overflow', 'hidden');

				function finish_resizing() {
					inner.html( tmp.contents() ).fadeIn(currentOpts.changeFade, _finish);
				}

				fx.prop = 0;

				$(fx).animate({ prop: 1 }, {
					 duration	: equal ? 0 : currentOpts.changeSpeed,
					 easing		: currentOpts.easingChange,
					 step		: fancybox_draw,
					 complete	: finish_resizing
				});
			});

			return;
		}

		wrap.css('opacity', 1);

		if (currentOpts.transitionIn == 'elastic') {
			start_pos = fancybox_get_zoom_from();

			inner.css({
					top			: currentOpts.padding,
					left		: currentOpts.padding,
					width		: Math.max(start_pos.width	- (currentOpts.padding * 2), 1),
					height		: Math.max(start_pos.height	- (currentOpts.padding * 2), 1)
				})
				.html( tmp.contents() );

			wrap.css(start_pos).show();

			if (currentOpts.opacity) final_pos.opacity = 0;

			fx.prop = 0;

			$(fx).animate({ prop: 1 }, {
				 duration	: currentOpts.speedIn,
				 easing		: currentOpts.easingIn,
				 step		: fancybox_draw,
				 complete	: _finish
			});

		} else {
			inner.css({
					top			: currentOpts.padding,
					left		: currentOpts.padding,
					width		: Math.max(final_pos.width	- (currentOpts.padding * 2), 1),
					height		: Math.max(final_pos.height	- (currentOpts.padding * 2) - titleh, 1)
				})
				.html( tmp.contents() );

			wrap.css( final_pos ).fadeIn( currentOpts.transitionIn == 'none' ? 0 : currentOpts.speedIn, _finish );
		}
	};

	function fancybox_draw(pos) {
		var width	= Math.round(start_pos.width	+ (final_pos.width	- start_pos.width)	* pos);
		var height	= Math.round(start_pos.height	+ (final_pos.height	- start_pos.height)	* pos);

		var top		= Math.round(start_pos.top	+ (final_pos.top	- start_pos.top)	* pos);
		var left	= Math.round(start_pos.left	+ (final_pos.left	- start_pos.left)	* pos);

		wrap.css({
			'width'		: width		+ 'px',
			'height'	: height	+ 'px',
			'top'		: top		+ 'px',
			'left'		: left		+ 'px'
		});

		width	= Math.max(width - currentOpts.padding * 2, 0);
		height	= Math.max(height - (currentOpts.padding * 2 + (titleh * pos)), 0);

		inner.css({
			'width'		: width		+ 'px',
			'height'	: height	+ 'px'
		});

		if (typeof final_pos.opacity !== 'undefined') wrap.css('opacity', (pos < 0.5 ? 0.5 : pos));
	};

	function _finish() {
		inner.css('overflow', overflow = (currentOpts.scrolling == 'auto' ? (currentOpts.type == 'image' || currentOpts.type == 'iframe' || currentOpts.type == 'swf' ? 'hidden' : 'auto') : (currentOpts.scrolling == 'yes' ? 'auto' : 'visible')));

		if (!$.support.opacity) {
			inner.get(0).style.removeAttribute('filter');
			wrap.get(0).style.removeAttribute('filter');
		}

		$('#fancybox-title').show();

		if (currentOpts.hideOnContentClick)	inner.one('click',		$.fancybox.close);
		if (currentOpts.hideOnOverlayClick)	overlay.one('click',	$.fancybox.close);

		if (currentOpts.showCloseButton) close.show();

		fancybox_set_navigation();

		$(window).bind("resize.fb", $.fancybox.center);

		currentOpts.centerOnScroll ? $(window).bind("scroll.fb", $.fancybox.center) : $(window).unbind("scroll.fb");

		if ($.isFunction(currentOpts.onComplete)) currentOpts.onComplete(currentArray, currentIndex, currentOpts);

		busy = false;

		fancybox_preload_images();
	};

	function fancybox_get_zoom_to() {
		var view	= fancybox_get_viewport();
		var to		= {};

		var margin = currentOpts.margin;
		var resize = currentOpts.autoScale;

		var horizontal_space	= (shadow + margin) * 2 ;
		var vertical_space		= (shadow + margin) * 2 ;
		var double_padding		= (currentOpts.padding * 2);

		if (currentOpts.width.toString().indexOf('%') > -1) {
			to.width = ((view[0] * parseFloat(currentOpts.width)) / 100) - (shadow * 2) ;
			resize = false;

		} else {
			to.width = currentOpts.width + double_padding;
		}

		if (currentOpts.height.toString().indexOf('%') > -1) {
			to.height = ((view[1] * parseFloat(currentOpts.height)) / 100) - (shadow * 2);
			resize = false;

		} else {
			to.height = currentOpts.height + double_padding;
		}

		if (resize && (to.width > (view[0] - horizontal_space) || to.height > (view[1] - vertical_space))) {
			if (selectedOpts.type == 'image' || selectedOpts.type == 'swf') {
				horizontal_space	+= double_padding;
				vertical_space		+= double_padding;

				var ratio = Math.min(Math.min( view[0] - horizontal_space, currentOpts.width) / currentOpts.width, Math.min( view[1] - vertical_space, currentOpts.height) / currentOpts.height);

				to.width	= Math.round(ratio * (to.width	- double_padding)) + double_padding;
				to.height	= Math.round(ratio * (to.height	- double_padding)) + double_padding;

			} else {
				to.width	= Math.min(to.width,	(view[0] - horizontal_space));
				to.height	= Math.min(to.height,	(view[1] - vertical_space));
			}
		}

		to.top	= view[3] + ((view[1] - (to.height	+ (shadow * 2 ))) * 0.5);
		to.left	= view[2] + ((view[0] - (to.width	+ (shadow * 2 ))) * 0.5);

		if (currentOpts.autoScale == false) {
			to.top	= Math.max(view[3] + margin, to.top);
			to.left	= Math.max(view[2] + margin, to.left);
		}

		return to;
	};

	function fancybox_get_zoom_from() {
		var orig	= selectedOpts.orig ? $(selectedOpts.orig) : false;
		var from 	= {};

		if (orig && orig.length) {
			var pos = fancybox_get_obj_pos(orig);

			from = {
				width	: (pos.width	+ (currentOpts.padding * 2)),
				height	: (pos.height	+ (currentOpts.padding * 2)),
				top		: (pos.top		- currentOpts.padding - shadow),
				left	: (pos.left		- currentOpts.padding - shadow)
			};
			
		} else {
			var view = fancybox_get_viewport();

			from = {
				width	: 1,
				height	: 1,
				top		: view[3] + view[1] * 0.5,
				left	: view[2] + view[0] * 0.5
			};
		}

		return from;
	};

	function fancybox_set_navigation() {
		$(document).unbind('keydown.fb').bind('keydown.fb', function(e) {
			if (e.keyCode == 27 && currentOpts.enableEscapeButton) {
				e.preventDefault();
				$.fancybox.close();

			} else if (e.keyCode == 37) {
				e.preventDefault();
				$.fancybox.prev();

			} else if (e.keyCode == 39) {
				e.preventDefault();
				$.fancybox.next();
			}
		});

		if ($.fn.mousewheel) {
			wrap.unbind('mousewheel.fb');

			if (currentArray.length > 1) {
				wrap.bind('mousewheel.fb', function(e, delta) {
					e.preventDefault();

					if (busy || delta == 0) return;

					delta > 0 ? $.fancybox.prev() : $.fancybox.next();
				});
			}
		}

		if (!currentOpts.showNavArrows) return;

		if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex != 0) {
			nav_left.show();
		}

		if ((currentOpts.cyclic && currentArray.length > 1) || currentIndex != (currentArray.length -1)) {
			nav_right.show();
		}
	};

	function fancybox_preload_images() {
		if ((currentArray.length -1) > currentIndex) {
			var href = currentArray[ currentIndex + 1 ].href;

			if (typeof href !== 'undefined' && href.match(imageRegExp)) {
				var objNext = new Image();
				objNext.src = href;
			}
		}

		if (currentIndex > 0) {
			var href = currentArray[ currentIndex - 1 ].href;

			if (typeof href !== 'undefined' && href.match(imageRegExp)) {
				var objNext = new Image();
				objNext.src = href;
			}
		}
	};

	function fancybox_animate_loading() {
		if (!loading.is(':visible')){
			clearInterval(loadingTimer);
			return;
		}

		$('div', loading).css('top', (loadingFrame * -40) + 'px');

		loadingFrame = (loadingFrame + 1) % 12;
	};

	function fancybox_get_viewport() {
		return [ $(window).width(), $(window).height(), $(document).scrollLeft(), $(document).scrollTop() ];
	};

	function fancybox_get_obj_pos(obj) {
		var pos		= obj.offset();

		pos.top		+= parseFloat( obj.css('paddingTop') )	|| 0;
		pos.left	+= parseFloat( obj.css('paddingLeft') )	|| 0;

		pos.top		+= parseFloat( obj.css('border-top-width') )	|| 0;
		pos.left	+= parseFloat( obj.css('border-left-width') )	|| 0;

		pos.width	= obj.width();
		pos.height	= obj.height();

		return pos;
	};

	function fancybox_process_title() {
		$('#fancybox-title').remove();

		titleh = 0;

		if (currentOpts.titleShow == false) return;

		var obj		= currentArray[ currentIndex ];
		var title	= currentOpts.title;

		title = $.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(title, currentArray, currentIndex, currentOpts) : fancybox_format_title(title);

		if (!title || title == '') return;

		var width	= final_pos.width - (currentOpts.padding * 2);
		var titlec	= 'fancybox-title-' + currentOpts.titlePosition;

		$('<div id="fancybox-title" class="' + titlec + '" />').css({
			'width'			: width,
			'paddingLeft'	: currentOpts.padding,
			'paddingRight'	: currentOpts.padding
		}).html(title).appendTo('body');

		switch (currentOpts.titlePosition) {
			case 'inside':
				titleh = $("#fancybox-title").outerHeight(true) - currentOpts.padding;
				final_pos.height += titleh;
			break;

			case 'over':
				$('#fancybox-title').css('bottom', currentOpts.padding);
			break;

			default:
				$('#fancybox-title').css('bottom', $("#fancybox-title").outerHeight(true) * -1);
			break;
		}

		$('#fancybox-title').appendTo( outer ).hide();

		if (isIE6) {
			$('#fancybox-title span').fixPNG();
		}
	};

	function fancybox_format_title(title) {
		if (title && title.length) {
			switch (currentOpts.titlePosition) {
				case 'inside':
					return title;
				break;

				case 'over':
					return '<span id="fancybox-title-over">' + title + '</span>';
				break;

				default:
					return '<span id="fancybox-title-wrap"><span id="fancybox-title-left"></span><span id="fancybox-title-main">' + title + '</span><span id="fancybox-title-right"></span></span>';
				break;
			}
		}

		return false;
	};

	function fancybox_init() {
		if ($("#fancybox-wrap").length) return;

		$('body').append(
			tmp			= $('<div id="fancybox-tmp"></div>'),
			loading		= $('<div id="fancybox-loading"><div></div></div>'),
			overlay		= $('<div id="fancybox-overlay"></div>'),
			wrap		= $('<div id="fancybox-wrap"></div>')
		);

		outer = $('<div id="fancybox-outer"></div>')
			.append('<div class="fancy-bg" id="fancy-bg-n"></div><div class="fancy-bg" id="fancy-bg-ne"></div><div class="fancy-bg" id="fancy-bg-e"></div><div class="fancy-bg" id="fancy-bg-se"></div><div class="fancy-bg" id="fancy-bg-s"></div><div class="fancy-bg" id="fancy-bg-sw"></div><div class="fancy-bg" id="fancy-bg-w"></div><div class="fancy-bg" id="fancy-bg-nw"></div>')
			.appendTo( wrap );

		outer.append(
			inner		= $('<div id="fancybox-inner"></div>'),
			close		= $('<a id="fancybox-close"></a>'),

			nav_left	= $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),
			nav_right	= $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')
		);
		
		close.click($.fancybox.close);
		loading.click($.fancybox.cancel);

		nav_left.click(function(e) {
			e.preventDefault();
			$.fancybox.prev();
		});

		nav_right.click(function(e) {
			e.preventDefault();
			$.fancybox.next();
		});

		if (!$.support.opacity) {
			outer.find('.fancy-bg').fixPNG();
		}

		if (isIE6) {
			$(close.add('.fancy-ico').add('div', loading)).fixPNG();

			overlay.get(0).style.setExpression('height',	"document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'");
			loading.get(0).style.setExpression('top',		"(-20 + (document.documentElement.clientHeight ? document.documentElement.clientHeight/2 : document.body.clientHeight/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop )) + 'px'");

			outer.prepend('<iframe id="fancybox-hide-sel-frame" src="javascript:\'\';" scrolling="no" frameborder="0" ></iframe>');
		}
	};

	$.fn.fancybox.defaults = {
		padding				:	10,
		margin				:	20,
		opacity				:	false,
		modal				:	false,
		cyclic				:	false,
		scrolling			:	'auto',	// 'auto', 'yes' or 'no'

		width				:	560,
		height				:	340,

		autoScale			:	true,
		autoDimensions		:	true,
		centerOnScroll		:	false,

		ajax				:	{},
		swf					:	{ wmode: 'transparent' },

		hideOnOverlayClick	:	true,
		hideOnContentClick	:	false,

		overlayShow			:	true,
		overlayOpacity		:	0.3,
		overlayColor		:	'#666',

		titleShow			:	true,
		titlePosition		:	'outside',	// 'outside', 'inside' or 'over'
		titleFormat			:	null,

		transitionIn		:	'fade',	// 'elastic', 'fade' or 'none'
		transitionOut		:	'fade',	// 'elastic', 'fade' or 'none'

		speedIn				:	300,
		speedOut			:	300,

		changeSpeed			:	300,
		changeFade			:	'fast',

		easingIn			:	'swing',
		easingOut			:	'swing',

		showCloseButton		:	true,
		showNavArrows		:	true,
		enableEscapeButton	:	true,

		onStart				:	null,
		onCancel			:	null,
		onComplete			:	null,
		onCleanup			:	null,
		onClosed			:	null
	};

	$(document).ready(function() {
		fancybox_init();
	});

})(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright (c) 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright (c) 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);

var jJSON = {
    getValues: function(obj,num) {
        return jJSON[obj]["values"].slice(0,((num == null) ? jJSON[obj]["values"].length : num));
    },
    getCount: function(obj) {
        return jJSON[obj]["count"];
    },
    getRandomValues: function(obj,num) {
        var a = [];
        var b = jJSON[obj]["values"];
        var c = b.length;
        if (num != null && num < c) {
            c = num;
        }
        for (i = 0; i < c; i++) {
            var e = Math.floor(Math.random() * b.length);
            a[i] = b[e];
            b.splice(e,1);
        }
        return a;
    }
};


/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.1.364 (October 15 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/copyleft/lesser.html>.
 */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('c(!1q.2X){h 2X=l(){h p={6b:{"1s-R":"","84-2y":1,"83-2y-7W":I,"1I":v,"8d-89":I,"1H-2Q":4,"3g":I,"1w":I,"66":N,"8k-8l":I,"88":N,"5h-1p":I,"1L-1l":N},M:{4T:I,69:v,5l:16,5k:16,8B:N,8f:N,8s:"54",1f:{5q:"53 1g",5d:"9N 1g",5i:"9O 6q 6p",78:"9M C 9L 1V 9I 6p 9J",3t:"3t",6C:"?",1A:"2X\\n\\n",6T:"9K\'t 9P 2O D: ",7x:"9Q 9W\'t 9X D 1L-1l 9V: ",77:"<!9U 1L 9R \\"-//9S//6H 9T 1.0 9H//9G\\" \\"2s://5x.6x.6B/9v/6D/6H/6D-9w.9u\\"><1L 9t=\\"2s://5x.6x.6B/9s/9x\\"><6z><9y 2s-9E=\\"9F-9D\\" 63=\\"1X/1L; 9C=9z-8\\" /><3i>9A 2X</3i></6z><33 1m=\\"39-9Y:9Z,an,ao,am-al;ai-3f:#aj;3f:#ak;39-2Q:ap;1X-6G:6u;\\"><A 1m=\\"1X-6G:6u;6w-4w:aw;\\"><A 1m=\\"39-2Q:au-at;\\">2X</A><A 1m=\\"39-2Q:.as;6w-9p:ah;\\"><A>6O 2.1.ag (a5 15 6h)</A><A><a 27=\\"2s://6I.3k\\" a6=\\"4k\\" 1m=\\"3f:#6F;1X-6t:6L;\\">2s://6I.3k</a></A><A>a3 a0 a1 f 1l, a2 <a 27=\\"a7://5x.a8.3k/ae-af/ad?ac=a9-aa&ab=ax\\" 1m=\\"3f:#6F;1X-6t:6L;\\">8R</a> 6q 8Q 8O 8W!</A></A><A>8V C 8U 8X.</A><A>8K 8N-6h 8M 8S.</A></A></33></1L>"},8u:N},1r:{4Z:v,9o:v,3m:v,6f:{}},2d:{},8h:{9g:/\\/\\*[\\s\\S]*?\\*\\//3b,9d:/\\/\\/.*$/3b,9e:/#.*$/3b,9j:/"([^\\\\"\\n]|\\\\.)*"/g,9n:/\'([^\\\\\'\\n]|\\\\.)*\'/g,9m:/"([^\\\\"]|\\\\.)*"/g,8Y:/\'([^\\\\\']|\\\\.)*\'/g,9k:/(&X;|<)!--[\\s\\S]*?--(&Z;|>)/3b,43:/&X;\\w+:\\/\\/[\\w-.\\/?%&=@:;]*&Z;|\\w+:\\/\\/[\\w-.\\/?%&=@:;]*/g,9c:{G:/(&X;|<)\\?=?/g,1d:/\\?(&Z;|>)/g},93:{G:/(&X;|<)%=?/g,1d:/%(&Z;|>)/g},92:{G:/(&X;|<)\\s*1l.*?(&Z;|>)/4e,1d:/(&X;|<)\\/\\s*1l\\s*(&Z;|>)/4e}},1w:{1c:l(3O){h 3T=Q.22("3Y"),5s=p.1w.7d;3T.L="1w";D(h 30 1V 5s){h 6i=5s[30],5t=W 6i(3O),1Y=5t.1c();3O.6g[30]=5t;c(1Y==v){1J}c(7X(1Y)=="91"){1Y=p.1w.6m(1Y,3O.1k,30)}1Y.L+="5v "+30;3T.2p(1Y)}q 3T},6m:l(5L,7j,5K){h a=Q.22("a"),5N=a.1m,5D=p.M,5M=5D.5l,5J=5D.5k;a.27="#"+5K;a.3i=5L;a.5j=7j;a.76=5K;a.1Q=5L;c(40(5M)==N){5N.26=5M+"75"}c(40(5J)==N){5N.2e=5J+"75"}a.9l=l(e){97{p.1w.6M(f,e||1q.6Y,f.5j,f.76)}98(e){p.B.1A(e.6n)}q N};q a},6M:l(7i,7g,7b,7h,7f){h 5G=p.1r.6f[7b],5H;c(5G==v||(5H=5G.6g[7h])==v){q v}q 5H.2z(7i,7g,7f)},7d:{5q:l(5b){f.1c=l(){c(5b.V("66")!=I){q}q p.M.1f.5q};f.2z=l(5c,8T,8P){h A=5b.A;5c.7y.4p(5c);A.L=A.L.E("5O","")}},5d:l(6R){f.1c=l(){q p.M.1f.5d};f.2z=l(b1,bU,bV){h 3J=p.B.3d(6R.5g).E(/</g,"&X;"),2A=p.B.4z("","4k",bT,bS,"bQ=0, bR=1, bW=0, 7a=1");3J=p.B.2T(3J);2A.Q.3D("<54>"+3J+"</54>");2A.Q.4o()}},5i:l(64){h 3C,c2,6a=64.1k;f.1c=l(){h 2V=p.M;c(2V.69==v){q v}l 1E(56){h 5m="";D(h 5f 1V 56){5m+="<c1 R=\'"+5f+"\' 24=\'"+56[5f]+"\'/>"}q 5m};l 2i(5n){h 5p="";D(h 5o 1V 5n){5p+=" "+5o+"=\'"+5n[5o]+"\'"}q 5p};h 67={26:2V.5l,2e:2V.5k,1k:6a+"bY",4r:"bZ/x-71-6V",3i:p.M.1f.5i},5V={bE:"ay",bD:"bC",bA:"5j="+6a,c4:"N"},5U=2V.69,3x;c(/bG/i.1R(6K.7k)){3x="<4h"+2i({bH:"bM:bN-bL-bK-bI-bJ",c3:"2s://ck.cj.3k/cm/71/c9/6V/c8.c7#6O=9,0,0,0"})+2i(67)+">"+1E(5V)+1E({c6:5U})+"</4h>"}F{3x="<ca"+2i(67)+2i(5V)+2i({cg:5U})+"/>"}3C=Q.22("A");3C.1Q=3x;q 3C};f.2z=l(cf,ce,62){h 7c=62.cd;6U(7c){2K"7q":h 61=p.B.2T(p.B.3d(64.5g).E(/&X;/g,"<").E(/&Z;/g,">").E(/&aT;/g,"&"));c(1q.74){1q.74.aU("1X",61)}F{q p.B.2T(61)}2K"aR":p.B.1A(p.M.1f.78);2h;2K"aP":p.B.1A(62.6n);2h}}},aV:l(65){f.1c=l(){q p.M.1f.3t};f.2z=l(aW,bz,b0){h 1Z=Q.22("aZ"),1N=v;c(p.1r.3m!=v){Q.33.4p(p.1r.3m)}p.1r.3m=1Z;1Z.1m.aX="aY:aO;26:6r;2e:6r;G:-6j;4w:-6j;";Q.33.2p(1Z);1N=1Z.5Q.Q;6J(1N,1q.Q);1N.3D("<A 1s=\\""+65.A.L.E("5O","")+" aD\\">"+65.A.1Q+"</A>");1N.4o();1Z.5Q.4F();1Z.5Q.3t();l 6J(6N,6E){h 2I=6E.4O("4n");D(h i=0;i<2I.u;i++){c(2I[i].6y.6P()=="6A"&&/aE\\.1a$/.1R(2I[i].27)){6N.3D("<4n 4r=\\"1X/1a\\" 6y=\\"6A\\" 27=\\""+2I[i].27+"\\"></4n>")}}}}},az:l(aA){f.1c=l(){q p.M.1f.6C};f.2z=l(aF,aG){h 2A=p.B.4z("","4k",aM,aK,"7a=0"),1N=2A.Q;1N.3D(p.M.1f.77);1N.4o();2A.4F()}}}},B:{Y:l(49,73,3y){3y=3e.aH(3y||0,0);D(h i=3y;i<49.u;i++){c(49[i]==73){q i}}q-1},6d:l(72){q 72+3e.aI(3e.b2()*b3).2u()},6c:l(51,4L){h 3h={},1W;D(1W 1V 51){3h[1W]=51[1W]}D(1W 1V 4L){3h[1W]=4L[1W]}q 3h},80:l(4J){6U(4J){2K"I":q I;2K"N":q N}q 4J},4z:l(43,6W,4B,4H,2N){h x=(6X.26-4B)/2,y=(6X.2e-4H)/2;2N+=", G="+x+", 4w="+y+", 26="+4B+", 2e="+4H;2N=2N.E(/^,/,"");h 4E=1q.bk(43,6W,2N);4E.4F();q 4E},7C:l(1G,1T,1U){c(1G.6Z){1G["e"+1T+1U]=1U;1G[1T+1U]=l(){1G["e"+1T+1U](1q.6Y)};1G.6Z("bw"+1T,1G[1T+1U])}F{1G.bv(1T,1U,N)}},1A:l(z){1A(p.M.1f.1A+z)},4u:l(4N,6Q){h 2r=p.1r.4Z,3V=v;c(2r==v){2r={};D(h 2L 1V p.2d){h 42=p.2d[2L].bu;c(42==v){1J}p.2d[2L].R=2L.6P();D(h i=0;i<42.u;i++){2r[42[i]]=2L}}p.1r.4Z=2r}3V=p.2d[2r[4N]];c(3V==v&&6Q!=N){p.B.1A(p.M.1f.6T+4N)}q 3V},46:l(z,6S){h 2E=z.1P("\\n");D(h i=0;i<2E.u;i++){2E[i]=6S(2E[i])}q 2E.5A("\\n")},8C:l(z){q z.E(/^[ ]*[\\n]+|[\\n]*[ ]*$/g,"")},8H:l(z){h 3X,45={},4P=W U("^\\\\[(?<4c>(.*?))\\\\]$"),7e=W U("(?<R>[\\\\w-]+)"+"\\\\s*:\\\\s*"+"(?<24>"+"[\\\\w-%#]+|"+"\\\\[.*?\\\\]|"+"\\".*?\\"|"+"\'.*?\'"+")\\\\s*;?","g");2j((3X=7e.T(z))!=v){h 2f=3X.24.E(/^[\'"]|[\'"]$/g,"");c(2f!=v&&4P.1R(2f)){h m=4P.T(2f);2f=m.4c.u>0?m.4c.1P(/\\s*,\\s*/):[]}45[3X.R]=2f}q 45},7K:l(z,1a){c(z==v||z.u==0||z=="\\n"){q z}z=z.E(/</g,"&X;");z=z.E(/ {2,}/g,l(m){h 4t="";D(h i=0;i<m.u-1;i++){4t+="&2B;"}q 4t+" "});c(1a!=v){z=p.B.46(z,l(2l){c(2l.u==0){q""}h 3W="";2l=2l.E(/^(&2B;| )+/,l(s){3W=s;q""});c(2l.u==0){q 3W}q 3W+"<C 1s=\\""+1a+"\\">"+2l+"</C>"})}q z},7V:l(6l,6o){h 32=6l.2u();2j(32.u<6o){32="0"+32}q 32},6k:l(){h 3w=Q.22("A"),3B,3o=0,44=Q.33,1k=p.B.6d("6k"),36="<A 1s=\\"",2Y="</A>",4U="</4G>";3w.1Q=36+"6e\\">"+36+"1p\\">"+36+"2y\\">"+36+"63"+"\\"><4G 1s=\\"b5\\"><4G 1k=\\""+1k+"\\">&2B;"+4U+4U+2Y+2Y+2Y+2Y;44.2p(3w);3B=Q.bb(1k);c(/bg/i.1R(6K.7k)){h 6v=1q.be(3B,v);3o=85(6v.bc("26"))}F{3o=3B.bd}44.4p(3w);q 3o},8b:l(79,6s){h 1H="";D(h i=0;i<6s;i++){1H+=" "}q 79.E(/\\t/g,1H)},8a:l(2Z,4f){h bF=2Z.1P("\\n"),1H="\\t",4d="";D(h i=0;i<50;i++){4d+="                    "}l 8x(3s,18,8A){q 3s.29(0,18)+4d.29(0,8A)+3s.29(18+1,3s.u)};2Z=p.B.46(2Z,l(20){c(20.Y(1H)==-1){q 20}h 18=0;2j((18=20.Y(1H))!=-1){h 8w=4f-18%4f;20=8x(20,18,8w)}q 20});q 2Z},3d:l(z){h br=/<br\\s*\\/?>|&X;br\\s*\\/?&Z;/4e;c(p.M.8B==I){z=z.E(br,"\\n")}c(p.M.8f==I){z=z.E(br,"")}q z},2G:l(z){q z.E(/^\\s+|\\s+$/g,"")},2T:l(z){h 21=p.B.3d(z).1P("\\n"),bf=W bh(),8D=/^\\s*/,2a=ba;D(h i=0;i<21.u&&2a>0;i++){h 4x=21[i];c(p.B.2G(4x).u==0){1J}h 4I=8D.T(4x);c(4I==v){q z}2a=3e.2a(4I[0].u,2a)}c(2a>0){D(h i=0;i<21.u;i++){21[i]=21[i].29(2a)}}q 21.5A("\\n")},82:l(35,31){c(35.H<31.H){q-1}F{c(35.H>31.H){q 1}F{c(35.u<31.u){q-1}F{c(35.u>31.u){q 1}}}}q 0},2D:l(8q,34){l 8n(4D,8r){q[W p.4v(4D[0],4D.H,8r.1a)]};h b4=0,4s=v,3L=[],8p=34.4X?34.4X:8n;2j((4s=34.3K.T(8q))!=v){3L=3L.2t(8p(4s,34))}q 3L},8m:l(8o){h X="&X;",Z="&Z;";q 8o.E(p.8h.43,l(m){h 4j="",47="";c(m.Y(X)==0){47=X;m=m.3U(X.u)}c(m.Y(Z)==m.u-Z.u){m=m.3U(0,m.u-Z.u);4j=Z}q 47+"<a 27=\\""+m+"\\">"+m+"</a>"+4j})},8v:l(){h 3N=Q.4O("1l"),4i=[];D(h i=0;i<3N.u;i++){c(3N[i].4r=="6e"){4i.K(3N[i])}}q 4i},8I:l(4b){h 4q="<![b6[",3S="]]>",1v=p.B.2G(4b),3R=N;c(1v.Y(4q)==0){1v=1v.3U(4q.u);3R=I}c(1v.Y(3S)==1v.u-3S.u){1v=1v.3U(0,1v.u-3S.u);3R=I}q 3R?1v:4b}},1I:l(8E,4R){l 8e(4g){h 4Q=[];D(h i=0;i<4g.u;i++){4Q.K(4g[i])}q 4Q};h 2q=4R?[4R]:8e(Q.4O(p.M.8s)),8J="1Q",2k=v,4S=p.M;c(4S.4T){2q=2q.2t(p.B.8v())}c(2q.u===0){q}D(h i=0;i<2q.u;i++){h 2M=2q[i],28=p.B.8H(2M.L),1D,2W,25;28=p.B.6c(8E,28);1D=28["2O"];c(1D==v){1J}c(28["1L-1l"]=="I"||p.6b["1L-1l"]==I){2k=W p.4a(1D);1D="b9"}F{h 3P=p.B.4u(1D);c(3P){1D=3P.R;2k=W 3P()}F{1J}}2W=2M[8J];c(4S.4T){2W=p.B.8I(2W)}28["2O-R"]=1D;2k.1I(2W,28);25=2k.A;c(p.M.8u){25=Q.22("bj");25.24=2k.A.1Q;25.1m.26="bt";25.1m.2e="bx"}2M.7y.bs(25,2M)}},bq:l(7H){p.B.7C(1q,"bl",l(){p.1I(7H)})}};p.4v=l(4A,7G,1a){f.24=4A;f.H=7G;f.u=4A.u;f.1a=1a;f.5Y=v};p.4v.14.2u=l(){q f.24};p.4a=l(4K){h 3z=p.B.4u(4K),2g,4W=W p.2d.bm(),bn=v;c(3z==v){q}2g=W 3z();f.4m=4W;c(2g.3I==v){p.B.1A(p.M.1f.7x+4K);q}4W.59.K({3K:2g.3I.C,4X:7p});l 3A(4Y,7w){D(h j=0;j<4Y.u;j++){4Y[j].H+=7w}};l 7p(19,bp){h 7n=19.C,1o=[],4M=2g.59,7l=19.H+19.G.u,2U=2g.3I,1n;D(h i=0;i<4M.u;i++){1n=p.B.2D(7n,4M[i]);3A(1n,7l);1o=1o.2t(1n)}c(2U.G!=v&&19.G!=v){1n=p.B.2D(19.G,2U.G);3A(1n,19.H);1o=1o.2t(1n)}c(2U.1d!=v&&19.1d!=v){1n=p.B.2D(19.1d,2U.1d);3A(1n,19.H+19[0].bo(19.1d));1o=1o.2t(1n)}D(h j=0;j<1o.u;j++){1o[j].5Y=3z.R}q 1o}};p.4a.14.1I=l(7t,7s){f.4m.1I(7t,7s);f.A=f.4m.A};p.7I=l(){};p.7I.14={V:l(7J,7Z){h 4l=f.1E[7J];q p.B.80(4l==v?7Z:4l)},1c:l(7Y){q Q.22(7Y)},8i:l(2F,81){h 3u=[];c(2F!=v){D(h i=0;i<2F.u;i++){c(7X(2F[i])=="4h"){3u=3u.2t(p.B.2D(81,2F[i]))}}}q 3u.aB(p.B.82)},86:l(){h 23=f.2C;D(h i=0;i<23.u;i++){c(23[i]===v){1J}h 2x=23[i],4V=2x.H+2x.u;D(h j=i+1;j<23.u&&23[i]!==v;j++){h 1S=23[j];c(1S===v){1J}F{c(1S.H>4V){2h}F{c(1S.H==2x.H&&1S.u>2x.u){f.2C[i]=v}F{c(1S.H>=2x.H&&1S.H<4V){f.2C[j]=v}}}}}}},8t:l(2H){h 3r=2H.1P(/\\n/g),3n=85(f.V("84-2y")),2v=f.V("83-2y-7W"),7N=f.V("1I",[]),7U=f.V("3g");2H="";c(2v==I){2v=(3n+3r.u-1).2u().u}F{c(40(2v)==I){2v=0}}D(h i=0;i<3r.u;i++){h 1x=3r[i],60=/^(&2B;|\\s)+/.T(1x),52="aN"+(i%2==0?1:2),7F=p.B.7V(3n+i,2v),7P=p.B.Y(7N,(3n+i).2u())!=-1,2S=v;c(60!=v){2S=60[0].2u();1x=1x.29(2S.u)}1x=p.B.2G(1x);c(1x.u==0){1x="&2B;"}c(7P){52+=" aQ"}2H+="<A 1s=\\"2y "+52+"\\">"+"<7L>"+"<7T>"+(7U?"<3F 1s=\\"aS\\"><C>"+7F+"</C></3F>":"")+"<3F 1s=\\"63\\">"+(2S!=v?"<C 1s=\\"by\\">"+2S.E(" ","&2B;")+"</C>":"")+1x+"</3F>"+"</7T>"+"</7L>"+"</A>"}q 2H},8y:l(5X,5T){h 18=0,3c="",3a=p.B.7K,5S=f.V("2O-R","");l 5W(5Z){h 5R=5Z?(5Z.5Y||5S):5S;q 5R?5R+" ":""};D(h i=0;i<5T.u;i++){h 1y=5T[i],3G;c(1y===v||1y.u===0){1J}3G=5W(1y);3c+=3a(5X.29(18,1y.H-18),3G+"7O")+3a(1y.24,3G+1y.1a);18=1y.H+1y.u}3c+=3a(5X.29(18),5W()+"7O");q 3c},1I:l(C,7E){h cb=p.M,1r=p.1r,A,ci,3Z,ch="cn";f.1E={};f.A=v;f.1p=v;f.C=v;f.1i=v;f.6g={};f.1k=p.B.6d("cl");1r.6f[f.1k]=f;c(C===v){C=""}f.1E=p.B.6c(p.6b,7E||{});c(f.V("88")==I){f.1E.1w=f.1E.3g=N}f.A=A=f.1c("3Y");f.1p=f.1c("3Y");f.1p.L="1p";L="6e";A.1k=f.1k;c(f.V("66")){L+=" 5O"}c(f.V("3g")==N){L+=" bB"}c(f.V("5h-1p")==N){f.1p.L+=" bO-5h"}L+=" "+f.V("1s-R");L+=" "+f.V("2O-R");A.L=L;f.5g=C;f.C=p.B.8C(C).E(/\\r/g," ");3Z=f.V("1H-2Q");f.C=f.V("8d-89")==I?p.B.8a(f.C,3Z):p.B.8b(f.C,3Z);f.C=p.B.2T(f.C);c(f.V("1w")){f.1i=f.1c("3Y");f.1i.L="1i";f.1i.2p(p.1w.1c(f));A.2p(f.1i);h 1i=f.1i;l 58(){1i.L=1i.L.E("53","")};A.c0=l(){58();1i.L+=" 53"};A.bX=l(){58()}}A.2p(f.1p);f.2C=f.8i(f.59,f.C);f.86();C=f.8y(f.C,f.2C);C=f.8t(p.B.2G(C));c(f.V("8k-8l")){C=p.B.8m(C)}f.1p.1Q=C},9f:l(z){z=z.E(/^\\s+|\\s+$/g,"").E(/\\s+/g,"|");q"\\\\b(?:"+z+")\\\\b"},9i:l(2J){f.3I={G:{3K:2J.G,1a:"1l"},1d:{3K:2J.1d,1a:"1l"},C:W U("(?<G>"+2J.G.1g+")"+"(?<C>.*?)"+"(?<1d>"+2J.1d.1g+")","96")}}};q p}()}c(!1q.U){(l(){h 2w={T:10.14.T,87:5I.14.87,E:5I.14.E,1P:5I.14.1P},1F={13:/(?:[^\\\\([#\\s.]+|\\\\(?!k<[\\w$]+>|[7z]{[^}]+})[\\S\\s]?|\\((?=\\?(?!#|<[\\w$]+>)))+|(\\()(?:\\?(?:(#)[^)]*\\)|<([$\\w]+)>))?|\\\\(?:k<([\\w$]+)>|[7z]{([^}]+)})|(\\[\\^?)|([\\S\\s])/g,99:/(?:[^$]+|\\$(?![1-9$&`\']|{[$\\w]+}))+|\\$(?:([1-9]\\d*|[$&`\'])|{([$\\w]+)})/g,37:/^(?:\\s+|#.*)+/,5B:/^(?:[?*+]|{\\d+(?:,\\d*)?})/,7Q:/&&\\[\\^?/g,7S:/]/g},7o=l(5C,5v,5u){D(h i=5u||0;i<5C.u;i++){c(5C[i]===5v){q i}}q-1},8G=/()??/.T("")[1]!==3j,3q={};U=l(1e,1O){c(1e 68 10){c(1O!==3j){3H 7r("4y\'t 4C 9a 8z 95 7u 10 5u 94")}q 1e.3E()}h 1O=1O||"",7R=1O.Y("s")>-1,7M=1O.Y("x")>-1,5z=N,3v=[],1b=[],13=1F.13,J,cc,38,3M,3p;13.O=0;2j(J=2w.T.2n(13,1e)){c(J[2]){c(!1F.5B.1R(1e.17(13.O))){1b.K("(?:)")}}F{c(J[1]){3v.K(J[3]||v);c(J[3]){5z=I}1b.K("(")}F{c(J[4]){3M=7o(3v,J[4]);1b.K(3M>-1?"\\\\"+(3M+1)+(40(1e.5w(13.O))?"":"(?:)"):J[0])}F{c(J[5]){1b.K(3q.7m?3q.7m.7q(J[5],J[0].5w(1)==="P"):J[0])}F{c(J[6]){c(1e.5w(13.O)==="]"){1b.K(J[6]==="["?"(?!)":"[\\\\S\\\\s]");13.O++}F{cc=U.8g("&&"+1e.17(J.H),1F.7Q,1F.7S,"",{7D:"\\\\"})[0];1b.K(J[6]+cc+"]");13.O+=cc.u+1}}F{c(J[7]){c(7R&&J[7]==="."){1b.K("[\\\\S\\\\s]")}F{c(7M&&1F.37.1R(J[7])){38=2w.T.2n(1F.37,1e.17(13.O-1))[0].u;c(!1F.5B.1R(1e.17(13.O-1+38))){1b.K("(?:)")}13.O+=38-1}F{1b.K(J[7])}}}F{1b.K(J[0])}}}}}}}3p=10(1b.5A(""),2w.E.2n(1O,/[9B]+/g,""));3p.1C={1g:1e,2m:5z?3v:v};q 3p};U.9q=l(R,o){3q[R]=o};10.14.T=l(z){h 1h=2w.T.2n(f,z),R,i,5y;c(1h){c(8G&&1h.u>1){5y=W 10("^"+f.1g+"$(?!\\\\s)",f.5E());2w.E.2n(1h[0],5y,l(){D(i=1;i<8j.u-2;i++){c(8j[i]===3j){1h[i]=3j}}})}c(f.1C&&f.1C.2m){D(i=1;i<1h.u;i++){R=f.1C.2m[i-1];c(R){1h[R]=1h[i]}}}c(f.3l&&f.O>(1h.H+1h[0].u)){f.O--}}q 1h}})()}10.14.5E=l(){q(f.3l?"g":"")+(f.av?"i":"")+(f.8F?"m":"")+(f.37?"x":"")+(f.a4?"y":"")};10.14.3E=l(7A){h 5F=W U(f.1g,(7A||"")+f.5E());c(f.1C){5F.1C={1g:f.1C.1g,2m:f.1C.2m?f.1C.2m.17(0):v}}q 5F};10.14.2n=l(90,z){q f.T(z)};10.14.9b=l(9h,8c){q f.T(8c[0])};U.5P=l(57,5e){h 55="/"+57+"/"+(5e||"");q U.5P[55]||(U.5P[55]=W U(57,5e))};U.41=l(z){q z.E(/[-[\\]{}()*+?.\\\\^$|,#\\s]/g,"\\\\$&")};U.8g=l(z,G,11,1j,2R){h 2R=2R||{},2P=2R.7D,12=2R.c5,1j=1j||"",5r=1j.Y("g")>-1,70=1j.Y("i")>-1,7v=1j.Y("m")>-1,5a=1j.Y("y")>-1,1j=1j.E(/y/g,""),G=G 68 10?(G.3l?G:G.3E("g")):W U(G,"g"+1j),11=11 68 10?(11.3l?11:11.3E("g")):W U(11,"g"+1j),1M=[],2o=0,1u=0,1t=0,1z=0,2b,2c,1B,1K,3Q,48;c(2P){c(2P.u>1){3H aC("4y\'t 4C aL aJ 7u 41 7B")}c(7v){3H 7r("4y\'t 4C 41 7B 8z bi b8 8F b7")}3Q=U.41(2P);48=W 10("^(?:"+3Q+"[\\\\S\\\\s]|(?:(?!"+G.1g+"|"+11.1g+")[^"+3Q+"])+)+",70?"i":"")}2j(I){G.O=11.O=1t+(2P?(48.T(z.17(1t))||[""])[0].u:0);1B=G.T(z);1K=11.T(z);c(1B&&1K){c(1B.H<=1K.H){1K=v}F{1B=v}}c(1B||1K){1u=(1B||1K).H;1t=(1B?G:11).O}F{c(!2o){2h}}c(5a&&!2o&&1u>1z){2h}c(1B){c(!2o++){2b=1u;2c=1t}}F{c(1K&&2o){c(!--2o){c(12){c(12[0]&&2b>1z){1M.K([12[0],z.17(1z,2b),1z,2b])}c(12[1]){1M.K([12[1],z.17(2b,2c),2b,2c])}c(12[2]){1M.K([12[2],z.17(2c,1u),2c,1u])}c(12[3]){1M.K([12[3],z.17(1u,1t),1u,1t])}}F{1M.K(z.17(2c,1u))}1z=1t;c(!5r){2h}}}F{G.O=11.O=0;3H bP("8L aq 9r ar 8Z")}}c(1u===1t){1t++}}c(5r&&!5a&&12&&12[0]&&z.u>1z){1M.K([12[0],z.17(1z),1z,z.u])}G.O=11.O=0;q 1M};',62,768,'||||||||||||if|||this||var||||function||||sh|return||||length|null||||str|div|utils|code|for|replace|else|left|index|true|_121|push|className|config|false|lastIndex||document|name||exec|XRegExp|getParam|new|lt|indexOf|gt|RegExp|_139|vN|part|prototype|||slice|pos|_d3|css|_11f|create|right|_119|strings|source|_129|bar|_13a|id|script|style|_da|_d6|lines|window|vars|class|_145|_144|_b5|toolbar|_f4|_103|_146|alert|_149|_x|_c3|params|lib|obj|tab|highlight|continue|_14a|html|_142|doc|_11a|split|innerHTML|test|_ec|_5a|_5b|in|_4f|text|_8|_3c|_91|_98|createElement|_e7|value|_c5|width|href|_c2|substr|min|_147|_148|brushes|height|_6e|_cd|break|attributes|while|_be|_75|captureNames|call|_143|appendChild|_bc|_5f|http|concat|toString|_f0|real|_e9|line|execute|wnd|nbsp|matches|getMatches|_66|_e3|trim|_ed|_40|_10f|case|_61|_c1|_55|brush|_13c|size|_13b|_f9|unindent|_d9|_28|_c4|SyntaxHighlighter|_81|_88|_5|m2|_7a|body|_a2|m1|_80|extended|len|font|_fe|gm|_fd|fixInputString|Math|color|gutter|_4e|title|undefined|com|global|printFrame|_ef|_7d|_125|_118|_ee|_8e|print|_e5|_11e|_7b|_32|_49|_cc|offsetMatches|_7c|_25|write|addFlags|td|_104|throw|htmlScript|_22|regex|_a7|_124|_af|_2|_c6|_14b|_b6|_b4|_3|substring|_60|_76|_6a|DIV|_10b|isNaN|escape|_62|url|_7e|_6b|eachLine|_ae|esc|_47|HtmlScript|_b2|values|_8c|gi|_89|_b9|object|_b0|_ad|_blank|_e1|xmlBrush|link|close|removeChild|_b3|type|_a6|_73|findBrush|Match|top|_9d|can|popup|_c8|_53|supply|_a3|win|focus|span|_54|_9e|_50|_cb|_4d|_d7|_5d|getElementsByTagName|_6c|_ba|_b8|_bf|useScriptTags|_82|_ea|_ce|func|_d0|discoveredBrushes||_4c|_f6|show|pre|key|_29|_133|hide|regexList|_141|_19|_1a|viewSource|_134|_2b|originalCode|wrap|copyToClipboard|highlighterId|toolbarItemHeight|toolbarItemWidth|_2a|_2c|_2e|_2d|expandSource|_13e|_4|_7|from|item|charAt|www|r2|_11d|join|quantifier|_113|_e|getNativeFlags|_12e|_17|_18|String|_10|_b|_9|_f|_d|collapsed|cache|contentWindow|_101|_ff|_fb|swf|_30|getBrushNameCss|_fa|brushName|_100|_f5|_37|_35|content|_24|_38|collapse|_2f|instanceof|clipboardSwf|_27|defaults|merge|guid|syntaxhighlighter|highlighters|toolbarCommands|2009|_6|500px|measureSpace|_78|createButton|message|_79|clipboard|to|0px|_85|decoration|center|_83|margin|w3|rel|head|stylesheet|org|help|xhtml1|_3f|0099FF|align|DTD|alexgorbatchev|copyStyles|navigator|none|executeCommand|_3e|version|toLowerCase|_5e|_1e|_65|noBrush|switch|flash|_52|screen|event|attachEvent|_13f|shockwave|_4b|_48|clipboardData|px|commandName|aboutDialog|copyToClipboardConfirmation|_84|scrollbars|_14|_36|items|_6d|_16|_13|_15|_12|_a|userAgent|_d8|unicode|_d5|_112|process|get|TypeError|_de|_dd|one|_140|_d1|brushNotHtmlScript|parentNode|pP|_12d|character|addEvent|escapeChar|_106|_f7|_c9|_c7|Highlighter|_df|decorate|table|_11c|_f1|plain|_f8|classLeft|_11b|classRight|tr|_f2|padNumber|numbers|typeof|_e2|_e0|toBoolean|_e4|matchesSortCallback|pad|first|parseInt|removeNestedMatches|match|light|tabs|processSmartTabs|processTabs|args|smart|toArray|stripBrs|matchRecursive|regexLib|findMatches|arguments|auto|links|processUrls|defaultAdd|_a9|_a8|_a1|_a4|tagName|createDisplayLines|debug|getSyntaxHighlighterScriptTags|_93|insertSpaces|processMatches|when|_90|bloggerMode|trimFirstAndLastLines|_9a|_b7|multiline|_117|parseParams|stripCData|_bd|Copyright|subject|Alex|2004|development|_1c|keep|donate|Gorbatchev|_1b|syntax|JavaScript|active|highlighter|multiLineSingleQuotedString|delimiters|_12f|string|scriptScriptTags|aspScriptTags|another|constructing|sgi|try|catch|replaceVar|flags|apply|phpScriptTags|singleLineCComments|singleLinePerlComments|getKeywords|multiLineCComments|_131|forHtmlScript|doubleQuotedString|xmlComments|onclick|multiLineDoubleQuotedString|singleQuotedString|spaceWidth|bottom|addPlugin|contains|1999|xmlns|dtd|TR|transitional|xhtml|meta|utf|About|sx|charset|Type|equiv|Content|EN|Transitional|your|now|Can|is|The|view|copy|find|Brush|PUBLIC|W3C|XHTML|DOCTYPE|option|wasn|configured|family|Geneva|you|like|please|If|sticky|October|target|https|paypal|_s|xclick|hosted_button_id|cmd|webscr|cgi|bin|364|4em|background|fff|000|serif|sans|Arial|Helvetica|1em|data|unbalanced|75em|large|xx|ignoreCase|3em|2930402|always|about|_42|sort|SyntaxError|printing|shCore|_43|_44|max|round|than|250|more|500|alt|absolute|error|highlighted|ok|number|amp|setData|printSource|_39|cssText|position|IFRAME|_3b|_1f|random|1000000|_a5|block|CDATA|flag|the|htmlscript|1000|getElementById|getPropertyValue|offsetWidth|getComputedStyle|_99|opera|Array|using|textarea|open|load|Xml|_cf|lastIndexOf|_d4|all||replaceChild|70em|aliases|addEventListener|on|30em|spaces|_3a|flashVars|nogutter|transparent|wmode|allowScriptAccess|_8a|msie|classid|96b8|444553540000|11cf|ae6d|clsid|d27cdb6e|no|Error|location|resizable|400|750|_20|_21|menubar|onmouseout|_clipboard|application|onmouseover|param|_26|codebase|menu|valueNames|movie|cab|swflash|cabs|embed|conf||command|_34|_33|src|_10c|_10a|macromedia|download|highlighter_|pub|important'.split('|'),0,{}))

/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.1.364 (October 15 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/copyleft/lesser.html>.
 */
SyntaxHighlighter.brushes.JScript = function()
{
	var keywords =	'break case catch continue ' +
					'default delete do else false  ' +
					'for function if in instanceof ' +
					'new null return super switch ' +
					'this throw true try typeof var while with'
					;

	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
		{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// double quoted strings
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// single quoted strings
		{ regex: /\s*#.*/gm,										css: 'preprocessor' },		// preprocessor tags like #region and #endregion
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }			// keywords
		];
	
	this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags);
};

SyntaxHighlighter.brushes.JScript.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.JScript.aliases	= ['js', 'jscript', 'javascript'];

/*
 * jQuery autoscroll plugin
 *
 * Copyright 2008 Wilker Lucio <wilkerlucio@gmail.com>
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. 
 */
AUTOSCROLL_X=1;AUTOSCROLL_Y=2;AUTOSCROLL_BOTH=3;(function($){$.autoscroll={};$.autoscroll.Easemove=function(){this.current_point=0;this.end_point=0;this.running=false;this.speed=.07;this.onmove=function(){};};$.autoscroll.Easemove.prototype={set_end_point:function(point){this.end_point=point;if(this.running){return;};this.running=true;this.move();},move:function(){var distance=this.end_point-this.current_point;var move=distance*this.speed;this.current_point+=move;this.onmove(this.current_point);if(Math.round(this.current_point)!=this.end_point){var t=this;setTimeout(function(){t.move();},20);}else{this.running=false;}}};$.autoscroll.zip=function(){var items=$.makeArray(arguments);var callback=items.shift();var results=[];for(var i=0;i<items[0].length;i++){var line=[];for(var x=0;x<items.length;x++){line.push(items[x][i]);};results.push(callback.apply(this,line));};return results;};$.fn.autoscroll=function(mode,degree_window,speed){mode=mode||AUTOSCROLL_BOTH;degree_window=degree_window||[20,20];speed=speed||.07;var directions=['left','top'];return this.each(function(){var container=$(this);var inner_container=container.children(':first');var ava_size=[container.width(),container.height()];var position=inner_container.css('position');inner_container.css('position','absolute');var real_size=[inner_container.width(),inner_container.height()];inner_container.css('position',position);var offset=container.offset();offset=[offset.left,offset.top];var easemove=[];jQuery.each(directions,function(i,v){var obj=new jQuery.autoscroll.Easemove();obj.speed=speed;obj.onmove=function(position){inner_container.css('margin-'+v,-position);};easemove.push(obj);});container.mousemove(function(event){var mouse=[event.pageX,event.pageY];jQuery.autoscroll.zip(function(m,o,a,r,e,w,t){if(!(t&mode))return;var d=m-o;d=Math.min(Math.max(d-w,0),a-w*2);var f=d/(a-w*2);var real=f*(r-a);e.set_end_point(real);},mouse,offset,ava_size,real_size,easemove,degree_window,[AUTOSCROLL_X,AUTOSCROLL_Y]);});});};})(jQuery);
var useNarrowScroll = true;


//$('a.media-auto').media({ width: 400, height: 300, autoplay: true,flvPlayer:'/generated_media/media/3/global/flowplayer/flowplayer-3.1.5.swf'} );
//$('.html2').jasciible(true, function(o) {$(o).show()});

function initSoundManager(scope) {
	soundManager.url = '/static/content/swf/';
	soundManager.debugMode = false;
	soundManager.onload = function() {
	  // SM2 is ready to go! 
	  // soundManager.createSound(...) calls can now be made, etc.
	}
}


function initScrollPanes(scope) {
  if (!scope) {scope = '';} else {scope += ' ';}
  $(scope+'.scroll-pane').jScrollPane({scrollbarWidth:20, scrollbarMargin:10});
  $(scope+'.jScrollPaneDrag').css("width", "5px");
  $(scope+".jScrollPaneTrack").hoverIntent( {    
     sensitivity: 3,
     interval: 20,
     over: scrollOver,
     timeout: 50,
     out: scrollOut 
  });
}

function unInitScrollPanes(scope) {
  if (!scope) {scope = '';} else {scope += ' ';}
  $(scope+'.scroll-pane').jScrollPaneRemove();
}
function resetScrollPanes(scope) {
  if (!scope) {scope = '';} else {scope += ' ';}
  $this = $(this);
  this.scrollTo('.top');
}

function initFlowPanes(paneid, tabid) {
  return $(paneid).scrollable({size: 1,
      onSeek: function() { 
    }, 

    onBeforeClick: function(event, tabIndex) { 
        var tabPanes = this.getScrollable();
        return false;
    },
	keyboard:true

  }).navigator({

    // select #flowtabs to be used as navigator
    navi: tabid,

    // select A tags inside the navigator to work as items (not direct children)
    naviItem: 'a',

    // assign "current" class name for the active A tag inside navigator
    activeClass: 'current'

  });

}

function scrollOver() {
	$(this).parent().find('.jScrollPaneDrag').animate({ 
		borderLeft: '0',
		borderRight: '0',
		marginLeft: '0',
		width: '20px',
		opacity: '.20',
		filter: 'alpha(opacity=20)',
		'-moz-opacity': '.20'
	}, 150);
}

function scrollOut() {
    $(this).parent().find('.jScrollPaneDrag').animate({ 
		borderLeft: '0',
		borderRight: '0',
		marginLeft: '8px',
		width: '5px',
		opacity: '.50',
		filter: 'alpha(opacity=50)',
		'-moz-opacity': '.50'
	}, 150);
}


/*
function initThiss(scope) {
alert('initThiss');
if (!scope) {scope = '';} else {scope += ' ';}
  $(scope+'.thiss_dock_elt').thiss();
}

function initImgCaptions(scope) {
alert('initImgCaptions');
  if (!scope) {scope = '';} else {scope += ' ';}
  $(scope+'.img-caption1').each(function() {
    var t = $(this);
    t.html(t.html().replace(/(\*\s)(.*)/g, "<span class='caption-em'>*&nbsp;</span>$2"));
  });
}

function initPNG() {
alert('initPNG');
//  $(document).pngFix(); 
}

function addPixels(val, current) {
alert('addPixels');
  return (parseInt(current.slice(current.length-3))+val)+'px';
}

function initParallax(id) {
alert('initParallax');
  $(id).jparallax({yparallax:false});
}

function initExposes() {
alert('initExposes');

 $(".expose").expose({ 
        lazy:false,
        maskId:'mask'
  
    // perform exposing when image is clicked 
    }).mouseenter(function()  { 
        $(this).expose().load(); 

    }).mouseleave(function()  { 
        $(this).expose().close(); 
    });

}




function initAccordions(scope) {
alert('initAccordions');
  if (!scope) {scope = '';} else {scope += ' ';}
  $(scope+"#accordion").tabs(scope+"#accordion div", { 
    tabs: 'img',  
    effect: 'horizontal' 
  });
}


function initKwicks(scope) {
alert('initKwicks');
  if (!scope) {scope = '';} else {scope += ' ';}
    $(scope+'.kwicks').kwicks({
      max : 950,
      spacing : 10
    });
}



*//*
var popupTemplate = $.template('<a id="various1" class="popupTemplate" onclick="return testit()"  href="#inline3" title="${title}"><span class="fullsize-icon-s4">&nbsp;</span></a>\
<div id="inline3" style="display:none">\
	<img  src="${image}">\
</div>');


var imageTemplate = $.template('<div class="${classname}">\
<div class="closeButton"></div>\
<div class="fullsize-icon2"></div>\
<div class="tagclouds_text">\
<h4>${t1}</h4><h3> &mdash; ${t2}</h3><div class="portfolio-tag taghide">&laquo;click to view&raquo;</div><br>\
<div class="tagclouds_text_sub3">${t3}</div><br><div class="tagclouds_text_sub">\
<h4>${st1}</h4><br>${sd1}\
<p>\
<div class="portfolio-tag">${sc1}</div>\
</div>\
<div class="tagclouds_text_sub">\
<h4>${st2}</h4><br>${sd2}\
<p>\
<div class="portfolio-tag">${sc2}</div>\
</div>\
<div class="tagclouds_text_sub2">\
<h4>${st3}</h4><br>${sd3}\
<p>\
<div class="portfolio-tag">${sc3}</div>\
</div>\
</div></div>');
*/

var bpcl_intro_text = ' <span class="preset_trigger"  id="edu">EDU</span>\
<span class="introhider"> / </span>\
<span class="preset_trigger"  id="work">WORK</span>\
<span class="introhider"> / </span>\
 <span class="preset_trigger"  id="interactive">UI/UX</span>\
<span class="introhider"> / </span>\
 <span class="preset_trigger" id="web">WEB</span>\
<span class="introhider">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\
 <span class="preset_trigger"  id="viz">VISUALIZATIONS</span>\
<span class="introhider"> / </span>\
 <span class="preset_trigger" id="media">MEDIA PLAYERS</span>\
<span class="introhider">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\
 <span class="preset_trigger"  id="developer">DEVELOPER</span>\
<span class="introhider"> / </span>\
 <span class="preset_trigger"  id="design">DESIGNER</span>\
<span class="introhider"> / </span>\
 <span class="preset_trigger" id="music">MUSICIAN</span>\
<span class="introhider"> / </span>\
 <span class="preset_trigger"  id="artist">ARTIST</span>\
<span class="introhider">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\
 <span class="preset_trigger" id="logos">LOGOS</span>\
<span class="introhider"> / </span>\
 <span class="preset_trigger" id="photography">PHOTOS</span>\
<span class="introhider">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\
 <span class="preset_trigger" id="all">ALL</span>\
<span class="introhider"> / </span>\
 <span class="preset_trigger" id="none">NONE</span>\
<span class="introhider">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\
<span id="statsbox"></span>';

var flowpanes_item_template = $.template('<div class="itemsframe2"><img src="${image}" class="${classes}"><br clear="all"/></div>');

var flowtabs_item_template  = $.template('<li><a id="${id}" class="${class}" href="#${id}"></a></li>');

var flowpanes_template      = $.template('<div id="${wrapperid}" class="flowpanes_wrapper">\
<div class="flowpanes_inner_wrapper">\
<div class="itemsframe flowpanes" id="${paneid}" style="background-color:${bg}">\
<div class="items">${flowpanes_items}</div>\
</div> \
<div class="itemsframegap"> </div> \
<div class="itemsframegapTop"> </div> \
<div id="scrollpaneframe2" > \
<div class="scroll-pane2"> \
<!--\
<img class="previewImage" src="${preview}" /> \
<div class="previewImageDiv"> </div> \
-->\
<div class="top"></div>${dbg}\
<div class="fullsize-icon-s"></div>\
<h3>${title}</h3><h4>${year}</h4><br/>${extraoutput} \
<h2>${output}</h2><!--<span class="subroles">${subroles}</span>--><h1>${organization}</h1><div class="roles"></div>\
</div> \
</div> \
<div id="scrollpaneframe" > \
<div class="scroll-pane autoscroller" > \
${content}<p>&nbsp;<br/>\
</div></div>\
  <div class="flowtabs_wrapper"><ul id="${tabid}" class="flowtabs">${flowtabs_items}</ul></div>\
  </div>');

var flowpanes_skeleton     = $.template('<div id="${wrapperid}_skeleton" class="skeleton">\
<div id="${wrapperid}" class="flowpanes_wrapper"><!--${dbg}<div class="linetwo"><h3>${title}</h3><h4>&nbsp;// ${year}</h4></div><div class="animspacer2"></div>${content}</h4>--></div></div>');

var allProjects, allProjectsVisible, tagCounts, allSparks, allItems, activeTitles, allVisibles, 
	unsortedValues, allItemsFlat, allItemsFlatIds, referenceCounts, totalVisible, panein, viewMode,
	allSet, tagcnt, ceckin, first, frozenMenu, frozenIntro;
var m = l1 = l2 = l3 = useSelf = lastPreset = 0;
var tagInfo = {'category':{'':[]}};
var bpclInfo = {'beats':[], 'pixels':[], 'code':[], 'life':[], '':[]};
var bpcls = ["beats", "pixels", "code", "life"];
var viewModes = ['default', 'consolidated', 'expanded'];
var currMaskTarget = 0, lastMaskTarget = 0, doExpose = 0, fullAnimation = 0;

var unResizableProjects = ["generic", "bpcl", "kp-v3-logo", "tantriccircus", "menlopark2", "flashmobber", "davinci","medvirginia","tribalpixel-logo", "mandalabrotlogo", "icaruslogo", "galactivision", "onethousandbuddhas", "duke", "cmu", "cmu-admin", "akamai", "kripalu", "icarus", "firstweb", "tis", "balance", "fdfl", "jayjay", "jazzband", "kp-v2", "kp-v1", 'kp-bizcard'];
var squareProjects = ["fdfl", "jayjay",  "firstweb", "unity", "funkmind"];
var unResizableProjectsBGs = {"jayjay":"#000000", "balance":"#eaeaea", "firstweb":"#000000", "icarus":"#000000", "kp-v1":"#777777", "medvirginia":"#eaeaf5", "kp-v2":"#e7e7e7", "kp-v1":"#777777", "kp-bizcard":"#000000"};
var slideProjects = ["sb", "sprout", "resume", "iconomy", "kp-v3",  "fliers", "tc-site", "mauijournal"];
var itemTags = ["languages", "tags",  "output", "roles", "sub-roles", "year", "publications", "tools", "category", "location", "duration", "organization", "sub-category", "metadata"];

var collections = {"intro": ["tag_category_intro", "tag_category_intro"], 
                    "work": ["tag_sub-category_work"],
                    "all": ["tag_category_beats", "tag_category_pixels", "tag_category_code", "tag_category_life"],
                    "personal sites": ["tag_output_BSEElectricalEngineering", "tag_output_BSComputerScience"],
                    "edu": ["tag_output_BSEElectricalEngineering", "tag_output_BSComputerScience", 
                        "tag_output_resume", "tag_output_MSINInformationNetworking",
                        "tag_roles_undergraduate", "tag_roles_gradstudent",
                        "tag_organization_DukeUniversity", "tag_organization_CarnegieMellonUniversity", 
                        "tag_organization_KripaluYogaCenter"],
                    "viz": ["tag_publications_SEEDMagazine-Sept06", "tag_tags_informationvisualization"],
                    "design": ["tag_roles_graphicdesigner", "tag_roles_UIUXdesigner"],
                    "photography": ["tag_roles_photographer"],
                    "media": ["tag_output_mediaplayer"],                   
                    "developer": ["tag_roles_UIUXdeveloper", "tag_roles_webdeveloper", "tag_tags_UIUXdevelopment",
                    	"tag_tags_frameworkarchitecture", "tag_roles_srapplicationsdeveloper", 
                    	"tag_roles_systemsengineer", "tag_roles_softwaredeveloper"],
                    "interactive": ["tag_roles_UIUXdeveloper", "tag_roles_UIUXdesigner"],
                    "web": ["tag_output_website", "tag_output_webapplication"],
                    "music": ["tag_output_music"], 
                    "artist": ["tag_roles_artist", "tag_roles_digitalartist"],
                    "logos": ["tag_tags_logodesigns"],
                    "recent": ["tag_year_2008", "tag_year_2009", "tag_year_2010"]};

var BASE_IMAGES="/media/global";
//	BASE_IMAGES="/generated_media/media/4/global";

window['initPortfolio'] = initPortfolio;
window['initHeaderAnim'] = initHeaderAnim;


jQuery.url=function(){var segments={};var parsed={};var options={url:window.location,strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var parseUri=function(){str=decodeURI(options.url);var m=options.parser[options.strictMode?"strict":"loose"].exec(str);var uri={};var i=14;while(i--){uri[options.key[i]]=m[i]||""}uri[options.q.name]={};uri[options.key[12]].replace(options.q.parser,function($0,$1,$2){if($1){uri[options.q.name][$1]=$2}});return uri};var key=function(key){if(!parsed.length){setUp()}if(key=="base"){if(parsed.port!==null&&parsed.port!==""){return parsed.protocol+"://"+parsed.host+":"+parsed.port+"/"}else{return parsed.protocol+"://"+parsed.host+"/"}}return(parsed[key]==="")?null:parsed[key]};var param=function(item){if(!parsed.length){setUp()}return(parsed.queryKey[item]===null)?null:parsed.queryKey[item]};var setUp=function(){parsed=parseUri();getSegments()};var getSegments=function(){var p=parsed.path;segments=[];segments=parsed.path.length==1?{}:(p.charAt(p.length-1)=="/"?p.substring(1,p.length-1):path=p.substring(1)).split("/")};return{setMode:function(mode){strictMode=mode=="strict"?true:false;return this},setUrl:function(newUri){options.url=newUri===undefined?window.location:newUri;setUp();return this},segment:function(pos){if(!parsed.length){setUp()}if(pos===undefined){return segments.length}return(segments[pos]===""||segments[pos]===undefined)?null:segments[pos]},attr:key,param:param}}();


var keyId;
function initKbd() {
	keyId = "keydown." + Math.random().toString().substring(10); 

	// keyboard works on one instance at the time. thus we need to unbind first
	$(document).unbind(keyId).bind(keyId, function(evt) {

		// do nothing with CTRL / ALT buttons
		if (evt.altKey || evt.ctrlKey) { return; }	
							
//		if (evt.keyCode == 37 || evt.keyCode == 39) {					
//			return evt.preventDefault();
//		}			
		if (evt.keyCode == 27) {
			if (currMaskTarget) 
				if (doExpose)
					$(ob(currMaskTarget)).expose({'maskId': 'overMask'}).close();
		}			
		return true;		
	});
}


function resetVars() {
	for (wid in allItemsFlatIds) {
		$(ob(allItemsFlatIds[wid])).mouseenter = null;
		$(ob(allItemsFlatIds[wid])).mouseleave = null;
	}
	$('.portfolio-tag').click = null;
	$('.portfolio-tag').mouseenter = null;
	$('.portfolio-tag').mouseleave = null;
	$('.flowpanes_wrapper').html('');
	allProjects = [];allProjectsVisible = [];tagCounts = [];allSparks = [];allItems = [];activeTitles = [];
	allVisibles = [];unsortedValues = [];allItemsFlat = [];allItemsFlatIds = [];referenceCounts = [];
	totalVisible = panein = viewMode = allSet = tagcnt = ceckin = first = 0;
	frozenMenu = frozenIntro = 1;
	tagInfo = {'category':{'all':[]}};
	bpclInfo = {'beats':[], 'pixels':[], 'code':[], 'life':[], 'all':[]};
}

function initHeaderAnim() {
	function onDone() { 
		runBPCLAnim($('.bpcl_header_lefts')); 
	}
	$('.bpcl_header_left').imageslicer({
			width:132,
	        startTime:100,
    	    stepTime:800,
        	numSlices:6,
	        sliceWidths:[27,23,2,18,22,24],
	        callback:onDone
	});
}

function initPortfolio() {
	initKbd();
	resetVars();
	
	$(".tthead:first").addClass('tthead_first');
	$(".tthead:last").addClass('tthead_last');
			
//	initHeaderAnim();

	$("#msg").ajaxError(function(event, request, settings){
	   $(this).append("<li>Error requesting page " + settings.url + "</li>");
	});   
	$.getJSON("/static/data/json/bpcl.js", function(json) {
	  $.each(json.projects, function(i,item) {
		 allProjects.push(item);
	   });
	   allProjects.sort(projectDescSort);
	   for (i in allProjects)
			allProjectsVisible.push(allProjects[i]);
		
		$(window)
			.bind('unload', function() {
				resetVars();
			}
		);		
			
		$(document).oneTime(600, function() {
			frozenMenu = 1;			
			$("#msg").css({display: 'inline'});			
			$("#msg_table").css({display: 'inline'});
			$("#msg_table").css({width: '100%', height: '100%'});
			$("#bpclTOC").append(bpcl_intro_text.replace(/\/\/\//g, '</h3><span class="introhider2"><h4> /&nbsp;</h4></span><h3>').replace(/\/\//g, '</h3><h4>&nbsp;//&nbsp;</h4><h3>'));


//			initScrollPanes($("#msg");
			$(".bpcl_header_left").removeClass('bpcl_header_left').addClass('bpcl_header_left2');			
			initializeProjectSkeletons();
			$(document).oneTime(1000, function() {
				frozenMenu = 0;
			});
			$(".fullsize-icon").addClass('fullsize-icon-gone');
			$(".fullsize-icon-s").addClass('fullsize-icon-gone');
			$("#self_wrapper .flowtabs").addClass('flowtabs_self');
			
			$("#self_wrapper .t1").css({'background-image':'url(/media/global/projects/self/tabs.png)'});
			$("#self_wrapper .t2").css({'background-image':'url(/media/global/projects/self/tabs.png)'});
			$("#self_wrapper .t3").css({'background-image':'url(/media/global/projects/self/tabs.png)'});
			$("#self_wrapper .t4").css({'background-image':'url(/media/global/projects/self/tabs.png)'});
			$("#self_wrapper .t5").css({'background-image':'url(/media/global/projects/self/tabs.png)'});
			$("#self_wrapper .t6").css({'background-image':'url(/media/global/projects/self/tabs.png)'});
			$("#self_wrapper").hide();
			updateStats();
		});
	});
}

function initPortfolioEvents() {
	$("#msg").hoverIntent( {    
		sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)    
		interval: 150,// number = milliseconds for onMouseOver polling interval    
		over: onMsgTableOver,
		timeout: 20, // number = milliseconds delay before onMouseOut    
		out: onMsgTableOut 
	});
}


function resizeWindow( e ) {
	var newWindowWidth = $(window).width();
}


function ob(v) {
    return "#"+v;
}

function stepPrev(wid) {
  if (!wid) wid = ceckin;
  var cont = 0;
  for (i=allItemsFlat.length;i>0;i++) {
    var item = allItemsFlat[i-1];
    if ($(ob(item)).attr('id') == wid) {
        cont = 1;
        continue;
    }
    if ($(ob(item)).is(":hidden")) continue;    
    if (cont && $(ob(item)+" .flowpanes_wrapper .flowpanes").scrollable()) {
        return item;
    }
  }
}
function stepNext(wid) {
  if (!wid) wid = ceckin;
  var cont = 0;
  var w = 0;
  for (i=0;i<allItemsFlat.length;i++) {
    var item = allItemsFlat[i];
    if ($(ob(item)).attr('id') == wid) {
        cont = 1;
        continue;
    }
    if ($(ob(item)).is(":hidden")) continue;    
    if (cont && $(ob(item)+" .flowpanes_wrapper .flowpanes").scrollable()) {    
        return [item, w];
    }
    w += $(ob(item)).width()+15;
  }
  return [];
}

function scrollUpdate(e) {

	var n = Math.round(.25*$(window).width());
	if (e.pageX < n) {
		var w = (100-Math.round(100*e.pageX/n));
		$(".portfolio_display").css({'margin-left':'-'+w+'px'});	
		if (baseCanvas._x > 0) {
			baseCanvas._x = 0;
		}	
	}
	if (e.pageX > $(window).width()-n) {
		var m = $(window).width()-e.pageX;
		var w = $(".portfolio_display").css('margin-left') - (100-Math.round(100*m/n));	
		$(".portfolio_display").css({'margin-left':'-'+w+'px'});	
	}
/*
	if (e.pageX < 200) {
	  $(".portfolio_display").stop().animate({'margin-left':'-'+w+'px'});	
	} else if (e.page > $(window).width()-200) {
	  $(".portfolio_display").stop().animate({'margin-left':'-'+w+'px'});	
	}	
*/
}

function db(d) {
	$(".bpcl_header_right").append("<span>"+d+"</span>");
}


function onMsgTableOver() {
  menuActive = 1;
  if (frozenMenu) return;
  $('.tthead2').slideDown();
  $(this).animate({height:'490px'}, 500, 'easeOutBack');
  $("#msg").css({overflow:'auto'});
  if ($(window).height() < 740)
	$("#msg").animate({height:'250px'}, 300);
  else
	$("#msg").animate({height:'499px'}, 300);
	
  $('.tagCountNormal:not(.beats2):not(.pixels2):not(.code2):not(.life2)').css({'color':'#aae'});
  
  $.each($('.portfolio-tag'), function() {
  	for (t in bpclInfo)
  		if ($(this).attr('id') == 'tag_category_'+t)
  			return;
	$(this).animate({height:15 }, 150);            
  });
}

function closeTitles(hideVisited) {
  for (l in itemTags) {
  	if (itemTags[l] != 'category' && !activeTitles[itemTags[l]]) {  	
  		if (!menuActive) {
		  $('#msg_'+itemTags[l]+' .tthead2').slideUp();
		}
	} else {
	  $('#msg_'+itemTags[l]+' .tthead2').slideDown();	
	}
  }
  
  if (hideVisited) {
	  $('.visited-tags:not(#tag_category_beats):not(#tag_category_pixels):not(#tag_category_code):not(#tag_category_life)').animate({height:1 }, 150, function() {
		$(this).height(0);
	  });
  }
  
//	$('.portfolio-tag-single').hide();
	function setMargin(targets) {
		for (t in targets) {
			$(ob(targets[t]+' .portfolio-tag-med:first')).css({'margin-top':'10px'});	  	
			$(ob(targets[t]+' .portfolio-tag-single:first')).css({'margin-top':'10px'});
		}
	}
	setMargin(['msg_roles', 'msg_output', 'msg_tags1', 'msg_tags2', 'msg_languages']);
}

function onMsgTableOut() {
  menuActive = 0;
//  if (!frozenMenu) closeTitles(1);
  closeTitles(1);
  if ($(window).height() < 740)
	  $("#msg").css({overflow:'auto'});
  else
	  $("#msg").css({overflow:'hidden'});
  $("#msg").animate({height:'148px'}, 500, 'easeOutBack');
  $(this).animate({height:'148px'}, 500, 'easeOutBack');
  $('.tagCountNormal:not(.beats2):not(.pixels2):not(.code2):not(.life2)').css({'color':'#ddd'});
  $.each($('.portfolio-tag'), function() {
    var h = this.id;
    if (h != 'tag_category_beats' && h != 'tag_category_pixels' && 
        h != 'tag_category_code' && h != 'tag_category_life' &&
        h != 'tag_category_all' && h != 'tag_sub-category_clear') {
	    if ($(this).hasClass('visited-tags-bold')) {    
	    } else {
    	    $(this).animate({height:1 }, 150, function() {
				$(this).height(0);
	        });
    	}
    }
  });
}
function clearVisibles(slideup) {
	if (lastPreset) 
		$(lastPreset).css({'color':'#ccf', 'background':'url(/media/global/images/stripebg_kp_tabs2_visited.png) 0 -12px'});
	for (v in allVisibles)
		$(v).click();

	allVisibles = [];
	activeTitles = [];
	totalVisible = 0;
	updateStats();
	
	$('.portfolio-tag:is(.visited-tags-bold)').each(function() {
	    var h = $(this).attr('id');
    	if (h != 'tag_category_beats' && h != 'tag_category_pixels' && 
	        h != 'tag_category_code' && h != 'tag_category_life' &&
    	    h != 'tag_category_all' && h != 'tag_sub-category_clear') {
			$(this).removeClass("visited-tags-bold");		
			if (slideup)
				$(this).animate({height:1 }, 150, function() {
					$(this).height(0);
				});		
		}
	});
	if (slideup)
	    $('.tthead2:not(.msg_category)').slideUp();
}
function initCollection(name) {
	clearVisibles(1);
	if (name == 'none') return;
	for (c in collections[name]) {
		var tag = collections[name][c].split("_")[1];
		$('.msg_'+tag).slideDown();
		$(ob(collections[name][c])).click();
	}     
}
function indexOfVisible(k) {
	cnt = 0;
	for (a in allProjectsVisible) {
		if (allProjectsVisible[a].name == k) return cnt;
		if (allProjectsVisible[a].isVisible) cnt++;
	}
}
function setVisible(k, vis) {
	for (a in allProjectsVisible) 
		if (allProjectsVisible[a].name == k) 
			allProjectsVisible[a].isVisible = vis;
}
function scrollToTarget(name) {
	var x = $("#timeline_wrapper").width() + (indexOfVisible(name))*254 - $(window).width()/2 + 128;
	resetScroll(x);
}

function resetScroll(x) {
	if (!x) x = 0;
	window.scroll(x,0);
}

function initializeProjectSkeletons() {
    createTagCounts();
    $.each(allProjects, function(i,item) {
       item['initialized'] = 0;
       var wid = initPortfolioProject(item, 1);
    });
//    $('#header_wrapper').mouseleave(function aa() {$('#bpcl_header').height(50);});
//    $('#header_wrapper').mouseenter(function bb() {$('.bpcl_header_left').width(425);});
//    $('#header_wrapper').mouseleave(function cc() {$('.bpcl_header_left').width(200);});

//    initializeProjectFromTag('metadata', 'timeline');
//    initializeProjectFromTag('metadata', 'self');
	$("#timeline_wrapper").animate({'width':'228px', 'height':'450px'});
	resetDisplayWidth();
	if (useSelf)
	    $("#self_wrapper").mouseenter();

    $("#timeline_wrapper").click(function(){
    	if ($("#timeline_wrapper").width() == 1090) {
		    $("#timeline_wrapper").animate({'width':'228px', 'height':'450px'});
 		} else {
	  		if (frozenIntro) {
  				frozenIntro = 0;
  				if (useSelf)
					$('#self_wrapper').mouseleave();
			}    
			resetDisplayWidth(1090);
		    $("#timeline_wrapper").animate({'width':'1090px', 'height':'450px'});
		}
    });
	$(".flowpanes_wrapper").mouseleave();    
    $(".preset_trigger").click(function(e) {
  		frozenIntro = 0;
		if (useSelf)
			$("#self_wrapper").mouseleave();

  		var event = e || window.event;

  		if (event.stopPropagation) {
    		event.stopPropagation();
	    } else {
		    event.cancelBubble = true;
	    } 
		initCollection($(this).attr('id'));
		resetDisplayWidth();
		resetScroll();
		if (lastPreset)
			$(lastPreset).css({'color':'#ccf', 'border':'0px', 'background':'url(/media/global/images/stripebg_kp_tabs2_visited.png) 0 -12px'});
	    if ($(this).attr('id') != 'none') {		
		    $(this).css({'background':'url(/media/global/images/stripebg_kp_tabs2.png) 0 -12px'});
		    $(this).css({'border':'2px solid #f99'});
		    lastPreset = this;
		}
    });

	appendTagsToMenu();
	onMsgTableOut();
	initPortfolioEvents();
	$("#tag_sub-category_clear").click(onClickTag);

    $(".tagCountNormal").each(function() {
        var off = 0;
        var h = $(this).html();
        switch (h.charAt(h.length-1)) {
            case '1':
                off = 0;
                break;
            case '4':
                off = 2;
                break;
            default:
                off = 1;
                break;
        }
        $(this).parent().css({'margin-right':'-'+off+'px'});
    });
	resetScroll();    
	$("#msg_table").css({display:'inline'});
	
	var an = jQuery.url.attr("anchor") || "work";
	$("#"+an).each(function() {
		$(this).click();
//			$(this).expose({'api': 'true', 'maskId': 'overMask', color:'#fff', zIndex:999}).load(); 				
	});
}
   
function initializeProject(projectname) {
  $.each(allProjects, function(i,item) {
     if ((item.name == projectname) || !projectname)
         initPortfolioProject(item, 0);
   });
   
}
   
function initializeProjectFromTag(tagname, tagitemKey) {
  for (w in allItems[tagname][tagitemKey]) {
    var tar = allItems[tagname][tagitemKey][w];
    initializeProject(tar.split('_')[0]);
  }
}


function createIfNeeded(a, t, v) {
    if (!a[t]) a[t] = (v == undefined) ? [] : v;	
}


function createTagCounts() {
//   for (l in itemTags) {
//      var tagname = itemTags[l];
//      $('#msg_'+tagname).mouseenter(function() {
//      });
//      $('#msg_'+tagname).mouseleave(function() {
//      });
//    }
  $.each(allProjects, function(i,item) {
    var projectname = item.name;
    if (item.name == "generic") return;
    if (item.name == "self") return;
    if (item.name == "timeline") return;
    for (l in itemTags) {
      var tagname = itemTags[l];
      createIfNeeded(allItems, tagname);
      createIfNeeded(tagInfo, tagname);
      if (item[tagname]) {
        var ls = item[tagname].split(',');
        for (i in ls) {
            var tagitem = jQuery.trim(ls[i]);
            if (tagitem == 'beats')  bpclInfo['beats'][projectname] = 1;
            if (tagitem == 'pixels') bpclInfo['pixels'][projectname] = 1;
            if (tagitem == 'code')   bpclInfo['code'][projectname] = 1;
            if (tagitem == 'life')   bpclInfo['life'][projectname] = 1;
            if (tagname == 'tags' || tagname == 'roles') {
              tagitem = tagitem.replace(' and ', ' + ');
            }            
            tagitem = tagitem.replace('Information', 'Info.');
            tagitem = tagitem.replace('Engineering', 'Eng.');
            if (tagname == "tags" || tagname == "languages" || tagname == "output" || 
                tagname == "category" || tagname == "sub-category" || tagname == "roles") {
                if (!tagCounts[tagitem]) {
                    tagCounts[tagitem] = 1;
                } else {
                    tagCounts[tagitem]++;
                }
            }
            var cpti = cleanpunct(tagitem);
            createIfNeeded(tagInfo[tagname], cpti);
            createIfNeeded(tagInfo[tagname][cpti], item.year, 0);
            tagInfo[tagname][cpti][item.year]++;            
        }
        createIfNeeded(tagInfo['category']);
        createIfNeeded(tagInfo['category']['all'], item.year, 0);
        tagInfo['category']['all'][item.year]++;            
      }
  }});
}

function createSparks(target_tagname, color) {
    for (id in allSparks) {
      var tagname = allSparks[id].split('_')[1];
      if (target_tagname && target_tagname != tagname) continue;
      var tagitemKey = allSparks[id].split('_')[2];
      var sparkVals = [];
      if (!color) color = "#33f";
      var yrs = ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'];

        for (y in yrs) {
            if (tagInfo[tagname] && tagInfo[tagname][tagitemKey] && tagInfo[tagname][tagitemKey][yrs[y]]) {
                var v = tagInfo[tagname][tagitemKey][yrs[y]];
                sparkVals.push((v) ? v : 0);
            } else {
                sparkVals.push(0);
            }
		}
        var fill = '#ccf';
        if (tagitemKey == 'beats') fill = '#f7b892';
        if (tagitemKey == 'pixels') fill = '#f4a3bf';
        if (tagitemKey == 'code') fill = '#a2d5f2';
        if (tagitemKey == 'life') fill = '#b8f39e';
        $(ob(allSparks[id])).sparkline(sparkVals, {type: 'line', lineColor: fill, fillColor:fill, spotColor:'', minSpotColor:'', maxSpotColor:'', lineWidth:2, width:15, height:10} );        
    }
}

function setBorder(tar, on, temp) {
  if (on) {
		$(ob(tar)).css("border-top", "1px solid #ddd");
		$(ob(tar)).css("padding-top", "6px");
		$(ob(tar)).css("border-bottom", "6px solid #f99");
		$(ob(tar)).css("padding-bottom", "2px");
	} else {
		$(ob(tar)).css("border-top", "1px solid #ddd");
		$(ob(tar)).css("padding-top", "6px");
		$(ob(tar)).css("border-bottom", "1px solid #ddd");
		$(ob(tar)).css("padding-bottom", "7px");  		
	}
/*
  if (on) {
  	if (temp) {
		$(ob(tar)).css("border-top", "1px solid #ddd");
		$(ob(tar)).css("padding-top", "6px");
		$(ob(tar)).css("border-bottom", "6px solid #99f");
		$(ob(tar)).css("padding-bottom", "2px");
		$(ob(tar)).addClass('itemIndicated');
	  } else {
		$(ob(tar)).css("border-top", "1px solid #ddd");
		$(ob(tar)).css("padding-top", "6px");
		$(ob(tar)).css("border-bottom", "6px solid #f99");
		$(ob(tar)).css("padding-bottom", "2px");
		$(ob(tar)).addClass('itemSelected');
	  }
	} else {
		$(ob(tar)).css("border-top", "1px solid #ddd");
		$(ob(tar)).css("padding-top", "6px");
		$(ob(tar)).css("border-bottom", "1px solid #ddd");
		$(ob(tar)).css("padding-bottom", "7px");  		
		$('.itemSelected').each(function() {
			$(this).css("border-top", "1px solid #ddd");
			$(this).css("padding-top", "6px");
			$(this).css("border-bottom", "6px solid #f99");
			$(this).css("padding-bottom", "2px");  		
		});	
    }
*/
}


function onMouseEnterTag() {
  var currentId = $(this).attr('id');
  var tagname = currentId.split('_')[1];
  if (!allItems[tagname]) return;
  var tagitemKey = currentId.split('_')[2];
  if (tagitemKey == 'all' || tagitemKey == 'clear') return;
  var tagid = '#tag_'+tagname+"_"+tagitemKey;
  for (w in allItems[tagname][tagitemKey]) {
	var tar = allItems[tagname][tagitemKey][w];
	setBorder(tar, 1, 1);
  }
}

function onMouseLeaveTag() {
  var currentId = $(this).attr('id');
  var tagname = currentId.split('_')[1];
  if (!allItems[tagname]) return;
  var tagitemKey = currentId.split('_')[2];
  if (tagitemKey == 'all' || tagitemKey == 'clear') return;
  var tagid = '#tag_'+tagname+"_"+tagitemKey;
  for (w in allItems[tagname][tagitemKey]) {
	var tar = allItems[tagname][tagitemKey][w];
	setBorder(tar, 0, 1);
  }
}

function onClickTag() {
  if (frozenIntro) {
  	frozenIntro = 0;
	if (useSelf)
		$("#self_wrapper").mouseleave();
  }
  if (doExpose)
  	$(ob(currMaskTarget)).expose({'maskId': 'overMask'}).close();
  var currentId = $(this).attr('id');
//  alert(currentId);
  var tagname = currentId.split('_')[1];
  var tagitemKey = currentId.split('_')[2];
  var tagid = '#tag_'+tagname+"_"+tagitemKey;
  var wasBold = $(tagid).hasClass("visited-tags-bold");
  var targets = [];
  if (tagitemKey == 'all') {
	for (w in allItemsFlat) {
		targets.push(allItemsFlat[w]);
	}
  } else if (tagitemKey == 'clear') {
	  clearVisibles();
  } else {
	for (w in allItems[tagname][tagitemKey]) {
		targets.push(allItems[tagname][tagitemKey][w]);
	}
  }

  if (tagitemKey != 'clear') {
	// bold - remove bold and decrement
	if (wasBold) {
		if (tagitemKey == 'beats' || 
			tagitemKey == 'pixels' || 
			tagitemKey == 'code' || 
			tagitemKey == 'life')
		$(tagid).addClass("visited-tags");
		$(tagid).removeClass("visited-tags-bold");
	
	// non-bold - make bold and increment
	} else {	
		$(tagid).addClass("visited-tags-bold");
		$(tagid).removeClass("visited-tags");
		if (tagitemKey == 'beats' || 
			tagitemKey == 'pixels' || 
			tagitemKey == 'code' || 
			tagitemKey == 'life')
			$(tagid).animate({height:18 }, 150);            		
		else 
			$(tagid).animate({height:15 }, 150);            		
	}
  }
  targets = targets.reverse();
  for (w in targets) {
	var tar = targets[w];
	var target = $(ob(tar));
	var remove = 0;
	var name = tar.split("_")[0];
	if (name == "self" && !useSelf) continue;
	initializeProject(name);
	createIfNeeded(activeTitles, tagname, 0);

	// bold - remove bold and decrement
	if (wasBold) {
		referenceCounts[tar]--;
		activeTitles[tagname]--;
		remove = 1;

	// non-bold - make bold and increment
	} else {
		if (!referenceCounts[tar]) {
			referenceCounts[tar] = 1;
		} else {
			referenceCounts[tar]++;
		}
		activeTitles[tagname]++;
	}
	if (remove && tar != 'self_wrapper' && tar != 'timeline_wrapper') {
		allVisibles[tagid] = 0;
		setVisible(name, 0);
		if (referenceCounts[tar] == 0) {
			resetScroll();
			totalVisible--;			
			target.slideUp(300, function() {
			});
		}
	} else {
		allVisibles[tagid] = 1;
		setVisible(name, 1);
		target.slideDown(300);
		if (referenceCounts[tar] == 1)
			totalVisible++;
		scrollToTarget(name);
	}
	updateStats();
    setBorder(tar, 1);
  }
  resetDisplayWidth();
  closeTitles();  
}
function updateStats() {
	if (totalVisible < 0) totalVisible = 0;
    var t = '[ <b>'+totalVisible+'</b> / <b>'+(allProjects.length-1)+'</b> ITEMS VISIBLE ]';
	$("#statsbox").html(t);
}
function resetDisplayWidth(tw) {
  if (!tw) tw = $("#timeline_wrapper").width();
  var l = totalVisible*254+1200+tw;
  $(".portfolio_display").css({width:l});
}
function projectDescSort(thisObject,thatObject) {	
	var a1 = thisObject.year;
	var a2 = thatObject.year;
	if (!a1 || !a2) return 0;
	a1 = a1.split(',')[0];
	a2 = a2.split(',')[0];
	if (a1 > a2) 
		return -1;
	else if (a1 < a2)
		return 1;
	return 0;
}
function objDescSort(thisObject,thatObject) {	
	if (thisObject[0] > thatObject[0])
		return -1;
	else if (thisObject[0] < thatObject[0])
		return 1;
	return 0;
}
function objAscSort(thisObject,thatObject) {	
	if (thisObject[0] > thatObject[0])
		return 1;
	else if (thisObject[0] < thatObject[0])
		return -1;
	return 0;
}

function appendTagsToMenu() {
    for (l in itemTags) {
		var tagname = itemTags[l]; 
		if (tagname == 'roles2' || tagname == 'sub-roles' || 
			tagname == 'organization' || tagname == 'location') {
			unsortedValues[tagname].sort(objAscSort);
		} else {
			unsortedValues[tagname].sort(objDescSort);		
		}
		for (v in unsortedValues[tagname]) {
			var val = unsortedValues[tagname][v][3];
			if (tagname == 'location') {
				val = val.replace(/Bay Area/g, 'Bay&nbsp;Area');
				val = val.replace(/Balt. Area/g, 'Balt.&nbsp;Area');
				val = val.replace(/Los Angeles/g, 'Los&nbsp;Angeles');
				val = val.replace(/Hawaiian Islands/g, 'Hawaiian&nbsp;Islands');				
				val = val.replace(/\s/g, ',&nbsp;');
			}
			var c = (unsortedValues[tagname][v][5] >= 4) ? 'portfolio-tag portfolio-tag-large' :
					(unsortedValues[tagname][v][5] >= 1) ? 'portfolio-tag portfolio-tag-med' :
					(tagname == 'languages' || tagname == 'tags' || tagname == 'output' || tagname == 'roles') ?
					'portfolio-tag portfolio-tag-single' : 'portfolio-tag';					
			if (tagname == 'category' || tagname == 'sub-category')
				c = 'portfolio-tag';
			
            var target = unsortedValues[tagname][v][2];
            if (tagname == "tags") {
                if (++tagcnt % 2) 
                    target = "#msg_tags1";
                else
                    target = "#msg_tags2";
            }				
			$(target).append('<div class="'+c+'" id="'+cleanpunct(unsortedValues[tagname][v][1])+'"><span class="sparks" id="'+unsortedValues[tagname][v][1]+'_spark"></span><div class="taginner">'+val+'</div></div>');      
      	}
	}
	$('.portfolio-tag').mouseenter(onMouseEnterTag);
	$('.portfolio-tag').mouseleave(onMouseLeaveTag);	
	$('.portfolio-tag').click(onClickTag);
    createSparks();
}

function cleanpunct(s) {
	s = s.replace(/[\s|\/|:|\.]+/g, '');
	return s;
}


function initPortfolioProject(item, skeleton) {
  var numpages = item.numpages;
  if (!numpages) 
    numpages = 1;
  var projectname = item.name;
  if (item.name == "generic") 
    return;
  var prefix = BASE_IMAGES;
  var items = itemTags;
  var wid = projectname+'_wrapper';
  var full = 0;

  if (!item['tag_initialized']) {
  for (l in items) {
      var tagname = items[l];
      if (item[tagname]) {
        var ls = item[tagname].split(',');

        for (i in ls) {          
          var tagitem = jQuery.trim(ls[i]);
          var tagitem2 = tagitem;
          var tagitemKey = cleanpunct(tagitem);                    
          if (tagname == 'tags' || tagname == 'roles') {
            tagitem = tagitem.replace(' and ', ' + ');
          }
          tagitem = tagitem.replace('Information', 'Info.');
          tagitem = tagitem.replace('Engineering', 'Eng.');
          if (tagname == 'year') {
            tagitem = tagitem.replace('19', '<span class="yearPrefix">19</span>');
            tagitem = tagitem.replace('20', '<span class="yearPrefix">20</span>');
          }
          if (!allItems[tagname][tagitemKey]) {
            allItems[tagname][tagitemKey] = [];          
            var tag = 'tag_'+tagname+'_'+tagitemKey;
            var targetname = "tag_"+tagname+'_'+tagitemKey;
            var tagtext = tagitem;
            var cnt = tagCounts[tagitem];
            if (cnt == '1') cnt = '';
            if (tagname == "tags" || tagname == "languages" || tagname == "output" || 
                tagname == "category" || tagname == "sub-category" || tagname == "roles") {
                var extra = '';
                if (tagitemKey == 'Cplusplus') {
                    tagitem = tagitem.replace(/plus/g, '&#43;');
                }            
                if (tagitemKey == 'beats')  extra = 'beats2';
                if (tagitemKey == 'pixels') extra = 'pixels2';
                if (tagitemKey == 'code')   extra = 'code2';
                if (tagitemKey == 'life')   extra = 'life2';
                tagtext = "<div class='tagCounts'><span class='tagCountLite'></span><span  class='tagCountNormal "+extra+"'>"+cnt+"</span><span class='tagCountLite'></span></div>"+tagitem;
            }
            var extra2 = '';
            for (v in bpcls) {
                var n = (bpclInfo[bpcls[v]][projectname] == 1) ? '<div class="'+bpcls[v]+' bullpt">&bull;</div>' : '<div class="wite bullpt">&bull;</div>';
                extra2 += n;
            }
            if (extra2)
                extra2 = "<div class='bpclCounts'>"+extra2+"</div>";
            if (tagname != 'year') 
                extra2 = '';
            if (tagitemKey == 'all')
                tagtext = tagitem;
            if (tagname == "tags" || tagname == "languages" || tagname == "output" || tagname == 'year' || tagname == 'duration' || 
                tagname == "category" || tagname == "sub-category" || tagname == "roles" || tagname == 'tools' || tagname == 'sub-roles') {
	            allSparks.push(targetname+'_spark');
            }
            var target2 = "#msg_"+tagname;
            if (tagname == "tags") {
                if (tagcnt++ % 2) 
                    target2 = "#msg_tags1";
                else
                    target2 = "#msg_tags2";
            }
            createIfNeeded(unsortedValues, tagname);
			switch(tagname) {
				case 'tags':
				case 'roles':
				case 'output':
				case 'languages':
					unsortedValues[tagname].push([cnt, targetname, target2, tagtext+extra2, tagname, cnt]);
					break;
				case 'category':
				case 'sub-category':
					unsortedValues[tagname].push(['', targetname, target2, tagtext+extra2, tagname, cnt]);
					break;
				case 'year':
					if (tagitemKey != '2012' && tagitemKey != '2013')
					unsortedValues[tagname].push([tagitem2, targetname, target2, tagtext+extra2, tagname, cnt]);
					break;
				default:
					unsortedValues[tagname].push([tagitem, targetname, target2, tagtext+extra2, tagname, cnt]);
					break;			
			}
          }
          if (tagitemKey != 'all') {
            allItems[tagname][tagitemKey].push(wid);
          }
          if (!allItemsFlatIds[wid]) {
            allItemsFlat.push(wid);
            allItemsFlatIds[wid] = 1;
          }
          if (!ceckin) ceckin = wid;
        }
      }
  }
  tagcnt = 0;
  item['tag_initialized'] = 1;
  }

  if (skeleton) {
  $(".portfolio_display").append(flowpanes_skeleton, {
	title: item.title,
	year: item.year,
	dbg: projectname,
	wrapperid: wid,
	content: item.description
  });     
    $(ob(wid+"_skeleton")).hide();
     
  } else if (!item['data_initialized']) {
    var tabs = $("<div/>");  
    for (var i=1; i<numpages+1; i++)
		tabs.append(flowtabs_item_template, {id:projectname+'_tab'+i, 'class':'t'+i});
    
    var cont = ''; 
    cont += "<table class='infotable'><tr><td class='tdtop'>";    
    /*
    if (item.honors) {
        cont += '<h5>Honors</h5><div class="portfolio-honors">';
        cont += item.honors;
        cont += '</div>';
    }
    */
    for (i in item.description[0]) {    
        var d = item.description[0][i];
        if (i != 'Quote')
			d = d.replace(/<p>/g, "<div class='spacer1'>&nbsp;</div>");
        if (i == 'Advisor') {
            cont += "<br>Thesis Advisor: "+d;

        } else if (i == 'Example' || i == 'Example Sprout') {
//            cont += "<h5>"+i+"</h5><br>"+d;
//            cont += "<h5>"+i+"</h5><br>";
        
        } else if (i == 'Full') {
// 
//        	full = 1;

        } else if (i == 'Quote' || i == 'Quote1' || i == 'Quote2') {
            var findRegex = new RegExp(/\[(.+)\]/g);
            var results = findRegex.exec(d);
            d = d.replace(findRegex, "");            
            if (i == 'Quote' || i == 'Quote1') {            
                cont += '<br><div class="box">';
            } else {
                cont += '<br>';
            }
            cont += '<p class="quote">"'+d+'"';
            if (results) {
                results[0] = results[0].replace("[", "");
                results[0] = results[0].replace("]", "");            
                cont += '<p>&mdash;'+results[0];
            }
            if (i == 'Quote' || i == 'Quote2') {            
                cont += '</div>';              
            }

        } else {
            d = d.replace("[", "");
            d = d.replace("]", "");
            if (i != 'Credits' && i != 'Listen') {
                cont += "</td><td class='tdtop'>";    
            } else {
                d = d.replace(/,/g, "<br>");
                cont += "<br>";
            }
            cont += "<h5>"+i+"</h5>";
            if (i == 'Credits') {            
                d = d.replace(/&hearts;/g, '<span style="color:#f33">&hearts;</span>');
                cont += '<div class="portfolio-credits">'+d+'</div>';  
            } else {
                cont += '<div class="portfolio-content">'+d+'</div>';              
            }
        }
    }
    cont += '</td><td class="tdtop">';
    if (item.honors) {
        cont += '<h5>Honors</h5><div class="portfolio-honors">';
        cont += item.honors;
        cont += '</div>';
    }
    
    function parsetags(target, title, replacementCallback) {
        var ret = '';
        if (target) {
            ret += '<h5>'+title+'</h5><div class="portfolio-tags">';
            var l, l2;
            var d=0;
            var vars = target.split(',');
            for (i in vars) {
                if (d++) ret += ', ';
                l2 = jQuery.trim(vars[i]);
                l = l2.replace(' ', '&nbsp;');
                if (replacementCallback)
                    l = replacementCallback(l);
					l = '<span class="portfolio-tag" id="tags2_'+title+'_'+cleanpunct(l2)+'">'+l+'</span>';
                ret += l;
            }
            ret += "</div>";
        }  
        return ret;      
    }    
    cont += parsetags(item.languages, 'languages', function(l) {
        return (l == 'Cplusplus') ? l.replace(/plus/g, '&#43;') : l;
    });
    cont += parsetags(item.tools, 'tools');
    cont += parsetags(item.tags, 'tags');
	$('.portfolio-tag').mouseenter(onMouseEnterTag);
	$('.portfolio-tag').mouseleave(onMouseLeaveTag);	
	$('.portfolio-tag').click(onClickTag);
    
    if (item.links) {
        cont += "<h5>Links</h5>";
        for (i in item.links[0]) { 
            cont += '&raquo;&nbsp;<a target="linkWindow" href="http://'+item.links[0][i]+'">'+i+"</a><br>";
        }
    }
    cont += "</td></tr></table>";    

    var panes = $("<div/>");
    for (var i=1; i<numpages+1; i++) {
      var extra_class = ($.inArray(projectname, unResizableProjects) == -1) ? 
        ($.inArray(projectname, slideProjects) == -1) ? "flowimage_bigsquare" : "" : "flowimage_resizable";
      var bg = unResizableProjectsBGs[projectname];
      var roles = item.roles;
      if (projectname == "duke" || projectname == "cmu") 
          roles = item.roles;
      var org = '';
      var out = '';
      if (projectname != "tis" && projectname != "akamai" && projectname != "tantriccircus" && projectname != "cmu-admin")
          org = item.organization;
      if (projectname == "duke" || projectname == "cmu") 
          out = (item.output) ? item.output : "";
      else
          out = (item.roles) ? item.roles : "";
      if (!bg) bg = "#ffffff";
//      if ((i == 2) && (projectname == "self"))
//	      panes.append('<div class="itemsframe2"><a href="http://flashy.flowplayer.org/video/flowplayer-700.flv" \
//		      style="display:block;width:425px;height:300px;" id="selfplayer"></a></div>');
//	  if ((i == 1) && (projectname == "self"))
//	      panes.append(bpcl_template);
//      else
    	  panes.append(flowpanes_item_template, {image:prefix+'/projects/'+projectname+'/page'+i+'.jpg', classes:extra_class});
    }
    var title = item.title.replace('//', '</h3><h4>/</h4><h3>');
    var year = '';
	var extra = '';
    var date = (item.date) ? item.date : '';
    if (projectname == 'self') {
    	var txt = bpcl_intro_text.replace(/\/\/\//g, '</h3><span class="introhider2"><h4> /&nbsp;</h4></span><h3>').replace(/\/\//g, '</h3><h4>&nbsp;//&nbsp;</h4><h3>');
	    title = title.replace('BPCL', "<span class='beats'>B</span><span class='pixels'>P</span><span class='code'>C</span><span class='life'>L</span>"+txt);
	} else {
	    year = '&nbsp;//&nbsp;'+item.year;	    
	}
	if (date) date = '&nbsp;//&nbsp;'+item.date;	    
	
    var preview = (viewMode == 1) ? prefix+'/projects/'+projectname+'/page1.jpg' : '';
    var subs = '';
    switch (item['sub-roles']) {
        case 'part-time':
            subs += '(PT)';
            break;
        case 'full-time':
            subs += '(FT)';
            break;
        case 'full-time student':
            subs += '';
            break;
        case 'contract':
            subs += '(contract)';
            break;
        case 'intern':
            subs += '(intern)';
            break;
    }
//    preview = '';
//    cont = '';
	if (!first) first = wid;

    if (projectname != 'timeline')
    $(ob(wid+"_skeleton")).html(flowpanes_template, {
        title: title,
        year: (date) ? date : year,
        wrapperid: wid,
        dbg: '',
        bg: bg,
        roles: roles,
        subroles: subs,
        preview: preview,
        output: out,
        paneid: projectname+'_flowpanes',
        tabid: projectname+'_flowtabs',
        flowpanes_items: panes.html(),
        flowtabs_items: tabs.html(),
        organization: org,
        content: cont,
        extraoutput: extra
    });
    if (!preview) {
        $(ob(wid+"_skeleton .previewImage")).hide();
        $(ob(wid+"_skeleton .previewImageDiv")).hide();
    }
    var api = initFlowPanes(ob(projectname+"_flowpanes"), ob(projectname+"_flowtabs"));

    function selectItem() {
        api.focus();
        api.begin();
    }
    function paneout(e) {
    if ($(ob(wid)).hasClass('panein_activated')) {
    }
		$(ob(wid+" .subroles")).hide();
		$(ob(wid+" .flowpanes")).animate({height:'300px'}, 150);
		$(ob(wid+" .scroll-pane")).animate({height:'1px'}, 150);
		$(ob(wid+" #scrollpaneframe2")).css({'border-bottom':'1px solid #fff'});
		$(ob(wid+" .flowtabs_wrapper")).animate({'margin-top':70}, 150);
		$(ob(wid+" #scrollpaneframe")).animate({width:'500px', height:'1px'}, 150, '', function() {
			$(ob(wid+" #scrollpaneframe")).hide();
		});
    }
    function panein(e) {
	    if ($(ob(wid)).hasClass('panein_activated')) {
	    }
	    $(ob(wid)).addClass('panein_activated');
		$(ob(wid+" .subroles")).show();
		$(ob(wid+" .flowpanes")).animate({height:'150px'}, 150);
//            $(ob(wid+" .flowimage_resizable")).animate({width:'228px', 'margin-top':'0px', 'margin-left':'100px'}, 150 );
		$(ob(wid+" .scroll-pane")).width(457);
//		$(ob(wid+" #scrollpaneframe")).width(457);            
		$(ob(wid+" #scrollpaneframe")).show();
		$(ob(wid+" #scrollpaneframe2")).css({'border-bottom':'1px solid #a7e0fd'});
		$(ob(wid+" .scroll-pane")).animate({height:'150px'}, 150);
		$(ob(wid+" .jScrollPaneContainer")).each(function() {
			if ($(this).width() != 457) {
				$(this).width(457);
				initScrollPanes(ob(wid+".flowpanes_wrapper ")); 
			}
		});
		$(ob(wid+" .flowtabs_wrapper")).animate({'margin-top':225}, 150);
		$(ob(wid+" #scrollpaneframe")).animate({height:'150px', width:'457px'}, 150, '', function() {
			initScrollPanes(ob(wid+".flowpanes_wrapper ")); 
		});
    }    
    function flowin(e) {
	    if ($(ob(wid)).hasClass('panein_activated')) {
			$(ob(wid)).removeClass('panein_activated') ;
			paneout(e);
	    }
	}
	function setMainSection(wid, w, s, close) {
		if (close) {
			$(ob(wid+".flowpanes_wrapper")).animate({width:'228px', height:'433px'}, s, '', function() {
				$(ob(wid+".flowpanes_wrapper .itemsframe")).width(228);
            });
		} else {
            $(ob(wid+".flowpanes_wrapper")).animate({width:w+'px', height:'450px'}, s, '', function() {
				$(ob(wid+".flowpanes_wrapper .itemsframe")).width(450);			            
            });
			$(ob(wid+" .flowpanes_inner_wrapper")).width(w);
	   }
	}
	function setTopSection(wid, w, s, close) {
		if (close) {
            $(ob(wid+" .flowimage_resizable")).animate({width:'228px', 'margin-top':'75px', 'margin-left':'0px'}, s );
            $(ob(wid+" .flowimage_square")).animate({'margin-left':'-76px'}, s );
            $(ob(wid+" .flowimage_bigsquare")).animate({'margin-left':'-111px'}, s );	   
	   } else {
			$(ob(wid+".flowpanes_wrapper .itemsframe")).animate({'width':'450px'}, s, '', function() {
				if (wid == "self_wrapper") {
					$(ob(wid+" .scroll-pane2")).css({width:'100%'});
				} else if (wid == "timeline_wrapper") {
					$(ob(wid+" .scroll-pane2")).css({width:'100%'});
				} else {
					$(ob(wid+" .scroll-pane2")).width(w);				
				}
			});
            $(ob(wid+" .flowimage_resizable")).animate({width:'450px', 'margin-top':'0px', 'margin-left':'0px'}, s );
            $(ob(wid+" .flowimage_square")).animate({'margin-left':'0px'}, s );
            $(ob(wid+" .flowimage_bigsquare")).animate({'margin-left':'0px'}, s );		
	   }
	}
	function setMidSection(wid, w, s, close) {
		$(ob(wid+" .scroll-pane")).width(w+7);
		$(ob(wid+" .scroll-pane2")).width(w);
		$(ob(wid+" #scrollpaneframe")).width(w);
		$(ob(wid+" #scrollpaneframe2")).width(w);                
		$(ob(wid+" .itemsframegapTop")).width(w);
		$(ob(wid+" .itemsframegap")).width(w);
		$(ob(wid+" #scrollpaneframe")).css({clear:'left'});
	}
	function setBottomSection(wid, w, s, close) {
		if (close) {
			if (wid == "self_wrapper")		
	            $(ob(wid+" .flowtabs")).animate({ height:'45px'}, s );
			else
	            $(ob(wid+" .flowtabs")).animate({ height:'45px', width:w}, s );	            
            $(ob(wid+" .flowtabs li a")).animate({width:'38px', height:'45px'}, s );            		
		} else {
            $(ob(wid+" .flowtabs_wrapper")).animate({ width:w}, s );
            $(ob(wid+" .flowtabs")).animate({ height:'62px', width:w}, s );
            $(ob(wid+" .flowtabs li a")).animate({width:'75px', height:'62px'}, s );		
		}
	}
	
    function mainin(e) {
		currMaskTarget = wid;
    	l3 = l2; l2 = l1; l1 = wid;
		if (l3 == wid && l2 != wid) {
			l2 = l3 = 0;
			var t = $(this);
			$(document).oneTime(300, function() {
				if (l2 || l3) return;
				l1 = l2 = l3 = 0;
				if (t.mainin)
					t.mainin();
			});
			return;
		}
  		if (projectname == 'timeline' && frozenIntro) {
  			frozenIntro = 0;
  			if (useSelf)
				$('#self_wrapper').mouseleave();
		}    
	    if ($(ob(wid)).hasClass('panein_activated')) {
    	}
    	allin();
		var w = 450;        
		var s = 500;
		if (projectname == "self" || projectname == "timeline") {
			w = 1090;
			$(ob(wid+" .introhider")).show();
			$(ob(wid+" .introhider2")).hide();
		}
		$(document).oneTime(4000, function() {
			if (currMaskTarget != wid) return;
			if (doExpose)
				$(ob(wid)).expose({'api': 'true', 'maskId': 'overMask', color:'#fff', zIndex:999}).load(); 			
			$('#overMask').css({'position':'fixed'});
		});
		$(ob(wid+" .fullsize-icon-s")).removeClass('fullsize-icon-s').addClass('fullsize-icon');
		setMainSection(wid,w,s);
		setTopSection(wid,450,s);
		setMidSection(wid,w,s);
		setBottomSection(wid,w,s);
    }
    function allout(e) {
		$(ob(wid)).animate({height:'450px'}, 150);    
		if (projectname == "self") 
            $(ob(wid+".flowpanes_wrapper .flowpanes")).scrollable().seekTo(1);    
        else if (projectname != 'timeline')
			$(ob(wid+".flowpanes_wrapper .flowpanes")).scrollable().seekTo(0);        
    }
    function allin(e) {
		$(ob(wid)).animate({height:'433px'}, 150);    
		if (projectname == "self") 
            $(ob(wid+".flowpanes_wrapper .flowpanes")).scrollable().seekTo(0);    
    }
    
    function mainout(e) {
  		if (wid == 'self_wrapper' && frozenIntro) {
  			return;
		}    
		allout(e);
	    if ($(ob(wid)).hasClass('panein_activated')) {
			$(ob(wid)).removeClass('panein_activated') ;
			paneout(e);
	    }
		if (doExpose)
			$(ob(currMaskTarget)).expose({'api': 'true', maskId: 'overMask', color:'#fff', zIndex:999}).close(); 
		if (projectname == "self") {
			$(ob(wid+" .introhider")).hide();
			$(ob(wid+" .introhider2")).show();
		}
		$(ob(wid+" .fullsize-icon")).removeClass('fullsize-icon').addClass('fullsize-icon-s');
		var w = 228;        
		var s = 150;
		setMainSection(wid,w,s,1);
		setTopSection(wid,w,s,1);
		setMidSection(wid,w,s,1);
		setBottomSection(wid,w,s,1);
    }  
    $(ob(wid+" .subroles")).hide();
//	$(ob(wid+' .autoscroller')).autoscroll(AUTOSCROLL_Y);
	$(ob(wid)).click(function() { ceckin = $(this).attr('id'); });

	if (wid	== 'self_wrapper')
	    $(ob(wid)).mouseenter(mainin);
	    	   
	if (wid	!= 'timeline_wrapper') {
//		$(ob(wid)).mouseenter(mainin);
		$(ob(wid)).mouseleave(mainout);	
		$(ob(wid)).hoverIntent( {    
			sensitivity: 3, // number = sensitivity threshold (must be 1 or higher)    
			interval: 200,// number = milliseconds for onMouseOver polling interval    
			over: mainin,
			timeout: 150, // number = milliseconds delay before onMouseOut    
//			out: mainout 
		});
	}
	if (!full) {
		$(ob(wid+" .fullsize-icon-s")).addClass('fullsize-icon-gone');
		$(ob(wid+" .fullsize-icon")).addClass('fullsize-icon-gone');
	} else {
		function fullclick(e) {

		}
		$(ob(wid+" .fullsize-icon-s")).click(fullclick);
		$(ob(wid+" .fullsize-icon")).click(fullclick);	
	}
	$(ob(projectname+"_flowpanes")).mouseenter(flowin);
	if (projectname == 'self') {
//	         alert( document.getElementById('selfplayer'));
//		flowplayer("selfplayer", "static/content/swf/flowplayer-3.1.5.swf"); 
	} else {
		$(ob(wid+".flowpanes_wrapper #scrollpaneframe2")).mouseenter(panein);
	}
	$(ob(wid)).mouseleave();
    $(ob(wid+"_skeleton")).show();    
    item['data_initialized'] = 1; 
  }
  return wid;
}

