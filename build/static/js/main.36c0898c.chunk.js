(this["webpackJsonpvilla-akira"] = this["webpackJsonpvilla-akira"] || []).push([
  [0],
  {
    115: function(e, t, a) {},
    155: function(e, t, a) {
      e.exports = a.p + "static/media/Front elve.4a416a06.JPG";
    },
    156: function(e, t, a) {
      e.exports =
        a.p + "static/media/Mount Salah view from dining room.22dfa05a.jpeg";
    },
    157: function(e, t, a) {
      e.exports = a.p + "static/media/14a Main bedroom.eee00942.JPG";
    },
    158: function(e, t, a) {
      e.exports = a.p + "static/media/Salak view2.6497d31e.JPG";
    },
    178: function(e, t, a) {
      e.exports = a.p + "static/media/main0.7b9d6af4.jpg";
    },
    179: function(e, t, a) {
      e.exports = a.p + "static/media/main1.d13653a0.jpg";
    },
    180: function(e, t, a) {
      e.exports = a.p + "static/media/main2.77ec3ccb.jpg";
    },
    181: function(e, t, a) {
      e.exports = a.p + "static/media/main3.99815bb8.png";
    },
    182: function(e, t, a) {
      e.exports = a.p + "static/media/left0.623a11b0.jpg";
    },
    183: function(e, t, a) {
      e.exports = a.p + "static/media/left1.ca341e6e.jpg";
    },
    184: function(e, t, a) {
      e.exports = a.p + "static/media/left2.18e78355.jpg";
    },
    185: function(e, t, a) {
      e.exports = a.p + "static/media/left3.15cf04e8.png";
    },
    186: function(e, t, a) {
      e.exports = a.p + "static/media/right0.1affae18.png";
    },
    187: function(e, t, a) {
      e.exports = a.p + "static/media/right1.47d4a6af.jpg";
    },
    188: function(e, t, a) {
      e.exports = a.p + "static/media/right2.80f204ca.jpg";
    },
    189: function(e, t, a) {
      e.exports = a.p + "static/media/right3.eaf86de2.png";
    },
    190: function(e, t, a) {
      e.exports = a.p + "static/media/0.544b40ec.png";
    },
    191: function(e, t, a) {
      e.exports = a.p + "static/media/1.0cc69e1d.png";
    },
    192: function(e, t, a) {
      e.exports = a.p + "static/media/2.541fb531.png";
    },
    193: function(e, t, a) {
      e.exports = a.p + "static/media/3.17390e12.png";
    },
    194: function(e, t, a) {
      e.exports = a.p + "static/media/06 Big room_rev.1ce9f1a4.png";
    },
    195: function(e, t, a) {
      e.exports = a.p + "static/media/12 Kitchen_1_rev.249ed5ca.png";
    },
    196: function(e, t, a) {},
    197: function(e, t, a) {},
    198: function(e, t, a) {
      "use strict";
      a.r(t);
      a(94), a(95), a(96), a(97);
      var n = a(0),
        i = a.n(n),
        r = a(34),
        s = a(23),
        o = (a(106), a(32)),
        l = a(26),
        c = a(50),
        m = a(71),
        d = a(74),
        u = a.n(d),
        h = a(72),
        g = a(13),
        p = "global/Change_Page",
        f = "global/Change_Inner_Color",
        y = "global/Change_Bar_Color",
        b = "global/READY",
        x = "global/LOAD_IMAGE",
        E = "global/PLACE_IMAGE",
        w = "global/INDONESIA",
        v = {
          page: 1,
          changeInnerColor: !1,
          changeBarColor: !1,
          image: [],
          imageStatus: !1,
          ready: !1,
          indonesia: !1
        };
      var k = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : v,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case w:
              return Object(g.a)({}, e, { indonesia: !e.indonesia });
            case E:
              return Object(g.a)({}, e, { image: t.payload });
            case x:
              return Object(g.a)({}, e, { imageStatus: !0 });
            case b:
              return Object(g.a)({}, e, { ready: !0 });
            case f:
              return Object(g.a)({}, e, { changeInnerColor: t.payload });
            case y:
              return Object(g.a)({}, e, { changeBarColor: t.payload });
            case p:
              return Object(g.a)({}, e, { page: t.payload });
            default:
              return e;
          }
        },
        j = a(17),
        I = "src/Home/DEFAULT_ACTION",
        N = "src/Home/MAX_500",
        O = "src/Home/MAX_1024",
        S = "src/Home/MAX_768",
        A = "src/Home/MIN_1024",
        C = "src/Home/MIN_768",
        T = "src/Home/LOADED",
        M = {
          max500: !1,
          min768: !1,
          min1024: !1,
          max1024: !1,
          max768: !1,
          loaded: []
        };
      var F,
        B = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : M,
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case T:
              return Object(g.a)({}, e, {
                loaded: [].concat(Object(j.a)(e.loaded), [t.payload])
              });
            case A:
              return Object(g.a)({}, e, { min1024: t.payload });
            case C:
              return Object(g.a)({}, e, { min768: t.payload });
            case S:
              return Object(g.a)({}, e, { max768: t.payload });
            case O:
              return Object(g.a)({}, e, { max1024: t.payload });
            case N:
              return Object(g.a)({}, e, { max500: t.payload });
            case I:
            default:
              return e;
          }
        },
        L = u()({ basename: "" }),
        V = [m.a, Object(c.a)(L)],
        z = h.composeWithDevTools.apply(
          void 0,
          [l.applyMiddleware.apply(void 0, V)].concat([])
        ),
        R = Object(l.createStore)(
          ((F = L),
          Object(l.combineReducers)({
            router: Object(o.b)(F),
            global: k,
            home: B
          })),
          {},
          z
        ),
        P = (a(115), a(2)),
        D = a(4),
        H = a(5),
        G = a(7),
        W = a(6),
        J = a(8),
        K = a(200),
        U = a(201),
        _ = a(202),
        q = a(3),
        Q = a(75),
        Y = a.n(Q),
        X = a(31),
        $ = a.n(X),
        Z = a(20),
        ee = a(9),
        te = a(33),
        ae = a(10),
        ne = function(e) {
          return { type: f, payload: e };
        },
        ie = function(e) {
          return { type: y, payload: e };
        };
      function re() {
        return { type: b };
      }
      var se = a(16),
        oe = a(77),
        le = a.n(oe),
        ce = a(78),
        me = a.n(ce);
      function de() {
        var e = Object(P.a)([
          "\n  position: fixed;\n  right: 0;\n  z-index: 101;\n  & > input {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 102;\n    cursor: pointer;\n    width: 50px;\n    height: 50px;\n    opacity: 0;\n    &:checked {\n      & ~ ",
          " {\n        & > div {\n          transform: scale(1);\n          transition-duration: 0.5s;\n          & > div {\n            opacity: 1;\n            transition: opacity 0.4s ease 0.4s;\n          }\n        }\n      }\n      & + ",
          " > div {\n        transform: rotate(135deg);\n        &:before,\n        &:after {\n          top: 0;\n          transform: rotate(90deg);\n        }\n      }\n      &:hover + ",
          " > div {\n        transform: rotate(225deg);\n      }\n    }\n  }\n"
        ]);
        return (
          (de = function() {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = Object(P.a)([
          '\n  position: absolute;\n  right: 0;\n  z-index: 101;\n  width: 60px;\n  height: 60px;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  & > div {\n    position: relative;\n    flex: none;\n    width: 100%;\n    height: 2px;\n    background: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.4s ease;\n    &::after,\n    &::before {\n      content: "";\n      position: absolute;\n      z-index: 101;\n      top: -10px;\n      width: 100%;\n      height: 2px;\n      background: inherit;\n    }\n    &::after {\n      top: 10px;\n    }\n  }\n  @media screen and (min-width: 768px) and (max-width: 1024px) {\n    margin: 0.3rem 0;\n    height: 62px;\n    width: 62px;\n  }\n'
        ]);
        return (
          (ue = function() {
            return e;
          }),
          e
        );
      }
      function he() {
        var e = Object(P.a)([
          "\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  visibility: ",
          ";\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  & > div {\n    background: #46564a;\n    border-radius: 50%;\n    width: 250vw;\n    height: 250vw;\n    display: flex;\n    flex: none;\n    align-items: center;\n    justify-content: center;\n    transform: scale(0);\n    transition: all 0.4s ease;\n    & > div {\n      text-align: center;\n      max-width: 90vw;\n      max-height: 100vh;\n      opacity: 0;\n      transition: opacity 0.4s ease;\n      & > ul {\n        padding: 0;\n        & > li {\n          list-style: none;\n          color: #fff;\n          font-size: 1rem;\n          padding: 1rem;\n          & > a {\n            color: inherit;\n            text-decoration: none;\n            transition: color 0.4s ease;\n          }\n        }\n      }\n    }\n  }\n"
        ]);
        return (
          (he = function() {
            return e;
          }),
          e
        );
      }
      function ge() {
        var e = Object(P.a)([
          "\n  color: inherit;\n  :hover {\n    text-decoration: none;\n    color: inherit;\n  }\n"
        ]);
        return (
          (ge = function() {
            return e;
          }),
          e
        );
      }
      function pe() {
        var e = Object(P.a)([
          "\n  font-size: 0.8rem;\n  color: ",
          ";\n  margin: 0.5rem;\n  cursor: pointer;\n"
        ]);
        return (
          (pe = function() {
            return e;
          }),
          e
        );
      }
      function fe() {
        var e = Object(P.a)([""]);
        return (
          (fe = function() {
            return e;
          }),
          e
        );
      }
      function ye() {
        var e = Object(P.a)([
          "\n  transition: 0.5s;\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n  background: ",
          ";\n  display: ",
          ";\n"
        ]);
        return (
          (ye = function() {
            return e;
          }),
          e
        );
      }
      var be = q.b.div(
          ye(),
          function(e) {
            return e.changeBar ? "#46564A" : "none";
          },
          function(e) {
            return e.ready ? "block" : "none";
          }
        ),
        xe =
          (q.b.div(fe()),
          q.b.h6(pe(), function(e) {
            return e.changeColor ? "#46564A" : "white";
          })),
        Ee = q.b.a(ge()),
        we = q.b.div(he(), function(e) {
          return e.hide ? "visible" : "hidden";
        }),
        ve = q.b.div(ue()),
        ke = q.b.div(de(), we, ve, ve),
        je = (function(e) {
          function t(e) {
            var a;
            return (
              Object(D.a)(this, t),
              ((a = Object(G.a)(
                this,
                Object(W.a)(t).call(this, e)
              )).openMenuFunc = function() {
                a.state.alreadyOpen
                  ? ((document.body.style.height = ""),
                    (document.body.style.overflow = ""),
                    a.setState({ openMenu: !1, alreadyOpen: !1 }))
                  : ((document.body.style.height = "100vh"),
                    (document.body.style.overflow = "hidden"),
                    a.setState({ openMenu: !0, alreadyOpen: !0 }));
              }),
              (a.closeMenuFunc = function() {
                (document.body.style.height = ""),
                  (document.body.style.overflow = ""),
                  setTimeout(function() {
                    (document.getElementById("menuInput").checked = !1),
                      a.setState({ openMenu: !1, alreadyOpen: !1 });
                  }, 10);
              }),
              (a.state = { openMenu: !1, alreadyOpen: !1 }),
              a
            );
          }
          return (
            Object(J.a)(t, e),
            Object(H.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this;
                  return i.a.createElement(
                    be,
                    {
                      id: "navbar",
                      ready: this.props.ready,
                      changeBar: this.props.changeBar
                    },
                    i.a.createElement(
                      se.Fade,
                      { top: !0, when: this.props.ready },
                      i.a.createElement(
                        Z.a,
                        { fluid: !0 },
                        i.a.createElement(
                          ee.a,
                          { className: "mt-1" },
                          i.a.createElement(
                            "a",
                            {
                              href: "#landing-page",
                              className: "text-center",
                              style: { zIndex: 105 },
                              onClick: this.closeMenuFunc
                            },
                            i.a.createElement("img", {
                              src: this.props.changeColor ? me.a : le.a,
                              alt: "",
                              className: "img-fluid my-1 ml-3",
                              style: { height: "3rem", cursor: "pointer" }
                            })
                          ),
                          this.props.max1024
                            ? i.a.createElement(
                                ke,
                                { className: "align-content-center" },
                                i.a.createElement("input", {
                                  type: "checkbox",
                                  id: "menuInput",
                                  onClick: this.openMenuFunc
                                }),
                                i.a.createElement(
                                  ve,
                                  null,
                                  i.a.createElement("div", null)
                                ),
                                i.a.createElement(
                                  we,
                                  { hide: this.state.openMenu },
                                  i.a.createElement(
                                    "div",
                                    null,
                                    i.a.createElement(
                                      "div",
                                      null,
                                      i.a.createElement(
                                        "ul",
                                        null,
                                        i.a.createElement(
                                          "li",
                                          null,
                                          i.a.createElement(
                                            "a",
                                            {
                                              href: "#about",
                                              onClick: this.closeMenuFunc
                                            },
                                            this.props.indonesia
                                              ? "TENTANG"
                                              : "ABOUT"
                                          )
                                        ),
                                        i.a.createElement(
                                          "li",
                                          null,
                                          i.a.createElement(
                                            "a",
                                            {
                                              href: "#facilities",
                                              onClick: this.closeMenuFunc
                                            },
                                            this.props.indonesia
                                              ? "FASILITAS"
                                              : "FACILITIES"
                                          )
                                        ),
                                        i.a.createElement(
                                          "li",
                                          null,
                                          i.a.createElement(
                                            "a",
                                            {
                                              href: "#night-rates",
                                              onClick: this.closeMenuFunc
                                            },
                                            this.props.indonesia
                                              ? "TARIF"
                                              : "NIGHTLY RATES"
                                          )
                                        ),
                                        i.a.createElement(
                                          "li",
                                          null,
                                          i.a.createElement(
                                            "a",
                                            {
                                              href: "#testimoni",
                                              onClick: this.closeMenuFunc
                                            },
                                            this.props.indonesia
                                              ? "TESTIMONI"
                                              : "TESTIMONIALS"
                                          )
                                        ),
                                        i.a.createElement(
                                          "li",
                                          null,
                                          i.a.createElement(
                                            "a",
                                            {
                                              onClick: function() {
                                                e.props.changeLanguage(),
                                                  e.closeMenuFunc();
                                              },
                                              style: { cursor: "pointer" }
                                            },
                                            this.props.indonesia
                                              ? i.a.createElement(
                                                  "u",
                                                  null,
                                                  "ID"
                                                )
                                              : "ID",
                                            "/",
                                            this.props.indonesia
                                              ? "EN"
                                              : i.a.createElement(
                                                  "u",
                                                  null,
                                                  "EN"
                                                )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            : i.a.createElement(
                                "div",
                                {
                                  className:
                                    "align-content-center row ml-auto mr-1"
                                },
                                i.a.createElement(
                                  xe,
                                  { changeColor: this.props.changeColor },
                                  i.a.createElement(
                                    Ee,
                                    { href: "#about" },
                                    this.props.indonesia ? "TENTANG" : "ABOUT"
                                  )
                                ),
                                i.a.createElement(
                                  xe,
                                  { changeColor: this.props.changeColor },
                                  i.a.createElement(
                                    Ee,
                                    { href: "#facilities" },
                                    this.props.indonesia
                                      ? "FASILITAS"
                                      : "FACILITIES"
                                  )
                                ),
                                i.a.createElement(
                                  xe,
                                  { changeColor: this.props.changeColor },
                                  i.a.createElement(
                                    Ee,
                                    { href: "#night-rates" },
                                    this.props.indonesia
                                      ? "TARIF"
                                      : "NIGHTLY RATES"
                                  )
                                ),
                                i.a.createElement(
                                  xe,
                                  { changeColor: this.props.changeColor },
                                  i.a.createElement(
                                    Ee,
                                    { href: "#testimoni" },
                                    this.props.indonesia
                                      ? "TESTIMONI"
                                      : "TESTIMONIALS"
                                  )
                                ),
                                i.a.createElement(
                                  xe,
                                  { changeColor: this.props.changeColor },
                                  i.a.createElement(
                                    Ee,
                                    { onClick: this.props.changeLanguage },
                                    this.props.indonesia
                                      ? i.a.createElement("u", null, "ID")
                                      : "ID",
                                    "/",
                                    this.props.indonesia
                                      ? "EN"
                                      : i.a.createElement("u", null, "EN")
                                  )
                                )
                              )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.Component);
      function Ie() {
        var e = Object(P.a)(["\n  font-family: Lato, Sans-serif;\n"]);
        return (
          (Ie = function() {
            return e;
          }),
          e
        );
      }
      var Ne = q.b.div(Ie());
      function Oe() {
        var e = Object(P.a)([
          "\n  transition: 0.5s;\n  :hover {\n    transform: translateX(",
          "0.5rem);\n  }\n"
        ]);
        return (
          (Oe = function() {
            return e;
          }),
          e
        );
      }
      function Se() {
        var e = Object(P.a)([
          "\n  border: solid ",
          ";\n  border-width: ",
          ";\n  display: inline-block;\n  padding: ",
          ";\n  transform: rotate(\n    ",
          "\n  );\n  -webkit-transform: rotate(\n    ",
          "\n  );\n"
        ]);
        return (
          (Se = function() {
            return e;
          }),
          e
        );
      }
      function Ae() {
        var e = Object(P.a)([
          "\n  background-color: white;\n  width: ",
          ";\n  height: ",
          ";\n  padding: 0;\n  border-radius: 50%;\n  border: none;\n  box-shadow: 0px 0px 18px lightgray;\n  transition: 0.5s;\n  &:hover {\n    box-shadow: 0px 0px 30px lightgray;\n    transform: scale(1.1);\n  }\n  &:focus {\n    outline: none;\n  }\n"
        ]);
        return (
          (Ae = function() {
            return e;
          }),
          e
        );
      }
      function Ce() {
        var e = Object(P.a)(["\n  color: #707070;\n  font-size: 0.8rem;\n"]);
        return (
          (Ce = function() {
            return e;
          }),
          e
        );
      }
      function Te() {
        var e = Object(P.a)(["\n  color: #707070;\n"]);
        return (
          (Te = function() {
            return e;
          }),
          e
        );
      }
      function Me() {
        var e = Object(P.a)([
          "\n  background: ",
          ";\n  height: 4px;\n  width: ",
          ";\n  margin: 0;\n"
        ]);
        return (
          (Me = function() {
            return e;
          }),
          e
        );
      }
      function Fe() {
        var e = Object(P.a)([""]);
        return (
          (Fe = function() {
            return e;
          }),
          e
        );
      }
      var Be = q.b.div(Fe()),
        Le = q.b.hr(
          Me(),
          function(e) {
            return e.color;
          },
          function(e) {
            return e.size;
          }
        ),
        Ve = q.b.h4(Te()),
        ze = q.b.p(Ce()),
        Re = q.b.button(
          Ae(),
          function(e) {
            return e.size;
          },
          function(e) {
            return e.size;
          }
        ),
        Pe = q.b.i(
          Se(),
          function(e) {
            return e.color;
          },
          function(e) {
            return "0 ".concat(e.width, "rem ").concat(e.width, "rem 0");
          },
          function(e) {
            return "".concat(e.size, "rem");
          },
          function(e) {
            return e.left ? "135deg" : "-45deg";
          },
          function(e) {
            return e.left ? "135deg" : "-45deg";
          }
        ),
        De = q.b.div(Oe(), function(e) {
          return e.left ? "-" : "";
        }),
        He = function(e) {
          var t = e.onClick,
            a = (e.style, e.className);
          return i.a.createElement(
            De,
            { className: a },
            i.a.createElement(
              Re,
              {
                size: "2.5rem",
                className: "row align-content-center",
                style: { position: "relative", cursor: "pointer" },
                onClick: t
              },
              i.a.createElement(Pe, {
                width: 0.2,
                size: 0.5,
                color: "#707070",
                style: { position: "absolute", left: "0.5rem", top: "0.65rem" }
              })
            )
          );
        },
        Ge = function(e) {
          var t = e.onClick,
            a = (e.style, e.className);
          return i.a.createElement(
            De,
            { left: !0, className: a },
            i.a.createElement(
              Re,
              {
                size: "2.5rem",
                className: "row align-content-center",
                style: { position: "relative", cursor: "pointer" },
                onClick: t
              },
              i.a.createElement(Pe, {
                left: !0,
                width: 0.2,
                size: 0.5,
                color: "#707070",
                style: { position: "absolute", left: "0.8rem", top: "0.65rem" }
              })
            )
          );
        },
        We = a(12),
        Je = a(82),
        Ke = a.n(Je);
      function Ue() {
        var e = Object(P.a)([
          "\n  font-size: ",
          "rem;\n  z-index: 1;\n  color: white;\n  text-shadow: 0px 0px 3rem black;\n  @media screen and (max-width: 550px) {\n    font-size: ",
          "rem;\n  }\n  @media screen and (min-width: 768px) and (max-width: 1440px) {\n    font-size: ",
          "rem;\n  }\n"
        ]);
        return (
          (Ue = function() {
            return e;
          }),
          e
        );
      }
      function _e() {
        var e = Object(P.a)([
          "\n  position: relative;\n  overflow: hidden;\n  height: 100vh;\n"
        ]);
        return (
          (_e = function() {
            return e;
          }),
          e
        );
      }
      var qe = q.b.div(_e()),
        Qe = q.b.h1(
          Ue(),
          function(e) {
            return e.indonesia ? 3.2 : 4;
          },
          function(e) {
            return e.indonesia ? 2.1 : 2.7;
          },
          function(e) {
            return e.indonesia ? 2.7 : 3.4;
          }
        ),
        Ye = (function(e) {
          function t(e) {
            var a;
            return (
              Object(D.a)(this, t),
              ((a = Object(G.a)(this, Object(W.a)(t).call(this, e))).state = {
                change: !1
              }),
              a
            );
          }
          return (
            Object(J.a)(t, e),
            Object(H.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function(e, t) {
                  e.children.key !== this.props.children.key &&
                    this.setState({ change: !0 });
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e, t, a) {
                  var n = this;
                  e.children.key !== this.props.children.key &&
                    setTimeout(function() {
                      n.setState({ change: !1 });
                    }, 500);
                }
              },
              {
                key: "render",
                value: function() {
                  return i.a.createElement(
                    se.Fade,
                    { when: !this.state.change },
                    this.props.children
                  );
                }
              }
            ]),
            t
          );
        })(i.a.Component),
        Xe = (function(e) {
          function t() {
            return (
              Object(D.a)(this, t),
              Object(G.a)(this, Object(W.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(J.a)(t, e),
            Object(H.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.indonesia;
                  return i.a.createElement(
                    qe,
                    { id: "landing-page", className: "mb-3" },
                    i.a.createElement(
                      "div",
                      { id: "landing-image-container" },
                      i.a.createElement("img", {
                        src: Ke.a,
                        alt: "",
                        className: "img-fluid",
                        onLoad: function() {
                          e.props.readyFunc();
                        },
                        id: "landing-image"
                      })
                    ),
                    i.a.createElement(
                      ee.a,
                      { className: "m-0 mr-2", style: { height: "100%" } },
                      i.a.createElement(
                        We.a,
                        {
                          md: 8,
                          lg: 8,
                          className: "ml-auto align-self-center"
                        },
                        i.a.createElement(
                          Ye,
                          null,
                          t
                            ? i.a.createElement(
                                Qe,
                                {
                                  key: 10,
                                  indonesia: t,
                                  className: "text-right"
                                },
                                "TEMPAT BERSEMBUNYI DENGAN PEMANDANGAN PEGUNUNGAN."
                              )
                            : i.a.createElement(
                                Qe,
                                { key: 11, className: "text-right" },
                                "A HIDING PLACE WITH MOUNTAINS VIEW."
                              )
                        ),
                        i.a.createElement(
                          "h5",
                          { id: "book-now", className: "text-right mt-5" },
                          i.a.createElement(
                            Ye,
                            null,
                            t
                              ? i.a.createElement(
                                  "a",
                                  {
                                    key: 10,
                                    href:
                                      "https://www.airbnb.com/rooms/31393955"
                                  },
                                  "PESAN SEKARANG"
                                )
                              : i.a.createElement(
                                  "a",
                                  {
                                    key: 11,
                                    href:
                                      "https://www.airbnb.com/rooms/31393955"
                                  },
                                  "BOOK NOW"
                                )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.Component);
      var $e = Object(s.c)(null, function(e) {
          return {
            readyFunc: function() {
              return e(re());
            }
          };
        })(Xe),
        Ze = a(36),
        et = a(30);
      function tt() {
        var e = Object(P.a)([
          "\n  overflow: hidden;\n  height: inherit;\n  width: inherit;\n  \n  & img{\n  cursor: pointer;\n  transition: 0.5s;\n  object-fit: cover;\n  width: inherit;\n    &:hover{\n      transform: scale(1.2);\n    } \n  }\n"
        ]);
        return (
          (tt = function() {
            return e;
          }),
          e
        );
      }
      function at() {
        var e = Object(P.a)(["\n   margin-top: 6rem;\n"]);
        return (
          (at = function() {
            return e;
          }),
          e
        );
      }
      var nt = q.b.div(at()),
        it = q.b.div(tt()),
        rt = [a(155), a(55), a(156), a(56), a(157), a(158)],
        st = [
          { src: a(57), styleNow: { objectFit: "cover", width: "inherit" } },
          { src: a(58), styleNow: { objectFit: "cover", width: "inherit" } },
          { src: a(59), styleNow: { objectFit: "cover", width: "inherit" } },
          { src: a(60), styleNow: { objectFit: "cover", width: "inherit" } },
          { src: a(61), styleNow: { objectFit: "cover", width: "inherit" } },
          { src: a(62), styleNow: { objectFit: "cover", width: "inherit" } }
        ];
      a(159);
      function ot() {
        var e = Object(P.a)(["\n \n"]);
        return (
          (ot = function() {
            return e;
          }),
          e
        );
      }
      var lt = q.b.div(ot());
      function ct() {
        var e = Object(P.a)([
          "\n  height: inherit;\n  width: inherit;\n  overflow: hidden;\n  position: relative;\n"
        ]);
        return (
          (ct = function() {
            return e;
          }),
          e
        );
      }
      function mt() {
        var e = Object(P.a)(["\n  width: inherit;\n  height: inherit;\n"]);
        return (
          (mt = function() {
            return e;
          }),
          e
        );
      }
      var dt = q.b.div(mt()),
        ut = q.b.div(ct());
      function ht() {
        var e = Object(P.a)([
          "\n                                        display: flex;\n                                        justify-content: center;\n                                        align-self: center;\n                                    "
        ]);
        return (
          (ht = function() {
            return e;
          }),
          e
        );
      }
      function gt() {
        var e = Object(P.a)([
          "\n                                        display: flex;\n                                        justify-content: center;\n                                        align-self: center;\n                                        align-content: center;\n                                    "
        ]);
        return (
          (gt = function() {
            return e;
          }),
          e
        );
      }
      var pt = (function(e) {
          function t() {
            return (
              Object(D.a)(this, t),
              Object(G.a)(this, Object(W.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(J.a)(t, e),
            Object(H.a)(t, [
              {
                key: "render",
                value: function() {
                  return i.a.createElement(
                    dt,
                    null,
                    this.props.right &&
                      i.a.createElement(
                        se.Fade,
                        { left: !0, opposite: !0, when: !this.props.change },
                        i.a.createElement(
                          "div",
                          {
                            style: {
                              height: "inherit",
                              width: "inherit",
                              overflow: "hidden"
                            }
                          },
                          i.a.createElement(
                            ut,
                            null,
                            i.a.createElement(
                              se.Fade,
                              { when: !this.props.ready },
                              i.a.createElement(
                                Z.a,
                                {
                                  style: {
                                    position: "absolute",
                                    height: this.props.height,
                                    width: this.props.width,
                                    zIndex: this.props.ready ? -1e3 : 80
                                  }
                                },
                                i.a.createElement(
                                  ee.a,
                                  {
                                    className:
                                      "justify-content-center align-content-center",
                                    style: {
                                      height: "inherit",
                                      width: "inherit"
                                    }
                                  },
                                  i.a.createElement(te.BeatLoader, {
                                    css: Object(ae.css)(gt()),
                                    size: "3rem",
                                    color: "#46564A",
                                    loading: !this.props.ready
                                  })
                                )
                              )
                            ),
                            i.a.createElement(
                              "div",
                              {
                                style: {
                                  width: "inherit",
                                  height: "inherit",
                                  display: this.props.ready ? null : "none"
                                }
                              },
                              i.a.createElement(
                                se.Fade,
                                { when: this.props.ready },
                                i.a.createElement(
                                  "div",
                                  {
                                    style: {
                                      height: "inherit",
                                      width: "inherit"
                                    }
                                  },
                                  i.a.createElement("img", {
                                    onLoad: this.props.onLoad,
                                    src: this.props.src,
                                    style: Object(g.a)(
                                      {
                                        height: "inherit",
                                        position: "absolute"
                                      },
                                      this.props.style
                                    )
                                  })
                                )
                              )
                            )
                          )
                        )
                      ),
                    this.props.left &&
                      i.a.createElement(
                        se.Fade,
                        { right: !0, opposite: !0, when: !this.props.change },
                        i.a.createElement(
                          "div",
                          {
                            style: {
                              height: "inherit",
                              width: "inherit",
                              overflow: "hidden"
                            }
                          },
                          i.a.createElement(
                            ut,
                            null,
                            i.a.createElement(
                              se.Fade,
                              { when: !this.props.ready },
                              i.a.createElement(
                                Z.a,
                                {
                                  style: {
                                    position: "absolute",
                                    height: this.props.height,
                                    width: this.props.width,
                                    zIndex: this.props.ready ? -1e3 : 80
                                  }
                                },
                                i.a.createElement(
                                  ee.a,
                                  {
                                    className:
                                      "justify-content-center align-content-center",
                                    style: {
                                      height: "inherit",
                                      width: "inherit"
                                    }
                                  },
                                  i.a.createElement(te.BeatLoader, {
                                    css: Object(ae.css)(ht()),
                                    size: "1rem",
                                    color: "#46564A",
                                    loading: !this.props.ready
                                  })
                                )
                              )
                            ),
                            i.a.createElement(
                              "div",
                              {
                                style: {
                                  width: "inherit",
                                  height: "inherit",
                                  display: this.props.ready ? null : "none"
                                }
                              },
                              i.a.createElement(
                                se.Fade,
                                { when: this.props.ready },
                                i.a.createElement(
                                  "div",
                                  {
                                    style: {
                                      height: "inherit",
                                      width: "inherit"
                                    }
                                  },
                                  i.a.createElement("img", {
                                    onLoad: this.props.onLoad,
                                    src: this.props.src,
                                    style: Object(g.a)(
                                      {
                                        height: "inherit",
                                        position: "absolute"
                                      },
                                      this.props.style
                                    )
                                  })
                                )
                              )
                            )
                          )
                        )
                      )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.Component),
        ft = (function(e) {
          function t(e) {
            var a;
            return (
              Object(D.a)(this, t),
              ((a = Object(G.a)(this, Object(W.a)(t).call(this, e))).state = {
                readyLeft: !1,
                readyMain: !1,
                readyRight: !1,
                loadedLeft: [],
                loadedMain: [],
                loadedRight: []
              }),
              a
            );
          }
          return (
            Object(J.a)(t, e),
            Object(H.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function(e, t) {
                  e.prevImage &&
                    (this.state.loadedLeft.includes(e.prevImage)
                      ? this.setState({
                          readyLeft: !0,
                          loadedLeft: Object(j.a)(this.state.loadedLeft)
                        })
                      : this.setState({
                          readyLeft: !1,
                          loadedLeft: Object(j.a)(this.state.loadedLeft)
                        })),
                    this.state.loadedMain.includes(e.nowImage)
                      ? this.setState({
                          readyMain: !0,
                          loadedMain: Object(j.a)(this.state.loadedMain)
                        })
                      : this.setState({
                          readyMain: !1,
                          loadedMain: Object(j.a)(this.state.loadedMain)
                        }),
                    e.nextImage &&
                      (this.state.loadedRight.includes(e.nextImage)
                        ? this.setState({
                            readyRight: !0,
                            loadedRight: Object(j.a)(this.state.loadedRight)
                          })
                        : this.setState({
                            readyRight: !1,
                            loadedRight: Object(j.a)(this.state.loadedRight)
                          }));
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this;
                  return i.a.createElement(
                    lt,
                    null,
                    i.a.createElement(
                      ee.a,
                      null,
                      this.props.prevImage &&
                        i.a.createElement(
                          "div",
                          {
                            style: {
                              height: this.props.sideHeight,
                              width: this.props.sideWidth,
                              overflow: "hidden",
                              position: "relative"
                            },
                            className: "align-self-center mx-auto"
                          },
                          !this.props.prev &&
                            i.a.createElement(pt, {
                              height: this.props.sideHeight,
                              width: this.props.sideWidth,
                              ready: this.state.readyLeft,
                              change: this.props.change,
                              src: this.props.prevImage,
                              style: this.props.prevStyle,
                              onLoad: function() {
                                e.setState({
                                  readyLeft: !0,
                                  loadedLeft: [].concat(
                                    Object(j.a)(e.state.loadedLeft),
                                    [e.props.prevImage]
                                  )
                                });
                              },
                              left: !0
                            }),
                          this.props.prev &&
                            i.a.createElement(pt, {
                              height: this.props.sideHeight,
                              width: this.props.sideWidth,
                              ready: this.state.readyLeft,
                              change: this.props.change,
                              src: this.props.prevImage,
                              style: this.props.prevStyle,
                              onLoad: function() {
                                e.setState({
                                  readyLeft: !0,
                                  loadedLeft: [].concat(
                                    Object(j.a)(e.state.loadedLeft),
                                    [e.props.prevImage]
                                  )
                                });
                              },
                              right: !0
                            })
                        ),
                      i.a.createElement(
                        "div",
                        {
                          style: {
                            height: this.props.mainHeight,
                            overflow: "hidden",
                            width: this.props.mainWidth,
                            position: "relative",
                            cursor: this.props.zoom ? "pointer" : ""
                          },
                          className: "align-self-center mx-auto",
                          onClick:
                            this.props.zoomFunc && this.state.readyMain
                              ? this.props.zoomFunc
                              : null
                        },
                        !this.props.prev &&
                          i.a.createElement(pt, {
                            height: this.props.mainHeight,
                            width: this.props.mainWidth,
                            ready: this.state.readyMain,
                            change: this.props.change,
                            src: this.props.nowImage,
                            style: this.props.nowStyle,
                            left: !0,
                            onLoad: function() {
                              e.setState({
                                readyMain: !0,
                                loadedMain: [].concat(
                                  Object(j.a)(e.state.loadedMain),
                                  [e.props.nowImage]
                                )
                              });
                            }
                          }),
                        this.props.prev &&
                          i.a.createElement(pt, {
                            height: this.props.mainHeight,
                            width: this.props.mainWidth,
                            ready: this.state.readyMain,
                            change: this.props.change,
                            src: this.props.nowImage,
                            style: this.props.nowStyle,
                            onLoad: function() {
                              e.setState({
                                readyMain: !0,
                                loadedMain: [].concat(
                                  Object(j.a)(e.state.loadedMain),
                                  [e.props.nowImage]
                                )
                              });
                            },
                            right: !0
                          })
                      ),
                      this.props.nextImage &&
                        i.a.createElement(
                          "div",
                          {
                            style: {
                              height: this.props.sideHeight,
                              overflow: "hidden",
                              width: this.props.sideWidth,
                              position: "relative"
                            },
                            className: "align-self-center mx-auto"
                          },
                          !this.props.prev &&
                            i.a.createElement(pt, {
                              height: this.props.sideHeight,
                              width: this.props.sideWidth,
                              ready: this.state.readyRight,
                              change: this.props.change,
                              src: this.props.nextImage,
                              style: this.props.nextStyle,
                              onLoad: function() {
                                e.setState({
                                  readyRight: !0,
                                  loadedRight: [].concat(
                                    Object(j.a)(e.state.loadedRight),
                                    [e.props.nextImage]
                                  )
                                });
                              },
                              left: !0
                            }),
                          this.props.prev &&
                            i.a.createElement(pt, {
                              height: this.props.sideHeight,
                              width: this.props.sideWidth,
                              ready: this.state.readyRight,
                              change: this.props.change,
                              src: this.props.nextImage,
                              style: this.props.nextStyle,
                              onLoad: function() {
                                e.setState({
                                  readyRight: !0,
                                  loadedRight: [].concat(
                                    Object(j.a)(e.state.loadedRight),
                                    [e.props.nextImage]
                                  )
                                });
                              },
                              right: !0
                            })
                        )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.Component),
        yt =
          (a(160),
          (function(e) {
            function t(e) {
              var a;
              return (
                Object(D.a)(this, t),
                ((a = Object(G.a)(
                  this,
                  Object(W.a)(t).call(this, e)
                )).openViewer = function(e) {
                  (document.body.style.height = "100vh"),
                    (document.body.style.overflow = "hidden"),
                    a.setState({ showViewer: !0, indexPhoto: e });
                }),
                (a.prevImage = function() {
                  a.setState({ prev: !0 }),
                    setTimeout(function() {
                      return a.setState({
                        change: !0,
                        nowIndex:
                          (a.state.nowIndex + a.state.images.length - 1) %
                          a.state.images.length,
                        nowImage:
                          st[
                            (a.state.nowIndex + a.state.images.length - 1) %
                              a.state.images.length
                          ].src,
                        nowStyle:
                          st[
                            (a.state.nowIndex + a.state.images.length - 1) %
                              a.state.images.length
                          ].styleNow,
                        indexViewer:
                          (a.state.nowIndex + a.state.images.length - 1) %
                          a.state.images.length
                      });
                    }, 2),
                    setTimeout(function() {
                      return a.setState({ change: !1 });
                    }, 600);
                }),
                (a.nextImage = function() {
                  a.setState({ prev: !1 }),
                    setTimeout(function() {
                      return a.setState({
                        change: !0,
                        nowIndex:
                          (a.state.nowIndex + 1) % a.state.images.length,
                        nowImage:
                          st[(a.state.nowIndex + 1) % a.state.images.length]
                            .src,
                        nowStyle:
                          st[(a.state.nowIndex + 1) % a.state.images.length]
                            .styleNow,
                        indexViewer:
                          (a.state.nowIndex + 1) % a.state.images.length
                      });
                    }, 2),
                    setTimeout(function() {
                      return a.setState({ change: !1 });
                    }, 600);
                }),
                (a.state = {
                  images: st,
                  showViewer: !1,
                  indexPhoto: 0,
                  change: !1,
                  prev: !1,
                  nowIndex: 0,
                  nowImage: st[0].src,
                  nowStyle: st[0].styleNow,
                  indexViewer: 0
                }),
                a
              );
            }
            return (
              Object(J.a)(t, e),
              Object(H.a)(t, [
                {
                  key: "render",
                  value: function() {
                    var e = this,
                      t = this.props.indonesia;
                    return i.a.createElement(
                      nt,
                      { id: "about", className: "part-container mb-5" },
                      i.a.createElement(
                        Z.a,
                        { style: { height: "100%" }, fluid: !0 },
                        i.a.createElement(
                          ee.a,
                          Object(Ze.a)(
                            {
                              style: { height: "inherit" },
                              className: "justify-content-center"
                            },
                            "style",
                            { flexWrap: "wrap-reverse" }
                          ),
                          i.a.createElement(
                            We.a,
                            {
                              md: 10,
                              lg: 4,
                              xl: 4,
                              className: "align-self-end mx-2"
                            },
                            i.a.createElement(
                              Ye,
                              null,
                              t
                                ? i.a.createElement(
                                    n.Fragment,
                                    { key: 2 },
                                    i.a.createElement(
                                      Ve,
                                      { className: "mb-3" },
                                      "TENTANG VILLA AKIRA"
                                    ),
                                    i.a.createElement(Le, {
                                      color: "#707070",
                                      size: "17.5rem",
                                      className: "float-left"
                                    })
                                  )
                                : i.a.createElement(
                                    n.Fragment,
                                    { key: 1 },
                                    i.a.createElement(
                                      Ve,
                                      { className: "mb-3" },
                                      "ABOUT VILLA AKIRA"
                                    ),
                                    i.a.createElement(Le, {
                                      color: "#707070",
                                      size: "15.4rem",
                                      className: "float-left"
                                    })
                                  )
                            ),
                            i.a.createElement("br", null),
                            this.props.max1024
                              ? i.a.createElement(
                                  ee.a,
                                  { className: "justify-content-center my-4" },
                                  i.a.createElement(
                                    De,
                                    {
                                      left: !0,
                                      className: "mx-5 align-self-center"
                                    },
                                    i.a.createElement(
                                      Re,
                                      {
                                        size: "2.5rem",
                                        className: "row align-content-center",
                                        style: {
                                          position: "relative",
                                          cursor: "pointer"
                                        },
                                        onClick: this.prevImage
                                      },
                                      i.a.createElement(Pe, {
                                        left: !0,
                                        width: 0.2,
                                        size: 0.5,
                                        color: "#707070",
                                        style: {
                                          position: "absolute",
                                          left: "0.8rem",
                                          top: "0.65rem"
                                        }
                                      })
                                    )
                                  ),
                                  i.a.createElement(
                                    ft,
                                    Object.assign({}, this.state, {
                                      mainHeight: "12rem",
                                      mainWidth: "10rem",
                                      zoom: !0,
                                      zoomFunc: function() {
                                        (document.body.style.height = "100vh"),
                                          (document.body.style.overflow =
                                            "hidden"),
                                          e.setState({ showViewer: !0 });
                                      }
                                    })
                                  ),
                                  i.a.createElement(
                                    De,
                                    { className: "mx-5 align-self-center" },
                                    i.a.createElement(
                                      Re,
                                      {
                                        size: "2.5rem",
                                        className: "row align-content-center",
                                        style: {
                                          position: "relative",
                                          cursor: "pointer"
                                        },
                                        onClick: this.nextImage
                                      },
                                      i.a.createElement(Pe, {
                                        width: 0.2,
                                        size: 0.5,
                                        color: "#707070",
                                        style: {
                                          position: "absolute",
                                          left: "0.5rem",
                                          top: "0.65rem"
                                        }
                                      })
                                    )
                                  ),
                                  this.state.showViewer &&
                                    i.a.createElement(et.a, {
                                      mainSrc: rt[this.state.indexViewer],
                                      nextSrc:
                                        rt[
                                          (this.state.indexViewer + 1) %
                                            rt.length
                                        ],
                                      prevSrc:
                                        rt[
                                          (this.state.indexViewer +
                                            rt.length -
                                            1) %
                                            rt.length
                                        ],
                                      onMovePrevRequest: function() {
                                        return e.setState({
                                          indexViewer:
                                            (e.state.indexViewer +
                                              rt.length -
                                              1) %
                                            rt.length
                                        });
                                      },
                                      onMoveNextRequest: function() {
                                        return e.setState({
                                          indexViewer:
                                            (e.state.indexViewer + 1) %
                                            rt.length
                                        });
                                      },
                                      onCloseRequest: function() {
                                        (document.body.style.height = ""),
                                          (document.body.style.overflow = ""),
                                          e.setState({ showViewer: !1 });
                                      }
                                    })
                                )
                              : null,
                            i.a.createElement(
                              Ye,
                              null,
                              t
                                ? i.a.createElement(
                                    n.Fragment,
                                    { key: 2 },
                                    i.a.createElement(
                                      ze,
                                      null,
                                      "Villa Akira terletak di Megamendung, Bogor, 870 m di atas permukaan laut, di atas bukit yang dikelilingi oleh tiga gunung, yaitu Gunung Salak, Gunung Pangrango dan Gunung Gede. Villa Akira hanya 15 menit dari Taman Safari dan banyak tempat wisata lainnya di Puncak."
                                    ),
                                    i.a.createElement(
                                      ze,
                                      null,
                                      "Luas tanah Villa Akira berkisar 7.000 m",
                                      i.a.createElement("sup", null, "2"),
                                      " dengan cakupan bangunan hanya 5% sehingga meninggalkan banyak pohon seperti jagung, singkong, alpukat, pisang, nangka, cengkeh, mangga dan banyak pohon tropis lainnya. Tanah Villa Akira sangat hijau dengan udara segar dan angin sejuk, sehingga tidak perlu memiliki pendingin udara di dalam."
                                    ),
                                    i.a.createElement(
                                      ze,
                                      null,
                                      "Desain Villa Akira merupakan kombinasi arsitektur modern dan vernakular dengan banyak jendela kaca dan bukaan sehingga menciptakan sirkulasi udara. Genteng dan bentuk atap aspal memberikan ekspresi rumah tropis. Bentuk-L dari villa memaksimalkan penggunaan dari pemandangan pegunungan."
                                    ),
                                    i.a.createElement(
                                      ze,
                                      null,
                                      "Villa Akira adalah tempat berakhir pekan yang menyenangkan untuk menjauh dari lalu lintas dan polusi, sebuah ketenangan nyata dengan semua fasilitas yang diperlukan sehingga merasa seperti di rumah. Daerah topografi Villa Akira adalah tempat terbaik untuk kegiatan hiking dan outdoor."
                                    ),
                                    i.a.createElement(
                                      ze,
                                      null,
                                      "Villa Akira adalah tempat yang paling cocok untuk orang-orang yang mencintai alam dan mencari ketenangan."
                                    )
                                  )
                                : i.a.createElement(
                                    n.Fragment,
                                    { key: 1 },
                                    i.a.createElement(
                                      ze,
                                      null,
                                      "Villa Akira is located in Megamendung, Bogor, 870m above sea level, on top of a hill surrounded by three mountains, namely Mount Salak, Mount Pangrango and Mount Gede. It is only 15 minutes away from Taman Safari (an animal theme park) and many other tourist attractions in Puncak."
                                    ),
                                    i.a.createElement(
                                      ze,
                                      null,
                                      "The land area is approx. 7,000 m",
                                      i.a.createElement("sup", null, "2"),
                                      " and the building coverage is only 5 % which leaves the land with lots of trees such as corns, cassavas, avocados, bananas, jack fruits, cloves, mango and many other tropical trees. It is very green with cool fresh air and breeze, so it is not necessary to have air conditioning inside."
                                    ),
                                    i.a.createElement(
                                      ze,
                                      null,
                                      "The design is a combination of modern and vernacular architecture with lots of glass windows and openings which allow air circulations. The asphalt roof tile and shape provide an expression of a tropical house. The L-shape of the villa gives the maximum use of the mountainous views."
                                    ),
                                    i.a.createElement(
                                      ze,
                                      null,
                                      "It is a nice weekend get away from traffic and pollution, a real serenity place with all required amenities and feel like home. The topographic area is the best venue for hiking and outdoor activities."
                                    ),
                                    i.a.createElement(
                                      ze,
                                      null,
                                      "This is the most suitable place for people who love nature and look for tranquility."
                                    )
                                  )
                            )
                          ),
                          this.props.max1024
                            ? null
                            : i.a.createElement(
                                We.a,
                                {
                                  lg: 5,
                                  xl: 5,
                                  className: "align-self-center mx-2"
                                },
                                i.a.createElement(
                                  ee.a,
                                  { className: "my-2 justify-content-center" },
                                  i.a.createElement(
                                    We.a,
                                    { md: 6, className: "align-self-center" },
                                    i.a.createElement(
                                      it,
                                      {
                                        onClick: function() {
                                          return e.openViewer(0);
                                        }
                                      },
                                      i.a.createElement("img", {
                                        src: a(57),
                                        className: "img-fluid"
                                      })
                                    )
                                  ),
                                  i.a.createElement(
                                    We.a,
                                    { md: 3, className: "align-self-center" },
                                    i.a.createElement(
                                      it,
                                      {
                                        className: "my-2",
                                        onClick: function() {
                                          return e.openViewer(1);
                                        }
                                      },
                                      i.a.createElement("img", {
                                        src: a(58),
                                        className: "img-fluid"
                                      })
                                    ),
                                    i.a.createElement(
                                      it,
                                      {
                                        className: "my-2",
                                        onClick: function() {
                                          return e.openViewer(2);
                                        }
                                      },
                                      i.a.createElement("img", {
                                        src: a(59),
                                        className: "img-fluid"
                                      })
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  ee.a,
                                  { className: "my-2" },
                                  i.a.createElement(
                                    ee.a,
                                    { className: "justify-content-center" },
                                    i.a.createElement(
                                      We.a,
                                      { md: 3, className: "align-self-center" },
                                      i.a.createElement(
                                        it,
                                        {
                                          className: "my-2",
                                          onClick: function() {
                                            return e.openViewer(3);
                                          }
                                        },
                                        i.a.createElement("img", {
                                          src: a(60),
                                          className: "img-fluid"
                                        })
                                      ),
                                      i.a.createElement(
                                        it,
                                        {
                                          style: { height: "min-content" },
                                          className: "my-2",
                                          onClick: function() {
                                            return e.openViewer(4);
                                          }
                                        },
                                        i.a.createElement("img", {
                                          src: a(61),
                                          className: "img-fluid"
                                        })
                                      )
                                    ),
                                    i.a.createElement(
                                      We.a,
                                      { md: 6, className: "align-self-center" },
                                      i.a.createElement(
                                        it,
                                        {
                                          onClick: function() {
                                            return e.openViewer(5);
                                          }
                                        },
                                        i.a.createElement("img", {
                                          src: a(62),
                                          className: "img-fluid",
                                          alt: "Loading"
                                        })
                                      )
                                    )
                                  )
                                ),
                                this.state.showViewer &&
                                  i.a.createElement(et.a, {
                                    mainSrc: rt[this.state.indexPhoto],
                                    nextSrc:
                                      rt[
                                        (this.state.indexPhoto + 1) % rt.length
                                      ],
                                    prevSrc:
                                      rt[
                                        (this.state.indexPhoto +
                                          rt.length -
                                          1) %
                                          rt.length
                                      ],
                                    onMovePrevRequest: function() {
                                      return e.setState({
                                        indexPhoto:
                                          (e.state.indexPhoto + rt.length - 1) %
                                          rt.length
                                      });
                                    },
                                    onMoveNextRequest: function() {
                                      return e.setState({
                                        indexPhoto:
                                          (e.state.indexPhoto + 1) % rt.length
                                      });
                                    },
                                    onCloseRequest: function() {
                                      (document.body.style.height = ""),
                                        (document.body.style.overflow = ""),
                                        e.setState({ showViewer: !1 });
                                    }
                                  })
                              )
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(i.a.Component));
      function bt() {
        var e = Object(P.a)(["\n    height: 100%;\n    margin-top: 6rem;\n"]);
        return (
          (bt = function() {
            return e;
          }),
          e
        );
      }
      var xt = q.b.div(bt()),
        Et = (function(e) {
          function t() {
            return (
              Object(D.a)(this, t),
              Object(G.a)(this, Object(W.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(J.a)(t, e),
            Object(H.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.indonesia;
                  return i.a.createElement(
                    xt,
                    { className: "mb-5" },
                    i.a.createElement(
                      Z.a,
                      { fluid: !0, style: { height: "inherit" } },
                      i.a.createElement(
                        ee.a,
                        {
                          style: { height: "inherit" },
                          className:
                            "justify-content-center align-content-center"
                        },
                        this.props.max1024
                          ? null
                          : i.a.createElement(
                              We.a,
                              {
                                xs: 9,
                                md: 5,
                                xl: 3,
                                className: this.props.max1024
                                  ? "align-self-center mx-auto mb-3"
                                  : "align-self-center mx-4"
                              },
                              i.a.createElement("img", {
                                src: a(68),
                                style: { borderRadius: "50%" },
                                className: "img-fluid",
                                alt: ""
                              })
                            ),
                        i.a.createElement(
                          We.a,
                          {
                            md: 10,
                            xl: 6,
                            className: this.props.max1024
                              ? "align-self-center mx-auto my-3"
                              : "align-self-center mx-4"
                          },
                          i.a.createElement(
                            Ye,
                            null,
                            e
                              ? i.a.createElement(
                                  n.Fragment,
                                  { key: 50 },
                                  i.a.createElement(
                                    Ve,
                                    { className: "mb-3" },
                                    "TUAN RUMAH"
                                  ),
                                  i.a.createElement(Le, {
                                    color: "#707070",
                                    size: "10.5rem"
                                  })
                                )
                              : i.a.createElement(
                                  n.Fragment,
                                  { key: 12 },
                                  i.a.createElement(
                                    Ve,
                                    { className: "mb-3" },
                                    "THE HOST"
                                  ),
                                  i.a.createElement(Le, {
                                    color: "#707070",
                                    size: "7rem"
                                  })
                                )
                          ),
                          i.a.createElement("br", null),
                          this.props.max1024
                            ? i.a.createElement(
                                We.a,
                                {
                                  xs: 9,
                                  md: 6,
                                  xl: 3,
                                  className: this.props.max1024
                                    ? "align-self-center mx-auto my-4"
                                    : "align-self-center mx-4"
                                },
                                i.a.createElement("img", {
                                  src: a(68),
                                  style: { borderRadius: "50%" },
                                  className: "img-fluid",
                                  alt: ""
                                })
                              )
                            : null,
                          i.a.createElement(
                            Ye,
                            null,
                            e
                              ? i.a.createElement(
                                  n.Fragment,
                                  { key: 3 },
                                  i.a.createElement(
                                    ze,
                                    null,
                                    "Nama saya Maya, seorang ibu dengan tiga anak dan satu cucu. Saya lahir di sebuah desa bernama Baros, Serang, sekitar dua jam perjalanan dari Jakarta. Saya adalah anak tertua dari empat bersaudara di keluarga saya. Saya kuliah di Sekolah Sekretaris di Jakarta, lalu belajar bahasa Inggris di Universitas Atma Jaya di kota yang sama."
                                  ),
                                  i.a.createElement(
                                    ze,
                                    null,
                                    "Saya suka memasak semua jenis makanan. Saya selalu menikmati alam karena saya mendapatkan kedekatan dengan Tuhan dan kebahagiaan. Saya juga senang bertemu dengan orang lain karena memungkinkan saya untuk belajar budaya dan memahami tentang kehidupan."
                                  ),
                                  i.a.createElement(
                                    ze,
                                    null,
                                    "Menjadi tuan rumah Villa Akira telah mengajari saya bagaimana membangun hubungan yang berkelanjutan dengan orang-orang dari latar belakang sosial yang berbeda. Sebagai tuan rumah, tujuan saya adalah membuat tamu saya bahagia selama mereka tinggal di Villa Akira dan memiliki pengalaman yang akan selalu mereka ingat."
                                  )
                                )
                              : i.a.createElement(
                                  n.Fragment,
                                  { key: 11 },
                                  i.a.createElement(
                                    ze,
                                    null,
                                    "My name is Maya a mother with three children and one granddaughter. I was born n a village called Baros, Serang, about two hours drive from Jakarta. I am the oldest child of four in my family. I went to a Scretary College in Jakarta, then studied English in Atma Jaya University in the same city."
                                  ),
                                  i.a.createElement(
                                    ze,
                                    null,
                                    "I love cooking all kind of food. I always enjoy nature because it gives me a sense of closeness to God and happiness. I also enjoy meeting people because it allows me to learn culture and understand about life."
                                  ),
                                  i.a.createElement(
                                    ze,
                                    null,
                                    "Being the Host of Villa Akira has taught me how to build a sustainable relationship with people from different social background. As a host, my goal is to make my guests happy during their stay in Villa Akira and have the experience that will always remember."
                                  )
                                )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.Component);
      function wt() {
        var e = Object(P.a)(["\n    height: 100%;\n"]);
        return (
          (wt = function() {
            return e;
          }),
          e
        );
      }
      var vt = q.b.div(wt()),
        kt = [
          {
            src: a(178),
            styleBig: { left: "-6rem" },
            styleNow: {},
            text:
              'Megamendung District where Villa Akira is located, is a hilly\n                    area with average height of 850 m above sea level. The word\n                    "Megamendung" come from "mega" means universe, cloud, large,\n                    strong, and "mendung" means cloudy which explains the area\n                    covered with cloud and located on the mountains.',
            textIndo:
              'Daerah Megamendung di mana tempat Villa Akira berada merupakan daerah perbukitan dengan ketinggian rata-rata 850 m di atas permukaan laut. Kata "Megamendung" berasal dari "mega" yang berarti alam semesta, awan, besar, kuat; dan "mendung" yang berarti mendung, tertutup awan dan terletak di pegunungan.'
          },
          {
            src: a(179),
            styleBig: {},
            styleNow: {},
            text:
              "Megamendung is a part of Puncak, a mountain pass in West Java\n                    which is a common weekend destination for residents of Jakarta\n                    including for those who are longing for clean are and natural\n                    scenery. The pass connects the city of Bogor and Bandung and is\n                    spread within the regencies of Bogor, Cianjur and Sukabumi.",
            textIndo:
              "Megamendung adalah bagian dari Puncak, sebuah jalur gunung di Jawa Barat yang merupakan tujuan akhir pekan yang umum bagi penduduk Jakarta termasuk bagi mereka yang rindu akan pemandangan alam yang bersih. Megamendung menghubungkan kota Bogor dan Bandung, tersebar di kabupaten Bogor, Cianjur dan Sukabumi."
          },
          {
            src: a(180),
            styleBig: {},
            styleNow: {},
            text:
              "In Puncak area, we can find hundreds of accommodations from\n                    low-income homestays, guest houses, apartments to motels and\n                    five-star hotels, with different price ranges and socio-economic\n                    guests from all parts of Indonesia. Puncak is a melting pot of\n                    diversity where you can find a Javanese and Padang restaurant\n                    across from a Turkish kebab and Italian pizza on the same\n                    street.",
            textIndo:
              "Megamendung adalah bagian dari Puncak, sebuah jalur gunung di Jawa Barat yang merupakan tujuan akhir pekan yang umum bagi penduduk Jakarta termasuk bagi mereka yang rindu akan pemandangan alam yang bersih. Megamendung menghubungkan kota Bogor dan Bandung, tersebar di kabupaten Bogor, Cianjur dan Sukabumi."
          },
          {
            src: a(181),
            styleBig: { left: "-12rem" },
            styleNow: { left: "-10rem" },
            text:
              "Villa Akira is located just about 15 minutes from Puncak area which remains accessible from the main road.  The villa has its own access which makes the villa very special, secured and private.",
            textIndo:
              "Villa Akira hanya 15 menit dari daerah Puncak diakses dari jalan utama. Vila memiliki akses sendiri yang menjadikan vila ini sangat istimewa, aman, dan pribadi."
          }
        ],
        jt = [
          { src: a(182), style: {}, styleBig: {} },
          { src: a(183), style: {}, styleBig: {} },
          { src: a(184), style: {}, styleBig: { left: "-1rem" } },
          {
            src: a(185),
            style: { left: "-7rem" },
            styleBig: { left: "-8.25rem" }
          }
        ],
        It = [
          {
            src: a(186),
            style: { left: "-3rem" },
            styleBig: { left: "-3rem" }
          },
          { src: a(187), style: {}, styleBig: {} },
          {
            src: a(188),
            style: { left: "-3rem" },
            styleBig: { left: "-3rem" }
          },
          { src: a(189), style: { left: "-5rem" }, styleBig: { left: "-6rem" } }
        ],
        Nt = (function(e) {
          function t(e) {
            var a;
            return (
              Object(D.a)(this, t),
              ((a = Object(G.a)(
                this,
                Object(W.a)(t).call(this, e)
              )).prevImage = function() {
                a.setState({ prev: !0 }),
                  setTimeout(function() {
                    return a.setState({
                      change: !0,
                      nowIndex:
                        (a.state.nowIndex + a.state.images.length - 1) %
                        a.state.images.length,
                      nowImage:
                        kt[
                          (a.state.nowIndex + a.state.images.length - 1) %
                            a.state.images.length
                        ].src,
                      nowStyle: a.props.max768
                        ? kt[
                            (a.state.nowIndex + a.state.images.length - 1) %
                              a.state.images.length
                          ].styleNow
                        : kt[
                            (a.state.nowIndex + a.state.images.length - 1) %
                              a.state.images.length
                          ].styleBig,
                      nextImage:
                        It[
                          (a.state.nowIndex + a.state.images.length - 1) %
                            a.state.images.length
                        ].src,
                      nextStyle: a.props.max768
                        ? It[
                            (a.state.nowIndex + a.state.images.length - 1) %
                              a.state.images.length
                          ].style
                        : It[
                            (a.state.nowIndex + a.state.images.length - 1) %
                              a.state.images.length
                          ].styleBig,
                      prevImage:
                        jt[
                          (a.state.nowIndex + a.state.images.length - 1) %
                            a.state.images.length
                        ].src,
                      prevStyle: a.props.max768
                        ? jt[
                            (a.state.nowIndex + a.state.images.length - 1) %
                              a.state.images.length
                          ].style
                        : jt[
                            (a.state.nowIndex + a.state.images.length - 1) %
                              a.state.images.length
                          ].styleBig
                    });
                  }, 2),
                  setTimeout(function() {
                    return a.setState({ change: !1 });
                  }, 600);
              }),
              (a.nextImage = function() {
                a.setState({ prev: !1 }),
                  setTimeout(function() {
                    return a.setState({
                      change: !0,
                      nowIndex: (a.state.nowIndex + 1) % a.state.images.length,
                      nowImage:
                        kt[(a.state.nowIndex + 1) % a.state.images.length].src,
                      nowStyle: a.props.max768
                        ? kt[(a.state.nowIndex + 1) % a.state.images.length]
                            .styleNow
                        : kt[(a.state.nowIndex + 1) % a.state.images.length]
                            .styleBig,
                      nextImage:
                        It[(a.state.nowIndex + 1) % a.state.images.length].src,
                      nextStyle: a.props.max768
                        ? It[(a.state.nowIndex + 1) % a.state.images.length]
                            .style
                        : It[(a.state.nowIndex + 1) % a.state.images.length]
                            .styleBig,
                      prevImage:
                        jt[(a.state.nowIndex + 1) % a.state.images.length].src,
                      prevStyle: a.props.max768
                        ? jt[(a.state.nowIndex + 1) % a.state.images.length]
                            .style
                        : jt[(a.state.nowIndex + 1) % a.state.images.length]
                            .styleBig
                    });
                  }, 2),
                  setTimeout(function() {
                    return a.setState({ change: !1 });
                  }, 600);
              }),
              (a.state = {
                images: kt,
                nowIndex: 0,
                nowImage: kt[0].src,
                nowStyle: a.props.max768 ? kt[0].styleNow : kt[0].styleBig,
                prevImage: jt[0].src,
                prevStyle: a.props.max768 ? jt[0].style : jt[0].styleBig,
                nextImage: It[0].src,
                nextStyle: a.props.max768 ? It[0].style : It[0].styleBig,
                change: !1,
                prev: !1
              }),
              a
            );
          }
          return (
            Object(J.a)(t, e),
            Object(H.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.indonesia;
                  return i.a.createElement(
                    vt,
                    { className: "my-5" },
                    i.a.createElement(
                      Z.a,
                      { fluid: !0, style: { height: "inherit" } },
                      i.a.createElement(
                        ee.a,
                        {
                          className: "justify-content-center",
                          style: { height: "inherit" }
                        },
                        i.a.createElement(
                          We.a,
                          {
                            xs: !0,
                            md: 10,
                            lg: 10,
                            xl: 5,
                            className:
                              (this.props.max500 ? "my-4 " : "") +
                              "align-self-center"
                          },
                          i.a.createElement(
                            Ye,
                            null,
                            e
                              ? i.a.createElement(
                                  n.Fragment,
                                  { key: 4 },
                                  i.a.createElement(
                                    Ve,
                                    { className: "mb-3" },
                                    "LINGKUNGAN"
                                  ),
                                  i.a.createElement(Le, {
                                    color: "#707070",
                                    size: "10rem"
                                  })
                                )
                              : i.a.createElement(
                                  n.Fragment,
                                  { key: 8 },
                                  i.a.createElement(
                                    Ve,
                                    { className: "mb-3" },
                                    "THE NEIGHBORHOOD"
                                  ),
                                  i.a.createElement(Le, {
                                    color: "#707070",
                                    size: "16.5rem"
                                  })
                                )
                          ),
                          i.a.createElement("br", null),
                          this.props.max1024 && this.props.min768
                            ? i.a.createElement(
                                "div",
                                { className: "my-2" },
                                i.a.createElement(
                                  ft,
                                  Object.assign({}, this.state, {
                                    sideHeight: "12rem",
                                    sideWidth: "7.2rem",
                                    mainHeight: "18rem",
                                    mainWidth: "10.8rem"
                                  })
                                ),
                                i.a.createElement(
                                  ee.a,
                                  { className: "justify-content-center my-4" },
                                  i.a.createElement(Ge, {
                                    className: "mx-5",
                                    onClick: this.prevImage
                                  }),
                                  i.a.createElement(He, {
                                    className: "mx-5",
                                    onClick: this.nextImage
                                  })
                                )
                              )
                            : null,
                          this.props.max768
                            ? i.a.createElement(
                                "div",
                                { className: "my-2" },
                                i.a.createElement(
                                  ft,
                                  Object.assign({}, this.state, {
                                    sideHeight: "10rem",
                                    sideWidth: "6rem",
                                    mainHeight: "15rem",
                                    mainWidth: "9rem"
                                  })
                                ),
                                i.a.createElement(
                                  ee.a,
                                  { className: "justify-content-center my-4" },
                                  i.a.createElement(Ge, {
                                    className: "mx-5",
                                    onClick: this.prevImage
                                  }),
                                  i.a.createElement(He, {
                                    className: "mx-5",
                                    onClick: this.nextImage
                                  })
                                )
                              )
                            : null,
                          i.a.createElement(
                            se.Fade,
                            { when: !this.state.change },
                            i.a.createElement(
                              Ye,
                              null,
                              e
                                ? i.a.createElement(
                                    ze,
                                    { key: 1234 },
                                    kt[this.state.nowIndex].textIndo
                                  )
                                : i.a.createElement(
                                    ze,
                                    { key: 123 },
                                    kt[this.state.nowIndex].text
                                  )
                            )
                          ),
                          this.props.max1024
                            ? null
                            : i.a.createElement(
                                ee.a,
                                { className: "justify-content-center mt-5" },
                                i.a.createElement(Ge, {
                                  className: "mx-5",
                                  onClick: this.prevImage
                                }),
                                i.a.createElement(He, {
                                  className: "mx-5",
                                  onClick: this.nextImage
                                })
                              )
                        ),
                        this.props.max1024
                          ? null
                          : i.a.createElement(
                              We.a,
                              {
                                xs: 12,
                                md: 8,
                                lg: 8,
                                xl: 5,
                                className: this.props.max1024
                                  ? "my-4 align-self-center"
                                  : "align-self-center"
                              },
                              i.a.createElement(
                                ft,
                                Object.assign({}, this.state, {
                                  sideHeight: "12rem",
                                  sideWidth: "7.2rem",
                                  mainHeight: "18rem",
                                  mainWidth: "10.8rem"
                                })
                              )
                            )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.Component);
      function Ot() {
        var e = Object(P.a)(["\n  margin-top: 8rem;\n"]);
        return (
          (Ot = function() {
            return e;
          }),
          e
        );
      }
      var St = q.b.div(Ot()),
        At = [
          {
            src: a(190),
            styleNow: {},
            text: "Four en-suite large-size bedrooms with hot water",
            textIndo:
              "Empat kamar tidur en-suite berukuran besar dengan air panas"
          },
          {
            src: a(191),
            styleNow: {},
            text: "Two lounges/family rooms",
            textIndo: "Dua lounge / ruang keluarga"
          },
          {
            src: a(192),
            styleNow: {},
            text: "Kitchen with complete utensils",
            textIndo: "Dapur dengan peralatan lengkap"
          },
          {
            src: a(193),
            styleNow: {},
            text: "Infinity swimming pool 4 x 12 m",
            textIndo: "Kolam renang infinity 4 x 12 m"
          }
        ],
        Ct = [a(56), a(194), a(195), a(55)],
        Tt = (function(e) {
          function t(e) {
            var a;
            return (
              Object(D.a)(this, t),
              ((a = Object(G.a)(
                this,
                Object(W.a)(t).call(this, e)
              )).prevImage = function() {
                a.setState({ prev: !0 }),
                  setTimeout(function() {
                    return a.setState({
                      change: !0,
                      nowIndex:
                        (a.state.nowIndex + a.state.images.length - 1) %
                        a.state.images.length,
                      nowImage:
                        At[
                          (a.state.nowIndex + a.state.images.length - 1) %
                            a.state.images.length
                        ].src,
                      nowStyle:
                        At[
                          (a.state.nowIndex + a.state.images.length - 1) %
                            a.state.images.length
                        ].styleNow,
                      indexViewer:
                        (a.state.nowIndex + a.state.images.length - 1) %
                        a.state.images.length
                    });
                  }, 2),
                  setTimeout(function() {
                    return a.setState({ change: !1 });
                  }, 600);
              }),
              (a.nextImage = function() {
                a.setState({ prev: !1 }),
                  setTimeout(function() {
                    return a.setState({
                      change: !0,
                      nowIndex: (a.state.nowIndex + 1) % a.state.images.length,
                      nowImage:
                        At[(a.state.nowIndex + 1) % a.state.images.length].src,
                      nowStyle:
                        At[(a.state.nowIndex + 1) % a.state.images.length]
                          .styleNow,
                      indexViewer:
                        (a.state.nowIndex + 1) % a.state.images.length
                    });
                  }, 2),
                  setTimeout(function() {
                    return a.setState({ change: !1 });
                  }, 600);
              }),
              (a.state = {
                images: At,
                change: !1,
                prev: !1,
                nowIndex: 0,
                nowImage: At[0].src,
                nowStyle: At[0].styleNow,
                viewer: !1,
                indexViewer: 0
              }),
              a
            );
          }
          return (
            Object(J.a)(t, e),
            Object(H.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.indonesia;
                  return i.a.createElement(
                    St,
                    { className: "part-container mb-5", id: "facilities" },
                    i.a.createElement(
                      Z.a,
                      { fluid: !0 },
                      i.a.createElement(
                        ee.a,
                        {
                          className: "justify-content-center",
                          style: { flexWrap: "wrap-reverse" }
                        },
                        this.props.max500
                          ? null
                          : i.a.createElement(
                              We.a,
                              {
                                sm: 5,
                                md: 5,
                                className: this.props.max500
                                  ? "align-self-center my-4"
                                  : "align-self-center"
                              },
                              i.a.createElement(
                                ft,
                                Object.assign({}, this.state, {
                                  mainHeight: "15rem",
                                  mainWidth: "15rem",
                                  zoom: !0,
                                  zoomFunc: function() {
                                    (document.body.style.height = "100vh"),
                                      (document.body.style.overflow = "hidden"),
                                      e.setState({ viewer: !0 });
                                  }
                                })
                              ),
                              this.state.viewer &&
                                i.a.createElement(et.a, {
                                  mainSrc: Ct[this.state.indexViewer],
                                  nextSrc:
                                    Ct[
                                      (this.state.indexViewer + 1) % Ct.length
                                    ],
                                  prevSrc:
                                    Ct[
                                      (this.state.indexViewer + Ct.length - 1) %
                                        Ct.length
                                    ],
                                  onMovePrevRequest: function() {
                                    return e.setState({
                                      indexViewer:
                                        (e.state.indexViewer + Ct.length - 1) %
                                        Ct.length
                                    });
                                  },
                                  onMoveNextRequest: function() {
                                    return e.setState({
                                      indexViewer:
                                        (e.state.indexViewer + 1) % Ct.length
                                    });
                                  },
                                  onCloseRequest: function() {
                                    (document.body.style.height = ""),
                                      (document.body.style.overflow = ""),
                                      e.setState({ viewer: !1 });
                                  }
                                })
                            ),
                        i.a.createElement(
                          We.a,
                          {
                            sm: 5,
                            md: 5,
                            className: this.props.max500
                              ? "align-self-center my-4"
                              : "align-self-center"
                          },
                          i.a.createElement(
                            Ye,
                            null,
                            t
                              ? i.a.createElement(
                                  n.Fragment,
                                  { key: 123 },
                                  i.a.createElement(
                                    Ve,
                                    { className: "mb-3" },
                                    "FASILITAS"
                                  ),
                                  i.a.createElement(Le, {
                                    color: "#707070",
                                    size: "8.5rem"
                                  })
                                )
                              : i.a.createElement(
                                  n.Fragment,
                                  { key: 234 },
                                  i.a.createElement(
                                    Ve,
                                    { className: "mb-3" },
                                    "FACILITIES"
                                  ),
                                  i.a.createElement(Le, {
                                    color: "#707070",
                                    size: "9rem"
                                  })
                                )
                          ),
                          i.a.createElement("br", null),
                          this.props.max500
                            ? i.a.createElement(
                                n.Fragment,
                                null,
                                i.a.createElement(
                                  We.a,
                                  { className: "justify-content-center" },
                                  i.a.createElement(
                                    ft,
                                    Object.assign({}, this.state, {
                                      mainHeight: "15rem",
                                      mainWidth: "15rem",
                                      zoom: !0,
                                      zoomFunc: function() {
                                        e.setState({ viewer: !0 });
                                      }
                                    })
                                  ),
                                  i.a.createElement(
                                    ee.a,
                                    {
                                      className: "justify-content-center my-3"
                                    },
                                    i.a.createElement(Ge, {
                                      className: "mx-5",
                                      onClick: this.prevImage
                                    }),
                                    i.a.createElement(He, {
                                      className: "mx-5",
                                      onClick: this.nextImage
                                    })
                                  )
                                ),
                                this.state.viewer &&
                                  i.a.createElement(et.a, {
                                    mainSrc: Ct[this.state.indexViewer],
                                    nextSrc:
                                      Ct[
                                        (this.state.indexViewer + 1) % Ct.length
                                      ],
                                    prevSrc:
                                      Ct[
                                        (this.state.indexViewer +
                                          Ct.length -
                                          1) %
                                          Ct.length
                                      ],
                                    onMovePrevRequest: function() {
                                      return e.setState({
                                        indexViewer:
                                          (e.state.indexViewer +
                                            Ct.length -
                                            1) %
                                          Ct.length
                                      });
                                    },
                                    onMoveNextRequest: function() {
                                      return e.setState({
                                        indexViewer:
                                          (e.state.indexViewer + 1) % Ct.length
                                      });
                                    },
                                    onCloseRequest: function() {
                                      (document.body.style.height = ""),
                                        (document.body.style.overflow = ""),
                                        e.setState({ viewer: !1 });
                                    }
                                  })
                              )
                            : null,
                          i.a.createElement(
                            se.Fade,
                            { when: !this.state.change },
                            i.a.createElement(
                              Ye,
                              null,
                              t
                                ? i.a.createElement(
                                    "h5",
                                    {
                                      key: 4,
                                      className: this.props.max500
                                        ? "text-center"
                                        : "",
                                      style: { color: "#707070" }
                                    },
                                    At[this.state.nowIndex].textIndo
                                  )
                                : i.a.createElement(
                                    "h5",
                                    {
                                      key: 10,
                                      className: this.props.max500
                                        ? "text-center"
                                        : "",
                                      style: { color: "#707070" }
                                    },
                                    At[this.state.nowIndex].text
                                  )
                            )
                          ),
                          this.props.max500
                            ? null
                            : i.a.createElement(
                                ee.a,
                                { className: "justify-content-center mt-5" },
                                i.a.createElement(Ge, {
                                  className: "mx-5",
                                  onClick: this.prevImage
                                }),
                                i.a.createElement(He, {
                                  className: "mx-5",
                                  onClick: this.nextImage
                                })
                              )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.PureComponent);
      function Mt() {
        var e = Object(P.a)([
          "\n    box-shadow: 0px 0px 1rem lightgray;\n    border-radius: 10px;\n    padding: 3rem 2rem;\n"
        ]);
        return (
          (Mt = function() {
            return e;
          }),
          e
        );
      }
      function Ft() {
        var e = Object(P.a)(["\n  margin-top: 8.5rem;\n"]);
        return (
          (Ft = function() {
            return e;
          }),
          e
        );
      }
      var Bt = q.b.div(Ft()),
        Lt = q.b.div(Mt()),
        Vt = (function(e) {
          function t() {
            return (
              Object(D.a)(this, t),
              Object(G.a)(this, Object(W.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(J.a)(t, e),
            Object(H.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.indonesia;
                  return i.a.createElement(
                    Bt,
                    { className: "part-container mb-5", id: "night-rates" },
                    i.a.createElement(
                      Z.a,
                      { fluid: !0 },
                      i.a.createElement(
                        "div",
                        { className: "col text-center" },
                        i.a.createElement(
                          Ye,
                          null,
                          e
                            ? i.a.createElement(
                                n.Fragment,
                                { key: 5 },
                                i.a.createElement(Ve, null, "TARIF PER MALAM"),
                                i.a.createElement(
                                  ee.a,
                                  { className: "justify-content-center" },
                                  i.a.createElement(Le, {
                                    color: "#707070",
                                    size: "11rem"
                                  })
                                )
                              )
                            : i.a.createElement(
                                n.Fragment,
                                null,
                                i.a.createElement(
                                  Ve,
                                  { key: 1 },
                                  "NIGHTLY RATES"
                                ),
                                i.a.createElement(
                                  ee.a,
                                  { className: "justify-content-center" },
                                  i.a.createElement(Le, {
                                    color: "#707070",
                                    size: "11rem"
                                  })
                                )
                              )
                        )
                      ),
                      i.a.createElement(
                        ee.a,
                        { className: "my-5 p-3 justify-content-center" },
                        i.a.createElement(
                          Lt,
                          {
                            className: this.props.max1024 ? "mx-3 my-3" : "mx-3"
                          },
                          i.a.createElement(
                            "h4",
                            {
                              style: { color: "#707070" },
                              className: "m-0 text-center"
                            },
                            "IDR 3,500,000"
                          ),
                          i.a.createElement(
                            Ye,
                            null,
                            e
                              ? i.a.createElement(
                                  ze,
                                  { key: 6, className: "text-center m-0 p-2" },
                                  "(Hari Kerja, Minggu hingga Kamis)"
                                )
                              : i.a.createElement(
                                  ze,
                                  { key: 10, className: "text-center m-0 p-2" },
                                  "(Weekdays, Sunday to Thursday)"
                                )
                          )
                        ),
                        i.a.createElement(
                          Lt,
                          {
                            className: this.props.max1024 ? "mx-3 my-3" : "mx-3"
                          },
                          i.a.createElement(
                            "h4",
                            {
                              style: { color: "#707070" },
                              className: "m-0 text-center"
                            },
                            "IDR 4,500,000"
                          ),
                          i.a.createElement(
                            Ye,
                            null,
                            e
                              ? i.a.createElement(
                                  ze,
                                  { key: 6, className: "text-center m-0 p-2" },
                                  "(Akhir Pekan, Jumat dan Sabtu)"
                                )
                              : i.a.createElement(
                                  ze,
                                  { key: 9, className: "text-center m-0 p-2" },
                                  "(Weekends, Friday and Saturday)"
                                )
                          )
                        )
                      ),
                      i.a.createElement(
                        Ye,
                        null,
                        e
                          ? i.a.createElement(
                              n.Fragment,
                              { key: 122 },
                              i.a.createElement(
                                "h4",
                                {
                                  className: "text-center",
                                  style: { color: "#707070" }
                                },
                                "CHECK-IN PADA PUKUL 2:00 PM"
                              ),
                              i.a.createElement(
                                "h4",
                                {
                                  className: "text-center",
                                  style: { color: "#707070" }
                                },
                                "CHECK-OUT PADA PUKUL 12:00 PM"
                              )
                            )
                          : i.a.createElement(
                              n.Fragment,
                              { key: 299 },
                              i.a.createElement(
                                "h4",
                                {
                                  className: "text-center",
                                  style: { color: "#707070" }
                                },
                                "CHECK-IN AT 2:00 PM"
                              ),
                              i.a.createElement(
                                "h4",
                                {
                                  className: "text-center",
                                  style: { color: "#707070" }
                                },
                                "CHECK-OUT AT 12:00 PM"
                              )
                            )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.Component);
      function zt() {
        var e = Object(P.a)([
          "\n  overflow-y: auto;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  flex-shrink: unset;\n  display: flex;\n  height: 21rem;\n  width: 100%;\n"
        ]);
        return (
          (zt = function() {
            return e;
          }),
          e
        );
      }
      function Rt() {
        var e = Object(P.a)([
          "\n  border-radius: 10px;\n  box-shadow: 0px 0px 15px lightgray;\n  height: 100%;\n  width: auto;\n  padding: 20px;\n  margin: 1rem 1rem;\n  align-self: center;\n  & > .react-reveal > ",
          " {\n    @media screen and (min-width: 600px) {\n      height: 15rem;\n    }\n    @media screen and (min-width: 800px) {\n      height: 13rem;\n    }\n    @media screen and (min-width: 1024px) {\n      height: 11rem;\n    }\n    @media screen and (max-width: 550px) {\n      height: 9rem;\n    }\n    @media screen and (min-width: 1440px) {\n      height: 15rem;\n    }\n    @media screen and (min-width: 1920px) {\n      height:9rem;\n    }\n  }\n"
        ]);
        return (
          (Rt = function() {
            return e;
          }),
          e
        );
      }
      function Pt() {
        var e = Object(P.a)(["\n  margin-top: 6rem;\n"]);
        return (
          (Pt = function() {
            return e;
          }),
          e
        );
      }
      var Dt = q.b.div(Pt()),
        Ht = q.b.div(Rt(), ze),
        Gt = (q.b.div(zt()), a(84)),
        Wt = a.n(Gt),
        Jt = [
          {
            name: "Karim",
            message:
              "I thank you for coming by to see me at the Villa. We also thank you for the input. Hopefully in the future we will come back to the Villa. May Allah always provide protection for your success",
            date: "August, 2019",
            dateIndo: "Agustus, 2019",
            messageIndo:
              "Saya berterima kasih telah datang menemui saya di Villa. Kami juga berterima kasih atas masukannya. Semoga kedepannya kita akan kembali ke Villa. Semoga Allah selalu memberikan perlindungan bagi kesuksesan Anda"
          },
          {
            name: "Faisal",
            message:
              "I really enjoyed the time I spent in the amazing place, Every detail in this villa was like an ART.",
            date: "August, 2019",
            dateIndo: "Agustus, 2019",
            messageIndo:
              "Saya sangat menikmati waktu yang saya habiskan di tempat yang menakjubkan, Setiap detail di villa ini seperti sebuah SENI"
          },
          {
            name: "Roy",
            message:
              "With all available facilities, the price includes affordable and cheap.",
            date: "July, 2019",
            dateIndo: "Juli, 2019",
            messageIndo:
              "Dengan semua fasilitas yang tersedia, harga sudah termasuk terjangkau dan murah."
          },
          {
            name: "Claudia",
            message:
              "Great and very recommended place to spend time with family and friends",
            date: "July, 2019",
            dateIndo: "Juli, 2019",
            messageIndo:
              "Tempat yang hebat dan sangat direkomendasikan untuk menghabiskan waktu bersama keluarga dan teman"
          },
          {
            name: "Heryani",
            message: "Nice place and great host.",
            date: "June, 2019",
            dateIndo: "Juni, 2019",
            messageIndo: "Tempat yang bagus dan tuan rumah yang hebat."
          },
          {
            name: "Ferly",
            message:
              "Perfect Villa with beautiful view, very worth the price. Thank you for speedy response to the host.",
            messageIndo:
              "Villa yang sempurna dengan pemandangan indah, sangat sepadan dengan harganya. Terima kasih atas tanggapan tuan rumah yang cepat.",
            date: "December, 2019",
            dateIndo: "Desember, 2019"
          },
          {
            name: "Wahyu",
            message:
              "A great place with magnificient view of Mount Salak & Mount Gede ...Hilarious!",
            messageIndo:
              "Tempat yang bagus dengan pemandangan Gunung Salak & Gunung Gede yang luar biasa ....Lucu!",
            date: "December, 2019",
            dateIndo: "Desember, 2019"
          },
          {
            name: "Mada",
            message:
              "Great place and view, although it has some flaws. But a night well spent. Enjoyed the stay. Thank you.",
            messageIndo:
              "Tempat dan pemandangan yang bagus, meskipun memiliki beberapa kekurangan. Tetapi tempat untuk menghabiskan malam dengan baik. Saya merasa senang selama tinggal di sini.. Terima kasih.",
            date: "December, 2019",
            dateIndo: "Desember, 2019"
          },
          {
            name: "Phung",
            message:
              "Nice cozy place with great view. A nice place to get away from your daily routine",
            messageIndo:
              "Tempat nyaman yang bagus dengan pemandangan indah. Tempat yang bagus untuk get away dari rutinitas harian Anda",
            date: "November, 2019",
            dateIndo: "November, 2019"
          }
        ],
        Kt = (function(e) {
          function t() {
            var e, a;
            Object(D.a)(this, t);
            for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
              i[r] = arguments[r];
            return (
              ((a = Object(G.a)(
                this,
                (e = Object(W.a)(t)).call.apply(e, [this].concat(i))
              )).next = function() {
                a.slider.slickNext();
              }),
              (a.prev = function() {
                a.slider.slickPrev();
              }),
              a
            );
          }
          return (
            Object(J.a)(t, e),
            Object(H.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.props.indonesia;
                  return i.a.createElement(
                    Dt,
                    { className: "mb-5", id: "testimoni" },
                    i.a.createElement(
                      Z.a,
                      { fluid: !0 },
                      i.a.createElement(
                        "div",
                        { className: "col text-center" },
                        i.a.createElement(
                          Ye,
                          null,
                          t
                            ? i.a.createElement(
                                n.Fragment,
                                { key: 2 },
                                i.a.createElement(Ve, null, "TESTIMONI"),
                                i.a.createElement(
                                  ee.a,
                                  { className: "justify-content-center" },
                                  i.a.createElement(Le, {
                                    color: "#707070",
                                    size: "8rem"
                                  })
                                )
                              )
                            : i.a.createElement(
                                n.Fragment,
                                { key: 5 },
                                i.a.createElement(Ve, null, "TESTIMONIALS"),
                                i.a.createElement(
                                  ee.a,
                                  { className: "justify-content-center" },
                                  i.a.createElement(Le, {
                                    color: "#707070",
                                    size: "11rem"
                                  })
                                )
                              )
                        )
                      ),
                      i.a.createElement(
                        ee.a,
                        {
                          className:
                            "justify-content-center mt-3 align-content-center"
                        },
                        !this.props.max500 &&
                          i.a.createElement(Ge, {
                            onClick: this.prev,
                            className: "align-self-center"
                          }),
                        i.a.createElement(
                          We.a,
                          { md: 9, className: "align-self-center mx-4" },
                          i.a.createElement(
                            Wt.a,
                            Object.assign(
                              {
                                ref: function(t) {
                                  return (e.slider = t);
                                }
                              },
                              {
                                dots: !0,
                                infinite: !0,
                                speed: 500,
                                autoplay: !0,
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                arrows: !1,
                                autoplaySpeed: 1e4,
                                cssEase: "linear",
                                responsive: [
                                  {
                                    breakpoint: 550,
                                    settings: {
                                      slidesToShow: 1,
                                      slidesToScroll: 1
                                    }
                                  },
                                  {
                                    breakpoint: 1025,
                                    settings: {
                                      slidesToShow: 2,
                                      slidesToScroll: 2
                                    }
                                  }
                                ]
                              }
                            ),
                            Jt.map(function(a) {
                              var r = Math.random();
                              return i.a.createElement(
                                "div",
                                { key: r, style: { height: "inherit" } },
                                i.a.createElement(
                                  Ht,
                                  {
                                    max500: e.props.max500,
                                    style: { height: "inherit" }
                                  },
                                  i.a.createElement(
                                    "h5",
                                    {
                                      style: { color: "#707070" },
                                      className: "text-center"
                                    },
                                    a.name
                                  ),
                                  i.a.createElement(
                                    Ye,
                                    null,
                                    t
                                      ? i.a.createElement(
                                          n.Fragment,
                                          { key: 2 + r },
                                          i.a.createElement(
                                            ze,
                                            {
                                              style: {
                                                fontSize: t ? "0.7rem" : null
                                              }
                                            },
                                            a.messageIndo
                                          ),
                                          i.a.createElement(
                                            "h6",
                                            {
                                              style: { color: "#707070" },
                                              className: "text-center"
                                            },
                                            a.dateIndo
                                          )
                                        )
                                      : i.a.createElement(
                                          n.Fragment,
                                          { key: 5 + r },
                                          i.a.createElement(
                                            ze,
                                            {
                                              style: {
                                                fontSize: t ? "0.7rem" : null
                                              }
                                            },
                                            a.message
                                          ),
                                          i.a.createElement(
                                            "h6",
                                            {
                                              style: { color: "#707070" },
                                              className: "text-center"
                                            },
                                            a.date
                                          )
                                        )
                                  )
                                )
                              );
                            })
                          )
                        ),
                        !this.props.max500 &&
                          i.a.createElement(He, {
                            onClick: this.next,
                            className: "align-self-center"
                          })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.PureComponent);
      function Ut() {
        var e = Object(P.a)([
          "\n  font-size: 0.8rem;\n  color: white;\n  word-wrap: break-word;\n  margin: 0;\n"
        ]);
        return (
          (Ut = function() {
            return e;
          }),
          e
        );
      }
      function _t() {
        var e = Object(P.a)(["\n  color: white;\n"]);
        return (
          (_t = function() {
            return e;
          }),
          e
        );
      }
      function qt() {
        var e = Object(P.a)([
          "\n   background: #46564A;\n   padding: 1rem;\n   \n"
        ]);
        return (
          (qt = function() {
            return e;
          }),
          e
        );
      }
      var Qt = q.b.div(qt()),
        Yt = q.b.h6(_t()),
        Xt = q.b.p(Ut()),
        $t = a(85),
        Zt = a.n($t),
        ea = a(86),
        ta = a.n(ea),
        aa = a(87),
        na = a.n(aa),
        ia = a(88),
        ra = a.n(ia),
        sa = a(89),
        oa = a.n(sa),
        la = (function(e) {
          function t() {
            return (
              Object(D.a)(this, t),
              Object(G.a)(this, Object(W.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(J.a)(t, e),
            Object(H.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.indonesia;
                  return i.a.createElement(
                    Qt,
                    { className: "mt-2" },
                    i.a.createElement(
                      Z.a,
                      { fluid: !0 },
                      i.a.createElement(
                        ee.a,
                        {
                          className:
                            "justify-content-center align-content-center"
                        },
                        i.a.createElement(
                          We.a,
                          {
                            xs: 10,
                            sm: 2,
                            md: 3,
                            lg: 2,
                            xl: 2,
                            className: "align-self-center"
                          },
                          i.a.createElement("img", {
                            src: Zt.a,
                            className: "img-fluid",
                            alt: ""
                          })
                        ),
                        i.a.createElement(
                          We.a,
                          { xs: 10, sm: 3, md: 3, lg: 3, xl: 3 },
                          i.a.createElement(
                            Ye,
                            null,
                            e
                              ? i.a.createElement(Yt, { key: 4 }, "ALAMAT")
                              : i.a.createElement(Yt, { key: 12 }, "ADDRESS")
                          ),
                          i.a.createElement(
                            ee.a,
                            null,
                            i.a.createElement(
                              We.a,
                              { xs: !0, sm: !0, md: !0 },
                              i.a.createElement("img", {
                                src: oa.a,
                                className: "img-fluid",
                                alt: ""
                              })
                            ),
                            i.a.createElement(
                              We.a,
                              {
                                className: "p-0 align-self-center",
                                sm: !0,
                                xs: 10,
                                md: 9,
                                xl: 10
                              },
                              i.a.createElement(
                                Xt,
                                null,
                                "Sukagalih, Megamendung, 16770 Bogor, Indonesia"
                              )
                            )
                          )
                        ),
                        i.a.createElement(
                          We.a,
                          { xs: 10, sm: 3, md: 3, lg: 3, xl: 3 },
                          i.a.createElement(
                            Ye,
                            null,
                            e
                              ? i.a.createElement(Yt, { key: 12 }, "KONTAK")
                              : i.a.createElement(Yt, { key: 14 }, "CONTACT")
                          ),
                          i.a.createElement(
                            ee.a,
                            {
                              className:
                                this.props.max500 || this.props.min1024
                                  ? "mb-2"
                                  : ""
                            },
                            i.a.createElement(
                              We.a,
                              { xs: !0, sm: !0, md: !0 },
                              i.a.createElement("img", {
                                src: ra.a,
                                className: "img-fluid",
                                alt: ""
                              })
                            ),
                            i.a.createElement(
                              We.a,
                              {
                                className: "p-0 align-self-center",
                                xs: 10,
                                md: 9,
                                xl: 10
                              },
                              i.a.createElement(Xt, null, "+62812 548 0468")
                            )
                          ),
                          i.a.createElement(
                            ee.a,
                            null,
                            i.a.createElement(
                              We.a,
                              { xs: !0, sm: !0, md: !0, xl: !0 },
                              i.a.createElement("img", {
                                src: ta.a,
                                className: "img-fluid",
                                alt: ""
                              })
                            ),
                            i.a.createElement(
                              We.a,
                              {
                                className: "p-0 align-self-center",
                                xs: 10,
                                md: 9,
                                xl: 10
                              },
                              i.a.createElement(
                                Xt,
                                null,
                                "info.villaakira@gmail.com"
                              )
                            )
                          )
                        ),
                        i.a.createElement(
                          We.a,
                          {
                            xs: 10,
                            sm: 3,
                            md: 3,
                            lg: 3,
                            xl: 3,
                            className: this.props.max500 ? "mt-2" : ""
                          },
                          i.a.createElement(
                            Ye,
                            null,
                            e
                              ? i.a.createElement(
                                  Yt,
                                  { key: 12 },
                                  "SOSIAL MEDIA"
                                )
                              : i.a.createElement(
                                  Yt,
                                  { key: 3 },
                                  "SOCIAL MEDIA"
                                )
                          ),
                          i.a.createElement(
                            ee.a,
                            null,
                            i.a.createElement(
                              We.a,
                              { xs: !0, sm: 1, md: !0 },
                              i.a.createElement("img", {
                                src: na.a,
                                className: "img-fluid",
                                alt: ""
                              })
                            ),
                            i.a.createElement(
                              We.a,
                              {
                                className: "p-0 align-self-center",
                                xs: 10,
                                md: 9,
                                xl: 10
                              },
                              i.a.createElement(Xt, null, "villa.akira")
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(i.a.PureComponent);
      var ca = (function(e) {
        function t() {
          return (
            Object(D.a)(this, t),
            Object(G.a)(this, Object(W.a)(t).apply(this, arguments))
          );
        }
        return (
          Object(J.a)(t, e),
          Object(H.a)(t, [
            {
              key: "componentDidMount",
              value: function() {
                var e = window.matchMedia("(max-width:550px)");
                this.props.max500Func(e), e.addListener(this.props.max500Func);
                var t = window.matchMedia("(max-width:1024px)");
                this.props.max1024Func(t),
                  t.addListener(this.props.max1024Func);
                var a = window.matchMedia("(max-width:768px)");
                this.props.max768Func(a), a.addListener(this.props.max768Func);
                var n = window.matchMedia("(min-width:1024px)");
                this.props.min1024Func(n),
                  n.addListener(this.props.min1024Func);
                var i = window.matchMedia("(min-width:768px)");
                this.props.min768Func(i), i.addListener(this.props.min768Func);
              }
            },
            {
              key: "render",
              value: function() {
                var e = {
                  max500: this.props.max500Query,
                  min1024: this.props.min1024Query,
                  min768: this.props.min768Query,
                  max768: this.props.max768Query,
                  max1024: this.props.max1024Query
                };
                return i.a.createElement(
                  Be,
                  { id: "home" },
                  i.a.createElement($e, { indonesia: this.props.indonesia }),
                  this.props.ready &&
                    i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        yt,
                        Object.assign({}, e, {
                          indonesia: this.props.indonesia
                        })
                      ),
                      i.a.createElement(
                        Et,
                        Object.assign({}, e, {
                          indonesia: this.props.indonesia
                        })
                      ),
                      i.a.createElement(
                        Nt,
                        Object.assign({}, e, {
                          indonesia: this.props.indonesia
                        })
                      ),
                      i.a.createElement(
                        Tt,
                        Object.assign({}, e, {
                          indonesia: this.props.indonesia
                        })
                      ),
                      i.a.createElement(
                        Vt,
                        Object.assign({}, e, {
                          indonesia: this.props.indonesia
                        })
                      ),
                      i.a.createElement(
                        Kt,
                        Object.assign({}, e, {
                          indonesia: this.props.indonesia
                        })
                      ),
                      i.a.createElement(
                        la,
                        Object.assign({}, e, {
                          indonesia: this.props.indonesia
                        })
                      )
                    )
                );
              }
            }
          ]),
          t
        );
      })(i.a.Component);
      var ma = [
          {
            component: Object(s.c)(
              function(e) {
                return {
                  ready: e.global.ready,
                  bg: e.global.image[0],
                  max500Query: e.home.max500,
                  max1024Query: e.home.max1024,
                  max768Query: e.home.max768,
                  min1024Query: e.home.min1024,
                  min768Query: e.home.min768,
                  indonesia: e.global.indonesia
                };
              },
              function(e) {
                return {
                  max500Func: function(t) {
                    return e(
                      (function(e) {
                        return e.matches
                          ? { type: N, payload: !0 }
                          : { type: N, payload: !1 };
                      })(t)
                    );
                  },
                  max768Func: function(t) {
                    return e(
                      (function(e) {
                        return e.matches
                          ? { type: S, payload: !0 }
                          : { type: S, payload: !1 };
                      })(t)
                    );
                  },
                  max1024Func: function(t) {
                    return e(
                      (function(e) {
                        return e.matches
                          ? { type: O, payload: !0 }
                          : { type: O, payload: !1 };
                      })(t)
                    );
                  },
                  min768Func: function(t) {
                    return e(
                      (function(e) {
                        return e.matches
                          ? { type: C, payload: !0 }
                          : { type: C, payload: !1 };
                      })(t)
                    );
                  },
                  min1024Func: function(t) {
                    return e(
                      (function(e) {
                        return e.matches
                          ? { type: A, payload: !0 }
                          : { type: A, payload: !1 };
                      })(t)
                    );
                  }
                };
              }
            )(ca),
            exact: !0,
            path: "/"
          }
        ],
        da = {
          border: { buttonRadius: "3px", cardRadius: "6px" },
          colors: {
            black: "#000000",
            blue: "#10496E",
            brown: "#BA461C",
            darkGray: "#636363",
            gray: "#9B9B9B",
            lightBlack: "#4A4A4A",
            lightBlue: "#B3C0DD",
            lightGray: "#E6E6E6",
            navy: "#273E71",
            orange: "#F55D25",
            pink: "#FFF7E6",
            red: "#D0021B",
            white: "#FFFFFF",
            yellow: "#DFA735"
          }
        };
      function ua() {
        var e = Object(P.a)([
          "\n                    display: flex;\n                    justify-content: center;\n                  "
        ]);
        return (
          (ua = function() {
            return e;
          }),
          e
        );
      }
      var ha = (function(e) {
        function t() {
          return (
            Object(D.a)(this, t),
            Object(G.a)(this, Object(W.a)(t).apply(this, arguments))
          );
        }
        return (
          Object(J.a)(t, e),
          Object(H.a)(t, [
            {
              key: "componentDidMount",
              value: function() {
                var e = this;
                new Y.a('a[href*="#"]', {
                  speed: 700,
                  speedAsDuration: !0,
                  offset: 120
                });
                window.onscroll = function() {
                  document.documentElement.scrollTop > 50
                    ? e.props.changeBarColor(!0)
                    : e.props.changeBarColor(!1);
                };
              }
            },
            {
              key: "render",
              value: function() {
                var e = ma.map(function(e) {
                  return i.a.createElement(K.a, {
                    component: e.component,
                    exact: e.exact,
                    path: e.path
                  });
                });
                return i.a.createElement(
                  q.a,
                  { theme: da },
                  i.a.createElement(
                    "div",
                    null,
                    i.a.createElement(
                      $.a,
                      { when: !this.props.ready },
                      i.a.createElement(
                        Z.a,
                        {
                          style: {
                            height: "100vh",
                            zIndex: this.props.ready ? -1e3 : 1e3,
                            position: "fixed",
                            width: "100vw"
                          }
                        },
                        i.a.createElement(
                          ee.a,
                          {
                            className:
                              "justify-content-center align-content-center",
                            style: { height: "inherit", width: "inherit" }
                          },
                          i.a.createElement(te.BeatLoader, {
                            css: Object(ae.css)(ua()),
                            size: "3rem",
                            color: "#46564A",
                            loading: !this.props.ready
                          })
                        )
                      )
                    ),
                    i.a.createElement(je, {
                      ready: this.props.ready,
                      changeColor: this.props.changeColor,
                      changeBar: this.props.changeBar,
                      max500: this.props.max500Query,
                      max1024: this.props.max1024Query,
                      changeLanguage: this.props.changeLanguage,
                      indonesia: this.props.indonesia
                    }),
                    i.a.createElement(
                      $.a,
                      { when: this.props.ready },
                      i.a.createElement(
                        Ne,
                        null,
                        i.a.createElement(U.a, null, e)
                      )
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(i.a.Component);
      var ga = Object(_.a)(
        Object(s.c)(
          function(e) {
            return {
              changeColor: e.global.changeInnerColor,
              changeBar: e.global.changeBarColor,
              ready: e.global.ready,
              max500Query: e.home.max500,
              max1024Query: e.home.max1024,
              indonesia: e.global.indonesia
            };
          },
          function(e) {
            return {
              changeBarColor: function(t) {
                e(ie(t));
              },
              changeInnerColor: function(t) {
                e(ne(t));
              },
              readyFunc: function() {
                e(re());
              },
              changeLanguage: function() {
                e({ type: w });
              }
            };
          }
        )(ha)
      );
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(196), a(197);
      var pa = document.querySelector("#root");
      Object(r.render)(
        i.a.createElement(
          s.a,
          { store: R },
          i.a.createElement(o.a, { history: L }, i.a.createElement(ga, null))
        ),
        pa
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    55: function(e, t, a) {
      e.exports = a.p + "static/media/Pool-3.9882deff.jpg";
    },
    56: function(e, t, a) {
      e.exports = a.p + "static/media/15 Melati's bed_1_rev.01f0f1a1.png";
    },
    57: function(e, t, a) {
      e.exports = a.p + "static/media/0.196e6012.png";
    },
    58: function(e, t, a) {
      e.exports = a.p + "static/media/1.afb9557f.png";
    },
    59: function(e, t, a) {
      e.exports = a.p + "static/media/2.719fc9c6.png";
    },
    60: function(e, t, a) {
      e.exports = a.p + "static/media/3.ea25eecf.png";
    },
    61: function(e, t, a) {
      e.exports = a.p + "static/media/4.496fbe67.png";
    },
    62: function(e, t, a) {
      e.exports = a.p + "static/media/5.d8a871f9.png";
    },
    68: function(e, t, a) {
      e.exports = a.p + "static/media/host.ddc40f31.jpg";
    },
    77: function(e, t, a) {
      e.exports = a.p + "static/media/logo va white smaller.83a57424.png";
    },
    78: function(e, t, a) {
      e.exports = a.p + "static/media/log va grin.366c31d5.png";
    },
    82: function(e, t, a) {
      e.exports = a.p + "static/media/Bird's eye view1.9d76e1b5.jpg";
    },
    85: function(e, t, a) {
      e.exports = a.p + "static/media/log va wite.8d56fc9c.png";
    },
    86: function(e, t, a) {
      e.exports = a.p + "static/media/envelope.da5c997c.svg";
    },
    87: function(e, t, a) {
      e.exports = a.p + "static/media/instagram-logo.263ded7f.svg";
    },
    88: function(e, t, a) {
      e.exports = a.p + "static/media/telephone.85fe7ba8.svg";
    },
    89: function(e, t, a) {
      e.exports = a.p + "static/media/place.49cfccb0.svg";
    },
    93: function(e, t, a) {
      e.exports = a(198);
    }
  },
  [[93, 1, 2]]
]);
//# sourceMappingURL=main.36c0898c.chunk.js.map
