(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"pag23_atlas_", frames: [[1579,387,388,70],[0,594,1033,345],[1880,0,148,47],[0,0,1034,592],[1036,0,842,385],[1880,49,148,47],[1579,459,172,47],[1036,387,541,251]]}
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
	this.spriteSheet = ss["pag23_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["pag23_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["pag23_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.spriteSheet = ss["pag23_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.spriteSheet = ss["pag23_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.spriteSheet = ss["pag23_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits7 = function() {
	this.spriteSheet = ss["pag23_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits8 = function() {
	this.spriteSheet = ss["pag23_atlas_"];
	this.gotoAndStop(7);
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


(lib.Símbolo22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAJQgIAKgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(47.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBAIgOgfIg7AAIgOAfIgUAAIA5iAIAPAAIA3CAgAgYARIAwAAIgYg6IAAAAg");
	this.shape_1.setTransform(32.8,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBAIAAgPIBIhgIhGAAIAAgRIBcAAIAAARIhIBfIBJAAIAAAQg");
	this.shape_2.setTransform(19.2,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_3.setTransform(9.5,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBAIAAiAIARAAIAABwIA6AAIAAAQg");
	this.shape_4.setTransform(1.2,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBAIgNgfIg8AAIgMAfIgVAAIA5iAIAPAAIA3CAgAgXARIAvAAIgXg6IgBAAg");
	this.shape_5.setTransform(-12.5,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBAIhHhoIAAAAIAABoIgSAAIAAiAIAXAAIBGBqIAAAAIAAhqIASAAIAACAg");
	this.shape_6.setTransform(-27.9,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_7.setTransform(-39.5,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBAIAAiAIBQAAIAAARIg+AAIAAAoIA6AAIAAAQIg6AAIAAA3g");
	this.shape_8.setTransform(-48.6,-0.3);

	this.instance = new lib.Mapadebits7();
	this.instance.parent = this;
	this.instance.setTransform(-86,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo22, new cjs.Rectangle(-86,-23.5,172,47), null);


(lib.Símbolo19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape.setTransform(97,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_1.setTransform(87.6,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAQQgEgCgFAAQgJAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_2.setTransform(78.8,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_3.setTransform(66.6,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgLBbIgLgEIgLgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIALgHQAGgDAFgBIALgBQANAAALAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBgAgRgHQgIADgGAFQgGAGgDAJQgDAIgBAJQABAJADAJQADAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgIAAgJAEg");
	this.shape_4.setTransform(52.6,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_5.setTransform(38.3,5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_6.setTransform(29.5,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_7.setTransform(13.5,5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_8.setTransform(0.7,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_9.setTransform(-8.7,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_10.setTransform(-16.9,5.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_11.setTransform(-26,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_12.setTransform(-36.5,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_13.setTransform(-50.2,5.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("ABDBVIAAiSIgBAAIg9CSIgJAAIg9iSIgBAAIAACSIgRAAIAAipIAbAAIA4CJIA5iJIAbAAIAACpg");
	this.shape_14.setTransform(-67.5,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo19, new cjs.Rectangle(-80.2,-15.2,199.9,35.8), null);


(lib.Símbolo18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape.setTransform(176,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgWA5QgHgCgFgFQgFgDgDgHQgDgGAAgIQAAgNAHgJQAHgGAKgEQAKgEALgBIAVgBIAIAAIAAgDQAAgdgcAAQgSAAgOANIgJgLQAPgQAdAAQAJAAAGACQAIADAGAEQAFAGADAHQADAIAAAKIAAAxIABAOIABALIgPAAIgBgJIgBgJQgGALgKAFQgIAFgNAAQgHAAgHgCgAAHABIgQACQgIADgGAFQgGAEABAJQAAAFACAEQACAEAEADQAEACAEACIAJABQAIAAAFgEQAHgCADgFQAFgFACgHQACgGAAgHIAAgJIgIAAIgOABg");
	this.shape_1.setTransform(166.9,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgdA5IAAhLIAAgQIAAgUIAOAAIAAAVIABAAQACgFADgEIAHgIIAJgEQAGgCAGAAIALABIgDAQQgCgCgGAAQgJAAgGAEQgFADgFAGQgDAFgCAGQgDAGAAAGIAAA+g");
	this.shape_2.setTransform(158.4,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgWA3QgKgFgIgIQgIgIgEgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQALgFALAAQANAAAKAFQALADAHAIQAIAJAEAKQAEALAAAMQAAANgEAKQgEALgIAIQgHAIgLAFQgKAEgNAAQgLAAgLgEgAgQgpQgHAEgGAGQgFAGgDAJQgDAIAAAIQAAAJADAJQADAHAFAGQAGAHAHADQAIAEAIAAQAJAAAIgEQAHgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgHgEQgIgDgJAAQgIAAgIADg");
	this.shape_3.setTransform(146.7,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgKBbIgMgEIgKgHQgFgEgEgFIAAASIgQAAIAAi0IAQAAIAABYQAEgGAFgEQAFgEAFgDQAGgDAGgBIAKgBQANAAAKAFQALAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgLAFQgKAEgNAAIgKgBgAgQgHQgIADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAIADQAIAEAIAAQAJAAAIgEQAHgDAGgGQAGgGACgIQADgJAAgJQAAgJgDgIQgCgJgGgGQgGgFgHgDQgIgEgJAAQgIAAgIAEg");
	this.shape_4.setTransform(133.2,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgVA5QgIgCgFgFQgFgDgDgHQgDgGAAgIQAAgNAHgJQAHgGAKgEQAKgEALgBIAVgBIAIAAIAAgDQAAgdgcAAQgSAAgOANIgJgLQAPgQAeAAQAHAAAHACQAIADAGAEQAEAGAEAHQADAIAAAKIAAAxIAAAOIACALIgPAAIgBgJIAAgJQgIALgIAFQgKAFgMAAQgHAAgGgCgAAHABIgQACQgIADgGAFQgFAEgBAJQAAAFACAEQADAEAEADQADACAFACIAJABQAIAAAFgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgOABg");
	this.shape_5.setTransform(119.5,5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AguBVIAAipIARAAIAACZIBLAAIAAAQg");
	this.shape_6.setTransform(109.2,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgVA5QgHgCgGgFQgFgDgDgHQgDgGAAgIQAAgNAHgJQAHgGAKgEQAKgEALgBIAVgBIAIAAIAAgDQAAgdgcAAQgSAAgOANIgJgLQAPgQAeAAQAIAAAGACQAIADAGAEQAFAGADAHQADAIAAAKIAAAxIAAAOIACALIgPAAIgBgJIgBgJQgHALgIAFQgJAFgNAAQgHAAgGgCgAAHABIgQACQgIADgGAFQgGAEABAJQAAAFABAEQADAEAEADQAEACAEACIAJABQAIAAAFgEQAHgCADgFQAFgFACgHQACgGAAgHIAAgJIgIAAIgOABg");
	this.shape_7.setTransform(89.6,5.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_8.setTransform(81.2,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgOA3QgKgEgIgIQgHgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAHgIQAIgIAKgFQALgEAMAAQALAAAKAFQAKAFAIAKIgMAJQgEgGgHgEQgHgFgJAAQgJAAgHAEQgIADgFAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAFAGAIAEQAHADAJAAQAJAAAHgFQAHgEAEgGIAMAKQgIAKgKAEQgKAFgLAAQgMAAgLgEg");
	this.shape_9.setTransform(73.2,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AAgA5IAAg8QAAgUgGgKQgHgJgRgBIgFABQgFABgGAFQgGAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgMIgBgNIAQAAIABAJIAAAJIAAAAIAHgJIAIgGIALgEIAJgBQAVAAAKALQAKALAAAWIAABFg");
	this.shape_10.setTransform(60.7,5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgSA3QgKgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAHgIAKgDQAKgFAKAAQANAAAJAFQAKAEAGAHQAIAIACALQAEAKAAALIAAAGIhZAAQABAIADAIQADAHAFAGQAGAFAHADQAHAEAHAAQAMgBAJgFQAJgGAFgIIALAKQgKANgLAGQgMAFgNAAQgLAAgKgEgAgMgpQgHADgFAFQgFAGgDAFQgEAIABAGIBIAAQAAgQgJgKQgKgKgRAAQgGAAgHADg");
	this.shape_11.setTransform(48,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgIA4IgrhvIASAAIAhBeIABAAIAiheIARAAIgsBvg");
	this.shape_12.setTransform(36.1,5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_13.setTransform(27.8,2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgIA4IgrhvIASAAIAhBeIABAAIAiheIARAAIgsBvg");
	this.shape_14.setTransform(19.5,5.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AAgA5IAAg8QAAgUgGgKQgHgJgRgBIgFABQgFABgGAFQgGAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgMIgBgNIAQAAIABAJIAAAJIAAAAIAHgJIAIgGIALgEIAJgBQAVAAAKALQAKALAAAWIAABFg");
	this.shape_15.setTransform(7.3,5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgWA3QgKgFgIgIQgIgIgEgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQALgFALAAQANAAAKAFQALADAHAIQAIAJAEAKQAEALAAAMQAAANgEAKQgEALgIAIQgHAIgLAFQgKAEgNAAQgLAAgLgEgAgQgpQgHAEgGAGQgFAGgDAJQgDAIAAAIQAAAJADAJQADAHAFAGQAGAHAHADQAIAEAIAAQAJAAAIgEQAHgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgHgEQgIgDgJAAQgIAAgIADg");
	this.shape_16.setTransform(-5.8,5.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgUBTQgQgHgLgMQgMgMgGgQQgHgRAAgTQAAgSAHgQQAGgRAMgMQALgMAQgHQAPgGARAAQAQgBAPAHQAPAGALAPIgPALIgGgIIgKgIIgNgEQgGgDgGAAQgPABgNAFQgMAGgJALQgIAKgFANQgFAOAAANQAAAOAFAOQAFANAIAKQAJALAMAGQANAFAPABIAMgBQAHgCAGgDQAGgDAFgFQAGgEAEgIIAOAKQgEAHgGAFQgGAGgIAEQgIAEgJADQgJACgKAAQgSAAgPgGg");
	this.shape_17.setTransform(-20.5,2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgTA3QgKgFgHgIQgIgIgDgLQgFgKAAgNQAAgMAEgLQAFgKAGgJQAIgIAKgDQAKgFAKAAQAMAAALAFQAJAEAHAHQAGAIAEALQADAKAAALIAAAGIhZAAQABAIADAIQADAHAFAGQAGAFAHADQAHAEAHAAQAMgBAJgFQAJgGAEgIIAMAKQgKANgLAGQgMAFgNAAQgLAAgLgEgAgMgpQgHADgFAFQgFAGgDAFQgDAIgBAGIBIAAQABgQgKgKQgJgKgRAAQgGAAgHADg");
	this.shape_18.setTransform(-41.7,5.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgWBYQgLgFgHgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAHgIALgEQAKgFAMAAIALABQAGABAGADQAFADAFAEQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgKAHIgMAEIgLABQgMAAgKgEgAgQgHQgIADgFAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAFAGAIADQAHAEAJAAQAJAAAIgEQAIgDAGgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgGgFgIgDQgIgEgJAAQgJAAgHAEg");
	this.shape_19.setTransform(-55.5,1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgTBSQgJgFgIgHQgHgJgFgKQgEgLAAgNQAAgNAEgKQAFgKAGgIQAIgIAKgEQAKgFALABQALgBAKAFQAKAEAGAIQAIAIACAJQAEAKAAAMIAAAHIhZAAQABAIADAHQADAIAGAGQAFAFAHADQAHADAHAAQAMAAAJgGQAJgFAFgIIALAJQgKANgLAGQgMAFgNABQgLgBgLgEgAgMgNQgGACgGAFQgFAGgDAFQgDAHAAAGIBIAAQgBgPgIgKQgKgJgQgBQgHABgHADgAgNgzIAWgiIAVAAIgeAig");
	this.shape_20.setTransform(-75,2.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgKIAAhFIgWAAIAAgPIAWAAIAAggIAPAAIAAAgIAfAAIAAAPIgfAAIAABBIABAKQABAEACACQACADADAAIAHABIAIgBIAHgDIABAOQgIAFgNAAIgJgBg");
	this.shape_21.setTransform(-85.2,3.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAEAAAEADQADADAAAFQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_22.setTransform(-91.8,2.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("ABCA5IAAhAQAAgRgGgJQgFgKgQAAQgJABgGADQgFADgEAHQgEAFgCAHIgBAQIAAA6IgOAAIAAhAQAAgRgGgJQgFgKgRAAIgFABQgFABgGAFQgFAFgEAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgNIAAgMIAQAAIAAARQAGgJAKgGQAKgEAJAAIAKAAQAFABAEADQAFACAEAFQADAFADAGQAFgKAJgHQAKgFAMAAQAUAAAKALQAKALAAAWIAABFg");
	this.shape_23.setTransform(-104.6,5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgWA3QgKgFgIgIQgIgIgEgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQALgFALAAQANAAAKAFQALADAHAIQAIAJAEAKQAEALAAAMQAAANgEAKQgEALgIAIQgHAIgLAFQgKAEgNAAQgLAAgLgEgAgQgpQgHAEgGAGQgFAGgDAJQgDAIAAAIQAAAJADAJQADAHAFAGQAGAHAHADQAIAEAIAAQAJAAAIgEQAHgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgHgEQgIgDgJAAQgIAAgIADg");
	this.shape_24.setTransform(-121.1,5.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgUBTQgQgHgLgMQgMgMgGgQQgHgRAAgTQAAgSAHgQQAGgRAMgMQALgMAQgHQAPgGARAAQAQgBAPAHQAPAGALAPIgPALIgGgIIgKgIIgNgEQgGgDgGAAQgPABgNAFQgMAGgJALQgIAKgFANQgFAOAAANQAAAOAFAOQAFANAIAKQAJALAMAGQANAFAPABIAMgBQAHgCAGgDQAGgDAFgFQAGgEAEgIIAOAKQgEAHgGAFQgGAGgIAEQgIAEgJADQgJACgKAAQgSAAgPgGg");
	this.shape_25.setTransform(-135.8,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo18, new cjs.Rectangle(-146.1,-15.2,334.3,35.8), null);


(lib.Símbolo17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAFAKAAIAJgBQAFgCAEgCQAEgCACgEQACgEAAgEQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgDADAAAEQAAAIAGAEQAFADALADIAQADQALADAJAHQAHAJABALQAAAJgFAHQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape.setTransform(117.3,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_1.setTransform(105.6,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_2.setTransform(96.8,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_3.setTransform(88.6,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_4.setTransform(75.5,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_5.setTransform(62.4,5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgMAFQgLAFgMAAQgLAAgLgFQgKgEgIgHQgJgIgEgKQgEgKAAgMQAAgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAGAGAHAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_6.setTransform(48.1,7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgFADgEQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAQQgEgCgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_7.setTransform(38.1,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_8.setTransform(26.4,5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAHIgBAQIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWAAAKALQAKALAAAWIAABFg");
	this.shape_9.setTransform(9.3,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_10.setTransform(-7.4,5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_11.setTransform(-27.4,5.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_12.setTransform(-41.7,1.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_13.setTransform(-62.2,5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_14.setTransform(-75.2,5.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_15.setTransform(-84,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPALAAAXQAAAXgPAMQgPAKgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgDAFgEQAFgEACgFQACgGAAgGQAAgFgCgGQgCgFgFgEQgFgFgIgCQgIgCgLAAIgbAAg");
	this.shape_16.setTransform(-93.1,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo17, new cjs.Rectangle(-102.7,-15.2,282.6,35.8), null);


(lib.Símbolo16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgXA2QgLgEgHgIQgIgIgFgKQgEgLAAgNQAAgMAEgKQAFgLAIgJQAHgIALgEQALgEAMAAQANAAAKAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgKAFgNAAQgMAAgLgFgAgRgoQgHADgGAGQgFAGgDAIQgDAJAAAIQAAAJADAIQADAJAFAGQAGAFAHAEQAIADAJAAQAJAAAIgDQAIgEAFgFQAGgGADgJQADgIAAgJQAAgIgDgJQgDgIgGgGQgFgGgIgDQgIgEgJAAQgJAAgIAEg");
	this.shape.setTransform(60.9,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgXBuIADgOIABABIADABIAFAAQAFAAAEgCQACgCACgEIACgHIAAgJIAAiDIAQAAIAACGIAAAIQgBAGgCAGQgDAGgGAFQgHAEgLAAQgGAAgHgCgAAEhbQgDgEAAgFQAAgFADgDQAEgDAEAAQAFAAADADQADADAAAFQAAAFgDAEQgDADgFAAQgEAAgEgDg");
	this.shape_1.setTransform(49.8,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgXA5QgGgCgFgEQgGgFgDgFQgDgHAAgIQAAgOAGgHQAIgIAKgDQALgEALgBIAVgBIAIAAIAAgDQABgdgdAAQgTAAgOAOIgJgMQAQgQAdAAQAIAAAIACQAIADAFAFQAGAEADAIQADAHAAAKIAAAyIAAANIACAMIgPAAIgCgJIAAgJIAAAAQgHALgJAFQgKAFgMAAQgHAAgIgCgAAHAAIgQAEQgIACgHAEQgFAGAAAIQAAAGACAEQADADADADQAEACAEABIAKABQAIAAAFgCQAHgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_2.setTransform(41.8,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgKBbIgMgEIgLgHQgFgEgEgFIgBAAIAAASIgPAAIAAi0IAPAAIAABYIABAAQAEgGAFgEQAFgEAGgDQAFgDAHgBIAKgBQANAAALAFQALAEAIAIQAHAIAFAKQAEAKAAANQAAANgEALQgFAKgHAIQgIAIgLAFQgLAEgNAAIgKgBgAgQgHQgJADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAJADQAHAEAJAAQAKAAAIgEQAHgDAFgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgFgFgHgDQgIgEgKAAQgJAAgHAEg");
	this.shape_3.setTransform(29.1,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgWA5QgHgCgGgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAHgIALgDQAKgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgTAAgOAOIgJgMQAPgQAfAAQAHAAAIACQAIADAFAFQAGAEADAIQADAHAAAKIAAAyIAAANIACAMIgPAAIgBgJIAAgJIgBAAQgHALgJAFQgJAFgNAAQgIAAgGgCgAAGAAIgQAEQgHACgGAEQgGAGAAAIQAAAGACAEQADADADADQAEACAFABIAJABQAIAAAFgCQAHgDAEgFQAEgFACgGQACgHABgIIAAgIIgIAAIgQAAg");
	this.shape_4.setTransform(15.1,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIAAgUIAPAAIAAAVIAAAAQACgEADgEIAHgIQAEgEAGgCQAGgCAHAAIALABIgDAQQgDgBgGAAQgJAAgGADQgFAEgFAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_5.setTransform(6.3,16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgHBVIAAiZIg5AAIAAgQICBAAIAAAQIg5AAIAACZg");
	this.shape_6.setTransform(-5.4,13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_7.setTransform(-21.6,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgTA2QgLgEgHgIQgIgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAHgIAKgEQALgEAKAAQANAAAKAEQAKAFAGAHQAHAIAEAKQADAKAAAMIAAAGIhbAAQABAIADAIQADAHAGAGQAFAGAHADQAIACAHAAQAMABAJgHQAKgFAEgIIAMAKQgKANgMAFQgMAGgNAAQgMAAgKgFgAgMgoQgHACgGAFQgFAFgDAHQgDAGAAAHIBJAAQAAgQgJgKQgKgKgRAAQgGAAgHAEg");
	this.shape_8.setTransform(-31,16.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AAgA6IAAg9QAAgTgGgKQgHgKgQAAIgHABQgFABgGAEQgGAFgEAIQgGAJAAAOIAAA6IgPAAIAAhXIgBgLIAAgOIAQAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIAKgCQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_9.setTransform(-50.8,16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgTA2QgLgEgHgIQgIgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAHgIAKgEQALgEAKAAQANAAAKAEQAKAFAGAHQAHAIAEAKQADAKAAAMIAAAGIhbAAQABAIADAIQADAHAGAGQAFAGAHADQAIACAHAAQAMABAJgHQAKgFAEgIIAMAKQgKANgMAFQgMAGgNAAQgMAAgKgFgAgMgoQgHACgGAFQgFAFgDAHQgDAGAAAHIBJAAQAAgQgJgKQgKgKgRAAQgGAAgHAEg");
	this.shape_10.setTransform(-63.8,16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgXBYQgKgFgJgIQgHgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAHgIQAJgIAKgEQALgFAMAAIALABQAHABAFADIALAHQAFAEAEAGIABAAIAAhYIAPAAIAAC0IgPAAIAAgSIgBAAQgEAFgFAEIgLAHIgMAEIgLABQgMAAgLgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAIgEQAJgDAGgGQAFgGAEgIQADgJAAgJQAAgJgDgIQgEgJgFgGQgGgFgJgDQgIgEgJAAQgJAAgIAEg");
	this.shape_11.setTransform(-84.5,13);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHAEAFQADAFAGADQAGACAJAAIAGgBQAFgBAGgEQAGgEAEgJQAFgJABgPIAAg5IAPAAIAABXIAAAMIABANIgQAAIAAgJIAAgJIgBAAIgHAIQgEAEgFADQgEADgGABIgLACQgUAAgLgMg");
	this.shape_12.setTransform(-98,16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_13.setTransform(-107.4,12.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgFQgDgHAAgIQAAgOAGgHQAIgIAKgDQALgEALgBIAVgBIAIAAIAAgDQABgdgdAAQgTAAgOAOIgJgMQAPgQAeAAQAIAAAIACQAHADAGAFQAGAEADAIQADAHAAAKIAAAyIAAANIACAMIgPAAIgCgJIAAgJIAAAAQgHALgJAFQgKAFgMAAQgHAAgIgCgAAHAAIgQAEQgIACgHAEQgFAGAAAIQAAAGACAEQADADADADQAEACAEABIAKABQAIAAAFgCQAHgDAEgFQAEgFACgGQACgHAAgIIAAgIIgIAAIgOAAg");
	this.shape_14.setTransform(-116.6,16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgdBTQgOgFgKgOIAPgLQAGAKAKAFQAJAFANAAQAGAAAGgBQAHgCAFgFQAFgDADgHQADgFAAgHQAAgKgDgFQgEgGgGgEQgGgEgIgDIgOgFIgQgGQgIgCgGgGQgGgEgEgIQgDgIAAgMQAAgMAEgKQAFgJAIgGQAHgFAKgEQAKgDAJAAQAOAAAMAGQALAEAKALIgPAMQgLgQgVAAQgGAAgGABQgHACgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQALADAKAEQAJAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAGQgIAHgJADQgKADgJABQgQAAgNgHg");
	this.shape_15.setTransform(-129,13.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgrBVIgHgCIACgPQAFADAHAAQAIgBAFgFQAEgFAEgKIAIgVIguhxIAUAAIAiBcIAihcIATAAIg3CNQgFANgHAHQgIAIgOAAIgIAAg");
	this.shape_16.setTransform(-147.8,19.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgXBYQgLgFgHgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAHgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAIgEQAIgDAHgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgHgFgIgDQgIgEgJAAQgJAAgIAEg");
	this.shape_17.setTransform(159.1,-15.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgWA5QgHgCgFgEQgGgFgDgFQgDgHAAgIQAAgOAGgHQAIgIALgDQAKgEALgBIAWgBIAIAAIAAgDQgBgdgcAAQgSAAgPAOIgJgMQAPgQAeAAQAJAAAHACQAHADAGAFQAFAEADAIQAEAHAAAKIAAAyIABANIABAMIgPAAIgBgJIAAgJIgBAAQgHALgJAFQgJAFgNAAQgIAAgGgCgAAGAAIgQAEQgHACgGAEQgGAGAAAIQAAAGACAEQACADAEADQAEACAEABIAKABQAHAAAHgCQAGgDAEgFQAEgFADgGQACgHAAgIIAAgIIgIAAIgQAAg");
	this.shape_18.setTransform(145.8,-12.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgXBYQgLgFgHgIQgJgIgDgKQgFgLAAgNQAAgNAFgKQADgKAJgIQAHgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgLAEIgMABQgMAAgLgEgAgQgHQgIADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAIADQAHAEAJAAQAKAAAIgEQAIgDAFgGQAHgGACgIQAEgJAAgJQAAgJgEgIQgCgJgHgGQgFgFgIgDQgIgEgKAAQgJAAgHAEg");
	this.shape_19.setTransform(132.4,-15.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgDgEAAgFQAAgFADgDQAEgEADAAQAEAAAEAEQADADAAAFQAAAFgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_20.setTransform(122.7,-15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIAAgUIAPAAIAAAVIAAAAQACgEADgEIAHgIQAEgEAGgCQAGgCAHAAIALABIgDAQQgDgBgGAAQgJAAgGADQgFAEgFAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_21.setTransform(117,-12.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHADAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIAAAAIgHAIQgEAEgFADQgFADgGABIgJACQgWAAgKgMg");
	this.shape_22.setTransform(105.4,-12.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgfBRQgMgGgLgLIAMgNQAGAKAMAFQAKAGAOAAQAKAAAJgEQAIgDAFgGQAGgGACgIQACgIAAgJIAAgUIgBAAQgHALgLAFQgLAFgMAAQgLAAgLgFQgKgEgIgHQgIgIgEgKQgEgKgBgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQAKgEAMAAIAKAAIALAEQAGACAFAEQAGAFAEAGIABAAIAAgTIAQAAIAABvQgBAJgCAKQgCALgGAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgFAGgEAHQgDAIAAAJQAAAJADAIQAEAIAFAEQAGAGAHAEQAIADAIAAQAIAAAHgDQAIgDAHgFQAFgFAEgIQACgIAAgKQAAgJgCgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_23.setTransform(91.4,-9.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgTA2QgLgEgHgIQgIgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAHgIAKgEQALgEAKAAQANAAAKAEQAKAFAGAHQAHAIAEAKQADAKAAAMIAAAGIhbAAQABAIADAIQADAHAGAGQAFAGAHADQAIACAHAAQAMABAJgHQAKgFAEgIIAMAKQgKANgMAFQgMAGgNAAQgMAAgKgFgAgMgoQgHACgGAFQgFAFgDAHQgDAGAAAHIBJAAQAAgQgJgKQgKgKgRAAQgGAAgHAEg");
	this.shape_24.setTransform(77.9,-12.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgdBTQgOgFgKgOIAPgLQAGAKAKAFQAJAFANAAQAGAAAGgBQAHgCAFgFQAFgDADgHQADgFAAgHQAAgKgDgFQgEgGgGgEQgGgEgIgDIgOgFIgQgGQgIgCgGgGQgGgEgEgIQgDgIAAgMQAAgMAEgKQAFgJAIgGQAHgFAKgEQAKgDAJAAQAOAAAMAGQALAEAKALIgPAMQgLgQgVAAQgGAAgGABQgHACgFAEQgFADgDAHQgDAGAAAHQAAAMAGAGQAHAGAJAEIAUAIQALADAKAEQAJAGAGAJQAHAJAAAPQAAAMgFAJQgFAJgIAGQgIAHgJADQgKADgJABQgQAAgNgHg");
	this.shape_25.setTransform(64.7,-15.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgTA2QgLgEgHgIQgIgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAIgJQAHgIAKgEQALgEAKAAQANAAAKAEQAKAFAGAHQAHAIAEAKQADAKAAAMIAAAGIhbAAQABAIADAIQADAHAGAGQAFAGAHADQAIACAHAAQAMABAJgHQAKgFAEgIIAMAKQgKANgMAFQgMAGgNAAQgMAAgKgFgAgMgoQgHACgGAFQgFAFgDAHQgDAGAAAHIBJAAQAAgQgJgKQgKgKgRAAQgGAAgHAEg");
	this.shape_26.setTransform(45,-12.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgXBYQgLgFgHgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAHgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAIgEQAIgDAHgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgHgFgIgDQgIgEgJAAQgJAAgIAEg");
	this.shape_27.setTransform(30.9,-15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgXA2QgLgEgHgIQgIgIgFgKQgEgLAAgNQAAgMAEgKQAFgLAIgJQAHgIALgEQALgEAMAAQANAAAKAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgKAFgNAAQgMAAgLgFgAgRgoQgHADgGAGQgFAGgDAIQgDAJAAAIQAAAJADAIQADAIAFAHQAGAFAHAEQAIADAJAAQAJAAAIgDQAIgEAFgFQAGgHADgIQADgIAAgJQAAgIgDgJQgDgIgGgGQgFgGgIgDQgIgEgJAAQgJAAgIAEg");
	this.shape_28.setTransform(10.5,-12.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgDgEAAgFQAAgFADgDQAEgEADAAQAEAAAEAEQADADAAAFQAAAFgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_29.setTransform(0.6,-15.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIAAgUIAPAAIAAAVIAAAAQACgEADgEIAHgIQAEgEAGgCQAGgCAHAAIALABIgDAQQgDgBgGAAQgJAAgGADQgFAEgFAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_30.setTransform(-5.1,-12.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgWA5QgHgCgGgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAHgIALgDQAKgEALgBIAWgBIAHAAIAAgDQAAgdgcAAQgTAAgOAOIgJgMQAPgQAfAAQAHAAAIACQAHADAGAFQAGAEADAIQADAHAAAKIAAAyIAAANIACAMIgPAAIgBgJIAAgJIgBAAQgHALgJAFQgJAFgNAAQgIAAgGgCgAAHAAIgRAEQgIACgGAEQgFAGAAAIQAAAGACAEQADADADADQAEACAFABIAJABQAIAAAFgCQAHgDAEgFQAEgFACgGQACgHAAgIIAAgIIgHAAIgPAAg");
	this.shape_31.setTransform(-16.5,-12.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AAGBIQgFgBgDgDQgEgEgDgFQgCgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAOAAIAAAfIAgAAIAAAOIggAAIAABCIABAKQABAEADACQACADADAAIAGABIAIgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_32.setTransform(-26.2,-13.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgDgEAAgFQAAgFADgDQAEgEADAAQAEAAAEAEQADADAAAFQAAAFgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_33.setTransform(-33,-15.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIAAgUIAPAAIAAAVIAAAAQACgEADgEIAHgIQAEgEAGgCQAGgCAHAAIALABIgDAQQgDgBgGAAQgJAAgGADQgFAEgFAFQgEAGgCAGIgCAMIAAA/g");
	this.shape_34.setTransform(-38.7,-12.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgWA5QgHgCgGgEQgFgFgDgFQgDgHAAgIQAAgOAHgHQAHgIALgDQAKgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPAOIgJgMQAQgQAeAAQAHAAAIACQAIADAFAFQAGAEACAIQAEAHAAAKIAAAyIAAANIACAMIgPAAIgBgJIAAgJIgBAAQgHALgJAFQgJAFgNAAQgIAAgGgCgAAGAAIgQAEQgHACgGAEQgGAGAAAIQAAAGACAEQACADAEADQAEACAFABIAJABQAHAAAHgCQAGgDAEgFQAFgFABgGQADgHAAgIIAAgIIgIAAIgQAAg");
	this.shape_35.setTransform(-50,-12.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgzBVIAAipIAxAAQAZAAAOAMQAPALAAAXQAAAWgPALQgOALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgDAFgDQAEgEADgGQACgFAAgGQAAgHgCgFQgDgFgEgFQgFgEgIgCQgIgCgLAAIgbAAg");
	this.shape_36.setTransform(-62,-15.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgTBSQgLgEgHgJQgIgHgEgLQgEgLAAgMQAAgOAEgKQAEgKAIgIQAHgIAKgEQALgEAKgBQANABAKAEQAKAEAGAIQAHAIAEAJQADAKAAALIAAAHIhbAAQABAJADAIQADAHAGAFQAFAGAHADQAIADAHAAQAMAAAJgGQAKgFAEgJIAMALQgKANgMAFQgMAGgNgBQgMABgKgFgAgMgNQgHADgGAFQgFAFgDAFQgDAHAAAHIBJAAQAAgRgJgIQgKgKgRAAQgGgBgHAEgAgNgzIAWgjIAWAAIgfAjg");
	this.shape_37.setTransform(-82.6,-15.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AAGBIQgFgBgDgDQgEgEgDgFQgCgGAAgJIAAhHIgYAAIAAgOIAYAAIAAgfIAOAAIAAAfIAgAAIAAAOIggAAIAABCIABAKQABAEADACQACADADAAIAGABIAIgBIAIgEIABAQQgJADgMAAIgJgBg");
	this.shape_38.setTransform(-93.1,-13.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg+QgDgEAAgFQAAgFADgDQAEgEADAAQAEAAAEAEQADADAAAFQAAAFgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_39.setTransform(-99.9,-15.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("ABDA6IAAhBQABgRgHgJQgFgJgQAAQgJgBgGAEQgGAEgEAFQgEAGgBAIQgCAHAAAHIAAA8IgOAAIAAhBQAAgRgGgJQgGgJgQAAIgGABQgGABgFAEQgGAFgEAIQgEAJgBAOIAAA6IgPAAIAAhXIgBgMIAAgNIAQAAIAAARIABAAQAFgKALgEQAKgGAJAAIAKABQAFABAFADQAFACAEAFQADAEADAIQAEgMALgFQAKgHALAAQAWABAKAKQAKAMAAAVIAABHg");
	this.shape_40.setTransform(-112.9,-12.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgXA2QgLgEgHgIQgIgIgFgKQgEgLAAgNQAAgMAEgKQAFgLAIgJQAHgIALgEQALgEAMAAQANAAAKAEQALAEAIAIQAIAJAEALQAFAKAAAMQAAANgFALQgEAKgIAIQgIAIgLAEQgKAFgNAAQgMAAgLgFgAgRgoQgHADgGAGQgFAGgDAIQgDAJAAAIQAAAJADAIQADAIAFAHQAGAFAHAEQAIADAJAAQAJAAAIgDQAIgEAFgFQAGgHADgIQADgIAAgJQAAgIgDgJQgDgIgGgGQgFgGgIgDQgIgEgJAAQgJAAgIAEg");
	this.shape_41.setTransform(-129.9,-12.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgVBSQgQgGgMgMQgLgMgHgQQgHgQABgUQgBgTAHgQQAHgQALgMQAMgMAQgGQAQgIARAAQARABAPAGQAPAHAMANIgQAMIgHgJIgKgGIgMgGQgGgBgIAAQgOAAgNAFQgNAGgIAKQgJALgGANQgEANAAAOQAAAPAEANQAGAOAJAKQAIAJANAGQANAHAOgBIAOgBQAGgBAGgDQAHgCAGgFQAFgGAFgHIANAKQgEAGgGAHQgGAFgIAFQgJADgIADQgKACgLABQgRAAgQgIg");
	this.shape_42.setTransform(-144.9,-15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo16, new cjs.Rectangle(-155.5,-32.8,331.6,64.6), null);


(lib.Símbolo15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape.setTransform(97.2,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_1.setTransform(87.8,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgEgKAAgMQAAgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIAQAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_2.setTransform(74.3,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_3.setTransform(60.6,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_4.setTransform(51,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_5.setTransform(34.4,5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_6.setTransform(21.9,5.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_7.setTransform(12.8,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAFAJAAIAJgBQAFgCAEgCQAEgCACgEQACgEAAgEQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgGgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGAEQAGADAKADIAQADQALADAJAHQAHAJABALQAAAJgFAHQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_8.setTransform(4.9,5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgXBVQgGgDgGgEQgFgEgDgGQgEgGAAgJQAAgNAHgIQAHgIALgEQALgEALAAIAWgBIAIAAIAAgEQAAgcgdAAQgSAAgPAOIgKgMQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAIAAAJIAAAzIAAANIACALIgQAAIgBgJIAAgJQgHAMgKAEQgJAGgNAAQgIAAgHgCgAAHAcIgQADQgJADgGAEQgGAFAAAJQAAAFADAEQACAEAEADQAEACAEABIAKABQAIAAAGgDQAGgDAFgEQAEgFACgHQACgHAAgHIAAgJIgIAAIgPABgAgKgzIAXgiIAVAAIgfAig");
	this.shape_9.setTransform(-6.8,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("Ag4BVIAAipIAzAAQAJAAAKACQAKADAHAEQAIAFAFAJQAEAIABAMQAAAOgJAJQgIAKgNAEIAAAAQARACALAKQAKAMAAASIgCAMQgCAIgHAIQgGAHgMAGQgMAGgUAAgAgnBFIAiAAQAHAAAJgBQAIgCAGgFQAGgDADgHQAEgFAAgJQAAgRgLgIQgKgIgVAAIgjAAgAgngKIAjAAIALgBQAGgCAGgDQAEgEADgFQAEgGAAgJIgBgHQgCgFgEgFQgDgEgHgEQgHgDgLAAIgiAAg");
	this.shape_10.setTransform(-19.8,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AAhA5IAAg8QAAgUgGgKQgHgJgRgBIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVAAAKALQALALAAAWIAABFg");
	this.shape_11.setTransform(-41.3,5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_12.setTransform(-54.3,5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_13.setTransform(-63.1,1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPALAAAXQAAAXgPAMQgPAKgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgDAFgEQAFgEACgFQACgGAAgGQAAgFgCgGQgCgFgFgEQgFgFgIgCQgIgCgLAAIgbAAg");
	this.shape_14.setTransform(-72.2,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo15, new cjs.Rectangle(-81.8,-15.2,202.8,35.8), null);


(lib.Símbolo14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape.setTransform(57.1,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_1.setTransform(47.7,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_2.setTransform(38.9,15.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAFgBAIAAIAMAAIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_3.setTransform(33.1,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AAGBJQgFgCgDgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgDIABAPQgIADgNABIgJgBg");
	this.shape_4.setTransform(24.1,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgCQgFgDgDgGQgEgFAAgJQAAgIAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgGgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQALADAJAHQAHAJABAMQgBAIgEAHQgDAGgGAFQgGAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_5.setTransform(15.1,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_6.setTransform(3.2,18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_7.setTransform(-11.1,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgJQgHgLgRAAIgGACQgGAAgGAFQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_8.setTransform(-25,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_9.setTransform(-34.3,15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_10.setTransform(-51.5,14.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_11.setTransform(-65,18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_12.setTransform(-78.6,14.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEAEgEAAQgDAAgEgEg");
	this.shape_13.setTransform(-88.5,15.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAFgBAIAAIAMAAIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_14.setTransform(-94.3,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIABANIgQAAIgBgJIAAgJIgHAIQgEAEgFADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_15.setTransform(-106,18.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_16.setTransform(-120.3,20.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAIAGAFQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_17.setTransform(-134,18);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAIAIAEQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgHgCQgGgCgEgCQgFgDgDgGQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgOAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAFQgCADAAAFQABAIAFADQAGAEAKADIAQADQAMADAIAHQAHAJAAAMQAAAIgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_18.setTransform(-145.7,18);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgTA2QgLgEgIgIQgHgIgFgKQgEgMAAgMQAAgMAEgLQAEgKAIgJQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEAKAAAMIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAGAHADQAHADAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgFgAgNgpQgHADgFAFQgGAFgDAGQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_19.setTransform(-18.9,-10.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_20.setTransform(-33.3,-14.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_21.setTransform(-53.4,-10.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGAEgDAGQgEAFgCAHIgBAPIAAA8IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGACQgFAAgGAFQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgMIgBgNIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgGQALgHALABQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_22.setTransform(-69.8,-11);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgXA5QgGgCgGgEQgFgFgDgGQgEgGAAgIQAAgOAHgIQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHAAIgQADQgJADgGAEQgGAFAAAJQAAAGADAEQACAEAEACQAEADAEABIAKABQAIAAAGgDQAGgDAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPAAg");
	this.shape_23.setTransform(-86.3,-10.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgEQADgFAEgDQAEgEAGgCQAFgBAIAAIAMAAIgDARQgEgCgFAAQgKAAgGADQgFAEgFAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_24.setTransform(-95.2,-11);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEAMAAIAKAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_25.setTransform(-107.8,-8.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgXA2QgLgEgIgIQgIgIgEgKQgFgMAAgMQAAgMAFgLQAEgKAIgJQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAJAEAKQAFALAAAMQAAAMgFAMQgEAKgIAIQgIAIgLAEQgLAFgNAAQgMAAgLgFgAgRgpQgIAEgFAGQgGAGgCAIQgEAJAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgJQgDgIgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_26.setTransform(-122,-10.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgEQADgFAFgDQADgEAGgCQAFgBAIAAIAMAAIgDARQgDgCgHAAQgIAAgHADQgGAEgEAFQgEAGgCAGQgCAGAAAGIAAA/g");
	this.shape_27.setTransform(-132,-11);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPAMQAPAKAAAXQAAAXgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgEQAFgEACgGQACgFAAgHQAAgFgCgGQgCgGgFgEQgFgDgIgDQgIgCgLAAIgbAAg");
	this.shape_28.setTransform(-143.3,-13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo14, new cjs.Rectangle(-152.8,-31.2,221.9,64.6), null);


(lib.Símbolo13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBAIggg5IgTAAIAAA5IgSAAIAAiAIAuAAQARAAAMAJQALAKAAARQAAANgIAJQgIAKgQACIAlA6gAgbgHIAXAAQAaABAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(32.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBAIgMgfIg8AAIgNAfIgVAAIA5iAIAPAAIA3CAgAgXARIAvAAIgYg6IAAAAg");
	this.shape_1.setTransform(18.4,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_2.setTransform(7.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgEgMAAgMQAAgdASgTQATgUAcAAQAOAAAMAFQAMAGAIAJIgOALQgNgPgTAAQgUAAgOAPQgNAPAAAWQAAAVANAPQANAOAVAAQAVAAANgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_3.setTransform(-2.9,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_4.setTransform(-13.8,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhBAIhGhoIgBAAIAABoIgRAAIAAiAIAXAAIBGBqIABAAIAAhqIARAAIAACAg");
	this.shape_5.setTransform(-25.4,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBAIAAiAIARAAIAACAg");
	this.shape_6.setTransform(-37,-0.3);

	this.instance = new lib.Mapadebits6();
	this.instance.parent = this;
	this.instance.setTransform(-74,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo13, new cjs.Rectangle(-74,-23.5,148,47), null);


(lib.Símbolo10 = function(mode,startPosition,loop) {
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

	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-74,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(-74,-23.5,148,47), null);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("tecuidamos3");
	}
	this.frame_2 = function() {
		playSound("tecuidamos4");
	}
	this.frame_3 = function() {
		playSound("tecuidamos5");
	}
	this.frame_4 = function() {
		playSound("tecuidamos6");
	}
	this.frame_5 = function() {
		playSound("tecuidamos7");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape.setTransform(252.9,43.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_1.setTransform(243,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_2.setTransform(234.2,36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_3.setTransform(226,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_4.setTransform(212.9,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_5.setTransform(199.8,39.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgLgEgIgHQgHgIgFgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_6.setTransform(185.5,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgEQAEgDAGgBQAGgCAHAAIAMABIgDAPQgEgBgFAAQgJAAgHAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_7.setTransform(175.5,39.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_8.setTransform(163.8,39.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAHIgBAQIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWAAAKALQAKALAAAVIAABGg");
	this.shape_9.setTransform(146.7,39.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_10.setTransform(130,39.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_11.setTransform(110,39.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_12.setTransform(95.7,35.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_13.setTransform(75.2,39.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgXBSQgLgFgIgHQgIgJgEgKQgFgLAAgNQAAgMAFgLQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFALAAAMQAAANgFALQgEAKgIAJQgIAHgLAFQgLAFgNAAQgMAAgLgFgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAKAEAIQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgIAAgKQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgDgKgBQgJABgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_14.setTransform(61.6,36.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_15.setTransform(51.6,36.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_16.setTransform(43.3,39.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_17.setTransform(30.6,39.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_18.setTransform(18,39.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgDgCgGQgDgFAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_19.setTransform(7.4,37.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_20.setTransform(0.5,36.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgDAAgFQAAgJgGgEQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgEgHgGgEQgFgEgJAAIgIABIgHADIgGAGQgBADAAAEQgBAIAGAEQAFADALADIAQAEQALACAIAHQAJAJgBALQAAAJgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_21.setTransform(-7.4,39.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_22.setTransform(-25.7,39.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_23.setTransform(-38.5,39.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIABANIgRAAIAAgJIgBgJIgHAIQgDAEgGADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_24.setTransform(-51.7,39.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_25.setTransform(-71.7,39.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_26.setTransform(-86,35.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_27.setTransform(-106.8,39.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQADgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_28.setTransform(-121.5,42);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_29.setTransform(-135.2,39.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AglAuQgLgLAAgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAJAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_30.setTransform(-148.6,39.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_31.setTransform(-158.1,35.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgRAcIAQg3IATAAIgTA3g");
	this.shape_32.setTransform(-171,45.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgDAAgFQAAgJgGgEQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgGgEQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFAEQAGADAKADIAQAEQALACAJAHQAHAJABALQgBAJgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_33.setTransform(-179.3,39.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_34.setTransform(-191,39.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_35.setTransform(-202.7,39.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_36.setTransform(-211.4,36.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgDgDgGQgDgFAAgKIAAhGIgYAAIAAgOIAYAAIAAggIAPAAIAAAgIAgAAIAAAOIggAAIAABCIABAKIAEAGQABACADABIAHABIAIgBIAIgDIABAOQgJAFgMAAIgJgBg");
	this.shape_37.setTransform(-218.2,37.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_38.setTransform(-228.7,39.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_39.setTransform(-242.3,42);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_40.setTransform(-256,39.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_41.setTransform(-269.5,39.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgYA2QgKgFgIgMIANgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgDADAAAEQAAAIAGAEQAFADALADIAQAEQALACAJAHQAHAIABAMQAAAJgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_42.setTransform(237.9,10.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_43.setTransform(226.2,10.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_44.setTransform(217.4,7.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_45.setTransform(209.2,10.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_46.setTransform(196.1,10.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_47.setTransform(183,10.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgQAAIgBgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_48.setTransform(169.6,10.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_49.setTransform(157.6,10.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_50.setTransform(144.7,10.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAFAKAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgEgHgFgEQgGgEgJAAIgIABIgHADIgGAGQgBADAAAEQgBAIAGAEQAFADALADIAQAEQALACAIAHQAJAIgBAMQAAAJgDAHQgEAGgGAFQgGAEgIACQgIACgIAAQgNAAgKgFg");
	this.shape_51.setTransform(133,10.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_52.setTransform(121,10.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_53.setTransform(107.4,10.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_54.setTransform(94.9,10.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgIgCIgOgEIgIgCQgFgCgFgDQgFgDgDgFQgEgGABgHQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgEgHgGgEQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGAEQAFADALADIAQAEQALACAIAHQAJAIAAAMQAAAJgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_55.setTransform(77,10.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_56.setTransform(65.3,10.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_57.setTransform(56.5,7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgEADgFQADgEAFgEQADgCAGgCQAGgCAHAAIAMABIgDAPQgEgBgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_58.setTransform(44.1,10.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_59.setTransform(36.2,7.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_60.setTransform(27.9,10.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AglAuQgLgLABgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIABANIgQAAIgBgJIAAgJIgHAIQgEAEgFADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_61.setTransform(15,10.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_62.setTransform(0.7,7.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_63.setTransform(-12.9,10.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAPAAIAAAVIABAAQACgEADgFQADgEAFgEQADgCAGgCQAGgCAHAAIAMABIgDAPQgEgBgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_64.setTransform(-22.5,10.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_65.setTransform(-41.1,10.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_66.setTransform(-54.2,10.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAFAKAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgEgGAAgHQAAgJAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgDADAAAEQAAAIAGAEQAFADALADIAQAEQALACAJAHQAHAIABAMQAAAJgFAHQgDAGgHAFQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_67.setTransform(-72.6,10.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_68.setTransform(-84.3,10.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_69.setTransform(-97.9,7.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_70.setTransform(-111.4,10.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_71.setTransform(-122.7,10.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_72.setTransform(-136,10.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AgNBcIAAhhIgYAAIAAgOIAYAAIAAgfQAAgWALgKQAJgJARAAIAHAAIAGACIgDAOIgGgBIgFgBQgHAAgEACQgEADgCAEIgEAJIAAALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_73.setTransform(-146.1,6.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_74.setTransform(-157.1,10.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_75.setTransform(-170.2,10.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQAEgCACgEQACgEAAgEQAAgJgGgEQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGAEQAGADAKADIAQAEQALACAJAHQAHAIABAMQAAAJgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_76.setTransform(-188.6,10.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAJAEAHQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_77.setTransform(-200.4,10.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_78.setTransform(-214,10.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_79.setTransform(-227.6,10.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg+QgEgEAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEAEQgEACgEAAQgDAAgEgCg");
	this.shape_80.setTransform(-237.6,7.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_81.setTransform(-245.8,10.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_82.setTransform(-257.4,10.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQADQgJACgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_83.setTransform(-270.1,10.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAFAJAAIAJgCQAFgBAEgCQADgCADgEQACgEAAgEQAAgJgGgEQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFAEQAFADALADIAQAEQAMACAHAHQAJAIgBAMQAAAJgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_84.setTransform(328.4,-18.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_85.setTransform(316.7,-18.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_86.setTransform(307.9,-21.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_87.setTransform(302.2,-21.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_88.setTransform(292.6,-18.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgLACQgVAAgLgMg");
	this.shape_89.setTransform(279.2,-18.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AAsBcIAAhXIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEQgKgFgIgIQgIgIgEgKQgFgLAAgMQAAgNAFgLQAEgLAIgHQAIgJAKgDQALgFANAAIALABQAHABAFADIAMAGQAEAFAFAFIAAAAIAAgTIAQAAIAAC1gAgRhKQgIAEgFAGQgGAGgDAJQgDAHAAAKQAAAJADAJQADAIAGAFQAFAFAIAEQAIAEAJAAQAKAAAIgEQAIgEAGgFQAGgFADgIQAEgJAAgJQAAgKgEgHQgDgJgGgGQgGgGgIgEQgIgDgKAAQgJAAgIADg");
	this.shape_90.setTransform(264.9,-15);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_91.setTransform(251.4,-18.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_92.setTransform(232.2,-18.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_93.setTransform(217.8,-21.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_94.setTransform(197.3,-18.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AgXBSQgLgFgIgHQgIgJgEgKQgFgLAAgNQAAgMAFgLQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFALAAAMQAAANgFALQgEAKgIAJQgIAHgLAFQgLAFgNAAQgMAAgLgFgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAKAEAIQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgIAAgKQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgDgKgBQgJABgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_95.setTransform(183.7,-21.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_96.setTransform(173.7,-21.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_97.setTransform(165.5,-18.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_98.setTransform(152.8,-18.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AgtA4IAAgLIBChWIg+AAIAAgOIBUAAIAAALIhBBWIBEAAIAAAOg");
	this.shape_99.setTransform(141.8,-18.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_100.setTransform(133.8,-21.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_101.setTransform(124,-18.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_102.setTransform(111,-18.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgLAFQgLAFgNAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgFgKABgMQgBgNAFgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgIAEgFAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAFAGAIAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_103.setTransform(97.5,-15.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AgeA5IAAhLIgBgQIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgEQAEgDAGgBQAFgCAIAAIAMABIgDAPQgEgBgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAGAAAGIAAA+g");
	this.shape_104.setTransform(87.5,-18.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_105.setTransform(75.4,-18.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFADAHgBQAIAAAFgEQAFgGADgJIAJgWIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAIQgIAHgOAAIgIAAg");
	this.shape_106.setTransform(55.9,-15.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_107.setTransform(36.5,-18.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgXBSQgLgFgIgHQgIgJgEgKQgFgLAAgNQAAgMAFgLQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFALAAAMQAAANgFALQgEAKgIAJQgIAHgLAFQgLAFgNAAQgMAAgLgFgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAKAEAIQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgIAAgKQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgDgKgBQgJABgIADgAgOgzIAXgjIAWAAIgfAjg");
	this.shape_108.setTransform(22.9,-21.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_109.setTransform(12.9,-21.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_110.setTransform(4.7,-18.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_111.setTransform(-8,-18.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_112.setTransform(-19.3,-18.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_113.setTransform(-28.4,-21.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AgNBcIAAhhIgXAAIAAgOIAXAAIAAgfQAAgWALgKQAJgJARAAIAGAAIAHACIgCAOIgHgBIgGgBQgGAAgEACQgEADgCAEIgEAJIAAALIAAAdIAaAAIAAAOIgaAAIAABhg");
	this.shape_114.setTransform(-34.2,-22);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_115.setTransform(-41.2,-21.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_116.setTransform(-51,-18.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_117.setTransform(-64,-18.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_118.setTransform(-72.8,-21.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAATIABAAQAEgFAFgFIAKgGQAHgDAFgBIALgBQAOAAAKAFQALADAIAJQAIAHAFALQAEALAAANQAAAMgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBIgMgEIgKgHQgFgEgEgFIgBAAIAABXgAgRhKQgIAEgGAGQgGAGgEAJQgCAHAAAKQAAAJACAJQAEAIAGAFQAGAFAIAEQAJAEAIAAQAKAAAIgEQAIgEAFgFQAGgFACgIQAEgJAAgJQAAgKgEgHQgCgJgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_119.setTransform(-82.6,-15);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_120.setTransform(-103.5,-18.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_121.setTransform(-112.3,-21.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAFADAIQAEAIAAAJIAAAyIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEABIAKACQAIgBAGgDQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_122.setTransform(-128.3,-18.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAFABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgMAEIgMABQgNAAgKgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIAAAJQAAAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_123.setTransform(-141.9,-21.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_124.setTransform(-156,-18.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgDgCgGQgDgFAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAHABIAJgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_125.setTransform(-167.1,-19.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_126.setTransform(-184.4,-18.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_127.setTransform(-198,-18.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgLAAgMQAAgMAEgLQAEgLAIgHQAIgJAKgDQAKgFALAAQANAAAKAFQAKAEAHAIQAHAHADALQAEAKAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHADAIABQANgBAJgFQAJgGAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_128.setTransform(-211.1,-18.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgEADABQAEgBAEAEQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_129.setTransform(-220.7,-21.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgDgCgGQgDgFAAgKIAAhGIgXAAIAAgOIAXAAIAAggIAPAAIAAAgIAhAAIAAAOIghAAIAABCIABAKIAEAGQACACACABIAIABIAIgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_130.setTransform(-227.5,-19.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#111111").s().p("AAhA5IAAg9QAAgSgGgLQgHgKgRAAIgGABQgGABgGAFQgGAFgFAIQgFAIAAAPIAAA5IgPAAIAAhWIgBgMIgBgNIARAAIAAAKIAAAIIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALALAAAVIAABGg");
	this.shape_131.setTransform(-238.4,-18.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgLAAgMQAAgMAFgLQAEgLAIgHQAIgJALgDQALgFAMAAQANAAALAFQALADAIAJQAIAHAEALQAFALAAAMQAAAMgFALQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAIAGAFQAFAGAIAEQAIAEAJAAQAKAAAHgEQAIgEAGgGQAFgFADgIQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_132.setTransform(-252,-18.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#111111").s().p("AgVBTQgQgHgMgMQgMgMgHgQQgHgRAAgTQAAgSAHgRQAHgQAMgMQAMgMAQgHQAQgGASgBQAQAAAQAHQAPAGAMAOIgPAMIgIgIQgEgFgGgDIgNgFQgGgCgHAAQgPAAgNAHQgNAFgJALQgJAKgFANQgFAOAAANQAAAOAFAOQAFANAJAKQAJAKANAHQANAFAPABIANgCIANgEQAHgDAFgFQAGgEAFgIIAOAKIgLAMQgGAGgIAEQgJAEgJADQgKACgKAAQgSAAgQgGg");
	this.shape_133.setTransform(-267.3,-21.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#111111").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_134.setTransform(184.9,23.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgHgCQgGgCgEgDQgFgDgDgFQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgOAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFADQAGAEAKADIAQADQAMADAIAHQAHAJAAAMQAAAIgEAHQgDAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_135.setTransform(176.5,19.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_136.setTransform(164.7,19.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#111111").s().p("AgeA6IAAhMIAAgQIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgDQADgEAGgCQAFgBAIAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_137.setTransform(155.1,19.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_138.setTransform(142.9,19.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_139.setTransform(128.1,15.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_140.setTransform(114.6,19.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#111111").s().p("AgeA6IAAhMIgBgQIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgDQAEgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgFAAQgJAAgHAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_141.setTransform(105.8,19.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_142.setTransform(93.6,19.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#111111").s().p("AgLBbIgLgEIgLgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIALgHQAGgDAFgBIALgBQANAAALAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBgAgRgHQgIADgGAFQgGAGgDAJQgDAIgBAJQABAJADAJQADAIAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgIAAgJAEg");
	this.shape_143.setTransform(79.6,15.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_144.setTransform(65.3,19.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_145.setTransform(46.5,19.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgFAAgJQAAgIADgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGADQAGAEAKADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_146.setTransform(16.2,19.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_147.setTransform(3.9,19.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_148.setTransform(-22.3,19.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_149.setTransform(-58,15.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_150.setTransform(-90.6,19.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_151.setTransform(-101.5,19.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_152.setTransform(-120,19.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFAEAEAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgDAIgBAJQABAJADAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_153.setTransform(-134.4,15.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgFAAgJQAAgIADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGADQAGAEAKADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAHgHAEQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_154.setTransform(-153,19.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_155.setTransform(-164.9,19.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_156.setTransform(-178.4,19.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_157.setTransform(-192,19.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_158.setTransform(-202,16.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_159.setTransform(-219.3,16.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_160.setTransform(-229.9,15.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_161.setTransform(-243.7,19.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_162.setTransform(-257.3,19.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgHgCQgGgCgEgDQgFgDgDgFQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgOAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFADQAGAEAKADIAQADQAMADAIAHQAHAJAAAMQAAAIgEAHQgDAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_163.setTransform(204,-9.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_164.setTransform(192.3,-9.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_165.setTransform(167.3,-9.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_166.setTransform(152.9,-12.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_167.setTransform(132.2,-9.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_168.setTransform(110.6,-12.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAHABIAJgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_169.setTransform(103.8,-11);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgDgFAAgJQAAgIADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgGgFQgFgEgJAAIgIABIgHADIgGAGQgBADAAAEQgBAIAGADQAFAEALADIAQADQALADAIAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_170.setTransform(94.8,-9.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAJgLAEQgLAEgNABQgMgBgLgEgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAJAEAJQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgEgKAAQgJAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_171.setTransform(82.5,-12.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_172.setTransform(68.5,-9.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGADgIQABgIAAgJIAAgUIAAAAQgHALgLAFQgMAFgMAAQgLAAgLgFQgKgEgIgHQgJgIgEgKQgEgKAAgMQAAgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIALAGQAFAFAFAGIAAAAIAAgTIARAAIAABvQgBAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgRAAgNgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIABAJQgBAJAEAIQADAIAGAEQAGAGAHAEQAIADAHAAQAJAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgIgDgKAAQgHAAgIADg");
	this.shape_173.setTransform(54.4,-6.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_174.setTransform(40.8,-9.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_175.setTransform(32,-12.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_176.setTransform(21.5,-12.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_177.setTransform(-4.6,-9.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_178.setTransform(-30.2,-9.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIAMgHQAFgDAHgBIAKgBQAOAAALAFQALAEAHAHQAIAIAEALQAFALAAANQAAANgFAKQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBIgMgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgDAJQgEAHAAAKQAAAJAEAJQADAHAGAGQAGAGAIADQAIADAJABQAKgBAIgDQAHgDAHgGQAFgGADgHQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_179.setTransform(-43,-6.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_180.setTransform(-53.6,-12.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_181.setTransform(-74.9,-9.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_182.setTransform(-84.3,-12.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAQAAIAAAVIAAAAQABgEAEgFQADgEAEgDQAEgEAGgCQAGgBAHAAIAMABIgDAQQgDgCgGAAQgJAAgHAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_183.setTransform(-90.1,-9.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIAKgHQAGgDAGgBIALgBQAOAAAKAFQALAEAIAHQAIAIAFALQAEALAAANQAAANgEAKQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBIgMgEIgKgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgEAJQgCAHAAAKQAAAJACAJQAEAHAGAGQAGAGAIADQAIADAJABQAKgBAIgDQAIgDAFgGQAGgGACgHQAEgJAAgJQAAgKgEgHQgCgJgGgGQgFgGgIgEQgIgDgKAAQgJAAgIADg");
	this.shape_184.setTransform(-102,-6.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_185.setTransform(-123.3,-9.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_186.setTransform(-132.6,-12.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#111111").s().p("AgNBcIAAhhIgYAAIAAgOIAYAAIAAgfQAAgWAKgKQAKgJARAAIAGAAIAIACIgEAOIgFgBIgHgBQgGAAgEACQgEADgDAEIgCAJIgBALIAAAdIAbAAIAAAOIgbAAIAABhg");
	this.shape_187.setTransform(-138.5,-13.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_188.setTransform(-156.4,-9.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGADgDAHQgEAFgCAHIgBAQIAAA7IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGABQgFACgGAEQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_189.setTransform(-173.9,-9.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgLAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEALQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAHAAAJQAAAJAEAJQACAHAGAGQAFAHAIADQAIADAJABQAKgBAHgDQAIgDAGgHQAFgGADgHQADgJAAgJQAAgJgDgHQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_190.setTransform(-191.1,-9.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_191.setTransform(-223.1,-9.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_192.setTransform(-236.6,-9.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_193.setTransform(-249.8,-9.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_194.setTransform(-259.3,-12.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICDAAIAAAQIg6AAIAACZg");
	this.shape_195.setTransform(-269.1,-12.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#111111").s().p("AgeA6IAAhMIgBgQIAAgUIAQAAIAAAVIAAAAQABgEAEgFQADgEAEgDQAEgEAGgCQAFgBAIAAIAMABIgDAQQgEgCgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_196.setTransform(263.4,19.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQAEgHAEgDIALgHQAHgDAGgBIAKgBQANAAAMAFQAKAEAIAHQAIAIAEALQAFALAAANQAAANgFAKQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBIgNgEIgLgHQgEgEgEgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgEAJQgCAHAAAKQAAAJACAJQAEAHAGAGQAGAGAIADQAJADAIABQAKgBAIgDQAIgDAFgGQAGgGACgHQAEgJAAgJQAAgKgEgHQgCgJgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_197.setTransform(251.4,22.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAFADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgDAIAAAJQAAAJADAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_198.setTransform(157.4,15.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#111111").s().p("AgeA6IAAhMIgBgQIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgDQAEgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_199.setTransform(126.6,19.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgFgCgCgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAGABIAIgBIAIgDIABAOQgIAFgNAAIgJgBg");
	this.shape_200.setTransform(117.6,17.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCACgEQABgDABgEIABgJIAAiDIAPAAIAACGIAAAIQgBAGgCAGQgDAGgHAFQgGAEgMAAQgGAAgGgCgAAFhbQgEgEAAgFQAAgFAEgDQADgDAFAAQADAAAEADQAEADAAAFQAAAFgEAEQgEADgDAAQgFAAgDgDg");
	this.shape_201.setTransform(47.3,19.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#111111").s().p("AgLBbIgLgEIgLgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIALgHQAFgDAGgBIALgBQAOAAAKAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAIgDAFgGQAGgGACgIQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_202.setTransform(26.2,15.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#111111").s().p("AgeA6IAAhMIgBgQIAAgUIAPAAIAAAVIABAAQACgEADgFQADgEAFgDQADgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_203.setTransform(3.1,19.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#111111").s().p("AgIBVIAAiZIg5AAIAAgQICCAAIAAAQIg4AAIAACZg");
	this.shape_204.setTransform(-8.8,16.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQALgFANAAIALABQAHABAGADIALAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgLAHIgNAEIgLABQgNAAgLgEgAgRgHQgIADgFAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_205.setTransform(-89.1,15.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#111111").s().p("AgeBUQgOgHgKgNIAQgLQAFAJAKAGQAKAFANABQAGAAAGgCQAHgDAFgDQAFgEAEgGQADgGAAgIQAAgIgEgGQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgFQgGgGgDgIQgEgIAAgLQAAgNAFgIQAEgKAIgFQAIgGAKgDQAJgDAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVgBQgGABgGACQgHABgFAEQgFAEgDAFQgDAGAAAJQAAALAGAGQAHAHAJADIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAGgKAEQgKAEgJAAQgQgBgOgFg");
	this.shape_206.setTransform(-134.3,16.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFACAHAAQAIAAAFgEQAFgGADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_207.setTransform(-153.4,22.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#111111").s().p("AgeA6IAAhMIAAgQIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgDQADgEAGgCQAFgBAIAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_208.setTransform(-216.3,19.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_209.setTransform(-228,19.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#111111").s().p("AgeBUQgOgHgKgNIAQgLQAFAJAKAGQAKAFANABQAGAAAGgCQAHgDAFgDQAFgEAEgGQADgGAAgIQAAgIgEgGQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgFQgGgGgDgIQgEgIAAgLQAAgNAFgIQAEgKAIgFQAIgGAKgDQAJgDAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVgBQgGABgGACQgHABgFAEQgFAEgDAFQgDAGAAAJQAAALAGAGQAHAHAJADIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAGgKAEQgKAEgJAAQgQgBgOgFg");
	this.shape_210.setTransform(-269.3,16.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAFABAGADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgHADgGAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_211.setTransform(205.3,-12.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgFgBgJQABgIADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_212.setTransform(186.7,-9.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQABADADAAIAHABIAJgBIAIgDIAAAOQgJAFgMAAIgJgBg");
	this.shape_213.setTransform(163.3,-11);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_214.setTransform(139.3,-9.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGADgDAHQgEAFgCAHIgBAQIAAA7IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGABQgFACgGAEQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_215.setTransform(122.2,-9.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_216.setTransform(105.6,-9.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_217.setTransform(72.6,-9.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgDQAEgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgFAAQgJAAgHAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_218.setTransform(63,-9.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFACAHAAQAIAAAFgEQAFgGADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_219.setTransform(45.6,-6.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgFAAgJQAAgIAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgGgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFADQAGAEAKADIAQADQALADAJAHQAHAJABAMQgBAIgEAHQgDAGgHAFQgFAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_220.setTransform(28.1,-9.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_221.setTransform(16.4,-9.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGADgDAHQgEAFgCAHIgBAQIAAA7IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGABQgFACgGAEQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_222.setTransform(0.1,-9.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgDQADgEAGgCQAFgBAIAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_223.setTransform(-12.9,-9.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgFAAgJQAAgIADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGADQAGAEAKADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_224.setTransform(-57.2,-9.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_225.setTransform(-68.9,-9.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_226.setTransform(-93.7,-9.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgGACgIQACgIAAgJIAAgUIAAAAQgIALgLAFQgLAFgMAAQgLAAgLgFQgLgEgHgHQgJgIgEgKQgEgKgBgMQABgNAEgKQAEgLAIgIQAHgIALgEQAKgEAMAAIAKAAQAGABAGADIAKAGQAGAFAFAGIAAAAIAAgTIAQAAIAABvQAAAJgCAKQgCALgHAIQgGAJgMAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIAAAJQAAAJADAIQADAIAGAEQAGAGAHAEQAIADAIAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgIgDgJAAQgIAAgIADg");
	this.shape_227.setTransform(-118.8,-6.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#111111").s().p("AgIA4IgthvIASAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_228.setTransform(-137.3,-9.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#111111").s().p("AgsBVIgHgBIACgQQAFACAHAAQAIAAAFgEQAFgGADgKIAJgVIguhxIATAAIAjBcIAihcIATAAIg3CNQgFANgIAHQgIAIgOAAIgIAAg");
	this.shape_229.setTransform(-155.5,-6.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_230.setTransform(-174.6,-9.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_231.setTransform(-199.5,-9.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#111111").s().p("AgmAuQgKgLAAgVIAAhHIAQAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAJAAIAHgBQAFgBAGgEQAGgEAFgJQAEgJABgPIAAg5IAQAAIAABXIAAAMIABANIgRAAIAAgJIAAgJIgIAIQgEAEgFADQgEADgGABIgKACQgWAAgLgMg");
	this.shape_232.setTransform(-212.9,-9.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGADgDAHQgEAFgCAHIgBAQIAAA7IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGABQgFACgGAEQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWgBAKALQAKAMAAAWIAABGg");
	this.shape_233.setTransform(-230,-9.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgDQAEgEAGgCQAFgBAIAAIAMABIgDAQQgEgCgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_234.setTransform(-257.2,-9.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPAMAAAWQAAAXgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgEQAFgFACgFQACgFAAgHQAAgFgCgGQgCgGgFgDQgFgEgIgDQgIgCgLAAIgbAAg");
	this.shape_235.setTransform(-268.4,-12.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKAMQALALAAAWIAABGg");
	this.shape_236.setTransform(-104.8,47.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#111111").s().p("AgIA4IguhvIAUAAIAiBeIABAAIAkheIASAAIguBvg");
	this.shape_237.setTransform(-150.7,48);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKAMQALALAAAWIAABGg");
	this.shape_238.setTransform(-170.1,47.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#111111").s().p("AgXBSQgLgEgIgIQgIgJgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAJQgIAIgLAEQgLAEgNABQgMgBgLgEgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAJAEAJQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgEgKAAQgJAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_239.setTransform(-183.7,45.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgFAAgIQAAgJADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGADQAGAEAKADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_240.setTransform(-231.3,48);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_241.setTransform(-249.9,50.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#111111").s().p("AgYA2QgKgFgIgMIANgJQAFAHAIAFQAGAEAKABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgEgFAAgJQAAgIAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgDADAAAEQAAAIAGADQAFAEALADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_242.setTransform(182.1,19.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIAMABQAFABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgLAEIgMABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_243.setTransform(155.9,15.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#111111").s().p("AgeA6IAAhMIgBgQIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgDQAEgEAGgCQAFgBAIAAIAMABIgDAQQgEgCgFAAQgKAAgGAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_244.setTransform(146,19.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCACgEQABgDABgEIAAgJIAAiDIAQAAIAACGIAAAIQgBAGgCAGQgDAGgHAFQgGAEgMAAQgGAAgGgCgAAEhbQgDgEAAgFQAAgFADgDQAEgDAFAAQADAAAEADQAEADAAAFQAAAFgEAEQgEADgDAAQgFAAgEgDg");
	this.shape_245.setTransform(71.1,19.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#111111").s().p("AgLBbIgLgEIgLgHQgGgEgDgFIgBAAIAAASIgQAAIAAi0IAQAAIAABYIABAAQADgGAGgEIALgHQAFgDAGgBIALgBQAOAAAKAFQALAEAIAIQAIAIAFAKQAEAKAAANQAAANgEALQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBgAgRgHQgIADgGAFQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAIgDAFgGQAGgGADgIQADgJAAgJQAAgJgDgIQgDgJgGgGQgFgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_246.setTransform(50.1,15.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAHABIAIgBIAHgDIACAOQgJAFgNAAIgKgBg");
	this.shape_247.setTransform(18,17.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgOgEIgJgCQgEgCgFgDQgFgDgDgFQgEgFABgJQgBgIAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgEgHgGgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGADQAFAEALADIAQADQALADAIAHQAJAJAAAMQAAAIgFAHQgDAHgHAEQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_248.setTransform(-32.3,19.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgDIABAOQgJAFgNAAIgKgBg");
	this.shape_249.setTransform(-54.8,17.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#111111").s().p("AgeA6IAAhMIgBgQIAAgUIAPAAIAAAVIABAAQACgEADgFQADgEAFgDQADgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_250.setTransform(-205.7,19.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAHABIAIgBIAHgDIACAOQgJAFgNAAIgKgBg");
	this.shape_251.setTransform(-214.6,17.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#111111").s().p("AgeA6IAAhNIgBgPIAAgUIAQAAIAAAVIAAAAQACgEADgFQADgEAEgDQAEgEAGgCQAGgBAHAAIAMABIgDAQQgEgCgGAAQgJAAgGAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_252.setTransform(203.7,-9.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIALgHQAGgDAHgBIAKgBQAOAAALAFQALAEAHAHQAIAIAEALQAFALAAANQAAANgFAKQgEAKgIAIQgHAIgLAFQgLAEgOAAIgKgBIgNgEIgLgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgEAJQgDAHAAAKQAAAJADAJQAEAHAGAGQAGAGAIADQAIADAJABQAKgBAIgDQAHgDAHgGQAFgGACgHQAEgJAAgJQAAgKgEgHQgCgJgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_253.setTransform(191.8,-6.3);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIAMABQAFABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgLAEIgMABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_254.setTransform(156.4,-12.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgIgCQgFgCgEgDQgFgDgDgFQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADgBAEQABAIAFADQAGAEAKADIAQADQAMADAHAHQAIAJAAAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_255.setTransform(137.7,-9.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGADgIQACgIAAgJIAAgUIgBAAQgIALgKAFQgMAFgMAAQgLAAgLgFQgLgEgIgHQgHgIgFgKQgFgKABgMQgBgNAFgKQAEgLAHgIQAJgIAJgEQALgEANAAIAJAAQAGABAFADIAMAGQAFAFAFAGIABAAIAAgTIAQAAIAABvQAAAJgDAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgEAIAAAJQAAAJAEAIQADAIAGAEQAGAGAHAEQAHADAIAAQAJAAAIgDQAIgDAGgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgFgGQgGgGgIgEQgHgDgLAAQgIAAgHADg");
	this.shape_256.setTransform(106.7,-6.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIAEAGQABADADAAIAHABIAIgBIAIgDIABAOQgJAFgMAAIgJgBg");
	this.shape_257.setTransform(82.4,-11);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIAEAGQABADADAAIAHABIAIgBIAIgDIABAOQgJAFgMAAIgJgBg");
	this.shape_258.setTransform(54.1,-11);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADgBAEQABAIAFADQAGAEAKADIAQADQAMADAHAHQAIAJAAAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_259.setTransform(45,-9.6);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_260.setTransform(33.2,-9.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgDQADgEAGgCQAFgBAIAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_261.setTransform(16.9,-9.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#111111").s().p("AAFBJQgFgCgDgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQACADAEAAIAHABIAIgBIAHgDIACAOQgJAFgNAAIgKgBg");
	this.shape_262.setTransform(-4.5,-11);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_263.setTransform(-28.5,-9.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_264.setTransform(-62.3,-9.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQAEgHAFgDIAKgHQAHgDAFgBIALgBQAOAAAKAFQALAEAIAHQAIAIAFALQAEALAAANQAAANgEAKQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBIgMgEIgKgHQgFgEgEgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgEAJQgCAHAAAKQAAAJACAJQAEAHAGAGQAGAGAIADQAJADAIABQAKgBAIgDQAIgDAFgGQAGgGACgHQAEgJAAgJQAAgKgEgHQgCgJgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_265.setTransform(-81.7,-6.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_266.setTransform(-128.9,-9.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_267.setTransform(-163.4,-9.6);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#111111").s().p("AgfBRQgNgGgLgLIAMgNQAHAKALAFQALAGAOAAQALAAAIgEQAJgDAFgGQAFgGACgIQACgIABgJIAAgUIgBAAQgIALgLAFQgKAFgNAAQgLAAgLgFQgKgEgJgHQgHgIgFgKQgFgKAAgMQAAgNAFgKQAEgLAHgIQAIgIAKgEQALgEANAAIAJAAQAGABAFADIALAGQAGAFAFAGIABAAIAAgTIAPAAIAABvQAAAJgCAKQgCALgHAIQgHAJgLAGQgMAFgSAAQgQAAgOgFgAgPhEQgHAEgGAGQgGAGgDAHQgDAIgBAJQABAJADAIQADAIAGAEQAGAGAHAEQAHADAJAAQAIAAAIgDQAHgDAHgFQAGgFADgIQADgIAAgKQAAgJgDgIQgDgHgGgGQgFgGgIgEQgHgDgKAAQgJAAgHADg");
	this.shape_268.setTransform(-177,-6.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgDQADgEAGgCQAFgBAIAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_269.setTransform(-186.9,-9.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHACAGAFQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAEQgGAFAAAJQAAAFADAFQACAEAEACQAEADAEABIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgHAAgGIAAgJIgIAAIgPABg");
	this.shape_270.setTransform(-198.5,-9.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_271.setTransform(-236,-9.6);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgLAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAIAGAFQAFAFAHADQAHAEAIAAQANAAAJgHQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_272.setTransform(-256,-9.6);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#111111").s().p("AgeBUQgOgHgKgNIAQgLQAFAJAKAGQAKAFANABQAGAAAGgCQAHgDAFgDQAFgEAEgGQADgGAAgIQAAgIgEgGQgDgGgHgEQgGgEgIgCIgPgGIgQgGQgHgCgHgFQgGgGgDgIQgEgIAAgLQAAgNAFgIQAEgKAIgGQAIgFAKgEQAJgCAKAAQAOAAAMAEQAMAFAKALIgPAMQgMgQgVgBQgGABgGACQgHABgFAEQgFAEgDAFQgDAGAAAJQAAALAGAGQAHAHAJADIAUAIQAMADAJAFQAKAFAGAJQAHAJAAAPQAAALgFAKQgFAJgIAGQgIAGgKAEQgKAEgJAAQgQgBgOgFg");
	this.shape_273.setTransform(-269.3,-12.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#111111").s().p("AgPBVIAAhvIAPAAIAABvgAgWgyIAXgiIAWAAIgfAig");
	this.shape_274.setTransform(85.8,16.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#111111").s().p("AAhBSIAAg+QAAgTgGgJQgHgKgRAAIgGABQgGABgGAFQgGAEgFAHQgFAJAAAQIAAA5IgPAAIAAhXIgBgLIgBgNIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgFIALgBQAVAAAKALQALALAAAVIAABHgAgkg3IACgJIAFgIQACgEAEgCQAEgCAFAAQAFAAAEABIAIAFIAIADQAEACAEAAQAFAAADgEIAEgIIAKAAIgCAJIgEAIQgDADgEACQgEADgFAAQgEAAgFgCIgJgEIgHgDIgIgCQgFAAgDAEIgEAIg");
	this.shape_275.setTransform(75.2,16.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAFgHAEgDIAMgHQAGgDAFgBIALgBQANAAAMAFQALAEAHAHQAIAIAEALQAFALAAANQAAANgFAKQgEAKgIAIQgHAIgLAFQgMAEgNAAIgLgBIgLgEIgMgHQgEgEgFgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgDAJQgEAHAAAKQAAAJAEAJQADAHAGAGQAGAGAIADQAIADAJABQAKgBAIgDQAHgDAHgGQAFgGADgHQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgEQgIgDgKAAQgJAAgIADg");
	this.shape_276.setTransform(49.3,22.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#111111").s().p("AgeA6IAAhMIAAgQIgBgUIAQAAIAAAVIAAAAQABgEAEgFQADgEAEgDQAEgEAGgCQAGgBAHAAIAMABIgDAQQgDgCgGAAQgJAAgHAEQgGADgEAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_277.setTransform(-64.9,19.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJABAHQACAHADAFQAEAFAGADQAFACAKAAIAFgBQAGgBAGgEQAGgEAFgJQAFgJgBgPIAAg5IAQAAIAABXIABAMIAAANIgPAAIgBgJIgBgJIgGAIQgFAEgEADQgGADgFABIgLACQgVAAgKgMg");
	this.shape_278.setTransform(-151.7,19.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#111111").s().p("AAsBcIAAhYIAAAAQgEAGgFAEIgLAHIgNAEIgLABQgMAAgMgEQgKgFgIgIQgIgIgEgKQgFgKAAgNQAAgNAFgLQAEgLAIgIQAIgHAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFADAEAHIAAAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgFAGgDAJQgEAHAAAKQAAAJAEAJQADAHAFAGQAGAGAHADQAIADAJABQAJgBAJgDQAIgDAGgGQAGgGAEgHQADgJAAgJQAAgKgDgHQgEgJgGgGQgGgGgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_279.setTransform(-166,22.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAIAFQAGAEAKABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgEgFAAgJQAAgIAEgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgDADAAAEQAAAIAGADQAFAEALADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAHgHAEQgFAEgIACQgIACgIAAQgMAAgMgFg");
	this.shape_280.setTransform(-184.6,19.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAHAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgIgCQgFgCgEgDQgFgDgDgFQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFADQAGAEAKADIAQADQAMADAHAHQAIAJAAAMQAAAIgDAHQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_281.setTransform(-234.9,19.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIALgHQAGgDAFgBIALgBQANAAALAFQALAEAIAHQAIAIAFALQAEALAAANQAAANgEAKQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgDAJQgDAHgBAKQABAJADAJQADAHAGAGQAGAGAIADQAJADAIABQAKgBAIgDQAHgDAHgGQAFgGADgHQADgJAAgJQAAgKgDgHQgDgJgFgGQgHgGgHgEQgIgDgKAAQgIAAgJADg");
	this.shape_282.setTransform(-268.3,22.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQACgEADgFQADgEAFgDQADgEAGgCQAGgBAHAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_283.setTransform(236.8,-9.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADADAAIAHABIAIgBIAIgDIABAOQgJAFgNAAIgKgBg");
	this.shape_284.setTransform(227.8,-11);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#111111").s().p("AAGBJQgFgCgEgEQgDgCgDgHQgDgFAAgJIAAhGIgYAAIAAgPIAYAAIAAgfIAPAAIAAAfIAgAAIAAAPIggAAIAABBIABAKIADAGQADADADAAIAHABIAHgBIAIgDIABAOQgJAFgMAAIgJgBg");
	this.shape_285.setTransform(172.3,-11);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#111111").s().p("AgNBcIAAhhIgYAAIAAgOIAYAAIAAgfQAAgWAKgKQAKgJARAAIAHAAIAHACIgEAOIgFgBIgHgBQgGAAgEACQgEADgDAEIgCAJIgBALIAAAdIAbAAIAAAOIgbAAIAABhg");
	this.shape_286.setTransform(142.2,-13.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgFAAgJQAAgIADgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGADQAGAEAKADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_287.setTransform(52.6,-9.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgDgFAAgJQAAgIADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgEgHgGgFQgFgEgJAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGADQAFAEALADIAQADQALADAIAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_288.setTransform(28.2,-9.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#111111").s().p("AAhA6IAAg9QAAgUgGgKQgHgJgRgBIgGABQgGACgGAEQgGAEgFAJQgFAJAAAOIAAA6IgPAAIAAhXIgBgLIgBgOIARAAIAAAJIAAAJIABAAIAHgJIAJgGIAKgEIALgBQAVgBAKALQALAMAAAWIAABGg");
	this.shape_289.setTransform(-222.8,-9.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_290.setTransform(217.6,52.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgFAAgIQAAgJADgHQAEgGAGgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGADQAGAEAKADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_291.setTransform(209.2,48);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#111111").s().p("AgLBbIgLgEIgMgHQgEgEgFgFIAAAAIAAASIgQAAIAAi0IAQAAIAABYIAAAAQAFgGAEgEIAMgHQAGgDAFgBIALgBQANAAALAFQAMAEAHAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgHAIgMAFQgLAEgNAAIgLgBgAgRgHQgIADgGAFQgGAGgDAJQgEAIAAAJQAAAJAEAJQADAIAGAGQAGAGAIADQAIAEAJAAQAKAAAIgEQAHgDAHgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgGQgHgFgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_292.setTransform(178,44.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAHABIAIgBIAJgDIABAOQgKAFgMAAIgJgBg");
	this.shape_293.setTransform(160.6,46.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgFgBgIQABgJADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_294.setTransform(151.6,48);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGADgDAHQgEAFgCAHIgBAQIAAA7IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGABQgFACgGAEQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWgBAKAMQAKALAAAWIAABGg");
	this.shape_295.setTransform(108,47.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#111111").s().p("ABFA6IAAhBQAAgRgGgJQgGgKgRAAQgJAAgGAEQgGADgDAHQgEAFgCAHIgBAQIAAA7IgPAAIAAhBQAAgRgGgJQgGgKgRAAIgGABQgFACgGAEQgFAEgFAJQgEAJAAAOIAAA6IgQAAIAAhXIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgKAKgHQALgFALAAQAWgBAKAMQAKALAAAWIAABGg");
	this.shape_296.setTransform(-3.1,47.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#111111").s().p("AglAuQgKgLAAgVIAAhHIAPAAIAAA+QAAAJACAHQABAHADAFQAEAFAGADQAFACAKAAIAGgBQAFgBAGgEQAGgEAFgJQAFgJAAgPIAAg5IAPAAIAABXIABAMIAAANIgPAAIgBgJIAAgJIgHAIQgFAEgEADQgFADgGABIgLACQgVAAgKgMg");
	this.shape_297.setTransform(-25.6,48.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#111111").s().p("AAsBcIAAhXIgBAAQgEAFgFAEIgKAHIgNAEIgLABQgMAAgMgEQgKgFgIgIQgIgIgFgKQgEgKAAgNQAAgNAEgLQAFgLAIgIQAIgHAKgEQAMgFAMAAIALABQAGABAHADIAKAHQAFADAEAHIABAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgFAGgDAJQgDAHgBAKQABAJADAJQADAHAFAGQAGAGAHADQAIADAJABQAJgBAJgDQAIgDAGgGQAGgGAEgHQADgJAAgJQAAgKgDgHQgEgJgGgGQgGgGgIgEQgJgDgJAAQgJAAgIADg");
	this.shape_298.setTransform(-39.9,51.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#111111").s().p("AgYA2QgLgFgIgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgJgCIgNgEIgIgCQgFgCgFgDQgFgDgDgFQgDgFAAgIQAAgJADgHQAEgGAFgEQAGgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgFgFQgHgEgIAAIgIABIgHADIgFAGQgCADgBAEQAAAIAGADQAGAEAKADIAQADQALADAJAHQAHAJABAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgMAAgMgFg");
	this.shape_299.setTransform(-58.5,48);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgOgEIgJgCQgEgCgFgDQgFgDgDgFQgEgFABgIQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgEgHgGgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGADQAFAEALADIAQADQALADAIAHQAJAJAAAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_300.setTransform(-132.2,48);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgFgBgIQABgJADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFADQAFAEALADIAQADQAMADAHAHQAJAJgBAMQAAAIgDAHQgEAGgGAFQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_301.setTransform(-155.8,48);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#111111").s().p("AgYA2QgKgFgJgMIAOgJQAFAHAHAFQAIAEAJABIAJgBQAFgBAEgDQAEgCACgEQACgDAAgFQAAgIgGgFQgHgDgIgCIgOgEIgJgCQgEgCgFgDQgFgDgDgFQgEgFABgIQgBgJAEgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgEgHgGgFQgHgEgIAAIgIABIgHADIgFAGQgCADAAAEQgBAIAGADQAFAEALADIAQADQALADAIAHQAJAJAAAMQAAAIgFAHQgDAGgHAFQgGAEgHACQgIACgIAAQgNAAgLgFg");
	this.shape_302.setTransform(-270.8,48);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#111111").s().p("AgXBuIACgOIABABIAEABIAEAAQAGAAADgCQADgCACgEQABgDABgEIABgJIAAiDIAPAAIAACGIAAAIQgBAGgCAGQgDAGgHAFQgGAEgMAAQgGAAgGgCgAAFhbQgEgEgBgFQABgFAEgDQADgDAFAAQAEAAADADQAEADAAAFQAAAFgEAEQgDADgEAAQgFAAgDgDg");
	this.shape_303.setTransform(201.5,19.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAIAFQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgOgEIgHgCQgGgCgEgDQgFgDgDgFQgDgFgBgJQABgIADgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAGALIgPAKQgDgHgHgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFADQAGAEAKADIAQADQAMADAIAHQAHAJAAAMQAAAIgDAHQgEAHgGAEQgHAEgIACQgHACgIAAQgMAAgLgFg");
	this.shape_304.setTransform(38.8,19.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIABAAQADgHAGgDIALgHQAFgDAGgBIALgBQANAAALAFQALAEAIAHQAIAIAFALQAEALAAANQAAANgEAKQgFAKgIAIQgIAIgLAFQgLAEgNAAIgLgBIgLgEIgLgHQgGgEgDgGIgBAAIAABYgAgRhKQgIAEgGAGQgGAGgDAJQgDAHAAAKQAAAJADAJQADAHAGAGQAGAGAIADQAJADAIABQAKgBAIgDQAIgDAGgGQAFgGADgHQADgJAAgJQAAgKgDgHQgDgJgFgGQgGgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_305.setTransform(5.4,22.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIADAGQADADACAAIAIABIAIgBIAIgDIABAOQgJAFgNAAIgKgBg");
	this.shape_306.setTransform(-82.7,17.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#111111").s().p("AgeA6IAAhMIAAgQIgBgUIAPAAIAAAVIABAAQACgEADgFQADgEAFgDQADgEAGgCQAGgBAHAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_307.setTransform(-103.9,19.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_308.setTransform(-150.4,15.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgJIAAhGIgXAAIAAgPIAXAAIAAgfIAPAAIAAAfIAhAAIAAAPIghAAIAABBIABAKIAEAGQACADACAAIAIABIAIgBIAIgDIABAOQgKAFgMAAIgKgBg");
	this.shape_309.setTransform(-192.4,17.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgFAMAAIALABQAGABAGADIAMAHQAEAEAFAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgFAFgEAEIgMAHIgMAEIgLABQgMAAgLgEgAgRgHQgHADgGAFQgFAGgEAJQgDAIAAAJQAAAJADAJQAEAIAFAGQAGAGAHADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_310.setTransform(134.8,-12.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAJgLAEQgLAEgNABQgMgBgLgEgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAJAEAJQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgEgKAAQgJAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_311.setTransform(100.7,-12.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#111111").s().p("AgYA2QgLgFgHgMIANgJQAFAHAIAFQAGAEAKABIAJgBQAFgBAEgDQADgCADgEQACgDAAgFQAAgIgGgFQgGgDgKgCIgNgEIgIgCQgGgCgEgDQgFgDgDgFQgEgFAAgJQAAgIAEgHQADgGAHgEQAFgEAHgCQAIgCAHAAQAMAAAKAFQAKAEAFALIgNAKQgFgHgGgFQgFgEgJAAIgHABIgIADIgGAGQgCADAAAEQABAIAFADQAGAEAKADIAQADQALADAJAHQAHAJABAMQgBAIgEAHQgDAGgGAFQgGAEgJACQgHACgIAAQgMAAgMgFg");
	this.shape_312.setTransform(65.5,-9.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#111111").s().p("Ag7BcIAAi0IAQAAIAAATIAAAAQAEgHAFgDIALgHQAHgDAGgBIAKgBQANAAAMAFQAKAEAIAHQAIAIAEALQAFALAAANQAAANgFAKQgEAKgIAIQgIAIgKAFQgMAEgNAAIgKgBIgNgEIgLgHQgFgEgEgGIAAAAIAABYgAgRhKQgIAEgGAGQgGAGgEAJQgDAHAAAKQAAAJADAJQAEAHAGAGQAGAGAIADQAJADAIABQAKgBAIgDQAIgDAFgGQAGgGACgHQAEgJAAgJQAAgKgEgHQgCgJgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_313.setTransform(39.1,-6.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#111111").s().p("AgeA6IAAhNIAAgPIgBgUIAPAAIAAAVIABAAQABgEAEgFQADgEAFgDQADgEAGgCQAFgBAIAAIAMABIgDAQQgDgCgHAAQgIAAgHAEQgFADgFAGQgEAFgCAGQgCAHAAAFIAAA/g");
	this.shape_314.setTransform(15.1,-9.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#111111").s().p("AgXBSQgLgEgIgJQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIALgEQALgFAMABQANgBALAFQALAEAIAIQAIAIAEAKQAFAKAAANQAAANgFALQgEAKgIAIQgIAJgLAEQgLAEgNABQgMgBgLgEgAgRgNQgIADgFAHQgGAEgCAJQgEAIAAAJQAAAJAEAJQACAIAGAGQAFAGAIAEQAIADAJAAQAKAAAHgDQAIgEAGgGQAFgGADgIQADgJAAgJQAAgJgDgIQgDgJgFgEQgGgHgIgDQgHgEgKAAQgJAAgIAEgAgOgzIAXgiIAWAAIgfAig");
	this.shape_315.setTransform(-35.2,-12.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#111111").s().p("AgHBUIAAhwIAPAAIAABwgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADgBQAEABAEADQAEADAAAFQAAAFgEADQgEADgEABQgDgBgEgDg");
	this.shape_316.setTransform(-78.5,-12.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#111111").s().p("AgmAuQgJgLgBgVIAAhHIAQAAIAAA+QAAAJABAHQACAHAEAFQADAFAGADQAGACAIAAIAGgBQAGgBAGgEQAGgEAFgJQAEgJAAgPIAAg5IARAAIAABXIAAAMIAAANIgQAAIAAgJIgBgJIgHAIQgDAEgGADQgFADgFABIgKACQgWAAgLgMg");
	this.shape_317.setTransform(-88.1,-9.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#111111").s().p("AAsBcIAAhYIAAAAQgFAGgEAEIgMAHIgMAEIgLABQgMAAgMgEQgKgFgIgIQgIgIgEgKQgFgKAAgNQAAgNAFgLQAEgLAIgIQAIgHAKgEQAMgFAMAAIALABQAGABAGADIAMAHQAEADAFAHIAAAAIAAgTIAQAAIAAC0gAgRhKQgHAEgGAGQgFAGgEAJQgDAHAAAKQAAAJADAJQAEAHAFAGQAGAGAHADQAIADAJABQAKgBAIgDQAIgDAGgGQAGgGADgHQAEgJAAgJQAAgKgEgHQgDgJgGgGQgGgGgIgEQgIgDgKAAQgJAAgIADg");
	this.shape_318.setTransform(-102.4,-6.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#111111").s().p("Ag0BVIAAipIAyAAQAZAAAPALQAPAMAAAWQAAAXgPALQgPALgZAAIggAAIAABPgAgigJIAbAAQALAAAIgCQAIgCAFgEQAFgFACgFQACgFAAgHQAAgFgCgGQgCgGgFgDQgFgEgIgDQgIgCgLAAIgbAAg");
	this.shape_319.setTransform(-268.4,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121,p:{x:-112.3,y:-21.8}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118,p:{x:-72.8,y:-21.8}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{x:217.8,y:-21.7}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{x:279.2,y:-18.2}},{t:this.shape_88},{t:this.shape_87,p:{x:302.2,y:-21.8}},{t:this.shape_86,p:{x:307.9,y:-21.8}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-122.7,y:10.4}},{t:this.shape_70},{t:this.shape_69,p:{x:-97.9,y:7.1}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:0.7,y:7.1}},{t:this.shape_61,p:{x:15,y:10.6}},{t:this.shape_60,p:{x:27.9,y:10.4}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:56.5,y:7}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:94.9,y:10.4}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:157.6,y:10.4}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:209.2,y:10.4}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{y:42,x:-242.3}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:-202.7,y:39.2}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:-171,y:45.4}},{t:this.shape_31,p:{x:-158.1,y:35.8}},{t:this.shape_30,p:{x:-148.6,y:39.4}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:-86,y:35.9}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:43.3,y:39.2}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:95.7,y:35.9}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:185.5,y:42}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:226,y:39.2}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_195},{t:this.shape_194,p:{x:-259.3}},{t:this.shape_193,p:{x:-249.8,y:-9.6}},{t:this.shape_192,p:{x:-236.6}},{t:this.shape_191,p:{x:-223.1,y:-9.6}},{t:this.shape_60,p:{x:-203.6,y:-9.6}},{t:this.shape_190,p:{x:-191.1}},{t:this.shape_189,p:{x:-173.9,y:-9.7}},{t:this.shape_188,p:{x:-156.4}},{t:this.shape_187},{t:this.shape_186,p:{x:-132.6}},{t:this.shape_185,p:{x:-123.3}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182,p:{x:-84.3}},{t:this.shape_181,p:{x:-74.9,y:-9.7}},{t:this.shape_54,p:{x:-61.9,y:-9.6}},{t:this.shape_180,p:{x:-53.6}},{t:this.shape_179},{t:this.shape_178,p:{x:-30.2,y:-9.6}},{t:this.shape_121,p:{x:-20.8,y:-13.1}},{t:this.shape_177,p:{x:-4.6,y:-9.6}},{t:this.shape_118,p:{x:5,y:-13.1}},{t:this.shape_176},{t:this.shape_175,p:{x:32,y:-12.3}},{t:this.shape_174,p:{x:40.8,y:-9.6}},{t:this.shape_173,p:{x:54.4}},{t:this.shape_172,p:{x:68.5,y:-9.7}},{t:this.shape_171,p:{x:82.5,y:-12.3}},{t:this.shape_170},{t:this.shape_169,p:{x:103.8,y:-11}},{t:this.shape_168,p:{x:110.6,y:-12.3}},{t:this.shape_49,p:{x:119.7,y:-9.6}},{t:this.shape_167,p:{x:132.2}},{t:this.shape_166},{t:this.shape_165,p:{x:167.3,y:-9.6}},{t:this.shape_87,p:{x:183.5,y:-13.1}},{t:this.shape_164,p:{x:192.3,y:-9.6}},{t:this.shape_163},{t:this.shape_45,p:{x:-269.8,y:19.2}},{t:this.shape_162,p:{x:-257.3}},{t:this.shape_161,p:{x:-243.7}},{t:this.shape_160},{t:this.shape_159,p:{x:-219.3,y:16.5}},{t:this.shape_16,p:{x:-210.3,y:19.2}},{t:this.shape_158,p:{x:-202,y:16.5}},{t:this.shape_157,p:{x:-192,y:19.2}},{t:this.shape_156,p:{x:-178.4}},{t:this.shape_155,p:{x:-164.9,y:19.2}},{t:this.shape_154,p:{x:-153}},{t:this.shape_153,p:{x:-134.4,y:15.9}},{t:this.shape_152,p:{x:-120,y:19.2}},{t:this.shape_151,p:{x:-101.5}},{t:this.shape_150,p:{x:-90.6,y:19.2}},{t:this.shape_86,p:{x:-81.2,y:15.7}},{t:this.shape_30,p:{x:-71.7,y:19.3}},{t:this.shape_149,p:{x:-58}},{t:this.shape_69,p:{x:-36.7,y:15.9}},{t:this.shape_148,p:{x:-22.3,y:19.2}},{t:this.shape_57,p:{x:-6.1,y:15.7}},{t:this.shape_147,p:{x:3.9,y:19.2}},{t:this.shape_146},{t:this.shape_3,p:{x:34,y:19.2}},{t:this.shape_145,p:{x:46.5,y:19.2}},{t:this.shape_31,p:{x:56.5,y:15.7}},{t:this.shape_144,p:{x:65.3,y:19.2}},{t:this.shape_143},{t:this.shape_142,p:{x:93.6,y:19.2}},{t:this.shape_141,p:{x:105.8}},{t:this.shape_140,p:{x:114.6,y:19.2}},{t:this.shape_139},{t:this.shape_138,p:{x:142.9,y:19.2}},{t:this.shape_137},{t:this.shape_136,p:{x:164.7,y:19.2}},{t:this.shape_135},{t:this.shape_134,p:{x:184.9,y:23.7}}]},1).to({state:[{t:this.shape_235,p:{x:-268.4,y:-12.5}},{t:this.shape_234},{t:this.shape_157,p:{x:-247.1,y:-9.6}},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231,p:{x:-199.5}},{t:this.shape_35,p:{x:-187,y:-9.6}},{t:this.shape_230,p:{x:-174.6,y:-9.6}},{t:this.shape_229,p:{x:-155.5}},{t:this.shape_228},{t:this.shape_168,p:{x:-128.7,y:-12.3}},{t:this.shape_227},{t:this.shape_159,p:{x:-108.3,y:-12.3}},{t:this.shape_121,p:{x:-102.5,y:-13.1}},{t:this.shape_226,p:{x:-93.7}},{t:this.shape_118,p:{x:-77.7,y:-13.1}},{t:this.shape_225,p:{x:-68.9}},{t:this.shape_224,p:{x:-57.2}},{t:this.shape_181,p:{x:-39,y:-9.7}},{t:this.shape_147,p:{x:-25,y:-9.6}},{t:this.shape_223,p:{x:-12.9,y:-9.7}},{t:this.shape_222,p:{x:0.1}},{t:this.shape_221,p:{x:16.4}},{t:this.shape_220,p:{x:28.1}},{t:this.shape_219,p:{x:45.6,y:-6.7}},{t:this.shape_218},{t:this.shape_217,p:{x:72.6,y:-9.6}},{t:this.shape_173,p:{x:86.3}},{t:this.shape_87,p:{x:96.8,y:-13.1}},{t:this.shape_216,p:{x:105.6,y:-9.6}},{t:this.shape_215,p:{x:122.2,y:-9.7}},{t:this.shape_214,p:{x:139.3,y:-9.6}},{t:this.shape_172,p:{x:152.4,y:-9.7}},{t:this.shape_213},{t:this.shape_145,p:{x:174.4,y:-9.6}},{t:this.shape_212},{t:this.shape_211},{t:this.shape_193,p:{x:219.7,y:-9.6}},{t:this.shape_210},{t:this.shape_191,p:{x:-256,y:19.2}},{t:this.shape_39,p:{y:21.9,x:-242.3}},{t:this.shape_209,p:{x:-228,y:19.3}},{t:this.shape_208},{t:this.shape_158,p:{x:-210.5,y:16.5}},{t:this.shape_149,p:{x:-200.6}},{t:this.shape_178,p:{x:-187,y:19.2}},{t:this.shape_153,p:{x:-173.5,y:15.9}},{t:this.shape_207,p:{x:-153.4,y:22.1}},{t:this.shape_206},{t:this.shape_174,p:{x:-121.7,y:19.2}},{t:this.shape_86,p:{x:-112.3,y:15.7}},{t:this.shape_89,p:{x:-102.8,y:19.3}},{t:this.shape_205,p:{x:-89.1,y:15.9}},{t:this.shape_177,p:{x:-68.1,y:19.2}},{t:this.shape_161,p:{x:-55}},{t:this.shape_165,p:{x:-34.8,y:19.2}},{t:this.shape_57,p:{x:-25.2,y:15.7}},{t:this.shape_204},{t:this.shape_203,p:{x:3.1}},{t:this.shape_164,p:{x:12,y:19.2}},{t:this.shape_202},{t:this.shape_150,p:{x:39.1,y:19.2}},{t:this.shape_201},{t:this.shape_142,p:{x:58.5,y:19.2}},{t:this.shape_93,p:{x:79.2,y:15.9}},{t:this.shape_155,p:{x:93.6,y:19.2}},{t:this.shape_156,p:{x:106.7}},{t:this.shape_200,p:{x:117.6,y:17.8}},{t:this.shape_199},{t:this.shape_138,p:{x:136.6,y:19.2}},{t:this.shape_198,p:{x:157.4,y:15.9}},{t:this.shape_152,p:{x:171.7,y:19.2}},{t:this.shape_31,p:{x:187.9,y:15.7}},{t:this.shape_144,p:{x:196.7,y:19.2}},{t:this.shape_148,p:{x:216.6,y:19.2}},{t:this.shape_189,p:{x:233.3,y:19.1}},{t:this.shape_197},{t:this.shape_196},{t:this.shape_136,p:{x:273,y:19.2}},{t:this.shape_154,p:{x:284.8}},{t:this.shape_140,p:{x:295.8,y:19.2}},{t:this.shape_134,p:{x:305.7,y:23.7}}]},1).to({state:[{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_192,p:{x:-222.8}},{t:this.shape_71,p:{x:-209.8,y:-9.6}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_62,p:{x:-143.3,y:-12.9}},{t:this.shape_266},{t:this.shape_186,p:{x:-112.7}},{t:this.shape_215,p:{x:-99.8,y:-9.7}},{t:this.shape_265},{t:this.shape_118,p:{x:-71.9,y:-13.1}},{t:this.shape_264,p:{x:-62.3}},{t:this.shape_189,p:{x:-45.6,y:-9.7}},{t:this.shape_263,p:{x:-28.5}},{t:this.shape_185,p:{x:-15.4}},{t:this.shape_262},{t:this.shape_226,p:{x:5.4}},{t:this.shape_261,p:{x:16.9}},{t:this.shape_260,p:{x:33.2}},{t:this.shape_259},{t:this.shape_258},{t:this.shape_218},{t:this.shape_225,p:{x:71.9}},{t:this.shape_257},{t:this.shape_231,p:{x:93}},{t:this.shape_256},{t:this.shape_182,p:{x:117.2}},{t:this.shape_221,p:{x:126}},{t:this.shape_255},{t:this.shape_254},{t:this.shape_230,p:{x:170.7,y:-9.6}},{t:this.shape_253},{t:this.shape_252},{t:this.shape_217,p:{x:213.3,y:-9.6}},{t:this.shape_35,p:{x:225.8,y:-9.6}},{t:this.shape_214,p:{x:238.2,y:-9.6}},{t:this.shape_181,p:{x:251.4,y:-9.7}},{t:this.shape_60,p:{x:264.4,y:-9.6}},{t:this.shape_180,p:{x:272.7}},{t:this.shape_171,p:{x:282.7,y:-12.3}},{t:this.shape_172,p:{x:296.3,y:-9.7}},{t:this.shape_207,p:{x:-270.2,y:22.1}},{t:this.shape_54,p:{x:-251.6,y:19.2}},{t:this.shape_147,p:{x:-239.1,y:19.2}},{t:this.shape_161,p:{x:-225.5}},{t:this.shape_251},{t:this.shape_250},{t:this.shape_145,p:{x:-195.6,y:19.2}},{t:this.shape_87,p:{x:-185.6,y:15.7}},{t:this.shape_149,p:{x:-169.1}},{t:this.shape_193,p:{x:-154.8,y:19.2}},{t:this.shape_216,p:{x:-135.5,y:19.2}},{t:this.shape_49,p:{x:-122.8,y:19.2}},{t:this.shape_45,p:{x:-111.3,y:19.2}},{t:this.shape_175,p:{x:-103,y:16.5}},{t:this.shape_205,p:{x:-93.2,y:15.9}},{t:this.shape_191,p:{x:-78.8,y:19.2}},{t:this.shape_156,p:{x:-65.7}},{t:this.shape_249,p:{x:-54.8,y:17.8}},{t:this.shape_177,p:{x:-44.2,y:19.2}},{t:this.shape_248},{t:this.shape_12,p:{x:-13.7,y:15.9}},{t:this.shape_165,p:{x:0.7,y:19.2}},{t:this.shape_247},{t:this.shape_203,p:{x:27}},{t:this.shape_178,p:{x:35.8,y:19.2}},{t:this.shape_246,p:{x:50.1,y:15.9}},{t:this.shape_174,p:{x:62.9,y:19.2}},{t:this.shape_245},{t:this.shape_142,p:{x:82.3,y:19.2}},{t:this.shape_32,p:{x:92.8,y:25.3}},{t:this.shape_164,p:{x:108.7,y:19.2}},{t:this.shape_16,p:{x:121.4,y:19.2}},{t:this.shape_138,p:{x:133.9,y:19.2}},{t:this.shape_244,p:{x:146}},{t:this.shape_243},{t:this.shape_155,p:{x:170.3,y:19.2}},{t:this.shape_242},{t:this.shape_150,p:{x:199.7,y:19.2}},{t:this.shape_86,p:{x:215.8,y:15.7}},{t:this.shape_144,p:{x:224.6,y:19.2}},{t:this.shape_57,p:{x:-273.1,y:44.5}},{t:this.shape_152,p:{x:-263.6,y:48}},{t:this.shape_241,p:{x:-249.9,y:50.7}},{t:this.shape_168,p:{x:-239.4,y:45.3}},{t:this.shape_240,p:{x:-231.3}},{t:this.shape_31,p:{x:-223.4,y:44.5}},{t:this.shape_140,p:{x:-214.6,y:48}},{t:this.shape_3,p:{x:-201.9,y:48}},{t:this.shape_159,p:{x:-193.7,y:45.3}},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_158,p:{x:-142.1,y:45.3}},{t:this.shape_6,p:{x:-132.2,y:50.7}},{t:this.shape_148,p:{x:-117.9,y:48}},{t:this.shape_236,p:{x:-104.8}},{t:this.shape_200,p:{x:-93.9,y:46.6}},{t:this.shape_136,p:{x:-83.3,y:48}},{t:this.shape_134,p:{x:-73.2,y:52.5}}]},1).to({state:[{t:this.shape_273},{t:this.shape_230,p:{x:-256,y:-9.6}},{t:this.shape_217,p:{x:-236,y:-9.6}},{t:this.shape_289},{t:this.shape_54,p:{x:-209.8,y:-9.6}},{t:this.shape_225,p:{x:-198.5}},{t:this.shape_261,p:{x:-186.9}},{t:this.shape_268},{t:this.shape_221,p:{x:-163.4}},{t:this.shape_12,p:{x:-143.3,y:-12.9}},{t:this.shape_214,p:{x:-128.9,y:-9.6}},{t:this.shape_215,p:{x:-105.6,y:-9.7}},{t:this.shape_193,p:{x:-88.5,y:-9.6}},{t:this.shape_198,p:{x:-74.8,y:-12.9}},{t:this.shape_168,p:{x:-64.3,y:-12.3}},{t:this.shape_216,p:{x:-55.5,y:-9.6}},{t:this.shape_223,p:{x:-43.9,y:-9.7}},{t:this.shape_191,p:{x:-27.7,y:-9.6}},{t:this.shape_192,p:{x:-14.5}},{t:this.shape_49,p:{x:5.2,y:-9.6}},{t:this.shape_178,p:{x:16.5,y:-9.6}},{t:this.shape_288},{t:this.shape_157,p:{x:40.3,y:-9.6}},{t:this.shape_287},{t:this.shape_153,p:{x:71.3,y:-12.9}},{t:this.shape_177,p:{x:85.6,y:-9.6}},{t:this.shape_45,p:{x:105.1,y:-9.6}},{t:this.shape_147,p:{x:117.6,y:-9.6}},{t:this.shape_185,p:{x:131.2}},{t:this.shape_286},{t:this.shape_57,p:{x:148.1,y:-13.1}},{t:this.shape_159,p:{x:153.8,y:-12.3}},{t:this.shape_16,p:{x:162.9,y:-9.6}},{t:this.shape_285},{t:this.shape_145,p:{x:183.3,y:-9.6}},{t:this.shape_165,p:{x:203.8,y:-9.6}},{t:this.shape_181,p:{x:216.9,y:-9.7}},{t:this.shape_284},{t:this.shape_283},{t:this.shape_155,p:{x:246.4,y:-9.6}},{t:this.shape_282},{t:this.shape_152,p:{x:-254.7,y:19.2}},{t:this.shape_141,p:{x:-243}},{t:this.shape_281},{t:this.shape_142,p:{x:-222.7,y:19.2}},{t:this.shape_172,p:{x:-209.1,y:19.1}},{t:this.shape_174,p:{x:-196.3,y:19.2}},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_148,p:{x:-138.3,y:19.2}},{t:this.shape_158,p:{x:-122.1,y:16.5}},{t:this.shape_161,p:{x:-112.7}},{t:this.shape_169,p:{x:-101.8,y:17.8}},{t:this.shape_136,p:{x:-91.2,y:19.2}},{t:this.shape_241,p:{x:-77.5,y:21.9}},{t:this.shape_277},{t:this.shape_164,p:{x:-56,y:19.2}},{t:this.shape_156,p:{x:-43}},{t:this.shape_31,p:{x:-26.6,y:15.7}},{t:this.shape_150,p:{x:-17.8,y:19.2}},{t:this.shape_3,p:{x:1.5,y:19.2}},{t:this.shape_138,p:{x:14,y:19.2}},{t:this.shape_189,p:{x:31.2,y:19.1}},{t:this.shape_276},{t:this.shape_144,p:{x:62.2,y:19.2}},{t:this.shape_275},{t:this.shape_274,p:{x:85.8,y:16.3}},{t:this.shape_140,p:{x:93.7,y:19.2}},{t:this.shape_134,p:{x:103.6,y:23.7}}]},1).to({state:[{t:this.shape_319},{t:this.shape_234},{t:this.shape_190,p:{x:-247.1}},{t:this.shape_222,p:{x:-230}},{t:this.shape_232},{t:this.shape_264,p:{x:-199.5}},{t:this.shape_35,p:{x:-187,y:-9.6}},{t:this.shape_263,p:{x:-174.6}},{t:this.shape_121,p:{x:-158.4,y:-13.1}},{t:this.shape_216,p:{x:-149.6,y:-9.6}},{t:this.shape_178,p:{x:-130.5,y:-9.6}},{t:this.shape_205,p:{x:-117,y:-12.9}},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_220,p:{x:-70.4}},{t:this.shape_194,p:{x:-62.5}},{t:this.shape_71,p:{x:-53.5,y:-9.6}},{t:this.shape_186,p:{x:-45.2}},{t:this.shape_315},{t:this.shape_192,p:{x:-21.6}},{t:this.shape_229,p:{x:-2.3}},{t:this.shape_314},{t:this.shape_260,p:{x:24.7}},{t:this.shape_313},{t:this.shape_188,p:{x:53.2}},{t:this.shape_312},{t:this.shape_182,p:{x:73.4}},{t:this.shape_60,p:{x:82.4,y:-9.6}},{t:this.shape_180,p:{x:90.7}},{t:this.shape_311},{t:this.shape_185,p:{x:114.3}},{t:this.shape_310},{t:this.shape_231,p:{x:149.1}},{t:this.shape_118,p:{x:165.3,y:-13.1}},{t:this.shape_167,p:{x:175.3}},{t:this.shape_224,p:{x:187.6}},{t:this.shape_230,p:{x:-269.3,y:19.2}},{t:this.shape_87,p:{x:-259.8,y:15.7}},{t:this.shape_217,p:{x:-250.2,y:19.2}},{t:this.shape_215,p:{x:-233.5,y:19.1}},{t:this.shape_214,p:{x:-216.4,y:19.2}},{t:this.shape_181,p:{x:-203.3,y:19.1}},{t:this.shape_309},{t:this.shape_162,p:{x:-181.3}},{t:this.shape_151,p:{x:-169}},{t:this.shape_308},{t:this.shape_193,p:{x:-136,y:19.2}},{t:this.shape_235,p:{x:-115.1,y:16.3}},{t:this.shape_307},{t:this.shape_157,p:{x:-93.8,y:19.2}},{t:this.shape_306},{t:this.shape_191,p:{x:-72.1,y:19.2}},{t:this.shape_54,p:{x:-59.2,y:19.2}},{t:this.shape_49,p:{x:-47.7,y:19.2}},{t:this.shape_175,p:{x:-39.4,y:16.5}},{t:this.shape_171,p:{x:-29.4,y:16.5}},{t:this.shape_172,p:{x:-15.8,y:19.1}},{t:this.shape_305},{t:this.shape_177,p:{x:19,y:19.2}},{t:this.shape_244,p:{x:30.7}},{t:this.shape_304},{t:this.shape_147,p:{x:51,y:19.2}},{t:this.shape_161,p:{x:64.6}},{t:this.shape_174,p:{x:77.4,y:19.2}},{t:this.shape_86,p:{x:86.8,y:15.7}},{t:this.shape_219,p:{x:102.1,y:22.1}},{t:this.shape_165,p:{x:121.2,y:19.2}},{t:this.shape_57,p:{x:130.7,y:15.7}},{t:this.shape_189,p:{x:150.3,y:19.1}},{t:this.shape_164,p:{x:166.6,y:19.2}},{t:this.shape_156,p:{x:179.6}},{t:this.shape_155,p:{x:193.2,y:19.2}},{t:this.shape_303},{t:this.shape_145,p:{x:212.7,y:19.2}},{t:this.shape_302},{t:this.shape_152,p:{x:-259.1,y:48}},{t:this.shape_39,p:{y:50.7,x:-245.4}},{t:this.shape_209,p:{x:-231.2,y:48.1}},{t:this.shape_223,p:{x:-219.4,y:47.9}},{t:this.shape_142,p:{x:-209.4,y:48}},{t:this.shape_26,p:{x:-188.6,y:44.7}},{t:this.shape_148,p:{x:-174.3,y:48}},{t:this.shape_301},{t:this.shape_30,p:{x:-144.1,y:48.1}},{t:this.shape_300},{t:this.shape_249,p:{x:-123.2,y:46.6}},{t:this.shape_150,p:{x:-113.3,y:48}},{t:this.shape_236,p:{x:-100.3}},{t:this.shape_45,p:{x:-87.3,y:48}},{t:this.shape_168,p:{x:-79,y:45.3}},{t:this.shape_144,p:{x:-70.2,y:48}},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_274,p:{x:-15.1,y:45.1}},{t:this.shape_296},{t:this.shape_159,p:{x:10.2,y:45.3}},{t:this.shape_16,p:{x:19.3,y:48}},{t:this.shape_140,p:{x:30.6,y:48}},{t:this.shape_240,p:{x:42.3}},{t:this.shape_207,p:{x:59.8,y:50.9}},{t:this.shape_3,p:{x:78.3,y:48}},{t:this.shape_138,p:{x:90.8,y:48}},{t:this.shape_295},{t:this.shape_246,p:{x:126.1,y:44.7}},{t:this.shape_61,p:{x:139.7,y:48.1}},{t:this.shape_294},{t:this.shape_293},{t:this.shape_158,p:{x:167.4,y:45.3}},{t:this.shape_292},{t:this.shape_31,p:{x:187.8,y:44.5}},{t:this.shape_136,p:{x:197.4,y:48}},{t:this.shape_291},{t:this.shape_290}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-38.7,630,93.4);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("tecuidamos2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AhyBfIAAi9IDlAAIAAC9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-9.5,23,19);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// estado
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E9CE6B").s().p("Ah6B8Qg0g0AAhIQAAhIA0gyQAyg0BIAAQBIAAAzA0QA0AyAABIQAABIg0A0QgzAzhIAAQhIAAgygzg");
	this.shape.setTransform(-164.4,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AhTBUQgigjAAgxQAAgwAigjQAjgiAwAAQAxAAAjAiQAiAjAAAwQAAAxgiAjQgjAigxAAQgwAAgjgig");
	this.shape_1.setTransform(-164.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_1}]},1).wait(1));

	// Capa 2
	this.instance = new lib.Mapadebits1();
	this.instance.parent = this;
	this.instance.setTransform(-194,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194,-35,388,70);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Capa 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20512").s().p("AlGGxIgVAAIgEthIAegBQBkABB1AjQB1AjBlA7QDuCLgBCoQAACpjwCIQhmA6h2AiQhyAhhhAAIgGgBg");
	this.shape_6.setTransform(25,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-43.3,70.3,86.7);


(lib.Símbolo21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBBIggg6IgTAAIAAA6IgSAAIAAiBIAuAAQARABAMAIQALAKAAARQAAAMgIALQgIAJgQACIAlA7gAgbgGIAXAAQAaAAAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(47.2,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAsBBIgOghIg7AAIgOAhIgUAAIA5iBIAPAAIA3CBgAgYASIAwAAIgYg7IAAAAg");
	this.shape_1.setTransform(32.8,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBBIAAgRIBIhfIhGAAIAAgRIBcAAIAAARIhIBfIBJAAIAAARg");
	this.shape_2.setTransform(19.2,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_3.setTransform(9.5,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBBIAAiBIARAAIAABwIA6AAIAAARg");
	this.shape_4.setTransform(1.2,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBBIgNghIg8AAIgMAhIgVAAIA5iBIAPAAIA3CBgAgXASIAvAAIgXg7IgBAAg");
	this.shape_5.setTransform(-12.5,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBBIhHhqIAAAAIAABqIgSAAIAAiBIAXAAIBGBpIAAAAIAAhpIASAAIAACBg");
	this.shape_6.setTransform(-27.9,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_7.setTransform(-39.5,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBBIAAiBIBQAAIAAARIg+AAIAAApIA6AAIAAAPIg6AAIAAA4g");
	this.shape_8.setTransform(-48.6,-0.8);

	this.instance = new lib.Mapadebits7();
	this.instance.parent = this;
	this.instance.setTransform(-86,-24);

	this.instance_1 = new lib.Símbolo22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-24,172,47);


(lib.Símbolo20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.btn_finish = new lib.Símbolo21();
	this.btn_finish.parent = this;
	this.btn_finish.setTransform(0,71.9);
	new cjs.ButtonHelper(this.btn_finish, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20512").s().p("AgQBWQgHgHAAgKQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgHgAgTAeIAAh6IAmAAIAAB6g");
	this.shape.setTransform(88,-96.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgeA/QgNgEgKgKIAYgaQAGAHAGADQAHAEAJAAQAFAAAFgCQAGgCAAgFQAAgGgHgDIgPgEIgUgGQgJgDgHgHQgGgHAAgPQAAgOAHgKQAIgJAMgFQAMgEAMAAQANAAAMADQANAEAJAJIgXAYQgFgFgFgDQgHgDgHAAQgEAAgEADQgEACAAAGQAAAFAGADQAGACAJACQAKACAKAEQAKADAGAHQAHAIAAAOQAAAMgFAIQgGAIgIAFQgIAEgLACQgKACgJAAIgDAAQgMAAgMgDg");
	this.shape_1.setTransform(76.2,-93.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20512").s().p("AgdA6QgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQATAAANAIQANAIAHAPQAIAPAAATIAAAMIhaAAQADAMAHAGQAIAHALAAQAJAAAHgEQAHgFAEgHIAcAVQgKALgOAHQgOAGgQAAQgSAAgQgIgAAagNQAAgKgHgHQgHgHgKAAQgIAAgGADQgGAEgDAFQgDAGgBAGIAzAAIAAAAg");
	this.shape_2.setTransform(62.8,-93.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20512").s().p("AAWBBIAAg+IgBgOQgBgIgEgFQgFgFgKAAQgJAAgFAEQgFAFgBAHQgCAIAAAHIAAA/IgnAAIAAh+IAmAAIAAASIAAAAQADgGAFgEQAFgFAHgDQAGgDAKAAQATAAALAIQAKAIADANQAEAOAAARIAABFg");
	this.shape_3.setTransform(47.9,-93.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20512").s().p("AgiA6QgQgIgKgPQgJgPAAgUQAAgTAJgPQAKgPAQgIQAPgIATAAQAUAAAQAIQAQAIAJAPQAJAPAAATQAAAUgJAPQgJAPgQAIQgQAIgUAAQgTAAgPgIgAgWgWQgIAJAAANQAAAPAIAIQAIAJAOAAQAPAAAIgJQAIgIAAgPQAAgNgIgJQgIgJgPAAQgOAAgIAJg");
	this.shape_4.setTransform(32.5,-93.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20512").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgGgGgBgKQABgKAGgGQAGgGAJAAQAKAAAGAGQAGAGABAKQgBAKgGAGQgGAGgKABQgJgBgGgGg");
	this.shape_5.setTransform(21.2,-96.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20512").s().p("AAMBCQgSAAgQgIQgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQAMAAAMAEQAMADAJAKIgZAbQgDgFgFgCQgFgDgHAAQgNAAgIAJQgJAJABANQgBAPAJAIQAIAJANAAQAHAAAFgDQAFgCADgFIAZAcQgJAJgMAEQgLADgKAAIgDAAg");
	this.shape_6.setTransform(12,-93.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20512").s().p("AgPBCQgMAAgKgEQgKgEgGgJQgHgJAAgNQAAgQAJgJQAJgIANgEQANgEAPgBIAagBQAAgLgIgGQgHgGgKAAQgJAAgIAEQgIAEgGAHIgVgVQALgKAPgFQAOgFAPAAQAXAAAMAHQANAIAFAOQAFAPAAAVIAAA/IgkAAIAAgQIgBAAQgGALgLAEQgJAEgLAAIgCAAgAAEAIIgMADQgGABgEAEQgEAEAAAGQAAAFADADQACADAFABQAEACAEAAQAHAAAHgDQAGgCAEgGQAFgFAAgIIAAgIIgKAAIgLAAg");
	this.shape_7.setTransform(-1.9,-93.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20512").s().p("AgBBQQgKgEgGgJQgGgIAAgNIAAg8IgZAAIAAgfIAZAAIAAgmIAmAAIAAAmIAiAAIAAAfIgiAAIAAAqIABALQABAGAEADQAEADAIAAIAIgBQAFAAADgDIAAAhQgGACgHABIgOAAQgNAAgKgDg");
	this.shape_8.setTransform(-14.2,-95.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20512").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgGgGgBgKQABgKAGgGQAGgGAJAAQAKAAAGAGQAGAGABAKQgBAKgGAGQgGAGgKABQgJgBgGgGg");
	this.shape_9.setTransform(-22.7,-96.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20512").s().p("AAMBCQgSAAgQgIQgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQAMAAAMAEQAMADAJAKIgZAbQgDgFgFgCQgGgDgGAAQgNAAgJAJQgHAJAAANQAAAPAHAIQAJAJANAAQAHAAAFgDQAEgCAEgFIAZAcQgJAJgMAEQgLADgKAAIgDAAg");
	this.shape_10.setTransform(-31.8,-93.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20512").s().p("AgSBfIAAh+IAmAAIAAB+gAgPg3QgGgGgBgKQABgKAGgGQAGgGAJAAQAKAAAGAGQAGAGABAKQgBAKgGAGQgGAGgKABQgJgBgGgGg");
	this.shape_11.setTransform(-42,-96.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20512").s().p("AgTBiIAAjDIAnAAIAADDg");
	this.shape_12.setTransform(-48.7,-97);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20512").s().p("AgdA6QgQgIgJgPQgKgPAAgUQAAgTAKgPQAJgPAQgIQAQgIASAAQATAAANAIQANAIAHAPQAIAPAAATIAAAMIhaAAQADAMAHAGQAIAHALAAQAJAAAHgEQAHgFAEgHIAcAVQgKALgOAHQgOAGgQAAQgSAAgQgIgAAagNQAAgKgHgHQgHgHgKAAQgIAAgGADQgGAEgDAFQgDAGgBAGIAzAAIAAAAg");
	this.shape_13.setTransform(-59.5,-93.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20512").s().p("Ag9BcIAAi3IB7AAIAAAmIhSAAIAAAlIBLAAIAAAkIhLAAIAABIg");
	this.shape_14.setTransform(-74.2,-96.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20512").s().p("AgTBdIAAh6IAmAAIAAB6gAgQgzQgHgGAAgLQAAgKAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAKQAAALgHAGQgHAHgKAAQgJAAgHgHg");
	this.shape_15.setTransform(-88.2,-90.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgJAJQgDgEAAgFQAAgEADgEQAEgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgEgEg");
	this.shape_16.setTransform(165,-2.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQALgFAMAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgMAAgLgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_17.setTransform(153.9,-9.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_18.setTransform(140.4,-6.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AgXBYQgLgFgIgIQgIgIgFgKQgEgLAAgNQAAgNAEgKQAFgKAIgIQAIgIALgEQAKgFANAAIAMABQAGABAFADIALAHQAGAEADAGIABAAIAAhYIAQAAIAAC0IgQAAIAAgSIgBAAQgDAFgGAEIgLAHIgLAEIgMABQgNAAgKgEgAgRgHQgIADgFAFQgGAGgDAJQgCAIAAAJQAAAJACAJQADAIAGAGQAFAGAIADQAIAEAJAAQAKAAAIgEQAIgDAGgGQAGgGADgIQAEgJAAgJQAAgJgEgIQgDgJgGgGQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_19.setTransform(126.8,-9.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_20.setTransform(117,-9.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgIA4IguhvIATAAIAjBeIAAAAIAkheIASAAIgtBvg");
	this.shape_21.setTransform(108.4,-6.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgHBTIAAhvIAPAAIAABvgAgHg/QgEgDAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgDAAgEgDg");
	this.shape_22.setTransform(99.7,-9.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgFgCgCgHQgDgFAAgKIAAhFIgYAAIAAgPIAYAAIAAggIAPAAIAAAgIAgAAIAAAPIggAAIAABBIABAKIADAGQACACAEABIAGABIAIgBIAIgDIABAOQgIAFgNAAIgJgBg");
	this.shape_23.setTransform(92.9,-8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_24.setTransform(83.5,-6.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_25.setTransform(70.8,-6.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_26.setTransform(51.7,-6.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AAGBJQgGgCgCgEQgEgCgDgHQgDgFAAgKIAAhFIgXAAIAAgPIAXAAIAAggIAPAAIAAAgIAhAAIAAAPIghAAIAABBIABAKIAEAGQACACACABIAHABIAIgBIAJgDIABAOQgKAFgMAAIgJgBg");
	this.shape_27.setTransform(41.8,-8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgXA2QgMgFgHgMIANgJQAFAHAHAFQAIAFAJAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgGgDgJgCIgPgEIgIgCQgFgCgEgDQgFgDgDgFQgDgGgBgHQABgJADgHQADgGAGgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgDgGgHgFQgFgEgJAAIgHABIgIADIgGAGQgBADAAAEQAAAIAFAEQAFADALADIAQADQAMADAHAHQAJAJgBALQAAAJgDAHQgEAHgGAEQgHAEgIACQgHACgIAAQgNAAgKgFg");
	this.shape_28.setTransform(32.8,-6.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_29.setTransform(20.9,-6.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_30.setTransform(0.5,-6.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgYBYQgKgFgIgIQgIgIgEgKQgFgLAAgNQAAgNAFgKQAEgKAIgIQAIgIAKgEQAMgFAMAAIALABQAGABAHADIALAHQAFAEAEAGIAAAAIAAhYIAQAAIAAC0IgQAAIAAgSIAAAAQgEAFgFAEIgLAHIgNAEIgLABQgMAAgMgEgAgRgHQgHADgGAFQgFAGgDAJQgEAIAAAJQAAAJAEAJQADAIAFAGQAGAGAHADQAIAEAJAAQAJAAAJgEQAIgDAGgGQAGgGAEgIQADgJAAgJQAAgJgDgIQgEgJgGgGQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_31.setTransform(-14.3,-9.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_32.setTransform(-27.8,-6.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AAFBJQgEgCgEgEQgEgCgCgHQgDgFAAgKIAAhFIgXAAIAAgPIAXAAIAAggIAPAAIAAAgIAhAAIAAAPIghAAIAABBIABAKIADAGQADACACABIAIABIAIgBIAIgDIABAOQgJAFgNAAIgKgBg");
	this.shape_33.setTransform(-37.7,-8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgTA3QgLgFgIgIQgHgIgFgLQgEgKAAgNQAAgMAEgLQAEgKAIgJQAIgIAKgDQAKgFALAAQANAAAKAFQAKAEAHAHQAHAIADAKQAEALAAALIAAAGIhdAAQABAIAEAIQADAHAGAGQAFAFAHADQAHAEAIAAQANgBAJgGQAJgFAFgIIAMAKQgKANgMAGQgMAFgOAAQgMAAgKgEgAgNgpQgHADgFAFQgGAGgDAFQgDAIAAAGIBLAAQAAgQgKgKQgJgKgSAAQgGAAgIADg");
	this.shape_34.setTransform(-48.4,-6.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgHBbIAAi1IAPAAIAAC1g");
	this.shape_35.setTransform(-57.9,-10);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("Ag7BcIAAi1IAQAAIAAAUIABAAQAEgGAFgFIAKgGQAHgDAFgBIALgBQAOAAAKAFQALADAIAIQAIAJAFAKQAEALAAANQAAANgEAKQgFAKgIAIQgIAIgLAFQgKAEgOAAIgLgBIgMgEIgKgHQgFgEgEgFIgBAAIAABXgAgRhKQgIAEgGAGQgGAGgEAJQgCAIAAAJQAAAJACAJQAEAHAGAGQAGAGAIADQAJAEAIAAQAKAAAIgEQAIgDAFgGQAGgGACgHQAEgJAAgJQAAgJgEgIQgCgJgGgGQgFgGgIgEQgIgDgKAAQgIAAgJADg");
	this.shape_36.setTransform(-67.7,-3.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("ABFA5IAAhAQAAgRgGgJQgGgKgRAAQgJABgGADQgGADgDAHQgEAFgCAHIgBAQIAAA6IgPAAIAAhAQAAgRgGgJQgGgKgRAAIgGABQgFABgGAFQgFAFgFAIQgEAIAAAPIAAA5IgQAAIAAhWIAAgNIgBgMIARAAIAAARIAAAAQAGgJAKgGQAKgEAKAAIAKAAQAFABAFADQAFACAEAFQADAFADAGQAFgLAKgGQALgFALAAQAWAAAKALQAKALAAAWIAABFg");
	this.shape_37.setTransform(-85.9,-6.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgXA3QgLgFgIgIQgIgIgEgLQgFgKAAgNQAAgMAFgLQAEgKAIgJQAIgIALgDQALgFAMAAQANAAALAFQALADAIAIQAIAJAEAKQAFALAAAMQAAANgFAKQgEALgIAIQgIAIgLAFQgLAEgNAAQgMAAgLgEgAgRgpQgIAEgFAGQgGAGgCAJQgEAIAAAIQAAAJAEAJQACAHAGAGQAFAHAIADQAIAEAJAAQAKAAAHgEQAIgDAGgHQAFgGADgHQADgJAAgJQAAgIgDgIQgDgJgFgGQgGgGgIgEQgHgDgKAAQgJAAgIADg");
	this.shape_38.setTransform(-103,-6.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgOA3QgLgEgIgIQgIgIgEgLQgEgLAAgNQAAgMAEgLQAEgKAIgIQAIgIALgFQALgEAMAAQAMAAAKAFQALAFAIAKIgNAJQgEgGgHgEQgHgFgKAAQgJAAgHAEQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAIQADAIAFAGQAGAGAIAEQAHADAJAAQAKAAAHgFQAHgEAEgGIANAKQgIAKgLAEQgKAFgMAAQgMAAgLgEg");
	this.shape_39.setTransform(-115.5,-6.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgXA2QgLgFgJgMIAOgJQAFAHAHAFQAHAFAKAAIAJgBQAFgCAEgCQADgCADgEQACgEAAgEQAAgIgGgFQgHgDgIgCIgPgEIgIgCQgEgCgFgDQgFgDgDgFQgDgGAAgHQAAgJADgHQAEgGAFgEQAGgEAIgCQAHgCAHAAQAMAAAKAFQAKAEAGALIgPAJQgEgGgGgFQgFgEgJAAIgIABIgHADIgGAGQgBADAAAEQgBAIAGAEQAFADALADIAQADQALADAIAHQAJAJgBALQAAAJgDAHQgEAHgGAEQgGAEgJACQgHACgIAAQgNAAgKgFg");
	this.shape_40.setTransform(-133.4,-6.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgXA5QgGgCgGgFQgFgDgDgHQgEgGAAgIQAAgNAHgJQAHgGALgEQALgEALgBIAWgBIAIAAIAAgDQAAgdgdAAQgSAAgPANIgKgLQAQgQAfAAQAIAAAIACQAHADAGAEQAFAGADAHQAEAIAAAKIAAAxIAAAOIACALIgQAAIgBgJIAAgJQgHALgKAFQgJAFgNAAQgIAAgHgCgAAHABIgQACQgJADgGAFQgGAEAAAJQAAAFADAEQACAEAEADQAEACAEACIAKABQAIAAAGgEQAGgCAFgFQAEgFACgHQACgGAAgHIAAgJIgIAAIgPABg");
	this.shape_41.setTransform(-145.1,-6.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AAuBVIAAhRIhbAAIAABRIgSAAIAAipIASAAIAABKIBbAAIAAhKIARAAIAACpg");
	this.shape_42.setTransform(-159.7,-9.4);

	this.instance = new lib.Mapadebits8();
	this.instance.parent = this;
	this.instance.setTransform(-271,-126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_finish}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo20, new cjs.Rectangle(-271,-126,541,251), null);


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBBIggg6IgTAAIAAA6IgSAAIAAiBIAuAAQARABAMAIQALAKAAARQAAAMgIALQgIAJgQACIAlA7gAgbgGIAXAAQAaAAAAgWQAAgUgaAAIgXAAg");
	this.shape.setTransform(32.8,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBBIgMghIg8AAIgNAhIgVAAIA5iBIAPAAIA3CBgAgXASIAvAAIgYg7IAAAAg");
	this.shape_1.setTransform(18.4,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_2.setTransform(7.6,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSA+QgNgGgIgKQgIgKgFgLQgEgMAAgMQAAgdASgTQATgUAcAAQAOAAAMAFQAMAGAIAJIgOALQgNgPgTAAQgUAAgOAPQgNAPAAAWQAAAVANAPQANAOAVAAQAVAAANgRIAPALQgIAKgNAGQgNAHgPAAQgOAAgNgGg");
	this.shape_3.setTransform(-2.9,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_4.setTransform(-13.8,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhBBIhGhqIgBAAIAABqIgRAAIAAiBIAXAAIBGBpIABAAIAAhpIARAAIAACBg");
	this.shape_5.setTransform(-25.4,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBBIAAiBIARAAIAACBg");
	this.shape_6.setTransform(-37,-0.8);

	this.instance = new lib.Mapadebits6();
	this.instance.parent = this;
	this.instance.setTransform(-74,-24);

	this.instance_1 = new lib.Símbolo13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-24,148,47);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("tecuidamos1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 3
	this.btn_start = new lib.Símbolo12();
	this.btn_start.parent = this;
	this.btn_start.setTransform(-6.2,155.7);
	new cjs.ButtonHelper(this.btn_start, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_start).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20512").s().p("AggA2QgJgEgFgIQgGgHAAgLQAAgOAIgIQAHgHAMgEQALgEANAAIAXgBQgBgJgGgFQgGgGgJAAQgHAAgHAEQgHADgGAGIgSgSQAKgJAMgEQANgFANAAQATAAALAHQALAGAFANQAEANAAASIAAA3IgfAAIAAgOIgBAAQgGAJgJAEQgIAEgLAAQgKAAgJgEgAgGAJQgGABgDAEQgEADAAAFQAAAFACACIAGAEIAIABQAGAAAGgCQAFgCAEgFQAEgEAAgHIAAgHIgJAAIgJAAIgKACg");
	this.shape.setTransform(79.6,-152.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AgTAyQgOgHgHgNQgJgNAAgRQAAgRAJgNQAHgNAOgHQAOgHAQAAQAKAAALAEQAKADAIAIIgWAXQgDgDgEgDQgFgCgFAAQgMAAgHAIQgHAHAAAMQAAAMAHAIQAHAHAMABQAFAAAFgDIAHgGIAWAYQgIAIgKADQgLAEgKAAQgQgBgOgHg");
	this.shape_1.setTransform(68.7,-152.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20512").s().p("AgQBSIAAhtIAhAAIAABtgAgNgwQgFgFgBgIQABgJAFgGQAGgFAHAAQAIAAAGAFQAGAGAAAJQAAAIgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_2.setTransform(59.9,-155.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20512").s().p("AAABFQgJgDgGgIQgFgHAAgMIAAgzIgWAAIAAgbIAWAAIAAghIAhAAIAAAhIAeAAIAAAbIgeAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAFAAACgCIAAAcQgGACgGABIgMABQgMAAgHgEg");
	this.shape_3.setTransform(52.2,-154.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20512").s().p("AgTAyQgNgHgJgNQgHgNgBgRQABgRAHgNQAJgNANgHQAOgHAQAAQAKAAAKAEQALADAIAIIgWAXQgDgDgEgDQgFgCgFAAQgLAAgIAIQgHAHAAAMQAAAMAHAIQAIAHALABQAFAAAFgDIAHgGIAWAYQgIAIgLADQgKAEgKAAQgQgBgOgHg");
	this.shape_4.setTransform(42.7,-152.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20512").s().p("AggBNQgJgEgFgHQgGgHAAgMQAAgOAIgHQAHgIAMgFQALgDANAAIAXgBQgBgJgGgFQgGgFgJAAQgHAAgHAEQgHADgGAFIgSgRQAKgJAMgFQANgEANAAQATAAALAHQALAGAFANQAEAMAAARIAAA4IgfAAIAAgNIgBAAQgGAJgJADQgIAFgLAAQgKAAgJgFgAgGAgQgGACgDAEQgEADAAAFQAAAFACACIAGAEIAIABQAGAAAGgCQAFgDAEgEQAEgFAAgGIAAgIIgJAAIgJAAIgKACgAgUgwIAWggIAuAAIgnAgg");
	this.shape_5.setTransform(30.7,-155);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20512").s().p("AgmA4IAAhtIAiAAIAAASIABAAQAEgKAIgFQAHgFALAAIAGAAIAGABIAAAfIgIgCIgHgBQgNABgGAEQgFAFgCAIQgCAIAAAKIAAAug");
	this.shape_6.setTransform(20.6,-152.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20512").s().p("Ag7BSIAAihIAgAAIAAAPIAAAAQADgEAFgEQAFgEAGgDQAHgCAHAAQAQAAAMAHQAMAIAHAMQAHANAAARQAAAPgGAMQgGAOgMAIQgLAIgPABQgKgBgJgDQgJgEgGgHIgBAAIAAA/gAgUgsQgHAIAAAMQAAANAHAIQAHAGANAAQAMAAAHgGQAHgIAAgNQAAgMgHgIQgHgHgMgBQgNABgHAHg");
	this.shape_7.setTransform(8.8,-150.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20512").s().p("AATA4IAAg2IgBgMQAAgGgEgFQgEgEgJgBQgHABgFAEQgEAEgCAGIgBANIAAA2IgiAAIAAhtIAhAAIAAAPIAAAAQACgEAFgEQAEgEAHgDQAFgCAIAAQARAAAJAHQAJAGADAMQADAMAAAPIAAA7g");
	this.shape_8.setTransform(-11.9,-152.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20512").s().p("AgZAyQgOgHgIgNQgIgMAAgSQAAgRAIgNQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGANAAARIAAAKIhNAAQACAKAHAGQAGAGAJAAQAJAAAFgEQAGgEAFgGIAXASQgIAKgMAGQgNAFgNABQgQgBgOgHgAAXgMQAAgIgGgGQgGgGgJAAQgHAAgFADQgFADgDAEQgDAFAAAFIAsAAIAAAAg");
	this.shape_9.setTransform(-24.8,-152.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20512").s().p("AgeAyQgNgHgJgNQgIgNAAgRQAAgRAIgNQAJgNANgHQAOgHAQAAQARAAAOAHQAOAHAHANQAJANAAARQAAARgJANQgHANgOAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_10.setTransform(-44.9,-152.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20512").s().p("AgQBVIAAiqIAhAAIAACqg");
	this.shape_11.setTransform(-54.7,-155.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20512").s().p("AATA4IAAg2IgBgMQAAgGgEgFQgEgEgJgBQgHABgFAEQgEAEgCAGIgBANIAAA2IgiAAIAAhtIAhAAIAAAPIAAAAQACgEAFgEQAEgEAHgDQAFgCAIAAQARAAAJAHQAJAGADAMQADAMAAAPIAAA7g");
	this.shape_12.setTransform(-64.1,-152.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20512").s().p("AgeAyQgNgHgJgNQgIgNAAgRQAAgRAIgNQAJgNANgHQAOgHAQAAQARAAAOAHQAOAHAHANQAJANAAARQAAARgJANQgHANgOAHQgOAHgRABQgQgBgOgHgAgTgTQgHAHAAAMQAAAMAHAIQAHAHAMABQANgBAHgHQAHgIAAgMQAAgMgHgHQgHgIgNAAQgMAAgHAIg");
	this.shape_13.setTransform(-77.5,-152.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20512").s().p("Ag7BQIAAifIA7AAQAQAAAOAEQAOAEAHALQAJALAAATQAAASgIALQgIAKgNAEQgNAFgSgBIgYAAIAAA/gAgYgLIAXAAQAGAAAGgCQAFgBAEgFQADgEAAgHQAAgIgFgFQgEgEgHgBQgHgBgGAAIgSAAg");
	this.shape_14.setTransform(-91,-155.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AgJAIQgDgDAAgFQAAgEADgDQAEgEAFAAQAFAAAEAEQAEADAAAEQAAAFgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_15.setTransform(-5.9,115.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_16.setTransform(-15.8,111.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_17.setTransform(-24.6,109);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_18.setTransform(-32.9,111.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgJgRAAIgGABQgGAAgGAEQgGAFgFAIQgFAIAAANIAAA2IgPAAIAAhRIgBgLIgBgMIARAAIAAAJIAAAHIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAVIAABBg");
	this.shape_19.setTransform(-45.9,111.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_20.setTransform(-59.1,111.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgeA2IAAhIIAAgNIgBgTIAPAAIAAAUIABAAQABgFAEgEIAIgHQADgDAGgCQAFgCAIAAQAHAAAFABIgDAPIgKgBQgIAAgHADQgFAEgFAEQgEAGgCAFQgCAGAAAGIAAA6g");
	this.shape_21.setTransform(-68.7,111.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_22.setTransform(-80.4,111.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AgNBWIAAhaIgXAAIAAgOIAXAAIAAgdQAAgVALgIQAJgJARAAIAGAAIAHABIgCAOIgHgBIgGgBQgGAAgEACQgEACgCAEIgEAJIAAAKIAAAbIAaAAIAAAOIgaAAIAABag");
	this.shape_23.setTransform(-90,108.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_24.setTransform(-100.8,111.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgeA2IAAhIIAAgNIgBgTIAPAAIAAAUIABAAQABgFAEgEIAIgHQADgDAGgCQAFgCAIAAQAHAAAFABIgDAPIgKgBQgIAAgHADQgGAEgEAEQgEAGgCAFQgCAGAAAGIAAA6g");
	this.shape_25.setTransform(-110.4,111.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgJgRAAIgGABQgGAAgGAEQgGAFgFAIQgFAIAAANIAAA2IgPAAIAAhRIgBgLIgBgMIARAAIAAAJIAAAHIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAVIAABBg");
	this.shape_26.setTransform(-129,111.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_27.setTransform(-142.1,111.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_28.setTransform(-154.2,111.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_29.setTransform(-166.9,111.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AAgBVIAAg6QAAgRgGgKQgHgIgRAAIgGABQgGAAgGAEQgFAEgFAIQgFAIgBAOIAAA2IgPAAIAAipIAPAAIAABRIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAUIAABCg");
	this.shape_30.setTransform(-179.6,108.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgTBNQgLgEgIgIQgHgHgFgKQgEgKAAgMQAAgMAEgKQAEgJAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAHADAJQAEAJAAALIAAAHIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHACAIAAQANAAAJgFQAJgFAFgIIAMAKQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgMQgHADgFAEQgGAFgDAFQgDAGAAAHIBLAAQAAgPgKgJQgJgJgSAAQgGAAgIADgAgOgwIAXggIAWAAIgfAgg");
	this.shape_31.setTransform(-199.5,109);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AglArQgKgKAAgUIAAhCIAPAAIAAA5QAAAJABAHQACAHADAEQAEAFAGACQAFACAKAAIAFAAQAGgBAGgEQAGgEAFgIQAFgJgBgOIAAg1IAQAAIAABRIABALIAAAMIgPAAIgBgIIgBgJIgGAIIgJAHIgLAEIgLABQgVAAgKgLg");
	this.shape_32.setTransform(-212.9,111.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AAsBWIAAhSIAAAAQgEAGgFAEIgLAGIgNADIgLABQgMAAgMgEQgKgEgIgHQgIgIgEgJQgFgKAAgMQAAgMAFgKQAEgKAIgHQAIgIAKgEQAMgEAMAAIALABIANAEIALAGQAFAEAEAFIAAAAIAAgRIAQAAIAACogAgRhEQgHADgGAGQgFAFgDAIQgEAHAAAJQAAAJAEAIQADAHAFAGQAGAFAHADQAIADAJAAQAJAAAJgDQAIgDAGgFQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgGgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_33.setTransform(-227.2,114.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_34.setTransform(-247.3,111.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgeA2IAAhIIgBgNIAAgTIAPAAIAAAUIABAAQACgFADgEIAIgHQADgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgKgBQgJAAgGADQgGAEgEAEQgEAGgCAFQgCAGAAAGIAAA6g");
	this.shape_35.setTransform(-262.8,111.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_36.setTransform(-274.4,111.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_37.setTransform(-285.7,111.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_38.setTransform(-294.7,109);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgNBWIAAhaIgYAAIAAgOIAYAAIAAgdQAAgVAKgIQAKgJARAAIAHAAIAHABIgEAOIgFgBIgHgBQgGAAgEACQgEACgDAEIgCAJIgBAKIAAAbIAbAAIAAAOIgbAAIAABag");
	this.shape_39.setTransform(-300.6,108.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_40.setTransform(-307.6,109);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AAGBEQgGgBgCgDQgFgEgCgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAGAAIAIgBIAIgDIABAOQgIAEgNAAIgJgBg");
	this.shape_41.setTransform(-314.4,110.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgJgRAAIgGABQgGAAgGAEQgGAFgFAIQgFAIAAANIAAA2IgPAAIAAhRIgBgLIgBgMIARAAIAAAJIAAAHIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAVIAABBg");
	this.shape_42.setTransform(-325.3,111.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_43.setTransform(-338.4,111.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgXBSQgLgEgIgHQgIgIgFgKQgEgKAAgMQAAgMAEgKQAFgJAIgHQAIgIALgEQALgEAMAAIAMABIALAEIALAGQAGAEADAFIABAAIAAhSIAQAAIAACpIgQAAIAAgSIgBAAQgDAGgGAEIgLAGIgLADIgMABQgMAAgLgEgAgRgGQgIADgFAFQgGAFgDAIQgCAHAAAJQAAAJACAIQADAHAGAGQAFAGAIADQAIADAJAAQAJAAAJgDQAIgDAGgGQAGgGADgHQAEgIAAgJQAAgJgEgHQgDgIgGgFQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_44.setTransform(-352.8,108.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_45.setTransform(-362.6,109);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgYAzQgKgFgJgLIAOgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgDAAgFQAAgHgGgEQgHgDgJgCIgNgEIgIgCIgKgEQgFgDgDgFQgEgFAAgHQAAgJAEgGQAEgGAGgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgDADAAAEQAAAIAGADQAFADALADIAQADQALADAJAGQAHAIABALQAAAJgFAGQgDAGgHAEQgFAEgIACQgIABgIAAQgMAAgMgEg");
	this.shape_46.setTransform(331.1,84.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgXBPQgGgCgGgEQgFgEgDgFQgEgGAAgIQAAgNAHgHQAHgHALgEQALgEALAAIAWgBIAIAAIAAgDQAAgagdAAQgSAAgPAMIgKgKQAQgQAfAAQAIAAAIADQAHACAGAFQAFAEADAHQAEAHAAAJIAAAvIAAAMIACALIgQAAIgBgIIAAgJQgHALgKAEQgJAFgNAAQgIAAgHgCgAAHAaIgQADQgJACgGAFQgGAEAAAIQAAAFADAEIAGAGQAEADAEABIAKAAQAIAAAGgCQAGgDAFgEQAEgFACgGQACgGAAgHIAAgIIgIAAIgPAAgAgKgwIAXggIAVAAIgfAgg");
	this.shape_47.setTransform(319.4,82);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgeA2IAAhHIAAgPIgBgSIAQAAIAAATIAAAAQABgEAEgEIAHgHQAEgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgJgBQgJAAgHAEQgFACgFAGQgEAFgCAFQgCAGAAAFIAAA7g");
	this.shape_48.setTransform(310.5,84.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_49.setTransform(298.8,84.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgLBVIgLgDIgLgGQgGgEgDgGIgBAAIAAASIgQAAIAAipIAQAAIAABSIABAAQADgFAGgEIALgGIALgEIALgBQANAAALAEQALAEAIAIQAIAHAFAJQAEAKAAAMQAAAMgEAKQgFAKgIAIQgIAHgLAEQgLAEgNAAIgLgBgAgRgGQgIADgGAFQgGAFgDAIQgDAHgBAJQABAJADAIQADAHAGAGQAGAGAIADQAJADAIAAQAKAAAIgDQAHgDAHgGQAFgGADgHQADgIAAgJQAAgJgDgHQgDgIgFgFQgHgFgHgDQgIgEgKAAQgIAAgJAEg");
	this.shape_50.setTransform(285.2,81.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_51.setTransform(270.8,84.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AhIBPIAAidIA5AAQAPAAAPAEQARAGAMAKQANAKAIAPQAIAOAAATQAAAUgIAOQgIAPgNAKQgMAKgRAGQgPAEgPAAgAg3BBIAiAAQATAAAOgGQAOgGAKgJQAJgIAEgMQAFgLAAgNQAAgMgFgLQgEgMgJgIQgKgKgOgFQgOgGgTAAIgiAAg");
	this.shape_52.setTransform(255.7,81.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgJAIQgDgDAAgFQAAgEADgDQAEgEAFAAQAFAAAEAEQAEADAAAEQAAAFgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_53.setTransform(236.4,88.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AgYAzQgKgFgJgLIAOgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgDAAgFQAAgHgGgEQgHgDgJgCIgNgEIgIgCIgKgEQgFgDgDgFQgEgFAAgHQAAgJAEgGQAEgGAGgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgDADAAAEQAAAIAGADQAFADALADIAQADQALADAJAGQAHAIABALQAAAJgFAGQgDAGgHAEQgFAEgIACQgIABgIAAQgMAAgMgEg");
	this.shape_54.setTransform(228,84.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_55.setTransform(215.7,84.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgHQAIgIAKgEQAMgEAMAAIAMABIALAEIAMAGQAEAEAFAFIAAAAIAAhSIAQAAIAACpIgQAAIAAgSIAAAAQgFAGgEAEIgMAGIgLADIgMABQgMAAgMgEgAgRgGQgHADgGAFQgFAFgEAIQgDAHAAAJQAAAJADAIQAEAHAFAGQAGAGAHADQAIADAJAAQAKAAAIgDQAIgDAGgGQAGgGADgHQAEgIAAgJQAAgJgEgHQgDgIgGgFQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_56.setTransform(200.9,81.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_57.setTransform(187.4,84.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_58.setTransform(178.6,82);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_59.setTransform(170.4,84.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgKgRAAIgGABQgGACgGAEQgGAEgFAHQgFAJAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAJIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALAKAAAUIAABCg");
	this.shape_60.setTransform(157.3,84.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#111111").s().p("AgmArQgJgKgBgUIAAhCIAQAAIAAA5QAAAJABAHQACAHAEAEQADAFAGACQAGACAIAAIAGAAQAGgBAGgEQAGgEAFgIQAEgJAAgOIAAg1IARAAIAABRIAAALIAAAMIgQAAIAAgIIgBgJIgHAIIgJAHIgKAEIgKABQgWAAgLgLg");
	this.shape_61.setTransform(144.1,84.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgKgRAAIgGABQgGACgGAEQgGAEgFAHQgFAJAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAJIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALAKAAAUIAABCg");
	this.shape_62.setTransform(130.6,84.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_63.setTransform(117.5,84.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_64.setTransform(97.5,84.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgHQAIgIAKgEQALgEANAAIALABIAMAEIAMAGQAEAEAFAFIAAAAIAAhSIAQAAIAACpIgQAAIAAgSIAAAAQgFAGgEAEIgMAGIgMADIgLABQgNAAgLgEgAgRgGQgHADgGAFQgGAFgDAIQgDAHAAAJQAAAJADAIQADAHAGAGQAGAGAHADQAIADAJAAQAKAAAIgDQAIgDAGgGQAGgGADgHQAEgIAAgJQAAgJgEgHQgDgIgGgFQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_65.setTransform(83.1,81.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_66.setTransform(62.8,84.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_67.setTransform(53.3,82);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#111111").s().p("AgeA2IAAhHIgBgPIAAgSIAQAAIAAATIAAAAQACgEADgEIAHgHQAEgDAGgCQAFgCAIAAQAHAAAFABIgDAPIgJgBQgKAAgGAEQgFACgFAGQgEAFgCAFQgCAGAAAFIAAA7g");
	this.shape_68.setTransform(47.5,84.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_69.setTransform(35.8,84.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgGgDgKgCIgNgEIgIgCIgKgEQgFgDgDgFQgEgFAAgHQAAgJAEgGQADgGAHgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgNAJQgFgHgGgEQgFgEgJAAIgHABIgIADIgGAFQgCADAAAEQABAIAFADQAGADAKADIAQADQALADAJAGQAHAIABALQgBAJgEAGQgDAGgGAEQgGAEgJACQgHABgIAAQgMAAgLgEg");
	this.shape_70.setTransform(24.1,84.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_71.setTransform(5.7,84.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgKgRAAIgGABQgGACgGAEQgGAEgFAHQgFAJAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAJIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALAKAAAUIAABCg");
	this.shape_72.setTransform(-7.1,84.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#111111").s().p("AglArQgKgKAAgUIAAhCIAPAAIAAA5QAAAJABAHQACAHADAEQAEAFAGACQAFACAKAAIAFAAQAGgBAGgEQAGgEAFgIQAFgJgBgOIAAg1IAQAAIAABRIABALIAAAMIgPAAIgBgIIgBgJIgGAIIgJAHIgLAEIgLABQgVAAgKgLg");
	this.shape_73.setTransform(-20.3,84.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgGgDgKgCIgOgEIgHgCIgKgEQgFgDgDgFQgDgFgBgHQABgJADgGQADgGAHgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgOAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAFQgCADAAAEQABAIAFADQAGADAKADIAQADQAMADAIAGQAHAIAAALQAAAJgEAGQgDAGgGAEQgHAEgIACQgHABgIAAQgMAAgLgEg");
	this.shape_74.setTransform(-38.6,84.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_75.setTransform(-50.9,84.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#111111").s().p("ABFA2IAAg9QAAgPgGgJQgGgJgRAAQgJAAgGAEQgGADgDAGQgEAFgCAHQgBAHAAAHIAAA3IgPAAIAAg9QAAgPgGgJQgGgJgRAAIgGABQgFACgGAEQgFAEgFAHQgEAJAAANIAAA2IgQAAIAAhQIAAgNIgBgLIARAAIAAAQIAAAAQAGgJAKgFQAKgFAKAAIAKABIAKADQAFACAEAFQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKAKAAAUIAABCg");
	this.shape_76.setTransform(-68.4,84.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_77.setTransform(-85.1,84.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgKgRAAIgGABQgGACgGAEQgGAEgFAHQgFAJAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAJIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALAKAAAUIAABCg");
	this.shape_78.setTransform(-98.7,84.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_79.setTransform(-112.3,84.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#111111").s().p("Ag7BWIAAioIAQAAIAAARIABAAQADgFAGgEIAKgGIAMgEIALgBQAOAAAKAEQALAEAIAIQAIAHAFAKQAEAKAAAMQAAAMgEAKQgFAJgIAIQgIAHgLAEQgKAEgOAAIgLgBIgMgDIgKgGQgGgEgDgGIgBAAIAABSgAgRhEQgIADgGAGQgGAFgEAIQgCAHAAAJQAAAJACAIQAEAHAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAIgDAFgFQAGgGACgHQAEgIAAgJQAAgJgEgHQgCgIgGgFQgFgGgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_80.setTransform(-126.3,87.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_81.setTransform(-141.2,84.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#111111").s().p("AgeA2IAAhHIgBgPIAAgSIAPAAIAAATIABAAQACgEADgEIAIgHQADgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgKgBQgJAAgGAEQgGACgEAGQgEAFgCAFQgCAGAAAFIAAA7g");
	this.shape_82.setTransform(-151.2,84.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#111111").s().p("Ag7BWIAAioIAQAAIAAARIAAAAQAFgFAEgEIAMgGIAMgEIAKgBQAOAAALAEQALAEAHAIQAIAHAEAKQAFAKAAAMQAAAMgFAKQgEAJgIAIQgHAHgLAEQgLAEgOAAIgKgBIgMgDIgMgGQgEgEgFgGIAAAAIAABSgAgRhEQgIADgGAGQgGAFgDAIQgEAHAAAJQAAAJAEAIQADAHAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAHgDAHgFQAFgGADgHQADgIAAgJQAAgJgDgHQgDgIgFgFQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_83.setTransform(-163.2,87.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_84.setTransform(-184.2,84.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#111111").s().p("AAFBEQgFgBgDgDQgDgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAHAAIAIgBIAHgDIACAOQgJAEgNAAIgKgBg");
	this.shape_85.setTransform(-194.8,83.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgKgRAAIgGABQgGACgGAEQgGAEgFAHQgFAJAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAJIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALAKAAAUIAABCg");
	this.shape_86.setTransform(-212.4,84.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#111111").s().p("AgXBNQgLgEgIgIQgIgHgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEAJQAFAKAAAMQAAAMgFAKQgEAKgIAHQgIAIgLAEQgLAEgNAAQgMAAgLgEgAgRgMQgIADgFAGQgGAFgCAHQgEAIAAAJQAAAIAEAIQACAIAGAFQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgFADgIQADgIAAgIQAAgJgDgIQgDgHgFgFQgGgGgIgDQgHgDgKAAQgJAAgIADgAgOgwIAXggIAWAAIgfAgg");
	this.shape_87.setTransform(-226,82);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_88.setTransform(-236,82);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_89.setTransform(-244.2,84.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_90.setTransform(-256.9,84.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#111111").s().p("AglArQgKgKAAgUIAAhCIAPAAIAAA5QAAAJABAHQACAHADAEQAEAFAGACQAFACAKAAIAFAAQAGgBAGgEQAGgEAFgIQAFgJgBgOIAAg1IAQAAIAABRIABALIAAAMIgPAAIgBgIIgBgJIgGAIIgJAHIgLAEIgLABQgVAAgKgLg");
	this.shape_91.setTransform(-269.6,84.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgKgRAAIgGABQgGACgGAEQgGAEgFAHQgFAJAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAJIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALAKAAAUIAABCg");
	this.shape_92.setTransform(-283.1,84.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_93.setTransform(-292.4,82);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#111111").s().p("AAFBEQgFgBgDgDQgDgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAHAAIAIgBIAHgDIACAOQgJAEgNAAIgKgBg");
	this.shape_94.setTransform(-299.2,83.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgKgRAAIgGABQgGACgGAEQgGAEgFAHQgFAJAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAJIABAAIAHgIIAJgHIAKgEIALgBQAVAAAKALQALAKAAAUIAABCg");
	this.shape_95.setTransform(-310.1,84.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_96.setTransform(-323.7,84.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_97.setTransform(-336.2,84.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#111111").s().p("AA+BPIgTgpIhVAAIgTApIgUAAIBKidIAPAAIBKCdgAgkAXIBJAAIglhSg");
	this.shape_98.setTransform(-357.3,81.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#111111").s().p("AgIAIQgEgDAAgFQAAgEAEgDQADgEAFAAQAGAAADAEQAEADAAAEQAAAFgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_99.setTransform(143.2,34.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_100.setTransform(133.3,30.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#111111").s().p("AgeA2IAAhIIAAgNIgBgTIAPAAIAAAUIABAAQABgFAEgEIAIgHQADgDAGgCQAFgCAIAAQAHAAAFACIgDAOIgKgBQgIAAgHADQgGAEgEAEQgEAGgCAGQgCAFAAAGIAAA6g");
	this.shape_101.setTransform(124.5,30.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#111111").s().p("AgmArQgJgKgBgUIAAhCIAQAAIAAA5QAAAJABAHQACAHAEAEQADAFAGACQAGACAIAAIAGAAQAGgBAGgEQAGgEAFgIQAFgJgBgOIAAg1IAQAAIAABRIABALIAAAMIgQAAIAAgIIgBgJIgHAIIgJAHIgKAEIgLABQgVAAgLgLg");
	this.shape_102.setTransform(112.7,30.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#111111").s().p("AgfBMQgNgGgLgKIAMgMQAHAJALAFQALAFAOABQALgBAJgDQAHgDAGgFQAFgHADgHQABgIAAgIIAAgTIAAAAQgHALgMAFQgLAEgMAAQgLAAgLgEQgKgEgIgHQgJgHgEgJQgEgKAAgMQAAgLAEgKQAEgKAIgHQAHgIALgDQAKgFAMAAIAKABIAMADIALAHQAFADAFAHIAAAAIAAgSIARAAIAABnQgBAJgCAJQgCAKgHAIQgGAIgMAGQgMAFgSAAQgRAAgNgFgAgPg/QgHADgGAFQgGAGgDAIQgEAHABAIQgBAJAEAGQADAIAGAFQAGAFAHADQAIADAHABQAJAAAIgDQAHgEAHgEQAGgFADgIQADgHAAgJQAAgIgDgHQgDgIgFgGQgGgFgIgDQgIgDgKAAQgHAAgIADg");
	this.shape_103.setTransform(98.5,33.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_104.setTransform(84.8,30.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#111111").s().p("AgYAzQgKgFgJgLIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgHgDgIgCIgPgEIgIgCIgJgEQgFgDgDgFQgEgFABgHQgBgJAEgGQAEgGAFgDQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgEgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgCADAAAEQgBAIAGADQAFADALADIAQADQAMADAHAGQAJAIAAALQAAAJgEAGQgEAGgHAEQgGAEgHACQgIABgIAAQgNAAgLgEg");
	this.shape_105.setTransform(73.1,30.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_106.setTransform(54.7,30.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#111111").s().p("AgeA2IAAhIIgBgNIAAgTIAPAAIAAAUIABAAQACgFADgEIAIgHQADgDAGgCQAGgCAHAAQAHAAAFACIgDAOIgKgBQgJAAgGADQgGAEgEAEQgEAGgCAGQgCAFAAAGIAAA6g");
	this.shape_107.setTransform(45.9,30.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_108.setTransform(34.2,30.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#111111").s().p("AAhA2IAAg5QAAgSgGgJQgHgJgRAAIgGAAQgGABgGAFQgGADgFAJQgFAIAAANIAAA2IgPAAIAAhRIgBgLIgBgMIARAAIAAAJIAAAIIABAAIAHgIIAJgHIAKgDIALgCQAVAAAKALQALALAAATIAABCg");
	this.shape_109.setTransform(20.6,30.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_110.setTransform(7.6,30.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#111111").s().p("ABFA2IAAg8QAAgQgGgJQgGgIgRAAQgJAAgGADQgGADgDAFQgEAGgCAHQgBAHAAAHIAAA3IgPAAIAAg8QAAgQgGgJQgGgIgRAAIgGAAQgFABgGAFQgFADgFAJQgEAIAAANIAAA2IgQAAIAAhRIAAgMIgBgLIARAAIAAAQIAAAAQAGgJAKgFQAKgFAKAAIAKABIAKAEQAFACAEAEQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKALAAATIAABCg");
	this.shape_111.setTransform(-8.7,30.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_112.setTransform(-32.1,30.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#111111").s().p("AgXBSQgLgEgIgHQgIgIgFgKQgEgKAAgMQAAgMAEgKQAFgJAIgHQAIgIALgEQAKgEANAAIAMABIALAEIALAGQAGAEADAFIABAAIAAhSIAQAAIAACpIgQAAIAAgSIgBAAQgDAGgGAEIgLAGIgLADIgMABQgNAAgKgEgAgRgGQgIADgFAFQgGAFgDAIQgCAHAAAJQAAAJACAIQADAHAGAGQAFAGAIADQAIADAJAAQAKAAAIgDQAIgDAGgGQAGgGADgHQAEgIAAgJQAAgJgEgHQgDgIgGgFQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_113.setTransform(-46.4,27.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#111111").s().p("AgRAbIAQg0IATAAIgTA0g");
	this.shape_114.setTransform(-63.4,36.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#111111").s().p("AgXAzQgLgFgJgLIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgHgDgIgCIgPgEIgIgCIgJgEQgFgDgDgFQgDgFAAgHQAAgJADgGQAEgGAFgDQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgEgHgGgEQgFgEgJAAIgIABIgHADIgGAFQgBADAAAEQgBAIAGADQAFADALADIAQADQALADAIAGQAJAIgBALQAAAJgDAGQgEAGgGAEQgGAEgJACQgHABgIAAQgNAAgKgEg");
	this.shape_115.setTransform(-71.7,30.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_116.setTransform(-83.4,30.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_117.setTransform(-96,30.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#111111").s().p("AgeA2IAAhIIgBgNIAAgTIAQAAIAAAUIAAAAQABgFAEgEIAHgHQAEgDAGgCQAFgCAIAAQAHAAAFACIgDAOIgJgBQgKAAgGADQgFAEgFAEQgEAGgCAGQgCAFAAAGIAAA6g");
	this.shape_118.setTransform(-105.6,30.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_119.setTransform(-117.2,30.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#111111").s().p("AAFBEQgEgBgEgDQgEgEgCgFQgDgFAAgJIAAhBIgXAAIAAgOIAXAAIAAgeIAPAAIAAAeIAhAAIAAAOIghAAIAAA9IABAJIAEAGIAEADIAHAAIAJgBIAIgDIABAOQgKAEgMAAIgKgBg");
	this.shape_120.setTransform(-127,29.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgGgDgJgCIgPgEIgIgCIgJgEQgFgDgDgFQgDgFgBgHQABgJADgGQADgGAGgDQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAFQgBADAAAEQAAAIAFADQAFADALADIAQADQAMADAHAGQAJAIgBALQAAAJgDAGQgEAGgGAEQgHAEgIACQgHABgIAAQgNAAgKgEg");
	this.shape_121.setTransform(-142.7,30.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#111111").s().p("AglArQgLgKABgUIAAhCIAPAAIAAA5QAAAJACAHQABAHADAEQAEAFAGACQAFACAKAAIAGAAQAFgBAGgEQAGgEAFgIQAFgJAAgOIAAg1IAPAAIAABRIABALIABAMIgQAAIgBgIIAAgJIgHAIIgJAHIgLAEIgLABQgVAAgKgLg");
	this.shape_122.setTransform(-154.6,30.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#111111").s().p("AAGBEQgGgBgCgDQgEgEgDgFQgDgFAAgJIAAhBIgXAAIAAgOIAXAAIAAgeIAPAAIAAAeIAhAAIAAAOIghAAIAAA9IABAJIAEAGIAEADIAHAAIAIgBIAJgDIAAAOQgJAEgMAAIgJgBg");
	this.shape_123.setTransform(-165.2,29.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAIAFQAHAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgGgDgKgCIgOgEIgIgCIgJgEQgFgDgDgFQgDgFgBgHQABgJADgGQADgGAHgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAFQgCADAAAEQABAIAFADQAGADAKADIAQADQAMADAHAGQAIAIAAALQAAAJgDAGQgEAGgGAEQgHAEgIACQgHABgIAAQgNAAgKgEg");
	this.shape_124.setTransform(-180.9,30.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_125.setTransform(-192.7,30.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#111111").s().p("ABFA2IAAg8QAAgQgGgJQgGgIgRAAQgJAAgGADQgGADgDAFQgEAGgCAHQgBAHAAAHIAAA3IgPAAIAAg8QAAgQgGgJQgGgIgRAAIgGAAQgFABgGAFQgFADgFAJQgEAIAAANIAAA2IgQAAIAAhRIAAgMIgBgLIARAAIAAAQIAAAAQAGgJAKgFQAKgFAKAAIAKABIAKAEQAFACAEAEQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKALAAATIAABCg");
	this.shape_126.setTransform(-209.8,30.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_127.setTransform(-227,30.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#111111").s().p("AAFBEQgFgBgDgDQgDgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAHAAIAIgBIAHgDIACAOQgJAEgNAAIgKgBg");
	this.shape_128.setTransform(-238,29.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_129.setTransform(-248.7,30.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#111111").s().p("AgeA2IAAhIIgBgNIAAgTIAPAAIAAAUIABAAQACgFADgEIAIgHQADgDAGgCQAGgCAHAAQAHAAAFACIgDAOIgKgBQgJAAgGADQgGAEgEAEQgEAGgCAGQgCAFAAAGIAAA6g");
	this.shape_130.setTransform(-258.3,30.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_131.setTransform(-276.7,30.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#111111").s().p("AglArQgLgKABgUIAAhCIAPAAIAAA5QAAAJACAHQABAHADAEQAEAFAGACQAFACAKAAIAGAAQAFgBAGgEQAGgEAFgIQAFgJAAgOIAAg1IAPAAIAABRIABALIABAMIgQAAIgBgIIAAgJIgHAIIgJAHIgLAEIgLABQgVAAgKgLg");
	this.shape_132.setTransform(-290.1,30.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#111111").s().p("AAsBWIAAhSIgBAAQgEAGgFAEIgKAGIgMADIgMABQgNAAgKgEQgLgEgIgHQgIgIgFgJQgEgKAAgMQAAgMAEgKQAFgKAIgHQAIgIALgEQAKgEANAAIAMABIAMAEIAKAGQAFAEAEAFIABAAIAAgRIAQAAIAACogAgRhEQgHADgGAGQgFAFgDAIQgDAHAAAJQAAAJADAIQADAHAFAGQAGAFAHADQAIADAJAAQAJAAAJgDQAIgDAGgFQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgGgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_133.setTransform(-304.4,33.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_134.setTransform(-324.5,30.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#111111").s().p("AgeA2IAAhIIAAgNIgBgTIAPAAIAAAUIABAAQACgFADgEIAIgHQADgDAGgCQAGgCAHAAQAHAAAFACIgDAOIgKgBQgIAAgHADQgFAEgFAEQgEAGgCAGQgCAFAAAGIAAA6g");
	this.shape_135.setTransform(-333.4,30.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_136.setTransform(-344.9,30.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#111111").s().p("Ag7BWIAAioIAQAAIAAARIAAAAQAEgFAFgEIALgGIANgEIAKgBQANAAAMAEQAKAEAIAIQAIAHAEAKQAFAKAAAMQAAAMgFAKQgEAJgIAIQgIAHgKAEQgMAEgNAAIgKgBIgNgDIgLgGQgFgEgEgGIAAAAIAABSgAgRhEQgIADgGAGQgGAFgEAIQgDAHAAAJQAAAJADAIQAEAHAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgHQAEgIAAgJQAAgJgEgHQgCgIgGgFQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_137.setTransform(-357.8,33.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#111111").s().p("AgRAaIAQgzIATAAIgTAzg");
	this.shape_138.setTransform(330.6,9.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_139.setTransform(320.6,3.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#111111").s().p("AAFBEQgEgBgDgDQgEgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAHAAIAHgBIAIgDIABAOQgJAEgMAAIgKgBg");
	this.shape_140.setTransform(310,2.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#111111").s().p("AgeA2IAAhHIAAgPIgBgSIAPAAIAAATIABAAQABgEAEgEIAIgHQADgDAGgCQAFgCAIAAQAHAAAFABIgDAPIgKgBQgIAAgHADQgFAEgFAFQgEAFgCAFQgCAHAAAEIAAA7g");
	this.shape_141.setTransform(303,3.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_142.setTransform(291.5,3.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#111111").s().p("Ag7BWIAAioIAQAAIAAARIAAAAQAFgFAEgEIALgGIANgEIAKgBQAOAAALAEQALAEAHAIQAIAHAEAKQAFAKAAAMQAAAMgFAKQgEAJgIAIQgHAHgLAEQgLAEgOAAIgKgBIgNgDIgLgGQgEgEgFgGIAAAAIAABSgAgRhEQgIADgGAGQgGAFgEAIQgDAHAAAJQAAAJADAIQAEAHAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAHgDAHgFQAFgGACgHQAEgIAAgJQAAgJgEgHQgCgIgFgFQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_143.setTransform(278.6,6.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_144.setTransform(257.7,3.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#111111").s().p("ABFA2IAAg9QAAgPgGgJQgGgJgRAAQgJAAgGAEQgGADgDAGQgEAFgCAHQgBAHAAAHIAAA3IgPAAIAAg9QAAgPgGgJQgGgJgRAAIgGACQgFABgGADQgFAEgFAIQgEAJAAANIAAA2IgQAAIAAhQIAAgMIgBgMIARAAIAAAQIAAAAQAGgKAKgEQAKgFAKAAIAKABIAKADQAFADAEAEQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKAKAAAVIAABBg");
	this.shape_145.setTransform(241.4,3.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_146.setTransform(228.5,1.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#111111").s().p("AAGBEQgFgBgDgDQgEgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAGAAIAIgBIAIgDIABAOQgIAEgNAAIgJgBg");
	this.shape_147.setTransform(221.7,2.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_148.setTransform(214.8,0.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#111111").s().p("AglBGQgKgKAAgUIAAhCIAPAAIAAA5QAAAJABAHQACAHADAEQAEAFAGACQAFACAKAAIAFAAQAGgBAGgEQAGgEAFgIQAFgJgBgOIAAg1IAQAAIAABRIABALIAAAMIgPAAIgBgIIgBgJIgGAIIgJAHIgLAEIgLABQgVAAgKgLgAgNgwIAXggIAWAAIggAgg");
	this.shape_149.setTransform(205.2,1.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_150.setTransform(185.4,3.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#111111").s().p("AAFBEQgFgBgDgDQgDgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAHAAIAIgBIAHgDIACAOQgJAEgNAAIgKgBg");
	this.shape_151.setTransform(175.5,2.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#111111").s().p("AgYAzQgLgFgIgLIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgDAAgFQAAgHgGgEQgHgDgJgCIgNgEIgIgCIgKgEQgFgDgDgFQgDgFAAgHQAAgJADgGQAEgGAGgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgCADgBAEQAAAIAGADQAGADAKADIAQADQALADAJAGQAHAIABALQAAAJgFAGQgDAGgHAEQgGAEgHACQgIABgIAAQgMAAgMgEg");
	this.shape_152.setTransform(166.5,3.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_153.setTransform(154.6,3.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_154.setTransform(134.6,3.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#111111").s().p("AgXBSQgLgEgIgHQgIgIgFgKQgEgKAAgMQAAgMAEgKQAFgJAIgHQAIgIALgEQALgEAMAAIAMABIALAEIALAGQAGAEADAFIABAAIAAhSIAQAAIAACpIgQAAIAAgSIgBAAQgDAGgGAEIgLAGIgLADIgMABQgMAAgLgEgAgRgGQgHADgGAFQgGAFgDAIQgCAHAAAJQAAAJACAIQADAHAGAGQAGAGAHADQAIADAJAAQAJAAAJgDQAIgDAGgGQAGgGADgHQAEgIAAgJQAAgJgEgHQgDgIgGgFQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_155.setTransform(120.3,0.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_156.setTransform(99.5,3.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#111111").s().p("AgYAzQgKgFgJgLIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgDAAgFQAAgHgGgEQgHgDgIgCIgOgEIgIgCIgKgEQgFgDgDgFQgEgFABgHQgBgJAEgGQAEgGAFgDQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAEAFALIgNAJQgEgHgGgEQgHgEgIAAIgIABIgHADIgFAFQgCADAAAEQgBAIAGADQAFADALADIAQADQALADAJAGQAIAIAAALQAAAJgFAGQgDAGgHAEQgGAEgHACQgIABgIAAQgNAAgLgEg");
	this.shape_157.setTransform(87.4,3.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_158.setTransform(75.7,3.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#111111").s().p("Ag7BWIAAioIAQAAIAAARIAAAAQAFgFAEgEIAMgGIALgEIALgBQANAAAMAEQALAEAHAIQAIAHAEAKQAFAKAAAMQAAAMgFAKQgEAJgIAIQgHAHgLAEQgMAEgNAAIgLgBIgLgDIgMgGQgEgEgFgGIAAAAIAABSgAgRhEQgIADgGAGQgGAFgDAIQgEAHAAAJQAAAJAEAIQADAHAGAGQAGAFAIADQAIADAJAAQAKAAAIgDQAHgDAHgFQAFgGADgHQADgIAAgJQAAgJgDgHQgDgIgFgFQgHgGgHgDQgIgEgKAAQgJAAgIAEg");
	this.shape_159.setTransform(62.8,6.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_160.setTransform(48.4,3.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#111111").s().p("AgeA2IAAhHIgBgPIAAgSIAQAAIAAATIAAAAQABgEAEgEIAHgHQAEgDAGgCQAFgCAIAAQAHAAAFABIgDAPIgJgBQgKAAgGADQgFAEgFAFQgEAFgCAFQgCAHAAAEIAAA7g");
	this.shape_161.setTransform(38.8,3.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_162.setTransform(20.5,3.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#111111").s().p("AgIA0IgthnIASAAIAjBXIAAAAIAkhXIASAAIgtBng");
	this.shape_163.setTransform(8.1,3.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_164.setTransform(-4.4,3.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#111111").s().p("AgeA2IAAhHIAAgPIgBgSIAQAAIAAATIAAAAQABgEAEgEIAHgHQAEgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgJgBQgJAAgHADQgGAEgEAFQgEAFgCAFQgCAHAAAEIAAA7g");
	this.shape_165.setTransform(-14,3.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#111111").s().p("AgLBVIgMgDIgKgGQgGgEgDgGIgBAAIAAASIgQAAIAAipIAQAAIAABSIABAAQADgFAGgEIAKgGIAMgEIALgBQAOAAAKAEQALAEAIAIQAIAHAFAJQAEAKAAAMQAAAMgEAKQgFAKgIAIQgIAHgLAEQgKAEgOAAIgLgBgAgRgGQgIADgGAFQgGAFgEAIQgCAHAAAJQAAAJACAIQAEAHAGAGQAGAGAIADQAIADAJAAQAKAAAIgDQAIgDAFgGQAGgGACgHQAEgIAAgJQAAgJgEgHQgCgIgGgFQgFgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_166.setTransform(-26,0.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgKgRAAIgGACQgGABgGADQgGAEgFAIQgFAJAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAIIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAVIAABBg");
	this.shape_167.setTransform(-47.2,3.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#111111").s().p("AglArQgLgKAAgUIAAhCIAQAAIAAA5QAAAJABAHQACAHAEAEQADAFAGACQAGACAJAAIAFAAQAGgBAGgEQAGgEAFgIQAFgJgBgOIAAg1IAQAAIAABRIABALIAAAMIgQAAIAAgIIgBgJIgGAIIgJAHIgLAEIgLABQgVAAgKgLg");
	this.shape_168.setTransform(-60.4,3.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAIAFQAHAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgGgDgKgCIgOgEIgIgCIgJgEQgFgDgDgFQgDgFgBgHQABgJADgGQADgGAHgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAFQgCADAAAEQABAIAFADQAGADAKADIAQADQAMADAHAGQAIAIAAALQAAAJgDAGQgEAGgGAEQgHAEgIACQgHABgIAAQgNAAgKgEg");
	this.shape_169.setTransform(-78.7,3.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_170.setTransform(-91,3.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#111111").s().p("ABFA2IAAg9QAAgPgGgJQgGgJgRAAQgJAAgGAEQgGADgDAGQgEAFgCAHQgBAHAAAHIAAA3IgPAAIAAg9QAAgPgGgJQgGgJgRAAIgGACQgFABgGADQgFAEgFAIQgEAJAAANIAAA2IgQAAIAAhQIAAgMIgBgMIARAAIAAAQIAAAAQAGgKAKgEQAKgFAKAAIAKABIAKADQAFADAEAEQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKAKAAAVIAABBg");
	this.shape_171.setTransform(-108.6,3.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_172.setTransform(-125.3,3.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#111111").s().p("AgeA2IAAhHIgBgPIAAgSIAQAAIAAATIAAAAQABgEAEgEIAHgHQAEgDAGgCQAFgCAIAAQAHAAAFABIgDAPIgJgBQgKAAgGADQgFAEgFAFQgEAFgCAFQgCAHAAAEIAAA7g");
	this.shape_173.setTransform(-134.9,3.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_174.setTransform(-146.4,3.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#111111").s().p("AAgBVIAAg6QAAgRgGgKQgHgJgRAAIgGACQgFABgHADQgGADgFAIQgEAJAAAOIAAA2IgQAAIAAipIAQAAIAABRIAAAAIAHgHIAJgGIALgFIAKgBQAWAAAJALQALAKAAAUIAABCg");
	this.shape_175.setTransform(-159.1,0.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_176.setTransform(-178.9,3.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#111111").s().p("AgeA2IAAhHIAAgPIgBgSIAQAAIAAATIAAAAQABgEAEgEIAHgHQAEgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgJgBQgJAAgHADQgGAEgEAFQgEAFgCAFQgCAHAAAEIAAA7g");
	this.shape_177.setTransform(-187.7,3.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_178.setTransform(-199.9,3.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#111111").s().p("AAgBVIAAg6QAAgRgGgKQgHgJgRAAIgGACQgGABgGADQgFADgFAIQgFAJgBAOIAAA2IgPAAIAAipIAPAAIAABRIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAUIAABCg");
	this.shape_179.setTransform(-213.8,0.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#111111").s().p("AA+BPIgTgpIhVAAIgTApIgUAAIBKidIAPAAIBKCdgAgkAXIBJAAIglhSg");
	this.shape_180.setTransform(-228.6,1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#111111").s().p("AgIAIQgEgDAAgFQAAgEAEgDQADgEAFAAQAGAAADAEQAEADAAAEQAAAFgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_181.setTransform(-246.7,7.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_182.setTransform(-256.8,3.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#111111").s().p("AAFBEQgEgBgEgDQgDgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAHAAIAHgBIAIgDIABAOQgJAEgMAAIgKgBg");
	this.shape_183.setTransform(-267.4,2.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#111111").s().p("AgeA2IAAhHIAAgPIgBgSIAPAAIAAATIABAAQABgEAEgEIAIgHQADgDAGgCQAFgCAIAAQAHAAAFABIgDAPIgKgBQgIAAgHADQgFAEgFAFQgEAFgCAFQgCAHAAAEIAAA7g");
	this.shape_184.setTransform(-274.3,3.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_185.setTransform(-286,3.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#111111").s().p("AgfBMQgNgGgLgKIAMgMQAHAJALAFQALAGAOgBQALAAAIgDQAJgDAFgGQAFgFADgIQABgHAAgJIAAgSIAAAAQgHAKgLAEQgLAFgNAAQgLAAgLgEQgLgEgHgHQgJgHgEgJQgFgKABgMQgBgLAFgKQAEgKAIgHQAHgHALgFQAKgEAMAAIAKABIAMADIALAGQAFAEAFAGIAAAAIAAgRIARAAIAABnQgBAIgCALQgCAJgHAIQgGAIgMAFQgMAGgSAAQgRAAgNgFgAgPg/QgIADgFAGQgGAFgDAHQgEAIABAIQgBAIAEAIQADAHAGAEQAFAGAIADQAIADAHAAQAJAAAIgDQAHgCAHgGQAGgEADgHQADgIAAgJQAAgIgDgIQgDgHgFgFQgGgGgIgDQgIgEgKAAQgHAAgIAEg");
	this.shape_186.setTransform(-300.3,6.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_187.setTransform(-314,3.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#111111").s().p("AAGBEQgFgBgDgDQgEgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAGAAIAIgBIAIgDIABAOQgIAEgNAAIgJgBg");
	this.shape_188.setTransform(-324.6,2.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_189.setTransform(-335.8,3.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#111111").s().p("AgeA2IAAhHIgBgPIAAgSIAQAAIAAATIAAAAQACgEADgEIAHgHQAEgDAGgCQAFgCAIAAQAHAAAFABIgDAPIgJgBQgKAAgGADQgFAEgFAFQgEAFgCAFQgCAHAAAEIAAA7g");
	this.shape_190.setTransform(-345.8,3.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#111111").s().p("Ag7BWIAAioIAQAAIAAARIAAAAQAEgFAFgEIALgGIANgEIAKgBQANAAAMAEQAKAEAIAIQAIAHAEAKQAFAKAAAMQAAAMgFAKQgEAJgIAIQgIAHgKAEQgMAEgNAAIgKgBIgNgDIgLgGQgFgEgEgGIAAAAIAABSgAgRhEQgIADgGAGQgGAFgEAIQgDAHAAAJQAAAJADAIQAEAHAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgHQAEgIAAgJQAAgJgEgHQgCgIgGgFQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_191.setTransform(-357.8,6.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_192.setTransform(240,-23.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#111111").s().p("AgeA2IAAhIIgBgOIAAgSIAQAAIAAAUIAAAAQACgFADgEIAHgHQAEgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgKgBQgJAAgGADQgGAEgEAEQgEAFgCAGQgCAHAAAEIAAA7g");
	this.shape_193.setTransform(231.2,-23.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_194.setTransform(219.6,-23.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#111111").s().p("Ag7BWIAAioIAQAAIAAARIABAAQAEgFAFgEIAKgGIAMgEIALgBQAOAAAKAEQALAEAIAIQAIAHAFAKQAEAKAAAMQAAAMgEAKQgFAJgIAIQgIAHgLAEQgKAEgOAAIgLgBIgMgDIgKgGQgFgEgEgGIgBAAIAABSgAgRhEQgIADgGAGQgGAFgEAIQgCAHAAAJQAAAJACAIQAEAHAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgHQAEgIAAgJQAAgJgEgHQgCgIgGgFQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_195.setTransform(206.8,-20.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#111111").s().p("AgYAzQgKgFgJgLIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgHgDgIgCIgOgEIgJgCIgJgEQgFgDgDgFQgEgFABgHQgBgJAEgGQAEgGAFgDQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgEgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgCADAAAEQgBAIAGADQAFADALADIAQADQAMADAHAGQAJAIgBALQABAJgEAGQgEAGgHAEQgGAEgHACQgIABgIAAQgNAAgLgEg");
	this.shape_196.setTransform(187.4,-23.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_197.setTransform(175.1,-23.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#111111").s().p("AgeA2IAAhIIgBgOIAAgSIAPAAIAAAUIABAAQACgFADgEIAHgHQAEgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgKgBQgJAAgGADQgGAEgEAEQgEAFgCAGQgCAHAAAEIAAA7g");
	this.shape_198.setTransform(165,-23.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#111111").s().p("AAFBEQgEgBgEgDQgDgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAHAAIAHgBIAIgDIABAOQgJAEgMAAIgKgBg");
	this.shape_199.setTransform(156.1,-24.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_200.setTransform(144.9,-23.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAIAFQAHAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgGgDgKgCIgOgEIgIgCIgJgEQgFgDgDgFQgDgFgBgHQABgJADgGQADgGAHgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAFQgCADAAAEQABAIAFADQAGADAKADIAQADQAMADAHAGQAIAIAAALQAAAJgDAGQgEAGgGAEQgHAEgIACQgHABgIAAQgNAAgKgEg");
	this.shape_201.setTransform(132.8,-23.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_202.setTransform(120.5,-23.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgKgRABIgGABQgGABgGADQgGAFgFAIQgFAIAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAIIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALALAAAUIAABBg");
	this.shape_203.setTransform(106.5,-23.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgDAAgFQAAgHgGgEQgGgDgKgCIgOgEIgHgCIgKgEQgFgDgDgFQgDgFgBgHQABgJADgGQADgGAHgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgOAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAFQgCADAAAEQABAIAFADQAGADAKADIAQADQAMADAIAGQAHAIAAALQAAAJgEAGQgDAGgGAEQgHAEgIACQgHABgIAAQgMAAgLgEg");
	this.shape_204.setTransform(88.3,-23.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_205.setTransform(76,-23.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#111111").s().p("ABFA2IAAg9QAAgPgGgJQgGgJgRABQgJAAgGADQgGADgDAGQgEAFgCAHQgBAGAAAIIAAA3IgPAAIAAg9QAAgPgGgJQgGgJgRABIgGABQgFABgGADQgFAFgFAIQgEAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIARAAIAAAQIAAAAQAGgKAKgEQAKgFAKAAIAKABIAKAEQAFABAEAFQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKALAAAUIAABBg");
	this.shape_206.setTransform(58.5,-23.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_207.setTransform(41.8,-23.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_208.setTransform(29.7,-23.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_209.setTransform(17,-23.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#111111").s().p("AAgBVIAAg6QAAgRgGgKQgHgJgRABIgGABQgFABgHADQgFAEgGAIQgEAIAAAOIAAA2IgQAAIAAipIAQAAIAABRIAAAAIAHgHIAJgGIALgFIAKgBQAWAAAJALQALALAAATIAABCg");
	this.shape_210.setTransform(4.3,-26.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#111111").s().p("AgTBNQgLgEgIgIQgHgHgFgKQgEgKAAgMQAAgMAEgKQAEgJAIgIQAIgHAKgEQAKgFALAAQANAAAKAFQAKAEAHAHQAHAHADAJQAEAJAAALIAAAHIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHACAIAAQANAAAJgFQAJgFAFgIIAMAKQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgMQgHADgFAEQgGAFgDAFQgDAGAAAHIBLAAQAAgPgKgJQgJgJgSAAQgGAAgIADgAgOgwIAXggIAWAAIgfAgg");
	this.shape_211.setTransform(-15.6,-25.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#111111").s().p("AgmArQgKgKABgUIAAhCIAPAAIAAA5QAAAJACAHQABAHADAEQAEAFAGACQAFACAJAAIAHAAQAFgBAGgEQAGgEAFgIQAEgJABgOIAAg1IAQAAIAABRIAAALIABAMIgQAAIgBgIIAAgJIgIAIIgJAHIgKAEIgKABQgWAAgLgLg");
	this.shape_212.setTransform(-29,-23.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#111111").s().p("AAsBWIAAhSIgBAAQgDAGgGAEIgLAGIgLADIgMABQgNAAgKgEQgLgEgIgHQgIgIgFgJQgEgKAAgMQAAgMAEgKQAFgKAIgHQAIgIALgEQAKgEANAAIAMABIALAEIALAGQAGAEADAFIABAAIAAgRIAQAAIAACogAgRhEQgIADgFAGQgGAFgDAIQgCAHAAAJQAAAJACAIQADAHAGAGQAFAFAIADQAIADAJAAQAKAAAIgDQAIgDAGgFQAGgGADgHQAEgIAAgJQAAgJgEgHQgDgIgGgFQgGgGgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_213.setTransform(-43.3,-20.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#111111").s().p("AgsBQIgHgCIACgOQAFACAHAAQAIAAAFgFQAFgFADgJIAJgUIguhpIATAAIAjBWIAihWIATAAIg3CDQgFAMgIAHQgIAIgOAAIgIAAg");
	this.shape_214.setTransform(-62.6,-20.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_215.setTransform(-82.2,-23.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#111111").s().p("ABFA2IAAg9QAAgPgGgJQgGgJgRABQgJAAgGADQgGADgDAGQgEAFgCAHQgBAGAAAIIAAA3IgPAAIAAg9QAAgPgGgJQgGgJgRABIgGABQgFABgGADQgFAFgFAIQgEAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIARAAIAAAQIAAAAQAGgKAKgEQAKgFAKAAIAKABIAKAEQAFABAEAFQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKALAAAUIAABBg");
	this.shape_216.setTransform(-99.8,-23.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgGgDgJgCIgPgEIgIgCIgJgEQgFgDgDgFQgDgFgBgHQABgJADgGQADgGAGgDQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAFQgBADAAAEQAAAIAFADQAFADALADIAQADQAMADAHAGQAJAIgBALQAAAJgDAGQgEAGgGAEQgHAEgIACQgHABgIAAQgNAAgKgEg");
	this.shape_217.setTransform(-114.8,-23.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_218.setTransform(-122.9,-25.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#111111").s().p("ABFA2IAAg9QAAgPgGgJQgGgJgRABQgJAAgGADQgGADgDAGQgEAFgCAHQgBAGAAAIIAAA3IgPAAIAAg9QAAgPgGgJQgGgJgRABIgGABQgFABgGADQgFAFgFAIQgEAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIARAAIAAAQIAAAAQAGgKAKgEQAKgFAKAAIAKABIAKAEQAFABAEAFQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKALAAAUIAABBg");
	this.shape_219.setTransform(-136.2,-23.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_220.setTransform(-155.7,-25.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#111111").s().p("AAFBEQgEgBgEgDQgDgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAHAAIAHgBIAIgDIABAOQgJAEgMAAIgKgBg");
	this.shape_221.setTransform(-162.5,-24.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_222.setTransform(-179.7,-23.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_223.setTransform(-199,-23.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#111111").s().p("AAFBEQgEgBgEgDQgEgEgCgFQgDgFAAgJIAAhBIgXAAIAAgOIAXAAIAAgeIAPAAIAAAeIAhAAIAAAOIghAAIAAA9IABAJIADAGIAFADIAIAAIAIgBIAIgDIABAOQgJAEgNAAIgKgBg");
	this.shape_224.setTransform(-209.6,-24.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#111111").s().p("AgeA2IAAhIIAAgOIgBgSIAQAAIAAAUIAAAAQABgFAEgEIAHgHQAEgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgJgBQgJAAgHADQgGAEgEAEQgEAFgCAGQgCAHAAAEIAAA7g");
	this.shape_225.setTransform(-216.5,-23.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_226.setTransform(-228.1,-23.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgHQAIgIAKgEQALgEANAAIALABIANAEIALAGQAEAEAFAFIAAAAIAAhSIAQAAIAACpIgQAAIAAgSIAAAAQgFAGgEAEIgLAGIgNADIgLABQgNAAgLgEgAgRgGQgIADgFAFQgFAFgDAIQgEAHAAAJQAAAJAEAIQADAHAFAGQAFAGAIADQAIADAJAAQAKAAAIgDQAIgDAGgGQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_227.setTransform(-241.7,-26.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_228.setTransform(-251.5,-25.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#111111").s().p("AglArQgLgKAAgUIAAhCIAQAAIAAA5QAAAJABAHQACAHAEAEQADAFAGACQAGACAJAAIAFAAQAGgBAGgEQAGgEAFgIQAFgJgBgOIAAg1IAQAAIAABRIABALIAAAMIgQAAIAAgIIgBgJIgGAIIgJAHIgLAEIgLABQgVAAgKgLg");
	this.shape_229.setTransform(-261.1,-23.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_230.setTransform(-273.1,-23.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#111111").s().p("AgYAzQgKgFgJgLIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgHgDgIgCIgPgEIgIgCIgJgEQgFgDgDgFQgEgFABgHQgBgJAEgGQAEgGAFgDQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgEgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgCADAAAEQgBAIAGADQAFADALADIAQADQAMADAHAGQAJAIgBALQAAAJgDAGQgEAGgHAEQgFAEgIACQgIABgIAAQgNAAgLgEg");
	this.shape_231.setTransform(-291,-23.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_232.setTransform(-302.8,-23.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgHQAIgIAKgEQAMgEAMAAIALABIANAEIALAGQAFAEAEAFIAAAAIAAhSIAQAAIAACpIgQAAIAAgSIAAAAQgEAGgFAEIgLAGIgNADIgLABQgMAAgMgEgAgRgGQgHADgGAFQgFAFgDAIQgEAHAAAJQAAAJAEAIQADAHAFAGQAGAGAHADQAIADAJAAQAJAAAJgDQAIgDAGgGQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_233.setTransform(-317.2,-26.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_234.setTransform(-330.8,-23.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#111111").s().p("AgmArQgKgKAAgUIAAhCIAQAAIAAA5QAAAJABAHQACAHAEAEQADAFAGACQAGACAIAAIAGAAQAGgBAGgEQAGgEAFgIQAEgJAAgOIAAg1IARAAIAABRIAAALIABAMIgRAAIAAgIIgBgJIgHAIIgJAHIgKAEIgKABQgWAAgLgLg");
	this.shape_235.setTransform(-344.2,-23.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#111111").s().p("Ag7BWIAAioIAQAAIAAARIAAAAQAEgFAFgEIALgGIANgEIAKgBQANAAAMAEQAKAEAIAIQAIAHAEAKQAFAKAAAMQAAAMgFAKQgEAJgIAIQgIAHgKAEQgMAEgNAAIgKgBIgNgDIgLgGQgFgEgEgGIAAAAIAABSgAgRhEQgIADgGAGQgGAFgEAIQgDAHAAAJQAAAJADAIQAEAHAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgHQAEgIAAgJQAAgJgEgHQgCgIgGgFQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_236.setTransform(-357.8,-20.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_237.setTransform(303.6,-50.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#111111").s().p("ABFA2IAAg8QAAgQgGgJQgGgJgRAAQgJABgGADQgGADgDAFQgEAGgCAHQgBAGAAAIIAAA3IgPAAIAAg8QAAgQgGgJQgGgJgRAAIgGABQgFABgGAFQgFAEgFAHQgEAJAAANIAAA2IgQAAIAAhQIAAgNIgBgLIARAAIAAAQIAAAAQAGgJAKgFQAKgFAKAAIAKABIAKADQAFACAEAFQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKALAAATIAABCg");
	this.shape_238.setTransform(286,-50.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#111111").s().p("AgXBNQgLgEgIgIQgIgHgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgIQAIgHALgEQALgFAMAAQANAAALAFQALAEAIAHQAIAIAEAJQAFAKAAAMQAAAMgFAKQgEAKgIAHQgIAIgLAEQgLAEgNAAQgMAAgLgEgAgRgMQgIADgFAGQgGAFgCAHQgEAIAAAJQAAAIAEAIQACAIAGAFQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgFADgIQADgIAAgIQAAgJgDgIQgDgHgFgFQgGgGgIgDQgHgDgKAAQgJAAgIADgAgOgwIAXggIAWAAIgfAgg");
	this.shape_239.setTransform(268.9,-52.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_240.setTransform(256.4,-50.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#111111").s().p("AgRAaIAQg0IATAAIgTA0g");
	this.shape_241.setTransform(240.2,-44.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_242.setTransform(229.8,-50.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgHQAIgIAKgEQALgEANAAIALABIAMAEIAMAGQAEAEAFAFIAAAAIAAhSIAQAAIAACpIgQAAIAAgSIAAAAQgFAGgEAEIgMAGIgMADIgLABQgNAAgLgEgAgRgGQgIADgFAFQgGAFgDAIQgDAHAAAJQAAAJADAIQADAHAGAGQAFAGAIADQAIADAJAAQAKAAAIgDQAIgDAGgGQAGgGADgHQAEgIAAgJQAAgJgEgHQgDgIgGgFQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_243.setTransform(215,-53.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_244.setTransform(201.5,-50.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgHQAIgIAKgEQAMgEAMAAIAMABIALAEIAMAGQAEAEAFAFIAAAAIAAhSIAQAAIAACpIgQAAIAAgSIAAAAQgFAGgEAEIgMAGIgLADIgMABQgMAAgMgEgAgRgGQgHADgGAFQgFAFgEAIQgDAHAAAJQAAAJADAIQAEAHAFAGQAGAGAHADQAIADAJAAQAKAAAIgDQAIgDAGgGQAGgGADgHQAEgIAAgJQAAgJgEgHQgDgIgGgFQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_245.setTransform(187.9,-53.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_246.setTransform(178,-52.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#111111").s().p("AgmArQgJgKgBgUIAAhCIAQAAIAAA5QAAAJABAHQACAHAEAEQADAFAGACQAGACAIAAIAGAAQAGgBAGgEQAGgEAFgIQAEgJAAgOIAAg1IARAAIAABRIAAALIAAAMIgQAAIAAgIIgBgJIgHAIIgJAHIgKAEIgKABQgWAAgLgLg");
	this.shape_247.setTransform(168.4,-50);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_248.setTransform(156.4,-50.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_249.setTransform(140.7,-53.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_250.setTransform(131.2,-50.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#111111").s().p("AgXBSQgLgEgIgHQgIgIgFgKQgEgKAAgMQAAgMAEgKQAFgJAIgHQAIgIALgEQAKgEANAAIAMABIAMAEIAKAGQAFAEAEAFIABAAIAAhSIAQAAIAACpIgQAAIAAgSIgBAAQgEAGgFAEIgKAGIgMADIgMABQgNAAgKgEgAgRgGQgHADgGAFQgFAFgDAIQgDAHAAAJQAAAJADAIQADAHAFAGQAGAGAHADQAIADAJAAQAJAAAJgDQAIgDAGgGQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_251.setTransform(116.8,-53.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_252.setTransform(96.7,-50.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_253.setTransform(87.9,-52.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_254.setTransform(79.6,-50.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#111111").s().p("AAhA2IAAg5QAAgSgGgJQgHgKgRAAIgGABQgGABgGAFQgGAEgFAHQgFAJAAANIAAA2IgPAAIAAhRIgBgLIgBgMIARAAIAAAJIAAAIIABAAIAHgIIAJgHIAKgDIALgCQAVAAAKALQALALAAATIAABCg");
	this.shape_255.setTransform(66.6,-50.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_256.setTransform(53.6,-50.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#111111").s().p("AAGBEQgGgBgCgDQgEgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIAEAGIAEADIAHAAIAIgBIAIgDIABAOQgJAEgMAAIgJgBg");
	this.shape_257.setTransform(43.7,-51.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#111111").s().p("AgeA2IAAhHIgBgPIAAgSIAPAAIAAATIABAAQACgEADgEIAHgHQAEgDAGgCQAGgCAHAAQAHAAAFACIgDAOIgJgBQgKAAgGAEQgGACgEAGQgEAEgCAHQgCAGAAAEIAAA7g");
	this.shape_258.setTransform(36.8,-50.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_259.setTransform(24.6,-50.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#111111").s().p("Ag7BWIAAioIAQAAIAAARIABAAQAEgFAFgEIAKgGIAMgEIALgBQAOAAAKAEQALAEAIAIQAIAHAFAKQAEAKAAAMQAAAMgEAKQgFAJgIAIQgIAHgLAEQgKAEgOAAIgLgBIgMgDIgKgGQgFgEgEgGIgBAAIAABSgAgRhEQgIADgGAGQgGAFgEAIQgCAHAAAJQAAAJACAIQAEAHAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGACgHQAEgIAAgJQAAgJgEgHQgCgIgGgFQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_260.setTransform(10.6,-47.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#111111").s().p("ABFA2IAAg8QAAgQgGgJQgGgJgRAAQgJABgGADQgGADgDAFQgEAGgCAHQgBAGAAAIIAAA3IgPAAIAAg8QAAgQgGgJQgGgJgRAAIgGABQgFABgGAFQgFAEgFAHQgEAJAAANIAAA2IgQAAIAAhQIAAgNIgBgLIARAAIAAAQIAAAAQAGgJAKgFQAKgFAKAAIAKABIAKADQAFACAEAFQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKALAAATIAABCg");
	this.shape_261.setTransform(-7.6,-50.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_262.setTransform(-20.5,-52.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_263.setTransform(-36.5,-50.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_264.setTransform(-45.3,-53.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_265.setTransform(-62,-50.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgFgKQgEgKAAgMQAAgMAEgKQAFgJAIgHQAIgIAKgEQAMgEAMAAIALABIANAEIAKAGQAFAEAEAFIABAAIAAhSIAQAAIAACpIgQAAIAAgSIgBAAQgEAGgFAEIgKAGIgNADIgLABQgMAAgMgEgAgRgGQgHADgGAFQgFAFgDAIQgDAHgBAJQABAJADAIQADAHAFAGQAGAGAHADQAIADAJAAQAJAAAJgDQAIgDAGgGQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_266.setTransform(-76.8,-53.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_267.setTransform(-86.6,-52.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#111111").s().p("AgXBSQgLgEgIgHQgIgIgFgKQgEgKAAgMQAAgMAEgKQAFgJAIgHQAIgIALgEQALgEAMAAIAMABIALAEIALAGQAGAEADAFIABAAIAAhSIAQAAIAACpIgQAAIAAgSIgBAAQgDAGgGAEIgLAGIgLADIgMABQgMAAgLgEgAgRgGQgIADgFAFQgGAFgDAIQgCAHAAAJQAAAJACAIQADAHAGAGQAFAGAIADQAIADAJAAQAJAAAJgDQAIgDAGgGQAGgGADgHQAEgIAAgJQAAgJgEgHQgDgIgGgFQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_268.setTransform(-97.2,-53.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#111111").s().p("AAhA2IAAg5QAAgSgGgJQgHgKgRAAIgGABQgGABgGAFQgGAEgFAHQgFAJAAANIAAA2IgPAAIAAhRIgBgLIgBgMIARAAIAAAJIAAAIIABAAIAHgIIAJgHIAKgDIALgCQAVAAAKALQALALAAATIAABCg");
	this.shape_269.setTransform(-111,-50.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_270.setTransform(-124.2,-50.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#111111").s().p("AAFBEQgEgBgEgDQgEgEgCgFQgDgFAAgJIAAhBIgXAAIAAgOIAXAAIAAgeIAPAAIAAAeIAhAAIAAAOIghAAIAAA9IABAJIAEAGIAEADIAIAAIAIgBIAIgDIABAOQgKAEgMAAIgKgBg");
	this.shape_271.setTransform(-134.8,-51.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#111111").s().p("AAhA2IAAg5QAAgSgGgJQgHgKgRAAIgGABQgGABgGAFQgGAEgFAHQgFAJAAANIAAA2IgPAAIAAhRIgBgLIgBgMIARAAIAAAJIAAAIIABAAIAHgIIAJgHIAKgDIALgCQAVAAAKALQALALAAATIAABCg");
	this.shape_272.setTransform(-145.7,-50.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_273.setTransform(-158.8,-50.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgGgDgKgCIgOgEIgHgCIgKgEQgFgDgDgFQgDgFgBgHQABgJADgGQADgGAHgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgOAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAFQgCADAAAEQABAIAFADQAGADAKADIAQADQAMADAIAGQAHAIAAALQAAAJgEAGQgDAGgGAEQgHAEgIACQgHABgIAAQgMAAgLgEg");
	this.shape_274.setTransform(-177.2,-50.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_275.setTransform(-188.9,-50.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#111111").s().p("AAgBVIAAg6QAAgSgGgJQgHgJgRAAIgGABQgGABgFAFQgHADgFAHQgEAJAAAOIAAA2IgQAAIAAipIAQAAIAABSIAAAAIAHgIIAJgHIALgDIAKgCQAVAAALALQAKALAAASIAABDg");
	this.shape_276.setTransform(-201.6,-53.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_277.setTransform(-221.3,-50.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#111111").s().p("AgIBPIAAhEIg/haIAVAAIAyBMIAzhMIAVAAIg/BaIAABEg");
	this.shape_278.setTransform(-234.2,-52.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#111111").s().p("AgIAIQgEgDAAgFQAAgEAEgDQADgEAFAAQAGAAADAEQAEADAAAEQAAAFgEADQgDAEgGAAQgFAAgDgEg");
	this.shape_279.setTransform(-251,-46);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_280.setTransform(-257.2,-53.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_281.setTransform(-266.6,-50.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#111111").s().p("AAhA2IAAg5QAAgSgGgJQgHgKgRAAIgGABQgGABgGAFQgGAEgFAHQgFAJAAANIAAA2IgPAAIAAhRIgBgLIgBgMIARAAIAAAJIAAAIIABAAIAHgIIAJgHIAKgDIALgCQAVAAAKALQALALAAATIAABCg");
	this.shape_282.setTransform(-279.4,-50.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_283.setTransform(-293,-50.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_284.setTransform(-303,-52.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_285.setTransform(-311.3,-50.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_286.setTransform(-324.6,-50.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#111111").s().p("ABFA2IAAg8QAAgQgGgJQgGgJgRAAQgJABgGADQgGADgDAFQgEAGgCAHQgBAGAAAIIAAA3IgPAAIAAg8QAAgQgGgJQgGgJgRAAIgGABQgFABgGAFQgFAEgFAHQgEAJAAANIAAA2IgQAAIAAhQIAAgNIgBgLIARAAIAAAQIAAAAQAGgJAKgFQAKgFAKAAIAKABIAKADQAFACAEAFQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKALAAATIAABCg");
	this.shape_287.setTransform(-342.1,-50.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_288.setTransform(-358.8,-50.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#111111").s().p("AgsBQIgHgCIACgOQAFACAHAAQAIAAAFgFQAFgFADgJIAJgUIguhqIATAAIAjBXIAihXIATAAIg3CEQgFAMgIAHQgIAIgOAAIgIAAg");
	this.shape_289.setTransform(295.5,-74.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_290.setTransform(275.9,-77.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_291.setTransform(263.4,-77.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_292.setTransform(254.4,-79.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#111111").s().p("AgYAzQgKgFgJgLIAOgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgDAAgFQAAgHgGgEQgHgDgJgCIgNgEIgIgCIgKgEQgFgDgDgFQgEgFAAgHQAAgJAEgGQAEgGAGgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgDADAAAEQAAAIAGADQAFADALADIAQADQALADAJAGQAHAIABALQAAAJgFAGQgDAGgHAEQgFAEgIACQgIABgIAAQgMAAgMgEg");
	this.shape_293.setTransform(246.5,-77.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#111111").s().p("AgPBQIAAhpIAPAAIAABpgAgWguIAXghIAWAAIgeAhg");
	this.shape_294.setTransform(239.3,-79.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#111111").s().p("AgNBWIAAhaIgYAAIAAgOIAYAAIAAgdQAAgVAKgIQAKgJARAAIAHAAIAHABIgEAOIgFgBIgGgBQgHAAgEACQgEACgDAEIgCAJIgBAKIAAAbIAbAAIAAAOIgbAAIAABag");
	this.shape_295.setTransform(232.6,-80.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_296.setTransform(214.7,-77.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgHQAIgIAKgEQAMgEAMAAIALABIANAEIALAGQAFAEAEAFIAAAAIAAhSIAQAAIAACpIgQAAIAAgSIAAAAQgEAGgFAEIgLAGIgNADIgLABQgMAAgMgEgAgRgGQgHADgGAFQgFAFgDAIQgEAHAAAJQAAAJAEAIQADAHAFAGQAGAGAHADQAIADAJAAQAJAAAJgDQAIgDAGgGQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_297.setTransform(199.9,-80.2);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_298.setTransform(186.4,-77.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgHQAIgIAKgEQALgEANAAIALABIANAEIALAGQAEAEAFAFIAAAAIAAhSIAQAAIAACpIgQAAIAAgSIAAAAQgFAGgEAEIgLAGIgNADIgLABQgNAAgLgEgAgRgGQgIADgFAFQgFAFgDAIQgEAHAAAJQAAAJAEAIQADAHAFAGQAFAGAIADQAIADAJAAQAKAAAIgDQAIgDAGgGQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_299.setTransform(172.8,-80.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_300.setTransform(162.9,-79.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#111111").s().p("AglArQgLgKAAgUIAAhCIAQAAIAAA5QAAAJABAHQACAHAEAEQADAFAGACQAGACAJAAIAFAAQAGgBAGgEQAGgEAFgIQAFgJgBgOIAAg1IAQAAIAABRIABALIAAAMIgQAAIAAgIIgBgJIgGAIIgJAHIgLAEIgLABQgVAAgKgLg");
	this.shape_301.setTransform(153.3,-77);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_302.setTransform(141.3,-77.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#111111").s().p("AglArQgLgKABgUIAAhCIAPAAIAAA5QAAAJACAHQABAHADAEQAEAFAGACQAFACAJAAIAHAAQAFgBAGgEQAGgEAFgIQAEgJABgOIAAg1IAQAAIAABRIAAALIABAMIgQAAIgBgIIAAgJIgIAIIgJAHIgKAEIgKABQgWAAgKgLg");
	this.shape_303.setTransform(121.8,-77);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#111111").s().p("AAGBEQgGgBgCgDQgEgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAhAAIAAAOIghAAIAAA9IABAJIAEAGIAEADIAHAAIAIgBIAJgDIAAAOQgJAEgMAAIgJgBg");
	this.shape_304.setTransform(111.2,-78.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_305.setTransform(93.9,-77.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgHQAIgIAKgEQALgEANAAIALABIAMAEIAMAGQAEAEAFAFIAAAAIAAhSIAQAAIAACpIgQAAIAAgSIAAAAQgFAGgEAEIgMAGIgMADIgLABQgNAAgLgEgAgRgGQgIADgFAFQgGAFgDAIQgDAHAAAJQAAAJADAIQADAHAGAGQAFAGAIADQAIADAJAAQAKAAAIgDQAIgDAGgGQAGgGADgHQAEgIAAgJQAAgJgEgHQgDgIgGgFQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_306.setTransform(79.5,-80.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgGgDgKgCIgOgEIgHgCIgKgEQgFgDgDgFQgDgFgBgHQABgJADgGQADgGAHgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgOAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAFQgCADAAAEQABAIAFADQAGADAKADIAQADQAMADAIAGQAHAIAAALQAAAJgEAGQgDAGgGAEQgHAEgIACQgHABgIAAQgMAAgLgEg");
	this.shape_307.setTransform(60.9,-77.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_308.setTransform(48.6,-77.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgJgRAAIgGABQgGABgGADQgGAFgFAIQgFAIAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAIIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAVIAABBg");
	this.shape_309.setTransform(34.6,-77.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#111111").s().p("AgeA2IAAhIIgBgNIAAgTIAPAAIAAAUIABAAQACgFADgEIAIgHQADgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgKgBQgJAAgGADQgGADgEAFQgEAFgCAGQgCAGAAAGIAAA6g");
	this.shape_310.setTransform(25.2,-77.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_311.setTransform(13.6,-77.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#111111").s().p("AgeA2IAAhIIAAgNIgBgTIAPAAIAAAUIABAAQABgFAEgEIAIgHQADgDAGgCQAFgCAIAAQAHAAAFABIgDAPIgKgBQgIAAgHADQgGADgEAFQgEAFgCAGQgCAGAAAGIAAA6g");
	this.shape_312.setTransform(4.8,-77.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#111111").s().p("AgmArQgJgKgBgUIAAhCIAQAAIAAA5QAAAJABAHQACAHAEAEQADAFAGACQAGACAIAAIAGAAQAGgBAGgEQAGgEAFgIQAFgJgBgOIAAg1IAQAAIAABRIABALIAAAMIgQAAIAAgIIgBgJIgHAIIgJAHIgKAEIgLABQgVAAgLgLg");
	this.shape_313.setTransform(-7,-77);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#111111").s().p("AgfBMQgNgFgLgLIAMgMQAHAJALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgFADgIQABgIAAgIIAAgTIAAAAQgHALgMAFQgLAEgMAAQgLAAgLgEQgKgEgIgHQgJgIgEgIQgEgKAAgMQAAgLAEgKQAEgJAIgIQAHgHALgEQAKgFAMAAIAKABIAMADIALAGQAFAFAFAFIAAAAIAAgRIARAAIAABnQgBAIgCAKQgCAKgHAIQgGAIgMAGQgMAFgSAAQgRAAgNgFgAgPg/QgHADgGAFQgGAGgDAHQgEAIABAIQgBAIAEAIQADAHAGAEQAGAGAHADQAIAEAHAAQAJAAAIgEQAHgCAHgGQAGgEADgIQADgHAAgJQAAgIgDgIQgDgHgFgGQgGgFgIgDQgIgEgKABQgHgBgIAEg");
	this.shape_314.setTransform(-21.2,-74.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_315.setTransform(-34.9,-77.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#111111").s().p("AgYAzQgKgFgJgLIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgHgDgIgCIgPgEIgIgCIgJgEQgFgDgDgFQgEgFABgHQgBgJAEgGQAEgGAFgDQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgEgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgCADAAAEQgBAIAGADQAFADALADIAQADQAMADAHAGQAJAIgBALQAAAJgDAGQgEAGgHAEQgGAEgHACQgIABgIAAQgNAAgLgEg");
	this.shape_316.setTransform(-46.6,-77.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_317.setTransform(-58.3,-77.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_318.setTransform(-77.4,-77.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#111111").s().p("AgeA2IAAhIIgBgNIAAgTIAQAAIAAAUIAAAAQABgFAEgEIAHgHQAEgDAGgCQAFgCAIAAQAHAAAFABIgDAPIgJgBQgKAAgGADQgFADgFAFQgEAFgCAGQgCAGAAAGIAAA6g");
	this.shape_319.setTransform(-86.3,-77.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_320.setTransform(-97.8,-77.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#111111").s().p("Ag7BWIAAioIAQAAIAAARIABAAQADgFAGgEIALgGIALgEIALgBQANAAALAEQALAEAIAIQAIAHAFAKQAEAKAAAMQAAAMgEAKQgFAJgIAIQgIAHgLAEQgLAEgNAAIgLgBIgLgDIgLgGQgGgEgDgGIgBAAIAABSgAgRhEQgIADgGAGQgGAFgDAIQgDAHAAAJQAAAJADAIQADAHAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAIgDAFgFQAGgGADgHQADgIAAgJQAAgJgDgHQgDgIgGgFQgFgGgIgDQgIgEgKAAQgIAAgJAEg");
	this.shape_321.setTransform(-110.7,-74);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_322.setTransform(-132.2,-77.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgFgKQgEgKAAgMQAAgMAEgKQAFgJAIgHQAIgIAKgEQAMgEAMAAIALABIANAEIAKAGQAFAEAEAFIABAAIAAhSIAQAAIAACpIgQAAIAAgSIgBAAQgEAGgFAEIgKAGIgNADIgLABQgMAAgMgEgAgRgGQgHADgGAFQgFAFgDAIQgDAHgBAJQABAJADAIQADAHAFAGQAGAGAHADQAIADAJAAQAJAAAJgDQAIgDAGgGQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_323.setTransform(-147,-80.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_324.setTransform(-160.5,-77.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAIAFQAHAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgGgDgKgCIgOgEIgIgCIgJgEQgFgDgDgFQgDgFgBgHQABgJADgGQADgGAHgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAFQgCADAAAEQABAIAFADQAGADAKADIAQADQAMADAHAGQAIAIAAALQAAAJgDAGQgEAGgGAEQgHAEgIACQgHABgIAAQgNAAgKgEg");
	this.shape_325.setTransform(-171.4,-77.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgJgRAAIgGABQgGABgGADQgGAFgFAIQgFAIAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAIIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAVIAABBg");
	this.shape_326.setTransform(-183.5,-77.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_327.setTransform(-196.6,-77.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#111111").s().p("Ag7BWIAAioIAQAAIAAARIABAAQADgFAGgEIALgGIALgEIALgBQANAAALAEQALAEAIAIQAIAHAFAKQAEAKAAAMQAAAMgEAKQgFAJgIAIQgIAHgLAEQgLAEgNAAIgLgBIgLgDIgLgGQgGgEgDgGIgBAAIAABSgAgRhEQgIADgGAGQgGAFgDAIQgDAHgBAJQABAJADAIQADAHAGAGQAGAFAIADQAJADAIAAQAKAAAIgDQAHgDAHgFQAFgGADgHQADgIAAgJQAAgJgDgHQgDgIgFgFQgHgGgHgDQgIgEgKAAQgIAAgJAEg");
	this.shape_328.setTransform(-210.2,-74);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_329.setTransform(-231.7,-77.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgHQAIgIAKgEQAMgEAMAAIALABIANAEIALAGQAFAEAEAFIAAAAIAAhSIAQAAIAACpIgQAAIAAgSIAAAAQgEAGgFAEIgLAGIgNADIgLABQgMAAgMgEgAgRgGQgHADgGAFQgFAFgDAIQgEAHAAAJQAAAJAEAIQADAHAFAGQAGAGAHADQAIADAJAAQAJAAAJgDQAIgDAGgGQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_330.setTransform(-246.5,-80.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_331.setTransform(-256.4,-79.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#111111").s().p("AgYAzQgKgFgJgLIAOgJQAFAHAIAFQAGAEAKAAIAJgBQAFgBAEgCQAEgCACgEQACgDAAgFQAAgHgGgEQgHgDgJgCIgNgEIgIgCIgKgEQgFgDgDgFQgEgFAAgHQAAgJAEgGQADgGAHgDQAFgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgDADAAAEQAAAIAGADQAFADALADIAQADQALADAJAGQAHAIABALQAAAJgFAGQgDAGgHAEQgFAEgIACQgIABgIAAQgMAAgMgEg");
	this.shape_332.setTransform(-264.3,-77.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_333.setTransform(-282.6,-77.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#111111").s().p("AAgBVIAAg6QAAgRgGgKQgHgIgRAAIgGABQgGABgGADQgFAEgFAIQgGAIAAAOIAAA2IgPAAIAAipIAPAAIAABRIABAAIAHgHIAJgGIAKgFIALgBQAWAAAJALQALAKAAAUIAABCg");
	this.shape_334.setTransform(-295.3,-80.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_335.setTransform(-315.7,-77.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#111111").s().p("AgXBSQgLgEgIgHQgIgIgFgKQgEgKAAgMQAAgMAEgKQAFgJAIgHQAIgIALgEQAKgEANAAIAMABIAMAEIAKAGQAFAEAEAFIABAAIAAhSIAQAAIAACpIgQAAIAAgSIgBAAQgEAGgFAEIgKAGIgMADIgMABQgNAAgKgEgAgRgGQgHADgGAFQgFAFgDAIQgDAHAAAJQAAAJADAIQADAHAFAGQAGAGAHADQAIADAJAAQAJAAAJgDQAIgDAGgGQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_336.setTransform(-330.5,-80.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_337.setTransform(-344.6,-77.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#111111").s().p("AgIBQIAAiQIg4AAIAAgPICBAAIAAAPIg5AAIAACQg");
	this.shape_338.setTransform(-358.6,-79.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#111111").s().p("AgJAIQgDgDAAgFQAAgEADgDQAEgEAFAAQAGAAADAEQAEADAAAEQAAAFgEADQgDAEgGAAQgFAAgEgEg");
	this.shape_339.setTransform(332.5,-99.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#111111").s().p("AgeA2IAAhIIAAgNIgBgTIAQAAIAAAUIAAAAQABgFAEgEIAHgHQAEgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgJgBQgJAAgHADQgGADgEAFQgEAFgCAGQgCAGAAAGIAAA6g");
	this.shape_340.setTransform(326.2,-104.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_341.setTransform(314.6,-104.1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#111111").s().p("AgsA1IAAgMIBAhPIg9AAIAAgOIBVAAIAAALIhCBQIBEAAIAAAOg");
	this.shape_342.setTransform(303.6,-104.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_343.setTransform(292,-104.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_344.setTransform(276.5,-107.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_345.setTransform(267.1,-104.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_346.setTransform(248,-104.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#111111").s().p("AAgBVIAAg6QAAgRgGgKQgHgIgRAAIgGABQgGABgGADQgFAEgFAIQgFAIgBAOIAAA2IgPAAIAAipIAPAAIAABRIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAUIAABCg");
	this.shape_347.setTransform(235.3,-107.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_348.setTransform(223.4,-104.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_349.setTransform(210.5,-104.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#111111").s().p("AAgBVIAAg6QAAgRgGgKQgHgIgRAAIgGABQgGABgGADQgFAEgFAIQgFAIgBAOIAAA2IgPAAIAAipIAPAAIAABRIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAUIAABCg");
	this.shape_350.setTransform(197.1,-107.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#111111").s().p("AgYAzQgKgFgJgLIAOgJQAFAHAHAFQAHAEAKAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgHgDgIgCIgPgEIgIgCIgJgEQgFgDgDgFQgEgFABgHQgBgJAEgGQAEgGAFgDQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgEgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgCADAAAEQgBAIAGADQAFADALADIAQADQAMADAHAGQAJAIgBALQAAAJgDAGQgEAGgHAEQgGAEgHACQgIABgIAAQgNAAgLgEg");
	this.shape_351.setTransform(178.8,-104.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_352.setTransform(167,-104.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_353.setTransform(147,-104.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#111111").s().p("AAFBEQgFgBgDgDQgDgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAHAAIAIgBIAHgDIACAOQgJAEgNAAIgKgBg");
	this.shape_354.setTransform(136.4,-105.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgJgRAAIgGABQgGABgGADQgGAFgFAIQgFAIAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAIIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAVIAABBg");
	this.shape_355.setTransform(125.5,-104.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_356.setTransform(112.3,-104.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#111111").s().p("ABFA2IAAg9QAAgPgGgJQgGgJgRABQgJgBgGAEQgGADgDAFQgEAGgCAHQgBAGAAAIIAAA3IgPAAIAAg9QAAgPgGgJQgGgJgRABIgGABQgFABgGADQgFAFgFAIQgEAIAAANIAAA2IgQAAIAAhRIAAgLIgBgMIARAAIAAAQIAAAAQAGgJAKgFQAKgFAKAAIAKABIAKAEQAFACAEAEQADAEADAHQAFgKAKgGQALgGALAAQAWAAAKALQAKAKAAAVIAABBg");
	this.shape_357.setTransform(95.2,-104.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#111111").s().p("AgeA2IAAhIIAAgNIgBgTIAQAAIAAAUIAAAAQABgFAEgEIAIgHQADgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgJgBQgJAAgHADQgGADgEAFQgEAFgCAGQgCAGAAAGIAAA6g");
	this.shape_358.setTransform(82.3,-104.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_359.setTransform(70.1,-104.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_360.setTransform(60.1,-106.7);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#111111").s().p("AgeA2IAAhIIgBgNIAAgTIAPAAIAAAUIABAAQACgFADgEIAHgHQAEgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgJgBQgKAAgGADQgGADgEAFQgEAFgCAGQgCAGAAAGIAAA6g");
	this.shape_361.setTransform(54.3,-104.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_362.setTransform(42.6,-104.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#111111").s().p("AAGBEQgGgBgCgDQgEgEgDgFQgDgFAAgJIAAhBIgXAAIAAgOIAXAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIAEAGIAEADIAHAAIAIgBIAIgDIABAOQgJAEgMAAIgJgBg");
	this.shape_363.setTransform(32,-105.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgJgRAAIgGABQgGABgGADQgGAFgFAIQgFAIAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAIIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAVIAABBg");
	this.shape_364.setTransform(21.1,-104.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_365.setTransform(8.1,-104.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#111111").s().p("AgYAzQgLgFgIgLIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgDAAgFQAAgHgGgEQgHgDgJgCIgNgEIgIgCIgKgEQgFgDgDgFQgDgFAAgHQAAgJADgGQAEgGAFgDQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgCADgBAEQAAAIAGADQAGADAKADIAQADQALADAJAGQAHAIABALQAAAJgFAGQgDAGgHAEQgGAEgHACQgIABgIAAQgMAAgMgEg");
	this.shape_366.setTransform(-9.5,-104.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_367.setTransform(-21.2,-104.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#111111").s().p("AAFBEQgFgBgDgDQgDgEgDgFQgDgFAAgJIAAhBIgYAAIAAgOIAYAAIAAgeIAPAAIAAAeIAgAAIAAAOIggAAIAAA9IABAJIADAGIAGADIAHAAIAIgBIAHgDIACAOQgJAEgNAAIgKgBg");
	this.shape_368.setTransform(-31,-105.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_369.setTransform(-37.9,-106.7);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#111111").s().p("AgeA2IAAhIIAAgNIgBgTIAQAAIAAAUIAAAAQABgFAEgEIAHgHQAEgDAGgCQAGgCAHAAQAHAAAFABIgDAPIgJgBQgJAAgHADQgGADgEAFQgEAFgCAGQgCAGAAAGIAAA6g");
	this.shape_370.setTransform(-43.7,-104.2);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_371.setTransform(-54.1,-104.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#111111").s().p("AgXAzQgMgFgHgLIANgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQADgCADgEQACgDAAgFQAAgHgGgEQgGgDgJgCIgPgEIgIgCIgJgEQgFgDgDgFQgDgFgBgHQABgJADgGQADgGAGgDQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAEAGALIgPAJQgDgHgHgEQgFgEgJAAIgHABIgIADIgGAFQgBADAAAEQAAAIAFADQAFADALADIAQADQAMADAHAGQAJAIgBALQAAAJgDAGQgEAGgGAEQgHAEgIACQgHABgIAAQgNAAgKgEg");
	this.shape_372.setTransform(-65.3,-104.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_373.setTransform(-77.2,-104.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#111111").s().p("AgXBSQgLgEgIgHQgIgIgFgKQgEgKAAgMQAAgMAEgKQAFgJAIgHQAIgIALgEQAKgEANAAIAMABIAMAEIAKAGQAFAEAEAFIABAAIAAhSIAQAAIAACpIgQAAIAAgSIgBAAQgEAGgFAEIgKAGIgMADIgMABQgNAAgKgEgAgRgGQgHADgGAFQgFAFgDAIQgDAHAAAJQAAAJADAIQADAHAFAGQAGAGAHADQAIADAJAAQAJAAAJgDQAIgDAGgGQAGgGAEgHQADgIAAgJQAAgJgDgHQgEgIgGgFQgGgFgIgDQgJgEgJAAQgJAAgIAEg");
	this.shape_374.setTransform(-91.5,-107.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#111111").s().p("AgYAzQgKgFgJgLIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgDAAgFQAAgHgGgEQgHgDgIgCIgOgEIgJgCIgJgEQgFgDgDgFQgEgFABgHQgBgJAEgGQAEgGAFgDQAGgEAIgCQAHgCAHAAQAMAAAKAEQAKAEAFALIgNAJQgEgHgGgEQgHgEgIAAIgIABIgHADIgFAFQgCADAAAEQgBAIAGADQAFADALADIAQADQALADAIAGQAJAIAAALQAAAJgFAGQgDAGgHAEQgGAEgHACQgIABgIAAQgNAAgLgEg");
	this.shape_375.setTransform(-110.2,-104.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_376.setTransform(-122,-104.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgJgRAAIgGABQgGABgGADQgGAFgFAIQgFAIAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAIIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAVIAABBg");
	this.shape_377.setTransform(-135.6,-104.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#111111").s().p("AgXAzQgLgEgIgHQgIgIgEgKQgFgKAAgMQAAgLAFgKQAEgKAIgHQAIgIALgEQALgEAMAAQANAAALAEQALAEAIAIQAIAHAEAKQAFAKAAALQAAAMgFAKQgEAKgIAIQgIAHgLAEQgLAEgNAAQgMAAgLgEgAgRglQgIADgFAGQgGAFgCAIQgEAHAAAIQAAAJAEAIQACAHAGAGQAFAGAIADQAIADAJAAQAKAAAHgDQAIgDAGgGQAFgGADgHQADgIAAgJQAAgIgDgHQgDgIgFgFQgGgGgIgDQgHgEgKAAQgJAAgIAEg");
	this.shape_378.setTransform(-149.2,-104.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_379.setTransform(-159.2,-106.7);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_380.setTransform(-167.4,-104.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#111111").s().p("AgOA0QgLgFgIgHQgIgHgEgLQgEgKAAgMQAAgLAEgKQAEgKAIgIQAIgHALgEQALgEAMAAQAMAAAKAFQALAEAIAJIgNAJQgEgFgHgFQgHgEgKAAQgJAAgHADQgIADgGAGQgFAGgDAHQgDAIAAAIQAAAJADAIQADAIAFAFQAGAGAIADQAHADAJAAQAKAAAHgEQAHgEAEgGIANAJQgIAJgLAFQgKAEgMAAIgDAAQgKAAgKgDg");
	this.shape_381.setTransform(-179,-104.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_382.setTransform(-191.7,-104.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#111111").s().p("AgYAzQgLgFgIgLIAOgJQAFAHAHAFQAIAEAJAAIAJgBQAFgBAEgCQAEgCACgEQACgDAAgFQAAgHgGgEQgHgDgJgCIgNgEIgIgCIgKgEQgFgDgDgFQgDgFAAgHQAAgJADgGQAEgGAFgDQAGgEAHgCQAIgCAHAAQAMAAAKAEQAKAEAFALIgNAJQgFgHgFgEQgHgEgIAAIgIABIgHADIgFAFQgCADgBAEQAAAIAGADQAGADAKADIAQADQALADAJAGQAHAIABALQAAAJgFAGQgDAGgHAEQgGAEgHACQgIABgIAAQgMAAgMgEg");
	this.shape_383.setTransform(-209.3,-104.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_384.setTransform(-221,-104.1);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#111111").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_385.setTransform(-229.8,-107.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#111111").s().p("AgTAzQgLgEgIgHQgHgIgFgKQgEgKAAgMQAAgLAEgKQAEgKAIgHQAIgIAKgEQAKgEALAAQANAAAKAEQAKAEAHAHQAHAIADAJQAEAKAAALIAAAFIhdAAQABAIAEAHQADAHAGAFQAFAFAHADQAHADAIAAQANAAAJgFQAJgGAFgHIAMAJQgKAMgMAFQgMAFgOAAQgMAAgKgEgAgNgmQgHADgFAFQgGAEgDAGQgDAHAAAGIBLAAQAAgPgKgJQgJgKgSAAQgGAAgIADg");
	this.shape_386.setTransform(-246,-104.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#111111").s().p("AgYBSQgKgEgIgHQgIgIgEgKQgFgKAAgMQAAgMAFgKQAEgJAIgHQAIgIAKgEQAMgEAMAAIALABIAMAEIAMAGQAEAEAFAFIAAAAIAAhSIAQAAIAACpIgQAAIAAgSIAAAAQgFAGgEAEIgMAGIgMADIgLABQgMAAgMgEgAgRgGQgHADgGAFQgFAFgEAIQgDAHAAAJQAAAJADAIQAEAHAFAGQAGAGAHADQAIADAJAAQAKAAAIgDQAIgDAGgGQAGgGADgHQAEgIAAgJQAAgJgEgHQgDgIgGgFQgGgFgIgDQgIgEgKAAQgJAAgIAEg");
	this.shape_387.setTransform(-260.3,-107.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#111111").s().p("AgXA2QgGgCgGgEQgFgEgDgGQgEgGAAgHQAAgNAHgHQAHgHALgDQALgEALgBIAWgBIAIAAIAAgCQAAgcgdAAQgSAAgPANIgKgLQAQgPAfAAQAIAAAIACQAHACAGAFQAFAFADAHQAEAHAAAJIAAAuIAAANIACALIgQAAIgBgJIAAgIQgHAKgKAFQgJAEgNAAQgIAAgHgBgAAHABIgQADQgJACgGAEQgGAFAAAIQAAAFADAEIAGAGQAEACAEABIAKABQAIAAAGgDQAGgCAFgFQAEgFACgGQACgGAAgHIAAgIIgIAAIgPABg");
	this.shape_388.setTransform(-280.5,-104.1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgJgRAAIgGABQgGABgGADQgGAFgFAIQgFAIAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAIIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAVIAABBg");
	this.shape_389.setTransform(-293.3,-104.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#111111").s().p("AglArQgKgKAAgUIAAhCIAPAAIAAA5QAAAJABAHQACAHADAEQAEAFAGACQAFACAKAAIAFAAQAGgBAGgEQAGgEAFgIQAFgJgBgOIAAg1IAQAAIAABRIABALIAAAMIgPAAIgBgIIgBgJIgGAIIgJAHIgLAEIgLABQgVAAgKgLg");
	this.shape_390.setTransform(-306.5,-104);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#111111").s().p("AgfBMQgNgFgLgLIAMgMQAHAJALAFQALAGAOAAQALAAAJgEQAHgDAGgGQAFgFACgIQACgIAAgIIAAgTIAAAAQgIALgLAFQgLAEgMAAQgLAAgLgEQgKgEgJgHQgIgIgEgIQgEgKgBgMQABgLAEgKQAEgJAIgIQAHgHALgEQAKgFAMAAIAKABIAMADIAKAGQAGAFAFAFIAAAAIAAgRIAQAAIAABnQABAIgDAKQgCAKgHAIQgGAIgMAGQgMAFgSAAQgQAAgOgFgAgPg/QgIADgFAFQgGAGgDAHQgDAIgBAIQABAIADAIQADAHAGAEQAFAGAIADQAIAEAIAAQAIAAAIgEQAIgCAGgGQAGgEADgIQADgHAAgJQAAgIgDgIQgDgHgGgGQgFgFgIgDQgIgEgJABQgIgBgIAEg");
	this.shape_391.setTransform(-320.7,-101.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#111111").s().p("AAhA2IAAg5QAAgRgGgKQgHgJgRAAIgGABQgGABgGADQgGAFgFAIQgFAIAAANIAAA2IgPAAIAAhRIgBgKIgBgNIARAAIAAAIIAAAIIABAAIAHgHIAJgGIAKgFIALgBQAVAAAKALQALAKAAAVIAABBg");
	this.shape_392.setTransform(-334.6,-104.2);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#111111").s().p("AgHBOIAAhoIAPAAIAABogAgHg7QgEgCAAgFQAAgFAEgDQAEgDADAAQAEAAAEADQAEADAAAFQAAAFgEACQgEAEgEAAQgDAAgEgEg");
	this.shape_393.setTransform(-344,-106.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#111111").s().p("AAxBQIhkiHIgBAAIAACHIgRAAIAAifIAVAAIBlCGIAAAAIAAiGIARAAIAACfg");
	this.shape_394.setTransform(-356.2,-106.8);

	this.instance = new lib.Mapadebits5();
	this.instance.parent = this;
	this.instance.setTransform(-427,-188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 2
	this.instance_1 = new lib.Mapadebits4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-517,-296);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(-517,-296,1034,592), null);


(lib.Símbolo9 = function(mode,startPosition,loop) {
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

	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-74,-24);

	this.instance_1 = new lib.Símbolo10();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-24,148,47);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Feedback
	this.mc_feedback = new lib.Símbolo11();
	this.mc_feedback.parent = this;
	this.mc_feedback.setTransform(23.8,-33.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_feedback).wait(1));

	// retro
	this.mc_retro = new lib.Símbolo20();
	this.mc_retro.parent = this;
	this.mc_retro.setTransform(0.5,102.9);

	this.timeline.addTween(cjs.Tween.get(this.mc_retro).wait(1));

	// Capa 5
	this.mc_cont = new lib.Símbolo7();
	this.mc_cont.parent = this;
	this.mc_cont.setTransform(-484.7,-219.6);

	this.timeline.addTween(cjs.Tween.get(this.mc_cont).wait(1));

	// Button
	this.btn_send = new lib.Símbolo9();
	this.btn_send.parent = this;
	this.btn_send.setTransform(0,232);
	new cjs.ButtonHelper(this.btn_send, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_send).wait(1));

	// Capa 1
	this.mc_audioIntro = new lib.Símbolo3();
	this.mc_audioIntro.parent = this;
	this.mc_audioIntro.setTransform(-387.6,-275.3);
	this.mc_audioIntro.alpha = 0.012;

	this.mc_t1 = new lib.Símbolo19();
	this.mc_t1.parent = this;
	this.mc_t1.setTransform(163.6,138.7);

	this.mc_t4 = new lib.Símbolo18();
	this.mc_t4.parent = this;
	this.mc_t4.setTransform(226.5,59.7);

	this.mc_t0 = new lib.Símbolo17();
	this.mc_t0.parent = this;
	this.mc_t0.setTransform(186.1,-18.7);

	this.mc_t2 = new lib.Símbolo16();
	this.mc_t2.parent = this;
	this.mc_t2.setTransform(-164.7,140.4);

	this.mc_t3 = new lib.Símbolo15();
	this.mc_t3.parent = this;
	this.mc_t3.setTransform(-233.8,59.7);

	this.mc_t5 = new lib.Símbolo14();
	this.mc_t5.parent = this;
	this.mc_t5.setTransform(-162.3,-18.6);

	this.mc_questions = new lib.Símbolo8();
	this.mc_questions.parent = this;
	this.mc_questions.setTransform(-94.5,-218.9);

	this.mc_obj4 = new lib.Símbolo2();
	this.mc_obj4.parent = this;
	this.mc_obj4.setTransform(216.9,61.2);

	this.mc_obj1 = new lib.Símbolo2();
	this.mc_obj1.parent = this;
	this.mc_obj1.setTransform(216.9,140.8);

	this.mc_obj3 = new lib.Símbolo2();
	this.mc_obj3.parent = this;
	this.mc_obj3.setTransform(-182.1,61.2);

	this.mc_obj2 = new lib.Símbolo2();
	this.mc_obj2.parent = this;
	this.mc_obj2.setTransform(-182.1,140.8);

	this.mc_obj0 = new lib.Símbolo2();
	this.mc_obj0.parent = this;
	this.mc_obj0.setTransform(216.9,-17.4);

	this.mc_obj5 = new lib.Símbolo2();
	this.mc_obj5.parent = this;
	this.mc_obj5.setTransform(-182.1,-17.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#111111").s().p("AAeBHIgmhCIgYAAIAABCIgOAAIAAiNIAsAAQAUAAANAKQAMAJAAATQAAAPgJAKQgJAJgSACIAoBDgAgggHIAZAAQAJAAAHgCQAGgCAEgEQAFgDABgEQACgFAAgFQAAgFgCgFQgBgEgFgDQgEgEgGgCQgHgCgJAAIgZAAg");
	this.shape.setTransform(193.7,-119.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#111111").s().p("AA0BHIgQglIhHAAIgQAlIgQAAIA9iNIANAAIA+CNgAgdAUIA8AAIgfhJg");
	this.shape_1.setTransform(180.2,-119.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#111111").s().p("Ag8BHIAAiNIAvAAQANAAANAFQANAEALAJQALAJAGANQAHANAAARQAAASgHANQgGANgLAJQgLAJgNAEQgNAFgNAAgAgtA6IAcAAQAQAAALgFQAMgFAIgIQAIgIADgLQAEgKAAgLQAAgKgEgKQgDgLgIgIQgIgIgMgFQgLgFgQAAIgcAAg");
	this.shape_2.setTransform(166.3,-119.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#111111").s().p("AgGBHIAAiNIANAAIAACNg");
	this.shape_3.setTransform(155.9,-119.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#111111").s().p("AgnBHIAAiNIAOAAIAACAIBBAAIAAANg");
	this.shape_4.setTransform(149.2,-119.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#111111").s().p("AA0BHIgQglIhHAAIgQAlIgRAAIA+iNIANAAIA+CNgAgdAUIA7AAIgehJg");
	this.shape_5.setTransform(136.4,-119.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#111111").s().p("AgHBHIg2iNIAQAAIAtB3IAAAAIAuh3IAQAAIg4CNg");
	this.shape_6.setTransform(123.5,-119.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#111111").s().p("AAbAwIAAgzQABgQgGgHQgFgJgPAAIgEABQgFABgFADQgFAEgEAHQgEAIgBALIAAAwIgMAAIAAhIIgBgJIAAgLIANAAIAAAHIAAAHIABAAIAFgGQAEgEAEgCIAJgDIAJgCQARAAAJAJQAJAKAAARIAAA7g");
	this.shape_7.setTransform(106.1,-117.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAHAAQAKAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_8.setTransform(95.2,-117.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgGADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAGADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgKAAgJgDg");
	this.shape_9.setTransform(79.6,-117.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#111111").s().p("AgFBGIAAhdIALAAIAABdgAgFg0QgDgDgBgEQABgFADgCQADgCACgBQADABADACQADACABAFQgBAEgDADQgDADgDgBQgCABgDgDg");
	this.shape_10.setTransform(72,-119.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#111111").s().p("AgGBMIAAiWIANAAIAACWg");
	this.shape_11.setTransform(67.2,-120);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_12.setTransform(60.3,-117.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#111111").s().p("AglAvIAAgKIA2hHIgzAAIAAgMIBGAAIAAAKIg2BHIA4AAIAAAMg");
	this.shape_13.setTransform(45.4,-117.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_14.setTransform(35.6,-117.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#111111").s().p("AAbBMIAAg0QAAgQgGgIQgFgIgPAAIgEABQgEABgGAEQgFACgEAHQgEAIAAAMIAAAxIgNAAIAAiWIANAAIAABIIABAAIAFgHQADgDAEgDIAJgDIAJgBQASAAAIAJQAJAJAAARIAAA8g");
	this.shape_15.setTransform(25.1,-120);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#111111").s().p("AgkBHIgGgCIABgMQAEACAHAAQAGAAAEgFQAEgEAEgIIAGgSIgnheIARAAIAcBNIAdhNIAQAAIguB1QgEALgGAGQgHAHgMAAIgGAAg");
	this.shape_16.setTransform(9.3,-114.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_17.setTransform(-6.7,-117.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_18.setTransform(-15.6,-118.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("AAbAwIAAgzQABgQgGgHQgFgJgPAAIgEABQgFABgFADQgGAEgDAHQgFAIAAALIAAAwIgMAAIAAhIIgBgJIAAgLIANAAIAAAHIAAAHIABAAIAGgGQADgEAEgCIAJgDIAJgCQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_19.setTransform(-24.6,-117.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAIgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_20.setTransform(-35.5,-117.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#111111").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgFADgCQADgCADgBQAEABADACQACACAAAFQAAAEgCADQgDADgEgBQgDABgDgDg");
	this.shape_21.setTransform(-43.5,-119.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#111111").s().p("AgUBJQgJgEgGgGQgGgHgFgJQgDgJAAgLQAAgKADgJQAFgIAGgHQAGgGAJgEQAKgEAKAAIAJABIALADIAJAGQAEADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgEADIgJAFIgLAEIgJABQgKAAgKgEgAgOgGQgHADgEAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_22.setTransform(-52.3,-119.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#111111").s().p("AAcAwIAAgzQAAgQgGgHQgGgJgOAAIgFABQgEABgGADQgFAEgEAHQgDAIAAALIAAAwIgOAAIAAhIIAAgJIgBgLIAOAAIABAHIAAAHIAAAAIAFgGQAEgEAEgCIAJgDIAIgCQATAAAIAJQAIAKAAARIAAA7g");
	this.shape_23.setTransform(-63.8,-117.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_24.setTransform(-75.1,-117.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#111111").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_25.setTransform(-86.8,-114.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#111111").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCQAGgBAGAAQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_26.setTransform(-97.4,-117.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_27.setTransform(-107.2,-117.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#111111").s().p("AgZAwIAAg/IAAgNIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_28.setTransform(-115.3,-117.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#111111").s().p("AgZAwIAAg/IAAgNIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_29.setTransform(-121.9,-117.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_30.setTransform(-132,-117.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgGADgFAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAFAFAGADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_31.setTransform(-142.4,-117.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#111111").s().p("AAbAwIAAgzQAAgQgFgHQgFgJgPAAIgEABQgFABgFADQgGAEgDAHQgFAIAAALIAAAwIgMAAIAAhIIgBgJIAAgLIANAAIAAAHIAAAHIABAAIAGgGQADgEAEgCIAJgDIAJgCQARAAAJAJQAJAKAAARIAAA7g");
	this.shape_32.setTransform(-158.8,-117.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#111111").s().p("AgTBEQgJgEgHgGQgGgHgEgIQgEgKAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgDAKAAQALAAAJADQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAKQgEAIgGAHQgHAGgJAEQgJAEgLAAQgKAAgJgEgAgOgKQgGADgFAEQgEAFgDAGQgCAHAAAHQAAAIACAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgHQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgEgGgDQgHgEgIAAQgHAAgHAEgAgLgrIATgcIASAAIgaAcg");
	this.shape_33.setTransform(-170.1,-119.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#111111").s().p("AgFBGIAAhdIALAAIAABdgAgFg0QgEgDAAgEQAAgFAEgCQADgCACgBQAEABACACQADACAAAFQAAAEgDADQgCADgEgBQgCABgDgDg");
	this.shape_34.setTransform(-178.4,-119.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#111111").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_35.setTransform(-185.3,-117.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#111111").s().p("AgGBGIAAhdIAMAAIAABdgAgGg0QgCgDAAgEQAAgFACgCQADgCADgBQADABADACQAEACAAAFQAAAEgEADQgDADgDgBQgDABgDgDg");
	this.shape_36.setTransform(-192.8,-119.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#111111").s().p("AAcAwIAAgzQgBgQgFgHQgFgJgPAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgJIgBgLIAOAAIABAHIAAAHIAAAAIAFgGQAEgEAEgCIAJgDIAIgCQATAAAIAJQAIAKAAARIAAA7g");
	this.shape_37.setTransform(-200.9,-117.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#111111").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgFADgCQAEgCACgBQAEABADACQACACAAAFQAAAEgCADQgDADgEgBQgCABgEgDg");
	this.shape_38.setTransform(-208.7,-119.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#111111").s().p("AgLBNIAAhRIgTAAIAAgMIATAAIAAgZQAAgTAJgIQAIgIAOAAIAGABIAFABIgCAMIgFgBIgFgBQgGAAgDACQgEACgBADQgCADgBAFIAAAJIAAAYIAWAAIAAAMIgWAAIAABRg");
	this.shape_39.setTransform(-213.6,-120.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_40.setTransform(-222.5,-117.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#111111").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgHADgEAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGADAIAAQAIAAAHgDQAHgDAFgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgFgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_41.setTransform(-234.5,-119.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_42.setTransform(-251.3,-117.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#111111").s().p("AgFBMIAAiWIALAAIAACWg");
	this.shape_43.setTransform(-258.6,-120);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#111111").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_44.setTransform(-272.1,-117.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#111111").s().p("AAbAwIAAgzQABgQgGgHQgFgJgPAAIgFABQgEABgFADQgFAEgEAHQgEAIgBALIAAAwIgNAAIAAhIIAAgJIAAgLIANAAIAAAHIAAAHIABAAIAFgGQAEgEAEgCIAJgDIAIgCQASAAAJAJQAJAKAAARIAAA7g");
	this.shape_45.setTransform(-282.7,-117.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#111111").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_46.setTransform(-294,-117.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#111111").s().p("AgFBGIAAhdIALAAIAABdgAgFg0QgDgDAAgEQAAgFADgCQACgCADgBQADABADACQAEACAAAFQAAAEgEADQgDADgDgBQgDABgCgDg");
	this.shape_47.setTransform(-302.3,-119.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAKAAAIAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgIAEgKAAQgKAAgKgDg");
	this.shape_48.setTransform(-309.2,-117.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#111111").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_49.setTransform(-318.8,-117.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#111111").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_50.setTransform(-329.5,-117.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#111111").s().p("AgFBMIAAiWIALAAIAACWg");
	this.shape_51.setTransform(-337.5,-120);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#111111").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAGgGQAGgHAIgEQAKgDAIAAQALAAAIAEQAJADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAFAEAFADQAGACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_52.setTransform(-345.4,-117.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#111111").s().p("AgZBFQgMgEgHgMIAMgJQAFAIAIAEQAJAFAKAAIAKgBQAGgCAEgEQAEgDADgFQADgEAAgHQAAgHgDgFQgDgFgFgDIgMgGIgMgEIgNgFQgHgCgFgEQgGgEgDgHQgDgGAAgKQAAgKAFgIQAEgIAGgFQAHgFAHgCQAJgCAHAAQAMAAAKADQAKAEAJAKIgOAKQgIgOgTAAQgFAAgFABQgFACgEADQgEADgDAFQgDAFAAAGQAAAKAFAFQAGAGAIADIARAGQAJADAIADQAIAFAFAHQAGAIAAAMQAAAKgFAIQgDAHgIAGQgGAFgIADQgJACgHAAQgNAAgMgFg");
	this.shape_53.setTransform(-356.5,-119.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#111111").s().p("AAAALIgRAYIgKgHIASgYIgcgHIAEgMIAcAJIAAgdIALAAIAAAdIAcgJIAEAMIgcAHIASAYIgJAHg");
	this.shape_54.setTransform(-366.6,-123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.mc_obj5},{t:this.mc_obj0},{t:this.mc_obj2},{t:this.mc_obj3},{t:this.mc_obj1},{t:this.mc_obj4},{t:this.mc_questions},{t:this.mc_t5},{t:this.mc_t3},{t:this.mc_t2},{t:this.mc_t0},{t:this.mc_t4},{t:this.mc_t1},{t:this.mc_audioIntro}]}).wait(1));

	// Capa 3
	this.instance = new lib.Mapadebits2();
	this.instance.parent = this;
	this.instance.setTransform(-493,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(-494.8,-329.8,1035.6,592.8), null);


// stage content:
(lib.pag23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var mc = this;
		var totalButtons = 6;
		var answerSelect;
		var arrGoodAnswers = [false, false, false, false, false, false];
		var obj;
		var goodAnswer = 0;
		var actSignal = 0;
		
		ini();
		
		function ini() {
		
			controlButtons();
		
			mc.mc_content.btn_send.alpha = 0;
			mc.mc_content.mc_retro.alpha = 0;
		
			mc.mc_content.mc_feedback.btn_start.addEventListener("mousedown", closeIntro);
			mc.mc_content.btn_send.addEventListener("mousedown", validate);
		
		}
		
		function closeIntro(evt) {
			createjs.Sound.stop();
			mc.mc_content.mc_feedback.btn_start.removeEventListener("mousedown", closeIntro);
			createjs.Tween.get(mc.mc_content.mc_feedback).to({
				alpha: 0
			}, 150);
		
			setTimeout(function () {
				mc.mc_content.mc_audioIntro.gotoAndStop(1);
			}, 2000);
		}
		
		function controlButtons() {
			for (var i = 0; i < totalButtons; i++) {
				mc.mc_content["mc_obj" + i].num = i;
				mc.mc_content["mc_obj" + i].cursor = "pointer";
				mc.mc_content["mc_obj" + i].mouseEnabled = true;
				mc.mc_content["mc_obj" + i].addEventListener("mousedown", answer);
			}
		}
		
		function resetButtons() {
			for (var i = 0; i < totalButtons; i++) {
				mc.mc_content["mc_obj" + i].gotoAndStop(0);
			}
		}
		
		function hidenSendButton() {
			mc.mc_content.btn_send.alpha = 0;
		}
		
		function answer(evt) {
			createjs.Sound.stop();
			var num = evt.currentTarget.num;
			answerSelect = num;
			obj = evt.currentTarget;
			resetButtons();
		
			obj.gotoAndStop(1);
		
			mc.mc_content.btn_send.alpha = 1;
		}
		
		function validate(evt) {
			createjs.Sound.stop();
			hidenSendButton();
		
			if (answerSelect == mc.mc_content.mc_questions.currentFrame) {
				goodAnswer++
				arrGoodAnswers[answerSelect] = true;
				console.log("Buena");
				if (arrGoodAnswers[obj.num] == true) {
					obj.alpha = 0;
					mc.mc_content["mc_t" + answerSelect].alpha = 0;
				}
		
				actSignal++
		
				hidenSendButton();
				mc.mc_content.mc_questions.gotoAndStop(actSignal);
				mc.mc_content.mc_cont.gotoAndStop(actSignal);
		
				if (actSignal === totalButtons) {
					mc.mc_content.mc_cont.gotoAndStop(5);
					createjs.Tween.get(mc.mc_content.mc_retro).to({
						alpha: 1
					}, 150);
					mc.mc_content.mc_retro.btn_finish.addEventListener("mousedown", finish);
				}
		
			} else {
				createjs.Tween.get(obj, mc.mc_content["mc_t" + answerSelect])
					.to({
						scaleX: 1.2,
						scaleY: 1.2
					}, 100, createjs.Ease.linear)
					.to({
						scaleX: 1,
						scaleY: 1
					}, 100, createjs.Ease.linear);
				resetButtons();
			}
		}
		
		function finish(evt) {
			mc.mc_content.mc_retro.btn_finish.removeEventListener("mousedown", finish);
			finTema(true, estructura.actTemaNosotros);
			mc_contenido.mc_vacio.removeAllChildren();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// flash0.ai
	this.mc_content = new lib.Símbolo1();
	this.mc_content.parent = this;
	this.mc_content.setTransform(740.2,456.9);

	this.timeline.addTween(cjs.Tween.get(this.mc_content).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(885.3,487.1,1035.6,592.8);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/pag23_atlas_.png", id:"pag23_atlas_"},
		{src:"sounds/tecuidamos1.mp3", id:"tecuidamos1"},
		{src:"sounds/tecuidamos2.mp3", id:"tecuidamos2"},
		{src:"sounds/tecuidamos3.mp3", id:"tecuidamos3"},
		{src:"sounds/tecuidamos4.mp3", id:"tecuidamos4"},
		{src:"sounds/tecuidamos5.mp3", id:"tecuidamos5"},
		{src:"sounds/tecuidamos6.mp3", id:"tecuidamos6"},
		{src:"sounds/tecuidamos7.mp3", id:"tecuidamos7"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;