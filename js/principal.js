var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {

    if (!initCourse()) {
        return;
    }
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    images = images || {};
    ss = ss || {};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
function handleComplete(evt) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    exportRoot = new lib.index();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.enableMouseOver();
    //Registers the "tick" event listener.
    fnStartAnimation = function () {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS = 1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
            if (isResp) {
                if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
                    sRatio = lastS;
                }
                else if (!isScale) {
                    if (iw < w || ih < h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }
    makeResponsive(true, 'both', false, 1);
    fnStartAnimation();
}

//////////////////CARGAR ARCHIVO//////////////////////
var nombre_slide = "pag"
var actPag = "";
var mc_contenido;

function cargarArchivo(num) {
    actPag = num;
    //manejo principal
    exportRoot.mc_vacio.alpha = 0.1;

    exportRoot.mc_precarga.alpha = 1;
    exportRoot.mc_precarga.txt.text = "";

    //que cargue por partes
    var load_js = new createjs.LoadQueue(false);
    load_js.installPlugin(createjs.Sound); //para instalar el sonido de createjs
    load_js.loadFile({ src: nombre_slide + num + ".js?" + Math.random() * 999999, type: "javascript", id: nombre_slide + num }, true); //math.random genera numeros al azar para el cache
    load_js.addEventListener("progress", progreso);
    load_js.addEventListener("complete", jscompleto);

    function progreso(evt) {
        var por = Math.floor(evt.progress * 100);
        //console.log(por+"%");
        exportRoot.mc_precarga.txt.text = "Cargando:" + por + "%";
    }

    function jscompleto(evt) {

        exportRoot.mc_precarga.txt.text = "";

        if (lib.properties.manifest.length > 0) {
            var cargador = new createjs.LoadQueue(true);
            createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]);
            cargador.installPlugin(createjs.Sound);
            cargador.addEventListener("progress", progreso);
            cargador.addEventListener("fileload", arch_cargado);
            cargador.addEventListener("complete", viewPag);
            cargador.loadManifest(lib.properties.manifest);
        } else {
            viewPag(evt);
        }
    }

    function arch_cargado(evt) {
        if (evt.item.type == "image") {
            images[evt.item.id] = evt.result;
        }
    }
}
function viewPag(evt) {

    exportRoot.mc_precarga.alpha = 0;
    exportRoot.mc_precarga.txt.text = "";

    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;

    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }

    console.log(nombre_slide + actPag);

    mc_contenido = new lib[nombre_slide + actPag]();

    if (exportRoot.mc_vacio.numChildren > 0) {
        exportRoot.mc_vacio.removeAllChildren();
    }

    exportRoot.mc_vacio.alpha = 1;
    exportRoot.mc_vacio.addChild(mc_contenido);

    canvas.focus();


}

//////////////////CARGAR ARCHIVO//////////////////////

function playSound(id, loop) {
    return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}

///////////////////////SUBARCHIVOS////////////////////////////////////////////////////////////////
var actSubArchivo;
var mcSubContenido;

function cargarSubArchivo(path) {

    actSubArchivo = path;

    mc_contenido.mc_vacio.alpha = 0.1;
    mc_contenido.mouseEnabled = false;

    mc_contenido.mc_precarga.alpha = 1;
    mc_contenido.mc_precarga.txt.text = "";

    var load_js = new createjs.LoadQueue(true);
    load_js.loadFile({ src: path + ".js?" + Math.random() * 999999, type: "javascript", id: path }, true);
    load_js.addEventListener("progress", subProgreso);
    load_js.addEventListener("complete", subJsCompleto);

    function subProgreso(evt) {
        var por = Math.floor(evt.progress * 100);
        //console.log(por+"%");
        mc_contenido.mc_precarga.txt.text = "Cargando:" + por + "%";
    }

    function subJsCompleto(evt) {

        mc_contenido.mc_precarga.txt.text = "";

        if (lib.properties.manifest.length > 0) {
            var cargador = new createjs.LoadQueue(true);
            cargador.installPlugin(createjs.Sound);
            cargador.addEventListener("progress", subProgreso);
            cargador.addEventListener("fileload", subCargado);
            cargador.addEventListener("complete", verSubPag);
            cargador.loadManifest(lib.properties.manifest);
        } else {
            verSubPag(evt);
        }
    }

    function subCargado(evt) {
        if (evt.item.type == "image") {
            images[evt.item.id] = evt.result;
        }
    }
}

