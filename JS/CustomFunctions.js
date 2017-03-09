function updateOutput(previewElement, outputElement) {
    var output;
    if (previewElement == "#headerPreview") {
        output = updateHeaderOutput();
    } else if (previewElement == "#contactPreview") {
        output = updateContactOutput();
    } else if (previewElement == "#featuresPreview") {
        output = updateFeaturesOutput();
    } else if (previewElement == "#vouchesPreview") {
        output = updateVouchesOutput();
    }
    $(outputElement).val(output);
    updatePreview(output, previewElement);
}
// Parse output (mycode) to preview (html)
function updatePreview(output, outContainer) {
    // Instanciate xbb
    var preview = XBBCODE.process({
        text: output,
        removeMisalignedTags: false,
        addInLineBreaks: true
    });
    $(outContainer).html(preview.html);
}
// Check if hex string is valid
function isHexaColor(sNum) {
    return (typeof sNum === "string") && sNum.length === 6
           && !isNaN(parseInt(sNum, 16));
}
// toggle Sub Header Inputs
function toggleHeaderSubInputs(state) {
    // Sub Header Text
    $("#threadSubText").prop("disabled", state);
    // Sub Header Text Color/ Sub Header Text Underline Color
    if (state) {
        $("#headerSubColor").colorpicker('disable');
        $("#headerSubUnderlineColor").colorpicker('disable');
    } else {
        $("#headerSubColor").colorpicker('enable');
        $("#headerSubUnderlineColor").colorpicker('enable');
    }
    // Sub Header Underline
    $("#headerSubUnderline").prop("disabled", state);
    // Sub Header Size
    if (state) {
        $(".headerSubSizeLabel").addClass("disabled");
        $(".headerSubSizeLabel").removeClass("active");
    } else {
        $(".headerSubSizeLabel").removeClass("disabled");
        $("#headerSubSizeL").parent().addClass("active");
    }
}
// toggle Products Vouch Copy Inputs
function toggleVouchesVouchCopies(state) {
    // Vouch Copy Label
    $("#vouchesCopyLabel").prop("disabled", state);
    // Vouch Copy Label Size
    if (state) {
        $(".vouchesCopyLabelSize").addClass("disabled");
        $(".vouchesCopyLabelSize").removeClass("active");
    } else {
        $(".vouchesCopyLabelSize").removeClass("disabled");
        $("#vouchesCopyLabelSizeL").parent().addClass("active");
    }
    // Vouch Copy Minus
    $("#vouchesCopyCountAdd").prop("disabled", state);
    // Vouch Copy Count
    $("#vouchesCopyCount").prop("disabled", "true");
    // Vouch Copy Add
    $("#vouchesCopyCountMinus").prop("disabled", state);
    // Vouch Copy Number Color/Vouch Copy Label Color
    if (state) {
        $("#vouchesCPCopyNumber").colorpicker('disable');
        $("#vouchesCPCopyLabel").colorpicker('disable');
    } else {
        $("#vouchesCPCopyNumber").colorpicker('enable');
        $("#vouchesCPCopyLabel").colorpicker('enable');
    }
}
// toggle contact PM inputs
function toggleContactPMInputs(state) {
    // PM Hyperlink Text
    $("#contactPMHyperlinkText").prop("disabled", state);
    // PM Title Text
    $("#contactPMTitle").prop("disabled", state);
    // PM Body Text
    $("#contactPMBody").prop("disabled", state);
}
// toggle contact IM inputs
function toggleContactIMInputs(state) {
    // IM Service
    if (state) {
        $(".contactIMServiceOptions").addClass("disabled");
        $(".contactIMServiceOptions").removeClass("active");
    } else {
        $(".contactIMServiceOptions").removeClass("disabled");
        $("#contactIMServiceSkype").parent().addClass("active");
    }
    // IM Skype MyCode
    $("#contactEnableSkypeMyCode").prop("disabled", state);
    // IM Handle Text
    $("#contactIMHandle").prop("disabled", state);
}
// Toggle Visibility of Corresponding Nav Element
function toggleNavVisibility(selectedCheckbox, selectedCorrId) {
    if ($(selectedCheckbox).prop("checked")) {
        //console.log("show " + selectedCorrId);
        $("#" + selectedCorrId).show();
    } else {
        //console.log("hide " + selectedCorrId);
        $("#" + selectedCorrId).hide();
    }
}
// Generate Random Color - Credit: http://stackoverflow.com/a/1484514
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Change Primary Color Pickers
function setPrimaryColorPickers() {
    // Header Main
    $('.primaryColor').colorpicker('setValue', primaryColor);
}
// Change Secondary Color Pickers
function setSecondaryColorPickers() {
    // Header Sub
    $('.secondaryColor').colorpicker('setValue', secondaryColor);
}
// Change Desired Site Color Pickers
function setDesiredSiteBackgroundColorPickers() {
    // All Output Backgrounds
    $('#generalCPDesiredSite').colorpicker('setValue', desiredSiteColor);
    $('.preview').css("background-color", desiredSiteColor);
}
// Replace All (Credit: http://stackoverflow.com/a/17606289)
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};