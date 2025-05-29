var gCtx = null;
var gCanvas = null;
var c = 0;
var stype = 0;
var gUM = false;
var webkit = false;
var moz = false;
var v = null;
var cameraOn = 0;

var imghtml = '<div id="qrfile"><canvas id="out-canvas" width="320" height="240"></canvas>' +
    '<div id="imghelp">drag and drop a QRCode here' +
    '<br>or select a file' +
    '<input type="file" onchange="handleFiles(this.files)"/>' +
    '</div>' +
    '</div>';

var vidhtml = '<video id="v" class="img-responsive img-thumbnail" style="margin-left: auto; margin-right: auto;" width="600" height="600" autoplay controls></video>';

function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
}
function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    var dt = e.dataTransfer;
    var files = dt.files;
    if (files.length > 0) {
        handleFiles(files);
    }
    else
        if (dt.getData('URL')) {
            qrcode.decode(dt.getData('URL'));
        }
}

function handleFiles(f) {
    var o = [];

    for (var i = 0; i < f.length; i++) {
        var reader = new FileReader();
        reader.onload = (function (theFile) {
            return function (e) {
                gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);

                qrcode.decode(e.target.result);
            };
        })(f[i]);
        reader.readAsDataURL(f[i]);
    }
}

function initCanvas(w, h) {
    gCanvas = document.getElementById("qr-canvas");
    gCanvas.style.width = w + "px";
    gCanvas.style.height = h + "px";
    gCanvas.width = w;
    gCanvas.height = h;
    gCtx = gCanvas.getContext("2d");
    gCtx.clearRect(0, 0, w, h);
}


function captureToCanvas() {
    if (stype != 1)
        return;
    if (gUM) {
        try {
            gCtx.drawImage(v, 0, 0);
            try {
                qrcode.decode();
            }
            catch (e) {
                // console.log(e);
                setTimeout(captureToCanvas, 500);
            };
        }
        catch (e) {
            // console.log(e);
            setTimeout(captureToCanvas, 500);
        };
    }
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// function read(a) {
//     var readResults = htmlEntities(a);
//     //process the various authentications and give feedback to the user

//     // $('#send_qr_feedback').html(readResults);

//     // for debugging
//     console.log(readResults);

//     setwebcam();
// }

function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}
function success(stream) {

    v.srcObject = stream;
    v.play();

    cameraOn = 1;
    gUM = true;
    setTimeout(captureToCanvas, 500);
}

function error(error) {
    gUM = false;
    return;
}

function load() {
    if (isCanvasSupported() && window.File && window.FileReader) {
        initCanvas(1600, 1200);
        qrcode.callback = read;
        // document.getElementById("mainbody").style.display = "inline";
        setwebcam();
    }
    else {
        document.getElementById("mainbody").style.display = "inline";
        var a = document.getElementById("qr_not_supported");
        var b = document.getElementById("qr_supported");
        a.style.display = "block";
        b.style.display = "none";

      }
}


// function setwebcam3() {
//     console.log('wevcam 3')
//     var options = true;
//     if(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
//         try {
//             navigator.mediaDevices.enumerateDevices()
//                 .then(function(devices) {
//                     devices.forEach(function(device) {
//                         if(device.kind === 'videoinput') {
//                             if(device.label.toLocaleLowerCase().search("back") > -1) {
//                                 options={'deviceId': {'exact':device.deviceId}, 'facingMode':'environment'};
//                             } else {
//                                 options={'deviceId': {'exact':device.deviceId}, 'facingMode':'user'};
//                             }
//                         }
//                     }
//                 })

//         } catch {

//         }
//     }
// }


function setwebcam() {
    var options = true;	
    // var options = { facingMode: { exact: "environment" } } ;

    if(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)	{
        try{
            navigator.mediaDevices.enumerateDevices()
                .then(function(devices) {
                    devices.forEach(function(device) {
                        if (device.kind === 'videoinput') {
                            if(device.label.toLowerCase().search("back") >-1) {
                                options={'deviceId': {'exact':device.deviceId}, 'facingMode': { exact: "environment" } } ;
                            } 
                        }
                        // console.log(device.kind + ": " + device.label +" id = " + device.deviceId);
                    });
                    setwebcam2(options);
                });
        }
        catch(e)
        {
            console.log(e);
        }
    }
    else{
        console.log("no navigator.mediaDevices.enumerateDevices" );
        setwebcam2(options);
    }
}

function setwebcam2(options) {

    // console.log(options);

    document.getElementById("result").innerHTML = "Searching for QR code..";
    if (stype == 1) {
        setTimeout(captureToCanvas, 500);
        return;
    }
    var n = navigator;
    document.getElementById("outdiv").innerHTML = vidhtml;
    v = document.getElementById("v");
    

    // console.log("Here: now");
    

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({ video: options, audio: false })
            .then(function (stream) {
                success(stream);
            }).catch(function (error) {
                // error(error);
                console.log(error);
            });
    }
    else
        if (n.getUserMedia) {
            webkit = true;
            n.getUserMedia({ video: options, audio: false }, success, error)
                .then(function (stream) {
                    success(stream);
                }).catch(function (error) {
                    // error(error);
                    console.log(error);
                });
        }
        else
            if (n.webkitGetUserMedia) {
                webkit = true;
                n.webkitGetUserMedia({ video: options, audio: false }, success, error)
                    .then(function (stream) {
                        success(stream);
                    }).catch(function (error) {
                        // error(error);
                        console.log(error);
                    });
            }

    // document.getElementById("qrimg").style.opacity = 0.2;
    // document.getElementById("webcamimg").style.opacity = 1.0;

    stype = 1;
    setTimeout(captureToCanvas, 500);
}

function setimg() {
    document.getElementById("result").innerHTML = "";
    if (stype == 2)
        return;
    document.getElementById("outdiv").innerHTML = imghtml;
    //document.getElementById("qrimg").src="qrimg.png";
    //document.getElementById("webcamimg").src="webcam2.png";
    // document.getElementById("qrimg").style.opacity = 1.0;
    // document.getElementById("webcamimg").style.opacity = 0.2;
    var qrfile = document.getElementById("qrfile");
    qrfile.addEventListener("dragenter", dragenter, false);
    qrfile.addEventListener("dragover", dragover, false);
    qrfile.addEventListener("drop", drop, false);
    stype = 2;
}
