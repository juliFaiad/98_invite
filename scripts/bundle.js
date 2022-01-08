!(function i(a, s, u) {
	function l(t, e) {
		if (!s[t]) {
			if (!a[t]) {
				var n = 'function' == typeof require && require;
				if (!e && n) return n(t, !0);
				if (d) return d(t, !0);
				var o = new Error("Cannot find module '" + t + "'");
				throw ((o.code = 'MODULE_NOT_FOUND'), o);
			}
			var r = (s[t] = { exports: {} });
			a[t][0].call(
				r.exports,
				function (e) {
					return l(a[t][1][e] || e);
				},
				r,
				r.exports,
				i,
				a,
				s,
				u
			);
		}
		return s[t].exports;
	}
	for (
		var d = 'function' == typeof require && require, e = 0;
		e < u.length;
		e++
	)
		l(u[e]);
	return l;
})(
	{
		1: [
			function (r, e, t) {
				'use strict';
				r('domready')(function () {
					var e = r('./modules/blazy.js'),
						t = r('./modules/sound.js'),
						n = r('./modules/browsertabcontrol.js'),
						o = r('./modules/catscape.js');
					r('./modules/linksshuffle.js')('.js-links'),
						r('./modules/calculator.js')(document.getElementById('js-answer')),
						n(t),
						o.init(880),
						o.on('sound', function () {
							t.stop();
						}),
						o.on('close', function () {
							t.start();
						}),
						new e({
							offset: 200,
							selector: '.section',
							errorClass: 'ld',
							unloadOutOfViewport: !1,
						});
				});
			},
			{
				'./modules/blazy.js': 2,
				'./modules/browsertabcontrol.js': 3,
				'./modules/calculator.js': 4,
				'./modules/catscape.js': 5,
				'./modules/linksshuffle.js': 6,
				'./modules/sound.js': 7,
				domready: 9,
			},
		],
		2: [
			function (e, t, n) {
				'use strict';
				var o,
					r,
					i =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (e) {
									return typeof e;
							  }
							: function (e) {
									return e &&
										'function' == typeof Symbol &&
										e.constructor === Symbol &&
										e !== Symbol.prototype
										? 'symbol'
										: typeof e;
							  };
				(o = void 0),
					(r = function () {
						var f,
							l,
							p,
							d,
							m = 'srcset';
						return function (e) {
							if (!document.querySelectorAll) {
								var i = document.createStyleSheet();
								document.querySelectorAll = function (e, t, n, o, r) {
									for (
										r = document.all,
											t = [],
											n = (e = e.replace(/\[for\b/gi, '[htmlFor').split(','))
												.length;
										n--;

									) {
										for (i.addRule(e[n], 'k:v'), o = r.length; o--; )
											r[o].currentStyle.k && t.push(r[o]);
										i.removeRule(0);
									}
									return t;
								};
							}
							var n = this,
								t = (n._util = {});
							(t.elements = []),
								(t.destroyed = !0),
								(n.options = e || {}),
								(n.options.error = n.options.error || !1),
								(n.options.offset = n.options.offset || 100),
								(n.options.root = n.options.root || document),
								(n.options.success = n.options.success || !1),
								(n.options.selector = n.options.selector || '.b-lazy'),
								(n.options.separator = n.options.separator || '|'),
								(n.options.containerClass = n.options.container),
								(n.options.container =
									!!n.options.containerClass &&
									document.querySelectorAll(n.options.containerClass)),
								(n.options.errorClass = n.options.errorClass || 'b-error'),
								(n.options.breakpoints = n.options.breakpoints || !1),
								(n.options.loadInvisible = n.options.loadInvisible || !1),
								(n.options.successClass = n.options.successClass || 'b-loaded'),
								(n.options.unloadOutOfViewport =
									n.options.unloadOutOfViewport || !1),
								(n.options.validateDelay = n.options.validateDelay || 25),
								(n.options.saveViewportOffsetDelay =
									n.options.saveViewportOffsetDelay || 50),
								(n.options.srcset = n.options.srcset || 'data-srcset'),
								(n.options.src = f = n.options.src || 'data-src'),
								(d = Element.prototype.closest),
								(p = 1 < window.devicePixelRatio),
								((l = {}).top = 0 - n.options.offset),
								(l.left = 0 - n.options.offset),
								(n.revalidate = function () {
									o(n);
								}),
								(n.load = function (e, t) {
									var n = this.options;
									e && void 0 === e.length
										? a(e, t, n)
										: S(e, function (e) {
												a(e, t, n);
										  });
								}),
								(n.destroy = function () {
									var t = n._util;
									n.options.container &&
										S(n.options.container, function (e) {
											x(e, 'scroll', t.validateT);
										}),
										x(window, 'scroll', t.validateT),
										x(window, 'resize', t.validateT),
										x(window, 'resize', t.saveViewportOffsetT),
										(t.count = 0),
										(t.elements.length = 0),
										(t.destroyed = !0);
								}),
								(t.validateT = k(
									function () {
										r(n);
									},
									n.options.validateDelay,
									n
								)),
								(t.saveViewportOffsetT = k(
									function () {
										_(n.options.offset);
									},
									n.options.saveViewportOffsetDelay,
									n
								)),
								_(n.options.offset),
								S(n.options.breakpoints, function (e) {
									if (e.width >= window.screen.width) return (f = e.src), !1;
								}),
								setTimeout(function () {
									o(n);
								});
						};
						function o(e) {
							var t = e._util;
							(t.elements = (function (e) {
								for (
									var t = [],
										n = e.root.querySelectorAll(e.selector),
										o = n.length;
									o--;
									t.unshift(n[o])
								);
								return t;
							})(e.options)),
								(t.count = t.elements.length),
								t.destroyed &&
									((t.destroyed = !1),
									e.options.container &&
										S(e.options.container, function (e) {
											T(e, 'scroll', t.validateT);
										}),
									T(window, 'resize', t.saveViewportOffsetT),
									T(window, 'resize', t.validateT),
									T(window, 'scroll', t.validateT)),
								r(e);
						}
						function r(e) {
							for (var t = e._util, n = 0; n < t.count; n++) {
								var o = t.elements[n];
								(i(o, e.options) || A(o, e.options.successClass)) &&
									(e.load(o),
									!1 === e.options.unloadOutOfViewport &&
										(t.elements.splice(n, 1), t.count--, n--));
							}
							0 === t.count && e.destroy();
						}
						function i(e, t) {
							var n = e.getBoundingClientRect();
							if (t.container && d) {
								var o = e.closest(t.containerClass);
								if (o) {
									var r = o.getBoundingClientRect();
									if (c(r, l)) {
										var i = r.top - t.offset,
											a = r.right + t.offset,
											s = r.bottom + t.offset,
											u = r.left - t.offset;
										return c(n, {
											top: i > l.top ? i : l.top,
											right: a < l.right ? a : l.right,
											bottom: s < l.bottom ? s : l.bottom,
											left: u > l.left ? u : l.left,
										});
									}
									return;
								}
							}
							return c(n, l);
						}
						function c(e, t) {
							return (
								e.right >= t.left &&
								e.bottom >= t.top &&
								e.left <= t.right &&
								e.top <= t.bottom
							);
						}
						function a(t, e, n) {
							if (
								!A(t, n.successClass) &&
								(e ||
									n.loadInvisible ||
									(0 < t.offsetWidth && 0 < t.offsetHeight))
							)
								if (!1 === n.unloadOutOfViewport) {
									var o = g(t, f) || g(t, n.src);
									if (o) {
										var r = o.split(n.separator),
											i = r[p && 1 < r.length ? 1 : 0],
											a = g(t, n.srcset),
											s = w(t, 'img'),
											u = t.parentNode,
											l = u && w(u, 'picture');
										if (s || void 0 === t.src) {
											var d = new Image(),
												c = function e() {
													n.error && n.error(t, 'invalid'),
														b(t, n.errorClass),
														x(d, 'error', e),
														x(d, 'load', _);
												},
												_ = function e() {
													s
														? l || y(t, i, a)
														: (t.style.backgroundImage = 'url("' + i + '")'),
														v(t, n),
														x(d, 'load', e),
														x(d, 'error', c);
												};
											l &&
												((d = t),
												S(u.getElementsByTagName('source'), function (e) {
													h(e, m, n.srcset);
												})),
												T(d, 'error', c),
												T(d, 'load', _),
												y(d, i, a);
										} else (t.src = i), v(t, n);
									} else
										w(t, 'video')
											? (S(t.getElementsByTagName('source'), function (e) {
													h(e, 'src', n.src);
											  }),
											  t.load(),
											  v(t, n))
											: (n.error && n.error(t, 'missing'), b(t, n.errorClass));
								} else b(t, n.errorClass);
						}
						function v(t, e) {
							b(t, e.successClass),
								e.success && e.success(t),
								u(t, e.src),
								u(t, e.srcset),
								S(e.breakpoints, function (e) {
									u(t, e.src);
								});
						}
						function h(e, t, n) {
							var o = g(e, n);
							o && (s(e, t, o), u(e, n));
						}
						function y(e, t, n) {
							n && s(e, m, n), (e.src = t);
						}
						function s(e, t, n) {
							e.setAttribute(t, n);
						}
						function g(e, t) {
							return e.getAttribute(t);
						}
						function u(e, t) {
							e.removeAttribute(t);
						}
						function w(e, t) {
							return e.nodeName.toLowerCase() === t;
						}
						function A(e, t) {
							return -1 !== (' ' + e.className + ' ').indexOf(' ' + t + ' ');
						}
						function b(e, t) {
							A(e, t) || (e.className += ' ' + t);
						}
						function _(e) {
							(l.bottom =
								(window.innerHeight || document.documentElement.clientHeight) +
								e),
								(l.right =
									(window.innerWidth || document.documentElement.clientWidth) +
									e);
						}
						function T(e, t, n) {
							e.attachEvent
								? e.attachEvent && e.attachEvent('on' + t, n)
								: e.addEventListener(t, n, { capture: !1, passive: !0 });
						}
						function x(e, t, n) {
							e.detachEvent
								? e.detachEvent && e.detachEvent('on' + t, n)
								: e.removeEventListener(t, n, { capture: !1, passive: !0 });
						}
						function S(e, t) {
							if (e && t)
								for (var n = e.length, o = 0; o < n && !1 !== t(e[o], o); o++);
						}
						function k(t, n, o) {
							var r = 0;
							return function () {
								var e = +new Date();
								e - r < n || ((r = e), t.apply(o, arguments));
							};
						}
					}),
					'function' == typeof define && define.amd
						? define(r)
						: 'object' === (void 0 === n ? 'undefined' : i(n))
						? (t.exports = r())
						: (o.Blazy = r());
			},
			{},
		],
		3: [
			function (e, t, n) {
				'use strict';
				var o;
				(o = e('visibilityjs')),
					(t.exports = function (e) {
						o.change(function () {
							o.hidden() ? e.muteAll(!0) : e.isMuted() || e.muteAll(!1);
						});
					});
			},
			{ visibilityjs: 12 },
		],
		4: [
			function (e, t, n) {
				'use strict';
				function i() {
					(y = ''), (g = []);
				}
				function a(e) {
					v.value = e;
				}
				function s(e) {
					a((y = e));
				}
				function u(e, t) {
					g.push([e, t]), s('');
				}
				function l() {
					a('58008');
				}
				function d(e, t) {
					return e + t;
				}
				function c(e, t) {
					return e - t;
				}
				function _(e, t) {
					return e / t;
				}
				function f(e, t) {
					return e * t;
				}
				function o(e) {
					8 === (e.charCode || e.keyCode) &&
						0 < y.length &&
						s(y.substr(0, y.length - 1));
				}
				function r(e, t) {
					var n = parseInt(y, 10);
					if (
						(clearTimeout(h),
						isNaN(e) || s(y + parseInt(e, 10)),
						13 === t || '=' === e)
					) {
						for (var o = n, r = 0; r < g.length; r++)
							o = (0, g[r][0])(g[r][1], o);
						s('' + o), (g = []), (h = setTimeout(l, 1500));
					} else
						'C' === e
							? (i(), a(''))
							: '-' === e
							? u(c, n)
							: '+' === e
							? u(d, n)
							: '/' === e
							? u(_, n)
							: '*' === e && u(f, n);
				}
				function p(e) {
					var t = e.charCode || e.keyCode;
					r(String.fromCharCode(t), t);
				}
				function m(e) {
					var t = e.target.textContent;
					'π' === t
						? (i(), a('DELICIOUS'))
						: 'sin' === t
						? (i(), a('NAUGHTY!'))
						: 'cos' === t
						? (i(), a('JUST COS'))
						: 'tan' === t
						? (i(), a('IN THE SUN'))
						: r(t, null);
				}
				var v, h, y, g;
				(y = ''),
					(g = []),
					(t.exports = function (e) {
						var t = document.getElementsByClassName('keypad')[0];
						(v = e),
							document.addEventListener('keypress', p),
							document.addEventListener('keyup', o),
							t.addEventListener('click', m),
							a('5318008');
					});
			},
			{},
		],
		5: [
			function (e, t, n) {
				'use strict';
				function m(e, t) {
					var n =
							window.innerWidth ||
							document.documentElement.clientWidth ||
							document.body.clientWidth,
						o = y < n;
					if (o) {
						if (h.getAttribute('src') !== e) {
							document
								.querySelectorAll('.js-catscape-loading')[0]
								.classList.add('animation'),
								h.setAttribute('src', e),
								t
									? h.setAttribute(
											'sandbox',
											'allow-same-origin allow-scripts allow-forms'
									  )
									: h.removeAttribute('sandbox');
							var r = e,
								i = e.lastIndexOf('http');
							0 < i && (r = r.substring(i));
							var a = new RegExp('http://(.+?)/', 'gi');
							(r = r.replace(a, 'http://www.geocities.com/')),
								(document.querySelectorAll('.js-iframe-navbar')[0].innerHTML =
									r);
							var s = 'Wayback Machine';
							-1 !== e.indexOf('oocities')
								? (s = 'OoCities')
								: -1 !== e.indexOf('reocities') && (s = 'ReoCities'),
								(document.querySelectorAll('.js-iframe-source')[0].innerHTML =
									'Archived by ' + s),
								document
									.querySelectorAll('.js-iframe-source')[0]
									.setAttribute('href', e);
						}
						document
							.getElementsByTagName('body')[0]
							.classList.add('modal-open'),
							document
								.querySelectorAll('.l-iframe-browser')[0]
								.classList.remove('hidden');
					}
					return o;
				}
				var v, h, y, g;
				(v = new (e('events').EventEmitter)()),
					(h = null),
					(y = 0),
					(g = [
						'http://www.oocities.org/meowser18/imeowcity.html',
						'http://web.archive.org/web/20091026213650/http://geocities.com/gretlbug5/',
						'http://www.oocities.org/erinsplace/shadow.html',
						'http://www.oocities.org/cat5999/page2.html',
						'http://www.oocities.org/heartland/estates/3879/',
						'http://www.oocities.org/texaspepper46/page4.html',
						'http://www.oocities.org/petsburgh/7233/',
						'http://web.archive.org/web/20091027070408/http://geocities.com/Paris/Cafe/1809/',
					]),
					(t.exports = {
						init: function (e) {
							void 0 !== e && (y = e);
							var t = document.querySelectorAll('a'),
								n = /(oocities|reocities|archive)/;
							(h = document.querySelectorAll('.js-iframe')[0]).onload =
								function () {
									document
										.querySelectorAll('.js-catscape-loading')[0]
										.classList.remove('animation');
								};
							for (
								var o = function (e) {
										var t =
											null !== e.currentTarget.getAttribute('data-has-sound');
										m(e.currentTarget.getAttribute('href'), !t) &&
											(t && v.emit('sound'), e.preventDefault());
									},
									r = 0;
								r < t.length;
								r++
							) {
								var i = t[r].getAttribute('href');
								i && i.match(n) && t[r].addEventListener('click', o);
							}
							for (
								var a = function (e) {
										var t = e.currentTarget.getAttribute('data-close');
										document
											.querySelectorAll('.' + t)[0]
											.classList.add('hidden');
									},
									s = function (e) {
										var t = e.currentTarget.getAttribute('data-close');
										document
											.querySelectorAll('.' + t)[0]
											.classList.add('hidden'),
											document
												.getElementsByTagName('body')[0]
												.classList.remove('modal-open'),
											h.setAttribute('src', ''),
											v.emit('close');
									},
									u = function (e) {
										var t = e.currentTarget.getAttribute('data-open');
										document
											.querySelectorAll('.' + t)[0]
											.classList.remove('hidden');
									},
									l = document.querySelectorAll('.js-close-dialogue'),
									d = 0;
								d < l.length;
								d++
							)
								l[d].addEventListener('click', a);
							for (
								var c = document.querySelectorAll('.js-close-modal'), _ = 0;
								_ < c.length;
								_++
							)
								c[_].addEventListener('click', s);
							for (
								var f = document.querySelectorAll('.js-open-dialogue'), p = 0;
								p < f.length;
								p++
							)
								f[p].addEventListener('click', u);
							document
								.querySelectorAll('.js-open-cat')[0]
								.addEventListener('click', function () {
									var e;
									m(((e = Math.floor(Math.random() * g.length)), g[e]));
								});
						},
						on: function (e, t) {
							v.on(e, t);
						},
					});
			},
			{ events: 10 },
		],
		6: [
			function (e, t, n) {
				'use strict';
				t.exports = function (e) {
					var t = document.querySelector(e);
					if (null !== t) {
						for (var n = t.cloneNode(!0), o = n.children.length + 1; o--; )
							n.appendChild(n.children[(Math.random() * o) | 0]);
						t.parentNode.replaceChild(n, t);
					}
				};
			},
			{},
		],
		7: [
			function (e, t, n) {
				'use strict';
				function u(e, t) {
					for (
						var n = ['webm', 'mp3', 'm4a', 'ac3', 'ogg'], o = [], r = 0;
						r < n.length;
						r++
					)
						o.push(e + t + '.' + n[r]);
					return o;
				}
				function l(e, t, n) {
					var o = u(e, t);
					p.play(o, n);
				}
				function d(t, e) {
					for (
						var n = document.querySelectorAll('a[data-audio]'),
							o = function (e) {
								t
									? ((e.className = e.className.replace(/ is-active/g, '')),
									  (e.className = e.className + ' is-inactive'))
									: ((e.className = e.className.replace(/ is-inactive/g, '')),
									  (e.className = e.className + ' is-active'));
							},
							r = 0;
						r < n.length;
						r++
					) {
						var i = n[r];
						(i.className = i.className.replace(/ is-active/g, '')),
							(i.className = i.className + ' is-inactive'),
							i.getAttribute('data-audio') === e && o(i);
					}
					o(document.getElementsByClassName('btn-audio')[0]);
				}
				function c(e) {
					p.fade(1, 500);
				}
				function o(e) {
					for (
						var t,
							n = e.currentTarget,
							o = 'true' === n.getAttribute('data-mute-control'),
							r = 'true' === n.getAttribute('data-loop'),
							i = n.getAttribute('data-audio'),
							a = u(f, i),
							s = 0;
						s < _.length;
						s++
					)
						(t = _[s].parentElement).className = t.className.replace(
							'is-active',
							''
						);
					o && p.isPlaying()
						? p.isMuted()
							? (p.muteAll(!1), p.mute(!1))
							: p.mute(!0)
						: !1 == r
						? (p.fade(0.2, 500), m.play(a, !1), m.on('end', c))
						: (l(f, i, r), (n.parentElement.className += ' is-active')),
						d(p.isMuted(), i);
				}
				var _, f, p, m, r, i;
				(p = e('./soundplayer.js')()),
					(m = e('./soundplayer.js')()),
					(r = new (e('events').EventEmitter)()),
					(i = {
						init: function (e, t) {
							(f = e), (_ = document.querySelectorAll('a[data-audio]'));
							for (var n = 0; n < _.length; n++)
								_[n].addEventListener('click', o);
							p.on('playing', function () {
								d(!1, null), r.emit('playing', !0);
							}),
								p.on('playerror', function () {
									d(!0, null);
								}),
								d(!0, t),
								l(e, t, !0);
						},
						isMuted: function () {
							return p.isMuted();
						},
						pause: function () {
							p.pause();
						},
						resume: function () {
							p.resume();
						},
						stop: function () {
							p.pause();
						},
						start: function () {
							p.resume();
						},
						muteAll: function (e) {
							p.muteAll(e);
						},
						on: function (e, t) {
							r.on(e, t);
						},
					}),
					(t.exports = i);
			},
			{ './soundplayer.js': 8, events: 10 },
		],
		8: [
			function (e, t, n) {
				'use strict';
				var s, u;
				(s = e('howler').Howl),
					(u = e('howler').Howler),
					(t.exports = function () {
						var o,
							n = new (e('events').EventEmitter)();
						function r() {
							n.emit('playing');
						}
						function i() {
							n.emit('end');
						}
						function a() {
							n.emit('playerror');
						}
						return {
							play: function (e, t) {
								o && o.stop();
								var n = (o = new s({ src: e, loop: t })).play();
								o.on('end', i, n), o.on('play', r), o.on('playerror', a);
							},
							isPlayingFiles: function (e) {
								return !!o && o.playing(e);
							},
							isPlaying: function () {
								return o && o.playing();
							},
							isMuted: function () {
								return !!o && o._muted;
							},
							mute: function (e) {
								o && o.mute(e);
							},
							muteAll: function (e) {
								u.mute(e);
							},
							resume: function () {
								o && !o.playing() && o.play();
							},
							pause: function () {
								o && o.pause();
							},
							fade: function (e, t) {
								o && o.fade(o.volume(), e, t);
							},
							volume: function (e) {
								o && o.volume(e);
							},
							on: function (e, t) {
								n.on(e, t);
							},
						};
					});
			},
			{ events: 10, howler: 11 },
		],
		9: [
			function (e, t, n) {
				!(function (e) {
					void 0 !== t
						? (t.exports = e())
						: 'function' == typeof define && 'object' == typeof define.amd
						? define(e)
						: (this.domready = e());
				})(function () {
					var e,
						t = [],
						n = document,
						o = n.documentElement.doScroll,
						r = 'DOMContentLoaded',
						i = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);
					return (
						i ||
							n.addEventListener(
								r,
								(e = function () {
									for (n.removeEventListener(r, e), i = 1; (e = t.shift()); )
										e();
								})
							),
						function (e) {
							i ? setTimeout(e, 0) : t.push(e);
						}
					);
				});
			},
			{},
		],
		10: [
			function (e, t, n) {
				var u =
						Object.create ||
						function (e) {
							function t() {}
							return (t.prototype = e), new t();
						},
					a =
						Object.keys ||
						function (e) {
							var t = [];
							for (var n in e)
								Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
							return n;
						},
					i =
						Function.prototype.bind ||
						function (e) {
							var t = this;
							return function () {
								return t.apply(e, arguments);
							};
						};
				function o() {
					(this._events &&
						Object.prototype.hasOwnProperty.call(this, '_events')) ||
						((this._events = u(null)), (this._eventsCount = 0)),
						(this._maxListeners = this._maxListeners || void 0);
				}
				(((t.exports = o).EventEmitter = o).prototype._events = void 0),
					(o.prototype._maxListeners = void 0);
				var r,
					s = 10;
				try {
					var l = {};
					Object.defineProperty && Object.defineProperty(l, 'x', { value: 0 }),
						(r = 0 === l.x);
				} catch (e) {
					r = !1;
				}
				function d(e) {
					return void 0 === e._maxListeners
						? o.defaultMaxListeners
						: e._maxListeners;
				}
				function c(e, t, n, o) {
					var r, i, a;
					if ('function' != typeof n)
						throw new TypeError('"listener" argument must be a function');
					if (
						((i = e._events)
							? (i.newListener &&
									(e.emit('newListener', t, n.listener ? n.listener : n),
									(i = e._events)),
							  (a = i[t]))
							: ((i = e._events = u(null)), (e._eventsCount = 0)),
						a)
					) {
						if (
							('function' == typeof a
								? (a = i[t] = o ? [n, a] : [a, n])
								: o
								? a.unshift(n)
								: a.push(n),
							!a.warned && (r = d(e)) && 0 < r && a.length > r)
						) {
							a.warned = !0;
							var s = new Error(
								'Possible EventEmitter memory leak detected. ' +
									a.length +
									' "' +
									String(t) +
									'" listeners added. Use emitter.setMaxListeners() to increase limit.'
							);
							(s.name = 'MaxListenersExceededWarning'),
								(s.emitter = e),
								(s.type = t),
								(s.count = a.length),
								'object' == typeof console &&
									console.warn &&
									console.warn('%s: %s', s.name, s.message);
						}
					} else (a = i[t] = n), ++e._eventsCount;
					return e;
				}
				function _() {
					if (!this.fired)
						switch (
							(this.target.removeListener(this.type, this.wrapFn),
							(this.fired = !0),
							arguments.length)
						) {
							case 0:
								return this.listener.call(this.target);
							case 1:
								return this.listener.call(this.target, arguments[0]);
							case 2:
								return this.listener.call(
									this.target,
									arguments[0],
									arguments[1]
								);
							case 3:
								return this.listener.call(
									this.target,
									arguments[0],
									arguments[1],
									arguments[2]
								);
							default:
								for (
									var e = new Array(arguments.length), t = 0;
									t < e.length;
									++t
								)
									e[t] = arguments[t];
								this.listener.apply(this.target, e);
						}
				}
				function f(e, t, n) {
					var o = {
							fired: !1,
							wrapFn: void 0,
							target: e,
							type: t,
							listener: n,
						},
						r = i.call(_, o);
					return (r.listener = n), (o.wrapFn = r);
				}
				function p(e, t, n) {
					var o = e._events;
					if (!o) return [];
					var r = o[t];
					return r
						? 'function' == typeof r
							? n
								? [r.listener || r]
								: [r]
							: n
							? (function (e) {
									for (var t = new Array(e.length), n = 0; n < t.length; ++n)
										t[n] = e[n].listener || e[n];
									return t;
							  })(r)
							: v(r, r.length)
						: [];
				}
				function m(e) {
					var t = this._events;
					if (t) {
						var n = t[e];
						if ('function' == typeof n) return 1;
						if (n) return n.length;
					}
					return 0;
				}
				function v(e, t) {
					for (var n = new Array(t), o = 0; o < t; ++o) n[o] = e[o];
					return n;
				}
				r
					? Object.defineProperty(o, 'defaultMaxListeners', {
							enumerable: !0,
							get: function () {
								return s;
							},
							set: function (e) {
								if ('number' != typeof e || e < 0 || e != e)
									throw new TypeError(
										'"defaultMaxListeners" must be a positive number'
									);
								s = e;
							},
					  })
					: (o.defaultMaxListeners = s),
					(o.prototype.setMaxListeners = function (e) {
						if ('number' != typeof e || e < 0 || isNaN(e))
							throw new TypeError('"n" argument must be a positive number');
						return (this._maxListeners = e), this;
					}),
					(o.prototype.getMaxListeners = function () {
						return d(this);
					}),
					(o.prototype.emit = function (e, t, n, o) {
						var r,
							i,
							a,
							s,
							u,
							l,
							d = 'error' === e;
						if ((l = this._events)) d = d && null == l.error;
						else if (!d) return !1;
						if (d) {
							if ((1 < arguments.length && (r = t), r instanceof Error))
								throw r;
							var c = new Error('Unhandled "error" event. (' + r + ')');
							throw ((c.context = r), c);
						}
						if (!(i = l[e])) return !1;
						var _ = 'function' == typeof i;
						switch ((a = arguments.length)) {
							case 1:
								!(function (e, t, n) {
									if (t) e.call(n);
									else
										for (var o = e.length, r = v(e, o), i = 0; i < o; ++i)
											r[i].call(n);
								})(i, _, this);
								break;
							case 2:
								!(function (e, t, n, o) {
									if (t) e.call(n, o);
									else
										for (var r = e.length, i = v(e, r), a = 0; a < r; ++a)
											i[a].call(n, o);
								})(i, _, this, t);
								break;
							case 3:
								!(function (e, t, n, o, r) {
									if (t) e.call(n, o, r);
									else
										for (var i = e.length, a = v(e, i), s = 0; s < i; ++s)
											a[s].call(n, o, r);
								})(i, _, this, t, n);
								break;
							case 4:
								!(function (e, t, n, o, r, i) {
									if (t) e.call(n, o, r, i);
									else
										for (var a = e.length, s = v(e, a), u = 0; u < a; ++u)
											s[u].call(n, o, r, i);
								})(i, _, this, t, n, o);
								break;
							default:
								for (s = new Array(a - 1), u = 1; u < a; u++)
									s[u - 1] = arguments[u];
								!(function (e, t, n, o) {
									if (t) e.apply(n, o);
									else
										for (var r = e.length, i = v(e, r), a = 0; a < r; ++a)
											i[a].apply(n, o);
								})(i, _, this, s);
						}
						return !0;
					}),
					(o.prototype.on = o.prototype.addListener =
						function (e, t) {
							return c(this, e, t, !1);
						}),
					(o.prototype.prependListener = function (e, t) {
						return c(this, e, t, !0);
					}),
					(o.prototype.once = function (e, t) {
						if ('function' != typeof t)
							throw new TypeError('"listener" argument must be a function');
						return this.on(e, f(this, e, t)), this;
					}),
					(o.prototype.prependOnceListener = function (e, t) {
						if ('function' != typeof t)
							throw new TypeError('"listener" argument must be a function');
						return this.prependListener(e, f(this, e, t)), this;
					}),
					(o.prototype.removeListener = function (e, t) {
						var n, o, r, i, a;
						if ('function' != typeof t)
							throw new TypeError('"listener" argument must be a function');
						if (!(o = this._events)) return this;
						if (!(n = o[e])) return this;
						if (n === t || n.listener === t)
							0 == --this._eventsCount
								? (this._events = u(null))
								: (delete o[e],
								  o.removeListener &&
										this.emit('removeListener', e, n.listener || t));
						else if ('function' != typeof n) {
							for (r = -1, i = n.length - 1; 0 <= i; i--)
								if (n[i] === t || n[i].listener === t) {
									(a = n[i].listener), (r = i);
									break;
								}
							if (r < 0) return this;
							0 === r
								? n.shift()
								: (function (e, t) {
										for (
											var n = t, o = n + 1, r = e.length;
											o < r;
											n += 1, o += 1
										)
											e[n] = e[o];
										e.pop();
								  })(n, r),
								1 === n.length && (o[e] = n[0]),
								o.removeListener && this.emit('removeListener', e, a || t);
						}
						return this;
					}),
					(o.prototype.removeAllListeners = function (e) {
						var t, n, o;
						if (!(n = this._events)) return this;
						if (!n.removeListener)
							return (
								0 === arguments.length
									? ((this._events = u(null)), (this._eventsCount = 0))
									: n[e] &&
									  (0 == --this._eventsCount
											? (this._events = u(null))
											: delete n[e]),
								this
							);
						if (0 === arguments.length) {
							var r,
								i = a(n);
							for (o = 0; o < i.length; ++o)
								'removeListener' !== (r = i[o]) && this.removeAllListeners(r);
							return (
								this.removeAllListeners('removeListener'),
								(this._events = u(null)),
								(this._eventsCount = 0),
								this
							);
						}
						if ('function' == typeof (t = n[e])) this.removeListener(e, t);
						else if (t)
							for (o = t.length - 1; 0 <= o; o--) this.removeListener(e, t[o]);
						return this;
					}),
					(o.prototype.listeners = function (e) {
						return p(this, e, !0);
					}),
					(o.prototype.rawListeners = function (e) {
						return p(this, e, !1);
					}),
					(o.listenerCount = function (e, t) {
						return 'function' == typeof e.listenerCount
							? e.listenerCount(t)
							: m.call(e, t);
					}),
					(o.prototype.listenerCount = m),
					(o.prototype.eventNames = function () {
						return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : [];
					});
			},
			{},
		],
		11: [
			function (e, t, o) {
				(function (n) {
					!(function () {
						'use strict';
						function e() {
							this.init();
						}
						e.prototype = {
							init: function () {
								var e = this || g;
								return (
									(e._counter = 1e3),
									(e._html5AudioPool = []),
									(e.html5PoolSize = 10),
									(e._codecs = {}),
									(e._howls = []),
									(e._muted = !1),
									(e._volume = 1),
									(e._canPlayEvent = 'canplaythrough'),
									(e._navigator =
										'undefined' != typeof window && window.navigator
											? window.navigator
											: null),
									(e.masterGain = null),
									(e.noAudio = !1),
									(e.usingWebAudio = !0),
									(e.autoSuspend = !0),
									(e.ctx = null),
									(e.autoUnlock = !0),
									e._setup(),
									e
								);
							},
							volume: function (e) {
								var t = this || g;
								if (
									((e = parseFloat(e)),
									t.ctx || c(),
									void 0 !== e && 0 <= e && e <= 1)
								) {
									if (((t._volume = e), t._muted)) return t;
									t.usingWebAudio &&
										t.masterGain.gain.setValueAtTime(e, g.ctx.currentTime);
									for (var n = 0; n < t._howls.length; n++)
										if (!t._howls[n]._webAudio)
											for (
												var o = t._howls[n]._getSoundIds(), r = 0;
												r < o.length;
												r++
											) {
												var i = t._howls[n]._soundById(o[r]);
												i && i._node && (i._node.volume = i._volume * e);
											}
									return t;
								}
								return t._volume;
							},
							mute: function (e) {
								var t = this || g;
								t.ctx || c(),
									(t._muted = e),
									t.usingWebAudio &&
										t.masterGain.gain.setValueAtTime(
											e ? 0 : t._volume,
											g.ctx.currentTime
										);
								for (var n = 0; n < t._howls.length; n++)
									if (!t._howls[n]._webAudio)
										for (
											var o = t._howls[n]._getSoundIds(), r = 0;
											r < o.length;
											r++
										) {
											var i = t._howls[n]._soundById(o[r]);
											i && i._node && (i._node.muted = !!e || i._muted);
										}
								return t;
							},
							unload: function () {
								for (var e = this || g, t = e._howls.length - 1; 0 <= t; t--)
									e._howls[t].unload();
								return (
									e.usingWebAudio &&
										e.ctx &&
										void 0 !== e.ctx.close &&
										(e.ctx.close(), (e.ctx = null), c()),
									e
								);
							},
							codecs: function (e) {
								return (this || g)._codecs[e.replace(/^x-/, '')];
							},
							_setup: function () {
								var t = this || g;
								if (
									((t.state = (t.ctx && t.ctx.state) || 'suspended'),
									t._autoSuspend(),
									!t.usingWebAudio)
								)
									if ('undefined' != typeof Audio)
										try {
											void 0 === new Audio().oncanplaythrough &&
												(t._canPlayEvent = 'canplay');
										} catch (e) {
											t.noAudio = !0;
										}
									else t.noAudio = !0;
								try {
									new Audio().muted && (t.noAudio = !0);
								} catch (e) {}
								return t.noAudio || t._setupCodecs(), t;
							},
							_setupCodecs: function () {
								var t = this || g,
									e = null;
								try {
									e = 'undefined' != typeof Audio ? new Audio() : null;
								} catch (e) {
									return t;
								}
								if (!e || 'function' != typeof e.canPlayType) return t;
								var n = e.canPlayType('audio/mpeg;').replace(/^no$/, ''),
									o =
										t._navigator &&
										t._navigator.userAgent.match(/OPR\/([0-6].)/g),
									r = o && parseInt(o[0].split('/')[1], 10) < 33;
								return (
									(t._codecs = {
										mp3: !(
											r ||
											(!n && !e.canPlayType('audio/mp3;').replace(/^no$/, ''))
										),
										mpeg: !!n,
										opus: !!e
											.canPlayType('audio/ogg; codecs="opus"')
											.replace(/^no$/, ''),
										ogg: !!e
											.canPlayType('audio/ogg; codecs="vorbis"')
											.replace(/^no$/, ''),
										oga: !!e
											.canPlayType('audio/ogg; codecs="vorbis"')
											.replace(/^no$/, ''),
										wav: !!e
											.canPlayType('audio/wav; codecs="1"')
											.replace(/^no$/, ''),
										aac: !!e.canPlayType('audio/aac;').replace(/^no$/, ''),
										caf: !!e.canPlayType('audio/x-caf;').replace(/^no$/, ''),
										m4a: !!(
											e.canPlayType('audio/x-m4a;') ||
											e.canPlayType('audio/m4a;') ||
											e.canPlayType('audio/aac;')
										).replace(/^no$/, ''),
										mp4: !!(
											e.canPlayType('audio/x-mp4;') ||
											e.canPlayType('audio/mp4;') ||
											e.canPlayType('audio/aac;')
										).replace(/^no$/, ''),
										weba: !!e
											.canPlayType('audio/webm; codecs="vorbis"')
											.replace(/^no$/, ''),
										webm: !!e
											.canPlayType('audio/webm; codecs="vorbis"')
											.replace(/^no$/, ''),
										dolby: !!e
											.canPlayType('audio/mp4; codecs="ec-3"')
											.replace(/^no$/, ''),
										flac: !!(
											e.canPlayType('audio/x-flac;') ||
											e.canPlayType('audio/flac;')
										).replace(/^no$/, ''),
									}),
									t
								);
							},
							_unlockAudio: function () {
								var s = this || g;
								if (!s._audioUnlocked && s.ctx) {
									(s._audioUnlocked = !1),
										(s.autoUnlock = !1),
										s._mobileUnloaded ||
											44100 === s.ctx.sampleRate ||
											((s._mobileUnloaded = !0), s.unload()),
										(s._scratchBuffer = s.ctx.createBuffer(1, 1, 22050));
									var u = function (e) {
										for (var t = 0; t < s.html5PoolSize; t++)
											try {
												var n = new Audio();
												(n._unlocked = !0), s._releaseHtml5Audio(n);
											} catch (e) {
												s.noAudio = !0;
											}
										for (t = 0; t < s._howls.length; t++)
											if (!s._howls[t]._webAudio)
												for (
													var o = s._howls[t]._getSoundIds(), r = 0;
													r < o.length;
													r++
												) {
													var i = s._howls[t]._soundById(o[r]);
													i &&
														i._node &&
														!i._node._unlocked &&
														((i._node._unlocked = !0), i._node.load());
												}
										s._autoResume();
										var a = s.ctx.createBufferSource();
										(a.buffer = s._scratchBuffer),
											a.connect(s.ctx.destination),
											void 0 === a.start ? a.noteOn(0) : a.start(0),
											'function' == typeof s.ctx.resume && s.ctx.resume(),
											(a.onended = function () {
												a.disconnect(0),
													(s._audioUnlocked = !0),
													document.removeEventListener('touchstart', u, !0),
													document.removeEventListener('touchend', u, !0),
													document.removeEventListener('click', u, !0);
												for (var e = 0; e < s._howls.length; e++)
													s._howls[e]._emit('unlock');
											});
									};
									return (
										document.addEventListener('touchstart', u, !0),
										document.addEventListener('touchend', u, !0),
										document.addEventListener('click', u, !0),
										s
									);
								}
							},
							_obtainHtml5Audio: function () {
								var e = this || g;
								if (e._html5AudioPool.length) return e._html5AudioPool.pop();
								var t = new Audio().play();
								return (
									t &&
										'undefined' != typeof Promise &&
										(t instanceof Promise || 'function' == typeof t.then) &&
										t.catch(function () {
											console.warn(
												'HTML5 Audio pool exhausted, returning potentially locked audio object.'
											);
										}),
									new Audio()
								);
							},
							_releaseHtml5Audio: function (e) {
								var t = this || g;
								return e._unlocked && t._html5AudioPool.push(e), t;
							},
							_autoSuspend: function () {
								var e = this;
								if (
									e.autoSuspend &&
									e.ctx &&
									void 0 !== e.ctx.suspend &&
									g.usingWebAudio
								) {
									for (var t = 0; t < e._howls.length; t++)
										if (e._howls[t]._webAudio)
											for (var n = 0; n < e._howls[t]._sounds.length; n++)
												if (!e._howls[t]._sounds[n]._paused) return e;
									return (
										e._suspendTimer && clearTimeout(e._suspendTimer),
										(e._suspendTimer = setTimeout(function () {
											e.autoSuspend &&
												((e._suspendTimer = null),
												(e.state = 'suspending'),
												e.ctx.suspend().then(function () {
													(e.state = 'suspended'),
														e._resumeAfterSuspend &&
															(delete e._resumeAfterSuspend, e._autoResume());
												}));
										}, 3e4)),
										e
									);
								}
							},
							_autoResume: function () {
								var t = this;
								if (t.ctx && void 0 !== t.ctx.resume && g.usingWebAudio)
									return (
										'running' === t.state && t._suspendTimer
											? (clearTimeout(t._suspendTimer),
											  (t._suspendTimer = null))
											: 'suspended' === t.state
											? (t.ctx.resume().then(function () {
													t.state = 'running';
													for (var e = 0; e < t._howls.length; e++)
														t._howls[e]._emit('resume');
											  }),
											  t._suspendTimer &&
													(clearTimeout(t._suspendTimer),
													(t._suspendTimer = null)))
											: 'suspending' === t.state &&
											  (t._resumeAfterSuspend = !0),
										t
									);
							},
						};
						function t(e) {
							e.src && 0 !== e.src.length
								? this.init(e)
								: console.error(
										'An array of source files must be passed with any new Howl.'
								  );
						}
						var g = new e();
						t.prototype = {
							init: function (e) {
								var t = this;
								return (
									g.ctx || c(),
									(t._autoplay = e.autoplay || !1),
									(t._format =
										'string' != typeof e.format ? e.format : [e.format]),
									(t._html5 = e.html5 || !1),
									(t._muted = e.mute || !1),
									(t._loop = e.loop || !1),
									(t._pool = e.pool || 5),
									(t._preload = 'boolean' != typeof e.preload || e.preload),
									(t._rate = e.rate || 1),
									(t._sprite = e.sprite || {}),
									(t._src = 'string' != typeof e.src ? e.src : [e.src]),
									(t._volume = void 0 !== e.volume ? e.volume : 1),
									(t._xhrWithCredentials = e.xhrWithCredentials || !1),
									(t._duration = 0),
									(t._state = 'unloaded'),
									(t._sounds = []),
									(t._endTimers = {}),
									(t._queue = []),
									(t._playLock = !1),
									(t._onend = e.onend ? [{ fn: e.onend }] : []),
									(t._onfade = e.onfade ? [{ fn: e.onfade }] : []),
									(t._onload = e.onload ? [{ fn: e.onload }] : []),
									(t._onloaderror = e.onloaderror
										? [{ fn: e.onloaderror }]
										: []),
									(t._onplayerror = e.onplayerror
										? [{ fn: e.onplayerror }]
										: []),
									(t._onpause = e.onpause ? [{ fn: e.onpause }] : []),
									(t._onplay = e.onplay ? [{ fn: e.onplay }] : []),
									(t._onstop = e.onstop ? [{ fn: e.onstop }] : []),
									(t._onmute = e.onmute ? [{ fn: e.onmute }] : []),
									(t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
									(t._onrate = e.onrate ? [{ fn: e.onrate }] : []),
									(t._onseek = e.onseek ? [{ fn: e.onseek }] : []),
									(t._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
									(t._onresume = []),
									(t._webAudio = g.usingWebAudio && !t._html5),
									void 0 !== g.ctx && g.ctx && g.autoUnlock && g._unlockAudio(),
									g._howls.push(t),
									t._autoplay &&
										t._queue.push({
											event: 'play',
											action: function () {
												t.play();
											},
										}),
									t._preload && t.load(),
									t
								);
							},
							load: function () {
								var e = this,
									t = null;
								if (g.noAudio) e._emit('loaderror', null, 'No audio support.');
								else {
									'string' == typeof e._src && (e._src = [e._src]);
									for (var n = 0; n < e._src.length; n++) {
										var o, r;
										if (e._format && e._format[n]) o = e._format[n];
										else {
											if ('string' != typeof (r = e._src[n])) {
												e._emit(
													'loaderror',
													null,
													'Non-string found in selected audio sources - ignoring.'
												);
												continue;
											}
											o =
												(o =
													(o = /^data:audio\/([^;,]+);/i.exec(r)) ||
													/\.([^.]+)$/.exec(r.split('?', 1)[0])) &&
												o[1].toLowerCase();
										}
										if (
											(o ||
												console.warn(
													'No file extension was found. Consider using the "format" property or specify an extension.'
												),
											o && g.codecs(o))
										) {
											t = e._src[n];
											break;
										}
									}
									if (t)
										return (
											(e._src = t),
											(e._state = 'loading'),
											'https:' === window.location.protocol &&
												'http:' === t.slice(0, 5) &&
												((e._html5 = !0), (e._webAudio = !1)),
											new i(e),
											e._webAudio && s(e),
											e
										);
									e._emit(
										'loaderror',
										null,
										'No codec support for selected audio sources.'
									);
								}
							},
							play: function (t, n) {
								var o = this,
									e = null;
								if ('number' == typeof t) (e = t), (t = null);
								else {
									if (
										'string' == typeof t &&
										'loaded' === o._state &&
										!o._sprite[t]
									)
										return null;
									if (void 0 === t && ((t = '__default'), !o._playLock)) {
										for (var r = 0, i = 0; i < o._sounds.length; i++)
											o._sounds[i]._paused &&
												!o._sounds[i]._ended &&
												(r++, (e = o._sounds[i]._id));
										1 === r ? (t = null) : (e = null);
									}
								}
								var a = e ? o._soundById(e) : o._inactiveSound();
								if (!a) return null;
								if (
									(e && !t && (t = a._sprite || '__default'),
									'loaded' !== o._state)
								) {
									(a._sprite = t), (a._ended = !1);
									var s = a._id;
									return (
										o._queue.push({
											event: 'play',
											action: function () {
												o.play(s);
											},
										}),
										s
									);
								}
								if (e && !a._paused) return n || o._loadQueue('play'), a._id;
								o._webAudio && g._autoResume();
								var u = Math.max(
										0,
										0 < a._seek ? a._seek : o._sprite[t][0] / 1e3
									),
									l = Math.max(
										0,
										(o._sprite[t][0] + o._sprite[t][1]) / 1e3 - u
									),
									d = (1e3 * l) / Math.abs(a._rate),
									c = o._sprite[t][0] / 1e3,
									_ = (o._sprite[t][0] + o._sprite[t][1]) / 1e3;
								(a._sprite = t), (a._ended = !1);
								function f() {
									(a._paused = !1),
										(a._seek = u),
										(a._start = c),
										(a._stop = _),
										(a._loop = !(!a._loop && !o._sprite[t][2]));
								}
								if (!(_ <= u)) {
									var p = a._node;
									if (o._webAudio) {
										var m = function () {
											(o._playLock = !1), f(), o._refreshBuffer(a);
											var e = a._muted || o._muted ? 0 : a._volume;
											p.gain.setValueAtTime(e, g.ctx.currentTime),
												(a._playStart = g.ctx.currentTime),
												void 0 === p.bufferSource.start
													? a._loop
														? p.bufferSource.noteGrainOn(0, u, 86400)
														: p.bufferSource.noteGrainOn(0, u, l)
													: a._loop
													? p.bufferSource.start(0, u, 86400)
													: p.bufferSource.start(0, u, l),
												d != 1 / 0 &&
													(o._endTimers[a._id] = setTimeout(
														o._ended.bind(o, a),
														d
													)),
												n ||
													setTimeout(function () {
														o._emit('play', a._id), o._loadQueue();
													}, 0);
										};
										'running' === g.state
											? m()
											: ((o._playLock = !0),
											  o.once('resume', m),
											  o._clearTimer(a._id));
									} else {
										var v = function () {
											(p.currentTime = u),
												(p.muted = a._muted || o._muted || g._muted || p.muted),
												(p.volume = a._volume * g.volume()),
												(p.playbackRate = a._rate);
											try {
												var e = p.play();
												if (
													(e &&
													'undefined' != typeof Promise &&
													(e instanceof Promise || 'function' == typeof e.then)
														? ((o._playLock = !0),
														  f(),
														  e
																.then(function () {
																	(o._playLock = !1),
																		(p._unlocked = !0),
																		n ||
																			(o._emit('play', a._id), o._loadQueue());
																})
																.catch(function () {
																	(o._playLock = !1),
																		o._emit(
																			'playerror',
																			a._id,
																			'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'
																		),
																		(a._ended = !0),
																		(a._paused = !0);
																}))
														: n ||
														  ((o._playLock = !1),
														  f(),
														  o._emit('play', a._id),
														  o._loadQueue()),
													(p.playbackRate = a._rate),
													p.paused)
												)
													return void o._emit(
														'playerror',
														a._id,
														'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'
													);
												'__default' !== t || a._loop
													? (o._endTimers[a._id] = setTimeout(
															o._ended.bind(o, a),
															d
													  ))
													: ((o._endTimers[a._id] = function () {
															o._ended(a),
																p.removeEventListener(
																	'ended',
																	o._endTimers[a._id],
																	!1
																);
													  }),
													  p.addEventListener(
															'ended',
															o._endTimers[a._id],
															!1
													  ));
											} catch (e) {
												o._emit('playerror', a._id, e);
											}
										};
										'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' ===
											p.src && ((p.src = o._src), p.load());
										var h =
											(window && window.ejecta) ||
											(!p.readyState && g._navigator.isCocoonJS);
										if (3 <= p.readyState || h) v();
										else {
											o._playLock = !0;
											var y = function () {
												v(), p.removeEventListener(g._canPlayEvent, y, !1);
											};
											p.addEventListener(g._canPlayEvent, y, !1),
												o._clearTimer(a._id);
										}
									}
									return a._id;
								}
								o._ended(a);
							},
							pause: function (e) {
								var t = this;
								if ('loaded' !== t._state || t._playLock)
									return (
										t._queue.push({
											event: 'pause',
											action: function () {
												t.pause(e);
											},
										}),
										t
									);
								for (var n = t._getSoundIds(e), o = 0; o < n.length; o++) {
									t._clearTimer(n[o]);
									var r = t._soundById(n[o]);
									if (
										r &&
										!r._paused &&
										((r._seek = t.seek(n[o])),
										(r._rateSeek = 0),
										(r._paused = !0),
										t._stopFade(n[o]),
										r._node)
									)
										if (t._webAudio) {
											if (!r._node.bufferSource) continue;
											void 0 === r._node.bufferSource.stop
												? r._node.bufferSource.noteOff(0)
												: r._node.bufferSource.stop(0),
												t._cleanBuffer(r._node);
										} else
											(isNaN(r._node.duration) && r._node.duration !== 1 / 0) ||
												r._node.pause();
									arguments[1] || t._emit('pause', r ? r._id : null);
								}
								return t;
							},
							stop: function (e, t) {
								var n = this;
								if ('loaded' !== n._state || n._playLock)
									return (
										n._queue.push({
											event: 'stop',
											action: function () {
												n.stop(e);
											},
										}),
										n
									);
								for (var o = n._getSoundIds(e), r = 0; r < o.length; r++) {
									n._clearTimer(o[r]);
									var i = n._soundById(o[r]);
									i &&
										((i._seek = i._start || 0),
										(i._rateSeek = 0),
										(i._paused = !0),
										(i._ended = !0),
										n._stopFade(o[r]),
										i._node &&
											(n._webAudio
												? i._node.bufferSource &&
												  (void 0 === i._node.bufferSource.stop
														? i._node.bufferSource.noteOff(0)
														: i._node.bufferSource.stop(0),
												  n._cleanBuffer(i._node))
												: (isNaN(i._node.duration) &&
														i._node.duration !== 1 / 0) ||
												  ((i._node.currentTime = i._start || 0),
												  i._node.pause(),
												  i._node.duration === 1 / 0 &&
														n._clearSound(i._node))),
										t || n._emit('stop', i._id));
								}
								return n;
							},
							mute: function (e, t) {
								var n = this;
								if ('loaded' !== n._state || n._playLock)
									return (
										n._queue.push({
											event: 'mute',
											action: function () {
												n.mute(e, t);
											},
										}),
										n
									);
								if (void 0 === t) {
									if ('boolean' != typeof e) return n._muted;
									n._muted = e;
								}
								for (var o = n._getSoundIds(t), r = 0; r < o.length; r++) {
									var i = n._soundById(o[r]);
									i &&
										((i._muted = e),
										i._interval && n._stopFade(i._id),
										n._webAudio && i._node
											? i._node.gain.setValueAtTime(
													e ? 0 : i._volume,
													g.ctx.currentTime
											  )
											: i._node && (i._node.muted = !!g._muted || e),
										n._emit('mute', i._id));
								}
								return n;
							},
							volume: function () {
								var e,
									t,
									n,
									o = this,
									r = arguments;
								if (0 === r.length) return o._volume;
								if (
									(1 === r.length || (2 === r.length && void 0 === r[1])
										? 0 <= o._getSoundIds().indexOf(r[0])
											? (t = parseInt(r[0], 10))
											: (e = parseFloat(r[0]))
										: 2 <= r.length &&
										  ((e = parseFloat(r[0])), (t = parseInt(r[1], 10))),
									!(void 0 !== e && 0 <= e && e <= 1))
								)
									return (n = t ? o._soundById(t) : o._sounds[0])
										? n._volume
										: 0;
								if ('loaded' !== o._state || o._playLock)
									return (
										o._queue.push({
											event: 'volume',
											action: function () {
												o.volume.apply(o, r);
											},
										}),
										o
									);
								void 0 === t && (o._volume = e), (t = o._getSoundIds(t));
								for (var i = 0; i < t.length; i++)
									(n = o._soundById(t[i])) &&
										((n._volume = e),
										r[2] || o._stopFade(t[i]),
										o._webAudio && n._node && !n._muted
											? n._node.gain.setValueAtTime(e, g.ctx.currentTime)
											: n._node &&
											  !n._muted &&
											  (n._node.volume = e * g.volume()),
										o._emit('volume', n._id));
								return o;
							},
							fade: function (e, t, n, o) {
								var r = this;
								if ('loaded' !== r._state || r._playLock)
									return (
										r._queue.push({
											event: 'fade',
											action: function () {
												r.fade(e, t, n, o);
											},
										}),
										r
									);
								(e = parseFloat(e)),
									(t = parseFloat(t)),
									(n = parseFloat(n)),
									r.volume(e, o);
								for (var i = r._getSoundIds(o), a = 0; a < i.length; a++) {
									var s = r._soundById(i[a]);
									if (s) {
										if ((o || r._stopFade(i[a]), r._webAudio && !s._muted)) {
											var u = g.ctx.currentTime,
												l = u + n / 1e3;
											(s._volume = e),
												s._node.gain.setValueAtTime(e, u),
												s._node.gain.linearRampToValueAtTime(t, l);
										}
										r._startFadeInterval(s, e, t, n, i[a], void 0 === o);
									}
								}
								return r;
							},
							_startFadeInterval: function (t, n, o, r, e, i) {
								var a = this,
									s = n,
									u = o - n,
									l = Math.abs(u / 0.01),
									d = Math.max(4, 0 < l ? r / l : r),
									c = Date.now();
								(t._fadeTo = o),
									(t._interval = setInterval(function () {
										var e = (Date.now() - c) / r;
										(c = Date.now()),
											(s += u * e),
											(s = Math.max(0, s)),
											(s = Math.min(1, s)),
											(s = Math.round(100 * s) / 100),
											a._webAudio ? (t._volume = s) : a.volume(s, t._id, !0),
											i && (a._volume = s),
											((o < n && s <= o) || (n < o && o <= s)) &&
												(clearInterval(t._interval),
												(t._interval = null),
												(t._fadeTo = null),
												a.volume(o, t._id),
												a._emit('fade', t._id));
									}, d));
							},
							_stopFade: function (e) {
								var t = this,
									n = t._soundById(e);
								return (
									n &&
										n._interval &&
										(t._webAudio &&
											n._node.gain.cancelScheduledValues(g.ctx.currentTime),
										clearInterval(n._interval),
										(n._interval = null),
										t.volume(n._fadeTo, e),
										(n._fadeTo = null),
										t._emit('fade', e)),
									t
								);
							},
							loop: function () {
								var e,
									t,
									n,
									o = this,
									r = arguments;
								if (0 === r.length) return o._loop;
								if (1 === r.length) {
									if ('boolean' != typeof r[0])
										return !!(n = o._soundById(parseInt(r[0], 10))) && n._loop;
									(e = r[0]), (o._loop = e);
								} else 2 === r.length && ((e = r[0]), (t = parseInt(r[1], 10)));
								for (var i = o._getSoundIds(t), a = 0; a < i.length; a++)
									(n = o._soundById(i[a])) &&
										((n._loop = e),
										o._webAudio &&
											n._node &&
											n._node.bufferSource &&
											(n._node.bufferSource.loop = e) &&
											((n._node.bufferSource.loopStart = n._start || 0),
											(n._node.bufferSource.loopEnd = n._stop)));
								return o;
							},
							rate: function () {
								var e,
									t,
									n,
									o = this,
									r = arguments;
								if (0 === r.length) t = o._sounds[0]._id;
								else if (1 === r.length) {
									0 <= o._getSoundIds().indexOf(r[0])
										? (t = parseInt(r[0], 10))
										: (e = parseFloat(r[0]));
								} else
									2 === r.length &&
										((e = parseFloat(r[0])), (t = parseInt(r[1], 10)));
								if ('number' != typeof e)
									return (n = o._soundById(t)) ? n._rate : o._rate;
								if ('loaded' !== o._state || o._playLock)
									return (
										o._queue.push({
											event: 'rate',
											action: function () {
												o.rate.apply(o, r);
											},
										}),
										o
									);
								void 0 === t && (o._rate = e), (t = o._getSoundIds(t));
								for (var i = 0; i < t.length; i++)
									if ((n = o._soundById(t[i]))) {
										o.playing(t[i]) &&
											((n._rateSeek = o.seek(t[i])),
											(n._playStart = o._webAudio
												? g.ctx.currentTime
												: n._playStart)),
											(n._rate = e),
											o._webAudio && n._node && n._node.bufferSource
												? n._node.bufferSource.playbackRate.setValueAtTime(
														e,
														g.ctx.currentTime
												  )
												: n._node && (n._node.playbackRate = e);
										var a = o.seek(t[i]),
											s =
												(1e3 *
													((o._sprite[n._sprite][0] + o._sprite[n._sprite][1]) /
														1e3 -
														a)) /
												Math.abs(n._rate);
										(!o._endTimers[t[i]] && n._paused) ||
											(o._clearTimer(t[i]),
											(o._endTimers[t[i]] = setTimeout(
												o._ended.bind(o, n),
												s
											))),
											o._emit('rate', n._id);
									}
								return o;
							},
							seek: function () {
								var e,
									t,
									n = this,
									o = arguments;
								if (0 === o.length) t = n._sounds[0]._id;
								else if (1 === o.length) {
									0 <= n._getSoundIds().indexOf(o[0])
										? (t = parseInt(o[0], 10))
										: n._sounds.length &&
										  ((t = n._sounds[0]._id), (e = parseFloat(o[0])));
								} else
									2 === o.length &&
										((e = parseFloat(o[0])), (t = parseInt(o[1], 10)));
								if (void 0 === t) return n;
								if ('loaded' !== n._state || n._playLock)
									return (
										n._queue.push({
											event: 'seek',
											action: function () {
												n.seek.apply(n, o);
											},
										}),
										n
									);
								var r = n._soundById(t);
								if (r) {
									if (!('number' == typeof e && 0 <= e)) {
										if (n._webAudio) {
											var i = n.playing(t)
													? g.ctx.currentTime - r._playStart
													: 0,
												a = r._rateSeek ? r._rateSeek - r._seek : 0;
											return r._seek + (a + i * Math.abs(r._rate));
										}
										return r._node.currentTime;
									}
									var s = n.playing(t);
									s && n.pause(t, !0),
										(r._seek = e),
										(r._ended = !1),
										n._clearTimer(t),
										n._webAudio ||
											!r._node ||
											isNaN(r._node.duration) ||
											(r._node.currentTime = e);
									var u = function () {
										n._emit('seek', t), s && n.play(t, !0);
									};
									if (s && !n._webAudio) {
										var l = function () {
											n._playLock ? setTimeout(l, 0) : u();
										};
										setTimeout(l, 0);
									} else u();
								}
								return n;
							},
							playing: function (e) {
								if ('number' == typeof e) {
									var t = this._soundById(e);
									return !!t && !t._paused;
								}
								for (var n = 0; n < this._sounds.length; n++)
									if (!this._sounds[n]._paused) return !0;
								return !1;
							},
							duration: function (e) {
								var t = this._duration,
									n = this._soundById(e);
								return n && (t = this._sprite[n._sprite][1] / 1e3), t;
							},
							state: function () {
								return this._state;
							},
							unload: function () {
								for (var e = this, t = e._sounds, n = 0; n < t.length; n++)
									t[n]._paused || e.stop(t[n]._id),
										e._webAudio ||
											(e._clearSound(t[n]._node),
											t[n]._node.removeEventListener(
												'error',
												t[n]._errorFn,
												!1
											),
											t[n]._node.removeEventListener(
												g._canPlayEvent,
												t[n]._loadFn,
												!1
											),
											g._releaseHtml5Audio(t[n]._node)),
										delete t[n]._node,
										e._clearTimer(t[n]._id);
								var o = g._howls.indexOf(e);
								0 <= o && g._howls.splice(o, 1);
								var r = !0;
								for (n = 0; n < g._howls.length; n++)
									if (
										g._howls[n]._src === e._src ||
										0 <= e._src.indexOf(g._howls[n]._src)
									) {
										r = !1;
										break;
									}
								return (
									a && r && delete a[e._src],
									(g.noAudio = !1),
									(e._state = 'unloaded'),
									(e._sounds = []),
									(e = null)
								);
							},
							on: function (e, t, n, o) {
								var r = this['_on' + e];
								return (
									'function' == typeof t &&
										r.push(o ? { id: n, fn: t, once: o } : { id: n, fn: t }),
									this
								);
							},
							off: function (e, t, n) {
								var o = this,
									r = o['_on' + e],
									i = 0;
								if (('number' == typeof t && ((n = t), (t = null)), t || n))
									for (i = 0; i < r.length; i++) {
										var a = n === r[i].id;
										if ((t === r[i].fn && a) || (!t && a)) {
											r.splice(i, 1);
											break;
										}
									}
								else if (e) o['_on' + e] = [];
								else {
									var s = Object.keys(o);
									for (i = 0; i < s.length; i++)
										0 === s[i].indexOf('_on') &&
											Array.isArray(o[s[i]]) &&
											(o[s[i]] = []);
								}
								return o;
							},
							once: function (e, t, n) {
								return this.on(e, t, n, 1), this;
							},
							_emit: function (e, t, n) {
								for (
									var o = this, r = o['_on' + e], i = r.length - 1;
									0 <= i;
									i--
								)
									(r[i].id && r[i].id !== t && 'load' !== e) ||
										(setTimeout(
											function (e) {
												e.call(this, t, n);
											}.bind(o, r[i].fn),
											0
										),
										r[i].once && o.off(e, r[i].fn, r[i].id));
								return o._loadQueue(e), o;
							},
							_loadQueue: function (e) {
								var t = this;
								if (0 < t._queue.length) {
									var n = t._queue[0];
									n.event === e && (t._queue.shift(), t._loadQueue()),
										e || n.action();
								}
								return t;
							},
							_ended: function (e) {
								var t = this,
									n = e._sprite;
								if (
									!t._webAudio &&
									e._node &&
									!e._node.paused &&
									!e._node.ended &&
									e._node.currentTime < e._stop
								)
									return setTimeout(t._ended.bind(t, e), 100), t;
								var o = !(!e._loop && !t._sprite[n][2]);
								if (
									(t._emit('end', e._id),
									!t._webAudio && o && t.stop(e._id, !0).play(e._id),
									t._webAudio && o)
								) {
									t._emit('play', e._id),
										(e._seek = e._start || 0),
										(e._rateSeek = 0),
										(e._playStart = g.ctx.currentTime);
									var r = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
									t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), r);
								}
								return (
									t._webAudio &&
										!o &&
										((e._paused = !0),
										(e._ended = !0),
										(e._seek = e._start || 0),
										(e._rateSeek = 0),
										t._clearTimer(e._id),
										t._cleanBuffer(e._node),
										g._autoSuspend()),
									t._webAudio || o || t.stop(e._id, !0),
									t
								);
							},
							_clearTimer: function (e) {
								var t = this;
								if (t._endTimers[e]) {
									if ('function' != typeof t._endTimers[e])
										clearTimeout(t._endTimers[e]);
									else {
										var n = t._soundById(e);
										n &&
											n._node &&
											n._node.removeEventListener('ended', t._endTimers[e], !1);
									}
									delete t._endTimers[e];
								}
								return t;
							},
							_soundById: function (e) {
								for (var t = 0; t < this._sounds.length; t++)
									if (e === this._sounds[t]._id) return this._sounds[t];
								return null;
							},
							_inactiveSound: function () {
								var e = this;
								e._drain();
								for (var t = 0; t < e._sounds.length; t++)
									if (e._sounds[t]._ended) return e._sounds[t].reset();
								return new i(e);
							},
							_drain: function () {
								var e = this,
									t = e._pool,
									n = 0,
									o = 0;
								if (!(e._sounds.length < t)) {
									for (o = 0; o < e._sounds.length; o++)
										e._sounds[o]._ended && n++;
									for (o = e._sounds.length - 1; 0 <= o; o--) {
										if (n <= t) return;
										e._sounds[o]._ended &&
											(e._webAudio &&
												e._sounds[o]._node &&
												e._sounds[o]._node.disconnect(0),
											e._sounds.splice(o, 1),
											n--);
									}
								}
							},
							_getSoundIds: function (e) {
								if (void 0 !== e) return [e];
								for (var t = [], n = 0; n < this._sounds.length; n++)
									t.push(this._sounds[n]._id);
								return t;
							},
							_refreshBuffer: function (e) {
								return (
									(e._node.bufferSource = g.ctx.createBufferSource()),
									(e._node.bufferSource.buffer = a[this._src]),
									e._panner
										? e._node.bufferSource.connect(e._panner)
										: e._node.bufferSource.connect(e._node),
									(e._node.bufferSource.loop = e._loop),
									e._loop &&
										((e._node.bufferSource.loopStart = e._start || 0),
										(e._node.bufferSource.loopEnd = e._stop || 0)),
									e._node.bufferSource.playbackRate.setValueAtTime(
										e._rate,
										g.ctx.currentTime
									),
									this
								);
							},
							_cleanBuffer: function (e) {
								var t =
									g._navigator && 0 <= g._navigator.vendor.indexOf('Apple');
								if (
									g._scratchBuffer &&
									e.bufferSource &&
									((e.bufferSource.onended = null),
									e.bufferSource.disconnect(0),
									t)
								)
									try {
										e.bufferSource.buffer = g._scratchBuffer;
									} catch (e) {}
								return (e.bufferSource = null), this;
							},
							_clearSound: function (e) {
								/MSIE |Trident\//.test(
									g._navigator && g._navigator.userAgent
								) ||
									(e.src =
										'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
							},
						};
						var i = function (e) {
							(this._parent = e), this.init();
						};
						i.prototype = {
							init: function () {
								var e = this,
									t = e._parent;
								return (
									(e._muted = t._muted),
									(e._loop = t._loop),
									(e._volume = t._volume),
									(e._rate = t._rate),
									(e._seek = 0),
									(e._paused = !0),
									(e._ended = !0),
									(e._sprite = '__default'),
									(e._id = ++g._counter),
									t._sounds.push(e),
									e.create(),
									e
								);
							},
							create: function () {
								var e = this,
									t = e._parent,
									n = g._muted || e._muted || e._parent._muted ? 0 : e._volume;
								return (
									t._webAudio
										? ((e._node =
												void 0 === g.ctx.createGain
													? g.ctx.createGainNode()
													: g.ctx.createGain()),
										  e._node.gain.setValueAtTime(n, g.ctx.currentTime),
										  (e._node.paused = !0),
										  e._node.connect(g.masterGain))
										: g.noAudio ||
										  ((e._node = g._obtainHtml5Audio()),
										  (e._errorFn = e._errorListener.bind(e)),
										  e._node.addEventListener('error', e._errorFn, !1),
										  (e._loadFn = e._loadListener.bind(e)),
										  e._node.addEventListener(g._canPlayEvent, e._loadFn, !1),
										  (e._node.src = t._src),
										  (e._node.preload = 'auto'),
										  (e._node.volume = n * g.volume()),
										  e._node.load()),
									e
								);
							},
							reset: function () {
								var e = this,
									t = e._parent;
								return (
									(e._muted = t._muted),
									(e._loop = t._loop),
									(e._volume = t._volume),
									(e._rate = t._rate),
									(e._seek = 0),
									(e._rateSeek = 0),
									(e._paused = !0),
									(e._ended = !0),
									(e._sprite = '__default'),
									(e._id = ++g._counter),
									e
								);
							},
							_errorListener: function () {
								var e = this;
								e._parent._emit(
									'loaderror',
									e._id,
									e._node.error ? e._node.error.code : 0
								),
									e._node.removeEventListener('error', e._errorFn, !1);
							},
							_loadListener: function () {
								var e = this._parent;
								(e._duration = Math.ceil(10 * this._node.duration) / 10),
									0 === Object.keys(e._sprite).length &&
										(e._sprite = { __default: [0, 1e3 * e._duration] }),
									'loaded' !== e._state &&
										((e._state = 'loaded'), e._emit('load'), e._loadQueue()),
									this._node.removeEventListener(
										g._canPlayEvent,
										this._loadFn,
										!1
									);
							},
						};
						var a = {},
							s = function (t) {
								var e = t._src;
								if (a[e]) return (t._duration = a[e].duration), void d(t);
								if (/^data:[^;]+;base64,/.test(e)) {
									for (
										var n = atob(e.split(',')[1]),
											o = new Uint8Array(n.length),
											r = 0;
										r < n.length;
										++r
									)
										o[r] = n.charCodeAt(r);
									l(o.buffer, t);
								} else {
									var i = new XMLHttpRequest();
									i.open('GET', e, !0),
										(i.withCredentials = t._xhrWithCredentials),
										(i.responseType = 'arraybuffer'),
										(i.onload = function () {
											var e = (i.status + '')[0];
											'0' === e || '2' === e || '3' === e
												? l(i.response, t)
												: t._emit(
														'loaderror',
														null,
														'Failed loading audio file with status: ' +
															i.status +
															'.'
												  );
										}),
										(i.onerror = function () {
											t._webAudio &&
												((t._html5 = !0),
												(t._webAudio = !1),
												(t._sounds = []),
												delete a[e],
												t.load());
										}),
										u(i);
								}
							},
							u = function (t) {
								try {
									t.send();
								} catch (e) {
									t.onerror();
								}
							},
							l = function (e, t) {
								function n() {
									t._emit('loaderror', null, 'Decoding audio data failed.');
								}
								function o(e) {
									e && 0 < t._sounds.length ? ((a[t._src] = e), d(t, e)) : n();
								}
								'undefined' != typeof Promise &&
								1 === g.ctx.decodeAudioData.length
									? g.ctx.decodeAudioData(e).then(o).catch(n)
									: g.ctx.decodeAudioData(e, o, n);
							},
							d = function (e, t) {
								t && !e._duration && (e._duration = t.duration),
									0 === Object.keys(e._sprite).length &&
										(e._sprite = { __default: [0, 1e3 * e._duration] }),
									'loaded' !== e._state &&
										((e._state = 'loaded'), e._emit('load'), e._loadQueue());
							},
							c = function () {
								if (g.usingWebAudio) {
									try {
										'undefined' != typeof AudioContext
											? (g.ctx = new AudioContext())
											: 'undefined' != typeof webkitAudioContext
											? (g.ctx = new webkitAudioContext())
											: (g.usingWebAudio = !1);
									} catch (e) {
										g.usingWebAudio = !1;
									}
									g.ctx || (g.usingWebAudio = !1);
									var e = /iP(hone|od|ad)/.test(
											g._navigator && g._navigator.platform
										),
										t =
											g._navigator &&
											g._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
										n = t ? parseInt(t[1], 10) : null;
									if (e && n && n < 9) {
										var o = /safari/.test(
											g._navigator && g._navigator.userAgent.toLowerCase()
										);
										((g._navigator && g._navigator.standalone && !o) ||
											(g._navigator && !g._navigator.standalone && !o)) &&
											(g.usingWebAudio = !1);
									}
									g.usingWebAudio &&
										((g.masterGain =
											void 0 === g.ctx.createGain
												? g.ctx.createGainNode()
												: g.ctx.createGain()),
										g.masterGain.gain.setValueAtTime(
											g._muted ? 0 : g._volume,
											g.ctx.currentTime
										),
										g.masterGain.connect(g.ctx.destination)),
										g._setup();
								}
							};
						'function' == typeof define &&
							define.amd &&
							define([], function () {
								return { Howler: g, Howl: t };
							}),
							void 0 !== o && ((o.Howler = g), (o.Howl = t)),
							'undefined' != typeof window
								? ((window.HowlerGlobal = e),
								  (window.Howler = g),
								  (window.Howl = t),
								  (window.Sound = i))
								: void 0 !== n &&
								  ((n.HowlerGlobal = e),
								  (n.Howler = g),
								  (n.Howl = t),
								  (n.Sound = i));
					})(),
						(function () {
							'use strict';
							var n, o, r;
							(HowlerGlobal.prototype._pos = [0, 0, 0]),
								(HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
								(HowlerGlobal.prototype.stereo = function (e) {
									var t = this;
									if (!t.ctx || !t.ctx.listener) return t;
									for (var n = t._howls.length - 1; 0 <= n; n--)
										t._howls[n].stereo(e);
									return t;
								}),
								(HowlerGlobal.prototype.pos = function (e, t, n) {
									var o = this;
									return o.ctx && o.ctx.listener
										? ((t = 'number' != typeof t ? o._pos[1] : t),
										  (n = 'number' != typeof n ? o._pos[2] : n),
										  'number' != typeof e
												? o._pos
												: ((o._pos = [e, t, n]),
												  void 0 !== o.ctx.listener.positionX
														? (o.ctx.listener.positionX.setTargetAtTime(
																o._pos[0],
																Howler.ctx.currentTime,
																0.1
														  ),
														  o.ctx.listener.positionY.setTargetAtTime(
																o._pos[1],
																Howler.ctx.currentTime,
																0.1
														  ),
														  o.ctx.listener.positionZ.setTargetAtTime(
																o._pos[2],
																Howler.ctx.currentTime,
																0.1
														  ))
														: o.ctx.listener.setPosition(
																o._pos[0],
																o._pos[1],
																o._pos[2]
														  ),
												  o))
										: o;
								}),
								(HowlerGlobal.prototype.orientation = function (
									e,
									t,
									n,
									o,
									r,
									i
								) {
									var a = this;
									if (!a.ctx || !a.ctx.listener) return a;
									var s = a._orientation;
									return (
										(t = 'number' != typeof t ? s[1] : t),
										(n = 'number' != typeof n ? s[2] : n),
										(o = 'number' != typeof o ? s[3] : o),
										(r = 'number' != typeof r ? s[4] : r),
										(i = 'number' != typeof i ? s[5] : i),
										'number' != typeof e
											? s
											: ((a._orientation = [e, t, n, o, r, i]),
											  void 0 !== a.ctx.listener.forwardX
													? (a.ctx.listener.forwardX.setTargetAtTime(
															e,
															Howler.ctx.currentTime,
															0.1
													  ),
													  a.ctx.listener.forwardY.setTargetAtTime(
															t,
															Howler.ctx.currentTime,
															0.1
													  ),
													  a.ctx.listener.forwardZ.setTargetAtTime(
															n,
															Howler.ctx.currentTime,
															0.1
													  ),
													  a.ctx.listener.upX.setTargetAtTime(
															o,
															Howler.ctx.currentTime,
															0.1
													  ),
													  a.ctx.listener.upY.setTargetAtTime(
															r,
															Howler.ctx.currentTime,
															0.1
													  ),
													  a.ctx.listener.upZ.setTargetAtTime(
															i,
															Howler.ctx.currentTime,
															0.1
													  ))
													: a.ctx.listener.setOrientation(e, t, n, o, r, i),
											  a)
									);
								}),
								(Howl.prototype.init =
									((n = Howl.prototype.init),
									function (e) {
										var t = this;
										return (
											(t._orientation = e.orientation || [1, 0, 0]),
											(t._stereo = e.stereo || null),
											(t._pos = e.pos || null),
											(t._pannerAttr = {
												coneInnerAngle:
													void 0 !== e.coneInnerAngle ? e.coneInnerAngle : 360,
												coneOuterAngle:
													void 0 !== e.coneOuterAngle ? e.coneOuterAngle : 360,
												coneOuterGain:
													void 0 !== e.coneOuterGain ? e.coneOuterGain : 0,
												distanceModel:
													void 0 !== e.distanceModel
														? e.distanceModel
														: 'inverse',
												maxDistance:
													void 0 !== e.maxDistance ? e.maxDistance : 1e4,
												panningModel:
													void 0 !== e.panningModel ? e.panningModel : 'HRTF',
												refDistance:
													void 0 !== e.refDistance ? e.refDistance : 1,
												rolloffFactor:
													void 0 !== e.rolloffFactor ? e.rolloffFactor : 1,
											}),
											(t._onstereo = e.onstereo ? [{ fn: e.onstereo }] : []),
											(t._onpos = e.onpos ? [{ fn: e.onpos }] : []),
											(t._onorientation = e.onorientation
												? [{ fn: e.onorientation }]
												: []),
											n.call(this, e)
										);
									})),
								(Howl.prototype.stereo = function (e, t) {
									var n = this;
									if (!n._webAudio) return n;
									if ('loaded' !== n._state)
										return (
											n._queue.push({
												event: 'stereo',
												action: function () {
													n.stereo(e, t);
												},
											}),
											n
										);
									var o =
										void 0 === Howler.ctx.createStereoPanner
											? 'spatial'
											: 'stereo';
									if (void 0 === t) {
										if ('number' != typeof e) return n._stereo;
										(n._stereo = e), (n._pos = [e, 0, 0]);
									}
									for (var r = n._getSoundIds(t), i = 0; i < r.length; i++) {
										var a = n._soundById(r[i]);
										if (a) {
											if ('number' != typeof e) return a._stereo;
											(a._stereo = e),
												(a._pos = [e, 0, 0]),
												a._node &&
													((a._pannerAttr.panningModel = 'equalpower'),
													(a._panner && a._panner.pan) || l(a, o),
													'spatial' == o
														? void 0 !== a._panner.positionX
															? (a._panner.positionX.setValueAtTime(
																	e,
																	Howler.ctx.currentTime
															  ),
															  a._panner.positionY.setValueAtTime(
																	0,
																	Howler.ctx.currentTime
															  ),
															  a._panner.positionZ.setValueAtTime(
																	0,
																	Howler.ctx.currentTime
															  ))
															: a._panner.setPosition(e, 0, 0)
														: a._panner.pan.setValueAtTime(
																e,
																Howler.ctx.currentTime
														  )),
												n._emit('stereo', a._id);
										}
									}
									return n;
								}),
								(Howl.prototype.pos = function (e, t, n, o) {
									var r = this;
									if (!r._webAudio) return r;
									if ('loaded' !== r._state)
										return (
											r._queue.push({
												event: 'pos',
												action: function () {
													r.pos(e, t, n, o);
												},
											}),
											r
										);
									if (
										((t = 'number' != typeof t ? 0 : t),
										(n = 'number' != typeof n ? -0.5 : n),
										void 0 === o)
									) {
										if ('number' != typeof e) return r._pos;
										r._pos = [e, t, n];
									}
									for (var i = r._getSoundIds(o), a = 0; a < i.length; a++) {
										var s = r._soundById(i[a]);
										if (s) {
											if ('number' != typeof e) return s._pos;
											(s._pos = [e, t, n]),
												s._node &&
													((s._panner && !s._panner.pan) || l(s, 'spatial'),
													void 0 !== s._panner.positionX
														? (s._panner.positionX.setValueAtTime(
																e,
																Howler.ctx.currentTime
														  ),
														  s._panner.positionY.setValueAtTime(
																t,
																Howler.ctx.currentTime
														  ),
														  s._panner.positionZ.setValueAtTime(
																n,
																Howler.ctx.currentTime
														  ))
														: s._panner.setPosition(e, t, n)),
												r._emit('pos', s._id);
										}
									}
									return r;
								}),
								(Howl.prototype.orientation = function (e, t, n, o) {
									var r = this;
									if (!r._webAudio) return r;
									if ('loaded' !== r._state)
										return (
											r._queue.push({
												event: 'orientation',
												action: function () {
													r.orientation(e, t, n, o);
												},
											}),
											r
										);
									if (
										((t = 'number' != typeof t ? r._orientation[1] : t),
										(n = 'number' != typeof n ? r._orientation[2] : n),
										void 0 === o)
									) {
										if ('number' != typeof e) return r._orientation;
										r._orientation = [e, t, n];
									}
									for (var i = r._getSoundIds(o), a = 0; a < i.length; a++) {
										var s = r._soundById(i[a]);
										if (s) {
											if ('number' != typeof e) return s._orientation;
											(s._orientation = [e, t, n]),
												s._node &&
													(s._panner ||
														(s._pos || (s._pos = r._pos || [0, 0, -0.5]),
														l(s, 'spatial')),
													void 0 !== s._panner.orientationX
														? (s._panner.orientationX.setValueAtTime(
																e,
																Howler.ctx.currentTime
														  ),
														  s._panner.orientationY.setValueAtTime(
																t,
																Howler.ctx.currentTime
														  ),
														  s._panner.orientationZ.setValueAtTime(
																n,
																Howler.ctx.currentTime
														  ))
														: s._panner.setOrientation(e, t, n)),
												r._emit('orientation', s._id);
										}
									}
									return r;
								}),
								(Howl.prototype.pannerAttr = function () {
									var e,
										t,
										n,
										o = this,
										r = arguments;
									if (!o._webAudio) return o;
									if (0 === r.length) return o._pannerAttr;
									if (1 === r.length) {
										if ('object' != typeof r[0])
											return (n = o._soundById(parseInt(r[0], 10)))
												? n._pannerAttr
												: o._pannerAttr;
										(e = r[0]),
											void 0 === t &&
												(e.pannerAttr ||
													(e.pannerAttr = {
														coneInnerAngle: e.coneInnerAngle,
														coneOuterAngle: e.coneOuterAngle,
														coneOuterGain: e.coneOuterGain,
														distanceModel: e.distanceModel,
														maxDistance: e.maxDistance,
														refDistance: e.refDistance,
														rolloffFactor: e.rolloffFactor,
														panningModel: e.panningModel,
													}),
												(o._pannerAttr = {
													coneInnerAngle:
														void 0 !== e.pannerAttr.coneInnerAngle
															? e.pannerAttr.coneInnerAngle
															: o._coneInnerAngle,
													coneOuterAngle:
														void 0 !== e.pannerAttr.coneOuterAngle
															? e.pannerAttr.coneOuterAngle
															: o._coneOuterAngle,
													coneOuterGain:
														void 0 !== e.pannerAttr.coneOuterGain
															? e.pannerAttr.coneOuterGain
															: o._coneOuterGain,
													distanceModel:
														void 0 !== e.pannerAttr.distanceModel
															? e.pannerAttr.distanceModel
															: o._distanceModel,
													maxDistance:
														void 0 !== e.pannerAttr.maxDistance
															? e.pannerAttr.maxDistance
															: o._maxDistance,
													refDistance:
														void 0 !== e.pannerAttr.refDistance
															? e.pannerAttr.refDistance
															: o._refDistance,
													rolloffFactor:
														void 0 !== e.pannerAttr.rolloffFactor
															? e.pannerAttr.rolloffFactor
															: o._rolloffFactor,
													panningModel:
														void 0 !== e.pannerAttr.panningModel
															? e.pannerAttr.panningModel
															: o._panningModel,
												}));
									} else
										2 === r.length && ((e = r[0]), (t = parseInt(r[1], 10)));
									for (var i = o._getSoundIds(t), a = 0; a < i.length; a++)
										if ((n = o._soundById(i[a]))) {
											var s = n._pannerAttr;
											s = {
												coneInnerAngle:
													void 0 !== e.coneInnerAngle
														? e.coneInnerAngle
														: s.coneInnerAngle,
												coneOuterAngle:
													void 0 !== e.coneOuterAngle
														? e.coneOuterAngle
														: s.coneOuterAngle,
												coneOuterGain:
													void 0 !== e.coneOuterGain
														? e.coneOuterGain
														: s.coneOuterGain,
												distanceModel:
													void 0 !== e.distanceModel
														? e.distanceModel
														: s.distanceModel,
												maxDistance:
													void 0 !== e.maxDistance
														? e.maxDistance
														: s.maxDistance,
												refDistance:
													void 0 !== e.refDistance
														? e.refDistance
														: s.refDistance,
												rolloffFactor:
													void 0 !== e.rolloffFactor
														? e.rolloffFactor
														: s.rolloffFactor,
												panningModel:
													void 0 !== e.panningModel
														? e.panningModel
														: s.panningModel,
											};
											var u = n._panner;
											u
												? ((u.coneInnerAngle = s.coneInnerAngle),
												  (u.coneOuterAngle = s.coneOuterAngle),
												  (u.coneOuterGain = s.coneOuterGain),
												  (u.distanceModel = s.distanceModel),
												  (u.maxDistance = s.maxDistance),
												  (u.refDistance = s.refDistance),
												  (u.rolloffFactor = s.rolloffFactor),
												  (u.panningModel = s.panningModel))
												: (n._pos || (n._pos = o._pos || [0, 0, -0.5]),
												  l(n, 'spatial'));
										}
									return o;
								}),
								(Sound.prototype.init =
									((o = Sound.prototype.init),
									function () {
										var e = this,
											t = e._parent;
										(e._orientation = t._orientation),
											(e._stereo = t._stereo),
											(e._pos = t._pos),
											(e._pannerAttr = t._pannerAttr),
											o.call(this),
											e._stereo
												? t.stereo(e._stereo)
												: e._pos &&
												  t.pos(e._pos[0], e._pos[1], e._pos[2], e._id);
									})),
								(Sound.prototype.reset =
									((r = Sound.prototype.reset),
									function () {
										var e = this,
											t = e._parent;
										return (
											(e._orientation = t._orientation),
											(e._stereo = t._stereo),
											(e._pos = t._pos),
											(e._pannerAttr = t._pannerAttr),
											e._stereo
												? t.stereo(e._stereo)
												: e._pos
												? t.pos(e._pos[0], e._pos[1], e._pos[2], e._id)
												: e._panner &&
												  (e._panner.disconnect(0),
												  (e._panner = void 0),
												  t._refreshBuffer(e)),
											r.call(this)
										);
									}));
							var l = function (e, t) {
								'spatial' === (t = t || 'spatial')
									? ((e._panner = Howler.ctx.createPanner()),
									  (e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle),
									  (e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle),
									  (e._panner.coneOuterGain = e._pannerAttr.coneOuterGain),
									  (e._panner.distanceModel = e._pannerAttr.distanceModel),
									  (e._panner.maxDistance = e._pannerAttr.maxDistance),
									  (e._panner.refDistance = e._pannerAttr.refDistance),
									  (e._panner.rolloffFactor = e._pannerAttr.rolloffFactor),
									  (e._panner.panningModel = e._pannerAttr.panningModel),
									  void 0 !== e._panner.positionX
											? (e._panner.positionX.setValueAtTime(
													e._pos[0],
													Howler.ctx.currentTime
											  ),
											  e._panner.positionY.setValueAtTime(
													e._pos[1],
													Howler.ctx.currentTime
											  ),
											  e._panner.positionZ.setValueAtTime(
													e._pos[2],
													Howler.ctx.currentTime
											  ))
											: e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
									  void 0 !== e._panner.orientationX
											? (e._panner.orientationX.setValueAtTime(
													e._orientation[0],
													Howler.ctx.currentTime
											  ),
											  e._panner.orientationY.setValueAtTime(
													e._orientation[1],
													Howler.ctx.currentTime
											  ),
											  e._panner.orientationZ.setValueAtTime(
													e._orientation[2],
													Howler.ctx.currentTime
											  ))
											: e._panner.setOrientation(
													e._orientation[0],
													e._orientation[1],
													e._orientation[2]
											  ))
									: ((e._panner = Howler.ctx.createStereoPanner()),
									  e._panner.pan.setValueAtTime(
											e._stereo,
											Howler.ctx.currentTime
									  )),
									e._panner.connect(e._node),
									e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
							};
						})();
				}.call(
					this,
					'undefined' != typeof global
						? global
						: 'undefined' != typeof self
						? self
						: 'undefined' != typeof window
						? window
						: {}
				));
			},
			{},
		],
		12: [
			function (e, t, n) {
				t.exports = e('./lib/visibility.timers.js');
			},
			{ './lib/visibility.timers.js': 14 },
		],
		13: [
			function (e, t, n) {
				var o, r, i;
				(o = this),
					(r = -1),
					(i = {
						onVisible: function (n) {
							var e = i.isSupported();
							if (!e || !i.hidden()) return n(), e;
							var o = i.change(function (e, t) {
								i.hidden() || (i.unbind(o), n());
							});
							return o;
						},
						change: function (e) {
							if (!i.isSupported()) return !1;
							var t = (r += 1);
							return (i._callbacks[t] = e), i._listen(), t;
						},
						unbind: function (e) {
							delete i._callbacks[e];
						},
						afterPrerendering: function (n) {
							var e = i.isSupported(),
								o = 'prerender';
							if (!e || o != i.state()) return n(), e;
							var r = i.change(function (e, t) {
								o != t && (i.unbind(r), n());
							});
							return r;
						},
						hidden: function () {
							return !(!i._doc.hidden && !i._doc.webkitHidden);
						},
						state: function () {
							return (
								i._doc.visibilityState ||
								i._doc.webkitVisibilityState ||
								'visible'
							);
						},
						isSupported: function () {
							return void 0 !== i._doc.hidden || void 0 !== i._doc.webkitHidden;
						},
						_doc: document || {},
						_callbacks: {},
						_change: function (e) {
							var t = i.state();
							for (var n in i._callbacks) i._callbacks[n].call(i._doc, e, t);
						},
						_listen: function () {
							if (!i._init) {
								var e = 'visibilitychange';
								i._doc.webkitVisibilityState && (e = 'webkit' + e);
								function t() {
									i._change.apply(i, arguments);
								}
								i._doc.addEventListener
									? i._doc.addEventListener(e, t)
									: i._doc.attachEvent(e, t),
									(i._init = !0);
							}
						},
					}),
					void 0 !== t && t.exports ? (t.exports = i) : (o.Visibility = i);
			},
			{},
		],
		14: [
			function (e, t, n) {
				function o(a) {
					return (
						(a.every = function (e, t, n) {
							a._time(), n || ((n = t), (t = null));
							var o = (r += 1);
							return (
								(a._timers[o] = { visible: e, hidden: t, callback: n }),
								a._run(o, !1),
								a.isSupported() && a._listen(),
								o
							);
						}),
						(a.stop = function (e) {
							return !!a._timers[e] && (a._stop(e), delete a._timers[e], !0);
						}),
						(a._timers = {}),
						(a._time = function () {
							a._timed ||
								((a._timed = !0),
								(a._wasHidden = a.hidden()),
								a.change(function () {
									a._stopRun(), (a._wasHidden = a.hidden());
								}));
						}),
						(a._run = function (e, t) {
							var n,
								o = a._timers[e];
							if (a.hidden()) {
								if (null === o.hidden) return;
								n = o.hidden;
							} else n = o.visible;
							function r() {
								(o.last = new Date()), o.callback.call(s);
							}
							if (t) {
								var i = new Date() - o.last;
								i < n
									? (o.delay = setTimeout(function () {
											(o.id = setInterval(r, n)), r();
									  }, n - i))
									: ((o.id = setInterval(r, n)), r());
							} else o.id = setInterval(r, n);
						}),
						(a._stop = function (e) {
							var t = a._timers[e];
							clearInterval(t.id),
								clearTimeout(t.delay),
								delete t.id,
								delete t.delay;
						}),
						(a._stopRun = function (e) {
							var t = a.hidden(),
								n = a._wasHidden;
							if ((t && !n) || (!t && n))
								for (var o in a._timers) a._stop(o), a._run(o, !t);
						}),
						a
					);
				}
				var s, r;
				(s = window),
					(r = -1),
					void 0 !== t && t.exports
						? (t.exports = o(e('./visibility.core')))
						: o(s.Visibility || e('./visibility.core'));
			},
			{ './visibility.core': 13 },
		],
	},
	{},
	[1]
);
