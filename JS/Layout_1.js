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

// Layout 1 - Features
function updateFeaturesOutput() {
    var output = "";

    // Font from general

    // Alignment Start
    output += "[align=";
    if ($("#featuresAlignLeft").prop("checked"))
        output += "left";
    else if ($("#featuresAlignCenter").prop("checked"))
        output += "center";
    else if ($("#featuresAlignRight").prop("checked"))
        output += "right";
    output += "]";

    // Label Size Start
    output += "[size=";
    if ($("#featuresLabelSizeXXS").prop("checked"))
        output += "xx-small";
    else if ($("#featuresLabelSizeXS").prop("checked"))
        output += "x-small";
    else if ($("#featuresLabelSizeS").prop("checked"))
        output += "small";
    else if ($("#featuresLabelSizeM").prop("checked"))
        output += "medium";
    else if ($("#featuresLabelSizeL").prop("checked"))
        output += "large";
    else if ($("#featuresLabelSizeXL").prop("checked"))
        output += "x-large";
    else if ($("#featuresLabelSizeXXL").prop("checked"))
        output += "xx-large";
    output += "]"

    // Label Color Start
    output += "[color=" + $("#featuresCPLabel").colorpicker('getValue') + "]";

    // Contact Label
    output += $("#featuresHeaderLabel").val();

    // Label Color End
    output += "[/color]";

    // Label Size End
    output += "[/size]\n";

    // Info Size Start
    output += "[size=";
    if ($("#featuresInfoSizeXXS").prop("checked"))
        output += "xx-small";
    else if ($("#featuresInfoSizeXS").prop("checked"))
        output += "x-small";
    else if ($("#featuresInfoSizeS").prop("checked"))
        output += "small";
    else if ($("#featuresInfoSizeM").prop("checked"))
        output += "medium";
    else if ($("#featuresInfoSizeL").prop("checked"))
        output += "large";
    else if ($("#featuresInfoSizeXL").prop("checked"))
        output += "x-large";
    else if ($("#featuresInfoSizeXXL").prop("checked"))
        output += "xx-large";
    output += "]"

    // text shit from features goes below





    return output;
}

// Layout 1 - Contact
function updateContactOutput() {
    var output = "";

    // Font from general

    // Alignment Start
    output += "[align=";
    if ($("#contactAlignLeft").prop("checked"))
        output += "left";
    else if ($("#contactAlignCenter").prop("checked"))
        output += "center";
    else if ($("#contactAlignRight").prop("checked"))
        output += "right";
    output += "]";

    // Label Size Start
    output += "[size=";
    if ($("#contactLabelSizeXXS").prop("checked"))
        output += "xx-small";
    else if ($("#contactLabelSizeXS").prop("checked"))
        output += "x-small";
    else if ($("#contactLabelSizeS").prop("checked"))
        output += "small";
    else if ($("#contactLabelSizeM").prop("checked"))
        output += "medium";
    else if ($("#contactLabelSizeL").prop("checked"))
        output += "large";
    else if ($("#contactLabelSizeXL").prop("checked"))
        output += "x-large";
    else if ($("#contactLabelSizeXXL").prop("checked"))
        output += "xx-large";
    output += "]"

    // Label Color Start
    output += "[color=" + $("#contactCPLabel").colorpicker('getValue') + "]";

    // Contact Label
    output += $("#contactHeaderLabel").val();

    // Label Color End
    output += "[/color]";

    // Label Size End
    output += "[/size]\n";

    // Info Size Start
    output += "[size=";
    if ($("#contactInfoSizeXXS").prop("checked"))
        output += "xx-small";
    else if ($("#contactInfoSizeXS").prop("checked"))
        output += "x-small";
    else if ($("#contactInfoSizeS").prop("checked"))
        output += "small";
    else if ($("#contactInfoSizeM").prop("checked"))
        output += "medium";
    else if ($("#contactInfoSizeL").prop("checked"))
        output += "large";
    else if ($("#contactInfoSizeXL").prop("checked"))
        output += "x-large";
    else if ($("#contactInfoSizeXXL").prop("checked"))
        output += "xx-large";
    output += "]"

    /*
    // List Start (if left aligned)
    if ($("#contactAlignLeft").prop("checked"))
        output += "[list]";
        */

    // PM Enabled
    if ($("#contactEnablePM").prop("checked")) {
        var pmHyperlinkText = $("#contactPMHyperlinkText").val();
        var pmTitle = $("#contactPMTitle").val();
        var pmBody = $("#contactPMBody").val();
        /*
        // List bullet (if left aligned)
        if ($("#contactAlignLeft").prop("checked"))
            output += "[*]";
            */
        // Text Color Start
        output += "[color=" + $("#contactCPInfo").colorpicker('getValue') + "]";

        output += "[pmme=" + pmTitle.replaceAll(" ", "+").replaceAll("'", "") + "&message=" + pmBody.replaceAll(" ", "+").replaceAll("'", "") + "][b]";
        output += pmHyperlinkText + "[/b][/pmme]\n";

        // Text Color End
        output += "[/color]";
    }

    // IM Enabled
    if ($("#contactEnableIM").prop("checked")) {
        /*
        // List bullet (if left aligned)
        if ($("#contactAlignLeft").prop("checked"))
            output += "[color=" + $("#contactCPLabel").colorpicker('getValue') + "][*][/color]";
            */
        // Text Color Start
        output += "[color=" + $("#contactCPInfo").colorpicker('getValue') + "]";

        // IM Service
        if ($("#contactEnableSkypeMyCode").prop("checked") && $("#contactIMServiceSkype").prop("checked")) {
            // IM Handle - Skype MyCode
            output += "[skype]" + $("#contactIMHandle").val() + "[/skype]\n";
        } else{
            output += "[b]";
            if ($("#contactIMServiceSkype").prop("checked")) {
                output += "Skype";
            }
            else if ($("#contactIMServiceDiscord").prop("checked"))
                output += "Discord";
            else if ($("#contactIMServiceXMPP").prop("checked"))
                output += "XMPP";
            output += ": [/b]";

            // IM Handle - no Skype MyCode
            output += $("#contactIMHandle").val() + "\n";
        }

        // Text Color End
        output += "[/color]";
    }

    /*
    // List End (if left aligned)
    if ($("#contactAlignLeft").prop("checked"))
        output += "[/list]";
        */

    // Info Size End
    output += "[/size]";

    // Align End
    output += "[/align]";
    return output;
}