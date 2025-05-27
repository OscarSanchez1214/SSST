(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"pag0_atlas_", frames: [[0,727,1280,720],[248,1656,246,76],[248,1734,246,76],[0,0,1286,725],[496,1578,145,77],[0,1449,1279,127],[248,1867,246,53],[248,1812,246,53],[248,1922,246,53],[0,1718,246,138],[0,1858,246,138],[0,1578,246,138],[248,1578,246,76]]}
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
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits10 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits11 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits12 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits13 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits7 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits8 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits9 = function() {
	this.spriteSheet = ss["pag0_atlas_"];
	this.gotoAndStop(12);
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


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.vacio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.vacio, null, null);


(lib.Símbolo13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits13();
	this.instance.parent = this;
	this.instance.setTransform(-72.5,-38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.5,-38.5,145,77);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Mapadebits12();
	this.instance.parent = this;
	this.instance.setTransform(-643,-362.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-643,-362.5,1286,725);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("AAcAwIAAgzQgBgPgFgIQgGgJgOAAIgFABQgEAAgGAEQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgJIgBgLIAOAAIABAHIAAAHIAAAAIAGgHQADgDAEgCIAJgEIAIgBQATAAAIAJQAJAKgBARIAAA7g");
	this.shape.setTransform(12.9,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2B2B2").s().p("AgTBEQgJgDgHgHQgGgHgEgJQgEgIAAgMQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKABQALgBAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAAMgEAIQgEAJgGAHQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOgLQgGAEgFAEQgEAFgDAGQgCAHAAAHQAAAIACAIQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgIAAgIQAAgHgCgHQgDgGgEgFQgFgEgGgEQgHgDgIAAQgHAAgHADgAgLgqIATgdIASAAIgaAdg");
	this.shape_1.setTransform(1.6,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2B2B2").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgDgDAAgEQAAgFADgCQAEgCACgBQAEABADACQACACAAAFQAAAEgCADQgDADgEgBQgCABgEgDg");
	this.shape_2.setTransform(-6.7,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2B2B2").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgGADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAGADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgKAAgJgDg");
	this.shape_3.setTransform(-13.6,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_4.setTransform(-24.2,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2B2B2").s().p("AglAvIAAgKIA2hHIgzAAIAAgMIBGAAIAAAKIg2BHIA4AAIAAAMg");
	this.shape_5.setTransform(-33.4,1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2B2B2").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDgBgEQABgFADgCQADgCACgBQADABADACQADACABAFQgBAEgDADQgDADgDgBQgCABgDgDg");
	this.shape_6.setTransform(-40,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2B2B2").s().p("AgGBLIAAiVIANAAIAACVg");
	this.shape_7.setTransform(-44.8,-1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2B2B2").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgFACgCQADgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEgBQgDABgDgDg");
	this.shape_8.setTransform(-49.6,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2B2B2").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_9.setTransform(-57.8,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B2B2B2").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgFACgCQADgCADgBQADABAEACQACACAAAFQAAAEgCADQgEADgDgBQgDABgDgDg");
	this.shape_10.setTransform(-66.6,-0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_11.setTransform(-73.3,1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B2B2B2").s().p("AAcAwIAAgzQAAgPgGgIQgGgJgOAAIgFABQgEAAgGAEQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgJIgBgLIAOAAIABAHIAAAHIAAAAIAFgHQAEgDAEgCIAJgEIAIgBQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_12.setTransform(-83.2,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B2B2B2").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_13.setTransform(-94.2,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B2B2B2").s().p("AgYBFQgMgEgJgMIAOgJQAEAIAIAEQAJAFAKAAIALgBQAFgCAEgEQAFgDACgFQADgEAAgHQAAgHgDgFQgDgFgFgDIgMgGIgMgEIgOgFQgGgCgFgEQgGgEgDgHQgCgGAAgKQAAgKADgIQAFgIAGgFQAGgFAIgCQAJgCAIAAQAMAAAJADQAKAEAIAKIgMAKQgKgOgRAAQgGAAgEABQgGACgEADQgEADgDAFQgDAFAAAGQAAAKAFAFQAGAGAIADIARAGQAJADAIADQAIAFAFAHQAFAIABAMQgBAKgEAIQgEAHgGAGQgHAFgIADQgIACgIAAQgNAAgLgFg");
	this.shape_14.setTransform(-105.3,-0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20512").s().p("AAcAwIAAgzQgBgPgFgIQgGgJgOAAIgFABQgEAAgGAEQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgJIgBgLIAOAAIABAHIAAAHIAAAAIAGgHQADgDAEgCIAJgEIAIgBQATAAAIAJQAJAKgBARIAAA7g");
	this.shape_15.setTransform(12.9,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20512").s().p("AgTBEQgJgDgHgHQgGgHgEgJQgEgIAAgMQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKABQALgBAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAAMgEAIQgEAJgGAHQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOgLQgGAEgFAEQgEAFgDAGQgCAHAAAHQAAAIACAIQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgIAAgIQAAgHgCgHQgDgGgEgFQgFgEgGgEQgHgDgIAAQgHAAgHADgAgLgqIATgdIASAAIgaAdg");
	this.shape_16.setTransform(1.6,-0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgDgDAAgEQAAgFADgCQAEgCACgBQAEABADACQACACAAAFQAAAEgCADQgDADgEgBQgCABgEgDg");
	this.shape_17.setTransform(-6.7,-0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20512").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgGADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAGADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgKAAgJgDg");
	this.shape_18.setTransform(-13.6,1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_19.setTransform(-24.2,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20512").s().p("AglAvIAAgKIA2hHIgzAAIAAgMIBGAAIAAAKIg2BHIA4AAIAAAMg");
	this.shape_20.setTransform(-33.4,1.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDgBgEQABgFADgCQADgCACgBQADABADACQADACABAFQgBAEgDADQgDADgDgBQgCABgDgDg");
	this.shape_21.setTransform(-40,-0.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20512").s().p("AgGBLIAAiVIANAAIAACVg");
	this.shape_22.setTransform(-44.8,-1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgFACgCQADgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEgBQgDABgDgDg");
	this.shape_23.setTransform(-49.6,-0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20512").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_24.setTransform(-57.8,-1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgFACgCQADgCADgBQADABAEACQACACAAAFQAAAEgCADQgEADgDgBQgDABgDgDg");
	this.shape_25.setTransform(-66.6,-0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_26.setTransform(-73.3,1.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20512").s().p("AAcAwIAAgzQAAgPgGgIQgGgJgOAAIgFABQgEAAgGAEQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgJIgBgLIAOAAIABAHIAAAHIAAAAIAFgHQAEgDAEgCIAJgEIAIgBQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_27.setTransform(-83.2,1.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_28.setTransform(-94.2,1.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20512").s().p("AgYBFQgMgEgJgMIAOgJQAEAIAIAEQAJAFAKAAIALgBQAFgCAEgEQAFgDACgFQADgEAAgHQAAgHgDgFQgDgFgFgDIgMgGIgMgEIgOgFQgGgCgFgEQgGgEgDgHQgCgGAAgKQAAgKADgIQAFgIAGgFQAGgFAIgCQAJgCAIAAQAMAAAJADQAKAEAIAKIgMAKQgKgOgRAAQgGAAgEABQgGACgEADQgEADgDAFQgDAFAAAGQAAAKAFAFQAGAGAIADIARAGQAJADAIADQAIAFAFAHQAFAIABAMQgBAKgEAIQgEAHgGAGQgHAFgIADQgIACgIAAQgNAAgLgFg");
	this.shape_29.setTransform(-105.3,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(2));

	// Estados
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-123,-27);

	this.instance_1 = new lib.Mapadebits5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123,-27);

	this.instance_2 = new lib.Mapadebits4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-27,246,53);


(lib.Precarga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt = new cjs.Text("CARGANDO: 0%", "bold 22px 'Helvetica'", "#333333");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 30;
	this.txt.lineWidth = 308;
	this.txt.parent = this;
	this.txt.setTransform(-0.1,-13.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("A4tE+QhCAAAAhkIAAmzQAAhkBCAAMAxbAAAQBCAAAABkIAAGzQAABkhCAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Precarga, new cjs.Rectangle(-164.7,-31.8,329.5,63.7), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjLDKQgHAAgEgEQgEgEgBgHQABgOAIgKQAKgKAOgCICXgYQAIgCAEgIQACgJgHgHIjhjhQgIgIAAgLQAAgLAIgIQAIgIAMAAQALAAAIAIICWCWQAFAFAGAAQAGAAAFgFQAEgEAAgGQAAgHgEgEIg+g+QgIgIAAgLQAAgMAIgIQAIgHALAAQAMAAAIAHIA9A+QAEAEAGAAQAHAAAEgEQAEgEABgHQgBgGgEgEIgfggQgHgIgBgLQAAgMAJgIQAIgHAKAAQAMgBAHAIIAgAgIAAAAQAFAEAFAAQAHAAAEgEQAFgFAAgGQAAgGgFgEIgBgCQgJgIABgMQAAgLAIgIQAIgHALAAQAMAAAHAHIBxB8QAjAnAAAzQAAA4goAnIgvAwQgnAng5AAg");
	this.shape.setTransform(26.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,52.4,40.5), null);


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.Símbolo13();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-5.5);
	this.instance.alpha = 0.012;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20512").s().p("AgvBQIAAifIAWAAIAACLIBJAAIAAAUg");
	this.shape.setTransform(52.4,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AA2BQIgQgnIhLAAIgQAnIgaAAIBHifIATAAIBECfgAgdAWIA7AAIgehJIAAAAg");
	this.shape_1.setTransform(37.6,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20512").s().p("Ag1BQIAAifIA5AAQAXAAANAMQAOALAAAWQAAAVgOAMQgNAKgXAAIgjAAIAABHgAgfgJIAdAAQAhABAAgaQAAgaghAAIgdAAg");
	this.shape_2.setTransform(23.7,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20512").s().p("AgKBQIAAifIAVAAIAACfg");
	this.shape_3.setTransform(13.1,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20512").s().p("AgWBNQgQgIgLgLQgKgMgGgPQgFgPAAgPQgBgkAXgYQAYgYAkAAQARAAAPAHQAPAGAJAMIgSANQgPgSgXAAQgaAAgRATQgQASgBAbQAAAbARASQARASAaAAQAaAAAPgVIASANQgJANgQAIQgQAHgTAAQgRAAgQgHg");
	this.shape_4.setTransform(2.3,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20512").s().p("AAqBQIhZiDIAACDIgVAAIAAifIAcAAIBXCDIABAAIAAiDIAVAAIAACfg");
	this.shape_5.setTransform(-14.9,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20512").s().p("AgKBQIAAifIAVAAIAACfg");
	this.shape_6.setTransform(-27.1,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20512").s().p("AAdBQIgnhHIgYAAIAABHIgWAAIAAifIA4AAQAXAAANALQAOALABAXQgBAPgJAMQgKAMgUACIAuBJgAgigJIAdAAQAgABAAgaQAAgaggAAIgdAAg");
	this.shape_7.setTransform(-36.3,12.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20512").s().p("Ag1BQIAAifIA5AAQAXAAANAMQAOALAAAWQAAAVgOAMQgNAKgXAAIgjAAIAABHgAgfgJIAdAAQAhABAAgaQAAgaghAAIgdAAg");
	this.shape_8.setTransform(-50,12.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20512").s().p("AgkBgQgPgJgIgPQgHgPAAgTIAAhhIAjAAIAABgQAAAKAEAHQAEAJAHAEQAIAEAIAAQAJAAAIgEQAHgEAEgJQAEgHAAgKIAAhgIAjAAIAABhQAAATgHAPQgIAPgPAJQgPAIgWAAQgVAAgPgIgAgWhHIAWggIAuAAIgnAgg");
	this.shape_9.setTransform(4.9,-19.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20512").s().p("AAeBQIhFhxIgBAAIAABxIgjAAIAAifIAwAAIBDBuIAAAAIAAhuIAkAAIAACfg");
	this.shape_10.setTransform(-12.6,-17.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20512").s().p("Ag4BQIAAifIBsAAIAAAgIhIAAIAAAeIBEAAIAAAgIhEAAIAAAhIBNAAIAAAgg");
	this.shape_11.setTransform(-28.7,-17.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20512").s().p("AA3BQIAAh5IAAAAIgqB5IgaAAIgph5IAAAAIAAB5IgjAAIAAifIA1AAIAkBnIAAAAIAlhnIA1AAIAACfg");
	this.shape_12.setTransform(-46.8,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo12, new cjs.Rectangle(-73,-44,145,77), null);


(lib.Interpolación4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.6,3.8,0.631,0.631,39.7,0,0,26.8,19.6);
	this.instance.alpha = 0.602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AguDAQhAgRgpg1Qgpg0AAhDQAAhQA6g5QA5g6BQAAQBDAAA0ApQA1ApARBAQACAGgDAFQgEAGgGABQgGACgFgDQgFgDgCgGQgOg3gtgiQgtgig4AAQhDAAgxAwQgwAxAABDQAAA5AiAsQAiAtA3AOQAGACADAFQADAFgCAGQgDAMgLAAg");
	this.shape.setTransform(-5.9,-12.2,0.631,0.631,39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AgxCAQgkgPgWgiQgWghAAgoQAAg3AogpQAognA3AAQAoAAAhAWQAiAVAQAlQACAGgCAGQgCAFgGADQgFACgGgCQgGgCgCgGQgNgcgagRQgbgRgeAAQgrAAgfAfQgfAfAAArQAAAeARAaQARAaAcANQAGADACAFQACAHgCAFQgEAJgKAAIgGgCg");
	this.shape_1.setTransform(-5.9,-12.4,0.631,0.631,39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AjMDoQgSAAgNgNQgNgNgBgTQAAgZARgSQARgTAYgEIB6gTIjOjMQgRgRAAgYQAAgYARgRQARgRAZAAQAXAAARARIA1A2QAFgOAKgLQAPgPAWgBQAWgCAQANQAFgOAKgLQAPgPAWgBQAWgCAQANQAEgOALgLQAQgQAYAAQAZAAAQAQIBxB8QArAwAAA/QAABDgwAyIgvAvQgxAwhEAAgAj9iiQgIAIAAALQAAALAIAIIDiDhQAGAHgDAJQgDAIgIACIiYAYQgNACgKAKQgIAKgBAOQAAAHAFAEQAEAEAGAAIEcAAQA4AAAngnIAwgwQAngnAAg4QAAgzgjgnIhxh8QgHgHgMAAQgLAAgIAHQgIAIAAALQAAAMAHAIIACACQAEAEABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEIAAAAIgfggQgIgIgMABQgKAAgJAHQgHAIgBAMQAAALAIAIIAfAgQAFAEgBAGQABAHgFAEQgEAEgGAAQgHAAgEgEIg9g+QgIgHgMAAQgLAAgIAHQgHAIgBAMQAAALAHAIIA/A+QAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFIiXiWQgIgIgLAAQgMAAgIAIg");
	this.shape_2.setTransform(-0.3,4.5,0.631,0.631,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-24.3,41.8,48.6);


(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.6,3.8,0.631,0.631,39.7,0,0,26.8,19.6);
	this.instance.alpha = 0.602;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4D4D").s().p("AguDAQhAgRgpg1Qgpg0AAhDQAAhQA6g5QA5g6BQAAQBDAAA0ApQA1ApARBAQACAGgDAFQgEAGgGABQgGACgFgDQgFgDgCgGQgOg3gtgiQgtgig4AAQhDAAgxAwQgwAxAABDQAAA5AiAsQAiAtA3AOQAGACADAFQADAFgCAGQgDAMgLAAg");
	this.shape.setTransform(-5.9,-12.2,0.631,0.631,39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D4D4D").s().p("AgxCAQgkgPgWgiQgWghAAgoQAAg3AogpQAognA3AAQAoAAAhAWQAiAVAQAlQACAGgCAGQgCAFgGADQgFACgGgCQgGgCgCgGQgNgcgagRQgbgRgeAAQgrAAgfAfQgfAfAAArQAAAeARAaQARAaAcANQAGADACAFQACAHgCAFQgEAJgKAAIgGgCg");
	this.shape_1.setTransform(-5.9,-12.4,0.631,0.631,39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("AjMDoQgSAAgNgNQgNgNgBgTQAAgZARgSQARgTAYgEIB6gTIjOjMQgRgRAAgYQAAgYARgRQARgRAZAAQAXAAARARIA1A2QAFgOAKgLQAPgPAWgBQAWgCAQANQAFgOAKgLQAPgPAWgBQAWgCAQANQAEgOALgLQAQgQAYAAQAZAAAQAQIBxB8QArAwAAA/QAABDgwAyIgvAvQgxAwhEAAgAj9iiQgIAIAAALQAAALAIAIIDiDhQAGAHgDAJQgDAIgIACIiYAYQgNACgKAKQgIAKgBAOQAAAHAFAEQAEAEAGAAIEcAAQA4AAAngnIAwgwQAngnAAg4QAAgzgjgnIhxh8QgHgHgMAAQgLAAgIAHQgIAIAAALQAAAMAHAIIACACQAEAEABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEIAAAAIgfggQgIgIgMABQgKAAgJAHQgHAIgBAMQAAALAIAIIAfAgQAFAEgBAGQABAHgFAEQgEAEgGAAQgHAAgEgEIg9g+QgIgHgMAAQgLAAgIAHQgHAIgBAMQAAALAHAIIA/A+QAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFIiXiWQgIgIgLAAQgMAAgIAIg");
	this.shape_2.setTransform(-0.3,4.5,0.631,0.631,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-24.3,41.8,48.6);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación3("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Interpolación4("synched",0);
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.18,scaleY:1.18},9).to({scaleX:1,scaleY:1},10).to({_off:true},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},10).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-24.3,36.2,45.7);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo10();
	this.mc_hand.parent = this;
	this.mc_hand.setTransform(72.7,5.6,0.844,0.844);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BABABA").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEABgGADQgFAEgEAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQATAAAIAJQAIAKAAARIAAA7g");
	this.shape.setTransform(-21,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BABABA").s().p("AgTBEQgJgDgHgHQgGgGgEgKQgEgJAAgKQAAgLAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAALQAAAKgEAJQgEAKgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOgLQgGAEgFAEQgEAEgDAHQgCAHAAAIQAAAHACAIQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgIAAgHQAAgIgCgHQgDgHgEgEQgFgEgGgEQgHgCgIAAQgHAAgHACgAgLgqIATgdIASAAIgaAdg");
	this.shape_1.setTransform(-32.3,-3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BABABA").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_2.setTransform(-40.6,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BABABA").s().p("AgMAuQgJgEgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgDgFgGgEQgGgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAGgDQAGgEADgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_3.setTransform(-47.5,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BABABA").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_4.setTransform(-58.2,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BABABA").s().p("AgfAmQgJgJABgSIAAg6IAMAAIAAAyQABAJABAFQABAGADAEQADAEAFADQAFACAHAAIAFgBQAEgBAGgDQAEgEAFgHQADgIAAgMIAAgvIAOAAIAABIIAAAKIABAKIgOAAIgBgHIAAgIIAAAAQgCAFgEACIgHAGIgJADQgEACgEAAQgTAAgIgKg");
	this.shape_5.setTransform(-68.7,-1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BABABA").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_6.setTransform(-76.6,-4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BABABA").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_7.setTransform(-84.5,-1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BABABA").s().p("AgGAvIgmhdIAPAAIAdBOIABAAIAdhOIAPAAIgmBdg");
	this.shape_8.setTransform(-94.2,-1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BABABA").s().p("AgsBHIAAiNIBXAAIAAANIhJAAIAAAxIBEAAIAAAMIhEAAIAAA2IBLAAIAAANg");
	this.shape_9.setTransform(-104.4,-3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20512").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEABgGADQgFAEgEAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQATAAAIAJQAIAKAAARIAAA7g");
	this.shape_10.setTransform(-21,-1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20512").s().p("AgTBEQgJgDgHgHQgGgGgEgKQgEgJAAgKQAAgLAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAALQAAAKgEAJQgEAKgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOgLQgGAEgFAEQgEAEgDAHQgCAHAAAIQAAAHACAIQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgIAAgHQAAgIgCgHQgDgHgEgEQgFgEgGgEQgHgCgIAAQgHAAgHACgAgLgqIATgdIASAAIgaAdg");
	this.shape_11.setTransform(-32.3,-3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_12.setTransform(-40.6,-3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20512").s().p("AgMAuQgJgEgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgDgFgGgEQgGgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAGgDQAGgEADgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_13.setTransform(-47.5,-1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_14.setTransform(-58.2,-1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20512").s().p("AgfAmQgJgJABgSIAAg6IAMAAIAAAyQABAJABAFQABAGADAEQADAEAFADQAFACAHAAIAFgBQAEgBAGgDQAEgEAFgHQADgIAAgMIAAgvIAOAAIAABIIAAAKIABAKIgOAAIgBgHIAAgIIAAAAQgCAFgEACIgHAGIgJADQgEACgEAAQgTAAgIgKg");
	this.shape_15.setTransform(-68.7,-1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20512").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_16.setTransform(-76.6,-4.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_17.setTransform(-84.5,-1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20512").s().p("AgGAvIgmhdIAPAAIAdBOIABAAIAdhOIAPAAIgmBdg");
	this.shape_18.setTransform(-94.2,-1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20512").s().p("AgsBHIAAiNIBXAAIAAANIhJAAIAAAxIBEAAIAAAMIhEAAIAAA2IBLAAIAAANg");
	this.shape_19.setTransform(-104.4,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(2));

	// Estados
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-123,-27);

	this.instance_1 = new lib.Mapadebits5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123,-27);

	this.instance_2 = new lib.Mapadebits4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-27,246,53);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo10();
	this.mc_hand.parent = this;
	this.mc_hand.setTransform(71.4,1.6,0.72,0.72);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7B7B7").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape.setTransform(38.4,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7B7B7").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgDgFgGgEQgGgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAGgDQAGgEADgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_1.setTransform(29,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7B7B7").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgEgDAAgEQAAgEAEgDQADgCACAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEABQgCgBgDgCg");
	this.shape_2.setTransform(21.4,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B7B7B7").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_3.setTransform(15.7,-2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7B7B7").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_4.setTransform(7.9,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B7B7B7").s().p("AgSBGQgGgCgFgDQgEgDgDgFQgDgGAAgHQAAgLAGgHQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgDQAAgWgYAAQgPgBgMALIgIgJQANgOAZAAQAHABAGACQAHACAEADQAFAFADAGQACAGAAAHIAAArIABALIABAJIgNAAIgBgHIAAgIQgGAKgIAEQgIAEgKAAQgHAAgFgCgAAGAXQgHABgHACQgGACgFAEQgFAEAAAGQAAAFACAEQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgGQABgFAAgGIAAgHIgHAAIgMAAgAgIgqIATgdIASAAIgbAdg");
	this.shape_5.setTransform(-2.8,-3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7B7B7").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_6.setTransform(-10.2,-1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B7B7B7").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_7.setTransform(-20.1,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B7B7B7").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_8.setTransform(-37.8,-1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B7B7B7").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_9.setTransform(-48.7,-1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B7B7B7").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_10.setTransform(-65.7,-1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B7B7B7").s().p("AgGBLIAAiWIAMAAIAACWg");
	this.shape_11.setTransform(-74,-4.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B7B7B7").s().p("AAcAwIAAgzQgBgPgFgJQgFgIgPAAIgFABQgEABgGADQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQATAAAIAJQAIAKAAARIAAA7g");
	this.shape_12.setTransform(-82.1,-1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B7B7B7").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_13.setTransform(-93.4,-1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B7B7B7").s().p("AgrBHIAAiNIAqAAQAUAAAMAKQANAJAAATQAAATgNAJQgMAJgUAAIgbAAIAABCgAgcgHIAXAAQAIAAAHgCQAHgCAEgEQAEgDACgEQABgFAAgFQAAgFgBgFQgCgEgEgDQgEgEgHgCQgHgCgIAAIgXAAg");
	this.shape_14.setTransform(-104.5,-3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_15.setTransform(38.4,-1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20512").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgDgFgGgEQgGgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAGgDQAGgEADgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_16.setTransform(29,-1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgEgDAAgEQAAgEAEgDQADgCACAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEABQgCgBgDgCg");
	this.shape_17.setTransform(21.4,-3.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_18.setTransform(15.7,-2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20512").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_19.setTransform(7.9,-1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20512").s().p("AgSBGQgGgCgFgDQgEgDgDgFQgDgGAAgHQAAgLAGgHQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgDQAAgWgYAAQgPgBgMALIgIgJQANgOAZAAQAHABAGACQAHACAEADQAFAFADAGQACAGAAAHIAAArIABALIABAJIgNAAIgBgHIAAgIQgGAKgIAEQgIAEgKAAQgHAAgFgCgAAGAXQgHABgHACQgGACgFAEQgFAEAAAGQAAAFACAEQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgGQABgFAAgGIAAgHIgHAAIgMAAgAgIgqIATgdIASAAIgbAdg");
	this.shape_20.setTransform(-2.8,-3.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_21.setTransform(-10.2,-1.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20512").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_22.setTransform(-20.1,1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20512").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_23.setTransform(-37.8,-1.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_24.setTransform(-48.7,-1.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_25.setTransform(-65.7,-1.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20512").s().p("AgGBLIAAiWIAMAAIAACWg");
	this.shape_26.setTransform(-74,-4.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20512").s().p("AAcAwIAAgzQgBgPgFgJQgFgIgPAAIgFABQgEABgGADQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQATAAAIAJQAIAKAAARIAAA7g");
	this.shape_27.setTransform(-82.1,-1.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_28.setTransform(-93.4,-1.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20512").s().p("AgrBHIAAiNIAqAAQAUAAAMAKQANAJAAATQAAATgNAJQgMAJgUAAIgbAAIAABCgAgcgHIAXAAQAIAAAHgCQAHgCAEgEQAEgDACgEQABgFAAgFQAAgFgBgFQgCgEgEgDQgEgEgHgCQgHgCgIAAIgXAAg");
	this.shape_29.setTransform(-104.5,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(2));

	// Estados
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-123,-27);

	this.instance_1 = new lib.Mapadebits5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123,-27);

	this.instance_2 = new lib.Mapadebits4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-27,246,53);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo10();
	this.mc_hand.parent = this;
	this.mc_hand.setTransform(74.8,0.6,0.797,0.797);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3B3B3").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape.setTransform(45.7,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B3B3").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_1.setTransform(35.6,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3B3B3").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_2.setTransform(27.2,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3B3B3").s().p("AgZBDQgLgEgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgIQgEgIAAgLQAAgKAEgJQAEgIAGgHQAGgGAJgFQAJgDAKAAIAIABQAFABAEABIAKAGQAEAEAEAFIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAIgKAEQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAEgDAHQgCAHAAAHQAAAHACAHQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgEACgGQADgHAAgIQAAgHgCgHQgDgHgEgEQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_3.setTransform(16.6,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3B3B3").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_4.setTransform(8.4,-3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3B3B3").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_5.setTransform(3.6,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3B3B3").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAGgGQAGgHAIgEQAKgDAIAAQALAAAIAEQAJADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAFAEAFADQAGACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_6.setTransform(-4.3,-1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3B3B3").s().p("AgrBHIAAiNIApAAQAVAAAMAKQANAJAAATQAAATgNAJQgMAJgVAAIgbAAIAABCgAgdgHIAYAAQAIAAAHgCQAHgCAEgEQAEgDACgEQACgFAAgFQAAgFgCgFQgCgEgEgDQgEgEgHgCQgHgCgIAAIgYAAg");
	this.shape_7.setTransform(-15.1,-3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3B3B3").s().p("AgkBHIgGgCIABgMQAFACAFAAQAHAAAEgFQAEgEADgIIAHgSIgmheIAQAAIAdBNIAchNIARAAIguB1QgFALgHAGQgFAHgNAAIgGAAg");
	this.shape_8.setTransform(-31.7,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3B3B3").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_9.setTransform(-46.4,-1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3B3B3").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_10.setTransform(-56.5,-1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3B3B3").s().p("AgZBDQgLgEgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgIQgEgIAAgLQAAgKAEgJQAEgIAGgHQAGgGAJgFQAJgDAKAAIAIABQAFABAEABIAKAGQAEAEAEAFIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAIgKAEQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAEgDAHQgCAHAAAHQAAAHACAHQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgEACgGQADgHAAgIQAAgHgCgHQgDgHgEgEQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_11.setTransform(-68.8,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3B3B3").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_12.setTransform(-78.9,-1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3B3B3").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFAAAGIA+AAQAAgOgHgIQgIgIgPAAQgFAAgGACg");
	this.shape_13.setTransform(-88.7,-1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3B3B3").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDAAgEQAAgEADgDQADgCACAAQADAAADACQAEADAAAEQAAAEgEADQgDACgDABQgCgBgDgCg");
	this.shape_14.setTransform(-96.6,-3.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B3B3B3").s().p("AAeBHIgmhCIgYAAIAABCIgPAAIAAiNIAsAAQAVAAAMAKQANAJAAATQAAAPgKAKQgIAJgSACIAoBDgAgggHIAaAAQAJAAAGgCQAHgCAEgEQADgDADgEQACgFAAgFQAAgFgCgFQgDgEgDgDQgEgEgHgCQgGgCgJAAIgaAAg");
	this.shape_15.setTransform(-104.2,-3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_16.setTransform(45.7,-1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_17.setTransform(35.6,-1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_18.setTransform(27.2,-1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20512").s().p("AgZBDQgLgEgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgIQgEgIAAgLQAAgKAEgJQAEgIAGgHQAGgGAJgFQAJgDAKAAIAIABQAFABAEABIAKAGQAEAEAEAFIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAIgKAEQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAEgDAHQgCAHAAAHQAAAHACAHQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgEACgGQADgHAAgIQAAgHgCgHQgDgHgEgEQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_19.setTransform(16.6,0.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_20.setTransform(8.4,-3.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20512").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_21.setTransform(3.6,-4.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAGgGQAGgHAIgEQAKgDAIAAQALAAAIAEQAJADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAFAEAFADQAGACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_22.setTransform(-4.3,-1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20512").s().p("AgrBHIAAiNIApAAQAVAAAMAKQANAJAAATQAAATgNAJQgMAJgVAAIgbAAIAABCgAgdgHIAYAAQAIAAAHgCQAHgCAEgEQAEgDACgEQACgFAAgFQAAgFgCgFQgCgEgEgDQgEgEgHgCQgHgCgIAAIgYAAg");
	this.shape_23.setTransform(-15.1,-3.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20512").s().p("AgkBHIgGgCIABgMQAFACAFAAQAHAAAEgFQAEgEADgIIAHgSIgmheIAQAAIAdBNIAchNIARAAIguB1QgFALgHAGQgFAHgNAAIgGAAg");
	this.shape_24.setTransform(-31.7,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_25.setTransform(-46.4,-1.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_26.setTransform(-56.5,-1.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20512").s().p("AgZBDQgLgEgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgIQgEgIAAgLQAAgKAEgJQAEgIAGgHQAGgGAJgFQAJgDAKAAIAIABQAFABAEABIAKAGQAEAEAEAFIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAIgKAEQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAEgDAHQgCAHAAAHQAAAHACAHQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgEACgGQADgHAAgIQAAgHgCgHQgDgHgEgEQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_27.setTransform(-68.8,0.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_28.setTransform(-78.9,-1.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFAAAGIA+AAQAAgOgHgIQgIgIgPAAQgFAAgGACg");
	this.shape_29.setTransform(-88.7,-1.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDAAgEQAAgEADgDQADgCACAAQADAAADACQAEADAAAEQAAAEgEADQgDACgDABQgCgBgDgCg");
	this.shape_30.setTransform(-96.6,-3.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20512").s().p("AAeBHIgmhCIgYAAIAABCIgPAAIAAiNIAsAAQAVAAAMAKQANAJAAATQAAAPgKAKQgIAJgSACIAoBDgAgggHIAaAAQAJAAAGgCQAHgCAEgEQADgDADgEQACgFAAgFQAAgFgCgFQgDgEgDgDQgEgEgHgCQgGgCgJAAIgaAAg");
	this.shape_31.setTransform(-104.2,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).wait(2));

	// Estados
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-123,-27);

	this.instance_1 = new lib.Mapadebits5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123,-27);

	this.instance_2 = new lib.Mapadebits4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-27,246,53);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo10();
	this.mc_hand.parent = this;
	this.mc_hand.setTransform(88.8,9.2);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape.setTransform(62.1,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAJgDAIAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAEAEAGADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_1.setTransform(52.3,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2B2B2").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAJADIAKAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgKAFIgJAEIgKABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_2.setTransform(40.4,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_3.setTransform(29.1,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2B2B2").s().p("AgUBJQgIgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_4.setTransform(17.8,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2B2B2").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDAAgEQAAgEADgDQADgDACABQADgBADADQAEADAAAEQAAAEgEADQgDACgDABQgCgBgDgCg");
	this.shape_5.setTransform(9.6,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2B2B2").s().p("AgFBLIAAiWIAMAAIAACWg");
	this.shape_6.setTransform(4.8,17.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2B2B2").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgDADABQADgBAEADQACADAAAEQAAAEgCADQgEACgDABQgDgBgDgCg");
	this.shape_7.setTransform(0,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2B2B2").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_8.setTransform(-8.2,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_9.setTransform(-20.1,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_10.setTransform(-29.3,20.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B2B2B2").s().p("AAbAwIAAgzQABgPgGgJQgFgIgPAAIgFABQgEAAgFAEQgFAEgEAHQgEAHgBAMIAAAwIgNAAIAAhIIAAgJIAAgMIANAAIAAAIIAAAIIABAAIAFgIQAEgDAEgCIAJgEIAIgBQASAAAJAJQAJAKAAARIAAA7g");
	this.shape_11.setTransform(-39.2,20.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B2B2B2").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_12.setTransform(-50.5,20.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B2B2B2").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_13.setTransform(-62.2,23);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_14.setTransform(-72.9,20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAJgDAIAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAEAEAGADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_15.setTransform(-82.7,20.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B2B2B2").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_16.setTransform(-90.7,20.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B2B2B2").s().p("AgkBHIgGgCIABgMQAEACAHAAQAGAAAEgFQAEgEAEgIIAGgSIgnheIARAAIAcBNIAdhNIAQAAIgtB1QgEALgHAGQgHAHgMAAIgGAAg");
	this.shape_17.setTransform(-105.2,22.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_18.setTransform(52.8,-3.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAHAAQAKAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_19.setTransform(43,-3.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B2B2B2").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_20.setTransform(35,-6.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B2B2B2").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_21.setTransform(26.7,-3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B2B2B2").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_22.setTransform(18.3,-3.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B2B2B2").s().p("AgOAXIAOguIAPAAIgPAug");
	this.shape_23.setTransform(5.8,1.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_24.setTransform(-1.2,-3.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_25.setTransform(-11,-3.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B2B2B2").s().p("AAbAwIAAgzQABgPgGgJQgFgIgPAAIgEABQgFABgFADQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgKIAAgLIANAAIAAAIIAAAIIABAAIAFgIQAEgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_26.setTransform(-22.2,-3.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B2B2B2").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_27.setTransform(-33.5,-3.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B2B2B2").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDgBgEQABgEADgDQADgCACAAQADAAADACQADADABAEQgBAEgDADQgDACgDABQgCgBgDgCg");
	this.shape_28.setTransform(-41.8,-5.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B2B2B2").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAJAAAJAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgJAEgJAAQgKAAgKgDg");
	this.shape_29.setTransform(-48.7,-3.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_30.setTransform(-59.4,-3.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B2B2B2").s().p("AgZBDQgLgEgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgIQgEgIAAgLQAAgKAEgJQAEgIAGgHQAGgGAJgFQAJgDAKAAIAIABQAFABAEABIAKAGQAEAEAEAFIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAIgKAEQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAEgDAHQgCAHAAAHQAAAHACAHQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgCQAHgDAFgFQAFgEACgGQADgHAAgIQAAgHgCgHQgDgHgEgEQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_31.setTransform(-70.7,-0.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B2B2B2").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_32.setTransform(-78.9,-5.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B2B2B2").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_33.setTransform(-83.7,-6.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B2B2B2").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_34.setTransform(-91.9,-6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B2B2B2").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_35.setTransform(-104.2,-3.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B2B2B2").s().p("AgOAXIAOgtIAPAAIgPAtg");
	this.shape_36.setTransform(61.3,-21.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_37.setTransform(54.3,-26.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B2B2B2").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_38.setTransform(44.2,-26.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B2B2B2").s().p("AAbBLIAAg0QAAgPgGgIQgFgIgOABIgFABQgFAAgFADQgFAEgEAGQgEAIAAANIAAAvIgNAAIAAiWIANAAIAABJIABAAIAFgHQADgDAEgCIAJgEIAJgCQASAAAIAKQAJAKAAAQIAAA7g");
	this.shape_39.setTransform(32.6,-29.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B2B2B2").s().p("AgMAuQgJgEgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgDgFgGgEQgGgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAGgDQAGgEADgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_40.setTransform(22.7,-26.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_41.setTransform(12,-26.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B2B2B2").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_42.setTransform(3.9,-26.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B2B2B2").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_43.setTransform(-5.8,-26.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B2B2B2").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_44.setTransform(-17.7,-29.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B2B2B2").s().p("AgOAXIAOgtIAPAAIgPAtg");
	this.shape_45.setTransform(-31.9,-21.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_46.setTransform(-38.9,-26.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B2B2B2").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFABAGIA+AAQAAgOgJgIQgIgIgOAAQgFAAgGACg");
	this.shape_47.setTransform(-48.7,-26.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B2B2B2").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_48.setTransform(-56.7,-26.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAGgGQAGgHAIgEQAKgDAIAAQALAAAIAEQAJADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAFAEAFADQAGACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_49.setTransform(-66.4,-26.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B2B2B2").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_50.setTransform(-77.8,-29.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_51.setTransform(-89.7,-26.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B2B2B2").s().p("Ag8BHIAAiNIAvAAQANAAANAFQANAEALAJQALAJAGANQAHANAAARQAAASgHANQgGANgLAJQgLAJgNAEQgNAFgNAAgAgtA6IAcAAQAQAAALgFQAMgFAIgIQAIgIADgLQAEgKAAgLQAAgKgEgKQgDgLgIgIQgIgIgMgFQgLgFgQAAIgcAAg");
	this.shape_52.setTransform(-102.3,-29.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_53.setTransform(62.1,20.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAJgDAIAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAEAEAGADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_54.setTransform(52.3,20.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B20512").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAJADIAKAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgKAFIgJAEIgKABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_55.setTransform(40.4,17.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_56.setTransform(29.1,20.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B20512").s().p("AgUBJQgIgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_57.setTransform(17.8,17.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDAAgEQAAgEADgDQADgDACABQADgBADADQAEADAAAEQAAAEgEADQgDACgDABQgCgBgDgCg");
	this.shape_58.setTransform(9.6,18);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B20512").s().p("AgFBLIAAiWIAMAAIAACWg");
	this.shape_59.setTransform(4.8,17.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgDADABQADgBAEADQACADAAAEQAAAEgCADQgEACgDABQgDgBgDgCg");
	this.shape_60.setTransform(0,18);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B20512").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_61.setTransform(-8.2,17.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_62.setTransform(-20.1,20.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_63.setTransform(-29.3,20.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B20512").s().p("AAbAwIAAgzQABgPgGgJQgFgIgPAAIgFABQgEAAgFAEQgFAEgEAHQgEAHgBAMIAAAwIgNAAIAAhIIAAgJIAAgMIANAAIAAAIIAAAIIABAAIAFgIQAEgDAEgCIAJgEIAIgBQASAAAJAJQAJAKAAARIAAA7g");
	this.shape_64.setTransform(-39.2,20.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_65.setTransform(-50.5,20.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B20512").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_66.setTransform(-62.2,23);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_67.setTransform(-72.9,20.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAJgDAIAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAEAEAGADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_68.setTransform(-82.7,20.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B20512").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_69.setTransform(-90.7,20.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B20512").s().p("AgkBHIgGgCIABgMQAEACAHAAQAGAAAEgFQAEgEAEgIIAGgSIgnheIARAAIAcBNIAdhNIAQAAIgtB1QgEALgHAGQgHAHgMAAIgGAAg");
	this.shape_70.setTransform(-105.2,22.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_71.setTransform(52.8,-3.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAHAAQAKAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_72.setTransform(43,-3.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B20512").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_73.setTransform(35,-6.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_74.setTransform(26.7,-3.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_75.setTransform(18.3,-3.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B20512").s().p("AgOAXIAOguIAPAAIgPAug");
	this.shape_76.setTransform(5.8,1.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_77.setTransform(-1.2,-3.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_78.setTransform(-11,-3.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B20512").s().p("AAbAwIAAgzQABgPgGgJQgFgIgPAAIgEABQgFABgFADQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgKIAAgLIANAAIAAAIIAAAIIABAAIAFgIQAEgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_79.setTransform(-22.2,-3.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_80.setTransform(-33.5,-3.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDgBgEQABgEADgDQADgCACAAQADAAADACQADADABAEQgBAEgDADQgDACgDABQgCgBgDgCg");
	this.shape_81.setTransform(-41.8,-5.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B20512").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAJAAAJAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgJAEgJAAQgKAAgKgDg");
	this.shape_82.setTransform(-48.7,-3.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_83.setTransform(-59.4,-3.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B20512").s().p("AgZBDQgLgEgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgIQgEgIAAgLQAAgKAEgJQAEgIAGgHQAGgGAJgFQAJgDAKAAIAIABQAFABAEABIAKAGQAEAEAEAFIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAIgKAEQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAEgDAHQgCAHAAAHQAAAHACAHQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgCQAHgDAFgFQAFgEACgGQADgHAAgIQAAgHgCgHQgDgHgEgEQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_84.setTransform(-70.7,-0.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_85.setTransform(-78.9,-5.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B20512").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_86.setTransform(-83.7,-6.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B20512").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_87.setTransform(-91.9,-6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_88.setTransform(-104.2,-3.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B20512").s().p("AgOAXIAOgtIAPAAIgPAtg");
	this.shape_89.setTransform(61.3,-21.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_90.setTransform(54.3,-26.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_91.setTransform(44.2,-26.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B20512").s().p("AAbBLIAAg0QAAgPgGgIQgFgIgOABIgFABQgFAAgFADQgFAEgEAGQgEAIAAANIAAAvIgNAAIAAiWIANAAIAABJIABAAIAFgHQADgDAEgCIAJgEIAJgCQASAAAIAKQAJAKAAAQIAAA7g");
	this.shape_92.setTransform(32.6,-29.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B20512").s().p("AgMAuQgJgEgHgHQgGgGgDgJQgEgJAAgLQAAgKAEgJQADgJAGgGQAHgHAJgEQAJgDAKAAQALAAAIAEQAJAEAHAIIgLAIQgDgFgGgEQgGgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAGgDQAGgEADgFIALAIQgHAIgJAEQgIAEgLAAQgKAAgJgDg");
	this.shape_93.setTransform(22.7,-26.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_94.setTransform(12,-26.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_95.setTransform(3.9,-26.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_96.setTransform(-5.8,-26.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B20512").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_97.setTransform(-17.7,-29.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B20512").s().p("AgOAXIAOgtIAPAAIgPAtg");
	this.shape_98.setTransform(-31.9,-21.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_99.setTransform(-38.9,-26.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFABAGIA+AAQAAgOgJgIQgIgIgOAAQgFAAgGACg");
	this.shape_100.setTransform(-48.7,-26.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_101.setTransform(-56.7,-26.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAGgGQAGgHAIgEQAKgDAIAAQALAAAIAEQAJADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAFAEAFADQAGACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_102.setTransform(-66.4,-26.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B20512").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_103.setTransform(-77.8,-29.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_104.setTransform(-89.7,-26.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B20512").s().p("Ag8BHIAAiNIAvAAQANAAANAFQANAEALAJQALAJAGANQAHANAAARQAAASgHANQgGANgLAJQgLAJgNAEQgNAFgNAAgAgtA6IAcAAQAQAAALgFQAMgFAIgIQAIgIADgLQAEgKAAgLQAAgKgEgKQgDgLgIgIQgIgIgMgFQgLgFgQAAIgcAAg");
	this.shape_105.setTransform(-102.3,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).wait(2));

	// flash0.ai
	this.instance = new lib.Mapadebits9();
	this.instance.parent = this;
	this.instance.setTransform(-122,-43);

	this.instance_1 = new lib.Mapadebits11();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-122,-43);

	this.instance_2 = new lib.Mapadebits10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-44,246,77.5);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo10();
	this.mc_hand.parent = this;
	this.mc_hand.setTransform(88.2,19.1);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("AgGBLIAAiVIANAAIAACVg");
	this.shape.setTransform(-32.2,39.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_1.setTransform(-40.1,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2B2B2").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgEgDAAgEQAAgFAEgCQADgCACgBQAEABACACQADACAAAFQAAAEgDADQgCADgEgBQgCABgDgDg");
	this.shape_2.setTransform(-47.4,39.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2B2B2").s().p("AgZAwIAAg/IAAgNIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_3.setTransform(-52.3,42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2B2B2").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_4.setTransform(-59.8,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_5.setTransform(-67.4,42.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2B2B2").s().p("AgfAnQgJgKABgRIAAg7IAMAAIAAAzQABAHABAGQABAHADADQADAEAFADQAFACAHAAIAFgBQAEAAAGgEQAEgEAFgHQADgHAAgNIAAgvIAOAAIAABIIAAAJIABALIgOAAIgBgHIAAgHIAAAAQgCADgEAEIgHAFIgJAEQgEABgEAAQgTAAgIgJg");
	this.shape_6.setTransform(-77.2,42.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2B2B2").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgHADgEAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGADAIAAQAIAAAHgDQAHgDAFgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgFgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_7.setTransform(-89.1,39.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2B2B2").s().p("AAbAwIAAgzQABgPgGgIQgFgJgPAAIgEABQgFAAgFAEQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgJIAAgLIANAAIAAAHIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_8.setTransform(-100.6,42);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2B2B2").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDgBgEQABgFADgCQADgCACgBQADABADACQADACABAFQgBAEgDADQgDADgDgBQgCABgDgDg");
	this.shape_9.setTransform(-108.4,39.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B2B2B2").s().p("AgUBJQgJgEgGgGQgGgHgFgJQgDgJAAgLQAAgKADgJQAFgIAGgHQAGgGAJgEQAKgEAKAAIAJABIALADIAJAGQAEADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgEADIgJAFIgLAEIgJABQgKAAgKgEgAgOgGQgHADgEAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_10.setTransform(58.9,15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_11.setTransform(47.6,18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B2B2B2").s().p("AgTBJQgKgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAKgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_12.setTransform(36.3,15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B2B2B2").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgDgDAAgEQAAgEADgDQADgDADABQAEgBADADQACADAAAEQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_13.setTransform(28.1,16.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B2B2B2").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_14.setTransform(23.2,18.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B2B2B2").s().p("AgfAnQgIgKAAgRIAAg7IAMAAIAAAzQAAAHACAGQABAHADADQADAEAFADQAEACAIAAIAFgBQAFgBAFgDQAFgEAEgHQADgIAAgMIAAgvIAOAAIAABIIAAAJIABALIgOAAIgBgHIAAgHIAAAAQgCADgDADIgIAGIgJADQgEACgEAAQgTAAgIgJg");
	this.shape_15.setTransform(13.4,18.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B2B2B2").s().p("AgZBEQgLgFgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgCAEgGQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgHQgEgKAAgJQAAgLAEgJQAEgIAGgHQAGgGAJgEQAJgEAKAAIAIABQAFAAAEADIAKAFQAEADAEAGIABAAIAAgQIANAAIAABcQAAAIgCAJQgCAIgGAHQgFAHgKAGQgKAEgPAAQgNAAgLgEgAgMg4QgGADgFAFQgFAFgDAGQgCAGAAAIQAAAIACAGQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgDACgHQADgHAAgIQAAgIgCgGQgDgGgEgFQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_16.setTransform(1.5,20.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B2B2B2").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_17.setTransform(-9.8,18.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_18.setTransform(-19.6,18.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B2B2B2").s().p("AgkBHIgGgCIABgMQAEACAGAAQAHAAAEgFQAEgEADgIIAHgSIgmheIAQAAIAcBNIAdhNIAQAAIgtB1QgFALgGAGQgHAHgMAAIgGAAg");
	this.shape_19.setTransform(-34.2,21);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_20.setTransform(-50.2,18.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B2B2B2").s().p("AAcAwIAAgzQgBgQgFgIQgFgIgPAAIgFABQgEAAgGAEQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgJIgBgMIAOAAIABAIIAAAHIAAAAIAFgHQAEgDAEgCIAJgEIAIgBQATAAAIAJQAIAKAAARIAAA7g");
	this.shape_21.setTransform(-61.4,18.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B2B2B2").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_22.setTransform(-72.4,18.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B2B2B2").s().p("AgGBFIAAhcIAMAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgDADABQADgBADADQAEADAAAEQAAAEgEADQgDACgDAAQgDAAgDgCg");
	this.shape_23.setTransform(-80.3,16.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B2B2B2").s().p("AgZBEQgLgFgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgCAEgGQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgHQgEgKAAgJQAAgLAEgJQAEgIAGgHQAGgGAJgEQAJgEAKAAIAIABQAFAAAEADIAKAFQAEADAEAGIABAAIAAgQIANAAIAABcQAAAIgCAJQgCAIgGAHQgFAHgKAGQgKAEgPAAQgNAAgLgEgAgMg4QgGADgFAFQgFAFgDAGQgCAGAAAIQAAAIACAGQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgDACgHQADgHAAgIQAAgIgCgGQgDgGgEgFQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_24.setTransform(-89.1,20.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B2B2B2").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgDADABQAEgBADADQADADAAAEQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_25.setTransform(-97.3,16.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B2B2B2").s().p("AAbBLIAAgzQAAgQgFgIQgGgHgOgBIgFABQgEABgGAEQgFACgEAIQgEAHAAAMIAAAwIgNAAIAAiVIANAAIAABIIAAAAIAGgHQAEgEAEgCIAJgDIAIgBQASAAAJAJQAIAKAAAQIAAA7g");
	this.shape_26.setTransform(-105.4,15.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAJAEQAIADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_27.setTransform(20.5,-4.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B2B2B2").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgHADgEAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGADAIAAQAIAAAHgDQAHgDAFgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgFgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_28.setTransform(8.5,-7.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B2B2B2").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_29.setTransform(-8.7,-4.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B2B2B2").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_30.setTransform(-18,-6.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B2B2B2").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEAAgGAEQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgJIgBgMIAOAAIABAIIAAAHIAAAAIAFgHQAEgDAEgCIAJgEIAIgBQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_31.setTransform(-27,-5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B2B2B2").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_32.setTransform(-37.9,-4.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B2B2B2").s().p("AA5AwIAAg1QAAgOgFgJQgFgHgOAAQgHAAgFADQgFADgDAFQgDAEgCAHQgBAFAAAHIAAAxIgMAAIAAg1QAAgOgFgJQgFgHgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAHAAAMIAAAwIgNAAIAAhIIgBgKIAAgLIAOAAIAAAPIAAAAQAFgJAIgEQAJgEAIAAIAIABQAFABAEABIAHAGQADAEACAGQAEgIAJgGQAJgFAJAAQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_33.setTransform(-52.2,-5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_34.setTransform(-66,-4.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B2B2B2").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_35.setTransform(-73.3,-7.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B2B2B2").s().p("AgZBEQgLgFgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgHQgEgKAAgKQAAgKAEgJQAEgIAGgHQAGgGAJgFQAJgDAKAAIAIABQAFABAEABIAKAGQAEADAEAGIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAHgKAGQgKAEgPAAQgNAAgLgEgAgMg4QgGADgFAFQgFAEgDAHQgCAGAAAIQAAAHACAHQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgEACgGQADgHAAgIQAAgIgCgGQgDgHgEgEQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_36.setTransform(-82.1,-2.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAJgDAIAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAEAEAGADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_37.setTransform(-93.5,-4.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B2B2B2").s().p("AAeBHIgmhCIgYAAIAABCIgPAAIAAiNIAsAAQAVAAAMAKQANAJAAATQAAAPgKAKQgIAJgSACIAoBDgAgggHIAaAAQAJAAAGgCQAHgCAEgEQADgDADgEQACgFAAgFQAAgFgCgFQgDgEgDgDQgEgEgHgCQgGgCgJAAIgaAAg");
	this.shape_38.setTransform(-104.2,-7.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B2B2B2").s().p("AgkBHIgGgCIABgMQAFACAFAAQAHAAAEgFQAEgEADgIIAHgSIgmheIAQAAIAdBNIAchNIARAAIguB1QgFALgHAGQgFAHgNAAIgGAAg");
	this.shape_39.setTransform(-8.7,-26);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B2B2B2").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_40.setTransform(-25,-28.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B2B2B2").s().p("AgTBbIACgLIAAAAIAEABIADAAQAFABADgCQACgCABgDIACgGIABgHIAAhtIANAAIAABvIAAAHIgDAKQgCAFgGADQgFAEgKAAQgFAAgFgCgAAEhMQgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_41.setTransform(-34.3,-28.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_42.setTransform(-41.2,-28.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B2B2B2").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_43.setTransform(-51.9,-31.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_44.setTransform(-63.8,-28.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B2B2B2").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_45.setTransform(-71.2,-28.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B2B2B2").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_46.setTransform(-78.7,-29.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B2B2B2").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_47.setTransform(-93.1,-28.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B2B2B2").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_48.setTransform(-105,-31.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B2B2B2").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_49.setTransform(60,-51.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B2B2B2").s().p("AAbAwIAAgzQABgPgGgJQgFgIgPAAIgEABQgFABgFADQgGAEgDAHQgFAIAAALIAAAwIgMAAIAAhIIgBgKIAAgLIANAAIAAAIIAAAIIABAAIAFgIQAEgDAEgCIAJgEIAJgBQASAAAIAKQAJAJAAASIAAA6g");
	this.shape_50.setTransform(48.4,-52);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B2B2B2").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_51.setTransform(40.5,-52);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_52.setTransform(30.8,-51.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B2B2B2").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_53.setTransform(21.9,-53.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B2B2B2").s().p("AAcAwIAAgzQgBgPgFgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAGgIQADgDAEgCIAJgEIAIgBQATAAAIAKQAJAJgBASIAAA6g");
	this.shape_54.setTransform(12.9,-52);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B2B2B2").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_55.setTransform(5.1,-54.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B2B2B2").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_56.setTransform(-8.7,-51.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B2B2B2").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_57.setTransform(-18,-53.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B2B2B2").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_58.setTransform(-27,-52);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B2B2B2").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_59.setTransform(-37.9,-51.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B2B2B2").s().p("AA5AwIAAg2QAAgNgFgJQgFgHgOAAQgHAAgFADQgFADgDAEQgDAGgCAGQgBAGAAAGIAAAxIgMAAIAAg2QAAgNgFgJQgFgHgOAAIgFABQgFABgEADQgFAEgDAHQgEAIAAALIAAAwIgNAAIAAhIIgBgKIAAgLIAOAAIAAAPIAAAAQAFgJAIgEQAJgEAIAAIAIABQAFAAAEACIAHAHQADAEACAFQAEgJAJgFQAJgFAJAAQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_60.setTransform(-52.2,-52);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_61.setTransform(-66,-51.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B2B2B2").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_62.setTransform(-73.3,-54.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B2B2B2").s().p("AgZBDQgLgEgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgIQgEgIAAgLQAAgKAEgJQAEgJAGgGQAGgGAJgFQAJgDAKAAIAIABQAFAAAEACIAKAGQAEAEAEAFIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAIgKAEQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAFgDAGQgCAHAAAHQAAAHACAHQADAHAFADQAFAFAGADQAGADAGAAQAIAAAGgCQAHgDAFgFQAFgEACgGQADgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_63.setTransform(-82.1,-49.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B2B2B2").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAJgDAIAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAEAEAGADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_64.setTransform(-93.5,-51.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B2B2B2").s().p("AAeBHIgmhCIgYAAIAABCIgPAAIAAiNIAsAAQAVAAAMAKQANAJAAATQAAAPgKAKQgIAJgSACIAoBDgAgggHIAaAAQAJAAAGgCQAHgCAEgEQADgDADgEQACgFAAgFQAAgFgCgFQgDgEgDgDQgEgEgHgCQgGgCgJAAIgaAAg");
	this.shape_65.setTransform(-104.2,-54.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B20512").s().p("AgGBLIAAiVIANAAIAACVg");
	this.shape_66.setTransform(-32.2,39.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_67.setTransform(-40.1,42.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgEgDAAgEQAAgFAEgCQADgCACgBQAEABACACQADACAAAFQAAAEgDADQgCADgEgBQgCABgDgDg");
	this.shape_68.setTransform(-47.4,39.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B20512").s().p("AgZAwIAAg/IAAgNIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_69.setTransform(-52.3,42);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_70.setTransform(-59.8,40.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_71.setTransform(-67.4,42.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B20512").s().p("AgfAnQgJgKABgRIAAg7IAMAAIAAAzQABAHABAGQABAHADADQADAEAFADQAFACAHAAIAFgBQAEAAAGgEQAEgEAFgHQADgHAAgNIAAgvIAOAAIAABIIAAAJIABALIgOAAIgBgHIAAgHIAAAAQgCADgEAEIgHAFIgJAEQgEABgEAAQgTAAgIgJg");
	this.shape_72.setTransform(-77.2,42.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B20512").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgHADgEAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGADAIAAQAIAAAHgDQAHgDAFgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgFgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_73.setTransform(-89.1,39.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B20512").s().p("AAbAwIAAgzQABgPgGgIQgFgJgPAAIgEABQgFAAgFAEQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgJIAAgLIANAAIAAAHIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_74.setTransform(-100.6,42);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDgBgEQABgFADgCQADgCACgBQADABADACQADACABAFQgBAEgDADQgDADgDgBQgCABgDgDg");
	this.shape_75.setTransform(-108.4,39.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B20512").s().p("AgUBJQgJgEgGgGQgGgHgFgJQgDgJAAgLQAAgKADgJQAFgIAGgHQAGgGAJgEQAKgEAKAAIAJABIALADIAJAGQAEADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgEADIgJAFIgLAEIgJABQgKAAgKgEgAgOgGQgHADgEAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_76.setTransform(58.9,15.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_77.setTransform(47.6,18.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B20512").s().p("AgTBJQgKgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAKgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_78.setTransform(36.3,15.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgDgDAAgEQAAgEADgDQADgDADABQAEgBADADQACADAAAEQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_79.setTransform(28.1,16.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B20512").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_80.setTransform(23.2,18.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B20512").s().p("AgfAnQgIgKAAgRIAAg7IAMAAIAAAzQAAAHACAGQABAHADADQADAEAFADQAEACAIAAIAFgBQAFgBAFgDQAFgEAEgHQADgIAAgMIAAgvIAOAAIAABIIAAAJIABALIgOAAIgBgHIAAgHIAAAAQgCADgDADIgIAGIgJADQgEACgEAAQgTAAgIgJg");
	this.shape_81.setTransform(13.4,18.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B20512").s().p("AgZBEQgLgFgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgCAEgGQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgHQgEgKAAgJQAAgLAEgJQAEgIAGgHQAGgGAJgEQAJgEAKAAIAIABQAFAAAEADIAKAFQAEADAEAGIABAAIAAgQIANAAIAABcQAAAIgCAJQgCAIgGAHQgFAHgKAGQgKAEgPAAQgNAAgLgEgAgMg4QgGADgFAFQgFAFgDAGQgCAGAAAIQAAAIACAGQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgDACgHQADgHAAgIQAAgIgCgGQgDgGgEgFQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_82.setTransform(1.5,20.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_83.setTransform(-9.8,18.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_84.setTransform(-19.6,18.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B20512").s().p("AgkBHIgGgCIABgMQAEACAGAAQAHAAAEgFQAEgEADgIIAHgSIgmheIAQAAIAcBNIAdhNIAQAAIgtB1QgFALgGAGQgHAHgMAAIgGAAg");
	this.shape_85.setTransform(-34.2,21);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_86.setTransform(-50.2,18.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B20512").s().p("AAcAwIAAgzQgBgQgFgIQgFgIgPAAIgFABQgEAAgGAEQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgJIgBgMIAOAAIABAIIAAAHIAAAAIAFgHQAEgDAEgCIAJgEIAIgBQATAAAIAJQAIAKAAARIAAA7g");
	this.shape_87.setTransform(-61.4,18.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_88.setTransform(-72.4,18.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B20512").s().p("AgGBFIAAhcIAMAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgDADABQADgBADADQAEADAAAEQAAAEgEADQgDACgDAAQgDAAgDgCg");
	this.shape_89.setTransform(-80.3,16.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B20512").s().p("AgZBEQgLgFgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgCAEgGQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgHQgEgKAAgJQAAgLAEgJQAEgIAGgHQAGgGAJgEQAJgEAKAAIAIABQAFAAAEADIAKAFQAEADAEAGIABAAIAAgQIANAAIAABcQAAAIgCAJQgCAIgGAHQgFAHgKAGQgKAEgPAAQgNAAgLgEgAgMg4QgGADgFAFQgFAFgDAGQgCAGAAAIQAAAIACAGQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgDACgHQADgHAAgIQAAgIgCgGQgDgGgEgFQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_90.setTransform(-89.1,20.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgDADABQAEgBADADQADADAAAEQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_91.setTransform(-97.3,16.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B20512").s().p("AAbBLIAAgzQAAgQgFgIQgGgHgOgBIgFABQgEABgGAEQgFACgEAIQgEAHAAAMIAAAwIgNAAIAAiVIANAAIAABIIAAAAIAGgHQAEgEAEgCIAJgDIAIgBQASAAAJAJQAIAKAAAQIAAA7g");
	this.shape_92.setTransform(-105.4,15.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAJAEQAIADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_93.setTransform(20.5,-4.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B20512").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgHADgEAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGADAIAAQAIAAAHgDQAHgDAFgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgFgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_94.setTransform(8.5,-7.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_95.setTransform(-8.7,-4.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_96.setTransform(-18,-6.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B20512").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEAAgGAEQgEAEgFAHQgDAHAAAMIAAAwIgOAAIAAhIIAAgJIgBgMIAOAAIABAIIAAAHIAAAAIAFgHQAEgDAEgCIAJgEIAIgBQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_97.setTransform(-27,-5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_98.setTransform(-37.9,-4.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B20512").s().p("AA5AwIAAg1QAAgOgFgJQgFgHgOAAQgHAAgFADQgFADgDAFQgDAEgCAHQgBAFAAAHIAAAxIgMAAIAAg1QAAgOgFgJQgFgHgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAHAAAMIAAAwIgNAAIAAhIIgBgKIAAgLIAOAAIAAAPIAAAAQAFgJAIgEQAJgEAIAAIAIABQAFABAEABIAHAGQADAEACAGQAEgIAJgGQAJgFAJAAQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_99.setTransform(-52.2,-5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_100.setTransform(-66,-4.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B20512").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_101.setTransform(-73.3,-7.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B20512").s().p("AgZBEQgLgFgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgHQgEgKAAgKQAAgKAEgJQAEgIAGgHQAGgGAJgFQAJgDAKAAIAIABQAFABAEABIAKAGQAEADAEAGIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAHgKAGQgKAEgPAAQgNAAgLgEgAgMg4QgGADgFAFQgFAEgDAHQgCAGAAAIQAAAHACAHQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgEACgGQADgHAAgIQAAgIgCgGQgDgHgEgEQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_102.setTransform(-82.1,-2.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAJgDAIAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAEAEAGADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_103.setTransform(-93.5,-4.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B20512").s().p("AAeBHIgmhCIgYAAIAABCIgPAAIAAiNIAsAAQAVAAAMAKQANAJAAATQAAAPgKAKQgIAJgSACIAoBDgAgggHIAaAAQAJAAAGgCQAHgCAEgEQADgDADgEQACgFAAgFQAAgFgCgFQgDgEgDgDQgEgEgHgCQgGgCgJAAIgaAAg");
	this.shape_104.setTransform(-104.2,-7.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B20512").s().p("AgkBHIgGgCIABgMQAFACAFAAQAHAAAEgFQAEgEADgIIAHgSIgmheIAQAAIAdBNIAchNIARAAIguB1QgFALgHAGQgFAHgNAAIgGAAg");
	this.shape_105.setTransform(-8.7,-26);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_106.setTransform(-25,-28.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#B20512").s().p("AgTBbIACgLIAAAAIAEABIADAAQAFABADgCQACgCABgDIACgGIABgHIAAhtIANAAIAABvIAAAHIgDAKQgCAFgGADQgFAEgKAAQgFAAgFgCgAAEhMQgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_107.setTransform(-34.3,-28.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_108.setTransform(-41.2,-28.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B20512").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_109.setTransform(-51.9,-31.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_110.setTransform(-63.8,-28.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_111.setTransform(-71.2,-28.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_112.setTransform(-78.7,-29.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_113.setTransform(-93.1,-28.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B20512").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_114.setTransform(-105,-31.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_115.setTransform(60,-51.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B20512").s().p("AAbAwIAAgzQABgPgGgJQgFgIgPAAIgEABQgFABgFADQgGAEgDAHQgFAIAAALIAAAwIgMAAIAAhIIgBgKIAAgLIANAAIAAAIIAAAIIABAAIAFgIQAEgDAEgCIAJgEIAJgBQASAAAIAKQAJAJAAASIAAA6g");
	this.shape_116.setTransform(48.4,-52);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_117.setTransform(40.5,-52);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_118.setTransform(30.8,-51.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_119.setTransform(21.9,-53.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B20512").s().p("AAcAwIAAgzQgBgPgFgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAGgIQADgDAEgCIAJgEIAIgBQATAAAIAKQAJAJgBASIAAA6g");
	this.shape_120.setTransform(12.9,-52);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_121.setTransform(5.1,-54.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_122.setTransform(-8.7,-51.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_123.setTransform(-18,-53.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B20512").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_124.setTransform(-27,-52);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_125.setTransform(-37.9,-51.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B20512").s().p("AA5AwIAAg2QAAgNgFgJQgFgHgOAAQgHAAgFADQgFADgDAEQgDAGgCAGQgBAGAAAGIAAAxIgMAAIAAg2QAAgNgFgJQgFgHgOAAIgFABQgFABgEADQgFAEgDAHQgEAIAAALIAAAwIgNAAIAAhIIgBgKIAAgLIAOAAIAAAPIAAAAQAFgJAIgEQAJgEAIAAIAIABQAFAAAEACIAHAHQADAEACAFQAEgJAJgFQAJgFAJAAQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_126.setTransform(-52.2,-52);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_127.setTransform(-66,-51.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B20512").s().p("AgFBLIAAiWIALAAIAACWg");
	this.shape_128.setTransform(-73.3,-54.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B20512").s().p("AgZBDQgLgEgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgIQgEgIAAgLQAAgKAEgJQAEgJAGgGQAGgGAJgFQAJgDAKAAIAIABQAFAAAEACIAKAGQAEAEAEAFIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAIgKAEQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAFgDAGQgCAHAAAHQAAAHACAHQADAHAFADQAFAFAGADQAGADAGAAQAIAAAGgCQAHgDAFgFQAFgEACgGQADgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_129.setTransform(-82.1,-49.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAJgDAIAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAEAEAGADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_130.setTransform(-93.5,-51.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#B20512").s().p("AAeBHIgmhCIgYAAIAABCIgPAAIAAiNIAsAAQAVAAAMAKQANAJAAATQAAAPgKAKQgIAJgSACIAoBDgAgggHIAaAAQAJAAAGgCQAHgCAEgEQADgDADgEQACgFAAgFQAAgFgCgFQgDgEgDgDQgEgEgHgCQgGgCgJAAIgaAAg");
	this.shape_131.setTransform(-104.2,-54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).wait(2));

	// flash0.ai
	this.instance = new lib.Mapadebits6();
	this.instance.parent = this;
	this.instance.setTransform(-123,-76);

	this.instance_1 = new lib.Mapadebits8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123,-79);

	this.instance_2 = new lib.Mapadebits7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123,-76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-76,246,138);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo10();
	this.mc_hand.parent = this;
	this.mc_hand.setTransform(63,21);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape.setTransform(-51.9,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2B2B2").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAJAAAJAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgJAEgJAAQgKAAgKgDg");
	this.shape_1.setTransform(-61.3,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2B2B2").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgFACgCQADgCADgBQADABAEACQACACAAAFQAAAEgCADQgEADgDgBQgDABgDgDg");
	this.shape_2.setTransform(-68.9,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2B2B2").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_3.setTransform(-74.6,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2B2B2").s().p("AgNBHIAAhdIANAAIAABdgAgSgpIATgdIASAAIgZAdg");
	this.shape_4.setTransform(-79.6,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2B2B2").s().p("AgFBLIAAiVIALAAIAACVg");
	this.shape_5.setTransform(-85.1,-1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2B2B2").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_6.setTransform(-93.4,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2B2B2").s().p("AgrBHIAAiNIAqAAQAUAAAMAKQANAJAAATQAAATgNAJQgMAJgUAAIgbAAIAABCgAgcgHIAXAAQAIAAAHgCQAHgCAEgEQAEgDACgEQABgFAAgFQAAgFgBgFQgCgEgEgDQgEgEgHgCQgHgCgIAAIgXAAg");
	this.shape_7.setTransform(-104.5,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_8.setTransform(-51.9,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20512").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAJAAAJAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgJAEgJAAQgKAAgKgDg");
	this.shape_9.setTransform(-61.3,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgFACgCQADgCADgBQADABAEACQACACAAAFQAAAEgCADQgEADgDgBQgDABgDgDg");
	this.shape_10.setTransform(-68.9,-0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_11.setTransform(-74.6,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20512").s().p("AgNBHIAAhdIANAAIAABdgAgSgpIATgdIASAAIgZAdg");
	this.shape_12.setTransform(-79.6,-0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20512").s().p("AgFBLIAAiVIALAAIAACVg");
	this.shape_13.setTransform(-85.1,-1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_14.setTransform(-93.4,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20512").s().p("AgrBHIAAiNIAqAAQAUAAAMAKQANAJAAATQAAATgNAJQgMAJgUAAIgbAAIAABCgAgcgHIAXAAQAIAAAHgCQAHgCAEgEQAEgDACgEQABgFAAgFQAAgFgBgFQgCgEgEgDQgEgEgHgCQgHgCgIAAIgXAAg");
	this.shape_15.setTransform(-104.5,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(2));

	// Estados
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-123,-27);

	this.instance_1 = new lib.Mapadebits5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123,-27);

	this.instance_2 = new lib.Mapadebits4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-27,246,53);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo10();
	this.mc_hand.parent = this;
	this.mc_hand.setTransform(74,13.9);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7B7B7").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape.setTransform(47.1,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7B7B7").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_1.setTransform(38.2,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7B7B7").s().p("AAcAwIAAgzQgBgQgFgHQgGgJgOAAIgEABQgFABgGADQgEAEgFAHQgEAIAAALIAAAwIgMAAIAAhIIgBgJIgBgLIAOAAIAAAHIAAAHIABAAIAGgGQADgEAEgCIAJgDIAJgCQARAAAJAJQAJAKgBARIAAA7g");
	this.shape_2.setTransform(29.2,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B7B7B7").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_3.setTransform(18.3,13.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7B7B7").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_4.setTransform(10.1,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B7B7B7").s().p("AgZAwIAAg/IAAgNIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_5.setTransform(4.3,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7B7B7").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_6.setTransform(-5.8,13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B7B7B7").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_7.setTransform(-17.5,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B7B7B7").s().p("AA5AwIAAg2QAAgOgFgHQgFgIgOAAQgHAAgFADQgFADgDAFQgDAFgCAFQgBAHAAAGIAAAxIgMAAIAAg2QAAgOgFgHQgFgIgOAAIgFABQgFABgEADQgFAEgDAHQgEAIAAALIAAAwIgNAAIAAhIIgBgKIAAgKIAOAAIAAANIAAAAQAFgHAIgFQAJgEAIAAIAIABQAFABAEACIAHAFQADAFACAGQAEgJAJgGQAJgFAJAAQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_8.setTransform(-32.6,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B7B7B7").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgCgDAAgEQAAgFACgCQADgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEgBQgDABgDgDg");
	this.shape_9.setTransform(-43.3,11.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B7B7B7").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCQAGgBAGAAQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_10.setTransform(-55.5,13.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B7B7B7").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFABAGIA+AAQAAgOgJgIQgIgIgOAAQgFAAgGACg");
	this.shape_11.setTransform(-65.3,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B7B7B7").s().p("AgQBEQgJgEgGgGQgHgHgDgIQgEgKAAgLQAAgKAEgJQADgIAHgHQAGgGAIgEQAJgDAJAAQALAAAJADQAHAEAGAGQAGAHADAHQADAIAAAKIAAAHIhNAAQAAAGADAGQADAHAFAEQAFAFAFACQAHADAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAEQgKAFgLAAQgKAAgJgEgAgKgLQgGACgFAEQgEAFgDAEQgDAGABAGIA+AAQAAgOgJgHQgIgJgOAAQgFABgGACgAgLgrIATgcIASAAIgaAcg");
	this.shape_12.setTransform(-82,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B7B7B7").s().p("AgfAnQgIgKgBgRIAAg7IANAAIAAAzQAAAHACAGQABAGADAFQADAEAFACQAEACAIAAIAFgBQAFAAAEgEQAFgEAEgHQAEgHAAgNIAAgvIAOAAIAABIIAAAJIAAAMIgNAAIgBgIIAAgHIAAAAQgCADgDAEIgIAFIgJAEQgEABgEAAQgSAAgJgJg");
	this.shape_13.setTransform(-93.1,13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B7B7B7").s().p("AAkBNIAAhJIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEQgJgEgGgGQgHgHgEgIQgDgJAAgLQAAgKADgJQAEgJAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAgPIAOAAIAACWgAgOg9QgGADgFAFQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAEAGADQAHADAHAAQAIAAAHgDQAHgDAEgEQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgFgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_14.setTransform(-105,16.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B7B7B7").s().p("AgZAwIAAg/IAAgNIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_15.setTransform(41.4,-10.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B7B7B7").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_16.setTransform(31.3,-10.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B7B7B7").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_17.setTransform(19.6,-7.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B7B7B7").s().p("AgkBHIgGgCIABgMQAEACAHAAQAGAAAEgFQAEgEAEgIIAGgSIgnheIARAAIAcBNIAdhNIAQAAIgtB1QgFALgGAGQgHAHgMAAIgGAAg");
	this.shape_18.setTransform(2.9,-7.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B7B7B7").s().p("AgGBHIAAiAIgvAAIAAgNIBsAAIAAANIgwAAIAACAg");
	this.shape_19.setTransform(-13.3,-12.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B7B7B7").s().p("AgZBFQgMgEgIgMIAOgJQAEAIAIAEQAIAFALAAIAKgBQAGgCAEgEQAEgDADgFQADgEAAgHQAAgHgDgFQgDgFgGgDIgLgGIgMgEIgOgFQgGgCgFgEQgFgEgDgHQgDgGgBgKQABgKAEgIQADgIAHgFQAGgFAJgCQAHgCAJAAQALAAAKADQAKAEAIAKIgMAKQgKgOgRAAQgFAAgGABQgFACgFADQgEADgCAFQgDAFAAAGQAAAKAGAFQAFAGAIADIAQAGQAKADAIADQAIAFAGAHQAEAIAAAMQAAAKgDAIQgFAHgGAGQgHAFgIADQgJACgHAAQgNAAgMgFg");
	this.shape_20.setTransform(-24.6,-12.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B7B7B7").s().p("AgZBFQgMgEgHgMIAMgJQAFAIAIAEQAJAFAKAAIAKgBQAGgCAEgEQAEgDADgFQADgEAAgHQAAgHgDgFQgDgFgFgDIgMgGIgMgEIgNgFQgHgCgFgEQgGgEgDgHQgDgGAAgKQAAgKAFgIQAEgIAGgFQAHgFAHgCQAJgCAHAAQAMAAAKADQAKAEAJAKIgOAKQgIgOgTAAQgFAAgFABQgFACgEADQgEADgDAFQgDAFAAAGQAAAKAFAFQAGAGAIADIARAGQAJADAIADQAIAFAFAHQAGAIAAAMQAAAKgFAIQgDAHgIAGQgGAFgIADQgJACgHAAQgNAAgMgFg");
	this.shape_21.setTransform(-35.7,-12.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B7B7B7").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_22.setTransform(-51,-10.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B7B7B7").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFABAGIA+AAQAAgOgJgIQgIgIgOAAQgFAAgGACg");
	this.shape_23.setTransform(-60.8,-10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B7B7B7").s().p("AgQBEQgJgDgGgHQgHgHgDgJQgEgIAAgMQAAgKAEgJQADgIAHgHQAGgGAIgEQAJgEAJABQALAAAJADQAHAEAGAGQAGAHADAHQADAIAAAKIAAAHIhNAAQAAAHADAFQADAHAFAEQAFAFAFACQAHADAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAEQgKAFgLAAQgKAAgJgEgAgKgLQgGADgFADQgEAFgDAEQgDAGABAFIA+AAQAAgNgJgHQgIgJgOAAQgFABgGACgAgLgqIATgdIASAAIgaAdg");
	this.shape_24.setTransform(-77.5,-12.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B7B7B7").s().p("AgfAnQgIgKgBgRIAAg7IANAAIAAAzQAAAHACAGQABAHADADQADAEAFADQAEACAIAAIAFgBQAFAAAEgEQAFgEAEgHQAEgHAAgNIAAgvIAOAAIAABIIAAAJIAAALIgNAAIgBgHIAAgHIAAAAQgCADgDAEIgIAFIgJAEQgEABgEAAQgSAAgJgJg");
	this.shape_25.setTransform(-88.6,-10);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B7B7B7").s().p("AgEBIQgPABgNgGQgNgGgKgJQgJgKgGgNQgFgOAAgPQAAgPAFgOQAGgMAJgKQAKgKANgFQANgFAPgBQAPABANAFQANAFAJAKQAKAKAFANQAGANAAAPQAAATgIAPQgIAQgRAJIAAAAIAqAAIAAANgAgbg2QgLAFgHAJQgHAHgEAMQgEAKAAALQAAAMAEALQAEAKAHAIQAHAJALAEQAKAGANgBQAMABALgGQAKgEAHgJQAIgIADgKQAEgLAAgMQAAgLgEgKQgDgMgIgHQgHgJgKgFQgLgEgMAAQgNAAgKAEg");
	this.shape_26.setTransform(-102.3,-12.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_27.setTransform(47.1,13.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_28.setTransform(38.2,12.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20512").s().p("AAcAwIAAgzQgBgQgFgHQgGgJgOAAIgEABQgFABgGADQgEAEgFAHQgEAIAAALIAAAwIgMAAIAAhIIgBgJIgBgLIAOAAIAAAHIAAAHIABAAIAGgGQADgEAEgCIAJgDIAJgCQARAAAJAJQAJAKgBARIAAA7g");
	this.shape_29.setTransform(29.2,13.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_30.setTransform(18.3,13.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_31.setTransform(10.1,12.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20512").s().p("AgZAwIAAg/IAAgNIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_32.setTransform(4.3,13.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_33.setTransform(-5.8,13.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20512").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_34.setTransform(-17.5,16.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B20512").s().p("AA5AwIAAg2QAAgOgFgHQgFgIgOAAQgHAAgFADQgFADgDAFQgDAFgCAFQgBAHAAAGIAAAxIgMAAIAAg2QAAgOgFgHQgFgIgOAAIgFABQgFABgEADQgFAEgDAHQgEAIAAALIAAAwIgNAAIAAhIIgBgKIAAgKIAOAAIAAANIAAAAQAFgHAIgFQAJgEAIAAIAIABQAFABAEACIAHAFQADAFACAGQAEgJAJgGQAJgFAJAAQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_35.setTransform(-32.6,13.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B20512").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgCgDAAgEQAAgFACgCQADgCADgBQAEABADACQADACAAAFQAAAEgDADQgDADgEgBQgDABgDgDg");
	this.shape_36.setTransform(-43.3,11.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCQAGgBAGAAQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_37.setTransform(-55.5,13.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFABAGIA+AAQAAgOgJgIQgIgIgOAAQgFAAgGACg");
	this.shape_38.setTransform(-65.3,13.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B20512").s().p("AgQBEQgJgEgGgGQgHgHgDgIQgEgKAAgLQAAgKAEgJQADgIAHgHQAGgGAIgEQAJgDAJAAQALAAAJADQAHAEAGAGQAGAHADAHQADAIAAAKIAAAHIhNAAQAAAGADAGQADAHAFAEQAFAFAFACQAHADAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAEQgKAFgLAAQgKAAgJgEgAgKgLQgGACgFAEQgEAFgDAEQgDAGABAGIA+AAQAAgOgJgHQgIgJgOAAQgFABgGACgAgLgrIATgcIASAAIgaAcg");
	this.shape_39.setTransform(-82,11.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B20512").s().p("AgfAnQgIgKgBgRIAAg7IANAAIAAAzQAAAHACAGQABAGADAFQADAEAFACQAEACAIAAIAFgBQAFAAAEgEQAFgEAEgHQAEgHAAgNIAAgvIAOAAIAABIIAAAJIAAAMIgNAAIgBgIIAAgHIAAAAQgCADgDAEIgIAFIgJAEQgEABgEAAQgSAAgJgJg");
	this.shape_40.setTransform(-93.1,13.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B20512").s().p("AAkBNIAAhJIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEQgJgEgGgGQgHgHgEgIQgDgJAAgLQAAgKADgJQAEgJAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAgPIAOAAIAACWgAgOg9QgGADgFAFQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAEAGADQAHADAHAAQAIAAAHgDQAHgDAEgEQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgFgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_41.setTransform(-105,16.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B20512").s().p("AgZAwIAAg/IAAgNIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_42.setTransform(41.4,-10.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_43.setTransform(31.3,-10.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B20512").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_44.setTransform(19.6,-7.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B20512").s().p("AgkBHIgGgCIABgMQAEACAHAAQAGAAAEgFQAEgEAEgIIAGgSIgnheIARAAIAcBNIAdhNIAQAAIgtB1QgFALgGAGQgHAHgMAAIgGAAg");
	this.shape_45.setTransform(2.9,-7.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B20512").s().p("AgGBHIAAiAIgvAAIAAgNIBsAAIAAANIgwAAIAACAg");
	this.shape_46.setTransform(-13.3,-12.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B20512").s().p("AgZBFQgMgEgIgMIAOgJQAEAIAIAEQAIAFALAAIAKgBQAGgCAEgEQAEgDADgFQADgEAAgHQAAgHgDgFQgDgFgGgDIgLgGIgMgEIgOgFQgGgCgFgEQgFgEgDgHQgDgGgBgKQABgKAEgIQADgIAHgFQAGgFAJgCQAHgCAJAAQALAAAKADQAKAEAIAKIgMAKQgKgOgRAAQgFAAgGABQgFACgFADQgEADgCAFQgDAFAAAGQAAAKAGAFQAFAGAIADIAQAGQAKADAIADQAIAFAGAHQAEAIAAAMQAAAKgDAIQgFAHgGAGQgHAFgIADQgJACgHAAQgNAAgMgFg");
	this.shape_47.setTransform(-24.6,-12.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B20512").s().p("AgZBFQgMgEgHgMIAMgJQAFAIAIAEQAJAFAKAAIAKgBQAGgCAEgEQAEgDADgFQADgEAAgHQAAgHgDgFQgDgFgFgDIgMgGIgMgEIgNgFQgHgCgFgEQgGgEgDgHQgDgGAAgKQAAgKAFgIQAEgIAGgFQAHgFAHgCQAJgCAHAAQAMAAAKADQAKAEAJAKIgOAKQgIgOgTAAQgFAAgFABQgFACgEADQgEADgDAFQgDAFAAAGQAAAKAFAFQAGAGAIADIARAGQAJADAIADQAIAFAFAHQAGAIAAAMQAAAKgFAIQgDAHgIAGQgGAFgIADQgJACgHAAQgNAAgMgFg");
	this.shape_48.setTransform(-35.7,-12.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_49.setTransform(-51,-10.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFABAGIA+AAQAAgOgJgIQgIgIgOAAQgFAAgGACg");
	this.shape_50.setTransform(-60.8,-10.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B20512").s().p("AgQBEQgJgDgGgHQgHgHgDgJQgEgIAAgMQAAgKAEgJQADgIAHgHQAGgGAIgEQAJgEAJABQALAAAJADQAHAEAGAGQAGAHADAHQADAIAAAKIAAAHIhNAAQAAAHADAFQADAHAFAEQAFAFAFACQAHADAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAEQgKAFgLAAQgKAAgJgEgAgKgLQgGADgFADQgEAFgDAEQgDAGABAFIA+AAQAAgNgJgHQgIgJgOAAQgFABgGACgAgLgqIATgdIASAAIgaAdg");
	this.shape_51.setTransform(-77.5,-12.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B20512").s().p("AgfAnQgIgKgBgRIAAg7IANAAIAAAzQAAAHACAGQABAHADADQADAEAFADQAEACAIAAIAFgBQAFAAAEgEQAFgEAEgHQAEgHAAgNIAAgvIAOAAIAABIIAAAJIAAALIgNAAIgBgHIAAgHIAAAAQgCADgDAEIgIAFIgJAEQgEABgEAAQgSAAgJgJg");
	this.shape_52.setTransform(-88.6,-10);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B20512").s().p("AgEBIQgPABgNgGQgNgGgKgJQgJgKgGgNQgFgOAAgPQAAgPAFgOQAGgMAJgKQAKgKANgFQANgFAPgBQAPABANAFQANAFAJAKQAKAKAFANQAGANAAAPQAAATgIAPQgIAQgRAJIAAAAIAqAAIAAANgAgbg2QgLAFgHAJQgHAHgEAMQgEAKAAALQAAAMAEALQAEAKAHAIQAHAJALAEQAKAGANgBQAMABALgGQAKgEAHgJQAIgIADgKQAEgLAAgMQAAgLgEgKQgDgMgIgHQgHgJgKgFQgLgEgMAAQgNAAgKAEg");
	this.shape_53.setTransform(-102.3,-12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).wait(2));

	// Estados
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-123,-27);

	this.instance_1 = new lib.Mapadebits5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123,-27);

	this.instance_2 = new lib.Mapadebits4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-27.4,246,54);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo10();
	this.mc_hand.parent = this;
	this.mc_hand.setTransform(63,21);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7B7B7").s().p("AAbAwIAAgzQABgPgGgIQgFgJgPAAIgEABQgFAAgFAEQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgJIAAgLIANAAIAAAHIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape.setTransform(-4.8,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7B7B7").s().p("AgTBEQgJgDgHgHQgGgHgEgJQgEgIAAgMQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKABQALgBAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAAMgEAIQgEAJgGAHQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOgLQgGAEgFAEQgEAFgDAGQgCAHAAAHQAAAIACAIQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgIAAgIQAAgHgCgHQgDgGgEgFQgFgEgGgEQgHgDgIAAQgHAAgHADgAgLgqIATgdIASAAIgaAdg");
	this.shape_1.setTransform(-16.1,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7B7B7").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgEgDAAgEQAAgFAEgCQADgCACgBQADABADACQADACAAAFQAAAEgDADQgDADgDgBQgCABgDgDg");
	this.shape_2.setTransform(-24.4,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B7B7B7").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_3.setTransform(-31.3,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7B7B7").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_4.setTransform(-40.9,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B7B7B7").s().p("AgfAnQgJgKABgRIAAg7IAMAAIAAAzQABAHABAGQABAHADADQADAEAEADQAGACAHAAIAEgBQAFAAAGgEQAEgEAFgHQADgHAAgNIAAgvIANAAIAABIIABAJIABALIgOAAIgBgHIAAgHIAAAAQgCADgEAEIgHAFIgJAEQgEABgFAAQgRAAgJgJg");
	this.shape_5.setTransform(-51.7,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7B7B7").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAJADIAJAGQAFADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgFADIgJAFIgJAEIgKABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_6.setTransform(-63.6,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B7B7B7").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_7.setTransform(-75.3,1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B7B7B7").s().p("AgZAwIAAg/IAAgNIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_8.setTransform(-83.7,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B7B7B7").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_9.setTransform(-91.2,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B7B7B7").s().p("AAbAwIAAgzQABgPgGgIQgFgJgPAAIgEABQgFAAgFAEQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgJIAAgLIANAAIAAAHIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_10.setTransform(-100.2,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B7B7B7").s().p("AgGBHIAAiNIANAAIAACNg");
	this.shape_11.setTransform(-108.2,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B20512").s().p("AAbAwIAAgzQABgPgGgIQgFgJgPAAIgEABQgFAAgFAEQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgJIAAgLIANAAIAAAHIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_12.setTransform(-4.8,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B20512").s().p("AgTBEQgJgDgHgHQgGgHgEgJQgEgIAAgMQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKABQALgBAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAAMgEAIQgEAJgGAHQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOgLQgGAEgFAEQgEAFgDAGQgCAHAAAHQAAAIACAIQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgIAAgIQAAgHgCgHQgDgGgEgFQgFgEgGgEQgHgDgIAAQgHAAgHADgAgLgqIATgdIASAAIgaAdg");
	this.shape_13.setTransform(-16.1,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgEgDAAgEQAAgFAEgCQADgCACgBQADABADACQADACAAAFQAAAEgDADQgDADgDgBQgCABgDgDg");
	this.shape_14.setTransform(-24.4,-0.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B20512").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_15.setTransform(-31.3,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B20512").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_16.setTransform(-40.9,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B20512").s().p("AgfAnQgJgKABgRIAAg7IAMAAIAAAzQABAHABAGQABAHADADQADAEAEADQAGACAHAAIAEgBQAFAAAGgEQAEgEAFgHQADgHAAgNIAAgvIANAAIAABIIABAJIABALIgOAAIgBgHIAAgHIAAAAQgCADgEAEIgHAFIgJAEQgEABgFAAQgRAAgJgJg");
	this.shape_17.setTransform(-51.7,1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B20512").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAJADIAJAGQAFADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgFADIgJAFIgJAEIgKABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_18.setTransform(-63.6,-1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_19.setTransform(-75.3,1.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B20512").s().p("AgZAwIAAg/IAAgNIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_20.setTransform(-83.7,1.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_21.setTransform(-91.2,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B20512").s().p("AAbAwIAAgzQABgPgGgIQgFgJgPAAIgEABQgFAAgFAEQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgJIAAgLIANAAIAAAHIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_22.setTransform(-100.2,1.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B20512").s().p("AgGBHIAAiNIANAAIAACNg");
	this.shape_23.setTransform(-108.2,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

	// Estados
	this.instance = new lib.Mapadebits3();
	this.instance.parent = this;
	this.instance.setTransform(-123,-27);

	this.instance_1 = new lib.Mapadebits5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123,-27);

	this.instance_2 = new lib.Mapadebits4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-27,246,53);


// stage content:
(lib.pag0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		var mc = this;
		var complete = false;
		var totalButtons = estructura.modulos[estructura.actModulo].temas.length;
		
		mc.controlMenu = function () {
			for (var i = 0; i < totalButtons; i++) {
		
				mc["mc_obj" + i].num = i;
				mc["mc_obj" + i].tipo = estructura.modulos[estructura.actModulo].temas[i].tipo;
				mc["mc_obj" + i].estado = estructura.modulos[estructura.actModulo].temas[i].estado;
				mc["mc_obj" + i].gotoAndStop(mc["mc_obj" + i].estado);
		
				if (mc["mc_obj" + i].estado != 0) {
					mc["mc_obj" + i].mouseEnabled = true;
					mc["mc_obj" + i].cursor = "pointer";
					mc["mc_obj" + i].addEventListener("mousedown", watchContent);
				}
			}
		}
		
		/*mc.verFinish = function () {
			mc_contenido.mc_vacio.removeAllChildren();
			mc.mc_feedback.alpha = 1;
			if(estructura.modulos[1].estado == 0){
				estructura.modulos[1].estado = 1;
			}
			if(estructura.modulos[0].estado == 1){
				estructura.modulos[0].estado = 2;
			}
			mc.mc_feedback.btn_exit.addEventListener("mousedown", finish);
		}*/
		
		ini();
		
		function ini() {
			$("#vid").attr("controlsList", "nodownload nofullscreen noremoteplayback");
			mc.btn_fondo.cursor = "default";
			mc.mc_precarga.alpha = 0;
			//mc.mc_feedback.alpha = 0;
			mc.controlMenu();
		
			watchVideo(videos[estructura.modulos[estructura.actModulo].temas[estructura.actTemaImportancia].path]);
		
			mc.btn_backMenu.addEventListener("mousedown", backMenu);
		
		}
		
		function watchContent(evt) {
			createjs.Sound.stop();
			var num = evt.currentTarget.num;
			estructura.actTemaImportancia = num;
			//mc.mc_instrucciones.alpha = 0;
			var cargar = estructura.actModulo.toString() + estructura.actTemaImportancia.toString();
			var obj = evt.currentTarget;
			/*if(num == 5 && obj.estado == 2){
				mc.mc_feedback.alpha = 0;
			}*/
			if (num != 0) {
				obj.mc_hand.alpha = 0;
			}
			if (obj.tipo == "video") {
				mc_contenido.mc_vacio.removeAllChildren();
				watchVideo(videos[estructura.modulos[estructura.actModulo].temas[estructura.actTemaImportancia].path]);
			} else if (obj.tipo == "slide") {
				hidenVideo();
				cargarSubArchivo("pag" + cargar);
			}
		
		
		}
		
		function finalVideo(evt) {
			finTema(true, estructura.actTemaImportancia);
		}
		
		function watchVideo(path) {
			$("#vid").attr("src", path);
			$("#vid").show();
			$("#vid").parent().css("pointer-events", "all");
			$("#vid").on("ended", finalVideo);
			$("#dom_overlay_container").fadeIn(500);
		}
		
		function hidenVideo() {
			$("#vid").attr("src", "")
			$("#vid").hide()
			$("#vid").parent().css("pointer-events", "none");
		}
		
		function backMenu(evt) {
			createjs.Sound.stop();
			hidenVideo();
			salirPrincipal(false);
		}
		
		function finish(evt) {
			createjs.Sound.stop();
			hidenVideo();
			salirPrincipal(true);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Precarga
	this.mc_precarga = new lib.Precarga();
	this.mc_precarga.parent = this;
	this.mc_precarga.setTransform(765.8,373.2);

	this.timeline.addTween(cjs.Tween.get(this.mc_precarga).wait(2));

	// Vacio
	this.mc_vacio = new lib.vacio();
	this.mc_vacio.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mc_vacio).wait(2));

	// Video
	this.vid = new lib.an_Video({'id': 'vid', 'src':'videos/', 'autoplay':true, 'controls':true, 'loop':false, 'preload':true, 'class':'video'});

	this.vid.setTransform(763.5,424.7,2.545,1.909,0,0,0,200.1,150.2);

	this.timeline.addTween(cjs.Tween.get(this.vid).wait(2));

	// Encabezado
	this.btn_backMenu = new lib.Símbolo12();
	this.btn_backMenu.parent = this;
	this.btn_backMenu.setTransform(377.8,73);

	this.instance = new lib.Mapadebits2();
	this.instance.parent = this;
	this.instance.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btn_backMenu}]}).wait(2));

	// Buttons
	this.mc_obj8 = new lib.Símbolo9();
	this.mc_obj8.parent = this;
	this.mc_obj8.setTransform(123.3,693.5);

	this.mc_obj7 = new lib.Símbolo8();
	this.mc_obj7.parent = this;
	this.mc_obj7.setTransform(123.3,641);

	this.mc_obj6 = new lib.Símbolo7();
	this.mc_obj6.parent = this;
	this.mc_obj6.setTransform(123.3,589.8);

	this.mc_obj0 = new lib.Símbolo1();
	this.mc_obj0.parent = this;
	this.mc_obj0.setTransform(123.3,153.8);

	this.mc_obj1 = new lib.Símbolo2();
	this.mc_obj1.parent = this;
	this.mc_obj1.setTransform(123.3,207.3);

	this.mc_obj2 = new lib.Símbolo3();
	this.mc_obj2.parent = this;
	this.mc_obj2.setTransform(123.3,265.5);

	this.mc_obj3 = new lib.Símbolo4();
	this.mc_obj3.parent = this;
	this.mc_obj3.setTransform(123.3,320.3);

	this.mc_obj4 = new lib.Símbolo5();
	this.mc_obj4.parent = this;
	this.mc_obj4.setTransform(123.3,422);

	this.mc_obj5 = new lib.Símbolo6();
	this.mc_obj5.parent = this;
	this.mc_obj5.setTransform(123.3,528);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgTNAvYMAAAhevMAmbAAAMAAABevg");
	this.shape.setTransform(123.3,416.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.mc_obj5},{t:this.mc_obj4},{t:this.mc_obj3},{t:this.mc_obj2},{t:this.mc_obj1},{t:this.mc_obj0},{t:this.mc_obj6},{t:this.mc_obj7},{t:this.mc_obj8}]}).wait(2));

	// Fondo
	this.instance_1 = new lib.Mapadebits1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// btn_fondo
	this.btn_fondo = new lib.Símbolo11();
	this.btn_fondo.parent = this;
	this.btn_fondo.setTransform(642,359.5);
	new cjs.ButtonHelper(this.btn_fondo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn_fondo).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(639,357,1286,725);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/pag0_atlas_.png", id:"pag0_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js", id:"an.Video"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;