(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"pag24_atlas_", frames: [[1036,899,541,251],[1579,604,172,47],[1036,281,568,321],[1036,604,541,293],[1311,1152,290,47],[1035,0,711,279],[1606,281,148,47],[0,595,1034,592],[0,1189,1034,592],[0,0,1033,593],[1036,1318,424,90],[1748,49,70,87],[1748,0,148,47],[1036,1152,273,164]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Mapadebits10 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits11 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits12 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits13 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits14 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits15 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits16 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits17 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits18 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits8 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits9 = function() {
	this.spriteSheet = ss["pag24_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg4IgTAAIAAA4IgSAAIAAh/IAuAAQARAAAMAJQALAIAAATQAAALgIAKQgIAKgQACIAlA6gAgbgHIAXAAQAaAAAAgUQAAgVgaAAIgXAAg");
	this.shape.setTransform(55.8,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBAIgMggIg9AAIgMAgIgVAAIA5h/IAPAAIA3B/gAgXASIAvAAIgXg7IgBAAg");
	this.shape_1.setTransform(41.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAzQgOgOAAgVIAAhRIASAAIAABOQAAAGACAGQABAGADAGQAEAGAHADQAGAEAIAAQAIAAAHgEQAHgDADgGQAEgFACgGQACgGAAgHIAAhOIARAAIAABRQAAAUgOAPQgOAPgWAAQgVAAgOgPg");
	this.shape_2.setTransform(26.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBAIhGhpIgBAAIAABpIgRAAIAAh/IAXAAIBGBoIABAAIAAhoIARAAIAAB/g");
	this.shape_3.setTransform(11.4,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_4.setTransform(-0.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBAIAAhvIgpAAIAAgQIBjAAIAAAQIgpAAIAABvg");
	this.shape_5.setTransform(-9.8,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhBAIhGhpIgBAAIAABpIgRAAIAAh/IAXAAIBGBoIABAAIAAhoIARAAIAAB/g");
	this.shape_6.setTransform(-24,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape_7.setTransform(-40.7,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgEgMgBgMQAAgdATgTQASgUAeAAQAOAAALAFQANAGAHAJIgPALQgMgPgTAAQgUAAgNAPQgOAPAAAWQAAAVAOAPQAMAOAVAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_8.setTransform(-56.2,-0.1);

	this.instance = new lib.Mapadebits11();
	this.instance.parent = this;
	this.instance.setTransform(-86,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(-86,-23.5,172,47), null);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBBIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAIAAATQAAALgIAKQgIAKgQACIAlA7gAgbgHIAXAAQAaAAAAgUQAAgVgaAAIgXAAg");
	this.shape.setTransform(37.9,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBBIgOghIg7AAIgOAhIgUAAIA5iAIAPAAIA3CAgAgYASIAwAAIgYg7IAAAAg");
	this.shape_1.setTransform(23.5,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BBIAAiAIAvAAQAPgBAOAGQANAGAHAJQAIAJAFALQADAMAAALQAAAcgTASQgUATgdAAgAgmAwIAXAAQAJAAAJgCQAJgDAIgGQAIgGAFgJQAEgKABgMQAAgTgNgOQgMgOgYAAIgbAAg");
	this.shape_2.setTransform(8.8,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBBIAAiAIARAAIAACAg");
	this.shape_3.setTransform(-2.6,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBBIAAiAIARAAIAABvIA6AAIAAARg");
	this.shape_4.setTransform(-10.9,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsBBIgOghIg8AAIgMAhIgVAAIA5iAIAPAAIA3CAgAgYASIAwAAIgXg7IgBAAg");
	this.shape_5.setTransform(-24.5,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBBIgxiAIATAAIAmBnIAAAAIAnhnIAUAAIg0CAg");
	this.shape_6.setTransform(-38.4,0.3);

	this.instance = new lib.Mapadebits8();
	this.instance.parent = this;
	this.instance.setTransform(-74,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(-74,-23.5,148,47), null);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8CDD0").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");
	this.shape.setTransform(-182.5,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgyA0QgWgWAAgeQAAgdAWgVQAVgWAdAAQAeAAAWAWQAUAVAAAdQAAAegUAWQgWAVgeAAQgdAAgVgVg");
	this.shape_1.setTransform(-182.5,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).wait(1));

	// Capa 2
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-212,-53,1,1.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212,-53,424,105);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHCNIAAg2IApAAIAAiUIgpATIgSgtIAWgLQALgFALgLQAMgJAPgRIBGAAIAADjIAmAAIAAA2g");
	this.shape.setTransform(-6.4,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhsCPIAAg6IATgeQAJgLAJgJIAWgTIAXgRIAXgQQAKgIAHgIQAIgIAAgJQgBgPgJgGQgKgGgOAAQgLAAgIAFQgJAFgIAHIgNAOIgrguQAUgZAbgMQAbgNAeAAQAbAAAVALQAWAKANAUQAMAUAAAbQAAAXgHAPQgHAPgOALQgPAMgVANIgXAQIgVAUQgLAKgFAJIBGAAIAAghIBEAAIAABWg");
	this.shape_1.setTransform(-6.4,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguCLQgTgGgOgKQgPgLgIgMIAqgqQAKALAMAHQANAIARAAQARgBAJgHQAKgIgBgQQAAgQgJgGQgIgHgPAAIgeAAIAAgvIAeAAQANAAAKgHQAKgHgBgOQAAgKgEgIQgGgHgIgDQgIgDgHAAQgMAAgNAGQgMAHgLALIgngwQAHgIANgJQAOgIARgGQAQgHAUAAQAfAAAXAKQAXALAMAUQAMATAAAaQAAAOgFAJQgGAKgGAHIgMALQAGAFAIAHQAJAJAHANQAGANABASQgBAXgJAQQgJARgQALQgRALgTAGQgUAFgUAAQgUAAgSgHg");
	this.shape_2.setTransform(-6.4,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTCNIAAg1IAYAAIAAgaIhzAAIAAg6IBziQIBUAAIAACeIAVAAIAAAsIgVAAIAAAaIAWAAIAAA1gAg1ASIA6AAIAAhKg");
	this.shape_3.setTransform(-6.7,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxCIQgVgGgPgMQgQgLgJgMIAsguQAMANAOAIQANAJASAAQATAAANgLQALgMAAgRQAAgRgLgLQgMgLgRAAQgNAAgKAFQgJAGgGAHIgzgWIAYiLICfAAIAAA8IhsAAIgGAnQAGgEALgCQALgDAOAAQAZAAAUALQAWALANAVQAOAUABAfQgBAagLATQgKATgRANQgRANgWAGQgVAHgWAAQgUgBgTgHg");
	this.shape_4.setTransform(-6.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Capa 2
	this.instance = new lib.Mapadebits4();
	this.instance.parent = this;
	this.instance.setTransform(-35,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-43,70,87);


(lib.Símbolo13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAJQgIAKgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(32.7,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBAIgMgfIg8AAIgOAfIgUAAIA5iAIAPAAIA3CAgAgXARIAvAAIgYg6IAAAAg");
	this.shape_1.setTransform(18.3,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_2.setTransform(7.5,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgFgMABgMQAAgdASgTQATgUAcAAQAOAAAMAFQAMAGAIAJIgOALQgNgPgTAAQgUAAgOAPQgNAPAAAWQAAAVANAPQANAOAVAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_3.setTransform(-3,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_4.setTransform(-13.9,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiBAIhHhoIAAAAIAABoIgSAAIAAiAIAXAAIBGBqIAAAAIAAhqIASAAIAACAg");
	this.shape_5.setTransform(-25.5,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_6.setTransform(-37.1,-0.3);

	this.instance = new lib.Mapadebits16();
	this.instance.parent = this;
	this.instance.setTransform(-74,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(-74,-23.5,148,47), null);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape.setTransform(108.8,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBAIgxh/IAUAAIAlBnIAAAAIAnhnIAUAAIgzB/g");
	this.shape_1.setTransform(93.8,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBAIAAh/IBSAAIAAAQIhBAAIAAAnIA8AAIAAAPIg8AAIAAApIBEAAIAAAQg");
	this.shape_2.setTransform(81.1,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAzQgOgOAAgVIAAhRIARAAIAABOQAAAGACAGQACAGADAGQAEAGAGADQAHAEAIAAQAJAAAGgEQAHgDAEgGQADgFABgGQACgGAAgHIAAhOIASAAIAABRQAAAUgOAPQgOAPgWAAQgVAAgOgPg");
	this.shape_3.setTransform(66.9,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBAIhHhpIAAAAIAABpIgSAAIAAh/IAXAAIBGBpIAAAAIAAhpIASAAIAAB/g");
	this.shape_4.setTransform(51.5,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBAIAAh/IBSAAIAAAQIhBAAIAAAnIA8AAIAAAPIg8AAIAAApIBEAAIAAAQg");
	this.shape_5.setTransform(30.4,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3BAIAAh/IAuAAQAPgBANAGQAOAGAHAJQAIAKAFAKQADAMAAALQAAAcgUASQgTASgdAAgAgmAwIAXAAQAJAAAJgDQAJgCAIgGQAIgFAFgKQAEgKAAgMQAAgTgMgOQgNgOgXAAIgbAAg");
	this.shape_6.setTransform(16.2,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape_7.setTransform(-7.1,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBAIAAh/IARAAIAABvIA6AAIAAAQg");
	this.shape_8.setTransform(-20.4,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArBAIgNgfIg8AAIgMAfIgVAAIA5h/IAPAAIA3B/gAgXASIAvAAIgXg7IgBAAg");
	this.shape_9.setTransform(-34.1,-0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIBAIAAhvIgpAAIAAgQIBjAAIAAAQIgpAAIAABvg");
	this.shape_10.setTransform(-47.5,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAiBAIhHhpIAAAAIAABpIgSAAIAAh/IAXAAIBGBpIAAAAIAAhpIASAAIAAB/g");
	this.shape_11.setTransform(-61.8,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqBRIAAiAIBSAAIAAARIhBAAIAAAlIA8AAIAAARIg8AAIAAApIBEAAIAAAQgAgPg2IASgaIAXAAIgaAag");
	this.shape_12.setTransform(-76,-2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBAIAAhvIgpAAIAAgQIBjAAIAAAQIgpAAIAABvg");
	this.shape_13.setTransform(-89,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAhBAIhGhpIgBAAIAABpIgRAAIAAh/IAXAAIBGBpIABAAIAAhpIARAAIAAB/g");
	this.shape_14.setTransform(-103.2,-0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_15.setTransform(-114.8,-0.5);

	this.instance = new lib.Mapadebits14();
	this.instance.parent = this;
	this.instance.setTransform(-145,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(-145,-23.5,290,47), null);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20512").s().p("Ag8BwQgVgQgJggIA4gNQACAOAKAIQAJAIANAAQARAAAKgLQAKgKAAgRQAAgQgJgJQgIgJgNgEQgNgEgOABQgNAAgNACQgOACgMAFIACiKICYAAIAAAvIhjAAIgBAmIAKgCIAMAAQAZAAAUAKQATAKALASQAMASgBAaQAAAdgMAUQgNAUgVAKQgVALgbAAQgiAAgWgQg");
	this.shape.setTransform(38.4,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgtB2QgSgMgLgSQgKgUgEgXQgFgXABgWQgBgWAFgXQAEgWAKgUQALgTASgLQASgMAbAAQAcAAASAMQATALAKATQAKAUAFAWQAEAXAAAWQAAAWgEAXQgFAXgKAUQgKASgTAMQgSAMgcABQgbgBgSgMgAgVhHQgJAIgDANQgEANgBAOIgBAXIABAYQABAOAEANQADANAJAIQAIAJANAAQAPAAAIgJQAIgIAEgNQAEgNABgOIAAgYIAAgXQgBgOgEgNQgEgNgIgIQgIgJgPAAQgNAAgIAJg");
	this.shape_1.setTransform(17.7,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20512").s().p("AhJCFIBqkVIApAMIhqEVg");
	this.shape_2.setTransform(-0.1,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20512").s().p("AgtB2QgSgMgLgSQgKgUgEgXQgFgXABgWQgBgWAFgXQAEgWAKgUQALgTASgLQASgMAbAAQAcAAASAMQATALAKATQAKAUAFAWQAEAXAAAWQAAAWgEAXQgFAXgKAUQgKASgTAMQgSAMgcABQgbgBgSgMgAgVhHQgJAIgDANQgEANgBAOIgBAXIABAYQABAOAEANQADANAJAIQAIAJANAAQAPAAAIgJQAIgIAEgNQAEgNABgOIAAgYIAAgXQgBgOgEgNQgEgNgIgIQgIgJgPAAQgNAAgIAJg");
	this.shape_3.setTransform(-17.9,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20512").s().p("AgtB2QgSgMgLgSQgKgUgEgXQgFgXABgWQgBgWAFgXQAEgWAKgUQALgTASgLQASgMAbAAQAcAAASAMQATALAKATQAKAUAFAWQAEAXAAAWQAAAWgEAXQgFAXgKAUQgKASgTAMQgSAMgcABQgbgBgSgMgAgVhHQgJAIgDANQgEANgBAOIgBAXIABAYQABAOAEANQADANAJAIQAIAJANAAQAPAAAIgJQAIgIAEgNQAEgNABgOIAAgYIAAgXQgBgOgEgNQgEgNgIgIQgIgJgPAAQgNAAgIAJg");
	this.shape_4.setTransform(-38.9,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20512").s().p("AAPB+IAAi/IgyAsIgegiIBRhGIAyAAIAAD7g");
	this.shape_5.setTransform(-19.6,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20512").s().p("AhXCAIAAg4IBhhXIAKgKQAFgFADgHQAEgGABgHQgBgOgJgHQgJgHgNAAQgNAAgJAJQgIAJgBAOIg2gEQACgaALgRQANgRATgJQATgIAYAAQAYAAARAIQATAJALARQALAQAAAaQgBAYgIAPQgKAPgPAMIhLBCIBvAAIAAAvg");
	this.shape_6.setTransform(-17.8,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20512").s().p("AgoB8QgTgIgNgOQgMgOgGgXIA4gNQADAOAJAHQAJAIAQAAQARAAAJgJQAIgJAAgOQAAgOgHgHQgIgFgLgCQgLgBgLgBIgNAAIAAgtIARAAQAJAAAKgBQAIgDAHgGQAFgGABgMQgBgLgIgHQgJgIgOAAQgLAAgIAHQgJAGgCALIg7gNQAGgVANgOQANgNASgHQASgFAVAAQAXgBATAIQATAHAMAQQAMAQABAYQgBAVgLAPQgLAPgVAEIAAABQAQACAKAIQALAIAFAMQAGANgBAPQAAAZgMARQgMARgVAIQgUAJgZAAQgVgBgTgGg");
	this.shape_7.setTransform(-18.2,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20512").s().p("AANB+IAAgzIhtAAIAAgtIBmibIA7AAIAACbIAgAAIAAAtIggAAIAAAzgAgqAeIA3AAIAAhUIAAgBIAAAAg");
	this.shape_8.setTransform(-17.9,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20512").s().p("Ag7BwQgWgQgJggIA4gNQADAOAJAIQAJAIANAAQARAAAKgLQAKgKAAgRQAAgQgJgJQgIgJgOgEQgLgEgPABQgNAAgNACQgNACgNAFIACiKICYAAIAAAvIhjAAIgBAmIAKgCIAMAAQAZAAAUAKQATAKALASQALASAAAaQAAAdgMAUQgMAUgWAKQgWALgaAAQgiAAgVgQg");
	this.shape_9.setTransform(-18.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:-17.9}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_5},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_7},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_8},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_9},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.4,-23.2,102.9,46.5);


(lib.Símbolo8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYBAIggg4IgTAAIAAA4IgSAAIAAh/IAuAAQARAAAMAJQALAIAAATQAAALgIAKQgIAKgQACIAlA6gAgbgHIAXAAQAaAAAAgUQAAgVgaAAIgXAAg");
	this.shape_9.setTransform(55.8,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBAIgMggIg9AAIgMAgIgVAAIA5h/IAPAAIA3B/gAgXASIAvAAIgXg7IgBAAg");
	this.shape_10.setTransform(41.4,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjAzQgOgOAAgVIAAhRIASAAIAABOQAAAGACAGQABAGADAGQAEAGAHADQAGAEAIAAQAIAAAHgEQAHgDADgGQAEgFACgGQACgGAAgHIAAhOIARAAIAABRQAAAUgOAPQgOAPgWAAQgVAAgOgPg");
	this.shape_11.setTransform(26.8,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAhBAIhGhpIgBAAIAABpIgRAAIAAh/IAXAAIBGBoIABAAIAAhoIARAAIAAB/g");
	this.shape_12.setTransform(11.4,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_13.setTransform(-0.2,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIBAIAAhvIgpAAIAAgQIBjAAIAAAQIgpAAIAABvg");
	this.shape_14.setTransform(-9.8,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhBAIhGhpIgBAAIAABpIgRAAIAAh/IAXAAIBGBoIABAAIAAhoIARAAIAAB/g");
	this.shape_15.setTransform(-24,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape_16.setTransform(-40.7,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgEgMgBgMQAAgdATgTQASgUAeAAQAOAAALAFQANAGAHAJIgPALQgMgPgTAAQgUAAgNAPQgOAPAAAWQAAAVAOAPQAMAOAVAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_17.setTransform(-56.2,-0.1);

	this.instance_1 = new lib.Mapadebits11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-86,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo8_1, new cjs.Rectangle(-86,-23.5,172,47), null);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAKQgIAJgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(55.8,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBAIgMgfIg9AAIgMAfIgVAAIA5iAIAPAAIA3CAgAgXARIAvAAIgXg6IgBAAg");
	this.shape_1.setTransform(41.4,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAzQgOgOAAgVIAAhRIASAAIAABOQAAAGACAGQABAGADAGQAEAGAHADQAGAEAIAAQAIAAAHgEQAHgDADgGQAEgFACgGQACgGAAgHIAAhOIARAAIAABRQAAAUgOAPQgOAPgWAAQgVAAgOgPg");
	this.shape_2.setTransform(26.8,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBAIhGhoIgBAAIAABoIgRAAIAAiAIAXAAIBGBqIABAAIAAhqIARAAIAACAg");
	this.shape_3.setTransform(11.4,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_4.setTransform(-0.2,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBAIAAhvIgpAAIAAgRIBjAAIAAARIgpAAIAABvg");
	this.shape_5.setTransform(-9.8,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhBAIhGhoIgBAAIAABoIgRAAIAAiAIAXAAIBGBqIABAAIAAhqIARAAIAACAg");
	this.shape_6.setTransform(-24,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape_7.setTransform(-40.7,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgEgMgBgMQAAgdATgTQASgUAeAAQAOAAALAFQANAGAHAJIgPALQgMgPgTAAQgUAAgNAPQgOAPAAAWQAAAVAOAPQAMAOAVAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_8.setTransform(-56.2,-0.6);

	this.instance = new lib.Mapadebits11();
	this.instance.parent = this;
	this.instance.setTransform(-86,-24);

	this.instance_1 = new lib.Símbolo8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-24,172,47);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAKQgIAJgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(37.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBAIgOgfIg7AAIgOAfIgUAAIA5iAIAPAAIA3CAgAgYARIAwAAIgYg6IAAAAg");
	this.shape_1.setTransform(23.5,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BAIAAiAIAvAAQAPABAOAFQANAGAHAJQAIAKAFALQADALAAALQAAAcgTASQgUASgdAAgAgmAwIAXAAQAJAAAJgDQAJgDAIgFQAIgGAFgJQAEgJABgNQAAgTgNgOQgMgOgYAAIgbAAg");
	this.shape_2.setTransform(8.8,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_3.setTransform(-2.6,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBAIAAiAIARAAIAABwIA6AAIAAAQg");
	this.shape_4.setTransform(-10.9,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsBAIgOgfIg8AAIgMAfIgVAAIA5iAIAPAAIA3CAgAgYARIAwAAIgXg6IgBAAg");
	this.shape_5.setTransform(-24.5,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBAIgxiAIATAAIAmBpIAAAAIAnhpIAUAAIg0CAg");
	this.shape_6.setTransform(-38.4,-0.2);

	this.instance = new lib.Mapadebits8();
	this.instance.parent = this;
	this.instance.setTransform(-74,-24);

	this.instance_1 = new lib.Símbolo5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-24,148,47);


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBBIggg6IgTAAIAAA6IgSAAIAAiBIAuAAQARABAMAIQALAKAAARQAAAMgIALQgIAJgQACIAlA7gAgbgGIAXAAQAaAAAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(32.7,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBBIgMghIg8AAIgOAhIgUAAIA5iBIAPAAIA3CBgAgXASIAvAAIgYg7IAAAAg");
	this.shape_1.setTransform(18.3,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_2.setTransform(7.5,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgFgMABgMQAAgdASgTQATgUAcAAQAOAAAMAFQAMAGAIAJIgOALQgNgPgTAAQgUAAgOAPQgNAPAAAWQAAAVANAPQANAOAVAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_3.setTransform(-3,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_4.setTransform(-13.9,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiBBIhHhqIAAAAIAABqIgSAAIAAiBIAXAAIBGBpIAAAAIAAhpIASAAIAACBg");
	this.shape_5.setTransform(-25.5,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_6.setTransform(-37.1,-0.8);

	this.instance = new lib.Mapadebits16();
	this.instance.parent = this;
	this.instance.setTransform(-74,-24);

	this.instance_1 = new lib.Símbolo13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-24,148,47);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape.setTransform(108.8,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBBIgxiBIAUAAIAlBpIAAAAIAnhpIAUAAIgzCBg");
	this.shape_1.setTransform(93.8,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBBIAAiBIBSAAIAAARIhBAAIAAAmIA8AAIAAAQIg8AAIAAApIBEAAIAAARg");
	this.shape_2.setTransform(81.1,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAzQgOgOAAgVIAAhRIARAAIAABOQAAAGACAGQACAGADAGQAEAGAGADQAHAEAIAAQAJAAAGgEQAHgDAEgGQADgFABgGQACgGAAgHIAAhOIASAAIAABRQAAAUgOAPQgOAPgWAAQgVAAgOgPg");
	this.shape_3.setTransform(66.9,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBBIhHhpIAAAAIAABpIgSAAIAAiBIAXAAIBGBpIAAAAIAAhpIASAAIAACBg");
	this.shape_4.setTransform(51.5,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBBIAAiBIBSAAIAAARIhBAAIAAAmIA8AAIAAAQIg8AAIAAApIBEAAIAAARg");
	this.shape_5.setTransform(30.4,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3BBIAAiBIAuAAQAPABANAFQAOAGAHAJQAIAKAFALQADALAAALQAAAcgUASQgTASgdABgAgmAwIAXAAQAJAAAJgDQAJgDAIgFQAIgFAFgKQAEgJAAgNQAAgTgMgOQgNgOgXAAIgbAAg");
	this.shape_6.setTransform(16.2,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape_7.setTransform(-7.1,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglBBIAAiBIARAAIAABwIA6AAIAAARg");
	this.shape_8.setTransform(-20.4,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArBBIgNggIg8AAIgMAgIgVAAIA5iBIAPAAIA3CBgAgXARIAvAAIgXg6IgBAAg");
	this.shape_9.setTransform(-34.1,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIBBIAAhwIgpAAIAAgRIBjAAIAAARIgpAAIAABwg");
	this.shape_10.setTransform(-47.5,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAiBBIhHhpIAAAAIAABpIgSAAIAAiBIAXAAIBGBpIAAAAIAAhpIASAAIAACBg");
	this.shape_11.setTransform(-61.8,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqBRIAAiAIBSAAIAAARIhBAAIAAAlIA8AAIAAARIg8AAIAAApIBEAAIAAAQgAgPg2IASgaIAXAAIgaAag");
	this.shape_12.setTransform(-76,-2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBBIAAhwIgpAAIAAgRIBjAAIAAARIgpAAIAABwg");
	this.shape_13.setTransform(-89,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAhBBIhGhpIgBAAIAABpIgRAAIAAiBIAXAAIBGBpIABAAIAAhpIARAAIAACBg");
	this.shape_14.setTransform(-103.2,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_15.setTransform(-114.8,-1);

	this.instance = new lib.Mapadebits14();
	this.instance.parent = this;
	this.instance.setTransform(-145,-24);

	this.instance_1 = new lib.Símbolo11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-24,290,47);


(lib.Símbolo7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAKQgIAJgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape_9.setTransform(55.8,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArBAIgMgfIg9AAIgMAfIgVAAIA5iAIAPAAIA3CAgAgXARIAvAAIgXg6IgBAAg");
	this.shape_10.setTransform(41.4,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgjAzQgOgOAAgVIAAhRIASAAIAABOQAAAGACAGQABAGADAGQAEAGAHADQAGAEAIAAQAIAAAHgEQAHgDADgGQAEgFACgGQACgGAAgHIAAhOIARAAIAABRQAAAUgOAPQgOAPgWAAQgVAAgOgPg");
	this.shape_11.setTransform(26.8,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAhBAIhGhoIgBAAIAABoIgRAAIAAiAIAXAAIBGBqIABAAIAAhqIARAAIAACAg");
	this.shape_12.setTransform(11.4,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_13.setTransform(-0.2,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIBAIAAhvIgpAAIAAgRIBjAAIAAARIgpAAIAABvg");
	this.shape_14.setTransform(-9.8,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAhBAIhGhoIgBAAIAABoIgRAAIAAiAIAXAAIBGBqIABAAIAAhqIARAAIAACAg");
	this.shape_15.setTransform(-24,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape_16.setTransform(-40.7,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgEgMgBgMQAAgdATgTQASgUAeAAQAOAAALAFQANAGAHAJIgPALQgMgPgTAAQgUAAgNAPQgOAPAAAWQAAAVAOAPQAMAOAVAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_17.setTransform(-56.2,-0.6);

	this.instance_2 = new lib.Mapadebits11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-86,-24);

	this.instance_3 = new lib.Símbolo8_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,-0.5);
	this.instance_3.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-24,172,47);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.btn_start = new lib.Símbolo12();
	this.btn_start.parent = this;
	this.btn_start.setTransform(0,86.2);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 1);

	this.btn_next = new lib.Símbolo7_1();
	this.btn_next.parent = this;
	this.btn_next.setTransform(0,88.2);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 1);

	this.btn_retry = new lib.Símbolo10();
	this.btn_retry.parent = this;
	this.btn_retry.setTransform(0,69.4);
	new cjs.ButtonHelper(this.btn_retry, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_start}]}).to({state:[{t:this.btn_next}]},1).to({state:[{t:this.btn_retry}]},1).wait(1));

	// Capa 4
	this.mc_score = new lib.Símbolo9();
	this.mc_score.parent = this;
	this.mc_score.setTransform(0,-137.1);
	this.mc_score._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_score).wait(1).to({_off:false},0).wait(2));

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20512").s().p("AAXBGIAAhDIgBgPQgBgIgEgGQgFgGgKAAQgLAAgFAFQgFAFgCAIQgCAIAAAIIAABEIgqAAIAAiHIApAAIAAASIABAAQACgFAGgFQAFgFAIgDQAHgEAKAAQAVAAALAJQALAIAEAPQADAOABATIAABKg");
	this.shape.setTransform(62.2,-106.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgmBcQgRgJgKgQQgJgQgBgWQABgWAJgPQAKgQARgIQASgJAUAAQAVAAARAJQASAIAKAQQAKAPgBAWQABAWgKAQQgKAQgSAJQgRAJgVAAQgUAAgSgJgAgYAEQgIAKgBAPQABAQAIAJQAJAJAPABQAQgBAIgJQAJgJAAgQQAAgPgJgKQgIgIgQAAQgPAAgJAIgAgbg8IAbgoIA5AAIgwAog");
	this.shape_1.setTransform(45.7,-109.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20512").s().p("AgUBmIAAiHIApAAIAACHgAgQg7QgHgHAAgKQAAgLAHgGQAHgHAJgBQALABAGAHQAHAGAAALQAAAKgHAHQgGAHgLAAQgJAAgHgHg");
	this.shape_2.setTransform(33.4,-109.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20512").s().p("AgYA+QgRgIgKgQQgJgQgBgWQABgVAJgQQAKgQARgJQASgIAUgBQAMABANAEQANAEAKAJIgcAeQgCgEgGgDQgFgDgHAAQgPgBgJAKQgJAKAAAOQAAAPAJAKQAJAJAPAAQAHAAAFgCQAFgDADgFIAcAdQgKAKgNAFQgNADgMAAQgUAAgSgJg");
	this.shape_3.setTransform(23.6,-106.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20512").s().p("AgoBDQgLgFgGgKQgIgJABgNQAAgSAJgKQAJgJAOgFQAPgDAQgCIAcgBQgBgLgHgHQgIgFgLgBQgJAAgJAEQgIAEgIAIIgVgWQALgMAQgFQAQgGAPAAQAZAAANAJQAOAIAFAPQAGAQgBAXIAABEIgmAAIAAgRIgBAAQgHALgLAFQgLAEgNAAQgNAAgLgEgAAFAJQgHABgGACQgHABgEAEQgFAEAAAHQAAAFADADQADAEAEABQAFACAEAAQAIAAAHgDQAIgDAEgFQAEgGABgJIAAgJIgKAAIgMABg");
	this.shape_4.setTransform(8.6,-106.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20512").s().p("AguA9QgLgIgEgPQgEgOABgTIAAhKIAqAAIAABDQgBAHABAIQACAIAEAGQAFAFALABQAJAAAGgFQAFgFACgIQACgIAAgIIAAhEIAqAAIAACHIgpAAIAAgSIAAAAQgDAFgFAFQgGAFgIADQgHAEgKAAQgVAAgLgJg");
	this.shape_5.setTransform(-6.8,-106.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20512").s().p("AgUBqIAAjTIApAAIAADTg");
	this.shape_6.setTransform(-18.4,-110.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20512").s().p("AgoBDQgLgFgGgKQgIgJAAgNQABgSAJgKQAJgJAPgFQAOgDAPgCIAcgBQABgLgIgHQgIgFgLgBQgKAAgIAEQgJAEgGAIIgXgWQAMgMAPgFQAQgGAQAAQAYAAAOAJQANAIAGAPQAGAQAAAXIAABEIgoAAIAAgRIAAAAQgHALgMAFQgKAEgNAAQgNAAgLgEgAAFAJQgHABgGACQgHABgFAEQgEAEAAAHQAAAFADADQADAEAFABQAEACAFAAQAHAAAIgDQAGgDAFgFQAFgGgBgJIAAgJIgKAAIgLABg");
	this.shape_7.setTransform(-29.8,-106.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20512").s().p("AgUBEIg4iHIAtAAIAiBbIAAAAIAghbIAqAAIg1CHg");
	this.shape_8.setTransform(-44.9,-106.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20512").s().p("AhFBjIAAjFICGAAIAAAoIhaAAIAAAkIBVAAIAAAoIhVAAIAAAoIBfAAIAAApg");
	this.shape_9.setTransform(-61.2,-109.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_10.setTransform(-8.3,34.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAHABIAIgBIAHgDIACAPQgJADgNAAIgKAAg");
	this.shape_11.setTransform(-18.9,33.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_12.setTransform(-29.8,34.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_13.setTransform(-42.9,34.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_14.setTransform(-52.5,32);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_15.setTransform(-63,31.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_16.setTransform(-76.9,34.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAIAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgIQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_17.setTransform(-90.5,34.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIALgHQAHgDAGgBIAKgBQANAAAMAEQAKAFAIAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgIAIgKAEQgMAFgNAAIgKgBIgNgEIgLgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgCAJAAAJQAAAJACAJQAEAIAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgIQAEgJAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_18.setTransform(-104.5,38);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_19.setTransform(-117.3,34.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_20.setTransform(-129.1,34.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_21.setTransform(-138.7,34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_22.setTransform(-146.7,34.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAIAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgIQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_23.setTransform(-158.8,34.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_24.setTransform(-171.3,34.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_25.setTransform(-191,34.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEAKgIAIQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAFQgGAFgCAJQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgJgFgFQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_26.setTransform(-204.6,32);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_27.setTransform(-214.6,32);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_28.setTransform(-222.9,34.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_29.setTransform(-235.6,34.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEAMAAIAKAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_30.setTransform(-249.1,37.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_31.setTransform(-262.8,34.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_32.setTransform(-276.4,34.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAIAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgIQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_33.setTransform(-296.6,34.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_34.setTransform(278.8,5.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEAKgIAIQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAGQgGAEgCAJQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgJgFgEQgGgGgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_35.setTransform(265.2,3.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_36.setTransform(255.2,3.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_37.setTransform(247,5.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_38.setTransform(234.3,5.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAGQgEAFgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_39.setTransform(217.9,5.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_40.setTransform(205,5.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_41.setTransform(197.1,3.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgNBcIAAhhIgXAAIAAgOIAXAAIAAgfQAAgWALgKQAJgJARAAIAGAAIAHACIgCAOIgHgBIgGgBQgGAAgEACQgEADgCAEIgEAJIAAALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_42.setTransform(191.2,2.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_43.setTransform(180.6,5.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_44.setTransform(161.5,5.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_45.setTransform(152.7,2.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_46.setTransform(136.6,5.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_47.setTransform(123.8,5.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAIAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgIQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_48.setTransform(110.2,5.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_49.setTransform(100.2,3.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_50.setTransform(92,5.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_51.setTransform(80.4,5.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_52.setTransform(67.6,5.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_53.setTransform(58,2.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_54.setTransform(48.5,5.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_55.setTransform(36.8,5.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFADAHAAQAIgBAFgEQAFgGADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_56.setTransform(19.2,8.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_57.setTransform(0.2,5.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AAGBIQgFgBgDgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_58.setTransform(-9.6,4.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_59.setTransform(-20.5,5.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_60.setTransform(-33.7,6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEAMAAIAKAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_61.setTransform(-48,8.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_62.setTransform(-61.7,5.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_63.setTransform(-71.3,5.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIALgHQAFgDAGgBIALgBQANAAALAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgDAJAAAJQAAAJADAJQADAIAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGADgIQADgJAAgJQAAgJgDgJQgDgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_64.setTransform(-83.2,9.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_65.setTransform(-104.1,5.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_66.setTransform(-112.9,2.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_67.setTransform(-129.1,5.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_68.setTransform(-139.7,4.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_69.setTransform(-150.6,5.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_70.setTransform(-163.8,5.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAGQgEAFgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_71.setTransform(-180.9,5.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_72.setTransform(-197.4,5.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AAGBIQgGgBgCgEQgFgCgCgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_73.setTransform(-207.3,4.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_74.setTransform(-218.2,5.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_75.setTransform(-231.3,5.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AAGBIQgGgBgCgEQgFgCgCgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_76.setTransform(-241.9,4.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_77.setTransform(-252.5,5.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_78.setTransform(-271.7,5.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_79.setTransform(-285.1,5.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AgvBVIAAipIARAAIAACZIBOAAIAAAQg");
	this.shape_80.setTransform(-296.6,3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_81.setTransform(288.2,-18.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgPBVIAAhvIAPAAIAABvgAgWgyIAXgiIAWAAIgeAig");
	this.shape_82.setTransform(282.8,-25.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_83.setTransform(272.4,-22.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AAsBcIAAhYIAAAAQgFAGgEAEIgMAHIgMAEIgLABQgMAAgLgFQgLgEgIgIQgIgIgEgJQgFgMAAgMQAAgNAFgLQAEgKAIgJQAIgHALgFQALgEAMAAIALABQAGABAGADIAMAHQAEADAFAHIAAAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgFAGgEAIQgCAJAAAJQAAAJACAIQAEAJAFAGQAGAFAHADQAIADAJAAQAKAAAIgDQAIgDAGgFQAGgGADgJQAEgIAAgJQAAgJgEgJQgDgIgGgGQgGgGgIgEQgIgDgKAAQgJAAgIADg");
	this.shape_84.setTransform(258.1,-19.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_85.setTransform(244.6,-22.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_86.setTransform(225.5,-22.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AAGBIQgGgBgCgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIAEAGQABADADAAIAHABIAIgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_87.setTransform(215.6,-24.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADABAFQAAAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_88.setTransform(206.6,-22.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_89.setTransform(194.9,-22.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AAgBbIAAg+QAAgTgGgKQgHgJgRAAIgGABQgFABgGAEQgGAEgGAIQgEAJAAAPIAAA6IgQAAIAAi1IAQAAIAABXIAAAAIAHgIIAJgHIALgEIAKgBQAVAAALALQAKALAAAVIAABHg");
	this.shape_90.setTransform(182.2,-26.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_91.setTransform(161.8,-22.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_92.setTransform(147,-26.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_93.setTransform(137.2,-25.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAEAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgEAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_94.setTransform(126.6,-26.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_95.setTransform(112.8,-23);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_96.setTransform(99.6,-22.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_97.setTransform(90,-23);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQAEgHAFgDIAKgHQAHgDAFgBIALgBQAOAAAKAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgFgEgEgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgJQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_98.setTransform(78.1,-19.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_99.setTransform(63.8,-22.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgHABIgIADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_100.setTransform(46.2,-22.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_101.setTransform(34.5,-22.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AAgBbIAAg+QAAgTgGgKQgHgJgRAAIgGABQgGABgFAEQgHAEgEAIQgGAJAAAPIAAA6IgPAAIAAi1IAPAAIAABXIABAAIAHgIIAJgHIAKgEIALgBQAVAAALALQAKALAAAVIAABHg");
	this.shape_102.setTransform(21.8,-26.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_103.setTransform(1.9,-22.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgLACQgVAAgLgMg");
	this.shape_104.setTransform(-11.5,-22.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AAsBcIAAhYIAAAAQgFAGgEAEIgMAHIgMAEIgLABQgNAAgLgFQgKgEgIgIQgIgIgEgJQgFgMAAgMQAAgNAFgLQAEgKAIgJQAIgHAKgFQALgEANAAIALABQAHABAFADIAMAHQAEADAFAHIAAAAIAAgTIAQAAIAAC0gAgRhKQgIAEgFAGQgGAGgDAIQgDAJAAAJQAAAJADAIQADAJAGAGQAFAFAIADQAIADAJAAQAKAAAIgDQAIgDAGgFQAGgGADgJQAEgIAAgJQAAgJgEgJQgDgIgGgGQgGgGgIgEQgIgDgKAAQgJAAgIADg");
	this.shape_105.setTransform(-25.8,-19.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_106.setTransform(-46.5,-22.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_107.setTransform(-56.5,-26.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_108.setTransform(-73.2,-22.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_109.setTransform(-88,-26.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_110.setTransform(-102.1,-22.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AAGBIQgFgBgDgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_111.setTransform(-113.1,-24.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_112.setTransform(-130.7,-23);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_113.setTransform(-144.3,-22.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_114.setTransform(-156.8,-22.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_115.setTransform(-174.6,-22.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_116.setTransform(-186.3,-22.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_117.setTransform(-199.9,-26.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_118.setTransform(-213.4,-22.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_119.setTransform(-226.2,-23);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_120.setTransform(-239.8,-22.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_121.setTransform(-249.8,-25.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_122.setTransform(-258.1,-22.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_123.setTransform(-270.8,-22.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_124.setTransform(-279.6,-26.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_125.setTransform(-289.1,-22.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_126.setTransform(-298.7,-23);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFAAgJQAAgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_127.setTransform(282.1,-51.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_128.setTransform(270.4,-51.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#111111").s().p("AAGBIQgGgBgCgEQgEgCgDgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQABADADAAIAHABIAJgBIAIgEIAAAQQgJADgMAAIgJgBg");
	this.shape_129.setTransform(260.5,-53.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_130.setTransform(249.6,-51.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIABANIgQAAIgBgJIAAgJIgHAIQgEAEgFADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_131.setTransform(236.4,-51.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_132.setTransform(222.2,-49);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_133.setTransform(208.5,-51.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_134.setTransform(198.9,-51.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIAMgHQAFgDAHgBIAKgBQAOAAALAEQALAFAHAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgHAIgLAEQgLAFgOAAIgKgBIgMgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgEAJAAAJQAAAJAEAIQADAJAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAHgDAHgFQAFgGADgJQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_135.setTransform(186.9,-48.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_136.setTransform(165.9,-51.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_137.setTransform(151.5,-55);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_138.setTransform(131.2,-51.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_139.setTransform(121.7,-54.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_140.setTransform(115.9,-51.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_141.setTransform(104.2,-51.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAIgEAHQgDAGgGAFQgGAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_142.setTransform(92.5,-51.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_143.setTransform(74.1,-51.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_144.setTransform(61.3,-51.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_145.setTransform(48.1,-51.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_146.setTransform(29.8,-51.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_147.setTransform(17.5,-51.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_148.setTransform(0,-51.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_149.setTransform(-16.7,-51.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_150.setTransform(-30.3,-51.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_151.setTransform(-43.9,-51.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIAKgHQAGgDAGgBIALgBQAOAAAKAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAJAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAIgDAFgFQAGgGACgJQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgEQgIgDgKAAQgJAAgIADg");
	this.shape_152.setTransform(-57.9,-48.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_153.setTransform(-72.8,-51.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_154.setTransform(-82.8,-51.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIAMgHQAFgDAHgBIAKgBQAOAAALAEQALAFAHAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgHAIgLAEQgLAFgOAAIgKgBIgMgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgEAJAAAJQAAAJAEAIQADAJAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAHgDAHgFQAFgGADgJQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_155.setTransform(-94.8,-48.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_156.setTransform(-115.8,-51.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#111111").s().p("AAFBIQgFgBgDgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAHABIAIgBIAHgEIACAQQgJADgNAAIgKgBg");
	this.shape_157.setTransform(-126.4,-53.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_158.setTransform(-140.4,-45.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_159.setTransform(-150.6,-51.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEAKgIAIQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAFQgGAFgCAJQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgJgFgFQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_160.setTransform(-164.2,-54.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_161.setTransform(-174.2,-54.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_162.setTransform(-182.5,-51.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_163.setTransform(-195.2,-51.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIAAANIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_164.setTransform(-207.8,-51.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_165.setTransform(-221.3,-51.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_166.setTransform(-230.7,-54.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_167.setTransform(-237.5,-53.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_168.setTransform(-248.4,-51.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_169.setTransform(-262,-51.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_170.setTransform(-274.5,-51.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#111111").s().p("AA+BVIgTgtIhVAAIgTAtIgUAAIBKipIAPAAIBKCpgAgkAZIBJAAIglhZg");
	this.shape_171.setTransform(-295.5,-54.6);

	this.instance = new lib.Mapadebits15();
	this.instance.parent = this;
	this.instance.setTransform(-356,-140);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_172.setTransform(192.6,32.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_173.setTransform(182.1,28);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_174.setTransform(148.2,24.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#111111").s().p("AgXBSQgLgFgIgHQgIgJgEgKQgFgLAAgNQAAgMAFgLQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFALAAAMQAAANgFALQgEAKgIAJQgIAHgLAFQgLAFgNAAQgMAAgLgFgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAKAEAIQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgIAAgKQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgDgKgBQgJABgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_175.setTransform(134.1,25.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAIIgBAPIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWAAAKALQAKALAAAVIAABGg");
	this.shape_176.setTransform(116.6,27.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_177.setTransform(93.2,28);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#111111").s().p("AAGBJQgFgCgDgEQgEgDgDgGQgDgFAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgDIABAOQgIAFgNAAIgJgBg");
	this.shape_178.setTransform(82.6,26.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_179.setTransform(71.7,27.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_180.setTransform(58.6,28);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_181.setTransform(49,25.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgEADQgFADgGABIgKACQgWAAgLgMg");
	this.shape_182.setTransform(39.4,28.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQADgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_183.setTransform(25.2,30.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_184.setTransform(15.3,25.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgEgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQAEQAMACAHAHQAJAJgBALQABAJgEAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_185.setTransform(7.4,28);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_186.setTransform(-16.7,28);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgEQADgDAGgBQAFgCAIAAIAMABIgDAPQgDgBgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_187.setTransform(-32.2,27.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_188.setTransform(-43.8,28);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#111111").s().p("AgsA4IAAgLIBBhWIg+AAIAAgOIBUAAIAAALIhBBWIBEAAIAAAOg");
	this.shape_189.setTransform(-54.8,28);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_190.setTransform(-66.8,27.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_191.setTransform(-79.8,28);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_192.setTransform(-91.4,28);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_193.setTransform(-103.8,28);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgOgEIgHgCQgGgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgOAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQAMACAIAHQAHAJAAALQAAAJgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_194.setTransform(-121.4,28);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_195.setTransform(-133.2,28);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_196.setTransform(-147.6,24.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_197.setTransform(-161.2,28);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_198.setTransform(-174.6,28.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQADgFAGgFIALgGQAGgDAFgBIALgBQANAAALAFQALADAIAJQAIAHAFALQAEALAAANQAAAMgEALQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBIgLgEIgLgHQgGgEgDgFIgBAAIAABXgAgRhJQgIADgGAGQgGAGgDAJQgDAHgBAKQABAJADAJQADAIAGAFQAGAFAIAEQAJAEAIAAQAKAAAIgEQAHgEAHgFQAFgFADgIQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgDQgIgEgKAAQgIAAgJAEg");
	this.shape_199.setTransform(-188.2,31.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_200.setTransform(160.8,-0.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFADAHgBQAIAAAFgEQAFgGADgJIAJgWIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAIQgIAHgOAAIgIAAg");
	this.shape_201.setTransform(149.1,2.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_202.setTransform(123.1,-0.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#111111").s().p("AgXBSQgLgFgIgHQgIgJgEgKQgFgLAAgNQAAgMAFgLQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFALAAAMQAAANgFALQgEAKgIAJQgIAHgLAFQgLAFgNAAQgMAAgLgFgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAKAEAIQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgIAAgKQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgDgKgBQgJABgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_203.setTransform(109.5,-3.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_204.setTransform(99.5,-3.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_205.setTransform(78.6,-0.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgLACQgVAAgLgMg");
	this.shape_206.setTransform(65.9,-0.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_207.setTransform(47,-0.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_208.setTransform(35.4,-0.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_209.setTransform(22.9,-0.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_210.setTransform(3,-0.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_211.setTransform(-22.4,-0.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_212.setTransform(-37.2,-4.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_213.setTransform(-50.7,-0.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIALgHQAHgDAGgBIAKgBQANAAAMAFQAKAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_214.setTransform(-63.6,-4.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_215.setTransform(-78.4,-0.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgEQADgDAGgBQAFgCAIAAIAMABIgDAPQgDgBgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_216.setTransform(-88.5,-0.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQADgFAGgFIALgGQAGgDAFgBIALgBQANAAALAFQALADAIAJQAIAHAFALQAEALAAANQAAAMgEALQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBIgLgEIgLgHQgGgEgDgFIgBAAIAABXgAgRhKQgIAEgGAGQgGAGgDAJQgDAHgBAKQABAJADAJQADAIAGAFQAGAFAIAEQAJAEAIAAQAKAAAIgEQAHgEAHgFQAFgFADgIQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgEQgIgDgKAAQgIAAgJADg");
	this.shape_217.setTransform(-100.4,2.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_218.setTransform(-114.7,-0.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAFAJAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgOgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQAMACAHAHQAIAJAAALQAAAJgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_219.setTransform(-132.3,-0.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_220.setTransform(-144,-0.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#111111").s().p("AAuBVIAAhQIhbAAIAABQIgSAAIAAipIASAAIAABKIBbAAIAAhKIARAAIAACpg");
	this.shape_221.setTransform(-158.6,-3.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#B20512").s().p("AggBPQgOgFgLgKIAZgcQAGAHAIAFQAIADAJAAQAFABAGgCQAFgCAEgEQADgDAAgGQAAgIgFgEQgFgEgJgDIgRgFQgJgEgJgEQgJgFgFgIQgGgIABgNQgBgRAKgLQAIgMANgGQAOgGAQAAQANAAAMAEQANADALAKIgZAaQgEgFgHgDQgIgCgGAAQgFAAgFABQgFABgEAEQgEAEAAAGQAAAHAFAEQAGAEAHACIASAGQAJADAJAFQAIAEAFAIQAGAJAAAOQgBARgIAMQgIAMgOAFQgOAGgQAAQgPAAgOgFg");
	this.shape_222.setTransform(133.8,-100.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#B20512").s().p("AAsBQIgOgiIg9AAIgNAiIgnAAIBFifIAcAAIBGCfgAASAQIgSgwIgUAwIAmAAg");
	this.shape_223.setTransform(119.2,-100.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#B20512").s().p("AgRBQIAAiAIgtAAIAAgfIB9AAIAAAfIgtAAIAACAg");
	this.shape_224.setTransform(106.4,-100.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#B20512").s().p("AgdBKQgUgKgLgUQgLgSAAgaQAAgZALgTQALgSAUgLQATgKAYAAQAJAAAKACQAKADAJAEQAJAGAHAJIgbAVQgFgFgIgEQgHgEgKABQgNgBgKAHQgKAHgGALQgGAMAAAOQAAAPAGALQAGAMAKAHQAKAGAMAAQALAAAIgEQAIgEAGgJIAdAXQgHAJgJAGQgJAGgLADQgLADgLAAQgYAAgTgKg");
	this.shape_225.setTransform(92.4,-100.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B20512").s().p("Ag4BQIAAifIBtAAIAAAgIhJAAIAAAeIBEAAIAAAfIhEAAIAAAiIBNAAIAAAgg");
	this.shape_226.setTransform(77.6,-100.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#B20512").s().p("AAWBQIgghAIgSAAIAABAIgjAAIAAifIA+AAQAPAAAOAEQANAEAJAMQAIAKAAATQAAAQgIAMQgKALgQAEIAoBDgAgcgNIAVAAQAHAAAFAAQAHgBAEgFQAFgDABgIQgBgJgEgDQgEgEgGgCQgHgCgFABIgXAAg");
	this.shape_227.setTransform(63.6,-100.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#B20512").s().p("AAWBQIghhAIgRAAIAABAIgjAAIAAifIA9AAQAQAAAOAEQANAEAJAMQAIAKAAATQAAAQgIAMQgKALgRAEIApBDgAgcgNIAVAAQAGAAAGAAQAHgBAEgFQAFgDABgIQAAgJgFgDQgEgEgGgCQgGgCgGABIgXAAg");
	this.shape_228.setTransform(49,-100.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#B20512").s().p("AgrBKQgUgKgLgUQgLgSAAgaQAAgZALgTQALgSAUgLQATgKAYAAQAZAAATAKQAUALALASQALATAAAZQAAAagLASQgLAUgUAKQgTAKgZAAQgYAAgTgKgAgZgsQgMAHgFALQgHAMAAAOQAAAPAHALQAFAMAMAHQALAGAOAAQAPAAALgGQAMgHAFgMQAHgLAAgPQAAgOgHgMQgFgLgMgHQgLgHgPABQgOgBgLAHg");
	this.shape_229.setTransform(31.5,-100.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#B20512").s().p("AgdBKQgUgKgLgUQgLgSAAgaQAAgZALgTQALgSAUgLQATgKAYAAQAJAAAKACQAKADAJAEQAJAGAHAJIgbAVQgFgFgIgEQgHgEgKABQgNgBgKAHQgKAHgGALQgGAMAAAOQAAAPAGALQAGAMAKAHQAKAGAMAAQALAAAIgEQAIgEAGgJIAdAXQgHAJgJAGQgJAGgLADQgLADgLAAQgYAAgTgKg");
	this.shape_230.setTransform(14.6,-100.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#B20512").s().p("AggBPQgNgFgMgKIAagcQAFAHAIAFQAIADAJAAQAFABAFgCQAGgCAEgEQADgDABgGQgBgIgFgEQgGgEgIgDIgRgFQgJgEgJgEQgIgFgGgIQgGgIABgNQAAgRAJgLQAIgMANgGQAOgGAPAAQAOAAAMAEQANADALAKIgZAaQgEgFgHgDQgIgCgGAAQgGAAgEABQgFABgEAEQgEAEAAAGQAAAHAFAEQAGAEAHACIASAGQAJADAJAFQAIAEAFAIQAGAJAAAOQAAARgJAMQgIAMgPAFQgNAGgQAAQgQAAgNgFg");
	this.shape_231.setTransform(-6.8,-100.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#B20512").s().p("AAsBQIgOgiIg9AAIgNAiIgnAAIBFifIAcAAIBGCfgAASAQIgSgwIgUAwIAmAAg");
	this.shape_232.setTransform(-21.4,-100.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#B20512").s().p("AgRBQIAAiAIgtAAIAAgfIB9AAIAAAfIgtAAIAACAg");
	this.shape_233.setTransform(-34.2,-100.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B20512").s().p("AggBPQgNgFgMgKIAZgcQAGAHAIAFQAIADAJAAQAFABAGgCQAFgCAEgEQAEgDgBgGQABgIgGgEQgGgEgIgDIgRgFQgKgEgIgEQgIgFgGgIQgFgIgBgNQAAgRAJgLQAJgMANgGQAOgGAQAAQANAAANAEQAMADAKAKIgXAaQgFgFgHgDQgHgCgHAAQgFAAgEABQgGABgEAEQgEAEAAAGQAAAHAGAEQAFAEAHACIASAGQAKADAHAFQAJAEAGAIQAEAJAAAOQAAARgIAMQgJAMgNAFQgOAGgQAAQgPAAgOgFg");
	this.shape_234.setTransform(-47.4,-100.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#B20512").s().p("Ag3BQIAAifIBsAAIAAAgIhJAAIAAAeIBEAAIAAAfIhEAAIAAAiIBMAAIAAAgg");
	this.shape_235.setTransform(-60.4,-100.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#B20512").s().p("AgkBKQgPgJgIgPQgHgOAAgUIAAhhIAjAAIAABgQAAAKAEAHQAEAJAHAEQAIAEAIAAQAJAAAIgEQAHgEAEgJQAEgHAAgKIAAhgIAjAAIAABhQAAAUgHAOQgIAPgPAJQgPAIgWAAQgVAAgPgIg");
	this.shape_236.setTransform(-76.2,-100.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#B20512").s().p("Ag7BQIAAifIA7AAQAQAAAOAEQANAFAJAKQAIALAAATQAAASgIALQgHAJgOAFQgOAFgRgBIgYAAIAAA/gAgYgLIAXAAQAGAAAFgCQAGgCADgEQAFgEAAgHQgBgJgFgDQgEgEgHgCQgHgCgGABIgSAAg");
	this.shape_237.setTransform(-91.2,-100.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#B20512").s().p("AggBPQgNgFgLgKIAZgcQAFAHAIAFQAIADAJAAQAFABAFgCQAGgCAEgEQAEgDAAgGQAAgIgGgEQgFgEgJgDIgRgFQgJgEgJgEQgJgFgFgIQgGgIAAgNQABgRAIgLQAJgMAOgGQAOgGAOAAQAOAAAMAEQANADALAKIgYAaQgFgFgHgDQgHgCgHAAQgGAAgDABQgGABgEAEQgEAEAAAGQAAAHAFAEQAGAEAHACIASAGQAKADAHAFQAJAEAFAIQAFAJABAOQAAARgJAMQgJAMgOAFQgNAGgQAAQgQAAgNgFg");
	this.shape_238.setTransform(-105.6,-100.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#B20512").s().p("Ag3BQIAAifIBrAAIAAAgIhIAAIAAAeIBFAAIAAAfIhFAAIAAAiIBMAAIAAAgg");
	this.shape_239.setTransform(-118.6,-100.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B20512").s().p("AAWBQIghhAIgRAAIAABAIgjAAIAAifIA9AAQARAAANAEQAOAEAHAMQAJAKAAATQAAAQgJAMQgJALgRAEIApBDgAgcgNIAVAAQAHAAAFAAQAHgBAEgFQAFgDAAgIQAAgJgDgDQgFgEgGgCQgHgCgFABIgXAAg");
	this.shape_240.setTransform(-132.6,-100.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#B20512").s().p("AgQBWQgHgHAAgKQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgTAeIAAh6IAmAAIAAB6g");
	this.shape_241.setTransform(88,-40.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B20512").s().p("AgeA/QgNgEgKgKIAYgaQAGAHAGADQAHAEAJAAQAFAAAFgCQAGgCAAgFQAAgGgHgDIgPgEIgUgGQgJgDgHgHQgGgHAAgPQAAgOAHgKQAIgJAMgFQAMgEAMAAQANAAAMADQANAEAJAJIgXAYQgFgFgFgDQgHgDgHAAQgEAAgEADQgEACAAAGQAAAFAGADQAGACAJACQAKACAKAEQAKADAGAHQAHAIAAAOQAAAMgFAIQgGAIgIAFQgIAEgLACQgKACgJAAIgDAAQgMAAgMgDg");
	this.shape_242.setTransform(76.2,-38);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#B20512").s().p("AgdA6QgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQATAAANAIQANAIAHAPQAIAPAAATIAAAMIhaAAQADAMAHAGQAIAHALAAQAJAAAHgEQAHgFAEgHIAcAVQgKALgOAHQgOAGgQAAQgSAAgQgIgAAagNQAAgKgHgHQgHgHgKAAQgIAAgGADQgGAEgDAFQgDAGgBAGIAzAAIAAAAg");
	this.shape_243.setTransform(62.8,-38);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#B20512").s().p("AAWBBIAAg+IgBgOQgBgIgEgFQgFgFgKAAQgJAAgFAEQgFAFgBAHQgCAIAAAHIAAA/IgnAAIAAh+IAmAAIAAASIAAAAQADgGAFgEQAFgFAHgDQAGgDAKAAQATAAALAIQAKAIADANQAEAOAAARIAABFg");
	this.shape_244.setTransform(47.9,-38.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B20512").s().p("AgiA6QgQgIgKgPQgJgPAAgUQAAgTAJgPQAKgPAQgIQAPgIATAAQAUAAAQAIQAQAIAJAPQAJAPAAATQAAAUgJAPQgJAPgQAIQgQAIgUAAQgTAAgPgIgAgWgWQgIAJAAANQAAAPAIAIQAIAJAOAAQAPAAAIgJQAIgIAAgPQAAgNgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_245.setTransform(32.5,-38);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#B20512").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgGgGgBgKQABgJAGgGQAGgHAJAAQAKAAAGAHQAGAGABAJQgBAKgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_246.setTransform(21.2,-41.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#B20512").s().p("AAMBCQgSAAgQgIQgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQAMAAAMAEQAMADAJAKIgZAbQgDgFgFgCQgFgDgHAAQgNAAgIAJQgJAJABANQgBAPAJAIQAIAJANAAQAHAAAFgDQAFgCADgFIAZAcQgJAJgMAEQgLADgKAAIgDAAg");
	this.shape_247.setTransform(12,-38);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#B20512").s().p("AgPBCQgMAAgKgEQgKgEgGgJQgHgJAAgNQAAgQAJgJQAJgIANgEQANgEAPgBIAagBQAAgLgIgGQgHgGgKAAQgJAAgIAEQgIAEgGAHIgVgVQALgKAPgFQAOgFAPAAQAXAAAMAHQANAIAFAOQAFAPAAAVIAAA/IgkAAIAAgQIgBAAQgGALgLAEQgJAEgLAAIgCAAgAAEAIIgMADQgGABgEAEQgEAEAAAGQAAAFADADQACADAFABQAEACAEAAQAHAAAHgDQAGgCAEgGQAFgFAAgIIAAgIIgKAAIgLAAg");
	this.shape_248.setTransform(-1.9,-38);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#B20512").s().p("AgBBQQgKgEgGgJQgGgIAAgNIAAg8IgZAAIAAgfIAZAAIAAglIAmAAIAAAlIAiAAIAAAfIgiAAIAAAqIABALQABAGAEADQAEADAIAAIAIgBQAFgBADgCIAAAhQgGACgHABIgOAAQgNAAgKgDg");
	this.shape_249.setTransform(-14.2,-39.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#B20512").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgGgGgBgKQABgJAGgGQAGgHAJAAQAKAAAGAHQAGAGABAJQgBAKgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_250.setTransform(-22.7,-41.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#B20512").s().p("AAMBCQgSAAgQgIQgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQAMAAAMAEQAMADAJAKIgZAbQgDgFgFgCQgGgDgGAAQgNAAgJAJQgHAJAAANQAAAPAHAIQAJAJANAAQAHAAAFgDQAEgCAEgFIAZAcQgJAJgMAEQgLADgKAAIgDAAg");
	this.shape_251.setTransform(-31.8,-38);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#B20512").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgGgGgBgKQABgJAGgGQAGgHAJAAQAKAAAGAHQAGAGABAJQgBAKgGAGQgGAHgKAAQgJAAgGgHg");
	this.shape_252.setTransform(-42,-41.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#B20512").s().p("AgTBiIAAjDIAnAAIAADDg");
	this.shape_253.setTransform(-48.7,-41.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#B20512").s().p("AgdA6QgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQATAAANAIQANAIAHAPQAIAPAAATIAAAMIhaAAQADAMAHAGQAIAHALAAQAJAAAHgEQAHgFAEgHIAcAVQgKALgOAHQgOAGgQAAQgSAAgQgIgAAagNQAAgKgHgHQgHgHgKAAQgIAAgGADQgGAEgDAFQgDAGgBAGIAzAAIAAAAg");
	this.shape_254.setTransform(-59.5,-38);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#B20512").s().p("Ag9BcIAAi3IB7AAIAAAlIhSAAIAAAmIBLAAIAAAkIhLAAIAABIg");
	this.shape_255.setTransform(-74.2,-40.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#B20512").s().p("AgTBdIAAh7IAmAAIAAB7gAgQgzQgHgGAAgLQAAgKAHgHQAHgGAJgBQAKABAHAGQAHAHAAAKQAAALgHAGQgHAHgKAAQgJAAgHgHg");
	this.shape_256.setTransform(-88.2,-35.2);

	this.instance_1 = new lib.Mapadebits12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-274,-198);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_257.setTransform(166.4,-2.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_258.setTransform(156.2,-7.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgMQAAgOAFgKQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFAKAAAOQAAAMgFALQgEALgIAHQgIAJgLAEQgLAFgNgBQgMABgLgFgAgRgNQgIAEgFAFQgGAGgCAIQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgIgFgGQgGgFgIgEQgHgEgKABQgJgBgIAEgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_259.setTransform(142.6,-9.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_260.setTransform(132.6,-9.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_261.setTransform(111.6,-7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_262.setTransform(80.1,-7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#111111").s().p("AgIA4IguhvIAUAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_263.setTransform(68.4,-7.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_264.setTransform(55.9,-7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_265.setTransform(36.1,-7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_266.setTransform(10.6,-7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_267.setTransform(-17.7,-7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIALgHQAGgDAHgBIAKgBQAOAAALAFQALAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgDAIAAAJQAAAJADAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGACgIQAEgJAAgJQAAgJgEgIQgCgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_268.setTransform(-30.5,-10.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_269.setTransform(-45.4,-7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_270.setTransform(-55.4,-7.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIABAAQADgFAGgEIAKgHQAGgDAGgBIALgBQAOAAAKAEQALAEAIAIQAIAJAFALQAEAKAAANQAAANgEALQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgGgEgDgGIgBAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAIAGAHQAGAEAIAEQAIADAJAAQAKAAAIgDQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_271.setTransform(-67.4,-3.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_272.setTransform(-81.6,-7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_273.setTransform(-99.2,-7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_274.setTransform(-110.9,-7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_275.setTransform(-144,-7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#111111").s().p("AAxBVIhkiRIgBAAIAACRIgRAAIAAipIAVAAIBlCPIAAAAIAAiPIARAAIAACpg");
	this.shape_276.setTransform(-160.4,-9.9);

	this.instance_2 = new lib.Mapadebits13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-271,-170);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164,p:{x:-207.8,y:-51.6}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158,p:{x:-140.4,y:-45.6}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117,p:{x:-199.9,y:-26.2}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107,p:{x:-56.5,y:-26.4}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102,p:{x:21.8,y:-26.4}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:-112.9,y:2.4}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:58,y:2.4}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:152.7,y:2.4}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:-171.3,y:34.7}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_107,p:{x:-5.8,y:-4.3}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_66,p:{x:56.4,y:-4.3}},{t:this.shape_206},{t:this.shape_205},{t:this.shape_24,p:{x:91.3,y:-0.8}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_158,p:{x:133.3,y:5.3}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198,p:{x:-174.6,y:28.1}},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_53,p:{x:-7.3,y:24.5}},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_164,p:{x:162.5,y:28.1}},{t:this.shape_45,p:{x:172.1,y:24.5}},{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.instance_2},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_276},{t:this.shape_275},{t:this.shape_102,p:{x:-123.6,y:-10.5}},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_117,p:{x:-4.2,y:-10.4}},{t:this.shape_266},{t:this.shape_53,p:{x:27.3,y:-10.5}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_45,p:{x:89.5,y:-10.5}},{t:this.shape_198,p:{x:99,y:-6.9}},{t:this.shape_261},{t:this.shape_24,p:{x:124.3,y:-7.1}},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257}]},1).wait(1));

	// Fondo
	this.instance_3 = new lib.Mapadebits9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-517,-296,3.827,3.664);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517,-296,1044.7,600.9);


(lib.Símbolo15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Button
	this.btn_next = new lib.Símbolo7();
	this.btn_next.parent = this;
	this.btn_next.setTransform(-1.3,87.8);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_next).wait(5));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape.setTransform(179.9,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_1.setTransform(173.7,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_2.setTransform(164.3,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_3.setTransform(155.5,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgFAEgEQADgEAFgEQADgCAGgCQAFgDAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_4.setTransform(149.7,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgDgCgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAHABIAJgBIAIgEIABAPQgKAEgMAAIgKgBg");
	this.shape_5.setTransform(140.7,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgDQgFgCgDgGQgDgGAAgHQAAgJADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgGgEQgFgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGAEQAFADALADIAQAEQALACAIAIQAJAHgBAMQAAAKgDAGQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_6.setTransform(131.7,4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIAAANIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_7.setTransform(119.8,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAEAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgEAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_8.setTransform(105.5,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_9.setTransform(91.6,4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgIBVIAAipIARAAIAACpg");
	this.shape_10.setTransform(82,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_11.setTransform(64.5,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_12.setTransform(51,4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAHABAGADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_13.setTransform(37.4,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_14.setTransform(27.6,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgFAEgEQADgEAFgEQADgCAGgCQAFgDAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_15.setTransform(21.8,4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_16.setTransform(10,4.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_17.setTransform(-4.2,7.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_18.setTransform(-17.9,4.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAGANgBQAGAAAGgCQAHgBAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgMAFgKQAEgIAIgGQAIgHAKgCQAJgEAKAAQAOAAAMAGQAMAEAKAMIgPALQgMgRgVAAQgGAAgGACQgHACgFAEQgFAEgDAGQgDAFAAAIQAAAMAGAGQAHAGAJAFIAUAHQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAHQgIAFgKAEQgKADgJAAQgQABgOgHg");
	this.shape_19.setTransform(-31.3,1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_20.setTransform(-51.3,4.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_21.setTransform(-65.6,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_22.setTransform(-85.8,4.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_23.setTransform(-102.1,4.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_24.setTransform(-118.7,4.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgFAEgEQADgEAFgEQADgCAGgCQAFgDAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_25.setTransform(-127.5,4.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgEgKgBgMQABgNAEgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAFAGAIAEQAHADAJAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_26.setTransform(-140.2,7.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_27.setTransform(-154.3,4.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgFADgEQADgEAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_28.setTransform(-164.4,4.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPAMAAAXQAAAWgPAMQgPAKgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgDAFgEQAFgDACgGQACgGAAgFQAAgHgCgFQgCgFgFgFQgFgEgIgCQgIgCgLAAIgbAAg");
	this.shape_29.setTransform(-175.6,1.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_30.setTransform(193.7,-30.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_31.setTransform(184.2,-27.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_32.setTransform(169.8,-30.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_33.setTransform(149.3,-27.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEAKgIAIQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAFQgGAFgCAJQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgJgFgFQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_34.setTransform(135.7,-30.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_35.setTransform(125.7,-30.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_36.setTransform(117.5,-27.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_37.setTransform(104.4,-27.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AglAuQgLgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAJAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_38.setTransform(91.2,-27.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgNBcIAAhhIgYAAIAAgOIAYAAIAAgfQAAgWALgKQAJgJARAAIAHAAIAGACIgDAOIgGgBIgFgBQgHAAgEACQgEADgCAEIgEAJIAAALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_39.setTransform(81.6,-31);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_40.setTransform(64.3,-27.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_41.setTransform(55.5,-30.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADABAFQAAAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_42.setTransform(41,-27.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_43.setTransform(29.1,-27.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_44.setTransform(8.7,-27.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_45.setTransform(-5.3,-27.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_46.setTransform(-21.3,-30.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgXBVQgGgCgGgFQgFgEgDgGQgEgHAAgIQAAgNAHgIQAHgIALgDQALgFALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgQAfgBQAIAAAIACQAHADAGAFQAFAFADAHQAEAIAAAJIAAAyIAAAOIACAMIgQAAIgBgJIAAgJQgHAKgKAGQgJAEgNAAQgIAAgHgBgAAHAcIgQADQgJADgGAEQgGAFAAAIQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgGQACgHAAgHIAAgIIgIAAIgPAAgAgKgzIAXgiIAVAAIgfAig");
	this.shape_47.setTransform(-30.7,-30.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_48.setTransform(-43.4,-27.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_49.setTransform(-55.4,-27.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_50.setTransform(-75.3,-27.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_51.setTransform(-85.4,-27.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_52.setTransform(-96.9,-27.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_53.setTransform(-105.7,-30.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_54.setTransform(-114,-27.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_55.setTransform(-131.8,-27.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_56.setTransform(-143.7,-27.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_57.setTransform(-157.2,-27.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_58.setTransform(-170.4,-27.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_59.setTransform(-179.9,-30.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICCAAIAAAQIg4AAIAACZg");
	this.shape_60.setTransform(-189.7,-30.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B20512").s().p("AgQBWQgHgHAAgKQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgTAeIAAh6IAmAAIAAB6g");
	this.shape_61.setTransform(63,-90);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B20512").s().p("AAWBBIAAg+IgBgOQgBgIgEgFQgFgFgKAAQgJAAgFAEQgFAFgBAHQgCAIAAAHIAAA/IgnAAIAAh+IAmAAIAAASIAAAAQADgGAFgEQAFgFAHgDQAGgDAKAAQATAAALAIQAKAIADANQAEAOAAARIAABFg");
	this.shape_62.setTransform(49.8,-87.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B20512").s().p("AgdA6QgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQATAAANAIQANAIAHAPQAIAPAAATIAAAMIhaAAQADAMAHAGQAIAHALAAQAJAAAHgEQAHgFAEgHIAcAVQgKALgOAHQgOAGgQAAQgSAAgQgIgAAagNQAAgKgHgHQgHgHgKAAQgIAAgGADQgGAEgDAFQgDAGgBAGIAzAAIAAAAg");
	this.shape_63.setTransform(34.9,-87.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B20512").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgGgGgBgKQABgKAGgGQAGgGAJAAQAKAAAGAGQAGAGABAKQgBAKgGAGQgGAGgKABQgJgBgGgGg");
	this.shape_64.setTransform(24,-90.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B20512").s().p("AgJBhQgIgDgFgFQgGgEgDgFIAAAAIAAARIgkAAIAAjEIAmAAIAABUIABAAQAGgJALgEQALgEALAAQASABANAJQANAJAGAPQAIAPAAASQgBATgHAPQgIAOgNAJQgPAIgSAAQgJAAgHgDgAgXAKQgIAJAAAPQAAAOAIAJQAHAIAPABQAOgBAJgIQAHgJABgOQgBgPgHgJQgJgIgOAAQgPAAgHAIg");
	this.shape_65.setTransform(12.9,-90.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B20512").s().p("Ag1BdIgOgDIAFggIAJACIAJABQAJAAAEgCQAFgCADgFIAFgMIADgHIg3h/IAqAAIAfBUIABAAIAbhUIAoAAIg5CSIgHASQgEAIgEAGQgGAFgJADQgIACgOAAIgPgBg");
	this.shape_66.setTransform(-10.7,-84);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B20512").s().p("AgrA5QgKgIgEgNQgDgOAAgRIAAhFIAnAAIAAA+QAAAHABAHQABAIAEAFQAEAFAKABQAJAAAFgFQAFgFACgHQACgHAAgIIAAg/IAnAAIAAB+IgmAAIAAgRIAAAAQgDAFgFAEQgFAFgHADQgHADgJAAQgUAAgKgIg");
	this.shape_67.setTransform(-25.3,-87);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B20512").s().p("AA/BcIAAiMIAAAAIgwCMIgeAAIgviMIAAAAIAACMIgpAAIAAi3IA9AAIAqB3IAAAAIArh3IA9AAIAAC3g");
	this.shape_68.setTransform(-45.1,-90);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B20512").s().p("AgTBdIAAh6IAmAAIAAB6gAgQgzQgHgGAAgLQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAALgHAGQgHAHgKAAQgJAAgHgHg");
	this.shape_69.setTransform(-63.1,-84.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_70.setTransform(132.2,18.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAFAJAAIAJgBQAFgCAEgCQAEgCACgEQACgEAAgEQAAgIgGgFQgHgDgIgCIgOgEIgJgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgEgGgGgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQADQALADAIAHQAJAJAAALQAAAJgFAHQgDAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_71.setTransform(123.8,14.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_72.setTransform(112.1,14.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_73.setTransform(103.3,11.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_74.setTransform(82,14);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_75.setTransform(68.9,14.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgKgEgJgHQgIgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAFAGAIAEQAIADAIAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_76.setTransform(54.6,16.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQACgFADgEQADgEAFgEQADgDAGgBQAGgCAHAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_77.setTransform(44.6,14);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_78.setTransform(32.9,14.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAHIgBAQIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgLAKgGQALgFALAAQAWAAAKALQAKALAAAWIAABFg");
	this.shape_79.setTransform(15.8,14);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAOIhRAAIAABBIBaAAIAAAQg");
	this.shape_80.setTransform(-0.7,11.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_81.setTransform(-21.8,14.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_82.setTransform(-36.1,10.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_83.setTransform(-56.6,14);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_84.setTransform(-69.6,14.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPALAAAXQAAAXgPAMQgPAKgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgDAFgEQAFgEACgFQACgGAAgGQAAgFgCgGQgCgFgFgEQgFgFgIgCQgIgCgLAAIgbAAg");
	this.shape_85.setTransform(-87.5,11.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_86.setTransform(-114.2,14.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgYA2QgKgFgIgMIANgJQAFAHAIAFQAGAFAKAAIAJgBQAFgCAEgCQAEgCACgEQACgEAAgEQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgDADAAAEQAAAIAGAEQAFADALADIAQADQALADAJAHQAHAJABALQAAAJgFAHQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_87.setTransform(220.4,-14.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_88.setTransform(208.5,-14.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIAMABQAFABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgLAEIgMABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_89.setTransform(194.2,-18);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_90.setTransform(180.7,-14.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_91.setTransform(167.1,-18);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_92.setTransform(157.2,-17.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgIA4IgthvIATAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_93.setTransform(148.6,-14.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_94.setTransform(139.9,-17.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AAFBJQgEgCgDgEQgEgCgDgHQgDgFAAgKIAAhFIgYAAIAAgPIAYAAIAAggIAPAAIAAAgIAgAAIAAAPIggAAIAABBIABAKIADAGQADACADABIAHABIAHgBIAIgDIABAOQgJAFgMAAIgKgBg");
	this.shape_95.setTransform(133.1,-16.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_96.setTransform(111,-14.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAFAKAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgEgGgGgFQgFgEgJAAIgIABIgHADIgGAGQgBADAAAEQgBAIAGAEQAFADALADIAQADQALADAIAHQAJAJgBALQAAAJgDAHQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_97.setTransform(93.4,-14.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_98.setTransform(81.7,-14.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_99.setTransform(56.5,-14.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_100.setTransform(42.9,-14.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAFAKAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgEgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQADQAMADAHAHQAJAJgBALQABAJgEAHQgEAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_101.setTransform(30.8,-14.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_102.setTransform(11.8,-14.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_103.setTransform(-2.2,-14.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAFAJAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgGgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFAEQAFADALADIAQADQAMADAHAHQAJAJgBALQAAAJgDAHQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_104.setTransform(-20.3,-14.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_105.setTransform(-32.2,-14.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgXBVQgGgDgGgEQgFgEgDgGQgEgGAAgJQAAgNAHgIQAHgIALgEQALgEALAAIAWgBIAIAAIAAgEQAAgcgdAAQgSAAgPAOIgKgMQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAIAAAJIAAAzIAAANIACALIgQAAIgBgJIAAgJQgHAMgKAEQgJAGgNAAQgIAAgHgCgAAHAcIgQADQgJADgGAEQgGAFAAAJQAAAFADAEQACAEAEADQAEACAEABIAKABQAIAAAGgDQAGgDAFgFQAEgEACgHQACgHAAgHIAAgJIgIAAIgPABgAgKgzIAXgiIAVAAIgfAig");
	this.shape_106.setTransform(-51.1,-17.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAFAJAAIAJgBQAFgCAEgCQAEgCACgEQACgEAAgEQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGAEQAGADAKADIAQADQALADAJAHQAHAJABALQAAAJgFAHQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_107.setTransform(-93.6,-14.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_108.setTransform(-105.3,-14.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgDAGgBQAFgCAIAAIAMABIgDAQQgEgCgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_109.setTransform(-114.2,-14.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_110.setTransform(-125.7,-14.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_111.setTransform(-142.8,-14.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAFAJAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgGgDgKgCIgOgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgGgHgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQADQAMADAHAHQAIAJAAALQAAAJgDAHQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_112.setTransform(-160.6,-14.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_113.setTransform(-172.5,-14.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_114.setTransform(-186,-14.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_115.setTransform(-199.2,-14.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_116.setTransform(-208.7,-17.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_117.setTransform(235.7,14.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCACgEQACgDAAgEIAAgJIAAiDIAQAAIAACGIAAAIQgBAGgCAGQgDAGgGAFQgHAEgMAAQgGAAgGgCgAAEhbQgDgEAAgFQAAgFADgDQAEgDAEAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEADgEAAQgEAAgEgDg");
	this.shape_118.setTransform(214,10.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgEgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQAEgGAEgEIALgHQAHgDAGgBIAKgBQANAAAMAFQAKAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_119.setTransform(192.9,7.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_120.setTransform(169.8,10.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#111111").s().p("AgIBVIAAiZIg4AAIAAgQICBAAIAAAQIg4AAIAACZg");
	this.shape_121.setTransform(157.9,7.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_122.setTransform(131.9,10.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_123.setTransform(98.6,10.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_124.setTransform(77.6,7.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_125.setTransform(63.9,10.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_126.setTransform(45,10.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgFQADgGAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_127.setTransform(32.4,7.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFADAHAAQAIgBAFgFQAFgFADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_128.setTransform(13.3,13.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_129.setTransform(-6.8,7.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_130.setTransform(-20.3,10.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_131.setTransform(-33.9,7.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgDgCgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_132.setTransform(-49.6,10.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_133.setTransform(-75.6,13.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_134.setTransform(-89.3,10.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgFQADgGAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_135.setTransform(-102.6,7.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_136.setTransform(-122.6,10.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_137.setTransform(-137,7.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_138.setTransform(-173.5,10.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_139.setTransform(-185.1,10.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQADADADAAIAHABIAHgBIAIgEIABAQQgJADgMAAIgKgBg");
	this.shape_140.setTransform(-194.9,9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_141.setTransform(-201.8,7.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_142.setTransform(-207.6,10.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_143.setTransform(-219.2,10.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPAMQAPAKAAAXQAAAXgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgEQAFgFACgFQACgFAAgHQAAgGgCgFQgCgGgFgEQgFgDgIgDQgIgCgLAAIgbAAg");
	this.shape_144.setTransform(-231.3,7.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#111111").s().p("AgTBSQgLgEgIgJQgHgIgFgKQgEgLAAgMQAAgNAEgLQAEgKAIgIQAIgIAKgEQAKgEALgBQANABAKAEQAKAEAHAIQAHAIADAJQAEAKAAALIAAAHIhdAAQABAJAEAIQADAHAGAFQAFAGAHADQAHADAIAAQANAAAJgGQAJgFAFgJIAMAKQgKAOgMAFQgMAFgOAAQgMAAgKgEgAgNgNQgHADgFAFQgGAFgDAFQgDAHAAAHIBLAAQAAgRgKgIQgJgKgSAAQgGAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_145.setTransform(196.6,-21.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_146.setTransform(186,-19.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_147.setTransform(179.1,-21.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_148.setTransform(165.8,-18.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_149.setTransform(148.6,-18.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#111111").s().p("AgVBSQgQgGgMgMQgMgMgHgQQgHgQAAgUQAAgSAHgQQAHgRAMgMQAMgMAQgGQAQgIASABQAQAAAQAGQAPAHAMAOIgPALIgIgJQgEgDgGgEIgNgEQgGgCgHAAQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAOAFAOQAFANAJALQAJAJANAGQANAHAPgBIANAAIANgFQAHgCAFgFQAGgGAFgHIAOAKIgLANQgGAFgIAFQgJAEgJACQgKACgKABQgSAAgQgIg");
	this.shape_150.setTransform(133.3,-21.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_151.setTransform(91.2,-21.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgOgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_152.setTransform(72.5,-18.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_153.setTransform(33.5,-18.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_154.setTransform(23.5,-21.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#111111").s().p("AgNBcIAAhhIgYAAIAAgOIAYAAIAAgfQAAgWAKgKQAKgJARAAIAGAAIAIACIgEAOIgFgBIgHgBQgGAAgEACQgEADgDAEIgCAJIgBALIAAAdIAbAAIAAAOIgbAAIAABhg");
	this.shape_155.setTransform(-20.6,-22);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_156.setTransform(-36.4,-18.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_157.setTransform(-48.1,-18.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAIgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_158.setTransform(-71.4,-18.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_159.setTransform(-83.1,-18.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_160.setTransform(-92,-18.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_161.setTransform(-103.5,-18.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_162.setTransform(-138.4,-18.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_163.setTransform(-186.5,-21.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICDAAIAAAQIg6AAIAACZg");
	this.shape_164.setTransform(-196.3,-21.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgEgHgGgDQgHgFgIAAIgIABIgHADIgFAFQgCAEAAAEQgBAIAGADQAFAEALADIAQAEQALACAIAIQAJAHAAAMQAAAKgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_165.setTransform(123.8,7.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_166.setTransform(112.1,7.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_167.setTransform(103.3,5.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_168.setTransform(82,7.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_169.setTransform(68.9,7.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgFADgDQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA/g");
	this.shape_170.setTransform(44.6,7.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_171.setTransform(32.9,7.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_172.setTransform(15.8,7.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAPIhRAAIAABAIBaAAIAAAQg");
	this.shape_173.setTransform(-0.7,5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_174.setTransform(-21.8,7.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_175.setTransform(-56.6,7.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_176.setTransform(-69.6,7.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPAMQAPALAAAXQAAAWgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgDAFgEQAFgDACgGQACgGAAgFQAAgHgCgFQgCgGgFgEQgFgEgIgCQgIgCgLAAIgbAAg");
	this.shape_177.setTransform(-87.5,5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_178.setTransform(-114.2,7.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#111111").s().p("AgYA2QgKgFgIgMIANgJQAFAHAIAFQAGAFAKgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgHgFgDQgHgFgIAAIgIABIgHADIgFAFQgDAEAAAEQAAAIAGADQAFAEALADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_179.setTransform(220.4,-20.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_180.setTransform(208.5,-20.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_181.setTransform(180.7,-20.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_182.setTransform(157.2,-23.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_183.setTransform(139.9,-23.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#111111").s().p("AAFBIQgEgBgDgDQgEgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAQQgJADgMAAIgKgBg");
	this.shape_184.setTransform(133.1,-22.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_185.setTransform(111,-20.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgHgGgDQgFgFgJAAIgIABIgHADIgGAFQgBAEAAAEQgBAIAGADQAFAEALADIAQAEQALACAIAIQAJAHgBAMQAAAKgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_186.setTransform(93.4,-20.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_187.setTransform(81.7,-20.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_188.setTransform(56.5,-21);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_189.setTransform(42.9,-20.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgHgFgDQgHgFgIAAIgIABIgHADIgFAFQgCAEAAAEQgBAIAGADQAFAEALADIAQAEQAMACAHAIQAJAHgBAMQABAKgEAGQgEAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_190.setTransform(30.8,-20.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_191.setTransform(11.8,-20.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_192.setTransform(-2.2,-21);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgHgHgDQgFgFgJAAIgHABIgIADIgGAFQgBAEAAAEQAAAIAFADQAFAEALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_193.setTransform(-20.3,-20.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_194.setTransform(-32.2,-20.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#111111").s().p("AgXBUQgGgCgGgEQgFgEgDgGQgEgHAAgHQAAgOAHgIQAHgIALgEQALgDALgCIAWgBIAIAAIAAgDQAAgbgdAAQgSAAgPANIgKgMQAQgPAfgBQAIAAAIACQAHADAGAFQAFAFADAIQAEAHAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAGQgJAEgNAAQgIAAgHgCgAAHAcIgQADQgJADgGAEQgGAFAAAIQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgCAFgFQAEgGACgGQACgHAAgHIAAgIIgIAAIgPAAgAgKgzIAXgjIAVAAIgfAjg");
	this.shape_195.setTransform(-51.1,-23.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgHgFgDQgHgFgIAAIgIABIgHADIgFAFQgCAEgBAEQAAAIAGADQAGAEAKADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_196.setTransform(-93.6,-20.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_197.setTransform(-105.3,-20.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAQAAIAAAVIAAAAQABgFAEgDQADgFAEgEQAEgCAGgDQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_198.setTransform(-114.2,-21);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_199.setTransform(-125.7,-20.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAFAJgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgHgHgDQgFgFgJAAIgHABIgIADIgGAFQgCAEAAAEQABAIAFADQAGAEAKADIAQAEQAMACAHAIQAIAHAAAMQAAAKgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_200.setTransform(-160.6,-20.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_201.setTransform(-172.5,-20.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_202.setTransform(-186,-21);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_203.setTransform(-199.2,-20.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_204.setTransform(-208.7,-23.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#111111").s().p("AgLBbIgLgEIgMgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIAMgHQAGgDAFgBIALgBQANAAALAFQAMAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgMAFQgLAEgNAAIgLgBgAgRgHQgIADgGAFQgGAGgDAJQgEAIAAAJQAAAJAEAJQADAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_205.setTransform(117.3,7.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#111111").s().p("AgvBVIAAipIARAAIAACZIBOAAIAAAQg");
	this.shape_206.setTransform(92.2,7.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#111111").s().p("AgIA4IgthvIASAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_207.setTransform(16.3,10.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#111111").s().p("AgVBTQgQgHgMgMQgMgMgHgQQgHgQAAgUQAAgSAHgQQAHgRAMgMQAMgMAQgGQAQgIASABQAQAAAQAGQAPAHAMAOIgPALIgIgJQgEgDgGgEIgNgEQgGgCgHAAQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAOAFAOQAFANAJALQAJAJANAGQANAHAPgBIANAAIANgFQAHgCAFgFQAGgGAFgHIAOAKIgLANQgGAFgIAFQgJAEgJACQgKACgKABQgSAAgQgHg");
	this.shape_208.setTransform(-42.6,7.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#111111").s().p("AgTBSQgLgEgIgJQgHgIgFgKQgEgLAAgMQAAgNAEgLQAEgKAIgIQAIgIAKgEQAKgEALgBQANABAKAEQAKAFAHAHQAHAIADAJQAEAKAAALIAAAIIhdAAQABAIAEAIQADAHAGAFQAFAGAHADQAHADAIAAQANAAAJgGQAJgFAFgJIAMAKQgKAOgMAFQgMAFgOAAQgMAAgKgEgAgNgNQgHADgFAFQgGAFgDAFQgDAHAAAHIBLAAQAAgRgKgIQgJgKgSAAQgGAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_209.setTransform(-99.3,7.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAHABIAJgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_210.setTransform(-109.9,9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHQgBAIAAAHIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_211.setTransform(-130.1,10.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#111111").s().p("AgVBTQgQgHgMgMQgMgMgHgQQgHgQAAgUQAAgSAHgQQAHgRAMgMQAMgMAQgGQAQgIASABQAQAAAQAGQAPAHAMAOIgPALIgIgJQgEgDgGgEIgNgEQgGgCgHAAQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAOAFAOQAFANAJALQAJAJANAGQANAHAPgBIANAAIANgFQAHgCAFgFQAGgGAFgHIAOAKIgLANQgGAFgIAFQgJAEgJACQgKACgKABQgSAAgQgHg");
	this.shape_212.setTransform(-162.6,7.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_213.setTransform(174,-18.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#111111").s().p("AgNBcIAAhhIgYAAIAAgOIAYAAIAAgfQAAgWAKgKQAKgJARAAIAHAAIAHACIgEAOIgFgBIgGgBQgHAAgEACQgEADgDAEIgCAJIgBALIAAAdIAbAAIAAAOIgbAAIAABhg");
	this.shape_214.setTransform(80.9,-22);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#111111").s().p("AgYA2QgKgFgIgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_215.setTransform(65.1,-18.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_216.setTransform(28.2,-18.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_217.setTransform(14.6,-18.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAIgEAHQgDAGgGAFQgGAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_218.setTransform(2.5,-18.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_219.setTransform(-14.4,-18.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgLACQgVAAgLgMg");
	this.shape_220.setTransform(-57.8,-18.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_221.setTransform(-108.2,-18.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_222.setTransform(-180.1,-18.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_223.setTransform(-193.2,-18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60,p:{x:-189.7,y:-30.3}},{t:this.shape_59,p:{x:-179.9,y:-30.1}},{t:this.shape_58,p:{x:-170.4,y:-27.4}},{t:this.shape_57,p:{x:-157.2,y:-27.5}},{t:this.shape_56,p:{x:-143.7,y:-27.4}},{t:this.shape_55},{t:this.shape_54,p:{x:-114,y:-27.4}},{t:this.shape_53,p:{x:-105.7,y:-30.9}},{t:this.shape_52,p:{x:-96.9,y:-27.4}},{t:this.shape_51},{t:this.shape_50,p:{x:-75.3,y:-27.4}},{t:this.shape_49,p:{x:-55.4,y:-27.4}},{t:this.shape_48,p:{x:-43.4,y:-27.3}},{t:this.shape_47,p:{x:-30.7,y:-30.1}},{t:this.shape_46,p:{x:-21.3,y:-30.9}},{t:this.shape_45,p:{x:-5.3,y:-27.5}},{t:this.shape_44,p:{x:8.7,y:-27.4}},{t:this.shape_43,p:{x:29.1,y:-27.4}},{t:this.shape_42},{t:this.shape_41,p:{x:55.5,y:-30.9}},{t:this.shape_40,p:{x:64.3,y:-27.4}},{t:this.shape_39},{t:this.shape_38,p:{x:91.2,y:-27.3}},{t:this.shape_37,p:{x:104.4,y:-27.5}},{t:this.shape_36,p:{x:117.5,y:-27.4}},{t:this.shape_35,p:{x:125.7,y:-30.1}},{t:this.shape_34},{t:this.shape_33,p:{x:149.3,y:-27.5}},{t:this.shape_32,p:{x:169.8,y:-30.7}},{t:this.shape_31,p:{x:184.2,y:-27.4}},{t:this.shape_30,p:{x:193.7,y:-30.9}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:-65.6,y:1.1}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:10,y:4.5}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:119.8,y:4.5}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:173.7,y:0.9}},{t:this.shape}]}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60,p:{x:-218.5,y:-17.5}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{y:-14.7,x:-142.8}},{t:this.shape_53,p:{x:-134.5,y:-18.1}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_54,p:{x:-75.8,y:-14.7}},{t:this.shape_16,p:{x:-63.8,y:-14.5}},{t:this.shape_106},{t:this.shape_46,p:{x:-41.7,y:-18.1}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_41,p:{x:72.9,y:-18.1}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_49,p:{x:123.7,y:-14.7}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{y:-14.7,x:148.6}},{t:this.shape_92},{t:this.shape_91,p:{y:-18}},{t:this.shape_90},{t:this.shape_89,p:{y:-18}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_32,p:{x:-128.5,y:10.8}},{t:this.shape_86},{t:this.shape_30,p:{x:-104.6,y:10.7}},{t:this.shape_85},{t:this.shape_1,p:{x:-78.4,y:10.7}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{y:10.8}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{y:16.9}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_36,p:{x:95.1,y:14.1}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{y:18.6}}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_164},{t:this.shape_163},{t:this.shape_58,p:{x:-177,y:-18.4}},{t:this.shape_57,p:{x:-163.8,y:-18.5}},{t:this.shape_56,p:{x:-150.3,y:-18.4}},{t:this.shape_162},{t:this.shape_49,p:{x:-120.6,y:-18.4}},{t:this.shape_53,p:{x:-112.3,y:-21.9}},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158,p:{x:-71.4}},{t:this.shape_46,p:{x:-56.9,y:-21.9}},{t:this.shape_157},{t:this.shape_156,p:{x:-36.4}},{t:this.shape_155},{t:this.shape_48,p:{x:-11,y:-18.3}},{t:this.shape_45,p:{x:2.2,y:-18.5}},{t:this.shape_36,p:{x:15.3,y:-18.4}},{t:this.shape_154,p:{x:23.5}},{t:this.shape_153,p:{x:33.5}},{t:this.shape_37,p:{x:47.1,y:-18.5}},{t:this.shape_43,p:{x:60.7,y:-18.4}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_31,p:{x:105.5,y:-18.4}},{t:this.shape_41,p:{x:115.1,y:-21.9}},{t:this.shape_150},{t:this.shape_149,p:{x:148.6,y:-18.4}},{t:this.shape_148},{t:this.shape_147,p:{x:179.1}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143,p:{x:-219.2,y:10.4}},{t:this.shape_142},{t:this.shape_141,p:{x:-201.8}},{t:this.shape_140},{t:this.shape_139,p:{x:-185.1,y:10.4}},{t:this.shape_138},{t:this.shape_59,p:{x:-167.7,y:7.7}},{t:this.shape_50,p:{x:-157.7,y:10.4}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_38,p:{x:-61.3,y:10.5}},{t:this.shape_132,p:{x:-49.6}},{t:this.shape_35,p:{x:-43.8,y:7.7}},{t:this.shape_131},{t:this.shape_130,p:{x:-20.3,y:10.4}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126,p:{x:45}},{t:this.shape_30,p:{x:54.4,y:6.9}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123,p:{x:98.6}},{t:this.shape_33,p:{x:111.7,y:10.3}},{t:this.shape_122,p:{x:131.9}},{t:this.shape_1,p:{x:141.5,y:6.9}},{t:this.shape_121,p:{x:157.9,y:7.5}},{t:this.shape_120},{t:this.shape_52,p:{x:178.7,y:10.4}},{t:this.shape_119},{t:this.shape_40,p:{x:205.8,y:10.4}},{t:this.shape_118},{t:this.shape_44,p:{x:225.2,y:10.4}},{t:this.shape_117,p:{x:235.7}}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60,p:{x:-218.5,y:-23.8}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_111,p:{y:-20.9,x:-142.8}},{t:this.shape_53,p:{x:-134.5,y:-24.4}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_54,p:{x:-75.8,y:-20.9}},{t:this.shape_16,p:{x:-63.8,y:-20.8}},{t:this.shape_195},{t:this.shape_46,p:{x:-41.7,y:-24.4}},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_41,p:{x:72.9,y:-24.4}},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_49,p:{x:123.7,y:-20.9}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_93,p:{y:-20.9,x:148.6}},{t:this.shape_182},{t:this.shape_91,p:{y:-24.2}},{t:this.shape_181},{t:this.shape_89,p:{y:-24.2}},{t:this.shape_180},{t:this.shape_179},{t:this.shape_32,p:{x:-128.5,y:4.6}},{t:this.shape_178},{t:this.shape_30,p:{x:-104.6,y:4.4}},{t:this.shape_177},{t:this.shape_1,p:{x:-78.4,y:4.4}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_82,p:{y:4.6}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_76,p:{y:10.6}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_36,p:{x:95.1,y:7.9}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_70,p:{y:12.4}}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_121,p:{x:-212.5,y:-21.3}},{t:this.shape_154,p:{x:-202.8}},{t:this.shape_223},{t:this.shape_222},{t:this.shape_58,p:{x:-166.5,y:-18.4}},{t:this.shape_158,p:{x:-154.7}},{t:this.shape_111,p:{y:-18.4,x:-136.8}},{t:this.shape_53,p:{x:-128.6,y:-21.9}},{t:this.shape_143,p:{x:-119.8,y:-18.4}},{t:this.shape_221},{t:this.shape_139,p:{x:-99.4,y:-18.4}},{t:this.shape_156,p:{x:-87.7}},{t:this.shape_54,p:{x:-69.8,y:-18.4}},{t:this.shape_220},{t:this.shape_47,p:{x:-45.2,y:-21.1}},{t:this.shape_46,p:{x:-35.8,y:-21.9}},{t:this.shape_56,p:{x:-26.2,y:-18.4}},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_41,p:{x:44.6,y:-21.9}},{t:this.shape_130,p:{x:53.4,y:-18.4}},{t:this.shape_215},{t:this.shape_214},{t:this.shape_7,p:{x:90.5,y:-18.3}},{t:this.shape_57,p:{x:103.7,y:-18.5}},{t:this.shape_49,p:{x:116.8,y:-18.4}},{t:this.shape_147,p:{x:125}},{t:this.shape_153,p:{x:135}},{t:this.shape_45,p:{x:148.6,y:-18.5}},{t:this.shape_43,p:{x:162.2,y:-18.4}},{t:this.shape_213},{t:this.shape_21,p:{x:192.7,y:-21.7}},{t:this.shape_31,p:{x:207,y:-18.4}},{t:this.shape_30,p:{x:216.6,y:-21.9}},{t:this.shape_212},{t:this.shape_149,p:{x:-147.3,y:10.4}},{t:this.shape_211},{t:this.shape_141,p:{x:-116.8}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_32,p:{x:-79,y:7.1}},{t:this.shape_123,p:{x:-64.7}},{t:this.shape_208},{t:this.shape_50,p:{x:-27.3,y:10.4}},{t:this.shape_37,p:{x:-13.7,y:10.3}},{t:this.shape_93,p:{y:10.4,x:-1}},{t:this.shape_59,p:{x:7.6,y:7.7}},{t:this.shape_207},{t:this.shape_122,p:{x:28.7}},{t:this.shape_33,p:{x:41.8,y:10.3}},{t:this.shape_36,p:{x:54.9,y:10.4}},{t:this.shape_35,p:{x:63.1,y:7.7}},{t:this.shape_126,p:{x:71.9}},{t:this.shape_206},{t:this.shape_52,p:{x:103,y:10.4}},{t:this.shape_205},{t:this.shape_44,p:{x:131.3,y:10.4}},{t:this.shape_132,p:{x:143.5}},{t:this.shape_40,p:{x:152.3,y:10.4}},{t:this.shape_1,p:{x:161.7,y:6.9}},{t:this.shape_117,p:{x:168}}]},1).wait(1));

	// Fondo blanco
	this.instance = new lib.Mapadebits10();
	this.instance.parent = this;
	this.instance.setTransform(-289,-134,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// Fondo
	this.instance_1 = new lib.Mapadebits18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-517,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517,-296,1034,592);


(lib.Símbolo14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Button
	this.btn_next = new lib.Símbolo7();
	this.btn_next.parent = this;
	this.btn_next.setTransform(-1.5,116.4);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_next).wait(4).to({y:78.9},0).wait(1));

	// Texto
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape.setTransform(144.9,66.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_1.setTransform(134.4,62.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AAFBIQgFgBgDgDQgDgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgEIACAPQgJAEgNABIgKgCg");
	this.shape_2.setTransform(123.3,60.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQAEgFAFgFIAKgGQAHgDAGgBIAKgBQANAAAMAEQAKAFAIAIQAIAHAFAMQAEAKAAANQAAAMgEALQgFAKgIAIQgIAIgKAFQgMAEgNAAIgKgBIgNgEIgKgHQgFgEgEgFIgBAAIAABXgAgRhJQgIADgGAGQgGAGgEAJQgCAHAAAKQAAAJACAIQAEAJAGAFQAGAFAIAEQAJADAIAAQAKAAAIgDQAIgEAFgFQAGgFACgJQAEgIAAgJQAAgKgEgHQgCgJgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_3.setTransform(112.4,65.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_4.setTransform(98,62.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_5.setTransform(85.9,62.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGACgGAEQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_6.setTransform(72.9,62);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_7.setTransform(59.3,62.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_8.setTransform(46.8,62.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_9.setTransform(27.3,62.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AAFBIQgFgBgDgDQgDgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgEIACAPQgJAEgNABIgKgCg");
	this.shape_10.setTransform(16.7,60.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQAEgCACgEQACgDAAgFQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGAEQAGADAKADIAQAEQALACAJAHQAHAJABALQAAAKgFAGQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_11.setTransform(7.6,62.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_12.setTransform(-4.2,62.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_13.setTransform(-24.7,62.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgCAGgCQAGgCAHgBIAMACIgDAPQgDgBgGAAQgJAAgHAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_14.setTransform(-34.7,62);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgNAHgJQAHgHALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgHQACgHAAgHIAAgIIgIAAIgPABg");
	this.shape_15.setTransform(-46.3,62.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_16.setTransform(-55.1,58.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_17.setTransform(-63.3,62.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgDAAgFQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgGgFQgFgEgJAAIgIABIgHADIgGAGQgBADAAAEQgBAIAGAEQAFADALADIAQAEQALACAIAHQAJAJgBALQAAAKgDAGQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_18.setTransform(-81.2,62.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgNAHgJQAHgHALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgHQACgHAAgHIAAgIIgIAAIgPABg");
	this.shape_19.setTransform(-92.9,62.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgEgKgBgMQABgNAEgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAFAGAIAEQAHADAJAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_20.setTransform(-106.4,64.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGACgGAEQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_21.setTransform(-120.3,62);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_22.setTransform(-133.5,62.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgDgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAPQgJAEgMABIgKgCg");
	this.shape_23.setTransform(-144.1,60.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_24.setTransform(261.2,32.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgEADQgFADgGABIgKACQgWAAgLgMg");
	this.shape_25.setTransform(247.8,32.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AAsBcIAAhXIgBAAQgDAFgGAEIgKAHIgMAEIgMABQgNAAgKgFQgLgEgIgIQgIgIgFgKQgEgLAAgMQAAgNAEgKQAFgMAIgHQAIgIALgFQAKgEANAAIAMABQAGABAGADIAKAGQAGAEADAGIABAAIAAgTIAQAAIAAC1gAgRhJQgIADgFAGQgGAGgCAIQgDAIAAAKQAAAJADAIQACAIAGAHQAFAEAIAEQAIAEAJgBQAKABAIgEQAIgEAGgEQAGgHADgIQAEgIAAgJQAAgKgEgIQgDgIgGgGQgGgGgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_26.setTransform(233.5,35.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_27.setTransform(213.3,32.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgFAEgEQADgEAFgEQADgCAGgCQAFgDAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_28.setTransform(204.5,32.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_29.setTransform(192.9,32.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAFgGAEgEIALgGQAGgDAHgBIAKgBQAOAAALAEQALAFAHAIQAIAHAEAMQAFAKAAANQAAAMgFALQgEAKgIAIQgHAIgLAEQgLAFgOAAIgKgBIgNgEIgLgHQgEgEgFgFIAAAAIAABXgAgRhJQgIADgGAGQgGAGgEAIQgDAIAAAKQAAAJADAIQAEAIAGAHQAGAEAIAEQAIAEAJgBQAKABAIgEQAHgEAHgEQAFgHACgIQAEgIAAgJQAAgKgEgIQgCgIgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_30.setTransform(180.1,35.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_31.setTransform(162.8,28.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_32.setTransform(153.4,32.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_33.setTransform(144.6,29.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAFgDAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_34.setTransform(138.8,32.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_35.setTransform(127.1,32.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgDgDgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAJgBIAIgEIABAPQgKAEgMAAIgJgBg");
	this.shape_36.setTransform(116.5,30.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_37.setTransform(106,32.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgGALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_38.setTransform(89.6,32.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_39.setTransform(70.1,28.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_40.setTransform(60.5,32.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_41.setTransform(40.1,32.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgIA4IgthvIATAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_42.setTransform(27.2,32.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_43.setTransform(14.7,32.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_44.setTransform(1.3,32.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_45.setTransform(-12.2,32.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_46.setTransform(-32,32.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_47.setTransform(-46.3,29);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_48.setTransform(-66.5,32.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgGAAgHQAAgJADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGAEQAGADAKADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_49.setTransform(-77.4,32.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_50.setTransform(-85.5,29.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgIA4IgthvIASAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_51.setTransform(-94.1,32.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_52.setTransform(-106.6,32.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AAkBVIgthPIgeAAIAABPIgRAAIAAipIA0AAQAaAAAPALQAOAMAAAXQABARgMAMQgLAMgVACIAxBQgAgngJIAfAAQAKAAAJgCQAHgDAFgEQAGgDABgGQACgGAAgFQAAgHgCgFQgBgFgGgFQgFgEgHgCQgJgCgKAAIgfAAg");
	this.shape_53.setTransform(-119.5,29.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_54.setTransform(-137.4,36.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgGAAgHQAAgJADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGAEQAGADAKADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_55.setTransform(-145.8,32.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_56.setTransform(-157.5,32.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgGALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_57.setTransform(-173.9,32.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_58.setTransform(-190.6,32.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgDgDgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAJgEIAAAPQgJAEgMAAIgJgBg");
	this.shape_59.setTransform(-201.2,30.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgGgBgHQABgJADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQAMACAHAIQAIAHAAAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_60.setTransform(-216.9,32.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_61.setTransform(-229.2,32.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAIgEIABAPQgJAEgMAAIgJgBg");
	this.shape_62.setTransform(-240.2,30.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgGgBgHQABgJADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQAMACAHAIQAIAHAAAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_63.setTransform(-249.3,32.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_64.setTransform(-261.1,32.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_65.setTransform(285.7,2.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_66.setTransform(272.5,2.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAQAAIAAAVIAAAAQACgFADgDQADgFAEgEQAEgCAGgDQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_67.setTransform(256.3,2.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_68.setTransform(244.7,2.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgEgDgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAJgEIABAQQgKADgMAAIgJgBg");
	this.shape_69.setTransform(234.9,1.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_70.setTransform(228,-0.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_71.setTransform(219.7,2.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_72.setTransform(207,2.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQAEgFAFgFIAKgGQAHgDAFgBIALgBQAOAAAKAEQALAFAIAIQAIAHAFAMQAEAKAAANQAAANgEALQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgFgEgEgGIgBAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAIAGAHQAGAEAIAEQAJAEAIgBQAKABAIgEQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_73.setTransform(194.2,5.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_74.setTransform(179.9,2.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_75.setTransform(168.6,2.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAPAAIAAAVIABAAQACgFADgDQADgFAEgEQAEgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_76.setTransform(152.9,2.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_77.setTransform(140.7,2.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQAEgFAFgFIAKgGQAHgDAFgBIALgBQAOAAAKAEQALAFAIAIQAIAHAFAMQAEAKAAANQAAANgEALQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgFgEgEgGIgBAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAIAGAHQAGAEAIAEQAJAEAIgBQAKABAIgEQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_78.setTransform(126.7,5.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_79.setTransform(105.8,2.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AgtA4IAAgLIBChWIg+AAIAAgOIBUAAIAAALIhABWIBCAAIAAAOg");
	this.shape_80.setTransform(94.8,2.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAPAAIAAAVIABAAQACgFADgDQADgFAEgEQAEgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_81.setTransform(86.7,2.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_82.setTransform(75,2.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_83.setTransform(61.6,2.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgNBcIAAhhIgYAAIAAgOIAYAAIAAgfQAAgWALgKQAJgJARAAIAHAAIAGACIgDAOIgGgBIgFgBQgHAAgEACQgEADgCAEIgDAJIgBALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_84.setTransform(52,-1.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAJQgDgHgHgDQgFgFgJAAIgHABIgIADIgGAFQgCAEAAAEQABAIAFADQAGAEAKADIAQAEQAMACAIAIQAHAHAAAMQAAAKgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_85.setTransform(42.9,2.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_86.setTransform(31,2.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_87.setTransform(11,2.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgHgGgDQgFgFgJAAIgHABIgIADIgGAFQgCAEAAAEQABAIAFADQAGAEAKADIAQAEQALACAJAIQAHAHABAMQgBAKgEAGQgDAHgGAEQgGAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_88.setTransform(-0.7,2.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFACAHABQAIAAAFgGQAFgFADgJIAJgWIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAIQgIAHgOAAIgIAAg");
	this.shape_89.setTransform(-18.2,5.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AgRBJIAQg4IATAAIgTA4gAgGgzQgEgDAAgGQAAgEAEgFQADgDAFAAQAGAAAEADQADAFAAAEQAAAGgDADQgEAFgGAAQgFAAgDgFg");
	this.shape_90.setTransform(-34,4.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgHgHgDQgFgFgJAAIgHABIgIADIgGAFQgBAEAAAEQAAAIAFADQAFAEALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_91.setTransform(-42.4,2.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_92.setTransform(-54.7,2.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgeA5IAAhMIAAgPIgBgUIAPAAIAAAVIABAAQACgFADgDQADgFAFgEQADgCAGgDQAGgCAHAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_93.setTransform(-64.7,2.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_94.setTransform(-73.7,1.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_95.setTransform(-84.8,2.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_96.setTransform(-105.3,2.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAPAAIAAAVIABAAQACgFADgDQADgFAEgEQAEgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_97.setTransform(-114.9,2.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgDgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAQQgJADgMAAIgKgBg");
	this.shape_98.setTransform(-123.8,1.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_99.setTransform(-134.7,2.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_100.setTransform(-147.9,2.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_101.setTransform(-164.5,8.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_102.setTransform(-175.5,-0.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_103.setTransform(-189,2.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_104.setTransform(-202.6,-0.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_105.setTransform(-212.5,-0.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_106.setTransform(-220.7,2.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_107.setTransform(-229.8,-0.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAQAAIAAAVIAAAAQACgFADgDQADgFAEgEQAEgCAGgDQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_108.setTransform(-235.6,2.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AAGBIQgFgBgDgDQgEgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_109.setTransform(-244.5,1.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_110.setTransform(-253.9,2.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_111.setTransform(-266.8,2.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_112.setTransform(-276.3,-1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_113.setTransform(-285.9,2.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_114.setTransform(301.7,-21.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFAAgJQAAgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_115.setTransform(293.3,-27.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_116.setTransform(281.6,-27.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAIgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_117.setTransform(268.1,-24.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_118.setTransform(258.1,-27.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_119.setTransform(246.6,-27.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_120.setTransform(235.3,-27.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_121.setTransform(215.8,-27.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_122.setTransform(201.4,-30.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_123.setTransform(181.1,-27.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgEgDgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQABADADAAIAHABIAJgBIAIgEIAAAQQgJADgMAAIgJgBg");
	this.shape_124.setTransform(170.5,-28.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_125.setTransform(163.6,-27.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_126.setTransform(151.4,-27.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIABAAQADgFAGgEIALgHQAFgDAGgBIALgBQAOAAAKAEQALAEAIAIQAIAJAFALQAEAKAAANQAAANgEALQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAIAGAHQAGAEAIAEQAIADAJAAQAKAAAIgDQAIgEAFgEQAGgHADgIQADgIAAgJQAAgJgDgJQgDgIgGgGQgFgGgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_127.setTransform(137.4,-24);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQAAAJgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_128.setTransform(124.6,-27.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_129.setTransform(112.6,-27.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_130.setTransform(99.6,-27.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_131.setTransform(90.7,-27.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQACADACAAIAHABIAJgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_132.setTransform(81.8,-28.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_133.setTransform(67.8,-21.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_134.setTransform(59.4,-27.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_135.setTransform(47.7,-27.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAJgFAGQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_136.setTransform(36.8,-27.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_137.setTransform(24.5,-27.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgEgBgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_138.setTransform(14.4,-27.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQADgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_139.setTransform(1.8,-24.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_140.setTransform(-8.1,-30);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_141.setTransform(-13.9,-30.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_142.setTransform(-23.4,-27.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAFgFAEgEIALgHQAHgDAGgBIAKgBQANAAAMAEQAKAEAIAIQAIAJAEALQAFAKAAANQAAANgFALQgEAJgIAIQgIAIgKAEQgMAFgNAAIgKgBIgNgEIgLgHQgEgEgFgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAIAGAHQAGAEAIAEQAJADAIAAQAKAAAIgDQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_143.setTransform(-37,-24);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgGgDQgFgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_144.setTransform(-56.4,-27.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_145.setTransform(-68.1,-27.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#111111").s().p("AgPBVIAAhvIAPAAIAABvgAgWgyIAXgiIAWAAIgfAig");
	this.shape_146.setTransform(-76.1,-30.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_147.setTransform(-87.4,-24.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_148.setTransform(-97.4,-27.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_149.setTransform(-109.1,-27.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_150.setTransform(-122.6,-27.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_151.setTransform(-135.8,-27.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_152.setTransform(-156,-27.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_153.setTransform(-169.6,-27.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_154.setTransform(-182.1,-27.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_155.setTransform(-198.2,-21.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQAAAJgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_156.setTransform(-206.6,-27.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_157.setTransform(-218.3,-27.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_158.setTransform(-227.1,-27.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIAAANIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_159.setTransform(-238.9,-27.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQACADACAAIAHABIAJgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_160.setTransform(-249.4,-28.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_161.setTransform(-256.3,-30.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_162.setTransform(-265.7,-27.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_163.setTransform(-285.2,-27.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_164.setTransform(-298.3,-27.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAJAIQAIAHAAANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_165.setTransform(288.1,-57.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_166.setTransform(275.8,-57.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_167.setTransform(265.7,-57.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIABANIgQAAIgBgJIAAgJIgHAIQgEAEgFADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_168.setTransform(254,-57);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_169.setTransform(239.7,-54.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_170.setTransform(226,-57.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAIgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_171.setTransform(214.3,-57.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFAAgJQAAgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_172.setTransform(197.5,-57.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_173.setTransform(185.2,-57.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAFAAQAFAAAEgCQACgCABgEQADgDAAgEIABgJIAAiDIAPAAIAACGIAAAIQAAAGgDAGQgDAGgHAFQgGAEgLAAQgHAAgGgCgAAFhbQgFgEAAgFQAAgFAFgDQADgDAFAAQAEAAADADQAEADAAAFQAAAFgEAEQgDADgEAAQgFAAgDgDg");
	this.shape_174.setTransform(174,-57);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_175.setTransform(165.8,-57.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#111111").s().p("AgLBbIgLgEIgLgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIALgHQAGgDAFgBIALgBQANAAALAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBgAgRgHQgIADgGAFQgGAGgDAJQgDAIgBAJQABAJADAJQADAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgIAAgJAEg");
	this.shape_176.setTransform(152.9,-60.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_177.setTransform(138.7,-57.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_178.setTransform(129.8,-57.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#111111").s().p("AAGBIQgFgBgDgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_179.setTransform(120.9,-58.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_180.setTransform(107.3,-57.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_181.setTransform(95.7,-57.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#111111").s().p("AgsA4IAAgLIBBhWIg+AAIAAgOIBUAAIAAALIhBBWIBEAAIAAAOg");
	this.shape_182.setTransform(84.7,-57.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_183.setTransform(76.7,-59.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_184.setTransform(71,-60.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_185.setTransform(61.6,-57.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_186.setTransform(49,-57.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_187.setTransform(39.4,-57.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_188.setTransform(21.2,-57.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_189.setTransform(12.3,-57.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_190.setTransform(0.8,-57.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIALgHQAGgDAHgBIAKgBQAOAAALAEQALAFAHAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgHAIgLAEQgLAFgOAAIgKgBIgNgEIgLgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgDAJAAAJQAAAJADAIQAEAJAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAHgDAHgFQAFgGACgJQAEgIAAgJQAAgJgEgJQgCgIgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_191.setTransform(-12.1,-53.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_192.setTransform(-31.5,-57.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_193.setTransform(-43.3,-57.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_194.setTransform(-56.9,-57.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_195.setTransform(-70.5,-57.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_196.setTransform(-80.5,-59.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_197.setTransform(-88.7,-57.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_198.setTransform(-100.3,-57.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_199.setTransform(-113,-57.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_200.setTransform(-132.2,-57.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_201.setTransform(-149.3,-57.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_202.setTransform(-166.5,-57.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_203.setTransform(-177.5,-58.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_204.setTransform(-194.7,-57.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#111111").s().p("AgPBVIAAhvIAPAAIAABvgAgWgyIAXgiIAWAAIgfAig");
	this.shape_205.setTransform(-202.7,-60);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#111111").s().p("AAhBSIAAg+QAAgTgGgJQgHgKgRAAIgGABQgGABgGAFQgGAEgFAHQgFAJAAAQIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgHIAKgDIALgCQAVAAAKALQALALAAAVIAABHgAgkg3IACgJIAFgJQACgDAEgCQAEgCAFAAQAFAAAEABIAIAFIAIADQAEACAEAAQAFAAADgEIAEgIIAKAAIgCAJIgEAIQgDADgEADQgEACgFAAQgEAAgFgCIgJgEIgHgDIgIgCQgFAAgDADIgEAJg");
	this.shape_206.setTransform(-213.3,-59.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_207.setTransform(-226.3,-57.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIAMgHQAGgDAFgBIALgBQANAAALAEQAMAFAHAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgHAIgMAEQgLAFgNAAIgLgBIgLgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgEAJAAAJQAAAJAEAIQADAJAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAHgDAHgFQAFgGADgJQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_208.setTransform(-239.1,-53.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_209.setTransform(-257.3,-57.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_210.setTransform(-274.4,-57.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_211.setTransform(-286.9,-57.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_212.setTransform(267.5,-86.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_213.setTransform(258.7,-90.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_214.setTransform(242.5,-86.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_215.setTransform(229.1,-86.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#111111").s().p("AAsBcIAAhYIgBAAQgDAGgGAEIgLAHIgLAEIgMABQgMAAgLgFQgLgEgIgIQgIgIgFgJQgEgMAAgMQAAgNAEgLQAFgKAIgJQAIgHALgEQALgFAMAAIAMABQAFABAGADIALAHQAGADADAHIABAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgGAGgDAIQgCAJAAAJQAAAJACAJQADAHAGAGQAGAGAHADQAIADAJABQAJgBAJgDQAIgDAGgGQAGgGADgHQAEgJAAgJQAAgJgEgJQgDgIgGgGQgGgGgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_216.setTransform(214.8,-83.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_217.setTransform(194.6,-86.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_218.setTransform(183.3,-86.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_219.setTransform(174.3,-89.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#111111").s().p("AgNBcIAAhhIgYAAIAAgOIAYAAIAAgfQAAgWAKgKQAKgJARAAIAGAAIAIACIgEAOIgFgBIgHgBQgGAAgEACQgEADgDAEIgCAJIgBALIAAAdIAbAAIAAAOIgbAAIAABhg");
	this.shape_220.setTransform(168.4,-90.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_221.setTransform(161.4,-89.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAGgBAHAAIAMAAIgDARQgDgCgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_222.setTransform(155.6,-87);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_223.setTransform(143.9,-86.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#111111").s().p("AgIA4IgthvIATAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_224.setTransform(131.5,-86.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_225.setTransform(115.7,-80.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_226.setTransform(109.5,-90.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_227.setTransform(100.1,-86.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_228.setTransform(91.3,-89.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAGgBAHAAIAMAAIgDARQgEgCgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_229.setTransform(85.5,-87);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIAEAGQABADADAAIAHABIAIgBIAIgDIABAPQgJADgMAAIgJAAg");
	this.shape_230.setTransform(76.6,-88.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAHQAIAJAAAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_231.setTransform(67.5,-86.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_232.setTransform(55.6,-86.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_233.setTransform(41.3,-90.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_234.setTransform(27.5,-87);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#111111").s().p("AgIBVIAAipIARAAIAACpg");
	this.shape_235.setTransform(17.9,-89.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAGADIAKAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_236.setTransform(0.4,-90.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_237.setTransform(-13.1,-86.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_238.setTransform(-26.7,-90.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_239.setTransform(-36.6,-89.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAGgBAHAAIAMAAIgDARQgDgCgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_240.setTransform(-42.4,-87);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#111111").s().p("AglAuQgLgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAJAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_241.setTransform(-54.1,-86.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_242.setTransform(-68.4,-84.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_243.setTransform(-82.1,-86.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANABQAGAAAGgCQAHgCAFgFQAFgEAEgFQADgGAAgIQAAgIgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgGgDgIQgEgHAAgMQAAgNAFgIQAEgJAIgHQAIgFAKgEQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAGQgDAGAAAIQAAAMAGAGQAHAHAJADIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAGQgIAHgKADQgKAEgJAAQgQgBgOgGg");
	this.shape_244.setTransform(-95.4,-89.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_245.setTransform(-115.4,-86.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_246.setTransform(-129.8,-90.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_247.setTransform(-149.9,-86.9);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGAEgDAGQgEAFgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGACQgFAAgGAFQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgGQALgHALABQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_248.setTransform(-166.3,-87);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_249.setTransform(-182.8,-86.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAGgBAHAAIAMAAIgDARQgEgCgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_250.setTransform(-191.7,-87);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQADgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_251.setTransform(-204.3,-84.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_252.setTransform(-218.5,-86.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgEAGgCQAGgBAHAAIAMAAIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_253.setTransform(-228.5,-87);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPAMQAPAKAAAXQAAAXgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgEQAFgEACgGQACgFAAgHQAAgFgCgGQgCgGgFgEQgFgDgIgDQgIgCgLAAIgbAAg");
	this.shape_254.setTransform(-239.8,-89.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_255.setTransform(-256.9,-90.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAOIhRAAIAABBIBaAAIAAAQg");
	this.shape_256.setTransform(-266.3,-89.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#B20512").s().p("AgRBcQgIgHAAgLQAAgLAIgHQAHgHAKgBQALABAHAHQAHAHABALQgBALgHAHQgHAIgLAAQgKAAgHgIgAgUAhIAAiEIApAAIAACEg");
	this.shape_257.setTransform(73.7,-126.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#B20512").s().p("AglA/QgRgJgKgQQgKgQAAgWQAAgVAKgQQAKgQARgJQARgJAUAAQAVAAARAJQASAJAJAQQAKAQAAAVQAAAWgKAQQgJAQgSAJQgRAJgVAAQgUAAgRgJgAgYgYQgJAJAAAPQAAAQAJAJQAJAJAPABQAQgBAJgJQAIgJABgQQgBgPgIgJQgJgKgQAAQgPAAgJAKg");
	this.shape_258.setTransform(59,-123.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#B20512").s().p("AAABWQgMgEgGgKQgHgIAAgPIAAhAIgbAAIAAghIAbAAIAAgpIApAAIAAApIAlAAIAAAhIglAAIAAAtIABAMQABAGAEADQAFADAJAAIAJAAQAFgBADgDIAAAkQgHACgIABIgOABQgOAAgKgEg");
	this.shape_259.setTransform(44.5,-125.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#B20512").s().p("AgYA/QgQgJgLgQQgKgQAAgWQAAgVAKgQQALgQAQgJQARgJAVAAQAMAAANAEQANAFAKAJIgbAeQgDgFgGgDQgGgDgGAAQgPAAgJAKQgIAJgBAPQABAQAIAJQAJAJAPABQAGAAAGgEQAFgDAEgEIAbAdQgKAKgNAEQgNAFgMAAQgVAAgRgJg");
	this.shape_260.setTransform(32.8,-123.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#B20512").s().p("AgfA/QgRgJgKgQQgKgQgBgWQABgVAKgQQAKgQARgJQARgJAUAAQAUAAAOAJQAOAJAIAQQAIAQAAAVIAAANIhhAAQADAMAIAIQAJAGALAAQAKABAIgFQAHgEAFgIIAdAWQgKANgPAGQgPAIgRAAQgUAAgRgJgAAcgPQAAgKgHgIQgHgHgMAAQgIAAgHAEQgGADgEAGQgDAGgBAGIA3AAIAAAAg");
	this.shape_261.setTransform(17.5,-123.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#B20512").s().p("AgvBGIAAiHIAqAAIAAAVIABAAQAFgMAKgGQAJgHAOAAIAHABIAHABIAAAmIgJgCIgJgBQgQAAgIAGQgGAGgDAKQgCAKAAANIAAA5g");
	this.shape_262.setTransform(4.9,-123.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#B20512").s().p("AgvBGIAAiHIAqAAIAAAVIABAAQAFgMAKgGQAJgHAOAAIAHABIAHABIAAAmIgJgCIgJgBQgQAAgIAGQgGAGgDAKQgCAKAAANIAAA5g");
	this.shape_263.setTransform(-6.5,-123.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#B20512").s().p("AglA/QgSgJgJgQQgLgQAAgWQAAgVALgQQAJgQASgJQARgJAUAAQAVAAARAJQARAJAKAQQALAQgBAVQABAWgLAQQgKAQgRAJQgRAJgVAAQgUAAgRgJgAgYgYQgJAJAAAPQAAAQAJAJQAJAJAPABQAQgBAJgJQAIgJABgQQgBgPgIgJQgJgKgQAAQgPAAgJAKg");
	this.shape_264.setTransform(-21.3,-123.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#B20512").s().p("AgXA/QgSgJgJgQQgLgQAAgWQAAgVALgQQAJgQASgJQARgJAUAAQAMAAANAEQANAFAKAJIgcAeQgDgFgFgDQgGgDgGAAQgPAAgJAKQgIAJgBAPQABAQAIAJQAJAJAPABQAGAAAGgEQAFgDADgEIAcAdQgKAKgNAEQgNAFgMAAQgUAAgRgJg");
	this.shape_265.setTransform(-36.1,-123.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#B20512").s().p("AAYBGIAAhDIgCgPQAAgIgFgGQgFgGgLAAQgJAAgGAFQgFAFgCAIQgCAIAAAIIAABEIgpAAIAAiHIAnAAIAAASIABAAQADgFAFgFQAGgFAIgDQAHgEAKAAQAVAAALAJQALAIAEAPQAEAOgBATIAABKg");
	this.shape_266.setTransform(-51.3,-123.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#B20512").s().p("AgVBjIAAjFIArAAIAADFg");
	this.shape_267.setTransform(-63.5,-126.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#B20512").s().p("AgUBkIAAiEIApAAIAACEgAgRg3QgIgHAAgLQAAgLAIgHQAHgIAKAAQALAAAHAIQAHAHABALQgBALgHAHQgHAHgLABQgKgBgHgHg");
	this.shape_268.setTransform(-73.9,-120.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_269.setTransform(242.3,65.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAGQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgGADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_270.setTransform(231.8,60.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAPQgKAEgMABIgKgCg");
	this.shape_271.setTransform(220.7,59.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAFgFAEgFIALgGQAGgDAHgBIAKgBQAOAAALAEQALAFAHAIQAIAHAEAMQAFAKAAANQAAAMgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBIgNgEIgLgHQgEgEgFgFIAAAAIAABXgAgRhJQgIADgGAGQgGAGgEAJQgDAHAAAKQAAAJADAIQAEAJAGAGQAGAEAIAEQAIADAJAAQAKAAAIgDQAHgEAHgEQAFgGACgJQAEgIAAgJQAAgKgEgHQgCgJgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_272.setTransform(209.8,64.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_273.setTransform(170.3,60.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAGQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgGADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_274.setTransform(156.7,60.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAPQgKAEgMABIgKgCg");
	this.shape_275.setTransform(114.1,59.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgDAAgFQAAgJgGgEQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgFgEQgHgFgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQAEQAMACAHAIQAJAIgBALQAAAKgDAGQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_276.setTransform(105,60.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAGQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgGADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_277.setTransform(72.7,60.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAGgCAHgBIAMACIgDAPQgEgBgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_278.setTransform(62.7,60.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgIQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPABg");
	this.shape_279.setTransform(51.1,60.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgDAAgFQAAgJgGgEQgGgDgKgCIgOgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQAMACAHAIQAIAIAAALQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_280.setTransform(16.2,60.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgIQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPABg");
	this.shape_281.setTransform(4.5,60.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_282.setTransform(-22.9,60.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgEIABAPQgJAEgNABIgKgCg");
	this.shape_283.setTransform(-46.7,59.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_284.setTransform(-64,60.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#111111").s().p("AAsBcIAAhXIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEQgKgFgIgIQgIgIgEgKQgFgLAAgMQAAgNAFgKQAEgMAIgHQAIgIAKgFQAMgEAMAAIALABQAGABAHADIALAGQAFAFAEAFIAAAAIAAgTIAQAAIAAC1gAgRhJQgHADgGAGQgFAGgDAJQgEAHAAAKQAAAJAEAIQADAJAFAGQAGAEAHAEQAIADAJAAQAJAAAJgDQAIgEAGgEQAGgGAEgJQADgIAAgJQAAgKgDgHQgEgJgGgGQgGgGgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_285.setTransform(-91.7,64.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgIQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPABg");
	this.shape_286.setTransform(-111.9,60.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgFADgEQADgEAEgEQAEgCAGgCQAGgCAHgBIAMACIgDAPQgEgBgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_287.setTransform(-120.7,60.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgIQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPABg");
	this.shape_288.setTransform(-132.3,60.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQAEgFAFgFIAKgGQAHgDAFgBIALgBQAOAAAKAEQALAFAIAIQAIAHAFAMQAEAKAAANQAAAMgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBIgMgEIgKgHQgFgEgEgFIgBAAIAABXgAgRhJQgIADgGAGQgGAGgEAJQgCAHAAAKQAAAJACAIQAEAJAGAGQAGAEAIAEQAJADAIAAQAKAAAIgDQAIgEAFgEQAGgGACgJQAEgIAAgJQAAgKgEgHQgCgJgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_289.setTransform(-145.1,64.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgIQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPABg");
	this.shape_290.setTransform(-171.8,60.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_291.setTransform(-180.6,58);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_292.setTransform(-198.1,60.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgEIABAPQgJAEgNABIgKgCg");
	this.shape_293.setTransform(-208.7,59.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgIQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPABg");
	this.shape_294.setTransform(-219.2,60.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRABQgJAAgGADQgGADgDAGQgEAGgCAIIgBAPIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRABIgGAAQgFACgGAEQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgFQAKgEAKgBIAKABQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_295.setTransform(-235.6,60.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_296.setTransform(248.4,31);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_297.setTransform(202.6,31);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_298.setTransform(155.9,31);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgLgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_299.setTransform(141.5,27.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_300.setTransform(121.4,31);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgGABgHQgBgJAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_301.setTransform(110.4,31);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_302.setTransform(93.8,30.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_303.setTransform(81.3,31);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#111111").s().p("AAkBVIgthPIgdAAIAABPIgSAAIAAipIA0AAQAZAAAQALQAPAMAAAXQAAARgMAMQgLAMgVACIAxBQgAgmgJIAeAAQALAAAHgCQAJgDAFgEQAEgDACgGQACgGABgFQgBgHgCgFQgCgFgEgFQgFgEgJgCQgHgCgLAAIgeAAg");
	this.shape_304.setTransform(68.4,28.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_305.setTransform(50.4,35.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_306.setTransform(40.5,31);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_307.setTransform(10.4,30.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_308.setTransform(-2.7,31);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgLgEgIgHQgHgIgFgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_309.setTransform(-17,33.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_310.setTransform(-27,30.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_311.setTransform(-38.7,31);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_312.setTransform(-55.8,30.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_313.setTransform(-72.5,31);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_314.setTransform(-92.5,31);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_315.setTransform(-127.3,30.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#111111").s().p("AgXBSQgLgFgIgHQgIgIgEgLQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgFAMAAQANAAALAFQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEALgIAIQgIAHgLAFQgLAFgNgBQgMABgLgFgAgRgNQgIAEgFAFQgGAGgCAIQgEAIAAAKQAAAJAEAIQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgIAAgJQAAgKgDgIQgDgIgFgGQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_316.setTransform(-140.9,28.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_317.setTransform(-150.9,28.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_318.setTransform(-171.9,31);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_319.setTransform(-184.5,31.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgDgCgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_320.setTransform(-195.1,29.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_321.setTransform(-202,28.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgGAAgHQAAgJADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgGgEQgFgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGAEQAFADALADIAQAEQALACAIAIQAJAHgBAMQAAAKgDAGQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_322.setTransform(-209.9,31);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_323.setTransform(-228.2,31);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_324.setTransform(-241,30.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_325.setTransform(229.7,-2.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_326.setTransform(167.1,1.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_327.setTransform(134.9,1.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgFADgDQADgFAEgEQAEgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA/g");
	this.shape_328.setTransform(126,1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_329.setTransform(114.3,1.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_330.setTransform(103.7,-0.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_331.setTransform(81.4,1.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgFADgDQADgFAEgEQAEgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA/g");
	this.shape_332.setTransform(71.9,1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#111111").s().p("AAGBIQgFgBgEgDQgDgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_333.setTransform(62.9,-0.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAFAKgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgHgFgDQgHgFgIAAIgIABIgHADIgFAFQgDAEAAAEQAAAIAGADQAFAEALADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_334.setTransform(53.9,1.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_335.setTransform(28.8,1.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgFAEgDQADgFAFgEQADgCAGgDQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA/g");
	this.shape_336.setTransform(20,1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_337.setTransform(1,1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_338.setTransform(-8.4,-1.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgHgGgDQgFgFgJAAIgIABIgHADIgGAFQgBAEAAAEQgBAIAGADQAFAEALADIAQAEQALACAIAIQAJAHgBAMQAAAKgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_339.setTransform(-43.8,1.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_340.setTransform(-55.5,1.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_341.setTransform(-68.3,1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgHgFgDQgHgFgIAAIgIABIgHADIgFAFQgCAEgBAEQAAAIAGADQAGAEAKADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_342.setTransform(-94.1,1.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgFADgDQADgFAFgEQADgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA/g");
	this.shape_343.setTransform(-102.2,1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAFgFAEgFIALgGQAHgDAGgBIAKgBQANAAAMAEQAKAFAIAIQAIAHAEAMQAFAKAAANQAAANgFALQgEAJgIAIQgIAIgKAEQgMAFgNAAIgKgBIgNgEIgLgHQgEgEgFgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAIAGAHQAGAEAIAEQAJAEAIgBQAKABAIgEQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_344.setTransform(-127.5,4.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_345.setTransform(-148.4,1.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_346.setTransform(-167.5,1.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_347.setTransform(-210.5,1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_348.setTransform(-233.2,-1.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#111111").s().p("AgLBbIgLgEIgLgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIALgHQAFgDAGgBIALgBQANAAALAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBgAgRgHQgIADgGAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_349.setTransform(-243,-2.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_350.setTransform(255.7,-28.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_351.setTransform(232.4,-28.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgEgDgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQABADADAAIAHABIAIgBIAJgEIABAQQgKADgMAAIgJgBg");
	this.shape_352.setTransform(216.9,-30.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEAMAAIAKAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_353.setTransform(192.8,-25.9);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgGAEQgGAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_354.setTransform(147.4,-28.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_355.setTransform(126.9,-31.4);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgKgMg");
	this.shape_356.setTransform(79,-28.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAJgDAGQgEAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_357.setTransform(42.5,-28.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_358.setTransform(-46.5,-28.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_359.setTransform(-54.4,-31.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_360.setTransform(-89.8,-32);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_361.setTransform(-113.1,-28.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_362.setTransform(-163.1,-28.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_363.setTransform(-188.4,-32);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#111111").s().p("AgNBcIAAhhIgXAAIAAgOIAXAAIAAgfQAAgWALgKQAJgJARAAIAGAAIAHACIgCAOIgHgBIgFgBQgHAAgEACQgEADgCAEIgEAJIAAALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_364.setTransform(-236.6,-32.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_365.setTransform(-247.6,-28.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgHABIgIADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_366.setTransform(256.4,-58.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_367.setTransform(157.3,-58.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIAAANIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_368.setTransform(108.1,-58.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#111111").s().p("AAsBcIAAhYIgBAAQgEAGgFAEIgKAHIgNAEIgLABQgMAAgMgFQgKgEgIgIQgIgIgFgJQgEgMAAgMQAAgNAEgLQAFgKAIgJQAIgHAKgFQAMgEAMAAIALABQAGABAHADIAKAHQAFADAEAHIABAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgFAGgDAIQgDAJgBAJQABAJADAIQADAJAFAGQAGAFAHADQAIADAJAAQAJAAAJgDQAIgDAGgFQAGgGAEgJQADgIAAgJQAAgJgDgJQgEgIgGgGQgGgGgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_369.setTransform(93.8,-55.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_370.setTransform(46.7,-61.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_371.setTransform(26.2,-58.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEAKgIAIQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAFQgGAFgCAJQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgJgFgFQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_372.setTransform(12.6,-61.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_373.setTransform(-5.7,-58.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#111111").s().p("AgsA4IAAgLIBAhWIg9AAIAAgOIBVAAIAAALIhCBWIBEAAIAAAOg");
	this.shape_374.setTransform(-29.4,-58.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_375.setTransform(-47.1,-58.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgKgEgJgHQgIgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAFAGAIAEQAIADAIAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_376.setTransform(-73.7,-55.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_377.setTransform(-83.6,-58.6);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFADAHAAQAIgBAFgFQAFgFADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_378.setTransform(-115.3,-55.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_379.setTransform(-134.6,-58.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEAKgIAIQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAFQgGAFgCAJQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgJgFgFQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_380.setTransform(-148.2,-61.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_381.setTransform(-166.5,-58.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_382.setTransform(-190.5,-58.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#111111").s().p("AgNBcIAAhhIgYAAIAAgOIAYAAIAAgfQAAgWALgKQAJgJARAAIAHAAIAGACIgDAOIgGgBIgFgBQgHAAgEACQgEADgCAEIgDAJIgBALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_383.setTransform(-205.4,-62.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_384.setTransform(-222.1,-58.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_385.setTransform(222.5,-91.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgDIABAPQgKADgMAAIgKAAg");
	this.shape_386.setTransform(197.3,-89.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_387.setTransform(143.7,-91);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgDIABAPQgJADgNAAIgKAAg");
	this.shape_388.setTransform(136.9,-89.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_389.setTransform(126,-88.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_390.setTransform(112.4,-88.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_391.setTransform(99.9,-88.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_392.setTransform(67,-88.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#111111").s().p("AAsBcIAAhYIAAAAQgEAGgFAEIgLAHIgNAEIgLABQgMAAgMgFQgKgEgIgIQgIgIgEgJQgFgMAAgMQAAgNAFgLQAEgKAIgJQAIgHAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFADAEAHIAAAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgFAGgDAIQgEAJAAAJQAAAJAEAJQADAHAFAGQAGAGAHADQAIADAJABQAJgBAJgDQAIgDAGgGQAGgGAEgHQADgJAAgJQAAgJgDgJQgEgIgGgGQgGgGgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_393.setTransform(52.7,-84.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgGgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAHQAHAJABAMQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_394.setTransform(8.3,-88.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_395.setTransform(-3.5,-88.2);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgFgFQgHgEgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_396.setTransform(-21.9,-88.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_397.setTransform(-42.4,-91);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_398.setTransform(-50.6,-88.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_399.setTransform(-63.7,-88.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_400.setTransform(-76.8,-88.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgEgKgBgMQABgNAEgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAFAGAIAEQAHADAJAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_401.setTransform(-91.1,-85.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgBAIAAIAMAAIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_402.setTransform(-101.1,-88.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_403.setTransform(-112.8,-88.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_404.setTransform(-167.5,-88.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_405.setTransform(-202.3,-88.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_406.setTransform(-224.1,-91.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_407.setTransform(-250.3,-91.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAOIhRAAIAABBIBaAAIAAAQg");
	this.shape_408.setTransform(-259.7,-91.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#111111").s().p("AAFBIQgFgBgDgDQgDgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgEIACAQQgJADgNAAIgKgBg");
	this.shape_409.setTransform(123.3,50.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQAEgFAFgFIAKgGQAHgDAGgBIAKgBQANAAAMAEQAKAFAIAIQAIAHAFAMQAEAKAAANQAAANgEALQgFAJgIAIQgIAIgKAEQgMAFgNAAIgKgBIgNgEIgKgHQgFgEgEgGIgBAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAIAGAHQAGAEAIAEQAJAEAIgBQAKABAIgEQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_410.setTransform(112.4,54.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgLIgBgOIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_411.setTransform(72.9,51.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#111111").s().p("AAFBIQgFgBgDgDQgDgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgEIACAQQgJADgNAAIgKgBg");
	this.shape_412.setTransform(16.7,50.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgHgFgDQgHgFgIAAIgIABIgHADIgFAFQgCAEgBAEQAAAIAGADQAGAEAKADIAQAEQALACAJAIQAHAHABANQAAAJgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_413.setTransform(7.6,51.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#111111").s().p("AgeA5IAAhMIAAgPIgBgUIAQAAIAAAVIAAAAQABgFAEgDQADgFAEgEQAEgCAGgDQAGgCAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_414.setTransform(-34.7,51.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgHgGgDQgFgFgJAAIgIABIgHADIgGAFQgBAEAAAEQgBAIAGADQAFAEALADIAQAEQALACAIAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_415.setTransform(-81.2,51.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgLIgBgOIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_416.setTransform(-120.3,51.4);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#111111").s().p("AAsBcIAAhYIgBAAQgEAGgFAEIgKAHIgNAEIgLABQgMAAgMgFQgKgEgIgIQgIgIgFgJQgEgLAAgNQAAgNAEgKQAFgLAIgJQAIgIAKgEQAMgEAMAAIALABQAGABAHADIAKAHQAFAEAEAFIABAAIAAgSIAQAAIAAC0gAgRhJQgHADgGAGQgFAGgDAIQgDAJgBAJQABAJADAIQADAJAFAGQAGAEAHAEQAIADAJAAQAJAAAJgDQAIgEAGgEQAGgGAEgJQADgIAAgJQAAgJgDgJQgEgIgGgGQgGgGgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_417.setTransform(216.2,25.1);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_418.setTransform(196,21.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgEAGgCQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_419.setTransform(187.2,21.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_420.setTransform(175.6,21.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAFgFAFgEIAKgHQAHgDAGgBIAKgBQANAAAMAEQAKAEAIAIQAIAJAFALQAEAKAAANQAAANgEALQgFAJgIAIQgIAIgKAEQgMAFgNAAIgKgBIgNgEIgKgHQgFgEgFgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAJAGAGQAGAEAIAEQAJADAIAAQAKAAAIgDQAIgEAFgEQAGgGACgJQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_421.setTransform(162.8,25.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_422.setTransform(136.1,21.8);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQACADACAAIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_423.setTransform(99.2,20.3);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_424.setTransform(88.7,21.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_425.setTransform(72.3,21.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_426.setTransform(22.8,21.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#111111").s().p("AgIA4IguhvIAUAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_427.setTransform(9.9,21.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgLACQgVAAgLgMg");
	this.shape_428.setTransform(-16,21.9);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_429.setTransform(-83.8,21.8);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_430.setTransform(-94.7,21.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#111111").s().p("AAkBVIguhPIgdAAIAABPIgRAAIAAipIA0AAQAZAAAQAMQAPALgBAXQAAARgLANQgLALgVABIAxBRgAgngJIAfAAQAKAAAJgCQAHgDAFgDQAFgEADgGQABgFAAgGQAAgHgBgFQgDgFgFgFQgFgEgHgCQgJgCgKAAIgfAAg");
	this.shape_431.setTransform(-136.8,18.9);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_432.setTransform(-164.6,21.8);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_433.setTransform(-175.6,21.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_434.setTransform(-187.4,21.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgEAGgCQAGgCAHAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_435.setTransform(-197,21.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAFgFAEgEIAMgHQAGgDAFgBIALgBQANAAALAEQAMAEAHAIQAIAJAEALQAFAKAAANQAAANgFALQgEAJgIAIQgHAIgMAEQgLAFgNAAIgLgBIgLgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgDAIQgEAJAAAJQAAAJAEAIQADAJAGAGQAGAEAIAEQAIADAJAAQAKAAAIgDQAHgEAHgEQAFgGADgJQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_436.setTransform(-209,25.1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_437.setTransform(-227.1,21.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_438.setTransform(-243.8,21.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADADAAIAHABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_439.setTransform(154,-9.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAFAAQAFAAAEgCQACgCABgEQACgDABgEIAAgJIAAiDIAQAAIAACGIAAAIQAAAGgDAGQgDAGgGAFQgHAEgLAAQgIAAgFgCgAAEhbQgEgEAAgFQAAgFAEgDQAEgDAEAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEADgEAAQgEAAgEgDg");
	this.shape_440.setTransform(83.7,-7.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIALgHQAGgDAHgBIAKgBQAOAAALAFQALAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgDAIAAAJQAAAJADAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGACgIQAEgJAAgJQAAgJgEgIQgCgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_441.setTransform(62.6,-11.4);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgDgCgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_442.setTransform(39.5,-8.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#111111").s().p("AgIBVIAAiZIg4AAIAAgQICBAAIAAAQIg5AAIAACZg");
	this.shape_443.setTransform(27.6,-10.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_444.setTransform(-52.7,-11.4);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_445.setTransform(-97.9,-10.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFADAHAAQAIgBAFgEQAFgGADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_446.setTransform(-117,-5.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_447.setTransform(-179.9,-8.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_448.setTransform(-219.6,-8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_449.setTransform(-232.9,-10.9);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAIAHAEQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_450.setTransform(211.9,-37.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAHABIAIgBIAHgDIACAPQgJADgNAAIgKAAg");
	this.shape_451.setTransform(188.6,-39.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFACAHAAQAIAAAFgEQAFgGADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_452.setTransform(70.9,-35);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAIAHAEQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgGgFQgFgEgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_453.setTransform(53.4,-37.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGAEgDAGQgEAFgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGACQgFAAgGAFQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgGQALgHALABQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_454.setTransform(25.3,-38);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAFgBAIAAIAMAAIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_455.setTransform(12.4,-38);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAHQAIAJAAAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_456.setTransform(-31.9,-37.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#111111").s().p("AgIA4IguhvIAUAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_457.setTransform(-112,-37.9);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFACAHAAQAIAAAFgEQAFgGADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_458.setTransform(-130.2,-35);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGAEgDAGQgEAFgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGACQgFAAgGAFQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgGQALgHALABQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_459.setTransform(-204.7,-38);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_460.setTransform(-221.9,-37.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgBAIAAIAMAAIgDARQgDgCgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_461.setTransform(-231.9,-38);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIALgHQAFgDAGgBIALgBQANAAALAFQALAEAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgDAJAAAJQAAAJADAJQADAHAGAGQAGAGAIADQAJADAIABQAKgBAIgDQAIgDAFgGQAGgGADgHQADgJAAgJQAAgJgDgJQgDgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_462.setTransform(-243.9,-34.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_463.setTransform(271.1,-67.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_464.setTransform(251.7,-67.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_465.setTransform(224.6,-67.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgDQAEgEAGgCQAFgBAIAAIAMABIgDAQQgEgCgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_466.setTransform(215.8,-67.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICDAAIAAAQIg6AAIAACZg");
	this.shape_467.setTransform(203.9,-70.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_468.setTransform(177.9,-67.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_469.setTransform(157.7,-67.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_470.setTransform(144.5,-67.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIAMABQAFABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgLAEIgMABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_471.setTransform(123.5,-71);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJACAHQABAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_472.setTransform(109.8,-67.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_473.setTransform(90.9,-67.6);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#111111").s().p("AgeBUQgOgHgKgNIAQgLQAFAJAKAGQAKAFANABQAGAAAGgCQAHgDAFgDQAFgEAEgGQADgGAAgIQAAgIgEgGQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgFQgGgGgDgIQgEgIAAgLQAAgNAFgIQAEgKAIgGQAIgFAKgEQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVgBQgGABgGACQgHABgFAEQgFAEgDAFQgDAGAAAJQAAALAGAGQAHAHAJADIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAGgKAEQgKAEgJAAQgQgBgOgFg");
	this.shape_474.setTransform(78.3,-70.5);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFACAHAAQAIAAAFgEQAFgGADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_475.setTransform(59.3,-64.8);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_476.setTransform(39.1,-71);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_477.setTransform(25.6,-67.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_478.setTransform(2.2,-70.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgFQADgEAFgDQADgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_479.setTransform(-3.6,-67.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgRAAIAAgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_480.setTransform(-15.4,-67.5);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgLgEgIgHQgHgIgFgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_481.setTransform(-29.6,-64.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_482.setTransform(-43.3,-67.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#111111").s().p("AgeBUQgOgHgKgNIAQgLQAFAJAKAGQAKAFANABQAGAAAGgCQAHgDAFgDQAFgEAEgGQADgGAAgIQAAgIgEgGQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgFQgGgGgDgIQgEgIAAgLQAAgNAFgIQAEgKAIgGQAIgFAKgEQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVgBQgGABgGACQgHABgFAEQgFAEgDAFQgDAGAAAJQAAALAGAGQAHAHAJADIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAGgKAEQgKAEgJAAQgQgBgOgFg");
	this.shape_483.setTransform(-56.7,-70.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_484.setTransform(-76.7,-67.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_485.setTransform(-91,-71);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_486.setTransform(-111.8,-67.6);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_487.setTransform(-121.8,-70.4);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgDQAEgEAGgCQAFgBAIAAIAMABIgDAQQgEgCgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_488.setTransform(-127.6,-67.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_489.setTransform(-139.1,-67.6);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQABADADAAIAHABIAIgBIAJgDIAAAOQgJAFgMAAIgJgBg");
	this.shape_490.setTransform(-149,-69.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_491.setTransform(-155.9,-70.4);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgFQADgEAEgDQAEgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_492.setTransform(-161.7,-67.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_493.setTransform(-173.2,-67.6);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPAMAAAWQAAAXgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgEQAFgFACgFQACgFAAgHQAAgFgCgGQgCgGgFgDQgFgEgIgDQgIgCgLAAIgbAAg");
	this.shape_494.setTransform(-185.4,-70.5);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#111111").s().p("AgTBSQgLgEgIgJQgHgIgFgKQgEgLAAgNQAAgNAEgKQAEgKAIgIQAIgIAKgEQAKgFALABQANgBAKAFQAKAFAHAHQAHAIADAJQAEAKAAALIAAAIIhdAAQABAIAEAIQADAHAGAFQAFAGAHADQAHADAIAAQANAAAJgGQAJgFAFgJIAMAKQgKANgMAGQgMAFgOABQgMgBgKgEgAgNgNQgHACgFAGQgGAFgDAFQgDAHAAAGIBLAAQAAgQgKgJQgJgJgSgBQgGAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_495.setTransform(-206.3,-70.4);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAHABIAIgBIAHgDIACAOQgJAFgNAAIgKgBg");
	this.shape_496.setTransform(-216.9,-69.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_497.setTransform(-223.8,-70.4);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGADgDAHQgEAFgCAHIgBAQIAAA7IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGABQgFACgGAEQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_498.setTransform(-237.1,-67.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_499.setTransform(-254.2,-67.6);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#111111").s().p("AgVBTQgQgHgMgMQgMgMgHgQQgHgQAAgUQAAgSAHgQQAHgRAMgMQAMgMAQgHQAQgGASAAQAQgBAQAHQAPAGAMAPIgPALIgIgJQgEgEgGgDIgNgEQgGgCgHgBQgPABgNAFQgNAHgJAKQgJAKgFANQgFANAAAOQAAAOAFAOQAFAOAJAJQAJALANAFQANAHAPAAIANgBIANgFQAHgDAFgFQAGgEAFgIIAOAKIgLAMQgGAGgIAFQgJAEgJACQgKADgKAAQgSgBgQgGg");
	this.shape_500.setTransform(-269.5,-70.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#B20512").s().p("AglA/QgRgJgKgQQgKgQAAgWQAAgVAKgQQAKgQARgIQARgKAUABQAVgBARAKQASAIAJAQQAKAQAAAVQAAAWgKAQQgJAQgSAJQgRAIgVABQgUgBgRgIgAgYgYQgJAJAAAPQAAAPAJAKQAJAJAPABQAQgBAJgJQAIgKABgPQgBgPgIgJQgJgKgQAAQgPAAgJAKg");
	this.shape_501.setTransform(59,-110.8);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#B20512").s().p("AAABWQgMgEgGgKQgHgIAAgPIAAhAIgbAAIAAghIAbAAIAAgpIApAAIAAApIAlAAIAAAhIglAAIAAAtIABAMQABAGAEADQAFADAJAAIAJAAQAFgBADgCIAAAjQgHACgIABIgOABQgOAAgKgEg");
	this.shape_502.setTransform(44.5,-112.7);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#B20512").s().p("AgYA/QgQgJgLgQQgKgQAAgWQAAgVAKgQQALgQAQgIQARgKAVABQAMAAANADQANAFAKAKIgbAdQgDgEgGgEQgGgDgGAAQgPAAgJAKQgIAJgBAPQABAPAIAKQAJAJAPABQAGAAAGgEQAFgDAEgEIAbAdQgKAKgNAEQgNAFgMAAQgVgBgRgIg");
	this.shape_503.setTransform(32.8,-110.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#B20512").s().p("AgfA/QgRgJgKgQQgKgQgBgWQABgVAKgQQAKgQARgIQARgKAUABQAUgBAOAKQAOAIAIAQQAIAQAAAVIAAANIhhAAQADANAIAGQAJAIALgBQAKABAIgFQAHgFAFgHIAdAWQgKAMgPAHQgPAIgRAAQgUgBgRgIgAAcgPQAAgKgHgIQgHgHgMAAQgIAAgHAEQgGADgEAGQgDAGgBAGIA3AAIAAAAg");
	this.shape_504.setTransform(17.5,-110.8);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#B20512").s().p("AglA/QgSgJgJgQQgLgQAAgWQAAgVALgQQAJgQASgIQARgKAUABQAVgBARAKQARAIAKAQQALAQgBAVQABAWgLAQQgKAQgRAJQgRAIgVABQgUgBgRgIgAgYgYQgJAJAAAPQAAAPAJAKQAJAJAPABQAQgBAJgJQAIgKABgPQgBgPgIgJQgJgKgQAAQgPAAgJAKg");
	this.shape_505.setTransform(-21.3,-110.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#B20512").s().p("AgXA/QgSgJgJgQQgLgQAAgWQAAgVALgQQAJgQASgIQARgKAUABQAMAAANADQANAFAKAKIgcAdQgDgEgFgEQgGgDgGAAQgPAAgJAKQgIAJgBAPQABAPAIAKQAJAJAPABQAGAAAGgEQAFgDADgEIAcAdQgKAKgNAEQgNAFgMAAQgUgBgRgIg");
	this.shape_506.setTransform(-36.1,-110.8);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_507.setTransform(231.8,58.9);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgDgCgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAPQgKAEgMAAIgKgBg");
	this.shape_508.setTransform(220.7,57.4);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAFgGAEgEIALgGQAGgDAHgBIAKgBQAOAAALAEQALAFAHAIQAIAHAEAMQAFAKAAANQAAAMgFAMQgEAJgIAIQgHAIgLAEQgLAFgOAAIgKgBIgNgEIgLgHQgEgEgFgFIAAAAIAABXgAgRhJQgIADgGAGQgGAGgEAIQgDAIAAAKQAAAJADAIQAEAIAGAHQAGAEAIAEQAIAEAJgBQAKABAIgEQAHgEAHgEQAFgHACgIQAEgIAAgJQAAgKgEgIQgCgIgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_509.setTransform(209.8,62.2);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_510.setTransform(195.4,58.9);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGABQgGABgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_511.setTransform(170.3,58.7);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_512.setTransform(156.7,58.9);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_513.setTransform(124.7,58.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgDgCgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAPQgKAEgMAAIgKgBg");
	this.shape_514.setTransform(114.1,57.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgDQgFgCgDgGQgEgGABgHQgBgJAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_515.setTransform(105,58.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_516.setTransform(93.2,58.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_517.setTransform(72.7,58.9);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgDQADgFAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_518.setTransform(62.7,58.7);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_519.setTransform(51.1,58.9);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgDQgFgCgDgGQgDgGgBgHQABgJADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQAMACAHAIQAIAHAAAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_520.setTransform(16.2,58.9);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_521.setTransform(4.5,58.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGABQgGABgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_522.setTransform(-22.9,58.7);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_523.setTransform(-36.1,58.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgDgCgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgEIABAPQgJAEgNAAIgKgBg");
	this.shape_524.setTransform(-46.7,57.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_525.setTransform(-64,58.9);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#111111").s().p("AAsBcIAAhXIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgFQgKgEgIgIQgIgIgEgJQgFgMAAgMQAAgNAFgKQAEgMAIgHQAIgIAKgFQAMgEAMAAIALABQAGABAHADIALAGQAFAEAEAGIAAAAIAAgTIAQAAIAAC1gAgRhJQgHADgGAGQgFAGgDAIQgEAIAAAKQAAAJAEAIQADAIAFAHQAGAEAHAEQAIAEAJgBQAJABAJgEQAIgEAGgEQAGgHAEgIQADgIAAgJQAAgKgDgIQgEgIgGgGQgGgGgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_526.setTransform(-91.7,62.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_527.setTransform(-111.9,58.9);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgFADgDQADgFAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_528.setTransform(-120.7,58.7);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_529.setTransform(-132.3,58.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQAEgGAFgEIAKgGQAHgDAFgBIALgBQAOAAAKAEQALAFAIAIQAIAHAFAMQAEAKAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgFgEgEgFIgBAAIAABXgAgRhJQgIADgGAGQgGAGgEAIQgCAIAAAKQAAAJACAIQAEAIAGAHQAGAEAIAEQAJAEAIgBQAKABAIgEQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgKgEgIQgCgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_530.setTransform(-145.1,62.2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_531.setTransform(-171.8,58.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgFAEgDQADgFAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_532.setTransform(-186.4,58.7);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_533.setTransform(-198.1,58.9);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgDgCgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgEIABAPQgJAEgNAAIgKgBg");
	this.shape_534.setTransform(-208.7,57.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_535.setTransform(-219.2,58.9);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_536.setTransform(-235.6,58.7);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA5IgPAAIAAhWIgBgLIgBgOIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_537.setTransform(175.7,28.9);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCAEAAAEQgBAIAGADQAFAEALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_538.setTransform(110.4,29.1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEABQgDgBgEgCg");
	this.shape_539.setTransform(102.4,26.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#111111").s().p("AAkBVIgthPIgdAAIAABPIgSAAIAAipIA0AAQAZAAAQAMQAPALAAAXQAAARgMAMQgLALgVADIAxBQgAgmgJIAeAAQALAAAHgCQAJgDAFgEQAEgDACgGQACgGABgFQgBgHgCgFQgCgGgEgEQgFgEgJgCQgHgCgLAAIgeAAg");
	this.shape_540.setTransform(68.4,26.2);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEABQgDgBgEgCg");
	this.shape_541.setTransform(31.7,26.3);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA5IgPAAIAAhWIgBgLIgBgOIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_542.setTransform(10.4,28.9);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAQAAIAAAVIAAAAQACgFADgDQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDAQQgEgBgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_543.setTransform(-27,28.9);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA5IgQAAIAAhWIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABGg");
	this.shape_544.setTransform(-55.8,28.9);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA5IgPAAIAAhWIgBgLIgBgOIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_545.setTransform(-127.3,28.9);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgMQAAgOAFgKQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFAKAAAOQAAAMgFALQgEALgIAHQgIAJgLAEQgLAFgNgBQgMABgLgFgAgRgNQgIAEgFAFQgGAGgCAIQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgIgFgGQgGgFgIgEQgHgEgKABQgJgBgIAEgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_546.setTransform(-140.9,26.3);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEABQgDgBgEgCg");
	this.shape_547.setTransform(-150.9,26.3);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_548.setTransform(-195.1,27.6);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEABQgDgBgEgCg");
	this.shape_549.setTransform(-202,26.3);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgGgDQgFgFgJAAIgIABIgHADIgGAFQgBAEAAAEQgBAIAGADQAFAEALADIAQAEQALACAIAIQAJAHgBAMQAAAKgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_550.setTransform(-209.9,29.1);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA5IgPAAIAAhWIgBgLIgBgOIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_551.setTransform(-241,28.9);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#111111").s().p("AAGBIQgFgBgEgDQgDgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIADAGQADADADAAIAHABIAHgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_552.setTransform(62.9,-2.2);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_553.setTransform(20,-0.9);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_554.setTransform(-191.8,-0.7);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#111111").s().p("AAGBIQgGgBgCgEQgEgCgDgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQABADADAAIAHABIAIgBIAJgEIABAQQgKADgMAAIgJgBg");
	this.shape_555.setTransform(216.9,-32);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAIgEAHQgDAGgGAFQgGAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_556.setTransform(147.4,-30.5);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_557.setTransform(42.5,-30.5);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_558.setTransform(-13.5,-30.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_559.setTransform(-46.5,-30.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_560.setTransform(-113.1,-30.7);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_561.setTransform(-163.1,-30.5);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_562.setTransform(-260.8,-30.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgHABIgIADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_563.setTransform(256.4,-60.3);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgGgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAHQAHAJABAMQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_564.setTransform(157.3,-60.3);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#111111").s().p("AAsBcIAAhYIgBAAQgEAGgFAEIgKAHIgNAEIgLABQgMAAgMgFQgKgEgIgIQgIgIgFgJQgEgMAAgMQAAgNAEgLQAFgKAIgJQAIgHAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFADAEAHIABAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgFAGgDAIQgDAJgBAJQABAJADAJQADAHAFAGQAGAGAHADQAIADAJABQAJgBAJgDQAIgDAGgGQAGgGAEgHQADgJAAgJQAAgJgDgJQgEgIgGgGQgGgGgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_565.setTransform(93.8,-57);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEALgIAHQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAGQgGAEgCAJQgEAIAAAJQAAAJAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgEQgGgGgIgEQgHgEgKAAQgJAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_566.setTransform(12.6,-63.1);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEALgIAHQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAGQgGAEgCAJQgEAIAAAJQAAAJAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgEQgGgGgIgEQgHgEgKAAQgJAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_567.setTransform(-148.2,-63.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_568.setTransform(-212.4,-63.1);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_569.setTransform(-222.1,-60.5);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_570.setTransform(-235.1,-60.3);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIALgHQAGgDAHgBIAKgBQAOAAALAFQALAEAHAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgHAIgLAEQgLAFgOAAIgKgBIgNgEIgLgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgDAJAAAJQAAAJADAJQAEAHAGAGQAGAGAIADQAIADAJABQAKgBAIgDQAHgDAHgGQAFgGACgHQAEgJAAgJQAAgJgEgJQgCgIgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_571.setTransform(-253.7,-57);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_572.setTransform(197.3,-91.6);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgDIABAOQgJAFgNAAIgKgBg");
	this.shape_573.setTransform(136.9,-91.6);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_574.setTransform(126,-90.3);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#111111").s().p("AAsBcIAAhYIAAAAQgEAGgFAEIgLAHIgNAEIgLABQgMAAgMgEQgKgFgIgIQgIgIgEgKQgFgKAAgNQAAgNAFgLQAEgLAIgIQAIgHAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFADAEAHIAAAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgFAGgDAJQgEAHAAAKQAAAJAEAJQADAHAFAGQAGAGAHADQAIADAJABQAJgBAJgDQAIgDAGgGQAGgGAEgHQADgJAAgJQAAgKgDgHQgEgJgGgGQgGgGgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_575.setTransform(52.7,-86.8);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgFAAgJQAAgIAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgGgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFADQAGAEAKADIAQADQALADAJAHQAHAJABAMQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_576.setTransform(8.3,-90.1);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_577.setTransform(-3.5,-90.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_578.setTransform(-21.9,-90.1);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_579.setTransform(-63.7,-90.3);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_580.setTransform(-76.8,-90.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgDQADgEAGgCQAFgBAIAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_581.setTransform(-101.1,-90.3);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_582.setTransform(-112.8,-90.1);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_583.setTransform(-167.5,-90.1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_584.setTransform(-202.3,-90.3);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#B20512").s().p("AgmA+QgQgIgLgQQgKgQAAgWQAAgVAKgQQALgQAQgJQASgIAUgBQAVABARAIQASAJAKAQQAKAQAAAVQAAAWgKAQQgKAQgSAIQgRAKgVgBQgUABgSgKgAgYgYQgIAKAAAOQAAAQAIAJQAJAJAPAAQAQAAAIgJQAKgJgBgQQABgOgKgKQgIgKgQAAQgPAAgJAKg");
	this.shape_585.setTransform(63,-125.8);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#B20512").s().p("AgBBWQgLgFgHgIQgGgJAAgPIAAhAIgbAAIAAgiIAbAAIAAgoIApAAIAAAoIAlAAIAAAiIglAAIAAAtIABAMQABAGAFADQAEAEAJAAIAJgBQAFgBADgDIAAAjQgHADgHABIgPABQgOAAgLgEg");
	this.shape_586.setTransform(47.5,-127.7);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#B20512").s().p("AgYA+QgRgIgKgQQgJgQgBgWQABgVAJgQQAKgQARgJQASgIAUgBQAMAAANAFQANAEAKAJIgbAeQgDgEgGgDQgFgEgHAAQgPAAgJAKQgJAKAAAOQAAAQAJAJQAJAJAPAAQAHAAAFgCQAFgEAEgEIAbAdQgKAKgNAFQgNADgMAAQgUABgSgKg");
	this.shape_587.setTransform(34.8,-125.8);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#B20512").s().p("AgfA+QgRgIgKgQQgKgQgBgWQABgVAKgQQAKgQARgJQARgIAUgBQAUABAOAIQAOAJAIAQQAIAQAAAVIAAANIhhAAQADAMAIAIQAJAGALABQAKAAAIgFQAHgFAFgHIAdAVQgKAOgPAGQgPAIgRgBQgUABgRgKgAAcgPQAAgKgHgIQgHgHgMAAQgIAAgHADQgGAEgEAGQgDAGgBAGIA3AAIAAAAg");
	this.shape_588.setTransform(18.5,-125.8);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#B20512").s().p("AgmA+QgQgIgLgQQgJgQgBgWQABgVAJgQQALgQAQgJQASgIAUgBQAVABARAIQASAJAKAQQAKAQgBAVQABAWgKAQQgKAQgSAIQgRAKgVgBQgUABgSgKgAgYgYQgIAKAAAOQAAAQAIAJQAJAJAPAAQAQAAAIgJQAJgJAAgQQAAgOgJgKQgIgKgQAAQgPAAgJAKg");
	this.shape_589.setTransform(-23.3,-125.8);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#B20512").s().p("AgYA+QgQgIgLgQQgJgQgBgWQABgVAJgQQALgQAQgJQASgIAUgBQAMAAANAFQANAEAKAJIgbAeQgDgEgGgDQgFgEgHAAQgPAAgJAKQgIAKgBAOQABAQAIAJQAJAJAPAAQAHAAAFgCQAFgEAEgEIAbAdQgKAKgNAFQgNADgMAAQgUABgSgKg");
	this.shape_590.setTransform(-39.1,-125.8);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#B20512").s().p("AAXBGIAAhDIgBgPQgBgIgEgGQgFgGgKAAQgLAAgEAFQgGAFgCAIQgCAIABAIIAABEIgrAAIAAiHIApAAIAAASIABAAQACgFAGgFQAFgFAIgDQAHgEAKAAQAVAAALAJQALAIAEAPQADAOABATIAABKg");
	this.shape_591.setTransform(-55.3,-126);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#111111").s().p("AgHAIQgEgDABgFQgBgEAEgEQADgDAEAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_592.setTransform(308,23.8);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_593.setTransform(298.7,19.6);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgEgEgCgFQgCgFgBgJIAAhCIgUAAIAAgNIAUAAIAAgeIAOAAIAAAeIAdAAIAAANIgdAAIAAA+IABAJQABAEACACQABACAEABIAFAAIAHgBIAIgDIAAAOQgIAEgKAAIgJgBg");
	this.shape_594.setTransform(288.8,18.3);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#111111").s().p("Ag0BXIAAiqIAOAAIAAASIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAKQAEAKAAAMQAAAMgEAKQgEAJgHAIQgHAHgJAEQgKAFgMAAIgJgCQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAABTgAgPhFQgHAEgGAFQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAEAHAEQAHADAIAAQAJAAAHgDQAHgEAFgEQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_595.setTransform(279.1,22.7);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_596.setTransform(266.2,19.6);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#111111").s().p("AgNA0QgKgFgGgHQgIgIgDgKQgEgKAAgMQAAgLAEgKQADgLAIgHQAGgHAKgFQAKgEALAAQAKABAKAEQAJAEAIAKIgMAJQgEgGgGgEQgGgEgJAAQgIAAgHADQgGADgFAGQgFAFgDAIQgCAIAAAIQAAAJACAIQADAIAFAFQAFAGAGADQAHADAIAAQAJAAAGgEQAGgEAEgGIAMAJQgIAJgJAFQgKAEgKABQgLAAgKgEg");
	this.shape_597.setTransform(255.6,19.6);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_598.setTransform(243.9,19.5);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_599.setTransform(231.8,19.6);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#111111").s().p("AgNA0QgKgFgGgHQgIgIgDgKQgEgKAAgMQAAgLAEgKQADgLAIgHQAGgHAKgFQAKgEALAAQAKABAKAEQAJAEAIAKIgMAJQgDgGgHgEQgHgEgIAAQgIAAgHADQgHADgFAGQgEAFgDAIQgDAIABAIQgBAJADAIQADAIAEAFQAFAGAHADQAHADAIAAQAIAAAHgEQAHgEADgGIAMAJQgIAJgJAFQgKAEgKABQgLAAgKgEg");
	this.shape_600.setTransform(220.7,19.6);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_601.setTransform(203.3,19.6);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgDgEgDgFQgCgFAAgJIAAhCIgWAAIAAgNIAWAAIAAgeIANAAIAAAeIAcAAIAAANIgcAAIAAA+IABAJQABAEACACQABACADABIAHAAIAHgBIAHgDIAAAOQgHAEgMAAIgIgBg");
	this.shape_602.setTransform(193.8,18.3);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_603.setTransform(185.8,19.6);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_604.setTransform(175.2,19.6);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_605.setTransform(157,19.6);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIgBgSIAPAAIAAATIAAAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAFABIgEAPIgIgBQgIAAgFADQgFADgEAFQgEAGgCAFQgBAGgBAGIAAA6g");
	this.shape_606.setTransform(148.1,19.5);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_607.setTransform(137.8,19.6);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_608.setTransform(130,16.4);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#111111").s().p("AgNA0QgJgFgIgHQgGgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAGgHQAIgHAJgFQAKgEALAAQALABAJAEQAKAEAHAKIgMAJQgEgGgGgEQgHgEgIAAQgIAAgGADQgIADgEAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAEAGAIADQAGADAIAAQAIAAAHgEQAGgEAEgGIAMAJQgHAJgKAFQgJAEgLABQgLAAgKgEg");
	this.shape_609.setTransform(122.6,19.6);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_610.setTransform(106.7,19.6);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_611.setTransform(96.3,19.6);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#111111").s().p("AgbBMQgMgFgKgLIALgLQAGAIAKAGQAKAFAMAAQAKAAAHgDQAIgEAEgFQAFgGACgIQACgHAAgJIAAgTQgHALgKAFQgKAEgLAAQgKAAgJgEQgKgEgHgHQgHgHgEgJQgEgKAAgLQAAgMAEgKQAEgKAGgHQAHgIAJgEQAKgEALAAIAIABIAKADQAFACAFAEQAFAEAFAGIAAgRIAOAAIAABnQAAAJgCAKQgCAJgGAJQgGAIgKAFQgLAFgQAAQgPAAgLgFgAgNg/QgHADgFAGQgFAFgDAHQgDAIAAAIQAAAIADAIQADAHAFAFQAFAFAHADQAHAEAGAAQAIAAAHgDQAHgDAGgFQAFgFADgHQADgIgBgJQAAgIgCgIQgDgHgFgFQgFgGgHgDQgHgDgJAAQgGAAgHADg");
	this.shape_612.setTransform(84.2,22.2);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_613.setTransform(71.9,19.5);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_614.setTransform(60.1,19.6);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgEgEgCgFQgCgFAAgJIAAhCIgVAAIAAgNIAVAAIAAgeIANAAIAAAeIAdAAIAAANIgdAAIAAA+IABAJQABAEACACQABACAEABIAFAAIAHgBIAIgDIABAOQgJAEgKAAIgJgBg");
	this.shape_615.setTransform(50.7,18.3);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_616.setTransform(35.2,19.6);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#111111").s().p("AghArQgJgKAAgUIAAhCIAOAAIAAA5QAAAJABAHQABAGADAFQAEAFAFACQAFACAIAAIAFAAQAFgBAFgEQAGgEAEgJQAEgIAAgOIAAg1IAOAAIAABRIABALIAAAMIgOAAIgBgIIAAgJIAAAAIgGAIIgIAGQgFADgFACIgJABQgTAAgJgLg");
	this.shape_617.setTransform(23.3,19.8);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#111111").s().p("AAnBXIAAhTIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFQgKgEgHgHQgHgIgEgJQgEgKAAgMQAAgMAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAgSIAOAAIAACqgAgPhFQgHAEgFAFQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAEAHAEQAHADAIAAQAJAAAHgDQAHgEAGgEQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_618.setTransform(10.5,22.7);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_619.setTransform(-7.4,19.6);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIgBgSIAPAAIAAATIAAAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAFABIgEAPIgIgBQgIAAgFADQgFADgEAFQgEAGgCAFQgCAGAAAGIAAA6g");
	this.shape_620.setTransform(-15.3,19.5);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_621.setTransform(-25.5,19.6);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#111111").s().p("Ag0BXIAAiqIAOAAIAAASIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAKQAEAKAAAMQAAAMgEAKQgEAJgHAIQgHAHgJAEQgKAFgMAAIgJgCQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAABTgAgPhFQgHAEgGAFQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAEAHAEQAHADAIAAQAJAAAHgDQAHgEAFgEQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_622.setTransform(-37,22.7);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_623.setTransform(-52.3,16.4);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_624.setTransform(-60.7,19.6);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#111111").s().p("AgGBPIAAhpIANAAIAABpgAgGg7QgDgDAAgFQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_625.setTransform(-68.5,17.1);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIAAgSIANAAIAAATIABAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAEABIgCAPIgJgBQgIAAgGADQgEADgEAFQgEAGgBAFQgCAGAAAGIAAA6g");
	this.shape_626.setTransform(-73.7,19.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_627.setTransform(-84.2,19.6);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#111111").s().p("AAFBEQgFgBgCgDQgEgEgCgFQgCgFgBgJIAAhCIgUAAIAAgNIAUAAIAAgeIAOAAIAAAeIAcAAIAAANIgcAAIAAA+IABAJQABAEACACQACACADABIAFAAIAHgBIAIgDIAAAOQgHAEgMAAIgIgBg");
	this.shape_628.setTransform(-93.6,18.3);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_629.setTransform(-103,19.6);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#111111").s().p("AA9A2IAAg8QAAgQgGgJQgFgIgOAAQgIAAgGADQgFADgEAGQgCAFgCAHQgCAHABAHIAAA3IgOAAIAAg8QABgQgGgJQgFgIgPAAIgFAAQgFABgFAEQgFAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIAAgMIgBgLIAPAAIAAAQIAAAAQAGgKAJgEQAJgFAJAAIAJABQAEABAEACQAFACADAFQADAEACAHQAFgKAJgGQAJgGAKAAQAUAAAJALQAJAKAAAUIAABCg");
	this.shape_630.setTransform(-117.5,19.5);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_631.setTransform(-134.9,16.4);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_632.setTransform(-143.5,19.6);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_633.setTransform(-161.7,19.6);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#111111").s().p("AgHA1IgphpIARAAIAgBYIAfhYIAQAAIgoBpg");
	this.shape_634.setTransform(-173.1,19.6);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_635.setTransform(-184.3,19.6);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#111111").s().p("AghArQgJgKAAgUIAAhCIAOAAIAAA5QAAAJABAHQABAGADAFQAEAFAFACQAFACAIAAIAFAAQAFgBAFgEQAGgEAEgJQAEgIAAgOIAAg1IAOAAIAABRIABALIAAAMIgOAAIgBgIIAAgJIAAAAIgGAIIgIAGQgFADgFACIgJABQgTAAgJgLg");
	this.shape_636.setTransform(-196.2,19.8);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_637.setTransform(-208.2,19.5);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_638.setTransform(-225.9,19.6);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_639.setTransform(-238.7,16.5);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_640.setTransform(-256.6,19.6);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_641.setTransform(-266.4,19.6);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#111111").s().p("AgGBPIAAhpIANAAIAABpgAgGg7QgDgDAAgFQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_642.setTransform(-273.5,17.1);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#111111").s().p("AgHA1IgohpIARAAIAeBYIAhhYIAPAAIgoBpg");
	this.shape_643.setTransform(-281.2,19.6);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_644.setTransform(-292.3,19.6);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#111111").s().p("AAgBQIgphKIgZAAIAABKIgQAAIAAifIAvAAQAWAAANALQAOAKAAAWQAAAQgKAMQgKAKgTACIAsBMgAgigIIAbAAQAJAAAHgDQAIgCAEgEQAEgDACgFQACgGAAgFQAAgGgCgFQgCgFgEgEQgEgEgIgCQgHgCgJAAIgbAAg");
	this.shape_645.setTransform(-303.8,16.9);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#111111").s().p("AgHAIQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_646.setTransform(283.7,-4.1);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_647.setTransform(274.9,-8.3);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#111111").s().p("AgOBQIAAhoIAOAAIAABogAgTgvIAUggIATAAIgbAgg");
	this.shape_648.setTransform(267.8,-11);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#111111").s().p("AAdBNIAAg6QAAgSgFgIQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAIQgEAIAAAOIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAATIAABDgAggg0IACgIIAEgIQACgDAEgCQADgCAFAAIAIABIAGAEIAIADQAEACADAAQAFAAACgDQACgEABgEIAJAAIgCAJIgDAHQgDADgDACQgEACgEAAIgIgBIgIgEIgGgDIgHgCQgFAAgCAEQgDADgBAEg");
	this.shape_649.setTransform(258.4,-10.8);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_650.setTransform(246.8,-8.3);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#111111").s().p("Ag0BXIAAiqIAOAAIAAASIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAKQAEAKAAAMQAAAMgEAKQgEAJgHAIQgHAHgJAEQgKAFgMAAIgJgCQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAABTgAgPhFQgHAEgGAFQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAEAHAEQAHADAIAAQAJAAAHgDQAHgEAFgEQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_651.setTransform(235.4,-5.2);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#111111").s().p("AA9A2IAAg8QAAgQgGgJQgFgIgOAAQgIAAgFADQgGADgDAGQgEAFgBAHQgCAHABAHIAAA3IgOAAIAAg8QABgQgGgJQgFgIgPAAIgFAAQgFABgFAEQgFAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIAAgMIgBgLIAPAAIAAAQIAAAAQAFgKAJgEQAKgFAIAAIAJABQAFABAEACQAFACADAFQADAEADAHQADgKAKgGQAJgGAKAAQAUAAAJALQAJAKAAAUIAABCg");
	this.shape_652.setTransform(219.2,-8.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_653.setTransform(203.9,-8.3);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#111111").s().p("AgNA0QgJgFgIgHQgGgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAGgHQAIgHAJgFQAKgEALAAQALABAJAEQAKAEAHAKIgMAJQgEgGgGgEQgHgEgIAAQgIAAgGADQgIADgEAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAEAGAIADQAGADAIAAQAIAAAHgEQAGgEAEgGIAMAJQgHAJgKAFQgJAEgLABQgLAAgKgEg");
	this.shape_654.setTransform(192.8,-8.3);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_655.setTransform(175.5,-8.3);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_656.setTransform(167.7,-11.6);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_657.setTransform(153.1,-8.5);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_658.setTransform(141.5,-8.3);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#111111").s().p("AgaA2IAAhHIgBgPIAAgSIANAAIAAATIABAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAEABIgCAPIgIgBQgJAAgGADQgEADgEAFQgEAGgBAFQgCAGgBAGIAAA6g");
	this.shape_659.setTransform(133.6,-8.5);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#111111").s().p("AgbBMQgMgFgKgLIALgLQAGAIAKAGQAKAFAMAAQAKAAAHgDQAIgEAEgFQAFgGACgIQACgHAAgJIAAgTQgHALgKAFQgKAEgLAAQgKAAgJgEQgKgEgHgHQgHgHgEgJQgEgKAAgLQAAgMAEgKQAEgKAGgHQAHgIAJgEQAKgEALAAIAIABIAKADQAFACAFAEQAFAEAFAGIAAgRIAOAAIAABnQAAAJgCAKQgCAJgGAJQgGAIgKAFQgLAFgQAAQgPAAgLgFgAgNg/QgHADgFAGQgFAFgDAHQgDAIAAAIQAAAIADAIQADAHAFAFQAFAFAHADQAHAEAGAAQAIAAAHgDQAHgDAGgFQAFgFADgHQADgIgBgJQAAgIgCgIQgDgHgFgFQgFgGgHgDQgHgDgJAAQgGAAgHADg");
	this.shape_660.setTransform(122.4,-5.8);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_661.setTransform(110.2,-8.3);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgEgEgCgFQgCgFgBgJIAAhCIgUAAIAAgNIAUAAIAAgeIAOAAIAAAeIAdAAIAAANIgdAAIAAA+IABAJQABAEACACQABACAEABIAFAAIAHgBIAIgDIAAAOQgIAEgKAAIgJgBg");
	this.shape_662.setTransform(100.7,-9.7);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_663.setTransform(91,-8.5);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#111111").s().p("AgGBOIAAhoIANAAIAABogAgGg7QgDgDAAgEQAAgFADgEQADgCADAAQAEAAADACQADAEAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_664.setTransform(82.7,-10.9);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_665.setTransform(68.3,-8.3);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#111111").s().p("AghArQgJgKAAgUIAAhCIAOAAIAAA5QAAAJABAHQABAGADAFQAEAFAFACQAFACAIAAIAFAAQAFgBAFgEQAGgEAEgJQAEgIAAgOIAAg1IAOAAIAABRIABALIAAAMIgOAAIgBgIIAAgJIAAAAIgGAIIgIAGQgFADgFACIgJABQgTAAgJgLg");
	this.shape_666.setTransform(56.3,-8.2);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#111111").s().p("AAnBXIAAhTIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFQgKgEgHgHQgHgIgEgJQgEgKAAgMQAAgMAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAgSIAOAAIAACqgAgPhFQgHAEgFAFQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAEAHAEQAHADAIAAQAJAAAHgDQAHgEAGgEQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_667.setTransform(43.6,-5.2);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBQAFgBADgCQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_668.setTransform(27,-8.3);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_669.setTransform(16.6,-8.3);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_670.setTransform(5.2,-8.5);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_671.setTransform(-7,-8.3);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBQAFgBADgCQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_672.setTransform(-17.8,-8.3);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#111111").s().p("AgaA2IAAhHIgBgPIAAgSIANAAIAAATIABAAIAEgIIAHgHIAIgFQAFgCAHAAQAGAAAFABIgDAPIgIgBQgIAAgHADQgEADgEAFQgEAGgCAFQgCAGAAAGIAAA6g");
	this.shape_673.setTransform(-25,-8.5);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_674.setTransform(-35.4,-8.3);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#111111").s().p("Ag0BXIAAiqIAOAAIAAASIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAKQAEAKAAAMQAAAMgEAKQgEAJgHAIQgHAHgJAEQgKAFgMAAIgJgCQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAABTgAgPhFQgHAEgGAFQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAEAHAEQAHADAIAAQAJAAAHgDQAHgEAFgEQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_675.setTransform(-47.5,-5.2);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_676.setTransform(-66.3,-8.3);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIgBgSIAPAAIAAATIAAAAIAEgIIAHgHIAIgFQAFgCAHAAQAGAAAFABIgEAPIgIgBQgHAAgGADQgFADgEAFQgEAGgCAFQgBAGAAAGIAAA6g");
	this.shape_677.setTransform(-74.8,-8.5);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#111111").s().p("AAFBEQgFgBgCgDQgEgEgCgFQgCgFgBgJIAAhCIgUAAIAAgNIAUAAIAAgeIAOAAIAAAeIAcAAIAAANIgcAAIAAA+IABAJQABAEACACQACACADABIAFAAIAHgBIAIgDIAAAOQgHAEgMAAIgIgBg");
	this.shape_678.setTransform(-82.8,-9.7);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_679.setTransform(-92.5,-8.5);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_680.setTransform(-104.2,-8.3);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_681.setTransform(-122.4,-8.3);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#111111").s().p("AAFBEQgFgBgCgDQgDgEgDgFQgDgFABgJIAAhCIgWAAIAAgNIAWAAIAAgeIANAAIAAAeIAdAAIAAANIgdAAIAAA+IABAJQABAEACACQABACADABIAGAAIAIgBIAHgDIABAOQgJAEgKAAIgJgBg");
	this.shape_682.setTransform(-132.2,-9.7);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#111111").s().p("AgNA0QgJgFgHgHQgIgIgDgKQgEgKAAgMQAAgLAEgKQADgLAIgHQAHgHAJgFQAKgEALAAQAKABAKAEQAKAEAHAKIgMAJQgDgGgHgEQgHgEgIAAQgIAAgHADQgHADgFAGQgEAFgDAIQgCAIgBAIQABAJACAIQADAIAEAFQAFAGAHADQAHADAIAAQAIAAAHgEQAHgEADgGIAMAJQgHAJgKAFQgKAEgKABQgLAAgKgEg");
	this.shape_683.setTransform(-140.6,-8.3);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#111111").s().p("AgGBOIAAhoIANAAIAABogAgGg7QgDgDAAgEQAAgFADgEQADgCADAAQAEAAADACQADAEAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_684.setTransform(-148.7,-10.9);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_685.setTransform(-153.8,-11.6);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#111111").s().p("AgMBXIAAhbIgVAAIAAgOIAVAAIAAgdQAAgVAKgJQAIgJAPAAIAHABIAGABIgDAOIgFgCIgGAAQgGAAgEACQgDACgCAEQgCAEgBAFIAAAKIAAAbIAYAAIAAAOIgYAAIAABbg");
	this.shape_686.setTransform(-159,-11.7);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_687.setTransform(-168.8,-8.5);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_688.setTransform(-180.9,-8.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#111111").s().p("AgNA0QgJgFgIgHQgGgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAGgHQAIgHAJgFQAKgEALAAQALABAJAEQAKAEAHAKIgMAJQgDgGgHgEQgGgEgJAAQgIAAgGADQgIADgFAGQgFAFgCAIQgDAIAAAIQAAAJADAIQACAIAFAFQAFAGAIADQAGADAIAAQAJAAAGgEQAHgEADgGIAMAJQgHAJgKAFQgJAEgLABQgLAAgKgEg");
	this.shape_689.setTransform(-192,-8.3);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_690.setTransform(-209.4,-8.3);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_691.setTransform(-222.2,-11.4);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBQAFgBADgCQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_692.setTransform(-238.8,-8.3);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_693.setTransform(-249.8,-8.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_694.setTransform(-260.6,-8.3);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_695.setTransform(-271,-8.3);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#111111").s().p("AgNA0QgJgFgIgHQgGgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAGgHQAIgHAJgFQAKgEALAAQALABAJAEQAKAEAHAKIgMAJQgEgGgGgEQgHgEgIAAQgIAAgGADQgIADgEAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAEAGAIADQAGADAIAAQAIAAAHgEQAGgEAEgGIAMAJQgHAJgKAFQgJAEgLABQgLAAgKgEg");
	this.shape_696.setTransform(-281,-8.3);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEQAEgBAFAAQATAAAJALQAJAKAAAUIAABCg");
	this.shape_697.setTransform(300.7,-36.5);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_698.setTransform(289,-36.4);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIgBgSIAPAAIAAATIAAAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAFABIgEAPIgIgBQgIAAgFADQgFADgEAFQgEAGgCAFQgCAGAAAGIAAA6g");
	this.shape_699.setTransform(274.5,-36.5);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_700.setTransform(264.3,-36.4);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#111111").s().p("AgGBOIAAhoIANAAIAABogAgGg7QgDgDAAgFQAAgEADgEQADgDADAAQAEAAADADQADAEAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_701.setTransform(256.4,-38.9);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_702.setTransform(247,-39.5);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_703.setTransform(234.8,-36.4);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#111111").s().p("AA9A2IAAg8QAAgQgGgJQgFgIgPAAQgHAAgFADQgGADgDAGQgEAFgBAHQgCAHABAHIAAA3IgOAAIAAg8QABgQgGgJQgFgIgPAAIgFAAQgFABgFAEQgFAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIAAgMIgBgLIAPAAIAAAQIAAAAQAFgKAJgEQAKgFAIAAIAKABQAEABAEACQAFACADAFQADAEADAHQADgKAKgGQAJgGAKAAQAUAAAJALQAJAKAAAUIAABCg");
	this.shape_704.setTransform(219.7,-36.5);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_705.setTransform(198.8,-36.4);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_706.setTransform(186,-39.5);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_707.setTransform(167.6,-36.4);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_708.setTransform(154.4,-39.5);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_709.setTransform(142.4,-36.4);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#111111").s().p("AgbBMQgMgFgKgLIALgLQAGAIAKAGQAKAFAMAAQAKAAAHgDQAIgEAEgFQAFgGACgIQACgHAAgJIAAgTQgHALgKAFQgKAEgLAAQgKAAgJgEQgKgEgHgHQgHgHgEgJQgEgKAAgLQAAgMAEgKQAEgKAGgHQAHgIAJgEQAKgEALAAIAIABIAKADQAFACAFAEQAFAEAFAGIAAgRIAOAAIAABnQAAAJgCAKQgCAJgGAJQgGAIgKAFQgLAFgQAAQgPAAgLgFgAgNg/QgHADgFAGQgFAFgDAHQgDAIAAAIQAAAIADAIQADAHAFAFQAFAFAHADQAHAEAGAAQAIAAAHgDQAHgDAGgFQAFgFADgHQADgIgBgJQAAgIgCgIQgDgHgFgFQgFgGgHgDQgHgDgJAAQgGAAgHADg");
	this.shape_710.setTransform(130.3,-33.8);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIgBgSIAPAAIAAATIAAAAIAEgIIAHgHIAIgFQAFgCAHAAQAGAAAFABIgEAPIgIgBQgHAAgGADQgFADgEAFQgEAGgCAFQgBAGAAAGIAAA6g");
	this.shape_711.setTransform(121.4,-36.5);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_712.setTransform(111.2,-36.4);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#111111").s().p("AgNA0QgJgFgIgHQgGgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAGgHQAIgHAJgFQAKgEALAAQALABAJAEQAKAEAHAKIgMAJQgEgGgGgEQgHgEgIAAQgIAAgHADQgHADgEAGQgFAFgDAIQgCAIAAAIQAAAJACAIQADAIAFAFQAEAGAHADQAHADAIAAQAIAAAHgEQAGgEAEgGIAMAJQgHAJgKAFQgJAEgLABQgLAAgKgEg");
	this.shape_713.setTransform(101.1,-36.4);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEQAEgBAFAAQATAAAJALQAJAKAAAUIAABCg");
	this.shape_714.setTransform(89.5,-36.5);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_715.setTransform(77.7,-36.4);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_716.setTransform(63.4,-39.6);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_717.setTransform(54.8,-36.4);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_718.setTransform(38.5,-36.4);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_719.setTransform(27.9,-36.4);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_720.setTransform(13.5,-39.6);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_721.setTransform(5.1,-36.4);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#111111").s().p("AgaA2IAAhHIgBgPIAAgSIANAAIAAATIABAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAEABIgCAPIgIgBQgJAAgGADQgEADgEAFQgEAGgBAFQgCAGgBAGIAAA6g");
	this.shape_722.setTransform(-2.7,-36.5);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_723.setTransform(-13.6,-36.4);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#111111").s().p("AgJBVQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAAASIgOAAIAAiqIAOAAIAABTIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAJQAEAKAAAMQAAAMgEAKQgEAKgHAIQgHAHgJAEQgKAFgMAAIgJgCgAgPgHQgHAEgGAEQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_724.setTransform(-26.1,-39.5);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_725.setTransform(-38.8,-36.4);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#111111").s().p("AgqBQIAAifIAQAAIAACQIBFAAIAAAPg");
	this.shape_726.setTransform(-48.4,-39.1);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_727.setTransform(-66.5,-36.4);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#111111").s().p("AgGBOIAAhoIANAAIAABogAgGg7QgDgDAAgFQAAgEADgEQADgDADAAQAEAAADADQADAEAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_728.setTransform(-74.3,-38.9);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#111111").s().p("AgNA0QgJgFgHgHQgIgIgDgKQgEgKAAgMQAAgLAEgKQADgLAIgHQAHgHAJgFQAKgEALAAQAKABAKAEQAKAEAHAKIgMAJQgDgGgHgEQgHgEgIAAQgIAAgHADQgHADgFAGQgEAFgDAIQgCAIgBAIQABAJACAIQADAIAEAFQAFAGAHADQAHADAIAAQAIAAAHgEQAHgEADgGIAMAJQgHAJgKAFQgKAEgKABQgLAAgKgEg");
	this.shape_729.setTransform(-81.6,-36.4);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEQAEgBAFAAQATAAAJALQAJAKAAAUIAABCg");
	this.shape_730.setTransform(-93.3,-36.5);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_731.setTransform(-105,-36.4);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#111111").s().p("AgHA1IgohpIARAAIAeBYIAhhYIAPAAIgoBpg");
	this.shape_732.setTransform(-116,-36.4);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#111111").s().p("AgGBOIAAhoIANAAIAABogAgGg7QgDgDAAgFQAAgEADgEQADgDADAAQAEAAADADQADAEAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_733.setTransform(-123.8,-38.9);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#111111").s().p("AgHA1IgohpIAQAAIAfBYIAhhYIAPAAIgoBpg");
	this.shape_734.setTransform(-131.4,-36.4);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEQAEgBAFAAQATAAAJALQAJAKAAAUIAABCg");
	this.shape_735.setTransform(-142.7,-36.5);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_736.setTransform(-154.9,-36.4);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#111111").s().p("AgTBOQgOgGgLgLQgKgMgGgPQgGgPAAgTQAAgRAGgQQAGgPAKgLQALgLAOgHQAPgGAPAAQAPAAAOAGQAOAGAKAOIgOAKQgCgEgEgDIgJgIQgGgDgGgBQgGgCgGAAQgNAAgMAFQgLAHgIAJQgIAKgEAMQgFANAAAMQAAAOAFAMQAEANAIAJQAIAKALAFQAMAGANAAIAMgBQAGgBAGgDQAFgDAGgEQAFgFAEgHIAMAKQgDAGgGAFQgGAFgHAEQgHAEgJADQgIACgKAAQgPAAgPgGg");
	this.shape_737.setTransform(-168.5,-39.1);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_738.setTransform(-188.1,-36.4);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_739.setTransform(-200.9,-39.5);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#111111").s().p("AgRBNQgJgEgHgIQgHgHgEgKQgEgLAAgLQAAgMAEgLQAEgJAGgHQAHgIAKgDQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAIQADAKAAALIAAAHIhSAAQABAHADAIQACAGAFAGQAFAFAHADQAGACAHAAQALABAIgGQAJgFAEgIIALAKQgJAMgLAFQgLAFgMABQgKgBgKgEgAgLgNQgGADgFAFQgFAFgDAFQgDAGAAAHIBDAAQAAgPgJgJQgIgJgQAAQgFAAgHACgAgMgwIAVggIATAAIgcAgg");
	this.shape_740.setTransform(-219,-38.9);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgDgEgDgFQgDgFABgJIAAhCIgVAAIAAgNIAVAAIAAgeIANAAIAAAeIAdAAIAAANIgdAAIAAA+IABAJQABAEACACQACACACABIAGAAIAIgBIAHgDIABAOQgJAEgKAAIgJgBg");
	this.shape_741.setTransform(-228.4,-37.7);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#111111").s().p("AgGBOIAAhoIANAAIAABogAgGg7QgDgDAAgFQAAgEADgEQADgDADAAQAEAAADADQADAEAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_742.setTransform(-234.6,-38.9);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#111111").s().p("AA9A2IAAg8QAAgQgFgJQgGgIgOAAQgIAAgGADQgFADgEAGQgDAFgBAHQgBAHAAAHIAAA3IgOAAIAAg8QAAgQgFgJQgGgIgOAAIgFAAQgGABgEAEQgFAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgMIAAgLIAPAAIAAAQIAAAAQAFgKAKgEQAIgFAKAAIAJABQAEABAEACQAEACAEAFQADAEACAHQAFgKAJgGQAJgGALAAQASAAAKALQAJAKAAAUIAABCg");
	this.shape_743.setTransform(-246.4,-36.5);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_744.setTransform(-261.7,-36.4);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#111111").s().p("AgTBOQgOgGgLgLQgKgMgGgPQgGgPAAgTQAAgRAGgQQAGgPAKgLQALgLAOgHQAPgGAPAAQAPAAAOAGQAOAGAKAOIgOAKQgCgEgEgDIgJgIQgGgDgGgBQgGgCgGAAQgNAAgMAFQgLAHgIAJQgIAKgEAMQgFANAAAMQAAAOAFAMQAEANAIAJQAIAKALAFQAMAGANAAIAMgBQAGgBAGgDQAFgDAGgEQAFgFAEgHIAMAKQgDAGgGAFQgGAFgHAEQgHAEgJADQgIACgKAAQgPAAgPgGg");
	this.shape_745.setTransform(-275.3,-39.1);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_746.setTransform(-291.6,-39.6);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#111111").s().p("AgvBQIAAifIBdAAIAAAPIhOAAIAAA2IBJAAIAAAOIhJAAIAAA9IBQAAIAAAPg");
	this.shape_747.setTransform(-299.9,-39.1);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#B20512").s().p("AglA/QgRgJgKgQQgKgQAAgWQAAgVAKgQQAKgQARgIQARgJAUAAQAVAAARAJQASAIAJAQQAKAQAAAVQAAAWgKAQQgJAQgSAJQgRAIgVABQgUgBgRgIgAgYgYQgJAKAAAOQAAAPAJAKQAJAJAPAAQAQAAAJgJQAIgKABgPQgBgOgIgKQgJgJgQAAQgPAAgJAJg");
	this.shape_748.setTransform(59,-85.8);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#B20512").s().p("AAABWQgMgEgGgKQgHgJAAgOIAAhAIgbAAIAAghIAbAAIAAgpIApAAIAAApIAlAAIAAAhIglAAIAAAsIABAOQABAFAEAEQAFACAJAAIAJAAQAFgBADgCIAAAjQgHACgIABIgOABQgOAAgKgEg");
	this.shape_749.setTransform(44.5,-87.7);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#B20512").s().p("AgYA/QgQgJgLgQQgKgQAAgWQAAgVAKgQQALgQAQgIQARgJAVAAQAMAAANADQANAFAKAKIgbAdQgDgFgGgDQgGgCgGAAQgPAAgJAJQgIAKgBAOQABAPAIAKQAJAJAPAAQAGAAAGgDQAFgDAEgEIAbAdQgKAKgNAEQgNAEgMABQgVgBgRgIg");
	this.shape_750.setTransform(32.8,-85.8);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#B20512").s().p("AgfA/QgRgJgKgQQgKgQgBgWQABgVAKgQQAKgQARgIQARgJAUAAQAUAAAOAJQAOAIAIAQQAIAQAAAVIAAANIhhAAQADAMAIAHQAJAIALgBQAKAAAIgEQAHgFAFgHIAdAWQgKAMgPAIQgPAGgRABQgUgBgRgIgAAcgOQAAgLgHgHQgHgIgMAAQgIAAgHADQgGAEgEAGQgDAGgBAHIA3AAIAAAAg");
	this.shape_751.setTransform(17.5,-85.8);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#B20512").s().p("AglA/QgSgJgJgQQgLgQAAgWQAAgVALgQQAJgQASgIQARgJAUAAQAVAAARAJQARAIAKAQQALAQgBAVQABAWgLAQQgKAQgRAJQgRAIgVABQgUgBgRgIgAgYgYQgJAKAAAOQAAAPAJAKQAJAJAPAAQAQAAAJgJQAIgKABgPQgBgOgIgKQgJgJgQAAQgPAAgJAJg");
	this.shape_752.setTransform(-21.3,-85.8);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#B20512").s().p("AgXA/QgSgJgJgQQgLgQAAgWQAAgVALgQQAJgQASgIQARgJAUAAQAMAAANADQANAFAKAKIgcAdQgDgFgFgDQgGgCgGAAQgPAAgJAJQgIAKgBAOQABAPAIAKQAJAJAPAAQAGAAAGgDQAFgDADgEIAcAdQgKAKgNAEQgNAEgMABQgUgBgRgIg");
	this.shape_753.setTransform(-36.1,-85.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_268,p:{y:-120.3,x:-73.9}},{t:this.shape_267,p:{y:-126.4,x:-63.5}},{t:this.shape_266,p:{y:-123.5}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263,p:{y:-123.5,x:-6.5}},{t:this.shape_262,p:{y:-123.5}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257,p:{y:-126.4,x:73.7}},{t:this.shape_256,p:{x:-266.3,y:-89.8}},{t:this.shape_255,p:{x:-256.9,y:-90.4}},{t:this.shape_254,p:{x:-239.8,y:-89.8}},{t:this.shape_253,p:{x:-228.5,y:-87}},{t:this.shape_252,p:{x:-218.5,y:-86.9}},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249,p:{x:-182.8,y:-86.9}},{t:this.shape_248,p:{x:-166.3,y:-87}},{t:this.shape_247,p:{x:-149.9,y:-86.9}},{t:this.shape_246},{t:this.shape_245,p:{x:-115.4,y:-86.9}},{t:this.shape_244},{t:this.shape_243,p:{x:-82.1,y:-86.9}},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239,p:{x:-36.6,y:-89.6}},{t:this.shape_238,p:{x:-26.7,y:-90.2}},{t:this.shape_237,p:{x:-13.1,y:-86.9}},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234,p:{x:27.5,y:-87}},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228,p:{x:91.3,y:-89.6}},{t:this.shape_227,p:{x:100.1,y:-86.9}},{t:this.shape_226,p:{x:109.5,y:-90.4}},{t:this.shape_225},{t:this.shape_224,p:{x:131.5,y:-86.9}},{t:this.shape_223,p:{x:143.9,y:-86.9}},{t:this.shape_222},{t:this.shape_221,p:{x:161.4,y:-89.6}},{t:this.shape_220},{t:this.shape_219,p:{x:174.3,y:-89.6}},{t:this.shape_218,p:{x:183.3,y:-86.9}},{t:this.shape_217,p:{x:194.6,y:-86.9}},{t:this.shape_216},{t:this.shape_215,p:{x:229.1,y:-86.8}},{t:this.shape_214,p:{x:242.5,y:-86.9}},{t:this.shape_213,p:{x:258.7,y:-90.4}},{t:this.shape_212,p:{x:267.5,y:-86.9}},{t:this.shape_211,p:{x:-286.9,y:-57.1}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200,p:{x:-132.2,y:-57.1}},{t:this.shape_199,p:{x:-113,y:-57.1}},{t:this.shape_198,p:{x:-100.3,y:-57.1}},{t:this.shape_197,p:{x:-88.7,y:-57.1}},{t:this.shape_196,p:{x:-80.5,y:-59.8}},{t:this.shape_195},{t:this.shape_194,p:{x:-56.9,y:-57.2}},{t:this.shape_193,p:{x:-43.3,y:-57.1}},{t:this.shape_192},{t:this.shape_191,p:{x:-12.1,y:-53.8}},{t:this.shape_190,p:{x:0.8,y:-57.1}},{t:this.shape_189},{t:this.shape_188,p:{x:21.2,y:-57.1}},{t:this.shape_187},{t:this.shape_186,p:{x:49,y:-57.1}},{t:this.shape_185,p:{x:61.6,y:-57.1}},{t:this.shape_184,p:{x:71,y:-60.6}},{t:this.shape_183,p:{x:76.7,y:-59.8}},{t:this.shape_182},{t:this.shape_181,p:{x:95.7,y:-57.1}},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:138.7,y:-57.1}},{t:this.shape_176,p:{x:152.9,y:-60.4}},{t:this.shape_175,p:{x:165.8,y:-57.1}},{t:this.shape_174,p:{x:174,y:-57}},{t:this.shape_173,p:{x:185.2,y:-57.1}},{t:this.shape_172},{t:this.shape_171,p:{x:214.3,y:-57.1}},{t:this.shape_170,p:{x:226,y:-57.1}},{t:this.shape_169},{t:this.shape_168,p:{x:254,y:-57}},{t:this.shape_167},{t:this.shape_166,p:{x:275.8,y:-57.1}},{t:this.shape_165},{t:this.shape_164,p:{x:-298.3,y:-27.3}},{t:this.shape_163,p:{x:-285.2,y:-27.4}},{t:this.shape_162},{t:this.shape_161,p:{x:-256.3,y:-30.8}},{t:this.shape_160},{t:this.shape_159,p:{x:-238.9,y:-27.2}},{t:this.shape_158},{t:this.shape_157,p:{x:-218.3,y:-27.3}},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154,p:{x:-182.1,y:-27.3}},{t:this.shape_153,p:{x:-169.6,y:-27.3}},{t:this.shape_152,p:{x:-156,y:-27.4}},{t:this.shape_151,p:{x:-135.8,y:-27.3}},{t:this.shape_150,p:{x:-122.6,y:-27.4}},{t:this.shape_149,p:{x:-109.1,y:-27.3}},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145,p:{x:-68.1,y:-27.3}},{t:this.shape_144,p:{x:-56.4,y:-27.3}},{t:this.shape_143,p:{x:-37,y:-24}},{t:this.shape_142,p:{x:-23.4,y:-27.3}},{t:this.shape_141,p:{x:-13.9,y:-30.8}},{t:this.shape_140,p:{x:-8.1,y:-30}},{t:this.shape_139,p:{x:1.8,y:-24.6}},{t:this.shape_138,p:{x:14.4,y:-27.4}},{t:this.shape_137,p:{x:24.5,y:-27.3}},{t:this.shape_136,p:{x:36.8,y:-27.3}},{t:this.shape_135,p:{x:47.7,y:-27.3}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130,p:{x:99.6,y:-27.3}},{t:this.shape_129,p:{x:112.6,y:-27.4}},{t:this.shape_128,p:{x:124.6,y:-27.3}},{t:this.shape_127},{t:this.shape_126,p:{x:151.4,y:-27.3}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123,p:{x:181.1,y:-27.3}},{t:this.shape_122,p:{x:201.4,y:-30.6}},{t:this.shape_121,p:{x:215.8,y:-27.3}},{t:this.shape_120,p:{x:235.3,y:-27.3}},{t:this.shape_119,p:{x:246.6,y:-27.3}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116,p:{x:281.6,y:-27.3}},{t:this.shape_115},{t:this.shape_114,p:{x:301.7,y:-21.2}},{t:this.shape_113,p:{x:-285.9,y:2.5}},{t:this.shape_112,p:{x:-276.3,y:-1}},{t:this.shape_111,p:{x:-266.8,y:2.5}},{t:this.shape_110,p:{x:-253.9,y:2.5}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:-220.7,y:2.5}},{t:this.shape_105},{t:this.shape_104,p:{x:-202.6,y:-0.8}},{t:this.shape_103},{t:this.shape_102,p:{x:-175.5,y:-0.8}},{t:this.shape_101,p:{x:-164.5,y:8.6}},{t:this.shape_100,p:{x:-147.9,y:2.5}},{t:this.shape_99},{t:this.shape_98,p:{x:-123.8,y:1.1}},{t:this.shape_97},{t:this.shape_96,p:{x:-105.3,y:2.5}},{t:this.shape_95,p:{x:-84.8,y:2.5}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92,p:{x:-54.7,y:2.5}},{t:this.shape_91,p:{x:-42.4,y:2.5}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87,p:{x:11,y:2.5}},{t:this.shape_86,p:{x:31,y:2.5}},{t:this.shape_85},{t:this.shape_84,p:{x:52,y:-1.1}},{t:this.shape_83},{t:this.shape_82,p:{x:75,y:2.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79,p:{x:105.8,y:2.5}},{t:this.shape_78},{t:this.shape_77,p:{x:140.7,y:2.5}},{t:this.shape_76},{t:this.shape_75,p:{x:168.6,y:2.5}},{t:this.shape_74,p:{x:179.9,y:2.5}},{t:this.shape_73},{t:this.shape_72,p:{x:207,y:2.5}},{t:this.shape_71,p:{x:219.7,y:2.5}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:244.7,y:2.5}},{t:this.shape_67},{t:this.shape_66,p:{x:272.5,y:2.5}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:-94.1,y:32.3}},{t:this.shape_50,p:{x:-85.5,y:29.6}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:-46.3,y:29}},{t:this.shape_46},{t:this.shape_45,p:{x:-12.2,y:32.2}},{t:this.shape_44,p:{x:1.3,y:32.4}},{t:this.shape_43},{t:this.shape_42,p:{x:27.2,y:32.3}},{t:this.shape_41,p:{x:40.1,y:32.3}},{t:this.shape_40},{t:this.shape_39,p:{x:70.1,y:28.8}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:144.6,y:29.6}},{t:this.shape_32},{t:this.shape_31,p:{x:162.8,y:28.8}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:-133.5,y:62.1}},{t:this.shape_21},{t:this.shape_20,p:{x:-106.4,y:64.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-63.3,y:62.1}},{t:this.shape_16,p:{x:-55.1,y:58.6}},{t:this.shape_15},{t:this.shape_14,p:{x:-34.7,y:62}},{t:this.shape_13},{t:this.shape_12,p:{x:-4.2,y:62.1}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:27.3,y:62.1}},{t:this.shape_8,p:{x:46.8,y:62.1}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:85.9,y:62.1}},{t:this.shape_4,p:{x:98,y:62.1}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:66.6}}]}).to({state:[{t:this.shape_268,p:{y:-120.3,x:-73.9}},{t:this.shape_267,p:{y:-126.4,x:-63.5}},{t:this.shape_266,p:{y:-123.5}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263,p:{y:-123.5,x:-6.5}},{t:this.shape_262,p:{y:-123.5}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257,p:{y:-126.4,x:73.7}},{t:this.shape_408,p:{y:-91.1}},{t:this.shape_407,p:{y:-91.7}},{t:this.shape_254,p:{x:-233.2,y:-91.1}},{t:this.shape_406,p:{x:-224.1,y:-91.7}},{t:this.shape_237,p:{x:-215.3,y:-88.2}},{t:this.shape_405,p:{x:-202.3,y:-88.4}},{t:this.shape_102,p:{x:-181.8,y:-91.6}},{t:this.shape_404},{t:this.shape_256,p:{x:-146.4,y:-91.1}},{t:this.shape_248,p:{x:-129.9,y:-88.4}},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401,p:{x:-91.1,y:-85.5}},{t:this.shape_400},{t:this.shape_399,p:{x:-63.7,y:-88.4}},{t:this.shape_398,p:{y:-88.3}},{t:this.shape_397,p:{x:-42.4,y:-91}},{t:this.shape_227,p:{x:-33.6,y:-88.2}},{t:this.shape_396},{t:this.shape_395,p:{x:-3.5,y:-88.2}},{t:this.shape_394},{t:this.shape_245,p:{x:26.7,y:-88.2}},{t:this.shape_255,p:{x:36.2,y:-91.7}},{t:this.shape_393},{t:this.shape_392,p:{y:-88.1}},{t:this.shape_243,p:{x:80.4,y:-88.2}},{t:this.shape_391,p:{y:-88.3}},{t:this.shape_390,p:{x:112.4,y:-88.2}},{t:this.shape_389,p:{x:126,y:-88.4}},{t:this.shape_388},{t:this.shape_387,p:{x:143.7,y:-91}},{t:this.shape_223,p:{x:153.3,y:-88.2}},{t:this.shape_234,p:{x:166.4,y:-88.4}},{t:this.shape_214,p:{x:180,y:-88.2}},{t:this.shape_386},{t:this.shape_252,p:{x:208.4,y:-88.2}},{t:this.shape_385,p:{y:-91.6}},{t:this.shape_217,p:{x:236.1,y:-88.2}},{t:this.shape_226,p:{x:252.1,y:-91.7}},{t:this.shape_212,p:{x:260.9,y:-88.2}},{t:this.shape_191,p:{x:-253.7,y:-55.1}},{t:this.shape_213,p:{x:-243.9,y:-61.9}},{t:this.shape_199,p:{x:-235.1,y:-58.4}},{t:this.shape_384,p:{x:-222.1,y:-58.6}},{t:this.shape_239,p:{x:-212.4,y:-61.2}},{t:this.shape_383,p:{y:-62.1}},{t:this.shape_228,p:{x:-199.5,y:-61.2}},{t:this.shape_382,p:{y:-58.5}},{t:this.shape_190,p:{x:-179.2,y:-58.4}},{t:this.shape_381,p:{y:-58.5}},{t:this.shape_221,p:{x:-158.2,y:-61.2}},{t:this.shape_380},{t:this.shape_379,p:{x:-134.6,y:-58.6}},{t:this.shape_378},{t:this.shape_173,p:{x:-95.8,y:-58.4}},{t:this.shape_377,p:{x:-83.6,y:-58.6}},{t:this.shape_376,p:{y:-55.7}},{t:this.shape_188,p:{x:-60.1,y:-58.4}},{t:this.shape_375,p:{x:-47.1,y:-58.6}},{t:this.shape_219,p:{x:-37.4,y:-61.2}},{t:this.shape_374,p:{y:-58.5}},{t:this.shape_185,p:{x:-18.4,y:-58.4}},{t:this.shape_373,p:{y:-58.5}},{t:this.shape_196,p:{x:2.6,y:-61.2}},{t:this.shape_372},{t:this.shape_371,p:{x:26.2,y:-58.6}},{t:this.shape_370,p:{y:-61.8}},{t:this.shape_193,p:{x:61,y:-58.4}},{t:this.shape_181,p:{x:80.3,y:-58.4}},{t:this.shape_369},{t:this.shape_368,p:{x:108.1,y:-58.3}},{t:this.shape_186,p:{x:121.5,y:-58.4}},{t:this.shape_184,p:{x:131,y:-61.9}},{t:this.shape_161,p:{x:136.8,y:-61.9}},{t:this.shape_177,p:{x:145.6,y:-58.4}},{t:this.shape_367},{t:this.shape_175,p:{x:174.9,y:-58.4}},{t:this.shape_218,p:{x:187.6,y:-58.5}},{t:this.shape_211,p:{x:199.1,y:-58.5}},{t:this.shape_183,p:{x:207.4,y:-61.2}},{t:this.shape_166,p:{x:217.4,y:-58.4}},{t:this.shape_194,p:{x:231,y:-58.6}},{t:this.shape_170,p:{x:244.5,y:-58.4}},{t:this.shape_366},{t:this.shape_164,p:{x:-260.8,y:-28.6}},{t:this.shape_365},{t:this.shape_364,p:{y:-32.3}},{t:this.shape_137,p:{x:-226.5,y:-28.6}},{t:this.shape_198,p:{x:-213.2,y:-28.7}},{t:this.shape_157,p:{x:-201.9,y:-28.6}},{t:this.shape_363,p:{x:-188.4,y:-32}},{t:this.shape_145,p:{x:-174.8,y:-28.6}},{t:this.shape_362},{t:this.shape_151,p:{x:-144.8,y:-28.6}},{t:this.shape_163,p:{x:-131.6,y:-28.8}},{t:this.shape_361},{t:this.shape_149,p:{x:-103.5,y:-28.6}},{t:this.shape_360,p:{y:-32}},{t:this.shape_159,p:{x:-75.5,y:-28.5}},{t:this.shape_197,p:{x:-62.6,y:-28.7}},{t:this.shape_359},{t:this.shape_358,p:{x:-46.5,y:-28.8}},{t:this.shape_141,p:{x:-34,y:-32.1}},{t:this.shape_135,p:{x:-25.2,y:-28.6}},{t:this.shape_128,p:{x:-13.5,y:-28.6}},{t:this.shape_154,p:{x:4.3,y:-28.7}},{t:this.shape_126,p:{x:16.8,y:-28.6}},{t:this.shape_152,p:{x:30.4,y:-28.8}},{t:this.shape_357},{t:this.shape_142,p:{x:54.2,y:-28.6}},{t:this.shape_120,p:{x:67,y:-28.7}},{t:this.shape_356,p:{y:-28.5}},{t:this.shape_123,p:{x:92.4,y:-28.6}},{t:this.shape_150,p:{x:105.6,y:-28.8}},{t:this.shape_110,p:{x:118.6,y:-28.7}},{t:this.shape_355,p:{x:126.9,y:-31.4}},{t:this.shape_130,p:{x:135.7,y:-28.6}},{t:this.shape_354},{t:this.shape_129,p:{x:165.5,y:-28.8}},{t:this.shape_121,p:{x:179.1,y:-28.6}},{t:this.shape_353,p:{y:-25.9}},{t:this.shape_119,p:{x:206.3,y:-28.6}},{t:this.shape_352},{t:this.shape_140,p:{x:223.7,y:-31.4}},{t:this.shape_351,p:{y:-28.7}},{t:this.shape_116,p:{x:244,y:-28.6}},{t:this.shape_350},{t:this.shape_114,p:{x:264.1,y:-22.5}},{t:this.shape_349,p:{y:-2.2}},{t:this.shape_348},{t:this.shape_100,p:{x:-223.6,y:1.2}},{t:this.shape_347},{t:this.shape_91,p:{x:-191.8,y:1.2}},{t:this.shape_96,p:{x:-180.1,y:1.2}},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_87,p:{x:-113.9,y:1.2}},{t:this.shape_343},{t:this.shape_342},{t:this.shape_95,p:{x:-81.9,y:1.2}},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_92,p:{x:-25,y:1.2}},{t:this.shape_338},{t:this.shape_337},{t:this.shape_84,p:{x:12,y:-2.5}},{t:this.shape_336},{t:this.shape_335},{t:this.shape_86,p:{x:42,y:1.2}},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331,p:{y:1.3}},{t:this.shape_106,p:{x:94.3,y:1.1}},{t:this.shape_330},{t:this.shape_329,p:{y:1.3}},{t:this.shape_328},{t:this.shape_327},{t:this.shape_101,p:{x:144.7,y:7.3}},{t:this.shape_112,p:{x:157.6,y:-2.3}},{t:this.shape_326,p:{y:1.3}},{t:this.shape_82,p:{x:180.5,y:1.2}},{t:this.shape_20,p:{x:194.2,y:3.9}},{t:this.shape_77,p:{x:208.9,y:1.2}},{t:this.shape_325,p:{x:229.7,y:-2.2}},{t:this.shape_66,p:{x:244,y:1.2}},{t:this.shape_215,p:{x:-254.2,y:31.1}},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319,p:{y:31.1}},{t:this.shape_318},{t:this.shape_75,p:{x:-159.2,y:30.9}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_122,p:{x:-106.8,y:27.6}},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309,p:{x:-17,y:33.7}},{t:this.shape_308},{t:this.shape_307},{t:this.shape_71,p:{x:23.5,y:30.9}},{t:this.shape_50,p:{x:31.7,y:28.2}},{t:this.shape_306},{t:this.shape_305,p:{y:35.4}},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302,p:{y:30.9}},{t:this.shape_33,p:{x:102.4,y:28.2}},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299,p:{y:27.6}},{t:this.shape_298},{t:this.shape_45,p:{x:175.7,y:30.8}},{t:this.shape_168,p:{x:189.2,y:31.1}},{t:this.shape_297},{t:this.shape_51,p:{x:215.1,y:30.9}},{t:this.shape_41,p:{x:227.9,y:31}},{t:this.shape_296},{t:this.shape_39,p:{x:257.9,y:27.5}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_14,p:{x:-186.4,y:60.6}},{t:this.shape_291},{t:this.shape_290},{t:this.shape_31,p:{x:-162.4,y:57.3}},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_44,p:{x:-77.4,y:60.9}},{t:this.shape_284},{t:this.shape_283},{t:this.shape_22,p:{x:-36.1,y:60.8}},{t:this.shape_282},{t:this.shape_139,p:{x:-9,y:63.5}},{t:this.shape_281},{t:this.shape_280},{t:this.shape_17,p:{x:34.1,y:60.7}},{t:this.shape_16,p:{x:42.3,y:57.3}},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_12,p:{x:93.2,y:60.8}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_9,p:{x:124.7,y:60.8}},{t:this.shape_8,p:{x:144.2,y:60.7}},{t:this.shape_274},{t:this.shape_273},{t:this.shape_5,p:{x:183.3,y:60.7}},{t:this.shape_4,p:{x:195.4,y:60.8}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269,p:{x:242.3,y:65.2}}]},1).to({state:[{t:this.shape_268,p:{y:-107.8,x:-73.9}},{t:this.shape_267,p:{y:-113.9,x:-63.5}},{t:this.shape_266,p:{y:-111}},{t:this.shape_506},{t:this.shape_505},{t:this.shape_263,p:{y:-111,x:-6.5}},{t:this.shape_262,p:{y:-111}},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_257,p:{y:-113.9,x:73.7}},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498,p:{x:-237.1,y:-67.8}},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494,p:{x:-185.4,y:-70.5}},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487,p:{x:-121.8,y:-70.4}},{t:this.shape_486,p:{x:-111.8,y:-67.6}},{t:this.shape_485},{t:this.shape_484,p:{x:-76.7,y:-67.6}},{t:this.shape_483},{t:this.shape_482,p:{x:-43.3,y:-67.6}},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478,p:{x:2.2,y:-70.4}},{t:this.shape_104,p:{x:12,y:-71}},{t:this.shape_477,p:{x:25.6,y:-67.6}},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473,p:{x:90.9,y:-67.6}},{t:this.shape_406,p:{x:100.3,y:-71.1}},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470,p:{x:144.5,y:-67.6}},{t:this.shape_469,p:{x:157.7,y:-67.8}},{t:this.shape_468,p:{x:177.9,y:-67.6}},{t:this.shape_255,p:{x:187.4,y:-71.1}},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465,p:{x:224.6,y:-67.6}},{t:this.shape_176,p:{x:238.9,y:-71}},{t:this.shape_464,p:{x:251.7,y:-67.6}},{t:this.shape_174,p:{x:259.9,y:-67.5}},{t:this.shape_463,p:{x:271.1,y:-67.6}},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_44,p:{x:-187.7,y:-37.7}},{t:this.shape_395,p:{x:-174.3,y:-37.8}},{t:this.shape_224,p:{x:-161.8,y:-37.9}},{t:this.shape_245,p:{x:-149.4,y:-37.8}},{t:this.shape_458},{t:this.shape_457},{t:this.shape_219,p:{x:-103.4,y:-40.6}},{t:this.shape_309,p:{x:-93.5,y:-35.1}},{t:this.shape_196,p:{x:-83,y:-40.6}},{t:this.shape_226,p:{x:-77.3,y:-41.3}},{t:this.shape_237,p:{x:-68.5,y:-37.8}},{t:this.shape_213,p:{x:-52.4,y:-41.3}},{t:this.shape_227,p:{x:-43.6,y:-37.8}},{t:this.shape_456},{t:this.shape_389,p:{x:-13.8,y:-38}},{t:this.shape_390,p:{x:0.2,y:-37.8}},{t:this.shape_455},{t:this.shape_454},{t:this.shape_217,p:{x:41.7,y:-37.8}},{t:this.shape_453},{t:this.shape_452,p:{x:70.9,y:-35}},{t:this.shape_253,p:{x:88.3,y:-38}},{t:this.shape_243,p:{x:97.9,y:-37.8}},{t:this.shape_139,p:{x:111.6,y:-35.1}},{t:this.shape_184,p:{x:122.1,y:-41.3}},{t:this.shape_212,p:{x:130.9,y:-37.8}},{t:this.shape_248,p:{x:147.4,y:-38}},{t:this.shape_223,p:{x:164.5,y:-37.8}},{t:this.shape_234,p:{x:177.7,y:-38}},{t:this.shape_451},{t:this.shape_252,p:{x:199.6,y:-37.8}},{t:this.shape_450},{t:this.shape_325,p:{x:230.6,y:-41.2}},{t:this.shape_214,p:{x:244.9,y:-37.8}},{t:this.shape_449},{t:this.shape_448,p:{x:-219.6,y:-8}},{t:this.shape_401,p:{x:-205.9,y:-5.3}},{t:this.shape_368,p:{x:-191.6,y:-7.9}},{t:this.shape_447},{t:this.shape_183,p:{x:-174.1,y:-10.8}},{t:this.shape_47,p:{x:-164.2,y:-11.4}},{t:this.shape_188,p:{x:-150.6,y:-8}},{t:this.shape_363,p:{x:-137.1,y:-11.4}},{t:this.shape_446},{t:this.shape_445},{t:this.shape_185,p:{x:-85.3,y:-8}},{t:this.shape_161,p:{x:-75.9,y:-11.5}},{t:this.shape_168,p:{x:-66.4,y:-7.9}},{t:this.shape_444},{t:this.shape_200,p:{x:-31.7,y:-8}},{t:this.shape_371,p:{x:-18.6,y:-8.2}},{t:this.shape_193,p:{x:1.6,y:-8}},{t:this.shape_141,p:{x:11.2,y:-11.5}},{t:this.shape_443},{t:this.shape_442},{t:this.shape_181,p:{x:48.4,y:-8}},{t:this.shape_441},{t:this.shape_177,p:{x:75.5,y:-8}},{t:this.shape_440},{t:this.shape_173,p:{x:94.9,y:-8}},{t:this.shape_102,p:{x:115.6,y:-11.4}},{t:this.shape_186,p:{x:130,y:-8}},{t:this.shape_194,p:{x:143.1,y:-8.2}},{t:this.shape_439},{t:this.shape_377,p:{x:163,y:-8.2}},{t:this.shape_166,p:{x:173,y:-8}},{t:this.shape_238,p:{x:193.8,y:-11.4}},{t:this.shape_170,p:{x:208.1,y:-8}},{t:this.shape_112,p:{x:224.3,y:-11.5}},{t:this.shape_175,p:{x:233.1,y:-8}},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_269,p:{x:-154.7,y:26.2}},{t:this.shape_431},{t:this.shape_164,p:{x:-123.9,y:21.8}},{t:this.shape_42,p:{x:-111.4,y:21.7}},{t:this.shape_355,p:{x:-102.8,y:19}},{t:this.shape_430},{t:this.shape_429},{t:this.shape_122,p:{x:-63.6,y:18.4}},{t:this.shape_151,p:{x:-49.3,y:21.8}},{t:this.shape_129,p:{x:-29.5,y:21.6}},{t:this.shape_428},{t:this.shape_149,p:{x:-2.6,y:21.8}},{t:this.shape_427},{t:this.shape_426},{t:this.shape_142,p:{x:43.2,y:21.8}},{t:this.shape_39,p:{x:52.8,y:18.3}},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423,p:{x:99.2,y:20.3}},{t:this.shape_123,p:{x:109.8,y:21.8}},{t:this.shape_138,p:{x:121.5,y:21.6}},{t:this.shape_140,p:{x:127.3,y:19}},{t:this.shape_422},{t:this.shape_31,p:{x:145.5,y:18.3}},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419,p:{x:187.2,y:21.6}},{t:this.shape_418},{t:this.shape_417},{t:this.shape_159,p:{x:230.5,y:21.9}},{t:this.shape_121,p:{x:243.9,y:21.8}},{t:this.shape_98,p:{x:-144.1,y:50.1}},{t:this.shape_87,p:{x:-133.5,y:51.6}},{t:this.shape_416},{t:this.shape_20,p:{x:-106.4,y:54.3}},{t:this.shape_72,p:{x:-92.9,y:51.6}},{t:this.shape_415},{t:this.shape_17,p:{x:-63.3,y:51.5}},{t:this.shape_16,p:{x:-55.1,y:48.1}},{t:this.shape_68,p:{x:-46.3,y:51.6}},{t:this.shape_414},{t:this.shape_95,p:{x:-24.7,y:51.6}},{t:this.shape_86,p:{x:-4.2,y:51.6}},{t:this.shape_413},{t:this.shape_412},{t:this.shape_82,p:{x:27.3,y:51.6}},{t:this.shape_8,p:{x:46.8,y:51.5}},{t:this.shape_92,p:{x:59.3,y:51.6}},{t:this.shape_411},{t:this.shape_5,p:{x:85.9,y:51.5}},{t:this.shape_66,p:{x:98,y:51.6}},{t:this.shape_410},{t:this.shape_409},{t:this.shape_77,p:{x:134.4,y:51.6}},{t:this.shape,p:{y:56}}]},1).to({state:[{t:this.shape_268,p:{y:-122.8,x:-79.9}},{t:this.shape_267,p:{y:-128.9,x:-68.5}},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_263,p:{y:-126,x:-7.5}},{t:this.shape_262,p:{y:-126}},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_257,p:{y:-128.9,x:78.7}},{t:this.shape_408,p:{y:-93}},{t:this.shape_407,p:{y:-93.6}},{t:this.shape_494,p:{x:-233.2,y:-93}},{t:this.shape_406,p:{x:-224.1,y:-93.6}},{t:this.shape_477,p:{x:-215.3,y:-90.1}},{t:this.shape_584},{t:this.shape_102,p:{x:-181.8,y:-93.5}},{t:this.shape_583},{t:this.shape_256,p:{x:-146.4,y:-93}},{t:this.shape_498,p:{x:-129.9,y:-90.3}},{t:this.shape_582},{t:this.shape_581},{t:this.shape_401,p:{x:-91.1,y:-87.4}},{t:this.shape_580},{t:this.shape_579},{t:this.shape_398,p:{y:-90.2}},{t:this.shape_487,p:{x:-42.4,y:-92.9}},{t:this.shape_473,p:{x:-33.6,y:-90.1}},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_484,p:{x:26.7,y:-90.1}},{t:this.shape_255,p:{x:36.2,y:-93.6}},{t:this.shape_575},{t:this.shape_392,p:{y:-90}},{t:this.shape_482,p:{x:80.4,y:-90.1}},{t:this.shape_391,p:{y:-90.2}},{t:this.shape_486,p:{x:112.4,y:-90.1}},{t:this.shape_574},{t:this.shape_573},{t:this.shape_478,p:{x:143.7,y:-92.9}},{t:this.shape_470,p:{x:153.3,y:-90.1}},{t:this.shape_469,p:{x:166.4,y:-90.3}},{t:this.shape_468,p:{x:180,y:-90.1}},{t:this.shape_572},{t:this.shape_463,p:{x:208.4,y:-90.1}},{t:this.shape_385,p:{y:-93.5}},{t:this.shape_465,p:{x:236.1,y:-90.1}},{t:this.shape_226,p:{x:252.1,y:-93.6}},{t:this.shape_464,p:{x:260.9,y:-90.1}},{t:this.shape_571},{t:this.shape_213,p:{x:-243.9,y:-63.8}},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_383,p:{y:-64}},{t:this.shape_397,p:{x:-199.5,y:-63.1}},{t:this.shape_382,p:{y:-60.4}},{t:this.shape_249,p:{x:-179.2,y:-60.3}},{t:this.shape_381,p:{y:-60.4}},{t:this.shape_387,p:{x:-158.2,y:-63.1}},{t:this.shape_567},{t:this.shape_405,p:{x:-134.6,y:-60.5}},{t:this.shape_452,p:{x:-115.3,y:-57.5}},{t:this.shape_390,p:{x:-95.8,y:-60.3}},{t:this.shape_253,p:{x:-83.6,y:-60.5}},{t:this.shape_376,p:{y:-57.6}},{t:this.shape_247,p:{x:-60.1,y:-60.3}},{t:this.shape_399,p:{x:-47.1,y:-60.5}},{t:this.shape_239,p:{x:-37.4,y:-63.1}},{t:this.shape_374,p:{y:-60.4}},{t:this.shape_237,p:{x:-18.4,y:-60.3}},{t:this.shape_373,p:{y:-60.4}},{t:this.shape_228,p:{x:2.6,y:-63.1}},{t:this.shape_566},{t:this.shape_389,p:{x:26.2,y:-60.5}},{t:this.shape_370,p:{y:-63.7}},{t:this.shape_243,p:{x:61,y:-60.3}},{t:this.shape_227,p:{x:80.3,y:-60.3}},{t:this.shape_565},{t:this.shape_368,p:{x:108.1,y:-60.2}},{t:this.shape_223,p:{x:121.5,y:-60.3}},{t:this.shape_184,p:{x:131,y:-63.8}},{t:this.shape_161,p:{x:136.8,y:-63.8}},{t:this.shape_217,p:{x:145.6,y:-60.3}},{t:this.shape_564},{t:this.shape_212,p:{x:174.9,y:-60.3}},{t:this.shape_218,p:{x:187.6,y:-60.4}},{t:this.shape_211,p:{x:199.1,y:-60.4}},{t:this.shape_221,p:{x:207.4,y:-63.1}},{t:this.shape_252,p:{x:217.4,y:-60.3}},{t:this.shape_234,p:{x:231,y:-60.5}},{t:this.shape_214,p:{x:244.5,y:-60.3}},{t:this.shape_563},{t:this.shape_562},{t:this.shape_384,p:{x:-247.6,y:-30.7}},{t:this.shape_364,p:{y:-34.2}},{t:this.shape_173,p:{x:-226.5,y:-30.5}},{t:this.shape_198,p:{x:-213.2,y:-30.6}},{t:this.shape_190,p:{x:-201.9,y:-30.5}},{t:this.shape_363,p:{x:-188.4,y:-33.9}},{t:this.shape_188,p:{x:-174.8,y:-30.5}},{t:this.shape_561},{t:this.shape_448,p:{x:-144.8,y:-30.5}},{t:this.shape_379,p:{x:-131.6,y:-30.7}},{t:this.shape_560},{t:this.shape_200,p:{x:-103.5,y:-30.5}},{t:this.shape_360,p:{y:-33.9}},{t:this.shape_159,p:{x:-75.5,y:-30.4}},{t:this.shape_197,p:{x:-62.6,y:-30.6}},{t:this.shape_219,p:{x:-54.4,y:-33.3}},{t:this.shape_559},{t:this.shape_141,p:{x:-34,y:-34}},{t:this.shape_185,p:{x:-25.2,y:-30.5}},{t:this.shape_558},{t:this.shape_154,p:{x:4.3,y:-30.6}},{t:this.shape_166,p:{x:16.8,y:-30.5}},{t:this.shape_375,p:{x:30.4,y:-30.7}},{t:this.shape_557},{t:this.shape_193,p:{x:54.2,y:-30.5}},{t:this.shape_120,p:{x:67,y:-30.6}},{t:this.shape_356,p:{y:-30.4}},{t:this.shape_186,p:{x:92.4,y:-30.5}},{t:this.shape_371,p:{x:105.6,y:-30.7}},{t:this.shape_110,p:{x:118.6,y:-30.6}},{t:this.shape_196,p:{x:126.9,y:-33.3}},{t:this.shape_181,p:{x:135.7,y:-30.5}},{t:this.shape_556},{t:this.shape_194,p:{x:165.5,y:-30.7}},{t:this.shape_170,p:{x:179.1,y:-30.5}},{t:this.shape_353,p:{y:-27.8}},{t:this.shape_177,p:{x:206.3,y:-30.5}},{t:this.shape_555},{t:this.shape_183,p:{x:223.7,y:-33.3}},{t:this.shape_351,p:{y:-30.6}},{t:this.shape_175,p:{x:244,y:-30.5}},{t:this.shape_171,p:{x:255.7,y:-30.5}},{t:this.shape_114,p:{x:264.1,y:-24.4}},{t:this.shape_349,p:{y:-4.1}},{t:this.shape_355,p:{x:-233.2,y:-3.5}},{t:this.shape_164,p:{x:-223.6,y:-0.7}},{t:this.shape_152,p:{x:-210.5,y:-0.9}},{t:this.shape_554},{t:this.shape_151,p:{x:-180.1,y:-0.7}},{t:this.shape_145,p:{x:-167.5,y:-0.7}},{t:this.shape_135,p:{x:-148.4,y:-0.7}},{t:this.shape_143,p:{x:-127.5,y:2.6}},{t:this.shape_149,p:{x:-113.9,y:-0.7}},{t:this.shape_419,p:{x:-102.2,y:-0.9}},{t:this.shape_128,p:{x:-94.1,y:-0.7}},{t:this.shape_153,p:{x:-81.9,y:-0.7}},{t:this.shape_150,p:{x:-68.3,y:-0.9}},{t:this.shape_130,p:{x:-55.5,y:-0.7}},{t:this.shape_144,p:{x:-43.8,y:-0.7}},{t:this.shape_137,p:{x:-25,y:-0.7}},{t:this.shape_140,p:{x:-8.4,y:-3.5}},{t:this.shape_129,p:{x:1,y:-0.9}},{t:this.shape_84,p:{x:12,y:-4.4}},{t:this.shape_553},{t:this.shape_119,p:{x:28.8,y:-0.7}},{t:this.shape_142,p:{x:42,y:-0.7}},{t:this.shape_136,p:{x:53.9,y:-0.7}},{t:this.shape_552},{t:this.shape_358,p:{x:71.9,y:-0.9}},{t:this.shape_331,p:{y:-0.6}},{t:this.shape_106,p:{x:94.3,y:-0.8}},{t:this.shape_423,p:{x:103.7,y:-2.2}},{t:this.shape_329,p:{y:-0.6}},{t:this.shape_138,p:{x:126,y:-0.9}},{t:this.shape_116,p:{x:134.9,y:-0.7}},{t:this.shape_101,p:{x:144.7,y:5.4}},{t:this.shape_112,p:{x:157.6,y:-4.2}},{t:this.shape_326,p:{y:-0.6}},{t:this.shape_123,p:{x:180.5,y:-0.7}},{t:this.shape_20,p:{x:194.2,y:2}},{t:this.shape_126,p:{x:208.9,y:-0.7}},{t:this.shape_325,p:{x:229.7,y:-4.1}},{t:this.shape_121,p:{x:244,y:-0.7}},{t:this.shape_215,p:{x:-254.2,y:29.2}},{t:this.shape_551},{t:this.shape_79,p:{x:-228.2,y:29.1}},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_319,p:{y:29.2}},{t:this.shape_74,p:{x:-171.9,y:29.1}},{t:this.shape_75,p:{x:-159.2,y:29}},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_122,p:{x:-106.8,y:25.7}},{t:this.shape_113,p:{x:-92.5,y:29.1}},{t:this.shape_111,p:{x:-72.5,y:29.1}},{t:this.shape_544},{t:this.shape_100,p:{x:-38.7,y:29.1}},{t:this.shape_543},{t:this.shape_309,p:{x:-17,y:31.8}},{t:this.shape_96,p:{x:-2.7,y:29.1}},{t:this.shape_542},{t:this.shape_71,p:{x:23.5,y:29}},{t:this.shape_541},{t:this.shape_72,p:{x:40.5,y:29.1}},{t:this.shape_305,p:{y:33.5}},{t:this.shape_540},{t:this.shape_87,p:{x:81.3,y:29.1}},{t:this.shape_302,p:{y:29}},{t:this.shape_539},{t:this.shape_538},{t:this.shape_68,p:{x:121.4,y:29.1}},{t:this.shape_299,p:{y:25.7}},{t:this.shape_86,p:{x:155.9,y:29.1}},{t:this.shape_537},{t:this.shape_168,p:{x:189.2,y:29.2}},{t:this.shape_82,p:{x:202.6,y:29.1}},{t:this.shape_51,p:{x:215.1,y:29}},{t:this.shape_77,p:{x:227.9,y:29.1}},{t:this.shape_66,p:{x:248.4,y:29.1}},{t:this.shape_39,p:{x:257.9,y:25.6}},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_33,p:{x:-180.6,y:56.1}},{t:this.shape_531},{t:this.shape_31,p:{x:-162.4,y:55.4}},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_44,p:{x:-77.4,y:59}},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_139,p:{x:-9,y:61.6}},{t:this.shape_521},{t:this.shape_520},{t:this.shape_17,p:{x:34.1,y:58.8}},{t:this.shape_16,p:{x:42.3,y:55.4}},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_8,p:{x:144.2,y:58.8}},{t:this.shape_512},{t:this.shape_511},{t:this.shape_5,p:{x:183.3,y:58.8}},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_269,p:{x:242.3,y:63.3}}]},1).to({state:[{t:this.shape_268,p:{y:-82.8,x:-73.9}},{t:this.shape_267,p:{y:-88.9,x:-63.5}},{t:this.shape_266,p:{y:-86}},{t:this.shape_753},{t:this.shape_752},{t:this.shape_263,p:{y:-86,x:-6.5}},{t:this.shape_262,p:{y:-86}},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_257,p:{y:-88.9,x:73.7}},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592}]},1).wait(1));

	// Fondo blanco
	this.instance = new lib.Mapadebits10();
	this.instance.parent = this;
	this.instance.setTransform(-328,-153,1.213,1.213);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// Fondo
	this.instance_1 = new lib.Mapadebits17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-517,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517,-296,1034,592);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Retro
	this.mc_feedback = new lib.Símbolo6();
	this.mc_feedback.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_feedback).wait(5));

	// Feedback bueno
	this.mc_goodFeedback = new lib.Símbolo15();
	this.mc_goodFeedback.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_goodFeedback).wait(5));

	// Feedback Malo
	this.mc_badFeedback = new lib.Símbolo14();
	this.mc_badFeedback.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_badFeedback).wait(5));

	// Buttons
	this.btn_send = new lib.Símbolo4();
	this.btn_send.parent = this;
	this.btn_send.setTransform(255.9,229.4);
	new cjs.ButtonHelper(this.btn_send, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_send).wait(5));

	// Contador
	this.mc_cont = new lib.Símbolo2();
	this.mc_cont.parent = this;
	this.mc_cont.setTransform(-482.2,-195.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_cont).wait(5));

	// Questions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgJA1QgDgDAAgGQAAgEADgFQAEgDAFAAQAFAAAEADQAEAFAAAEQAAAGgEADQgEAFgFAAQgFAAgEgFgAgJgjQgDgDAAgGQAAgEADgFQAEgEAFAAQAFAAAEAEQAEAFAAAEQAAAGgEADQgEAFgFAAQgFAAgEgFg");
	this.shape.setTransform(-218.1,-94.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGAEQAFADALADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_1.setTransform(-226.5,-94.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_2.setTransform(-238.2,-94.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_3.setTransform(-247,-94.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_4.setTransform(-258.8,-94.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgKgEgJgHQgIgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAFAGAIAEQAIADAIAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_5.setTransform(-273,-91.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_6.setTransform(-286.7,-94.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgDQgFgCgDgGQgDgGgBgHQABgJADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_7.setTransform(-298.4,-94.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgDQgFgCgDgGQgEgGABgHQgBgJAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_8.setTransform(-315.3,-94.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_9.setTransform(-327.1,-94.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_10.setTransform(-340.7,-94.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_11.setTransform(-354.3,-94.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_12.setTransform(-364.3,-97.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgDQgFgCgDgGQgDgGAAgHQAAgJADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgEgGgGgEQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGAEQAGADAKADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_13.setTransform(-372.2,-94.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgFADgEQADgEAFgEQADgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_14.setTransform(-380.3,-94.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_15.setTransform(-392,-94.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_16.setTransform(-404.4,-94.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_17.setTransform(-417.1,-94.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_18.setTransform(-426.4,-97.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_19.setTransform(-138.7,-123.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_20.setTransform(-150.4,-123.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_21.setTransform(-162.4,-123.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_22.setTransform(-175.1,-123.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AAgBbIAAg+QAAgTgGgKQgHgJgRAAIgGABQgFABgHAEQgFAEgGAIQgEAJAAAPIAAA6IgQAAIAAi1IAQAAIAABXIAAAAIAHgIIAJgHIALgEIAKgBQAWAAAJALQALALAAAVIAABHg");
	this.shape_23.setTransform(-187.8,-126.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_24.setTransform(-207.6,-123.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_25.setTransform(-216.4,-123.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_26.setTransform(-228,-123.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQADgGAGgEIALgGQAGgDAFgBIALgBQANAAALAEQALAFAIAIQAIAHAFAMQAEAKAAANQAAAMgEALQgFAKgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgFIgBAAIAABXgAgRhJQgIADgGAGQgGAGgDAIQgDAIgBAKQABAJADAIQADAIAGAHQAGAEAIAEQAJAEAIgBQAKABAIgEQAHgEAHgEQAFgHADgIQADgIAAgJQAAgKgDgIQgDgIgFgGQgHgGgHgDQgIgEgKAAQgIAAgJAEg");
	this.shape_27.setTransform(-240.8,-120.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGAEQAFADALADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_28.setTransform(-260.2,-123.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_29.setTransform(-272.1,-123.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_30.setTransform(-281.7,-123.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_31.setTransform(-293.8,-123.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_32.setTransform(-303.8,-126.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_33.setTransform(-313.2,-123.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgIA4IguhvIAUAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_34.setTransform(-324.9,-123.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_35.setTransform(-344,-123.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgGAGgCAJQgDAIAAAJQAAAJADAJQACAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_36.setTransform(-358.4,-126.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_37.setTransform(-378.5,-123.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgGgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQALACAJAIQAHAHABAMQgBAKgEAGQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_38.setTransform(-389.5,-123.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_39.setTransform(-397.5,-126.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_40.setTransform(-407.5,-123.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIALgHQAGgDAHgBIAKgBQAOAAALAFQALAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgDAIAAAJQAAAJADAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGACgIQAEgJAAgJQAAgJgEgIQgCgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_41.setTransform(-421.6,-126.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_42.setTransform(-147.6,-152.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_43.setTransform(-156.4,-155.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_44.setTransform(-172.6,-152.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_45.setTransform(-187,-155.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_46.setTransform(-207.7,-152.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgDgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAPQgJAEgMAAIgKgBg");
	this.shape_47.setTransform(-218.8,-153.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_48.setTransform(-229.7,-152.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_49.setTransform(-242.8,-152.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_50.setTransform(-252.4,-154.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_51.setTransform(-265.7,-152.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_52.setTransform(-278.6,-154.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_53.setTransform(-287.2,-152.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_54.setTransform(-300.1,-152.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_55.setTransform(-317.7,-152.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_56.setTransform(-337.2,-155.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_57.setTransform(-346.8,-152.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgCAGgCQAFgDAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_58.setTransform(-363,-152.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_59.setTransform(-374.6,-152.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQAMACAIAIQAHAHAAAMQAAAKgEAGQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_60.setTransform(-385.5,-152.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_61.setTransform(-393.6,-154.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgIA4IgthvIATAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_62.setTransform(-402.2,-152.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_63.setTransform(-414.7,-152.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQACgFADgEQADgEAFgEQADgCAGgCQAGgDAHAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_64.setTransform(-424.3,-152.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_65.setTransform(-181,-181);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_66.setTransform(-195.4,-184.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_67.setTransform(-215.5,-181);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQADgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_68.setTransform(-229.1,-178.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_69.setTransform(-239,-181.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_70.setTransform(-250.6,-181);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_71.setTransform(-261.9,-181);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_72.setTransform(-274.9,-181.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_73.setTransform(-288.1,-181);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_74.setTransform(-308.1,-181);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgDQgFgCgDgGQgEgGABgHQgBgJAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_75.setTransform(-319.8,-181);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_76.setTransform(-334.5,-184.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_77.setTransform(-343.9,-181);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_78.setTransform(-352.7,-183.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgFAEgEQADgEAFgEQADgCAGgCQAFgDAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_79.setTransform(-358.5,-181.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgDgCgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAPQgKAEgMAAIgKgBg");
	this.shape_80.setTransform(-367.4,-182.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgDQgFgCgDgGQgEgGABgHQgBgJAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgHAFQgFAEgIACQgIACgIAAQgNAAgLgFg");
	this.shape_81.setTransform(-376.5,-181);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_82.setTransform(-388.4,-180.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_83.setTransform(-402.7,-184.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_84.setTransform(-416.5,-181.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AgIBVIAAipIARAAIAACpg");
	this.shape_85.setTransform(-426.1,-183.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_86.setTransform(-158.1,-213.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_87.setTransform(-171.6,-209.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_88.setTransform(-185.2,-213.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_89.setTransform(-195,-212.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgFADgEQADgEAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_90.setTransform(-200.8,-209.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_91.setTransform(-212.6,-209.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQADgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_92.setTransform(-226.8,-207.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_93.setTransform(-240.5,-209.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgGgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQALACAJAIQAHAHABAMQgBAKgEAGQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_94.setTransform(-252.2,-209.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_95.setTransform(-270.7,-209.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_96.setTransform(-285.1,-213.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_97.setTransform(-305.2,-209.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_98.setTransform(-321.6,-209.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_99.setTransform(-338.1,-209.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgFADgEQADgEAFgEQADgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_100.setTransform(-347,-209.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgMAFQgLAFgMAAQgLAAgLgFQgKgEgIgHQgJgIgEgKQgEgKAAgMQAAgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAGAGAHAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_101.setTransform(-359.6,-207.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_102.setTransform(-373.8,-209.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_103.setTransform(-383.8,-209.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPAMAAAXQAAAWgPAMQgPAKgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgDAFgEQAFgDACgGQACgGAAgFQAAgHgCgFQgCgFgFgFQgFgEgIgCQgIgCgLAAIgbAAg");
	this.shape_104.setTransform(-395.1,-212.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_105.setTransform(-412.2,-213.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAPIhRAAIAABAIBaAAIAAAQg");
	this.shape_106.setTransform(-421.6,-212.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_107.setTransform(-293.3,-103.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgEgHgGgEQgFgEgJAAIgIABIgHADIgGAGQgBADAAAEQgBAIAGAEQAFADALADIAQAEQALACAIAHQAJAIgBAMQAAAJgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_108.setTransform(-301.7,-107.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_109.setTransform(-313.4,-107.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_110.setTransform(-322.2,-110.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_111.setTransform(-343.5,-108);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_112.setTransform(-356.6,-107.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_113.setTransform(-370.9,-105.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgEQADgDAGgBQAFgCAIAAIAMABIgDAPQgDgBgHAAQgIAAgHAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_114.setTransform(-380.9,-108);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_115.setTransform(-392.6,-107.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAHIgBAQIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWAAAKALQAKALAAAVIAABGg");
	this.shape_116.setTransform(-409.7,-108);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_117.setTransform(-426.4,-107.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_118.setTransform(-76.9,-136.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_119.setTransform(-91.2,-140);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_120.setTransform(-111.7,-136.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_121.setTransform(-124.7,-136.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPALAAAXQAAAXgPAMQgPAKgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgDAFgEQAFgEACgFQACgGAAgGQAAgFgCgGQgCgFgFgEQgFgEgIgDQgIgCgLAAIgbAAg");
	this.shape_122.setTransform(-142.6,-139.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_123.setTransform(-169.3,-136.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_124.setTransform(-183.6,-140);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgGgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQALACAJAHQAHAIABAMQgBAJgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_125.setTransform(-202.3,-136.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_126.setTransform(-214.1,-136.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_127.setTransform(-228.5,-140);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_128.setTransform(-242,-136.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_129.setTransform(-255.6,-140);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_130.setTransform(-265.4,-139.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_131.setTransform(-282.7,-139.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#111111").s().p("AAGBJQgFgCgDgEQgEgDgDgGQgDgFAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgDIABAOQgIAFgNAAIgJgBg");
	this.shape_132.setTransform(-289.5,-138.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_133.setTransform(-311.6,-136.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgEgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQAEQAMACAHAHQAJAIgBAMQAAAJgDAHQgEAGgHAFQgFAEgIACQgIACgIAAQgNAAgLgFg");
	this.shape_134.setTransform(-329.2,-136.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_135.setTransform(-340.9,-136.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_136.setTransform(-365.9,-136.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_137.setTransform(-380.3,-140);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_138.setTransform(-400.4,-136.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_139.setTransform(-413.2,-136.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIABANIgQAAIgBgJIAAgJIgHAIQgEAEgFADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_140.setTransform(-426.4,-136.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgIgCIgOgEIgJgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgEgHgGgEQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQAEQALACAIAHQAJAIAAAMQAAAJgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_141.setTransform(-85,-165.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_142.setTransform(-96.8,-165.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAFAJAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgOgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQAMACAHAHQAIAIAAAMQAAAJgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_143.setTransform(-115.2,-165.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_144.setTransform(-127,-165.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgEQADgDAGgBQAFgCAIAAIAMABIgDAPQgDgBgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_145.setTransform(-136.6,-165.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_146.setTransform(-148.8,-165.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_147.setTransform(-177.1,-165.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgEAEgFQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAPQgDgBgGAAQgJAAgHAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_148.setTransform(-185.9,-165.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_149.setTransform(-198.1,-165.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#111111").s().p("AgLBbIgLgEIgMgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIAMgHQAGgDAFgBIALgBQANAAALAFQAMAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgMAFQgLAEgNAAIgLgBgAgRgHQgIADgGAFQgGAGgDAJQgEAIAAAJQAAAJAEAJQADAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_150.setTransform(-212.1,-168.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_151.setTransform(-226.4,-165.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_152.setTransform(-245.2,-165.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_153.setTransform(-257.7,-165.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgDADAAAEQAAAIAGAEQAFADALADIAQAEQALACAJAHQAHAIABAMQAAAJgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_154.setTransform(-275.5,-165.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_155.setTransform(-287.8,-165.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_156.setTransform(-314,-165.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_157.setTransform(-328.4,-168.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_158.setTransform(-349.7,-168.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgLACQgVAAgLgMg");
	this.shape_159.setTransform(-363.4,-165.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_160.setTransform(-382.3,-165.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgIgCIgOgEIgJgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgEgHgGgEQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQAEQALACAIAHQAJAIAAAMQAAAJgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_161.setTransform(-393.2,-165.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_162.setTransform(-411.7,-165.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgIgCIgOgEIgJgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgEgHgGgEQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQAEQALACAIAHQAJAIAAAMQAAAJgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_163.setTransform(-82.3,-194.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_164.setTransform(-94.1,-194.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_165.setTransform(-107.7,-194.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_166.setTransform(-121.3,-194.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_167.setTransform(-131.3,-197);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_168.setTransform(-139.5,-194.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_169.setTransform(-148.6,-197);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_170.setTransform(-159.1,-197.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_171.setTransform(-173,-194.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_172.setTransform(-186.6,-194.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_173.setTransform(-199.1,-194.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGAEQAGADAKADIAQAEQALACAJAHQAHAIABAMQAAAJgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_174.setTransform(-216.9,-194.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_175.setTransform(-228.6,-194.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_176.setTransform(-237.4,-197.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_177.setTransform(-253.6,-194.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_178.setTransform(-288.7,-194.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_179.setTransform(-301.2,-194.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_180.setTransform(-310.3,-197);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgFgDgCgGQgDgFAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgDIABAOQgIAFgNAAIgJgBg");
	this.shape_181.setTransform(-317.1,-195.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgOgEIgHgCQgGgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgOAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQAMACAIAHQAHAIAAAMQAAAJgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_182.setTransform(-326.1,-194.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#111111").s().p("AgXBSQgLgFgIgHQgIgJgEgKQgFgLAAgNQAAgMAFgLQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFALAAAMQAAANgFALQgEAKgIAJQgIAHgLAFQgLAFgNAAQgMAAgLgFgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAKAEAIQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgIAAgKQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgDgKgBQgJABgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_183.setTransform(-338.4,-197);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_184.setTransform(-352.4,-194.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAFAGAIAEQAHADAJAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_185.setTransform(-366.5,-191.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_186.setTransform(-380.1,-194.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_187.setTransform(-388.9,-197);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_188.setTransform(-399.4,-197.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_189.setTransform(-415.9,-197.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_190.setTransform(-110.1,-79.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_191.setTransform(-120,-84.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_192.setTransform(-130.9,-84.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_193.setTransform(-142.8,-84.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_194.setTransform(-152.4,-84.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIALgHQAGgDAFgBIALgBQANAAALAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgDAJgBAJQABAJADAIQADAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAHgDAHgFQAFgGADgJQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgEQgIgDgKAAQgIAAgJADg");
	this.shape_195.setTransform(-164.3,-80.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_196.setTransform(-182.5,-84.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_197.setTransform(-199.2,-84.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_198.setTransform(-219,-84.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_199.setTransform(-244,-84.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_200.setTransform(-279.1,-84.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_201.setTransform(-289.2,-84.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_202.setTransform(-298.1,-85.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_203.setTransform(-309,-84.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_204.setTransform(-322.2,-84.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_205.setTransform(-357.3,-84.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAFAAQAFAAAEgCQACgCABgEQACgDABgEIABgJIAAiDIAPAAIAACGIAAAIQAAAGgDAGQgDAGgGAFQgHAEgLAAQgIAAgFgCgAAFhbQgFgEAAgFQAAgFAFgDQADgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_206.setTransform(-368.5,-84);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_207.setTransform(-376.7,-84.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#111111").s().p("AgKBbIgMgEIgMgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIAMgHQAFgDAHgBIAKgBQAOAAALAFQALAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBgAgRgHQgIADgGAFQgGAGgDAJQgEAIAAAJQAAAJAEAJQADAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_208.setTransform(-389.5,-87.4);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_209.setTransform(-403.8,-84.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_210.setTransform(-412.6,-84.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICDAAIAAAQIg6AAIAACZg");
	this.shape_211.setTransform(-424.5,-87);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_212.setTransform(-155.6,-112.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_213.setTransform(-175.8,-113);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_214.setTransform(-188.9,-112.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_215.setTransform(-223.6,-112.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_216.setTransform(-242.5,-112.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_217.setTransform(-255.1,-115.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFADAHAAQAIgBAFgFQAFgFADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_218.setTransform(-274.2,-110);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_219.setTransform(-307.8,-112.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_220.setTransform(-321.4,-116.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_221.setTransform(-331.3,-115.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_222.setTransform(-337.1,-113);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgRAAIAAgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_223.setTransform(-348.8,-112.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgLgEgIgHQgHgIgFgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_224.setTransform(-363.1,-110.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_225.setTransform(-376.8,-112.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_226.setTransform(-390.1,-115.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_227.setTransform(-410.1,-112.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_228.setTransform(-101.7,-141.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_229.setTransform(-114,-141.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#111111").s().p("AAGBIQgGgBgCgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIAEAGQABADADAAIAHABIAIgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_230.setTransform(-125,-143.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_231.setTransform(-135.9,-141.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_232.setTransform(-149.1,-141.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_233.setTransform(-166.2,-141.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_234.setTransform(-182.7,-141.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_235.setTransform(-202,-139);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_236.setTransform(-215.7,-141.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_237.setTransform(-225.3,-141.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFADAHAAQAIgBAFgFQAFgFADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_238.setTransform(-242.7,-138.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_239.setTransform(-260.2,-141.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_240.setTransform(-271.9,-141.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_241.setTransform(-288.3,-141.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_242.setTransform(-301.2,-141.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_243.setTransform(-313.4,-141.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_244.setTransform(-327.4,-141.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_245.setTransform(-345.5,-141.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_246.setTransform(-357.2,-141.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_247.setTransform(-382.1,-141.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_248.setTransform(-396.6,-144.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_249.setTransform(-417,-144.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFADAHAAQAIgBAFgFQAFgFADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_250.setTransform(-78.6,-167.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_251.setTransform(-97.8,-170.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_252.setTransform(-122.7,-170.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_253.setTransform(-153.1,-170.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_254.setTransform(-170.3,-170.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_255.setTransform(-180.3,-170.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIALgHQAHgDAGgBIAKgBQANAAAMAEQAKAFAIAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgIAIgKAEQgMAFgNAAIgKgBIgNgEIgLgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgJQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_256.setTransform(-192.3,-167.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_257.setTransform(-213.8,-170.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCACgEQABgDABgEIAAgJIAAiDIAQAAIAACGIAAAIQgBAGgCAGQgDAGgHAFQgGAEgMAAQgGAAgGgCgAAEhbQgDgEAAgFQAAgFADgDQAEgDAFAAQADAAAEADQAEADAAAFQAAAFgEAEQgEADgDAAQgFAAgEgDg");
	this.shape_258.setTransform(-225,-170.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_259.setTransform(-233.2,-170.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#111111").s().p("AgLBbIgMgEIgKgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIAKgHQAGgDAGgBIALgBQAOAAAKAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_260.setTransform(-246,-173.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_261.setTransform(-260.3,-170.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_262.setTransform(-269.1,-170.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICCAAIAAAQIg4AAIAACZg");
	this.shape_263.setTransform(-281,-173.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_264.setTransform(-307,-170.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_265.setTransform(-327.2,-170.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_266.setTransform(-340.4,-170.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_267.setTransform(-361.4,-173.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_268.setTransform(-394,-170.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_269.setTransform(-406.6,-173.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFADAHAAQAIgBAFgFQAFgFADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_270.setTransform(-425.6,-167.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_271.setTransform(-87.4,-202.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_272.setTransform(-100.9,-199.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_273.setTransform(-124.4,-202);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_274.setTransform(-130.2,-199.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_275.setTransform(-141.9,-199.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_276.setTransform(-169.9,-199.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_277.setTransform(-183.2,-202.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_278.setTransform(-203.2,-199.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_279.setTransform(-238.3,-199.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_280.setTransform(-248.3,-202);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_281.setTransform(-254.1,-199.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_282.setTransform(-265.7,-199.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAHABIAJgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_283.setTransform(-275.5,-200.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_284.setTransform(-282.4,-202);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_285.setTransform(-288.2,-199.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_286.setTransform(-299.8,-199.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPAMQAPAKAAAXQAAAXgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgEQAFgFACgFQACgFAAgHQAAgGgCgFQgCgGgFgEQgFgDgIgDQgIgCgLAAIgbAAg");
	this.shape_287.setTransform(-311.9,-202.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#111111").s().p("AgTBSQgLgEgIgJQgHgIgFgKQgEgLAAgMQAAgNAEgLQAEgKAIgIQAIgIAKgEQAKgEALgBQANABAKAEQAKAEAHAIQAHAIADAJQAEAKAAALIAAAHIhdAAQABAJAEAIQADAHAGAFQAFAGAHADQAHADAIAAQANAAAJgGQAJgFAFgJIAMAKQgKAOgMAFQgMAFgOAAQgMAAgKgEgAgNgNQgHADgFAFQgGAFgDAFQgDAHAAAHIBLAAQAAgRgKgIQgJgKgSAAQgGAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_288.setTransform(-332.8,-202);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQADADADAAIAHABIAHgBIAIgEIABAQQgJADgMAAIgKgBg");
	this.shape_289.setTransform(-343.4,-200.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_290.setTransform(-350.3,-202);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_291.setTransform(-363.6,-199.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_292.setTransform(-380.8,-199.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#111111").s().p("AgVBSQgQgGgMgMQgMgMgHgQQgHgQAAgUQAAgSAHgQQAHgRAMgMQAMgMAQgGQAQgIASABQAQAAAQAGQAPAHAMAOIgPALIgIgJQgEgDgGgEIgNgEQgGgCgHAAQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAOAFAOQAFANAJALQAJAJANAGQANAHAPgBIANAAIANgFQAHgCAFgFQAGgGAFgHIAOAKIgLANQgGAFgIAFQgJAEgJACQgKACgKABQgSAAgQgIg");
	this.shape_293.setTransform(-396.1,-202.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_294.setTransform(-414.3,-202.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAOIhRAAIAABBIBaAAIAAAQg");
	this.shape_295.setTransform(-423.7,-202.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_296.setTransform(-364.8,-85.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgDgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIADAGQADADADAAIAHABIAHgBIAIgEIABAQQgJADgMAAIgKgBg");
	this.shape_297.setTransform(-375.4,-86.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_298.setTransform(-386.3,-85.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_299.setTransform(-399.4,-85.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_300.setTransform(-413.7,-82.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_301.setTransform(-423.6,-88.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_302.setTransform(-73.7,-114.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgMQAAgOAFgKQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFAKAAAOQAAAMgFALQgEALgIAHQgIAJgLAEQgLAFgNgBQgMABgLgFgAgRgNQgIAEgFAFQgGAGgCAIQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgIgFgGQgGgFgIgEQgHgEgKABQgJgBgIAEgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_303.setTransform(-87.3,-116.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_304.setTransform(-97.3,-116.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_305.setTransform(-118.3,-114.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_306.setTransform(-135,-114.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_307.setTransform(-143,-116.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_308.setTransform(-167.2,-114.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_309.setTransform(-192.8,-114.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_310.setTransform(-217.7,-114.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAJgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_311.setTransform(-235.3,-114.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_312.setTransform(-247.1,-114.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgEAGgCQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_313.setTransform(-271.4,-114.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_314.setTransform(-283.5,-114.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_315.setTransform(-308.7,-114.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_316.setTransform(-324.6,-108);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_317.setTransform(-335.1,-114.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCACgEQACgDAAgEIAAgJIAAiDIAQAAIAACGIAAAIQgBAGgCAGQgDAGgGAFQgHAEgMAAQgGAAgGgCgAAEhbQgDgEAAgFQAAgFADgDQAEgDAEAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEADgEAAQgEAAgEgDg");
	this.shape_318.setTransform(-346.3,-114);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_319.setTransform(-354.5,-114.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIALgHQAHgDAGgBIAKgBQANAAAMAFQAKAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_320.setTransform(-367.3,-117.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_321.setTransform(-381.6,-114.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_322.setTransform(-390.4,-114.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQACADACAAIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_323.setTransform(-399.4,-115.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_324.setTransform(-416.7,-114.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_325.setTransform(-68.6,-142.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_326.setTransform(-80.5,-142.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#111111").s().p("AAGBIQgFgBgDgDQgEgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_327.setTransform(-91.1,-144.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_328.setTransform(-102,-143.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_329.setTransform(-115.1,-142.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_330.setTransform(-139.3,-145.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_331.setTransform(-171.8,-142.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_332.setTransform(-191.1,-142.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_333.setTransform(-231.9,-142.9);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_334.setTransform(-242,-143.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgFgEgCgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_335.setTransform(-250.9,-144.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_336.setTransform(-261.8,-143.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_337.setTransform(-275.4,-142.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_338.setTransform(-325.8,-143.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgMQAAgOAFgKQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFAKAAAOQAAAMgFALQgEALgIAHQgIAJgLAEQgLAFgNgBQgMABgLgFgAgRgNQgIAEgFAFQgGAGgCAIQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgIgFgGQgGgFgIgEQgHgEgKABQgJgBgIAEgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_339.setTransform(-339.4,-145.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_340.setTransform(-349.4,-145.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_341.setTransform(-370.7,-143.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_342.setTransform(-383.9,-142.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_343.setTransform(-408.8,-142.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_344.setTransform(-418.4,-143.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAFgFAEgEIALgHQAHgDAGgBIAKgBQANAAAMAEQAKAEAIAIQAIAJAEALQAFAKAAANQAAANgFALQgEAJgIAIQgIAIgKAEQgMAFgNAAIgKgBIgNgEIgLgHQgEgEgFgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAIAGAHQAGAEAIAEQAJADAIAAQAKAAAIgDQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_345.setTransform(-430.3,-139.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_346.setTransform(-117.1,-171.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_347.setTransform(-150.1,-171.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_348.setTransform(-161.8,-171.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_349.setTransform(-170.6,-174.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_350.setTransform(-181.1,-169);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_351.setTransform(-194.8,-171.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#111111").s().p("AAGBIQgFgBgDgDQgEgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_352.setTransform(-205.4,-173.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_353.setTransform(-215.9,-171.7);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_354.setTransform(-224.8,-171.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#111111").s().p("AAGBIQgFgBgDgDQgEgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_355.setTransform(-233.7,-173.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_356.setTransform(-242.8,-171.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_357.setTransform(-254.6,-171.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgEgBgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_358.setTransform(-270.9,-171.9);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_359.setTransform(-282.4,-171.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQACADACAAIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_360.setTransform(-292.3,-173.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_361.setTransform(-303.2,-171.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_362.setTransform(-316.3,-171.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_363.setTransform(-333.4,-171.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_364.setTransform(-350.1,-171.7);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAEgFAFgEIALgHQAGgDAHgBIAKgBQANAAAMAEQALAEAHAIQAIAJAEALQAFAKAAANQAAANgFALQgEAJgIAIQgIAIgKAEQgMAFgNAAIgKgBIgNgEIgLgHQgFgEgEgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgDAJAAAJQAAAJADAIQAEAIAGAHQAGAEAIAEQAJADAIAAQAKAAAIgDQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_365.setTransform(-369.5,-168.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_366.setTransform(-387.6,-171.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_367.setTransform(-400.5,-174.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_368.setTransform(-416.7,-171.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_369.setTransform(-431.1,-175.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_370.setTransform(-71.4,-200.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgEAGgCQAGgCAHAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_371.setTransform(-94.9,-200.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_372.setTransform(-106.4,-200.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_373.setTransform(-117.7,-200.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_374.setTransform(-130.8,-200.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_375.setTransform(-143.9,-200.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_376.setTransform(-163.9,-200.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAJgFAGQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_377.setTransform(-175.6,-200.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_378.setTransform(-192.5,-200.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_379.setTransform(-204.2,-200.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_380.setTransform(-213,-203.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_381.setTransform(-221.2,-200.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_382.setTransform(-234.3,-200.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_383.setTransform(-247.4,-200.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEAMAAIAKAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAFAGAIAEQAHADAIAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgIAAgHADg");
	this.shape_384.setTransform(-261.7,-197.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_385.setTransform(-271.7,-200.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_386.setTransform(-283.4,-200.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_387.setTransform(-300.5,-200.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_388.setTransform(-338.1,-200.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_389.setTransform(-352.4,-203.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_390.setTransform(-372.9,-200.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_391.setTransform(-385.9,-200.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPAMQAPALAAAXQAAAWgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgDAFgDQAFgEACgGQACgFAAgGQAAgHgCgFQgCgFgFgFQgFgEgIgCQgIgCgLAAIgbAAg");
	this.shape_392.setTransform(-403.8,-203.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAOIhRAAIAABBIBaAAIAAAQg");
	this.shape_393.setTransform(-430.3,-203.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#111111").s().p("AgPBVIAAhvIAPAAIAABvgAgWgyIAXgiIAWAAIgfAig");
	this.shape_394.setTransform(-174.3,-117);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#111111").s().p("AAhBSIAAg+QAAgTgGgJQgHgKgRAAIgGABQgGABgGAFQgGAEgFAHQgFAJAAAPIAAA6IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgHIAKgDIALgCQAVAAAKALQALALAAAVIAABHgAgkg4IACgJIAFgIQACgDAEgCQAEgCAFAAQAFAAAEABIAIAFIAIADQAEACAEAAQAFAAADgEIAEgIIAKAAIgCAJIgEAIQgDAEgEACQgEACgFAAQgEAAgFgCIgJgEIgHgDIgIgCQgFAAgDADIgEAIg");
	this.shape_395.setTransform(-184.9,-116.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAFgFAEgEIAMgHQAGgDAFgBIALgBQANAAALAEQAMAEAHAIQAIAJAEALQAFAKAAANQAAANgFALQgEAJgIAIQgHAIgMAEQgLAFgNAAIgLgBIgLgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgDAIQgEAJAAAJQAAAJAEAIQADAIAGAHQAGAEAIAEQAIADAJAAQAKAAAIgDQAHgEAHgEQAFgHADgIQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_396.setTransform(-210.8,-110.8);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_397.setTransform(-325,-114.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_398.setTransform(-337.6,-111.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQACADACAAIAHABIAJgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_399.setTransform(-361.9,-115.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#111111").s().p("AAsBcIAAhYIAAAAQgEAGgFAEIgLAHIgNAEIgLABQgMAAgMgFQgKgEgIgIQgIgIgEgJQgFgLAAgNQAAgNAFgKQAEgLAIgJQAIgIAKgEQAMgEAMAAIALABQAGABAHADIALAHQAFAEAEAFIAAAAIAAgSIAQAAIAAC0gAgRhJQgHADgGAGQgFAGgDAIQgEAJAAAJQAAAJAEAIQADAIAFAHQAGAEAHAEQAIADAJAAQAJAAAJgDQAIgEAGgEQAGgHAEgIQADgIAAgJQAAgJgDgJQgEgIgGgGQgGgGgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_400.setTransform(-426.1,-110.8);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAJgDAGQgEAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_401.setTransform(-131.2,-142.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAFgFAEgEIALgHQAGgDAHgBIAKgBQAOAAALAEQALAEAHAIQAIAJAEALQAFAKAAANQAAANgFALQgEAJgIAIQgHAIgLAEQgLAFgOAAIgKgBIgNgEIgLgHQgEgEgFgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgDAJAAAJQAAAJADAIQAEAIAGAHQAGAEAIAEQAIADAJAAQAKAAAIgDQAHgEAHgEQAFgHACgIQAEgIAAgJQAAgJgEgJQgCgIgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_402.setTransform(-164.6,-139.6);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIAEAGQABADADAAIAHABIAIgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_403.setTransform(-204.2,-144.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQACADACAAIAHABIAJgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_404.setTransform(-259.8,-144.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#111111").s().p("AgNBcIAAhhIgXAAIAAgOIAXAAIAAgfQAAgWALgKQAJgJARAAIAGAAIAHACIgCAOIgHgBIgGgBQgGAAgEACQgEADgCAEIgEAJIAAALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_405.setTransform(-289.8,-146.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAIAHAAANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_406.setTransform(-379.4,-142.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_407.setTransform(-391.7,-142.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_408.setTransform(-403.9,-142.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_409.setTransform(-149.5,-171.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIQgBAHAAAHIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_410.setTransform(-211.1,-171.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_411.setTransform(-269.6,-171.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQADgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgLgEgIgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_412.setTransform(-311.4,-169);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_413.setTransform(-321.4,-171.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_414.setTransform(-414.5,-171.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_415.setTransform(-91.6,-200.7);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_416.setTransform(-103.8,-200.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#111111").s().p("AgvBVIAAipIARAAIAACZIBOAAIAAAQg");
	this.shape_417.setTransform(-142.9,-203.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#111111").s().p("AgIA4IgthvIATAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_418.setTransform(-236.1,-200.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_419.setTransform(-262.4,-200.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#111111").s().p("AgVBSQgQgGgMgMQgMgMgHgQQgHgQAAgUQAAgTAHgQQAHgQAMgMQAMgMAQgGQAQgIASAAQAQABAQAGQAPAHAMANIgPAMIgIgJQgEgDgGgDIgNgGQgGgBgHAAQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAPAFANQAFAOAJAKQAJAJANAGQANAHAPgBIANgBIANgEQAHgCAFgFQAGgGAFgHIAOAKIgLANQgGAFgIAFQgJADgJADQgKACgKABQgSAAgQgIg");
	this.shape_420.setTransform(-277.7,-203.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#111111").s().p("AgTBSQgLgEgIgJQgHgHgFgLQgEgLAAgMQAAgOAEgKQAEgKAIgIQAIgIAKgEQAKgEALgBQANABAKAEQAKAEAHAIQAHAIADAJQAEAKAAALIAAAHIhdAAQABAJAEAIQADAHAGAFQAFAGAHADQAHADAIAAQANAAAJgGQAJgFAFgJIAMALQgKANgMAFQgMAGgOgBQgMABgKgFgAgNgNQgHADgFAFQgGAFgDAFQgDAHAAAHIBLAAQAAgRgKgIQgJgKgSAAQgGgBgIAEgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_421.setTransform(-334.4,-203.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIADAGQADADACAAIAIABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_422.setTransform(-345,-202);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_423.setTransform(-382.4,-200.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#111111").s().p("AgVBSQgQgGgMgMQgMgMgHgQQgHgQAAgUQAAgTAHgQQAHgQAMgMQAMgMAQgGQAQgIASAAQAQABAQAGQAPAHAMANIgPAMIgIgJQgEgDgGgDIgNgGQgGgBgHAAQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAPAFANQAFAOAJAKQAJAJANAGQANAHAPgBIANgBIANgEQAHgCAFgFQAGgGAFgHIAOAKIgLANQgGAFgIAFQgJADgJADQgKACgKABQgSAAgQgIg");
	this.shape_424.setTransform(-397.7,-203.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106,p:{x:-421.6,y:-212.7}},{t:this.shape_105,p:{x:-412.2,y:-213.3}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{x:-359.6,y:-207.1}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96,p:{x:-285.1,y:-213.1}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:-212.6,y:-209.7}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:-185.2,y:-213.1}},{t:this.shape_87},{t:this.shape_86,p:{x:-158.1,y:-213.1}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83,p:{x:-402.7,y:-184.3}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{x:-334.5,y:-184.5}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-261.9,y:-181}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:-229.1,y:-178.3}},{t:this.shape_67},{t:this.shape_66,p:{x:-195.4,y:-184.3}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:-402.2,y:-152.2}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:-337.2,y:-155.7}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:-287.2,y:-152.2}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:-187,y:-155.5}},{t:this.shape_44},{t:this.shape_43,p:{x:-156.4,y:-155.7}},{t:this.shape_42},{t:this.shape_41,p:{x:-421.6,y:-126.7}},{t:this.shape_40},{t:this.shape_39,p:{x:-397.5,y:-126.9}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-324.9,y:-123.4}},{t:this.shape_33},{t:this.shape_32,p:{x:-303.8,y:-126.9}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:-162.4,y:-123.4}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:-404.4,y:-94.6}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:-273,y:-91.9}},{t:this.shape_4,p:{x:-258.8,y:-94.5}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_106,p:{x:-425.3,y:-197.2}},{t:this.shape_189,p:{x:-415.9,y:-197.8}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179,p:{x:-301.2,y:-194.3}},{t:this.shape_178},{t:this.shape_88,p:{x:-268,y:-197.6}},{t:this.shape_177},{t:this.shape_176,p:{x:-237.4,y:-197.8}},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173,p:{x:-199.1,y:-194.3}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168,p:{x:-139.5,y:-194.3}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_83,p:{x:-426.1,y:-168.8}},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_105,p:{x:-372.9,y:-169}},{t:this.shape_159,p:{x:-363.4,y:-165.4}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_76,p:{x:-297.8,y:-169}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153,p:{x:-257.7,y:-165.5}},{t:this.shape_152},{t:this.shape_56,p:{x:-235.2,y:-169}},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_45,p:{x:-163.6,y:-168.8}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137,p:{x:-380.3,y:-140}},{t:this.shape_136},{t:this.shape_43,p:{x:-349.7,y:-140.2}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_71,p:{x:-298.9,y:-136.7}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_34,p:{x:-274,y:-136.7}},{t:this.shape_130},{t:this.shape_129,p:{x:-255.6,y:-140}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124,p:{x:-183.6,y:-140}},{t:this.shape_123},{t:this.shape_39,p:{x:-159.7,y:-140.2}},{t:this.shape_122},{t:this.shape_32,p:{x:-133.5,y:-140.2}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119,p:{x:-91.2,y:-140}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_21,p:{x:-330.4,y:-107.9}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107,p:{x:-293.3,y:-103.4}}]},1).to({state:[{t:this.shape_295,p:{x:-423.7,y:-202.2}},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_96,p:{x:-217.6,y:-202.6}},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_68,p:{x:-156.2,y:-196.6}},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_88,p:{x:-114.5,y:-202.6}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_189,p:{x:-384.6,y:-174}},{t:this.shape_159,p:{x:-375.1,y:-170.4}},{t:this.shape_267,p:{x:-361.4,y:-173.8}},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_176,p:{x:-297.5,y:-174}},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_91,p:{x:-136.1,y:-170.4}},{t:this.shape_252},{t:this.shape_53,p:{x:-110.2,y:-170.5}},{t:this.shape_251},{t:this.shape_250},{t:this.shape_16,p:{x:-425.6,y:-141.7}},{t:this.shape_249},{t:this.shape_5,p:{x:-407.1,y:-139}},{t:this.shape_248},{t:this.shape_105,p:{x:-390.9,y:-145.2}},{t:this.shape_247},{t:this.shape_76,p:{x:-366,y:-145.2}},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_56,p:{x:-191.5,y:-145.2}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_86,p:{x:-424.5,y:-116.2}},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_124,p:{x:-294.3,y:-116.2}},{t:this.shape_218,p:{x:-274.2,y:-110}},{t:this.shape_217},{t:this.shape_216},{t:this.shape_43,p:{x:-233.1,y:-116.4}},{t:this.shape_215},{t:this.shape_45,p:{x:-209.9,y:-116.2}},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_39,p:{x:-146,y:-116.4}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_83,p:{x:-336.5,y:-87.4}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_66,p:{x:-258.4,y:-87.4}},{t:this.shape_199},{t:this.shape_32,p:{x:-227.8,y:-87.6}},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_393},{t:this.shape_176,p:{x:-420.9,y:-204}},{t:this.shape_392},{t:this.shape_105,p:{x:-394.7,y:-204}},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_295,p:{x:-317,y:-203.4}},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382,p:{x:-234.3}},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374,p:{x:-130.8}},{t:this.shape_373},{t:this.shape_372,p:{x:-106.4}},{t:this.shape_371},{t:this.shape_5,p:{x:-84.9,y:-197.8}},{t:this.shape_370,p:{x:-71.4}},{t:this.shape_369,p:{x:-431.1}},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366,p:{x:-387.6,y:-171.9}},{t:this.shape_365},{t:this.shape_76,p:{x:-359.7,y:-175.2}},{t:this.shape_364},{t:this.shape_363,p:{x:-333.4,y:-171.9}},{t:this.shape_362,p:{x:-316.3,y:-171.7}},{t:this.shape_361,p:{x:-303.2}},{t:this.shape_360},{t:this.shape_359,p:{x:-282.4,y:-171.7}},{t:this.shape_358,p:{x:-270.9,y:-171.9}},{t:this.shape_357,p:{x:-254.6,y:-171.7}},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353,p:{x:-215.9}},{t:this.shape_352},{t:this.shape_351,p:{x:-194.8}},{t:this.shape_350},{t:this.shape_349,p:{x:-170.6,y:-174.5}},{t:this.shape_348,p:{x:-161.8}},{t:this.shape_347},{t:this.shape_137,p:{x:-131.4,y:-175.1}},{t:this.shape_346,p:{x:-117.1}},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343,p:{x:-408.8,y:-142.9}},{t:this.shape_16,p:{x:-396.3,y:-143}},{t:this.shape_342,p:{x:-383.9,y:-142.9}},{t:this.shape_341,p:{x:-370.7,y:-143.1}},{t:this.shape_179,p:{x:-357.7,y:-143}},{t:this.shape_340,p:{x:-349.4,y:-145.7}},{t:this.shape_339},{t:this.shape_338,p:{x:-325.8}},{t:this.shape_218,p:{x:-306.5,y:-140.1}},{t:this.shape_173,p:{x:-287.9,y:-143}},{t:this.shape_337,p:{x:-275.4}},{t:this.shape_336,p:{x:-261.8}},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333,p:{x:-231.9}},{t:this.shape_56,p:{x:-221.9,y:-146.4}},{t:this.shape_45,p:{x:-205.4,y:-146.3}},{t:this.shape_332,p:{x:-191.1,y:-142.9}},{t:this.shape_331,p:{x:-171.8,y:-142.9}},{t:this.shape_168,p:{x:-159.1,y:-143}},{t:this.shape_153,p:{x:-147.6,y:-143}},{t:this.shape_330,p:{x:-139.3,y:-145.7}},{t:this.shape_119,p:{x:-129.5,y:-146.3}},{t:this.shape_329,p:{x:-115.1,y:-142.9}},{t:this.shape_328,p:{x:-102}},{t:this.shape_327},{t:this.shape_326,p:{x:-80.5}},{t:this.shape_325},{t:this.shape_129,p:{x:-431.1,y:-117.5}},{t:this.shape_324,p:{x:-416.7,y:-114.1}},{t:this.shape_323},{t:this.shape_322,p:{x:-390.4,y:-114.3}},{t:this.shape_321,p:{x:-381.6,y:-114.1}},{t:this.shape_320},{t:this.shape_319,p:{x:-354.5,y:-114.1}},{t:this.shape_318},{t:this.shape_317,p:{x:-335.1,y:-114.1}},{t:this.shape_316},{t:this.shape_315,p:{x:-308.7}},{t:this.shape_71,p:{x:-296,y:-114.2}},{t:this.shape_314,p:{x:-283.5}},{t:this.shape_313},{t:this.shape_124,p:{x:-261.5,y:-117.5}},{t:this.shape_312,p:{x:-247.1,y:-114.1}},{t:this.shape_311},{t:this.shape_310,p:{x:-217.7}},{t:this.shape_43,p:{x:-201.6,y:-117.6}},{t:this.shape_309,p:{x:-192.8}},{t:this.shape_39,p:{x:-176.8,y:-117.6}},{t:this.shape_308,p:{x:-167.2,y:-114.1}},{t:this.shape_101,p:{x:-153.5,y:-111.4}},{t:this.shape_307,p:{x:-143,y:-116.9}},{t:this.shape_306,p:{x:-135,y:-114.1}},{t:this.shape_32,p:{x:-127.1,y:-117.6}},{t:this.shape_305,p:{x:-118.3}},{t:this.shape_21,p:{x:-105.6,y:-114.2}},{t:this.shape_304,p:{x:-97.3,y:-116.9}},{t:this.shape_303},{t:this.shape_302,p:{x:-73.7}},{t:this.shape_62,p:{x:-432.2,y:-85.4}},{t:this.shape_301,p:{x:-423.6,y:-88.1}},{t:this.shape_300},{t:this.shape_299,p:{x:-399.4,y:-85.3}},{t:this.shape_298,p:{x:-386.3,y:-85.5}},{t:this.shape_297},{t:this.shape_296,p:{x:-364.8,y:-85.3}},{t:this.shape_107,p:{x:-354.7,y:-80.9}}]},1).to({state:[{t:this.shape_295,p:{x:-425.3,y:-203.4}},{t:this.shape_76,p:{x:-415.9,y:-204}},{t:this.shape_424},{t:this.shape_423},{t:this.shape_366,p:{x:-365.2,y:-200.7}},{t:this.shape_349,p:{x:-351.9,y:-203.3}},{t:this.shape_422},{t:this.shape_421},{t:this.shape_267,p:{x:-314.1,y:-203.9}},{t:this.shape_362,p:{x:-299.8,y:-200.5}},{t:this.shape_420},{t:this.shape_419},{t:this.shape_382,p:{x:-248.8}},{t:this.shape_418},{t:this.shape_340,p:{x:-227.5,y:-203.3}},{t:this.shape_62,p:{x:-218.8,y:-200.6}},{t:this.shape_357,p:{x:-206.4,y:-200.5}},{t:this.shape_374,p:{x:-193.3}},{t:this.shape_179,p:{x:-180.2,y:-200.6}},{t:this.shape_330,p:{x:-172,y:-203.3}},{t:this.shape_372,p:{x:-163.2}},{t:this.shape_417},{t:this.shape_370,p:{x:-132.1}},{t:this.shape_41,p:{x:-117.8,y:-203.9}},{t:this.shape_416},{t:this.shape_415},{t:this.shape_359,p:{x:-82.8,y:-200.5}},{t:this.shape_56,p:{x:-73.4,y:-204}},{t:this.shape_351,p:{x:-426.4}},{t:this.shape_414},{t:this.shape_346,p:{x:-396.2}},{t:this.shape_43,p:{x:-386.6,y:-175.2}},{t:this.shape_343,p:{x:-370.4,y:-171.7}},{t:this.shape_361,p:{x:-357.3}},{t:this.shape_173,p:{x:-344.2,y:-171.8}},{t:this.shape_353,p:{x:-332.9}},{t:this.shape_413},{t:this.shape_412},{t:this.shape_348,p:{x:-297.9}},{t:this.shape_369,p:{x:-284.4}},{t:this.shape_411},{t:this.shape_129,p:{x:-248.8,y:-175.1}},{t:this.shape_342,p:{x:-234.5,y:-171.7}},{t:this.shape_410},{t:this.shape_332,p:{x:-194,y:-171.7}},{t:this.shape_83,p:{x:-180.4,y:-175.1}},{t:this.shape_307,p:{x:-169.8,y:-174.5}},{t:this.shape_331,p:{x:-161,y:-171.7}},{t:this.shape_409},{t:this.shape_329,p:{x:-133.2,y:-171.7}},{t:this.shape_341,p:{x:-120.1,y:-171.9}},{t:this.shape_168,p:{x:-426.9,y:-143}},{t:this.shape_321,p:{x:-415.6,y:-142.9}},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_119,p:{x:-360.8,y:-146.3}},{t:this.shape_326,p:{x:-346.4}},{t:this.shape_153,p:{x:-326.9,y:-143}},{t:this.shape_337,p:{x:-314.4}},{t:this.shape_338,p:{x:-300.8}},{t:this.shape_405},{t:this.shape_39,p:{x:-284,y:-146.4}},{t:this.shape_304,p:{x:-278.2,y:-145.7}},{t:this.shape_71,p:{x:-269.2,y:-143}},{t:this.shape_404},{t:this.shape_333,p:{x:-248.7}},{t:this.shape_324,p:{x:-228.3,y:-142.9}},{t:this.shape_336,p:{x:-215.1}},{t:this.shape_403},{t:this.shape_358,p:{x:-195.3,y:-143.1}},{t:this.shape_312,p:{x:-185.7,y:-142.9}},{t:this.shape_402},{t:this.shape_308,p:{x:-151,y:-142.9}},{t:this.shape_322,p:{x:-139.3,y:-143.1}},{t:this.shape_401},{t:this.shape_317,p:{x:-119.1,y:-142.9}},{t:this.shape_328,p:{x:-105.5}},{t:this.shape_319,p:{x:-92.7,y:-142.9}},{t:this.shape_306,p:{x:-81,y:-142.9}},{t:this.shape_400},{t:this.shape_4,p:{x:-411.8,y:-114}},{t:this.shape_299,p:{x:-398.4,y:-114.1}},{t:this.shape_301,p:{x:-382.2,y:-116.9}},{t:this.shape_302,p:{x:-372.8}},{t:this.shape_399},{t:this.shape_296,p:{x:-351.3,y:-114.1}},{t:this.shape_398},{t:this.shape_397},{t:this.shape_315,p:{x:-316.1}},{t:this.shape_298,p:{x:-303.1,y:-114.3}},{t:this.shape_32,p:{x:-286.7,y:-117.6}},{t:this.shape_310,p:{x:-277.9}},{t:this.shape_21,p:{x:-258.6,y:-114.2}},{t:this.shape_314,p:{x:-246.1}},{t:this.shape_363,p:{x:-228.9,y:-114.3}},{t:this.shape_396},{t:this.shape_309,p:{x:-197.9}},{t:this.shape_395},{t:this.shape_394},{t:this.shape_305,p:{x:-166.4}},{t:this.shape_107,p:{x:-156.5,y:-109.7}}]},1).wait(1));

	// Anwers
	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#111111").s().p("AgfBMQgPgHgLgKQgLgLgGgPQgGgPAAgSQAAgRAGgPQAGgPALgLQALgLAPgGQAPgGAQAAQARAAAPAGQAPAGALALQALALAGAPQAGAPAAARQAAASgGAPQgGAPgLALQgLAKgPAHQgPAGgRAAQgQAAgPgGgAgag9QgMAFgIAKQgIAJgFAMQgEAMAAANQAAANAEANQAFAMAIAJQAIAJAMAGQAMAFAOAAQAPAAAMgFQAMgGAIgJQAIgJAFgMQAEgNAAgNQAAgNgEgMQgFgMgIgJQgIgKgMgFQgMgFgPAAQgOAAgMAFg");
	this.shape_425.setTransform(247.6,48);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#111111").s().p("AAhBOIgqhIIgaAAIAABIIgQAAIAAibIAwAAQAXAAANALQAOAKAAAVQAAAQgKALQgKALgUABIAtBKgAgjgIIAcAAQAJAAAIgCQAHgDAFgDQAEgDACgGQACgFAAgFQAAgGgCgFQgCgFgEgEQgFgDgHgCQgIgCgJgBIgcAAg");
	this.shape_426.setTransform(232.7,48);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#111111").s().p("AgxBOIAAibIBgAAIAAAOIhQAAIAAA2IBLAAIAAAOIhLAAIAAA6IBTAAIAAAPg");
	this.shape_427.setTransform(219.4,48);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#111111").s().p("AhCBOIAAibIA0AAQAOAAAOAFQAPAFALAKQAMAKAHAOQAIAPAAASQAAATgIAPQgHAPgMAKQgLAKgPAEQgOAFgOAAgAgyA/IAfAAQASABAMgGQANgFAIgJQAJgJAEgLQAEgLAAgNQAAgLgEgLQgEgLgJgKQgIgIgNgGQgMgFgSgBIgfAAg");
	this.shape_428.setTransform(204.6,48);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#111111").s().p("AA5BOIgRgpIhPAAIgRApIgTAAIBFibIANAAIBFCbgAghAXIBCAAIghhRg");
	this.shape_429.setTransform(188.5,48);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#111111").s().p("AhCBOIAAibIA0AAQAOAAAOAFQAPAFALAKQAMAKAHAOQAIAPAAASQAAATgIAPQgHAPgMAKQgLAKgPAEQgOAFgOAAgAgyA/IAfAAQASABAMgGQANgFAIgJQAJgJAEgLQAEgLAAgNQAAgLgEgLQgEgLgJgKQgIgIgNgGQgMgFgSgBIgfAAg");
	this.shape_430.setTransform(173.2,48);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#111111").s().p("AAhBOIgqhIIgaAAIAABIIgQAAIAAibIAwAAQAXAAANALQAOAKAAAVQAAAQgKALQgKALgUABIAtBKgAgjgIIAcAAQAJAAAIgCQAHgDAFgDQAEgDACgGQACgFAAgFQAAgGgCgFQgCgFgEgEQgFgDgHgCQgIgCgJgBIgcAAg");
	this.shape_431.setTransform(158.9,48);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#111111").s().p("AgxBOIAAibIBgAAIAAAOIhQAAIAAA2IBLAAIAAAOIhLAAIAAA6IBTAAIAAAPg");
	this.shape_432.setTransform(145.6,48);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#111111").s().p("AgIBOIg7ibIASAAIAxCDIAAAAIAziDIARAAIg9Cbg");
	this.shape_433.setTransform(131.8,48);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#111111").s().p("AgiBTQgQgHgMgMQgMgMgHgQQgGgQgBgUQABgSAGgQQAHgRAMgMQAMgMAQgHQAQgGASAAQATAAAQAGQAQAHANAMQALAMAHARQAHAQAAASQAAAUgHAQQgHAQgLAMQgNAMgQAHQgQAGgTABQgSgBgQgGgAgchDQgNAHgJAKQgJAKgFANQgFANAAAOQAAAOAFAOQAFAOAJAJQAJALANAFQANAHAPAAQARAAAMgHQANgFAKgLQAIgJAFgOQAFgOAAgOQAAgOgFgNQgFgNgIgKQgKgKgNgHQgMgFgRgBQgPABgNAFg");
	this.shape_434.setTransform(190.2,-96.2);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#111111").s().p("AgeBUQgOgHgKgNIAQgLQAFAJAKAGQAKAFANABQAGAAAGgCQAHgDAFgDQAFgEAEgGQADgGAAgIQAAgIgEgGQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgFQgGgGgDgIQgEgIAAgLQAAgNAFgIQAEgKAIgGQAIgFAKgEQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVgBQgGABgGACQgHABgFAEQgFAEgDAFQgDAGAAAJQAAALAGAGQAHAHAJADIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAGgKAEQgKAEgJAAQgQgBgOgFg");
	this.shape_435.setTransform(173.5,-96.2);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#111111").s().p("AgvBVIAAipIARAAIAACZIBOAAIAAAQg");
	this.shape_436.setTransform(162,-96.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#111111").s().p("AA+BVIgTgtIhVAAIgTAtIgUAAIBKipIAPAAIBKCpgAgkAYIBJAAIglhYg");
	this.shape_437.setTransform(146.6,-96.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#111111").s().p("AgyBVIAAipIBlAAIAAAQIhUAAIAAA6IBOAAIAAAOIhOAAIAABRg");
	this.shape_438.setTransform(132.5,-96.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425}]}).to({state:[{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425}]},1).to({state:[{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425}]},1).to({state:[{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425}]},1).to({state:[{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425}]},1).wait(1));

	// Buttons
	this.btn_r3 = new lib.Símbolo3();
	this.btn_r3.parent = this;
	this.btn_r3.setTransform(474.2,86.3,0.012,0.056,0,0,180);
	this.btn_r3.alpha = 0.012;

	this.btn_r2 = new lib.Símbolo3();
	this.btn_r2.parent = this;
	this.btn_r2.setTransform(463.9,-17.8,0.037,0.17);
	this.btn_r2.alpha = 0.012;

	this.btn_r1 = new lib.Símbolo3();
	this.btn_r1.parent = this;
	this.btn_r1.setTransform(259.7,48.7);

	this.btn_r0 = new lib.Símbolo3();
	this.btn_r0.parent = this;
	this.btn_r0.setTransform(259.8,-97.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_r0},{t:this.btn_r1},{t:this.btn_r2},{t:this.btn_r3}]}).wait(5));

	// Instrucciones
	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#111111").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_439.setTransform(-345.6,247.8);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#111111").s().p("AAeBHIgmhCIgYAAIAABCIgOAAIAAiNIAsAAQAUAAANAKQAMAJAAATQAAAPgJAKQgJAJgSACIAoBDgAgggHIAZAAQAJAAAHgCQAGgCAEgEQAFgDABgEQACgFAAgFQAAgFgCgFQgBgEgFgDQgEgEgGgCQgHgCgJAAIgZAAg");
	this.shape_440.setTransform(-353.5,241.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#111111").s().p("AA0BHIgQglIhHAAIgQAlIgQAAIA9iNIANAAIA+CNgAgdAUIA8AAIgfhJg");
	this.shape_441.setTransform(-367,241.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#111111").s().p("Ag8BHIAAiNIAvAAQANAAANAFQANAEALAJQALAJAGANQAHANAAARQAAASgHANQgGANgLAJQgLAJgNAEQgNAFgNAAgAgtA6IAcAAQAQAAALgFQAMgFAIgIQAIgIADgLQAEgKAAgLQAAgKgEgKQgDgLgIgIQgIgIgMgFQgLgFgQAAIgcAAg");
	this.shape_442.setTransform(-380.9,241.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#111111").s().p("AgGBHIAAiNIANAAIAACNg");
	this.shape_443.setTransform(-391.3,241.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#111111").s().p("AgnBHIAAiNIAOAAIAACAIBBAAIAAANg");
	this.shape_444.setTransform(-398,241.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#111111").s().p("AA0BHIgQglIhHAAIgQAlIgRAAIA+iNIANAAIA+CNgAgdAUIA7AAIgehJg");
	this.shape_445.setTransform(-410.8,241.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#111111").s().p("AgHBHIg2iNIAQAAIAtB3IAAAAIAuh3IAQAAIg4CNg");
	this.shape_446.setTransform(-423.7,241.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#111111").s().p("AAbAwIAAgzQABgPgGgIQgGgJgOAAIgFABQgEAAgFAEQgFAEgEAHQgEAHgBAMIAAAwIgNAAIAAhIIAAgJIAAgLIANAAIAAAHIAAAHIABAAIAFgHQAEgDAEgCIAJgEIAIgBQASAAAJAJQAJAKAAARIAAA7g");
	this.shape_447.setTransform(-441.1,244);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_448.setTransform(-452,244.1);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgGADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAGADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgKAAgJgDg");
	this.shape_449.setTransform(-467.6,244.1);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#111111").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDgBgEQABgFADgCQADgCACgBQADABADACQADACABAFQgBAEgDADQgDADgDgBQgCABgDgDg");
	this.shape_450.setTransform(-475.2,241.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#111111").s().p("AgGBLIAAiVIANAAIAACVg");
	this.shape_451.setTransform(-480,241.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_452.setTransform(-486.9,244.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#111111").s().p("AglAvIAAgKIA2hHIgzAAIAAgMIBGAAIAAAKIg1BHIA3AAIAAAMg");
	this.shape_453.setTransform(-150.5,220.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_454.setTransform(-160.3,220.6);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#111111").s().p("AAbBLIAAgzQAAgQgFgIQgGgHgPgBIgEABQgEABgGAEQgFACgEAIQgEAHAAANIAAAvIgNAAIAAiVIANAAIAABIIAAAAIAGgHQAEgEAEgCIAJgDIAIgBQASAAAJAJQAIAKAAAQIAAA7g");
	this.shape_455.setTransform(-170.8,217.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#111111").s().p("AgkBHIgGgCIABgMQAFACAFAAQAHAAAEgFQAEgEADgIIAHgSIgmheIAQAAIAdBNIAchNIARAAIgvB1QgDALgIAGQgFAHgNAAIgGAAg");
	this.shape_456.setTransform(-186.6,223);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_457.setTransform(-202.5,220.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_458.setTransform(-210.8,219.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_459.setTransform(-218.6,220.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_460.setTransform(-229.3,220.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#111111").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_461.setTransform(-237.3,220.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#111111").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_462.setTransform(-244,220.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_463.setTransform(-254,220.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgDgFgGgEQgGgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAGgDQAGgEADgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_464.setTransform(-264.4,220.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_465.setTransform(-280.6,220.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_466.setTransform(-288.9,219.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_467.setTransform(-296.4,220.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_468.setTransform(-306.2,220.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#111111").s().p("AgfAnQgJgKAAgRIAAg7IAOAAIAAAzQgBAHACAGQABAHADADQADAEAEADQAGACAHAAIAEgBQAGgBAEgDQAGgEADgHQAFgIAAgMIAAgvIAMAAIAABIIABAJIAAALIgNAAIAAgHIAAgHIgBAAQgCADgEADIgHAGIgJADQgEACgFAAQgSAAgIgJg");
	this.shape_469.setTransform(-317.4,220.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#111111").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_470.setTransform(-328.7,223.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_471.setTransform(-339.3,220.6);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_472.setTransform(-349.1,220.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#111111").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_473.setTransform(-357.2,220.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_474.setTransform(-372.4,220.6);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#111111").s().p("AgFBLIAAiVIALAAIAACVg");
	this.shape_475.setTransform(-379.7,217.8);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_476.setTransform(-393.1,220.6);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#111111").s().p("AAbAwIAAgzQABgQgGgIQgGgIgOAAIgFABQgEAAgFAEQgFAEgEAHQgEAHgBAMIAAAwIgNAAIAAhIIAAgJIAAgMIANAAIAAAIIAAAHIABAAIAFgHQAEgDAEgCIAJgEIAIgBQASAAAJAJQAJAKAAARIAAA7g");
	this.shape_477.setTransform(-403.7,220.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_478.setTransform(-415,220.6);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#111111").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDAAgEQAAgEADgDQACgDADABQADgBADADQAEADAAAEQAAAEgEADQgDACgDABQgDgBgCgCg");
	this.shape_479.setTransform(-423.3,218.4);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAKAAAIAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgIAEgKAAQgKAAgKgDg");
	this.shape_480.setTransform(-430.2,220.6);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_481.setTransform(-439.9,220.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_482.setTransform(-450.6,220.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#111111").s().p("AgFBLIAAiVIALAAIAACVg");
	this.shape_483.setTransform(-458.5,217.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAGgGQAGgHAIgEQAKgDAIAAQALAAAIAEQAJADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAFAEAFADQAGACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_484.setTransform(-466.5,220.6);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#111111").s().p("AgZBFQgMgEgHgMIAMgJQAFAIAIAEQAJAFAKAAIAKgBQAGgCAEgEQAEgDADgFQADgEAAgHQAAgHgDgFQgDgFgFgDIgMgGIgMgEIgNgFQgHgCgFgEQgGgEgDgHQgDgGAAgKQAAgKAFgIQAEgIAGgFQAHgFAHgCQAJgCAHAAQAMAAAKADQAKAEAJAKIgOAKQgIgOgTAAQgFAAgFABQgFACgEADQgEADgDAFQgDAFAAAGQAAAKAFAFQAGAGAIADIARAGQAJADAIADQAIAFAFAHQAGAIAAAMQAAAKgFAIQgDAHgIAGQgGAFgIADQgJACgHAAQgNAAgMgFg");
	this.shape_485.setTransform(-477.6,218.2);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#111111").s().p("AAAALIgRAZIgKgIIASgYIgcgHIAEgMIAcAJIAAgdIALAAIAAAdIAcgJIAEAMIgcAHIASAYIgJAIg");
	this.shape_486.setTransform(-487.6,214.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439}]}).wait(5));

	// Fondo
	this.instance = new lib.Mapadebits2();
	this.instance.parent = this;
	this.instance.setTransform(-516,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517.2,-296,1044.9,600.9);


// stage content:
(lib.pag24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var mc = this;
		var totalRadioButtons = 4;
		var answerSelect;
		var arrCorrect = [0, 0, 1, 0, 1];
		var actQuestion = 0;
		var goodAnswers = 0;
		var totalQuestions = 4;
		var actFrame = 0;
		
		ini();
		
		function ini() {
			mc.mc_content.btn_send.alpha = 0;
			mc.mc_content.mc_badFeedback.alpha = 0;
			mc.mc_content.mc_goodFeedback.alpha = 0;
		
			controlRadioButtons();
		
			mc.mc_content.mc_feedback.btn_start.addEventListener("mousedown", startQuiz);
			mc.mc_content.btn_send.addEventListener("mousedown", watchFeedback);
			mc.mc_content.mc_badFeedback.btn_next.addEventListener("mousedown", nextQuestion);
			mc.mc_content.mc_goodFeedback.btn_next.addEventListener("mousedown", nextQuestion);
		}
		
		function startQuiz(evt) {
			createjs.Tween.get(mc.mc_content.mc_feedback).to({
				alpha: 0
			}, 200);
		}
		
		
		function controlRadioButtons() {
			for (var i = 0; i < totalRadioButtons; i++) {
		
				mc.mc_content["btn_r" + i].num = i;
				mc.mc_content["btn_r" + i].cursor = "pointer";
				mc.mc_content["btn_r" + i].gotoAndStop(0);
				mc.mc_content["btn_r" + i].addEventListener("mousedown", clickAnswer);
		
			}
		}
		
		function resetRadioButtons() {
			for (var i = 0; i < totalRadioButtons; i++) {
				mc.mc_content["btn_r" + i].gotoAndStop(0);
			}
		}
		
		function desactivateRadioButtons() {
			for (var i = 0; i < totalRadioButtons; i++) {
				mc.mc_content["btn_r" + i].mouseEnabled = false;
			}
		}
		
		function activateRadioButtons() {
			for (var i = 0; i < totalRadioButtons; i++) {
				mc.mc_content["btn_r" + i].mouseEnabled = true;
			}
		}
		
		function activateSendButton() {
			createjs.Tween.get(mc.mc_content.btn_send).to({
				alpha: 1
			}, 500);
			mc.mc_content.btn_send.mouseEnabled = true;
		}
		
		function clickAnswer(evt) {
			var num = evt.currentTarget.num;
			answerSelect = num;
		
			resetRadioButtons();
		
			evt.currentTarget.gotoAndStop(1);
		
			activateSendButton();
		}
		
		function watchFeedback(evt) {
			desactivateRadioButtons();
			
			mc.mc_content.btn_send.alpha = 0;
			mc.mc_content.btn_send.mouseEnabled = false;
		
			if (answerSelect === arrCorrect[actQuestion]) {
				goodAnswers++;
				mc.mc_content.mc_goodFeedback.gotoAndStop(actQuestion);
				createjs.Tween.get(mc.mc_content.mc_goodFeedback).to({
					alpha: 1
				}, 200);
		
			} else {
				mc.mc_content.mc_badFeedback.gotoAndStop(actQuestion);
				createjs.Tween.get(mc.mc_content.mc_badFeedback).to({
					alpha: 1
				}, 200);
			}
		}
		
		function nextQuestion(evt) {
			actFrame++
			actQuestion++
			
			resetRadioButtons();
			activateRadioButtons();
			
			mc.mc_content.btn_send.alpha = 0;
		
			mc.mc_content.mc_badFeedback.alpha = 0;
			mc.mc_content.mc_goodFeedback.alpha = 0;
		
			mc.mc_content.gotoAndStop(actQuestion);
			mc.mc_content.mc_cont.gotoAndStop(actQuestion);
		
			if (actFrame === totalQuestions) {
				mc.mc_content.mc_goodFeedback.btn_next.removeEventListener("mousedown", nextQuestion);
				mc.mc_content.mc_badFeedback.btn_next.removeEventListener("mousedown", nextQuestion);
				mc.mc_content.mc_goodFeedback.btn_next.addEventListener("mousedown", watchScore);
				mc.mc_content.mc_badFeedback.btn_next.addEventListener("mousedown", watchScore);
			}
		}
		
		function watchScore(evt) {
			mc.mc_content.mc_badFeedback.alpha = 0;
			mc.mc_content.mc_goodFeedback.alpha = 0;
		
			if (goodAnswers >= 4) {
				mc.mc_content.mc_feedback.gotoAndStop(1);
			} else {
				mc.mc_content.mc_feedback.gotoAndStop(2);
			}
			createjs.Tween.get(mc.mc_content.mc_feedback).to({
				alpha: 1
			}, 500);
		
			mc.mc_content.mc_feedback.mc_score.gotoAndStop(goodAnswers);
			mc.mc_content.mc_goodFeedback.btn_next.removeEventListener("mousedown", watchScore);
			mc.mc_content.mc_badFeedback.btn_next.removeEventListener("mousedown", watchScore);
		
			mc.mc_content.mc_feedback.btn_next.addEventListener("mousedown", finish);
			mc.mc_content.mc_feedback.btn_retry.addEventListener("mousedown", retry);
		}
		
		function retry(evt) {
			actFrame = 0;
			actQuestion = 0;
			goodAnswers = 0;
			
			resetRadioButtons();
			activateRadioButtons();
			
			mc.mc_content.btn_send.alpha = 0;
			
			createjs.Tween.get(mc.mc_content.mc_feedback).to({
				alpha: 0
			}, 200);
			
			mc.mc_content.mc_feedback.mc_score.gotoAndStop(goodAnswers);
			mc.mc_content.gotoAndStop(actQuestion);
			mc.mc_content.mc_cont.gotoAndStop(actQuestion);
			mc.mc_content.mc_feedback.btn_next.removeEventListener("mousedown", finish);
			mc.mc_content.mc_goodFeedback.btn_next.addEventListener("mousedown", nextQuestion);
			mc.mc_content.mc_badFeedback.btn_next.addEventListener("mousedown", nextQuestion);
		}
		
		function finish(evt) {
			mc.mc_content.mc_feedback.btn_next.removeEventListener("mousedown", finish);
			salirPrincipal(true);
			finTema(true, estructura.actTemaNosotros);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Capa 2
	this.mc_content = new lib.Símbolo1();
	this.mc_content.parent = this;
	this.mc_content.setTransform(763.1,423.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_content).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(885.9,487.5,1044.9,600.9);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/pag24_atlas_.png", id:"pag24_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;