function isEmpty(str) {
    str = str.trim();
    return (!str || 0 === str.length);
}

function revertCamera() {

    startCamera();
}

function remove_hash_from_url() {
    var uri = window.location.toString();
    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("#"));
        window.history.replaceState({}, document.title, clean_uri);
    }
}

const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;

const baseValueRegex = /base:(0x[a-fA-F0-9]{40})\?value=([0-9]*\.?[0-9]*)/;

const ethereumFormatRegex = /^ethereum:(0x[a-fA-F0-9]{40})(?:@(\d+))?$/;

function extractAddressAndAmount(input) {
    let result = {};

    if (ethAddressRegex.test(input)) {
        result.address = input;
    } 
    
    else if (baseValueRegex.test(input)) {
        const matches = input.match(baseValueRegex);
        if (matches && matches[1]) {
            result.address = matches[1];
            result.amount = parseFloat(matches[2]);
        }
    } 
    
    else if (ethereumFormatRegex.test(input)) {
        const matches = input.match(ethereumFormatRegex);
        if (matches && matches[1]) {
            result.address = matches[1];
            if (matches[2]) {
                result.chainId = parseInt(matches[2], 10);
            }
        }
    } 
    
    else {
        throw new Error("Invalid format: Input does not match a valid Ethereum address, base format, or ethereum format.");
    }

    if (!ethAddressRegex.test(result.address)) {
        throw new Error("Invalid address format");
    }

    return result;
}

function read(a) {
    var readResults = htmlEntities(a);

    aLength = a.length;
   
    console.log(readResults);

    $('#send_qr_feedback').html(readResults);
    
    try {
        var qr_address_data = extractAddressAndAmount(readResults);

        console.log(qr_address_data.address);

        const toAddressInput = document.getElementById("qr_address");
        toAddressInput.value = qr_address_data.address;

        setToAddress(qr_address_data.address);

        document.getElementById("scan_for_address").style.display = "none";
        document.getElementById("qr_error").style.display = "none";
        document.getElementById("stage2").style.display = "block";
        closeCamera();

        const qr_address_disp = document.getElementById("qr_address_disp");
        if (qr_address_disp) {
            qr_address_disp.textContent = qr_address_data.address;
        }

    } catch (error) {
        console.error(error.message);
        document.getElementById("scan_for_address").style.display = "none";
        document.getElementById("qr_error").style.display = "block";
        closeCamera();
    }

}





function startCamera() {

    if (cameraOn == 0) {
        $('#send_qr_feedback').html('');

        gCtx = null;
        gCanvas = null;
        c = 0;
        stype = 0;
        gUM = false;
        webkit = false;
        moz = false;

        load();

    } else {
        window.location.href = "#send_qr_feedback";
        remove_hash_from_url();
    }

}

function closeCamera() {

    cameraOn = 0;
    v.srcObject.getVideoTracks().forEach(track => track.stop());

    $('#outdiv').html('<video id="v_test" class="img-responsive img-thumbnail" style="margin-left: auto; margin-right: auto;" width="600" height="600" autoplay controls></video>');
    window.location.href = "#send_qr_feedback";
    remove_hash_from_url();

    gCtx = null;
    gCanvas = null;
    c = 0;
    stype = 0;
    gUM = false;
    webkit = false;
    moz = false;
}