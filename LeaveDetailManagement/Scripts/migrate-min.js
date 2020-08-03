/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"use strict";
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (a, b, c) { function d(c) { var d = b.console; f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace())) } function e(b, c, e, f) { if (Object.defineProperty) try { return void Object.defineProperty(b, c, { configurable: !0, enumerable: !0, get: function () { return d(f), e }, set: function (a) { d(f), e = a } }) } catch (g) { } a._definePropertyBroken = !0, b[c] = e } a.migrateVersion = "1.4.1"; var f = {}; a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () { f = {}, a.migrateWarnings.length = 0 }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode"); var g = a("<input/>", { size: 1 }).attr("size") && a.attrFn, h = a.attr, i = a.attrHooks.value && a.attrHooks.value.get || function () { return null }, j = a.attrHooks.value && a.attrHooks.value.set || function () { return c }, k = /^(?:input|button)$/i, l = /^[238]$/, m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, n = /^(?:checked|selected)$/i; e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) { var j = e.toLowerCase(), o = b && b.nodeType; return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = { get: function (b, d) { var e, f = a.prop(b, d); return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c }, set: function (b, c, d) { var e; return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d } }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f)) }, a.attrHooks.value = { get: function (a, b) { var c = (a.nodeName || "").toLowerCase(); return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null) }, set: function (a, b) { var c = (a.nodeName || "").toLowerCase(); return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void (a.value = b)) } }; var o, p, q = a.fn.init, r = a.find, s = a.parseJSON, t = /^\s*</, u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, w = /^([^<]*)(<[\w\W]+>)([^>]*)$/; a.fn.init = function (b, e, f) { var g, h; return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h) }, a.fn.init.prototype = a.fn, a.find = function (a) { var b = Array.prototype.slice.call(arguments); if ("string" == typeof a && u.test(a)) try { document.querySelector(a) } catch (c) { a = a.replace(v, function (a, b, c, d) { return "[" + b + c + '"' + d + '"]' }); try { document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a } catch (e) { d("Attribute selector with '#' was not fixed: " + b[0]) } } return r.apply(this, b) }; var x; for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]); a.parseJSON = function (a) { return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null) }, a.uaMatch = function (a) { a = a.toLowerCase(); var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || []; return { browser: b[1] || "", version: b[2] || "0" } }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () { function b(a, c) { return new b.fn.init(a, c) } a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) { var f = a.fn.init.call(this, d, e, c); return f instanceof b ? f : b(f) }, b.fn.init.prototype = b.fn; var c = b(document); return d("jQuery.sub() is deprecated"), b }, a.fn.size = function () { return d("jQuery.fn.size() is deprecated; use the .length property"), this.length }; var y = !1; a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) { var d = a.cssHooks[c] && a.cssHooks[c].get; d && (a.cssHooks[c].get = function () { var a; return y = !0, a = d.apply(this, arguments), y = !1, a }) }), a.swap = function (a, b, c, e) { var f, g, h = {}; y || d("jQuery.swap() is undocumented and deprecated"); for (g in b) h[g] = a.style[g], a.style[g] = b[g]; f = c.apply(a, e || []); for (g in b) a.style[g] = h[g]; return f }, a.ajaxSetup({ converters: { "text json": a.parseJSON } }); var z = a.fn.data; a.fn.data = function (b) { var e, f, g = this[0]; return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f) }; var A = /\/(java|ecma)script/i; a.clean || (a.clean = function (b, c, e, f) { c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated"); var g, h, i, j, k = []; if (a.merge(k, a.buildFragment(b, c).childNodes), e) for (i = function (a) { return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0 }, g = 0; null != (h = k[g]); g++)a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length)); return k }); var B = a.event.add, C = a.event.remove, D = a.event.trigger, E = a.fn.toggle, F = a.fn.live, G = a.fn.die, H = a.fn.load, I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", J = new RegExp("\\b(?:" + I + ")\\b"), K = /(?:^|\s)hover(\.\S+|)\b/, L = function (b) { return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1")) }; a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) { a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f) }, a.event.remove = function (a, b, c, d, e) { C.call(this, a, L(b) || "", c, d, e) }, a.each(["load", "unload", "error"], function (b, c) { a.fn[c] = function () { var a = Array.prototype.slice.call(arguments, 0); return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this)) } }), a.fn.toggle = function (b, c) { if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments); d("jQuery.fn.toggle(handler, handler...) is deprecated"); var e = arguments, f = b.guid || a.guid++, g = 0, h = function (c) { var d = (a._data(this, "lastToggle" + b.guid) || 0) % g; return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1 }; for (h.guid = f; g < e.length;)e[g++].guid = f; return this.click(h) }, a.fn.live = function (b, c, e) { return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this) }, a.fn.die = function (b, c) { return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this) }, a.event.trigger = function (a, b, c, e) { return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e) }, a.each(I.split("|"), function (b, c) { a.event.special[c] = { setup: function () { var b = this; return b !== document && (a.event.add(document, c + "." + a.guid, function () { a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0) }), a._data(this, c, a.guid++)), !1 }, teardown: function () { return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1 } } }), a.event.special.ready = { setup: function () { this === document && d("'ready' event is deprecated") } }; var M = a.fn.andSelf || a.fn.addBack, N = a.fn.find; if (a.fn.andSelf = function () { return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments) }, a.fn.find = function (a) { var b = N.apply(this, arguments); return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b }, a.Callbacks) { var O = a.Deferred, P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]]; a.Deferred = function (b) { var c = O(), e = c.promise(); return c.pipe = e.pipe = function () { var b = arguments; return d("deferred.pipe() is deprecated"), a.Deferred(function (d) { a.each(P, function (f, g) { var h = a.isFunction(b[f]) && b[f]; c[g[1]](function () { var b = h && h.apply(this, arguments); b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments) }) }), b = null }).promise() }, c.isResolved = function () { return d("deferred.isResolved is deprecated"), "resolved" === c.state() }, c.isRejected = function () { return d("deferred.isRejected is deprecated"), "rejected" === c.state() }, b && b.call(c, c), c } } }(jQuery, window);