function verSubPag(evt) {

    mc_contenido.mc_precarga.alpha = 0;
    mc_contenido.mc_precarga.txt.text = "";

    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;

    for (i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
    }
    console.log(actSubArchivo);
    mcSubContenido = new lib[actSubArchivo]();

    if (mc_contenido.mc_vacio.numChildren > 0) {
        mc_contenido.mc_vacio.removeAllChildren();
    }

    mc_contenido.mc_vacio.alpha = 1;
    mc_contenido.mouseEnabled = true;
    mc_contenido.mc_vacio.addChild(mcSubContenido);

    canvas.focus();

}
//////////////////////////////////////////////////////////////////////////////////////

function salirPrincipal(guardar) {
    if (guardar) {
        if (estructura.modulos[estructura.actModulo].estado != 2) {
            estructura.modulos[estructura.actModulo].estado = 2;
            if (estructura.actModulo + 1 < estructura.modulos.length) {
                if (estructura.modulos[estructura.actModulo].estado === 2) {
                    estructura.modulos[estructura.actModulo + 1].estado = 1;
                }
            } else {
                exportRoot.verFinal();
            }
            guardar_datos();
        }
    }
    exportRoot.menu();
    exportRoot.mc_vacio.removeAllChildren();
}

function finTema(save, tema) {
    if (save) {
        if (estructura.modulos[estructura.actModulo].temas[tema].estado != 2) {
            estructura.modulos[estructura.actModulo].temas[tema].estado = 2;
            tema++
            console.log("Tema Actual", tema);
            if (tema < estructura.modulos[estructura.actModulo].temas.length) {

                if (estructura.modulos[estructura.actModulo].temas[tema].estado == 0) {
                    estructura.modulos[estructura.actModulo].temas[tema].estado = 1;
                }

            } else {
                console.log("Finalizo");
            }
            guardar_datos();
        }

    }
    mc_contenido.controlMenu();

}



/////////////////////////////SCORM 1.2///////////////

var scorm = pipwerks.SCORM; //Shortcut
var lmsConnected = false;
var datos_curso;
var estado_data;
var unloaded = false;

//Agregar para scorm al cerrar ventana
window.onbeforeunload = unloadHandler;
window.onunload = unloadHandler;

function handleError(msg) {
    //alert(msg);
}

function unloadHandler() {
    if (!unloaded) {
        guardar_tiempo();
        guardar_datos();
        scorm.save(); //save all data that has already been sent

        scorm.set("cmi.core.exit", "suspend");
        scorm.quit(); //close the SCORM API connection properly
        unloaded = true;
    }
}

function initCourse() {
    scorm.version = "1.2"

    scorm.handleCompletionStatus = false;
    scorm.handleExitMode = false;
    lmsConnected = scorm.init();

    if (lmsConnected) {

        //////////////////////Iniciar tiempo///////////////////
        startTimeStamp = new Date();

        completionstatus = scorm.get("cmi.core.lesson_status");
        console.log(completionstatus);

        if (completionstatus === "not attempted") {
            scorm.set("cmi.core.lesson_status", "incomplete");
        }

        if (completionstatus === "completed" || completionstatus === "passed") {
            handleError("Ya has completado este curso, deseas volver a verlo");
        }

    } else {
        handleError("Error: Curso no conectado a la plataforma");
    }

    return lmsConnected;

}

function guardar_tiempo() {
    //record the session time
    var endTimeStamp = new Date();
    var totalMilliseconds = (endTimeStamp.getTime() - startTimeStamp.getTime());
    var scormTime = ConvertMilliSecondsToSCORMTime(totalMilliseconds, false);

    scorm.set("cmi.core.session_time", scormTime);
    // console.log("Tiempo",scormTime);
}

function setComplete(puntaje) {

    if (lmsConnected) {

        if (scorm.get("cmi.core.lesson_status") != "passed") {
            scorm.set("cmi.core.lesson_status", "passed");
            scorm.set("cmi.core.score.raw", puntaje);
            scorm.save();
        }
    } else {
        handleError("Error: Curso no conectado al LMS");
    }

}

