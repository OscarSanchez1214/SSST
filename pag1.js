(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"pag1_atlas_", frames: [[0,727,1280,720],[0,0,1286,725],[0,1743,145,77],[0,1822,295,36],[0,1449,1279,127],[0,1578,246,53],[0,1688,246,53],[0,1633,246,53]]}
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
	this.spriteSheet = ss["pag1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits12 = function() {
	this.spriteSheet = ss["pag1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits13 = function() {
	this.spriteSheet = ss["pag1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits14 = function() {
	this.spriteSheet = ss["pag1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits2 = function() {
	this.spriteSheet = ss["pag1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.spriteSheet = ss["pag1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits4 = function() {
	this.spriteSheet = ss["pag1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.spriteSheet = ss["pag1_atlas_"];
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


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjLDKQgHAAgEgEQgEgEgBgHQABgOAIgKQAKgKAOgCICXgYQAIgCAEgIQACgJgHgHIjhjhQgIgIAAgLQAAgLAIgIQAIgIAMAAQALAAAIAIICWCWQAFAFAGAAQAGAAAFgFQAEgEAAgGQAAgHgEgEIg+g+QgIgIAAgLQAAgMAIgIQAIgHALAAQAMAAAIAHIA9A+QAEAEAGAAQAHAAAEgEQAEgEABgHQgBgGgEgEIgfggQgHgIgBgLQAAgMAJgIQAIgHAKAAQAMgBAHAIIAgAgIAAAAQAFAEAFAAQAHAAAEgEQAFgFAAgGQAAgGgFgEIgBgCQgJgIABgMQAAgLAIgIQAIgHALAAQAMAAAHAHIBxB8QAjAnAAAzQAAA4goAnIgvAwQgnAng5AAg");
	this.shape_1.setTransform(26.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,52.4,40.5), null);


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


(lib.Interpolación4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,3.8,0.631,0.631,39.7,0,0,26.8,19.6);
	this.instance_1.alpha = 0.602;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4D").s().p("AguDAQhAgRgpg1Qgpg0AAhDQAAhQA6g5QA5g6BQAAQBDAAA0ApQA1ApARBAQACAGgDAFQgEAGgGABQgGACgFgDQgFgDgCgGQgOg3gtgiQgtgig4AAQhDAAgxAwQgwAxAABDQAAA5AiAsQAiAtA3AOQAGACADAFQADAFgCAGQgDAMgLAAg");
	this.shape_3.setTransform(-5.9,-12.2,0.631,0.631,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4D").s().p("AgxCAQgkgPgWgiQgWghAAgoQAAg3AogpQAognA3AAQAoAAAhAWQAiAVAQAlQACAGgCAGQgCAFgGADQgFACgGgCQgGgCgCgGQgNgcgagRQgbgRgeAAQgrAAgfAfQgfAfAAArQAAAeARAaQARAaAcANQAGADACAFQACAHgCAFQgEAJgKAAIgGgCg");
	this.shape_4.setTransform(-5.9,-12.4,0.631,0.631,39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4D").s().p("AjMDoQgSAAgNgNQgNgNgBgTQAAgZARgSQARgTAYgEIB6gTIjOjMQgRgRAAgYQAAgYARgRQARgRAZAAQAXAAARARIA1A2QAFgOAKgLQAPgPAWgBQAWgCAQANQAFgOAKgLQAPgPAWgBQAWgCAQANQAEgOALgLQAQgQAYAAQAZAAAQAQIBxB8QArAwAAA/QAABDgwAyIgvAvQgxAwhEAAgAj9iiQgIAIAAALQAAALAIAIIDiDhQAGAHgDAJQgDAIgIACIiYAYQgNACgKAKQgIAKgBAOQAAAHAFAEQAEAEAGAAIEcAAQA4AAAngnIAwgwQAngnAAg4QAAgzgjgnIhxh8QgHgHgMAAQgLAAgIAHQgIAIAAALQAAAMAHAIIACACQAEAEABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEIAAAAIgfggQgIgIgMABQgKAAgJAHQgHAIgBAMQAAALAIAIIAfAgQAFAEgBAGQABAHgFAEQgEAEgGAAQgHAAgEgEIg9g+QgIgHgMAAQgLAAgIAHQgHAIgBAMQAAALAHAIIA/A+QAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFIiXiWQgIgIgLAAQgMAAgIAIg");
	this.shape_5.setTransform(-0.3,4.5,0.631,0.631,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.8,-24.3,41.8,48.6);


(lib.Interpolación3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.6,3.8,0.631,0.631,39.7,0,0,26.8,19.6);
	this.instance_1.alpha = 0.602;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D4D4D").s().p("AguDAQhAgRgpg1Qgpg0AAhDQAAhQA6g5QA5g6BQAAQBDAAA0ApQA1ApARBAQACAGgDAFQgEAGgGABQgGACgFgDQgFgDgCgGQgOg3gtgiQgtgig4AAQhDAAgxAwQgwAxAABDQAAA5AiAsQAiAtA3AOQAGACADAFQADAFgCAGQgDAMgLAAg");
	this.shape_3.setTransform(-5.9,-12.2,0.631,0.631,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D4D4D").s().p("AgxCAQgkgPgWgiQgWghAAgoQAAg3AogpQAognA3AAQAoAAAhAWQAiAVAQAlQACAGgCAGQgCAFgGADQgFACgGgCQgGgCgCgGQgNgcgagRQgbgRgeAAQgrAAgfAfQgfAfAAArQAAAeARAaQARAaAcANQAGADACAFQACAHgCAFQgEAJgKAAIgGgCg");
	this.shape_4.setTransform(-5.9,-12.4,0.631,0.631,39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4D").s().p("AjMDoQgSAAgNgNQgNgNgBgTQAAgZARgSQARgTAYgEIB6gTIjOjMQgRgRAAgYQAAgYARgRQARgRAZAAQAXAAARARIA1A2QAFgOAKgLQAPgPAWgBQAWgCAQANQAFgOAKgLQAPgPAWgBQAWgCAQANQAEgOALgLQAQgQAYAAQAZAAAQAQIBxB8QArAwAAA/QAABDgwAyIgvAvQgxAwhEAAgAj9iiQgIAIAAALQAAALAIAIIDiDhQAGAHgDAJQgDAIgIACIiYAYQgNACgKAKQgIAKgBAOQAAAHAFAEQAEAEAGAAIEcAAQA4AAAngnIAwgwQAngnAAg4QAAgzgjgnIhxh8QgHgHgMAAQgLAAgIAHQgIAIAAALQAAAMAHAIIACACQAEAEABAGQgBAGgEAFQgEAEgHAAQgFAAgFgEIAAAAIgfggQgIgIgMABQgKAAgJAHQgHAIgBAMQAAALAIAIIAfAgQAFAEgBAGQABAHgFAEQgEAEgGAAQgHAAgEgEIg9g+QgIgHgMAAQgLAAgIAHQgHAIgBAMQAAALAHAIIA/A+QAEAEAAAHQAAAGgEAEQgEAFgHAAQgGAAgEgFIiXiWQgIgIgLAAQgMAAgIAIg");
	this.shape_5.setTransform(-0.3,4.5,0.631,0.631,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1}]}).wait(1));

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
	this.mc_hand.setTransform(94.6,0.3,0.72,0.72);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5B5B5").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape.setTransform(75.7,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B5B5").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_1.setTransform(66.8,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5B5B5").s().p("AAbAwIAAgzQABgQgGgIQgFgIgPAAIgEABQgFAAgFAEQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgJIAAgMIANAAIAAAIIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_2.setTransform(57.8,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5B5B5").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAIgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA/AAQAAgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_3.setTransform(46.8,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5B5B5").s().p("AgUBJQgIgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_4.setTransform(34.9,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B5B5B5").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDAAgEQAAgEADgDQADgDACABQADgBADADQAEADAAAEQAAAEgEADQgDACgDAAQgCAAgDgCg");
	this.shape_5.setTransform(26.7,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B5B5B5").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAKAAAIAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgIAEgKAAQgKAAgKgDg");
	this.shape_6.setTransform(19.8,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5B5B5").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_7.setTransform(10.1,11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B5B5B5").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_8.setTransform(-0.5,11.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B5B5B5").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_9.setTransform(-16.9,11.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B5B5B5").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_10.setTransform(-33.9,11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5B5B5").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_11.setTransform(-42.8,10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5B5B5").s().p("AAbAwIAAgzQAAgQgFgIQgGgIgOAAIgEABQgFAAgGAEQgEAEgFAHQgEAHAAAMIAAAwIgMAAIAAhIIgBgJIgBgMIAOAAIAAAIIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQARAAAJAJQAJAKgBARIAAA7g");
	this.shape_12.setTransform(-51.8,11.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B5B5B5").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_13.setTransform(-62.7,11.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B5B5B5").s().p("AgUBJQgIgEgHgGQgGgHgFgJQgDgJAAgLQAAgKADgJQAFgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgHADgEAEQgEAFgDAHQgCAHAAAHQAAAIACAHQADAHAEAFQAEAFAHADQAGADAIAAQAIAAAHgDQAGgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgEgGgDQgHgDgIAAQgIAAgGADg");
	this.shape_14.setTransform(-74.7,9.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B5B5B5").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgEgDAAgEQAAgEAEgDQADgDACABQADgBADADQADADAAAEQAAAEgDADQgDACgDAAQgCAAgDgCg");
	this.shape_15.setTransform(-82.9,9.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B5B5B5").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_16.setTransform(-89.8,11.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5B5B5").s().p("AAbAwIAAgzQABgQgGgIQgFgIgPAAIgEABQgFAAgFAEQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgJIAAgMIANAAIAAAIIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_17.setTransform(-100.6,11.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B5B5B5").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDgBgEQABgEADgDQADgDACABQADgBADADQADADABAEQgBAEgDADQgDACgDAAQgCAAgDgCg");
	this.shape_18.setTransform(-108.4,9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B5B5B5").s().p("AgOAYIAOguIAPAAIgPAug");
	this.shape_19.setTransform(1.4,-2.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B5B5B5").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAJADIAJAGQAFADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgFADIgJAFIgJAEIgKABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_20.setTransform(-7.8,-10.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B5B5B5").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_21.setTransform(-19.1,-7.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B5B5B5").s().p("AgUBJQgIgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_22.setTransform(-30.4,-10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B5B5B5").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAJgDAIAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAEAEAGADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_23.setTransform(-41.7,-7.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B5B5B5").s().p("AA5AwIAAg2QAAgOgFgHQgFgIgOAAQgHAAgFADQgFADgDAEQgDAFgCAGQgBAHAAAGIAAAxIgMAAIAAg2QAAgOgFgHQgFgIgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAIAAALIAAAwIgNAAIAAhIIgBgKIAAgKIAOAAIAAANIAAAAQAFgHAIgFQAJgEAIAAIAIABQAFABAEACIAHAGQADADACAHQAEgKAJgFQAJgFAJAAQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_24.setTransform(-56,-7.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B5B5B5").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_25.setTransform(-66.8,-7.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B5B5B5").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFAAAGIA+AAQAAgOgHgIQgIgIgPAAQgFAAgGACg");
	this.shape_26.setTransform(-76.5,-7.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B5B5B5").s().p("AgLBNIAAhRIgTAAIAAgMIATAAIAAgZQAAgTAJgIQAIgIAOAAIAGABIAFABIgCAMIgFgBIgFgBQgGAAgDACQgEACgBADQgCADgBAFIAAAJIAAAYIAWAAIAAAMIgWAAIAABRg");
	this.shape_27.setTransform(-84.5,-10.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B5B5B5").s().p("AAbAwIAAgzQAAgQgFgHQgGgJgOAAIgEABQgFAAgGAEQgEAEgFAHQgEAIAAALIAAAwIgMAAIAAhIIgBgKIgBgKIAOAAIAAAHIAAAHIABAAIAGgGQADgEAEgCIAJgDIAJgCQARAAAJAKQAJAJgBASIAAA6g");
	this.shape_28.setTransform(-93.6,-7.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B5B5B5").s().p("AgsBHIAAiNIBXAAIAAANIhJAAIAAAxIBEAAIAAAMIhEAAIAAA2IBLAAIAAANg");
	this.shape_29.setTransform(-104.4,-10.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_30.setTransform(75.7,11.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_31.setTransform(66.8,10.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20512").s().p("AAbAwIAAgzQABgQgGgIQgFgIgPAAIgEABQgFAAgFAEQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgJIAAgMIANAAIAAAIIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_32.setTransform(57.8,11.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAIgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA/AAQAAgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_33.setTransform(46.8,11.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20512").s().p("AgUBJQgIgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_34.setTransform(34.9,9.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDAAgEQAAgEADgDQADgDACABQADgBADADQAEADAAAEQAAAEgEADQgDACgDAAQgCAAgDgCg");
	this.shape_35.setTransform(26.7,9.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B20512").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAKAAAIAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgIAEgKAAQgKAAgKgDg");
	this.shape_36.setTransform(19.8,11.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B20512").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_37.setTransform(10.1,11.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_38.setTransform(-0.5,11.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_39.setTransform(-16.9,11.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAJgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAEgGIALAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFAAAGIA+AAQAAgOgIgIQgHgIgPAAQgFAAgGACg");
	this.shape_40.setTransform(-33.9,11.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_41.setTransform(-42.8,10.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B20512").s().p("AAbAwIAAgzQAAgQgFgIQgGgIgOAAIgEABQgFAAgGAEQgEAEgFAHQgEAHAAAMIAAAwIgMAAIAAhIIgBgJIgBgMIAOAAIAAAIIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQARAAAJAJQAJAKgBARIAAA7g");
	this.shape_42.setTransform(-51.8,11.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAJAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_43.setTransform(-62.7,11.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B20512").s().p("AgUBJQgIgEgHgGQgGgHgFgJQgDgJAAgLQAAgKADgJQAFgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgHADgEAEQgEAFgDAHQgCAHAAAHQAAAIACAHQADAHAEAFQAEAFAHADQAGADAIAAQAIAAAHgDQAGgDAFgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgFgEgGgDQgHgDgIAAQgIAAgGADg");
	this.shape_44.setTransform(-74.7,9.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgEgDAAgEQAAgEAEgDQADgDACABQADgBADADQADADAAAEQAAAEgDADQgDACgDAAQgCAAgDgCg");
	this.shape_45.setTransform(-82.9,9.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B20512").s().p("AgMAuQgJgEgGgHQgHgGgEgJQgDgJAAgLQAAgKADgJQAEgJAHgGQAGgHAJgEQAJgDALAAQAJAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgIAAQgIAAgGACQgGADgFAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAFAFAGADQAGACAIAAQAIAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgJAAQgLAAgJgDg");
	this.shape_46.setTransform(-89.8,11.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B20512").s().p("AAbAwIAAgzQABgQgGgIQgFgIgPAAIgEABQgFAAgFAEQgGAEgDAHQgFAHAAAMIAAAwIgMAAIAAhIIgBgJIAAgMIANAAIAAAIIAAAHIABAAIAGgHQADgDAEgCIAJgEIAJgBQASAAAIAJQAJAKAAARIAAA7g");
	this.shape_47.setTransform(-100.6,11.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDgBgEQABgEADgDQADgDACABQADgBADADQADADABAEQgBAEgDADQgDACgDAAQgCAAgDgCg");
	this.shape_48.setTransform(-108.4,9.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B20512").s().p("AgOAYIAOguIAPAAIgPAug");
	this.shape_49.setTransform(1.4,-2.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B20512").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAJADIAJAGQAFADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgFADIgJAFIgJAEIgKABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_50.setTransform(-7.8,-10.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_51.setTransform(-19.1,-7.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B20512").s().p("AgUBJQgIgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_52.setTransform(-30.4,-10.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAFgGQAHgHAJgEQAJgDAIAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQABAHACAGQADAGAFAFQAEAEAGADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_53.setTransform(-41.7,-7.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B20512").s().p("AA5AwIAAg2QAAgOgFgHQgFgIgOAAQgHAAgFADQgFADgDAEQgDAFgCAGQgBAHAAAGIAAAxIgMAAIAAg2QAAgOgFgHQgFgIgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAIAAALIAAAwIgNAAIAAhIIgBgKIAAgKIAOAAIAAANIAAAAQAFgHAIgFQAJgEAIAAIAIABQAFABAEACIAHAGQADADACAHQAEgKAJgFQAJgFAJAAQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_54.setTransform(-56,-7.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_55.setTransform(-66.8,-7.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFAAAGIA+AAQAAgOgHgIQgIgIgPAAQgFAAgGACg");
	this.shape_56.setTransform(-76.5,-7.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B20512").s().p("AgLBNIAAhRIgTAAIAAgMIATAAIAAgZQAAgTAJgIQAIgIAOAAIAGABIAFABIgCAMIgFgBIgFgBQgGAAgDACQgEACgBADQgCADgBAFIAAAJIAAAYIAWAAIAAAMIgWAAIAABRg");
	this.shape_57.setTransform(-84.5,-10.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B20512").s().p("AAbAwIAAgzQAAgQgFgHQgGgJgOAAIgEABQgFAAgGAEQgEAEgFAHQgEAIAAALIAAAwIgMAAIAAhIIgBgKIgBgKIAOAAIAAAHIAAAHIABAAIAGgGQADgEAEgCIAJgDIAJgCQARAAAJAKQAJAJgBASIAAA6g");
	this.shape_58.setTransform(-93.6,-7.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B20512").s().p("AgsBHIAAiNIBXAAIAAANIhJAAIAAAxIBEAAIAAAMIhEAAIAAA2IBLAAIAAANg");
	this.shape_59.setTransform(-104.4,-10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).wait(2));

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

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BCBCBC").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAKADIAIAGQAFADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgFADIgIAFIgKAEIgKABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape.setTransform(0.8,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BCBCBC").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_1.setTransform(-10.5,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BCBCBC").s().p("AgUBJQgIgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_2.setTransform(-21.8,9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BCBCBC").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDAAgEQAAgEADgDQADgDACABQADgBADADQAEADAAAEQAAAEgEADQgDACgDAAQgCAAgDgCg");
	this.shape_3.setTransform(-30,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BCBCBC").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_4.setTransform(-34.9,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BCBCBC").s().p("AgfAnQgJgKAAgRIAAg7IAOAAIAAAzQgBAHACAGQABAHADADQADAEAEADQAGACAHAAIAEgBQAGgBAEgDQAGgEADgHQAFgIAAgMIAAgvIAMAAIAABIIABAJIAAALIgNAAIAAgHIAAgHIgBAAQgCADgEADIgHAGIgJADQgEACgFAAQgSAAgIgJg");
	this.shape_5.setTransform(-44.7,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BCBCBC").s().p("AgZBEQgLgFgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgCAEgGQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgHQgEgKAAgJQAAgLAEgJQAEgIAGgHQAGgGAJgEQAJgEAKAAIAIABQAFAAAEADIAKAFQAEADAEAGIABAAIAAgQIANAAIAABcQAAAIgCAJQgCAIgGAHQgFAHgKAGQgKAEgPAAQgNAAgLgEgAgMg4QgGADgFAFQgFAFgDAGQgCAGAAAIQAAAIACAGQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgDACgHQADgHAAgIQAAgIgCgGQgDgGgEgFQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_6.setTransform(-56.6,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BCBCBC").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAIgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_7.setTransform(-67.9,11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BCBCBC").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_8.setTransform(-77.7,11.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BCBCBC").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_9.setTransform(-93.1,11.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BCBCBC").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_10.setTransform(-105,9.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BCBCBC").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_11.setTransform(57,-7.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BCBCBC").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_12.setTransform(47.2,-7.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BCBCBC").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_13.setTransform(37.8,-7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BCBCBC").s().p("AgFBGIAAhdIALAAIAABdgAgFg0QgDgDAAgEQAAgFADgCQADgCACgBQADABADACQAEACAAAFQAAAEgEADQgDACgDAAQgCAAgDgCg");
	this.shape_14.setTransform(30.3,-9.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BCBCBC").s().p("AgLBNIAAhRIgTAAIAAgMIATAAIAAgZQAAgTAJgIQAIgIAOAAIAGABIAFABIgCAMIgFgBIgFgBQgGAAgDACQgEACgBADQgCADgBAFIAAAJIAAAYIAWAAIAAAMIgWAAIAABRg");
	this.shape_15.setTransform(25.4,-10.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BCBCBC").s().p("AgMBHIAAhdIAMAAIAABdgAgSgpIATgdIASAAIgaAdg");
	this.shape_16.setTransform(20.3,-10.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BCBCBC").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_17.setTransform(12.7,-7.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BCBCBC").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAHAAQAKAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_18.setTransform(2,-7.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BCBCBC").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_19.setTransform(-9.3,-4.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BCBCBC").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_20.setTransform(-20,-7.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BCBCBC").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFABAGIA+AAQAAgOgJgIQgIgIgOAAQgFAAgGACg");
	this.shape_21.setTransform(-29.8,-7.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BCBCBC").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_22.setTransform(-45.1,-7.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BCBCBC").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_23.setTransform(-54.9,-7.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BCBCBC").s().p("AA5AwIAAg2QAAgOgFgHQgFgIgOAAQgHAAgFADQgFADgDAEQgDAFgCAGQgBAHAAAGIAAAxIgMAAIAAg2QAAgOgFgHQgFgIgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAIAAALIAAAwIgNAAIAAhIIgBgKIAAgKIAOAAIAAANIAAAAQAFgHAIgFQAJgEAIAAIAIABQAFABAEACIAHAGQADADACAHQAEgKAJgFQAJgFAJAAQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_24.setTransform(-68.5,-7.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BCBCBC").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_25.setTransform(-79.3,-7.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BCBCBC").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_26.setTransform(-89.4,-7.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BCBCBC").s().p("AApBHIhUh4IAAAAIAAB4IgPAAIAAiNIASAAIBUB3IAAAAIAAh3IAPAAIAACNg");
	this.shape_27.setTransform(-103.1,-10.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20512").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAKADIAIAGQAFADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgFADIgIAFIgKAEIgKABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_28.setTransform(0.8,9.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_29.setTransform(-10.5,11.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20512").s().p("AgUBJQgIgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_30.setTransform(-21.8,9.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20512").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDAAgEQAAgEADgDQADgDACABQADgBADADQAEADAAAEQAAAEgEADQgDACgDAAQgCAAgDgCg");
	this.shape_31.setTransform(-30,9.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20512").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgHIAGgHIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_32.setTransform(-34.9,11.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20512").s().p("AgfAnQgJgKAAgRIAAg7IAOAAIAAAzQgBAHACAGQABAHADADQADAEAEADQAGACAHAAIAEgBQAGgBAEgDQAGgEADgHQAFgIAAgMIAAgvIAMAAIAABIIABAJIAAALIgNAAIAAgHIAAgHIgBAAQgCADgEADIgHAGIgJADQgEACgFAAQgSAAgIgJg");
	this.shape_33.setTransform(-44.7,12);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20512").s().p("AgZBEQgLgFgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgCAEgGQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgHQgGgGgEgHQgEgKAAgJQAAgLAEgJQAEgIAGgHQAGgGAJgEQAJgEAKAAIAIABQAFAAAEADIAKAFQAEADAEAGIABAAIAAgQIANAAIAABcQAAAIgCAJQgCAIgGAHQgFAHgKAGQgKAEgPAAQgNAAgLgEgAgMg4QgGADgFAFQgFAFgDAGQgCAGAAAIQAAAIACAGQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgDQAHgCAFgFQAFgDACgHQADgHAAgIQAAgIgCgGQgDgGgEgFQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_34.setTransform(-56.6,14.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAIgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_35.setTransform(-67.9,11.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_36.setTransform(-77.7,11.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_37.setTransform(-93.1,11.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B20512").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_38.setTransform(-105,9.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_39.setTransform(57,-7.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_40.setTransform(47.2,-7.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B20512").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_41.setTransform(37.8,-7.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B20512").s().p("AgFBGIAAhdIALAAIAABdgAgFg0QgDgDAAgEQAAgFADgCQADgCACgBQADABADACQAEACAAAFQAAAEgEADQgDACgDAAQgCAAgDgCg");
	this.shape_42.setTransform(30.3,-9.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B20512").s().p("AgLBNIAAhRIgTAAIAAgMIATAAIAAgZQAAgTAJgIQAIgIAOAAIAGABIAFABIgCAMIgFgBIgFgBQgGAAgDACQgEACgBADQgCADgBAFIAAAJIAAAYIAWAAIAAAMIgWAAIAABRg");
	this.shape_43.setTransform(25.4,-10.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B20512").s().p("AgMBHIAAhdIAMAAIAABdgAgSgpIATgdIASAAIgaAdg");
	this.shape_44.setTransform(20.3,-10.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B20512").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgGgEQgFgDgJAAQgHAAgGACQgHADgEAFQgFAFgCAHQgCAHAAAHQAAAIACAHQACAHAFAFQAEAFAHADQAGACAHAAQAJAAAFgDQAGgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_45.setTransform(12.7,-7.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAHAAQAKAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_46.setTransform(2,-7.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B20512").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_47.setTransform(-9.3,-4.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_48.setTransform(-20,-7.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgDAFABAGIA+AAQAAgOgJgIQgIgIgOAAQgFAAgGACg");
	this.shape_49.setTransform(-29.8,-7.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_50.setTransform(-45.1,-7.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_51.setTransform(-54.9,-7.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B20512").s().p("AA5AwIAAg2QAAgOgFgHQgFgIgOAAQgHAAgFADQgFADgDAEQgDAFgCAGQgBAHAAAGIAAAxIgMAAIAAg2QAAgOgFgHQgFgIgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAIAAALIAAAwIgNAAIAAhIIgBgKIAAgKIAOAAIAAANIAAAAQAFgHAIgFQAJgEAIAAIAIABQAFABAEACIAHAGQADADACAHQAEgKAJgFQAJgFAJAAQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_52.setTransform(-68.5,-7.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_53.setTransform(-79.3,-7.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_54.setTransform(-89.4,-7.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B20512").s().p("AApBHIhUh4IAAAAIAAB4IgPAAIAAiNIASAAIBUB3IAAAAIAAh3IAPAAIAACNg");
	this.shape_55.setTransform(-103.1,-10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).wait(2));

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
	this.mc_hand.setTransform(76.2,5.2,0.859,0.859);
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAKADIAIAGQAFADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgFADIgIAFIgKAEIgKABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape.setTransform(0.8,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_1.setTransform(-10.5,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B2B2B2").s().p("AgUBJQgIgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_2.setTransform(-21.8,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2B2B2").s().p("AgFBGIAAhdIALAAIAABdgAgFg0QgDgDAAgEQAAgEADgDQADgDACAAQADAAADADQAEADAAAEQAAAEgEADQgDACgDAAQgCAAgDgCg");
	this.shape_3.setTransform(-30,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B2B2B2").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_4.setTransform(-34.9,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B2B2B2").s().p("AgfAnQgJgKAAgSIAAg6IAOAAIAAAyQgBAIACAHQABAFADAFQADAEAEACQAGACAHAAIAEgBQAGgBAEgDQAGgEADgHQAFgHAAgNIAAgvIAMAAIAABIIABAKIAAALIgNAAIAAgIIAAgIIgBAAQgCAEgEAEIgHAFIgJAEQgEABgFAAQgSAAgIgJg");
	this.shape_5.setTransform(-44.7,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B2B2B2").s().p("AgZBDQgLgEgJgKIAJgKQAGAHAJAGQAKAEALAAQAJAAAHgDQAHgDAEgFQAFgFACgGQACgHAAgIIAAgRIgBAAQgGAKgKAEQgJAEgKAAQgJAAgJgDQgJgEgHgGQgGgHgEgIQgEgJAAgKQAAgKAEgIQAEgKAGgGQAGgHAJgEQAJgDAKAAIAIABQAFAAAEACIAKAGQAEAEAEAFIABAAIAAgPIANAAIAABbQAAAIgCAIQgCAJgGAIQgFAGgKAFQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAEgDAHQgCAGAAAIQAAAIACAGQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgCQAHgDAFgFQAFgDACgHQADgHAAgIQAAgIgCgGQgDgHgEgEQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_6.setTransform(-56.6,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B2B2B2").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAIgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_7.setTransform(-67.9,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_8.setTransform(-77.7,11.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B2B2B2").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_9.setTransform(-93.1,11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B2B2B2").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_10.setTransform(-105,8.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_11.setTransform(24.9,-7.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_12.setTransform(15.1,-7.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B2B2B2").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAJAAAJAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgJAEgJAAQgKAAgKgDg");
	this.shape_13.setTransform(5.7,-7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B2B2B2").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgDADABQADgBAEADQACADAAAEQAAAEgCADQgEACgDABQgDgBgDgCg");
	this.shape_14.setTransform(-1.8,-9.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_15.setTransform(-8.5,-7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B2B2B2").s().p("AgSBGQgGgCgFgDQgEgEgDgEQgDgGAAgHQAAgLAGgHQAGgGAJgDQAJgEAJAAIATgBIAGAAIAAgCQAAgXgYAAQgPgBgMALIgIgJQANgNAZAAQAHAAAGACQAHABAEAEQAFAFADAGQACAGAAAHIAAArIABALIABAJIgNAAIgBgHIAAgHQgGAIgIAFQgIAEgKAAQgHAAgFgCgAAGAXQgHABgHACQgGACgFADQgFAFAAAGQAAAGACACQABAEAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgGQABgFAAgGIAAgHIgHAAIgMAAgAgIgqIATgdIASAAIgbAdg");
	this.shape_16.setTransform(-18.2,-9.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B2B2B2").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_17.setTransform(-28.9,-9.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B2B2B2").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_18.setTransform(-45.1,-7.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B2B2B2").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_19.setTransform(-54.9,-7.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B2B2B2").s().p("AA5AwIAAg1QAAgOgFgJQgFgHgOAAQgHAAgFADQgFADgDAFQgDAEgCAHQgBAFAAAHIAAAxIgMAAIAAg1QAAgOgFgJQgFgHgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAHAAAMIAAAwIgNAAIAAhIIgBgKIAAgLIAOAAIAAAPIAAAAQAFgJAIgEQAJgEAIAAIAIABQAFABAEABIAHAGQADAEACAGQAEgIAJgGQAJgFAJAAQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_20.setTransform(-68.5,-7.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B2B2B2").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_21.setTransform(-79.3,-7.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B2B2B2").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_22.setTransform(-89.4,-7.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B2B2B2").s().p("AApBHIhUh4IAAAAIAAB4IgPAAIAAiNIASAAIBUB3IAAAAIAAh3IAPAAIAACNg");
	this.shape_23.setTransform(-103.1,-9.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B20512").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAKABIAKADIAIAGQAFADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgFADIgIAFIgKAEIgKABQgKAAgJgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_24.setTransform(0.8,8.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_25.setTransform(-10.5,11.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B20512").s().p("AgUBJQgIgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAIgEQAKgEAKAAIAKABIAKADIAJAGQAEADADAFIABAAIAAhJIANAAIAACWIgNAAIAAgPIgBAAQgDAFgEADIgJAFIgKAEIgKABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAGgFQAEgFAEgHQACgHAAgIQAAgHgCgHQgEgHgEgFQgGgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_26.setTransform(-21.8,8.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B20512").s().p("AgFBGIAAhdIALAAIAABdgAgFg0QgDgDAAgEQAAgEADgDQADgDACAAQADAAADADQAEADAAAEQAAAEgEADQgDACgDAAQgCAAgDgCg");
	this.shape_27.setTransform(-30,9.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgQIANAAIAAARIABAAIAEgHIAGgHIAIgEQAEgCAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_28.setTransform(-34.9,11.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20512").s().p("AgfAnQgJgKAAgSIAAg6IAOAAIAAAyQgBAIACAHQABAFADAFQADAEAEACQAGACAHAAIAEgBQAGgBAEgDQAGgEADgHQAFgHAAgNIAAgvIAMAAIAABIIABAKIAAALIgNAAIAAgIIAAgIIgBAAQgCAEgEAEIgHAFIgJAEQgEABgFAAQgSAAgIgJg");
	this.shape_29.setTransform(-44.7,11.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20512").s().p("AgZBDQgLgEgJgKIAJgKQAGAHAJAGQAKAEALAAQAJAAAHgDQAHgDAEgFQAFgFACgGQACgHAAgIIAAgRIgBAAQgGAKgKAEQgJAEgKAAQgJAAgJgDQgJgEgHgGQgGgHgEgIQgEgJAAgKQAAgKAEgIQAEgKAGgGQAGgHAJgEQAJgDAKAAIAIABQAFAAAEACIAKAGQAEAEAEAFIABAAIAAgPIANAAIAABbQAAAIgCAIQgCAJgGAIQgFAGgKAFQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAEgDAHQgCAGAAAIQAAAIACAGQADAGAFAEQAFAFAGADQAGADAGAAQAIAAAGgCQAHgDAFgFQAFgDACgHQADgHAAgIQAAgIgCgGQgDgHgEgEQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_30.setTransform(-56.6,13.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAIgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_31.setTransform(-67.9,11.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_32.setTransform(-77.7,11.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_33.setTransform(-93.1,11.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20512").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_34.setTransform(-105,8.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_35.setTransform(24.9,-7.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_36.setTransform(15.1,-7.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B20512").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAJAAAJAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgJAEgJAAQgKAAgKgDg");
	this.shape_37.setTransform(5.7,-7.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B20512").s().p("AgGBFIAAhcIANAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgDADABQADgBAEADQACADAAAEQAAAEgCADQgEACgDABQgDgBgDgCg");
	this.shape_38.setTransform(-1.8,-9.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_39.setTransform(-8.5,-7.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B20512").s().p("AgSBGQgGgCgFgDQgEgEgDgEQgDgGAAgHQAAgLAGgHQAGgGAJgDQAJgEAJAAIATgBIAGAAIAAgCQAAgXgYAAQgPgBgMALIgIgJQANgNAZAAQAHAAAGACQAHABAEAEQAFAFADAGQACAGAAAHIAAArIABALIABAJIgNAAIgBgHIAAgHQgGAIgIAFQgIAEgKAAQgHAAgFgCgAAGAXQgHABgHACQgGACgFADQgFAFAAAGQAAAGACACQABAEAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgGQABgFAAgGIAAgHIgHAAIgMAAgAgIgqIATgdIASAAIgbAdg");
	this.shape_40.setTransform(-18.2,-9.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B20512").s().p("AgJBMIgKgEIgJgFQgEgDgDgFIgBAAIAAAPIgNAAIAAiWIANAAIAABJIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAIQAEAJAAAKQAAALgEAJQgEAJgGAHQgHAGgJAEQgJAEgLAAIgJgBgAgOgGQgHADgFAEQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAFAHADQAHADAHAAQAIAAAHgDQAGgDAFgFQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgEgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_41.setTransform(-28.9,-9.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_42.setTransform(-45.1,-7.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_43.setTransform(-54.9,-7.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B20512").s().p("AA5AwIAAg1QAAgOgFgJQgFgHgOAAQgHAAgFADQgFADgDAFQgDAEgCAHQgBAFAAAHIAAAxIgMAAIAAg1QAAgOgFgJQgFgHgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAHAAAMIAAAwIgNAAIAAhIIgBgKIAAgLIAOAAIAAAPIAAAAQAFgJAIgEQAJgEAIAAIAIABQAFABAEABIAHAGQADAEACAGQAEgIAJgGQAJgFAJAAQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_44.setTransform(-68.5,-7.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B20512").s().p("AgZAwIAAg/IAAgNIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAFQgDAEgCAFIgCAKIAAA0g");
	this.shape_45.setTransform(-79.3,-7.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_46.setTransform(-89.4,-7.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B20512").s().p("AApBHIhUh4IAAAAIAAB4IgPAAIAAiNIASAAIBUB3IAAAAIAAh3IAPAAIAACNg");
	this.shape_47.setTransform(-103.1,-9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).wait(2));

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

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C4C4").s().p("AgFBMIAAiXIALAAIAACXg");
	this.shape.setTransform(64.3,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4C4C4").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_1.setTransform(56.4,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C4C4").s().p("AAcAwIAAgzQgBgPgFgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAGgIQADgDAEgCIAJgEIAIgBQATAAAIAKQAJAJgBASIAAA6g");
	this.shape_2.setTransform(45.8,8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4C4C4").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_3.setTransform(34.5,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4C4C4").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_4.setTransform(24.3,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4C4C4").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_5.setTransform(17.6,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4C4C4").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_6.setTransform(7.9,8.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4C4C4").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_7.setTransform(-3.5,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4C4C4").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_8.setTransform(-21.1,8.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4C4C4").s().p("AgTBEQgJgDgHgHQgGgGgEgJQgEgKAAgKQAAgLAEgJQAEgIAGgGQAHgHAJgEQAJgEAKAAQALAAAJAEQAJAEAHAHQAGAGAEAIQAEAJAAALQAAAKgEAKQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOgKQgGADgFAFQgEADgDAHQgCAHAAAIQAAAHACAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgHQACgHAAgHQAAgIgCgHQgDgHgEgDQgFgFgGgDQgHgDgIAAQgHAAgHADgAgLgrIATgcIASAAIgaAcg");
	this.shape_9.setTransform(-32.4,6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C4C4C4").s().p("AgGBGIAAhdIAMAAIAABdgAgGg0QgCgDAAgEQAAgEACgDQADgCADAAQADAAADACQAEADAAAEQAAAEgEADQgDADgDAAQgDAAgDgDg");
	this.shape_10.setTransform(-40.7,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4C4C4").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAKAAAIAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgIAEgKAAQgKAAgKgDg");
	this.shape_11.setTransform(-47.6,8.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4C4C4").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAJAAAJAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgJAEgJAAQgKAAgKgDg");
	this.shape_12.setTransform(-57.3,8.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C4C4C4").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFAAAGIA+AAQAAgOgHgIQgIgIgPAAQgFAAgGACg");
	this.shape_13.setTransform(-68,8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C4C4").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_14.setTransform(-76.9,7.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C4C4C4").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_15.setTransform(-86.1,8.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C4C4C4").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_16.setTransform(-94.5,8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C4C4C4").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_17.setTransform(-104.4,11.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C4C4C4").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_18.setTransform(6.4,-9.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C4C4C4").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_19.setTransform(-5.6,-12.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C4C4C4").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_20.setTransform(-21.2,-9.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C4C4C4").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_21.setTransform(-31.3,-9.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C4C4C4").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_22.setTransform(-40.6,-10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C4C4C4").s().p("AAbAwIAAgzQABgPgGgIQgFgJgPAAIgFABQgEAAgFAEQgFAEgEAHQgEAHgBAMIAAAwIgNAAIAAhIIAAgJIAAgLIANAAIAAAHIAAAHIABAAIAFgHQAEgDAEgCIAJgEIAIgBQASAAAJAJQAJAKAAARIAAA7g");
	this.shape_23.setTransform(-49.6,-9.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4C4C4").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_24.setTransform(-60.5,-9.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C4C4C4").s().p("AA5AwIAAg1QAAgOgFgJQgFgHgOAAQgHAAgFADQgFADgDAFQgDAFgCAFQgBAGAAAHIAAAxIgMAAIAAg1QAAgOgFgJQgFgHgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAHAAAMIAAAwIgNAAIAAhIIgBgKIAAgKIAOAAIAAANIAAAAQAFgHAIgFQAJgEAIAAIAIABQAFABAEACIAHAFQADAFACAFQAEgIAJgGQAJgFAJAAQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_25.setTransform(-74.8,-9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C4C4C4").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFAAAGIA+AAQAAgOgHgIQgIgIgPAAQgFAAgGACg");
	this.shape_26.setTransform(-88.7,-9.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C4C4C4").s().p("AgFBLIAAiVIALAAIAACVg");
	this.shape_27.setTransform(-96.6,-12.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C4C4C4").s().p("AgsBHIAAiNIBXAAIAAANIhJAAIAAAxIBEAAIAAAMIhEAAIAAA2IBLAAIAAANg");
	this.shape_28.setTransform(-104.4,-12.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B20512").s().p("AgFBMIAAiXIALAAIAACXg");
	this.shape_29.setTransform(64.3,6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_30.setTransform(56.4,8.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B20512").s().p("AAcAwIAAgzQgBgPgFgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAGgIQADgDAEgCIAJgEIAIgBQATAAAIAKQAJAJgBASIAAA6g");
	this.shape_31.setTransform(45.8,8.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_32.setTransform(34.5,8.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_33.setTransform(24.3,8.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_34.setTransform(17.6,8.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_35.setTransform(7.9,8.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B20512").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_36.setTransform(-3.5,11.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B20512").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_37.setTransform(-21.1,8.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B20512").s().p("AgTBEQgJgDgHgHQgGgGgEgJQgEgKAAgKQAAgLAEgJQAEgIAGgGQAHgHAJgEQAJgEAKAAQALAAAJAEQAJAEAHAHQAGAGAEAIQAEAJAAALQAAAKgEAKQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOgKQgGADgFAFQgEADgDAHQgCAHAAAIQAAAHACAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgHQACgHAAgHQAAgIgCgHQgDgHgEgDQgFgFgGgDQgHgDgIAAQgHAAgHADgAgLgrIATgcIASAAIgaAcg");
	this.shape_38.setTransform(-32.4,6.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B20512").s().p("AgGBGIAAhdIAMAAIAABdgAgGg0QgCgDAAgEQAAgEACgDQADgCADAAQADAAADACQAEADAAAEQAAAEgEADQgDADgDAAQgDAAgDgDg");
	this.shape_39.setTransform(-40.7,6.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B20512").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAKAAAIAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgHADgEAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgIAEgKAAQgKAAgKgDg");
	this.shape_40.setTransform(-47.6,8.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B20512").s().p("AgMAuQgJgEgGgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAKgDAKAAQAJAAAJAEQAJAEAHAIIgLAIQgDgFgHgEQgGgDgHAAQgIAAgGACQgGADgFAFQgFAFgCAHQgDAHABAHQgBAIADAHQACAHAFAFQAFAFAGADQAGACAIAAQAHAAAGgDQAHgEADgFIALAIQgHAIgJAEQgJAEgJAAQgKAAgKgDg");
	this.shape_41.setTransform(-57.3,8.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFAAAGIA+AAQAAgOgHgIQgIgIgPAAQgFAAgGACg");
	this.shape_42.setTransform(-68,8.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_43.setTransform(-76.9,7.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_44.setTransform(-86.1,8.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_45.setTransform(-94.5,8.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B20512").s().p("AgxBNIAAiWIANAAIAAAPIABAAQADgFAEgDIAJgGIAKgDIAJgBQALAAAJAEQAJAEAHAGQAGAHAEAJQAEAJAAAKQAAALgEAJQgEAIgGAHQgHAGgJAEQgJAEgLAAIgJgBIgKgEIgJgFQgEgDgDgFIgBAAIAABJgAgOg9QgHADgFAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAFAEAHADQAHADAHAAQAIAAAHgDQAGgDAFgEQAFgFACgHQADgHAAgIQAAgHgDgHQgCgHgFgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_46.setTransform(-104.4,11.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAFAEAGADQAFACAGAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgCAFAAAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_47.setTransform(6.4,-9.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B20512").s().p("AgUBJQgJgEgGgGQgHgHgEgJQgDgJAAgLQAAgKADgJQAEgIAHgHQAGgGAJgEQAKgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgKgEgAgOgGQgGADgFAEQgEAFgDAHQgDAHAAAHQAAAIADAHQADAHAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAHgDAEgFQAGgFACgHQADgHAAgIQAAgHgDgHQgCgHgGgFQgEgEgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_48.setTransform(-5.6,-12.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_49.setTransform(-21.2,-9.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B20512").s().p("AgTAtQgJgDgHgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQAEgJAGgGQAHgHAJgEQAJgDAKAAQALAAAJADQAJAEAHAHQAGAGAEAJQAEAJAAAKQAAALgEAJQgEAJgGAGQgHAHgJADQgJAEgLAAQgKAAgJgEgAgOghQgGADgFAFQgEAFgDAGQgCAHAAAHQAAAIACAHQADAGAEAFQAFAFAGADQAHADAHAAQAIAAAHgDQAGgDAFgFQAEgFADgGQACgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgGgDQgHgDgIAAQgHAAgHADg");
	this.shape_50.setTransform(-31.3,-9.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B20512").s().p("AAFA8QgEgBgDgDQgDgCgCgFQgDgFAAgIIAAg6IgTAAIAAgMIATAAIAAgaIANAAIAAAaIAbAAIAAAMIgbAAIAAA2IABAJIACAFQACACADAAIAFABIAHgBIAHgCIAAAMQgHADgKAAIgIgBg");
	this.shape_51.setTransform(-40.6,-10.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B20512").s().p("AAbAwIAAgzQABgPgGgIQgFgJgPAAIgFABQgEAAgFAEQgFAEgEAHQgEAHgBAMIAAAwIgNAAIAAhIIAAgJIAAgLIANAAIAAAHIAAAHIABAAIAFgHQAEgDAEgCIAJgEIAIgBQASAAAJAJQAJAKAAARIAAA7g");
	this.shape_52.setTransform(-49.6,-9.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_53.setTransform(-60.5,-9.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B20512").s().p("AA5AwIAAg1QAAgOgFgJQgFgHgOAAQgHAAgFADQgFADgDAFQgDAFgCAFQgBAGAAAHIAAAxIgMAAIAAg1QAAgOgFgJQgFgHgOAAIgFABQgFAAgEAEQgFAEgDAHQgEAHAAAMIAAAwIgNAAIAAhIIgBgKIAAgKIAOAAIAAANIAAAAQAFgHAIgFQAJgEAIAAIAIABQAFABAEACIAHAFQADAFACAFQAEgIAJgGQAJgFAJAAQASAAAJAJQAIAKAAARIAAA7g");
	this.shape_54.setTransform(-74.8,-9.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAIgEQAKgDAIAAQALAAAIAEQAIADAHAHQAFAGADAIQADAJAAAKIAAAFIhNAAQABAHADAGQACAGAFAFQAEAEAHADQAGACAFAAQALAAAIgFQAHgFAFgGIAKAIQgJALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFAAAGIA+AAQAAgOgHgIQgIgIgPAAQgFAAgGACg");
	this.shape_55.setTransform(-88.7,-9.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B20512").s().p("AgFBLIAAiVIALAAIAACVg");
	this.shape_56.setTransform(-96.6,-12.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B20512").s().p("AgsBHIAAiNIBXAAIAAANIhJAAIAAAxIBEAAIAAAMIhEAAIAAA2IBLAAIAAANg");
	this.shape_57.setTransform(-104.4,-12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).wait(2));

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


(lib.Símbolo1 = function(mode,startPosition,loop) {
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
	this.mc_hand.setTransform(70.2,1.8,0.656,0.656,0,0,0,0,0.1);
	this.mc_hand.alpha = 0;
	this.mc_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_hand).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

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


(lib.Símbolo10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance_2 = new lib.Interpolación3_1("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.Interpolación4_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.18,scaleY:1.18},9).to({scaleX:1,scaleY:1},10).to({_off:true},10).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},10).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.6,-24.3,36.2,45.7);


(lib.Símbolo7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_mano = new lib.Símbolo10();
	this.mc_mano.parent = this;
	this.mc_mano.setTransform(94.6,3.3,0.72,0.72);
	this.mc_mano._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_mano).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// flash0.ai
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B5B5B5").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_56.setTransform(70.8,2.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B5B5B5").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_57.setTransform(61,2.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B5B5B5").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_58.setTransform(53.7,-0.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B5B5B5").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_59.setTransform(46.8,2.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B5B5B5").s().p("AAcAwIAAgzQgBgPgFgJQgGgIgOAAIgEABQgFABgGADQgEAEgFAHQgEAIAAALIAAAwIgMAAIAAhIIgBgKIgBgLIAOAAIAAAIIAAAIIABAAIAGgIQADgDAEgCIAJgEIAJgBQARAAAJAKQAJAJgBASIAAA6g");
	this.shape_60.setTransform(36,2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B5B5B5").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAKAIQgJALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_61.setTransform(25,2.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B5B5B5").s().p("AgZBDQgLgEgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgGQgGgHgEgIQgEgIAAgLQAAgKAEgJQAEgJAGgGQAGgGAJgFQAJgDAKAAIAIABQAFAAAEACIAKAGQAEAEAEAFIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAIgKAEQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAFgDAGQgCAHAAAHQAAAHACAHQADAHAFADQAFAFAGADQAGADAGAAQAIAAAGgCQAHgDAFgFQAFgEACgGQADgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_62.setTransform(13.1,4.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B5B5B5").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_63.setTransform(4.8,2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B5B5B5").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAIgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_64.setTransform(-4.9,2.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B5B5B5").s().p("AA5AwIAAg2QAAgNgFgJQgFgHgOAAQgHAAgFADQgFADgDAEQgDAGgCAGQgBAGAAAGIAAAxIgMAAIAAg2QAAgNgFgJQgFgHgOAAIgFABQgFABgEADQgFAEgDAHQgEAIAAALIAAAwIgNAAIAAhIIgBgKIAAgLIAOAAIAAAPIAAAAQAFgJAIgEQAJgEAIAAIAIABQAFAAAEACIAHAHQADAEACAFQAEgJAJgFQAJgFAJAAQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_65.setTransform(-19.2,2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B5B5B5").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_66.setTransform(-33.1,2.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B5B5B5").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_67.setTransform(-49.7,2.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B5B5B5").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgHADgEAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGADAIAAQAIAAAHgDQAHgDAFgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgFgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_68.setTransform(-61.7,-0.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B5B5B5").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_69.setTransform(-78.7,2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B5B5B5").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_70.setTransform(-89.6,2.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B5B5B5").s().p("AgFBMIAAiXIALAAIAACXg");
	this.shape_71.setTransform(-96.9,-0.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B5B5B5").s().p("AgrBHIAAiNIAqAAQAUAAAMAKQANAJAAATQAAATgNAJQgMAJgUAAIgbAAIAABCgAgcgHIAXAAQAIAAAHgCQAHgCAEgEQAEgDACgEQABgFAAgFQAAgFgBgFQgCgEgEgDQgEgEgHgCQgHgCgIAAIgXAAg");
	this.shape_72.setTransform(-104.5,-0.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B20512").s().p("AgTAtQgKgEgGgKIALgIQAEAHAGADQAGAEAIAAIAIgBIAHgDQADgBACgDQACgDAAgEQAAgHgFgEQgGgDgHgBIgMgDIgGgCIgIgEQgEgCgDgFQgDgEAAgHQAAgHADgGQADgFAFgDQAFgEAGgCIAMgBQAKAAAIAEQAIADAFAKIgMAHQgDgFgFgEQgFgDgHAAIgGABQgDAAgDACQgDACgCACQgBADAAAEQAAAGAEADQAFADAIADIANADQAKACAHAGQAGAGAAAKQAAAIgDAFQgDAGgFADQgFAEgHACQgGABgHAAQgKAAgJgEg");
	this.shape_73.setTransform(70.8,2.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_74.setTransform(61,2.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B20512").s().p("AgGBGIAAhdIANAAIAABdgAgGg0QgDgDAAgEQAAgEADgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_75.setTransform(53.7,-0.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B20512").s().p("AgMAuQgJgEgHgHQgGgGgEgJQgDgJAAgLQAAgKADgJQAEgJAGgGQAHgHAJgEQAKgDAJAAQAKAAAJAEQAJAEAHAIIgLAIQgEgFgFgEQgHgDgIAAQgHAAgGACQgHADgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAHAFAFQAEAFAHADQAGACAHAAQAIAAAHgDQAFgEAEgFIALAIQgHAIgJAEQgJAEgKAAQgJAAgKgDg");
	this.shape_76.setTransform(46.8,2.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B20512").s().p("AAcAwIAAgzQgBgPgFgJQgGgIgOAAIgEABQgFABgGADQgEAEgFAHQgEAIAAALIAAAwIgMAAIAAhIIgBgKIgBgLIAOAAIAAAIIAAAIIABAAIAGgIQADgDAEgCIAJgEIAJgBQARAAAJAKQAJAJgBASIAAA6g");
	this.shape_77.setTransform(36,2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAIgEQAJgDAJAAQALAAAJAEQAIADAFAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAHACAGAAQAKAAAIgFQAIgFAEgGIAKAIQgJALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgEAEQgFAEgDAGQgDAFABAGIA+AAQgBgOgHgIQgJgIgOAAQgFAAgGACg");
	this.shape_78.setTransform(25,2.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B20512").s().p("AgZBDQgLgEgJgKIAJgKQAGAIAJAEQAKAFALAAQAJAAAHgDQAHgDAEgFQAFgFACgHQACgGAAgIIAAgQIgBAAQgGAJgKAEQgJAEgKAAQgJAAgJgEQgJgDgHgGQgGgHgEgIQgEgIAAgLQAAgKAEgJQAEgJAGgGQAGgGAJgFQAJgDAKAAIAIABQAFAAAEACIAKAGQAEAEAEAFIABAAIAAgQIANAAIAABcQAAAIgCAIQgCAJgGAHQgFAIgKAEQgKAFgPAAQgNAAgLgFgAgMg4QgGADgFAFQgFAFgDAGQgCAHAAAHQAAAHACAHQADAHAFADQAFAFAGADQAGADAGAAQAIAAAGgCQAHgDAFgFQAFgEACgGQADgHAAgIQAAgHgCgHQgDgGgEgFQgFgFgHgDQgGgDgJAAQgGAAgGADg");
	this.shape_79.setTransform(13.1,4.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B20512").s().p("AgZAwIAAhAIAAgMIgBgRIANAAIAAASIABAAIAEgIIAGgGIAIgFQAEgBAHAAIAKABIgDANIgIgBQgHAAgGADQgEADgEAEQgDAFgCAFIgCAKIAAA0g");
	this.shape_80.setTransform(4.8,2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B20512").s().p("AgQAtQgJgDgGgHQgGgGgEgJQgEgJAAgLQAAgKAEgJQADgJAHgGQAGgHAJgEQAIgDAJAAQALAAAJAEQAHADAGAHQAGAGADAIQADAJAAAKIAAAFIhNAAQAAAHADAGQADAGAFAFQAFAEAFADQAGACAHAAQAKAAAIgFQAIgFADgGIAKAIQgIALgKAFQgKAEgLAAQgKAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_81.setTransform(-4.9,2.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B20512").s().p("AA5AwIAAg2QAAgNgFgJQgFgHgOAAQgHAAgFADQgFADgDAEQgDAGgCAGQgBAGAAAGIAAAxIgMAAIAAg2QAAgNgFgJQgFgHgOAAIgFABQgFABgEADQgFAEgDAHQgEAIAAALIAAAwIgNAAIAAhIIgBgKIAAgLIAOAAIAAAPIAAAAQAFgJAIgEQAJgEAIAAIAIABQAFAAAEACIAHAHQADAEACAFQAEgJAJgFQAJgFAJAAQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_82.setTransform(-19.2,2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_83.setTransform(-33.1,2.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B20512").s().p("AgQAtQgIgDgHgHQgHgGgDgJQgEgJAAgLQAAgKADgJQAFgJAFgGQAHgHAJgEQAIgDAJAAQALAAAIAEQAJADAGAHQAFAGADAIQADAJAAAKIAAAFIhNAAQAAAHAEAGQACAGAFAFQAEAEAHADQAFACAGAAQALAAAIgFQAHgFAEgGIAKAIQgIALgKAFQgKAEgMAAQgJAAgJgEgAgKgiQgGADgFAEQgEAEgDAGQgCAFgBAGIA+AAQABgOgJgIQgHgIgPAAQgFAAgGACg");
	this.shape_84.setTransform(-49.7,2.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B20512").s().p("AgTBJQgJgEgHgGQgGgHgEgJQgEgJAAgLQAAgKAEgJQAEgIAGgHQAHgGAJgEQAJgEAKAAIAJABIAKADIAJAGQAFADADAFIAAAAIAAhJIAOAAIAACWIgOAAIAAgPIAAAAQgDAFgFADIgJAFIgKAEIgJABQgKAAgJgEgAgOgGQgHADgEAEQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAEAFAHADQAGADAIAAQAIAAAHgDQAHgDAFgFQAFgFADgHQACgHAAgIQAAgHgCgHQgDgHgFgFQgFgEgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_85.setTransform(-61.7,-0.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B20512").s().p("AAcAwIAAgzQAAgPgGgJQgGgIgOAAIgFABQgEABgGADQgEAEgFAHQgDAIAAALIAAAwIgOAAIAAhIIAAgKIgBgLIAOAAIABAIIAAAIIAAAAIAFgIQAEgDAEgCIAJgEIAIgBQASAAAJAKQAIAJAAASIAAA6g");
	this.shape_86.setTransform(-78.7,2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B20512").s().p("AgSAwQgGgCgFgEQgEgDgDgFQgDgFAAgHQAAgMAGgGQAGgGAJgDQAJgDAJgBIATgBIAGAAIAAgCQAAgYgYAAQgPAAgMALIgIgKQANgNAZAAQAHAAAGACQAHACAEAEQAFAEADAGQACAGAAAJIAAApIABALIABAKIgNAAIgBgIIAAgHQgGAJgIAEQgIAEgKAAQgHAAgFgBgAAGABQgHAAgHACQgGACgFAEQgFAEAAAHQAAAFACADQABADAEACIAHADIAIABQAGAAAFgCQAGgDADgEQAEgEACgFQABgGAAgGIAAgHIgHAAIgMABg");
	this.shape_87.setTransform(-89.6,2.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B20512").s().p("AgFBMIAAiXIALAAIAACXg");
	this.shape_88.setTransform(-96.9,-0.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B20512").s().p("AgrBHIAAiNIAqAAQAUAAAMAKQANAJAAATQAAATgNAJQgMAJgUAAIgbAAIAABCgAgcgHIAXAAQAIAAAHgCQAHgCAEgEQAEgDACgEQABgFAAgFQAAgFgBgFQgCgEgEgDQgEgEgHgCQgHgCgIAAIgXAAg");
	this.shape_89.setTransform(-104.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).wait(2));

	// Estados
	this.instance_3 = new lib.Mapadebits3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-123,-27);

	this.instance_4 = new lib.Mapadebits5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-123,-27);

	this.instance_5 = new lib.Mapadebits4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-123,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3},{t:this.instance_4}]},1).to({state:[{t:this.instance_3},{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-27,246,53);


(lib.Símbolo29 = function(mode,startPosition,loop) {
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


(lib.Símbolo28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Mano
	this.mc_hand = new lib.Símbolo10_1();
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


// stage content:
(lib.pag1 = function(mode,startPosition,loop) {
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
			console.log("Acutal Modulo", estructura.actModulo);
			$("#vid").attr("controlsList", "nodownload nofullscreen noremoteplayback");
			mc.btn_fondo.cursor = "default";
			mc.mc_precarga.alpha = 0;
			//mc.mc_feedback.alpha = 0;
			mc.controlMenu();
		
			watchVideo(videos[estructura.modulos[estructura.actModulo].temas[estructura.actTemaTecuidas].path]);
		
			mc.btn_backMenu.addEventListener("mousedown", backMenu);
		
		}
		
		function watchContent(evt) {
			createjs.Sound.stop();
			var num = evt.currentTarget.num;
			estructura.actTemaTecuidas = num;
			//mc.mc_instrucciones.alpha = 0;
			var cargar = estructura.actModulo.toString() + estructura.actTemaTecuidas.toString();
			var obj = evt.currentTarget;
		
			
			
			if(num == 5){
				obj.mc_mano.alpha = 0;
			}else{
				obj.mc_hand.alpha = 0;
			}
		
			if (obj.tipo == "video") {
				mc_contenido.mc_vacio.removeAllChildren();
				watchVideo(videos[estructura.modulos[estructura.actModulo].temas[estructura.actTemaTecuidas].path]);
			} else if (obj.tipo == "slide") {
				hidenVideo();
				cargarSubArchivo("pag" + cargar);
			}
		
			console.log("boton elegido",num)
		}
		
		function finalVideo(evt) {
			finTema(true, estructura.actTemaTecuidas);
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
			hidenVideo();
			salirPrincipal(false);
		}
		
		function finish(evt) {
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

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B20512").s().p("AgaA2QgLgDgJgIIAVgXQAEAGAGADQAGADAIAAQAFAAAEgCQAFgCAAgEQAAgFgGgDIgNgDIgRgFQgIgDgGgGQgGgGAAgNQAAgNAHgIQAGgIALgEQAKgEALAAQALAAALADQALAEAIAIIgVAUQgEgEgFgDQgFgCgGAAQgDAAgEACQgEACAAAFQAAAFAGACQAEACAJACIARAEQAIADAGAGQAGAHAAAMQAAALgFAHQgEAHgHAEQgIAEgJACQgJACgIAAQgLAAgMgEg");
	this.shape.setTransform(621.9,70.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B20512").s().p("AggA2QgJgEgFgIQgGgHAAgLQAAgOAIgIQAHgHAMgEQALgEANAAIAXgBQgBgJgGgFQgGgGgJAAQgHAAgHAEQgHADgGAGIgSgSQAKgJAMgEQANgFANAAQATAAALAHQALAGAFANQAEANAAASIAAA3IgfAAIAAgOIgBAAQgGAJgJAEQgIAEgLAAQgKAAgJgEgAgGAJQgGABgDAEQgEADAAAFQAAAFACACIAGAEIAIABQAGAAAGgCQAFgCAEgFQAEgEAAgHIAAgHIgJAAIgJAAIgKACg");
	this.shape_1.setTransform(610.5,70.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B20512").s().p("AghBPQgMgHgHgNQgHgMAAgRQABgQAGgNQAFgMAMgIQALgJAQAAQAJABAJADQAJADAHAIIAAAAIAAhJIAiAAIAACqIggAAIAAgPIAAAAQgDAFgFADQgEAFgHACQgHADgHAAQgQAAgMgIgAgRAJQgIAIAAAMQAAAMAIAIQAGAHAMABQAOgBAGgHQAIgIgBgMQABgMgIgIQgGgHgOgBQgMABgGAHg");
	this.shape_2.setTransform(597.1,67.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B20512").s().p("AgQBSIAAhtIAhAAIAABtgAgNgwQgFgFgBgIQABgJAFgGQAGgFAHAAQAIAAAGAFQAGAGAAAJQAAAIgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_3.setTransform(587.4,67.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B20512").s().p("AglAyQgJgIgDgLQgDgMAAgOIAAg9IAiAAIAAA2IABANQABAGADAFQAEAEAJAAQAIAAAEgEQAEgDACgHQABgGAAgHIAAg3IAiAAIAABtIghAAIAAgOQgCAEgFAEQgEAEgGACQgGADgIABQgRgBgJgGg");
	this.shape_4.setTransform(578,70.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B20512").s().p("AgTAyQgNgHgJgNQgHgNgBgRQABgRAHgNQAJgNANgHQAOgHAQAAQAKAAAKAEQALADAIAIIgWAXQgDgDgEgDQgFgCgFAAQgLAAgIAIQgHAHAAAMQAAAMAHAIQAIAHALABQAFAAAFgDIAHgGIAWAYQgIAIgLADQgKAEgKAAQgQgBgOgHg");
	this.shape_5.setTransform(566.5,70.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B20512").s().p("AgZAyQgOgHgIgNQgIgMAAgSQAAgRAIgNQAIgNAOgHQAOgHAQAAQAQAAALAHQAMAHAGANQAGANAAARIAAAKIhNAAQACAKAHAGQAGAGAJAAQAJAAAFgEQAGgEAFgGIAXASQgIAKgMAGQgNAFgNABQgQgBgOgHgAAXgMQAAgIgGgGQgGgGgJAAQgHAAgFADQgFADgDAEQgDAFAAAFIAsAAIAAAAg");
	this.shape_6.setTransform(547.5,70.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B20512").s().p("AgBBFQgJgDgEgIQgGgHAAgMIAAgzIgVAAIAAgbIAVAAIAAghIAhAAIAAAhIAeAAIAAAbIgeAAIAAAkIABAKQABAFADACQAEADAHAAIAHgBQAEAAADgCIAAAcQgGACgGABIgMABQgLAAgJgEg");
	this.shape_7.setTransform(536.2,68.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B20512").s().p("AglBLQgJgIgDgLQgDgMAAgOIAAg9IAiAAIAAA1IABAOQABAGADAFQAEAEAJAAQAIAAAEgEQAEgDACgHQABgGAAgIIAAg2IAiAAIAABtIghAAIAAgOQgCAEgFAEQgEAEgGACQgGADgIABQgRgBgJgGgAgVgwIAVggIAuAAIgnAgg");
	this.shape_8.setTransform(518.6,67.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B20512").s().p("AgRBQIAAiAIgtAAIAAgfIB9AAIAAAfIgtAAIAACAg");
	this.shape_9.setTransform(505.7,67.6);

	this.instance = new lib.Mapadebits14();
	this.instance.parent = this;
	this.instance.setTransform(489,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// flash0.ai
	this.btn_backMenu = new lib.Símbolo12();
	this.btn_backMenu.parent = this;
	this.btn_backMenu.setTransform(377.8,73);

	this.instance_1 = new lib.Mapadebits2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.btn_backMenu}]}).wait(2));

	// Buttons
	this.mc_obj6 = new lib.Símbolo28();
	this.mc_obj6.parent = this;
	this.mc_obj6.setTransform(123.2,478.2);

	this.mc_obj5 = new lib.Símbolo7_1();
	this.mc_obj5.parent = this;
	this.mc_obj5.setTransform(123.2,424.6);

	this.mc_obj7 = new lib.Símbolo29();
	this.mc_obj7.parent = this;
	this.mc_obj7.setTransform(123.3,532.5);

	this.mc_obj4 = new lib.Símbolo8();
	this.mc_obj4.parent = this;
	this.mc_obj4.setTransform(123.3,371);

	this.mc_obj3 = new lib.Símbolo7();
	this.mc_obj3.parent = this;
	this.mc_obj3.setTransform(123.3,317.3);

	this.mc_obj0 = new lib.Símbolo1();
	this.mc_obj0.parent = this;
	this.mc_obj0.setTransform(123.3,153.8);

	this.mc_obj1 = new lib.Símbolo2();
	this.mc_obj1.parent = this;
	this.mc_obj1.setTransform(123.3,207.3);

	this.mc_obj2 = new lib.Símbolo4();
	this.mc_obj2.parent = this;
	this.mc_obj2.setTransform(123.3,262.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EgTNAvYMAAAhevMAmbAAAMAAABevg");
	this.shape_10.setTransform(123.3,416.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.mc_obj2},{t:this.mc_obj1},{t:this.mc_obj0},{t:this.mc_obj3},{t:this.mc_obj4},{t:this.mc_obj7},{t:this.mc_obj5},{t:this.mc_obj6}]}).wait(2));

	// Fondo
	this.instance_2 = new lib.Mapadebits1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

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
		{src:"images/pag1_atlas_.png", id:"pag1_atlas_"},
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