//Mon Jul 13 2026 06:15:54 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("有赞");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(M) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (P) {
        {
          return typeof P;
        }
      } : function (P) {
        {
          return P && "function" == typeof Symbol && P.constructor === Symbol && P !== Symbol.prototype ? "symbol" : typeof P;
        }
      };
      return b(M);
    }
  }
  function c(M, N) {
    {
      var P = "undefined" != typeof Symbol && M[Symbol.iterator] || M["@@iterator"];
      if (!P) {
        {
          if (Array.isArray(M) || (P = d(M)) || N && M && "number" == typeof M.length) {
            {
              P && (M = P);
              var Q = 0;
              var R = function () {};
              return {
                s: R,
                n: function () {
                  {
                    var X = {
                      done: true
                    };
                    return Q >= M.length ? X : {
                      done: false,
                      value: M[Q++]
                    };
                  }
                },
                e: function (V) {
                  {
                    throw V;
                  }
                },
                f: R
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var S;
      var T = true;
      var U = false;
      return {
        s: function () {
          {
            P = P.call(M);
          }
        },
        n: function () {
          {
            var X = P.next();
            T = X.done;
            return X;
          }
        },
        e: function (X) {
          U = true;
          S = X;
        },
        f: function () {
          {
            try {
              {
                T || null == P.return || P.return();
              }
            } finally {
              {
                if (U) {
                  throw S;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(M, N) {
    {
      if (M) {
        {
          if ("string" == typeof M) {
            return e(M, N);
          }
          var P = {}.toString.call(M).slice(8, -1);
          "Object" === P && M.constructor && (P = M.constructor.name);
          return "Map" === P || "Set" === P ? Array.from(M) : "Arguments" === P || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P) ? e(M, N) : undefined;
        }
      }
    }
  }
  function e(M, N) {
    {
      (null == N || N > M.length) && (N = M.length);
      for (var Q = 0, R = Array(N); Q < N; Q++) {
        R[Q] = M[Q];
      }
      return R;
    }
  }
  function f() {
    "use strict";

    var M = {
      lKzJa: "throw",
      aoifI: function (ao, ap) {
        return ao === ap;
      },
      AHyWx: "IPLwE",
      iVmVf: function (ao, ap) {
        return ao(ap);
      },
      mrKJI: function (ao, ap) {
        return ao < ap;
      },
      jkgbk: function (ao, ap, aq) {
        return ao(ap, aq);
      },
      iqQVh: function (ao, ap) {
        return ao < ap;
      },
      udCJn: function (ao, ap) {
        return ao(ap);
      },
      vJstW: "normal",
      NOdCM: "nngnY",
      gdwJp: function (ao, ap) {
        return ao instanceof ap;
      },
      nJDWT: "_invoke",
      HfPSg: function (ao, ap) {
        return ao == ap;
      },
      BwOvv: function (ao, ap, aq, ar) {
        return ao(ap, aq, ar);
      },
      VefiT: function (ao, ap) {
        return ao !== ap;
      },
      suKcp: "eUBWH",
      Tngfi: "CkMRa",
      IOJvl: function (ao, ap) {
        return ao !== ap;
      },
      yONwI: "CxGTq",
      MwGbS: "deXkf",
      oLwuw: "DEhfy",
      CEHpJ: "WUwyk",
      JUuXR: function (ao, ap) {
        return ao(ap);
      },
      svHbp: function (ao, ap) {
        return ao in ap;
      },
      GZCSk: "BfoVT",
      gjUau: function (ao, ap) {
        return ao == ap;
      },
      LUVnC: "function",
      uZiKg: function (ao, ap) {
        return ao(ap);
      },
      lDyJO: function (ao, ap, aq, ar, as, at, au, av) {
        return ao(ap, aq, ar, as, at, au, av);
      },
      NaIiZ: "next",
      ymrub: "wMBVH",
      Cwzhs: function (ao, ap) {
        return ao !== ap;
      },
      nDDIY: "yRYXM",
      joDMe: function (ao, ap) {
        return ao - ap;
      },
      fkySw: function (ao, ap) {
        return ao(ap);
      },
      iZVIz: function (ao, ap, aq, ar, as) {
        return ao(ap, aq, ar, as);
      },
      kKajZ: "Object",
      eBoSa: "WSCmh",
      GsMfd: "mneGp",
      XGUPN: "bzcLp",
      Yzitl: function (ao, ap) {
        return ao !== ap;
      },
      zOFXg: "HJOsb",
      UsMQC: function (ao, ap, aq, ar) {
        return ao(ap, aq, ar);
      },
      ntQCJ: function (ao, ap) {
        return ao !== ap;
      },
      yyiuW: "object",
      VAZAz: function (ao, ap) {
        return ao(ap);
      },
      PHiTo: "KwsaY",
      VOJqN: "ydtFA",
      YGLWL: "tCtte",
      lvEvq: function (ao, ap) {
        return ao === ap;
      },
      aNdjw: function (ao, ap) {
        return ao === ap;
      },
      thiCb: function (ao, ap) {
        return ao === ap;
      },
      URKRf: "qEtXW",
      XxifD: "zoNUN",
      sjYJC: "GXqKz",
      MLvgm: "MnWcx",
      txQTj: function (ao, ap) {
        return ao === ap;
      },
      JvpZe: "XlZAb",
      eonQO: "qRCKs",
      weSXv: function (ao, ap) {
        return ao === ap;
      },
      oQUML: function (ao, ap) {
        return ao === ap;
      },
      LJDmx: "TmXfP",
      qWsfv: function (ao, ap) {
        return ao === ap;
      },
      gXZno: function (ao, ap) {
        return ao === ap;
      },
      HNWsw: "GHwbA",
      lQahd: "PYMAi",
      tLEsS: function (ao, ap) {
        return ao === ap;
      },
      LRgyU: "catchLoc",
      bucAq: "finallyLoc",
      qDIYL: function (ao, ap) {
        return ao(ap);
      },
      oUzAf: function (ao, ap) {
        return ao < ap;
      },
      IatnR: "try statement without catch or finally",
      aNeRh: "symbol",
      WyZDn: function (ao, ap) {
        return ao === ap;
      },
      qSowd: "NOkQQ",
      GwyPm: "efaWO",
      JfANM: function (ao) {
        return ao();
      },
      GGPMo: "ePNfT",
      cikYC: function (ao, ap, aq, ar) {
        return ao(ap, aq, ar);
      },
      lBhbW: "return",
      aZXAY: function (ao, ap) {
        return ao + ap;
      },
      XujUC: "The iterator does not provide a '",
      FVMUW: "' method",
      Uqgrk: function (ao, ap) {
        return ao !== ap;
      },
      xnwin: "end",
      bFSKr: function (ao, ap) {
        return ao === ap;
      },
      ifPVy: "FIhGJ",
      tuiyZ: "VKWXc",
      qAgdY: "ctjvW",
      UOdXx: function (ao, ap) {
        return ao(ap);
      },
      fSRhz: function (ao, ap) {
        return ao(ap);
      },
      VcLmT: " API请求失败，请检查网路重试",
      wGVox: function (ao, ap) {
        return ao(ap);
      },
      XJOIc: function (ao) {
        return ao();
      },
      pxomv: "Utils_Code",
      GqJsi: function (ao, ap) {
        return ao(ap);
      },
      ItxWD: "✅ Utils加载成功, 请继续",
      QNXFW: function (ao) {
        return ao();
      },
      DVTdB: function (ao, ap) {
        return ao === ap;
      },
      hvofF: "JvgGj",
      hAWLQ: function (ao, ap) {
        return ao !== ap;
      },
      LdpEk: "XGsoY",
      cjfJx: function (ao, ap) {
        return ao(ap);
      },
      lXmze: function (ao, ap) {
        return ao === ap;
      },
      OKEDD: "nEKdw",
      mgmrd: "uzwgq",
      OyEfC: "[object Generator]",
      sYmMT: "GeneratorFunction",
      Ihzjp: "aPMdh",
      HvEyp: "Smakk",
      AhvdM: "LzohC",
      MKHVj: function (ao, ap) {
        return ao in ap;
      },
      ozHWv: "EAlDm",
      yuPtx: "0|4|1|2|3|5",
      IeFmr: function (ao, ap, aq, ar) {
        return ao(ap, aq, ar);
      },
      zpmfD: function (ao, ap) {
        return ao === ap;
      },
      hqwBH: function (ao, ap) {
        return ao === ap;
      },
      JFVRa: function (ao, ap, aq) {
        return ao(ap, aq);
      },
      TXKSX: function (ao, ap) {
        return ao !== ap;
      },
      oNrGv: function (ao, ap) {
        return ao + ap;
      },
      JfwVl: function (ao, ap) {
        return ao !== ap;
      },
      qfAwX: "iterator result is not an object",
      pAaii: "YWLve",
      qPoTM: function (ao, ap) {
        return ao === ap;
      },
      KGapa: "zLHmB",
      wDreP: "WtNNB",
      tyINw: "break",
      wMEFb: "continue",
      FVwkq: function (ao, ap) {
        return ao(ap);
      },
      sPTES: function (ao) {
        return ao();
      },
      kIZHl: "wfmqg",
      lFMIj: function (ao, ap) {
        return ao - ap;
      },
      iNDOU: function (ao, ap) {
        return ao >= ap;
      },
      arZEd: "diiVY",
      bbaKx: "zcGyH",
      AUnNX: function (ao, ap) {
        return ao === ap;
      },
      hWkWg: "CqoEU",
      atOaE: function (ao, ap) {
        return ao(ap);
      },
      afSiW: "PTPuO",
      kWrif: "ZAIRO"
    };
    f = function () {
      {
        return T;
      }
    };
    var Q;
    var T = {
      wrap: a2
    };
    var U = Object.prototype;
    var V = U.hasOwnProperty;
    var W = Object.defineProperty || function (ao, ap, aq) {
      {
        ao[ap] = aq.value;
      }
    };
    var X = "function" == typeof Symbol ? Symbol : {};
    var Y = X.iterator || "@@iterator";
    var Z = X.asyncIterator || "@@asyncIterator";
    var a0 = X.toStringTag || "@@toStringTag";
    function a1(ao, ap, aq) {
      {
        var ar = {
          value: aq,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(ao, ap, ar);
        return ao[ap];
      }
    }
    try {
      {
        a1({}, "");
      }
    } catch (ap) {
      a1 = function (ar, as, at) {
        {
          return ar[as] = at;
        }
      };
    }
    function a2(ar, as, at, au) {
      {
        var av = as && as.prototype instanceof a9 ? as : a9;
        var aw = Object.create(av.prototype);
        var ax = new am(au || []);
        W(aw, "_invoke", {
          value: ai(ar, at, ax)
        });
        return aw;
      }
    }
    function a3(ar, as, at) {
      {
        try {
          {
            return {
              type: "normal",
              arg: ar.call(as, at)
            };
          }
        } catch (ax) {
          {
            var av = {
              type: "throw",
              arg: ax
            };
            return av;
          }
        }
      }
    }
    var a4 = "suspendedStart";
    var a5 = "suspendedYield";
    var a6 = "executing";
    var a7 = "completed";
    var a8 = {};
    function a9() {}
    function aa() {}
    function ab() {}
    var ac = {};
    a1(ac, Y, function () {
      {
        return this;
      }
    });
    var ad = Object.getPrototypeOf;
    var ae = ad && ad(ad(an([])));
    ae && ae !== U && V.call(ae, Y) && (ac = ae);
    ab.prototype = a9.prototype = Object.create(ac);
    var af = ab.prototype;
    function ag(ar) {
      {
        ["next", "throw", "return"].forEach(function (at) {
          a1(ar, at, function (au) {
            {
              return this._invoke(at, au);
            }
          });
        });
      }
    }
    function ah(ar, as) {
      {
        function aw(ax, ay, az, aA) {
          {
            var aC = a3(ar[ax], ar, ay);
            if ("throw" !== aC.type) {
              {
                var aD = aC.arg;
                var aE = aD.value;
                return aE && "object" == b(aE) && V.call(aE, "__await") ? as.resolve(aE.__await).then(function (aH) {
                  {
                    aw("next", aH, az, aA);
                  }
                }, function (aH) {
                  {
                    aw("throw", aH, az, aA);
                  }
                }) : as.resolve(aE).then(function (aH) {
                  {
                    aD.value = aH;
                    az(aD);
                  }
                }, function (aH) {
                  {
                    return aw("throw", aH, az, aA);
                  }
                });
              }
            }
            aA(aC.arg);
          }
        }
        var au;
        W(this, "_invoke", {
          value: function (ax, ay) {
            {
              function aB() {
                return new as(function (aC, aD) {
                  aw(ax, ay, aC, aD);
                });
              }
              return au = au ? au.then(aB, aB) : aB();
            }
          }
        });
      }
    }
    function ai(ar, as, at) {
      {
        var av = a4;
        return function (ax, ay) {
          {
            if (av === a6) {
              throw Error("Generator is already running");
            }
            if (av === a7) {
              {
                if ("throw" === ax) {
                  throw ay;
                }
                var az = {
                  value: Q,
                  done: true
                };
                return az;
              }
            }
            for (at.method = ax, at.arg = ay;;) {
              {
                var aA = at.delegate;
                if (aA) {
                  {
                    var aB = aj(aA, at);
                    if (aB) {
                      {
                        if (aB === a8) {
                          continue;
                        }
                        return aB;
                      }
                    }
                  }
                }
                if ("next" === at.method) {
                  at.sent = at._sent = at.arg;
                } else {
                  if ("throw" === at.method) {
                    {
                      if (av === a4) {
                        throw av = a7, at.arg;
                      }
                      at.dispatchException(at.arg);
                    }
                  } else {
                    "return" === at.method && at.abrupt("return", at.arg);
                  }
                }
                av = a6;
                var aC = a3(ar, as, at);
                if ("normal" === aC.type) {
                  {
                    if (av = at.done ? a7 : a5, aC.arg === a8) {
                      continue;
                    }
                    var aD = {
                      value: aC.arg,
                      done: at.done
                    };
                    return aD;
                  }
                }
                "throw" === aC.type && (av = a7, at.method = "throw", at.arg = aC.arg);
              }
            }
          }
        };
      }
    }
    function aj(ar, as) {
      {
        var ax = as.method;
        var ay = ar.iterator[ax];
        if (ay === Q) {
          as.delegate = null;
          "throw" === ax && ar.iterator.return && (as.method = "return", as.arg = Q, aj(ar, as), "throw" === as.method) || "return" !== ax && (as.method = "throw", as.arg = new TypeError("The iterator does not provide a '" + ax + "' method"));
          return a8;
        }
        var av = a3(ay, ar.iterator, as.arg);
        if ("throw" === av.type) {
          as.method = "throw";
          as.arg = av.arg;
          as.delegate = null;
          return a8;
        }
        var aw = av.arg;
        return aw ? aw.done ? (as[ar.resultName] = aw.value, as.next = ar.nextLoc, "return" !== as.method && (as.method = "next", as.arg = Q), as.delegate = null, a8) : aw : (as.method = "throw", as.arg = new TypeError("iterator result is not an object"), as.delegate = null, a8);
      }
    }
    function ak(ar) {
      {
        var at = {
          tryLoc: ar[0]
        };
        1 in ar && (at.catchLoc = ar[1]);
        2 in ar && (at.finallyLoc = ar[2], at.afterLoc = ar[3]);
        this.tryEntries.push(at);
      }
    }
    function al(ar) {
      {
        var as = ar.completion || {};
        as.type = "normal";
        delete as.arg;
        ar.completion = as;
      }
    }
    function am(ar) {
      {
        var as = {
          tryLoc: "root"
        };
        this.tryEntries = [as];
        ar.forEach(ak, this);
        this.reset(true);
      }
    }
    function an(ar) {
      {
        if (ar || "" === ar) {
          {
            var at = ar[Y];
            if (at) {
              return at.call(ar);
            }
            if ("function" == typeof ar.next) {
              return ar;
            }
            if (!isNaN(ar.length)) {
              {
                var au = -1;
                var av = function ay() {
                  {
                    for (; ++au < ar.length;) {
                      if (V.call(ar, au)) {
                        ay.value = ar[au];
                        ay.done = false;
                        return ay;
                      }
                    }
                    ay.value = Q;
                    ay.done = true;
                    return ay;
                  }
                };
                return av.next = av;
              }
            }
          }
        }
        throw new TypeError(b(ar) + " is not iterable");
      }
    }
    aa.prototype = ab;
    W(af, "constructor", {
      value: ab,
      configurable: true
    });
    W(ab, "constructor", {
      value: aa,
      configurable: true
    });
    aa.displayName = a1(ab, a0, "GeneratorFunction");
    T.isGeneratorFunction = function (ar) {
      {
        var as = "function" == typeof ar && ar.constructor;
        return !!as && (as === aa || "GeneratorFunction" === (as.displayName || as.name));
      }
    };
    T.mark = function (ar) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(ar, ab) : (ar.__proto__ = ab, a1(ar, a0, "GeneratorFunction"));
        ar.prototype = Object.create(af);
        return ar;
      }
    };
    T.awrap = function (ar) {
      {
        var as = {
          __await: ar
        };
        return as;
      }
    };
    ag(ah.prototype);
    a1(ah.prototype, Z, function () {
      {
        return this;
      }
    });
    T.AsyncIterator = ah;
    T.async = function (ar, as, at, au, av) {
      {
        undefined === av && (av = Promise);
        var ax = new ah(a2(ar, as, at, au), av);
        return T.isGeneratorFunction(as) ? ax : ax.next().then(function (az) {
          {
            return az.done ? az.value : ax.next();
          }
        });
      }
    };
    ag(af);
    a1(af, a0, "Generator");
    a1(af, Y, function () {
      {
        return this;
      }
    });
    a1(af, "toString", function () {
      return "[object Generator]";
    });
    T.keys = function (ar) {
      {
        var at = Object(ar);
        var au = [];
        for (var av in at) au.push(av);
        au.reverse();
        return function aw() {
          {
            for (; au.length;) {
              {
                var ay = au.pop();
                if (ay in at) {
                  aw.value = ay;
                  aw.done = false;
                  return aw;
                }
              }
            }
            aw.done = true;
            return aw;
          }
        };
      }
    };
    T.values = an;
    am.prototype = {
      constructor: am,
      reset: function (ar) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = Q, this.done = false, this.delegate = null, this.method = "next", this.arg = Q, this.tryEntries.forEach(al), !ar) {
            for (var as in this) "t" === as.charAt(0) && V.call(this, as) && !isNaN(+as.slice(1)) && (this[as] = Q);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var at = this.tryEntries[0].completion;
          if ("throw" === at.type) {
            throw at.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (ar) {
        {
          if (this.done) {
            throw ar;
          }
          var at = this;
          function aA(aB, aC) {
            aw.type = "throw";
            aw.arg = ar;
            at.next = aB;
            aC && (at.method = "next", at.arg = Q);
            return !!aC;
          }
          for (var au = this.tryEntries.length - 1; au >= 0; --au) {
            var av = this.tryEntries[au];
            var aw = av.completion;
            if ("root" === av.tryLoc) {
              return aA("end");
            }
            if (av.tryLoc <= this.prev) {
              {
                var ax = V.call(av, "catchLoc");
                var ay = V.call(av, "finallyLoc");
                if (ax && ay) {
                  {
                    if (this.prev < av.catchLoc) {
                      return aA(av.catchLoc, true);
                    }
                    if (this.prev < av.finallyLoc) {
                      return aA(av.finallyLoc);
                    }
                  }
                } else {
                  if (ax) {
                    {
                      if (this.prev < av.catchLoc) {
                        return aA(av.catchLoc, true);
                      }
                    }
                  } else {
                    {
                      if (!ay) {
                        throw Error("try statement without catch or finally");
                      }
                      if (this.prev < av.finallyLoc) {
                        return aA(av.finallyLoc);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (ar, as) {
        {
          for (var au = this.tryEntries.length - 1; au >= 0; --au) {
            {
              var av = this.tryEntries[au];
              if (av.tryLoc <= this.prev && V.call(av, "finallyLoc") && this.prev < av.finallyLoc) {
                {
                  var aw = av;
                  break;
                }
              }
            }
          }
          aw && ("break" === ar || "continue" === ar) && aw.tryLoc <= as && as <= aw.finallyLoc && (aw = null);
          var ax = aw ? aw.completion : {};
          ax.type = ar;
          ax.arg = as;
          return aw ? (this.method = "next", this.next = aw.finallyLoc, a8) : this.complete(ax);
        }
      },
      complete: function (ar, as) {
        {
          if ("throw" === ar.type) {
            throw ar.arg;
          }
          "break" === ar.type || "continue" === ar.type ? this.next = ar.arg : "return" === ar.type ? (this.rval = this.arg = ar.arg, this.method = "return", this.next = "end") : "normal" === ar.type && as && (this.next = as);
          return a8;
        }
      },
      finish: function (ar) {
        {
          for (var au = this.tryEntries.length - 1; au >= 0; --au) {
            {
              var av = this.tryEntries[au];
              if (av.finallyLoc === ar) {
                this.complete(av.completion, av.afterLoc);
                al(av);
                return a8;
              }
            }
          }
        }
      },
      catch: function (ar) {
        {
          for (var at = this.tryEntries.length - 1; at >= 0; --at) {
            {
              var au = this.tryEntries[at];
              if (au.tryLoc === ar) {
                {
                  var av = au.completion;
                  if ("throw" === av.type) {
                    {
                      var aw = av.arg;
                      al(au);
                    }
                  }
                  return aw;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (ar, as, at) {
        this.delegate = {
          iterator: an(ar),
          resultName: as,
          nextLoc: at
        };
        "next" === this.method && (this.arg = Q);
        return a8;
      }
    };
    return T;
  }
  function g(M, N, O, P, Q, R, S) {
    {
      try {
        {
          var U = M[R](S);
          var V = U.value;
        }
      } catch (X) {
        {
          return void O(X);
        }
      }
      U.done ? N(V) : Promise.resolve(V).then(P, Q);
    }
  }
  function h(M) {
    return function () {
      var P = this;
      var Q = arguments;
      return new Promise(function (R, S) {
        var U = M.apply(P, Q);
        function V(X) {
          {
            g(U, R, S, V, W, "next", X);
          }
        }
        function W(X) {
          {
            g(U, R, S, V, W, "throw", X);
          }
        }
        V(undefined);
      });
    };
  }
  var i = ($.isNode() ? process.env.XZXXN : $.getdata("XZXXN")) || "";
  var j = ($.isNode() ? process.env.XZXXNSERVER : $.getdata("XZXXNSERVER")) || "https://dalaoshi.xn--ug8h.eu.org";
  var k = ($.isNode() ? process.env.YOUZAN : $.getdata("YOUZAN")) || "";
  var l = ($.isNode() ? process.env.CAPTCHA_SERVER : $.getdata("CAPTCHA_SERVER")) || "https://captcha.fuckinghigh.eu.org";
  var m = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var n;
  var o;
  var p;
  var q;
  var r;
  var s = "";
  var u = ($.isNode() ? process.env.YOUZAN_QueryProduct : $.getdata("YOUZAN_QueryProduct")) || false;
  var v = ["checkinId=12063&kdt_id=18739377", "checkinId=2162835&kdt_id=44877243", "checkinId=99&kdt_id=41067901", "checkinId=3520910&kdt_id=129380009", "checkinId=2923467&kdt_id=109809208", "checkinId=2910869&kdt_id=43958855", "checkinId=2386563&kdt_id=42213767", "checkinId=1597464&kdt_id=100464643", "checkinId=3347128&kdt_id=117130552", "checkinId=2299510&kdt_id=107786737", "checkinId=18415&kdt_id=44694253", "checkinId=3549859&kdt_id=130177909", "checkinId=1820214&kdt_id=93457151", "checkinId=3997371&kdt_id=105036832", "checkinId=4804346&kdt_id=121810522", "checkinId=4296415&kdt_id=146288343", "checkinId=4806300&kdt_id=139827364", "checkinId=13736&kdt_id=16365465", "checkinId=9975&kdt_id=77770507", "checkinId=24630&kdt_id=43183730", "checkinId=3721624&kdt_id=96543670", "checkinId=3800805&kdt_id=113745713", "checkinId=5428477&kdt_id=179778907", "checkinId=2947047&kdt_id=77093133", "checkinId=2682116&kdt_id=44519665", "checkinId=6287727&kdt_id=149536603"];
  function w() {
    return x.apply(this, arguments);
  }
  function x() {
    var M = {
      azKfx: function (N, O) {
        return N == O;
      },
      korXJ: function (N, O) {
        return N < O;
      },
      pYdNc: "function",
      HJQzK: function (N, O) {
        return N(O);
      },
      DGuPZ: function (N, O) {
        return N + O;
      },
      FBIEC: " is not iterable",
      Crpqw: "tirlF",
      cpEmR: function (N, O) {
        return N !== O;
      },
      qhytm: "musjH",
      ZDmEH: function (N, O) {
        return N(O);
      },
      OAHpI: "先填写账号token",
      exCpw: function (N) {
        return N();
      },
      LMBUS: function (N, O) {
        return N(O);
      },
      UmKNS: "hxSNq",
      nrNjK: "YOUZAN",
      kyXpV: function (N, O) {
        return N == O;
      },
      CnLyO: "SAYsh",
      ZlKSM: "continue",
      KtztS: "youzan.com.aesiv",
      ToIEA: function (N, O, P) {
        return N(O, P);
      },
      esGLu: function (N, O) {
        return N(O);
      },
      IalYn: function (N, O) {
        return N != O;
      },
      nTYvv: function (N, O) {
        return N !== O;
      },
      hJsrL: "nXQIG",
      RcGut: "qrqCy",
      uMaxl: "COTnz",
      GANjo: function (N, O, P) {
        return N(O, P);
      },
      jWEaB: "https://passport.youzan.com/api/login/password.json",
      jObJg: function (N, O) {
        return N(O);
      },
      IjCpn: "TENCENT_LOW_RISK",
      SVyYO: function (N, O) {
        return N == O;
      },
      AkHuk: "OdKqe",
      PvGYg: "用户：",
      oIEPY: " 登录失败：",
      EFabB: function (N, O) {
        return N !== O;
      },
      frFaY: "IOCUa",
      pIOQz: function (N, O) {
        return N(O);
      },
      JAZDW: "https://h5.youzan.com/wscshopcore/extension/shop-info.json?",
      Blimm: "店铺： ",
      EWxuP: " id：",
      KzGUv: "https://h5.youzan.com/wscump/checkin/checkinV2.json?",
      FaZpk: function (N, O) {
        return N + O;
      },
      ziRuX: "用户手机号未授权",
      SPswC: function (N, O) {
        return N === O;
      },
      tfhNe: "ppPmN",
      nBTlu: "vxKuM",
      ydkJG: "https://uic.youzan.com/passport/api/authorize-dialog/user-auth.json?",
      GJMKu: "mobile",
      TiNZS: function (N, O) {
        return N + O;
      },
      rNjEL: "签到结果：",
      xaqZD: "https://h5.youzan.com/wscuser/membercenter/pointsName.json?",
      MKDHR: function (N, O) {
        return N(O);
      },
      xlPGh: "https://h5.youzan.com/wscuser/membercenter/stats.json?",
      Ntowy: "BIxwn",
      GYtwU: "https://h5.youzan.com/wscump/pointstore/listPointGoods.json?page_size=1000",
      VENli: function (N, O) {
        return N(O);
      },
      fvaub: function (N, O) {
        return N === O;
      },
      IpKYN: "商品：",
      kKFUx: " 库存：",
      TERJz: " 需要",
      eOXmN: " + ￥",
      AcPrx: function (N, O) {
        return N / O;
      },
      USNkD: "YmDmp",
      eHETq: "MLsQN",
      YfLQC: "签到结束\n",
      LLoUF: " 签到已完成\n",
      wqJws: "PePZY",
      FcPfL: function (N, O) {
        return N(O);
      },
      ofhtr: "end"
    };
    {
      x = h(f().mark(function N() {
        var O = {
          cRjaR: " API请求失败，请检查网路重试",
          dQtIP: function (ac, ad) {
            return ac(ad);
          },
          KzcsO: function (ac, ad) {
            return ac(ad);
          },
          rIJbJ: function (ac) {
            return ac();
          },
          SRzJz: "end"
        };
        {
          var P;
          var Q;
          var R;
          var S;
          var T;
          var U;
          var V;
          var W;
          var X;
          var Y;
          var Z;
          var a0;
          var a1;
          var a2;
          var a3;
          var a4;
          var a5;
          var a6;
          var a7;
          var a8;
          var a9;
          var aa;
          var ab;
          return f().wrap(function (ad) {
            {
              for (;;) {
                switch (ad.prev = ad.next) {
                  case 0:
                    if (k) {
                      {
                        ad.next = 5;
                        break;
                      }
                    }
                    console.log("先填写账号token");
                    ad.next = 4;
                    return K("先填写账号token");
                  case 4:
                    return ad.abrupt("return");
                  case 5:
                    ad.next = 7;
                    return G();
                  case 7:
                    Utils = ad.sent;
                    r = Utils.createCryptoJS();
                    P = k.split(" ");
                    Q = c(P);
                    ad.prev = 11;
                    Q.s();
                  case 13:
                    if ((R = Q.n()).done) {
                      {
                        ad.next = 107;
                        break;
                      }
                    }
                    S = R.value;
                    ad.prev = 15;
                    p = S.split("&")[0];
                    q = S.split("&")[1];
                    console.log("用户：".concat(p, "开始签到"));
                    ad.next = 21;
                    return E({
                      token: i,
                      type: "YOUZAN",
                      userId: p
                    });
                  case 21:
                    if (T = ad.sent, 200 == (null == T ? undefined : T.code)) {
                      {
                        ad.next = 25;
                        break;
                      }
                    }
                    console.log(null == T ? undefined : T.msg);
                    return ad.abrupt("continue", 105);
                  case 25:
                    o = r.enc.Utf8.parse("youzan.com._key_");
                    n = r.enc.Utf8.parse("youzan.com.aesiv");
                    ad.next = 29;
                    return A("https://passport.youzan.com/api/login/password.json", {
                      countryCode: "+86",
                      mobile: p,
                      password: D(q),
                      passwordLevel: C(q),
                      passwordLength: q.length
                    });
                  case 29:
                    if (U = ad.sent, console.log(U.msg), 40000310 != U.code) {
                      {
                        ad.next = 46;
                        break;
                      }
                    }
                    ad.next = 34;
                    return y("".concat(l, "/captcha?aidEncrypted=").concat(U.data.decisionData.aidEncrypted));
                  case 34:
                    if (V = ad.sent, V) {
                      {
                        ad.next = 37;
                        break;
                      }
                    }
                    return ad.abrupt("continue", 105);
                  case 37:
                    console.log(V);
                    ad.next = 40;
                    return A("https://passport.youzan.com/api/login/password.json", {
                      countryCode: "+86",
                      mobile: p,
                      password: D(q),
                      passwordLevel: C(q),
                      passwordLength: q.length,
                      behavior: {
                        decisionCode: "TENCENT_LOW_RISK",
                        verifyResult: {
                          code: 0,
                          data: {
                            appid: U.data.decisionData.captchaAppId,
                            ret: 0,
                            ticket: V.ticket,
                            randstr: V.randstr,
                            verifyDuration: V.verifyDuration,
                            actionDuration: V.actionDuration,
                            sid: V.sid
                          }
                        }
                      }
                    });
                  case 40:
                    if (U = ad.sent, console.log(U.msg), 0 == U.code) {
                      {
                        ad.next = 46;
                        break;
                      }
                    }
                    ad.next = 45;
                    return K("用户：".concat(p, " 登录失败：").concat(U.msg));
                  case 45:
                    return ad.abrupt("continue", 105);
                  case 46:
                    W = c(v);
                    ad.prev = 47;
                    W.s();
                  case 49:
                    if ((X = W.n()).done) {
                      {
                        ad.next = 90;
                        break;
                      }
                    }
                    Y = X.value;
                    ad.next = 53;
                    return y("https://h5.youzan.com/wscshopcore/extension/shop-info.json?".concat(Y));
                  case 53:
                    Z = ad.sent;
                    console.log("店铺： ".concat(Z.data.shop.shopName, " id：").concat(Y));
                    ad.next = 57;
                    return y("https://h5.youzan.com/wscump/checkin/checkinV2.json?".concat(Y));
                  case 57:
                    if (a0 = ad.sent, console.log("签到结果：" + a0.msg), !a0.msg.includes("用户手机号未授权")) {
                      {
                        ad.next = 72;
                        break;
                      }
                    }
                    if (a1 = Y.match(/kdt_id=(\d+)/), a2 = null, a1 && a1[1] && (a2 = a1[1]), !a2) {
                      {
                        ad.next = 72;
                        break;
                      }
                    }
                    var af = {
                      from_params: ""
                    };
                    ad.next = 66;
                    return A("https://uic.youzan.com/passport/api/authorize-dialog/user-auth.json?".concat(Y), {
                      kdtId: a2,
                      typeList: ["mobile"],
                      bizDataMap: af
                    });
                  case 66:
                    a3 = ad.sent;
                    console.log(a3);
                    ad.next = 70;
                    return y("https://h5.youzan.com/wscump/checkin/checkinV2.json?".concat(Y));
                  case 70:
                    a4 = ad.sent;
                    console.log("签到结果：" + a4.msg);
                  case 72:
                    ad.next = 74;
                    return $.wait(2000);
                  case 74:
                    ad.next = 76;
                    return y("https://h5.youzan.com/wscuser/membercenter/pointsName.json?".concat(Y));
                  case 76:
                    a5 = ad.sent;
                    ad.next = 79;
                    return y("https://h5.youzan.com/wscuser/membercenter/stats.json?".concat(Y));
                  case 79:
                    if (a6 = ad.sent, console.log("拥有".concat(a5.data.pointsName, "：").concat(a6.data.stats.points)), !u) {
                      {
                        ad.next = 87;
                        break;
                      }
                    }
                    ad.next = 84;
                    return y("https://h5.youzan.com/wscump/pointstore/listPointGoods.json?page_size=1000");
                  case 84:
                    a7 = ad.sent;
                    a8 = c(a7.data.items);
                    try {
                      {
                        for (a8.s(); !(a9 = a8.n()).done;) {
                          aa = a9.value;
                          ab = aa.couponGroupInfoDTO.groupName || aa.generalGoodsInfoDTO.generalGoodsTitle;
                          console.log("商品：".concat(ab, " 库存：").concat(aa.pointGoodsStockDTO.availableStock, " 需要").concat(a5.data.pointsName, "：").concat(aa.pointGoodsExchangePriceDTO.points, " + ￥").concat(aa.pointGoodsExchangePriceDTO.cash / 100));
                        }
                      }
                    } catch (as) {
                      {
                        a8.e(as);
                      }
                    } finally {
                      {
                        a8.f();
                      }
                    }
                  case 87:
                    console.log("\n");
                  case 88:
                    ad.next = 49;
                    break;
                  case 90:
                    ad.next = 95;
                    break;
                  case 92:
                    ad.prev = 92;
                    ad.t0 = ad.catch(47);
                    W.e(ad.t0);
                  case 95:
                    ad.prev = 95;
                    W.f();
                    return ad.finish(95);
                  case 98:
                    console.log("用户：".concat(p, "签到结束\n"));
                    s += "用户：".concat(p, " 签到已完成\n");
                    ad.next = 105;
                    break;
                  case 102:
                    ad.prev = 102;
                    ad.t1 = ad.catch(15);
                    console.log(ad.t1);
                  case 105:
                    ad.next = 13;
                    break;
                  case 107:
                    ad.next = 112;
                    break;
                  case 109:
                    ad.prev = 109;
                    ad.t2 = ad.catch(11);
                    Q.e(ad.t2);
                  case 112:
                    ad.prev = 112;
                    Q.f();
                    return ad.finish(112);
                  case 115:
                    if (!s) {
                      {
                        ad.next = 118;
                        break;
                      }
                    }
                    ad.next = 118;
                    return K(s);
                  case 118:
                  case "end":
                    return ad.stop();
                }
              }
            }
          }, N, null, [[11, 109, 112, 115], [15, 102], [47, 92, 95, 98]]);
        }
      }));
      return x.apply(this, arguments);
    }
  }
  function y(M) {
    {
      return z.apply(this, arguments);
    }
  }
  function z() {
    z = h(f().mark(function O(P) {
      return f().wrap(function (R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              return R.abrupt("return", new Promise(function (S) {
                var U = {
                  url: "".concat(P),
                  headers: {}
                };
                $.get(U, function () {
                  var W = h(f().mark(function X(Y, Z, a0) {
                    {
                      return f().wrap(function (a2) {
                        {
                          for (;;) {
                            switch (a2.prev = a2.next) {
                              case 0:
                                try {
                                  {
                                    Y ? (console.log("".concat(JSON.stringify(Y))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : S(JSON.parse(a0));
                                  }
                                } catch (a7) {
                                  {
                                    $.logErr(a7, Z);
                                  }
                                } finally {
                                  {
                                    S();
                                  }
                                }
                              case 1:
                              case "end":
                                return a2.stop();
                            }
                          }
                        }
                      }, X);
                    }
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return R.stop();
          }
        }
      }, O);
    }));
    return z.apply(this, arguments);
  }
  function A(M, N) {
    return B.apply(this, arguments);
  }
  function B() {
    B = h(f().mark(function N(O, P) {
      return f().wrap(function (R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              return R.abrupt("return", new Promise(function (S) {
                var U = {
                  "content-type": "application/json"
                };
                var V = {
                  url: "".concat(O),
                  headers: U,
                  body: JSON.stringify(P)
                };
                $.post(V, function () {
                  var X = h(f().mark(function Y(Z, a0, a1) {
                    return f().wrap(function (a2) {
                      for (;;) {
                        switch (a2.prev = a2.next) {
                          case 0:
                            try {
                              Z ? (console.log("".concat(JSON.stringify(Z))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : S(JSON.parse(a1));
                            } catch (a3) {
                              $.logErr(a3, a0);
                            } finally {
                              S();
                            }
                          case 1:
                          case "end":
                            return a2.stop();
                        }
                      }
                    }, Y);
                  }));
                  return function (Z, a0, a1) {
                    return X.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return R.stop();
          }
        }
      }, N);
    }));
    return B.apply(this, arguments);
  }
  function C(M) {
    var N = -1;
    /\d+/.test(M) && N++;
    /[a-zA-Z]+/.test(M) && N++;
    /[^A-Za-z0-9]+/.test(M) && N++;
    return N;
  }
  function D(M) {
    var N = r.enc.Utf8.parse(M);
    var O = r.AES.encrypt(N, o, {
      mode: r.mode.CBC,
      padding: r.pad.Pkcs7,
      iv: n
    });
    return O.toString();
  }
  function E(M) {
    return F.apply(this, arguments);
  }
  function F() {
    F = h(f().mark(function M(N) {
      return f().wrap(function (P) {
        for (;;) {
          switch (P.prev = P.next) {
            case 0:
              return P.abrupt("return", new Promise(function (R) {
                var T = {
                  url: "".concat(j, "/token/verify"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(N)
                };
                $.post(T, function () {
                  var W = h(f().mark(function X(Y, Z, a0) {
                    return f().wrap(function (a1) {
                      for (;;) {
                        switch (a1.prev = a1.next) {
                          case 0:
                            try {
                              Y ? (console.log("".concat(JSON.stringify(Y))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : R(JSON.parse(a0));
                            } catch (a2) {
                              $.logErr(a2, Z);
                            } finally {
                              R();
                            }
                          case 1:
                          case "end":
                            return a1.stop();
                        }
                      }
                    }, X);
                  }));
                  return function (Y, Z, a0) {
                    return W.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return P.stop();
          }
        }
      }, M);
    }));
    return F.apply(this, arguments);
  }
  function G() {
    return H.apply(this, arguments);
  }
  function H() {
    H = h(f().mark(function N() {
      var P;
      return f().wrap(function Q(R) {
        for (;;) {
          switch (R.prev = R.next) {
            case 0:
              if (P = $.getdata("Utils_Code") || "", !P || !Object.keys(P).length) {
                R.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(P);
              return R.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return R.abrupt("return", new Promise(function () {
                var T = h(f().mark(function U(V) {
                  return f().wrap(function X(Y) {
                    for (;;) {
                      switch (Y.prev = Y.next) {
                        case 0:
                          $.getScript("".concat(m, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (a0) {
                            $.setdata(a0, "Utils_Code");
                            eval(a0);
                            console.log("✅ Utils加载成功, 请继续");
                            V(creatUtils());
                          });
                        case 1:
                        case "end":
                          return Y.stop();
                      }
                    }
                  }, U);
                }));
                return function (V) {
                  return T.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return R.stop();
          }
        }
      }, N);
    }));
    return H.apply(this, arguments);
  }
  function I() {
    return J.apply(this, arguments);
  }
  function J() {
    J = h(f().mark(function O() {
      return f().wrap(function (Q) {
        for (;;) {
          switch (Q.prev = Q.next) {
            case 0:
              return Q.abrupt("return", new Promise(function (R) {
                var T = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(T, function () {
                  var U = h(f().mark(function V(W, X, Y) {
                    return f().wrap(function (a0) {
                      for (;;) {
                        switch (a0.prev = a0.next) {
                          case 0:
                            try {
                              W ? (console.log("".concat(JSON.stringify(W))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(Y).notice);
                            } catch (a1) {
                              $.logErr(a1, X);
                            } finally {
                              R();
                            }
                          case 1:
                          case "end":
                            return a0.stop();
                        }
                      }
                    }, V);
                  }));
                  return function (W, X, Y) {
                    return U.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return Q.stop();
          }
        }
      }, O);
    }));
    return J.apply(this, arguments);
  }
  function K(M) {
    return L.apply(this, arguments);
  }
  function L() {
    L = h(f().mark(function O(P) {
      return f().wrap(function (Q) {
        for (;;) {
          switch (Q.prev = Q.next) {
            case 0:
              if (!$.isNode()) {
                Q.next = 5;
                break;
              }
              Q.next = 3;
              return notify.sendNotify($.name, P);
            case 3:
              Q.next = 6;
              break;
            case 5:
              $.msg($.name, "", P);
            case 6:
            case "end":
              return Q.stop();
          }
        }
      }, O);
    }));
    return L.apply(this, arguments);
  }
  h(f().mark(function M() {
    return f().wrap(function (O) {
      for (;;) {
        switch (O.prev = O.next) {
          case 0:
            O.next = 2;
            return I();
          case 2:
            O.next = 4;
            return w();
          case 4:
          case "end":
            return O.stop();
        }
      }
    }, M);
  }))().catch(function (N) {
    $.log(N);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, a) => {
        s.call(this, t, (t, s, r) => {
          t ? a(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const a = this.getdata(t);
      if (a) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, a) => e(a));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        a = a ? a.replace(/\n/g, "").trim() : a;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [i, o] = a.split("@");
        const n = {
          url: `http://${o}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": i,
            Accept: "*/*"
          },
          timeout: r
        };
        this.post(n, (t, e, a) => s(a));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const a = !s && this.fs.existsSync(e);
        if (!s && !a) {
          return {};
        }
        {
          const a = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(a));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const a = !s && this.fs.existsSync(e);
        const r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const a = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of a) if (r = Object(r)[t], undefined === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t);
        const r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, a, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e);
        const i = this.getval(a);
        const o = a ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), a);
        } catch (e) {
          const i = {};
          this.lodash_set(i, r, t);
          s = this.setval(JSON.stringify(i), a);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: a,
              statusCode: r,
              headers: i,
              rawBody: o
            } = t;
            const n = s.decode(o, this.encoding);
            e(null, {
              status: a,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: a,
              response: r
            } = t;
            e(a, r, r && s.decode(r.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: r,
            ...i
          } = t;
          this.got[s](r, i).then(t => {
            const {
              statusCode: s,
              statusCode: r,
              headers: i,
              rawBody: o
            } = t;
            const n = a.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: r
            } = t;
            e(s, r, r && a.decode(r.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let a = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let a = t[s];
        null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", a = "", r) {
      const i = t => {
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let e = t.url || t.openUrl || t["open-url"];
                  return {
                    url: e
                  };
                }
              case "Loon":
                {
                  let e = t.openUrl || t.url || t["open-url"];
                  let s = t.mediaUrl || t["media-url"];
                  return {
                    openUrl: e,
                    mediaUrl: s
                  };
                }
              case "Quantumult X":
                {
                  let e = t["open-url"] || t.url || t.openUrl;
                  let s = t["media-url"] || t.mediaUrl;
                  let a = t["update-pasteboard"] || t.updatePasteboard;
                  return {
                    "open-url": e,
                    "media-url": s,
                    "update-pasteboard": a
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, a, i(r));
            break;
          case "Quantumult X":
            $notify(e, s, a, i(r));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        a && t.push(a);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime();
      const s = (e - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}