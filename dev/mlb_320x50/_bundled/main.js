(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _proline = require("./proline");

var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

var LEGAL_RETAIL = "Individuals must be 18 years of age or older to participate in in-store sports betting with PROLINE. Individuals must be a resident of Ontario. Terms and Conditions apply.";
var LEGAL_PLUS = "Individuals must be 19 years of age or older to participate in online sports betting with PROLINE+. Individuals must be a resident of Ontario. Terms and Conditions apply. ";
var legalString = universalBanner.name.includes("plus") ? LEGAL_PLUS : LEGAL_RETAIL;

document.getElementById("legalContent").innerHTML = legalString;

gsap.defaults({
	ease: "power3.out"
});

var w = size.w;
var h = size.h;

var nhl = {
	t1: 2.2,
	t2: 1.2,
	t3: 1
};

var nba = {
	t1: 3,
	t2: 1.2,
	t3: 1
};

var nhl_plus = {
	t1: 2.2,
	t2: 1.2,
	t3: 1
};

var nba_plus = {
	t1: 2.3,
	t2: 1.9,
	t3: 1
};

var mlb = {
	t1: 2.3,
	t2: 1.9,
	t3: 1
};

var READ = {
	nhl: nhl, nba: nba
};
READ["nba-plus"] = nba_plus;
READ["nhl-plus"] = nhl_plus;
READ["mlb"] = mlb;

READ = READ[universalBanner.name];

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });
	return tl;
}

function stag(vh) {
	return _extends({ duration: .3, opacity: 0, stagger: .1 }, vh);
}

function start_landscape() {
	var vh = arguments.length <= 0 || arguments[0] === undefined ? { x: -size.w } : arguments[0];

	var tl = init();
	tl.add("start");

	tl.from('.t1', stag(vh), "start+=.3");
	tl.from('.logo', { opacity: 0, duration: .3 });

	tl.to([".t1"], { duration: .3, opacity: 0 }, "+=" + READ.t1);
	tl.from('.t2', stag(vh), "+=.3");
	tl.to([".t2", ".bars", ".logo"], { duration: .3, opacity: 0 }, "+=" + READ.t1);

	tl.from(".end_txt1", { duration: .2, opacity: 0 });
	tl.add((0, _proline.olg)());

	tl.to(".end_txt1", { duration: .2, opacity: 0 }, "+=1");

	tl.from([".end_cta", ".legalBtn", ".end_logo", ".end_smart"], { duration: .3, opacity: 0 });
}

function start() {
	var boo = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	var vh = arguments.length <= 1 || arguments[1] === undefined ? { x: -size.w } : arguments[1];

	var tl = init();

	if (boo) {
		TweenLite.from(".hero img", { duration: 2.5, x: 0, y: 0, scale: .5, delay: .2, ease: "power2.in" });
	}

	tl.from('.t1', stag(vh), "start");
	tl.to('.t1', { duration: .3, opacity: 0 }, "+=" + READ.t1);

	tl.from('.t2', stag(vh));

	tl.to('.frame2', { opacity: 1, duration: .3 }, "+=" + READ.t2);

	tl.from('.end_logo', { duration: .3, opacity: 0 });

	tl.from('.end_txt1', { duration: .3, opacity: 0 });
	tl.from('.end_txt2', { duration: .3, opacity: 0 }, "+=.3");

	tl.from([".end_cta", ".end_smart"], { duration: .3, opacity: 0 });

	tl.add((0, _proline.olg)());
}

exports.size = size;
exports.init = init;
exports.start = start;
exports.start_landscape = start_landscape;
exports.olg = _proline.olg;

},{"./proline":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],3:[function(require,module,exports){
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commonJsCommonJs = require('../../_common/js/common.js');

var colors = ["00c748", "17cc46", "2ed145", "46d442", "5eda40", "76de3d", "8de23b", "a4e739", "bbeb37"];

var barOptions = {
	colors: colors,
	verHor: "v",
	TOTAL: 9,
	WIDTH: 8,
	HEIGHT: 360,
	GAP: 10,
	id: "bars"

};

var barOptions2 = _extends({}, barOptions, {
	id: "bars2"
});

(0, _commonJsCommonJs.start_landscape)({ y: _commonJsCommonJs.size.h });

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[3])


//# sourceMappingURL=main.js.map
