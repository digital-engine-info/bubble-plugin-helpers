/*!
 *
 *   @digital-engine/bubble-plugin-helpers v1.0.0
 *   https://github.com/digital-engine-info/bubble-plugin-helpers
 *
 *   Copyright (c) Florian Briand (https://github.com/nabellaleen) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!(function (e, t) {
  "object" == typeof exports &&
  "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.MyLibrary = t())
    : (e.MyLibrary = t());
})(self, function () {
  return (() => {
    "use strict";
    var e = {
        d: (t, r) => {
          for (var n in r)
            e.o(r, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: r[n],
              });
        },
        o: (e, t) =>
          Object.prototype.hasOwnProperty.call(
            e,
            t
          ),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(
              e,
              Symbol.toStringTag,
              { value: "Module" }
            ),
            Object.defineProperty(
              e,
              "__esModule",
              { value: !0 }
            );
        },
      },
      t = {};
    function r(e, t) {
      if (!(e instanceof t))
        throw new TypeError(
          "Cannot call a class as a function"
        );
    }
    function n(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function o() {
      return {
        _id: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" == e
              ? t
              : (3 & t) | 8
            ).toString(16);
          }
        ),
        Slug: null,
        "Created By": "admin_user_bubble_project",
        "Created Date":
          "2021-03-27T21:59:57.581Z",
        "Modified Date":
          "2021-03-28T09:41:59.126Z",
      };
    }
    e.r(t),
      e.d(t, {
        BubbleHelpers: () => l,
        ListObjectMock: () => c,
        ObjectMock: () => i,
        baseObjectBuilder: () => o,
        default: () => s,
        getDebugInfo: () => a,
        slugifyPropertyKey: () => u,
      });
    var i = function e() {
        var t = this,
          i =
            arguments.length > 0 &&
            void 0 !== arguments[0]
              ? arguments[0]
              : o;
        r(this, e),
          n(this, "_fields", {}),
          n(this, "get", function (e) {
            return t._fields[e];
          }),
          n(this, "listProperties", function () {
            return Object.keys(t._fields);
          }),
          (this._fields = i());
      },
      c = function e(t) {
        var o = this,
          c =
            arguments.length > 1 &&
            void 0 !== arguments[1]
              ? arguments[1]
              : void 0;
        r(this, e),
          n(this, "_objects", []),
          n(this, "length", function () {
            return o._objects.length;
          }),
          n(this, "get", function (e, t) {
            return o._objects.slice(e, e + t);
          });
        for (var u = 0; u < t; u++)
          this._objects.push(new i(c));
      };
    function u(e) {
      var t =
          arguments.length > 1 &&
          void 0 !== arguments[1]
            ? arguments[1]
            : null,
        r = e.toLowerCase();
      if (((r = r.replace(/([ .#])/g, "_")), t)) {
        var n = u(t);
        r = "".concat(r, "1_").concat(n);
      }
      return r;
    }
    var a = function (e) {
      var t =
          !(
            arguments.length > 1 &&
            void 0 !== arguments[1]
          ) || arguments[1],
        r = e
          .listProperties()
          .reduce(function (t, r) {
            return (t[r] = e.get(r)), t;
          }, {});
      return t ? JSON.stringify(r, null, 2) : r;
    };
    var l = function e() {
      var t, r, n;
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError(
            "Cannot call a class as a function"
          );
      })(this, e),
        (n = function () {
          return (
            console.log("Library method fired"),
            !0
          );
        }),
        (r = "myMethod") in (t = this)
          ? Object.defineProperty(t, r, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[r] = n),
        console.log("Library constructor loaded");
    };
    const s = l;
    return t;
  })();
});
//# sourceMappingURL=index.js.map
