(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1867,1494,166,121],[0,0,1280,720],[1887,435,84,50],[1282,0,603,496],[1887,350,90,83],[1887,487,84,50],[0,2164,1010,679],[1887,254,94,94],[1012,2164,1010,679],[1012,2845,947,477],[1012,3324,947,477],[1887,0,98,125],[0,2845,1010,679],[1887,127,98,125],[1282,498,603,496],[1285,996,603,496],[1285,1659,172,47],[1867,1617,167,66],[0,722,1280,720],[1887,539,84,50],[1887,591,84,50],[1285,1494,289,163],[0,1444,1283,718],[1576,1494,289,163]]}
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



(lib.Mapadebits1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits1_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits10 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits11 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits12 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits13 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits14 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits15 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits16 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits17 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits18 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits19 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits20 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits21 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits22 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits23 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits9 = function() {
	this.spriteSheet = ss["index_atlas_"];
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


(lib.vacio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.vacio, null, null);


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits8();
	this.instance.parent = this;
	this.instance.setTransform(-641.5,-359);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(-641.5,-359,1283,718), null);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAJQgIAKgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(22.1,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_1.setTransform(11.5,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBAIAAiAIARAAIAABwIA6AAIAAAQg");
	this.shape_2.setTransform(3.2,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArBAIgMgfIg9AAIgMAfIgVAAIA5iAIAPAAIA3CAgAgXARIAvAAIgYg6IAAAAg");
	this.shape_3.setTransform(-10.4,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqAyIAOgNQAFAHAHAEQAHADAIAAQAKAAAHgGQAJgGgBgJQAAgHgEgFQgFgEgLgEIgLgEQgPgEgIgIQgIgJAAgQQAAgOALgLQAMgLATAAQAaAAALAPIgNANQgIgMgQAAQgMAAgGAHQgFAGgBAHQABAPASAGIAQAFQAOAFAHAGQAHAIAAAOQAAARgMAMQgNALgTAAQgbAAgOgSg");
	this.shape_4.setTransform(-23.8,-0.3);

	this.instance = new lib.Mapadebits23();
	this.instance.parent = this;
	this.instance.setTransform(-86,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(-86,-23.5,172,47), null);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehj/A4vMAAAhxdMDH/AAAMAAABxdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(-640,-363,1280.1,726.1), null);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20512").s().p("AAYBBIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAIAAATQAAALgIAKQgIAKgQACIAlA7gAgbgGIAXAAQAagBAAgUQAAgVgaAAIgXAAg");
	this.shape.setTransform(32.8,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AArBBIgMghIg8AAIgNAhIgVAAIA5iAIAPAAIA3CAgAgXASIAvAAIgYg7IAAAAg");
	this.shape_1.setTransform(18.4,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20512").s().p("AgIBBIAAiAIARAAIAACAg");
	this.shape_2.setTransform(7.6,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20512").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgEgMAAgMQAAgdASgTQATgUAcAAQAOAAAMAFQAMAGAIAJIgOALQgNgPgTAAQgUAAgOAPQgNAPAAAWQAAAVANAPQANAOAVAAQAVAAANgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_3.setTransform(-2.9,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20512").s().p("AgIBBIAAiAIARAAIAACAg");
	this.shape_4.setTransform(-13.8,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20512").s().p("AAhBBIhGhqIgBAAIAABqIgRAAIAAiAIAXAAIBGBoIABAAIAAhoIARAAIAACAg");
	this.shape_5.setTransform(-25.4,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20512").s().p("AgIBBIAAiAIARAAIAACAg");
	this.shape_6.setTransform(-37,1.1);

	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-84,-33);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20512").s().p("AAaBGIgjg+IgUAAIAAA+IgTAAIAAiLIAwAAQAUAAAMAKQAMAKAAATQAAANgJALQgJAKgQACIAoBAgAgdgHIAZAAQAcAAAAgXQAAgWgcAAIgZAAg");
	this.shape_7.setTransform(36.5,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20512").s().p("AAvBGIgOgjIhBAAIgOAjIgWAAIA9iLIARAAIA7CLgAgaATIA0AAIgag/IAAAAg");
	this.shape_8.setTransform(20.9,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20512").s().p("AgIBGIAAiLIASAAIAACLg");
	this.shape_9.setTransform(9.3,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20512").s().p("AgTBDQgOgGgKgLQgIgKgFgNQgGgNAAgNQAAgfAVgVQAUgVAfAAQAPAAANAFQANAGAJAKIgQAMQgNgQgVAAQgWAAgPARQgOAQAAAXQAAAXAOAQQAOAQAXAAQAXAAANgTIAQAMQgIALgOAHQgOAGgRAAQgOAAgOgGg");
	this.shape_10.setTransform(-2.1,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20512").s().p("AgJBGIAAiLIATAAIAACLg");
	this.shape_11.setTransform(-13.9,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20512").s().p("AAkBGIhNhyIAAByIgTAAIAAiLIAZAAIBMByIABAAIAAhyIATAAIAACLg");
	this.shape_12.setTransform(-26.5,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20512").s().p("AgJBGIAAiLIASAAIAACLg");
	this.shape_13.setTransform(-39,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:-84,y:-33}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance,p:{scaleX:1.083,scaleY:1.083,x:-90,y:-35}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-33,167,66);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjLDKQgHAAgEgEQgEgEgBgHQABgOAIgKQAKgKAOgCICXgYQAIgCAEgIQACgJgHgHIjhjhQgIgIAAgLQAAgLAIgIQAIgIAMAAQALAAAIAIICWCWQAFAFAGAAQAGAAAFgFQAEgEAAgGQAAgHgEgEIg+g+QgIgIAAgLQAAgMAIgIQAIgHALAAQAMAAAIAHIA9A+QAEAEAGAAQAHAAAEgEQAEgEABgHQgBgGgEgEIgfggQgHgIgBgLQAAgMAJgIQAIgHAKAAQAMgBAHAIIAgAgIAAAAQAFAEAFAAQAHAAAEgEQAFgFAAgGQAAgGgFgEIgBgCQgJgIABgMQAAgLAIgIQAIgHALAAQAMAAAHAHIBxB8QAjAnAAAzQAAA4goAnIgvAwQgnAng5AAg");
	this.shape.setTransform(26.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,52.4,40.5), null);


(lib.Precarga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt = new cjs.Text("CARGANDO: 0%", "bold 22px 'Helvetica'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 30;
	this.txt.lineWidth = 284;
	this.txt.alpha = 0.78823529;
	this.txt.parent = this;
	this.txt.setTransform(-1.2,-13.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("A4tE+QhCAAAAhkIAAmzQAAhkBCAAMAxbAAAQBCAAAABkIAAGzQAABkhCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt}]}).wait(1));

	// Capa 2
	this.instance = new lib.Mapadebits1();
	this.instance.parent = this;
	this.instance.setTransform(-646,-371,7.782,6.129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Precarga, new cjs.Rectangle(-646,-371,1291.8,741.7), null);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBBIggg6IgTAAIAAA6IgSAAIAAiBIAuAAQARABAMAIQALAKAAARQAAAMgIALQgIAJgQACIAlA7gAgbgGIAXAAQAaAAAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(22.1,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_1.setTransform(11.5,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBBIAAiBIARAAIAABwIA6AAIAAARg");
	this.shape_2.setTransform(3.2,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArBBIgMghIg9AAIgMAhIgVAAIA5iBIAPAAIA3CBgAgXASIAvAAIgYg7IAAAAg");
	this.shape_3.setTransform(-10.4,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqAyIAOgNQAFAHAHAEQAHADAIAAQAKAAAHgGQAJgGgBgJQAAgHgEgFQgFgEgLgEIgLgEQgPgEgIgIQgIgJAAgQQAAgOALgLQAMgLATAAQAaAAALAPIgNANQgIgMgQAAQgMAAgGAHQgFAGgBAHQABAPASAGIAQAFQAOAFAHAGQAHAIAAAOQAAARgMAMQgNALgTAAQgbAAgOgSg");
	this.shape_4.setTransform(-23.8,-0.8);

	this.instance = new lib.Mapadebits23();
	this.instance.parent = this;
	this.instance.setTransform(-86,-24);

	this.instance_1 = new lib.Símbolo11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-24,172,47);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.btn_closeFeedback = new lib.Símbolo10();
	this.btn_closeFeedback.parent = this;
	this.btn_closeFeedback.setTransform(-17.7,79);
	new cjs.ButtonHelper(this.btn_closeFeedback, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AisAmIBaBaID/j+");
	this.shape.setTransform(233.2,-93.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AisAlIFZijIj/D9g");
	this.shape_1.setTransform(233.2,-93.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20512").s().p("AlSFTQiNiNAAjGQAAjGCNiMQCMiNDGABQDHgBCMCNQCNCMAADGQAADHiNCMQiMCNjHgBQjGABiMiNg");
	this.shape_2.setTransform(231.9,-92.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_3.setTransform(87,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_4.setTransform(76.9,-2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgZAwIAAg/IAAgNIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_5.setTransform(70.1,-2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgfAnQgJgKABgRIAAg7IAMAAIAAAzQABAHABAGQABAHADADQADAEAEADQAGACAHAAIAEgBQAGAAAFgEQAEgEAFgHQADgHAAgNIAAgvIANAAIAABIIABAJIABALIgOAAIgBgHIAAgHIAAAAQgCADgEAEIgHAFIgJAEQgEABgFAAQgRAAgJgJg");
	this.shape_6.setTransform(60.4,-2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAKAAAIAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgIAEgKAAQgKAAgKgDg");
	this.shape_7.setTransform(50.4,-2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgFBLIAAiVIALAAIAACVg");
	this.shape_8.setTransform(37.3,-5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_9.setTransform(29.3,-2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_10.setTransform(12.3,-2.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgUBJQgIgEgHgGQgGgHgFgJQgDgJAAgLQAAgKADgJQAFgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgHADgEAEQgEAFgDAHQgCAHAAAHQAAAIACAHQADAHAEAFQAEAFAHADQAGADAIAAQAIAAAHgDQAGgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgEgGgDQgHgDgIAAQgIAAgGADg");
	this.shape_11.setTransform(0,-5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_12.setTransform(-11.3,-2.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_13.setTransform(-19.5,-3.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFAAAGIA+AAQAAgOgHgIQgIgIgPAAQgFAAgGACg");
	this.shape_14.setTransform(-28.4,-2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgFBLIAAiVIALAAIAACVg");
	this.shape_15.setTransform(-36.3,-5.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_16.setTransform(-44.5,0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AA5AwIAAg1QAAgOgFgJQgFgHgOAAQgHAAgFADQgFADgDAFQgDAFgCAFQgBAGAAAHIAAAxIgMAAIAAg1QAAgOgFgJQgFgHgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAHAAAMIAAAwIgNAAIAAhIIgBgKIAAgKIAOAAIAAANIAAAAQAFgHAIgFQAJgEAIAAIAIABQAFABAEACIAHAFQADAFACAFQAEgIAJgGQAJgFAJAAQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_17.setTransform(-59.6,-2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_18.setTransform(-73.9,-2.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAJAAAJAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgJAEgJAAQgKAAgKgDg");
	this.shape_19.setTransform(-84.3,-2.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_20.setTransform(-99.2,-2.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_21.setTransform(-109,-2.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AAnBHIAAhDIhNAAIAABDIgOAAIAAiNIAOAAIAAA+IBNAAIAAg+IAOAAIAACNg");
	this.shape_22.setTransform(-121.1,-4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20512").s().p("AgOBLQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAFAGABAJQgBAJgFAGQgGAFgJABQgIgBgGgFgAgQAaIAAhqIAhAAIAABqg");
	this.shape_23.setTransform(60.9,-85.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20512").s().p("AgaA2QgLgDgJgIIAVgXQAEAGAGADQAGADAIAAQAFAAAEgCQAFgCAAgEQAAgFgGgDIgNgDIgRgFQgIgDgGgGQgGgGAAgNQAAgNAHgIQAGgIALgEQAKgEALAAQALAAALADQALAEAIAIIgVAUQgEgEgFgDQgFgCgGAAQgDAAgEACQgEACAAAFQAAAFAGACQAEACAJACIARAEQAIADAGAGQAGAHAAAMQAAALgFAHQgEAHgHAEQgIAEgJACQgJACgIAAQgLAAgMgEg");
	this.shape_24.setTransform(50.7,-82.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20512").s().p("AgZAyQgOgHgIgNQgIgMAAgSQAAgRAIgNQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGANAAARIAAAKIhNAAQACAKAHAGQAGAGAJAAQAJAAAFgEQAGgEAFgGIAXASQgIAKgMAGQgNAFgNABQgQgBgOgHgAAXgMQAAgIgGgGQgGgGgJAAQgHAAgFADQgFADgDAEQgDAFAAAFIAsAAIAAAAg");
	this.shape_25.setTransform(39,-82.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20512").s().p("AATA4IAAg2IgBgMQAAgGgEgFQgEgEgJgBQgHABgFAEQgEAEgCAGIgBANIAAA2IgiAAIAAhtIAhAAIAAAPIAAAAQACgEAFgEQAEgEAHgDQAFgCAIAAQARAAAJAHQAJAGADAMQADAMAAAPIAAA7g");
	this.shape_26.setTransform(26,-83);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20512").s().p("AgeAyQgOgHgIgNQgIgNAAgRQAAgRAIgNQAIgNAOgHQAOgHAQAAQARAAAOAHQANAHAJANQAIANAAARQAAARgIANQgJANgNAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_27.setTransform(12.7,-82.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20512").s().p("AgQBSIAAhtIAhAAIAABtgAgNgvQgFgGgBgJQABgIAFgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_28.setTransform(2.8,-85.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20512").s().p("AgTAyQgOgHgHgNQgJgNAAgRQAAgRAJgNQAHgNAOgHQAOgHAQAAQAKAAALAEQAKADAIAIIgWAXQgDgDgEgDQgFgCgFAAQgMAAgHAIQgHAHAAAMQAAAMAHAIQAHAHAMABQAFAAAFgDIAHgGIAWAYQgIAIgKADQgLAEgKAAQgQgBgOgHg");
	this.shape_29.setTransform(-5.1,-82.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20512").s().p("AggA2QgJgEgFgIQgGgHAAgLQAAgOAIgIQAHgHAMgEQALgEANAAIAXgBQgBgJgGgFQgGgGgJAAQgHAAgHAEQgHADgGAGIgSgSQAKgJAMgEQANgFANAAQATAAALAHQALAGAFANQAEANAAASIAAA3IgfAAIAAgOIgBAAQgGAJgJAEQgIAEgLAAQgKAAgJgEgAgGAJQgGABgDAEQgEADAAAFQAAAFACACIAGAEIAIABQAGAAAGgCQAFgCAEgFQAEgEAAgHIAAgHIgJAAIgJAAIgKACg");
	this.shape_30.setTransform(-17.2,-82.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20512").s().p("AgBBFQgIgDgFgIQgGgHAAgMIAAgzIgVAAIAAgbIAVAAIAAghIAhAAIAAAhIAdAAIAAAbIgdAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAEAAACgCIAAAcQgFACgGABIgMABQgMAAgIgEg");
	this.shape_31.setTransform(-27.9,-84.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20512").s().p("AgQBSIAAhtIAhAAIAABtgAgNgvQgFgGgBgJQABgIAFgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_32.setTransform(-35.2,-85.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20512").s().p("AgTAyQgOgHgHgNQgJgNAAgRQAAgRAJgNQAHgNAOgHQAOgHAQAAQAKAAAKAEQALADAIAIIgWAXQgCgDgFgDQgEgCgGAAQgLAAgIAIQgHAHAAAMQAAAMAHAIQAIAHALABQAGAAAEgDIAHgGIAWAYQgIAIgLADQgKAEgKAAQgQgBgOgHg");
	this.shape_33.setTransform(-43.2,-82.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20512").s().p("AgQBSIAAhtIAhAAIAABtgAgNgvQgFgGgBgJQABgIAFgGQAGgFAHAAQAIAAAGAFQAGAGAAAIQAAAJgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_34.setTransform(-52,-85.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B20512").s().p("AgQBWIAAiqIAhAAIAACqg");
	this.shape_35.setTransform(-57.8,-85.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B20512").s().p("AgZAyQgOgHgIgNQgIgMAAgSQAAgRAIgNQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGANAAARIAAAKIhNAAQACAKAHAGQAGAGAJAAQAJAAAFgEQAGgEAFgGIAXASQgIAKgMAGQgNAFgNABQgQgBgOgHgAAXgMQAAgIgGgGQgGgGgJAAQgHAAgFADQgFADgDAEQgDAFAAAFIAsAAIAAAAg");
	this.shape_36.setTransform(-67.2,-82.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B20512").s().p("Ag1BQIAAifIBrAAIAAAhIhHAAIAAAgIBBAAIAAAfIhBAAIAAA/g");
	this.shape_37.setTransform(-80,-85.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B20512").s().p("AgQBQIAAhqIAhAAIAABqgAgOgsQgGgGAAgJQAAgJAGgFQAGgHAIAAQAJAAAGAHQAFAFABAJQgBAJgFAGQgGAGgJAAQgIAAgGgGg");
	this.shape_38.setTransform(-92.1,-80.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D8AC00").s().p("EgqRAEfIAAmfQAAhBAugvQAuguBBAAMBPpAAAQBBAAAuAuQAvAvgBBBIAAGfg");
	this.shape_39.setTransform(-17.7,-89.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("EgnkATnQhHAAg0gzQgygzAAhIMAAAghyQAAhHAygzQA0gzBHAAMBPJAAAQBHAAAzAzQAzAzAABHMAAAAhyQAABIgzAzQgzAzhHAAg");
	this.shape_40.setTransform(-17.7,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_closeFeedback}]}).wait(1));

	// Capa 2
	this.btn_fondo = new lib.Símbolo12();
	this.btn_fondo.parent = this;
	this.btn_fondo.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.btn_fondo).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(-641,-359,1283,718), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Blanco
	this.mc_white = new lib.Símbolo3();
	this.mc_white.parent = this;
	this.mc_white.setTransform(1.6,3.1);

	this.timeline.addTween(cjs.Tween.get(this.mc_white).wait(1));

	// Button
	this.btn_intro = new lib.Símbolo2();
	this.btn_intro.parent = this;
	this.btn_intro.setTransform(251.4,200.5);
	new cjs.ButtonHelper(this.btn_intro, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_intro).wait(1));

	// Fondo
	this.instance = new lib.Mapadebits1_1();
	this.instance.parent = this;
	this.instance.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-640,-360,1281.7,726.1), null);


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.7,6.2,1,1,40.9,0,0,26.5,19.5);
	this.instance.alpha = 0.602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AguDAQhAgRgpg1Qgpg0AAhDQAAhQA6g5QA5g6BQAAQBDAAA0ApQA1ApARBAQACAGgDAFQgEAGgGABQgGACgFgDQgFgDgCgGQgOg3gtgiQgtgig4AAQhDAAgxAwQgwAxAABDQAAA5AiAsQAiAtA3AOQAGACADAFQADAFgCAGQgDAMgLAAg");
	this.shape.setTransform(-8.4,-20,1,1,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AgxCAQgkgPgWgiQgWghAAgoQAAg3AogpQAognA3AAQAoAAAhAWQAiAVAQAlQACAGgCAGQgCAFgGADQgFACgGgCQgGgCgCgGQgNgcgagRQgbgRgeAAQgrAAgfAfQgfAfAAArQAAAeARAaQARAaAcANQAGADACAFQACAHgCAFQgEAJgKAAIgGgCg");
	this.shape_1.setTransform(-8.4,-20.3,1,1,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AjMDoQgSAAgNgNQgNgNgBgTQAAgZARgSQARgTAYgEIB6gTIjOjMQgRgRAAgYQAAgYARgRQARgRAZAAQAXAAARARIA1A2QAFgOAKgLQAPgPAWgBQAWgCAQANQAFgOAKgLQAPgPAWgBQAWgCAQANQAEgOALgLQAQgQAYAAQAZAAAQAQIBxB8QArAwAAA/QAABDgwAyIgvAvQgxAwhEAAgAj9iiQgIAIAAALQAAALAIAIIDiDhQAGAHgDAJQgDAIgIACIiYAYQgNACgKAKQgIAKgBAOQAAAHAFAEQAEAEAGAAIEcAAQA4AAAngnIAwgwQAngnAAg4QAAgzgjgnIhxh8QgHgHgMAAQgLAAgIAHQgIAIAAALQAAAMAHAIIACACQAEAEABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEIAAAAIgfggQgIgIgMABQgKAAgJAHQgHAIgBAMQAAALAIAIIAfAgQAFAEgBAGQABAHgFAEQgEAEgGAAQgHAAgEgEIg9g+QgIgHgMAAQgLAAgIAHQgHAIgBAMQAAALAHAIIA/A+QAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFIiXiWQgIgIgLAAQgMAAgIAIg");
	this.shape_2.setTransform(-0.1,6.7,1,1,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-39.1,66.1,78.2);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.7,6.2,1,1,40.9,0,0,26.5,19.5);
	this.instance.alpha = 0.602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AguDAQhAgRgpg1Qgpg0AAhDQAAhQA6g5QA5g6BQAAQBDAAA0ApQA1ApARBAQACAGgDAFQgEAGgGABQgGACgFgDQgFgDgCgGQgOg3gtgiQgtgig4AAQhDAAgxAwQgwAxAABDQAAA5AiAsQAiAtA3AOQAGACADAFQADAFgCAGQgDAMgLAAg");
	this.shape.setTransform(-8.4,-20,1,1,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AgxCAQgkgPgWgiQgWghAAgoQAAg3AogpQAognA3AAQAoAAAhAWQAiAVAQAlQACAGgCAGQgCAFgGADQgFACgGgCQgGgCgCgGQgNgcgagRQgbgRgeAAQgrAAgfAfQgfAfAAArQAAAeARAaQARAaAcANQAGADACAFQACAHgCAFQgEAJgKAAIgGgCg");
	this.shape_1.setTransform(-8.4,-20.3,1,1,40.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AjMDoQgSAAgNgNQgNgNgBgTQAAgZARgSQARgTAYgEIB6gTIjOjMQgRgRAAgYQAAgYARgRQARgRAZAAQAXAAARARIA1A2QAFgOAKgLQAPgPAWgBQAWgCAQANQAFgOAKgLQAPgPAWgBQAWgCAQANQAEgOALgLQAQgQAYAAQAZAAAQAQIBxB8QArAwAAA/QAABDgwAyIgvAvQgxAwhEAAgAj9iiQgIAIAAALQAAALAIAIIDiDhQAGAHgDAJQgDAIgIACIiYAYQgNACgKAKQgIAKgBAOQAAAHAFAEQAEAEAGAAIEcAAQA4AAAngnIAwgwQAngnAAg4QAAgzgjgnIhxh8QgHgHgMAAQgLAAgIAHQgIAIAAALQAAAMAHAIIACACQAEAEABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEIAAAAIgfggQgIgIgMABQgKAAgJAHQgHAIgBAMQAAALAIAIIAfAgQAFAEgBAGQABAHgFAEQgEAEgGAAQgHAAgEgEIg9g+QgIgHgMAAQgLAAgIAHQgHAIgBAMQAAALAHAIIA/A+QAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFIiXiWQgIgIgLAAQgMAAgIAIg");
	this.shape_2.setTransform(-0.1,6.7,1,1,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-39.1,66.1,78.2);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Interpolación2("synched",0);
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.24,scaleY:1.24},9).to({_off:true,scaleX:1,scaleY:1},10).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},10).to({alpha:0.012},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-39.1,57.1,72.7);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo8();
	this.mc_hand.parent = this;
	this.mc_hand.setTransform(13.8,34.3);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// estados
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("Ag/A4IAXgTQATATAUAAQANAAAKgGQAJgFAAgJQAAgQgfgIQgdgFgNgKQgOgKAAgVQAAgXASgNQASgOAYAAQAnAAAQAaIgYATQgNgQgTAAQgLAAgIAFQgHAFAAAIQAAAQAeAHQAeAFANAKQAOAMAAAVQAAAZgTANQgTANgbgBQgpABgVgdg");
	this.shape.setTransform(9.5,191.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C5D00").s().p("Ag8A8QgZgZAAgjQABgjAYgYQAZgZAjAAQAjAAAZAYQAZAZAAAjQABAjgZAZQgZAZgkgBQgiABgagZgAgmgoQgOAQAAAYQAAAZAOAPQAPAQAXAAQAYAAAOgQQAPgPAAgZQAAgZgPgPQgPgPgXAAQgXAAgPAPg");
	this.shape_1.setTransform(-7.9,191.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C5D00").s().p("ABbBTIAAhbQAAgXgIgLQgJgLgSAAQgUAAgKAMQgLANAAAWIAABZIgdAAIAAhWQAAgbgIgMQgJgLgRAAQgTAAgMAOQgLAPAAAWIAABVIgfAAIAAigIAdAAIAAAZIABAAQAFgMAOgJQAPgJARAAQAjAAAPAeQAHgNAOgJQAOgHAQgBQA9AAAABGIAABfg");
	this.shape_2.setTransform(-32.5,191.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8C5D00").s().p("Ag2BIQgPgNgBgWQABgbAVgOQAVgOAtAAIAXAAIAAgHQgBgPgKgKQgLgKgSAAQgLAAgKAFQgJADgOALIgTgTQAbgYAkAAQAjABAQAPQARAPAAAWIAABWQAAAOABAMIgbAAIgBgZIAAAAQgUAdgkgBQgZABgPgNgAgnAiQAAAaAjAAQATAAANgNQANgMAAgXIAAgJIgSAAQg+AAAAAfg");
	this.shape_3.setTransform(-56,191.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C5D00").s().p("Ag9BrQgWgYAAglQAAglAWgXQAXgYAkAAQAQABAQAGQAPAIAIAMIABAAIAAh3IAfAAIAAEBIgfAAIAAgYIgBAAQgIAOgPAGQgQAIgQgBQgkABgXgYgAglAFQgOAPAAAaQAAAZAOAPQAPAQAXAAQAYAAAPgQQAOgPAAgZQAAgagOgPQgPgOgZAAQgWAAgPAOg");
	this.shape_4.setTransform(-75.3,187);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C5D00").s().p("AgPB5IAAigIAeAAIAACggAgPhRQgHgHABgJQgBgJAHgHQAGgHAJAAQAJAAAHAHQAGAHABAJQgBAJgGAHQgHAGgJAAQgJAAgGgGg");
	this.shape_5.setTransform(-89.4,187.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8C5D00").s().p("Ag3BCQgPgQAAgbIAAhoIAeAAIAABfQAAASAKAMQAKAKARAAQAUAAAMgOQAMgOAAgZIAAhSIAfAAIAACgIgfAAIAAgZIgBAAQgHANgNAHQgPAJgRgBQgaAAgRgQg");
	this.shape_6.setTransform(-102.9,191.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8C5D00").s().p("AgxA9QgXgYAAgkQAAglAXgYQAYgYAkAAQAnAAAXAaIgXAVQgRgSgXAAQgWAAgNAQQgOAQgBAYQAAAYAPAPQAOAQAWAAQAYAAAPgSIAXAVQgXAZgnAAQgkABgYgYg");
	this.shape_7.setTransform(-119.9,191.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8C5D00").s().p("Ag5A9QgXgXAAgmQAAgjAXgZQAYgYAkAAQAjABAVAWQAWAXAAAoIAAAJIiAAAQAAAUAQAOQARANAUAAQAYAAAUgYIAYASQgbAggtAAQgjABgYgYgAghgsQgOAPAAAQIBgAAQgBgVgNgNQgMgNgVAAQgWAAgNAQg");
	this.shape_8.setTransform(-147.7,191.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8C5D00").s().p("AAEBmQgIgEgFgFQgEgEgDgJQgDgIAAgFIAAgOIAAhVIgkAAIAAgbIAkAAIAAgtIAeAAIAAAtIAsAAIAAAbIgsAAIAABMQAAARAEAIQAFAIAOAAQAOAAAIgFIAAAcQgKAFgSAAQgOAAgKgDg");
	this.shape_9.setTransform(-164.2,189.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8C5D00").s().p("Ag/A4IAXgTQATATAUAAQANAAAKgFQAJgGAAgJQAAgQgfgIQgdgFgNgKQgOgLAAgUQAAgXASgOQASgMAYAAQAnAAAQAZIgYATQgNgQgTAAQgLAAgIAFQgHAFAAAIQAAAQAeAHQAeAFANAKQAOAMAAAVQAAAZgTANQgTAMgbAAQgpAAgVgcg");
	this.shape_10.setTransform(-12.5,153.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8C5D00").s().p("Ag7A8QgZgZAAgjQgBgiAZgZQAZgYAjAAQAjgBAZAYQAaAZAAAjQgBAjgYAZQgZAYgkAAQgjAAgYgYgAgmgoQgOAQAAAYQAAAZAOAPQAPAQAXAAQAYAAAPgQQAOgPAAgZQAAgYgOgQQgQgPgXAAQgXAAgPAPg");
	this.shape_11.setTransform(-29.9,153.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8C5D00").s().p("AguBTIAAigIAgAAIAAAYIAAAAQAGgNANgIQANgHAPAAQAJAAAEACIgBAgQgIgCgHAAQgXAAgKANQgMANABAXIAABTg");
	this.shape_12.setTransform(-45.6,153.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8C5D00").s().p("AAFBmQgJgEgFgFQgEgEgDgJQgCgIgBgFIAAgOIAAhVIgkAAIAAgbIAkAAIAAgtIAdAAIAAAtIAsAAIAAAbIgsAAIAABMQABARAFAIQAEAIAOAAQAOAAAHgFIAAAcQgIAFgUAAQgNAAgJgDg");
	this.shape_13.setTransform(-59.7,151.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8C5D00").s().p("Ag8A8QgZgZAAgjQAAgiAZgZQAZgYAjAAQAjgBAaAYQAYAZAAAjQAAAjgYAZQgZAYgkAAQgiAAgagYgAglgoQgPAQAAAYQAAAZAPAPQAOAQAXAAQAYAAAOgQQAPgPAAgZQAAgYgPgQQgOgPgYAAQgXAAgOAPg");
	this.shape_14.setTransform(-75.3,153.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8C5D00").s().p("Ag/A4IAXgTQATATAUAAQANAAAKgFQAJgGAAgJQAAgQgfgIQgdgFgNgKQgOgLAAgUQAAgXASgOQASgMAYAAQAnAAAQAZIgYATQgNgQgTAAQgLAAgIAFQgHAFAAAIQAAAQAeAHQAeAFANAKQAOAMAAAVQAAAZgTANQgTAMgbAAQgpAAgVgcg");
	this.shape_15.setTransform(-93.2,153.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8C5D00").s().p("Ag7A8QgagZAAgjQABgiAYgZQAZgYAjAAQAjgBAZAYQAZAZAAAjQABAjgZAZQgZAYgkAAQgjAAgYgYgAgmgoQgOAQAAAYQAAAZAOAPQAPAQAXAAQAYAAAPgQQAOgPAAgZQAAgYgOgQQgQgPgXAAQgXAAgPAPg");
	this.shape_16.setTransform(-110.6,153.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8C5D00").s().p("AA/B4IiFjFIgBAAIAADFIggAAIAAjvIAqAAICEDEIABAAIAAjEIAgAAIAADvg");
	this.shape_17.setTransform(-134.2,149.9);

	this.instance = new lib.Mapadebits10();
	this.instance.parent = this;
	this.instance.setTransform(-121,225);

	this.instance_1 = new lib.Mapadebits9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-224,112);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20512").s().p("Ag/A4IAXgTQATATAUAAQANAAAKgGQAJgFAAgJQAAgQgfgIQgdgFgNgKQgOgKAAgVQAAgXASgNQASgOAYAAQAnAAAQAaIgYATQgNgQgTAAQgLAAgIAFQgHAFAAAIQAAAQAeAHQAeAFANAKQAOAMAAAVQAAAZgTANQgTANgbgBQgpABgVgdg");
	this.shape_18.setTransform(9.5,191.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20512").s().p("Ag8A8QgZgZAAgjQABgjAYgYQAZgZAjAAQAjAAAZAYQAZAZAAAjQABAjgZAZQgZAZgkgBQgiABgagZgAgmgoQgOAQAAAYQAAAZAOAPQAPAQAXAAQAYAAAOgQQAPgPAAgZQAAgZgPgPQgPgPgXAAQgXAAgPAPg");
	this.shape_19.setTransform(-7.9,191.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20512").s().p("ABbBTIAAhbQAAgXgIgLQgJgLgSAAQgUAAgKAMQgLANAAAWIAABZIgdAAIAAhWQAAgbgIgMQgJgLgRAAQgTAAgMAOQgLAPAAAWIAABVIgfAAIAAigIAdAAIAAAZIABAAQAFgMAOgJQAPgJARAAQAjAAAPAeQAHgNAOgJQAOgHAQgBQA9AAAABGIAABfg");
	this.shape_20.setTransform(-32.5,191.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20512").s().p("Ag2BIQgPgNgBgWQABgbAVgOQAVgOAtAAIAXAAIAAgHQgBgPgKgKQgLgKgSAAQgLAAgKAFQgJADgOALIgTgTQAbgYAkAAQAjABAQAPQARAPAAAWIAABWQAAAOABAMIgbAAIgBgZIAAAAQgUAdgkgBQgZABgPgNgAgnAiQAAAaAjAAQATAAANgNQANgMAAgXIAAgJIgSAAQg+AAAAAfg");
	this.shape_21.setTransform(-56,191.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20512").s().p("Ag9BrQgWgYAAglQAAglAWgXQAXgYAkAAQAQABAQAGQAPAIAIAMIABAAIAAh3IAfAAIAAEBIgfAAIAAgYIgBAAQgIAOgPAGQgQAIgQgBQgkABgXgYgAglAFQgOAPAAAaQAAAZAOAPQAPAQAXAAQAYAAAPgQQAOgPAAgZQAAgagOgPQgPgOgZAAQgWAAgPAOg");
	this.shape_22.setTransform(-75.3,187);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20512").s().p("AgPB5IAAigIAeAAIAACggAgPhRQgHgHABgJQgBgJAHgHQAGgHAJAAQAJAAAHAHQAGAHABAJQgBAJgGAHQgHAGgJAAQgJAAgGgGg");
	this.shape_23.setTransform(-89.4,187.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20512").s().p("Ag3BCQgPgQAAgbIAAhoIAeAAIAABfQAAASAKAMQAKAKARAAQAUAAAMgOQAMgOAAgZIAAhSIAfAAIAACgIgfAAIAAgZIgBAAQgHANgNAHQgPAJgRgBQgaAAgRgQg");
	this.shape_24.setTransform(-102.9,191.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20512").s().p("AgxA9QgXgYAAgkQAAglAXgYQAYgYAkAAQAnAAAXAaIgXAVQgRgSgXAAQgWAAgNAQQgOAQgBAYQAAAYAPAPQAOAQAWAAQAYAAAPgSIAXAVQgXAZgnAAQgkABgYgYg");
	this.shape_25.setTransform(-119.9,191.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20512").s().p("Ag5A9QgXgXAAgmQAAgjAXgZQAYgYAkAAQAjABAVAWQAWAXAAAoIAAAJIiAAAQAAAUAQAOQARANAUAAQAYAAAUgYIAYASQgbAggtAAQgjABgYgYgAghgsQgOAPAAAQIBgAAQgBgVgNgNQgMgNgVAAQgWAAgNAQg");
	this.shape_26.setTransform(-147.7,191.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20512").s().p("AAEBmQgIgEgFgFQgEgEgDgJQgDgIAAgFIAAgOIAAhVIgkAAIAAgbIAkAAIAAgtIAeAAIAAAtIAsAAIAAAbIgsAAIAABMQAAARAEAIQAFAIAOAAQAOAAAIgFIAAAcQgKAFgSAAQgOAAgKgDg");
	this.shape_27.setTransform(-164.2,189.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20512").s().p("Ag/A4IAXgTQATATAUAAQANAAAKgFQAJgGAAgJQAAgQgfgIQgdgFgNgKQgOgLAAgUQAAgXASgOQASgMAYAAQAnAAAQAZIgYATQgNgQgTAAQgLAAgIAFQgHAFAAAIQAAAQAeAHQAeAFANAKQAOAMAAAVQAAAZgTANQgTAMgbAAQgpAAgVgcg");
	this.shape_28.setTransform(-12.5,153.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20512").s().p("Ag7A8QgZgZAAgjQgBgiAZgZQAZgYAjAAQAjgBAZAYQAaAZAAAjQgBAjgYAZQgZAYgkAAQgjAAgYgYgAgmgoQgOAQAAAYQAAAZAOAPQAPAQAXAAQAYAAAPgQQAOgPAAgZQAAgYgOgQQgQgPgXAAQgXAAgPAPg");
	this.shape_29.setTransform(-29.9,153.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20512").s().p("AguBTIAAigIAgAAIAAAYIAAAAQAGgNANgIQANgHAPAAQAJAAAEACIgBAgQgIgCgHAAQgXAAgKANQgMANABAXIAABTg");
	this.shape_30.setTransform(-45.6,153.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20512").s().p("AAFBmQgJgEgFgFQgEgEgDgJQgCgIgBgFIAAgOIAAhVIgkAAIAAgbIAkAAIAAgtIAdAAIAAAtIAsAAIAAAbIgsAAIAABMQABARAFAIQAEAIAOAAQAOAAAHgFIAAAcQgIAFgUAAQgNAAgJgDg");
	this.shape_31.setTransform(-59.7,151.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20512").s().p("Ag8A8QgZgZAAgjQAAgiAZgZQAZgYAjAAQAjgBAaAYQAYAZAAAjQAAAjgYAZQgZAYgkAAQgiAAgagYgAglgoQgPAQAAAYQAAAZAPAPQAOAQAXAAQAYAAAOgQQAPgPAAgZQAAgYgPgQQgOgPgYAAQgXAAgOAPg");
	this.shape_32.setTransform(-75.3,153.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20512").s().p("Ag/A4IAXgTQATATAUAAQANAAAKgFQAJgGAAgJQAAgQgfgIQgdgFgNgKQgOgLAAgUQAAgXASgOQASgMAYAAQAnAAAQAZIgYATQgNgQgTAAQgLAAgIAFQgHAFAAAIQAAAQAeAHQAeAFANAKQAOAMAAAVQAAAZgTANQgTAMgbAAQgpAAgVgcg");
	this.shape_33.setTransform(-93.2,153.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20512").s().p("Ag7A8QgagZAAgjQABgiAYgZQAZgYAjAAQAjgBAZAYQAZAZAAAjQABAjgZAZQgZAYgkAAQgjAAgYgYgAgmgoQgOAQAAAYQAAAZAOAPQAPAQAXAAQAYAAAPgQQAOgPAAgZQAAgYgOgQQgQgPgXAAQgXAAgPAPg");
	this.shape_34.setTransform(-110.6,153.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B20512").s().p("AA/B4IiFjFIgBAAIAADFIggAAIAAjvIAqAAICEDEIABAAIAAjEIAgAAIAADvg");
	this.shape_35.setTransform(-134.2,149.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ah2g5IB2B1IB3h3");
	this.shape_36.setTransform(-78.4,253.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B20512").s().p("AmjD7IAAgCQAAjPB7iSQB7iSCtAAQCuAAB7CSQB7CSAADPIAAACg");
	this.shape_37.setTransform(-78.4,249);

	this.instance_2 = new lib.Mapadebits13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-120,224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:112,x:-224}},{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1,p:{y:111,x:-224}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.instance_1,p:{y:111,x:-223}},{t:this.instance_2},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

	// flash0.ai
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#D8AC00").ss(3).p("ADvCIIndAAIAAhAQAAhVA8g8QA9g+BWAAIA/AAQBWAAA8A+QA9A8AABVg");
	this.shape_38.setTransform(-79.2,47.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#D8AC00").ss(3).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9g");
	this.shape_39.setTransform(-79.2,9.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D8AC00").s().p("AmDHXIAAoaIg1AzQgFAEgHgBQgGABgEgGQgGgFABgGQAAgHAFgEIHOmuIHPGuQAFAEAAAHQABAGgFAFQgFAGgHgBQgGAAgFgDIg2gzIAAIagAlihgIAAIWILFAAIAAoWIljlKg");
	this.shape_40.setTransform(-79.2,16.2);

	this.instance_3 = new lib.Mapadebits14();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-505,-340);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#B20512").ss(3).p("ADvCIIndAAIAAhAQAAhVA8g8QA9g+BWAAIA/AAQBWAAA8A+QA9A8AABVg");
	this.shape_41.setTransform(-79.2,47.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#B20512").ss(3).p("ACWAAQAAA+gsAsQgrAsg/AAQg9AAgsgsQgsgsAAg+QAAg9AsgsQAsgsA9AAQA+AAAsAsQAsAsAAA9g");
	this.shape_42.setTransform(-79.2,9.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B20512").s().p("AmDHXIAAoaIg1AzQgFAEgHgBQgGAAgFgEQgFgGABgGQAAgHAFgEIHOmuIHPGuQAFAEAAAHQAAAGgEAGQgFAEgHAAQgGAAgFgDIg1gzIAAIagAlihgIAAIWILFAAIAAoWIljlKg");
	this.shape_43.setTransform(-79.2,16.2);

	this.instance_4 = new lib.Mapadebits2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-505,-340);

	this.instance_5 = new lib.Mapadebits15();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-126,-31);

	this.instance_6 = new lib.Mapadebits16();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-505,-340);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.instance_4},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-505,-340,1010,679);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo8();
	this.mc_hand.parent = this;
	this.mc_hand.setTransform(-1.7,28.1);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// estados
	this.instance = new lib.Mapadebits10();
	this.instance.parent = this;
	this.instance.setTransform(-146,188);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C5D00").s().p("Ag/A4IAXgTQATATAUAAQANAAAKgGQAJgFAAgJQAAgQgfgIQgdgFgNgKQgOgKAAgVQAAgXASgNQASgOAYAAQAnAAAQAaIgYATQgNgQgTAAQgLAAgIAFQgHAFAAAIQAAAQAeAHQAeAFANALQAOALAAAVQAAAZgTANQgTANgbgBQgpABgVgdg");
	this.shape.setTransform(-62.8,152.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C5D00").s().p("Ag2BIQgPgNAAgWQAAgbAVgOQAWgOAsAAIAWAAIAAgHQABgPgLgKQgLgKgRAAQgMAAgKAFQgKADgNALIgSgTQAZgYAmAAQAhABARAPQARAPAAAWIAABWQAAAOABAMIgbAAIgBgZIgBAAQgSAdglgBQgYABgQgNgAgnAiQAAAaAjAAQATAAANgNQAMgMAAgXIAAgJIgRAAQg+AAAAAfg");
	this.shape_1.setTransform(-79.2,152.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C5D00").s().p("Ag8BrQgYgYAAglQAAglAYgXQAXgYAjAAQAQABAQAGQAPAIAIAMIABAAIAAh3IAfAAIAAEBIgfAAIAAgYIgBAAQgIAOgPAGQgQAIgQgBQgjABgXgYgAglAFQgOAPAAAaQAAAZAOAPQAPAQAXAAQAYAAAPgQQAOgPAAgZQAAgagOgPQgQgOgXAAQgXAAgPAOg");
	this.shape_2.setTransform(-98.5,147.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8C5D00").s().p("AgOB5IAAigIAdAAIAACggAgPhRQgGgHAAgJQAAgJAGgHQAHgHAIAAQAJAAAGAHQAIAHAAAJQAAAJgIAHQgGAGgJAAQgJAAgGgGg");
	this.shape_3.setTransform(-112.6,148.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C5D00").s().p("Ag2BCQgRgQABgbIAAhoIAeAAIAABfQAAASAKAMQAKAKARAAQAUAAAMgOQAMgOAAgZIAAhSIAfAAIAACgIgfAAIAAgZIgBAAQgHANgOAHQgOAJgRgBQgaAAgQgQg");
	this.shape_4.setTransform(-126.1,152.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C5D00").s().p("AgxA9QgXgYAAgkQAAglAXgYQAYgYAkAAQAnAAAXAaIgXAVQgRgSgXAAQgWAAgOAQQgOAQAAAZQAAAXAPAPQAPAQAVAAQAXAAARgSIAVAVQgWAZgnAAQgkABgYgYg");
	this.shape_5.setTransform(-143.1,152.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8C5D00").s().p("Ag4A9QgYgXAAgmQAAgjAYgZQAXgYAjABQAkAAAWAWQAVAXAAAoIAAAJIiAAAQAAAUAQAOQARANAUAAQAYAAAVgYIAWASQgaAggtAAQgjAAgXgXgAgigsQgNAPAAAQIBfAAQgBgVgMgNQgMgNgVAAQgWAAgOAQg");
	this.shape_6.setTransform(-73.3,114.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8C5D00").s().p("AAFBmQgJgEgFgFQgEgEgDgJQgCgIgBgFIAAgOIAAhVIgkAAIAAgbIAkAAIAAgtIAdAAIAAAtIAsAAIAAAbIgsAAIAABMQABARAFAIQAEAIAOAAQAOAAAHgFIAAAcQgIAFgUAAQgNAAgJgDg");
	this.shape_7.setTransform(-89.8,112.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8C5D00").s().p("Ag2BqQgQgRgBgbIAAhoIAgAAIAABgQgBASAKALQAKALARAAQAUAAAMgOQAMgOAAgZIAAhTIAeAAIAACgIgeAAIAAgYIgBAAQgGANgPAHQgOAIgRAAQgbAAgPgQgAgVhIIAigxIArAAIgyAxg");
	this.shape_8.setTransform(-114.2,110.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8C5D00").s().p("AgQB4IAAjRIhNAAIAAgeIC7AAIAAAeIhOAAIAADRg");
	this.shape_9.setTransform(-133.4,110.7);

	this.instance_1 = new lib.Mapadebits9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-249,75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ah2g5IB2B1IB3h3");
	this.shape_10.setTransform(-103.4,217.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20512").s().p("Ag/A4IAXgTQATATAUAAQANAAAKgFQAJgGAAgKQAAgQgfgGQgdgHgNgJQgOgKAAgVQAAgYASgNQASgNAYABQAnAAAQAaIgYASQgNgQgTAAQgLAAgIAFQgHAFAAAIQAAARAeAGQAeAGANAKQAOAKAAAWQAAAZgTAMQgTANgbABQgpgBgVgcg");
	this.shape_11.setTransform(-62.8,152.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20512").s().p("Ag2BHQgPgNAAgWQAAgZAVgOQAWgPAsgBIAWAAIAAgFQABgQgLgKQgLgJgRAAQgMAAgKADQgKAEgNALIgSgTQAZgYAmABQAhAAARAPQARAQAAAVIAABVQAAAPABALIgbAAIgBgYIgBAAQgSAcglABQgYgBgQgNgAgnAiQAAAaAjAAQATAAANgMQAMgNAAgXIAAgJIgRAAQg+AAAAAfg");
	this.shape_12.setTransform(-79.2,152.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20512").s().p("Ag8BrQgYgXAAgmQAAglAYgXQAXgYAjAAQAQAAAQAIQAPAHAIAMIABAAIAAh2IAfAAIAAD/IgfAAIAAgWIgBAAQgIAMgPAHQgQAIgQAAQgjgBgXgXgAglAGQgOAOAAAaQAAAZAOAQQAPAPAXAAQAYAAAPgPQAOgQAAgZQAAgagOgPQgQgOgXAAQgXAAgPAPg");
	this.shape_13.setTransform(-98.5,147.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20512").s().p("AgOB5IAAigIAdAAIAACggAgPhRQgGgHAAgJQAAgJAGgHQAHgHAIAAQAJAAAGAHQAIAHAAAJQAAAJgIAHQgGAGgJAAQgJAAgGgGg");
	this.shape_14.setTransform(-112.6,148.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20512").s().p("Ag2BCQgRgRABgbIAAhoIAeAAIAABgQAAATAKAKQAKALARAAQAUAAAMgOQAMgOAAgYIAAhUIAfAAIAACgIgfAAIAAgYIgBAAQgHANgOAIQgOAHgRABQgaAAgQgRg");
	this.shape_15.setTransform(-126.1,152.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20512").s().p("AgxA9QgXgYAAglQAAgkAXgYQAYgYAkABQAngBAXAaIgXAVQgRgSgXAAQgWAAgOAQQgOAQAAAZQAAAWAPARQAPAPAVAAQAXAAARgSIAVAVQgWAagnAAQgkgBgYgXg");
	this.shape_16.setTransform(-143.1,152.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20512").s().p("Ag4A9QgYgXAAgmQAAgjAYgYQAXgZAjAAQAkAAAWAXQAVAXAAApIAAAIIiAAAQAAAVAQANQARANAUAAQAYAAAVgYIAWARQgaAigtAAQgjAAgXgYgAgigsQgNAPAAARIBfAAQgBgXgMgMQgMgMgVAAQgWAAgOAPg");
	this.shape_17.setTransform(-73.3,114.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20512").s().p("AAFBmQgJgEgFgFQgEgEgDgJQgCgIgBgFIAAgOIAAhVIgkAAIAAgbIAkAAIAAgtIAdAAIAAAtIAsAAIAAAbIgsAAIAABMQABARAFAIQAEAIAOAAQAOAAAHgFIAAAcQgIAFgUAAQgNAAgJgDg");
	this.shape_18.setTransform(-89.8,112.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20512").s().p("Ag2BqQgQgRgBgbIAAhoIAgAAIAABgQgBASAKALQAKALARAAQAUAAAMgOQAMgOAAgZIAAhTIAeAAIAACgIgeAAIAAgYIgBAAQgGANgPAHQgOAIgRAAQgbAAgPgQgAgVhIIAigxIArAAIgyAxg");
	this.shape_19.setTransform(-114.2,111);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20512").s().p("AgQB4IAAjRIhNAAIAAgeIC7AAIAAAeIhOAAIAADRg");
	this.shape_20.setTransform(-133.4,110.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20512").s().p("AmjD7IAAgCQAAjPB7iSQB7iSCtAAQCuAAB7CSQB7CSAADPIAAACg");
	this.shape_21.setTransform(-103.4,213);

	this.instance_2 = new lib.Mapadebits13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-145,188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:-249}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.instance_1,p:{x:-248}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.instance_1,p:{x:-248}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2}]},1).wait(1));

	// Capa 2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D8AC00").s().p("AhZBaQgFgFAAgHQAAhHAzgyQAygzBHAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAQg5AAgoAoQgoAoAAA5QAAAHgFAFQgFAFgHAAQgHAAgGgFg");
	this.shape_22.setTransform(-129.1,-41.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D8AC00").s().p("Ak6CFQhghWgch4QgIgjgBgeQAAgUACgKQAKhsBEhFQBEhHBgABQA/gBA1AgQA1AfAhA4QAfg3A3ggQA4gfA/AAQBggBBEBHQBFBFAKBsQAFAmgNA5QgcB4hhBWIk8EbgAlYlAQg7A+gIBfIAAABIgBAVQAAAcAHAgQAbBtBXBQIEiEGIElkGQBXhPAahuQAIggAAgcIAAgVQgJhgg7g+Qg7g9hSAAQg+AAg0AjQg0AkgZA6IgPAmIgQgmQgZg7gygjQgxgjg9AAQhSAAg7A9g");
	this.shape_23.setTransform(-104.1,-19.8);

	this.instance_3 = new lib.Mapadebits22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-302,-248);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20512").s().p("AhZBaQgFgFAAgHQAAhHAzgyQAygzBHAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAQg5AAgoAoQgoAoAAA5QAAAHgFAFQgFAFgHAAQgHAAgGgFg");
	this.shape_24.setTransform(-128.4,-42);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20512").s().p("Ak6CFQhghXgch3QgIgjgBgeQAAgUACgJQAKhtBEhGQBEhGBgAAQA/AAA1AgQA1AfAhA5QAfg4A3gfQA4ghA/AAQBgAABEBGQBFBGAKBtQAFAlgNA5QgcB3hhBXIk8EcgAlYlAQg7A+gIBeIAAACIgBAWQAAAbAHAgQAbBtBXBQIEiEGIElkGQBXhQAahtQAIggABgbIgBgWQgJhfg7g/Qg7g9hSAAQg+AAg0AjQg0AjgZA8IgPAlIgQglQgZg9gygiQgxgjg9AAQhSAAg7A9g");
	this.shape_25.setTransform(-103.4,-20.3);

	this.instance_4 = new lib.Mapadebits21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-302,-248);

	this.instance_5 = new lib.Mapadebits12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-147,-62);

	this.instance_6 = new lib.Mapadebits11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-302,-248);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_23},{t:this.shape_22}]}).to({state:[{t:this.instance_4},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-302,-248,603,496);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo8();
	this.mc_hand.parent = this;
	this.mc_hand.setTransform(85.7,-28.5);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// flash0.ai
	this.instance = new lib.Mapadebits5();
	this.instance.parent = this;
	this.instance.setTransform(-55,142);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20512").s().p("Ag8A8QgZgZAAgjQAAgjAZgYQAZgZAjAAQAjAAAaAYQAZAZgBAjQAAAjgYAZQgZAZgkgBQgiABgagZgAglgoQgPAQAAAYQAAAZAPAPQAOAQAXAAQAYAAAOgQQAPgPAAgZQAAgZgPgPQgOgPgYAAQgXAAgOAPg");
	this.shape.setTransform(66.6,107);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("Ag9BrQgWgYAAglQAAglAWgXQAXgYAlAAQAPABAQAGQAPAIAIAMIABAAIAAh3IAfAAIAAEBIgfAAIAAgYIgBAAQgIAOgPAGQgQAIgPgBQglABgXgYgAglAFQgOAPAAAaQAAAZAOAPQAPAQAXAAQAYAAAPgQQAOgPAAgZQAAgagOgPQgPgOgZAAQgWAAgPAOg");
	this.shape_1.setTransform(45.7,102.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20512").s().p("Ag2BIQgPgNAAgWQgBgbAWgOQAVgOAtAAIAWAAIAAgGQABgQgLgKQgLgKgRAAQgMAAgKAFQgKADgNALIgSgTQAagYAlAAQAhABARAPQARAPAAAWIAABWQAAAOABAMIgbAAIgBgZIgBAAQgSAdglgBQgYABgQgNgAgnAiQAAAaAjAAQAUAAAMgNQAMgMAAgXIAAgJIgRAAQg+AAAAAfg");
	this.shape_2.setTransform(26.7,107);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20512").s().p("Ag8BrQgYgYAAglQAAglAYgXQAWgYAkAAQAQABAQAGQAPAIAJAMIAAAAIAAh3IAfAAIAAEBIgfAAIAAgYIAAAAQgKAOgOAGQgQAIgQgBQgkABgWgYgAglAFQgOAPAAAaQAAAZAOAPQAPAQAXAAQAYAAAPgQQAOgPAAgZQAAgagOgPQgQgOgXAAQgXAAgPAOg");
	this.shape_3.setTransform(7.3,102.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20512").s().p("AgOB5IAAigIAdAAIAACggAgPhRQgGgHgBgJQABgJAGgHQAHgHAIAAQAJAAAGAHQAIAHgBAJQABAJgIAHQgGAGgJAAQgJAAgGgGg");
	this.shape_4.setTransform(-6.7,102.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20512").s().p("Ag2BCQgQgQgBgbIAAhoIAfAAIAABfQAAASAKAMQAKAKARAAQAUAAAMgOQAMgOAAgZIAAhSIAfAAIAACgIgfAAIAAgZIgBAAQgHANgOAHQgOAJgRgBQgbAAgPgQg");
	this.shape_5.setTransform(-20.3,107.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20512").s().p("AgxA9QgXgYAAgkQAAglAYgYQAXgYAkAAQAnAAAXAaIgXAVQgRgSgXAAQgWAAgOAQQgNAQAAAYQAAAYAOAPQAPAQAVAAQAXAAARgSIAVAVQgWAZgnAAQgkABgYgYg");
	this.shape_6.setTransform(-37.3,107);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20512").s().p("AgOCBIAAkBIAdAAIAAEBg");
	this.shape_7.setTransform(-59.7,102.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20512").s().p("Ag4A9QgYgXAAgmQAAgjAYgZQAXgYAjAAQAkABAWAWQAVAXAAAoIAAAJIiAAAQAAAUAQAOQARANAUAAQAYAAAVgYIAWASQgaAggtAAQgjABgXgYgAgigsQgNAPAAAQIBgAAQgCgVgMgNQgMgNgVAAQgWAAgOAQg");
	this.shape_8.setTransform(-73.2,107);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20512").s().p("Ag8BrQgYgYAAglQAAglAYgXQAXgYAjAAQAQABAPAGQAQAIAJAMIAAAAIAAh3IAeAAIAAEBIgeAAIAAgYIAAAAQgKAOgPAGQgPAIgQgBQgjABgXgYgAgkAFQgPAPAAAaQAAAZAPAPQAOAQAXAAQAYAAAOgQQAPgPAAgZQAAgagPgPQgOgOgYAAQgXAAgOAOg");
	this.shape_9.setTransform(-93.4,102.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20512").s().p("Ag2BIQgQgNAAgWQABgaAVgPQAVgPAtABIAXAAIAAgHQAAgPgMgKQgKgKgSAAQgLAAgKAFQgJADgOALIgTgTQAagXAlAAQAjAAARAPQAQAPAAAWIAABVQAAAPACAMIgcAAIgBgZIAAAAQgUAcgkAAQgYAAgQgMgAgnAiQAAAaAiAAQAVAAAMgNQANgMAAgXIAAgJIgSAAQg+AAAAAfg");
	this.shape_10.setTransform(91,69.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20512").s().p("AgOB5IAAigIAdAAIAACggAgPhRQgGgHgBgJQABgJAGgHQAHgHAIAAQAJAAAGAHQAIAHgBAJQABAJgIAHQgGAGgJAAQgJAAgGgGg");
	this.shape_11.setTransform(78.3,65.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20512").s().p("AgxA9QgXgYAAglQAAgkAYgYQAXgXAkAAQAnAAAXAZIgXAVQgRgSgXAAQgWAAgOAQQgNAQAAAYQAAAYAOAPQAPAQAVAAQAXAAARgSIAVAWQgWAYgnAAQgkAAgYgXg");
	this.shape_12.setTransform(66.7,69.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20512").s().p("AApBTIAAhgQAAgTgKgKQgKgLgRAAQgUAAgMAOQgMAOAAAYIAABUIgeAAIAAigIAeAAIAAAYIABAAQAGgNAPgIQAOgIARABQAbAAAQAPQAQARAAAbIAABpg");
	this.shape_13.setTransform(48.4,69.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20512").s().p("Ag2BIQgQgNAAgWQABgaAVgPQAVgPAtABIAXAAIAAgHQAAgPgMgKQgKgKgSAAQgLAAgKAFQgJADgOALIgTgTQAbgXAkAAQAjAAAQAPQARAPAAAWIAABVQAAAPABAMIgbAAIgBgZIAAAAQgUAcgkAAQgZAAgPgMgAgnAiQAAAaAjAAQATAAANgNQANgMAAgXIAAgJIgSAAQg+AAAAAfg");
	this.shape_14.setTransform(29.9,69.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20512").s().p("AAEBmQgIgEgEgFQgFgEgDgJQgCgIAAgFIgBgOIAAhVIgjAAIAAgbIAjAAIAAgtIAeAAIAAAtIAsAAIAAAbIgsAAIAABMQAAARAEAIQAFAIAOAAQAOAAAIgFIAAAcQgKAFgSAAQgOAAgKgDg");
	this.shape_15.setTransform(14.2,67.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20512").s().p("AgtBTIAAigIAeAAIAAAYIABAAQAGgNAMgIQAOgHAQAAQAIAAAFACIgBAgQgKgCgGAAQgWAAgLANQgMANAAAXIAABTg");
	this.shape_16.setTransform(3,69.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20512").s().p("Ag7A8QgZgZAAgjQgBgiAZgZQAZgYAjAAQAjgBAZAYQAaAZAAAjQgBAjgYAZQgZAYgkAAQgiAAgZgYgAgmgoQgOAQAAAYQAAAZAOAPQAPAQAXAAQAYAAAPgQQAOgPAAgZQAAgYgOgQQgPgPgYAAQgXAAgPAPg");
	this.shape_17.setTransform(-14,69.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20512").s().p("AhUCDIAAkAIAfAAIAAAXIABAAQAJgNAPgIQAPgGAQAAQAkgBAXAXQAXAYAAAmQAAAlgXAXQgXAXgkAAQgRABgPgIQgPgIgIgMIgBAAIAAB4gAgmhWQgPAQAAAZQAAAZAPAPQAOAPAYAAQAXAAAPgPQAOgPAAgZQAAgZgPgQQgPgPgWAAQgYAAgOAPg");
	this.shape_18.setTransform(-34.1,73.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20512").s().p("ABbBTIAAhbQAAgYgIgKQgJgLgSAAQgUAAgKAMQgLAMAAAXIAABZIgdAAIAAhWQAAgbgIgMQgJgLgRAAQgTAAgMAOQgLAPAAAWIAABVIgfAAIAAigIAdAAIAAAZIABAAQAFgMAOgJQAPgJARABQAjAAAPAdQAHgOAOgIQAOgHAQAAQA9AAAABFIAABfg");
	this.shape_19.setTransform(-59.4,69.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20512").s().p("AgPB5IAAigIAeAAIAACggAgPhRQgHgHAAgJQAAgJAHgHQAHgHAIAAQAJAAAHAHQAGAHAAAJQAAAJgGAHQgHAGgJAAQgJAAgGgGg");
	this.shape_20.setTransform(-77.9,65.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20512").s().p("Ag2BIQgQgNAAgWQAAgaAWgPQAVgPAtABIAWAAIAAgHQAAgPgLgKQgKgKgSAAQgLAAgKAFQgKADgNALIgSgTQAZgXAlAAQAiAAASAPQAQAPAAAWIAABVQAAAPACAMIgcAAIgBgZIgBAAQgTAcgkAAQgZAAgPgMgAgnAiQAAAaAiAAQAVAAAMgNQAMgMAAgXIAAgJIgRAAQg+AAAAAfg");
	this.shape_21.setTransform(-100.5,69.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20512").s().p("AhHB4IAAjvIAhAAIAADRIBtAAIAAAeg");
	this.shape_22.setTransform(-116.5,65.3);

	this.instance_1 = new lib.Mapadebits6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-55,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).wait(1));

	// flash0.ai
	this.instance_2 = new lib.Mapadebits20();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-62,-128);

	this.instance_3 = new lib.Mapadebits7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-158,30);

	this.instance_4 = new lib.Mapadebits19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-62,-128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_3},{t:this.instance_4}]},2).wait(1));

	// Capa 3
	this.instance_5 = new lib.Mapadebits17();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-474,-239);

	this.instance_6 = new lib.Mapadebits18();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-474,-239);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-474,-239,947,477);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.mc_a2 = new lib.Símbolo7();
	this.mc_a2.parent = this;
	this.mc_a2.setTransform(343.5,0);

	this.mc_a1 = new lib.Símbolo6();
	this.mc_a1.parent = this;
	this.mc_a1.setTransform(40,36.5);

	this.mc_a0 = new lib.Símbolo5();
	this.mc_a0.parent = this;
	this.mc_a0.setTransform(-375,82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_a0},{t:this.mc_a1},{t:this.mc_a2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(-849,-340,1697.5,679), null);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var mc = this;
		var totalButtons = 3;
		
		
		mc.menu = function () {
			for (var i = 0; i < totalButtons; i++) {
				mc.mc_menu["mc_a" + i].num = i;
				mc.mc_menu["mc_a" + i].estado = estructura.modulos[i].estado;
				mc.mc_menu["mc_a" + i].gotoAndStop(mc.mc_menu["mc_a" + i].estado);
		
				if (mc.mc_menu["mc_a" + i].estado != 0) {
					mc.mc_menu["mc_a" + i].mouseEnabled = true;
					mc.mc_menu["mc_a" + i].cursor = "pointer";
					mc.mc_menu["mc_a" + i].addEventListener("mousedown", watchContent);
				}
		
			}
		}
		
		mc.verFinal = function () {
			mc.mc_feedback.alpha = 1;
			mc.mc_feedback.btn_closeFeedback.addEventListener("mousedown", closeFeedback);
		}
		
		ini();
		
		function ini() {
			crear_estructura();
			mc.mc_precarga.alpha = 0;
			
			createjs.Tween.get(mc.mc_intro.mc_white).to({
				alpha: 0
			}, 300);
			
			mc.mc_feedback.alpha = 0;
			
			mc.mc_feedback.btn_fondo.cursor = "default";
			
			mc.menu();
			mc.mc_intro.btn_intro.addEventListener("mousedown", closeIntro);
		}
		
		function closeIntro(evt) {
		
			createjs.Tween.get(mc.mc_intro).to({
				alpha: 0
			}, 300);
		}
		function closeFeedback(evt){
			createjs.Tween.get(mc.mc_feedback).to({
				alpha: 0
			}, 300);
		}
		
		function watchContent(evt) {
			var num = evt.currentTarget.num;
			estructura.actModulo = num;
			var obj = evt.currentTarget;
			obj.mc_hand.alpha = 0;
		
			cargarArchivo(num);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Precarga
	this.mc_precarga = new lib.Precarga();
	this.mc_precarga.parent = this;
	this.mc_precarga.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.mc_precarga).wait(2));

	// Vacio
	this.mc_vacio = new lib.vacio();
	this.mc_vacio.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_vacio).wait(2));

	// Intro
	this.mc_intro = new lib.Símbolo1();
	this.mc_intro.parent = this;
	this.mc_intro.setTransform(95.2,349.9,1,1,0,0,0,-544.8,-10.1);

	this.timeline.addTween(cjs.Tween.get(this.mc_intro).wait(2));

	// flash0.ai
	this.mc_feedback = new lib.Símbolo9();
	this.mc_feedback.parent = this;
	this.mc_feedback.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.mc_feedback).wait(2));

	// Menu
	this.mc_menu = new lib.Símbolo4();
	this.mc_menu.parent = this;
	this.mc_menu.setTransform(713.1,330.7);

	this.timeline.addTween(cjs.Tween.get(this.mc_menu).wait(2));

	// Fondo
	this.instance = new lib.Mapadebits4();
	this.instance.parent = this;
	this.instance.setTransform(2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(504.1,349,1697.5,741.7);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;