var TRX_ADDONS_STORAGE = {
	"ajax_url": "/",
	"ajax_nonce": "9942b56989",
	"site_url": "/",
	"vc_edit_mode": "0",
	"popup_engine": "magnific",
	"user_logged_in": "0",
	"email_mask": "^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$",
	"msg_ajax_error": "Invalid server answer!",
	"msg_magnific_loading": "Loading image",
	"msg_magnific_error": "Error loading image",
	"msg_error_like": "Error saving your like! Please, try again later.",
	"msg_field_name_empty": "The name can't be empty",
	"msg_field_email_empty": "Too short (or empty) email address",
	"msg_field_email_not_valid": "Invalid email address",
	"msg_field_text_empty": "The message text can't be empty",
	"msg_send_complete": "Send message complete!",
	"msg_send_error": "Transmit failed!",
	"scroll_to_anchor": "1",
	"update_location_from_anchor": "1",
	"msg_sc_googlemap_not_avail": "Googlemap service is not available",
	"msg_sc_googlemap_geocoder_error": "Error while geocode address"
};

var HR_ADVISOR_STORAGE = {
	"ajax_url": "/",
	"ajax_nonce": "9942b56989",
	"site_url": "/",
	"user_logged_in": "",
	"mobile_layout_width": "960",
	"menu_animation_in": "fadeInUpSmall",
	"menu_animation_out": "fadeOutDownSmall",
	"use_mediaelements": "1",
	"message_maxlength": "1000",
	"site_scheme": "scheme_default",
	"admin_mode": "",
	"email_mask": "^([a-zA-Z0-9_\\-]+\\.)*[a-zA-Z0-9_\\-]+@[a-z0-9_\\-]+(\\.[a-z0-9_\\-]+)*\\.[a-z]{2,6}$",
	"strings": {
		"ajax_error": "Invalid server answer!",
		"error_global": "Error data validation!",
		"name_empty": "The name can&#039;t be empty",
		"name_long": "Too long name",
		"email_empty": "Too short (or empty) email address",
		"email_long": "Too long email address",
		"email_not_valid": "Invalid email address",
		"text_empty": "The message text can&#039;t be empty",
		"text_long": "Too long message text",
		"search_error": "Search error! Try again later.",
		"send_complete": "Send message complete!",
		"send_error": "Transmit failed!"
	},
	"menu_hover": "fade",
	"menu_hover_color": "#b9d057",
	"button_hover": "slide_left"
};

var wc_add_to_cart_params = {
	"ajax_url": "/",
	"wc_ajax_url": "/",
	"i18n_view_cart": "View Cart",
	"cart_url": "/",
	"is_cart": "",
	"cart_redirect_after_add": "no"
};

var woocommerce_params = {
	"ajax_url": "/",
	"wc_ajax_url": "/"
};

