import n, { useState as o } from 'react';
import r, { css as e, keyframes as t } from 'styled-components';
var i = function () {
  return (
    (i =
      Object.assign ||
      function (n) {
        for (var o, r = 1, e = arguments.length; r < e; r++)
          for (var t in (o = arguments[r]))
            Object.prototype.hasOwnProperty.call(o, t) && (n[t] = o[t]);
        return n;
      }),
    i.apply(this, arguments)
  );
};
function a(n, o) {
  var r = {};
  for (var e in n)
    Object.prototype.hasOwnProperty.call(n, e) &&
      o.indexOf(e) < 0 &&
      (r[e] = n[e]);
  if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
    var t = 0;
    for (e = Object.getOwnPropertySymbols(n); t < e.length; t++)
      o.indexOf(e[t]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, e[t]) &&
        (r[e[t]] = n[e[t]]);
  }
  return r;
}
function s(n, o) {
  return (
    Object.defineProperty
      ? Object.defineProperty(n, 'raw', { value: o })
      : (n.raw = o),
    n
  );
}
'function' == typeof SuppressedError && SuppressedError;
var l,
  c,
  d,
  u,
  p = r.button(
    l ||
      (l = s(
        [
          '\n  padding: 8px 16px;\n  font-size: 16px;\n  background-color: #f0f0f0;\n  color: #007bff;\n  border: 1px solid #007bff;\n  border-radius: 4px;\n  cursor: ',
          ';\n  opacity: ',
          ';\n',
        ],
        [
          '\n  padding: 8px 16px;\n  font-size: 16px;\n  background-color: #f0f0f0;\n  color: #007bff;\n  border: 1px solid #007bff;\n  border-radius: 4px;\n  cursor: ',
          ';\n  opacity: ',
          ';\n',
        ],
      )),
    function (n) {
      return n.disabled ? 'not-allowed' : 'pointer';
    },
    function (n) {
      return n.disabled ? 0.5 : 1;
    },
  ),
  f = function (o) {
    var r = o.onClick,
      e = o.disabled,
      t = o.className,
      i = o.children;
    return n.createElement(p, { onClick: r, disabled: e, className: t }, i);
  },
  b = r.button(
    c ||
      (c = s(
        [
          '\n  width: ',
          ';\n  height: ',
          ';\n  font-size: ',
          ';\n  cursor: pointer;\n  background-color: ',
          ';\n  color: ',
          ';\n  border: none;\n  border-radius: 5px;\n  transition: all 0.4s;\n\n  &:hover {\n    border-radius: 5px;\n    transform: translateY(-10px);\n    box-shadow: ',
          ';\n  }\n\n  &:active {\n    transition: all 0.2s;\n    transform: translateY(-5px);\n    box-shadow: ',
          ';\n  }\n};',
        ],
        [
          '\n  width: ',
          ';\n  height: ',
          ';\n  font-size: ',
          ';\n  cursor: pointer;\n  background-color: ',
          ';\n  color: ',
          ';\n  border: none;\n  border-radius: 5px;\n  transition: all 0.4s;\n\n  &:hover {\n    border-radius: 5px;\n    transform: translateY(-10px);\n    box-shadow: ',
          ';\n  }\n\n  &:active {\n    transition: all 0.2s;\n    transform: translateY(-5px);\n    box-shadow: ',
          ';\n  }\n};',
        ],
      )),
    function (n) {
      return n.width || '130px';
    },
    function (n) {
      return n.height || '40px';
    },
    function (n) {
      return n.fontSize || '1.1em';
    },
    function (n) {
      return n.bgColor || '#171717';
    },
    function (n) {
      return n.textColor || '#fff';
    },
    function (n) {
      return '0 7px 0 -2px '
        .concat(n.hoverColor || '#f85959', ',\n       0 15px 0 -4px ')
        .concat(n.shadowColor || '#39a2db', ',\n       0 16px 10px -3px ')
        .concat(n.shadowColor || '#39a2db');
    },
    function (n) {
      return '0 2px 0 -2px '
        .concat(n.activeColor || '#f85959', ',\n       0 8px 0 -4px ')
        .concat(n.shadowColor || '#39a2db', ',\n       0 12px 10px -3px ')
        .concat(n.shadowColor || '#39a2db');
    },
  ),
  x = function (o) {
    var r = o.className,
      e = o.children,
      t = a(o, ['className', 'children']);
    return n.createElement(b, i({ className: r }, t), e);
  },
  h = r.div(
    d ||
      (d = s(
        ['\n  display: flex;\n  flex-direction: ', ';\n  gap: 8px;\n'],
        ['\n  display: flex;\n  flex-direction: ', ';\n  gap: 8px;\n'],
      )),
    function (n) {
      return n.vertical ? 'column' : 'row';
    },
  ),
  g = r.button(
    u ||
      (u = s(
        [
          '\n  padding: 10px 20px;\n  text-transform: uppercase;\n  border-radius: 8px;\n  font-size: 17px;\n  font-weight: 500;\n  color: #ffffff80;\n  text-shadow: none;\n  background: transparent;\n  position: relative;\n  transition: all 0.5s;\n  overflow: hidden;\n  border: 2px solid #ffffff80;\n\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    background: #008cff;\n    border: 2px solid #008cff;\n    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;\n    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff, 0 0 100px #008cff;\n  }\n};',
        ],
        [
          '\n  padding: 10px 20px;\n  text-transform: uppercase;\n  border-radius: 8px;\n  font-size: 17px;\n  font-weight: 500;\n  color: #ffffff80;\n  text-shadow: none;\n  background: transparent;\n  position: relative;\n  transition: all 0.5s;\n  overflow: hidden;\n  border: 2px solid #ffffff80;\n\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    background: #008cff;\n    border: 2px solid #008cff;\n    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;\n    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff, 0 0 100px #008cff;\n  }\n};',
        ],
      )),
  ),
  m = function (o) {
    var r = o.vertical,
      e = o.children;
    return n.createElement(h, { vertical: r }, e);
  };
