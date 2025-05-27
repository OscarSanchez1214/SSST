(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"pag16_atlas_", frames: [[1375,551,289,286],[1824,0,214,239],[1114,387,259,376],[1415,0,407,549],[1666,816,314,230],[1982,339,60,60],[1361,839,246,172],[1982,401,60,60],[948,689,148,47],[0,0,569,593],[1824,290,172,47],[0,595,541,251],[301,848,172,47],[571,387,541,251],[850,640,96,96],[1824,241,172,47],[850,765,282,200],[571,0,842,385],[1666,551,304,263],[301,942,519,100],[948,640,148,47],[543,640,305,300],[0,848,299,293],[1134,765,225,243]]}
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



(lib.Image = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits1 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits19 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits20 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits21 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits22 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits23 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits24 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits25 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits26 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits27 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits28 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits29 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits30 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits31 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits7 = function() {
	this.spriteSheet = ss["pag16_atlas_"];
	this.gotoAndStop(23);
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


(lib.Símbolo29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAJQgIAKgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(47.4,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBAIgMgfIg8AAIgOAfIgUAAIA5iAIAPAAIA3CAgAgYARIAwAAIgYg6IAAAAg");
	this.shape_1.setTransform(33,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBAIAAgPIBIhgIhGAAIAAgRIBcAAIAAARIhIBfIBJAAIAAAQg");
	this.shape_2.setTransform(19.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_3.setTransform(9.7,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBAIAAiAIARAAIAABwIA6AAIAAAQg");
	this.shape_4.setTransform(1.4,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsBAIgOgfIg8AAIgNAfIgUAAIA5iAIAPAAIA3CAgAgYARIAwAAIgXg6IgBAAg");
	this.shape_5.setTransform(-12.3,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBAIhHhoIAAAAIAABoIgSAAIAAiAIAXAAIBGBqIAAAAIAAhqIASAAIAACAg");
	this.shape_6.setTransform(-27.7,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_7.setTransform(-39.3,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBAIAAiAIBQAAIAAARIg+AAIAAAoIA6AAIAAAQIg6AAIAAA3g");
	this.shape_8.setTransform(-48.4,-0.3);

	this.instance = new lib.Mapadebits28();
	this.instance.parent = this;
	this.instance.setTransform(-86,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo29, new cjs.Rectangle(-86,-23.5,172,47), null);


(lib.Símbolo27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAJQgIAKgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(56,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBAIgMgfIg8AAIgOAfIgUAAIA5iAIAPAAIA3CAgAgYARIAwAAIgYg6IAAAAg");
	this.shape_1.setTransform(41.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAzQgOgOAAgVIAAhRIARAAIAABOQAAAGADAGQABAGADAGQAEAGAGADQAHAEAIAAQAJAAAGgEQAHgDAEgGQADgFABgGQACgGABgHIAAhOIARAAIAABRQAAAUgOAPQgOAPgWAAQgVAAgOgPg");
	this.shape_2.setTransform(27,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBAIhGhoIAAAAIAABoIgSAAIAAiAIAXAAIBGBqIABAAIAAhqIARAAIAACAg");
	this.shape_3.setTransform(11.5,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_4.setTransform(-0.1,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBAIAAhvIgpAAIAAgRIBjAAIAAARIgpAAIAABvg");
	this.shape_5.setTransform(-9.6,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBAIhHhoIAAAAIAABoIgSAAIAAiAIAXAAIBGBqIAAAAIAAhqIASAAIAACAg");
	this.shape_6.setTransform(-23.9,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape_7.setTransform(-40.5,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgFgMABgMQAAgdASgTQATgUAcAAQAOAAAMAFQAMAGAIAJIgOALQgNgPgTAAQgUAAgOAPQgNAPAAAWQAAAVANAPQANAOAVAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_8.setTransform(-56.1,-0.3);

	this.instance = new lib.Mapadebits25();
	this.instance.parent = this;
	this.instance.setTransform(-86,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo27, new cjs.Rectangle(-86,-23.5,172,47), null);


(lib.Símbolo25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAJQgIAKgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(58.4,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBAIgOgfIg8AAIgNAfIgUAAIA5iAIAPAAIA3CAgAgYARIAwAAIgXg6IgBAAg");
	this.shape_1.setTransform(44,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBAIAAhvIgpAAIAAgRIBjAAIAAARIgpAAIAABvg");
	this.shape_2.setTransform(30.5,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBAIhHhoIAAAAIAABoIgSAAIAAiAIAXAAIBGBqIAAAAIAAhqIASAAIAACAg");
	this.shape_3.setTransform(16.3,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqBAIAAiAIBSAAIAAARIhBAAIAAAmIA8AAIAAAQIg8AAIAAApIBEAAIAAAQg");
	this.shape_4.setTransform(2.1,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBAIAAhvIgpAAIAAgRIBjAAIAAARIgpAAIAABvg");
	this.shape_5.setTransform(-10.9,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhBAIhGhoIgBAAIAABoIgRAAIAAiAIAXAAIBGBqIABAAIAAhqIARAAIAACAg");
	this.shape_6.setTransform(-25.2,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_7.setTransform(-36.8,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqBAIAAiAIBSAAIAAARIhBAAIAAAmIA8AAIAAAQIg8AAIAAApIBEAAIAAAQg");
	this.shape_8.setTransform(-46.2,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAJQgIAKgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape_9.setTransform(-58.9,-0.3);

	this.instance = new lib.Mapadebits23();
	this.instance.parent = this;
	this.instance.setTransform(-86,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo25, new cjs.Rectangle(-86,-23.5,172,47), null);


(lib.Símbolo23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAJQgIAKgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(37.7,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBAIgOgfIg8AAIgNAfIgUAAIA5iAIAPAAIA3CAgAgYARIAwAAIgXg6IgBAAg");
	this.shape_1.setTransform(23.3,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BAIAAiAIAuAAQAQABAOAFQAMAGAIAJQAJAJADAMQAFALAAALQgBAcgTASQgUASgdAAgAgmAwIAXAAQAKAAAIgDQAJgDAIgFQAIgGAFgJQAFgKAAgMQAAgTgNgOQgNgOgXAAIgbAAg");
	this.shape_2.setTransform(8.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_3.setTransform(-2.8,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBAIAAiAIARAAIAABwIA6AAIAAAQg");
	this.shape_4.setTransform(-11.1,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBAIgMgfIg9AAIgMAfIgVAAIA5iAIAPAAIA3CAgAgXARIAvAAIgXg6IgBAAg");
	this.shape_5.setTransform(-24.7,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBAIgxiAIAUAAIAlBpIAAAAIAnhpIAUAAIgzCAg");
	this.shape_6.setTransform(-38.6,-0.3);

	this.instance = new lib.Mapadebits21();
	this.instance.parent = this;
	this.instance.setTransform(-74,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo23, new cjs.Rectangle(-74,-23.5,148,47), null);


(lib.Símbolo21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AB1A5Ih1hxIh0Bx");
	this.shape.setTransform(0,-2);

	this.instance = new lib.Mapadebits20();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo21, new cjs.Rectangle(-30,-30,60,60), null);


(lib.Símbolo20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ah0g4IB0BxIB1hx");
	this.shape.setTransform(0,2);

	this.instance = new lib.Mapadebits19();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo20, new cjs.Rectangle(-30,-30,60,60), null);


(lib.Símbolo17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("signal10");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape.setTransform(183.8,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAFgDAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_1.setTransform(177.5,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_2.setTransform(165.4,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgDgDgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAJgBIAIgEIAAAPQgJAEgMAAIgJgBg");
	this.shape_3.setTransform(154.3,21.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_4.setTransform(143.4,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_5.setTransform(134.1,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AAGBIQgFgBgDgDQgEgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAPQgJAEgMAAIgJgBg");
	this.shape_6.setTransform(127.3,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AAkA4IgkgxIglAxIgUAAIAvg7Igpg0IAVAAIAeAqIAegqIAUAAIgnA0IAvA7g");
	this.shape_7.setTransform(117.5,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_8.setTransform(105,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_9.setTransform(84.8,23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIAAANIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_10.setTransform(71.6,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQACgFADgEQADgEAFgEQADgCAGgCQAGgDAHAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_11.setTransform(55.4,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_12.setTransform(43.7,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgFgEgEgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAEgGAFgEIALgHQAGgDAHgBIAKgBQANAAAMAFQAKAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgDAIAAAJQAAAJADAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_13.setTransform(30.1,20);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_14.setTransform(15.9,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AAgBbIAAg+QAAgTgGgKQgHgJgRAAIgGABQgGABgFAEQgGAEgGAIQgEAJAAAPIAAA6IgQAAIAAi1IAQAAIAABXIAAAAIAHgIIAJgHIALgEIAKgBQAVAAALALQAKALAAAVIAABHg");
	this.shape_15.setTransform(3.2,19.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgXBUQgGgCgGgEQgFgEgDgGQgEgHAAgHQAAgOAHgIQAHgIALgEQALgDALgBIAWgCIAIAAIAAgDQAAgbgdAAQgSAAgPANIgKgMQAQgQAfAAQAIAAAIADQAHACAGAFQAFAFADAIQAEAHAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHAMgKAFQgJAEgNAAQgIAAgHgCgAAHAcIgQADQgJACgGAFQgGAFAAAJQAAAFADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgCAFgFQAEgGACgGQACgHAAgHIAAgIIgIAAIgPAAgAgKgzIAXgjIAVAAIgfAjg");
	this.shape_16.setTransform(-16.6,20.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAFgDAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_17.setTransform(-25.4,23.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_18.setTransform(-37.1,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgLBbIgMgEIgKgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIAKgHQAGgDAGgBIALgBQAOAAAKAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_19.setTransform(-50.7,20);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_20.setTransform(-65.1,23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_21.setTransform(-79.5,20);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_22.setTransform(-96.4,29.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_23.setTransform(-102.6,19.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_24.setTransform(-112,23.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AAhBSIAAg+QAAgTgGgJQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAIAAAPIAAA6IgPAAIAAhWIgBgMIgBgOIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABHgAgkg4IACgJIAFgIQACgDAEgCQAEgCAFAAQAFAAAEACIAIADIAIAEQAEACAEAAQAFAAADgEIAEgIIAKAAIgCAJIgEAIQgDAEgEACQgEACgFAAQgEAAgFgCIgJgDIgHgFIgIgBQgFAAgDADIgEAIg");
	this.shape_25.setTransform(-124.8,20.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_26.setTransform(-138,23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgDQgFgCgDgGQgEgGABgHQgBgJAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_27.setTransform(-149.7,23.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_28.setTransform(150.8,-5.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgDgCgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_29.setTransform(141,-6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgOgEIgIgCQgFgCgFgDQgFgCgDgGQgEgGABgHQgBgJAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgEgGgGgEQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGAEQAFADALADIAQAEQALACAIAIQAJAHAAAMQAAAKgFAGQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_30.setTransform(131.9,-5.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_31.setTransform(120.1,-5.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgXBUQgGgCgGgEQgFgEgDgGQgEgHAAgHQAAgOAHgIQAHgIALgEQALgDALgBIAWgCIAIAAIAAgDQAAgbgdAAQgSAAgPANIgKgMQAQgQAfAAQAIAAAIADQAHACAGAFQAFAFADAIQAEAHAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHAMgKAFQgJAEgNAAQgIAAgHgCgAAHAcIgQADQgJACgGAFQgGAFAAAJQAAAFADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgCAFgFQAEgGACgGQACgHAAgHIAAgIIgIAAIgPAAgAgKgzIAXgjIAVAAIgfAjg");
	this.shape_32.setTransform(100.2,-8.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AAGBIQgFgBgDgDQgEgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_33.setTransform(90.4,-6.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGAEQAFADALADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_34.setTransform(81.3,-5.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_35.setTransform(69.5,-5.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_36.setTransform(49.5,-5.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIAAANIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_37.setTransform(36.1,-5.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AAsBcIAAhXIAAAAQgFAFgFAEIgKAHIgNAEIgLABQgMAAgMgFQgKgEgIgIQgIgIgFgKQgEgLAAgMQAAgNAEgKQAFgMAIgHQAIgIAKgFQAMgEAMAAIALABQAGABAHADIAKAGQAFAEAFAGIAAAAIAAgTIAQAAIAAC1gAgRhJQgHADgGAGQgFAGgDAIQgDAIgBAKQABAJADAIQADAIAFAHQAGAEAHAEQAIAEAJgBQAJABAJgEQAIgEAGgEQAGgHAEgIQADgIAAgJQAAgKgDgIQgEgIgGgGQgGgGgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_38.setTransform(21.8,-2.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_39.setTransform(5.3,-9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_40.setTransform(-4.3,-5.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_41.setTransform(-24.5,-5.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_42.setTransform(-37.6,-5.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_43.setTransform(-58.1,-5.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_44.setTransform(-68.1,-8.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AAGBIQgFgBgDgDQgEgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_45.setTransform(-74.9,-6.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_46.setTransform(-81.8,-8.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGAEQAFADALADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_47.setTransform(-89.7,-5.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_48.setTransform(-104.4,-9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_49.setTransform(-113.9,-5.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_50.setTransform(-134.1,-5.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAPIhRAAIAABAIBaAAIAAAQg");
	this.shape_51.setTransform(-147.1,-8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Estado
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#980D19").s().p("AgZBbIAAiNIAeAAIAACNgAgeg8IAVgdIAoAAIgiAdg");
	this.shape_52.setTransform(-197.1,10.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#980D19").s().p("AggBBQgNgHgHgNQgHgOAAgQIAAhXIAfAAIAABVQABAJADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQAEgHAAgJIAAhVIAfAAIAABXQAAAQgHAOQgHANgNAHQgNAIgUAAQgTAAgNgIg");
	this.shape_53.setTransform(-208.5,13);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#980D19").s().p("AgDBJQgXAAgSgJQgRgJgKgQQgJgQgBgXQABgVAJgQQALgQARgKQARgJAVAAQAVAAAQAKQARAJAKAQQALAQAAAVQAAAKgDAJQgDAKgGAHQgHAIgKAEIAAABIAoAAIAAAYgAgbglQgJAGgGAKQgGAKAAALQAAAMAGAKQAGAKAJAGQAKAGAMAAQALAAAKgGQAJgGAHgKQAFgKABgMQgBgLgFgKQgHgKgJgGQgKgGgLAAQgMAAgKAGg");
	this.shape_54.setTransform(-224.2,12.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#980D19").s().p("AAnBHIgMgeIg2AAIgMAeIgiAAIA8iNIAZAAIA+CNgAAQAPIgQgsIgRAsIAhAAg");
	this.shape_55.setTransform(-240.4,12.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#980D19").s().p("AgYAkIAAhHIAvAAIAAAPIggAAIAAANIAfAAIAAANIgfAAIAAAPIAiAAIAAAPg");
	this.shape_56.setTransform(-198.1,-5.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_57.setTransform(-204.4,-5.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#980D19").s().p("AgHAkIAAg5IgUAAIAAgOIA3AAIAAAOIgUAAIAAA5g");
	this.shape_58.setTransform(-211,-5.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#980D19").s().p("AgOAjQgGgCgFgEIALgNQADADADACQAEACAEAAIAEgBIAFgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgEgBIgHgDIgIgDQgEgBgCgEQgDgEAAgGQAAgHAEgFQAEgGAHgCQAFgDAGAAQAHAAAGACQAFACAFAEIgLALIgGgDIgGgBIgDAAIgFADQAAAAAAABQgBAAAAABQAAAAAAABQAAABgBAAQABADACACIAFADIAIACIAIAEQAEABADAEQABAEABAGQgBAIgDAFQgEAFgGADQgHADgGAAQgHAAgGgDg");
	this.shape_59.setTransform(-216.9,-5.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_60.setTransform(-223.5,-5.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_61.setTransform(-230.2,-5.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_62.setTransform(-236.8,-5.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_63.setTransform(-244.2,-5.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D7D7D7").s().p("AkpFTQgQAAgMgMQgMgNAAgQIAApTQAAgQAMgNQAMgMAQABIJTAAQARgBALAMQAMANAAAQIAAJTQAAAQgMANQgLAMgRAAg");
	this.shape_64.setTransform(-220.2,5.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#980D19").ss(2,1,1).p("Ah8B9IDCAAQAXAAAQgQQAQgQAAgXIAAjC");
	this.shape_65.setTransform(-194,31.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAXAAIDCAA");
	this.shape_66.setTransform(-246.3,31.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#980D19").ss(2,1,1).p("AB9B9IAAjCQAAgXgQgQQgQgQgXAAIjCAA");
	this.shape_67.setTransform(-194,-21);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjCAAQgXAAgQAQQgQAQAAAXIAADC");
	this.shape_68.setTransform(-246.3,-21);

	this.instance = new lib.Mapadebits31();
	this.instance.parent = this;
	this.instance.setTransform(-267,-45);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#980D19").ss(4,1,1).p("AhVAPIAvAwIB8h9");
	this.shape_69.setTransform(-218.6,8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CBAA0E").s().p("AkpFSQgQAAgNgMQgMgLABgRIAApSQgBgSAMgMQANgLAQgBIJTAAQARABAMALQAMAMgBASIAAJSQABARgMALQgMAMgRAAg");
	this.shape_70.setTransform(-220.2,5.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAWAAIDDAA");
	this.shape_71.setTransform(-246.3,31.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjDAAQgWAAgQAQQgQAQAAAXIAADC");
	this.shape_72.setTransform(-246.3,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]}).to({state:[{t:this.instance},{t:this.shape_72},{t:this.shape_67},{t:this.shape_71},{t:this.shape_65},{t:this.shape_70},{t:this.shape_69}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-45,519,100);


(lib.Símbolo16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("signal9");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(123.3,35.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_1.setTransform(112.8,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_2.setTransform(102.8,31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_3.setTransform(93.8,29.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_4.setTransform(84.8,31.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_5.setTransform(72.5,31.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_6.setTransform(62.4,31);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_7.setTransform(47.9,27.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHADAIgBQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_8.setTransform(38.3,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_9.setTransform(18.1,31);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHADAIgBQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_10.setTransform(5,31.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAIgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_11.setTransform(-13.4,31.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_12.setTransform(-25.7,31.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgLgEgIgHQgHgIgFgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_13.setTransform(-40.4,33.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_14.setTransform(-52.5,31.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHADAIgBQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_15.setTransform(-64.3,31.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_16.setTransform(-73.9,28.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_17.setTransform(-79.7,31);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_18.setTransform(-94.3,31);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIABAGgDQAGgDAFgFQAEgFACgGQACgHAAgHIAAgJIgIAAIgPAAg");
	this.shape_19.setTransform(-105.8,31.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_20.setTransform(-119.4,33.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_21.setTransform(-129.3,28.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AAGBIQgFgBgDgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_22.setTransform(-136.1,29.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_23.setTransform(-143,28.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_24.setTransform(-156.3,31);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_25.setTransform(154.6,7.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgEAEgFQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAPQgDgBgGAAQgJAAgHAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_26.setTransform(145.7,7.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_27.setTransform(134.2,7.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAFgFAEgFIAMgGQAGgDAGgBIAKgBQANAAAMAFQALADAHAJQAIAHAEALQAFALAAANQAAAMgFALQgEAKgIAIQgHAIgLAFQgMAEgNAAIgKgBIgMgEIgMgHQgEgEgFgFIAAAAIAABXgAgRhKQgIAEgGAGQgGAGgDAJQgEAHAAAKQAAAJAEAJQADAIAGAFQAGAFAIAEQAIAEAJAAQAKAAAIgEQAHgEAHgFQAFgFADgIQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_28.setTransform(121.3,10.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_29.setTransform(99.8,7.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_30.setTransform(85,4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_31.setTransform(71.5,7.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AAhBSIAAg+QAAgTgGgJQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAIAAAPIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAKIAAAIIABAAIAHgIIAJgGIAKgFIALgBQAVAAAKALQALAMAAAUIAABHgAgkg4IACgJIAFgHQACgEAEgCQAEgCAFAAQAFAAAEACIAIADIAIAEQAEACAEAAQAFAAADgEIAEgIIAKAAIgCAJIgEAIQgDADgEACQgEADgFAAQgEAAgFgCIgJgDIgHgFIgIgBQgFAAgDAEIgEAHg");
	this.shape_32.setTransform(58.7,4.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_33.setTransform(45.6,7.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgOgEIgHgCQgGgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgOAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQAMACAIAHQAHAIAAAMQAAAJgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_34.setTransform(33.9,7.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_35.setTransform(25.8,4.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_36.setTransform(15.3,4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_37.setTransform(-5.2,7.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_38.setTransform(-18.2,7.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AAgBbIAAg+QAAgTgGgKQgHgJgRAAIgGABQgGABgFAEQgHAEgEAIQgGAJAAAPIAAA6IgPAAIAAi1IAPAAIAABXIABAAIAHgIIAJgHIAKgEIALgBQAVAAALALQAKALAAAVIAABHg");
	this.shape_39.setTransform(-30.9,3.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_40.setTransform(-50.8,7.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAFAJAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgOgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQAMACAHAHQAIAIAAAMQAAAJgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_41.setTransform(-62.5,7.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_42.setTransform(-77.2,3.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_43.setTransform(-86.6,7.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_44.setTransform(-99.4,7.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_45.setTransform(-113,7.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFAEQAFADALADIAQAEQAMACAHAHQAJAIgBAMQAAAJgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_46.setTransform(-125.2,7.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgEAEgFQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAPQgDgBgGAAQgJAAgHAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_47.setTransform(-133.3,7.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_48.setTransform(-145,7.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAFgFAEgFIAMgGQAGgDAFgBIALgBQANAAALAFQAMADAHAJQAIAHAEALQAFALAAANQAAAMgFALQgEAKgIAIQgHAIgMAFQgLAEgNAAIgLgBIgLgEIgMgHQgEgEgFgFIAAAAIAABXgAgRhKQgIAEgGAGQgGAGgDAJQgEAHAAAKQAAAJAEAJQADAIAGAFQAGAFAIAEQAIAEAJAAQAKAAAIgEQAHgEAHgFQAFgFADgIQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_49.setTransform(-158.6,10.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_50.setTransform(158.2,-16.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgMQAAgOAFgKQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFAKAAAOQAAAMgFALQgEALgIAHQgIAJgLAEQgLAFgNgBQgMABgLgFgAgRgNQgIAEgFAFQgGAGgCAIQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgIgFgGQgGgFgIgEQgHgEgKABQgJgBgIAEgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_51.setTransform(144.6,-19.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_52.setTransform(134.6,-19.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_53.setTransform(126.4,-16.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_54.setTransform(114.8,-16.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_55.setTransform(102,-16.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AAFBIQgFgBgDgDQgDgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIADAGQACADAEAAIAHABIAIgBIAHgEIACAQQgJADgNAAIgKgBg");
	this.shape_56.setTransform(91.4,-17.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_57.setTransform(80.2,-16.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgEAGgCQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_58.setTransform(70.2,-16.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAFgFAEgEIAMgHQAFgDAHgBIAKgBQAOAAALAEQALAEAHAIQAIAJAEALQAFAKAAANQAAANgFALQgEAJgIAIQgHAIgLAEQgLAFgOAAIgKgBIgMgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgDAIQgEAJAAAJQAAAJAEAIQADAIAGAHQAGAEAIAEQAIADAJAAQAKAAAIgDQAHgEAHgEQAFgHADgIQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_59.setTransform(58.2,-13.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_60.setTransform(37.2,-16.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_61.setTransform(22.8,-19.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_62.setTransform(4.2,-16.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_63.setTransform(-8.1,-16.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgFgEgCgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_64.setTransform(-19.2,-17.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_65.setTransform(-30.1,-16.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_66.setTransform(-43.2,-16.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_67.setTransform(-60.3,-16.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_68.setTransform(-77,-16.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_69.setTransform(-86.6,-20);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_70.setTransform(-96.1,-16.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgGgDQgFgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_71.setTransform(-114.5,-16.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_72.setTransform(-126.8,-16.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQACADACAAIAHABIAJgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_73.setTransform(-137.8,-17.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgGgDQgFgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_74.setTransform(-146.9,-16.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAOIhRAAIAABBIBaAAIAAAQg");
	this.shape_75.setTransform(-158.6,-19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Estado
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#980D19").s().p("AgZBbIAAiNIAeAAIAACNgAgeg8IAVgdIAoAAIgiAdg");
	this.shape_76.setTransform(-197.1,10.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#980D19").s().p("AggBBQgNgHgHgNQgHgOAAgQIAAhXIAfAAIAABVQABAJADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQAEgHAAgJIAAhVIAfAAIAABXQAAAQgHAOQgHANgNAHQgNAIgUAAQgTAAgNgIg");
	this.shape_77.setTransform(-208.5,13);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#980D19").s().p("AgDBJQgXAAgSgJQgRgJgKgQQgJgQgBgXQABgVAJgQQALgQARgKQARgJAVAAQAVAAAQAKQARAJAKAQQALAQAAAVQAAAKgDAJQgDAKgGAHQgHAIgKAEIAAABIAoAAIAAAYgAgbglQgJAGgGAKQgGAKAAALQAAAMAGAKQAGAKAJAGQAKAGAMAAQALAAAKgGQAJgGAHgKQAFgKABgMQgBgLgFgKQgHgKgJgGQgKgGgLAAQgMAAgKAGg");
	this.shape_78.setTransform(-224.2,12.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#980D19").s().p("AAnBHIgMgeIg2AAIgMAeIgiAAIA8iNIAZAAIA+CNgAAQAPIgQgsIgRAsIAhAAg");
	this.shape_79.setTransform(-240.4,12.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#980D19").s().p("AgYAkIAAhHIAvAAIAAAPIggAAIAAANIAfAAIAAANIgfAAIAAAPIAiAAIAAAPg");
	this.shape_80.setTransform(-198.1,-5.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_81.setTransform(-204.4,-5.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#980D19").s().p("AgHAkIAAg5IgUAAIAAgOIA3AAIAAAOIgUAAIAAA5g");
	this.shape_82.setTransform(-211,-5.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#980D19").s().p("AgOAjQgGgCgFgEIALgNQADADADACQAEACAEAAIAEgBIAFgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgEgBIgHgDIgIgDQgEgBgCgEQgDgEAAgGQAAgHAEgFQAEgGAHgCQAFgDAGAAQAHAAAGACQAFACAFAEIgLALIgGgDIgGgBIgDAAIgFADQAAAAAAABQgBAAAAABQAAAAAAABQAAABgBAAQABADACACIAFADIAIACIAIAEQAEABADAEQABAEABAGQgBAIgDAFQgEAFgGADQgHADgGAAQgHAAgGgDg");
	this.shape_83.setTransform(-216.9,-5.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_84.setTransform(-223.5,-5.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_85.setTransform(-230.2,-5.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_86.setTransform(-236.8,-5.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_87.setTransform(-244.2,-5.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D7D7D7").s().p("AkpFTQgQAAgMgMQgMgNAAgQIAApTQAAgQAMgNQAMgMAQABIJTAAQARgBALAMQAMANAAAQIAAJTQAAAQgMANQgLAMgRAAg");
	this.shape_88.setTransform(-220.2,5.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#980D19").ss(2,1,1).p("Ah8B9IDCAAQAXAAAQgQQAQgQAAgXIAAjC");
	this.shape_89.setTransform(-194,31.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAXAAIDCAA");
	this.shape_90.setTransform(-246.3,31.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#980D19").ss(2,1,1).p("AB9B9IAAjCQAAgXgQgQQgQgQgXAAIjCAA");
	this.shape_91.setTransform(-194,-21);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjCAAQgXAAgQAQQgQAQAAAXIAADC");
	this.shape_92.setTransform(-246.3,-21);

	this.instance = new lib.Mapadebits31();
	this.instance.parent = this;
	this.instance.setTransform(-267,-45);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#980D19").ss(4,1,1).p("AhVAPIAvAwIB8h9");
	this.shape_93.setTransform(-218.6,8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CBAA0E").s().p("AkpFSQgQAAgNgMQgMgLABgRIAApSQgBgSAMgMQANgLAQgBIJTAAQARABAMALQAMAMgBASIAAJSQABARgMALQgMAMgRAAg");
	this.shape_94.setTransform(-220.2,5.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAWAAIDDAA");
	this.shape_95.setTransform(-246.3,31.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjDAAQgWAAgQAQQgQAQAAAXIAADC");
	this.shape_96.setTransform(-246.3,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]}).to({state:[{t:this.instance},{t:this.shape_96},{t:this.shape_91},{t:this.shape_95},{t:this.shape_89},{t:this.shape_94},{t:this.shape_93}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-45,519,100);


(lib.Símbolo15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("signal8");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape.setTransform(8.9,45.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgTAwQgHgCgEgDQgFgEgDgFQgDgFAAgHQAAgLAGgHQAHgFAJgEQAJgDAKgBIATAAIAHAAIAAgDQAAgZgZAAQgQAAgNALIgIgJQAOgNAaAAQAHAAAHACQAHABAFAFQAEAEADAGQADAHAAAIIAAApIABALIABAKIgNAAIgBgHIgBgIIAAAAQgGAJgJAEQgIAFgLAAQgGAAgGgCgAAGAAQgHABgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEACIAHACIAJABQAGAAAGgCQAFgDAEgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgNAAg");
	this.shape_1.setTransform(0.3,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgbBEQgLgFgKgJIAKgLQAHAIAJAFQAKAEAMAAQAKAAAHgDQAHgCAFgFQAEgFACgHQACgHAAgIIAAgQIAAAAQgHAJgKAEQgJAEgLAAQgKAAgJgDQgJgEgHgGQgHgHgEgHQgEgJAAgLQAAgKAEgJQADgIAHgHQAHgHAJgDQAJgEALAAIAIABIAKACQAFACAFAEIAJAJIAAAAIAAgQIAOAAIAABcQAAAIgCAJQgCAIgGAIQgFAHgLAFQgKAEgQAAQgOAAgMgEgAgNg4QgHADgFAFQgEAFgDAGQgDAHAAAHQAAAHADAHQADAGAEAEQAFAFAHADQAHADAGAAQAIAAAHgCQAHgDAFgFQAFgDADgHQADgHAAgIQAAgHgDgHQgCgGgFgFQgFgFgHgDQgHgDgJAAQgGAAgHADg");
	this.shape_2.setTransform(-11.6,44.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgaAwIAAg/IAAgNIgBgRIAOAAIAAASIAAAAIAEgIIAHgGQADgDAFgBQAFgCAHAAQAGAAAEABIgDANIgIgBQgIAAgFADQgFADgEAEQgEAFgCAFIgBAKIAAA0g");
	this.shape_3.setTransform(-20.3,41.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgTAwQgHgCgEgDQgFgEgDgFQgDgFAAgHQAAgLAGgHQAHgFAJgEQAJgDAKgBIATAAIAHAAIAAgDQAAgZgZAAQgQAAgNALIgIgJQAOgNAaAAQAHAAAHACQAHABAFAFQAEAEADAGQADAHAAAIIAAApIABALIABAKIgNAAIgBgHIgBgIIAAAAQgGAJgJAEQgIAFgLAAQgGAAgGgCgAAGAAQgHABgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEACIAHACIAJABQAGAAAGgCQAFgDAEgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgNAAg");
	this.shape_4.setTransform(-30.4,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgNAuQgJgEgHgHQgHgGgEgJQgDgKAAgKQAAgKADgJQAEgJAHgHQAHgGAJgEQAKgEALABQAKAAAKADQAIAEAIAJIgMAIQgDgFgGgEQgHgEgIAAQgIAAgGADQgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAGACAIAAQAIABAHgEQAGgEADgFIAMAIQgIAJgIADQgKAFgKAAQgLAAgKgEg");
	this.shape_5.setTransform(-40.3,42);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgTAwQgHgCgEgDQgFgEgDgFQgDgFAAgHQAAgLAGgHQAHgFAJgEQAJgDAKgBIATAAIAHAAIAAgDQAAgZgZAAQgQAAgNALIgIgJQAOgNAaAAQAHAAAHACQAHABAFAFQAEAEADAGQADAHAAAIIAAApIABALIABAKIgNAAIgBgHIgBgIIAAAAQgGAJgJAEQgIAFgLAAQgGAAgGgCgAAGAAQgHABgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEACIAHACIAJABQAGAAAGgCQAFgDAEgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgNAAg");
	this.shape_6.setTransform(-57.3,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AAdAwIAAgzQAAgPgGgJQgGgIgPAAIgFABQgFAAgFAEQgFAEgFAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAIIAAAHIABAAIAGgHIAIgFIAJgEIAJgBQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_7.setTransform(-68.4,41.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AghAnQgJgKAAgSIAAg6IAOAAIAAAzQAAAIACAGQABAGADAEQADAEAFACQAFACAIAAIAFgBQAFAAAFgEQAFgEAFgHQAEgHAAgNIAAgvIAOAAIAABIIAAAKIABALIgPAAIAAgIIAAgHIgBAAQgCAEgDADIgIAFQgFADgFABIgJABQgTAAgJgJg");
	this.shape_8.setTransform(-80,42.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgaAwIAAg/IAAgNIgBgRIAOAAIAAASIAAAAIAEgIIAHgGQADgDAFgBQAFgCAHAAQAGAAAEABIgDANIgIgBQgIAAgFADQgFADgEAEQgEAFgCAFIgBAKIAAA0g");
	this.shape_9.setTransform(-94.2,41.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgTAwQgHgCgEgDQgFgEgDgFQgDgFAAgHQAAgLAGgHQAHgFAJgEQAJgDAKgBIATAAIAHAAIAAgDQAAgZgZAAQgQAAgNALIgIgJQAOgNAaAAQAHAAAHACQAHABAFAFQAEAEADAGQADAHAAAIIAAApIABALIABAKIgNAAIgBgHIgBgIIAAAAQgGAJgJAEQgIAFgLAAQgGAAgGgCgAAGAAQgHABgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEACIAHACIAJABQAGAAAGgCQAFgDAEgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgNAAg");
	this.shape_10.setTransform(-104.3,42);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AAFA9QgFgCgCgDQgEgCgCgFQgCgFAAgHIAAg7IgVAAIAAgMIAVAAIAAgbIANAAIAAAbIAcAAIAAAMIgcAAIAAA2IABAJQAAADACACQACACADAAIAGABIAHgBIAHgCIABAMQgIAEgLAAIgIgBg");
	this.shape_11.setTransform(-112.9,40.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AAdAwIAAgzQAAgPgGgJQgGgIgPAAIgFABQgFAAgFAEQgFAEgFAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAIIAAAHIABAAIAGgHIAIgFIAJgEIAJgBQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_12.setTransform(-122.5,41.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgTAwQgHgCgEgDQgFgEgDgFQgDgFAAgHQAAgLAGgHQAHgFAJgEQAJgDAKgBIATAAIAHAAIAAgDQAAgZgZAAQgQAAgNALIgIgJQAOgNAaAAQAHAAAHACQAHABAFAFQAEAEADAGQADAHAAAIIAAApIABALIABAKIgNAAIgBgHIgBgIIAAAAQgGAJgJAEQgIAFgLAAQgGAAgGgCgAAGAAQgHABgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEACIAHACIAJABQAGAAAGgCQAFgDAEgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgNAAg");
	this.shape_13.setTransform(-133.9,42);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgHAvIgohdIARAAIAeBOIABAAIAfhOIAQAAIgoBdg");
	this.shape_14.setTransform(-144.1,42);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgRAtQgJgDgHgHQgGgGgEgKQgEgJAAgKQAAgJAEgKQADgIAHgIQAHgGAJgEQAJgDAJAAQAMAAAIADQAJAEAGAGQAGAHADAJQADAIAAAKIAAAFIhRAAQABAGADAHQADAGAFAEQAFAFAGADQAGACAHAAQALAAAIgEQAIgGAEgGIALAIQgJALgLAFQgKAFgMAAQgKAAgKgFgAgLgiQgGACgFAFQgEAEgDAFQgDAGAAAGIBBAAQAAgNgIgJQgIgIgQgBQgFABgHACg");
	this.shape_15.setTransform(-155,42);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgGBMIAAiXIANAAIAACXg");
	this.shape_16.setTransform(-163.4,39.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgTAwQgHgCgEgDQgFgEgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgPAaAAQAHAAAHADQAHACAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGAAgGgBgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAEACAEQACADAEADIAHADIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgFAAgHIAAgHIgHAAIgNABg");
	this.shape_17.setTransform(220.9,18.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgaAwIAAg/IAAgNIgBgRIAOAAIAAASIAAAAIAEgIIAHgGQADgDAFgBQAFgCAHAAQAGAAAEABIgDANIgIgBQgIAAgFADQgFADgEAEQgEAFgCAFIgBAKIAAA0g");
	this.shape_18.setTransform(207.3,18.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgRAuQgJgEgHgGQgGgHgEgKQgEgJAAgKQAAgJAEgJQADgKAHgGQAHgHAJgDQAJgFAJAAQAMAAAIAFQAJADAGAHQAGAGADAJQADAIAAAKIAAAEIhRAAQABAIADAGQADAGAFAFQAFAEAGADQAGACAHABQALAAAIgGQAIgFAEgGIALAIQgJALgLAFQgKAFgMgBQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAGQgDAFAAAGIBBAAQAAgNgIgJQgIgJgQABQgFAAgHACg");
	this.shape_19.setTransform(197,18.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgVBJQgJgDgHgHQgHgGgEgKQgDgJAAgKQAAgLADgJQAEgIAHgHQAHgGAJgEQAKgEALAAIAKABQAGABAFADQAEACAFADIAIAIIABAAIAAhJIANAAIAACXIgNAAIAAgQIgBAAIgIAIQgFAEgEACQgFACgGABIgKABQgLAAgKgEgAgOgGQgIADgFAEQgFAFgCAHQgDAHAAAIQAAAIADAGQACAHAFAFQAFAFAIADQAGADAIAAQAIAAAHgDQAIgDAFgFQAFgFADgHQADgGAAgIQAAgIgDgHQgDgHgFgFQgFgEgIgDQgHgDgIAAQgIAAgGADg");
	this.shape_20.setTransform(184.5,16);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgRAuQgJgEgHgGQgGgHgEgKQgEgJAAgKQAAgJAEgJQADgKAHgGQAHgHAJgDQAJgFAJAAQAMAAAIAFQAJADAGAHQAGAGADAJQADAIAAAKIAAAEIhRAAQABAIADAGQADAGAFAFQAFAEAGADQAGACAHABQALAAAIgGQAIgFAEgGIALAIQgJALgLAFQgKAFgMgBQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAGQgDAFAAAGIBBAAQAAgNgIgJQgIgJgQABQgFAAgHACg");
	this.shape_21.setTransform(172.5,18.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgNAuQgJgEgHgGQgHgHgEgJQgDgJAAgLQAAgJADgKQAEgJAHgGQAHgHAJgEQAKgEALAAQAKABAKAEQAIADAIAJIgMAIQgDgFgGgEQgGgDgJAAQgIAAgGADQgHACgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAGACAIABQAJgBAGgDQAGgEADgFIAMAIQgIAJgIAEQgKADgKAAQgLABgKgEg");
	this.shape_22.setTransform(162,18.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgUAuQgKgEgHgGQgGgHgEgKQgEgJAAgKQAAgJAEgJQAEgKAGgGQAHgHAKgDQAKgFAKAAQAMAAAJAFQAKADAHAHQAGAGAEAKQAEAJAAAJQAAAKgEAJQgEAKgGAHQgHAGgKAEQgJADgMAAQgKAAgKgDgAgPghQgGADgFAFQgFAFgCAGQgDAHAAAHQAAAIADAGQACAHAFAGQAFAEAGAEQAHACAIABQAJgBAGgCQAHgEAFgEQAFgGADgHQACgGAAgIQAAgHgCgHQgDgGgFgFQgFgFgHgDQgGgDgJAAQgIAAgHADg");
	this.shape_23.setTransform(150.3,18.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgaAwIAAg/IAAgNIgBgRIAOAAIAAASIAAAAIAEgIIAHgGQADgDAFgBQAFgCAHAAQAGAAAEABIgDANIgIgBQgIAAgFADQgFADgEAEQgEAFgCAFIgBAKIAAA0g");
	this.shape_24.setTransform(141.5,18.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgzBNIAAiXIANAAIAAAQIABAAQADgFAFgDQAEgEAFgCQAGgCAFgBIAJgBQALAAAKAEQAKADAHAHQAHAHADAJQAEAJAAAKQAAALgEAJQgDAIgHAHQgHAGgKAEQgKAEgLAAIgJgBQgFgBgGgDQgFgCgEgDQgFgEgDgEIgBAAIAABJgAgOg9QgIADgFAFQgFAFgDAHQgDAGAAAIQAAAIADAHQADAHAFAFQAFAEAIADQAGADAIAAQAJAAAGgDQAHgDAGgEQAEgFACgHQAEgHAAgIQAAgIgEgGQgCgHgEgFQgGgFgHgDQgGgDgJAAQgIAAgGADg");
	this.shape_25.setTransform(131.1,21.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgRAuQgJgEgHgGQgGgHgEgKQgEgJAAgKQAAgJAEgJQADgKAHgGQAHgHAJgDQAJgFAJAAQAMAAAIAFQAJADAGAHQAGAGADAJQADAIAAAKIAAAEIhRAAQABAIADAGQADAGAFAFQAFAEAGADQAGACAHABQALAAAIgGQAIgFAEgGIALAIQgJALgLAFQgKAFgMgBQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAGQgDAFAAAGIBBAAQAAgNgIgJQgIgJgQABQgFAAgHACg");
	this.shape_26.setTransform(112.6,18.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgUBJQgKgDgHgHQgHgGgDgKQgFgJAAgKQAAgLAFgJQADgIAHgHQAHgGAKgEQAJgEALAAIAKABQAFABAFADQAGACAEADIAIAIIAAAAIAAhJIAOAAIAACXIgOAAIAAgQIAAAAIgIAIQgEAEgGACQgFACgFABIgKABQgLAAgJgEgAgPgGQgHADgFAEQgEAFgDAHQgCAHgBAIQABAIACAGQADAHAEAFQAFAFAHADQAHADAIAAQAIAAAIgDQAGgDAGgFQAFgFADgHQADgGAAgIQAAgIgDgHQgDgHgFgFQgGgEgGgDQgIgDgIAAQgIAAgHADg");
	this.shape_27.setTransform(100.1,16);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgVAuQgJgFgHgKIAMgIQAEAGAHAFQAGAEAIAAIAIgBIAHgDQAEgCACgDQACgDAAgFQAAgGgGgEQgFgCgIgCIgNgEIgGgCIgIgCQgFgDgDgFQgCgFAAgGQAAgIACgFQADgFAGgEQAFgDAGgBQAHgDAGAAQAKAAAJAFQAJAEAEAIIgMAIQgDgFgFgEQgFgEgIABIgGABQgEAAgDACQgDABgBAEQgDACAAADQABAIAFACQAEAEAJACIAOADQAKACAHAGQAHAGAAAKQAAAIgEAGQgDAFgFAEQgFADgHACQgHABgHAAQgKAAgLgDg");
	this.shape_28.setTransform(83.7,18.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgRAuQgJgEgHgGQgGgHgEgKQgEgJAAgKQAAgJAEgJQADgKAHgGQAHgHAJgDQAJgFAJAAQAMAAAIAFQAJADAGAHQAGAGADAJQADAIAAAKIAAAEIhRAAQABAIADAGQADAGAFAFQAFAEAGADQAGACAHABQALAAAIgGQAIgFAEgGIALAIQgJALgLAFQgKAFgMgBQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAGQgDAFAAAGIBBAAQAAgNgIgJQgIgJgQABQgFAAgHACg");
	this.shape_29.setTransform(73.4,18.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AAFA8QgEgBgDgCQgDgDgDgFQgCgFAAgHIAAg7IgVAAIAAgMIAVAAIAAgaIAMAAIAAAaIAdAAIAAAMIgdAAIAAA2IACAJQABAEACABQACACACABIAGAAIAHAAIAHgDIABAMQgIAEgLgBIgIgBg");
	this.shape_30.setTransform(64.1,17.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AAdAwIAAgzQAAgPgGgJQgGgIgPAAIgFABQgFAAgFAEQgFAEgFAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAIIAAAHIABAAIAGgHIAIgFIAJgEIAJgBQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_31.setTransform(54.5,18.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgTAwQgHgCgEgDQgFgEgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgPAaAAQAHAAAHADQAHACAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGAAgGgBgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAEACAEQACADAEADIAHADIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgFAAgHIAAgHIgHAAIgNABg");
	this.shape_32.setTransform(43.1,18.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgTAwQgHgCgEgDQgFgEgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgPAaAAQAHAAAHADQAHACAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGAAgGgBgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAEACAEQACADAEADIAHADIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgFAAgHIAAgHIgHAAIgNABg");
	this.shape_33.setTransform(26.4,18.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgVBJQgJgDgHgHQgHgGgEgKQgDgJAAgKQAAgLADgJQAEgIAHgHQAHgGAJgEQAKgEALAAIAKABQAGABAFADQAEACAFADIAIAIIABAAIAAhJIANAAIAACXIgNAAIAAgQIgBAAIgIAIQgFAEgEACQgFACgGABIgKABQgLAAgKgEgAgOgGQgIADgEAEQgGAFgCAHQgDAHAAAIQAAAIADAGQACAHAGAFQAEAFAIADQAGADAIAAQAIAAAHgDQAIgDAFgFQAFgFADgHQADgGAAgIQAAgIgDgHQgDgHgFgFQgFgEgIgDQgHgDgIAAQgIAAgGADg");
	this.shape_34.setTransform(14.5,16);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgTAwQgHgCgEgDQgFgEgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgPAaAAQAHAAAHADQAHACAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGAAgGgBgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAEACAEQACADAEADIAHADIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgFAAgHIAAgHIgHAAIgNABg");
	this.shape_35.setTransform(2.7,18.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AghAnQgJgKAAgSIAAg6IAOAAIAAAzQAAAIACAGQABAGADAEQADAEAFACQAFACAIAAIAFgBQAFAAAFgEQAFgEAFgHQAEgHAAgNIAAgvIAOAAIAABIIAAAKIABALIgPAAIAAgIIAAgHIgBAAQgCAEgDADIgIAFQgFADgFABIgJABQgTAAgJgJg");
	this.shape_36.setTransform(-8.4,18.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgNAuQgJgEgHgGQgHgHgEgJQgDgJAAgLQAAgJADgKQAEgJAHgGQAHgHAJgEQAKgEALAAQAKABAKAEQAIADAIAJIgMAIQgDgFgGgEQgGgDgJAAQgIAAgGADQgHACgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAGACAIABQAJgBAGgDQAGgEADgFIAMAIQgIAJgIAEQgKADgKAAQgLABgKgEg");
	this.shape_37.setTransform(-18.9,18.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgRAuQgJgEgHgGQgGgHgEgKQgEgJAAgKQAAgJAEgJQADgKAHgGQAHgHAJgDQAJgFAJAAQAMAAAIAFQAJADAGAHQAGAGADAJQADAIAAAKIAAAEIhRAAQABAIADAGQADAGAFAFQAFAEAGADQAGACAHABQALAAAIgGQAIgFAEgGIALAIQgJALgLAFQgKAFgMgBQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAGQgDAFAAAGIBBAAQAAgNgIgJQgIgJgQABQgFAAgHACg");
	this.shape_38.setTransform(-30.2,18.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgUBJQgKgDgHgHQgHgGgDgKQgFgJAAgKQAAgLAFgJQADgIAHgHQAHgGAKgEQAJgEALAAIAKABQAFABAFADQAGACAEADIAIAIIAAAAIAAhJIAPAAIAACXIgPAAIAAgQIAAAAIgIAIQgEAEgGACQgFACgFABIgKABQgLAAgJgEgAgPgGQgHADgFAEQgEAFgDAHQgDAHABAIQgBAIADAGQADAHAEAFQAFAFAHADQAHADAIAAQAIAAAIgDQAGgDAGgFQAFgFADgHQADgGAAgIQAAgIgDgHQgDgHgFgFQgGgEgGgDQgIgDgIAAQgIAAgHADg");
	this.shape_39.setTransform(-42.7,16);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgTAwQgHgCgEgDQgFgEgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgPAaAAQAHAAAHADQAHACAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGAAgGgBgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAEACAEQACADAEADIAHADIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgFAAgHIAAgHIgHAAIgNABg");
	this.shape_40.setTransform(-54.5,18.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AAdAwIAAgzQAAgPgGgJQgGgIgPAAIgFABQgFAAgFAEQgFAEgFAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAIIAAAHIABAAIAGgHIAIgFIAJgEIAJgBQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_41.setTransform(-71.6,18.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgUBFQgKgEgHgGQgGgHgEgKQgEgJAAgKQAAgKAEgJQAEgJAGgGQAHgHAKgDQAKgFAKAAQAMAAAJAFQAKADAHAHQAGAGAEAJQAEAJAAAKQAAAKgEAJQgEAKgGAHQgHAGgKAEQgJADgMAAQgKAAgKgDgAgPgKQgGADgFAFQgFAEgCAGQgDAHAAAIQAAAIADAGQACAHAFAGQAFAEAGAEQAHACAIABQAJgBAGgCQAHgEAFgEQAFgGADgHQACgGAAgIQAAgIgCgHQgDgGgFgEQgFgFgHgDQgGgDgJAAQgIAAgHADgAgMgrIAUgdIAUAAIgcAdg");
	this.shape_42.setTransform(-83.5,16.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_43.setTransform(-92.2,16.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgNAuQgJgEgHgGQgHgHgEgJQgDgJAAgLQAAgJADgKQAEgJAHgGQAHgHAJgEQAKgEALAAQAKABAKAEQAIADAIAJIgMAIQgDgFgGgEQgGgDgJAAQgIAAgGADQgHACgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAGACAIABQAJgBAGgDQAGgEADgFIAMAIQgIAJgIAEQgKADgKAAQgLABgKgEg");
	this.shape_44.setTransform(-99.4,18.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_45.setTransform(-107.4,16.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgUAuQgKgFgHgKIAMgIQAEAGAGAFQAHAEAIAAIAIgBIAIgDQADgCACgDQACgDAAgFQAAgGgFgEQgGgCgIgCIgMgEIgHgCIgJgCQgDgDgEgFQgDgFAAgGQAAgIADgFQADgFAGgEQAFgDAHgBQAGgDAGAAQAKAAAJAFQAJAEAFAIIgNAIQgDgFgFgEQgFgEgIABIgHABQgDAAgDACQgDABgCAEQgBACAAADQAAAIAEACQAFAEAJACIAOADQAKACAHAGQAHAGAAAKQAAAIgDAGQgDAFgGAEQgFADgHACQgHABgHAAQgLAAgJgDg");
	this.shape_46.setTransform(-114.3,18.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgUAuQgKgEgHgGQgGgHgEgKQgEgJAAgKQAAgJAEgJQAEgKAGgGQAHgHAKgDQAKgFAKAAQAMAAAJAFQAKADAHAHQAGAGAEAKQAEAJAAAJQAAAKgEAJQgEAKgGAHQgHAGgKAEQgJADgMAAQgKAAgKgDgAgPghQgGADgFAFQgFAFgCAGQgDAHAAAHQAAAIADAGQACAHAFAGQAFAEAGAEQAHACAIABQAJgBAGgCQAHgEAFgEQAFgGADgHQACgGAAgIQAAgHgCgHQgDgGgFgFQgFgFgHgDQgGgDgJAAQgIAAgHADg");
	this.shape_47.setTransform(-125.1,18.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("Ag0BNIAAiXIAPAAIAAAQIAAAAQADgFAFgDQAEgEAGgCQAFgCAFgBIAJgBQALAAAKAEQAKADAHAHQAGAHAEAJQAFAJAAAKQAAALgFAJQgEAIgGAHQgHAGgKAEQgKAEgLAAIgJgBQgFgBgFgDQgGgCgEgDQgFgEgDgEIAAAAIAABJgAgPg9QgHADgFAFQgFAFgDAHQgDAGAAAIQAAAIADAHQADAHAFAFQAFAEAHADQAIADAHAAQAIAAAIgDQAHgDAFgEQAEgFADgHQACgHAAgIQAAgIgCgGQgDgHgEgFQgFgFgHgDQgIgDgIAAQgHAAgIADg");
	this.shape_48.setTransform(-137.4,21.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgTAwQgHgCgEgDQgFgEgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgPAaAAQAHAAAHADQAHACAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGAAgGgBgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAEACAEQACADAEADIAHADIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgFAAgHIAAgHIgHAAIgNABg");
	this.shape_49.setTransform(-155.7,18.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgGBMIAAiXIANAAIAACXg");
	this.shape_50.setTransform(-163.4,15.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgUAuQgKgFgHgKIAMgIQAEAHAGADQAHAFAIAAIAIgBIAIgEQADgBACgDQACgEAAgDQAAgIgGgCQgFgDgIgDIgNgCIgGgCIgJgEQgDgDgDgEQgEgEAAgHQAAgIAEgEQADgGAFgDQAFgEAHgCQAGgCAGAAQAKAAAJAEQAJAFAEAJIgMAIQgDgHgFgDQgGgEgHAAIgHABQgDABgDACQgDABgCADQgCADABAEQgBAGAGADQAEADAJADIAOADQALACAGAGQAHAHAAAKQAAAHgEAFQgCAHgGACQgFAEgHACQgHABgHAAQgKAAgKgDg");
	this.shape_51.setTransform(242.3,-4.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgRAuQgJgEgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgIAHgHQAHgHAJgEQAJgEAJAAQAMAAAIAEQAJAFAGAGQAGAGADAIQADAJAAAJIAAAGIhRAAQABAGADAHQADAGAFAFQAFAEAGACQAGAEAHAAQALgBAIgFQAIgEAEgHIALAJQgJAKgLAFQgKAEgMAAQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAFQgDAGAAAGIBBAAQAAgOgIgIQgIgJgQAAQgFAAgHADg");
	this.shape_52.setTransform(231.9,-4.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgOAXIANguIAQAAIgQAug");
	this.shape_53.setTransform(217.4,0.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgRAuQgJgEgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgIAHgHQAHgHAJgEQAJgEAJAAQAMAAAIAEQAJAFAGAGQAGAGADAIQADAJAAAJIAAAGIhRAAQABAGADAHQADAGAFAFQAFAEAGACQAGAEAHAAQALgBAIgFQAIgEAEgHIALAJQgJAKgLAFQgKAEgMAAQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAFQgDAGAAAGIBBAAQAAgOgIgIQgIgJgQAAQgFAAgHADg");
	this.shape_54.setTransform(208.6,-4.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AAFA9QgFgBgCgEQgDgCgDgFQgCgFAAgIIAAg6IgVAAIAAgMIAVAAIAAgbIAMAAIAAAbIAdAAIAAAMIgdAAIAAA3IABAIQACADACACQABACADABIAGABIAHgBIAHgDIABAMQgIADgLAAIgIAAg");
	this.shape_55.setTransform(199.3,-5.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AAdAwIAAgzQAAgPgGgJQgGgIgPAAIgFABQgFAAgFAEQgFAEgFAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAIIAAAHIABAAIAGgHIAIgFIAJgEIAJgBQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_56.setTransform(189.8,-4.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgRAuQgJgEgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgIAHgHQAHgHAJgEQAJgEAJAAQAMAAAIAEQAJAFAGAGQAGAGADAIQADAJAAAJIAAAGIhRAAQABAGADAHQADAGAFAFQAFAEAGACQAGAEAHAAQALgBAIgFQAIgEAEgHIALAJQgJAKgLAFQgKAEgMAAQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAFQgDAGAAAGIBBAAQAAgOgIgIQgIgJgQAAQgFAAgHADg");
	this.shape_57.setTransform(178.2,-4.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AA8AwIAAg2QAAgOgFgHQgFgIgPAAQgHAAgGADQgFADgDAFQgDAEgCAGIgBANIAAAxIgNAAIAAg2QAAgOgGgHQgFgIgOAAIgGABQgEAAgFAEQgFAEgEAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAPIABAAQAFgJAJgEQAIgEAJAAIAJABQAEAAAFADQAEACADADQADAEADAGQAEgJAJgFQAJgFAKAAQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_58.setTransform(163.3,-4.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgRAuQgJgEgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgIAHgHQAHgHAJgEQAJgEAJAAQAMAAAIAEQAJAFAGAGQAGAGADAIQADAJAAAJIAAAGIhRAAQABAGADAHQADAGAFAFQAFAEAGACQAGAEAHAAQALgBAIgFQAIgEAEgHIALAJQgJAKgLAFQgKAEgMAAQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAFQgDAGAAAGIBBAAQAAgOgIgIQgIgJgQAAQgFAAgHADg");
	this.shape_59.setTransform(148.6,-4.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AA8AwIAAg2QAAgOgFgHQgFgIgPAAQgHAAgGADQgFADgDAFQgDAEgCAGQgBAHAAAGIAAAxIgNAAIAAg2QAAgOgGgHQgFgIgOAAIgGABQgEAAgFAEQgFAEgEAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAPIABAAQAFgJAJgEQAIgEAJAAIAJABQAEAAAFADQAEACADADQADAEADAGQAEgJAJgFQAJgFAKAAQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_60.setTransform(133.7,-4.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgaAwIAAg/IAAgNIgBgRIAOAAIAAASIAAAAIAEgIIAHgGQADgDAFgBQAFgCAHAAQAGAAAEABIgDANIgIgBQgIAAgFADQgFADgEAEQgEAFgCAFQgBAFAAAFIAAA0g");
	this.shape_61.setTransform(122.3,-4.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_62.setTransform(115.4,-6.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgLBNIAAhRIgVAAIAAgMIAVAAIAAgaQAAgSAJgJQAIgHAPAAIAGAAIAGABIgDAMIgFgBIgFAAQgGAAgDABQgFACgBAEQgCADAAAFIgBAJIAAAYIAXAAIAAAMIgXAAIAABRg");
	this.shape_63.setTransform(110.3,-7.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgRAuQgJgEgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgIAHgHQAHgHAJgEQAJgEAJAAQAMAAAIAEQAJAFAGAGQAGAGADAIQADAJAAAJIAAAGIhRAAQABAGADAHQADAGAFAFQAFAEAGACQAGAEAHAAQALgBAIgFQAIgEAEgHIALAJQgJAKgLAFQgKAEgMAAQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAFQgDAGAAAGIBBAAQAAgOgIgIQgIgJgQAAQgFAAgHADg");
	this.shape_64.setTransform(95,-4.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AgVAuQgJgFgHgKIAMgIQAEAHAHADQAGAFAIAAIAIgBIAHgEQAEgBACgDQACgEAAgDQAAgIgFgCQgGgDgIgDIgMgCIgHgCIgIgEQgEgDgEgEQgCgEAAgHQAAgIACgEQADgGAGgDQAFgEAGgCQAHgCAGAAQAKAAAJAEQAJAFAEAJIgMAIQgDgHgFgDQgGgEgHAAIgGABQgEABgDACQgDABgBADQgCADgBAEQABAGAEADQAFADAJADIAOADQAKACAHAGQAHAHAAAKQAAAHgEAFQgDAHgFACQgFAEgHACQgHABgHAAQgKAAgLgDg");
	this.shape_65.setTransform(84.7,-4.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgaAwIAAg/IAAgNIgBgRIAOAAIAAASIAAAAIAEgIIAHgGQADgDAFgBQAFgCAHAAQAGAAAEABIgDANIgIgBQgIAAgFADQgFADgEAEQgEAFgCAFIgBAKIAAA0g");
	this.shape_66.setTransform(77.6,-4.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgTAwQgHgCgEgEQgFgDgDgFQgDgFAAgHQAAgLAGgHQAHgFAJgEQAJgDAKgBIATgBIAHAAIAAgCQAAgZgZAAQgQAAgNAMIgIgJQAOgOAagBQAHAAAHACQAHADAFAEQAEAEADAGQADAHAAAIIAAApIABAMIABAJIgNAAIgBgHIgBgIIAAAAQgGAJgJAFQgIADgLAAQgGAAgGgBgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAFACADQACADAEACIAHAEIAJABQAGAAAGgDQAFgCAEgEQAEgEACgGQABgGAAgGIAAgHIgHAAIgNABg");
	this.shape_67.setTransform(67.5,-4.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgaAwIAAg/IAAgNIgBgRIAOAAIAAASIAAAAIAEgIIAHgGQADgDAFgBQAFgCAHAAQAGAAAEABIgDANIgIgBQgIAAgFADQgFADgEAEQgEAFgCAFIgBAKIAAA0g");
	this.shape_68.setTransform(59.8,-4.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgTAwQgHgCgEgEQgFgDgDgFQgDgFAAgHQAAgLAGgHQAHgFAJgEQAJgDAKgBIATgBIAHAAIAAgCQAAgZgZAAQgQAAgNAMIgIgJQAOgOAagBQAHAAAHACQAHADAFAEQAEAEADAGQADAHAAAIIAAApIABAMIABAJIgNAAIgBgHIgBgIIAAAAQgGAJgJAFQgIADgLAAQgGAAgGgBgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAFACADQACADAEACIAHAEIAJABQAGAAAGgDQAFgCAEgEQAEgEACgGQABgGAAgGIAAgHIgHAAIgNABg");
	this.shape_69.setTransform(49.7,-4.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("Ag0BNIAAiXIAPAAIAAAQIAAAAQADgFAFgDQAFgEAFgCQAEgCAGgBIAJgBQAMAAAKAEQAJADAHAHQAGAHAFAJQADAJAAAKQAAALgDAJQgFAIgGAHQgHAGgJAEQgKAEgMAAIgJgBQgGgBgEgDQgFgCgFgDQgFgEgDgEIAAAAIAABJgAgPg9QgHADgFAFQgGAFgCAHQgDAGAAAIQAAAIADAHQACAHAGAFQAFAEAHADQAIADAHAAQAIAAAIgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgIgDgGQgCgHgFgFQgFgFgGgDQgIgDgIAAQgHAAgIADg");
	this.shape_70.setTransform(38.4,-1.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgmBHIgHgBIACgNQAEACAGAAQAIAAAEgEQAFgFADgHIAGgSIgnhfIARAAIAdBNIAfhNIAQAAIgwB1QgEALgHAHQgGAGgNAAIgHAAg");
	this.shape_71.setTransform(20.9,-2.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgVAuQgJgFgHgKIAMgIQAEAHAHADQAGAFAIAAIAIgBIAHgEQAEgBACgDQACgEAAgDQAAgIgFgCQgGgDgIgDIgMgCIgHgCIgIgEQgEgDgEgEQgCgEAAgHQAAgIACgEQADgGAGgDQAFgEAGgCQAHgCAGAAQAKAAAJAEQAJAFAEAJIgMAIQgDgHgFgDQgGgEgHAAIgGABQgEABgDACQgDABgBADQgCADgBAEQABAGAEADQAFADAJADIAOADQAKACAHAGQAHAHAAAKQAAAHgEAFQgDAHgFACQgFAEgHACQgHABgHAAQgKAAgLgDg");
	this.shape_72.setTransform(-0.3,-4.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgUAuQgKgEgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgHAKgEQAKgEAKAAQAMAAAJAEQAKAEAHAHQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgKAEQgJADgMAAQgKAAgKgDgAgPghQgGACgFAGQgFAEgCAIQgDAGAAAHQAAAIADAGQACAIAFAEQAFAGAGACQAHAEAIAAQAJAAAGgEQAHgCAFgGQAFgEADgIQACgGAAgIQAAgHgCgGQgDgIgFgEQgFgGgHgCQgGgEgJAAQgIAAgHAEg");
	this.shape_73.setTransform(-11.1,-4.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgaAwIAAg/IAAgNIgBgRIAOAAIAAASIAAAAIAEgIIAHgGQADgDAFgBQAFgCAHAAQAGAAAEABIgDANIgIgBQgIAAgFADQgFADgEAEQgEAFgCAFQgBAFAAAFIAAA0g");
	this.shape_74.setTransform(-19.9,-4.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AAFA9QgEgBgDgEQgDgCgDgFQgCgFAAgIIAAg6IgVAAIAAgMIAVAAIAAgbIAMAAIAAAbIAdAAIAAAMIgdAAIAAA3IACAIQABADACACQACACACABIAGABIAHgBIAHgDIABAMQgIADgLAAIgIAAg");
	this.shape_75.setTransform(-27.7,-5.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AgRAuQgJgEgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgIAHgHQAHgHAJgEQAJgEAJAAQAMAAAIAEQAJAFAGAGQAGAGADAIQADAJAAAJIAAAGIhRAAQABAGADAHQADAGAFAFQAFAEAGACQAGAEAHAAQALgBAIgFQAIgEAEgHIALAJQgJAKgLAFQgKAEgMAAQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAFQgDAGAAAGIBBAAQAAgOgIgIQgIgJgQAAQgFAAgHADg");
	this.shape_76.setTransform(-37.1,-4.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AA8AwIAAg2QAAgOgFgHQgFgIgPAAQgHAAgGADQgFADgDAFQgDAEgCAGIgBANIAAAxIgNAAIAAg2QAAgOgGgHQgFgIgOAAIgGABQgEAAgFAEQgFAEgEAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAPIABAAQAFgJAJgEQAIgEAJAAIAJABQAEAAAFADQAEACADADQADAEADAGQAEgJAJgFQAJgFAKAAQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_77.setTransform(-52.1,-4.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgNBHIAAhdIANAAIAABdgAgTgpIAUgdIATAAIgaAdg");
	this.shape_78.setTransform(-62.6,-6.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AAFA9QgFgBgCgEQgDgCgDgFQgCgFAAgIIAAg6IgVAAIAAgMIAVAAIAAgbIAMAAIAAAbIAdAAIAAAMIgdAAIAAA3IABAIQACADACACQABACADABIAGABIAHgBIAHgDIABAMQgIADgLAAIgIAAg");
	this.shape_79.setTransform(-69.3,-5.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AAdAwIAAgzQAAgPgGgJQgGgIgPAAIgFABQgFAAgFAEQgFAEgFAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAIIAAAHIABAAIAGgHIAIgFIAJgEIAJgBQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_80.setTransform(-78.9,-4.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgRAuQgJgEgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgIAHgHQAHgHAJgEQAJgEAJAAQAMAAAIAEQAJAFAGAGQAGAGADAIQADAJAAAJIAAAGIhRAAQABAGADAHQADAGAFAFQAFAEAGACQAGAEAHAAQALgBAIgFQAIgEAEgHIALAJQgJAKgLAFQgKAEgMAAQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAFQgDAGAAAGIBBAAQAAgOgIgIQgIgJgQAAQgFAAgHADg");
	this.shape_81.setTransform(-90.4,-4.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgNAuQgJgEgHgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAHgHAJgEQAKgDALgBQAKABAKADQAJAFAHAIIgMAIQgDgFgGgDQgHgFgIAAQgIAAgHAEQgGACgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAGACQAHAEAIAAQAIAAAHgEQAGgEADgFIAMAIQgHAIgJAFQgKADgKAAQgLAAgKgDg");
	this.shape_82.setTransform(-100.9,-4.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AgZBCQgKgGgFgMQgGgLgCgMQgBgNAAgMQAAgLABgNQACgNAGgLQAFgKAKgIQAKgGAPAAQAQAAAKAGQAJAIAGAKQAGALACANQABANAAALQAAAMgBANQgCAMgGALQgGAMgJAGQgKAIgQgBQgPABgKgIgAgTg1QgGAGgEAKQgEAIAAALIgCASIACATQAAAKAEAJQAEAKAGAGQAIAGALAAQAMAAAHgGQAIgGADgKQADgJABgKIABgTIgBgSQgBgLgDgIQgDgKgIgGQgHgGgMgBQgLABgIAGg");
	this.shape_83.setTransform(-118,-6.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgcBCQgLgHgHgMIAQgGQAEAIAHAFQAIAFAKAAQAGAAAGgDQAGgCAFgEQAEgEACgGQAEgGAAgHQAAgHgEgGQgCgHgFgEQgEgEgIgCQgGgDgHAAQgIAAgIADQgIACgHACIABhIIBLAAIAAANIg8AAIAAArIAJgDIAKgBQAKAAAIAEQAJADAHAGQAFAGAEAIQAEAIgBAKQAAAKgDAJQgEAIgHAGQgGAGgKAEQgJADgJAAQgOAAgMgGg");
	this.shape_84.setTransform(-129.9,-6.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AgRAuQgJgEgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgIAHgHQAHgHAJgEQAJgEAJAAQAMAAAIAEQAJAFAGAGQAGAGADAIQADAJAAAJIAAAGIhRAAQABAGADAHQADAGAFAFQAFAEAGACQAGAEAHAAQALgBAIgFQAIgEAEgHIALAJQgJAKgLAFQgKAEgMAAQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAFQgDAGAAAGIBBAAQAAgOgIgIQgIgJgQAAQgFAAgHADg");
	this.shape_85.setTransform(-147.2,-4.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgUBJQgKgDgHgHQgHgGgDgKQgFgJAAgKQAAgLAFgJQADgIAHgHQAHgGAKgEQAJgEALAAIAKABQAGABAEADQAFACAFADIAIAIIAAAAIAAhJIAPAAIAACXIgPAAIAAgQIAAAAIgIAIQgFAEgFACQgEACgGABIgKABQgLAAgJgEgAgPgGQgGADgFAEQgFAFgDAHQgDAHABAIQgBAIADAGQADAHAFAFQAFAFAGADQAHADAIAAQAIAAAIgDQAGgDAGgFQAFgFADgHQADgGAAgIQAAgIgDgHQgDgHgFgFQgGgEgGgDQgIgDgIAAQgIAAgHADg");
	this.shape_86.setTransform(-159.8,-7.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgTAwQgHgCgEgEQgFgDgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgOAagBQAHAAAHACQAHADAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGABgGgCgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEABIAHAEIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgGAAgGIAAgHIgHAAIgNABg");
	this.shape_87.setTransform(238.7,-27.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgUBJQgKgDgHgHQgHgGgDgKQgFgJAAgKQAAgLAFgJQADgIAHgHQAHgGAKgEQAJgEALAAIAKABQAGABAEADQAFACAFADIAIAIIAAAAIAAhJIAPAAIAACXIgPAAIAAgQIAAAAIgIAIQgFAEgFACQgEACgGABIgKABQgLAAgJgEgAgPgGQgGADgFAEQgFAFgDAHQgDAHABAIQgBAIADAGQADAHAFAFQAFAFAGADQAHADAIAAQAIAAAIgDQAGgDAGgFQAFgFADgHQADgGAAgIQAAgIgDgHQgDgHgFgFQgGgEgGgDQgIgDgIAAQgIAAgHADg");
	this.shape_88.setTransform(226.8,-30.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgTAwQgHgCgEgEQgFgDgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgOAagBQAHAAAHACQAHADAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGABgGgCgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEABIAHAEIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgGAAgGIAAgHIgHAAIgNABg");
	this.shape_89.setTransform(214.9,-27.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AA8AwIAAg2QAAgOgFgHQgFgIgPAAQgHAAgGADQgFADgDAFQgDAEgCAGIgBANIAAAxIgNAAIAAg2QAAgOgGgHQgFgIgOAAIgGABQgEAAgFAEQgFAEgEAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAPIABAAQAFgJAJgEQAIgEAJAAIAJABQAEAAAFADQAEACADADQADAEADAGQAEgJAJgFQAJgFAKAAQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_90.setTransform(200.6,-27.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_91.setTransform(189.3,-30);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AAgAvIgggpIggApIgSAAIApgxIgjgsIASAAIAbAjIAagjIARAAIgjAsIAqAxg");
	this.shape_92.setTransform(181.8,-27.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgUAuQgKgEgHgGQgGgHgEgJQgEgKAAgKQAAgKAEgIQAEgKAGgGQAHgHAKgDQAKgFAKAAQAMAAAJAFQAKADAHAHQAGAGAEAKQAEAIAAAKQAAAKgEAKQgEAJgGAHQgHAGgKAEQgJADgMAAQgKAAgKgDgAgPghQgGACgFAGQgFAFgCAGQgDAHAAAHQAAAIADAGQACAHAFAGQAFAEAGAEQAHADAIAAQAJAAAGgDQAHgEAFgEQAFgGADgHQACgGAAgIQAAgHgCgHQgDgGgFgFQgFgGgHgCQgGgDgJAAQgIAAgHADg");
	this.shape_93.setTransform(170.4,-27.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AgaAwIAAg/IAAgNIgBgRIAOAAIAAASIAAAAIAEgIIAHgGQADgDAFgBQAFgCAHAAQAGAAAEABIgDANIgIgBQgIAAgFADQgFADgEAEQgEAFgCAFIgBAKIAAA0g");
	this.shape_94.setTransform(161.6,-27.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("Ag0BNIAAiXIAPAAIAAAQIAAAAQADgFAFgDQAEgEAGgCQAFgCAFgBIAJgBQAMAAAJAEQAKADAHAHQAGAHAEAJQAFAJAAAKQAAALgFAJQgEAIgGAHQgHAGgKAEQgJAEgMAAIgJgBQgFgBgFgDQgGgCgEgDQgFgEgDgEIAAAAIAABJgAgPg9QgHADgFAFQgFAFgDAHQgDAGAAAIQAAAIADAHQADAHAFAFQAFAEAHADQAIADAHAAQAIAAAIgDQAHgDAEgEQAFgFADgHQACgHAAgIQAAgIgCgGQgDgHgFgFQgEgFgHgDQgIgDgIAAQgHAAgIADg");
	this.shape_95.setTransform(151.2,-24.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgTAwQgHgCgEgEQgFgDgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgOAagBQAHAAAHACQAHADAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGABgGgCgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEABIAHAEIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgGAAgGIAAgHIgHAAIgNABg");
	this.shape_96.setTransform(138.7,-27.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgTAwQgHgCgEgEQgFgDgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgOAagBQAHAAAHACQAHADAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGABgGgCgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEABIAHAEIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgGAAgGIAAgHIgHAAIgNABg");
	this.shape_97.setTransform(122,-27.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_98.setTransform(114.3,-30);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AgNAuQgJgEgHgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAHgHAJgEQAKgDALgBQAKABAJAEQAKADAHAJIgLAIQgEgFgGgEQgGgDgJAAQgIAAgHADQgGACgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAGADQAHADAIAAQAJgBAGgDQAGgEAEgFIALAIQgHAIgKAFQgJADgKAAQgLABgKgEg");
	this.shape_99.setTransform(107.1,-27.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AAdAwIAAgzQAAgPgGgJQgGgIgPAAIgFABQgFAAgFAEQgFAEgFAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAIIAAAHIABAAIAGgHIAIgFIAJgEIAJgBQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_100.setTransform(95.6,-27.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AgTAwQgHgCgEgEQgFgDgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgOAagBQAHAAAHACQAHADAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGABgGgCgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEABIAHAEIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgGAAgGIAAgHIgHAAIgNABg");
	this.shape_101.setTransform(84.2,-27.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AAFA8QgFgBgCgCQgEgDgCgFQgCgFAAgIIAAg6IgVAAIAAgMIAVAAIAAgaIANAAIAAAaIAcAAIAAAMIgcAAIAAA2IABAJQABAEABABQACACADABIAGABIAHgBIAHgDIABAMQgIAEgLgBIgIgBg");
	this.shape_102.setTransform(75.6,-28.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgUAuQgKgFgHgKIAMgIQAEAHAGADQAHAFAIAAIAIgBQAFgBADgDQADgBACgDQACgEAAgEQAAgGgGgEQgFgCgIgDIgNgDIgGgBIgJgEQgEgDgCgEQgEgFAAgGQAAgIAEgFQADgFAFgEQAFgDAHgCQAGgCAGAAQAKAAAJAFQAJADAEAJIgMAIQgDgFgFgEQgGgDgHAAIgHABQgDAAgDACQgDACgCACQgBADgBADQAAAIAGACQAEADAJADIAOADQALACAGAGQAHAGAAAKQAAAIgEAFQgCAHgGACQgFAEgHACQgHACgHgBQgKAAgKgDg");
	this.shape_103.setTransform(67.7,-27.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_104.setTransform(60.6,-30);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AgVBJQgJgDgHgHQgHgGgEgKQgDgJAAgKQAAgLADgJQAEgIAHgHQAHgGAJgEQAKgEALAAIAKABQAGABAFADQAEACAFADIAIAIIABAAIAAhJIANAAIAACXIgNAAIAAgQIgBAAIgIAIQgFAEgEACQgFACgGABIgKABQgLAAgKgEgAgOgGQgIADgEAEQgGAFgCAHQgDAHAAAIQAAAIADAGQACAHAGAFQAEAFAIADQAGADAIAAQAIAAAHgDQAIgDAFgFQAFgFADgHQADgGAAgIQAAgIgDgHQgDgHgFgFQgFgEgIgDQgHgDgIAAQgIAAgGADg");
	this.shape_105.setTransform(51.4,-30.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgTAwQgHgCgEgEQgFgDgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgOAagBQAHAAAHACQAHADAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGABgGgCgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEABIAHAEIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgGAAgGIAAgHIgHAAIgNABg");
	this.shape_106.setTransform(33.7,-27.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AAdAwIAAgzQAAgPgGgJQgGgIgPAAIgFABQgFAAgFAEQgFAEgFAHQgEAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAPAAIAAAIIAAAHIABAAIAGgHIAIgFIAJgEIAJgBQATAAAJAJQAJAKAAASIAAA6g");
	this.shape_107.setTransform(22.5,-27.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AghAnQgJgKAAgSIAAg6IAOAAIAAAzQAAAIACAGQABAGADAEQADAEAFACQAFACAIAAIAFgBQAFAAAFgEQAFgEAFgHQAEgHAAgNIAAgvIAOAAIAABIIAAAKIABALIgPAAIAAgIIAAgHIgBAAQgCAEgDADIgIAFQgFADgFABIgJABQgTAAgJgJg");
	this.shape_108.setTransform(10.9,-27.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AgTAwQgHgCgEgEQgFgDgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgOAagBQAHAAAHACQAHADAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGABgGgCgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEABIAHAEIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgGAAgGIAAgHIgHAAIgNABg");
	this.shape_109.setTransform(-6.4,-27.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgUAuQgKgFgHgKIAMgIQAEAHAHADQAGAFAIAAIAIgBQAFgBACgDQAEgBACgDQACgEAAgEQAAgGgGgEQgFgCgIgDIgNgDIgGgBIgIgEQgFgDgCgEQgDgFgBgGQABgIADgFQADgFAFgEQAFgDAGgCQAHgCAGAAQAKAAAJAFQAJADAEAJIgMAIQgDgFgFgEQgGgDgHAAIgGABQgEAAgDACQgDACgCACQgCADAAADQAAAIAGACQAEADAJADIAOADQALACAGAGQAHAGAAAKQAAAIgEAFQgDAHgFACQgFAEgHACQgHACgHgBQgLAAgJgDg");
	this.shape_110.setTransform(-21.8,-27.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AgRAuQgJgEgHgGQgGgHgEgJQgEgKAAgKQAAgKAEgIQADgKAHgGQAHgHAJgDQAJgFAJAAQAMAAAIAFQAJADAGAHQAGAGADAIQADAJAAAJIAAAFIhRAAQABAIADAGQADAGAFAFQAFAEAGADQAGADAHAAQALAAAIgGQAIgFAEgGIALAIQgJALgLAFQgKAFgMgBQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAGQgDAFAAAGIBBAAQAAgNgIgJQgIgJgQABQgFAAgHACg");
	this.shape_111.setTransform(-32.2,-27.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgFADgCQADgDADAAQAEAAADADQADACAAAFQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_112.setTransform(-40.5,-30);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("Ag0BNIAAiXIAPAAIAAAQIAAAAQADgFAFgDQAEgEAGgCQAFgCAFgBIAJgBQAMAAAJAEQAKADAHAHQAGAHAEAJQAFAJAAAKQAAALgFAJQgEAIgGAHQgHAGgKAEQgJAEgMAAIgJgBQgFgBgFgDQgGgCgEgDQgFgEgDgEIAAAAIAABJgAgPg9QgHADgFAFQgFAFgDAHQgDAGAAAIQAAAIADAHQADAHAFAFQAFAEAHADQAIADAHAAQAIAAAIgDQAHgDAEgEQAFgFADgHQACgHAAgIQAAgIgCgGQgDgHgFgFQgEgFgHgDQgIgDgIAAQgHAAgIADg");
	this.shape_113.setTransform(-49.1,-24.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AgUAuQgKgFgHgKIAMgIQAEAHAGADQAHAFAIAAIAIgBQAFgBADgDQADgBACgDQACgEAAgEQAAgGgGgEQgFgCgIgDIgNgDIgGgBIgJgEQgDgDgDgEQgEgFAAgGQAAgIAEgFQADgFAFgEQAFgDAHgCQAGgCAGAAQAKAAAJAFQAJADAFAJIgNAIQgDgFgFgEQgGgDgHAAIgHABQgDAAgDACQgDACgCACQgBADAAADQAAAIAEACQAFADAJADIAOADQALACAGAGQAHAGAAAKQAAAIgDAFQgDAHgGACQgFAEgHACQgHACgHgBQgLAAgJgDg");
	this.shape_114.setTransform(-66.1,-27.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AgUAuQgKgEgHgGQgGgHgEgJQgEgKAAgKQAAgKAEgIQAEgKAGgGQAHgHAKgDQAKgFAKAAQAMAAAJAFQAKADAHAHQAGAGAEAKQAEAIAAAKQAAAKgEAKQgEAJgGAHQgHAGgKAEQgJADgMAAQgKAAgKgDgAgPghQgGACgFAGQgFAFgCAGQgDAHAAAHQAAAIADAGQACAHAFAGQAFAEAGAEQAHADAIAAQAJAAAGgDQAHgEAFgEQAFgGADgHQACgGAAgIQAAgHgCgHQgDgGgFgFQgFgGgHgCQgGgDgJAAQgIAAgHADg");
	this.shape_115.setTransform(-76.9,-27.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("AgGBMIAAiXIANAAIAACXg");
	this.shape_116.setTransform(-85.6,-30.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#111111").s().p("AgaAwIAAg/IAAgNIgBgRIAOAAIAAASIAAAAIAEgIIAHgGQADgDAFgBQAFgCAHAAQAGAAAEABIgDANIgIgBQgIAAgFADQgFADgEAEQgEAFgCAFIgBAKIAAA0g");
	this.shape_117.setTransform(-96.5,-27.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#111111").s().p("AgTAwQgHgCgEgEQgFgDgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgOAagBQAHAAAHACQAHADAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGABgGgCgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEABIAHAEIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgGAAgGIAAgHIgHAAIgNABg");
	this.shape_118.setTransform(-106.6,-27.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("AgaAwIAAg/IAAgNIgBgRIAOAAIAAASIAAAAIAEgIIAHgGQADgDAFgBQAFgCAHAAQAGAAAEABIgDANIgIgBQgIAAgFADQgFADgEAEQgEAFgCAFQgBAFAAAFIAAA0g");
	this.shape_119.setTransform(-114.4,-27.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#111111").s().p("AgTAwQgHgCgEgEQgFgDgDgFQgDgFAAgHQAAgMAGgGQAHgGAJgDQAJgDAKgBIATAAIAHAAIAAgDQAAgYgZAAQgQAAgNALIgIgJQAOgOAagBQAHAAAHACQAHADAFADQAEAFADAGQADAGAAAJIAAApIABAMIABAJIgNAAIgBgIIgBgHIAAAAQgGAJgJAFQgIADgLAAQgGABgGgCgAAGABQgHAAgHACQgHACgFAEQgGAEAAAHQAAAFACADQACAEAEABIAHAEIAJABQAGgBAGgCQAFgDAEgDQAEgEACgGQABgGAAgGIAAgHIgHAAIgNABg");
	this.shape_120.setTransform(-124.5,-27.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#111111").s().p("Ag0BNIAAiXIAPAAIAAAQIAAAAQADgFAFgDQAFgEAFgCQAEgCAGgBIAJgBQAMAAAKAEQAJADAHAHQAGAHAFAJQADAJAAAKQAAALgDAJQgFAIgGAHQgHAGgJAEQgKAEgMAAIgJgBQgGgBgEgDQgFgCgFgDQgFgEgDgEIAAAAIAABJgAgPg9QgHADgFAFQgGAFgCAHQgDAGAAAIQAAAIADAHQACAHAGAFQAFAEAHADQAIADAHAAQAIAAAIgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgIgDgGQgCgHgFgFQgFgFgGgDQgIgDgIAAQgHAAgIADg");
	this.shape_121.setTransform(-135.7,-24.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#111111").s().p("AgRAuQgJgEgHgGQgGgHgEgJQgEgKAAgKQAAgKAEgIQADgKAHgGQAHgHAJgDQAJgFAJAAQAMAAAIAFQAJADAGAHQAGAGADAIQADAJAAAJIAAAFIhRAAQABAIADAGQADAGAFAFQAFAEAGADQAGADAHAAQALAAAIgGQAIgFAEgGIALAIQgJALgLAFQgKAFgMgBQgKAAgKgDgAgLgiQgGADgFAEQgEAEgDAGQgDAFAAAGIBBAAQAAgNgIgJQgIgJgQABQgFAAgHACg");
	this.shape_122.setTransform(-148.4,-27.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#111111").s().p("AgaBGQgMgFgJgLIANgKQAGAIAIAFQAIAFAMAAQAFAAAGgCQAFgCAFgDQAEgDADgFQAEgFAAgGQAAgIgEgFQgDgFgGgDQgFgDgHgCIgNgFIgOgFQgHgCgFgEQgFgEgDgHQgEgGAAgKQAAgKAFgIQAEgIAGgFQAHgFAJgCQAIgDAJAAQAMAAAKAEQALAEAIAKIgNAKQgJgOgTAAQgGAAgFABQgGACgFADQgEADgDAFQgDAFAAAGQABAKAFAFQAGAGAIADQAIAEAJACQAKADAJADQAIAFAGAHQAGAIAAANQAAAJgFAIQgEAIgHAFQgHAFgJADQgJADgHAAQgOAAgMgFg");
	this.shape_123.setTransform(-160,-30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Estado
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#980D19").s().p("AgZBbIAAiNIAeAAIAACNgAgeg8IAVgdIAoAAIgiAdg");
	this.shape_124.setTransform(-197.1,10.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#980D19").s().p("AggBBQgNgHgHgNQgHgOAAgQIAAhXIAfAAIAABVQABAJADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQAEgHAAgJIAAhVIAfAAIAABXQAAAQgHAOQgHANgNAHQgNAIgUAAQgTAAgNgIg");
	this.shape_125.setTransform(-208.5,13);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#980D19").s().p("AgDBJQgXAAgSgJQgRgJgKgQQgJgQgBgXQABgVAJgQQALgQARgKQARgJAVAAQAVAAAQAKQARAJAKAQQALAQAAAVQAAAKgDAJQgDAKgGAHQgHAIgKAEIAAABIAoAAIAAAYgAgbglQgJAGgGAKQgGAKAAALQAAAMAGAKQAGAKAJAGQAKAGAMAAQALAAAKgGQAJgGAHgKQAFgKABgMQgBgLgFgKQgHgKgJgGQgKgGgLAAQgMAAgKAGg");
	this.shape_126.setTransform(-224.2,12.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#980D19").s().p("AAnBHIgMgeIg2AAIgMAeIgiAAIA8iNIAZAAIA+CNgAAQAPIgQgsIgRAsIAhAAg");
	this.shape_127.setTransform(-240.4,12.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#980D19").s().p("AgYAkIAAhHIAvAAIAAAPIggAAIAAANIAfAAIAAANIgfAAIAAAPIAiAAIAAAPg");
	this.shape_128.setTransform(-198.1,-5.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_129.setTransform(-204.4,-5.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#980D19").s().p("AgHAkIAAg5IgUAAIAAgOIA3AAIAAAOIgUAAIAAA5g");
	this.shape_130.setTransform(-211,-5.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#980D19").s().p("AgOAjQgGgCgFgEIALgNQADADADACQAEACAEAAIAEgBIAFgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgEgBIgHgDIgIgDQgEgBgCgEQgDgEAAgGQAAgHAEgFQAEgGAHgCQAFgDAGAAQAHAAAGACQAFACAFAEIgLALIgGgDIgGgBIgDAAIgFADQAAAAAAABQgBAAAAABQAAAAAAABQAAABgBAAQABADACACIAFADIAIACIAIAEQAEABADAEQABAEABAGQgBAIgDAFQgEAFgGADQgHADgGAAQgHAAgGgDg");
	this.shape_131.setTransform(-216.9,-5.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_132.setTransform(-223.5,-5.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_133.setTransform(-230.2,-5.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_134.setTransform(-236.8,-5.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_135.setTransform(-244.2,-5.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#D7D7D7").s().p("AkpFTQgQAAgMgMQgMgNAAgQIAApTQAAgQAMgNQAMgMAQABIJTAAQARgBALAMQAMANAAAQIAAJTQAAAQgMANQgLAMgRAAg");
	this.shape_136.setTransform(-220.2,5.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#980D19").ss(2,1,1).p("Ah8B9IDCAAQAXAAAQgQQAQgQAAgXIAAjC");
	this.shape_137.setTransform(-194,31.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAXAAIDCAA");
	this.shape_138.setTransform(-246.3,31.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#980D19").ss(2,1,1).p("AB9B9IAAjCQAAgXgQgQQgQgQgXAAIjCAA");
	this.shape_139.setTransform(-194,-21);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjCAAQgXAAgQAQQgQAQAAAXIAADC");
	this.shape_140.setTransform(-246.3,-21);

	this.instance = new lib.Mapadebits31();
	this.instance.parent = this;
	this.instance.setTransform(-267,-45);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#980D19").ss(4,1,1).p("AhVAPIAvAwIB8h9");
	this.shape_141.setTransform(-218.6,8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CBAA0E").s().p("AkpFSQgQAAgNgMQgMgLABgRIAApSQgBgSAMgMQANgLAQgBIJTAAQARABAMALQAMAMgBASIAAJSQABARgMALQgMAMgRAAg");
	this.shape_142.setTransform(-220.2,5.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAWAAIDDAA");
	this.shape_143.setTransform(-246.3,31.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjDAAQgWAAgQAQQgQAQAAAXIAADC");
	this.shape_144.setTransform(-246.3,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124}]}).to({state:[{t:this.instance},{t:this.shape_144},{t:this.shape_139},{t:this.shape_143},{t:this.shape_137},{t:this.shape_142},{t:this.shape_141}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-45,519,100);


(lib.Símbolo14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("signal7");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgIAJQgDgEAAgFQAAgEADgEQADgEAFAAQAGAAADAEQADAEAAAEQAAAFgDAEQgDAEgGAAQgFAAgDgEg");
	this.shape.setTransform(-13.1,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgWA2QgJgFgIgMIANgJQAEAHAHAFQAHAEAIABIAJgBQAEgBAEgDQADgCACgEQACgDAAgFQAAgIgGgFQgFgDgJgCIgMgEIgIgCQgFgCgEgDQgEgDgDgFQgDgFAAgIQAAgJADgHQAEgGAEgEQAGgEAHgCQAHgCAGAAQALAAAJAFQAJAEAFALIgMAKQgEgHgFgFQgGgEgIAAIgHABIgHADQgDACgBAEQgCADAAAEQgBAIAGADQAFAEAJADIAPADQAKADAIAHQAHAJAAAMQAAAIgEAHQgDAHgGAEQgFAEgHACQgIACgHAAQgLAAgLgFg");
	this.shape_1.setTransform(-20.7,43.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgVA5QgGgCgFgFQgFgDgDgHQgDgGAAgIQAAgNAHgJQAGgGAKgEQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHACAFAFQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGABIgPACQgHADgGAEQgFAFAAAJQAAAFACAFQACAEAEACQADADAFABIAIABQAHAAAGgEQAGgCAEgFQAEgFACgHQABgHAAgGIAAgJIgHAAIgOABg");
	this.shape_2.setTransform(-31.4,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgNA3QgKgEgHgIQgIgIgDgLQgEgLAAgNQAAgMAEgLQADgKAIgIQAHgIAKgFQAKgEALAAQALAAAJAFQAKAFAIAKIgMAJQgEgGgGgEQgHgFgJAAQgIAAgHAEQgHADgFAGQgFAGgDAIQgCAJAAAIQAAAKACAIQADAIAFAGQAFAGAHAEQAHADAIAAQAJAAAHgFQAGgEAEgGIAMAKQgIAKgKAEQgJAFgLAAQgLAAgKgEg");
	this.shape_3.setTransform(-41.8,43);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgGBUIAAhwIANAAIAABwgAgGg/QgEgDAAgFQAAgFAEgDQADgDADAAQAEAAADADQAEADAAAFQAAAFgEADQgDADgEABQgDgBgDgDg");
	this.shape_4.setTransform(-50,40.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AAFBJQgEgCgDgEQgEgCgDgHQgCgFAAgJIAAhGIgVAAIAAgPIAVAAIAAgfIAOAAIAAAfIAdAAIAAAPIgdAAIAABBIABAKQABAEACACQACADADAAIAGABIAHgBIAHgDIABAOQgIAFgLAAIgJgBg");
	this.shape_5.setTransform(-56.3,41.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgNA3QgKgEgHgIQgIgIgDgLQgEgLAAgNQAAgMAEgLQADgKAIgIQAHgIAKgFQAKgEALAAQALAAAKAFQAJAFAIAKIgMAJQgEgGgHgEQgGgFgJAAQgIAAgGAEQgIADgFAGQgFAGgDAIQgCAJAAAIQAAAKACAIQADAIAFAGQAFAGAIAEQAGADAIAAQAJAAAGgFQAHgEAEgGIAMAKQgIAKgJAEQgKAFgLAAQgLAAgKgEg");
	this.shape_6.setTransform(-64.9,43);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgVBVQgGgCgFgFQgFgEgDgGQgDgGAAgJQAAgNAHgIQAGgIAKgDQAKgFAKgBIAUAAIAHAAIAAgDQAAgdgaAAQgRAAgNAOIgJgLQAOgRAcABQAIAAAHABQAHADAFAFQAFAFADAHQADAIAAAJIAAAzIABANIABAMIgOAAIgBgJIgBgJIAAAAQgGAKgJAFQgJAGgLAAQgHAAgHgCgAAGAcIgPADQgHADgGAEQgFAFAAAJQAAAFACAEQACAEAEADQADACAFABIAIABQAHAAAGgDQAGgDAEgFQAEgEACgHIABgOIAAgJIgHAAIgOABgAgJgzIAVgiIATAAIgdAig");
	this.shape_7.setTransform(-76.5,40.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgbA6IAAhMIgBgQIAAgUIAOAAIAAAVQACgEADgFIAHgHQADgEAFgCQAGgBAHAAIAKABIgDAQQgCgCgGAAQgIAAgGAEQgFADgEAGQgEAFgCAGIgCAMIAAA/g");
	this.shape_8.setTransform(-84.7,42.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("Ag2BcIAAi0IAPAAIAAATQADgHAFgDIAKgHQAGgDAFgBIAKgBQAMAAAKAFQAKAEAHAHQAIAJAEAKQAEALAAANQAAANgEAKQgEAKgIAIQgHAIgKAFQgKAEgMAAIgKgBIgLgEIgKgHQgFgEgDgGIAABYgAgQhKQgHAEgFAGQgGAGgDAJQgDAHAAAKQAAAJADAJQADAHAGAGQAFAGAHADQAIADAIABQAJgBAHgDQAHgDAFgGQAFgGADgHQADgJAAgJQAAgKgDgHQgDgJgFgGQgFgGgHgEQgHgDgJAAQgIAAgIADg");
	this.shape_9.setTransform(-95.6,46.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgVA2QgKgFgIgMIAMgJQAFAHAHAFQAGAEAJABIAIgBQAFgBAEgDQADgCACgEQACgDAAgFQAAgIgGgFQgFgDgIgCIgOgEIgHgCQgEgCgFgDQgEgDgDgFQgDgFAAgIQAAgJADgHQADgGAFgEQAGgEAHgCQAHgCAGAAQALAAAJAFQAJAEAFALIgMAKQgEgHgFgFQgGgEgIAAIgHABIgGADQgEACgCAEQgBADAAAEQgBAIAGADQAFAEAJADIAPADQAKADAIAHQAHAJAAAMQAAAIgEAHQgDAHgGAEQgFAEgHACQgIACgHAAQgLAAgKgFg");
	this.shape_10.setTransform(-113.3,43.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgVA5QgGgCgFgFQgFgDgDgHQgDgGAAgIQAAgNAHgJQAGgGAKgEQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHACAFAFQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGABIgPACQgHADgGAEQgFAFAAAJQAAAFACAFQACAEAEACQADADAFABIAIABQAHAAAGgEQAGgCAEgFQAEgFACgHIABgNIAAgJIgHAAIgOABg");
	this.shape_11.setTransform(-124,43.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_12.setTransform(-132.1,39.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgVA5QgGgCgFgFQgFgDgDgHQgDgGAAgIQAAgNAHgJQAGgGAKgEQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHACAFAFQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGABIgPACQgHADgGAEQgFAFAAAJQAAAFACAFQACAEAEACQADADAFABIAIABQAHAAAGgEQAGgCAEgFQAEgFACgHIABgNIAAgJIgHAAIgOABg");
	this.shape_13.setTransform(-140.7,43.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AA/A6IAAhBQAAgRgGgJQgFgKgPAAQgIAAgGAEQgFADgEAHQgDAFgCAHQgBAIAAAIIAAA7IgOAAIAAhBQAAgRgFgJQgGgKgPAAIgGABQgEACgFAEQgFAEgEAJQgEAJAAAOIAAA6IgPAAIAAhXIAAgNIgBgMIAQAAIAAARQAFgJAKgGQAJgEAJAAIAJAAQAFABAEADQAFACADAFQADAFADAGQAEgKAKgHQAJgFALAAQATgBAKAMQAJALAAAWIAABGg");
	this.shape_14.setTransform(-155.7,42.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AAeA5IAAg9QAAgSgGgLQgGgKgQABIgFAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgPAAIAAhWIAAgMIgBgNIAPAAIABAKIAAAIIAAAAIAHgIIAIgHIAKgEIAJgCQAUAAAJAMQAJALAAAVIAABGg");
	this.shape_15.setTransform(190.1,19.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgVA2QgKgEgHgIQgHgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAHgHQAHgIAKgFQAKgEALAAQAMAAAKAEQAKAFAIAIQAHAHAEAMQADAKAAAMQAAAMgDAMQgEAKgHAIQgIAIgKAEQgKAFgMAAQgLAAgKgFgAgPgoQgIADgFAGQgEAGgDAIQgCAIgBAJQABAJACAIQADAIAEAHQAFAFAIAEQAHAEAIgBQAJABAHgEQAHgEAFgFQAGgHACgIQADgIAAgJQAAgJgDgIQgCgIgGgGQgFgGgHgDQgHgEgJAAQgIAAgHAEg");
	this.shape_16.setTransform(177.6,19.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgVA2QgLgFgHgMIAMgJQAFAIAHAEQAHAFAIgBIAIgBQAFAAADgDQAEgCACgEQACgEAAgEQAAgJgGgDQgGgEgHgCIgOgEIgHgCQgEgCgEgDQgFgCgDgGQgDgGAAgHQAAgJADgGQADgHAGgEQAFgEAHgCQAHgCAGAAQALAAAJAEQAJAFAFALIgNAJQgDgGgGgEQgFgFgIAAIgGABIgHADQgEACgCADQgCADAAAFQABAIAFAEQAFADAJADIAOAEQALACAHAIQAIAHAAAMQAAAKgEAGQgDAGgGAFQgFAEgIACQgHACgHAAQgLAAgKgFg");
	this.shape_17.setTransform(166.4,19.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgVA2QgKgEgHgIQgIgIgEgKQgDgMAAgMQAAgMADgKQAEgMAIgHQAHgIAKgFQAKgEALAAQAMAAAKAEQAKAFAHAIQAIAHADAMQAFAKAAAMQAAAMgFAMQgDAKgIAIQgHAIgKAEQgKAFgMAAQgLAAgKgFgAgPgoQgHADgGAGQgEAGgDAIQgDAIAAAJQAAAJADAIQADAIAEAHQAGAFAHAEQAHAEAIgBQAJABAHgEQAHgEAGgFQAEgHADgIQADgIAAgJQAAgJgDgIQgDgIgEgGQgGgGgHgDQgHgEgJAAQgIAAgHAEg");
	this.shape_18.setTransform(149.1,19.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AAFBIQgEgBgDgDQgEgDgDgGQgCgGAAgKIAAhGIgVAAIAAgOIAVAAIAAggIAOAAIAAAgIAdAAIAAAOIgdAAIAABCIABAKQABAEACACQACACADABIAGABIAHgBIAHgEIABAQQgIADgLAAIgJgBg");
	this.shape_19.setTransform(139,17.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AAeA5IAAg9QAAgSgGgLQgGgKgQABIgFAAQgFACgGAEQgGAEgEAJQgEAIAAAPIAAA5IgOAAIAAhWIgBgMIAAgNIAOAAIABAKIAAAIIABAAIAFgIIAJgHIAJgEIAKgCQAUAAAJAMQAKALAAAVIAABGg");
	this.shape_20.setTransform(129,19.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgRA2QgKgEgHgIQgIgIgDgKQgFgMAAgMQAAgMAFgKQADgMAIgHQAHgIAJgFQAJgEAKAAQAMAAAJAEQAKAFAFAIQAHAHADALQAEAJAAAMIAAAGIhVAAQABAJACAHQADAIAGAFQAFAGAHACQAGADAGAAQAMAAAJgFQAJgGAEgIIALAKQgJANgLAFQgMAGgNAAQgKAAgJgFgAgLgoQgHACgFAFQgFAGgDAGQgDAGAAAHIBFAAQAAgQgJgKQgJgKgQAAQgFAAgHAEg");
	this.shape_21.setTransform(117,19.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgHBTIAAhvIAOAAIAABvgAgHg+QgDgEAAgFQAAgFADgDQAEgDADAAQAEAAADADQADADAAAFQAAAFgDAEQgDACgEAAQgDAAgEgCg");
	this.shape_22.setTransform(108.3,16.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AA/A5IAAhAQAAgRgGgJQgFgJgPAAQgIAAgGADQgFAEgEAFQgDAGgCAIIgBAOIAAA7IgOAAIAAhAQAAgRgFgJQgGgJgPAAIgGAAQgEACgFAEQgFAEgEAJQgEAIAAAPIAAA5IgPAAIAAhWIAAgNIgBgMIAQAAIAAARQAFgKAKgEQAJgFAJgBIAJABQAFABAEADQAFACADAFQADAEADAIQAEgMAKgGQAJgFALgBQATAAAKAMQAJALAAAVIAABGg");
	this.shape_23.setTransform(96,19.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgGBTIAAhvIANAAIAABvgAgGg+QgDgEgBgFQABgFADgDQADgDADAAQAEAAADADQADADABAFQgBAFgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_24.setTransform(84.3,16.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgHA4IgqhvIASAAIAfBeIAAAAIAiheIAQAAIgqBvg");
	this.shape_25.setTransform(76.3,19.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgVA2QgKgEgHgIQgHgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAHgHQAHgIAKgFQAKgEALAAQAMAAAKAEQAKAFAIAIQAGAHAFAMQADAKAAAMQAAAMgDAMQgFAKgGAIQgIAIgKAEQgKAFgMAAQgLAAgKgFgAgPgoQgIADgFAGQgEAGgDAIQgDAIABAJQgBAJADAIQADAIAEAHQAFAFAIAEQAHAEAIgBQAJABAHgEQAIgEAEgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgEgGgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_26.setTransform(64.5,19.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AA/A5IAAhAQAAgRgGgJQgFgJgPAAQgIAAgGADQgFAEgEAFQgDAGgCAIIgBAOIAAA7IgOAAIAAhAQAAgRgFgJQgGgJgPAAIgGAAQgEACgFAEQgFAEgEAJQgEAIAAAPIAAA5IgPAAIAAhWIAAgNIgBgMIAQAAIAAARQAFgKAKgEQAJgFAJgBIAJABQAFABAEADQAFACADAFQADAEADAIQAEgMAKgGQAJgFALgBQATAAAKAMQAJALAAAVIAABGg");
	this.shape_27.setTransform(48.4,19.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgVA2QgKgEgHgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAFgMAHgHQAHgIAKgFQAKgEALAAQAMAAAKAEQAKAFAHAIQAHAHAFAMQADAKAAAMQAAAMgDAMQgFAKgHAIQgHAIgKAEQgKAFgMAAQgLAAgKgFgAgPgoQgIADgEAGQgFAGgDAIQgDAIABAJQgBAJADAIQADAIAFAHQAEAFAIAEQAHAEAIgBQAJABAHgEQAIgEAEgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgEgGgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_28.setTransform(26.6,19.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_29.setTransform(17.5,15.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgVA2QgKgEgHgIQgIgIgEgKQgDgMAAgMQAAgMADgKQAEgMAIgHQAHgIAKgFQAKgEALAAQAMAAAKAEQAKAFAHAIQAIAHADAMQAFAKAAAMQAAAMgFAMQgDAKgIAIQgHAIgKAEQgKAFgMAAQgLAAgKgFgAgPgoQgHADgFAGQgFAGgDAIQgDAIAAAJQAAAJADAIQADAIAFAHQAFAFAHAEQAHAEAIgBQAJABAHgEQAIgEAFgFQAEgHADgIQADgIAAgJQAAgJgDgIQgDgIgEgGQgFgGgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_30.setTransform(8.3,19.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgVA2QgLgFgHgMIAMgJQAFAIAHAEQAHAFAIgBIAIgBQAFAAADgDQAEgCACgEQACgEAAgEQAAgJgGgDQgGgEgHgCIgOgEIgHgCQgEgCgEgDQgFgCgDgGQgDgGAAgHQAAgJADgGQADgHAGgEQAFgEAHgCQAHgCAGAAQALAAAJAEQAJAFAFALIgNAJQgDgGgGgEQgFgFgIAAIgGABIgHADQgEACgCADQgCADAAAFQABAIAFAEQAFADAJADIAOAEQALACAHAIQAIAHAAAMQAAAKgEAGQgDAGgGAFQgFAEgIACQgHACgHAAQgLAAgKgFg");
	this.shape_31.setTransform(-2.8,19.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AAeA5IAAg9QAAgSgGgLQgGgKgQABIgFAAQgFACgGAEQgFAEgEAJQgFAIAAAPIAAA5IgOAAIAAhWIgBgMIgBgNIAPAAIABAKIAAAIIAAAAIAHgIIAIgHIAKgEIAJgCQATAAAKAMQAJALAAAVIAABGg");
	this.shape_32.setTransform(-19.9,19.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgiAuQgKgLAAgVIAAhHIAPAAIAAA+IABAQQABAHADAFQAEAFAFADQAGACAIAAIAFgBQAFgBAGgEQAFgEAFgJQAEgJAAgPIAAg5IAPAAIAABXIAAAMIABANIgQAAIAAgJIAAgJIgBAAIgGAIIgIAHQgEADgGABIgJACQgUAAgJgMg");
	this.shape_33.setTransform(-32,19.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgSA2QgKgEgHgIQgGgIgFgKQgDgMAAgMQAAgMADgKQAFgMAGgHQAIgIAJgFQAKgEAJAAQAMAAAJAEQAKAFAFAIQAHAHADALQADAJABAMIAAAGIhVAAQAAAJAEAHQADAIAFAFQAFAGAHACQAGADAGAAQANAAAIgFQAJgGADgIIAMAKQgKANgLAFQgLAGgNAAQgKAAgKgFgAgLgoQgHACgFAFQgFAGgCAGQgEAGAAAHIBFAAQAAgQgJgKQgJgKgQAAQgGAAgGAEg");
	this.shape_34.setTransform(-50.2,19.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgVBYQgKgFgIgIQgHgIgEgKQgEgLAAgNQAAgNAEgKQAEgKAHgIQAIgIAKgEQAKgFALAAIAKABQAGABAFADQAGADAEAEQAFAEAEAGIAAAAIAAhYIAPAAIAAC0IgPAAIAAgSIAAAAQgEAFgFAEIgKAHIgLAEIgKABQgLAAgKgEgAgPgHQgIADgFAFQgFAGgCAJQgDAIAAAJQAAAJADAJQACAIAFAGQAFAGAIADQAHAEAIAAQAJAAAHgEQAIgDAFgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgFgFgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_35.setTransform(-63.4,15.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgVA5QgGgCgFgFQgFgEgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHADAFAFQAFAEADAIQADAHAAAKIAAAyIABANIABAMIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPAEQgHACgGAFQgFAEAAAJQAAAGACADQACAEAEADQADADAFAAIAIABQAHAAAGgDQAGgCAEgFQAEgFACgGQABgIAAgHIAAgIIgHAAIgOAAg");
	this.shape_36.setTransform(-81.8,19.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgbA5IAAhLIgBgQIAAgUIAOAAIAAAVQACgFADgEIAHgIQADgCAFgCQAGgDAHAAIAKABIgDAQQgCgBgGAAQgIAAgGADQgFAEgEAFQgEAGgCAGIgCAMIAAA+g");
	this.shape_37.setTransform(-90,19.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgiAuQgJgLAAgVIAAhHIAOAAIAAA+IABAQQACAHADAFQADAFAFADQAGACAIAAIAFgBQAFgBAFgEQAGgEAEgJQAFgJAAgPIAAg5IAOAAIAABXIABAMIABANIgPAAIgBgJIAAgJIAAAAIgHAIIgIAHQgFADgFABIgJACQgTAAgKgMg");
	this.shape_38.setTransform(-100.7,19.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AAFBIQgEgBgDgDQgEgDgCgGQgCgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIANAAIAAAgIAdAAIAAAOIgdAAIAABCIABAKQABAEACACQACACADABIAGABIAIgBIAGgEIACAQQgJADgLAAIgJgBg");
	this.shape_39.setTransform(-110.4,17.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AAeA5IAAg9QAAgSgGgLQgGgKgQABIgFAAQgFACgGAEQgGAEgEAJQgEAIAAAPIAAA5IgPAAIAAhWIAAgMIAAgNIAOAAIABAKIAAAIIABAAIAFgIIAJgHIAJgEIAKgCQAUAAAJAMQAKALAAAVIAABGg");
	this.shape_40.setTransform(-120.3,19.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgHBTIAAhvIAOAAIAABvgAgHg+QgDgEAAgFQAAgFADgDQAEgDADAAQAEAAADADQADADAAAFQAAAFgDAEQgDACgEAAQgDAAgEgCg");
	this.shape_41.setTransform(-128.9,16.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgNA3QgKgEgHgIQgIgIgDgLQgEgLAAgNQAAgMAEgLQADgKAIgIQAHgIAKgFQAKgEALAAQALAAAKAFQAJAFAIAKIgMAJQgEgGgHgEQgGgFgJAAQgIAAgGAEQgIADgFAGQgFAGgDAIQgCAJAAAIQAAAKACAIQADAIAFAGQAFAGAIAEQAGADAIAAQAJAAAGgFQAHgEAEgGIAMAKQgIAKgJAEQgKAFgLAAQgLAAgKgEg");
	this.shape_42.setTransform(-136.4,19.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgVA5QgGgCgFgFQgFgEgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHADAFAFQAFAEADAIQADAHAAAKIAAAyIABANIABAMIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPAEQgHACgGAFQgFAEAAAJQAAAGACADQACAEAEADQADADAFAAIAIABQAHAAAGgDQAGgCAEgFQAEgFACgGIABgPIAAgIIgHAAIgOAAg");
	this.shape_43.setTransform(-154.2,19.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_44.setTransform(-162.2,15.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgSA2QgJgEgHgIQgHgIgFgKQgDgMAAgMQAAgMADgLQAFgKAHgJQAGgHAKgEQAKgFAKAAQALAAAJAFQAJAEAHAHQAGAIADAKQADAKAAAMIAAAGIhUAAQABAJACAHQADAHAGAGQAFAGAGADQAHADAHAAQAMAAAIgHQAIgFAEgIIAMAKQgJANgMAGQgKAFgNAAQgLAAgKgFgAgMgpQgGADgFAFQgFAFgDAGQgCAIAAAGIBEAAQAAgQgJgKQgJgKgPAAQgGAAgIADg");
	this.shape_45.setTransform(234,-4.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgVBYQgKgFgIgIQgHgIgEgKQgEgLAAgNQAAgNAEgKQAEgKAHgIQAIgIAKgEQAKgFALAAIAKABQAGABAFADQAGADAEAEQAFAEAEAGIAAAAIAAhYIAPAAIAAC0IgPAAIAAgSIAAAAQgEAFgFAEIgKAHIgLAEIgKABQgLAAgKgEgAgPgHQgIADgFAFQgFAGgCAJQgDAIAAAJQAAAJADAJQACAIAFAGQAFAGAIADQAHAEAIAAQAJAAAHgEQAIgDAFgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgFgFgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_46.setTransform(220.9,-7.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgGQgDgGAAgIQAAgOAHgIQAGgGAKgEQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHACAFAFQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAFAAAJQAAAGACAEQACAEAEACQADADAFABIAIABQAHAAAGgDQAGgDAEgFQAEgFACgHIABgNIAAgJIgHAAIgOAAg");
	this.shape_47.setTransform(202.4,-4.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AA/A6IAAhBQAAgRgGgJQgFgKgPAAQgIAAgGAEQgFAEgEAGQgDAFgCAHIgBAPIAAA8IgOAAIAAhBQAAgRgFgJQgGgKgPAAIgGACQgEAAgFAFQgFAEgEAJQgEAJAAAOIAAA6IgPAAIAAhXIAAgMIgBgNIAQAAIAAARQAFgJAKgGQAJgEAJAAIAJAAQAFABAEADQAFACADAFQADAFADAGQAEgKAKgGQAJgHALABQATgBAKALQAJAMAAAWIAABGg");
	this.shape_48.setTransform(187.4,-4.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgHBUIAAhwIAOAAIAABwgAgHg/QgDgDAAgFQAAgFADgDQAEgDADgBQAEABADADQAEADgBAFQABAFgEADQgDAEgEAAQgDAAgEgEg");
	this.shape_49.setTransform(175.7,-7.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgNA3QgKgEgHgIQgIgIgDgLQgEgLAAgNQAAgMAEgLQADgKAIgIQAHgIAKgFQAKgEALAAQALAAAJAFQAKAFAIAKIgMAJQgEgGgGgEQgHgFgJAAQgIAAgHAEQgHADgFAGQgFAGgDAIQgCAJAAAIQAAAKACAIQADAIAFAGQAFAGAHAEQAHADAIAAQAJAAAHgFQAGgEAEgGIAMAKQgIAKgKAEQgJAFgLAAQgLAAgKgEg");
	this.shape_50.setTransform(168.1,-4.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AAeA6IAAg9QAAgUgGgJQgGgLgQAAIgFACQgFAAgGAFQgFAEgEAJQgFAJAAAOIAAA6IgOAAIAAhXIgBgLIAAgOIAOAAIABAJIAAAJIAAAAIAGgJIAJgGIAJgEIAKgBQATgBAKALQAKAMgBAWIAABGg");
	this.shape_51.setTransform(156.2,-4.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgRA2QgLgEgGgIQgHgIgFgKQgEgMABgMQgBgMAEgLQAFgKAHgJQAGgHAKgEQAKgFAKAAQALAAAJAFQAJAEAHAHQAGAIADAKQAEAKgBAMIAAAGIhUAAQAAAJADAHQADAHAGAGQAFAGAGADQAHADAHAAQAMAAAIgHQAIgFAFgIIALAKQgKANgKAGQgLAFgNAAQgLAAgJgFgAgMgpQgGADgFAFQgFAFgDAGQgCAIAAAGIBEAAQAAgQgJgKQgJgKgPAAQgHAAgHADg");
	this.shape_52.setTransform(144.1,-4.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgbA6IAAhNIgBgPIAAgUIAOAAIAAAVQACgEADgEIAHgIQADgEAFgCQAGgBAHAAIAKAAIgDARQgCgCgGAAQgIAAgGADQgFAEgEAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_53.setTransform(129.2,-4.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgVA2QgKgEgHgIQgIgIgEgKQgDgMAAgMQAAgMADgLQAEgKAIgJQAHgHAKgEQAKgFALAAQAMAAAKAFQAKAEAHAHQAIAJADAKQAFALAAAMQAAAMgFAMQgDAKgIAIQgHAIgKAEQgKAFgMAAQgLAAgKgFgAgPgpQgHAEgFAGQgFAGgDAIQgDAJAAAIQAAAJADAJQADAHAFAGQAFAHAHADQAHADAIABQAJgBAHgDQAIgDAFgHQAEgGADgHQADgJAAgJQAAgIgDgJQgDgIgEgGQgFgGgIgEQgHgDgJAAQgIAAgHADg");
	this.shape_54.setTransform(118.1,-4.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("Ag2BcIAAi0IAPAAIAAATQADgHAFgDIAKgHQAGgDAFgBIAKgBQAMAAAKAFQAKAEAHAHQAIAJAEAKQAEALAAANQAAAMgEAMQgEAJgIAIQgHAIgKAEQgKAFgMAAIgKgBIgLgEIgKgHQgFgEgDgGIAABYgAgQhKQgHAEgFAGQgGAGgDAIQgDAJAAAJQAAAJADAJQADAHAGAGQAFAGAHADQAIADAIABQAJgBAHgDQAHgDAFgGQAFgGADgHQADgJAAgJQAAgJgDgJQgDgIgFgGQgFgGgHgEQgHgDgJAAQgIAAgIADg");
	this.shape_55.setTransform(105.2,-1.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgGQgDgGAAgIQAAgOAHgIQAGgGAKgEQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHACAFAFQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAFAAAJQAAAGACAEQACAEAEACQADADAFABIAIABQAHAAAGgDQAGgDAEgFQAEgFACgHIABgNIAAgJIgHAAIgOAAg");
	this.shape_56.setTransform(86.1,-4.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_57.setTransform(78,-8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgbA6IAAhNIgBgPIAAgUIAOAAIAAAVQACgEADgEIAHgIQADgEAFgCQAGgBAHAAIAKAAIgDARQgCgCgGAAQgIAAgGADQgFAEgEAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_58.setTransform(72.7,-4.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgGQgDgGAAgIQAAgOAHgIQAGgGAKgEQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHACAFAFQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAFAAAJQAAAGACAEQACAEAEACQADADAFABIAIABQAHAAAGgDQAGgDAEgFQAEgFACgHQABgHAAgGIAAgJIgHAAIgOAAg");
	this.shape_59.setTransform(62.2,-4.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AAFBJQgFgCgCgEQgEgCgDgHQgCgFAAgJIAAhGIgVAAIAAgPIAVAAIAAgfIAOAAIAAAfIAdAAIAAAPIgdAAIAABBIABAKQABAEACACQACADADAAIAGABIAHgBIAHgDIABAPQgIADgLABIgJgBg");
	this.shape_60.setTransform(53.1,-6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AAeA6IAAg9QAAgUgGgJQgGgLgQAAIgFACQgFAAgGAFQgFAEgEAJQgFAJAAAOIAAA6IgOAAIAAhXIgBgLIAAgOIAOAAIABAJIAAAJIAAAAIAHgJIAIgGIAJgEIAKgBQATgBAKALQAKAMgBAWIAABGg");
	this.shape_61.setTransform(43.2,-4.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgGQgDgGAAgIQAAgOAHgIQAGgGAKgEQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHACAFAFQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAFAAAJQAAAGACAEQACAEAEACQADADAFABIAIABQAHAAAGgDQAGgDAEgFQAEgFACgHIABgNIAAgJIgHAAIgOAAg");
	this.shape_62.setTransform(31.3,-4.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgHA4IgqhvIARAAIAgBeIABAAIAhheIAQAAIgqBvg");
	this.shape_63.setTransform(20.6,-4.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgSA2QgKgEgHgIQgGgIgEgKQgEgMAAgMQAAgMAEgLQAEgKAGgJQAIgHAJgEQAKgFAJAAQAMAAAJAFQAKAEAFAHQAHAIADAKQADAKABAMIAAAGIhVAAQAAAJAEAHQADAHAFAGQAFAGAHADQAGADAGAAQANAAAIgHQAJgFADgIIAMAKQgKANgLAGQgLAFgNAAQgKAAgKgFgAgLgpQgHADgFAFQgFAFgCAGQgEAIAAAGIBFAAQAAgQgJgKQgJgKgQAAQgGAAgGADg");
	this.shape_64.setTransform(9.2,-4.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_65.setTransform(0.4,-8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgVA2QgKgEgHgIQgIgIgDgKQgEgMgBgMQABgMAEgLQADgKAIgJQAHgHAKgEQAKgFALAAQAMAAAKAFQAKAEAIAHQAGAJAEAKQAEALABAMQgBAMgEAMQgEAKgGAIQgIAIgKAEQgKAFgMAAQgLAAgKgFgAgPgpQgHAEgGAGQgEAGgDAIQgCAJgBAIQABAJACAJQADAHAEAGQAGAHAHADQAHADAIABQAJgBAHgDQAHgDAGgHQAFgGACgHQADgJAAgJQAAgIgDgJQgCgIgFgGQgGgGgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_66.setTransform(-14.8,-4.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgPAcIAOg3IARAAIgRA3g");
	this.shape_67.setTransform(-30.4,1.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgGQgDgGAAgIQAAgOAHgIQAGgGAKgEQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHACAFAFQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAFAAAJQAAAGACAEQACAEAEACQADADAFABIAIABQAHAAAGgDQAGgDAEgFQAEgFACgHIABgNIAAgJIgHAAIgOAAg");
	this.shape_68.setTransform(-39.5,-4.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgVBYQgKgFgIgIQgHgIgEgKQgEgLAAgNQAAgNAEgKQAEgKAHgIQAIgIAKgEQAKgFALAAIAKABQAGABAFADQAGADAEAEQAFAEAEAGIAAAAIAAhYIAPAAIAAC0IgPAAIAAgSIAAAAQgEAFgFAEIgKAHIgLAEIgKABQgLAAgKgEgAgPgHQgIADgFAFQgFAGgCAJQgDAIAAAJQAAAJADAJQACAIAFAGQAFAGAIADQAHAEAIAAQAJAAAHgEQAIgDAFgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgFgFgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_69.setTransform(-52,-7.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgGQgDgGAAgIQAAgOAHgIQAGgGAKgEQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHACAFAFQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAFAAAJQAAAGACAEQACAEAEACQADADAFABIAIABQAHAAAGgDQAGgDAEgFQAEgFACgHIABgNIAAgJIgHAAIgOAAg");
	this.shape_70.setTransform(-64.3,-4.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgVA2QgLgFgHgMIAMgJQAFAIAHAEQAHAEAIABIAIgBQAFgBADgDQAEgCACgEQACgDAAgFQAAgIgGgFQgGgDgHgCIgOgEIgHgCQgEgCgEgCQgFgDgDgGQgDgFAAgJQAAgIADgHQADgGAGgEQAFgEAHgCQAHgCAGAAQALAAAJAFQAJAEAFALIgNAKQgDgHgGgFQgFgEgIAAIgGABIgHADQgEACgCADQgCADAAAFQABAIAFADQAFAEAJADIAOADQALADAHAHQAIAJAAAMQAAAIgEAHQgDAGgGAFQgFAEgIACQgHACgHAAQgLAAgKgFg");
	this.shape_71.setTransform(-74.3,-4.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgRA2QgLgEgGgIQgIgIgDgKQgFgMAAgMQAAgMAFgLQADgKAIgJQAHgHAJgEQAJgFAKAAQAMAAAJAFQAJAEAGAHQAHAIADAKQADAKAAAMIAAAGIhUAAQAAAJADAHQAEAHAFAGQAFAGAHADQAGADAGAAQAMAAAJgHQAIgFAFgIIALAKQgJANgLAGQgMAFgNAAQgKAAgJgFgAgMgpQgGADgFAFQgFAFgDAGQgDAIAAAGIBFAAQAAgQgJgKQgJgKgQAAQgGAAgHADg");
	this.shape_72.setTransform(-85.2,-4.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("Ag2BcIAAi0IAPAAIAAATQADgHAFgDIAKgHQAGgDAFgBIAKgBQAMAAAKAFQAKAEAHAHQAIAJAEAKQAEALAAANQAAAMgEAMQgEAJgIAIQgHAIgKAEQgKAFgMAAIgKgBIgLgEIgKgHQgFgEgDgGIAABYgAgQhKQgHAEgFAGQgGAGgDAIQgDAJAAAJQAAAJADAJQADAHAGAGQAFAGAHADQAIADAIABQAJgBAHgDQAHgDAFgGQAFgGADgHQADgJAAgJQAAgJgDgJQgDgIgFgGQgFgGgHgEQgHgDgJAAQgIAAgIADg");
	this.shape_73.setTransform(-97.6,-1.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgGQgDgGAAgIQAAgOAHgIQAGgGAKgEQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHACAFAFQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAFAAAJQAAAGACAEQACAEAEACQADADAFABIAIABQAHAAAGgDQAGgDAEgFQAEgFACgHIABgNIAAgJIgHAAIgOAAg");
	this.shape_74.setTransform(-116.8,-4.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgcBRQgMgGgKgLIAKgNQAHAKAKAFQAKAGANAAQAKAAAIgEQAHgDAFgGQAFgGACgIQACgIAAgJIAAgUIgBAAQgGALgLAFQgJAFgMAAQgKAAgKgFQgKgEgHgHQgHgIgFgKQgEgKAAgMQAAgNAEgKQAFgLAHgIQAGgIAKgEQAJgEAMAAIAJAAQAFABAFADIAKAGQAFAFAEAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgGAIQgHAJgKAGQgMAFgPAAQgQAAgMgFgAgOhEQgHAEgFAGQgFAGgDAHQgCAIAAAJQAAAJACAIQADAIAFAEQAFAGAHAEQAHADAHAAQAJAAAHgDQAHgDAFgFQAFgFADgIQADgIAAgKQAAgJgCgIQgDgHgFgGQgFgGgHgEQgHgDgKAAQgHAAgHADg");
	this.shape_75.setTransform(-129.2,-1.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AgbA6IAAhNIgBgPIAAgUIAOAAIAAAVQACgEADgEIAHgIQADgEAFgCQAGgBAHAAIAKAAIgDARQgCgCgGAAQgIAAgGADQgFAEgEAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_76.setTransform(-138.3,-4.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgGQgDgGAAgIQAAgOAHgIQAGgGAKgEQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHACAFAFQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAFAAAJQAAAGACAEQACAEAEACQADADAFABIAIABQAHAAAGgDQAGgDAEgFQAEgFACgHQABgHAAgGIAAgJIgHAAIgOAAg");
	this.shape_77.setTransform(-148.9,-4.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgNA3QgKgEgIgIQgGgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAGgIQAIgIAKgFQAKgEAMAAQAKAAAKAFQAKAFAHAKIgMAJQgDgGgIgEQgGgFgIAAQgJAAgGAEQgIADgFAGQgFAGgCAIQgDAJAAAIQAAAKADAIQACAIAFAGQAFAGAIAEQAGADAJAAQAIAAAGgFQAIgEADgGIAMAKQgHAKgKAEQgKAFgKAAQgMAAgKgEg");
	this.shape_78.setTransform(-159.2,-4.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgVA5QgGgCgFgFQgFgEgDgGQgDgGAAgIQAAgNAHgJQAGgHAKgDQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHADAFAEQAFAFADAIQADAIAAAJIAAAyIABANIABAMIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGABIgPADQgHACgGAFQgFAEAAAJQAAAFACAEQACAFAEACQADADAFAAIAIABQAHAAAGgDQAGgCAEgFQAEgFACgHIABgOIAAgIIgHAAIgOABg");
	this.shape_79.setTransform(222.3,-28.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AAeA5IAAg9QAAgSgGgLQgGgKgQAAIgFABQgFACgGAEQgFAFgEAIQgFAIAAAPIAAA5IgOAAIAAhWIgBgMIAAgNIAOAAIABAKIAAAIIAAAAIAGgIIAJgHIAJgEIAKgCQATAAAKAMQAKALgBAVIAABGg");
	this.shape_80.setTransform(210.6,-28.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgiAuQgKgLABgVIAAhHIAOAAIAAA+IABAQQACAHADAFQADAFAFADQAGACAIAAIAFgBQAFgBAFgEQAGgEAEgJQAFgJAAgPIAAg5IAOAAIAABXIABAMIAAANIgOAAIgBgJIAAgJIAAAAIgHAIIgIAHQgFADgFABIgJACQgTAAgKgMg");
	this.shape_81.setTransform(198.5,-28.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgRA3QgLgFgGgIQgIgIgDgLQgFgLAAgMQAAgMAFgKQADgMAIgHQAGgIAKgFQAKgEAKAAQALAAAJAEQAJAFAHAIQAGAHADALQAEAKgBALIAAAGIhUAAQAAAJADAHQADAHAGAGQAFAFAGADQAHADAGAAQAMAAAJgFQAIgGAFgIIALAKQgKANgKAFQgLAGgOAAQgKAAgJgEgAgMgoQgGACgFAFQgFAGgDAFQgCAIAAAGIBEAAQAAgQgJgKQgJgKgPAAQgHAAgHAEg");
	this.shape_82.setTransform(180.2,-28.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AAeA5IAAg9QAAgSgGgLQgGgKgQAAIgFABQgFACgGAEQgFAFgEAIQgFAIAAAPIAAA5IgOAAIAAhWIgBgMIAAgNIAOAAIABAKIAAAIIAAAAIAGgIIAJgHIAJgEIAKgCQATAAAKAMQAKALgBAVIAABGg");
	this.shape_83.setTransform(167.9,-28.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgSA3QgJgFgIgIQgGgIgEgLQgEgLgBgMQABgMAEgKQAEgMAGgHQAIgIAJgFQAJgEAKAAQAMAAAJAEQAKAFAFAIQAHAHADALQAEAKAAALIAAAGIhVAAQAAAJAEAHQADAHAFAGQAFAFAHADQAGADAGAAQAMAAAJgFQAJgGAEgIIALAKQgJANgMAFQgLAGgNAAQgKAAgKgEgAgLgoQgHACgFAFQgFAGgCAFQgEAIAAAGIBFAAQAAgQgJgKQgJgKgQAAQgFAAgHAEg");
	this.shape_84.setTransform(155.8,-28.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AgGBTIAAhvIANAAIAABvgAgGg+QgEgEAAgFQAAgFAEgDQADgEADABQAEgBADAEQAEADAAAFQAAAFgEAEQgDACgEAAQgDAAgDgCg");
	this.shape_85.setTransform(147.1,-31.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AAFBIQgEgBgDgDQgEgEgDgFQgCgGAAgKIAAhGIgVAAIAAgOIAVAAIAAggIAOAAIAAAgIAeAAIAAAOIgeAAIAABCIABAKQABAEACACQACACADABIAGABIAHgBIAIgEIAAAPQgIAEgLABIgJgCg");
	this.shape_86.setTransform(140.8,-29.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgWA2QgKgFgHgMIANgJQAEAIAHAEQAHAFAIgBIAJgBQAEAAAEgDQADgCACgEQACgDAAgFQAAgJgFgEQgHgDgIgCIgMgEIgIgCQgFgCgDgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAFgEAHgCQAGgCAHAAQALAAAJAEQAJAFAFALIgNAJQgDgGgGgFQgFgEgIAAIgHABIgHADQgCACgCAEQgCADgBAEQAAAIAGAEQAFADAJADIAOAEQAMACAGAHQAIAJAAALQAAAKgDAGQgEAGgFAFQgGAEgIACQgGACgIAAQgLAAgLgFg");
	this.shape_87.setTransform(132.5,-28.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgVA3QgKgFgHgIQgIgIgEgLQgDgLAAgMQAAgMADgKQAEgMAIgHQAHgIAKgFQAKgEALAAQAMAAAKAEQAKAFAHAIQAIAHADAMQAFAKAAAMQAAAMgFALQgDALgIAIQgHAIgKAFQgKAEgMAAQgLAAgKgEgAgPgoQgHADgFAGQgFAGgDAJQgDAHAAAJQAAAJADAIQADAJAFAFQAFAGAHAEQAHADAIAAQAJAAAHgDQAIgEAFgGQAEgFADgJQADgIAAgJQAAgJgDgHQgDgJgEgGQgFgGgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_88.setTransform(121.3,-28.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgWA2QgJgFgIgMIANgJQAEAIAHAEQAHAFAIgBIAJgBQAEAAAEgDQADgCACgEQACgDAAgFQAAgJgFgEQgHgDgIgCIgMgEIgIgCQgFgCgEgDQgEgDgDgFQgDgGAAgHQAAgJADgHQAEgGAEgEQAGgEAHgCQAGgCAHAAQALAAAJAEQAJAFAFALIgNAJQgDgGgGgFQgFgEgIAAIgHABIgHADQgDACgBAEQgCADAAAEQgBAIAGAEQAFADAJADIAOAEQAMACAGAHQAIAJAAALQAAAKgDAGQgEAGgFAFQgGAEgIACQgGACgIAAQgLAAgLgFg");
	this.shape_89.setTransform(110.1,-28.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AgSA3QgJgFgIgIQgGgIgEgLQgEgLgBgMQABgMAEgKQAEgMAGgHQAIgIAJgFQAJgEAKAAQAMAAAJAEQAKAFAFAIQAHAHADALQAEAKAAALIAAAGIhVAAQAAAJAEAHQADAHAFAGQAFAFAHADQAGADAGAAQAMAAAJgFQAJgGADgIIAMAKQgJANgMAFQgLAGgNAAQgKAAgKgEgAgLgoQgHACgFAFQgFAGgCAFQgEAIAAAGIBFAAQAAgQgJgKQgJgKgQAAQgFAAgHAEg");
	this.shape_90.setTransform(93.2,-28.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgWA2QgKgFgHgMIANgJQAEAIAHAEQAGAFAJgBIAJgBQAEAAADgDQAEgCACgEQACgDAAgFQAAgJgFgEQgHgDgIgCIgMgEIgIgCQgEgCgEgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAFgEAHgCQAGgCAHAAQALAAAJAEQAJAFAFALIgNAJQgDgGgGgFQgFgEgIAAIgGABIgIADQgCACgCAEQgDADAAAEQAAAIAGAEQAFADAJADIAOAEQAMACAGAHQAIAJAAALQAAAKgDAGQgEAGgFAFQgGAEgIACQgGACgIAAQgLAAgLgFg");
	this.shape_91.setTransform(82.5,-28.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgWA2QgKgFgHgMIAMgJQAFAIAHAEQAHAFAIgBIAIgBQAFAAADgDQAEgCACgEQACgDAAgFQAAgJgFgEQgGgDgIgCIgOgEIgHgCQgEgCgEgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAFgEAHgCQAHgCAGAAQALAAAJAEQAJAFAFALIgNAJQgDgGgGgFQgFgEgIAAIgGABIgIADQgCACgDAEQgCADAAAEQABAIAFAEQAFADAJADIAOAEQAMACAGAHQAIAJAAALQAAAKgDAGQgEAGgFAFQgGAEgIACQgGACgIAAQgLAAgLgFg");
	this.shape_92.setTransform(67.1,-28.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgVA5QgGgCgFgFQgFgEgDgGQgDgGAAgIQAAgNAHgJQAGgHAKgDQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHADAFAEQAFAFADAIQADAIAAAJIAAAyIABANIABAMIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGABIgPADQgHACgGAFQgFAEAAAJQAAAFACAEQACAFAEACQADADAFAAIAIABQAHAAAGgDQAGgCAEgFQAEgFACgHIABgOIAAgIIgHAAIgOABg");
	this.shape_93.setTransform(56.4,-28.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AgbA5IAAhLIgBgQIAAgUIAOAAIAAAVQACgFADgEIAHgIQADgCAFgCQAGgCAHgBIAKACIgDAPQgCgBgGAAQgIAAgGAEQgFADgEAGQgEAFgCAGIgCAMIAAA+g");
	this.shape_94.setTransform(48.2,-28.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AAFBIQgFgBgCgDQgEgEgCgFQgCgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIANAAIAAAgIAeAAIAAAOIgeAAIAABCIABAKQABAEACACQACACADABIAGABIAIgBIAHgEIABAPQgJAEgLABIgJgCg");
	this.shape_95.setTransform(40,-29.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AAeA5IAAg9QAAgSgGgLQgGgKgQAAIgFABQgFACgGAEQgFAFgFAIQgEAIAAAPIAAA5IgPAAIAAhWIAAgMIgBgNIAPAAIABAKIAAAIIABAAIAFgIIAJgHIAJgEIAKgCQAUAAAJAMQAKALAAAVIAABGg");
	this.shape_96.setTransform(30.1,-28.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgSA3QgJgFgIgIQgGgIgEgLQgEgLgBgMQABgMAEgKQAEgMAGgHQAIgIAJgFQAJgEAKAAQAMAAAJAEQAKAFAFAIQAHAHADALQAEAKAAALIAAAGIhVAAQAAAJAEAHQADAHAFAGQAFAFAHADQAGADAGAAQAMAAAJgFQAJgGAEgIIALAKQgJANgMAFQgLAGgNAAQgKAAgKgEgAgLgoQgHACgFAFQgFAGgCAFQgEAIAAAGIBFAAQAAgQgJgKQgJgKgQAAQgFAAgHAEg");
	this.shape_97.setTransform(18.1,-28.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("AgGBTIAAhvIANAAIAABvgAgGg+QgDgEAAgFQAAgFADgDQADgEADABQAEgBADAEQADADAAAFQAAAFgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_98.setTransform(9.3,-31.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AA/A5IAAhAQAAgRgGgJQgFgKgPAAQgIABgGADQgFADgEAGQgDAGgCAIIgBAPIAAA6IgOAAIAAhAQAAgRgFgJQgGgKgPAAIgGABQgEACgFAEQgFAFgEAIQgEAIAAAPIAAA5IgPAAIAAhWIAAgNIgBgMIAQAAIAAARQAFgKAKgFQAJgEAJgBIAJABQAFABAEADQAFACADAFQADAFADAGQAEgKAKgHQAJgFALgBQATAAAKAMQAJALAAAVIAABGg");
	this.shape_99.setTransform(-2.9,-28.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AgVA3QgKgFgHgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAFgMAHgHQAHgIAKgFQAKgEALAAQAMAAAKAEQAKAFAHAIQAHAHAFAMQADAKAAAMQAAAMgDALQgFALgHAIQgHAIgKAFQgKAEgMAAQgLAAgKgEgAgPgoQgIADgEAGQgFAGgDAJQgDAHABAJQgBAJADAIQADAJAFAFQAEAGAIAEQAHADAIAAQAJAAAHgDQAIgEAEgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgEgGgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_100.setTransform(-24.7,-28.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("Ag2BcIAAi1IAPAAIAAATQADgFAFgFIAKgGQAGgDAFgBIAKgBQAMAAAKAEQAKAFAHAIQAIAHAEAMQAEAKAAANQAAAMgEALQgEAKgIAIQgHAIgKAFQgKAEgMAAIgKgBIgLgEIgKgHQgFgEgDgFIAABXgAgQhJQgHADgFAGQgGAGgDAJQgDAHAAAKQAAAJADAIQADAJAGAFQAFAFAHAEQAIADAIAAQAJAAAHgDQAHgEAFgFQAFgFADgJQADgIAAgJQAAgKgDgHQgDgJgFgGQgFgGgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_101.setTransform(-37.5,-25);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AgbA5IAAhLIgBgQIAAgUIAOAAIAAAVQACgFADgEIAHgIQADgCAFgCQAGgCAHgBIAKACIgDAPQgCgBgGAAQgIAAgGAEQgFADgEAGQgEAFgCAGIgCAMIAAA+g");
	this.shape_102.setTransform(-47.3,-28.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgSA3QgJgFgIgIQgGgIgEgLQgEgLgBgMQABgMAEgKQAEgMAGgHQAIgIAJgFQAJgEAKAAQAMAAAJAEQAKAFAFAIQAHAHADALQAEAKAAALIAAAGIhVAAQAAAJAEAHQADAHAFAGQAFAFAHADQAGADAGAAQAMAAAJgFQAJgGADgIIAMAKQgJANgMAFQgLAGgNAAQgKAAgKgEgAgLgoQgHACgFAFQgFAGgCAFQgEAIAAAGIBFAAQAAgQgJgKQgJgKgQAAQgFAAgHAEg");
	this.shape_103.setTransform(-58,-28.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AgiAuQgKgLAAgVIAAhHIAPAAIAAA+IABAQQABAHADAFQAEAFAFADQAGACAIAAIAFgBQAFgBAGgEQAFgEAFgJQAEgJAAgPIAAg5IAPAAIAABXIAAAMIABANIgQAAIAAgJIAAgJIgBAAIgGAIIgIAHQgEADgGABIgJACQgUAAgJgMg");
	this.shape_104.setTransform(-70.2,-28.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AgNA3QgKgEgIgIQgGgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAGgIQAIgIAKgFQAKgEAMAAQAKAAAKAFQAKAFAHAKIgMAJQgDgGgIgEQgGgFgIAAQgJAAgGAEQgIADgFAGQgFAGgCAIQgDAJAAAIQAAAKADAIQACAIAFAGQAFAGAIAEQAGADAJAAQAIAAAGgFQAIgEADgGIAMAKQgHAKgKAEQgKAFgKAAQgMAAgKgEg");
	this.shape_105.setTransform(-81.2,-28.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_106.setTransform(-95.6,-31.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AgSA3QgJgFgIgIQgGgIgEgLQgEgLgBgMQABgMAEgKQAEgMAGgHQAIgIAJgFQAJgEAKAAQAMAAAJAEQAKAFAFAIQAHAHADALQAEAKAAALIAAAGIhVAAQAAAJAEAHQADAHAFAGQAFAFAHADQAGADAGAAQAMAAAJgFQAJgGADgIIAMAKQgJANgMAFQgLAGgNAAQgKAAgKgEgAgLgoQgHACgFAFQgFAGgCAFQgEAIAAAGIBFAAQAAgQgJgKQgJgKgQAAQgFAAgHAEg");
	this.shape_107.setTransform(-104.3,-28.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgbA5IAAhLIgBgQIAAgUIAOAAIAAAVQACgFADgEIAHgIQADgCAFgCQAGgCAHgBIAKACIgDAPQgCgBgGAAQgIAAgGAEQgFADgEAGQgEAFgCAGIgCAMIAAA+g");
	this.shape_108.setTransform(-119.3,-28.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AgVA5QgGgCgFgFQgFgEgDgGQgDgGAAgIQAAgNAHgJQAGgHAKgDQAKgEAKgBIAUgBIAHAAIAAgDQAAgdgaAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHADAFAEQAFAFADAIQADAIAAAJIAAAyIABANIABAMIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGABIgPADQgHACgGAFQgFAEAAAJQAAAFACAEQACAFAEACQADADAFAAIAIABQAHAAAGgDQAGgCAEgFQAEgFACgHIABgOIAAgIIgHAAIgOABg");
	this.shape_109.setTransform(-129.8,-28.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgbA5IAAhLIgBgQIAAgUIAOAAIAAAVQACgFADgEIAHgIQADgCAFgCQAGgCAHgBIAKACIgDAPQgCgBgGAAQgIAAgGAEQgFADgEAGQgEAFgCAGIgCAMIAAA+g");
	this.shape_110.setTransform(-137.9,-28.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AgGBTIAAhvIANAAIAABvgAgGg+QgDgEAAgFQAAgFADgDQADgEADABQAEgBADAEQADADABAFQgBAFgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_111.setTransform(-145.1,-31.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AgUBSQgPgGgLgMQgLgMgGgQQgGgQAAgUQAAgSAGgRQAGgQALgMQALgMAPgHQAPgGAQgBQATABANAFQAOAGALAMIgNAMQgHgJgMgFQgKgFgPgBQgOAAgLAHQgNAFgIALQgIAKgEANQgFAOAAANQAAAPAFANQAEANAIAKQAIAKANAHQALAFAOAAQAMAAALgDQALgDAJgGIAAg4IglAAIAAgPIA1AAIAABSQgNAIgQAFQgQAFgOgBQgQABgPgIg");
	this.shape_112.setTransform(-156.8,-31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Estado
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#980D19").s().p("AgZBbIAAiNIAeAAIAACNgAgeg8IAVgdIAoAAIgiAdg");
	this.shape_113.setTransform(-197.1,10.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#980D19").s().p("AggBBQgNgHgHgNQgHgOAAgQIAAhXIAfAAIAABVQABAJADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQAEgHAAgJIAAhVIAfAAIAABXQAAAQgHAOQgHANgNAHQgNAIgUAAQgTAAgNgIg");
	this.shape_114.setTransform(-208.5,13);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#980D19").s().p("AgDBJQgXAAgSgJQgRgJgKgQQgJgQgBgXQABgVAJgQQALgQARgKQARgJAVAAQAVAAAQAKQARAJAKAQQALAQAAAVQAAAKgDAJQgDAKgGAHQgHAIgKAEIAAABIAoAAIAAAYgAgbglQgJAGgGAKQgGAKAAALQAAAMAGAKQAGAKAJAGQAKAGAMAAQALAAAKgGQAJgGAHgKQAFgKABgMQgBgLgFgKQgHgKgJgGQgKgGgLAAQgMAAgKAGg");
	this.shape_115.setTransform(-224.2,12.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#980D19").s().p("AAnBHIgMgeIg2AAIgMAeIgiAAIA8iNIAZAAIA+CNgAAQAPIgQgsIgRAsIAhAAg");
	this.shape_116.setTransform(-240.4,12.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#980D19").s().p("AgYAkIAAhHIAvAAIAAAPIggAAIAAANIAfAAIAAANIgfAAIAAAPIAiAAIAAAPg");
	this.shape_117.setTransform(-198.1,-5.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_118.setTransform(-204.4,-5.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#980D19").s().p("AgHAkIAAg5IgUAAIAAgOIA3AAIAAAOIgUAAIAAA5g");
	this.shape_119.setTransform(-211,-5.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#980D19").s().p("AgOAjQgGgCgFgEIALgNQADADADACQAEACAEAAIAEgBIAFgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgEgBIgHgDIgIgDQgEgBgCgEQgDgEAAgGQAAgHAEgFQAEgGAHgCQAFgDAGAAQAHAAAGACQAFACAFAEIgLALIgGgDIgGgBIgDAAIgFADQAAAAAAABQgBAAAAABQAAAAAAABQAAABgBAAQABADACACIAFADIAIACIAIAEQAEABADAEQABAEABAGQgBAIgDAFQgEAFgGADQgHADgGAAQgHAAgGgDg");
	this.shape_120.setTransform(-216.9,-5.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_121.setTransform(-223.5,-5.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_122.setTransform(-230.2,-5.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_123.setTransform(-236.8,-5.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_124.setTransform(-244.2,-5.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D7D7D7").s().p("AkpFTQgQAAgMgMQgMgNAAgQIAApTQAAgQAMgNQAMgMAQABIJTAAQARgBALAMQAMANAAAQIAAJTQAAAQgMANQgLAMgRAAg");
	this.shape_125.setTransform(-220.2,5.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#980D19").ss(2,1,1).p("Ah8B9IDCAAQAXAAAQgQQAQgQAAgXIAAjC");
	this.shape_126.setTransform(-194,31.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAXAAIDCAA");
	this.shape_127.setTransform(-246.3,31.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#980D19").ss(2,1,1).p("AB9B9IAAjCQAAgXgQgQQgQgQgXAAIjCAA");
	this.shape_128.setTransform(-194,-21);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjCAAQgXAAgQAQQgQAQAAAXIAADC");
	this.shape_129.setTransform(-246.3,-21);

	this.instance = new lib.Mapadebits31();
	this.instance.parent = this;
	this.instance.setTransform(-267,-45);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#980D19").ss(4,1,1).p("AhVAPIAvAwIB8h9");
	this.shape_130.setTransform(-218.6,8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CBAA0E").s().p("AkpFSQgQAAgNgMQgMgLABgRIAApSQgBgSAMgMQANgLAQgBIJTAAQARABAMALQAMAMgBASIAAJSQABARgMALQgMAMgRAAg");
	this.shape_131.setTransform(-220.2,5.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAWAAIDDAA");
	this.shape_132.setTransform(-246.3,31.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjDAAQgWAAgQAQQgQAQAAAXIAADC");
	this.shape_133.setTransform(-246.3,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]}).to({state:[{t:this.instance},{t:this.shape_133},{t:this.shape_128},{t:this.shape_132},{t:this.shape_126},{t:this.shape_131},{t:this.shape_130}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-48.7,519,107.2);


(lib.Símbolo13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("signal6");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(97.4,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_1.setTransform(87.1,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEALgIAHQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAGQgGAEgCAJQgEAIAAAJQAAAJAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgEQgGgGgIgEQgHgEgKAAQgJAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_2.setTransform(73.5,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_3.setTransform(63.5,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_4.setTransform(55.3,35.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_5.setTransform(42.6,36);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_6.setTransform(29.9,36.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_7.setTransform(17.9,35.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_8.setTransform(5.2,36);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgIA4IgthvIATAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_9.setTransform(-6.4,35.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_10.setTransform(-18.9,36);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_11.setTransform(-38.8,36);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_12.setTransform(-51.6,35.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_13.setTransform(-64.8,36.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_14.setTransform(-84.7,36);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_15.setTransform(-99.1,32.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_16.setTransform(-119.8,36);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_17.setTransform(-132,36);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_18.setTransform(-143.7,36);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_19.setTransform(-155,35.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_20.setTransform(213.1,7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_21.setTransform(199.9,7.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgEAGgCQAGgBAHAAIAMABIgDAQQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_22.setTransform(183.7,7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_23.setTransform(172.1,7.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEAMAAIAKAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_24.setTransform(158.6,9.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_25.setTransform(144.9,7.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_26.setTransform(135.3,3.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_27.setTransform(129.6,3.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAIAHAEQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgGgFQgFgEgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_28.setTransform(115,7.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgXBVQgGgCgGgFQgFgEgDgGQgEgGAAgJQAAgNAHgIQAHgIALgDQALgFALgBIAWgBIAIAAIAAgCQAAgcgdgBQgSAAgPAOIgKgLQAQgRAfABQAIAAAIABQAHADAGAFQAFAFADAHQAEAIAAAJIAAAzIAAANIACAMIgQAAIgBgJIAAgJQgHAKgKAFQgJAGgNAAQgIgBgHgBgAAHAcIgQADQgJADgGAEQgGAFAAAIQAAAGADAEQACAEAEADQAEACAEABIAKABQAIAAAGgDQAGgDAFgFQAEgEACgHQACgHAAgHIAAgJIgIAAIgPABgAgKgzIAXgiIAVAAIgfAig");
	this.shape_29.setTransform(103.3,4.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_30.setTransform(94.5,7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_31.setTransform(82.8,7.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIALgHQAHgDAGgBIAKgBQANAAAMAFQAKAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_32.setTransform(69.2,3.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_33.setTransform(54.8,7.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAGADIAKAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgCAJQgDAIAAAJQAAAJADAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_34.setTransform(40.4,3.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_35.setTransform(20.1,7.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_36.setTransform(5.8,3.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_37.setTransform(-8.1,7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_38.setTransform(-21.7,7.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_39.setTransform(-36.5,3.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_40.setTransform(-56.6,7.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAHQAIAJAAAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_41.setTransform(-74.2,7.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_42.setTransform(-86.1,7.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_43.setTransform(-102.7,13.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_44.setTransform(-108.9,3.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_45.setTransform(-118.3,7.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AAhBSIAAg+QAAgTgGgJQgHgKgRAAIgGABQgGABgGAFQgGAEgFAHQgFAJAAAQIAAA5IgPAAIAAhXIgBgLIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgHIAKgDIALgCQAVAAAKALQALALAAAVIAABHgAgkg3IACgJIAFgIQACgEAEgCQAEgCAFAAQAFAAAEABIAIAFIAIADQAEACAEAAQAFAAADgEIAEgIIAKAAIgCAJIgEAIQgDAEgEABQgEADgFAAQgEAAgFgCIgJgEIgHgDIgIgCQgFAAgDAEIgEAIg");
	this.shape_46.setTransform(-131.1,4.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_47.setTransform(-144.3,7.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgFgFQgHgEgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_48.setTransform(-156,7.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_49.setTransform(224,-21.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AAFBJQgEgCgDgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQADADADAAIAHABIAHgBIAIgDIABAPQgJADgMAAIgKAAg");
	this.shape_50.setTransform(214.1,-23.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgHABIgIADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_51.setTransform(205.1,-21.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_52.setTransform(193.2,-21.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_53.setTransform(173.4,-21.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_54.setTransform(159.8,-25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_55.setTransform(146.3,-21.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_56.setTransform(137.5,-25.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_57.setTransform(128.1,-21.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgDIABAPQgKADgMAAIgKAAg");
	this.shape_58.setTransform(118.2,-23.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAIAHAEQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgGgFQgFgEgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_59.setTransform(109.2,-21.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_60.setTransform(97.1,-21.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_61.setTransform(87.8,-24.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgTBSQgLgEgIgJQgHgHgFgLQgEgLAAgNQAAgNAEgKQAEgKAIgIQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAHADAKQAEAKAAALIAAAIIhdAAQABAIAEAIQADAHAGAFQAFAGAHADQAHADAIAAQANAAAJgGQAJgFAFgJIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgNQgHADgFAFQgGAFgDAFQgDAHAAAGIBLAAQAAgQgKgIQgJgLgSAAQgGAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_62.setTransform(71.6,-24.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgDIABAPQgKADgMAAIgKAAg");
	this.shape_63.setTransform(61,-23.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgOAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAHQAJAJAAAMQgBAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_64.setTransform(51.9,-21.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_65.setTransform(40.1,-21.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_66.setTransform(20.1,-21.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgRAAIAAgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_67.setTransform(6.7,-21.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AAsBcIAAhYIgBAAQgDAGgGAEIgLAHIgLAEIgMABQgMAAgLgFQgLgEgIgIQgIgIgFgJQgEgMAAgMQAAgNAEgLQAFgKAIgJQAIgHALgEQALgFAMAAIAMABQAGABAFADIALAHQAGADADAHIABAAIAAgTIAQAAIAAC0gAgRhKQgIAEgFAGQgGAGgDAIQgCAJAAAJQAAAJACAJQADAHAGAGQAFAGAIADQAIADAJABQAJgBAJgDQAIgDAGgGQAGgGADgHQAEgJAAgJQAAgJgEgJQgDgIgGgGQgGgGgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_68.setTransform(-7.6,-18.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_69.setTransform(-24.1,-25.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_70.setTransform(-33.7,-21.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_71.setTransform(-53.9,-21.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_72.setTransform(-67,-21.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgEAGgCQAGgBAHAAIAMAAIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_73.setTransform(-83.3,-21.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_74.setTransform(-94.8,-21.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgLgEgIgHQgHgIgFgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_75.setTransform(-108.4,-18.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_76.setTransform(-122.1,-21.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_77.setTransform(-131.6,-25.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_78.setTransform(-144,-25.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAOIhRAAIAABBIBaAAIAAAQg");
	this.shape_79.setTransform(-153.4,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Estado
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#980D19").s().p("AgZBbIAAiNIAeAAIAACNgAgeg8IAVgdIAoAAIgiAdg");
	this.shape_80.setTransform(-197.1,10.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#980D19").s().p("AggBBQgNgHgHgNQgHgOAAgQIAAhXIAfAAIAABVQABAJADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQAEgHAAgJIAAhVIAfAAIAABXQAAAQgHAOQgHANgNAHQgNAIgUAAQgTAAgNgIg");
	this.shape_81.setTransform(-208.5,13);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#980D19").s().p("AgDBJQgXAAgSgJQgRgJgKgQQgJgQgBgXQABgVAJgQQALgQARgKQARgJAVAAQAVAAAQAKQARAJAKAQQALAQAAAVQAAAKgDAJQgDAKgGAHQgHAIgKAEIAAABIAoAAIAAAYgAgbglQgJAGgGAKQgGAKAAALQAAAMAGAKQAGAKAJAGQAKAGAMAAQALAAAKgGQAJgGAHgKQAFgKABgMQgBgLgFgKQgHgKgJgGQgKgGgLAAQgMAAgKAGg");
	this.shape_82.setTransform(-224.2,12.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#980D19").s().p("AAnBHIgMgeIg2AAIgMAeIgiAAIA8iNIAZAAIA+CNgAAQAPIgQgsIgRAsIAhAAg");
	this.shape_83.setTransform(-240.4,12.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#980D19").s().p("AgYAkIAAhHIAvAAIAAAPIggAAIAAANIAfAAIAAANIgfAAIAAAPIAiAAIAAAPg");
	this.shape_84.setTransform(-198.1,-5.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_85.setTransform(-204.4,-5.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#980D19").s().p("AgHAkIAAg5IgUAAIAAgOIA3AAIAAAOIgUAAIAAA5g");
	this.shape_86.setTransform(-211,-5.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#980D19").s().p("AgOAjQgGgCgFgEIALgNQADADADACQAEACAEAAIAEgBIAFgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgEgBIgHgDIgIgDQgEgBgCgEQgDgEAAgGQAAgHAEgFQAEgGAHgCQAFgDAGAAQAHAAAGACQAFACAFAEIgLALIgGgDIgGgBIgDAAIgFADQAAAAAAABQgBAAAAABQAAAAAAABQAAABgBAAQABADACACIAFADIAIACIAIAEQAEABADAEQABAEABAGQgBAIgDAFQgEAFgGADQgHADgGAAQgHAAgGgDg");
	this.shape_87.setTransform(-216.9,-5.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_88.setTransform(-223.5,-5.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_89.setTransform(-230.2,-5.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_90.setTransform(-236.8,-5.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_91.setTransform(-244.2,-5.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D7D7D7").s().p("AkpFTQgQAAgMgMQgMgNAAgQIAApTQAAgQAMgNQAMgMAQABIJTAAQARgBALAMQAMANAAAQIAAJTQAAAQgMANQgLAMgRAAg");
	this.shape_92.setTransform(-220.2,5.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#980D19").ss(2,1,1).p("Ah8B9IDCAAQAXAAAQgQQAQgQAAgXIAAjC");
	this.shape_93.setTransform(-194,31.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAXAAIDCAA");
	this.shape_94.setTransform(-246.3,31.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#980D19").ss(2,1,1).p("AB9B9IAAjCQAAgXgQgQQgQgQgXAAIjCAA");
	this.shape_95.setTransform(-194,-21);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjCAAQgXAAgQAQQgQAQAAAXIAADC");
	this.shape_96.setTransform(-246.3,-21);

	this.instance = new lib.Mapadebits31();
	this.instance.parent = this;
	this.instance.setTransform(-267,-45);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#980D19").ss(4,1,1).p("AhVAPIAvAwIB8h9");
	this.shape_97.setTransform(-218.6,8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CBAA0E").s().p("AkpFSQgQAAgNgMQgMgLABgRIAApSQgBgSAMgMQANgLAQgBIJTAAQARABAMALQAMAMgBASIAAJSQABARgMALQgMAMgRAAg");
	this.shape_98.setTransform(-220.2,5.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAWAAIDDAA");
	this.shape_99.setTransform(-246.3,31.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjDAAQgWAAgQAQQgQAQAAAXIAADC");
	this.shape_100.setTransform(-246.3,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]}).to({state:[{t:this.instance},{t:this.shape_100},{t:this.shape_95},{t:this.shape_99},{t:this.shape_93},{t:this.shape_98},{t:this.shape_97}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-45,519,100);


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("signal5");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgIAJQgDgEAAgFQAAgEADgEQADgEAFAAQAFAAADAEQAEAEAAAEQAAAFgEAEQgDAEgFAAQgFAAgDgEg");
	this.shape.setTransform(227.6,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgWA2QgJgFgIgMIANgJQAEAHAHAFQAHAEAIABIAJgBQAEgCAEgCQADgCACgEQACgDAAgFQAAgIgFgEQgHgEgIgCIgMgEIgIgCQgFgCgEgCQgEgEgDgFQgDgFAAgJQAAgIADgGQADgHAGgEQAFgEAHgCQAHgCAGAAQALAAAJAEQAJAFAGALIgOAKQgDgIgGgDQgFgFgIAAIgHABIgHADQgDACgBADQgCADAAAFQgBAIAGADQAFAEAJADIAOADQAMADAGAIQAIAHAAANQAAAIgDAHQgEAGgFAFQgGAEgIACQgGACgIAAQgLAAgLgFg");
	this.shape_1.setTransform(219.9,32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgSA2QgKgEgHgIQgHgIgEgKQgDgMAAgMQAAgMADgLQAEgKAHgJQAIgHAJgFQAKgEAJAAQAMAAAKAEQAIAFAHAHQAGAIAEAKQADAKAAAMIAAAGIhVAAQABAJADAHQADAHAFAGQAFAFAGAEQAHACAHABQAMAAAIgHQAJgFADgIIAMAKQgKANgLAFQgLAGgMAAQgKAAgLgFgAgLgpQgHADgFAFQgFAFgCAHQgDAGgBAHIBFAAQAAgQgJgKQgJgKgQAAQgGAAgGADg");
	this.shape_2.setTransform(209.1,32);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_3.setTransform(200.3,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHACAFAGQAFAFADAHQADAHAAALIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAGAAAIQAAAFACAFQACAEAEACQADACAFACIAIABQAHgBAGgCQAGgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_4.setTransform(191.7,32);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgbA6IAAhNIgBgPIAAgUIAOAAIAAAVQACgEADgEIAHgIQADgDAFgDQAGgCAHABIAKAAIgDARQgCgCgGAAQgIAAgGADQgFAEgEAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_5.setTransform(183.6,31.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgVA2QgKgEgHgIQgIgIgEgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAHgHAKgFQAKgEALAAQAMAAAKAEQAKAFAHAHQAHAJAEAKQAFALAAAMQAAAMgFAMQgEAKgHAIQgHAIgKAEQgKAFgMAAQgLAAgKgFgAgPgpQgHAEgGAGQgEAGgDAIQgDAJAAAIQAAAJADAJQADAIAEAGQAGAGAHADQAHADAIABQAJgBAHgDQAHgDAFgGQAFgGADgIQADgJAAgJQAAgIgDgJQgDgIgFgGQgFgGgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_6.setTransform(172.5,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgKBbIgLgEIgKgHQgFgEgDgFIAAASIgPAAIAAi0IAPAAIAABYQADgGAFgEIAKgHQAGgDAFgBIAKgBQAMAAAKAFQAKAEAHAIQAIAIAEAKQAEAKAAANQAAANgEALQgEAKgIAIQgHAIgKAFQgKAEgMAAIgKgBgAgQgHQgHADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAHADQAIAEAIAAQAJAAAHgEQAHgDAFgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgFgFgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_7.setTransform(159.6,28.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHACAFAGQAFAFADAHQADAHAAALIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAGAAAIQAAAFACAFQACAEAEACQADACAFACIAIABQAHgBAGgCQAGgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_8.setTransform(146.6,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_9.setTransform(138.5,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgVA2QgKgFgIgMIANgJQAEAHAHAFQAGAEAJABIAIgBQAFgCAEgCQADgCACgEQACgDAAgFQAAgIgGgEQgFgEgIgCIgOgEIgHgCQgEgCgFgCQgEgEgDgFQgDgFAAgJQAAgIADgGQADgHAGgEQAFgEAHgCQAHgCAGAAQALAAAJAEQAJAFAFALIgMAKQgEgIgFgDQgGgFgIAAIgHABIgGADQgEACgCADQgBADAAAFQgBAIAGADQAFAEAJADIAPADQAKADAIAIQAHAHAAANQAAAIgEAHQgDAGgGAFQgFAEgHACQgIACgHAAQgLAAgKgFg");
	this.shape_10.setTransform(125.2,32);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgSA2QgJgEgHgIQgHgIgFgKQgDgMAAgMQAAgMADgLQAFgKAHgJQAGgHAKgFQAKgEAKAAQALAAAJAEQAKAFAGAHQAGAIAEAKQACAKAAAMIAAAGIhUAAQABAJADAHQACAHAGAGQAFAFAGAEQAHACAHABQALAAAJgHQAIgFAEgIIAMAKQgJANgMAFQgKAGgNAAQgLAAgKgFgAgMgpQgGADgFAFQgFAFgCAHQgDAGAAAHIBEAAQAAgQgJgKQgJgKgPAAQgGAAgIADg");
	this.shape_11.setTransform(114.3,32);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgVBYQgKgFgIgIQgHgIgEgKQgEgLAAgNQAAgNAEgKQAEgKAHgIQAIgIAKgEQAKgFALAAIAKABQAGABAFADQAGADAEAEQAFAEAEAGIAAAAIAAhYIAPAAIAAC0IgPAAIAAgSIAAAAQgEAFgFAEIgKAHIgLAEIgKABQgLAAgKgEgAgPgHQgHADgGAFQgFAGgCAJQgDAIAAAJQAAAJADAJQACAIAFAGQAGAGAHADQAHAEAIAAQAJAAAHgEQAIgDAFgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgFgFgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_12.setTransform(101.2,28.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHACAFAGQAFAFADAHQADAHAAALIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAGAAAIQAAAFACAFQACAEAEACQADACAFACIAIABQAHgBAGgCQAGgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_13.setTransform(88.8,32);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgVBYQgKgFgIgIQgHgIgEgKQgEgLAAgNQAAgNAEgKQAEgKAHgIQAIgIAKgEQAKgFALAAIAKABQAGABAFADQAGADAEAEQAFAEAEAGIAAAAIAAhYIAPAAIAAC0IgPAAIAAgSIAAAAQgEAFgFAEIgKAHIgLAEIgKABQgLAAgKgEgAgPgHQgHADgGAFQgFAGgCAJQgDAIAAAJQAAAJADAJQACAIAFAGQAGAGAHADQAHAEAIAAQAJAAAHgEQAIgDAFgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgFgFgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_14.setTransform(76.4,28.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgHBUIAAhwIAOAAIAABwgAgHg/QgCgDAAgFQAAgFACgDQAEgDADgBQAEABADADQADADABAFQgBAFgDADQgDAEgEAAQgDAAgEgEg");
	this.shape_15.setTransform(67.4,29.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgHA4IgqhvIARAAIAgBeIAAAAIAiheIAQAAIgqBvg");
	this.shape_16.setTransform(59.5,32);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgGBUIAAhwIANAAIAABwgAgGg/QgDgDAAgFQAAgFADgDQADgDADgBQAEABADADQADADABAFQgBAFgDADQgDAEgEAAQgDAAgDgEg");
	this.shape_17.setTransform(51.5,29.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AAFBIQgEgBgDgEQgEgCgCgHQgCgFgBgJIAAhGIgVAAIAAgPIAVAAIAAgfIAOAAIAAAfIAeAAIAAAPIgeAAIAABBIABAKQABAEACACQACADADAAIAGABIAHgBIAIgDIAAAPQgIADgLAAIgJgBg");
	this.shape_18.setTransform(45.3,30.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgNA3QgKgEgIgIQgGgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAGgIQAIgIAKgFQAKgEAMAAQAKAAAKAFQAKAFAHAKIgMAJQgEgGgGgEQgHgFgIAAQgJAAgGAEQgIADgFAGQgFAGgCAIQgDAJAAAIQAAAKADAIQACAIAFAGQAFAGAIAEQAGADAJAAQAIAAAHgFQAGgEAEgGIAMAKQgHAKgKAEQgKAFgKAAQgMAAgKgEg");
	this.shape_19.setTransform(36.7,32);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHACAFAGQAFAFADAHQADAHAAALIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAGAAAIQAAAFACAFQACAEAEACQADACAFACIAIABQAHgBAGgCQAGgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_20.setTransform(25,32);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgWA2QgJgFgIgMIANgJQAEAHAHAFQAHAEAIABIAJgBQAEgCAEgCQADgCACgEQACgDAAgFQAAgIgFgEQgHgEgIgCIgMgEIgIgCQgFgCgEgCQgEgEgDgFQgDgFAAgJQAAgIADgGQADgHAGgEQAFgEAHgCQAHgCAGAAQALAAAJAEQAJAFAGALIgOAKQgDgIgGgDQgFgFgIAAIgHABIgHADQgCACgCADQgCADAAAFQgBAIAGADQAFAEAJADIAOADQAMADAGAIQAIAHAAANQAAAIgDAHQgEAGgFAFQgGAEgIACQgGACgIAAQgLAAgLgFg");
	this.shape_21.setTransform(8.9,32);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgiAuQgKgLAAgVIAAhHIAPAAIAAA+IABAQQABAHAEAFQADAFAGADQAEACAJAAIAFgBQAFgBAGgEQAFgEAEgJQAFgJAAgPIAAg5IAOAAIAABXIABAMIAAANIgOAAIgBgJIAAgJIgBAAIgFAIQgFAEgEADQgFADgEABIgKACQgTAAgKgMg");
	this.shape_22.setTransform(-2,32.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AAFBIQgFgBgCgEQgEgCgCgHQgCgFgBgJIAAhGIgVAAIAAgPIAVAAIAAgfIAOAAIAAAfIAdAAIAAAPIgdAAIAABBIABAKQABAEACACQACADADAAIAGABIAHgBIAHgDIABAPQgIADgLAAIgJgBg");
	this.shape_23.setTransform(-11.7,30.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgSA2QgJgEgIgIQgGgIgFgKQgDgMAAgMQAAgMADgLQAFgKAGgJQAIgHAJgFQAJgEALAAQALAAAKAEQAJAFAGAHQAGAIAEAKQACAKAAAMIAAAGIhUAAQABAJADAHQADAHAFAGQAFAFAGAEQAHACAHABQAMAAAIgHQAJgFADgIIAMAKQgKANgLAFQgKAGgNAAQgKAAgLgFgAgMgpQgGADgFAFQgFAFgCAHQgDAGAAAHIBEAAQAAgQgJgKQgJgKgPAAQgGAAgIADg");
	this.shape_24.setTransform(-27.5,32);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AAFBIQgFgBgCgEQgEgCgCgHQgDgFABgJIAAhGIgXAAIAAgPIAXAAIAAgfIANAAIAAAfIAeAAIAAAPIgeAAIAABBIABAKQABAEACACQACADADAAIAGABIAIgBIAHgDIABAPQgJADgLAAIgJgBg");
	this.shape_25.setTransform(-37.3,30.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AAeA6IAAg9QAAgUgGgJQgGgKgQAAIgFABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgPAAIAAhXIAAgLIgBgOIAPAAIABAJIAAAJIABAAIAGgJIAIgGIAKgEIAJgBQAUgBAJALQAJAMAAAWIAABGg");
	this.shape_26.setTransform(-47.2,31.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHACAFAGQAFAFADAHQADAHAAALIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAGAAAIQAAAFACAFQACAEAEACQADACAFACIAIABQAHgBAGgCQAGgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_27.setTransform(-59.2,32);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgbA6IAAhNIgBgPIAAgUIAOAAIAAAVQACgEADgEIAHgIQADgDAFgDQAGgCAHABIAKAAIgDARQgCgCgGAAQgIAAgGADQgFAEgEAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_28.setTransform(-67.3,31.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgiAuQgKgLAAgVIAAhHIAPAAIAAA+IABAQQABAHAEAFQADAFAGADQAEACAJAAIAFgBQAFgBAGgEQAFgEAEgJQAFgJAAgPIAAg5IAOAAIAABXIABAMIAAANIgOAAIgBgJIAAgJIgBAAIgFAIQgFAEgEADQgFADgEABIgKACQgTAAgKgMg");
	this.shape_29.setTransform(-78,32.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgVBYQgKgFgIgIQgHgIgEgKQgEgLAAgNQAAgNAEgKQAEgKAHgIQAIgIAKgEQAKgFALAAIAKABQAGABAFADQAGADAEAEQAFAEAEAGIAAAAIAAhYIAPAAIAAC0IgPAAIAAgSIAAAAQgEAFgFAEIgKAHIgLAEIgKABQgLAAgKgEgAgPgHQgHADgGAFQgFAGgCAJQgDAIAAAJQAAAJADAJQACAIAFAGQAGAGAHADQAHAEAIAAQAJAAAHgEQAIgDAFgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgFgFgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_30.setTransform(-91.1,28.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgWA2QgKgFgHgMIANgJQAEAHAHAFQAHAEAIABIAJgBQAEgCAEgCQADgCACgEQACgDAAgFQAAgIgFgEQgHgEgIgCIgMgEIgIgCQgFgCgDgCQgFgEgDgFQgDgFAAgJQAAgIADgGQADgHAGgEQAFgEAHgCQAHgCAGAAQALAAAJAEQAJAFAGALIgOAKQgDgIgGgDQgFgFgIAAIgHABIgHADQgCACgCADQgCADgBAFQAAAIAGADQAFAEAJADIAOADQAMADAGAIQAIAHAAANQAAAIgDAHQgEAGgFAFQgGAEgIACQgGACgIAAQgLAAgLgFg");
	this.shape_31.setTransform(-108.2,32);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgVBVQgGgCgFgFQgFgEgDgGQgDgHAAgIQAAgNAHgIQAGgIAKgDQAKgFAKgBIAUgBIAIAAIAAgCQAAgcgbAAQgRAAgNANIgJgLQAOgQAcAAQAIgBAHACQAHADAFAFQAFAFADAHQADAIAAAJIAAAyIABAOIABAMIgOAAIgBgJIgBgJIAAAAQgGAKgJAGQgJAEgLAAQgHAAgHgBgAAGAcIgPADQgHADgGAEQgFAFAAAIQAAAGACAEQACAEAEADQADACAFABIAIABQAHAAAGgDQAGgDAEgFQAEgFACgGQACgHAAgHIAAgIIgIAAIgOAAgAgJgzIAVgiIAUAAIgdAig");
	this.shape_32.setTransform(-118.9,29.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgbA6IAAhNIgBgPIAAgUIAOAAIAAAVQACgEADgEIAHgIQADgDAFgDQAGgCAHABIAKAAIgDARQgCgCgGAAQgIAAgGADQgFAEgEAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_33.setTransform(-127.1,31.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHACAFAGQAFAFADAHQADAHAAALIAAAxIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPADQgHADgGAEQgFAGAAAIQAAAFACAFQACAEAEACQADACAFACIAIABQAHgBAGgCQAGgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_34.setTransform(-137.6,32);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgWA2QgJgFgIgMIANgJQAEAHAHAFQAHAEAIABIAJgBQAEgCAEgCQADgCACgEQACgDAAgFQAAgIgGgEQgFgEgJgCIgMgEIgIgCQgFgCgEgCQgEgEgDgFQgDgFAAgJQAAgIADgGQADgHAGgEQAFgEAHgCQAHgCAGAAQALAAAJAEQAJAFAFALIgMAKQgEgIgFgDQgGgFgIAAIgHABIgHADQgDACgBADQgCADAAAFQgBAIAGADQAFAEAJADIAPADQAKADAIAIQAHAHAAANQAAAIgEAHQgDAGgGAFQgFAEgHACQgIACgHAAQgLAAgLgFg");
	this.shape_35.setTransform(-147.6,32);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgiAuQgJgLAAgVIAAhHIAOAAIAAA+IABAQQABAHADAFQAEAFAFADQAFACAJAAIAFgBQAFgBAFgEQAGgEAFgJQAEgJAAgPIAAg5IAPAAIAABXIAAAMIABANIgQAAIAAgJIAAgJIgBAAIgGAIQgEAEgEADQgEADgGABIgJACQgUAAgJgMg");
	this.shape_36.setTransform(-158.5,32.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgSA3QgKgFgHgIQgGgIgEgLQgEgLAAgMQAAgMAEgLQAEgLAGgHQAIgJAJgDQAKgFAJAAQAMAAAKAFQAIAEAHAIQAGAHADALQAEAKAAALIAAAGIhVAAQAAAJAEAHQADAHAFAGQAFAFAHADQAGADAHABQAMgBAIgFQAJgGADgIIAMAKQgKANgLAGQgLAFgNAAQgJAAgLgEgAgLgpQgHADgFAFQgFAGgCAFQgEAIAAAGIBFAAQAAgQgJgKQgJgKgQAAQgGAAgGADg");
	this.shape_37.setTransform(242.7,8.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgiAuQgKgLABgVIAAhHIAOAAIAAA+IABAQQACAHADAFQADAFAGADQAEACAJAAIAFgBQAFgBAFgEQAGgEAEgJQAFgJAAgPIAAg5IAOAAIAABXIABAMIAAANIgOAAIgBgJIAAgJIAAAAIgHAIIgIAHQgFADgFABIgJACQgTAAgKgMg");
	this.shape_38.setTransform(230.4,8.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AAoBcIAAhXIAAAAQgEAFgFAEIgKAHIgLAEIgKABQgLAAgKgEQgKgFgIgIQgHgIgEgKQgEgLAAgMQAAgNAEgLQAEgLAHgHQAIgJAKgDQAKgFALAAIAKABQAGABAFADQAGACAEAEQAFAFAEAFIAAAAIAAgTIAPAAIAAC1gAgPhKQgHAEgGAGQgFAGgCAJQgDAHAAAKQAAAJADAJQACAIAFAFQAGAFAHAEQAHAEAIAAQAJAAAHgEQAIgEAFgFQAGgFADgIQADgJAAgJQAAgKgDgHQgDgJgGgGQgFgGgIgEQgHgDgJAAQgIAAgHADg");
	this.shape_39.setTransform(217.3,11.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_40.setTransform(202.2,4.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgVA5QgGgCgFgFQgFgDgDgHQgDgGAAgIQAAgNAHgJQAGgGAKgEQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNANIgJgLQAOgQAcAAQAIAAAHACQAHADAFAEQAFAFADAIQADAIAAAJIAAAyIABAOIABALIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGABIgPADQgHACgGAFQgFAEAAAJQAAAFACAEQACAEAEADQADACAFABIAIACQAHgBAGgDQAGgCAEgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgOABg");
	this.shape_41.setTransform(193.6,8.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AAeA5IAAg9QAAgSgGgLQgGgKgQAAIgFABQgFABgGAFQgFAFgEAIQgFAIAAAPIAAA5IgOAAIAAhWIgBgMIAAgNIAOAAIABAKIAAAIIAAAAIAGgIIAJgHIAJgEIAKgBQATAAAKALQAKALAAAVIAABGg");
	this.shape_42.setTransform(181.9,8.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgVA3QgKgFgHgIQgIgIgEgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAHgJAKgDQAKgFALAAQAMAAAKAFQAKADAHAJQAHAHAEALQAFALAAAMQAAAMgFALQgEALgHAIQgHAIgKAFQgKAEgMAAQgLAAgKgEgAgPgpQgHAEgGAGQgEAGgDAJQgDAHAAAJQAAAJADAJQADAIAEAFQAGAGAHAEQAHAEAIAAQAJAAAHgEQAHgEAFgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgFgGgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_43.setTransform(169.4,8.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgWA2QgJgFgIgMIANgJQAEAHAHAFQAHAFAIAAIAJgCQAEgBAEgCQADgCACgEQACgEAAgEQAAgJgFgEQgHgDgIgCIgMgEIgIgCQgFgCgEgDQgEgDgDgFQgDgGAAgHQAAgJADgHQADgGAGgEQAFgEAHgCQAHgCAGAAQALAAAJAFQAJAEAGALIgOAJQgDgHgGgEQgFgEgIAAIgHABIgHADQgDACgBAEQgCADAAAEQgBAIAGAEQAFADAJADIAOAEQAMACAGAHQAIAIAAAMQAAAJgDAHQgEAGgFAFQgGAEgIACQgGACgIAAQgLAAgLgFg");
	this.shape_44.setTransform(158.3,8.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgbA5IAAhLIgBgQIAAgUIAOAAIAAAVQACgEADgFIAHgIQADgDAFgBQAGgCAHAAIAKABIgDAPQgCgBgGAAQgIAAgGAEQgFADgEAGQgEAFgCAGIgCAMIAAA+g");
	this.shape_45.setTransform(150.8,8.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgRA3QgLgFgGgIQgIgIgDgLQgFgLAAgMQAAgMAFgLQADgLAIgHQAGgJAKgDQAKgFAKAAQALAAAJAFQAKAEAGAIQAGAHADALQADAKAAALIAAAGIhUAAQAAAJADAHQADAHAGAGQAFAFAGADQAHADAHABQALgBAJgFQAIgGAFgIIALAKQgKANgKAGQgLAFgOAAQgKAAgJgEgAgMgpQgGADgFAFQgFAGgDAFQgCAIAAAGIBEAAQAAgQgJgKQgJgKgPAAQgHAAgHADg");
	this.shape_46.setTransform(140.2,8.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("Ag2BcIAAi1IAPAAIAAATQADgFAFgFIAKgGQAGgDAFgBIAKgBQAMAAAKAFQAKADAHAJQAIAHAEALQAEALAAANQAAAMgEALQgEAKgIAIQgHAIgKAFQgKAEgMAAIgKgBIgLgEIgKgHQgFgEgDgFIAABXgAgQhKQgHAEgFAGQgGAGgDAJQgDAHAAAKQAAAJADAJQADAIAGAFQAFAFAHAEQAIAEAIAAQAJAAAHgEQAHgEAFgFQAFgFADgIQADgJAAgJQAAgKgDgHQgDgJgFgGQgFgGgHgEQgHgDgJAAQgIAAgIADg");
	this.shape_47.setTransform(127.7,11.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AAeA5IAAg9QAAgSgGgLQgGgKgQAAIgFABQgFABgFAFQgHAFgDAIQgFAIAAAPIAAA5IgPAAIAAhWIAAgMIgBgNIAPAAIABAKIAAAIIAAAAIAHgIIAIgHIAKgEIAJgBQAUAAAJALQAJALAAAVIAABGg");
	this.shape_48.setTransform(108.3,8.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgVBSQgKgFgHgHQgIgJgEgKQgEgLAAgNQAAgMAEgLQAEgKAIgIQAHgIAKgEQAKgFALABQAMgBAKAFQAKAEAHAIQAHAIAEAKQAFALAAAMQAAANgFALQgEAKgHAJQgHAHgKAFQgKAFgMAAQgLAAgKgFgAgPgNQgHADgGAHQgEAEgDAJQgDAIAAAJQAAAKADAIQADAIAEAGQAGAGAHAEQAHADAIAAQAJAAAHgDQAHgEAFgGQAFgGADgIQADgIAAgKQAAgJgDgIQgDgJgFgEQgFgHgHgDQgHgDgJgBQgIABgHADgAgMgzIAVgjIAUAAIgdAjg");
	this.shape_49.setTransform(95.8,5.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgHBTIAAhvIAOAAIAABvgAgHg/QgDgDAAgFQAAgFADgDQAEgEADABQAEgBADAEQADADAAAFQAAAFgDADQgDADgEAAQgDAAgEgDg");
	this.shape_50.setTransform(86.7,5.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgNA3QgKgEgIgIQgGgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAGgIQAIgIAKgFQAKgEAMAAQAKAAAKAFQAKAFAHAKIgMAJQgEgGgGgEQgHgFgIAAQgJAAgHAEQgHADgFAGQgFAGgCAIQgDAJAAAIQAAAKADAIQACAIAFAGQAFAGAHAEQAHADAJAAQAIAAAHgFQAGgEAEgGIAMAKQgHAKgKAEQgKAFgKAAQgMAAgKgEg");
	this.shape_51.setTransform(79.1,8.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgNA3QgKgEgIgIQgGgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAGgIQAIgIAKgFQAKgEAMAAQAKAAAKAFQAKAFAHAKIgMAJQgEgGgGgEQgHgFgIAAQgJAAgGAEQgIADgFAGQgFAGgCAIQgDAJAAAIQAAAKADAIQACAIAFAGQAFAGAIAEQAGADAJAAQAIAAAHgFQAGgEAEgGIAMAKQgHAKgKAEQgKAFgKAAQgMAAgKgEg");
	this.shape_52.setTransform(68.5,8.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgSA3QgJgFgHgIQgHgIgFgLQgDgLAAgMQAAgMADgLQAFgLAHgHQAGgJAKgDQAKgFAKAAQALAAAKAFQAJAEAGAIQAGAHAEALQACAKAAALIAAAGIhUAAQABAJACAHQADAHAGAGQAFAFAGADQAHADAHABQALgBAJgFQAIgGAEgIIAMAKQgJANgMAGQgKAFgNAAQgLAAgKgEgAgMgpQgGADgFAFQgFAGgDAFQgCAIAAAGIBEAAQAAgQgJgKQgJgKgPAAQgGAAgIADg");
	this.shape_53.setTransform(56.7,8.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AAFBJQgEgCgDgDQgEgEgCgGQgDgFABgKIAAhGIgXAAIAAgOIAXAAIAAggIANAAIAAAgIAeAAIAAAOIgeAAIAABCIABAKQABAEACACQACACADABIAGABIAHgBIAIgDIABAOQgJAFgLAAIgJgBg");
	this.shape_54.setTransform(47,6.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgVA3QgKgFgHgIQgIgIgEgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAHgJAKgDQAKgFALAAQAMAAAKAFQAKADAHAJQAHAHAEALQAFALAAAMQAAAMgFALQgEALgHAIQgHAIgKAFQgKAEgMAAQgLAAgKgEgAgPgpQgHAEgGAGQgEAGgDAJQgDAHAAAJQAAAJADAJQADAIAEAFQAGAGAHAEQAHAEAIAAQAJAAAHgEQAHgEAFgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgFgGgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_55.setTransform(36.8,8.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgbA5IAAhLIgBgQIAAgUIAOAAIAAAVQACgEADgFIAHgIQADgDAFgBQAGgCAHAAIAKABIgDAPQgCgBgGAAQgIAAgGAEQgFADgEAGQgEAFgCAGIgCAMIAAA+g");
	this.shape_56.setTransform(27.6,8.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("Ag2BcIAAi1IAPAAIAAATQADgFAFgFIAKgGQAGgDAFgBIAKgBQAMAAAKAFQAKADAHAJQAIAHAEALQAEALAAANQAAAMgEALQgEAKgIAIQgHAIgKAFQgKAEgMAAIgKgBIgLgEIgKgHQgFgEgDgFIAABXgAgQhKQgHAEgFAGQgGAGgDAJQgDAHAAAKQAAAJADAJQADAIAGAFQAFAFAHAEQAIAEAIAAQAJAAAHgEQAHgEAFgFQAFgFADgIQADgJAAgJQAAgKgDgHQgDgJgFgGQgFgGgHgEQgHgDgJAAQgIAAgIADg");
	this.shape_57.setTransform(16.6,11.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgSA3QgJgFgIgIQgGgIgEgLQgEgLgBgMQABgMAEgLQAEgLAGgHQAIgJAJgDQAJgFAKAAQAMAAAKAFQAIAEAHAIQAGAHADALQAEAKAAALIAAAGIhVAAQAAAJAEAHQADAHAFAGQAFAFAHADQAGADAHABQALgBAJgFQAJgGADgIIAMAKQgJANgLAGQgMAFgNAAQgJAAgLgEgAgLgpQgHADgFAFQgFAGgCAFQgEAIAAAGIBFAAQAAgQgJgKQgJgKgQAAQgFAAgHADg");
	this.shape_58.setTransform(-2.6,8.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgVBYQgKgFgIgIQgHgIgEgKQgEgLAAgNQAAgNAEgKQAEgKAHgIQAIgIAKgEQAKgFALAAIAKABQAGABAFADQAGADAEAEQAFAEAEAGIAAAAIAAhYIAPAAIAAC0IgPAAIAAgSIAAAAQgEAFgFAEIgKAHIgLAEIgKABQgLAAgKgEgAgPgHQgHADgGAFQgFAGgCAJQgDAIAAAJQAAAJADAJQACAIAFAGQAGAGAHADQAHAEAIAAQAJAAAHgEQAIgDAFgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgFgFgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_59.setTransform(-15.8,4.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgWA2QgJgFgIgMIANgJQAEAHAHAFQAHAFAIAAIAJgCQAEgBAEgCQADgCACgEQACgEAAgEQAAgJgGgEQgFgDgJgCIgMgEIgIgCQgFgCgEgDQgEgDgDgFQgDgGAAgHQAAgJADgHQADgGAGgEQAFgEAHgCQAHgCAGAAQALAAAJAFQAJAEAFALIgMAJQgEgHgFgEQgGgEgIAAIgHABIgHADQgDACgBAEQgCADAAAEQgBAIAGAEQAFADAJADIAPAEQAKACAIAHQAHAIAAAMQAAAJgEAHQgDAGgGAFQgFAEgHACQgIACgHAAQgLAAgLgFg");
	this.shape_60.setTransform(-32.9,8.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgVA3QgKgFgHgIQgIgIgEgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAHgJAKgDQAKgFALAAQAMAAAKAFQAKADAHAJQAHAHAEALQAFALAAAMQAAAMgFALQgEALgHAIQgHAIgKAFQgKAEgMAAQgLAAgKgEgAgPgpQgHAEgGAGQgEAGgDAJQgDAHAAAJQAAAJADAJQADAIAEAFQAGAGAHAEQAHAEAIAAQAJAAAHgEQAHgEAFgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgFgGgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_61.setTransform(-44.1,8.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AAFBJQgEgCgDgDQgEgEgCgGQgDgFABgKIAAhGIgXAAIAAgOIAXAAIAAggIANAAIAAAgIAeAAIAAAOIgeAAIAABCIABAKQABAEACACQACACADABIAGABIAHgBIAIgDIABAOQgJAFgLAAIgJgBg");
	this.shape_62.setTransform(-54.3,6.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AAeA5IAAg9QAAgSgGgLQgGgKgQAAIgFABQgFABgFAFQgGAFgFAIQgEAIAAAPIAAA5IgPAAIAAhWIAAgMIgBgNIAPAAIABAKIAAAIIAAAAIAHgIIAIgHIAKgEIAJgBQAUAAAJALQAJALAAAVIAABGg");
	this.shape_63.setTransform(-64.2,8.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgRA3QgLgFgGgIQgIgIgDgLQgFgLAAgMQAAgMAFgLQADgLAIgHQAGgJAKgDQAKgFAKAAQALAAAJAFQAKAEAGAIQAGAHADALQADAKAAALIAAAGIhUAAQAAAJADAHQADAHAGAGQAFAFAGADQAHADAHABQALgBAJgFQAIgGAFgIIALAKQgKANgKAGQgLAFgOAAQgKAAgJgEgAgMgpQgGADgFAFQgFAGgDAFQgCAIAAAGIBEAAQAAgQgJgKQgJgKgPAAQgHAAgHADg");
	this.shape_64.setTransform(-76.3,8.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AA/A5IAAhAQAAgRgGgJQgFgKgPAAQgIABgGADQgFADgEAHQgDAFgCAHIgBAQIAAA6IgOAAIAAhAQAAgRgFgJQgFgKgPAAIgHABQgEABgFAFQgFAFgEAIQgEAIAAAPIAAA5IgPAAIAAhWIAAgNIgBgMIAQAAIAAARQAFgJAKgGQAJgEAJAAIAJAAQAFABAEADQAFACADAFQADAFADAGQAEgKAKgHQAJgFALAAQAUAAAJALQAJALAAAVIAABGg");
	this.shape_65.setTransform(-91.9,8.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgRA3QgLgFgGgIQgIgIgDgLQgFgLAAgMQAAgMAFgLQADgLAIgHQAHgJAJgDQAJgFAKAAQAMAAAJAFQAJAEAHAIQAGAHADALQADAKAAALIAAAGIhUAAQAAAJADAHQAEAHAFAGQAFAFAHADQAGADAHABQAMgBAIgFQAIgGAFgIIALAKQgJANgLAGQgMAFgNAAQgJAAgKgEgAgMgpQgGADgFAFQgFAGgDAFQgDAIAAAGIBFAAQAAgQgJgKQgJgKgQAAQgGAAgHADg");
	this.shape_66.setTransform(-107.2,8.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_67.setTransform(-116,4.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgSA3QgJgFgIgIQgGgIgFgLQgDgLAAgMQAAgMADgLQAFgLAGgHQAIgJAJgDQAJgFALAAQALAAAKAFQAJAEAGAIQAGAHAEALQACAKAAALIAAAGIhUAAQABAJADAHQADAHAFAGQAFAFAGADQAHADAHABQAMgBAIgFQAJgGADgIIAMAKQgKANgLAGQgKAFgNAAQgKAAgLgEgAgMgpQgGADgFAFQgFAGgCAFQgDAIAAAGIBEAAQAAgQgJgKQgJgKgPAAQgGAAgIADg");
	this.shape_68.setTransform(-124.7,8.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgVA2QgKgFgIgMIANgJQAEAHAHAFQAGAFAJAAIAIgCQAFgBADgCQAEgCACgEQACgEAAgEQAAgJgGgEQgGgDgHgCIgOgEIgHgCQgFgCgEgDQgEgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAFgEAHgCQAHgCAGAAQALAAAJAFQAJAEAFALIgMAJQgEgHgFgEQgGgEgIAAIgHABIgGADQgEACgCAEQgBADAAAEQAAAIAFAEQAFADAJADIAPAEQAKACAIAHQAHAIAAAMQAAAJgEAHQgDAGgGAFQgFAEgHACQgIACgHAAQgLAAgKgFg");
	this.shape_69.setTransform(-141.6,8.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgVA3QgKgFgHgIQgIgIgEgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAHgJAKgDQAKgFALAAQAMAAAKAFQAKADAHAJQAHAHAEALQAFALAAAMQAAAMgFALQgEALgHAIQgHAIgKAFQgKAEgMAAQgLAAgKgEgAgPgpQgHAEgGAGQgEAGgDAJQgDAHAAAJQAAAJADAJQADAIAEAFQAGAGAHAEQAHAEAIAAQAJAAAHgEQAHgEAFgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgFgGgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_70.setTransform(-152.8,8.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_71.setTransform(-162,4.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHADAFAFQAFAEADAIQADAHAAAKIAAAyIABANIABAMIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPAEQgHACgGAEQgFAGAAAIQAAAGACAEQACADAEADQADACAFABIAIABQAHAAAGgCQAGgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_72.setTransform(224.8,-15.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHADAFAFQAFAEADAIQADAHAAAKIAAAyIABANIABAMIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPAEQgHACgGAEQgFAGAAAIQAAAGACAEQACADAEADQADACAFABIAIABQAHAAAGgCQAGgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_73.setTransform(207.3,-15.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgHBUIAAhwIAOAAIAABwgAgHg+QgCgEAAgFQAAgFACgDQAEgEADAAQAEAAADAEQADADAAAFQAAAFgDAEQgDADgEAAQgDAAgEgDg");
	this.shape_74.setTransform(199.3,-18.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgNA3QgKgEgHgIQgHgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAHgIQAHgIAKgFQAKgEALAAQALAAAKAFQAJAFAIAKIgMAJQgDgGgHgEQgHgFgJAAQgIAAgGAEQgIADgFAGQgFAGgDAIQgCAJAAAIQAAAKACAIQADAIAFAGQAFAGAIAEQAGADAIAAQAJAAAHgFQAHgEADgGIAMAKQgIAKgJAEQgKAFgLAAQgLAAgKgEg");
	this.shape_75.setTransform(191.7,-15.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AAeA6IAAg+QAAgSgGgKQgGgKgQAAIgFABQgFABgFAEQgHAFgDAIQgFAJAAAOIAAA6IgPAAIAAhXIAAgLIgBgOIAPAAIABAJIAAAJIAAAAIAHgJIAIgGIAKgEIAJgCQAUABAJAKQAJAMAAAVIAABHg");
	this.shape_76.setTransform(179.8,-15.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgRA2QgLgEgGgIQgIgIgDgKQgFgLAAgNQAAgMAFgKQADgLAIgJQAHgIAJgEQAJgEAKAAQAMAAAJAEQAJAFAHAHQAGAIADAKQADAKAAAMIAAAGIhUAAQAAAIADAIQAEAHAFAGQAFAGAHADQAGACAHAAQAMABAIgHQAIgFAFgIIALAKQgJANgLAFQgMAGgNAAQgJAAgKgFgAgMgoQgGACgFAFQgFAFgDAHQgCAGAAAHIBEAAQAAgQgJgKQgJgKgQAAQgGAAgHAEg");
	this.shape_77.setTransform(167.7,-15.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgbA6IAAhNIgBgPIAAgUIAOAAIAAAVQACgEADgEIAHgIQADgEAFgCQAGgCAHAAIAKABIgDAQQgCgBgGAAQgIAAgGADQgFAEgEAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_78.setTransform(158.9,-15.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgSA2QgKgEgHgIQgGgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAGgJQAIgIAJgEQAKgEAJAAQAMAAAKAEQAIAFAHAHQAGAIADAKQAEAKAAAMIAAAGIhVAAQAAAIAEAIQADAHAFAGQAFAGAHADQAGACAHAAQAMABAIgHQAJgFADgIIAMAKQgKANgLAFQgLAGgNAAQgJAAgLgFgAgLgoQgHACgFAFQgFAFgCAHQgEAGAAAHIBFAAQAAgQgJgKQgJgKgQAAQgGAAgGAEg");
	this.shape_79.setTransform(148.2,-15.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AgMBcIAAhhIgWAAIAAgOIAWAAIAAgfQAAgWAKgKQAJgJAPAAIAGAAIAHACIgEAOIgEgBIgHgBQgFAAgEACQgEADgCAEQgCAEgBAFIAAALIAAAdIAZAAIAAAOIgZAAIAABhg");
	this.shape_80.setTransform(139.4,-19.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgSA2QgJgEgIgIQgGgIgFgKQgDgLAAgNQAAgMADgKQAFgLAGgJQAIgIAJgEQAJgEALAAQALAAAKAEQAJAFAGAHQAGAIAEAKQACAKABAMIAAAGIhVAAQABAIADAIQADAHAFAGQAFAGAGADQAHACAHAAQAMABAIgHQAJgFADgIIAMAKQgKANgLAFQgKAGgNAAQgKAAgLgFgAgMgoQgGACgFAFQgFAFgCAHQgDAGAAAHIBEAAQAAgQgJgKQgJgKgPAAQgGAAgIAEg");
	this.shape_81.setTransform(129.5,-15.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgbA6IAAhNIgBgPIAAgUIAOAAIAAAVQACgEADgEIAHgIQADgEAFgCQAGgCAHAAIAKABIgDAQQgCgBgGAAQgIAAgGADQgFAEgEAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_82.setTransform(120.7,-15.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AgRA2QgKgEgIgIQgHgIgDgKQgFgLAAgNQAAgMAFgKQADgLAHgJQAIgIAJgEQAJgEAKAAQAMAAAJAEQAJAFAHAHQAGAIADAKQADAKABAMIAAAGIhVAAQABAIACAIQADAHAGAGQAFAGAHADQAGACAHAAQALABAJgHQAJgFAEgIIALAKQgJANgLAFQgMAGgNAAQgKAAgJgFgAgLgoQgHACgFAFQgFAFgDAHQgDAGAAAHIBFAAQAAgQgJgKQgJgKgQAAQgFAAgHAEg");
	this.shape_83.setTransform(103.9,-15.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgNA3QgKgEgHgIQgIgIgDgLQgEgLAAgNQAAgMAEgLQADgKAIgIQAHgIAKgFQAKgEALAAQALAAAJAFQAKAFAIAKIgMAJQgDgGgHgEQgHgFgJAAQgIAAgHAEQgHADgFAGQgFAGgDAIQgCAJAAAIQAAAKACAIQADAIAFAGQAFAGAHAEQAHADAIAAQAJAAAHgFQAHgEADgGIAMAKQgIAKgKAEQgJAFgLAAQgLAAgKgEg");
	this.shape_84.setTransform(92.9,-15.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHADAFAFQAFAEADAIQADAHAAAKIAAAyIABANIABAMIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPAEQgHACgGAEQgFAGAAAIQAAAGACAEQACADAEADQADACAFABIAIABQAHAAAGgCQAGgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_85.setTransform(81.2,-15.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AAeBbIAAg+QgBgTgFgKQgGgJgRAAIgEABQgFABgGAEQgGAEgEAIQgEAJgBAPIAAA6IgOAAIAAi1IAOAAIAABXIABAAIAGgIIAJgHIAJgEIAKgBQATAAAJALQAKALAAAVIAABHg");
	this.shape_86.setTransform(69.6,-19.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHADAFAFQAFAEADAIQADAHAAAKIAAAyIABANIABAMIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPAEQgHACgGAEQgFAGAAAIQAAAGACAEQACADAEADQADACAFABIAIABQAHAAAGgCQAGgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_87.setTransform(51.5,-15.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgNA3QgKgEgIgIQgGgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAGgIQAIgIAKgFQAKgEAMAAQAKAAAKAFQAKAFAHAKIgMAJQgEgGgGgEQgHgFgIAAQgJAAgGAEQgIADgFAGQgFAGgCAIQgDAJAAAIQAAAKADAIQACAIAFAGQAFAGAIAEQAGADAJAAQAIAAAHgFQAGgEAEgGIAMAKQgHAKgKAEQgKAFgKAAQgMAAgKgEg");
	this.shape_88.setTransform(41.2,-15.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgGBUIAAhwIANAAIAABwgAgGg+QgEgEAAgFQAAgFAEgDQADgEADAAQAEAAADAEQAEADAAAFQAAAFgEAEQgDADgEAAQgDAAgDgDg");
	this.shape_89.setTransform(32.9,-18.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AAFBIQgFgBgCgDQgEgEgCgFQgDgGABgJIAAhHIgXAAIAAgOIAXAAIAAgfIANAAIAAAfIAeAAIAAAOIgeAAIAABCIABAKQABAEACACQACADADAAIAGABIAIgBIAHgEIABAQQgJADgLAAIgJgBg");
	this.shape_90.setTransform(26.6,-17);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgSBSQgJgEgIgJQgGgHgFgLQgDgLAAgMQAAgOADgKQAFgKAGgIQAIgIAJgEQAKgEAJgBQAMABAKAEQAIAEAHAIQAGAIADAJQAEAKAAALIAAAHIhVAAQAAAJAEAIQADAHAFAFQAFAGAHADQAGADAHAAQAMAAAIgGQAJgFADgJIAMALQgKANgLAFQgLAGgNgBQgJABgLgFgAgLgNQgHADgFAFQgFAFgCAFQgEAHAAAHIBFAAQAAgRgJgIQgJgKgQAAQgGgBgGAEgAgMgzIAVgjIATAAIgcAjg");
	this.shape_91.setTransform(16.8,-18.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_92.setTransform(8.1,-19.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgVA5QgGgCgFgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAGgIAKgDQAKgEAKgBIAUgBIAIAAIAAgDQAAgdgbAAQgRAAgNAOIgJgMQAOgQAcAAQAIAAAHACQAHADAFAFQAFAEADAIQADAHAAAKIAAAyIABANIABAMIgOAAIgBgJIgBgJIAAAAQgGALgJAFQgJAFgLAAQgHAAgHgCgAAGAAIgPAEQgHACgGAEQgFAGAAAIQAAAGACAEQACADAEADQADACAFABIAIABQAHAAAGgCQAGgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_93.setTransform(-0.5,-15.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AAeBSIAAg+QAAgTgGgJQgGgKgQAAIgFABQgFABgFAFQgHAEgDAHQgFAJAAAPIAAA6IgOAAIAAhWIgBgMIgBgNIAPAAIABAJIAAAJIAAAAIAHgJIAIgHIAKgDIAJgCQATAAAKALQAJALAAAVIAABHgAghg4IACgJIAEgIQACgDAEgCQADgCAGAAIAIABIAHAFIAHADQAEACADAAQAFAAACgEQADgEABgEIAKAAIgDAJIgDAIQgDAEgEACQgDACgFAAQgEAAgEgCIgIgEIgGgDQgEgCgEAAQgFAAgCADQgDAEAAAEg");
	this.shape_94.setTransform(-12.2,-18.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AgSA2QgJgEgHgIQgHgIgFgKQgDgLAAgNQAAgMADgKQAFgLAHgJQAGgIAKgEQAKgEAKAAQALAAAJAEQAKAFAGAHQAGAIAEAKQACAKAAAMIAAAGIhUAAQABAIACAIQADAHAGAGQAFAGAGADQAHACAHAAQALABAJgHQAIgFAEgIIAMAKQgJANgMAFQgKAGgNAAQgLAAgKgFgAgMgoQgGACgFAFQgFAFgDAHQgCAGAAAHIBEAAQAAgQgJgKQgJgKgPAAQgGAAgIAEg");
	this.shape_95.setTransform(-24.3,-15.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgVA2QgKgFgIgMIANgJQAEAHAHAFQAGAEAJAAIAIgBQAFgBAEgCQADgCACgEQACgEAAgEQAAgJgGgDQgFgEgIgCIgOgEIgHgCQgEgCgFgCQgEgDgDgGQgDgFAAgJQAAgIADgGQADgHAGgEQAFgEAHgCQAHgCAGAAQALAAAJAEQAJAFAFALIgMAKQgEgIgFgDQgGgFgIAAIgHABIgGADQgEACgCADQgBADAAAFQgBAIAGADQAFAEAJADIAPADQAKADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgFAEgHACQgIACgHAAQgLAAgKgFg");
	this.shape_96.setTransform(-35,-15.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgSA2QgKgEgHgIQgHgIgEgKQgDgLAAgNQAAgMADgKQAEgLAHgJQAIgIAJgEQAKgEAJAAQAMAAAKAEQAIAFAHAHQAGAIAEAKQADAKAAAMIAAAGIhVAAQABAIADAIQADAHAFAGQAFAGAGADQAHACAHAAQAMABAIgHQAJgFADgIIAMAKQgKANgLAFQgLAGgMAAQgKAAgLgFgAgLgoQgHACgFAFQgFAFgCAHQgDAGgBAHIBFAAQAAgQgJgKQgJgKgQAAQgGAAgGAEg");
	this.shape_97.setTransform(-51.9,-15.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("AgVBYQgKgFgIgIQgHgIgEgKQgEgLAAgNQAAgNAEgKQAEgKAHgIQAIgIAKgEQAKgFALAAIAKABQAGABAFADQAGADAEAEQAFAEAEAGIAAAAIAAhYIAPAAIAAC0IgPAAIAAgSIAAAAQgEAFgFAEIgKAHIgLAEIgKABQgLAAgKgEgAgPgHQgHADgGAFQgFAGgCAJQgDAIAAAJQAAAJADAJQACAIAFAGQAGAGAHADQAHAEAIAAQAJAAAHgEQAIgDAFgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgFgFgIgDQgHgEgJAAQgIAAgHAEg");
	this.shape_98.setTransform(-65.1,-18.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AgVA2QgKgEgHgIQgIgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAHgIAKgEQAKgEALAAQAMAAAKAEQAKAEAHAIQAHAJAEALQAFAKAAAMQAAANgFALQgEAKgHAIQgHAIgKAEQgKAFgMAAQgLAAgKgFgAgPgoQgHADgGAGQgEAGgDAIQgDAJAAAIQAAAJADAIQADAIAEAHQAGAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgFgGgHgDQgHgEgJAAQgIAAgHAEg");
	this.shape_99.setTransform(-84.1,-15.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("Ag2BcIAAi0IAPAAIAAASQADgFAFgEIAKgHQAGgDAFgBIAKgBQAMAAAKAEQAKAEAHAIQAIAJAEALQAEAKAAANQAAANgEALQgEAJgIAIQgHAIgKAEQgKAFgMAAIgKgBIgLgEIgKgHQgFgEgDgGIAABYgAgQhJQgHADgFAGQgGAGgDAIQgDAJAAAJQAAAJADAIQADAIAGAHQAFAEAHAEQAIADAIAAQAJAAAHgDQAHgEAFgEQAFgHADgIQADgIAAgJQAAgJgDgJQgDgIgFgGQgFgGgHgDQgHgEgJAAQgIAAgIAEg");
	this.shape_100.setTransform(-97,-12.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AgGBUIAAhwIANAAIAABwgAgGg+QgEgEAAgFQAAgFAEgDQADgEADAAQAEAAADAEQAEADAAAFQAAAFgEAEQgDADgEAAQgDAAgDgDg");
	this.shape_101.setTransform(-106.6,-18.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AAFBIQgFgBgCgDQgEgEgCgFQgCgGgBgJIAAhHIgVAAIAAgOIAVAAIAAgfIAOAAIAAAfIAdAAIAAAOIgdAAIAABCIABAKQABAEACACQACADADAAIAGABIAHgBIAHgEIABAQQgIADgLAAIgJgBg");
	this.shape_102.setTransform(-112.9,-17);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgSA2QgJgEgIgIQgGgIgFgKQgDgLAAgNQAAgMADgKQAFgLAGgJQAIgIAJgEQAJgEALAAQALAAAKAEQAJAFAGAHQAGAIAEAKQACAKAAAMIAAAGIhUAAQABAIADAIQADAHAFAGQAFAGAGADQAHACAHAAQAMABAIgHQAJgFADgIIAMAKQgKANgLAFQgKAGgNAAQgKAAgLgFgAgMgoQgGACgFAFQgFAFgCAHQgDAGAAAHIBEAAQAAgQgJgKQgJgKgPAAQgGAAgIAEg");
	this.shape_103.setTransform(-128.8,-15.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AAFBIQgFgBgCgDQgEgEgCgFQgDgGABgJIAAhHIgXAAIAAgOIAXAAIAAgfIANAAIAAAfIAeAAIAAAOIgeAAIAABCIABAKQABAEACACQACADADAAIAGABIAIgBIAHgEIABAQQgJADgLAAIgJgBg");
	this.shape_104.setTransform(-138.5,-17);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AgWA2QgJgFgIgMIANgJQAEAHAHAFQAHAEAIAAIAJgBQAEgBAEgCQADgCACgEQACgEAAgEQAAgJgFgDQgHgEgIgCIgMgEIgIgCQgFgCgEgCQgEgDgDgGQgDgFAAgJQAAgIADgGQADgHAGgEQAFgEAHgCQAHgCAGAAQALAAAJAEQAJAFAGALIgOAKQgDgIgGgDQgFgFgIAAIgHABIgHADQgDACgBADQgCADAAAFQgBAIAGADQAFAEAJADIAOADQAMADAGAIQAIAHAAANQAAAJgDAGQgEAHgFAEQgGAEgIACQgGACgIAAQgLAAgLgFg");
	this.shape_105.setTransform(-146.8,-15.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgxBVIAAipIBgAAIAAAQIhQAAIAAA6IBLAAIAAAOIhLAAIAABBIBTAAIAAAQg");
	this.shape_106.setTransform(-157.5,-18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Estado
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#980D19").s().p("AgZBbIAAiNIAeAAIAACNgAgeg8IAVgdIAoAAIgiAdg");
	this.shape_107.setTransform(-197.1,10.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#980D19").s().p("AggBBQgNgHgHgNQgHgOAAgQIAAhXIAfAAIAABVQABAJADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQAEgHAAgJIAAhVIAfAAIAABXQAAAQgHAOQgHANgNAHQgNAIgUAAQgTAAgNgIg");
	this.shape_108.setTransform(-208.5,13);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#980D19").s().p("AgDBJQgXAAgSgJQgRgJgKgQQgJgQgBgXQABgVAJgQQALgQARgKQARgJAVAAQAVAAAQAKQARAJAKAQQALAQAAAVQAAAKgDAJQgDAKgGAHQgHAIgKAEIAAABIAoAAIAAAYgAgbglQgJAGgGAKQgGAKAAALQAAAMAGAKQAGAKAJAGQAKAGAMAAQALAAAKgGQAJgGAHgKQAFgKABgMQgBgLgFgKQgHgKgJgGQgKgGgLAAQgMAAgKAGg");
	this.shape_109.setTransform(-224.2,12.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#980D19").s().p("AAnBHIgMgeIg2AAIgMAeIgiAAIA8iNIAZAAIA+CNgAAQAPIgQgsIgRAsIAhAAg");
	this.shape_110.setTransform(-240.4,12.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#980D19").s().p("AgYAkIAAhHIAvAAIAAAPIggAAIAAANIAfAAIAAANIgfAAIAAAPIAiAAIAAAPg");
	this.shape_111.setTransform(-198.1,-5.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_112.setTransform(-204.4,-5.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#980D19").s().p("AgHAkIAAg5IgUAAIAAgOIA3AAIAAAOIgUAAIAAA5g");
	this.shape_113.setTransform(-211,-5.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#980D19").s().p("AgOAjQgGgCgFgEIALgNQADADADACQAEACAEAAIAEgBIAFgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgEgBIgHgDIgIgDQgEgBgCgEQgDgEAAgGQAAgHAEgFQAEgGAHgCQAFgDAGAAQAHAAAGACQAFACAFAEIgLALIgGgDIgGgBIgDAAIgFADQAAAAAAABQgBAAAAABQAAAAAAABQAAABgBAAQABADACACIAFADIAIACIAIAEQAEABADAEQABAEABAGQgBAIgDAFQgEAFgGADQgHADgGAAQgHAAgGgDg");
	this.shape_114.setTransform(-216.9,-5.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_115.setTransform(-223.5,-5.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_116.setTransform(-230.2,-5.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_117.setTransform(-236.8,-5.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_118.setTransform(-244.2,-5.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D7D7D7").s().p("AkpFTQgQAAgMgMQgMgNAAgQIAApTQAAgQAMgNQAMgMAQABIJTAAQARgBALAMQAMANAAAQIAAJTQAAAQgMANQgLAMgRAAg");
	this.shape_119.setTransform(-220.2,5.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#980D19").ss(2,1,1).p("Ah8B9IDCAAQAXAAAQgQQAQgQAAgXIAAjC");
	this.shape_120.setTransform(-194,31.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAXAAIDCAA");
	this.shape_121.setTransform(-246.3,31.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#980D19").ss(2,1,1).p("AB9B9IAAjCQAAgXgQgQQgQgQgXAAIjCAA");
	this.shape_122.setTransform(-194,-21);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjCAAQgXAAgQAQQgQAQAAAXIAADC");
	this.shape_123.setTransform(-246.3,-21);

	this.instance = new lib.Mapadebits31();
	this.instance.parent = this;
	this.instance.setTransform(-267,-45);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#980D19").ss(4,1,1).p("AhVAPIAvAwIB8h9");
	this.shape_124.setTransform(-218.6,8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CBAA0E").s().p("AkpFSQgQAAgNgMQgMgLABgRIAApSQgBgSAMgMQANgLAQgBIJTAAQARABAMALQAMAMgBASIAAJSQABARgMALQgMAMgRAAg");
	this.shape_125.setTransform(-220.2,5.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAWAAIDDAA");
	this.shape_126.setTransform(-246.3,31.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjDAAQgWAAgQAQQgQAQAAAXIAADC");
	this.shape_127.setTransform(-246.3,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]}).to({state:[{t:this.instance},{t:this.shape_127},{t:this.shape_122},{t:this.shape_126},{t:this.shape_120},{t:this.shape_125},{t:this.shape_124}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-45,527.8,100);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("signal4");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape.setTransform(18,36.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgDQgFgCgDgGQgDgGgBgHQABgJADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQAMACAIAIQAHAHAAAMQAAAKgEAGQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_1.setTransform(9.6,31.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_2.setTransform(-2.7,31.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgFgDgCgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgEIABAPQgIAEgNAAIgJgBg");
	this.shape_3.setTransform(-13.8,30.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_4.setTransform(-24.5,31.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCABgEQADgDAAgEIAAgJIAAiDIAQAAIAACGIAAAIQgBAGgCAGQgDAGgGAFQgHAEgLAAQgIAAgFgCgAAEhbQgDgEAAgFQAAgFADgDQAEgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_5.setTransform(-35.2,32);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgLBbIgLgEIgMgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIAMgHQAGgDAFgBIALgBQANAAALAFQAMAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgMAFQgLAEgNAAIgLgBgAgRgHQgIADgGAFQgGAGgDAJQgEAIAAAJQAAAJAEAJQADAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_6.setTransform(-43.8,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_7.setTransform(-58.7,31.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_8.setTransform(-79.1,31.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_9.setTransform(-93.5,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_10.setTransform(-113.6,31.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_11.setTransform(-127.2,28.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgPBVIAAhwIAPAAIAABwgAgWgxIAXgjIAWAAIgeAjg");
	this.shape_12.setTransform(-136.2,29);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_13.setTransform(-146.5,31.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_14.setTransform(-157.8,31.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFACAHAAQAIAAAFgEQAFgGADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_15.setTransform(209.1,10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_16.setTransform(193.7,4.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_17.setTransform(184.2,8.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgIA4IgthvIATAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_18.setTransform(171.8,8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_19.setTransform(163.1,5.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_20.setTransform(153.3,7.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_21.setTransform(133.5,8.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgBAIAAIAMAAIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA/g");
	this.shape_22.setTransform(123.9,7.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgLBbIgLgEIgLgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIALgHQAGgDAFgBIALgBQANAAALAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBgAgRgHQgIADgGAFQgGAGgDAJQgDAIgBAJQABAJADAJQADAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgIAAgJAEg");
	this.shape_23.setTransform(112,4.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_24.setTransform(97.1,8.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAHAEQAIAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFAAgJQAAgIADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgBACAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_25.setTransform(85,8.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_26.setTransform(66.6,8.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_27.setTransform(53,4.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgPBVIAAhvIAPAAIAABvgAgWgyIAXgiIAWAAIgfAig");
	this.shape_28.setTransform(44,5.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_29.setTransform(33.8,8.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_30.setTransform(22.5,8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_31.setTransform(6.3,14.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgGgFQgFgEgJAAIgHABIgIADIgGAGQgCACAAAFQABAIAFADQAGAEAKADIAQADQALADAJAHQAHAJABAMQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_32.setTransform(-2,8.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_33.setTransform(-13.7,8.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAGgBAHAAIAMAAIgDARQgDgCgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA/g");
	this.shape_34.setTransform(-22.6,7.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AglAuQgLgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAJAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_35.setTransform(-34.3,8.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgDIABAPQgJAEgNgBIgKAAg");
	this.shape_36.setTransform(-44.9,6.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_37.setTransform(-51.8,4.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_38.setTransform(-61.2,8.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_39.setTransform(-80.6,7.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_40.setTransform(-93.8,8.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_41.setTransform(-113.6,8.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_42.setTransform(-127.2,4.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgPBVIAAhvIAPAAIAABvgAgWgyIAXgiIAWAAIgeAig");
	this.shape_43.setTransform(-136.2,5.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_44.setTransform(-146.5,8.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_45.setTransform(-157.8,8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_46.setTransform(232.2,-15.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_47.setTransform(217.9,-19.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQAEgCACgEQACgDAAgFQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgDADAAAEQAAAIAGAEQAFADALADIAQAEQALACAJAHQAHAJABALQAAAKgFAGQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_48.setTransform(199.2,-15.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_49.setTransform(186.9,-15.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_50.setTransform(172.2,-13);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgDAAgFQAAgJgGgEQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFAEQAFADALADIAQAEQAMACAHAHQAJAJgBALQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_51.setTransform(160.1,-15.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_52.setTransform(148.3,-15.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_53.setTransform(138.7,-18.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgFAEgEQADgEAFgEQADgCAGgCQAFgCAIgBIAMACIgDAPQgDgBgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_54.setTransform(132.9,-15.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQAEgCACgEQACgDAAgFQAAgJgGgEQgGgDgKgCIgOgEIgHgCQgGgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQAMACAIAHQAHAJAAALQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_55.setTransform(116.2,-15.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_56.setTransform(103.9,-15.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_57.setTransform(93.9,-19.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGACgGAEQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_58.setTransform(77.5,-15.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_59.setTransform(64.4,-15.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_60.setTransform(44.4,-15.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgMAFQgLAFgMAAQgLAAgLgFQgKgEgIgHQgJgIgEgKQgEgKAAgMQAAgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAGAGAHAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_61.setTransform(30.1,-13);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_62.setTransform(16.4,-15.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AAFBIQgEgBgDgDQgEgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAPQgJAEgMABIgKgCg");
	this.shape_63.setTransform(5.8,-17.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_64.setTransform(-5.4,-15.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgFADgEQADgEAEgEQAEgCAGgCQAGgCAHgBIAMACIgDAPQgEgBgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_65.setTransform(-15.4,-15.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAFgFAEgFIALgGQAGgDAHgBIAKgBQAOAAALAEQALAFAHAIQAIAHAEAMQAFAKAAANQAAAMgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBIgNgEIgLgHQgEgEgFgFIAAAAIAABXgAgRhJQgIADgGAGQgGAGgEAJQgDAHAAAKQAAAJADAIQAEAJAGAFQAGAFAIAEQAIADAJAAQAKAAAIgDQAHgEAHgFQAFgFACgJQAEgIAAgJQAAgKgEgHQgCgJgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_66.setTransform(-27.4,-12.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_67.setTransform(-48.4,-15.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgDgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAPQgJAEgMABIgKgCg");
	this.shape_68.setTransform(-59,-17.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPALAAAYQAAAWgPAMQgPAKgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgFQAFgEACgFQACgGAAgFQAAgGgCgGQgCgFgFgEQgFgEgIgDQgIgCgLAAIgbAAg");
	this.shape_69.setTransform(-75.9,-18.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPALAAAYQAAAWgPAMQgPAKgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgFQAFgEACgFQACgGAAgFQAAgGgCgGQgCgFgFgEQgFgEgIgDQgIgCgLAAIgbAAg");
	this.shape_70.setTransform(-89.7,-18.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAPIhRAAIAABAIBaAAIAAAQg");
	this.shape_71.setTransform(-103.8,-18.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_72.setTransform(-124.9,-15.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgEgDgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAJgEIAAAPQgJAEgMABIgJgCg");
	this.shape_73.setTransform(-135.5,-17.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgDAAgFQAAgJgGgEQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFAEQAFADALADIAQAEQAMACAHAHQAJAJgBALQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_74.setTransform(-144.5,-15.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAPIhRAAIAABAIBaAAIAAAQg");
	this.shape_75.setTransform(-156.2,-18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Estado
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#980D19").s().p("AgZBbIAAiNIAeAAIAACNgAgeg8IAVgdIAoAAIgiAdg");
	this.shape_76.setTransform(-197.1,10.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#980D19").s().p("AggBBQgNgHgHgNQgHgOAAgQIAAhXIAfAAIAABVQABAJADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQAEgHAAgJIAAhVIAfAAIAABXQAAAQgHAOQgHANgNAHQgNAIgUAAQgTAAgNgIg");
	this.shape_77.setTransform(-208.5,13);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#980D19").s().p("AgDBJQgXAAgSgJQgRgJgKgQQgJgQgBgXQABgVAJgQQALgQARgKQARgJAVAAQAVAAAQAKQARAJAKAQQALAQAAAVQAAAKgDAJQgDAKgGAHQgHAIgKAEIAAABIAoAAIAAAYgAgbglQgJAGgGAKQgGAKAAALQAAAMAGAKQAGAKAJAGQAKAGAMAAQALAAAKgGQAJgGAHgKQAFgKABgMQgBgLgFgKQgHgKgJgGQgKgGgLAAQgMAAgKAGg");
	this.shape_78.setTransform(-224.2,12.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#980D19").s().p("AAnBHIgMgeIg2AAIgMAeIgiAAIA8iNIAZAAIA+CNgAAQAPIgQgsIgRAsIAhAAg");
	this.shape_79.setTransform(-240.4,12.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#980D19").s().p("AgYAkIAAhHIAvAAIAAAPIggAAIAAANIAfAAIAAANIgfAAIAAAPIAiAAIAAAPg");
	this.shape_80.setTransform(-198.1,-5.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_81.setTransform(-204.4,-5.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#980D19").s().p("AgHAkIAAg5IgUAAIAAgOIA3AAIAAAOIgUAAIAAA5g");
	this.shape_82.setTransform(-211,-5.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#980D19").s().p("AgOAjQgGgCgFgEIALgNQADADADACQAEACAEAAIAEgBIAFgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgEgBIgHgDIgIgDQgEgBgCgEQgDgEAAgGQAAgHAEgFQAEgGAHgCQAFgDAGAAQAHAAAGACQAFACAFAEIgLALIgGgDIgGgBIgDAAIgFADQAAAAAAABQgBAAAAABQAAAAAAABQAAABgBAAQABADACACIAFADIAIACIAIAEQAEABADAEQABAEABAGQgBAIgDAFQgEAFgGADQgHADgGAAQgHAAgGgDg");
	this.shape_83.setTransform(-216.9,-5.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_84.setTransform(-223.5,-5.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_85.setTransform(-230.2,-5.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_86.setTransform(-236.8,-5.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_87.setTransform(-244.2,-5.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D7D7D7").s().p("AkpFTQgQAAgMgMQgMgNAAgQIAApTQAAgQAMgNQAMgMAQABIJTAAQARgBALAMQAMANAAAQIAAJTQAAAQgMANQgLAMgRAAg");
	this.shape_88.setTransform(-220.2,5.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#980D19").ss(2,1,1).p("Ah8B9IDCAAQAXAAAQgQQAQgQAAgXIAAjC");
	this.shape_89.setTransform(-194,31.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAXAAIDCAA");
	this.shape_90.setTransform(-246.3,31.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#980D19").ss(2,1,1).p("AB9B9IAAjCQAAgXgQgQQgQgQgXAAIjCAA");
	this.shape_91.setTransform(-194,-21);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjCAAQgXAAgQAQQgQAQAAAXIAADC");
	this.shape_92.setTransform(-246.3,-21);

	this.instance = new lib.Mapadebits31();
	this.instance.parent = this;
	this.instance.setTransform(-267,-45);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#980D19").ss(4,1,1).p("AhVAPIAvAwIB8h9");
	this.shape_93.setTransform(-218.6,8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CBAA0E").s().p("AkpFSQgQAAgNgMQgMgLABgRIAApSQgBgSAMgMQANgLAQgBIJTAAQARABAMALQAMAMgBASIAAJSQABARgMALQgMAMgRAAg");
	this.shape_94.setTransform(-220.2,5.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAWAAIDDAA");
	this.shape_95.setTransform(-246.3,31.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjDAAQgWAAgQAQQgQAQAAAXIAADC");
	this.shape_96.setTransform(-246.3,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]}).to({state:[{t:this.instance},{t:this.shape_96},{t:this.shape_91},{t:this.shape_95},{t:this.shape_89},{t:this.shape_94},{t:this.shape_93}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-45,519,100);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("signal3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181818").s().p("AgHAJQgDgEAAgFQAAgEADgEQADgEAEAAQAFAAADAEQADAEAAAEQAAAFgDAEQgDAEgFAAQgEAAgDgEg");
	this.shape.setTransform(42.8,36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181818").s().p("AgTA2QgJgEgHgIQgHgIgDgKQgEgLAAgNQAAgMAEgKQADgMAHgHQAHgIAJgFQAJgEAKAAQALAAAJAEQAKAFAGAIQAHAHAEAMQADAKAAAMQAAANgDALQgEAKgHAIQgGAIgKAEQgJAFgLAAQgKAAgJgFgAgOgoQgGADgFAGQgFAGgCAIQgDAJAAAIQAAAJADAIQACAIAFAHQAFAFAGAEQAHAEAHgBQAIABAHgEQAHgEAEgFQAFgHACgIQADgIAAgJQAAgIgDgJQgCgIgFgGQgEgGgHgDQgHgEgIAAQgHAAgHAEg");
	this.shape_1.setTransform(34,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181818").s().p("AgxBcIAAi1IANAAIAAATIABAAQADgFAEgFIAJgGQAFgDAGgBIAIgBQALAAAKAEQAJAFAHAIQAGAHAEAMQADAKAAANQAAANgDALQgEAJgGAIQgHAIgJAEQgKAFgLAAIgIgBIgLgEIgJgHQgEgEgDgGIgBAAIAABYgAgOhJQgHADgFAGQgFAGgDAIQgDAJAAAJQAAAJADAIQADAIAFAHQAFAEAHAEQAHAEAHgBQAIABAHgEQAGgEAGgEQAEgHACgIQADgIAAgJQAAgJgDgJQgCgIgEgGQgGgGgGgDQgHgEgIAAQgHAAgHAEg");
	this.shape_2.setTransform(22.2,35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181818").s().p("AgZA5IAAhMIAAgPIgBgUIANAAIAAAVQACgFADgDIAGgIIAIgGQAFgCAGAAIAKABIgDAQQgCgBgGAAQgHAAgFADQgFAEgEAFQgDAGgCAGIgCAMIAAA+g");
	this.shape_3.setTransform(13.2,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#181818").s().p("AgQA2QgJgEgGgIQgHgIgEgKQgEgLAAgNQAAgMAEgKQAEgMAHgHQAGgIAIgFQAKgEAIAAQALAAAIAEQAJAFAGAIQAGAHADALQACAKAAALIAAAGIhNAAQABAIACAIQADAIAFAFQAFAGAGADQAFACAGAAQALAAAIgFQAIgGAEgIIALAKQgJANgKAFQgLAGgMAAQgJAAgJgFgAgKgoQgGACgEAFQgFAFgDAHQgDAGAAAHIA/AAQAAgQgIgKQgIgKgPAAQgFAAgGAEg");
	this.shape_4.setTransform(3.3,32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181818").s().p("AgfAuQgJgLAAgVIAAhHIAOAAIAAA+IABAQQABAHADAFQADAFAEADQAFACAIAAIAFgBQAFgBAEgEQAGgEAEgJQAEgJAAgPIAAg5IANAAIAABXIAAAMIABANIgNAAIgBgJIAAgJIAAAAIgGAIQgEAEgEADQgEADgFABQgEACgFAAQgSAAgIgMg");
	this.shape_5.setTransform(-8,32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#181818").s().p("AgMA3QgJgEgHgIQgHgIgDgLQgEgLABgNQgBgMAEgLQADgKAHgIQAHgIAJgFQAJgEALAAQAJAAAJAFQAKAFAGAKIgKAJQgEgGgGgEQgGgFgIAAQgIAAgGAEQgGADgGAGQgEAGgCAIQgDAJAAAIQAAAKADAIQACAIAEAGQAGAGAGAEQAGADAIAAQAIAAAGgFQAGgEAEgGIAKAKQgGAKgKAEQgJAFgJAAQgLAAgJgEg");
	this.shape_6.setTransform(-18.1,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181818").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_7.setTransform(-31.3,28.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#181818").s().p("AgTA5QgFgCgFgEQgFgEgCgGQgDgHAAgIQAAgOAGgHQAGgIAJgDQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNAOIgIgMQAOgQAZAAQAHAAAHACQAGADAFAFQAEAEADAIQADAHAAAKIAAAyIAAANIABAMIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGAAIgOAEQgHACgFAEQgFAGAAAIQAAAGACADQACAEAEADQADACAEABIAIABQAGAAAFgCQAGgDADgFQAEgFACgGQACgIAAgHIAAgIIgHAAIgNAAg");
	this.shape_8.setTransform(-39.3,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#181818").s().p("AgQA2QgJgEgHgIQgGgIgEgKQgDgLAAgNQAAgMADgKQAEgMAGgHQAHgIAJgFQAJgEAIAAQALAAAIAEQAJAFAGAIQAFAHAEALQACAKAAALIAAAGIhNAAQAAAIAEAIQACAIAFAFQAEAGAHADQAGACAFAAQALAAAIgFQAIgGAEgIIALAKQgJANgKAFQgKAGgNAAQgJAAgJgFgAgKgoQgGACgFAFQgFAFgCAHQgDAGAAAHIA/AAQAAgQgIgKQgIgKgPAAQgFAAgGAEg");
	this.shape_9.setTransform(-55.5,32.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#181818").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_10.setTransform(-63.5,28.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#181818").s().p("AgIBbIgLgEIgJgHQgEgEgDgFIgBAAIAAASIgOAAIAAi0IAOAAIAABYIABAAQADgGAEgEIAJgHQAFgDAGgBIAIgBQALAAAJAFQAJAEAIAIQAGAIAEAKQADAKAAANQAAANgDALQgEAKgGAIQgIAIgJAFQgJAEgLAAIgIgBgAgOgHQgHADgFAFQgFAGgDAJQgCAIAAAJQAAAJACAJQADAIAFAGQAFAGAHADQAHAEAHAAQAIAAAHgEQAGgDAGgGQAEgGACgIQADgJAAgJQAAgJgDgIQgCgJgEgGQgGgFgGgDQgHgEgIAAQgHAAgHAEg");
	this.shape_11.setTransform(-71.8,28.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#181818").s().p("AgGBTIAAhvIANAAIAABvgAgGg+QgDgEAAgFQAAgFADgDQADgEADAAQAEAAADAEQADADAAAFQAAAFgDAEQgDADgEgBQgDABgDgDg");
	this.shape_12.setTransform(-80.7,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#181818").s().p("AgUA2QgJgFgHgMIAMgJQAEAHAGAFQAGAFAIgBIAIgBQAEgBADgCQADgCACgEQACgEAAgEQAAgJgFgDQgFgEgIgCIgMgEIgGgCQgFgCgEgCQgEgDgCgGQgDgFAAgJQAAgIADgGQADgHAFgEQAFgEAGgCQAGgCAGAAQAKAAAIAEQAJAFAEALIgMAJQgDgHgFgDQgFgFgHAAIgGABIgGADQgDACgCADQgCAEAAAEQAAAIAFADQAFAEAIADIAOAEQAKACAGAIQAHAHAAAMQAAAKgDAGQgEAHgFAEQgFAEgHACQgGACgHAAQgKAAgKgFg");
	this.shape_13.setTransform(-87.4,32.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#181818").s().p("AgTA2QgJgEgHgIQgHgIgDgKQgEgLAAgNQAAgMAEgKQADgMAHgHQAHgIAJgFQAJgEAKAAQALAAAJAEQAKAFAGAIQAHAHAEAMQADAKAAAMQAAANgDALQgEAKgHAIQgGAIgKAEQgJAFgLAAQgKAAgJgFgAgOgoQgGADgFAGQgFAGgCAIQgDAJAAAIQAAAJADAIQACAIAFAHQAFAFAGAEQAHAEAHgBQAIABAHgEQAHgEAEgFQAFgHACgIQADgIAAgJQAAgIgDgJQgCgIgFgGQgEgGgHgDQgHgEgIAAQgHAAgHAEg");
	this.shape_14.setTransform(-97.8,32.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#181818").s().p("AgyBcIAAi1IAOAAIAAATIABAAQADgFAEgFIAJgGQAFgDAGgBIAIgBQALAAAJAEQAJAFAIAIQAGAHAEAMQADAKAAANQAAANgDALQgEAJgGAIQgIAIgJAEQgJAFgLAAIgIgBIgLgEIgJgHQgEgEgDgGIgBAAIAABYgAgOhJQgHADgFAGQgFAGgDAIQgCAJAAAJQAAAJACAIQADAIAFAHQAFAEAHAEQAHAEAHgBQAIABAHgEQAGgEAGgEQAEgHACgIQADgIAAgJQAAgJgDgJQgCgIgEgGQgGgGgGgDQgHgEgIAAQgHAAgHAEg");
	this.shape_15.setTransform(-109.6,35.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#181818").s().p("AgTA5QgFgCgFgEQgFgEgCgGQgDgHAAgIQAAgOAGgHQAGgIAJgDQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNAOIgIgMQAOgQAZAAQAHAAAHACQAGADAFAFQAEAEADAIQADAHAAAKIAAAyIAAANIABAMIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGAAIgOAEQgHACgFAEQgFAGAAAIQAAAGACADQACAEAEADQADACAEABIAIABQAGAAAFgCQAGgDADgFQAEgFACgGQACgIAAgHIAAgIIgHAAIgNAAg");
	this.shape_16.setTransform(-127.2,32.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#181818").s().p("AgMA3QgKgEgGgIQgHgIgDgLQgEgLAAgNQAAgMAEgLQADgKAHgIQAGgIAKgFQAKgEAKAAQAJAAAJAFQAJAFAIAKIgLAJQgEgGgGgEQgGgFgIAAQgIAAgGAEQgHADgFAGQgEAGgDAIQgCAJAAAIQAAAKACAIQADAIAEAGQAFAGAHAEQAGADAIAAQAIAAAGgFQAGgEAEgGIALAKQgIAKgJAEQgJAFgJAAQgKAAgKgEg");
	this.shape_17.setTransform(-136.7,32.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#181818").s().p("AgZA5IAAhMIAAgPIgBgUIANAAIAAAVQACgFADgDIAGgIIAIgGQAFgCAGAAIAKABIgDAQQgCgBgGAAQgHAAgFADQgFAEgDAFQgEAGgCAGIgCAMIAAA+g");
	this.shape_18.setTransform(-144.4,32.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#181818").s().p("AgQA2QgJgEgHgIQgGgIgEgKQgDgLAAgNQAAgMADgKQAEgMAGgHQAHgIAIgFQAJgEAJAAQALAAAIAEQAJAFAGAIQAGAHADALQACAKAAALIAAAGIhNAAQABAIADAIQACAIAFAFQAFAGAGADQAFACAGAAQALAAAIgFQAIgGAEgIIALAKQgJANgKAFQgLAGgMAAQgJAAgJgFgAgKgoQgGACgEAFQgFAFgDAHQgDAGAAAHIA/AAQAAgQgIgKQgIgKgPAAQgFAAgGAEg");
	this.shape_19.setTransform(-154.3,32.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#181818").s().p("AgMA3QgJgEgHgIQgGgIgEgLQgDgLAAgNQAAgMADgLQAEgKAGgIQAHgIAJgFQAKgEAKAAQAKAAAIAFQAJAFAHAKIgKAJQgEgGgGgEQgGgFgIAAQgIAAgGAEQgGADgGAGQgEAGgDAIQgCAJAAAIQAAAKACAIQADAIAEAGQAGAGAGAEQAGADAIAAQAIAAAGgFQAGgEAEgGIAKAKQgHAKgJAEQgIAFgKAAQgKAAgKgEg");
	this.shape_20.setTransform(-164.4,32.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#181818").s().p("AgUA2QgJgFgHgMIAMgJQAEAIAGAEQAGAFAIgBIAIgBQAEAAADgDQADgCACgEQACgDAAgFQAAgJgFgEQgFgDgIgCIgMgEIgGgCQgFgCgEgDQgEgDgCgFQgDgGAAgHQAAgJADgGQADgHAFgEQAFgEAGgCQAGgCAGAAQAKAAAIAEQAJAFAEALIgMAJQgDgGgFgEQgFgFgHAAIgGABIgGADQgDACgCAEQgCADAAAEQAAAIAFAEQAFADAIADIAOAEQAKACAGAHQAHAJAAALQAAAKgDAGQgEAGgFAFQgFAEgHACQgGACgHAAQgKAAgKgFg");
	this.shape_21.setTransform(220,5.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#181818").s().p("AgTBUQgFgCgFgEQgFgEgCgGQgDgHAAgHQAAgOAGgIQAGgIAJgEQAJgDAJgBIATgBIAHAAIAAgEQAAgbgZgBQgPABgNANIgIgMQAOgQAZAAQAHABAHACQAGACAFAFQAEAFADAIQADAHAAAJIAAAyIAAAOIABALIgMAAIgBgJIgBgJIAAAAQgGAMgIAFQgIAEgKABQgHgBgGgCgAAGAcIgOADQgHACgFAFQgFAFAAAJQAAAFACAEQACAEAEACQADADAEABIAIABQAGAAAFgDQAGgDADgEQAEgGACgGQACgHAAgHIAAgIIgHAAIgNAAgAgIgzIATgjIASAAIgaAjg");
	this.shape_22.setTransform(210.2,2.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#181818").s().p("AA6A5IAAhAQAAgRgFgJQgFgKgOAAQgIABgFADQgEADgEAGQgDAGgBAIIgBAPIAAA6IgNAAIAAhAQAAgRgFgJQgFgKgOAAIgFABQgFACgEAEQgFAFgEAIQgEAIAAAPIAAA5IgNAAIAAhWIAAgNIgBgMIAOAAIAAARIABAAQAEgKAJgFQAJgEAJgBIAIABQAEABAEADQAEACAEAFQACAFACAGQAFgKAIgHQAJgFAKgBQASAAAJAMQAIALAAAVIAABGg");
	this.shape_23.setTransform(196.4,5.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#181818").s().p("AgTA3QgJgFgHgIQgHgIgDgLQgEgLAAgMQAAgMAEgKQADgMAHgHQAHgIAJgFQAJgEAKAAQALAAAJAEQAKAFAGAIQAHAHAEAMQADAKAAAMQAAAMgDALQgEALgHAIQgGAIgKAFQgJAEgLAAQgKAAgJgEgAgOgoQgGADgFAGQgFAGgCAJQgDAHAAAJQAAAJADAIQACAJAFAGQAFAFAGAEQAHADAHAAQAIAAAHgDQAHgEAEgFQAFgGACgJQADgIAAgJQAAgJgDgHQgCgJgFgGQgEgGgHgDQgHgEgIAAQgHAAgHAEg");
	this.shape_24.setTransform(176.3,5.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#181818").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_25.setTransform(167.9,1.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgEgCgGQgDgGAAgIQAAgNAGgJQAGgHAJgDQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAFADAIQADAIAAAJIAAAyIAAANIABAMIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOADQgHACgFAFQgFAEAAAJQAAAFACAEQACAFAEACQADADAEAAIAIABQAGAAAFgDQAGgCADgFQAEgFACgGQACgIAAgHIAAgIIgHAAIgNABg");
	this.shape_26.setTransform(154.4,5.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#181818").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_27.setTransform(147,1.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#181818").s().p("AgZA5IAAhLIAAgQIgBgUIANAAIAAAVQACgFADgEIAGgIIAIgEQAFgCAGgBIAKACIgCAPQgDgBgFAAQgIAAgGAEQgEADgEAGQgDAFgCAGIgCAMIAAA+g");
	this.shape_28.setTransform(142.1,5.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#181818").s().p("AgQA3QgJgFgGgIQgHgIgDgLQgFgLAAgMQAAgMAFgKQADgMAHgHQAGgIAIgFQAKgEAJAAQAKAAAJAEQAIAFAGAIQAFAHADALQADAKABALIAAAGIhOAAQAAAJADAHQADAHAFAGQAFAFAFADQAHADAGAAQAKAAAIgFQAIgGAEgIIAKAKQgIANgLAFQgKAGgLAAQgKAAgJgEgAgKgoQgGACgEAFQgFAGgDAFQgDAIAAAGIA/AAQAAgQgIgKQgIgKgOAAQgGAAgGAEg");
	this.shape_29.setTransform(132.2,5.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#181818").s().p("AAcA5IAAg9QAAgSgFgLQgGgKgPAAIgEABQgFACgFAEQgGAFgDAIQgFAIAAAPIAAA5IgNAAIAAhWIAAgMIgBgNIAOAAIAAAKIAAAIIABAAQACgEAEgEIAHgHIAJgEIAJgCQASAAAJAMQAIALAAAVIAABGg");
	this.shape_30.setTransform(120.8,5.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#181818").s().p("AgQA3QgJgFgHgIQgGgIgEgLQgDgLAAgMQAAgMADgKQAEgMAGgHQAHgIAJgFQAJgEAIAAQALAAAIAEQAJAFAGAIQAFAHAEALQACAKAAALIAAAGIhNAAQAAAJAEAHQACAHAFAGQAEAFAHADQAGADAFAAQALAAAIgFQAIgGAEgIIALAKQgJANgKAFQgKAGgNAAQgJAAgJgEgAgKgoQgGACgFAFQgFAGgCAFQgDAIAAAGIA/AAQAAgQgIgKQgIgKgPAAQgFAAgGAEg");
	this.shape_31.setTransform(109.7,5.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#181818").s().p("AAFBIQgFgBgCgDQgDgEgDgFQgCgGAAgKIAAhGIgUAAIAAgOIAUAAIAAggIANAAIAAAgIAbAAIAAAOIgbAAIAABCIAAAKQABAEACACQACACADABIAFABIAHgBIAHgEIABAPQgIAEgKABIgIgCg");
	this.shape_32.setTransform(100.7,4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgEgCgGQgDgGAAgIQAAgNAGgJQAGgHAJgDQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAFADAIQADAIAAAJIAAAyIAAANIABAMIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOADQgHACgFAFQgFAEAAAJQAAAFACAEQACAFAEACQADADAEAAIAIABQAGAAAFgDQAGgCADgFQAEgFACgGQACgIAAgHIAAgIIgHAAIgNABg");
	this.shape_33.setTransform(86.2,5.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#181818").s().p("AgTBYQgJgFgIgIQgGgIgDgKQgEgLgBgNQABgNAEgKQADgKAGgIQAIgIAJgEQAJgFAKAAIAKABQAFABAFADIAJAHQAEAEAEAGIAAhYIAOAAIAAC0IgOAAIAAgSQgEAFgEAEIgJAHIgKAEIgKABQgKAAgJgEgAgOgHQgHADgEAFQgFAGgDAJQgCAIAAAJQAAAJACAJQADAIAFAGQAEAGAHADQAGAEAIAAQAIAAAHgEQAHgDAFgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgFgFgHgDQgHgEgIAAQgIAAgGAEg");
	this.shape_34.setTransform(74.8,2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#181818").s().p("AAcA5IAAg9QAAgSgGgLQgFgKgPAAIgFABQgEACgGAEQgFAFgEAIQgDAIAAAPIAAA5IgOAAIAAhWIAAgMIgBgNIAOAAIABAKIAAAIIAAAAQACgEADgEIAIgHIAJgEIAIgCQATAAAIAMQAJALAAAVIAABGg");
	this.shape_35.setTransform(63.1,5.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#181818").s().p("AgQA3QgJgFgGgIQgHgIgDgLQgFgLAAgMQAAgMAFgKQADgMAHgHQAGgIAIgFQAKgEAIAAQALAAAJAEQAIAFAGAIQAFAHADALQADAKAAALIAAAGIhNAAQAAAJADAHQADAHAFAGQAFAFAFADQAHADAGAAQAKAAAIgFQAIgGAEgIIAKAKQgIANgKAFQgLAGgLAAQgKAAgJgEgAgKgoQgGACgEAFQgFAGgDAFQgDAIAAAGIA/AAQAAgQgIgKQgIgKgPAAQgFAAgGAEg");
	this.shape_36.setTransform(52,5.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#181818").s().p("AgGBTIAAhvIANAAIAABvgAgGg+QgDgEAAgFQAAgFADgDQADgEADABQAEgBADAEQADADAAAFQAAAFgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_37.setTransform(44,2.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#181818").s().p("AA6A5IAAhAQAAgRgFgJQgFgKgOAAQgIABgEADQgFADgEAGQgDAGgCAIIgBAPIAAA6IgMAAIAAhAQAAgRgFgJQgFgKgOAAIgGABQgEACgFAEQgEAFgEAIQgDAIgBAPIAAA5IgNAAIAAhWIAAgNIgBgMIAOAAIAAARIABAAQAEgKAJgFQAJgEAJgBIAHABQAFABAEADQAEACADAFQADAFADAGQADgKAJgHQAJgFAJgBQATAAAIAMQAJALAAAVIAABGg");
	this.shape_38.setTransform(32.8,5.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#181818").s().p("AgTA3QgJgFgHgIQgHgIgDgLQgEgLAAgMQAAgMAEgKQADgMAHgHQAHgIAJgFQAJgEAKAAQALAAAJAEQAKAFAGAIQAHAHAEAMQADAKAAAMQAAAMgDALQgEALgHAIQgGAIgKAFQgJAEgLAAQgKAAgJgEgAgOgoQgGADgFAGQgFAGgCAJQgDAHAAAJQAAAJADAIQACAJAFAGQAFAFAGAEQAHADAHAAQAIAAAHgDQAHgEAEgFQAFgGACgJQADgIAAgJQAAgJgDgHQgCgJgFgGQgEgGgHgDQgHgEgIAAQgHAAgHAEg");
	this.shape_39.setTransform(18.3,5.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#181818").s().p("AgMA3QgKgEgGgIQgHgIgDgLQgDgLAAgNQAAgMADgLQADgKAHgIQAGgIAKgFQAJgEALAAQAKAAAJAFQAIAFAHAKIgLAJQgDgGgGgEQgGgFgIAAQgIAAgGAEQgGADgFAGQgFAGgCAIQgDAJAAAIQAAAKADAIQACAIAFAGQAFAGAGAEQAGADAIAAQAIAAAGgFQAGgEADgGIALAKQgHAKgIAEQgJAFgKAAQgLAAgJgEg");
	this.shape_40.setTransform(7.8,5.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#181818").s().p("AgQA3QgJgFgHgIQgGgIgEgLQgDgLAAgMQAAgMADgKQAEgMAGgHQAHgIAIgFQAJgEAJAAQALAAAIAEQAJAFAGAIQAGAHADALQACAKAAALIAAAGIhNAAQABAJADAHQACAHAFAGQAFAFAGADQAFADAGAAQALAAAIgFQAIgGAEgIIALAKQgJANgKAFQgLAGgMAAQgJAAgJgEgAgKgoQgGACgEAFQgFAGgDAFQgDAIAAAGIA/AAQAAgQgIgKQgIgKgPAAQgFAAgGAEg");
	this.shape_41.setTransform(-3.1,5.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#181818").s().p("AgZA5IAAhLIgBgQIAAgUIAOAAIAAAVQABgFADgEIAGgIIAIgEQAFgCAGgBIAKACIgCAPQgDgBgFAAQgIAAgGAEQgEADgEAGQgDAFgCAGIgBAMIAAA+g");
	this.shape_42.setTransform(-11.2,5.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#181818").s().p("AgQA3QgJgFgGgIQgHgIgDgLQgFgLAAgMQAAgMAFgKQADgMAHgHQAGgIAIgFQAKgEAJAAQAKAAAJAEQAIAFAGAIQAFAHADALQADAKABALIAAAGIhOAAQAAAJADAHQADAHAFAGQAFAFAFADQAHADAGAAQAKAAAIgFQAIgGAEgIIAKAKQgIANgLAFQgKAGgLAAQgKAAgJgEgAgKgoQgGACgFAFQgEAGgDAFQgDAIAAAGIA/AAQAAgQgIgKQgIgKgOAAQgGAAgGAEg");
	this.shape_43.setTransform(-26.6,5.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#181818").s().p("AgUA2QgJgFgHgMIAMgJQAEAIAGAEQAGAFAIgBIAIgBQAEAAADgDQADgCACgEQACgDAAgFQAAgJgFgEQgFgDgIgCIgMgEIgGgCQgFgCgEgDQgEgDgCgFQgDgGAAgHQAAgJADgGQADgHAFgEQAFgEAGgCQAGgCAGAAQAKAAAIAEQAJAFAEALIgMAJQgDgGgFgEQgFgFgHAAIgGABIgGADQgDACgCAEQgCADAAAEQAAAIAFAEQAFADAIADIAOAEQAKACAGAHQAHAJAAALQAAAKgDAGQgEAGgFAFQgFAEgHACQgGACgHAAQgKAAgKgFg");
	this.shape_44.setTransform(-36.5,5.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#181818").s().p("AgOAcIANg3IAQAAIgQA3g");
	this.shape_45.setTransform(-49.2,11.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgEgCgGQgDgGAAgIQAAgNAGgJQAGgHAJgDQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAFADAIQADAIAAAJIAAAyIAAANIABAMIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOADQgHACgFAFQgFAEAAAJQAAAFACAEQACAFAEACQADADAEAAIAIABQAGAAAFgDQAGgCADgFQAEgFACgGQACgIAAgHIAAgIIgHAAIgNABg");
	this.shape_46.setTransform(-57.6,5.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#181818").s().p("AgaBRQgLgGgJgLIAKgNQAGAKAJAFQAKAGALAAQAJAAAIgEQAHgDAEgGQAEgGACgIQACgIAAgJIAAgUIAAAAQgHALgJAFQgJAFgLAAQgJAAgJgFQgJgEgHgHQgGgIgEgKQgEgKAAgMQAAgNAEgKQADgLAHgIQAGgIAJgEQAJgEAKAAIAIAAIAKAEIAJAGQAFAFAEAGIAAAAIAAgTIANAAIAABvIgBATQgCALgGAIQgFAJgKAGQgKAFgPAAQgOAAgMgFgAgMhEQgHAEgEAGQgFAGgDAHQgDAIAAAJQAAAJADAIQADAIAFAEQAEAGAHAEQAGADAHAAQAHAAAHgDQAGgDAFgFQAFgFADgIQADgIgBgKQAAgJgCgIQgCgHgFgGQgFgGgGgEQgHgDgIAAQgHAAgGADg");
	this.shape_47.setTransform(-69,8.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#181818").s().p("AgZA5IAAhLIAAgQIgBgUIANAAIAAAVQACgFADgEIAGgIIAIgEQAFgCAGgBIAKACIgDAPQgCgBgGAAQgHAAgFAEQgFADgDAGQgEAFgCAGIgCAMIAAA+g");
	this.shape_48.setTransform(-77.4,5.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgEgCgGQgDgGAAgIQAAgNAGgJQAGgHAJgDQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAFADAIQADAIAAAJIAAAyIAAANIABAMIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOADQgHACgFAFQgFAEAAAJQAAAFACAEQACAFAEACQADADAEAAIAIABQAGAAAFgDQAGgCADgFQAEgFACgGQACgIAAgHIAAgIIgHAAIgNABg");
	this.shape_49.setTransform(-87.1,5.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#181818").s().p("AgMA3QgKgEgGgIQgHgIgDgLQgDgLAAgNQAAgMADgLQADgKAHgIQAGgIAKgFQAJgEALAAQAKAAAJAFQAIAFAHAKIgLAJQgDgGgGgEQgGgFgIAAQgIAAgGAEQgGADgFAGQgFAGgCAIQgDAJAAAIQAAAKADAIQACAIAFAGQAFAGAGAEQAGADAIAAQAIAAAGgFQAGgEADgGIALAKQgHAKgIAEQgJAFgKAAQgLAAgJgEg");
	this.shape_50.setTransform(-96.6,5.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgEgCgGQgDgGAAgIQAAgNAGgJQAGgHAJgDQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAFADAIQADAIAAAJIAAAyIAAANIABAMIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOADQgHACgFAFQgFAEAAAJQAAAFACAEQACAFAEACQADADAEAAIAIABQAGAAAFgDQAGgCADgFQAEgFACgGQACgIAAgHIAAgIIgHAAIgNABg");
	this.shape_51.setTransform(-113,5.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#181818").s().p("AAcA5IAAg9QAAgSgGgLQgFgKgPAAIgFABQgEACgGAEQgEAFgFAIQgDAIAAAPIAAA5IgOAAIAAhWIAAgMIgBgNIAOAAIABAKIAAAIIAAAAQACgEADgEIAIgHIAJgEIAIgCQATAAAIAMQAJALAAAVIAABGg");
	this.shape_52.setTransform(-123.7,5.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#181818").s().p("AgfAuQgJgLAAgVIAAhHIAOAAIAAA+IABAQQABAHADAFQADAFAEADQAFACAIAAIAFgBQAFgBAEgEQAGgEAEgJQAEgJAAgPIAAg5IANAAIAABXIAAAMIABANIgNAAIgBgJIAAgJIAAAAIgGAIQgEAEgEADQgEADgFABQgEACgFAAQgSAAgIgMg");
	this.shape_53.setTransform(-134.9,5.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#181818").s().p("AgQA3QgJgFgHgIQgGgIgEgLQgDgLAAgMQAAgMADgKQAEgMAGgHQAHgIAIgFQAJgEAJAAQALAAAIAEQAJAFAGAIQAGAHADALQACAKAAALIAAAGIhNAAQABAJADAHQACAHAFAGQAEAFAHADQAGADAFAAQALAAAIgFQAIgGAEgIIALAKQgJANgKAFQgLAGgMAAQgJAAgJgEgAgKgoQgGACgEAFQgGAGgCAFQgDAIAAAGIA/AAQAAgQgIgKQgIgKgPAAQgFAAgGAEg");
	this.shape_54.setTransform(-151.7,5.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#181818").s().p("AgUBYQgIgFgIgIQgGgIgEgKQgDgLAAgNQAAgNADgKQAEgKAGgIQAIgIAIgEQAKgFAKAAIAKABQAFABAFADIAJAHQAFAEADAGIAAhYIANAAIAAC0IgNAAIAAgSQgDAFgFAEIgJAHIgKAEIgKABQgKAAgKgEgAgOgHQgHADgEAFQgFAGgCAJQgDAIAAAJQAAAJADAJQACAIAFAGQAEAGAHADQAGAEAIAAQAIAAAHgEQAHgDAFgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgFgFgHgDQgHgEgIAAQgIAAgGAEg");
	this.shape_55.setTransform(-163.8,2.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#181818").s().p("AgTA3QgJgFgHgIQgHgIgDgLQgEgKAAgNQAAgMAEgLQADgKAHgJQAHgIAJgDQAJgFAKAAQALAAAJAFQAKADAGAIQAHAJAEAKQADALAAAMQAAANgDAKQgEALgHAIQgGAIgKAFQgJAEgLAAQgKAAgJgEgAgOgpQgGAEgFAGQgFAGgCAJQgDAIAAAIQAAAJADAJQACAHAFAGQAFAHAGADQAHAEAHAAQAIAAAHgEQAHgDAEgHQAFgGACgHQADgJAAgJQAAgIgDgIQgCgJgFgGQgEgGgHgEQgHgDgIAAQgHAAgHADg");
	this.shape_56.setTransform(237,-21.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#181818").s().p("AAFBJQgFgCgCgEQgDgCgDgHQgCgFAAgKIAAhFIgUAAIAAgPIAUAAIAAggIANAAIAAAgIAbAAIAAAPIgbAAIAABBIAAAKQABAEACACQACACADABIAFABIAHgBIAHgDIABAOQgIAFgKAAIgIgBg");
	this.shape_57.setTransform(227.7,-22.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#181818").s().p("AAcA5IAAg8QAAgUgGgKQgFgJgPgBIgFABQgEABgGAFQgEAFgFAIQgDAIAAAPIAAA5IgOAAIAAhWIAAgMIgBgNIAOAAIABAJIAAAJIAAAAQACgFADgEIAIgGIAJgEIAIgBQATAAAIALQAJALAAAWIAABFg");
	this.shape_58.setTransform(218.5,-21.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#181818").s().p("AgQA3QgJgFgGgIQgHgIgDgLQgFgKAAgNQAAgMAFgLQADgKAHgJQAGgIAIgDQAKgFAJAAQAKAAAJAFQAIAEAGAHQAFAIADAKQADALABALIAAAGIhOAAQAAAIADAIQADAHAFAGQAFAFAFADQAHAEAGAAQAKgBAIgGQAIgFAEgIIAKAKQgIANgLAGQgKAFgLAAQgKAAgJgEgAgKgpQgGADgFAFQgEAGgDAFQgDAIAAAGIA/AAQAAgQgIgKQgIgKgOAAQgGAAgGADg");
	this.shape_59.setTransform(207.4,-21.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#181818").s().p("AgGBTIAAhvIANAAIAABvgAgGg/QgDgDAAgFQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_60.setTransform(199.3,-24.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#181818").s().p("AA6A5IAAhAQAAgRgFgJQgFgKgOAAQgHABgGADQgFADgDAHQgDAFgCAHIAAAQIAAA6IgNAAIAAhAQAAgRgFgJQgFgKgOAAIgGABQgEABgFAFQgEAFgEAIQgEAIABAPIAAA5IgOAAIAAhWIgBgNIAAgMIAPAAIAAARIAAAAQAFgJAIgGQAJgEAIAAIAIAAQAFABAEADQAEACAEAFQACAFADAGQAEgLAIgGQAJgFAJAAQATAAAIALQAJALAAAWIAABFg");
	this.shape_61.setTransform(188.2,-21.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgDgCgHQgDgGAAgIQAAgNAGgJQAGgGAJgEQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAGADAHQADAIAAAKIAAAxIAAAOIABALIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOACQgHADgFAFQgFAEAAAJQAAAFACAEQACAEAEADQADACAEACIAIABQAGAAAFgEQAGgCADgFQAEgFACgHQACgGAAgHIAAgJIgHAAIgNABg");
	this.shape_62.setTransform(174.2,-21.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#181818").s().p("AAFBJQgFgCgCgEQgDgCgDgHQgCgFAAgKIAAhFIgUAAIAAgPIAUAAIAAggIANAAIAAAgIAbAAIAAAPIgbAAIAABBIAAAKQABAEACACQACACADABIAFABIAHgBIAHgDIABAOQgIAFgKAAIgIgBg");
	this.shape_63.setTransform(165.9,-22.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#181818").s().p("AAcA5IAAg8QAAgUgGgKQgFgJgPgBIgFABQgEABgGAFQgFAFgEAIQgDAIAAAPIAAA5IgOAAIAAhWIAAgMIgBgNIAOAAIABAJIAAAJIAAAAQACgFADgEIAIgGIAJgEIAIgBQATAAAIALQAJALAAAWIAABFg");
	this.shape_64.setTransform(156.7,-21.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgDgCgHQgDgGAAgIQAAgNAGgJQAGgGAJgEQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAGADAHQADAIAAAKIAAAxIAAAOIABALIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOACQgHADgFAFQgFAEAAAJQAAAFACAEQACAEAEADQADACAEACIAIABQAGAAAFgEQAGgCADgFQAEgFACgHQACgGAAgHIAAgJIgHAAIgNABg");
	this.shape_65.setTransform(145.7,-21.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#181818").s().p("AgGA4IgnhvIAQAAIAdBeIABAAIAeheIAPAAIgmBvg");
	this.shape_66.setTransform(135.9,-21.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#181818").s().p("AgQA3QgJgFgGgIQgHgIgDgLQgFgKAAgNQAAgMAFgLQADgKAHgJQAGgIAIgDQAKgFAIAAQALAAAJAFQAIAEAGAHQAFAIADAKQADALAAALIAAAGIhNAAQAAAIADAIQADAHAFAGQAFAFAFADQAHAEAGAAQAKgBAIgGQAIgFAEgIIAKAKQgIANgKAGQgLAFgLAAQgKAAgJgEgAgKgpQgGADgEAFQgFAGgDAFQgDAIAAAGIA/AAQAAgQgIgKQgIgKgPAAQgFAAgGADg");
	this.shape_67.setTransform(125.4,-21.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#181818").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_68.setTransform(117.3,-24.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#181818").s().p("AgQA3QgJgFgGgIQgHgIgEgLQgDgKgBgNQABgMADgLQAEgKAHgJQAGgIAIgDQAKgFAIAAQALAAAIAFQAJAEAGAHQAGAIACAKQADALAAALIAAAGIhNAAQABAIACAIQADAHAFAGQAFAFAFADQAGAEAGAAQALgBAIgGQAIgFAEgIIAKAKQgIANgKAGQgLAFgMAAQgJAAgJgEgAgKgpQgGADgEAFQgFAGgDAFQgDAIAAAGIA/AAQAAgQgIgKQgIgKgPAAQgFAAgGADg");
	this.shape_69.setTransform(103.7,-21.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#181818").s().p("AgUBYQgIgFgHgIQgHgIgDgKQgFgLAAgNQAAgNAFgKQADgKAHgIQAHgIAIgEQAKgFAKAAIAKABQAFABAFADIAJAHQAFAEADAGIAAhYIANAAIAAC0IgNAAIAAgSQgDAFgFAEIgJAHIgKAEIgKABQgKAAgKgEgAgOgHQgGADgFAFQgFAGgDAJQgCAIAAAJQAAAJACAJQADAIAFAGQAFAGAGADQAHAEAHAAQAIAAAHgEQAHgDAFgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgFgFgHgDQgHgEgIAAQgHAAgHAEg");
	this.shape_70.setTransform(91.6,-24.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#181818").s().p("AgUBYQgIgFgIgIQgGgIgEgKQgDgLAAgNQAAgNADgKQAEgKAGgIQAIgIAIgEQAKgFAKAAIAKABQAFABAFADIAJAHQAFAEADAGIAAhYIAOAAIAAC0IgOAAIAAgSQgDAFgFAEIgJAHIgKAEIgKABQgKAAgKgEgAgOgHQgGADgFAFQgFAGgCAJQgDAIAAAJQAAAJADAJQACAIAFAGQAFAGAGADQAHAEAHAAQAIAAAHgEQAHgDAFgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgFgFgHgDQgHgEgIAAQgHAAgHAEg");
	this.shape_71.setTransform(73.6,-24.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgDgCgHQgDgGAAgIQAAgNAGgJQAGgGAJgEQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAGADAHQADAIAAAKIAAAxIAAAOIABALIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOACQgHADgFAFQgFAEAAAJQAAAFACAEQACAEAEADQADACAEACIAIABQAGAAAFgEQAGgCADgFQAEgFACgHQACgGAAgHIAAgJIgHAAIgNABg");
	this.shape_72.setTransform(62.2,-21.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#181818").s().p("AgUBYQgJgFgHgIQgGgIgEgKQgDgLAAgNQAAgNADgKQAEgKAGgIQAHgIAJgEQAKgFAKAAIAKABQAFABAFADIAJAHQAEAEAEAGIAAhYIANAAIAAC0IgNAAIAAgSQgEAFgEAEIgJAHIgKAEIgKABQgKAAgKgEgAgOgHQgHADgEAFQgFAGgCAJQgDAIAAAJQAAAJADAJQACAIAFAGQAEAGAHADQAHAEAHAAQAIAAAHgEQAHgDAFgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgFgFgHgDQgHgEgIAAQgHAAgHAEg");
	this.shape_73.setTransform(50.8,-24.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#181818").s().p("AgGBTIAAhvIANAAIAABvgAgGg/QgDgDAAgFQAAgFADgDQADgDADAAQAEAAADADQADADAAAFQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_74.setTransform(42.5,-24.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#181818").s().p("AgMA3QgJgEgHgIQgGgIgEgLQgDgLgBgNQABgMADgLQAEgKAGgIQAHgIAJgFQAJgEALAAQAJAAAKAFQAJAFAHAKIgMAJQgDgGgGgEQgGgFgIAAQgIAAgGAEQgHADgEAGQgFAGgDAIQgCAJAAAIQAAAKACAIQADAIAFAGQAEAGAHAEQAGADAIAAQAIAAAGgFQAGgEADgGIAMAKQgHAKgJAEQgKAFgJAAQgLAAgJgEg");
	this.shape_75.setTransform(35.5,-21.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgDgCgHQgDgGAAgIQAAgNAGgJQAGgGAJgEQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAGADAHQADAIAAAKIAAAxIAAAOIABALIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOACQgHADgFAFQgFAEAAAJQAAAFACAEQACAEAEADQADACAEACIAIABQAGAAAFgEQAGgCADgFQAEgFACgHQACgGAAgHIAAgJIgHAAIgNABg");
	this.shape_76.setTransform(24.8,-21.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#181818").s().p("AgxBcIAAi1IANAAIAAAUIAAAAQADgGAFgFIAJgGQAFgDAFgBIAJgBQALAAAKAFQAIADAIAIQAGAJAEAKQADALAAANQAAANgDAKQgEAKgGAIQgIAIgIAFQgKAEgLAAIgJgBIgKgEIgJgHQgFgEgDgFIAAAAIAABXgAgOhKQgHAEgFAGQgFAGgDAJQgDAIAAAJQAAAJADAJQADAHAFAGQAFAGAHADQAHAEAHAAQAJAAAGgEQAGgDAFgGQAFgGACgHQADgJAAgJQAAgJgDgIQgCgJgFgGQgFgGgGgEQgGgDgJAAQgHAAgHADg");
	this.shape_77.setTransform(14,-18.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgDgCgHQgDgGAAgIQAAgNAGgJQAGgGAJgEQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAGADAHQADAIAAAKIAAAxIAAAOIABALIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOACQgHADgFAFQgFAEAAAJQAAAFACAEQACAEAEADQADACAEACIAIABQAGAAAFgEQAGgCADgFQAEgFACgHQACgGAAgHIAAgJIgHAAIgNABg");
	this.shape_78.setTransform(1.9,-21.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#181818").s().p("AgMA3QgKgEgGgIQgHgIgDgLQgDgLAAgNQAAgMADgLQADgKAHgIQAGgIAKgFQAJgEALAAQAKAAAJAFQAIAFAHAKIgLAJQgDgGgGgEQgGgFgIAAQgIAAgGAEQgGADgFAGQgFAGgCAIQgDAJAAAIQAAAKADAIQACAIAFAGQAFAGAGAEQAGADAIAAQAIAAAGgFQAGgEADgGIALAKQgHAKgIAEQgJAFgKAAQgLAAgJgEg");
	this.shape_79.setTransform(-7.5,-21.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgDgCgHQgDgGAAgIQAAgNAGgJQAGgGAJgEQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAGADAHQADAIAAAKIAAAxIAAAOIABALIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOACQgHADgFAFQgFAEAAAJQAAAFACAEQACAEAEADQADACAEACIAIABQAGAAAFgEQAGgCADgFQAEgFACgHQACgGAAgHIAAgJIgHAAIgNABg");
	this.shape_80.setTransform(-23.9,-21.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#181818").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_81.setTransform(-31.3,-24.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#181818").s().p("AgZA5IAAhLIAAgQIgBgUIANAAIAAAVQACgFADgEIAGgIIAIgEQAFgCAGAAIAKABIgDAQQgCgCgGAAQgHAAgFAEQgFADgDAGQgEAFgCAGIgCAMIAAA+g");
	this.shape_82.setTransform(-41.8,-21.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgDgCgHQgDgGAAgIQAAgNAGgJQAGgGAJgEQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAGADAHQADAIAAAKIAAAxIAAAOIABALIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOACQgHADgFAFQgFAEAAAJQAAAFACAEQACAEAEADQADACAEACIAIABQAGAAAFgEQAGgCADgFQAEgFACgHQACgGAAgHIAAgJIgHAAIgNABg");
	this.shape_83.setTransform(-51.5,-21.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#181818").s().p("AAFBJQgFgCgCgEQgDgCgDgHQgCgFAAgKIAAhFIgUAAIAAgPIAUAAIAAggIANAAIAAAgIAbAAIAAAPIgbAAIAABBIAAAKQABAEACACQACACADABIAFABIAHgBIAHgDIABAOQgIAFgKAAIgIgBg");
	this.shape_84.setTransform(-59.8,-22.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#181818").s().p("AAcA5IAAg8QAAgUgFgKQgGgJgPgBIgEABQgFABgFAFQgGAFgDAIQgFAIAAAPIAAA5IgNAAIAAhWIAAgMIgBgNIAOAAIAAAJIAAAJIABAAQACgFADgEIAIgGIAJgEIAJgBQASAAAJALQAIALAAAWIAABFg");
	this.shape_85.setTransform(-69,-21.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#181818").s().p("AgQA3QgJgFgHgIQgGgIgEgLQgDgKAAgNQAAgMADgLQAEgKAGgJQAHgIAIgDQAJgFAJAAQALAAAIAFQAJAEAGAHQAGAIADAKQACALAAALIAAAGIhNAAQABAIADAIQACAHAFAGQAEAFAHADQAGAEAFAAQALgBAIgGQAIgFAEgIIALAKQgJANgKAGQgLAFgMAAQgJAAgJgEgAgKgpQgGADgEAFQgGAGgCAFQgDAIAAAGIA/AAQAAgQgIgKQgIgKgPAAQgFAAgGADg");
	this.shape_86.setTransform(-80.1,-21.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#181818").s().p("AA6A5IAAhAQAAgRgFgJQgFgKgOAAQgIABgEADQgFADgEAHQgDAFgCAHIgBAQIAAA6IgMAAIAAhAQAAgRgFgJQgFgKgOAAIgFABQgFABgEAFQgFAFgEAIQgDAIgBAPIAAA5IgNAAIAAhWIAAgNIgBgMIAOAAIAAARIABAAQAFgJAIgGQAJgEAJAAIAIAAQAEABAEADQAEACADAFQADAFACAGQAEgLAJgGQAJgFAJAAQATAAAIALQAJALAAAWIAABFg");
	this.shape_87.setTransform(-94.5,-21.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#181818").s().p("AgfAuQgJgLAAgVIAAhHIANAAIAAA+IABAQQACAHADAFQADAFAFADQAEACAIAAIAFgBQAFgBAFgEQAFgEAEgJQAEgJAAgPIAAg5IANAAIAABXIABAMIAAANIgOAAIAAgJIAAgJIgBAAIgFAIQgDAEgFADQgEADgFABQgEACgEAAQgTAAgIgMg");
	this.shape_88.setTransform(-108.6,-21.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgDgCgHQgDgGAAgIQAAgNAGgJQAGgGAJgEQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAGADAHQADAIAAAKIAAAxIAAAOIABALIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOACQgHADgFAFQgFAEAAAJQAAAFACAEQACAEAEADQADACAEACIAIABQAGAAAFgEQAGgCADgFQAEgFACgHQACgGAAgHIAAgJIgHAAIgNABg");
	this.shape_89.setTransform(-119.7,-21.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgDgCgHQgDgGAAgIQAAgNAGgJQAGgGAJgEQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAGADAHQADAIAAAKIAAAxIAAAOIABALIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOACQgHADgFAFQgFAEAAAJQAAAFACAEQACAEAEADQADACAEACIAIABQAGAAAFgEQAGgCADgFQAEgFACgHQACgGAAgHIAAgJIgHAAIgNABg");
	this.shape_90.setTransform(-135.8,-21.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#181818").s().p("AgZA5IAAhLIgBgQIAAgUIAOAAIAAAVQABgFADgEIAGgIIAIgEQAFgCAGAAIAKABIgDAQQgCgCgGAAQgHAAgFAEQgFADgDAGQgEAFgCAGIgBAMIAAA+g");
	this.shape_91.setTransform(-143.3,-21.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#181818").s().p("AgTA5QgFgCgFgFQgFgDgCgHQgDgGAAgIQAAgNAGgJQAGgGAJgEQAJgEAJgBIATgBIAHAAIAAgDQAAgdgZAAQgPAAgNANIgIgLQAOgQAZAAQAHAAAHACQAGADAFAEQAEAGADAHQADAIAAAKIAAAxIAAAOIABALIgMAAIgBgJIgBgJIAAAAQgGALgIAFQgIAFgKAAQgHAAgGgCgAAGABIgOACQgHADgFAFQgFAEAAAJQAAAFACAEQACAEAEADQADACAEACIAIABQAGAAAFgEQAGgCADgFQAEgFACgHQACgGAAgHIAAgJIgHAAIgNABg");
	this.shape_92.setTransform(-153,-21.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#181818").s().p("AgrBVIAAipIApAAQAVAAAMALQAOALAAAXQAAAXgOAMQgMAKgVAAIgbAAIAABPgAgdgJIAYAAQAIAAAHgCQAHgDAEgEQAEgEACgFQACgGAAgGQAAgFgCgGQgCgFgEgEQgEgFgHgCQgHgCgIAAIgYAAg");
	this.shape_93.setTransform(-163.2,-24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Estado
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#980D19").s().p("AgZBbIAAiNIAeAAIAACNgAgeg8IAVgdIAoAAIgiAdg");
	this.shape_94.setTransform(-197.1,10.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#980D19").s().p("AggBBQgNgHgHgNQgHgOAAgQIAAhXIAfAAIAABVQABAJADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQAEgHAAgJIAAhVIAfAAIAABXQAAAQgHAOQgHANgNAHQgNAIgUAAQgTAAgNgIg");
	this.shape_95.setTransform(-208.5,13);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#980D19").s().p("AgDBJQgXAAgSgJQgRgJgKgQQgJgQgBgXQABgVAJgQQALgQARgKQARgJAVAAQAVAAAQAKQARAJAKAQQALAQAAAVQAAAKgDAJQgDAKgGAHQgHAIgKAEIAAABIAoAAIAAAYgAgbglQgJAGgGAKQgGAKAAALQAAAMAGAKQAGAKAJAGQAKAGAMAAQALAAAKgGQAJgGAHgKQAFgKABgMQgBgLgFgKQgHgKgJgGQgKgGgLAAQgMAAgKAGg");
	this.shape_96.setTransform(-224.2,12.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#980D19").s().p("AAnBHIgMgeIg2AAIgMAeIgiAAIA8iNIAZAAIA+CNgAAQAPIgQgsIgRAsIAhAAg");
	this.shape_97.setTransform(-240.4,12.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#980D19").s().p("AgYAkIAAhHIAvAAIAAAPIggAAIAAANIAfAAIAAANIgfAAIAAAPIAiAAIAAAPg");
	this.shape_98.setTransform(-198.1,-5.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_99.setTransform(-204.4,-5.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#980D19").s().p("AgHAkIAAg5IgUAAIAAgOIA3AAIAAAOIgUAAIAAA5g");
	this.shape_100.setTransform(-211,-5.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#980D19").s().p("AgOAjQgGgCgFgEIALgNQADADADACQAEACAEAAIAEgBIAFgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgEgBIgHgDIgIgDQgEgBgCgEQgDgEAAgGQAAgHAEgFQAEgGAHgCQAFgDAGAAQAHAAAGACQAFACAFAEIgLALIgGgDIgGgBIgDAAIgFADQAAAAAAABQgBAAAAABQAAAAAAABQAAABgBAAQABADACACIAFADIAIACIAIAEQAEABADAEQABAEABAGQgBAIgDAFQgEAFgGADQgHADgGAAQgHAAgGgDg");
	this.shape_101.setTransform(-216.9,-5.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_102.setTransform(-223.5,-5.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_103.setTransform(-230.2,-5.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_104.setTransform(-236.8,-5.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_105.setTransform(-244.2,-5.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D7D7D7").s().p("AkpFTQgQAAgMgMQgMgNAAgQIAApTQAAgQAMgNQAMgMAQABIJTAAQARgBALAMQAMANAAAQIAAJTQAAAQgMANQgLAMgRAAg");
	this.shape_106.setTransform(-220.2,5.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#980D19").ss(2,1,1).p("Ah8B9IDCAAQAXAAAQgQQAQgQAAgXIAAjC");
	this.shape_107.setTransform(-194,31.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAXAAIDCAA");
	this.shape_108.setTransform(-246.3,31.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#980D19").ss(2,1,1).p("AB9B9IAAjCQAAgXgQgQQgQgQgXAAIjCAA");
	this.shape_109.setTransform(-194,-21);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjCAAQgXAAgQAQQgQAQAAAXIAADC");
	this.shape_110.setTransform(-246.3,-21);

	this.instance = new lib.Mapadebits31();
	this.instance.parent = this;
	this.instance.setTransform(-267,-45);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#980D19").ss(4,1,1).p("AhVAPIAvAwIB8h9");
	this.shape_111.setTransform(-218.6,8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CBAA0E").s().p("AkpFSQgQAAgNgMQgMgLABgRIAApSQgBgSAMgMQANgLAQgBIJTAAQARABAMALQAMAMgBASIAAJSQABARgMALQgMAMgRAAg");
	this.shape_112.setTransform(-220.2,5.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAWAAIDDAA");
	this.shape_113.setTransform(-246.3,31.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjDAAQgWAAgQAQQgQAQAAAXIAADC");
	this.shape_114.setTransform(-246.3,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]}).to({state:[{t:this.instance},{t:this.shape_114},{t:this.shape_109},{t:this.shape_113},{t:this.shape_107},{t:this.shape_112},{t:this.shape_111}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-45,529.5,100);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("signal2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape.setTransform(166.8,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAFAJAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgGgDgKgCIgOgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAHgEQAFgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgGgHgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQADQAMADAHAHQAIAJAAALQAAAJgDAHQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_1.setTransform(158.4,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_2.setTransform(146.1,30.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgFAEgEQADgEAFgEQADgDAGgBQAFgCAIAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_3.setTransform(136.1,30.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgKIAAhFIgXAAIAAgPIAXAAIAAggIAPAAIAAAgIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_4.setTransform(127.1,29.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_5.setTransform(116.4,30.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAHIgBAQIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgLAKgGQALgFALAAQAWAAAKALQAKALAAAWIAABFg");
	this.shape_6.setTransform(99.3,30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgPBVIAAhwIAPAAIAABwgAgWgxIAXgjIAWAAIgeAjg");
	this.shape_7.setTransform(87.3,27.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgKIAAhFIgXAAIAAgPIAXAAIAAggIAPAAIAAAgIAhAAIAAAPIghAAIAABBIABAKIAEAGQABADADAAIAHABIAIgBIAJgDIABAOQgKAFgMAAIgJgBg");
	this.shape_8.setTransform(79.6,29.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_9.setTransform(68.7,30.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_10.setTransform(55.6,30.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_11.setTransform(43.5,30.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgcBPQgMgIgGgNQgGgNgCgPQgDgQAAgOQAAgNADgQQACgPAGgNQAGgNAMgIQALgJARAAQASAAALAJQAMAIAGANQAGANACAPQADAQAAANQAAAOgDAQQgCAPgGANQgGANgMAIQgLAJgSAAQgRAAgLgJgAgVhAQgIAIgEALQgEALgBAMIgBAWIABAWQABANAEALQAEALAIAIQAIAHANAAQAOAAAIgHQAIgIAEgLQAEgLABgNIABgWIgBgWQgBgMgEgLQgEgLgIgIQgIgHgOAAQgNAAgIAHg");
	this.shape_12.setTransform(24,27.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AggBPQgNgIgHgPIARgHQAFAKAIAGQAJAFALAAQAHAAAHgCQAIgEAEgEQAGgGADgHQADgHAAgHQAAgJgEgIQgDgHgFgFQgGgFgHgCQgIgEgIAAQgJAAgJADQgJACgIADIABhWIBWAAIAAAPIhFAAIgBA0IAMgDIALgBQALAAAKAEQAKADAHAIQAHAHAEAJQAEAKAAAMQAAAMgEAKQgEALgIAHQgIAHgKAEQgLAFgLAAQgQgBgNgHg");
	this.shape_13.setTransform(10.5,28.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_14.setTransform(-9.5,30.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_15.setTransform(-23.1,30.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_16.setTransform(-35.6,30.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_17.setTransform(-55.6,30.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQACgFADgEQADgEAFgEQADgDAGgBQAGgCAHAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_18.setTransform(-65.6,30.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgKIAAhFIgXAAIAAgPIAXAAIAAggIAPAAIAAAgIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgDIABAOQgJAFgNAAIgKgBg");
	this.shape_19.setTransform(-74.6,29.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_20.setTransform(-85.3,30.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAHIgBAQIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgLAKgGQALgFALAAQAWAAAKALQAKALAAAWIAABFg");
	this.shape_21.setTransform(-102.4,30.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AAMBVIAAiUIgeAbIgKgNIAqgjIAPAAIAACpg");
	this.shape_22.setTransform(-127,27.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_23.setTransform(-145.7,30.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_24.setTransform(-160.1,27.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAPAAIAAAVIABAAQACgFADgDQADgFAFgEQADgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_25.setTransform(237.6,6.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_26.setTransform(225.4,7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFACAHABQAIAAAFgGQAFgFADgJIAJgWIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAIQgIAHgOAAIgIAAg");
	this.shape_27.setTransform(212.6,9.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_28.setTransform(200.2,7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAEgFAJQgEAJAAAOIAAA5IgQAAIAAhWIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABGg");
	this.shape_29.setTransform(183.9,6.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_30.setTransform(160.7,7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgeA5IAAhMIAAgPIgBgUIAPAAIAAAVIABAAQABgFAEgDQADgFAFgEQADgCAGgDQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_31.setTransform(151.8,6.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_32.setTransform(140.1,7.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AAGBIQgFgBgEgDQgDgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_33.setTransform(129.5,5.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_34.setTransform(122.6,3.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_35.setTransform(113.2,7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_36.setTransform(94.1,7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgLIgBgOIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_37.setTransform(81.3,6.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIABANIgQAAIgBgJIAAgJIgHAIQgEAEgFADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_38.setTransform(68.1,7.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_39.setTransform(48.3,7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAJQgDgHgHgDQgFgFgJAAIgHABIgIADIgGAFQgCAEAAAEQABAIAFADQAGAEAKADIAQAEQAMACAIAIQAHAHAAAMQAAAKgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_40.setTransform(30.7,7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_41.setTransform(18.9,7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_42.setTransform(4.5,3.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_43.setTransform(-9,7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_44.setTransform(-22.6,3.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_45.setTransform(-32.4,4.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_46.setTransform(-41,7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_47.setTransform(-49.7,4.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgFgEgCgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_48.setTransform(-56.5,5.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_49.setTransform(-65.9,7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_50.setTransform(-78.6,7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgeA5IAAhMIAAgPIgBgUIAQAAIAAAVIAAAAQABgFAEgDQADgFAEgEQAEgCAGgDQAGgCAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_51.setTransform(-94.1,6.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_52.setTransform(-105.7,7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgsA4IAAgLIBAhWIg9AAIAAgOIBVAAIAAALIhCBWIBEAAIAAAOg");
	this.shape_53.setTransform(-116.7,7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_54.setTransform(-124.7,4.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_55.setTransform(-130.4,3.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_56.setTransform(-139.8,7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_57.setTransform(-152.4,7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAPAAIAAAVIABAAQACgFADgDQADgFAFgEQADgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_58.setTransform(-162,6.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_59.setTransform(241.2,-16.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_60.setTransform(226.9,-20.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_61.setTransform(206.1,-16.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgIgCQgFgCgEgDQgFgDgDgFQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADgBAEQABAIAFADQAGAEAKADIAQADQAMADAHAHQAIAJAAAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_62.setTransform(194,-16.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_63.setTransform(182.3,-16.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_64.setTransform(171,-16.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_65.setTransform(151.3,-16.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_66.setTransform(138.1,-16.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgOgEIgIgCQgFgCgFgDQgFgDgDgFQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgEgHgGgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGADQAFAEALADIAQADQALADAIAHQAJAJAAAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_67.setTransform(119.8,-16.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_68.setTransform(108.1,-16.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgDQAEgEAGgCQAFgBAIAAIAMABIgDAQQgEgCgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_69.setTransform(99.2,-16.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_70.setTransform(87.7,-16.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgFAAgJQAAgIAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgGgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFADQAGAEAKADIAQADQALADAJAHQAHAJABAMQgBAIgEAHQgDAGgGAFQgGAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_71.setTransform(76.7,-16.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_72.setTransform(64.8,-16.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_73.setTransform(44.9,-16.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_74.setTransform(31.5,-16.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AAsBcIAAhYIAAAAQgEAGgFAEIgLAHIgNAEIgLABQgMAAgMgEQgKgFgIgIQgIgIgEgKQgFgKAAgNQAAgNAFgLQAEgLAIgIQAIgHAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFADAEAHIAAAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgFAGgDAJQgEAHAAAKQAAAJAEAJQADAHAFAGQAGAGAHADQAIADAJABQAJgBAJgDQAIgDAGgGQAGgGAEgHQADgJAAgJQAAgKgDgHQgEgJgGgGQgGgGgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_75.setTransform(17.2,-13.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPAMAAAWQAAAXgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgEQAFgFACgFQACgFAAgHQAAgFgCgGQgCgGgFgDQgFgEgIgDQgIgCgLAAIgbAAg");
	this.shape_76.setTransform(-2.7,-19.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPAMAAAWQAAAXgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgEQAFgFACgFQACgFAAgHQAAgFgCgGQgCgGgFgDQgFgEgIgDQgIgCgLAAIgbAAg");
	this.shape_77.setTransform(-16.5,-19.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAOIhRAAIAABBIBaAAIAAAQg");
	this.shape_78.setTransform(-30.6,-19.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_79.setTransform(-47.8,-20.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_80.setTransform(-57.4,-16.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgXBVQgGgCgGgFQgFgEgDgGQgEgGAAgJQAAgNAHgIQAHgIALgDQALgFALgBIAWAAIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgLQAQgRAfABQAIAAAIABQAHADAGAFQAFAFADAHQAEAIAAAJIAAAzIAAANIACAMIgQAAIgBgJIAAgJQgHAKgKAFQgJAGgNAAQgIAAgHgCgAAHAcIgQADQgJACgGAFQgGAFAAAIQAAAGADAEQACAEAEADQAEACAEABIAKABQAIAAAGgDQAGgDAFgFQAEgEACgHQACgHAAgHIAAgJIgIAAIgPABgAgKgzIAXgiIAVAAIgfAig");
	this.shape_81.setTransform(-77.2,-19.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgFQADgEAEgDQAEgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_82.setTransform(-86.1,-16.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_83.setTransform(-97.8,-16.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgEgFAAgJQAAgIAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgDADAAAEQAAAIAGADQAFAEALADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_84.setTransform(-109.5,-16.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_85.setTransform(-128,-16.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAHABIAIgBIAHgDIACAOQgJAFgNAAIgKgBg");
	this.shape_86.setTransform(-138.6,-18.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgFAAgJQAAgIADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGADQAGAEAKADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_87.setTransform(-147.6,-16.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAOIhRAAIAABBIBaAAIAAAQg");
	this.shape_88.setTransform(-159.3,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Estado
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#980D19").s().p("AgZBbIAAiNIAeAAIAACNgAgeg8IAVgdIAoAAIgiAdg");
	this.shape_89.setTransform(-197.1,10.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#980D19").s().p("AggBBQgNgHgHgNQgHgOAAgQIAAhXIAfAAIAABVQABAJADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQAEgHAAgJIAAhVIAfAAIAABXQAAAQgHAOQgHANgNAHQgNAIgUAAQgTAAgNgIg");
	this.shape_90.setTransform(-208.5,13);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#980D19").s().p("AgDBJQgXAAgSgJQgRgJgKgQQgJgQgBgXQABgVAJgQQALgQARgKQARgJAVAAQAVAAAQAKQARAJAKAQQALAQAAAVQAAAKgDAJQgDAKgGAHQgHAIgKAEIAAABIAoAAIAAAYgAgbglQgJAGgGAKQgGAKAAALQAAAMAGAKQAGAKAJAGQAKAGAMAAQALAAAKgGQAJgGAHgKQAFgKABgMQgBgLgFgKQgHgKgJgGQgKgGgLAAQgMAAgKAGg");
	this.shape_91.setTransform(-224.2,12.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#980D19").s().p("AAnBHIgMgeIg2AAIgMAeIgiAAIA8iNIAZAAIA+CNgAAQAPIgQgsIgRAsIAhAAg");
	this.shape_92.setTransform(-240.4,12.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#980D19").s().p("AgYAkIAAhHIAvAAIAAAPIggAAIAAANIAfAAIAAANIgfAAIAAAPIAiAAIAAAPg");
	this.shape_93.setTransform(-198.1,-5.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_94.setTransform(-204.4,-5.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#980D19").s().p("AgHAkIAAg5IgUAAIAAgOIA3AAIAAAOIgUAAIAAA5g");
	this.shape_95.setTransform(-211,-5.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#980D19").s().p("AgOAjQgGgCgFgEIALgNQADADADACQAEACAEAAIAEgBIAFgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgEgBIgHgDIgIgDQgEgBgCgEQgDgEAAgGQAAgHAEgFQAEgGAHgCQAFgDAGAAQAHAAAGACQAFACAFAEIgLALIgGgDIgGgBIgDAAIgFADQAAAAAAABQgBAAAAABQAAAAAAABQAAABgBAAQABADACACIAFADIAIACIAIAEQAEABADAEQABAEABAGQgBAIgDAFQgEAFgGADQgHADgGAAQgHAAgGgDg");
	this.shape_96.setTransform(-216.9,-5.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_97.setTransform(-223.5,-5.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_98.setTransform(-230.2,-5.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_99.setTransform(-236.8,-5.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_100.setTransform(-244.2,-5.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D7D7D7").s().p("AkpFTQgQAAgMgMQgMgNAAgQIAApTQAAgQAMgNQAMgMAQABIJTAAQARgBALAMQAMANAAAQIAAJTQAAAQgMANQgLAMgRAAg");
	this.shape_101.setTransform(-220.2,5.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#980D19").ss(2,1,1).p("Ah8B9IDCAAQAXAAAQgQQAQgQAAgXIAAjC");
	this.shape_102.setTransform(-194,31.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAXAAIDCAA");
	this.shape_103.setTransform(-246.3,31.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#980D19").ss(2,1,1).p("AB9B9IAAjCQAAgXgQgQQgQgQgXAAIjCAA");
	this.shape_104.setTransform(-194,-21);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjCAAQgXAAgQAQQgQAQAAAXIAADC");
	this.shape_105.setTransform(-246.3,-21);

	this.instance = new lib.Mapadebits31();
	this.instance.parent = this;
	this.instance.setTransform(-267,-45);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#980D19").ss(4,1,1).p("AhVAPIAvAwIB8h9");
	this.shape_106.setTransform(-218.6,8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CBAA0E").s().p("AkpFSQgQAAgNgMQgMgLABgRIAApSQgBgSAMgMQANgLAQgBIJTAAQARABAMALQAMAMgBASIAAJSQABARgMALQgMAMgRAAg");
	this.shape_107.setTransform(-220.2,5.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAWAAIDDAA");
	this.shape_108.setTransform(-246.3,31.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjDAAQgWAAgQAQQgQAQAAAXIAADC");
	this.shape_109.setTransform(-246.3,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]}).to({state:[{t:this.instance},{t:this.shape_109},{t:this.shape_104},{t:this.shape_108},{t:this.shape_102},{t:this.shape_107},{t:this.shape_106}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-45,523.4,100);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("signal1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181818").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape.setTransform(216.3,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181818").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_1.setTransform(207.5,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181818").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_2.setTransform(199.3,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181818").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_3.setTransform(186.2,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#181818").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_4.setTransform(173.1,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181818").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgMAFQgLAFgMAAQgLAAgLgFQgKgEgIgHQgJgIgEgKQgEgKAAgMQAAgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAGAGAHAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_5.setTransform(158.8,22.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#181818").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_6.setTransform(148.8,19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181818").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_7.setTransform(137.1,19.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#181818").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_8.setTransform(120,19.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#181818").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_9.setTransform(103.3,19.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#181818").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_10.setTransform(83.5,19.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#181818").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_11.setTransform(70.7,19.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#181818").s().p("AglAuQgLgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAJAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_12.setTransform(57.5,20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#181818").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_13.setTransform(37.5,19.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#181818").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_14.setTransform(23.2,16.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#181818").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAIAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgIQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_15.setTransform(2.4,19.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#181818").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_16.setTransform(-9.7,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#181818").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_17.setTransform(-21.4,19.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#181818").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_18.setTransform(-32.7,19.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#181818").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_19.setTransform(-52.4,19.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#181818").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_20.setTransform(-65.6,19.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#181818").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_21.setTransform(-85.6,19.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#181818").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgDIABAPQgJADgNAAIgKgBg");
	this.shape_22.setTransform(-96.2,18.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#181818").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgDgCgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_23.setTransform(-103.1,19.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#181818").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_24.setTransform(-114.7,19.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#181818").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_25.setTransform(-126,19.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#181818").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_26.setTransform(-135,17.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#181818").s().p("AgKBbIgNgEIgLgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIALgHQAGgDAHgBIAKgBQAOAAALAFQALAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgDAIAAAJQAAAJADAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGACgIQAEgJAAgJQAAgJgEgIQgCgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_27.setTransform(-144.8,16.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#181818").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_28.setTransform(-159.3,20);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#181818").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_29.setTransform(208.6,-5.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#181818").s().p("AgXBUQgGgCgGgEQgFgEgDgGQgEgHAAgHQAAgOAHgIQAHgIALgEQALgDALgBIAWgCIAIAAIAAgDQAAgbgdAAQgSAAgPANIgKgMQAQgQAfAAQAIAAAIADQAHACAGAFQAFAFADAIQAEAHAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHAMgKAFQgJAEgNAAQgIAAgHgCgAAHAcIgQADQgJACgGAFQgGAFAAAJQAAAFADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgCAFgFQAEgGACgGQACgHAAgHIAAgIIgIAAIgPAAgAgKgzIAXgjIAVAAIgfAjg");
	this.shape_30.setTransform(189.5,-8.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#181818").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgFAEgEQADgEAFgEQADgCAGgCQAFgDAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_31.setTransform(180.6,-6.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#181818").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_32.setTransform(169.1,-5.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#181818").s().p("AgXBYQgLgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgLgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_33.setTransform(155.5,-9.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#181818").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_34.setTransform(141.8,-5.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#181818").s().p("AgsBVIgHgCIACgPQAFACAHABQAIAAAFgGQAFgFADgJIAJgWIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAIQgIAHgOAAIgIAAg");
	this.shape_35.setTransform(129.4,-3.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#181818").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_36.setTransform(117.1,-5.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#181818").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_37.setTransform(97.8,-5.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#181818").s().p("AAGBIQgFgBgEgDQgDgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAPQgJAEgMAAIgJgBg");
	this.shape_38.setTransform(87.2,-7.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#181818").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_39.setTransform(70,-5.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#181818").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_40.setTransform(58.7,-6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#181818").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_41.setTransform(49.7,-8.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#181818").s().p("AAFBIQgEgBgEgDQgEgDgCgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgEIABAPQgJAEgNAAIgKgBg");
	this.shape_42.setTransform(42.9,-7.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#181818").s().p("AgTBSQgLgFgIgHQgHgIgFgLQgEgLAAgMQAAgNAEgLQAEgKAIgIQAIgIAKgEQAKgFALAAQANAAAKAFQAKAFAHAHQAHAHADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAIAGAGQAFAFAHADQAHADAIAAQANAAAJgGQAJgGAFgHIAMAKQgKANgMAFQgMAGgOgBQgMABgKgFgAgNgNQgHADgFAEQgGAGgDAFQgDAHAAAHIBLAAQAAgQgKgKQgJgKgSABQgGAAgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_43.setTransform(32.2,-8.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#181818").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_44.setTransform(22.6,-9.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#181818").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_45.setTransform(13.2,-5.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#181818").s().p("AAhBSIAAg+QAAgTgGgJQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAIAAAPIAAA6IgPAAIAAhWIgBgMIgBgOIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABHgAgkg4IACgJIAFgIQACgDAEgCQAEgCAFAAQAFAAAEACIAIADIAIAEQAEACAEAAQAFAAADgEIAEgIIAKAAIgCAJIgEAIQgDAEgEACQgEACgFAAQgEAAgFgCIgJgDIgHgFIgIgBQgFAAgDADIgEAIg");
	this.shape_46.setTransform(0.4,-8.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#181818").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_47.setTransform(-12.7,-5.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#181818").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGAEQAFADALADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_48.setTransform(-24.4,-5.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#181818").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_49.setTransform(-42.9,-5.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#181818").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_50.setTransform(-57.3,-9.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#181818").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_51.setTransform(-78,-5.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#181818").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAFgGAEgEIAMgGQAFgDAHgBIAKgBQAOAAALAEQALAFAHAIQAIAHAEAMQAFAKAAANQAAAMgFALQgEAKgIAIQgHAIgLAEQgLAFgOAAIgKgBIgMgEIgMgHQgEgEgFgFIAAAAIAABXgAgRhJQgIADgGAGQgGAGgDAIQgEAIAAAKQAAAJAEAIQADAIAGAHQAGAEAIAEQAIAEAJgBQAKABAIgEQAHgEAHgEQAFgHADgIQADgIAAgJQAAgKgDgIQgDgIgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_52.setTransform(-92.1,-2.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#181818").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_53.setTransform(-102.7,-8.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#181818").s().p("AAFBIQgEgBgEgDQgEgDgCgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAHABIAJgBIAIgEIABAPQgKAEgMAAIgKgBg");
	this.shape_54.setTransform(-109.5,-7.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#181818").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_55.setTransform(-126.8,-5.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#181818").s().p("AAGBIQgFgBgDgDQgEgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgEIABAPQgIAEgNAAIgJgBg");
	this.shape_56.setTransform(-137.4,-7.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#181818").s().p("AgYA2QgLgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgGgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQALACAJAIQAHAHABAMQgBAKgEAGQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_57.setTransform(-146.5,-5.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#181818").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAPIhRAAIAABAIBaAAIAAAQg");
	this.shape_58.setTransform(-158.2,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Estado
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#980D19").s().p("AgZBbIAAiNIAeAAIAACNgAgeg8IAVgdIAoAAIgiAdg");
	this.shape_59.setTransform(-197.1,10.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#980D19").s().p("AggBBQgNgHgHgNQgHgOAAgQIAAhXIAfAAIAABVQABAJADAHQAEAHAGAEQAHAEAHAAQAIAAAHgEQAGgEAEgHQAEgHAAgJIAAhVIAfAAIAABXQAAAQgHAOQgHANgNAHQgNAIgUAAQgTAAgNgIg");
	this.shape_60.setTransform(-208.5,13);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#980D19").s().p("AgDBJQgXAAgSgJQgRgJgKgQQgJgQgBgXQABgVAJgQQALgQARgKQARgJAVAAQAVAAAQAKQARAJAKAQQALAQAAAVQAAAKgDAJQgDAKgGAHQgHAIgKAEIAAABIAoAAIAAAYgAgbglQgJAGgGAKQgGAKAAALQAAAMAGAKQAGAKAJAGQAKAGAMAAQALAAAKgGQAJgGAHgKQAFgKABgMQgBgLgFgKQgHgKgJgGQgKgGgLAAQgMAAgKAGg");
	this.shape_61.setTransform(-224.2,12.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#980D19").s().p("AAnBHIgMgeIg2AAIgMAeIgiAAIA8iNIAZAAIA+CNgAAQAPIgQgsIgRAsIAhAAg");
	this.shape_62.setTransform(-240.4,12.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#980D19").s().p("AgYAkIAAhHIAvAAIAAAPIggAAIAAANIAfAAIAAANIgfAAIAAAPIAiAAIAAAPg");
	this.shape_63.setTransform(-198.1,-5.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_64.setTransform(-204.4,-5.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#980D19").s().p("AgHAkIAAg5IgUAAIAAgOIA3AAIAAAOIgUAAIAAA5g");
	this.shape_65.setTransform(-211,-5.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#980D19").s().p("AgOAjQgGgCgFgEIALgNQADADADACQAEACAEAAIAEgBIAFgCQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgCgCQgDgCgEgBIgHgDIgIgDQgEgBgCgEQgDgEAAgGQAAgHAEgFQAEgGAHgCQAFgDAGAAQAHAAAGACQAFACAFAEIgLALIgGgDIgGgBIgDAAIgFADQAAAAAAABQgBAAAAABQAAAAAAABQAAABgBAAQABADACACIAFADIAIACIAIAEQAEABADAEQABAEABAGQgBAIgDAFQgEAFgGADQgHADgGAAQgHAAgGgDg");
	this.shape_66.setTransform(-216.9,-5.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_67.setTransform(-223.5,-5.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_68.setTransform(-230.2,-5.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#980D19").s().p("AAKAkIgOgcIgIAAIAAAcIgQAAIAAhHIAcAAQAGAAAGACQAHACADAFQAEAFAAAIQAAAHgEAGQgEAEgIABIATAfgAgMgFIAJAAIAFgBIAFgBQACgCABgEIgCgFQgCgDgDAAIgFgBIgKAAg");
	this.shape_69.setTransform(-236.8,-5.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#980D19").s().p("AAUAkIgHgPIgaAAIgGAPIgSAAIAfhHIAMAAIAgBHgAAIAIIgIgWIgIAWIAQAAg");
	this.shape_70.setTransform(-244.2,-5.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D7D7D7").s().p("AkpFTQgQAAgMgMQgMgNAAgQIAApTQAAgQAMgNQAMgMAQABIJTAAQARgBALAMQAMANAAAQIAAJTQAAAQgMANQgLAMgRAAg");
	this.shape_71.setTransform(-220.2,5.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#980D19").ss(2,1,1).p("Ah8B9IDCAAQAXAAAQgQQAQgQAAgXIAAjC");
	this.shape_72.setTransform(-194,31.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAXAAIDCAA");
	this.shape_73.setTransform(-246.3,31.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#980D19").ss(2,1,1).p("AB9B9IAAjCQAAgXgQgQQgQgQgXAAIjCAA");
	this.shape_74.setTransform(-194,-21);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjCAAQgXAAgQAQQgQAQAAAXIAADC");
	this.shape_75.setTransform(-246.3,-21);

	this.instance = new lib.Mapadebits31();
	this.instance.parent = this;
	this.instance.setTransform(-267,-45);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#980D19").ss(4,1,1).p("AhVAPIAvAwIB8h9");
	this.shape_76.setTransform(-218.6,8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#CBAA0E").s().p("AkpFSQgQAAgNgMQgMgLABgRIAApSQgBgSAMgMQANgLAQgBIJTAAQARABAMALQAMAMgBASIAAJSQABARgMALQgMAMgRAAg");
	this.shape_77.setTransform(-220.2,5.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#980D19").ss(2,1,1).p("Ah8h8IAADCQAAAXAQAQQAQAQAWAAIDDAA");
	this.shape_78.setTransform(-246.3,31.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#980D19").ss(2,1,1).p("AB9h8IjDAAQgWAAgQAQQgQAQAAAXIAADC");
	this.shape_79.setTransform(-246.3,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]}).to({state:[{t:this.instance},{t:this.shape_79},{t:this.shape_74},{t:this.shape_78},{t:this.shape_72},{t:this.shape_77},{t:this.shape_76}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267,-45,519,100);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGCNIAAg1IAoAAIAAiWIgoATIgTgsIAWgLQALgGAMgKQALgJAPgRIBHAAIAADkIAlAAIAAA1g");
	this.shape.setTransform(16.5,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhsCPIAAg6QALgSAJgMQAIgLAJgJIAWgTIAXgRIAXgQQALgIAGgIQAIgIgBgJQAAgPgKgGQgJgGgOAAQgKAAgKAFQgIAFgIAHIgNAOIgsguQAWgZAagMQAbgNAeAAQAaAAAWALQAVAKAOAUQAMAUAAAbQAAAXgHAPQgHAPgPALQgOAMgWANIgVAQIgXAUQgKAKgEAJIBFAAIAAghIBEAAIAABWg");
	this.shape_1.setTransform(16.5,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguCLQgSgHgPgKQgPgKgIgMIApgrQALAMANAHQANAHARAAQAQABAJgJQAKgHAAgPQAAgRgJgGQgKgHgOAAIgeAAIAAgvIAdAAQAPAAAJgHQAKgHAAgOQAAgKgGgHQgFgIgIgDQgIgEgIAAQgLAAgNAHQgMAGgLALIgnguQAHgJAOgIQANgJARgHQARgGASAAQAgAAAXALQAXAKAMATQAMATAAAaQAAAOgFAKQgGAKgGAHIgNALQAHAFAJAHQAIAIAHAOQAGANABASQgBAWgJARQgJAQgRAMQgPALgVAFQgTAGgUAAQgUgBgSgGg");
	this.shape_2.setTransform(16.5,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTCNIAAg1IAYAAIAAgbIhzAAIAAg5IBziQIBUAAIAACeIAVAAIAAArIgVAAIAAAbIAWAAIAAA1gAg1ASIA6AAIAAhKg");
	this.shape_3.setTransform(16.2,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyCIQgTgGgQgMQgQgLgIgMIArguQAMANAOAIQAOAJARAAQAUAAALgLQAMgMABgRQgBgRgMgLQgLgLgRAAQgOAAgIAFQgKAGgFAHIg1gWIAZiLICfAAIAAA8IhrAAIgHAnQAGgEALgCQALgDAPAAQAXAAAWALQAVALAOAVQANAUAAAfQAAAagKATQgLATgRANQgRANgWAGQgVAHgVAAQgVgBgUgHg");
	this.shape_4.setTransform(16.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0CDQgagPgPgcQgPgdgCgoQAAgRACgUQACgVAHgVQAHgVANgUQANgSAWgMQAVgMAfgBQAOgBARAEQASAEARAHQARAHAMALIgbA0IgQgJIgUgIQgLgDgMAAQgPAAgKAHQgMAIgGAMQgHANgCAOQAIgIAOgGQANgFARgBQAagBAVALQAVALANAVQANATAAAcQAAAbgMAXQgNAWgXAPQgXAOghABIgFAAQgeAAgYgOgAgKAPQgJAEgGAGQgGAFgDAEQAAAKAEALQAEAMAIAHQAIAHAMABQAQgBAKgJQALgKAAgPQAAgIgDgIQgEgJgHgFQgHgGgMAAQgIAAgIAEg");
	this.shape_5.setTransform(16.5,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhWCNIBrjkIhBAAIAAAbIhAAAIAAhQIDZAAIAAA1IhsDkg");
	this.shape_6.setTransform(16.6,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4CGQgYgLgNgUQgNgUAAgZQAAgNAGgOQAFgOAKgLQAKgLANgHQgPgJgIgPQgHgPAAgPQAAgWALgSQALgSAWgKQAVgLAeAAQAfAAAWALQAVAKALASQALASAAAWQAAAUgKAPQgKAOgOAGQAOAHAJAKQAJALAFAOQAFANAAAOQAAAZgNAUQgNAUgYALQgYAMghAAQggAAgYgMgAgdAjQgHAJAAAMQAAAOALAJQALAJAPABQAPAAALgJQAKgIABgQQgBgOgIgIQgJgIgMgDQgLgDgJAAQgKAFgHAKgAgShXQgIAIAAAKQAAALAHAGQAHAGAJACQAJACAHAAQAIgEAFgHQAGgHAAgJQAAgLgJgHQgJgHgMAAQgLAAgJAHg");
	this.shape_7.setTransform(16.5,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnCOQgSgEgRgHQgRgHgMgKIAbg1IAQAJQAJAFALADQALADAMABQAWgBANgOQANgOAAgaQgIAIgMAGQgMAGgQAAQgaABgVgLQgWgLgMgUQgNgUAAgcQAAgcAMgWQANgWAXgOQAXgOAhgCQAhgBAaAPQAbAPAQAcQAQAdABApQABARgDAWQgCAVgHAWQgHAVgOASQgOASgVALQgWALgfABIgDAAQgNAAgPgDgAgchGQgLAJAAAPQAAAIADAJQADAIAIAGQAHAFAMAAQAIAAAIgEQAHgEAFgFIAJgKQAAgKgDgMQgEgKgHgIQgHgHgMAAQgQAAgKAKg");
	this.shape_8.setTransform(16.5,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6CCQgagQgPghQgOghgBgwQABgrAOghQAOggAagSQAZgTAiAAQAnAAAZATQAaASAMAhQANAhAAAsQAAAtgNAgQgOAggZASQgZARglAAQghAAgagQgAgQhHQgHAKgGASQgFASAAAZQAAAZAGATQAFATAJAKQAIALAHAAQAJgBAIgKQAHgKAEgSQAFgTAAgYQAAgXgFgTQgFgTgHgKQgIgLgJAAIgBAAQgIAAgHAJg");
	this.shape_9.setTransform(32.1,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhGCNIAAg1IAoAAIAAiWIgoATIgTgsIAWgLQALgGAMgKQALgJAPgRIBGAAIAADkIAmAAIAAA1g");
	this.shape_10.setTransform(10,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	// Capa 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20512").s().p("AlGGxIgVAAIgEthIAegBQBkABB1AjQB1AjBlA7QDuCLgBCoQAACpjwCIQhmA6h2AiQhyAhhhAAIgGgBg");
	this.shape_11.setTransform(25,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-43.3,70.3,86.7);


(lib.Símbolo4 = function(mode,startPosition,loop) {
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

	this.instance = new lib.Mapadebits4();
	this.instance.parent = this;
	this.instance.setTransform(-74,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(-74,-23.5,148,47), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnBHDQi7i7AAkIQAAkHC7i6QC6i7EHAAQEIAAC7C7QC6C6AAEHQAAEIi6C7Qi7C6kIAAQkHAAi6i6g");
	mask.setTransform(83.2,83.4);

	// Capa 3
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.77,0.691);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(19.5,19.7,127.4,127.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AnzH0Qhihig2h/Qg3iDAAiQQAAiPA3iDQA2h/BihiQBihiB/g2QCDg3CPAAQElAADPDPQDPDPAAEkQAAEljPDPQjPDPklAAQkkAAjPjPg");
	mask_1.setTransform(89.6,89.6);

	// Capa 3
	this.instance_1 = new lib.Image();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.622,0.636);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(18.9,18.9,141.5,141.5), null);


(lib.Símbolo28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBBIggg6IgTAAIAAA6IgSAAIAAiBIAuAAQARABAMAIQALAKAAARQAAAMgIALQgIAJgQACIAlA7gAgbgGIAXAAQAaAAAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(47.4,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBBIgMghIg8AAIgOAhIgUAAIA5iBIAPAAIA3CBgAgYASIAwAAIgYg7IAAAAg");
	this.shape_1.setTransform(33,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBBIAAgRIBIhfIhGAAIAAgRIBcAAIAAARIhIBfIBJAAIAAARg");
	this.shape_2.setTransform(19.4,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_3.setTransform(9.7,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBBIAAiBIARAAIAABwIA6AAIAAARg");
	this.shape_4.setTransform(1.4,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAsBBIgOghIg8AAIgNAhIgUAAIA5iBIAPAAIA3CBgAgYASIAwAAIgXg7IgBAAg");
	this.shape_5.setTransform(-12.3,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBBIhHhqIAAAAIAABqIgSAAIAAiBIAXAAIBGBpIAAAAIAAhpIASAAIAACBg");
	this.shape_6.setTransform(-27.7,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_7.setTransform(-39.3,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBBIAAiBIBQAAIAAARIg+AAIAAApIA6AAIAAAPIg6AAIAAA4g");
	this.shape_8.setTransform(-48.4,-0.8);

	this.instance = new lib.Mapadebits28();
	this.instance.parent = this;
	this.instance.setTransform(-86,-24);

	this.instance_1 = new lib.Símbolo29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-24,172,47);


(lib.Símbolo26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBBIggg6IgTAAIAAA6IgSAAIAAiBIAuAAQARABAMAIQALAKAAARQAAAMgIALQgIAJgQACIAlA7gAgbgGIAXAAQAaAAAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(56,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBBIgMghIg8AAIgOAhIgUAAIA5iBIAPAAIA3CBgAgYASIAwAAIgYg7IAAAAg");
	this.shape_1.setTransform(41.6,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAzQgOgOAAgVIAAhRIARAAIAABOQAAAGADAGQABAGADAGQAEAGAGADQAHAEAIAAQAJAAAGgEQAHgDAEgGQADgFABgGQACgGABgHIAAhOIARAAIAABRQAAAUgOAPQgOAPgWAAQgVAAgOgPg");
	this.shape_2.setTransform(27,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBBIhGhqIAAAAIAABqIgSAAIAAiBIAXAAIBGBpIABAAIAAhpIARAAIAACBg");
	this.shape_3.setTransform(11.5,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_4.setTransform(-0.1,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBBIAAhwIgpAAIAAgRIBjAAIAAARIgpAAIAABwg");
	this.shape_5.setTransform(-9.6,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBBIhHhqIAAAAIAABqIgSAAIAAiBIAXAAIBGBpIAAAAIAAhpIASAAIAACBg");
	this.shape_6.setTransform(-23.9,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape_7.setTransform(-40.5,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgFgMABgMQAAgdASgTQATgUAcAAQAOAAAMAFQAMAGAIAJIgOALQgNgPgTAAQgUAAgOAPQgNAPAAAWQAAAVANAPQANAOAVAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_8.setTransform(-56.1,-0.8);

	this.instance = new lib.Mapadebits25();
	this.instance.parent = this;
	this.instance.setTransform(-86,-24);

	this.instance_1 = new lib.Símbolo27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-24,172,47);


(lib.Símbolo24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBBIggg6IgTAAIAAA6IgSAAIAAiBIAuAAQARABAMAIQALAKAAARQAAAMgIALQgIAJgQACIAlA7gAgbgGIAXAAQAaAAAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(58.4,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBBIgOghIg8AAIgNAhIgUAAIA5iBIAPAAIA3CBgAgYASIAwAAIgXg7IgBAAg");
	this.shape_1.setTransform(44,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBBIAAhwIgpAAIAAgRIBjAAIAAARIgpAAIAABwg");
	this.shape_2.setTransform(30.5,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAiBBIhHhqIAAAAIAABqIgSAAIAAiBIAXAAIBGBpIAAAAIAAhpIASAAIAACBg");
	this.shape_3.setTransform(16.3,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqBBIAAiBIBSAAIAAARIhBAAIAAAnIA8AAIAAAPIg8AAIAAApIBEAAIAAARg");
	this.shape_4.setTransform(2.1,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBBIAAhwIgpAAIAAgRIBjAAIAAARIgpAAIAABwg");
	this.shape_5.setTransform(-10.9,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAhBBIhGhqIgBAAIAABqIgRAAIAAiBIAXAAIBGBpIABAAIAAhpIARAAIAACBg");
	this.shape_6.setTransform(-25.2,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_7.setTransform(-36.8,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqBBIAAiBIBSAAIAAARIhBAAIAAAnIA8AAIAAAPIg8AAIAAApIBEAAIAAARg");
	this.shape_8.setTransform(-46.2,-0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAYBBIggg6IgTAAIAAA6IgSAAIAAiBIAuAAQARABAMAIQALAKAAARQAAAMgIALQgIAJgQACIAlA7gAgbgGIAXAAQAaAAAAgWQAAgUgaAAIgXAAg");
	this.shape_9.setTransform(-58.9,-0.8);

	this.instance = new lib.Mapadebits23();
	this.instance.parent = this;
	this.instance.setTransform(-86,-24);

	this.instance_1 = new lib.Símbolo25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-24,172,47);


(lib.Símbolo22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBBIggg6IgTAAIAAA6IgSAAIAAiBIAuAAQARABAMAIQALAKAAARQAAAMgIALQgIAJgQACIAlA7gAgbgGIAXAAQAaAAAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(37.7,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBBIgOghIg8AAIgNAhIgUAAIA5iBIAPAAIA3CBgAgYASIAwAAIgXg7IgBAAg");
	this.shape_1.setTransform(23.3,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BBIAAiBIAuAAQAQAAAOAGQAMAGAIAJQAJAJADALQAFAMAAALQgBAcgTASQgUATgdAAgAgmAwIAXAAQAKAAAIgCQAJgEAIgFQAIgGAFgJQAFgJAAgNQAAgTgNgOQgNgOgXAAIgbAAg");
	this.shape_2.setTransform(8.6,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_3.setTransform(-2.8,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBBIAAiBIARAAIAABwIA6AAIAAARg");
	this.shape_4.setTransform(-11.1,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBBIgMghIg9AAIgMAhIgVAAIA5iBIAPAAIA3CBgAgXASIAvAAIgXg7IgBAAg");
	this.shape_5.setTransform(-24.7,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBBIgxiBIAUAAIAlBoIAAAAIAnhoIAUAAIgzCBg");
	this.shape_6.setTransform(-38.6,-0.8);

	this.instance = new lib.Mapadebits21();
	this.instance.parent = this;
	this.instance.setTransform(-74,-24);

	this.instance_1 = new lib.Símbolo23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-24,148,47);


(lib.Símbolo19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AB1A5Ih1hxIh0Bx");
	this.shape.setTransform(0,-2);

	this.instance = new lib.Mapadebits20();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30);

	this.instance_1 = new lib.Símbolo21();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Símbolo18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ah0g4IB0BxIB1hx");
	this.shape.setTransform(0,2);

	this.instance = new lib.Mapadebits19();
	this.instance.parent = this;
	this.instance.setTransform(-30,-30);

	this.instance_1 = new lib.Símbolo20();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-30,60,60);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.mc_obj3 = new lib.Símbolo17();
	this.mc_obj3.parent = this;
	this.mc_obj3.setTransform(0,1500.8);

	this.mc_obj5 = new lib.Símbolo16();
	this.mc_obj5.parent = this;
	this.mc_obj5.setTransform(0,1164);

	this.mc_obj1 = new lib.Símbolo15();
	this.mc_obj1.parent = this;
	this.mc_obj1.setTransform(0,1061.2);

	this.mc_obj6 = new lib.Símbolo14();
	this.mc_obj6.parent = this;
	this.mc_obj6.setTransform(0,958.5);

	this.mc_obj2 = new lib.Símbolo13();
	this.mc_obj2.parent = this;
	this.mc_obj2.setTransform(0,631);

	this.mc_obj0 = new lib.Símbolo12();
	this.mc_obj0.parent = this;
	this.mc_obj0.setTransform(0,528.3);

	this.mc_obj8 = new lib.Símbolo11();
	this.mc_obj8.parent = this;
	this.mc_obj8.setTransform(0,425.5);

	this.mc_obj9 = new lib.Símbolo10();
	this.mc_obj9.parent = this;
	this.mc_obj9.setTransform(0,107.7);

	this.mc_obj4 = new lib.Símbolo9();
	this.mc_obj4.parent = this;
	this.mc_obj4.setTransform(0,-1.6);

	this.mc_obj7 = new lib.Símbolo8();
	this.mc_obj7.parent = this;
	this.mc_obj7.setTransform(0,-109.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_obj7},{t:this.mc_obj4},{t:this.mc_obj9},{t:this.mc_obj8},{t:this.mc_obj0},{t:this.mc_obj2},{t:this.mc_obj6},{t:this.mc_obj1},{t:this.mc_obj5},{t:this.mc_obj3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(-267,-154.4,529.5,1710.2), null);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// flash0.ai
	this.instance = new lib.Mapadebits5();
	this.instance.parent = this;
	this.instance.setTransform(-152.5,-150);

	this.instance_1 = new lib.Mapadebits1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-159,-112);

	this.instance_2 = new lib.Image_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-108,-132,0.48,0.48);

	this.instance_3 = new lib.Image_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-97,-135,0.687,0.68);

	this.instance_4 = new lib.ClipGroup_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-11.3,-2.1,1,1,0,0,0,89.8,91);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak1LeQiPg8hvhvQhuhug9iPQg+iUAAiiQAAihA+iVQA9iOBuhvQBvhuCPg9QCUg+ChAAQCiAACUA+QCPA9BvBuQBuBvA9COQA+CVAAChQAACig+CUQg9CPhuBuQhvBviPA8QiUA/iiAAQihAAiUg/g");
	this.shape.setTransform(-11.5,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005793").s().p("AlQMdQibhBh4h4Qh4h4hCibQhEihAAiwQAAivBEihQBCibB4h4QB4h4CbhCQChhECvAAQCwAAChBEQCbBCB4B4QB4B4BBCbQBEChABCvQgBCwhEChQhBCbh4B4Qh4B4ibBBQihBEiwABQivgBihhEg");
	this.shape_1.setTransform(-11.5,-3.4);

	this.instance_5 = new lib.Mapadebits6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-147,-159);

	this.instance_6 = new lib.Mapadebits29();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-142,-96);

	this.instance_7 = new lib.Mapadebits7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-113,-140);

	this.instance_8 = new lib.ClipGroup();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.8,-9.3,1,1,0,0,0,82.4,82.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkWKVQiCg2hihjQhkhkg3iAQg4iGAAiSQAAiRA4iFQA3iBBkhjQBihkCCg2QCFg5CRAAQEpAADSDTQBkBjA2CBQA5CFAACRQAAEqjTDSQhiBjiBA2QiGA5iSAAQiRAAiFg5g");
	this.shape_2.setTransform(0,-8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005793").s().p("AkvLOQiLg7hshsQhshrg7iMQg+iRAAifQAAidA+iRQA7iMBshsQBshsCLg7QCSg+CdAAQCeAACSA+QCMA7BrBsQBsBsA7CMQA+CQAACeQAACfg+CRQg7CMhsBrQhrBsiMA7QiSA+ieAAQidAAiSg+g");
	this.shape_3.setTransform(0,-8.5);

	this.instance_9 = new lib.Mapadebits30();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-156,-125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.5,-150,305,300);


(lib.Símbolo3 = function(mode,startPosition,loop) {
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

	this.instance = new lib.Mapadebits4();
	this.instance.parent = this;
	this.instance.setTransform(-74,-24);

	this.instance_1 = new lib.Símbolo4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-24,148,47);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		playSound("scrollgActivity");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Capa 3
	this.btn_start = new lib.Símbolo3();
	this.btn_start.parent = this;
	this.btn_start.setTransform(0,155.7);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 1);

	this.btn_retry = new lib.Símbolo24();
	this.btn_retry.parent = this;
	this.btn_retry.setTransform(0,32.9);
	new cjs.ButtonHelper(this.btn_retry, 0, 1, 1);

	this.btn_continue = new lib.Símbolo26();
	this.btn_continue.parent = this;
	this.btn_continue.setTransform(0,32.4);
	new cjs.ButtonHelper(this.btn_continue, 0, 1, 1);

	this.btn_finish = new lib.Símbolo28();
	this.btn_finish.parent = this;
	this.btn_finish.setTransform(-0.3,46.4);
	new cjs.ButtonHelper(this.btn_finish, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_start}]}).to({state:[{t:this.btn_retry}]},1).to({state:[{t:this.btn_continue}]},1).to({state:[{t:this.btn_finish}]},1).wait(1));

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20512").s().p("AgPBCQgMAAgKgEQgKgEgGgJQgHgJAAgNQAAgQAJgJQAJgIANgEQANgEAPgBIAagBQAAgLgIgGQgHgGgKAAQgJAAgIAEQgIAEgGAHIgVgVQALgKAPgFQAOgFAPAAQAXAAAMAHQANAIAFAOQAFAPAAAVIAAA/IgkAAIAAgQIgBAAQgGALgLAEQgJAEgLAAIgCAAgAAEAIIgMADQgGABgEAEQgEAEAAAGQAAAFADADQACADAFABQAEACAEAAQAHAAAHgDQAGgCAEgGQAFgFAAgIIAAgIIgKAAIgLAAg");
	this.shape.setTransform(98.9,-159.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AANBCQgTAAgQgIQgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIATAAQALAAAMAEQAMADAKAKIgaAbQgDgFgFgCQgGgDgFAAQgOAAgJAJQgHAJgBANQABAPAHAIQAJAJAOAAQAGAAAFgDQAEgCAEgFIAaAcQgKAJgMAEQgLADgKAAIgCAAg");
	this.shape_1.setTransform(86.3,-159.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20512").s().p("AgSBeIAAh9IAmAAIAAB9gAgPg2QgGgHgBgKQABgJAGgHQAGgGAJgBQAKABAGAGQAGAHABAJQgBAKgGAHQgGAFgKABQgJgBgGgFg");
	this.shape_2.setTransform(76.2,-162.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20512").s().p("AgBBQQgKgEgGgJQgGgIAAgNIAAg7IgZAAIAAggIAZAAIAAgmIAmAAIAAAmIAiAAIAAAgIgiAAIAAApIABAMQABAFAEADQAEADAIAAIAIgBQAFgBADgCIAAAgQgGADgHABIgOABQgNgBgKgDg");
	this.shape_3.setTransform(67.3,-161.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20512").s().p("AANBCQgTAAgQgIQgQgIgJgPQgJgPAAgUQAAgTAJgPQAJgPAQgIQAQgIATAAQALAAAMAEQAMADAKAKIgaAbQgDgFgFgCQgFgDgGAAQgOAAgJAJQgIAJAAANQAAAPAIAIQAJAJAOAAQAGAAAFgDQAFgCADgFIAaAcQgKAJgMAEQgLADgKAAIgCAAg");
	this.shape_4.setTransform(56.4,-159.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20512").s().p("AgPBdQgMAAgKgEQgKgEgGgJQgHgJAAgNQAAgQAJgJQAJgJANgEQANgEAPgBIAagBQAAgKgIgGQgHgGgKAAQgJAAgIAEQgIAEgGAGIgVgUQALgKAPgFQAOgFAPAAQAXAAAMAHQANAIAFAOQAFAOAAAVIAABAIgkAAIAAgQIgBAAQgGALgLAEQgJAFgLAAIgCgBgAAEAjIgMADQgGABgEAEQgEAEAAAGQAAAFADADQACADAFABQAEACAEAAQAHAAAHgDQAGgCAEgGQAFgFAAgIIAAgIIgKAAIgLAAgAgXg3IAZgmIA1AAIgtAmg");
	this.shape_5.setTransform(42.5,-162.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20512").s().p("AgrBBIAAh+IAnAAIAAAVIAAAAQAFgMAJgGQAJgGANAAIAGABIAGABIAAAjIgIgCIgIAAQgPAAgHAFQgGAFgCAKQgDAJABAMIAAA1g");
	this.shape_6.setTransform(30.9,-160);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20512").s().p("AhEBfIAAi5IAkAAIAAAQIABAAQADgEAFgFQAHgEAHgDQAIgDAHAAQAUgBANAJQAOAIAIAPQAIAPgBATQAAASgGAOQgIAPgMAJQgNAKgSAAQgLAAgLgDQgKgEgHgKIgBAAIAABKgAgYgzQgIAJAAAPQAAAPAIAIQAIAIAQAAQAOAAAHgIQAJgIAAgPQAAgPgJgJQgHgIgOAAQgQAAgIAIg");
	this.shape_7.setTransform(17.3,-157);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20512").s().p("AAWBBIAAg+IgBgOQgBgIgEgFQgFgFgKAAQgJAAgFAEQgFAFgBAHQgCAIAAAHIAAA/IgnAAIAAh+IAmAAIAAASIAAAAQADgGAFgEQAFgFAHgDQAGgDAKAAQATAAALAIQAKAIADANQAEAOAAARIAABFg");
	this.shape_8.setTransform(-6.4,-160);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20512").s().p("AgdA6QgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQATAAANAIQANAIAHAPQAIAPAAATIAAAMIhaAAQADAMAHAGQAIAHALAAQAJAAAHgEQAHgFAEgHIAcAVQgKALgOAHQgOAGgQAAQgSAAgQgIgAAagNQAAgKgHgHQgHgHgKAAQgIAAgGADQgGAEgDAFQgDAGgBAGIAzAAIAAAAg");
	this.shape_9.setTransform(-21.3,-159.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20512").s().p("AgiA6QgQgIgKgPQgJgPAAgUQAAgTAJgPQAKgPAQgIQAPgIATAAQAUAAAQAIQAQAIAJAPQAJAPAAATQAAAUgJAPQgJAPgQAIQgQAIgUAAQgTAAgPgIgAgWgWQgIAJAAANQAAAPAIAIQAIAJAOAAQAPAAAIgJQAIgIAAgPQAAgNgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_10.setTransform(-44.4,-159.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20512").s().p("AgTBiIAAjDIAnAAIAADDg");
	this.shape_11.setTransform(-55.7,-163.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20512").s().p("AAWBBIAAg+IgBgOQgBgIgEgFQgFgFgKAAQgJAAgFAEQgFAFgBAHQgCAIAAAHIAAA/IgnAAIAAh+IAmAAIAAASIAAAAQADgGAFgEQAFgFAHgDQAGgDAKAAQATAAALAIQAKAIADANQAEAOAAARIAABFg");
	this.shape_12.setTransform(-66.5,-160);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20512").s().p("AgiA6QgQgIgKgPQgJgPAAgUQAAgTAJgPQAKgPAQgIQAPgIATAAQAUAAAQAIQAQAIAJAPQAJAPAAATQAAAUgJAPQgJAPgQAIQgQAIgUAAQgTAAgPgIgAgWgWQgIAJAAANQAAAPAIAIQAIAJAOAAQAPAAAIgJQAIgIAAgPQAAgNgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_13.setTransform(-81.9,-159.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20512").s().p("AhEBcIAAi3IBEAAQASAAARAEQAPAGAJAMQAKAMAAAWQAAAVgJAMQgJAMgPAFQgPAFgUAAIgcAAIAABIgAgbgNIAbAAQAFAAAHgCQAGgCAEgFQAFgFAAgIQgBgJgFgFQgFgFgIgCIgPgBIgUAAg");
	this.shape_14.setTransform(-97.4,-162.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgIAIQgDgDAAgFQAAgDADgEQADgDAFAAQAFAAAEADQADAEAAADQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_15.setTransform(-104,115.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgVAxQgHgCgGgEQgEgDgEgGQgDgFAAgHQABgLAGgHQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgDQABgYgcAAQgSAAgNAMIgKgLQAPgNAeAAQAHAAAHACQAIACAFAEQAFAEAEAHQADAGAAAJIAAApIAAAMIABAKIgPAAIgBgIIAAgIIAAAAQgHAJgIAFQgJAEgNAAQgHAAgGgBgAAHABQgIAAgIACQgIACgGAEQgFAEAAAIQAAAEACAEQACADAEACIAIADIAJABQAIAAAFgDQAHgCADgEQAFgEABgGQACgGAAgGIAAgHIgIAAIgNABg");
	this.shape_16.setTransform(-113.3,112.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgWBKQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAIgGAKgEQALgEALAAIALABIAMADIAKAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgFACQgGACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgDAHQgCAHAAAIQAAAIACAHQADAHAGAFQAFAFAHADQAHADAJAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQADgHAAgIQAAgIgDgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_17.setTransform(-126.3,109.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgWAxQgGgCgGgEQgFgDgDgGQgCgFAAgHQAAgLAGgHQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgDQABgYgcAAQgSAAgOAMIgJgLQAPgNAdAAQAIAAAHACQAIACAFAEQAFAEADAHQAEAGAAAJIAAApIAAAMIABAKIgPAAIgBgIIAAgIIAAAAQgHAJgJAFQgIAEgNAAQgHAAgHgBgAAHABQgIAAgIACQgIACgGAEQgFAEAAAIQAAAEACAEQACADAEACIAIADIAJABQAIAAAFgDQAHgCADgEQAFgEACgGQABgGAAgGIAAgHIgIAAIgNABg");
	this.shape_18.setTransform(-139.1,112.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_19.setTransform(-148.6,110.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_20.setTransform(-158.9,111.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgSAuQgLgEgHgGQgHgHgEgJQgFgJAAgLQAAgKAFgJQAEgJAHgHQAIgGAJgFQAKgDAKAAQAMAAAKADQAJAFAHAGQAGAGAEAJQADAIABAKIAAAGIhZAAQABAGADAHQAEAGAEAFQAGAEAHADQAHADAGAAQANAAAJgFQAIgFAFgGIALAIQgJAKgMAGQgLAEgOAAQgKAAgKgEgAgMgiQgGACgGAEQgFAEgDAGQgDAFAAAHIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_21.setTransform(-171.4,112.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgDQgGgDgIgDIgOgCIgHgCQgFgCgFgCQgEgDgDgEQgDgEAAgIQAAgHADgFQADgGAGgDQAFgEAHgCIAOgBQALAAAKADQAKAFAFAJIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEABgDACQgDABgCADQgCADAAADQAAAHAFADQAFADAKADIAPADQAMACAHAGQAHAGAAALQAAAHgDAGQgEAGgFADQgGAEgIACQgHABgIAAQgMAAgKgEg");
	this.shape_22.setTransform(-182.6,112.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgTAuQgKgEgHgGQgHgHgEgJQgFgJAAgLQAAgKAFgJQADgJAIgHQAIgGAJgFQAKgDAKAAQANAAAJADQAKAFAGAGQAGAGAEAJQADAIAAAKIAAAGIhYAAQABAGAEAHQADAGAEAFQAGAEAHADQAHADAGAAQANAAAJgFQAIgFAFgGIAMAIQgKAKgMAGQgLAEgOAAQgKAAgLgEgAgMgiQgHACgFAEQgFAEgDAGQgDAFAAAHIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_23.setTransform(-193.8,112.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAQAAIAAARIAAAAQABgEADgDIAHgHIAJgEQAGgCAIAAIALABIgDANIgJgBQgJAAgGADQgFADgEAFQgFAFgCAFQgBAFAAAFIAAA1g");
	this.shape_24.setTransform(-202.9,111.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("Ag4BOIAAiZIAPAAIAAAQIABAAQADgFAFgDIALgGIALgDIAKgBQANAAAKADQALAFAHAGQAIAHADAJQAFAJAAALQAAALgFAJQgDAIgIAHQgHAGgLAEQgKAEgNAAIgKgBQgGgBgFgCQgGgDgFgDQgFgEgDgFIgBAAIAABLgAgQg+QgIADgGAFQgFAFgEAHQgCAHAAAIQAAAIACAHQAEAGAFAFQAGAFAIADQAIADAIAAQAKAAAHgDQAHgDAGgFQAFgFADgGQADgHAAgIQAAgIgDgHQgDgHgFgFQgGgFgHgDQgHgDgKAAQgIAAgIADg");
	this.shape_25.setTransform(-214.3,114.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_26.setTransform(-234.5,111.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgSAuQgLgEgHgGQgHgHgEgJQgFgJAAgLQAAgKAFgJQAEgJAHgHQAIgGAJgFQAKgDAKAAQAMAAAKADQAJAFAHAGQAGAGAEAJQADAIABAKIAAAGIhZAAQABAGADAHQAEAGAEAFQAGAEAHADQAHADAGAAQANAAAJgFQAIgFAFgGIALAIQgJAKgMAGQgLAEgOAAQgKAAgKgEgAgMgiQgGACgGAEQgFAEgDAGQgDAFAAAHIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_27.setTransform(-247,112.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgdBEQgNgEgKgKIALgLQAHAIALAFQAKAFANAAQALAAAHgDQAJgDAFgFQAEgFADgHQACgHAAgIIAAgRIgBAAQgHAKgKAEQgLAEgMAAQgKAAgLgDQgKgEgIgGQgHgHgEgIQgFgJAAgKQAAgLAFgJQAEgIAHgHQAHgHAKgEQAKgDALAAIAKAAIALADIALAGQAEADAFAGIABAAIAAgQIAPAAIAABdQgBAIgCAJQgCAJgGAHQgGAHgMAFQgKAFgSAAQgQAAgMgFgAgOg5QgHADgGAFQgFAFgDAGQgDAHAAAHQAAAIADAHQADAGAFAEQAGAFAHADQAHADAHAAQAJAAAHgDQAHgCAHgFQAFgEADgHQADgGAAgJQAAgHgCgHQgEgGgEgFQgGgFgIgDQgHgDgKAAQgHAAgHADg");
	this.shape_28.setTransform(-260.6,114.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgWAxQgGgCgFgEQgGgDgCgGQgDgFAAgHQgBgLAHgHQAHgGAKgDQAKgDALgBIAVgBIAIAAIAAgDQgBgYgbAAQgRAAgPAMIgJgLQAQgNAcAAQAIAAAIACQAGACAGAEQAFAEADAHQADAGAAAJIAAApIABAMIACAKIgQAAIAAgIIAAgIIgBAAQgGAJgKAFQgJAEgMAAQgHAAgHgBgAAGABQgHAAgIACQgIACgGAEQgFAEAAAIQAAAEACAEQACADAEACIAIADIAJABQAHAAAHgDQAGgCAEgEQADgEADgGQACgGAAgGIAAgHIgIAAIgPABg");
	this.shape_29.setTransform(-273.5,112.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("ABBAxIAAg3QAAgOgGgIQgFgIgQAAQgIAAgGADQgFADgEAFQgDAFgCAGQgCAGAAAHIAAAyIgOAAIAAg3QAAgOgGgIQgFgIgQAAIgGABQgFABgGAEQgEADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgLIAAgKIAQAAIAAAOIABAAQAFgIAJgFQAKgEAKAAIAJABIAKADQAEACAEAEQADAEADAGQAEgJAKgGQALgFAKAAQAUAAALAKQAJAJAAASIAAA8g");
	this.shape_30.setTransform(-289,111.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgHBHIAAheIAOAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgEgDg");
	this.shape_31.setTransform(-301.3,109.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgWAxQgGgCgFgEQgFgDgEgGQgCgFAAgHQgBgLAHgHQAHgGAKgDQAKgDALgBIAVgBIAIAAIAAgDQgBgYgbAAQgSAAgOAMIgJgLQAQgNAcAAQAIAAAIACQAGACAGAEQAFAEADAHQADAGABAJIAAApIAAAMIACAKIgQAAIgBgIIAAgIIAAAAQgGAJgKAFQgIAEgNAAQgHAAgHgBgAAGABQgHAAgIACQgIACgGAEQgFAEAAAIQAAAEACAEQACADAEACIAIADIAJABQAHAAAHgDQAFgCAEgEQAFgEACgGQACgGAAgGIAAgHIgJAAIgOABg");
	this.shape_32.setTransform(-316.6,112.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgGBNIAAiZIANAAIAACZg");
	this.shape_33.setTransform(-325,109.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgWAxQgGgCgGgEQgFgDgDgGQgCgFAAgHQAAgLAGgHQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgDQABgYgcAAQgSAAgOAMIgJgLQAPgNAdAAQAIAAAHACQAIACAFAEQAFAEADAHQAEAGAAAJIAAApIAAAMIABAKIgPAAIgBgIIAAgIIAAAAQgHAJgJAFQgIAEgNAAQgHAAgHgBgAAHABQgIAAgIACQgIACgGAEQgFAEAAAIQAAAEACAEQACADAEACIAIADIAJABQAIAAAFgDQAHgCADgEQAFgEACgGQABgGAAgGIAAgHIgIAAIgNABg");
	this.shape_34.setTransform(-340.2,112.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgSAuQgKgDgIgHQgHgHgEgJQgFgKAAgKQAAgKAFgJQAEgJAHgHQAIgGAJgEQAKgEAKAAQAMAAAKAEQAJAEAHAGQAGAGAEAJQADAJABAKIAAAEIhYAAQAAAIADAGQAEAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIALAJQgJAKgMAGQgLAEgOAAQgKAAgKgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_35.setTransform(344.7,87.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgIgHgDgJQgFgJAAgLQAAgLAFgJQADgIAIgHQAHgGALgEQAKgEAMAAIALABIALADIALAGQAFADADAFIABAAIAAhKIAPAAIAACZIgPAAIAAgQIgBAAQgDAFgFADQgFAEgGACQgFACgGABIgLABQgMAAgKgEgAgQgGQgHADgGAEQgFAFgCAHQgEAHAAAIQAAAIAEAHQACAHAFAFQAGAFAHADQAIADAIAAQAJAAAIgDQAIgDAFgFQAHgFACgHQADgHAAgIQAAgIgDgHQgCgHgHgFQgFgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_36.setTransform(331,84.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_37.setTransform(317.8,87.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_38.setTransform(304.9,87.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("Ag4BOIAAiYIAPAAIAAAPIABAAQADgFAFgEIALgFIALgDIAKgBQANAAAKAEQALAEAHAGQAIAHADAJQAFAJAAALQAAAKgFAKQgDAIgIAHQgHAHgLADQgKAEgNAAIgKgBQgGgBgFgCQgGgCgFgEQgFgDgDgGIgBAAIAABLgAgQg+QgIADgGAFQgFAFgEAHQgCAHAAAIQAAAIACAHQAEAGAFAGQAGAEAIADQAIADAIAAQAKAAAHgDQAHgDAGgEQAFgGADgGQADgHAAgIQAAgIgDgHQgDgHgFgFQgGgFgHgDQgHgDgKAAQgIAAgIADg");
	this.shape_39.setTransform(291.5,90.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgBQgFgCgFgCQgEgCgDgFQgDgEAAgIQAAgHADgFQADgGAGgDQAFgDAHgDIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEAAgDADQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_40.setTransform(279.3,87.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgFgJQgDgKAAgKQAAgKADgJQAEgJAIgHQAHgGAKgEQAKgEALAAQALAAAKAEQAKAEAGAGQAHAGADAJQAEAJgBAKIAAAEIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKAKgMAGQgLAEgNAAQgLAAgLgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHADg");
	this.shape_41.setTransform(268.1,87.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAPAAIAAARIABAAQABgEAEgDIAGgHIAJgEQAGgCAIAAIAKABIgCANIgJgBQgJAAgGADQgFADgFAFQgEAFgCAFQgCAFAAAFIAAA1g");
	this.shape_42.setTransform(259,87.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIAAgQIAPAAIAAARIAAAAQABgEADgDIAIgHIAIgEQAGgCAHAAIAMABIgEANIgJgBQgIAAgGADQgFADgEAFQgFAFgBAFQgCAFAAAFIAAA1g");
	this.shape_43.setTransform(251.4,87.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_44.setTransform(239.8,87.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_45.setTransform(227.9,87.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_46.setTransform(209,87.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgWBKQgKgDgIgHQgHgHgEgJQgFgJAAgLQAAgLAFgJQAEgIAHgHQAIgGAKgEQAKgEAMAAIALABIALADIALAGQAFADADAFIABAAIAAhKIAPAAIAACZIgPAAIAAgQIgBAAQgDAFgFADQgFAEgGACQgFACgGABIgLABQgMAAgKgEgAgQgGQgHADgGAEQgFAFgDAHQgCAHAAAIQAAAIACAHQADAHAFAFQAGAFAHADQAIADAIAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQACgHAAgIQAAgIgCgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_47.setTransform(194.9,84.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgDgDgGQgEgFAAgHQABgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQAAgYgbAAQgRAAgOAMIgKgKQAQgOAdAAQAHAAAHACQAIACAFAEQAFAEAEAGQACAHAAAIIAAAqIABALIABAKIgOAAIgBgHIAAgIIgBAAQgHAKgIAEQgKAEgMAAQgHAAgGgCgAAGABQgHAAgIACQgIACgFAEQgGAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAGgDAFgFQADgDACgGQACgFAAgHIAAgHIgHAAIgPABg");
	this.shape_48.setTransform(182.1,87.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgGBHIAAheIANAAIAABegAgGg1QgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_49.setTransform(173.7,85.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_50.setTransform(165.8,87.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_51.setTransform(153.4,87.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_52.setTransform(140.8,87.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_53.setTransform(128,87.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgSAuQgKgDgIgHQgHgHgFgJQgDgKgBgKQABgKADgJQAFgJAHgHQAHgGAKgEQAKgEALAAQALAAAKAEQAKAEAGAGQAHAGADAJQAEAJAAAKIAAAEIhYAAQAAAIADAGQADAHAFAEQAGAFAHACQAHADAGAAQANAAAIgFQAKgFAEgHIALAJQgJAKgLAGQgMAEgOAAQgKAAgKgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHADg");
	this.shape_54.setTransform(115.5,87.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgGBNIAAiZIAOAAIAACZg");
	this.shape_55.setTransform(100.1,84.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgVBIQgHgCgGgEQgEgDgDgGQgEgFAAgHQABgLAGgHQAHgHAKgDQAKgDALgBIAVgBIAHAAIAAgCQAAgYgbAAQgRAAgOAMIgKgKQAQgOAdAAQAHAAAHACQAIACAFAEQAFAEAEAHQACAGAAAIIAAAqIABAMIABAKIgOAAIgBgIIAAgIIgBAAQgHAKgIAEQgKAEgMAAQgHAAgGgBgAAGAYQgHAAgIACQgIACgFAEQgGAEAAAIQAAAEACAEQACADAEACIAIADIAJABQAIAAAFgCQAGgDAFgEQADgEACgGQACgFAAgHIAAgHIgHAAIgPABgAgKgrIAWgdIAVAAIgeAdg");
	this.shape_56.setTransform(91.2,85.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_57.setTransform(79.1,87.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_58.setTransform(67.7,87.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAQAAIAAARIAAAAQABgEADgDIAHgHIAJgEQAGgCAIAAIALABIgDANIgJgBQgJAAgGADQgFADgEAFQgFAFgCAFQgBAFAAAFIAAA1g");
	this.shape_59.setTransform(52.7,87.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgWAwQgGgCgGgDQgEgDgEgGQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQAAgYgbAAQgSAAgOAMIgJgKQAPgOAdAAQAIAAAHACQAHACAGAEQAFAEADAGQAEAHAAAIIAAAqIAAALIACAKIgQAAIgBgHIAAgIIAAAAQgHAKgJAEQgIAEgNAAQgHAAgHgCgAAHABQgIAAgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAGgDAEgFQAEgDADgGQABgFAAgHIAAgHIgIAAIgNABg");
	this.shape_60.setTransform(41.7,87.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_61.setTransform(30.9,87.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgGBHIAAheIAOAAIAABegAgGg1QgEgDAAgEQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgDgDg");
	this.shape_62.setTransform(22.4,85.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgIgHgDgJQgFgJAAgLQAAgLAFgJQADgIAIgHQAHgGALgEQAKgEAMAAIALABIALADIALAGQAFADADAFIABAAIAAhKIAPAAIAACZIgPAAIAAgQIgBAAQgDAFgFADQgFAEgGACQgFACgGABIgLABQgMAAgKgEgAgQgGQgHADgGAEQgFAFgDAHQgDAHAAAIQAAAIADAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAIgDAGgFQAFgFADgHQADgHAAgIQAAgIgDgHQgDgHgFgFQgGgEgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_63.setTransform(12.3,84.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_64.setTransform(-0.9,87.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AgHBHIAAheIAOAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgEgDg");
	this.shape_65.setTransform(-9.7,85.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgBQgFgCgFgCQgEgCgDgFQgDgEAAgIQAAgHADgFQADgGAGgDQAFgDAHgDIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEAAgDADQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_66.setTransform(-23.7,87.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgVBIQgHgCgFgEQgGgDgCgGQgEgFAAgHQAAgLAHgHQAHgHAKgDQAKgDALgBIAVgBIAIAAIAAgCQAAgYgcAAQgRAAgOAMIgKgKQAPgOAeAAQAHAAAIACQAGACAGAEQAFAEAEAHQACAGAAAIIAAAqIABAMIABAKIgOAAIgBgIIAAgIIgBAAQgGAKgJAEQgKAEgMAAQgHAAgGgBgAAGAYQgHAAgIACQgIACgFAEQgGAEAAAIQAAAEACAEQACADAEACIAIADIAJABQAHAAAHgCQAFgDAFgEQADgEACgGQACgFABgHIAAgHIgIAAIgPABgAgKgrIAWgdIAUAAIgdAdg");
	this.shape_67.setTransform(-34.7,85.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAQAAIAAARIAAAAQABgEADgDIAHgHIAJgEQAGgCAIAAIALABIgDANIgJgBQgJAAgGADQgFADgEAFQgFAFgCAFQgBAFAAAFIAAA1g");
	this.shape_68.setTransform(-43.2,87.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgFgKAAgKQAAgKAFgJQADgJAIgHQAIgGAJgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAGAGAEAJQADAJAAAKIAAAEIhYAAQABAIAEAGQADAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIAMAJQgKAKgMAGQgLAEgOAAQgKAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_69.setTransform(-54.3,87.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgKBNQgGgBgFgCQgGgCgFgEQgFgDgDgFIgBAAIAAAQIgPAAIAAiZIAPAAIAABKIABAAQADgFAFgDIALgGIALgDIAKgBQANAAAKAEQALAEAHAGQAIAHADAIQAFAJAAALQAAALgFAJQgDAJgIAHQgHAHgLADQgKAEgNAAIgKgBgAgQgGQgIADgFAEQgHAFgCAHQgDAHAAAIQAAAIADAHQACAHAHAFQAFAFAIADQAHADAJAAQAJAAAIgDQAHgDAGgFQAFgFACgHQAEgHAAgIQAAgIgEgHQgCgHgFgFQgGgEgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_70.setTransform(-67.2,84.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgSAuQgLgDgHgHQgHgHgEgJQgFgKAAgKQAAgKAFgJQAEgJAHgHQAIgGAJgEQAKgEAKAAQAMAAAKAEQAJAEAHAGQAGAGAEAJQADAJABAKIAAAEIhZAAQABAIADAGQAEAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIALAJQgJAKgMAGQgLAEgOAAQgKAAgKgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_71.setTransform(-80.9,87.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AhEBIIAAiPIA2AAQAOAAAPAEQAPAFAMAJQAMAJAIANQAHAOAAARQAAASgHANQgIAOgMAJQgMAJgPAEQgPAFgOAAgAg0A6IAgAAQATAAAMgEQAOgGAJgIQAJgIAEgLQAFgKAAgLQAAgLgFgKQgEgLgJgIQgJgIgOgEQgMgGgTAAIggAAg");
	this.shape_72.setTransform(-95.4,85.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgIAIQgDgDAAgEQAAgEADgDQADgEAFAAQAFAAAEAEQADADAAAEQAAAEgDADQgEADgFAAQgFAAgDgDg");
	this.shape_73.setTransform(-113.7,91.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgBQgFgCgFgCQgEgCgDgFQgDgEAAgIQAAgHADgFQADgGAGgDQAFgDAHgDIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEAAgDADQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_74.setTransform(-121.7,87.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgEgKgBgKQABgKAEgJQADgJAIgHQAHgGAKgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAHAGADAJQADAJAAAKIAAAEIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAHADAHAAQAMAAAJgFQAJgFAEgHIAMAJQgKAKgMAGQgLAEgNAAQgLAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_75.setTransform(-132.9,87.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_76.setTransform(-145.8,87.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_77.setTransform(-158.8,87.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_78.setTransform(-168.2,85.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_79.setTransform(-176.1,87.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AgGBHIAAheIAOAAIAABegAgGg1QgEgDAAgEQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgDgDg");
	this.shape_80.setTransform(-184.7,85.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_81.setTransform(-194,87.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_82.setTransform(-202.9,85.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AgMBOIAAhSIgXAAIAAgMIAXAAIAAgaQAAgTAKgIQAJgIAQAAIAGAAIAHABIgDANIgGgBIgFgBQgHAAgDACQgEACgCADIgDAIIgBAKIAAAYIAZAAIAAAMIgZAAIAABSg");
	this.shape_83.setTransform(-208.5,84.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgSAuQgKgDgIgHQgHgHgEgJQgFgKAAgKQAAgKAFgJQAEgJAHgHQAIgGAJgEQAKgEAKAAQAMAAAKAEQAJAEAHAGQAGAGAEAJQADAJABAKIAAAEIhYAAQAAAIADAGQAEAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIALAJQgJAKgMAGQgLAEgOAAQgKAAgKgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_84.setTransform(-218.7,87.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgIgHgDgJQgFgJAAgLQAAgLAFgJQADgIAIgHQAHgGALgEQAKgEAMAAIALABIALADIALAGQAFADADAFIABAAIAAhKIAPAAIAACZIgPAAIAAgQIgBAAQgDAFgFADQgFAEgGACQgFACgGABIgLABQgMAAgKgEgAgQgGQgHADgGAEQgFAFgCAHQgEAHAAAIQAAAIAEAHQACAHAFAFQAGAFAHADQAIADAIAAQAJAAAIgDQAIgDAFgFQAHgFACgHQADgHAAgIQAAgIgDgHQgCgHgHgFQgFgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_85.setTransform(-232.4,84.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgEgKgBgKQABgKAEgJQADgJAIgHQAHgGAKgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAHAGADAJQADAJAAAKIAAAEIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAHADAHAAQAMAAAJgFQAJgFAEgHIAMAJQgKAKgMAGQgLAEgNAAQgLAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_86.setTransform(-251.7,87.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgIgHgDgJQgFgJAAgLQAAgLAFgJQADgIAIgHQAHgGALgEQAKgEAMAAIALABIALADIALAGQAFADADAFIABAAIAAhKIAPAAIAACZIgPAAIAAgQIgBAAQgDAFgFADQgFAEgGACQgFACgGABIgLABQgMAAgKgEgAgQgGQgHADgGAEQgFAFgDAHQgDAHAAAIQAAAIADAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAIgDAFgFQAGgFADgHQADgHAAgIQAAgIgDgHQgDgHgGgFQgFgEgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_87.setTransform(-265.4,84.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_88.setTransform(-285.1,87.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgWBKQgKgDgIgHQgHgHgEgJQgFgJAAgLQAAgLAFgJQAEgIAHgHQAIgGAKgEQAKgEAMAAIALABIALADIALAGQAFADADAFIABAAIAAhKIAPAAIAACZIgPAAIAAgQIgBAAQgDAFgFADQgFAEgGACQgFACgGABIgLABQgMAAgKgEgAgQgGQgHADgGAEQgFAFgDAHQgDAHAAAIQAAAIADAHQADAHAFAFQAGAFAHADQAIADAIAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQACgHAAgIQAAgIgCgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_89.setTransform(-299.2,84.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgDgDgGQgEgFAAgHQAAgMAHgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQAAgYgbAAQgRAAgOAMIgKgKQAQgOAdAAQAHAAAHACQAIACAFAEQAFAEAEAGQACAHAAAIIAAAqIABALIABAKIgOAAIgBgHIAAgIIgBAAQgHAKgIAEQgKAEgMAAQgHAAgGgCgAAGABQgHAAgIACQgIACgFAEQgGAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAGgDAFgFQADgDACgGQACgFAAgHIAAgHIgHAAIgPABg");
	this.shape_90.setTransform(-312,87.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_91.setTransform(-321.5,86.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgBQgFgCgFgCQgEgCgDgFQgDgEAAgIQAAgHADgFQADgGAGgDQAFgDAHgDIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEAAgDADQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_92.setTransform(-330.1,87.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgHBHIAAheIAOAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgEgDg");
	this.shape_93.setTransform(-337.7,85.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AgGBNIAAiZIAOAAIAACZg");
	this.shape_94.setTransform(-343.1,84.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_95.setTransform(344.2,63.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_96.setTransform(331.6,63.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgDIgOgDIgHgBQgFgCgFgCQgEgDgDgEQgDgEAAgIQAAgHADgFQADgGAGgDQAFgEAHgCIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEABgDACQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAFgFAEQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_97.setTransform(314.2,63.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgEgDgFQgEgFAAgHQABgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQAAgYgbAAQgRAAgOAMIgKgKQAQgOAdAAQAHAAAHACQAIACAFAEQAFAEAEAGQACAHAAAJIAAApIABAMIABAJIgOAAIgBgHIAAgIIgBAAQgHAJgIAFQgKAEgMAAQgHAAgGgCgAAGABQgHAAgIACQgIACgFAEQgGAEAAAHQAAAFACAEQACADAEACIAIADIAJABQAIAAAFgCQAGgDAFgEQADgEACgGQACgGAAgGIAAgHIgHAAIgPABg");
	this.shape_98.setTransform(303.1,63.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AgGBNIAAiZIANAAIAACZg");
	this.shape_99.setTransform(294.8,60.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AgHBNIAAiZIAPAAIAACZg");
	this.shape_100.setTransform(289.3,60.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgEgJgBgLQABgKAEgJQADgJAIgHQAHgGAKgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAHAHADAIQADAJAAAJIAAAFIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAHADAHAAQAMAAAJgFQAJgFAEgHIAMAJQgKAKgMAGQgLAEgNAAQgLAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_101.setTransform(280.2,63.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AgWAwQgGgCgFgDQgFgEgEgFQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQAAgYgbAAQgSAAgOAMIgJgKQAPgOAdAAQAIAAAHACQAHACAGAEQAFAEADAGQAEAHAAAJIAAApIAAAMIACAJIgQAAIgBgHIAAgIIAAAAQgHAJgJAFQgIAEgNAAQgHAAgHgCgAAHABQgIAAgIACQgIACgGAEQgFAEAAAHQAAAFACAEQACADAEACIAIADIAJABQAIAAAGgCQAFgDAEgEQAEgEADgGQACgGgBgGIAAgHIgIAAIgNABg");
	this.shape_102.setTransform(261.3,63.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgSAuQgKgDgIgHQgHgHgEgJQgFgJAAgLQAAgKAFgJQAEgJAHgHQAIgGAJgEQAKgEAKAAQAMAAAKAEQAJAEAHAGQAHAHADAIQADAJABAJIAAAFIhYAAQAAAIADAGQAEAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIALAJQgJAKgMAGQgLAEgOAAQgKAAgKgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_103.setTransform(243,63.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_104.setTransform(232.8,62);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_105.setTransform(222.5,63.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgSAuQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAHgGAKgEQAKgEAKAAQAMAAAKAEQAKAEAGAGQAHAHADAIQAEAJAAAJIAAAFIhYAAQAAAIADAGQADAHAFAEQAGAFAHACQAHADAGAAQANAAAIgFQAKgFAEgHIALAJQgJAKgLAGQgMAEgOAAQgKAAgKgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_106.setTransform(210,63.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIAAgQIAOAAIAAARIABAAQACgEADgDIAHgHIAJgEQAFgCAHAAIAMABIgEANIgJgBQgIAAgGADQgFADgFAFQgEAFgBAFQgCAFAAAFIAAA1g");
	this.shape_107.setTransform(200.9,63.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgwBIIAAiPIBhAAIAAANIhQAAIAAAxIBKAAIAAANIhKAAIAABEg");
	this.shape_108.setTransform(190.5,60.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AgIAIQgDgDAAgFQAAgDADgDQADgEAFAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_109.setTransform(173.9,67);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgDIgOgDIgHgBQgFgCgFgCQgEgDgDgEQgDgEAAgIQAAgHADgFQADgGAGgDQAFgEAHgCIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEABgDACQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAFgFAEQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_110.setTransform(165.9,63.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgFgJQgDgJAAgLQAAgKADgJQAEgJAIgHQAHgGAKgEQAKgEALAAQALAAAKAEQAKAEAGAGQAHAHADAIQAEAJgBAJIAAAFIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAGADAIAAQAMAAAJgFQAJgFAEgHIAMAJQgKAKgMAGQgLAEgNAAQgLAAgLgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgQAAQgHAAgHADg");
	this.shape_111.setTransform(154.7,63.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_112.setTransform(141.8,63.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgFgJAAgLQAAgKAFgJQADgJAIgHQAIgGAJgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAGAHAEAIQADAJABAJIAAAFIhZAAQABAIAEAGQADAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIAMAJQgKAKgMAGQgLAEgOAAQgKAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_113.setTransform(129.3,63.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AgdBEQgNgEgKgKIALgLQAHAIALAFQAKAFANAAQALAAAIgDQAIgDAEgFQAFgFADgHQABgHAAgIIAAgRIAAAAQgHAKgKAEQgLAEgMAAQgKAAgLgDQgKgEgIgGQgHgHgEgIQgFgJAAgKQAAgLAFgJQADgIAIgHQAHgHAKgEQAKgDALAAIAKAAIALADIALAGQAEADAFAGIAAAAIAAgQIAQAAIAABdQAAAIgDAJQgCAJgGAHQgGAHgLAFQgLAFgSAAQgPAAgNgFgAgOg5QgHADgGAFQgFAFgDAGQgDAHAAAHQAAAIADAHQADAGAFAEQAGAFAHADQAHADAIAAQAIAAAHgDQAHgCAHgFQAFgEADgHQADgGAAgJQAAgHgCgHQgDgGgFgFQgGgFgIgDQgHgDgJAAQgIAAgHADg");
	this.shape_114.setTransform(115.7,65.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AgWBIQgGgCgFgEQgFgDgEgGQgCgFAAgHQgBgLAHgHQAHgHAKgDQAKgDALgBIAVgBIAIAAIAAgCQgBgYgbAAQgSAAgOAMIgJgKQAQgOAcAAQAIAAAIACQAGACAGAEQAFAEADAHQADAGABAIIAAAqIAAAMIACAKIgQAAIAAgIIAAgIIgBAAQgGAKgKAEQgIAEgNAAQgHAAgHgBgAAGAYQgHAAgIACQgIACgGAEQgFAEAAAIQAAAEACAEQACADAEACIAIADIAJABQAHAAAHgCQAFgDAEgEQAFgEACgGQACgFAAgHIAAgHIgJAAIgOABgAgKgrIAWgdIAUAAIgeAdg");
	this.shape_115.setTransform(102.8,60.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("ABBAxIAAg3QAAgOgFgIQgGgIgQAAQgIAAgGADQgFADgEAFQgDAFgDAGQgBAGAAAHIAAAyIgOAAIAAg3QAAgOgFgIQgHgIgPAAIgGABQgFABgGAEQgFADgEAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgLIAAgKIAQAAIAAAOIABAAQAFgIAKgFQAKgEAJAAIAJABIAKADQAEACAEAEQADAEADAGQAEgJAKgGQALgFAKAAQAUAAALAKQAJAJAAASIAAA8g");
	this.shape_116.setTransform(87.3,63.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#111111").s().p("AgHBHIAAheIAOAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgEgDg");
	this.shape_117.setTransform(75,60.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgFgJAAgLQAAgKAFgJQADgJAIgHQAIgGAJgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAGAHAEAIQADAJAAAJIAAAFIhYAAQABAIAEAGQADAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIAMAJQgKAKgMAGQgLAEgOAAQgKAAgLgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_118.setTransform(59.6,63.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgIgHgEgJQgEgJAAgLQAAgLAEgJQAEgIAIgHQAHgGALgEQALgEALAAIALABIALADIALAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgGACQgFACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgCAHQgDAHgBAIQABAIADAHQACAHAGAFQAFAFAHADQAIADAIAAQAJAAAIgDQAIgDAFgFQAHgFACgHQAEgHAAgIQAAgIgEgHQgCgHgHgFQgFgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_119.setTransform(45.9,60.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#111111").s().p("AgTAuQgJgDgIgHQgHgHgFgJQgDgJAAgLQAAgKADgJQAEgJAIgHQAHgGAKgEQAKgEALAAQAMAAAJAEQAJAEAHAGQAHAHADAIQAEAJgBAJIAAAFIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKAKgLAGQgMAEgNAAQgLAAgLgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgQAAQgHAAgHADg");
	this.shape_120.setTransform(26.6,63.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_121.setTransform(17.5,60.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIAAgQIAPAAIAAARIAAAAQABgEADgDIAIgHIAIgEQAGgCAHAAIAMABIgEANIgJgBQgIAAgGADQgFADgEAFQgFAFgBAFQgCAFAAAFIAAA1g");
	this.shape_122.setTransform(12,63.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#111111").s().p("AgSAuQgKgDgIgHQgHgHgEgJQgFgJAAgLQAAgKAFgJQAEgJAHgHQAIgGAJgEQAKgEAKAAQAMAAAKAEQAJAEAHAGQAGAHAEAIQADAJABAJIAAAFIhYAAQAAAIADAGQAEAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIALAJQgJAKgMAGQgLAEgOAAQgKAAgKgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_123.setTransform(0.9,63.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgDIgOgDIgHgBQgFgCgFgCQgEgDgDgEQgDgEAAgIQAAgHADgFQADgGAGgDQAFgEAHgCIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEABgDACQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAFgFAEQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_124.setTransform(-10.3,63.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgEgEgFQgDgFAAgHQABgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQAAgYgbAAQgSAAgNAMIgKgKQAPgOAeAAQAHAAAHACQAIACAFAEQAFAEAEAGQACAHAAAJIAAApIABAMIABAJIgOAAIgCgHIAAgIIAAAAQgHAJgIAFQgJAEgNAAQgHAAgGgCgAAHABQgIAAgIACQgIACgFAEQgGAEAAAHQAAAFACAEQACADAEACIAIADIAJABQAIAAAFgCQAHgDADgEQAFgEABgGQACgGAAgGIAAgHIgIAAIgNABg");
	this.shape_125.setTransform(-27.7,63.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_126.setTransform(-39.9,63.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_127.setTransform(-52.5,63.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgDIgOgDIgHgBQgFgCgFgCQgEgDgDgEQgDgEAAgIQAAgHADgFQADgGAGgDQAFgEAHgCIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEABgDACQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAFgFAEQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_128.setTransform(-70,63.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_129.setTransform(-81.6,63.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#111111").s().p("ABBAxIAAg3QAAgOgFgIQgGgIgQAAQgIAAgGADQgFADgEAFQgEAFgCAGQgBAGAAAHIAAAyIgOAAIAAg3QAAgOgFgIQgHgIgPAAIgGABQgFABgFAEQgGADgEAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgLIAAgKIAQAAIAAAOIAAAAQAGgIAKgFQAKgEAJAAIAJABIAJADQAFACAEAEQADAEADAGQAFgJAJgGQAKgFALAAQAUAAAKAKQAKAJAAASIAAA8g");
	this.shape_130.setTransform(-98.3,63.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#111111").s().p("AgTAuQgJgDgIgHQgHgHgFgJQgDgJAAgLQAAgKADgJQAFgJAHgHQAIgGAJgEQAKgEALAAQAMAAAJAEQAJAEAHAGQAGAHAEAIQADAJAAAJIAAAFIhXAAQAAAIADAGQAEAHAFAEQAFAFAHACQAGADAIAAQAMAAAIgFQAKgFAEgHIALAJQgJAKgLAGQgMAEgNAAQgLAAgLgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgQAAQgHAAgHADg");
	this.shape_131.setTransform(-114.2,63.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_132.setTransform(-127.1,63.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_133.setTransform(-140,63.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#111111").s().p("Ag4BOIAAiZIAPAAIAAAQIAAAAQAEgFAFgEIALgFIALgDIAKgBQAMAAALAEQALAEAHAGQAIAHAEAJQAEAJAAALQAAALgEAJQgEAIgIAHQgHAHgLADQgLAEgMAAIgKgBQgGgBgFgCQgGgCgFgEQgFgEgEgFIAAAAIAABLgAgQg+QgIADgFAFQgHAFgCAHQgEAHAAAIQAAAIAEAHQACAGAHAGQAFAEAIADQAHADAJAAQAJAAAIgDQAHgDAFgEQAGgGACgGQADgHABgIQgBgIgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_134.setTransform(-153.4,66);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgEgJgBgLQABgKAEgJQADgJAIgHQAHgGAKgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAHAHADAIQADAJAAAJIAAAFIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAHADAHAAQAMAAAJgFQAJgFAEgHIAMAJQgKAKgMAGQgLAEgNAAQgLAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_135.setTransform(-173.4,63.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_136.setTransform(-183.6,62);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_137.setTransform(-200.2,63.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#111111").s().p("AgWBFQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAIQAFAJAAALQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgLQgHADgGAFQgFAEgDAHQgCAHAAAIQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgIgDgHQgCgHgGgEQgFgFgHgDQgIgDgJAAQgJAAgHADgAgNgrIAWgdIAVAAIgeAdg");
	this.shape_138.setTransform(-213.2,60.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#111111").s().p("AgGBHIAAheIANAAIAABegAgGg1QgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_139.setTransform(-222.6,60.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_140.setTransform(-230.5,63.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#111111").s().p("AgWAwQgGgCgGgDQgFgEgDgFQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQABgYgcAAQgSAAgOAMIgJgKQAPgOAdAAQAIAAAHACQAIACAFAEQAFAEADAGQAEAHAAAJIAAApIAAAMIABAJIgPAAIgBgHIAAgIIAAAAQgHAJgJAFQgIAEgNAAQgHAAgHgCgAAHABQgIAAgIACQgIACgGAEQgFAEAAAHQAAAFACAEQACADAEACIAIADIAJABQAIAAAFgCQAHgDADgEQAFgEACgGQABgGAAgGIAAgHIgIAAIgNABg");
	this.shape_141.setTransform(-242.6,63.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_142.setTransform(-254.7,63.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_143.setTransform(-267.5,63.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_144.setTransform(-276.3,60.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_145.setTransform(-282.9,62);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_146.setTransform(-293.2,63.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_147.setTransform(-306.2,63.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_148.setTransform(-318,63.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#111111").s().p("AA7BIIgSgmIhRAAIgSAmIgTAAIBGiPIAPAAIBGCPgAgiAVIBFAAIgjhLg");
	this.shape_149.setTransform(-338.1,60.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#111111").s().p("AgIAIQgDgDAAgEQAAgEADgDQADgEAFAAQAFAAAEAEQADADAAAEQAAAEgDADQgEADgFAAQgFAAgDgDg");
	this.shape_150.setTransform(46.4,18.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgDgEgGQgDgFAAgHQABgMAGgGQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgDQAAgYgbAAQgSAAgNALIgKgJQAPgOAeAAQAHAAAHACQAIACAFAEQAFAEAEAGQACAHAAAIIAAAqIABALIABAKIgOAAIgCgHIAAgIIAAAAQgHAJgIAFQgJAEgNAAQgHAAgGgCgAAHAAQgIABgIACQgIACgFAEQgGAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDABgGQACgFAAgHIAAgHIgIAAIgNAAg");
	this.shape_151.setTransform(37.1,14.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgIgHgDgJQgFgJAAgLQAAgLAFgJQADgIAIgHQAHgGALgEQAKgEAMAAIALABIALADIALAGQAFADADAFIABAAIAAhKIAPAAIAACZIgPAAIAAgQIgBAAQgDAFgFADQgFAEgGACQgFACgGABIgLABQgMAAgKgEgAgQgGQgHADgGAEQgFAFgCAHQgEAHAAAIQAAAIAEAHQACAHAFAFQAGAFAHADQAIADAIAAQAJAAAIgDQAIgDAFgFQAHgFACgHQADgHAAgIQAAgIgDgHQgCgHgHgFQgFgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_152.setTransform(24.1,11.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#111111").s().p("AgGBHIAAheIANAAIAABegAgGg1QgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_153.setTransform(14.8,12);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#111111").s().p("AgHAvIgshdIASAAIAiBPIAihPIARAAIgrBdg");
	this.shape_154.setTransform(6.5,14.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgDgEgGQgDgFAAgHQABgMAGgGQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgDQAAgYgbAAQgSAAgNALIgKgJQAPgOAeAAQAHAAAHACQAIACAFAEQAFAEAEAGQACAHAAAIIAAAqIABALIABAKIgOAAIgCgHIAAgIIAAAAQgHAJgIAFQgJAEgNAAQgHAAgGgCgAAHAAQgIABgIACQgIACgFAEQgGAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDABgGQACgFAAgHIAAgHIgIAAIgNAAg");
	this.shape_155.setTransform(-11.5,14.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111111").s().p("AgGBNIAAiZIANAAIAACZg");
	this.shape_156.setTransform(-19.9,11.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#111111").s().p("AgTAuQgKgEgHgGQgHgHgEgJQgEgKgBgKQABgKAEgJQADgJAIgHQAHgGAKgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAHAGADAJQADAJAAAKIAAAEIhYAAQABAIAEAGQACAGAGAFQAFAEAHADQAHADAHAAQAMAAAJgFQAJgFAEgHIAMAJQgKALgMAEQgLAFgNAAQgLAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_157.setTransform(-35.3,14.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_158.setTransform(-45.5,13.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIAAgQIAOAAIAAARIABAAQACgEACgDIAIgHIAJgEQAFgCAHAAIAMABIgEANIgJgBQgIAAgGADQgFADgFAFQgEAFgBAFQgCAFAAAFIAAA1g");
	this.shape_159.setTransform(-52,14.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#111111").s().p("AgWAwQgGgCgFgDQgGgDgCgGQgDgFgBgHQAAgMAHgGQAHgGAKgDQAKgDALgBIAVgBIAIAAIAAgDQAAgYgcAAQgRAAgPALIgJgJQAQgOAcAAQAIAAAIACQAGACAGAEQAFAEADAGQADAHAAAIIAAAqIABALIACAKIgPAAIgBgHIAAgIIgBAAQgGAJgKAFQgJAEgMAAQgHAAgHgCgAAGAAQgHABgIACQgIACgFAEQgGAEAAAHQAAAFACADQACADAEADIAIADIAJABQAHAAAHgCQAFgDAFgFQADgDACgGQADgFAAgHIAAgHIgIAAIgPAAg");
	this.shape_160.setTransform(-63,14.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#111111").s().p("AgHAvIgshdIATAAIAhBPIAihPIARAAIgrBdg");
	this.shape_161.setTransform(-74.1,14.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#111111").s().p("AgGBNIAAiZIANAAIAACZg");
	this.shape_162.setTransform(-82.3,11.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgDgEgGQgDgFAAgHQABgMAGgGQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgDQABgYgcAAQgSAAgNALIgKgJQAPgOAeAAQAHAAAHACQAIACAFAEQAFAEAEAGQADAHAAAIIAAAqIAAALIABAKIgPAAIgBgHIAAgIIAAAAQgHAJgIAFQgJAEgNAAQgHAAgGgCgAAHAAQgIABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDABgGQACgFAAgHIAAgHIgIAAIgNAAg");
	this.shape_163.setTransform(-91.3,14.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#111111").s().p("AgWAuQgLgFgHgKIANgHQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgFAAgGQAAgIADgGQADgFAGgDQAFgEAHgBQAIgCAGAAQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCADAAADQAAAHAFADQAFADAKACIAPADQAMADAHAFQAHAHAAAKQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_164.setTransform(-101.8,14.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#111111").s().p("AgQAYIAPgvIASAAIgSAvg");
	this.shape_165.setTransform(-116.1,19.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_166.setTransform(-126.1,14.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#111111").s().p("AgWAuQgLgFgHgKIANgHQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgFAAgGQAAgIADgGQADgFAGgDQAFgEAHgBQAIgCAGAAQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCADAAADQAAAHAFADQAFADAKACIAPADQAMADAHAFQAHAHAAAKQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_167.setTransform(-137.7,14.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_168.setTransform(-149,14.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#111111").s().p("AgHBNIAAiZIAPAAIAACZg");
	this.shape_169.setTransform(-158,11.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_170.setTransform(-165.9,14.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_171.setTransform(-178.3,14.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_172.setTransform(-187.1,12);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#111111").s().p("AgTAuQgKgEgHgGQgHgHgFgJQgDgKAAgKQAAgKADgJQAEgJAIgHQAHgGAKgEQAKgEALAAQALAAAKAEQAKAEAGAGQAHAGADAJQAEAJgBAKIAAAEIhYAAQABAIAEAGQACAGAGAFQAFAEAHADQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKALgMAEQgLAFgNAAQgLAAgLgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHADg");
	this.shape_173.setTransform(-202.6,14.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#111111").s().p("AgTAuQgKgEgHgGQgHgHgEgJQgEgKgBgKQABgKAEgJQADgJAIgHQAHgGAKgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAHAGADAJQADAJAAAKIAAAEIhYAAQABAIAEAGQACAGAGAFQAFAEAHADQAHADAHAAQAMAAAJgFQAJgFAEgHIAMAJQgKALgMAEQgLAFgNAAQgLAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_174.setTransform(-221.6,14.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_175.setTransform(-231.8,13.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_176.setTransform(-242.1,14.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#111111").s().p("AgTAuQgJgEgIgGQgHgHgFgJQgDgKAAgKQAAgKADgJQAFgJAHgHQAIgGAJgEQAKgEALAAQAMAAAJAEQAJAEAHAGQAGAGAEAJQADAJAAAKIAAAEIhXAAQAAAIADAGQAEAGAFAFQAFAEAHADQAGADAIAAQAMAAAIgFQAKgFAEgHIALAJQgJALgLAEQgMAFgNAAQgLAAgLgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHADg");
	this.shape_177.setTransform(-254.6,14.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgIgHgEgJQgEgJAAgLQAAgLAEgJQAEgIAIgHQAHgGALgEQALgEALAAIALABIALADIALAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgGACQgFACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgCAHQgDAHgBAIQABAIADAHQACAHAGAFQAFAFAHADQAIADAIAAQAJAAAIgDQAIgDAFgFQAHgFACgHQAEgHAAgIQAAgIgEgHQgCgHgHgFQgFgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_178.setTransform(-268.2,11.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_179.setTransform(-277.6,12);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_180.setTransform(-285.5,14.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_181.setTransform(-296.4,14.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#111111").s().p("AgWAwQgGgCgFgDQgFgDgEgGQgCgFAAgHQgBgMAHgGQAHgGAKgDQAKgDALgBIAVgBIAIAAIAAgDQgBgYgbAAQgSAAgOALIgJgJQAQgOAcAAQAIAAAIACQAGACAGAEQAFAEADAGQADAHABAIIAAAqIAAALIACAKIgQAAIgBgHIAAgIIAAAAQgGAJgKAFQgIAEgNAAQgHAAgHgCgAAGAAQgHABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAHAAAHgCQAFgDAEgFQAFgDACgGQACgFAAgHIAAgHIgJAAIgOAAg");
	this.shape_182.setTransform(-308.5,14.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_183.setTransform(-327,14.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_184.setTransform(-339.6,14.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#111111").s().p("AgSAuQgLgDgHgHQgHgHgEgJQgFgKAAgKQAAgKAFgJQAEgJAHgHQAIgGAJgEQAKgEAKAAQAMAAAKAEQAJAEAHAGQAGAGAEAJQADAJABAKIAAAEIhZAAQABAIADAGQAEAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIALAJQgJAKgMAGQgLAEgOAAQgKAAgKgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_185.setTransform(332.6,-10);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_186.setTransform(322.5,-11.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIAAgQIAOAAIAAARIABAAQACgEADgDIAHgHIAJgEQAFgCAHAAIALABIgCANIgKgBQgIAAgGADQgFADgFAFQgDAFgCAFQgDAFAAAFIAAA1g");
	this.shape_187.setTransform(315.9,-10.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#111111").s().p("AgWAwQgGgCgFgDQgFgDgEgGQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQAAgYgbAAQgSAAgOAMIgJgKQAQgOAcAAQAIAAAHACQAHACAGAEQAFAEADAGQAEAHAAAIIAAAqIAAALIACAKIgQAAIgBgHIAAgIIAAAAQgHAKgJAEQgIAEgNAAQgHAAgHgCgAAHABQgIAAgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAGgCQAFgDAEgFQAEgDADgGQABgFAAgHIAAgHIgIAAIgNABg");
	this.shape_188.setTransform(305,-10);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_189.setTransform(295.5,-11.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#111111").s().p("AgGBHIAAheIANAAIAABegAgGg1QgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_190.setTransform(289,-12.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#111111").s().p("AgIAvIgrhdIASAAIAhBOIAjhOIARAAIgrBdg");
	this.shape_191.setTransform(280.8,-10);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgEgKgBgKQABgKAEgJQADgJAIgHQAHgGAKgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAHAGADAJQADAJAAAKIAAAEIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAHADAHAAQAMAAAJgFQAJgFAEgHIAMAJQgKAKgMAGQgLAEgNAAQgLAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_192.setTransform(268.9,-10);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#111111").s().p("AgQAYIAPgvIASAAIgSAvg");
	this.shape_193.setTransform(253.1,-4.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#111111").s().p("AgWBKQgKgDgIgHQgHgHgEgJQgFgJAAgLQAAgLAFgJQAEgIAHgHQAIgGAKgEQAKgEAMAAIALABIAMADIAKAGQAFADADAFIABAAIAAhKIAPAAIAACZIgPAAIAAgQIgBAAQgDAFgFADQgFAEgFACQgGACgGABIgLABQgMAAgKgEgAgQgGQgHADgGAEQgFAFgDAHQgDAHAAAIQAAAIADAHQADAHAFAFQAGAFAHADQAIADAIAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQACgHAAgIQAAgIgCgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_194.setTransform(242.6,-12.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_195.setTransform(229.5,-9.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#111111").s().p("AgHBNIAAiZIAPAAIAACZg");
	this.shape_196.setTransform(220.6,-13);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#111111").s().p("AgWAwQgGgCgFgDQgGgDgCgGQgDgFAAgHQgBgMAHgGQAHgGAKgDQAKgEALAAIAVgBIAIAAIAAgDQgBgYgbAAQgRAAgPAMIgJgKQAQgOAcAAQAIAAAIACQAGACAGAEQAFAEADAGQADAHAAAIIAAAqIABALIACAKIgQAAIAAgHIAAgIIgBAAQgGAKgKAEQgJAEgMAAQgHAAgHgCgAAGABQgHAAgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAHAAAHgCQAGgDAEgFQADgDADgGQACgFAAgHIAAgHIgIAAIgPABg");
	this.shape_197.setTransform(211.6,-10);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgEAAgIQAAgHADgGQADgFAGgDQAFgDAHgDIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAHAAAKQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_198.setTransform(201.1,-10);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#111111").s().p("AgWAwQgGgCgFgDQgGgDgCgGQgDgFAAgHQgBgMAHgGQAHgGAKgDQAKgEALAAIAVgBIAIAAIAAgDQgBgYgbAAQgRAAgPAMIgJgKQAQgOAcAAQAIAAAIACQAGACAGAEQAFAEADAGQADAHAAAIIAAAqIABALIACAKIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgMAAQgHAAgHgCgAAGABQgHAAgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAHAAAHgCQAGgDAEgFQADgDADgGQACgFAAgHIAAgHIgIAAIgPABg");
	this.shape_199.setTransform(183.7,-10);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#111111").s().p("AgHBNIAAiZIAPAAIAACZg");
	this.shape_200.setTransform(175.4,-13);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgFgKAAgKQAAgKAFgJQADgJAIgHQAIgGAJgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAGAGAEAJQADAJAAAKIAAAEIhYAAQABAIAEAGQADAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIAMAJQgKAKgMAGQgLAEgOAAQgKAAgLgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_201.setTransform(159.9,-10);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgEAAgIQAAgHADgGQADgFAGgDQAFgDAHgDIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAHAAAKQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_202.setTransform(148.7,-10);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAPAAIAAARIABAAQABgEAEgDIAGgHIAJgEQAGgCAIAAIAKABIgCANIgJgBQgJAAgGADQgFADgFAFQgEAFgCAFQgCAFAAAFIAAA1g");
	this.shape_203.setTransform(141.1,-10.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgDgEgGQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQABgYgcAAQgSAAgNAMIgKgKQAPgOAeAAQAHAAAHACQAIACAFAEQAFAEAEAGQADAHAAAIIAAAqIAAALIABAKIgPAAIgBgHIAAgIIAAAAQgHAKgIAEQgJAEgNAAQgHAAgGgCgAAHABQgIAAgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDACgGQABgFAAgHIAAgHIgIAAIgNABg");
	this.shape_204.setTransform(130.1,-10);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#111111").s().p("AgqAvIAAgJIA+hIIg7AAIAAgMIBRAAIAAAJIg/BJIBAAAIAAALg");
	this.shape_205.setTransform(119.6,-10);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_206.setTransform(112,-12.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_207.setTransform(105.5,-11.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_208.setTransform(95.2,-10.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#111111").s().p("AgWAwQgGgCgFgDQgGgDgCgGQgDgFgBgHQAAgMAHgGQAHgGAKgDQAKgEALAAIAVgBIAIAAIAAgDQAAgYgcAAQgRAAgOAMIgKgKQAQgOAdAAQAHAAAIACQAGACAGAEQAFAEADAGQADAHAAAIIAAAqIABALIACAKIgPAAIgBgHIAAgIIgBAAQgGAKgJAEQgKAEgMAAQgHAAgHgCgAAGABQgHAAgIACQgIACgFAEQgGAEAAAHQAAAFACADQACADAEADIAIADIAJABQAHAAAHgCQAFgDAFgFQADgDACgGQADgFAAgHIAAgHIgIAAIgPABg");
	this.shape_209.setTransform(82.8,-10);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAQAAIAAARIAAAAQACgEACgDIAHgHIAJgEQAGgCAIAAIALABIgDANIgJgBQgJAAgGADQgFADgEAFQgEAFgDAFQgCAFABAFIAAA1g");
	this.shape_210.setTransform(74.4,-10.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#111111").s().p("AgWAwQgGgCgGgDQgFgDgDgGQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQABgYgcAAQgSAAgOAMIgJgKQAPgOAdAAQAIAAAHACQAIACAFAEQAFAEADAGQAEAHAAAIIAAAqIAAALIABAKIgPAAIgBgHIAAgIIAAAAQgHAKgJAEQgIAEgNAAQgHAAgHgCgAAHABQgIAAgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDACgGQABgFAAgHIAAgHIgIAAIgNABg");
	this.shape_211.setTransform(63.4,-10);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#111111").s().p("AgdBEQgNgEgKgKIALgLQAHAIAKAFQALAFANAAQALAAAHgDQAIgDAGgFQAEgFACgHQACgHABgIIAAgRIgBAAQgIAKgJAEQgLAEgMAAQgLAAgJgDQgLgEgHgGQgIgHgEgIQgEgJAAgKQAAgLADgJQAFgIAHgHQAHgHAKgEQAKgDAMAAIAJAAIAKADIALAGQAGADAEAGIABAAIAAgQIAOAAIAABdQAAAIgCAJQgCAJgGAHQgGAHgMAFQgLAFgQAAQgQAAgNgFgAgOg5QgHADgFAFQgGAFgDAGQgDAHAAAHQAAAIADAHQADAGAGAEQAFAFAHADQAHADAHAAQAJAAAHgDQAIgCAFgFQAGgEADgHQADgGAAgJQAAgHgDgHQgCgGgGgFQgFgFgHgDQgIgDgKAAQgHAAgHADg");
	this.shape_212.setTransform(50.5,-7.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#111111").s().p("AgVBIQgHgCgGgEQgEgDgDgGQgEgFAAgHQABgLAGgHQAHgHAKgDQAKgDALgBIAVgBIAHAAIAAgCQAAgYgbAAQgRAAgOAMIgKgKQAQgOAdAAQAHAAAHACQAIACAFAEQAFAEAEAHQACAGAAAIIAAAqIABAMIABAKIgOAAIgBgIIAAgIIgBAAQgHAKgIAEQgKAEgMAAQgHAAgGgBgAAHAYQgIAAgIACQgIACgFAEQgGAEAAAIQAAAEACAEQACADAEACIAIADIAJABQAIAAAFgCQAGgDAFgEQADgEACgGQACgFAAgHIAAgHIgHAAIgOABgAgKgrIAWgdIAVAAIgeAdg");
	this.shape_213.setTransform(31.3,-12.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAQAAIAAARIAAAAQABgEADgDIAHgHIAJgEQAGgCAIAAIALABIgEANIgJgBQgIAAgGADQgFADgEAFQgFAFgBAFQgCAFAAAFIAAA1g");
	this.shape_214.setTransform(22.9,-10.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgIgHgEgJQgEgJAAgLQAAgLAEgJQAEgIAIgHQAHgGALgEQALgEALAAIALABIALADIALAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgGACQgFACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgCAHQgDAHgBAIQABAIADAHQACAHAGAFQAFAFAHADQAIADAIAAQAJAAAIgDQAIgDAFgFQAHgFACgHQAEgHAAgIQAAgIgEgHQgCgHgHgFQgFgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_215.setTransform(10.8,-12.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_216.setTransform(-2.6,-10);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#111111").s().p("Ag4BOIAAiYIAPAAIAAAPIAAAAQAEgFAFgEIAKgFIAMgDIAKgBQAMAAALAEQALAEAHAGQAHAHAFAJQAEAJAAALQAAAKgEAKQgFAIgHAHQgHAHgLADQgLAEgMAAIgKgBQgGgBgGgCQgFgCgFgEQgFgDgEgGIAAAAIAABLgAgQg+QgIADgGAFQgFAFgEAHQgDAHAAAIQAAAIADAHQAEAGAFAGQAGAEAIADQAIADAIAAQAKAAAHgDQAHgDAFgEQAGgGADgGQACgHAAgIQAAgIgCgHQgDgHgGgFQgFgFgHgDQgHgDgKAAQgIAAgIADg");
	this.shape_217.setTransform(-16,-7.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_218.setTransform(-36.2,-10.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#111111").s().p("AgWBFQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAIQAFAJAAALQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgLQgHADgGAFQgFAEgDAHQgCAHAAAIQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgIgDgHQgCgHgGgEQgFgFgHgDQgIgDgJAAQgJAAgHADgAgNgrIAWgdIAVAAIgeAdg");
	this.shape_219.setTransform(-49.2,-12.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_220.setTransform(-58.6,-12.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_221.setTransform(-66.5,-10.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgDgEgGQgDgFAAgHQABgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQAAgYgbAAQgSAAgNAMIgKgKQAPgOAeAAQAHAAAHACQAIACAFAEQAFAEAEAGQACAHAAAIIAAAqIABALIABAKIgOAAIgCgHIAAgIIAAAAQgHAKgIAEQgJAEgNAAQgHAAgGgCgAAHABQgIAAgIACQgIACgFAEQgGAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDABgGQACgFAAgHIAAgHIgIAAIgNABg");
	this.shape_222.setTransform(-78.6,-10);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#111111").s().p("ABBAxIAAg3QAAgOgGgIQgFgIgQAAQgIAAgGADQgGADgDAFQgDAFgDAGQgBAGAAAHIAAAyIgOAAIAAg3QAAgOgGgIQgFgIgQAAIgGABQgFABgFAEQgFADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIAAgLIgBgKIAQAAIAAAOIAAAAQAGgIAJgFQALgEAJAAIAJABIAJADQAFACAEAEQADAEADAGQAFgJAKgGQAKgFAKAAQAUAAAKAKQAKAJAAASIAAA8g");
	this.shape_223.setTransform(-94.1,-10.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIAAgQIAOAAIAAARIABAAQACgEACgDIAIgHIAJgEQAFgCAHAAIAMABIgEANIgJgBQgIAAgGADQgFADgFAFQgEAFgBAFQgCAFAAAFIAAA1g");
	this.shape_224.setTransform(-106.5,-10.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_225.setTransform(-118.1,-10);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#111111").s().p("AgMBOIAAhSIgXAAIAAgMIAXAAIAAgaQAAgTAKgIQAJgIAQAAIAGAAIAHABIgDANIgGgBIgFgBQgHAAgDACQgEACgCADIgDAIIgBAKIAAAYIAZAAIAAAMIgZAAIAABSg");
	this.shape_226.setTransform(-127.7,-13.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_227.setTransform(-138.1,-10.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#111111").s().p("AgHBHIAAheIAOAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgEgDg");
	this.shape_228.setTransform(-147,-12.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgDgEgGQgDgFAAgHQABgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQAAgYgbAAQgSAAgNAMIgKgKQAPgOAeAAQAHAAAHACQAIACAFAEQAFAEAEAGQACAHAAAIIAAAqIABALIABAKIgOAAIgCgHIAAgIIAAAAQgHAKgIAEQgJAEgNAAQgHAAgGgCgAAHABQgIAAgIACQgIACgFAEQgGAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDABgGQACgFAAgHIAAgHIgIAAIgNABg");
	this.shape_229.setTransform(-162.3,-10);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_230.setTransform(-171.7,-11.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgEAAgIQAAgHADgGQADgFAGgDQAFgDAHgDIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAHAAAKQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_231.setTransform(-180.3,-10);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgFgKAAgKQAAgKAFgJQADgJAIgHQAIgGAJgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAGAGAEAJQADAJAAAKIAAAEIhYAAQABAIAEAGQADAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIAMAJQgKAKgMAGQgLAEgOAAQgKAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_232.setTransform(-191.5,-10);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#111111").s().p("AgTAuQgJgDgIgHQgHgHgFgJQgDgKAAgKQAAgKADgJQAEgJAIgHQAHgGAKgEQAKgEALAAQAMAAAJAEQAJAEAHAGQAHAGADAJQAEAJgBAKIAAAEIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKAKgLAGQgMAEgNAAQgLAAgLgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHADg");
	this.shape_233.setTransform(-210.6,-10);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_234.setTransform(-223.4,-9.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#111111").s().p("AAqBOIAAhLIgBAAQgDAGgFADQgFAEgGACQgFACgGABIgLABQgMAAgKgEQgLgDgHgHQgIgHgDgIQgFgKAAgKQAAgLAFgJQADgJAIgHQAHgGALgEQAKgEAMAAIALABIALADIALAFQAFAEADAFIABAAIAAgPIAPAAIAACYgAgQg+QgHADgGAFQgFAFgCAHQgEAHAAAIQAAAIAEAHQACAGAFAGQAGAEAHADQAIADAIAAQAJAAAIgDQAIgDAFgEQAHgGACgGQADgHAAgIQAAgIgDgHQgCgHgHgFQgFgFgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_235.setTransform(-236.9,-7.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#111111").s().p("AgWAwQgGgCgGgDQgFgDgDgGQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQABgYgcAAQgSAAgOAMIgJgKQAPgOAdAAQAIAAAHACQAIACAFAEQAFAEADAGQAEAHAAAIIAAAqIAAALIABAKIgPAAIgBgHIAAgIIAAAAQgHAKgJAEQgIAEgNAAQgHAAgHgCgAAHABQgIAAgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDACgGQABgFAAgHIAAgHIgIAAIgNABg");
	this.shape_236.setTransform(-256.1,-10);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#111111").s().p("AgWBKQgKgDgIgHQgHgHgEgJQgFgJAAgLQAAgLAFgJQAEgIAHgHQAIgGAKgEQAKgEAMAAIALABIALADIALAGQAFADADAFIABAAIAAhKIAPAAIAACZIgPAAIAAgQIgBAAQgDAFgFADQgFAEgGACQgFACgGABIgLABQgMAAgKgEgAgQgGQgHADgGAEQgFAFgDAHQgDAHAAAIQAAAIADAHQADAHAFAFQAGAFAHADQAIADAIAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQACgHAAgIQAAgIgCgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_237.setTransform(-269.1,-12.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIAAgQIAOAAIAAARIABAAQACgEADgDIAHgHIAJgEQAFgCAHAAIALABIgDANIgJgBQgIAAgGADQgFADgFAFQgDAFgCAFQgCAFgBAFIAAA1g");
	this.shape_238.setTransform(-278.5,-10.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#111111").s().p("AgSAuQgKgDgIgHQgHgHgFgJQgDgKAAgKQAAgKADgJQAFgJAHgHQAIgGAJgEQAKgEALAAQAMAAAJAEQAKAEAGAGQAGAGAEAJQAEAJAAAKIAAAEIhYAAQAAAIADAGQAEAHAEAEQAGAFAHACQAGADAHAAQANAAAIgFQAKgFAEgHIALAJQgJAKgLAGQgMAEgOAAQgKAAgKgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHADg");
	this.shape_239.setTransform(-289.6,-10);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_240.setTransform(-302.4,-9.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_241.setTransform(-313.8,-10.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgEgKgBgKQABgKAEgJQADgJAIgHQAHgGAKgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAHAGADAJQADAJAAAKIAAAEIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAHADAHAAQAMAAAJgFQAJgFAEgHIAMAJQgKAKgMAGQgLAEgNAAQgLAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHADg");
	this.shape_242.setTransform(-326,-10);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#111111").s().p("AAiBIIgrhDIgcAAIAABDIgQAAIAAiPIAyAAQAXAAAOAKQAPAJAAAUQAAAOgKALQgLAJgVABIAvBFgAglgHIAeAAQAKAAAHgDQAIgBAEgEQAFgDACgFQACgFAAgEQAAgFgCgFQgCgFgFgDQgEgEgIgCQgHgBgKgBIgeAAg");
	this.shape_243.setTransform(-338.3,-12.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#111111").s().p("AgIAIQgDgDAAgFQAAgDADgDQADgEAFAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgFAAgDgDg");
	this.shape_244.setTransform(260.4,-30.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgDIgOgDIgHgBQgFgCgFgCQgEgDgDgEQgDgEAAgIQAAgHADgFQADgGAGgDQAFgEAHgCIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEABgDACQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAFgFAEQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_245.setTransform(252.4,-34.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#111111").s().p("AgSAuQgKgDgIgHQgHgHgEgJQgFgJAAgLQAAgKAFgJQAEgJAHgHQAIgGAJgEQAKgEAKAAQAMAAAKAEQAJAEAHAGQAGAHAEAIQADAJABAJIAAAFIhYAAQAAAIADAGQAEAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIALAJQgJAKgMAGQgLAEgOAAQgKAAgKgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_246.setTransform(241.2,-34.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_247.setTransform(231,-35.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_248.setTransform(220.7,-34.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#111111").s().p("AgWAwQgGgCgFgDQgGgEgCgFQgDgFgBgHQAAgMAHgGQAHgGAKgDQAKgEALAAIAVgBIAIAAIAAgDQAAgYgcAAQgRAAgPAMIgJgKQAQgOAdAAQAHAAAIACQAGACAGAEQAFAEADAGQADAHAAAJIAAApIABAMIACAJIgPAAIgBgHIAAgIIgBAAQgGAJgKAFQgJAEgMAAQgHAAgHgCgAAGABQgHAAgIACQgIACgFAEQgGAEAAAHQAAAFACAEQACADAEACIAIADIAJABQAHAAAHgCQAFgDAFgEQADgEACgGQADgGAAgGIAAgHIgIAAIgPABg");
	this.shape_249.setTransform(208.4,-34.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#111111").s().p("AgHAvIgsheIATAAIAhBPIAihPIARAAIgrBeg");
	this.shape_250.setTransform(197.2,-34.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#111111").s().p("AgSAuQgKgDgIgHQgHgHgEgJQgFgJAAgLQAAgKAFgJQAEgJAHgHQAIgGAJgEQAKgEAKAAQAMAAAKAEQAJAEAHAGQAGAHAEAIQADAJABAJIAAAFIhYAAQAAAIADAGQAEAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIALAJQgJAKgMAGQgLAEgOAAQgKAAgKgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_251.setTransform(185.4,-34.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#111111").s().p("AgGBNIAAiZIANAAIAACZg");
	this.shape_252.setTransform(176.3,-37.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgEgJgBgLQABgKAEgJQADgJAIgHQAHgGAKgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAHAHADAIQADAJAAAJIAAAFIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAHADAHAAQAMAAAJgFQAJgFAEgHIAMAJQgKAKgMAGQgLAEgNAAQgLAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_253.setTransform(167.2,-34.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAQAAIAAARIAAAAQACgEACgDIAHgHIAJgEQAGgCAIAAIAKABIgCANIgJgBQgJAAgGADQgFADgEAFQgEAFgDAFQgCAFAAAFIAAA1g");
	this.shape_254.setTransform(158.1,-34.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgDIgOgDIgHgBQgFgCgFgCQgEgDgDgEQgDgEAAgIQAAgHADgFQADgGAGgDQAFgEAHgCIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEABgDACQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAFgFAEQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_255.setTransform(142.1,-34.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#111111").s().p("AgWBIQgGgCgFgEQgGgDgCgGQgDgFAAgHQgBgLAHgHQAHgHAKgDQAKgDALgBIAVgBIAIAAIAAgCQgBgYgbAAQgRAAgPAMIgJgKQAQgOAcAAQAIAAAIACQAGACAGAEQAFAEADAHQADAGAAAIIAAAqIABAMIACAKIgQAAIAAgIIAAgIIgBAAQgGAKgKAEQgJAEgMAAQgHAAgHgBgAAGAYQgHAAgIACQgIACgGAEQgFAEAAAIQAAAEACAEQACADAEACIAIADIAJABQAHAAAHgCQAGgDAEgEQADgEADgGQACgFAAgHIAAgHIgIAAIgPABgAgKgrIAWgdIAUAAIgdAdg");
	this.shape_256.setTransform(131.1,-36.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#111111").s().p("ABBAxIAAg3QAAgOgGgIQgFgIgQAAQgIAAgGADQgFADgEAFQgDAFgCAGQgCAGAAAHIAAAyIgOAAIAAg3QAAgOgGgIQgFgIgQAAIgGABQgFABgGAEQgEADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgLIAAgKIAQAAIAAAOIABAAQAFgIAJgFQAKgEAKAAIAJABIAKADQAEACAEAEQADAEADAGQAEgJAKgGQALgFAKAAQAUAAALAKQAJAJAAASIAAA8g");
	this.shape_257.setTransform(115.5,-34.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgDIgOgDIgHgBQgFgCgFgCQgEgDgDgEQgDgEAAgIQAAgHADgFQADgGAGgDQAFgEAHgCIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEABgDACQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAFgFAEQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_258.setTransform(94.8,-34.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_259.setTransform(83.1,-34.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#111111").s().p("AgGBNIAAiZIAOAAIAACZg");
	this.shape_260.setTransform(73.7,-37.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgFgJAAgLQAAgKAFgJQADgJAIgHQAIgGAJgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAGAHAEAIQADAJABAJIAAAFIhZAAQABAIAEAGQADAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIAMAJQgKAKgMAGQgLAEgOAAQgKAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_261.setTransform(58.2,-34.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgIgHgEgJQgEgJAAgLQAAgLAEgJQAEgIAIgHQAHgGALgEQALgEALAAIALABIALADIALAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgGACQgFACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgCAHQgDAHgBAIQABAIADAHQACAHAGAFQAFAFAHADQAIADAIAAQAJAAAIgDQAIgDAFgFQAHgFACgHQAEgHAAgIQAAgIgEgHQgCgHgHgFQgFgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_262.setTransform(44.5,-37.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_263.setTransform(24.8,-34.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgDIgOgDIgHgBQgFgCgFgCQgEgDgDgEQgDgEAAgIQAAgHADgFQADgGAGgDQAFgEAHgCIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEABgDACQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAFgFAEQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_264.setTransform(13.2,-34.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#111111").s().p("AgVAwQgHgCgFgDQgGgEgCgFQgEgFAAgHQAAgMAHgGQAHgGAKgDQAKgEALAAIAVgBIAIAAIAAgDQAAgYgcAAQgRAAgOAMIgKgKQAPgOAeAAQAHAAAIACQAGACAGAEQAFAEAEAGQACAHAAAJIAAApIABAMIABAJIgOAAIgBgHIAAgIIgBAAQgGAJgJAFQgKAEgMAAQgHAAgGgCgAAGABQgHAAgIACQgIACgFAEQgGAEAAAHQAAAFACAEQACADAEACIAIADIAJABQAHAAAHgCQAFgDAFgEQADgEACgGQACgGABgGIAAgHIgIAAIgPABg");
	this.shape_265.setTransform(2.2,-34.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#111111").s().p("Ag4BOIAAiZIAPAAIAAAQIABAAQADgFAFgEIALgFIALgDIAKgBQANAAAKAEQALAEAHAGQAIAHADAJQAFAJAAALQAAALgFAJQgDAIgIAHQgHAHgLADQgKAEgNAAIgKgBQgGgBgFgCQgGgCgFgEQgFgEgDgFIgBAAIAABLgAgQg+QgIADgFAFQgHAFgCAHQgDAHAAAIQAAAIADAHQACAGAHAGQAFAEAIADQAHADAJAAQAJAAAIgDQAHgDAGgEQAFgGACgGQAEgHAAgIQAAgIgEgHQgCgHgFgFQgGgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_266.setTransform(-10.1,-31.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#111111").s().p("AgSAuQgLgDgHgHQgHgHgEgJQgFgJAAgLQAAgKAFgJQAEgJAHgHQAIgGAJgEQAKgEAKAAQAMAAAKAEQAJAEAHAGQAGAHAEAIQADAJABAJIAAAFIhZAAQABAIADAGQAEAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIALAJQgJAKgMAGQgLAEgOAAQgKAAgKgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_267.setTransform(-23.8,-34.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIgBgQIAPAAIAAARIABAAQABgEAEgDIAGgHIAKgEQAFgCAHAAIALABIgCANIgJgBQgJAAgGADQgFADgFAFQgDAFgDAFQgCAFAAAFIAAA1g");
	this.shape_268.setTransform(-33,-34.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#111111").s().p("AgTAuQgJgDgIgHQgHgHgFgJQgDgJAAgLQAAgKADgJQAEgJAIgHQAHgGAKgEQAKgEALAAQAMAAAJAEQAJAEAHAGQAHAHADAIQAEAJgBAJIAAAFIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKAKgLAGQgMAEgNAAQgLAAgLgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgQAAQgHAAgHADg");
	this.shape_269.setTransform(-50.4,-34.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#111111").s().p("AgHAvIgsheIASAAIAiBPIAihPIARAAIgrBeg");
	this.shape_270.setTransform(-62.2,-34.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgEgJQgFgJAAgLQAAgKAFgJQADgJAIgHQAIgGAJgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAGAHAEAIQADAJAAAJIAAAFIhYAAQABAIAEAGQADAHAEAEQAGAFAHACQAHADAGAAQANAAAJgFQAIgFAFgHIAMAJQgKAKgMAGQgLAEgOAAQgKAAgLgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_271.setTransform(-74.1,-34.4);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAQAAIAAARIAAAAQABgEADgDIAHgHIAJgEQAGgCAIAAIALABIgDANIgJgBQgJAAgGADQgFADgEAFQgFAFgCAFQgBAFAAAFIAAA1g");
	this.shape_272.setTransform(-83.2,-34.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#111111").s().p("AgKBNQgGgBgFgCQgGgCgFgEQgFgDgDgFIgBAAIAAAQIgPAAIAAiZIAPAAIAABKIABAAQADgFAFgDIALgGIALgDIAKgBQANAAAKAEQALAEAHAGQAIAHADAIQAFAJAAALQAAALgFAJQgDAJgIAHQgHAHgLADQgKAEgNAAIgKgBgAgQgGQgIADgGAEQgFAFgEAHQgCAHAAAIQAAAIACAHQAEAHAFAFQAGAFAIADQAIADAIAAQAKAAAHgDQAHgDAGgFQAFgFADgHQADgHAAgIQAAgIgDgHQgDgHgFgFQgGgEgHgDQgHgDgKAAQgIAAgIADg");
	this.shape_273.setTransform(-94.6,-37.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_274.setTransform(-114.8,-34.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_275.setTransform(-127.4,-34.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgDIgOgDIgHgBQgFgCgFgCQgEgDgDgEQgDgEAAgIQAAgHADgFQADgGAGgDQAFgEAHgCIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEABgDACQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAFgFAEQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_276.setTransform(-144.8,-34.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_277.setTransform(-156.5,-34.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#111111").s().p("ABBAxIAAg3QAAgOgFgIQgGgIgQAAQgIAAgGADQgGADgDAFQgEAFgCAGQgBAGAAAHIAAAyIgOAAIAAg3QAAgOgFgIQgHgIgPAAIgGABQgFABgGAEQgFADgEAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgLIAAgKIAQAAIAAAOIAAAAQAGgIAKgFQAJgEAKAAIAJABIAKADQAEACAEAEQADAEADAGQAEgJAKgGQAKgFALAAQAVAAAKAKQAJAJAAASIAAA8g");
	this.shape_278.setTransform(-173.2,-34.6);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#111111").s().p("AgTAuQgKgDgHgHQgHgHgFgJQgDgJAAgLQAAgKADgJQAEgJAIgHQAHgGAKgEQAKgEALAAQALAAAKAEQAKAEAGAGQAHAHADAIQAEAJgBAJIAAAFIhYAAQABAIAEAGQACAHAGAEQAFAFAHACQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKAKgMAGQgLAEgNAAQgLAAgLgEgAgMgiQgGACgGAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgQAAQgHAAgHADg");
	this.shape_279.setTransform(-189.1,-34.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAPAAIAAARIABAAQABgEAEgDIAGgHIAJgEQAGgCAIAAIAKABIgCANIgJgBQgJAAgGADQgFADgFAFQgEAFgCAFQgCAFAAAFIAAA1g");
	this.shape_280.setTransform(-198.2,-34.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgEgEgFQgDgFAAgHQABgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgDQABgYgcAAQgSAAgNAMIgKgKQAPgOAeAAQAHAAAHACQAIACAFAEQAFAEAEAGQADAHAAAJIAAApIAAAMIABAJIgPAAIgBgHIAAgIIAAAAQgHAJgIAFQgJAEgNAAQgHAAgGgCgAAHABQgIAAgIACQgIACgGAEQgFAEAAAHQAAAFACAEQACADAEACIAIADIAJABQAIAAAFgCQAHgDADgEQAFgEABgGQACgGAAgGIAAgHIgIAAIgNABg");
	this.shape_281.setTransform(-209.2,-34.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#111111").s().p("AAfBNIAAg0QAAgRgGgIQgHgHgQgBIgGABQgFABgGAEQgGACgEAIQgFAHAAANIAAAxIgPAAIAAiZIAPAAIAABKIABAAQACgEAEgDQAEgEAFgCIAKgDIAKgBQAUAAAKAJQAKAJAAASIAAA8g");
	this.shape_282.setTransform(-221.3,-37.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#111111").s().p("AgQAYIAPgvIASAAIgSAvg");
	this.shape_283.setTransform(-237,-29.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#111111").s().p("AgWAuQgLgEgHgLIANgIQAEAHAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgDIgOgDIgHgBQgFgCgFgCQgEgDgDgEQgDgEAAgIQAAgHADgFQADgGAGgDQAFgEAHgCIAOgBQALAAAKAEQAKADAFAKIgOAIQgDgGgGgDQgGgEgIAAIgHABQgEABgDACQgDABgCADQgCACAAAEQAAAHAFADQAFADAKADIAPACQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAFgFAEQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_284.setTransform(-245,-34.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_285.setTransform(-256.7,-34.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_286.setTransform(-267.2,-35.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#111111").s().p("Ag4BOIAAiZIAPAAIAAAQIAAAAQAEgFAFgEIALgFIALgDIAKgBQAMAAALAEQALAEAHAGQAIAHAEAJQAEAJAAALQAAALgEAJQgEAIgIAHQgHAHgLADQgLAEgMAAIgKgBQgGgBgFgCQgGgCgFgEQgFgEgEgFIAAAAIAABLgAgQg+QgIADgFAFQgHAFgCAHQgEAHAAAIQAAAIAEAHQACAGAHAGQAFAEAIADQAHADAJAAQAJAAAIgDQAHgDAFgEQAGgGACgGQADgHABgIQgBgIgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_287.setTransform(-277.6,-31.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#111111").s().p("AgSAuQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAHgGAKgEQAKgEAKAAQAMAAAKAEQAKAEAGAGQAHAHADAIQAEAJAAAJIAAAFIhYAAQAAAIADAGQADAHAFAEQAGAFAHACQAHADAGAAQANAAAIgFQAKgFAEgHIALAJQgJAKgLAGQgMAEgOAAQgKAAgKgEgAgMgiQgHACgFAFQgFAEgDAFQgDAGAAAGIBHAAQAAgOgJgJQgJgIgRAAQgGAAgHADg");
	this.shape_288.setTransform(-291.3,-34.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_289.setTransform(-302.8,-34.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_290.setTransform(-315.2,-34.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#111111").s().p("AgWAuQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAGAFAGQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgGACgGQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_291.setTransform(-328.1,-34.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_292.setTransform(-340,-34.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#111111").s().p("AgWAuQgLgFgHgJIANgIQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgDgIgBIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgFAAgGQAAgIADgGQADgFAGgDQAFgDAHgCIAOgCQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCACAAAEQAAAHAFADQAFADAKACIAPADQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAGgFADQgGAEgIABQgHACgIAAQgMAAgKgEg");
	this.shape_293.setTransform(252.7,-58.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgHAKgDQAKgEAMAAQAMAAALAEQAKADAIAHQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAEQAGAGAHADQAHADAJAAQAJAAAIgDQAHgDAFgGQAGgEACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_294.setTransform(241,-58.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#111111").s().p("AgGBNIAAiZIAOAAIAACZg");
	this.shape_295.setTransform(231.5,-61.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#111111").s().p("AgWAuQgLgFgHgJIANgIQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgDgIgBIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgFAAgGQAAgIADgGQADgFAGgDQAFgDAHgCIAOgCQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCACAAAEQAAAHAFADQAFADAKACIAPADQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAGgFADQgGAEgIABQgHACgIAAQgMAAgKgEg");
	this.shape_296.setTransform(217.6,-58.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgHAKgDQAKgEAMAAQAMAAALAEQAKADAIAHQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAEQAGAGAHADQAHADAJAAQAJAAAIgDQAHgDAFgGQAGgEACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_297.setTransform(206,-58.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#111111").s().p("AgWBKQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAIgGAKgEQALgEALAAIALABIAMADIAKAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgFACQgGACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgDAHQgCAHAAAIQAAAIACAHQADAHAGAFQAFAFAHADQAHADAJAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQADgHAAgIQAAgIgDgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_298.setTransform(191.9,-61.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgHAKgDQAKgEAMAAQAMAAALAEQAKADAIAHQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAEQAGAGAHADQAHADAJAAQAJAAAIgDQAHgDAFgGQAGgEACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_299.setTransform(178.5,-58.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_300.setTransform(167.9,-60.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#111111").s().p("AgWAuQgLgFgHgJIANgIQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgDgIgBIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgFAAgGQAAgIADgGQADgFAGgDQAFgDAHgCIAOgCQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCACAAAEQAAAHAFADQAFADAKACIAPADQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAGgFADQgGAEgIABQgHACgIAAQgMAAgKgEg");
	this.shape_301.setTransform(153,-58.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#111111").s().p("AgTAuQgJgEgIgGQgHgHgFgJQgDgKAAgKQAAgKADgJQAEgJAIgHQAHgHAKgDQAKgEALAAQAMAAAJAEQAJADAHAHQAHAHADAIQAEAJgBAKIAAAEIhYAAQABAIAEAGQACAGAGAFQAFAEAHADQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKALgLAEQgMAFgNAAQgLAAgLgEgAgMgjQgGADgGAFQgFADgDAGQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHACg");
	this.shape_302.setTransform(141.8,-58.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_303.setTransform(130.3,-58.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#111111").s().p("AgGBHIAAheIAOAAIAABegAgGg1QgEgDAAgEQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgDgDg");
	this.shape_304.setTransform(121.7,-61.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAQAAIAAARIAAAAQABgEADgDIAHgHIAJgEQAGgCAIAAIALABIgDANIgJgBQgJAAgGADQgFADgEAFQgFAFgCAFQgBAFAAAFIAAA1g");
	this.shape_305.setTransform(116.1,-59);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgHAKgDQAKgEAMAAQAMAAALAEQAKADAIAHQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAEQAGAGAHADQAHADAJAAQAJAAAIgDQAHgDAFgGQAGgEACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_306.setTransform(104.6,-58.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#111111").s().p("AgHBHIAAheIAOAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgEgDg");
	this.shape_307.setTransform(95.1,-61.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIAAgQIAOAAIAAARIABAAQACgEADgDIAHgHIAJgEQAFgCAHAAIALABIgCANIgKgBQgIAAgGADQgFADgFAFQgDAFgCAFQgDAFAAAFIAAA1g");
	this.shape_308.setTransform(89.5,-59);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#111111").s().p("AgTAuQgJgEgIgGQgHgHgFgJQgDgKAAgKQAAgKADgJQAFgJAHgHQAIgHAJgDQAKgEALAAQAMAAAJAEQAJADAHAHQAGAHAEAIQADAJAAAKIAAAEIhXAAQAAAIAEAGQADAGAFAFQAFAEAHADQAGADAIAAQAMAAAIgFQAKgFAEgHIALAJQgJALgLAEQgMAFgNAAQgLAAgLgEgAgMgjQgGADgGAFQgFADgDAGQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHACg");
	this.shape_309.setTransform(78.4,-58.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_310.setTransform(68.3,-60.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_311.setTransform(58,-59);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_312.setTransform(49.1,-61.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#111111").s().p("AgTAuQgKgEgHgGQgHgHgFgJQgDgKAAgKQAAgKADgJQAEgJAIgHQAHgHAKgDQAKgEALAAQALAAAKAEQAKADAGAHQAHAHADAIQAEAJgBAKIAAAEIhYAAQABAIAEAGQACAGAGAFQAFAEAHADQAGADAIAAQAMAAAJgFQAJgFAEgHIAMAJQgKALgMAEQgLAFgNAAQgLAAgLgEgAgMgjQgGADgGAFQgFADgDAGQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHACg");
	this.shape_313.setTransform(33.7,-58.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADQgFACgFAAQgVAAgJgKg");
	this.shape_314.setTransform(20.9,-58.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#111111").s().p("AAqBOIAAhKIAAAAQgEAFgFADQgFADgFACQgGADgGABIgLABQgLAAgLgEQgKgEgIgGQgHgHgFgIQgEgKAAgKQAAgLAEgJQAFgJAHgHQAIgHAKgDQALgEALAAIALABIAMADIAKAGQAFADAEAFIAAAAIAAgPIAPAAIAACYgAgQg+QgHADgFAFQgGAFgCAHQgDAHAAAIQAAAIADAHQACAHAGAEQAFAFAHADQAHADAJAAQAJAAAIgDQAIgDAFgFQAHgEACgHQAEgHAAgIQAAgIgEgHQgCgHgHgFQgFgFgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_315.setTransform(7.3,-56.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#111111").s().p("AgTAuQgKgEgHgGQgHgHgEgJQgFgKAAgKQAAgKAFgJQADgJAIgHQAIgHAJgDQAKgEAKAAQANAAAJAEQAKADAGAHQAGAHAEAIQADAJAAAKIAAAEIhYAAQABAIAEAGQADAGAEAFQAGAEAHADQAHADAGAAQANAAAJgFQAIgFAFgHIAMAJQgKALgMAEQgLAFgOAAQgKAAgLgEgAgMgjQgHADgFAFQgFADgDAGQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHACg");
	this.shape_316.setTransform(-12,-58.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgIgHgEgJQgEgJAAgLQAAgLAEgJQAEgIAIgHQAHgGALgEQALgEALAAIALABIALADIALAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgGACQgFACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgCAHQgDAHgBAIQABAIADAHQACAHAGAFQAFAFAHADQAIADAIAAQAJAAAIgDQAIgDAFgFQAHgFACgHQAEgHAAgIQAAgIgEgHQgCgHgHgFQgFgEgIgDQgIgDgJAAQgIAAgIADg");
	this.shape_317.setTransform(-25.7,-61.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#111111").s().p("AgWAuQgLgFgHgJIANgIQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgDgIgBIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgFAAgGQAAgIADgGQADgFAGgDQAFgDAHgCIAOgCQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCACAAAEQAAAHAFADQAFADAKACIAPADQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAGgFADQgGAEgIABQgHACgIAAQgMAAgKgEg");
	this.shape_318.setTransform(-43.5,-58.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgHAKgDQAKgEAMAAQAMAAALAEQAKADAIAHQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAEQAGAGAHADQAHADAJAAQAJAAAIgDQAHgDAFgGQAGgEACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_319.setTransform(-55.1,-58.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_320.setTransform(-68.4,-59);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAQAAIAAARIAAAAQABgEADgDIAHgHIAJgEQAGgCAIAAIALABIgDANIgJgBQgJAAgGADQgFADgEAFQgFAFgCAFQgBAFAAAFIAAA1g");
	this.shape_321.setTransform(-77.4,-59);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#111111").s().p("AgWAwQgGgBgGgEQgEgDgEgGQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgCQAAgZgbAAQgSAAgOALIgJgKQAPgNAdAAQAIAAAHACQAHACAGAEQAFAEADAHQAEAGAAAIIAAAqIAAALIACAKIgQAAIgBgHIAAgIIAAAAQgHAJgJAFQgIAEgNAAQgHAAgHgCgAAHAAQgIABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgDQAGgCAEgFQAEgEADgFQABgGAAgGIAAgHIgIAAIgNAAg");
	this.shape_322.setTransform(-88.3,-58.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIAAgQIAOAAIAAARIABAAQACgEADgDIAHgHIAJgEQAFgCAHAAIALABIgDANIgJgBQgIAAgGADQgFADgFAFQgDAFgCAFQgDAFAAAFIAAA1g");
	this.shape_323.setTransform(-96.8,-59);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADQgFACgFAAQgVAAgJgKg");
	this.shape_324.setTransform(-108,-58.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#111111").s().p("AgdBEQgNgEgKgKIALgLQAHAIAKAFQALAFANAAQAKAAAIgDQAJgDAEgFQAFgFACgHQACgHAAgIIAAgRIAAAAQgIAKgKAEQgKAEgMAAQgKAAgKgDQgLgEgHgGQgIgHgEgIQgFgJABgKQAAgLADgJQAFgIAHgHQAHgHAKgEQAKgDAMAAIAJAAIAKADIALAGQAGADAEAGIAAAAIAAgQIAPAAIAABdQAAAIgBAJQgDAJgGAHQgGAHgMAFQgLAFgQAAQgQAAgNgFgAgOg5QgHADgFAFQgGAFgDAGQgDAHAAAHQAAAIADAHQADAGAGAEQAFAFAHADQAHADAHAAQAJAAAHgDQAIgCAFgFQAGgEADgHQADgGAAgJQAAgHgDgHQgCgGgGgFQgFgFgHgDQgIgDgKAAQgHAAgHADg");
	this.shape_325.setTransform(-121.5,-56.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#111111").s().p("AgTAuQgJgEgIgGQgHgHgFgJQgDgKAAgKQAAgKADgJQAEgJAIgHQAHgHAKgDQAKgEALAAQAMAAAJAEQAJADAHAHQAHAHADAIQAEAJgBAKIAAAEIhYAAQABAIAEAGQACAGAGAFQAFAEAHADQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKALgLAEQgMAFgNAAQgLAAgLgEgAgMgjQgGADgGAFQgFADgDAGQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHACg");
	this.shape_326.setTransform(-134.5,-58.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#111111").s().p("AgWAuQgLgFgHgJIANgIQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgDgIgBIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgFAAgGQAAgIADgGQADgFAGgDQAFgDAHgCIAOgCQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCACAAAEQAAAHAFADQAFADAKACIAPADQAMADAHAFQAHAIAAAJQAAAJgDAFQgEAGgFADQgGAEgIABQgHACgIAAQgMAAgKgEg");
	this.shape_327.setTransform(-145.7,-58.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#111111").s().p("AgVAwQgHgBgGgEQgEgDgDgGQgEgFAAgHQABgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgCQAAgZgbAAQgRAAgOALIgKgKQAQgNAdAAQAHAAAHACQAIACAFAEQAFAEAEAHQACAGAAAIIAAAqIABALIABAKIgOAAIgBgHIAAgIIgBAAQgHAJgIAFQgKAEgMAAQgHAAgGgCgAAGAAQgHABgIACQgIACgFAEQgGAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgDQAGgCAFgFQADgEACgFQACgGAAgGIAAgHIgHAAIgPAAg");
	this.shape_328.setTransform(-156.8,-58.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#111111").s().p("AgVAwQgHgBgGgEQgEgDgEgGQgDgFAAgHQABgMAGgGQAHgGAKgDQAKgEALAAIAVgBIAHAAIAAgCQABgZgcAAQgSAAgNALIgKgKQAPgNAeAAQAHAAAHACQAIACAFAEQAFAEAEAHQADAGAAAIIAAAqIAAALIABAKIgPAAIgBgHIAAgIIAAAAQgHAJgIAFQgJAEgNAAQgHAAgGgCgAAHAAQgIABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgDQAHgCADgFQAFgEABgFQACgGAAgGIAAgHIgIAAIgNAAg");
	this.shape_329.setTransform(-175,-58.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIAAgQIAOAAIAAARIABAAQACgEACgDIAIgHIAJgEQAFgCAHAAIAMABIgEANIgJgBQgIAAgGADQgFADgFAFQgEAFgBAFQgCAFAAAFIAAA1g");
	this.shape_330.setTransform(-183.4,-59);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#111111").s().p("AgWAwQgGgBgFgEQgGgDgCgGQgDgFgBgHQAAgMAHgGQAHgGAKgDQAKgEALAAIAVgBIAIAAIAAgCQAAgZgcAAQgRAAgPALIgJgKQAQgNAcAAQAIAAAIACQAGACAGAEQAFAEADAHQADAGAAAIIAAAqIABALIACAKIgPAAIgBgHIAAgIIgBAAQgGAJgKAFQgJAEgMAAQgHAAgHgCgAAGAAQgHABgIACQgIACgFAEQgGAEAAAHQAAAFACADQACADAEADIAIADIAJABQAHAAAHgDQAFgCAFgFQADgEACgFQADgGAAgGIAAgHIgIAAIgPAAg");
	this.shape_331.setTransform(-194.4,-58.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#111111").s().p("AgxBIIAAiPIAvAAQAYAAAOAKQAOAJAAATQAAAUgOAJQgOAJgYAAIgfAAIAABDgAghgHIAbAAQAKAAAHgCQAIgCAFgEQAEgDADgFQACgFAAgFQAAgFgCgFQgDgEgEgEQgFgDgIgCQgHgCgKAAIgbAAg");
	this.shape_332.setTransform(-205.9,-61.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#111111").s().p("AgIAIQgDgDAAgEQAAgEADgDQADgEAFAAQAFAAAEAEQADADAAAEQAAAEgDADQgEADgFAAQgFAAgDgDg");
	this.shape_333.setTransform(-222.7,-55.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#111111").s().p("AgWAwQgGgBgFgEQgFgDgEgGQgCgFAAgHQgBgMAHgGQAHgGAKgDQAKgEALAAIAVgBIAIAAIAAgCQgBgZgbAAQgSAAgOALIgJgKQAQgNAcAAQAIAAAIACQAGACAGAEQAFAEADAHQADAGABAIIAAAqIAAALIACAKIgQAAIgBgHIAAgIIAAAAQgGAJgKAFQgIAEgNAAQgHAAgHgCgAAGAAQgHABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAHAAAHgDQAFgCAEgFQAFgEACgFQACgGAAgGIAAgHIgJAAIgOAAg");
	this.shape_334.setTransform(-232,-58.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#111111").s().p("AgGBHIAAheIANAAIAABegAgGg1QgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_335.setTransform(-240.4,-61.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_336.setTransform(-248.3,-58.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_337.setTransform(-260.7,-59);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#111111").s().p("AgSAuQgKgEgIgGQgHgHgEgJQgFgKAAgKQAAgKAFgJQAEgJAHgHQAIgHAJgDQAKgEAKAAQAMAAAKAEQAJADAHAHQAGAHAEAIQADAJABAKIAAAEIhYAAQAAAIADAGQAEAGAEAFQAGAEAHADQAHADAGAAQANAAAJgFQAIgFAFgHIALAJQgJALgMAEQgLAFgOAAQgKAAgKgEgAgMgjQgGADgGAFQgFADgDAGQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHACg");
	this.shape_338.setTransform(-273.2,-58.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#111111").s().p("AgdBEQgNgEgKgKIALgLQAHAIALAFQAKAFANAAQALAAAHgDQAIgDAGgFQAEgFADgHQACgHAAgIIAAgRIgBAAQgHAKgKAEQgLAEgMAAQgKAAgKgDQgLgEgHgGQgIgHgEgIQgEgJgBgKQAAgLAFgJQAEgIAHgHQAHgHAKgEQAKgDALAAIAKAAIAKADIAMAGQAEADAFAGIABAAIAAgQIAOAAIAABdQAAAIgCAJQgCAJgGAHQgGAHgMAFQgKAFgSAAQgQAAgMgFgAgOg5QgHADgGAFQgFAFgDAGQgDAHAAAHQAAAIADAHQADAGAFAEQAGAFAHADQAHADAHAAQAJAAAHgDQAHgCAHgFQAFgEADgHQADgGAAgJQAAgHgCgHQgEgGgEgFQgGgFgIgDQgHgDgKAAQgHAAgHADg");
	this.shape_339.setTransform(-286.8,-56.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIAAgQIAPAAIAAARIAAAAQABgEADgDIAIgHIAIgEQAGgCAHAAIAMABIgEANIgJgBQgIAAgGADQgFADgEAFQgFAFgBAFQgCAFAAAFIAAA1g");
	this.shape_340.setTransform(-296.3,-59);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#111111").s().p("AgSAuQgKgEgIgGQgHgHgEgJQgFgKAAgKQAAgKAFgJQAEgJAHgHQAIgHAJgDQAKgEAKAAQAMAAAKAEQAJADAHAHQAGAHAEAIQADAJABAKIAAAEIhYAAQAAAIADAGQAEAGAEAFQAGAEAHADQAHADAGAAQANAAAJgFQAIgFAFgHIALAJQgJALgMAEQgLAFgOAAQgKAAgKgEgAgMgjQgGADgGAFQgFADgDAGQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHACg");
	this.shape_341.setTransform(-307.4,-58.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#111111").s().p("ABBAxIAAg3QAAgOgGgIQgFgIgQAAQgIAAgGADQgGADgDAFQgDAFgDAGQgBAGAAAHIAAAyIgOAAIAAg3QAAgOgGgIQgFgIgQAAIgGABQgFABgFAEQgFADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIAAgLIgBgKIAQAAIAAAOIAAAAQAGgIAJgFQALgEAJAAIAJABIAJADQAFACAEAEQADAEADAGQAFgJAKgGQAKgFAKAAQAUAAAKAKQAKAJAAASIAAA8g");
	this.shape_342.setTransform(-323.6,-59);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#111111").s().p("AgSAuQgKgEgIgGQgHgHgFgJQgDgKAAgKQAAgKADgJQAFgJAHgHQAIgHAJgDQAKgEALAAQAMAAAJAEQAJADAHAHQAGAHAEAIQAEAJAAAKIAAAEIhYAAQAAAIADAGQAEAGAEAFQAGAEAHADQAGADAHAAQANAAAIgFQAKgFAEgHIALAJQgJALgLAEQgMAFgOAAQgKAAgKgEgAgMgjQgHADgFAFQgFADgDAGQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHACg");
	this.shape_343.setTransform(-339.5,-58.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_344.setTransform(329.5,-83.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#111111").s().p("AgTAuQgKgEgHgGQgHgHgFgJQgDgKAAgKQAAgKADgJQAEgJAIgHQAHgGAKgEQAKgEALAAQAMAAAJAEQAJAEAHAGQAHAGADAJQAEAJgBAKIAAAEIhYAAQABAIAEAGQACAGAGAFQAFAEAHADQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKALgLAEQgMAFgNAAQgLAAgLgEgAgMgjQgGADgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHACg");
	this.shape_345.setTransform(310.1,-83.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_346.setTransform(299.9,-84.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_347.setTransform(289.6,-83.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#111111").s().p("AgTAuQgKgEgHgGQgHgHgFgJQgDgKAAgKQAAgKADgJQAEgJAIgHQAHgGAKgEQAKgEALAAQALAAAKAEQAKAEAGAGQAHAGADAJQAEAJgBAKIAAAEIhYAAQABAIAEAGQACAGAGAFQAFAEAHADQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKALgMAEQgLAFgNAAQgLAAgLgEgAgMgjQgGADgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHACg");
	this.shape_348.setTransform(277.1,-83.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#111111").s().p("AgWBKQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAIgGAKgEQALgEALAAIALABIAMADIAKAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgFACQgGACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgDAHQgCAHAAAIQAAAIACAHQADAHAGAFQAFAFAHADQAHADAJAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQADgHAAgIQAAgIgDgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_349.setTransform(263.4,-86.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#111111").s().p("AgHBHIAAheIAOAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgEgDg");
	this.shape_350.setTransform(254.1,-85.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_351.setTransform(246.2,-83.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_352.setTransform(235.2,-83.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#111111").s().p("AgWAwQgGgCgGgDQgFgDgDgGQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgDQABgYgcAAQgSAAgOALIgJgJQAPgOAdAAQAIAAAHACQAIACAFAEQAFAEADAGQAEAHAAAIIAAAqIAAALIABAKIgPAAIgBgHIAAgIIAAAAQgHAJgJAFQgIAEgNAAQgHAAgHgCgAAHAAQgIABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDACgGQABgFAAgHIAAgHIgIAAIgNAAg");
	this.shape_353.setTransform(223.2,-83.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_354.setTransform(204.6,-83.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_355.setTransform(192,-83.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#111111").s().p("AgSAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAHgGAKgEQAKgEALAAQALAAAKAEQAKAEAGAGQAHAGADAJQAEAJAAAKIAAAEIhYAAQAAAIADAGQADAGAFAFQAGAEAHADQAHADAGAAQANAAAIgFQAKgFAEgHIALAJQgJALgLAEQgMAFgOAAQgKAAgKgEgAgMgjQgHADgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHACg");
	this.shape_356.setTransform(173.1,-83.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgIgHgDgJQgFgJAAgLQAAgLAFgJQADgIAIgHQAHgGALgEQAKgEAMAAIALABIALADIALAGQAFADADAFIABAAIAAhKIAPAAIAACZIgPAAIAAgQIgBAAQgDAFgFADQgFAEgGACQgFACgGABIgLABQgMAAgKgEgAgQgGQgHADgGAEQgFAFgDAHQgDAHAAAIQAAAIADAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAIgDAFgFQAGgFADgHQADgHAAgIQAAgIgDgHQgDgHgGgFQgFgEgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_357.setTransform(159.4,-86.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_358.setTransform(139.7,-83.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#111111").s().p("AgWAuQgLgFgHgKIANgHQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgFAAgGQAAgIADgGQADgFAGgDQAFgEAHgBQAIgCAGAAQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCADAAADQAAAHAFADQAFADAKACIAPADQAMADAHAFQAHAHAAAKQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_359.setTransform(128.1,-83.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#111111").s().p("AgWAwQgGgCgFgDQgGgDgCgGQgDgFgBgHQAAgMAHgGQAHgGAKgDQAKgDALgBIAVgBIAIAAIAAgDQAAgYgcAAQgRAAgPALIgJgJQAQgOAcAAQAIAAAIACQAGACAGAEQAFAEADAGQADAHAAAIIAAAqIABALIACAKIgPAAIgBgHIAAgIIgBAAQgGAJgKAFQgJAEgMAAQgHAAgHgCgAAGAAQgHABgIACQgIACgFAEQgGAEAAAHQAAAFACADQACADAEADIAIADIAJABQAHAAAHgCQAFgDAFgFQADgDACgGQADgFAAgHIAAgHIgIAAIgPAAg");
	this.shape_360.setTransform(117,-83.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_361.setTransform(106.3,-83.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_362.setTransform(87.5,-83.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#111111").s().p("AgSAuQgKgEgIgGQgHgHgFgJQgDgKgBgKQABgKADgJQAFgJAHgHQAHgGAKgEQAKgEALAAQALAAAKAEQAKAEAGAGQAHAGADAJQAEAJAAAKIAAAEIhYAAQAAAIADAGQADAGAFAFQAGAEAHADQAHADAGAAQANAAAIgFQAKgFAEgHIALAJQgJALgLAEQgMAFgOAAQgKAAgKgEgAgMgjQgHADgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHACg");
	this.shape_363.setTransform(75,-83.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAQAAIAAARIAAAAQACgEACgDIAHgHIAJgEQAGgCAIAAIAKABIgCANIgJgBQgJAAgGADQgFADgEAFQgEAFgDAFQgBAFgBAFIAAA1g");
	this.shape_364.setTransform(59.5,-83.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#111111").s().p("AgWAwQgGgCgGgDQgFgDgDgGQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgDQABgYgcAAQgSAAgOALIgJgJQAPgOAdAAQAIAAAHACQAIACAFAEQAFAEADAGQAEAHAAAIIAAAqIAAALIABAKIgPAAIgBgHIAAgIIAAAAQgHAJgJAFQgIAEgNAAQgHAAgHgCgAAHAAQgIABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDACgGQABgFAAgHIAAgHIgIAAIgNAAg");
	this.shape_365.setTransform(48.6,-83.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_366.setTransform(36.4,-83.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_367.setTransform(23.4,-83.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#111111").s().p("AgGBHIAAheIANAAIAABegAgGg1QgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_368.setTransform(14,-85.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_369.setTransform(6.1,-83.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_370.setTransform(-4.9,-83.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#111111").s().p("AgWAwQgGgCgFgDQgGgDgCgGQgDgFAAgHQgBgMAHgGQAHgGAKgDQAKgDALgBIAVgBIAIAAIAAgDQgBgYgbAAQgRAAgPALIgJgJQAQgOAcAAQAIAAAIACQAGACAGAEQAFAEADAGQADAHAAAIIAAAqIABALIACAKIgQAAIAAgHIAAgIIgBAAQgGAJgKAFQgJAEgMAAQgHAAgHgCgAAGAAQgHABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAHAAAHgCQAGgDAEgFQADgDADgGQACgFAAgHIAAgHIgIAAIgPAAg");
	this.shape_371.setTransform(-17,-83.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#111111").s().p("AgTAuQgKgEgHgGQgHgHgEgJQgEgKgBgKQABgKAEgJQADgJAIgHQAHgGAKgEQAKgEAKAAQANAAAJAEQAKAEAGAGQAHAGADAJQADAJAAAKIAAAEIhYAAQABAIAEAGQACAGAGAFQAFAEAHADQAHADAHAAQAMAAAJgFQAJgFAEgHIAMAJQgKALgMAEQgLAFgNAAQgLAAgLgEgAgMgjQgHADgFAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgRAAQgGAAgHACg");
	this.shape_372.setTransform(-29,-83.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAQAAIAAARIAAAAQACgEACgDIAHgHIAJgEQAGgCAIAAIAKABIgCANIgJgBQgJAAgGADQgFADgEAFQgEAFgDAFQgCAFAAAFIAAA1g");
	this.shape_373.setTransform(-38.1,-83.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_374.setTransform(-56,-83.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#111111").s().p("ABBAxIAAg3QAAgOgGgIQgFgIgQAAQgIAAgGADQgGADgDAFQgDAFgCAGQgCAGAAAHIAAAyIgOAAIAAg3QAAgOgGgIQgFgIgQAAIgGABQgFABgGAEQgEADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIAAgLIgBgKIAQAAIAAAOIABAAQAFgIAJgFQAKgEAKAAIAJABIAKADQAEACAEAEQADAEADAGQAEgJALgGQAKgFAKAAQAUAAALAKQAJAJAAASIAAA8g");
	this.shape_375.setTransform(-72.7,-83.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#111111").s().p("AgWBFQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAIQAFAJAAALQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgLQgHADgGAFQgFAEgDAHQgCAHAAAIQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgIgDgHQgCgHgGgEQgFgFgHgDQgIgDgJAAQgJAAgHADgAgNgrIAWgdIAVAAIgeAdg");
	this.shape_376.setTransform(-89,-85.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_377.setTransform(-100.9,-83.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_378.setTransform(-119.9,-83.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#111111").s().p("AgWAuQgLgFgHgKIANgHQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgFAAgGQAAgIADgGQADgFAGgDQAFgEAHgBQAIgCAGAAQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCADAAADQAAAHAFADQAFADAKACIAPADQAMADAHAFQAHAHAAAKQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_379.setTransform(-137.8,-83.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#111111").s().p("AgTAuQgKgEgHgGQgHgHgFgJQgDgKAAgKQAAgKADgJQAEgJAIgHQAHgGAKgEQAKgEALAAQALAAAKAEQAKAEAGAGQAHAGADAJQAEAJgBAKIAAAEIhYAAQABAIAEAGQACAGAGAFQAFAEAHADQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKALgMAEQgLAFgNAAQgLAAgLgEgAgMgjQgGADgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHACg");
	this.shape_380.setTransform(-149,-83.3);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#111111").s().p("AgHBNIAAiZIAOAAIAACZg");
	this.shape_381.setTransform(-158.1,-86.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#111111").s().p("AgWAwQgGgCgGgDQgEgDgEgGQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgDQAAgYgbAAQgSAAgOALIgJgJQAPgOAdAAQAIAAAHACQAHACAGAEQAFAEADAGQAEAHAAAIIAAAqIAAALIACAKIgQAAIgBgHIAAgIIAAAAQgHAJgJAFQgIAEgNAAQgHAAgHgCgAAHAAQgIABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAGgDAEgFQAEgDADgGQABgFAAgHIAAgHIgIAAIgNAAg");
	this.shape_382.setTransform(-167.1,-83.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIAAgQIAOAAIAAARIABAAQACgEADgDIAHgHIAJgEQAFgCAHAAIALABIgDANIgJgBQgIAAgGADQgFADgFAFQgDAFgCAFQgDAFAAAFIAAA1g");
	this.shape_383.setTransform(-175.5,-83.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgKAAgKQAAgKAEgJQAFgJAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAJQAFAJAAAKQAAAKgFAKQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_384.setTransform(-187.1,-83.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#111111").s().p("AgKBNQgGgBgFgCQgGgCgFgEQgFgDgDgFIgBAAIAAAQIgPAAIAAiZIAPAAIAABKIABAAQADgFAFgDIALgGIALgDIAKgBQANAAAKAEQALAEAHAGQAIAHADAIQAFAJAAALQAAALgFAJQgDAJgIAHQgHAHgLADQgKAEgNAAIgKgBgAgQgGQgIADgFAEQgHAFgCAHQgDAHAAAIQAAAIADAHQACAHAHAFQAFAFAIADQAHADAJAAQAJAAAIgDQAHgDAGgFQAFgFACgHQAEgHAAgIQAAgIgEgHQgCgHgFgFQgGgEgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_385.setTransform(-200.4,-86.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#111111").s().p("AgWAwQgGgCgFgDQgFgDgEgGQgCgFAAgHQgBgMAHgGQAHgGAKgDQAKgDALgBIAVgBIAIAAIAAgDQgBgYgbAAQgSAAgOALIgJgJQAQgOAcAAQAIAAAIACQAGACAGAEQAFAEADAGQADAHABAIIAAAqIAAALIACAKIgQAAIgBgHIAAgIIAAAAQgGAJgKAFQgIAEgNAAQgHAAgHgCgAAGAAQgHABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAHAAAHgCQAFgDAEgFQAFgDACgGQACgFAAgHIAAgHIgJAAIgOAAg");
	this.shape_386.setTransform(-214,-83.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#111111").s().p("AgHBNIAAiZIAPAAIAACZg");
	this.shape_387.setTransform(-222.3,-86.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#111111").s().p("AgWAuQgLgFgHgKIANgHQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgEQgGgCgIgCIgOgEIgHgCQgFgBgFgCQgEgCgDgFQgDgFAAgGQAAgIADgGQADgFAGgDQAFgEAHgBQAIgCAGAAQALAAAKAEQAKADAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEAAgDACQgDACgCADQgCADAAADQAAAHAFADQAFADAKACIAPADQAMADAHAFQAHAHAAAKQAAAJgDAFQgEAGgFADQgGADgIACQgHACgIAAQgMAAgKgEg");
	this.shape_388.setTransform(-236.3,-83.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#111111").s().p("AgTAuQgJgEgIgGQgHgHgFgJQgDgKAAgKQAAgKADgJQAEgJAIgHQAHgGAKgEQAKgEALAAQAMAAAJAEQAJAEAHAGQAHAGADAJQAEAJgBAKIAAAEIhYAAQABAIAEAGQACAGAGAFQAFAEAHADQAGADAIAAQAMAAAIgFQAKgFAEgHIAMAJQgKALgLAEQgMAFgNAAQgLAAgLgEgAgMgjQgGADgGAFQgFAEgDAFQgDAGAAAFIBHAAQAAgNgJgIQgJgJgQAAQgHAAgHACg");
	this.shape_389.setTransform(-247.5,-83.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAHgGALgEQALgEALAAIALABIAMADIAKAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgFACQgGACgGABIgLABQgLAAgLgEgAgQgGQgHADgGAEQgFAFgDAHQgCAHAAAIQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQACgHAAgIQAAgIgCgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_390.setTransform(-261.2,-86.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#111111").s().p("AgVAwQgHgCgGgDQgEgDgEgGQgDgFAAgHQABgMAGgGQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgDQAAgYgbAAQgSAAgNALIgKgJQAPgOAeAAQAHAAAHACQAIACAFAEQAFAEAEAGQADAHAAAIIAAAqIAAALIABAKIgPAAIgBgHIAAgIIAAAAQgHAJgIAFQgJAEgNAAQgHAAgGgCgAAHAAQgIABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDABgGQACgFAAgHIAAgHIgIAAIgNAAg");
	this.shape_391.setTransform(-274,-83.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#111111").s().p("AgWBKQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAIgGAKgEQALgEALAAIALABIAMADIAKAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgFACQgGACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgDAHQgCAHAAAIQAAAIACAHQADAHAGAFQAFAFAHADQAHADAJAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQADgHAAgIQAAgIgDgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_392.setTransform(-286.9,-86.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#111111").s().p("AgHBHIAAheIAOAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgEgDg");
	this.shape_393.setTransform(-296.3,-85.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#111111").s().p("AgHAvIgshdIATAAIAhBPIAihPIARAAIgrBdg");
	this.shape_394.setTransform(-304.5,-83.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#111111").s().p("AgGBHIAAheIANAAIAABegAgGg1QgEgDAAgEQAAgEAEgDQADgDADAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_395.setTransform(-312.7,-85.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_396.setTransform(-319.3,-84.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_397.setTransform(-328.2,-83.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#111111").s().p("AgWAwQgGgCgGgDQgFgDgDgGQgCgFAAgHQAAgMAGgGQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgDQABgYgcAAQgSAAgOALIgJgJQAPgOAdAAQAIAAAHACQAIACAFAEQAFAEADAGQAEAHAAAIIAAAqIAAALIABAKIgPAAIgBgHIAAgIIAAAAQgHAJgJAFQgIAEgNAAQgHAAgHgCgAAHAAQgIABgIACQgIACgGAEQgFAEAAAHQAAAFACADQACADAEADIAIADIAJABQAIAAAFgCQAHgDADgFQAFgDACgGQABgFAAgHIAAgHIgIAAIgNAAg");
	this.shape_398.setTransform(-340.2,-83.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#111111").s().p("AgWAuQgLgEgHgKIANgIQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgDQgGgEgIgCIgOgCIgHgDQgFgBgFgCQgEgDgDgEQgDgFAAgGQAAgIADgGQADgFAGgDQAFgDAHgCIAOgCQALAAAKADQAKAEAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEABgDABQgDACgCADQgCADAAADQAAAHAFADQAFADAKACIAPAEQAMACAHAGQAHAGAAALQAAAHgDAGQgEAFgFAEQgGAEgIACQgHABgIAAQgMAAgKgEg");
	this.shape_399.setTransform(280.1,-107.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_400.setTransform(268.8,-107.6);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_401.setTransform(258.7,-109);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#111111").s().p("AgSAuQgLgEgHgGQgHgHgEgJQgFgJAAgLQAAgKAFgJQADgJAIgHQAIgHAJgEQAKgDAKAAQANAAAJADQAKAEAGAHQAGAGAEAJQADAIABAKIAAAGIhZAAQABAGAEAHQADAHAEAEQAGAEAHADQAHADAGAAQANAAAJgFQAIgFAFgGIAMAIQgKALgMAEQgLAFgOAAQgKAAgKgEgAgMgjQgHADgFAEQgFAEgDAGQgDAFAAAGIBHAAQAAgNgJgJQgJgIgRAAQgGAAgHACg");
	this.shape_402.setTransform(242.3,-107.7);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_403.setTransform(232.1,-109);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_404.setTransform(221.8,-107.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#111111").s().p("AgWAxQgGgCgFgEQgFgEgEgFQgCgFAAgHQgBgLAHgHQAHgGAKgDQAKgDALgBIAVgBIAIAAIAAgCQgBgZgbAAQgSAAgOALIgJgKQAQgNAcAAQAIAAAIACQAGACAGAEQAFAEADAHQADAGABAIIAAAqIAAALIACALIgQAAIgBgIIAAgIIAAAAQgGAKgKAEQgIAEgNAAQgHAAgHgBgAAGAAQgHABgIACQgIACgGAEQgFAEAAAIQAAAEACADQACADAEADIAIADIAJABQAHAAAHgDQAFgCAFgFQAEgEACgFQACgGAAgGIAAgHIgIAAIgPAAg");
	this.shape_405.setTransform(209.5,-107.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIgBgQIAPAAIAAARIABAAQABgEAEgDIAGgHIAKgEQAFgCAHAAIALABIgCANIgJgBQgJAAgGADQgFADgFAFQgDAFgDAFQgCAFAAAFIAAA1g");
	this.shape_406.setTransform(201,-107.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_407.setTransform(189.8,-107.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#111111").s().p("AgWBKQgLgDgHgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAHgGALgEQALgEALAAIALABIAMADIAKAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgFACQgGACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgDAHQgCAHAAAIQAAAIACAHQADAHAGAFQAFAFAHADQAHADAJAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQACgHAAgIQAAgIgCgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_408.setTransform(176.2,-110.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#111111").s().p("AgSAuQgKgEgIgGQgHgHgFgJQgDgJgBgLQABgKADgJQAFgJAHgHQAHgHAKgEQAKgDALAAQALAAAKADQAKAEAGAHQAHAGADAJQAEAIAAAKIAAAGIhYAAQAAAGADAHQADAHAFAEQAGAEAHADQAHADAGAAQANAAAIgFQAKgFAEgGIALAIQgJALgLAEQgMAFgOAAQgKAAgKgEgAgMgjQgHADgFAEQgFAEgDAGQgDAFAAAGIBHAAQAAgNgJgJQgJgIgQAAQgHAAgHACg");
	this.shape_409.setTransform(156.9,-107.7);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_410.setTransform(146.8,-109);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIAAgQIAPAAIAAARIAAAAQABgEADgDIAIgHIAIgEQAGgCAHAAIAMABIgEANIgJgBQgIAAgGADQgFADgEAFQgFAFgBAFQgCAFAAAFIAAA1g");
	this.shape_411.setTransform(140.2,-107.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#111111").s().p("AgWAxQgGgCgFgEQgGgEgCgFQgDgFAAgHQgBgLAHgHQAHgGAKgDQAKgDALgBIAVgBIAIAAIAAgCQgBgZgbAAQgRAAgPALIgJgKQAQgNAcAAQAIAAAIACQAGACAGAEQAFAEADAHQADAGAAAIIAAAqIABALIACALIgPAAIgBgIIAAgIIgBAAQgGAKgKAEQgJAEgMAAQgHAAgHgBgAAGAAQgHABgIACQgIACgFAEQgGAEAAAIQAAAEACADQACADAEADIAIADIAJABQAHAAAHgDQAGgCAEgFQADgEADgFQACgGAAgGIAAgHIgIAAIgPAAg");
	this.shape_412.setTransform(129.3,-107.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#111111").s().p("AgWBKQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAIgGAKgEQALgEALAAIALABIAMADIAKAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgFACQgGACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgDAHQgCAHAAAIQAAAIACAHQADAHAGAFQAFAFAHADQAHADAJAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQADgHAAgIQAAgIgDgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_413.setTransform(116.3,-110.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_414.setTransform(107,-110.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#111111").s().p("AgjAnQgKgKAAgSIAAg7IAPAAIAAA0QAAAIABAGQACAGADAEQADAEAGACQAFADAJAAIAFgBQAFgBAGgEQAGgDAFgIQAEgHAAgNIAAgwIAPAAIAABJIABAKIAAALIgPAAIgBgHIAAgIIAAAAIgHAHIgIAGIgKADIgKACQgVAAgJgKg");
	this.shape_415.setTransform(97.8,-107.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_416.setTransform(86.4,-107.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAIgHAKgEQAKgDAMAAQAMAAALADQAKAEAIAHQAHAHAEAJQAFAJAAAKQAAALgFAJQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAEQAGAGAHADQAHADAJAAQAJAAAIgDQAHgDAFgGQAGgEACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_417.setTransform(67.4,-107.7);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#111111").s().p("ABBAxIAAg3QAAgOgGgIQgFgIgQAAQgIAAgGADQgFADgEAFQgDAFgCAGQgCAGAAAHIAAAyIgOAAIAAg3QAAgOgGgIQgFgIgQAAIgGABQgFABgGAEQgEADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgLIAAgKIAQAAIAAAOIABAAQAFgIAJgFQAKgEAKAAIAJABIAKADQAEACAEAEQADAEADAGQAEgJAKgGQALgFAKAAQAUAAALAKQAJAJAAASIAAA8g");
	this.shape_418.setTransform(50.7,-107.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#111111").s().p("AgWBFQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAIQAFAJAAALQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgLQgHADgGAFQgFAEgDAHQgCAHAAAIQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgIgDgHQgCgHgGgEQgFgFgHgDQgIgDgJAAQgJAAgHADgAgNgrIAWgdIAVAAIgeAdg");
	this.shape_419.setTransform(34.4,-110.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_420.setTransform(22.5,-107.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#111111").s().p("AgWAuQgLgEgHgKIANgIQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgDQgGgEgIgCIgOgCIgHgDQgFgBgFgCQgEgDgDgEQgDgFAAgGQAAgIADgGQADgFAGgDQAFgDAHgCIAOgCQALAAAKADQAKAEAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEABgDABQgDACgCADQgCADAAADQAAAHAFADQAFADAKACIAPAEQAMACAHAGQAHAGAAALQAAAHgDAGQgEAFgFAEQgGAEgIACQgHABgIAAQgMAAgKgEg");
	this.shape_421.setTransform(5.4,-107.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#111111").s().p("AgWBIQgGgCgFgEQgFgDgEgGQgCgFAAgHQgBgLAHgHQAHgHAKgDQAKgDALgBIAVgBIAIAAIAAgCQgBgYgbAAQgSAAgOAMIgJgKQAQgOAcAAQAIAAAIACQAGACAGAEQAFAEADAHQADAGABAIIAAAqIAAAMIACAKIgQAAIgBgIIAAgIIAAAAQgGAKgKAEQgIAEgNAAQgHAAgHgBgAAGAYQgHAAgIACQgIACgGAEQgFAEAAAIQAAAEACAEQACADAEACIAIADIAJABQAHAAAHgCQAFgDAEgEQAFgEACgGQACgFAAgHIAAgHIgJAAIgOABgAgKgrIAWgdIAUAAIgeAdg");
	this.shape_422.setTransform(-5.6,-110.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#111111").s().p("AgcAxIAAhBIgBgNIgBgQIAPAAIAAARIABAAQABgEAEgDIAGgHIAKgEQAFgCAHAAIALABIgCANIgJgBQgJAAgGADQgFADgFAFQgDAFgDAFQgCAFAAAFIAAA1g");
	this.shape_423.setTransform(-14.1,-107.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#111111").s().p("AgKBNQgGgBgGgCQgFgCgFgEQgFgDgEgFIAAAAIAAAQIgPAAIAAiZIAPAAIAABKIAAAAQAEgFAFgDIAKgGIAMgDIAKgBQAMAAALAEQALAEAHAGQAHAHAFAIQAEAJAAALQAAALgEAJQgFAJgHAHQgHAHgLADQgLAEgMAAIgKgBgAgQgGQgIADgGAEQgFAFgEAHQgDAHAAAIQAAAIADAHQAEAHAFAFQAGAFAIADQAIADAIAAQAKAAAHgDQAHgDAFgFQAGgFADgHQACgHAAgIQAAgIgCgHQgDgHgGgFQgFgEgHgDQgHgDgKAAQgIAAgIADg");
	this.shape_424.setTransform(-25.4,-110.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#111111").s().p("AgWAxQgGgCgFgEQgFgEgEgFQgCgFAAgHQgBgLAHgHQAHgGAKgDQAKgDALgBIAVgBIAIAAIAAgCQgBgZgbAAQgSAAgOALIgJgKQAQgNAcAAQAIAAAIACQAGACAGAEQAFAEADAHQADAGABAIIAAAqIAAALIACALIgQAAIgBgIIAAgIIAAAAQgGAKgKAEQgIAEgNAAQgHAAgHgBgAAGAAQgHABgIACQgIACgGAEQgFAEAAAIQAAAEACADQACADAEADIAIADIAJABQAHAAAHgDQAFgCAEgFQAFgEACgFQACgGAAgGIAAgHIgJAAIgOAAg");
	this.shape_425.setTransform(-38.9,-107.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#111111").s().p("AgWAuQgLgEgHgKIANgIQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgDQgGgEgIgCIgOgCIgHgDQgFgBgFgCQgEgDgDgEQgDgFAAgGQAAgIADgGQADgFAGgDQAFgDAHgCIAOgCQALAAAKADQAKAEAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEABgDABQgDACgCADQgCADAAADQAAAHAFADQAFADAKACIAPAEQAMACAHAGQAHAGAAALQAAAHgDAGQgEAFgFAEQgGAEgIACQgHABgIAAQgMAAgKgEg");
	this.shape_426.setTransform(-49.5,-107.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#111111").s().p("AgWAxQgGgCgFgEQgFgEgEgFQgCgFAAgHQgBgLAHgHQAHgGAKgDQAKgDALgBIAVgBIAIAAIAAgCQgBgZgbAAQgSAAgOALIgJgKQAQgNAcAAQAIAAAIACQAGACAGAEQAFAEADAHQADAGABAIIAAAqIAAALIACALIgQAAIgBgIIAAgIIAAAAQgGAKgKAEQgIAEgNAAQgHAAgHgBgAAGAAQgHABgIACQgIACgGAEQgFAEAAAIQAAAEACADQACADAEADIAIADIAJABQAHAAAHgDQAFgCAEgFQAFgEACgFQACgGAAgGIAAgHIgJAAIgOAAg");
	this.shape_427.setTransform(-66.8,-107.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#111111").s().p("AgpBHIgHgBIABgMQAFABAHAAQAIAAAEgEQAFgEADgJIAIgSIgshfIATAAIAhBNIAhhNIASAAIg1B3QgEALgIAHQgHAGgOAAIgHgBg");
	this.shape_428.setTransform(-78,-105.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#111111").s().p("AgQAYIAPgvIASAAIgSAvg");
	this.shape_429.setTransform(-93,-102.5);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_430.setTransform(-102.7,-107.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#111111").s().p("AgWBFQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAIgGAKgEQAKgEAMAAQAMAAALAEQAKAEAIAGQAHAHAEAIQAFAJAAALQAAALgFAJQgEAJgHAHQgIAHgKADQgLAEgMAAQgMAAgKgEgAgQgLQgHADgGAFQgFAEgDAHQgCAHAAAIQAAAIACAHQADAHAFAFQAGAFAHADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgFACgHQADgHAAgIQAAgIgDgHQgCgHgGgEQgFgFgHgDQgIgDgJAAQgJAAgHADgAgNgrIAWgdIAVAAIgeAdg");
	this.shape_431.setTransform(-115.6,-110.1);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_432.setTransform(-125.1,-110.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#111111").s().p("AgOAvQgKgEgIgHQgHgHgEgJQgEgJAAgLQAAgKAEgJQAEgJAHgHQAIgHAKgDQALgEAMAAQALAAAKAEQAKAEAIAJIgNAIQgDgFgHgEQgHgEgJAAQgJAAgHADQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAFQAGAGAHACQAHADAJAAQAJAAAHgEQAHgDADgGIANAJQgIAIgKAEQgKAEgLAAQgMAAgLgDg");
	this.shape_433.setTransform(-133,-107.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#111111").s().p("AAfAxIAAg0QAAgQgGgIQgGgJgRAAIgFABQgFABgGAEQgGADgFAIQgEAHAAAMIAAAxIgPAAIAAhJIgBgKIAAgLIAPAAIABAHIAAAIIAAAAQADgEAEgDQAEgEAEgCIAKgEIAKgBQAVAAAJAKQAKAJAAASIAAA8g");
	this.shape_434.setTransform(-145.4,-107.9);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#111111").s().p("AgSAuQgLgEgHgGQgHgHgEgJQgFgJAAgLQAAgKAFgJQAEgJAHgHQAIgHAJgEQAKgDAKAAQAMAAAKADQAJAEAHAHQAGAGAEAJQADAIABAKIAAAGIhZAAQABAGADAHQAEAHAEAEQAGAEAHADQAHADAGAAQANAAAJgFQAIgFAFgGIALAIQgJALgMAEQgLAFgOAAQgKAAgKgEgAgMgjQgGADgGAEQgFAEgDAGQgDAFAAAGIBHAAQAAgNgJgJQgJgIgRAAQgGAAgHACg");
	this.shape_435.setTransform(-157.9,-107.7);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_436.setTransform(-168.1,-109);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#111111").s().p("AgVAxQgHgCgGgEQgEgEgEgFQgDgFAAgHQABgLAGgHQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgCQAAgZgbAAQgSAAgNALIgKgKQAPgNAeAAQAHAAAHACQAIACAFAEQAFAEAEAHQACAGAAAIIAAAqIABALIABALIgOAAIgCgIIAAgIIAAAAQgHAKgIAEQgJAEgNAAQgHAAgGgBgAAHAAQgIABgIACQgIACgFAEQgGAEAAAIQAAAEACADQACADAEADIAIADIAJABQAIAAAFgDQAHgCADgFQAFgEABgFQACgGAAgGIAAgHIgIAAIgNAAg");
	this.shape_437.setTransform(-178,-107.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#111111").s().p("AgWAuQgKgEgIgGQgHgHgFgJQgEgJAAgLQAAgKAEgJQAFgJAHgHQAIgHAKgEQAKgDAMAAQAMAAALADQAKAEAIAHQAHAHAEAJQAFAJAAAKQAAALgFAJQgEAJgHAHQgIAGgKAEQgLAEgMAAQgMAAgKgEgAgQgiQgHADgGAFQgFAFgDAHQgCAHAAAHQAAAIACAHQADAHAFAEQAGAGAHADQAHADAJAAQAJAAAIgDQAHgDAFgGQAGgEACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_438.setTransform(-196.8,-107.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#111111").s().p("AgWBKQgKgDgIgHQgHgHgFgJQgEgJAAgLQAAgLAEgJQAFgIAHgHQAIgGAKgEQALgEALAAIALABIAMADIAKAGQAFADAEAFIAAAAIAAhKIAPAAIAACZIgPAAIAAgQIAAAAQgEAFgFADQgFAEgFACQgGACgGABIgLABQgLAAgLgEgAgQgGQgHADgFAEQgGAFgDAHQgCAHAAAIQAAAIACAHQADAHAGAFQAFAFAHADQAHADAJAAQAJAAAIgDQAIgDAGgFQAFgFAEgHQADgHAAgIQAAgIgDgHQgEgHgFgFQgGgEgIgDQgIgDgJAAQgJAAgHADg");
	this.shape_439.setTransform(-210.9,-110.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#111111").s().p("AgWAxQgGgCgGgEQgFgEgDgFQgCgFAAgHQAAgLAGgHQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgCQABgZgcAAQgSAAgOALIgJgKQAPgNAdAAQAIAAAHACQAIACAFAEQAFAEADAHQAEAGAAAIIAAAqIAAALIABALIgPAAIgBgIIAAgIIAAAAQgHAKgJAEQgIAEgNAAQgHAAgHgBgAAHAAQgIABgIACQgIACgGAEQgFAEAAAIQAAAEACADQACADAEADIAIADIAJABQAIAAAFgDQAHgCADgFQAFgEACgFQABgGAAgGIAAgHIgIAAIgNAAg");
	this.shape_440.setTransform(-223.7,-107.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#111111").s().p("AAGA9QgFgBgDgDQgEgDgCgEQgDgFAAgIIAAg7IgXAAIAAgMIAXAAIAAgbIAOAAIAAAbIAfAAIAAAMIgfAAIAAA3IABAJQABADADACQACACACAAIAHABIAIgBIAHgDIABANQgJADgLAAIgJgBg");
	this.shape_441.setTransform(-233.1,-109);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#111111").s().p("AgWAuQgLgEgHgKIANgIQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgDQgGgEgIgCIgOgCIgHgDQgFgBgFgCQgEgDgDgEQgDgFAAgGQAAgIADgGQADgFAGgDQAFgDAHgCIAOgCQALAAAKADQAKAEAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEABgDABQgDACgCADQgCADAAADQAAAHAFADQAFADAKACIAPAEQAMACAHAGQAHAGAAALQAAAHgDAGQgEAFgFAEQgGAEgIACQgHABgIAAQgMAAgKgEg");
	this.shape_442.setTransform(-241.7,-107.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#111111").s().p("AgSAuQgKgEgIgGQgHgHgEgJQgFgJAAgLQAAgKAFgJQAEgJAHgHQAIgHAJgEQAKgDAKAAQAMAAAKADQAJAEAHAHQAGAGAEAJQADAIABAKIAAAGIhYAAQAAAGADAHQAEAHAEAEQAGAEAHADQAHADAGAAQANAAAJgFQAIgFAFgGIALAIQgJALgMAEQgLAFgOAAQgKAAgKgEgAgMgjQgGADgGAEQgFAEgDAGQgDAFAAAGIBHAAQAAgNgJgJQgJgIgRAAQgGAAgHACg");
	this.shape_443.setTransform(-252.9,-107.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#111111").s().p("AgdAxIAAhBIAAgNIgBgQIAPAAIAAARIABAAQABgEAEgDIAGgHIAJgEQAGgCAIAAIAKABIgCANIgJgBQgJAAgGADQgFADgFAFQgEAFgCAFQgCAFAAAFIAAA1g");
	this.shape_444.setTransform(-262.1,-107.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#111111").s().p("Ag4BOIAAiZIAPAAIAAAQIABAAQADgFAFgDIALgGIALgDIAKgBQAMAAALADQALAEAHAHQAIAHADAJQAFAJAAALQAAALgFAJQgDAIgIAHQgHAGgLAEQgLAEgMAAIgKgBQgGgBgFgDQgGgCgFgDQgFgEgDgEIgBAAIAABKgAgQg+QgIADgFAFQgHAFgCAHQgDAHgBAIQABAIADAHQACAHAHAEQAFAFAIADQAHADAJAAQAJAAAIgDQAHgDAFgFQAGgEACgHQAEgHAAgIQAAgIgEgHQgCgHgGgFQgFgFgHgDQgIgDgJAAQgJAAgHADg");
	this.shape_445.setTransform(-273.4,-104.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#111111").s().p("AgWAuQgLgEgHgKIANgIQAEAGAHAEQAHAEAJAAIAJgBIAIgDQAEgCACgDQACgDAAgEQAAgHgGgDQgGgEgIgCIgOgCIgHgDQgFgBgFgCQgEgDgDgEQgDgFAAgGQAAgIADgGQADgFAGgDQAFgDAHgCIAOgCQALAAAKADQAKAEAFAKIgOAIQgDgGgGgEQgGgDgIAAIgHABQgEABgDABQgDACgCADQgCADAAADQAAAHAFADQAFADAKACIAPAEQAMACAHAGQAHAGAAALQAAAHgDAGQgEAFgFAEQgGAEgIACQgHABgIAAQgMAAgKgEg");
	this.shape_446.setTransform(-292,-107.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#111111").s().p("AgVAxQgHgCgGgEQgEgEgDgFQgEgFAAgHQAAgLAHgHQAHgGAKgDQAKgDALgBIAVgBIAHAAIAAgCQAAgZgbAAQgRAAgOALIgKgKQAQgNAdAAQAHAAAHACQAIACAFAEQAFAEAEAHQACAGAAAIIAAAqIABALIABALIgOAAIgBgIIAAgIIgBAAQgHAKgIAEQgKAEgMAAQgHAAgGgBgAAGAAQgHABgIACQgIACgFAEQgGAEAAAIQAAAEACADQACADAEADIAIADIAJABQAIAAAFgDQAGgCAFgFQADgEACgFQACgGAAgGIAAgHIgHAAIgPAAg");
	this.shape_447.setTransform(-303,-107.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#111111").s().p("AAfBNIAAg1QAAgPgGgJQgHgIgQABIgGABQgFAAgGAEQgGACgEAIQgFAHAAANIAAAxIgPAAIAAiZIAPAAIAABKIABAAQACgEAEgDQAEgDAFgCIAKgFIAKgBQAUAAAKAKQAKAJAAARIAAA9g");
	this.shape_448.setTransform(-315.2,-110.7);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#111111").s().p("AgHBHIAAheIAPAAIAABegAgHg1QgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_449.setTransform(-330.4,-110.1);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#111111").s().p("AgdBHQgNgFgJgLIAPgKQAFAIAJAFQAKAFAMAAQAFAAAHgCQAGgCAFgDQAFgEADgFQADgEAAgHQAAgHgEgFQgDgFgGgEIgNgFIgOgFIgQgFQgHgCgFgEQgHgEgDgHQgEgHAAgKQAAgKAFgIQAEgHAHgGQAIgFAJgCQAKgDAIAAQAOAAAMAEQAKAEAKAKIgOAKQgLgOgVAAIgLABQgGACgFADQgFADgDAFQgDAFAAAHQAAAKAGAFQAGAFAKAEIATAGQAKADAJADQAKAFAGAIQAGAHAAANQAAAKgFAIQgEAIgIAFQgHAFgKADQgJADgJAAQgPAAgOgFg");
	this.shape_450.setTransform(-339.5,-110.2);

	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-421,-193);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#111111").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_451.setTransform(203.3,-30.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_452.setTransform(194.7,-34.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_453.setTransform(185.4,-35.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAJAAAJAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgJAEgJAAQgKAAgKgDg");
	this.shape_454.setTransform(177.6,-34.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFAAAGIA+AAQAAgOgHgIQgIgIgPAAQgFAAgGACg");
	this.shape_455.setTransform(166.9,-34.1);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgIIAGgGIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_456.setTransform(158.9,-34.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgIIAGgGIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_457.setTransform(152.2,-34.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_458.setTransform(142.2,-34.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgGADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAGADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgKAAgJgDg");
	this.shape_459.setTransform(131.8,-34.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_460.setTransform(115.2,-34.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#111111").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_461.setTransform(102.9,-36.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_462.setTransform(91.6,-34.1);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#111111").s().p("AgFBGIAAhdIALAAIAABdgAgFg0QgDgDAAgEQAAgEADgDQADgDACAAQADAAADADQAEADAAAEQAAAEgEADQgDACgDAAQgCAAgDgCg");
	this.shape_463.setTransform(84.3,-36.4);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAKAAAIAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgIAEgKAAQgKAAgKgDg");
	this.shape_464.setTransform(77.4,-34.1);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#111111").s().p("AAbAwIAAgzQABgQgGgHQgFgJgPAAIgEABQgFABgFADQgFAEgEAHQgEAIgBALIAAAwIgNAAIAAhIIAAgKIAAgKIANAAIAAAHIAAAIIABAAIAFgHQAEgEAEgCIAJgDIAIgCQASAAAJAKQAJAJAAASIAAA6g");
	this.shape_465.setTransform(66.5,-34.2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#111111").s().p("AgfAmQgJgJABgSIAAg6IAMAAIAAAyQABAIABAHQABAFADAFQADAEAFACQAFACAHAAIAFgBQAEgBAGgDQAEgEAFgHQADgHAAgNIAAgvIAOAAIAABIIAAAKIABALIgOAAIgBgIIAAgIIAAAAQgCAEgEAEIgHAFIgJAEQgEABgEAAQgTAAgIgKg");
	this.shape_466.setTransform(55.5,-34);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#111111").s().p("AAcAwIAAgzQgBgQgFgHQgFgJgPAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgKIAOAAIABAHIAAAIIAAAAIAFgHQAEgEAEgCIAJgDIAIgCQATAAAIAKQAIAJAAASIAAA6g");
	this.shape_467.setTransform(44.3,-34.2);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_468.setTransform(33.4,-34.1);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#111111").s().p("AgGBMIAAiXIANAAIAACXg");
	this.shape_469.setTransform(19.9,-37);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_470.setTransform(11.9,-34.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_471.setTransform(-5.1,-34.1);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#111111").s().p("AgTBJQgKgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAKgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgGADgFAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAFAFAGADQAGADAIAAQAIAAAHgDQAHgDAEgFQAFgFADgHQADgHAAgIQAAgHgDgHQgDgHgFgFQgEgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_472.setTransform(-17.4,-36.9);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_473.setTransform(-28.7,-34.1);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#111111").s().p("AAcAwIAAgzQgBgQgFgHQgGgJgOAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgKIAOAAIABAHIAAAIIAAAAIAGgHQADgEAEgCIAJgDIAIgCQATAAAIAKQAJAJgBASIAAA6g");
	this.shape_474.setTransform(-39.3,-34.2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_475.setTransform(-50.6,-34.1);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#111111").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgEADgDQAEgDACAAQAEAAADADQACADAAAEQAAAEgCADQgDACgEAAQgCAAgEgCg");
	this.shape_476.setTransform(-58.9,-36.4);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgGADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAGADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgKAAgJgDg");
	this.shape_477.setTransform(-65.8,-34.1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgDgFgGgEQgGgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAGgDQAGgEADgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_478.setTransform(-75.4,-34.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_479.setTransform(-86.1,-34.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#111111").s().p("AgGBMIAAiXIANAAIAACXg");
	this.shape_480.setTransform(-94.1,-37);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAJgDAIAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAEAEAGADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_481.setTransform(-102,-34.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_482.setTransform(-111.8,-34.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_483.setTransform(-125.9,-34.1);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_484.setTransform(-135.6,-34.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#111111").s().p("AAbBMIAAg1QAAgPgGgIQgFgIgPAAIgEACQgFAAgFADQgFAEgEAGQgEAIAAAMIAAAxIgNAAIAAiXIANAAIAABJIAAAAIAGgHQADgDAFgCIAJgEIAIgCQASAAAJAKQAIAJAAARIAAA8g");
	this.shape_485.setTransform(-146.2,-37);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_486.setTransform(-163.1,-34.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#111111").s().p("AApBHIhUh4IAAAAIAAB4IgPAAIAAiNIASAAIBUB3IAAAAIAAh3IAPAAIAACNg");
	this.shape_487.setTransform(-176.8,-36.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#B20512").s().p("AgOBLQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAJgFAGQgGAFgJABQgIgBgGgFgAgQAaIAAhqIAhAAIAABqg");
	this.shape_488.setTransform(54.1,-79.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#B20512").s().p("AgeAyQgNgHgJgNQgIgNAAgRQAAgRAIgNQAJgNANgHQAOgHAQAAQARAAAOAHQAOAHAHANQAJANAAARQAAARgJANQgHANgOAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_489.setTransform(42.2,-76.9);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#B20512").s().p("AgBBFQgIgDgFgIQgGgHAAgMIAAgzIgVAAIAAgbIAVAAIAAghIAhAAIAAAhIAdAAIAAAbIgdAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAEAAACgCIAAAcQgFACgGABIgMABQgLAAgJgEg");
	this.shape_490.setTransform(30.5,-78.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#B20512").s().p("AgTAyQgOgHgHgNQgJgNAAgRQAAgRAJgNQAHgNAOgHQAOgHAQAAQAKAAALAEQAKADAIAIIgWAXQgCgDgFgDQgEgCgGAAQgMAAgHAIQgHAHAAAMQAAAMAHAIQAHAHAMABQAGAAAEgDIAHgGIAWAYQgIAIgKADQgLAEgKAAQgQgBgOgHg");
	this.shape_491.setTransform(21.1,-76.9);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#B20512").s().p("AgZAyQgOgHgIgNQgIgMAAgSQAAgRAIgNQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGANAAARIAAAKIhNAAQACAKAHAGQAGAGAJAAQAJAAAFgEQAGgEAFgGIAXASQgIAKgMAGQgNAFgNABQgQgBgOgHgAAXgMQAAgIgGgGQgGgGgJAAQgHAAgFADQgFADgDAEQgDAFAAAFIAsAAIAAAAg");
	this.shape_492.setTransform(8.7,-76.9);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#B20512").s().p("AgmA4IAAhtIAiAAIAAASIABAAQAEgKAIgFQAHgFALAAIAGAAIAGABIAAAfIgIgCIgHgBQgNABgGAEQgFAFgCAIQgCAIAAAKIAAAug");
	this.shape_493.setTransform(-1.5,-77.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#B20512").s().p("AgmA4IAAhtIAiAAIAAASIABAAQAEgKAIgFQAHgFALAAIAGAAIAGABIAAAfIgIgCIgHgBQgNABgGAEQgFAFgCAIQgCAIAAAKIAAAug");
	this.shape_494.setTransform(-10.7,-77.1);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#B20512").s().p("AgeAyQgNgHgJgNQgIgNAAgRQAAgRAIgNQAJgNANgHQAOgHAQAAQARAAAOAHQANAHAJANQAIANAAARQAAARgIANQgJANgNAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_495.setTransform(-22.6,-76.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#B20512").s().p("AgTAyQgOgHgIgNQgHgNgBgRQABgRAHgNQAIgNAOgHQAOgHAQAAQAKAAALAEQAKADAIAIIgWAXQgDgDgEgDQgEgCgGAAQgMAAgHAIQgHAHAAAMQAAAMAHAIQAHAHAMABQAGAAAEgDIAHgGIAWAYQgIAIgKADQgLAEgKAAQgQgBgOgHg");
	this.shape_496.setTransform(-34.6,-76.9);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#B20512").s().p("AATA4IAAg2IgBgMQAAgGgEgFQgEgEgJgBQgHABgFAEQgEAEgCAGIgBANIAAA2IgiAAIAAhtIAhAAIAAAPIAAAAQACgEAFgEQAEgEAHgDQAFgCAIAAQARAAAJAHQAJAGADAMQADAMAAAPIAAA7g");
	this.shape_497.setTransform(-46.9,-77.1);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#B20512").s().p("AgRBQIAAifIAjAAIAACfg");
	this.shape_498.setTransform(-56.7,-79.4);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#B20512").s().p("AgQBRIAAhqIAhAAIAABqgAgOgsQgGgGAAgJQAAgIAGgHQAGgFAIAAQAJAAAGAFQAFAHABAIQgBAJgFAGQgGAGgJAAQgIAAgGgGg");
	this.shape_499.setTransform(-65.1,-74.5);

	this.instance_1 = new lib.Mapadebits24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-271,-151);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#B20512").s().p("AgQBSIAAhtIAhAAIAABtgAgNgwQgFgFgBgIQABgJAFgGQAGgFAHAAQAIAAAGAFQAGAGAAAJQAAAIgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_500.setTransform(20.8,-79.6);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#B20512").s().p("AgIBUQgGgDgFgDQgFgEgDgFIAAAAIAAAPIggAAIAAiqIAiAAIAABJIABAAQAGgIAJgEQAJgDAKAAQAPAAALAJQAMAIAGAMQAGAOAAAPQAAARgHANQgHAMgMAHQgMAIgQAAQgHgBgHgCgAgUAJQgHAHAAANQAAANAHAHQAHAIANAAQAMAAAHgIQAHgHAAgNQAAgNgHgHQgHgIgMAAQgNAAgHAIg");
	this.shape_501.setTransform(11.1,-79.8);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#B20512").s().p("AguBRQgGgBgGgCIAEgcIAIADIAIABQAHAAAFgDQAEgCACgEIAFgKIACgGIgwhuIAlAAIAbBJIAAAAIAYhJIAjAAIgxB/IgHAPQgDAHgEAFQgFAEgHADQgIACgMAAIgNgBg");
	this.shape_502.setTransform(-9.3,-74.2);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#B20512").s().p("AglAyQgJgIgDgLQgDgMAAgOIAAg8IAiAAIAAA2IABALQABAIADAEQAEAEAJAAQAIAAAEgDQAEgFACgGQABgGAAgHIAAg2IAiAAIAABsIghAAIAAgPQgCAFgFAEQgEAEgGACQgGADgIAAQgRAAgJgGg");
	this.shape_503.setTransform(-22,-76.8);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#B20512").s().p("AA3BQIAAh6IAAAAIgqB6IgaAAIgph6IAAAAIAAB6IgjAAIAAifIA1AAIAkBnIAAAAIAlhnIA1AAIAACfg");
	this.shape_504.setTransform(-39.2,-79.4);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_505.setTransform(114.5,-34.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#111111").s().p("AgUBJQgIgEgHgGQgGgHgFgJQgDgJAAgLQAAgKADgJQAFgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgCAHAAAHQAAAIACAHQADAHAEAFQAFAFAGADQAGADAIAAQAIAAAHgDQAGgDAGgFQAEgFADgHQADgHAAgIQAAgHgDgHQgDgHgEgFQgGgEgGgDQgHgDgIAAQgIAAgGADg");
	this.shape_506.setTransform(85.6,-36.9);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#111111").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgCgDAAgEQAAgEACgDQADgDADAAQADAAAEADQACADAAAEQAAAEgCADQgEACgDAAQgDAAgDgCg");
	this.shape_507.setTransform(67,-36.4);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgGADgFAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAFAFAGADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_508.setTransform(60.1,-34.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#111111").s().p("AgfAmQgIgJAAgSIAAg6IAMAAIAAAyQAAAIACAHQABAFADAFQADAEAFACQAEACAIAAIAFgBQAFgBAEgDQAFgEAFgHQADgHAAgNIAAgvIAOAAIAABIIAAAKIAAALIgNAAIgBgIIAAgIIAAAAQgCAEgDAEIgIAFIgJAEQgEABgEAAQgSAAgJgKg");
	this.shape_509.setTransform(38.3,-34);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#111111").s().p("AAbAwIAAgzQAAgQgFgHQgFgJgPAAIgEABQgFABgFADQgGAEgDAHQgFAIAAALIAAAwIgMAAIAAhIIgBgKIAAgKIANAAIAAAHIAAAIIABAAIAGgHQADgEAEgCIAJgDIAJgCQARAAAJAKQAJAJAAASIAAA6g");
	this.shape_510.setTransform(27.1,-34.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFABAGIA+AAQAAgOgJgIQgIgIgOAAQgFAAgGACg");
	this.shape_511.setTransform(16.1,-34.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#111111").s().p("AgFBMIAAiXIALAAIAACXg");
	this.shape_512.setTransform(2.6,-37);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#111111").s().p("AgUBJQgIgEgHgGQgGgHgFgJQgDgJAAgLQAAgKADgJQAFgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgHADgEAEQgEAFgDAHQgCAHAAAHQAAAIACAHQADAHAEAFQAEAFAHADQAGADAIAAQAIAAAHgDQAGgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgEgGgDQgHgDgIAAQgIAAgGADg");
	this.shape_513.setTransform(-34.6,-36.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#111111").s().p("AAbAwIAAgzQABgQgGgHQgFgJgPAAIgEABQgFABgFADQgGAEgDAHQgFAIAAALIAAAwIgMAAIAAhIIgBgKIAAgKIANAAIAAAHIAAAIIABAAIAGgHQADgEAEgCIAJgDIAJgCQASAAAIAKQAJAJAAASIAAA6g");
	this.shape_514.setTransform(-56.5,-34.2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#111111").s().p("AgFBGIAAhdIALAAIAABdgAgFg0QgEgDAAgEQAAgEAEgDQADgDACAAQADAAADADQADADAAAEQAAAEgDADQgDACgDAAQgCAAgDgCg");
	this.shape_515.setTransform(-76.1,-36.4);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_516.setTransform(-83,-34.1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_517.setTransform(-92.7,-34.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#111111").s().p("AgFBMIAAiXIALAAIAACXg");
	this.shape_518.setTransform(-111.3,-37);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#111111").s().p("AAnBHIAAhDIhNAAIAABDIgOAAIAAiNIAOAAIAAA+IBNAAIAAg+IAOAAIAACNg");
	this.shape_519.setTransform(-165,-36.5);

	this.instance_2 = new lib.Mapadebits27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(201,-173);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_520.setTransform(165,-27.5);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_521.setTransform(153.9,-35.3);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_522.setTransform(140.4,-32);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_523.setTransform(126.8,-35.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_524.setTransform(117,-34.7);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_525.setTransform(108.4,-32);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_526.setTransform(99.7,-34.7);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgFgCgCgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgDIABAPQgIADgNAAIgJAAg");
	this.shape_527.setTransform(92.9,-33.4);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_528.setTransform(83.5,-32);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_529.setTransform(70.8,-32);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_530.setTransform(51.7,-32);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAHABIAIgBIAJgDIABAPQgKADgMAAIgJAAg");
	this.shape_531.setTransform(41.8,-33.4);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAHAEQAIAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_532.setTransform(32.8,-32);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_533.setTransform(20.9,-32);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_534.setTransform(0.5,-32);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_535.setTransform(-14.3,-35.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_536.setTransform(-27.8,-32);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgDIABAPQgJADgNAAIgKAAg");
	this.shape_537.setTransform(-37.7,-33.4);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_538.setTransform(-48.4,-32);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_539.setTransform(-57.9,-35.5);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQAEgHAFgDIAKgHQAHgDAFgBIALgBQAOAAAKAFQALAEAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgFgEgEgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgCAJAAAJQAAAJACAJQAEAHAGAGQAGAGAIADQAJADAIABQAKgBAIgDQAIgDAFgGQAGgGACgHQAEgJAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_540.setTransform(-67.7,-28.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGAEgDAGQgEAFgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGACQgFAAgGAFQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgGQALgHALABQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_541.setTransform(-85.9,-32.1);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_542.setTransform(-103,-32);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_543.setTransform(-115.5,-32);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAIAHAEQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgGgFQgFgEgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_544.setTransform(-133.4,-32);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_545.setTransform(-145.1,-32);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#111111").s().p("AAuBVIAAhRIhbAAIAABRIgSAAIAAipIASAAIAABKIBbAAIAAhKIARAAIAACpg");
	this.shape_546.setTransform(-159.7,-34.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#B20512").s().p("AgQBWQgHgHAAgKQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgTAeIAAh6IAmAAIAAB6g");
	this.shape_547.setTransform(88,-118.3);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#B20512").s().p("AgeA/QgNgEgKgKIAYgaQAGAHAGADQAHAEAJAAQAFAAAFgCQAGgCAAgFQAAgGgHgDIgPgEIgUgGQgJgDgHgHQgGgHAAgPQAAgOAHgKQAIgJAMgFQAMgEAMAAQANAAAMADQANAEAJAJIgXAYQgFgFgFgDQgHgDgHAAQgEAAgEADQgEACAAAGQAAAFAGADQAGACAJACQAKACAKAEQAKADAGAHQAHAIAAAOQAAAMgFAIQgGAIgIAFQgIAEgLACQgKACgJAAIgDAAQgMAAgMgDg");
	this.shape_548.setTransform(76.2,-115.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#B20512").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgGgGgBgKQABgKAGgGQAGgGAJAAQAKAAAGAGQAGAGABAKQgBAKgGAGQgGAGgKABQgJgBgGgGg");
	this.shape_549.setTransform(21.2,-118.6);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#B20512").s().p("AAMBCQgSAAgQgIQgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQAMAAAMAEQAMADAJAKIgZAbQgDgFgFgCQgFgDgHAAQgNAAgIAJQgJAJABANQgBAPAJAIQAIAJANAAQAHAAAFgDQAFgCADgFIAZAcQgJAJgMAEQgLADgKAAIgDAAg");
	this.shape_550.setTransform(12,-115.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#B20512").s().p("AgBBQQgKgEgGgJQgGgIAAgNIAAg8IgZAAIAAgfIAZAAIAAgmIAmAAIAAAmIAiAAIAAAfIgiAAIAAAqIABALQABAGAEADQAEADAIAAIAIgBQAFAAADgDIAAAhQgGACgHABIgOAAQgNAAgKgDg");
	this.shape_551.setTransform(-14.2,-117.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#B20512").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgGgGgBgKQABgKAGgGQAGgGAJAAQAKAAAGAGQAGAGABAKQgBAKgGAGQgGAGgKABQgJgBgGgGg");
	this.shape_552.setTransform(-22.7,-118.6);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#B20512").s().p("AAMBCQgSAAgQgIQgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQAMAAAMAEQAMADAJAKIgZAbQgDgFgFgCQgGgDgGAAQgNAAgJAJQgHAJAAANQAAAPAHAIQAJAJANAAQAHAAAFgDQAEgCAEgFIAZAcQgJAJgMAEQgLADgKAAIgDAAg");
	this.shape_553.setTransform(-31.8,-115.5);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#B20512").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgGgGgBgKQABgKAGgGQAGgGAJAAQAKAAAGAGQAGAGABAKQgBAKgGAGQgGAGgKABQgJgBgGgGg");
	this.shape_554.setTransform(-42,-118.6);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#B20512").s().p("AgdA6QgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQATAAANAIQANAIAHAPQAIAPAAATIAAAMIhaAAQADAMAHAGQAIAHALAAQAJAAAHgEQAHgFAEgHIAcAVQgKALgOAHQgOAGgQAAQgSAAgQgIgAAagNQAAgKgHgHQgHgHgKAAQgIAAgGADQgGAEgDAFQgDAGgBAGIAzAAIAAAAg");
	this.shape_555.setTransform(-59.5,-115.5);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#B20512").s().p("Ag9BcIAAi3IB7AAIAAAmIhSAAIAAAlIBLAAIAAAkIhLAAIAABIg");
	this.shape_556.setTransform(-74.2,-118.4);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#B20512").s().p("AgTBdIAAh6IAmAAIAAB6gAgQgzQgHgGAAgLQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAALgHAGQgHAHgKAAQgJAAgHgHg");
	this.shape_557.setTransform(-88.2,-112.7);

	this.instance_3 = new lib.Mapadebits26();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-271,-151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-55.7,y:-163.3}},{t:this.shape_10,p:{x:-44.4,y:-159.8}},{t:this.shape_9,p:{x:-21.3,y:-159.8}},{t:this.shape_8,p:{x:-6.4,y:-160}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:98.9,y:-159.8}}]}).to({state:[{t:this.instance_1},{t:this.shape_499,p:{x:-65.1}},{t:this.shape_498},{t:this.shape_497,p:{x:-46.9}},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492,p:{x:8.7}},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488,p:{x:54.1}},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484,p:{x:-135.6}},{t:this.shape_483,p:{x:-125.9}},{t:this.shape_482,p:{x:-111.8}},{t:this.shape_481,p:{x:-102}},{t:this.shape_480},{t:this.shape_479,p:{x:-86.1}},{t:this.shape_478,p:{x:-75.4}},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475,p:{x:-50.6}},{t:this.shape_474},{t:this.shape_473,p:{x:-28.7}},{t:this.shape_472},{t:this.shape_471,p:{x:-5.1}},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468,p:{x:33.4}},{t:this.shape_467,p:{x:44.3}},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462,p:{x:91.6}},{t:this.shape_461},{t:this.shape_460,p:{x:115.2}},{t:this.shape_459},{t:this.shape_458,p:{x:142.2}},{t:this.shape_457,p:{x:152.2}},{t:this.shape_456,p:{x:158.9}},{t:this.shape_455,p:{x:166.9}},{t:this.shape_454},{t:this.shape_453,p:{x:185.4}},{t:this.shape_452,p:{x:194.7}},{t:this.shape_451,p:{x:203.3}}]},1).to({state:[{t:this.instance_1},{t:this.shape_519},{t:this.shape_484,p:{x:-152.9}},{t:this.shape_483,p:{x:-143.1}},{t:this.shape_482,p:{x:-129.1}},{t:this.shape_455,p:{x:-119.3}},{t:this.shape_518},{t:this.shape_481,p:{x:-103.4}},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_475,p:{x:-67.8}},{t:this.shape_514},{t:this.shape_473,p:{x:-45.9}},{t:this.shape_513},{t:this.shape_471,p:{x:-22.3}},{t:this.shape_468,p:{x:-5.3}},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_467,p:{x:49.3}},{t:this.shape_508},{t:this.shape_507},{t:this.shape_462,p:{x:74.3}},{t:this.shape_506},{t:this.shape_460,p:{x:97.9}},{t:this.shape_505},{t:this.shape_458,p:{x:124.9}},{t:this.shape_457,p:{x:135}},{t:this.shape_456,p:{x:141.6}},{t:this.shape_479,p:{x:149.7}},{t:this.shape_478,p:{x:160.4}},{t:this.shape_453,p:{x:168.2}},{t:this.shape_452,p:{x:177.4}},{t:this.shape_451,p:{x:186.1}},{t:this.shape_499,p:{x:-54.9}},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_492,p:{x:30.2}},{t:this.shape_497,p:{x:43.2}},{t:this.shape_488,p:{x:54.7}}]},1).to({state:[{t:this.instance_3},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_11,p:{x:-48.7,y:-119}},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape,p:{x:-1.9,y:-115.5}},{t:this.shape_550},{t:this.shape_549},{t:this.shape_10,p:{x:32.5,y:-115.5}},{t:this.shape_8,p:{x:47.9,y:-115.7}},{t:this.shape_9,p:{x:62.8,y:-115.5}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.instance_2}]},1).wait(1));

	// Capa 2
	this.instance_4 = new lib.Mapadebits2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-517,-296,4.207,3.471);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517,-296,1034.9,597.1);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Feedback
	this.mc_feedback = new lib.Símbolo2();
	this.mc_feedback.parent = this;
	this.mc_feedback.setTransform(23,-17.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_feedback).wait(1));

	// Imagemes
	this.mc_cards = new lib.Símbolo5();
	this.mc_cards.parent = this;
	this.mc_cards.setTransform(-267.5,-26);

	this.timeline.addTween(cjs.Tween.get(this.mc_cards).wait(1));

	// Buttons
	this.btn_send = new lib.Símbolo22();
	this.btn_send.parent = this;
	this.btn_send.setTransform(268.4,211.8);
	new cjs.ButtonHelper(this.btn_send, 0, 1, 1);

	this.btn_back = new lib.Símbolo19();
	this.btn_back.parent = this;
	this.btn_back.setTransform(268.4,-267.3);
	new cjs.ButtonHelper(this.btn_back, 0, 1, 1);

	this.btn_next = new lib.Símbolo18();
	this.btn_next.parent = this;
	this.btn_next.setTransform(268.4,140.2);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_next},{t:this.btn_back},{t:this.btn_send}]}).wait(1));

	// Capa 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egp1AaNMAAAg0ZMBTrAAAMAAAA0Zg");
	mask.setTransform(257.3,-66);

	// Slide
	this.mc_slide = new lib.Símbolo6();
	this.mc_slide.parent = this;
	this.mc_slide.setTransform(268.4,-69.2);

	var maskedShapeInstanceList = [this.mc_slide];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mc_slide).wait(1));

	// Instruction
	this.instance = new lib.Mapadebits22();
	this.instance.parent = this;
	this.instance.setTransform(-28,-309);

	this.mc_cont = new lib.Símbolo7();
	this.mc_cont.parent = this;
	this.mc_cont.setTransform(-482.2,-212.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgOApQgIgDgGgGQgFgGgEgIQgEgIAAgKQAAgIAEgJQADgIAGgGQAGgFAHgEQAIgDAIAAQAJAAAIADQAIAEAFAFQAFAGACAIQAEAHAAAJIAAAEIhGAAQAAAHADAFQACAGAFAEQAEAEAFACQAGADAFAAQAJAAAHgFQAIgEADgGIAJAIQgHAJgKAEQgIAEgLAAQgIAAgIgDgAgJgeQgGACgDAEQgEAEgDAFQgCAEAAAGIA3AAQAAgMgHgIQgHgHgNAAQgFAAgFACg");
	this.shape.setTransform(-299.6,262.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AAEA2QgDgBgCgCQgDgCgCgFQgCgFAAgGIAAg0IgSAAIAAgLIASAAIAAgYIALAAIAAAYIAYAAIAAALIgYAAIAAAwIAAAIIADAFIAEACIAFABIAGgBIAGgDIAAALQgGADgKAAIgHgBg");
	this.shape_1.setTransform(-307.7,261.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AAZArIAAgtQAAgOgFgIQgFgHgNAAIgEAAQgFABgEADQgFAEgDAGQgDAHgBAKIAAArIgLAAIAAhAIgBgJIAAgKIAMAAIAAAHIAAAGIAGgGIAGgFIAIgDIAIgBQAQAAAIAIQAIAJAAAQIAAA0g");
	this.shape_2.setTransform(-315.8,262.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgOApQgIgDgGgGQgFgGgEgIQgDgIAAgKQAAgIADgJQADgIAGgGQAGgFAHgEQAIgDAIAAQAKAAAHADQAIAEAFAFQAFAGACAIQAEAHAAAJIAAAEIhGAAQAAAHADAFQACAGAFAEQAEAEAFACQAGADAFAAQAKAAAGgFQAIgEADgGIAJAIQgHAJgJAEQgJAEgLAAQgIAAgIgDgAgJgeQgGACgEAEQgDAEgDAFQgCAEgBAGIA4AAQAAgMgGgIQgIgHgNAAQgFAAgFACg");
	this.shape_3.setTransform(-325.6,262.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgFA+IAAhSIALAAIAABSgAgFgvQgDgDABgDQgBgEADgCQADgCACgBQAEABACACQADACAAAEQAAADgDADQgDACgDAAQgCAAgDgCg");
	this.shape_4.setTransform(-332.8,260.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgRBCQgIgEgGgFQgGgHgDgIQgEgHAAgKQAAgKAEgIQADgHAGgGQAGgGAIgDQAIgDAJgBIAIABIAJAEIAJAEQAEADADAFIAAhCIAMAAIAACHIgMAAIAAgOQgDAEgEADIgJAGIgJACIgIABQgJAAgIgDgAgMgFQgGADgEADQgFAEgCAHQgCAGAAAHQAAAHACAGQACAGAFAFQAEAEAGADQAFACAHABQAHgBAHgCQAFgDAFgEQAEgFADgGQADgGgBgHQABgHgDgGQgDgHgEgEQgFgDgFgDQgHgDgHAAQgHAAgFADg");
	this.shape_5.setTransform(-340.7,260.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AAZArIAAgtQAAgOgFgIQgFgHgNAAIgEAAQgFABgEADQgFAEgDAGQgEAHABAKIAAArIgNAAIAAhAIAAgJIgBgKIANAAIABAHIAAAGIAEgGIAHgFIAIgDIAIgBQAQAAAIAIQAIAJgBAQIAAA0g");
	this.shape_6.setTransform(-351.1,262.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgRApQgIgDgGgGQgGgGgDgIQgEgIAAgKQAAgIAEgJQADgIAGgGQAGgFAIgEQAIgDAJAAQAKAAAIADQAIAEAGAFQAGAGADAIQAEAJAAAIQAAAKgEAIQgDAIgGAGQgGAGgIADQgIADgKAAQgJAAgIgDgAgMgeQgGADgEAEQgEAFgCAGQgDAGAAAGQAAAHADAGQACAGAEAFQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAEgFADgGQACgGAAgHQAAgGgCgGQgDgGgEgFQgEgEgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_7.setTransform(-361.2,262.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgsBFIAAiHIAMAAIAAAOQADgEAEgDIAJgFIAIgDIAIgBQAKAAAIADQAIAEAGAFQAGAGAEAIQADAJAAAJQAAAKgDAIQgEAHgGAGQgGAGgIADQgIADgKAAIgIAAIgIgDIgJgFQgEgDgDgFIAABCgAgMg3QgGADgFAEQgEAFgDAGQgCAGAAAHQAAAHACAGQADAGAEAFQAFADAGADQAGADAGAAQAIAAAFgDQAGgDAEgDQAFgFACgGQACgGAAgHQAAgHgCgGQgCgGgFgFQgEgEgGgDQgFgCgIAAQgGAAgGACg");
	this.shape_8.setTransform(-371.8,265.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgSApQgHgEgGgJIAKgHQADAGAGADQAGAEAGAAIAHgBQAEgBADgCQADgBABgDQABgDAAgDQABgHgFgCQgFgDgGgCIgLgDIgGgBIgHgDQgEgDgCgEQgCgEgBgGQABgGACgFQACgFAFgDQAEgDAGgCQAFgBAFAAQAJAAAIADQAHAEAFAIIgLAHQgDgFgEgDQgFgDgGAAIgFAAIgGADIgEAEQgCACAAADQABAGAEADQADADAIACIAMACQAJACAFAFQAHAHAAAJQgBAGgCAFQgDAFgEADQgFAEgGABIgMABQgJAAgJgDg");
	this.shape_9.setTransform(-381.3,262.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgOApQgIgDgGgGQgGgGgDgIQgEgIAAgKQAAgIAEgJQADgIAGgGQAGgFAHgEQAIgDAIAAQAJAAAIADQAIAEAFAFQAFAGACAIQADAHABAJIAAAEIhGAAQAAAHADAFQACAGAFAEQAEAEAGACQAFADAFAAQAJAAAHgFQAHgEAEgGIAJAIQgHAJgKAEQgJAEgKAAQgIAAgIgDgAgJgeQgFACgEAEQgEAEgDAFQgDAEABAGIA3AAQABgMgIgIQgHgHgNAAQgEAAgGACg");
	this.shape_10.setTransform(-390.2,262.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgWArIAAg5IAAgLIgBgPIALAAIAAAQIABAAIADgHIAGgGQACgCAFgCQAFgBAFAAIAJABIgCAMIgIgBQgGAAgFACQgEADgDAEQgDAEgCAFIgCAJIAAAug");
	this.shape_11.setTransform(-397.4,262.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgXArIAAg5IAAgLIAAgPIALAAIAAAQIABAAIAEgHIAFgGQACgCAFgCQAEgBAGAAIAJABIgDAMIgHgBQgGAAgFACQgEADgDAEQgEAEgBAFIgCAJIAAAug");
	this.shape_12.setTransform(-403.4,262.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgRApQgIgDgGgGQgGgGgDgIQgEgIAAgKQAAgIAEgJQADgIAGgGQAGgFAIgEQAIgDAJAAQAKAAAIADQAIAEAGAFQAGAGADAIQAEAJAAAIQAAAKgEAIQgDAIgGAGQgGAGgIADQgIADgKAAQgJAAgIgDgAgMgeQgGADgEAEQgEAFgCAGQgDAGAAAGQAAAHADAGQACAGAEAFQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAEgFADgGQACgGAAgHQAAgGgCgGQgDgGgEgFQgEgEgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_13.setTransform(-412.5,262.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgLApQgIgDgGgGQgFgGgEgIQgDgIAAgKQAAgIADgJQAEgIAFgGQAGgGAIgDQAJgDAJAAQAJAAAIAEQAHADAHAHIgKAIQgDgFgGgDQgFgDgHAAQgHgBgFADQgGACgEAFQgEAFgDAGQgCAGAAAGQAAAHACAHQADAGAEAEQAEAFAGACQAFADAHAAQAHAAAFgEQAGgDADgFIAKAIQgHAHgHAEQgIADgJAAIgCAAQgIAAgIgDg");
	this.shape_14.setTransform(-421.9,262.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgRApQgIgDgGgGQgGgGgDgIQgEgIAAgKQAAgIAEgJQADgIAGgGQAGgFAIgEQAIgDAJAAQAKAAAIADQAIAEAGAFQAGAGADAIQAEAJAAAIQAAAKgEAIQgDAIgGAGQgGAGgIADQgIADgKAAQgJAAgIgDgAgMgeQgGADgEAEQgEAFgCAGQgDAGAAAGQAAAHADAGQACAGAEAFQAEAEAGADQAGADAGAAQAHAAAGgDQAGgDAEgEQAEgFADgGQACgGAAgHQAAgGgCgGQgDgGgEgFQgEgEgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_15.setTransform(-173.5,242.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgRBCQgIgEgGgFQgGgGgEgJQgDgHAAgKQAAgJADgJQAEgHAGgGQAGgFAIgEQAIgDAJAAIAJABIAJADIAIAFQAEADADAEIAAhCIAMAAIAACHIgMAAIAAgOQgDAEgEADIgIAFIgJADIgJABQgJAAgIgDgAgMgFQgGADgFADQgDAFgCAGQgDAGAAAHQAAAHADAGQACAGADAEQAFAFAGADQAFADAHgBQAHABAGgDQAHgDAEgFQAEgEADgGQADgGAAgHQAAgHgDgGQgDgGgEgFQgEgDgHgDQgGgDgHABQgHgBgFADg");
	this.shape_16.setTransform(-184.6,239.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgQArQgGgCgEgDQgEgDgCgFQgDgEAAgGQAAgLAGgFQAFgFAIgDQAIgDAIgBIARAAIAGAAIAAgDQAAgVgWAAQgOAAgLAKIgHgJQAMgMAXAAQAGAAAGACQAFABAEAEQAFAEACAFQADAGAAAIIAAAkIAAALIABAIIgMAAIAAgGIgBgHQgFAIgHAEQgHADgKAAQgFAAgFgBgAAFABIgMACQgGACgEADQgFAEAAAGQAAAEACADIAFAFQADACADABIAHABQAGAAAEgDQAFgCADgDQAEgEABgFQACgFAAgGIAAgGIgGAAIgMABg");
	this.shape_17.setTransform(-194.8,242.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgFA/IAAhUIALAAIAABUgAgFgvQgDgDAAgDQAAgEADgDQADgBACAAQADAAADABQADADgBAEQABADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_18.setTransform(-201.3,240.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgLApQgIgDgGgGQgFgGgEgIQgDgIAAgKQAAgIADgJQAEgIAFgGQAGgGAIgDQAJgDAJAAQAJAAAIAEQAHADAHAHIgKAIQgDgFgGgDQgFgDgHAAQgHgBgFADQgGACgEAFQgEAFgDAGQgCAGAAAGQAAAHACAHQADAGAEAEQAEAFAGACQAFADAHAAQAHAAAFgEQAGgDADgFIAKAIQgHAHgHAEQgIADgJAAIgCAAQgIAAgIgDg");
	this.shape_19.setTransform(-207.6,242.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AAZArIAAgtQAAgOgFgIQgFgHgNAAIgEAAQgFABgEADQgFAEgDAGQgDAHAAAKIAAArIgMAAIAAhAIgBgJIgBgKIANAAIABAHIAAAGIAEgGIAHgFIAIgDIAIgBQAQAAAIAIQAIAJAAAQIAAA0g");
	this.shape_20.setTransform(-217.3,242);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgcAiQgIgIAAgQIAAg0IANAAIAAAuIABAMQABAFACAEQADADAEADQAEABAHAAIAEgBQAFAAAEgDQAFgEADgGQAEgGAAgMIAAgqIALAAIAABAIABAJIABAKIgNAAIAAgHIAAgGIgBAAIgEAGIgHAFIgIADIgIABQgQAAgIgJg");
	this.shape_21.setTransform(-227.2,242.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AAZArIAAgtQAAgOgFgIQgFgHgNAAIgEAAQgEABgFADQgEAEgEAGQgEAHABAKIAAArIgNAAIAAhAIAAgJIgBgKIANAAIABAHIAAAGIAEgGIAHgFIAJgDIAHgBQAQAAAIAIQAIAJgBAQIAAA0g");
	this.shape_22.setTransform(-237.3,242);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgOApQgIgDgGgGQgGgGgDgIQgDgIgBgKQABgIADgJQADgIAGgGQAGgFAHgEQAIgDAIAAQAKAAAHADQAIAEAFAFQAFAGACAIQADAHAAAJIAAAEIhFAAQABAHACAFQADAGAEAEQAEAEAGACQAFADAFAAQAJAAAIgFQAGgEAEgGIAJAIQgHAJgKAEQgIAEgLAAQgIAAgIgDgAgJgeQgFACgEAEQgEAEgDAFQgCAEAAAGIA3AAQABgMgIgIQgHgHgNAAQgEAAgGACg");
	this.shape_23.setTransform(-247.2,242.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgFBEIAAiHIALAAIAACHg");
	this.shape_24.setTransform(-259.3,239.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgOApQgIgDgGgGQgGgGgDgIQgEgIABgKQgBgIAEgJQADgIAGgGQAFgFAJgEQAHgDAIAAQAJAAAIADQAIAEAFAFQAFAGADAIQACAHAAAJIAAAEIhFAAQAAAHAEAFQABAGAFAEQAEAEAFACQAGADAFAAQAKAAAGgFQAIgEADgGIAKAIQgIAJgJAEQgKAEgKAAQgIAAgIgDgAgJgeQgFACgFAEQgEAEgCAFQgCAEgBAGIA5AAQgBgMgGgIQgIgHgNAAQgEAAgGACg");
	this.shape_25.setTransform(-266.5,242.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgQArQgGgCgEgDQgEgDgCgFQgDgEAAgGQAAgLAGgFQAFgFAIgDQAIgDAIgBIARAAIAGAAIAAgDQAAgVgWAAQgOAAgLAKIgHgJQAMgMAXAAQAGAAAGACQAFABAEAEQAFAEACAFQADAGAAAIIAAAkIAAALIABAIIgMAAIAAgGIgBgHQgFAIgHAEQgHADgKAAQgFAAgFgBgAAFABIgMACQgGACgEADQgFAEAAAGQAAAEACADIAFAFQADACADABIAHABQAGAAAEgDQAFgCADgDQAEgEABgFQACgFAAgGIAAgGIgGAAIgMABg");
	this.shape_26.setTransform(-281.4,242.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgFBEIAAiHIALAAIAACHg");
	this.shape_27.setTransform(-293,239.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgQArQgGgCgEgDQgEgDgCgFQgDgEAAgGQAAgLAGgFQAFgFAIgDQAIgDAIgBIARAAIAGAAIAAgDQAAgVgWAAQgOAAgLAKIgHgJQAMgMAXAAQAGAAAGACQAFABAEAEQAFAEACAFQADAGAAAIIAAAkIAAALIABAIIgMAAIAAgGIgBgHQgFAIgHAEQgHADgKAAQgFAAgFgBgAAFABIgMACQgGACgEADQgFAEAAAGQAAAEACADIAFAFQADACADABIAHABQAGAAAEgDQAFgCADgDQAEgEABgFQACgFAAgGIAAgGIgGAAIgMABg");
	this.shape_28.setTransform(-300.1,242.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AAZA+IAAgvQAAgOgFgHQgFgHgNAAIgEAAQgFACgEADQgEADgEAGQgEAGAAAMIAAArIgMAAIAAhBIAAgJIAAgKIAMAAIAAAHIAAAHIAGgHIAHgEIAIgEIAHgBQAQAAAIAIQAHAJAAAPIAAA2gAgagpIABgHIADgGIAFgFQADgBAEAAIAGABIAGADIAHADIAGABQAEAAABgCIADgHIAIAAIgCAIIgDAFQgCADgDACQgDABgEAAIgGgBIgHgDIgFgDIgGgBQgEAAgCACIgDAHg");
	this.shape_29.setTransform(-309.6,240.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgOApQgIgDgGgGQgGgGgDgIQgDgIAAgKQAAgIADgJQADgIAGgGQAFgFAJgEQAHgDAIAAQAJAAAIADQAIAEAFAFQAFAGADAIQACAHAAAJIAAAEIhFAAQAAAHAEAFQACAGAEAEQAEAEAFACQAGADAFAAQAJAAAIgFQAGgEAEgGIAKAIQgIAJgJAEQgKAEgKAAQgIAAgIgDgAgJgeQgGACgEAEQgEAEgCAFQgDAEAAAGIA5AAQgBgMgGgIQgIgHgNAAQgFAAgFACg");
	this.shape_30.setTransform(-319.5,242.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgRApQgIgEgHgJIAKgHQAFAGAFADQAGAEAGAAIAHgBQADgBADgCQADgBACgDQABgDABgDQgBgHgEgCQgEgDgIgCIgKgDIgGgBIgHgDQgEgDgCgEQgDgEAAgGQAAgGADgFQACgFAFgDQAEgDAGgCQAGgBAFAAQAJAAAHADQAIAEADAIIgKAHQgDgFgEgDQgFgDgGAAIgGAAIgFADIgEAEQgCACABADQAAAGADADQAFADAHACIAMACQAJACAGAFQAFAHAAAJQAAAGgCAFQgDAFgFADQgEAEgGABIgMABQgJAAgIgDg");
	this.shape_31.setTransform(-328.3,242.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgQArQgGgCgEgDQgEgDgCgFQgDgEAAgGQAAgLAGgFQAFgFAIgDQAIgDAIgBIARAAIAGAAIAAgDQAAgVgWAAQgOAAgLAKIgHgJQAMgMAXAAQAGAAAGACQAFABAEAEQAFAEACAFQADAGAAAIIAAAkIAAALIABAIIgMAAIAAgGIgBgHQgFAIgHAEQgHADgKAAQgFAAgFgBgAAFABIgMACQgGACgEADQgFAEAAAGQAAAEACADIAFAFQADACADABIAHABQAGAAAEgDQAFgCADgDQAEgEABgFQACgFAAgGIAAgGIgGAAIgMABg");
	this.shape_32.setTransform(-342.1,242.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgFBEIAAiHIALAAIAACHg");
	this.shape_33.setTransform(-348.6,239.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgQArQgGgCgEgDQgEgDgCgFQgDgEAAgGQAAgLAGgFQAFgFAIgDQAIgDAIgBIARAAIAGAAIAAgDQAAgVgWAAQgOAAgLAKIgHgJQAMgMAXAAQAGAAAGACQAFABAEAEQAFAEACAFQADAGAAAIIAAAkIAAALIABAIIgMAAIAAgGIgBgHQgFAIgHAEQgHADgKAAQgFAAgFgBgAAFABIgMACQgGACgEADQgFAEAAAGQAAAEACADIAFAFQADACADABIAHABQAGAAAEgDQAFgCADgDQAEgEABgFQACgFAAgGIAAgGIgGAAIgMABg");
	this.shape_34.setTransform(-360.7,242.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgWArIAAg5IAAgLIgBgPIAMAAIAAAQIAAAAIADgHIAGgGQACgCAFgCQAFgBAFAAIAJABIgCAMIgHgBQgHAAgFACQgEADgDAEQgDAEgCAFIgCAJIAAAug");
	this.shape_35.setTransform(-367.4,242);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AAEA2QgDAAgCgDQgDgDgCgEQgCgFAAgGIAAg1IgSAAIAAgKIASAAIAAgYIALAAIAAAYIAYAAIAAAKIgYAAIAAAyIAAAHIADAFIAEACIAFAAIAGgBIAGgCIAAALQgGADgKAAIgHgBg");
	this.shape_36.setTransform(-374.2,241);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgRApQgIgEgHgJIAKgHQAFAGAFADQAGAEAGAAIAHgBQADgBADgCQADgBACgDQABgDABgDQgBgHgEgCQgEgDgIgCIgKgDIgGgBIgHgDQgEgDgCgEQgDgEAAgGQAAgGADgFQACgFAFgDQAEgDAGgCQAFgBAGAAQAJAAAHADQAIAEADAIIgKAHQgDgFgEgDQgFgDgGAAIgGAAIgFADIgEAEQgCACABADQAAAGADADQAFADAHACIAMACQAJACAGAFQAFAHAAAJQAAAGgCAFQgDAFgFADQgEAEgGABIgMABQgJAAgIgDg");
	this.shape_37.setTransform(-380.9,242.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgQArQgGgCgEgDQgEgDgCgFQgDgEAAgGQAAgLAGgFQAFgFAIgDQAIgDAIgBIARAAIAGAAIAAgDQAAgVgWAAQgOAAgLAKIgHgJQAMgMAXAAQAGAAAGACQAFABAEAEQAFAEACAFQADAGAAAIIAAAkIAAALIABAIIgMAAIAAgGIgBgHQgFAIgHAEQgHADgKAAQgFAAgFgBgAAFABIgMACQgGACgEADQgFAEAAAGQAAAEACADIAFAFQADACADABIAHABQAGAAAEgDQAFgCADgDQAEgEABgFQACgFAAgGIAAgGIgGAAIgMABg");
	this.shape_38.setTransform(-389.7,242.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgXArIAAg5IAAgLIAAgPIAMAAIAAAQIAAAAIADgHIAHgGQACgCAEgCQAEgBAGAAIAJABIgDAMIgGgBQgHAAgFACQgEADgDAEQgDAEgCAFIgBAJIAAAug");
	this.shape_39.setTransform(-396.4,242);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgWArIAAg5IAAgLIgBgPIALAAIAAAQIABAAIADgHIAGgGQACgCAFgCQAFgBAFAAIAJABIgCAMIgIgBQgGAAgFACQgEADgDAEQgDAEgCAFIgCAJIAAAug");
	this.shape_40.setTransform(-402.4,242);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AAvBAIgOgiIhBAAIgOAiIgPAAIA4h/IALAAIA4B/gAgbASIA3AAIgchCg");
	this.shape_41.setTransform(-412.3,239.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AAAAKIgQAWIgJgGIARgWIgagHIAFgLIAYAJIAAgaIALAAIAAAaIAYgJIAFALIgaAHIAQAWIgIAGg");
	this.shape_42.setTransform(-422.5,236.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AAWAsIAAgyQAAgKgGgGQgEgGgKAAQgKAAgGAIQgHAHAAANIAAAsIgQAAIAAhVIAQAAIAAAOIABAAQADgHAIgFQAHgEAJAAQAOAAAJAJQAIAJAAAOIAAA3g");
	this.shape_43.setTransform(-225.1,193.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgfA0QgOgNAAgTQAAgTAOgMQANgNASAAQASAAAOANQANAMAAATQAAATgNANQgNANgTAAQgSAAgNgNgAgUAAQgHAHAAANQAAANAHAJQAJAIALAAQAMAAAJgIQAHgJAAgNQAAgNgIgHQgHgJgNAAQgLAAgJAJgAgLgmIASgaIAXAAIgbAag");
	this.shape_44.setTransform(-235.4,191.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgHBAIAAhVIAPAAIAABVgAgIgqQgDgEAAgFQAAgFAEgDQADgEAEAAQAFAAADAEQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_45.setTransform(-242.9,191.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgZAgQgNgMAAgUQAAgTANgMQAMgNATAAQAUAAANAOIgMALQgKgJgMAAQgLAAgHAIQgHAIAAANQAAAMAHAIQAIAJALAAQAMAAAJgKIALAMQgLANgVAAQgTAAgMgNg");
	this.shape_46.setTransform(-249.1,193.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgcAmQgIgHgBgMQAAgNAMgHQALgIAXAAIANAAIAAgDQAAgJgGgFQgGgFgJAAQgGAAgFACQgFACgHAGIgKgKQAOgNATAAQASAAAIAJQAKAIgBALIAAAtIABAOIgOAAIAAgNIgBAAQgKAPgTAAQgNAAgIgHgAgUASQAAAOASAAQALAAAGgHQAHgGAAgNIAAgEIgKAAQggAAAAAQg");
	this.shape_47.setTransform(-258.6,193.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgqAyIALgOQANAOARAAQAOAAAIgHQAIgIAAgOIAAgNIgBAAQgEAHgIAEQgIAEgIAAQgTAAgMgMQgNgLAAgTQAAgUANgNQAMgMATAAQAIAAAIAEQAIAEAEAGIABAAIAAgMIAQAAIAABUQAAASgMANQgNAMgVAAQgZAAgQgPgAgTgpQgHAIAAAOQAAAMAHAHQAIAIAMAAQANAAAHgIQAIgGAAgNQAAgOgIgIQgIgIgMAAQgMAAgIAIg");
	this.shape_48.setTransform(-268.9,195.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgeAhQgMgNAAgUQAAgSAMgNQANgNASAAQAUAAAKAMQAMANAAAVIAAAEIhEAAQABALAIAHQAIAHALAAQANAAALgNIAMAJQgOASgYAAQgSAAgNgMgAgRgXQgIAIAAAJIAzAAQgBgMgGgGQgHgHgLAAQgLAAgHAIg");
	this.shape_49.setTransform(-279.1,193.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgIArIgihVIATAAIAYBBIAZhBIARAAIgiBVg");
	this.shape_50.setTransform(-288.6,193.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgcAmQgIgHAAgMQAAgNALgHQALgIAXAAIAMAAIAAgDQABgJgGgFQgGgFgJAAQgGAAgFACQgFACgHAGIgKgKQAOgNATAAQARAAAJAJQAKAIgBALIAAAtIABAOIgOAAIgBgNIAAAAQgKAPgTAAQgNAAgIgHgAgUASQAAAOASAAQALAAAGgHQAHgGgBgNIAAgEIgJAAQggAAAAAQg");
	this.shape_51.setTransform(-297.9,193.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AAVAsIAAgyQAAgKgEgGQgGgGgJAAQgKAAgHAIQgFAHgBANIAAAsIgQAAIAAhVIAQAAIAAAOIABAAQAEgHAHgFQAHgEAJAAQAOAAAIAJQAJAJAAAOIAAA3g");
	this.shape_52.setTransform(-307.5,193.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgdAhQgNgNAAgUQAAgSANgNQAMgNASAAQAUAAALAMQALANAAAVIAAAEIhEAAQAAALAJAHQAIAHAMAAQAMAAAKgNIANAJQgOASgYAAQgSAAgMgMgAgSgXQgGAIgBAJIAyAAQAAgMgHgGQgFgHgMAAQgLAAgIAIg");
	this.shape_53.setTransform(-322.5,193.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgfA4QgNgMAAgTQAAgVANgLQAMgMATAAQAIAAAIADQAIAFAEAGIABAAIAAg/IAQAAIAACHIgQAAIAAgMIgBAAQgEAGgIAEQgIAEgIAAQgTAAgMgNgAgTADQgHAIAAAOQAAANAHAIQAIAIAMAAQAMAAAIgIQAIgIAAgNQAAgOgIgIQgIgIgMAAQgMAAgIAIg");
	this.shape_54.setTransform(-333.2,191.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AghAeIANgKQAJAKALAAQAGAAAFgDQAGgDAAgFQAAgJgRgDQgPgDgHgFQgHgFAAgLQAAgNAKgHQAJgHAMAAQAVAAAIAOIgMAKQgHgJgLAAQgFAAgEADQgEADAAAEQAAAJAQADQAQADAHAFQAHAGAAALQAAANgKAHQgKAHgOAAQgWAAgLgPg");
	this.shape_55.setTransform(-347.6,193.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgcAmQgJgHAAgMQAAgNAMgHQALgIAYAAIALAAIAAgDQAAgJgFgFQgGgFgJAAQgGAAgFACQgFACgHAGIgKgKQAOgNATAAQASAAAJAJQAIAIABALIAAAtIABAOIgPAAIgBgNIAAAAQgKAPgTAAQgNAAgIgHgAgUASQAAAOASAAQAKAAAHgHQAGgGAAgNIAAgEIgJAAQggAAAAAQg");
	this.shape_56.setTransform(-356.3,193.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AAWBEIAAgzQAAgKgGgGQgEgEgKgBQgKAAgGAHQgHAHAAAOIAAAsIgQAAIAAiHIAQAAIAABAIABAAQADgHAIgFQAHgDAJAAQAOAAAJAIQAIAJAAANIAAA4g");
	this.shape_57.setTransform(-365.8,191.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgZAgQgNgMAAgUQAAgTANgMQAMgNATAAQAUAAANAOIgMALQgKgJgMAAQgLAAgHAIQgHAIAAANQAAAMAHAIQAIAJALAAQAMAAAJgKIALAMQgLANgVAAQgTAAgMgNg");
	this.shape_58.setTransform(-374.9,193.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgeAhQgMgNAAgUQAAgSAMgNQANgNATAAQASAAALAMQAMANAAAVIAAAEIhDAAQAAALAIAHQAIAHALAAQANAAALgNIAMAJQgOASgYAAQgSAAgNgMgAgRgXQgIAIABAJIAyAAQgBgMgGgGQgHgHgLAAQgLAAgHAIg");
	this.shape_59.setTransform(-384.5,193.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgHBEIAAiHIAPAAIAACHg");
	this.shape_60.setTransform(-391.7,191.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgKBFIAAhGIgTAAIAAgOIATAAIAAgUQgBgRAIgIQAFgIAPAAQAHAAAGABIgCAPQgEgCgFAAQgHAAgEAEQgDAEAAAKIAAAVIATAAIAAAOIgTAAIAABGg");
	this.shape_61.setTransform(-396.8,191.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AghAeIANgKQAJAKALAAQAGAAAFgDQAGgDAAgFQAAgJgRgDQgPgDgHgFQgHgFAAgLQAAgNAKgHQAJgHAMAAQAVAAAIAOIgMAKQgHgJgLAAQgFAAgEADQgEADAAAEQAAAJAQADQAQADAHAFQAHAGAAALQAAANgKAHQgKAHgOAAQgWAAgLgPg");
	this.shape_62.setTransform(-409,193.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgcAmQgIgHAAgMQAAgNALgHQALgIAXAAIAMAAIAAgDQABgJgGgFQgGgFgJAAQgGAAgFACQgFACgHAGIgKgKQAOgNATAAQARAAAJAJQAKAIgBALIAAAtIABAOIgOAAIgBgNIAAAAQgKAPgTAAQgNAAgIgHgAgUASQAAAOASAAQALAAAGgHQAHgGgBgNIAAgEIgJAAQggAAAAAQg");
	this.shape_63.setTransform(-417.6,193.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgHBEIAAiHIAPAAIAACHg");
	this.shape_64.setTransform(-424.3,191.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AAWAsIAAgyQgBgKgFgGQgEgGgKAAQgKAAgHAIQgFAHAAANIAAAsIgRAAIAAhVIARAAIAAAOIAAAAQAEgHAHgFQAIgEAIAAQAOAAAIAJQAJAJAAAOIAAA3g");
	this.shape_65.setTransform(-128.1,168.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgdAhQgNgNAAgUQAAgSANgNQAMgNASAAQAUAAALAMQALANAAAVIAAAEIhEAAQAAALAJAHQAJAHAKAAQANAAAKgNIANAJQgOASgYAAQgSAAgMgMgAgSgXQgHAIAAAJIAzAAQgBgMgHgGQgFgHgMAAQgLAAgIAIg");
	this.shape_66.setTransform(-138.1,168.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgZAgQgNgMAAgUQAAgTANgMQAMgNATAAQAUAAANAOIgMALQgKgJgMAAQgLAAgHAIQgHAIAAANQAAAMAHAIQAIAJALAAQAMAAAJgKIALAMQgLANgVAAQgTAAgMgNg");
	this.shape_67.setTransform(-152.1,168.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgHBAIAAhVIAPAAIAABVgAgIgqQgDgEAAgFQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_68.setTransform(-158.9,166.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgHBEIAAiHIAPAAIAACHg");
	this.shape_69.setTransform(-163.2,166.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgZAgQgNgMAAgUQAAgTANgMQAMgNATAAQAUAAANAOIgMALQgKgJgMAAQgLAAgHAIQgHAIAAANQAAAMAHAIQAIAJALAAQAMAAAJgKIALAMQgLANgVAAQgTAAgMgNg");
	this.shape_70.setTransform(-169.4,168.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgiArIAAgPIAvg4IguAAIAAgOIBCAAIAAAPIgwA4IAyAAIAAAOg");
	this.shape_71.setTransform(-183.3,168.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgcAmQgJgHAAgMQAAgNAMgHQAMgIAWAAIANAAIAAgDQgBgJgFgFQgGgFgJAAQgGAAgFACQgFACgHAGIgKgKQAOgNATAAQASAAAIAJQAJAIAAALIAAAtIACAOIgPAAIAAgNIgBAAQgKAPgTAAQgNAAgIgHgAgUASQAAAOASAAQAKAAAHgHQAGgGABgNIAAgEIgKAAQggAAAAAQg");
	this.shape_72.setTransform(-192.2,168.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AAWBEIAAgzQgBgKgFgGQgEgEgKAAQgKAAgGAGQgHAIABANIAAAsIgRAAIAAiHIARAAIAABAIAAAAQAEgHAHgEQAHgFAJAAQAOAAAJAJQAIAJAAAOIAAA3g");
	this.shape_73.setTransform(-201.8,166.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgOAWIAMgrIARAAIgPArg");
	this.shape_74.setTransform(-214.4,173.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AghAeIANgKQAJAKALAAQAGAAAFgDQAGgDAAgFQAAgJgRgDQgPgDgHgFQgHgFAAgLQAAgNAKgHQAJgHAMAAQAVAAAIAOIgMAKQgHgJgLAAQgFAAgEADQgEADAAAEQAAAJAQADQAQADAHAFQAHAGAAALQAAANgKAHQgKAHgOAAQgWAAgLgPg");
	this.shape_75.setTransform(-220.9,168.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AgfAgQgOgNAAgTQAAgSAOgNQANgNASAAQASAAAOANQANANAAASQAAATgNANQgNANgTAAQgSAAgNgNgAgUgUQgHAIAAAMQAAANAHAJQAJAIALAAQANAAAIgIQAHgJAAgNQAAgMgIgIQgIgJgMAAQgLAAgJAJg");
	this.shape_76.setTransform(-230.1,168.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgfA5QgNgNAAgUQAAgTANgMQAMgNATAAQAIAAAIAFQAIAEAEAGIABAAIAAg/IAQAAIAACHIgQAAIAAgMIgBAAQgEAGgIAFQgIADgIAAQgTAAgMgMgAgTADQgHAIAAANQAAANAHAJQAIAIAMAAQAMAAAIgIQAIgJAAgNQAAgNgIgIQgIgHgMAAQgMAAgIAHg");
	this.shape_77.setTransform(-241.2,166.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgcAmQgJgHAAgMQAAgNAMgHQAMgIAWAAIANAAIAAgDQAAgJgGgFQgGgFgJAAQgGAAgFACQgFACgHAGIgKgKQAOgNATAAQASAAAIAJQAJAIAAALIAAAtIABAOIgOAAIAAgNIgBAAQgKAPgTAAQgNAAgIgHgAgUASQAAAOASAAQALAAAGgHQAHgGAAgNIAAgEIgKAAQggAAAAAQg");
	this.shape_78.setTransform(-251.3,168.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgHBAIAAhVIAPAAIAABVgAgIgqQgDgEAAgFQAAgFAEgEQADgDAEAAQAFAAADADQAEAEAAAFQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_79.setTransform(-258,166.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AgZAgQgNgMAAgUQAAgTANgMQAMgNATAAQAUAAANAOIgMALQgKgJgMAAQgLAAgHAIQgHAIAAANQAAAMAHAIQAIAJALAAQAMAAAJgKIALAMQgLANgVAAQgTAAgMgNg");
	this.shape_80.setTransform(-264.2,168.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AAVAsIAAgyQAAgKgEgGQgGgGgJAAQgKAAgHAIQgFAHgBANIAAAsIgQAAIAAhVIAQAAIAAAOIABAAQAEgHAHgFQAIgEAIAAQAOAAAIAJQAJAJAAAOIAAA3g");
	this.shape_81.setTransform(-273.8,168.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgdAjQgIgJAAgOIAAg3IAQAAIAAAzQAAAJAGAGQAFAGAJAAQAKAAAGgIQAHgHgBgNIAAgsIARAAIAABVIgRAAIAAgNQgDAHgHAEQgJAEgIAAQgOAAgJgJg");
	this.shape_82.setTransform(-283.8,168.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AAWAsIAAgyQAAgKgGgGQgEgGgKAAQgKAAgGAIQgHAHAAANIAAAsIgQAAIAAhVIAQAAIAAAOIABAAQADgHAIgFQAHgEAJAAQAOAAAJAJQAIAJAAAOIAAA3g");
	this.shape_83.setTransform(-293.8,168.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgeAhQgMgNAAgUQAAgSAMgNQANgNATAAQASAAAMAMQALANAAAVIAAAEIhDAAQgBALAJAHQAJAHALAAQANAAAJgNIANAJQgOASgYAAQgSAAgNgMgAgSgXQgGAIAAAJIAxAAQAAgMgHgGQgFgHgMAAQgLAAgIAIg");
	this.shape_84.setTransform(-303.8,168.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AghAeIANgKQAJAKALAAQAGAAAFgDQAGgDAAgFQAAgJgRgDQgPgDgHgFQgHgFAAgLQAAgNAKgHQAJgHAMAAQAVAAAIAOIgMAKQgHgJgLAAQgFAAgEADQgEADAAAEQAAAJAQADQAQADAHAFQAHAGAAALQAAANgKAHQgKAHgOAAQgWAAgLgPg");
	this.shape_85.setTransform(-318,168.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgcA6QgIgHAAgMQAAgNALgIQAMgIAWAAIAMAAIAAgDQABgIgGgFQgGgFgJAAQgGAAgFACQgFACgHAGIgKgKQAOgNATAAQARAAAJAJQAKAIgBAKIAAAuIABAOIgOAAIAAgNIgBAAQgKAPgTAAQgNAAgIgHgAgUAmQAAAOASAAQALAAAGgHQAHgGgBgNIAAgEIgJAAQggAAAAAQgAgJgmIARgaIAXAAIgaAag");
	this.shape_86.setTransform(-326.6,166.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AAwAsIAAgwQABgMgFgGQgFgGgJAAQgLAAgFAHQgFAHAAALIAAAvIgQAAIAAgtQAAgPgEgGQgFgGgJAAQgKAAgGAIQgGAIAAAMIAAAsIgQAAIAAhVIAPAAIAAAOQADgHAIgEQAHgFAKAAQASAAAHAQQAEgHAIgEQAHgFAIAAQAgAAAAAlIAAAyg");
	this.shape_87.setTransform(-338.9,168.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgYAsIAAhVIARAAIAAAOIAAAAQADgHAGgEQAHgFAJAAIAHABIgBASIgIgBQgMAAgFAGQgGAHAAAMIAAAsg");
	this.shape_88.setTransform(-354.5,168.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgdAhQgNgNAAgUQAAgSANgNQAMgNASAAQAUAAAKAMQAMANAAAVIAAAEIhEAAQAAALAJAHQAIAHALAAQANAAALgNIAMAJQgOASgYAAQgSAAgMgMgAgRgXQgIAIAAAJIAzAAQgBgMgHgGQgGgHgLAAQgLAAgHAIg");
	this.shape_89.setTransform(-363.2,168.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AgIArIgihVIATAAIAYBBIAZhBIARAAIgiBVg");
	this.shape_90.setTransform(-372.7,168.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgcAmQgJgHAAgMQAAgNAMgHQAMgIAXAAIAMAAIAAgDQgBgJgFgFQgGgFgJAAQgGAAgFACQgFACgHAGIgKgKQAOgNATAAQARAAAKAJQAIAIABALIAAAtIABAOIgPAAIgBgNIAAAAQgKAPgTAAQgNAAgIgHgAgUASQAAAOASAAQALAAAGgHQAGgGABgNIAAgEIgKAAQggAAAAAQg");
	this.shape_91.setTransform(-387,168.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgYAsIAAhVIARAAIAAAOIAAAAQADgHAGgEQAHgFAJAAIAHABIgBASIgIgBQgMAAgFAGQgGAHAAAMIAAAsg");
	this.shape_92.setTransform(-394.5,168.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgcAmQgJgHABgMQgBgNAMgHQALgIAYAAIALAAIAAgDQAAgJgFgFQgGgFgJAAQgGAAgFACQgFACgHAGIgKgKQAOgNATAAQASAAAJAJQAIAIABALIAAAtIABAOIgPAAIgBgNIAAAAQgKAPgTAAQgNAAgIgHgAgUASQAAAOASAAQAKAAAHgHQAGgGAAgNIAAgEIgJAAQggAAAAAQg");
	this.shape_93.setTransform(-403,168.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AgqBAIAAh/IAtAAQASAAALAKQALAJAAARQAAARgLAJQgLAJgSAAIgcAAIAAA4gAgZgHIAYAAQAZAAAAgUQAAgVgZAAIgYAAg");
	this.shape_94.setTransform(-412.2,166.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AAAAMIgPAVIgKgHIAQgVIgagIIAEgLIAaAIIAAgaIALAAIAAAaIAagIIADALIgZAIIAQAVIgKAHg");
	this.shape_95.setTransform(-422.3,163.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.mc_cont},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-494,-313.2,1035.1,609.1), null);


// stage content:
(lib.pag16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var mc = this;
		var arrGoodAnswers = [false, false, false, false, false, false, false, false, false, false];
		var goodAnswer = 0;
		var obj;
		var actSignal = 0;
		var slidePosition = 0;
		var isScrolling;
		var totalScrollins = 3;
		var totalDragsAndDrops = 10;
		var dragsActivos = 0;
		var local_x;
		var local_y;
		var obj;
		
		ini();
		
		function ini() {
		
			controlDragAndDrop();
		
			mc.mc_content.inity = mc.mc_content.y;
		
			mc.mc_content.btn_back.alpha = 0;
			mc.mc_content.btn_send.alpha = 0;
		
			mc.mc_content.mc_feedback.btn_start.addEventListener("mousedown", closeIntro);
			
			//mc.mc_content.btn_send.addEventListener("mousedown", watchFeedback);
			mc.mc_content.btn_next.addEventListener("mousedown", nextContent);
		
		
		}
		
		function closeIntro(evt) {
			createjs.Sound.stop();
			mc.mc_content.mc_feedback.btn_start.removeEventListener("mousedown", closeIntro);
			createjs.Tween.get(mc.mc_content.mc_feedback).to({
				alpha: 0
			}, 150);
		}
		
		function controlDragAndDrop() {
			for (var i = 0; i < totalDragsAndDrops; i++) {
				mc.mc_content.mc_slide["mc_obj" + i].numbersito = i;
			}
			
			mc.mc_content.mc_cards.inix = mc.mc_content.mc_cards.x;
			mc.mc_content.mc_cards.iniy = mc.mc_content.mc_cards.y;
			mc.mc_content.mc_cards.cursor = "pointer";
			mc.mc_content.mc_cards.addEventListener("mousedown", onDrag);
		
			mc.mc_content.addEventListener("pressmove", mover_local);
			mc.mc_content.addEventListener("mousedown", mover_local);
		}
		
		function mover_local(evt) {
			local_x = evt.localX;
			local_y = evt.localY;
		}
		
		function onDrag(evt) {
			createjs.Sound.stop();
			obj = evt.currentTarget;
			
			createjs.Tween.get(obj).to({scaleX: 0.3, scaleY: 0.3}, 100, createjs.Ease.linear);
			evt.currentTarget.addEventListener("pressup", offDrag);
		
			mc.addEventListener("tick", actualizar);
			mc.setChildIndex(evt.currentTarget, mc.numChildren - 1);
		}
		
		function actualizar(evt) {
			if (obj) {
				obj.x = local_x;
				obj.y = local_y;
			} else {
				mc.removeEventListener("tick", actualizar);
			}
		}
		
		function offDrag(evt) {
			evt.currentTarget.removeEventListener("pressup", offDrag);
		
			var collision;
			var isMatch = false;
			
			for (var i = 0; i < totalDragsAndDrops; i++) {
		
				collision = ndgmr.checkRectCollision(obj, mc.mc_content.mc_slide["mc_obj" + i]);		
				
				if (collision) {
					if (obj.currentFrame == mc.mc_content.mc_slide["mc_obj" + i].numbersito) {
						isMatch = true;
					}
				}
			}
			
			
			if (isMatch) {
				mc.mc_content.mc_slide["mc_obj" + dragsActivos].gotoAndStop(1);
				
				dragsActivos++;
				obj.gotoAndStop(dragsActivos);
				
				createjs.Tween.get(obj).to({scaleX: 1.0, scaleY: 1.0}, 100, createjs.Ease.linear);
				
				resetPosition(obj)
			
			} else {
				createjs.Tween.get(obj).to({scaleX: 1.0, scaleY: 1.0}, 100, createjs.Ease.linear);
				resetPosition(obj)
			}
			
		
			obj = undefined;
			
			if(dragsActivos == totalDragsAndDrops){
				mc.mc_content.mc_cards.alpha = 0;
				setTimeout(function(){
						mc.mc_content.mc_feedback.gotoAndStop(3);
						createjs.Tween.get(mc.mc_content.mc_feedback).to({alpha:1}, 200);
						mc.mc_content.mc_feedback.btn_finish.addEventListener("mousedown", finish);
					},6100);
				
			}
		}
		
		function resetPosition(obj){
			obj.x = obj.inix;
			obj.y = obj.iniy;
		}
		
		function nextContent(evt) {
			createjs.Sound.stop();
			if (slidePosition < totalScrollins) slidePosition++;
			if (slidePosition === totalScrollins) {
				mc.mc_content.btn_next.alpha = 0;
			}
			if (!isScrolling) {
				isScrolling = true;
				mc.mc_content.btn_next.mouseEnabled = false;
				createjs.Tween.get(mc.mc_content.mc_slide)
					.to({
						y: mc.mc_content.mc_slide.y - 525
					}, 500)
					.call(function () {
						isScrolling = false;
						mc.mc_content.btn_next.mouseEnabled = true;
					});
			}
		
			mc.mc_content.btn_back.alpha = 1;
			mc.mc_content.btn_back.mouseEnabled = true;
			mc.mc_content.btn_back.addEventListener("mousedown", backContent);
			console.log(slidePosition);
		
		}
		
		function backContent(evt) {
			createjs.Sound.stop();
			if (slidePosition > 0) slidePosition--;
			if (slidePosition == 0) {
				mc.mc_content.btn_back.alpha = 0;
			}
			mc.mc_content.btn_next.mouseEnabled = true;
		
			if (!isScrolling) {
				isScrolling = true;
				mc.mc_content.btn_back.mouseEnabled = false;
				createjs.Tween.get(mc.mc_content.mc_slide)
					.to({
						y: mc.mc_content.mc_slide.y + 525
					}, 500)
					.call(function () {
		
						isScrolling = false;
						//mc.mc_content.btn_back.addEventListener("mousedown", backContent);
						mc.mc_content.btn_back.mouseEnabled = true;
					});
			}
		
			mc.mc_content.btn_next.alpha = 1;
		}
		
		function finish(evt) {
			mc.mc_content.mc_feedback.btn_finish.removeEventListener("mousedown", finish);
			finTema(true, estructura.actTemaTecuidas);
			mc_contenido.mc_vacio.removeAllChildren();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// content
	this.mc_content = new lib.Símbolo1();
	this.mc_content.parent = this;
	this.mc_content.setTransform(739.2,436.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_content).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(885.1,482.9,1035.1,1799.8);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/pag16_atlas_.png", id:"pag16_atlas_"},
		{src:"sounds/scrollgActivity.mp3", id:"scrollgActivity"},
		{src:"sounds/signal1.mp3", id:"signal1"},
		{src:"sounds/signal10.mp3", id:"signal10"},
		{src:"sounds/signal2.mp3", id:"signal2"},
		{src:"sounds/signal3.mp3", id:"signal3"},
		{src:"sounds/signal4.mp3", id:"signal4"},
		{src:"sounds/signal5.mp3", id:"signal5"},
		{src:"sounds/signal6.mp3", id:"signal6"},
		{src:"sounds/signal7.mp3", id:"signal7"},
		{src:"sounds/signal8.mp3", id:"signal8"},
		{src:"sounds/signal9.mp3", id:"signal9"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;