var wc_cart_fragments_params = {
	"ajax_url": "/",
	"wc_ajax_url": "/",
	"fragment_name": "wc_fragments"
};

var mejsL10n = {
	"language": "en-US",
	"strings": {
		"Close": "Close",
		"Fullscreen": "Fullscreen",
		"Turn off Fullscreen": "Turn off Fullscreen",
		"Go Fullscreen": "Go Fullscreen",
		"Download File": "Download File",
		"Download Video": "Download Video",
		"Play": "Play",
		"Pause": "Pause",
		"Captions\/Subtitles": "Captions\/Subtitles",
		"None": "None",
		"Time Slider": "Time Slider",
		"Skip back %1 seconds": "Skip back %1 seconds",
		"Video Player": "Video Player",
		"Audio Player": "Audio Player",
		"Volume Slider": "Volume Slider",
		"Mute Toggle": "Mute Toggle",
		"Unmute": "Unmute",
		"Mute": "Mute",
		"Use Up\/Down Arrow keys to increase or decrease volume.": "Use Up\/Down Arrow keys to increase or decrease volume.",
		"Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.": "Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds."
	}
};
var _wpmejsSettings = {
	"pluginPath": "\/wp-includes\/js\/mediaelement\/"
};




! function (t, e, r, n, c, a, p) {
	"use strict";
	try {
		t = document.currentScript || function () {
			for (t = document.getElementsByTagName('script'), e = t.length; e--;)
				if (t[e].getAttribute('data-cfhash')) return t[e]
		}();
		if (t && (c = t.previousSibling)) {
			p = t.parentNode;
			if (a = c.getAttribute('data-cfemail')) {
				for (e = '', r = '0x' + a.substr(0, 2) | 0, n = 2; a.length - n; n += 2) e += '%' + ('0' + ('0x' + a.substr(n, 2) ^ r).toString(16)).slice(-2);
				p.replaceChild(document.createTextNode(decodeURIComponent(e)), c)
			}
			p.removeChild(t)
		}
	} catch (u) { }
}()



jQuery(document).ready(function () {
	"use strict";
	if (jQuery(".rev_slider").length > 0) { initRevSlider() };
});