function crear_estructura() {
    estado_data = scorm.get("cmi.suspend_data");
    //console.log(estado_data, typeof(estado_data));

    if (estado_data == "") {
        datos_curso = estructura;
    } else {
        cargar_datos(estado_data);
        return;
    }

    console.log(datos_curso);

    scorm.set("cmi.suspend_data", JSON.stringify(datos_curso));
    scorm.save();
}

function cargar_datos(data) {

    datos_curso = JSON.parse(data);
    estructura = datos_curso;
    console.log("Cargar datos", datos_curso);

}

function guardar_datos() {

    datos_curso = estructura;

    scorm.set("cmi.core.score.raw", calcular_progreso());

    scorm.set("cmi.suspend_data", JSON.stringify(datos_curso));
    scorm.save();

    console.log("Avance", calcular_progreso(), "Guardar datos", datos_curso);
}
function calcular_progreso() {
    var con_avance = 0;
    var total_modulos = estructura.modulos.length;
    var totalTemas = 0;

    for (var i = 0; i < total_modulos; i++) {

        for (var j = 0; j < estructura.modulos[i].temas.length; j++) {

            totalTemas++;

            if (estructura.modulos[i].temas[j].estado == 2) {
                con_avance++;
            }
        }

    }

    // Plataforma EUNO
    scorm.set("cmi.core.lesson_status", "passed");

    console.log("avance", con_avance, "total temas", totalTemas);
    return Math.round(con_avance / totalTemas * 100);
}

//SCORM requires time to be formatted in a specific way
function ConvertMilliSecondsToSCORMTime(intTotalMilliseconds, blnIncludeFraction) {

    var intHours;
    var intintMinutes;
    var intSeconds;
    var intMilliseconds;
    var intHundredths;
    var strCMITimeSpan;

    if (blnIncludeFraction == null || blnIncludeFraction == undefined) {
        blnIncludeFraction = true;
    }

    //extract time parts
    intMilliseconds = intTotalMilliseconds % 1000;

    intSeconds = ((intTotalMilliseconds - intMilliseconds) / 1000) % 60;

    intMinutes = ((intTotalMilliseconds - intMilliseconds - (intSeconds * 1000)) / 60000) % 60;

    intHours = (intTotalMilliseconds - intMilliseconds - (intSeconds * 1000) - (intMinutes * 60000)) / 3600000;

    /*
    deal with exceptional case when content used a huge amount of time and interpreted CMITimstamp 
    to allow a number of intMinutes and seconds greater than 60 i.e. 9999:99:99.99 instead of 9999:60:60:99
    note - this case is permissable under SCORM, but will be exceptionally rare
    */

    if (intHours == 10000) {
        intHours = 9999;

        intMinutes = (intTotalMilliseconds - (intHours * 3600000)) / 60000;
        if (intMinutes == 100) {
            intMinutes = 99;
        }
        intMinutes = Math.floor(intMinutes);

        intSeconds = (intTotalMilliseconds - (intHours * 3600000) - (intMinutes * 60000)) / 1000;
        if (intSeconds == 100) {
            intSeconds = 99;
        }
        intSeconds = Math.floor(intSeconds);

        intMilliseconds = (intTotalMilliseconds - (intHours * 3600000) - (intMinutes * 60000) - (intSeconds * 1000));
    }

    //drop the extra precision from the milliseconds
    intHundredths = Math.floor(intMilliseconds / 10);

    //put in padding 0's and concatinate to get the proper format
    strCMITimeSpan = ZeroPad(intHours, 4) + ":" + ZeroPad(intMinutes, 2) + ":" + ZeroPad(intSeconds, 2);

    if (blnIncludeFraction) {
        strCMITimeSpan += "." + intHundredths;
    }

    //check for case where total milliseconds is greater than max supported by strCMITimeSpan
    if (intHours > 9999) {
        strCMITimeSpan = "9999:99:99";

        if (blnIncludeFraction) {
            strCMITimeSpan += ".99";
        }
    }

    return strCMITimeSpan;
}

function ZeroPad(intNum, intNumDigits) {
    var strTemp;
    var intLen;
    var i;

    strTemp = new String(intNum);
    intLen = strTemp.length;

    if (intLen > intNumDigits) {
        strTemp = strTemp.substr(0, intNumDigits);
    }
    else {
        for (i = intLen; i < intNumDigits; i++) {
            strTemp = "0" + strTemp;
        }
    }

    return strTemp;
}
