!(function (e) {
  var t = {};
  function i(s) {
    if (t[s]) return t[s].exports;
    var n = (t[s] = { i: s, l: !1, exports: {} });
    return e[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, s) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var s = Object.create(null);
      if (
        (i.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          i.d(
            s,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return s;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 1));
})([
  function (e, t, i) {
    "use strict";
    t.a = function (e) {
      (
        document.attachEvent
          ? "complete" === document.readyState
          : "loading" !== document.readyState
      )
        ? e()
        : document.addEventListener("DOMContentLoaded", e);
    };
  },
  function (e, t, i) {
    /*!*
     * ВНИМАНИЕ! Этот файл генерируется автоматически.
     * Любые изменения этого файла будут потеряны при следующей компиляции.
     * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.
     */
    i(2), i(8), i(4), i(5), i(7), i(6), i(9), i(10);
  },
  function (e, t, i) {
    i(3)();
  },
  function (e, t, i) {
    var s, n;
    (n = this),
      void 0 ===
        (s = function () {
          return (n.svg4everybody = (function () {
            /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
            function e(e, t, i) {
              if (i) {
                var s = document.createDocumentFragment(),
                  n = !t.hasAttribute("viewBox") && i.getAttribute("viewBox");
                n && t.setAttribute("viewBox", n);
                for (var r = i.cloneNode(!0); r.childNodes.length; )
                  s.appendChild(r.firstChild);
                e.appendChild(s);
              }
            }
            function t(t) {
              (t.onreadystatechange = function () {
                if (4 === t.readyState) {
                  var i = t._cachedDocument;
                  i ||
                    (((i = t._cachedDocument =
                      document.implementation.createHTMLDocument(
                        ""
                      )).body.innerHTML = t.responseText),
                    (t._cachedTarget = {})),
                    t._embeds.splice(0).map(function (s) {
                      var n = t._cachedTarget[s.id];
                      n || (n = t._cachedTarget[s.id] = i.getElementById(s.id)),
                        e(s.parent, s.svg, n);
                    });
                }
              }),
                t.onreadystatechange();
            }
            function i(e) {
              for (
                var t = e;
                "svg" !== t.nodeName.toLowerCase() && (t = t.parentNode);

              );
              return t;
            }
            return function (s) {
              var n,
                r = Object(s),
                o = window.top !== window.self;
              n =
                "polyfill" in r
                  ? r.polyfill
                  : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(
                      navigator.userAgent
                    ) ||
                    (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) ||
                      [])[1] < 10547 ||
                    (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) ||
                      [])[1] < 537 ||
                    (/\bEdge\/.(\d+)\b/.test(navigator.userAgent) && o);
              var a = {},
                l = window.requestAnimationFrame || setTimeout,
                d = document.getElementsByTagName("use"),
                c = 0;
              n &&
                (function s() {
                  for (var o = 0; o < d.length; ) {
                    var u = d[o],
                      p = u.parentNode,
                      h = i(p),
                      f =
                        u.getAttribute("xlink:href") || u.getAttribute("href");
                    if (
                      (!f &&
                        r.attributeName &&
                        (f = u.getAttribute(r.attributeName)),
                      h && f)
                    ) {
                      if (n)
                        if (!r.validate || r.validate(f, h, u)) {
                          p.removeChild(u);
                          var m = f.split("#"),
                            v = m.shift(),
                            g = m.join("#");
                          if (v.length) {
                            var w = a[v];
                            w ||
                              ((w = a[v] = new XMLHttpRequest()).open("GET", v),
                              w.send(),
                              (w._embeds = [])),
                              w._embeds.push({ parent: p, svg: h, id: g }),
                              t(w);
                          } else e(p, h, document.getElementById(g));
                        } else ++o, ++c;
                    } else ++o;
                  }
                  (!d.length || d.length - c > 0) && l(s, 67);
                })();
            };
          })());
        }.apply(t, [])) || (e.exports = s);
  },
  function (e, t, i) {
    "use strict";
    i.r(t);
    var s = i(0);
    Object(s.a)(function () {
      for (
        var e = document.querySelectorAll(".burger"), t = 0;
        t < e.length;
        t++
      ) {
        e[t].addEventListener("click", i);
      }
      function i() {
        var e = this.getAttribute("data-target-id"),
          t = this.getAttribute("data-target-class-toggle");
        e &&
          t &&
          (this.classList.toggle("burger--close"),
          document.getElementById(e).classList.toggle(t));
      }
    });
  },
  function (e, t) {},
  function (e, t, i) {
    "use strict";
    i.r(t);
    var s = i(0);
    Object(s.a)(function () {
      var e = new RegExp("main-nav__link");
      document.addEventListener(
        "focus",
        function (i) {
          if (e.test(i.target.className))
            for (
              var s = t(i.target, ".main-nav__item"), n = 0;
              n < s.length;
              n++
            )
              s[n].classList.add("main-nav__item--show-child");
        },
        !0
      ),
        document.addEventListener(
          "blur",
          function (t) {
            if (e.test(t.target.className))
              for (
                var i = document.querySelectorAll(
                    ".main-nav__item--show-child"
                  ),
                  s = 0;
                s < i.length;
                s++
              )
                i[s].classList.remove("main-nav__item--show-child");
          },
          !0
        );
      /*! getParents.js | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/getParents */
      var t = function (e, t) {
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (e) {
              for (
                var t = (this.document || this.ownerDocument).querySelectorAll(
                    e
                  ),
                  i = t.length;
                --i >= 0 && t.item(i) !== this;

              );
              return i > -1;
            });
        for (var i = []; e && e !== document; e = e.parentNode)
          t ? e.matches(t) && i.push(e) : i.push(e);
        return i;
      };
    });
  },
  function (e, t, i) {
    "use strict";
    i.r(t);
    var s = i(0);
    function n(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function r(e = {}, t = {}) {
      Object.keys(t).forEach((i) => {
        void 0 === e[i]
          ? (e[i] = t[i])
          : n(t[i]) && n(e[i]) && Object.keys(t[i]).length > 0 && r(e[i], t[i]);
      });
    }
    const o = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function a() {
      const e = "undefined" != typeof document ? document : {};
      return r(e, o), e;
    }
    const l = {
      document: o,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function d() {
      const e = "undefined" != typeof window ? window : {};
      return r(e, l), e;
    }
    class c extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function u(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...u(e)) : t.push(e);
        }),
        t
      );
    }
    function p(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function h(e, t) {
      const i = d(),
        s = a();
      let n = [];
      if (!t && e instanceof c) return e;
      if (!e) return new c(n);
      if ("string" == typeof e) {
        const i = e.trim();
        if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
          let e = "div";
          0 === i.indexOf("<li") && (e = "ul"),
            0 === i.indexOf("<tr") && (e = "tbody"),
            (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (e = "tr"),
            0 === i.indexOf("<tbody") && (e = "table"),
            0 === i.indexOf("<option") && (e = "select");
          const t = s.createElement(e);
          t.innerHTML = i;
          for (let e = 0; e < t.childNodes.length; e += 1)
            n.push(t.childNodes[e]);
        } else
          n = (function (e, t) {
            if ("string" != typeof e) return [e];
            const i = [],
              s = t.querySelectorAll(e);
            for (let e = 0; e < s.length; e += 1) i.push(s[e]);
            return i;
          })(e.trim(), t || s);
      } else if (e.nodeType || e === i || e === s) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof c) return e;
        n = e;
      }
      return new c(
        (function (e) {
          const t = [];
          for (let i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
          return t;
        })(n)
      );
    }
    h.fn = c.prototype;
    const f = "resize scroll".split(" ");
    function m(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            f.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : h(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    m("click"),
      m("blur"),
      m("focus"),
      m("focusin"),
      m("focusout"),
      m("keyup"),
      m("keydown"),
      m("keypress"),
      m("submit"),
      m("change"),
      m("mousedown"),
      m("mousemove"),
      m("mouseup"),
      m("mouseenter"),
      m("mouseleave"),
      m("mouseout"),
      m("mouseover"),
      m("touchstart"),
      m("touchend"),
      m("touchmove"),
      m("resize"),
      m("scroll");
    const v = {
      addClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        return (
          p(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = u(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let i = 0; i < this.length; i += 1)
          if (2 === arguments.length) this[i].setAttribute(e, t);
          else
            for (const t in e)
              (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? e + "ms" : e;
        return this;
      },
      on: function (...e) {
        let [t, i, s, n] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const n = e.target.dom7EventData || [];
          if ((n.indexOf(e) < 0 && n.unshift(e), h(t).is(i))) s.apply(t, n);
          else {
            const e = h(t).parents();
            for (let t = 0; t < e.length; t += 1)
              h(e[t]).is(i) && s.apply(e[t], n);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
        }
        "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
          n || (n = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (i)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: s, proxyListener: r }),
                t.addEventListener(e, r, n);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: s, proxyListener: o }),
                t.addEventListener(e, o, n);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, i, s, n] = e;
        "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
          n || (n = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!i && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : i && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const i = o[e];
                (s && i.listener === s) ||
                (s &&
                  i.listener &&
                  i.listener.dom7proxy &&
                  i.listener.dom7proxy === s)
                  ? (r.removeEventListener(t, i.proxyListener, n),
                    o.splice(e, 1))
                  : s ||
                    (r.removeEventListener(t, i.proxyListener, n),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = d(),
          i = e[0].split(" "),
          s = e[1];
        for (let n = 0; n < i.length; n += 1) {
          const r = i[n];
          for (let i = 0; i < this.length; i += 1) {
            const n = this[i];
            if (t.CustomEvent) {
              const i = new t.CustomEvent(r, {
                detail: s,
                bubbles: !0,
                cancelable: !0,
              });
              (n.dom7EventData = e.filter((e, t) => t > 0)),
                n.dispatchEvent(i),
                (n.dom7EventData = []),
                delete n.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function i(s) {
              s.target === this && (e.call(this, s), t.off("transitionend", i));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = d();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = d(),
            t = a(),
            i = this[0],
            s = i.getBoundingClientRect(),
            n = t.body,
            r = i.clientTop || n.clientTop || 0,
            o = i.clientLeft || n.clientLeft || 0,
            l = i === e ? e.scrollY : i.scrollTop,
            c = i === e ? e.scrollX : i.scrollLeft;
          return { top: s.top + l - r, left: s.left + c - o };
        }
        return null;
      },
      css: function (e, t) {
        const i = d();
        let s;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (s = 0; s < this.length; s += 1)
              for (const t in e) this[s].style[t] = e[t];
            return this;
          }
          if (this[0])
            return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, i) => {
              e.apply(t, [t, i]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = d(),
          i = a(),
          s = this[0];
        let n, r;
        if (!s || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (s.matches) return s.matches(e);
          if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
          if (s.msMatchesSelector) return s.msMatchesSelector(e);
          for (n = h(e), r = 0; r < n.length; r += 1) if (n[r] === s) return !0;
          return !1;
        }
        if (e === i) return s === i;
        if (e === t) return s === t;
        if (e.nodeType || e instanceof c) {
          for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
            if (n[r] === s) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return h([]);
        if (e < 0) {
          const i = t + e;
          return h(i < 0 ? [] : [this[i]]);
        }
        return h([this[e]]);
      },
      append: function (...e) {
        let t;
        const i = a();
        for (let s = 0; s < e.length; s += 1) {
          t = e[s];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const s = i.createElement("div");
              for (s.innerHTML = t; s.firstChild; )
                this[e].appendChild(s.firstChild);
            } else if (t instanceof c)
              for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = a();
        let i, s;
        for (i = 0; i < this.length; i += 1)
          if ("string" == typeof e) {
            const n = t.createElement("div");
            for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1)
              this[i].insertBefore(n.childNodes[s], this[i].childNodes[0]);
          } else if (e instanceof c)
            for (s = 0; s < e.length; s += 1)
              this[i].insertBefore(e[s], this[i].childNodes[0]);
          else this[i].insertBefore(e, this[i].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && h(this[0].nextElementSibling).is(e)
              ? h([this[0].nextElementSibling])
              : h([])
            : this[0].nextElementSibling
            ? h([this[0].nextElementSibling])
            : h([])
          : h([]);
      },
      nextAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return h([]);
        for (; i.nextElementSibling; ) {
          const s = i.nextElementSibling;
          e ? h(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return h(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && h(t.previousElementSibling).is(e)
              ? h([t.previousElementSibling])
              : h([])
            : t.previousElementSibling
            ? h([t.previousElementSibling])
            : h([]);
        }
        return h([]);
      },
      prevAll: function (e) {
        const t = [];
        let i = this[0];
        if (!i) return h([]);
        for (; i.previousElementSibling; ) {
          const s = i.previousElementSibling;
          e ? h(s).is(e) && t.push(s) : t.push(s), (i = s);
        }
        return h(t);
      },
      parent: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1)
          null !== this[i].parentNode &&
            (e
              ? h(this[i].parentNode).is(e) && t.push(this[i].parentNode)
              : t.push(this[i].parentNode));
        return h(t);
      },
      parents: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          let s = this[i].parentNode;
          for (; s; )
            e ? h(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
        }
        return h(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? h([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const s = this[i].querySelectorAll(e);
          for (let e = 0; e < s.length; e += 1) t.push(s[e]);
        }
        return h(t);
      },
      children: function (e) {
        const t = [];
        for (let i = 0; i < this.length; i += 1) {
          const s = this[i].children;
          for (let i = 0; i < s.length; i += 1)
            (e && !h(s[i]).is(e)) || t.push(s[i]);
        }
        return h(t);
      },
      filter: function (e) {
        return h(p(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(v).forEach((e) => {
      Object.defineProperty(h.fn, e, { value: v[e], writable: !0 });
    });
    var g = h;
    function w(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function b() {
      return Date.now();
    }
    function S(e, t) {
      void 0 === t && (t = "x");
      const i = d();
      let s, n, r;
      const o = (function (e) {
        const t = d();
        let i;
        return (
          t.getComputedStyle && (i = t.getComputedStyle(e, null)),
          !i && e.currentStyle && (i = e.currentStyle),
          i || (i = e.style),
          i
        );
      })(e);
      return (
        i.WebKitCSSMatrix
          ? ((n = o.transform || o.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new i.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (s = r.toString().split(","))),
        "x" === t &&
          (n = i.WebKitCSSMatrix
            ? r.m41
            : 16 === s.length
            ? parseFloat(s[12])
            : parseFloat(s[4])),
        "y" === t &&
          (n = i.WebKitCSSMatrix
            ? r.m42
            : 16 === s.length
            ? parseFloat(s[13])
            : parseFloat(s[5])),
        n || 0
      );
    }
    function y(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function T(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function E() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < arguments.length; i += 1) {
        const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (null != s && !T(s)) {
          const i = Object.keys(Object(s)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, n = i.length; t < n; t += 1) {
            const n = i[t],
              r = Object.getOwnPropertyDescriptor(s, n);
            void 0 !== r &&
              r.enumerable &&
              (y(e[n]) && y(s[n])
                ? s[n].__swiper__
                  ? (e[n] = s[n])
                  : E(e[n], s[n])
                : !y(e[n]) && y(s[n])
                ? ((e[n] = {}), s[n].__swiper__ ? (e[n] = s[n]) : E(e[n], s[n]))
                : (e[n] = s[n]));
          }
        }
      }
      return e;
    }
    function C(e, t, i) {
      e.style.setProperty(t, i);
    }
    function x(e) {
      let { swiper: t, targetPosition: i, side: s } = e;
      const n = d(),
        r = -t.translate;
      let o,
        a = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(t.cssModeFrameID);
      const c = i > r ? "next" : "prev",
        u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        p = () => {
          (o = new Date().getTime()), null === a && (a = o);
          const e = Math.max(Math.min((o - a) / l, 1), 0),
            d = 0.5 - Math.cos(e * Math.PI) / 2;
          let c = r + d * (i - r);
          if ((u(c, i) && (c = i), t.wrapperEl.scrollTo({ [s]: c }), u(c, i)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [s]: c });
              }),
              void n.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = n.requestAnimationFrame(p);
        };
      p();
    }
    let M, L, k;
    function P() {
      return (
        M ||
          (M = (function () {
            const e = d(),
              t = a();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const i = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, i);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        M
      );
    }
    function A(e) {
      return (
        void 0 === e && (e = {}),
        L ||
          (L = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const i = P(),
              s = d(),
              n = s.navigator.platform,
              r = t || s.navigator.userAgent,
              o = { ios: !1, android: !1 },
              a = s.screen.width,
              l = s.screen.height,
              c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let u = r.match(/(iPad).*OS\s([\d_]+)/);
            const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === n;
            let m = "MacIntel" === n;
            return (
              !u &&
                m &&
                i.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${l}`) >= 0 &&
                ((u = r.match(/(Version)\/([\d.]+)/)),
                u || (u = [0, 1, "13_0_0"]),
                (m = !1)),
              c && !f && ((o.os = "android"), (o.android = !0)),
              (u || h || p) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        L
      );
    }
    function O() {
      return (
        k ||
          (k = (function () {
            const e = d();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        k
      );
    }
    function _(e) {
      let { swiper: t, runCallbacks: i, direction: s, step: n } = e;
      const { activeIndex: r, previousIndex: o } = t;
      let a = s;
      if (
        (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
        t.emit("transition" + n),
        i && r !== o)
      ) {
        if ("reset" === a) return void t.emit("slideResetTransition" + n);
        t.emit("slideChangeTransition" + n),
          "next" === a
            ? t.emit("slideNextTransition" + n)
            : t.emit("slidePrevTransition" + n);
      }
    }
    function z(e) {
      const t = this,
        i = a(),
        s = d(),
        n = t.touchEventsData,
        { params: r, touches: o, enabled: l } = t;
      if (!l) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let c = e;
      c.originalEvent && (c = c.originalEvent);
      let u = g(c.target);
      if ("wrapper" === r.touchEventsTarget && !u.closest(t.wrapperEl).length)
        return;
      if (
        ((n.isTouchEvent = "touchstart" === c.type),
        !n.isTouchEvent && "which" in c && 3 === c.which)
      )
        return;
      if (!n.isTouchEvent && "button" in c && c.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        c.target &&
        c.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (u = g(e.path[0]));
      const p = r.noSwipingSelector
          ? r.noSwipingSelector
          : "." + r.noSwipingClass,
        h = !(!c.target || !c.target.shadowRoot);
      if (
        r.noSwiping &&
        (h
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(i) {
                  if (!i || i === a() || i === d()) return null;
                  i.assignedSlot && (i = i.assignedSlot);
                  const s = i.closest(e);
                  return s || i.getRootNode
                    ? s || t(i.getRootNode().host)
                    : null;
                })(t)
              );
            })(p, u[0])
          : u.closest(p)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !u.closest(r.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX),
        (o.currentY =
          "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY);
      const f = o.currentX,
        m = o.currentY,
        v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        w = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (v && (f <= w || f >= s.innerWidth - w)) {
        if ("prevent" !== v) return;
        e.preventDefault();
      }
      if (
        (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = f),
        (o.startY = m),
        (n.touchStartTime = b()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== c.type)
      ) {
        let e = !0;
        u.is(n.focusableElements) &&
          ((e = !1), "SELECT" === u[0].nodeName && (n.isTouched = !1)),
          i.activeElement &&
            g(i.activeElement).is(n.focusableElements) &&
            i.activeElement !== u[0] &&
            i.activeElement.blur();
        const s = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !s) ||
          u[0].isContentEditable ||
          c.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", c);
    }
    function I(e) {
      const t = a(),
        i = this,
        s = i.touchEventsData,
        { params: n, touches: r, rtlTranslate: o, enabled: l } = i;
      if (!l) return;
      let d = e;
      if ((d.originalEvent && (d = d.originalEvent), !s.isTouched))
        return void (
          s.startMoving &&
          s.isScrolling &&
          i.emit("touchMoveOpposite", d)
        );
      if (s.isTouchEvent && "touchmove" !== d.type) return;
      const c =
          "touchmove" === d.type &&
          d.targetTouches &&
          (d.targetTouches[0] || d.changedTouches[0]),
        u = "touchmove" === d.type ? c.pageX : d.pageX,
        p = "touchmove" === d.type ? c.pageY : d.pageY;
      if (d.preventedByNestedSwiper) return (r.startX = u), void (r.startY = p);
      if (!i.allowTouchMove)
        return (
          g(d.target).is(s.focusableElements) || (i.allowClick = !1),
          void (
            s.isTouched &&
            (Object.assign(r, {
              startX: u,
              startY: p,
              currentX: u,
              currentY: p,
            }),
            (s.touchStartTime = b()))
          )
        );
      if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
        if (i.isVertical()) {
          if (
            (p < r.startY && i.translate <= i.maxTranslate()) ||
            (p > r.startY && i.translate >= i.minTranslate())
          )
            return (s.isTouched = !1), void (s.isMoved = !1);
        } else if (
          (u < r.startX && i.translate <= i.maxTranslate()) ||
          (u > r.startX && i.translate >= i.minTranslate())
        )
          return;
      if (
        s.isTouchEvent &&
        t.activeElement &&
        d.target === t.activeElement &&
        g(d.target).is(s.focusableElements)
      )
        return (s.isMoved = !0), void (i.allowClick = !1);
      if (
        (s.allowTouchCallbacks && i.emit("touchMove", d),
        d.targetTouches && d.targetTouches.length > 1)
      )
        return;
      (r.currentX = u), (r.currentY = p);
      const h = r.currentX - r.startX,
        f = r.currentY - r.startY;
      if (i.params.threshold && Math.sqrt(h ** 2 + f ** 2) < i.params.threshold)
        return;
      if (void 0 === s.isScrolling) {
        let e;
        (i.isHorizontal() && r.currentY === r.startY) ||
        (i.isVertical() && r.currentX === r.startX)
          ? (s.isScrolling = !1)
          : h * h + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
            (s.isScrolling = i.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (s.isScrolling && i.emit("touchMoveOpposite", d),
        void 0 === s.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (s.startMoving = !0)),
        s.isScrolling)
      )
        return void (s.isTouched = !1);
      if (!s.startMoving) return;
      (i.allowClick = !1),
        !n.cssMode && d.cancelable && d.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
        s.isMoved ||
          (n.loop && !n.cssMode && i.loopFix(),
          (s.startTranslate = i.getTranslate()),
          i.setTransition(0),
          i.animating &&
            i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (s.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
            i.setGrabCursor(!0),
          i.emit("sliderFirstMove", d)),
        i.emit("sliderMove", d),
        (s.isMoved = !0);
      let m = i.isHorizontal() ? h : f;
      (r.diff = m),
        (m *= n.touchRatio),
        o && (m = -m),
        (i.swipeDirection = m > 0 ? "prev" : "next"),
        (s.currentTranslate = m + s.startTranslate);
      let v = !0,
        w = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (w = 0),
        m > 0 && s.currentTranslate > i.minTranslate()
          ? ((v = !1),
            n.resistance &&
              (s.currentTranslate =
                i.minTranslate() -
                1 +
                (-i.minTranslate() + s.startTranslate + m) ** w))
          : m < 0 &&
            s.currentTranslate < i.maxTranslate() &&
            ((v = !1),
            n.resistance &&
              (s.currentTranslate =
                i.maxTranslate() +
                1 -
                (i.maxTranslate() - s.startTranslate - m) ** w)),
        v && (d.preventedByNestedSwiper = !0),
        !i.allowSlideNext &&
          "next" === i.swipeDirection &&
          s.currentTranslate < s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        !i.allowSlidePrev &&
          "prev" === i.swipeDirection &&
          s.currentTranslate > s.startTranslate &&
          (s.currentTranslate = s.startTranslate),
        i.allowSlidePrev ||
          i.allowSlideNext ||
          (s.currentTranslate = s.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(m) > n.threshold || s.allowThresholdMove))
          return void (s.currentTranslate = s.startTranslate);
        if (!s.allowThresholdMove)
          return (
            (s.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (s.currentTranslate = s.startTranslate),
            void (r.diff = i.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
          n.watchSlidesProgress) &&
          (i.updateActiveIndex(), i.updateSlidesClasses()),
        i.params.freeMode &&
          n.freeMode.enabled &&
          i.freeMode &&
          i.freeMode.onTouchMove(),
        i.updateProgress(s.currentTranslate),
        i.setTranslate(s.currentTranslate));
    }
    function D(e) {
      const t = this,
        i = t.touchEventsData,
        {
          params: s,
          touches: n,
          rtlTranslate: r,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", l),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (
          i.isMoved && s.grabCursor && t.setGrabCursor(!1),
          (i.isMoved = !1),
          void (i.startMoving = !1)
        );
      s.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = b(),
        c = d - i.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          c < 300 &&
            d - i.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((i.lastClickTime = b()),
        w(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched ||
          !i.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          i.currentTranslate === i.startTranslate)
      )
        return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
      let u;
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (u = s.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -i.currentTranslate),
        s.cssMode)
      )
        return;
      if (t.params.freeMode && s.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== o[e + t]
          ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
          : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
      }
      let f = null,
        m = null;
      s.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (f = 0));
      const v = (u - o[p]) / h,
        g = p < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (c > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (v >= s.longSwipesRatio
            ? t.slideTo(s.rewind && t.isEnd ? f : p + g)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (v > 1 - s.longSwipesRatio
              ? t.slideTo(p + g)
              : null !== m && v < 0 && Math.abs(v) > s.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + g)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + g),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function $() {
      const e = this,
        { params: t, el: i } = e;
      if (i && 0 === i.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = s),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function G(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function H() {
      const e = this,
        { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
      if (!s) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let N = !1;
    function B() {}
    const j = (e, t) => {
      const i = a(),
        {
          params: s,
          touchEvents: n,
          el: r,
          wrapperEl: o,
          device: l,
          support: d,
        } = e,
        c = !!s.nested,
        u = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      if (d.touch) {
        const t = !(
          "touchstart" !== n.start ||
          !d.passiveListener ||
          !s.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[u](n.start, e.onTouchStart, t),
          r[u](
            n.move,
            e.onTouchMove,
            d.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[u](n.end, e.onTouchEnd, t),
          n.cancel && r[u](n.cancel, e.onTouchEnd, t);
      } else
        r[u](n.start, e.onTouchStart, !1),
          i[u](n.move, e.onTouchMove, c),
          i[u](n.end, e.onTouchEnd, !1);
      (s.preventClicks || s.preventClicksPropagation) &&
        r[u]("click", e.onClick, !0),
        s.cssMode && o[u]("scroll", e.onScroll),
        s.updateOnWindowResize
          ? e[p](
              l.ios || l.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              $,
              !0
            )
          : e[p]("observerUpdate", $, !0);
    };
    const W = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var q = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopedSlidesLimit: !0,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function V(e, t) {
      return function (i) {
        void 0 === i && (i = {});
        const s = Object.keys(i)[0],
          n = i[s];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
              !0 === e[s] &&
              (e[s] = { auto: !0 }),
            s in e && "enabled" in n
              ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                "object" != typeof e[s] ||
                  "enabled" in e[s] ||
                  (e[s].enabled = !0),
                e[s] || (e[s] = { enabled: !1 }),
                E(t, i))
              : E(t, i))
          : E(t, i);
      };
    }
    const F = {
        eventsEmitter: {
          on(e, t, i) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof t) return s;
            const n = i ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                s.eventsListeners[e] || (s.eventsListeners[e] = []),
                  s.eventsListeners[e][n](t);
              }),
              s
            );
          },
          once(e, t, i) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof t) return s;
            function n() {
              s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
              for (
                var i = arguments.length, r = new Array(i), o = 0;
                o < i;
                o++
              )
                r[o] = arguments[o];
              t.apply(s, r);
            }
            return (n.__emitterProxy = t), s.on(e, n, i);
          },
          onAny(e, t) {
            const i = this;
            if (!i.eventsListeners || i.destroyed) return i;
            if ("function" != typeof e) return i;
            const s = t ? "unshift" : "push";
            return (
              i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e),
              i
            );
          },
          offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const i = t.eventsAnyListeners.indexOf(e);
            return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
          },
          off(e, t) {
            const i = this;
            return !i.eventsListeners || i.destroyed
              ? i
              : i.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (i.eventsListeners[e] = [])
                    : i.eventsListeners[e] &&
                      i.eventsListeners[e].forEach((s, n) => {
                        (s === t ||
                          (s.__emitterProxy && s.__emitterProxy === t)) &&
                          i.eventsListeners[e].splice(n, 1);
                      });
                }),
                i)
              : i;
          },
          emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed) return e;
            if (!e.eventsListeners) return e;
            let t, i, s;
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            "string" == typeof r[0] || Array.isArray(r[0])
              ? ((t = r[0]), (i = r.slice(1, r.length)), (s = e))
              : ((t = r[0].events), (i = r[0].data), (s = r[0].context || e)),
              i.unshift(s);
            return (
              (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
                e.eventsAnyListeners &&
                  e.eventsAnyListeners.length &&
                  e.eventsAnyListeners.forEach((e) => {
                    e.apply(s, [t, ...i]);
                  }),
                  e.eventsListeners &&
                    e.eventsListeners[t] &&
                    e.eventsListeners[t].forEach((e) => {
                      e.apply(s, i);
                    });
              }),
              e
            );
          },
        },
        update: {
          updateSize: function () {
            const e = this;
            let t, i;
            const s = e.$el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : s[0].clientWidth),
              (i =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : s[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === i && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(s.css("padding-left") || 0, 10) -
                  parseInt(s.css("padding-right") || 0, 10)),
                (i =
                  i -
                  parseInt(s.css("padding-top") || 0, 10) -
                  parseInt(s.css("padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(i) && (i = 0),
                Object.assign(e, {
                  width: t,
                  height: i,
                  size: e.isHorizontal() ? t : i,
                }));
          },
          updateSlides: function () {
            const e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[t];
            }
            function i(e, i) {
              return parseFloat(e.getPropertyValue(t(i)) || 0);
            }
            const s = e.params,
              { $wrapperEl: n, size: r, rtlTranslate: o, wrongRTL: a } = e,
              l = e.virtual && s.virtual.enabled,
              d = l ? e.virtual.slides.length : e.slides.length,
              c = n.children("." + e.params.slideClass),
              u = l ? e.virtual.slides.length : c.length;
            let p = [];
            const h = [],
              f = [];
            let m = s.slidesOffsetBefore;
            "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
            let v = s.slidesOffsetAfter;
            "function" == typeof v && (v = s.slidesOffsetAfter.call(e));
            const g = e.snapGrid.length,
              w = e.slidesGrid.length;
            let b = s.spaceBetween,
              S = -m,
              y = 0,
              T = 0;
            if (void 0 === r) return;
            "string" == typeof b &&
              b.indexOf("%") >= 0 &&
              (b = (parseFloat(b.replace("%", "")) / 100) * r),
              (e.virtualSize = -b),
              o
                ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              s.centeredSlides &&
                s.cssMode &&
                (C(e.wrapperEl, "--swiper-centered-offset-before", ""),
                C(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const E = s.grid && s.grid.rows > 1 && e.grid;
            let x;
            E && e.grid.initSlides(u);
            const M =
              "auto" === s.slidesPerView &&
              s.breakpoints &&
              Object.keys(s.breakpoints).filter(
                (e) => void 0 !== s.breakpoints[e].slidesPerView
              ).length > 0;
            for (let n = 0; n < u; n += 1) {
              x = 0;
              const o = c.eq(n);
              if (
                (E && e.grid.updateSlide(n, o, u, t),
                "none" !== o.css("display"))
              ) {
                if ("auto" === s.slidesPerView) {
                  M && (c[n].style[t("width")] = "");
                  const r = getComputedStyle(o[0]),
                    a = o[0].style.transform,
                    l = o[0].style.webkitTransform;
                  if (
                    (a && (o[0].style.transform = "none"),
                    l && (o[0].style.webkitTransform = "none"),
                    s.roundLengths)
                  )
                    x = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                  else {
                    const e = i(r, "width"),
                      t = i(r, "padding-left"),
                      s = i(r, "padding-right"),
                      n = i(r, "margin-left"),
                      a = i(r, "margin-right"),
                      l = r.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) x = e + n + a;
                    else {
                      const { clientWidth: i, offsetWidth: r } = o[0];
                      x = e + t + s + n + a + (r - i);
                    }
                  }
                  a && (o[0].style.transform = a),
                    l && (o[0].style.webkitTransform = l),
                    s.roundLengths && (x = Math.floor(x));
                } else
                  (x = (r - (s.slidesPerView - 1) * b) / s.slidesPerView),
                    s.roundLengths && (x = Math.floor(x)),
                    c[n] && (c[n].style[t("width")] = x + "px");
                c[n] && (c[n].swiperSlideSize = x),
                  f.push(x),
                  s.centeredSlides
                    ? ((S = S + x / 2 + y / 2 + b),
                      0 === y && 0 !== n && (S = S - r / 2 - b),
                      0 === n && (S = S - r / 2 - b),
                      Math.abs(S) < 0.001 && (S = 0),
                      s.roundLengths && (S = Math.floor(S)),
                      T % s.slidesPerGroup == 0 && p.push(S),
                      h.push(S))
                    : (s.roundLengths && (S = Math.floor(S)),
                      (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                        e.params.slidesPerGroup ==
                        0 && p.push(S),
                      h.push(S),
                      (S = S + x + b)),
                  (e.virtualSize += x + b),
                  (y = x),
                  (T += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, r) + v),
              o &&
                a &&
                ("slide" === s.effect || "coverflow" === s.effect) &&
                n.css({ width: e.virtualSize + s.spaceBetween + "px" }),
              s.setWrapperSize &&
                n.css({ [t("width")]: e.virtualSize + s.spaceBetween + "px" }),
              E && e.grid.updateWrapperSize(x, p, t),
              !s.centeredSlides)
            ) {
              const t = [];
              for (let i = 0; i < p.length; i += 1) {
                let n = p[i];
                s.roundLengths && (n = Math.floor(n)),
                  p[i] <= e.virtualSize - r && t.push(n);
              }
              (p = t),
                Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) >
                  1 && p.push(e.virtualSize - r);
            }
            if ((0 === p.length && (p = [0]), 0 !== s.spaceBetween)) {
              const i = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              c.filter((e, t) => !s.cssMode || t !== c.length - 1).css({
                [i]: b + "px",
              });
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
              let e = 0;
              f.forEach((t) => {
                e += t + (s.spaceBetween ? s.spaceBetween : 0);
              }),
                (e -= s.spaceBetween);
              const t = e - r;
              p = p.map((e) => (e < 0 ? -m : e > t ? t + v : e));
            }
            if (s.centerInsufficientSlides) {
              let e = 0;
              if (
                (f.forEach((t) => {
                  e += t + (s.spaceBetween ? s.spaceBetween : 0);
                }),
                (e -= s.spaceBetween),
                e < r)
              ) {
                const t = (r - e) / 2;
                p.forEach((e, i) => {
                  p[i] = e - t;
                }),
                  h.forEach((e, i) => {
                    h[i] = e + t;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: c,
                snapGrid: p,
                slidesGrid: h,
                slidesSizesGrid: f,
              }),
              s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
            ) {
              C(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
                C(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  e.size / 2 - f[f.length - 1] / 2 + "px"
                );
              const t = -e.snapGrid[0],
                i = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map((e) => e + t)),
                (e.slidesGrid = e.slidesGrid.map((e) => e + i));
            }
            if (
              (u !== d && e.emit("slidesLengthChange"),
              p.length !== g &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              h.length !== w && e.emit("slidesGridLengthChange"),
              s.watchSlidesProgress && e.updateSlidesOffset(),
              !(
                l ||
                s.cssMode ||
                ("slide" !== s.effect && "fade" !== s.effect)
              ))
            ) {
              const t = s.containerModifierClass + "backface-hidden",
                i = e.$el.hasClass(t);
              u <= s.maxBackfaceHiddenSlides
                ? i || e.$el.addClass(t)
                : i && e.$el.removeClass(t);
            }
          },
          updateAutoHeight: function (e) {
            const t = this,
              i = [],
              s = t.virtual && t.params.virtual.enabled;
            let n,
              r = 0;
            "number" == typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed);
            const o = (e) =>
              s
                ? t.slides.filter(
                    (t) =>
                      parseInt(
                        t.getAttribute("data-swiper-slide-index"),
                        10
                      ) === e
                  )[0]
                : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                (t.visibleSlides || g([])).each((e) => {
                  i.push(e);
                });
              else
                for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                  const e = t.activeIndex + n;
                  if (e > t.slides.length && !s) break;
                  i.push(o(e));
                }
            else i.push(o(t.activeIndex));
            for (n = 0; n < i.length; n += 1)
              if (void 0 !== i[n]) {
                const e = i[n].offsetHeight;
                r = e > r ? e : r;
              }
            (r || 0 === r) && t.$wrapperEl.css("height", r + "px");
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides;
            for (let i = 0; i < t.length; i += 1)
              t[i].swiperSlideOffset = e.isHorizontal()
                ? t[i].offsetLeft
                : t[i].offsetTop;
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            const t = this,
              i = t.params,
              { slides: s, rtlTranslate: n, snapGrid: r } = t;
            if (0 === s.length) return;
            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
            let o = -e;
            n && (o = e),
              s.removeClass(i.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (let e = 0; e < s.length; e += 1) {
              const a = s[e];
              let l = a.swiperSlideOffset;
              i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
              const d =
                  (o + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + i.spaceBetween),
                c =
                  (o - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + i.spaceBetween),
                u = -(o - l),
                p = u + t.slidesSizesGrid[e];
              ((u >= 0 && u < t.size - 1) ||
                (p > 1 && p <= t.size) ||
                (u <= 0 && p >= t.size)) &&
                (t.visibleSlides.push(a),
                t.visibleSlidesIndexes.push(e),
                s.eq(e).addClass(i.slideVisibleClass)),
                (a.progress = n ? -d : d),
                (a.originalProgress = n ? -c : c);
            }
            t.visibleSlides = g(t.visibleSlides);
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const i = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * i) || 0;
            }
            const i = t.params,
              s = t.maxTranslate() - t.minTranslate();
            let { progress: n, isBeginning: r, isEnd: o } = t;
            const a = r,
              l = o;
            0 === s
              ? ((n = 0), (r = !0), (o = !0))
              : ((n = (e - t.minTranslate()) / s), (r = n <= 0), (o = n >= 1)),
              Object.assign(t, { progress: n, isBeginning: r, isEnd: o }),
              (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
                t.updateSlidesProgress(e),
              r && !a && t.emit("reachBeginning toEdge"),
              o && !l && t.emit("reachEnd toEdge"),
              ((a && !r) || (l && !o)) && t.emit("fromEdge"),
              t.emit("progress", n);
          },
          updateSlidesClasses: function () {
            const e = this,
              {
                slides: t,
                params: i,
                $wrapperEl: s,
                activeIndex: n,
                realIndex: r,
              } = e,
              o = e.virtual && i.virtual.enabled;
            let a;
            t.removeClass(
              `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
            ),
              (a = o
                ? e.$wrapperEl.find(
                    `.${i.slideClass}[data-swiper-slide-index="${n}"]`
                  )
                : t.eq(n)),
              a.addClass(i.slideActiveClass),
              i.loop &&
                (a.hasClass(i.slideDuplicateClass)
                  ? s
                      .children(
                        `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                      )
                      .addClass(i.slideDuplicateActiveClass)
                  : s
                      .children(
                        `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                      )
                      .addClass(i.slideDuplicateActiveClass));
            let l = a
              .nextAll("." + i.slideClass)
              .eq(0)
              .addClass(i.slideNextClass);
            i.loop &&
              0 === l.length &&
              ((l = t.eq(0)), l.addClass(i.slideNextClass));
            let d = a
              .prevAll("." + i.slideClass)
              .eq(0)
              .addClass(i.slidePrevClass);
            i.loop &&
              0 === d.length &&
              ((d = t.eq(-1)), d.addClass(i.slidePrevClass)),
              i.loop &&
                (l.hasClass(i.slideDuplicateClass)
                  ? s
                      .children(
                        `.${i.slideClass}:not(.${
                          i.slideDuplicateClass
                        })[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(i.slideDuplicateNextClass)
                  : s
                      .children(
                        `.${i.slideClass}.${
                          i.slideDuplicateClass
                        }[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(i.slideDuplicateNextClass),
                d.hasClass(i.slideDuplicateClass)
                  ? s
                      .children(
                        `.${i.slideClass}:not(.${
                          i.slideDuplicateClass
                        })[data-swiper-slide-index="${d.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(i.slideDuplicatePrevClass)
                  : s
                      .children(
                        `.${i.slideClass}.${
                          i.slideDuplicateClass
                        }[data-swiper-slide-index="${d.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(i.slideDuplicatePrevClass)),
              e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            const t = this,
              i = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: s,
                snapGrid: n,
                params: r,
                activeIndex: o,
                realIndex: a,
                snapIndex: l,
              } = t;
            let d,
              c = e;
            if (void 0 === c) {
              for (let e = 0; e < s.length; e += 1)
                void 0 !== s[e + 1]
                  ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2
                    ? (c = e)
                    : i >= s[e] && i < s[e + 1] && (c = e + 1)
                  : i >= s[e] && (c = e);
              r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (n.indexOf(i) >= 0) d = n.indexOf(i);
            else {
              const e = Math.min(r.slidesPerGroupSkip, c);
              d = e + Math.floor((c - e) / r.slidesPerGroup);
            }
            if ((d >= n.length && (d = n.length - 1), c === o))
              return void (
                d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
              );
            const u = parseInt(
              t.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(t, {
              snapIndex: d,
              realIndex: u,
              previousIndex: o,
              activeIndex: c,
            }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              a !== u && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange");
          },
          updateClickedSlide: function (e) {
            const t = this,
              i = t.params,
              s = g(e).closest("." + i.slideClass)[0];
            let n,
              r = !1;
            if (s)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === s) {
                  (r = !0), (n = e);
                  break;
                }
            if (!s || !r)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = s),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    g(s).attr("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = n),
              i.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        },
        translate: {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {
              params: t,
              rtlTranslate: i,
              translate: s,
              $wrapperEl: n,
            } = this;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            let r = S(n[0], e);
            return i && (r = -r), r || 0;
          },
          setTranslate: function (e, t) {
            const i = this,
              {
                rtlTranslate: s,
                params: n,
                $wrapperEl: r,
                wrapperEl: o,
                progress: a,
              } = i;
            let l,
              d = 0,
              c = 0;
            i.isHorizontal() ? (d = s ? -e : e) : (c = e),
              n.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
              n.cssMode
                ? (o[i.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    i.isHorizontal() ? -d : -c)
                : n.virtualTranslate ||
                  r.transform(`translate3d(${d}px, ${c}px, 0px)`),
              (i.previousTranslate = i.translate),
              (i.translate = i.isHorizontal() ? d : c);
            const u = i.maxTranslate() - i.minTranslate();
            (l = 0 === u ? 0 : (e - i.minTranslate()) / u),
              l !== a && i.updateProgress(e),
              i.emit("setTranslate", i.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, i, s, n) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0),
              void 0 === s && (s = !0);
            const r = this,
              { params: o, wrapperEl: a } = r;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            const l = r.minTranslate(),
              d = r.maxTranslate();
            let c;
            if (
              ((c = s && e > l ? l : s && e < d ? d : e),
              r.updateProgress(c),
              o.cssMode)
            ) {
              const e = r.isHorizontal();
              if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -c;
              else {
                if (!r.support.smoothScroll)
                  return (
                    x({
                      swiper: r,
                      targetPosition: -c,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                a.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
              }
              return !0;
            }
            return (
              0 === t
                ? (r.setTransition(0),
                  r.setTranslate(c),
                  i &&
                    (r.emit("beforeTransitionStart", t, n),
                    r.emit("transitionEnd")))
                : (r.setTransition(t),
                  r.setTranslate(c),
                  i &&
                    (r.emit("beforeTransitionStart", t, n),
                    r.emit("transitionStart")),
                  r.animating ||
                    ((r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                      (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          r.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            r.onTranslateToWrapperTransitionEnd
                          ),
                          (r.onTranslateToWrapperTransitionEnd = null),
                          delete r.onTranslateToWrapperTransitionEnd,
                          i && r.emit("transitionEnd"));
                      }),
                    r.$wrapperEl[0].addEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        },
        transition: {
          setTransition: function (e, t) {
            const i = this;
            i.params.cssMode || i.$wrapperEl.transition(e),
              i.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const i = this,
              { params: s } = i;
            s.cssMode ||
              (s.autoHeight && i.updateAutoHeight(),
              _({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const { params: i } = this;
            (this.animating = !1),
              i.cssMode ||
                (this.setTransition(0),
                _({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "End",
                }));
          },
        },
        slide: {
          slideTo: function (e, t, i, s, n) {
            if (
              (void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0),
              "number" != typeof e && "string" != typeof e)
            )
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
              );
            if ("string" == typeof e) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            const r = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: a,
              snapGrid: l,
              slidesGrid: d,
              previousIndex: c,
              activeIndex: u,
              rtlTranslate: p,
              wrapperEl: h,
              enabled: f,
            } = r;
            if (
              (r.animating && a.preventInteractionOnTransition) ||
              (!f && !s && !n)
            )
              return !1;
            const m = Math.min(r.params.slidesPerGroupSkip, o);
            let v = m + Math.floor((o - m) / r.params.slidesPerGroup);
            v >= l.length && (v = l.length - 1),
              (u || a.initialSlide || 0) === (c || 0) &&
                i &&
                r.emit("beforeSlideChangeStart");
            const g = -l[v];
            if ((r.updateProgress(g), a.normalizeSlideIndex))
              for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * g),
                  i = Math.floor(100 * d[e]),
                  s = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1]
                  ? t >= i && t < s - (s - i) / 2
                    ? (o = e)
                    : t >= i && t < s && (o = e + 1)
                  : t >= i && (o = e);
              }
            if (r.initialized && o !== u) {
              if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
                return !1;
              if (
                !r.allowSlidePrev &&
                g > r.translate &&
                g > r.maxTranslate() &&
                (u || 0) !== o
              )
                return !1;
            }
            let w;
            if (
              ((w = o > u ? "next" : o < u ? "prev" : "reset"),
              (p && -g === r.translate) || (!p && g === r.translate))
            )
              return (
                r.updateActiveIndex(o),
                a.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== a.effect && r.setTranslate(g),
                "reset" !== w &&
                  (r.transitionStart(i, w), r.transitionEnd(i, w)),
                !1
              );
            if (a.cssMode) {
              const e = r.isHorizontal(),
                i = p ? g : -g;
              if (0 === t) {
                const t = r.virtual && r.params.virtual.enabled;
                t &&
                  ((r.wrapperEl.style.scrollSnapType = "none"),
                  (r._immediateVirtual = !0)),
                  (h[e ? "scrollLeft" : "scrollTop"] = i),
                  t &&
                    requestAnimationFrame(() => {
                      (r.wrapperEl.style.scrollSnapType = ""),
                        (r._swiperImmediateVirtual = !1);
                    });
              } else {
                if (!r.support.smoothScroll)
                  return (
                    x({
                      swiper: r,
                      targetPosition: i,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                h.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
              }
              return !0;
            }
            return (
              r.setTransition(t),
              r.setTranslate(g),
              r.updateActiveIndex(o),
              r.updateSlidesClasses(),
              r.emit("beforeTransitionStart", t, s),
              r.transitionStart(i, w),
              0 === t
                ? r.transitionEnd(i, w)
                : r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(i, w));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  )),
              !0
            );
          },
          slideToLoop: function (e, t, i, s) {
            if (
              (void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0),
              "string" == typeof e)
            ) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            const n = this;
            let r = e;
            return (
              n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s)
            );
          },
          slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const s = this,
              { animating: n, enabled: r, params: o } = s;
            if (!r) return s;
            let a = o.slidesPerGroup;
            "auto" === o.slidesPerView &&
              1 === o.slidesPerGroup &&
              o.slidesPerGroupAuto &&
              (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
            const l = s.activeIndex < o.slidesPerGroupSkip ? 1 : a;
            if (o.loop) {
              if (n && o.loopPreventsSlide) return !1;
              s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
            }
            return o.rewind && s.isEnd
              ? s.slideTo(0, e, t, i)
              : s.slideTo(s.activeIndex + l, e, t, i);
          },
          slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const s = this,
              {
                params: n,
                animating: r,
                snapGrid: o,
                slidesGrid: a,
                rtlTranslate: l,
                enabled: d,
              } = s;
            if (!d) return s;
            if (n.loop) {
              if (r && n.loopPreventsSlide) return !1;
              s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
            }
            function c(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const u = c(l ? s.translate : -s.translate),
              p = o.map((e) => c(e));
            let h = o[p.indexOf(u) - 1];
            if (void 0 === h && n.cssMode) {
              let e;
              o.forEach((t, i) => {
                u >= t && (e = i);
              }),
                void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
            }
            let f = 0;
            if (
              (void 0 !== h &&
                ((f = a.indexOf(h)),
                f < 0 && (f = s.activeIndex - 1),
                "auto" === n.slidesPerView &&
                  1 === n.slidesPerGroup &&
                  n.slidesPerGroupAuto &&
                  ((f = f - s.slidesPerViewDynamic("previous", !0) + 1),
                  (f = Math.max(f, 0)))),
              n.rewind && s.isBeginning)
            ) {
              const n =
                s.params.virtual && s.params.virtual.enabled && s.virtual
                  ? s.virtual.slides.length - 1
                  : s.slides.length - 1;
              return s.slideTo(n, e, t, i);
            }
            return s.slideTo(f, e, t, i);
          },
          slideReset: function (e, t, i) {
            return (
              void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              this.slideTo(this.activeIndex, e, t, i)
            );
          },
          slideToClosest: function (e, t, i, s) {
            void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              void 0 === s && (s = 0.5);
            const n = this;
            let r = n.activeIndex;
            const o = Math.min(n.params.slidesPerGroupSkip, r),
              a = o + Math.floor((r - o) / n.params.slidesPerGroup),
              l = n.rtlTranslate ? n.translate : -n.translate;
            if (l >= n.snapGrid[a]) {
              const e = n.snapGrid[a];
              l - e > (n.snapGrid[a + 1] - e) * s &&
                (r += n.params.slidesPerGroup);
            } else {
              const e = n.snapGrid[a - 1];
              l - e <= (n.snapGrid[a] - e) * s &&
                (r -= n.params.slidesPerGroup);
            }
            return (
              (r = Math.max(r, 0)),
              (r = Math.min(r, n.slidesGrid.length - 1)),
              n.slideTo(r, e, t, i)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, $wrapperEl: i } = e,
              s =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let n,
              r = e.clickedIndex;
            if (t.loop) {
              if (e.animating) return;
              (n = parseInt(
                g(e.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                t.centeredSlides
                  ? r < e.loopedSlides - s / 2 ||
                    r > e.slides.length - e.loopedSlides + s / 2
                    ? (e.loopFix(),
                      (r = i
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      w(() => {
                        e.slideTo(r);
                      }))
                    : e.slideTo(r)
                  : r > e.slides.length - s
                  ? (e.loopFix(),
                    (r = i
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    w(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r);
            } else e.slideTo(r);
          },
        },
        loop: {
          loopCreate: function () {
            const e = this,
              t = a(),
              { params: i, $wrapperEl: s } = e,
              n = s.children().length > 0 ? g(s.children()[0].parentNode) : s;
            n.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
            let r = n.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
              const e = i.slidesPerGroup - (r.length % i.slidesPerGroup);
              if (e !== i.slidesPerGroup) {
                for (let s = 0; s < e; s += 1) {
                  const e = g(t.createElement("div")).addClass(
                    `${i.slideClass} ${i.slideBlankClass}`
                  );
                  n.append(e);
                }
                r = n.children("." + i.slideClass);
              }
            }
            "auto" !== i.slidesPerView ||
              i.loopedSlides ||
              (i.loopedSlides = r.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(i.loopedSlides || i.slidesPerView, 10)
              )),
              (e.loopedSlides += i.loopAdditionalSlides),
              e.loopedSlides > r.length &&
                e.params.loopedSlidesLimit &&
                (e.loopedSlides = r.length);
            const o = [],
              l = [];
            r.each((e, t) => {
              g(e).attr("data-swiper-slide-index", t);
            });
            for (let t = 0; t < e.loopedSlides; t += 1) {
              const e = t - Math.floor(t / r.length) * r.length;
              l.push(r.eq(e)[0]), o.unshift(r.eq(r.length - e - 1)[0]);
            }
            for (let e = 0; e < l.length; e += 1)
              n.append(g(l[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (let e = o.length - 1; e >= 0; e -= 1)
              n.prepend(g(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
          },
          loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const {
              activeIndex: t,
              slides: i,
              loopedSlides: s,
              allowSlidePrev: n,
              allowSlideNext: r,
              snapGrid: o,
              rtlTranslate: a,
            } = e;
            let l;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            const d = -o[t] - e.getTranslate();
            if (t < s) {
              (l = i.length - 3 * s + t), (l += s);
              e.slideTo(l, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((a ? -e.translate : e.translate) - d);
            } else if (t >= i.length - s) {
              (l = -i.length + t + s), (l += s);
              e.slideTo(l, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((a ? -e.translate : e.translate) - d);
            }
            (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
          },
          loopDestroy: function () {
            const { $wrapperEl: e, params: t, slides: i } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
              )
              .remove(),
              i.removeAttr("data-swiper-slide-index");
          },
        },
        grabCursor: {
          setGrabCursor: function (e) {
            if (
              this.support.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
              return;
            const t =
              "container" === this.params.touchEventsTarget
                ? this.el
                : this.wrapperEl;
            (t.style.cursor = "move"),
              (t.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            this.support.touch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode ||
              (this[
                "container" === this.params.touchEventsTarget
                  ? "el"
                  : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = a(),
              { params: i, support: s } = e;
            (e.onTouchStart = z.bind(e)),
              (e.onTouchMove = I.bind(e)),
              (e.onTouchEnd = D.bind(e)),
              i.cssMode && (e.onScroll = H.bind(e)),
              (e.onClick = G.bind(e)),
              s.touch && !N && (t.addEventListener("touchstart", B), (N = !0)),
              j(e, "on");
          },
          detachEvents: function () {
            j(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              {
                activeIndex: t,
                initialized: i,
                loopedSlides: s = 0,
                params: n,
                $el: r,
              } = e,
              o = n.breakpoints;
            if (!o || (o && 0 === Object.keys(o).length)) return;
            const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
            if (!a || e.currentBreakpoint === a) return;
            const l = (a in o ? o[a] : void 0) || e.originalParams,
              d = W(e, n),
              c = W(e, l),
              u = n.enabled;
            d && !c
              ? (r.removeClass(
                  `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !d &&
                c &&
                (r.addClass(n.containerModifierClass + "grid"),
                ((l.grid.fill && "column" === l.grid.fill) ||
                  (!l.grid.fill && "column" === n.grid.fill)) &&
                  r.addClass(n.containerModifierClass + "grid-column"),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const i = n[t] && n[t].enabled,
                  s = l[t] && l[t].enabled;
                i && !s && e[t].disable(), !i && s && e[t].enable();
              });
            const p = l.direction && l.direction !== n.direction,
              h = n.loop && (l.slidesPerView !== n.slidesPerView || p);
            p && i && e.changeDirection(), E(e.params, l);
            const f = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              u && !f ? e.disable() : !u && f && e.enable(),
              (e.currentBreakpoint = a),
              e.emit("_beforeBreakpoint", l),
              h &&
                i &&
                (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - s + e.loopedSlides, 0, !1)),
              e.emit("breakpoint", l);
          },
          getBreakpoint: function (e, t, i) {
            if (
              (void 0 === t && (t = "window"), !e || ("container" === t && !i))
            )
              return;
            let s = !1;
            const n = d(),
              r = "window" === t ? n.innerHeight : i.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: r, value: a } = o[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = r)
                : a <= i.clientWidth && (s = r);
            }
            return s || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: i } = e,
              { slidesOffsetBefore: s } = i;
            if (s) {
              const t = e.slides.length - 1,
                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
              e.isLocked = e.size > i;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const {
                classNames: e,
                params: t,
                rtl: i,
                $el: s,
                device: n,
                support: r,
              } = this,
              o = (function (e, t) {
                const i = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((s) => {
                          e[s] && i.push(t + s);
                        })
                      : "string" == typeof e && i.push(t + e);
                  }),
                  i
                );
              })(
                [
                  "initialized",
                  t.direction,
                  { "pointer-events": !r.touch },
                  { "free-mode": this.params.freeMode && t.freeMode.enabled },
                  { autoheight: t.autoHeight },
                  { rtl: i },
                  { grid: t.grid && t.grid.rows > 1 },
                  {
                    "grid-column":
                      t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                  },
                  { android: n.android },
                  { ios: n.ios },
                  { "css-mode": t.cssMode },
                  { centered: t.cssMode && t.centeredSlides },
                  { "watch-progress": t.watchSlidesProgress },
                ],
                t.containerModifierClass
              );
            e.push(...o),
              s.addClass([...e].join(" ")),
              this.emitContainerClasses();
          },
          removeClasses: function () {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
          },
        },
        images: {
          loadImage: function (e, t, i, s, n, r) {
            const o = d();
            let a;
            function l() {
              r && r();
            }
            g(e).parent("picture")[0] || (e.complete && n)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                s && (a.sizes = s),
                i && (a.srcset = i),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
              const s = e.imagesToLoad[i];
              e.loadImage(
                s,
                s.currentSrc || s.getAttribute("src"),
                s.srcset || s.getAttribute("srcset"),
                s.sizes || s.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      R = {};
    class X {
      constructor() {
        let e, t;
        for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
          s[n] = arguments[n];
        if (
          (1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (t = s[0])
            : ([e, t] = s),
          t || (t = {}),
          (t = E({}, t)),
          e && !t.el && (t.el = e),
          t.el && g(t.el).length > 1)
        ) {
          const e = [];
          return (
            g(t.el).each((i) => {
              const s = E({}, t, { el: i });
              e.push(new X(s));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = P()),
          (r.device = A({ userAgent: t.userAgent })),
          (r.browser = O()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const o = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: V(t, o),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const a = E({}, q, o);
        return (
          (r.params = E({}, a, R, t)),
          (r.originalParams = E({}, r.params)),
          (r.passedParams = E({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = g),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: g(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: b(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        e = Math.min(Math.max(e, 0), 1);
        const i = this.minTranslate(),
          s = (this.maxTranslate() - i) * e + i;
        this.translateTo(s, void 0 === t ? 0 : t),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((i) => {
          const s = e.getSlideClasses(i);
          t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: i,
          slides: s,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (i.centeredSlides) {
          let e,
            t = s[a].swiperSlideSize;
          for (let i = a + 1; i < s.length; i += 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let i = a - 1; i >= 0; i -= 1)
            s[i] &&
              !e &&
              ((t += s[i].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < s.length; e += 1) {
            (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            n[a] - n[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: i } = e;
        function s() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        i.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (s(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || s()),
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const i = this,
          s = i.params.direction;
        return (
          e || (e = "horizontal" === s ? "vertical" : "horizontal"),
          e === s ||
            ("horizontal" !== e && "vertical" !== e) ||
            (i.$el
              .removeClass(`${i.params.containerModifierClass}${s}`)
              .addClass(`${i.params.containerModifierClass}${e}`),
            i.emitContainerClasses(),
            (i.params.direction = e),
            i.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            i.emit("changeDirection"),
            t && i.update()),
          i
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.$el.addClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "rtl"))
            : (t.$el.removeClass(t.params.containerModifierClass + "rtl"),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const i = g(e || t.params.el);
        if (!(e = i[0])) return !1;
        e.swiper = t;
        const s = () =>
          "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
        let n = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = g(e.shadowRoot.querySelector(s()));
            return (t.children = (e) => i.children(e)), t;
          }
          return i.children ? i.children(s()) : g(i).children(s());
        })();
        if (0 === n.length && t.params.createElements) {
          const e = a().createElement("div");
          (n = g(e)),
            (e.className = t.params.wrapperClass),
            i.append(e),
            i.children("." + t.params.slideClass).each((e) => {
              n.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: i,
            el: e,
            $wrapperEl: n,
            wrapperEl: n[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
            wrongRTL: "-webkit-box" === n.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const i = this,
          { params: s, $el: n, $wrapperEl: r, slides: o } = i;
        return (
          void 0 === i.params ||
            i.destroyed ||
            (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              n.removeAttr("style"),
              r.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      s.slideVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach((e) => {
              i.off(e);
            }),
            !1 !== e &&
              ((i.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(i)),
            (i.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        E(R, e);
      }
      static get extendedDefaults() {
        return R;
      }
      static get defaults() {
        return q;
      }
      static installModule(e) {
        X.prototype.__modules__ || (X.prototype.__modules__ = []);
        const t = X.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => X.installModule(e)), X)
          : (X.installModule(e), X);
      }
    }
    Object.keys(F).forEach((e) => {
      Object.keys(F[e]).forEach((t) => {
        X.prototype[t] = F[e][t];
      });
    }),
      X.use([
        function (e) {
          let { swiper: t, on: i, emit: s } = e;
          const n = d();
          let r = null,
            o = null;
          const a = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (s("beforeResize"), s("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && s("orientationchange");
            };
          i("init", () => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  o = n.requestAnimationFrame(() => {
                    const { width: i, height: s } = t;
                    let n = i,
                      r = s;
                    e.forEach((e) => {
                      let { contentBoxSize: i, contentRect: s, target: o } = e;
                      (o && o !== t.el) ||
                        ((n = s ? s.width : (i[0] || i).inlineSize),
                        (r = s ? s.height : (i[0] || i).blockSize));
                    }),
                      (n === i && r === s) || a();
                  });
                })),
                r.observe(t.el))
              : (n.addEventListener("resize", a),
                n.addEventListener("orientationchange", l));
          }),
            i("destroy", () => {
              o && n.cancelAnimationFrame(o),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                n.removeEventListener("resize", a),
                n.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: n } = e;
          const r = [],
            o = d(),
            a = function (e, t) {
              void 0 === t && (t = {});
              const i = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(i);
            };
          i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) a(e[t]);
                }
                a(t.$el[0], { childList: t.params.observeSlideChildren }),
                  a(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    var Y = X;
    Object(s.a)(function () {
      new Y(".swiper", {
        loop: !0,
        slidesPerView: 4,
        spaceBetween: 22,
        breakpoints: {
          768: { spaceBetween: 38 },
          992: { slidesPerView: 6, spaceBetween: 60 },
        },
      });
    });
  },
  function (e, t, i) {
    "use strict";
    function s(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(e, s.key, s);
      }
    }
    i.r(t);
    var n,
      r = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this._openHeight = 0),
            (this._windowWidth = window.innerWidth),
            (this._documentClickHandler =
              this._documentClickHandler.bind(this)),
            (this._windowResizeHandler = this._windowResizeHandler.bind(this)),
            this._init();
        }
        var t, i, n;
        return (
          (t = e),
          (i = [
            {
              key: "_init",
              value: function () {
                this.fullUpdate(),
                  document.addEventListener(
                    "click",
                    this._documentClickHandler
                  ),
                  window.addEventListener("resize", this._windowResizeHandler);
              },
            },
            {
              key: "_documentClickHandler",
              value: function (e) {
                var t = e.target;
                if (t.closest('[data-accordion="button"]')) {
                  e.preventDefault();
                  var i = t.closest('[data-accordion="parent"]');
                  if (
                    !i.dataset.destroy ||
                    window.matchMedia(i.dataset.destroy).matches
                  ) {
                    var s = t.closest('[data-accordion="element"]');
                    s.classList.contains("is-active")
                      ? this.closeAccordion(s)
                      : this.openAccordion(s);
                  }
                }
              },
            },
            {
              key: "_windowResizeHandler",
              value: function () {
                this._windowWidth !== window.innerWidth &&
                  ((this._windowWidth = window.innerWidth),
                  this.updateAccordionsHeight());
              },
            },
            {
              key: "closeAllAccordion",
              value: function (e) {
                var t = this;
                e.querySelectorAll('[data-accordion="element"]').forEach(
                  function (i) {
                    i.closest('[data-accordion="parent"]') === e &&
                      t.closeAccordion(i);
                  }
                );
              },
            },
            {
              key: "updateAccordionsHeight",
              value: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null;
                if (e) {
                  var t = e.querySelector('[data-accordion="content"]');
                  return (
                    (t.style.transition = "none"),
                    (t.style.maxHeight = "".concat(t.scrollHeight, "px")),
                    void setTimeout(function () {
                      t.style.transition = null;
                    })
                  );
                }
                var i = document.querySelectorAll(
                  '[data-accordion="element"]:not(.is-active)'
                );
                i.forEach(function (e) {
                  var t = e.closest('[data-accordion="parent"]'),
                    i = e.querySelector('[data-accordion="content"]');
                  !t.dataset.destroy ||
                  window.matchMedia(t.dataset.destroy).matches
                    ? (i.style.maxHeight = null)
                    : (i.style.maxHeight = "100%");
                });
                var s = document.querySelectorAll(
                  '[data-accordion="element"].is-active'
                );
                s.forEach(function (e) {
                  var t = e.querySelector('[data-accordion="content"]'),
                    i = e.closest('[data-accordion="parent"]');
                  !i.dataset.destroy ||
                  window.matchMedia(i.dataset.destroy).matches
                    ? ((t.style.transition = "none"),
                      (t.style.maxHeight = "".concat(t.scrollHeight, "px")),
                      setTimeout(function () {
                        t.style.transition = null;
                      }))
                    : (t.style.maxHeight = "100%");
                });
              },
            },
            {
              key: "fullUpdate",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                (t
                  ? t.querySelectorAll('[data-accordion="element"].is-active')
                  : document.querySelectorAll(
                      '[data-accordion="element"].is-active'
                    )
                ).forEach(function (t) {
                  t.querySelector('[data-accordion="parent"]') ||
                    e.openAccordion(t, i);
                }),
                  this.updateAccordionsHeight();
              },
            },
            {
              key: "openAccordion",
              value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  i = e.closest('[data-accordion="parent"]'),
                  s = e.querySelector('[data-accordion="content"]');
                (this._openHeight += s.scrollHeight),
                  i.hasAttribute("data-single") && this.closeAllAccordion(i),
                  e.classList.add("is-active"),
                  t
                    ? (s.style.maxHeight = "".concat(this._openHeight, "px"))
                    : ((s.style.transition = "none"),
                      (s.style.maxHeight = "".concat(this._openHeight, "px")),
                      setTimeout(function () {
                        s.style.transition = null;
                      })),
                  i.closest('[data-accordion="element"]')
                    ? this.openAccordion(
                        i.closest('[data-accordion="element"]'),
                        t
                      )
                    : (this._openHeight = 0);
              },
            },
            {
              key: "closeAccordion",
              value: function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  i = e.querySelector('[data-accordion="content"]');
                i &&
                  (e.classList.remove("is-active"),
                  t
                    ? (i.style.maxHeight = "0")
                    : ((i.style.transition = "none"),
                      (i.style.maxHeight = "0"),
                      setTimeout(function () {
                        i.style.transition = null;
                      })));
              },
            },
          ]) && s(t.prototype, i),
          n && s(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })(),
      o = i(0);
    Object(o.a)(function () {
      (n = new r()), (window.accordions = n);
    });
  },
  function (e, t, i) {
    "use strict";
    i.r(t);
    var s = i(0),
      n = function () {
        var e = document.createElement("div"),
          t = document.createElement("div");
        (e.style.overflow = "scroll"),
          e.classList.add("scrollbar"),
          document.body.appendChild(e),
          e.appendChild(t);
        var i = e.offsetWidth - t.offsetWidth;
        return document.body.removeChild(e), i;
      };
    Object(s.a)(function () {
      var e = parseInt(
          window
            .getComputedStyle(document.body, null)
            .getPropertyValue("padding-right")
        ),
        t = document.createElement("div");
      document.addEventListener("click", function (i) {
        var s = i.target.closest("a[data-modal], button[data-modal]");
        s &&
          "open" === s.dataset.modal &&
          (function (i) {
            document.body.clientHeight - document.documentElement.clientHeight >
              0 && (document.body.style.paddingRight = e + n() + "px");
            document.body.classList.add("modal-open"),
              i.classList.add("modal--show"),
              (i.style.display = "block"),
              (i.ariaModal = !0),
              (i.ariaHidden = null),
              i.setAttribute("role", "dialog"),
              (t.className = "modal-backdrop"),
              document.body.append(t);
          })(
            document.getElementById((s.hash || s.dataset.modalTarget).slice(1))
          ),
          ((s && "close" === s.dataset.modal) ||
            i.target.matches("[aria-modal]")) &&
            (document.body.classList.remove("modal-open"),
            (document.body.style.paddingRight = ""),
            document.querySelectorAll(".modal").forEach(function (e) {
              e.classList.remove("modal--show"),
                (e.style.display = "none"),
                (e.ariaModal = null),
                (e.ariaHidden = !0),
                e.removeAttribute("role");
            }),
            t.remove());
      });
    });
  },
  function (e, t, i) {
    "use strict";
    i.r(t);
    var s = i(0),
      n = document.querySelectorAll('input[type="tel"]'),
      r = "+7".length,
      o = function (e) {
        var t = "".concat("+7", " (___) ___ __ __"),
          i = t.replace(/\D/g, ""),
          s = 0,
          n = e.value.replace(/\D/g, "");
        i.length >= n.length && (n = i),
          (e.value = t.replace(/./g, function (e) {
            return /[_\d]/.test(e) && s < n.length
              ? n.charAt(s++)
              : s >= n.length
              ? ""
              : e;
          }));
      },
      a = function (e) {
        var t = e.target;
        o(t);
      },
      l = function (e) {
        var t = e.target;
        t.value ||
          ((t.value = "+7"),
          t.addEventListener("input", a),
          t.addEventListener("blur", c),
          t.addEventListener("keydown", d));
      },
      d = function (e) {
        e.target.selectionStart <= r &&
          8 !== e.keyCode &&
          46 !== e.keyCode &&
          e.target.setSelectionRange(r, r),
          (e.target.selectionStart !== r && 1 !== e.target.selectionStart) ||
            8 !== e.keyCode ||
            e.preventDefault(),
          1 === e.target.selectionStart &&
            46 === e.keyCode &&
            e.preventDefault();
      },
      c = function e(t) {
        var i = t.target;
        "+7" === i.value &&
          ((i.value = ""),
          i.removeEventListener("input", a),
          i.removeEventListener("blur", e));
      };
    Object(s.a)(function () {
      n.length &&
        n.forEach(function (e) {
          e.addEventListener("focus", l),
            e.value &&
              (o(e),
              e.addEventListener("input", a),
              e.addEventListener("blur", c),
              e.addEventListener("keydown", d));
        }),
        document.querySelectorAll(".main-nav__link").forEach(function (e) {
          e.addEventListener("click", function () {
            document
              .querySelector(".main-nav__toggler")
              .classList.remove("burger--close"),
              document.getElementById("nav").classList.remove("main-nav--open");
          });
        });
    });
  },
]);