m.Button = g;
var v,
  w,
  k,
  z,
  y,
  C,
  S,
  F,
  E,
  B,
  A,
  N,
  D,
  U,
  j,
  Y,
  H,
  O,
  W,
  R,
  I = r.button(
    v ||
      (v = s(
        [
          '\n  color: ',
          ';\n  text-transform: uppercase;\n  text-decoration: none;\n  border: 2px solid ',
          ';\n  padding: 10px 20px;\n  font-size: ',
          ';\n  font-weight: bold;\n  background: transparent;\n  position: relative;\n  transition: all 1s;\n  overflow: hidden;\n  border-radius: ',
          ';\n  cursor: pointer;\n  width: ',
          '; \n  height: ',
          ";  \n  &:hover {\n    color: white;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 0%;\n    top: 0;\n    left: -40px;\n    transform: skewX(45deg);\n    background-color: ",
          ';\n    z-index: -1;\n    transition: all 1s;\n  }\n\n  &:hover::before {\n    width: 160%;\n  }\n};',
        ],
        [
          '\n  color: ',
          ';\n  text-transform: uppercase;\n  text-decoration: none;\n  border: 2px solid ',
          ';\n  padding: 10px 20px;\n  font-size: ',
          ';\n  font-weight: bold;\n  background: transparent;\n  position: relative;\n  transition: all 1s;\n  overflow: hidden;\n  border-radius: ',
          ';\n  cursor: pointer;\n  width: ',
          '; \n  height: ',
          ";  \n  &:hover {\n    color: white;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 0%;\n    top: 0;\n    left: -40px;\n    transform: skewX(45deg);\n    background-color: ",
          ';\n    z-index: -1;\n    transition: all 1s;\n  }\n\n  &:hover::before {\n    width: 160%;\n  }\n};',
        ],
      )),
    function (n) {
      return n.textColor || 'purple';
    },
    function (n) {
      return n.borderColor || 'purple';
    },
    function (n) {
      return n.fontSize || '17px';
    },
    function (n) {
      return n.borderRadius || '0';
    },
    function (n) {
      return n.width || 'auto';
    },
    function (n) {
      return n.height || 'auto';
    },
    function (n) {
      return n.hoverColor || 'purple';
    },
  ),
  P = function (o) {
    var r = o.children,
      e = a(o, ['children']);
    return n.createElement(I, i({}, e), r);
  },
  T = r.button(
    k ||
      (k = s(
        [
          '\n  border: none;\n  width: ',
          ';\n  height: ',
          ';\n  border-radius: 3em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  background: ',
          '; // Use background color prop\n  cursor: pointer;\n  transition: all 450ms ease-in-out;\n  position: relative;\n\n  &:hover {\n    background: ',
          ';\n    box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),\n      inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),\n      0px 0px 0px 4px rgba(255, 255, 255, 0.2),\n      0px 0px 180px 0px #9917FF;\n    transform: translateY(-2px);\n  }\n\n  ',
          '\n',
        ],
        [
          '\n  border: none;\n  width: ',
          ';\n  height: ',
          ';\n  border-radius: 3em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  background: ',
          '; // Use background color prop\n  cursor: pointer;\n  transition: all 450ms ease-in-out;\n  position: relative;\n\n  &:hover {\n    background: ',
          ';\n    box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),\n      inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),\n      0px 0px 0px 4px rgba(255, 255, 255, 0.2),\n      0px 0px 180px 0px #9917FF;\n    transform: translateY(-2px);\n  }\n\n  ',
          '\n',
        ],
      )),
    function (n) {
      return n.width || '15em';
    },
    function (n) {
      return n.height || '5em';
    },
    function (n) {
      return n.backgroundColor || '#1C1A1C';
    },
    function (n) {
      return n.hoverGradient || 'linear-gradient(0deg, #A47CF3, #683FEA)';
    },
    function (n) {
      return (
        n.disabled &&
        e(
          w ||
            (w = s(
              ['\n      cursor: not-allowed;\n      opacity: 0.5;\n    '],
              ['\n      cursor: not-allowed;\n      opacity: 0.5;\n    '],
            )),
        )
      );
    },
  ),
  L = r.svg(
    z ||
      (z = s(
        ['\n  fill: #aaaaaa;\n  transition: all 800ms ease;\n'],
        ['\n  fill: #aaaaaa;\n  transition: all 800ms ease;\n'],
      )),
  ),
  G = r.span(
    y ||
      (y = s(
        ['\n  font-weight: 600;\n  color: #aaaaaa;\n  font-size: medium;\n'],
        ['\n  font-weight: 600;\n  color: #aaaaaa;\n  font-size: medium;\n'],
      )),
  ),
  _ = function (r) {
    var e = r.children,
      t = r.width,
      s = r.height,
      l = r.onClick,
      c = r.disabled,
      d = r.loading,
      u = void 0 !== d && d,
      p = r.backgroundColor,
      f = r.hoverGradient,
      b = a(r, [
        'children',
        'width',
        'height',
        'onClick',
        'disabled',
        'loading',
        'backgroundColor',
        'hoverGradient',
      ]),
      x = o(!1),
      h = x[0],
      g = x[1];
    return n.createElement(
      T,
      i(
        {
          onClick: function () {
            c ||
              u ||
              (l && l(),
              g(!0),
              setTimeout(function () {
                return g(!1);
              }, 800));
          },
          disabled: c || u,
          width: t,
          height: s,
          backgroundColor: p,
          hoverGradient: f,
        },
        b,
      ),
      h &&
        n.createElement(
          L,
          {
            height: '24',
            width: '24',
            fill: '#FFFFFF',
            viewBox: '0 0 24 24',
            'data-testid': 'sparkle-icon',
            className: h ? 'sparkle' : '',
          },
          n.createElement('path', {
            d: 'M10,21.236,6.755,14.745,0.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333,3.333-1.167-2.333-1.167L20.5,0,19.333,2.333,17,3.5Z',
          }),
        ),
      n.createElement(G, null, u ? 'Loading...' : e),
    );
  },
  M = r.button(
    C ||
      (C = s(
        [
          '\n  padding: ',
          '; // Use size for padding\n  font-size: 16px;\n  background-color: var(--primary-color, #007bff);\n  color: var(--button-text-color, white);\n  border: none;\n  border-radius: 4px;\n  cursor: ',
          ';\n  opacity: ',
          ';\n',
        ],
        [
          '\n  padding: ',
          '; // Use size for padding\n  font-size: 16px;\n  background-color: var(--primary-color, #007bff);\n  color: var(--button-text-color, white);\n  border: none;\n  border-radius: 4px;\n  cursor: ',
          ';\n  opacity: ',
          ';\n',
        ],
      )),
    function (n) {
      return (function (n) {
        switch (n) {
          case 'small':
            return '6px 12px';
          case 'medium':
          default:
            return '8px 16px';
          case 'large':
            return '12px 24px';
        }
      })(n.size);
    },
    function (n) {
      return n.disabled ? 'not-allowed' : 'pointer';
    },
    function (n) {
      return n.disabled ? 0.5 : 1;
    },
  ),
  X = function (o) {
    var r = o.onClick,
      e = o.disabled,
      t = o.children,
      s = a(o, ['onClick', 'disabled', 'children']);
    return n.createElement(M, i({ onClick: r, disabled: e }, s), t);
  },
  Z = t(
    S ||
      (S = s(
        [
          '\n  0% {\n    transform: translate(0);\n  }\n\n  20% {\n    transform: translate(-2px, 2px);\n  }\n\n  40% {\n    transform: translate(-2px, -2px);\n  }\n\n  60% {\n    transform: translate(2px, 2px);\n  }\n\n  80% {\n    transform: translate(2px, -2px);\n  }\n\n  100% {\n    transform: translate(0);\n  }\n',
        ],
        [
          '\n  0% {\n    transform: translate(0);\n  }\n\n  20% {\n    transform: translate(-2px, 2px);\n  }\n\n  40% {\n    transform: translate(-2px, -2px);\n  }\n\n  60% {\n    transform: translate(2px, 2px);\n  }\n\n  80% {\n    transform: translate(2px, -2px);\n  }\n\n  100% {\n    transform: translate(0);\n  }\n',
        ],
      )),
  ),
  q = r.button(
    F ||
      (F = s(
        [
          '\n  height: 3em;\n  width: 8em;\n  border: none;\n  border-radius: 10em;\n  background: #016DD9;\n  font-size: 17px;\n  color: #ffffff;\n  font-family: inherit;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.3s ease;\n\n  &:hover {\n    animation: ',
          ' 0.3s linear infinite both;\n  }\n',
        ],
        [
          '\n  height: 3em;\n  width: 8em;\n  border: none;\n  border-radius: 10em;\n  background: #016DD9;\n  font-size: 17px;\n  color: #ffffff;\n  font-family: inherit;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.3s ease;\n\n  &:hover {\n    animation: ',
          ' 0.3s linear infinite both;\n  }\n',
        ],
      )),
    Z,
  ),
  V = function (o) {
    var r = o.children,
      e = o.className,
      t = a(o, ['children', 'className']);
    return n.createElement(q, i({ className: e }, t), r);
  },
  J = r.button(
    E ||
      (E = s(
        [
          '\n  --primary-color: #000000;\n  --secondary-color: #ffffff;\n  --hover-color: #111;\n  --arrow-width: 10px;\n  --arrow-stroke: 2px;\n  box-sizing: border-box;\n  border: 0;\n  border-radius: 20px;\n  color: var(--secondary-color);\n  padding: 1em 1.8em;\n  background: var(--primary-color);\n  display: flex;\n  transition: 0.2s background;\n  align-items: center;\n  gap: 0.6em;\n  font-weight: bold;\n\n  .arrow-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .arrow {\n    margin-top: 1px;\n    width: var(--arrow-width);\n    background: var(--primary-color);\n    height: var(--arrow-stroke);\n    position: relative;\n    transition: 0.2s;\n  }\n\n  .arrow::before {\n    content: "";\n    box-sizing: border-box;\n    position: absolute;\n    border: solid var(--secondary-color);\n    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;\n    display: inline-block;\n    top: -3px;\n    right: 3px;\n    transition: 0.2s;\n    padding: 3px;\n    transform: rotate(-45deg);\n  }\n\n  &:hover {\n    background-color: var(--hover-color);\n  }\n\n  &:hover .arrow {\n    background: var(--secondary-color);\n  }\n\n  &:hover .arrow:before {\n    right: 0;\n  }\n',
        ],
        [
          '\n  --primary-color: #000000;\n  --secondary-color: #ffffff;\n  --hover-color: #111;\n  --arrow-width: 10px;\n  --arrow-stroke: 2px;\n  box-sizing: border-box;\n  border: 0;\n  border-radius: 20px;\n  color: var(--secondary-color);\n  padding: 1em 1.8em;\n  background: var(--primary-color);\n  display: flex;\n  transition: 0.2s background;\n  align-items: center;\n  gap: 0.6em;\n  font-weight: bold;\n\n  .arrow-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .arrow {\n    margin-top: 1px;\n    width: var(--arrow-width);\n    background: var(--primary-color);\n    height: var(--arrow-stroke);\n    position: relative;\n    transition: 0.2s;\n  }\n\n  .arrow::before {\n    content: "";\n    box-sizing: border-box;\n    position: absolute;\n    border: solid var(--secondary-color);\n    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;\n    display: inline-block;\n    top: -3px;\n    right: 3px;\n    transition: 0.2s;\n    padding: 3px;\n    transform: rotate(-45deg);\n  }\n\n  &:hover {\n    background-color: var(--hover-color);\n  }\n\n  &:hover .arrow {\n    background: var(--secondary-color);\n  }\n\n  &:hover .arrow:before {\n    right: 0;\n  }\n',
        ],
      )),
  ),
  K = r.button(
    B ||
      (B = s(
        [
          '\npadding: 10px 20px;\ntext-transform: uppercase;\ncursor:pointer;\nborder-radius: 8px;\nfont-size: 17px;\nfont-weight: 500;\ncolor: ',
          '; // Changed to black\ntext-shadow: none;\nbackground: transparent;\nbox-shadow: transparent;\nborder: 1px solid ',
          ';\ntransition: 0.5s ease;\nuser-select: none;\n\n&:hover,\n&:focus {\n  color: #ffffff;\n  background: ',
          ';\n  border: 1px solid ',
          ';\n  text-shadow: ',
          ';\n  box-shadow: ',
          ';\n}\n',
        ],
        [
          '\npadding: 10px 20px;\ntext-transform: uppercase;\ncursor:pointer;\nborder-radius: 8px;\nfont-size: 17px;\nfont-weight: 500;\ncolor: ',
          '; // Changed to black\ntext-shadow: none;\nbackground: transparent;\nbox-shadow: transparent;\nborder: 1px solid ',
          ';\ntransition: 0.5s ease;\nuser-select: none;\n\n&:hover,\n&:focus {\n  color: #ffffff;\n  background: ',
          ';\n  border: 1px solid ',
          ';\n  text-shadow: ',
          ';\n  box-shadow: ',
          ';\n}\n',
        ],
      )),
    function (n) {
      return n.textColor || '#00000080';
    },
    function (n) {
      return n.borderColor || '#00000080';
    },
    function (n) {
      return n.bgColor || '#008cff';
    },
    function (n) {
      return n.borderColor || '#008cff';
    },
    function (n) {
      return '0 0 5px '
        .concat(n.shadowColor || '#ffffff', ',\n     0 0 10px ')
        .concat(n.shadowColor || '#ffffff', ',\n     0 0 20px ')
        .concat(n.shadowColor || '#ffffff');
    },
    function (n) {
      return '0 0 5px '
        .concat(n.shadowColor || '#008cff', ',\n     0 0 20px ')
        .concat(n.shadowColor || '#008cff', ',\n     0 0 50px ')
        .concat(n.shadowColor || '#008cff', ',\n     0 0 100px ')
        .concat(n.shadowColor || '#008cff');
    },
  ),
  Q = function (o) {
    var r = o.children,
      e = o.className,
      t = a(o, ['children', 'className']);
    return n.createElement(K, i({ className: e }, t), r);
  },
  $ = r.button(
    A ||
      (A = s(
        [
          '\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor:pointer;\n  justify-content: center;\n  width: ',
          ';\n  height: ',
          ';\n  background: ',
          ';\n  color: ',
          ';\n  padding: ',
          ";\n  border-radius: 2rem;\n  transition: 0.5s;\n  border: none;\n\n  &:after {\n    content: '';\n    width: 80%;\n    height: 40%;\n    background: linear-gradient(\n      80deg,\n      ",
          ' 10%,\n      ',
          ' 48%\n    );\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: -5px;\n    margin: 0 auto;\n    border-radius: 2rem;\n    filter: blur(8px);\n    z-index: -9;\n    opacity: 0;\n    transition: opacity 0.4s;\n  }\n\n  .text {\n    position: relative;\n    z-index: 10;\n  }\n\n  svg {\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    pointer-events: none;\n    transition: 0.6s;\n    opacity: 0;\n  }\n\n  svg.star {\n    width: 18px;\n    transform: translate(-25px, -6px) rotate(55deg);\n    filter: blur(0.4px);\n    color: ',
          ';\n  }\n\n  svg.moon {\n    width: 18px;\n    transform: translate(7px, -14px) rotate(80deg);\n    filter: blur(0.5px);\n    color: ',
          ';\n  }\n\n  svg.meteor {\n    width: 16px;\n    transform: translate(34px, -4px) rotate(-45deg);\n    filter: blur(0.4px);\n    color: ',
          ';\n  }\n\n  &:active {\n    color: #ffffff;\n    transform: scale(1.2);\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n\n  &:hover {\n    transform: scale(1.3);\n  }\n\n  &:hover svg {\n    opacity: 1;\n  }\n\n  &:hover svg.star {\n    transform: translate(-55px, -20px) rotate(55deg) scale(1.8);\n  }\n\n  &:hover svg.moon {\n    transform: translate(50px, -32px) rotate(0deg) scale(1.4);\n  }\n\n  &:hover svg.meteor {\n    transform: translate(28px, 30px) rotate(260deg) scale(2);\n  }\n',
        ],
        [
          '\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor:pointer;\n  justify-content: center;\n  width: ',
          ';\n  height: ',
          ';\n  background: ',
          ';\n  color: ',
          ';\n  padding: ',
          ";\n  border-radius: 2rem;\n  transition: 0.5s;\n  border: none;\n\n  &:after {\n    content: '';\n    width: 80%;\n    height: 40%;\n    background: linear-gradient(\n      80deg,\n      ",
          ' 10%,\n      ',
          ' 48%\n    );\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: -5px;\n    margin: 0 auto;\n    border-radius: 2rem;\n    filter: blur(8px);\n    z-index: -9;\n    opacity: 0;\n    transition: opacity 0.4s;\n  }\n\n  .text {\n    position: relative;\n    z-index: 10;\n  }\n\n  svg {\n    position: absolute;\n    inset: 0;\n    margin: auto;\n    pointer-events: none;\n    transition: 0.6s;\n    opacity: 0;\n  }\n\n  svg.star {\n    width: 18px;\n    transform: translate(-25px, -6px) rotate(55deg);\n    filter: blur(0.4px);\n    color: ',
          ';\n  }\n\n  svg.moon {\n    width: 18px;\n    transform: translate(7px, -14px) rotate(80deg);\n    filter: blur(0.5px);\n    color: ',
          ';\n  }\n\n  svg.meteor {\n    width: 16px;\n    transform: translate(34px, -4px) rotate(-45deg);\n    filter: blur(0.4px);\n    color: ',
          ';\n  }\n\n  &:active {\n    color: #ffffff;\n    transform: scale(1.2);\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n\n  &:hover {\n    transform: scale(1.3);\n  }\n\n  &:hover svg {\n    opacity: 1;\n  }\n\n  &:hover svg.star {\n    transform: translate(-55px, -20px) rotate(55deg) scale(1.8);\n  }\n\n  &:hover svg.moon {\n    transform: translate(50px, -32px) rotate(0deg) scale(1.4);\n  }\n\n  &:hover svg.meteor {\n    transform: translate(28px, 30px) rotate(260deg) scale(2);\n  }\n',
        ],
      )),
    function (n) {
      return n.width || 'auto';
    },
    function (n) {
      return n.height || 'auto';
    },
    function (n) {
      return n.backgroundColor || '#6a92ef';
    },
    function (n) {
      return n.textColor || 'white';
    },
    function (n) {
      switch (n.size) {
        case 'small':
          return '0.9rem 2rem';
        case 'medium':
          return '1.2rem 2.5rem';
        default:
          return '1.5rem 3rem';
      }
    },
    function (n) {
      return n.hoverColor || 'hsl(217, 77%, 71%)';
    },
    function (n) {
      return n.activeColor || 'hsl(218, 76%, 84%)';
    },
    function (n) {
      return n.activeColor || 'hsl(210, 40%, 47%)';
    },
    function (n) {
      return n.activeColor || 'hsl(210, 40%, 47%)';
    },
    function (n) {
      return n.activeColor || 'hsl(210, 40%, 47%)';
    },
  ),
  nn = function (o) {
    var r = a(o, []);
    return n.createElement($, i({}, r));
  },
  on = r.button(
    N ||
      (N = s(
        [
          '\n  --btn-bg: ',
          ';\n  --btn-gradient-from: ',
          ';\n  --btn-gradient-to: ',
          ';\n  --btn-text-color: ',
          ';\n  --btn-color: ',
          ';\n  --btn-color-from: ',
          ';\n  --btn-color-to: ',
          ';\n  --btn-shadow: ',
          ';\n\n  border: 0 none;\n  appearance: none;\n  border-radius: 9999px;\n  background-color: var(--btn-bg);\n  box-shadow: 0 0 2px 2px var(--btn-shadow), 0 0 4px 4px var(--btn-shadow), 0 0 8px 8px var(--btn-shadow);\n  cursor: pointer;\n  transition: transform 0.5s ease-in-out;\n  &:hover,\n  &:active {\n    transform: translateY(-1px);\n  }\n\n  .btn-inner {\n    position: relative;\n    border-radius: inherit;\n    border: 1px solid transparent;\n    font-size: ',
          ';\n    min-width: ',
          ';\n    padding: ',
          ';\n    width: ',
          ';\n    height: ',
          ";\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    color: var(--btn-text-color);\n\n    .btn-label {\n      position: absolute;\n      bottom: 1px;\n      left: 1px;\n      right: 1px;\n      top: 1px;\n      border-radius: inherit;\n      z-index: 10;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--btn-bg);\n      background-image: linear-gradient(to bottom, var(--btn-gradient));\n    }\n\n    .btn-blur {\n      position: absolute;\n      bottom: 1px;\n      left: 1px;\n      right: 1px;\n      top: 1px;\n      z-index: 0;\n      transform: scaleX(3.5);\n      filter: blur(6px);\n\n      &:before {\n        --gradient: var(--btn-color-from), var(--btn-color), var(--btn-color-to);\n        --transition: 5s;\n        content: '';\n        position: absolute;\n        z-index: 0;\n        top: 50%;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background-image: conic-gradient(var(--gradient));\n        animation: turn var(--transition) linear infinite;\n      }\n    }\n  }\n\n  @keyframes turn {\n    0% {\n      transform: translateY(-50%) rotate(0deg);\n    }\n    to {\n      transform: translateY(-50%) rotate(1turn);\n    }\n  }\n};",
        ],
        [
          '\n  --btn-bg: ',
          ';\n  --btn-gradient-from: ',
          ';\n  --btn-gradient-to: ',
          ';\n  --btn-text-color: ',
          ';\n  --btn-color: ',
          ';\n  --btn-color-from: ',
          ';\n  --btn-color-to: ',
          ';\n  --btn-shadow: ',
          ';\n\n  border: 0 none;\n  appearance: none;\n  border-radius: 9999px;\n  background-color: var(--btn-bg);\n  box-shadow: 0 0 2px 2px var(--btn-shadow), 0 0 4px 4px var(--btn-shadow), 0 0 8px 8px var(--btn-shadow);\n  cursor: pointer;\n  transition: transform 0.5s ease-in-out;\n  &:hover,\n  &:active {\n    transform: translateY(-1px);\n  }\n\n  .btn-inner {\n    position: relative;\n    border-radius: inherit;\n    border: 1px solid transparent;\n    font-size: ',
          ';\n    min-width: ',
          ';\n    padding: ',
          ';\n    width: ',
          ';\n    height: ',
          ";\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    color: var(--btn-text-color);\n\n    .btn-label {\n      position: absolute;\n      bottom: 1px;\n      left: 1px;\n      right: 1px;\n      top: 1px;\n      border-radius: inherit;\n      z-index: 10;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--btn-bg);\n      background-image: linear-gradient(to bottom, var(--btn-gradient));\n    }\n\n    .btn-blur {\n      position: absolute;\n      bottom: 1px;\n      left: 1px;\n      right: 1px;\n      top: 1px;\n      z-index: 0;\n      transform: scaleX(3.5);\n      filter: blur(6px);\n\n      &:before {\n        --gradient: var(--btn-color-from), var(--btn-color), var(--btn-color-to);\n        --transition: 5s;\n        content: '';\n        position: absolute;\n        z-index: 0;\n        top: 50%;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background-image: conic-gradient(var(--gradient));\n        animation: turn var(--transition) linear infinite;\n      }\n    }\n  }\n\n  @keyframes turn {\n    0% {\n      transform: translateY(-50%) rotate(0deg);\n    }\n    to {\n      transform: translateY(-50%) rotate(1turn);\n    }\n  }\n};",
        ],
      )),
    function (n) {
      return n.backgroundColor || '#f0f0f0';
    },
    function (n) {
      return 'primary' === n.design ? '#111111' : '#f0f0f0';
    },
    function (n) {
      return 'primary' === n.design
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.1)';
    },
    function (n) {
      return n.textColor || '#111111';
    },
    function (n) {
      return 'primary' === n.design ? '#5f17d4' : '#3c3c3c';
    },
    function (n) {
      return 'primary' === n.design ? '#c6a3ff' : '#dddddd';
    },
    function (n) {
      return 'primary' === n.design ? '#966ed8' : '#a0a0a0';
    },
    function (n) {
      return 'primary' === n.design ? '#5f17d42d' : '#dddddd2d';
    },
    function (n) {
      switch (n.size) {
        case 'small':
          return '0.8rem';
        case 'medium':
          return '1rem';
        default:
          return '1.2rem';
      }
    },
    function (n) {
      switch (n.size) {
        case 'small':
          return '8rem';
        case 'medium':
          return '10rem';
        default:
          return '12rem';
      }
    },
    function (n) {
      switch (n.size) {
        case 'small':
          return '0.8rem 1.5rem';
        case 'medium':
          return '1rem 2rem';
        default:
          return '1.5rem 2.5rem';
      }
    },
    function (n) {
      return n.width || 'auto';
    },
    function (n) {
      return n.height || 'auto';
    },
  ),
  rn = function (o) {
    var r = o.design,
      e = void 0 === r ? 'primary' : r,
      t = o.size,
      i = void 0 === t ? 'medium' : t,
      a = o.width,
      s = o.height,
      l = o.backgroundColor,
      c = o.textColor,
      d = o.hoverColor,
      u = o.activeColor,
      p = o.children,
      f = o.className;
    return n.createElement(
      on,
      {
        design: e,
        size: i,
        backgroundColor: l,
        textColor: c,
        hoverColor: d,
        height: s,
        activeColor: u,
        width: a,
        className: f,
      },
      n.createElement(
        'span',
        { className: 'btn-inner' },
        n.createElement('span', { className: 'btn-label' }, p),
        n.createElement('span', {
          className: 'btn-blur',
          'aria-hidden': 'true',
        }),
      ),
    );
  },
  en = r.button(
    D ||
      (D = s(
        [
          '\n   \n  display:flex;\n  justify-content:center;\n  align-items:center;\n  border-radius: 4px;\n  background-color: ',
          ';\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: ',
          ';\n  font-weight: bold;\n  padding: ',
          ';\n  width: ',
          ';\n  height: ',
          ";\n  transition: all 0.2s;\n  cursor: pointer;\n  margin: 5px;\n\n  span {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.2s;\n  }\n\n  span:after {\n    content: '»';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -15px;\n    transition: 0.2s;\n    color: ",
          ';\n  }\n\n  &:hover span {\n    padding-right: 15px;\n  }\n\n  &:hover span:after {\n    opacity: 1;\n    right: 0;\n  }\n\n  &:hover {\n    color: ',
          ';\n    background-color: #FFFFFF;\n    box-shadow: 4px 5px 17px -4px ',
          ';\n  }\n}',
        ],
        [
          '\n   \n  display:flex;\n  justify-content:center;\n  align-items:center;\n  border-radius: 4px;\n  background-color: ',
          ';\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: ',
          ';\n  font-weight: bold;\n  padding: ',
          ';\n  width: ',
          ';\n  height: ',
          ";\n  transition: all 0.2s;\n  cursor: pointer;\n  margin: 5px;\n\n  span {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.2s;\n  }\n\n  span:after {\n    content: '»';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -15px;\n    transition: 0.2s;\n    color: ",
          ';\n  }\n\n  &:hover span {\n    padding-right: 15px;\n  }\n\n  &:hover span:after {\n    opacity: 1;\n    right: 0;\n  }\n\n  &:hover {\n    color: ',
          ';\n    background-color: #FFFFFF;\n    box-shadow: 4px 5px 17px -4px ',
          ';\n  }\n}',
        ],
      )),
    function (n) {
      return n.mainBgColor || '#560af0';
    },
    function (n) {
      return 'large' === n.size ? '18px' : 'small' === n.size ? '12px' : '14px';
    },
    function (n) {
      return 'large' === n.size ? '20px' : 'small' === n.size ? '10px' : '16px';
    },
    function (n) {
      return (
        n.width ||
        ('large' === n.size ? '180px' : 'small' === n.size ? '100px' : '130px')
      );
    },
    function (n) {
      return (
        n.height ||
        ('large' === n.size ? '50px' : 'small' === n.size ? '30px' : '40px')
      );
    },
    function (n) {
      return n.arrowColor || '#FFFFFF';
    },
    function (n) {
      return n.mainBgColor || '#560af0';
    },
    function (n) {
      return n.mainBgColor || '#560af0';
    },
  ),
  tn = function (o) {
    return n.createElement(
      en,
      i({}, o),
      n.createElement('span', null, o.children),
    );
  },
  an = r.button(
    U ||
      (U = s(
        [
          '\n  --min-width: ',
          ';\n  --min-height: 42px;\n  --ring-min-size: 20px;\n  --ring-max-size: 150px;\n  --ring-width: 3px;\n  --main-bg-color: ',
          ';\n  --gradient-bg-color-1: ',
          ';\n  --gradient-bg-color-2: ',
          ';\n  --ring-color: ',
          ';\n  --shadow-color: ',
          ';\n  --hover-shadow-color: ',
          ';\n  --main-fg-color: ',
          ';\n  --hover-fg-color: ',
          ";\n\n  min-width: var(--min-width);\n  min-height: var(--min-height);\n  font-size: 17px;\n  text-transform: uppercase;\n  font-weight: 600;\n  color: var(--main-fg-color);\n  background: var(--main-bg-color);\n  background: linear-gradient(\n    66deg,\n    var(--gradient-bg-color-1) 0%,\n    var(--gradient-bg-color-2) 100%\n  );\n  border: none;\n  border-radius: 999px;\n  box-shadow: 12px 2px 24px var(--shadow-color);\n  transition: all 0.3s ease-in-out 0s;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  padding: 10px;\n\n  &:before {\n    content: '';\n    border-radius: 999px;\n    min-width: calc(var(--min-width) + 12px);\n    min-height: calc(var(--min-height) + 12px);\n    border: var(--ring-width) solid var(--ring-color);\n    box-shadow: 0 0 60px var(--hover-shadow-color);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: 0;\n    transition: all 0.3s ease-in-out 0s;\n  }\n\n  &:hover,\n  &:focus {\n    color: var(--hover-fg-color);\n    transform: translateY(-6px);\n  }\n\n  &:active {\n    color: var(--main-fg-color);\n    transform: scale(0.95);\n  }\n\n  &:active:before {\n    border: 0px solid var(--ring-color);\n  }\n\n  &:hover:before,\n  &:focus:before {\n    opacity: 1;\n  }\n\n  &:after {\n    content: '';\n    width: var(--ring-min-size);\n    height: var(--ring-min-size);\n    border-radius: 100%;\n    border: var(--ring-width) solid var(--ring-color);\n    position: absolute;\n    z-index: -1;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    animation: ring 1.5s infinite;\n  }\n\n  &:hover:after,\n  &:focus:after {\n    animation: none;\n    display: none;\n  }\n}\n\n@keyframes ring {\n  0% {\n    width: var(--ring-min-size);\n    height: var(--ring-min-size);\n    opacity: 0.5;\n  }\n  100% {\n    width: var(--ring-max-size);\n    height: var(--ring-max-size);\n    opacity: 0;\n  }\n}",
        ],
        [
          '\n  --min-width: ',
          ';\n  --min-height: 42px;\n  --ring-min-size: 20px;\n  --ring-max-size: 150px;\n  --ring-width: 3px;\n  --main-bg-color: ',
          ';\n  --gradient-bg-color-1: ',
          ';\n  --gradient-bg-color-2: ',
          ';\n  --ring-color: ',
          ';\n  --shadow-color: ',
          ';\n  --hover-shadow-color: ',
          ';\n  --main-fg-color: ',
          ';\n  --hover-fg-color: ',
          ";\n\n  min-width: var(--min-width);\n  min-height: var(--min-height);\n  font-size: 17px;\n  text-transform: uppercase;\n  font-weight: 600;\n  color: var(--main-fg-color);\n  background: var(--main-bg-color);\n  background: linear-gradient(\n    66deg,\n    var(--gradient-bg-color-1) 0%,\n    var(--gradient-bg-color-2) 100%\n  );\n  border: none;\n  border-radius: 999px;\n  box-shadow: 12px 2px 24px var(--shadow-color);\n  transition: all 0.3s ease-in-out 0s;\n  cursor: pointer;\n  outline: none;\n  position: relative;\n  padding: 10px;\n\n  &:before {\n    content: '';\n    border-radius: 999px;\n    min-width: calc(var(--min-width) + 12px);\n    min-height: calc(var(--min-height) + 12px);\n    border: var(--ring-width) solid var(--ring-color);\n    box-shadow: 0 0 60px var(--hover-shadow-color);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: 0;\n    transition: all 0.3s ease-in-out 0s;\n  }\n\n  &:hover,\n  &:focus {\n    color: var(--hover-fg-color);\n    transform: translateY(-6px);\n  }\n\n  &:active {\n    color: var(--main-fg-color);\n    transform: scale(0.95);\n  }\n\n  &:active:before {\n    border: 0px solid var(--ring-color);\n  }\n\n  &:hover:before,\n  &:focus:before {\n    opacity: 1;\n  }\n\n  &:after {\n    content: '';\n    width: var(--ring-min-size);\n    height: var(--ring-min-size);\n    border-radius: 100%;\n    border: var(--ring-width) solid var(--ring-color);\n    position: absolute;\n    z-index: -1;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    animation: ring 1.5s infinite;\n  }\n\n  &:hover:after,\n  &:focus:after {\n    animation: none;\n    display: none;\n  }\n}\n\n@keyframes ring {\n  0% {\n    width: var(--ring-min-size);\n    height: var(--ring-min-size);\n    opacity: 0.5;\n  }\n  100% {\n    width: var(--ring-max-size);\n    height: var(--ring-max-size);\n    opacity: 0;\n  }\n}",
        ],
      )),
    function (n) {
      return 'large' === n.size
        ? '220px'
        : 'small' === n.size
          ? '150px'
          : '180px';
    },
    function (n) {
      return n.mainBgColor || '#814fd1';
    },
    function (n) {
      return n.gradientBgColor1 || 'rgb(222, 203, 226)';
    },
    function (n) {
      return n.gradientBgColor2 || 'rgb(79, 131, 209)';
    },
    function (n) {
      return n.ringColor || '#6f00ff';
    },
    function (n) {
      return n.shadowColor || 'rgba(79, 99, 209, 0.64)';
    },
    function (n) {
      return n.hoverShadowColor || 'rgba(79, 99, 209, 0.64)';
    },
    function (n) {
      return n.mainFgColor || '#313133';
    },
    function (n) {
      return n.hoverFgColor || 'rgb(38, 11, 53)';
    },
  ),
  sn = function (o) {
    var r = o.children,
      e = a(o, ['children']);
    return n.createElement(an, i({}, e), r);
  },
  ln = r.button(
    j ||
      (j = s(
        [
          '\n  padding: ',
          ';\n  border-radius: 15px;\n  font-weight: bold;\n  transition: 0.4s ease-in-out;\n  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.2);\n  border: none;\n  letter-spacing: ',
          ';\n  color: ',
          ';\n  background-color: ',
          ';\n\n  &:hover {\n    letter-spacing: ',
          ';\n    transform: translateY(-0.8em);\n    background-color: ',
          '; // Use the hoverBackgroundColor prop\n    color: ',
          ';\n  }\n\n  &:active {\n    letter-spacing: ',
          ';\n    transition: 0.1s all;\n    transform: translateY(-0.6em);\n    background-color: #171717;\n    color: ',
          ';\n  }\n}',
        ],
        [
          '\n  padding: ',
          ';\n  border-radius: 15px;\n  font-weight: bold;\n  transition: 0.4s ease-in-out;\n  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.2);\n  border: none;\n  letter-spacing: ',
          ';\n  color: ',
          ';\n  background-color: ',
          ';\n\n  &:hover {\n    letter-spacing: ',
          ';\n    transform: translateY(-0.8em);\n    background-color: ',
          '; // Use the hoverBackgroundColor prop\n    color: ',
          ';\n  }\n\n  &:active {\n    letter-spacing: ',
          ';\n    transition: 0.1s all;\n    transform: translateY(-0.6em);\n    background-color: #171717;\n    color: ',
          ';\n  }\n}',
        ],
      )),
    function (n) {
      return 'large' === n.size
        ? '1.5rem'
        : 'small' === n.size
          ? '0.5rem'
          : '1rem';
    },
    function (n) {
      return n.letterSpacing || '0.2em';
    },
    function (n) {
      return n.color || 'black';
    },
    function (n) {
      return n.backgroundColor || 'transparent';
    },
    function (n) {
      return n.hoverLetterSpacing || '0.5em';
    },
    function (n) {
      return n.hoverBackgroundColor || '#171717';
    },
    function (n) {
      return n.hoverColor || 'white';
    },
    function (n) {
      return n.activeLetterSpacing || '0.4em';
    },
    function (n) {
      return n.activeColor || 'white';
    },
  ),
  cn = function (o) {
    var r = o.children,
      e = a(o, ['children']);
    return n.createElement(ln, i({}, e), r);
  },
  dn = r.button(
    Y ||
      (Y = s(
        [
          '\n  outline: none;\n  cursor:pointer;\n  color: ',
          ';\n  padding: ',
          ';\n  border: 2px dashed ',
          ';\n  border-radius: 15px;\n  background-color: #EADDCA;\n  box-shadow: 0 0 0 4px #EADDCA, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);\n  transition: 0.1s ease-in-out, 0.4s color;\n\n  &:hover {\n    color: ',
          ';\n  }\n\n  &:active {\n    transform: translateX(0.1em) translateY(0.1em);\n    box-shadow: 0 0 0 4px #EADDCA, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);\n    color: ',
          ';\n  }\n}',
        ],
        [
          '\n  outline: none;\n  cursor:pointer;\n  color: ',
          ';\n  padding: ',
          ';\n  border: 2px dashed ',
          ';\n  border-radius: 15px;\n  background-color: #EADDCA;\n  box-shadow: 0 0 0 4px #EADDCA, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);\n  transition: 0.1s ease-in-out, 0.4s color;\n\n  &:hover {\n    color: ',
          ';\n  }\n\n  &:active {\n    transform: translateX(0.1em) translateY(0.1em);\n    box-shadow: 0 0 0 4px #EADDCA, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);\n    color: ',
          ';\n  }\n}',
        ],
      )),
    function (n) {
      return n.color || '#DAA06D';
    },
    function (n) {
      return 'large' === n.size
        ? '1.5rem'
        : 'small' === n.size
          ? '0.5rem'
          : '1rem';
    },
    function (n) {
      return n.color || '#DAA06D';
    },
    function (n) {
      return n.hoverColor || n.color || '#DAA06D';
    },
    function (n) {
      return n.activeColor || n.hoverColor || n.color || '#DAA06D';
    },
  ),
  un = function (o) {
    var r = o.children,
      e = a(o, ['children']);
    return n.createElement(dn, i({}, e), r);
  },
  pn = r.button(
    H ||
      (H = s(
        [
          '\n  position: relative;\n  padding-top: ',
          ';\n  padding-right: 1.5rem;\n  padding-bottom: ',
          ';\n  padding-left: 1.5rem;\n  transition: all 0.3s;\n  border-radius: 0.5rem;\n  color: #000;\n  font-weight: bold;\n  font-size: 1.2rem;\n  border: none;\n  background-color: ',
          '; // Use the bgColor prop here\n\n  &:hover {\n    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #000000;\n    background-color: ',
          ';\n  }\n\n  svg {\n    pointer-events: none;\n    opacity: 1;\n    border-radius: 0.5rem;\n    mix-blend-mode: soft-light;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n}',
        ],
        [
          '\n  position: relative;\n  padding-top: ',
          ';\n  padding-right: 1.5rem;\n  padding-bottom: ',
          ';\n  padding-left: 1.5rem;\n  transition: all 0.3s;\n  border-radius: 0.5rem;\n  color: #000;\n  font-weight: bold;\n  font-size: 1.2rem;\n  border: none;\n  background-color: ',
          '; // Use the bgColor prop here\n\n  &:hover {\n    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #000000;\n    background-color: ',
          ';\n  }\n\n  svg {\n    pointer-events: none;\n    opacity: 1;\n    border-radius: 0.5rem;\n    mix-blend-mode: soft-light;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n}',
        ],
      )),
    function (n) {
      return 'large' === n.size
        ? '1rem'
        : 'small' === n.size
          ? '0.5rem'
          : '0.75rem';
    },
    function (n) {
      return 'large' === n.size
        ? '1rem'
        : 'small' === n.size
          ? '0.5rem'
          : '0.75rem';
    },
    function (n) {
      return n.bgColor || 'transparent';
    },
    function (n) {
      return n.hoverColor || n.color || n.bgColor || 'transparent';
    },
  ),
  fn = function (o) {
    var r = o.children,
      e = a(o, ['children']);
    return n.createElement(
      pn,
      i({}, e),
      n.createElement(
        'svg',
        null,
        n.createElement(
          'filter',
          { id: 'pedroduarteisalegend' },
          n.createElement('feTurbulence', {
            stitchTiles: 'stitch',
            numOctaves: '4',
            baseFrequency: '0.5',
            type: 'fractalNoise',
          }),
        ),
        n.createElement('rect', {
          filter: 'url(#pedroduarteisalegend)',
          height: '100%',
          width: '100%',
        }),
      ),
      r,
    );
  },
  bn = t(
    O ||
      (O = s(
        [
          '\n  0% {\n    width: 0;\n  }\n\n  1% {\n    border: 1px solid #00b4d8;\n  }\n\n  40% {\n    width: 2rem;\n  }\n\n  99% {\n    border: 1px solid #00b4d8;\n    left: 99%;\n  }\n\n  100% {\n    border: none;\n    left: 100%;\n    width: 0;\n  }\n',
        ],
        [
          '\n  0% {\n    width: 0;\n  }\n\n  1% {\n    border: 1px solid #00b4d8;\n  }\n\n  40% {\n    width: 2rem;\n  }\n\n  99% {\n    border: 1px solid #00b4d8;\n    left: 99%;\n  }\n\n  100% {\n    border: none;\n    left: 100%;\n    width: 0;\n  }\n',
        ],
      )),
  ),
  xn = r.button(
    W ||
      (W = s(
        [
          '\n  background-color: transparent;\n  border: 1px solid ',
          ';\n  border-radius: 0.2rem;\n  color: ',
          ';\n  font-weight: bold;\n  padding: 0.8rem 1.5rem;\n  position: relative;\n  text-transform: uppercase;\n  transition: ease-in 0.3s;\n\n  &:hover, &:active, &:focus {\n    background: ',
          ';\n    box-shadow: ',
          ";\n    color: #001219;\n  }\n\n  &::before {\n    bottom: -0.5rem;\n    content: '';\n    left: 0;\n    position: absolute;\n  }\n\n  &::after {\n    top: -0.5rem;\n    content: '';\n    left: 0;\n    position: absolute;\n  }\n\n  &:hover::before {\n    animation: ",
          ' ease-in 0.6s forwards reverse;\n  }\n\n  &:hover::after {\n    animation: ',
          ' ease-in 0.6s forwards;\n  }\n',
        ],
        [
          '\n  background-color: transparent;\n  border: 1px solid ',
          ';\n  border-radius: 0.2rem;\n  color: ',
          ';\n  font-weight: bold;\n  padding: 0.8rem 1.5rem;\n  position: relative;\n  text-transform: uppercase;\n  transition: ease-in 0.3s;\n\n  &:hover, &:active, &:focus {\n    background: ',
          ';\n    box-shadow: ',
          ";\n    color: #001219;\n  }\n\n  &::before {\n    bottom: -0.5rem;\n    content: '';\n    left: 0;\n    position: absolute;\n  }\n\n  &::after {\n    top: -0.5rem;\n    content: '';\n    left: 0;\n    position: absolute;\n  }\n\n  &:hover::before {\n    animation: ",
          ' ease-in 0.6s forwards reverse;\n  }\n\n  &:hover::after {\n    animation: ',
          ' ease-in 0.6s forwards;\n  }\n',
        ],
      )),
    function (n) {
      return n.borderColor || '#00b4d8';
    },
    function (n) {
      return n.color || '#00b4d8';
    },
    function (n) {
      return n.hoverBackgroundColor || 'radial-gradient(#00b4d8, #4cc9f0)';
    },
    function (n) {
      return n.hoverBoxShadow || '0px 0px 0.3rem #00b4d8';
    },
    bn,
    bn,
  ),
  hn = function (o) {
    var r = o.children,
      e = o.borderColor,
      t = o.color,
      i = o.hoverBackgroundColor,
      a = o.hoverBoxShadow,
      s = o.className;
    return n.createElement(
      xn,
      {
        borderColor: e,
        color: t,
        hoverBackgroundColor: i,
        hoverBoxShadow: a,
        className: s,
      },
      r,
    );
  },
  gn = r.button(
    R ||
      (R = s(
        [
          '\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: ',
          ';\n  text-transform: uppercase;\n  text-decoration: none;\n  color: ',
          ';\n  background: ',
          ";\n  border: none;\n  letter-spacing: 2px;\n  font-size: 17px;\n  overflow: hidden;\n  cursor: pointer;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: ",
          ";\n    z-index: -1;\n    transition: transform 0.5s;\n    transform-origin: bottom right;\n    transform: scale(0);\n  }\n\n  &:hover:before {\n    transition: transform 0.5s;\n    transform-origin: top left;\n    transform: scale(1);\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n    border: 2px solid #fff;\n    box-sizing: border-box;\n    z-index: -1;\n    transition: transform 0.5s;\n    transform-origin: bottom right;\n    transform: scale(1);\n  }\n\n  &:hover:after {\n    transition: transform 0.5s;\n    transform-origin: top left;\n    transform: scale(0);\n  }\n",
        ],
        [
          '\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: ',
          ';\n  text-transform: uppercase;\n  text-decoration: none;\n  color: ',
          ';\n  background: ',
          ";\n  border: none;\n  letter-spacing: 2px;\n  font-size: 17px;\n  overflow: hidden;\n  cursor: pointer;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: ",
          ";\n    z-index: -1;\n    transition: transform 0.5s;\n    transform-origin: bottom right;\n    transform: scale(0);\n  }\n\n  &:hover:before {\n    transition: transform 0.5s;\n    transform-origin: top left;\n    transform: scale(1);\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: transparent;\n    border: 2px solid #fff;\n    box-sizing: border-box;\n    z-index: -1;\n    transition: transform 0.5s;\n    transform-origin: bottom right;\n    transform: scale(1);\n  }\n\n  &:hover:after {\n    transition: transform 0.5s;\n    transform-origin: top left;\n    transform: scale(0);\n  }\n",
        ],
      )),
    function (n) {
      switch (n.size) {
        case 'small':
          return '10px 20px';
        case 'medium':
          return '15px 30px';
        default:
          return '20px 40px';
      }
    },
    function (n) {
      return n.textColor || '#fff';
    },
    function (n) {
      return n.backgroundColor || 'black';
    },
    function (n) {
      return n.hoverColor || '#03a';
    },
  ),
  mn = function (o) {
    var r = o.children,
      e = a(o, ['children']);
    return n.createElement(gn, i({}, e), r);
  },
  vn = r.button(
    zn ||
      (zn = s(
        [
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: ',
          ';\n  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  background-color: #e8e8e8;\n  border-color: #ffe2e2;\n  border-style: solid;\n  border-width: 9px;\n  border-radius: 35px;\n  font-size: 25px;\n  font-weight: 900;\n  color: rgb(134, 124, 124);\n  font-family: monospace;\n  transition: transform 400ms cubic-bezier(.68,-0.55,.27,2.5), \n    border-color 400ms ease-in-out,\n    background-color 400ms ease-in-out;\n  word-spacing: -2px;\n\n  &:hover {\n    background-color: #eee;\n    transform: scale(1.05);\n    animation: ',
          ' 3s infinite;\n  }\n',
        ],
        [
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: ',
          ';\n  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  background-color: #e8e8e8;\n  border-color: #ffe2e2;\n  border-style: solid;\n  border-width: 9px;\n  border-radius: 35px;\n  font-size: 25px;\n  font-weight: 900;\n  color: rgb(134, 124, 124);\n  font-family: monospace;\n  transition: transform 400ms cubic-bezier(.68,-0.55,.27,2.5), \n    border-color 400ms ease-in-out,\n    background-color 400ms ease-in-out;\n  word-spacing: -2px;\n\n  &:hover {\n    background-color: #eee;\n    transform: scale(1.05);\n    animation: ',
          ' 3s infinite;\n  }\n',
        ],
      )),
    function (n) {
      return 'small' === n.size
        ? '10px 15px'
        : 'medium' === n.size
          ? '20px 25px 20px 22px'
          : '30px 35px 30px 32px';
    },
    t(
      kn ||
        (kn = s(
          [
            '\n      0% {\n        border-color: #fce4e4;\n      }\n    \n      50% {\n        border-color: #ffd8d8;\n      }\n    \n      90% {\n        border-color: #fce4e4;\n      }\n    ',
          ],
          [
            '\n      0% {\n        border-color: #fce4e4;\n      }\n    \n      50% {\n        border-color: #ffd8d8;\n      }\n    \n      90% {\n        border-color: #fce4e4;\n      }\n    ',
          ],
        )),
    ),
  ),
  wn = r.svg(
    yn ||
      (yn = s(
        [
          '\n  fill: rgb(255, 110, 110);\n  transition: opacity 100ms ease-in-out;\n\n  ',
          ':hover & {\n    opacity: 1;\n  }\n',
        ],
        [
          '\n  fill: rgb(255, 110, 110);\n  transition: opacity 100ms ease-in-out;\n\n  ',
          ':hover & {\n    opacity: 1;\n  }\n',
        ],
      )),
    vn,
  );
