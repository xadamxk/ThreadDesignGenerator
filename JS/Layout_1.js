// Layout 1 - Header
function updateHeaderOutput() {
    var output = "";
    // Grab font from general


    // Alignment Start
    output += "[align=";
    if ($("#headerAlignLeft").prop("checked"))
        output += "left";
    else if ($("#headerAlignCenter").prop("checked"))
        output += "center";
    else if ($("#headerAlignRight").prop("checked"))
        output += "right";
    output += "]";

    // Main Size Start
    output += "[size=";
    if ($("#headerMainSizeXXS").prop("checked"))
        output += "xx-small";
    else if ($("#headerMainSizeXS").prop("checked"))
        output += "x-small";
    else if ($("#headerMainSizeS").prop("checked"))
        output += "small";
    else if ($("#headerMainSizeM").prop("checked"))
        output += "medium";
    else if ($("#headerMainSizeL").prop("checked"))
        output += "large";
    else if ($("#headerMainSizeXL").prop("checked"))
        output += "x-large";
    else if ($("#headerMainSizeXXL").prop("checked"))
        output += "xx-large";
    output += "]"

    // Main Underline Start
    if ($("#headerMainUnderline").prop("checked"))
        output += "[color=" + $("#headerMainUnderlineColor").colorpicker('getValue') + "][u]";

    // Main Color Start
    output += "[color=" + $("#headerMainColor").colorpicker('getValue') + "]";

    // Main Text
    output += $("#threadMainText").val();

    // Main Color End
    output += "[/color]";

    // Main Underline End
    if ($("#headerMainUnderline").prop("checked"))
        output += "[/u][/color]";

    // Main Size End
    output += "[/size]";

    // Sub Header
    if ($("#headerEnableSubHeader").prop("checked")) {
        // Line break
        output += "\n";
        // Sub Size Start
        output += "[size=";
        if ($("#headerSubSizeXXS").prop("checked"))
            output += "xx-small";
        else if ($("#headerSubSizeXS").prop("checked"))
            output += "x-small";
        else if ($("#headerSubSizeS").prop("checked"))
            output += "small";
        else if ($("#headerSubSizeM").prop("checked"))
            output += "medium";
        else if ($("#headerSubSizeL").prop("checked"))
            output += "large";
        else if ($("#headerSubSizeXL").prop("checked"))
            output += "x-large";
        else if ($("#headerSubSizeXXL").prop("checked"))
            output += "xx-large";
        output += "]"

        // Sub Underline Start
        if ($("#headerSubUnderline").prop("checked"))
            output += "[color=" + $("#headerSubUnderlineColor").colorpicker('getValue') + "][u]";

        // Sub Color Start
        output += "[color=" + $("#headerSubColor").colorpicker('getValue') + "]";

        // Sub Text
        output += $("#threadSubText").val();

        // Sub Color End
        output += "[/color]";

        // Sub Underline End
        if ($("#headerSubUnderline").prop("checked"))
            output += "[/u][/color]";

        // Sub Size End
        output += "[/size]";
    }

    // Alignment End
    output += "[/align]";

    return output;
}

// Layout 1 - Description
function updateDescriptionOutput() {
}