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