(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"pag08_atlas_", frames: [[1036,899,541,251],[1606,281,172,47],[1036,281,568,321],[1036,604,541,293],[1579,604,290,47],[1035,0,711,279],[1748,0,148,47],[0,1189,1034,592],[0,595,1034,592],[0,0,1033,593],[1036,1318,424,90],[1748,98,70,87],[1311,1152,184,161],[1462,1315,184,161],[1497,1152,184,161],[1748,49,148,47],[1036,1152,273,164]]}
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
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits11 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits12 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits13 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits14 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits15 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits16 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits17 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits18 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits7 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits8 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits9 = function() {
	this.spriteSheet = ss["pag08_atlas_"];
	this.gotoAndStop(16);
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20512").s().p("AgtB2QgSgMgLgSQgKgUgEgXQgFgXABgWQgBgWAFgXQAEgWAKgUQALgTASgLQASgMAbAAQAcAAASAMQATALAKATQAKAUAFAWQAEAXAAAWQAAAWgEAXQgFAXgKAUQgKASgTAMQgSAMgcABQgbgBgSgMgAgVhHQgJAIgDANQgEANgBAOIgBAXIABAYQABAOAEANQADANAJAIQAIAJANAAQAPAAAIgJQAIgIAEgNQAEgNABgOIAAgYIAAgXQgBgOgEgNQgEgNgIgIQgIgJgPAAQgNAAgIAJg");
	this.shape.setTransform(38.7,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AAPB+IAAi/IgyAsIgegiIBRhGIAyAAIAAD7g");
	this.shape_1.setTransform(15.9,0.1);

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

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20512").s().p("AgvB1QgVgKgMgUQgNgTAAgaQAAgTAEgOQAFgNAGgMIAPgZIA3hWIBBAAIg7BaIAIgCIAJgBQAYAAARALQASALAKASQAKASAAAYQAAAagNATQgMAUgVAKQgVALgbAAQgaAAgVgLgAgcALQgLALgBARQABASALALQALALARAAQASAAALgLQALgLABgSQgBgRgLgLQgLgLgSAAQgRAAgLALg");
	this.shape_10.setTransform(-17.9,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20512").s().p("AhGB+IBnjKIh8AAIAAgxIC3AAIAAAvIhjDMg");
	this.shape_11.setTransform(-17.9,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20512").s().p("AgrB6QgUgIgMgQQgMgQgBgZQABgYAMgQQAMgPAXgFIAAgBQgVgGgLgPQgLgOAAgVQAAgXALgQQAMgPATgIQATgHAWAAQAYAAATAHQASAIAMAPQALAQAAAXQAAAVgLAOQgLAPgUAGIAAABQAXAFAMAPQAMAQAAAYQgBAZgMAQQgMAQgUAIQgUAJgYAAQgXAAgUgJgAgYAbQgKAJAAAOQAAANAKAJQAJAJAPAAQAQAAAKgJQAJgJAAgNQAAgOgJgJQgKgKgQAAQgPAAgJAKgAgVhIQgJAIAAALQAAANAJAHQAIAIANAAQAOAAAJgIQAIgHAAgNQAAgLgIgIQgJgIgOAAQgNAAgIAIg");
	this.shape_12.setTransform(-17.9,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20512").s().p("Ag4CAIA6haIgHACIgJABQgXgBgTgKQgRgLgKgTQgKgRAAgYQAAgaANgTQAMgUAVgKQAVgLAaAAQAbAAAVALQAVAKANAUQAMATAAAaQAAASgEAPQgFANgGAMIgPAZIg3BWgAgchDQgLALgBASQABARALALQALAKARAAQATAAAKgKQAMgLgBgRQABgSgMgLQgKgLgTAAQgRAAgLALg");
	this.shape_13.setTransform(-17.8,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:-17.9}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_5,p:{x:-19.6}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_7},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_8},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_9},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_10},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_11},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_12},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3,p:{x:-38.9}},{t:this.shape_13},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5,p:{x:-40.7}},{t:this.shape_3,p:{x:-17.9}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.4,-23.2,102.9,46.5);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

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

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0CDQgagOgPgdQgPgdgCgoQAAgQACgVQACgVAHgVQAHgWANgTQANgSAWgMQAVgMAfgBQAOgBARAEQASAEARAHQARAHAMALIgbA0IgQgJIgUgIQgLgDgMAAQgPAAgKAHQgMAIgGAMQgHAMgCAPQAIgIAOgGQANgFARgBQAagBAVALQAVALANAVQANATAAAcQAAAbgMAXQgNAWgXAPQgXAOghABIgFAAQgeAAgYgOgAgKAPQgJAEgGAGQgGAFgDAEQAAAKAEALQAEALAIAIQAIAHAMABQAQgBAKgJQALgKAAgPQAAgIgDgIQgEgJgHgFQgHgGgMAAQgIAAgIAEg");
	this.shape_5.setTransform(-6.4,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhWCNIBrjkIhBAAIAAAbIhAAAIAAhQIDZAAIAAA1IhsDkg");
	this.shape_6.setTransform(-6.3,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4CGQgYgLgNgUQgNgUAAgZQAAgNAGgOQAFgOAKgLQAKgLANgHQgPgJgIgPQgHgPAAgPQAAgWALgSQALgSAWgKQAVgLAeAAQAfAAAWALQAVAKALASQALASAAAWQAAAUgKAPQgKAOgOAGQAOAHAJAKQAJALAFAOQAFANAAAOQAAAZgNAUQgNAUgYALQgYAMghAAQggAAgYgMgAgdAjQgHAJAAAMQAAAOALAJQALAJAPABQAPAAALgJQAKgIABgQQgBgOgIgIQgJgIgMgDQgLgDgJAAQgKAFgHAKgAgShXQgIAIAAAKQAAALAHAGQAHAGAJACQAJACAHAAQAIgEAFgHQAGgHAAgJQAAgLgJgHQgJgHgMAAQgLAAgJAHg");
	this.shape_7.setTransform(-6.4,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnCOQgSgEgRgHQgRgHgMgKIAbg1IAQAJQAJAFALADQALADAMABQAWgBANgOQANgOAAgaQgIAIgMAGQgMAGgQAAQgaABgVgLQgWgLgMgUQgNgUAAgcQAAgbAMgXQANgWAXgOQAXgOAhgCQAhgBAaAPQAbAPAQAcQAQAdABApQABARgDAWQgCAVgHAWQgHAVgOASQgOASgVALQgWALgfABIgDAAQgNAAgPgDgAgchGQgLAJAAAPQAAAIADAJQADAIAIAGQAHAFAMAAQAIAAAIgFQAHgDAFgGIAJgJQAAgKgDgLQgEgLgHgIQgHgHgMAAQgQAAgKAKg");
	this.shape_8.setTransform(-6.4,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag6CCQgagQgPghQgOghgBgwQABgrAOghQAOggAagSQAZgTAiAAQAnAAAZATQAaASAMAhQANAhAAAsQAAAtgNAgQgOAggZASQgZARglAAQghAAgagQgAgQhHQgHAKgGASQgFASAAAZQAAAZAGATQAFATAJAKQAIALAHAAQAJgBAIgKQAHgKAEgSQAFgTAAgYQAAgXgFgTQgFgTgHgKQgIgLgJAAIgBAAQgIAAgHAJg");
	this.shape_9.setTransform(3.6,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhHCNIAAg2IApAAIAAiUIgpATIgSgtIAWgLQALgFAMgLQALgJAPgRIBHAAIAADjIAlAAIAAA2g");
	this.shape_10.setTransform(-18.5,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	// Capa 2
	this.instance = new lib.Mapadebits4();
	this.instance.parent = this;
	this.instance.setTransform(-35,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-43,70,87);


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

	this.btn_next = new lib.Símbolo7();
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


(lib.Símbolo15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Button
	this.btn_next = new lib.Símbolo7();
	this.btn_next.parent = this;
	this.btn_next.setTransform(-1.3,87.8);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_next).wait(10));

	// Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape.setTransform(169.3,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgvBVIAAipIARAAIAACZIBOAAIAAAQg");
	this.shape_1.setTransform(161.1,-9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AA+BVIgTgtIhVAAIgTAtIgUAAIBKipIAPAAIBKCpgAgkAZIBJAAIglhZg");
	this.shape_2.setTransform(145.7,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AAxBVIhkiRIgBAAIAACRIgRAAIAAipIAVAAIBlCPIAAAAIAAiPIARAAIAACpg");
	this.shape_3.setTransform(128.2,-9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgIBVIAAipIARAAIAACpg");
	this.shape_4.setTransform(115.7,-9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgIBVIhBipIATAAIA2CPIAAAAIA3iPIATAAIhCCpg");
	this.shape_5.setTransform(105.3,-9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AA+BVIgTgtIhVAAIgTAtIgUAAIBKipIAPAAIBKCpgAgkAZIBJAAIglhZg");
	this.shape_6.setTransform(89.7,-9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_7.setTransform(68.1,-6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_8.setTransform(53.8,-9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_9.setTransform(33.6,-6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_10.setTransform(17.3,-6.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_11.setTransform(0.6,-6.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_12.setTransform(-9,-9.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_13.setTransform(-21.4,-9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_14.setTransform(-30.9,-6.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_15.setTransform(-51.4,-6.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_16.setTransform(-61.4,-6.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_17.setTransform(-73,-6.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_18.setTransform(-81.8,-9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_19.setTransform(-90,-6.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_20.setTransform(-107.9,-6.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_21.setTransform(-119.7,-6.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_22.setTransform(-133.3,-6.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_23.setTransform(-146.4,-6.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_24.setTransform(-156,-8.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgIBVIAAiZIg4AAIAAgQICBAAIAAAQIg4AAIAACZg");
	this.shape_25.setTransform(-165.7,-9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20512").s().p("AgQBWQgHgHAAgKQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgTAeIAAh6IAmAAIAAB6g");
	this.shape_26.setTransform(63,-90);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20512").s().p("AAWBBIAAg+IgBgOQgBgIgEgFQgFgFgKAAQgJAAgFAEQgFAFgBAHQgCAIAAAHIAAA/IgnAAIAAh+IAmAAIAAASIAAAAQADgGAFgEQAFgFAHgDQAGgDAKAAQATAAALAIQAKAIADANQAEAOAAARIAABFg");
	this.shape_27.setTransform(49.8,-87.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20512").s().p("AgdA6QgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQATAAANAIQANAIAHAPQAIAPAAATIAAAMIhaAAQADAMAHAGQAIAHALAAQAJAAAHgEQAHgFAEgHIAcAVQgKALgOAHQgOAGgQAAQgSAAgQgIgAAagNQAAgKgHgHQgHgHgKAAQgIAAgGADQgGAEgDAFQgDAGgBAGIAzAAIAAAAg");
	this.shape_28.setTransform(34.9,-87.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20512").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgGgGgBgKQABgKAGgGQAGgGAJAAQAKAAAGAGQAGAGABAKQgBAKgGAGQgGAGgKABQgJgBgGgGg");
	this.shape_29.setTransform(24,-90.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20512").s().p("AgJBhQgIgDgFgFQgGgEgDgFIAAAAIAAARIgkAAIAAjEIAmAAIAABUIABAAQAGgJALgEQALgEALAAQASABANAJQANAJAGAPQAIAPAAASQgBATgHAPQgIAOgNAJQgPAIgSAAQgJAAgHgDgAgXAKQgIAJAAAPQAAAOAIAJQAHAIAPABQAOgBAJgIQAHgJABgOQgBgPgHgJQgJgIgOAAQgPAAgHAIg");
	this.shape_30.setTransform(12.9,-90.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20512").s().p("Ag1BdIgOgDIAFggIAJACIAJABQAJAAAEgCQAFgCADgFIAFgMIADgHIg3h/IAqAAIAfBUIABAAIAbhUIAoAAIg5CSIgHASQgEAIgEAGQgGAFgJADQgIACgOAAIgPgBg");
	this.shape_31.setTransform(-10.7,-84);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20512").s().p("AgrA5QgKgIgEgNQgDgOAAgRIAAhFIAnAAIAAA+QAAAHABAHQABAIAEAFQAEAFAKABQAJAAAFgFQAFgFACgHQACgHAAgIIAAg/IAnAAIAAB+IgmAAIAAgRIAAAAQgDAFgFAEQgFAFgHADQgHADgJAAQgUAAgKgIg");
	this.shape_32.setTransform(-25.3,-87);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20512").s().p("AA/BcIAAiMIAAAAIgwCMIgeAAIgviMIAAAAIAACMIgpAAIAAi3IA9AAIAqB3IAAAAIArh3IA9AAIAAC3g");
	this.shape_33.setTransform(-45.1,-90);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20512").s().p("AgTBdIAAh6IAmAAIAAB6gAgQgzQgHgGAAgLQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAALgHAGQgHAHgKAAQgJAAgHgHg");
	this.shape_34.setTransform(-63.1,-84.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_35.setTransform(218.7,-10.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAFAKAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgEgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQADQAMADAHAHQAJAJgBALQAAAJgDAHQgEAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_36.setTransform(210.3,-14.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_37.setTransform(198.6,-14.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAIgIAJgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAFAGAIAEQAHADAJAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_38.setTransform(179.3,-11.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_39.setTransform(169.4,-17.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAFAJAAIAJgBQAFgCAEgCQAEgCACgEQACgEAAgEQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGAEQAGADAKADIAQADQALADAJAHQAHAJABALQAAAJgFAHQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_40.setTransform(161.5,-14.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgGgGgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQADQALADAJAHQAHAJABALQgBAJgEAHQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_41.setTransform(144.7,-14.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_42.setTransform(133,-14.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AAGBJQgFgCgDgEQgEgCgDgHQgDgFAAgKIAAhFIgYAAIAAgPIAYAAIAAggIAPAAIAAAgIAgAAIAAAPIggAAIAABBIABAKIADAGQACACAEABIAGABIAIgBIAIgDIABAOQgIAFgNAAIgJgBg");
	this.shape_43.setTransform(123.1,-16.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgGgGgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQADQALADAJAHQAHAJABALQgBAJgEAHQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_44.setTransform(114.1,-14.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_45.setTransform(102.2,-14.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_46.setTransform(82.2,-14.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgCAJQgDAIAAAJQAAAJADAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_47.setTransform(67.9,-18);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_48.setTransform(47.1,-14.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgCAJQgDAIAAAJQAAAJADAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_49.setTransform(32.3,-18);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_50.setTransform(18.8,-14.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_51.setTransform(-1.5,-17.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgNBcIAAhhIgYAAIAAgOIAYAAIAAgfQAAgWALgKQAJgJARAAIAHAAIAGACIgDAOIgGgBIgFgBQgHAAgEACQgEADgCAEIgDAJIgBALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_52.setTransform(-7.4,-18.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_53.setTransform(-14.4,-17.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_54.setTransform(-24.1,-14.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_55.setTransform(-38.2,-11.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_56.setTransform(-48.1,-17.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgGgGgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQADQALADAJAHQAHAJABALQgBAJgEAHQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_57.setTransform(-56,-14.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_58.setTransform(-80.3,-14.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_59.setTransform(-100.7,-14.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAQQgDgCgGAAQgJAAgHAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_60.setTransform(-110.8,-14.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_61.setTransform(-122.3,-14.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_62.setTransform(-139.4,-14.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAFAKAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgEgGgGgFQgFgEgJAAIgIABIgHADIgGAGQgBADAAAEQgBAIAGAEQAFADALADIAQADQALADAIAHQAJAJgBALQAAAJgDAHQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_63.setTransform(-157.2,-14.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_64.setTransform(-169.1,-14.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_65.setTransform(-182.6,-14.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_66.setTransform(-195.8,-14.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_67.setTransform(-205.3,-17.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICDAAIAAAQIg6AAIAACZg");
	this.shape_68.setTransform(-215.1,-17.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICDAAIAAAQIg5AAIAACZg");
	this.shape_69.setTransform(42.4,7.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgFQADgGAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_70.setTransform(28.8,7.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgFQADgGAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_71.setTransform(15.5,7.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgeAIIAAgPIA9AAIAAAPg");
	this.shape_72.setTransform(4.9,10.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgWBTQgQgHgMgMQgMgMgHgQQgGgQgBgUQABgSAGgQQAHgRAMgMQALgMARgGQAQgIASABQAVgBAOAHQAPAFAMALIgOAOQgIgKgMgFQgMgGgQABQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAOAFAOQAFANAJALQAJAJANAGQANAHAPgBQANAAANgDQAMgDAJgFIAAg6IgoAAIAAgOIA5AAIAABSQgOAIgRAFQgSAEgPABQgSAAgQgHg");
	this.shape_73.setTransform(-9,7.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgFQADgGAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_74.setTransform(-24.5,7.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_75.setTransform(-50.1,10.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_76.setTransform(223,-18.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_77.setTransform(209.9,-18.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgLgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_78.setTransform(195.5,-21.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_79.setTransform(181.7,-18.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_80.setTransform(168.1,-18.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_81.setTransform(155.9,-18.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_82.setTransform(144.1,-18.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgDgCgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_83.setTransform(134.5,-18.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_84.setTransform(126.5,-18.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_85.setTransform(114.4,-18.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_86.setTransform(82.4,-18.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_87.setTransform(69,-18.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AAsBcIAAhYIAAAAQgFAGgEAEIgMAHIgMAEIgLABQgMAAgLgFQgLgEgIgIQgIgIgEgJQgFgMAAgMQAAgNAFgLQAEgKAIgJQAIgHALgFQALgEAMAAIALABQAGABAGADIAMAHQAEADAFAHIAAAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgFAGgEAIQgDAJAAAJQAAAJADAIQAEAJAFAGQAGAFAHADQAIADAJAAQAKAAAIgDQAIgDAGgFQAGgGADgJQAEgIAAgJQAAgJgEgJQgDgIgGgGQgGgGgIgEQgIgDgKAAQgJAAgIADg");
	this.shape_88.setTransform(54.7,-15.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADgBAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_89.setTransform(36,-18.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_90.setTransform(24.2,-18.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_91.setTransform(10.6,-18.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_92.setTransform(-3,-18.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_93.setTransform(-13,-21.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_94.setTransform(-32.8,-18.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_95.setTransform(-45.5,-18.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_96.setTransform(-63.1,-18.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_97.setTransform(-74.8,-18.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_98.setTransform(-98.1,-18.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_99.setTransform(-109.8,-18.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_100.setTransform(-118.7,-18.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_101.setTransform(-130.2,-18.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_102.setTransform(-147.3,-18.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_103.setTransform(-165.1,-18.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_104.setTransform(-177,-18.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_105.setTransform(-190.5,-18.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_106.setTransform(-203.7,-18.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_107.setTransform(-213.2,-21.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICCAAIAAAQIg4AAIAACZg");
	this.shape_108.setTransform(-223,-21.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_109.setTransform(86.9,10.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_110.setTransform(75.1,10.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_111.setTransform(65.5,10.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_112.setTransform(38.5,7.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_113.setTransform(16.2,10.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIALgHQAHgDAGgBIAKgBQANAAAMAFQAKAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_114.setTransform(-10,7.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_115.setTransform(-85.7,10.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_116.setTransform(204.5,-21.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_117.setTransform(183.7,-18.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAIgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_118.setTransform(171.6,-18.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHQgBAIAAAHIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_119.setTransform(150.2,-18.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_120.setTransform(133.1,-18.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_121.setTransform(123,-18.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIALgHQAGgDAFgBIALgBQANAAALAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgDAJgBAJQABAJADAIQADAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAHgDAHgFQAFgGADgJQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgEQgIgDgKAAQgIAAgJADg");
	this.shape_122.setTransform(111.1,-15.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_123.setTransform(92.9,-18.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_124.setTransform(75.8,-18.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgLACQgVAAgLgMg");
	this.shape_125.setTransform(30.4,-18.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_126.setTransform(12.1,-18.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_127.setTransform(-20.2,-18.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#111111").s().p("AgXBVQgGgCgGgFQgFgEgDgGQgEgHAAgIQAAgNAHgIQAHgIALgDQALgFALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgQAfgBQAIAAAIACQAHADAGAFQAFAFADAHQAEAIAAAJIAAAyIAAAOIACAMIgQAAIgBgJIAAgJQgHAKgKAGQgJAEgNAAQgIAAgHgBgAAHAcIgQADQgJADgGAEQgGAFAAAIQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgGQACgHAAgHIAAgIIgIAAIgPAAgAgKgzIAXgiIAVAAIgfAig");
	this.shape_128.setTransform(-59.6,-21.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIABANIgQAAIgBgJIAAgJIgHAIQgEAEgFADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_129.setTransform(-72.3,-18.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_130.setTransform(-104.2,-18.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_131.setTransform(-114.3,-18.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_132.setTransform(-134.6,-21.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_133.setTransform(-160.7,-18.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_134.setTransform(211.9,-13.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_135.setTransform(188,-21.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_136.setTransform(174.7,-21.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#111111").s().p("AgWBSQgQgGgMgMQgMgMgHgQQgGgQAAgUQAAgSAGgQQAHgRAMgMQALgMARgGQAQgIASABQAVgBAOAHQAPAFAMALIgOAOQgIgKgMgFQgMgGgQABQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAOAFAOQAFANAJALQAJAJANAGQANAHAPgBQAOAAAMgDQALgDAKgFIAAg6IgpAAIAAgOIA7AAIAABSQgPAIgRAFQgRAEgQABQgSAAgQgIg");
	this.shape_137.setTransform(150.2,-21.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_138.setTransform(134.7,-21.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_139.setTransform(94.6,-21.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFAAgJQAAgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_140.setTransform(76,-18.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#111111").s().p("AAGBIQgGgBgCgEQgEgCgDgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQABADADAAIAHABIAIgBIAJgEIAAAQQgJADgMAAIgJgBg");
	this.shape_141.setTransform(52.6,-19.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADgBAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_142.setTransform(37.8,-18.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEAKgIAIQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAFQgGAFgCAJQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgJgFgFQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_143.setTransform(25.5,-21.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQAEgHAFgDIAKgHQAHgDAFgBIALgBQAOAAAKAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgFgEgEgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgJQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_144.setTransform(11.5,-15.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIAMgHQAGgDAFgBIALgBQANAAALAEQAMAFAHAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgHAIgMAEQgLAFgNAAIgLgBIgLgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgEAJAAAJQAAAJAEAIQADAJAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAHgDAHgFQAFgGADgJQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_145.setTransform(-25.4,-15.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgGgDQgFgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_146.setTransform(-81.6,-18.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_147.setTransform(-150.4,-18.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#111111").s().p("AgIBVIAAiZIg4AAIAAgQICBAAIAAAQIg5AAIAACZg");
	this.shape_148.setTransform(-208.3,-21.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#111111").s().p("AgKBbIgMgEIgMgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIAMgHQAFgDAHgBIAKgBQAOAAALAFQALAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBgAgRgHQgIADgGAFQgGAGgDAJQgEAIAAAJQAAAJAEAJQADAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_149.setTransform(191,-21.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAIgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_150.setTransform(172.5,-18.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQAEgHAEgDIALgHQAHgDAGgBIAKgBQANAAAMAEQAKAFAIAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgIAIgKAEQgMAFgNAAIgKgBIgNgEIgLgHQgEgEgEgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgJQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_151.setTransform(146.1,-15.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgLgEgIgHQgHgIgFgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_152.setTransform(109.9,-15.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHAAANQAAAIgEAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_153.setTransform(97.8,-18.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_154.setTransform(-105.8,-18.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_155.setTransform(-152.2,-18.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_156.setTransform(-200.3,-21.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADABAFQAAAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_157.setTransform(41,10.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIALgHQAGgDAHgBIAKgBQAOAAALAEQALAFAHAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgHAIgLAEQgLAFgOAAIgKgBIgNgEIgLgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgDAJAAAJQAAAJADAIQAEAJAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAHgDAHgFQAFgGACgJQAEgIAAgJQAAgJgEgJQgCgIgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_158.setTransform(-12.1,13.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_159.setTransform(-45.6,13.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADgBAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_160.setTransform(207,-18.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADABAFQAAAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_161.setTransform(136.8,-18.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#111111").s().p("AgKBbIgNgEIgKgHQgFgEgEgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQAEgGAFgEIAKgHQAHgDAGgBIAKgBQANAAAMAFQAKAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgKAFQgMAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_162.setTransform(105.6,-21.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgGgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgGAEgIACQgIACgIAAQgNAAgKgFg");
	this.shape_163.setTransform(87.1,-18.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIALgHQAFgDAGgBIALgBQANAAALAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgDAJAAAJQAAAJADAIQADAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAGgFQAFgGADgJQADgIAAgJQAAgJgDgJQgDgIgFgGQgGgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_164.setTransform(60.8,-15.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgDgFAAgJQAAgIADgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_165.setTransform(41.4,-18.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgMAFQgLAFgMAAQgLAAgLgFQgKgEgIgHQgJgIgEgKQgEgKAAgMQAAgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAGAGAHAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_166.setTransform(14.3,-15.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_167.setTransform(2.3,-18.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_168.setTransform(-24.9,-18.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_169.setTransform(-121.2,-21.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_170.setTransform(118.9,-21.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAEgHAFgDIALgHQAHgDAGgBIAKgBQANAAAMAEQAKAFAIAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgIAIgKAEQgMAFgNAAIgKgBIgNgEIgLgHQgFgEgEgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgJQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_171.setTransform(77.4,-15.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("AAsBcIAAhYIgBAAQgEAGgFAEIgKAHIgMAEIgMABQgNAAgKgFQgLgEgIgIQgIgIgFgJQgEgMAAgMQAAgNAEgLQAFgKAIgJQAIgHALgFQAKgEANAAIAMABQAFABAHADIAKAHQAFADAEAHIABAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgFAGgDAIQgDAJAAAJQAAAJADAIQADAJAFAGQAGAFAHADQAIADAJAAQAJAAAJgDQAIgDAGgFQAGgGAEgJQADgIAAgJQAAgJgDgJQgEgIgGgGQgGgGgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_172.setTransform(-36.6,-15.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_173.setTransform(-72.1,-15.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_174.setTransform(-111.4,-18.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_175.setTransform(-212.4,-18.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_176.setTransform(-224.3,-18.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_177.setTransform(-251,-18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:-90,y:-6.2}},{t:this.shape_18,p:{x:-81.8,y:-9.6}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-21.4,y:-9.6}},{t:this.shape_12,p:{x:-9,y:-9.6}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:89.7,y:-9}},{t:this.shape_5,p:{x:105.3,y:-9}},{t:this.shape_4,p:{x:115.7,y:-9}},{t:this.shape_3,p:{x:128.2,y:-9}},{t:this.shape_2,p:{x:145.7,y:-9}},{t:this.shape_1,p:{x:161.1,y:-9}},{t:this.shape,p:{x:169.3,y:-1.7}}]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_68,p:{x:-215.1,y:-17.5}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:-139.4,y:-14.7}},{t:this.shape_18,p:{x:-131.1,y:-18.1}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_13,p:{x:-70.7,y:-18.1}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_19,p:{x:7.5,y:-14.7}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_12,p:{x:189.8,y:-18.1}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:218.7,y:-10.2}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_108},{t:this.shape_107,p:{x:-213.2}},{t:this.shape_106,p:{x:-203.7}},{t:this.shape_105,p:{x:-190.5}},{t:this.shape_104,p:{x:-177}},{t:this.shape_103},{t:this.shape_102,p:{x:-147.3}},{t:this.shape_18,p:{x:-139,y:-21.9}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99,p:{x:-109.8}},{t:this.shape_98,p:{x:-98.1}},{t:this.shape_13,p:{x:-83.6,y:-21.9}},{t:this.shape_97,p:{x:-74.8}},{t:this.shape_96,p:{x:-63.1,y:-18.4}},{t:this.shape_95,p:{x:-45.5,y:-18.4}},{t:this.shape_94,p:{x:-32.8}},{t:this.shape_62,p:{x:-21.2,y:-18.4}},{t:this.shape_93,p:{x:-13}},{t:this.shape_92,p:{x:-3,y:-18.4}},{t:this.shape_91,p:{x:10.6}},{t:this.shape_90,p:{x:24.2}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87,p:{x:69}},{t:this.shape_86,p:{x:82.4}},{t:this.shape_19,p:{x:101.9,y:-18.4}},{t:this.shape_85,p:{x:114.4,y:-18.4}},{t:this.shape_84,p:{x:126.5}},{t:this.shape_83},{t:this.shape_82,p:{x:144.1}},{t:this.shape_81,p:{x:155.9}},{t:this.shape_80,p:{x:168.1,y:-18.4}},{t:this.shape_79,p:{x:181.7}},{t:this.shape_78},{t:this.shape_77,p:{x:209.9}},{t:this.shape_76,p:{x:223,y:-18.5}},{t:this.shape_75,p:{x:-50.1,y:10.4}},{t:this.shape_12,p:{x:-40.7,y:6.9}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72,p:{x:4.9,y:10.3}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69,p:{x:42.4,y:7.5}},{t:this.shape_35,p:{x:52.7,y:14.9}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_69,p:{x:-218.6,y:-21.3}},{t:this.shape_107,p:{x:-208.8}},{t:this.shape_90,p:{x:-199.3}},{t:this.shape_91,p:{x:-186.1}},{t:this.shape_86,p:{x:-172.6}},{t:this.shape_133},{t:this.shape_102,p:{x:-142.9}},{t:this.shape_132,p:{x:-134.6}},{t:this.shape_97,p:{x:-125.8}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_94,p:{x:-84.3}},{t:this.shape_129,p:{x:-72.3}},{t:this.shape_128,p:{x:-59.6}},{t:this.shape_18,p:{x:-50.2,y:-21.9}},{t:this.shape_79,p:{x:-34.2}},{t:this.shape_127},{t:this.shape_82,p:{x:0.2}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_76,p:{x:43.6,y:-18.5}},{t:this.shape_62,p:{x:63.3,y:-18.4}},{t:this.shape_124},{t:this.shape_123,p:{x:92.9}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120,p:{x:133.1}},{t:this.shape_119},{t:this.shape_93,p:{x:163.5}},{t:this.shape_118},{t:this.shape_117,p:{x:183.7}},{t:this.shape_116},{t:this.shape_77,p:{x:218.8}},{t:this.shape_13,p:{x:-95.7,y:6.9}},{t:this.shape_115,p:{x:-85.7,y:10.4}},{t:this.shape_96,p:{x:-73.4,y:10.4}},{t:this.shape_19,p:{x:-55.6,y:10.4}},{t:this.shape_92,p:{x:-43.1,y:10.4}},{t:this.shape_12,p:{x:-33.1,y:6.9}},{t:this.shape_95,p:{x:-24.3,y:10.4}},{t:this.shape_114},{t:this.shape_85,p:{x:4,y:10.4}},{t:this.shape_113,p:{x:16.2,y:10.3}},{t:this.shape_75,p:{x:25,y:10.4}},{t:this.shape_112},{t:this.shape_80,p:{x:53.3,y:10.4}},{t:this.shape_111,p:{x:65.5,y:10.3}},{t:this.shape_110,p:{x:75.1}},{t:this.shape_109},{t:this.shape_35,p:{x:95.3,y:14.9}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_148,p:{x:-208.3}},{t:this.shape_107,p:{x:-198.5}},{t:this.shape_86,p:{x:-189}},{t:this.shape_76,p:{x:-175.8,y:-18.5}},{t:this.shape_82,p:{x:-162.3}},{t:this.shape_147,p:{x:-150.4}},{t:this.shape_19,p:{x:-132.6,y:-18.4}},{t:this.shape_18,p:{x:-124.3,y:-21.9}},{t:this.shape_75,p:{x:-115.5,y:-18.4}},{t:this.shape_113,p:{x:-104,y:-18.5}},{t:this.shape_115,p:{x:-93.9,y:-18.4}},{t:this.shape_146,p:{x:-81.6}},{t:this.shape_13,p:{x:-67.1,y:-21.9}},{t:this.shape_92,p:{x:-57.1,y:-18.4}},{t:this.shape_81,p:{x:-44.8}},{t:this.shape_145},{t:this.shape_84,p:{x:-13.4}},{t:this.shape_85,p:{x:-3.4,y:-18.4}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_93,p:{x:45.7}},{t:this.shape_141},{t:this.shape_80,p:{x:63.7,y:-18.4}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_77,p:{x:109}},{t:this.shape_12,p:{x:118.5,y:-21.9}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_72,p:{x:164.1,y:-18.5}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_68,p:{x:201.6,y:-21.3}},{t:this.shape_134,p:{x:211.9}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_148,p:{x:-210.1}},{t:this.shape_156,p:{x:-200.3}},{t:this.shape_104,p:{x:-190.8}},{t:this.shape_105,p:{x:-177.6}},{t:this.shape_90,p:{x:-164.1}},{t:this.shape_155},{t:this.shape_62,p:{x:-134.4,y:-18.4}},{t:this.shape_18,p:{x:-126.1,y:-21.9}},{t:this.shape_75,p:{x:-117.3,y:-18.4}},{t:this.shape_154},{t:this.shape_115,p:{x:-95.7,y:-18.4}},{t:this.shape_19,p:{x:-75.8,y:-18.4}},{t:this.shape_87,p:{x:-63.8}},{t:this.shape_128,p:{x:-51.1}},{t:this.shape_13,p:{x:-41.7,y:-21.9}},{t:this.shape_91,p:{x:-25.7}},{t:this.shape_92,p:{x:-11.7,y:-18.4}},{t:this.shape_86,p:{x:8.7}},{t:this.shape_147,p:{x:20.6}},{t:this.shape_129,p:{x:38.9}},{t:this.shape_79,p:{x:52.1}},{t:this.shape_113,p:{x:70.6,y:-18.5}},{t:this.shape_107,p:{x:76.4}},{t:this.shape_82,p:{x:86}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_85,p:{x:124.6,y:-18.4}},{t:this.shape_151},{t:this.shape_80,p:{x:160.2,y:-18.4}},{t:this.shape_150},{t:this.shape_93,p:{x:180.4}},{t:this.shape_149},{t:this.shape_12,p:{x:200.8,y:-21.9}},{t:this.shape_77,p:{x:210.3}},{t:this.shape_110,p:{x:-55.6}},{t:this.shape_76,p:{x:-42.4,y:10.3}},{t:this.shape_6,p:{x:-20.7,y:7.5}},{t:this.shape_5,p:{x:-5.1,y:7.5}},{t:this.shape_4,p:{x:5.4,y:7.5}},{t:this.shape_3,p:{x:17.8,y:7.5}},{t:this.shape_2,p:{x:35.4,y:7.5}},{t:this.shape_1,p:{x:50.7,y:7.5}},{t:this.shape_35,p:{x:59,y:14.9}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_148,p:{x:-205.1}},{t:this.shape_156,p:{x:-195.4}},{t:this.shape_104,p:{x:-185.8}},{t:this.shape_91,p:{x:-172.7}},{t:this.shape_90,p:{x:-159.1}},{t:this.shape_147,p:{x:-147.3}},{t:this.shape_19,p:{x:-129.4,y:-18.4}},{t:this.shape_169},{t:this.shape_95,p:{x:-112.4,y:-18.4}},{t:this.shape_113,p:{x:-100.8,y:-18.5}},{t:this.shape_120,p:{x:-90.8}},{t:this.shape_146,p:{x:-78.5}},{t:this.shape_132,p:{x:-63.9}},{t:this.shape_117,p:{x:-53.9}},{t:this.shape_81,p:{x:-41.6}},{t:this.shape_168},{t:this.shape_107,p:{x:-19.1}},{t:this.shape_86,p:{x:-9.6}},{t:this.shape_167},{t:this.shape_166,p:{x:14.3}},{t:this.shape_115,p:{x:29.1,y:-18.4}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_92,p:{x:74.8,y:-18.4}},{t:this.shape_163,p:{x:87.1}},{t:this.shape_93,p:{x:95}},{t:this.shape_162},{t:this.shape_18,p:{x:115.4,y:-21.9}},{t:this.shape_82,p:{x:125}},{t:this.shape_161},{t:this.shape_77,p:{x:155.2}},{t:this.shape_79,p:{x:168.3}},{t:this.shape_13,p:{x:184.7,y:-21.9}},{t:this.shape_85,p:{x:194.7,y:-18.4}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_75,p:{x:-32.1,y:10.4}},{t:this.shape_12,p:{x:-22.7,y:6.9}},{t:this.shape_158},{t:this.shape_80,p:{x:2,y:10.4}},{t:this.shape_76,p:{x:15.6,y:10.3}},{t:this.shape_110,p:{x:29.1}},{t:this.shape_157},{t:this.shape,p:{x:49.4,y:14.9}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_148,p:{x:-270.3}},{t:this.shape_156,p:{x:-260.5}},{t:this.shape_177},{t:this.shape_91,p:{x:-237.8}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_62,p:{x:-194.6,y:-18.4}},{t:this.shape_18,p:{x:-186.3,y:-21.9}},{t:this.shape_99,p:{x:-177.5}},{t:this.shape_84,p:{x:-166}},{t:this.shape_115,p:{x:-155.9,y:-18.4}},{t:this.shape_106,p:{x:-135.5}},{t:this.shape_13,p:{x:-125.9,y:-21.9}},{t:this.shape_174},{t:this.shape_107,p:{x:-105.6}},{t:this.shape_104,p:{x:-96}},{t:this.shape_98,p:{x:-84.2}},{t:this.shape_173},{t:this.shape_92,p:{x:-57.4,y:-18.4}},{t:this.shape_172},{t:this.shape_129,p:{x:-22.3}},{t:this.shape_90,p:{x:-8.9}},{t:this.shape_19,p:{x:10.6,y:-18.4}},{t:this.shape_85,p:{x:23.1,y:-18.4}},{t:this.shape_111,p:{x:35.2,y:-18.5}},{t:this.shape_113,p:{x:43.2,y:-18.5}},{t:this.shape_86,p:{x:52.8}},{t:this.shape_163,p:{x:64.6}},{t:this.shape_171},{t:this.shape_80,p:{x:91.4,y:-18.4}},{t:this.shape_79,p:{x:105}},{t:this.shape_170},{t:this.shape_82,p:{x:133.2}},{t:this.shape_97,p:{x:152.5}},{t:this.shape_12,p:{x:168.5,y:-21.9}},{t:this.shape_95,p:{x:177.3,y:-18.4}},{t:this.shape_93,p:{x:193.4}},{t:this.shape_123,p:{x:206.3}},{t:this.shape_75,p:{x:222.6,y:-18.4}},{t:this.shape_166,p:{x:236.2}},{t:this.shape_77,p:{x:250.5}},{t:this.shape_76,p:{x:263.6,y:-18.5}},{t:this.shape_134,p:{x:273.9}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_148,p:{x:-270.3}},{t:this.shape_156,p:{x:-260.5}},{t:this.shape_177},{t:this.shape_91,p:{x:-237.8}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_62,p:{x:-194.6,y:-18.4}},{t:this.shape_18,p:{x:-186.3,y:-21.9}},{t:this.shape_99,p:{x:-177.5}},{t:this.shape_84,p:{x:-166}},{t:this.shape_115,p:{x:-155.9,y:-18.4}},{t:this.shape_106,p:{x:-135.5}},{t:this.shape_13,p:{x:-125.9,y:-21.9}},{t:this.shape_174},{t:this.shape_107,p:{x:-105.6}},{t:this.shape_104,p:{x:-96}},{t:this.shape_98,p:{x:-84.2}},{t:this.shape_173},{t:this.shape_92,p:{x:-57.4,y:-18.4}},{t:this.shape_172},{t:this.shape_129,p:{x:-22.3}},{t:this.shape_90,p:{x:-8.9}},{t:this.shape_19,p:{x:10.6,y:-18.4}},{t:this.shape_85,p:{x:23.1,y:-18.4}},{t:this.shape_111,p:{x:35.2,y:-18.5}},{t:this.shape_113,p:{x:43.2,y:-18.5}},{t:this.shape_86,p:{x:52.8}},{t:this.shape_163,p:{x:64.6}},{t:this.shape_171},{t:this.shape_80,p:{x:91.4,y:-18.4}},{t:this.shape_79,p:{x:105}},{t:this.shape_170},{t:this.shape_82,p:{x:133.2}},{t:this.shape_97,p:{x:152.5}},{t:this.shape_12,p:{x:168.5,y:-21.9}},{t:this.shape_95,p:{x:177.3,y:-18.4}},{t:this.shape_93,p:{x:193.4}},{t:this.shape_123,p:{x:206.3}},{t:this.shape_75,p:{x:222.6,y:-18.4}},{t:this.shape_166,p:{x:236.2}},{t:this.shape_77,p:{x:250.5}},{t:this.shape_76,p:{x:263.6,y:-18.5}},{t:this.shape_134,p:{x:273.9}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_148,p:{x:-270.3}},{t:this.shape_156,p:{x:-260.5}},{t:this.shape_177},{t:this.shape_91,p:{x:-237.8}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_62,p:{x:-194.6,y:-18.4}},{t:this.shape_18,p:{x:-186.3,y:-21.9}},{t:this.shape_99,p:{x:-177.5}},{t:this.shape_84,p:{x:-166}},{t:this.shape_115,p:{x:-155.9,y:-18.4}},{t:this.shape_106,p:{x:-135.5}},{t:this.shape_13,p:{x:-125.9,y:-21.9}},{t:this.shape_174},{t:this.shape_107,p:{x:-105.6}},{t:this.shape_104,p:{x:-96}},{t:this.shape_98,p:{x:-84.2}},{t:this.shape_173},{t:this.shape_92,p:{x:-57.4,y:-18.4}},{t:this.shape_172},{t:this.shape_129,p:{x:-22.3}},{t:this.shape_90,p:{x:-8.9}},{t:this.shape_19,p:{x:10.6,y:-18.4}},{t:this.shape_85,p:{x:23.1,y:-18.4}},{t:this.shape_111,p:{x:35.2,y:-18.5}},{t:this.shape_113,p:{x:43.2,y:-18.5}},{t:this.shape_86,p:{x:52.8}},{t:this.shape_163,p:{x:64.6}},{t:this.shape_171},{t:this.shape_80,p:{x:91.4,y:-18.4}},{t:this.shape_79,p:{x:105}},{t:this.shape_170},{t:this.shape_82,p:{x:133.2}},{t:this.shape_97,p:{x:152.5}},{t:this.shape_12,p:{x:168.5,y:-21.9}},{t:this.shape_95,p:{x:177.3,y:-18.4}},{t:this.shape_93,p:{x:193.4}},{t:this.shape_123,p:{x:206.3}},{t:this.shape_75,p:{x:222.6,y:-18.4}},{t:this.shape_166,p:{x:236.2}},{t:this.shape_77,p:{x:250.5}},{t:this.shape_76,p:{x:263.6,y:-18.5}},{t:this.shape_134,p:{x:273.9}}]},1).wait(1));

	// Fondo blanco
	this.instance = new lib.Mapadebits10();
	this.instance.parent = this;
	this.instance.setTransform(-289,-134,1.065,1.065);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Fondo
	this.instance_1 = new lib.Mapadebits18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-517,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517,-296,1034,592);


(lib.Símbolo14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Button
	this.btn_next = new lib.Símbolo7();
	this.btn_next.parent = this;
	this.btn_next.setTransform(-1.5,82.7);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_next).wait(10));

	// Texto
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(76.2,33.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_1.setTransform(65.7,29.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAPQgKAEgMABIgKgCg");
	this.shape_2.setTransform(54.7,27.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAFgFAEgFIALgGQAGgDAHgBIAKgBQAOAAALAEQALAFAHAIQAIAHAEAMQAFAKAAANQAAAMgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBIgNgEIgLgHQgEgEgFgFIAAAAIAABXgAgRhJQgIADgGAGQgGAGgEAJQgDAHAAAKQAAAJADAIQAEAJAGAFQAGAFAIAEQAIADAJAAQAKAAAIgDQAHgEAHgFQAFgFACgJQAEgIAAgJQAAgKgEgHQgCgJgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_3.setTransform(43.7,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_4.setTransform(29.3,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_5.setTransform(17.3,29.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGACgGAEQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_6.setTransform(4.2,29.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_7.setTransform(-9.4,29.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_8.setTransform(-21.9,29.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_9.setTransform(-41.4,29.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAPQgKAEgMABIgKgCg");
	this.shape_10.setTransform(-52,27.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgDAAgFQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQAEQAMACAHAHQAJAJgBALQAAAKgDAGQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_11.setTransform(-61,29.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_12.setTransform(-72.9,29.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_13.setTransform(222,-0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_14.setTransform(212,-0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_15.setTransform(200.4,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_16.setTransform(191.6,-4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_17.setTransform(183.4,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgDQgFgCgDgGQgDgGAAgHQAAgJADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_18.setTransform(165.5,-0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_19.setTransform(153.8,-0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_20.setTransform(140.3,2.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_21.setTransform(126.4,-0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_22.setTransform(113.2,-0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AAFBIQgFgBgDgDQgDgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgEIACAPQgJAEgNAAIgKgBg");
	this.shape_23.setTransform(102.6,-2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_24.setTransform(85.3,-0.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AglAuQgLgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAJAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_25.setTransform(71.9,-0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AAsBcIAAhXIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgFQgKgEgIgIQgIgIgEgKQgFgLAAgMQAAgNAFgKQAEgMAIgHQAIgIAKgFQALgEANAAIALABQAHABAGADIALAGQAEAEAFAGIAAAAIAAgTIAQAAIAAC1gAgRhJQgIADgFAGQgFAGgDAIQgEAIAAAKQAAAJAEAIQADAIAFAHQAFAEAIAEQAIAEAJgBQAKABAIgEQAIgEAGgEQAGgHAEgIQADgIAAgJQAAgKgDgIQgEgIgGgGQgGgGgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_26.setTransform(57.6,2.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_27.setTransform(37.4,-0.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAFgDAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_28.setTransform(28.6,-0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_29.setTransform(17,-0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQADgGAGgEIAKgGQAGgDAGgBIALgBQAOAAAKAEQALAFAIAIQAIAHAFAMQAEAKAAANQAAAMgEALQgFAKgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgGgEgDgFIgBAAIAABXgAgRhJQgIADgGAGQgGAGgEAIQgCAIAAAKQAAAJACAIQAEAIAGAHQAGAEAIAEQAIAEAJgBQAKABAIgEQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgKgEgIQgCgIgGgGQgFgGgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_30.setTransform(4.2,2.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_31.setTransform(-13.1,-4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_32.setTransform(-22.5,-0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_33.setTransform(-31.3,-3.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgFAEgEQADgEAFgEQADgCAGgCQAFgDAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_34.setTransform(-37.1,-0.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_35.setTransform(-48.8,-0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AAFBIQgFgBgDgDQgDgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgEIACAPQgJAEgNAAIgKgBg");
	this.shape_36.setTransform(-59.4,-2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_37.setTransform(-69.9,-0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_38.setTransform(-86.3,-0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_39.setTransform(-105.8,-4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_40.setTransform(-115.4,-0.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_41.setTransform(-135.8,-0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_42.setTransform(-148.7,-0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_43.setTransform(-161.2,-0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_44.setTransform(-174.6,-0.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_45.setTransform(-188.1,-0.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_46.setTransform(-207.9,-0.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_47.setTransform(-222.2,-3.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_48.setTransform(212.7,-30.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAFAKgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAJQgDgHgHgDQgFgFgJAAIgHABIgIADIgGAFQgCAEAAAEQABAIAFADQAGAEAKADIAQAEQAMACAIAIQAHAHAAAMQAAAKgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_49.setTransform(201.7,-30.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_50.setTransform(193.7,-33.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgIA4IgthvIATAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_51.setTransform(185.1,-30.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_52.setTransform(172.6,-30.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AAkBVIguhPIgdAAIAABPIgRAAIAAipIA1AAQAYAAAPAMQAQALgBAXQAAARgLAMQgLALgVADIAxBQgAgngJIAfAAQALAAAIgCQAIgDAFgEQAEgDADgGQABgGAAgFQAAgHgBgFQgDgGgEgEQgFgEgIgCQgIgCgLAAIgfAAg");
	this.shape_53.setTransform(159.7,-33.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_54.setTransform(141.7,-25.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_55.setTransform(131.8,-30.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAEgFAJQgEAJAAAOIAAA5IgQAAIAAhWIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABGg");
	this.shape_56.setTransform(115.5,-30.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_57.setTransform(98.8,-30.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_58.setTransform(89.2,-33.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_59.setTransform(72.6,-30.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAPAAIAAAVIABAAQACgFADgDQADgFAFgEQADgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_60.setTransform(62.5,-30.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AAFBIQgFgBgDgDQgDgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgEIACAQQgJADgNAAIgKgBg");
	this.shape_61.setTransform(53.6,-31.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgHgFgDQgHgFgIAAIgIABIgHADIgFAFQgCAEgBAEQAAAIAGADQAGAEAKADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_62.setTransform(44.5,-30.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_63.setTransform(32.7,-30.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_64.setTransform(19.3,-30.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_65.setTransform(5.8,-30.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgHgGgDQgFgFgJAAIgHABIgIADIgGAFQgCAEAAAEQABAIAFADQAGAEAKADIAQAEQALACAJAIQAHAHABAMQgBAKgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_66.setTransform(-12.4,-30.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_67.setTransform(-24.2,-30.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_68.setTransform(-44.2,-30.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAFAKgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgHgFgDQgHgFgIAAIgIABIgHADIgFAFQgDAEAAAEQAAAIAGADQAFAEALADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_69.setTransform(-55.9,-30.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAPIhRAAIAABAIBaAAIAAAQg");
	this.shape_70.setTransform(-67.6,-33.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_71.setTransform(-85.3,-25.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgHgHgDQgFgFgJAAIgHABIgIADIgGAFQgBAEAAAEQAAAIAFADQAFAEALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_72.setTransform(-93.7,-30.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_73.setTransform(-106,-30.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAEgFAJQgEAJAAAOIAAA5IgQAAIAAhWIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABGg");
	this.shape_74.setTransform(-123.5,-30.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_75.setTransform(-140.1,-30.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_76.setTransform(-153.7,-33.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_77.setTransform(-163.5,-33.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_78.setTransform(-173.1,-30.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_79.setTransform(-185.1,-30.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_80.setTransform(-204.6,-30.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAHABIAJgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_81.setTransform(-215.2,-31.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_82.setTransform(225.9,-60.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_83.setTransform(213.6,-60.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_84.setTransform(203.6,-60.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQACADACAAIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_85.setTransform(194.6,-61.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_86.setTransform(183.5,-60.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgHABIgIADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAJgFAGQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_87.setTransform(171.3,-60.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_88.setTransform(159,-60.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_89.setTransform(145,-60.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFADAHAAQAIgBAFgFQAFgFADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_90.setTransform(126.2,-57.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_91.setTransform(108.7,-60.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgXBUQgGgCgGgEQgFgEgDgGQgEgHAAgHQAAgOAHgIQAHgIALgDQALgEALgCIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgQAfgBQAIAAAIACQAHADAGAFQAFAFADAIQAEAHAAAJIAAAyIAAAOIACAMIgQAAIgBgJIAAgJQgHAKgKAGQgJAEgNAAQgIAAgHgCgAAHAcIgQADQgJADgGAEQgGAFAAAIQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgCAFgGQAEgFACgGQACgHAAgHIAAgIIgIAAIgPAAgAgKgzIAXgjIAVAAIgfAjg");
	this.shape_92.setTransform(97,-62.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_93.setTransform(80.6,-60.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_94.setTransform(63.9,-60.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_95.setTransform(49.6,-63.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAJgFAGQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_96.setTransform(30.9,-60.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_97.setTransform(18.6,-60.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_98.setTransform(8.6,-63.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_99.setTransform(-7.4,-60.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAJgDAGQgEAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_100.setTransform(-25,-60.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_101.setTransform(-36.7,-60.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_102.setTransform(-50.3,-63.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_103.setTransform(-60.2,-62.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_104.setTransform(-69.8,-60);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_105.setTransform(-81.8,-60.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_106.setTransform(-97.9,-54);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_107.setTransform(-106.3,-60.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_108.setTransform(-118,-60.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_109.setTransform(-131.6,-63.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_110.setTransform(-141.4,-62.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIABANIgQAAIgBgJIAAgJIgHAIQgEAEgFADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_111.setTransform(-151,-60);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_112.setTransform(-163,-60.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_113.setTransform(-182.5,-60.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgDgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIADAGQADADADAAIAHABIAHgBIAIgEIABAQQgJADgMAAIgKgBg");
	this.shape_114.setTransform(-193.1,-61.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AglBLQgKgLAAgWIAAhGIAPAAIAAA9QAAAJACAIQABAHADAFQAEAFAGACQAFADAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABALIAAAOIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgFACgGACIgLABQgVAAgKgLgAgNgzIAXgjIAWAAIggAjg");
	this.shape_115.setTransform(-210.5,-62.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("AgIBVIAAiZIg4AAIAAgQICBAAIAAAQIg5AAIAACZg");
	this.shape_116.setTransform(-224,-63);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B20512").s().p("AgQBWQgHgHAAgKQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgTAeIAAh6IAmAAIAAB6g");
	this.shape_117.setTransform(68.5,-102.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B20512").s().p("AgiA6QgQgIgKgPQgJgPAAgUQAAgTAJgPQAKgPAQgIQAPgIATAAQAUAAAQAIQAQAIAJAPQAJAPAAATQAAAUgJAPQgJAPgQAIQgQAIgUAAQgTAAgPgIgAgWgWQgIAJAAANQAAAPAIAIQAIAJAOAAQAPAAAIgJQAIgIAAgPQAAgNgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_118.setTransform(54.8,-99.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B20512").s().p("AgBBQQgKgEgGgIQgGgJAAgOIAAg6IgZAAIAAggIAZAAIAAglIAmAAIAAAlIAiAAIAAAgIgiAAIAAAoIABANQABAFAEADQAEADAIAAIAIAAQAFgBADgDIAAAgQgGADgHABIgOAAQgNAAgKgDg");
	this.shape_119.setTransform(41.4,-101.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B20512").s().p("AANBCQgTAAgQgIQgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIATAAQALAAAMAEQAMADAKAKIgaAbQgDgFgFgCQgGgDgFAAQgOAAgJAJQgHAJgBANQABAPAHAIQAJAJAOAAQAGAAAFgDQAEgCAEgFIAaAcQgKAJgMAEQgLADgKAAIgCAAg");
	this.shape_120.setTransform(30.5,-99.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B20512").s().p("AgdA6QgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQATAAANAIQANAIAHAPQAIAPAAATIAAAMIhaAAQADAMAHAGQAIAHALAAQAJAAAHgEQAHgFAEgHIAcAVQgKALgOAHQgOAGgQAAQgSAAgQgIgAAagNQAAgKgHgHQgHgHgKAAQgIAAgGADQgGAEgDAFQgDAGgBAGIAzAAIAAAAg");
	this.shape_121.setTransform(16.3,-99.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B20512").s().p("AgrBBIAAh+IAnAAIAAAVIAAAAQAFgMAJgGQAJgGANAAIAGABIAGABIAAAjIgIgCIgIAAQgPAAgHAFQgGAFgCAKQgDAJABAMIAAA1g");
	this.shape_122.setTransform(4.5,-100);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B20512").s().p("AgrBBIAAh+IAnAAIAAAVIAAAAQAFgMAJgGQAJgGANAAIAGABIAGABIAAAjIgIgCIgIAAQgPAAgHAFQgGAFgCAKQgDAJABAMIAAA1g");
	this.shape_123.setTransform(-6.1,-100);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B20512").s().p("AgiA6QgQgIgKgPQgJgPAAgUQAAgTAJgPQAKgPAQgIQAPgIATAAQAUAAAQAIQAQAIAJAPQAJAPAAATQAAAUgJAPQgJAPgQAIQgQAIgUAAQgTAAgPgIgAgWgWQgIAJAAANQAAAPAIAIQAIAJAOAAQAPAAAIgJQAIgIAAgPQAAgNgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_124.setTransform(-19.8,-99.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B20512").s().p("AAMBCQgSAAgQgIQgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQAMAAAMAEQAMADAJAKIgZAbQgDgFgFgCQgGgDgGAAQgNAAgIAJQgIAJAAANQAAAPAIAIQAIAJANAAQAHAAAFgDQAFgCADgFIAZAcQgJAJgMAEQgLADgKAAIgDAAg");
	this.shape_125.setTransform(-33.5,-99.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B20512").s().p("AAWBBIAAg+IgBgOQgBgIgEgFQgFgFgKAAQgJAAgFAEQgFAFgBAHQgCAIAAAHIAAA/IgnAAIAAh+IAmAAIAAASIAAAAQADgGAFgEQAFgFAHgDQAGgDAKAAQATAAALAIQAKAIADANQAEAOAAARIAABFg");
	this.shape_126.setTransform(-47.7,-100);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B20512").s().p("AgTBcIAAi3IAnAAIAAC3g");
	this.shape_127.setTransform(-59,-102.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B20512").s().p("AgTBdIAAh7IAmAAIAAB7gAgQgzQgHgHAAgKQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_128.setTransform(-68.7,-97);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_129.setTransform(244.7,8.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#111111").s().p("AAGBJQgGgCgCgDQgEgEgDgGQgDgFAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAIgDIABAOQgJAFgMAAIgJgBg");
	this.shape_130.setTransform(233.6,6.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQADgFAGgFIALgGQAGgDAFgBIALgBQANAAALAFQALADAIAJQAIAHAFALQAEALAAANQAAAMgEALQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBIgLgEIgLgHQgGgEgDgFIgBAAIAABXgAgRhKQgIAEgGAGQgGAGgDAJQgDAHgBAKQABAJADAJQADAIAGAFQAGAFAIAEQAJAEAIAAQAKAAAIgEQAHgEAHgFQAFgFADgIQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgEQgIgDgKAAQgIAAgJADg");
	this.shape_131.setTransform(222.7,11.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_132.setTransform(208.3,8.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_133.setTransform(183.2,8.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_134.setTransform(169.6,8.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_135.setTransform(137.6,8.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#111111").s().p("AAGBJQgGgCgCgDQgEgEgDgGQgDgFAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAJgDIAAAOQgJAFgMAAIgJgBg");
	this.shape_136.setTransform(127,6.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAFAJAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgOgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAGQgCADABAEQAAAIAFAEQAGADAKADIAQAEQAMACAHAHQAIAIAAAMQAAAJgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_137.setTransform(117.9,8.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_138.setTransform(106.1,8.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_139.setTransform(85.6,8.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgEADgFQADgEAFgEQADgDAGgBQAGgCAHAAIAMABIgDAPQgEgBgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_140.setTransform(75.6,8.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_141.setTransform(64,8.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgHABIgIADIgFAGQgDADAAAEQAAAIAGAEQAFADALADIAQAEQALACAJAHQAHAIABAMQAAAJgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_142.setTransform(29.1,8.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_143.setTransform(17.4,8.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_144.setTransform(3.9,10.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_145.setTransform(-10,8.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_146.setTransform(-23.2,8.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#111111").s().p("AAGBJQgGgCgCgDQgEgEgDgGQgDgFAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAJgDIAAAOQgJAFgMAAIgJgBg");
	this.shape_147.setTransform(-33.8,6.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_148.setTransform(-51.1,8.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_149.setTransform(-64.5,8.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#111111").s().p("AAsBcIAAhXIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEQgLgFgIgIQgIgIgFgKQgEgLAAgMQAAgNAEgLQAFgLAIgHQAIgJALgDQAKgFANAAIAMABQAGABAFADIALAGQAGAFADAFIABAAIAAgTIAQAAIAAC1gAgRhKQgIAEgFAGQgGAGgDAJQgCAHAAAKQAAAJACAJQADAIAGAFQAFAFAIAEQAIAEAJAAQAKAAAIgEQAIgEAGgFQAGgFADgIQAEgJAAgJQAAgKgEgHQgDgJgGgGQgGgGgIgEQgIgDgKAAQgJAAgIADg");
	this.shape_150.setTransform(-78.8,11.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_151.setTransform(-99,8.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgEQADgDAGgBQAFgCAIAAIAMABIgDAPQgDgBgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_152.setTransform(-107.8,8.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_153.setTransform(-119.4,8.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAFgFAEgFIALgGQAGgDAHgBIAKgBQAOAAALAFQALADAHAJQAIAHAEALQAFALAAANQAAAMgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBIgNgEIgLgHQgEgEgFgFIAAAAIAABXgAgRhKQgIAEgGAGQgGAGgEAJQgDAHAAAKQAAAJADAJQAEAIAGAFQAGAFAIAEQAIAEAJAAQAKAAAIgEQAHgEAHgFQAFgFACgIQAEgJAAgJQAAgKgEgHQgCgJgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_154.setTransform(-132.2,11.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_155.setTransform(-158.9,8.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_156.setTransform(-167.7,5.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgEQAEgDAGgBQAFgCAIAAIAMABIgDAPQgEgBgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_157.setTransform(-173.5,8.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_158.setTransform(-185.2,8.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#111111").s().p("AAGBJQgGgCgCgDQgEgEgDgGQgDgFAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAJgDIAAAOQgJAFgMAAIgJgBg");
	this.shape_159.setTransform(-195.8,6.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_160.setTransform(-206.3,8.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAHIgBAQIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWAAAKALQAKALAAAVIAABGg");
	this.shape_161.setTransform(-222.7,8.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_162.setTransform(-251.8,8.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#111111").s().p("AgIA4IguhvIAUAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_163.setTransform(244.8,-21.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgLACQgVAAgLgMg");
	this.shape_164.setTransform(218.9,-21.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgJQAHgHALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgHQACgHAAgHIAAgIIgIAAIgPABg");
	this.shape_165.setTransform(151.1,-21.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgDAAgFQAAgJgGgEQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgGgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQALACAJAHQAHAJABALQgBAKgEAGQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_166.setTransform(140.2,-21.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_167.setTransform(132.1,-24.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#111111").s().p("AAkBVIguhPIgdAAIAABPIgRAAIAAipIA1AAQAYAAAQALQAPALgBAYQAAARgLAMQgLAMgVACIAxBQgAgngJIAfAAQAKAAAJgCQAHgCAFgFQAFgEADgFQABgGAAgFQAAgGgBgGQgDgFgFgEQgFgEgHgDQgJgCgKAAIgfAAg");
	this.shape_168.setTransform(98.1,-24.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_169.setTransform(80.2,-17.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAFAAQAFAAAEgCQACgCABgEQACgDABgEIAAgJIAAiDIAQAAIAACGIAAAIQAAAGgDAGQgDAGgGAFQgHAEgLAAQgIAAgFgCgAAEhbQgEgEAAgFQAAgFAEgDQAEgDAEAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEADgEAAQgEAAgEgDg");
	this.shape_170.setTransform(58.5,-21.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgJQAHgHALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgHQACgHAAgHIAAgIIgIAAIgPABg");
	this.shape_171.setTransform(50.3,-21.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIALgHQAGgDAHgBIAKgBQAOAAALAFQALAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgDAIAAAJQAAAJADAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGACgIQAEgJAAgJQAAgJgEgIQgCgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_172.setTransform(37.4,-24.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgJQAHgHALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgHQACgHAAgHIAAgIIgIAAIgPABg");
	this.shape_173.setTransform(23.2,-21.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgCAGgCQAGgCAHgBIAMACIgDAPQgDgBgGAAQgJAAgHAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_174.setTransform(14.3,-21.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_175.setTransform(-23.6,-21.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGACgGAEQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_176.setTransform(-43.8,-21.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_177.setTransform(-56.9,-21.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_178.setTransform(-77.9,-24.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgJQAHgHALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgHQACgHAAgHIAAgIIgIAAIgPABg");
	this.shape_179.setTransform(-110.5,-21.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#111111").s().p("AgeBUQgOgHgKgNIAQgLQAFAJAKAGQAKAGANgBQAGAAAGgCQAHgCAFgDQAFgFAEgGQADgFAAgIQAAgJgEgFQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgNAFgJQAEgIAIgGQAIgHAKgCQAJgEAKAAQAOABAMAFQAMAEAKAMIgPALQgMgRgVAAQgGAAgGACQgHACgFAEQgFAEgDAFQgDAGAAAJQAAALAGAGQAHAGAJAFIAUAHQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAHQgIAFgKAEQgKAEgJgBQgQAAgOgFg");
	this.shape_180.setTransform(-123.1,-24.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFACAHAAQAIABAFgGQAFgFADgJIAJgWIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAIQgIAHgOAAIgIAAg");
	this.shape_181.setTransform(-142.2,-18.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_182.setTransform(-162.3,-24.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgJQAHgHALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgHQACgHAAgHIAAgIIgIAAIgPABg");
	this.shape_183.setTransform(-175.8,-21.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_184.setTransform(-189.4,-24.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_185.setTransform(-199.3,-24.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgCAGgCQAFgCAIgBIAMACIgDAPQgEgBgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_186.setTransform(-205.1,-21.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIAAANIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_187.setTransform(-216.8,-21.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgEgKgBgMQABgNAEgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAFAGAIAEQAHADAJAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_188.setTransform(-231.1,-18.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_189.setTransform(-244.8,-21.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#111111").s().p("AgeBUQgOgHgKgNIAQgLQAFAJAKAGQAKAGANgBQAGAAAGgCQAHgCAFgDQAFgFAEgGQADgFAAgIQAAgJgEgFQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgNAFgJQAEgIAIgGQAIgHAKgCQAJgEAKAAQAOABAMAFQAMAEAKAMIgPALQgMgRgVAAQgGAAgGACQgHACgFAEQgFAEgDAFQgDAGAAAJQAAALAGAGQAHAGAJAFIAUAHQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAHQgIAFgKAEQgKAEgJgBQgQAAgOgFg");
	this.shape_190.setTransform(-258.1,-24.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_191.setTransform(197.9,-54.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#111111").s().p("AgXBSQgLgFgIgHQgIgIgEgLQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgFAMAAQANAAALAFQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEALgIAIQgIAHgLAFQgLAFgNgBQgMABgLgFgAgRgNQgIAEgFAFQgGAGgCAIQgEAIAAAKQAAAJAEAIQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgIAAgJQAAgKgDgIQgDgIgFgGQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_192.setTransform(163.8,-54.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgKgEgJgHQgIgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_193.setTransform(149.1,-48.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAIgEIABAPQgJAEgMAAIgJgBg");
	this.shape_194.setTransform(132.4,-52.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgDQgFgCgDgGQgDgGgBgHQABgJADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQAMACAHAIQAIAHAAAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_195.setTransform(123.3,-51.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#111111").s().p("AgWBSQgQgGgMgMQgMgMgHgQQgGgRgBgTQABgTAGgQQAHgQAMgMQALgMARgHQAQgHASAAQAVAAAOAHQAPAFAMAMIgOAMQgIgJgMgFQgMgFgQgBQgPAAgNAHQgNAGgJAJQgJALgFANQgFAOAAANQAAAPAFANQAFANAJALQAJAJANAHQANAFAPAAQANABANgEQAMgDAJgGIAAg4IgoAAIAAgPIA5AAIAABSQgOAIgRAFQgSAEgPAAQgSABgQgIg");
	this.shape_196.setTransform(95,-54.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_197.setTransform(58.5,-54.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_198.setTransform(38.3,-51.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIQgBAHAAAHIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_199.setTransform(22,-51.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAIgEIABAPQgJAEgMAAIgJgBg");
	this.shape_200.setTransform(-5.3,-52.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgDQgFgCgDgGQgDgGgBgHQABgJADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQAMACAHAIQAIAHAAAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_201.setTransform(-14.4,-51.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_202.setTransform(-22.4,-54.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAGANgBQAGAAAGgCQAHgBAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgMAFgKQAEgIAIgGQAIgHAKgCQAJgEAKAAQAOAAAMAGQAMAEAKAMIgPALQgMgRgVAAQgGAAgGACQgHACgFAEQgFAEgDAGQgDAFAAAIQAAAMAGAGQAHAGAJAFIAUAHQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAHQgIAFgKAEQgKADgJAAQgQABgOgHg");
	this.shape_203.setTransform(-32,-54.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_204.setTransform(-51.8,-51.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_205.setTransform(-72.2,-54.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#111111").s().p("AgNBcIAAhhIgYAAIAAgOIAYAAIAAgfQAAgWALgKQAJgJARAAIAHAAIAGACIgDAOIgGgBIgFgBQgHAAgEACQgEADgCAEIgDAJIgBALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_206.setTransform(-78,-55);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_207.setTransform(-85,-54.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_208.setTransform(-108.9,-48.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_209.setTransform(-118.8,-54.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgGgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQALACAJAIQAHAHABAMQgBAKgEAGQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_210.setTransform(-126.7,-51.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#111111").s().p("AgIBVIAAiZIg4AAIAAgQICBAAIAAAQIg4AAIAACZg");
	this.shape_211.setTransform(-145.4,-54.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAGANgBQAGAAAGgCQAHgBAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgMAFgKQAEgIAIgGQAIgHAKgCQAJgEAKAAQAOAAAMAGQAMAEAKAMIgPALQgMgRgVAAQgGAAgGACQgHACgFAEQgFAEgDAGQgDAFAAAIQAAAMAGAGQAHAGAJAFIAUAHQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAHQgIAFgKAEQgKADgJAAQgQABgOgHg");
	this.shape_212.setTransform(-159,-54.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAGANgBQAGAAAGgCQAHgBAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgMAFgKQAEgIAIgGQAIgHAKgCQAJgEAKAAQAOAAAMAGQAMAEAKAMIgPALQgMgRgVAAQgGAAgGACQgHACgFAEQgFAEgDAGQgDAFAAAIQAAAMAGAGQAHAGAJAFIAUAHQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAHQgIAFgKAEQgKADgJAAQgQABgOgHg");
	this.shape_213.setTransform(-172.3,-54.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#111111").s().p("AgeAIIAAgPIA9AAIAAAPg");
	this.shape_214.setTransform(-182.9,-51.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#111111").s().p("AgWBSQgQgGgMgMQgMgMgHgQQgHgRAAgTQAAgTAHgQQAHgQAMgMQAMgMAQgHQAQgHASAAQAUAAAPAHQAPAFALAMIgMAMQgJgJgMgFQgMgFgQgBQgPAAgNAHQgNAGgJAJQgJALgFANQgFAOAAANQAAAPAFANQAFANAJALQAJAJANAHQANAFAPAAQAOABALgEQAMgDAKgGIAAg4IgoAAIAAgPIA5AAIAABSQgOAIgRAFQgRAEgQAAQgSABgQgIg");
	this.shape_215.setTransform(-196.8,-54.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAGANgBQAGAAAGgCQAHgBAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgMAFgKQAEgIAIgGQAIgHAKgCQAJgEAKAAQAOAAAMAGQAMAEAKAMIgPALQgMgRgVAAQgGAAgGACQgHACgFAEQgFAEgDAGQgDAFAAAIQAAAMAGAGQAHAGAJAFIAUAHQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAHQgIAFgKAEQgKADgJAAQgQABgOgHg");
	this.shape_216.setTransform(-212.3,-54.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#111111").s().p("AAGBJQgGgCgCgDQgEgEgDgGQgDgFAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAJgBIAIgDIABAOQgKAFgMAAIgJgBg");
	this.shape_217.setTransform(123.3,6.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAFgFAEgFIAMgGQAGgDAGgBIAKgBQANAAAMAFQALADAHAJQAIAHAEALQAFALAAANQAAAMgFALQgEAKgIAIQgHAIgLAFQgMAEgNAAIgKgBIgMgEIgMgHQgEgEgFgFIAAAAIAABXgAgRhKQgIAEgGAGQgGAGgDAJQgEAHAAAKQAAAJAEAJQADAIAGAFQAGAFAIAEQAIAEAJAAQAKAAAIgEQAHgEAHgFQAFgFADgIQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_218.setTransform(112.3,11.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#111111").s().p("AAGBJQgGgCgCgDQgEgEgDgGQgDgFAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAJgBIAIgDIAAAOQgJAFgMAAIgJgBg");
	this.shape_219.setTransform(16.6,6.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFAEQAFADALADIAQAEQAMACAHAHQAJAIgBAMQAAAJgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_220.setTransform(7.6,8.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgEADgFQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAPQgEgBgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_221.setTransform(-34.8,8.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgGgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQALACAJAHQAHAIABAMQgBAJgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_222.setTransform(-81.2,8.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEAMAAIAKAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_223.setTransform(-106.5,10.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#111111").s().p("AAFBJQgEgCgEgDQgEgEgCgGQgDgFAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAHABIAJgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_224.setTransform(-144.1,6.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#111111").s().p("AAsBcIAAhXIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEQgLgFgIgIQgIgIgFgKQgEgLAAgMQAAgNAEgKQAFgMAIgHQAIgIALgFQAKgEANAAIAMABQAFABAHADIAKAGQAFAFAEAFIABAAIAAgTIAQAAIAAC1gAgRhJQgHADgGAGQgFAGgDAJQgDAHAAAKQAAAJADAIQADAJAFAFQAGAFAHAEQAIADAJAAQAJAAAJgDQAIgEAGgFQAGgFAEgJQADgIAAgJQAAgKgDgHQgEgJgGgGQgGgGgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_225.setTransform(190.2,-18.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQACgFADgEQADgEAFgEQADgCAGgCQAGgCAHgBIAMACIgDAPQgDgBgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_226.setTransform(161.2,-21.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAEgFAFgFIALgGQAHgDAGgBIAKgBQANAAAMAEQAKAFAIAIQAIAHAEAMQAFAKAAANQAAAMgFALQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBIgNgEIgLgHQgFgEgEgFIAAAAIAABXgAgRhJQgIADgGAGQgGAGgEAJQgCAHAAAKQAAAJACAIQAEAJAGAFQAGAFAIAEQAJADAIAAQAKAAAIgDQAIgEAFgFQAGgFACgJQAEgIAAgJQAAgKgEgHQgCgJgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_227.setTransform(136.8,-18.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgCAGgCQAGgCAHgBIAMACIgDAPQgEgBgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_228.setTransform(95.5,-21.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAGQgEAGgCAIIgBAPIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFACgGAEQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgFQAKgEAKgBIAKABQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_229.setTransform(46.3,-21.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQAEgCACgEQACgDAAgFQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgDADAAAEQAAAIAGAEQAFADALADIAQAEQALACAJAHQAHAJABALQAAAKgFAGQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_230.setTransform(-120.7,-21.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#111111").s().p("AgIA4IgthvIATAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_231.setTransform(-137.4,-21.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#111111").s().p("AAkBVIguhPIgdAAIAABPIgRAAIAAipIA0AAQAaAAAPALQAOALAAAYQAAARgLAMQgLAMgVACIAxBQgAgngJIAfAAQAKAAAJgCQAHgCAFgFQAGgEABgFQACgGAAgFQAAgGgCgGQgBgFgGgEQgFgEgHgDQgJgCgKAAIgfAAg");
	this.shape_232.setTransform(-162.8,-24.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICDAAIAAAQIg6AAIAACZg");
	this.shape_233.setTransform(-191,-24.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#111111").s().p("AgWBSQgQgGgMgMQgMgMgHgQQgHgRAAgTQAAgTAHgQQAHgQAMgMQAMgMAQgHQAQgHASAAQAUAAAPAHQAPAFALAMIgMAMQgJgJgMgFQgMgFgQgBQgPAAgNAHQgNAGgJAJQgJALgFANQgFAOAAANQAAAPAFANQAFANAJALQAJAJANAHQANAFAPAAQAOABAMgEQALgDAKgGIAAg4IgoAAIAAgPIA5AAIAABSQgOAIgRAFQgRAEgQAAQgSABgQgIg");
	this.shape_234.setTransform(209.6,-54.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQADgGAGgEIALgGQAGgDAFgBIALgBQANAAALAEQALAFAIAIQAIAHAFAMQAEAKAAANQAAAMgEALQgFAKgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgFIgBAAIAABXgAgRhJQgIADgGAGQgGAGgDAIQgDAIgBAKQABAJADAIQADAIAGAHQAGAEAIAEQAJAEAIgBQAKABAIgEQAHgEAHgEQAFgHADgIQADgIAAgJQAAgKgDgIQgDgIgFgGQgHgGgHgDQgIgEgKAAQgIAAgJAEg");
	this.shape_235.setTransform(80,-48.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAFgEQADgCAGgCQAGgDAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_236.setTransform(45.8,-51.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQACgFADgEQADgEAFgEQADgCAGgCQAGgDAHAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_237.setTransform(37.9,-51.5);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgRAAIAAgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_238.setTransform(-33.4,-51.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_239.setTransform(-52.3,-51.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#111111").s().p("AgIA4IgthvIASAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_240.setTransform(-63.9,-51.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFACAHABQAIAAAFgGQAFgFADgJIAJgWIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAIQgIAHgOAAIgIAAg");
	this.shape_241.setTransform(-95.5,-48.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgDQgFgCgDgGQgDgGgBgHQABgJADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQAMACAIAIQAHAHAAAMQAAAKgEAGQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_242.setTransform(-126.3,-51.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgCAGgCQAFgDAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_243.setTransform(-134.4,-51.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_244.setTransform(-146,-51.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQADgGAGgEIALgGQAFgDAGgBIALgBQANAAALAEQALAFAIAIQAIAHAFAMQAEAKAAANQAAAMgEALQgFAKgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgFIgBAAIAABXgAgRhJQgIADgGAGQgGAGgDAIQgDAIAAAKQAAAJADAIQADAIAGAHQAGAEAIAEQAJAEAIgBQAKABAIgEQAIgEAFgEQAGgHADgIQADgIAAgJQAAgKgDgIQgDgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_245.setTransform(-158.8,-48.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgDgDgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAJgEIAAAPQgJAEgMAAIgJgBg");
	this.shape_246.setTransform(-193.5,-52.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_247.setTransform(-204.4,-51.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#111111").s().p("AA+BVIgTgsIhVAAIgTAsIgUAAIBKipIAPAAIBKCpgAgkAZIBJAAIglhZg");
	this.shape_248.setTransform(-219.1,-54.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_249.setTransform(220.7,30.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAFgFAEgEIALgHQAGgDAHgBIAKgBQAOAAALAEQALAFAHAIQAIAHAEAMQAFAKAAANQAAANgFALQgEAJgIAIQgHAIgLAEQgLAFgOAAIgKgBIgNgEIgLgHQgEgEgFgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgDAJAAAJQAAAJADAIQAEAIAGAHQAGAEAIAEQAIAEAJgBQAKABAIgEQAHgEAHgEQAFgHACgIQAEgIAAgJQAAgJgEgJQgCgIgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_250.setTransform(209.8,35.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_251.setTransform(114.1,30.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgHgFgDQgHgFgIAAIgIABIgHADIgFAFQgCAEAAAEQgBAIAGADQAFAEALADIAQAEQAMACAHAIQAJAHgBANQAAAJgDAGQgEAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_252.setTransform(105,31.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_253.setTransform(72.7,31.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAQAAIAAAVIAAAAQACgFADgDQADgFAEgEQAEgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_254.setTransform(62.7,31.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAFAJgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgHgHgDQgFgFgJAAIgHABIgIADIgGAFQgCAEAAAEQABAIAFADQAGAEAKADIAQAEQAMACAHAIQAIAHAAANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_255.setTransform(16.2,31.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQADgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_256.setTransform(-9,34.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_257.setTransform(-22.9,31.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_258.setTransform(-46.7,30.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#111111").s().p("AAsBcIAAhYIAAAAQgEAGgFAEIgLAHIgNAEIgLABQgMAAgMgFQgKgEgIgIQgIgIgEgJQgFgLAAgNQAAgNAFgKQAEgMAIgHQAIgIAKgFQAMgEAMAAIALABQAGABAHADIALAHQAFAEAEAFIAAAAIAAgSIAQAAIAAC0gAgRhJQgHADgGAGQgFAGgDAIQgEAJAAAJQAAAJAEAIQADAIAFAHQAGAEAHAEQAIAEAJgBQAJABAJgEQAIgEAGgEQAGgHAEgIQADgIAAgJQAAgJgDgJQgEgIgGgGQgGgGgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_259.setTransform(-91.7,35.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAPAAIAAAVIABAAQACgFADgDQADgFAEgEQAEgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_260.setTransform(-120.7,31.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_261.setTransform(-132.3,31.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIABAAQAEgFAFgEIAKgHQAHgDAFgBIALgBQAOAAAKAEQALAFAIAIQAIAHAFAMQAEAKAAANQAAANgEALQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgFgEgEgGIgBAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAIAGAHQAGAEAIAEQAJAEAIgBQAKABAIgEQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_262.setTransform(-145.1,35.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_263.setTransform(-171.8,31.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#111111").s().p("AgeA5IAAhMIAAgPIgBgUIAQAAIAAAVIAAAAQABgFAEgDQADgFAEgEQAEgCAGgDQAGgCAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_264.setTransform(-186.4,31.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_265.setTransform(-208.7,30.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_266.setTransform(-219.2,31.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#111111").s().p("AAhA6IAAg9QAAgTgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_267.setTransform(159.2,1.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_268.setTransform(139.4,2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_269.setTransform(104.9,2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_270.setTransform(64.8,2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#111111").s().p("AAkBVIguhPIgdAAIAABPIgRAAIAAipIA0AAQAaAAAPAMQAOALAAAXQAAARgLANQgLALgVABIAxBRgAgngJIAfAAQAKAAAJgCQAHgDAFgDQAGgEABgGQACgFAAgGQAAgHgCgFQgBgFgGgFQgFgEgHgCQgJgCgKAAIgfAAg");
	this.shape_271.setTransform(51.9,-0.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#111111").s().p("AgXBVQgGgDgGgEQgFgEgDgGQgEgHAAgHQAAgOAHgIQAHgIALgDQALgEALgCIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgQAfgBQAIAAAIACQAHADAGAFQAFAFADAIQAEAHAAAJIAAAyIAAAOIACAMIgQAAIgBgJIAAgJQgHAKgKAGQgJAEgNAAQgIAAgHgBgAAHAcIgQADQgJADgGAEQgGAFAAAIQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgCAFgGQAEgFACgGQACgHAAgHIAAgIIgIAAIgPAAgAgKgzIAXgjIAVAAIgfAjg");
	this.shape_272.setTransform(13.8,-0.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_273.setTransform(-19.2,2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_274.setTransform(-33.6,-1.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQAAAJgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_275.setTransform(-52.2,2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_276.setTransform(-90.6,2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAJgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_277.setTransform(-126.4,2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIQgBAHAAAHIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_278.setTransform(-156.2,1.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_279.setTransform(-192.6,1.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#111111").s().p("AgPBVIAAhvIAPAAIAABvgAgWgyIAXgiIAWAAIgfAig");
	this.shape_280.setTransform(-211.3,-0.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQAAAJgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_281.setTransform(-220.1,2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_282.setTransform(-238.4,2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_283.setTransform(261.7,-27.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_284.setTransform(250,-27.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_285.setTransform(241.9,-28);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_286.setTransform(230.3,-27.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_287.setTransform(206.9,-30.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFADAHAAQAIgBAFgFQAFgFADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_288.setTransform(166.7,-25);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_289.setTransform(147.1,-27.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCACgEQABgDABgEIAAgJIAAiDIAQAAIAACGIAAAIQgBAGgCAGQgDAGgHAFQgGAEgMAAQgGAAgGgCgAAEhbQgDgEAAgFQAAgFADgDQAEgDAFAAQADAAAEADQAEADAAAFQAAAFgEAEQgEADgDAAQgFAAgEgDg");
	this.shape_290.setTransform(135.9,-27.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_291.setTransform(127.7,-27.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#111111").s().p("AgLBbIgLgEIgLgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIALgHQAFgDAGgBIALgBQAOAAAKAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_292.setTransform(114.9,-31.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_293.setTransform(100.6,-27.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_294.setTransform(91.8,-28);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#111111").s().p("AAFBIQgFgBgDgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAHABIAIgBIAHgEIACAQQgJADgNAAIgKgBg");
	this.shape_295.setTransform(82.8,-29.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_296.setTransform(65.5,-27.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_297.setTransform(51.1,-31.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgOgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_298.setTransform(32.5,-27.8);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_299.setTransform(20.6,-27.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADADAAIAHABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_300.setTransform(10,-29.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_301.setTransform(-0.9,-28);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_302.setTransform(-14,-27.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_303.setTransform(-38.2,-30.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_304.setTransform(-59.5,-28);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_305.setTransform(-68.9,-30.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_306.setTransform(-81.3,-28);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_307.setTransform(-92.9,-27.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAHABIAJgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_308.setTransform(-102.7,-29.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_309.setTransform(-109.7,-28);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_310.setTransform(-121.8,-27.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIALgHQAFgDAGgBIALgBQANAAALAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgDAJAAAJQAAAJADAIQADAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGADgJQADgIAAgJQAAgJgDgJQgDgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_311.setTransform(-135.9,-24.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_312.setTransform(-150.3,-27.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_313.setTransform(-159.9,-28);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_314.setTransform(-183.2,-27.8);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_315.setTransform(-195.5,-27.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_316.setTransform(-217.1,-30.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#111111").s().p("AgTBSQgLgEgIgJQgHgIgFgKQgEgLAAgMQAAgNAEgLQAEgKAIgIQAIgIAKgEQAKgEALgBQANABAKAEQAKAEAHAIQAHAIADAJQAEAKAAALIAAAHIhdAAQABAJAEAIQADAHAGAFQAFAGAHADQAHADAIAAQANAAAJgGQAJgFAFgJIAMAKQgKAOgMAFQgMAFgOAAQgMAAgKgEgAgNgNQgHADgFAFQgGAFgDAFQgDAHAAAHIBLAAQAAgRgKgIQgJgKgSAAQgGAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_317.setTransform(-241.3,-30.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHQgBAIAAAHIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_318.setTransform(-258.4,-28);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgOgEIgJgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgFgFQgHgEgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQABAIgEAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_319.setTransform(234.6,-57.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_320.setTransform(222.8,-57.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgDIABAPQgKADgMAAIgKAAg");
	this.shape_321.setTransform(212.2,-59.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_322.setTransform(201.3,-57.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_323.setTransform(188.1,-57.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGAEgDAGQgEAFgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGACQgFAAgGAFQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgGQALgHALABQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_324.setTransform(171,-57.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#111111").s().p("AgXBVQgGgCgGgFQgFgEgDgGQgEgGAAgJQAAgNAHgIQAHgIALgDQALgFALgBIAWgBIAIAAIAAgCQAAgcgdgBQgSAAgPAOIgKgLQAQgRAfABQAIAAAIABQAHADAGAFQAFAFADAHQAEAIAAAJIAAAzIAAANIACAMIgQAAIgBgJIAAgJQgHAKgKAFQgJAGgNgBQgIAAgHgBgAAHAcIgQADQgJADgGAEQgGAFAAAIQAAAGADAEQACAEAEADQAEACAEABIAKABQAIAAAGgDQAGgDAFgFQAEgEACgHQACgHAAgHIAAgJIgIAAIgPABgAgKgzIAXgiIAVAAIgfAig");
	this.shape_325.setTransform(154.5,-60.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#111111").s().p("AAkA4IgkgxIglAxIgUAAIAvg7Igpg0IAVAAIAeAqIAegqIAUAAIgnA0IAvA7g");
	this.shape_326.setTransform(142.8,-57.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_327.setTransform(130.3,-57.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_328.setTransform(110.3,-57.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgOgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgEgHgGgFQgHgEgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAJAHQAIAJAAAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_329.setTransform(98.6,-57.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgEAGgCQAGgBAHAAIAMAAIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_330.setTransform(90.5,-57.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_331.setTransform(79,-57.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#111111").s().p("AgtA4IAAgLIBChWIg+AAIAAgOIBUAAIAAALIhBBWIBEAAIAAAOg");
	this.shape_332.setTransform(68,-57.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_333.setTransform(60,-60.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_334.setTransform(44.8,-57.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_335.setTransform(32.2,-57.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAFgBAIAAIAMAAIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_336.setTransform(22.6,-57.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_337.setTransform(4.1,-57.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_338.setTransform(-9.1,-57.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#111111").s().p("AgLBbIgLgEIgMgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIAMgHQAGgDAFgBIALgBQANAAALAFQAMAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgMAFQgLAEgNAAIgLgBgAgRgHQgIADgGAFQgGAGgDAJQgEAIAAAJQAAAJAEAJQADAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_339.setTransform(-22.7,-61);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_340.setTransform(-37.1,-57.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_341.setTransform(-51.4,-61);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgOAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAHQAHAJAAAMQAAAIgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_342.setTransform(-70.1,-57.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_343.setTransform(-81.9,-57.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_344.setTransform(-109.8,-57.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgBAIAAIAMAAIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_345.setTransform(-118.6,-57.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_346.setTransform(-130.8,-57.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_347.setTransform(-159.1,-57.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_348.setTransform(-167.9,-61.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_349.setTransform(-177.9,-57.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_350.setTransform(-190.4,-57.7);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgOAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAHQAHAJAAAMQAAAIgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_351.setTransform(-208.2,-57.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_352.setTransform(-220.5,-57.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#111111").s().p("AgvBVIAAipIARAAIAACZIBOAAIAAAQg");
	this.shape_353.setTransform(-232.5,-60.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#111111").s().p("AgHAIQgDgDAAgFQAAgEADgEQADgDAEAAQAGAAADADQACAEAAAEQAAAFgCADQgDAEgGAAQgEAAgDgEg");
	this.shape_354.setTransform(174.5,26.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_355.setTransform(165.1,22.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#111111").s().p("AAFBEQgFgBgCgDQgDgEgDgFQgDgFABgJIAAhCIgWAAIAAgNIAWAAIAAgeIANAAIAAAeIAdAAIAAANIgdAAIAAA+IABAJQABAEACACQABACADABIAHAAIAHgBIAHgDIABAOQgJAEgKAAIgJgBg");
	this.shape_356.setTransform(155.3,21.3);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#111111").s().p("Ag0BXIAAiqIAOAAIAAASIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAKQAEAKAAAMQAAAMgEAKQgEAJgHAIQgHAHgJAEQgKAFgMAAIgJgCQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAABTgAgPhFQgHAEgGAFQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAEAHAEQAHADAIAAQAJAAAHgDQAHgEAFgEQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_357.setTransform(145.6,25.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_358.setTransform(132.7,22.6);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#111111").s().p("AgNA0QgKgFgGgHQgIgIgDgKQgEgKAAgMQAAgLAEgKQADgLAIgHQAGgHAKgFQAKgEALAAQAKABAKAEQAJAEAIAKIgMAJQgDgGgHgEQgGgEgJAAQgIAAgHADQgGADgFAGQgFAFgDAIQgDAIABAIQgBAJADAIQADAIAFAFQAFAGAGADQAHADAIAAQAJAAAGgEQAHgEADgGIAMAJQgIAJgJAFQgKAEgKABQgLAAgKgEg");
	this.shape_359.setTransform(122,22.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_360.setTransform(110.4,22.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_361.setTransform(98.3,22.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#111111").s().p("AgNA0QgJgFgIgHQgGgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAGgHQAIgHAJgFQAKgEALAAQALABAJAEQAKAEAHAKIgMAJQgEgGgGgEQgHgEgIAAQgIAAgGADQgIADgEAGQgFAFgDAIQgCAIAAAIQAAAJACAIQADAIAFAFQAEAGAIADQAGADAIAAQAIAAAHgEQAGgEAEgGIAMAJQgHAJgKAFQgJAEgLABQgLAAgKgEg");
	this.shape_362.setTransform(87.2,22.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_363.setTransform(69.8,22.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#111111").s().p("AAFBEQgFgBgCgDQgEgEgCgFQgCgFgBgJIAAhCIgUAAIAAgNIAUAAIAAgeIAOAAIAAAeIAdAAIAAANIgdAAIAAA+IABAJQABAEACACQACACADABIAFAAIAHgBIAIgDIAAAOQgHAEgMAAIgIgBg");
	this.shape_364.setTransform(60.3,21.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_365.setTransform(52.2,22.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_366.setTransform(41.7,22.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_367.setTransform(23.5,22.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIgBgSIAPAAIAAATIAAAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAEABIgCAPIgJgBQgHAAgGADQgFADgEAFQgEAGgBAFQgCAGAAAGIAAA6g");
	this.shape_368.setTransform(14.6,22.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_369.setTransform(4.3,22.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_370.setTransform(-3.6,19.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#111111").s().p("AgNA0QgJgFgIgHQgGgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAGgHQAIgHAJgFQAKgEALAAQALABAJAEQAJAEAIAKIgMAJQgEgGgGgEQgHgEgIAAQgIAAgGADQgHADgGAGQgEAFgDAIQgCAIgBAIQABAJACAIQADAIAEAFQAGAGAHADQAGADAIAAQAIAAAHgEQAGgEAEgGIAMAJQgIAJgJAFQgJAEgLABQgLAAgKgEg");
	this.shape_371.setTransform(-10.9,22.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_372.setTransform(-26.8,22.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_373.setTransform(-37.2,22.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#111111").s().p("AgbBMQgMgFgKgLIALgLQAGAIAKAGQAKAFAMAAQAKAAAHgDQAIgEAEgFQAFgGACgIQACgHAAgJIAAgTQgHALgKAFQgKAEgLAAQgKAAgJgEQgKgEgHgHQgHgHgEgJQgEgKAAgLQAAgMAEgKQAEgKAGgHQAHgIAJgEQAKgEALAAIAIABIAKADQAFACAFAEQAFAEAFAGIAAgRIAOAAIAABnQAAAJgCAKQgCAJgGAJQgGAIgKAFQgLAFgQAAQgPAAgLgFgAgNg/QgHADgFAGQgFAFgDAHQgDAIAAAIQAAAIADAIQADAHAFAFQAFAFAHADQAHAEAGAAQAIAAAHgDQAHgDAGgFQAFgFADgHQADgIgBgJQAAgIgCgIQgDgHgFgFQgFgGgHgDQgHgDgJAAQgGAAgHADg");
	this.shape_374.setTransform(-49.3,25.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_375.setTransform(-61.7,22.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_376.setTransform(-73.4,22.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#111111").s().p("AAFBEQgFgBgCgDQgDgEgDgFQgCgFAAgJIAAhCIgWAAIAAgNIAWAAIAAgeIANAAIAAAeIAcAAIAAANIgcAAIAAA+IABAJQABAEACACQABACADABIAHAAIAHgBIAHgDIABAOQgJAEgLAAIgIgBg");
	this.shape_377.setTransform(-82.8,21.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_378.setTransform(-98.3,22.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#111111").s().p("AghArQgJgKAAgUIAAhCIAOAAIAAA5QAAAJABAHQABAGADAFQAEAFAFACQAFACAIAAIAFAAQAFgBAFgEQAGgEAEgJQAEgIAAgOIAAg1IAOAAIAABRIABALIAAAMIgOAAIgBgIIAAgJIAAAAIgGAIIgIAGQgFADgFACIgJABQgTAAgJgLg");
	this.shape_379.setTransform(-110.2,22.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#111111").s().p("AAnBXIAAhTIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFQgKgEgHgHQgHgIgEgJQgEgKAAgMQAAgMAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAgSIAOAAIAACqgAgPhFQgHAEgFAFQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAEAHAEQAHADAIAAQAJAAAHgDQAHgEAGgEQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_380.setTransform(-123,25.7);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_381.setTransform(-140.9,22.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIgBgSIAPAAIAAATIAAAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAEABIgDAPIgIgBQgHAAgGADQgFADgEAFQgEAGgBAFQgCAGAAAGIAAA6g");
	this.shape_382.setTransform(-148.8,22.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_383.setTransform(-159.1,22.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#111111").s().p("Ag0BXIAAiqIAOAAIAAASIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAKQAEAKAAAMQAAAMgEAKQgEAJgHAIQgHAHgJAEQgKAFgMAAIgJgCQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAABTgAgPhFQgHAEgGAFQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAEAHAEQAHADAIAAQAJAAAHgDQAHgEAFgEQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_384.setTransform(-170.5,25.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_385.setTransform(261.3,-8.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_386.setTransform(252.9,-5.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#111111").s().p("AgGBOIAAhoIANAAIAABogAgGg7QgDgDAAgFQAAgEADgEQADgDADAAQAEAAADADQADAEAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_387.setTransform(245.1,-7.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIAAgSIANAAIAAATIABAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAEABIgCAPIgJgBQgIAAgGADQgEADgEAFQgEAGgBAFQgCAGAAAGIAAA6g");
	this.shape_388.setTransform(239.9,-5.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_389.setTransform(229.5,-5.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgDgEgDgFQgCgFAAgJIAAhCIgWAAIAAgNIAWAAIAAgeIANAAIAAAeIAcAAIAAANIgcAAIAAA+IABAJQABAEACACQABACADABIAHAAIAHgBIAHgDIABAOQgJAEgLAAIgIgBg");
	this.shape_390.setTransform(220,-6.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_391.setTransform(210.7,-5.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#111111").s().p("AA9A2IAAg8QAAgQgFgJQgGgIgPAAQgHAAgFADQgGADgDAGQgDAFgCAHQgBAHgBAHIAAA3IgMAAIAAg8QAAgQgGgJQgGgIgOAAIgGAAQgEABgFAEQgFAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgMIAAgLIAPAAIAAAQIABAAQAFgKAIgEQAKgFAIAAIAJABQAFABAEACQAEACAEAFQADAEADAHQADgKAKgGQAKgGAKAAQATAAAJALQAJAKAAAUIAABCg");
	this.shape_392.setTransform(196.1,-5.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_393.setTransform(178.7,-8.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_394.setTransform(170.2,-5.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_395.setTransform(152,-5.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#111111").s().p("AgHA1IgphpIARAAIAgBYIAfhYIAQAAIgoBpg");
	this.shape_396.setTransform(140.5,-5.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_397.setTransform(129.4,-5.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#111111").s().p("AghArQgJgKAAgUIAAhCIAOAAIAAA5QAAAJABAHQABAGADAFQAEAFAFACQAFACAIAAIAFAAQAFgBAFgEQAGgEAEgJQAEgIAAgOIAAg1IAOAAIAABRIABALIAAAMIgOAAIgBgIIAAgJIAAAAIgGAIIgIAGQgFADgFACIgJABQgTAAgJgLg");
	this.shape_398.setTransform(117.4,-5.2);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEQAEgBAFAAQATAAAJALQAJAKAAAUIAABCg");
	this.shape_399.setTransform(105.4,-5.5);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_400.setTransform(87.8,-5.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_401.setTransform(75,-8.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_402.setTransform(57.1,-5.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_403.setTransform(47.3,-5.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#111111").s().p("AgGBOIAAhoIANAAIAABogAgGg7QgDgDAAgFQAAgEADgEQADgDADAAQAEAAADADQADAEAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_404.setTransform(40.2,-7.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#111111").s().p("AgHA1IgohpIARAAIAeBYIAhhYIAPAAIgoBpg");
	this.shape_405.setTransform(32.5,-5.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_406.setTransform(21.3,-5.3);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#111111").s().p("AAgBQIgphKIgZAAIAABKIgQAAIAAifIAvAAQAWAAANALQAOAKAAAWQAAAQgKAMQgKAKgTACIAsBMgAgigIIAbAAQAJAAAHgDQAIgCAEgEQAEgDACgFQACgGAAgFQAAgGgCgFQgCgFgEgEQgEgEgIgCQgHgCgJAAIgbAAg");
	this.shape_407.setTransform(9.9,-8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#111111").s().p("AgHAIQgDgDAAgFQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_408.setTransform(-6.1,-1.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#111111").s().p("AgHBQIAAiQIgyAAIAAgPIBzAAIAAAPIgyAAIAACQg");
	this.shape_409.setTransform(-15.3,-8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#111111").s().p("AgaBPQgNgGgJgMIAOgLQAFAIAJAGQAJAFALAAIALgBQAGgDAFgDQAEgEADgFQADgGAAgHQAAgJgDgFQgDgFgGgEQgFgEgHgCIgOgFIgOgGQgHgCgFgFQgGgFgDgHQgDgHAAgLQAAgMAEgIQAEgJAHgGQAHgFAJgDQAIgDAJAAQAMAAALAEQAKAFAJALIgNAKQgKgPgTAAQgFAAgGACQgGABgFAEQgEADgDAGQgDAGAAAHQAAALAGAGQAGAFAIAFQAIADAKADQAKAEAJADQAIAGAGAIQAGAJAAAOQAAALgFAIQgEAJgHAGQgHAGgJADQgJADgIAAQgOAAgMgFg");
	this.shape_410.setTransform(-27.4,-8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#111111").s().p("AgaBPQgNgGgJgMIAOgLQAFAIAJAGQAJAFALAAIALgBQAGgDAFgDQAEgEADgFQADgGAAgHQAAgJgDgFQgDgFgGgEQgFgEgHgCIgOgFIgOgGQgHgCgFgFQgGgFgDgHQgDgHAAgLQAAgMAEgIQAEgJAHgGQAHgFAJgDQAIgDAJAAQAMAAALAEQAKAFAJALIgNAKQgKgPgTAAQgFAAgGACQgGABgFAEQgEADgDAGQgDAGAAAHQAAALAGAGQAGAFAIAFQAIADAKADQAKAEAJADQAIAGAGAIQAGAJAAAOQAAALgFAIQgEAJgHAGQgHAGgJADQgJADgIAAQgOAAgMgFg");
	this.shape_411.setTransform(-39.3,-8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#111111").s().p("AgbAIIAAgPIA2AAIAAAPg");
	this.shape_412.setTransform(-48.7,-5.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#111111").s().p("AgTBOQgPgGgKgLQgLgMgGgPQgGgPAAgTQAAgRAGgQQAGgPALgLQAKgLAPgHQAOgGAQAAQASAAANAFQANAGALAKIgMAMQgIgIgKgFQgLgFgOAAQgOAAgLAFQgMAHgIAJQgIAKgEAMQgEANAAAMQAAAOAEAMQAEANAIAJQAIAKAMAFQALAGAOAAQAMAAALgDQAKgDAJgFIAAg1IgkAAIAAgOIAzAAIAABNQgNAIgPAEQgPAEgOAAQgQAAgOgGg");
	this.shape_413.setTransform(-61,-8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#111111").s().p("AgaBPQgNgGgJgMIAOgLQAFAIAJAGQAJAFALAAIALgBQAGgDAFgDQAEgEADgFQADgGAAgHQAAgJgDgFQgDgFgGgEQgFgEgHgCIgOgFIgOgGQgHgCgFgFQgGgFgDgHQgDgHAAgLQAAgMAEgIQAEgJAHgGQAHgFAJgDQAIgDAJAAQAMAAALAEQAKAFAJALIgNAKQgKgPgTAAQgFAAgGACQgGABgFAEQgEADgDAGQgDAGAAAHQAAALAGAGQAGAFAIAFQAIADAKADQAKAEAJADQAIAGAGAIQAGAJAAAOQAAALgFAIQgEAJgHAGQgHAGgJADQgJADgIAAQgOAAgMgFg");
	this.shape_414.setTransform(-74.8,-8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_415.setTransform(-89.2,-8.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_416.setTransform(-97.8,-5.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_417.setTransform(-110.6,-8.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_418.setTransform(-127.2,-5.3);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_419.setTransform(-138.1,-5.3);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#111111").s().p("AAFBEQgFgBgCgDQgDgEgDgFQgDgFAAgJIAAhCIgVAAIAAgNIAVAAIAAgeIAOAAIAAAeIAcAAIAAANIgcAAIAAA+IABAJQABAEACACQACACADABIAGAAIAGgBIAIgDIAAAOQgHAEgMAAIgIgBg");
	this.shape_420.setTransform(-147.9,-6.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#111111").s().p("AgGBOIAAhoIANAAIAABogAgGg7QgDgDAAgFQAAgEADgEQADgDADAAQAEAAADADQADAEAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_421.setTransform(-154.1,-7.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_422.setTransform(-161.1,-5.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#111111").s().p("AgUBNQgKgEgHgIQgHgHgEgKQgEgLAAgLQAAgMAEgLQAEgJAHgHQAHgIAKgDQAJgFALAAQAMAAAJAFQAKADAHAIQAHAHAEAJQAEALAAAMQAAALgEALQgEAKgHAHQgHAIgKAEQgJAEgMABQgLgBgJgEgAgPgMQgHADgFAGQgEAFgDAHQgDAIAAAJQAAAIADAIQADAIAEAGQAFAFAHAEQAHACAIAAQAJAAAHgCQAHgEAFgFQAFgGACgIQADgIAAgIQAAgJgDgIQgCgHgFgFQgFgGgHgDQgHgDgJAAQgIAAgHADgAgMgwIAVggIATAAIgcAgg");
	this.shape_423.setTransform(-172.1,-7.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#111111").s().p("Ag0BXIAAiqIAOAAIAAASIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAKQAEAKAAAMQAAAMgEAKQgEAJgHAIQgHAHgJAEQgKAFgMAAIgJgCQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAABTgAgPhFQgHAEgGAFQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAEAHAEQAHADAIAAQAJAAAHgDQAHgEAFgEQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_424.setTransform(-184.6,-2.2);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_425.setTransform(-197.8,-5.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#111111").s().p("AgaA2IAAhHIgBgPIAAgSIANAAIAAATIABAAIAEgIIAHgHIAIgFQAFgCAHAAQAGAAAFABIgDAPIgIgBQgIAAgHADQgEADgEAFQgEAGgCAFQgCAGAAAGIAAA6g");
	this.shape_426.setTransform(-206.8,-5.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#111111").s().p("Ag0BXIAAiqIAOAAIAAASIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAKQAEAKAAAMQAAAMgEAKQgEAJgHAIQgHAHgJAEQgKAFgMAAIgJgCQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAABTgAgPhFQgHAEgGAFQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAEAHAEQAHADAIAAQAJAAAHgDQAHgEAFgEQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_427.setTransform(-217.4,-2.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEQAEgBAFAAQATAAAJALQAJAKAAAUIAABCg");
	this.shape_428.setTransform(-236.3,-5.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_429.setTransform(-248.5,-5.3);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_430.setTransform(-259.3,-5.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#111111").s().p("AgPAaIAOg0IARAAIgRA0g");
	this.shape_431.setTransform(256.3,-27.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_432.setTransform(248.8,-33.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_433.setTransform(238.3,-33.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIgBgSIAPAAIAAATIAAAAIAEgIIAHgHIAIgFQAFgCAHAAQAGAAAEABIgDAPIgIgBQgHAAgGADQgFADgEAFQgEAGgCAFQgBAGAAAGIAAA6g");
	this.shape_434.setTransform(229.8,-33.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_435.setTransform(218.9,-33.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_436.setTransform(205.7,-36.4);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_437.setTransform(193.7,-33.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIgBgSIAPAAIAAATIAAAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAFABIgEAPIgIgBQgIAAgFADQgFADgEAFQgEAGgCAFQgCAGABAGIAAA6g");
	this.shape_438.setTransform(185.9,-33.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_439.setTransform(175,-33.3);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#111111").s().p("AgJBVQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAAASIgOAAIAAiqIAOAAIAABTIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAJQAEAKAAAMQAAAMgEAKQgEAKgHAIQgHAHgJAEQgKAFgMAAIgJgCgAgPgHQgHAEgGAEQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_440.setTransform(162.5,-36.4);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_441.setTransform(149.8,-33.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_442.setTransform(142,-36.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_443.setTransform(133.1,-33.3);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#111111").s().p("AgNA0QgJgFgIgHQgGgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAGgHQAIgHAJgFQAKgEALAAQAKABAKAEQAJAEAIAKIgMAJQgEgGgGgEQgGgEgJAAQgIAAgGADQgHADgGAGQgFAFgCAIQgCAIgBAIQABAJACAIQACAIAFAFQAGAGAHADQAGADAIAAQAJAAAGgEQAGgEAEgGIAMAJQgIAJgJAFQgKAEgKABQgLAAgKgEg");
	this.shape_444.setTransform(122,-33.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_445.setTransform(106,-33.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_446.setTransform(95.1,-33.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_447.setTransform(86.2,-36.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_448.setTransform(71.8,-33.3);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_449.setTransform(59,-36.4);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_450.setTransform(41,-33.3);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_451.setTransform(28.9,-36.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#111111").s().p("AgGBOIAAhoIANAAIAABogAgGg7QgDgDAAgFQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_452.setTransform(20.2,-35.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#111111").s().p("AgHA1IgphpIARAAIAgBYIAfhYIAQAAIgoBpg");
	this.shape_453.setTransform(12.5,-33.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_454.setTransform(-4.6,-33.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_455.setTransform(-17.4,-36.4);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_456.setTransform(-36.3,-36.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_457.setTransform(-48.3,-33.3);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_458.setTransform(-60.5,-36.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#111111").s().p("AgGBOIAAhoIANAAIAABogAgGg7QgDgDAAgFQAAgFADgDQADgCADAAQAEAAADACQADADAAAFQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_459.setTransform(-69.2,-35.9);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_460.setTransform(-74.3,-36.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_461.setTransform(-82.7,-33.3);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#111111").s().p("AgNA0QgKgFgGgHQgIgIgDgKQgEgKAAgMQAAgLAEgKQADgLAIgHQAGgHAKgFQAKgEALAAQAKABAKAEQAJAEAIAKIgMAJQgEgGgGgEQgGgEgJAAQgIAAgHADQgGADgFAGQgFAFgDAIQgCAIAAAIQAAAJACAIQADAIAFAFQAFAGAGADQAHADAIAAQAJAAAGgEQAGgEAEgGIAMAJQgIAJgJAFQgKAEgKABQgLAAgKgEg");
	this.shape_462.setTransform(-92.7,-33.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_463.setTransform(-110,-33.3);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_464.setTransform(-117.8,-36.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#111111").s().p("AgaA2IAAhHIgBgPIAAgSIANAAIAAATIABAAIAEgIIAHgHIAIgFQAFgCAHAAQAGAAAFABIgDAPIgIgBQgIAAgHADQgEADgEAFQgEAGgCAFQgCAGAAAGIAAA6g");
	this.shape_465.setTransform(-128.9,-33.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_466.setTransform(-139.2,-33.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIAAgSIANAAIAAATIABAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAEABIgCAPIgJgBQgIAAgGADQgEADgEAFQgEAGgBAFQgCAGAAAGIAAA6g");
	this.shape_467.setTransform(-147.1,-33.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_468.setTransform(-157.9,-33.3);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#111111").s().p("AgUBnIACgMIAAAAIAEABIAEAAQAFAAADgCQACgCABgDIACgIIABgHIAAh7IAOAAIAAB+IAAAIQgBAFgCAGQgCAFgGAFQgGADgKAAQgGAAgFgCgAAEhWQgDgDAAgFQAAgFADgDQADgCAEAAQAEAAADACQADADAAAFQAAAFgDADQgDADgEAAQgEAAgDgDg");
	this.shape_469.setTransform(-167.9,-33.2);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_470.setTransform(-175.3,-33.3);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#111111").s().p("AA9A2IAAg8QAAgQgGgJQgFgIgPAAQgHAAgFADQgGADgDAGQgDAFgCAHQgBAHgBAHIAAA3IgMAAIAAg8QAAgQgGgJQgGgIgOAAIgGAAQgEABgFAEQgFAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgMIAAgLIAPAAIAAAQIABAAQAFgKAIgEQAKgFAIAAIAJABQAFABAEACQAEACAEAFQADAEADAHQADgKAKgGQAJgGAKAAQATAAAKALQAJAKAAAUIAABCg");
	this.shape_471.setTransform(-190.5,-33.5);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_472.setTransform(-211.8,-33.3);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#111111").s().p("AA9A2IAAg8QAAgQgFgJQgGgIgPAAQgHAAgFADQgGADgDAGQgDAFgCAHQgBAHgBAHIAAA3IgMAAIAAg8QAAgQgGgJQgGgIgOAAIgGAAQgEABgFAEQgFAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgMIAAgLIAPAAIAAAQIABAAQAFgKAIgEQAKgFAIAAIAJABQAFABAEACQAEACAEAFQADAEADAHQADgKAKgGQAKgGAKAAQATAAAJALQAJAKAAAUIAABCg");
	this.shape_473.setTransform(-227.3,-33.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_474.setTransform(-242.7,-33.3);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#111111").s().p("AgNA0QgJgFgIgHQgGgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAGgHQAIgHAJgFQAKgEALAAQAKABAKAEQAJAEAIAKIgMAJQgEgGgGgEQgGgEgJAAQgIAAgGADQgHADgGAGQgFAFgCAIQgCAIgBAIQABAJACAIQACAIAFAFQAGAGAHADQAGADAIAAQAJAAAGgEQAGgEAEgGIAMAJQgIAJgJAFQgKAEgKABQgLAAgKgEg");
	this.shape_475.setTransform(-253.8,-33.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#111111").s().p("AgOBQIAAhpIAOAAIAABpgAgTgvIAUggIATAAIgbAgg");
	this.shape_476.setTransform(248.9,-64.1);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_477.setTransform(241.1,-61.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_478.setTransform(230.7,-61.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#111111").s().p("AgPAbIAOg0IARAAIgRA0g");
	this.shape_479.setTransform(216.6,-55.6);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_480.setTransform(207.6,-61.4);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_481.setTransform(199.1,-64.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#111111").s().p("AgJBVQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAAASIgOAAIAAiqIAOAAIAABTIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAJQAEAKAAAMQAAAMgEAKQgEAKgHAIQgHAHgJAEQgKAFgMAAIgJgCgAgPgHQgHAEgGAEQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_482.setTransform(190.4,-64.5);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_483.setTransform(177.7,-61.4);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#111111").s().p("AgUBSQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAHgIQAHgHAKgEQAJgFALAAIAKACIALADIAKAGQAFAEADAGIAAAAIAAhTIAOAAIAACqIgOAAIAAgSIAAAAQgDAGgFADQgFAEgFADIgLADIgKACQgLAAgJgFgAgPgHQgHAEgFAEQgFAGgCAHQgDAIAAAJQAAAJADAIQACAHAFAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAGgFQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_484.setTransform(165.6,-64.5);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#111111").s().p("AghArQgJgKAAgUIAAhCIAOAAIAAA5QAAAJABAHQABAGADAFQAEAFAFACQAFACAIAAIAFAAQAFgBAFgEQAGgEAEgJQAEgIAAgOIAAg1IAOAAIAABRIABALIAAAMIgOAAIgBgIIAAgJIAAAAIgGAIIgIAGQgFADgFACIgJABQgTAAgJgLg");
	this.shape_485.setTransform(153.4,-61.2);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_486.setTransform(145,-64.6);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_487.setTransform(136.6,-61.4);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_488.setTransform(126.8,-61.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#111111").s().p("AgnBQIgGgCIABgOQAFACAGAAQAIAAAEgFQAEgFADgJIAIgUIgphqIARAAIAfBXIAehXIARAAIgxCEQgEANgHAHQgHAHgNAAIgHAAg");
	this.shape_489.setTransform(111.2,-58.7);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_490.setTransform(93.7,-61.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIAAgSIAOAAIAAATIAAAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAEABIgDAPIgIgBQgHAAgGADQgFADgEAFQgEAGgBAFQgCAGAAAGIAAA6g");
	this.shape_491.setTransform(84.8,-61.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#111111").s().p("AghArQgJgKAAgUIAAhCIAOAAIAAA5QAAAJABAHQABAGADAFQAEAFAFACQAFACAIAAIAFAAQAFgBAFgEQAGgEAEgJQAEgIAAgOIAAg1IAOAAIAABRIABALIAAAMIgOAAIgBgIIAAgJIAAAAIgGAIIgIAGQgFADgFACIgJABQgTAAgJgLg");
	this.shape_492.setTransform(74.3,-61.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#111111").s().p("AgbBMQgMgFgKgLIALgLQAGAIAKAGQAKAFAMAAQAKAAAHgDQAIgEAEgFQAFgGACgIQACgHAAgJIAAgTQgHALgKAFQgKAEgLAAQgKAAgJgEQgKgEgHgHQgHgHgEgJQgEgKAAgLQAAgMAEgKQAEgKAGgHQAHgIAJgEQAKgEALAAIAIABIAKADQAFACAFAEQAFAEAFAGIAAgRIAOAAIAABnQAAAJgCAKQgCAJgGAJQgGAIgKAFQgLAFgQAAQgPAAgLgFgAgNg/QgHADgFAGQgFAFgDAHQgDAIAAAIQAAAIADAIQADAHAFAFQAFAFAHADQAHAEAGAAQAIAAAHgDQAHgDAGgFQAFgFADgHQADgIgBgJQAAgIgCgIQgDgHgFgFQgFgGgHgDQgHgDgJAAQgGAAgHADg");
	this.shape_493.setTransform(61.6,-58.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_494.setTransform(49.4,-61.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#111111").s().p("AgVAzQgKgFgHgLIAMgJQAFAHAGAFQAHAEAIAAIAIgBIAIgDQADgCACgEQACgDAAgFQAAgHgFgEQgGgEgIgCIgMgDIgHgCQgFgCgEgCQgEgDgDgFQgDgFAAgIQAAgIADgGQADgGAFgEQAGgEAGgCQAHgCAGAAQAKAAAJAFQAJAEAFAKIgMAJQgEgGgFgEQgFgEgIAAIgGABIgHADQgDACgCADQgCACAAAFQAAAHAFAEQAFADAJADIAOADQALADAHAGQAHAIAAALQAAAJgEAGQgDAGgFAEQgGAEgHACQgHACgHAAQgLAAgKgFg");
	this.shape_495.setTransform(39,-61.4);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_496.setTransform(25.9,-64.6);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_497.setTransform(17.5,-61.4);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#111111").s().p("AgaA2IAAhHIgBgPIAAgSIANAAIAAATIABAAIAEgIIAHgHIAIgFQAFgCAHAAQAGAAAFABIgDAPIgIgBQgIAAgHADQgEADgEAFQgEAGgCAFQgCAGAAAGIAAA6g");
	this.shape_498.setTransform(9.7,-61.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_499.setTransform(-1.2,-61.4);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#111111").s().p("AgJBVQgGgBgFgCQgFgDgFgEQgEgDgEgGIAAAAIAAASIgOAAIAAiqIAOAAIAABTIAAAAQAEgGAEgEIAKgGQAFgCAGgBIAJgCQAMAAAKAFQAJAEAHAHQAHAIAEAJQAEAKAAAMQAAAMgEAKQgEAKgHAIQgHAHgJAEQgKAFgMAAIgJgCgAgPgHQgHAEgGAEQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgJgDgIQgCgHgFgGQgFgEgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_500.setTransform(-13.7,-64.5);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_501.setTransform(-26.4,-61.4);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#111111").s().p("AgGBVIAAipIANAAIAACpg");
	this.shape_502.setTransform(-34.2,-64.6);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_503.setTransform(-49.1,-61.4);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_504.setTransform(-61.5,-61.5);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#111111").s().p("AgaA2IAAhHIgBgPIAAgSIANAAIAAATIABAAIAEgIIAHgHIAIgFQAFgCAHAAQAGAAAEABIgCAPIgIgBQgIAAgHADQgEADgEAFQgEAGgBAFQgDAGAAAGIAAA6g");
	this.shape_505.setTransform(-69.9,-61.5);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#111111").s().p("AgUAzQgKgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAHgHAKgEQAJgFALAAQAMAAAJAFQAKAEAHAHQAHAIAEAKQAEAKAAALQAAAMgEAKQgEAKgHAIQgHAHgKAEQgJAFgMAAQgLAAgJgFgAgPgmQgHAEgFAFQgEAGgDAHQgDAIAAAIQAAAJADAIQADAHAEAGQAFAFAHAEQAHADAIAAQAJAAAHgDQAHgEAFgFQAFgGACgHQADgIAAgJQAAgIgDgIQgCgHgFgGQgFgFgHgEQgHgDgJAAQgIAAgHADg");
	this.shape_506.setTransform(-80.7,-61.4);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgEgEgCgFQgCgFgBgJIAAhCIgUAAIAAgNIAUAAIAAgeIAOAAIAAAeIAdAAIAAANIgdAAIAAA+IABAJQABAEACACQABACAEABIAFAAIAHgBIAIgDIAAAOQgIAEgKAAIgJgBg");
	this.shape_507.setTransform(-90.5,-62.7);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_508.setTransform(-100.2,-61.5);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#111111").s().p("AgRAzQgJgEgHgHQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAGgIQAHgHAKgEQAJgFAJAAQAMAAAJAFQAJAEAGAHQAGAHADAKQADAJAAALIAAAGIhSAAQABAIADAHQACAHAFAFQAFAFAHADQAGADAHAAQALAAAIgGQAJgFAEgHIALAJQgJAMgLAFQgLAGgMAAQgKAAgKgFgAgLgmQgGADgFAEQgFAFgDAGQgDAGAAAHIBDAAQAAgPgJgKQgIgJgQAAQgFAAgHADg");
	this.shape_509.setTransform(-112,-61.4);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_510.setTransform(-129.9,-61.5);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#111111").s().p("AghArQgJgKAAgUIAAhCIAOAAIAAA5QAAAJABAHQABAGADAFQAEAFAFACQAFACAIAAIAFAAQAFgBAFgEQAGgEAEgJQAEgIAAgOIAAg1IAOAAIAABRIABALIAAAMIgOAAIgBgIIAAgJIAAAAIgGAIIgIAGQgFADgFACIgJABQgTAAgJgLg");
	this.shape_511.setTransform(-141.7,-61.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#111111").s().p("AgbA2IAAhHIAAgPIgBgSIAPAAIAAATIAAAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAFABIgEAPIgIgBQgIAAgFADQgFADgEAFQgEAGgCAFQgCAGAAAGIAAA6g");
	this.shape_512.setTransform(-156.1,-61.5);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_513.setTransform(-166.4,-61.4);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#111111").s().p("AgnA1IAAgLIA5hQIg3AAIAAgOIBLAAIAAALIg5BQIA8AAIAAAOg");
	this.shape_514.setTransform(-176.2,-61.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#111111").s().p("AgGBPIAAhpIANAAIAABpgAgGg7QgDgDAAgFQAAgEADgDQADgEADAAQAEAAADAEQADADAAAEQAAAFgDADQgDADgEAAQgDAAgDgDg");
	this.shape_515.setTransform(-183.3,-63.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#111111").s().p("AAFBEQgFgBgCgDQgEgEgCgFQgCgFgBgJIAAhCIgUAAIAAgNIAUAAIAAgeIAOAAIAAAeIAcAAIAAANIgcAAIAAA+IABAJQABAEACACQACACADABIAFAAIAHgBIAIgDIAAAOQgHAEgMAAIgIgBg");
	this.shape_516.setTransform(-189.4,-62.7);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#111111").s().p("AAdA2IAAg5QAAgSgFgJQgGgJgQAAIgFAAQgFABgFAEQgGAEgEAJQgEAIAAANIAAA2IgOAAIAAhRIgBgLIAAgMIAOAAIABAIIAAAJIAAAAIAGgIIAIgHIAKgEIAJgBQATAAAJALQAJAKAAAUIAABCg");
	this.shape_517.setTransform(-199.1,-61.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_518.setTransform(-210.7,-61.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#111111").s().p("AgaA2IAAhHIgBgPIgBgSIAOAAIAAATIABAAIAEgIIAHgHIAIgFQAGgCAGAAQAGAAAFABIgEAPIgHgBQgJAAgGADQgEADgEAFQgEAGgCAFQgCAGAAAGIAAA6g");
	this.shape_519.setTransform(-218.6,-61.5);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#111111").s().p("AgUA2QgGgCgFgEQgFgEgDgGQgDgGAAgHQAAgNAHgIQAGgGAKgEQAJgDAKgBIAUgBIAHAAIAAgDQAAgbgaAAQgQAAgNAMIgJgKQAOgQAbAAQAIAAAGADQAHACAFAFQAFAEADAHQADAHAAAKIAAAuIAAANIACALIgOAAIgBgJIAAgIIgBAAQgGAKgIAFQgJAFgLAAQgHAAgGgCgAAGABQgHAAgHADQgIACgFAEQgFAFAAAIQAAAFACADQACAEADADIAIADIAIABQAHAAAGgDQAFgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgNABg");
	this.shape_520.setTransform(-228.8,-61.4);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#111111").s().p("AgTBOQgPgGgKgMQgLgLgGgQQgGgPAAgSQAAgRAGgPQAGgQALgLQAKgLAPgGQAOgHAQAAQASAAANAGQANAFALAKIgMANQgIgJgKgFQgLgFgOAAQgOAAgLAFQgMAHgIAJQgIAJgEANQgEANAAAMQAAAOAEAMQAEANAIAKQAIAJAMAFQALAGAOAAQAMAAALgDQAKgDAJgFIAAg1IgkAAIAAgPIAzAAIAABOQgNAHgPAFQgPAEgOAAQgQAAgOgGg");
	this.shape_521.setTransform(-242.9,-64.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#111111").s().p("AgIAIQgEgDAAgFQAAgEAEgEQADgDAFAAQAGAAADADQAEAEAAAEQAAAFgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_522.setTransform(85.1,26.8);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABIgHADQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_523.setTransform(76.8,22.6);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#111111").s().p("AgWAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAFgKAHgIQAIgHALgEQALgFALAAQANAAAKAFQALAEAIAHQAIAIAEAKQAEAKABALQgBAMgEAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgLAAgLgFgAgQgmQgIAEgFAFQgGAGgDAHQgCAIAAAIQAAAJACAIQADAHAGAGQAFAFAIAEQAHADAJAAQAKAAAHgDQAIgEAGgFQAFgGADgHQACgIAAgJQAAgIgCgIQgDgHgFgGQgGgFgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_524.setTransform(64.8,22.6);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#111111").s().p("AAGBEQgGgBgCgDQgEgEgDgFQgCgFAAgJIAAhCIgYAAIAAgNIAYAAIAAgeIAOAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFABAEQACAEACACIAEADIAHAAIAIgBIAIgDIABAOQgJAEgMAAIgJgBg");
	this.shape_525.setTransform(54,21.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#111111").s().p("Ag5BXIAAiqIAPAAIAAASIAAAAQAEgGAFgEIALgGQAFgCAHgBIAKgCQANAAALAFQAKAEAJAHQAHAIAEAKQAEAKABAMQgBAMgEAKQgEAJgHAIQgJAHgKAEQgLAFgNAAIgKgCQgHgBgFgCQgFgDgGgEQgFgDgEgGIAAAAIAABTgAgRhFQgHAEgGAFQgHAGgCAHQgEAIAAAJQAAAJAEAIQACAHAHAGQAGAEAHAEQAJADAIAAQAKAAAIgDQAHgEAFgEQAGgGADgHQADgIAAgJQAAgJgDgIQgDgHgGgGQgFgFgHgEQgIgDgKAAQgIAAgJADg");
	this.shape_526.setTransform(43.3,25.7);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_527.setTransform(29.2,22.6);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#111111").s().p("AgOA0QgLgFgHgHQgIgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgHALgFQALgEAMAAQAMABAKAEQAKAEAIAKIgMAJQgEgGgHgEQgIgEgJAAQgJAAgHADQgIADgFAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAFAGAIADQAHADAJAAQAJAAAIgEQAHgEAEgGIAMAJQgIAJgKAFQgKAEgMABQgMAAgLgEg");
	this.shape_528.setTransform(17.4,22.6);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgGgJgRAAIgGAAQgGABgFAEQgHAEgEAJQgFAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIAQAAIABAIIAAAJIAAAAQADgFAEgDIAJgHIAKgEIAKgBQAWAAAKALQAKAKAAAUIAABCg");
	this.shape_529.setTransform(4.6,22.5);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#111111").s().p("AgWAzQgLgEgIgHQgHgIgFgKQgFgKABgMQgBgLAFgKQAFgKAHgIQAIgHALgEQAKgFAMAAQANAAALAFQALAEAHAHQAIAIAEAKQAEAKABALQgBAMgEAKQgEAKgIAIQgHAHgLAEQgLAFgNAAQgMAAgKgFgAgRgmQgHAEgFAFQgGAGgDAHQgCAIAAAIQAAAJACAIQADAHAGAGQAFAFAHAEQAJADAIAAQAJAAAIgDQAIgEAGgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgGgFgIgEQgIgDgJAAQgIAAgJADg");
	this.shape_530.setTransform(-8.7,22.6);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#111111").s().p("AgOA0QgLgFgHgHQgIgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgHALgFQALgEAMAAQAMABAKAEQAKAEAIAKIgMAJQgEgGgHgEQgIgEgJAAQgJAAgHADQgIADgFAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAFAGAIADQAHADAJAAQAJAAAIgEQAHgEAEgGIAMAJQgIAJgKAFQgKAEgMABQgMAAgLgEg");
	this.shape_531.setTransform(-21,22.6);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABIgHADQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_532.setTransform(-38.5,22.6);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgHgIgFgKQgFgKAAgMQAAgLAFgKQAFgKAHgIQAIgHAKgEQALgFAMAAQANAAAKAFQALAEAIAHQAIAIAEAKQAFAKgBALQABAMgFAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgMAAgLgFgAgQgmQgIAEgFAFQgFAGgDAHQgEAIAAAIQAAAJAEAIQADAHAFAGQAFAFAIAEQAHADAJAAQAJAAAJgDQAHgEAFgFQAGgGACgHQADgIAAgJQAAgIgDgIQgCgHgGgGQgFgFgHgEQgJgDgJAAQgJAAgHADg");
	this.shape_533.setTransform(-50.5,22.6);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#111111").s().p("AAFBEQgFgBgCgDQgEgEgDgFQgDgFAAgJIAAhCIgWAAIAAgNIAWAAIAAgeIAPAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFABAEQACAEACACIAEADIAHAAIAIgBIAIgDIABAOQgJAEgMAAIgKgBg");
	this.shape_534.setTransform(-61.3,21.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABIgHADQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_535.setTransform(-70.2,22.6);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_536.setTransform(-81.8,22.6);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABIgHADQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_537.setTransform(260.8,-5.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgHgIgFgKQgFgKAAgMQAAgLAFgKQAFgKAHgIQAIgHAKgEQAMgFALAAQANAAALAFQAKAEAIAHQAIAIAEAKQAFAKgBALQABAMgFAKQgEAKgIAIQgIAHgKAEQgLAFgNAAQgLAAgMgFgAgQgmQgIAEgFAFQgFAGgDAHQgEAIAAAIQAAAJAEAIQADAHAFAGQAFAFAIAEQAIADAIAAQAJAAAJgDQAHgEAFgFQAGgGACgHQADgIABgJQgBgIgDgIQgCgHgGgGQgFgFgHgEQgJgDgJAAQgIAAgIADg");
	this.shape_538.setTransform(248.8,-5.3);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#111111").s().p("AgdA2IAAhHIAAgPIgBgSIAPAAIAAATIABAAIAEgIIAIgHIAJgFQAGgCAHAAQAHAAAEABIgDAPIgJgBQgJAAgGADQgFADgEAFQgFAGgCAFQgCAGAAAGIAAA6g");
	this.shape_539.setTransform(238.9,-5.5);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQABgbgdAAQgSAAgPAMIgJgKQAQgQAeAAQAIAAAHADQAHACAGAFQAGAEADAHQADAHAAAKIAAAuIAAANIACALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgIACgGAEQgGAFAAAIQAAAFADADQABAEAFADIAIADIAJABQAIAAAGgDQAGgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgOABg");
	this.shape_540.setTransform(227.7,-5.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_541.setTransform(219.1,-8.6);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#111111").s().p("AgOA0QgLgFgHgHQgIgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgHALgFQALgEAMAAQAMABAKAEQAKAEAIAKIgMAJQgEgGgHgEQgIgEgJAAQgJAAgHADQgIADgFAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAFAGAIADQAHADAJAAQAJAAAIgEQAHgEAEgGIAMAJQgIAJgKAFQgKAEgMABQgMAAgLgEg");
	this.shape_542.setTransform(210.9,-5.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABIgHADQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_543.setTransform(193.4,-5.3);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQAAgbgcAAQgSAAgPAMIgJgKQAPgQAfAAQAHAAAIADQAHACAGAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAGABQgHAAgIADQgJACgFAEQgGAFAAAIQAAAFADADQACAEADADIAJADIAJABQAHAAAHgDQAGgCAEgFQAFgFACgGQABgGAAgHIAAgIIgIAAIgPABg");
	this.shape_544.setTransform(182,-5.3);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#111111").s().p("AgeBMQgNgFgKgLIALgLQAHAIALAGQALAFANAAQALAAAIgDQAIgEAFgFQAFgGADgIQACgHAAgJIAAgTIgBAAQgHALgLAFQgLAEgMAAQgLAAgKgEQgLgEgHgHQgIgHgFgJQgEgKAAgLQAAgMAEgKQAEgKAIgHQAHgIALgEQAKgEAMAAIAJABIALADQAGACAFAEQAGAEAEAGIABAAIAAgRIAPAAIAABnQAAAJgCAKQgCAJgGAJQgHAIgLAFQgMAFgSAAQgQAAgNgFgAgOg/QgIADgFAGQgGAFgDAHQgDAIAAAIQAAAIADAIQADAHAGAFQAFAFAIADQAHAEAIAAQAIAAAIgDQAHgDAGgFQAGgFADgHQAEgIgBgJQAAgIgCgIQgDgHgGgFQgFgGgIgDQgIgDgJAAQgIAAgHADg");
	this.shape_545.setTransform(168.7,-2.8);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgQAAIgGAAQgGABgFAEQgHAEgFAJQgEAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIARAAIAAAIIAAAJIAAAAQADgFAEgDIAJgHIALgEQAEgBAFAAQAWAAAKALQAJAKABAUIAABCg");
	this.shape_546.setTransform(155.2,-5.5);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_547.setTransform(142.2,-5.3);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgEgEgDgFQgCgFgBgJIAAhCIgWAAIAAgNIAWAAIAAgeIAPAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFACAEQAAAEACACIAGADIAGAAIAIgBIAIgDIAAAOQgIAEgMAAIgKgBg");
	this.shape_548.setTransform(131.9,-6.7);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_549.setTransform(114.9,-5.3);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#111111").s().p("AglArQgKgKAAgUIAAhCIAQAAIAAA5QAAAJABAHQACAGADAFQADAFAGACQAGACAJAAIAFAAQAGgBAGgEQAGgEAEgJQAFgIAAgOIAAg1IAPAAIAABRIABALIABAMIgQAAIgBgIIAAgJIgHAIIgJAGQgFADgFACIgKABQgWAAgKgLg");
	this.shape_550.setTransform(101.7,-5.2);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#111111").s().p("AArBXIAAhTQgEAGgFADIgLAHQgFACgHABIgLACQgMAAgLgFQgKgEgIgHQgIgIgEgJQgFgKAAgMQAAgMAFgKQAEgKAIgIQAIgHAKgEQALgFAMAAIALACQAHABAFACIALAGQAFAEAEAGIAAgSIAPAAIAACqgAgRhFQgHAEgFAFQgGAGgCAHQgEAIAAAJQAAAJAEAIQACAHAGAGQAFAEAHAEQAJADAIAAQAJAAAJgDQAHgEAGgEQAHgGACgHQAEgIAAgJQAAgJgEgIQgCgHgHgGQgGgFgHgEQgJgDgJAAQgIAAgJADg");
	this.shape_551.setTransform(87.7,-2.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAVgBIAIAAIAAgDQAAgbgcAAQgSAAgPAMIgJgKQAQgQAeAAQAIAAAHADQAHACAGAFQAFAEAEAHQADAHAAAKIAAAuIAAANIACALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgJACgFAEQgGAFAAAIQAAAFACADQACAEAFADIAIADIAJABQAHAAAHgDQAGgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgOABg");
	this.shape_552.setTransform(68,-5.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#111111").s().p("AgdA2IAAhHIAAgPIgBgSIAPAAIAAATIABAAIAEgIIAIgHIAJgFQAGgCAHAAQAHAAAEABIgDAPIgJgBQgJAAgGADQgFADgEAFQgFAGgCAFQgCAGAAAGIAAA6g");
	this.shape_553.setTransform(59.3,-5.5);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAIAAIAAgDQAAgbgdAAQgSAAgOAMIgKgKQAPgQAfAAQAIAAAHADQAIACAFAFQAGAEADAHQADAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAGABQgHAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQACAEAEADIAJADIAJABQAIAAAGgDQAGgCAEgFQAFgFABgGQADgGAAgHIAAgIIgIAAIgQABg");
	this.shape_554.setTransform(48.1,-5.3);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#111111").s().p("Ag5BXIAAiqIAPAAIAAASIABAAQADgGAGgEIAKgGQAGgCAGgBQAFgCAFAAQANAAALAFQALAEAHAHQAIAIAEAKQAFAKAAAMQAAAMgFAKQgEAJgIAIQgHAHgLAEQgLAFgNAAIgKgCQgGgBgGgCQgFgDgFgEQgGgDgDgGIgBAAIAABTgAgRhFQgIAEgFAFQgHAGgCAHQgEAIAAAJQAAAJAEAIQACAHAHAGQAFAEAIAEQAIADAJAAQAKAAAHgDQAIgEAGgEQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgFgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_555.setTransform(35.5,-2.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_556.setTransform(18.6,-8.6);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAIAAIAAgDQAAgbgdAAQgSAAgOAMIgKgKQAPgQAfAAQAIAAAHADQAIACAFAFQAGAEACAHQAEAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAGABQgHAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQACAEAEADIAJADIAJABQAIAAAGgDQAGgCAEgFQAFgFABgGQADgGAAgHIAAgIIgIAAIgQABg");
	this.shape_557.setTransform(9.4,-5.3);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgDgDAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_558.setTransform(0.7,-7.9);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#111111").s().p("AgdA2IAAhHIAAgPIgBgSIAPAAIAAATIABAAIAEgIIAIgHIAJgFQAGgCAHAAQAHAAAEABIgDAPIgJgBQgJAAgGADQgFADgEAFQgFAGgCAFQgCAGAAAGIAAA6g");
	this.shape_559.setTransform(-5,-5.5);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_560.setTransform(-16.4,-5.3);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#111111").s().p("AAGBEQgFgBgDgDQgEgEgDgFQgDgFABgJIAAhCIgYAAIAAgNIAYAAIAAgeIAOAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFACAEQABAEABACIAGADIAGAAIAIgBIAIgDIAAAOQgIAEgMAAIgJgBg");
	this.shape_561.setTransform(-26.8,-6.7);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQAAgbgcAAQgSAAgPAMIgJgKQAPgQAfAAQAHAAAIADQAHACAGAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAGABQgHAAgIADQgJACgFAEQgGAFAAAIQAAAFADADQACAEADADIAJADIAJABQAHAAAHgDQAGgCAEgFQAFgFACgGQABgGAAgHIAAgIIgIAAIgPABg");
	this.shape_562.setTransform(-37.1,-5.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#111111").s().p("ABDA2IAAg8QAAgQgGgJQgGgIgQAAQgIAAgGADQgGADgEAGQgDAFgCAHQgCAHAAAHIAAA3IgOAAIAAg8QAAgQgGgJQgGgIgQAAIgGAAQgFABgGAEQgFAEgFAJQgEAIAAANIAAA2IgPAAIAAhRIgBgMIgBgLIARAAIAAAQIABAAQAFgKAKgEQAKgFAKAAIAKABQAFABAEACQAFACAEAFQADAEADAHQAFgKAKgGQAKgGALAAQAVAAALALQAKAKAAAUIAABCg");
	this.shape_563.setTransform(-53.1,-5.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_564.setTransform(-72.3,-8.6);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_565.setTransform(-81.7,-5.3);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#111111").s().p("AgWAzQgLgEgIgHQgIgIgEgKQgEgKgBgMQABgLAEgKQAEgKAIgIQAIgHALgEQALgFALAAQANAAAKAFQALAEAIAHQAIAIAEAKQAEAKAAALQAAAMgEAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgLAAgLgFgAgQgmQgIAEgFAFQgGAGgDAHQgCAIAAAIQAAAJACAIQADAHAGAGQAFAFAIAEQAHADAJAAQAKAAAHgDQAIgEAGgFQAFgGADgHQACgIAAgJQAAgIgCgIQgDgHgFgGQgGgFgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_566.setTransform(-101.7,-5.3);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#111111").s().p("AgIA1IgshpIASAAIAiBYIABAAIAjhYIARAAIgsBpg");
	this.shape_567.setTransform(-114.3,-5.3);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_568.setTransform(-126.5,-5.3);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#111111").s().p("AglArQgKgKAAgUIAAhCIAQAAIAAA5QAAAJABAHQACAGADAFQADAFAGACQAGACAJAAIAFAAQAGgBAGgEQAGgEAEgJQAFgIAAgOIAAg1IAPAAIAABRIABALIABAMIgQAAIgBgIIAAgJIgHAIIgJAGQgFADgFACIgKABQgWAAgKgLg");
	this.shape_569.setTransform(-139.7,-5.2);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgGgJgSAAIgFAAQgFABgHAEQgFAEgGAJQgEAIAAANIAAA2IgQAAIAAhRIAAgLIAAgMIAQAAIAAAIIAAAJIABAAQACgFAEgDIAJgHIALgEQAEgBAGAAQAVAAAJALQAKAKAAAUIAABCg");
	this.shape_570.setTransform(-152.8,-5.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_571.setTransform(-172.3,-5.3);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#111111").s().p("AgXBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgIQAIgHAKgEQALgFAMAAIALACQAHABAFACIALAGQAFAEAEAGIAAhTIAPAAIAACqIgPAAIAAgSQgEAGgFADIgLAHQgFACgHABIgLACQgMAAgLgFgAgRgHQgHAEgFAEQgGAGgCAHQgEAIAAAJQAAAJAEAIQACAHAGAGQAFAFAHAEQAJADAIAAQAJAAAJgDQAHgEAGgFQAHgGACgHQAEgIAAgJQAAgJgEgIQgCgHgHgGQgGgEgHgEQgJgDgJAAQgIAAgJADg");
	this.shape_572.setTransform(-186.3,-8.4);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAVgBIAIAAIAAgDQAAgbgcAAQgSAAgPAMIgJgKQAQgQAeAAQAIAAAHADQAHACAGAFQAFAEAEAHQADAHAAAKIAAAuIAAANIACALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgJACgFAEQgGAFAAAIQAAAFACADQACAEAFADIAIADIAJABQAHAAAHgDQAGgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgOABg");
	this.shape_573.setTransform(-206,-5.3);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABIgHADQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_574.setTransform(-216.8,-5.3);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgDgDAAgFQAAgEADgEQAEgDADAAQAEAAAEADQADAEAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_575.setTransform(-224.6,-7.9);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#111111").s().p("AgIA1IgshpIASAAIAiBYIABAAIAjhYIARAAIgsBpg");
	this.shape_576.setTransform(-233.1,-5.3);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_577.setTransform(-245.3,-5.3);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#111111").s().p("AAjBQIgshKIgdAAIAABKIgRAAIAAifIA0AAQAYAAAPALQAOAKAAAWQAAAQgKAMQgLAKgVACIAwBMgAgmgIIAeAAQALAAAHgDQAIgCAFgEQAFgDACgFQACgGAAgFQAAgGgCgFQgCgFgFgEQgFgEgIgCQgHgCgLAAIgeAAg");
	this.shape_578.setTransform(-258,-8);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#111111").s().p("AgIAIQgEgDAAgFQAAgEAEgEQADgDAFAAQAGAAADADQAEAEAAAEQAAAFgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_579.setTransform(249.9,-29.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABIgHADQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_580.setTransform(241.6,-33.3);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_581.setTransform(230.1,-33.3);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgQAAIgGAAQgGABgFAEQgHAEgFAJQgEAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIARAAIAAAIIAAAJIAAAAQADgFAEgDIAJgHIALgEIAJgBQAWAAAKALQAJAKABAUIAABCg");
	this.shape_582.setTransform(216.8,-33.5);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgIgIgEgKQgFgKABgMQgBgLAFgKQAEgKAIgIQAIgHAKgEQAMgFALAAQANAAALAFQAKAEAIAHQAIAIAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgKAEQgLAFgNAAQgLAAgMgFgAgRgmQgHAEgFAFQgFAGgDAHQgDAIgBAIQABAJADAIQADAHAFAGQAFAFAHAEQAJADAIAAQAJAAAIgDQAIgEAFgFQAGgGACgHQAEgIAAgJQAAgIgEgIQgCgHgGgGQgFgFgIgEQgIgDgJAAQgIAAgJADg");
	this.shape_583.setTransform(203.5,-33.3);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgDgDAAgFQAAgFADgDQAEgCADAAQAEAAAEACQADADAAAFQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_584.setTransform(193.7,-35.9);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#111111").s().p("AgOA0QgLgFgHgHQgIgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgHALgFQALgEAMAAQAMABAKAEQAKAEAIAKIgMAJQgEgGgHgEQgIgEgJAAQgJAAgHADQgIADgFAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAFAGAIADQAHADAJAAQAJAAAIgEQAHgEAEgGIAMAJQgIAJgKAFQgKAEgMABQgMAAgLgEg");
	this.shape_585.setTransform(185.6,-33.3);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAIAAIAAgDQAAgbgdAAQgSAAgOAMIgKgKQAPgQAfAAQAIAAAHADQAIACAFAFQAGAEADAHQADAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAGABQgHAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQACAEAFADIAIADIAJABQAIAAAGgDQAGgCAEgFQAFgFABgGQADgGAAgHIAAgIIgIAAIgQABg");
	this.shape_586.setTransform(173.2,-33.3);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgEgEgDgFQgCgFgBgJIAAhCIgWAAIAAgNIAWAAIAAgeIAPAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFABAEQABAEACACIAFADIAHAAIAIgBIAIgDIABAOQgJAEgMAAIgKgBg");
	this.shape_587.setTransform(163.5,-34.7);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#111111").s().p("AglArQgKgKAAgUIAAhCIAQAAIAAA5QAAAJABAHQACAGADAFQADAFAGACQAGACAJAAIAFAAQAGgBAGgEQAGgEAEgJQAFgIAAgOIAAg1IAPAAIAABRIABALIABAMIgQAAIgBgIIAAgJIgHAIIgJAGQgFADgFACIgKABQgWAAgKgLg");
	this.shape_588.setTransform(153,-33.2);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#111111").s().p("Ag6BXIAAiqIAQAAIAAASIAAAAQAEgGAFgEIALgGQAGgCAGgBIAKgCQANAAALAFQALAEAHAHQAIAIAFAKQADAKAAAMQAAAMgDAKQgFAJgIAIQgHAHgLAEQgLAFgNAAIgKgCQgGgBgGgCQgGgDgFgEQgFgDgEgGIAAAAIAABTgAgQhFQgIAEgHAFQgGAGgDAHQgDAIAAAJQAAAJADAIQADAHAGAGQAHAEAIAEQAIADAIAAQAKAAAIgDQAHgEAFgEQAGgGADgHQADgIAAgJQAAgJgDgIQgDgHgGgGQgFgFgHgEQgIgDgKAAQgIAAgIADg");
	this.shape_589.setTransform(139.7,-30.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#111111").s().p("ABDA2IAAg8QAAgQgGgJQgGgIgQAAQgIAAgGADQgGADgEAGQgDAFgCAHQgCAHAAAHIAAA3IgOAAIAAg8QAAgQgGgJQgGgIgQAAIgGAAQgFABgGAEQgFAEgFAJQgEAIAAANIAAA2IgPAAIAAhRIgBgMIgBgLIARAAIAAAQIABAAQAFgKAKgEQAKgFAKAAIAKABQAFABAEACQAFACAEAFQADAEADAHQAFgKAKgGQAKgGALAAQAVAAALALQAKAKAAAUIAABCg");
	this.shape_590.setTransform(121.9,-33.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQABgbgdAAQgSAAgPAMIgJgKQAQgQAeAAQAIAAAHADQAHACAGAFQAGAEADAHQADAHAAAKIAAAuIAAANIACALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgIACgGAEQgGAFAAAIQAAAFADADQABAEAFADIAIADIAJABQAIAAAGgDQAGgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgOABg");
	this.shape_591.setTransform(105.7,-33.3);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABIgHADQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_592.setTransform(88.4,-33.3);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAVgBIAIAAIAAgDQAAgbgcAAQgSAAgPAMIgJgKQAQgQAeAAQAIAAAHADQAHACAGAFQAFAEAEAHQADAHAAAKIAAAuIAAANIACALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgJACgFAEQgGAFAAAIQAAAFACADQACAEAFADIAIADIAJABQAHAAAHgDQAGgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgOABg");
	this.shape_593.setTransform(77,-33.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_594.setTransform(68.4,-36.6);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#111111").s().p("AgqBQIgHgCIABgOQAFACAHAAQAIAAAFgFQAFgFADgJIAIgUIgthqIATAAIAiBXIAihXIASAAIg2CEQgEANgIAHQgIAHgOAAIgHAAg");
	this.shape_595.setTransform(53.4,-30.6);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgIgIgEgKQgFgKABgMQgBgLAFgKQAEgKAIgIQAIgHAKgEQAMgFALAAQANAAALAFQAKAEAIAHQAIAIAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgKAEQgLAFgNAAQgLAAgMgFgAgRgmQgHAEgFAFQgFAGgDAHQgDAIgBAIQABAJADAIQADAHAFAGQAFAFAHAEQAJADAIAAQAJAAAJgDQAHgEAFgFQAGgGACgHQAEgIAAgJQAAgIgEgIQgCgHgGgGQgFgFgHgEQgJgDgJAAQgIAAgJADg");
	this.shape_596.setTransform(34.3,-33.3);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#111111").s().p("AgOA0QgLgFgHgHQgIgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgHALgFQALgEAMAAQAMABAKAEQAKAEAIAKIgMAJQgEgGgHgEQgIgEgJAAQgJAAgHADQgIADgFAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAFAGAIADQAHADAJAAQAJAAAIgEQAHgEAEgGIAMAJQgIAJgKAFQgKAEgMABQgMAAgLgEg");
	this.shape_597.setTransform(22,-33.3);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgDgDAAgFQAAgFADgDQAEgCADAAQAEAAAEACQADADAAAFQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_598.setTransform(13.2,-35.9);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#111111").s().p("AgdA2IAAhHIAAgPIgBgSIAPAAIAAATIABAAIAEgIIAIgHIAJgFQAGgCAHAAQAHAAAEABIgDAPIgJgBQgJAAgGADQgFADgEAFQgFAGgCAFQgCAGAAAGIAAA6g");
	this.shape_599.setTransform(7.4,-33.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgEgEgDgFQgCgFgBgJIAAhCIgWAAIAAgNIAWAAIAAgeIAPAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFABAEQABAEACACIAGADIAGAAIAIgBIAIgDIAAAOQgIAEgMAAIgKgBg");
	this.shape_600.setTransform(-1.3,-34.7);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#111111").s().p("AgOA0QgLgFgHgHQgIgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgHALgFQALgEAMAAQAMABAKAEQAKAEAIAKIgMAJQgEgGgHgEQgIgEgJAAQgJAAgHADQgIADgFAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAFAGAIADQAHADAJAAQAJAAAIgEQAHgEAEgGIAMAJQgIAJgKAFQgKAEgMABQgMAAgLgEg");
	this.shape_601.setTransform(-10.5,-33.3);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#111111").s().p("AgTBNQgKgEgIgHQgHgIgFgKQgEgKAAgNQAAgLAEgLQAEgJAIgHQAIgIAKgDQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAJQADAJAAALIAAAHIhbAAQABAHADAIQAEAGAFAGQAGAFAHADQAHACAHAAQAMAAAJgFQAJgFAFgIIAMAKQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgNQgHADgFAFQgGAFgDAFQgDAGAAAHIBJAAQAAgQgJgIQgKgJgRAAQgGAAgHACgAgNgwIAWggIAWAAIgfAgg");
	this.shape_602.setTransform(-23.1,-35.9);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_603.setTransform(-32.4,-36.6);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_604.setTransform(-41.8,-33.3);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#111111").s().p("AgWAzQgLgEgIgHQgHgIgFgKQgFgKABgMQgBgLAFgKQAFgKAHgIQAIgHALgEQAKgFAMAAQANAAALAFQALAEAHAHQAIAIAEAKQAEAKABALQgBAMgEAKQgEAKgIAIQgHAHgLAEQgLAFgNAAQgMAAgKgFgAgRgmQgHAEgFAFQgGAGgDAHQgCAIAAAIQAAAJACAIQADAHAGAGQAFAFAHAEQAJADAIAAQAJAAAIgDQAIgEAGgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgGgFgIgEQgIgDgJAAQgIAAgJADg");
	this.shape_605.setTransform(-61.8,-33.3);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#111111").s().p("AAFBEQgFgBgCgDQgEgEgDgFQgDgFAAgJIAAhCIgWAAIAAgNIAWAAIAAgeIAPAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFABAEQABAEADACIAEADIAHAAIAIgBIAIgDIABAOQgJAEgMAAIgKgBg");
	this.shape_606.setTransform(-72.7,-34.7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#111111").s().p("AgOA0QgLgFgHgHQgIgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgHALgFQALgEAMAAQAMABAKAEQAKAEAIAKIgMAJQgEgGgHgEQgIgEgJAAQgJAAgHADQgIADgFAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAFAGAIADQAHADAJAAQAJAAAIgEQAHgEAEgGIAMAJQgIAJgKAFQgKAEgMABQgMAAgLgEg");
	this.shape_607.setTransform(-81.9,-33.3);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQAAgbgcAAQgSAAgPAMIgJgKQAPgQAfAAQAHAAAIADQAHACAGAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAGABQgHAAgIADQgJACgFAEQgGAFAAAIQAAAFADADQACAEADADIAJADIAJABQAHAAAHgDQAGgCAEgFQAFgFACgGQABgGAAgHIAAgIIgIAAIgPABg");
	this.shape_608.setTransform(-94.3,-33.3);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#111111").s().p("AAGBEQgGgBgCgDQgEgEgDgFQgCgFAAgJIAAhCIgYAAIAAgNIAYAAIAAgeIAOAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFABAEQACAEACACIAEADIAHAAIAIgBIAIgDIABAOQgJAEgMAAIgJgBg");
	this.shape_609.setTransform(-104,-34.7);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgGgJgSAAIgFAAQgFABgHAEQgFAEgGAJQgEAIAAANIAAA2IgQAAIAAhRIAAgLIAAgMIAQAAIAAAIIAAAJIABAAQACgFAEgDIAJgHIALgEIAKgBQAVAAAJALQAKAKAAAUIAABCg");
	this.shape_610.setTransform(-114.6,-33.5);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgHgIgFgKQgFgKAAgMQAAgLAFgKQAFgKAHgIQAIgHAKgEQALgFAMAAQANAAAKAFQALAEAIAHQAIAIAEAKQAFAKgBALQABAMgFAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgMAAgLgFgAgQgmQgIAEgFAFQgFAGgDAHQgEAIAAAIQAAAJAEAIQADAHAFAGQAFAFAIAEQAHADAJAAQAJAAAJgDQAHgEAFgFQAGgGACgHQADgIAAgJQAAgIgDgIQgCgHgGgGQgFgFgHgEQgJgDgJAAQgJAAgHADg");
	this.shape_611.setTransform(-127.9,-33.3);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#111111").s().p("AgOA0QgLgFgHgHQgIgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgHALgFQALgEAMAAQAMABAKAEQAKAEAIAKIgMAJQgEgGgHgEQgIgEgJAAQgJAAgHADQgIADgFAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAFAGAIADQAHADAJAAQAJAAAIgEQAHgEAEgGIAMAJQgIAJgKAFQgKAEgMABQgMAAgLgEg");
	this.shape_612.setTransform(-140.2,-33.3);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_613.setTransform(-155.5,-36.6);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_614.setTransform(-164.9,-33.3);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#111111").s().p("AgQAaIAPg0IASAAIgSA0g");
	this.shape_615.setTransform(-181.2,-27.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABIgHADQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_616.setTransform(-189.4,-33.3);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQABgbgdAAQgSAAgPAMIgJgKQAQgQAeAAQAHAAAIADQAIACAFAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgIACgGAEQgGAFAAAIQAAAFADADQABAEAEADIAJADIAJABQAIAAAGgDQAGgCAEgFQAFgFACgGQABgGAAgHIAAgIIgIAAIgOABg");
	this.shape_617.setTransform(-200.8,-33.3);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#111111").s().p("AgdA2IAAhHIAAgPIgBgSIAPAAIAAATIABAAIAEgIIAIgHIAJgFQAGgCAHAAQAHAAAEABIgDAPIgJgBQgJAAgGADQgFADgEAFQgFAGgCAFQgCAGAAAGIAAA6g");
	this.shape_618.setTransform(-209.6,-33.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#111111").s().p("AglArQgKgKAAgUIAAhCIAQAAIAAA5QAAAJABAHQACAGADAFQADAFAGACQAGACAJAAIAFAAQAGgBAGgEQAGgEAEgJQAFgIAAgOIAAg1IAPAAIAABRIABALIABAMIgQAAIgBgIIAAgJIgHAIIgJAGQgFADgFACIgKABQgWAAgKgLg");
	this.shape_619.setTransform(-221,-33.2);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgEgEgDgFQgCgFgBgJIAAhCIgXAAIAAgNIAXAAIAAgeIAPAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFACAEQAAAEACACIAGADIAGAAIAIgBIAIgDIAAAOQgIAEgMAAIgKgBg");
	this.shape_620.setTransform(-231.4,-34.7);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_621.setTransform(-238.1,-36.6);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgEgGQgDgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAHAAIAAgDQAAgbgcAAQgSAAgOAMIgKgKQAQgQAeAAQAHAAAIADQAHACAGAFQAGAEADAHQADAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAHABQgIAAgIADQgJACgFAEQgGAFAAAIQAAAFACADQACAEAFADIAIADIAJABQAHAAAHgDQAGgCAEgFQAEgFACgGQACgGAAgHIAAgIIgHAAIgPABg");
	this.shape_622.setTransform(-247.3,-33.3);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_623.setTransform(225.4,-61.4);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#111111").s().p("AgWBSQgLgEgIgHQgIgIgEgKQgFgKABgMQgBgMAFgKQAEgJAIgIQAIgHALgEQAKgFAMAAIAMACQAGABAFACIALAGQAFAEAEAGIAAhTIAQAAIAACqIgQAAIAAgSQgEAGgFADIgLAHQgFACgGABIgMACQgMAAgKgFgAgRgHQgHAEgFAEQgGAGgDAHQgCAIAAAJQAAAJACAIQADAHAGAGQAFAFAHAEQAJADAIAAQAJAAAIgDQAIgEAHgFQAGgGADgHQADgIAAgJQAAgJgDgIQgDgHgGgGQgHgEgIgEQgIgDgJAAQgIAAgJADg");
	this.shape_624.setTransform(211.3,-64.5);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQABgbgdAAQgSAAgPAMIgJgKQAQgQAeAAQAHAAAIADQAIACAFAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgIACgGAEQgGAFAAAIQAAAFADADQABAEAEADIAJADIAJABQAIAAAGgDQAGgCAEgFQAFgFACgGQABgGAAgHIAAgIIgIAAIgOABg");
	this.shape_625.setTransform(191.6,-61.4);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#111111").s().p("AgWBSQgLgEgIgHQgIgIgEgKQgEgKgBgMQABgMAEgKQAEgJAIgIQAIgHALgEQAKgFAMAAIAMACQAFABAGACIALAGQAFAEAEAGIAAhTIAQAAIAACqIgQAAIAAgSQgEAGgFADIgLAHQgGACgFABIgMACQgMAAgKgFgAgQgHQgIAEgGAEQgFAGgDAHQgCAIAAAJQAAAJACAIQADAHAFAGQAGAFAIAEQAHADAJAAQAKAAAHgDQAJgEAFgFQAGgGAEgHQADgIAAgJQAAgJgDgIQgEgHgGgGQgFgEgJgEQgHgDgKAAQgJAAgHADg");
	this.shape_626.setTransform(178.2,-64.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#111111").s().p("AgPBQIAAhpIAPAAIAABpgAgVgvIAWggIAWAAIgfAgg");
	this.shape_627.setTransform(169.5,-64.1);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAWgBIAIAAIAAgDQgBgbgcAAQgSAAgPAMIgJgKQAQgQAeAAQAHAAAIADQAHACAGAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAGABQgHAAgIADQgJACgFAEQgGAFAAAIQAAAFADADQACAEADADIAJADIAJABQAHAAAHgDQAGgCAEgFQAFgFACgGQACgGAAgHIAAgIIgIAAIgQABg");
	this.shape_628.setTransform(159.4,-61.4);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#111111").s().p("AgOA0QgLgFgHgHQgIgIgEgKQgEgKAAgMQAAgLAEgKQAEgLAIgHQAHgHALgFQALgEAMAAQAMABAKAEQAKAEAIAKIgMAJQgEgGgHgEQgIgEgJAAQgJAAgHADQgIADgFAGQgGAFgCAIQgDAIAAAIQAAAJADAIQACAIAGAFQAFAGAIADQAHADAJAAQAJAAAIgEQAHgEAEgGIAMAJQgIAJgKAFQgKAEgMABQgMAAgLgEg");
	this.shape_629.setTransform(148.3,-61.4);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAIAAIAAgDQAAgbgdAAQgSAAgOAMIgKgKQAPgQAfAAQAHAAAIADQAIACAFAFQAGAEADAHQADAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAHABQgIAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQADAEAEADIAIADIAJABQAIAAAGgDQAGgCAEgFQAEgFACgGQACgGABgHIAAgIIgIAAIgPABg");
	this.shape_630.setTransform(129.4,-61.4);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_631.setTransform(120.8,-64.6);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#111111").s().p("AgIAyQgEgDAAgGQAAgEAEgEQADgDAFgBQAGABADADQAEAEAAAEQAAAGgEADQgDAEgGAAQgFAAgDgEgAgIghQgEgDAAgFQAAgFAEgEQADgDAFAAQAGAAADADQAEAEAAAFQAAAFgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_632.setTransform(108.2,-61.3);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#111111").s().p("AguBQIAAifIARAAIAACQIBMAAIAAAPg");
	this.shape_633.setTransform(100.1,-64.1);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#111111").s().p("AA9BQIgTgqIhUAAIgSAqIgUAAIBJifIAPAAIBJCfgAgjAXIBHAAIgkhTg");
	this.shape_634.setTransform(85.1,-64.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#111111").s().p("AAwBQIhiiIIgBAAIAACIIgRAAIAAifIAVAAIBiCGIABAAIAAiGIARAAIAACfg");
	this.shape_635.setTransform(68,-64.1);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#111111").s().p("AgIBQIAAifIAQAAIAACfg");
	this.shape_636.setTransform(55.7,-64.1);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#111111").s().p("AgJBQIg/ifIATAAIA1CGIAAAAIA2iGIATAAIhCCfg");
	this.shape_637.setTransform(45.5,-64.1);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#111111").s().p("AA9BQIgTgqIhUAAIgSAqIgUAAIBJifIAPAAIBJCfgAgjAXIBHAAIgkhTg");
	this.shape_638.setTransform(30.2,-64.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgQAAIgGAAQgGABgFAEQgHAEgFAJQgEAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIARAAIAAAIIAAAJIAAAAQADgFAEgDIAJgHIALgEIAJgBQAWAAAKALQAJAKABAUIAABCg");
	this.shape_639.setTransform(8.9,-61.5);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_640.setTransform(-4,-61.4);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABQgEABgDACQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_641.setTransform(-22,-61.4);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_642.setTransform(-33.6,-61.4);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_643.setTransform(-42.9,-64.6);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#111111").s().p("AgKBVQgHgBgFgCQgGgDgEgEQgGgDgDgGIgBAAIAAASIgQAAIAAiqIAQAAIAABTIABAAQADgGAGgEIAKgGQAFgCAHgBIAKgCQANAAALAFQALAEAHAHQAIAIAFAJQADAKAAAMQAAAMgDAKQgFAKgIAIQgHAHgLAEQgLAFgNAAIgKgCgAgQgHQgIAEgHAEQgFAGgEAHQgDAIAAAJQAAAJADAIQAEAHAFAGQAHAFAIAEQAHADAJAAQAKAAAIgDQAHgEAFgFQAGgGADgHQADgIAAgJQAAgJgDgIQgDgHgGgGQgFgEgHgEQgIgDgKAAQgJAAgHADg");
	this.shape_644.setTransform(-52.5,-64.5);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#111111").s().p("AgHBPIAAhpIAPAAIAABpgAgHg7QgDgDAAgFQAAgEADgDQAEgEADAAQAEAAAEAEQADADAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_645.setTransform(-62.9,-63.9);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABQgEABgDACQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_646.setTransform(-70.7,-61.4);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgIgIgEgKQgEgKgBgMQABgLAEgKQAEgKAIgIQAIgHAKgEQAMgFALAAQANAAAKAFQALAEAIAHQAIAIAEAKQAEAKAAALQAAAMgEAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgLAAgMgFgAgQgmQgIAEgFAFQgFAGgEAHQgDAIAAAIQAAAJADAIQAEAHAFAGQAFAFAIAEQAHADAJAAQAKAAAIgDQAHgEAFgFQAGgGADgHQACgIAAgJQAAgIgCgIQgDgHgGgGQgFgFgHgEQgIgDgKAAQgJAAgHADg");
	this.shape_647.setTransform(-82.7,-61.4);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#111111").s().p("Ag6BXIAAiqIAQAAIAAASIAAAAQAEgGAFgEIALgGQAGgCAGgBIAKgCQANAAALAFQALAEAIAHQAHAIAFAKQADAKAAAMQAAAMgDAKQgFAJgHAIQgIAHgLAEQgLAFgNAAIgKgCQgGgBgGgCQgGgDgFgEQgFgDgEgGIAAAAIAABTgAgQhFQgJAEgGAFQgFAGgEAHQgDAIAAAJQAAAJADAIQAEAHAFAGQAGAEAJAEQAHADAJAAQAKAAAIgDQAHgEAFgEQAGgGADgHQADgIAAgJQAAgJgDgIQgDgHgGgGQgFgFgHgEQgIgDgKAAQgJAAgHADg");
	this.shape_648.setTransform(-96.4,-58.3);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABQgEABgDACQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_649.setTransform(-115.5,-61.4);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgHgIgFgKQgFgKAAgMQAAgLAFgKQAFgKAHgIQAIgHAKgEQALgFAMAAQANAAAKAFQALAEAIAHQAIAIAEAKQAFAKgBALQABAMgFAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgMAAgLgFgAgQgmQgIAEgFAFQgFAGgDAHQgEAIAAAIQAAAJAEAIQADAHAFAGQAFAFAIAEQAHADAJAAQAJAAAJgDQAHgEAFgFQAGgGACgHQADgIAAgJQAAgIgDgIQgCgHgGgGQgFgFgHgEQgJgDgJAAQgJAAgHADg");
	this.shape_650.setTransform(-127.5,-61.4);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#111111").s().p("AgeBMQgNgFgKgLIALgLQAHAIALAGQALAFANAAQALAAAIgDQAIgEAFgFQAFgGADgIQACgHAAgJIAAgTIgBAAQgHALgLAFQgLAEgMAAQgLAAgKgEQgLgEgHgHQgIgHgFgJQgEgKAAgLQAAgMAEgKQAEgKAIgHQAHgIALgEQAKgEAMAAIAJABIALADQAGACAFAEQAGAEAEAGIABAAIAAgRIAPAAIAABnQAAAJgCAKQgCAJgGAJQgHAIgLAFQgMAFgSAAQgQAAgNgFgAgOg/QgIADgFAGQgGAFgDAHQgDAIAAAIQAAAIADAIQADAHAGAFQAFAFAIADQAHAEAIAAQAIAAAIgDQAHgDAGgFQAGgFADgHQAEgIgBgJQAAgIgCgIQgDgHgGgFQgFgGgIgDQgIgDgJAAQgIAAgHADg");
	this.shape_651.setTransform(-142,-58.8);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABQgEABgDACQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_652.setTransform(-153.8,-61.4);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_653.setTransform(-165.4,-61.4);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#111111").s().p("AgHBPIAAhpIAPAAIAABpgAgHg7QgDgDAAgFQAAgEADgDQAEgEADAAQAEAAAEAEQADADAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_654.setTransform(-174.7,-63.9);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#111111").s().p("AgdA2IAAhHIAAgPIgBgSIAPAAIAAATIABAAIAEgIIAIgHIAJgFQAGgCAHAAQAHAAAEABIgDAPIgJgBQgJAAgGADQgFADgEAFQgFAGgCAFQgCAGAAAGIAAA6g");
	this.shape_655.setTransform(-180.4,-61.5);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgQAAIgGAAQgGABgFAEQgHAEgFAJQgEAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIARAAIAAAIIAAAJIAAAAQADgFAEgDIAJgHIALgEIAJgBQAWAAAKALQAJAKABAUIAABCg");
	this.shape_656.setTransform(-198.5,-61.5);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgIgIgEgKQgFgKABgMQgBgLAFgKQAEgKAIgIQAIgHAKgEQAMgFALAAQANAAALAFQAKAEAIAHQAIAIAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgKAEQgLAFgNAAQgLAAgMgFgAgRgmQgHAEgFAFQgFAGgDAHQgDAIgBAIQABAJADAIQADAHAFAGQAFAFAHAEQAJADAIAAQAJAAAIgDQAIgEAFgFQAGgGACgHQAEgIAAgJQAAgIgEgIQgCgHgGgGQgFgFgIgEQgIgDgJAAQgIAAgJADg");
	this.shape_657.setTransform(-211.9,-61.4);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#111111").s().p("AgdBOQgOgFgKgNIAQgKQAFAIAKAGQAJAFANAAIAMgBQAHgDAFgEQAFgDADgGQADgFAAgHQAAgIgDgGQgEgGgGgDQgGgEgIgCIgOgFIgQgGQgIgCgGgFQgGgFgDgHQgEgHAAgMQAAgLAFgIQAEgJAIgGQAHgGAKgCQAKgDAJAAQAOAAAMAEQALAFAKAKIgPALQgLgPgVAAIgMACQgGACgFADQgGADgDAGQgDAFAAAIQAAALAHAGQAGAFAJAFQAJADALAEQALADAKADQAJAGAGAIQAHAJAAAOQAAALgFAJQgFAIgIAGQgIAGgJADQgKADgJAAQgPAAgOgGg");
	this.shape_658.setTransform(-225.4,-64.1);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#111111").s().p("AgWAzQgLgEgIgHQgHgIgFgKQgFgKABgMQgBgLAFgKQAFgKAHgIQAIgHALgEQAKgFAMAAQANAAALAFQALAEAHAHQAIAIAEAKQAEAKABALQgBAMgEAKQgEAKgIAIQgHAHgLAEQgLAFgNAAQgMAAgKgFgAgRgmQgHAEgFAFQgGAGgCAHQgDAIAAAIQAAAJADAIQACAHAGAGQAFAFAHAEQAJADAIAAQAJAAAIgDQAIgEAGgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgGgFgIgEQgIgDgJAAQgIAAgJADg");
	this.shape_659.setTransform(223.9,-33.3);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#111111").s().p("AAGBEQgFgBgDgDQgEgEgDgFQgDgFABgJIAAhCIgYAAIAAgNIAYAAIAAgeIAOAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFACAEQABAEABACIAGADIAGAAIAIgBIAIgDIAAAOQgIAEgMAAIgJgBg");
	this.shape_660.setTransform(188.4,-34.7);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAIAAIAAgDQgBgbgcAAQgSAAgOAMIgKgKQAPgQAfAAQAIAAAHADQAHACAGAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAGABQgHAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQADAEADADIAJADIAJABQAIAAAGgDQAGgCAEgFQAEgFADgGQACgGAAgHIAAgIIgIAAIgQABg");
	this.shape_661.setTransform(95.4,-33.3);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgRAAIgFAAQgFABgHAEQgGAEgFAJQgEAIAAANIAAA2IgPAAIAAhRIgBgLIAAgMIAPAAIABAIIAAAJIABAAQACgFAEgDIAJgHIAKgEIALgBQAUAAAKALQALAKgBAUIAABCg");
	this.shape_662.setTransform(75.1,-33.5);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#111111").s().p("AAFBEQgFgBgCgDQgEgEgDgFQgDgFAAgJIAAhCIgWAAIAAgNIAWAAIAAgeIAPAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFABAEQACAEACACIAEADIAHAAIAIgBIAIgDIABAOQgJAEgMAAIgKgBg");
	this.shape_663.setTransform(-8.7,-34.7);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#111111").s().p("AgXBnIADgMIABAAIADABIAFAAQAGAAADgCQACgCACgDIACgIIAAgHIAAh7IAQAAIAAB+IgBAIQAAAFgCAGQgDAFgGAFQgHADgLAAQgGAAgHgCgAAEhWQgDgDAAgFQAAgFADgDQAEgCAEAAQAEAAAEACQAEADAAAFQAAAFgEADQgEADgEAAQgEAAgEgDg");
	this.shape_664.setTransform(-29.7,-33.2);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgHgIgFgKQgFgKAAgMQAAgLAFgKQAFgKAHgIQAIgHAKgEQAMgFALAAQANAAALAFQAKAEAIAHQAIAIAEAKQAFAKgBALQABAMgFAKQgEAKgIAIQgIAHgKAEQgLAFgNAAQgLAAgMgFgAgRgmQgHAEgFAFQgFAGgDAHQgEAIAAAIQAAAJAEAIQADAHAFAGQAFAFAHAEQAJADAIAAQAJAAAJgDQAHgEAFgFQAGgGACgHQADgIABgJQgBgIgDgIQgCgHgGgGQgFgFgHgEQgJgDgJAAQgIAAgJADg");
	this.shape_665.setTransform(-52.7,-33.3);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#111111").s().p("AgXBSQgKgEgIgHQgIgIgEgKQgFgKABgMQgBgMAFgKQAEgJAIgIQAIgHAKgEQALgFAMAAIALACQAHABAFACIALAGQAFAEAEAGIAAhTIAQAAIAACqIgQAAIAAgSQgEAGgFADIgLAHQgFACgHABIgLACQgMAAgLgFgAgRgHQgHAEgFAEQgGAGgCAHQgDAIgBAJQABAJADAIQACAHAGAGQAFAFAHAEQAJADAIAAQAJAAAIgDQAJgEAGgFQAFgGAEgHQADgIAAgJQAAgJgDgIQgEgHgFgGQgGgEgJgEQgIgDgJAAQgIAAgJADg");
	this.shape_666.setTransform(-86.8,-36.4);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#111111").s().p("AgXBSQgLgEgHgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgIQAHgHALgEQALgFAMAAIALACQAGABAGACIALAGQAFAEAEAGIAAhTIAPAAIAACqIgPAAIAAgSQgEAGgFADIgLAHQgGACgGABIgLACQgMAAgLgFgAgQgHQgIAEgGAEQgFAGgCAHQgEAIAAAJQAAAJAEAIQACAHAFAGQAGAFAIAEQAHADAJAAQAJAAAJgDQAHgEAGgFQAHgGACgHQAEgIAAgJQAAgJgEgIQgCgHgHgGQgGgEgHgEQgJgDgJAAQgJAAgHADg");
	this.shape_667.setTransform(-119.8,-36.4);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#111111").s().p("AgPBQIAAhpIAPAAIAABpgAgWguIAXghIAVAAIgdAhg");
	this.shape_668.setTransform(-128.6,-36);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#111111").s().p("AAGBEQgFgBgDgDQgEgEgDgFQgDgFABgJIAAhCIgYAAIAAgNIAYAAIAAgeIAOAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFACAEQABAEABACIAGADIAGAAIAIgBIAIgDIAAAOQgIAEgMAAIgJgBg");
	this.shape_669.setTransform(-215.7,-34.7);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAJAAIAAgDQgBgbgcAAQgSAAgPAMIgJgKQAQgQAeAAQAHAAAIADQAHACAGAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAGABQgHAAgIADQgJACgFAEQgGAFAAAIQAAAFADADQACAEADADIAJADIAJABQAHAAAHgDQAGgCAEgFQAFgFACgGQACgGAAgHIAAgIIgJAAIgPABg");
	this.shape_670.setTransform(-231.6,-33.3);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgGgJgSAAIgFAAQgFABgHAEQgGAEgFAJQgEAIAAANIAAA2IgPAAIAAhRIgBgLIAAgMIAQAAIAAAIIAAAJIABAAQACgFAEgDIAJgHIALgEIAKgBQAUAAAKALQAKAKAAAUIAABCg");
	this.shape_671.setTransform(254.3,-61.5);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgEgGQgDgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAHAAIAAgDQAAgbgcAAQgSAAgOAMIgKgKQAQgQAeAAQAHAAAIADQAHACAGAFQAGAEADAHQADAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAHABQgIAAgIADQgJACgFAEQgGAFAAAIQAAAFACADQACAEAFADIAIADIAJABQAHAAAHgDQAGgCAEgFQAEgFACgGQACgGAAgHIAAgIIgHAAIgPABg");
	this.shape_672.setTransform(222,-61.4);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#111111").s().p("AgXBSQgLgEgHgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgIQAHgHALgEQALgFAMAAIALACQAGABAGACIALAGQAFAEAEAGIAAhTIAPAAIAACqIgPAAIAAgSQgEAGgFADIgLAHQgGACgGABIgLACQgMAAgLgFgAgQgHQgIAEgGAEQgFAGgCAHQgEAIAAAJQAAAJAEAIQACAHAFAGQAGAFAIAEQAHADAJAAQAJAAAJgDQAHgEAGgFQAHgGACgHQAEgIAAgJQAAgJgEgIQgCgHgHgGQgGgEgHgEQgJgDgJAAQgJAAgHADg");
	this.shape_673.setTransform(208.7,-64.5);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAIAAIAAgDQAAgbgdAAQgSAAgOAMIgKgKQAPgQAfAAQAIAAAHADQAIACAFAFQAGAEACAHQAEAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAGABQgHAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQACAEAEADIAJADIAJABQAIAAAGgDQAGgCAEgFQAFgFABgGQADgGAAgHIAAgIIgIAAIgQABg");
	this.shape_674.setTransform(189.8,-61.4);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#111111").s().p("AgXBSQgLgEgHgHQgIgIgEgKQgEgKgBgMQABgMAEgKQAEgJAIgIQAHgHALgEQALgFAMAAIALACQAGABAGACIALAGQAFAEAEAGIAAhTIAPAAIAACqIgPAAIAAgSQgEAGgFADIgLAHQgGACgGABIgLACQgMAAgLgFgAgQgHQgIAEgGAEQgFAGgDAHQgDAIAAAJQAAAJADAIQADAHAFAGQAGAFAIAEQAIADAIAAQAJAAAJgDQAHgEAGgFQAHgGACgHQAEgIAAgJQAAgJgEgIQgCgHgHgGQgGgEgHgEQgJgDgJAAQgIAAgIADg");
	this.shape_675.setTransform(145.6,-64.5);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgIgIgEgKQgFgKABgMQgBgLAFgKQAEgKAIgIQAIgHAKgEQAMgFALAAQANAAALAFQAKAEAIAHQAIAIAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgKAEQgLAFgNAAQgLAAgMgFgAgRgmQgHAEgFAFQgFAGgDAHQgDAIgBAIQABAJADAIQADAHAFAGQAFAFAHAEQAJADAIAAQAJAAAJgDQAHgEAFgFQAGgGACgHQAEgIAAgJQAAgIgEgIQgCgHgGgGQgFgFgHgEQgJgDgJAAQgIAAgJADg");
	this.shape_676.setTransform(115.3,-61.4);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#111111").s().p("AgdA2IAAhHIAAgPIgBgSIAPAAIAAATIABAAIAEgIIAIgHIAJgFQAGgCAHAAQAHAAAEABIgDAPIgJgBQgJAAgGADQgFADgEAFQgFAGgCAFQgCAGAAAGIAAA6g");
	this.shape_677.setTransform(48,-61.5);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgRAAIgFAAQgFABgHAEQgGAEgFAJQgEAIAAANIAAA2IgPAAIAAhRIgBgLIAAgMIAPAAIABAIIAAAJIABAAQACgFAEgDIAJgHIAKgEIALgBQAUAAAKALQALAKgBAUIAABCg");
	this.shape_678.setTransform(23.4,-61.5);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_679.setTransform(10.5,-61.4);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#111111").s().p("AAGBEQgGgBgCgDQgEgEgDgFQgCgFAAgJIAAhCIgYAAIAAgNIAYAAIAAgeIAOAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFACAEQABAEACACIAEADIAHAAIAIgBIAIgDIAAAOQgIAEgMAAIgJgBg");
	this.shape_680.setTransform(0.1,-62.7);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_681.setTransform(-26.9,-61.4);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#111111").s().p("AgXBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgIQAIgHAKgEQALgFAMAAIALACQAHABAFACIALAGQAFAEAEAGIAAhTIAPAAIAACqIgPAAIAAgSQgEAGgFADIgLAHQgFACgHABIgLACQgMAAgLgFgAgRgHQgHAEgFAEQgGAGgCAHQgEAIAAAJQAAAJAEAIQACAHAGAGQAFAFAHAEQAJADAIAAQAJAAAJgDQAHgEAGgFQAHgGACgHQAEgIAAgJQAAgJgEgIQgCgHgHgGQgGgEgHgEQgJgDgJAAQgIAAgJADg");
	this.shape_682.setTransform(-41,-64.5);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_683.setTransform(-54.3,-61.4);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#111111").s().p("Ag5BXIAAiqIAPAAIAAASIABAAQADgGAGgEIAKgGQAGgCAGgBIAKgCQANAAALAFQAKAEAIAHQAIAIAEAKQAFAKAAAMQAAAMgFAKQgEAJgIAIQgIAHgKAEQgLAFgNAAIgKgCQgGgBgGgCQgFgDgFgEQgGgDgDgGIgBAAIAABTgAgRhFQgHAEgGAFQgHAGgCAHQgEAIAAAJQAAAJAEAIQACAHAHAGQAGAEAHAEQAJADAIAAQAKAAAHgDQAIgEAGgEQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgFgIgEQgHgDgKAAQgIAAgJADg");
	this.shape_684.setTransform(-80.7,-58.3);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#111111").s().p("AgTAzQgKgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHAKgEQAKgFAKAAQANAAAKAFQAKAEAGAHQAHAHAEAKQADAJAAALIAAAGIhbAAQABAIADAHQAEAHAFAFQAGAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgHIAMAJQgKAMgMAFQgMAGgNAAQgLAAgLgFgAgMgmQgHADgFAEQgGAFgDAGQgDAGAAAHIBJAAQAAgPgJgKQgKgJgRAAQgGAAgHADg");
	this.shape_685.setTransform(-111.3,-61.4);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgGgJgSAAIgFAAQgFABgHAEQgGAEgFAJQgEAIAAANIAAA2IgPAAIAAhRIgBgLIAAgMIAQAAIAAAIIAAAJIABAAQACgFAEgDIAJgHIALgEIAKgBQAUAAAKALQAKAKAAAUIAABCg");
	this.shape_686.setTransform(-124.6,-61.5);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgHgIgFgKQgEgKgBgMQABgLAEgKQAFgKAHgIQAIgHAKgEQALgFAMAAQANAAAKAFQALAEAIAHQAIAIAEAKQAFAKgBALQABAMgFAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgMAAgLgFgAgQgmQgIAEgFAFQgGAGgDAHQgDAIAAAIQAAAJADAIQADAHAGAGQAFAFAIAEQAIADAIAAQAJAAAJgDQAHgEAFgFQAGgGACgHQADgIAAgJQAAgIgDgIQgCgHgGgGQgFgFgHgEQgJgDgJAAQgIAAgIADg");
	this.shape_687.setTransform(-137.9,-61.4);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#111111").s().p("Ag6BXIAAiqIAQAAIAAASIAAAAQAEgGAFgEIALgGQAFgCAHgBIAKgCQANAAALAFQAKAEAJAHQAHAIAEAKQAEAKAAAMQAAAMgEAKQgEAJgHAIQgJAHgKAEQgLAFgNAAIgKgCQgHgBgFgCQgGgDgFgEQgFgDgEgGIAAAAIAABTgAgRhFQgIAEgGAFQgFAGgEAHQgDAIAAAJQAAAJADAIQAEAHAFAGQAGAEAIAEQAJADAIAAQAKAAAIgDQAHgEAFgEQAGgGADgHQADgIAAgJQAAgJgDgIQgDgHgGgGQgFgFgHgEQgIgDgKAAQgIAAgJADg");
	this.shape_688.setTransform(-151.7,-58.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgEgGQgDgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAHAAIAAgDQAAgbgcAAQgSAAgOAMIgKgKQAQgQAeAAQAHAAAIADQAHACAGAFQAGAEADAHQADAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAHABQgIAAgIADQgJACgFAEQgGAFAAAIQAAAFACADQACAEAFADIAIADIAJABQAHAAAHgDQAGgCAEgFQAEgFACgGQACgGAAgHIAAgIIgHAAIgPABg");
	this.shape_689.setTransform(-171.3,-61.4);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#111111").s().p("AgeBMQgNgFgKgLIALgLQAHAIALAGQALAFANAAQALAAAIgDQAIgEAFgFQAFgGADgIQACgHAAgJIAAgTIgBAAQgHALgLAFQgLAEgMAAQgLAAgKgEQgLgEgHgHQgIgHgFgJQgEgKAAgLQAAgMAEgKQAEgKAIgHQAHgIALgEQAKgEAMAAIAJABIALADQAGACAFAEQAGAEAEAGIABAAIAAgRIAPAAIAABnQAAAJgCAKQgCAJgGAJQgHAIgLAFQgMAFgSAAQgQAAgNgFgAgOg/QgIADgFAGQgGAFgDAHQgDAIAAAIQAAAIADAIQADAHAGAFQAFAFAIADQAHAEAIAAQAIAAAIgDQAHgDAGgFQAGgFADgHQAEgIgBgJQAAgIgCgIQgDgHgGgFQgFgGgIgDQgIgDgJAAQgIAAgHADg");
	this.shape_690.setTransform(-184.6,-58.8);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#111111").s().p("AgXAzQgLgFgIgLIAOgJQAFAHAHAFQAHAEAJAAIAJgBIAJgDQADgCADgEQACgDAAgFQAAgHgGgEQgHgEgIgCIgOgDIgIgCQgFgCgEgCQgFgDgDgFQgEgFAAgIQAAgIAEgGQADgGAGgEQAGgEAHgCQAHgCAHAAQAMAAAKAFQAJAEAGAKIgOAJQgEgGgFgEQgGgEgJAAIgHABIgHADQgEACgCADQgCACAAAFQAAAHAGAEQAFADAKADIAQADQALADAIAGQAIAIAAALQAAAJgEAGQgEAGgGAEQgGAEgHACQgIACgIAAQgMAAgLgFg");
	this.shape_691.setTransform(-202.9,-61.4);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#111111").s().p("AgWAzQgLgEgIgHQgIgIgEgKQgFgKABgMQgBgLAFgKQAEgKAIgIQAIgHALgEQAKgFAMAAQANAAALAFQALAEAHAHQAIAIAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgHAHgLAEQgLAFgNAAQgMAAgKgFgAgRgmQgHAEgFAFQgFAGgDAHQgDAIAAAIQAAAJADAIQADAHAFAGQAFAFAHAEQAJADAIAAQAKAAAHgDQAIgEAGgFQAFgGACgHQAEgIAAgJQAAgIgEgIQgCgHgFgGQgGgFgIgEQgHgDgKAAQgIAAgJADg");
	this.shape_692.setTransform(-214.9,-61.4);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgQAAIgGAAQgGABgFAEQgHAEgEAJQgFAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIAQAAIABAIIAAAJIAAAAQADgFAEgDIAJgHIAKgEIAKgBQAWAAAKALQAJAKABAUIAABCg");
	this.shape_693.setTransform(-240.7,-61.5);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#111111").s().p("Ag0BQIAAifIBmAAIAAAPIhVAAIAAA2IBQAAIAAAOIhQAAIAAA9IBYAAIAAAPg");
	this.shape_694.setTransform(-253.5,-64.1);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#111111").s().p("Ag6BXIAAiqIAQAAIAAASIAAAAQAEgGAGgEIAKgGQAGgCAGgBIAKgCQANAAALAFQALAEAHAHQAIAIAFAKQADAKAAAMQAAAMgDAKQgFAJgIAIQgHAHgLAEQgLAFgNAAIgKgCQgGgBgGgCQgGgDgEgEQgGgDgEgGIAAAAIAABTgAgQhFQgIAEgHAFQgGAGgDAHQgDAIAAAJQAAAJADAIQADAHAGAGQAHAEAIAEQAIADAIAAQAKAAAIgDQAHgEAFgEQAGgGADgHQADgIAAgJQAAgJgDgIQgDgHgGgGQgFgFgHgEQgIgDgKAAQgIAAgIADg");
	this.shape_695.setTransform(110,16);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgQAAIgGAAQgFABgGAEQgGAEgGAJQgEAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIARAAIAAAIIAAAJIABAAQACgFAEgDIAJgHIALgEIAKgBQAVAAAJALQALAKAAAUIAABCg");
	this.shape_696.setTransform(71.4,12.7);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgEgEgDgFQgCgFgBgJIAAhCIgWAAIAAgNIAWAAIAAgeIAPAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFABAEQABAEACACIAFADIAHAAIAIgBIAIgDIABAOQgJAEgMAAIgKgBg");
	this.shape_697.setTransform(-141.2,11.5);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#111111").s().p("AArBXIAAhTQgEAGgFADIgLAHQgFACgHABIgLACQgMAAgLgFQgKgEgIgHQgIgIgEgJQgFgKABgMQgBgMAFgKQAEgKAIgIQAIgHAKgEQALgFAMAAIALACQAHABAFACIALAGQAFAEAEAGIAAgSIAQAAIAACqgAgRhFQgHAEgFAFQgGAGgCAHQgDAIgBAJQABAJADAIQACAHAGAGQAFAEAHAEQAJADAIAAQAJAAAJgDQAIgEAGgEQAFgGAEgHQADgIAAgJQAAgJgDgIQgEgHgFgGQgGgFgIgEQgJgDgJAAQgIAAgJADg");
	this.shape_698.setTransform(200.8,-12);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQABgbgdAAQgSAAgPAMIgJgKQAQgQAeAAQAIAAAHADQAHACAGAFQAGAEADAHQADAHAAAKIAAAuIAAANIACALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgIACgGAEQgGAFAAAIQAAAFADADQABAEAFADIAIADIAJABQAIAAAGgDQAGgCAEgFQAEgFADgGQABgGAAgHIAAgIIgIAAIgOABg");
	this.shape_699.setTransform(161.1,-15.1);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#111111").s().p("Ag6BXIAAiqIAQAAIAAASIAAAAQAEgGAFgEIALgGQAGgCAGgBIAKgCQANAAALAFQAKAEAJAHQAHAIAEAKQAEAKAAAMQAAAMgEAKQgEAJgHAIQgJAHgKAEQgLAFgNAAIgKgCQgGgBgGgCQgGgDgFgEQgFgDgEgGIAAAAIAABTgAgRhFQgIAEgGAFQgFAGgEAHQgDAIAAAJQAAAJADAIQAEAHAFAGQAGAEAIAEQAJADAIAAQAKAAAIgDQAHgEAFgEQAGgGADgHQADgIAAgJQAAgJgDgIQgDgHgGgGQgFgFgHgEQgIgDgKAAQgIAAgJADg");
	this.shape_700.setTransform(148.5,-12);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQABgbgdAAQgSAAgPAMIgJgKQAQgQAeAAQAIAAAHADQAIACAFAFQAGAEADAHQADAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgIACgGAEQgGAFAAAIQAAAFADADQABAEAFADIAIADIAJABQAIAAAGgDQAGgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgOABg");
	this.shape_701.setTransform(122.4,-15.1);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgDgDAAgEQAAgFADgEQAEgCADAAQAEAAAEACQADAEAAAFQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_702.setTransform(113.8,-17.6);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQABgbgdAAQgSAAgPAMIgJgKQAQgQAeAAQAHAAAIADQAIACAFAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgIACgGAEQgGAFAAAIQAAAFADADQACAEADADIAJADIAJABQAIAAAGgDQAGgCAEgFQAFgFACgGQABgGAAgHIAAgIIgIAAIgOABg");
	this.shape_703.setTransform(75.9,-15.1);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgQAAIgGAAQgFABgGAEQgGAEgGAJQgEAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIARAAIAAAIIAAAJIABAAQACgFAEgDIAJgHIALgEIAJgBQAWAAAJALQALAKAAAUIAABCg");
	this.shape_704.setTransform(-39.8,-15.2);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgDgDAAgEQAAgFADgEQAEgCADAAQAEAAAEACQADAEAAAFQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_705.setTransform(-111.6,-17.6);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgEgEgDgFQgCgFgBgJIAAhCIgWAAIAAgNIAWAAIAAgeIAPAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFABAEQABAEACACIAFADIAHAAIAIgBIAIgDIABAOQgJAEgMAAIgKgBg");
	this.shape_706.setTransform(-212.7,-16.4);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgGgJgRAAIgGAAQgGABgFAEQgHAEgEAJQgFAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIAQAAIABAIIAAAJIAAAAQADgFAEgDIAJgHIAKgEQAFgBAFAAQAWAAAKALQAKAKAAAUIAABCg");
	this.shape_707.setTransform(239.5,-43.3);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#111111").s().p("AgPBQIAAhpIAPAAIAABpgAgVguIAWghIAWAAIgfAhg");
	this.shape_708.setTransform(185,-45.8);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAIAAIAAgDQAAgbgdAAQgSAAgOAMIgKgKQAPgQAfAAQAIAAAHADQAIACAFAFQAGAEACAHQAEAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAGABQgHAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQACAEAFADIAIADIAJABQAIAAAGgDQAGgCAEgFQAFgFABgGQADgGAAgHIAAgIIgIAAIgQABg");
	this.shape_709.setTransform(175,-43.1);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#111111").s().p("AgWAzQgLgEgIgHQgIgIgEgKQgFgKABgMQgBgLAFgKQAEgKAIgIQAIgHALgEQAKgFAMAAQANAAALAFQALAEAHAHQAIAIAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgHAHgLAEQgLAFgNAAQgMAAgKgFgAgRgmQgHAEgFAFQgFAGgDAHQgDAIAAAIQAAAJADAIQADAHAFAGQAFAFAHAEQAJADAIAAQAKAAAHgDQAIgEAGgFQAFgGACgHQAEgIAAgJQAAgIgEgIQgCgHgFgGQgGgFgIgEQgHgDgKAAQgIAAgJADg");
	this.shape_710.setTransform(110.4,-43.1);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgGgJgSAAIgFAAQgGABgGAEQgFAEgFAJQgFAIAAANIAAA2IgPAAIAAhRIgBgLIgBgMIAQAAIABAIIAAAJIAAAAQADgFAEgDIAJgHIAKgEQAFgBAFAAQAVAAALALQAKAKgBAUIAABCg");
	this.shape_711.setTransform(-12.4,-43.3);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#111111").s().p("AgWAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAFgKAHgIQAIgHALgEQALgFALAAQANAAAKAFQAMAEAHAHQAIAIAEAKQAEAKABALQgBAMgEAKQgEAKgIAIQgHAHgMAEQgKAFgNAAQgLAAgLgFgAgRgmQgHAEgFAFQgGAGgDAHQgCAIAAAIQAAAJACAIQADAHAGAGQAFAFAHAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgGADgHQACgIAAgJQAAgIgCgIQgDgHgFgGQgGgFgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_712.setTransform(-25.7,-43.1);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#111111").s().p("Ag6BXIAAiqIAQAAIAAASIABAAQADgGAGgEIAKgGQAFgCAHgBQAFgCAFAAQANAAALAFQALAEAHAHQAIAIAFAKQADAKAAAMQAAAMgDAKQgFAJgIAIQgHAHgLAEQgLAFgNAAIgKgCQgHgBgFgCQgGgDgEgEQgGgDgDgGIgBAAIAABTgAgQhFQgIAEgHAFQgFAGgEAHQgDAIAAAJQAAAJADAIQAEAHAFAGQAHAEAIAEQAHADAJAAQAKAAAIgDQAHgEAFgEQAGgGADgHQADgIAAgJQAAgJgDgIQgDgHgGgGQgFgFgHgEQgIgDgKAAQgJAAgHADg");
	this.shape_713.setTransform(-39.5,-40);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgQAAIgGAAQgGABgFAEQgHAEgEAJQgFAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIAQAAIABAIIAAAJIAAAAQADgFAEgDIAJgHIAKgEQAFgBAFAAQAWAAAKALQAJAKABAUIAABCg");
	this.shape_714.setTransform(-124.2,-43.3);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAIAAIAAgDQAAgbgdAAQgSAAgOAMIgKgKQAPgQAfAAQAIAAAHADQAIACAFAFQAGAEACAHQAEAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAGABQgHAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQACAEAEADIAJADIAJABQAIAAAGgDQAGgCAEgFQAFgFABgGQADgGAAgHIAAgIIgIAAIgQABg");
	this.shape_715.setTransform(-164.3,-43.1);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#111111").s().p("AAGBEQgFgBgDgDQgEgEgDgFQgDgFABgJIAAhCIgYAAIAAgNIAYAAIAAgeIAOAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFACAEQABAEACACIAFADIAGAAIAIgBIAIgDIAAAOQgIAEgMAAIgJgBg");
	this.shape_716.setTransform(126.2,12.8);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgRAAIgFAAQgGABgGAEQgFAEgFAJQgFAIAAANIAAA2IgPAAIAAhRIgBgLIAAgMIAPAAIABAIIAAAJIAAAAQADgFAEgDIAJgHIAKgEIALgBQAUAAAKALQALAKgBAUIAABCg");
	this.shape_717.setTransform(76.8,14);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAVgBIAIAAIAAgDQAAgbgcAAQgSAAgPAMIgJgKQAQgQAeAAQAIAAAHADQAHACAGAFQAFAEAEAHQADAHAAAKIAAAuIAAANIACALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgJACgFAEQgGAFAAAIQAAAFADADQABAEAFADIAIADIAJABQAHAAAHgDQAGgCAEgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgOABg");
	this.shape_718.setTransform(211.6,-13.8);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgDgDAAgEQAAgGADgCQAEgDADAAQAEAAAEADQADACAAAGQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_719.setTransform(144.3,-16.4);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQAAgbgcAAQgSAAgPAMIgJgKQAPgQAfAAQAHAAAIADQAHACAGAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAGABQgHAAgIADQgJACgFAEQgGAFAAAIQAAAFADADQACAEADADIAJADIAJABQAHAAAHgDQAGgCAEgFQAFgFACgGQACgGgBgHIAAgIIgIAAIgPABg");
	this.shape_720.setTransform(106.4,-13.8);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#111111").s().p("AgWAzQgLgEgIgHQgIgIgEgKQgEgKgBgMQABgLAEgKQAEgKAIgIQAIgHALgEQALgFALAAQANAAAKAFQALAEAIAHQAIAIAEAKQAEAKABALQgBAMgEAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgLAAgLgFgAgQgmQgIAEgFAFQgGAGgDAHQgCAIAAAIQAAAJACAIQADAHAGAGQAFAFAIAEQAHADAJAAQAKAAAHgDQAIgEAGgFQAFgGADgHQACgIAAgJQAAgIgCgIQgDgHgFgGQgGgFgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_721.setTransform(41.9,-13.8);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgDgDAAgEQAAgGADgCQAEgDADAAQAEAAAEADQADACAAAGQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_722.setTransform(-81.1,-16.4);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgHgIgFgKQgEgKgBgMQABgLAEgKQAFgKAHgIQAIgHAKgEQALgFAMAAQANAAAKAFQALAEAIAHQAIAIAEAKQAFAKgBALQABAMgFAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgMAAgLgFgAgQgmQgIAEgFAFQgGAGgDAHQgDAIAAAIQAAAJADAIQADAHAGAGQAFAFAIAEQAIADAIAAQAJAAAJgDQAHgEAFgFQAGgGACgHQADgIAAgJQAAgIgDgIQgCgHgGgGQgFgFgHgEQgJgDgJAAQgIAAgIADg");
	this.shape_723.setTransform(-178.4,-13.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgDgDAAgEQAAgGADgCQAEgDADAAQAEAAAEADQADACAAAGQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_724.setTransform(-188.2,-16.4);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#111111").s().p("AgsA1IAAgLIBAhQIg9AAIAAgOIBUAAIAAALIhABQIBBAAIAAAOg");
	this.shape_725.setTransform(-219.5,-13.8);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#111111").s().p("Ag5BXIAAiqIAPAAIAAASIABAAQADgGAGgEIAKgGQAGgCAGgBIAKgCQANAAALAFQALAEAHAHQAIAIAEAKQAFAKAAAMQAAAMgFAKQgEAJgIAIQgHAHgLAEQgLAFgNAAIgKgCQgGgBgGgCQgFgDgFgEQgGgDgDgGIgBAAIAABTgAgRhFQgIAEgFAFQgHAGgCAHQgEAIAAAJQAAAJAEAIQACAHAHAGQAFAEAIAEQAIADAJAAQAKAAAHgDQAIgEAGgEQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgFgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_726.setTransform(-257.5,-10.7);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#111111").s().p("AgWAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAFgKAHgIQAIgHALgEQALgFALAAQANAAAKAFQAMAEAHAHQAIAIAEAKQAEAKABALQgBAMgEAKQgEAKgIAIQgHAHgMAEQgKAFgNAAQgLAAgLgFgAgRgmQgHAEgFAFQgGAGgDAHQgCAIAAAIQAAAJACAIQADAHAGAGQAFAFAHAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgGADgHQADgIAAgJQAAgIgDgIQgDgHgFgGQgGgFgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_727.setTransform(157.9,-41.9);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#111111").s().p("AgWBSQgLgEgIgHQgIgIgEgKQgEgKgBgMQABgMAEgKQAEgJAIgIQAIgHALgEQAKgFAMAAIAMACQAFABAGACIALAGQAFAEAEAGIAAhTIAQAAIAACqIgQAAIAAgSQgEAGgFADIgLAHQgGACgFABIgMACQgMAAgKgFgAgQgHQgIAEgGAEQgFAGgDAHQgCAIAAAJQAAAJACAIQADAHAFAGQAGAFAIAEQAHADAJAAQAKAAAHgDQAJgEAFgFQAGgGADgHQAEgIAAgJQAAgJgEgIQgDgHgGgGQgFgEgJgEQgHgDgKAAQgJAAgHADg");
	this.shape_728.setTransform(48.6,-45);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#111111").s().p("AgWAzQgLgEgIgHQgIgIgEgKQgEgKgBgMQABgLAEgKQAEgKAIgIQAIgHALgEQALgFALAAQANAAAKAFQALAEAIAHQAIAIAEAKQAEAKAAALQAAAMgEAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgLAAgLgFgAgQgmQgIAEgFAFQgFAGgEAHQgDAIAAAIQAAAJADAIQAEAHAFAGQAFAFAIAEQAHADAJAAQAKAAAIgDQAHgEAGgFQAFgGADgHQACgIAAgJQAAgIgCgIQgDgHgFgGQgGgFgHgEQgIgDgKAAQgJAAgHADg");
	this.shape_729.setTransform(21.7,-41.9);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#111111").s().p("Ag6BXIAAiqIAQAAIAAASIAAAAQAEgGAFgEIALgGQAGgCAGgBIAKgCQANAAALAFQALAEAIAHQAHAIAFAKQADAKAAAMQAAAMgDAKQgFAJgHAIQgIAHgLAEQgLAFgNAAIgKgCQgGgBgGgCQgGgDgFgEQgFgDgEgGIAAAAIAABTgAgQhFQgIAEgHAFQgFAGgEAHQgDAIAAAJQAAAJADAIQAEAHAFAGQAHAEAIAEQAHADAJAAQAKAAAIgDQAHgEAFgEQAGgGADgHQADgIAAgJQAAgJgDgIQgDgHgGgGQgFgFgHgEQgIgDgKAAQgJAAgHADg");
	this.shape_730.setTransform(8,-38.8);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgHgIgFgKQgEgKgBgMQABgLAEgKQAFgKAHgIQAIgHAKgEQALgFAMAAQANAAAKAFQALAEAIAHQAIAIAEAKQAFAKgBALQABAMgFAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgMAAgLgFgAgQgmQgIAEgFAFQgGAGgDAHQgDAIAAAIQAAAJADAIQADAHAGAGQAFAFAIAEQAIADAIAAQAJAAAJgDQAHgEAFgFQAGgGACgHQADgIAAgJQAAgIgDgIQgCgHgGgGQgFgFgHgEQgJgDgJAAQgIAAgIADg");
	this.shape_731.setTransform(-45.2,-41.9);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgGgJgSAAIgFAAQgGABgGAEQgFAEgFAJQgFAIAAANIAAA2IgPAAIAAhRIgBgLIgBgMIAQAAIABAIIAAAJIAAAAQADgFAEgDIAJgHIAKgEIAKgBQAVAAALALQAKAKgBAUIAABCg");
	this.shape_732.setTransform(-76.7,-42);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAJAAIAAgDQgBgbgcAAQgSAAgPAMIgJgKQAQgQAeAAQAHAAAIADQAHACAGAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAGABQgHAAgIADQgJACgFAEQgGAFAAAIQAAAFADADQACAEADADIAJADIAJABQAHAAAHgDQAGgCAEgFQAFgFACgGQACgGAAgHIAAgIIgJAAIgPABg");
	this.shape_733.setTransform(-116.9,-41.9);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAIAAIAAgDQAAgbgdAAQgSAAgOAMIgKgKQAPgQAfAAQAHAAAIADQAIACAFAFQAGAEADAHQADAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAGABQgHAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQADAEAEADIAIADIAJABQAIAAAGgDQAGgCAEgFQAEgFACgGQACgGABgHIAAgIIgIAAIgQABg");
	this.shape_734.setTransform(-161.3,-41.9);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#111111").s().p("Ag0BQIAAifIBmAAIAAAPIhVAAIAAA2IBPAAIAAAOIhPAAIAAA9IBYAAIAAAPg");
	this.shape_735.setTransform(-191.2,-44.6);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#111111").s().p("AAgA2IAAg5QAAgSgGgJQgHgJgRAAIgFAAQgFABgHAEQgGAEgEAJQgFAIAAANIAAA2IgPAAIAAhRIgBgLIAAgMIAPAAIABAIIAAAJIABAAQACgFAEgDIAJgHIAKgEIALgBQAUAAAKALQALAKgBAUIAABCg");
	this.shape_736.setTransform(100.3,14);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#111111").s().p("AgXAzQgKgEgIgHQgIgIgEgKQgEgKgBgMQABgLAEgKQAEgKAIgIQAIgHAKgEQAMgFALAAQANAAAKAFQALAEAIAHQAIAIAEAKQAEAKAAALQAAAMgEAKQgEAKgIAIQgIAHgLAEQgKAFgNAAQgLAAgMgFgAgQgmQgIAEgFAFQgFAGgEAHQgDAIAAAIQAAAJADAIQAEAHAFAGQAFAFAIAEQAHADAJAAQAKAAAIgDQAHgEAGgFQAFgGADgHQACgIAAgJQAAgIgCgIQgDgHgFgGQgGgFgHgEQgIgDgKAAQgJAAgHADg");
	this.shape_737.setTransform(87,14.1);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#111111").s().p("AArBXIAAhTQgEAGgFADIgLAHQgFACgHABIgLACQgMAAgLgFQgKgEgIgHQgIgIgEgJQgFgKABgMQgBgMAFgKQAEgKAIgIQAIgHAKgEQALgFAMAAIALACQAHABAFACIALAGQAFAEAEAGIAAgSIAQAAIAACqgAgRhFQgHAEgFAFQgGAGgCAHQgDAIgBAJQABAJADAIQACAHAGAGQAFAEAHAEQAJADAIAAQAJAAAIgDQAJgEAGgEQAFgGAEgHQADgIAAgJQAAgJgDgIQgEgHgFgGQgGgFgJgEQgIgDgJAAQgIAAgJADg");
	this.shape_738.setTransform(-177.2,17.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAWgBIAIAAIAAgDQgBgbgcAAQgSAAgOAMIgKgKQAPgQAfAAQAIAAAHADQAHACAGAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAGABQgHAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQADAEADADIAJADIAJABQAIAAAGgDQAGgCAEgFQAEgFADgGQACgGAAgHIAAgIIgIAAIgQABg");
	this.shape_739.setTransform(245.3,-13.8);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#111111").s().p("AgWBSQgLgEgIgHQgIgIgEgKQgEgKAAgMQAAgMAEgKQAEgJAIgIQAIgHALgEQAKgFAMAAIAMACQAFABAGACIALAGQAFAEAEAGIAAhTIAQAAIAACqIgQAAIAAgSQgEAGgFADIgLAHQgGACgFABIgMACQgMAAgKgFgAgRgHQgHAEgGAEQgFAGgDAHQgCAIAAAJQAAAJACAIQADAHAFAGQAGAFAHAEQAIADAJAAQAKAAAHgDQAIgEAHgFQAFgGAEgHQADgIAAgJQAAgJgDgIQgEgHgFgGQgHgEgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_740.setTransform(-9.1,-16.9);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgFgEgDgGQgEgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAWgBIAIAAIAAgDQgBgbgcAAQgSAAgOAMIgKgKQAPgQAfAAQAIAAAHADQAHACAGAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAGABQgHAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQADAEADADIAJADIAJABQAHAAAHgDQAGgCAEgFQAEgFADgGQACgGAAgHIAAgIIgIAAIgQABg");
	this.shape_741.setTransform(-28.8,-13.8);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#111111").s().p("Ag5BXIAAiqIAPAAIAAASIAAAAQAEgGAFgEIALgGQAGgCAGgBIAKgCQANAAALAFQAKAEAJAHQAHAIAEAKQAFAKAAAMQAAAMgFAKQgEAJgHAIQgJAHgKAEQgLAFgNAAIgKgCQgGgBgGgCQgFgDgGgEQgFgDgEgGIAAAAIAABTgAgRhFQgHAEgGAFQgHAGgCAHQgEAIAAAJQAAAJAEAIQACAHAHAGQAGAEAHAEQAJADAIAAQAKAAAHgDQAIgEAGgEQAFgGADgHQADgIAAgJQAAgJgDgIQgDgHgFgGQgGgFgIgEQgHgDgKAAQgIAAgJADg");
	this.shape_742.setTransform(-204.1,-10.7);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#111111").s().p("AAGBEQgFgBgDgDQgEgEgDgFQgDgFABgJIAAhCIgYAAIAAgNIAYAAIAAgeIAOAAIAAAeIAgAAIAAANIggAAIAAA+QAAAFACAEQABAEABACIAGADIAGAAIAIgBIAIgDIAAAOQgIAEgMAAIgJgBg");
	this.shape_743.setTransform(-235.5,-15.2);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGAKgEQALgDALgBIAVgBIAIAAIAAgDQABgbgdAAQgSAAgPAMIgJgKQAQgQAeAAQAHAAAIADQAIACAFAFQAFAEADAHQAEAHAAAKIAAAuIABANIABALIgPAAIgCgJIAAgIIAAAAQgHAKgJAFQgKAFgMAAQgHAAgHgCgAAHABQgIAAgIADQgIACgGAEQgGAFAAAIQAAAFADADQABAEAEADIAJADIAJABQAIAAAGgDQAGgCAEgFQAFgFACgGQABgGAAgHIAAgIIgIAAIgOABg");
	this.shape_744.setTransform(-245.8,-13.8);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#111111").s().p("ABDA2IAAg8QAAgQgGgJQgGgIgQAAQgIAAgGADQgGADgEAGQgDAFgCAHQgCAHAAAHIAAA3IgOAAIAAg8QAAgQgGgJQgGgIgQAAIgGAAQgFABgGAEQgFAEgFAJQgEAIAAANIAAA2IgPAAIAAhRIgBgMIgBgLIARAAIAAAQIABAAQAFgKAKgEQAKgFAKAAIAKABQAFABAEACQAFACAEAFQADAEADAHQAFgKAKgGQAKgGALAAQAVAAALALQAKAKAAAUIAABCg");
	this.shape_745.setTransform(-132.9,-42);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#111111").s().p("AgWA2QgHgCgFgEQgGgEgDgGQgDgGAAgHQAAgNAHgIQAHgGALgEQAKgDALgBIAWgBIAIAAIAAgDQAAgbgdAAQgSAAgOAMIgKgKQAPgQAfAAQAHAAAIADQAIACAFAFQAGAEADAHQADAHAAAKIAAAuIAAANIACALIgPAAIgBgJIAAgIIgBAAQgHAKgJAFQgJAFgNAAQgHAAgHgCgAAGABQgHAAgIADQgIACgGAEQgGAFAAAIQAAAFACADQADAEAEADIAIADIAJABQAIAAAGgDQAGgCAEgFQAEgFACgGQACgGABgHIAAgIIgIAAIgQABg");
	this.shape_746.setTransform(-161.3,-41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116,p:{x:-224,y:-63}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113,p:{x:-182.5,y:-60.1}},{t:this.shape_112,p:{x:-163,y:-60.2}},{t:this.shape_111,p:{x:-151,y:-60}},{t:this.shape_110,p:{x:-141.4,y:-62.9}},{t:this.shape_109,p:{x:-131.6,y:-63.5}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:-97.9,y:-54}},{t:this.shape_105,p:{x:-81.8,y:-60.2}},{t:this.shape_104,p:{x:-69.8,y:-60}},{t:this.shape_103,p:{x:-60.2,y:-62.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:-25,y:-60.1}},{t:this.shape_99},{t:this.shape_98,p:{x:8.6,y:-63.6}},{t:this.shape_97},{t:this.shape_96,p:{x:30.9,y:-60.1}},{t:this.shape_95},{t:this.shape_94,p:{x:63.9,y:-60.1}},{t:this.shape_93,p:{x:80.6,y:-60.3}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{x:126.2,y:-57.3}},{t:this.shape_89},{t:this.shape_88,p:{x:159,y:-60.1}},{t:this.shape_87,p:{x:171.3,y:-60.1}},{t:this.shape_86,p:{x:183.5,y:-60.1}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83,p:{x:213.6,y:-60.1}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80,p:{x:-204.6,y:-30.3}},{t:this.shape_79,p:{x:-185.1,y:-30.4}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{x:-140.1,y:-30.3}},{t:this.shape_74},{t:this.shape_73,p:{x:-106,y:-30.3}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:-44.2,y:-30.3}},{t:this.shape_67,p:{x:-24.2,y:-30.3}},{t:this.shape_66},{t:this.shape_65,p:{x:5.8,y:-30.5}},{t:this.shape_64},{t:this.shape_63,p:{x:32.7,y:-30.3}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59,p:{x:72.6,y:-30.3}},{t:this.shape_58,p:{x:89.2,y:-33.8}},{t:this.shape_57,p:{x:98.8,y:-30.3}},{t:this.shape_56,p:{x:115.5,y:-30.5}},{t:this.shape_55,p:{x:131.8,y:-30.3}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:172.6,y:-30.3}},{t:this.shape_51,p:{x:185.1,y:-30.4}},{t:this.shape_50,p:{x:193.7,y:-33.1}},{t:this.shape_49},{t:this.shape_48,p:{x:212.7,y:-30.3}},{t:this.shape_47,p:{x:-222.2,y:-3.9}},{t:this.shape_46},{t:this.shape_45,p:{x:-188.1,y:-0.7}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:-135.8,y:-0.5}},{t:this.shape_40,p:{x:-115.4,y:-0.5}},{t:this.shape_39,p:{x:-105.8,y:-4}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:-48.8,y:-0.5}},{t:this.shape_34,p:{x:-37.1,y:-0.7}},{t:this.shape_33,p:{x:-31.3,y:-3.3}},{t:this.shape_32},{t:this.shape_31,p:{x:-13.1,y:-4}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:71.9,y:-0.4}},{t:this.shape_24,p:{x:85.3,y:-0.5}},{t:this.shape_23},{t:this.shape_22,p:{x:113.2,y:-0.5}},{t:this.shape_21,p:{x:126.4,y:-0.7}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:183.4,y:-0.6}},{t:this.shape_16,p:{x:191.6,y:-4}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:222,y:-0.5}},{t:this.shape_12,p:{x:-72.9,y:29.3}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-41.4,y:29.3}},{t:this.shape_8,p:{x:-21.9,y:29.2}},{t:this.shape_7,p:{x:-9.4,y:29.3}},{t:this.shape_6,p:{x:4.2,y:29.1}},{t:this.shape_5,p:{x:17.3,y:29.2}},{t:this.shape_4,p:{x:29.3,y:29.3}},{t:this.shape_3},{t:this.shape_2,p:{x:54.7,y:27.8}},{t:this.shape_1,p:{x:65.7,y:29.3}},{t:this.shape,p:{x:76.2,y:33.7}}]}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214,p:{x:-182.9}},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210,p:{x:-126.7}},{t:this.shape_209},{t:this.shape_208},{t:this.shape_45,p:{x:-94.8,y:-51.5}},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_79,p:{x:-63.1,y:-51.4}},{t:this.shape_204,p:{x:-51.8}},{t:this.shape_203,p:{x:-32}},{t:this.shape_202,p:{x:-22.4}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_40,p:{x:5.3,y:-51.4}},{t:this.shape_199},{t:this.shape_198,p:{x:38.3}},{t:this.shape_197,p:{x:58.5,y:-54.7}},{t:this.shape_35,p:{x:72.8,y:-51.4}},{t:this.shape_196},{t:this.shape_24,p:{x:111.5,y:-51.4}},{t:this.shape_195},{t:this.shape_194},{t:this.shape_33,p:{x:139.2,y:-54.1}},{t:this.shape_193},{t:this.shape_192},{t:this.shape_21,p:{x:177.4,y:-51.5}},{t:this.shape_191},{t:this.shape_22,p:{x:212.3,y:-51.4}},{t:this.shape_190,p:{x:-258.1}},{t:this.shape_189,p:{x:-244.8}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-199.3}},{t:this.shape_184,p:{x:-189.4,y:-24.9}},{t:this.shape_183,p:{x:-175.8}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180,p:{x:-123.1}},{t:this.shape_179,p:{x:-110.5}},{t:this.shape_98,p:{x:-101.1,y:-25.1}},{t:this.shape_111,p:{x:-91.6,y:-21.5}},{t:this.shape_178,p:{x:-77.9,y:-24.9}},{t:this.shape_177,p:{x:-56.9}},{t:this.shape_176},{t:this.shape_175,p:{x:-23.6}},{t:this.shape_58,p:{x:-14,y:-25.1}},{t:this.shape_116,p:{x:2.4,y:-24.5}},{t:this.shape_174},{t:this.shape_173,p:{x:23.2}},{t:this.shape_172,p:{x:37.4,y:-24.9}},{t:this.shape_171,p:{x:50.3}},{t:this.shape_170},{t:this.shape_7,p:{x:69.7,y:-21.6}},{t:this.shape_169,p:{x:80.2,y:-17.1}},{t:this.shape_168},{t:this.shape_12,p:{x:111,y:-21.6}},{t:this.shape_51,p:{x:123.5,y:-21.6}},{t:this.shape_167,p:{x:132.1}},{t:this.shape_166},{t:this.shape_165,p:{x:151.1}},{t:this.shape_109,p:{x:171.3,y:-24.9}},{t:this.shape_9,p:{x:185.6,y:-21.6}},{t:this.shape_6,p:{x:205.4,y:-21.7}},{t:this.shape_164},{t:this.shape_4,p:{x:232.3,y:-21.6}},{t:this.shape_163},{t:this.shape_1,p:{x:257.7,y:-21.6}},{t:this.shape_162},{t:this.shape_39,p:{x:-242.2,y:4.7}},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_31,p:{x:-149.5,y:4.7}},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146,p:{x:-23.2}},{t:this.shape_145,p:{x:-10}},{t:this.shape_144},{t:this.shape_143,p:{x:17.4}},{t:this.shape_142},{t:this.shape_17,p:{x:47,y:8.2}},{t:this.shape_16,p:{x:55.2,y:4.7}},{t:this.shape_141,p:{x:64}},{t:this.shape_140},{t:this.shape_139,p:{x:85.6}},{t:this.shape_138,p:{x:106.1}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:137.6}},{t:this.shape_8,p:{x:157.1,y:8.2}},{t:this.shape_134,p:{x:169.6}},{t:this.shape_133,p:{x:183.2}},{t:this.shape_5,p:{x:196.2,y:8.2}},{t:this.shape_132,p:{x:208.3}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129,p:{x:244.7}},{t:this.shape,p:{x:255.2,y:12.7}}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_202,p:{x:-186.7}},{t:this.shape_105,p:{x:-177.7,y:-51.4}},{t:this.shape_33,p:{x:-169.4,y:-54.1}},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_40,p:{x:-114.6,y:-51.4}},{t:this.shape_241},{t:this.shape_35,p:{x:-76.4,y:-51.4}},{t:this.shape_240},{t:this.shape_239},{t:this.shape_98,p:{x:-42.9,y:-54.9}},{t:this.shape_238},{t:this.shape_204,p:{x:-20.7}},{t:this.shape_34,p:{x:-9.2,y:-51.5}},{t:this.shape_106,p:{x:-2.9,y:-45.3}},{t:this.shape_79,p:{x:13.2,y:-51.4}},{t:this.shape_41,p:{x:25.7,y:-51.4}},{t:this.shape_237},{t:this.shape_236},{t:this.shape_24,p:{x:55.4,y:-51.4}},{t:this.shape_210,p:{x:67.3}},{t:this.shape_235},{t:this.shape_13,p:{x:94.1,y:-51.4}},{t:this.shape_45,p:{x:107.7,y:-51.5}},{t:this.shape_184,p:{x:121.5,y:-54.7}},{t:this.shape_22,p:{x:135.9,y:-51.4}},{t:this.shape_21,p:{x:149,y:-51.5}},{t:this.shape_198,p:{x:168.5}},{t:this.shape_58,p:{x:177.9,y:-54.9}},{t:this.shape_203,p:{x:194.1}},{t:this.shape_234},{t:this.shape_214,p:{x:223.4}},{t:this.shape_190,p:{x:-217.9}},{t:this.shape_180,p:{x:-204.6}},{t:this.shape_233},{t:this.shape_169,p:{x:-180.7,y:-17.1}},{t:this.shape_232},{t:this.shape_189,p:{x:-149.9}},{t:this.shape_231,p:{x:-137.4,y:-21.6}},{t:this.shape_185,p:{x:-128.8}},{t:this.shape_230},{t:this.shape_183,p:{x:-109.8}},{t:this.shape_178,p:{x:-89.6,y:-24.9}},{t:this.shape_177,p:{x:-75.3}},{t:this.shape_6,p:{x:-55.5,y:-21.7}},{t:this.shape_25,p:{x:-42,y:-21.5}},{t:this.shape_175,p:{x:-28.6}},{t:this.shape_51,p:{x:-16.1,y:-21.6}},{t:this.shape_1,p:{x:-3.2,y:-21.6}},{t:this.shape_12,p:{x:17.2,y:-21.6}},{t:this.shape_39,p:{x:26.8,y:-25.1}},{t:this.shape_229},{t:this.shape_179,p:{x:62.7}},{t:this.shape_2,p:{x:73.2,y:-23}},{t:this.shape_9,p:{x:83.8,y:-21.6}},{t:this.shape_228},{t:this.shape_167,p:{x:101.3}},{t:this.shape_173,p:{x:110.1}},{t:this.shape_31,p:{x:119.5,y:-25.1}},{t:this.shape_227},{t:this.shape_171,p:{x:149.6}},{t:this.shape_226},{t:this.shape_165,p:{x:170}},{t:this.shape_225},{t:this.shape_111,p:{x:204.5,y:-21.5}},{t:this.shape_4,p:{x:217.9,y:-21.6}},{t:this.shape_224},{t:this.shape_146,p:{x:-133.5}},{t:this.shape_145,p:{x:-120.4}},{t:this.shape_223},{t:this.shape_143,p:{x:-92.9}},{t:this.shape_222},{t:this.shape_17,p:{x:-63.4,y:8.2}},{t:this.shape_16,p:{x:-55.1,y:4.7}},{t:this.shape_141,p:{x:-46.3}},{t:this.shape_221},{t:this.shape_139,p:{x:-24.7}},{t:this.shape_138,p:{x:-4.3}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_135,p:{x:27.2}},{t:this.shape_8,p:{x:46.7,y:8.2}},{t:this.shape_134,p:{x:59.2}},{t:this.shape_133,p:{x:72.8}},{t:this.shape_5,p:{x:85.9,y:8.2}},{t:this.shape_132,p:{x:97.9}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_129,p:{x:134.3}},{t:this.shape,p:{x:144.8,y:12.7}}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_172,p:{x:-144.8,y:-61}},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_184,p:{x:-96.3,y:-61}},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_98,p:{x:54.2,y:-61.1}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_47,p:{x:-227.6,y:-31.2}},{t:this.shape_316},{t:this.shape_112,p:{x:-208,y:-27.9}},{t:this.shape_315},{t:this.shape_314},{t:this.shape_106,p:{x:-174.9,y:-21.7}},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_105,p:{x:-46.5,y:-27.9}},{t:this.shape_303},{t:this.shape_197,p:{x:-28.4,y:-31.2}},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_79,p:{x:185.3,y:-27.9}},{t:this.shape_111,p:{x:197.3,y:-27.7}},{t:this.shape_287},{t:this.shape_109,p:{x:216.7,y:-31.2}},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_110,p:{x:-179.3,y:-0.8}},{t:this.shape_100,p:{x:-171.3,y:2}},{t:this.shape_278},{t:this.shape_88,p:{x:-138.7,y:2}},{t:this.shape_277},{t:this.shape_90,p:{x:-108.9,y:4.8}},{t:this.shape_276},{t:this.shape_58,p:{x:-74.5,y:-1.5}},{t:this.shape_86,p:{x:-64.5,y:2}},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_93,p:{x:-2.5,y:1.8}},{t:this.shape_272},{t:this.shape_96,p:{x:25.5,y:2}},{t:this.shape_169,p:{x:33.9,y:6.4}},{t:this.shape_271},{t:this.shape_270},{t:this.shape_231,p:{x:77.3,y:1.9}},{t:this.shape_103,p:{x:85.9,y:-0.8}},{t:this.shape_87,p:{x:93.9,y:2}},{t:this.shape_269},{t:this.shape_178,p:{x:125,y:-1.4}},{t:this.shape_268},{t:this.shape_267},{t:this.shape_25,p:{x:172.7,y:2.1}},{t:this.shape_113,p:{x:186.1,y:2}},{t:this.shape_51,p:{x:198.6,y:1.9}},{t:this.shape_83,p:{x:211.4,y:2}},{t:this.shape_94,p:{x:231.9,y:2}},{t:this.shape_39,p:{x:241.4,y:-1.5}},{t:this.shape_56,p:{x:-235.6,y:31.6}},{t:this.shape_266},{t:this.shape_265},{t:this.shape_80,p:{x:-198.1,y:31.8}},{t:this.shape_264},{t:this.shape_50,p:{x:-180.6,y:29}},{t:this.shape_263},{t:this.shape_31,p:{x:-162.4,y:28.3}},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_75,p:{x:-111.9,y:31.8}},{t:this.shape_259},{t:this.shape_104,p:{x:-77.4,y:31.9}},{t:this.shape_68,p:{x:-64,y:31.8}},{t:this.shape_258},{t:this.shape_67,p:{x:-36.1,y:31.8}},{t:this.shape_257},{t:this.shape_256},{t:this.shape_55,p:{x:4.5,y:31.8}},{t:this.shape_255},{t:this.shape_17,p:{x:34.1,y:31.7}},{t:this.shape_16,p:{x:42.3,y:28.3}},{t:this.shape_48,p:{x:51.1,y:31.8}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_63,p:{x:93.2,y:31.8}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_57,p:{x:124.7,y:31.8}},{t:this.shape_8,p:{x:144.2,y:31.7}},{t:this.shape_73,p:{x:156.7,y:31.8}},{t:this.shape_65,p:{x:170.3,y:31.6}},{t:this.shape_5,p:{x:183.3,y:31.7}},{t:this.shape_52,p:{x:195.4,y:31.8}},{t:this.shape_250},{t:this.shape_249},{t:this.shape_59,p:{x:231.8,y:31.8}},{t:this.shape,p:{x:242.3,y:36.2}}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655,p:{x:-180.4,y:-61.5}},{t:this.shape_654},{t:this.shape_653,p:{x:-165.4,y:-61.4}},{t:this.shape_652},{t:this.shape_651,p:{x:-142,y:-58.8}},{t:this.shape_650},{t:this.shape_649,p:{x:-115.5}},{t:this.shape_648,p:{x:-96.4,y:-58.3}},{t:this.shape_647},{t:this.shape_646,p:{x:-70.7,y:-61.4}},{t:this.shape_645,p:{x:-62.9}},{t:this.shape_644,p:{x:-52.5,y:-64.5}},{t:this.shape_643},{t:this.shape_642,p:{x:-33.6,y:-61.4}},{t:this.shape_641,p:{x:-22,y:-61.4}},{t:this.shape_640,p:{x:-4,y:-61.4}},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629,p:{x:148.3}},{t:this.shape_628},{t:this.shape_627,p:{x:169.5}},{t:this.shape_626,p:{y:-64.5}},{t:this.shape_625,p:{x:191.6,y:-61.4}},{t:this.shape_624,p:{x:211.3,y:-64.5}},{t:this.shape_623,p:{x:225.4,y:-61.4}},{t:this.shape_622,p:{x:-247.3,y:-33.3}},{t:this.shape_621,p:{x:-238.1,y:-36.6}},{t:this.shape_620},{t:this.shape_619,p:{x:-221,y:-33.2}},{t:this.shape_618,p:{x:-209.6,y:-33.5}},{t:this.shape_617,p:{x:-200.8,y:-33.3}},{t:this.shape_616,p:{x:-189.4,y:-33.3}},{t:this.shape_615,p:{x:-181.2}},{t:this.shape_614,p:{x:-164.9,y:-33.3}},{t:this.shape_613,p:{x:-155.5,y:-36.6}},{t:this.shape_612,p:{x:-140.2}},{t:this.shape_611,p:{x:-127.9}},{t:this.shape_610,p:{x:-114.6,y:-33.5}},{t:this.shape_609},{t:this.shape_608,p:{x:-94.3}},{t:this.shape_607,p:{x:-81.9}},{t:this.shape_606,p:{x:-72.7}},{t:this.shape_605},{t:this.shape_604,p:{x:-41.8,y:-33.3}},{t:this.shape_603,p:{x:-32.4,y:-36.6}},{t:this.shape_602,p:{x:-23.1}},{t:this.shape_601,p:{x:-10.5}},{t:this.shape_600,p:{x:-1.3,y:-34.7}},{t:this.shape_599,p:{x:7.4,y:-33.5}},{t:this.shape_598,p:{x:13.2,y:-35.9}},{t:this.shape_597,p:{x:22,y:-33.3}},{t:this.shape_596,p:{x:34.3,y:-33.3}},{t:this.shape_595,p:{x:53.4}},{t:this.shape_594,p:{x:68.4,y:-36.6}},{t:this.shape_593},{t:this.shape_592,p:{x:88.4,y:-33.3}},{t:this.shape_591,p:{x:105.7}},{t:this.shape_590,p:{x:121.9,y:-33.5}},{t:this.shape_589},{t:this.shape_588,p:{x:153,y:-33.2}},{t:this.shape_587,p:{x:163.5,y:-34.7}},{t:this.shape_586,p:{x:173.2,y:-33.3}},{t:this.shape_585,p:{x:185.6,y:-33.3}},{t:this.shape_584,p:{x:193.7,y:-35.9}},{t:this.shape_583,p:{x:203.5,y:-33.3}},{t:this.shape_582,p:{x:216.8,y:-33.5}},{t:this.shape_581,p:{x:230.1,y:-33.3}},{t:this.shape_580,p:{x:241.6,y:-33.3}},{t:this.shape_579,p:{x:249.9,y:-29.1}},{t:this.shape_578,p:{x:-258,y:-8}},{t:this.shape_577,p:{x:-245.3,y:-5.3}},{t:this.shape_576,p:{x:-233.1,y:-5.3}},{t:this.shape_575,p:{x:-224.6,y:-7.9}},{t:this.shape_574,p:{x:-216.8,y:-5.3}},{t:this.shape_573,p:{x:-206,y:-5.3}},{t:this.shape_572,p:{x:-186.3,y:-8.4}},{t:this.shape_571,p:{x:-172.3,y:-5.3}},{t:this.shape_570},{t:this.shape_569,p:{x:-139.7,y:-5.2}},{t:this.shape_568,p:{x:-126.5,y:-5.3}},{t:this.shape_567,p:{x:-114.3,y:-5.3}},{t:this.shape_566,p:{x:-101.7,y:-5.3}},{t:this.shape_565,p:{x:-81.7,y:-5.3}},{t:this.shape_564,p:{x:-72.3,y:-8.6}},{t:this.shape_563,p:{x:-53.1,y:-5.5}},{t:this.shape_562},{t:this.shape_561,p:{x:-26.8,y:-6.7}},{t:this.shape_560,p:{x:-16.4,y:-5.3}},{t:this.shape_559,p:{x:-5,y:-5.5}},{t:this.shape_558,p:{x:0.7,y:-7.9}},{t:this.shape_557,p:{x:9.4,y:-5.3}},{t:this.shape_556,p:{x:18.6,y:-8.6}},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553,p:{x:59.3,y:-5.5}},{t:this.shape_552,p:{x:68,y:-5.3}},{t:this.shape_551,p:{x:87.7,y:-2.2}},{t:this.shape_550,p:{x:101.7,y:-5.2}},{t:this.shape_549,p:{x:114.9,y:-5.3}},{t:this.shape_548},{t:this.shape_547,p:{x:142.2,y:-5.3}},{t:this.shape_546},{t:this.shape_545,p:{x:168.7,y:-2.8}},{t:this.shape_544,p:{x:182,y:-5.3}},{t:this.shape_543,p:{x:193.4,y:-5.3}},{t:this.shape_542,p:{x:210.9,y:-5.3}},{t:this.shape_541,p:{x:219.1,y:-8.6}},{t:this.shape_540,p:{x:227.7,y:-5.3}},{t:this.shape_539,p:{x:238.9,y:-5.5}},{t:this.shape_538},{t:this.shape_537,p:{x:260.8,y:-5.3}},{t:this.shape_536,p:{x:-81.8,y:22.6}},{t:this.shape_535,p:{x:-70.2,y:22.6}},{t:this.shape_534},{t:this.shape_533,p:{x:-50.5,y:22.6}},{t:this.shape_532,p:{x:-38.5,y:22.6}},{t:this.shape_531,p:{x:-21,y:22.6}},{t:this.shape_530},{t:this.shape_529,p:{x:4.6,y:22.5}},{t:this.shape_528,p:{x:17.4,y:22.6}},{t:this.shape_527,p:{x:29.2,y:22.6}},{t:this.shape_526},{t:this.shape_525,p:{x:54,y:21.3}},{t:this.shape_524},{t:this.shape_523,p:{x:76.8,y:22.6}},{t:this.shape_522,p:{x:85.1,y:26.8}}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_694,p:{x:-253.5,y:-64.1}},{t:this.shape_693,p:{x:-240.7,y:-61.5}},{t:this.shape_621,p:{x:-224.7,y:-64.6}},{t:this.shape_692,p:{x:-214.9,y:-61.4}},{t:this.shape_691,p:{x:-202.9,y:-61.4}},{t:this.shape_690,p:{x:-184.6,y:-58.8}},{t:this.shape_689,p:{x:-171.3,y:-61.4}},{t:this.shape_613,p:{x:-162.1,y:-64.6}},{t:this.shape_688},{t:this.shape_687,p:{x:-137.9,y:-61.4}},{t:this.shape_686,p:{x:-124.6,y:-61.5}},{t:this.shape_685},{t:this.shape_649,p:{x:-99.8}},{t:this.shape_684,p:{x:-80.7,y:-58.3}},{t:this.shape_619,p:{x:-67.5,y:-61.2}},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_646,p:{x:-15.3,y:-61.4}},{t:this.shape_680,p:{x:0.1,y:-62.7}},{t:this.shape_679},{t:this.shape_678},{t:this.shape_653,p:{x:36.6,y:-61.4}},{t:this.shape_677,p:{x:48,y:-61.5}},{t:this.shape_655,p:{x:62.3,y:-61.5}},{t:this.shape_645,p:{x:68.1}},{t:this.shape_642,p:{x:77.4,y:-61.4}},{t:this.shape_641,p:{x:89,y:-61.4}},{t:this.shape_651,p:{x:100.8,y:-58.8}},{t:this.shape_676},{t:this.shape_616,p:{x:127.3,y:-61.4}},{t:this.shape_675,p:{x:145.6,y:-64.5}},{t:this.shape_640,p:{x:159.6,y:-61.4}},{t:this.shape_629,p:{x:178.7}},{t:this.shape_674,p:{x:189.8,y:-61.4}},{t:this.shape_627,p:{x:199.9}},{t:this.shape_673},{t:this.shape_672,p:{x:222,y:-61.4}},{t:this.shape_623,p:{x:241.4,y:-61.4}},{t:this.shape_671,p:{x:254.3,y:-61.5}},{t:this.shape_670,p:{x:-231.6,y:-33.3}},{t:this.shape_603,p:{x:-222.4,y:-36.6}},{t:this.shape_669,p:{x:-215.7,y:-34.7}},{t:this.shape_588,p:{x:-205.4,y:-33.2}},{t:this.shape_618,p:{x:-193.9,y:-33.5}},{t:this.shape_608,p:{x:-185.2}},{t:this.shape_592,p:{x:-173.8,y:-33.3}},{t:this.shape_615,p:{x:-165.5}},{t:this.shape_612,p:{x:-149.7}},{t:this.shape_591,p:{x:-138.6}},{t:this.shape_668},{t:this.shape_667,p:{x:-119.8,y:-36.4}},{t:this.shape_622,p:{x:-106.5,y:-33.3}},{t:this.shape_666,p:{x:-86.8,y:-36.4}},{t:this.shape_614,p:{x:-72.7,y:-33.3}},{t:this.shape_665,p:{x:-52.7,y:-33.3}},{t:this.shape_644,p:{x:-38.1,y:-36.4}},{t:this.shape_664},{t:this.shape_604,p:{x:-19.2,y:-33.3}},{t:this.shape_663},{t:this.shape_611,p:{x:2.1}},{t:this.shape_580,p:{x:14.1,y:-33.3}},{t:this.shape_595,p:{x:31.3}},{t:this.shape_607,p:{x:49.5}},{t:this.shape_596,p:{x:61.7,y:-33.3}},{t:this.shape_662,p:{x:75.1,y:-33.5}},{t:this.shape_606,p:{x:85.7}},{t:this.shape_661},{t:this.shape_601,p:{x:107.8}},{t:this.shape_600,p:{x:117,y:-34.7}},{t:this.shape_583,p:{x:127.9,y:-33.3}},{t:this.shape_581,p:{x:147.9,y:-33.3}},{t:this.shape_594,p:{x:157.3,y:-36.6}},{t:this.shape_602,p:{x:166.6}},{t:this.shape_597,p:{x:179.2,y:-33.3}},{t:this.shape_660,p:{x:188.4,y:-34.7}},{t:this.shape_599,p:{x:197.1,y:-33.5}},{t:this.shape_584,p:{x:202.9,y:-35.9}},{t:this.shape_585,p:{x:211.7,y:-33.3}},{t:this.shape_659},{t:this.shape_579,p:{x:234.2,y:-29.1}},{t:this.shape_578,p:{x:-258,y:-8}},{t:this.shape_577,p:{x:-245.3,y:-5.3}},{t:this.shape_576,p:{x:-233.1,y:-5.3}},{t:this.shape_575,p:{x:-224.6,y:-7.9}},{t:this.shape_574,p:{x:-216.8,y:-5.3}},{t:this.shape_573,p:{x:-206,y:-5.3}},{t:this.shape_572,p:{x:-186.3,y:-8.4}},{t:this.shape_571,p:{x:-172.3,y:-5.3}},{t:this.shape_570},{t:this.shape_569,p:{x:-139.7,y:-5.2}},{t:this.shape_568,p:{x:-126.5,y:-5.3}},{t:this.shape_567,p:{x:-114.3,y:-5.3}},{t:this.shape_566,p:{x:-101.7,y:-5.3}},{t:this.shape_565,p:{x:-81.7,y:-5.3}},{t:this.shape_564,p:{x:-72.3,y:-8.6}},{t:this.shape_563,p:{x:-53.1,y:-5.5}},{t:this.shape_562},{t:this.shape_561,p:{x:-26.8,y:-6.7}},{t:this.shape_560,p:{x:-16.4,y:-5.3}},{t:this.shape_559,p:{x:-5,y:-5.5}},{t:this.shape_558,p:{x:0.7,y:-7.9}},{t:this.shape_557,p:{x:9.4,y:-5.3}},{t:this.shape_556,p:{x:18.6,y:-8.6}},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553,p:{x:59.3,y:-5.5}},{t:this.shape_552,p:{x:68,y:-5.3}},{t:this.shape_551,p:{x:87.7,y:-2.2}},{t:this.shape_550,p:{x:101.7,y:-5.2}},{t:this.shape_549,p:{x:114.9,y:-5.3}},{t:this.shape_548},{t:this.shape_547,p:{x:142.2,y:-5.3}},{t:this.shape_546},{t:this.shape_545,p:{x:168.7,y:-2.8}},{t:this.shape_544,p:{x:182,y:-5.3}},{t:this.shape_543,p:{x:193.4,y:-5.3}},{t:this.shape_542,p:{x:210.9,y:-5.3}},{t:this.shape_541,p:{x:219.1,y:-8.6}},{t:this.shape_540,p:{x:227.7,y:-5.3}},{t:this.shape_539,p:{x:238.9,y:-5.5}},{t:this.shape_538},{t:this.shape_537,p:{x:260.8,y:-5.3}},{t:this.shape_536,p:{x:-81.8,y:22.6}},{t:this.shape_535,p:{x:-70.2,y:22.6}},{t:this.shape_534},{t:this.shape_533,p:{x:-50.5,y:22.6}},{t:this.shape_532,p:{x:-38.5,y:22.6}},{t:this.shape_531,p:{x:-21,y:22.6}},{t:this.shape_530},{t:this.shape_529,p:{x:4.6,y:22.5}},{t:this.shape_528,p:{x:17.4,y:22.6}},{t:this.shape_527,p:{x:29.2,y:22.6}},{t:this.shape_526},{t:this.shape_525,p:{x:54,y:21.3}},{t:this.shape_524},{t:this.shape_523,p:{x:76.8,y:22.6}},{t:this.shape_522,p:{x:85.1,y:26.8}}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_694,p:{x:-238.7,y:-45.8}},{t:this.shape_543,p:{x:-227.3,y:-43.1}},{t:this.shape_660,p:{x:-218.4,y:-44.5}},{t:this.shape_573,p:{x:-208.7,y:-43.1}},{t:this.shape_575,p:{x:-193,y:-45.7}},{t:this.shape_590,p:{x:-180.4,y:-43.3}},{t:this.shape_715},{t:this.shape_690,p:{x:-151.2,y:-40.6}},{t:this.shape_653,p:{x:-137.1,y:-43.1}},{t:this.shape_714},{t:this.shape_597,p:{x:-104.9,y:-43.1}},{t:this.shape_566,p:{x:-92.7,y:-43.1}},{t:this.shape_677,p:{x:-80.8,y:-43.3}},{t:this.shape_655,p:{x:-73,y:-43.3}},{t:this.shape_642,p:{x:-63.6,y:-43.1}},{t:this.shape_537,p:{x:-52,y:-43.1}},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_624,p:{x:1.2,y:-46.2}},{t:this.shape_640,p:{x:15.2,y:-43.1}},{t:this.shape_617,p:{x:34.1,y:-43.1}},{t:this.shape_603,p:{x:43.3,y:-46.4}},{t:this.shape_618,p:{x:57.5,y:-43.3}},{t:this.shape_558,p:{x:63.2,y:-45.7}},{t:this.shape_623,p:{x:72.6,y:-43.1}},{t:this.shape_535,p:{x:84.1,y:-43.1}},{t:this.shape_651,p:{x:95.9,y:-40.6}},{t:this.shape_710},{t:this.shape_675,p:{x:130.7,y:-46.2}},{t:this.shape_614,p:{x:144.8,y:-43.1}},{t:this.shape_585,p:{x:163.9,y:-43.1}},{t:this.shape_709},{t:this.shape_708},{t:this.shape_667,p:{x:193.8,y:-46.2}},{t:this.shape_689,p:{x:207.2,y:-43.1}},{t:this.shape_604,p:{x:226.6,y:-43.1}},{t:this.shape_707},{t:this.shape_674,p:{x:-228.7,y:-15.1}},{t:this.shape_594,p:{x:-219.5,y:-18.3}},{t:this.shape_706},{t:this.shape_588,p:{x:-202.4,y:-14.9}},{t:this.shape_599,p:{x:-190.9,y:-15.2}},{t:this.shape_552,p:{x:-182.2,y:-15.1}},{t:this.shape_532,p:{x:-170.8,y:-15.1}},{t:this.shape_579,p:{x:-162.5,y:-10.9}},{t:this.shape_578,p:{x:-145,y:-17.8}},{t:this.shape_581,p:{x:-132.3,y:-15.1}},{t:this.shape_576,p:{x:-120.1,y:-15.1}},{t:this.shape_705},{t:this.shape_523,p:{x:-103.8,y:-15.1}},{t:this.shape_672,p:{x:-93,y:-15.1}},{t:this.shape_666,p:{x:-73.3,y:-18.2}},{t:this.shape_577,p:{x:-59.2,y:-15.1}},{t:this.shape_704},{t:this.shape_569,p:{x:-26.6,y:-14.9}},{t:this.shape_571,p:{x:-13.5,y:-15.1}},{t:this.shape_567,p:{x:-1.3,y:-15.1}},{t:this.shape_596,p:{x:11.3,y:-15.1}},{t:this.shape_568,p:{x:31.4,y:-15.1}},{t:this.shape_564,p:{x:40.7,y:-18.3}},{t:this.shape_563,p:{x:59.9,y:-15.2}},{t:this.shape_703},{t:this.shape_561,p:{x:86.2,y:-16.4}},{t:this.shape_565,p:{x:96.6,y:-15.1}},{t:this.shape_559,p:{x:108,y:-15.2}},{t:this.shape_702},{t:this.shape_701},{t:this.shape_556,p:{x:131.6,y:-18.3}},{t:this.shape_700},{t:this.shape_699},{t:this.shape_553,p:{x:172.3,y:-15.2}},{t:this.shape_622,p:{x:181.1,y:-15.1}},{t:this.shape_698},{t:this.shape_550,p:{x:214.8,y:-14.9}},{t:this.shape_560,p:{x:227.9,y:-15.1}},{t:this.shape_697,p:{x:-141.2,y:11.5}},{t:this.shape_549,p:{x:-130.8,y:12.9}},{t:this.shape_693,p:{x:-117.9,y:12.7}},{t:this.shape_545,p:{x:-104.3,y:15.4}},{t:this.shape_557,p:{x:-91,y:12.9}},{t:this.shape_646,p:{x:-79.6,y:12.9}},{t:this.shape_542,p:{x:-62.1,y:12.9}},{t:this.shape_541,p:{x:-54,y:9.6}},{t:this.shape_670,p:{x:-45.3,y:12.9}},{t:this.shape_539,p:{x:-34.1,y:12.7}},{t:this.shape_583,p:{x:-24.2,y:12.9}},{t:this.shape_547,p:{x:-4.2,y:12.9}},{t:this.shape_641,p:{x:7.4,y:12.9}},{t:this.shape_680,p:{x:16.3,y:11.5}},{t:this.shape_536,p:{x:26.7,y:12.9}},{t:this.shape_531,p:{x:45.8,y:12.9}},{t:this.shape_665,p:{x:58,y:12.9}},{t:this.shape_696},{t:this.shape_528,p:{x:84.1,y:12.9}},{t:this.shape_527,p:{x:95.9,y:12.9}},{t:this.shape_695},{t:this.shape_587,p:{x:120.7,y:11.5}},{t:this.shape_692,p:{x:131.6,y:12.9}},{t:this.shape_522,p:{x:141.8,y:17.1}}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_735},{t:this.shape_691,p:{x:-179.8,y:-41.9}},{t:this.shape_680,p:{x:-170.9,y:-43.2}},{t:this.shape_734,p:{x:-161.3,y:-41.9}},{t:this.shape_598,p:{x:-145.6,y:-44.4}},{t:this.shape_590,p:{x:-132.9,y:-42}},{t:this.shape_733},{t:this.shape_690,p:{x:-103.7,y:-39.3}},{t:this.shape_642,p:{x:-89.6,y:-41.9}},{t:this.shape_732},{t:this.shape_597,p:{x:-57.5,y:-41.9}},{t:this.shape_731},{t:this.shape_655,p:{x:-33.4,y:-42}},{t:this.shape_618,p:{x:-25.6,y:-42}},{t:this.shape_640,p:{x:-16.1,y:-41.9}},{t:this.shape_616,p:{x:-4.6,y:-41.9}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_662,p:{x:35.1,y:-42}},{t:this.shape_728},{t:this.shape_623,p:{x:62.7,y:-41.9}},{t:this.shape_670,p:{x:81.6,y:-41.9}},{t:this.shape_594,p:{x:90.7,y:-45.1}},{t:this.shape_599,p:{x:104.9,y:-42}},{t:this.shape_584,p:{x:110.7,y:-44.4}},{t:this.shape_614,p:{x:120,y:-41.9}},{t:this.shape_592,p:{x:131.6,y:-41.9}},{t:this.shape_651,p:{x:143.4,y:-39.3}},{t:this.shape_727},{t:this.shape_626,p:{y:-45}},{t:this.shape_604,p:{x:192.3,y:-41.9}},{t:this.shape_726,p:{x:-257.5,y:-10.7}},{t:this.shape_588,p:{x:-244.2,y:-13.7}},{t:this.shape_686,p:{x:-231.2,y:-14}},{t:this.shape_725},{t:this.shape_573,p:{x:-208.7,y:-13.8}},{t:this.shape_585,p:{x:-196.3,y:-13.8}},{t:this.shape_724,p:{x:-188.2}},{t:this.shape_723,p:{x:-178.4,y:-13.8}},{t:this.shape_671,p:{x:-165.1,y:-14}},{t:this.shape_581,p:{x:-151.8,y:-13.8}},{t:this.shape_580,p:{x:-140.3,y:-13.8}},{t:this.shape_579,p:{x:-132,y:-9.6}},{t:this.shape_578,p:{x:-114.5,y:-16.5}},{t:this.shape_577,p:{x:-101.8,y:-13.8}},{t:this.shape_576,p:{x:-89.6,y:-13.8}},{t:this.shape_722,p:{x:-81.1}},{t:this.shape_574,p:{x:-73.3,y:-13.8}},{t:this.shape_552,p:{x:-62.5,y:-13.8}},{t:this.shape_572,p:{x:-42.8,y:-16.9}},{t:this.shape_571,p:{x:-28.7,y:-13.8}},{t:this.shape_610,p:{x:-9.3,y:-14}},{t:this.shape_569,p:{x:3.9,y:-13.7}},{t:this.shape_568,p:{x:17,y:-13.8}},{t:this.shape_567,p:{x:29.2,y:-13.8}},{t:this.shape_721},{t:this.shape_565,p:{x:61.9,y:-13.8}},{t:this.shape_564,p:{x:71.3,y:-17.1}},{t:this.shape_563,p:{x:90.4,y:-14}},{t:this.shape_720},{t:this.shape_561,p:{x:116.7,y:-15.2}},{t:this.shape_560,p:{x:127.1,y:-13.8}},{t:this.shape_559,p:{x:138.5,y:-14}},{t:this.shape_719,p:{x:144.3}},{t:this.shape_586,p:{x:152.9,y:-13.8}},{t:this.shape_556,p:{x:162.1,y:-17.1}},{t:this.shape_648,p:{x:179,y:-10.7}},{t:this.shape_617,p:{x:191.6,y:-13.8}},{t:this.shape_553,p:{x:202.8,y:-14}},{t:this.shape_718},{t:this.shape_551,p:{x:231.3,y:-10.7}},{t:this.shape_550,p:{x:245.3,y:-13.7}},{t:this.shape_549,p:{x:258.4,y:-13.8}},{t:this.shape_525,p:{x:-156.6,y:12.8}},{t:this.shape_547,p:{x:-146.2,y:14.1}},{t:this.shape_582,p:{x:-133.3,y:14}},{t:this.shape_545,p:{x:-119.8,y:16.7}},{t:this.shape_544,p:{x:-106.4,y:14.1}},{t:this.shape_543,p:{x:-95,y:14.1}},{t:this.shape_542,p:{x:-77.5,y:14.1}},{t:this.shape_541,p:{x:-69.4,y:10.9}},{t:this.shape_540,p:{x:-60.8,y:14.1}},{t:this.shape_539,p:{x:-49.5,y:14}},{t:this.shape_665,p:{x:-39.6,y:14.1}},{t:this.shape_537,p:{x:-27.6,y:14.1}},{t:this.shape_536,p:{x:-9.6,y:14.1}},{t:this.shape_535,p:{x:2,y:14.1}},{t:this.shape_600,p:{x:10.8,y:12.8}},{t:this.shape_583,p:{x:21.7,y:14.1}},{t:this.shape_532,p:{x:33.7,y:14.1}},{t:this.shape_531,p:{x:51.2,y:14.1}},{t:this.shape_566,p:{x:63.5,y:14.1}},{t:this.shape_717},{t:this.shape_528,p:{x:89.5,y:14.1}},{t:this.shape_527,p:{x:101.4,y:14.1}},{t:this.shape_684,p:{x:115.5,y:17.2}},{t:this.shape_716},{t:this.shape_687,p:{x:137,y:14.1}},{t:this.shape_523,p:{x:149,y:14.1}},{t:this.shape_522,p:{x:157.3,y:18.3}}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_735},{t:this.shape_691,p:{x:-179.8,y:-41.9}},{t:this.shape_680,p:{x:-170.9,y:-43.2}},{t:this.shape_746},{t:this.shape_598,p:{x:-145.6,y:-44.4}},{t:this.shape_745},{t:this.shape_733},{t:this.shape_690,p:{x:-103.7,y:-39.3}},{t:this.shape_642,p:{x:-89.6,y:-41.9}},{t:this.shape_732},{t:this.shape_585,p:{x:-57.5,y:-41.9}},{t:this.shape_723,p:{x:-45.2,y:-41.9}},{t:this.shape_677,p:{x:-33.4,y:-42}},{t:this.shape_655,p:{x:-25.6,y:-42}},{t:this.shape_640,p:{x:-16.1,y:-41.9}},{t:this.shape_616,p:{x:-4.6,y:-41.9}},{t:this.shape_730},{t:this.shape_729},{t:this.shape_662,p:{x:35.1,y:-42}},{t:this.shape_728},{t:this.shape_623,p:{x:62.7,y:-41.9}},{t:this.shape_670,p:{x:81.6,y:-41.9}},{t:this.shape_594,p:{x:90.7,y:-45.1}},{t:this.shape_618,p:{x:104.9,y:-42}},{t:this.shape_584,p:{x:110.7,y:-44.4}},{t:this.shape_614,p:{x:120,y:-41.9}},{t:this.shape_592,p:{x:131.6,y:-41.9}},{t:this.shape_651,p:{x:143.4,y:-39.3}},{t:this.shape_727},{t:this.shape_626,p:{y:-45}},{t:this.shape_604,p:{x:192.3,y:-41.9}},{t:this.shape_744},{t:this.shape_743},{t:this.shape_599,p:{x:-226.8,y:-14}},{t:this.shape_689,p:{x:-218.1,y:-13.8}},{t:this.shape_742},{t:this.shape_672,p:{x:-191.5,y:-13.8}},{t:this.shape_590,p:{x:-175.3,y:-14}},{t:this.shape_724,p:{x:-162.3}},{t:this.shape_581,p:{x:-153,y:-13.8}},{t:this.shape_582,p:{x:-140,y:-14}},{t:this.shape_669,p:{x:-129.4,y:-15.2}},{t:this.shape_687,p:{x:-118.6,y:-13.8}},{t:this.shape_580,p:{x:-106.6,y:-13.8}},{t:this.shape_579,p:{x:-98.3,y:-9.6}},{t:this.shape_578,p:{x:-80.8,y:-16.5}},{t:this.shape_577,p:{x:-68.1,y:-13.8}},{t:this.shape_576,p:{x:-55.9,y:-13.8}},{t:this.shape_722,p:{x:-47.4}},{t:this.shape_574,p:{x:-39.6,y:-13.8}},{t:this.shape_741},{t:this.shape_740},{t:this.shape_571,p:{x:5,y:-13.8}},{t:this.shape_529,p:{x:24.4,y:-14}},{t:this.shape_569,p:{x:37.6,y:-13.7}},{t:this.shape_568,p:{x:50.7,y:-13.8}},{t:this.shape_567,p:{x:62.9,y:-13.8}},{t:this.shape_665,p:{x:75.6,y:-13.8}},{t:this.shape_565,p:{x:95.6,y:-13.8}},{t:this.shape_564,p:{x:105,y:-17.1}},{t:this.shape_563,p:{x:124.1,y:-14}},{t:this.shape_622,p:{x:140.1,y:-13.8}},{t:this.shape_697,p:{x:150.4,y:-15.2}},{t:this.shape_560,p:{x:160.8,y:-13.8}},{t:this.shape_559,p:{x:172.2,y:-14}},{t:this.shape_719,p:{x:178}},{t:this.shape_625,p:{x:186.6,y:-13.8}},{t:this.shape_556,p:{x:195.8,y:-17.1}},{t:this.shape_684,p:{x:212.7,y:-10.7}},{t:this.shape_734,p:{x:225.3,y:-13.8}},{t:this.shape_553,p:{x:236.5,y:-14}},{t:this.shape_739},{t:this.shape_738},{t:this.shape_550,p:{x:-163.2,y:14.3}},{t:this.shape_549,p:{x:-150.1,y:14.1}},{t:this.shape_587,p:{x:-133.1,y:12.8}},{t:this.shape_547,p:{x:-122.7,y:14.1}},{t:this.shape_693,p:{x:-109.8,y:14}},{t:this.shape_545,p:{x:-96.3,y:16.7}},{t:this.shape_617,p:{x:-82.9,y:14.1}},{t:this.shape_543,p:{x:-71.5,y:14.1}},{t:this.shape_542,p:{x:-54,y:14.1}},{t:this.shape_541,p:{x:-45.9,y:10.9}},{t:this.shape_552,p:{x:-37.3,y:14.1}},{t:this.shape_539,p:{x:-26,y:14}},{t:this.shape_583,p:{x:-16.1,y:14.1}},{t:this.shape_537,p:{x:-4.1,y:14.1}},{t:this.shape_536,p:{x:13.9,y:14.1}},{t:this.shape_535,p:{x:25.5,y:14.1}},{t:this.shape_660,p:{x:34.4,y:12.8}},{t:this.shape_692,p:{x:45.2,y:14.1}},{t:this.shape_532,p:{x:57.2,y:14.1}},{t:this.shape_531,p:{x:74.7,y:14.1}},{t:this.shape_737},{t:this.shape_736},{t:this.shape_528,p:{x:113,y:14.1}},{t:this.shape_527,p:{x:124.9,y:14.1}},{t:this.shape_726,p:{x:139,y:17.2}},{t:this.shape_561,p:{x:149.7,y:12.8}},{t:this.shape_533,p:{x:160.5,y:14.1}},{t:this.shape_523,p:{x:172.5,y:14.1}},{t:this.shape_522,p:{x:180.8,y:18.3}}]},1).wait(1));

	// Fondo blanco
	this.instance = new lib.Mapadebits10();
	this.instance.parent = this;
	this.instance.setTransform(-283,-132,1.046,1.046);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// Fondo
	this.instance_1 = new lib.Mapadebits17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-517,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517,-296,1034,592);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Retro
	this.mc_feedback = new lib.Símbolo6();
	this.mc_feedback.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_feedback).wait(10));

	// Feedback bueno
	this.mc_goodFeedback = new lib.Símbolo15();
	this.mc_goodFeedback.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_goodFeedback).wait(10));

	// Feedback Malo
	this.mc_badFeedback = new lib.Símbolo14();
	this.mc_badFeedback.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_badFeedback).wait(10));

	// Buttons
	this.btn_send = new lib.Símbolo4();
	this.btn_send.parent = this;
	this.btn_send.setTransform(255.9,229.4);
	new cjs.ButtonHelper(this.btn_send, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_send).wait(10));

	// Contador
	this.mc_cont = new lib.Símbolo2();
	this.mc_cont.parent = this;
	this.mc_cont.setTransform(-482.2,-195.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_cont).wait(10));

	// Questions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgJA1QgDgDAAgGQAAgEADgFQAEgDAFAAQAFAAAEADQAEAFAAAEQAAAGgEADQgEAFgFAAQgFAAgEgFgAgJgjQgDgDAAgGQAAgEADgFQAEgDAFAAQAFAAAEADQAEAFAAAEQAAAGgEADQgEAFgFAAQgFAAgEgFg");
	this.shape.setTransform(-174.7,-173);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgEgHgGgDQgHgFgIAAIgIABIgHADIgFAFQgCAEAAAEQgBAIAGADQAFAEALADIAQAEQALACAIAIQAJAHAAAMQAAAKgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_1.setTransform(-183.1,-173);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_2.setTransform(-194.9,-173);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_3.setTransform(-215.4,-173);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCACgEQACgDAAgEIAAgJIAAiDIAQAAIAACGIAAAIQgBAGgCAGQgDAGgGAFQgHAEgMAAQgGAAgGgCgAAEhbQgDgEAAgFQAAgFADgDQAEgDAEAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEADgEAAQgEAAgEgDg");
	this.shape_4.setTransform(-226.6,-172.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_5.setTransform(-234.8,-173);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIALgHQAHgDAGgBIAKgBQANAAAMAFQAKAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_6.setTransform(-247.6,-176.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_7.setTransform(-261.9,-173);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgeA5IAAhMIAAgPIgBgUIAPAAIAAAVIABAAQABgFAEgDQADgFAFgEQADgCAGgDQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_8.setTransform(-270.7,-173.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgIBVIAAiZIg4AAIAAgQICBAAIAAAQIg4AAIAACZg");
	this.shape_9.setTransform(-282.6,-175.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_10.setTransform(-299.1,-176.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_11.setTransform(-308.6,-173);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_12.setTransform(-328.8,-173.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_13.setTransform(-342,-173);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_14.setTransform(-363,-176.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_15.setTransform(-376.7,-172.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_16.setTransform(-386.2,-176.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_17.setTransform(-395.6,-173);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAKAKAFQAKAGANgBQAGAAAGgCQAHgBAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgMAFgKQAEgJAIgGQAIgFAKgEQAJgDAKAAQAOAAAMAGQAMAEAKALIgPAMQgMgQgVAAQgGAAgGABQgHACgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAHQgIAGgKADQgKADgJAAQgQABgOgHg");
	this.shape_18.setTransform(-408.2,-175.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFACAHABQAIAAAFgGQAFgFADgJIAJgWIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAIQgIAHgOAAIgIAAg");
	this.shape_19.setTransform(-427.2,-170.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_20.setTransform(-86.1,-205.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_21.setTransform(-99.6,-201.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_22.setTransform(-113.2,-205.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_23.setTransform(-123.1,-204.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgeA5IAAhMIAAgPIgBgUIAPAAIAAAVIABAAQABgFAEgDQADgFAFgEQADgCAGgDQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_24.setTransform(-128.9,-201.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgLACQgVAAgLgMg");
	this.shape_25.setTransform(-140.6,-201.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgMAFQgLAFgMAAQgLAAgLgFQgKgEgIgHQgJgIgEgKQgEgKAAgMQAAgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAGAGAHAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_26.setTransform(-154.9,-199.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_27.setTransform(-168.6,-201.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAKAKAFQAKAGANgBQAGAAAGgCQAHgBAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgMAFgKQAEgJAIgGQAIgFAKgEQAJgDAKAAQAOAAAMAGQAMAEAKALIgPAMQgMgQgVAAQgGAAgGABQgHACgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAHQgIAGgKADQgKADgJAAQgQABgOgHg");
	this.shape_28.setTransform(-181.9,-204.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_29.setTransform(-202.1,-201.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_30.setTransform(-215.3,-201.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgvBVIAAipIARAAIAACZIBOAAIAAAQg");
	this.shape_31.setTransform(-233.5,-204.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AA+BVIgTgsIhVAAIgTAsIgUAAIBKipIAPAAIBKCpgAgkAZIBJAAIglhZg");
	this.shape_32.setTransform(-248.8,-204.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AAxBVIhkiRIgBAAIAACRIgRAAIAAipIAVAAIBlCPIAAAAIAAiPIARAAIAACpg");
	this.shape_33.setTransform(-266.4,-204.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgIBVIAAipIARAAIAACpg");
	this.shape_34.setTransform(-278.8,-204.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgJBVIhAipIATAAIA2CPIAAAAIA3iPIATAAIhCCpg");
	this.shape_35.setTransform(-289.3,-204.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AA+BVIgTgsIhVAAIgTAsIgUAAIBKipIAPAAIBKCpgAgkAZIBJAAIglhZg");
	this.shape_36.setTransform(-304.9,-204.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_37.setTransform(-326.4,-201.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_38.setTransform(-340.8,-205.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_39.setTransform(-360.9,-201.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAEgFAJQgEAJAAAOIAAA5IgQAAIAAhWIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABGg");
	this.shape_40.setTransform(-377.3,-201.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_41.setTransform(-394,-201.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_42.setTransform(-403.5,-205.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_43.setTransform(-415.9,-205.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAPIhRAAIAABAIBaAAIAAAQg");
	this.shape_44.setTransform(-425.3,-204.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgIA1QgEgEAAgFQAAgEAEgFQADgDAFAAQAGAAADADQAEAFAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEgAgIgjQgEgEAAgFQAAgFAEgEQADgDAFAAQAGAAADADQAEAEAAAFQAAAFgEAEQgDAEgGABQgFgBgDgEg");
	this.shape_45.setTransform(-162.8,-188);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_46.setTransform(-172.8,-188);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_47.setTransform(-187.2,-191.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgGgDQgFgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_48.setTransform(-205.8,-188);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_49.setTransform(-217.5,-188);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_50.setTransform(-236.8,-185.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_51.setTransform(-246.7,-190.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_52.setTransform(-254.6,-188);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_53.setTransform(-271.5,-188);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_54.setTransform(-283.2,-188);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_55.setTransform(-308.4,-188.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_56.setTransform(-322,-188);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_57.setTransform(-334.1,-188);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgIBVIAAiZIg4AAIAAgQICBAAIAAAQIg5AAIAACZg");
	this.shape_58.setTransform(-359.5,-190.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_59.setTransform(-373.1,-190.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_60.setTransform(-386.4,-190.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgeAIIAAgPIA9AAIAAAPg");
	this.shape_61.setTransform(-397,-188.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgWBSQgQgGgMgMQgMgMgHgQQgHgQAAgUQAAgSAHgQQAHgRAMgMQAMgMAQgGQAQgIASABQAUgBAPAHQAPAFALALIgMAOQgJgKgMgFQgMgGgQABQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAOAFAOQAFANAJALQAJAJANAGQANAHAPgBQANAAAMgDQAMgDAKgFIAAg6IgpAAIAAgOIA6AAIAABSQgOAIgRAFQgSAEgPABQgSAAgQgIg");
	this.shape_62.setTransform(-410.9,-190.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_63.setTransform(-426.4,-190.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_64.setTransform(-186.3,-188.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQAEgHAFgDIAKgHQAHgDAFgBIALgBQAOAAAKAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgFgEgEgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgJQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_65.setTransform(-214,-184.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_66.setTransform(-238.6,-188);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_67.setTransform(-248.2,-188.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgDgCgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_68.setTransform(-256.1,-188.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_69.setTransform(-268.3,-188);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_70.setTransform(-280.8,-188.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_71.setTransform(-298.6,-188);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_72.setTransform(-319.2,-188.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIALgHQAGgDAHgBIAKgBQAOAAALAFQALAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgDAIAAAJQAAAJADAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGACgIQAEgJAAgJQAAgJgEgIQgCgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_73.setTransform(-331.1,-191.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_74.setTransform(-345.4,-188);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_75.setTransform(-363.6,-188);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQAEgHAFgDIAKgHQAHgDAFgBIALgBQAOAAAKAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgFgEgEgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgJQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_76.setTransform(-376.4,-184.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_77.setTransform(-395.8,-188);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_78.setTransform(-408.1,-188);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AhIBVIAAipIA5AAQAPAAAPAFQARAFAMAMQANAKAIAQQAIAQAAAUQAAAWgIAPQgIAQgNALQgMAKgRAGQgPAFgPAAgAg2BFIAhAAQATAAANgFQAPgHAKgKQAJgJAEgMQAFgNAAgNQAAgMgFgNQgEgMgJgJQgKgKgPgGQgNgGgTAAIghAAg");
	this.shape_79.setTransform(-423.7,-190.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQAAAJgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_80.setTransform(-212.9,-142.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_81.setTransform(-224.7,-142.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_82.setTransform(-234.3,-143.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_83.setTransform(-246.5,-142.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_84.setTransform(-274.8,-142.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_85.setTransform(-283.6,-143.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_86.setTransform(-295.8,-142.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgLBbIgMgEIgKgHQgFgEgEgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQAEgGAFgEIAKgHQAHgDAFgBIALgBQAOAAAKAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_87.setTransform(-309.8,-146.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_88.setTransform(-324.1,-142.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_89.setTransform(-342.9,-142.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgGgDQgFgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_90.setTransform(-373.2,-142.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_91.setTransform(-385.5,-142.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_92.setTransform(-411.7,-142.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_93.setTransform(-426.1,-146.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_94.setTransform(-119.4,-171.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAIQAHAHABANQAAAJgFAGQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_95.setTransform(-131.5,-171.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_96.setTransform(-139.6,-174.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_97.setTransform(-152.9,-171.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_98.setTransform(-170,-171.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_99.setTransform(-180.1,-171.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIABAAQADgFAGgEIAKgHQAGgDAGgBIALgBQAOAAAKAEQALAEAIAIQAIAJAFALQAEAKAAANQAAANgEALQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgGgEgDgGIgBAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAIAGAHQAGAEAIAEQAIADAJAAQAKAAAIgDQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_100.setTransform(-192,-168.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_101.setTransform(-210.2,-171.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_102.setTransform(-227.3,-171.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_103.setTransform(-239.8,-171.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_104.setTransform(-259.5,-171.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_105.setTransform(-291,-171.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_106.setTransform(-302.9,-171.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AgiBSQgQgGgMgMQgMgMgHgQQgGgQgBgUQABgTAGgQQAHgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQARAGALAMQAMAMAHAQQAGAQABATQgBAUgGAQQgHAQgMAMQgLAMgRAGQgQAIgTAAQgSAAgQgIgAgchDQgNAGgJAKQgJALgFANQgFANAAAOQAAAPAFANQAFAOAJAKQAJAJANAGQANAHAPgBQAQABANgHQANgGAKgJQAIgKAFgOQAFgNAAgPQAAgOgFgNQgFgNgIgLQgKgKgNgGQgNgFgQAAQgPAAgNAFg");
	this.shape_107.setTransform(-326.2,-174.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgXBjIAOgYQAGgLADgMQAEgLACgNQACgOAAgOQAAgOgCgMQgCgNgEgMQgDgLgGgLIgNgYIANgJQAPAWAJAcQAJAcAAAcQAAAcgJAcQgJAcgQAYg");
	this.shape_108.setTransform(-365.1,-173);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AAMBVIAAiTIgeAbIgKgOIAqgjIAPAAIAACpg");
	this.shape_109.setTransform(-375.6,-174.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgOA5QgJgcAAgdQAAgbAJgcQAJgcAQgXIANAIIgOAXQgGAMgEAMQgDAMgCANQgCAMAAAOQAAAOACAOQACAMADALQAEAMAGALIANAYIgNAKQgPgXgJgcg");
	this.shape_110.setTransform(-383.6,-173);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_111.setTransform(-400.4,-171.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_112.setTransform(-413.2,-171.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIABANIgQAAIgBgJIAAgJIgHAIQgEAEgFADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_113.setTransform(-426.4,-171.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_114.setTransform(-107.7,-194.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_115.setTransform(-116.1,-200.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_116.setTransform(-127.9,-200.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_117.setTransform(-141.5,-200.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_118.setTransform(-155.1,-200.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_119.setTransform(-165.1,-203.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_120.setTransform(-173.3,-200.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_121.setTransform(-186,-200.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_122.setTransform(-202.4,-200.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_123.setTransform(-215.3,-200.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_124.setTransform(-223.2,-203.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#111111").s().p("AgNBcIAAhhIgXAAIAAgOIAXAAIAAgfQAAgWALgKQAJgJARAAIAGAAIAHACIgCAOIgHgBIgGgBQgGAAgEACQgEADgCAEIgEAJIAAALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_125.setTransform(-229.1,-204.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_126.setTransform(-239.7,-200.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAJgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_127.setTransform(-257.3,-200.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_128.setTransform(-269.2,-200.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIADAGQADADACAAIAIABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_129.setTransform(-279.8,-202);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_130.setTransform(-290.7,-200.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_131.setTransform(-303.8,-200.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_132.setTransform(-313.4,-203.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_133.setTransform(-323,-200.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_134.setTransform(-337.2,-197.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_135.setTransform(-347.1,-203.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_136.setTransform(-355,-200.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgGgDQgFgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_137.setTransform(-371.9,-200.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_138.setTransform(-383.6,-200.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_139.setTransform(-408.6,-200.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#111111").s().p("AhIBVIAAipIA5AAQAPAAAPAFQARAFAMAMQANAKAIAQQAIAQAAAUQAAAVgIAQQgIAQgNALQgMAKgRAGQgPAFgPAAgAg2BFIAhAAQATAAANgGQAPgFAKgLQAJgJAEgMQAFgNAAgNQAAgMgFgNQgEgMgJgJQgKgKgPgGQgNgGgTAAIghAAg");
	this.shape_140.setTransform(-423.7,-203.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICCAAIAAAQIg4AAIAACZg");
	this.shape_141.setTransform(-172.6,-174.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAKAKAFQAKAFANAAQAGAAAGgBQAHgCAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgEgDgIQgEgIAAgMQAAgMAFgKQAEgJAIgGQAIgFAKgEQAJgDAKAAQAOAAAMAGQAMAEAKALIgPAMQgMgQgVAAQgGAAgGABQgHACgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_142.setTransform(-186.2,-174.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAKAKAFQAKAFANAAQAGAAAGgBQAHgCAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgEgDgIQgEgIAAgMQAAgMAFgKQAEgJAIgGQAIgFAKgEQAJgDAKAAQAOAAAMAGQAMAEAKALIgPAMQgMgQgVAAQgGAAgGABQgHACgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_143.setTransform(-199.5,-174.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#111111").s().p("AgWBSQgQgGgMgMQgMgMgHgQQgGgQgBgUQABgTAGgQQAHgQAMgMQALgMARgGQAQgIASAAQAVAAAOAHQAPAFAMAMIgOAMQgIgJgMgFQgMgGgQABQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAPAFANQAFAOAJAKQAJAJANAGQANAHAPgBQANAAANgDQAMgDAJgFIAAg6IgoAAIAAgOIA5AAIAABSQgOAJgRAEQgRAEgQABQgSAAgQgIg");
	this.shape_144.setTransform(-224,-174.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAKAKAFQAKAFANAAQAGAAAGgBQAHgCAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgEgDgIQgEgIAAgMQAAgMAFgKQAEgJAIgGQAIgFAKgEQAJgDAKAAQAOAAAMAGQAMAEAKALIgPAMQgMgQgVAAQgGAAgGABQgHACgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_145.setTransform(-239.5,-174.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgFgEgCgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_146.setTransform(-321.6,-173.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_147.setTransform(-336.4,-171.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgMQAAgOAFgKQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFAKAAAOQAAAMgFALQgEALgIAHQgIAJgLAEQgLAFgNgBQgMABgLgFgAgRgNQgIAEgFAFQgGAGgCAIQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgIgFgGQgGgFgIgEQgHgEgKABQgJgBgIAEgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_148.setTransform(-348.7,-174.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAEgFAFgEIALgHQAGgDAHgBIAKgBQANAAAMAEQALAEAHAIQAIAJAEALQAFAKAAANQAAANgFALQgEAJgIAIQgIAIgKAEQgMAFgNAAIgKgBIgNgEIgLgHQgFgEgEgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgDAJAAAJQAAAJADAIQAEAIAGAHQAGAEAIAEQAJADAIAAQAKAAAIgDQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_149.setTransform(-362.7,-168.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_150.setTransform(-387.6,-171.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIABAAQADgFAGgEIALgHQAFgDAGgBIALgBQANAAALAEQALAEAIAIQAIAJAFALQAEAKAAANQAAANgEALQgFAJgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhJQgIADgGAGQgGAGgDAIQgDAJAAAJQAAAJADAIQADAIAGAHQAGAEAIAEQAJADAIAAQAKAAAIgDQAIgEAFgEQAGgHADgIQADgIAAgJQAAgJgDgJQgDgIgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_151.setTransform(-399.6,-168.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAFgFAEgEIAMgHQAFgDAHgBIAKgBQAOAAALAEQALAEAHAIQAIAJAEALQAFAKAAANQAAANgFALQgEAJgIAIQgHAIgLAEQgLAFgOAAIgKgBIgMgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgDAIQgEAJAAAJQAAAJAEAIQADAIAGAHQAGAEAIAEQAIADAJAAQAKAAAIgDQAHgEAHgEQAFgHADgIQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_152.setTransform(-169.9,-197.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgCAIAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_153.setTransform(-204.1,-200.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_154.setTransform(-254.6,-200.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_155.setTransform(-353.8,-200.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111111").s().p("AgNBcIAAhhIgXAAIAAgOIAXAAIAAgfQAAgWALgKQAJgJARAAIAGAAIAHACIgCAOIgHgBIgFgBQgHAAgEACQgEADgCAEIgEAJIAAALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_156.setTransform(-367.6,-204.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAJgDAGQgEAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_157.setTransform(-395.8,-200.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#111111").s().p("AA+BVIgTgtIhVAAIgTAtIgUAAIBKipIAPAAIBKCpgAgkAZIBJAAIglhZg");
	this.shape_158.setTransform(-177.4,-174.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#111111").s().p("AgIBVIhBipIATAAIA2CPIAAAAIA3iPIATAAIhCCpg");
	this.shape_159.setTransform(-217.8,-174.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#111111").s().p("AA+BVIgTgtIhVAAIgTAtIgUAAIBKipIAPAAIBKCpgAgkAZIBJAAIglhZg");
	this.shape_160.setTransform(-233.4,-174.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#111111").s().p("AgLBbIgMgEIgKgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIAKgHQAGgDAGgBIALgBQAOAAAKAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_161.setTransform(-307.7,-175.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIAAAAQAFgFAEgEIAMgHQAGgDAFgBIALgBQANAAALAEQAMAEAHAIQAIAJAEALQAFAKAAANQAAANgFALQgEAJgIAIQgHAIgMAEQgLAFgNAAIgLgBIgLgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhJQgIADgGAGQgGAGgDAIQgEAJAAAJQAAAJAEAIQADAIAGAHQAGAEAIAEQAIADAJAAQAKAAAIgDQAHgEAHgEQAFgHADgIQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_162.setTransform(-352.5,-168.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgKgEgIgHQgJgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_163.setTransform(-388.8,-169);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIAAANIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_164.setTransform(-107.5,-200.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_165.setTransform(-125.8,-200.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#111111").s().p("AgiBSQgQgGgMgMQgMgMgHgQQgHgQAAgUQAAgTAHgQQAHgQAMgMQAMgMAQgGQAQgIASAAQATAAAQAIQAQAGAMAMQAMAMAHAQQAGAQAAATQAAAUgGAQQgHAQgMAMQgMAMgQAGQgQAIgTAAQgSAAgQgIgAgchDQgNAGgJAKQgJALgFANQgFANAAAOQAAAPAFANQAFAOAJAKQAJAJANAGQANAHAPgBQAQABANgHQANgGAKgJQAJgKAEgOQAFgNAAgPQAAgOgFgNQgEgNgJgLQgKgKgNgGQgNgFgQAAQgPAAgNAFg");
	this.shape_166.setTransform(-160.9,-203.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#111111").s().p("AAxBVIhkiRIgBAAIAACRIgRAAIAAipIAVAAIBlCPIAAAAIAAiPIARAAIAACpg");
	this.shape_167.setTransform(-180.3,-203.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_168.setTransform(-230.6,-200.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAJgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_169.setTransform(-255.5,-200.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_170.setTransform(-353.2,-200.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgGgDQgFgFgJAAIgIABIgHADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_171.setTransform(-370.1,-200.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_172.setTransform(-196.1,-171.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_173.setTransform(-266.3,-171.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgFgEgEgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAEgGAFgEIALgHQAGgDAHgBIAKgBQANAAAMAFQALAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgDAIAAAJQAAAJADAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_174.setTransform(-297.5,-175.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAIAHAAANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_175.setTransform(-316,-171.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_176.setTransform(-247.5,-200.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_177.setTransform(-326.1,-200.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_178.setTransform(-362.8,-200.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_179.setTransform(-377.2,-203.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_180.setTransform(-410.1,-200.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#111111").s().p("AgeBRQgMgHgHgKQgHgKgDgMQgCgMAAgLIAAhpIARAAIAABnQAAANACAIQADAJAEAGQAEAGAFAEIAKAFIAJADIAHAAIAIAAQAFgBAEgCIAKgFQAFgEAEgGQAEgGADgJQACgIAAgNIAAhnIARAAIAABpQAAALgCAMQgDAMgHAKQgHAKgMAHQgMAGgTAAQgSAAgMgGg");
	this.shape_181.setTransform(-424.8,-203.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgEgDgFQgDgGAAgJIAAhHIgXAAIAAgOIAXAAIAAgfIAPAAIAAAfIAhAAIAAAOIghAAIAABCIABAKIAEAGQABADADAAIAHABIAIgBIAJgEIAAAQQgJADgMAAIgJgBg");
	this.shape_182.setTransform(-166.5,-173.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgKgEgJgHQgIgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAFAGAIAEQAIADAIAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_183.setTransform(-224,-169);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIABAAQADgFAGgEIALgHQAGgDAFgBIALgBQANAAALAEQALAEAIAIQAIAJAFALQAEAKAAANQAAANgEALQgFAJgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhJQgIADgGAGQgGAGgDAIQgDAJgBAJQABAJADAIQADAIAGAHQAGAEAIAEQAJADAIAAQAKAAAIgDQAHgEAHgEQAFgHADgIQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgDQgIgEgKAAQgIAAgJAEg");
	this.shape_184.setTransform(-360.1,-168.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#111111").s().p("AgYA2QgKgFgIgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_185.setTransform(-372.8,-171.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgEAGgCQAGgCAHAAIAMABIgDAQQgDgBgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_186.setTransform(-402.2,-171.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#111111").s().p("AAsBcIAAhYIgBAAQgDAGgGAEIgLAHIgLAEIgMABQgNAAgKgFQgLgEgIgIQgIgIgFgJQgEgLAAgNQAAgNAEgKQAFgLAIgJQAIgIALgEQAKgEANAAIAMABQAGABAFADIALAHQAGAEADAFIABAAIAAgSIAQAAIAAC0gAgRhJQgIADgFAGQgGAGgDAIQgCAJAAAJQAAAJACAIQADAIAGAHQAFAEAIAEQAIADAJAAQAKAAAIgDQAIgEAGgEQAGgHADgIQAEgIAAgJQAAgJgEgJQgDgIgGgGQgGgGgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_187.setTransform(-206.2,-197.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQADgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_188.setTransform(-241.7,-197.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_189.setTransform(-393.9,-200.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_190.setTransform(-413,-200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43,p:{x:-415.9,y:-205.3}},{t:this.shape_42,p:{x:-403.5,y:-205.3}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:-340.8,y:-205.1}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-278.8,y:-204.7}},{t:this.shape_33,p:{x:-266.4,y:-204.7}},{t:this.shape_32},{t:this.shape_31,p:{x:-233.5,y:-204.7}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:-154.9,y:-199.1}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-86.1,y:-205.1}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:-386.2,y:-176.5}},{t:this.shape_15,p:{x:-376.7,y:-172.9}},{t:this.shape_14,p:{x:-363,y:-176.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-299.1,y:-176.5}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_63,p:{y:-190.9}},{t:this.shape_62,p:{y:-190.9}},{t:this.shape_61,p:{y:-188.2,x:-397}},{t:this.shape_60,p:{y:-190.9}},{t:this.shape_59,p:{y:-190.9}},{t:this.shape_58,p:{y:-190.9}},{t:this.shape_57},{t:this.shape_56,p:{x:-322}},{t:this.shape_55,p:{x:-308.4}},{t:this.shape_16,p:{x:-292,y:-191.5}},{t:this.shape_54,p:{x:-283.2}},{t:this.shape_53},{t:this.shape_52,p:{x:-254.6}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_10,p:{x:-226.3,y:-191.5}},{t:this.shape_49,p:{x:-217.5}},{t:this.shape_48},{t:this.shape_47,p:{x:-187.2,y:-191.4}},{t:this.shape_46,p:{x:-172.8}},{t:this.shape_45}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_16,p:{x:-354.2,y:-191.5}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_54,p:{x:-310.3}},{t:this.shape_71},{t:this.shape_70,p:{x:-280.8,y:-188.1}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_52,p:{x:-226.7}},{t:this.shape_65},{t:this.shape_56,p:{x:-199.9}},{t:this.shape_64},{t:this.shape_38,p:{x:-172.5,y:-191.4}},{t:this.shape_46,p:{x:-158.1}},{t:this.shape_55,p:{x:-145}},{t:this.shape_49,p:{x:-125.5}},{t:this.shape_10,p:{x:-116.1,y:-191.5}},{t:this.shape_63,p:{y:-162.1}},{t:this.shape_62,p:{y:-162.1}},{t:this.shape_61,p:{y:-159.4,x:-397}},{t:this.shape_60,p:{y:-162.1}},{t:this.shape_59,p:{y:-162.1}},{t:this.shape_58,p:{y:-162.1}}]},1).to({state:[{t:this.shape_140},{t:this.shape_139,p:{x:-408.6}},{t:this.shape_42,p:{x:-392.4,y:-204}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:-347.1}},{t:this.shape_134,p:{x:-337.2,y:-197.8}},{t:this.shape_133,p:{x:-323}},{t:this.shape_132,p:{x:-313.4}},{t:this.shape_131,p:{x:-303.8}},{t:this.shape_130,p:{x:-290.7}},{t:this.shape_129,p:{x:-279.8}},{t:this.shape_128,p:{x:-269.2,y:-200.5}},{t:this.shape_127,p:{x:-257.3,y:-200.5}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124,p:{x:-223.2,y:-203.3}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121,p:{x:-186}},{t:this.shape_120,p:{x:-173.3}},{t:this.shape_119,p:{x:-165.1,y:-203.3}},{t:this.shape_118},{t:this.shape_117,p:{x:-141.5,y:-200.7}},{t:this.shape_116,p:{x:-127.9,y:-200.5}},{t:this.shape_115,p:{x:-116.1}},{t:this.shape_114,p:{x:-107.7}},{t:this.shape_113},{t:this.shape_112,p:{x:-413.2,y:-171.9}},{t:this.shape_111,p:{x:-400.4,y:-171.7}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_33,p:{x:-345.5,y:-174.6}},{t:this.shape_107},{t:this.shape_106,p:{x:-302.9,y:-171.7}},{t:this.shape_105,p:{x:-291}},{t:this.shape_15,p:{x:-272.7,y:-171.6}},{t:this.shape_104,p:{x:-259.5,y:-171.9}},{t:this.shape_103,p:{x:-239.8,y:-171.8}},{t:this.shape_102,p:{x:-227.3,y:-171.7}},{t:this.shape_101},{t:this.shape_100,p:{x:-192}},{t:this.shape_99,p:{x:-180.1}},{t:this.shape_98,p:{x:-170,y:-171.7}},{t:this.shape_97,p:{x:-152.9,y:-171.9}},{t:this.shape_96,p:{x:-139.6}},{t:this.shape_95,p:{x:-131.5}},{t:this.shape_94,p:{x:-119.4,y:-171.7}},{t:this.shape_93},{t:this.shape_92,p:{x:-411.7,y:-142.9}},{t:this.shape_16,p:{x:-395.5,y:-146.4}},{t:this.shape_91,p:{x:-385.5,y:-142.9}},{t:this.shape_90},{t:this.shape_70,p:{x:-355.4,y:-143}},{t:this.shape_89,p:{x:-342.9,y:-142.9}},{t:this.shape_10,p:{x:-332.9,y:-146.4}},{t:this.shape_88,p:{x:-324.1,y:-142.9}},{t:this.shape_87},{t:this.shape_86,p:{x:-295.8,y:-142.9}},{t:this.shape_85,p:{x:-283.6,y:-143.1}},{t:this.shape_84,p:{x:-274.8,y:-142.9}},{t:this.shape_14,p:{x:-261.3,y:-146.3}},{t:this.shape_83,p:{x:-246.5,y:-142.9}},{t:this.shape_82},{t:this.shape_81,p:{x:-224.7,y:-142.9}},{t:this.shape_80}]},1).to({state:[{t:this.shape_140},{t:this.shape_98,p:{x:-408.1,y:-200.5}},{t:this.shape_157,p:{x:-395.8}},{t:this.shape_111,p:{x:-378.2,y:-200.5}},{t:this.shape_156},{t:this.shape_124,p:{x:-361.7,y:-203.3}},{t:this.shape_155},{t:this.shape_97,p:{x:-340.9,y:-200.7}},{t:this.shape_88,p:{x:-324.5,y:-200.5}},{t:this.shape_103,p:{x:-311.8,y:-200.6}},{t:this.shape_119,p:{x:-303.6,y:-203.3}},{t:this.shape_94,p:{x:-293.6,y:-200.5}},{t:this.shape_117,p:{x:-280,y:-200.7}},{t:this.shape_116,p:{x:-266.4,y:-200.5}},{t:this.shape_154,p:{x:-254.6,y:-200.5}},{t:this.shape_70,p:{x:-236.7,y:-200.6}},{t:this.shape_91,p:{x:-224.2,y:-200.5}},{t:this.shape_85,p:{x:-212.1,y:-200.7}},{t:this.shape_153},{t:this.shape_106,p:{x:-194.5,y:-200.5}},{t:this.shape_115,p:{x:-182.7}},{t:this.shape_152,p:{x:-169.9,y:-197.2}},{t:this.shape_89,p:{x:-155.9,y:-200.5}},{t:this.shape_112,p:{x:-142.3,y:-200.7}},{t:this.shape_20,p:{x:-128.4,y:-203.9}},{t:this.shape_92,p:{x:-114.1,y:-200.5}},{t:this.shape_104,p:{x:-100.9,y:-200.7}},{t:this.shape_84,p:{x:-427.1,y:-171.7}},{t:this.shape_151,p:{x:-399.6,y:-168.4}},{t:this.shape_150},{t:this.shape_86,p:{x:-377.6,y:-171.7}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_96,p:{x:-328.5}},{t:this.shape_146},{t:this.shape_83,p:{x:-310.5,y:-171.7}},{t:this.shape_105,p:{x:-298.2}},{t:this.shape_38,p:{x:-279.6,y:-175.1}},{t:this.shape_81,p:{x:-265.2,y:-171.7}},{t:this.shape_10,p:{x:-255.7,y:-175.2}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_61,p:{y:-171.9,x:-210.1}},{t:this.shape_143},{t:this.shape_142,p:{x:-186.2,y:-174.6}},{t:this.shape_141}]},1).to({state:[{t:this.shape_140},{t:this.shape_139,p:{x:-408.6}},{t:this.shape_16,p:{x:-392.4,y:-204}},{t:this.shape_91,p:{x:-382.4,y:-200.5}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_132,p:{x:-345.3}},{t:this.shape_134,p:{x:-335.4,y:-197.8}},{t:this.shape_133,p:{x:-321.2}},{t:this.shape_124,p:{x:-311.6,y:-203.3}},{t:this.shape_131,p:{x:-302}},{t:this.shape_130,p:{x:-288.9}},{t:this.shape_129,p:{x:-278}},{t:this.shape_128,p:{x:-267.4,y:-200.5}},{t:this.shape_169},{t:this.shape_114,p:{x:-247.2}},{t:this.shape_168,p:{x:-230.6}},{t:this.shape_117,p:{x:-217.4,y:-200.7}},{t:this.shape_89,p:{x:-203.4,y:-200.5}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_116,p:{x:-137.6,y:-200.5}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_112,p:{x:-94.3,y:-200.7}},{t:this.shape_99,p:{x:-428}},{t:this.shape_119,p:{x:-422.2,y:-174.5}},{t:this.shape_106,p:{x:-412.7,y:-171.7}},{t:this.shape_154,p:{x:-400.8,y:-171.7}},{t:this.shape_163},{t:this.shape_86,p:{x:-374,y:-171.7}},{t:this.shape_162},{t:this.shape_83,p:{x:-338.5,y:-171.7}},{t:this.shape_127,p:{x:-326.2,y:-171.7}},{t:this.shape_96,p:{x:-318.3}},{t:this.shape_161},{t:this.shape_10,p:{x:-297.9,y:-175.2}},{t:this.shape_92,p:{x:-288.3,y:-171.7}},{t:this.shape_81,p:{x:-268.3,y:-171.7}},{t:this.shape_104,p:{x:-255.2,y:-171.9}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_34,p:{x:-207.4,y:-174.6}},{t:this.shape_33,p:{x:-194.9,y:-174.6}},{t:this.shape_158},{t:this.shape_31,p:{x:-162,y:-174.6}}]},1).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_111,p:{x:-397.3,y:-200.5}},{t:this.shape_179},{t:this.shape_178,p:{x:-362.8}},{t:this.shape_43,p:{x:-346.6,y:-204}},{t:this.shape_88,p:{x:-337.8,y:-200.5}},{t:this.shape_177},{t:this.shape_102,p:{x:-307.3,y:-200.5}},{t:this.shape_151,p:{x:-292.5,y:-197.2}},{t:this.shape_103,p:{x:-279.4,y:-200.6}},{t:this.shape_132,p:{x:-271.1}},{t:this.shape_98,p:{x:-261.1,y:-200.5}},{t:this.shape_176},{t:this.shape_139,p:{x:-234}},{t:this.shape_157,p:{x:-222.1}},{t:this.shape_70,p:{x:-204.3,y:-200.6}},{t:this.shape_94,p:{x:-191.8,y:-200.5}},{t:this.shape_130,p:{x:-178.2}},{t:this.shape_129,p:{x:-167.3}},{t:this.shape_124,p:{x:-160.5,y:-203.3}},{t:this.shape_131,p:{x:-150.9}},{t:this.shape_117,p:{x:-137.8,y:-200.7}},{t:this.shape_128,p:{x:-124.2,y:-200.5}},{t:this.shape_99,p:{x:-428}},{t:this.shape_119,p:{x:-422.2,y:-174.5}},{t:this.shape_116,p:{x:-412.7,y:-171.7}},{t:this.shape_154,p:{x:-400.8,y:-171.7}},{t:this.shape_163},{t:this.shape_91,p:{x:-374,y:-171.7}},{t:this.shape_127,p:{x:-361.7,y:-171.7}},{t:this.shape_100,p:{x:-342.3}},{t:this.shape_89,p:{x:-328.3,y:-171.7}},{t:this.shape_175},{t:this.shape_96,p:{x:-308.1}},{t:this.shape_174},{t:this.shape_42,p:{x:-287.7,y:-175.2}},{t:this.shape_106,p:{x:-278.1,y:-171.7}},{t:this.shape_173},{t:this.shape_92,p:{x:-247.9,y:-171.7}},{t:this.shape_112,p:{x:-234.8,y:-171.9}},{t:this.shape_16,p:{x:-218.4,y:-175.2}},{t:this.shape_86,p:{x:-208.4,y:-171.7}},{t:this.shape_172},{t:this.shape_26,p:{x:-177.4,y:-169}},{t:this.shape_84,p:{x:-163.8,y:-171.7}},{t:this.shape_10,p:{x:-154.4,y:-175.2}},{t:this.shape_152,p:{x:-143.8,y:-168.4}},{t:this.shape_83,p:{x:-129.8,y:-171.7}},{t:this.shape_104,p:{x:-116.2,y:-171.9}},{t:this.shape_81,p:{x:-102.6,y:-171.7}},{t:this.shape_105,p:{x:-90.8}}]},1).to({state:[{t:this.shape_142,p:{x:-426.4,y:-203.4}},{t:this.shape_190},{t:this.shape_42,p:{x:-403.5,y:-204}},{t:this.shape_189},{t:this.shape_120,p:{x:-381.1}},{t:this.shape_103,p:{x:-369.5,y:-200.6}},{t:this.shape_135,p:{x:-361.3}},{t:this.shape_91,p:{x:-351.3,y:-200.5}},{t:this.shape_130,p:{x:-337.7}},{t:this.shape_121,p:{x:-324.9}},{t:this.shape_178,p:{x:-305}},{t:this.shape_16,p:{x:-295.5,y:-204}},{t:this.shape_85,p:{x:-280.9,y:-200.7}},{t:this.shape_132,p:{x:-275.1}},{t:this.shape_139,p:{x:-265.6}},{t:this.shape_127,p:{x:-253.7,y:-200.5}},{t:this.shape_188},{t:this.shape_89,p:{x:-226.9,y:-200.5}},{t:this.shape_187},{t:this.shape_168,p:{x:-191.9}},{t:this.shape_131,p:{x:-178.5}},{t:this.shape_70,p:{x:-426.9,y:-171.8}},{t:this.shape_86,p:{x:-414.4,y:-171.7}},{t:this.shape_186},{t:this.shape_99,p:{x:-394.3}},{t:this.shape_128,p:{x:-384.7,y:-171.7}},{t:this.shape_185},{t:this.shape_184},{t:this.shape_83,p:{x:-346,y:-171.7}},{t:this.shape_117,p:{x:-332.4,y:-171.9}},{t:this.shape_47,p:{x:-318.6,y:-175.1}},{t:this.shape_116,p:{x:-304.2,y:-171.7}},{t:this.shape_111,p:{x:-285,y:-171.7}},{t:this.shape_10,p:{x:-268.9,y:-175.2}},{t:this.shape_88,p:{x:-260.1,y:-171.7}},{t:this.shape_95,p:{x:-241.8}},{t:this.shape_124,p:{x:-233.9,y:-174.5}},{t:this.shape_183},{t:this.shape_15,p:{x:-209.7,y:-171.6}},{t:this.shape_119,p:{x:-200.1,y:-174.5}},{t:this.shape_106,p:{x:-190.6,y:-171.7}},{t:this.shape_112,p:{x:-177.4,y:-171.9}},{t:this.shape_182},{t:this.shape_92,p:{x:-155.9,y:-171.7}},{t:this.shape_96,p:{x:-139.7}},{t:this.shape_97,p:{x:-126.8,y:-171.9}},{t:this.shape_84,p:{x:-110.5,y:-171.7}},{t:this.shape_134,p:{x:-96.9,y:-169}},{t:this.shape_81,p:{x:-82.6,y:-171.7}},{t:this.shape_104,p:{x:-69.5,y:-171.9}}]},1).wait(3));

	// Images
	this.instance = new lib.Mapadebits5();
	this.instance.parent = this;
	this.instance.setTransform(-381,-85);

	this.instance_1 = new lib.Mapadebits6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-381,-85);

	this.instance_2 = new lib.Mapadebits7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-381,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Anwers
	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_191.setTransform(181.1,-169.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFAAgJQAAgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAJgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_192.setTransform(172.7,-174);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_193.setTransform(160.4,-174);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_194.setTransform(150.4,-177.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_195.setTransform(144.7,-177.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_196.setTransform(135.1,-174);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFADAHAAQAIgBAFgFQAFgFADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_197.setTransform(116.1,-171.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgHgHgDQgFgFgJAAIgHABIgIADIgGAFQgBAEAAAEQAAAIAFADQAFAEALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_198.setTransform(409.9,-208.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_199.setTransform(397.6,-208.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#111111").s().p("AgeA5IAAhMIAAgPIgBgUIAPAAIAAAVIABAAQACgFADgDQADgFAFgEQADgCAGgDQAGgCAHAAIAMABIgDAQQgEgBgGAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_200.setTransform(387.5,-208.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_201.setTransform(378.6,-209.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_202.setTransform(367.4,-208.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgHgGgDQgFgFgJAAIgHABIgIADIgGAFQgCAEAAAEQABAIAFADQAGAEAKADIAQAEQALACAJAIQAHAHABAMQgBAKgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_203.setTransform(355.3,-208.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_204.setTransform(343,-208.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_205.setTransform(330.1,-208.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_206.setTransform(314.3,-202);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAFAKgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgHgFgDQgHgFgIAAIgIABIgHADIgFAFQgCAEgBAEQAAAIAGADQAGAEAKADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_207.setTransform(306,-208.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_208.setTransform(293.7,-208.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#111111").s().p("AgeA5IAAhMIgBgPIAAgUIAQAAIAAAVIAAAAQABgFAEgDQADgFAEgEQAEgCAGgDQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_209.setTransform(283.6,-208.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgFgEgCgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_210.setTransform(274.7,-209.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_211.setTransform(263.5,-208.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgHgGgDQgFgFgJAAIgIABIgHADIgFAFQgCAEAAAEQgBAIAGADQAFAEALADIAQAEQALACAIAIQAJAHgBAMQAAAKgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_212.setTransform(251.4,-208.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_213.setTransform(239.1,-208.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABGg");
	this.shape_214.setTransform(225.1,-208.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_215.setTransform(208.6,-202);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_216.setTransform(202.4,-211.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#111111").s().p("AgTBSQgLgEgIgJQgHgHgFgLQgEgLAAgMQAAgOAEgKQAEgKAIgIQAIgIAKgEQAKgEALgBQANABAKAEQAKAFAHAHQAHAHADAKQAEAKAAALIAAAHIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHADAIAAQANAAAJgGQAJgGAFgHIAMAKQgKANgMAFQgMAGgOgBQgMABgKgFgAgNgNQgHADgFAEQgGAGgDAFQgDAHAAAHIBLAAQAAgQgKgJQgJgLgSABQgGgBgIAEgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_217.setTransform(192.9,-210.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_218.setTransform(176.2,-202);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#111111").s().p("AgmBLQgJgLgBgWIAAhGIAQAAIAAA9QAAAJABAIQACAHAEAFQADAFAGACQAGADAIAAIAGgBQAGgBAGgEQAGgFAFgIQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAAMIgQAAIAAgJIgBgJIgHAJQgDAEgGADQgFADgFABIgKABQgWAAgLgLgAgNgzIAXgjIAWAAIgfAjg");
	this.shape_219.setTransform(166.2,-210.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#111111").s().p("AAFBIQgEgBgDgDQgEgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQADACADABIAHABIAHgBIAIgEIABAQQgJADgMAAIgKgBg");
	this.shape_220.setTransform(155.6,-209.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_221.setTransform(141.6,-202);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_222.setTransform(131.2,-208.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#111111").s().p("AgIBVIAAhJIg/hgIAVAAIAyBQIAzhQIAVAAIg/BgIAABJg");
	this.shape_223.setTransform(117.1,-211);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_224.setTransform(441,152.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgDQgFgCgDgGQgEgGABgHQgBgJAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_225.setTransform(432.6,148);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_226.setTransform(420.3,148);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_227.setTransform(402.8,147.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_228.setTransform(386.2,148);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_229.setTransform(372.6,144.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_230.setTransform(362.8,145.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgRAAIAAgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_231.setTransform(353.2,148.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_232.setTransform(341.2,147.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgGgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQALACAJAIQAHAHABAMQgBAKgEAGQgDAGgGAFQgGAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_233.setTransform(323.3,148);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_234.setTransform(311,148);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGABQgGABgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_235.setTransform(297,147.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgEQgHgFgIAAIgHABIgIADIgFAFQgDADAAAFQAAAIAGAEQAFADALADIAQAEQALACAJAIQAHAHABAMQAAAKgFAGQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_236.setTransform(278.9,148);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_237.setTransform(266.6,148);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQACgFADgDQADgFAEgEQAEgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgFAAQgJAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_238.setTransform(256.5,147.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAJgEIAAAPQgJAEgMAAIgJgBg");
	this.shape_239.setTransform(247.6,146.5);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_240.setTransform(236.4,148);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgDQgFgCgDgGQgEgGABgHQgBgJAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgOAJQgFgGgFgEQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_241.setTransform(224.3,148);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_242.setTransform(212,148);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRABIgGABQgGABgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_243.setTransform(198,147.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_244.setTransform(181.5,154.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgDQgFgCgDgGQgDgGgBgHQABgJADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_245.setTransform(173.2,148);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_246.setTransform(161.5,148);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_247.setTransform(147.9,144.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_248.setTransform(138,145.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIABANIgQAAIgBgJIAAgJIgHAIQgEAEgFADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_249.setTransform(128.4,148.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_250.setTransform(116.4,147.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_251.setTransform(398.5,119.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_252.setTransform(381.4,119);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_253.setTransform(358,119.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_254.setTransform(347.5,117.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_255.setTransform(333.5,125.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgKQgHgLgRABIgGAAQgGACgGAEQgGAEgFAJQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_256.setTransform(323.3,119);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_257.setTransform(310.3,119.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_258.setTransform(296.7,115.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_259.setTransform(286.8,116.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgRAAIAAgJIAAgJIgIAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_260.setTransform(277.2,119.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_261.setTransform(265.2,119.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_262.setTransform(245.7,119.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgDgCgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_263.setTransform(235.1,117.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAIAHAEQAHAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgDQgFgCgDgGQgDgGAAgHQAAgJADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgGgGgEQgFgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGAEQAFADALADIAQAEQALACAIAIQAJAHgBAMQAAAKgDAGQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_264.setTransform(219.4,119.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#111111").s().p("AgXBUQgGgCgGgEQgFgEgDgGQgEgHAAgHQAAgOAHgIQAHgIALgEQALgDALgBIAWgCIAIAAIAAgDQAAgbgdAAQgSAAgPANIgKgMQAQgQAfAAQAIAAAIADQAHACAGAFQAFAFADAIQAEAHAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHAMgKAFQgJAEgNAAQgIAAgHgCgAAHAcIgQADQgJACgGAFQgGAFAAAJQAAAFADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgCAFgFQAEgGACgGQACgHAAgHIAAgIIgIAAIgPAAgAgKgzIAXgjIAVAAIgfAjg");
	this.shape_265.setTransform(207.7,116.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIIgBAOIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_266.setTransform(191.4,119);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_267.setTransform(174.7,119.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_268.setTransform(160.3,115.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgJgCIgPgEIgIgCQgFgCgEgDQgFgCgDgGQgDgGgBgHQABgJADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFAEQAFADALADIAQAEQAMACAHAIQAJAHgBAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_269.setTransform(141.7,119.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAIAAAJQAAAJAEAIQACAIAGAHQAFAFAIAEQAIAEAJgBQAKABAHgEQAIgEAGgFQAFgHADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_270.setTransform(129.4,119.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#111111").s().p("AgvBVIAAipIARAAIAACZIBOAAIAAAQg");
	this.shape_271.setTransform(117.4,116.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_272.setTransform(439.2,43.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAIAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgOgEIgJgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgOAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_273.setTransform(430.8,39.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_274.setTransform(418.5,39.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGAEgDAGQgEAFgCAHIgBAQIAAA7IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGACQgFAAgGAFQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgGQALgHALABQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_275.setTransform(401,39);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_276.setTransform(384.4,39.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_277.setTransform(370.8,35.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_278.setTransform(361,36.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_279.setTransform(351.4,39.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_280.setTransform(339.4,39.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_281.setTransform(319.9,39.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADADAAIAHABIAIgBIAIgDIABAPQgJADgNABIgKgBg");
	this.shape_282.setTransform(309.3,37.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgOgEIgJgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgOAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_283.setTransform(293.6,39.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_284.setTransform(281.3,39.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAPAAIAAAVIABAAQACgEADgEQADgFAEgDQAEgEAGgCQAGgBAHAAIAMAAIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA/g");
	this.shape_285.setTransform(271.2,39);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQADADADAAIAHABIAHgBIAIgDIABAPQgJADgMABIgKgBg");
	this.shape_286.setTransform(262.3,37.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_287.setTransform(251.1,39.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgBADgBAFQABAIAFADQAGAEAKADIAQADQAMADAHAHQAIAJAAAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_288.setTransform(239,39.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_289.setTransform(226.7,39.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_290.setTransform(212.7,39);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFACAHAAQAIAAAFgEQAFgGADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_291.setTransform(193.8,42);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAHAEQAIAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_292.setTransform(176.3,39.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#111111").s().p("AgXBVQgGgCgGgFQgFgEgDgGQgEgGAAgJQAAgNAHgIQAHgIALgDQALgFALgBIAWgBIAIAAIAAgCQAAgcgdgBQgSAAgPAOIgKgLQAQgRAfABQAIAAAIABQAHADAGAFQAFAFADAHQAEAIAAAJIAAAzIAAANIACAMIgQAAIgBgJIAAgJQgHAKgKAFQgJAGgNgBQgIAAgHgBgAAHAcIgQADQgJADgGAEQgGAFAAAIQAAAGADAEQACAEAEADQAEACAEABIAKABQAIAAAGgDQAGgDAFgFQAEgEACgHQACgHAAgHIAAgJIgIAAIgPABgAgKgzIAXgiIAVAAIgfAig");
	this.shape_293.setTransform(164.6,36.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGAEgDAGQgEAFgCAHIgBAQIAAA7IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGACQgFAAgGAFQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgGQALgHALABQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_294.setTransform(148.3,39);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_295.setTransform(131.6,39.1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_296.setTransform(117.2,35.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAIAIAEQAHAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgDgFAAgJQAAgIADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAFQgDADAAAFQAAAIAGADQAGAEAKADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_297.setTransform(372.1,10.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_298.setTransform(359.8,10.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_299.setTransform(349.8,6.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_300.setTransform(333.8,10.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAIAHAEQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQAAgIADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgGgFQgFgEgJAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_301.setTransform(316.2,10.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_302.setTransform(304.5,10.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_303.setTransform(290.9,7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_304.setTransform(281,7.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIAAANIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_305.setTransform(271.4,10.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_306.setTransform(259.4,10.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_307.setTransform(243.3,16.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAHQAIAJAAAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_308.setTransform(234.9,10.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_309.setTransform(223.2,10.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_310.setTransform(209.6,7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_311.setTransform(199.8,7.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgKgMg");
	this.shape_312.setTransform(190.2,10.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_313.setTransform(178.2,10.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_314.setTransform(158.7,10.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAHABIAIgBIAHgDIACAPQgJADgNAAIgKAAg");
	this.shape_315.setTransform(148.1,8.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#111111").s().p("AglBLQgLgLABgWIAAhGIAPAAIAAA9QAAAKACAHQABAHADAFQAEAFAGACQAFADAKAAIAGgBQAFgBAGgEQAGgFAFgIQAFgJAAgPIAAg5IAPAAIAABXIABALIABAOIgQAAIgBgJIAAgJIgHAIQgEAEgFACQgFAEgGABIgLABQgVAAgKgLgAgNgzIAXgiIAWAAIggAig");
	this.shape_316.setTransform(130.7,7.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#111111").s().p("AgIBVIAAiZIg4AAIAAgQICBAAIAAAQIg5AAIAACZg");
	this.shape_317.setTransform(117.2,7.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_318.setTransform(342,-65.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_319.setTransform(333.6,-69.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_320.setTransform(321.3,-69.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_321.setTransform(303.7,-69.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_322.setTransform(287.2,-69.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_323.setTransform(273.6,-73);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_324.setTransform(263.7,-72.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#111111").s().p("AglAuQgLgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAJAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_325.setTransform(254.1,-69.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_326.setTransform(242.1,-69.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_327.setTransform(222.2,-69.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_328.setTransform(212.2,-73.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgOgEIgIgCQgFgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_329.setTransform(197.6,-69.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_330.setTransform(185.3,-69.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_331.setTransform(175.3,-69.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#111111").s().p("AAGBIQgFgBgDgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgEIABAQQgIADgNAAIgJgBg");
	this.shape_332.setTransform(166.3,-71.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_333.setTransform(155.2,-69.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFAAgJQAAgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_334.setTransform(143,-69.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_335.setTransform(130.7,-69.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_336.setTransform(116.7,-69.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_337.setTransform(375.3,-92.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_338.setTransform(365.4,-98.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgCAJQgDAIAAAJQAAAJADAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_339.setTransform(351.8,-101.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_340.setTransform(342,-101.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_341.setTransform(332.4,-98.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_342.setTransform(320.4,-98.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_343.setTransform(300.9,-98.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgEgFABgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgGgDQgFgFgJAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_344.setTransform(289.2,-98.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_345.setTransform(274.5,-102);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#111111").s().p("AgTBSQgLgEgIgJQgHgIgFgKQgEgLAAgMQAAgNAEgLQAEgKAIgIQAIgIAKgEQAKgEALgBQANABAKAEQAKAEAHAIQAHAIADAJQAEAKAAALIAAAHIhdAAQABAJAEAIQADAHAGAFQAFAGAHADQAHADAIAAQANAAAJgGQAJgFAFgJIAMAKQgKAOgMAFQgMAFgOAAQgMAAgKgEgAgNgNQgHADgFAFQgGAFgDAFQgDAHAAAHIBLAAQAAgRgKgIQgJgKgSAAQgGAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_346.setTransform(264.9,-101.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_347.setTransform(248.3,-92.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_348.setTransform(237.8,-98.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_349.setTransform(223,-101.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_350.setTransform(213.2,-101.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIABANIgQAAIgBgJIAAgJIgHAIQgEAEgFADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_351.setTransform(203.6,-98.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_352.setTransform(191.6,-98.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_353.setTransform(172.1,-98.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRABQgJAAgGADQgGAEgDAFQgEAGgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRABIgGABQgFAAgGAFQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWAAAKALQAKAMAAAWIAABGg");
	this.shape_354.setTransform(155,-98.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_355.setTransform(131.2,-98.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#111111").s().p("AgIBVIAAhJIg/hgIAVAAIAyBQIAzhQIAVAAIg/BgIAABJg");
	this.shape_356.setTransform(117.1,-101.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_357.setTransform(455.2,-178.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_358.setTransform(444.7,-183);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAFAAQAFAAAEgCQACgCABgEQACgDABgEIABgJIAAiDIAPAAIAACGIAAAIQAAAGgDAGQgDAGgGAFQgHAEgLAAQgIAAgFgCgAAFhbQgFgEAAgFQAAgFAFgDQADgDAFAAQAEAAADADQAEADAAAFQAAAFgEAEQgDADgEAAQgFAAgDgDg");
	this.shape_359.setTransform(433.5,-182.9);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_360.setTransform(425.3,-183);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#111111").s().p("AgLBbIgLgEIgMgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIAMgHQAGgDAFgBIALgBQANAAALAFQAMAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgMAFQgLAEgNAAIgLgBgAgRgHQgIADgGAFQgGAGgDAJQgEAIAAAJQAAAJAEAJQADAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_361.setTransform(412.5,-186.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_362.setTransform(398.2,-183);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgEQAEgDAGgBQAFgCAIAAIAMABIgDAPQgEgBgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_363.setTransform(389.4,-183.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICDAAIAAAQIg6AAIAACZg");
	this.shape_364.setTransform(377.5,-185.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_365.setTransform(351.5,-183);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_366.setTransform(331.3,-183.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_367.setTransform(318.1,-183);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_368.setTransform(264.5,-183);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#111111").s().p("AgeBUQgOgHgKgNIAQgLQAFAJAKAGQAKAGANAAQAGgBAGgCQAHgCAFgDQAFgFAEgFQADgGAAgIQAAgJgEgFQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgGQgGgEgDgJQgEgIAAgLQAAgNAFgJQAEgIAIgGQAIgHAKgCQAJgDAKgBQAOABAMAEQAMAFAKAMIgPALQgMgRgVAAQgGAAgGACQgHACgFAEQgFAEgDAFQgDAHAAAIQAAALAGAGQAHAGAJAFIAUAHQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAHQgIAFgKAEQgKAEgJgBQgQAAgOgFg");
	this.shape_369.setTransform(251.9,-185.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFADAHgBQAIAAAFgEQAFgGADgJIAJgWIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAIQgIAHgOAAIgIAAg");
	this.shape_370.setTransform(232.9,-180.2);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_371.setTransform(212.7,-186.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_372.setTransform(199.2,-183);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIAMABQAFABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgLAEIgMABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_373.setTransform(185.6,-186.4);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_374.setTransform(175.8,-185.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAPQgEgBgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_375.setTransform(170,-183.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgEADQgFADgGABIgKACQgWAAgLgMg");
	this.shape_376.setTransform(158.2,-182.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQADgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_377.setTransform(144,-180.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_378.setTransform(130.3,-183);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#111111").s().p("AgeBUQgOgHgKgNIAQgLQAFAJAKAGQAKAGANAAQAGgBAGgCQAHgCAFgDQAFgFAEgFQADgGAAgIQAAgJgEgFQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgGQgGgEgDgJQgEgIAAgLQAAgNAFgJQAEgIAIgGQAIgHAKgCQAJgDAKgBQAOABAMAEQAMAFAKAMIgPALQgMgRgVAAQgGAAgGACQgHACgFAEQgFAEgDAFQgDAHAAAIQAAALAGAGQAHAGAJAFIAUAHQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAHQgIAFgKAEQgKAEgJgBQgQAAgOgFg");
	this.shape_379.setTransform(116.9,-185.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_380.setTransform(346.5,-211.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_381.setTransform(332.2,-215.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_382.setTransform(311.7,-212);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#111111").s().p("AgXBSQgLgFgIgHQgIgJgEgKQgFgLAAgNQAAgMAFgLQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFALAAAMQAAANgFALQgEAKgIAJQgIAHgLAFQgLAFgNAAQgMAAgLgFgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAKAEAIQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgIAAgKQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgDgKgBQgJABgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_383.setTransform(298.1,-214.6);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_384.setTransform(288.1,-214.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgDgDgGQgDgFAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgDIACAOQgJAFgNAAIgKgBg");
	this.shape_385.setTransform(281.3,-213.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAFAKAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGAEQAGADAKADIAQAEQALACAJAHQAHAIABAMQAAAJgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_386.setTransform(272.2,-211.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_387.setTransform(260.4,-211.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#111111").s().p("AgWBTQgQgHgMgMQgMgMgHgQQgHgRAAgTQAAgSAHgRQAHgQAMgMQAMgMAQgHQAQgGASgBQAUABAPAFQAPAGALALIgMANQgJgJgMgFQgMgFgQgBQgPAAgNAHQgNAFgJALQgJAKgFANQgFAOAAANQAAAOAFAOQAFANAJAKQAJAKANAHQANAFAPABQANAAAMgEQAMgDAKgGIAAg4IgpAAIAAgPIA6AAIAABSQgOAJgRAEQgRAFgQgBQgSAAgQgGg");
	this.shape_388.setTransform(243.9,-214.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_389.setTransform(221.7,-211.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_390.setTransform(187.2,-211.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAHIgBAQIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWAAAKALQAKALAAAVIAABGg");
	this.shape_391.setTransform(170.9,-212);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_392.setTransform(154.2,-211.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgDgDgGQgDgFAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgDIACAOQgJAFgNAAIgKgBg");
	this.shape_393.setTransform(143.6,-213.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGAEQAGADAKADIAQAEQALACAJAHQAHAIABAMQAAAJgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_394.setTransform(134.5,-211.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_395.setTransform(126.5,-214.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#111111").s().p("AgeBUQgOgHgKgNIAQgLQAFAJAKAGQAKAGANAAQAGgBAGgCQAHgCAFgDQAFgFAEgFQADgGAAgIQAAgJgEgFQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgGQgGgEgDgJQgEgIAAgLQAAgNAFgJQAEgIAIgGQAIgHAKgCQAJgDAKgBQAOABAMAEQAMAFAKAMIgPALQgMgRgVAAQgGAAgGACQgHACgFAEQgFAEgDAFQgDAHAAAIQAAALAGAGQAHAGAJAFIAUAHQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAHQgIAFgKAEQgKAEgJgBQgQAAgOgFg");
	this.shape_396.setTransform(116.9,-214.7);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQAEgCACgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgDQgFgCgDgGQgDgGgBgHQABgJADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQAMACAIAIQAHAHAAAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_397.setTransform(387.6,148);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_398.setTransform(363.3,148);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgFADgDQADgFAFgEQADgCAGgCQAGgDAHAAIAMABIgDAQQgEgBgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_399.setTransform(353.7,147.8);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgFgDgCgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIAEAGQABACAEABIAGABIAIgBIAIgEIABAPQgIAEgNAAIgJgBg");
	this.shape_400.setTransform(332.3,146.5);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_401.setTransform(314.9,148);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#111111").s().p("AgXBSQgLgFgIgHQgIgIgEgLQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgFAMAAQANAAALAFQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEALgIAIQgIAHgLAFQgLAFgNgBQgMABgLgFgAgRgNQgIAEgFAFQgGAGgCAIQgEAIAAAKQAAAJAEAIQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgIAAgJQAAgKgDgIQgDgIgFgGQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_402.setTransform(266.5,145.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_403.setTransform(235.5,148);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#111111").s().p("AgsA4IAAgLIBAhWIg9AAIAAgOIBVAAIAAALIhCBWIBEAAIAAAOg");
	this.shape_404.setTransform(224.5,147.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#111111").s().p("AAFBIQgFgBgDgDQgDgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgEIACAPQgJAEgNAAIgKgBg");
	this.shape_405.setTransform(209.7,146.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_406.setTransform(199.2,148);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_407.setTransform(166.1,148);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#111111").s().p("AAGBIQgFgBgDgDQgEgDgDgGQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgEIABAPQgIAEgNAAIgJgBg");
	this.shape_408.setTransform(155.5,146.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgDQgFgCgDgGQgEgGAAgHQAAgJAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgGgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQALACAJAIQAHAHABAMQgBAKgEAGQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_409.setTransform(146.5,148);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAGANgBQAGAAAGgCQAHgBAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgMAFgKQAEgIAIgGQAIgHAKgCQAJgEAKAAQAOAAAMAGQAMAEAKAMIgPALQgMgRgVAAQgGABgGABQgHACgFAEQgFAEgDAGQgDAFAAAIQAAAMAGAGQAHAGAJAFIAUAHQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAHQgIAFgKAEQgKADgJAAQgQABgOgHg");
	this.shape_410.setTransform(128.9,145.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFACAHABQAIAAAFgGQAFgFADgJIAJgWIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAIQgIAHgOAAIgIAAg");
	this.shape_411.setTransform(109.8,150.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgLgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_412.setTransform(456.1,115.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_413.setTransform(419.1,116.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgCAGgCQAFgDAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA+g");
	this.shape_414.setTransform(413.3,119);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAIgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_415.setTransform(387.3,121.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAGANgBQAGAAAGgCQAHgBAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgMAFgKQAEgIAIgGQAIgHAKgCQAJgEAKAAQAOAAAMAGQAMAEAKAMIgPALQgMgRgVABQgGgBgGACQgHACgFAEQgFAEgDAGQgDAFAAAIQAAAMAGAGQAHAGAJAFIAUAHQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAHQgIAFgKAEQgKADgJAAQgQABgOgHg");
	this.shape_416.setTransform(360.3,116.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_417.setTransform(325.9,115.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#111111").s().p("AgXBSQgLgFgIgHQgIgIgEgLQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgFAMAAQANAAALAFQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEALgIAIQgIAHgLAFQgLAFgNgBQgMABgLgFgAgRgNQgIAEgFAFQgGAGgCAIQgEAIAAAKQAAAJAEAIQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgIAAgJQAAgKgDgIQgDgIgFgGQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_418.setTransform(291.8,116.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_419.setTransform(281.8,116.4);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgDgDgGQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_420.setTransform(275,117.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgDQgFgCgDgGQgDgGgBgHQABgJADgGQADgHAHgEQAFgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQAMACAHAIQAIAHAAAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_421.setTransform(266,119.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#111111").s().p("AgWBSQgQgGgMgMQgMgMgHgQQgGgRgBgTQABgTAGgQQAHgQAMgMQALgMARgHQAQgHASAAQAVAAAOAHQAPAFAMAMIgOAMQgIgJgMgFQgMgFgQAAQgPgBgNAHQgNAGgJAJQgJALgFANQgFAOAAANQAAAPAFANQAFANAJALQAJAKANAGQANAFAPAAQANABANgEQAMgDAJgFIAAg5IgoAAIAAgPIA6AAIAABSQgPAIgRAFQgSAEgPAAQgSABgQgIg");
	this.shape_422.setTransform(237.6,116.3);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_423.setTransform(215.5,119.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_424.setTransform(201.1,115.8);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAFQgGAEAAAJQAAAGADADQACAEAEADQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_425.setTransform(181,119.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRAAQgJAAgGADQgGAEgDAFQgEAGgCAIQgBAHAAAHIAAA7IgPAAIAAhAQAAgRgGgJQgGgJgRAAIgGAAQgFACgGAEQgFAEgFAJQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgEQAKgFAKgBIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgGQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_426.setTransform(164.6,119);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAJAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHACQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAGgDAGQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_427.setTransform(147.9,119.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgDQgFgCgDgGQgDgGgBgHQABgJADgGQADgHAHgEQAFgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgGgHgEQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFAEQAGADAKADIAQAEQAMACAHAIQAIAHAAAMQAAAKgDAGQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_428.setTransform(128.3,119.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_429.setTransform(120.2,116.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAGANgBQAGAAAGgCQAHgBAFgFQAFgDAEgHQADgFAAgHQAAgKgEgFQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgGQgGgFgDgHQgEgJAAgLQAAgMAFgKQAEgIAIgGQAIgHAKgCQAJgEAKAAQAOAAAMAGQAMAEAKAMIgPALQgMgRgVABQgGgBgGACQgHACgFAEQgFAEgDAGQgDAFAAAIQAAAMAGAGQAHAGAJAFIAUAHQAMADAJAEQAKAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAHQgIAFgKAEQgKADgJAAQgQABgOgHg");
	this.shape_430.setTransform(110.7,116.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCABgEQADgDAAgEIAAgJIAAiDIAQAAIAACGIAAAIQAAAGgDAGQgDAGgGAFQgHAEgLAAQgIAAgFgCgAAEhbQgDgEAAgFQAAgFADgDQAEgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_431.setTransform(441.8,39.2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgFgEgEgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAEgGAFgEIALgHQAGgDAHgBIAKgBQANAAAMAFQAKAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgDAIABAJQgBAJADAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_432.setTransform(420.7,35.8);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgBAIAAIAMAAIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA/g");
	this.shape_433.setTransform(397.6,39);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgDIABAPQgKADgMABIgKgBg");
	this.shape_434.setTransform(388.7,37.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEALgIAHQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAGQgGAEgCAJQgEAIAAAJQAAAJAEAJQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgEQgGgGgIgEQgHgEgKAAQgJAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_435.setTransform(339.3,36.4);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#111111").s().p("AgtA4IAAgLIBChWIg+AAIAAgOIBUAAIAAALIhABWIBCAAIAAAOg");
	this.shape_436.setTransform(297.4,39.1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#111111").s().p("AAhBSIAAg+QAAgTgGgJQgHgKgRAAIgGABQgGABgGAFQgGAEgFAHQgFAJAAAQIAAA5IgPAAIAAhXIgBgLIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgHIAKgDIALgCQAVAAAKALQALALAAAVIAABHgAgkg3IACgJIAFgIQACgEAEgCQAEgCAFAAQAFAAAEABIAIAFIAIADQAEACAEAAQAFAAADgEIAEgIIAKAAIgCAJIgEAIQgDAEgEABQgEADgFAAQgEAAgFgCIgJgEIgHgDIgIgCQgFAAgDAEIgEAIg");
	this.shape_437.setTransform(261.4,36.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgCQgFgDgDgGQgEgFAAgJQAAgIAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgHABIgIADIgFAFQgDADAAAFQAAAIAGADQAFAEALADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_438.setTransform(236.6,39.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_439.setTransform(211.2,39);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEALgIAHQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAGQgGAEgCAJQgEAIAAAJQAAAJAEAJQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgEQgGgGgIgEQgHgEgKAAQgJAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_440.setTransform(197.6,36.4);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_441.setTransform(166.7,39.1);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgLACQgVAAgLgMg");
	this.shape_442.setTransform(148.3,39.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgFgFQgHgEgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_443.setTransform(110.4,39.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_444.setTransform(340,10.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_445.setTransform(306.7,10.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgHgEgLQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEALgIAHQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAGQgGAEgCAJQgEAIAAAJQAAAJAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgEQgGgGgIgEQgHgEgKAAQgJAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_446.setTransform(293.1,7.6);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgFgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQABADADAAIAHABIAJgBIAIgDIAAAPQgJADgMAAIgJAAg");
	this.shape_447.setTransform(276.3,8.9);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAHAEQAIAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQALADAIAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_448.setTransform(267.2,10.3);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_449.setTransform(255.4,10.3);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#111111").s().p("AgWBTQgQgHgMgMQgMgMgHgQQgGgQAAgUQAAgSAGgQQAHgRAMgMQAMgMAQgGQAQgIASABQAVAAAOAFQAPAGAMALIgOAOQgIgKgMgFQgMgGgQABQgPAAgNAFQgNAHgJAJQgJALgFANQgFANAAAOQAAAOAFAOQAFAOAJAJQAJALANAFQANAHAPAAQAOgBAMgDQALgDAKgFIAAg6IgpAAIAAgOIA7AAIAABSQgPAIgRAFQgRAFgQAAQgSgBgQgGg");
	this.shape_450.setTransform(238.9,7.4);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_451.setTransform(216.7,10.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_452.setTransform(202.4,7);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_453.setTransform(182.2,10.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGAEgDAGQgEAFgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGACQgFAAgGAFQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgGQALgHALABQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_454.setTransform(165.9,10.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_455.setTransform(149.2,10.3);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQABADADAAIAHABIAJgBIAIgDIAAAPQgJADgMAAIgJAAg");
	this.shape_456.setTransform(138.6,8.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAHAEQAIAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFAAgJQAAgIADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_457.setTransform(129.5,10.3);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#111111").s().p("AgeBUQgOgGgKgOIAQgLQAFAJAKAGQAKAFANABQAGAAAGgCQAHgCAFgFQAFgEAEgFQADgGAAgIQAAgIgEgGQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgFQgGgGgDgIQgEgHAAgMQAAgNAFgIQAEgJAIgHQAIgFAKgEQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAGQgDAGAAAIQAAAMAGAGQAHAHAJADIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAGQgIAHgKADQgKAEgJAAQgQgBgOgFg");
	this.shape_458.setTransform(111.9,7.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_459.setTransform(443.1,-65.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIALgHQAFgDAGgBIALgBQANAAALAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgLAFgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgDAJAAAJQAAAJADAIQADAJAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGADgJQADgIAAgJQAAgJgDgJQgDgIgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_460.setTransform(418.5,-66.4);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_461.setTransform(374.1,-72.4);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgEIABAQQgJADgNAAIgKgBg");
	this.shape_462.setTransform(367.3,-71.1);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAGADIAKAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_463.setTransform(305,-73);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_464.setTransform(264.3,-69.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_465.setTransform(254.7,-72.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_466.setTransform(248.9,-69.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#111111").s().p("AgKBbIgMgEIgMgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIAMgHQAGgDAGgBIAKgBQANAAALAFQAMAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgMAFQgLAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgDAJQgEAIAAAJQAAAJAEAJQADAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_467.setTransform(237,-73);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgGgFgJAAIgIABIgHADIgGAFQgBADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgGAEgIACQgIACgIAAQgNAAgKgFg");
	this.shape_468.setTransform(210,-69.7);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_469.setTransform(159,-73);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_470.setTransform(135.8,-73.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_471.setTransform(126.4,-69.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgEgDgFQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_472.setTransform(115.4,-69.7);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_473.setTransform(417.8,-98.5);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_474.setTransform(409,-102);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_475.setTransform(392.9,-98.5);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_476.setTransform(372.5,-98.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIAKgHQAGgDAGgBIALgBQAOAAAKAEQALAFAIAHQAIAJAFAKQAEALAAANQAAAMgEAMQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgDAJAAAJQAAAJADAIQADAJAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAIgDAFgFQAGgGADgJQADgIAAgJQAAgJgDgJQgDgIgGgGQgFgGgIgEQgIgDgKAAQgJAAgIADg");
	this.shape_477.setTransform(359.7,-95.2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgEAMgBQANABALAEQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEAKgIAIQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAFQgGAFgCAJQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgJgFgFQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_478.setTransform(324.8,-101.2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_479.setTransform(314.8,-101.2);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_480.setTransform(308,-99.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_481.setTransform(299,-98.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_482.setTransform(287.1,-98.5);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#111111").s().p("AgWBSQgQgGgMgMQgMgMgHgQQgHgQABgUQgBgSAHgQQAHgRAMgMQAMgMAQgGQAQgIASABQAUgBAPAHQAPAFALALIgMAOQgJgKgMgFQgMgGgQABQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAOAFAOQAFANAJALQAJAJANAGQANAHAPgBQANAAAMgDQANgDAJgFIAAg6IgpAAIAAgOIA7AAIAABSQgPAIgRAFQgSAEgPABQgSAAgQgIg");
	this.shape_483.setTransform(270.6,-101.4);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_484.setTransform(248.6,-98.5);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_485.setTransform(239.8,-102);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_486.setTransform(223.6,-98.5);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_487.setTransform(189.1,-98.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVAAAKALQALAMAAAWIAABGg");
	this.shape_488.setTransform(176.3,-98.6);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_489.setTransform(163.3,-98.5);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_490.setTransform(130.3,-98.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#111111").s().p("AgeBTQgOgFgKgOIAQgLQAFAJAKAGQAKAFANAAQAGAAAGgBQAHgDAFgEQAFgEAEgGQADgFAAgHQAAgJgEgGQgDgGgHgEQgGgEgIgDIgPgFIgQgGQgHgCgHgFQgGgFgDgJQgEgHAAgMQAAgMAFgJQAEgJAIgHQAIgGAKgDQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVAAQgGAAgGACQgHABgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQAMADAJAEQAKAGAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAHgKADQgKADgJABQgQAAgOgHg");
	this.shape_491.setTransform(116.9,-101.4);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDAQQgDgBgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_492.setTransform(329.3,-94.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_493.setTransform(317.8,-94.3);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_494.setTransform(305.1,-94.2);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_495.setTransform(286.2,-94.3);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#111111").s().p("AgIA4IgthvIASAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_496.setTransform(274.6,-94.4);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#111111").s().p("Ag1BVIAAipIBoAAIAAAQIhXAAIAAA6IBRAAIAAAOIhRAAIAABBIBaAAIAAAQg");
	this.shape_497.setTransform(262.2,-97.2);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgGgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAIQAHAHABANQgBAJgEAGQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_498.setTransform(211.3,-94.3);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_499.setTransform(203.2,-94.5);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_500.setTransform(191.6,-94.3);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAASIABAAQADgFAGgEIAKgHQAGgDAGgBIALgBQAOAAAKAEQALAEAIAIQAIAJAFALQAEAKAAANQAAANgEALQgFAJgIAIQgIAIgLAEQgKAFgOAAIgLgBIgMgEIgKgHQgGgEgDgGIgBAAIAABYgAgRhJQgIADgGAGQgGAGgEAIQgCAJAAAJQAAAJACAIQAEAIAGAHQAGAEAIAEQAIADAJAAQAKAAAIgDQAIgEAFgEQAGgHACgIQAEgIAAgJQAAgJgEgJQgCgIgGgGQgFgGgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_501.setTransform(178.8,-91);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_502.setTransform(168.2,-97.1);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_503.setTransform(150.9,-97.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAPAAIAAAfIAgAAIAAAOIggAAIAABCIABAKIAEAGQABADADAAIAHABIAIgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_504.setTransform(144.1,-95.8);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgKgRAAIgGABQgGABgGAEQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_505.setTransform(133.2,-94.5);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#111111").s().p("AA+BVIgTgtIhVAAIgTAtIgUAAIBKipIAPAAIBKCpgAgkAZIBJAAIglhZg");
	this.shape_506.setTransform(118.5,-97.2);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgEQADgFAFgDQADgDAGgDQAGgCAHAAIAMABIgDARQgDgCgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_507.setTransform(340.7,13.9);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEAMAAIAKAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_508.setTransform(315.6,16.7);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgDIABAPQgJADgNAAIgKgBg");
	this.shape_509.setTransform(298.9,12.6);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgEgIgGgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQALADAIAIQAJAHAAANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_510.setTransform(289.9,14);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#111111").s().p("AgVBTQgQgHgMgMQgMgMgHgQQgHgQAAgUQAAgSAHgQQAHgRAMgMQAMgMAQgGQAQgIASABQAQAAAQAGQAPAHAMAOIgPALIgIgJQgEgDgGgEIgNgEQgGgCgHAAQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAOAFAOQAFANAJALQAJAJANAGQANAHAPgBIANAAIANgFQAHgCAFgFQAGgGAFgHIAOAKIgLANQgGAFgIAFQgJAEgJACQgKACgKABQgSAAgQgHg");
	this.shape_511.setTransform(264.1,11.1);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#111111").s().p("AgsBVIgHgCIACgPQAFADAHAAQAIgBAFgFQAFgFADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_512.setTransform(243,16.9);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_513.setTransform(223.8,14);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgEgDgFQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADAAAFQgBAIAGADQAFAEALADIAQADQAMADAHAIQAJAHgBANQABAIgEAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_514.setTransform(212.1,14);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_515.setTransform(204,13.9);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_516.setTransform(178.9,16.7);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADAAAFQAAAIAFADQAFAEALADIAQADQAMADAHAIQAJAHgBANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_517.setTransform(166.9,14);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_518.setTransform(155,14);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgDAGgDQAFgCAIAAIAMABIgDARQgDgCgHAAQgIAAgHADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_519.setTransform(139.7,13.9);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHAAIAMABIgDARQgEgCgGAAQgJAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_520.setTransform(131.7,13.9);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#111111").s().p("AA+BVIgTgtIhVAAIgTAtIgUAAIBKipIAPAAIBKCpgAgkAZIBJAAIglhZg");
	this.shape_521.setTransform(118.5,11.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgIgCQgFgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgBADgBAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_522.setTransform(227.3,141.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#111111").s().p("AgXBUQgGgCgGgEQgFgEgDgGQgEgHAAgHQAAgOAHgIQAHgIALgDQALgEALgCIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgQAfgBQAIAAAIACQAHADAGAFQAFAFADAIQAEAHAAAJIAAAyIAAAOIACAMIgQAAIgBgJIAAgJQgHAKgKAGQgJAEgNAAQgIAAgHgCgAAHAcIgQADQgJADgGAEQgGAFAAAIQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgCAFgGQAEgFACgGQACgHAAgHIAAgIIgIAAIgPAAgAgKgzIAXgjIAVAAIgfAjg");
	this.shape_523.setTransform(215.6,139.2);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_524.setTransform(199.2,141.8);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_525.setTransform(149.5,141.9);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAGgCAHAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_526.setTransform(406.9,113);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_527.setTransform(395.4,113.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_528.setTransform(381.8,109.8);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIAAANIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_529.setTransform(362.3,113.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgLAAgNQAAgMAFgKQAEgLAIgJQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgoQgIADgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAIAGAHQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgHADgIQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_530.setTransform(312.2,113.1);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIIgBAOIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_531.setTransform(294.6,113);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_532.setTransform(279.6,113.1);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgJgRAAQgJgBgGAEQgGAEgDAFQgEAGgCAIQgBAHAAAHIAAA8IgPAAIAAhBQAAgRgGgJQgGgJgRAAIgGABQgFABgGAEQgFAFgFAIQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgKAKgEQAKgGAKAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAFgMAKgFQALgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_533.setTransform(258.2,113);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#111111").s().p("AgPBVIAAhvIAPAAIAABvgAgWgyIAXgiIAWAAIgeAig");
	this.shape_534.setTransform(239.5,110.2);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_535.setTransform(212.4,113.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAGAHADQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_536.setTransform(193.2,113.1);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgOAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAIQAHAHAAANQAAAJgEAGQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_537.setTransform(181.5,113.1);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAFgCAIAAIAMABIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_538.setTransform(173.4,113);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_539.setTransform(161.8,113.1);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_540.setTransform(148.2,109.8);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADAAQAEAAAEAEQAEADAAAFQAAAFgEAEQgEADgEAAQgDAAgEgDg");
	this.shape_541.setTransform(138.4,110.4);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#111111").s().p("AgVBSQgQgGgMgMQgMgMgHgQQgHgQAAgUQAAgTAHgPQAHgRAMgMQAMgMAQgGQAQgIASAAQAQABAQAGQAPAHAMANIgPAMIgIgJQgEgDgGgDIgNgGQgGgBgHAAQgPAAgNAFQgNAGgJAKQgJALgFANQgFANAAAOQAAAPAFANQAFAOAJAKQAJAJANAGQANAHAPgBIANgBIANgEQAHgCAFgFQAGgGAFgHIAOAKIgLANQgGAFgIAFQgJADgJADQgKACgKABQgSAAgQgIg");
	this.shape_542.setTransform(114,110.2);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#111111").s().p("AgYA2QgKgFgIgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgDADAAAEQAAAIAGAEQAFADALADIAQAEQALACAJAHQAHAIABAMQgBAJgEAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_543.setTransform(417.5,-194.7);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#111111").s().p("AgTBSQgLgFgIgHQgHgJgFgKQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIAKgEQAKgFALABQANgBAKAFQAKAEAHAIQAHAHADAKQAEAKAAAMIAAAHIhdAAQABAIAEAHQADAIAGAGQAFAFAHADQAHADAIAAQANAAAJgGQAJgGAFgHIAMAJQgKANgMAGQgMAGgOAAQgMAAgKgFgAgNgNQgHACgFAFQgGAGgDAFQgDAHAAAGIBLAAQAAgPgKgKQgJgKgSAAQgGABgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_544.setTransform(359.4,-197.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgGgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQALACAJAHQAHAIABAMQgBAJgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_545.setTransform(320.6,-194.7);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAHQgBAIAAAIIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWAAAKALQAKALAAAVIAABGg");
	this.shape_546.setTransform(265,-194.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#111111").s().p("AgXBUQgGgBgGgFQgFgEgDgGQgEgGAAgJQAAgNAHgIQAHgIALgEQALgDALgBIAWgBIAIAAIAAgEQAAgcgdAAQgSAAgPAOIgKgMQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAIAAAJIAAAzIAAANIACALIgQAAIgBgJIAAgJQgHAMgKAEQgJAFgNABQgIAAgHgDgAAHAcIgQADQgJACgGAFQgGAFAAAJQAAAFADAEQACAEAEADQAEACAEABIAKABQAIAAAGgDQAGgDAFgEQAEgFACgHQACgHAAgHIAAgJIgIAAIgPABgAgKgzIAXgjIAVAAIgfAjg");
	this.shape_547.setTransform(248.4,-197.5);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#111111").s().p("AAkA4IgkgxIglAxIgUAAIAvg7Igpg0IAVAAIAeAqIAegqIAUAAIgnA0IAvA7g");
	this.shape_548.setTransform(236.7,-194.8);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAHAFAJAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGAEQAGADAKADIAQAEQALACAJAHQAHAIABAMQAAAJgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_549.setTransform(192.6,-194.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgEADgFQADgEAFgEQADgDAGgBQAGgCAHAAIAMABIgDAPQgEgBgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_550.setTransform(184.5,-194.9);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#111111").s().p("AAkBVIgthPIgeAAIAABPIgRAAIAAipIA0AAQAaAAAPALQAPALAAAXQAAASgMAMQgLAMgVACIAxBQgAgngJIAfAAQAKAAAIgCQAJgDAEgEQAGgEABgFQACgGAAgGQAAgFgCgGQgBgFgGgEQgEgEgJgDQgIgCgKAAIgfAAg");
	this.shape_551.setTransform(113.3,-197.6);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_552.setTransform(428.5,-84.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCACgEQACgDAAgEIAAgJIAAiDIAQAAIAACGIAAAIQgBAGgCAGQgDAGgHAFQgGAEgMAAQgGAAgGgCgAAEhbQgDgEAAgFQAAgFADgDQAEgDAFAAQADAAAEADQAEADAAAFQAAAFgEAEQgEADgDAAQgFAAgEgDg");
	this.shape_553.setTransform(417.3,-84.2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_554.setTransform(409.1,-84.3);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#111111").s().p("AgLBbIgMgEIgKgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIAKgHQAHgDAFgBIALgBQAOAAAKAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_555.setTransform(396.2,-87.6);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_556.setTransform(382,-84.3);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgFQADgEAFgDQADgEAGgCQAGgBAHAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_557.setTransform(373.1,-84.4);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgDIABAOQgJAFgNAAIgKgBg");
	this.shape_558.setTransform(364.2,-85.7);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_559.setTransform(346.8,-84.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgCAJQgDAIAAAJQAAAJADAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_560.setTransform(332.5,-87.6);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgOgEIgJgCQgEgCgFgDQgFgDgDgFQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgOAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_561.setTransform(313.8,-84.3);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_562.setTransform(302,-84.3);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_563.setTransform(291.4,-85.7);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_564.setTransform(280.5,-84.4);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_565.setTransform(267.3,-84.3);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_566.setTransform(253,-87.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_567.setTransform(243.1,-87);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_568.setTransform(210.6,-84.3);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgDQADgEAGgCQAFgBAIAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_569.setTransform(195.1,-84.4);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_570.setTransform(183.6,-84.3);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAHABIAIgBIAHgDIACAOQgJAFgNAAIgKgBg");
	this.shape_571.setTransform(173.7,-85.7);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgDQADgEAGgCQAFgBAIAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_572.setTransform(166.8,-84.4);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_573.setTransform(154.6,-84.3);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIAMgHQAFgDAHgBIAKgBQAOAAALAFQALAEAHAHQAIAIAEALQAFALAAANQAAANgFAKQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBIgMgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgDAJQgEAHAAAKQAAAJAEAJQADAHAGAGQAGAGAIADQAIADAJABQAKgBAIgDQAHgDAHgGQAFgGADgHQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_574.setTransform(140.6,-81);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_575.setTransform(126.2,-84.3);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#111111").s().p("AAkBVIgthPIgeAAIAABPIgRAAIAAipIA0AAQAaAAAPALQAPAMAAAWQAAASgMANQgLAKgVACIAxBRgAgngJIAfAAQAKAAAIgCQAJgCAEgEQAGgFABgFQACgFAAgHQAAgFgCgGQgBgGgGgDQgEgEgJgDQgIgCgKAAIgfAAg");
	this.shape_576.setTransform(113.3,-87.2);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_577.setTransform(188.5,41.2);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgGgEgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgDgHgHgDQgFgFgJAAIgHABIgIADIgGAFQgCAEAAAEQABAIAFADQAGAEAKADIAQAEQAMACAIAIQAHAHAAAMQAAAKgDAGQgEAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_578.setTransform(180.1,36.7);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADADQACAEAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_579.setTransform(168.4,36.7);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#111111").s().p("AgPBVIAAhwIAPAAIAABwgAgWgyIAXgiIAWAAIgfAig");
	this.shape_580.setTransform(160.5,33.8);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgEgHgGgDQgHgFgIAAIgIABIgHADIgFAFQgCAEAAAEQgBAIAGADQAFAEALADIAQAEQALACAIAIQAJAHAAAMQAAAKgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_581.setTransform(409.1,7.9);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#111111").s().p("AAFBIQgFgBgDgDQgDgEgDgFQgDgGAAgJIAAhHIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgEIACAQQgJADgNAAIgKgBg");
	this.shape_582.setTransform(356.9,6.5);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAFAJgBIAJgBQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgOgEIgJgCQgEgCgFgCQgFgDgDgGQgEgFABgJQgBgIAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgEgHgGgDQgHgFgIAAIgIABIgHADIgFAFQgCAEAAAEQgBAIAGADQAFAEALADIAQAEQALACAIAIQAJAHAAAMQAAAKgFAGQgDAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_583.setTransform(341.2,7.9);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#111111").s().p("AgIA4IgthvIATAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_584.setTransform(316,7.9);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_585.setTransform(303.5,7.9);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#111111").s().p("AAgBbIAAg+QAAgTgGgKQgHgJgRAAIgGABQgGABgGAEQgFAEgFAIQgFAJgBAPIAAA6IgPAAIAAi1IAPAAIAABXIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABHg");
	this.shape_586.setTransform(276.7,4.4);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_587.setTransform(256.6,7.8);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgFAEgDQADgFAEgDQAEgDAGgDQAFgCAIAAIAMABIgDAQQgEgBgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAHAAAFIAAA/g");
	this.shape_588.setTransform(214.8,7.8);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_589.setTransform(203.2,7.9);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#111111").s().p("AAhA6IAAg+QAAgSgGgKQgHgLgRABIgGABQgGABgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVABAKAKQALAMAAAVIAABHg");
	this.shape_590.setTransform(190.4,7.8);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgEgDgGQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQAEQgJACgGAEQgGAGAAAIQAAAGADAEQACADAEADQAEACAEABIAKABQAIAAAGgCQAGgDAFgFQAEgFACgGQACgIAAgHIAAgIIgIAAIgPAAg");
	this.shape_591.setTransform(152.5,7.9);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAFAKgBIAJgBQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgDQgHgEgIgCIgPgEIgIgCQgEgCgFgCQgFgDgDgGQgDgFAAgJQAAgIADgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgPAJQgEgHgGgDQgFgFgJAAIgIABIgHADIgGAFQgBAEAAAEQgBAIAGADQAFAEALADIAQAEQALACAIAIQAJAHgBAMQAAAKgDAGQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_592.setTransform(141.6,7.9);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgLAAgNQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAGAHADQAHACAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgoQgHACgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_593.setTransform(129.7,7.9);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#111111").s().p("AhIBVIAAipIA4AAQAQAAAQAFQAPAGANAKQANALAIAQQAIAQAAAUQAAAWgIAPQgIAQgNALQgNAKgPAGQgQAFgQAAgAg2BFIAhAAQATAAANgGQAPgFAKgLQAJgJAEgMQAFgMAAgOQAAgMgFgNQgEgMgJgJQgKgLgPgFQgNgGgTAAIghAAg");
	this.shape_594.setTransform(114.6,5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#111111").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_595.setTransform(237.2,52.9);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_596.setTransform(230.2,49.2);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFABAGIA+AAQAAgOgJgIQgIgIgOAAQgFAAgGACg");
	this.shape_597.setTransform(220.4,49.2);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_598.setTransform(212.4,49.1);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_599.setTransform(202.3,49.2);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#111111").s().p("AgUBJQgIgEgHgGQgGgHgFgJQgDgJAAgLQAAgKADgJQAFgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgCAHAAAHQAAAIACAHQADAHAEAFQAFAFAGADQAGADAIAAQAIAAAHgDQAGgDAGgFQAEgFADgHQADgHAAgIQAAgHgDgHQgDgHgEgFQgGgEgGgDQgHgDgIAAQgIAAgGADg");
	this.shape_600.setTransform(190,46.5);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_601.setTransform(178.7,49.2);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_602.setTransform(171.3,49.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_603.setTransform(161.3,49.2);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#111111").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_604.setTransform(149.6,46.5);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_605.setTransform(137.7,49.2);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#111111").s().p("AgGBMIAAiXIANAAIAACXg");
	this.shape_606.setTransform(130.4,46.4);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_607.setTransform(122.1,49.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAKAAAIAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgHADgEAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAEAFAHADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgIAEgKAAQgKAAgKgDg");
	this.shape_608.setTransform(111.7,49.2);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_609.setTransform(393.2,29.7);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_610.setTransform(383,29.7);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#111111").s().p("AgGBLIAAiWIANAAIAACWg");
	this.shape_611.setTransform(374.7,26.9);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_612.setTransform(361.2,29.7);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#111111").s().p("AgTBJQgKgEgGgGQgHgHgDgJQgEgJAAgLQAAgKAEgJQADgIAHgHQAGgGAKgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgHADgEAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGADAIAAQAIAAAHgDQAHgDAEgFQAFgFAEgHQACgHAAgIQAAgHgCgHQgEgHgFgFQgEgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_613.setTransform(349.3,27);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_614.setTransform(332.4,29.7);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#111111").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_615.setTransform(321.1,27);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#111111").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgDgDAAgEQAAgEADgDQADgDADABQAEgBADADQACADAAAEQAAAEgCADQgDACgEABQgDgBgDgCg");
	this.shape_616.setTransform(312.9,27.5);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#111111").s().p("AgGAvIgmhdIAPAAIAdBOIABAAIAdhOIAPAAIgmBdg");
	this.shape_617.setTransform(305.7,29.7);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFAAAGIA+AAQAAgOgHgIQgIgIgPAAQgFAAgGACg");
	this.shape_618.setTransform(289.8,29.7);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#111111").s().p("AgTBJQgKgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAKgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgGADgFAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAFAFAGADQAGADAIAAQAIAAAHgDQAHgDAEgFQAFgFADgHQADgHAAgIQAAgHgDgHQgDgHgFgFQgEgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_619.setTransform(277.8,27);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#111111").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgHADgEAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGADAIAAQAIAAAHgDQAHgDAFgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgFgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_620.setTransform(260.1,27);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_621.setTransform(248.8,29.7);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#111111").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAJADIAKAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgKAFIgJAEIgKABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_622.setTransform(237.5,27);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#111111").s().p("AgGBFIAAhcIAMAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgDADABQADgBADADQAEADAAAEQAAAEgEADQgDACgDABQgDgBgDgCg");
	this.shape_623.setTransform(229.3,27.5);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#111111").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_624.setTransform(224.5,26.9);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_625.setTransform(216.6,29.7);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgDgFgGgEQgGgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAGgDQAGgEADgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_626.setTransform(207.2,29.7);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_627.setTransform(191,29.7);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#111111").s().p("AgGBLIAAiWIANAAIAACWg");
	this.shape_628.setTransform(183.7,26.9);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#111111").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_629.setTransform(173.2,29.6);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_630.setTransform(163.6,29.7);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#111111").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_631.setTransform(156.2,29.6);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_632.setTransform(146.1,29.7);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#111111").s().p("AgTBbIACgLIAAAAIAEABIADAAQAFABADgCQACgCABgDIACgGIABgHIAAhtIANAAIAABvIAAAHIgDAKQgCAFgGADQgFAEgKABQgFgBgFgCgAAEhMQgDgDAAgEQAAgEADgDQADgDADABQAEgBADADQADADAAAEQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_633.setTransform(136.8,29.9);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_634.setTransform(129.9,29.7);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#111111").s().p("AA4BHIAAh6IgBAAIgzB6IgHAAIgzh6IAAAAIAAB6IgPAAIAAiNIAWAAIAvByIAwhyIAWAAIAACNg");
	this.shape_635.setTransform(115.4,27.3);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#111111").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_636.setTransform(194.8,-1.6);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAGgGQAGgHAIgEQAKgDAIAAQALAAAIAEQAJADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAFAEAFADQAGACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_637.setTransform(186.5,-5.3);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#111111").s().p("AgGBLIAAiVIANAAIAACVg");
	this.shape_638.setTransform(178.5,-8.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#111111").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_639.setTransform(170.3,-8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_640.setTransform(158.4,-5.3);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#111111").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAJADIAJAGQAFADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgFADIgJAFIgJAEIgKABQgKAAgJgEgAgOgGQgHADgEAEQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAEAFAHADQAGADAIAAQAIAAAHgDQAHgDAFgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgFgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_641.setTransform(147.1,-8);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#111111").s().p("AgfAnQgIgKAAgRIAAg7IAMAAIAAAzQABAHABAGQABAHADADQADAEAFADQAEACAIAAIAFgBQAEgBAGgDQAEgEAFgHQADgIAAgMIAAgvIAOAAIAABIIAAAJIABALIgOAAIgBgHIAAgHIAAAAQgCADgDADIgIAGIgJADQgEACgEAAQgTAAgIgJg");
	this.shape_642.setTransform(135.7,-5.1);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#111111").s().p("AgFBLIAAiVIALAAIAACVg");
	this.shape_643.setTransform(127.8,-8.1);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_644.setTransform(119.9,-5.3);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_645.setTransform(110.8,-5.3);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#111111").s().p("AgkBHIgGgCIABgMQAEACAGAAQAHAAAEgFQAEgEADgIIAHgSIgmheIAQAAIAcBNIAdhNIAQAAIgtB1QgFALgGAGQgHAHgMAAIgGAAg");
	this.shape_646.setTransform(445,-22.4);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_647.setTransform(428.7,-24.8);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_648.setTransform(420.3,-24.9);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#111111").s().p("AgfAnQgJgKABgRIAAg7IAMAAIAAAyQABAJABAGQABAFADAFQADAEAFACQAFACAHAAIAFgBQAEAAAGgEQAEgEAFgHQADgHAAgNIAAgvIAOAAIAABIIAAAJIABAMIgOAAIgBgIIAAgIIAAAAQgCAFgEADIgHAFIgJAEQgEABgEAAQgTAAgIgJg");
	this.shape_649.setTransform(410.6,-24.6);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#111111").s().p("AgZBDQgLgEgJgKIAJgKQAGAHAJAGQAKAEALAAQAJAAAHgDQAHgCAEgGQAFgFACgGQACgHAAgIIAAgRIgBAAQgGAKgKAEQgJAEgKAAQgJAAgJgDQgJgEgHgGQgGgHgEgIQgEgJAAgJQAAgLAEgIQAEgKAGgGQAGgHAJgDQAJgEAKAAIAIABQAFABAEACIAKAFQAEAEAEAFIABAAIAAgPIANAAIAABbQAAAIgCAJQgCAIgGAIQgFAHgKAEQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAEgDAHQgCAGAAAIQAAAHACAHQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgCQAHgDAFgFQAFgEACgGQADgHAAgIQAAgIgCgGQgDgHgEgEQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_650.setTransform(398.7,-22.5);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_651.setTransform(387.3,-24.8);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_652.setTransform(377.5,-24.8);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#111111").s().p("AgFBMIAAiWIALAAIAACWg");
	this.shape_653.setTransform(365.3,-27.6);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_654.setTransform(357.4,-24.8);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_655.setTransform(350,-24.9);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_656.setTransform(340,-24.8);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#111111").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_657.setTransform(328.3,-27.5);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_658.setTransform(316.4,-24.8);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#111111").s().p("AgFBMIAAiWIALAAIAACWg");
	this.shape_659.setTransform(309.1,-27.6);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_660.setTransform(295.2,-24.8);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#111111").s().p("AAcAwIAAgzQAAgQgGgHQgGgJgOAAIgFABQgEAAgGAEQgFAEgEAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgKIAOAAIABAHIAAAHIAAAAIAFgGQAEgEAEgCIAJgDIAIgCQATAAAIAKQAIAJAAASIAAA6g");
	this.shape_661.setTransform(283.6,-24.9);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_662.setTransform(275.7,-24.9);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_663.setTransform(265.7,-24.8);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_664.setTransform(256.4,-26);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#111111").s().p("AAbAwIAAgzQABgQgGgHQgFgJgPAAIgEABQgFAAgFAEQgFAEgEAHQgEAIgBALIAAAwIgNAAIAAhIIAAgKIAAgKIANAAIAAAHIAAAHIABAAIAFgGQAEgEAEgCIAJgDIAIgCQATAAAIAKQAJAJAAASIAAA6g");
	this.shape_665.setTransform(247.4,-24.9);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAJAEQAIADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_666.setTransform(236.5,-24.8);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#111111").s().p("AAbAwIAAgzQAAgQgFgHQgFgJgPAAIgEABQgFAAgFAEQgGAEgDAHQgFAIAAALIAAAwIgMAAIAAhIIgBgKIAAgKIANAAIAAAHIAAAHIABAAIAGgGQADgEAEgCIAJgDIAJgCQARAAAJAKQAJAJAAASIAAA6g");
	this.shape_667.setTransform(219.7,-24.9);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#111111").s().p("AgfAnQgJgKAAgRIAAg7IAOAAIAAAyQgBAJACAGQABAFADAFQADAEAEACQAGACAHAAIAEgBQAGAAAEgEQAGgEADgHQAFgHAAgNIAAgvIAMAAIAABIIABAJIAAAMIgNAAIAAgIIAAgIIgBAAQgCAFgEADIgHAFIgJAEQgEABgFAAQgSAAgIgJg");
	this.shape_668.setTransform(208.7,-24.6);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_669.setTransform(195.1,-24.9);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_670.setTransform(185.5,-24.8);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#111111").s().p("AglAvIAAgKIA2hHIgzAAIAAgMIBGAAIAAAKIg2BHIA4AAIAAAMg");
	this.shape_671.setTransform(176.3,-24.8);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#111111").s().p("AgFBGIAAhdIALAAIAABdgAgFg0QgDgDgBgEQABgFADgCQADgCACgBQADABADACQADACABAFQgBAEgDADQgDACgDAAQgCAAgDgCg");
	this.shape_672.setTransform(169.7,-27);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_673.setTransform(163.9,-26);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#111111").s().p("AAcAwIAAgzQAAgQgGgHQgGgJgOAAIgFABQgEAAgGAEQgFAEgEAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgKIAOAAIABAHIAAAHIAAAAIAFgGQAEgEAEgCIAJgDIAIgCQATAAAIAKQAIAJAAASIAAA6g");
	this.shape_674.setTransform(154.9,-24.9);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_675.setTransform(144,-24.8);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#111111").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_676.setTransform(136.6,-24.9);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_677.setTransform(127,-24.8);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#111111").s().p("AgSBFQgOgGgKgKQgJgKgGgNQgGgOAAgQQAAgPAGgOQAGgNAJgKQAKgKAOgGQANgFAPAAQARAAAMAEQANAFAJAKIgLAKQgHgHgKgFQgKgEgNAAQgMAAgLAFQgLAFgIAIQgHAJgEALQgEALAAALQAAAMAEALQAEALAHAJQAIAIALAFQALAFAMAAQALAAAKgDQAKgCAIgFIAAgvIghAAIAAgMIAwAAIAABEQgMAHgPAEQgOADgNAAQgPAAgNgFg");
	this.shape_678.setTransform(113.8,-27.2);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#111111").s().p("AgGAJQgDgEAAgFQAAgEADgEQACgEAEAAQAFAAACAEQADAEAAAEQAAAFgDAEQgCAEgFAAQgEAAgCgEg");
	this.shape_679.setTransform(456.1,-109.7);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#111111").s().p("AgSA2QgJgFgGgMIALgJQAEAHAFAFQAGAFAHAAIAIgCQADgBADgCQADgCACgEQACgEAAgEQAAgJgFgEQgFgDgHgCIgLgEIgGgCQgEgCgEgDQgEgDgCgFQgDgGAAgHQAAgJADgHQADgGAEgEQAFgEAGgCQAGgCAFAAQAJAAAIAFQAIAEAEALIgLAJQgDgHgEgEQgFgEgHAAIgFABIgGADQgDACgCAEQgBADAAAEQAAAIAEAEQAEADAIADIANAEQAJACAGAHQAGAIAAAMQAAAJgDAHQgDAGgEAFQgFAEgGACQgHACgGAAQgJAAgJgFg");
	this.shape_680.setTransform(449.5,-114.2);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#111111").s().p("AgPA3QgIgFgHgIQgFgIgEgLQgEgLABgMQgBgMAEgLQAEgLAFgHQAHgJAIgDQAHgFAJAAQAKAAAIAFQAIAEAFAIQAGAHACALQADAKAAALIAAAGIhJAAQABAIADAIQADAHAEAGQAFAFAFADQAFADAHABQAKgBAHgFQAHgGADgIIAKAKQgIANgJAGQgKAFgLAAQgIAAgJgEgAgKgpQgFADgFAFQgEAGgCAFQgDAIAAAGIA7AAQAAgQgIgKQgIgKgNAAQgFAAgGADg");
	this.shape_681.setTransform(440.2,-114.2);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#111111").s().p("AAaA5IAAg9QAAgSgFgLQgFgKgOAAIgEABQgEABgFAFQgFAFgEAIQgEAIAAAPIAAA5IgNAAIAAhWIAAgMIgBgNIANAAIABAKIAAAIIABAAIAEgIIAIgHIAJgEIAHgBQARAAAJALQAHALABAVIAABGg");
	this.shape_682.setTransform(429.6,-114.3);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#111111").s().p("AgSA3QgIgFgHgIQgGgIgDgLQgEgLAAgMQAAgMAEgLQADgLAGgHQAHgJAIgDQAIgFAKAAQAKAAAJAFQAJADAGAJQAGAHADALQAEALAAAMQAAAMgEALQgDALgGAIQgGAIgJAFQgJAEgKAAQgKAAgIgEgAgNgpQgGAEgEAGQgEAGgDAJQgCAHAAAJQAAAJACAJQADAIAEAFQAEAGAGAEQAGAEAHAAQAHAAAHgEQAGgEAEgGQAEgFADgIQADgJgBgJQABgJgDgHQgDgJgEgGQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_683.setTransform(418.9,-114.2);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#111111").s().p("AgFBTIAAhvIALAAIAABvgAgFg/QgDgDAAgFQAAgFADgDQADgEACABQADgBADAEQADADAAAFQAAAFgDADQgDADgDAAQgCAAgDgDg");
	this.shape_684.setTransform(411,-116.9);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#111111").s().p("AgLA3QgJgEgGgIQgGgIgDgLQgDgLAAgNQAAgMADgLQADgKAGgIQAGgIAJgFQAIgEAKAAQAKAAAHAFQAJAFAHAKIgKAJQgEgGgFgEQgGgFgIAAQgHAAgFAEQgHADgEAGQgEAGgCAIQgDAJAAAIQAAAKADAIQACAIAEAGQAEAGAHAEQAFADAHAAQAIAAAGgFQAFgEAEgGIAKAKQgHAKgJAEQgHAFgKAAQgKAAgIgEg");
	this.shape_685.setTransform(404.5,-114.2);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#111111").s().p("AgSA5QgFgCgEgFQgFgDgCgHQgCgGgBgIQABgNAFgJQAGgGAIgEQAIgEAJgBIARgBIAHAAIAAgDQAAgdgXAAQgOAAgMANIgHgLQAMgQAYAAQAHAAAFACQAGADAEAEQAFAFACAIQADAIAAAJIAAAyIAAAOIABALIgMAAIAAgJIgBgJIAAAAQgFALgIAFQgHAFgKAAQgGAAgGgCgAAGABIgNACQgHADgFAFQgEAEAAAJQAAAFACAEQABAEADADIAHADIAIACQAGgBAFgDQAEgCAEgFQADgFACgHQACgGAAgHIAAgJIgHAAIgLABg");
	this.shape_686.setTransform(394.5,-114.2);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#111111").s().p("AA2A5IAAhAQAAgRgFgJQgEgKgOAAQgGABgFADQgFADgDAHQgDAFgBAHIgCAQIAAA6IgLAAIAAhAQAAgRgFgJQgEgKgNAAIgFABQgFABgDAFQgFAFgEAIQgDAIAAAPIAAA5IgNAAIAAhWIAAgNIgBgMIAOAAIAAARIABAAQAEgJAIgGQAIgEAIAAIAIAAQADABAFADQADACADAFQADAFACAGQAEgKAIgHQAIgFAJAAQARAAAIALQAJALAAAVIAABGg");
	this.shape_687.setTransform(381.6,-114.3);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#111111").s().p("AgXA5IAAhLIgBgQIAAgUIAMAAIAAAVIABAAQABgEACgFIAGgIIAHgEQAFgCAGAAIAJABIgCAPQgDgBgEAAQgIAAgFAEQgEADgDAGQgEAFgBAGIgCAMIAAA+g");
	this.shape_688.setTransform(371.4,-114.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#111111").s().p("AgSA3QgJgFgGgIQgGgIgEgLQgDgLAAgMQAAgMADgLQAEgLAGgHQAGgJAJgDQAJgFAJAAQAKAAAJAFQAIADAHAJQAGAHAEALQADALAAAMQAAAMgDALQgEALgGAIQgHAIgIAFQgJAEgKAAQgJAAgJgEgAgNgpQgGAEgFAGQgEAGgCAJQgDAHAAAJQAAAJADAJQACAIAEAFQAFAGAGAEQAGAEAHAAQAIAAAGgEQAGgEAFgGQAEgFACgIQACgJABgJQgBgJgCgHQgCgJgEgGQgFgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_689.setTransform(361.9,-114.2);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#111111").s().p("AgKBcIAAhhIgTAAIAAgOIATAAIAAgfQAAgWAIgKQAHgJAOAAIAFAAIAGACIgDAOIgEgBIgFgBQgFAAgEACQgDADgCAEIgCAJIAAALIAAAdIAVAAIAAAOIgVAAIAABhg");
	this.shape_690.setTransform(353.9,-117.8);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#111111").s().p("AgFBbIAAi1IALAAIAAC1g");
	this.shape_691.setTransform(348.4,-117.7);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#111111").s().p("AgRA5QgGgCgEgFQgEgDgDgHQgCgGAAgIQgBgNAGgJQAGgGAIgEQAJgEAIgBIASgBIAGAAIAAgDQAAgdgXAAQgPAAgLANIgIgLQANgQAYAAQAGAAAHACQAFADAFAEQAEAFADAIQACAIAAAJIAAAyIABAOIAAALIgLAAIgBgJIAAgJIgBAAQgFALgIAFQgHAFgKAAQgGAAgFgCgAAFABIgMACQgGADgFAFQgFAEAAAJQAAAFACAEQACAEADADIAHADIAHACQAGgBAFgDQAFgCADgFQADgFACgHQACgGAAgHIAAgJIgGAAIgNABg");
	this.shape_692.setTransform(341,-114.2);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#111111").s().p("AA2A5IAAhAQAAgRgFgJQgEgKgNAAQgIABgEADQgFADgDAHQgCAFgCAHIgBAQIAAA6IgMAAIAAhAQAAgRgEgJQgFgKgNAAIgFABQgEABgFAFQgEAFgDAIQgEAIAAAPIAAA5IgMAAIAAhWIAAgNIgBgMIANAAIAAARIAAAAQAFgJAIgGQAIgEAIAAIAHAAQAFABADADQAEACAEAFQACAFACAGQAEgKAIgHQAIgFAJAAQARAAAJALQAHALAAAVIAABGg");
	this.shape_693.setTransform(328.1,-114.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#111111").s().p("AAaA5IAAg9QAAgSgFgLQgGgKgNAAIgEABQgFABgEAFQgGAFgDAIQgEAIAAAPIAAA5IgMAAIAAhWIAAgMIgBgNIAMAAIABAKIAAAIIAAAAIAGgIIAHgHIAJgEIAHgBQARAAAIALQAJALgBAVIAABGg");
	this.shape_694.setTransform(309.6,-114.3);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#111111").s().p("AgSA3QgJgFgGgIQgGgIgEgLQgDgLAAgMQAAgMADgLQAEgLAGgHQAGgJAJgDQAJgFAJAAQAKAAAJAFQAIADAHAJQAGAHAEALQADALAAAMQAAAMgDALQgEALgGAIQgHAIgIAFQgJAEgKAAQgJAAgJgEgAgNgpQgGAEgFAGQgEAGgCAJQgDAHAAAJQAAAJADAJQACAIAEAFQAFAGAGAEQAGAEAHAAQAIAAAGgEQAGgEAFgGQAEgFACgIQACgJABgJQgBgJgCgHQgCgJgEgGQgFgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_695.setTransform(298.9,-114.2);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#111111").s().p("AgLA3QgIgEgHgIQgGgIgDgLQgDgLgBgNQABgMADgLQADgKAGgIQAHgIAIgFQAJgEAJAAQAKAAAHAFQAJAFAGAKIgJAJQgEgGgFgEQgGgFgIAAQgHAAgFAEQgGADgFAGQgEAGgDAIQgCAJAAAIQAAAKACAIQADAIAEAGQAFAGAGAEQAFADAHAAQAIAAAGgFQAFgEAEgGIAJAKQgGAKgJAEQgHAFgKAAQgJAAgJgEg");
	this.shape_696.setTransform(289,-114.2);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#111111").s().p("AgSA2QgJgFgGgMIALgJQAEAHAFAFQAGAFAHAAIAIgCQADgBADgCQADgCACgEQACgEAAgEQAAgJgFgEQgFgDgHgCIgLgEIgGgCQgEgCgEgDQgEgDgCgFQgDgGAAgHQAAgJADgHQADgGAEgEQAFgEAGgCQAGgCAFAAQAJAAAIAFQAIAEAEALIgLAJQgDgHgEgEQgFgEgHAAIgFABIgGADQgDACgCAEQgBADAAAEQAAAIAEAEQAEADAIADIANAEQAJACAGAHQAGAIAAAMQAAAJgDAHQgDAGgEAFQgFAEgGACQgHACgGAAQgJAAgJgFg");
	this.shape_697.setTransform(274.9,-114.2);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#111111").s().p("AgSA3QgJgFgGgIQgGgIgEgLQgDgLAAgMQAAgMADgLQAEgLAGgHQAGgJAJgDQAIgFAKAAQALAAAIAFQAJADAGAJQAGAHADALQAEALAAAMQAAAMgEALQgDALgGAIQgGAIgJAFQgIAEgLAAQgKAAgIgEgAgNgpQgGAEgEAGQgEAGgDAJQgCAHAAAJQAAAJACAJQADAIAEAFQAEAGAGAEQAGAEAHAAQAHAAAHgEQAGgEAEgGQAEgFADgIQACgJAAgJQAAgJgCgHQgDgJgEgGQgEgGgGgEQgHgDgHAAQgHAAgGADg");
	this.shape_698.setTransform(265.3,-114.2);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#111111").s().p("AgGA4IgkhvIAPAAIAcBeIAcheIAOAAIgkBvg");
	this.shape_699.setTransform(255.2,-114.2);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#111111").s().p("AgPA3QgIgFgHgIQgFgIgEgLQgEgLABgMQgBgMAEgLQAEgLAFgHQAHgJAIgDQAIgFAIAAQAKAAAIAFQAIAEAFAIQAGAHACALQADAKAAALIAAAGIhJAAQABAIADAIQADAHAEAGQAFAFAFADQAFADAHABQAJgBAIgFQAHgGADgIIAKAKQgIANgJAGQgKAFgLAAQgIAAgJgEgAgKgpQgFADgFAFQgEAGgCAFQgDAIAAAGIA7AAQAAgQgIgKQgHgKgOAAQgFAAgGADg");
	this.shape_700.setTransform(245.4,-114.2);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#111111").s().p("AgdAuQgJgLABgVIAAhHIAMAAIAAA+IABAQQACAHACAFQADAFAEADQAFACAHAAIAEgBQAFgBAEgEQAFgEAEgJQAEgJAAgPIAAg5IANAAIAABXIAAAMIAAANIgMAAIgBgJIAAgJIAAAAIgGAIIgHAHQgEADgFABQgDACgEAAQgRAAgIgMg");
	this.shape_701.setTransform(234.8,-114.1);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#111111").s().p("AAZBbIAAg+QAAgTgEgKQgGgJgNAAIgFABQgEABgFAEQgFAEgEAIQgDAJAAAPIAAA6IgNAAIAAi1IANAAIAABXIAAAAIAFgIIAHgHIAJgEIAHgBQASAAAIALQAIALAAAVIAABHg");
	this.shape_702.setTransform(224.2,-117.7);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#111111").s().p("AgSA2QgJgFgGgMIALgJQAEAHAFAFQAGAFAHAAIAIgCQADgBADgCQADgCACgEQACgEAAgEQAAgJgFgEQgFgDgHgCIgLgEIgGgCQgEgCgEgDQgEgDgCgFQgDgGAAgHQAAgJADgHQADgGAEgEQAFgEAGgCQAGgCAFAAQAJAAAIAFQAIAEAEALIgLAJQgDgHgEgEQgFgEgHAAIgFABIgGADQgDACgCAEQgBADAAAEQAAAIAEAEQAEADAIADIANAEQAJACAGAHQAGAIAAAMQAAAJgDAHQgDAGgEAFQgFAEgGACQgHACgGAAQgJAAgJgFg");
	this.shape_703.setTransform(209.8,-114.2);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#111111").s().p("AgSA3QgIgFgHgIQgGgIgEgLQgDgLAAgMQAAgMADgLQAEgLAGgHQAHgJAIgDQAJgFAJAAQAKAAAJAFQAJADAGAJQAGAHAEALQADALAAAMQAAAMgDALQgEALgGAIQgGAIgJAFQgJAEgKAAQgJAAgJgEgAgNgpQgGAEgFAGQgEAGgCAJQgCAHgBAJQABAJACAJQACAIAEAFQAFAGAGAEQAGAEAHAAQAIAAAGgEQAGgEAFgGQAEgFACgIQADgJAAgJQAAgJgDgHQgCgJgEgGQgFgGgGgEQgGgDgIAAQgHAAgGADg");
	this.shape_704.setTransform(200.2,-114.2);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#111111").s().p("AgFBbIAAi1IALAAIAAC1g");
	this.shape_705.setTransform(192.3,-117.7);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#111111").s().p("AgXA5IAAhLIgBgQIAAgUIAMAAIAAAVIABAAQABgEACgFIAGgIIAHgEQAFgCAGAAIAJABIgCAPQgDgBgEAAQgIAAgFAEQgEADgDAGQgEAFgBAGIgCAMIAAA+g");
	this.shape_706.setTransform(182.5,-114.3);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#111111").s().p("AgSA5QgFgCgEgFQgFgDgCgHQgCgGgBgIQABgNAFgJQAGgGAIgEQAIgEAJgBIARgBIAHAAIAAgDQAAgdgXAAQgOAAgMANIgIgLQANgQAYAAQAHAAAGACQAFADAEAEQAFAFADAIQACAIAAAJIAAAyIAAAOIABALIgMAAIAAgJIAAgJIgBAAQgGALgHAFQgHAFgKAAQgGAAgGgCgAAGABIgNACQgHADgFAFQgEAEAAAJQAAAFACAEQABAEADADIAHADIAIACQAGgBAFgDQAEgCAEgFQAEgFABgHQACgGAAgHIAAgJIgHAAIgLABg");
	this.shape_707.setTransform(173.4,-114.2);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#111111").s().p("AAFBJQgEgCgCgEQgEgDgCgGQgCgFAAgKIAAhGIgTAAIAAgOIATAAIAAggIAMAAIAAAgIAZAAIAAAOIgZAAIAABCIABAKQAAAEACACQACACACABIAFABIAHgBIAGgDIABAOQgHAFgKAAIgHgBg");
	this.shape_708.setTransform(165.6,-115.6);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#111111").s().p("AgXA5IAAhLIgBgQIAAgUIAMAAIAAAVIABAAQABgEACgFIAGgIIAHgEQAFgCAGAAIAJABIgCAPQgDgBgEAAQgIAAgFAEQgEADgDAGQgEAFgBAGIgCAMIAAA+g");
	this.shape_709.setTransform(160.2,-114.3);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#111111").s().p("AgSA5QgFgCgEgFQgFgDgCgHQgCgGgBgIQABgNAFgJQAGgGAIgEQAJgEAIgBIARgBIAHAAIAAgDQAAgdgXAAQgOAAgMANIgHgLQAMgQAYAAQAHAAAFACQAGADAEAEQAFAFACAIQADAIAAAJIAAAyIAAAOIACALIgNAAIAAgJIgBgJIAAAAQgFALgIAFQgHAFgKAAQgGAAgGgCgAAFABIgMACQgGADgGAFQgEAEAAAJQAAAFACAEQACAEACADIAHADIAIACQAGgBAFgDQAFgCADgFQADgFACgHQACgGAAgHIAAgJIgHAAIgMABg");
	this.shape_710.setTransform(151.1,-114.2);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#111111").s().p("AgLA3QgJgEgGgIQgGgIgDgLQgDgLgBgNQABgMADgLQADgKAGgIQAGgIAJgFQAJgEAJAAQAKAAAHAFQAJAFAHAKIgKAJQgDgGgGgEQgGgFgIAAQgHAAgFAEQgHADgEAGQgEAGgCAIQgDAJAAAIQAAAKADAIQACAIAEAGQAEAGAHAEQAFADAHAAQAIAAAGgFQAGgEADgGIAKAKQgHAKgJAEQgHAFgKAAQgJAAgJgEg");
	this.shape_711.setTransform(142.2,-114.2);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#111111").s().p("AgSA2QgJgFgGgMIALgJQAEAHAFAFQAGAFAHAAIAIgCQADgBADgCQADgCACgEQACgEAAgEQAAgJgFgEQgFgDgHgCIgLgEIgGgCQgEgCgEgDQgEgDgCgFQgDgGAAgHQAAgJADgHQADgGAEgEQAFgEAGgCQAGgCAFAAQAJAAAIAFQAIAEAEALIgLAJQgDgHgEgEQgFgEgHAAIgFABIgGADQgDACgCAEQgBADAAAEQAAAIAEAEQAEADAIADIANAEQAJACAGAHQAGAIAAAMQAAAJgDAHQgDAGgEAFQgFAEgGACQgHACgGAAQgJAAgJgFg");
	this.shape_712.setTransform(133.3,-114.2);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#111111").s().p("AgPA3QgIgFgHgIQgGgIgDgLQgDgLgBgMQABgMADgLQADgLAGgHQAGgJAJgDQAIgFAIAAQAKAAAIAFQAIAEAFAIQAGAHACALQAEAKAAALIAAAGIhKAAQACAIACAIQADAHAEAGQAEAFAGADQAGADAFABQAKgBAHgFQAIgGADgIIAKAKQgHANgKAGQgKAFgLAAQgJAAgIgEgAgJgpQgGADgEAFQgFAGgCAFQgDAIAAAGIA7AAQAAgQgIgKQgHgKgOAAQgFAAgFADg");
	this.shape_713.setTransform(124.1,-114.2);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#111111").s().p("Ag5BVIAAipIAtAAQAMAAAMAGQAMAFALAKQAKALAGAQQAGAQABAUQgBAVgGAQQgGAQgKALQgLALgMAEQgMAGgMAAgAgqBFIAaAAQAPAAALgGQAKgGAIgJQAIgKADgNQAEgMgBgNQABgMgEgMQgDgNgIgKQgIgKgKgFQgLgGgPAAIgaAAg");
	this.shape_714.setTransform(112.2,-117.1);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#111111").s().p("AgGAJQgDgEAAgFQAAgEADgEQACgEAEAAQAFAAACAEQADAEAAAEQAAAFgDAEQgCAEgFAAQgEAAgCgEg");
	this.shape_715.setTransform(456.6,-153.3);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#111111").s().p("AgSA2QgJgFgGgMIALgJQAEAHAFAFQAGAEAHAAIAIgBQADgBADgCQADgCACgEQACgEAAgEQAAgJgFgDQgFgEgHgCIgLgEIgGgCQgEgCgEgCQgEgDgCgGQgDgFAAgJQAAgIADgGQADgHAEgEQAFgEAGgCQAGgCAFAAQAJAAAIAEQAIAFAEALIgLAKQgDgIgEgDQgFgFgHAAIgFABIgGADQgDACgCADQgBADAAAFQAAAIAEADQAEAEAIADIANADQAJADAGAIQAGAHAAANQAAAJgDAGQgDAHgEAEQgFAEgGACQgHACgGAAQgJAAgJgFg");
	this.shape_716.setTransform(450,-157.8);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#111111").s().p("AgPA2QgJgEgFgIQgHgIgDgKQgEgLAAgNQAAgMAEgKQADgLAHgJQAGgIAHgEQAJgEAIAAQAKAAAIAEQAIAFAGAHQAFAIADAKQACAKAAAMIAAAGIhIAAQAAAIADAIQADAHAEAGQAFAGAFADQAGACAFAAQALABAGgHQAIgFAEgIIAJAKQgHANgKAFQgKAGgLAAQgJAAgIgFgAgKgoQgFACgEAFQgFAFgDAHQgCAGAAAHIA7AAQAAgQgHgKQgJgKgNAAQgFAAgGAEg");
	this.shape_717.setTransform(440.7,-157.8);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#111111").s().p("AgXA6IAAhNIgBgPIAAgUIAMAAIAAAVIABAAQABgEACgEIAGgIIAHgGQAFgCAGAAIAJABIgCAQQgDgBgEAAQgIAAgFADQgEAEgDAFQgEAGgBAGIgCAMIAAA/g");
	this.shape_718.setTransform(433.1,-157.9);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#111111").s().p("AgSA5QgFgCgEgEQgFgFgCgFQgCgHgBgIQABgOAFgHQAGgIAIgDQAIgEAJgBIARgBIAHAAIAAgDQAAgdgXAAQgOAAgMAOIgIgMQANgQAYAAQAHAAAFACQAGADAEAFQAFAEADAIQACAHAAAKIAAAyIAAANIABAMIgLAAIgBgJIAAgJIgBAAQgGALgHAFQgHAFgKAAQgGAAgGgCgAAGAAIgNAEQgHACgEAEQgFAGAAAIQAAAGACAEQABADADADIAHADIAIABQAGAAAFgCQAEgDAEgFQAEgFABgGQACgHAAgIIAAgIIgHAAIgLAAg");
	this.shape_719.setTransform(424.1,-157.8);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#111111").s().p("AgFBbIAAi1IALAAIAAC1g");
	this.shape_720.setTransform(417.2,-161.3);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#111111").s().p("AgdAuQgIgLAAgVIAAhHIAMAAIAAA+IABAQQACAHACAFQADAFAFADQAEACAHAAIAEgBQAFgBAEgEQAGgEADgJQAEgJAAgPIAAg5IAMAAIAABXIAAAMIABANIgMAAIgBgJIAAgJIAAAAIgGAIIgHAHQgEADgFABQgDACgEAAQgRAAgIgMg");
	this.shape_721.setTransform(409.6,-157.7);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#111111").s().p("AgYBRQgKgGgJgLIAKgNQAFAKAIAFQAJAGALAAQAJAAAGgEQAHgDAEgGQAEgGACgIQABgIAAgJIAAgUIAAAAQgGALgIAFQgJAFgKAAQgJAAgIgFQgJgEgFgHQgHgIgDgKQgEgKAAgMQAAgNAEgKQADgLAGgIQAGgIAIgEQAIgEAKAAIAHAAIAJAEIAJAGQAEAFAEAGIAAAAIAAgTIANAAIAABvIgBATQgDALgFAIQgFAJgJAGQgJAFgPAAQgNAAgKgFgAgMhEQgFAEgFAGQgFAGgCAHQgCAIAAAJQAAAJACAIQACAIAFAEQAFAGAFAEQAHADAGAAQAHAAAFgDQAHgDAEgFQAFgFACgIQADgIAAgKQAAgJgDgIQgCgHgEgGQgEgGgHgEQgGgDgHAAQgGAAgHADg");
	this.shape_722.setTransform(398.4,-155.1);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#111111").s().p("AgPA2QgJgEgFgIQgHgIgDgKQgEgLAAgNQAAgMAEgKQADgLAHgJQAGgIAHgEQAJgEAIAAQAKAAAIAEQAIAFAGAHQAFAIADAKQACAKAAAMIAAAGIhIAAQAAAIADAIQADAHAEAGQAFAGAFADQAGACAFAAQALABAGgHQAIgFAEgIIAJAKQgHANgKAFQgKAGgLAAQgIAAgJgFgAgKgoQgFACgEAFQgFAFgDAHQgCAGAAAHIA7AAQAAgQgHgKQgJgKgNAAQgFAAgGAEg");
	this.shape_723.setTransform(387.6,-157.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#111111").s().p("AgXA6IAAhNIgBgPIAAgUIAMAAIAAAVIABAAQABgEACgEIAGgIIAHgGQAFgCAGAAIAJABIgCAQQgDgBgEAAQgIAAgFADQgEAEgDAFQgEAGgBAGIgCAMIAAA/g");
	this.shape_724.setTransform(380,-157.9);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#111111").s().p("AgSA2QgJgFgGgMIALgJQAEAHAFAFQAGAEAHAAIAIgBQADgBADgCQADgCACgEQACgEAAgEQAAgJgFgDQgFgEgHgCIgLgEIgGgCQgEgCgEgCQgEgDgCgGQgDgFAAgJQAAgIADgGQADgHAEgEQAFgEAGgCQAGgCAFAAQAJAAAIAEQAIAFAEALIgLAKQgDgIgEgDQgFgFgHAAIgFABIgGADQgDACgCADQgBADAAAFQAAAIAEADQAEAEAIADIANADQAJADAGAIQAGAHAAANQAAAJgDAGQgDAHgEAEQgFAEgGACQgHACgGAAQgJAAgJgFg");
	this.shape_725.setTransform(366.8,-157.8);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#111111").s().p("AgSA2QgIgEgHgIQgGgIgDgKQgEgLAAgNQAAgMAEgKQADgLAGgJQAHgIAIgEQAIgEAKAAQAKAAAJAEQAJAEAGAIQAGAJADALQAEAKAAAMQAAANgEALQgDAKgGAIQgGAIgJAEQgJAFgKAAQgKAAgIgFgAgNgoQgGADgEAGQgEAGgDAIQgCAJAAAIQAAAJACAIQADAIAEAHQAEAFAGAEQAGADAHAAQAHAAAHgDQAGgEAEgFQAEgHADgIQADgIgBgJQABgIgDgJQgDgIgEgGQgEgGgGgDQgHgEgHAAQgHAAgGAEg");
	this.shape_726.setTransform(357.2,-157.8);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#111111").s().p("AgFBUIAAhwIALAAIAABwgAgFg+QgDgEAAgFQAAgFADgDQADgEACAAQADAAADAEQADADAAAFQAAAFgDAEQgDADgDAAQgCAAgDgDg");
	this.shape_727.setTransform(349.3,-160.5);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#111111").s().p("AgXA6IAAhNIgBgPIAAgUIAMAAIAAAVIABAAQABgEACgEIAGgIIAHgGQAFgCAGAAIAJABIgCAQQgDgBgEAAQgIAAgFADQgEAEgDAFQgEAGgBAGIgCAMIAAA/g");
	this.shape_728.setTransform(344.7,-157.9);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#111111").s().p("AgRA5QgGgCgEgEQgEgFgDgFQgDgHABgIQgBgOAGgHQAFgIAJgDQAJgEAIgBIASgBIAGAAIAAgDQAAgdgXAAQgPAAgLAOIgIgMQANgQAYAAQAGAAAHACQAFADAFAFQAEAEADAIQACAHAAAKIAAAyIAAANIABAMIgLAAIgBgJIAAgJIgBAAQgGALgHAFQgHAFgKAAQgGAAgFgCgAAGAAIgNAEQgHACgEAEQgFAGAAAIQAAAGACAEQACADACADIAIADIAHABQAGAAAFgCQAFgDADgFQAEgFABgGQACgHAAgIIAAgIIgGAAIgMAAg");
	this.shape_729.setTransform(335.7,-157.8);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#111111").s().p("AgXA6IAAhNIgBgPIAAgUIAMAAIAAAVIABAAQABgEACgEIAGgIIAHgGQAFgCAGAAIAJABIgCAQQgDgBgEAAQgIAAgFADQgEAEgDAFQgEAGgBAGIgCAMIAAA/g");
	this.shape_730.setTransform(328.7,-157.9);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#111111").s().p("AgSA2QgJgEgGgIQgGgIgDgKQgEgLAAgNQAAgMAEgKQADgLAGgJQAGgIAJgEQAJgEAJAAQALAAAIAEQAIAEAHAIQAGAJADALQAEAKAAAMQAAANgEALQgDAKgGAIQgHAIgIAEQgIAFgLAAQgJAAgJgFgAgNgoQgGADgEAGQgEAGgDAIQgDAJABAIQgBAJADAIQADAIAEAHQAEAFAGAEQAGADAHAAQAIAAAGgDQAGgEAEgFQAEgHADgIQACgIAAgJQAAgIgCgJQgDgIgEgGQgEgGgGgDQgGgEgIAAQgHAAgGAEg");
	this.shape_731.setTransform(319.2,-157.8);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#111111").s().p("AAZBbIAAg+QAAgTgEgKQgGgJgNAAIgFABQgEABgFAEQgFAEgDAIQgEAJAAAPIAAA6IgNAAIAAi1IANAAIAABXIAAAAIAFgIIAHgHIAJgEIAIgBQARAAAIALQAIALAAAVIAABHg");
	this.shape_732.setTransform(308.2,-161.3);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#111111").s().p("AAaA6IAAg+QAAgSgFgKQgGgKgNAAIgFABQgDABgGAEQgFAFgDAIQgEAJAAAOIAAA6IgMAAIAAhXIAAgLIgBgOIAMAAIABAJIAAAJIAAAAIAGgJIAHgGIAIgEIAIgCQARABAIAKQAJAMgBAVIAABHg");
	this.shape_733.setTransform(292.4,-157.9);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#111111").s().p("AgPA2QgIgEgHgIQgGgIgDgKQgDgLgBgNQABgMADgKQADgLAGgJQAGgIAJgEQAIgEAIAAQAKAAAIAEQAIAFAFAHQAGAIACAKQAEAKAAAMIAAAGIhKAAQACAIACAIQADAHAEAGQAEAGAGADQAGACAFAAQAKABAHgHQAIgFADgIIAKAKQgHANgKAFQgKAGgLAAQgJAAgIgFgAgJgoQgGACgEAFQgFAFgCAHQgDAGAAAHIA7AAQAAgQgIgKQgHgKgOAAQgFAAgFAEg");
	this.shape_734.setTransform(282,-157.8);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#111111").s().p("AgSA2QgJgFgGgMIALgJQAEAHAFAFQAGAEAHAAIAIgBQADgBADgCQADgCACgEQACgEAAgEQAAgJgFgDQgFgEgHgCIgLgEIgGgCQgEgCgEgCQgEgDgCgGQgDgFAAgJQAAgIADgGQADgHAEgEQAFgEAGgCQAGgCAFAAQAJAAAIAEQAIAFAEALIgLAKQgDgIgEgDQgFgFgHAAIgFABIgGADQgDACgCADQgBADAAAFQAAAIAEADQAEAEAIADIANADQAJADAGAIQAGAHAAANQAAAJgDAGQgDAHgEAEQgFAEgGACQgHACgGAAQgJAAgJgFg");
	this.shape_735.setTransform(267.5,-157.8);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#111111").s().p("AgPA2QgJgEgFgIQgHgIgDgKQgDgLgBgNQABgMADgKQADgLAHgJQAGgIAHgEQAJgEAIAAQAKAAAIAEQAIAFAGAHQAFAIACAKQAEAKAAAMIAAAGIhJAAQABAIACAIQADAHAEAGQAFAGAFADQAGACAFAAQALABAGgHQAIgFADgIIAKAKQgIANgJAFQgKAGgLAAQgJAAgIgFgAgJgoQgGACgEAFQgFAFgCAHQgDAGAAAHIA7AAQAAgQgIgKQgHgKgOAAQgFAAgFAEg");
	this.shape_736.setTransform(258.3,-157.8);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#111111").s().p("AgGA4IgkhvIAPAAIAbBeIAdheIAOAAIgkBvg");
	this.shape_737.setTransform(248.5,-157.8);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#111111").s().p("AgSA5QgFgCgEgEQgFgFgCgFQgCgHgBgIQABgOAFgHQAGgIAIgDQAIgEAJgBIARgBIAHAAIAAgDQAAgdgXAAQgOAAgMAOIgHgMQAMgQAYAAQAHAAAFACQAGADAEAFQAFAEACAIQADAHAAAKIAAAyIAAANIABAMIgMAAIAAgJIgBgJIAAAAQgFALgIAFQgHAFgKAAQgGAAgGgCgAAGAAIgNAEQgHACgFAEQgEAGAAAIQAAAGACAEQABADADADIAHADIAIABQAGAAAFgCQAEgDAEgFQADgFACgGQACgHAAgIIAAgIIgHAAIgLAAg");
	this.shape_738.setTransform(238.8,-157.8);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#111111").s().p("AgSA2QgJgFgGgMIALgJQAEAHAFAFQAGAEAHAAIAIgBQADgBADgCQADgCACgEQACgEAAgEQAAgJgFgDQgFgEgHgCIgLgEIgGgCQgEgCgEgCQgEgDgCgGQgDgFAAgJQAAgIADgGQADgHAEgEQAFgEAGgCQAGgCAFAAQAJAAAIAEQAIAFAEALIgLAKQgDgIgEgDQgFgFgHAAIgFABIgGADQgDACgCADQgBADAAAFQAAAIAEADQAEAEAIADIANADQAJADAGAIQAGAHAAANQAAAJgDAGQgDAHgEAEQgFAEgGACQgHACgGAAQgJAAgJgFg");
	this.shape_739.setTransform(224.9,-157.8);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#111111").s().p("AgSA5QgFgCgEgEQgFgFgCgFQgCgHgBgIQABgOAFgHQAGgIAIgDQAIgEAJgBIARgBIAHAAIAAgDQAAgdgXAAQgOAAgMAOIgIgMQANgQAYAAQAHAAAFACQAGADAEAFQAFAEADAIQACAHAAAKIAAAyIAAANIABAMIgLAAIgBgJIAAgJIgBAAQgGALgHAFQgHAFgKAAQgGAAgGgCgAAGAAIgNAEQgHACgEAEQgFAGAAAIQAAAGACAEQABADADADIAHADIAIABQAGAAAFgCQAEgDAEgFQAEgFABgGQACgHAAgIIAAgIIgHAAIgLAAg");
	this.shape_740.setTransform(215.7,-157.8);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#111111").s().p("AgFBbIAAi1IALAAIAAC1g");
	this.shape_741.setTransform(208.8,-161.3);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#111111").s().p("AgSA5QgFgCgEgEQgFgFgCgFQgCgHgBgIQABgOAFgHQAGgIAIgDQAJgEAIgBIARgBIAHAAIAAgDQAAgdgXAAQgOAAgMAOIgHgMQAMgQAYAAQAHAAAFACQAGADAEAFQAFAEACAIQADAHAAAKIAAAyIAAANIACAMIgNAAIAAgJIgBgJIAAAAQgFALgIAFQgHAFgKAAQgGAAgGgCgAAFAAIgMAEQgGACgGAEQgEAGAAAIQAAAGACAEQACADACADIAHADIAIABQAGAAAFgCQAFgDADgFQADgFACgGQACgHAAgIIAAgIIgHAAIgMAAg");
	this.shape_742.setTransform(196.1,-157.8);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#111111").s().p("AgXA6IAAhNIgBgPIAAgUIAMAAIAAAVIABAAQABgEACgEIAGgIIAHgGQAFgCAGAAIAJABIgCAQQgDgBgEAAQgIAAgFADQgEAEgDAFQgEAGgBAGIgCAMIAAA/g");
	this.shape_743.setTransform(183.9,-157.9);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#111111").s().p("AgSA5QgFgCgEgEQgFgFgCgFQgCgHgBgIQABgOAFgHQAGgIAIgDQAIgEAJgBIARgBIAHAAIAAgDQAAgdgXAAQgOAAgMAOIgHgMQAMgQAYAAQAHAAAFACQAGADAEAFQAFAEACAIQADAHAAAKIAAAyIAAANIABAMIgMAAIAAgJIAAgJIgBAAQgFALgIAFQgHAFgKAAQgGAAgGgCgAAGAAIgNAEQgHACgFAEQgEAGAAAIQAAAGACAEQABADADADIAHADIAIABQAGAAAFgCQAEgDAEgFQADgFACgGQACgHAAgIIAAgIIgHAAIgLAAg");
	this.shape_744.setTransform(174.9,-157.8);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#111111").s().p("AAFBIQgEgBgCgDQgEgEgCgFQgCgGAAgJIAAhHIgTAAIAAgOIATAAIAAgfIAMAAIAAAfIAZAAIAAAOIgZAAIAABCIABAKQAAAEACACQABABAAAAQABABAAAAQAAAAABABQABAAAAAAIAFABIAHgBIAGgEIABAQQgHADgKAAIgHgBg");
	this.shape_745.setTransform(167,-159.2);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#111111").s().p("AAaA6IAAg+QAAgSgFgKQgGgKgNAAIgFABQgDABgGAEQgEAFgEAIQgEAJAAAOIAAA6IgNAAIAAhXIAAgLIgBgOIAOAAIAAAJIAAAJIABAAIAEgJIAIgGIAIgEIAIgCQARABAJAKQAIAMAAAVIAABHg");
	this.shape_746.setTransform(158.5,-157.9);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#111111").s().p("AgPA2QgIgEgHgIQgFgIgEgKQgEgLABgNQgBgMAEgKQAEgLAFgJQAHgIAIgEQAIgEAIAAQAKAAAIAEQAIAFAFAHQAGAIACAKQADAKAAAMIAAAGIhJAAQABAIADAIQADAHAEAGQAFAGAFADQAFACAHAAQAKABAHgHQAHgFADgIIAKAKQgIANgJAFQgKAGgLAAQgIAAgJgFgAgKgoQgFACgFAFQgEAFgCAHQgDAGAAAHIA7AAQAAgQgIgKQgHgKgOAAQgFAAgGAEg");
	this.shape_747.setTransform(148.2,-157.8);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#111111").s().p("AA2A6IAAhBQAAgRgFgJQgEgJgNAAQgIgBgEAEQgFAEgDAFQgCAGgCAIQgCAHABAHIAAA8IgMAAIAAhBQAAgRgFgJQgEgJgNAAIgFABQgEABgEAEQgFAFgDAIQgEAJAAAOIAAA6IgMAAIAAhXIAAgMIgBgNIANAAIAAARIAAAAQAFgKAIgEQAIgGAIAAIAHABQAFABADADQAEACAEAFQACAEACAIQAEgMAIgFQAIgHAJAAQARABAJAKQAHAMABAVIAABHg");
	this.shape_748.setTransform(134.7,-157.9);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#111111").s().p("AgFBUIAAhwIALAAIAABwgAgFg+QgDgEAAgFQAAgFADgDQADgEACAAQADAAADAEQADADAAAFQAAAFgDAEQgDADgDAAQgCAAgDgDg");
	this.shape_749.setTransform(124.6,-160.5);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#111111").s().p("AgFBbIAAi1IALAAIAAC1g");
	this.shape_750.setTransform(120,-161.3);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#111111").s().p("AAxBVIgPgtIhDAAIgPAtIgQAAIA6ipIANAAIA6CpgAgcAZIA5AAIgdhZg");
	this.shape_751.setTransform(111.3,-160.7);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQADgCADgEQACgDAAgFQAAgJgGgEQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgGQAEgHAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAFAGALIgOAJQgFgGgFgEQgHgFgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQAEQAMACAHAIQAJAIgBALQAAAKgDAGQgEAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_752.setTransform(254,131.9);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_753.setTransform(242.1,131.9);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGACgGAEQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgCQAVAAAKAMQALALAAAVIAABGg");
	this.shape_754.setTransform(228.6,131.7);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAGQAFAFAIAEQAIADAJAAQAKAAAHgDQAIgEAGgFQAFgGADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_755.setTransform(215,131.9);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_756.setTransform(205,129.1);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgIQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAFQAFAEADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgHQACgHAAgHIAAgIIgIAAIgPABg");
	this.shape_757.setTransform(184,131.9);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#111111").s().p("AAFBIQgFgBgDgDQgDgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAHABIAIgBIAHgEIACAPQgJAEgNABIgKgCg");
	this.shape_758.setTransform(174.2,130.4);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQADgFAGgFIALgGQAFgDAGgBIALgBQANAAALAEQALAFAIAIQAIAHAFAMQAEAKAAANQAAAMgEALQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBIgLgEIgLgHQgGgEgDgFIgBAAIAABXgAgRhJQgIADgGAGQgGAGgDAJQgDAHAAAKQAAAJADAIQADAJAGAFQAGAFAIAEQAJADAIAAQAKAAAIgDQAIgEAGgFQAFgFADgJQADgIAAgJQAAgKgDgHQgDgJgFgGQgGgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_759.setTransform(149.9,135.2);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgJgRgBQgJABgGADQgGADgDAGQgEAGgCAIIgBAPIAAA6IgPAAIAAhAQAAgRgGgJQgGgJgRgBIgGABQgFACgGAEQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgFQAKgEAKgBIAKABQAFABAFADQAFACAEAFQADAFADAHQAFgLAKgHQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_760.setTransform(131.7,131.7);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#111111").s().p("AA+BVIgTgsIhVAAIgTAsIgUAAIBKipIAPAAIBKCpgAgkAYIBJAAIglhYg");
	this.shape_761.setTransform(113.5,129);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_762.setTransform(282.2,-190.3);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgGgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQALACAJAHQAHAIABAMQgBAJgEAHQgDAGgGAFQgGAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_763.setTransform(273.8,-194.7);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgEAEgFQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAPQgDgBgGAAQgJAAgHAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_764.setTransform(253.3,-194.9);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgDgCgGQgDgFAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgDIABAOQgJAFgNAAIgKgBg");
	this.shape_765.setTransform(231,-196.2);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_766.setTransform(147.3,-198.1);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#111111").s().p("AgPBVIAAhwIAPAAIAABwgAgWgxIAXgjIAWAAIgfAjg");
	this.shape_767.setTransform(138.3,-197.6);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#111111").s().p("AgVBTQgQgHgMgMQgMgMgHgQQgHgRAAgTQAAgSAHgRQAHgQAMgMQAMgMAQgHQAQgGASgBQAQAAAQAHQAPAGAMAOIgPAMIgIgIQgEgFgGgDIgNgFQgGgCgHAAQgPAAgNAHQgNAFgJALQgJAKgFANQgFAOAAANQAAAOAFAOQAFANAJAKQAJAKANAHQANAFAPABIANgCIANgEQAHgDAFgFQAGgEAFgIIAOAKIgLAMQgGAGgIAEQgJAEgJADQgKACgKAAQgSAAgQgGg");
	this.shape_768.setTransform(114,-197.6);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_769.setTransform(360.1,-79.8);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgFAAgJQAAgIAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgGgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFADQAGAEAKADIAQADQALADAJAHQAHAJABAMQgBAIgEAHQgDAGgGAFQgGAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_770.setTransform(351.7,-84.3);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#111111").s().p("AgmAuQgKgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgHAIQgFAEgEADQgFADgGABIgKACQgWAAgLgMg");
	this.shape_771.setTransform(321.6,-84.2);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIAMgHQAGgDAFgBIALgBQANAAALAFQAMAEAHAHQAIAIAEALQAFALAAANQAAANgFAKQgEAKgIAIQgHAIgMAFQgLAEgNAAIgLgBIgLgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgDAJQgEAHAAAKQAAAJAEAJQADAHAGAGQAGAGAIADQAIADAJABQAKgBAIgDQAHgDAHgGQAFgGADgHQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_772.setTransform(271.6,-81);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAJgLAEQgLAEgNABQgMgBgLgEgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAJAEAJQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgEgKAAQgJAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_773.setTransform(202.1,-87);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgDQAEgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgFAAQgKAAgGAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_774.setTransform(124.1,-84.4);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPAMAAAWQAAAXgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgEQAFgFACgFQACgFAAgHQAAgFgCgGQgCgGgFgDQgFgEgIgDQgIgCgLAAIgbAAg");
	this.shape_775.setTransform(112.8,-87.2);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_776.setTransform(273.3,21.4);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgDQAEgEAGgCQAFgBAIAAIAMABIgDAQQgEgCgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_777.setTransform(267.5,24);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#111111").s().p("AAGBJQgFgCgDgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgDIABAOQgIAFgNAAIgJgBg");
	this.shape_778.setTransform(258.6,22.7);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#111111").s().p("AgTBSQgLgEgIgIQgHgJgFgKQgEgLAAgNQAAgNAEgKQAEgKAIgIQAIgIAKgEQAKgFALABQANgBAKAFQAKAFAHAHQAHAIADAJQAEAKAAAMIAAAHIhdAAQABAIAEAIQADAHAGAFQAFAGAHADQAHADAIAAQANAAAJgGQAJgFAFgJIAMAKQgKANgMAGQgMAFgOABQgMgBgKgEgAgNgNQgHACgFAGQgGAFgDAFQgDAHAAAGIBLAAQAAgQgKgJQgJgJgSgBQgGAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_779.setTransform(236.3,21.4);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_780.setTransform(196.8,24.2);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAHABIAJgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_781.setTransform(185.7,22.7);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAHABIAJgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_782.setTransform(153.8,22.7);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKAMQALALAAAWIAABGg");
	this.shape_783.setTransform(142.9,24);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_784.setTransform(129.3,24.2);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#111111").s().p("AgVBTQgQgHgMgMQgMgMgHgQQgHgQAAgUQAAgSAHgQQAHgRAMgMQAMgMAQgHQAQgGASAAQAQgBAQAHQAPAGAMAPIgPALIgIgIQgEgFgGgDIgNgEQgGgCgHgBQgPABgNAFQgNAHgJAKQgJAKgFANQgFAOAAANQAAAOAFAOQAFAOAJAJQAJALANAFQANAHAPAAIANgBIANgFQAHgDAFgFQAGgEAFgIIAOAKIgLAMQgGAGgIAFQgJAEgJACQgKADgKAAQgSgBgQgGg");
	this.shape_785.setTransform(114,21.3);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIABQANAAAJgHQAJgFAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_786.setTransform(308.7,148.1);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgFQALgEAMAAQANAAALAEQALAFAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAIQACAJAGAGQAFAGAIADQAIADAJABQAKgBAHgDQAIgDAGgGQAFgGADgJQADgIAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_787.setTransform(257.6,148.1);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgCAEgCQAEgCACgEQACgDAAgFQAAgIgGgEQgHgEgJgCIgNgEIgIgCQgFgCgFgCQgFgEgDgFQgDgFAAgJQAAgIADgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAKQgFgIgFgDQgHgFgIAAIgIABIgHADIgFAFQgCADgBAFQAAAIAGADQAGAEAKADIAQADQALADAJAIQAHAHABANQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_788.setTransform(225,148.1);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKABQAIgBAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_789.setTransform(174.7,148.1);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKABQAIgBAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_790.setTransform(155.6,148.1);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKABQAIgBAGgCQAGgDAFgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgPAAg");
	this.shape_791.setTransform(122.7,148.1);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_792.setTransform(427.6,119.3);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#111111").s().p("AAFBIQgEgBgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAHABIAJgBIAIgEIABAQQgKADgMAAIgKgBg");
	this.shape_793.setTransform(417,117.9);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAGgCAHABIAMAAIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_794.setTransform(410.1,119.2);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAHAEAJAAIAJAAQAFgCAEgCQADgCADgEQACgDAAgFQAAgIgGgEQgGgEgJgCIgPgEIgIgCQgFgCgEgCQgFgEgDgFQgDgFgBgJQABgIADgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAGALIgPAKQgDgIgHgDQgFgFgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAHAIQAIAHAAANQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_795.setTransform(360.9,119.3);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgHIAAgJIgIAAIgPAAg");
	this.shape_796.setTransform(349.2,119.3);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#111111").s().p("AgPBVIAAhvIAPAAIAABvgAgWgyIAXgiIAWAAIgeAig");
	this.shape_797.setTransform(310.6,116.4);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgDAGgDQAGgCAHABIAMAAIgDARQgDgCgGAAQgJAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_798.setTransform(296,119.2);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgEgHAAgIQAAgOAHgHQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHACAGAGQAFAFADAHQAEAHAAALIAAAxIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAGAAAIQAAAFADAFQACAEAEACQAEACAEACIAKAAQAIAAAGgCQAGgDAFgFQAEgFACgGQACgHAAgHIAAgJIgIAAIgPAAg");
	this.shape_799.setTransform(284.5,119.3);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIAMgHQAGgDAFgBIALgBQANAAALAEQAMAFAHAHQAIAJAEAKQAFALAAANQAAAMgFAMQgEAJgIAIQgHAIgMAEQgLAFgNAAIgLgBIgLgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgDAIQgEAJAAAJQAAAJAEAIQADAJAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAHgDAHgFQAFgGADgJQADgIAAgJQAAgJgDgJQgDgIgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_800.setTransform(271.6,122.6);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_801.setTransform(250.6,119.3);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgKgRAAIgGABQgGAAgGAFQgGAFgFAIQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_802.setTransform(215.7,119.2);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgMQAAgNAFgLQAEgKAIgIQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAIAEAKQAFALAAANQAAAMgFALQgEAKgIAIQgIAJgLAEQgLAEgNAAQgMAAgLgEgAgRgNQgIAEgFAFQgGAFgCAJQgEAIAAAKQAAAIAEAJQACAIAGAGQAFAGAIADQAIAEAJAAQAKAAAHgEQAIgDAGgGQAFgGADgIQADgJAAgIQAAgKgDgIQgDgJgFgFQgGgFgIgEQgHgDgKAAQgJAAgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_803.setTransform(202.1,116.6);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgFQAKgEALAAQANAAAKAEQAKAFAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHAEQAHACAIAAQANABAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAHQgDAGAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_804.setTransform(159.5,119.3);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgDAGgDQAGgCAHABIAMAAIgDARQgEgCgFAAQgKAAgGADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_805.setTransform(124.1,119.2);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPAMQAPAKAAAXQAAAXgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgEQAFgFACgFQACgFAAgHQAAgGgCgFQgCgGgFgEQgFgDgIgDQgIgCgLAAIgbAAg");
	this.shape_806.setTransform(112.8,116.4);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_807.setTransform(417.9,-178.4);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_808.setTransform(396.3,-181.2);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAQQgDgCgGAAQgJAAgHAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_809.setTransform(390.5,-178.6);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgKIAAhFIgXAAIAAgPIAXAAIAAggIAPAAIAAAgIAhAAIAAAPIghAAIAABBIABAKIAEAGQABACADABIAHABIAIgBIAJgDIAAAOQgJAFgMAAIgJgBg");
	this.shape_810.setTransform(381.6,-179.9);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#111111").s().p("AgTBSQgLgFgIgHQgHgJgFgKQgEgLAAgNQAAgNAEgKQAEgKAIgIQAIgIAKgEQAKgFALABQANgBAKAFQAKAEAHAIQAHAIADAJQAEAKAAAMIAAAHIhdAAQABAIAEAHQADAIAGAGQAFAFAHADQAHADAIAAQANAAAJgGQAJgFAFgJIAMAKQgKANgMAGQgMAFgOABQgMgBgKgEgAgNgNQgHACgFAFQgGAGgDAFQgDAHAAAGIBLAAQAAgPgKgKQgJgJgSgBQgGABgIADgAgOgzIAXgiIAWAAIgfAig");
	this.shape_811.setTransform(359.3,-181.2);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_812.setTransform(340.2,-178.4);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_813.setTransform(319.8,-178.4);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgCgDgHQgDgFAAgKIAAhFIgYAAIAAgPIAYAAIAAggIAPAAIAAAgIAgAAIAAAPIggAAIAABBIABAKIADAGQACACAEABIAHABIAIgBIAHgDIACAOQgJAFgNAAIgKgBg");
	this.shape_814.setTransform(308.7,-179.9);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_815.setTransform(286.6,-178.4);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgCgDgHQgDgFAAgKIAAhFIgYAAIAAgPIAYAAIAAggIAPAAIAAAgIAgAAIAAAPIggAAIAABBIABAKIADAGQACACAEABIAHABIAIgBIAHgDIACAOQgJAFgNAAIgKgBg");
	this.shape_816.setTransform(276.8,-179.9);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_817.setTransform(265.9,-178.6);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_818.setTransform(252.3,-178.4);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAFAJAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgOAJQgFgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQADQAMADAHAHQAJAJgBALQAAAJgDAHQgEAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_819.setTransform(215.3,-178.4);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_820.setTransform(203,-178.4);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgKIAAhFIgXAAIAAgPIAXAAIAAggIAPAAIAAAgIAhAAIAAAPIghAAIAABBIABAKIAEAGQACACACABIAIABIAIgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_821.setTransform(191.9,-179.9);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_822.setTransform(181.2,-178.4);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCACgEQABgDABgEIABgJIAAiDIAPAAIAACGIAAAIQgBAGgCAGQgDAGgHAFQgGAEgMAAQgGAAgGgCgAAFhbQgEgEgBgFQABgFAEgDQADgDAFAAQAEAAADADQAEADAAAFQAAAFgEAEQgDADgEAAQgFAAgDgDg");
	this.shape_823.setTransform(170.5,-178.3);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#111111").s().p("AgKBbIgNgEIgLgHQgEgEgEgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQAEgGAEgEIALgHQAHgDAGgBIAKgBQANAAAMAFQAKAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_824.setTransform(161.9,-181.8);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_825.setTransform(147,-178.4);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_826.setTransform(126.6,-178.4);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAEAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgEAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_827.setTransform(112.2,-181.8);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_828.setTransform(449.6,-207.2);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_829.setTransform(416.7,-207.2);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_830.setTransform(405.4,-207.3);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgGgGgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQADQALADAJAHQAHAJABALQgBAJgEAHQgDAHgGAEQgGAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_831.setTransform(380.9,-207.2);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_832.setTransform(369.2,-207.2);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAQAAIAAAVIAAAAQABgFAEgEQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAQQgDgCgGAAQgJAAgHAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_833.setTransform(360.4,-207.4);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgKIAAhFIgXAAIAAgPIAXAAIAAggIAPAAIAAAgIAhAAIAAAPIghAAIAABBIABAKIADAGQADACACABIAIABIAIgBIAIgDIABAOQgJAFgNAAIgKgBg");
	this.shape_834.setTransform(338.1,-208.7);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_835.setTransform(321.8,-207.2);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_836.setTransform(302.3,-207.4);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_837.setTransform(289.2,-207.2);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_838.setTransform(269.3,-207.2);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#111111").s().p("AgPBVIAAhwIAPAAIAABwgAgWgxIAXgjIAWAAIgeAjg");
	this.shape_839.setTransform(246.7,-210.1);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_840.setTransform(236.5,-207.2);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_841.setTransform(225.2,-207.3);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_842.setTransform(205.7,-207.2);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAHABAGADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_843.setTransform(191.3,-210.6);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_844.setTransform(170.6,-207.2);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgKgEgJgHQgIgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_845.setTransform(155.8,-204.5);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgGgGgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQADQALADAJAHQAHAJABALQgBAJgEAHQgDAHgHAEQgFAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_846.setTransform(143.8,-207.2);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_847.setTransform(131.9,-207.2);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_848.setTransform(122.4,-210);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#111111").s().p("AAkBVIgthPIgeAAIAABPIgRAAIAAipIA0AAQAaAAAPALQAPALAAAXQAAASgMAMQgLALgVACIAxBRgAgngJIAfAAQAKAAAIgCQAJgDAEgEQAGgEABgFQACgGAAgGQAAgFgCgGQgBgFgGgEQgEgFgJgCQgIgCgKAAIgfAAg");
	this.shape_849.setTransform(113.3,-210.1);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgIgCQgFgCgEgDQgFgDgDgFQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFADQAGAEAKADIAQADQAMADAHAHQAIAJAAAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_850.setTransform(232.7,-69);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_851.setTransform(175.4,-69);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#111111").s().p("AgtA4IAAgLIBBhWIg9AAIAAgOIBVAAIAAALIhBBWIBCAAIAAAOg");
	this.shape_852.setTransform(151.7,-69);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_853.setTransform(139.7,-69.1);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIALgHQAFgDAGgBIALgBQANAAALAFQALAEAIAHQAIAIAFALQAEALAAANQAAANgEAKQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgDAJQgDAHAAAKQAAAJADAJQADAHAGAGQAGAGAIADQAJADAIABQAKgBAIgDQAIgDAFgGQAGgGADgHQADgJAAgJQAAgKgDgHQgDgJgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_854.setTransform(113,-65.7);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_855.setTransform(363.9,-100.5);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgFQADgEAFgDQADgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgGAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_856.setTransform(344.8,-97.9);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_857.setTransform(292.9,-100.5);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_858.setTransform(283.2,-97.9);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGADgDAHQgEAFgCAHIgBAQIAAA7IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGABQgFACgGAEQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_859.setTransform(245.4,-97.9);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgFgBgJQABgIADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_860.setTransform(230.3,-97.8);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_861.setTransform(222.3,-100.5);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGADgDAHQgEAFgCAHIgBAQIAAA7IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGABQgFACgGAEQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_862.setTransform(209,-97.9);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#111111").s().p("AgPBVIAAhvIAPAAIAABvgAgWgyIAXgiIAWAAIgfAig");
	this.shape_863.setTransform(138.3,-100.7);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#111111").s().p("AgVBTQgQgHgMgMQgMgMgHgQQgHgQAAgUQAAgSAHgQQAHgRAMgMQAMgMAQgHQAQgGASAAQAQgBAQAHQAPAGAMAPIgPALIgIgJQgEgEgGgDIgNgEQgGgCgHgBQgPABgNAFQgNAHgJAKQgJAKgFANQgFANAAAOQAAAOAFAOQAFAOAJAJQAJALANAFQANAHAPAAIANgBIANgFQAHgDAFgFQAGgEAFgIIAOAKIgLAMQgGAGgIAFQgJAEgJACQgKADgKAAQgSgBgQgGg");
	this.shape_864.setTransform(114,-100.7);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_865.setTransform(370.2,41.9);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQAEgCACgEQACgDAAgFQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGAEQAGADAKADIAQAEQALACAJAHQAHAIABAMQAAAJgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_866.setTransform(361.8,37.5);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJACAHQABAHAEAFQADAFAGADQAGACAIAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_867.setTransform(331.7,37.6);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_868.setTransform(319.7,37.4);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#111111").s().p("AgPBVIAAhwIAPAAIAABwgAgWgxIAXgjIAWAAIgfAjg");
	this.shape_869.setTransform(311.5,34.6);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#111111").s().p("AAGBJQgGgCgCgDQgEgEgDgGQgDgFAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAJgDIAAAOQgJAFgMAAIgJgBg");
	this.shape_870.setTransform(303.8,36);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgEADgFQADgEAEgEQAEgCAGgCQAFgCAIAAIAMABIgDAPQgEgBgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_871.setTransform(296.9,37.3);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQADgFAGgFIAKgGQAHgDAFgBIALgBQAOAAAKAFQALADAIAJQAIAHAFALQAEALAAANQAAAMgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBIgMgEIgKgHQgGgEgDgFIgBAAIAABXgAgRhKQgIAEgGAGQgGAGgEAJQgCAHAAAKQAAAJACAJQAEAIAGAFQAGAFAIAEQAJAEAIAAQAKAAAIgEQAIgEAFgFQAGgFACgIQAEgJAAgJQAAgKgEgHQgCgJgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_872.setTransform(272.5,40.8);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_873.setTransform(237.1,34.1);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_874.setTransform(184.7,37.4);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_875.setTransform(173.2,37.4);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgEQADgCAGgCQAFgCAIAAIAMABIgDAPQgDgBgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_876.setTransform(124.9,37.3);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQADgFAGgFIALgGQAFgDAGgBIALgBQANAAALAFQALADAIAJQAIAHAFALQAEALAAANQAAAMgEALQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBIgLgEIgLgHQgGgEgDgFIgBAAIAABXgAgRhKQgIAEgGAGQgGAGgDAJQgDAHAAAKQAAAJADAJQADAIAGAFQAGAFAIAEQAJAEAIAAQAKAAAIgEQAIgEAFgFQAGgFADgIQADgJAAgJQAAgKgDgHQgDgJgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_877.setTransform(113,40.8);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFADAHgBQAIAAAFgEQAFgGADgJIAJgWIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAIQgIAHgOAAIgIAAg");
	this.shape_878.setTransform(412.4,11.5);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgGgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQALACAJAHQAHAJABALQgBAJgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_879.setTransform(394.9,8.7);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_880.setTransform(355.9,8.7);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_881.setTransform(337.6,8.6);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgDgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAJgDIAAAOQgJAFgMAAIgJgBg");
	this.shape_882.setTransform(315.1,7.2);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_883.setTransform(304.3,8.8);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIAAAAQAEgFAFgFIALgGQAGgDAHgBIAKgBQAOAAALAFQALADAHAJQAIAHAEALQAFALAAANQAAAMgFALQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBIgNgEIgLgHQgFgEgEgFIAAAAIAABXgAgRhKQgIAEgGAGQgGAGgEAJQgDAHAAAKQAAAJADAJQAEAIAGAFQAGAFAIAEQAIAEAJAAQAKAAAIgEQAHgEAHgFQAFgFACgIQAEgJAAgJQAAgKgEgHQgCgJgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_884.setTransform(290.8,12);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgIgCIgOgEIgJgCQgEgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgEgHgGgEQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQAEQALACAIAHQAJAJAAALQAAAJgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_885.setTransform(231.8,8.7);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_886.setTransform(206.4,8.5);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_887.setTransform(192.8,8.7);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_888.setTransform(174.6,8.6);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#111111").s().p("AgsA4IAAgLIBBhWIg+AAIAAgOIBUAAIAAALIhBBWIBEAAIAAAOg");
	this.shape_889.setTransform(150.9,8.6);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_890.setTransform(138.9,8.5);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_891.setTransform(125.7,8.8);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPALAAAXQAAAXgPAMQgPAKgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgDAFgEQAFgEACgFQACgGAAgGQAAgFgCgGQgCgFgFgEQgFgEgIgDQgIgCgLAAIgbAAg");
	this.shape_892.setTransform(112.8,5.8);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgGgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAHQAHAJABAMQgBAIgEAHQgDAGgGAFQgGAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_893.setTransform(380.9,131.8);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgEQADgFAEgDQAEgEAGgCQAGgBAHAAIAMAAIgDARQgDgCgGAAQgJAAgHAEQgGADgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_894.setTransform(360.4,131.7);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgDIABAPQgJAEgNgBIgKAAg");
	this.shape_895.setTransform(338.1,130.4);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgGgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAHQAHAJABAMQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_896.setTransform(143.8,131.8);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#111111").s().p("AAkBVIgthPIgeAAIAABPIgRAAIAAipIA0AAQAaAAAPAMQAPAKAAAXQAAASgMANQgLALgVABIAxBRgAgngJIAfAAQAKAAAIgCQAJgCAEgEQAGgEABgGQACgFAAgHQAAgFgCgGQgBgGgGgEQgEgDgJgDQgIgCgKAAIgfAAg");
	this.shape_897.setTransform(113.3,128.9);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAHIgBAQIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWAAAKALQAKALAAAVIAABGg");
	this.shape_898.setTransform(317.4,-194.9);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAHABAGADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_899.setTransform(191.3,-198.1);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgKgEgJgHQgIgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_900.setTransform(155.8,-192);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgGgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQALACAJAHQAHAIABAMQgBAJgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_901.setTransform(143.8,-194.7);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_902.setTransform(122.4,-197.5);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgGgDgKgCIgOgEIgHgCQgGgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgOAJQgDgGgHgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQADQAMADAIAHQAHAJAAALQAAAJgEAHQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_903.setTransform(392.5,-85.3);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgFgCgCgHQgDgFAAgKIAAhFIgYAAIAAgPIAYAAIAAggIAPAAIAAAgIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgDIABAOQgIAFgNAAIgJgBg");
	this.shape_904.setTransform(369.2,-86.7);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCACgEQACgDAAgEIAAgJIAAiDIAQAAIAACGIAAAIQgBAGgCAGQgDAGgGAFQgHAEgLAAQgIAAgFgCgAAEhbQgDgEAAgFQAAgFADgDQAEgDAEAAQAFAAADADQAEADAAAFQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_905.setTransform(347.7,-85.2);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAHABAGADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_906.setTransform(191.3,-88.6);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgKgEgJgHQgIgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_907.setTransform(155.8,-82.6);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_908.setTransform(403.3,21.2);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQABgFAEgEQADgEAFgEQADgCAGgCQAFgCAIgBIAMACIgDAPQgDgBgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_909.setTransform(375.9,21);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgEIABAPQgKAEgMABIgKgCg");
	this.shape_910.setTransform(367,19.7);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#111111").s().p("AgTBSQgLgFgIgHQgHgJgFgKQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIAKgEQAKgFALAAQANAAAKAFQAKAFAHAHQAHAHADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAIAGAGQAFAFAHADQAHADAIAAQANAAAJgGQAJgGAFgHIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgFgAgNgNQgHADgFAEQgGAGgDAFQgDAHAAAHIBLAAQAAgQgKgKQgJgKgSAAQgGABgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_911.setTransform(344.7,18.4);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_912.setTransform(305.2,21.2);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#111111").s().p("AAGBIQgGgBgCgDQgEgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgEIABAPQgIAEgNABIgJgCg");
	this.shape_913.setTransform(294.1,19.7);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgIQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgHQACgHAAgHIAAgIIgIAAIgPABg");
	this.shape_914.setTransform(272,21.2);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#111111").s().p("AAGBIQgFgBgDgDQgEgEgDgFQgDgGAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIADAGQACACAEABIAGABIAIgBIAIgEIABAPQgIAEgNABIgJgCg");
	this.shape_915.setTransform(262.2,19.7);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_916.setTransform(237.7,21.2);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_917.setTransform(205.7,21.2);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAHABAGADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_918.setTransform(191.3,17.8);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgKQAEgMAIgHQAIgIALgFQALgEAMAAQANAAALAEQALAFAIAIQAIAHAEAMQAFAKAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgoQgIADgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAIQACAJAGAFQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgFADgJQADgIAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_919.setTransform(170.6,21.2);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgKgEgJgHQgIgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQABAJgDAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_920.setTransform(155.8,23.9);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAFAKgBIAJgBQAFAAAEgDQADgCADgEQACgDAAgFQAAgJgGgDQgGgEgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgGQADgHAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgGgEQgFgFgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQALACAJAIQAHAIABALQgBAKgEAGQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgLgFg");
	this.shape_921.setTransform(143.8,21.2);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgKQAEgMAIgHQAIgIAKgFQAKgEALAAQANAAAKAEQAKAFAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgIIAMAKQgKANgMAFQgMAGgOAAQgMAAgKgEgAgNgoQgHACgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIAEg");
	this.shape_922.setTransform(131.9,21.2);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_923.setTransform(122.4,18.4);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#111111").s().p("AAkBVIgthPIgeAAIAABPIgRAAIAAipIA0AAQAaAAAPALQAPALAAAYQAAARgMAMQgLAMgVACIAxBQgAgngJIAfAAQAKAAAIgCQAJgCAEgFQAGgEABgFQACgGAAgFQAAgGgCgGQgBgFgGgEQgEgEgJgDQgIgCgKAAIgfAAg");
	this.shape_924.setTransform(113.3,18.3);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgBAIAAIAMAAIgDARQgDgCgHAAQgIAAgHAEQgFADgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_925.setTransform(375.9,131.7);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgDIABAPQgKAEgMgBIgKAAg");
	this.shape_926.setTransform(367,130.4);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#111111").s().p("AgTBSQgLgEgIgJQgHgHgFgLQgEgLAAgNQAAgNAEgKQAEgKAIgIQAIgIAKgEQAKgEALAAQANAAAKAEQAKAFAHAHQAHAHADAKQAEAKAAALIAAAIIhdAAQABAIAEAIQADAHAGAFQAFAGAHADQAHADAIAAQANAAAJgGQAJgFAFgJIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgNQgHADgFAFQgGAFgDAFQgDAHAAAGIBLAAQAAgQgKgIQgJgLgSAAQgGAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_927.setTransform(344.7,129.1);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_928.setTransform(305.2,131.8);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgDIABAPQgIAEgNgBIgJAAg");
	this.shape_929.setTransform(294.1,130.4);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#111111").s().p("AAGBJQgFgCgDgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgDIABAPQgIAEgNgBIgJAAg");
	this.shape_930.setTransform(262.2,130.4);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_931.setTransform(237.7,131.8);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_932.setTransform(170.6,131.8);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAFAJAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgGgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFAEQAFADALADIAQADQAMADAHAHQAJAJgBALQAAAJgDAHQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_933.setTransform(346.4,-85.3);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_934.setTransform(240.3,-85.2);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAAUIABAAQADgGAGgFIALgGQAGgDAFgBIALgBQANAAALAFQALADAIAIQAIAJAFAKQAEALAAANQAAANgEAKQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBIgLgEIgLgHQgGgEgDgFIgBAAIAABXgAgRhKQgIAEgGAGQgGAGgDAJQgDAIgBAJQABAJADAJQADAHAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAHgDAHgGQAFgGADgHQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgGgHgEQgIgDgKAAQgIAAgJADg");
	this.shape_935.setTransform(226.7,-82);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#111111").s().p("AgeA5IAAhLIAAgQIgBgUIAPAAIAAAVIABAAQACgFADgEQADgEAFgEQADgCAGgCQAGgCAHgBIAMACIgDAPQgDgBgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_936.setTransform(249.8,21);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFAEQAFADALADIAQAEQAMACAHAHQAJAIgBAMQAAAJgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_937.setTransform(346.4,-194.7);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQADgFAGgFIALgGQAGgDAFgBIALgBQANAAALAFQALADAIAJQAIAHAFALQAEALAAANQAAAMgEALQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBIgLgEIgLgHQgGgEgDgFIgBAAIAABXgAgRhKQgIAEgGAGQgGAGgDAJQgDAHgBAKQABAJADAJQADAIAGAFQAGAFAIAEQAJAEAIAAQAKAAAIgEQAHgEAHgFQAFgFADgIQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgEQgIgDgKAAQgIAAgJADg");
	this.shape_938.setTransform(226.7,-191.4);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAIAHAEQAIAFAJgBIAJgBQAFAAAEgDQAEgCACgEQACgDAAgFQAAgJgGgDQgHgEgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgGQAEgHAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAFAFALIgNAJQgFgGgFgEQgHgFgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGAEQAGADAKADIAQAEQALACAJAIQAHAIABALQAAAKgFAGQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_939.setTransform(367.2,21.2);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAGQgEAGgCAIQgBAHAAAIIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFACgGAEQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgKAKgFQAKgEAKgBIAKABQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALgBQAWAAAKAMQAKALAAAVIAABGg");
	this.shape_940.setTransform(296.9,21);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQAEgFAFgFIAKgGQAHgDAFgBIALgBQAOAAAKAEQALAFAIAIQAIAHAFAMQAEAKAAANQAAAMgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBIgMgEIgKgHQgFgEgEgFIgBAAIAABXgAgRhJQgIADgGAGQgGAGgEAJQgCAHAAAKQAAAJACAIQAEAJAGAFQAGAFAIAEQAJADAIAAQAKAAAIgDQAIgEAFgFQAGgFACgJQAEgIAAgJQAAgKgEgHQgCgJgGgGQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_941.setTransform(267.5,24.5);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgIQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgHQACgHAAgHIAAgIIgIAAIgPABg");
	this.shape_942.setTransform(253.3,21.2);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#111111").s().p("AAFBIQgEgBgEgDQgEgEgCgFQgDgGAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIADAGQADACACABIAIABIAIgBIAIgEIABAPQgJAEgNABIgKgCg");
	this.shape_943.setTransform(235.5,19.7);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgEgDgGQgEgGAAgIQAAgNAHgIQAHgIALgDQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgKgMQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAANIACAMIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAFAEACQAEADAEAAIAKABQAIAAAGgDQAGgCAFgFQAEgFACgHQACgHAAgHIAAgIIgIAAIgPABg");
	this.shape_944.setTransform(224.9,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_356},{t:this.shape_355},{t:this.shape_354,p:{x:155,y:-98.6}},{t:this.shape_353,p:{x:172.1,y:-98.5}},{t:this.shape_352,p:{x:191.6,y:-98.5}},{t:this.shape_351},{t:this.shape_350,p:{x:213.2,y:-101.2}},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345,p:{x:274.5,y:-102}},{t:this.shape_344},{t:this.shape_343,p:{x:300.9,y:-98.5}},{t:this.shape_342,p:{x:320.4,y:-98.5}},{t:this.shape_341},{t:this.shape_340,p:{x:342,y:-101.2}},{t:this.shape_339},{t:this.shape_338,p:{x:365.4,y:-98.5}},{t:this.shape_337},{t:this.shape_336,p:{x:116.7,y:-69.8}},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331,p:{x:175.3,y:-69.8}},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328,p:{x:212.2,y:-73.2}},{t:this.shape_327,p:{x:222.2,y:-69.7}},{t:this.shape_326,p:{x:242.1,y:-69.7}},{t:this.shape_325,p:{x:254.1,y:-69.6}},{t:this.shape_324,p:{x:263.7,y:-72.4}},{t:this.shape_323,p:{x:273.6,y:-73}},{t:this.shape_322,p:{x:287.2,y:-69.7}},{t:this.shape_321,p:{x:303.7,y:-69.8}},{t:this.shape_320,p:{x:321.3,y:-69.7}},{t:this.shape_319},{t:this.shape_318,p:{x:342,y:-65.2}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314,p:{x:158.7,y:10.3}},{t:this.shape_313,p:{x:178.2,y:10.3}},{t:this.shape_312},{t:this.shape_311,p:{x:199.8,y:7.6}},{t:this.shape_310,p:{x:209.6,y:7}},{t:this.shape_309,p:{x:223.2,y:10.3}},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306,p:{x:259.4,y:10.3}},{t:this.shape_305,p:{x:271.4,y:10.4}},{t:this.shape_304,p:{x:281,y:7.6}},{t:this.shape_303,p:{x:290.9,y:7}},{t:this.shape_302,p:{x:304.5,y:10.3}},{t:this.shape_301},{t:this.shape_300,p:{x:333.8,y:10.3}},{t:this.shape_299,p:{x:349.8,y:6.8}},{t:this.shape_298,p:{x:359.8,y:10.3}},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291,p:{x:193.8,y:42}},{t:this.shape_290,p:{x:212.7,y:39}},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281,p:{x:319.9}},{t:this.shape_280,p:{x:339.4,y:39.1}},{t:this.shape_279,p:{x:351.4,y:39.2}},{t:this.shape_278,p:{x:361,y:36.4}},{t:this.shape_277},{t:this.shape_276,p:{x:384.4,y:39.1}},{t:this.shape_275,p:{x:401}},{t:this.shape_274,p:{x:418.5}},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268,p:{x:160.3,y:115.8}},{t:this.shape_267,p:{x:174.7}},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262,p:{x:245.7}},{t:this.shape_261,p:{x:265.2,y:119.1}},{t:this.shape_260},{t:this.shape_259,p:{x:286.8,y:116.4}},{t:this.shape_258,p:{x:296.7,y:115.8}},{t:this.shape_257,p:{x:310.3}},{t:this.shape_256,p:{x:323.3}},{t:this.shape_255},{t:this.shape_254,p:{x:347.5}},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251,p:{x:398.5}},{t:this.shape_250,p:{x:116.4,y:147.9}},{t:this.shape_249,p:{x:128.4,y:148.1}},{t:this.shape_248,p:{x:138}},{t:this.shape_247,p:{x:147.9,y:144.6}},{t:this.shape_246,p:{x:161.5}},{t:this.shape_245},{t:this.shape_244,p:{x:181.5,y:154.1}},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235,p:{x:297}},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232,p:{x:341.2,y:147.9}},{t:this.shape_231,p:{x:353.2,y:148.1}},{t:this.shape_230,p:{x:362.8}},{t:this.shape_229,p:{x:372.6,y:144.6}},{t:this.shape_228,p:{x:386.2}},{t:this.shape_227,p:{x:402.8}},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224,p:{x:441,y:152.4}},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221,p:{x:141.6,y:-202}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218,p:{x:176.2,y:-202}},{t:this.shape_217},{t:this.shape_216,p:{x:202.4,y:-211.6}},{t:this.shape_215,p:{x:208.6,y:-202}},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211,p:{x:263.5,y:-208.1}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208,p:{x:293.7,y:-208.1}},{t:this.shape_207},{t:this.shape_206,p:{x:314.3,y:-202}},{t:this.shape_205,p:{x:330.1,y:-208.1}},{t:this.shape_204,p:{x:343,y:-208.1}},{t:this.shape_203},{t:this.shape_202,p:{x:367.4,y:-208.1}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199,p:{x:397.6,y:-208.1}},{t:this.shape_198,p:{x:409.9,y:-208.1}},{t:this.shape_197,p:{x:116.1,y:-171.1}},{t:this.shape_196,p:{x:135.1,y:-174}},{t:this.shape_195,p:{x:144.7,y:-177.5}},{t:this.shape_194,p:{x:150.4,y:-177.5}},{t:this.shape_193,p:{x:160.4,y:-174}},{t:this.shape_192,p:{x:172.7,y:-174}},{t:this.shape_191,p:{x:181.1,y:-169.5}}]}).to({state:[{t:this.shape_491},{t:this.shape_490},{t:this.shape_354,p:{x:147,y:-98.6}},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_229,p:{x:209.3,y:-101.8}},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_336,p:{x:338.4,y:-98.6}},{t:this.shape_477},{t:this.shape_476},{t:this.shape_331,p:{x:384.1,y:-98.6}},{t:this.shape_475},{t:this.shape_474,p:{x:409,y:-102}},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471,p:{x:126.4,y:-69.7}},{t:this.shape_470,p:{x:135.8,y:-73.2}},{t:this.shape_279,p:{x:145.3,y:-69.6}},{t:this.shape_469,p:{x:159,y:-73}},{t:this.shape_215,p:{x:170,y:-63.6}},{t:this.shape_345,p:{x:182.8,y:-73.2}},{t:this.shape_338,p:{x:191.6,y:-69.7}},{t:this.shape_468},{t:this.shape_327,p:{x:222.1,y:-69.7}},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_247,p:{x:277.9,y:-73}},{t:this.shape_322,p:{x:291.5,y:-69.7}},{t:this.shape_463},{t:this.shape_197,p:{x:325.2,y:-66.8}},{t:this.shape_353,p:{x:344.2,y:-69.7}},{t:this.shape_328,p:{x:353.8,y:-73.2}},{t:this.shape_462,p:{x:367.3,y:-71.1}},{t:this.shape_461},{t:this.shape_343,p:{x:383.7,y:-69.7}},{t:this.shape_321,p:{x:400.4,y:-69.8}},{t:this.shape_460},{t:this.shape_320,p:{x:432.6,y:-69.7}},{t:this.shape_459},{t:this.shape_458},{t:this.shape_350,p:{x:121.5,y:7.6}},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451,p:{x:216.7,y:10.3}},{t:this.shape_450},{t:this.shape_449,p:{x:255.4,y:10.3}},{t:this.shape_448},{t:this.shape_447},{t:this.shape_340,p:{x:283.1,y:7.6}},{t:this.shape_446},{t:this.shape_445},{t:this.shape_314,p:{x:326.9,y:10.3}},{t:this.shape_444},{t:this.shape_443},{t:this.shape_324,p:{x:118.3,y:36.4}},{t:this.shape_275,p:{x:131.2}},{t:this.shape_442},{t:this.shape_299,p:{x:157.9,y:35.6}},{t:this.shape_441},{t:this.shape_261,p:{x:179.4,y:39.1}},{t:this.shape_311,p:{x:187.6,y:36.4}},{t:this.shape_440},{t:this.shape_439},{t:this.shape_206,p:{x:221.4,y:45.2}},{t:this.shape_438},{t:this.shape_281,p:{x:248.3}},{t:this.shape_437},{t:this.shape_309,p:{x:274.2,y:39.1}},{t:this.shape_216,p:{x:283.6,y:35.6}},{t:this.shape_304,p:{x:289.4,y:36.4}},{t:this.shape_436,p:{x:297.4,y:39.1}},{t:this.shape_302,p:{x:308.4,y:39.1}},{t:this.shape_250,p:{x:321.1,y:39.1}},{t:this.shape_278,p:{x:329.3,y:36.4}},{t:this.shape_435},{t:this.shape_290,p:{x:352.9,y:39}},{t:this.shape_291,p:{x:372.3,y:42}},{t:this.shape_434},{t:this.shape_433},{t:this.shape_300,p:{x:406.5,y:39.1}},{t:this.shape_432},{t:this.shape_276,p:{x:433.6,y:39.1}},{t:this.shape_431},{t:this.shape_274,p:{x:453}},{t:this.shape_318,p:{x:463.5,y:43.6}},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_254,p:{x:137.3}},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_267,p:{x:254.1}},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_256,p:{x:305.4}},{t:this.shape_417,p:{x:325.9,y:115.8}},{t:this.shape_262,p:{x:340.3}},{t:this.shape_416},{t:this.shape_251,p:{x:373.6}},{t:this.shape_415},{t:this.shape_249,p:{x:401.6,y:119.3}},{t:this.shape_414},{t:this.shape_413},{t:this.shape_268,p:{x:429,y:115.8}},{t:this.shape_257,p:{x:442.6}},{t:this.shape_412,p:{x:456.1,y:115.8}},{t:this.shape_411,p:{x:109.8,y:150.8}},{t:this.shape_410},{t:this.shape_259,p:{x:138.4,y:145.2}},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_227,p:{x:182.8}},{t:this.shape_406},{t:this.shape_405},{t:this.shape_248,p:{x:216.5}},{t:this.shape_404,p:{x:224.5,y:147.9}},{t:this.shape_403},{t:this.shape_232,p:{x:248.2,y:147.9}},{t:this.shape_230,p:{x:256.5}},{t:this.shape_402},{t:this.shape_235,p:{x:280.1}},{t:this.shape_323,p:{x:300.6,y:144.6}},{t:this.shape_401},{t:this.shape_400},{t:this.shape_246,p:{x:342.1}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_228,p:{x:375.9}},{t:this.shape_397},{t:this.shape_191,p:{x:396,y:152.4}},{t:this.shape_396},{t:this.shape_395,p:{x:126.5,y:-214.6}},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391,p:{x:170.9,y:-212}},{t:this.shape_390,p:{x:187.2,y:-211.8}},{t:this.shape_310,p:{x:207.4,y:-215.2}},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387,p:{x:260.4,y:-211.8}},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384,p:{x:288.1,y:-214.6}},{t:this.shape_383,p:{x:298.1,y:-214.6}},{t:this.shape_382,p:{x:311.7,y:-212}},{t:this.shape_381},{t:this.shape_380,p:{x:346.5,y:-211.8}},{t:this.shape_379},{t:this.shape_378,p:{x:130.3,y:-183}},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374,p:{x:175.8,y:-185.8}},{t:this.shape_373},{t:this.shape_372,p:{x:199.2,y:-183}},{t:this.shape_371,p:{x:212.7,y:-186.4}},{t:this.shape_370,p:{x:232.9,y:-180.2}},{t:this.shape_369},{t:this.shape_368,p:{x:264.5,y:-183}},{t:this.shape_195,p:{x:273.9,y:-186.5}},{t:this.shape_231,p:{x:283.4,y:-182.9}},{t:this.shape_258,p:{x:297.1,y:-186.4}},{t:this.shape_367,p:{x:318.1,y:-183}},{t:this.shape_366,p:{x:331.3,y:-183.2}},{t:this.shape_365,p:{x:351.5,y:-183}},{t:this.shape_194,p:{x:361,y:-186.5}},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362,p:{x:398.2,y:-183}},{t:this.shape_361,p:{x:412.5,y:-186.4}},{t:this.shape_360,p:{x:425.3,y:-183}},{t:this.shape_359},{t:this.shape_358,p:{x:444.7,y:-183}},{t:this.shape_357,p:{x:455.2,y:-178.6}}]},1).to({state:[{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_304,p:{x:145.5,y:11.3}},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_471,p:{x:192.5,y:14}},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512,p:{x:243,y:16.9}},{t:this.shape_511},{t:this.shape_338,p:{x:278.2,y:14}},{t:this.shape_510},{t:this.shape_509},{t:this.shape_278,p:{x:305.7,y:11.3}},{t:this.shape_508},{t:this.shape_322,p:{x:329.2,y:14}},{t:this.shape_507},{t:this.shape_224,p:{x:347,y:18.5}},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503,p:{x:150.9,y:-97.1}},{t:this.shape_232,p:{x:159.9,y:-94.4}},{t:this.shape_502,p:{x:168.2,y:-97.1}},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_196,p:{x:223,y:-94.3}},{t:this.shape_197,p:{x:242.1,y:-91.5}},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_194,p:{x:295.6,y:-97.8}},{t:this.shape_494,p:{x:305.1,y:-94.2}},{t:this.shape_493,p:{x:317.8,y:-94.3}},{t:this.shape_492},{t:this.shape_357,p:{x:335.6,y:-89.9}}]},1).to({state:[{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_411,p:{x:164.9,y:10.8}},{t:this.shape_231,p:{x:177.2,y:8}},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_306,p:{x:230.5,y:7.9}},{t:this.shape_211,p:{x:243,y:7.9}},{t:this.shape_587},{t:this.shape_586},{t:this.shape_325,p:{x:290.1,y:8}},{t:this.shape_585},{t:this.shape_584,p:{x:316,y:7.9}},{t:this.shape_208,p:{x:328.9,y:7.9}},{t:this.shape_583},{t:this.shape_582},{t:this.shape_204,p:{x:367.9,y:7.9}},{t:this.shape_323,p:{x:382,y:4.6}},{t:this.shape_202,p:{x:396.8,y:7.9}},{t:this.shape_581},{t:this.shape_216,p:{x:108.1,y:33.2}},{t:this.shape_199,p:{x:118.1,y:36.7}},{t:this.shape_198,p:{x:130.4,y:36.7}},{t:this.shape_258,p:{x:149.1,y:33.4}},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577,p:{x:188.5,y:41.2}},{t:this.shape_576},{t:this.shape_575,p:{x:126.2,y:-84.3}},{t:this.shape_574},{t:this.shape_573,p:{x:154.6,y:-84.3}},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570,p:{x:183.6,y:-84.3}},{t:this.shape_569},{t:this.shape_568,p:{x:210.6,y:-84.3}},{t:this.shape_280,p:{x:223.3,y:-84.3}},{t:this.shape_261,p:{x:234.9,y:-84.3}},{t:this.shape_567,p:{x:243.1,y:-87}},{t:this.shape_566},{t:this.shape_565,p:{x:267.3}},{t:this.shape_564,p:{x:280.5,y:-84.4}},{t:this.shape_563},{t:this.shape_562,p:{x:302,y:-84.3}},{t:this.shape_561},{t:this.shape_560,p:{x:332.5,y:-87.6}},{t:this.shape_559,p:{x:346.8,y:-84.3}},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556,p:{x:382,y:-84.3}},{t:this.shape_555},{t:this.shape_554,p:{x:409.1,y:-84.3}},{t:this.shape_553},{t:this.shape_552,p:{x:428.5,y:-84.3}},{t:this.shape_318,p:{x:439,y:-79.8}},{t:this.shape_551},{t:this.shape_387,p:{x:126.2,y:-194.7}},{t:this.shape_362,p:{x:138.8,y:-194.7}},{t:this.shape_195,p:{x:148.2,y:-198.2}},{t:this.shape_384,p:{x:153.9,y:-197.5}},{t:this.shape_436,p:{x:161.9,y:-194.8}},{t:this.shape_360,p:{x:172.9,y:-194.7}},{t:this.shape_550},{t:this.shape_549},{t:this.shape_380,p:{x:204.3,y:-194.7}},{t:this.shape_378,p:{x:224.3,y:-194.7}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546,p:{x:265,y:-194.9}},{t:this.shape_367,p:{x:282.1,y:-194.7}},{t:this.shape_366,p:{x:295.2,y:-194.9}},{t:this.shape_365,p:{x:308.8,y:-194.7}},{t:this.shape_545},{t:this.shape_391,p:{x:342.3,y:-194.9}},{t:this.shape_544},{t:this.shape_229,p:{x:373.1,y:-198.1}},{t:this.shape_374,p:{x:383.6,y:-197.5}},{t:this.shape_250,p:{x:392.7,y:-194.8}},{t:this.shape_358,p:{x:405.2,y:-194.7}},{t:this.shape_543,p:{x:417.5}},{t:this.shape_224,p:{x:425.9,y:-190.3}},{t:this.shape_542},{t:this.shape_305,p:{x:128.8,y:113.2}},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_192,p:{x:230.8,y:113.1}},{t:this.shape_534,p:{x:239.5,y:110.2}},{t:this.shape_533},{t:this.shape_503,p:{x:271.5,y:110.4}},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_197,p:{x:331.8,y:116}},{t:this.shape_232,p:{x:350.3,y:113.1}},{t:this.shape_529,p:{x:362.3,y:113.2}},{t:this.shape_502,p:{x:371.9,y:110.4}},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_493,p:{x:111.2,y:141.9}},{t:this.shape_194,p:{x:127.2,y:138.4}},{t:this.shape_193,p:{x:137.2,y:141.9}},{t:this.shape_525},{t:this.shape_371,p:{x:168.2,y:138.6}},{t:this.shape_196,p:{x:182.5,y:141.9}},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_191,p:{x:235.7,y:146.4}}]},1).to({state:[{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595}]},1).to({state:[{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_556,p:{x:163.6,y:24.2}},{t:this.shape_326,p:{x:176.3,y:24.1}},{t:this.shape_781},{t:this.shape_780,p:{x:196.8,y:24.2}},{t:this.shape_575,p:{x:217.2,y:24.2}},{t:this.shape_299,p:{x:226.8,y:20.7}},{t:this.shape_779},{t:this.shape_313,p:{x:249.2,y:24.1}},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_306,p:{x:282.4,y:24.1}},{t:this.shape_573,p:{x:294.9,y:24.2}},{t:this.shape_357,p:{x:305.4,y:28.6}},{t:this.shape_775},{t:this.shape_774},{t:this.shape_552,p:{x:134.1,y:-84.3}},{t:this.shape_291,p:{x:147.1,y:-81.4}},{t:this.shape_565,p:{x:159.5}},{t:this.shape_280,p:{x:172.3,y:-84.3}},{t:this.shape_261,p:{x:183.9,y:-84.3}},{t:this.shape_567,p:{x:192.1,y:-87}},{t:this.shape_773},{t:this.shape_564,p:{x:215.7,y:-84.4}},{t:this.shape_323,p:{x:236.2,y:-87.6}},{t:this.shape_562,p:{x:250.6,y:-84.3}},{t:this.shape_772},{t:this.shape_559,p:{x:285.2,y:-84.3}},{t:this.shape_216,p:{x:294.8,y:-87.8}},{t:this.shape_534,p:{x:301.4,y:-87.2}},{t:this.shape_250,p:{x:309.6,y:-84.3}},{t:this.shape_771},{t:this.shape_195,p:{x:331.2,y:-87.8}},{t:this.shape_554,p:{x:340,y:-84.3}},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_372,p:{x:128.1,y:-194.7}},{t:this.shape_767,p:{x:138.3,y:-197.6}},{t:this.shape_766},{t:this.shape_368,p:{x:160.9,y:-194.7}},{t:this.shape_303,p:{x:181.1,y:-198.1}},{t:this.shape_365,p:{x:195.4,y:-194.7}},{t:this.shape_362,p:{x:214.7,y:-194.7}},{t:this.shape_194,p:{x:224.1,y:-198.2}},{t:this.shape_765},{t:this.shape_325,p:{x:241.5,y:-194.6}},{t:this.shape_764},{t:this.shape_360,p:{x:262.1,y:-194.7}},{t:this.shape_763},{t:this.shape_762,p:{x:282.2,y:-190.3}},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_305,p:{x:163.4,y:132}},{t:this.shape_758,p:{x:174.2,y:130.4}},{t:this.shape_757},{t:this.shape_232,p:{x:196.7,y:131.8}},{t:this.shape_756,p:{x:205,y:129.1}},{t:this.shape_755},{t:this.shape_754,p:{x:228.6,y:131.7}},{t:this.shape_753,p:{x:242.1,y:131.9}},{t:this.shape_752},{t:this.shape_224,p:{x:262.4,y:136.3}}]},1).to({state:[{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_390,p:{x:161.9,y:8.7}},{t:this.shape_888},{t:this.shape_384,p:{x:182.8,y:5.9}},{t:this.shape_887},{t:this.shape_886},{t:this.shape_380,p:{x:220,y:8.7}},{t:this.shape_885},{t:this.shape_244,p:{x:240.2,y:14.8}},{t:this.shape_372,p:{x:256.1,y:8.7}},{t:this.shape_546,p:{x:272.6,y:8.5}},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_368,p:{x:324.9,y:8.7}},{t:this.shape_881},{t:this.shape_374,p:{x:345.9,y:5.9}},{t:this.shape_880,p:{x:355.9,y:8.7}},{t:this.shape_382,p:{x:369.5,y:8.5}},{t:this.shape_378,p:{x:383,y:8.7}},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_358,p:{x:135,y:37.5}},{t:this.shape_370,p:{x:147.9,y:40.3}},{t:this.shape_367,p:{x:160.3,y:37.5}},{t:this.shape_875},{t:this.shape_874},{t:this.shape_756,p:{x:193,y:34.7}},{t:this.shape_383,p:{x:203,y:34.7}},{t:this.shape_366,p:{x:216.6,y:37.3}},{t:this.shape_873},{t:this.shape_365,p:{x:251.4,y:37.5}},{t:this.shape_872},{t:this.shape_362,p:{x:285.3,y:37.5}},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_474,p:{x:341.3,y:34}},{t:this.shape_360,p:{x:350.1,y:37.5}},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_570,p:{x:128.1,y:-97.8}},{t:this.shape_863},{t:this.shape_303,p:{x:147.3,y:-101.1}},{t:this.shape_568,p:{x:160.9,y:-97.8}},{t:this.shape_556,p:{x:180,y:-97.8}},{t:this.shape_470,p:{x:189.4,y:-101.3}},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_780,p:{x:262.9,y:-97.8}},{t:this.shape_858},{t:this.shape_857},{t:this.shape_584,p:{x:301.6,y:-97.8}},{t:this.shape_562,p:{x:314,y:-97.8}},{t:this.shape_345,p:{x:323.6,y:-101.3}},{t:this.shape_221,p:{x:329.8,y:-91.7}},{t:this.shape_856},{t:this.shape_249,p:{x:354.3,y:-97.7}},{t:this.shape_855},{t:this.shape_247,p:{x:373.8,y:-101.1}},{t:this.shape_573,p:{x:388.6,y:-97.8}},{t:this.shape_291,p:{x:408.2,y:-94.9}},{t:this.shape_854},{t:this.shape_305,p:{x:126.5,y:-68.9}},{t:this.shape_853},{t:this.shape_852},{t:this.shape_554,p:{x:162.7,y:-69}},{t:this.shape_851},{t:this.shape_567,p:{x:183.7,y:-71.7}},{t:this.shape_552,p:{x:193.7,y:-69}},{t:this.shape_564,p:{x:207.3,y:-69.1}},{t:this.shape_559,p:{x:220.8,y:-69}},{t:this.shape_850},{t:this.shape_318,p:{x:241.1,y:-64.5}},{t:this.shape_849,p:{y:-210.1}},{t:this.shape_848,p:{y:-210}},{t:this.shape_847},{t:this.shape_846,p:{y:-207.2}},{t:this.shape_845,p:{y:-204.5}},{t:this.shape_844},{t:this.shape_843,p:{y:-210.6}},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839,p:{y:-210.1}},{t:this.shape_258,p:{x:255.7,y:-210.6}},{t:this.shape_838},{t:this.shape_837,p:{x:289.2,y:-207.2}},{t:this.shape_836,p:{x:302.3,y:-207.4}},{t:this.shape_835},{t:this.shape_328,p:{x:331.2,y:-210.7}},{t:this.shape_834},{t:this.shape_325,p:{x:348.6,y:-207.1}},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_218,p:{x:389.3,y:-201.1}},{t:this.shape_830},{t:this.shape_829},{t:this.shape_767,p:{x:427,y:-210.1}},{t:this.shape_560,p:{x:436,y:-210.6}},{t:this.shape_828,p:{x:449.6,y:-207.2}},{t:this.shape_827},{t:this.shape_826,p:{x:126.6,y:-178.4}},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822,p:{x:181.2,y:-178.4}},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_215,p:{x:223.6,y:-172.3}},{t:this.shape_352,p:{x:239.8,y:-178.5}},{t:this.shape_818,p:{x:252.3,y:-178.4}},{t:this.shape_817,p:{x:265.9,y:-178.6}},{t:this.shape_816},{t:this.shape_815,p:{x:286.6,y:-178.4}},{t:this.shape_342,p:{x:299.3,y:-178.5}},{t:this.shape_814},{t:this.shape_813,p:{x:319.8,y:-178.4}},{t:this.shape_812,p:{x:340.2,y:-178.4}},{t:this.shape_299,p:{x:349.8,y:-181.9}},{t:this.shape_811},{t:this.shape_326,p:{x:372.2,y:-178.5}},{t:this.shape_810},{t:this.shape_809,p:{x:390.5,y:-178.6}},{t:this.shape_808,p:{x:396.3,y:-181.2}},{t:this.shape_313,p:{x:405.4,y:-178.5}},{t:this.shape_807,p:{x:417.9,y:-178.4}},{t:this.shape_191,p:{x:428.4,y:-174}},{t:this.shape_806},{t:this.shape_805},{t:this.shape_327,p:{x:134.1,y:119.3}},{t:this.shape_512,p:{x:147.1,y:122.2}},{t:this.shape_804},{t:this.shape_306,p:{x:172.3,y:119.3}},{t:this.shape_280,p:{x:183.9,y:119.3}},{t:this.shape_311,p:{x:192.1,y:116.6}},{t:this.shape_803},{t:this.shape_802},{t:this.shape_323,p:{x:236.2,y:116}},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_462,p:{x:303,y:117.9}},{t:this.shape_797},{t:this.shape_261,p:{x:318.8,y:119.3}},{t:this.shape_529,p:{x:330.8,y:119.4}},{t:this.shape_216,p:{x:340.4,y:115.8}},{t:this.shape_796},{t:this.shape_795},{t:this.shape_206,p:{x:369.3,y:125.4}},{t:this.shape_250,p:{x:385.4,y:119.3}},{t:this.shape_320,p:{x:397.9,y:119.3}},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_197,p:{x:446.8,y:122.2}},{t:this.shape_232,p:{x:111.4,y:148.1}},{t:this.shape_791},{t:this.shape_534,p:{x:133,y:145.2}},{t:this.shape_412,p:{x:142,y:144.8}},{t:this.shape_790},{t:this.shape_789},{t:this.shape_195,p:{x:184.1,y:144.6}},{t:this.shape_354,p:{x:203.6,y:148}},{t:this.shape_304,p:{x:216.9,y:145.4}},{t:this.shape_788},{t:this.shape_321,p:{x:240,y:148}},{t:this.shape_787},{t:this.shape_336,p:{x:277.8,y:148}},{t:this.shape_278,p:{x:287.6,y:145.4}},{t:this.shape_205,p:{x:296.3,y:148.1}},{t:this.shape_786},{t:this.shape_194,p:{x:318.2,y:144.6}},{t:this.shape_224,p:{x:324.5,y:152.6}}]},1).to({state:[{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_326,p:{x:225.2,y:21.1}},{t:this.shape_916},{t:this.shape_754,p:{x:251.3,y:21}},{t:this.shape_915,p:{x:262.2}},{t:this.shape_914,p:{x:272}},{t:this.shape_313,p:{x:284.7,y:21.1}},{t:this.shape_913},{t:this.shape_912,p:{x:305.2}},{t:this.shape_753,p:{x:325.6,y:21.2}},{t:this.shape_299,p:{x:335.2,y:17.7}},{t:this.shape_911},{t:this.shape_306,p:{x:357.6,y:21.1}},{t:this.shape_910},{t:this.shape_909},{t:this.shape_756,p:{x:381.7,y:18.4}},{t:this.shape_280,p:{x:390.8,y:21.1}},{t:this.shape_908,p:{x:403.3}},{t:this.shape_318,p:{x:413.8,y:25.6}},{t:this.shape_849,p:{y:-88.2}},{t:this.shape_808,p:{x:122.4,y:-88}},{t:this.shape_837,p:{x:131.9,y:-85.3}},{t:this.shape_846,p:{y:-85.3}},{t:this.shape_907},{t:this.shape_818,p:{x:170.6,y:-85.3}},{t:this.shape_906},{t:this.shape_826,p:{x:205.7,y:-85.3}},{t:this.shape_261,p:{x:225.2,y:-85.3}},{t:this.shape_828,p:{x:236.5,y:-85.3}},{t:this.shape_839,p:{y:-88.2}},{t:this.shape_469,p:{x:255.7,y:-88.6}},{t:this.shape_815,p:{x:269.3,y:-85.3}},{t:this.shape_417,p:{x:289.5,y:-88.6}},{t:this.shape_822,p:{x:303.8,y:-85.3}},{t:this.shape_813,p:{x:324.3,y:-85.3}},{t:this.shape_361,p:{x:339.1,y:-88.6}},{t:this.shape_905},{t:this.shape_812,p:{x:358.5,y:-85.3}},{t:this.shape_904},{t:this.shape_807,p:{x:380.2,y:-85.3}},{t:this.shape_903},{t:this.shape_191,p:{x:400.9,y:-80.8}},{t:this.shape_551},{t:this.shape_902},{t:this.shape_378,p:{x:131.9,y:-194.7}},{t:this.shape_901},{t:this.shape_900},{t:this.shape_880,p:{x:170.6,y:-194.7}},{t:this.shape_899},{t:this.shape_367,p:{x:205.7,y:-194.7}},{t:this.shape_250,p:{x:225.2,y:-194.8}},{t:this.shape_368,p:{x:236.5,y:-194.7}},{t:this.shape_395,p:{x:245.9,y:-197.5}},{t:this.shape_268,p:{x:255.7,y:-198.1}},{t:this.shape_362,p:{x:269.3,y:-194.7}},{t:this.shape_360,p:{x:288.4,y:-194.7}},{t:this.shape_216,p:{x:297.8,y:-198.2}},{t:this.shape_898},{t:this.shape_384,p:{x:330.7,y:-197.5}},{t:this.shape_543,p:{x:338.7}},{t:this.shape_391,p:{x:353.8,y:-194.9}},{t:this.shape_358,p:{x:371.3,y:-194.7}},{t:this.shape_366,p:{x:391.6,y:-194.9}},{t:this.shape_374,p:{x:401.3,y:-197.5}},{t:this.shape_205,p:{x:410,y:-194.8}},{t:this.shape_365,p:{x:422.4,y:-194.7}},{t:this.shape_195,p:{x:432,y:-198.2}},{t:this.shape_357,p:{x:438.2,y:-190.3}},{t:this.shape_897},{t:this.shape_304,p:{x:122.4,y:129.1}},{t:this.shape_451,p:{x:131.9,y:131.8}},{t:this.shape_896},{t:this.shape_845,p:{y:134.5}},{t:this.shape_298,p:{x:170.6,y:131.8}},{t:this.shape_843,p:{y:128.5}},{t:this.shape_449,p:{x:205.7,y:131.8}},{t:this.shape_232,p:{x:225.2,y:131.8}},{t:this.shape_309,p:{x:236.5,y:131.8}},{t:this.shape_278,p:{x:245.9,y:129.1}},{t:this.shape_258,p:{x:255.7,y:128.5}},{t:this.shape_302,p:{x:269.3,y:131.8}},{t:this.shape_314,p:{x:289.2,y:131.8}},{t:this.shape_290,p:{x:302.3,y:131.7}},{t:this.shape_300,p:{x:321.8,y:131.8}},{t:this.shape_194,p:{x:331.2,y:128.3}},{t:this.shape_895},{t:this.shape_325,p:{x:348.6,y:131.9}},{t:this.shape_894},{t:this.shape_276,p:{x:369.2,y:131.8}},{t:this.shape_893},{t:this.shape_762,p:{x:389.3,y:136.3}}]},1).to({state:[{t:this.shape_924},{t:this.shape_756,p:{x:122.4,y:18.4}},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_912,p:{x:170.6}},{t:this.shape_918},{t:this.shape_917},{t:this.shape_326,p:{x:225.2,y:21.1}},{t:this.shape_908,p:{x:237.7}},{t:this.shape_936,p:{x:249.8}},{t:this.shape_915,p:{x:256.8}},{t:this.shape_753,p:{x:267.4,y:21.2}},{t:this.shape_577,p:{x:277.4,y:25.6}},{t:this.shape_849,p:{y:-88.2}},{t:this.shape_848,p:{y:-88}},{t:this.shape_826,p:{x:131.9,y:-85.3}},{t:this.shape_846,p:{y:-85.3}},{t:this.shape_907},{t:this.shape_813,p:{x:170.6,y:-85.3}},{t:this.shape_906},{t:this.shape_822,p:{x:205.7,y:-85.3}},{t:this.shape_935},{t:this.shape_934,p:{y:-85.2}},{t:this.shape_836,p:{x:253.5,y:-85.4}},{t:this.shape_404,p:{x:265.5,y:-85.3}},{t:this.shape_815,p:{x:276.5,y:-85.3}},{t:this.shape_313,p:{x:289.2,y:-85.3}},{t:this.shape_808,p:{x:297.4,y:-88}},{t:this.shape_807,p:{x:307.4,y:-85.3}},{t:this.shape_817,p:{x:321,y:-85.4}},{t:this.shape_812,p:{x:334.6,y:-85.3}},{t:this.shape_933},{t:this.shape_318,p:{x:354.8,y:-80.8}},{t:this.shape_551},{t:this.shape_902},{t:this.shape_378,p:{x:131.9,y:-194.7}},{t:this.shape_901},{t:this.shape_900},{t:this.shape_880,p:{x:170.6,y:-194.7}},{t:this.shape_899},{t:this.shape_367,p:{x:205.7,y:-194.7}},{t:this.shape_306,p:{x:225.2,y:-194.8}},{t:this.shape_368,p:{x:236.5,y:-194.7}},{t:this.shape_395,p:{x:245.9,y:-197.5}},{t:this.shape_258,p:{x:255.7,y:-198.1}},{t:this.shape_362,p:{x:269.3,y:-194.7}},{t:this.shape_360,p:{x:288.4,y:-194.7}},{t:this.shape_216,p:{x:297.8,y:-198.2}},{t:this.shape_898},{t:this.shape_384,p:{x:330.7,y:-197.5}},{t:this.shape_543,p:{x:338.7}},{t:this.shape_391,p:{x:353.8,y:-194.9}},{t:this.shape_358,p:{x:371.3,y:-194.7}},{t:this.shape_366,p:{x:391.6,y:-194.9}},{t:this.shape_374,p:{x:401.3,y:-197.5}},{t:this.shape_205,p:{x:410,y:-194.8}},{t:this.shape_365,p:{x:422.4,y:-194.7}},{t:this.shape_195,p:{x:432,y:-198.2}},{t:this.shape_357,p:{x:438.2,y:-190.3}},{t:this.shape_897},{t:this.shape_304,p:{x:122.4,y:129.1}},{t:this.shape_451,p:{x:131.9,y:131.8}},{t:this.shape_896},{t:this.shape_845,p:{y:134.5}},{t:this.shape_932},{t:this.shape_843,p:{y:128.5}},{t:this.shape_449,p:{x:205.7,y:131.8}},{t:this.shape_280,p:{x:225.2,y:131.8}},{t:this.shape_931},{t:this.shape_290,p:{x:251.3,y:131.7}},{t:this.shape_930},{t:this.shape_276,p:{x:272,y:131.8}},{t:this.shape_261,p:{x:284.7,y:131.8}},{t:this.shape_929},{t:this.shape_928},{t:this.shape_314,p:{x:325.6,y:131.8}},{t:this.shape_194,p:{x:335.2,y:128.3}},{t:this.shape_927},{t:this.shape_250,p:{x:357.6,y:131.8}},{t:this.shape_926},{t:this.shape_925},{t:this.shape_278,p:{x:381.7,y:129.1}},{t:this.shape_232,p:{x:390.8,y:131.8}},{t:this.shape_298,p:{x:403.3,y:131.8}},{t:this.shape_191,p:{x:413.8,y:136.3}}]},1).to({state:[{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_912,p:{x:170.6}},{t:this.shape_918},{t:this.shape_917},{t:this.shape_944},{t:this.shape_943},{t:this.shape_936,p:{x:244.4}},{t:this.shape_942},{t:this.shape_941},{t:this.shape_914,p:{x:280.4}},{t:this.shape_940},{t:this.shape_756,p:{x:310.2,y:18.4}},{t:this.shape_753,p:{x:319.8,y:21.2}},{t:this.shape_754,p:{x:332.9,y:21}},{t:this.shape_758,p:{x:343.8,y:19.7}},{t:this.shape_908,p:{x:354.9}},{t:this.shape_939},{t:this.shape_357,p:{x:375.6,y:25.6}},{t:this.shape_849,p:{y:-88.2}},{t:this.shape_848,p:{y:-88}},{t:this.shape_822,p:{x:131.9,y:-85.3}},{t:this.shape_846,p:{y:-85.3}},{t:this.shape_907},{t:this.shape_813,p:{x:170.6,y:-85.3}},{t:this.shape_906},{t:this.shape_812,p:{x:205.7,y:-85.3}},{t:this.shape_809,p:{x:224,y:-85.4}},{t:this.shape_494,p:{x:233.6,y:-85.2}},{t:this.shape_808,p:{x:243.2,y:-88}},{t:this.shape_258,p:{x:253,y:-88.6}},{t:this.shape_807,p:{x:267.8,y:-85.3}},{t:this.shape_577,p:{x:278.3,y:-80.8}},{t:this.shape_551},{t:this.shape_384,p:{x:122.4,y:-197.5}},{t:this.shape_378,p:{x:131.9,y:-194.7}},{t:this.shape_901},{t:this.shape_900},{t:this.shape_880,p:{x:170.6,y:-194.7}},{t:this.shape_899},{t:this.shape_367,p:{x:205.7,y:-194.7}},{t:this.shape_938},{t:this.shape_934,p:{y:-194.6}},{t:this.shape_382,p:{x:253.5,y:-194.9}},{t:this.shape_404,p:{x:265.5,y:-194.8}},{t:this.shape_360,p:{x:276.5,y:-194.7}},{t:this.shape_306,p:{x:289.2,y:-194.8}},{t:this.shape_374,p:{x:297.4,y:-197.5}},{t:this.shape_358,p:{x:307.4,y:-194.7}},{t:this.shape_366,p:{x:321,y:-194.9}},{t:this.shape_365,p:{x:334.6,y:-194.7}},{t:this.shape_937},{t:this.shape_318,p:{x:354.8,y:-190.3}},{t:this.shape_897},{t:this.shape_304,p:{x:122.4,y:129.1}},{t:this.shape_451,p:{x:131.9,y:131.8}},{t:this.shape_896},{t:this.shape_845,p:{y:134.5}},{t:this.shape_932},{t:this.shape_843,p:{y:128.5}},{t:this.shape_449,p:{x:205.7,y:131.8}},{t:this.shape_280,p:{x:225.2,y:131.8}},{t:this.shape_931},{t:this.shape_290,p:{x:251.3,y:131.7}},{t:this.shape_930},{t:this.shape_276,p:{x:272,y:131.8}},{t:this.shape_261,p:{x:284.7,y:131.8}},{t:this.shape_929},{t:this.shape_928},{t:this.shape_314,p:{x:325.6,y:131.8}},{t:this.shape_194,p:{x:335.2,y:128.3}},{t:this.shape_927},{t:this.shape_250,p:{x:357.6,y:131.8}},{t:this.shape_926},{t:this.shape_925},{t:this.shape_278,p:{x:381.7,y:129.1}},{t:this.shape_232,p:{x:390.8,y:131.8}},{t:this.shape_298,p:{x:403.3,y:131.8}},{t:this.shape_191,p:{x:413.8,y:136.3}}]},1).wait(1));

	// Buttons
	this.btn_r3 = new lib.Símbolo3();
	this.btn_r3.parent = this;
	this.btn_r3.setTransform(259.7,128.8);

	this.btn_r2 = new lib.Símbolo3();
	this.btn_r2.parent = this;
	this.btn_r2.setTransform(259.7,19.6);

	this.btn_r1 = new lib.Símbolo3();
	this.btn_r1.parent = this;
	this.btn_r1.setTransform(259.7,-88.8);

	this.btn_r0 = new lib.Símbolo3();
	this.btn_r0.parent = this;
	this.btn_r0.setTransform(259.8,-197.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_r0,p:{y:-197.8}},{t:this.btn_r1,p:{y:-88.8}},{t:this.btn_r2,p:{scaleX:1,scaleY:1,x:259.7,y:19.6,alpha:1}},{t:this.btn_r3,p:{scaleX:1,scaleY:1,skewY:0,x:259.7,y:128.8,alpha:1}}]}).to({state:[{t:this.btn_r0,p:{y:-97.8}},{t:this.btn_r1,p:{y:11.2}},{t:this.btn_r2,p:{scaleX:0.037,scaleY:0.17,x:463.9,y:-17.8,alpha:0.012}},{t:this.btn_r3,p:{scaleX:0.012,scaleY:0.056,skewY:180,x:474.2,y:86.3,alpha:0.012}}]},2).to({state:[{t:this.btn_r0,p:{y:-197.8}},{t:this.btn_r1,p:{y:-88.8}},{t:this.btn_r2,p:{scaleX:1,scaleY:1,x:259.7,y:19.6,alpha:1}},{t:this.btn_r3,p:{scaleX:1,scaleY:1,skewY:0,x:259.7,y:128.8,alpha:1}}]},1).to({state:[{t:this.btn_r0,p:{y:-135.3}},{t:this.btn_r1,p:{y:11.2}},{t:this.btn_r2,p:{scaleX:0.037,scaleY:0.17,x:463.9,y:-17.8,alpha:0.012}},{t:this.btn_r3,p:{scaleX:0.012,scaleY:0.056,skewY:180,x:474.2,y:86.3,alpha:0.012}}]},1).to({state:[{t:this.btn_r0,p:{y:-197.8}},{t:this.btn_r1,p:{y:-88.8}},{t:this.btn_r2,p:{scaleX:1,scaleY:1,x:259.7,y:19.6,alpha:1}},{t:this.btn_r3,p:{scaleX:1,scaleY:1,skewY:0,x:259.7,y:128.8,alpha:1}}]},1).wait(5));

	// Instrucciones
	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#111111").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_945.setTransform(-345.6,247.8);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#111111").s().p("AAeBHIgmhCIgYAAIAABCIgOAAIAAiNIAsAAQAUAAANAKQAMAJAAATQAAAPgJAKQgJAJgSACIAoBDgAgggHIAZAAQAJAAAHgCQAGgCAEgEQAFgDABgEQACgFAAgFQAAgFgCgFQgBgEgFgDQgEgEgGgCQgHgCgJAAIgZAAg");
	this.shape_946.setTransform(-353.5,241.7);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#111111").s().p("AA0BHIgQglIhHAAIgQAlIgQAAIA9iNIANAAIA+CNgAgdAUIA8AAIgfhJg");
	this.shape_947.setTransform(-367,241.7);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#111111").s().p("Ag8BHIAAiNIAvAAQANAAANAFQANAEALAJQALAJAGANQAHANAAARQAAASgHANQgGANgLAJQgLAJgNAEQgNAFgNAAgAgtA6IAcAAQAQAAALgFQAMgFAIgIQAIgIADgLQAEgKAAgLQAAgKgEgKQgDgLgIgIQgIgIgMgFQgLgFgQAAIgcAAg");
	this.shape_948.setTransform(-380.9,241.7);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#111111").s().p("AgGBHIAAiNIANAAIAACNg");
	this.shape_949.setTransform(-391.3,241.7);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#111111").s().p("AgnBHIAAiNIAOAAIAACAIBBAAIAAANg");
	this.shape_950.setTransform(-398,241.7);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#111111").s().p("AA0BHIgQglIhHAAIgQAlIgRAAIA+iNIANAAIA+CNgAgdAUIA7AAIgehJg");
	this.shape_951.setTransform(-410.8,241.7);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#111111").s().p("AgHBHIg2iNIAQAAIAtB3IAAAAIAuh3IAQAAIg4CNg");
	this.shape_952.setTransform(-423.7,241.7);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#111111").s().p("AAbAwIAAgzQABgPgGgIQgGgJgOAAIgFABQgEAAgFAEQgFAEgEAHQgEAHgBAMIAAAwIgNAAIAAhIIAAgJIAAgLIANAAIAAAHIAAAHIABAAIAFgHQAEgDAEgCIAJgEIAIgBQASAAAJAJQAJAKAAARIAAA7g");
	this.shape_953.setTransform(-441.1,244);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_954.setTransform(-452,244.1);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgGADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAGADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgKAAgJgDg");
	this.shape_955.setTransform(-467.6,244.1);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#111111").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDgBgEQABgFADgCQADgCACgBQADABADACQADACABAFQgBAEgDADQgDADgDgBQgCABgDgDg");
	this.shape_956.setTransform(-475.2,241.9);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#111111").s().p("AgGBLIAAiVIANAAIAACVg");
	this.shape_957.setTransform(-480,241.3);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_958.setTransform(-486.9,244.1);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#111111").s().p("AglAvIAAgKIA2hHIgzAAIAAgMIBGAAIAAAKIg1BHIA3AAIAAAMg");
	this.shape_959.setTransform(-150.5,220.6);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_960.setTransform(-160.3,220.6);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#111111").s().p("AAbBLIAAgzQAAgQgFgIQgGgHgPgBIgEABQgEABgGAEQgFACgEAIQgEAHAAANIAAAvIgNAAIAAiVIANAAIAABIIAAAAIAGgHQAEgEAEgCIAJgDIAIgBQASAAAJAJQAIAKAAAQIAAA7g");
	this.shape_961.setTransform(-170.8,217.8);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#111111").s().p("AgkBHIgGgCIABgMQAFACAFAAQAHAAAEgFQAEgEADgIIAHgSIgmheIAQAAIAdBNIAchNIARAAIgvB1QgDALgIAGQgFAHgNAAIgGAAg");
	this.shape_962.setTransform(-186.6,223);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_963.setTransform(-202.5,220.6);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_964.setTransform(-210.8,219.4);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_965.setTransform(-218.6,220.6);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_966.setTransform(-229.3,220.6);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#111111").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_967.setTransform(-237.3,220.5);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#111111").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_968.setTransform(-244,220.5);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_969.setTransform(-254,220.6);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgDgFgGgEQgGgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAGgDQAGgEADgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_970.setTransform(-264.4,220.6);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_971.setTransform(-280.6,220.6);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_972.setTransform(-288.9,219.4);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_973.setTransform(-296.4,220.6);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_974.setTransform(-306.2,220.6);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#111111").s().p("AgfAnQgJgKAAgRIAAg7IAOAAIAAAzQgBAHACAGQABAHADADQADAEAEADQAGACAHAAIAEgBQAGgBAEgDQAGgEADgHQAFgIAAgMIAAgvIAMAAIAABIIABAJIAAALIgNAAIAAgHIAAgHIgBAAQgCADgEADIgHAGIgJADQgEACgFAAQgSAAgIgJg");
	this.shape_975.setTransform(-317.4,220.8);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#111111").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_976.setTransform(-328.7,223.4);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_977.setTransform(-339.3,220.6);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_978.setTransform(-349.1,220.6);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#111111").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_979.setTransform(-357.2,220.5);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_980.setTransform(-372.4,220.6);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#111111").s().p("AgFBLIAAiVIALAAIAACVg");
	this.shape_981.setTransform(-379.7,217.8);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_982.setTransform(-393.1,220.6);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#111111").s().p("AAbAwIAAgzQABgQgGgIQgGgIgOAAIgFABQgEAAgFAEQgFAEgEAHQgEAHgBAMIAAAwIgNAAIAAhIIAAgJIAAgMIANAAIAAAIIAAAHIABAAIAFgHQAEgDAEgCIAJgEIAIgBQASAAAJAJQAJAKAAARIAAA7g");
	this.shape_983.setTransform(-403.7,220.5);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_984.setTransform(-415,220.6);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#111111").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDAAgEQAAgEADgDQACgDADABQADgBADADQAEADAAAEQAAAEgEADQgDACgDABQgDgBgCgCg");
	this.shape_985.setTransform(-423.3,218.4);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAKAAAIAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgIAEgKAAQgKAAgKgDg");
	this.shape_986.setTransform(-430.2,220.6);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_987.setTransform(-439.9,220.6);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_988.setTransform(-450.6,220.6);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#111111").s().p("AgFBLIAAiVIALAAIAACVg");
	this.shape_989.setTransform(-458.5,217.8);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAGgGQAGgHAIgEQAKgDAIAAQALAAAIAEQAJADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAFAEAFADQAGACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_990.setTransform(-466.5,220.6);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#111111").s().p("AgZBFQgMgEgHgMIAMgJQAFAIAIAEQAJAFAKAAIAKgBQAGgCAEgEQAEgDADgFQADgEAAgHQAAgHgDgFQgDgFgFgDIgMgGIgMgEIgNgFQgHgCgFgEQgGgEgDgHQgDgGAAgKQAAgKAFgIQAEgIAGgFQAHgFAHgCQAJgCAHAAQAMAAAKADQAKAEAJAKIgOAKQgIgOgTAAQgFAAgFABQgFACgEADQgEADgDAFQgDAFAAAGQAAAKAFAFQAGAGAIADIARAGQAJADAIADQAIAFAFAHQAGAIAAAMQAAAKgFAIQgDAHgIAGQgGAFgIADQgJACgHAAQgNAAgMgFg");
	this.shape_991.setTransform(-477.6,218.2);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#111111").s().p("AAAALIgRAZIgKgIIASgYIgcgHIAEgMIAcAJIAAgdIALAAIAAAdIAcgJIAEAMIgcAHIASAYIgJAIg");
	this.shape_992.setTransform(-487.6,214.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945}]}).wait(10));

	// Fondo
	this.instance_3 = new lib.Mapadebits2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-516,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-517.2,-296,1044.9,600.9);


// stage content:
(lib.pag08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var mc = this;
		var totalRadioButtons = 4;
		var answerSelect;
		var arrCorrect = [2, 0, 0, 2, 1, 1, 0, 3, 1, 2];
		var actQuestion = 0;
		var goodAnswers = 0;
		var totalQuestions = 9;
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
		
			if (goodAnswers >= 8) {
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
			finTema(true, estructura.actTemaImportancia);
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
		{src:"images/pag08_atlas_.png", id:"pag08_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;