r.svg(
  Cn ||
    (Cn = s(
      [
        '\n  fill: rgb(255, 110, 110);\n  transition: opacity 100ms ease-in-out;\n\n  ',
        ':hover & {\n    opacity: 0;\n  }\n',
      ],
      [
        '\n  fill: rgb(255, 110, 110);\n  transition: opacity 100ms ease-in-out;\n\n  ',
        ':hover & {\n    opacity: 0;\n  }\n',
      ],
    )),
  vn,
);
var kn,
  zn,
  yn,
  Cn,
  Sn,
  Fn,
  En,
  Bn,
  An,
  Nn,
  Dn,
  Un,
  jn,
  Yn,
  Hn,
  On,
  Wn,
  Rn,
  In,
  Pn,
  Tn,
  Ln,
  Gn,
  _n,
  Mn,
  Xn,
  Zn,
  qn = function (o) {
    var r = o.children,
      e = o.size,
      t = a(o, ['children', 'size']);
    return n.createElement(
      vn,
      i({ size: e }, t),
      n.createElement(
        wn,
        {
          className: 'filled',
          height: '32',
          width: '32',
          viewBox: '0 0 24 24',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        n.createElement('path', { d: 'M0 0H24V24H0z', fill: 'none' }),
        n.createElement('path', {
          d: 'M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z',
        }),
      ),
      r,
    );
  },
  Vn = t(
    Sn ||
      (Sn = s(
        [
          '\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n',
        ],
        [
          '\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n',
        ],
      )),
  ),
  Jn = r.button(
    Fn ||
      (Fn = s(
        [
          '\n  color: white;\n  background-color: ',
          ';\n  font-weight: 500;\n  border-radius: 0.5rem;\n  font-size: ',
          ';\n  line-height: 2rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n  text-align: center;\n  margin-right: 0.5rem;\n  display: inline-flex;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #333;\n  }\n\n  svg {\n    display: inline;\n    width: 1.3rem;\n    height: 1.3rem;\n    margin-right: 0.75rem;\n    color: ',
          ';\n  }\n\n  &:focus svg {\n    animation: ',
          ' 0.5s linear;\n  }\n',
        ],
        [
          '\n  color: white;\n  background-color: ',
          ';\n  font-weight: 500;\n  border-radius: 0.5rem;\n  font-size: ',
          ';\n  line-height: 2rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  padding-top: 0.7rem;\n  padding-bottom: 0.7rem;\n  text-align: center;\n  margin-right: 0.5rem;\n  display: inline-flex;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #333;\n  }\n\n  svg {\n    display: inline;\n    width: 1.3rem;\n    height: 1.3rem;\n    margin-right: 0.75rem;\n    color: ',
          ';\n  }\n\n  &:focus svg {\n    animation: ',
          ' 0.5s linear;\n  }\n',
        ],
      )),
    function (n) {
      return n.backgroundColor || '#222';
    },
    function (n) {
      return n.fontSize || '1rem';
    },
    function (n) {
      return n.iconColor || 'white';
    },
    Vn,
  ),
  Kn = function (o) {
    var r = o.children,
      e = o.backgroundColor,
      t = o.iconColor,
      s = o.fontSize,
      l = a(o, ['children', 'backgroundColor', 'iconColor', 'fontSize']);
    return n.createElement(
      Jn,
      i({ backgroundColor: e, iconColor: t, fontSize: s }, l),
      n.createElement(
        'svg',
        {
          viewBox: '0 0 16 16',
          className: 'bi bi-arrow-repeat',
          fill: 'currentColor',
          height: '16',
          width: '16',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        n.createElement('path', {
          d: 'M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z',
        }),
        n.createElement('path', {
          d: 'M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z',
          fillRule: 'evenodd',
        }),
      ),
      r,
    );
  },
  Qn = r.button(
    En ||
      (En = s(
        [
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 6px 14px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;\n  border-radius: 6px;\n  color: ",
          ';\n  background: ',
          ';\n  border: ',
          ';\n  box-shadow: ',
          ';\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n  outline: none;\n  width: ',
          ';\n  height: ',
          ';\n\n  &:focus {\n    box-shadow: ',
          ';\n  }\n',
        ],
        [
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 6px 14px;\n  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;\n  border-radius: 6px;\n  color: ",
          ';\n  background: ',
          ';\n  border: ',
          ';\n  box-shadow: ',
          ';\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  cursor: pointer;\n  outline: none;\n  width: ',
          ';\n  height: ',
          ';\n\n  &:focus {\n    box-shadow: ',
          ';\n  }\n',
        ],
      )),
    function (n) {
      return n.textColor || '#3D3D3D';
    },
    function (n) {
      return n.backgroundColor || '#fff';
    },
    function (n) {
      return ''
        .concat(n.borderWidth || 0, 'px solid ')
        .concat(n.borderColor || 'transparent');
    },
    function (n) {
      return n.boxShadow || '0px 0.5px 1px rgba(0, 0, 0, 0.1)';
    },
    function (n) {
      return n.width || 'auto';
    },
    function (n) {
      return 'small' === n.size
        ? '30px'
        : 'medium' === n.size
          ? '40px'
          : 'large' === n.size
            ? '50px'
            : n.height || 'auto';
    },
    function (n) {
      return ''.concat(
        n.boxShadow || '0px 0.5px 1px rgba(0, 0, 0, 0.1)',
        ', 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5)',
      );
    },
  ),
  $n = function (o) {
    var r = o.children,
      e = a(o, ['children']);
    return n.createElement(Qn, i({}, e), r);
  },
  no = r.button(
    Bn ||
      (Bn = s(
        [
          '\n  align-self: center;\n  background-color: ',
          ';\n  background-image: none;\n  background-position: 0 90%;\n  background-repeat: repeat no-repeat;\n  background-size: 4px 3px;\n  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;\n  border-style: solid;\n  border-width: 2px;\n  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;\n  box-sizing: border-box;\n  color: ',
          '; // Use the textColor prop\n  cursor: pointer;\n  display: inline-block;\n  font-family: Neucha, sans-serif;\n  font-size: ',
          '; // Use the size prop\n  line-height: 23px;\n  outline: none;\n  padding: ',
          '; // Use the size prop\n  text-decoration: none;\n  transition: all 235ms ease-in-out;\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  &:hover {\n    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;\n    transform: translate3d(0, 2px, 0);\n  }\n\n  &:focus {\n    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;\n  }\n',
        ],
        [
          '\n  align-self: center;\n  background-color: ',
          ';\n  background-image: none;\n  background-position: 0 90%;\n  background-repeat: repeat no-repeat;\n  background-size: 4px 3px;\n  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;\n  border-style: solid;\n  border-width: 2px;\n  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;\n  box-sizing: border-box;\n  color: ',
          '; // Use the textColor prop\n  cursor: pointer;\n  display: inline-block;\n  font-family: Neucha, sans-serif;\n  font-size: ',
          '; // Use the size prop\n  line-height: 23px;\n  outline: none;\n  padding: ',
          '; // Use the size prop\n  text-decoration: none;\n  transition: all 235ms ease-in-out;\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  &:hover {\n    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;\n    transform: translate3d(0, 2px, 0);\n  }\n\n  &:focus {\n    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;\n  }\n',
        ],
      )),
    function (n) {
      return n.backgroundColor || '#fff';
    },
    function (n) {
      return n.textColor || '#41403e';
    },
    function (n) {
      return 'small' === n.size
        ? '0.75rem'
        : 'medium' === n.size
          ? '1rem'
          : '1.25rem';
    },
    function (n) {
      return 'small' === n.size
        ? '0.5rem'
        : 'medium' === n.size
          ? '0.75rem'
          : '1rem';
    },
  ),
  oo = function (o) {
    var r = o.children,
      e = o.backgroundColor,
      t = o.textColor,
      i = o.size,
      a = o.className;
    return n.createElement(
      no,
      { backgroundColor: e, textColor: t, size: i, className: a },
      r,
    );
  },
  ro = r.button(
    An ||
      (An = s(
        [
          '\n  --border-color: ',
          ';\n  --text-color: ',
          ';\n  --hover-bg-color: ',
          ';\n  --hover-text-color: ',
          ';\n\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  display: inline-block;\n  font-size: ',
          ';\n  line-height: 15px;\n  padding: 18px 18px 17px;\n  text-decoration: none;\n  cursor: pointer;\n  background: #fff;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  span:first-child {\n    position: relative;\n    transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);\n    z-index: 10;\n  }\n\n  span:last-child {\n    color: var(--hover-text-color);\n    display: block;\n    position: absolute;\n    bottom: 0;\n    transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);\n    z-index: 100;\n    opacity: 0;\n    top: 50%;\n    left: 50%;\n    transform: translateY(225%) translateX(-50%);\n    height: 14px;\n    line-height: 13px;\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    bottom: -50%;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--hover-bg-color);\n    transform-origin: bottom center;\n    transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);\n    transform: skewY(9.3deg) scaleY(0);\n    z-index: 50;\n  }\n\n  &:hover:after {\n    transform-origin: bottom center;\n    transform: skewY(9.3deg) scaleY(2);\n  }\n\n  &:hover span:last-child {\n    transform: translateX(-50%) translateY(-100%);\n    opacity: 1;\n    transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);\n  }\n',
        ],
        [
          '\n  --border-color: ',
          ';\n  --text-color: ',
          ';\n  --hover-bg-color: ',
          ';\n  --hover-text-color: ',
          ';\n\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  display: inline-block;\n  font-size: ',
          ';\n  line-height: 15px;\n  padding: 18px 18px 17px;\n  text-decoration: none;\n  cursor: pointer;\n  background: #fff;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  span:first-child {\n    position: relative;\n    transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);\n    z-index: 10;\n  }\n\n  span:last-child {\n    color: var(--hover-text-color);\n    display: block;\n    position: absolute;\n    bottom: 0;\n    transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);\n    z-index: 100;\n    opacity: 0;\n    top: 50%;\n    left: 50%;\n    transform: translateY(225%) translateX(-50%);\n    height: 14px;\n    line-height: 13px;\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    bottom: -50%;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--hover-bg-color);\n    transform-origin: bottom center;\n    transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);\n    transform: skewY(9.3deg) scaleY(0);\n    z-index: 50;\n  }\n\n  &:hover:after {\n    transform-origin: bottom center;\n    transform: skewY(9.3deg) scaleY(2);\n  }\n\n  &:hover span:last-child {\n    transform: translateX(-50%) translateY(-100%);\n    opacity: 1;\n    transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);\n  }\n',
        ],
      )),
    function (n) {
      return n.borderColor || '#18181a';
    },
    function (n) {
      return n.textColor || '#18181a';
    },
    function (n) {
      return n.hoverBgColor || 'black';
    },
    function (n) {
      return n.hoverTextColor || 'white';
    },
    function (n) {
      return 'small' === n.size
        ? '12px'
        : 'medium' === n.size
          ? '15px'
          : 'large' === n.size
            ? '18px'
            : '15px';
    },
  ),
  eo = function (o) {
    var r = o.children,
      e = o.altText,
      t = a(o, ['children', 'altText']);
    return n.createElement(
      ro,
      i({}, t),
      n.createElement('span', { className: 'text' }, r),
      n.createElement('span', null, e),
    );
  },
  to = r.button(
    Nn ||
      (Nn = s(
        [
          '\n  align-items: center;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background-image: ',
          ';\n  border: 0;\n  border-radius: 8px;\n  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;\n  box-sizing: border-box;\n  color: ',
          ';\n  display: flex;\n  font-family: Phantomsans, sans-serif;\n  font-size: ',
          ';\n  justify-content: center;\n  line-height: 1em;\n  max-width: 100%;\n  min-width: ',
          '; // Use the width prop, default to 140px\n  height: ',
          '; // Use the height prop, default to auto\n  padding: ',
          '; // Use the padding prop, default to 3px\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  cursor: pointer;\n\n  &:active,\n  &:hover {\n    outline: 0;\n  }\n\n  span {\n    background-color: ',
          ';\n    padding: 16px 24px;\n    border-radius: 6px;\n    width: 100%;\n    height: 100%;\n    transition: 300ms;\n  }\n\n  &:hover span {\n    background: ',
          ';\n  }\n\n  @media (min-width: 768px) {\n    font-size: ',
          ';\n    min-width: ',
          ';\n  }\n};',
        ],
        [
          '\n  align-items: center;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background-image: ',
          ';\n  border: 0;\n  border-radius: 8px;\n  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;\n  box-sizing: border-box;\n  color: ',
          ';\n  display: flex;\n  font-family: Phantomsans, sans-serif;\n  font-size: ',
          ';\n  justify-content: center;\n  line-height: 1em;\n  max-width: 100%;\n  min-width: ',
          '; // Use the width prop, default to 140px\n  height: ',
          '; // Use the height prop, default to auto\n  padding: ',
          '; // Use the padding prop, default to 3px\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  cursor: pointer;\n\n  &:active,\n  &:hover {\n    outline: 0;\n  }\n\n  span {\n    background-color: ',
          ';\n    padding: 16px 24px;\n    border-radius: 6px;\n    width: 100%;\n    height: 100%;\n    transition: 300ms;\n  }\n\n  &:hover span {\n    background: ',
          ';\n  }\n\n  @media (min-width: 768px) {\n    font-size: ',
          ';\n    min-width: ',
          ';\n  }\n};',
        ],
      )),
    function (n) {
      return (
        n.backgroundColor ||
        'linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB)'
      );
    },
    function (n) {
      return n.textColor || '#FFFFFF';
    },
    function (n) {
      return n.fontSize || '20px';
    },
    function (n) {
      return n.width || '140px';
    },
    function (n) {
      return n.height || 'auto';
    },
    function (n) {
      return n.padding || '3px';
    },
    function (n) {
      return n.spanBackgroundColor || 'rgb(5, 6, 45)';
    },
    function (n) {
      return n.spanBackgroundHover || 'none';
    },
    function (n) {
      return n.fontSize || '24px';
    },
    function (n) {
      return n.width || '196px';
    },
  ),
  io = function (o) {
    var r = o.backgroundColor,
      e = o.textColor,
      t = o.spanBackgroundColor,
      i = o.spanBackgroundHover,
      a = o.fontSize,
      s = o.height,
      l = o.width,
      c = o.padding,
      d = o.className;
    return n.createElement(
      to,
      {
        backgroundColor: r,
        textColor: e,
        spanBackgroundColor: t,
        spanBackgroundHover: i,
        fontSize: a,
        height: s,
        width: l,
        className: d,
        padding: c,
      },
      n.createElement('span', { className: 'text' }, 'GradientGemButton'),
    );
  },
  ao = r.button(
    Dn ||
      (Dn = s(
        [
          '\n  background-color: ',
          ';\n  border: ',
          ';\n  border-radius: 4px;\n  color: ',
          ';\n  cursor: pointer;\n  font-family: arial, sans-serif;\n  font-size: ',
          ';\n\n  height: ',
          ';\n\n  line-height: ',
          ';\n\n  min-width: ',
          ';\n\n  padding: 0 16px;\n  text-align: center;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: pre;\n  transition: border-color 300ms ease-in, box-shadow 300ms ease-in, color 300ms ease-in;\n\n  &:hover {\n    border-color: ',
          ';\n    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;\n    color: #202124;\n  }\n\n  &:focus {\n    border-color: #4285f4;\n    outline: none;\n  }\n};',
        ],
        [
          '\n  background-color: ',
          ';\n  border: ',
          ';\n  border-radius: 4px;\n  color: ',
          ';\n  cursor: pointer;\n  font-family: arial, sans-serif;\n  font-size: ',
          ';\n\n  height: ',
          ';\n\n  line-height: ',
          ';\n\n  min-width: ',
          ';\n\n  padding: 0 16px;\n  text-align: center;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: pre;\n  transition: border-color 300ms ease-in, box-shadow 300ms ease-in, color 300ms ease-in;\n\n  &:hover {\n    border-color: ',
          ';\n    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;\n    color: #202124;\n  }\n\n  &:focus {\n    border-color: #4285f4;\n    outline: none;\n  }\n};',
        ],
      )),
    function (n) {
      return n.backgroundColor || '#f8f9fa';
    },
    function (n) {
      return n.borderWidth
        ? ''
            .concat(n.borderWidth, 'px solid ')
            .concat(n.borderColor || '#f8f9fa')
        : 'none';
    },
    function (n) {
      return n.textColor || '#3c4043';
    },
    function (n) {
      return 'small' === n.size
        ? '12px'
        : 'medium' === n.size
          ? '14px'
          : 'large' === n.size
            ? '18px'
            : 'custom' === n.size && n.customSize
              ? n.customSize
              : '14px';
    },
    function (n) {
      return 'small' === n.size
        ? '28px'
        : 'medium' === n.size
          ? '36px'
          : 'large' === n.size
            ? '48px'
            : 'custom' === n.size && n.customSize && n.customSize.height
              ? n.customSize.height
              : '36px';
    },
    function (n) {
      return 'small' === n.size
        ? '20px'
        : 'medium' === n.size
          ? '27px'
          : 'large' === n.size
            ? '36px'
            : 'custom' === n.size && n.customSize && n.customSize.lineHeight
              ? n.customSize.lineHeight
              : '27px';
    },
    function (n) {
      return 'small' === n.size
        ? '40px'
        : 'medium' === n.size
          ? '54px'
          : 'large' === n.size
            ? '72px'
            : 'custom' === n.size && n.customSize && n.customSize.minWidth
              ? n.customSize.minWidth
              : '54px';
    },
    function (n) {
      return n.hoverBorderColor || '#dadce0';
    },
  ),
  so = function (o) {
    var r = o.children,
      e = a(o, ['children']);
    return n.createElement(ao, i({}, e), r);
  },
  lo = r.button(
    Un ||
      (Un = s(
        [
          '\n  align-items: center;\n  background-color: ',
          ';\n  border: 0;\n  border-radius: 100px;\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: ',
          ';\n  display: inline-flex;\n  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;\n  font-size: ',
          ';\n  font-weight: 600;\n  justify-content: center;\n  line-height: 20px;\n  max-width: 480px;\n  min-height: ',
          ';\n  min-width: ',
          ';\n  overflow: hidden;\n  padding: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  text-align: center;\n  touch-action: manipulation;\n  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  user-select: none;\n  -webkit-user-select: none;\n  vertical-align: middle;\n  \n  &:hover,\n  &:focus {\n    background-color: ',
          ';\n    color: ',
          ';\n  }\n  \n  &:active {\n    background: ',
          ';\n    color: ',
          ';\n  }\n',
        ],
        [
          '\n  align-items: center;\n  background-color: ',
          ';\n  border: 0;\n  border-radius: 100px;\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: ',
          ';\n  display: inline-flex;\n  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;\n  font-size: ',
          ';\n  font-weight: 600;\n  justify-content: center;\n  line-height: 20px;\n  max-width: 480px;\n  min-height: ',
          ';\n  min-width: ',
          ';\n  overflow: hidden;\n  padding: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n  text-align: center;\n  touch-action: manipulation;\n  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  user-select: none;\n  -webkit-user-select: none;\n  vertical-align: middle;\n  \n  &:hover,\n  &:focus {\n    background-color: ',
          ';\n    color: ',
          ';\n  }\n  \n  &:active {\n    background: ',
          ';\n    color: ',
          ';\n  }\n',
        ],
      )),
    function (n) {
      return n.disabled
        ? 'rgba(0, 0, 0, 0.08)'
        : n.backgroundColor || '#0A66C2';
    },
    function (n) {
      return n.disabled ? 'rgba(0, 0, 0, 0.3)' : n.textColor || '#ffffff';
    },
    function (n) {
      return n.disabled ? 'not-allowed' : 'pointer';
    },
    function (n) {
      return n.fontSize ? ''.concat(n.fontSize, 'px') : '16px';
    },
    function (n) {
      return n.height ? ''.concat(n.height, 'px') : '40px';
    },
    function (n) {
      return n.minWidth ? ''.concat(n.minWidth, 'px') : '0px';
    },
    function (n) {
      return n.disabled
        ? 'rgba(0, 0, 0, 0.08)'
        : n.hoverBackgroundColor || '#16437E';
    },
    function (n) {
      return n.disabled ? 'rgba(0, 0, 0, 0.3)' : n.textColor || '#ffffff';
    },
    function (n) {
      return n.disabled
        ? 'rgba(0, 0, 0, 0.08)'
        : n.activeBackgroundColor || '#09223b';
    },
    function (n) {
      return n.disabled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)';
    },
  ),
  co = function (o) {
    var r = o.children,
      e = o.disabled,
      t = a(o, ['children', 'disabled']);
    return n.createElement(lo, i({ disabled: e }, t), r);
  },
  uo = r.button(
    jn ||
      (jn = s(
        [
          '\n  appearance: button;\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: pointer;\n  font-family: Graphik, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-size: ',
          ';\n  line-height: 1.15;\n  overflow: visible;\n  padding: 12px 16px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transition: all 80ms ease-in-out;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: ',
          ';\n  height: ',
          ';\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:hover {\n    background-color: ',
          ';\n    border-color: ',
          ';\n  }\n\n  &:active {\n    background-color: ',
          ';\n    border-color: ',
          ';\n  }\n',
        ],
        [
          '\n  appearance: button;\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: pointer;\n  font-family: Graphik, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-size: ',
          ';\n  line-height: 1.15;\n  overflow: visible;\n  padding: 12px 16px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transition: all 80ms ease-in-out;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: ',
          ';\n  height: ',
          ';\n\n  &:disabled {\n    opacity: 0.5;\n  }\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:hover {\n    background-color: ',
          ';\n    border-color: ',
          ';\n  }\n\n  &:active {\n    background-color: ',
          ';\n    border-color: ',
          ';\n  }\n',
        ],
      )),
    function (n) {
      return n.backgroundColor || '#1652F0';
    },
    function (n) {
      return n.borderColor || '#1652F0';
    },
    function (n) {
      return n.textColor || '#FFFFFF';
    },
    function (n) {
      return n.fontSize || '14px';
    },
    function (n) {
      return n.width || 'fit-content';
    },
    function (n) {
      return n.height || 'auto';
    },
    function (n) {
      return n.backgroundColor || '#0A46E4';
    },
    function (n) {
      return n.borderColor || '#0A46E4';
    },
    function (n) {
      return n.backgroundColor || '#0039D7';
    },
    function (n) {
      return n.borderColor || '#0039D7';
    },
  ),
  po = function (o) {
    var r = o.children,
      e = a(o, ['children']);
    return n.createElement(uo, i({}, e), r);
  },
  fo = r.button(
    Yn ||
      (Yn = s(
        [
          '\n  background-image: linear-gradient(',
          ', ',
          ');\n  border: ',
          ';\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: ',
          ';\n  direction: ltr;\n  display: block;\n  font-family: "SF Pro Text","SF Pro Icons","AOS Icons","Helvetica Neue",Helvetica,Arial,sans-serif;\n  font-size: ',
          ';\n  font-weight: 400;\n  letter-spacing: -.022em;\n  line-height: 1.47059;\n  min-width: 30px;\n  overflow: visible;\n  padding: 4px 15px;\n  text-align: center;\n  vertical-align: baseline;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  transition: background-image 300ms ease-in, border-color 300ms ease-in, box-shadow 300ms ease-in;\n  \n  ',
          '\n  \n  ',
          '\n  \n  ',
          '\n  \n  &:disabled {\n    opacity: 0.3;\n  }\n  \n  &:hover {\n    background-image: linear-gradient(',
          ', ',
          ');\n    border-color: ',
          ';\n    text-decoration: none;\n  }\n  \n  &:active {\n    background-image: linear-gradient(',
          ', ',
          ');\n    border-color: ',
          ';\n    outline: none;\n  }\n\n  &:focus {\n    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;\n    outline: none;\n  }\n',
        ],
        [
          '\n  background-image: linear-gradient(',
          ', ',
          ');\n  border: ',
          ';\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: ',
          ';\n  direction: ltr;\n  display: block;\n  font-family: "SF Pro Text","SF Pro Icons","AOS Icons","Helvetica Neue",Helvetica,Arial,sans-serif;\n  font-size: ',
          ';\n  font-weight: 400;\n  letter-spacing: -.022em;\n  line-height: 1.47059;\n  min-width: 30px;\n  overflow: visible;\n  padding: 4px 15px;\n  text-align: center;\n  vertical-align: baseline;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  transition: background-image 300ms ease-in, border-color 300ms ease-in, box-shadow 300ms ease-in;\n  \n  ',
          '\n  \n  ',
          '\n  \n  ',
          '\n  \n  &:disabled {\n    opacity: 0.3;\n  }\n  \n  &:hover {\n    background-image: linear-gradient(',
          ', ',
          ');\n    border-color: ',
          ';\n    text-decoration: none;\n  }\n  \n  &:active {\n    background-image: linear-gradient(',
          ', ',
          ');\n    border-color: ',
          ';\n    outline: none;\n  }\n\n  &:focus {\n    box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;\n    outline: none;\n  }\n',
        ],
      )),
    function (n) {
      return n.backgroundColor || '#42A1EC';
    },
    function (n) {
      return n.backgroundColor || '#0070C9';
    },
    function (n) {
      return n.borderWidth
        ? ''
            .concat(n.borderWidth, 'px solid ')
            .concat(n.borderColor || '#0077CC')
        : 'none';
    },
    function (n) {
      return n.textColor || '#FFFFFF';
    },
    function (n) {
      return n.disabled ? 'default' : 'pointer';
    },
    function (n) {
      return n.fontSize ? ''.concat(n.fontSize, 'px') : '17px';
    },
    function (n) {
      return (
        'small' === n.size &&
        '\n    font-size: 12px;\n    height: 28px;\n    line-height: 20px;\n    min-width: 40px;\n  '
      );
    },
    function (n) {
      return (
        'medium' === n.size &&
        '\n    font-size: 14px;\n    height: 36px;\n    line-height: 27px;\n    min-width: 54px;\n  '
      );
    },
    function (n) {
      return (
        'large' === n.size &&
        '\n    font-size: 18px;\n    height: 48px;\n    line-height: 36px;\n    min-width: 72px;\n  '
      );
    },
    function (n) {
      return n.hoverBackgroundColor || '#51A9EE';
    },
    function (n) {
      return n.hoverBackgroundColor || '#147BCD';
    },
    function (n) {
      return n.hoverBorderColor || '#1482D0';
    },
    function (n) {
      return n.activeBackgroundColor || '#3D94D9';
    },
    function (n) {
      return n.activeBackgroundColor || '#0067B9';
    },
    function (n) {
      return n.activeBorderColor || '#006DBC';
    },
  ),
  bo = function (o) {
    var r = o.className,
      e = o.children,
      t = o.disabled,
      s = a(o, ['className', 'children', 'disabled']);
    return n.createElement(fo, i({ className: r, disabled: t }, s), e);
  },
  xo = r.button(
    Hn ||
      (Hn = s(
        [
          '\n  appearance: button;\n  backface-visibility: hidden;\n  background-color: ',
          ';\n  border-radius: 6px;\n  border-width: 0;\n  box-shadow: ',
          ';\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: ',
          ';\n  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;\n  font-size: ',
          ';\n  height: ',
          ';\n  line-height: 1.15;\n  margin: 12px 0 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0 25px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transform: translateZ(0);\n  transition: all 0.2s, box-shadow 0.08s ease-in;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: ',
          ';\n\n\n  &:disabled {\n    cursor: default;\n  }\n\n  &:focus {\n    box-shadow: ',
          ';\n  }\n',
        ],
        [
          '\n  appearance: button;\n  backface-visibility: hidden;\n  background-color: ',
          ';\n  border-radius: 6px;\n  border-width: 0;\n  box-shadow: ',
          ';\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: ',
          ';\n  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;\n  font-size: ',
          ';\n  height: ',
          ';\n  line-height: 1.15;\n  margin: 12px 0 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0 25px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transform: translateZ(0);\n  transition: all 0.2s, box-shadow 0.08s ease-in;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: ',
          ';\n\n\n  &:disabled {\n    cursor: default;\n  }\n\n  &:focus {\n    box-shadow: ',
          ';\n  }\n',
        ],
      )),
    function (n) {
      return n.backgroundColor || '#405cf5';
    },
    function (n) {
      return (
        n.boxShadow ||
        'rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0'
      );
    },
    function (n) {
      return n.textColor || '#fff';
    },
    function (n) {
      return n.disabled ? 'default' : 'pointer';
    },
    function (n) {
      return 'number' == typeof n.fontSize
        ? n.fontSize + 'px'
        : n.fontSize || '100%';
    },
    function (n) {
      return n.height ? ''.concat(n.height, 'px') : '44px';
    },
    function (n) {
      return n.width ? ''.concat(n.width, 'px') : '100px';
    },
    function (n) {
      return (
        n.boxShadow ||
        'rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px'
      );
    },
  ),
  ho = function (o) {
    var r = o.children,
      e = o.disabled,
      t = a(o, ['children', 'disabled']);
    return n.createElement(xo, i({ disabled: e }, t), r);
  },
  go = r.button(
    On ||
      (On = s(
        [
          '\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: pointer;\n  display: inline-block;\n  font-family: "Amazon Ember", sans-serif;\n  font-size: ',
          'px;\n  line-height: 29px;\n  padding: 0 11px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  width: ',
          ';\n  transition: background-color 300ms ease-in, border-color 300ms ease-in, box-shadow 300ms ease-in;\n  \n  &:hover {\n    background-color: #f7fafa;\n  }\n  \n  &:focus {\n    border-color: #008296;\n    box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n    outline: 0;\n  }\n',
        ],
        [
          '\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  border-radius: 8px;\n  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: pointer;\n  display: inline-block;\n  font-family: "Amazon Ember", sans-serif;\n  font-size: ',
          'px;\n  line-height: 29px;\n  padding: 0 11px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n  width: ',
          ';\n  transition: background-color 300ms ease-in, border-color 300ms ease-in, box-shadow 300ms ease-in;\n  \n  &:hover {\n    background-color: #f7fafa;\n  }\n  \n  &:focus {\n    border-color: #008296;\n    box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;\n    outline: 0;\n  }\n',
        ],
      )),
    function (n) {
      return n.backgroundColor || '#fff';
    },
    function (n) {
      return n.borderColor || '#d5d9d9';
    },
    function (n) {
      return n.textColor || '#0f1111';
    },
    function (n) {
      return n.fontSize || 13;
    },
    function (n) {
      return n.width || '100px';
    },
  ),
  mo = function (o) {
    return n.createElement(go, i({}, o), o.children);
  },
  vo = r.button(
    Wn ||
      (Wn = s(
        [
          "\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  position: relative;\n  padding: ",
          ';\n  margin-bottom: 30px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: ',
          ';\n  font-weight: bold;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  transition: color 0.5s;\n  cursor: pointer;\n  border-radius: ',
          ';\n  color: ',
          ";\n\n  &:before {\n    content: '';\n    z-index: 1;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border: ",
          ' solid ',
          ';\n    border-radius: ',
          ";\n  }\n\n  &:after {\n    content: '';\n    z-index: -2;\n    position: absolute;\n    left: ",
          ';\n    top: ',
          ';\n    width: 100%;\n    height: 100%;\n    transition: all 0.3s 0.2s;\n    border-radius: ',
          ';\n  }\n\n  &:hover {\n    color: ',
          ';\n    border-radius: ',
          ';\n\n    &:after {\n      transition: all 0.3s;\n      left: 0;\n      top: 0;\n      border-radius: ',
          ';\n    }\n  }\n',
        ],
        [
          "\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  position: relative;\n  padding: ",
          ';\n  margin-bottom: 30px;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: ',
          ';\n  font-weight: bold;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  transition: color 0.5s;\n  cursor: pointer;\n  border-radius: ',
          ';\n  color: ',
          ";\n\n  &:before {\n    content: '';\n    z-index: 1;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border: ",
          ' solid ',
          ';\n    border-radius: ',
          ";\n  }\n\n  &:after {\n    content: '';\n    z-index: -2;\n    position: absolute;\n    left: ",
          ';\n    top: ',
          ';\n    width: 100%;\n    height: 100%;\n    transition: all 0.3s 0.2s;\n    border-radius: ',
          ';\n  }\n\n  &:hover {\n    color: ',
          ';\n    border-radius: ',
          ';\n\n    &:after {\n      transition: all 0.3s;\n      left: 0;\n      top: 0;\n      border-radius: ',
          ';\n    }\n  }\n',
        ],
      )),
    function (n) {
      return n.padding || '20px 46px';
    },
    function (n) {
      return n.fontSize || '16px';
    },
    function (n) {
      return n.borderRadius || '30px';
    },
    function (n) {
      return n.textColor || '#0505a9';
    },
    function (n) {
      return n.borderSize || '2px';
    },
    function (n) {
      return n.borderColor || '#0505a9';
    },
    function (n) {
      return n.borderRadius || '30px';
    },
    function (n) {
      return n.borderSize || '2px';
    },
    function (n) {
      return n.borderSize || '2px';
    },
    function (n) {
      return n.borderRadius || '30px';
    },
    function (n) {
      return n.hoverTextColor || '#ffffff';
    },
    function (n) {
      return n.borderRadius || '30px';
    },
    function (n) {
      return n.borderRadius || '30px';
    },
  ),
  wo = r.span(
    Rn ||
      (Rn = s(
        [
          '\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: ',
          ';\n  background: ',
          ';\n',
        ],
        [
          '\n  z-index: -1;\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: ',
          ';\n  background: ',
          ';\n',
        ],
      )),
    function (n) {
      return n.borderRadius || '30px';
    },
    function (n) {
      return n.innerBackgroundColor || '#ffffff';
    },
  ),
  ko = r.span(
    In ||
      (In = s(
        ['\n  position: relative;\n  display: block;\n  height: 100%;\n'],
        ['\n  position: relative;\n  display: block;\n  height: 100%;\n'],
      )),
  ),
  zo = r.span(
    Pn ||
      (Pn = s(
        [
          '\n  position: absolute;\n  top: ',
          ';\n  width: ',
          ';\n  height: 100%;\n  background: ',
          ";\n  border-radius: 100%;\n  transform: translate3d(0, 150%, 0) scale(1.7);\n  transition: transform 0.45s;\n\n  @supports (filter: url('#goo')) {\n    transform: translate3d(0, 150%, 0) scale(1.4);\n  }\n\n  &:nth-child(1) {\n    left: 0;\n    transition-delay: 0s;\n  }\n\n  &:nth-child(2) {\n    left: ",
          ';\n    transition-delay: 0.08s;\n  }\n\n  &:nth-child(3) {\n    left: ',
          ' * 2;\n    transition-delay: 0.16s;\n  }\n\n  &:nth-child(4) {\n    left: ',
          ' * 3;\n    transition-delay: 0.24s;\n  }\n\n  ',
          ":hover & {\n    transform: translateZ(0) scale(1.7);\n\n    @supports (filter: url('#goo')) {\n      transform: translateZ(0) scale(1.4);\n    }\n  }\n",
        ],
        [
          '\n  position: absolute;\n  top: ',
          ';\n  width: ',
          ';\n  height: 100%;\n  background: ',
          ";\n  border-radius: 100%;\n  transform: translate3d(0, 150%, 0) scale(1.7);\n  transition: transform 0.45s;\n\n  @supports (filter: url('#goo')) {\n    transform: translate3d(0, 150%, 0) scale(1.4);\n  }\n\n  &:nth-child(1) {\n    left: 0;\n    transition-delay: 0s;\n  }\n\n  &:nth-child(2) {\n    left: ",
          ';\n    transition-delay: 0.08s;\n  }\n\n  &:nth-child(3) {\n    left: ',
          ' * 2;\n    transition-delay: 0.16s;\n  }\n\n  &:nth-child(4) {\n    left: ',
          ' * 3;\n    transition-delay: 0.24s;\n  }\n\n  ',
          ":hover & {\n    transform: translateZ(0) scale(1.7);\n\n    @supports (filter: url('#goo')) {\n      transform: translateZ(0) scale(1.4);\n    }\n  }\n",
        ],
      )),
    function (n) {
      return n.borderSize || '2px';
    },
    function (n) {
      return n.blobWidth || '25%';
    },
    function (n) {
      return n.blobColor || '#0505a9';
    },
    function (n) {
      return n.blobWidth || '25%';
    },
    function (n) {
      return n.blobWidth || '25%';
    },
    function (n) {
      return n.blobWidth || '25%';
    },
    vo,
  ),
  yo = function (o) {
    var r = o.children,
      e = o.padding,
      t = o.fontSize,
      i = o.textColor,
      a = o.hoverTextColor,
      s = o.borderColor,
      l = o.borderSize,
      c = o.borderRadius,
      d = o.innerBackgroundColor,
      u = o.blobColor,
      p = o.blobWidth,
      f = o.className;
    return n.createElement(
      vo,
      {
        padding: e,
        fontSize: t,
        textColor: i,
        hoverTextColor: a,
        borderColor: s,
        borderSize: l,
        borderRadius: c,
        className: f,
      },
      r,
      n.createElement(
        wo,
        { borderRadius: c, innerBackgroundColor: d },
        n.createElement(
          ko,
          null,
          n.createElement(zo, { borderSize: l, blobColor: u, blobWidth: p }),
          n.createElement(zo, { borderSize: l, blobColor: u, blobWidth: p }),
          n.createElement(zo, { borderSize: l, blobColor: u, blobWidth: p }),
          n.createElement(zo, { borderSize: l, blobColor: u, blobWidth: p }),
        ),
      ),
    );
  },
  Co = r.button(
    Gn ||
      (Gn = s(
        [
          '\n  font-size: ',
          ';\n  font-weight: 200;\n  letter-spacing: 1px;\n  padding: 13px 20px 13px;\n  outline: 0;\n  border: 1px solid black;\n  cursor: pointer;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  /* Use css helper to conditionally apply styles */\n  ',
          '\n\n  ',
          '\n\n  &:after {\n    content: "";\n    background-color: ',
          ';\n    width: 100%;\n    z-index: -1;\n    position: absolute;\n    height: 100%;\n    top: 7px;\n    left: 7px;\n    transition: 0.2s;\n  }\n\n  &:hover:after {\n    top: 0px;\n    left: 0px;\n  }\n\n  @media (min-width: 768px) {\n    padding: 13px 50px 13px;\n  }\n',
        ],
        [
          '\n  font-size: ',
          ';\n  font-weight: 200;\n  letter-spacing: 1px;\n  padding: 13px 20px 13px;\n  outline: 0;\n  border: 1px solid black;\n  cursor: pointer;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  /* Use css helper to conditionally apply styles */\n  ',
          '\n\n  ',
          '\n\n  &:after {\n    content: "";\n    background-color: ',
          ';\n    width: 100%;\n    z-index: -1;\n    position: absolute;\n    height: 100%;\n    top: 7px;\n    left: 7px;\n    transition: 0.2s;\n  }\n\n  &:hover:after {\n    top: 0px;\n    left: 0px;\n  }\n\n  @media (min-width: 768px) {\n    padding: 13px 50px 13px;\n  }\n',
        ],
      )),
    function (n) {
      return n.fontSize || '16px';
    },
    function (n) {
      var o = n.width;
      return (
        o &&
        e(
          Tn ||
            (Tn = s(
              ['\n      width: ', ';\n    '],
              ['\n      width: ', ';\n    '],
            )),
          o,
        )
      );
    },
    function (n) {
      var o = n.height;
      return (
        o &&
        e(
          Ln ||
            (Ln = s(
              ['\n      height: ', ';\n    '],
              ['\n      height: ', ';\n    '],
            )),
          o,
        )
      );
    },
    function (n) {
      return n.backgroundColor || '#ffe54c';
    },
  ),
  So = r.button(
    _n ||
      (_n = s(
        [
          '\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  box-sizing: border-box;\n  color: ',
          ';\n  font-family: "Avenir Next LT W01 Bold", sans-serif;\n  font-size: ',
          ';\n  font-weight: ',
          ';\n  line-height: ',
          ';\n  padding: 16px 23px;\n  height: ',
          ';\n  position: relative;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  transition: background-color 300ms ease-in;\n\n  &:hover,\n  &:active {\n    outline: 0;\n  }\n\n  &:hover {\n    background-color: transparent;\n    cursor: pointer;\n  }\n\n  &:before {\n    background-color: ',
          ';\n    content: "";\n    height: calc(100% + 3px);\n    position: absolute;\n    right: -7px;\n    top: -9px;\n    transition: background-color 300ms ease-in;\n    width: 100%;\n    z-index: -1;\n  }\n\n  &:hover:before {\n    background-color: ',
          '; /* Updated color for hover */\n  }\n\n  @media (min-width: 768px) {\n    padding: 16px 32px;\n  }\n};',
        ],
        [
          '\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  box-sizing: border-box;\n  color: ',
          ';\n  font-family: "Avenir Next LT W01 Bold", sans-serif;\n  font-size: ',
          ';\n  font-weight: ',
          ';\n  line-height: ',
          ';\n  padding: 16px 23px;\n  height: ',
          ';\n  position: relative;\n  text-decoration: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  transition: background-color 300ms ease-in;\n\n  &:hover,\n  &:active {\n    outline: 0;\n  }\n\n  &:hover {\n    background-color: transparent;\n    cursor: pointer;\n  }\n\n  &:before {\n    background-color: ',
          ';\n    content: "";\n    height: calc(100% + 3px);\n    position: absolute;\n    right: -7px;\n    top: -9px;\n    transition: background-color 300ms ease-in;\n    width: 100%;\n    z-index: -1;\n  }\n\n  &:hover:before {\n    background-color: ',
          '; /* Updated color for hover */\n  }\n\n  @media (min-width: 768px) {\n    padding: 16px 32px;\n  }\n};',
        ],
      )),
    function (n) {
      return n.backgroundColor || 'transparent';
    },
    function (n) {
      return n.borderColor || '#266DB6';
    },
    function (n) {
      return n.textColor || '#00132C';
    },
    function (n) {
      return n.fontSize || '16px';
    },
    function (n) {
      return n.fontWeight || 700;
    },
    function (n) {
      return n.height || '24px';
    },
    function (n) {
      return n.height || 'auto';
    },
    function (n) {
      return n.pseudoBackgroundColor || '#D5EDF6';
    },
    function (n) {
      return n.hoverPseudoBackgroundColor || '#6DCFF6';
    },
  ),
  Fo = function (o) {
    var r = o.children,
      e = o.backgroundColor,
      t = o.borderColor,
      i = o.textColor,
      a = o.pseudoBackgroundColor,
      s = o.fontSize,
      l = o.height,
      c = o.fontWeight,
      d = o.hoverPseudoBackgroundColor,
      u = o.className;
    return n.createElement(
      So,
      {
        backgroundColor: e,
        borderColor: t,
        textColor: i,
        pseudoBackgroundColor: a,
        fontSize: s,
        height: l,
        fontWeight: c,
        className: u,
        hoverPseudoBackgroundColor: d,
      },
      r,
    );
  },
  Eo = r.button(
    Mn ||
      (Mn = s(
        [
          '\n  --b: 3px;\n  --s: .45em;\n  --color: ',
          ';\n  \n  padding: calc(.5em + var(--s)) calc(.9em + var(--s));\n  color: var(--color);\n  --_p: var(--s);\n  background:\n    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)\n    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));\n  transition: .3s linear, color 0s, background-color 0s;\n  outline: var(--b) solid #0000;\n  outline-offset: .6em;\n  font-size: ',
          ';\n  width: ',
          ';\n  height: ',
          ';\n\n  border: 0;\n\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  &:hover,\n  &:focus-visible {\n    --_p: 0px;\n    outline-color: var(--color);\n    outline-offset: .05em;\n  }\n\n  &:active {\n    background: var(--color);\n    color: #fff;\n  }\n',
        ],
        [
          '\n  --b: 3px;\n  --s: .45em;\n  --color: ',
          ';\n  \n  padding: calc(.5em + var(--s)) calc(.9em + var(--s));\n  color: var(--color);\n  --_p: var(--s);\n  background:\n    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)\n    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));\n  transition: .3s linear, color 0s, background-color 0s;\n  outline: var(--b) solid #0000;\n  outline-offset: .6em;\n  font-size: ',
          ';\n  width: ',
          ';\n  height: ',
          ';\n\n  border: 0;\n\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n\n  &:hover,\n  &:focus-visible {\n    --_p: 0px;\n    outline-color: var(--color);\n    outline-offset: .05em;\n  }\n\n  &:active {\n    background: var(--color);\n    color: #fff;\n  }\n',
        ],
      )),
    function (n) {
      return n.color || '#373B44';
    },
    function (n) {
      return n.fontSize || '16px';
    },
    function (n) {
      return n.width || 'auto';
    },
    function (n) {
      return n.height || 'auto';
    },
  ),
  Bo = function (o) {
    var r = o.children,
      e = o.className,
      t = o.color,
      i = o.fontSize,
      a = o.width,
      s = o.height;
    return n.createElement(
      Eo,
      { color: t, fontSize: i, className: e, width: a, height: s },
      r,
    );
  },
  Ao = r.button(
    Xn ||
      (Xn = s(
        [
          '\n  background: ',
          ';\n  border: 0;\n  border-radius: 12px;\n  color: ',
          ';\n  cursor: pointer;\n  display: inline-block;\n  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;\n  font-size: ',
          ';\n  font-weight: 500;\n  line-height: 2.5;\n  outline: transparent;\n  padding: 0 1rem;\n  text-align: center;\n  text-decoration: none;\n  transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  width: ',
          ';\n  height: ',
          ';\n  box-shadow: ',
          ';\n  box-shadow-color: ',
          '; // Use the boxShadowColor prop\n\n  &:not([disabled]):focus {\n    box-shadow: 0 0 0.25rem ',
          ', -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5), 0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);\n  }\n\n  &:not([disabled]):hover {\n    box-shadow: 0 0 0.25rem ',
          ', -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5), 0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);\n    background: ',
          ';\n  }\n};',
        ],
        [
          '\n  background: ',
          ';\n  border: 0;\n  border-radius: 12px;\n  color: ',
          ';\n  cursor: pointer;\n  display: inline-block;\n  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;\n  font-size: ',
          ';\n  font-weight: 500;\n  line-height: 2.5;\n  outline: transparent;\n  padding: 0 1rem;\n  text-align: center;\n  text-decoration: none;\n  transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  width: ',
          ';\n  height: ',
          ';\n  box-shadow: ',
          ';\n  box-shadow-color: ',
          '; // Use the boxShadowColor prop\n\n  &:not([disabled]):focus {\n    box-shadow: 0 0 0.25rem ',
          ', -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5), 0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);\n  }\n\n  &:not([disabled]):hover {\n    box-shadow: 0 0 0.25rem ',
          ', -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5), 0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);\n    background: ',
          ';\n  }\n};',
        ],
      )),
    function (n) {
      return (
        n.background || 'linear-gradient(to bottom right, #EF4765, #FF9A5A)'
      );
    },
    function (n) {
      return n.textColor || '#FFFFFF';
    },
    function (n) {
      return n.fontSize || '16px';
    },
    function (n) {
      return n.width || 'auto';
    },
    function (n) {
      return n.height || 'auto';
    },
    function (n) {
      return n.boxShadow || 'none';
    },
    function (n) {
      return n.boxShadowColor || 'rgba(0, 0, 0, 0.5)';
    },
    function (n) {
      return n.boxShadowColor || 'rgba(0, 0, 0, 0.5)';
    },
    function (n) {
      return n.boxShadowColor || 'rgba(0, 0, 0, 0.5)';
    },
    function (n) {
      return (
        n.hoverBackground ||
        n.background ||
        'linear-gradient(to bottom right, #EF4765, #FF9A5A)'
      );
    },
  ),
  No = function (o) {
    var r = o.children,
      e = a(o, ['children']);
    return n.createElement(Ao, i({}, e), r);
  },
  Do = r.button(
    Zn ||
      (Zn = s(
        [
          '\n  appearance: button;\n  background-color: ',
          ';\n  background-image: none;\n  border: 1px solid ',
          ';\n  border-radius: 4px;\n  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: pointer;\n  display: inline-block;\n  font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  margin: 0 5px 10px 0;\n  overflow: visible;\n  padding: 12px 40px;\n  text-align: center;\n  text-transform: none;\n  touch-action: manipulation;\n  user-select: none;\n  -webkit-user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n\n  &:focus {\n    text-decoration: none;\n  }\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:active {\n    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;\n    outline: 0;\n  }\n\n  &:not([disabled]):active {\n    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;\n    transform: translate(2px, 2px);\n  }\n\n  @media (min-width: 768px) {\n    padding: 12px 50px;\n  }\n',
        ],
        [
          '\n  appearance: button;\n  background-color: ',
          ';\n  background-image: none;\n  border: 1px solid ',
          ';\n  border-radius: 4px;\n  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;\n  box-sizing: border-box;\n  color: ',
          ';\n  cursor: pointer;\n  display: inline-block;\n  font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  margin: 0 5px 10px 0;\n  overflow: visible;\n  padding: 12px 40px;\n  text-align: center;\n  text-transform: none;\n  touch-action: manipulation;\n  user-select: none;\n  -webkit-user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n\n  &:focus {\n    text-decoration: none;\n  }\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:active {\n    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;\n    outline: 0;\n  }\n\n  &:not([disabled]):active {\n    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;\n    transform: translate(2px, 2px);\n  }\n\n  @media (min-width: 768px) {\n    padding: 12px 50px;\n  }\n',
        ],
      )),
    function (n) {
      return n.backgroundColor || '#000';
    },
    function (n) {
      return n.borderColor || '#000';
    },
    function (n) {
      return n.textColor || '#fff';
    },
  ),
  Uo = function (o) {
    var r = o.children,
      e = o.className,
      t = a(o, ['children', 'className']);
    return n.createElement(Do, i({ className: e }, t), r);
  };
export {
  mo as AmazonButton,
  x as AnimatedButton,
  bo as AppleButton,
  yo as BlobButton,
  Co as BoscockButton,
  Fo as Button51,
  m as ButtonGroup,
  po as CoinbaseButton,
  Bo as ConicButton,
  nn as CustomIconButton,
  rn as CustomStyledButton,
  P as DiagonalSwipeButton,
  tn as FancyArrowButton,
  sn as FancyGradientButton,
  cn as FancyLetterSpacingButton,
  un as FancyOutlineButton,
  fn as FancyShadowButton,
  _ as GenerateBtn,
  so as GoogleButton,
  hn as GradientBorderButton,
  io as GradientGemButton,
  mn as HoverEffectButton,
  co as LinkedinButton,
  qn as Lovebtn,
  $n as MacOsButton,
  oo as PaperButton,
  No as PinturaButton,
  X as PrimaryButton,
  Kn as RefreshButton,
  eo as ScottButton,
  f as SecondaryButton,
  V as ShakeButton,
  ho as StripeButton,
  J as StyledButton,
  Q as TertiaryButton,
  Uo as ThreeDButton,
};
//# sourceMappingURL=index.esm.js.map