function initRevSlider() {
	"use strict";
	var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
	var htmlDivCss = "";
	if (htmlDiv) {
		htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
	} else {
		var htmlDiv = document.createElement("div");
		htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
		document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
	}


	var setREVStartSize = function () {
		"use strict";
		try {
			var e = new Object,
				i = jQuery(window).width(),
				t = 9999,
				r = 0,
				n = 0,
				l = 0,
				f = 0,
				s = 0,
				h = 0;
			e.c = jQuery('#rev_slider_1_1');
			e.responsiveLevels = [1240, 1024, 778, 480];
			e.gridwidth = [1170, 1024, 1000, 480];
			e.gridheight = [590, 590, 590, 540];

			e.sliderLayout = "auto";
			if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) {
				f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
			}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
				var u = (e.c.width(), jQuery(window).height());
				if (void 0 != e.fullScreenOffsetContainer) {
					var c = e.fullScreenOffsetContainer.split(",");
					if (c) jQuery.each(c, function (e, i) {
						u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
					}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
				}
				f = u
			} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
			e.c.closest(".rev_slider_wrapper").css({
				height: f
			})

		} catch (d) {
			console.log("Failure at Presize of Slider:" + d)
		}
	};

	setREVStartSize();

	var tpj = jQuery;

	var revapi1;
	tpj(document).ready(function () {
		"use strict";
		if (tpj("#rev_slider_1_1").revolution == undefined) {
			revslider_showDoubleJqueryError("#rev_slider_1_1");
		} else {
			revapi1 = tpj("#rev_slider_1_1").show().revolution({
				sliderType: "standard",
				jsFileLocation: "../vendor/revslider/",
				sliderLayout: "auto",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					keyboardNavigation: "off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					mouseScrollReverse: "default",
					onHoverStop: "off",
					arrows: {
						style: "hesperiden",
						enable: true,
						hide_onmobile: false,
						hide_onleave: false,
						tmp: '',
						left: {
							h_align: "left",
							v_align: "bottom",
							h_offset: 0,
							v_offset: -80
						},
						right: {
							h_align: "left",
							v_align: "bottom",
							h_offset: 60,
							v_offset: -80
						}
					}
				},
				responsiveLevels: [1240, 1024, 778, 480],
				visibilityLevels: [1240, 1024, 778, 480],
				gridwidth: [1170, 1024, 1000, 480],
				gridheight: [590, 590, 590, 540],
				lazyType: "none",
				shadow: 0,
				spinner: "spinner0",
				stopLoop: "off",
				stopAfterLoops: -1,
				stopAtSlide: -1,
				shuffle: "off",
				autoHeight: "off",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	});


	var htmlDivCss = unescape("%23rev_slider_1_1_wrapper%20%7B%0A%20%20%20%20padding%3A%200%200%2065px%200%3B%0A%7D");
	var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
	if (htmlDiv) {
		htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
	} else {
		var htmlDiv = document.createElement('div');
		htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
		document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
	}


	var htmlDivCss = unescape(".hesperiden.tparrows%20%7B%0A%09cursor%3Apointer%3B%0A%09background%3Argba%280%2C0%2C0%2C0%29%3B%0A%09width%3A40px%3B%0A%09height%3A40px%3B%0A%09position%3Aabsolute%3B%0A%09display%3Ablock%3B%0A%09z-index%3A100%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%7D%0A.hesperiden.tparrows%3Ahover%20%7B%0A%09background%3Argba%280%2C%200%2C%200%2C%201%29%3B%0A%7D%0A.hesperiden.tparrows%3Abefore%20%7B%0A%09font-family%3A%20%22revicons%22%3B%0A%09font-size%3A20px%3B%0A%09color%3Argb%28255%2C%20255%2C%20255%29%3B%0A%09display%3Ablock%3B%0A%09line-height%3A%2040px%3B%0A%09text-align%3A%20center%3B%0A%7D%0A.hesperiden.tparrows.tp-leftarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce931%22%3B%0A%20%20%20%20margin-left%3A-3px%3B%0A%7D%0A.hesperiden.tparrows.tp-rightarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce930%22%3B%0A%20%20%20%20margin-right%3A-3px%3B%0A%7D%0A");
	var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
	if (htmlDiv) {
		htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
	} else {
		var htmlDiv = document.createElement('div');
		htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
		document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
	}


	function revslider_showDoubleJqueryError(sliderID) {
		"use strict";
		var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
		errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
		errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
		errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
		errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
		jQuery(sliderID).show().html(errorMessage);
	}




	var setREVStartSize = function () {
		"use strict";
		try {
			var e = new Object,
				i = jQuery(window).width(),
				t = 9999,
				r = 0,
				n = 0,
				l = 0,
				f = 0,
				s = 0,
				h = 0;
			e.c = jQuery('#rev_slider_4_1');
			e.responsiveLevels = [1240, 1024, 778, 480];
			e.gridwidth = [1170, 1024, 1000, 480];
			e.gridheight = [590, 590, 590, 540];

			e.sliderLayout = "auto";
			if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) {
				f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
			}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
				var u = (e.c.width(), jQuery(window).height());
				if (void 0 != e.fullScreenOffsetContainer) {
					var c = e.fullScreenOffsetContainer.split(",");
					if (c) jQuery.each(c, function (e, i) {
						u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
					}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
				}
				f = u
			} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
			e.c.closest(".rev_slider_wrapper").css({
				height: f
			})

		} catch (d) {
			console.log("Failure at Presize of Slider:" + d)
		}
	};

	setREVStartSize();

	var tpj = jQuery;

	var revapi4;
	tpj(document).ready(function () {
		"use strict";
		if (tpj("#rev_slider_4_1").revolution == undefined) {
			revslider_showDoubleJqueryError("#rev_slider_4_1");
		} else {
			revapi4 = tpj("#rev_slider_4_1").show().revolution({
				sliderType: "standard",
				jsFileLocation: "../vendor/revslider/",
				sliderLayout: "auto",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					keyboardNavigation: "off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation: "off",
					mouseScrollReverse: "default",
					onHoverStop: "off",
					arrows: {
						style: "hesperiden",
						enable: true,
						hide_onmobile: false,
						hide_onleave: false,
						tmp: '',
						left: {
							h_align: "left",
							v_align: "bottom",
							h_offset: 0,
							v_offset: -80
						},
						right: {
							h_align: "left",
							v_align: "bottom",
							h_offset: 60,
							v_offset: -80
						}
					}
				},
				responsiveLevels: [1240, 1024, 778, 480],
				visibilityLevels: [1240, 1024, 778, 480],
				gridwidth: [1170, 1024, 1000, 480],
				gridheight: [590, 590, 590, 540],
				lazyType: "none",
				shadow: 0,
				spinner: "spinner0",
				stopLoop: "off",
				stopAfterLoops: -1,
				stopAtSlide: -1,
				shuffle: "off",
				autoHeight: "off",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	});

	var htmlDivCss = unescape("%23rev_slider_4_1_wrapper%20%7B%0A%20%20%20%20padding%3A%200%200%2065px%200%3B%0A%7D");
	var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
	if (htmlDiv) {
		htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
	} else {
		var htmlDiv = document.createElement('div');
		htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
		document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
	}


	var htmlDivCss = unescape(".hesperiden.tparrows%20%7B%0A%09cursor%3Apointer%3B%0A%09background%3Argba%280%2C0%2C0%2C0.5%29%3B%0A%09width%3A40px%3B%0A%09height%3A40px%3B%0A%09position%3Aabsolute%3B%0A%09display%3Ablock%3B%0A%09z-index%3A100%3B%0A%20%20%20%20border-radius%3A%2050%25%3B%0A%7D%0A.hesperiden.tparrows%3Ahover%20%7B%0A%09background%3Argba%280%2C%200%2C%200%2C%201%29%3B%0A%7D%0A.hesperiden.tparrows%3Abefore%20%7B%0A%09font-family%3A%20%22revicons%22%3B%0A%09font-size%3A20px%3B%0A%09color%3Argb%28255%2C%20255%2C%20255%29%3B%0A%09display%3Ablock%3B%0A%09line-height%3A%2040px%3B%0A%09text-align%3A%20center%3B%0A%7D%0A.hesperiden.tparrows.tp-leftarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce931%22%3B%0A%20%20%20%20margin-left%3A-3px%3B%0A%7D%0A.hesperiden.tparrows.tp-rightarrow%3Abefore%20%7B%0A%09content%3A%20%22%5Ce930%22%3B%0A%20%20%20%20margin-right%3A-3px%3B%0A%7D%0A");
	var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
	if (htmlDiv) {
		htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
	} else {
		var htmlDiv = document.createElement('div');
		htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
		document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
	}

	var setREVStartSize = function () {
		"use strict";
		try {
			var e = new Object,
				i = jQuery(window).width(),
				t = 9999,
				r = 0,
				n = 0,
				l = 0,
				f = 0,
				s = 0,
				h = 0;
			e.c = jQuery('#rev_slider_5_1');
			e.responsiveLevels = [1240, 1024, 778, 480];
			e.gridwidth = [1170, 1170, 1000, 480];
			e.gridheight = [590, 590, 590, 540];

			e.sliderLayout = "auto";
			if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) {
				f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
			}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
				var u = (e.c.width(), jQuery(window).height());
				if (void 0 != e.fullScreenOffsetContainer) {
					var c = e.fullScreenOffsetContainer.split(",");
					if (c) jQuery.each(c, function (e, i) {
						u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
					}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
				}
				f = u
			} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
			e.c.closest(".rev_slider_wrapper").css({
				height: f
			})

		} catch (d) {
			console.log("Failure at Presize of Slider:" + d)
		}
	};

	setREVStartSize();

	var tpj = jQuery;

	var revapi5;
	tpj(document).ready(function () {
		"use strict";
		if (tpj("#rev_slider_5_1").revolution == undefined) {
			revslider_showDoubleJqueryError("#rev_slider_5_1");
		} else {
			revapi5 = tpj("#rev_slider_5_1").show().revolution({
				sliderType: "standard",
				jsFileLocation: "//hradvisor.axiomthemes.com/wp-content/plugins/revslider/public/assets/js/",
				sliderLayout: "auto",
				dottedOverlay: "none",
				delay: 9000,
				navigation: {
					onHoverStop: "off",
				},
				responsiveLevels: [1240, 1024, 778, 480],
				visibilityLevels: [1240, 1024, 778, 480],
				gridwidth: [1170, 1170, 1000, 480],
				gridheight: [590, 590, 590, 540],
				lazyType: "none",
				shadow: 0,
				spinner: "spinner0",
				stopLoop: "off",
				stopAfterLoops: -1,
				stopAtSlide: -1,
				shuffle: "off",
				autoHeight: "off",
				disableProgressBar: "on",
				hideThumbsOnMobile: "off",
				hideSliderAtLimit: 0,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				debugMode: false,
				fallbacks: {
					simplifyAll: "off",
					nextSlideOnWindowFocus: "off",
					disableFocusListener: false,
				}
			});
		}
	});

}

