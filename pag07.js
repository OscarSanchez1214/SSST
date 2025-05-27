(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"pag07_atlas_", frames: [[1768,538,176,123],[1590,413,176,123],[548,575,176,123],[356,621,176,123],[726,575,176,123],[1438,663,176,123],[1733,163,176,123],[0,746,176,123],[178,746,176,123],[1590,538,176,123],[0,621,176,123],[1768,413,176,123],[178,621,176,123],[356,746,176,123],[904,633,176,123],[1616,663,176,123],[534,700,176,123],[1082,633,176,123],[712,700,176,123],[1260,633,176,123],[1794,663,176,123],[1733,288,176,123],[1068,883,176,123],[1733,0,225,161],[1020,0,711,356],[890,758,176,123],[1068,758,176,123],[1246,758,176,123],[1424,788,176,123],[712,825,176,123],[178,871,176,123],[1602,788,176,123],[0,871,176,123],[356,871,176,123],[890,883,176,123],[1780,788,176,123],[534,950,148,47],[0,575,546,44],[1020,358,568,273],[1780,913,172,47],[1246,883,176,123],[534,825,176,123],[0,0,1018,573],[1602,913,176,123],[1424,913,176,123]]}
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
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits11 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits12 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits13 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits14 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits15 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits16 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits17 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits18 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits19 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits20 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits21 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits22 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits23 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits24 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits25 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits26 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits27 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits28 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits29 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits30 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits31 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits32 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits33 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits34 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits35 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits36 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits37 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits38 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits39 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits40 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits41 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits42 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits43 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits44 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits45 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits46 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits7 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits8 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits9 = function() {
	this.spriteSheet = ss["pag07_atlas_"];
	this.gotoAndStop(44);
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


(lib.Símbolo28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAJQgIAKgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(49.7,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBAIgMgfIg8AAIgOAfIgUAAIA5iAIAPAAIA3CAgAgYARIAwAAIgYg6IAAAAg");
	this.shape_1.setTransform(37.1,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAzQgOgOAAgVIAAhRIARAAIAABOQAAAGADAGQABAGADAGQAEAGAGADQAHAEAIAAQAJAAAGgEQAHgDAEgGQADgFABgGQACgGABgHIAAhOIARAAIAABRQAAAUgOAPQgOAPgWAAQgVAAgOgPg");
	this.shape_2.setTransform(24.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBAIhGhoIgBAAIAABoIgRAAIAAiAIAXAAIBGBqIABAAIAAhqIARAAIAACAg");
	this.shape_3.setTransform(10.6,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_4.setTransform(0.8,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBAIAAhvIgpAAIAAgRIBjAAIAAARIgpAAIAABvg");
	this.shape_5.setTransform(-6.9,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBAIhHhoIAAAAIAABoIgSAAIAAiAIAXAAIBGBqIAAAAIAAhqIASAAIAACAg");
	this.shape_6.setTransform(-19.4,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape_7.setTransform(-34.2,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgFgMABgMQAAgdASgTQATgUAcAAQAOAAAMAFQAMAGAIAJIgOALQgNgPgTAAQgUAAgOAPQgNAPAAAWQAAAVANAPQANAOAVAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_8.setTransform(-48,-0.3);

	this.instance = new lib.Mapadebits46();
	this.instance.parent = this;
	this.instance.setTransform(-86,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo28, new cjs.Rectangle(-86,-23.5,172,47), null);


(lib.Símbolo26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits44();
	this.instance.parent = this;
	this.instance.setTransform(-273,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo26, new cjs.Rectangle(-273,-22,546,44), null);


(lib.Símbolo24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAJQgIAKgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(32.6,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBAIgOgfIg8AAIgMAfIgVAAIA5iAIAPAAIA3CAgAgYARIAwAAIgXg6IgBAAg");
	this.shape_1.setTransform(18.2,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_2.setTransform(7.5,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgEgMgBgMQAAgdATgTQASgUAeAAQAOAAAMAFQALAGAIAJIgPALQgLgPgUAAQgUAAgNAPQgOAPAAAWQAAAVAOAPQANAOAUAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_3.setTransform(-3,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_4.setTransform(-14,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhBAIhGhoIgBAAIAABoIgRAAIAAiAIAXAAIBGBqIABAAIAAhqIARAAIAACAg");
	this.shape_5.setTransform(-25.5,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_6.setTransform(-37.1,-0.3);

	this.instance = new lib.Mapadebits43();
	this.instance.parent = this;
	this.instance.setTransform(-74,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo24, new cjs.Rectangle(-74,-23.5,148,47), null);


(lib.Símbolo22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits41();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.8,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.2,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits39();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.8,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.2,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits37();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.9,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.3,-49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits35();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits36();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.9,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.3,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits33();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.9,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg8AAgqgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.3,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits39();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits40();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.8,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.2,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits29();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.8,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.2,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits27();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.8,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.2,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits25();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits26();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.9,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.3,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits23();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits24();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.9,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg8AAgqgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.3,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits21();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.8,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.2,-49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits19();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.8,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.2,-49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits17();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.8,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.2,-49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits15();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits16();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.9,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.3,-49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits13();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits14();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.9,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg8AAgqgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.3,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits11();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.8,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.2,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits9();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.8,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.2,-49.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits5();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.9,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.3,-49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.Mapadebits2();
	this.instance.parent = this;
	this.instance.setTransform(-88,-62);

	this.instance_1 = new lib.Mapadebits4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape.setTransform(72.9,-50.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgMB4Qg8AAgqgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_1.setTransform(72.3,-49.6);

	this.instance_2 = new lib.Mapadebits3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-88,-62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-62,176,123);


(lib.Path_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AhsCcQgsgdAFhXQAFhPAlg4QAig0A6gPQA4gPAvAfQAvAfAKA7QAJA5giA0QgmA5hHAkQgrAWgiAAQgZAAgTgMg");
	this.shape.setTransform(14.8,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_66, new cjs.Rectangle(0,0,29.7,33.6), null);


(lib.Path_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AhfCjQgugZgDhXQgChOAgg8QAeg3A3gUQA3gUAyAbQAyAbAOA5QAOA6gdA1QggA8hEAqQguAdglAAQgUAAgRgIg");
	this.shape.setTransform(14.5,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_65, new cjs.Rectangle(0,0,29,34.3), null);


(lib.Path_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AgEC3QhbgXhPhMQhVhTARhFQAShHByghQBqgeBZAXQBTAUAuBEQAtBEgTBKQgSBLhIAnQgvAZg0AAQgbAAgcgHg");
	this.shape.setTransform(24.5,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_64, new cjs.Rectangle(0,0,49.2,37.9), null);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AhUC0QhTgVgthDQguhEAThKQAThMBIgmQBHgnBSAVQBbAWBPBNQBVBSgRBGQgSBHhyAhQg8ARg3AAQgpAAgngKg");
	this.shape.setTransform(24.5,19);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_63, new cjs.Rectangle(0,0,49.1,38), null);


(lib.Path_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AAECiQg6gJgngxQgrg1gMhNQgOhWApghQApgiBQAfQBKAdArA1QAnAwgDA6QgDA8gsAjQgkAdgsAAQgLAAgLgCg");
	this.shape.setTransform(15.3,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_62, new cjs.Rectangle(0,-0.1,30.6,32.7), null);


(lib.Path_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AgaCRQhFgrggg+Qgeg3APg7QAQg7AzgbQAzgbA4AVQA5AVAeA4QAgA+gDBRQgEBYgwAaQgRAIgTAAQgmAAgwgfg");
	this.shape.setTransform(14.7,17.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_61, new cjs.Rectangle(0,0,29.6,35.2), null);


(lib.Path_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AAjDEQhmgRhFg4Qg/g0gLhMQgMhNAvg5QAvg5BOgEQBMgDA/AzQBFA4AlBhQAnBqgrA2QghAohGAAQgYAAgdgFg");
	this.shape.setTransform(21.3,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_60, new cjs.Rectangle(0,0,42.8,40.2), null);


(lib.Path_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("Ag8CvQhQhDgehVQgbhLAehIQAehHBGgZQBFgZBEAlQBEAlAbBMQAeBUgTBmQgUBvhCAYQgQAFgRAAQg1AAhAg4g");
	this.shape.setTransform(18.3,23);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_59, new cjs.Rectangle(-0.1,-0.1,36.8,46.3), null);


(lib.Path_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AijC8Qg1gsAVhwQAShmA6hEQA1g+BMgKQBMgKA5AwQA4AvADBOQACBNg0A+Qg6BEhhAjQgxARgmAAQgsAAgdgYg");
	this.shape.setTransform(20.1,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_58, new cjs.Rectangle(0,0.1,40.3,42.5), null);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AhZCTQgvgfgKg6QgJg6Aig0QAmg5BHgkQBMgmAsAdQAtAdgFBWQgFBPglA5QgiAzg6APQgRAFgSAAQgkAAgggVg");
	this.shape.setTransform(14.8,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_57, new cjs.Rectangle(0,0,29.7,33.6), null);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AhLCcQgygagOg6QgOg6Adg1QAgg8BEgqQBJguAuAaQAvAZADBWQACBPggA8QgdA2g4AUQgYAIgWAAQgfAAgcgPg");
	this.shape.setTransform(14.4,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_56, new cjs.Rectangle(0,0,29,34.3), null);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AAACUQhJgcgrg1QgngwADg6QADg8AsgjQAsgkA7AJQA5AJAoAxQArA0AMBOQANBWgpAhQgVARggAAQgeAAgngPg");
	this.shape.setTransform(15.3,16.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_55, new cjs.Rectangle(0,0,30.7,32.7), null);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AgfCnQg5gVgeg4Qggg+ADhQQAEhZAwgZQAwgaBKAwQBFAsAgA9QAeA4gPA7QgQA6gzAbQgdAPgeAAQgXAAgZgJg");
	this.shape.setTransform(14.8,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_54, new cjs.Rectangle(0,-0.1,29.6,35.3), null);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AhYCZQhFg5glhgQgohrAsg1QAsg2BwATQBmARBFA4QA/A0ALBLQAMBNgvA5QgvA6hOAEIgLAAQhGAAg6gwg");
	this.shape.setTransform(21.3,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_53, new cjs.Rectangle(-0.1,0,42.8,40.3), null);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AhFDRQhEglgchNQgdhUAThlQAUhwBCgXQBBgXBVBKQBQBDAdBUQAcBMgeBIQgeBHhGAZQgcAKgcAAQgoAAgpgWg");
	this.shape.setTransform(18.3,23.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_52, new cjs.Rectangle(-0.1,0,36.7,46.2), null);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AiOCtQg4gvgDhOQgChNA0g+QA6hEBhgjQBrgmA1AtQA1AsgUBwQgTBmg6BEQg0A+hMAKQgOABgNAAQg8AAgvgng");
	this.shape.setTransform(20.2,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_51, new cjs.Rectangle(0,0,40.4,42.4), null);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("AgBFRQhpAAhKhTQhJhSAAh0QABh9BLiBQBSiLBhABQBjAABQCMQBJCCAAB9QgBB0hLBRQhKBRhoAAIgBAAg");
	this.shape.setTransform(25.4,33.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_50, new cjs.Rectangle(0,0,50.8,67.5), null);


(lib.Símbolo27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBBIggg6IgTAAIAAA6IgSAAIAAiBIAuAAQARABAMAIQALAKAAARQAAAMgIALQgIAJgQACIAlA7gAgbgGIAXAAQAaAAAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(49.7,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBBIgMghIg8AAIgOAhIgUAAIA5iBIAPAAIA3CBgAgYASIAwAAIgYg7IAAAAg");
	this.shape_1.setTransform(37.1,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAzQgOgOAAgVIAAhRIARAAIAABOQAAAGADAGQABAGADAGQAEAGAGADQAHAEAIAAQAJAAAGgEQAHgDAEgGQADgFABgGQACgGABgHIAAhOIARAAIAABRQAAAUgOAPQgOAPgWAAQgVAAgOgPg");
	this.shape_2.setTransform(24.3,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBBIhGhqIgBAAIAABqIgRAAIAAiBIAXAAIBGBpIABAAIAAhpIARAAIAACBg");
	this.shape_3.setTransform(10.6,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_4.setTransform(0.8,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBBIAAhwIgpAAIAAgRIBjAAIAAARIgpAAIAABwg");
	this.shape_5.setTransform(-6.9,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBBIhHhqIAAAAIAABqIgSAAIAAiBIAXAAIBGBpIAAAAIAAhpIASAAIAACBg");
	this.shape_6.setTransform(-19.4,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvAwQgTgTAAgdQAAgcATgUQATgTAcAAQAcAAAUATQATATAAAdQAAAdgTATQgTAUgdAAQgcAAgTgUgAgigkQgOAPAAAVQAAAWAOAOQANAPAVAAQAVAAAOgOQAOgPAAgWQAAgVgOgPQgNgPgWAAQgUAAgOAPg");
	this.shape_7.setTransform(-34.2,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgFgMABgMQAAgdASgTQATgUAcAAQAOAAAMAFQAMAGAIAJIgOALQgNgPgTAAQgUAAgOAPQgNAPAAAWQAAAVANAPQANAOAVAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_8.setTransform(-48,-0.8);

	this.instance = new lib.Mapadebits46();
	this.instance.parent = this;
	this.instance.setTransform(-86,-24);

	this.instance_1 = new lib.Símbolo28();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-24,172,47);


(lib.Símbolo25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Capa 3
	this.mc_rojo = new lib.Símbolo26();
	this.mc_rojo.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_rojo).wait(10));

	// Texto
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaA2QgLgDgJgIIAVgXQAEAGAGADQAGADAIAAQAFAAAEgCQAFgCAAgEQAAgFgGgDIgNgDIgRgFQgIgDgGgGQgGgGAAgNQAAgNAHgIQAGgIALgEQAKgEALAAQALAAALADQALAEAIAIIgVAUQgEgEgFgDQgFgCgGAAQgDAAgEACQgEACAAAFQAAAFAGACQAEACAJACIARAEQAIADAGAGQAGAHAAAMQAAALgFAHQgEAHgHAEQgIAEgJACQgJACgIAAQgLAAgMgEg");
	this.shape.setTransform(134.1,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA2QgJgEgFgIQgGgHAAgLQAAgOAIgIQAHgHAMgEQALgEANAAIAXgBQgBgJgGgFQgGgGgJAAQgHAAgHAEQgHADgGAGIgSgSQAKgJAMgEQANgFANAAQATAAALAHQALAGAFANQAEANAAASIAAA3IgfAAIAAgOIgBAAQgGAJgJAEQgIAEgLAAQgKAAgJgEgAgGAJQgGABgDAEQgEADAAAFQAAAFACACIAGAEIAIABQAGAAAGgCQAFgCAEgFQAEgEAAgHIAAgHIgJAAIgJAAIgKACg");
	this.shape_1.setTransform(122.7,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmA4IAAhtIAiAAIAAASIABAAQAEgKAIgFQAHgFALAAIAGAAIAGABIAAAfIgIgCIgHgBQgNABgGAEQgFAFgCAIQgCAIAAAKIAAAug");
	this.shape_2.setTransform(112.7,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglAyQgJgIgDgLQgDgMAAgOIAAg8IAiAAIAAA2IABALQABAIADAEQAEAEAJAAQAIAAAEgDQAEgFACgGQABgHAAgFIAAg3IAiAAIAABtIghAAIAAgQQgCAFgFAEQgEAEgGADQgGACgIAAQgRAAgJgGg");
	this.shape_3.setTransform(101.1,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABFQgKgDgFgIQgFgHAAgMIAAgzIgWAAIAAgbIAWAAIAAghIAhAAIAAAhIAeAAIAAAbIgeAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAEAAADgCIAAAcQgGACgGABIgMABQgLAAgIgEg");
	this.shape_4.setTransform(89.9,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_5.setTransform(82.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggA2QgJgEgFgIQgGgHAAgLQAAgOAIgIQAHgHAMgEQALgEANAAIAXgBQgBgJgGgFQgGgGgJAAQgHAAgHAEQgHADgGAGIgSgSQAKgJAMgEQANgFANAAQATAAALAHQALAGAFANQAEANAAASIAAA3IgfAAIAAgOIgBAAQgGAJgJAEQgIAEgLAAQgKAAgJgEgAgGAJQgGABgDAEQgEADAAAFQAAAFACACIAGAEIAIABQAGAAAGgCQAFgCAEgFQAEgEAAgHIAAgHIgJAAIgJAAIgKACg");
	this.shape_6.setTransform(73.4,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATA4IAAg2IgBgMQAAgGgEgFQgEgEgJgBQgHABgFAEQgEAEgCAGIgBANIAAA2IgiAAIAAhtIAhAAIAAAPIAAAAQACgEAFgEQAEgEAHgDQAFgCAIAAQARAAAJAHQAJAGADAMQADAMAAAPIAAA7g");
	this.shape_7.setTransform(54.3,2.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAyQgOgHgIgNQgIgMAAgSQAAgRAIgNQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGANAAARIAAAKIhNAAQACAKAHAGQAGAGAJAAQAJAAAFgEQAGgEAFgGIAXASQgIAKgMAGQgNAFgNABQgQgBgOgHgAAXgMQAAgIgGgGQgGgGgJAAQgHAAgFADQgFADgDAEQgDAFAAAFIAsAAIAAAAg");
	this.shape_8.setTransform(41.4,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggA2QgJgEgFgIQgGgHAAgLQAAgOAIgIQAHgHAMgEQALgEANAAIAXgBQgBgJgGgFQgGgGgJAAQgHAAgHAEQgHADgGAGIgSgSQAKgJAMgEQANgFANAAQATAAALAHQALAGAFANQAEANAAASIAAA3IgfAAIAAgOIgBAAQgGAJgJAEQgIAEgLAAQgKAAgJgEgAgGAJQgGABgDAEQgEADAAAFQAAAFACACIAGAEIAIABQAGAAAGgCQAFgCAEgFQAEgEAAgHIAAgHIgJAAIgJAAIgKACg");
	this.shape_9.setTransform(22,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghBPQgMgHgHgMQgHgOAAgQQABgPAFgOQAHgMAKgIQAMgIAQgBQAJAAAJADQAJAEAHAIIAAAAIAAhJIAiAAIAACqIggAAIAAgOIAAAAQgDADgFAFQgFAEgGACQgHACgHABQgQAAgMgIgAgRAJQgIAHAAANQAAANAIAHQAHAIALAAQAOAAAGgIQAIgHgBgNQABgNgIgHQgGgIgOAAQgLAAgHAIg");
	this.shape_10.setTransform(8.6,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcBQIAAhtIAhAAIAABtgAghgvIAWggIAtAAIgmAgg");
	this.shape_11.setTransform(0.1,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggA2QgJgEgFgIQgGgHAAgLQAAgOAIgIQAHgHAMgEQALgEANAAIAXgBQgBgJgGgFQgGgGgJAAQgHAAgHAEQgHADgGAGIgSgSQAKgJAMgEQANgFANAAQATAAALAHQALAGAFANQAEANAAASIAAA3IgfAAIAAgOIgBAAQgGAJgJAEQgIAEgLAAQgKAAgJgEgAgGAJQgGABgDAEQgEADAAAFQAAAFACACIAGAEIAIABQAGAAAGgCQAFgCAEgFQAEgEAAgHIAAgHIgJAAIgJAAIgKACg");
	this.shape_12.setTransform(-10.2,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTAyQgOgHgHgNQgJgNAAgRQAAgRAJgNQAHgNAOgHQAOgHAQAAQAKAAAKAEQALADAIAIIgWAXQgCgDgFgDQgEgCgGAAQgLAAgIAIQgHAHAAAMQAAAMAHAIQAIAHALABQAGAAAEgDIAHgGIAWAYQgIAIgLADQgKAEgKAAQgQgBgOgHg");
	this.shape_13.setTransform(-21.1,3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZAyQgOgHgIgNQgIgMAAgSQAAgRAIgNQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGANAAARIAAAKIhNAAQACAKAHAGQAGAGAJAAQAJAAAFgEQAGgEAFgGIAXASQgIAKgMAGQgNAFgNABQgQgBgOgHgAAXgMQAAgIgGgGQgGgGgJAAQgHAAgFADQgFADgDAEQgDAFAAAFIAsAAIAAAAg");
	this.shape_14.setTransform(-40.2,3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghBPQgMgHgHgMQgGgOgBgQQAAgPAHgOQAFgMAMgIQALgIAQgBQAJAAAJADQAJAEAHAIIAAAAIAAhJIAhAAIAACqIgfAAIAAgOIAAAAQgDADgFAFQgEAEgHACQgHACgHABQgQAAgMgIgAgRAJQgIAHAAANQAAANAIAHQAGAIAMAAQAOAAAGgIQAIgHgBgNQABgNgIgHQgGgIgOAAQgMAAgGAIg");
	this.shape_15.setTransform(-54.1,0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAyQgNgHgJgNQgIgNAAgRQAAgRAIgNQAJgNANgHQAOgHAQAAQARAAAOAHQAOAHAIANQAIANAAARQAAARgIANQgIANgOAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_16.setTransform(-74.5,3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AggBQQgOgEgMgIIATgdQAHAHAJAEQAJADAKAAQAPAAAIgHQAHgIAAgMIAAgKIAAAAQgHAIgIADQgIAEgIAAQgQgBgMgHQgMgHgHgNQgGgLgBgSQAAgOAHgNQAFgNAMgIQALgIAQgBQAIABAIACQAHADAFADQAFAFADAEIABAAIAAgPIAeAAIAABjQAAAggPAQQgQAQgfABQgOAAgPgEgAgMgxQgFAEgEAGQgDAGAAAHQAAAHADAHQAEAGAFAEQAGACAIAAQAHAAAGgCQAHgEADgGQADgHABgHQgBgHgDgGQgDgGgHgEQgGgDgHgBQgIABgGADg");
	this.shape_17.setTransform(-88.9,5.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaA2QgLgDgJgIIAVgXQAEAGAGADQAGADAIAAQAFAAAEgCQAFgCAAgEQAAgFgGgDIgNgDIgRgFQgIgDgGgGQgGgGAAgNQAAgNAHgIQAGgIALgEQAKgEALAAQALAAALADQALAEAIAIIgVAUQgEgEgFgDQgFgCgGAAQgDAAgEACQgEACAAAFQAAAFAGACQAEACAJACIARAEQAIADAGAGQAGAHAAAMQAAALgFAHQgEAHgHAEQgIAEgJACQgJACgIAAQgLAAgMgEg");
	this.shape_18.setTransform(-100.9,3.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZAyQgOgHgIgNQgIgMAAgSQAAgRAIgNQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGANAAARIAAAKIhNAAQACAKAHAGQAGAGAJAAQAJAAAFgEQAGgEAFgGIAXASQgIAKgMAGQgNAFgNABQgQgBgOgHgAAXgMQAAgIgGgGQgGgGgJAAQgHAAgFADQgFADgDAEQgDAFAAAFIAsAAIAAAAg");
	this.shape_19.setTransform(-112.6,3.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQBSIAAhtIAhAAIAABtgAgNgwQgFgFgBgJQABgIAFgFQAGgGAHAAQAIAAAGAGQAGAFAAAIQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_20.setTransform(-122,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAWBQIghhAIgRAAIAABAIgjAAIAAifIA9AAQAQAAAOAEQANAFAJALQAIAKAAASQAAARgIAMQgKALgRADIApBEgAgcgNIAVAAQAGABAGgCQAHAAAEgFQAFgDABgJQAAgHgFgEQgEgFgGgBQgGgBgGAAIgXAAg");
	this.shape_21.setTransform(-131.5,0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeAyQgNgHgJgNQgIgNAAgRQAAgRAIgNQAJgNANgHQAOgHAQAAQARAAAOAHQANAHAJANQAIANAAARQAAARgIANQgJANgNAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_22.setTransform(78.2,3.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTAyQgOgHgIgNQgHgNgBgRQABgRAHgNQAIgNAOgHQAOgHAQAAQAKAAALAEQAKADAIAIIgWAXQgDgDgEgDQgEgCgGAAQgMAAgHAIQgHAHAAAMQAAAMAHAIQAHAHAMABQAGAAAEgDIAHgGIAWAYQgIAIgKADQgLAEgKAAQgQgBgOgHg");
	this.shape_23.setTransform(60.4,3.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgwA3IAAgiIA4gwIg2AAIAAgbIBdAAIAAAhIg6AxIA8AAIAAAbg");
	this.shape_24.setTransform(36.8,3.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AATA4IAAg2IgBgMQAAgGgEgFQgEgEgJgBQgHABgFAEQgEAEgCAGIgBANIAAA2IgiAAIAAhtIAhAAIAAAPIAAAAQACgEAFgEQAEgEAHgDQAFgCAIAAQARAAAJAHQAJAGADAMQADAMAAAPIAAA7g");
	this.shape_25.setTransform(24.6,2.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag7BSIAAigIAgAAIAAAOIAAAAQADgEAFgEQAFgEAGgCQAHgDAHAAQAQAAAMAHQAMAHAHANQAHANAAARQAAAPgGAMQgGANgMAJQgLAIgPAAQgKABgJgEQgJgDgGgIIgBAAIAAA/gAgUgrQgHAHAAANQAAAMAHAHQAHAHANAAQAMAAAHgHQAHgHAAgMQAAgNgHgHQgHgIgMAAQgNAAgHAIg");
	this.shape_26.setTransform(-1.6,5.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghBPQgMgHgHgMQgHgOABgQQAAgPAFgOQAGgMALgIQAMgIAPgBQAKAAAJADQAKAEAFAIIABAAIAAhJIAiAAIAACqIggAAIAAgOIAAAAQgCADgFAFQgGAEgGACQgHACgGABQgRAAgMgIgAgSAJQgGAHgBANQABANAGAHQAHAIAMAAQANAAAIgIQAGgHAAgNQAAgNgGgHQgIgIgNAAQgMAAgHAIg");
	this.shape_27.setTransform(-36.2,0.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeAyQgOgHgIgNQgIgNAAgRQAAgRAIgNQAIgNAOgHQAOgHAQAAQARAAAOAHQANAHAIANQAJANAAARQAAARgJANQgIANgNAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_28.setTransform(-56.5,3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfBQQgPgEgMgIIATgdQAIAHAJAEQAIADALAAQAOAAAHgHQAIgIAAgMIAAgKIgBAAQgFAIgJADQgJAEgGAAQgRgBgMgHQgMgHgHgNQgHgLABgSQAAgOAFgNQAHgNAKgIQAMgIAPgBQAJABAHACQAIADAFADQAGAFACAEIAAAAIAAgPIAgAAIAABjQAAAggQAQQgQAQgfABQgOAAgOgEgAgLgxQgHAEgDAGQgEAGAAAHQAAAHAEAHQADAGAHAEQAGACAGAAQAIAAAHgCQAFgEAEgGQAEgHgBgHQABgHgEgGQgEgGgFgEQgHgDgIgBQgGABgGADg");
	this.shape_29.setTransform(-70.9,5.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQBSIAAhtIAhAAIAABtgAgNgwQgFgFgBgJQABgIAFgFQAGgGAHAAQAIAAAGAGQAGAFAAAIQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_30.setTransform(-104,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAWBQIgghAIgSAAIAABAIgjAAIAAifIA+AAQAPAAAOAEQAOAFAHALQAJAKAAASQAAARgJAMQgIALgSADIApBEgAgcgNIAVAAQAGABAGgCQAHAAAFgFQAEgDAAgJQAAgHgDgEQgFgFgGgBQgGgBgGAAIgXAAg");
	this.shape_31.setTransform(-113.5,0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgTAyQgOgHgHgNQgJgNAAgRQAAgRAJgNQAHgNAOgHQAOgHAQAAQAKAAALAEQAKADAIAIIgWAXQgCgDgFgDQgEgCgGAAQgMAAgHAIQgHAHAAAMQAAAMAHAIQAHAHAMABQAGAAAEgDIAHgGIAWAYQgIAIgKADQgLAEgKAAQgQgBgOgHg");
	this.shape_32.setTransform(139.9,3.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgbBQIAAhtIAhAAIAABtgAgigvIAYggIAtAAIgnAgg");
	this.shape_33.setTransform(132.3,0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAABFQgJgDgGgIQgFgHAAgMIAAgzIgWAAIAAgbIAWAAIAAghIAhAAIAAAhIAeAAIAAAbIgeAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAFAAACgCIAAAcQgGACgGABIgMABQgLAAgIgEg");
	this.shape_34.setTransform(123.4,1.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AghBPQgMgHgHgMQgGgOAAgQQgBgPAHgOQAGgMAKgIQAMgIAPgBQAKAAAKADQAIAEAGAIIABAAIAAhJIAhAAIAACqIgeAAIAAgOIgBAAQgDADgEAFQgGAEgGACQgHACgGABQgRAAgMgIgAgSAJQgGAHAAANQAAANAGAHQAIAIAMAAQAMAAAIgIQAGgHABgNQgBgNgGgHQgIgIgMAAQgMAAgIAIg");
	this.shape_35.setTransform(56.3,0.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgeBKQgNgHgJgNQgIgNAAgRQAAgSAIgMQAJgNANgHQAOgHAQAAQARAAAOAHQAOAHAHANQAJAMAAASQAAARgJANQgHANgOAHQgOAHgRAAQgQAAgOgHgAgTAEQgHAHAAANQAAAMAHAHQAHAIAMAAQANAAAHgIQAHgHAAgMQAAgNgHgHQgHgHgNAAQgMAAgHAHgAgWgwIAWghIAvAAIgoAhg");
	this.shape_36.setTransform(23,0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgTAyQgNgHgJgNQgHgNgBgRQABgRAHgNQAJgNANgHQAOgHAQAAQAKAAAKAEQALADAIAIIgWAXQgDgDgEgDQgFgCgFAAQgLAAgIAIQgHAHAAAMQAAAMAHAIQAIAHALABQAFAAAFgDIAHgGIAWAYQgIAIgLADQgKAEgKAAQgQgBgOgHg");
	this.shape_37.setTransform(5.2,3.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgTAyQgNgHgJgNQgIgNAAgRQAAgRAIgNQAJgNANgHQAOgHAQAAQAKAAAKAEQALADAIAIIgWAXQgCgDgFgDQgEgCgGAAQgLAAgIAIQgHAHAAAMQAAAMAHAIQAIAHALABQAGAAAEgDIAHgGIAWAYQgIAIgLADQgKAEgKAAQgQgBgOgHg");
	this.shape_38.setTransform(-5.7,3.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AguBRQgGgBgGgCIAEgcIAIADIAIABQAHAAAFgDQAEgCACgEIAFgKIACgGIgwhuIAlAAIAbBJIAAAAIAYhJIAjAAIgxB/IgHAPQgDAHgEAFQgFAEgHADQgIACgMAAIgNgBg");
	this.shape_39.setTransform(-30.8,5.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgmA4IAAhtIAiAAIAAASIABAAQAEgKAIgFQAHgFALAAIAGAAIAGABIAAAfIgIgCIgHgBQgNABgGAEQgFAFgCAIQgCAIAAAKIAAAug");
	this.shape_40.setTransform(-54.6,2.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag7BSIAAigIAgAAIAAAOIAAAAQADgEAFgEQAFgEAGgCQAHgDAHAAQAQAAAMAHQAMAHAHANQAHANAAARQAAAPgGAMQgGANgMAJQgLAIgPAAQgKABgJgEQgJgDgGgIIgBAAIAAA/gAgUgrQgHAHAAANQAAAMAHAHQAHAHANAAQAMAAAHgHQAHgHAAgMQAAgNgHgHQgHgIgMAAQgNAAgHAIg");
	this.shape_41.setTransform(-66.4,5.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AghBPQgMgHgHgMQgGgOgBgQQAAgPAHgOQAFgMAMgIQALgIAQgBQAJAAAKADQAJAEAGAIIAAAAIAAhJIAhAAIAACqIgeAAIAAgOIgBAAQgDADgFAFQgEAEgHACQgHACgHABQgQAAgMgIgAgRAJQgIAHABANQgBANAIAHQAGAIANAAQANAAAGgIQAIgHAAgNQAAgNgIgHQgGgIgNAAQgNAAgGAIg");
	this.shape_42.setTransform(-101,0.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgeAyQgNgHgJgNQgIgNAAgRQAAgRAIgNQAJgNANgHQAOgHAQAAQARAAAOAHQAOAHAHANQAJANAAARQAAARgJANQgHANgOAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_43.setTransform(-121.4,3.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AggBQQgOgEgMgIIATgdQAHAHAJAEQAJADAKAAQAPAAAIgHQAHgIAAgMIAAgKIgBAAQgFAIgJADQgIAEgIAAQgQgBgMgHQgMgHgHgNQgGgLgBgSQAAgOAHgNQAFgNAMgIQALgIAQgBQAIABAHACQAIADAGADQAEAFADAEIABAAIAAgPIAeAAIAABjQAAAggPAQQgQAQgfABQgOAAgPgEgAgMgxQgFAEgEAGQgEAGABAHQgBAHAEAHQAEAGAFAEQAHACAHAAQAHAAAGgCQAHgEADgGQADgHABgHQgBgHgDgGQgDgGgHgEQgGgDgHgBQgHABgHADg");
	this.shape_44.setTransform(-135.8,5.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgZAyQgOgHgIgNQgIgMAAgSQAAgRAIgNQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGANAAARIAAAKIhNAAQACAKAHAGQAGAGAJAAQAJAAAFgEQAGgEAFgGIAXASQgIAKgMAGQgNAFgNABQgQgBgOgHgAAXgMQAAgIgGgGQgGgGgJAAQgHAAgFADQgFADgDAEQgDAFAAAFIAsAAIAAAAg");
	this.shape_45.setTransform(-159.5,3.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAWBQIghhAIgRAAIAABAIgjAAIAAifIA9AAQAQAAAOAEQANAFAJALQAIAKAAASQAAARgIAMQgKALgQADIAoBEgAgcgNIAVAAQAGABAGgCQAHAAAEgFQAFgDABgJQAAgHgFgEQgEgFgGgBQgGgBgGAAIgXAAg");
	this.shape_46.setTransform(-178.4,0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgQA3IgthtIAkAAIAbBKIABAAIAZhKIAiAAIgrBtg");
	this.shape_47.setTransform(83.6,3.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AA1A4IAAg/QAAgIgEgFQgDgFgIgBQgMABgFAHQgEAHAAAKIAAA5IghAAIAAg5IAAgKQgBgGgDgEQgDgEgIgBQgJABgEAEQgEAEgCAGIgBANIAAA2IgiAAIAAhtIAgAAIAAAPIABAAQACgEAEgEQAFgEAGgDQAHgCAIAAQAMAAAIAFQAIAEAFAKQAGgKAIgFQAIgEANAAQAOAAAJAGQAJAGADALQAEALgBANIAABAg");
	this.shape_48.setTransform(28.2,2.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AA1A4IAAg/QAAgIgEgFQgDgFgIgBQgMABgFAHQgEAHAAAKIAAA5IghAAIAAg5IAAgKQgBgGgDgEQgDgEgIgBQgJABgEAEQgEAEgCAGIgBANIAAA2IgiAAIAAhtIAgAAIAAAPIABAAQACgEAEgEQAFgEAGgDQAHgCAIAAQAMAAAIAFQAIAEAFAKQAGgKAIgFQAIgEANAAQAOAAAJAGQAJAGADALQAEALgBANIAABAg");
	this.shape_49.setTransform(-7.8,2.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_50.setTransform(-27.2,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgcBQIAAhtIAhAAIAABtgAghgvIAWggIAtAAIglAgg");
	this.shape_51.setTransform(-77,0.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgdBKQgUgLgLgSQgLgTAAgaQAAgZALgSQALgUAUgKQATgKAYAAQAJAAAKACQAKACAJAFQAJAGAHAJIgbAVQgFgFgIgEQgHgDgKAAQgNAAgKAGQgKAHgGAMQgGALAAAOQAAAPAGAMQAGALAKAHQAKAHAMgBQALABAIgFQAIgEAGgJIAdAXQgHAJgJAGQgJAGgLADQgLADgLAAQgYAAgTgKg");
	this.shape_52.setTransform(-100.8,0.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgeAyQgOgHgIgNQgIgNAAgRQAAgRAIgNQAIgNAOgHQAOgHAQAAQARAAAOAHQANAHAJANQAIANAAARQAAARgIANQgJANgNAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_53.setTransform(144.9,3.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgTAyQgOgHgHgNQgJgNAAgRQAAgRAJgNQAHgNAOgHQAOgHAQAAQAKAAALAEQAKADAIAIIgWAXQgDgDgEgDQgFgCgFAAQgMAAgHAIQgHAHAAAMQAAAMAHAIQAHAHAMABQAFAAAFgDIAHgGIAWAYQgIAIgKADQgLAEgKAAQgQgBgOgHg");
	this.shape_54.setTransform(132.9,3.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgBBFQgIgDgFgIQgGgHAAgMIAAgzIgVAAIAAgbIAVAAIAAghIAhAAIAAAhIAdAAIAAAbIgdAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAEAAACgCIAAAcQgFACgGABIgMABQgMAAgIgEg");
	this.shape_55.setTransform(107.2,1.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgZBKQgOgHgIgNQgIgNAAgRQAAgSAIgMQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGAMAAASIAAAKIhNAAQACAKAHAGQAGAFAJAAQAJAAAFgDQAGgEAFgGIAXASQgIAKgMAGQgNAFgNAAQgQAAgOgHgAAXALQAAgJgGgEQgGgHgJAAQgHAAgFAEQgFADgDADQgDAFAAAFIAsAAIAAAAgAgVgwIAVghIAuAAIgnAhg");
	this.shape_56.setTransform(85.4,0.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAABFQgKgDgFgIQgFgHAAgMIAAgzIgVAAIAAgbIAVAAIAAghIAhAAIAAAhIAdAAIAAAbIgdAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAFAAABgCIAAAcQgFACgGABIgMABQgMAAgHgEg");
	this.shape_57.setTransform(34.9,1.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAABFQgJgDgGgIQgFgHAAgMIAAgzIgWAAIAAgbIAWAAIAAghIAhAAIAAAhIAeAAIAAAbIgeAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAFAAACgCIAAAcQgGACgGABIgMABQgMAAgHgEg");
	this.shape_58.setTransform(2.7,1.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgTAyQgNgHgJgNQgHgNgBgRQABgRAHgNQAJgNANgHQAOgHAQAAQAKAAAKAEQALADAIAIIgWAXQgDgDgEgDQgFgCgFAAQgLAAgIAIQgHAHAAAMQAAAMAHAIQAIAHALABQAFAAAFgDIAHgGIAWAYQgIAIgLADQgKAEgKAAQgQgBgOgHg");
	this.shape_59.setTransform(-33.5,3.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AghBPQgMgHgHgMQgHgOAAgQQABgPAFgOQAHgMAKgIQAMgIAPgBQAKAAAJADQAJAEAHAIIAAAAIAAhJIAiAAIAACqIggAAIAAgOIAAAAQgDADgFAFQgFAEgGACQgHACgHABQgQAAgMgIgAgSAJQgHAHAAANQAAANAHAHQAIAIALAAQAOAAAGgIQAIgHgBgNQABgNgIgHQgGgIgOAAQgLAAgIAIg");
	this.shape_60.setTransform(-66.5,0.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgeAyQgOgHgIgNQgIgNAAgRQAAgRAIgNQAIgNAOgHQAOgHAQAAQARAAAOAHQANAHAJANQAIANAAARQAAARgIANQgJANgNAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_61.setTransform(-86.9,3.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AggBQQgOgEgMgIIATgdQAIAHAIAEQAJADAKAAQAPAAAHgHQAIgIAAgMIAAgKIAAAAQgHAIgIADQgIAEgIAAQgQgBgMgHQgMgHgHgNQgHgLAAgSQABgOAFgNQAGgNAMgIQALgIAQgBQAIABAIACQAHADAFADQAFAFADAEIAAAAIAAgPIAgAAIAABjQgBAggPAQQgQAQgfABQgPAAgOgEgAgLgxQgHAEgDAGQgDAGgBAHQABAHADAHQADAGAHAEQAGACAGAAQAIAAAHgCQAFgEAEgGQADgHAAgHQAAgHgDgGQgEgGgFgEQgHgDgIgBQgGABgGADg");
	this.shape_62.setTransform(-101.3,5.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAWBQIghhAIgRAAIAABAIgjAAIAAifIA9AAQARAAANAEQAOAFAHALQAJAKAAASQAAARgJAMQgJALgRADIApBEgAgcgNIAVAAQAHABAFgCQAHAAAEgFQAFgDAAgJQAAgHgDgEQgFgFgGgBQgHgBgFAAIgXAAg");
	this.shape_63.setTransform(-143.9,0.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgVBtIgHgCIABgeIAEACIAFAAQAGAAADgEQACgDABgFIAAgKIAAhvIAhAAIAAB1QAAAOgEAKQgDALgKAFQgJAGgOAAIgIAAgAgDhLQgGgFAAgJQAAgIAGgGQAEgFAJAAQAIAAAGAFQAFAGAAAIQAAAJgFAFQgGAGgIAAQgJAAgEgGg");
	this.shape_64.setTransform(93.9,3.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIBUQgGgCgFgEQgFgFgDgDIAAAAIAAAOIggAAIAAiqIAiAAIAABJIABAAQAGgIAJgEQAJgDAKAAQAPABALAIQAMAIAGAMQAGAOAAAPQAAARgHANQgHAMgMAHQgMAIgQAAQgHgBgHgCgAgUAJQgHAHAAANQAAANAHAHQAHAIANAAQAMAAAHgIQAHgHAAgNQAAgNgHgHQgHgIgMAAQgNAAgHAIg");
	this.shape_65.setTransform(85.2,0.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AghBPQgMgHgHgMQgGgOgBgQQAAgPAHgOQAFgMAMgIQALgIAQgBQAJAAAJADQAJAEAHAIIAAAAIAAhJIAhAAIAACqIgfAAIAAgOIAAAAQgDADgFAFQgEAEgHACQgHACgHABQgQAAgMgIgAgRAJQgIAHABANQgBANAIAHQAGAIAMAAQAOAAAGgIQAIgHgBgNQABgNgIgHQgGgIgOAAQgMAAgGAIg");
	this.shape_66.setTransform(36.8,0.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AghBPQgMgHgHgMQgGgOgBgQQAAgPAHgOQAFgMAMgIQALgIAQgBQAJAAAKADQAIAEAGAIIABAAIAAhJIAhAAIAACqIgeAAIAAgOIgBAAQgDADgEAFQgFAEgHACQgHACgHABQgQAAgMgIgAgRAJQgIAHABANQgBANAIAHQAGAIANAAQAMAAAHgIQAIgHAAgNQAAgNgIgHQgHgIgMAAQgNAAgGAIg");
	this.shape_67.setTransform(3.7,0.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgcBQIAAhtIAiAAIAABtgAgigvIAYggIAsAAIglAgg");
	this.shape_68.setTransform(-4.8,0.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AghBPQgMgHgHgMQgGgOAAgQQAAgPAFgOQAHgMAKgIQAMgIAPgBQAKAAAKADQAIAEAGAIIABAAIAAhJIAhAAIAACqIgeAAIAAgOIgBAAQgCADgFAFQgGAEgGACQgHACgGABQgRAAgMgIgAgSAJQgGAHAAANQAAANAGAHQAIAIAMAAQAMAAAIgIQAGgHABgNQgBgNgGgHQgIgIgMAAQgMAAgIAIg");
	this.shape_69.setTransform(-59,0.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgfBQQgPgEgMgIIATgdQAIAHAJAEQAIADALAAQAOAAAHgHQAIgIAAgMIAAgKIgBAAQgFAIgJADQgJAEgGAAQgRgBgMgHQgMgHgHgNQgHgLABgSQAAgOAFgNQAGgNALgIQAMgIAPgBQAJABAHACQAIADAGADQAFAFACAEIAAAAIAAgPIAgAAIAABjQAAAggQAQQgQAQgfABQgOAAgOgEgAgLgxQgGAEgEAGQgEAGAAAHQAAAHAEAHQAEAGAGAEQAFACAHAAQAIAAAGgCQAGgEAEgGQADgHAAgHQAAgHgDgGQgEgGgGgEQgGgDgIgBQgHABgFADg");
	this.shape_70.setTransform(-93.8,5.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAWBQIgghAIgSAAIAABAIgjAAIAAifIA+AAQAQAAANAEQAOAFAHALQAJAKAAASQAAARgJAMQgIALgRADIAoBEgAgcgNIAVAAQAHABAFgCQAHAAAFgFQAEgDAAgJQAAgHgDgEQgFgFgGgBQgHgBgFAAIgXAAg");
	this.shape_71.setTransform(-136.4,0.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgeAyQgNgHgJgNQgIgNAAgRQAAgRAIgNQAJgNANgHQAOgHAQAAQARAAAOAHQAOAHAHANQAJANAAARQAAARgJANQgHANgOAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_72.setTransform(-19.3,3.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgfBQQgPgEgMgIIATgdQAHAHAKAEQAIADAKAAQAPAAAIgHQAHgIAAgMIAAgKIgBAAQgFAIgJADQgJAEgGAAQgRgBgMgHQgMgHgHgNQgGgLAAgSQgBgOAHgNQAGgNAKgIQAMgIAPgBQAJABAHACQAIADAGADQAEAFADAEIABAAIAAgPIAeAAIAABjQAAAggPAQQgQAQgfABQgPAAgNgEgAgMgxQgFAEgEAGQgEAGABAHQgBAHAEAHQAEAGAFAEQAHACAHAAQAHAAAGgCQAHgEADgGQAEgHAAgHQAAgHgEgGQgDgGgHgEQgGgDgHgBQgHABgHADg");
	this.shape_73.setTransform(-33.7,5.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAWBQIgghAIgSAAIAABAIgjAAIAAifIA+AAQAPAAAOAEQANAFAJALQAIAKAAASQAAARgIAMQgKALgQADIAoBEgAgcgNIAVAAQAGABAGgCQAHAAAEgFQAFgDABgJQgBgHgEgEQgEgFgGgBQgHgBgFAAIgXAAg");
	this.shape_74.setTransform(-76.3,0.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AghBQQgMgIgHgMQgGgOgBgQQAAgPAHgOQAFgMAMgIQALgIAQgBQAJAAAKADQAIAEAGAIIABAAIAAhJIAhAAIAACqIgeAAIAAgOIgBAAQgDADgEAFQgFAEgHACQgHACgHABQgQAAgMgHgAgRAJQgIAHABANQgBANAIAHQAGAIANAAQAMAAAHgIQAIgHAAgNQAAgNgIgHQgHgIgMAAQgNAAgGAIg");
	this.shape_75.setTransform(1,-0.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAWBQIgghAIgSAAIAABAIgjAAIAAifIA+AAQAPAAAOAEQANAFAJALQAIAKAAASQAAARgIAMQgKALgQAEIAoBDgAgcgNIAVAAQAGABAGgCQAHAAAEgFQAFgDABgJQgBgHgEgEQgEgFgGgBQgHgBgFAAIgXAAg");
	this.shape_76.setTransform(-76.3,0.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgfBQQgPgEgMgIIATgdQAHAHAKAEQAIADALAAQAOAAAHgHQAIgIAAgMIAAgKIgBAAQgFAIgJADQgJAEgGAAQgRgBgMgHQgMgHgHgNQgGgLAAgSQAAgOAFgNQAHgNAKgIQAMgIAPgBQAJABAHACQAIADAGADQAFAFACAEIABAAIAAgPIAeAAIAABjQAAAggPAQQgQAQgfABQgPAAgNgEgAgMgxQgFAEgEAGQgDAGAAAHQAAAHADAHQAEAGAFAEQAGACAIAAQAHAAAGgCQAGgEAEgGQAEgHAAgHQAAgHgEgGQgEgGgGgEQgGgDgHgBQgIABgGADg");
	this.shape_77.setTransform(-67.6,5.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAWBQIgghAIgSAAIAABAIgjAAIAAifIA+AAQAQAAANAEQAOAFAIALQAIAKAAASQAAARgIAMQgKALgQADIAoBEgAgcgNIAVAAQAHABAFgCQAHAAAFgFQAEgDAAgJQAAgHgEgEQgEgFgGgBQgHgBgFAAIgXAAg");
	this.shape_78.setTransform(-110.2,0.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAABFQgKgDgFgIQgFgHAAgMIAAgzIgWAAIAAgbIAWAAIAAghIAhAAIAAAhIAdAAIAAAbIgdAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAFAAABgCIAAAcQgFACgGABIgMABQgMAAgHgEg");
	this.shape_79.setTransform(-51.1,1.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ag4BQIAAifIBsAAIAAAgIhIAAIAAAeIBEAAIAAAfIhEAAIAAAiIBNAAIAAAgg");
	this.shape_80.setTransform(-72.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20,p:{x:-122,y:0.4}},{t:this.shape_19,p:{x:-112.6,y:3.1}},{t:this.shape_18,p:{x:-100.9}},{t:this.shape_17},{t:this.shape_16,p:{x:-74.5}},{t:this.shape_15,p:{x:-54.1}},{t:this.shape_14,p:{x:-40.2,y:3.1}},{t:this.shape_13,p:{x:-21.1}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:22}},{t:this.shape_8,p:{x:41.4,y:3.1}},{t:this.shape_7,p:{x:54.3}},{t:this.shape_6,p:{x:73.4}},{t:this.shape_5,p:{x:82.6}},{t:this.shape_4,p:{x:89.9,y:1.6}},{t:this.shape_3,p:{x:101.1}},{t:this.shape_2,p:{x:112.7,y:2.9}},{t:this.shape_1,p:{x:122.7}},{t:this.shape,p:{x:134.1,y:3.1}}]}).to({state:[{t:this.shape_31},{t:this.shape_30,p:{x:-104}},{t:this.shape_19,p:{x:-94.6,y:3.1}},{t:this.shape_18,p:{x:-82.9}},{t:this.shape_29},{t:this.shape_28,p:{x:-56.5}},{t:this.shape_27},{t:this.shape_14,p:{x:-22.2,y:3.1}},{t:this.shape_26,p:{x:-1.6}},{t:this.shape_3,p:{x:11.7}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_1,p:{x:48.3}},{t:this.shape_23,p:{x:60.4}},{t:this.shape_20,p:{x:68.3,y:0.4}},{t:this.shape_22},{t:this.shape_7,p:{x:91.5}},{t:this.shape_8,p:{x:104.5,y:3.1}},{t:this.shape,p:{x:116.2,y:3.1}}]},1).to({state:[{t:this.shape_46},{t:this.shape_30,p:{x:-168.9}},{t:this.shape_45,p:{x:-159.5}},{t:this.shape_18,p:{x:-147.8}},{t:this.shape_44},{t:this.shape_43,p:{x:-121.4,y:3.1}},{t:this.shape_42},{t:this.shape_19,p:{x:-87.1,y:3.1}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_28,p:{x:-43.9}},{t:this.shape_39},{t:this.shape_14,p:{x:-18.1,y:3.1}},{t:this.shape_38,p:{x:-5.7}},{t:this.shape_37,p:{x:5.2}},{t:this.shape_20,p:{x:13.1,y:0.4}},{t:this.shape_36,p:{x:23}},{t:this.shape_7,p:{x:36.3}},{t:this.shape_35,p:{x:56.3}},{t:this.shape_8,p:{x:70.2,y:3.1}},{t:this.shape_26,p:{x:90.9}},{t:this.shape_6,p:{x:103.6}},{t:this.shape_2,p:{x:114.8,y:2.9}},{t:this.shape_34,p:{x:123.4}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_3,p:{x:151.4}},{t:this.shape_5,p:{x:160.8}},{t:this.shape_1,p:{x:169.6}},{t:this.shape,p:{x:181,y:3.1}}]},1).to({state:[{t:this.shape_52},{t:this.shape_9,p:{x:-87.3}},{t:this.shape_51},{t:this.shape_15,p:{x:-68.5}},{t:this.shape_6,p:{x:-55.1}},{t:this.shape_1,p:{x:-36.3}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_30,p:{x:5}},{t:this.shape,p:{x:13.1,y:3.1}},{t:this.shape_48,p:{x:28.2}},{t:this.shape_43,p:{x:44.9,y:3.1}},{t:this.shape_7,p:{x:65}},{t:this.shape_20,p:{x:74.4,y:0.4}},{t:this.shape_47,p:{x:83.6}},{t:this.shape_8,p:{x:96.3,y:3.1}},{t:this.shape_5,p:{x:105.7}}]},1).to({state:[{t:this.shape_63},{t:this.shape_30,p:{x:-134.4}},{t:this.shape_19,p:{x:-125,y:3.1}},{t:this.shape,p:{x:-113.3,y:3.1}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_14,p:{x:-52.6,y:3.1}},{t:this.shape_59},{t:this.shape_43,p:{x:-21.6,y:3.1}},{t:this.shape_7,p:{x:-8.2}},{t:this.shape_58,p:{x:2.7}},{t:this.shape_1,p:{x:13.4}},{t:this.shape_37,p:{x:25.4}},{t:this.shape_57},{t:this.shape_16,p:{x:46.6}},{t:this.shape_8,p:{x:66.6,y:3.1}},{t:this.shape_5,p:{x:76.1}},{t:this.shape_56},{t:this.shape_38,p:{x:97.8}},{t:this.shape_55},{t:this.shape_2,p:{x:117.1,y:2.9}},{t:this.shape_20,p:{x:124.1,y:0.4}},{t:this.shape_54,p:{x:132.9,y:3.1}},{t:this.shape_53,p:{x:144.9,y:3.1}}]},1).to({state:[{t:this.shape_71},{t:this.shape_20,p:{x:-126.9,y:0.4}},{t:this.shape_45,p:{x:-117.5}},{t:this.shape_18,p:{x:-105.8}},{t:this.shape_70},{t:this.shape_43,p:{x:-79.4,y:3.1}},{t:this.shape_69,p:{x:-59}},{t:this.shape_19,p:{x:-45.1,y:3.1}},{t:this.shape_23,p:{x:-26}},{t:this.shape_6,p:{x:-15.1}},{t:this.shape_68},{t:this.shape_67,p:{x:3.7}},{t:this.shape_1,p:{x:17.1}},{t:this.shape_66},{t:this.shape_14,p:{x:50.7,y:3.1}},{t:this.shape_28,p:{x:70.8}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_8,p:{x:104.3,y:3.1}},{t:this.shape_58,p:{x:115.2}},{t:this.shape_53,p:{x:126.9,y:3.1}},{t:this.shape,p:{x:139,y:3.1}}]},1).to({state:[{t:this.shape_74},{t:this.shape_30,p:{x:-66.8}},{t:this.shape_14,p:{x:-57.4,y:3.1}},{t:this.shape,p:{x:-45.7,y:3.1}},{t:this.shape_73,p:{y:5.7}},{t:this.shape_72},{t:this.shape_67,p:{x:1}},{t:this.shape_8,p:{x:15,y:3.1}},{t:this.shape_2,p:{x:33.2,y:2.9}},{t:this.shape_3,p:{x:43.8}},{t:this.shape_20,p:{x:53.2,y:0.4}},{t:this.shape_69,p:{x:62.9}},{t:this.shape_43,p:{x:77.3,y:3.1}}]},1).to({state:[{t:this.shape_76},{t:this.shape_20,p:{x:-66.8,y:-0.1}},{t:this.shape_19,p:{x:-57.4,y:2.6}},{t:this.shape,p:{x:-45.7,y:2.6}},{t:this.shape_73,p:{y:5.2}},{t:this.shape_43,p:{x:-19.3,y:2.6}},{t:this.shape_75},{t:this.shape_14,p:{x:15,y:2.6}},{t:this.shape_54,p:{x:34,y:2.6}},{t:this.shape_53,p:{x:46,y:2.6}},{t:this.shape_2,p:{x:57.9,y:2.5}},{t:this.shape_4,p:{x:66.5,y:1.1}},{t:this.shape_8,p:{x:77.7,y:2.6}}]},1).to({state:[{t:this.shape_78},{t:this.shape_30,p:{x:-100.7}},{t:this.shape_14,p:{x:-91.3,y:3.1}},{t:this.shape,p:{x:-79.6,y:3.1}},{t:this.shape_77},{t:this.shape_43,p:{x:-53.2,y:3.1}},{t:this.shape_35,p:{x:-32.8}},{t:this.shape_8,p:{x:-18.9,y:3.1}},{t:this.shape_6,p:{x:0.2}},{t:this.shape_48,p:{x:16.2}},{t:this.shape_26,p:{x:33.5}},{t:this.shape_3,p:{x:46.8}},{t:this.shape_34,p:{x:57.7}},{t:this.shape_1,p:{x:68.4}},{t:this.shape_37,p:{x:80.4}},{t:this.shape_20,p:{x:88.4,y:0.4}},{t:this.shape_36,p:{x:98.2}},{t:this.shape_7,p:{x:111.6}}]},1).to({state:[{t:this.shape_80},{t:this.shape_18,p:{x:-60.7}},{t:this.shape_79},{t:this.shape_3,p:{x:-39.8}},{t:this.shape_47,p:{x:-27.1}},{t:this.shape_20,p:{x:-17.9,y:0.4}},{t:this.shape,p:{x:-9.8,y:3.1}},{t:this.shape_4,p:{x:-0.1,y:1.6}},{t:this.shape_14,p:{x:11.1,y:3.1}},{t:this.shape_13,p:{x:30.2}},{t:this.shape_8,p:{x:41.7,y:3.1}},{t:this.shape_2,p:{x:53.2,y:2.9}},{t:this.shape_54,p:{x:62.8,y:3.1}},{t:this.shape_1,p:{x:73.8}}]},1).wait(1));

	// Barra
	this.instance = new lib.Mapadebits44();
	this.instance.parent = this;
	this.instance.setTransform(-273,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273,-22,546,44);


(lib.Símbolo23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBBIggg6IgTAAIAAA6IgSAAIAAiBIAuAAQARABAMAIQALAKAAARQAAAMgIALQgIAJgQACIAlA7gAgbgGIAXAAQAaAAAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(32.6,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBBIgOghIg8AAIgMAhIgVAAIA5iBIAPAAIA3CBgAgYASIAwAAIgXg7IgBAAg");
	this.shape_1.setTransform(18.2,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_2.setTransform(7.5,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgEgMgBgMQAAgdATgTQASgUAeAAQAOAAAMAFQALAGAIAJIgPALQgLgPgUAAQgUAAgNAPQgOAPAAAWQAAAVAOAPQANAOAUAAQAWAAAMgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_3.setTransform(-3,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_4.setTransform(-14,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhBBIhGhqIgBAAIAABqIgRAAIAAiBIAXAAIBGBpIABAAIAAhpIARAAIAACBg");
	this.shape_5.setTransform(-25.5,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_6.setTransform(-37.1,-0.8);

	this.instance = new lib.Mapadebits43();
	this.instance.parent = this;
	this.instance.setTransform(-74,-24);

	this.instance_1 = new lib.Símbolo24();
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
		playSound("concentrese");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// flash0.ai
	this.btn_start = new lib.Símbolo23();
	this.btn_start.parent = this;
	this.btn_start.setTransform(-6.2,136.2);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgIAIQgEgEAAgEQAAgDAEgDQADgDAFAAQAGAAADADQAEADAAADQAAAEgEAEQgDADgGAAQgFAAgDgDg");
	this.shape.setTransform(-33.7,91.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgFgJQgDgIAAgLQAAgJADgJQAFgJAHgHQAIgGAKgEQALgEAKAAQANAAAKAEQAJAEAHAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgJALgMAEQgMAFgOAAQgLAAgLgEgAgNghQgGACgGAEQgFAFgDAFQgDAFgBAGIBLAAQAAgNgKgIQgJgJgSAAQgGAAgIADg");
	this.shape_1.setTransform(-43.5,87.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_2.setTransform(-53,84.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgKBLIgMgDIgLgGQgFgDgEgFIAAAAIAAAQIgQAAIAAiVIAQAAIAABIIAAAAQAEgEAFgEIALgFQAGgDAGgBIAKgBQAOAAAKAFQALADAHAHQAJAGAEAIQAEAJAAALQAAAKgEAJQgEAIgJAHQgHAGgLAEQgKAEgOAAIgKgBgAgRgFQgIACgFAFQgHAEgCAHQgEAGAAAJQAAAHAEAHQACAGAHAGQAFAFAIACQAIADAJAAQAKAAAHgDQAJgCAFgFQAGgGACgGQADgHAAgHQAAgJgDgGQgCgHgGgEQgFgFgJgCQgHgDgKAAQgJAAgIADg");
	this.shape_3.setTransform(-62.6,84.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgHBFIAAhcIAOAAIAABcgAgHgzQgDgDgBgEQABgEADgDQADgDAEAAQAEAAADADQAEADABAEQgBAEgEADQgDACgEAAQgEAAgDgCg");
	this.shape_4.setTransform(-73.1,85.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgCgEAAgHQgBgHAEgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAFAJIgNAIQgEgGgGgDQgGgEgJAAIgHABQgEABgEACIgEAEQgCACAAAEQAAAHAEADQAGADAKACIAQADQALACAIAGQAIAGAAAKQAAAIgEAFQgDAGgHADIgNAFIgQACQgMAAgLgEg");
	this.shape_5.setTransform(-80.9,87.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_6.setTransform(-93.1,87.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("Ag6BMIAAiVIAPAAIAAAQIABAAQAEgFAFgDIALgGQAGgCAGgBIAKgBQAOAAAKAEQALADAIAHQAHAGAFAJQAEAKAAAKQAAAKgEAJQgFAIgHAHQgIAGgLADQgKAEgOABIgKgCIgMgDIgLgFQgFgDgEgFIgBAAIAABIgAgRg8QgHACgGAGQgHAEgCAIQgEAGAAAIQAAAHAEAIQACAGAHAFQAGAEAHADQAJACAIAAQAKAAAHgCQAJgDAFgEQAGgFACgGQADgIAAgHQAAgIgDgGQgCgIgGgEQgFgGgJgCQgHgDgKAAQgIAAgJADg");
	this.shape_7.setTransform(-106.9,90.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_8.setTransform(-128.1,87.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("Ag6BMIAAiVIAPAAIAAAQIABAAQAEgFAFgDIALgGQAGgCAGgBIAKgBQAOAAAKAEQALADAIAHQAHAGAFAJQAEAKAAAKQAAAKgEAJQgFAIgHAHQgIAGgLADQgKAEgOABIgKgCIgMgDIgLgFQgFgDgEgFIgBAAIAABIgAgRg8QgHACgGAGQgHAEgCAIQgEAGAAAIQAAAHAEAIQACAGAHAFQAGAEAHADQAJACAIAAQAKAAAHgCQAJgDAFgEQAGgFACgGQADgIAAgHQAAgIgDgGQgCgIgGgEQgFgGgJgCQgHgDgKAAQgIAAgJADg");
	this.shape_9.setTransform(-142,90.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("ABDAwIAAg1QAAgPgFgHQgGgIgRABQgIAAgGADQgGACgEAFQgDAFgCAGQgCAGAAAGIAAAxIgOAAIAAg1QAAgPgGgHQgGgIgQABIgHABQgFAAgFADQgGAEgEAHQgFAIAAALIAAAwIgPAAIAAhHIgBgKIAAgLIAQAAIAAAOIABAAQAFgIALgEQAKgEAKgBIAJABQAFABAFADQAFACAEADQADAEADAGQAFgJAKgFQAKgFALgBQAWAAAKAKQAKAJAAASIAAA6g");
	this.shape_10.setTransform(-159.9,87.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgEgIgBgLQABgJAEgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAJAEAHAGQAHAGADAJQAEAIABAKIAAAFIhcAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgJALgMAEQgMAFgOAAQgLAAgLgEgAgNghQgGACgGAEQgFAFgDAFQgEAFAAAGIBLAAQAAgNgKgIQgKgJgRAAQgGAAgIADg");
	this.shape_11.setTransform(-176.4,87.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgHBFIAAhcIAPAAIAABcgAgHgzQgEgDABgEQgBgEAEgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape_12.setTransform(-185.8,85.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AAGA7QgGgBgCgDQgEgCgDgFQgCgFAAgHIAAg6IgYAAIAAgMIAYAAIAAgaIAOAAIAAAaIAgAAIAAAMIggAAIAAA2IABAIIAEAGIAEACIAHAAIAIgBIAIgCIABAMQgJAEgMAAIgJgCg");
	this.shape_13.setTransform(-192.5,86.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgeAwIAAg/IAAgNIAAgQIAOAAIAAARIABAAIAFgHQADgDAFgDQACgDAHgCQAFgCAIAAQAGABAGABIgEANIgJgBQgJAAgGADQgFACgFAFQgEAFgCAFQgCAFAAAEIAAA0g");
	this.shape_14.setTransform(-205.9,87.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_15.setTransform(-218,87.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AAgAwIAAgzQAAgPgGgIQgHgJgQABIgGABQgGAAgGADQgGAEgEAHQgGAIAAALIAAAwIgPAAIAAhHIAAgKIgBgLIAQAAIAAAHIAAAIIABAAIAHgHIAJgFIAKgEIAKgCQAVAAALAKQAKAJAAASIAAA6g");
	this.shape_16.setTransform(-231.7,87.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgTAtQgKgEgIgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAJAEAIAGQAGAGAEAJQADAIAAAKIAAAFIhbAAQABAHADAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgMghQgIACgFAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgKgJgRAAQgHAAgGADg");
	this.shape_17.setTransform(-244.7,87.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("ABDAwIAAg1QAAgPgFgHQgGgIgRABQgIAAgGADQgGACgEAFQgDAFgCAGQgCAGAAAGIAAAxIgOAAIAAg1QAAgPgGgHQgGgIgQABIgHABQgFAAgFADQgGAEgEAHQgFAIAAALIAAAwIgPAAIAAhHIgBgKIAAgLIAQAAIAAAOIABAAQAFgIALgEQAKgEAKgBIAJABQAFABAFADQAFACAEADQADAEADAGQAFgJAKgFQAKgFALgBQAWAAAKAKQAKAJAAASIAAA6g");
	this.shape_18.setTransform(-261.6,87.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_19.setTransform(-280.9,84.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgEgIgBgLQABgJAEgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAJAEAIAGQAGAGADAJQAEAIAAAKIAAAFIhbAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgKALgLAEQgMAFgOAAQgMAAgKgEgAgMghQgIACgFAEQgFAFgDAFQgEAFAAAGIBLAAQAAgNgKgIQgKgJgRAAQgHAAgGADg");
	this.shape_20.setTransform(-290.3,87.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AAhAwIAAgzQgBgPgGgIQgHgJgQABIgGABQgGAAgGADQgGAEgFAHQgEAIAAALIAAAwIgQAAIAAhHIAAgKIgBgLIAQAAIABAHIAAAIIAAAAIAHgHIAJgFIALgEIAJgCQAWAAAKAKQAKAJAAASIAAA6g");
	this.shape_21.setTransform(-310.2,87.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgFgJQgDgIAAgLQAAgJADgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAKAEAGAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgNghQgGACgGAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgJgJgSAAQgGAAgIADg");
	this.shape_22.setTransform(-323.2,87.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAKgBQAEgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgEgCQgFgCgDgFQgEgEAAgHQAAgHAEgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAFAJIgOAIQgEgGgFgDQgGgEgIAAIgIABQgEABgDACIgGAEQgCACAAAEQAAAHAGADQAFADAKACIAQADQAMACAIAGQAHAGAAAKQAAAIgEAFQgEAGgFADIgOAFIgQACQgMAAgLgEg");
	this.shape_23.setTransform(311.1,63.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_24.setTransform(299,63.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgeBDQgNgFgLgJIAMgLQAGAIAMAFQAKAEAOAAQALAAAIgDQAJgCAEgFQAFgFADgHQACgGAAgIIAAgRIgBAAQgHAKgLAEQgLAEgMAAQgLAAgLgEQgKgDgIgHQgIgGgEgIQgEgIgBgKQAAgKAFgJQAEgJAIgGQAHgHAKgDQAKgEAMAAIAKABQAGAAAGADQAFABAFAEQAGADAEAGIABAAIAAgQIAQAAIAABbQAAAIgCAIQgDAIgGAIQgHAHgLAEQgMAFgSAAQgQAAgNgEgAgOg3QgIACgGAFQgFAFgEAHQgDAGABAHQgBAIADAGQAEAGAFAEQAGAFAIADQAHADAIAAQAIAAAIgDQAHgCAHgFQAFgDAEgHQACgHAAgIQAAgHgCgGQgDgHgGgFQgFgFgIgCQgIgDgJAAQgIAAgHADg");
	this.shape_25.setTransform(284.4,66);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAKgBQAEgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgEgCQgFgCgDgFQgDgEgBgHQAAgHAEgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAFAJIgNAIQgFgGgFgDQgGgEgIAAIgIABQgEABgEACIgEAEQgDACAAAEQABAHAFADQAFADAKACIAQADQALACAJAGQAHAGAAAKQAAAIgEAFQgEAGgGADIgNAFIgQACQgMAAgLgEg");
	this.shape_26.setTransform(272.5,63.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgFgJQgDgIAAgLQAAgJADgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAKAEAGAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgNghQgGACgGAEQgGAFgDAFQgCAFAAAGIBKAAQAAgNgKgIQgJgJgSAAQgGAAgIADg");
	this.shape_27.setTransform(260.9,63.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgHBFIAAhcIAPAAIAABcgAgHgzQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEACgEAAQgDAAgEgCg");
	this.shape_28.setTransform(251.4,61.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIAAgRIAPAAIAAARIAAAAIAFgHQADgDAEgDQADgDAGgCQAHgBAHAAQAHgBAEACIgDAMIgJgBQgJAAgGAEQgFADgFAEQgEAEgCAGQgCAEAAAGIAAAyg");
	this.shape_29.setTransform(245.7,63.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgFgIAAgLQAAgJAFgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAJAEAIAGQAGAGADAJQAEAIAAAKIAAAFIhbAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgKALgLAEQgMAFgOAAQgMAAgKgEgAgMghQgIACgFAEQgFAFgDAFQgEAFAAAGIBLAAQAAgNgKgIQgKgJgRAAQgHAAgGADg");
	this.shape_30.setTransform(227.6,63.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgXBIQgLgDgHgHQgIgHgEgJQgFgIAAgLQAAgKAFgJQAEgIAIgHQAHgGALgEQALgDAMAAIAMABQAFABAGACQAGACAFADQAFAEAEAFIAAAAIAAhJIAQAAIAACUIgQAAIAAgPIAAAAQgEAFgFAEIgLAFIgLADIgMABQgMAAgLgEgAgQgFQgIACgGAEQgFAFgDAHQgDAHAAAHQAAAIADAHQADAHAFAEQAGAFAIADQAHADAJAAQAKAAAIgDQAIgDAGgFQAFgEAEgHQAEgHAAgIQAAgHgEgHQgEgHgFgFQgGgEgIgCQgIgEgKAAQgJAAgHAEg");
	this.shape_31.setTransform(213.4,61);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAKgBQAEgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgEgCQgFgCgDgFQgEgEAAgHQAAgHAEgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAFAJIgOAIQgEgGgFgDQgGgEgIAAIgIABQgEABgDACIgGAEQgCACAAAEQAAAHAGADQAFADAKACIAQADQAMACAIAGQAHAGAAAKQAAAIgEAFQgEAGgFADIgOAFIgQACQgMAAgLgEg");
	this.shape_32.setTransform(195,63.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAHAAIAAgDQABgYgdAAQgSAAgPALIgJgJQAQgOAeAAQAIAAAHACQAIACAFAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgGAKgKAEQgKAEgMAAQgHAAgHgCgAAHABIgQACQgIACgHAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAIAAAGgDQAGgCAEgEQAFgEACgFQABgGAAgGIAAgHIgIAAIgOABg");
	this.shape_33.setTransform(183.5,63.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgXBbIADgMIAAABIAEAAIAFABQAFgBAEgBQACgCACgDIACgGIAAgHIAAhrIAQAAIAABtIAAAIQgBAEgCAFQgDAFgGAEQgHADgLAAQgHAAgGgBgAAEhLQgDgCAAgFQAAgEADgDQAEgCAEAAQAEAAAEACQAEADAAAEQAAAFgEACQgEACgEABQgEgBgEgCg");
	this.shape_34.setTransform(173.6,63.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgTAtQgLgEgIgGQgHgHgFgJQgDgIAAgLQAAgJADgJQAFgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAKAEAGAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQAAAHAEAGQADAGAGAEQAFAFAHACQAHADAHAAQANAAAJgFQAKgFAEgGIAMAIQgJALgMAEQgNAFgOAAQgKAAgLgEgAgNghQgGACgGAEQgFAFgDAFQgDAFAAAGIBKAAQAAgNgKgIQgJgJgSAAQgGAAgIADg");
	this.shape_35.setTransform(165.4,63.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIAAgRIAOAAIAAARIABAAIAFgHQADgDAFgDQACgDAHgCQAFgBAIAAQAGgBAGACIgEAMIgJgBQgJAAgGAEQgFADgFAEQgEAEgCAGQgCAEAAAGIAAAyg");
	this.shape_36.setTransform(155.9,63.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgOALIgKgJQAPgOAfAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAIAAAGgDQAGgCAFgEQADgEADgFQACgGAAgGIAAgHIgIAAIgQABg");
	this.shape_37.setTransform(144.5,63.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("Ag6BMIAAiUIAQAAIAAAPIAAAAQAEgFAFgDIALgFQAGgDAGgBIAKgBQAOAAAKAEQALAEAHAGQAJAHAEAJQAEAJAAAKQAAALgEAIQgEAIgJAHQgHAGgLAEQgKADgOAAIgKgBIgMgCIgLgGQgFgEgEgFIAAAAIAABJgAgRg8QgIADgFAFQgHAFgCAGQgEAHAAAIQAAAIAEAGQACAHAHAFQAFAEAIADQAIADAJAAQAKAAAHgDQAJgDAFgEQAGgFACgHQADgGAAgIQAAgIgDgHQgCgGgGgFQgFgFgJgDQgHgDgKAAQgJAAgIADg");
	this.shape_38.setTransform(131.8,66.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAKgBQAEgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgEgCQgFgCgDgFQgEgEAAgHQAAgHAEgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAFAJIgOAIQgEgGgFgDQgGgEgIAAIgIABQgEABgDACIgGAEQgCACAAAEQAAAHAGADQAFADAKACIAQADQAMACAIAGQAHAGAAAKQAAAIgEAFQgEAGgFADIgOAFIgQACQgMAAgLgEg");
	this.shape_39.setTransform(112.6,63.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAHAAIAAgDQABgYgdAAQgSAAgPALIgJgJQAQgOAeAAQAIAAAHACQAIACAFAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgGAKgKAEQgKAEgMAAQgIAAgGgCgAAHABIgQACQgIACgHAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAIAAAGgDQAGgCAEgEQAFgEACgFQABgGAAgGIAAgHIgIAAIgOABg");
	this.shape_40.setTransform(101.1,63.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_41.setTransform(92.4,60.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgCgEAAgHQAAgHADgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAGAJIgPAIQgDgGgGgDQgGgEgJAAIgHABQgEABgDACIgGAEQgBACAAAEQAAAHAEADQAGADAKACIAQADQAMACAHAGQAIAGAAAKQAAAIgDAFQgFAGgGADIgNAFIgQACQgMAAgLgEg");
	this.shape_42.setTransform(78,63.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAIAAIAAgDQAAgYgdAAQgSAAgOALIgKgJQAPgOAfAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgIAAgGgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAIAAAGgDQAGgCAFgEQADgEACgFQADgGAAgGIAAgHIgIAAIgQABg");
	this.shape_43.setTransform(66.5,63.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgXBIQgKgDgJgHQgHgHgEgJQgFgIAAgLQAAgKAFgJQAEgIAHgHQAJgGAKgEQALgDAMAAIALABQAHABAFACQAGACAFADQAGAEADAFIABAAIAAhJIAPAAIAACUIgPAAIAAgPIgBAAQgDAFgGAEIgLAFIgMADIgLABQgMAAgLgEgAgRgFQgHACgFAEQgGAFgDAHQgDAHAAAHQAAAIADAHQADAHAGAEQAFAFAHADQAJADAIAAQAJAAAJgDQAIgDAGgFQAFgEAEgHQADgHABgIQgBgHgDgHQgEgHgFgFQgGgEgIgCQgJgEgJAAQgIAAgJAEg");
	this.shape_44.setTransform(53.1,61);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_45.setTransform(39.2,63.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AAFA7QgEgBgEgCQgDgDgDgFQgCgEgBgJIAAg5IgXAAIAAgLIAXAAIAAgaIAPAAIAAAaIAgAAIAAALIggAAIAAA2IABAIIADAGIAGACIAGABIAIgBIAIgDIABAMQgJAEgNgBIgJgBg");
	this.shape_46.setTransform(28.3,62.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgFgIAAgLQAAgJAFgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAJAEAIAGQAGAGADAJQAEAIAAAKIAAAFIhbAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgKALgLAEQgMAFgOAAQgMAAgKgEgAgMghQgIACgFAEQgFAFgDAFQgEAFAAAGIBLAAQAAgNgKgIQgKgJgRAAQgHAAgGADg");
	this.shape_47.setTransform(11.2,63.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgXBIQgLgDgHgHQgIgHgEgJQgFgIAAgLQAAgKAFgJQAEgIAIgHQAHgGALgEQALgDAMAAIAMABQAFABAGACQAGACAFADQAFAEAEAFIAAAAIAAhJIAQAAIAACUIgQAAIAAgPIAAAAQgEAFgFAEIgLAFIgLADIgMABQgMAAgLgEgAgQgFQgIACgGAEQgFAFgDAHQgDAHAAAHQAAAIADAHQADAHAFAEQAGAFAIADQAHADAJAAQAKAAAIgDQAIgDAGgFQAFgEAEgHQAEgHAAgIQAAgHgEgHQgEgHgFgFQgGgEgIgCQgIgEgKAAQgJAAgHAEg");
	this.shape_48.setTransform(-3,61);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AAhAvIAAgxQgBgQgGgIQgGgJgSAAIgFABQgGABgGAEQgGADgFAHQgEAIAAALIAAAvIgQAAIAAhHIAAgJIgBgLIAQAAIABAHIAAAIIAAAAIAHgHIAJgGIALgDQAEgCAGABQAUAAALAJQAKAKAAARIAAA5g");
	this.shape_49.setTransform(-23.2,63.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgXBDQgLgDgHgHQgIgGgFgJQgEgJAAgKQAAgLAEgJQAFgIAIgGQAHgHALgDQALgEAMAAQANAAALAEQAKADAIAHQAIAGAEAIQAFAJAAALQAAAKgFAJQgEAJgIAGQgIAHgKADQgLAEgNAAQgMAAgLgEgAgRgKQgHACgGAGQgFADgDAHQgDAHAAAIQAAAHADAHQADAHAFAFQAGAFAHACQAIADAJAAQAKAAAHgDQAIgCAFgFQAGgFADgHQADgHAAgHQAAgIgDgHQgDgHgGgDQgFgGgIgCQgHgDgKAAQgJAAgIADgAgNgqIAWgcIAWAAIgfAcg");
	this.shape_50.setTransform(-36.7,61.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgHBFIAAhcIAOAAIAABcgAgHgzQgDgDgBgEQABgEADgDQADgDAEAAQAEAAADADQAEADABAEQgBAEgEADQgDACgEAAQgEAAgDgCg");
	this.shape_51.setTransform(-46.5,61.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgPAtQgKgDgIgHQgHgGgEgJQgFgJAAgLQAAgJAFgJQAEgJAHgHQAIgGAKgEQAMgEAMAAQALABALADQAKAEAIAIIgMAJQgEgGgHgDQgIgEgJAAQgJAAgHADQgIADgGAFQgFAFgDAGQgCAHgBAHQABAIACAHQADAHAFAEQAGAFAIADQAHADAJAAQAJAAAIgEQAHgDAEgFIAMAIQgIAIgKAEQgLADgLABQgMAAgMgEg");
	this.shape_52.setTransform(-54.7,63.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAIAAIAAgDQAAgYgdAAQgSAAgOALIgKgJQAPgOAfAAQAIAAAIACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgHAAgHgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAIAAAGgDQAGgCAFgEQADgEACgFQACgGABgGIAAgHIgIAAIgQABg");
	this.shape_53.setTransform(-67.2,63.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgOAtQgLgDgIgHQgHgGgFgJQgDgJAAgLQAAgJADgJQAFgJAHgHQAIgGALgEQAKgEANAAQAMABAKADQAKAEAJAIIgOAJQgDgGgIgDQgGgEgKAAQgJAAgIADQgHADgGAFQgFAFgDAGQgDAHABAHQgBAIADAHQADAHAFAEQAGAFAHADQAIADAJAAQAKAAAGgEQAIgDADgFIAOAIQgJAIgKAEQgKADgMABQgNAAgKgEg");
	this.shape_54.setTransform(-78.4,63.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgHBFIAAhcIAOAAIAABcgAgHgzQgDgDgBgEQABgEADgDQADgDAEAAQAEAAADADQAFADAAAEQAAAEgFADQgDACgEAAQgEAAgDgCg");
	this.shape_55.setTransform(-87.3,61.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgKBLIgMgDIgLgFQgFgEgEgFIAAAAIAAAPIgQAAIAAiUIAQAAIAABJIAAAAQAEgFAFgEIALgFQAGgCAGgBIAKgBQANAAALADQALAEAHAGQAJAHAEAIQAEAJAAAKQAAALgEAIQgEAJgJAHQgHAHgLADQgLAEgNAAIgKgBgAgQgFQgIACgHAEQgGAFgDAHQgDAHAAAHQAAAIADAHQADAHAGAEQAHAFAIADQAIADAIAAQAKAAAIgDQAHgDAGgFQAFgEADgHQADgHAAgIQAAgHgDgHQgDgHgFgFQgGgEgHgCQgIgEgKAAQgIAAgIAEg");
	this.shape_56.setTransform(-97,61);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgkAmQgLgKAAgRIAAg5IAPAAIAAAxQABAIABAHQABAFAEAEQAEAFAFACQAGACAJAAIAFgBQAGgBAGgEQAGgDAFgIQAEgGAAgNIAAguIAQAAIAABHIAAAJIABALIgQAAIgBgIIAAgHIAAAAQgCAEgEADQgFAEgEACQgGACgFABIgKABQgWAAgJgJg");
	this.shape_57.setTransform(-111.3,63.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgOALIgKgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgHAAgHgCgAAHABIgRACQgIACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAHAAAHgDQAGgCAFgEQADgEACgFQACgGAAgGIAAgHIgHAAIgPABg");
	this.shape_58.setTransform(-130.8,63.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_59.setTransform(-139.5,60.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIgBgRIAPAAIAAARIABAAIAFgHQADgDAEgDQAEgDAGgCQAFgBAIAAQAGgBAFACIgDAMIgJgBQgJAAgGAEQgGADgEAEQgEAEgCAGQgCAEAAAGIAAAyg");
	this.shape_60.setTransform(-151.8,63.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgPALIgJgJQAPgOAfAAQAHAAAIACQAHACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgPACQgJACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAEgEADgFQABgGAAgGIAAgHIgIAAIgPABg");
	this.shape_61.setTransform(-163.1,63.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgXBIQgKgDgJgHQgHgHgEgJQgFgIAAgLQAAgKAFgJQAEgIAHgHQAJgGAKgEQALgDAMAAIALABQAGABAGACQAGACAFADQAFAEAEAFIABAAIAAhJIAPAAIAACUIgPAAIAAgPIgBAAQgEAFgFAEIgLAFIgMADIgLABQgMAAgLgEgAgQgFQgIACgGAEQgFAFgDAHQgDAHAAAHQAAAIADAHQADAHAFAEQAGAFAIADQAIADAIAAQAJAAAJgDQAIgDAGgFQAGgEADgHQAEgHAAgIQAAgHgEgHQgDgHgGgFQgGgEgIgCQgJgEgJAAQgIAAgIAEg");
	this.shape_62.setTransform(-176.6,61);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIAAgRIAPAAIAAARIAAAAIAFgHQADgDAEgDQAEgDAFgCQAHgBAHAAQAHgBAFACIgEAMIgJgBQgJAAgGAEQgGADgEAEQgEAEgCAGQgCAEAAAGIAAAyg");
	this.shape_63.setTransform(-186.4,63.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_64.setTransform(-198.4,63.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AgOAtQgLgDgIgHQgHgGgFgJQgDgJAAgLQAAgJADgJQAFgJAHgHQAIgGALgEQAKgEANAAQAMABAKADQAKAEAJAIIgOAJQgDgGgIgDQgGgEgKAAQgJAAgIADQgHADgGAFQgFAFgDAGQgDAHABAHQgBAIADAHQADAHAFAEQAGAFAHADQAIADAJAAQAKAAAGgEQAIgDADgFIAOAIQgJAIgKAEQgKADgMABQgNAAgKgEg");
	this.shape_65.setTransform(-210.7,63.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgFgJQgDgIAAgLQAAgJADgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAKAEAGAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgNghQgGACgGAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgJgJgSAAQgGAAgIADg");
	this.shape_66.setTransform(-223.3,63.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIAAgRIAOAAIAAARIABAAIAFgHQADgDAFgDQADgDAFgCQAGgBAIAAQAGgBAGACIgEAMIgJgBQgJAAgGAEQgGADgEAEQgEAEgCAGQgCAEAAAGIAAAyg");
	this.shape_67.setTransform(-232.8,63.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgDgEAAgHQABgHADgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAGAJIgPAIQgEgGgFgDQgGgEgIAAIgIABQgEABgDACIgGAEQgCACAAAEQAAAHAGADQAFADAKACIAQADQAMACAHAGQAIAGAAAKQAAAIgDAFQgFAGgFADIgOAFIgQACQgMAAgLgEg");
	this.shape_68.setTransform(-249.4,63.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgWBGQgHgCgFgEQgGgDgDgFQgDgFAAgHQAAgLAHgHQAHgGAKgDQALgDALgBIAWgBIAIAAIAAgCQgBgXgcAAQgSAAgPALIgJgKQAQgNAeAAQAHAAAJACQAGACAGAEQAGAEADAGQADAGAAAIIAAApIABALIABAKIgPAAIgBgIIgBgHIAAAAQgHAJgJAEQgKAEgMAAQgHAAgHgBgAAGAXIgQADQgIABgFAEQgGAEAAAHQAAAFACADIAGAFQAEADAEAAIAKABQAHAAAHgCQAGgCAEgEQAFgFACgFQACgFAAgHIAAgGIgJAAIgPAAgAgLgqIAXgcIAWAAIgfAcg");
	this.shape_69.setTransform(-260.9,61.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIAAgRIAPAAIAAARIAAAAIAFgHQADgDAEgDQAEgDAFgCQAHgBAHAAQAHgBAFACIgEAMIgJgBQgJAAgGAEQgGADgEAEQgEAEgCAGQgCAEAAAGIAAAyg");
	this.shape_70.setTransform(-269.6,63.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgFgJQgDgIAAgLQAAgJADgJQAFgJAHgHQAIgGAKgEQALgEAKAAQANAAAKAEQAJAEAHAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgJALgMAEQgMAFgOAAQgLAAgLgEgAgNghQgGACgGAEQgFAFgDAFQgDAFgBAGIBLAAQAAgNgKgIQgJgJgSAAQgGAAgIADg");
	this.shape_71.setTransform(-281.1,63.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgKBLIgMgDIgLgFQgFgEgEgFIgBAAIAAAPIgPAAIAAiUIAPAAIAABJIABAAQAEgFAFgEIALgFQAGgCAGgBIAKgBQAOAAAKADQALAEAIAGQAHAHAFAIQAEAJAAAKQAAALgEAIQgFAJgHAHQgIAHgLADQgKAEgOAAIgKgBgAgRgFQgHACgGAEQgHAFgCAHQgEAHAAAHQAAAIAEAHQACAHAHAEQAGAFAHADQAJADAIAAQAKAAAHgDQAJgDAFgFQAGgEACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgEgJgCQgHgEgKAAQgIAAgJAEg");
	this.shape_72.setTransform(-294.6,61);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgFgIAAgLQAAgJAFgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAJAEAIAGQAGAGADAJQAEAIAAAKIAAAFIhbAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgKALgLAEQgMAFgOAAQgMAAgKgEgAgMghQgIACgFAEQgFAFgDAFQgEAFAAAGIBLAAQAAgNgKgIQgKgJgRAAQgHAAgGADg");
	this.shape_73.setTransform(-308.8,63.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgXBIQgLgDgHgHQgIgHgEgJQgFgIAAgLQAAgKAFgJQAEgIAIgHQAHgGALgEQALgDAMAAIAMABQAFABAGACQAGACAFADQAFAEAEAFIAAAAIAAhJIAQAAIAACUIgQAAIAAgPIAAAAQgEAFgFAEIgLAFIgLADIgMABQgMAAgLgEgAgQgFQgIACgGAEQgFAFgDAHQgDAHAAAHQAAAIADAHQADAHAFAEQAGAFAIADQAHADAJAAQAKAAAIgDQAIgDAGgFQAFgEAEgHQAEgHAAgIQAAgHgEgHQgEgHgFgFQgGgEgIgCQgIgEgKAAQgJAAgHAEg");
	this.shape_74.setTransform(-323,61);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAKgBQAEgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgEgCQgFgCgDgFQgDgEAAgHQAAgHADgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAFAJIgNAIQgEgGgGgDQgGgEgJAAIgHABQgEABgEACIgEAEQgCACgBAEQABAHAEADQAGADAKACIAQADQALACAJAGQAHAGAAAKQAAAIgEAFQgDAGgHADIgNAFIgQACQgMAAgLgEg");
	this.shape_75.setTransform(245.1,40);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgFgIAAgLQAAgJAFgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAJAEAIAGQAGAGAEAJQADAIAAAKIAAAFIhbAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgKALgLAEQgMAFgOAAQgMAAgKgEgAgMghQgIACgFAEQgFAFgDAFQgEAFAAAGIBLAAQAAgNgKgIQgKgJgRAAQgHAAgGADg");
	this.shape_76.setTransform(233.5,40);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AglAmQgKgJAAgSIAAg6IAQAAIAAAzQAAAIABAGQACAFADAFQADADAGACQAGACAJABIAGgBQAFgBAGgDQAGgEAEgHQAFgIABgMIAAgvIAPAAIAABHIAAAKIABALIgQAAIAAgHIAAgIIgBAAQgDAEgDADQgEADgFACQgFADgGABIgKACQgWAAgKgKg");
	this.shape_77.setTransform(220.2,40.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("Ag6BMIAAiVIAPAAIAAAQIABAAQAEgFAFgDIALgFQAGgDAGgBIAKgBQAOAAAKAEQALAEAIAGQAIAHAEAIQAEAJAAALQAAAKgEAJQgEAIgIAGQgIAHgLADQgKAFgOAAIgKgBIgMgEIgLgFQgFgEgEgEIgBAAIAABIgAgRg8QgHACgGAGQgHAEgCAIQgEAGAAAIQAAAIAEAGQACAHAHAFQAGAEAHACQAJADAIABQAKgBAHgDQAJgCAFgEQAGgFACgHQADgGAAgIQAAgIgDgGQgCgIgGgEQgFgGgJgCQgHgDgKAAQgIAAgJADg");
	this.shape_78.setTransform(206.8,42.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgRAXIAQgtIATAAIgTAtg");
	this.shape_79.setTransform(189.4,45.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgFgJQgDgIAAgLQAAgJADgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAKAEAGAGQAHAGAEAJQAEAIgBAKIAAAFIhbAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgNghQgGACgGAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgKgJgRAAQgGAAgIADg");
	this.shape_80.setTransform(179.5,40);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AAGA8QgFgBgDgEQgEgCgDgFQgDgEABgJIAAg4IgYAAIAAgNIAYAAIAAgaIAOAAIAAAaIAgAAIAAANIggAAIAAA1IABAJIADAEIAGADIAGABIAIgCIAIgCIABAMQgJADgMABIgJgBg");
	this.shape_81.setTransform(169,38.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAIAAIAAgDQAAgYgdAAQgSAAgOALIgKgJQAPgOAfAAQAIAAAIACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgHAAgHgCgAAHABIgRACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAIAAAGgDQAGgCAFgEQADgEACgFQACgGABgGIAAgHIgIAAIgPABg");
	this.shape_82.setTransform(158.7,40);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIAAgRIAOAAIAAASIABAAIAFgIQADgEAFgCQACgDAHgBQAFgCAIAAQAGAAAGABIgEAMIgJAAQgJAAgGACQgFAEgFAEQgEAFgCAEQgCAGAAAEIAAAzg");
	this.shape_83.setTransform(149.9,39.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AAFA8QgEgBgEgEQgEgCgCgFQgDgEAAgJIAAg4IgXAAIAAgNIAXAAIAAgaIAPAAIAAAaIAgAAIAAANIggAAIAAA1IABAJIAEAEIAEADIAHABIAIgCIAIgCIABAMQgJADgNABIgJgBg");
	this.shape_84.setTransform(141.1,38.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AAhAvIAAgyQgBgPgGgIQgHgIgQAAIgGABQgGAAgGADQgGAEgFAIQgEAGAAAMIAAAvIgQAAIAAhHIAAgJIgBgLIAQAAIABAIIAAAHIAAAAIAHgHIAJgGIALgDIAJgBQAWgBAKAKQAKAKAAARIAAA5g");
	this.shape_85.setTransform(130.3,39.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgTBDQgKgDgJgHQgHgGgEgJQgFgJAAgKQAAgLAFgJQAEgIAHgGQAIgHAKgDQAKgEALAAQANAAAKAEQAJADAIAHQAGAGAEAHQADAJAAAJIAAAGIhbAAQABAHADAGQADAGAGAFQAFAEAHADQAHACAIAAQAMAAAJgFQAKgEAEgHIAMAJQgKAKgLAFQgMAEgOAAQgMAAgKgEgAgMgLQgIADgFAEQgFAEgDAEQgEAGAAAFIBLAAQAAgNgKgHQgKgIgRAAQgHAAgGACgAgNgqIAWgcIAWAAIgfAcg");
	this.shape_86.setTransform(117.4,37.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgPAtQgKgDgIgHQgIgGgEgJQgDgJAAgLQAAgJADgJQAEgJAIgHQAIgGAKgEQAMgEAMAAQAMABAKADQAKAEAJAIIgOAJQgDgGgIgDQgHgEgJAAQgJAAgIADQgHADgFAFQgGAFgDAGQgCAHAAAHQAAAIACAHQADAHAGAEQAFAFAHADQAIADAJAAQAJAAAHgEQAIgDADgFIAOAIQgJAIgKAEQgKADgMABQgMAAgMgEg");
	this.shape_87.setTransform(105.5,40);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AAgAvIAAgyQABgPgHgIQgHgIgRAAIgFABQgGAAgGADQgGAEgEAIQgFAGgBAMIAAAvIgPAAIAAhHIAAgJIgBgLIAQAAIAAAIIAAAHIABAAIAHgHIAJgGIAKgDIALgBQAUgBALAKQAKAKAAARIAAA5g");
	this.shape_88.setTransform(92.6,39.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_89.setTransform(79.1,40);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AgVBEQgQgGgMgJQgLgKgHgOQgHgNAAgQQAAgPAHgNQAHgNALgLQAMgKAQgFQAQgGASABQAPAAAQAEQAPAGAMAMIgPAJQgDgEgEgDQgFgDgGgCIgMgFIgNgCQgQAAgMAGQgNAEgJAJQgJAIgFALQgEALAAALQAAAMAEALQAFALAJAJQAJAIANAFQAMAEAQABIANgCIANgDQAGgCAFgFQAGgDAFgHIAOAJIgLAKQgGAEgIAEQgIAEgKACQgJACgKAAQgSgBgQgFg");
	this.shape_90.setTransform(64,37.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgIAIQgEgEAAgEQAAgDAEgEQADgCAFAAQAGAAADACQAEAEAAADQAAAEgEAEQgDACgGAAQgFAAgDgCg");
	this.shape_91.setTransform(45.6,43.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAKgBQAEgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgEgCQgFgCgDgFQgDgEAAgHQgBgHAEgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAFAJIgNAIQgFgGgFgDQgGgEgJAAIgHABQgEABgEACIgEAEQgCACAAAEQAAAHAEADQAGADAKACIAQADQALACAJAGQAHAGAAAKQAAAIgEAFQgDAGgHADIgNAFIgQACQgMAAgLgEg");
	this.shape_92.setTransform(37.3,40);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgOALIgKgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgHAAgHgCgAAHABIgRACQgIACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAHAAAHgDQAGgCAFgEQADgEACgFQACgGAAgGIAAgHIgHAAIgPABg");
	this.shape_93.setTransform(25.8,40);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AgXBbIADgMIAAAAIAEABIAFABQAFAAAEgCQACgCACgDIACgGIAAgHIAAhsIAQAAIAABvIAAAGQgBAFgCAFQgDAFgGADQgHAFgLAAQgHAAgGgCgAAEhLQgDgDAAgEQAAgEADgCQAEgEAEAAQAEAAAEAEQAEACAAAEQAAAEgEADQgEACgEAAQgEAAgEgCg");
	this.shape_94.setTransform(15.9,40.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AgTAtQgKgEgIgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAJAEAIAGQAGAGAEAJQADAIAAAKIAAAFIhbAAQABAHADAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgMghQgIACgFAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgKgJgRAAQgHAAgGADg");
	this.shape_95.setTransform(7.7,40);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIgBgRIAQAAIAAASIAAAAIAFgIQADgEAEgCQADgDAGgBQAHgCAHAAQAHAAAFABIgEAMIgJAAQgJAAgGACQgFAEgFAEQgEAFgCAEQgCAGAAAEIAAAzg");
	this.shape_96.setTransform(-1.8,39.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAHAAIAAgDQABgYgdAAQgSAAgPALIgJgJQAQgOAeAAQAIAAAHACQAIACAFAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgGAKgKAEQgKAEgMAAQgIAAgGgCgAAHABIgQACQgIACgHAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAIAAAGgDQAGgCAEgEQAFgEACgFQABgGAAgGIAAgHIgIAAIgOABg");
	this.shape_97.setTransform(-13.2,40);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("Ag6BMIAAiVIAQAAIAAAQIAAAAQAEgFAFgDIALgFQAGgDAGgBIAKgBQANAAALAEQALAEAHAGQAJAHAEAIQAEAJAAALQAAAKgEAJQgEAIgJAGQgHAHgLADQgLAFgNAAIgKgBIgMgEIgLgFQgFgEgEgEIAAAAIAABIgAgQg8QgIACgHAGQgGAEgDAIQgDAGAAAIQAAAIADAGQADAHAGAFQAHAEAIACQAIADAIABQAKgBAIgDQAHgCAGgEQAFgFADgHQADgGAAgIQAAgIgDgGQgDgIgFgEQgGgGgHgCQgIgDgKAAQgIAAgIADg");
	this.shape_98.setTransform(-25.9,42.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgDgEAAgHQABgHADgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAGAJIgPAIQgEgGgFgDQgGgEgIAAIgIABQgEABgDACIgGAEQgCACAAAEQAAAHAGADQAFADAKACIAQADQAMACAHAGQAIAGAAAKQAAAIgDAFQgFAGgFADIgOAFIgQACQgMAAgLgEg");
	this.shape_99.setTransform(-45.1,40);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAHAAAJACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgQACQgIACgFAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAFgEACgFQACgGAAgGIAAgHIgJAAIgPABg");
	this.shape_100.setTransform(-56.6,40);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_101.setTransform(-65.3,37.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AgTAtQgLgEgIgGQgHgHgFgJQgDgIAAgLQAAgJADgJQAFgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAKAEAGAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQAAAHAEAGQADAGAGAEQAFAFAHACQAHADAHAAQANAAAJgFQAKgFAEgGIAMAIQgJALgMAEQgNAFgOAAQgKAAgLgEgAgNghQgGACgGAEQgFAFgDAFQgDAFAAAGIBKAAQAAgNgKgIQgJgJgSAAQgGAAgIADg");
	this.shape_102.setTransform(-81.2,40);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgXBIQgKgDgJgHQgHgGgEgKQgFgIAAgLQAAgKAFgJQAEgIAHgHQAJgGAKgEQALgDAMAAIALABQAHAAAFADQAGACAFAEQAGACADAGIABAAIAAhJIAPAAIAACUIgPAAIAAgPIgBAAQgDAFgGADIgLAGIgMADIgLABQgMAAgLgEgAgRgGQgHADgFAEQgGAFgDAHQgDAGAAAIQAAAIADAHQADAHAGAFQAFAEAHADQAJADAIAAQAJAAAJgDQAIgDAGgEQAFgFAEgHQADgHABgIQgBgIgDgGQgEgHgFgFQgGgEgIgDQgJgCgJAAQgIAAgJACg");
	this.shape_103.setTransform(-95.4,37.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AAgAvIAAgyQAAgPgGgIQgHgIgQAAIgGABQgGAAgGADQgGAEgEAIQgGAGAAAMIAAAvIgPAAIAAhHIAAgJIgBgLIAQAAIAAAIIAAAHIABAAIAHgHIAJgGIAKgDIAKgBQAVgBALAKQAKAKAAARIAAA5g");
	this.shape_104.setTransform(-115.6,39.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AgXBDQgLgDgHgHQgIgGgFgJQgEgJAAgKQAAgLAEgJQAFgIAIgGQAHgHALgDQALgEAMAAQANAAALAEQAKADAIAHQAIAGAEAIQAFAJAAALQAAAKgFAJQgEAJgIAGQgIAHgKADQgLAEgNAAQgMAAgLgEgAgRgKQgHACgGAGQgFADgDAHQgDAHAAAIQAAAHADAHQADAHAFAFQAGAFAHACQAIADAJAAQAKAAAHgDQAIgCAFgFQAGgFADgHQADgHAAgHQAAgIgDgHQgDgHgGgDQgFgGgIgCQgHgDgKAAQgJAAgIADgAgNgqIAWgcIAWAAIgfAcg");
	this.shape_105.setTransform(-129.1,37.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgHBFIAAhcIAOAAIAABcgAgHgzQgEgDAAgEQAAgEAEgDQADgDAEAAQAEAAADADQAFADAAAEQAAAEgFADQgDACgEAAQgEAAgDgCg");
	this.shape_106.setTransform(-138.9,37.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AgPAtQgKgDgIgHQgIgGgEgJQgDgJAAgLQAAgJADgJQAEgJAIgHQAIgGAKgEQAMgEAMAAQALABALADQAKAEAJAIIgOAJQgDgGgHgDQgIgEgJAAQgJAAgIADQgHADgFAFQgGAFgDAGQgDAHAAAHQAAAIADAHQADAHAGAEQAFAFAHADQAIADAJAAQAJAAAIgEQAHgDADgFIAOAIQgJAIgKAEQgLADgLABQgMAAgMgEg");
	this.shape_107.setTransform(-147.1,40);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgOALIgKgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgHAAgHgCgAAHABIgRACQgIACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAHAAAHgDQAGgCAFgEQADgEACgFQACgGAAgGIAAgHIgHAAIgPABg");
	this.shape_108.setTransform(-159.6,40);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AgOAtQgLgDgIgHQgHgGgFgJQgDgJAAgLQAAgJADgJQAFgJAHgHQAIgGALgEQAKgEANAAQALABALADQAKAEAJAIIgOAJQgDgGgIgDQgHgEgJAAQgJAAgIADQgHADgFAFQgGAFgDAGQgCAHAAAHQAAAIACAHQADAHAGAEQAFAFAHADQAIADAJAAQAJAAAHgEQAIgDADgFIAOAIQgJAIgKAEQgLADgLABQgNAAgKgEg");
	this.shape_109.setTransform(-170.7,40);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgHBFIAAhcIAPAAIAABcgAgHgzQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEACgEAAQgDAAgEgCg");
	this.shape_110.setTransform(-179.7,37.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AgKBLIgMgDIgLgGQgFgDgEgFIgBAAIAAAPIgPAAIAAiUIAPAAIAABJIABAAQAEgGAFgCIALgGQAFgDAHAAIAKgBQANAAALADQALAEAIAGQAHAHAFAIQAEAJAAAKQAAALgEAIQgFAKgHAGQgIAHgLADQgLAEgNAAIgKgBgAgRgGQgHADgGAEQgHAFgCAHQgEAGAAAIQAAAIAEAHQACAHAHAFQAGAEAHADQAJADAIAAQAKAAAHgDQAJgDAFgEQAFgFADgHQADgHAAgIQAAgIgDgGQgDgHgFgFQgFgEgJgDQgHgCgKAAQgIAAgJACg");
	this.shape_111.setTransform(-189.4,37.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AglAmQgKgJAAgSIAAg6IAQAAIAAAzQAAAIABAGQACAFADAFQADADAGACQAGACAJABIAGgBQAFgBAGgDQAGgEAEgHQAFgIABgMIAAgvIAPAAIAABHIAAAKIABALIgQAAIAAgHIAAgIIgBAAQgDAEgDADQgEADgFACQgFADgGABIgKACQgWAAgKgKg");
	this.shape_112.setTransform(-203.7,40.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgOALIgKgJQAPgOAfAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAFgEQADgEADgFQACgGAAgGIAAgHIgIAAIgQABg");
	this.shape_113.setTransform(-223.2,40);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_114.setTransform(-231.9,37.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgFgJQgDgIAAgLQAAgJADgJQAFgJAHgHQAIgGAKgEQALgEAKAAQANAAAKAEQAJAEAHAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgJALgMAEQgMAFgOAAQgLAAgLgEgAgNghQgGACgGAEQgFAFgDAFQgDAFgBAGIBLAAQAAgNgKgIQgJgJgSAAQgGAAgIADg");
	this.shape_115.setTransform(-247.8,40);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("AgXBIQgKgDgJgHQgHgGgEgKQgFgIAAgLQAAgKAFgJQAEgIAHgHQAJgGAKgEQALgDAMAAIALABQAGAAAGADQAGACAFAEQAGACADAGIABAAIAAhJIAPAAIAACUIgPAAIAAgPIgBAAQgDAFgGADIgLAGIgMADIgLABQgMAAgLgEgAgQgGQgIADgGAEQgFAFgDAHQgDAGAAAIQAAAIADAHQADAHAFAFQAGAEAIADQAHADAJAAQAJAAAJgDQAIgDAGgEQAFgFAEgHQADgHABgIQgBgIgDgGQgEgHgFgFQgGgEgIgDQgJgCgJAAQgJAAgHACg");
	this.shape_116.setTransform(-262,37.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#111111").s().p("AAhAvIAAgyQgBgPgGgIQgGgIgSAAIgFABQgGAAgGADQgGAEgFAIQgEAGAAAMIAAAvIgQAAIAAhHIAAgJIgBgLIAQAAIABAIIAAAHIAAAAIAHgHIAJgGIALgDIAKgBQAUgBALAKQAKAKAAARIAAA5g");
	this.shape_117.setTransform(-275.7,39.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgFgIAAgLQAAgJAFgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAJAEAIAGQAGAGAEAJQADAIAAAKIAAAFIhbAAQABAHADAGQADAGAFAEQAGAFAHACQAIADAHAAQAMAAAJgFQAKgFAEgGIAMAIQgJALgNAEQgLAFgOAAQgMAAgKgEgAgMghQgIACgFAEQgGAFgDAFQgDAFAAAGIBKAAQABgNgKgIQgKgJgRAAQgHAAgGADg");
	this.shape_118.setTransform(-288.6,40);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIgBgRIAQAAIAAASIAAAAIAFgIQADgEAEgCQAEgDAFgBQAHgCAHAAQAHAAAEABIgDAMIgJAAQgJAAgGACQgFAEgFAEQgEAFgCAEQgCAGAAAEIAAAzg");
	this.shape_119.setTransform(-298.1,39.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#111111").s().p("Ag6BMIAAiVIAQAAIAAAQIAAAAQAEgFAFgDIALgFQAFgDAHgBIAKgBQANAAALAEQALAEAHAGQAJAHAEAIQAEAJAAALQAAAKgEAJQgEAIgJAGQgHAHgLADQgLAFgNAAIgKgBIgMgEIgLgFQgFgEgEgEIAAAAIAABIgAgQg8QgIACgHAGQgFAEgEAIQgDAGAAAIQAAAIADAGQAEAHAFAFQAHAEAIACQAHADAJABQAKgBAIgDQAHgCAGgEQAFgFADgHQADgGAAgIQAAgIgDgGQgDgIgFgEQgGgGgHgCQgIgDgKAAQgJAAgHADg");
	this.shape_120.setTransform(-309.9,42.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgOALIgKgJQAQgOAeAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAFgEQADgEADgFQACgGAAgGIAAgHIgIAAIgQABg");
	this.shape_121.setTransform(-324,40);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#111111").s().p("AgrBGIgHgBIACgNQAFACAHAAQAIAAAFgFQAEgEAEgHIAIgSIguhdIAUAAIAiBMIAihMIATAAIg3BzQgFAMgHAFQgIAHgOAAIgIAAg");
	this.shape_122.setTransform(290.9,18.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAIAAIAAgDQAAgYgdAAQgSAAgOALIgKgJQAPgOAfAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgIAAgGgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAIAAAGgDQAGgCAFgEQADgEACgFQADgGAAgGIAAgHIgIAAIgQABg");
	this.shape_123.setTransform(272.2,16.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_124.setTransform(263.4,13.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_125.setTransform(257.8,13.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAHAAAJACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgQACQgIACgFAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAFgEACgFQACgGAAgGIAAgHIgJAAIgPABg");
	this.shape_126.setTransform(248.5,16.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#111111").s().p("AAGA7QgFgBgDgDQgEgCgDgFQgDgFABgHIAAg6IgYAAIAAgMIAYAAIAAgaIAOAAIAAAaIAgAAIAAAMIggAAIAAA2IABAIIADAGIAGACIAGAAIAIgBIAIgCIABAMQgJAEgMAAIgJgCg");
	this.shape_127.setTransform(238.8,15.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#111111").s().p("AAhAwIAAgzQgBgPgGgIQgHgJgQABIgGABQgGAAgGADQgGAEgFAHQgEAIAAALIAAAwIgQAAIAAhHIAAgKIgBgLIAQAAIABAHIAAAIIAAAAIAHgHIAJgFIALgEIAJgCQAWAAAKAKQAKAJAAASIAAA6g");
	this.shape_128.setTransform(228.1,16.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAHAAAJACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgQACQgIACgFAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAFgEACgFQACgGAAgGIAAgHIgJAAIgPABg");
	this.shape_129.setTransform(215.2,16.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#111111").s().p("Ag6BMIAAiVIAQAAIAAAQIAAAAQAEgFAFgDIALgGQAFgCAHgBIAKgBQANAAALAEQALADAHAHQAJAGAEAJQAEAKAAAKQAAAKgEAJQgEAIgJAGQgHAHgLADQgLAEgNABIgKgCIgMgDIgLgFQgFgDgEgFIAAAAIAABIgAgQg8QgJACgGAGQgFAEgEAIQgDAGAAAIQAAAHADAIQAEAGAFAFQAGAEAJADQAHACAJAAQAKAAAHgCQAJgDAFgEQAGgFACgGQADgIAAgHQAAgIgDgGQgCgIgGgEQgFgGgJgCQgHgDgKAAQgJAAgHADg");
	this.shape_130.setTransform(202.5,19.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAHAAAJACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgQACQgIACgFAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAFgEQAEgEACgFQACgGAAgGIAAgHIgIAAIgQABg");
	this.shape_131.setTransform(181.9,16.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_132.setTransform(173.2,13.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#111111").s().p("AAhAwIAAgzQAAgPgHgIQgHgJgRABIgFABQgGAAgGADQgGAEgFAHQgEAIgBALIAAAwIgPAAIAAhHIAAgKIgBgLIAQAAIAAAHIAAAIIABAAIAHgHIAJgFIAKgEIALgCQAUAAALAKQAKAJAAASIAAA6g");
	this.shape_133.setTransform(157,16.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#111111").s().p("AgTAtQgKgEgIgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAJAEAIAGQAGAGAEAJQADAIAAAKIAAAFIhbAAQABAHADAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgMghQgIACgFAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgKgJgRAAQgHAAgGADg");
	this.shape_134.setTransform(144.1,16.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAKgBQAEgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgEgCQgFgCgDgFQgDgEAAgHQAAgHADgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAFAJIgNAIQgEgGgGgDQgGgEgIAAIgIABQgEABgEACIgEAEQgCACgBAEQABAHAEADQAGADAKACIAQADQALACAJAGQAHAGAAAKQAAAIgEAFQgDAGgHADIgNAFIgQACQgMAAgLgEg");
	this.shape_135.setTransform(125.9,16.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_136.setTransform(113.8,16.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#111111").s().p("AAGA7QgFgBgDgDQgEgCgDgFQgDgFABgHIAAg6IgYAAIAAgMIAYAAIAAgaIAOAAIAAAaIAgAAIAAAMIggAAIAAA2IABAIIADAGIAGACIAGAAIAIgBIAIgCIABAMQgJAEgMAAIgJgCg");
	this.shape_137.setTransform(102.9,15.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAKgBQAEgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgEgCQgFgCgDgFQgDgEAAgHQAAgHADgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAFAJIgNAIQgEgGgGgDQgGgEgJAAIgHABQgEABgEACIgEAEQgCACgBAEQABAHAEADQAGADAKACIAQADQALACAJAGQAHAGAAAKQAAAIgEAFQgDAGgHADIgNAFIgQACQgMAAgLgEg");
	this.shape_138.setTransform(93.9,16.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgFgIAAgLQAAgJAFgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAJAEAIAGQAGAGADAJQAEAIAAAKIAAAFIhbAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgKALgLAEQgMAFgOAAQgMAAgKgEgAgMghQgIACgFAEQgFAFgDAFQgEAFAAAGIBLAAQAAgNgKgIQgKgJgRAAQgHAAgGADg");
	this.shape_139.setTransform(82.3,16.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#111111").s().p("AglAmQgKgKAAgRIAAg6IAQAAIAAAzQAAAHABAGQACAHADADQADAFAGABQAGACAJAAIAGAAQAFgBAGgDQAGgEAEgIQAFgGABgNIAAgvIAPAAIAABHIAAAKIABALIgQAAIAAgIIAAgHIgBAAQgDAEgDADQgEADgFACQgFADgGABIgKACQgWAAgKgKg");
	this.shape_140.setTransform(69,16.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#111111").s().p("Ag6BMIAAiVIAPAAIAAAQIABAAQAEgFAFgDIALgGQAGgCAGgBIAKgBQAOAAAKAEQALADAHAHQAJAGAEAJQAEAKAAAKQAAAKgEAJQgEAIgJAGQgHAHgLADQgKAEgOABIgKgCIgMgDIgLgFQgFgDgEgFIgBAAIAABIgAgRg8QgHACgGAGQgHAEgCAIQgEAGAAAIQAAAHAEAIQACAGAHAFQAGAEAHADQAJACAIAAQAKAAAHgCQAJgDAFgEQAGgFACgGQADgIAAgHQAAgIgDgGQgCgIgGgEQgFgGgJgCQgHgDgKAAQgIAAgJADg");
	this.shape_141.setTransform(55.6,19.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgDgEAAgHQABgHADgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAGAJIgPAIQgDgGgGgDQgGgEgJAAIgHABQgEABgDACIgGAEQgBACAAAEQAAAHAEADQAGADAKACIAQADQALACAIAGQAIAGAAAKQAAAIgDAFQgFAGgFADIgOAFIgQACQgMAAgLgEg");
	this.shape_142.setTransform(43,16.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#111111").s().p("AgHBFIAAhcIAOAAIAABcgAgHgzQgDgDgBgEQABgEADgDQADgDAEAAQAEAAADADQAFADAAAEQAAAEgFADQgDACgEAAQgEAAgDgCg");
	this.shape_143.setTransform(35.1,14.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#111111").s().p("AgXBIQgLgEgHgGQgIgHgFgIQgEgJAAgKQAAgLAEgJQAFgIAIgGQAHgHALgDQALgFAMAAIAMABQAFABAGADQAGACAFADQAFAEAEAEIAAAAIAAhIIAQAAIAACVIgQAAIAAgQIAAAAQgEAFgFAEIgLAFIgLADIgMABQgMAAgLgEgAgRgFQgHACgFAFQgGAEgDAHQgDAGAAAJQAAAHADAHQADAGAGAGQAFAFAHACQAIADAJAAQAKAAAHgDQAJgCAGgFQAGgGADgGQAEgHgBgHQABgJgEgGQgDgHgGgEQgGgFgJgCQgHgDgKAAQgJAAgIADg");
	this.shape_144.setTransform(24.7,13.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgEgCQgFgCgDgFQgDgEAAgHQgBgHAEgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAFAJIgNAIQgFgGgFgDQgGgEgJAAIgHABQgEABgEACIgEAEQgCACAAAEQAAAHAEADQAGADAKACIAQADQALACAJAGQAHAGAAAKQAAAIgEAFQgDAGgHADIgNAFIgQACQgMAAgLgEg");
	this.shape_145.setTransform(6.3,16.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_146.setTransform(-5.9,16.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#111111").s().p("AAhAwIAAgzQgBgPgGgIQgGgJgSABIgFABQgGAAgGADQgGAEgFAHQgEAIAAALIAAAwIgQAAIAAhHIAAgKIgBgLIAQAAIABAHIAAAIIAAAAIAHgHIAJgFIALgEIAKgCQAUAAALAKQAKAJAAASIAAA6g");
	this.shape_147.setTransform(-19.6,16.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_148.setTransform(-33.1,16.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#111111").s().p("AgPAtQgKgDgIgHQgIgGgEgJQgDgJAAgLQAAgJADgJQAEgJAIgHQAIgGAKgEQAMgEAMAAQALABALADQAKAEAJAIIgOAJQgDgGgHgDQgIgEgJAAQgJAAgIADQgHADgFAFQgGAFgDAGQgDAHAAAHQAAAIADAHQADAHAGAEQAFAFAHADQAIADAJAAQAJAAAIgEQAHgDADgFIAOAIQgJAIgKAEQgLADgLABQgMAAgMgEg");
	this.shape_149.setTransform(-45.4,16.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#111111").s().p("AgPBGIAAhcIAPAAIAABcgAgWgoIAXgdIAVAAIgdAdg");
	this.shape_150.setTransform(-53.5,14);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgCgEAAgHQgBgHAEgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAFAJIgNAIQgEgGgGgDQgGgEgJAAIgHABQgEABgEACIgEAEQgCACAAAEQAAAHAEADQAGADAKACIAQADQALACAIAGQAIAGAAAKQAAAIgEAFQgDAGgHADIgNAFIgQACQgMAAgLgEg");
	this.shape_151.setTransform(-68.8,16.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_152.setTransform(-80.9,16.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_153.setTransform(-90.7,13.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgFgJQgDgIAAgLQAAgJADgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAKAEAGAGQAHAGAEAJQADAIAAAKIAAAFIhbAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgNghQgGACgGAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgKgJgRAAQgGAAgIADg");
	this.shape_154.setTransform(-106.7,16.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#111111").s().p("AAGA7QgFgBgDgDQgEgCgDgFQgDgFABgHIAAg6IgYAAIAAgMIAYAAIAAgaIAOAAIAAAaIAgAAIAAAMIggAAIAAA2IABAIIADAGIAGACIAGAAIAIgBIAIgCIABAMQgJAEgMAAIgJgCg");
	this.shape_155.setTransform(-117.2,15.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111111").s().p("AAgAwIAAgzQABgPgHgIQgHgJgRABIgFABQgGAAgGADQgGAEgEAHQgFAIgBALIAAAwIgPAAIAAhHIAAgKIgBgLIAQAAIAAAHIAAAIIABAAIAHgHIAJgFIAKgEIALgCQAUAAALAKQAKAJAAASIAAA6g");
	this.shape_156.setTransform(-127.9,16.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgFgJQgDgIAAgLQAAgJADgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAKAEAGAGQAHAGAEAJQADAIAAAKIAAAFIhbAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgNghQgGACgGAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgKgJgRAAQgGAAgIADg");
	this.shape_157.setTransform(-140.9,16.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#111111").s().p("ABDAwIAAg1QAAgPgFgHQgGgIgRABQgIAAgGADQgGACgEAFQgDAFgCAGQgCAGAAAGIAAAxIgOAAIAAg1QAAgPgGgHQgGgIgQABIgHABQgFAAgFADQgGAEgEAHQgFAIAAALIAAAwIgPAAIAAhHIgBgKIAAgLIAQAAIAAAOIABAAQAFgIALgEQAKgEAKgBIAJABQAFABAFADQAFACAEADQADAEADAGQAFgJAKgFQAKgFALgBQAWAAAKAKQAKAJAAASIAAA6g");
	this.shape_158.setTransform(-157.8,16.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgOALIgKgJQAPgOAfAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAFgEQADgEADgFQACgGAAgGIAAgHIgIAAIgQABg");
	this.shape_159.setTransform(-174.1,16.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#111111").s().p("AAFA7QgEgBgEgDQgEgCgCgFQgDgFAAgHIAAg6IgXAAIAAgMIAXAAIAAgaIAPAAIAAAaIAgAAIAAAMIggAAIAAA2IABAIIAEAGIAEACIAHAAIAIgBIAIgCIABAMQgJAEgNAAIgJgCg");
	this.shape_160.setTransform(-183.8,15.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#111111").s().p("AAhAwIAAgzQgBgPgGgIQgHgJgQABIgGABQgGAAgGADQgGAEgFAHQgEAIAAALIAAAwIgQAAIAAhHIAAgKIgBgLIAQAAIABAHIAAAIIAAAAIAHgHIAJgFIALgEIAJgCQAWAAAKAKQAKAJAAASIAAA6g");
	this.shape_161.setTransform(-194.6,16.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgFgJQgDgIAAgLQAAgJADgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAKAEAGAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgNghQgGACgGAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgJgJgSAAQgGAAgIADg");
	this.shape_162.setTransform(-207.6,16.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#111111").s().p("AAFA7QgEgBgEgDQgEgCgCgFQgDgFAAgHIAAg6IgXAAIAAgMIAXAAIAAgaIAPAAIAAAaIAgAAIAAAMIggAAIAAA2IABAIIAEAGIAEACIAHAAIAIgBIAIgCIABAMQgJAEgNAAIgJgCg");
	this.shape_163.setTransform(-218,15.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgOALIgKgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgHAAgHgCgAAHABIgRACQgIACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAHAAAHgDQAGgCAFgEQADgEACgFQACgGAAgGIAAgHIgHAAIgPABg");
	this.shape_164.setTransform(-228.4,16.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgPALIgJgJQAPgOAfAAQAHAAAIACQAHACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgPACQgJACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAEgEADgFQABgGAAgGIAAgHIgIAAIgPABg");
	this.shape_165.setTransform(-247.3,16.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#111111").s().p("AgIAuIgthbIATAAIAiBNIABAAIAjhNIASAAIgtBbg");
	this.shape_166.setTransform(-258.8,16.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#111111").s().p("AgeAwIAAg/IAAgNIgBgQIAPAAIAAARIABAAIAFgHQADgDAEgDQAEgDAGgCQAFgCAIAAQAGABAFABIgDANIgJgBQgJAAgGADQgGACgEAFQgEAFgCAFQgCAFAAAFIAAAzg");
	this.shape_167.setTransform(-267.4,16.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgEgIgBgLQABgJAEgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAKAEAGAGQAHAGADAJQAEAIABAKIAAAFIhcAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgJALgMAEQgMAFgOAAQgLAAgLgEgAgNghQgGACgGAEQgFAFgDAFQgEAFAAAGIBLAAQAAgNgKgIQgKgJgRAAQgGAAgIADg");
	this.shape_168.setTransform(-279,16.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAKgBQAEgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgEgCQgFgCgDgFQgEgEAAgHQAAgHAEgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAFAJIgOAIQgEgGgFgDQgGgEgIAAIgIABQgEABgEACIgFAEQgCACAAAEQAAAHAGADQAFADAKACIAQADQAMACAIAGQAHAGAAAKQAAAIgEAFQgEAGgFADIgOAFIgQACQgMAAgLgEg");
	this.shape_169.setTransform(-290.6,16.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#111111").s().p("AgKBLIgMgDIgLgFQgFgEgEgFIAAAAIAAAQIgQAAIAAiVIAQAAIAABIIAAAAQAEgEAFgEIALgFQAGgDAGgBIAKgBQAOAAAKAFQALADAHAHQAJAGAEAIQAEAJAAALQAAAKgEAJQgEAIgJAHQgHAGgLAEQgKAEgOAAIgKgBgAgRgFQgIACgFAFQgHAEgCAHQgEAGAAAJQAAAHAEAHQACAGAHAGQAFAFAIACQAIADAJAAQAKAAAHgDQAJgCAFgFQAGgGACgGQADgHAAgHQAAgJgDgGQgCgHgGgEQgFgFgJgCQgHgDgKAAQgJAAgIADg");
	this.shape_170.setTransform(-302.5,13.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#111111").s().p("AgiBEQgQgGgLgKQgMgJgHgNQgGgOAAgQQAAgPAGgOQAHgNAMgJQALgKAQgGQAQgGASAAQATAAAQAGQAQAGALAKQAMAJAHANQAGAOAAAPQAAAQgGAOQgHANgMAJQgLAKgQAGQgQAGgTAAQgSAAgQgGgAgcg3QgNAGgJAIQgIAIgFALQgFALAAALQAAAMAFALQAFALAIAIQAJAIANAGQANAEAPAAQAQAAANgEQANgGAJgIQAIgIAFgLQAFgLAAgMQAAgLgFgLQgFgLgIgIQgJgIgNgGQgNgEgQAAQgPAAgNAEg");
	this.shape_171.setTransform(-320,14);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("AgIAHQgEgDAAgEQAAgDAEgDQADgDAFgBQAGABADADQAEADAAADQAAAEgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_172.setTransform(-204.7,-27.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAIAAIAAgDQAAgYgdAAQgSAAgOALIgKgJQAPgOAfAAQAIAAAIACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgHAAgHgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAIAAAGgDQAGgCAFgEQADgEACgFQACgGABgGIAAgHIgIAAIgQABg");
	this.shape_173.setTransform(-214.4,-31);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#111111").s().p("AgeAwIAAg/IAAgNIAAgQIAOAAIAAARIABAAIAFgHQADgDAFgDQACgDAHgCQAFgCAIAAQAGABAGABIgEANIgJgBQgJAAgGADQgFADgFAEQgEAFgCAFQgCAFAAAFIAAAzg");
	this.shape_174.setTransform(-223.1,-31.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_175.setTransform(-235.1,-31);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#111111").s().p("AAgBLIAAgzQAAgQgGgIQgHgHgRAAIgGABQgFAAgHAEQgFACgFAIQgFAHAAAMIAAAwIgPAAIAAiVIAPAAIAABIIAAAAIAHgHIAJgFIALgEIAKgBQAVAAAKAJQALAKgBAQIAAA7g");
	this.shape_176.setTransform(-248.9,-33.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgOALIgKgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgHAAgHgCgAAHABIgRACQgIACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAHAAAHgDQAGgCAFgEQADgEACgFQACgGAAgGIAAgHIgHAAIgPABg");
	this.shape_177.setTransform(-261.7,-31);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgPALIgJgJQAPgOAfAAQAHAAAIACQAIACAFAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgPACQgJACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAEgEADgFQABgGAAgGIAAgHIgIAAIgPABg");
	this.shape_178.setTransform(-280.6,-31);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#111111").s().p("AAFA7QgEgBgEgCQgDgDgDgFQgCgFgBgHIAAg6IgXAAIAAgLIAXAAIAAgbIAPAAIAAAbIAgAAIAAALIggAAIAAA2IABAIIADAGIAGACIAGAAIAIgBIAIgCIABAMQgJADgNAAIgJgBg");
	this.shape_179.setTransform(-290.3,-32.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgDgEAAgHQABgHADgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAGAJIgPAIQgEgGgFgDQgGgEgIAAIgIABQgEABgDACIgGAEQgCACAAAEQAAAHAGADQAFADAKACIAQADQAMACAHAGQAIAGAAAKQAAAIgDAFQgEAGgGADIgOAFIgQACQgMAAgLgEg");
	this.shape_180.setTransform(-299.3,-31);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgOALIgKgJQAPgOAfAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgHAAgHgCgAAHABIgRACQgIACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAHAAAHgDQAGgCAFgEQAEgEABgFQACgGAAgGIAAgHIgHAAIgPABg");
	this.shape_181.setTransform(-310.8,-31);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#111111").s().p("AAgBLIAAgzQAAgQgHgIQgGgHgRAAIgFABQgHAAgGAEQgFACgFAIQgFAHAAAMIAAAwIgPAAIAAiVIAPAAIAABIIABAAIAGgHIAJgFIALgEIAKgBQAVAAAKAJQAKAKAAAQIAAA7g");
	this.shape_182.setTransform(-323.4,-33.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_183.setTransform(277.7,-54.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#111111").s().p("AgXBIQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgKAEgJQAFgIAIgHQAHgGALgEQALgDAMAAIAMABQAGABAFACQAGACAFAEQAFACAEAGIAAAAIAAhJIAQAAIAACUIgQAAIAAgPIAAAAQgEAFgFAEIgLAFIgLADIgMABQgMAAgLgEgAgRgGQgHADgFAEQgGAFgDAHQgDAHAAAHQAAAIADAHQADAHAGAEQAFAFAHADQAJADAIAAQAJAAAIgDQAJgDAGgFQAGgEADgHQAEgHgBgIQABgHgEgHQgDgHgGgFQgGgEgJgDQgIgDgJAAQgIAAgJADg");
	this.shape_184.setTransform(263.1,-57.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#111111").s().p("AgHBFIAAhcIAPAAIAABcgAgHgzQgEgDABgEQgBgEAEgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape_185.setTransform(253.4,-57);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#111111").s().p("AgXBIQgKgEgJgGQgHgHgEgJQgFgIAAgLQAAgKAFgJQAEgIAHgHQAJgGAKgEQALgDAMAAIALABQAHABAFACQAGACAFAEQAGACADAGIABAAIAAhJIAPAAIAACUIgPAAIAAgPIgBAAQgDAFgGAEIgLAFIgMADIgLABQgMAAgLgEgAgRgGQgHADgFAEQgGAFgDAHQgDAHAAAHQAAAIADAHQADAHAGAEQAFAFAHADQAJADAIAAQAJAAAJgDQAIgDAGgFQAFgEAEgHQADgHABgIQgBgHgDgHQgEgHgFgFQgGgEgIgDQgJgDgJAAQgIAAgJADg");
	this.shape_186.setTransform(243,-57.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#111111").s().p("AAhAvIAAgxQgBgQgGgIQgHgJgQAAIgGABQgGABgGAEQgGADgFAIQgEAGAAAMIAAAvIgQAAIAAhHIAAgJIgBgLIAQAAIABAIIAAAHIAAAAIAHgHIAJgGIALgDIAJgBQAWAAAKAJQAKAKAAARIAAA5g");
	this.shape_187.setTransform(229.3,-54.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgFgIAAgLQAAgJAFgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAJAEAIAGQAGAGADAJQAEAIAAAKIAAAFIhbAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgKALgLAEQgMAFgOAAQgMAAgKgEgAgMghQgIACgFAEQgFAFgDAFQgEAFAAAGIBLAAQAAgNgKgIQgKgJgRAAQgHAAgGADg");
	this.shape_188.setTransform(216.4,-54.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIgBgRIAPAAIAAARIABAAIAFgHQADgEAEgCQAEgDAGgCQAFgBAIAAQAGgBAFACIgDAMIgJgBQgJAAgGAEQgGADgEAEQgEAEgCAFQgCAFAAAGIAAAyg");
	this.shape_189.setTransform(206.9,-54.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#111111").s().p("Ag6BMIAAiUIAQAAIAAAPIAAAAQAEgFAFgDIALgFQAGgDAGgBIAKgBQANAAALAEQALADAHAHQAJAHAEAJQAEAIAAALQAAALgEAIQgEAIgJAHQgHAGgLAEQgLADgNAAIgKgBIgMgCIgLgGQgFgEgEgFIAAAAIAABJgAgQg8QgIADgHAFQgGAFgDAGQgDAHAAAIQAAAIADAGQADAHAGAFQAHAEAIACQAIAEAIAAQAKAAAIgEQAHgCAGgEQAFgFADgHQADgGAAgIQAAgIgDgHQgDgGgFgFQgGgFgHgDQgIgDgKAAQgIAAgIADg");
	this.shape_190.setTransform(195.1,-52);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAHAAAJACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABQgHAAgJACQgIACgFAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAFgEACgFQACgGAAgGIAAgHIgJAAIgPABg");
	this.shape_191.setTransform(181,-54.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_192.setTransform(161.5,-54.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_193.setTransform(151.7,-57.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIAAgRIAPAAIAAARIAAAAIAFgHQADgEAFgCQADgDAFgCQAHgBAHAAQAHgBAFACIgEAMIgJgBQgJAAgGAEQgGADgEAEQgEAEgCAFQgCAFAAAGIAAAyg");
	this.shape_194.setTransform(139.4,-54.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgPALIgJgJQAPgOAfAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABQgHAAgIACQgJACgFAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAEgEADgFQABgGAAgGIAAgHIgIAAIgPABg");
	this.shape_195.setTransform(128,-54.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#111111").s().p("AgsAuIAAgJIBAhGIg9AAIAAgMIBTAAIAAAJIhABGIBDAAIAAAMg");
	this.shape_196.setTransform(117.1,-54.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#111111").s().p("AAgAvIAAgxQAAgQgGgIQgHgJgQAAIgGABQgGABgGAEQgGADgEAIQgGAGABAMIAAAvIgQAAIAAhHIAAgJIgBgLIAQAAIABAIIAAAHIAAAAIAHgHIAJgGIAKgDIAKgBQAVAAALAJQAKAKAAARIAAA5g");
	this.shape_197.setTransform(105.3,-54.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAPgOAfAAQAHAAAIACQAHACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABQgHAAgIACQgJACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAEgEADgFQABgGABgGIAAgHIgJAAIgPABg");
	this.shape_198.setTransform(92.5,-54.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#111111").s().p("AgHBFIAAhcIAOAAIAABcgAgHgzQgEgDAAgEQAAgEAEgDQADgDAEAAQAEAAADADQAFADAAAEQAAAEgFADQgDACgEAAQgEAAgDgCg");
	this.shape_199.setTransform(83.8,-57);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#111111").s().p("AgMBMIAAhQIgYAAIAAgMIAYAAIAAgZQAAgSAKgIQAJgIARAAIAHAAIAGABIgDAMIgGgBIgGAAQgGAAgFACQgEABgBAEIgEAHIAAAKIAAAXIAaAAIAAAMIgaAAIAABQg");
	this.shape_200.setTransform(78,-57.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgOALIgKgJQAPgOAfAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgHAKgJAEQgJAEgNAAQgIAAgGgCgAAGABQgHAAgJACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAHAAAHgDQAGgCAFgEQADgEADgFQACgGAAgGIAAgHIgIAAIgQABg");
	this.shape_201.setTransform(67.5,-54.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAHABQgIAAgIACQgIACgHAEQgFAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAHAAAHgDQAGgCAEgEQAFgEABgFQACgGAAgGIAAgHIgIAAIgOABg");
	this.shape_202.setTransform(48.7,-54.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#111111").s().p("AAgAvIAAgxQABgQgHgIQgGgJgSAAIgFABQgGABgGAEQgGADgEAIQgGAGAAAMIAAAvIgPAAIAAhHIAAgJIgBgLIAQAAIAAAIIAAAHIABAAIAHgHIAJgGIAKgDIAKgBQAWAAAKAJQAKAKAAARIAAA5g");
	this.shape_203.setTransform(29.5,-54.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#111111").s().p("AgWBGQgHgCgFgEQgGgDgDgFQgDgFAAgHQAAgLAHgHQAHgGAKgDQALgDALgBIAWgBIAHAAIAAgCQABgXgdAAQgSAAgPALIgJgKQAQgNAeAAQAIAAAHACQAIACAFAEQAGAEADAGQADAGAAAIIAAApIABALIABAKIgPAAIgBgIIgBgHIAAAAQgHAJgJAEQgKAEgMAAQgIAAgGgBgAAHAXQgIABgIACQgIABgHAEQgFAEAAAHQAAAFACADIAGAFQAEADAEAAIAKABQAIAAAGgCQAGgCAEgEQAFgFACgFQABgFAAgHIAAgGIgIAAIgOAAgAgKgqIAWgcIAWAAIggAcg");
	this.shape_204.setTransform(16.6,-57);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIgBgRIAQAAIAAARIAAAAIAFgHQADgEAEgCQAEgDAFgCQAHgBAHAAQAHgBAEACIgDAMIgJgBQgJAAgGAEQgFADgFAEQgEAEgCAFQgCAFAAAGIAAAyg");
	this.shape_205.setTransform(7.9,-54.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAHABQgIAAgIACQgJACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAHAAAHgDQAGgCAEgEQAFgEABgFQACgGAAgGIAAgHIgIAAIgOABg");
	this.shape_206.setTransform(-3.5,-54.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#111111").s().p("AgXBIQgLgEgHgGQgIgHgEgJQgFgIAAgLQAAgKAFgJQAEgIAIgHQAHgGALgEQALgDAMAAIAMABQAFABAGACQAGACAFAEQAFACAEAGIAAAAIAAhJIAQAAIAACUIgQAAIAAgPIAAAAQgEAFgFAEIgLAFIgLADIgMABQgMAAgLgEgAgQgGQgIADgGAEQgFAFgDAHQgDAHAAAHQAAAIADAHQADAHAFAEQAGAFAIADQAHADAJAAQAKAAAIgDQAIgDAGgFQAFgEAEgHQAEgHAAgIQAAgHgEgHQgEgHgFgFQgGgEgIgDQgIgDgKAAQgJAAgHADg");
	this.shape_207.setTransform(-17,-57.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#111111").s().p("AglAmQgKgKAAgRIAAg5IAPAAIAAAxQABAIABAHQACAGADAEQADADAGADQAGACAJAAIAFgBQAGgBAGgEQAGgDAFgIQAEgHAAgMIAAguIAQAAIAABHIABAJIAAALIgQAAIgBgIIAAgHIAAAAQgDAEgEADQgDADgGADQgFACgFABQgFACgFgBQgVAAgLgJg");
	this.shape_208.setTransform(-30.5,-54.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#111111").s().p("AgrBGIgHgCIACgMQAFACAHAAQAIAAAFgEQAEgFAEgIIAIgRIguhdIAUAAIAiBMIAihMIATAAIg3BzQgFALgHAHQgIAGgOAAIgIAAg");
	this.shape_209.setTransform(-42.7,-52.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAHABQgIAAgIACQgJACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAHAAAHgDQAGgCAEgEQAFgEABgFQACgGAAgGIAAgHIgIAAIgOABg");
	this.shape_210.setTransform(-54.8,-54.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgFgJQgDgIAAgLQAAgJADgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAKAEAGAGQAHAGAEAJQADAIAAAKIAAAFIhbAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgNghQgGACgGAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgKgJgRAAQgGAAgIADg");
	this.shape_211.setTransform(-73.8,-54.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#111111").s().p("AAGA7QgFAAgDgDQgEgDgDgFQgDgEABgJIAAg4IgYAAIAAgMIAYAAIAAgaIAOAAIAAAaIAgAAIAAAMIggAAIAAA1IABAJIADAEIAGADIAGABIAIgBIAIgDIABAMQgJADgMAAIgJgBg");
	this.shape_212.setTransform(-84.3,-55.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgFgIAAgLQAAgJAFgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAJAEAIAGQAGAGAEAJQADAIAAAKIAAAFIhbAAQABAHADAGQADAGAFAEQAGAFAHACQAIADAHAAQAMAAAJgFQAKgFAEgGIAMAIQgJALgNAEQgLAFgOAAQgMAAgKgEgAgMghQgIACgFAEQgGAFgDAFQgDAFAAAGIBKAAQABgNgKgIQgKgJgRAAQgHAAgGADg");
	this.shape_213.setTransform(-101.4,-54.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#111111").s().p("AgkAmQgLgKAAgRIAAg5IAPAAIAAAxQAAAIACAHQABAGAEAEQADADAGADQAGACAJAAIAGgBQAFgBAGgEQAGgDAEgIQAFgHABgMIAAguIAPAAIAABHIAAAJIABALIgQAAIAAgIIAAgHIgBAAQgCAEgEADQgFADgEADQgFACgGABQgFACgFgBQgWAAgJgJg");
	this.shape_214.setTransform(-114.7,-54.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#111111").s().p("AArBMIAAhJIAAAAQgEAFgFAEIgLAGIgLACIgMABQgMAAgLgDQgLgEgHgGQgIgHgFgIQgEgIAAgLQAAgLAEgIQAFgJAIgHQAHgHALgDQALgEAMAAIAMABQAFABAGADQAGACAFADQAFADAEAFIAAAAIAAgPIAQAAIAACUgAgRg8QgHADgGAFQgFAFgDAGQgDAHAAAIQAAAIADAGQADAHAFAFQAGAEAHACQAIAEAJAAQAKAAAHgEQAJgCAGgEQAGgFADgHQAEgGgBgIQABgIgEgHQgDgGgGgFQgGgFgJgDQgHgDgKAAQgJAAgIADg");
	this.shape_215.setTransform(-128.8,-52);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgDgEAAgHQABgHADgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAGAJIgPAIQgEgGgFgDQgGgEgIAAIgIABQgEABgDACIgGAEQgCACAAAEQAAAHAGADQAFADAKACIAQADQAMACAHAGQAIAGAAAKQAAAIgDAFQgFAGgFADIgOAFQgIACgIAAQgMAAgLgEg");
	this.shape_216.setTransform(-147.2,-54.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_217.setTransform(-159.3,-54.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#111111").s().p("AgHBFIAAhcIAOAAIAABcgAgHgzQgDgDgBgEQABgEADgDQADgDAEAAQAEAAADADQAFADAAAEQAAAEgFADQgDACgEAAQgEAAgDgCg");
	this.shape_218.setTransform(-169.2,-57);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#111111").s().p("AgPAtQgKgDgIgHQgIgGgDgJQgEgJgBgLQABgJAEgJQADgJAIgHQAIgGAKgEQALgEANAAQALABALADQAKAEAIAIIgNAJQgDgGgHgDQgIgEgJAAQgJAAgIADQgHADgFAFQgGAFgDAGQgDAHAAAHQAAAIADAHQADAHAGAEQAFAFAHADQAIADAJAAQAJAAAIgEQAHgDADgFIANAIQgIAIgKAEQgLADgLABQgNAAgLgEg");
	this.shape_219.setTransform(-177.3,-54.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#111111").s().p("AgHBFIAAhcIAPAAIAABcgAgHgzQgEgDABgEQgBgEAEgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDADQgEACgEAAQgEAAgDgCg");
	this.shape_220.setTransform(-186.2,-57);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#111111").s().p("AgOAtQgLgDgIgHQgHgGgFgJQgEgJAAgLQAAgJAEgJQAFgJAHgHQAIgGALgEQALgEAMAAQAMABAKADQAKAEAIAIIgMAJQgEgGgIgDQgGgEgKAAQgJAAgHADQgIADgGAFQgFAFgDAGQgDAHABAHQgBAIADAHQADAHAFAEQAGAFAIADQAHADAJAAQAKAAAGgEQAIgDAEgFIAMAIQgIAIgKAEQgKADgMABQgMAAgLgEg");
	this.shape_221.setTransform(-194.4,-54.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIgBgRIAQAAIAAARIAAAAIAFgHQADgEAEgCQADgDAGgCQAHgBAHAAQAHgBAEACIgDAMIgJgBQgJAAgGAEQgFADgFAEQgEAEgCAFQgCAFAAAGIAAAyg");
	this.shape_222.setTransform(-203.4,-54.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgEgJQgFgIAAgLQAAgJAFgJQAEgJAIgHQAHgGAKgEQAKgEALAAQANAAAKAEQAJAEAIAGQAGAGAEAJQADAIAAAKIAAAFIhbAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAJgFAEgGIAMAIQgJALgNAEQgMAFgOAAQgKAAgLgEgAgMghQgIACgFAEQgFAFgEAFQgDAFAAAGIBKAAQAAgNgJgIQgKgJgRAAQgHAAgGADg");
	this.shape_223.setTransform(-214.9,-54.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#111111").s().p("AgXBbIADgMIAAABIAEAAIAFABQAFgBAEgBQACgCACgDIACgGIAAgHIAAhrIAQAAIAABuIAAAHQgBAEgCAFQgDAFgGAEQgHADgLAAQgHAAgGgBgAAEhLQgDgDAAgEQAAgEADgCQAEgDAEAAQAEAAAEADQAEACAAAEQAAAEgEADQgEADgEAAQgEAAgEgDg");
	this.shape_224.setTransform(-225.6,-54.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#111111").s().p("AgTAtQgLgEgIgGQgHgHgFgJQgDgIAAgLQAAgJADgJQAFgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAKAEAGAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQAAAHAEAGQADAGAGAEQAFAFAHACQAHADAHAAQANAAAJgFQAKgFAEgGIAMAIQgJALgMAEQgNAFgOAAQgKAAgLgEgAgNghQgGACgGAEQgFAFgDAFQgDAFAAAGIBKAAQAAgNgKgIQgJgJgSAAQgGAAgIADg");
	this.shape_225.setTransform(-233.8,-54.7);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgCgEAAgHQgBgHAEgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAFAJIgNAIQgEgGgGgDQgGgEgJAAIgHABQgEABgEACIgEAEQgCACAAAEQAAAHAEADQAGADAKACIAQADQALACAIAGQAIAGAAAKQAAAIgEAFQgDAGgHADIgNAFQgIACgIAAQgMAAgLgEg");
	this.shape_226.setTransform(-251.9,-54.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_227.setTransform(-264.1,-54.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#111111").s().p("AAhAvIAAgxQgBgQgGgIQgHgJgQAAIgGABQgGABgGAEQgGADgFAIQgEAGAAAMIAAAvIgQAAIAAhHIAAgJIgBgLIAQAAIABAIIAAAHIAAAAIAHgHIAJgGIALgDIAJgBQAWAAAKAJQAKAKAAARIAAA5g");
	this.shape_228.setTransform(-277.8,-54.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#111111").s().p("AgkAmQgLgKAAgRIAAg5IAPAAIAAAxQABAIABAHQACAGADAEQAEADAFADQAGACAJAAIAFgBQAGgBAGgEQAGgDAFgIQAEgHAAgMIAAguIAQAAIAABHIAAAJIABALIgQAAIgBgIIAAgHIAAAAQgDAEgEADQgDADgGADQgFACgFABQgFACgFgBQgWAAgJgJg");
	this.shape_229.setTransform(-290.9,-54.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#111111").s().p("AgfBDQgMgFgLgJIAMgLQAGAIAMAFQALAEANAAQALAAAIgDQAJgCAEgFQAFgFADgHQACgGAAgIIAAgRIgBAAQgHAKgLAEQgLAEgMAAQgLAAgLgEQgKgDgIgHQgHgGgFgIQgEgIgBgKQAAgKAFgJQAEgJAHgGQAIgHAKgDQALgEALAAIAKABQAGAAAGADQAFABAFAEQAGADAEAGIABAAIAAgQIAPAAIAABbQAAAIgBAIQgDAIgGAIQgHAHgLAEQgMAFgSAAQgQAAgOgEgAgOg3QgIACgGAFQgFAFgEAHQgDAGAAAHQAAAIADAGQAEAGAFAEQAGAFAIADQAHADAIAAQAIAAAIgDQAIgCAFgFQAGgDADgHQADgHAAgIQAAgHgDgGQgCgHgGgFQgFgFgIgCQgIgDgJAAQgIAAgHADg");
	this.shape_230.setTransform(-305,-52.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_231.setTransform(-314.7,-57.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgOALIgKgJQAQgOAeAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAGABQgHAAgJACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAFgEQADgEADgFQACgGAAgGIAAgHIgIAAIgQABg");
	this.shape_232.setTransform(-324,-54.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgDgEAAgHQABgHADgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAGAJIgPAIQgEgGgFgDQgGgEgIAAIgIABQgEABgDACIgGAEQgCACAAAEQAAAHAGADQAFADAKACIAQADQAMACAHAGQAIAGAAAKQAAAIgDAFQgFAGgFADIgOAFIgQACQgMAAgLgEg");
	this.shape_233.setTransform(310.9,-78.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_234.setTransform(298.8,-78.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#111111").s().p("ABDAvIAAg1QAAgNgFgIQgGgHgRAAQgIAAgGACQgGADgEAFQgDAFgCAGQgCAGAAAHIAAAvIgOAAIAAg1QAAgNgGgIQgGgHgQAAIgHABQgFAAgFADQgGAEgEAIQgFAGAAAMIAAAvIgPAAIAAhHIgBgJIAAgLIAQAAIAAAOIABAAQAFgIALgEQAKgFAKAAIAJACQAFAAAFADQAFACAEADQADAEADAGQAFgJAKgFQAKgGALAAQAWAAAKAKQAKAKAAARIAAA5g");
	this.shape_235.setTransform(281.5,-78.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgFgJQgDgIAAgLQAAgJADgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAKAEAGAGQAHAGAEAJQADAIAAAKIAAAFIhbAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgNghQgGACgGAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgKgJgRAAQgGAAgIADg");
	this.shape_236.setTransform(265,-78.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIAAgRIAPAAIAAASIAAAAIAFgIQADgDAEgDQAEgDAFgBQAHgCAHgBQAHAAAFACIgEAMIgJAAQgJAAgGACQgGADgEAFQgEAFgCAEQgCAFAAAFIAAAzg");
	this.shape_237.setTransform(255.5,-78.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAPgOAfAAQAHAAAIACQAHACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgPACQgJACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAEgEADgFQABgGABgGIAAgHIgJAAIgPABg");
	this.shape_238.setTransform(244.1,-78.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#111111").s().p("AAgBLIAAgzQAAgQgHgIQgGgHgRAAIgFABQgHAAgGAEQgGACgEAIQgFAHAAAMIAAAwIgPAAIAAiVIAPAAIAABIIABAAIAHgHIAJgFIAKgEIAKgBQAVAAAKAJQALAKAAAQIAAA7g");
	this.shape_239.setTransform(231.6,-81.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#111111").s().p("AgRAXIAQgtIASAAIgSAtg");
	this.shape_240.setTransform(215.3,-73.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIAAgRIAOAAIAAASIABAAIAFgIQADgDAFgDQADgDAFgBQAGgCAIgBQAGAAAGACIgEAMIgJAAQgJAAgGACQgGADgEAFQgEAFgCAEQgCAFAAAFIAAAzg");
	this.shape_241.setTransform(209.1,-78.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAHAAAJACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgQACQgIACgFAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAFgEQAEgEACgFQACgGAAgGIAAgHIgIAAIgQABg");
	this.shape_242.setTransform(197.7,-78.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#111111").s().p("AgkAmQgLgJAAgSIAAg6IAPAAIAAAzQABAHABAGQACAGADAFQAEADAFACQAGACAJAAIAFAAQAGgBAGgDQAGgEAFgHQAEgIAAgMIAAgvIAQAAIAABHIAAAKIABALIgQAAIgBgHIAAgIIAAAAQgDAEgEADQgDADgGACQgFADgFABIgKACQgWAAgJgKg");
	this.shape_243.setTransform(185.2,-78.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#111111").s().p("AAhAvIAAgyQAAgPgHgIQgHgIgRAAIgFABQgGAAgGADQgGAEgFAIQgEAGgBAMIAAAvIgPAAIAAhHIAAgJIgBgLIAQAAIAAAIIAAAHIABAAIAHgHIAJgGIAKgDIALgCQAUAAALAKQAKAKAAARIAAA5g");
	this.shape_244.setTransform(171.9,-78.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#111111").s().p("AgHBFIAAhcIAPAAIAABcgAgHgzQgEgDAAgEQAAgEAEgDQAEgDADAAQAEAAAEADQADADABAEQgBAEgDADQgEACgEAAQgDAAgEgCg");
	this.shape_245.setTransform(162.7,-80.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#111111").s().p("AAFA8QgEgCgEgDQgEgCgCgFQgDgEAAgJIAAg4IgXAAIAAgNIAXAAIAAgaIAPAAIAAAaIAgAAIAAANIggAAIAAA1IABAJIAEAEIAEADIAHAAIAIgBIAIgCIABAMQgJADgNABIgJgBg");
	this.shape_246.setTransform(155.9,-79.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#111111").s().p("AAhAvIAAgyQgBgPgGgIQgHgIgQAAIgGABQgGAAgGADQgGAEgFAIQgEAGAAAMIAAAvIgQAAIAAhHIAAgJIgBgLIAQAAIABAIIAAAHIAAAAIAHgHIAJgGIALgDIAKgCQAVAAAKAKQAKAKAAARIAAA5g");
	this.shape_247.setTransform(145.2,-78.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_248.setTransform(131.7,-78.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#111111").s().p("AgPAtQgKgDgIgHQgIgGgEgJQgDgJAAgLQAAgJADgJQAEgJAIgHQAIgGAKgEQAMgEAMAAQAMABAKADQAKAEAJAIIgOAJQgDgGgIgDQgHgEgJAAQgJAAgIADQgHADgFAFQgGAFgDAGQgCAHAAAHQAAAIACAHQADAHAGAEQAFAFAHADQAIADAJAAQAJAAAHgEQAIgDADgFIAOAIQgJAIgKAEQgKADgMABQgMAAgMgEg");
	this.shape_249.setTransform(119.4,-78.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgEgJQgFgIAAgLQAAgJAFgJQAEgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAJAEAIAGQAGAGAEAJQADAIAAAKIAAAFIhbAAQABAHADAGQADAGAFAEQAGAFAHACQAIADAHAAQAMAAAJgFQAKgFAEgGIAMAIQgJALgNAEQgLAFgOAAQgMAAgKgEgAgMghQgIACgFAEQgGAFgDAFQgDAFAAAGIBKAAQABgNgKgIQgKgJgRAAQgHAAgGADg");
	this.shape_250.setTransform(100.2,-78.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#111111").s().p("AgXBIQgKgDgIgHQgIgGgFgKQgEgIAAgKQAAgLAEgJQAFgIAIgHQAIgGAKgDQALgEAMgBIAMACQAFABAGACQAGACAFAEQAGADADAEIAAAAIAAhIIAQAAIAACUIgQAAIAAgPIAAAAQgDAFgGADIgLAGIgLADIgMABQgMAAgLgEgAgQgGQgIADgGAEQgFAFgDAHQgDAGAAAJQAAAHADAHQADAGAFAGQAGAEAIADQAHADAJAAQAKAAAHgDQAJgDAGgEQAFgGAEgGQADgHAAgHQAAgJgDgGQgEgHgFgFQgGgEgJgDQgHgCgKAAQgJAAgHACg");
	this.shape_251.setTransform(86,-81.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgCgEAAgHQgBgHAEgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAFAJIgNAIQgEgGgGgDQgGgEgJAAIgHABQgEABgEACIgEAEQgCACAAAEQAAAHAEADQAGADAKACIAQADQALACAIAGQAIAGAAAKQAAAIgEAFQgDAGgHADIgNAFIgQACQgMAAgLgEg");
	this.shape_252.setTransform(67.6,-78.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#111111").s().p("AgTAtQgKgEgJgGQgHgHgFgJQgDgIAAgLQAAgJADgJQAFgJAHgHQAIgGAKgEQALgEAKAAQANAAAKAEQAJAEAHAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQABAHADAGQADAGAGAEQAFAFAHACQAHADAIAAQAMAAAJgFQAKgFAEgGIAMAIQgJALgMAEQgMAFgOAAQgLAAgLgEgAgNghQgGACgGAEQgFAFgDAFQgDAFgBAGIBLAAQAAgNgKgIQgJgJgSAAQgGAAgIADg");
	this.shape_253.setTransform(55.9,-78.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#111111").s().p("AAGA8QgGgCgCgDQgEgCgDgFQgCgEAAgJIAAg4IgYAAIAAgNIAYAAIAAgaIAOAAIAAAaIAgAAIAAANIggAAIAAA1IABAJIAEAEIAEADIAHAAIAIgBIAIgCIABAMQgJADgMABIgJgBg");
	this.shape_254.setTransform(45.4,-79.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#111111").s().p("AAhAvIAAgyQAAgPgHgIQgGgIgSAAIgFABQgGAAgGADQgGAEgFAIQgEAGAAAMIAAAvIgQAAIAAhHIAAgJIgBgLIAQAAIABAIIAAAHIAAAAIAHgHIAJgGIALgDIAKgCQAUAAALAKQAKAKAAARIAAA5g");
	this.shape_255.setTransform(34.7,-78.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#111111").s().p("AA9BGIgSglIhVAAIgSAlIgUAAIBJiLIAPAAIBJCLgAgjAUIBHAAIgkhIg");
	this.shape_256.setTransform(20.2,-80.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#111111").s().p("AgIAIQgEgEAAgEQAAgDAEgEQADgCAFAAQAGAAADACQAEAEAAADQAAAEgEAEQgDACgGAAQgFAAgDgCg");
	this.shape_257.setTransform(2.2,-74.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_258.setTransform(-8.1,-78.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#111111").s().p("AgXBIQgKgDgJgHQgHgGgEgKQgFgIAAgKQAAgLAFgJQAEgIAHgHQAJgGAKgDQALgEAMgBIALACQAGABAGACQAGACAFAEQAFADAEAEIABAAIAAhIIAPAAIAACUIgPAAIAAgPIgBAAQgEAFgFADIgLAGIgMADIgLABQgMAAgLgEgAgQgGQgIADgGAEQgFAFgDAHQgDAGAAAJQAAAHADAHQADAGAFAGQAGAEAIADQAIADAIAAQAJAAAJgDQAIgDAGgEQAGgGADgGQAEgHAAgHQAAgJgEgGQgDgHgGgFQgGgEgIgDQgJgCgJAAQgIAAgIACg");
	this.shape_259.setTransform(-22.7,-81.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAHAAIAAgDQABgYgdAAQgSAAgPALIgJgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAHABIgQACQgIACgHAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAIAAAGgDQAGgCAEgEQAFgEABgFQACgGAAgGIAAgHIgIAAIgOABg");
	this.shape_260.setTransform(-36,-78.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#111111").s().p("AgXBIQgKgDgIgHQgIgGgFgKQgEgIAAgKQAAgLAEgJQAFgIAIgHQAIgGAKgDQALgEAMgBIAMACQAFABAGACQAGACAFAEQAGADADAEIAAAAIAAhIIAQAAIAACUIgQAAIAAgPIAAAAQgDAFgGADIgLAGIgLADIgMABQgMAAgLgEgAgQgGQgIADgGAEQgFAFgDAHQgDAGAAAJQAAAHADAHQADAGAFAGQAGAEAIADQAHADAJAAQAKAAAHgDQAJgDAGgEQAFgGAEgGQADgHAAgHQAAgJgDgGQgEgHgFgFQgGgEgJgDQgHgCgKAAQgJAAgHACg");
	this.shape_261.setTransform(-49.5,-81.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#111111").s().p("AgHBFIAAhcIAPAAIAABcgAgHgzQgEgDAAgEQAAgEAEgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEACgEAAQgDAAgEgCg");
	this.shape_262.setTransform(-59.2,-80.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#111111").s().p("AglAmQgKgJAAgSIAAg6IAQAAIAAAzQAAAHABAGQACAGADAFQADADAGACQAGACAJAAIAGAAQAFgBAGgDQAGgEAEgHQAFgIABgMIAAgvIAPAAIAABHIAAAKIABALIgQAAIAAgHIAAgIIgBAAQgDAEgDADQgEADgFACQgFADgGABIgKACQgWAAgKgKg");
	this.shape_263.setTransform(-68.7,-78.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#111111").s().p("AgPAtQgKgDgIgHQgIgGgEgJQgDgJAAgLQAAgJADgJQAEgJAIgHQAIgGAKgEQAMgEAMAAQALABALADQAKAEAJAIIgOAJQgDgGgHgDQgIgEgJAAQgJAAgIADQgHADgFAFQgGAFgDAGQgDAHAAAHQAAAIADAHQADAHAGAEQAFAFAHADQAIADAJAAQAJAAAIgEQAHgDADgFIAOAIQgJAIgKAEQgLADgLABQgMAAgMgEg");
	this.shape_264.setTransform(-80.5,-78.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_265.setTransform(-93.6,-78.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#111111").s().p("AAFA8QgEgCgEgDQgEgCgCgFQgDgEAAgJIAAg4IgXAAIAAgNIAXAAIAAgaIAPAAIAAAaIAgAAIAAANIggAAIAAA1IABAJIAEAEIAEADIAHAAIAIgBIAIgCIABAMQgJADgNABIgJgBg");
	this.shape_266.setTransform(-104.5,-79.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#111111").s().p("AglAmQgKgJAAgSIAAg6IAQAAIAAAzQgBAHACAGQACAGADAFQADADAGACQAGACAJAAIAFAAQAGgBAGgDQAGgEAEgHQAGgIgBgMIAAgvIAQAAIAABHIABAKIAAALIgQAAIgBgHIAAgIIAAAAQgCAEgFADQgDADgGACQgEADgGABIgKACQgVAAgLgKg");
	this.shape_267.setTransform(-115.2,-78.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAHAAAJACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgQACQgIACgFAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAFgEACgFQACgGAAgGIAAgHIgJAAIgPABg");
	this.shape_268.setTransform(-128.1,-78.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_269.setTransform(-143.4,-81.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#111111").s().p("AgTAtQgLgEgIgGQgHgHgFgJQgDgIAAgLQAAgJADgJQAFgJAHgHQAIgGAKgEQAKgEALAAQANAAAKAEQAKAEAGAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQAAAHAEAGQADAGAGAEQAFAFAHACQAHADAHAAQANAAAJgFQAKgFAEgGIAMAIQgJALgMAEQgNAFgOAAQgKAAgLgEgAgNghQgGACgGAEQgFAFgDAFQgDAFAAAGIBKAAQAAgNgKgIQgJgJgSAAQgGAAgIADg");
	this.shape_270.setTransform(-152.8,-78.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#111111").s().p("AgXBIQgKgDgJgHQgHgGgEgKQgFgIAAgKQAAgLAFgJQAEgIAHgHQAJgGAKgDQALgEAMgBIALACQAHABAFACQAGACAFAEQAGADADAEIABAAIAAhIIAPAAIAACUIgPAAIAAgPIgBAAQgDAFgGADIgLAGIgMADIgLABQgMAAgLgEgAgRgGQgHADgFAEQgGAFgDAHQgDAGAAAJQAAAHADAHQADAGAGAGQAFAEAHADQAJADAIAAQAJAAAJgDQAIgDAGgEQAFgGAEgGQADgHABgHQgBgJgDgGQgEgHgFgFQgGgEgIgDQgJgCgJAAQgIAAgJACg");
	this.shape_271.setTransform(-167,-81.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAIAAIAAgDQAAgYgdAAQgSAAgOALIgKgJQAPgOAfAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgIAAgGgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAIAAAGgDQAGgCAFgEQADgEACgFQADgGAAgGIAAgHIgIAAIgQABg");
	this.shape_272.setTransform(-186.8,-78.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#111111").s().p("AgHBFIAAhcIAPAAIAABcgAgHgzQgEgDAAgEQAAgEAEgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEACgEAAQgDAAgEgCg");
	this.shape_273.setTransform(-195.5,-80.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#111111").s().p("AgPAtQgKgDgIgHQgIgGgEgJQgDgJAAgLQAAgJADgJQAEgJAIgHQAIgGAKgEQAMgEAMAAQAMABAKADQAKAEAJAIIgOAJQgDgGgIgDQgHgEgJAAQgJAAgIADQgHADgFAFQgGAFgDAGQgCAHAAAHQAAAIACAHQADAHAGAEQAFAFAHADQAIADAJAAQAJAAAHgEQAIgDADgFIAOAIQgJAIgKAEQgKADgMABQgMAAgMgEg");
	this.shape_274.setTransform(-203.7,-78.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#111111").s().p("AAgAvIAAgyQAAgPgGgIQgHgIgQAAIgGABQgGAAgGADQgGAEgFAIQgEAGAAAMIAAAvIgQAAIAAhHIAAgJIgBgLIAQAAIABAIIAAAHIAAAAIAHgHIAJgGIALgDIAJgCQAWAAAKAKQAKAKAAARIAAA5g");
	this.shape_275.setTransform(-216.5,-78.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAHAAAJACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgQACQgIACgFAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAFgEACgFQACgGAAgGIAAgHIgJAAIgPABg");
	this.shape_276.setTransform(-229.4,-78.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#111111").s().p("AAGA8QgFgCgDgDQgEgCgDgFQgDgEABgJIAAg4IgYAAIAAgNIAYAAIAAgaIAOAAIAAAaIAgAAIAAANIggAAIAAA1IABAJIADAEIAGADIAGAAIAIgBIAIgCIABAMQgJADgMABIgJgBg");
	this.shape_277.setTransform(-239.1,-79.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#111111").s().p("AgeAvIAAg+IAAgMIAAgRIAOAAIAAASIABAAIAFgIQADgDAFgDQACgDAHgBQAFgCAIgBQAGAAAGACIgEAMIgJAAQgJAAgGACQgFADgFAFQgEAFgCAEQgCAFAAAFIAAAzg");
	this.shape_278.setTransform(-246,-78.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_279.setTransform(-258,-78.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#111111").s().p("Ag6BMIAAiVIAPAAIAAAQIABAAQAEgFAFgDIALgGQAFgCAHgBIAKgBQANAAALAEQALAEAIAGQAHAHAFAIQAEAKAAAKQAAAKgEAJQgFAIgHAGQgIAHgLADQgLAFgNAAIgKgBIgMgEIgLgFQgFgEgEgEIgBAAIAABIgAgRg8QgIADgGAFQgFAEgEAIQgDAGAAAIQAAAHADAHQAEAHAFAFQAGAEAIACQAJADAIAAQAKAAAIgDQAHgCAGgEQAFgFADgHQADgHAAgHQAAgIgDgGQgDgIgFgEQgGgFgHgDQgIgDgKAAQgIAAgJADg");
	this.shape_280.setTransform(-271.8,-75.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#111111").s().p("ABDAvIAAg1QAAgNgFgIQgGgHgRAAQgIAAgGACQgGADgEAFQgDAFgCAGQgCAGAAAHIAAAvIgOAAIAAg1QAAgNgGgIQgGgHgQAAIgHABQgFAAgFADQgGAEgEAIQgFAGAAAMIAAAvIgPAAIAAhHIgBgJIAAgLIAQAAIAAAOIABAAQAFgIALgEQAKgFAKAAIAJACQAFAAAFADQAFACAEADQADAEADAGQAFgJAKgFQAKgGALAAQAWAAAKAKQAKAKAAARIAAA5g");
	this.shape_281.setTransform(-289.7,-78.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#111111").s().p("AgHBFIAAhcIAPAAIAABcgAgHgzQgEgDABgEQgBgEAEgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEACgEAAQgDAAgEgCg");
	this.shape_282.setTransform(-302.4,-80.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAHAAIAAgDQABgYgdAAQgSAAgPALIgJgJQAQgOAeAAQAIAAAHACQAIACAFAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgGAKgKAEQgKAEgMAAQgIAAgGgCgAAHABIgQACQgIACgHAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAIAAAGgDQAGgCAEgEQAFgEACgFQABgGAAgGIAAgHIgIAAIgOABg");
	this.shape_283.setTransform(-318.3,-78.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_284.setTransform(-327,-81.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAIAAIAAgDQAAgYgdAAQgSAAgOALIgKgJQAPgOAfAAQAIAAAIACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgGAKgKAEQgJAEgNAAQgHAAgHgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAIAAAGgDQAGgCAFgEQADgEACgFQACgGABgGIAAgHIgIAAIgQABg");
	this.shape_285.setTransform(317.1,-102.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgDgEAAgHQABgHADgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAGAJIgPAIQgEgGgFgDQgGgEgIAAIgIABQgEABgDACIgGAEQgCACAAAEQAAAHAGADQAFADAKACIAQADQAMACAHAGQAIAGAAAKQAAAIgDAFQgFAGgFADIgOAFIgQACQgMAAgLgEg");
	this.shape_286.setTransform(299.6,-102.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_287.setTransform(287.5,-102.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#111111").s().p("AgXBIQgKgEgJgGQgHgHgEgIQgFgJAAgKQAAgLAFgJQAEgIAHgGQAJgHAKgDQALgFAMAAIALABQAGABAGADQAGACAFADQAFADAEAFIABAAIAAhIIAPAAIAACVIgPAAIAAgQIgBAAQgEAFgFAEIgLAFIgMADIgLABQgMAAgLgEgAgQgFQgIACgGAFQgFAEgDAHQgDAHAAAIQAAAHADAHQADAGAFAFQAGAGAIACQAIADAIAAQAJAAAJgDQAIgCAGgGQAGgFADgGQAEgHAAgHQAAgIgEgHQgDgHgGgEQgGgFgIgCQgJgDgJgBQgIABgIADg");
	this.shape_288.setTransform(272.9,-104.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAHAAIAAgDQABgYgdAAQgSAAgPALIgJgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAHABIgQACQgIACgHAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAIAAAGgDQAGgCAEgEQAFgEACgFQABgGAAgGIAAgHIgIAAIgOABg");
	this.shape_289.setTransform(259.6,-102.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#111111").s().p("AgHBFIAAhcIAPAAIAABcgAgHgzQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEACgEAAQgDAAgEgCg");
	this.shape_290.setTransform(251,-104.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#111111").s().p("AgOAtQgLgDgIgHQgHgGgFgJQgDgJAAgLQAAgJADgJQAFgJAHgHQAIgGALgEQAKgEANAAQALABALADQAKAEAJAIIgOAJQgDgGgIgDQgHgEgJAAQgJAAgIADQgHADgFAFQgGAFgDAGQgCAHAAAHQAAAIACAHQADAHAGAEQAFAFAHADQAIADAJAAQAJAAAHgEQAIgDADgFIAOAIQgJAIgKAEQgLADgLABQgNAAgKgEg");
	this.shape_291.setTransform(242.8,-102.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_292.setTransform(229.6,-102.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgDgEAAgHQABgHADgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAGAJIgPAIQgDgGgGgDQgGgEgJAAIgHABQgEABgDACIgGAEQgBACAAAEQAAAHAEADQAGADAKACIAQADQALACAIAGQAIAGAAAKQAAAIgDAFQgFAGgFADIgOAFIgQACQgMAAgLgEg");
	this.shape_293.setTransform(217.6,-102.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgOALIgKgJQAPgOAfAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAFgEQADgEADgFQACgGAAgGIAAgHIgIAAIgQABg");
	this.shape_294.setTransform(206.1,-102.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgCgEAAgHQAAgHADgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAGAJIgOAIQgEgGgGgDQgGgEgJAAIgHABQgEABgDACIgFAEQgCACAAAEQAAAHAEADQAGADAKACIAQADQAMACAHAGQAIAGAAAKQAAAIgDAFQgFAGgGADIgNAFIgQACQgMAAgLgEg");
	this.shape_295.setTransform(188.7,-102.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_296.setTransform(176.6,-102.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#111111").s().p("AAGA7QgGgBgCgCQgEgDgDgFQgCgFAAgHIAAg6IgYAAIAAgLIAYAAIAAgbIAOAAIAAAbIAgAAIAAALIggAAIAAA2IABAIIAEAGIAEACIAHAAIAIgBIAIgCIABAMQgJADgMAAIgJgBg");
	this.shape_297.setTransform(165.7,-103.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#111111").s().p("Ag6BMIAAiUIAPAAIAAAPIABAAQAEgFAFgDIALgGQAFgCAHgBIAKgBQANAAALAEQALADAIAHQAHAGAFAKQAEAJAAAKQAAAKgEAJQgFAIgHAHQgIAGgLADQgLAEgNAAIgKgBIgMgDIgLgFQgFgDgEgGIgBAAIAABJgAgRg8QgHACgGAGQgHAFgCAGQgEAHAAAIQAAAHAEAIQACAGAHAFQAGAEAHADQAJACAIAAQAKAAAHgCQAJgDAFgEQAFgFADgGQADgIAAgHQAAgIgDgHQgDgGgFgFQgFgGgJgCQgHgDgKAAQgIAAgJADg");
	this.shape_298.setTransform(154.9,-99.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgFgJQgDgIAAgLQAAgJADgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAKAEAGAGQAHAGADAJQAFAIAAAKIAAAFIhcAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgLAEQgNAFgOAAQgLAAgKgEgAgNghQgGACgGAEQgGAFgCAFQgDAFAAAGIBJAAQAAgNgJgIQgJgJgSAAQgGAAgIADg");
	this.shape_299.setTransform(140.7,-102.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#111111").s().p("AgOAtQgLgDgIgHQgHgGgEgJQgFgJAAgLQAAgJAFgJQAEgJAHgHQAIgGALgEQALgEAMAAQAMABAKADQAKAEAIAIIgMAJQgEgGgIgDQgGgEgKAAQgJAAgHADQgIADgGAFQgFAFgDAGQgCAHAAAHQAAAIACAHQADAHAFAEQAGAFAIADQAHADAJAAQAKAAAGgEQAIgDAEgFIAMAIQgIAIgKAEQgKADgMABQgMAAgLgEg");
	this.shape_300.setTransform(128.8,-102.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#111111").s().p("AAhAwIAAgzQgBgPgGgIQgHgJgQAAIgGACQgGAAgGADQgGAEgFAHQgEAIAAALIAAAwIgQAAIAAhHIAAgKIgBgLIAQAAIABAHIAAAIIAAAAIAHgHIAJgFIALgEIAJgCQAWAAAKAKQAKAJAAASIAAA6g");
	this.shape_301.setTransform(115.9,-102.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_302.setTransform(102.5,-102.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#111111").s().p("AgPAtQgKgDgIgHQgIgGgEgJQgDgJAAgLQAAgJADgJQAEgJAIgHQAIgGAKgEQAMgEAMAAQAMABAKADQAKAEAJAIIgOAJQgDgGgIgDQgHgEgJAAQgJAAgIADQgHADgFAFQgGAFgDAGQgCAHAAAHQAAAIACAHQADAHAGAEQAFAFAHADQAIADAJAAQAJAAAHgEQAIgDADgFIAOAIQgJAIgKAEQgKADgMABQgMAAgMgEg");
	this.shape_303.setTransform(90.2,-102.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAKgBQAEgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgHgDgIgBIgOgDIgIgCQgFgCgFgCQgEgCgDgFQgEgEAAgHQABgHADgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAGAJIgPAIQgEgGgFgDQgGgEgIAAIgIABQgEABgDACIgGAEQgCACAAAEQAAAHAGADQAFADAKACIAQADQAMACAHAGQAIAGAAAKQAAAIgDAFQgEAGgGADIgOAFIgQACQgMAAgLgEg");
	this.shape_304.setTransform(72.5,-102.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_305.setTransform(60.4,-102.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#111111").s().p("AAgAwIAAgzQABgPgHgIQgGgJgSAAIgFACQgGAAgGADQgGAEgEAHQgGAIAAALIAAAwIgPAAIAAhHIAAgKIgBgLIAQAAIAAAHIAAAIIABAAIAHgHIAJgFIAKgEIAKgCQAWAAAKAKQAKAJAAASIAAA6g");
	this.shape_306.setTransform(46.6,-102.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#111111").s().p("AgkAmQgLgKAAgRIAAg5IAPAAIAAAyQABAIABAFQACAHADADQAEAFAFACQAGABAJAAIAFAAQAGgBAGgDQAGgEAFgIQAEgGAAgNIAAguIAQAAIAABHIABAJIAAALIgQAAIgBgIIAAgHIAAAAQgDAEgEADQgDAEgGACQgFACgFABIgKABQgWABgJgKg");
	this.shape_307.setTransform(33.5,-102);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#111111").s().p("AgfBDQgMgFgLgJIAMgLQAGAIAMAFQALAEANAAQALAAAIgDQAJgCAEgFQAFgFADgHQACgGAAgIIAAgRIgBAAQgHAKgLAEQgLAEgMAAQgLAAgLgEQgKgDgIgHQgHgGgFgIQgEgIgBgKQAAgKAFgJQAEgJAIgGQAHgHAKgDQALgEALAAIAKABQAGAAAGADQAFABAFAEQAGADAEAGIABAAIAAgQIAPAAIAABbQAAAIgBAIQgDAIgGAIQgHAHgLAEQgMAFgSAAQgQAAgOgEgAgOg3QgIACgGAFQgFAFgEAHQgDAGAAAHQAAAIADAGQAEAGAFAEQAGAFAIADQAHADAIAAQAIAAAIgDQAIgCAGgFQAFgDADgHQADgHAAgIQAAgHgDgGQgCgHgGgFQgFgFgIgCQgIgDgJAAQgIAAgHADg");
	this.shape_308.setTransform(19.5,-99.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#111111").s().p("AgHBLIAAiVIAPAAIAACVg");
	this.shape_309.setTransform(9.7,-105);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAHAAIAAgDQABgYgdAAQgSAAgPALIgJgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAHABIgQACQgIACgHAEQgFAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAIAAAGgDQAGgCAEgEQAFgEABgFQACgGAAgGIAAgHIgIAAIgOABg");
	this.shape_310.setTransform(0.4,-102.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_311.setTransform(-19,-102.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#111111").s().p("AgXBIQgLgEgHgGQgIgHgEgIQgFgJAAgKQAAgLAFgJQAEgIAIgGQAHgHALgDQALgFAMAAIAMABQAFABAGADQAGACAFADQAFADAEAFIAAAAIAAhIIAQAAIAACVIgQAAIAAgQIAAAAQgEAFgFAEIgLAFIgLADIgMABQgMAAgLgEgAgQgFQgIACgGAFQgFAEgDAHQgDAHAAAIQAAAHADAHQADAGAFAFQAGAGAIACQAHADAJAAQAKAAAIgDQAIgCAGgGQAFgFAEgGQAEgHAAgHQAAgIgEgHQgEgHgFgEQgGgFgIgCQgIgDgKgBQgJABgHADg");
	this.shape_312.setTransform(-33.6,-104.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#111111").s().p("AgHBFIAAhcIAPAAIAABcgAgHgzQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEACgEAAQgDAAgEgCg");
	this.shape_313.setTransform(-43.3,-104.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#111111").s().p("AAFA7QgEgBgEgCQgEgDgCgFQgDgFAAgHIAAg6IgXAAIAAgLIAXAAIAAgbIAPAAIAAAbIAgAAIAAALIggAAIAAA2IABAIIAEAGIAEACIAHAAIAIgBIAIgCIABAMQgJADgNAAIgJgBg");
	this.shape_314.setTransform(-50.1,-103.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#111111").s().p("AgeAwIAAg/IAAgNIgBgQIAQAAIAAARIAAAAIAFgHQADgDAEgDQAEgDAFgCQAHgCAHAAQAHABAEABIgDANIgJgBQgJAAgGADQgFADgFAEQgEAFgCAFQgCAFAAAFIAAAzg");
	this.shape_315.setTransform(-56.9,-102.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAHAAAJACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgQACQgIACgFAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAFgEACgFQACgGAAgGIAAgHIgJAAIgPABg");
	this.shape_316.setTransform(-68.3,-102.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#111111").s().p("Ag6BMIAAiUIAPAAIAAAPIABAAQAEgFAFgDIALgGQAFgCAHgBIAKgBQANAAALAEQALADAIAHQAHAGAFAKQAEAJAAAKQAAAKgEAJQgFAIgHAHQgIAGgLADQgLAEgNAAIgKgBIgMgDIgLgFQgFgDgEgGIgBAAIAABJgAgRg8QgIACgGAGQgFAFgEAGQgDAHAAAIQAAAHADAIQAEAGAFAFQAGAEAIADQAJACAIAAQAKAAAIgCQAHgDAGgEQAFgFADgGQADgIAAgHQAAgIgDgHQgDgGgFgFQgGgGgHgCQgIgDgKAAQgIAAgJADg");
	this.shape_317.setTransform(-81,-99.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#111111").s().p("ABDAwIAAg1QAAgPgFgHQgGgIgRAAQgIABgGADQgGACgEAFQgDAFgCAGQgCAGAAAGIAAAxIgOAAIAAg1QAAgPgGgHQgGgIgQAAIgHACQgFAAgFADQgGAEgEAHQgFAIAAALIAAAwIgPAAIAAhHIgBgKIAAgLIAQAAIAAAOIABAAQAFgIALgEQAKgEAKgBIAJABQAFABAFADQAFABAEAEQADAEADAGQAFgJAKgFQAKgFALgBQAWAAAKAKQAKAJAAASIAAA6g");
	this.shape_318.setTransform(-98.9,-102.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_319.setTransform(-115.9,-102.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#111111").s().p("AgPAtQgKgDgIgHQgIgGgEgJQgDgJAAgLQAAgJADgJQAEgJAIgHQAIgGAKgEQAMgEAMAAQALABALADQAKAEAJAIIgOAJQgDgGgHgDQgIgEgJAAQgJAAgIADQgHADgFAFQgGAFgDAGQgDAHAAAHQAAAIADAHQADAHAGAEQAFAFAHADQAIADAJAAQAJAAAIgEQAHgDADgFIAOAIQgJAIgKAEQgLADgLABQgMAAgMgEg");
	this.shape_320.setTransform(-128.2,-102.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAFAGAHAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgEgCQgFgCgEgFQgCgEAAgHQgBgHAEgFQADgFAGgEQAGgDAHgCQAIgCAGAAQAMAAAKAEQAKAEAFAJIgNAIQgFgGgFgDQgGgEgJAAIgHABQgEABgEACIgEAEQgCACAAAEQAAAHAEADQAGADAKACIAQADQALACAJAGQAHAGAAAKQAAAIgEAFQgDAGgHADIgNAFIgQACQgMAAgLgEg");
	this.shape_321.setTransform(-145.8,-102.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#111111").s().p("AgXAtQgLgEgHgGQgIgHgFgJQgEgIAAgLQAAgJAEgJQAFgJAIgHQAHgGALgEQALgEAMAAQANAAALAEQAKAEAIAGQAIAHAEAJQAFAJAAAJQAAALgFAIQgEAJgIAHQgIAGgKAEQgLAEgNAAQgMAAgLgEgAgRghQgHADgGAFQgFAFgDAHQgDAGAAAHQAAAIADAHQADAGAFAFQAGAFAHADQAIADAJAAQAKAAAHgDQAIgDAFgFQAGgFADgGQADgHAAgIQAAgHgDgGQgDgHgGgFQgFgFgIgDQgHgDgKAAQgJAAgIADg");
	this.shape_322.setTransform(-157.9,-102.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#111111").s().p("ABDAwIAAg1QAAgPgFgHQgGgIgRAAQgIABgGADQgGACgEAFQgDAFgCAGQgCAGAAAGIAAAxIgOAAIAAg1QAAgPgGgHQgGgIgQAAIgHACQgFAAgFADQgGAEgEAHQgFAIAAALIAAAwIgPAAIAAhHIgBgKIAAgLIAQAAIAAAOIABAAQAFgIALgEQAKgEAKgBIAJABQAFABAFADQAFABAEAEQADAEADAGQAFgJAKgFQAKgFALgBQAWAAAKAKQAKAJAAASIAAA6g");
	this.shape_323.setTransform(-175.2,-102.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#111111").s().p("AgTAtQgLgEgHgGQgIgHgFgJQgDgIAAgLQAAgJADgJQAFgJAIgHQAHgGAKgEQALgEAKAAQANAAAKAEQAKAEAGAGQAHAGAEAJQADAIAAAKIAAAFIhbAAQAAAHAEAGQADAGAFAEQAGAFAHACQAIADAGAAQANAAAKgFQAIgFAFgGIAMAIQgKALgMAEQgMAFgOAAQgLAAgKgEgAgNghQgGACgGAEQgGAFgDAFQgCAFAAAGIBJAAQAAgNgJgIQgKgJgRAAQgGAAgIADg");
	this.shape_324.setTransform(-191.7,-102.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#111111").s().p("AAgBLIAAgzQAAgQgHgIQgGgHgRAAIgFABQgHAAgGAEQgFACgFAIQgFAHAAAMIAAAwIgPAAIAAiVIAPAAIAABIIABAAIAGgHIAJgFIALgEIAKgBQAVAAAKAJQAKAKAAAQIAAA7g");
	this.shape_325.setTransform(-205,-105);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#111111").s().p("AgPBGIAAhbIAPAAIAABbgAgWgoIAXgdIAVAAIgeAdg");
	this.shape_326.setTransform(-220.1,-104.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#111111").s().p("AgkAmQgLgKAAgRIAAg5IAPAAIAAAyQAAAIACAFQABAHAEADQADAFAGACQAGABAJAAIAFAAQAGgBAGgDQAGgEAFgIQAEgGAAgNIAAguIAQAAIAABHIAAAJIABALIgQAAIgBgIIAAgHIAAAAQgCAEgEADQgFAEgEACQgGACgFABIgKABQgVABgKgKg");
	this.shape_327.setTransform(-230.4,-102);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#111111").s().p("AArBMIAAhJIAAAAQgEAGgFADIgLAFIgLADIgMABQgMAAgLgEQgLgDgHgGQgIgHgFgIQgEgJAAgKQAAgKAEgJQAFgKAIgGQAHgHALgDQALgEAMAAIAMABQAGABAFACQAGACAFAEQAFADAEAFIAAAAIAAgPIAQAAIAACUgAgRg8QgHACgFAGQgGAFgDAGQgDAHAAAIQAAAHADAIQADAGAGAFQAFAEAHADQAJACAIAAQAJAAAIgCQAJgDAGgEQAGgFADgGQAEgIgBgHQABgIgEgHQgDgGgGgFQgGgGgJgCQgIgDgJAAQgIAAgJADg");
	this.shape_328.setTransform(-244.5,-99.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#111111").s().p("AgWAvQgHgCgGgDQgFgEgDgFQgDgFAAgGQAAgMAHgGQAHgGALgDQAKgDALgBIAWAAIAHAAIAAgDQAAgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAIAAAHACQAIACAFAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAHABIgQACQgJACgGAEQgFAEAAAHQAAAEACAEIAGAFQAEACAFABIAJABQAHAAAHgDQAGgCAEgEQAFgEABgFQACgGAAgGIAAgHIgIAAIgOABg");
	this.shape_329.setTransform(-257.8,-102.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgPALIgJgJQAQgOAeAAQAHAAAJACQAGACAGAEQAGAFADAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIgBgIIAAAAQgHAKgJAEQgKAEgMAAQgHAAgHgCgAAGABIgQACQgIACgFAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAEgEQAFgEACgFQACgGAAgGIAAgHIgJAAIgPABg");
	this.shape_330.setTransform(-276.6,-102.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#111111").s().p("AAGA7QgFgBgDgCQgEgDgDgFQgCgFAAgHIAAg6IgYAAIAAgLIAYAAIAAgbIAOAAIAAAbIAgAAIAAALIggAAIAAA2IABAIIADAGIAGACIAGAAIAIgBIAIgCIABAMQgJADgMAAIgJgBg");
	this.shape_331.setTransform(-286.4,-103.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#111111").s().p("AgXAtQgLgEgIgKIAOgIQAEAGAIAEQAHAEAJAAIAJgBQAFgBAEgCIAGgFQACgDAAgEQAAgGgGgEQgGgDgJgBIgOgDIgIgCQgFgCgFgCQgEgCgEgFQgDgEAAgHQABgHADgFQADgFAGgEQAGgDAHgCQAHgCAHAAQAMAAAKAEQAKAEAGAJIgPAIQgDgGgGgDQgGgEgJAAIgHABQgEABgDACIgGAEQgBACAAAEQAAAHAEADQAGADAKACIAQADQALACAIAGQAIAGAAAKQAAAIgDAFQgFAGgFADIgOAFIgQACQgMAAgLgEg");
	this.shape_332.setTransform(-295.4,-102.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#111111").s().p("AgWAvQgHgCgFgDQgGgEgDgFQgDgFAAgGQAAgMAHgGQAHgGAKgDQALgDALgBIAWAAIAIAAIAAgDQgBgYgcAAQgSAAgOALIgKgJQAPgOAfAAQAHAAAJACQAGACAGAEQAFAFAEAGQADAGAAAIIAAApIABALIABAJIgPAAIgBgHIAAgIIgBAAQgHAKgJAEQgKAEgMAAQgIAAgGgCgAAGABIgQACQgHACgGAEQgGAEAAAHQAAAEACAEIAGAFQAEACAEABIAKABQAHAAAHgDQAGgCAFgEQADgEADgFQACgGAAgGIAAgHIgIAAIgQABg");
	this.shape_333.setTransform(-306.9,-102.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#111111").s().p("AAuBGIAAhCIhbAAIAABCIgRAAIAAiLIARAAIAAA9IBbAAIAAg9IARAAIAACLg");
	this.shape_334.setTransform(-321.3,-104.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#B20512").s().p("AggA2QgJgEgFgIQgGgHAAgLQAAgOAIgIQAHgHAMgEQALgEANAAIAXgBQgBgJgGgFQgGgGgJAAQgHAAgHAEQgHADgGAGIgSgSQAKgJAMgEQANgFANAAQATAAALAHQALAGAFANQAEANAAASIAAA3IgfAAIAAgOIgBAAQgGAJgJAEQgIAEgLAAQgKAAgJgEgAgGAJQgGABgDAEQgEADAAAFQAAAFACACIAGAEIAIABQAGAAAGgCQAFgCAEgFQAEgEAAgHIAAgHIgJAAIgJAAIgKACg");
	this.shape_335.setTransform(79.6,-147.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#B20512").s().p("AgTAyQgNgHgJgNQgHgNgBgRQABgRAHgNQAJgNANgHQAOgHAQAAQAKAAAKAEQALADAIAIIgWAXQgDgDgEgDQgFgCgFAAQgLAAgIAIQgHAHAAAMQAAAMAHAIQAIAHALABQAFAAAFgDIAHgGIAWAYQgIAIgLADQgKAEgKAAQgQgBgOgHg");
	this.shape_336.setTransform(68.6,-147.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#B20512").s().p("AgQBSIAAhtIAhAAIAABtgAgNgwQgFgFgBgJQABgIAFgFQAGgGAHAAQAIAAAGAGQAGAFAAAIQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_337.setTransform(59.8,-150.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#B20512").s().p("AgBBFQgIgDgFgIQgGgHAAgMIAAgzIgVAAIAAgbIAVAAIAAghIAhAAIAAAhIAdAAIAAAbIgdAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAEAAACgCIAAAcQgFACgGABIgMABQgLAAgJgEg");
	this.shape_338.setTransform(52.1,-149.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#B20512").s().p("AgTAyQgOgHgHgNQgJgNAAgRQAAgRAJgNQAHgNAOgHQAOgHAQAAQAKAAALAEQAKADAIAIIgWAXQgCgDgFgDQgEgCgGAAQgMAAgHAIQgHAHAAAMQAAAMAHAIQAHAHAMABQAGAAAEgDIAHgGIAWAYQgIAIgKADQgLAEgKAAQgQgBgOgHg");
	this.shape_339.setTransform(42.7,-147.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#B20512").s().p("AggBOQgJgEgFgIQgGgIAAgKQAAgOAIgJQAHgHAMgEQALgEANgBIAXgBQgBgIgGgEQgGgGgJAAQgHAAgHADQgHAEgGAFIgSgSQAKgIAMgFQANgEANAAQATAAALAGQALAHAFAMQAEAMAAATIAAA3IgfAAIAAgOIgBAAQgGAKgJAEQgIADgLAAQgKAAgJgDgAgGAhQgGABgDADQgEADAAAGQAAAEACADIAGAEIAIABQAGAAAGgCQAFgCAEgFQAEgEAAgIIAAgGIgJAAIgJAAIgKACgAgUgwIAWghIAuAAIgnAhg");
	this.shape_340.setTransform(30.6,-150);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#B20512").s().p("AgmA4IAAhtIAiAAIAAASIABAAQAEgKAIgFQAHgFALAAIAGAAIAGABIAAAfIgIgCIgHgBQgNABgGAEQgFAFgCAIQgCAIAAAKIAAAug");
	this.shape_341.setTransform(20.6,-147.8);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#B20512").s().p("Ag7BSIAAigIAgAAIAAAOIAAAAQADgEAFgEQAFgEAGgCQAHgDAHAAQAQAAAMAHQAMAHAHANQAHANAAARQAAAPgGAMQgGANgMAJQgLAIgPAAQgKABgJgEQgJgDgGgIIgBAAIAAA/gAgUgrQgHAHAAANQAAAMAHAHQAHAHANAAQAMAAAHgHQAHgHAAgMQAAgNgHgHQgHgIgMAAQgNAAgHAIg");
	this.shape_342.setTransform(8.7,-145.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#B20512").s().p("AATA4IAAg2IgBgMQAAgGgEgFQgEgEgJgBQgHABgFAEQgEAEgCAGIgBANIAAA2IgiAAIAAhtIAhAAIAAAPIAAAAQACgEAFgEQAEgEAHgDQAFgCAIAAQARAAAJAHQAJAGADAMQADAMAAAPIAAA7g");
	this.shape_343.setTransform(-11.9,-147.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#B20512").s().p("AgZAyQgOgHgIgNQgIgMAAgSQAAgRAIgNQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGANAAARIAAAKIhNAAQACAKAHAGQAGAGAJAAQAJAAAFgEQAGgEAFgGIAXASQgIAKgMAGQgNAFgNABQgQgBgOgHgAAXgMQAAgIgGgGQgGgGgJAAQgHAAgFADQgFADgDAEQgDAFAAAFIAsAAIAAAAg");
	this.shape_344.setTransform(-24.9,-147.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#B20512").s().p("AgeAyQgOgHgIgNQgIgNAAgRQAAgRAIgNQAIgNAOgHQAOgHAQAAQARAAAOAHQANAHAJANQAIANAAARQAAARgIANQgJANgNAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_345.setTransform(-44.9,-147.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#B20512").s().p("AgQBVIAAiqIAhAAIAACqg");
	this.shape_346.setTransform(-54.7,-150.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#B20512").s().p("AATA4IAAg2IgBgMQAAgGgEgFQgEgEgJgBQgHABgFAEQgEAEgCAGIgBANIAAA2IgiAAIAAhtIAhAAIAAAPIAAAAQACgEAFgEQAEgEAHgDQAFgCAIAAQARAAAJAHQAJAGADAMQADAMAAAPIAAA7g");
	this.shape_347.setTransform(-64.2,-147.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#B20512").s().p("AgeAyQgNgHgJgNQgIgNAAgRQAAgRAIgNQAJgNANgHQAOgHAQAAQARAAAOAHQANAHAJANQAIANAAARQAAARgIANQgJANgNAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_348.setTransform(-77.5,-147.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#B20512").s().p("Ag7BQIAAifIA7AAQAQAAAOAEQAOAFAIAKQAIALAAASQAAATgIALQgHAJgOAFQgOAFgQAAIgZAAIAAA+gAgYgLIAYAAQAFAAAFgCQAGgCADgEQAEgEAAgIQAAgHgEgEQgFgFgHgBQgHgBgGAAIgSAAg");
	this.shape_349.setTransform(-91,-150.2);

	this.btn_finish = new lib.Símbolo27();
	this.btn_finish.parent = this;
	this.btn_finish.setTransform(-13.4,58);
	new cjs.ButtonHelper(this.btn_finish, 0, 1, 1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#111111").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_350.setTransform(187.6,-9.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAHAAQAKAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_351.setTransform(179.3,-13.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_352.setTransform(170.4,-14.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#111111").s().p("AAcAwIAAgzQgBgQgFgHQgGgJgOAAIgFABQgEAAgGAEQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgKIAOAAIABAHIAAAHIAAAAIAGgGQADgEAEgCIAJgDIAIgCQATAAAIAKQAJAJgBASIAAA6g");
	this.shape_353.setTransform(161.4,-13.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAGgGQAGgHAIgEQAKgDAIAAQALAAAIAEQAJADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAFAEAFADQAGACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_354.setTransform(150.5,-13.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#111111").s().p("AA5AwIAAg2QAAgOgFgHQgFgIgOAAQgHAAgFADQgFADgDAEQgDAFgCAGQgBAHAAAGIAAAxIgMAAIAAg2QAAgOgFgHQgFgIgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAIAAALIAAAwIgNAAIAAhIIgBgKIAAgKIAOAAIAAANIAAAAQAFgHAIgFQAJgEAIAAIAIABQAFABAEACIAHAGQADADACAHQAEgKAJgFQAJgFAJAAQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_355.setTransform(136.2,-13.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_356.setTransform(122.4,-13.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_357.setTransform(114.1,-14.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_358.setTransform(106.3,-13.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAJAEQAIADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_359.setTransform(95.6,-13.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_360.setTransform(87.6,-13.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_361.setTransform(80.9,-13.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_362.setTransform(70.9,-13.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAJgEQAJgDALAAQAKAAAIAEQAJAEAHAIIgLAIQgDgFgGgEQgGgDgIAAQgIAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAIAAQAIAAAGgDQAGgEADgFIALAIQgHAIgJAEQgIAEgKAAQgLAAgJgDg");
	this.shape_363.setTransform(60.5,-13.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_364.setTransform(45.5,-13.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_365.setTransform(35.8,-13.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#111111").s().p("AgTBcIACgMIAAABIAEAAIADABQAFAAADgCQACgCABgDIACgHIABgGIAAhtIANAAIAABvIAAAHIgDAKQgCAFgGAEQgFADgKAAQgFAAgFgBgAAEhMQgDgDAAgEQAAgFADgCQADgCADgBQAEABADACQADACAAAFQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_366.setTransform(27.4,-12.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAKAIQgJALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_367.setTransform(20.5,-13.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_368.setTransform(12.5,-13.2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_369.setTransform(2.8,-13.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#111111").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_370.setTransform(-7.9,-10.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_371.setTransform(-24.1,-13.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_372.setTransform(-33.8,-13.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#111111").s().p("AgFBMIAAiWIALAAIAACWg");
	this.shape_373.setTransform(-41.1,-15.9);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_374.setTransform(-55,-13.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#111111").s().p("AgUBJQgIgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_375.setTransform(-67.3,-15.8);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_376.setTransform(-78.6,-13.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_377.setTransform(-86,-13.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_378.setTransform(-93.5,-14.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#111111").s().p("AAcAwIAAgzQAAgQgGgHQgGgJgOAAIgFABQgEAAgGAEQgFAEgEAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgKIAOAAIABAHIAAAHIAAAAIAFgGQAEgEAEgCIAJgDIAIgCQATAAAIAKQAIAJAAASIAAA6g");
	this.shape_379.setTransform(-102.5,-13.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_380.setTransform(-113.8,-13.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_381.setTransform(-124.2,-13.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#111111").s().p("AAbAwIAAgzQAAgQgFgHQgGgJgOAAIgEABQgFAAgGAEQgEAEgFAHQgEAIAAALIAAAwIgMAAIAAhIIgBgKIgBgKIAOAAIAAAHIAAAHIABAAIAGgGQADgEAEgCIAJgDIAJgCQARAAAJAKQAJAJgBASIAAA6g");
	this.shape_382.setTransform(-135,-13.2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_383.setTransform(-146,-13.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_384.setTransform(-161.3,-13.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_385.setTransform(-171.1,-13.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#111111").s().p("AAnBHIAAhDIhNAAIAABDIgOAAIAAiNIAOAAIAAA+IBNAAIAAg+IAOAAIAACNg");
	this.shape_386.setTransform(-183.2,-15.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#B20512").s().p("AgOBLQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAJgFAGQgGAFgJABQgIgBgGgFgAgQAaIAAhqIAhAAIAABqg");
	this.shape_387.setTransform(76.4,-106.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#B20512").s().p("AgaA2QgLgDgJgIIAVgXQAEAGAGADQAGADAIAAQAFAAAEgCQAFgCAAgEQAAgFgGgDIgNgDIgRgFQgIgDgGgGQgGgGAAgNQAAgNAHgIQAGgIALgEQAKgEALAAQALAAALADQALAEAIAIIgVAUQgEgEgFgDQgFgCgGAAQgDAAgEACQgEACAAAFQAAAFAGACQAEACAJACIARAEQAIADAGAGQAGAHAAAMQAAALgFAHQgEAHgHAEQgIAEgJACQgJACgIAAQgLAAgMgEg");
	this.shape_388.setTransform(66.2,-103.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#B20512").s().p("AgeAyQgNgHgJgNQgIgNAAgRQAAgRAIgNQAJgNANgHQAOgHAQAAQARAAAOAHQAOAHAHANQAJANAAARQAAARgJANQgHANgOAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_389.setTransform(28.2,-103.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#B20512").s().p("AgQBSIAAhtIAhAAIAABtgAgNgvQgFgGgBgJQABgIAFgFQAGgGAHAAQAIAAAGAGQAGAFAAAIQAAAJgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_390.setTransform(18.3,-106.6);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#B20512").s().p("AgTAyQgOgHgHgNQgJgNAAgRQAAgRAJgNQAHgNAOgHQAOgHAQAAQAKAAALAEQAKADAIAIIgWAXQgCgDgFgDQgEgCgGAAQgLAAgIAIQgHAHAAAMQAAAMAHAIQAIAHALABQAGAAAEgDIAHgGIAWAYQgIAIgKADQgLAEgKAAQgQgBgOgHg");
	this.shape_391.setTransform(10.4,-103.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#B20512").s().p("AAABFQgKgDgFgIQgFgHAAgMIAAgzIgWAAIAAgbIAWAAIAAghIAhAAIAAAhIAdAAIAAAbIgdAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAFAAABgCIAAAcQgFACgGABIgMABQgMAAgHgEg");
	this.shape_392.setTransform(-12.4,-105.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#B20512").s().p("AgQBSIAAhtIAhAAIAABtgAgNgvQgFgGgBgJQABgIAFgFQAGgGAHAAQAIAAAGAGQAGAFAAAIQAAAJgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_393.setTransform(-19.7,-106.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#B20512").s().p("AgQBSIAAhtIAhAAIAABtgAgNgvQgFgGgBgJQABgIAFgFQAGgGAHAAQAIAAAGAGQAGAFAAAIQAAAJgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_394.setTransform(-36.5,-106.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#B20512").s().p("AgQBWIAAiqIAhAAIAACqg");
	this.shape_395.setTransform(-42.3,-106.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#B20512").s().p("AgZAyQgOgHgIgNQgIgMAAgSQAAgRAIgNQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGANAAARIAAAKIhNAAQACAKAHAGQAGAGAJAAQAJAAAFgEQAGgEAFgGIAXASQgIAKgMAGQgNAFgNABQgQgBgOgHgAAXgMQAAgIgGgGQgGgGgJAAQgHAAgFADQgFADgDAEQgDAFAAAFIAsAAIAAAAg");
	this.shape_396.setTransform(-51.7,-103.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#B20512").s().p("Ag1BQIAAifIBrAAIAAAgIhHAAIAAAhIBBAAIAAAfIhBAAIAAA/g");
	this.shape_397.setTransform(-64.5,-106.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#B20512").s().p("AgQBQIAAhqIAhAAIAABqgAgOgsQgGgGAAgJQAAgJAGgGQAGgFAIgBQAJABAGAFQAFAGABAJQgBAJgFAGQgGAGgJAAQgIAAgGgGg");
	this.shape_398.setTransform(-76.6,-101.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344,p:{x:-24.9,y:-147.7}},{t:this.shape_343,p:{x:-11.9,y:-147.8}},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336,p:{x:68.6,y:-147.7}},{t:this.shape_335,p:{x:79.6,y:-147.7}},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_start}]}).to({state:[{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_336,p:{x:-27.7,y:-103.9}},{t:this.shape_393},{t:this.shape_392},{t:this.shape_335,p:{x:-1.7,y:-103.9}},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_343,p:{x:41.5,y:-104}},{t:this.shape_344,p:{x:54.5,y:-103.9}},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.btn_finish}]},1).wait(1));

	// Capa 3
	this.instance = new lib.Mapadebits32();
	this.instance.parent = this;
	this.instance.setTransform(-362,-183);

	this.instance_1 = new lib.Mapadebits45();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-284,-162);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Capa 2
	this.instance_2 = new lib.Mapadebits31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-517,-296,4.642,3.73);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517,-296,1044.6,600.6);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AgtBNQgYgPgHgWQgIgXAPgWQALgQAbgDQAcgDADgFIAHgNIArAcIgMASQgHALgcADQgaACgEAGQgHAKARALQANAJAcgIIAJApQgRAFgPAAQgZAAgVgOgAAigkQgMgHgDgNQgDgMAGgKQAGgKAMgCQANgBAMAHQALAIADAMQADAMgGAJQgGAJgMADIgHABQgJAAgIgGg");
	this.shape.setTransform(13.4,16.9);

	this.instance = new lib.Path_66();
	this.instance.parent = this;
	this.instance.setTransform(14.9,16.8,1,1,0,0,0,14.9,16.8);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,29.7,33.6), null);


(lib.Group_15_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AheBoQgNgLgCgRQgCgQAJgLQAKgLAPgCQARgBAOALQAOAMACARQACAQgKAMQgKAMgPAAIgCAAQgPAAgOgLgAhAATIASgVQAMgOAjABQAkABAFgGQALgNgUgRQgIgHgRgBQgNgCgQADIgEg3QA7gKApAiQAcAYAGAdQAHAggXAZQgRAVgkgBQglgBgEAGIgMAPg");
	this.shape.setTransform(21.6,20.4);

	this.instance = new lib.Path_51();
	this.instance.parent = this;
	this.instance.setTransform(20.2,21.2,1,1,0,0,0,20.2,21.2);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15_2, new cjs.Rectangle(0,0,40.4,42.4), null);


(lib.Group_14_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AAeB7QgPgGgFgOQgFgOAHgOQAHgPARgGQARgGAQAGQAOAGAGAPQAFAOgHAOQgIAPgSAGQgHADgHAAQgJAAgIgEgAgGAdQgGgRASgeQATgfgCgHQgGgQgYAJQgKAEgKANQgIAMgGAOIgxgXQAVg5AzgSQAigNAcAKQAeAKAMAhQAJAYgTAgQgTAeACAHIAHASIg/AXg");
	this.shape.setTransform(15.4,23.6);

	this.instance = new lib.Path_52();
	this.instance.parent = this;
	this.instance.setTransform(18.3,23.1,1,1,0,0,0,18.3,23.1);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14_2, new cjs.Rectangle(-0.1,0,36.7,46.2), null);


(lib.Group_13_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AAyBmQgLgJgCgPQgCgRALgOQAMgPARgCQAPgCANAJQAMAKABAQQABAQgMAPQgLANgRACIgFABQgNAAgJgIgAgCAvQgOgLABgkQAAgjgGgGQgNgKgRAUQgHAJgBAQQgBAOADAPIg3AFQgLg7AigpQAXgdAdgGQAfgHAaAWQAVARAAAkQAAAlAFADIAQANIgqA0g");
	this.shape.setTransform(20.6,18.6);

	this.instance = new lib.Path_53();
	this.instance.parent = this;
	this.instance.setTransform(21.3,20.1,1,1,0,0,0,21.3,20.1);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13_2, new cjs.Rectangle(-0.1,0,42.8,40.3), null);


(lib.Group_12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AAiBgQgMgEgFgJQgGgKAEgMQAEgNAMgHQANgHANAEQAMADAGALQAFALgEALQgEAMgNAHQgHAEgIAAIgKgBgAgDAbQgHgNAKgZQAMgagDgFQgGgMgSAKQgHAEgGALQgGAKgCAMIgpgMQAKgvAlgUQAagNAWAEQAYAFANAYQAKASgMAaQgLAZADAGIAHANIguAZg");
	this.shape.setTransform(12.8,17.6);

	this.instance = new lib.Path_54();
	this.instance.parent = this;
	this.instance.setTransform(14.8,17.5,1,1,0,0,0,14.8,17.5);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12_2, new cjs.Rectangle(0,-0.1,29.6,35.3), null);


(lib.Group_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AgjBGQgMgQAFgbQAGgbgEgEIgJgMIAnggIANARQAJALgGAaQgGAbAEAFQAIAJAQgMQAMgLABgcIAqAEQgBAtggAbQgWASgWAAQgYAAgRgUgAg4geQgNgBgHgJQgIgJACgMQACgMALgJQAKgIANABQAMAAAHAJQAHAIgBAMQgBANgLAJQgJAIgMAAIgCAAg");
	this.shape.setTransform(16.6,16.8);

	this.instance = new lib.Path_55();
	this.instance.parent = this;
	this.instance.setTransform(15.3,16.3,1,1,0,0,0,15.3,16.3);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11_2, new cjs.Rectangle(0,0,30.7,32.7), null);


(lib.Group_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("Ag6BYQgLgGgEgMQgEgMAFgKQAFgJALgEQAMgEANAGQANAHAEAMQAEAMgGAKQgGALgLADIgHABQgJAAgJgFgAgxAUIAKgTQAHgLAbgFQAagFADgGQAGgLgSgKQgNgHgcAKIgMgoQAqgQAkASQAaAOAJAUQAJAXgMAXQgKARgbAFQgcAGgCAFIgGANg");
	this.shape.setTransform(16.1,17.2);

	this.instance = new lib.Path_56();
	this.instance.parent = this;
	this.instance.setTransform(14.4,17.1,1,1,0,0,0,14.4,17.1);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10_2, new cjs.Rectangle(0,0,29,34.3), null);


(lib.Group_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AhABUQgLgHgDgMQgDgMAGgJQAGgKAMgCQANgDALAIQAMAIADAMQADALgGALQgHAJgLACIgFABQgKAAgKgHgAgxASIAMgSQAHgLAcgDQAagDAEgFQAHgLgRgKQgHgFgMAAQgLABgLADIgJgpQAsgNAiAWQAYAQAHAVQAIAXgPAWQgLAQgbADQgcADgDAFIgIAMg");
	this.shape.setTransform(16.2,16.6);

	this.instance = new lib.Path_57();
	this.instance.parent = this;
	this.instance.setTransform(14.8,16.8,1,1,0,0,0,14.8,16.8);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9_2, new cjs.Rectangle(0,0,29.7,33.6), null);


(lib.Group_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AhKBZQgcgZgGgcQgHgfAXgbQARgUAkABQAlABAEgFIAMgQIAzArIgSAVQgMAOgjgBQgkgBgGAGQgKANAUARQAQAOAmgHIAEA3QgNACgMAAQgrAAgggagAAvgtQgPgMgCgQQgCgRALgLQAJgMAQgBQAQgBAPAMQANAMACAQQACAQgJALQgKALgPACIgEAAQgPAAgMgKg");
	this.shape.setTransform(18.8,22);

	this.instance = new lib.Path_58();
	this.instance.parent = this;
	this.instance.setTransform(20.1,21.3,1,1,0,0,0,20.1,21.3);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8_2, new cjs.Rectangle(0,0.1,40.3,42.5), null);


(lib.Group_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AgrB7QgegKgMghQgJgZATgfQATgegCgHIgHgTIA/gXIAIAbQAHARgTAeQgTAfADAIQAGAPAYgIQATgIAPgkIAxAYQgWA5gyASQgTAHgSAAQgNAAgMgEgAhEg0QgOgHgGgPQgFgOAHgOQAIgOASgHQAQgGAPAHQAPAHAFANQAFAOgHAOQgHAPgRAHQgJADgIAAQgIAAgIgDg");
	this.shape.setTransform(21.2,22.5);

	this.instance = new lib.Path_59();
	this.instance.parent = this;
	this.instance.setTransform(18.3,23,1,1,0,0,0,18.3,23);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7_2, new cjs.Rectangle(-0.1,-0.1,36.8,46.3), null);


(lib.Group_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AgUBdQgUgRAAgkQABglgGgEIgQgMIAqg0IAVASQAPAMgBAjQAAAkAGAFQANALARgUQAGgJACgQQABgOgDgPIA3gGQALA7giAqQgXAdgdAGIgOACQgYAAgUgRgAhmglQgMgJgBgQQgBgQAMgPQALgNARgCQAQgDALAKQALAJACAPQACARgMAOQgMAPgQACIgGAAQgMAAgKgIg");
	this.shape.setTransform(22,21.5);

	this.instance = new lib.Path_60();
	this.instance.parent = this;
	this.instance.setTransform(21.3,20.1,1,1,0,0,0,21.3,20.1);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6_2, new cjs.Rectangle(0,0,42.8,40.2), null);


(lib.Group_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AgRBgQgYgEgNgZQgKgSALgaQAMgagDgFIgHgNIAugZIAJAUQAHAMgLAaQgLAaADAFQAGAMASgKQAOgIAHgdIApAMQgLAvgkAUQgUAKgRAAIgLgBgAg4glQgMgDgGgLQgGgLAFgLQAEgMANgHQAMgGANADQAMADAFAKQAFAKgDAMQgDANgNAHQgJAEgJAAIgIgBg");
	this.shape.setTransform(16.8,17.5);

	this.instance = new lib.Path_61();
	this.instance.parent = this;
	this.instance.setTransform(14.8,17.6,1,1,0,0,0,14.8,17.6);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5_2, new cjs.Rectangle(0,0,29.6,35.2), null);


(lib.Group_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AAvBaQgMgBgHgIQgHgJABgLQABgNALgJQALgJAMAAQANABAHAKQAIAJgCALQgCANgLAJQgJAHgLAAIgDAAgAgCAgQgJgLAGgaQAFgbgDgFQgJgKgPANQgMAKgBAdIgqgEQABguAggaQAWgSAWAAQAYAAARAUQANAQgGAbQgGAaADAFIAKALIgnAhg");
	this.shape.setTransform(14,15.8);

	this.instance = new lib.Path_62();
	this.instance.parent = this;
	this.instance.setTransform(15.3,16.3,1,1,0,0,0,15.3,16.3);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4_2, new cjs.Rectangle(0,-0.1,30.6,32.7), null);


(lib.Group_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AAhBWQgbgGgPgjQgQgigIgCIgUgFIAQhDIAeAHQARAEAQAjQAQAiAIACQARADAHgZQAFgXgXggIAxgeQAlA0gNA2QgJAmgZATQgSAOgXAAQgKAAgLgDgAhnAAQgQgDgHgOQgIgPAEgUQAEgRAPgKQAOgJAPAEQAPADAIAOQAKAPgEATQgFATgPAJQgKAGgKAAIgKgBg");
	this.shape.setTransform(23.7,21.3);

	this.instance = new lib.Path_63();
	this.instance.parent = this;
	this.instance.setTransform(24.6,18.9,1,1,0,0,0,24.6,18.9);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_2, new cjs.Rectangle(0,0,49.1,38), null);


(lib.Group_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AiAgQQAJgnAZgTQAagUAkAJQAbAGAPAjQAQAjAIACIAUAEIgQBDIgegHQgRgEgQgjQgQghgIgCQgRgFgHAaQgDALAHARQAFAOAKANIgyAeQglg0ANg1gABTBWQgPgEgIgOQgKgPAFgTQAEgSAPgKQAOgJAQADQAQAEAHAPQAJAPgFATQgEARgPAKQgKAHgLAAIgIgBg");
	this.shape.setTransform(25.3,16.5);

	this.instance = new lib.Path_64();
	this.instance.parent = this;
	this.instance.setTransform(24.5,18.9,1,1,0,0,0,24.5,18.9);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2_2, new cjs.Rectangle(0,0,49.2,37.9), null);


(lib.Group_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AglBSQgZgNgJgVQgJgWAMgYQAKgQAbgFQAbgGADgFIAGgNIAtAYIgKATQgHALgbAFQgaAFgDAGQgGALASAKQANAHAcgLIAMApQgUAIgTAAQgUAAgUgLgAAgglQgNgGgEgMQgEgMAGgKQAFgLAMgDQAMgDANAHQALAGAEAMQAEAMgFAJQgFAKgLAEQgFABgFAAQgIAAgHgEg");
	this.shape.setTransform(12.8,17);

	this.instance = new lib.Path_65();
	this.instance.parent = this;
	this.instance.setTransform(14.5,17.1,1,1,0,0,0,14.5,17.1);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0,0,29,34.3), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsyJoQgZAAgSgRQgRgSAAgZIAAxXQAAgZARgSQASgRAZAAIZlAAQAZAAASARQARASAAAZIAARXQAAAZgRASQgSARgZAAg");
	mask.setTransform(107.4,92.8);

	// Capa 3
	this.instance = new lib.Group_17();
	this.instance.parent = this;
	this.instance.setTransform(181.6,42.9,1,1,0,0,0,14.9,16.8);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Group_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.4,124.9,1,1,0,0,0,14.5,17.1);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Group_2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(111.8,150.5,1,1,0,0,0,24.5,18.9);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Group_3_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(102.2,34.2,1,1,0,0,0,24.6,18.9);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Group_4_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.3,66.9,1,1,0,0,0,15.3,16.3);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Group_5_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(157.6,152,1,1,0,0,0,14.8,17.6);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Group_6_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(193,85.8,1,1,0,0,0,21.3,20.1);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Group_7_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(147.8,23,1,1,0,0,0,18.3,23);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.Group_8_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(152.9,110.2,1,1,0,0,0,20.1,21.3);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Group_9_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(32.7,142.3,1,1,0,0,0,14.8,16.8);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.Group_10_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(27.9,60.1,1,1,0,0,0,14.4,17.1);
	this.instance_10.alpha = 0.5;

	this.instance_11 = new lib.Group_11_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(64,118.1,1,1,0,0,0,15.3,16.3);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.Group_12_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(56.7,33,1,1,0,0,0,14.8,17.5);
	this.instance_12.alpha = 0.5;

	this.instance_13 = new lib.Group_13_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(21.3,99.3,1,1,0,0,0,21.3,20.1);
	this.instance_13.alpha = 0.5;

	this.instance_14 = new lib.Group_14_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(66.6,162,1,1,0,0,0,18.3,23.1);
	this.instance_14.alpha = 0.5;

	this.instance_15 = new lib.Group_15_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(61.4,74.9,1,1,0,0,0,20.2,21.2);
	this.instance_15.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AghCvQgNgIgIgMQgHgMAAgNQAAgNAGgNQAIgMANgIQANgIASAAQARAAAOAHQANAIAIAMQAIAMAAAPQgBAWgQAPQgQAPgbAAQgRAAgNgHgAgwA/IAAgpQAAgOAIgLQAJgMALgJIAYgUQAMgJAHgIQAJgJAAgIQgBgKgFgFQgGgFgIgCQgIgCgIAAQgMAAgMAGQgMAGgLAKQgLAJgJALIg3g4QAbgfAhgRQAigRAlAAQAjAAAbALQAbAMARAXQAPAXABAjQgBAUgHAOQgJAPgMAKIgXATQgMAJgJAIQgIAIAAAJIAAAcg");
	this.shape.setTransform(105.8,93.7);

	this.instance_16 = new lib.Path_50();
	this.instance_16.parent = this;
	this.instance_16.setTransform(105.9,92.3,1,1,0,0,0,25.4,33.7);
	this.instance_16.alpha = 0.488;

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.shape,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.shape},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(19.5,31.2,175.9,123.2), null);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// flash0.ai
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(-0.3,-0.3,1,1,0,0,0,107.1,92.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8AC00").s().p("AsyJoQgZAAgSgRQgRgSAAgZIAAxXQAAgZARgSQASgRAZAAIZlAAQAZAAASARQARASAAAZIAARXQAAAZgRASQgSARgZAAg");

	this.instance_1 = new lib.Mapadebits8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxAJIAbAbIBIhH");
	this.shape_1.setTransform(72.8,-50.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20512").s().p("AgMB4Qg7AAgrgqQgqgrAAg6IAAhgID9AAQAZAAARASQASASAAAZIAACyg");
	this.shape_2.setTransform(72.2,-49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-92.9,214.5,185.2);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var mc = this;
		var score;
		var actFrame;
		var arrCartas;
		var selectCart;
		var totalCartas = 20;
		var arrPairs;
		var currentPair;
		var arrCorrect = [0, 1, 2, 3, 3, 4, 2, 5, 6, 7, 7, 6, 0, 8, 9, 5, 1, 8, 9, 4];
		var contPairs;
		var obj;
		
		ini();
		
		function ini() {
		
			arrPairs = [];
			arrCartas = [];
			currentPair = 0;
			contPairs = 0;
		
			selectCart = [];
			controlCartas();
		
			mc.mc_feedback.btn_start.addEventListener("mousedown", closeFeedback);
		}
		
		function closeFeedback(evt) {
			createjs.Sound.stop();
			console.log("click");
			createjs.Tween.get(mc.mc_feedback).to({
				alpha: 0
			}, 200);
		}
		
		function controlCartas() {
			for (var i = 0; i < totalCartas; i++) {
				mc["mc_obj" + i].activo = false;
				mc["mc_obj" + i].num = arrCorrect[i];
				mc["mc_obj" + i].cursor = "pointer";
				mc["mc_obj" + i].addEventListener("mousedown", spinCartas);
			}
		}
		
		function spinCartas(evt) {
			obj = evt.currentTarget;
			if (selectCart.length < 2 && !evt.currentTarget.activo) {
				var num = evt.currentTarget.num;
				evt.currentTarget.activo = true;
				selectCart.push(evt.currentTarget);
				createjs.Tween.get(evt.currentTarget)
					.to({
						scaleX: 1.2,
						scaleY: 1.2
					}, 100, createjs.Ease.linear)
					.to({
						scaleX: 1,
						scaleY: 1
					}, 100, createjs.Ease.linear);
				evt.currentTarget.gotoAndStop(1);
		
			}
		
			if (selectCart.length >= 2) {
				validatePair();
			}
			mc.mc_titles.mc_rojo.alpha = 1;
		}
		
		function validatePair() {
			for (var i = 0; i < totalCartas; i++) {
				mc["mc_obj" + i].mouseEnabled = false;
			}
		
			if (selectCart[0].num == selectCart[1].num) {
				currentPair = selectCart[0].num;
				pair();
		
			} else {
				reset();
			}
		}
		
		function reset() {
			setTimeout(function () {
				selectCart[0].gotoAndStop(0);
				selectCart[1].gotoAndStop(0);
				selectCart[0].activo = false;
				selectCart[1].activo = false;
				selectCart = [];
				for (var i = 0; i < totalCartas; i++) {
					mc["mc_obj" + i].mouseEnabled = true;
				}
			}, 1000);
		}
		
		
		function pair() {
			setTimeout(function () {
				selectCart[0].gotoAndStop(2);
				selectCart[1].gotoAndStop(2);
				watchTitle();
			}, 500);
		}
		
		
		function watchTitle() {
			mc.mc_titles.mc_rojo.alpha = 0;
			mc.mc_titles.gotoAndStop(currentPair);
		
			if (contPairs < (totalCartas / 2)) {
				contPairs++;
				selectCart = [];
				for (var i = 0; i < totalCartas; i++) {
					mc["mc_obj" + i].mouseEnabled = true;
				}
				console.log("Contador de Parejas: ", contPairs, "TotalCartas: ", (totalCartas / 2));
			}
			if (contPairs == 10) {
				console.log("Entro Aqui")
				mc.mc_feedback.gotoAndStop(1);
				mc.mc_feedback.btn_finish.addEventListener("mousedown", finishGame);
		
				createjs.Tween.get(mc.mc_feedback).wait(500).to({
					alpha: 1
				}, 200, createjs.Ease.linear);
			}
		
		}
		
		function finishGame(evt) {
			mc.mc_feedback.btn_finish.removeEventListener("mousedown", finishGame);
			mc_contenido.mc_vacio.removeAllChildren();
			finTema(true, estructura.actTemaImportancia);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Feedback
	this.mc_feedback = new lib.Símbolo2();
	this.mc_feedback.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_feedback).wait(2));

	// Cartas
	this.mc_obj19 = new lib.Símbolo22();
	this.mc_obj19.parent = this;
	this.mc_obj19.setTransform(373.6,180.3,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj18 = new lib.Símbolo21();
	this.mc_obj18.parent = this;
	this.mc_obj18.setTransform(188.2,180.3,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj17 = new lib.Símbolo20();
	this.mc_obj17.parent = this;
	this.mc_obj17.setTransform(2.8,180.3,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj16 = new lib.Símbolo19();
	this.mc_obj16.parent = this;
	this.mc_obj16.setTransform(-182.7,180.3,1,1,0,0,0,-0.4,-0.4);

	this.mc_obj15 = new lib.Símbolo18();
	this.mc_obj15.parent = this;
	this.mc_obj15.setTransform(-368.1,180.3,1,1,0,0,0,-0.4,-0.4);

	this.mc_obj14 = new lib.Símbolo17();
	this.mc_obj14.parent = this;
	this.mc_obj14.setTransform(373.6,49.5,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj13 = new lib.Símbolo16();
	this.mc_obj13.parent = this;
	this.mc_obj13.setTransform(188.2,49.5,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj12 = new lib.Símbolo15();
	this.mc_obj12.parent = this;
	this.mc_obj12.setTransform(2.8,49.5,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj11 = new lib.Símbolo14();
	this.mc_obj11.parent = this;
	this.mc_obj11.setTransform(-182.7,49.5,1,1,0,0,0,-0.4,-0.4);

	this.mc_obj10 = new lib.Símbolo13();
	this.mc_obj10.parent = this;
	this.mc_obj10.setTransform(-368.1,49.5,1,1,0,0,0,-0.4,-0.4);

	this.mc_obj9 = new lib.Símbolo12();
	this.mc_obj9.parent = this;
	this.mc_obj9.setTransform(373.6,-81.6,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj8 = new lib.Símbolo11();
	this.mc_obj8.parent = this;
	this.mc_obj8.setTransform(188.2,-81.6,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj7 = new lib.Símbolo10();
	this.mc_obj7.parent = this;
	this.mc_obj7.setTransform(2.8,-81.6,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj6 = new lib.Símbolo9();
	this.mc_obj6.parent = this;
	this.mc_obj6.setTransform(-182.7,-81.6,1,1,0,0,0,-0.4,-0.4);

	this.mc_obj5 = new lib.Símbolo8();
	this.mc_obj5.parent = this;
	this.mc_obj5.setTransform(-368.1,-81.6,1,1,0,0,0,-0.4,-0.4);

	this.mc_obj4 = new lib.Símbolo7();
	this.mc_obj4.parent = this;
	this.mc_obj4.setTransform(373.6,-212.5,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj3 = new lib.Símbolo6();
	this.mc_obj3.parent = this;
	this.mc_obj3.setTransform(188.2,-212.5,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj2 = new lib.Símbolo5();
	this.mc_obj2.parent = this;
	this.mc_obj2.setTransform(2.8,-212.5,1,1,0,0,0,-0.3,-0.4);

	this.mc_obj1 = new lib.Símbolo4();
	this.mc_obj1.parent = this;
	this.mc_obj1.setTransform(-182.7,-212.5,1,1,0,0,0,-0.4,-0.4);

	this.mc_obj0 = new lib.Símbolo3();
	this.mc_obj0.parent = this;
	this.mc_obj0.setTransform(-368.1,-212.5,1,1,0,0,0,-0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_obj0},{t:this.mc_obj1},{t:this.mc_obj2},{t:this.mc_obj3},{t:this.mc_obj4},{t:this.mc_obj5},{t:this.mc_obj6},{t:this.mc_obj7},{t:this.mc_obj8},{t:this.mc_obj9},{t:this.mc_obj10},{t:this.mc_obj11},{t:this.mc_obj12},{t:this.mc_obj13},{t:this.mc_obj14},{t:this.mc_obj15},{t:this.mc_obj16},{t:this.mc_obj17},{t:this.mc_obj18},{t:this.mc_obj19}]}).wait(2));

	// Titulos
	this.mc_titles = new lib.Símbolo25();
	this.mc_titles.parent = this;
	this.mc_titles.setTransform(2.9,274.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_titles).wait(2));

	// Fondo
	this.instance = new lib.Mapadebits7();
	this.instance.parent = this;
	this.instance.setTransform(-509,-286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517,-305,1044.6,609.7);


// stage content:
(lib.pag07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Content
	this.mc_content = new lib.Símbolo1();
	this.mc_content.parent = this;
	this.mc_content.setTransform(763.2,419.4,1,1,0,0,0,0,-4.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_content).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(886.2,478.8,1044.6,609.7);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/pag07_atlas_.png", id:"pag07_atlas_"},
		{src:"sounds/concentrese.mp3", id:"concentrese"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;